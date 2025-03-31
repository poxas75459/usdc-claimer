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
    "3hYHcnZsEf8QSTURBCFihLNUYotQUBvsS9juxkybn2LHGhWjY9RiYYQtWP9oas8rMYrFHChDUWhnRVp3BAesmXLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3FuKLoy8CMSx2rjDwGygPx2pmR4ZQeLMXfPbTowjNi5m8PJaYePDjp7M6UPriQstrtMm2TvuU68wcbSao9Pmrh",
  "key1": "3VzJfti44hByo6PUpYRszDTpzSRRxSvVbGTXNCajoSbe7LCAsB74cMcD8gMnDWJxHwSakyMhqUJa5p4Qab8cJATV",
  "key2": "3cFixX8X6jXjm5zgYg57wUEir2n6ayKZbipsWe9hJGRfWRdGei21ZFzeM6xMJ8G3STJcdHsFjY8Jj2ZRXM4k85Yc",
  "key3": "3CmQ4BvnnDV4Q2abKCQGTpNghceRCz35GTEwr6WcQj41o9DEBEDjGPynKUFQEcnPnNZ8coxhfEyH2dFMu8oN297o",
  "key4": "5Lq4wjLKsJ4AQ6f7K7EZABXUaoEGUFoJm3JXkd4XbSRtwXV6zQdJbD19AfBfUx6DXx1hnYnA1PE7kfqF2SusVmKn",
  "key5": "2ar2fkFwWmUaQtpUtheLp1dVVwvc4xLZARUPKLxwo1LBdFeZHbZ2Fqad98wF6cLonLfoK4LYw5hnK1fk7qsNAMcV",
  "key6": "4UKLPihviiCEGtXa7ZSifyseAHDChuzGddfhYwy1JdMc2kuMwCyx7g25gxehNwZ8kjpaAQm2dDwzvEL69MCXmKjU",
  "key7": "27iQCFvm3wQUc4xvN4WZnd2sqsgnvgBnx2SqbwSgJpwsDc8YN3LCMmyzsEn4gnnb5rXwSkaoR1Md5yrNEqhwJc7L",
  "key8": "3314Sb9N2AY1SwYKkfba6V6veNvNK1gYop2sPv4zZzJKKp9BnkW3Vp5jHPXS2YT8vaWj4CMC54tufE33oVaQ1atF",
  "key9": "yveUfwmG8Cur9BxLbUuSyxiq3ATXTUBJEhTSXkfGt4JbY6TSXAyaeqaXQxJqpJyoxuLXLakfEB36ZmZTM6jkx9u",
  "key10": "54QvqW6M2onuGDt312bbDHNeWeraJpEqkvKDLqzRpC53rXiwgMDBSGMiFCGkQYoweVf2WSNbnQ1f89D8v3mimBdU",
  "key11": "GgBdVHB7dCYDTWQSeGByVjoCTfroEmqyJjSYDYsKYLHQd5Y7zxZnS9CBBYKRcrTEcQJWhYofNKkc59tSd86K3Rs",
  "key12": "35ZUpGVVrdDykgS8LruKjokt727x9D63oyLye962sB5gxAQjbNDc8WRJTB1eFWRRURnHvhkyiJZSsKyHxqn6yXYi",
  "key13": "5Z29hvTRzW6shE3Hngay3NhSHBUUy32cJzYQb25YF6QNLZxiD31oARhoets98Fw7AbNt5niuH2YzyLf1kX1ZiZb4",
  "key14": "5RNAF1xEeG1KLYf2ySbNQoJZBv6zs68Ey7PkHZ7sJvZ9JQZ7tsyavMrs68ze7RxCBW21PmsuorU53WG4QYpytjhf",
  "key15": "4Hz4TtNQojoaCSFvkcZPCRfphmpF7ziNrLBdKc976a8HQdxi58VXG4fBvZUNn2n85jmnP3jvDQSCmdFrppo47zV8",
  "key16": "BNndX6RdWVZz9xgadf9UpBx4eTkduq1SiEAavWpJh8wdDsJ3TuEFycekEm87QGHLSqDm3qPoxtWbR6D6QcVm1uN",
  "key17": "4euLHRB4XxAZS3gGrK9JgitkGbkDnJWQYH35VMqunuxYGuTZQo3AwYbojLTJu4UUzt6wNvmXsAyuoEhXuV5EAe1E",
  "key18": "5X5LCwfzayNX6bnVzc4pkMGigTmv2s6iGmdwXfiFfKTRjv4vqJQTvHwZ9Q1vkirpf7mG1vRwkAzvR5SKBgAWiymP",
  "key19": "4E281MD1idVBrSgpRqMaLLfM617AmwsuRwGf31fpK6QRLhcQiNhfZmYzthRdTGPCbgsb21szzFzybX4H66Ss29nf",
  "key20": "2sJhrPYn5itn2ndiYsMCFhtE9wZwCgDR1i6EhRgcTVEPh7Kgp48tNeGBvszhZSni5pjreRJodhxPfycATdV2DyMJ",
  "key21": "213gL6N9RQrKiiyiFDmw8MK8ThxX6YuLAFjR9kNbMcmBPwroqRbZJRVAZk8ovE5RGUycAXm7yKNhB5gaqu8R7DVZ",
  "key22": "5MTvRxDZnTv8kVnk5CBRq9xp4u2sbGzPtyUfMBNRTfPVoLeKeA4cvibu1T1Lnpc41tCzw7yGCpHbBaz3cn1YoN9g",
  "key23": "3XFMhv2fGLWBqwYYKMr2xGDTN1athkAzvr82HuzUtJTQaiWXazeGZk7jSK84oRGMj7bzXNBN4JTieFY7AFCS2KKb",
  "key24": "61AvVT38tWCTn3Jkr17FqSM1sNHvsrZ2gdi2TiR8W56MHghQSte8A3SQLrSAzGZqcxBT1KEoj57rxdMCz2WUSpHJ",
  "key25": "4WzrXHMv9QxhRMVAKcAZYtm9zqrvnAo8fUsorhAhmCzbiR56TcC9CnWit1o2afu5mKDeMCUQ7TooGa4Nf9p189Vi",
  "key26": "623T9kF11fBo2sti5EmXyMBJ3KkvErtUp1rhvCRRXtR2F8Jgxy7kZBfSo9zEhkwsjFyX74t7sUEuLjhYrtzJ5HsQ",
  "key27": "x2yjVBwgrioNtHjNqjfR4EnpfP1YsZjpQC4Jzo7t2mfrBk1qYu1sQqhqyNL9UtsBzrNYVfsFbRf8RjLBPEWiugd",
  "key28": "PW84RpucFX8F8t6keYA8KrkQEP3y9Z2z9Gz8CX2qKRJ3PH1DX4gJ7TH2okMMQoZpXEyVvoM4DrQCwBpPs2WxK2i",
  "key29": "5ZnEgtj36mW4u2aJ3AKCHQBX1E8SjCeaFy2Zb2uNdzX9MiFWtZK4nprH78x78SNLvxtH8TK7EgQCcsboX4qzfyEn",
  "key30": "5scnPMNqwsAqys73QjPSsveusdJyRAKenTbY7edmYADV6TTduqRkJ4rKRRWD8SKcSi1uZ3BfTpUKUMQrAcFxQbXz",
  "key31": "2bryC1Vaep6rxbCb8sHCnfxnYczRQvMyYnzuohhY6kqEECpuWtzEfHgcDFgA5rdSXTHoekpy25oaLcHvDep91dcx",
  "key32": "4Pvffsxh3LzM6Vgs1daYxwVezct9on8mxxMwhDHcUnkHhW1wUanNGLUiWboBwjN6TnAeVsvX1k46afYpAcz6kykM",
  "key33": "xpFZUN5XQxfJiN8Jobcf6KLrF6fNHYsj7nb91YrgTUsNiQqiSyta1qUiWp3yLy8LEydEeLkxwa7nxjmSPx6X1we",
  "key34": "5GTfD3LcvnXQbdWuUte8BJpistR4ufNkP42k6wNKSzD1CYLkuxXai6MkG1uf37ksKjgCF6Lf3wyap72GPWdfN22Z",
  "key35": "7ouCknayTRbDKsLZ42umoTgcNAipNxRfYX95E9qoRe8geLHv7zF9RhrvArZtEgd8MRESjG7aGRMvFnvb1ibsEcH",
  "key36": "4bbYS22JQJRSSCQLiLYLwswXvT8Wn636MH6pUwy8zW6gSZjmUvKKaBsFWcUYMwVqr8pCy1BFGJUgcfp4v6YRQwee",
  "key37": "5fmHkyJXefVbyB9VTAidSXKJYf5aGHk4YYZVmsdQA7q1woHUtLHBzjjDJ1AkbLkus1UELituXuHoF1EwqE3pbYxN",
  "key38": "kNGVBAERXA2FMBNWCPPuyzcYLwYXmR4J4GypX84pGWYndke23rQWZnMasjWW6QMcRTca54Pw67tdzP5S5LYdPUd",
  "key39": "46vnAiVEyPgQ3BDQsGpdtjywRVPkzJVvV37pj19sRhBxXpasASbXFBXubAXF3PoURDqgZJejddMwhfih9h4swhii",
  "key40": "4egmJBrgmPLtKcq8TX7J62dTWJdiEz9DS47oN2usPbjkdrcctnUFwWdsL2X7vDJ9Hj6BD1E5FWM831ivUjiFMpEY",
  "key41": "4uzQD1yv74gtqdLQGKiq34yXCMNDStrLAVnF9JbKvFphayp3YyFgjmhoxjWKTW3DHw4EEhBqqyjVTPLUyEHvYeK1",
  "key42": "2LRQGD8a6D4pY7x5ZZ17oSA43mDYQiN3R4CKzN9w7G4jVobYTLFQkGmVgcCtWdbVNvqdNcfS8Q87bSZGjNDDGtFo",
  "key43": "5wNcGheX8UawE9Wcdo7Lm5wRKiqcsixHqwpzVx6rpQYGYMDkNW8YDE8wNu7nNGCz7VA4iTxJN4NGqkDejiwzQqBK",
  "key44": "2TM78YhJE1mf5mhsehAMVLSQCEuuWNiuhF4WuSZ9Nb8XMXB6TbTEmULV4cZ6AwnowwH9oxBs6rto3NZLEC1ddSXD"
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
