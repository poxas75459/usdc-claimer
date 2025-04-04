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
    "uAgmYsPmViLobJKTPvUL4DjLUNBXg5bEgFnFyPfFV4E67nW1CUfhpco72hp9pgtJhsBQAj1bVSbx6LArcn7yqEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAw9jgzwDCwFWvqQTi9Ab7S86T4bUzfJvWi8nsxj7eiMahvXJM5ZiSgE6LtCEggaAHnauurAXbe1Q1mYuVWQ5Wq",
  "key1": "4Go3kQVU2GQLLZ5Fmdbo4V416bWqfcKaBWtx11SEBPmw3Wi3MLpCcQLxhYzwqGqiEGrBxx8uSQgGEWuHzDyPbA23",
  "key2": "2PeQ9jrbfdAKHxTrBYKs1GLnUbZeKhTu3a3prTHQprbaznd27jWZVUJ3Ny9v3CouQe1KQNKSDbEoa1HMKixu5tm5",
  "key3": "3Q1JCzE6VRhAJPVQLNTbZzuLM2nUQ3dTxHN8SqpemFDGdJKyurvdUFgDSR455cNyMVprVAVB9Dp43ZebqUqqxHL7",
  "key4": "3rDZgt1uucrH3xSD9qu1sPHRe2whXDTe1GjSpZz4EQA7vqX1TcbLiijxpYUrqRY7AsDuDJK6QfkmknnnwGfEVLpm",
  "key5": "4f4FbUws4Gi3ntQCU6iXACqLa6P76k9HXbzsCqGFZcKKzSjxCCNteVCGWsfsgnRMCHpWRWSCst1R4Z9WeKjXnPrS",
  "key6": "2CL2DcysSPXxNj9aW6QNbRcFQC9Fm4oow4tKTaZaZvkNhxEijT7LmRndiuaZnczKiwhsWwTHR1ro5Zc9FhJWh7ip",
  "key7": "jgBBE84KymBSbys4Eb6eETg1oa7RmDZ5jE8Gyd8KsW25ebhSF84GwnUVfEtacRw7K9v6HmTCT7aZcSvZEtLVVsB",
  "key8": "5VkVEcbAcWjjKFsoRgu8FiKnyDTS3SACUv4DR6c74Xgyvgp5kgZF8nPr4h7qU2huihaZiTYKqpU4rj5ZDGQC7rvV",
  "key9": "K8nh4YoePAaKNxybF19mm8NQaCJhzp1dFJsC5LDyUr7WUsYRDn4An1toaW7TkWagAw7rL7YpFM2kPdMLU6GVCny",
  "key10": "2WbtqxVkB544PfcuzskT3F2oEHRdjJCM4psZyCM3pJMLkJNkSoZRgPSgqUkvZsJLCD8UQ7bMaeYE4wMKEAJVnsYJ",
  "key11": "BJgE9qwoW8dtaTvNTC2iK5ucAWPw1iPDCQWmnYmDZhGNCvoe81oaH3fXziepDEj7m62D5g6JzfJLZfsb7SdQNST",
  "key12": "EjwJCkpPVnTCPDwFAZsV8nBwSZ1DNN4v8YUctnvMcJdPkTTceYiKhjHcJUj9iV7cui7fYfRuDhto1yApoG3vDdH",
  "key13": "4sxz5dbswDupJMYiV2qFf4ZWBmYhqgCkmKCsXGM3ixgDv5RjrcjXq2snjNgc3tj5qD4R9YXFMF2Uoo8X9PdfqCv2",
  "key14": "3JrzYoJiEnFdG4BUUDbwtH8mUcWDX3czYGq69qYX9C9DTreJx7FeCBUaKxYfhnvhFZAUGQ14CMxi3Crzm2JV5zH6",
  "key15": "3QtkAjhoj8LpGXf76jueEYMcmABzn9KTM92oSYETZyhfCMYdArgFnSTvjjmMnA7gB74EpmLxTarN8ymQyG8fgNEa",
  "key16": "UYvFQa3FdqvXfFG9Q4McJiziTA9rXdVsJfCqwAAL3nFSxAKJtnMcowXBrCqLReW38vNbt3a8T1CxSQRCX5LE3eL",
  "key17": "5PniPwmqi6A3wA6rFGGCeGyAZyn6waPSYKLPuLrkJw9zKmro5XL1BEVbyMCPZJcxBLh3NJys897FuK9UwKD9iWap",
  "key18": "5EMtXsFQtsksRu6C2CCdkSVT8MrunURqTA9CdRWbyGSHSTobx4mjeH47zcPar1uyNyfPtzModJZsAiMEzEVySXq5",
  "key19": "5vS3kqSX2j6X7sTUm25hFGsN6RTt1ecW9N8TxBaH5ce7dFjcMT5KhE4JBQwT7c62aA5DvUPFrBrueLJJGYNSZjge",
  "key20": "2JYb6SBeM5eCLBMa3znZhp1VYGk7pjGqCccmNhr8MEC45FAn9RwkFK3Q9Hx6Q4X2H7PDxt8YLExX8MWdn7d8YHpX",
  "key21": "4Vp8SpdqoB9fcLSUeYw6MyWs7wMdnztMWLWVRUqL13HjK8JoWeVaHwyAjETdQiZ7RUPtPTGGq5R2xTFxiNS1CT4o",
  "key22": "3fx9eHdccQkidRudEiJi37S1Fwg5nuCWtRT41uoNVwMGJ1igQzsZWGU5RRBfdgrAPdfvSbqSUYr8vP2Su6fr6qWa",
  "key23": "5HGNQKFLQSAemDvHHoXoaGeNDU1wAX8BN9xDRFqgBgAXbc2NFxfUcoWkmaXvhFdWvZpUvasiEGLjgwduS5WCpoTz",
  "key24": "4dg9vAbbnfhfzspFeguHSy4CJRAx88QLinWKjZrC6mgg4ncfU6H2NDbDbvPWBMiPZKmk3FPkrMgBm3frvMdN4zza",
  "key25": "3kKW8xT91DrANNWQd3r7Bkc4kSrGSaNNtvDjxo4epqWaVhsHZBkaUy5rvLL5UJdDET4Gqr4VmY7xiP47PeCQnsKo",
  "key26": "4YXT3F9kYskqK2t73T9Zj882fLMtpTgXfdJJvB5n2CM4J9fSv5cbULXFS86UaDxsCb377SZu4FFiUpTvn5ciMTWJ",
  "key27": "2NdygLEBpzdVqvrtbUJMCabJBGHKEwH85gJ4SpHSbe2nV2ksN8i5iLggdBVoYjNgu8Mxqh74bRmDAV7jnYvxdbP7",
  "key28": "4bCmJEhhLA1ExQiegu2ukeHxJo7dDRoqbMgUVESoSBwApEJyU4gjwSWgLqVJXqA6suHLPzMzTs5UtB2MhKZz6RQz",
  "key29": "2MbqKhbSaXNXmoeYZtkZxKrHWeLH947wSX5tCxaiR1pWWjvb7anyCHpQ4dnKPF8ZBd6mdDc8NBvb9y4UV6qrM5MC",
  "key30": "4BScHoj6KEMKS22pxqNR7BbBH6GbfQb3Ly1uj2rBVFppeJgG24kcwdRwY5gwyCj2qGjWsNWxA64XXAjVTLqPwRw8",
  "key31": "3QSRkptBan9pNVRwypsnFbV9wyj39kMSegC9pnq7GuRqiRMCKvffrjcY7cAKykbdKqhjeS8oR1kU8D8NUKm42Sah",
  "key32": "e7P2yv6XRryWNqzNLBFNjzu7wSoJREqogvV5LXNMisdEt3j4r6H1TVg1CfqBbKST9EMngu65WVsRQ23TcwXWbEV",
  "key33": "C9ecQRpLZQYXvS6b7F87DJLgiZTFVYQkeHpUK9gsvFsv6X125fLjYu6JPXYabctQJME8NEfwGmbTVUS6gJmW8t8",
  "key34": "3XqWBHYtK29qD876ZvEptvW8Rxi2fxYGYGwBFxkGzEoMhrkAL6rqEc1ydo2jirE9ftznJ8dpHPG5NEXKxaitL4dg",
  "key35": "5TvvetqPzdu5igWqmwMm8g2vWsK4S4LMoPCrHNZ1xbNs3MtfLpFvQCS9KMuUhggrsZEkUpBefZgdKkddTsKYsTtW"
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
