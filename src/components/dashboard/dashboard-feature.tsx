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
    "5hsriakfLwbiV6MhVJGQukQV727heHdzzNziwgtB25mGoWfmVjeNzbTopV18C832E4xxRyEq1VsscqHBvHYKTFUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RdRY8VMBiZfjn8iBp31ssD8iGrBKfBo4BfWqj1rkecrNs1cuPXCZEoBjD4RTK1h2CFVaNurx913KEUEUvFLJamw",
  "key1": "4i3wufhdFFVyfCktxse8RQDBRy1EjJscXfow7R4zFcHdAon1bDcB3oSWtKjn9c2hUMjHhmGkbaZkYGAKpHHqFHAq",
  "key2": "2md8ynqSchWdeATqMG2B2j8J6PpZ6j9cNCaZJMTJ7vvhx1Vm6N1CEz3nBJXzkyi7ZVscftKW34XUcm5G9bxApw4X",
  "key3": "YzP1oye28Dcav67xpZfVoEsnwYA98Jw5QEwFksGtXDJmstTnWfVQZy52U4UzHrugh4kGKBLGVo5LfKCYegjb1D5",
  "key4": "ajLvsp8svHapstTzv6adfrobDGwCjRGv4iCphyvFqp4ESCuX7DjaBJP2S53RCqHNVU29F2AJmLLERkSxPQBbi1V",
  "key5": "59qXCwtDUWKP9CLK3pvEArLjMyRgz1zWxi4Kmdq8cvFU3VugqYjAC1uBfvkBdwG5kX9gxb696Xq8nCZXbNALnFnd",
  "key6": "4DY8uhqab6VXBmmXDyQENCGhwn8Ao5vmmJSEHAiXkAnkXoCgQGtrcPHxZPy55GjjtNCfJAKLnHtBLPFpuaFCEzbG",
  "key7": "653Gc6QUdbTzrff8TVzKZ1g3fuSo5qaMzTyVHWdYZkWC2YE3jz5CbGrUWKYuVaVykFWnYAHMsGb79CtP89e5ea1X",
  "key8": "17Dsnc94AfeGo5ZBgpSKJVqQ7QcYxGE8oMVCtsiu1yAfuKSx3JnbMMEakj7nSaBsBBBssGFSr9Phr22BSFekEmz",
  "key9": "oPXVdeZ1x7SoRnkeH3q6bTVUUMP8bxXjMWHaw9jf24r8EGLLqeRe3Vcop1QQYSMc8vAercjhSeCgvKVbsPGf7sM",
  "key10": "4hWXra44k4ZrJg5nXCdCfALJzd19QjXjFM6ewic8BrGCzmfQCzf6aVB1zMYK7uW39quu7FTgvwzeDczvSoDtSwKQ",
  "key11": "64UDgKoKy2XZ37a7FayFjqXfQ6SAU3XQ7j4hAaqovdZM5sMFFEkpT3KLoGGFCJ4TotEvdxVKfroTXyQe46ugqogw",
  "key12": "4TCJXx7rQQYdy52NfSjhRJZuntcAy2kS2pvMH9cUQUyrNTr1aro7CUWj7EmpURjZeYRaCTrS5AXzEY8GkBpjcaD6",
  "key13": "4DjJqnKyVg9Z6rg17PTrMa5Aj9KPFoiJfiJrzCSgdG2jxHewgCnEbiZdoaimUGq3ifnPuf1KXMiorFPbEmHSLMgf",
  "key14": "2oyabJMvNXuEU9Yv1tPERot3NkJrFJuJjuMTsKVedzGUfP6PU7T9acw3uTzyKxhDXhvJtP1Z6TupFr8ApmgE4j4r",
  "key15": "2MGWhrHXGQBJ9PvcnaNBXMpzsmFEVfbg8Mq123VLuAajdbM9MrkU6woj4yMyYg31aBzVtuk3kEkpgspai5zp2Uav",
  "key16": "3Bif49YwTf1XPTDcpt8xUTgRnSxpPafh5uw2QQoYFTzPQUGTAustUcP1jaKQnxkp2L7hxW5PAqDGXAygtKAA3GHe",
  "key17": "33WWF6bnT5PdeithDA4fg2dhnShoSCD1uNmbXEBofz1KAEt3KEMGqE4JpHP1c7re4BwrG9XLAaBrhvt4rZUdUbFr",
  "key18": "5KPFj54B8xBUdaaCyvaRbKCTsqyesv9PbA97xCqcgx3BujgxR34ihxqEVJzXRQ6GXt6syBsMxeJ5SamqGthdktzx",
  "key19": "22dHoZ7T3YhfCRAV2teTsmwRofXaJDk73i38TRbUvRmZJNn6ZwRbYwZZPk995ddnHjaqqnQiv5ikyhgvRTJt6rUH",
  "key20": "5q8vXtMG1R3oEbvy7SCMxoUo3hUb5DEfJV4GEVmNMkg6w15b1Myxw2U3hPAMi19MYnZwrQDoLqM4j6Mj4aFGnMWf",
  "key21": "4EuaRDTZU6YGe3wsHYy8HVzHd4R4YjXi4rk9m9vxP6UoG7pW6NtsGCm6Nbdz7VGXUrSrJEhvyLCswi7tu5AeVb6S",
  "key22": "3yrdXHvxCwiDrCHuq9U3sFyd2uqhgbSnAHnasNZcX4JGzzzuMB5azPfWMzF1dGbKpLApC16QTJ4fBrUKbkZt58JZ",
  "key23": "4YWzg6G6RYq6uKJVx3qdCguJs9uBfQGJvFse5zZGXQj6cHyAqcJN65kgcpdvdJTnMC6Ze6GZXsqu7VBamwtk8sB7",
  "key24": "51usVERPSjcsuKLnWByoHfqs8iBTYgVmTPnhpFHz41Qpgjq3dWoJiCFTjvuRyrRDDUst3VuiN6v6Hv5bwbW54gHk",
  "key25": "j82ZSbxgUyqfiPf5H7h6Hn6babXZBsnDAu7xYmDySDhfSoT6LZHfEjiMtJNDxwaGpY1ssFrrnifi9kTg5A3K1eG",
  "key26": "cgBdHDzX9QzTHPVWi69iExxifSNEj3yAbcVPkWxnhCwyu5HSGsBX12hyXXMHRqDBw2gGBjLQEFCpVy9aXuEvGY6",
  "key27": "5FBw53rEJeak7y67Gyr4MoWWM2TPm8CFCsXFsxBMsEgkg18i9c8VUCSee9m6YCeLcgxMYkSnT4kcEvZ3spKUfw7d",
  "key28": "3W462KuHThdj6mtU5HaT6ghTuybcmPwbB2zhHVpmHB78CUbDyyscKPrSKoZRLeT4cohBW9LLP1HdycLwfsGfuN3d",
  "key29": "4d4gVJFnDQCnw3EssF5Goto5ieucKvcXWcrxqrmPVrJiijB5CvxMYapAnUSQuzvChq4Q4dfroevuig8wKe6yuGTL",
  "key30": "jBcCQKNoVunmsZZVYFpVaN2Ldj62m5tYtMEYbVdm1dLRZR1up9AXzeJuv4YjjPbLwxwqVZiBDVMP24V5W3EzPRG",
  "key31": "51SmdweDT2QsSMYBrqNARst32b7LbkWXEqBsGR1GP4yRByjLjdoiFjRPLDpRHgw7YGbafE7ntLLycMj1CuPuRfH9",
  "key32": "Fc6SRy8qf4UEMJQHWAjZo4qP8mWor8mfV5xav39X5y9HF4yrA8wz1HWw5U6PnojH2Uf6StQruzsR7WGhjCCbjPM",
  "key33": "4bGVnpsRUQVMjCEkk1DB9oF4ZnSJcYugsqWGw8QjwqaesJgrszweDmxHj36CVpGJ3MHzvLxzRSfTurUzskoN4H4f"
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
