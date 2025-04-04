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
    "2XpbHS8Ad9itLfqXZzqfcyEWtVUuof3p4KVqvAGc3wbM36TnRebnp7adMKey5N1KCDfhzA4cYbfM1J8UHE2aJBkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TK8Hp5akNZWdys8hLdagU37EJU7icP1HZ8HwFA7E4Z9sjZLQw1FszHCRjzsXQNseTYWkFeygTJUDrTgtQjX5o7r",
  "key1": "2AMDkxpjmHGYt7hyJgVJfvYATNY1BtUu3LjCCCvtRpjBngcyhhM26o2X4G8gRA3cJwCkwT3xgSJgxfUUkJnc9Kj7",
  "key2": "2DN3FREhhfjKLLtUaoqkqV1avAQQKh7gGAkGwkQ7ipFhGwka6t1GKMZqouqMWoyahTSzHcSnJk2QoC5ENJDfxJkd",
  "key3": "3FBow94APv5WeDhFu8MBuVndzzUAMnmnc5rgGWVKzmYVs8vCoTwGE7DwyR6MYG6CbQYeyQXL8Fg4TJz22JPGk9Zu",
  "key4": "2rfRRbMFeLCtE6azbkPimqiQBUbZRqpPUqVxeoUsF3f1GAqVvbAXYdMBoep3VpaPK6cLJDaJkZF2znxsoUYpxtR5",
  "key5": "2JZBYmUXf3SQZD65otuUBBAwcdcRbjeRU1nqqEoxpMwFjPH2oi6sX3hn58AAfkDGVp6ZZMcjAWXhUiGcuHSzD7Bs",
  "key6": "5UbV2Zh3rPDsJSggYZ42UPpuxmtYXs3RYtc6eiPCV1mSCGobKjcDQqKiBGH5MZ7fKUxGVfcfxMofF5hkTvzPgVQQ",
  "key7": "5eBabmR4NzPR5GB1YAMniNwBcP8WSafJJQn4meT5KKLWzcHg196DMeKmNpJekwDtyYUJ5tVhyuhM35KVJJQSmVqG",
  "key8": "2CNSGoX8pFKHDCyje8m6gdimWCHmFRRrvSzEywTZACCPzquRk3gtcWU64P5Zf8hxL8jpFz4um7BSJX69C3Q7NRy5",
  "key9": "rY4WKDvba5yzSFqGyNnE6HEA1rTWACEvCNC1rBV2FLRwLjm5EopGkysfCgHRnJUxYfXwKe4BCHdJgm7T5XBykgo",
  "key10": "3aZiNKQPhaf4RPCQkZFnjcUpuaGVikS748qCVRQUycJxRtWQVv7tUcSXTD4cTHXQnimktHMbQJ2z33ZW1HV8TLbP",
  "key11": "3xsSa8vu7zTzfivHWdcjkZaxsKZDAuk45JyvsJoc78hgWZtqxTE1dZfbu2VRhrkpkzs4Fd5zx2dvpJxFUae3Xyxi",
  "key12": "4S6gSvvdUo3WkZTV6j5fTUvZ2SsWfDH3NRMMvwXCggUcmVRot8sT1q9SUkjF9sJ12ytfbLzKTxWmgFHyTGvxr1ZE",
  "key13": "36g2aM1uTLpoxZ6zrFYEFuPcyv4NiGtukiHPBUUetiw63ADe2YLs435p7ghftnpPVK8Tdu8RggZG8nqxrnjQrpdB",
  "key14": "5cb4S3hS49ehd4zMShSHpjJBnSCjbkQ6cFgnxuqANQpJ71TmcJbQVxtU6eLxDTQkjtSxCsqjE6Tj4TrhEbPEaGoS",
  "key15": "4qBeAXRGdeqiyvkCNR6FZt6XAsfDiTMY2VwGhHTKDCNxuwwWxQWPdtg8tkqHfJm4Zi1VQYrb8fZw2K6tCQ5oAnZY",
  "key16": "bUQBUZwmgZkjnfhEKoBViHKXuFhoDeRazVFC8pK1bLDMQWeorSh8USvnN9Q8jMEunPkgYMgPQq8q2BeVLUGZZNa",
  "key17": "2dShBYggauPbHBmaFTBbHNfuNc5WeXRBuNapSedSZyPaUgyMUkvTMydYrmmg9qb1txcLK77ruGFeRRJ4NgjfeMmy",
  "key18": "138C67N8wZ4ebmeTX2Jz6zMAhqk5pr3ScQmvBCJ6njvv8qD4oye6mqPrDuMBBRBXQabmbVnVMEkxhwXr3meSF5d",
  "key19": "2jtmKyjeV6gKMva4uveXLudd398cHP4hScZHgWtoa3P7vaJFRmA9BWaKdcEwBi88eVfg5q4Rm8bwpjhJ3LQCqjLU",
  "key20": "4VDyLgpwTRqfDEAavj2q1UA2bxFeQKdf5X4PbBCrt6MELyefMJxWSgKM9UqpA6CSqnVTzhEwfFjdyJGW7rZdQ6pU",
  "key21": "5ugHQtGfB6ENfbVqpxMt5abwRhQcBXh9eYw8QYrfrackxDRT4vgbJxRvBUm6c4MYkCpygaKcZPRcxH3tBSdGojRS",
  "key22": "5zxLw6DtGdecPcq1hWS27e42x3Ys1AWYqXcE3H8kYpZQW1qH11NhEyUcC3mm5MpCPoZAEqs2cmFBVThDPEzUWQmJ",
  "key23": "3vkrhs8JnddES68LP5xs5MXA4D2gqCCS9R1UbSuT5R9Ks4oBuUawuNF72bmj7WM4y41AMTh1ynGLCabDZthKAyHA",
  "key24": "5wdJnXY63ZXB55TVm5FT3nw3RfXoCQfuSwBBv7yhj7h2S8zJccz7dLagk9uJb3uA55thGAtJDDVjF4EsRn7M4Xwj",
  "key25": "3DAugT45vMbLtw1V4BazDKH6dhKt1G1MoQMTp9Ys1yRJytBJ2DopkmrNFrub7n2mTSNbEgeDfn3JtnuTsYqtWjMR",
  "key26": "3Ar7vbdAxtqva9ugcHKR6DZUBWLLsPM3Cn9x4NnfkoaMSBr1aF8wDtyqo9L4it61au667P4DKK4jRdwxrrV1MwKd",
  "key27": "RkBWxxqGthyyEZxrGa3t93J8vJiYvwFJetDc839quymg5eAgNMW6xYajb1DyJPjjuWZEtGwCcWKhnD6bRGPkDxm",
  "key28": "5tENmxALNSzrXY9mcSd1emkY2jCVc6GRnYubkbiQPyrWuB1THn76aX3BUK4NreEbSbvGHFhNhynbP4X7XjpJoYY6",
  "key29": "57ujygKubaioLgXfZtYKWpApjBGfssNDB4LxmS8AmG4men3YvA5it2GYrF6WYhTjXo5axyhKwUqbV6zZ7cZg5mba",
  "key30": "bhonzJPjH8pbRf8PJ15AAwakYY1KaL6v5qG463KR4P5xRKQ4Yk5QpSkCtv7HPfi9uXMSHYsGU4xwmAiXwzVfwud",
  "key31": "43KGPQXLTdcq5aqC1QWKRbfeA9vhJTpPNdeD9yM3zVhajA4YEqqm15JoUM9aufbF2uXyFt6wguhuAkj4EQRs4pxQ",
  "key32": "3uJb8RnroFnfCKxHSEZjzdQUDx4Vcenoo6Z1tBsNxCp5srCCUZ52yD8n5x1u5QEciFczdyyNrdDV4zxxPPN4KXUk",
  "key33": "5pshx22Zdg3x94QJFDKjBcNB6KktWYHf2pfcPqdQNHo59AUJupLpRndng1uLCZ8Ftm8UxQT6yE76DsYvZuiw6YJC",
  "key34": "5qAUHo7HmqYwyzLvDva1CMX1FsokDza9a95BXHyn9gHboY17vMH8HzWSBobtcSw4Mh3GWWLG8k1sJHucSuHjJg8C",
  "key35": "5Wj19Eym3XfGM4kbEoheqoBTKKkhjBQwewiqENsA6xPQtZQ7hLibcAGSDVNNHu16iTcD7j1thquiznLETrJbMvnV",
  "key36": "44Sxt3PC1CmbZReAvDUGYNEe33oU7frGJSLV9AxyRYqtBSCGVWStuX6197gWv665dU633NqrTFSsfd6SfKrJtAbN",
  "key37": "2kfrkcTQouHfYkn3fhP1AmqZ2sVeSXeQQ45MR8i1bFhStQ1TxjitVJ2jXWH2ua6xbEkRVA6SraEMbjmcDiJ3aRDi"
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
