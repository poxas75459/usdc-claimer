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
    "5BnRk1kM3hf5GrhsVx5Hu76sqRAQrBPG9p8fQsM9MEbRaLr8qN9b5AVACAqyYLZSUotXn2PkzESqLKqhU4pimaor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jG76DPssGBtQSHs7nZ73PncaoZxXHRKHaiMxAYykvwR7B1WYDMb5hiQYkRR6RUANKh22qfoGVYSSoJFf856QE8",
  "key1": "4kdes5PFNvYHxZP1caP64DwgNiTBNN27hhkJ2kXn3vsF4Fh4s93Swjxigzx1kWKReJusTAfoywboJhDnpFBF8wwn",
  "key2": "tYvUaRamPdmwkfPFgghgqayuMwQTX9Aedrppc8DdZBGoKaRtyWTsLqQcqTqBBJLJuNHsC4kTZLrc2Dzz1naKky9",
  "key3": "2fkyDhfDhpTBiG2JZcGycyRFECExRPsg6Q1TjzgqEA5WiivQsu3pi7ipTNKvGNWZEJAGX35ft2JwYkP4DfHBvzEw",
  "key4": "4Dr7CNpZdCNrhamBtHxYht3aZDz4pTatiQgGdHScCQVWN8HHjt5g1Qi6vRVcMLTncVHszT4xKxd6YyZ5yABTU1a4",
  "key5": "3DpAcyKTPyuY52Q1MbaHppsDo6p3ZorAYoSCe1yBeqGB7RGZT24WpNEfU4CHGX61jaRYz1n6oL5vS8AoZLC9AqW5",
  "key6": "4wcRxPkvMWtzqGM7c5THCGMeFppxmcfL61AYbWrm69C7ExywLAUULqHV1CWxboDNizQTjN1ao7S9NoQWc4ypkPuX",
  "key7": "4oYn8uRMR56rLtYriWq36zcYjYZBfCJQkKHxhR9Rnb4fnCAVWEY2DArnzHu8hEpf7kM9U6FXzWTXZLCMzcckzHPC",
  "key8": "59rAD3P16ATC7xPyGtnsNoY1X3z7QcpLUnP5Y3sVkjWiR9xjZ4M2qa9GdkYHjEp9U2nCqriCCURwaFQBWvVKuSRu",
  "key9": "5Yu3Pon5FZCNp5LUb6QWig4LDkpW5JNr4YCG21pbC7JZzgp3RwRumJFvCQHXuvsYgjT6G3dTYu7rJAiyNNdJjbjj",
  "key10": "4TmQk3iAvDp4Ujegd9xam87KFFdDm8kmqbMz8daiJBY57dnZpU91FdaWFkUpxvhb9XkwUNdfBcpeZ3MdqH8DE4Lo",
  "key11": "43o1Zz5y5SvjwU7UTRq7UR5s9RoETMbxtkQDtMNhFaPvahGfxpv27fQHhoSu66w4j824tnUa5wbsZG5yjg5o1gP1",
  "key12": "hKuEzjmByjLcPhNphgZzjmdfHvYSGnkdpasKLYW9ZsVQXTDhR8CAeEPatUhbELKSbHJg9c2PBHQxxL72gGiekD9",
  "key13": "67Gbv2nJZkLMJoVkBE8Z4CvM4WNrc3qZHn3bMBRR2hBaPW55ysHVuYsQ3y9ZwWt8CETKS8SjL41ZLawC9yA5sQRv",
  "key14": "444bV5Deg17bqWmxSwes44AnSVPWwu5oMxmNS3BCAcRhNSKcaEzEH2Yzh2BdLUUGLWVoaXU68Xof4oo6zScWnRjF",
  "key15": "uC1MV524ktEsCGd3pa4Vy24YoWuMLWGTRzao8W5ma2eF7owUV5aeJDXYewgtzJAdKPkhkpFUWicv1zuws669csf",
  "key16": "5E5kKdtoWMjoXbRakWxLkVkdH9qm8NQtAXwFp9jfv7mPi6bh98BHda1ZST27ka3quKzCVcCvSAbQAiHzSTM6A94r",
  "key17": "5wGDsfzG9LTrtTF394g3uf1rWGweyRBaumCMxC5EZ72vnzNxigBaG2nDAqsbNb7KSATdNegCZ9wMbqbt5TcorB4y",
  "key18": "3NQRXg546bMr2yZYuVcToEGuQnhfLoqVYMU21McehaS9tes1foU4L9odNJqcew3HpU196zUimUzPxwDhGDSvJLqV",
  "key19": "4z3DWYHFc48oyFJZcvjadeE5KHq1xpePpkYbMBsHDhQGkdVLAKNoDuv7ZfwiiekTCtMMa2K6Rn5ZxNCZ1rRfn4zo",
  "key20": "2dCzdTWns2GLstAATLSGJxZdUF2rBvzPN4pd1tkWHEbGcL2J9uvmLHPJNwdiNrBYwrQiT8kpRLjWtCx6F6p8KMve",
  "key21": "2wMoVsapvfkijH45TU6SbYjpVKqkTxPJTcPxL9cCAaKu6xjv3BYwH7DYSbZNucz9DQVegeH1rFgAjnnNtRbZXrrq",
  "key22": "2pAt5K68ywaZDUtmXzw12vBDEq71x6d22ZC6CNJ6ZXDx3Li8fTpZy2k8VzQhBNCChdQfb8cGSQUPy2JzfMa6nCtv",
  "key23": "a943VfdCUC3tvKJcSu1JjuLoCi2kGhsSagQH7WTB9cgUDhYztnTAyVLm4zUCDMaAWo8GVoXixXMNZGdWNv6JCUC",
  "key24": "4R8tTo6ZZRoXQn669z742KvePkj6W93X8P325KUvmiKvYm4EEXqttzv33d7tgTNEY6esJkz78zuPmN6utWoj79CL",
  "key25": "5AUKydPkLtQLq2PqYFTYggHppxNzSRBc8DBvEAJhXbLgF3RTZQzHvhM7Qp5ZKpjNdnFNYu7Nqsy2eHscxo5H5pRb",
  "key26": "5jpHwB7CcsEzr4MS5jJD3haE447Tn4F2Hrr3t336nY2H1crJzWCzpGScJGKRwkaQzt2viP8hozuwhCZAHEKCZdTk",
  "key27": "29ZcE3xF9YCYEWUsXwxZqS5rifVW3eVGLnh3imDHjpk3MbfkK6NnN6zekKuw2ZVHtjeg1TCj1gyZ58idxhAbGSVg",
  "key28": "3KbczM5VoDWsaoTnoMV3FQ8RuU3CMP62QSyYUMRCG5LbBnnMH1peFuk4Fc6BeGKPFzo7W7tUV4LMBZWkavxLDyEJ",
  "key29": "5KugGX63XgMPLBdZ5NnfcGNVZakjsytM1kV1QzbEFx8QLRped61YNwkB41MUohdShPkSfTEsiEbcCzhVd65W5ATC",
  "key30": "22ZU69sPLV5zXqMSY4qckn5QQw982qdzEWhFtbq32jyQjiSXeztD58s4wmDBQaN7AS4Aaeh2rjhx8mZPiUhgMfzb",
  "key31": "5NgxxZWH97jrPU69ZXy9jA1aH6dNaoW75pZP3vk4uJR5zLaoHNhg5PB9BAQckSye4779QcdW2sHfYoS1Lzgpja2x",
  "key32": "2zHoLo18uCjrYTUfWxq6s7LFdETN95QUrNGBRS2PHH1F9k2Dp4TdwGHmR84X7d2hCZffeHWgGZvBAQwPJc4HrucJ",
  "key33": "4mpTs4W4yWHDg7TH1vVgi2Xv6cf38mwTvwJwUComLuY4YzMESCUVgzFXayrFqbFxC9BGYDu7RQDkX8fC3DgF38Wb",
  "key34": "2fSzsX2P5EP6LAVWrReb6E3yetDybLMZF8ueN127iaEcd5DqpjvvWst5HyEihbSVaMuEGLB9KFGCE2PB8FcSLgby",
  "key35": "TGxdyRnGAanBUSTVhYK4evYySf8tfEjKVmAMK2qeBZ37upnxcSLBktuj1SBp461znqJZtHtCRoEWMB1F9fM92qf",
  "key36": "4KCB56to5fACxr8ifmNDqb7jEoLjFQB5YYH7kXvsA1AyYAaiH1FwfkeYEB73FSJjnTCHxS2652Tmv9U3zuNVTYqD",
  "key37": "Nr8WYhjfFKKwT9YLzsS7yHAFj9RiTbFA157aXuz1hthHz2LAqYdz2E5j73L7tjF8rHtPK6uQYxd1jiPhg4kV9cm",
  "key38": "23CV6cng2Sgar23tjvqA6PTja8ZY1B2Pd2TzCrPkH3w495RRNNJumjvERfG9ds9R6VoAuCYcUDft66QPdwtxqwu6",
  "key39": "3K8BmWvQaoA86HnAqutZ4uvN5BNqmyWBiKDzy8W9nVfvjoLRz27xp4FPoBYGHzrgG6BeQpe9K3Uhsz7L5S8SXZt6",
  "key40": "3dpUbHCENDU7zVroi4Qi3wgHp3TnFJPoci9p2m5D9vb7y5sYvKqcd2pcR7M1uGvHsgBnN43Sx1rUZ6dnfw3TXsrR",
  "key41": "ZqDnUdK7txCYeggN2p228kWu71ph58JhhaWq5tXivcBuXBmiJSS7yFX7aNMduCVNUz5v9fgj6qNcx8hxsYsAMRS",
  "key42": "3TFuYdFcf3xeeJyBAqXxCF6mWfdKwpgGFGGVo3P4T7NmrGRdwv7gBZYSRVMgkmPC2KnTHgwmHkAjmzf2eBRNakAp"
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
