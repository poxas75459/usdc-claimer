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
    "2qLngof8HAMp5PNw2EKWid5A6D3tnx7cM1N4KVWTTbFT5rFDSEGmr68dm2uo2NMtnUTxWvbUw2JRrpuxh8DEeQgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4knhoMjtGNdUum1VHD91HcT3TYrDS3TT6oVYD1n2VaET8SX3j9mrqbrF1TDvGi9dZDjvsum6R1wAoGzhPqnhhuKE",
  "key1": "azcFYuZgvRbzZbZuwtKhHcjDR1WXPSoV2XoHArU3JkEAcJWYREnY98L6ancSH13iRKRwSuQJ44WmaARp61neSuk",
  "key2": "243mCYDZ5RHyFba5tRvjLAuwxsnH5ybgexJnR7f2CC5rzpiZhsCgvi3Tqvfd7CPYrp9SqgKkxkwpsznA3GDDWuui",
  "key3": "jJwRxfuTE6yRwsvP6AEuH9PvAfhqfh9WiMFjGtPbu7vxUEydeLgnkXzJB8uJbthsL28dXHQ4HNr4SB5z1mfk77u",
  "key4": "2RhBmZCY2TYuFLCoxemayLBTDSSV9s4nLNXQpiF4yjNmxZr2emLNSSLW9fUTuLATxc9LXs2Ux6YyRJ1SgTVnixSH",
  "key5": "2JQGW9ex1ou73UW8hV1RQa8kEtwi9rLaC8anJqvwM1Dv6aXiEqZhwg1TTLBV219B9KsmfuoRVkBgQB5oCSc1sYgu",
  "key6": "5HvXSHfakBp7EP9K8m8NnKFZ6TvNvikhzZ88pSTauc8YGH46GVpdCetBU4EUfzxEbrMusdhmiZPxby7b37v9op68",
  "key7": "2ZewExrbn7SNLG4UQhTwMjkxk7ZJfE4Scata1M3GQqTze3fXvJFqTNPc7t7estSRtNC7R5CGUqMDCdMSgMHQus1n",
  "key8": "54aK6XnGnwda6V11QzyNR6dwmU3zFZwru4Jzy7H72YxUjzQofqMCRiDnCyhhMcLHL14kFGWLbzGDHN75gicgFNY8",
  "key9": "3yDScZ4F7eEG9FbV2ku7P47Hqw5RbDWyxxC2ki2jn3Ce7NL3mZid2yGtAths8uoucYJ8UQAYHR4DWQbQoggUhvP",
  "key10": "FRd5dyTEaifHBW86MckBcYtr14yA8JTedJj6EVbs3UdjaiLbyaCA6rDDDxuQSnCub2fWk27h8RqWhZFat58A6QX",
  "key11": "5J2f185EYYT5vVAg3Pvds77AxV1Z1QWGLfbsAdg5h5sKJDGRpsSGJ5BVGQqJPZyvzzANrp3oqzAdgytsSEA7h1Ln",
  "key12": "2QJAqWRZf17xQmyfyaKzTSP4gxKzAFeadobrePivTf4wPRmmVruKpkfnNYGmmFnxwNW8xM3AudpDwuvQe4QZuPNb",
  "key13": "39K16JB6G1Xz3k3vRHXGxzpGZ42DamhvxVGwN1S94Wg2d5tQtyAHBfJt5qyt2TfG344ujmGVCjTGurF3sPF3QHnc",
  "key14": "4oj7Ekj167bqXvMnzPEgVY2gv2yY2i7A6feUSZwJ25UqRze7KBzxpjkCR2eZzBgJwFLJ1cMV4jkPzYP7MjXCfSh2",
  "key15": "5SbgfZWQwj24qfqozM1CJo2BGd322KeWQRDzzB4yLztbbdQdVbiyjj5E4h5Y8Xh5xtc55jBAAAw45mQ7F4uH9Gy2",
  "key16": "4ynTpzaxgF6R4BE6Fipcj4AHnvx9GkBBAKXJr3U7C6fTBHTCFdiazvGUMWcuWKxaEhEjzmssAF7RKLboHpDcKzLu",
  "key17": "4En3PBA89gVKUees1mN7iddpoCbRTJ3r4wbsTk3GFVT1axns1ftxpuN9cV8rCgFR2c35C7N18TUegaiUBvpW99wW",
  "key18": "3KJ8ASum7xQkKHaTb2Lw4B6Gn5TR9EWX3fzQJdm8TtkU8pyWUEfsmfScZMRXa534QZbSyNxafphKNFewfb5P8fio",
  "key19": "2xkTpb8QxHiVXgeChgoJKv8w7WtHdXyWMrKAsp1xXXEru64o4UbDgtnqVjdPgdcWUuBjJ8mL6o5G7RNrBZmfyjL5",
  "key20": "5QDKrCcTaHrDeMfKwHZWdH5aBugiAYGq2kDkx4yBd21D59H2VpCMoBEPLZGwsRCNhRHBySEmEVeytShzwu27N4oW",
  "key21": "27K5e1TCPcV4CVmk8xAD5CoJn1b4oV3VG44LoNWvryarQx9iSDThntniNCHTkAAdbSiKdQk2AwrHNDEg5LcuVSy8",
  "key22": "4YP7qvA6KBk2RHPNRew6ucYXc7zAkPWshCbg6xgaQEz8gQqkoJez35w5teyErYSYxud2fMJdadEDEnzzpkbg2WwD",
  "key23": "2ppdpg5RRjBWhRmHkBU9yMuRK1bBwFUTTTMYJJiFwb5PYyiAWcppTg5f8icxiDCv68wTzkhQwsw7jMR69mPMKvGm",
  "key24": "2sFKXh1qboneXnjr9bSaDAQrJK6SdudBBDATDFDsDSHumtMXL3b8CdrwxDJNHbaB9YiczXQJo8qKgcTJ6FbkfLX3",
  "key25": "PUMo6RZB7i4uLMewgbfdJ4AqZ5VHDXL4b7uNL9PaKeKXEpD6XDngQdeaN1fdB7YjmHLHMLAYamPYwy6fdkovm8p",
  "key26": "Xa64tf4gbLrCLYEcff993krufJWdY1nkFmRrmcQB5zNw7nLHT3FwdHKk1iB9S8ZNm1qPnH8kTtQvnuPyEpZC8ct",
  "key27": "2E6UKDLwhSEKJum6yWoMEhym2Yj6P5zqpiweZzdVNdsHzfn1nnPzS78UJAo8ugzzYrDbmbw5kohMbKVEEiZNpnFw",
  "key28": "NWdYSfHWnrWjuwi6PSeRUsZgvFsLpmzNxL74bbMafzGVizMw6uYwPz7zHYQ9Zv84DAaWJUYUiFGm5qHfmkKpoJK",
  "key29": "2NqQvfW3bHfxfrHDj9HbnE859GrRjEzTEeGtS8bvs4sMNDtnRg8PtRRQqAKZPaFqd9HbjAsRVPtTQgijM5KHJcRu",
  "key30": "26LdGdqiNZEqmuUpwxSRvsePpLvemVo9qXSgff6zweMhTVBGPmxy25LJTrynmvwkxTVVa8soMQKBd4J2rfXGfXkZ",
  "key31": "2ywTTCEoK6YukkdRW1KStJnMsgEnfcVwfPxZr8m5v3J9ArYpzhq19WgsMV9cB99JbgmWKcFZ2duLm2cRZSq88xVQ",
  "key32": "1299oRFUeezR9Se3Wooeu4RazNboc7ZferyANdSv4u2S3c3feycnAJjrGm7nYPEDB6YGTj1exD9b7F1dg8bZrdoR",
  "key33": "4uycPAJ5BjK3Mz5DiNgoGuoKFh4KNVSavfbXno4CVkYeP3XiqWXxUVc4sY2w2jBdGKRQJshcUGP1dHiSM5aG3vEE",
  "key34": "3MsJVZUTT6h62ZpkdEVZYPX7vuuBq7yB3TBMFV9gHM7jM45uDRRvkDShVvGkfhBkzsqtiAS9ShbyWk3DXCZV4vk8",
  "key35": "5JdsRSgTYymFoDFFdCzZCGnzG9P8fU1BdgtvY9JEiKzF6DtfHUcs2NsuTp4a1HJCsEnqd2zi62vCQgY3NNmC7Avq",
  "key36": "5Y6QJq2ivLFhpmepibdxcXFU68o2t5zSSne6jfASu4Y3fsBQEpA1ooRNdgPz9vwQHzY3opdH5eURwweJFCoThJF9",
  "key37": "uTSaVv6mb7LXQKu2918d3gfA4LivXSdanMNE4Qd7xqgGVwxe92wLoh5MyQfeJbhS2EZiHuiPWhXW18iRhucsdXE",
  "key38": "5xxZoWeoKN3J5d9eGwN1uJaiWvWr15Xypa413gZ6YprJCUUdht9zmDLSnWFCv9joiByi92a9s8LfQkuJNPnCmVwa",
  "key39": "CGzsJMQGUwNK4hgnJ7KzT2rKAqBsUKh9CXr4Z8L6X9uCPF3mWqxVfpKtSkYsxhxv1LGtiL4iP8Yfv3RrjBNXtUC",
  "key40": "629Emv7QX7m8AbrLBUipsvGQGjmLBUpSvLzWy4atYgjD528dwbLKv6YG7McBzbaAAJmvuoCmDDgz2QxyQuanU4jL",
  "key41": "2ZzpfubFbtCsP3yhJqrT1vtWE1M1LXhPkpgTcD6c3zj3KKnuzdyPb3i9kcJWjuMRuu6bhLAjWCiUXdJnFh8RC2Ss",
  "key42": "XZszTb1xYUaA1PLmCEaQsHk6dyxsXeJrfPkoExGZv8vZj2sxpes14YnGJzwNzMPTgkY4bZDZHogVuFr7wm6NgUS",
  "key43": "5UVJzTAvKuHqDMHxYuzuKUppvFcUXvb8R52g29Yr4uNfha3ZFhKssEGTa5ZJX1n3yvueGgu8mNrFpeHedk9YvJZr",
  "key44": "7AziW5JQAxdi3XDpVVYZ3V38e1RAGN5ZK9s3nHD7pgpFUWSXPXmSZQHKbggubuUDyTqUxmvjDcEwa1dYhnqKeLi"
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
