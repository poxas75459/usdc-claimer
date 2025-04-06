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
    "2se46pAWtbaZBHso82KSv9SMtzV4QTcPPRDwv6w3PFaVfE1KYzK3EZkyPkpPkBeHpYtuwuCXSEDb6Gt6opP1Pzog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pysDCawxrCEBi4H8rEF8iHK4avho2o28Z5h3qMNWrVCjjTgUoRGKchexRukcb8a4aGtsgwyGrgK2oWwbq6ryfA3",
  "key1": "39Rp3hXw3sFNFCTAHDaokHUGJEGk2bxTaJNSY6MCJF43oLatP4CvNkfCsvADj79MR9otsVUdyQy2DJb7T9mqnadK",
  "key2": "31EjzrnnhJV4DktEDj4fy6wMRtNg4QF99P3qLK3wDyV3VCYuRMnZPBuJS1XnBfMRcvzxSJ4CWJjrVeH41zpxMmGn",
  "key3": "5e3jpT5C7Db8YcATgk5gtM17WH8nK3zkrRYb1JkCx1XpFGU3S7aGR4uo5F2RhBfpX4AjKcLfPLJjxhiiBegHQDnF",
  "key4": "4nmwPyAYYgTmZTVVfLTZV6Z5x4j7aUtomq477TC9rW5YXozZX9YbnkPqvfFcgGKZ4VCsJ7HMozRPqVGvxgReSMpi",
  "key5": "4herpEUsbQfGEsNa4N3uknw5UjUSRLXQ9rLEjq5GLiR3ZntVg2ruXdvGCoSyK7Lcu7MJBYx8yLEdoyjfLzUirJvq",
  "key6": "2kPy6Rwy7d3DTELrAKN5cGzWWwc8P4jixZjAaQ8aHHLHYwDEGE5aS3byUB9XJkKYuGURZE51NqCXB265YrLx8YT2",
  "key7": "2WRzy2WY2FYNJqgjW4AYmjWkqpNzeNFkvtTiXayis2YBWQDwEmj55VJoFqbPrFXPVpiwg3vyCAdBay2cxtkcXtwt",
  "key8": "34z7jijKgGiq47aCX5ehRB5Z921ain1qLVcrST3ziuAVJKt5FKcqQM1g3Vt4SuaYyVBmcFzU9qyYs1Kug6AxmJ4U",
  "key9": "5NgFUKRpJjDCJ9Teabnb29XtRj4tpFxb5B3kZKggfXasGpFZxUtPXAnrp8kXwj22ZHaS6mViuBWzLxHVurjKSd9f",
  "key10": "4x2bHR4aefvoiU2Tu17bhTMh7X2zar97wj2xpmqiTueLEcyKfav7SgxA5WauV57SByFnKy32noNLfhxst6u5QXcR",
  "key11": "379dBFE7tUVXgsuFth27xHPiQPqkF2w5gkKFVuK4baVYTVQtvyhUcRfEujeroAz7LXC991UQyKHMEgvH9i4v26sq",
  "key12": "5bGd2gCQ7rtJHDCxmd6ssvgaFFUN3rSmyV6jBkdLDy6LF4r4DkEdvBbGUmw4BXdSRpsstuPryFbucKWEqZ9Mze1B",
  "key13": "4n2CBcWho7iX6NbFnGjLWjsac5aoU4jafr6Qe5cYkEh5KbdZsN6aDUxN8pGV8zQiNQTmckLfAqWPaiE1TXodfNy9",
  "key14": "5FLAjSdrtQfFgBMRzRED7XfNRai4J56RoNePVigwen3VnNQv7Pch1tCeoyeN66GLxJtc7K7axS9j8D7Tw8VHJ2cb",
  "key15": "2agip3HimKpzBmdgrqwWZ5vqwwoHvgJY7h4s7XxR6TbX964oQGzEvqbXipopwe5AX73Emc9XDjKRyD8nqawzBg33",
  "key16": "5SZxDZKaYJFesAWWFwBvS9YcfBXqb1bzZzdzDquzAMY4VZVY4Cygr6xuyEKXWCoqaeYud2rnodauJnSETs6zb68r",
  "key17": "2fsx4wRQ3s2uP1jtXaA3Lp8umF8FWtPfce3Quk55d3wCZvW2wCnYTme4btzeJbSA3VrRzqziEK1b75jHpi9kXnZb",
  "key18": "4qWGLx1g3AwwDmRqpKFnnHVUP5F3KPNBdW41FFus1X6GPXXBhLAinR5yRcYQJPUnQiEjgk9cJsWyp1QKLCmw3keP",
  "key19": "2BPkLuzDXGmuUSQL97QvZKx8qvtytu69sJAeHAmwZu6FqQiP61TUPbVNkT9v6Db4oMgMy8HJBabWjqWVLHZ798wD",
  "key20": "Xkwiwr6yXyLkiRipAXnXzVL5jN6UvieoT2RQ5yz1bw78qV1Lv3L7AyG3r13LmrJ6tDd4psv6qX7gJdKEJwK6LNs",
  "key21": "4MhmVkKW4EirL3bby2WDK8fqMyFsqk1gYESHp9ZzMyJTQeZCHJiZg2uvYviW9HXySSUz2txeoTbyVxyC2kfBrt5r",
  "key22": "3otAbm2oo3U34JGBdpbJ6kcG1JULwhrYFjjo7a5qczbbQtcUd9jGMo5ftmZ77Pi3VwKxj8GchWasZPnKWit2rFdU",
  "key23": "65GepafqXT6etWGXdNDwGVzNNapaLaCmMxR4BZKdFiNrSBh8R43y2B1VrMUr2fwHLvJCSghZLSJDDNb5R538HZBS",
  "key24": "22PnHjnyGf3X9Epaw32emtrMv3oPJT78vdvDX6HdUqLiNGbDCwdghf5iLMTG1GmPjTdbBqrdhyb8QnPzjWpYxS5s",
  "key25": "q8tWZ4UD84D7bbgp38Q6f6NbxS2Y44XRDx8HiSjXw4n4TmftFXfVRbyBFPoVRbxfnxu2di5o1t14qPLNr4zmZuv",
  "key26": "3kvbAXRsBnuutbGJugcCmoC5FKiHCAeyPpXNeikTjeLj2c3XFSwTLDtxKVmbicbUxvMJQNvN593EssvZmBGRa3Cy",
  "key27": "5LcdJf6qmHTxUdgKBTdnSGgZLwD7hbu4hN3B7vfgzBxzLUCcULjGZtxAStoBCYshzWMmRfH2KLn9c66cDUrNBvc8",
  "key28": "3ahvCVyXnEBwLNqthHGngNNvEHiiiNW1PdBeF9DXy6xdre3axPenouw1qsKGvEfiEiNiCmVCBTjkPuN8ZUeF7nD6",
  "key29": "Gg2pCyPuoJ4YXDoYhfqFfLJLwmKhYrE9r7U8pssDf65gZHFCwr6B44eXjLU7c8dBLjqXkbn6RgdzVGAeptxDihB",
  "key30": "45W7pAzD42jTCsmV89Gf2oZr8G4EWd5W6duMBQhY6yPwRhy6gD9xaV25jxx1idYDBFTbEt95D8iGzLVX34AALDj8",
  "key31": "4YJSx6vyB9hXQAUdkUgy7K1B8LQwHfJ63MqnDL3C5zupAt4NK5VvyrcNZsGwquDkWaARGCebcZs4NoXUEQdj2a6t",
  "key32": "5XHg3SqxWun2JDSkKuuXjXcJ6RorC8HzkuNJZSkhYjkXjEamc7hZuXaAUaRRQgd5otH7St4bj5thwggA2ubGydzV",
  "key33": "EMZ7g23pAPCCSe3ZoQ2HiuEvgobGcSKaFvExGC44xHVRvx5CWrCDPTFNgaNBjnpkvo6ZLKL6CThMxBLUtZ5JnnD",
  "key34": "51KaX8H6SLhMYZecuYxz9rjFK5kq9iVs5PTTZde2atFJ8uyh5Vyp5fKrRo5wGjDxGvTo3HjZYMt9SVwjciHaWT4q",
  "key35": "2jwTSS1SVnhKbQWuyumaJi3W4mWZM45TXBFPaPoFz9pBA6hP58jnao4zB36ffrE4EKYyeRrqLjTTL5Bxv6i7rPxK",
  "key36": "59U5tz4bZbBKeaBWwQuZ6A6QpVXHSerybArptM2wqeATSgQ6gQ1EzScQHUXJwwskqr4wGZzdAt528xuCk9HzBdDw",
  "key37": "2ByMJ59nvyNh9BhWdn5XUTKRj2PZB4HsUUu1eXqF4yo5JQX3n3tCXhqMuTEJ9dWhxsogRUuuksGWMEfcBovcFhFp",
  "key38": "4TP43jLiRfPS2paBr7GySVYKvzedTg3ksmrw5TGKZe2dQ48mqcpmHCybppwSK7ft3FH1YZkqt3ecd1Es6xAfPche",
  "key39": "4j8SX6LcC4rAuBsM8i5sE2LV6tMVXTeaPerfgtMQgGgKt8W596T9tV2mFow1HETh9AXYdp7HboJHXp5fe88tTaoE",
  "key40": "4a96bfFJKZDpPQfJYsqCFKkarYK9cBswsS3Ru93nmp9YphqNCwRTNZjdcrdhVQK5RdQQdLMaPkUJerEbPbtAULwz"
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
