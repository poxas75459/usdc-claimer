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
    "3NEKCRn4N7Nbtw7RMLbDq367rWRqreey1ygjyN56wj8JKqHXMRa8NfDyH2Zs46Xke7gat32nnRkFDeZe8Bvyrs25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fAr9tQqnsaAQ71Q1KwqBwZ9nYw3Djx5j4vjD5VS5kamnBwRYPSLrLfK3pQ8HD7hMe2vy5haDyQHFuPRAAfW7SoR",
  "key1": "5Pztxefb28HEXGFNnijJFsJQ8Jqhsp9occg8mfRrEbF1JGtq3FuokTaRFHSXqgPevo1P8DHvfjjBzNjXJ4fXHhx4",
  "key2": "5q3XHwT4FUe12rMmGj9tmysdFqyrAx6wPUb6hPaPKPZv9Jp6Y9pVBvn8UfdZAW5Jm6nnjbXLnAjyYdLXWxtsCQUs",
  "key3": "5Hcdyi5cijDy1doNHUQLFstU6MRfURkbn5X7BbjzaMAa2kCa8ajcHScZvRZipF5mwjhEVYDK6hEjnAXd8169NBjU",
  "key4": "5xLSuj9iyaCCtfWV8se6Xs1Wp8FmfbiQYT7zQXhaXUVZum2ZGDkYT81fhTrz2qPdqqarGSyCgCXxx28rXGK52Sfs",
  "key5": "3Xk7fGJA6XYk6WiifEQ4TTv2Lu7zessdEdbYKSijTC1gbVb5CBNBALZbdZuRTpdericUpMToDHK9pEqrpsMsiXDe",
  "key6": "4szZvDsBv76GWLET8iScY7iko6PW6r1SS5SPxs8BAfWph5Nb5sqNxBAKmLeg1235pGaNzVeGbzM1PrM6yrDG2zpD",
  "key7": "QUXoJxWR1sszPJZPQCrpc1mmH5pkRHW2v3pvPQGzP5to4pw2b1rgNqFDCYmzUv24eetf2kwJLs6ZpiL2LZhJY6M",
  "key8": "tGXFNHmJsU54oFFEinZq99Rng9LmUz8LHGUdG7S1ECww9SUDT4MFj2oqbQJ11SbP2qyR3Z5D4SHkYRqm9Maa91s",
  "key9": "2dMfwKxptUGCH9WVgRWx9R43hGhXxBWMz2aAKPUvuGr2c15kN46LTRe1Po9PrqCzhNcGHPNVDrMXKBPc1Xrs5jgy",
  "key10": "3e67FcNgt5Uygd2VcVuQ5gc6o19oDU44MuYUfw6rdLb253g1nD53qasVLnsoFjovhjWcCUCFWwg5cawKB1KsApX2",
  "key11": "4W95ZUWcGCGwMpmM7aEq19YCcg7RLDNLaty8xxLUkivp4PCpytD1vJUyb6x7DWjrec6NMtCgVFEZCSaZ3RaFSH8P",
  "key12": "2gSkXKK6unoER34RgNnveLdP7fJoJ1x2JTWzgrVGTfp7SXDFXbse87sHJPKYoU58hSdhhyyhdeXRHzpgBct2gm9a",
  "key13": "5LmK3T7TFpSnwss8CSzJwKP1vzZ71k1qpSesRCHo2VJgK2gsJmKce786SL9azeYGYuf3TCRN1r9MRrfAkMN2YZRr",
  "key14": "3y7372vXyCRykPGdm2TVLXbsXhtB71QE3h9HLz8biRP7a8xRTYcHAiVxH4fjhfBzM7qxBkdPdQAZJCvq7uAnnJMS",
  "key15": "3xRxapzNpTnFpH78jqGnurY5cGtHGhfbpXAU2ZzLjdzraSPyo5XWLXAxNmjjgb3gpTPYrus8aXmgdCEUWqxVLgKS",
  "key16": "rit4uzwbUoc6w84BB2GKz2AbPTA5bHwxFZ2TNSmEshK61NbRyu95S5BF4bq8347e4SKLZS9VCtBzAKuGUgTNWvG",
  "key17": "3QJ9g7SRS7vqAVKRdbhBZBSHpE2s2aBjsftAJTGkduPWnswT357ksWMSYqrhRVuG9hvacSznRRfMFuNz8nf9uHNg",
  "key18": "2DtHCMF2yypdUxvXpLA2DUtwPwbhKg2dV79YTXuwxS9Sey5LUvnMLB4uqRquMFHu7wfjRVXp1KAZKhS618fVDAif",
  "key19": "4eCXVv4dngm7LME9ZhsnEQsh7dsNSQKwp6tQ4rNSy8jgaYTk3Z7iFj9C8aRRzya28zonTNhet83ad1CRpzRqB13o",
  "key20": "2H9cMbPy6JsVWq4cKDbQEYLurMyivCV2WGjMcHjGtaTwJqCCooqpuyy7q5vNwPtady3xaKFvQ4mpVEVqGYca4wJy",
  "key21": "2Ju9Wkd4Jkrh9Psh6fsmSAdZ59qfJVvVBL1zhVYFaz3LYruehCxs73WRdj5uSTYYaCvdysp5zFggLqdEhhZLPSZQ",
  "key22": "2d9yPumFfC9KMCyb1TApzQFWyiZ7nCi3C2ybRRayGQ3XVtgswsoNpLtdQt4XaRGyPkpSVPDQZeH2USJTDmYrkgMM",
  "key23": "2FKxaUu82tnSvurPEZQApPv6GE5LdW6xdNXi9pvguj7RqrYaNuizhGdT2q7yayKhnrXfc6UNexJbutAFQsW7hzB4",
  "key24": "5Hx9Hfv8BSQ4mTkfUvoTYMEUqXmfHNnniCxUDB7taTLvnYB3y2jMGsp7PZcsZAdADks6TUrDrwBPHwNTW4qL16T1",
  "key25": "vMcNvShw3EbdTSyq3cLXjPp65dJha9yaA3BFxogcDzguuxZa93SgqtM5SinJBgjs29Mx8u4paKEYxYt7Avb2WzP",
  "key26": "2rvrW1Wh18vBAFXCYZzU4aMcwNY8UdrSR6h8JqsCNFZEXuhygN8dNd32a2aNFX1W5fjot8KwW93F8dNeNdCfdr8K",
  "key27": "5yp8sKx9RfcAWdRsE5GMJZMjtcJDZt9aVocrTwwRWbYi1VKm4V5UX4JXR7H1J2gvpWzMycRuueuqhFP9sxtLNfB8",
  "key28": "T4x5SMUGMQuZrMkdVdRBaJo4tbkbvK8Gn7tmseCiurV5rq37hBZgrw7jvob1rpT8R9xGnC73UCx5GoQcx7zrA1J",
  "key29": "5xzkpSUEAmP7NJTzWnawBRQPnfEJ5ZxWNfRSGRivXv3fQS6Niudhawy1kRmgSCjsV1vkd6Dhd6CiVu1yosexf9dD",
  "key30": "4Vmu2XxjPNdqiguChQNmPFqdVRsZXFMi6KZBpaCMoFdVgkDHZbbMARn7FZkMV9yfnKa41ak7UoJcFmiMq6torR1F",
  "key31": "5Sewub2Qf3VLizP5EhasN5EGizpreQhdz6wHTQAqEvR4WVAJBb98jDN5aneKn2ABnRUcnNEG4eMtpz8efjPCDBwq",
  "key32": "3zvEFxMSK9eFbUzupXs2SdTozPTpvmy9JpnVzfaG6AsYNYLp3RVDJLmTzNXp5S9RyhTSNu4oyA1XmTPp37F3NXWF",
  "key33": "4u2YomAYBp1EcC9mjzqDkE2PAcaQYN6d3FmZnC7m7vNZ3ZZfV48fAwe3s8rbQ6dRoFkc3rsEgkZtCxFeatcWRSZB",
  "key34": "45HxcYydDsF2SGcRCt4vVmFEtDjGy27oAYyHGRJWJ6bpdEwWa4KUZfz3AygQq2th9NHk9ZtzRmyxDSmZJ6JZ4d6h",
  "key35": "3mpaygfN64Req7Pzvb3Bu2NpbmucRB4VnKBZ5Kipvp3JbkCVT8xsdU3vKPUGKoL18Md6LRHTApBTWq3Njd8hQZ8R",
  "key36": "4tDMRNZDdCAwq8Wj7jtkGLN6Lx73pmGUDJqssDbbjTwWvV8rBApGd1Ai7fYDpZJkkRUbpAZ1RA9mLF5nLHUe8nFs",
  "key37": "3ay4TRNubnC6wDymc4XvbTBpL6aRZAr7Xt1Pu2nVZUZeBU1nF1EYBNmKh3AyR9tK2E4K2w76DvovLzWn4qLf9fiZ",
  "key38": "4qH9sBpUNnUdAyxU2XQubJTj1jQ6zAyQ2NLiB1rRJqMmCfPzxRGFWoPqFwLA4MzHtyKu2TafEKM4wJoPfqDMs756",
  "key39": "kFjnSx7PTcounRp9oZ4Vn6DAERHpk3NGeuGnHxZCt1U3ZpdaTWgf51KJW6phBZQxWZUt6S8nCrtnLDfoDU4Gr98",
  "key40": "5yvDcksZQnZFm8yNTHqE1BnD1AjYnQ2oR3GxRUiwmPdLRoynhW8a4prJJPENzhnU1rRd6KvgDYu7Ma4XFH1DKudt",
  "key41": "57o4y2xdDPxH6LVCFRH9s9KY5h6oWMNuZZHrhACriDFhViA4WFEQ87hDRAEFaG1U4mTnZj4NSrNVBcne5jAjpmZy",
  "key42": "2sPNvC2ovrHfVUqpipA3xhh7U8FqR6Dy9NFw4GW47bgumF17C2ALurYD3i8PGfxFrGCJSWfAGzBoF1JXX2tQcbaH",
  "key43": "29HemCV71Cf3sbjCtNaKXpSRpBNYgoGV6RU7dTT53zsSDT5Z3urSmWZx1zaQAGMeQJ54XYzKMMVe7QJ4kFYvVvQY",
  "key44": "4nsKTeyxrGXCGVC2n1cGKcJrYWCyGjojTu3UeHjNM8WJywkzcxSS4LcwbatFY8RjDtFGH9u9bFxbhiz88oRCmuCS",
  "key45": "4JsbaJSSrDVBUw2SD2EUWRtV9nUQXTnE1G3DT9L7P6xDMZTB2RTKMPhmfRSpHVQ5r4S6FbggsfgqRBer9AaMYRXR",
  "key46": "WEHqwbZvL3o58iTvx5MSfsqGWeLm2HGVMbDPEz27zY7aARjCRLE1kbJbCQB7wvERbbpkHTuznTDmwb6T7UEGXg3",
  "key47": "31YP1LAV9u8WnLpqie3mrNka25cYd19RPhJ9mEGSazTYBDijjH2cKY3SqZiaAnKkvwnUg2yGsrv17bhDGqLDycKs",
  "key48": "5qFctmwVDiGAECyuy2EuTRLTKS9GzgUS5LDjnQF6HD3knqpLvA8wkEJZES11QfAxbbYwaMmR4wh9Rdq79p7rdaKS",
  "key49": "2fJi4LPa1cU1WjhDUej9c5JAqRJ6M9xGeUKx8MdEq6nm4uwoGFhu6nx6jFXr7a6pxbwipDB6rJtft7DQCX64zaEL"
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
