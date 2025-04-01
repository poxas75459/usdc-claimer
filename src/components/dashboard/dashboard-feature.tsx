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
    "5AJDb4ZdGZF3Xu2NRfN912ynywYZoMYM12TNekxxWTb8RTFLVKuuhJ8PTXdzKrDyQKJLZtrxudJacjTcjyzwFRVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oasq7v8mjUEK6PpyJAnp4bDWxh4897k1bhBP9aAt3xL12iu1F6eom6NqT6ToqS1iJREiUcCFcLs94FtH7WRtpPu",
  "key1": "uwEF9FBdUDBkEg7gakkt4cCgyFGggDDL5WRv9cuy3gXi8UWYuCGAgjooaWpU329hmbtzgZuu2ECaWsQeD9Gptos",
  "key2": "3u9GqUwogoqd48DzsPpTaTUpKN13smenYx1uegVTVbbRVZXRQAozddqgmucpy2am8Vdw6UY1DoKC2tJkTn7f3wEZ",
  "key3": "3SMy4hPuUjsP5N5qqMvQ2RiRqVvWWAp4jvRgPfQZG5HcFuRRoyQAwZzhTb4GrMcxiKc9pZtgCqXuUMfL253LXQ4j",
  "key4": "4Qpe7vo5dWFoer7GMEXPsTisUAtAjX7ALoV8nrLojwXbGNtJKEidtyZRAVMMNFm3gF2CVzoxwyBCgipiUtUF2uzj",
  "key5": "2QMs2jjghN6K3KiFRYCi6s5dCzkPxELmVYaaGrKKedAh3cyLpPK2UH5V5vcctK725DiZeY5oWWmRmQKCGA2frfch",
  "key6": "36xrkDE53qYS2FVT2kLj1sEBhBKbYVatmseH6HGUuLDWETP8MTXKaSmWPHbT8ZJr6bi38KvaFLJZqDJVeVTWG7eA",
  "key7": "36reckhQRPJBPi9y9gepdZVHiozX96Qtmv5fx7newcLkWCi4eJvA39H9EPUfU8EBoiBSNEFeDdGddKZ5DUyA5mSd",
  "key8": "35gmqjMRJGHhvNZCC5SFtNcuxD3q13MBMqjT35VYp3pxcCdXfvAD7S7ygwHMwDv16iMj3qAMFThRDvxKDtRMcesV",
  "key9": "2DXUYmocFPgTZoCAKXbsLph3zfKcxt2o3KEqSvGFiLsPAns4jGL7veyeYUPb2xA3Xq1D8upy8x8WFT1h8xasMDnX",
  "key10": "665T5HCzpEbRtPek9ubMjoYgTGDpv7nz54hcQV7uGXvXmQdR9bAG2xHNTkTKQyDdkNGxPogAAsgada71TsLait3D",
  "key11": "5zQNizWtengNKuU9cETBBC7uAy3j7FuixPvUFo3BCbeUrux7RyZiSasWmVDmknQAUV92EDficX4TzdcTKmXwR8wv",
  "key12": "4WFPq1f3Ctz2JKrL9q6BTj9raRK9N3MQEgFV9FUpRG1qEm3UagdQf7bSBFTSPRNn9xzPt6GbNGPi6acMqmp8ALWa",
  "key13": "666bo6GSgDWS3x25UrM8Pwv4ixF17DZ9JCTR9M7nm8enA4s3tNtVk28o9CPb2UoZ2ymw53Zw31qm6eQRehfjuVhF",
  "key14": "3WQTzHR368kTBpw1NFTMvjcq9KoTdAoiMudW7EevsPbotcxvd3HoXL5GFE14R9n58jHuGyk2kw8M4Amey1h7QJRE",
  "key15": "27PMmokfdhGNNEih8eA2WuRhgHfTFuyK5zsRkCbSExvNcBL9Rmzx6pEmosVgfbhcUj2D7hxYznAp79823GXY2TJS",
  "key16": "4myNHpm3DsVyo7ii3LjJ11Gf2ihEo7hr55MXT2cXJbtRrjoeqnzANv6enZn27uUT15zPTRgvSfSeXW3NBWvH5wjt",
  "key17": "67KRupcF5EuS6wx4xLc1gBpfd7mhTCdD5pn3vp6EiaKhtuq9rcA9zvk9QEW7dPmagkkWp6KxY4RxP6BtZSxp2Dor",
  "key18": "2enj5hKvcGcMxe7KXPyyz2tJvbpjbxwzx8fxudUbTBHZy83kipSyZ3KULmHCYSKxCDa3KCnW7L8osRB7hnHzEKjP",
  "key19": "4TMQREHYGdagh6KLQ9YbwFZSso4CkikNUwhbLNAKu2iNSbRbN6gp71LquepRK2sqRpMqsgVrxPEDLdGdT4EqnrTP",
  "key20": "5yjrs667rUoP22ZFbr351cEmrCCuJhqB4n58F1AzkPvWEHa9B2KPYKZuPmxcxZ35F42Qhz8EWSPwnKXMN8qzuZdg",
  "key21": "4eQidJhQ7UF7UvcmPiQfPFDi2Gqa6zdc69L9ef2N38T43VSh1JmLZWr4wW5aGf2Gz4yL7jN3hJCpULBz5gSejWeM",
  "key22": "4Y77shy8ESq9Z1eW2jsXTPBiqTXvChZQvzE3Tdw9pRSpHBobRZvLJeYGnSybqgypW8JXcWqv1R1P8zsYkYUYNBvx",
  "key23": "5AtnXpQ6VFqLfQDrfJyRWfsQBJ3pEG16kpbEVL8W8F3MB4iyGT8QrXium2ve7Ga7JGM2d4ByeZsgw16Ue7MtPdq8",
  "key24": "39SinF2GJh7Ax9BWn89y3ysP1NoA1FURvTR4yZbxghENxFtAKExsE9rL5ufKz84J7KooWR3mKZa76PfwNy5w9Ua8",
  "key25": "2mk9JnW4D6CqoddWsXJjy4Z1YzgbaktF1ZLUY1oF8gTPkNWmesW8nhfSkDnfaNccpHsQ8gtPGWynAsoNQLbJLfvi",
  "key26": "55rRejV2oShqtQVPHj3MapTHC18WjLDoW887P84kKYQiwoiu8rMLWcprtKMEWHUMVcHDQLgLiqKwxxnTHc8jEpbu",
  "key27": "3o4FJU3hKmjmBKiEzbLLn5D7Fn4wepjF7wQibp6nf9isrscPELrRMSsoPANXEpcaGWPDXiq24SGsUXDQQ8iJzjz9",
  "key28": "43gZkU7gAiys6frwMdney7Z6UGjZmUWEoFQpWMG6S4fvrGZygjyjwQfKcnNrjLpv8YV2MTiQenXc8VVshFhJACTp",
  "key29": "67rg7gQwVZx9BEtpgCoUB2oHLrMwLtYgj9WuwFRJYVN3RJ5yjgPX4T3XPvdsEieXriims781Qx81TGqHjPVveotM",
  "key30": "594BwDzRqTe9q6gP5wdudRJVKa34dXfC9s3T7WzRtA8Rv4xjD1rzkdqiFNiPTQHU6ywyfTNFtuumJmcS7umxG8ez",
  "key31": "5VRFDZsXfgazTa4UKkCJZvB5UiBHRtWhG8HbaJSspPnDbcUhztHB5uH4vEq1Gm7dBu9U8eDX5p275XiggsRFw7jV",
  "key32": "3ED1XSVKmHr5fxjJX1QBykYZuPWyRbfp26rSbnAVwCFr8MTemuw58qn4fi7wxp9ish8srMZjFoodeTPVHLezp7K4",
  "key33": "39MhbWC45DwJro92pjUuWe6JmSH4yYzujgy1mqQXGCGvYGanybQsziewSdTkGCt49QwdN33NZN6SuSXRvuEKLeP9",
  "key34": "S3L8KL9cqmLBKQmDdwXSzNhumnKKdYJYqgkgUctPiLnsd7ZMr5eQRNjZygPtHFxithXaVuqZcW896YMGXRTqGWu",
  "key35": "3xHdaiiWLN2Hhs91toT1z29MaacP2HxQqJ7WRyD48QKahxK4M9UsCLGAJpeqbrAQGstJbPyvfYBzyLUV8K7nboEv",
  "key36": "5UPXXT2ZHeDEnNMGyko9ypR8w6PLi3v12JVMFdyyCejzcgmAEvdkgGSYwN5vtRHEntsJtKa5jCEsgCDtTKgKshCU",
  "key37": "53pzhbuPMzMNRxHcCh439nQMccUcGVN8EfLuuAPDdTwi2bARDduQ5iuuscLLHzkLvdmUMPfj21CxAR4dA2mxLrw8",
  "key38": "2izDfNudwXGkN5fEszn5CoLztFhjuQBsGZXkD2DqhedqU8QgHbVvA39jdZFJuAX91Tg4LEcik4Rw8m9WqrBEsBs2",
  "key39": "4zkcLrhKZW1REfutShJnaPxjoL48Hob4gqTYz1CahHXYd31Gpo1eqHeAqVvKeccxdvRCYkyrCMSykUbMPvna978z",
  "key40": "4rYDDre7rjkCYZgEjTJFdU7YGGuPta2oRF4VQYKDxyTiCPtZ1snRNNq3uir1GrZLEetfYnaepfcjGKL7qWMuKuNA",
  "key41": "dfYirQdYwbyrgjK144xvdF7xZnjuSNqp619g6mDZLABy3srkkGEwCkrR2osPwEMFESEnnbdBtaHAM7u2wwhAP6H",
  "key42": "4VpLo1JQLqM2hkSpXvAsnbiksqSFzWz8fmjFgic6rPpoUDQGYJfeJ8vDjNWq7kCZ4wRGnncrKC1AwbebKaDwo22p",
  "key43": "5bDziFKwUpb54TwCDfPpT7nTu2wybb7MqocKh8UnovgmqC6piHmVjT99HSdmrZ498H2wqdDpo692fsbwDyVSEE32",
  "key44": "EENxiX8Ky2F5Sd2XeG9n1HidjHCwjgbX9eS38zghxLXeu3FonwRRAUUiY5CaXi9YeGTxAvzuG7UcZQ3pH1Sdpfc",
  "key45": "5nbjpqsEBkhP3PNE1DYx4VhDESMaAk7vvXQRuB2fQaarm6rWMNQnzM5fsMWw4kMfQnh8FchXHmySHJfm6eBzdqtH"
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
