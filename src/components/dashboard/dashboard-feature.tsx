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
    "2mpfXzb7idbf9qaTQNM32i25BbRyhhdKtswSmso3NxcvBaNHXGYcdSMWBPs8tHb6ieMi2e8A2TtFWUcfXZ7Hf6eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ips2YE1YwDrpNqKwYFR4JCyQWTAu4vGeNdv1onFsJJrYVEP38cvFFmDkSYoAQeeNd6cb3GuDHkd9xX16mCDKznz",
  "key1": "4czzERPZM4kzniVJSPCtyehKdi2VtMSAyR9gLdW3hhcBr2Cowa3aEqACGrYRspxwo33uLUvF5UAYcjNJZYf3vSUq",
  "key2": "641zWZAiop1UQQZ8fgE3oChghxG2qRpcHndYecPzXjNMbFYFJ3C1RfPZAgCxCVWu6wQq45GRtpmk7UcYmKDy49Ve",
  "key3": "5vxrHCUp3jjqUqf6y6SRNz9XWymfZ9u9PnKzo57QbCnZ7Vmso77mx8esK8EQ2898hjKd3xP1tGzaXi5WbAKisouZ",
  "key4": "5yufdESuVoTcbMeyNUHE225qYgdedvSXEyPwRc9zRdRx9S9rPjh4f7fJHinmUKZwkGEeViSmnNAzYbMRGEC2Yi7L",
  "key5": "2WhUvYdw8tXrumVa9PAjkAyFcpjKNBqpPB9sFBHjVjQg3Nc4P3c3TAkPdkndMfaEAhocSqTdDA28ucDPKVgkNAvY",
  "key6": "5vK88AsnVM4vX7DAf2hDjXpNScFYgcJeQ1KXQQf95a14q8prpfo5tnxUwXnYe4CwLV8VechZDBUwvdvEV1dcSiFh",
  "key7": "5N2uXGBfnAKMXZVmtR9fiH1ojTe9hAiQh26wXAFrqiraq7fH4UrXP5JSVY7CktG7cAX46HJaGDkpysaG2q5RnqF",
  "key8": "4taYsrKBcYpRJ6dGTV5U9cog58zrCPdEk4X4rGqxgFCbRgPSa91KPHyyKiB3zNScK3UGUAEpbYUjp19FAHtqecV7",
  "key9": "2FKCMakxvnunpG7J9uQ377J9BAteoSbU7gnAeLp8TGBXnv63saWQmVHEw1jzL6xenzpV8Kyn8qnmFnU4sQDzPsUo",
  "key10": "koG2VNAWZsVBfXYoWdJVtqAxKAYe9yp4N4m6LNH5CFnAUvZsvYZFxvVL7QofuFVm5SqjnMj1YxMJQUXtSAVcXKj",
  "key11": "B5mb9FMdxv7G3aAEamPBZiwBK8fcPhMwfWrJTpz4BZrBrHYtzt81Vs5BP8iA7ji12WzKK6hSuFhDNKPXgGcUhLz",
  "key12": "2UZbzPnPFCK9WFaeAPeMEXK2NGkaiVjho5MmcGrVmMzCP56VeCqyN5UKYn3QBt7fxtuDYkdzdJam5qcXkexR29zD",
  "key13": "42XfS8z2D2oUsh2yqcrkUyFb5eR9pFXhdxUt7aJe15trrCqA3dXJK6GtMd6aCyUVMxicseTqgJhWYrLjP83rqajE",
  "key14": "3fLZavckZXK3kSZtr3Q2fpyessZaEFukgiBr27zxw1CG4J49U5gCrbT9aiwMbz7AuW5ZnmANYaRoeicZMa4HijCT",
  "key15": "drX6z1uAyhUiRJr2zJzxkjMynGLR85cQeLYVGBbYnSTuh2SDdLaevT3QXxgyD2WYYwhtPvuGbnkPt2K7SceQemD",
  "key16": "3FibppEjLe4TZVwRAc5cVJQ2AK8zhzfdx5xc2o6oC3mGfJLHSfQJmmtHVPHaNpmcNFZAJPUmctC7WT3Nu5KgBVBi",
  "key17": "3aMFep84Q6tUPnobhntivuREZgV3hB7yiwfWRvk63CW5GZEpiy9QumKwySXkf6MVciUndAgPrPdTohpKXicsgjV7",
  "key18": "3Xbo5gSpnUoVoEGz2sobaKjGCwWBtm6o1XHdjkZNadkf681wTfb9xKiVxSSH6FjiPjxMKtEmngpoX4tbMb4JsZaM",
  "key19": "9yBfbALXgStemQzHcMQM9V1xcHAbsdwY4Ev6TiXqdsgk2wbuGtsXbBJtojFTP4Gaw53LYheE3XvdPXUQBjbfSbN",
  "key20": "vKzy2ybmNLtnEXVJeAPDc95bViuZ3DnpgkUvsgKUabih4Uusf5jbCEG3coEiCwF4stUWQgpr2UC5imWVF3e47bT",
  "key21": "5V9ncdYdfKDnXaZTHT34X6RVHwwvsFNf3TF64Ux2TzmAmRwtg9e7cWD2UCTmCWMXwinuBMNnrhJNqMu9trZK4p7C",
  "key22": "4mDAEXJpqGgmriWk1UHFFcFNBcvUfHwmJXsqjsbhAVL8zTQGQYpw5ZmBsRQ2jiDLzapTXEVxWEsiexycEJpV69tX",
  "key23": "3JtLu8z4Jpc7NACv8aZ8tyZMA5Lw3HRAn1MoSfcPK6GUGewjLWqC2RbftyuyJppZS3S2fxFxrWHxQsEN3qMPRbY4",
  "key24": "4Sii5YKFbWLEa5eXtM3QtH7s41ePAzz3x6nwFsG2WTgLEFr5NF6EERSvmr6SyFmRWVBSn12TSiRtotQpoxMvpKzf",
  "key25": "N9bgS514QUgCn7SbXZmANVKGrbkQK5vyFSCnaSmDNrBVh9JENVbeBWcNLk1wLaegkXWZfQ9XGxd6VSyPmEPQCYW",
  "key26": "5epbyyKpxfaCP43GrSaAzVPauuJTSK93TJFd8YUyte6N47gvgYsP8SeLCHwWD7pziWgHqVDyuqPhc7Yk6cf3HC8X",
  "key27": "ehM7jUEmXQPeiFLJVZpyqfiWRmXFvjDqisjg9nWkk9ZyE4JnsL8SaEWSwQLWvYdgnKXQnzyQAv3HxyfKHz6QmjL",
  "key28": "626RPUPJ2GGoKhPCMY6nTuRtTcqzFZbiCiACwbCMx7FYzjCPoHkZdpCx4iYywnQJxhDVok81jQvYzZBeBHoLaB3m",
  "key29": "4ZvMR156fA12t2SCmz9vBExAigk3S6LsJeHiNdumQCMY6hWm5zavo7j7Y6fFidvn5kTEoPbu4QA7riAVz3NeD75A",
  "key30": "48gWNo2uZhpAViznraC4fX1vf6tps9EFwzZQmZg6j8ytZFSGrKYMUczfYoUWULYaRmSfgAEeLpehJnBt1XFsFQCy"
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
