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
    "4furJSVpPKjYoxM878YdQDixssBiGboFgrD6EEekgG4jtunpZcuBbXLXuxJhzzmoPMF5ftWvaFxmFXhVoy7ut3Em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v97zBAAFvitfXmLCDmQCTFW5ohd54Asm2dYhHvNqs8X9YnncHD2aiWRTELREkYDbiPj5V7zWyAntumpxowEvyQ4",
  "key1": "FDku6W2mGZHqNzf1CavJTBT2TAYy8oPLchpkUVmjjvE9otvceCGXNTaxM3TtvoAhYsUwobphjAhLDcTB6TiPKRk",
  "key2": "2dn3qspRzD8xG73k23VVx9VjXcYRLgC5fCxYTAgiH6gWSrYb3jm5tj1KDy5ZAoqgx3CTePkPHkKkQbJGY7FSzv9d",
  "key3": "2fUEqEgmUb7XkZGaePUyomZvbBj6CKvwkQAZMj9QQprkXz4YXSypdPbePP3cJstkfzMdVR5otzfY4oRhnpbnCV6Y",
  "key4": "5aDzuHWNPsCFSQLyNpSDyfeJ39Sp5QCmFiecdfKXMGD3ikyPAJfrUbPotqBk4vbjtosPy1wxuuVh8N1WgaL3q4vc",
  "key5": "5S99WqVEq49afDMQ74uAYjA3Nd6j1mwyHbkxs8bhRWKeRhnkjKS9u3Zvz18kBitt8juJhyY9EsrDVVgyfNcmk6EH",
  "key6": "5FHvnEgDRRfFW8uUjWxBQPmMzENuBgNzhGB9ePtFJkZsabzoZC1E9s8nEjLgeZJ3JgvDXbmy5Xf8yEXFvjQwGDDK",
  "key7": "SgxZmcLxi7uM4uYE3HUerJL4ziFC3UGsKKGUJe2fNTDmEswjT9FziDvy9v6vZqZyAxfV4JZthv5nSgvacB6J5CF",
  "key8": "5UvTGr1yFi9JyqBeC2GoPDkDZkgJ2h1Ln3GvqKiFzsF9yJk6jspL6GNchz6CNMAsmScCjQRW8b542rRLxWfWBFN2",
  "key9": "3NhFXUpAkofj412CQZfddD33Bvj6xeFtViddQo9akaSbJNPKapeK5DWNEv7R9geRZfrNocDnRrymCWzQxnHHtfyp",
  "key10": "4QbbMEhEPXfPyLM5e5T8u3bvbjdJCH2MBUnt4hgFdobnqxvf81MRfx8Srx4PhVSdQshUK3CC7G4tadrX6LicFDhQ",
  "key11": "3EybKS94DR3fA3kJYMp19sd78toiwqJQfVZN4Mjcj18K3LL27Dx8QuFJ5RHjDd9GPHyuSp6EH48tCr1T3NW44sgk",
  "key12": "3LpJ5XcZGxpJP9wBM2igH6S6UPnc12x6EzeVNkF1LacVhQ7UGZs9yZU4YpN14Vun292iZXnZXT775uE99sEvSP8H",
  "key13": "9DMY9GV276w9dz8B5hTfo6XGnCjeHQ5z872wTdY6AVT5hErRnVGBCXWRvdU1PfSA4QrWa2TKkZf5oNJL3cqm8pd",
  "key14": "4muQ5yX5ukzMyPfryfNamdTtdZ5mQYx4E2KX6jVtG8F6ghRsG5rm89E3eGr9bge2CyHW61FwgATBetyvaP6fVAf4",
  "key15": "3JMKd2KRbY6KeWfmNoXhoC5Jp94FeqCVfM3Wsf7YaDXVxawSUgXDJXDNu2Gs5hWTvyD9DzNC1EdNhtq8mEN7kDyt",
  "key16": "54VdF2jxC43rLHANex22SQob5fYMsLNeppscJ3StEnQXWBVae3NP78aNNuoNtw1nYAhvD9SpqiU9qx2q5WZucZy4",
  "key17": "3S4yKTKERtzm3N25s46f3uy77vgiiM3VmDeqWciS89wUBE4fLWkKwHsB5MMcxpoq5ewycju8dvAjNKxThDeAZofq",
  "key18": "4Y3umi3fEJJtCdmuU96MqgZaUaoCb7z4HT1duTwRQfxs5rrGHLktiZBMn44T2jzeuVus9LT28i9rh23Kmf8d39RW",
  "key19": "5hZacSvFyCWC9awG2FGPDvGS7yn4AT6DDUm4J3vHXHaPWdarnwvcA4sEHah6SXJhEwhvWvjKqhK1fnXoKFyPT8Ct",
  "key20": "4euqzPuFH5JyxeFPUWaM5LM7ses1zqSCYYotksi6YUSmuKVJoPDPbzBL3K2E15fffKy8DHmpH2WCHLV9UmrjALEC",
  "key21": "3sbBhKZJPEcsHr1xeuy9PjseHdDtct37SvQwwMG18PaS4FkVSD94Wu2WUG1nyhTu8U3zyEZXvQVtnNpYwrvdKUjz",
  "key22": "28cAbsvACRGe9z3Lm2vkeVzV8c2vaio4Cho64Z4f3By4K437FFqFoBq8T3Xfa6fgDfXmD9XpzcE97gE3byapaDmj",
  "key23": "5TCNstt5YKfQUJvNR47iMRhRFDUEWCzfmUDj6ySiLQrWxyXDPCEYPDL1ZUQQYH2eszmHgC4Z4pEXUM1FoCV25Lnh",
  "key24": "21zMKHhF4LQCHXy3npjEzX8MmUrqEn9fhNZC3Gh7ph5aYF2UZdsmigJHLXtZYWN9jSNnrVPtbsbWSRw646RJEpkz",
  "key25": "3n6wr2VhJzb3LvWFckQbwtZWRZUydqWJn2xApyG8TchDjPW6VMLUf2N18a7paDVYCgz1oageqjhWdPc3JK3w242Q",
  "key26": "67jjyLGoHGWbtx8rEbUKGCMR9jVH2e4AeKpGDNBhJJ9sF1c2xY1ysDYUw5rNzw2RhMDK4tovaraArierUKYnmdBv",
  "key27": "4dbcawkJUKfvoMgdr2c3Es2b6PLmybP1uXnW6xNdeQMcRMBT8paWG359qBJ7rXp85Xp5q9shUk36wSHURjWnGAFS",
  "key28": "44Q8ozHCCEYwFTGdoo5QczPojGJZg8sqLsZ4QyRZvN2wZCm5fjVwGXDAVnJTB3qyr6UXtTBJinGGNM19rLkEcWVX",
  "key29": "3ZciGmaE92qPDYt75UfJZxM6ghBFHouxEMmWzvvnVvEC4zSU7bHK6y8an63wz82Ne7xfUuuLkMmWckyvawANx4r8",
  "key30": "5pksPMYd3sDK7pxpnzfZkRWNbdLT2UGm7heyS5HJLrEX9maVfyRTn4wApTiKRz6ypSqjDPkPPRMZZNYBDpUvwVFx",
  "key31": "66h1h5zzuBbAwGnfaR89Xgv1ZEoDjsX5Mebas8AnR9oa3BWC2TjgcqAp2CZ1P87me8r63ofdrZe6zNX41qKiJTRr",
  "key32": "4QhuU63csPLzJDUmn4UVuzi3VS5js4F8sGiRZ6Ea6bEBrGEGP16TKk4u4aCGPGHYAyeE4o3SPrAtMKDRNtQGP734",
  "key33": "2uNTe6Q6eUWZViiT9cTd6m2apBt58FC2hQyDnkQgSRBAqaFcQBaqpAqvHpiaSSaeCpiWtFbkU6VK3Eqr6ZEpokXB",
  "key34": "326QhCi4XJUHgrCBPLmBopFxumTUpgTPSScWV6iKyyMxAdic2v7fqbjcYo5chu5qbDFhdNGw4zsfBWwyZLKaxpfu",
  "key35": "38s7YRfNrzyoiESvTyVFLFE7mWejTyJC359dw13g6L73EqTG5A1QV4i2wT9PsMWo1dACmG23dy1Mdn36AZUynrv1",
  "key36": "3cjcmZYmYLb1cWKA4oPhuBoxkBCFTKyKRN4WmCdRhecwK6n4G1LvdjxqKBVKgCMZqxUxxfy9YCL6WoWcCK1DQnCA",
  "key37": "duMtoZRmmJCaovwd4fM2ZWXAQSfM76j8dxJtzQoCFnd8Jawo7bWAtMgeVxcGjQjwAFw6ZSturpg9pTDfZJUVkcX",
  "key38": "qaUFJ5cPDW88K5jBp2jyUV1pLdKZV5iydFk9dDvnhNA7MHmS17KGYuxx8JkwpND2zWVAkCmjnzQiPUx1Tctg5Zb",
  "key39": "5uLHTULQ5xHQ1JYqFS6WMwVNb5DQA8vmeUEbCjkt8vCuqgEBNicLSuJdwdc4Pk7jkSfyrp2ATyzdZJMV9v2s23ju",
  "key40": "3fBZFPv4B7Yg3xwQvcAVvR98PSUGSft8P647sQEwkcYZggpMg4FTqKfat8ARCUD6G9YCqY9HdMbeCuVJxZ24jkDt",
  "key41": "2TE6KvW7SEMGiPd2n8MoDaNtN4qUGfvLEzrZFDZH2DzJuW4MtxgdJNC2Coh8kAeb2VYM1EWqva2JyH5US7SGSdjF",
  "key42": "32H5HMkSXFHi7UWKG4ygz5GyBUNMhCSBz8rWXSGEMUKSspwvSaKcLpmDjfzLPJXJNQzHFKafkJypfecF5kFNuV8H",
  "key43": "287MiKWSuVaQNfX7QR4zEKbezmTqhCQMoAE2b3uREiggkKJ9LSgo5uD8d8iWQcGvdbeDoPQG1C2L7J6BuyAKtk9U",
  "key44": "5CimkZ3TT87u6JaH2Z6NakWAhAKCoP7Wss6Hrmgq64budR1HhUwpJVXkjwMGXthjP6yYMRFGyEvrvxTU1QW3q9wx",
  "key45": "3Zbwe4vwTUQkRHfQYGMG3n8kH3j2MHPWcKpKixGxh97cfkwEuPotUpAQnJNJX6unYFHtrc1oZWaoWi3oFnT7LCV4"
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
