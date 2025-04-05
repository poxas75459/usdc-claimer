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
    "42amQyqQypmivajYRGchPtgPKyrMDcbQzWQeowHuusUrXdhW8nRENpUeYXLrkpvtnKibDqEgscB7CSE9FaESfJwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yB13T4XwuEQdd5XcyA1LvC4HoTuUVWv2REDtm7f48v6zZJHhhjYg9VQdbRaZ5Y5exieLBvsfd142qBFCGansb7B",
  "key1": "44jiEaeTvr5v2BNGdYghBeJtHSNP5cGcGaZvxoFdrAZLnHJG5EA6Q1QktBxQkf1bMo66kLcFHRBYANUxDtCq3epe",
  "key2": "5JQc4NhxbUWg4E169pVoH1njcKXXsFAHDFbm74VBxaFNWUd8N4CRiRZbXjvkxtjG87mCJRthtg6KuEFyJ4XX8FRS",
  "key3": "3zmCHsztuVLENVmVacUCiEDDS6VQ5UZzjFCSY8ZwuEBAP1qCAMaq9rHCJk3Z3kg1LpyGN1FtzyEq4MFJYmueLYQr",
  "key4": "4DecMHt6exqcP8yTPaSEKjKNkDesHbRM9NQoN4LwvANtuXouBp46oatabywiXYw6G1YDA8HgUNcikKTN9Au4LbZ5",
  "key5": "75tRGKku5BWX4Jjy4SXnJHZ3jkcqME5v5M33Kmrr8tn1DweGNpDtQhn4zkcYdX7Mo7tzjwHjyQTGS8Gk7GYXWXv",
  "key6": "bnwozfFiqcpJoaELXgGEw6e9KtMz15kRESexu4QuVzJcJ7mow8sbVvoC4vjvLR22atRCtd27KzV9YKgjpwezNMx",
  "key7": "44UJDRSP9rEDXhyu715BNPzeQWYzJBKHERazjrq2jfT4p5U4RyhYb7UTgEiDN8ejx6mpTvPntzmyK65amUQjCwjq",
  "key8": "57pkN5PzzfR4ReNFEqZA9L1Njw8w7APfzJw3so6b9UAP5ibgSxEzm4eCyFkfkLjEcXszNyEmqRGy9ENfeSvTKN1Q",
  "key9": "Quc5KNpKg9SM3pULhhr9XnZ3uiDFZTDKUzPF9EYd5YTTwipxHWVmYWFgHeShmqKQuFRNdba7B5Xid9VNqrpmt9K",
  "key10": "zUeQ1uyvjiPppvugRMuELXuwQxcgRBF4cyey6axmnsSsLKdrQvK64j7kLsHQrq453XybPPdFciEM4wuKicuEdtc",
  "key11": "43GoDEdd8f78nLZzbBwatK5YW73rRjRYy6Qreep9d98kqy1JDxegHcrpZLe8LudTXpGmbZSsxDJQ5oLjcFRaft1t",
  "key12": "5PT6f8AA5eQWGomWnvzWbvFimmdW4smoRTvivSBBZrmNoefay4XqeL7jPnuLDs4wcLgNS5DnbNc9cQrETYd9XXKV",
  "key13": "3sYBr6hZYbKghkWM8daWbv33x3poskkLYVL4tYzV9srKGiTVA5fN4A3WgfgKcDv8kPr8rgFHFnVqDyNLxFVfXcJ9",
  "key14": "5bx1wizHXVxSA3rWFeyFgxMfME71eXbqzVVK2x1huedrw7AStqWadSzkovn7EwDxYWaqx9SgKfra8hJi4SjQZCwc",
  "key15": "2CgJfTMcNiJ6keqv6cY5YpH1mPuVsigsHkq9dy6eJbaGJXUxFtE7NhTRpCWkMdPwJohc8apSVwBYBPaeyHUVXKTf",
  "key16": "ACzk9YCFkjWC4MVUBpsGDmq8azVwkxKKMiTk8evh5TQBcSwdVmALtJZkqWBR9bUGHGBpRyZqQVHe7B5EtKGeNJc",
  "key17": "3GntkAjJdfyyDbc8mSYh5PxSVyfZg1KCgzHcFPEAceATYeB3RfnR9j2bBZfpQ5UHbKPfs8Kab59YDhnoBRyMmn3r",
  "key18": "ysHMcWm94YdKB2E8Txn4sr4Eoka9Nzk9skPtoU5FSUp9UPEPTm7CZmtmoaYGh62PiBS2nb9TwKCd4J4NvxyHeeE",
  "key19": "2MiyjMh3Tdo7xHoJ2FedS6wNhTLiKMkWDNUJpLKXudsYEEw3ZAE2YM9tTtDdqbPj5HropT2DFVsDWfRAonL3htBC",
  "key20": "2zFb2reySJhr4XD1vzteDkeW46JS9joxG734zCQW5gb4Nfzp7Ak8DvRQCdFcEudTERN6rwjJ8EHoXNaqpZ5igp7w",
  "key21": "tHg2Z3eNdesK2K3hXv71smWqrmHu1nSP3eUtw6TsudLD7HaDjMv6kcNeNnD1xfbyqhPsKxK5R4uhhkSKaacf8Y4",
  "key22": "VKzRNif4ATCUGeJQ8EWJ5eemXTRbwoS2n2NiHGLqjD4nezP6WF94hpDGGpN9iirxjo5USXRzgWJTV4YxQEH4sP3",
  "key23": "5X75ULtgG5BFyaZiprdyoSHhZSn11RGBYNBxdzYMyXnefAJXHy6XjBVygMSZm46G6xPQ19XPK9Fu8qtpNdNy9X1Z",
  "key24": "3wEm87fs1VNeksGAFPf56FzsrFM6RwtiTnzNUpru8KbNiynxGn8MGK8h8rjyFuq7iogZarrKkuEYULXbMeDU88Fk",
  "key25": "2g5H1qszgKNtvbxSrbL3sCwypubb4dPgavm1hwTXVxBupXq2f2abAybM8dgQAXCyJmgF9TQjpNHdtuH4Lpa5E2px",
  "key26": "4HRtuLGRwzvvFgnbeByauVrSUFyFQTVt6U7c25Wpv6XW9WM3RsYGc1c2CPzh51Rd8JkbYu8tUZxhTeFTrTWmKXN2",
  "key27": "55BUAys8RowzuWQFiZjG6CkmQiiMXU4hqaxXXtbm1yd5y6jzgri5oBoExvHuqwSmqudJRQ8F2iK1yJH9smLsYC4T",
  "key28": "65dWhhwnuoMK3LbeQy8fecuzu4gm5yLg6PgsGG2rCAMbRxP1aPybspxyGAxSoD99fZeMe7v8KRQBM4ZGJsrDbT5V",
  "key29": "2JjAratVsyWvAt8gYCFMxX2RraJH3vw7jwXDN6gsxfHinzu1WfNd4AeUqJ8iGpMm3jm3seL9oRPNBePBSrkQf9Fd",
  "key30": "2bU5dSG8QRokHpvbRTkeUgBPvDj1o29c1WVzRoor7Jm9khnAq2X7ZFeYGRZPhoAQ9a5PeXKEdoS5HSf2g1mFEAip",
  "key31": "c9WNTetsY2GSTrf4SRMSoW5PBELviGdtjxgBrhZUx973aF5rmLdQEyPEXRyaKLnYQXecwnfTnJJr93T387JT6pL",
  "key32": "4GxPP7Rx7TKCxKrFVYjzPQmdZ6xQmUzQ51Jug9BKqgJSLd6CATyuHWoy8iCpFtxjBg7ncTagqpmUPMfhrG68rNma",
  "key33": "FQLceSgYZwVh8W16qThtBrTkT7mttruVMag8FbyCiAJZcXDknarEJLMwYZmrVSh76nPJtQMdnyz2vL2qgcppZhQ",
  "key34": "2XRcikfbbYJurBL68bteyQip1xRNENnnxv37jBu1a1G95UiKLgrKAyzVAVD2PHxRAt94g4HnYboFKxAGno6f9xjg",
  "key35": "veKhPfTHtiW5w8gsPZdM9zErRvm1kY93KiHGS1384Qn5ZARekD8zNtNyVuMnbkP9e7EQqtNgyQkYRYQwybTSnZE",
  "key36": "5THrDEVBp5Fc7sP5YFXsSragHsmyQESu1tKnRNkaXCc9r2yxiT6PB7abtF8fSQg5fjq7X5CEVYhNKsSpq2MWtem2",
  "key37": "fvzskhXwyrm4kWbY628Ha4ovQEEAFf6bqtA3NSY5VUgpZre42PqcPH3mUdNu4eZFp6o3QZh4JVxg4vtMMZmWhJw",
  "key38": "2Akza9uJTZdqXukV4U1vKy3XS22EhE6seX67dRqM4jcY9tZGhfbkkrBPZhtpc1EgZyuPXNLJwwqjNba8ohQ9LsKd",
  "key39": "dZEA8CqYV5Wp3xTJ7Tp4ab3tESh7ZewvDYVB3JvGwuYKLQScTVAKh4sNP31zkhug5yoUtr1F1sGEjgLWG8vGoFd",
  "key40": "63zQAo5deNgMkd1qtVFfA7ZDZgiXuzMeq62WLyNXCG7ksiVpA6rS5EkVPi5hyFFeVeHi7pwucXaM6q9bo6LaqdAG",
  "key41": "3z1SCi8h5uKQZuWB95t4RVisUMJKttV1smqZTmA1FqCoLBWyv2ojvyiPSLdtL6kYno2FLr8eGK9sn3pBt7NctTZX",
  "key42": "5kB6hZjDmrJ4hmLmRJ6fvB4GPnq32EFfMvmw5Fij2VTe9eVswmDLnsJ2d8xTwcANZX3pwDQkbobZbDKXeDATDB1g"
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
