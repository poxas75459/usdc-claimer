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
    "2qfhehAEARRq1arF2aQGLxXWGzc4m73Ux4NMKLCjkswbumCr7GvmmNwGsYKqbSC4Z6gwnyw65fiUa1jGegd5LYDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5eNyusuoh6nfUpsndzM3WAj7jiBqMAo6wJLt77qpa16nx3vqVkDUqJ24jjyNbviUNETKJvwgJXo37MHiPfKcq4",
  "key1": "5dSPSGL1QxNqErbo8A5yCn2QrgfabexbykYRnScGsHav9VTpeceNVHeixevwaX48t66hRMT317yLBuMs7wRtGL4m",
  "key2": "jCrg2KUw9LUa4botDrNy4ZhtCvif8WBvejZJrLD6zkV54B3ybkfAbdq6v2CrEQLE7L2XWjo5FuQZHYVKPvxLcCk",
  "key3": "3ERd4myKwtngLR4xXJcC9vrmztST1rg1voMe1CWoMYXEstVGfnnvY3fJDxEUMwPfgULepT3xVM2ciJSFgcSEWH7v",
  "key4": "2cqd7HcnCFiQc8VNyqNibrnXHLdmy8jhzeCXC8VWBUaGFW31THdhMujkeJ5ABgN38Y5j2cuSBuPMm6ERLeFxCDdD",
  "key5": "2dtikEgW6VFHN4ZUr5yN8QWinK3uTKPqvnE3aTVMmF42RXpJPhCLGqYos2KiddHzgV4JcE4H1a8v43UAUQc9fUgz",
  "key6": "4WyzDrDm6HxXmMpbSnnp47WCaCR6R17zMNfRpTNaUswzX3wvGr2Sri1y6PDRf6dJogAu5G3aec7sqJwzpQsJoB18",
  "key7": "2KGs7X9zPe2CAm7XhCfaRPtbeYZKktf534JnkAyjZRYTaPKj75fu3HQsR6SdySwpJEPdm3HigyqFqPtkcYSuQLWR",
  "key8": "4PxpTPHnYPD7GHSk1UhPCHjM3P3qiFV9s6sZ2JVrs8tfoMPoYJvtuoY1MCa1C3b4nKPCg8qb9iXGeGsAvBs7veW7",
  "key9": "5iU3mDaSHcEEYvPD2tFrZsSNLyfjs3TyK7rpQePzP5hUTqdYyjYXQvsufB8fkwYUxmzwhYvCMH2UNqggJbZXnbku",
  "key10": "52x58zhxwCBFdE6AH2ZNpNrK1NGp7uZ6ZwZ81XQEfm3rGZqiQ5qkZYRwQwJuKKg48cyazPcNjCQBycs7MS8CPEcN",
  "key11": "2JLDwDwGgp6cBbx1jQZg5V5KpqrWQXhg8SuHfH8X5fhrLd6EBRC1PVYQjqd88fsgrQssVEKFnBVQVdRBZ4yVbH1A",
  "key12": "7Fp1xhQtg3xQzkQuVzoreGmGiuiyr9Ht4jSYo5ZSbNkPUuGaBWQpXPiPuXg8TZQxhFLhPnGQXnGCZyg9rBYYBM5",
  "key13": "5VU7zGxVKcib8HZ18YpaWQW8xj3yDnjfiVwyTiLoGupvp8pTUWHRqnAuEPMmwJLEdoa7UwhMSMFjgYgoQfQyd8F7",
  "key14": "5ApB3Ekh1cSuPA3rKzb3VP5wLb1fquCTouNBUd3Z4FzCM9odAQnn4rWe54EfSDbaJqXkTNi7nbvrimdisss8KPu2",
  "key15": "499bBQLmKyZsxVwyaVbJycPAar41Edirrd2qjLmzRN3BHXYXhgthJ2QQntzVDyrQQ6gSBMUrF7YHS5Pb8qFLUFsj",
  "key16": "5FSxkRyoMDXSKcif2dywr2AacoKJhNYcSLxWYurk31BGdxedeHi2ehE9xHhigKQ14wETeReGngcDrz4YQRM87fy3",
  "key17": "4Uh8GnTYZNyeMmdnEXFcYudAvc6396yoUzzDj6Tr2ioF2bTnj5HFxjFegpKDFPsyQwimANiymP6HkCGehjrSEPnS",
  "key18": "43eBgaQSgh59gcasrXeT3AmfdxVKAbAvro9hf6prUY2nPQgJakGYjFGAyzmrCEMb7on21MdqXUZScKqGS1HcfLLB",
  "key19": "5yeCRCeaCk9voHz8oAw3fK86vHwa9RSv59vxdAxS4s7R68CmKrmiEYMQAZDqBr2FSMukBKYziQb5Wma4feE11VmR",
  "key20": "5DG9NBtjVHEavoaxnwoghvEzcoQHxAM1WzWQUy8qxivUSx2edzWen5KPukPbj74eJGpbhrRksf5bJvPTE9dkNzWq",
  "key21": "4SP7TZ7b7NSpQRBXq9AMuAWaGesNUvt9PF1SBKm7sDVjJX19V88oeufD8g4YknuT8dyoTc3J59xsUazCDCcwvDVL",
  "key22": "4kRa33pL8dCX2GU7GdeN6u9H56WznGZBjvVFNwZt1hDVYHvuS9A3RcoL4SKHKksLCBN4xQgpGdCTKknWX5nHKZb5",
  "key23": "p7bCUUvJQr45MhgmoFLXHMizSBLrJWN7c42MNJ22esZ5DxMxrax5jKP1kHMY26to4DFQvRUuEqW6YGqm3sXfqEx",
  "key24": "2MNrBjCCUQDGacW3b6ubDW3wSX6p3cWWSsZUEo84jftTfPKnYwbtcLTe2mzf2ZNYgQRZ8rijr6FyeYgMrrKa5YYh",
  "key25": "xC1n2oeYy4AWVh4zYng8zcpZFFMDBJMiqLsHKrB1YHvtBgx9CjdRXU3tkj4o8EPyYJmVK88vbZJaEosm33oS48e",
  "key26": "XHekcZ7JGBxTbrz8u9uWC9MTTJQDXXAWCVzknzdgv8jH9rSNZAztWSUfpmGJdF2Dq6bdF1j58FL7zj8Yrw6jAdk",
  "key27": "KgdkjuAqHgZGGzQU3xqZ3vwUzB843h3d9ep1Z4jU2NYumbmVbwChCjC2FF4RdRagAVrzAU938Z8UjExXmDdWhtU",
  "key28": "2m1Q7sdGDZ4JT5j8gZfP7wDnZVvE95ros4y1qtbm5C9c6kF7xVyXtkLmkv8oBsHLw4Qsyks1wEoYJAVW4xi7neKA",
  "key29": "3PThkqfXpkMuGmio5advpoZGZUtWonKdAQ5zqbWFbViEjk8mvwrsssZaeJX1LBFN21MqiRdLTNb9dseAgb7U54aY",
  "key30": "65JrtXqFMGG5anJhYFDrgUiqrVBP6VxdUTxerRfgQyN6BLzXaQSyGG48MpjHDvnfr39mzAvquv7NsrTqtUzDFA3E",
  "key31": "5jMY88Gvp8PpKx5B6ZvkJ48dn7RWHLrX6ar28hCP6sp8bRbJRrennPV8CjAaNWhZhGQFeQHGFvMPT81Uefi2DBPy",
  "key32": "ueyuovputhv9VgY8QaTeuteyP1JT8oMeGvGfUAAnJE36UTGATWHaYQ7CqhobMYTwYq6SSGKcy9gzuh1mXfda9E2",
  "key33": "5JLGB26UEEcbV3VxsjqnaczCpUbDAoaWwA4wYbDLYvpaDcSegBJZA96XP9kPin3VYLKTjBkb6o85USYAvydcENNQ",
  "key34": "3hZYKSfhJV6KDSn3t4ARXz8opxdCk1Wsn2LuGaMDNzp84uMnERiX4qFUxPrTHHoHnwbaF1HLMbDLpPDrjzC2dv1j",
  "key35": "3RiDW4mxvzhnf5T25kfpFrNDHdV1mHfRg2S8yqM861gangZyjF6jfRFHucAF2iWvLkjvoRK7PNpyBbeReLYN6PTg",
  "key36": "bvJtHA3VncN2KMQfu24jXufZKmi65WVURiRHdFtd3d5XrY3tp5GrGLZAKnqAzMj5J8HgC4CHJ37nzsYPv6ZYuYi",
  "key37": "63wpMp4MgdwTigGRxjPn5fiLzq94DX4FoV62eJ5FG8ykqXKJSbzr3GvFFhBBqaJ9LxGtSY8o3UtLFDCeWP7BwsTW",
  "key38": "3ZgW2SfKaS9tspyqvWKeMWvvje4TfiXyjBHGSvioR3xBJ3onh8p1ZTX6dw8T6sm6CMzsKk7UVgrpcQMLTRwicCJW",
  "key39": "2zknwoduWoxwRebebYmzMVUdNqzaaecqQVzKBFXxtJgEMe26zNGiCDQYmBPJ2N7LPHfSVQEyASGA5BKbXnW4v8WZ",
  "key40": "37S4r7kS1DmPzmrp1LDUdz7oXJ26vTQMSsNasdgW3sqGt12CZ1nBNBErDB9qZzrhutNfnQoWq5cD5ioqA3N76GtD",
  "key41": "58Rs9Ncbk1RCuUanim25wUQrTRWXxWvhhh53wYpiH2fgod6EtGSuVp4qqUi2TC9j9nJyxTD8CaUbqGuLt7TBfZ35",
  "key42": "2m5yRExmSbVAbDB6qLNJVGrMogJx57nGUNfg3Xkp4kFnJ45BChp1tu6hCR8RTuePmmLQPwqvSk5rcykVo9uSB1YV",
  "key43": "34jSfMv7wzRn8dpMPxZshg3FnrPNCXAWiUfXpZpf1WqxYaDf6bbjay76DP4FK4MMd7YqNL47NGTmLKs8fesNRt3M"
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
