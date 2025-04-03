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
    "3qpDAeS5NcUig8MaQud145cCiUDEqEU2KikDCPxwioC4pGVkufRzAcaFo5eKbHV1Dcw61WNd1mHMZJ1Xsnn9kD35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nH5d6uJkiUrFTsL9Y9F6TKFi7DBnTxbdK4uKMbJyNoHhhe81Db4RymR1kks8xZXXDwENG67LAazQMseNMhSFcqR",
  "key1": "w2xyucuNHBjXyUgxCym6aDdkCMdnvYnks8JLrSojGN1776VdMbZRyHekfudsuDNFefeFhaBcf6oceRqXWnNY72U",
  "key2": "4jCCa6EhRZ1NuERzLkAcioBoj4saBSms9HSFgEvACuNcUWjy5gBSaiyMFpu6E8qe4iCqUdAURv4csumjGbuCFXxd",
  "key3": "3DCk9L3xDYxJACouVu9RhQVdXuBMp9STaB6AfL9B2WKxjAPftPQ3eUgNG8T767WEfrGFQoUSr1rL7wo9xTBdWGKf",
  "key4": "2kweA3yuF41sL2rnPUukBeVm3on9aDLNqX1W3shyRXHic1qveChv5SynyYRru2auzj2zSFjp78dEv3rp96EQxeFs",
  "key5": "2vVQL4pYDkNtNvotvjXmYxvzDZZDva65F1HNhnraBahh9He3FZib8eTjG6N3XX58m4WQH3y5Wau769QypDgnwfY3",
  "key6": "25rTPT1LK25ubwQ2tTmGLdK9ZwVhPDa2zKYJdAYpcusF5UU27kncyZnfRwNSmQFCUNFdSf4pNxK8bzsEdeMN51K7",
  "key7": "34aDzuMKSjgNJj6ejE2wARrtaYRotbFo2vQbxxLWc3dAwAvV8qmifd5D2vCkjh841vmiY1744WRm3dtwfi5XryXL",
  "key8": "3XXuphMWsiQA63WPRHV16Lo2W3SXz4fAs8sRPqaTR2s4yuzH5aJrf6AJfo367kiJUWo8zynt8a9ZSKq46FX39e4a",
  "key9": "4rR8JDpdu3Kzoq4z7pcSQe4T4x7LEnSio5zdVVQ3eT4wYGqhVqw74uWksHfsFLh9ZS7JbEV99Ydj3x4Lzo1iLpYK",
  "key10": "5LyqHFe1rPd8GKB7AKi8CehAAHfwKHKGZtp8dZwfy63g6an8zuRoemFnMzgkBVF2YNskVwsYQVVLzvwpVhuWryeu",
  "key11": "5aK9HXt7mByzSEuEWnp4UBmgmPT2jKASrvogaqXf31XyvZJXctuWdNYbSJpjtjDDFDW7BfLD2Ycq11h3UAsK7bsJ",
  "key12": "2w3gMgfCRm7fshY9fKUdMMtyLWD4DVAbpcyFaFLLsb6etuNuzNgnUJfLp3FAEFkZ2jNHEp1jgELyTLTaA2u25pBQ",
  "key13": "3aAEPfFaSPCzNBdBJMhCnoPeszbRKyHDy6bBeRyjNAnmBdkKnJAVgPbQ8odkA9Z4QfTJbs2fHqvteSrVEzYDWEXK",
  "key14": "4eN8unqGZXyq81S9dL6Ur5CoJeiXafVWXv8Fhiz6ucDAMgTjTSCdwuDHg1rqhC2HuLmtxH4ynBWjdfHABG7B6S8d",
  "key15": "55EizaRJUpGDV7jPqADQADkWZ95AQiDkvqGQMZ13hUvhYpqejzjNqjDQwCsDQ3ye1Z4vTjy1kzVKzihPiAKnESAJ",
  "key16": "4gqpbMPq8EL9YxwFihKvn9GDZy2KtAnUN7yn2eKNmbCRLjZwaKibr7FEbanrtsxAqf6HguYft3g69L3S1gkNw41z",
  "key17": "583gUEevTD1y6wY8W7p8bMmQsfrvUv2eUWDpKjVZz7WeWMyDPAqzSJ1zo1Hsr6AmoXTU4onnRJ1pKsKy4AgqU8Tb",
  "key18": "5Nja9Z7rRjzXtQK4wmsWLKRFMXC9HKZ92pExvemn5ABxDsSRWULufmJJT7UpiQNKZGEckx6hwwtzdWRS7SNDbgUK",
  "key19": "2w86PFn5f7gqTWn3gkzV3FxhyBfttj2KyjGE3c4BYkwKPX3HKP1W4diVB722p68prAWcqvKhZDGQsCYauZNFPqHd",
  "key20": "5269Kb5ZsfUZmwRckW72yxNjPLdtkEgVQd2Kw4TfoaiziZJ7wASv4wJntJKT7kBugya46TAVRctmzm1GDDU3hXi5",
  "key21": "Wa5Vx73EcRXANJ4t588tAxN1kNTmoSYDuD3ZZgBhd91dnquPocFfwVk4KCZzdK4xHkojcKpHcmoucyTsVwQ7wMM",
  "key22": "65eNTkjFtm9SmJ1F1GUsdjbGRvRnNQRMsrTfT6yR5bXVzJrsz9gEB5yayUDCgYRQVz4Q4qGo5TTiZDMxh2pKJvWB",
  "key23": "2MuSQjAozS3kcEgp6D4hUFKVcd3EjgvSZdcbcir67hoC2icJMXrx337dwAd7jonFobj2theK4VXxdoFxeTEL6UJj",
  "key24": "5q8TXmr7GBNYZY7AgQt58xNP41axkHWaYYfNkLyLcSWJRtH67uW6VW43rrrJ3MpuaetYTxykND2Zdjw6Hf5Km6sc",
  "key25": "ggJYd2Nouph3GDrEZr2Kq1AE8DbyrNzrrBA8a3CwmoWawyMGBWZrSzGsLp4taaSuqr27mgz82B5LkF584kYV6b8",
  "key26": "sgEdrrXzXZ8twsCU3hneCpbecaHRfKUobdpJVXcEsN5t8vHDJheCL6PJrpaTEzpYCtjVpf8BkvJjtoBsauoHjn2",
  "key27": "4gN49KEcQ1FNzidoANHyeMBMPRUquq2yLaAAgedVpoZW13NtfGwAh95kqZD6k46vQoWHGfhee5HM5EGWdt54Qp8F",
  "key28": "51U6q7JB7YcQhUXDisPNyjxpjwL4R4WCSW7Snz45S6xsF22xLiro2vTT6XEomBoZYDohnhRTdLCq6xZ1m9WPHQmP",
  "key29": "3zzdaxSXuPrUYNT2iwdDMw7jaeaFGsW5hBsviqqp425cS1totSjeHkYQe8q7hCvz17hNJ1D9zGYpGHniaJFoCVPW",
  "key30": "zreeeNHAW6AH6V3rBBJfJEagcTfy8vB7eXaqGFyZideLZ9pVhfHf4Mw4GWciP3JqBQJ8H7bkrrnTXXnYMNReZeP",
  "key31": "2aJDqFcBUnxau4dKbcifdsP3uxukpgx23gUeityx15MM1Fj7qnFwjfXBthaewFYVSd65hqXUo8ToKYvDAKvFAAxU",
  "key32": "3yboDRJmuJxTquuyB9FPtqG3Xt95CYsumLAk1ratj7Vc88cwoMzh4St5SBh8GndZHiddaAPXyb5Cs8JMbr9AqsYS",
  "key33": "3k1BMVAbLKgxXbxX1eyTdukfvzatH4BL4Dk2rDgbGwHgLEKzPiMFFmjmWpi5dkTBxfKEZyxFhujSqg3umPVHic46",
  "key34": "4NypgokdoW8btuk9jgFofXQxWRFraQzctSbzrBMmUHhyRRz3YKnwCqooqhTSbh9oTtKN94NCuczjkh1fK2W3jZ4Y",
  "key35": "5xbWUxzXMqTxLVzVLXeSY1qGZzAJWD6etr1VRYVPtXAeqeNXNYEVp8nWqEEqvEZkwEwe6u9x1Li9MSW8SP9KN9Lg",
  "key36": "2CV5b1YbXuSmA5Asy65JjS3PXdie9nTy7SFPWP3XTXRpLBEUwAtjFPSoCspuKnAGSj1VPJVLp7krnVrcZ5skjWhx",
  "key37": "29Ht2m25eTZ5CGfXPRULpfQbYMFjkg2hPu8ZZ5MSrBx9E9YzAqPpmzKMeM9y4dpKaMEiP5z97tWLni2rpcoN6aWE",
  "key38": "5qxoTXtYriR8hGv6kC8Mo3Rf18eKafrpRWHWPCuJ6dw5yTB4px3VJiUJaiyTB9haaVPDfWACMk6NrSWmBgY7XRsp",
  "key39": "4dFxsGtybsgA4ZnNbBYwyshPxk2W46g9jAzoRsa8gZM1TqFA1VtN4c92JRQ1C2a6TEhoYE7Pnf5iHycygagjNarZ",
  "key40": "5AfRYR1aftwJwZSMP8qzsrJbBPwHYFCG1yvChci4n56v1HnwUrHQSkWz1y7K8bDygfQyJ9SasGac8XrDDQia2xcC",
  "key41": "4GH3Ads8j1xEoQwSHvwmj5r88dZmQ4UkdgjxMiAZopxqjDZMyWsQPC8rHNAfr4oLccjHuiNP5MAJdR2pJx5XLP3m"
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
