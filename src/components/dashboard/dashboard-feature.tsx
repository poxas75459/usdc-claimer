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
    "4bwQGrWrNeDKHGp5Tkmu4Wf54UpNBBJqxLR5CpNFw3v7cxGsM5Tb2jJMippti2uHfDbyr9CFBJEjfw2DdCQEZKR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Jdb4C4GBSifK5fwaqgGUdyPpARgz7LoWZLHRHWUPBqYQtshZChZaKLRS1vTaVPs5sxtARCYLJ84hNaiHquU3Wm",
  "key1": "3psJYAHUKWeQQe5Gaw2Us9aJ4Jau63shkJszKj2N1MZRZDYdtoWpL2mzhBt4fdyjygnUTzBQAw7C5kxL5gMMoQhb",
  "key2": "5nKvyaHXc9mMRtBJWQBvrZt6urvRaMsLHjuoKnhYCGMYKKjYue8yDHAmuBrvqZw7hRWVqPrKt4vq8pLJjzaJ9xKz",
  "key3": "sFf4d4hxCDzZQVFLxWyggJY5NVs78U1dzcieQD3z6ahuKXMLxm1asgHPXDYaGsheUTUBXmZXu6YELQjpjmCV2US",
  "key4": "51v2YNDMCrwjyLm8JLu1j6SndMWEAQSLRxfYRzfEsukcSdX4HLc8gmvnPoKi3Wk6M9cGyQAbUYsSrcAyTgEQyZ9c",
  "key5": "4FqSRczj9aSvKproh6g8hFsisZ2W79kWUh4DXnVH7hiN9NUPE79kc7GwHYTYKkRTQGAiAtC5MXZtyxzfc37Tpkqd",
  "key6": "47aCAyzXUKmngiRhNLQYQ2iQvCrg2p3DfU3p8t67hxd6qMJv2zacEZp8cWzcPCNcyQa4mbQu491irbhY37mmLfau",
  "key7": "UCZA4cYJM6HWU4pmzhrVhQ2Cgg4nQ2Beq26sy8f9CnLDeqLjFsvvushYxbeeQDmkjsW7fwe5uX72QnJUKHJBVrT",
  "key8": "3BAHyTM3qsKW81jEWd1hWJGhEkUa472ybHS8ZpugVVexhGmWfRoU3sccJWLPUvPo9xivYv4w7QwxEzrFhWyNexyG",
  "key9": "4F4QJjCvufFsyj3M76Fn51eznFdDwK7mrdBEJKYkj468RS256t8nupigfNbjGPgBNb3MDXmjQLdDmZfQCYBJAKHY",
  "key10": "4XFSGLzm1tKLQGyWDsh11s49SPTNwfHmzG4EPPx9h7EpG3qQ5k9dAAuTGP7n9eUpGV8pDHpdpJYvaSj1yk7q2GrQ",
  "key11": "2a22KrVd82T4vD6ANAaGn9rye7XSFW1TEizQnyPAtETFKMh1NRnvYXEZPHmE5pte6ZQTdULQFKjwYYRcYgnMaqek",
  "key12": "2jCG4NCRohv8oH2SdoQBfv538oJDLzhRXdT65Tq6opZSoksshpr3BaiG7JppdjjaCwyYtgAWNicUfC3hg33ekNvu",
  "key13": "3wbe4owUhmfmTcyKbNgyU1XJcyK22ZrdtjkWidu6jVELgRhrM6ofY12oAjdC4L32hHUiBeCcY2Y2SanxEREEAtub",
  "key14": "3tLjipWmAMBJJfTY31Y3gUEQpoCR5oxfF1Qq8DpSERRrvtxZ7JvtemimBCqyoBVabxFYEU1ZEyv3VCdmbPXQ7BiQ",
  "key15": "rsBahH9BaJJ7Mj8CpgCG1mCCvHConea5DcqD7WNJzUvMAQiuEmm7p1ECAXuYPqV2dfoViYTWsFji8AuUSUfNQxE",
  "key16": "3g3X6r4XvZQ8ATycJn1qwNvPH3W8VdcYbMaVViYuGzKYiXLCEopbQooGTyKGbtebdjYeX6pxDafWdJzFBb9FvqgQ",
  "key17": "KuK9MzJJPx2nwN5oDLhmf54RjSMTrRrXSuvnzy9KMXvE6dr1rhcwPoegqrSXLTfXpDMJKEzJdiXHFVG5EQRc51x",
  "key18": "3Y6FXSkoory7aXJqnNVRD7r5Aa6aMG99AtQspJEj5cyzrohUAXF8zf5ffaiLr4ZPJjjqrch8crs8PAF1YsNXRqaM",
  "key19": "2zaTaEUJsG3Z8zg2YqkNoCeNsKbz99VyoSVj76aZW6adTF6qxKw5hy8Nxqet429VQv8DiMGPH1EuyptGUkAUfSB5",
  "key20": "4XNpTbjsDaa84jca7hehxVF5fjvCkFMpzNmYjhJQ3PNqLY9K7RAZ4b15zdrU5P5ReojY3LnJoz1XhJM347HUT7c5",
  "key21": "5qxNraCZ8kHJFcaGWD3NJEaS9T25PLjoPHDw5g9CSb7nJFsH3HugKvH3mRG7LwJymHpXDcqR47wX5vZRprftXJiw",
  "key22": "Xf2CpUde8dAWfWnTsm4wAciNSinuf5sy1vdHnrnvAA4T46KYPVAHfobM68d5JPXc1GNfkBD65gaBphFsxDqgRi5",
  "key23": "56eem5EZ2yWd3cd9TayqJ1MzoSwUFbL1GkV2v4sAyBr3MJLvgFrYMFYASnwLNypfANr5g5TCLdeR3GBvxEdFcjPr",
  "key24": "5HJML5mYKBvSBjoQbe1CBq1pG3tjaNWzdGR2RLNNMGSpCfSUt7v4j2M3Tok853bGAcL1KVjXauYoSXRhu95ctn29",
  "key25": "3izZJaQpUNzCsGMY56vR3xj4F4zFVguqBFM6bH68w4mrCP2HgE6azuEfDdVqqdRcKeSfBj86hozmcNRfvGm4JAot",
  "key26": "2J5jKY5rwEJmTgf8kGB6WMoCXCgE8oxUNZMuTumSPHJcVLZgxhgwAxnmLvnCi9bfFQ7ujExRVjqELMHcPZN25LLf",
  "key27": "5BSDaiJHL3yG7CTb4hi1jXcgVGniwk9vmMp6mJodLyy1LErvsX41McvUC11XheeEZYjVPBMHc8eVGmrLUA3jVtAr",
  "key28": "4gKUaHGcqxt241cBkQzt4w3tX4f3fbCxhAoseBxymiJktFyduPz5Nf8bDv6oRTLkwksntap8fnW8GUJrAi4ZwYmq",
  "key29": "5Y9FiJLpECiXxpWwCeNR3oGmJVWRL8s2Ct7WuznexkvbUWoDVSpfTkSMWzSVsxgzmzVbYx5jS5fdmgqPpcV5GMCq",
  "key30": "ys12wUQE5FH2nxbh6XRzV3SD3zd1D37r1ySUMST8LgFjgh2dgZKEpxQQY4CMQSWdsUyaB655FybKuZ7rdyPxghx",
  "key31": "xvLYxhQSHss1P7q1Z4JewVrZuPM4kCzLr8SpdYhNDmx79G7qWrS6fxYd86KWBBKej9671GUFfnXmw8XVvszHJdF",
  "key32": "3QnxVu8bCgWXNcSzQs1tX1csXEDXAKKPQEM62a47xqpw2dFBVrEHgZf1PBFgzjoL9LXsiUyN97Eyo12g78nHLN3v",
  "key33": "57BcXXE38jNU8utVycAETUnQtDX9Gdeg5S3XWiHLy6h4ANqWo4YuR5LkoFWVSC76AMsstodA9dBSojKYHcYeK5SR",
  "key34": "3JABpV9VV7f4F4WxJBkBjxM2DuhHBScbpLkvh7sbzqT7aAcyZYBFkWnVUVb2gsLQTvHEzp3snFMCNJZ4iLyfetsb",
  "key35": "4vhu1HfTC39EGDeg4xesHWzAfCiSNCcv2Bhr8W5WDHoLfKiMPuf7qEk7HVteVSuXoUzuiRVYAFcC1FJvw9s7wNeT"
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
