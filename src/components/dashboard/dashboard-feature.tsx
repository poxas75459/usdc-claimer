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
    "5VUxNz5g9pWRi7mqHKAmmU6c1NnvaeSGfMuQWoFK1erf8hsy3PwDKmy8oct1HjwEpg5jwSxFQ9Cv4JtRvSqn1qjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZUFreCEQemqJ6yvU4bCXe83sG7qh3nYieaSGfDEBSmhXt1WDqpYR8ZrPwHnmKDKcvCwWjJp1L9ASohE4NKV8Nr",
  "key1": "nKnvHE4NsPAR86hyqh2WsXYdojHhcvic7UqxhtQ4Hms87Mouhs6teVZD7XajpDKcB8CV4mqxJRSsbh7YT3bdSbt",
  "key2": "3FXFNh3FiX1nfae42JK5Cnb93Su4S9tVxzLt5NpvvpZZp29FmsGFYqztFjmNQgSWF1VQRBxNV3ica3YfZX52Cchf",
  "key3": "5sRkxVJnjq4WvEnSGB7cj5rjvgtwMV9XifqcHkXbd9scrSTAdXCgt87q2azoDsSeyAPhXAZPUoQNcRz4jHygr4n5",
  "key4": "5R3MnLQy1Cavpks6xmZNwJQePDv47UynDSgc2y3ZA85xj2ZBPuPLVF5SUrCqNe8a8XkoXr2uQSSUEJZzwEgZF3H4",
  "key5": "4bG2v4pTHPp9yjeiJQJHsbzEwgBHsjz5QTkQeY1djXXp4savTyXDCGUYRro5Gu7r2tUxxiusxpFGTf1dWz9NdnH3",
  "key6": "1qnVCYex6AGhyhh3LQMNEjLaNu7n8hqhUj68XwjfN8rHPwktdtugUWWh516SycM3YL7CcSfUrKXFLebzNDbinjP",
  "key7": "3Zr2xSAXZrbAokrY8vG3GXUtkBLQd5ufpEogCALKjUGGbTxgy7EJGpXqhbYanT7SZPNup1HVhUKcf28w2PLMrw9u",
  "key8": "5ihsr1ykV8TtNJFCVzmVfy8nWFiPKQHAa5BibMESikCdeT89RTJ2iufyMyL6YTefqzfr77ULBKVD9oA3yBSKdvaX",
  "key9": "5aPabQvLM8wVNYB43owaPSV2fFKhDtKwhCCZhGShCnLbnvs8LTpgF9rwSscj86DrFgVg24Q2R3JkgEGcbTsLR78b",
  "key10": "7CRMYvwx5akLsZtEwjfD7FBauUPYnav8zHikcQ4XUMdoUYbapYEepAXLmbudUF1FDm8eiwxDnNtQCJzjVqMgv1S",
  "key11": "CQNc2cgLe3EpvJEPrcfW5GyqmCeyFpC828FsugtZsVGFQbFkFHBS8yFQeGLPZVAckTwrCLXHS7b8UGxshZXqyX9",
  "key12": "34eyPWTzgPynjXkJyN1kysapZmuRPdhJWSvf2W2wsMAa6ZNb9gTWVkfNUTeRoboWiUStZTJ4exBUdCUPoa4nxTNj",
  "key13": "PWRzBzipSriBZTT5kWgL27Je9e27pPk49FnZKF15b4PWEzsvzWcE4Z6sdctdebd5d9mqMsuvSqJgJQHBgRTw9XE",
  "key14": "53ag1vVAs6k2gPAct6bxGBmc86hxfF5ZhAbPAJ7MUSfP38BQhieW6p7S16GZgcLZnc3uoN1Y4724ekD2ph3ucePJ",
  "key15": "34Y4WfNTFBkpKcFrWmeBMGYohGRainBQEv8QsFEmhh55BacNc5qSJ8ZAozq6diS3hnNfq3VZGeLupf4ZorM18Jyh",
  "key16": "3f6k72L98X8cvCjjgubUbQJV9RfA1sy8UGbVr46GQeb78fWjY3q8vgYNLuMEESvu34FTA5p5jLFqLLmFpEPJKMr5",
  "key17": "2QRQszrqwsHB1DAhr6io6P4697diH9yvcihZQdvEDmC9gHXUgLZr7oDm72MjGhu59KqGYAmRA936P3jxiXfziMnk",
  "key18": "5wwHLGECvYXFTTyBXLJCJYAygnbDBthhd4NSVAtbmCQ3p9xGZv9gWdXj1mvy2A2JVtmbqHN2eASZsz5NKQ47CzYK",
  "key19": "5ueMTMrHU78SCNk61PjfNsd8uMmQ9YkvFiBbmEALf4HwmrVzTmKyYndCQ8MnDyQsDSF6QL8AVjNrSXFGpDyTknXq",
  "key20": "626Ei1zkZ58HEgfxGXcx6ZeiZLk8y1hFx3hvytHFojUfr2WG2SdnQgBibQZaJjMxRLNgzWdyhiL5D6KqHcW13vqZ",
  "key21": "58NWHJPBECFuSWzQGhLCoRaffmjqwJbozKaH8JJqwXxcsQg5yTQm4EWi7S3nHexYprvBZ3QPw2VyKYQNEQ5nV4RL",
  "key22": "2Tb9nvhddxe1Tx4nXSW4kvmLLXQvKjFKNDXJH8QwFAUd616S8L76ycu1YUGQUPMs79S3Bqm6hNRhYYJSsMNm5H9p",
  "key23": "4p4qDnpP7R3R4QCydmbqF8oPmWExHfa6SDiTwgm5dNVogJW61QJZQa3bcAD6h8m4fFTJRf6AD7xBmoRU6Ms8ywj7",
  "key24": "E3XqNkkMp7SX7xhMVGL4QLgHcXNrx4eqKb82FX1UbYJWoyomoMbNU9n53eMJXYHQ51WGQ7mqnFf2ozak3X68jdT",
  "key25": "4Q3nV9Ki3WF6KD1KNksotMgiFFx3TfAT7FHnnytsUDRLP5vsgse3HwhduEQxfxMjwdrjneM623v3PG64T2fEYrHq",
  "key26": "2bT14Nxfw7FRxVDDAzuESj3XQiZoZT1ityo5mwdV3Uw2M2xfQjefGULLyubXE2tjbSDiJguebrfNogZHeUeUdAJ9",
  "key27": "2sSH7qekRgopxcoivYst7mWUNFm6Ls6Fnh8yU4RutfJQ82kJcbTfKs8xWF3HKnHCehysgY1SWpV21XxAPmnvwdmT",
  "key28": "2uLSA4J12YdQReRwWnZxv1hHamv8c484mfPxduqasrmvg6c8UjkXwHpDVmNhxPAKs7qt3K2r1To3hwK1uW7VAxML"
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
