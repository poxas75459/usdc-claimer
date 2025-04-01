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
    "33HTyWktxcMZjZ7xEdtgwHeP7QpVyPyqAjcoiXXBybcUEV2sWTgXPCSQGKXCc84AJkpUcnNgXX4LFHTXbRSfWZSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vw8qJZcs57GX84sfAP6yUCVvouvgWsUwh5Gatr5xBLfPEQyiSZQyoVPM3D5KU7iZ239q6h4GCV3spp92zJQ72vt",
  "key1": "4aAABTYMNGa1PMuMXfA79nrg7UzpfT7LF9A4wRMUboRuwxEj3msjkMpNgnv1bPitpAZ5j3H7zKF1FCenWanEZTXJ",
  "key2": "3T25nZUL62ws4Mi86gCVrN9qC3tPJ2Ev7SRZtpERKdoBpDcMyQjfvXncHhKAw5K5jHsbb8AxxiTpBKoR2fSWovGY",
  "key3": "agzVpT8GHXfihFsjmuoqaq6w8MwsmK64qM7EhznRK61RKQFMP4jt6NeMioRqqMMPpkciTUwX6yp7MV3pAFQS74D",
  "key4": "tfggfJJ356QHUcoB9qFhHhjKBiP3CiEfnR7Cp6xaqGAMETnNSTTT1XddU7UotnYphTPAEMR8EHyogVRgX2Smme7",
  "key5": "4XFNLHYiLC7sjVt4oXusqWqsXCvJs4D7er9mLyHTi1jTSidMYfwAwwS5ziPWnKgFrMKp436GF8ATtCbkaHEhXtya",
  "key6": "5u7tFVtxmVfQPko2N6e6GsK1YLU3qG9bzk1snMyatHSGC4HHTUYnG1jiendXsZSmzHWPf6ZAn2KaxFBGxjqUJctQ",
  "key7": "4oM2VZgBf6MnvhNbc3wycaPeztG9PLEpZNxPi9YuXbbne7PrxNJBz1nPoYAMiVTK492KHcbPuGkQuT6RnHq13Evu",
  "key8": "5tXPzRJAXUjmhdSm6asWA9Poc1eamv2uWQqerWTDeydQyLi5kcqV1j4UEeyAWPgRCfKBduYXQY1mzJQN7AiZFMmh",
  "key9": "52kshMBZDpxckJ3kfekTq2GRvo3HQ3yjsxCVhqF4x4B1V34PKT23yivukfp9Rf3yVf82YSjhGpZ6eM7JiFTgVyvG",
  "key10": "3Khdkh9oWfhyS5i5L1Mffz4ZYNo7omTsroc6jDyvL89NPSu47TkkcknxCwXuK2JGYz8z11jm8qaXBqbthg7R9V8Z",
  "key11": "3AMmPw2EUGJNsxchduTi96caeY5xJtq6Bd1stU89K6ArGkeWtPx457Yv8drRyANPuUwwNQqbNL43As5uy2znYosm",
  "key12": "2J3WWqVUyuq3dEmwgPk9LQrr7CBs5GiZjRcn31mhMQdbdandmFuAATf9AmBJgRgj8A2REqQ5ndrpd672yt9Gv9G2",
  "key13": "5z1GeNzkTQ3DLn5ERBneaNQ4tnpd7Qv6hy1U2x8eezGUZsksKZrDnCrVFVvX9W7B7Nm1RcSeFqNMWFAjKs46q8dm",
  "key14": "5raJyJUyLKeUdudRNgjmFEuE82TSpC7p1sD1iPit97rZtsrhXrG97GTKSVLLTShXsj1152zPYgfGWqvdcs6n21vP",
  "key15": "4sE7VYc96bNFrQjuQCt1qBbf3T8br83BDNqfa7BMM7u3nKPCikAUSGRXDAjtfTQFGBnniz1q9xmPEyvgwT2ctqbA",
  "key16": "4zrmWfek3MABJisj8WXxceWWpV9Pxg2U1FKMkajnZG7YRUcBZA96De5USTuxMmG6erW8feEwgC2LrWtQm9CGFHbf",
  "key17": "2ZeNuHgZEcoQqtqFSiJqKmWkL4WPnBwXx1HY8d6ZCMw7nW7zwJR2MHNAR5qtcGbLRp73mQQ2PLRgWC1GiEjnDXfb",
  "key18": "4GaATeYDGkTrdht8Lxbp7d59jYZ6AEu5jEQ7Le4cMMWXCHimHHt6D7visd2F23QBTWVzzxEHSh7W1ZgJUUmrTjoz",
  "key19": "3nNAhzjbhc5H2kuXZxD1m1ctBBZhYrizM7xuwMUZQp4fLDbLw9jfWaaAcSxFCBJ8j5GT5gL4WCE2YPfQqyG7uvQJ",
  "key20": "3DpcqExkhpbRXh2SufXuhPYpkvFJqC3wAd86fY75odLHHqdTS4yp3KSZWdzitbD527WE9yRj34N9v7UABrRxkzKW",
  "key21": "LDA5YnRsqQEkgr9s26ptV8MxHXfyAY4RDvpJcKRcuoBRYdspzJ3rZ9mi2zoktMAi1RUMafmGmMrPtEUCAywNpBs",
  "key22": "3HLYLUKiRccauUQWUYUEkqW9VTvsGnGTgEC9KfWPJXRSsSX4JDC4Fm9vuQBv36Q16zoCLbM6LaSe4acPkoDA79cq",
  "key23": "29NyuaXpj719ms7i5hNaxKEggs3dqWcdTwmoGfsKC3aD6fFMukyCT13BNvkzqtZ9jimXjVLxMMVKwHS4uRtJYrJz",
  "key24": "5AwEw4Y44yWLGUYAM22p5FjtEB1JZ8JBNemUzeUq7eZcAv38CJ5KVPe1N4FnnzSE9HG9PAEBLLLcQ8g23vonGxg8",
  "key25": "5Qee53VkxPeDfkb2M6TRF2vA7kpujoUGNfXUWVAjUWBogCNG3niPyo8i7KPAVpwj59EqWrDe1dk5vTJiRuEk9ZL6",
  "key26": "4v3MbVrfSCL2PYpGw4btq4rytecxePQRyE6Hhyaai3tcr4qUP8HYHT1Uk5oHdukrjzijVGXVUpu5MBJeKY3aCA9Y",
  "key27": "5t3a1r1FDy7xZqbjUpwCNazndUB85fiwmmRTuSKw7zVA7Jf3TTGdnw6QvD7pCx5XM5GwPUFWz4i6Wa6w6CEu1msH",
  "key28": "5gSYBUZFw8Yg1rLjqrNWdqEHoTj5HV4Puzy4RS36tuodkocGtAvZnUS3WEnwGYbMxjBDjtgUYti7RhmCQ1bmNiKv",
  "key29": "Dqn4nfCJJRuRgA6mg6bMVoWqFvffAqWfSRqhfUXiKH2zrYbdxQbGqkgPctFeqSx53kZaQXYma8Ngy7tnNziWSei",
  "key30": "GFoioEdHoQsrocJfMF5jL6ft4FoJe4ECHTWDE8E1iUhbt9rbRYmif82oBbLZV7k5PhTjv5AoZqtQhHiuCwmzB9C",
  "key31": "3mW38asNxcsL8QSaESJYXBREuZx3njXbB9PLhSvxT8vAu1hv8wdzVUnk2xRNjwsoFvwbcEnsGAWvnbsPapWdR14K",
  "key32": "2oPn7DhJc2GUdKDbgf5JQ9VmbeQ1qkG9sqnYVrF75prvmRjm87y4R17TbhDQE6uKAUwZajXe7qNvY2B3nUtK2p4H",
  "key33": "5RWhAbqcnBdUboKUACKQ4UkTWjQWAsf7v1js9tRnwchMqz5H9Shfei3AVwojuGmRkdP8SAqikFDoLw8iLYmFvRwo",
  "key34": "65CsCKYp1DMsdmKqQD8TxnKxUBBHPjrvojyrp49KmXQzJBLZrZS1H8g3hmTdn1MedjeBnJBdCLJFA4fWXaV8kFWA"
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
