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
    "22ZsSqSSkshvfqs7mPzuPhHrekdY5UsVTNj9e9Uk97pumZDUEcV4UXWiSr8dymDavrnNUEK4fP4atymJ3mAjBDra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RVVJfLpGm2YTheNg2BbRHjC23egprkqRBybwwCfKigzy8Fv2277BjhKFSsMavK1JZ32QXXf49qfZZ73YBChHbni",
  "key1": "3k3qNDNrveC6nrb75uw6BFK659RXkqqGA416ncTfJLqSE15YKEHo9RTWgjEQ25zy4TXyLJeHk9eXKfrEAmwces1e",
  "key2": "3RKSDsYsfUZxN48QBVS9nXWX3bF7e3hRe6nm7zfSeQ4kzTjSkVELNo9td3mrLUovoaWiSb2j2U56khf8Pd5wZeVU",
  "key3": "2YyycZXLyRvVMgwuggdtTBvuoW9QubpohbPDAy8auvPXi37GmYc89VE42zj65Qjs3MjjesKadmYEceaatTakRuwm",
  "key4": "odgiYCS2RvnsTHyU7sDoUUzArgvYjbV8QFLyb9znKZ4nWRXfKPuzKPLdVjFzbzeXC215R8fHcwTT3CbkLLXcBFW",
  "key5": "3GbNfWzZTK2qVB2CtjJwpWKZg41e7ZYEUj1u1ECU1uMPNwHoTe2wT6y62SwyDLuegtfZUMPoHNEQR4KXunBFVLSE",
  "key6": "298F5VG58kCo5SCEQRGoocmvum9Kd9tWCbvfEmGrLrGBLiS6B42JiaZ8MmNRu7o93AQpfaFjmQYkjvoUK9RKFkTN",
  "key7": "czDeKEex4UaEVdN3TDjbog5SDXKWnAc8wJdaWBpRs665Ww488qV69UE48eAjt2uVRih4E8VJRgJEa1hCRD981aZ",
  "key8": "SMBju8LT1qXFjfjtoiSAUJc2A7NYSzyVjnjThm8hmFZqCXddfvKBftG7nA8xNhgmeajhQAYbTTKuF8gACQJfeQv",
  "key9": "Sgtbe7mb9cayHZDVfxggdhE4B8V8pfcKC9p55BAMHsjC2QimtKmpf7JweApKaFYZLmmAC4C79sgHPNLCEvG92Bc",
  "key10": "4oGr6AcryRnsRxqNKHhFDGVsrsEhTec1ZMkmZ5xHgJ2mDGx3EjcvAptmVhvpFh9dVPr41fnZaqad8boDwrRmzxCz",
  "key11": "baL8dSeLQgyuaThxjWK96Q6v7Kc4W4JT7k5VEdKRGbvxircd1nLvhEvyCJkC8XhyGXZZSegSgnvLcM7J1GnmrwR",
  "key12": "45RuLURm1UXYnPegKHkW8rtUyD33HUZkFUGr4VJkp7uJGqsBEWTbNVGGUTTP4cST7rh3B5Tma9gP3AfeB4ZeXvNv",
  "key13": "3q5bPHndfTVEb6Gim4oLjCXnbrsNAg42cQDEatZx9PaEWkL4xT74oT1rjsZZfNhHbEaNKMA3yYymEpwiLAih5ZZT",
  "key14": "2jUBgug1X4gRLAVnBtzFRSZE8ya3eKjTxDp5swUKySFb5X1tEbjezaoMe2o4GtUTRJEHqFkKR519xGyLw2rJzCFL",
  "key15": "4SrA1SEZA6hUs1aXkz8v29xKLvhQm7qm2SNnrqEZe3c1gsxY3tZoJPndpGmbebMxugyM33gVDdoQNH7CzxfAobGe",
  "key16": "5gRCQ2njUAKoXifcG9Zfjdf5QJEm96AmtopDjMoQdwHT9FBLjjKWTNVYcrMFkQAKJRvFjznjatTEDNdLRC7XVMHT",
  "key17": "26JqojnahatQisZYf6vU4pd5sdagzG9KaXTkjt3EL7QtDWMKUYzcsnqd8XsnkCRQGHXWNGeLH629AN6eFXdpm2JB",
  "key18": "43ZyE5RAzhpuUogp3vuVVmXFViyaboW55xnU3QYxoJMHZYmqX5Ab3G7jwUdUPwCe5RpfYmb8rA4a5xgnB3tQAVsH",
  "key19": "41b6PyYzTCQASufMAim32XhCRu4nFeEyX9Pmu9garH89Dp251UMjPenU89Y1AUBHcB1guhVdT4AZsXyqnie8HqZA",
  "key20": "3gQ2mMdb7UzAbNJLdNbhoA3Q4zPn51MsbxmmpqMgHEgh96p1FrPAp5DBVPsKRaoaLDUSD15btXAy734E3dLv8oj8",
  "key21": "26L4jGJCJjVHCoswW8jXdMjPYX7N1dGadPEr8XtfNsADNqmThWRtKXRnwDDF98LogoPUxd2RL4ThJjpLcnCHHf9p",
  "key22": "5tJ2a36K7wan9zpmF8HbmWcTC5MMdiC6dAvga7WvDZPnvKPMCcL8LfxjdvkfsyY4RMS9uT1Do4JdmuWA54jB1nqw",
  "key23": "5hktyso3WtVrjRda83sqk9ktzKPXFkxNPHG9kEK3scakQsswZn4511Z6gA2n5onhi4bgKQQ5q8wxhRRjmkijRDHJ",
  "key24": "5cZYuBtKSogACUCeifPJww6mMSToqaYLRe6Cz1o2gUX3ZMW9U5j1yFGk8pB1krbLsQjMdFSFu5ZWikqRKCY5dSZF",
  "key25": "NHWvKKWw64WL3HUD38kUAM48wvA1EoBdLe26wVTPAVstLei6xPdzzD7wUB2u5m7paxuAao5V6gx6VS2GRH2rgWQ",
  "key26": "58T7UgytC6DDFcToUxCvTCKdrxkHPdqZ4mo3bHmzzwUaHwLfRN1uuD99ZjLGJfiEYskpzVzJtq4ru89nQqMnzTWi",
  "key27": "31z1bzp2VN65iogVCU11xaPmiKQvqZxhvH6NJFC7DTs1YbPrXNWHyxVwdFZdCPEG3BBFgrgHFSUFKPihfyuAXwxn",
  "key28": "2sL5iwzrE7E9cpaqdxh6YciQtUd4yt6gTPBDw6Xvqf72heJPLBRro1mv5v9cQf19cTYmEU6eCUNYTsvDDwzTPMkK",
  "key29": "4u3BJbm7J5633PD6ppkpHya5bsg9eEvUgNpx2fvmNeQVMsoPx8cNovjq74As14wxA8LHU2imgQsbRXHvQerpYL6y",
  "key30": "YHQfQqFpCwo3h66JR4TstS6aUAeYvoZi2TTy2bCgS38XUboMo1RWXTu5CoA1rnJBcCVWhkmnxYfAdhp13rnrMVn",
  "key31": "3XT2A2yVKMT8dboGLEDnKiaDvUVBoLMkyteHuQxBAdq7PHABRNkMjvtsresCGZatscZLaVb5z8F2FqBH6ZqXT37i",
  "key32": "amvdP2XfrE53gUQXBLBi4KusdcNtVbBastzM94zbn5Z19vGQwkA2NWWpRD91MjyU8YrJEHWFktryjDTY46r5Dxz",
  "key33": "47bepAUa6S1RZzksGDcZ67iwYvtCRbxZoknGGQfPNGG5ZddCXpTx5Ewoy53VK6fcBcQYzMQUy9zF2wFzxJfpvB59",
  "key34": "4ekbwLsigXQcqiQ4JkoVmVvtKptvwhUpkeFzYvqicZaiRuLCqKGAqw4t38HrRqHqcStveUaJH1pCqYAkMRymhQhm",
  "key35": "N6MvFkQX2xMremJWq6iCwdgiN784E9W9HwuRoCatwdtsrVsDGposDZpjweypFSaF8KR7Q545jzYJehA9HMCoHB4",
  "key36": "FYfWgXrR8B7vzknhbkNHVgxJtajxc7zQSSU7G91T4SBVvHTY5DGdNS9VRZWMrcWn4S4GJoAZmg5ocgGwaTsjX6d",
  "key37": "4YtaQ9KjKL6zdSppBGw7PMBwi4dRzWpH93CPuiMXyb7XpxM4KHZ6Sa3nBdpdebFgMsJrNfiug6Eb4GHuYz5BbbsN",
  "key38": "3mBBnUxJUjST5SPyVeJp5a5KMV4esLEcTHuZsiWBdpkdSU4V7sVheE58pMeug94pa3W29F4HSkQAAdmbbzXsXio4",
  "key39": "288NvGBc1PTtpb5hRsJMtgodPSJov28L5qeaZHWzyxKUKYtKBPo1xcqJ3ACDQMtqRFVHhqB5t3qFhs29SJJYFkrW",
  "key40": "5x9vk77j2dGQM9KuPATiUh3BcnWLbichWZnbew2Fz2Z1a1gdiw6UpuDZJ2WC5FTU9Zs99pJqEbnSs4RitpbYT8F6",
  "key41": "2P4osDu27Y2vUbopJTEcvJkdnujMagGU44iy1siNdrTGRniC1r7xNui2BZQo7GhLhSGpomHBuaPC7uLpasgi2BuT",
  "key42": "2yLnDbgZKSCKbRMzg7QC7o3dnDQySWhSPVKmE61JTgucoY9JxJ4jdZc4aDMyDsKV7LnTpdWvvv2wqtkcsCcSAwb1",
  "key43": "3ue7T34thPAK4XGNy211DtsHVTPYQDF9Fi7k1SVkV1ktcfhz4y5TZz95ALbbYLEf5Q3hGKsNfFh11A2vkdkBSfsR"
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
