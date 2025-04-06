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
    "2r976RAwwsU42zKBWZtKizAAdPPYjcCm3voX5r4UjnmynKJ5nFusLFaFY1sgKN81XkieDm4Lmkf3pCUr1qQFBytx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PMUGnPsWHkrLkUYxgCrzU6xXzZ2mVKH9w2Q4vzy3Gs66tRyeVspifBVp2usmp6R7GtEWuvptx7W6Mkp7ZYSKSaG",
  "key1": "Qw8ebFjkTwjc5br9V4vZto4nL7862hbXTY2dzDU1zdWFPPjmmno3qVBUr9MezpXc8RYy4sm9mbXmFqePX72FmZH",
  "key2": "5NcuELRt3vfAHWXRTheig1ktKNCqtJA6nB26nmUHvTMJ9Se7HTSYNUvGaSQPkxkjfQXyxQm9KD2y5utFoX7mou3u",
  "key3": "opc1PcTsMamWj7NVWQds2XpKkjLw9uHv6nZ2mFbn3SuZH9nUFcsBgAobAswap16ydVbQuwRibWkmB8AexmCwgXs",
  "key4": "5opJXkyW93HAiSWYWVDDnJ9CJTJB7ke32BvvWptCqGVkBMED9cKW6SRwia97rQn5KwYsAErjgPnwryAk6irUnP2L",
  "key5": "DCsD4zyVeeonYSEdUnrM8GBPXdzrNjMZbMzUqZj7DYVRWHj9GDhKfS6X9vUXaXLoAnwyo6XvSdWLd613rL3JuKz",
  "key6": "4eiCCVyuq9EpZCzFT9NXrGrAji9pxjtXVhvKjCDbPPtT3FJYd22DJEEfDCRMsVUkuQLGky4Dyr52bVcEN5fye5YL",
  "key7": "3fVKf3GRrYNZARVSrogvzRRf6h7fUMMoXJShbY4NTbtn3d9mya8o9eVU1XzufJjMqFhuf6j78A7GCFU7rDXdcc8z",
  "key8": "4oQiseKG4fn17339ndyHXMViwaYhujUpYyVJY6uKB1zcD1srqQ4bqszyzDP3UDijQEhK9P3Zyxqxk3d4nVb1HoCZ",
  "key9": "9o39bKzE9bcNwpptDpMKBdPEcPQGoPzEDeQx1f76v7KvoTKUWrLmdhERYkFPar25zdjLKoWBmfJncXzyuED1D4J",
  "key10": "4sBLsw2Dy4LRAD9Uv6u6sCrvfPtEkjvKnSPADRXyh2MJNsvW8DetiFbbUQAVbFoi44YAERjhekf7SwQwShPYmpYu",
  "key11": "3kunkkQoXz7ZSw5T4632QpAWPM44uWjPWGkBfrm4fxZen3ZaFZwkLP8YcGwBLmq9obfo1kzuUwiw7fjyYFkeJKcJ",
  "key12": "2S4yTdg8qDGwSFHM5PbZxjYCyGigD1rjNrpsHgf6xvn8DdMsSvvpeiFjZrSWE9HFYUMRffQMcos72RtjF5mYJx2j",
  "key13": "545QVA5k19LdwEp3iA37BxkoRqqPoHpo6czFp95Ym8FxzqfEa1FugnahT54e2273ZyUMFtcD3djM88zXmQS7Lf4q",
  "key14": "4F7XhZcSfky3ki7gisVndRodoqQVawAn8pqJBSUt5foxC37snszZNJytTSfBqmiKKaJeeqpcG4EoEasGrWvBbAJk",
  "key15": "2SeoqBLA2S8opMh5wcfzvXSqPN5bLrcAvNYJxYqabFJzQ8EXiqjihUeEsc4wU8fM6oDg9D2LX3toicyqPXA7FE6X",
  "key16": "2mRkpFasoptiXCYBU2ZxQKvjUyrtU7BZkGP5ykSfegL16rpBEVSE8iW4Di4xALeqwLYF69Jye2wajJ7eh48gLJ8P",
  "key17": "2tyuHvXBvWqWWoA2PhZRVvRjLXFoCMo6244s2w2BzdtH5oYJjFBXQCW38H6jFDdgaAbJEQeYTWXnitbw9ixi5ymh",
  "key18": "4B8f9mwM1G6oKC5RzBcM7cLWZ2C3EG4j1vafinaA2Vw8VRuTwuj54jbcFXVU2BedyXS3veRoY6LQEzN6fr1nrV85",
  "key19": "4qu6EKT4pPsF3ox1bBKXroB7ZgtoTCnDonH98TE4skxXNj1K3PbHHpgUFwBEriv78dgiA87UBRRhh4xDn2NgMYau",
  "key20": "4stZ3m39LxbWNdncoqhJxj7z91W7Gok23uub2PiDsXEb6ariu3e3arHhbjHPZnXUVNsbXgxuyk261tc3vrgayKAb",
  "key21": "578toy7gFc1rcQ4M8ritExe16B99NuUgyaDiRrJkZmrJBqjwD2RCEYH2fjtsR4NGZmU3GASsoR5Qjey372Ak5vaE",
  "key22": "2AyH45ddUJGr7pq8iX9FdEdWGEevpxEm1Y97htNEhkVwwLaA7b6RQVLjSbX1ybVFpyu6wBWS828aSkfURD58pVsn",
  "key23": "395CTxD5d1iXTaDG9sS2TFprm4w1gfC7LQPQaMSP2W7kEgHqUVxADDtZqC1rEEnrbN7xJwqwTKiPLXoGpnEVd4wE",
  "key24": "4j5XhVyZ8S1xd6oNYcAewVgcGmYsMBLHAvwWbVME5ay3LLF4AqnLcweqeLh4h2NLxNJZhUPa9YMtP3koeRr64te5",
  "key25": "3imUQQcmVKeYJtxTcZAV1FWcbh6uystZLetx84daYPKMjdEnGZgsNmcVMyjdUfmKhchvVcs4Rhg24JYEp6ZQv96u",
  "key26": "2XZvt5HXKt9DUo9D3rs2DbYCipZMCvLAYWW9v9s7XfcJqJccTLkcMazmUpaDDT72peAiEjkyaU2Ff7ucDm3814w4",
  "key27": "4zLL8xgrfuN8cvy9gZzHnUZCGgiZaoW9Ce3LHxHjikC3abZm7gU8YYAoB5WmayFq2rMuEuHnAtaHq2m3RkU6kCHt",
  "key28": "5k4JK31aPnxPREAgtkJ9SL414r7D1uw4XivE8wiMb5h5vXmnSkrP9x6arbjqcnTq4YU52jnuKiQGApSQrpWmDMQL",
  "key29": "3w6Cx3KKKeK7PA7FZZkQX2rqoECb3bcZH1NWvK62YvZLHpYfMJLfsFA83RyC9e1ik6KTWznNirgBZFqgjtaokfhe",
  "key30": "5F3LysvbMtfS5EwQeq3Mf2moQdvq5V9aMxUbT85S9GW3Bzxq5sQHAnZvB4UbrvnBt9sgigamJus8cEXdMTccRB4q",
  "key31": "4cMqwShDwwSEdMm4MCEPKZU981ApTogHMaJ2ovN3TfhpSuo7sbfh3PPAM4mZyn1xsFPtS3KSVSV3A5H7SEzYTAZE",
  "key32": "5bN7S12rw1TVk646PekrRMjzP7Fkvj4yWbKnaSur7wbowkbetneZEFHeqLMrZ27ZhWfwxjCsZ6d7GfVsdUGVX944",
  "key33": "gJb74Xe3pmbky5jquvtvAuVTDph4C35uGUVcYsR9YN3xVTPwT2hKjK1DcCm5dzVjkYre8zpy5ZyCcz4UrtuThVT",
  "key34": "3zijQMyXBmArfV83KYZ8hjV1L4mfkiKKkmMCesWvt3fqM6p8X5kFzaHbnKFdbPoHixJhsCTrcX2jeY4BSWU3YXdD",
  "key35": "45JCgvYWjtrR4XFd9gzqcxowxAitgXYAQxsJJur8wU56VRD5LCjoTKV4NrY2d2TS9QRKyTgGyA37GxS3mmbgv1NG",
  "key36": "2GTfWRuQ9y2A8cnGNfv4rYXbDbUNqAcHLoY2AfPGNxq4GVakBZjgHskFumakrTJahuWWG35VkCzRHEJcifAB9BeT",
  "key37": "4ubeMTUZAXFu9KpZdLMWBnY8QEGMhmBN3cNaYDvGZmB55tMxtuJ5PrXMqWyKjaVPZEZSvd1yHMqRevoJjoHVGSXU",
  "key38": "434vJodnZruRwfUv1ffzdWDZndehm8QgXr8nnSZK5pYJCaN6zEhbryuCRfEZLFTp9gd8M3rkcJUu5srG7254VYSw",
  "key39": "2CXNLLvf9jY4fb7n6v8DWEmSMbRvb2An9tuZe3hHFyb3BRSefEP5jtXXuQgXk3YXKja1PmbRAMNRC67N1FffqeK3",
  "key40": "4KNnzJTB1byW7EBAVuELBoGLS6NG8hxBHtiyvecVfV5WH4iFWmFHNrjg6g7eqB7XpGk4WXoHaStXgGDFjhFjWkJw",
  "key41": "2JGy42rCMZhF3d8zNb8srtsHiskCBbhiP58Pnyd38FtKMkEmaJrFTVDyeXus9ab8ToHGCjjfUFM3PRMxCWj9uyMf",
  "key42": "4iGWjbaJ1ytSJYRu2mZmzYgDAdvq3DVHW9W7TKE3511WGBn9wzGL81Z849gW6iKSJCH5Zxc2qSZPvqU7srgNrc21",
  "key43": "gr3ppAkawjQSjAbbrPdyecTVPuDnHn7x7wjCwVGrFWQbteXRRNQ76GVQjjGdN5PyJ9RToznst2JwJmhPsAEeMUy",
  "key44": "3kFfpwoCwRAmrEucC9uXpron5WjepZyobKHxk6JbLp74R966t7nkZaD2A3rkHC4dHGhRrxprUuRZGwasmhnUDE4L"
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
