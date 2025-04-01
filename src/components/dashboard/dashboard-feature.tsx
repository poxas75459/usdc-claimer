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
    "3aoxYf7tRyvmvPTQ3M177xK1F7trb2BFGnrjTSU2BYhuSqxNDJYYvTT9VDyZeoKpHqzDZiWeFuDbiA7japW75v2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cap2xHEaGAHnYj4LSUAUH8w9aKuTTsMfmNcRkwVKZBH9sGAZywxUDM6AK2gM6gvAornZCjF8LjSoq1hLZ4Wvcwy",
  "key1": "4AuP1fmMMjzcQdUWeidSBPiA39q4Wc9sDr1MeJEb8AipoPiPC2WQfeeoh66nypw47ctq8uyzHHyZ1zWFrLYnsKNG",
  "key2": "3VKr1Xgv6Z3Lz6KyCpL6AzvGijCop2WmQgoseEzMfk3br8Bi7kZ7shV1pMenuPMaUuEkWJp7SGwB7qMoJAzBcKCW",
  "key3": "65cmnXhX2UGCfTu4fddJc296GU7JDvJqGTbhwWS9MzQMtvXbBtwC2mHQYjAuDNJPdZwtNVQk2he6sgSFKTgnv4hN",
  "key4": "K7irmk21JNxgoWXFoaQKrxTT29U1NZrRRAwY59kNALxF6oeDUewt9NVEbbm4zNQahAwpo1Q8ab1fk9c4uDzKx5h",
  "key5": "5JAXmbHqQoq4kJ42ebM5pCdMXGkna44NtMRvEVrv8fY2pYA7TR39VUo8V9ZSG3ZCE3TvkvEEif4sxRzReLNbS2WM",
  "key6": "qpbYugBzy72aNxkbt6YzLKLgjgeQdgA1GHem7V2gBsNQdGu1scuBtSgQZCepxayMgQC6YBj26Q8Lj5hbTrfdFnL",
  "key7": "xy6sw2uRkcJzV4wpqfzoVdfFXoEbH9f8iads1RRdSQPwWJzL9MYA3poAXvjuRXL6FZgJyvNEiPmoPUtDp8epDDj",
  "key8": "3efdYh3bQWpLub8cURgN6jstRws3cY5M6R38KA9KXSg6PXbxYnRABMTUbtgEPUACYmZLfZ7B9eKUjX88q5rDk5Bx",
  "key9": "4XgrXdrfCQP5z5JaMKqisqe3mQbX9QKqSTVF6t9eKj2pS5CHjDCbi2Brs4mempvRJodu38eQAKm2Yi8Kkrre8sjB",
  "key10": "2GYcatVq4VAV9XbwbMGLCdAxUmqR9eTDyXpWSjbDi3mzY62phaBuQ5BinsmmkCg9zzYwzCrA7UDWNhyH2RuaG6L2",
  "key11": "2uzsmAJA17CVh9bsRsedPRBfQRWePo4AgScBK7dYokFsCJZwEbbwgLAAEHNCwHLN262KgQSRZ5FgjpdYA6yNbyNM",
  "key12": "45GzEUsYt6Cwwurf1yYRPBZ2dduDnh3bTWepBqXhqJLjqmAjAYHtnCJ834yp4rUS3BiGmjVqAQgtEB7oTHPfQGMx",
  "key13": "p4fQq1niMASxHXvAR3UBCURbEATqse7jZ38P9C1u8vZvNzm4rdojTWEky1RhMFFbQxc43c211mgJLptfoXZgKks",
  "key14": "3mMogw5WnsaFDwvk5HVwH7S9s8thSmriDWak9Qyr7sfCPtWAUrkeucg935pish15rcrfauRXVLHQgG7VTBJfXUJD",
  "key15": "4YDxpZZc8ZJE5R9HxP9XoKRui913eyqLrr6uDUDpjS86MoiZc7hmG6S49j6JoZQzdkY6PVeKsTuu9TZ2j9djFjbf",
  "key16": "2NZdnyvnqa6TF4AM1A2jYJegoWUop77FNco6WAmJYyqJPLHqcp3zEvSQXWsTJv2sinf3uEuHjLKbxmgpxGGH1NPn",
  "key17": "45ijPPx5zHRHMmbZqPzBEiRHMQLNZxo3znPtWiSyrBTxbNNixLxHUQjFQFy3AQdzaCS7kNp7u9pHSxkTX2XLjedE",
  "key18": "27dMUdFXMkv8gdwfaEgQzgbvs3fccENNnmicnhjMychkNNPe5th1vbauhpFjnot5EC99AXobCpPuPQ4KdJLaiEeV",
  "key19": "2QGwdFCbTWqRSTbnS4CVzzPRiv4YL1vwvzBHSuiwmzsvFc3WnTt85fjG7veVdeRFucgamfWaXoUMRUXdPmneUhss",
  "key20": "5nyvvxVREkf61n9kEk5G25yFvr7MANX8Eiyzs9rQUCaSFVypF1LuZviYhuB6aQttBE9sgDFYjbp8D2tNf24ELKvk",
  "key21": "3WKx6ViYM8gHfFQgnxevBzvu4mLWBhN9GxdRGY2y3yph18S5A1g4CURV6ge42kXWzAUvmjVaLjiRXxii6ZJWx72p",
  "key22": "4UcNzQ2v3wY2Yz1g9444kQrBmkpA39YacLAGXf15hAHs7WoGbLZ6JACvwxqX5kNadyxbAysajpBKYeb2Vr8CPeu9",
  "key23": "EBT488hWrXVEfy5LgnhFkjRERXvVZ4NQQJRK3EmLfiq6aaaD3Hzw4aK7fbVrQe6XHGzFj5Myzm1d18bdCk4VEKC",
  "key24": "35Ye9w5m1xVGxwaUufPcD8nXJpJ3ZHHyxJC68ovZFroWt4mT6PEnRrrTX1Don6ZvFG7VSyVc554s1AgafRBoSaGL",
  "key25": "ABmzSQZTZEbNvi1YjYRFxmyLzDThZ6YX1SFc4TbeiVm7NNoyaYwUDBmh4v99fGcX8ZEqDDHeaFQpwYom4g1JD1m",
  "key26": "2b9bpSG7CWYmsu7AtNy5YaojMTbqfxGvnFN7WwebCezgyWU5x1s6cXhbiivJHifqAjbJdaofi9jTZHBCBZZ2pj6J",
  "key27": "A1weD3BcxwqsjXi7qwkegv1qo9bTAtKn2hAPphazGR7sWQv6m54hxFiHaNp5XgyKfRpfE86FjGLovWy3iFA86HH",
  "key28": "3jrvqqw4fsxBaNsAXBRSroPLpURiWu9w3Xb5rQYNP1wj7K4wTi2YvTyoBUUsaX6zVJjWU94Gr4z4FtUoTKYSwUVh",
  "key29": "4u7ykTvyvMQLPXpGWt4wm5D2FfJHsH3w6iphhSNdxdKHrb1RtprU7XT2S3HCb7QGWEocuyJeRAM3ycnVtmK213zC",
  "key30": "21cj3MwieWjk7gcixxHZVHWANCP5aPNdydWAm31scgDV2MeMNvTmnixpRQWGRsRkg1LEZrj2um8eUa3hawregG3b",
  "key31": "33mZKJy1qg1xfAJEhgSzp4CRqqrUzZtq6DqawUDb4wU41X3Ax6zuZGadapYcwj5A3YzXm8APbRsUMePvCFje52xP",
  "key32": "5RFJtE868Z1YE7PizF1u3RX8cfoQ9YwesnEb6YmsWUGAruASm3dREQmjiLxkeUxeUvw9k4i6F8kVN8mB2pNU8hsh",
  "key33": "4FuYsTrs9LFf1KQb4AxfXn13MRh5CPtMinv6WmW6VmQW1y5aaimQb3HtNbi6oWpctTCuj6tdrSnzPJjSD5YGBFm8",
  "key34": "5Wm4puKmQDLsAyumEPi67jKf2mpMXQ6vqKdt6iK67L324L6Mh7LbajsBvuKYLgDyWda9dzMtrzhwHvjYpxa4caMy"
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
