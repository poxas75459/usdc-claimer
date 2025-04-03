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
    "31DwLgF5udFfRxHXihyVNpn2Qq2LTZwmH6ddbzathZLH61F46QR87NCapf6eF3vHSWGv82G61tSHBR28PDgurGBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41pkUYt5ZvezdkypjSc4GgdLgnRrg5cLKAvj5jFByGcUui8bF4inHJ2RtaPY4DuVemH8ahu4nTPW2vvhJqUQDDAK",
  "key1": "2WVYHNsc99mh5ecEwRadbvcMccdpN4fYp5ogGyajSkp63XBmnGKzTdJp4QiGt5epE8Bk2ibv8dQnzqTJLygEnajZ",
  "key2": "4bshYuMxDZQbD3BqtFnpP2DNmFdAA5U5MSoQ4eHQm2zCyqskAceaDwEbrz1qD8w9RnxipN7EeMk85a15tjBhkrwY",
  "key3": "H1bvS5yEpLNHavnTAxfAnLRrhintfsXq1cmWB1sD5ct9reD7wTGrPsChFSVSjBQKWSZEp9CMjUQz73v1dB78SJa",
  "key4": "4bi7foMbovPSEfBKLP53RvBz13uKaCA6hoUs4prkEkCaXpkdbNqfwPrLbUFD2z85gq65TcqqY743YGYW3EvAePhv",
  "key5": "4PCbGEsA79NztrK359FtNrvXQi9dnwAa8XXr4j89xsJnkp8jLheJykHT4kkahhD6opnm212nrfpHE3ZbJjwcgEG8",
  "key6": "2bWjME1FLukGXZ68VTaKr3ieTJv6pwa8ZUAe4qfZ7YUee9wbNfDoMk5kGtDMnHgKHd1yqi5ZH6kiBszZJpxZP7Wo",
  "key7": "2KeoadEfopdea8g2TCUxSMHUpqyQjdgHBSjHaxPuQW6KqJNLsqMACX6rMRbi3TuRZHKb1H31JKEfy8kyWggPfsvj",
  "key8": "613SVNwe7uim6CPXTt81mvXBaGR1Tv3XHBeKRGUtX4V6VcxNjoXAgUDLVRQPpQ1DXxLUZFxXGYidJfTDT81bXYxv",
  "key9": "3UcQySgf5zq262NdW5BWPa1i4BuDYQK1Ltd2v5jZKTpSjL5dWYdpEm2w1cyNZCj3QPN3S2CFDD5MEYBPFb4pz8uG",
  "key10": "4TtNNM6J5KwYdnUJLstuNFj9dhYANMqdb6ta4DtNrkAnrmKHLRv5ShbxRPmRf6SpJ6um84isnT7bBwYoUn6bgNWc",
  "key11": "2rAnxUj8P1GY3FgCPjMELZNJs3kC3pksDt6y9dSN1A4DqsxQh4vvhbou34f46YrDN5eVFZSQbZPrF53CxQLXS4zk",
  "key12": "2p1mp2SGfWTBQMrCzWtYpNowv7PBTKWqGWQXQq4b5w2QtuBTS9PBVMgjwfEXeCZHmuxHUPDR1NHgpvRY8zYActBM",
  "key13": "3FwgAuNcowkByCzwSoSdCS5UfSkfcJHgtbawUnfdWwKP8FwyeptHGNcw46fjT8gJVLSjT1dkphAdUTVfz1hp9MoU",
  "key14": "4V9Mw8cbycVUwKDd64BAWGt4Ny3TXfUnxUHYM86mFiX666htWKwzeunFDuDXJiiMXcXYZCuKhKRTUZqSKFdu2w6g",
  "key15": "33ZUKosq3wAd9TpgYBRv4CsXenz87sHWUNFwtyidpAGiPvUARowdVgmmuVXc12QTPemN5W4Z9gcdULQLQ5zx6ncx",
  "key16": "y1noe5hPtfu693MGT3AcMQoQp9bm82iXzjZPsCQCxRvDaG8HmpF6NdtUiijT1zYgfWyS2wPGx1YK1WDf1orS5kV",
  "key17": "4UrV3WRdfSWL1mLYiedHu9VFJwZMwdyVDopp3t8LDEsU6zxp5vu7QLbt1o7BHooy1Asv6mxrkpScuaeseYHvpgCg",
  "key18": "YHBT8agobZK7BRkfNXutb8MJkvQgX9sZQi4aBsU736FDQkhuJtcFJi22jZJzReLZVVjGg6fHCR8DMLe9GmvZ2Qz",
  "key19": "kTEb3y1A2AeFGnMpKW9yJvT9FJjCCHL5DthyZsyaAuCdJ4PESgQMDi5otCp3qyoMqCFw3DPbdea6ktcSyQZMouH",
  "key20": "2sWEZV9ZYbZP7axFVygSWM5Wghe87T5Mkp44rTzKMso2YCZc5xaAsTB6LLbxHB4wc5FLZRhsLDS7czoG3JQbNi1Y",
  "key21": "3r2HFxrou2Wu8UaVNnKkhcvxucrqtyyu9pe2idgz4EG5vQiqEPHoakBYsb5JdjTzGdmVP2YsJEZat8pKeLGDKzdx",
  "key22": "4Xragq28H4P8RnDEmY8TC5XBTzGB711rQ4rRf2mnUPcqKaFFwNmBBkMJH6VKeCowN3VQDp9JZWdV8doAstwaEeKm",
  "key23": "2XfXYoXaotVhZpZTsLAQrMScy8zx891KmZqvv1DG3UdhVfpU782oo5AyJ1hxVQTB7WBVB3qJ9HrGCoidkpjuqsxs",
  "key24": "4ocmZyVFt36TPyDALEtbhTPweM6BLFutzTKFuGGZfHe1zpTVkiMGnicuH32cikLsRoDjMqnUDJjNhGuPWnbp9EHc",
  "key25": "JL6yjTpnK7CEzn3wU8fhUekLArHfiAFHjdJz3GrjATV7ShdiczXmdBLn3Z4ZE4UhoZfs86XaUc8HTaFK7NgHTiq",
  "key26": "2utwVYk2jZuDciGBHFVqsgxzJVNKE2kt62V59JadKXFvkrzBGuYBUoTYygYrVdrqxjTEvd7qdrVUiusEN6gSBcrN",
  "key27": "bQsvWKns6WRCswjWyu14ccbovxG4DnaDL6EAtbWTibosM5HVmzoGQjGgT4Jsp99d3BNeL5bGvNHJEQct8iCzaA8",
  "key28": "64SW5henVp2Ap1kAry4otBNNgRt2ufDZkawtJAz9y1dCpQVRvDgQTJr6zGrp13jYXpCkKCdWtNmMVaXdSXrwMxVU"
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
