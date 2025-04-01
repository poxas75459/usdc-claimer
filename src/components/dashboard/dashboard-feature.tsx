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
    "458YLN2PHFY2kzHzChvXVWHXDKCfEhkHCMCD6WnavjWyyBDkeDtE4JpiG8tw9W2eX538upGER3GyxDz1ykcTY47M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmUUWmT8j6c8JQbdPPvH6UgvQe2dt3KLLEqsY5RsxaskgKKwrz4m4ZhX1anUNzr2Ua3RYYqZVo4xUB1uoSXoFrq",
  "key1": "2Bx47dgAzNNa3zmSjqTRaQfDr5ej7U9FwtwLqmGNVdg1ka6iP53zMsPUxLqyPJqDWn3yekTS1pjiSv4xKepWjXQE",
  "key2": "41mzttKbPTZaJrtSKbcNxd52c1NemmepJNHq7N7iE2ijHQBaMrwMhxYGSehgsRK9cuEP7e6sL84sfuDkoF5AtQa1",
  "key3": "k3KjZytJGgENSpbL3QyNGBWNhAS2kiirFmrwtWYSpV8FX9ht288j22T55BmpGoSt3kgbJKds5HzBqhC3XFCgpZN",
  "key4": "3ZrtqFxptLPfp6ZUzJcLQfEmZJgskPA836ouX9bhVU667mVmVK23hoSreoXUv829LV5Gb4q7kDYsBUniHLN4yQbU",
  "key5": "2qePcMYqJKHrsApvGEdKnKnMttm1CzvFh5prD3UAypRp5b4kdJcwLNbxZc31gYeDbd1rkY9ZfVi4t13SvUPSiK9G",
  "key6": "5ENwkhb8KuT3CQdemKzYQVL9eL6ZGTYoAu6hScQy4QvaPNBcS6Qz1UinqtmVUZdfopPMMjC44Jfp4za7i1jpfurQ",
  "key7": "2nkkkfdwc8EKFqALM1kNeGYBXdR8Se7m2Sj5pMsLDjwHZ8vBznAGtFLDXts2zkiACCsMjhpdZ1musMcQPgjagfqv",
  "key8": "5oNRHeZviZoVJARrZGjr9uqv3WXX3sSWVHAmBB6mBaY8BuLwuthUuv6GxeE4boFfYpMvg5qEUBMU3VYNCULLfVTS",
  "key9": "5tdjbKgGCMoSd4kv4Pu4Vx5C15J8rXTN3k66ipMmZSaH9WExdq46jeqHmtewth195WWpvMZ3ps92kyLJcZDffXrH",
  "key10": "3f4SkXs23AZaVtAQvANfvJjoh156cc1rZ26nWUewNtUj6vmYi1fmcHFAcLVAYTPa9m3Ltu8sr6sCBURecFPkKa6o",
  "key11": "5CTf1ZKJxzpXScDvwLxKFaHLGqiPzQvNE4NbwfPDuMncPE1oDUaHSjz8wNADGgfrbJcMgfYXb6CG5y13CCuJ2VMf",
  "key12": "2pXG37Jy4Fg9NQpTFwFtBmSNStaEtfdc8MdofCY2XFgXNKXZYcTp7uREnpimLWMho1ZLwhDGdsp6oaZUVMnEAzfW",
  "key13": "4SjUs14UipWFZfB6kwKWe16kjpi7oXDz7HiBum9FWSHB6LtPeJxEemWMbVAbR9k8VhDjv2KUfpEkfu3geYZ9NRRJ",
  "key14": "3DmgAExw7pyBpqfA6uLXLZTftxH78gqauRqQhKRQPKBBtn9p2AhVx4WFDYBVWXrFXmkZGVdSeVeKaJ2ehkj85dWH",
  "key15": "5SZK8fVRdGk5FCkQefBawYSqAb2w1dimtxaY5vqhQBjxVc2avXc8FNmj8aM9vVN7XaT2oTbCvDj8Tfo8j1VCdy5t",
  "key16": "54U9hP2QfyjpTquDQRw1B32Z8ex1rcv9qTKWCysh11be2roHauxru1BuGcnTzggjxxnkSrY2aHtrasYhvMroFJUg",
  "key17": "3hsqyURvaieds5FrkjGvbdZ5f9EHHZba5uFGa7baJ8U6Tgh8v3XBei7V3rn32N2PBeM7A64bSS7UZpoYG8Uq3UHs",
  "key18": "4VSPW7rv8NnK6uAS2fdD9V584ADfF8xodGis5AnhmcwjjBWGr82c5zVCBw4t8rdGmZtvSHBgb3G6aA4bNTHNC8Ba",
  "key19": "chNpyFffiXjyoSchyScR8hfFm3tQyp2yg3MuYEUZBFmtpYyzu5Uo1WuBDaTkR9RG5SqQ6bUK1tNeQWzmGfctGAk",
  "key20": "2JkhSJuwoMJ5ojTz91RpehdpKisvM894WX65TAp2iM2jUkV3jxqi5oQwfRfSVarjhVkBkHnyLJpmw3UvspicyGGL",
  "key21": "3PmmfsnQNv4d2GvF7VGrw7urLsHJ7d5u4GVFB8GzaQoBTbKH7e1QfoprkYN2Yf4ZA6iJTQ2SVL9WM2XEFoczt13A",
  "key22": "4YoG5vhgje3U5RwzKHWmJnvDJFBCtMqpgxM8SWcF9DA83sbBmLVwPa4XxMosjD4W2ng92iGqUR3ZNo2juM8zBYXz",
  "key23": "5LZTs66uXH2zG1tCu4g5UeKxkCZAHomdYdYtPg5xBCc7dwJ19NSzpRYiMzs4Nzsic4mGTkuDrermGWbfzWuhk57R",
  "key24": "26ri9iD7roMaMQZcSxbdC5reY2G8auLXmzT8waR7nXjY9f4P9tUeCK77dh31cFhGoqPWzYxQx3pLTt2CBe1SYnJA",
  "key25": "5pdQ4Y5eZYiTShAcQf8ueca3J8KaJW31Syv89QyKBGFHArJp7eMxWMdu5nHoRXdVrmpYzfgCeicVv1AsZGQjhZ57",
  "key26": "2vxihHskGdQtFNgfEoBpX9d6HY5aP1L8UsTmNCVAa2bNAJiNqzCbQ1mAGUvQvfyhiwSBXGvZJ5owL1iR6KV5oTzj",
  "key27": "8hvQjLNvkGs5gDKD4wAJfDMpXFYeer1oKKqGRbffsj99h311SWQxqXxHFV9qJjjize8FjqsCiSki65Ar9gQTceb"
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
