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
    "5qYxnqUQrQMnhh3JhcGpAwm2tSLmojYPn1m2edyKpRzvXcrpRU7XTHMW3bavS685B3JuWuZ5HfTYXrhoMUJqTSPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VENzK3F7AVkGh5NjTzYq5wWXjXu516c7bsqmBNqsiBLdeyP1jSQVjQvam6nRtqq5AkXp9nfRPEo1wzqWQ8poVRP",
  "key1": "5fViNJariSLVwdxKGN9KMCj1fqQVbUEMCw2t3SwQHg6QsoB9gsZ7xdmkWcP3hEUERouxwtP6v3MMoYeyy4xDPQbN",
  "key2": "4u8mNiHb5JGnSCYxUgvAUrH2dxnmgAGXiH9gAhD8cWQboW9frzJbtvUpbg4DfJ2CEPHitdjeLM8WaanQ6jhaRTG2",
  "key3": "4WXkvnDBDgHRTX91KeWFthFnnd98VDfSLXCiRdY9N2ULZEtNk8b3NA6eSKV2cMgB71kMnzf9ScZoGsTJsyEdVShN",
  "key4": "56C9MDamXwhtsYWhgiAU74kQKitk3Hq4FpU8LWF4Xgrn3mxN2NByveHLgr2g9X1R6Yo13TB6z5mBCZqUYqUaBxoR",
  "key5": "h21XnnyjojmUTjj2kSyFNHwcvzZcATL4esA4pQ93amLmMDw2cVmffeyxWTmvcUZCpfWA1698CfH4GZepKgBVsRU",
  "key6": "513JvjPvD8VfQrNSLKSzoAXbAhBCJBhGnq5qDeM8ek1AMpeXgiiUFyoQTVvNMW48L4SHBo94TE4eL66exjZQpDp",
  "key7": "4qc5Re5RhoVqKFXyoVPHpkR4QJVJMmXYZhYqZqrKyrSSna9dqqLaCwQbKvHs6iizXYgZVa1aFQgKg6B8qVAoL1TS",
  "key8": "wvhoDWFXUPdeE7FWFJfytkXEw92BEm5wr8815deuh52SVupsaaPscu8tNnWxd8L7jd4SWXJuJA94qiBAtXdB7Ey",
  "key9": "2BuVRfhDgpPXfPXDJxquYHREQ3ciENoNbb4n9r7YXWKa8CCRgRqeZp9RRB4169qvm3KjbB4gZtKbjUSEoqrZ4fkD",
  "key10": "2Q3CzntVaobtnFJeWByw2gWt1xn9j9ptKyBrxCAiejP6hs3gQi1VoryBWnK6Q5dQXLFzC2qsFbTXs7sMRHMepPt3",
  "key11": "4d9V2EGu6pg5bQfa2yacWDZM3xnwrZUadArr2Pjtwn3LHZGHkgHkhFK7vEoVitMqfSCwjxs3A4Gp21hUUMztEHwg",
  "key12": "Qp86xT4T6XvAmjWCPBXYKep6j8QszgqCtnMm2kA2Yf3o8vqLDjv6y49HChsfDhyJE2aymgRPK3fxb1x9i5iALDD",
  "key13": "4LmDRNsdUuh8VLWeviYAJK1UDwzc6y4XgA8maK735kXdjTMzhV1cGJJQPwUptQhLpxpekD8inBp6v4F2iydhZGRV",
  "key14": "2QZ1FivPvHUaKyKAVYMpCjane7bpE9EMTmuw6cMs5f2HckNY3BqgsiuKo9pWeWXx1LBVBquDxQGXMPocergoZuEB",
  "key15": "s731w6eu3BUerAfedQ79SpGkiorFqj93xQmc2sVN2c9dcBE58aZCz2dB2xV5tXvL5RPX4kNAXnpXHVuLpW2ZFNw",
  "key16": "ZR2UkKYTmNMM4cJj1CbENuyqQEJtMTDnh1RHWDtCAkpKDMJ3Rnw8SGCKnynzBfyLg8M7Fhx576yhQMffkEd5L3u",
  "key17": "EfCoAPUAHaifu4UzhHVEbVVneeHffxSYDGZx4FVVbMmRW6ZjJCpgc8WvJJtJ2rSPn1QCzkrpJytHBZKTzL93bb3",
  "key18": "3PjmHE4C9hWZxBpqZAVqtx3VB8iSn9Hn559nk5DtbaSw2sqEh6wD7W8SmJxVJWZBoiit4Qq7QuWufWDwQQdtPXyn",
  "key19": "5DUqovdJo7RpzCpHvufXDBHG2egV1QjRxaKP2YrjD1Rp4eD3JbHCoeaeP4BXzGiFYcvRQPEHdUYQ7Wskok719apZ",
  "key20": "yY2jL97v8MaCT7fUYD8vn2ZikkwkTtBsg5fDpafq8h5Jmk6CU4tnLqKjSsLYQdCf9fhDFt3ENuA3c1RbuYk5qRd",
  "key21": "5gqYmLavLjz5qujAFyk2zuV6LHKgQmjhbCqfF1gd2hx9dCREcQJURLXgQYJVgpTVF7oPVTVqHc5zrtdjE65PBj1R",
  "key22": "518NXVWonm1DXfQFBs5tRheMeRGmEbHnmnbL2R5hPikeVgYPdvibxPEZCfDB9bgJbkEsGybP4GAKDyAHJHHzqvex",
  "key23": "5e9X8Bq5p2RhdAbKYJtu3fHwsrJpPCe3nG23aaAoqHBW1urQThJnG6vHbLmymzBdswHw3mH9Rqm8HnPfRjFMH82F",
  "key24": "63htab1fXx57A3AWm2Kc4qvhSnxnfcQa8KHsyTJyNzoZt6N5k8Sp4JbuaoAQffiqsZ6Snd6e7qwegp8rvqVJ33bT",
  "key25": "F7KPcifYd4yBLkY54pWZyfd2hKe6yxaHmineNme2tFyp2sdLbHQNfCxLsRb87c1q1n4iTkV7rdphxW2iZrR3A2T",
  "key26": "5scPVXeELdDvTZtnBxTLojUjXb94hRJ5uEzjQifnrHGNCGoTjJU3XCvR46yxbeSMGzpAft8NkbKVn7SjREwTJ4kU",
  "key27": "5j1MDW9XwsFUnjBd1UspgSP7AxnswbEcGVrLEMdnf7ApUwLxGKwoXRCdfBUUoyzhU8LxKR3SuZKV32MmFgLPqvBu",
  "key28": "41PLS21PW76YnhfXqLf75nSF2RVY6teTonwvuSLBoHDXy1CtEpRy941R18uiHjKs9RHRHFFFwJ5RnehxPHpcowmK",
  "key29": "4qMcs1Wqq1qerqeB5SxGF8cB16c5RrnJYxYumsmiVs3BjmtwhSaWatnt8S4bSKiPsg417tra2f6URbAVkyyfKWcY",
  "key30": "3eyFPy4GWjkCvYPQMB9QVeL8LcbPTsPjHRccrebEkdaYPpgiJQWURHersoJufbqbtU9osNAQHE2J29wjvqaGppT2",
  "key31": "2tvxfBJ56fvSgDW2riauP7Ue2F62h1ozkrrUQL6S7xhA7omJ5RNVXA3RxjTdKe8MH4wtehbTgsjR8QP1ARx7eNiw",
  "key32": "3psJnCHoenCbnAHYMD4QZeawKCiqXTWz22Nj5fC1KViHDTwA9oDkJASA5SfZ35aNY3Jixcood8T7mLPUy8AF2aC5",
  "key33": "5jhwQKoAVH5As7EeMdBWLKsuMEAUb4mhgvhvEyD3JwJupgTcuQFy7pHQtcdz5jLdJsExbL74aB9EscBo8mgdQDw9",
  "key34": "542cx9gdMbiCKYQbuuXHSwgvs2hmJNbjgzeGCU2t8ddxTUooVoNZM2dckM3Sbfra4YM5wYjHxCGdyf68DRq48xc9",
  "key35": "KDf3kWMagX51ssVhKu7uasUPSmZtLsY3rn4XzxdaYMi1QrznhMvUQBHz7uTmhHpd7fA6Dqkx4creknA1t2oMSjc",
  "key36": "5iA5NiwnyM4rF2e4NpzPpD3v6KDe72SHw7T29QUpyj3Bq8gQ2qhY1g1QtX8CMmNHyRSNJqiVryeTJHHi9ads8tSA",
  "key37": "4CbenhmDs5cnA3Gbo1evVFRruzWx1kVmB8rvX6vaeB9Pa8cHocA5LeKR8hmDzfJaJ3UhN8CbNVTVoDhyaDbd6sFC",
  "key38": "2sixZfDXNsWPuNC5KjipdCFAPUkFh6UTh163gSjn6pQZc72RvyHKAMkhi8jo9w39HEHSVohSutiiVB287G2gGJ9W",
  "key39": "An5kxtGX1wGBzgtbxapT5NmD4PubVodefykpv8z2JDgSLMaY5GM5RkGFDS11trRk7q84T4263acKa9UKV6pF3gd",
  "key40": "cBSYTb4rLAKZUTgkEb7cQBvtzPJK3fmouncCrxdTjYnRimsx2ViixEswMj3vVGAmC1MqTYNt7ofRD2Td35mmPNo",
  "key41": "5uQUDJh1xk2EnyqhyiUmnBFHHfB31CJ1uu3hSf53B1DLGCnutcmwdqY721yo2uFVYzwNRjFkhCxfoBbGjar2Xax5",
  "key42": "5teqJrPaNVJsvutTCbawMU3tJJbnwYJtaeJj7NtVBom4b9sWKp56W2MghVLqvhEauLagbjwD3wR7cq3TYMEgNusm",
  "key43": "3E42NnkXHn1HkdgdZAnoquWW94FMe4DWS1kaNb8vFrwkYGjbceP8Jd7mo4Ht9T1UNqTf6AsFXZBq9i4hR6Ee1XAw",
  "key44": "4FJtfutgGPFdbdfBUzWsENkysDcNTWnfVctrQnXicc3Jn62KxgGBq6YoMuaUFMi319jkrhdeRYc3yxHzAi1kuzH7",
  "key45": "3Kc2NP4Pwo1hDyUUBN2VbjgJFFvWPTYp9i9b8CfmKnkLU5YNS7W41JPFRVbLwnWbW4Eqqwvycouicq66axpyb3aX",
  "key46": "4oEBKtmZGS725xd7bHwThAEndeVcWxEZScv8orbqAkfhxgHkwM49uYcvXiQDixRAQoXXrRRsk6m3M33zKf9Pb4o3"
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
