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
    "5f1UcwM3SgHXb9WHDGRXTh7NEgDbG1VUDnzJAxQNoDZKnEGLjVkCi1rwgMoy1Jgnqx9bdFoP3RGjN8ErVGvGge2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvmpXA6BDm33kT4HA58eA4ARK2djVaxo9cF4xM1wfbKY8yk1p4LjN3CHhPHoAPmDRwCngcHuKjL1F9JCJXzBoyS",
  "key1": "2XHCc9ZeUQkvJUcCoZRMbSKYbvxpfWQU7vaUHszLenJ9ZrzqWq3kdEnst86828BGnsVmvkwF6TkfkUGpYUvBW6qf",
  "key2": "2Lu8aauxhLnWmZ3Wpq6BMXjW9oKMZkKRk2exENgFNkUNPCxNCLBnmDsAHs86EqoFRw7ggcKotdXm89875wZmHtVy",
  "key3": "4GrBmPMbRYNPfZZ2AnpLN6byiYNNN8CBGPhd9LE8QXCPYancMyaAj73pag1Trecb2SKeRAY7J37HodoNs6zPb1Vp",
  "key4": "4bdoyxcdKp8NvCeAixUvkZcj72AwX91g6fDxyyGrEtpPUjoKGNvmTGp5w6GHrQKYzS7qHR4azPCdb6Mm3kuAP6P1",
  "key5": "5GyaaZCr5vfVSUF62TAv6QeKjseuXN3mWrHvVtK3uENkSZwgm5AjVGSsS1mNtabfEUXmWZMTLDRnfshpxPDTfeWF",
  "key6": "5GM3avdkeBk1jabaEibccXoVk3HNDJjiV1gE6YXSyJ7TDj4nW9bSnSECKv3Sn7r1TsUF4DXtgXQM2ZqPErBVnYfw",
  "key7": "2HuRq9yQCUw6vLgrf9ucnPYYFvYSKgkJtm4faKkpYpudgP6uTGGjgUyu5VvbbRzUFv8BNmHTM4u4H29DLQ1uNaWA",
  "key8": "53cYBEDzUPUgbya3uC8fuxAKsAjXFoNCXC3NyZrb92PnZCguPrWii5tkN3JESKw84b2mqGtb9FPV23s2Ma1SN4Rc",
  "key9": "2P1Petjog32yWCtuR4BvUuCz9M3e1hazHuaZn1QVPbM74PYkWNyFFfZjRVjhw8b8sdu7khBLhNnTrG9D2irPrdU5",
  "key10": "9bAoXzBVyWkcD9WjNkZ5Rux8n8AZhRF1CkADJwFYKKaj9p6rQJnP5bRLcis76c1GK6Eqjj9Kqqpy2TjDwuYVzy7",
  "key11": "3BBpezqCpKZ5Y7cMZUoDnY1Cba7gpLFyLsgXpzUrroHd6McfFUWBRMT1SeShBeDNkTB84dv33zMDcVam7GWCyoxG",
  "key12": "4pwsUukf8fEMtkMP3T2fJ4Tg78EMUtwUor3AMGE9aWLm63jzmCt14eDugXPrmdaU5SrYZhvm3FfiLGiF1RSXqfcz",
  "key13": "5AJ3nk7HD6FxCeNQbSckMQNPJe4UxVkXajDjf8AaXyHWyfSCLBfBQGnAVJ94YBSGf52DiU3a7RjMU8QsoMtVVdjs",
  "key14": "2wYNazQQR2RN4RBKyw4APainJCJvxPNmx6ueyn8pertvivhF3u4iuhZfXQpWUQd4pgn2AstRzDwP8rET2HnBgPN2",
  "key15": "5myxZshcmkwH8vdpKGrEiD4fKYWvhdippTvqzePCfQCw8anQfLfxftZ42JPSgFqHNSkQF6NVZ9WyCfDdrui198Rw",
  "key16": "YkfW7vcEUT25iX896etrWE52dScTYwCaisjEDvxTBdTQCWdGXKdx9CyyvQL2B44ZZ7F93tN2nssgUPeKBMWGG7c",
  "key17": "65pgmN6fZY59Z1uYJGbuDWyA25q4TfN5KFJQkqvJvEcj4B6JehhBJLzANVJWX9ERLWCPMXA3mBWrY4nmw2h4DoP4",
  "key18": "4HWEGMUsgqaWCLr3UcQ42GXCadGHTaWrPuuryWEkDm1QJdy8K3wBSQ3UZ3DcTC71WU7WKZyWc55MMTcyvKc7rnPr",
  "key19": "2kbKnerGdo1cmx2PrwkYqqjQfMo1XsNd3KSVz8nGuTZaaoF2AhBQ1quiFSRWRY8hNgdPptFGN63As4vyXiUTgWzp",
  "key20": "5u6sinZE2B594o3FXZDsHu6T8kkiQffyoTq9EyPrrrAuQriYzJcjTmAHMtHBvxZLH5m93KiEWuU3LeH3LK3HnErs",
  "key21": "2Z3h3woosSk13B8DMcEDaRnuapJ41B9ZyRKmmCtRb6vKh8DfyNnJ2x18fY6ha3JULX2vW9mtHo9kF7r9nwpJkMs2",
  "key22": "5Ro1TrrFR9XABx1rPJVbhPnt8dodVpxLGLzk1fijxPjsiW12Uc7LdjoYKFEEHsVdbB5YAz5UzdSuCsfcHuQAW2jK",
  "key23": "5A1byuJesrDYcsAwjjvaRt7AAhe66xt5SH6zS4tokJCnn2anJLTPwWDsjdX49uhyHHPgwd1UWTchCek9TCcQnJWt",
  "key24": "3UhEgL2WgryfzvVYT4Gd13iUpgZTNYxkqjS3as5RSQBMAoxXXuHYewTrkAV6ysvftKfbfrb1Te1kmXwNVwyvGAvQ",
  "key25": "58bbgx7regRdQYQgqtuokeHjAUKRrreCJDSz9GSSd4qPEUTpSdkrwesTJNqpG8pWLnoMyNChrkw1v9tUNsd7pfya",
  "key26": "3a4JX3AqMgohH4k5x7tpc6rHTjCoBBm64Z8P9SwsUqP9rXN2mDgBp1QBV2qqjZw7zk6gao3vmqtH9DsAWTNnJpJE",
  "key27": "4cvawNotqnH7cHw4K5yphAna2yHCjk1emK4JPNCJVv9jJm9dJ1GrLsTzBceE45gWuBk9h3yJ1ZkPZ7BLXiF5E66R",
  "key28": "3dHUQAqrd71Uyevsaor5D1Ab7NBW7J89uBPR649wvy6crN17PbfkLnjaBW58Axp8VNtsrZRhca9tYC2f9a7VxuD8",
  "key29": "23FkwaipCCckZQBdf6LYmeP1ZuRREaCMKswxLKX35p794w2pzJm3qv4DVygA4ny5qFPeKEjz1BCWtMVDcMje1oji",
  "key30": "4K1NP6s6PPxpTfHtmc5hL9P9boxKuTTv38MKqGMyASmN1qbgSZQR9c2z9KSAH8tA9AVgQPitYmEYNPVpGWPaSqQm",
  "key31": "2xVmHaZ23V4d2BPN9hSpyw4HJXRDPag4gtTYsiUAYNhSKe7oXvUsouLrXdxPrqUVoJ1yE2Fm9H6BVYUjbZe1Hhk1",
  "key32": "TmsCWA6r1miFCZjB6LYZN5sFPao4aHf5HU5cmwgdk6GCWk2NWw85zoK6TsGbHGgo42E8M3jq5jdnNHtkNRzXVjw",
  "key33": "2msEKcsiFwQa2gtNo3suQt5g2wdWzLbvRgTLXAPktu9wqfYyWUruo9caYBymJsuvfLzaq2kDNXe5VLCpidc8DGd6",
  "key34": "UMSvzoavp88mmD7H1o3ksDxdSgbmmuaeewpipk54LQb5oNMU57CB9Mn2o41L9nxW1JFa8khcTcXmkycpfxLdnoS",
  "key35": "3HqJ1yMxnmxxYYcrbzof7jSeu3BpJcBSCBGp4PxzCTaCfPswx6KTZeAkBrMwjVDQvF3vAgZ5CzuY8SynDv4c7LED",
  "key36": "2Ajp3AgCGmPd1fX9d8zn2mzwjNBdHFgwKTD7ukdZNQKKSH6UQ1m4TreTZDrY8BLGTSfyDod4Gp2oTbmNigauq4h7",
  "key37": "34fM3dEh8qZkowkaAgqVshzJyxQ6jzwgEVaiGrn87TS56aMEqsFMqxxTCQMyTh51BRsx4LuZXz6JFznxSoTNM3ec",
  "key38": "3PcXvhSedr1vz4MhRWpii7Qi7AkhAUmDFuWkxSgAzBE2BvQ8mobYT8gYDQWdF1Hw6cFjFrTBvajSM7xUVZtq1tpc",
  "key39": "5N84iKBEmJqM4DLFRRmBU2nTJo8WRBmdq472dvZursdoa6JcxhnwvyUxCRDCHncenrYZCCyRzbvT4WVYZnav4Bi6",
  "key40": "2LneCND5HnJVEsWPZpqLDhSkAjaS7piYWrA1V7LKWneMTDF2Vkbvt6kJxGtpZCdZkvWLhNQ14EQGhDBVLAHsKusK",
  "key41": "4PzH653LqCpsEYFsXbuiZ6PfqPFNjkFCHXcVjZf5NpcJJC169AiZCkeZKDjKHEcmPW2XdNEdKLHrZ1rKTws9BTBS",
  "key42": "E45KwsRVmCZxBBYZoGm1kktc2vkDYKu9Yp2Pg3LeL69oiDGyzGSwahibnK2VcccMAeEe9qX8uki6vA35i1RKqcj",
  "key43": "fUDRHBmfozPQA8gMapNNLPwPqGzVJC12947ariQVzUeLdmnhjuv2KZypbr83aeDz6LuiFqd9RxPR1SohAWKHyCJ"
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
