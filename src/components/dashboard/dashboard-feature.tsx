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
    "1g9GVTm9Tanca2kTQMBqMD3LB5kh69HkSxhYq9GJ7RTYtw4rhemwo33reG6G6HySn7pqARwcuC2zcVCHJj1WTej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUy3irTAvUjXyxbp6QnKZXPVZdEyXhqvddiVRg5dw26eTFEfmEfa7aBXkTe9JhCafhhozXsrfKc2GiXzLtqjPEW",
  "key1": "2UnUXWNswCBeZo3TCYRCMDmXPoJknRCEjjBFSzfnLPr2hkt9PEBtdFrBLm2dJ71Fqr1ScZGTdHvCB37yW54HhwFY",
  "key2": "5QtqmRxGCTN5XGjXsZBfhejnezRnFcKvHtNjt6G2RBp5uQhrTArpd5wE2nd4a1JMBXHmePTdpfPChvQBwcaQWaK8",
  "key3": "5cerCRaBtqPHrUY9XhgmziJZ1ugQo8NN8ofCRZwPfh6GxWkfpmiT5TQwRS5gnKLHSs3Mp4a5HfiDwNDVgFtK4mtV",
  "key4": "3qBRJyxHG5VbkhKFtTWxHAyXmFiAat4HHmh6Dz9sWYvJ8Ne1STKkxrj8kybRWTFzPN8E1unAz3g8P7q7gN2mRn1U",
  "key5": "4wmxEQtztrymyV9RDzczqpcHEgMdbMNsJg7anJzbQqtqz39bxbhozg5r2WprgAPhTkhfuuyqzi6VzPUByszNsCH7",
  "key6": "572MjNqkTWN2guUVFidQ1YadVrSdfK9nMPJS64yTexcPeQjYzVubk4TtEvTg6wapgcMwgy2ctozqavPS8XqeMv9Q",
  "key7": "eiWfdpXVy2QbLwkZ9Mk2QqaWQrBUisArGnwse9Ycm7Hw3jdoUvqC7PLkNyHJQE2fHYSXY4cCiHY7ZAVk5rizoYR",
  "key8": "4XzipG6KVMZjisf1Qt5J32dSp6aLKPr7hE39EKy2YVh7a78wBo6MYdKwmvkkSahuAA9Lc4W98wq92DaUvVhnj5z8",
  "key9": "XqfnEMNqJZ8AABdt2eBHEKz46aw4dHakJxR7mwCTctb9kyZ6T567y71cEYwJiTuCiRqb6GtJWd4tUufuzMe15Uo",
  "key10": "2hCrKt1ivjwj6pMSjmpcEFqwxq79672rQWFtKdHAPta1WVaXgn832gRbDwrxaHGs3npJBSCQBseytxYko4y2Bxev",
  "key11": "4GBDyQ3evYHxiuAMQK9rGQJurLWJx8jRn4UxiK8x6mP7idLyhitZoH2ifZabV7zw5KQcz9Hp9ZEtxBtZdh6c66kY",
  "key12": "nArPxcg5HPnEf4vygWL5JCNsqujeZLtuEsX33BK3YBuxUZ8rLXDZ7bBxt6pkevkonf9qRYcLcLLxCcLpDXV2Zw5",
  "key13": "vHPjZ5FvyrinhrrMptAsteNDoveEnztWxvvrZP7QDR7Q6uez2tLDvi7RVLvrTygSAQRWs942ekp8B6c8VmELb9d",
  "key14": "2KkSMgfi9MB9jqKBzxiEWWAYDcRfJ2FYY2iuBhK9ANBpeNWYn4Th4TYswS6sx9Q5DBrTam39LPxsF64RsXBBB11j",
  "key15": "23zJgsGWdWY2RTss9En6r48V1Mf6xSsSNfNFLcme7VqVZuBBU2uwGZFCoMsgGecnNe2BEi4a9gY5xWnH5jCU6qPf",
  "key16": "5nMzQ4qL2KPkm2QndhqEzn8b5NZszp4fNv65ysVDT2cp6MHs7UgT7Q89iJEA1m6dK2cNgQZCmxFT7ZqMmdSaN2jT",
  "key17": "3crFdPgx9CDXZ4AtEe1yxWFU6Dsr6eXH3anMseA3GHLronxpG7w6BFMGnuhhVSFhfiwf4HcgFB64nsLSjeAYorXr",
  "key18": "kkZRncFnxTVWmhegpPVGTTA8tHTemNPq3N2pq1m95M93f1tmuV3kZDg15CtzBhz5y1aZSZ1rCAEqKzEQTJtpVQp",
  "key19": "JzKwC42LmUx4tdj27FddmFMaV15GfwoyNvrcGChF9sUSb3uVsR7z3UCoZTY2cVhdmFSRYwDftVJiBw4kkv5xm32",
  "key20": "wFohUe87Fd47f5bdkhG1cVqwZ39K1F6jL4v9tFLKpq4zTE3bBrqDGFyHAn6bF2sXNMDft2FuZnKGNoi7xpnh4Es",
  "key21": "46d3pBhim1LrSuWDK7LFq3aQpTEKWrQiRXLEEA2fymNAHcBAM69NtkRUwbv5EM7jrdtEBkSZSbZaAh6Zyx9cmEYz",
  "key22": "5TXpD39wDmK52Pm1hPdqZEcxiiBBbeAfU38HQ1iKTNyrpXkdV4H3FUpwdd6JxfQXCAAYWme59FnZuh2GR8yxs2n8",
  "key23": "XUj3ewHLWePq6BrdyZAq2vWFv2zseNt1pZhJuCrbjjjt7eKZpvXThV3brT3DaZZTD8uUT5aFfwqErkJTRzEzt3u",
  "key24": "5YE8b4VCbTMbWCjtek7ARo5YSaMe8ss4yXZWw3fmqcbxWyzH6S6GTa1wADRyYbDUdc344M1pGn5YLBcWQeYSqrSj",
  "key25": "3o2g37KWJGVBnqrXC4QuKqxnb3csVfA1jE74XSXyneDk73qeqdDLYsup1CBu3HeUdMvbTppifJ6gjgYu5dU9UDGT",
  "key26": "HAb7MApMUprmAbcdbEPJuVDeTmsL8SKk6Xa8qfAqbae4U31HqYTqxaspu4ieFLzkWcmumtWvUcdKwVXfSjKDqCG",
  "key27": "5rKgAo1EdWAMk2xDjyFp6F9nmTyeumK76QEAW9gi9E2PNwdTtENXXex6o9Uu9FBmzJDMXnw5cZNRqwJdWDfjvaqw",
  "key28": "3y9JeGphsoTut9YVuAAfR24XMq4DHeZCRRZvRNcehv3yAZXnMdACub8VR6tgE6K5BZWxZYzxCZQw2WcoGadE4csj",
  "key29": "2xPfaJnRW3JNNF8b5RDb2jGFjj2tdBVF89GSpgct4fwAhtz2vkhfoguEAqY65pTnUs8NCAw5zMeATGs5Lw6vejWs",
  "key30": "2yQ6Ex679ZeFUi81P9cxZ4sdJTMGTCAdpCWcF171eRgMhP4t5DiaQ2eZ6iQ1jVpCsGqeBhP2FqAAMcznwVRXDZ76",
  "key31": "6oT9cJu3n4vUAF7UUKN8p9wQyaQYWqTsLZCMSQwE3HfLz7CzhXENeaDR6w4tvuqs6pdAgj8TbCcXGxcmbypcJjq",
  "key32": "629AQ9DtyipW9yN8rjzm2ZfX8mwejGqmxaZYtq5pZw8JGQdeuHHaKPR9V6R8Xw8gW4YeWUGp9pEBLEiaNHoZtVLD",
  "key33": "5a9eeL8oDjyjh2FDK1VmFoQBesZEsnLYAwkjyJyS8jiNPL336CqbvfcCCnUnhga6SvQSRFC17KQL6rxVCTYkvbj8",
  "key34": "RLP9iQPvvnvJvnAVEFwxS6VdGbyETyiNdzWQsFEvLcHFccrMwV1mPgvD3BVdJC41YjX6HArdeH3C5DF5ecXZMut",
  "key35": "5uQWfKXK2a5Pi1nCd12BVAxLR6A6sSTUFoG5rDPPcfoUnUT69rzDxBfHbeUMFDVjTTMHaNQg1RvXxBBFY23rX9bM"
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
