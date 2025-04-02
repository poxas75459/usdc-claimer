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
    "gExU3pgyBaRYdBAgFeCV8N86eiqhTmrBJRWfrvWeakYjj6jVWnv444WS8arYfjFXLFNEHNdY3XEdfuxBwKdKQSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DP1YUSEqbkXzdVec8ny11yW33CR6NbW2ZjEtNrAi5q7U3ftuDaXHQjVMeKGDHYWytWpueWrjw9ewKHLZEdYJtd",
  "key1": "3ZLxErZBP91ybAbe4vDe8czn9xnJRTZhnRYfKPBBZSxhPG7uhTAWu4WhySz4Na2PFhu3BaM3q3ti5rHU24KvcqUk",
  "key2": "4v95MkavDvhtRmnKTPobh5YBWjYpg4eh3X8KJSFiVzdsDLb6EEzrmzrRyKFF2hTco89sKVcXGaycKeytyNU9pwih",
  "key3": "5SkBeN9cMbTtUodS6rcGFDDK86iyXXK8AatToxmdy6Ni3gbrjEUmLHifVE8jxSUQKwPdGDdNA9b5rE4hbkR7cnkq",
  "key4": "3bpE8KfXwRaqRyrR4oaGZsHreXh8cczD1Y25wskttm6DWGWo7gWCkozqEvsL1h4ztFfMjZe2ti6kYZuuGGZigHE3",
  "key5": "8NhFehEkjpFkV6MugcSBLRPpy2s9Gcf9oGze41Xi6hndS3C4iMZ8enVJ4d3yduLDK4EyC5y8ScMhZFaYhqAavzb",
  "key6": "2GQq46nuYcLELwj36Xy5L2EgA2xfZkKa8Cy4AjAHrDVj5fntSGEmjqtGvoMwZBryFUqXexShpgQh1fTBki2vHBMu",
  "key7": "5CFKH22nwVYd8vD3aNEaLDpAL1ZB5VgdLEy1dHWiNSqAKqPZnzRuYgcyDw2KWqjcTtkcMWRm59xqgSBd4KD79sDn",
  "key8": "5zADMke4dgLPEF6Mji51Cz7T2jxs8dYS8dPk5T2j6zvx1aCqjZytxJs6HWqpzEGoptW6vZbxrsrtLwzpvmTPJJAk",
  "key9": "4TD6eKdrDtwetmh2kck2e1dgjK1BinZ7JemGravcax3WjyXEBaKdXQJTPNV5S84wC4RxGC9D4s1dRiZP2xHwkpkW",
  "key10": "576dbTnFdxQ2xwJd2GKtqcdGFsGLi88aN216A3ncL3CaSGepT7BYi5ik4DR9mAtxCLgmkPSbge1KE5avk5fJSXTr",
  "key11": "2cb1QnsTjNQX5rGtAPbhr7a36Zy5CgA5xeydrwrL3AJUawxuotQEC3WgfWMGhgeL9SFhL9KnXSvdMLUvvundzZMX",
  "key12": "4R5yKQ9iVrDHmEi6DRKgQGXRNRkT5CVspYxp2UZra1YnYqY7SD16uM4rPLnsKY4e21o9FQRxfjYauKKS527qWVx8",
  "key13": "28VEb4BwRxizcriopwwassU7qVPYmjjGJhzwMgGqsGruymo3UnDfbMMQmzd83ybTfFaKibXVNppNWXByu72ukAev",
  "key14": "iK3fJdjNsCyCSL6pJGHF9tkooi5zp1rHJAbVFciGo5DimBtaoK4NRcFxsPn3aG2vuUhJevPWbiGSGRDsL8rpZ97",
  "key15": "5fUGXWwLsXVhPC2aFwoHWmMpJwBCpPbr7QmxL1HCUdwVoVrNNjZtVi6sCW816ZfJ1VFPCQZmpz9qbsd1aor7RSjc",
  "key16": "4dMvrDzueBApTWYf7jTqY8Kz9ccNsKkViwMyP7EumPR484pcEi92KLbSdyHQaPFgxgo4t9BtE1ZPa7UcS22WXeE4",
  "key17": "5rKJ5g6QjfT3EX27uaXa3gVDtZaPrAGX98EeCYB3UiexgwSiZ5rSedXuXKJPy2a2EDNwZGK1qVsoXTLWibvjkKTT",
  "key18": "3CnaLayhRHy4uH4EfWu7K5yNpDzSJrmwV61rTUQ2eKf7kRQ9qL9hYdTWLNz6SUExzqapWSNiGJgxep8noSVEivvr",
  "key19": "2mPENoSAdiBPepxgteKVWoM7n9RzUNowDjdwZbLWn57hhPPZNUMv3cYUdCzaY7xUgjRYvEQ4Uddr2hfom4whc5o",
  "key20": "3Ng7FJ74FS4UQptnpBh5MMxdo2dcsuPNVWE3diXTE491aUS4GnGCWr4qfm81swibCorqzq2wLKDYrJcSCCHnVWfD",
  "key21": "wFAQ1PsQqaSBNSXq2NWc7BhR3UakFq963tKFNj8RJJSA3rbKMErbdAQSDstRA9ghrBRZjtxnkZdETCVN9NKSihS",
  "key22": "3BxcidB12CUPuv2RSouiWScRAdrCU1joVow5Lde999wmjV9wTQVcW3P81s5123e7rjdZPxCbjX3tj3pKGgktbaYD",
  "key23": "3Mr1DgaLtZNaYpUscrPMaWk6Rf3vRnSnBVMefPp8FWsMztstzzUHbJNdkzeszGYk3zZqyUsUqn9qKtEY4PxZ6C2j",
  "key24": "58YRDsZBXBkomriHCSvn2uJ8EBHH7m8uPqMunjSSewY2Qs7RtFfGzab6kbeiPLt3N3a1CKhJdTaihKdJyAogfKgQ",
  "key25": "9oi46ntj3o63Gjx4u4NxUuDAEheZRRDssm6jVxqNCPBW3T38zyC333WotALGh42eU244PoS6NBsrwiVym59naBs",
  "key26": "27NcqYJTamBJMKFRz2rBxBQizRXncuN8Mv1TvSDFRnocP43swfjc2xoVpTKT2tJwdKEGD89kdPjwXjDHqsac6PQG",
  "key27": "v6h2Pzn2LMAcLnbeXr74c4yjqeauwzfYapGkqv5rTpEuBBeDJR5xqszEVwpKWCP8GEFT2xZJCnZLELSAFAxWv3B",
  "key28": "UL3352zYZ5w8y4BfQmigGUxcFmVoNYVU1GDMZsqVkSviU7KGbyPAPnapok5YkYCBPgv4L451o7YkTkwbySLNueh",
  "key29": "2h2aK9MJStvKJiCGdHsrgBTYpDhrJDbMskw6yznS7RqxgQKnybbjpQ5eH6XFaNiVH66noBAiCy2owduDENYWQHgA"
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
