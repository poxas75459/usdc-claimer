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
    "NYV6tCypCNaAwhLdBmn2vYzy7EBm6StDuVdGKbv2xisi6ucp9BvDRpZ6oMq8dCNcRsND7fz85h3Um51XwAS3jPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKcuY7HXze7K4MRvMXsLCFVSwj2KVT7XMMX5EDzELovweStsECxZuJiqXdatmHTBzvbRsmpTqNaTHQzQrWXuvRg",
  "key1": "3ra48FXp99nxeXtf9m6b85Mh9tQPfY9sza6KGzHWqoyoVwBokfQy5LpEeJ52uEb9p3HBF69qFCrhFingkxhmDniG",
  "key2": "PYmVEFhnK4aetSkHckrbr3Zs6Vs3w5DUFyzLpHBjPgeerpoG3hLg9zThcR7w6TEvaMUj7Nq3559cytQwFpCFq6d",
  "key3": "29EGXxuL375przrZD2qPnPwQszgTKqxzqdjqmshuKm36HgGVJmgemncse3wu1rwJJo4vgpwZzHu1a7yg4jwKZwJN",
  "key4": "2sQm7HP54J6vz9XKdEws8KCPgWTzWXaDgMmBZVAiA7FDo9V3FA54ihgaKACFBYCj2otuqj2sftdjBc5wUydeqwb2",
  "key5": "KweBZunThZrRFZsJ1z1rZy5i3HmoCQijTRBW2pXLtjLoEvfUt6FwnEfuo1JHvwj2aTFBRDXFuojDGbM8Tx1K6VB",
  "key6": "2WvdhEfczkBprUudaGqoGuN8cqcxDEJ2FJ8cqmK1eiHCZJTgCuUeqZRFViJKFcqa5BbwSqgLwvBPj6rTncHbm3LU",
  "key7": "3syZvXoNMKQ28G84vpwcHrYNVELQhmE8VQeruiF4H9ghhqfQM8BpzHg5Ly8PBESwjTWSwveuu8NodHXjNuQGA8Yz",
  "key8": "3FjJ418sk7o5wzaWFKRn6RkLg5XJraVuxPzgzsUgZbK7WaNT9miQCmQJZudJjfM4avrgwFH44FnSE5KuzTQwDKQ4",
  "key9": "4kBEwhB1ZT8bW3w8Vy75pumNoQ5JjZKyDFESUqVPAt9cPdZBbyCKjMgA8VbxKQmdfFavV289s8ErZ9XVox48xGCv",
  "key10": "4zG6wiT2pMrLcaURSfxLnnnQYyz2SqYry9LD5je8yMG7jxyLYRot24YA3wtAwVnZ9rduUdNtG4aYaBagso4dsLVf",
  "key11": "guNZio1FLv3NnGiscthYCp4XymAG3rjxUKa7TvDnJkyJtCbr33kKRhRPuJSexVyPo5N6dWZUCYPECnsWXKGFiyU",
  "key12": "4GMZY8e8NGK9yHq2jqfJFSbawxh1NPrzyZZnHgmu1weoiLmnzhb928pyNLSgQrwnLdSnaTja51ReVFc2q5HFbd8R",
  "key13": "5am8waHBdhJTNsdSnGm15wsr3ScR6r67T3NTDgUb7TuxSvwb5s1a5BX6j55FcPE6vmHUcYuMEs4U661Nt25YiKio",
  "key14": "msZdxg7xH75f26i8cMXGXRbhCQt6FjyH1K9YsG7zgrMoC5J8SUS59E8gyaRSc3DZL3bhom6yixywafiVJFm4EAX",
  "key15": "28cw3FCBnLCsZbCn6G3xEEY5VX3sYhpte6atJN4f17LxXX245gTX7s4vMPa9M82vrG2ZaRqshKTGMkDspnbgqHwq",
  "key16": "21DCJrcUPtZozThgcRZz3jV8ErDsA2MMnDRmM2G2P9xTK7dydFRguGgFrnx163SHoKFErj4DhAswxpHM1wUYi6Lw",
  "key17": "5USnEPzZHdWhM26se58AMyf3bDcDQd9NYMCvmtsSpq6LmxEym83NVbpp393azVVxtjky3iBGo6yhkRLYs7kgLmSU",
  "key18": "5pa3guPzeFVNbAD1o1eEqtWtduigm3c8pYuXov6ozWrVwEYnMSETgdsowXFDNuGbApjeusLXnkTcExpeVH2cMiV9",
  "key19": "61uDa7wx1sUoTys4aUoCJzpEoiHu4e3THhKmJ9pxvH5tRrxqSTuY74Pjj8VfrrnafXh1fASShyp6iU7BB8G64dz2",
  "key20": "2gNjMf56fR8nBXz2DBR89VhZhHNUzbRoPqoFEM9TzzSJfSTDidHH56mFCPLrVEuUmzBcAkc3ca9tVDiJ1ukhATBs",
  "key21": "5pxQ6kXj36NUc4ofNCJ5GboJCQwAJh9XSgroiVFFqNjHpGbDtnVuQmGPRkM8kNdTp4XRjcH4dJhXibGYk3tySVSZ",
  "key22": "2smyL3cmA1QtR7gGX8kFNP1vemujukkkBu3y9sgLRBBE6tBKJZ7ZNg5qX8qYe7uPfTbG2w1fFQ57qbysSZ1aDzQx",
  "key23": "3jMn8G4wUvAxYi7GvYy7mWcVwGpf46oHN2MDHVar4swyZJi8Z9DitjGdkzw3ND77aaGAP1E4w8jo1wjHiySfbJrK",
  "key24": "2UcNM2WC2THeLMq8XKLG1vdV86WDE1Ast7sx5CYqV8yDQjZ1FhbyEidyeg5pcg6J3TPo1CDVZiBrWRSP7bbL1u2v",
  "key25": "4mK4t4fJ1XZ3WypypUByTSitadxkHjWqgrgSReqqq6iD6tTXjGqoegiwmAZbP5ywf3cvMLJvt71yUZ1E9Jzwva4U"
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
