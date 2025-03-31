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
    "38acGhNRp5KtKwGuH6UUwN62gZ8oRELcaEcswRnpx9aHSF2XTdbeekQwuJLNq5iUm2V4cthjnPFutpgiH6ugcPV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5NhXqGYzyKuF8xDTgg74tZvDXRQP7P1rRHY4nE6kS7tekub4utBcKKtngYYKgyKsN7Fh1m7fD2Pye6WJWx6eZx",
  "key1": "4qxXEhZMSWNvSi7uh8ywa7So32H3HwYjmqL8nuhgwDHDZnU38xY9Nptx3GKYGzFgbNqwAQzWhp37FNCMXDqbN8gc",
  "key2": "4hfgqYSarmmtmWFe42wixtUzFKq28PnXNF7KMAneVYtpPqododRhksiEDpFw33nCFim64Bm8KtLnZdQKnuzgYxpe",
  "key3": "XYgW2XHiT5kvy9qhEkKTHi5KVmfxgfCAHKYo8Wg2vJHPa7UiqUkbcEKWXApDwxxkDhia55kDw1N6ivtTjQKsDVX",
  "key4": "354oZ1MRHW3LHyNFPL5GTSgwoo3FLAAY6UDdZBL7m35WSCoUrB7FeaGHv7mrTLG2P7NqAk231zx83LgPpF5sXMJy",
  "key5": "mEXpf7iz9q5cLhNPWhJ4Sisic5D5iDt6JLohitGP3iufRFzZidXR8UuhMn4nAuLFZYUfW55znvibvA434eu2o8m",
  "key6": "44qTyu5JxqqtiyUaibAbYBuia7DSgZjudpDWpczLyZwat1XfVwHVA9mtt38xwUFPms9wB5qFQcaHRGvrPYT9Ver9",
  "key7": "3mCKTSFixRgEmSS62R6vhK6QB5G1CtZZhkfdeQ9a4MWnNb1xaXozwTyKF6ipAokxughPVCU649RtPpaZUWcZAXzu",
  "key8": "4tHaE4N1vhvK4h6y4QR4RtwNMGnbjHU4ojujrEev3heXFgwR7xxYAxsHVmwpeJrwdgvJbmcHc5kn3QFJYJ5ZuRLD",
  "key9": "5GEmYkY3mPZix3WrHJsvpt5m4Wd1exyDgdzi9dMYdr2rSjF5gogG4dmbwRZFbv917TYNazb7cEdNEwY7zTN88yNJ",
  "key10": "3ZeU1jxE7sSWFCL9TBPoMVzB3Hf8NZXq6Dsd4R9QoG1hg1dTosz5ATqa6YyKS8rxes5r2GrTFTsLQJ83rnpQNZj7",
  "key11": "5UeqHqnw8yrvsCqnJQWLMJMBgRgdXqRWRYeaEUQomUEAFCWQAPLuG6cSffZna9o6GqS7ee615ReEoLHL6L3UK7TG",
  "key12": "SQAxUVgQpmJq9YccUNipGrWTk99LUfbAgMRB14FtR9DataRj6DmKHizjd6gCHkvpZnfj24tVJ4yXwdPpWQbM23v",
  "key13": "3nhCNjBVBpTbgwabtFEUWeeLpXwtXSKCNVoy9bW5cUT6Qu91wmRxbCWhXun4wTBKSiXCWrQLTQ5jghqKQ2n8BPV5",
  "key14": "51prpea3AG5oQLzT2Y9dFESvgcqFV2u2UHxFLnV6VtXA1HNaETCnMvE2qinD24nA3G1FQfBdsZJBpkX9wz2LGtdb",
  "key15": "2mGzPWzxmMpEnsYSKWjYx2rUmPGSprS3nkHGFmg4UcJzYgmuTzAiXFR1ZXn5KZ7xxixkBupquy93UmqWeU539kic",
  "key16": "55wGq8MoJpUGypnxA34sgDbADGHYjt53uya3ULZKYrUk7nWWjHQuBXT3MkNPhxERM8y96UpRej2Yuvzu9BR2mXjt",
  "key17": "63HL98DVEdRRgEuT143FfzRfLvHdb8KwKMvLr15ZdATg82tgutdgDT8RgHZ7D7ZsWfJgnLVnbE44jpg59ioNQjWy",
  "key18": "5qyEFCSEFTdg4Un2781DmHHE295QZhgkLxJh3YCF7EexGLdZrJKY6toA9R1PFSMnZ6zkFVQRrBmh8ru8uqDXCt8k",
  "key19": "4cD61bo86yYBBejS1bpQnn5MQ5ZzVsZJMuZ4T7sZGveD8vHKRJmAkLp1L1442VGoi71QzguG5CK82oTBVPc3di7H",
  "key20": "2moRQYTRSRRyHjWihNjp8dNTYF4PZfWuHmHXnvLJCCziZCyuj7BWRriRx5E4feBzcpie28P74cy41LsYK5ezqcDY",
  "key21": "261q9iAV18XcRx3nc4tVqoACzTTME77yo2tEVxfACZnzZqpHyE9KMZ8mFHhnnk87V6LwJ83YEReitbrbwbMZEbqB",
  "key22": "7YN3BeRhZtydh6jw5h8zAoU5hKyvowTsMQCkNqcACQYpiaCaeN9MuDAnumvVLASzPvN38JCma9tLeJgut5JfDrt",
  "key23": "jt288wkKqnqKfBbojMNc7syBiz52MuGuwEZeoHA46EN6WPzEnQcqBGYwzV5hCDJtCBipKT2YwYQ4ZaXexbrAAFX",
  "key24": "5CLDNhBmo9ZTJeQ7AqULSyMeoddYSZaXACWnvtVocdR13eLZhYBQYey2VLxsyEwwa4L9javm4MG6ebBenfajiy93",
  "key25": "NYHSpaX4jjNSLG3QZSeGmyzNR1cx8iGPSvrFvv2UPeCSphZfd6thdj4o8UWZSZGFRKtbyrhtBa93R6jN1gJJUa2",
  "key26": "2Hku5s8yYGKS7ky8xQQChjpq38WzPfusge7mMZY2J6GgRM99edE76W6WN1UWof769MdpyrP1xzZQhj65cVyFYuQP",
  "key27": "5MorAhgdSUg1aFNNyJMwA36CRbV95pUyD4WrXrDBRQ5TXUvHQwU3nrfCfTPdrRgco8pwU1xWQioRiVKZ9BTpgocy",
  "key28": "56JUtXUeZWCGSgoH1NrJLeM61FnnEU7dAjDarViqzcPoFg6tgFiJounC9m61i9XitQfqsAFsN2Nr2gh3uCXyT6zB",
  "key29": "3S1mZJ3kUnT66fiQLp3FLd7HhYozVBvBNKdQGg4nMFZZhnXrEf9Ftb35KoLQiMSYd5BanWQDgwb9VnoaggcbypnA",
  "key30": "PDc4J47qP4sESS5QGnmf3zkP4TbihEZHHbWBNXgWuZDERrW7GynNjaYv36e1DfkB3yhnHZtAxRpUu4g7ZVEUP32",
  "key31": "41y4aJVMM3aF9q1EnpRPujGwD6vsLvEShwCWJLfCr2ELx9HLYwfFhtv3HMKHgj2MJLi525RpyJFBVtuQ3MGYeEft",
  "key32": "5KCTohVkDT7MUGESitkeGbdcd653ZLefgVFwSCQX4oRwYH1pm8efCo8sJSe5SutTE9AEPwPKjJrVnepNc8GiikSS",
  "key33": "322u54ZbwXBGPYEuqKvhobxAY1bzWAcSY1FSF6YTnDbUFB79CDJAabKU2aqU7HPsBmGLg5jFE5VnZi8VseKie8km",
  "key34": "5ew7FymnWa7DwZhi3r4LEnTAFjtGjWqdTkHpgMhDKddUeM9kW7tQXcGBGSEhC2dUUrai1KXqZvmfeEkdnKF5bYDC",
  "key35": "5X9Z6G3GPzrW8j7eBu1xGLbFkTquCfb7NBdEGcowVkuhhoZVSBjg2hMvbW1kRXZNWuBCJRjoRhxMK165ubpGcRiN",
  "key36": "5fLMdVntg5UcSzoDh1bvEtanr1k1yjKdKhEvcMUdjCZXTEFoQMXiD9zooYbJkpWmKfygwToMETndHwh5UrhD5S1y",
  "key37": "2ybQb8Nxd36wYUSfJgncc8iG1VvoXZfVJPhdeDwiE6iiigvXH2dD7v73osceaMwwFr2z8uxgejwAbRXRJHV4uGk2",
  "key38": "PDyKGPvZfm1z9dxHTjkBxAmEGCzD3SV8F9yf1r52gutZQ3SqzufWTbEE4pkWrueR8BhRd3ouug3pCLgJtqhTBep",
  "key39": "3rzJvAXwEE5PkQta4wSaK1BC8qabW3TCMzjV12cK5rWD6RDuViyhKRy66NwDzoAtxVARDXUpCHpiKAPD5sfW1b6Y",
  "key40": "48mempiV3G9nvDbhv2CoLnrBKjH3w2XY5XioMNByrq1YkHfmSs8AHz6rHrmFa3CqriHmfuPMbxurs8quZUsU6ePV",
  "key41": "3ZgrzfYDEBstLtzNC3ZUAxf7PH4BJ3YfZzTTPaBm2Uuv9JdMjHZud2WZhWzLAuDMWdvDF5p5KBi1gPMYz3Q3cxrN",
  "key42": "2xbbRJkxWo3ED1zH3N8GDJVjQURxWy2DNJ5o87nbHx57g5YS7npiH2koExvtMmydu7eFf3dSyD9JQ2BBJJ1QkJQC",
  "key43": "X8cK3R9mLJnzAn8fvGtpH96nkWUz8wAVKWVFGeVVJHMzg9RmkaqrqpNphGhCVrg4b7jr5x7JreHVjTtEWYisLyz",
  "key44": "5DGJgxdxHufQU8YihMpuQrwheMLTwCMKBENcZJziTXg9QVAVA6fj42T9WyHSXdSVfmkeNY81sPWYqBwfi3sDQtbU"
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
