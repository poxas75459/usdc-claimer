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
    "3ZqN52kB3DrDD8S16sAUQ6bGoqMWDsXUD4ESs94pvTf8ufS5BLcecwqcVrjd9jAhiwhGCLgYzowNqn3eWC9uKdFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ff9TJRhHQvfw4VDGcwCycEXo45jeikVQpwxFnPoG9SsXcstpefF5vvdBfYc7fJjJR6gXEKuVkVMtcxTGp27ggCP",
  "key1": "3zuqX2GTKGoWQ1ghAofeGeWh3471SzmtJQ99LknVWZeC6uX92abBxMHAzkgRGzBwffp5f5FvQwQwdCWvRvoyHm4e",
  "key2": "2sX8hXdfTKXTVMEZ13SY3Nx61rhu6JYCWrJGPFSxPRziUPNdMR5cU5ff4Bv4ho8uZ3p6cjc9Bb1MjWDatd5bpvyz",
  "key3": "EfNvEBUtEtaYKdotzDQCkY6NczP9xMT6R35wTVuDUF5AiFU7hJWartjeRomU7Fe5P4pqKp1QjPuNm3vLEXst75e",
  "key4": "4qsR4ZuMRyqoJh2e3rPkb6zB2U9nYuULWuzizGFcMKiphByZArm1TCwgFyFJ1tp1NHLRdnCbBYcqFqtmTyB5YZ3M",
  "key5": "2PZdTYDEw74jmDffPeUhSidmP36pfn6pyJgSW1xyD6Cr1bG8RsDLod9BrGGCHudYXYdAka3C7VbrcVoJGzKvBStT",
  "key6": "3mWDpahZ4DoK3bZ5CJiEz83dMdt2kh5jkey5AQZG4vGdDDBfYD7k9iRSKU3vzxnvKb2Px2RaG6bGP6CJoJZ7LF6X",
  "key7": "2csheYfTCwHPb2qnYzje56zy5DD8PhjuWrHW6Z2E2836mNmZ3r7mc8hLa9YKmWCca9YTA4cFWDEUFn3wWK5zBz4D",
  "key8": "4JkceoF9ezQf4c6hfHLSS2DqjNLoNib5GJTVYMY8wxPXuWrmoLdYP9AFDdqabi5PRstDJmeq5C4kxHpMJCBCU5fY",
  "key9": "5ttft8LRKkhQA6EEdavEdg4a6rFo33GrBG4eCxWCHXdbPdm4JS4crvBf8Lb8gkSUarLydGtvHkkCHKaHWqK8wf2Q",
  "key10": "7DKwuutejCnKXctEz8pGZKLvgzGtYAiM3xBxPsHvsSMAcZPkEMTxBAqoMLMcVLMEkNnQUa98KtWwKFZg8P25V4v",
  "key11": "2f3f7FDUe7eRsnS5p2bkgDB7PYv8tjvo9cNtkKyXYc3Amarsq48swvbvBZqrYiyDeUm5M7kXkAzf1JoUL7CimJre",
  "key12": "2RvxVSawkcPDF7g3MBD6ZxynSDqNebuGWtVFnzreJn2VttZAFBNiXunbVfqmQ3HuA4pmeYeN3ch4V1hWpRQqiVCf",
  "key13": "2gUWKcfsrMejHzTVbhPZ6wZDw4mmk1pRANn1zokwQhbS42xrx1StYWZVGp9PmRMT58Yvj4rzettCkXqSVjPs2Uv3",
  "key14": "2oGHvqgM3uiMDGdKNLzzpdz9sGWH7efLNcBx6tHVTzcNJs2Pozk2UCE8kVtU4AydFXtqjqLXbz24Gw5KCna8V3Ak",
  "key15": "4TRFXACFnV8QzNnQoaou8SfAC8kUfvAxAAvW5fZwDaVoQrFj851LgeTdry1cNwcA5X1mUcoUMge8nK7NDpNnjx2T",
  "key16": "4bx42H8vvy1w2LNkVcV8modgn9JU3wX7ymZ7zzqpHFbojTwnM7e4Qz3Rg3gXg6g7CesPaKKFgWP6Fe76q16eMDoy",
  "key17": "4dpbr2RefYt43wdK8uFhKftf8isTEs1thY9tPLipWsLT5HfLEjS5zrR76LJPv1vxVor25Y67RAnfcq12QY2h9erZ",
  "key18": "41vodvRFmsYj6rqDkNbjk4bBPyBRuJzRisaofdK8kyjS6jHCzmMV4zAupLwZWmXxGGSyX1P2AjNu8p6V8wKiuNh5",
  "key19": "3eHEpHy3UPuAba9tenHrU2jG4ugbhLQmwbkRFcsJuveSSEstw9Zn37gomeEEJ9KAus7eE3B6UNDiR3SSozkn741t",
  "key20": "25bsuWZsqfb3jR7kF55yg3uQkcTMDoaLGCHBZAqRP9M4mcaogDaVgkAW7GYciMQEqpF8J2Egr63shSyq5EikGS5U",
  "key21": "5MjdRQGy4Lq9rCJhmSstPb7v6Vc8ecgGGgGv81Yh7Y59xtAdW8Q7cPBbL7v75onmUZa9DqCzD8kGb1WE9zFyW4Bf",
  "key22": "3xhXDkoS32Bpbtqv2shj6KqbFboiYEDqnXh6t84kq49BoQPnCtcRYibk8gj29brZ247uD1iex6uppcHwTYRjBZZu",
  "key23": "3rLbRCXWBhQdLZHMPxqW8LVPU5WUm6rpsiG82qhGbpKbFrDqZE5nhBnUKd16W6pN76LXh2MphqBuargz6VbyfRQL",
  "key24": "4maBmcd3Nxg61TN4dpPgVoTKXJD2wqutVJQXKT9UbaWvS2DLHgqtMRiWKYrxPfqrR5JgN1eEgsE5zsW4GLMSxjvy",
  "key25": "2HEyimvb4jFL1kAd4NNZin5ME5E2j8WyNFfLwKYGSYbVW7RhUtabmnxaS3yQh1ARn9bumzYqfgCbvKwacgpkwavw",
  "key26": "c8SfiFKFKwpiK4znEbVLq57h9pBmL7ZC2QtNuT2oTHu2RQHtJY72pGQx9AnX4oy5vwV2CNHpd29Mxfdxvta5FtS",
  "key27": "4aQmi5h4WMbLEXtYRJ5aZsKHoAygDHxCNtAL6c75TFC9cFxDzbZ4gx1jxdsT3H3AcSaYeDwwWdsDQc831j7ZQae4",
  "key28": "5xBJ2Ss9PsshJcBe2t8fcWV5RmWysY6LpBU4CxS5NgACACvinZpVx2F9Ng6xYMqwBsU1zMWNGWArJ1rEgerTsSuJ",
  "key29": "3925RtwrBJcjmDVmaBS3JHspCVmVBKGpxcDaWz5BfLVXku9Le1miC2ymKG51iGDXkSwdnHtidGYvrdg3SRXGA9U7",
  "key30": "3S89yXv3EamuBFU4rw2UdWfthxdokfo5hvPhirr7GQU75jzqWQPh3GsxEn69XL9FiwnBHjqV5gYVWw1g5HCi1MuC",
  "key31": "2ATTnedCpt43ySBL6Ventqzywn3cnMc9rwjMGdsNE6XqCpzq5HnJTSpHqCjAhk44QekrhU99g9CjuXiWtXs5khCV",
  "key32": "3TA9bXPiZKyHjTgJxogkaqcLnGWVBfm2gW9bRkVFMZVH47v7PKQe196uurGyoFzcexcBLrZ3EuZfocK4cdBZZL1U",
  "key33": "3KK9a2WZebpaeUf5HtM5aiMvEFnrm565Jukyc8wtSfm6VLorDv5YUZ8vAw5HseyLrtg2M6dYKmuCd6BC85p18DTx",
  "key34": "3fs4D9bmm84tjDHkw2wGpGmdN55gA9ryGJYrBfH6SoAWG1KhZT81jkNrS1qTmoYjGPa2CpwmQCm4SuWBBk1EctMT",
  "key35": "4UVcbbTsPNBtaty7jjCzwtpQv98ZouPtxBQyWwGHrqe5wxdrCm8kDMs7ADKXQGiG57Su5s7bpG3HbxgR8wTJ33hr",
  "key36": "4FdHRkXCffTvEoCabMhiuByv4S4tWdMfMdQFTYG3GUUZa4pxsivdTPw79Tu67jqZDXd1v1D8f96WPjzUJCP4gLeb",
  "key37": "LT3Hq9qRSUoC1K7ukRh2uS49GyuoDyBj4DNCSxqiDmym3YKXvEx34qK8EwLAVPWALe8At2aFxZnQqcCxQxuofAv",
  "key38": "5athTddveZmYpudPoGtPu1cGqAMuRXLvdWkKHbNugtEjYk8nGuPbniwBvAjFyAaukQ5sdeTcKyTAwkeczDKUU1ov",
  "key39": "FdbRGr6Vy2suBwt3MeAikQdBBRu7zjnbDS1PKpUEUudFHxL5mHUGfdepf7As9TKkQsPtWjcnfg7motpPDWMNWiQ",
  "key40": "63RJemq1Zakub64WJJYC9GuyB4aM8AeskdzQgGj8gsrNfXmd3jDR7ghY6JNaXmM5q1kqgnHTpd1To3NqYnd5UnSk",
  "key41": "NdhzEsdWc6hyLeHYey3g9cyEpuRc4zDyuBfERnrt5eevq4XRBCFGyfvW7cmcKBavUKApy9STSwYQpL1NdXYCxgB",
  "key42": "b6Lr5aN7q8VXkFSRmRrB5aohLtJNoQhWxYpnWzbiYTBkURpjd5a3wfnBrA5wTJy39Bzyg1D6RQ1qX7ERNuZ2FX1",
  "key43": "4jhrqMSDYWX6VLZR38ETjGFeoit5APzC8fz4XCXj7FjboFg18SNdPtg98gH4P7avrmxMAF5Qb9Fd51okMmFQ1fZn",
  "key44": "66p6hJtVdbrdZEgxqenjEpqHuDSfdfLaQ8ZdqzoYd1tNNeBFV8SZcsfR7yzn745vs11PJyiiDpTzcjyxtLocJ777",
  "key45": "44NYPZMokpdUCxwLWtETW5EoxmizPpgtzLjy6eSTbEgsVD64oiSXonSddMrWH7RAxCvUDojXz9tUKbm2HBcyxSHq",
  "key46": "43a2Ki75SnXpUiQq66hPzFt9mKWtEKdLVpuy3Vp8qECX7aDxU4tvfxFHgGZF7nrQNktkCKCY8DHrorrVXtanb97F",
  "key47": "4ckkje3aHnFKNnsKazm3M4uhhc3D8TaW9uEVUC2tWpsbAaMnSUPjouDyKRtyjKF588dqdkD8DCqt3FxQU25uGSwf",
  "key48": "2Gs6YV1HfkoWzygQS1nbmzAHsbcaLeRtsoVbyisH9qt9zUnQ1zXnGEq8jLt7ujZU57vzRUavf9WKS6tjnqaW74oU"
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
