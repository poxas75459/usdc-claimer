/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4BpRSHTzDXkuNxpjPztganPQ3UFQiDTf75ga9aCEF7avRfwh8YxfULAv2weAzDeXiHVw1GGksbTgtmXBmcBaojxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3L1mTjGq91WzUcNjE4jL84bNeNAszHoXAUbbw7AZsrc1s5jEjGRbFAyUgBKvPgznwpqJNcpfUsmNC5uYm9SWGW",
  "key1": "3URzGQ68Ln88wGaFXCBGKUU6yxmpAz8EhuhBbC7jhzKgPPN3uQRr5QFy144sHPy4CoR9fU7mB85FdrG2Ygrk6wJp",
  "key2": "4dFACEA9RAd7Xo1FfeaJgsjryvEEdtLhAr8v6LtbKD5oaoBeJCjz35gd4YLyEtgJiSX43C1u7QjVkNRAB7Wf4Hy1",
  "key3": "4JPmVjuXqWUUjFgxSpC16Tv8rGbKZ6Kq51aSdyLTzrRJv1M6EtRw7sFTu3ZkZ45FAYsfzBQUSKnfGCoDoJa3xneJ",
  "key4": "4vvR8owCW7TkPuroYUSnvzS85pY2YMtDRBWdsBoJ2vwEZYnkjHe1sWVsF9zjK2aL6DDtpjuexCLEVjoGy7VQHxDg",
  "key5": "2pvH8PFrgchfvYDN7FwwDJM97cPG5hddkPAtVtGoxbrNTNgB7T2pdgSDDFUZsn4fL1Qm1AmUXw15Cf4MhUWNktje",
  "key6": "4KHXp6kCtehSahWmFaWfqxdezoBPJCUbGKSFRmBh98wGRarMdEiDpJHrJP5dgicxjzLaxqprzVo2DGnizwATDJz5",
  "key7": "4rFV4XwcRrsuqmhAo3tZqnzd8Arh5ex2NwHannsY8rrgbjwWUjWf4rcA8A3NHA7m2ZX3un2Yo21HiE9TLTcVLu6X",
  "key8": "4qtNXXpxLfaWxijQpc35cD7a7iQMwS8Ae2jeAhnctgM7zN1imHZzqqURBg6y2xndrTpmYV4rRJ2bja9wQfT6uzDW",
  "key9": "2SjBEzxbs4Wa8MqV4EekH4AQVuvvmDALD3uBkd1UE8Rj8cLw7omZSemWNMYiumHTb7VTa6v3nGq9yPfFptmVNqMy",
  "key10": "3iRQg6bCYVKv7TYLkyuz9xU9GsWoFjMEusVJZ5owJe4UHQ9EjmVFuD9DyxHQo2CyZ7LJbEVWJDTCPDtTycaxyhYy",
  "key11": "3tkErYFw7eQwNERnRzS3UbZyPCa1xKZFxSEurQnsE4ezejaETYRrfrwkKpMsGbomGwe8ztwd5x48tx8NJvHtBj84",
  "key12": "54rM1gyvBaTWRQ846yvba2XdvUiF6gX1tERFNhAi5K8yQTvBcMkA1PtUma7MbkiweDGSCLaVZqGPToswjsURqbNn",
  "key13": "4n9JDsMrHnvVh3fzVjq5Co5sbLqPh9ae3SbNM2CqS5GMzm3KP9soS7eDKwcVMBr3gDn21FyiKWrbXTxnq8zpKe6f",
  "key14": "4juf5zVjPAHgi3xKyeoKXxXTQaCBBYcGpx35GmbG2dYBqdQpyrfNoGXvAECvw3w8qtUPXhX4buR7Hj2WsaviGYEE",
  "key15": "3n6pqFUd7RjbYA4pwz6UgAszbZcRgFfWhuYPj8DpQF1CiJThustYNDw4C1MJhqwFJ8eYzVQjDL12JQpAi1u67GGc",
  "key16": "3bGtec3ypEzqhw3cEefCnFdeBmkuH5SAEgu3dRU3ubH8XEjjEez5cKSjmtpBfahTjRtJT35uCWHtLGcP94qhJ9qi",
  "key17": "3cQ5YhfBAMsrN8cLXugC9Ygx1hUkrY57qFiPREQFwJvXzFAY4iohbdqvCYGiT6Q9Ht9coM3StMVoURGK9VFrUkUX",
  "key18": "4UEgAV7GsdxqkrdeUb4Uwif6iwFtefpGii7U4EwiSvoUNWdo7mGDMyw5pvVw2DSmi1hCNDKKbXNFpja3J6W3rveD",
  "key19": "4us2igXJdspRV9Gu6ETddur7hhCgECmsswQSEKLSLYKfdcfhrqweyZbX8BEQgbtHXRkt1JQxanJJPz88srTdku4L",
  "key20": "pb59CpCCwveS95jiQmi76Y89Lfx2NQWX8L29kaibvFxSgyBMbSUBYSHXvuBQgtJJPW3XvTR5THc4xJQfQLLzFC8",
  "key21": "4WZG2wDf7DA6SAin17zaPG9Mypyf5efwzoBC51tEjhpi14tYt5NTdM5xT4hnFAF3YZ2TNWAGXhDML1BHfbm8xxzD",
  "key22": "2AUjgyrY2vxnQhrDkSiNa1KxWRXGC6bGR3W2HSxEogXYA5ZXAFnNGYrEsw6uYvxfcJzvLzeCretPHc4obqgLeGDJ",
  "key23": "5Joj1mQT1pPQPzwMnWGw9KJ5BcxPoeJ6MkH4buZKyMiQMWnmQXXPHNpmnMLR7cKwS6PminGf8DPmUKHw3RoVqRrW",
  "key24": "5JxRKwMd2nNfY4hiJcPNKsTXTaSKm6tbMBVQhanCo8gA3Mx5PnWfR3P32p3CJEKUPFu35LwHrLMC8To2m52M86Wb",
  "key25": "4APeMqHwFPzpLjx5RdNXR3AkVewK2C1sdBVtYiT1aBFfg1c43YX7VTueNcTtAxdz6VVvEvLJN3T1QHLUMnR3yw9s",
  "key26": "3T6Dhud7gXtUCZqqyPaGGjv6ckQQeRmJzfpqYLef44s8x7qM2XHt9z3Tur9KJuRkUkK9B9vfCiVhgfvVaVQviw6g",
  "key27": "5cMVzenwt5kkgNtUduvCvWG4E7nSiSk5e4CxeKymqHYESJAQ3Up1H4pf2Nno78PrKbdVkC43gGU9UnNoiWMZK5Wx",
  "key28": "44jqZD3KWnYsmPMs2Q9k5MsssA54d8RkjRxSZnLw3EPXymbqTZoGD2qUatMMWnFZJPCc5qM4vfLcasUCCXMLVh9V",
  "key29": "5iPuqVA4GSNZNRLgNZZNaWx3geRSC1AQamoV4HkPfTCTZeeirEo2RWEtFyu1duZG4cWWtUYgu8KXQjKinaqz3AWh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
