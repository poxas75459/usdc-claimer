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
    "3NXoEfe3R7WWLwze7AwwTf9Wf5hRRJnb4mY4bdQxY1gZJc1fGJVeDPhubV85f2GxKaWv7SuJVLk3UaP25s7EcRAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "627jW5mXgpU24UD2rPycW3rzbbfQA6SYrkeEF4wmt8pNTAhZdKEPe1iqeKGQX6LS4bVcbxZHkFtK7rdUGVvNYsad",
  "key1": "41Ef6oXQxLFzX6TukNWdRaMtgtEmXEUAw68k21fNj57TcVHWWe5gPw1uLFD5u84VT9kwYKgz58x9uRf8RAs2tiVo",
  "key2": "5Pyg7Zzif1WPz4GxpcQuN1Aj2ZWf7dkSyz3RucsqZjNFcZGsfJ1UCwge9t1kZADZftteX5Lrc4RewmvTQvJ566is",
  "key3": "2T4cbzYdSMxQC2gZN8fHaMsT8xJ7M6F4rzaGDvBJRXXshuXvhAUeVJm6JAL2QuSqmgpEXMaaSqjRMZoQnxxugqQG",
  "key4": "2QPZTC2X5sxUPMG1baayWv11yiFQbc72dMP3UJf3cYoiMTprwkiHJvYKKw8pdbPX9u97afzMzLeaYwK86Sa36na9",
  "key5": "5dMsoBoa3avLHgQ48YGwz7cTg4kzpWefTn2eKa2icXKZvCzLUoYSggKmv8iQF26eKNZB6uNwUfdRhzQPpq5arMyV",
  "key6": "58ktYhLZq8oJxNBF62oU9NR2yAe4TiJ4M5qxynRRkL2mz38UVaPcvD9qXCRJFPuVSKovr1E4caK19nF9XLZhX8G2",
  "key7": "5VNAGmunXBzWa3VCdpJDgh5nFiFNciuerd84sv533GG4PFp9DZAMZxZYV119i6eoUE7NpoLpQ9yPAei2et8nKso7",
  "key8": "3oTECWuQkNBv5mf9T5AMf7KrJXgtLFyhchMwwtbzqsz3YzUJY8o7dKoxPkfNYDdrKyJSoo5zG4ZyRxUBqfRSGJQ8",
  "key9": "5Gh17GGPnF5EU6xrqeGiX28fQcQ6eSsGEcaTnYLSWgPnYvfoUmq4QMBJkLTQKP5Vx5VYTxeu2BZFetSPgPbUefsZ",
  "key10": "3gUi7cHWeCEmh6XHZEZTZtf9Jb8RYZgn6fSsr8s1RpEGXsne3F1w6FnYGNtiavpGZorxHYdfz7RRBEQdPZGgw9MS",
  "key11": "2yMZVZiJmnYMbe4h1pZXYouU9CpRgecvEyqDdbWzTmZ769nzhCsygVBBsX3yFEdjuTRNkwdRWzfpk6zRPCvSKCEs",
  "key12": "5GAohvkbygeefJfYEPtomd6bqt4i5irxvnsZKjVLEvijGSE14hhMW4p8MhEmQLQc6Nc5AoA4QXcbQ4zJUnomo7HS",
  "key13": "3WGbNALMwDYkdDzhQRcSVnQD6W35dWkVLHKNseYXTjKPa2LqfWAkN3AjgKYj5ysjcYioLSbdLCWyeLKQHfBWHbv9",
  "key14": "BqkbvbWJV18RpAJQjYAVbDwp3Yb1vuGkvXiYrUSzRiSA6hRPvki5TGmUxJjvUGFxShN6MxviE5xhWkHWbqXZbax",
  "key15": "3NBptnQmYjCiPMpPrzw5PbihUhqS1BsECyhC9Bavu9ztqBg1qPtTGqucbeA9UQFBunBKN6qTxMUmdHq7TNwVYZ6H",
  "key16": "3FNDDQjnJ4xowq9YMEyQPpDz9cc2AHxarY5MqbuyUx9Y7jvN61D2xJwQRAnYWa9ecy1RPv2HLrNgMdAS6FwAEBtd",
  "key17": "4sFY9nwuonmrsvr3QJzPDcioKdcLccXAvtRWiEH3yXmjt8kRGUCQs7ed4dNmsP1a2mz92b7VcqUHcpXuHe5gYRTu",
  "key18": "2uEsgsQgsDewuvNhNVeo3YHvQuSaTaQtWuq3Mksqz757rKBDh1q8ZkAPJ5wsmXQBQyVughdGfpDHA67b2ffTxt8J",
  "key19": "5rLCxQBdecXa7qG6qZGg9PcxEMHTDLM9GuvAhbg95yC3cHnMQZ3uvgfxiXdPjCvKVLfntkS7WBosrYfT3w2TSGSh",
  "key20": "4vKm4nhJZf4JCVdr3GMsiSunMcF8oHgvN4NNfEsZpZrwNumff1PuoHxbkb6ssY8o4TZgqnU99mTyxqbJ3CXS46aE",
  "key21": "37RNLiihfQrrKW3xfFtq1mSSTwEhbJAKHBsPJeMnYrptUATTZbbaH21uH6KXRnMG92Xt92VdhKGuNQDTzZD6WhJ9",
  "key22": "4vk7MNxUCy49NPrJK9Jneq6wNE6EyW7oLQPtkaL9QGJM4PTiLz5pUiobXnzC724AgNHzANnjv9eYgBrFgmJzSP98",
  "key23": "2BTFCLF3exMQqWgmRed8UciMvTNg8a5UYaJ2hoGX6fJ9HvWtLawotWgxzj4KUDa8yuNEPo1AdCCrY7vgpX8k27gz",
  "key24": "4T857Qe2L9M6pytZwnBAuAsEPECdB34wVzCuEVn75R7Q7w2i4gHHvf6n8x2y9DFtggRc6zn31ULg1x3reD3onWJF",
  "key25": "2GDjnhxiLJXcaqP5DbLGdPzWXu5jh5kHrFpLh5jVsvoCrRvBEghMdvKMKXMPmR2qNL3hhxmRkeV7nGQgsR2ioRnh",
  "key26": "25NZ9mbqRcxrZFWEBihbpc6hU6YbitGWJky3HRAzx6947os6F8TFWtNrtNcKCTP5xL1AAneDvncXAqW3GARSKagm",
  "key27": "2pgBoekj96uca9Wyek1hdQjreDQ7td4nMnpM6XFismKDgLqxFaMxrGNRp7uiWtcvVkujN7tHywYtnSAV9DpEZPD4",
  "key28": "5anjEcK3eF4qPhzfShZGQ91LvBqgybzFR6tb3zmxYTLfCutibb6owbA3EZTma6qdrjkDB2ekiYnQnfQYe4zdQxBN",
  "key29": "yznmNMxy7q5GMANj3fnBzdb8AeoCnrTDEhXMDtM44CgDpSerC9t288FjzeGvfxD98PTAAfVpG4Kwqrztb4tpMQa",
  "key30": "2oum4hFApLb6AYqJHFu1JBEiGz5NBoYnRa4rgYXipkwwsVwrBvGHobnUEWYuRMM4MP3pddoYxrT2Pz2XeRfCbXNT",
  "key31": "4uZwkwPJnLWcFpdftK8KpnRhJvUq5u7DoBPh9Bvv3Yazd2rvxjTtQ5BL5iTbbrgKkZkcY5MVMRf71F1mRrqWJuPu",
  "key32": "5BabVxkwhazW79m6q88gKwLMMJ47ctSoU6HSDND1Fa4SfWgKsZ6iMjdzWn55E3G5DMx5mWNZJSYr34uoPVk1WvJ1",
  "key33": "2tjz2QgQYauCNWvQGPzm3KL6zDRGHC2iL2CKJcsENVsZ2CKdCEYb1b91tVety89SBGdcFyC5iiyvn5e5WmRYkvaP",
  "key34": "383491trnQb2Ju5hThZmo7gAyTi51qxnLd53nGVjKX34LUW8hHWGPyoin4r5YLDqNhJRwaX6BJh6K1KwGswJD26v",
  "key35": "bwi8rR8vuGLK4rBE7VdCxvrQVVYqzw5U4MY4VwL3XYvXn58nX1a6mdx4EfckwcTX2RBbCT2T54ZapdLm26Hj9Kj",
  "key36": "mYPq8fcvDxwudhdn9d9Cnrm9GarvBY8pRSSRZNi5DLSCjo88KJ5uS4DWKKukkneaSHgmZT5amVVYuRjPEzPfXqC",
  "key37": "dy5aJywrwHdTq2LcgVHevZu4Eg6xaW3HQ4tKsV5SR9VDWZXm7ZvNdXhm1kL5yYdjDTrHjfd6x8uHUEn1LHrQtWh",
  "key38": "Sww7bVWZsifqEwj23Q6phPnBXZx2yAUBpKzwHSYUJaFAPrF6Fd7MvvmVrdkdR3LK6rZdF7k83q67eB9FFFutnbG",
  "key39": "3ovLyRc1BsmJ9k5NqeoMqZQEjaxqqkJ4tdJtoMJWqQ7tkVMF15sApDUJrKQ5YU8EH59zuJCoseepp8oxYn1hCsy3",
  "key40": "5zH5tDvmWvRqDaAJUUHLBRuYY4ouTscTBjaTCjohjDbLVt7XFRbkK9DFuuLsqvtsgeMaNo6CQ1dSeC5EM5kQXmne",
  "key41": "4Ut7J85czj5HFWf7afvyHsnHzkdUokak6jFbcZU3nVzkBu6xFs5qdgFAXG4Luzw5RZoT7Nd1KT4ukLfguDVtFhRR",
  "key42": "59e4kqEq7QBEzgfoGGdfpWjFTLFpqK7kPn5XDVFqU1juGeACWzK7sNJbCTmRYCEJe3xjkvsC82QqvCTams7fc9oy",
  "key43": "2ohnohgV68PrefpPecTjHD7JMe7wEFHFHKNceJwKZ3oTNWvLQhRACcr9ASGzbHXoCUL9nqvuUCxbrdiA26XZPUMd",
  "key44": "3uAvoK24NG9Qqx2PJvz8MG6S3h9vZARL9vUNu1yjyjouaP8chv6oZaZip9mdnTNhFQjDwJvNMqmu9qBpgJJ1ZTJa",
  "key45": "UdkJ8tnmfPD2y6g31Z2NJfVPDjKpVaexNnwnekbicZAYZYyfdDawZxHG5VBi2hfTrxGKaUVtJYcjeVERuYqD56k",
  "key46": "4SLBVCXLsmhaifs9vpVrZcKV3LvFNQ7kmCskLDQ8jvYphKYM2qvWRnc7QykMeYYsxWgrefts5KVG6B3Re663uBV1",
  "key47": "2xFxcUnnM9wtU3a4NG2fc5X1QgggzSL6mKN2YLrozVYZhk3CJLZ8V1LNhuZDMBZtJ5MiMhCkkfC5gWNFD2whXsJt",
  "key48": "59LP1PwHZdLKfB5MRQi8KvBDLZVvh5tzzu971XFG355E4hBfUSxRtdqXVgHaPxtykxxMVjLd3qv86U1UuV5pRHL6",
  "key49": "4LT5UkzhxbB6DD5X6LrTN6FGvQDv3ZN6aVLxWJcHFCzSPNLTWrkms7Pcww9pcFdst6NNoBf2JrZDCbSr3ncJaUih"
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
