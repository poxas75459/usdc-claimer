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
    "59wKDNw6Nk8vygkq6gv54isRMWgxSsNARhuhdES99x2yseJThdtDsxRyBjaAFRNpMz6DRSC3NM7h19ddC3SH4Lxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BjuDvT6wit26S8ZAYvTLmZnCydKUwKN9CykCNGDmJnQHu6NoheDhecybHHNDh4xP4S1XhQS5yYciHKMPw2fQBv",
  "key1": "4nqb4GyoFKwqCb3rXwr6DSbAF4a7p9fLwT1Nzq76ARAk8eAXL3QHpQqHeHvXFWcy7CJfn6imLzLB6E8HRSjAoGcM",
  "key2": "2532gDMEN2YSrMMrPsgkLD5JawCs9415S5s3vorbn75EMJ3QVvm5zBrw37vbfXuoQ9u1Fhbsjm3rs1jp8egxMK5i",
  "key3": "4bAY46nvw6FEygFSrUJHiiCAqhtoSSuoGD3L3DoRTicpk9aczP1vkvWoAuFWjZv5dR9JmkREXhStgqxiMeUkJy3G",
  "key4": "mgCfQn6K3DwHWUFDkwCabPHdwQbRnSrKG7euFKagdWwzDvUTaVYqSQbqz1c4BaL4nURZjWqS6ZP4bxM4wATvH75",
  "key5": "3EhCME9PUf3iy2g7k2fcdA2fgv2h8orBTjpU1Fns6Xy33rS1hkN6hgnDTGVJTfNJdkJZ5tJJYC9PoQWqPXyMTJaC",
  "key6": "AdRtmaouYzsRSBrS8dGPQ9uVHquq7ybBytgEXsrC7A16d1DXQshzWqDqyQE8DpqN9QaauE1GqiftCCiqteLch3c",
  "key7": "3RnyX9yQ8jM2zEiD4mUGUvxkMJuudzfZj3AamyZmLMjxrLwYpQfV3kit5PWTFTX5AtdnXBk34CgRwWNidZ1j2wmr",
  "key8": "4n3VrGGxrNxynVgFpbAA3haW74mf4bkGcrEaLxxLsjySwRkEj5E7JdcejyZsLnyAn27uDYwB5aJNTUm1XTrBEKvo",
  "key9": "36m7NeB1Pqbpafo3zRWpm1MUmjjgCxvoPU9e1u7GRHXRjxzuHs3apMmH8kpPwugpPD1XvZASjsYkdcmirhMzAYWf",
  "key10": "2RAbcMuub6kx42X8nMQahFebZmLsXApx1o6XANqvTJXhzJ7Ez7YqwiYWSnrtXg3Y7BM5Lwc7jU1FqEZ241SB8gqb",
  "key11": "4EwZ5jePSAzD8KuJgZNu4hpiq2W6xzowVcH6ovG4hVp3wv9XfDRgWuc1Eo83AhLUQqaouHsNJsQSQSefgPY4isfd",
  "key12": "3aNksJKukG2hvuVPrb3tJKpoBq2tTzZmAo8JQxhKPxdzHY2uNRU2HHBGv79Ynez55VroVv4768Amtfhg1vyfnLd",
  "key13": "59YyTswumXxpNrxqY6Y5FYhxUgiKYZobbe3mgGDLp1HWWgTUBFCEYrGWQ3mFVwMSVJJrvZS5pKRBq1QyCgBpNeo5",
  "key14": "5KUd8gMEJVnSJ2EoyDRinfowv4rSXzNbdqq1yUT9FxyuCB4U3LP135o5yZAJAu7jr6TcyzCMAfXotF5j8P9ocWf8",
  "key15": "2d4RweJrLwR6C72goCqZC56KiRC4TG7FLDT4cuE219U2RJwDHLKaEbpun6HP949Ts3kaZVmHn4KDZg9fxmnLQjKP",
  "key16": "4cJLVvU48VzZvFnkT1NxzqiuNZJm75CgrgdZomggbwifJko4scwcMtZspMcHSWBRbwyxdJ1w3nY1L1R3wcipgPCx",
  "key17": "4pgSTpeHVShBHvXgFogoyjL6Y5QXcDcy1MfAtv1ZznDGavZ3x6GjmTJ8ETGpeTRLJVoNbwjyPeREwFjCMUByCh4L",
  "key18": "5UoMaDNnz9ERDXZFLAgLbs1Ufuirbo78umG23EzuYsTaV7taDNJ7dV9hVtmTPAmosQFstPyzXCFg9RSHaYhY3qkh",
  "key19": "2Kxd7PcsbyUYHVP2vYA45U2a5WnT7GUShGnCyQJWRWKyU4wzK2aZjHU5hWhMCxhWGhonXymtgq4aY2UPh5CkE8u8",
  "key20": "2ew3crcW4E57stGjEz5h3qXbxsUK4SynhH33WyBxJL3f57EAJ9BZV6f2qZPTmmJJGzDHfobatmkWp2wNdoSc2H7m",
  "key21": "B8WGeo8R3jTQwxs6RenXjYivw78Mpw34vJJqGkbYoXF2anfGES6291xfTYN8puUNNNLayV2afYPkhyEvfCRr8tN",
  "key22": "38QZgyLS6tpwXY7XLNt94NdZ8qHmcU87HsaFv7H9C7arD4tBfyj3tnSNCbPxWbDS3Ab1b18WRmvejJDu93MEWB2F",
  "key23": "2nnJSFyRSP1CZa6McxFbpuwT54o4kBetX8VkftSQoCACM2jfFN15PyBMPUJ9cfpQEFJm67iRCkmF3V6uuuGnCsrF",
  "key24": "kcMiLmz5KVq3fDzTT6AMHSJWsCrpsrKnbeZDMPA5tQAyBLc133MgueQFTE2zdLspwAfb6tVAXZ7YvG45K8fgujw",
  "key25": "gqUf6P9xo4AEakXCqp1hLyQu6YCEedpEowjLDazS8gGpaobBXE6P6t9Jvdf1zz84WHKFU14uCLwZrPSowV1vmat",
  "key26": "4NLcy1XVKBwzgzk6swgKVL4m61yBgJaxRCg3ekSjvkDUz9eM4fBVKBh9fGArABgSGeupo5DwHxGCFCGLDLtTFcN1",
  "key27": "2YY95cyjhCsWdELYmSTJw8GzViTURL5Xk5S6B47x6AAN7R9LRYWkENFV7hKBx3RmYksVizEmNJSAnw2TNViYcLz6",
  "key28": "4FbyH7n4h1quFW5hx3hBqMkYwQGFMQjinMS7v9UV3NhwLYoj6rMGMdSiNm95eYgismhp4cGzrFgXrBMMBhsMSfVs",
  "key29": "4oAMBmU78gVoas6UYMN1yPA3Ns4txCQ8RnM9g147p2VusaJkxrs578fSg7TCfGWqNf4mHdxEcBEK4oGCLX78SFKQ",
  "key30": "232riQZYaj7PAHguzv5w2o4PXonv3rtAcSvVarH1CyY3WXPYK3N5mMUCBZd2FDra428V7WptMV6ydftojSasSctQ",
  "key31": "5C3ZvaaiL5KQjZV7CR9mQysYFGo2Mx1yEfuEy9nV1toXdEaneLcxis1847n1UdWiufJR2XpW14Fh9JY5vvdA6q7v"
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
