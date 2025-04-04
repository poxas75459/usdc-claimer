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
    "56Xh2a8oAeyeQDLzrGLXWptTNLrmJzGxxX165Xhn4HcWBy9L47honPMaf2YZtFdnsVtAHKt4XLgPhuguadcdfLug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "412XDAYU6vFcQEb3hJacCpFASq7w9tW1fMHEjaPEDD9pqngJBaBe1Zjf8WzRvfdeXCv4fCxKoXqTL8uLtJ6voGzn",
  "key1": "ivxgrJ3gCvcwRcxGZdxtDkezv54sBb2XpESyJdGxjEdHMJkkNpK6TJaDf3sQkSMGD83Sfpk47LZ7dafhnXYozMz",
  "key2": "2WQHyQvRA6hH38QUEpyCxkgxxL4y7kCFDnEcKgyJnpFaJraeArww8r4rvRJKieJzDEAweujbLWs55P6WCPcJGbAF",
  "key3": "67ah1pFiLEDnorArKjCeVd6hJhYDAqMEAX7GNRNqup91tXoZYGtjyyjk17NepDqd4eAov3MAA9ao7DR5BeEoPKo3",
  "key4": "5hdFtmJwgx7eFaFdtuYszcEXvHyd44i1C65QbQgNwviU58NpWxqvqSTwPbyQfje72SreAU7bBEYh65APu9ENnsCy",
  "key5": "3TxkbPUNXqo3drBxBTuwSi6ZvJMi8NFWhcZpGZ1SPHwXnMc3Qk8QREQVczNVT2S8MzzWqVJToDb4qiLMGJpf2srw",
  "key6": "21on4G329r7qVFekthX4NFVYyv1vF666NN92fgBDC6cyCydp52mx1jsUUgpTsD61UStuRNVer9ymxXFa2Y8dtkDA",
  "key7": "5Ac3M4NucZC8D61JLF7Qw1EgrHC2y9Jvfk3ixQ2XTAPzZ6iqSKyXW4EqU8qETJ23N8ACpLGcQNUWHx7RXTgsBJW2",
  "key8": "5JRiBuxhvhog26jvsumWsi3hX2avzdDVc8cJsbMUCkzB3Au2SKyfXSxv9jpdF2x6WRGGwUjpSQfiKr4TAgz8HxYc",
  "key9": "5tGutepi7PDjxxrXr359tzX7bwUs276zub8x6BSKot56rC6LSHu3ef2F3z1X7mn65q2ziDapgd3vH9kBH991qz8S",
  "key10": "26SyBMLZ9pDRkNSZMGc8aRNH2TtGgyhztGCsUyohBSd6JEoGGpCkWryEeKc5uLATuudnMSLTFc5Ycey1CgPELGiJ",
  "key11": "2qT86GxfjwpXM5Nzh9CFPPrHgB8jfpHSJHTKmNCv7p6R4ad9Kew8L82vRv18moiZMp4LTBmNSuF37yggZkdtXcZf",
  "key12": "2GwsuqMWJ7JwghKNuY7MDkdsSbNsbW8pYRNh7sHUeWe1La53G4WAyL3apFeV2TXKMUYEZoAB9uZY5Z9V7nDM3fKw",
  "key13": "DdkpnAfxn1HxFiwAayHwovPfvW8xTzxqEeZ1tcGm9PLwZZZTA1eZ5BzRYDNBTUGSggxS6GqXmUwJMtweg4XsyGa",
  "key14": "38kuAZJmS4hFSqBtYr4X1vp7DtNGd7TQ1JjFWoEJFqhtmoxWKddUMaaT8Hqgi3sWsd6HRkh4x5BbqbNBSjpVQNYJ",
  "key15": "2sBucXtZLEq7JbFRb9DFFqH8Y83bRNC8MSDeGp7EC3S4qWPQAk1gBqot6XAAhKvdSQPx8XJeXzz6W5FuTT3M4pWM",
  "key16": "4dZmXrca1cUUXAEZk4w6nRy8n6oT1pQj6UXgnH9k7BkmKsjmTkaeHrJNK1ZfELhrR5zCaUUgZ3Rksuy3c8KFaFtf",
  "key17": "2Nu4q7rtx8eiVqYDyVeqvnr9ef9xaob36nyaZ4qKCDkw6LAk3CJEN7pafdRoPnzed5ydKHd59ecggFJCkxJCbtFA",
  "key18": "2ZpavpiWJjx1W5oerau6G5dqigtZGcy9d9ra1N6nyxDQRc1SySxHStsfKsheV7EbY4zbrBZxmunSTyeq17vSRKp8",
  "key19": "61j5uHRfj2RvHfYUd7mjgRmWTLWgHMLGiPnQLQXCvJopbiJ14GRSKYUmhsUiLEv88fiUEaCJ9bCbDuUN8C2Frb1m",
  "key20": "5p7DbZyXCnjJT6nm97GuR4CcZwk1qws2X859empuB3Qgtr36sAdZfyk7es9a6WgMr8GSuZSNvJPTT1X1h9T8NVyv",
  "key21": "2SPnqjvkj6oaKpyW6WHqpZd9epfuwWWkUtiAsZGz8GJTA2VnBN8Tk9GZiDviBnTEmWLrWfB3gYvMrY4kwk5u6hty",
  "key22": "GvTRS7CUa91dBsSVgLWeUL1tES3qs6CsWHDBd7mUtboaWZVGzZpTuZSBqUSSnFjSYVp8GsWEjsAkJwX5mdLeayU",
  "key23": "4Vmw3uPGLqQNZ5f7ZgcVEzxwQgbJ8dyRaPVR6mb1o8u72zriTayc2XYuYvqP2GoJwc2XHf1GDPnFqsMyCddPigoh",
  "key24": "5ihmoRnahj1VAwB4XvQ91LeabNkXaFEE2F68yD7TxSfbsggpYZ96sWHWmaZbVw3JP8NTKkgignU4yYMxXRnHzMxq",
  "key25": "pginsC5fqx3jt138gNgVpURc4XjQd9ZgnwfXvKoSkfcRpLEa3CyeX96Duapu2RgnHxpKCqdRuKUYsQG4epifE3N",
  "key26": "2rWgZJmt4z8u9amwU11BiNJGNA9bAPBfYofQk3T4Z8QDWppk7zmKjNP8ADFg4jFFJFWfWn9UZ74azEEqcDSNbbGK",
  "key27": "3KVYg6k2wQKyeYRRPu7PPFpvBTix98qHuN71YdrV5fKxXXSyogmfrLHUF6uWe42jJJjry5xhm4kDHqJQQQtpbSwz",
  "key28": "4m6PjWbEJzPjUKYq12RESiW8WQY7w13QH96Zv29HXDKHhV9ChzZRQugYjVaFnpB9uSajRGHqqvBLNJg5W4BBNwSy",
  "key29": "bg2Y4hzDMPuegcerAvJHtuA2W7TMsTuCCEEVp468XvGJgy7bkdVgyq2swNdFbExiZZjAdTDNNu7hGyyWhmcqZDv",
  "key30": "47bzAENo4CtcD3a8d1adTct9ghhcMwffNRu3Bfc4VFpFepgbvWqDUp1orWX1LG1C79QSM6h936Srachzr4U3TySZ",
  "key31": "jXGyFH1aHB3mYWjS9KmWsckNcecW1NERiyt5oL7cs2a8P138R9tTWVZbt9RbTJGhfFXXcG4GhwdDP7uXZfkPUmy",
  "key32": "39YQm9ejKJY4YvaSj4FfifbrTB4u3cZJ9PHf6gqponeVNXhcfeLpjBQrVu5NsUBZbZLXk3LSD64bERbeYo4w1FLw",
  "key33": "37B9URNUqseoXsC1f21coMXq3BRR8ZWif4dz1Xow8RnTvoaBCfiiecXTgh59tUcw3wbDrhjkyW2CHJanYhzzkrm6"
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
