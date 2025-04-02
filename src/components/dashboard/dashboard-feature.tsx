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
    "5N1G1qhWYCtTrQ7XD1AmZFecrCmD6udXjSaQwcihJNXjELbpv6HrUrTJ47pCqvEh6HU8WbigmgPgpRkm8qqLDabv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uzgx1uTY8imZe5rPrnmZEKi49D6NNRHHXn2cKH6xMnYARBVHDuwH92qPBkUEc4saAn5njUC9NbirY9eHu5osMjt",
  "key1": "39M7MofLzg7TPiuoYrb6niBe74kMjyNsSHy5vWRumidgGg5GbGWKBoVEXZpBSukHPdiaVWYCXVnukpEH4fkqay4J",
  "key2": "5xUorezDdR16ogW2x8YPnw2fhWy4Rz7ZnWDAP1x8NvQD8dazg5doGDVYBfZJ9W1mHrV6C9QsJ9348xa7BmRTs4He",
  "key3": "3uRbwZxBQub9AA6zdQbEpQb7hGLeA7Ktiu98FxFTjts69cx2GQFn4kPQ5k9B3zJr55YctDa9S8hBGZ8c4chCPgJ9",
  "key4": "3tb5Y6MaQCvj8CwxArXVtVxW6CQnRKt9McMcmdoBveQKYViuDfQ641V1k48ZXPxSaibPpz12bo1UTu49NcJArnSL",
  "key5": "3UA1MvzxA9fjTCR2gvy6uCZdaMtT1Rb84VoBmqX4Sn8DQsEeYvSpLdavWaMo1yaYyuFEb3fvg2B9s9GzSPPKeoKG",
  "key6": "2yfWMpmz7fp2sGewnGKnpXH29BDrrrRBz4JerQGLHyz5i3qMCmgmHnpMr6rdR5Mxw2dLmBYeFsPTPSnftanSEbaR",
  "key7": "2oWevuc1iBYgA9EXkRH7ofL4VhAE7CrvNGa6NP1c7KRdXgDZvXLkUdBHQZUwBoFJzY86ApWAJjKhF1E1MQQAhFNW",
  "key8": "36oW72xX6baeLvHFkuJeR6kxRYX9ZaX6aRb9y32EVjCypzUvVaAXWmRgyaVjfHqFe5WfEwkR7wgFMycRqsDSzW4J",
  "key9": "4ngJQdGUv7BeazWBm4rDfxKGK45TBuCeDTgd1wXLjC7B3UszqhneoYABTfe81P5ojSZHgML1rEae5cTgJ3QUX59p",
  "key10": "3eH3L21x1Eck1WaWy54y7CkS6WQtgSaoYU5KuetzsmT6paXrkFPcrC9EmYVUm9MnBRTAHhggpLd1CC41dj9RZroR",
  "key11": "4Wj4xCMUd195ukadPUscSZaMUQiz5u64wBw8SFchPDdQa5nD8jAnTv85dEUPedZnVeqLimax1qLC1UxWXvjCtvbR",
  "key12": "69CCjus5wXNTW5WWkx9aYfottxNhPVtQCE34LvTXBqDJNPdc43mwph62ZP5Q2eU7Ysq8ZfJsGCNmKoXmdLUSxvQ",
  "key13": "5hfGnernRDcpoABj7CY2ypbcqX1miFALv6zcy9MmNnScGSw2uu76tXdy6HeJ2rjipqg4XD94btRXDG9CgyCuQEy7",
  "key14": "3PpkscpWSqaJqmZDAhxuhRiXLKn665T38rkHuCPvtbiX6PynVCoiNyphNAf7rHSKYQWJ9pXp1tXHtZ6fnY9MJ2pG",
  "key15": "3Tu5dqqZJscyAginPF9DvpWtiTpUWwiCUCkCHzcT5wEbbUejkfeekKaLXfrpzpv7V1oGJDuiWDijiPtsqMne85VE",
  "key16": "B69Xef1AD4gR6yGLao4VnMd9e2nLVNxxEADnrsqPw19e9pNaKVCTySpQSQ1fvq9V6FQ4aVkWSANfJPHJ1q1EGyN",
  "key17": "SrFe9B3DrTqQ125cYhR1h88g2nRXrryXZcXTbXtpxdDoerNKzhrbKJ61ihP6qSPpgAkNEYzyddFPVM4fKdozCnk",
  "key18": "3qzGityk8zTxksr8K7apuavkM97fPSeaY5iCsK4LtFnhprteoEVmoYLc5FwzrNXekFuLgGad9o4D82DAXWRuDTki",
  "key19": "aQDSAvUQaAXAwqmC7Qpio39Ni2BGhQbFdto1tG7GnBvRmCcXd2MfyM1viXp4dYHRspMAqtYs3XhNkaVzsXcJPXB",
  "key20": "4U6KRJxt9EWstWt9ZAwmPPSNiU1QwLMQp9G6RB6EJt8xV5NXbsMjV2Cd9CNsRfnLfAQTS6ymoAN9LKHeeUXBZWva",
  "key21": "3MiKdCnkHmktfYQc7qVEnyugAno9xg9ow7Qw1QtkiT97WUPGLpSrr2E6FogTNVgTVQiwMatSb223zFKECVdWbMF5",
  "key22": "3ThuxtzSX9UZ6STGb4rccsx1fR52Jg4Y23miCJ12zmoPWAg3TZoU278WQ3YYoMQELEzFA4JmGC1y3BUiPsJMLAdf",
  "key23": "2vvmHrHtPKiCe3LLiQ9sCqkoFJQsJLVVH5ndjep8H9Wz7MgDNvm3Vrrmnep84NebVavaHbEjf3tSKema5CjBd5X2",
  "key24": "5q1aaQPynHA9hP8ePBFhc9uB24mfuuLsGjp9PkpMwFpvVE2to2vjnXTBGZ4ppZDrKitqHc7aHd7REVWi3irS5zYY",
  "key25": "4pjZTEGnz5RGpYvvCWGEvRYcgkpnsuUN4aWZDUDKBRXqg1nswByrgwkkYz9ag5Y2iCEM3HN7f9fVz7C23jJYwGYb",
  "key26": "3o6wnTD3qcEgQkJXpeaga2it6d7iKbzEQkZ6NCacSymBYchfFvUGosm2LS97nJcX8aGqniJmg9wEbAeXrtaXG7NA",
  "key27": "5Gy8DRq3Sh4TJqwdBWQXvhLChJsFMuypmNASDnxz57wo24RazqTXDBRqzgmX8kdLdYKhCK8R5FnKp1iAMdXwEtPA",
  "key28": "4vVub3M6MhuK9KzfkFNuyt5RsD1c6MhJ6ksUiFDDTeMCRviGUHB5KHZUoBm2gW1VRtfjcXGbr8r1x9zLheyAkeTV",
  "key29": "2K3Vowx4VhyhrqqaGJ7sFjUsAJxEQuzzSJfxuA17tPi12Zz8udkMjVhHr8RVPok6xEFfB7Kz3zvooCXGm8s9F1hw",
  "key30": "4uN1333umdEpiJ6FyqQPJDpdf9RPfLShfUU7LudWpVecAbN9HVA7VoPypRkAuG5Dg9FDXKBtHx7acfuR8ZZ2F2rq",
  "key31": "3uLuxnd9331W7M47ZEEiWJYH5gThUuecGHqNXoCeNiNhFFZEdUncN7VF3DNaCjKENEEz92QRBqUuokPLz8CTzXkZ",
  "key32": "5E2m8aQ7RzvXmCx7R46XpJrqbbgbcwBQ2XbRWAX5HnKQbFcHfudfTsh6e9qcwvh4VnFLscwcS7GDMquwLAHouCF6",
  "key33": "2LpYFkyncM7dvnCAUuMqkN8SAzQGgS6Hm7e8gmBgWHAVAUR1eWkntftLG8Cjz65RAbpf66a7YYEi8thVGYQ589fF",
  "key34": "4ieJZivSurAXrAvKkyWXNpQDHFMj5gSJneRtBARS9uZRWbToGnGxWAWUmJGD6h993VRzUyg6ooKFyZSzwZeH49Ff",
  "key35": "UpTRupSkseZDde7iLqcqfckwk87RERhkwRPoQBVK27h5ysZAjBejRdyiZBy45FvPz2WC7fUSTaa9GA629m7C68F",
  "key36": "3KajiDKQqwaXw7ejaPnktNeBgHBdoBDdGg71GYEMaNFiekQZTDFFRJD2PcS1xqDC8BZEH8ecnZifpkijV1oNcDdH",
  "key37": "2QpckpCGMTMBbfCv5Y8k7x5248P3afcCwb9rTEzFjtCRFgWhek27NhXSd9yooAatCF2uujw5HcaxFkukVXjM5f2r",
  "key38": "AoCJvJ6ac1Y6whHUV1M9RsECrFH36DYj1fgJwLaKJqatt4TtaMMojXSHtSWj7ENNk9tbE9n8R5TAsEQtqNPCH4n",
  "key39": "48nfU3qpataivpFj97GCzMzxFmapKTEeya2aTuBaAJqXcvRs9513EAmW4L4q5gg8KNm6cHykciFPj2RApA9JYP8t",
  "key40": "2MmnAJxzRoP6samavuEdnB59C3Ruq2Ah2VSzTcAqvHdnhc2d93PUhkpPAcjxmHer3me19ivjDVmYdHZL4jDmEDYs",
  "key41": "3guM5DMgg8mfJy6ushLCkPp4Bf4mkSorx9wU6svJAfPTu6scrXUHpGB4U4SB1oeZZuwFhewt9GkozyXiEfaEvEY3",
  "key42": "5K5ysx2u9u4srEZkQwRfE9czWxPWWkEDRfgMBvYUC98DrYq9BeTpuWyBhLZiQ4kiheRosdsfc2LXaW7KLnN99FbE",
  "key43": "5jiasyKZovrD27rPGcesKG29URniKkmqTseamXmgYKQZgrUgk5BPoUA3ouXhCWsJceBraiuTdrWXnxq6ZLRCD15Z",
  "key44": "1bAk5VDnJgJPzqVHv4WZ1J7PGBVtbehsg1ZpHJzSFcCQsenFaeSxvkKvmyP1dqhjvQngod482hqfs3WWk9EH5jd",
  "key45": "3bwKtiCsYAHhFUwh4hxqiEs72XGy4PGCynXbjJ8DocofR6peo4p8m4W38YCCb2hiMdmVXC6thzJDASSo68Cpef91",
  "key46": "4RYndhiJEGLb8sBj4U8G2z7SYUTukkSnKP9MaxiCUwP3F9MnhsKxkBeBXVf7sbgWcrW8p3wPrS7FfyR8y1SL3TPR",
  "key47": "65CQXw3CM7EJRD4KMQhn14FZoSv4k7xvpGrqTFKSCMZYdJVPx27Y58ooEK8rSR5PeT3mL1gsqxTCUh6kbpA6Lfnv",
  "key48": "4USsHcySWkcfRZVYSDF16XA832xizkJ5ypBSNAXicFKHnMKJsNcb3xf3ueHzJGaJvpiLfzSxa6rS7PvA8DH8zHz9"
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
