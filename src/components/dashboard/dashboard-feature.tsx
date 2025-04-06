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
    "65Bjjh9HY8KMvTYWH6SvmQeSpW1hBSwuNd4xj2mn5Rz3ihArYUMvSFvVESf4VVbEdnoZ7gmbT3m5eoQAqBiYw8sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owJ8RFamj4c8F25zeN4z1Yq5Z5uxnZvSAMthYrgg6G48r5CrPHc4ohmznaofnoXyLULDz1pCJtWRg9Df8CU7ysr",
  "key1": "w85tEF1YswY7WjJBzc2fnrXuBTY6FQBhnXHZnHscX81F5KHinbSvMXY58uh31CaM5uCB2SjSWKP7FatiX977T2p",
  "key2": "4uQ4Xubp812DKj7RbYHuTi45VgR15ugZP3MJqp8Yk1GXFpN5sjmrTea8dAyxak6ny5SP4AVMztrFWRHjm2dSV86W",
  "key3": "2JvxVB4UpcjQrqZrUJ7qXUQHPKewtKzttxHZQLt7dxKQvRyTr2PJtbJow4BzHWsJnY47n6BdHYhia8F4SPLx6tiU",
  "key4": "c5cETS3nxTjw9tVstB5P4Cdx7RfWkoZ6KwMHjwVyfSrk5kJwcc7syYCXiq6BAb9q2u9ZuFjRjs7NaPtdQXPJMW7",
  "key5": "4hWKTiz9R4KStfav1RFQBEJrJqzsY76vPS1iynVNpjYr9BVLM1W9QA3jBYQutPcBrqZsTAFLVyh1sabNwPr8UaPm",
  "key6": "5Yvw44XsP47HeZGTb5wMdNtuRCqcpUnAsqgS3MwtezsFg6go1heRzHpEA9abYtjXYcgavsqbM46mojFVFYm4TZBx",
  "key7": "2Sud1jSLfMP3Ym5oQizTNLBcZKQ6FsfGTxGW8LDqBDsYd4YkJp4cfc1fGnpX6DtACQdwFqm5VTkw8agZ3oqvMT29",
  "key8": "3YD6ha4NfNNKHeaJXmSmXpEKQW2KvmoXsvQFQUtVeAr16sMSzZQ8T99pKm3AxdxHhgwoBRp98vT8VKuhFRQcqS12",
  "key9": "5D5gZNFZ5LxKhntifSGTdrjgau677vg8g79ZTDQRkht7qmQ3pg6YuxMS9uCM9EVANYU9YtRF6LkshHq5jBC9E5jS",
  "key10": "3iHmjLneCSmUrekGKjbQ9hBEXUo4xVnEGeT3pHNoAAvwETe5aeQUiEr9RUfb3jg6u8uxbTZGkJ9uiMQLTCrDY9EJ",
  "key11": "4bazzRdohm9VDcF2so9ZSMn8FyoqDjALtJ1mxwcpUjXtLZ7u9biqjieBqHvw6JZpW3GKkdkdiTqBRv6oUSiSBhLw",
  "key12": "2fNE1eRSbfNA2D6GUjiLwezoXCgUjbes8DRD8z2sypTCprrQjBzSPQFWgQQFXLKYLfq1GmpiEhUJa9xtu8KsgEfc",
  "key13": "5N9147oPRdnW4hWb4Fd3c4b7oHTm4ZKKCesv5wP6bdPCkwK5qdWFFmZ337AmpVTwqdkybscHarKpV6oMeLq7k7S9",
  "key14": "2H52wqPWnWwUtrkfW8BbULje23EMMR6JY6T3r9TK351YzWV9RiPUSr6wRK97SHJsLwdQDGeDtLnPA8y4Av5R6yav",
  "key15": "4GjZPEFS1MjJZMFVbShax11vNkqShNrgdpbqaapCk6HrZQmewpUpugVCGuf8s4tDErzNYR7Jei7VzG2iJKW6c6fb",
  "key16": "3FNbVnjYSYj9mL9sWXhBSdSRGmmxroB5YEw5K2FT9ug4MgpnsxEnQHwYiTxoigLWBy9ap3Jzg4xfzdv4Ya53CaJu",
  "key17": "2XcjP2gh1TgtFXNXiGJrA3Axb2GrzwmdQMp28Dcd3iXpDayFGjuHMwHEJ5MfsmBhhVTFi3DqtzYc4PWSBurxwvUc",
  "key18": "NJ5uHAXwKUYp2sVzpzhNtMQ8NQHKcZNrznDsqEaXFtFF2PZcH8zSPYgourLK32GLx6JbPiBwayLB4V5btbx3pZa",
  "key19": "4Zd7DEvxUuP2z2dsB4tvPYH3x7buFnSUYhkjSJzH7xJdLo3yurMj89eZ9gGPqC7FCPkkrduHfpM5xJUy95dAXEku",
  "key20": "4fFmZnSrCKLwLLPyHTY2BADGfdmNPawqC8NxCXUSdCtLHScRQ6TuhVpuRYCw74PGDYC3qyyKE7dJh9pFvmc2vH8U",
  "key21": "5dK78JZgJnY4dqTDxeVe7GbJRNeQsXj96fGftih9iSUqijmHjCLSCPjGNg6KtmJm6LcroxFZC34qgVZxoc2Pg2Uy",
  "key22": "3udQdSrcAivJps7J2dskJXy3hqB3agzPfm8wXSwr5KpxDLeVxV2WWPcjYcb7WiCk6xtEZjKAJTbq9emFzKKwaEtu",
  "key23": "5FBebDdqKXHWAT1KbstvbGSRPXZMzVQGcNYuizPMoTbkZfZVAjtTHhc2VgqeXrweqi86LYtn5Mg89QfkNWfyUDee",
  "key24": "47hZCh7L4RZs39pFT6XzHXvdHBmd9cSkmXpcnHkb7A2ZafvbY2gPXveo9EfT85RAvgaYe3GBDsu2DUjzyE6GKqhp",
  "key25": "4FuUSfPhpyuwRGQFBGKxmHqDnXQTVG9uoMjX4Uh92tp9BSWtpQggQxX284Cz5hwCvzZtmj2wAHbKbY9FZnd3uRtq",
  "key26": "4ooUjhwdfNDYsAUHTkKFUKnmEBCQPTHhdnTdBa7MNA2QXbToqbt4H1qEqAbreHQkLCacHP1925i5YheGjeGdtmVr",
  "key27": "TtrGwdPECuLwyMxipoMr5v4XKfehaXNYrsP3bQbobgz42xhs2yH14dNewb1JqkTsJr5Qxkph5mmXP6PV2UHH8QW",
  "key28": "3HiFk4KssBN6vNX91n3fNqj1jkGAR14agg5Cz9aEptmGnMvNbPK9WT2LKNvDPRum3iiBpWLEU2PZkrTpJEZXwryj"
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
