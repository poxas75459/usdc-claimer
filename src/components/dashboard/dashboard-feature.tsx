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
    "o1ew5oCBP2BpRMu9j43Myh3a9MikdTW1eUg4ykcGLhKs9UGxiQefW1G6XRQkKCf7fMwSRfZ7kRF9rQB16q2Juy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bZoRYPHXg4QsRefvikMuJeie2kVc2frTm6gb9t2zx1MVv7a8zxqaAFnJ6ycXDxWQXpHHYVQ2j8Z2ehAmooJPgyy",
  "key1": "4rEKwwxHT68Q11MLC5zk6rtEgSQZN9PbKDZd5P5iX3uXqypmTWXiP24pP9GhWA9ddz2mrmQFjZ9zJWapznYVFpW5",
  "key2": "3PHraN1PSM7A5MD2nnNgZfpVRSBBaacTx65tptyg4GshJ8hypbnzaJ5DLZ3EczYEKEtWarcKC5MMRh2zTZ6tzLZ4",
  "key3": "2BRWQi5E4CBam6wdhNHohqDEGT3ZHKBz5whdXcSDh3zqtCSSSnTp5fg1vW1pBjcDR6Uf9n6rkXE8ryA3GwxUpsA9",
  "key4": "5uupJff3szBpjwz9f3meAhcY1SiJRHJGE9D6K1WKW7x49HVZSdzCKK7Ri6DT6AP6ykFr4HEUnS1aep62UUPEzWFy",
  "key5": "4b8yxpWjSQVjxqabGhzkdgcu7tZbz3XDTF8svNKh7F2gzjx7RwjD4aXT7RigoNdzvgS6v6HCdmca89B2UFgV5ATH",
  "key6": "4FaztnzBDHokbiakZP33phTtUbeWXcdYNVSdJtYD3LCj3AiwfDocd3eabf4LauP7nUyxMM8AWoLjVvGTV12CvGDf",
  "key7": "2dkkzm9xqs8nGyULCJHkcY4rskWosJFpdFPcKYYfknzL6pNiAnZiEP7qTHSbwXHfX2uHE9Frb4Ebpzv6TZnG3ZHa",
  "key8": "2BqWuxB2Nmr6HASSZg7eWXsMJPjnFEiwxG1RyMh2rERv7hP6UNSyXtfxtY6b335US6qUAsGk1Nem7LTx4eZkaiFc",
  "key9": "2d2ZP1z7J5HkDvx8taLSjn11gKnVsCtJi68gZqa49wN2ryhWHR3F3QHFb5mDMAsMbyZzUg1c4DUbkXEkKWvnz3jC",
  "key10": "416eUhocpHbKvsoDHicAEoBhjxHSBaJjh54LhT1gPYZAeYKTqCuuVFeoSpNpQYLH6VgLnPN5i2rno4FE2eGjXFXR",
  "key11": "wqAWJgBTPReVoMskhEr1XJKwWVausPAx4nJ8QqkwW1LNPeWNaozbpjm4hyDkVcKaFpQr4HqjU8Y4hDbjTm2wcuE",
  "key12": "V54G1a7CBrF2ccg8XTBnBejq8WBmz9M6r82U3SVZXsvozHBCpL3r1zeLMxkteGSreQ4tNgzycWqUuSJ3vKeaeQi",
  "key13": "xAfPY2tmqYDwns2AirTJuyv8fTfFrhEsTKLCHiQJZZZoYPWQV99yV49EizRwFAd8LycxXpcDbSWzyQYAzPAXB9y",
  "key14": "52X8rNLtuG7HxpvhZPstbCaKvSLEVQzQ1HuZ4KPxpERUttaVkXNcZGyTMdFt3oCao3KxtCvWCoWahn55v1RMLE3S",
  "key15": "2qeXaRhw7iRFSvZqwwBCMNCZVni3KB7G6at8DEFTjkc5Wf7rR5CsHHSFkVnJNMvxHeydkXUb2VGobw7TYC4KGk2L",
  "key16": "5xYUGJo8E63y6cJvWxapCEMEEVrDns7rAnabqKGriKPKVqHv8nuEcFx8u1Q2ncLDHvSqbRxdxPnsFanacuECiXvF",
  "key17": "5XeGaU79GgKPdoKM5DtpEgz4uDNH17XdFYFJDsqyiuwSmPBqoPqz6GDYarjsXKeBpC1NaxPQq4RAq8qGEZ4fyp1d",
  "key18": "2mSNbAKXoFyvrWmGx2qRhGhXij5HbgMwSPbYHL1Ag5H6VYd1aprLPiiYgfebXjc1MKVmb8eEeUykxXSSm65MPsPF",
  "key19": "bzGT9e4Pq3VeBpd57tTtwYJ6jPoCxA1vDGodbbPgPBtud86DPinSVB4eKLi4pnYP1vBU8Ak6AkV4SqkvQEo3bu6",
  "key20": "2u5zGSu6B58G9JG8uas89vtKNeRmteRsyg6YmPKZTmwr8aiG1J26FnjbvrojTMLpqRi5ES9oAbtobNK7MriaNWuC",
  "key21": "fCHFZKaVThUyBkvgDYvihmrhz4HXxPwBnSFHTs8t6awq166rqeBjhAmPx9r8kQercoHAESP2TVrboNyVuir3GfU",
  "key22": "5LrWjv6Kfyu42M4uiGywe6Z7LDiUDL8MGaRGGU39vtDFhZGKRAPRmxY5bnJKMBf8TAVMnn6Hu5jgVLvKRUd33puS",
  "key23": "24QVpiDKyMF2VY6LyLnbXruPcznxChbTyNcvJcRYUjyYxPPywHyedJsiLbY9Btffa1o3sAh7VPx5axxE4gfK42bt",
  "key24": "53PppawHCmXwXHWtpjy9wNRXU937uKhd7Nq2q4UqqRnD8mjgfG7DuKtbr27SmryJphuWa3iJqJRsk3yntcCNMcJ8",
  "key25": "2tjCQk59ZVXL21RNouoPpgK5EFaHACwnqZiafb6RgJLqKmbqPDkL7pJNKg8u7LgBvuAYyuxEe18U3XcUvNfNEoDW",
  "key26": "5tmqoi3QSvZYbaS6G2zYtNYAe41AMiFnXgu3pFKGjxZ3uYqjyesHTTpdx6eM4vsSxbSo2c2ucKBXLynCM4RgVm5M",
  "key27": "36vjm6yHZKv8RDddGbKiT1XQQbGvgkqaRfrtZLfpjEr8GJgnaef26XFCsutQdTCL3KDNRNxxCaLQRMKV1unq5ZsN",
  "key28": "4wHirQQHx57ggtdVeYiJ1x8zKUCz1PEcRz5jtdUkrCAHyQM5KHJssUD8EfZvDooA8xD93NZ2gNpuKHsQL1eAKcUd",
  "key29": "2hp477N75mJBKugjiQyEEFDaGBRURiEAhtCyMa8CQxnL1HUtEd8BeATMbBrZU2gNS5yQ1pFedUJcgns47TTVn81B",
  "key30": "2NJaRpundCaEquHavtHb9j5pVfsNXnuszzcvLJSaKPwbiKLQfPC8fqLoEMN4tLxfBeAgsfyQ9f66y1LwRGctucEr",
  "key31": "5oJny52tfdsEdY8E5XrzdqdCK7rVGiSG8JcLGG7TVHS6gaQEWE9YxcW3o3Kjtt5a7THvHWAYUaSUMWhtc8yt1sLe",
  "key32": "3WHCVhR38VsusdevfuAoxGsychwSLnVDJbCa35RcyjtsCvY7MGpudXwukCt3w36VPzp1rotbC5X21buTmKpZzLhp",
  "key33": "4NR4rtkduoa8LXkxqcRtACdoKZUGNjygrefiewAWDKmUER1yze2TDueXoRXR5SFHKVe3RpBsosCtigfrTv2LuWCj",
  "key34": "5QdhZ2j6our7WLWZQdYWE66BDreMfTVFnP3LX43UuK4DM3t9PjuD5VZaAGP6oCganjn3u3RR7AQjTBDNQszMCh2L",
  "key35": "5Zr9hodnForRZYTEzCybHeEsJMCSUMinbzxBbeokoU6V8j3FsFuo1e6Aj4HRUdZ1LJyB55EW4eWTXctiebherVGo",
  "key36": "4DjyBqgsTYZ2UkgifaMWVskdDTP8ymkp9ky7VMi3wbeXjnqn6NQ7vnQmjMyj2bCQaqnfgQFqnAZChEfhLinh1i2K",
  "key37": "2Dswr9qrSD9Q1pjVmCKSNUFPSYBHZW9vuyxQTBP8bXrzmfxHS3pmvs49v7WAgdrGwshmVe9wsF8v9V2n1QWqqHhm",
  "key38": "5uKKAZWDEVkT4TeT3Nf7ZXN57yaWDvoJKHtqXQSdno8gtyX5LmzdcDDszvyrgVeG82zjMRkqLx3h3hkxz1hLELv4",
  "key39": "4RnN4nDEA9er4eLor4qPdAx5qbmnW3M869fadLEWr7XyGPLpRJsYYRTUaQftX6GJifVz9sdTKpZxaHL7bxL2jKWE",
  "key40": "4jJR3SpW1SSemFVvw6UbLs5rnuAjHtnqQFpP1sg6YVbRq1Te4PHmCotfnAyHUHct3GzCGKUniVStUsj6aohjrHhq",
  "key41": "3NCi4MDE665GGddKzbn61v6wkTtE2XBAvvG8dzFkZx1JvZ4u1daj9yceXKWXJFyrVVJdqeQYrAUaThud9ix4MQyv",
  "key42": "2VVCcEXrsyKsktTjDcPTYvWJKw2oiWMdcVFFVxdGruVvnSgQ7bYEWwWAYyjA52LBq67SQ3AATEDJCsm92yfTd3FJ",
  "key43": "3EmEduuwM1ix8e9Czs5qpRafoYJWQk5Y2SDpnZ7r8sFjTrCwM6vLyR8qPNJzk2j2c4ZKrct5ChYquqHBgcosDN44"
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
