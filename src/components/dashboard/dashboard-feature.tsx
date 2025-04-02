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
    "5kgDU4V32Z1TqVQV9LNViqJCsmURDd8dpMGmrspw6zzo2xdWXZzRMYUR8hzBy6hpw6SYw5ycQMTQTsuaU7KQdpGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pdhzr3LKXLxQzBZ3JPUNFryB5sp1K2zdU13r5QumzUDmX7CPv3Y3ssQG1tT8fHiBakUcCHMzGZ8GnwnWxusoH5E",
  "key1": "7c45bbtvG1ZzhFcrqDeWCJw2r5TGoc2Vb1N3wSRjE3mPoGhmN8kgzw4yB8TWSghpHPFk8KyFPckuS4i75MR1fq7",
  "key2": "3PWVVdowD1i3fuVm1sWxKa6zfLfFBjyHG6btccuZgHa51xtVRUbCccivrM53W2AbcEoEAjk53Vk6DWaaz83c3d88",
  "key3": "4M53YtoKyFXX77dU5Hz1dbuT4CBLzMqRn37r9PYTrt16moEv5vCRtUariWWp3LzAPudjFBditrZ9E3QLr7Un5cmP",
  "key4": "26g3ss57YXYxj8DKxKPvRuSFKVEPyyD2hvMVLoMXFfr2kXoRt3XEfGGoMi8rLy3J4k1YQJWMpZurWsURfXziQunc",
  "key5": "2Svqo1J2n5GhZyoqX5cC2v9j24uN8W9x2PzzBrhgtwRzfBv7FFKsZi6t3xrX6aKXBB9VwydAZrS3u9xgbLfPH2pq",
  "key6": "4NxMUV7cDu4MdzkSfBKfgiUY4hT6BBauNwjiK7FE1umNfjGvxU5E7TXkP9wgUyHfMFVKuvNr1THc4YKTAEh7GmoS",
  "key7": "5fzvRcLwxmYNWpRtjeWTEpnQ4F6uyx9dvAVYjAaYgYHvtqhMgJCcEwvWhzxKDWFnMjNUyJvWfj8jPzNXBNALDbiM",
  "key8": "4is6C7Nrmx3Zjz3qFnCGQ18V1MxXZ2UfYRtAowfCEZxjfozmQ6UUPFuL3dtobG6HNyW29CNbWdwUoDvZRLZbNK89",
  "key9": "HQiojwTXL5L75go7YEc6sNiiaeVBfNXmzo6jw1n1eCyD2jhssXsEsF4g88ECe9yvmQKYzMXEPvmj3b8Y623B7Rx",
  "key10": "FUMuC1ygN2LKKEwr7B6QoYTnbrTv8V2KGMNq4NG53hUDRKbDPsHDqcAD6XKWgNSoMyvPzQLgGJbXWTkzoJZejwz",
  "key11": "3KBLAXoAHh24mKbVvRwjKw5EVYvPBZJpu6yFW8p6Rn4egaXU6G86xFFyTcc43QdF1yS7yHpTSQecxkacpz2mY9bn",
  "key12": "k9UQBiFENnK6ZRqVr3KkgDV7KeFrmu4NR4b5JaLEifcwnNk22svt6RyHpH9eRcaTipXaPAmoUTdZFzGKV2U82xa",
  "key13": "5sathgknLsiouusUBWV1coBf6o4UowXrB4aFgQHJ8GNn2WeaXWsTagFMnYF8odS4DBRrN5pFVu78tbstkdr8DyXD",
  "key14": "2pqcpgDCDyCaXkDdPnKwDSgoBejrsUcZaR384UQ1A779HqxECr7DG5mq54M4wKGoCqTodY4YYFCBwRhxpSBGq2ES",
  "key15": "23eMHKbDTySHvDxAvUUbdHZKcx7Dk2KWR3VFLKSbLFWWdUeHpY1mark6yDDoUw2z5neb1ep7BuGJqmdnfdx6tYth",
  "key16": "5r8kbrJHW9fppFP6QhgwAxtyUpCA6aoKejVArRNwLnE4kUg1jzvGFS6eXXphcuonxaLFjE72fo41L64LnwmYTqbC",
  "key17": "4yhDZQZqVDBb2M3rDMuqbZeHmNXg8F9tYDWQw8f7ZwpXHNe9RnfvqqvocbACbXXNymCv3cP36c3ZJYTPcGFd2ET8",
  "key18": "2DuiM8kf7B5fGMPWwYFNT4UNUNBoJuPqzqat9ViL8GVUVjg5otJ42fxcPpDxw4Z4paDatKHhiEjbLEefpAEEAQg1",
  "key19": "SGPUZT3YhHF1QN7Vf5XuUNJEM56uZBHgMpbcvWZ1fpjKWuS4m8LBUy6YESgqbVxeRk9pfskZAexy2pGxVxQ7s5X",
  "key20": "5p8Ww6Uja34Jh1X9riL6beUSA4KAJJicociiFEs1W36G1mfsxofUZtWXHriDpxwiRAy2xZKFBKyJMtr5nW2aK9kh",
  "key21": "3ci1tjjE6ynkv733WZQ93hChprh7JfPX5KPMkSjXCKX8x7cjxLvFfpMmWhUCYTScMwCBeZajU4fSSgm4capPRb4h",
  "key22": "39QFbJFjrKphgKrPTSQSYp13P5ZXVWwoSSNvkwi5xaeDdBnyvfycpf9hYyN84VmReuENMLPE32Yw5VheLDDcW42m",
  "key23": "3vaei4r1RuHh25Na1d6Hnguyvo1Hwv13atM8tFHZh5xggkfABtyTiYj5eFTgDEmG2Z7F3tkeLQUTZKnByqeTeLun",
  "key24": "4aEtEtLw9mSMsgfPdNCiXBDB47YBQrqTRPgMxwvceYzcDgmKqqZfBWUsRCdWzFMCj3ism9bqGdj5rGzkbPWkis44",
  "key25": "MSRk7xUcyug5qJMFtFq9TbNtDec25hHJcexUpuRUGnDZkwigWJLPvQPDs2mfk7YWWqcFZZL4LNK1U8gxPqaXE6z",
  "key26": "2yj8paug6xYEySeT7fw9YTUUtZDVF5jsjpUtCV8XPH9ZunCdgafAcbu7Ly8LpUXKa743GSpZkFKTTEN369n49KAM",
  "key27": "3EYgvcSttwrD6rCRNNy7kqbRX4Tgfv1XEK8fsaQxwJjitSrgBLPujv9fkcJ1AiJB3wieajjvPHC1X1NmrZsi5LCT",
  "key28": "3ZQAUVdhAsZn7LMoNft9ogXUNgWeSZo5CPgUneei8amPRRs4wR9Gx5CDtMphDh88emiN1xz6UEJs8LjFWvYTHarT",
  "key29": "51gkjFcjs68haAxFps2Jozs27oGSe7DfjBtM6sxfyvTMuzz6fhof5JMktpEAyJoJjMJENNdar3kHDBemvq2K5KNL",
  "key30": "4L9bk2fwrchGjFrLf1FGAocqD6T3nYdbdGRzGcmuZzju53dskV5HFZLmYjQyfCp3JyTycU4BZki2r1e1kLSWjD39",
  "key31": "M5kSEpSVWDW8u6TLmKNcMv35Trc28nXuPgDk7f2FyfNjMQb9AEPU1Z67p49EgrQoCdue1nxitPMG98dbi2cU2xH",
  "key32": "2wm4nbCvY3hUmY8YM8pF5YWaGnjKhNuYfweTnhmKVjwpsWyGxgJh8fPt4DLqsHkTjN11TqybTYRFRbwvbt466XCW",
  "key33": "2YMS7tqo8QHnWc8gnQxUATU5dvJ9NEDU121eQQxy7z9LBkbBau2j26DeAvc6bPE7ZTeHMmkREoMAqguBs7tcgjxX",
  "key34": "2yrJrHKiqt67a6qtv1ZruJjvkUVQP5TmYHcNqhcZ76Zu9xi3j6xHCk2E1d5uvzfmpyyCH3mdNzjQj1nskbpCArpW",
  "key35": "4Mbnp1krbt9tiEq7aFugjWLZci78fxazZMNxsNrxyXsAju1mupWwhASThGdmukSP7TBpU8Q4nVx8YbWq4sA3F2Z7",
  "key36": "wx33QrHPLzV9YUccPxZoiSKduS8LWjB22Z5putdvQ9JMeiV3Xe7qoVvkhF6F5h3JawUu5Y6ydNR3C2VLzS1RXdT",
  "key37": "2Y6m4JLi9xWcAdQVhCYjuYd9rMHCHX7XRySLHcWrDc8Czz3PwPnWVFT3D6UvZf1RBKnS45s1sbmvk5y4p8gdo87U",
  "key38": "YxRnMTqK9QPpxKBS9vJRqxQGnPtrxmS2hNXzWcr2K6H6TVqN1mkz2mAP3XRbWuNiKNezrUHsAzZSWy7kBMAk3du",
  "key39": "3SVjvR6EMAwk1jzH8SgP9VoB2VrDjnzuVZYpRVquENyfTks9jW6sm693GdQC67rPM88t6wcbHXEGa6W7phtz48nL",
  "key40": "3Sm8KH6DZYct8y7wkt7CqYHddWdBfrEMLvaCwgxmhEmqrT2is4VmJWGgqdAydY9YBQaJNYNPdp2zvNZhVJCdJscg",
  "key41": "4s4GAV4knkXEZY8VKs471uYmeTX2WARHQbXMzPeZNZw6JovSMBydXNN6uVVxE7QrGQaNmAtiRXLasqB44J6TDwWJ",
  "key42": "5ZUK64issy5YSVGNzHdm6mju7SngBdELvRRvps7QMHquUYgvwZzk5ZZNKLg6eapg8KP4HA8vhGeMAT7kLfzaSBUb",
  "key43": "5DmKeCispNYijNPRCnqVm6AXARJ3L37r2AT9cz34zhdi7VdC7TzEVUShLYZ1naWz6dj33wEXyoiUTnDfBbCzNgco",
  "key44": "5ufftsnaC9eyGMGQxrvqhua6HQc5BZLxPJZXy8VFNaKmyASBQRE2WV3VtHG5ZqKSRtPZao87XvAeVYPkZw3bXAhK",
  "key45": "41uTty1XNiLVS3Li9KGisUjEiNCbhuRirTfGcxQ6NjgG7Zvdcpn4EMgjLrM3xQTaAg9DQZcXA7K5bV41Dywermoa",
  "key46": "RWWDb2KEe9ycrakj7DNVkvdXhvzmzDBczG2xsN1RGoQWmkG8gk9fEV7XzPvLc7ow5pHenxUeNZDLVMBurRhKAm2",
  "key47": "2MB2v48G6TrS5q8ejcbLB9ffdescYyhB6oL5aqiBxngzPD7rcAwCTTTroLNgmEJcUuQToDGh8sP3XJCn7HFRAJG8",
  "key48": "5gRcWPsJ6gcshBK7LGvMtcEfgZF3jEJSvKrU2f24WVNPUo2e34BqFo24XGymUnUEexr3wjxRBGoaDLhhZiZeCK2D"
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
