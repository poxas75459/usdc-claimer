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
    "54TWT5xcpL7Ge3m8x58vXvzuirTSk8e7Tfgk16VHqP2Arvg3WPzsGdAbwAbXrFX2hP9ahDc6piDtU1M8XUZuVssg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aV66Sk6bEtrxSFJMkxuimb7HAXMYNxqhWEu4MjEgoj7G6d4utbT4XRgJgSbV6Vu9j3EBhoqjHY7FDd2qTj1eRqz",
  "key1": "4zoAA4rGWaYTwxAmTt5ksD53hiorFq9RjfdwKMBw4XYXSdtfzP6C3ErXGQZhbqyb7VWqpytbkbNzkdWs46RH5Bg6",
  "key2": "2m4rKr8LSAF3iGeJqmY19NufEfRekntiLx9V6PucdVG64UY835uYdHpjaba3QKN8CUY9643FEbnJ2TNqrZb2twAb",
  "key3": "j89Q8jW8vKGWHeqMZrnqyh9k5cgCRJnRoqG1tGnxbN7vd3mPZKrnw7eqq4N8cG2MNq9AcFC5wEFTYub5SWJK8Sf",
  "key4": "2BphXhYVWAAXTDLoKQbVybYxvN3HiQ1ZyWwscHgfPs18Bh3kB44hxvTgDNiYPLddy2Hqo8hwTm6B28v5oMJseQwS",
  "key5": "VrNbaww3ZrN3EJmWZs7hXu2DcsTPKBpCixH6E2Jijj8ryyjAzErPoRKHX6P2RfA2RV8FeRRR6SU42MSbdGp2j3i",
  "key6": "5HAHZv65Jre3wDJKnfwgsWnmYBY2Ngkw5abJduguTWnhdfiWvdL4TQwYWP1K9gw4WuzzVH5zvCF8WmtKbVWSPS3k",
  "key7": "gESu1QLaTAM1KRK6DLyHWZEcq2X3SPo4W9WNV7WkHndjqhdJXihGQAWcL7Qmbxwxun1cRL5VD5aa3esg95hVbUT",
  "key8": "5ybAyqX9SukHQbduoRMK9An1vpTBs7dyXRea5Dkit1idt3aJXu4Lx8ZoKkNi4B8RKGmqSLBjTQr2wKN34bmyy8mn",
  "key9": "2udKeNPSpA9oiGUUKzc629x2xrkzhMUtiXjrNwwCX7oV2RLpDVxeEpWtakP2DMax3mACt9Ndpkh2dXfxHkemM8dT",
  "key10": "s2kdebkUBbbGC9FTeqYZwYN3UDYxNoGzDimQFmqg4q2hUdgBPvtnoYXprq4CLcLtP7DJGEVomfjSa3WM5ZbWrYq",
  "key11": "49tCwGtKMMsJEkRYKaYVfH2445p9oXYEkfcNUWCpKbQkSmCnLTcgc7hhTaLwzFaTHqoXWbDure2UzEPaeNVw3pM3",
  "key12": "58sG6x8yw2YLA9gP8ZdM9h1oWeiAHh9UKNpx91T6dxokheHZHLjfS2UBUUjPtFLeJuCG4v882ffUWP7xaQuJB5g7",
  "key13": "2SCq2PQwe8dwEZ2M5QuEJLSgEham95ZTXMYFgNeicgAp6k4aGtvKYLbp11mJpNz4MqHQreFJ6X2p1WSrRzPUPUyS",
  "key14": "5XhLVeX8n5ZxxsNPWTvutX5Ug7m7ytWusLfdqCG8v8QSPE95b7JQfNnupTkwGprgV5DuJchwDKaaCzqbZbM7PP4b",
  "key15": "5sSfHBRgGqrxVh9NUaKFhXmxZ9ke93WmWk2m8Muq9XU7fWRwSWR5B8zzChKsCaGJg5vEpECaFtfrMmHrXvxqGyEQ",
  "key16": "3dtN7k1bGRiFD6PzrfLgrpaWgvcSf48y8EEQiyd9C4dL4d3GXGPSGh8M8apy3d86BEkZjPgCC98jRHcxg71D4t5D",
  "key17": "3j3QBDDKP8jQngRLFismXaUfJ8GuQ3Zk1JnY6EPMi3F8fTj3rKkuWVsui58rLSWwGHuTwVpdxPkiWk9TUuWVNUzr",
  "key18": "2uSNr3e476HbJQVwSxKKdRt7gnrCjn36m46fXSvb5LfrzW4HnMi81KGgW6itd1rtrXiUwGM11fTpuvJRMgAaRWKb",
  "key19": "5sfMrEej4yWcF93M2enAFbWcW5HGZ4XfAKzqB5myqL9a22APaJTVsaFLpVohhDyU6REoB9rpAqLXZz32EiL1hpyw",
  "key20": "3Ss1crA9tZKfsPXEg1XPCtLEPJpnuPNN1Jx6c9fc8821w2Vyt3YRXEEAWMxvbQ9To99287cnhmwdwfpjLrQspNL3",
  "key21": "34x4wQjM61nu24Jx8k5YjG6J9eVDCF4Zbeamb4GCKAFzzMRACnNGaejdNATYfqFgNF1W8MD4aFxUB1a5HaK71XUg",
  "key22": "29Aj11UG1pDe5atEQdA7NbNRMz7udqyjLnKZg8h1CZQx4okKE8LySr45SRuFx2jicTzKhcfBrc3TqJLQ6iLwnfyx",
  "key23": "2mKq5Qc8vVqSqZddk84QSLhcWAVp3hSo76WKApg8eAP4qsXcBNjAYz1tdix4dfsAq4N74t5t4QckhvrmH7fgXFnT",
  "key24": "5L9JRJmN8VXEWrPQdBLXf74qddV5hfCFpHYRk8JNFMMGBVo7AxKrb9dHLiNqafo5aDLh8cvy6FVQEonr9uN3tXiM",
  "key25": "2HmtkLjua7FsSuZq8z9kpmAWyRB3TDpS7gVGqwFVH85Ms4YRp1YfGFF4fsbRSm7kd5oGVqdaKLNfVFgD5FJAHHSL",
  "key26": "3CRbY1ucpWKcEop99YGDRssxCotSpeCcAqEorcLCJ7EV7YAHSKg5r5jqobPWR8WY7dSyCDzyayGk95ZBYKauxvzY"
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
