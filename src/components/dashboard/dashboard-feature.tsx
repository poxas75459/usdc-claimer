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
    "2mQp7YchA8XJ2ZjTaDnaM4sJhPCSEQxgobNXxQEFF2zcbFm8itJpmT9q1N4dTVNcxQudDxhZzdmmkuAkejeBSisq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cuYxSzbrTvt2dUBsYXH4uFViBq6kVQSkGmyFqYThJUgazrMAmKLwB6C8iG4REzPxdcpHsGRoGvjL3kZoQ4SAG2c",
  "key1": "3HzyoPEzCtW3x8fFdB3gS1QTmMcM2LYR2ThphmzCLNNRoJ8xCx3GXZ3ihD2en5Nhkxe8KUnEH7SRLCcir7wjBDko",
  "key2": "3FSzaziz2BuBpPiuxiyB6Z4uRa3PrieaxesezBPzZAnoDApkrgL8gyJWbDsmT6UmhpFeJ2HtvvBAuQjKcKdEukDK",
  "key3": "3X2H4N2co1pMmgH8AQ2iZEKvtihnhwHZxxKgbbsAfbGMe6XDNePw93BtfVQZgw6UqDEqnSzvxNen2Xvn6h4dHZm2",
  "key4": "5ULbKymSju8fVtVzKSrPH8sbrpanxHrz1hp1gTrW9GyrqpEFhFkpfxGDAonQP8jfqYhBdHnGHLJTCBt6JuYSx9fe",
  "key5": "W8UgCDo6tdfKRfTzKe6Ja9M6uhSjCEePS8jq4mFJSFGVpjwPUyGMUqEYsNLFhUDinstdmhLxVhKQPDaAGCYAJUx",
  "key6": "26Bfgy8aiWRyqUqYc5cZpZH9JcSD2Usf96LTkiHSxQk5CaBdR5ZhQSy8KVgHHnGkoZEq2LscDd5B1CpHvRDNd6hu",
  "key7": "45c19ouJVM1cjrC9fdwNm9GsmzaFv3e1Nt9pw6eSjwd5cqhEw2MHwnWvpxbmc8oN4GGn19pbC8zEBTJfemeX2z7Z",
  "key8": "4tkzb1QMKHw42n3tEJ8zVww5CmsrqtcYUMpJyraNrTPezNs928xAucFe4fqQTt6wu7MjD84XFtP95DyAMzJbavdf",
  "key9": "3eQBXUHN2iGQ4J6B1MoZ7Lb4NET8NZzwJqHojVLfDVPHHudycfxtMCK8pykPSvExC3VLuVyAS9WcVx4Cd5wPzBqw",
  "key10": "2HCVzsccFu7PVHfyW6d1H2ApNZM7J8V1CE3A4qWbrwqc7Tw8YxhtvMnem5TAcDWkq78s1ifFDDLWFMwumxqaQYbt",
  "key11": "2i6uXuedKXPUcUQrM5EZQveqmp5oK6FNiHqjyY8iKd99wst8ULbKM8PkujDzU3aVXSx8ZWnbDQ7crgMAn161UzDc",
  "key12": "5zth6xxFBFLzJ9zWfggMARAYsQDvFkbZzqJaQE21niQdMt1w8tcththmbPtdaJ1mKXyXmTHSm8X5SNoCH1tPnyPY",
  "key13": "4kLqvKebazy92NLbKKppGGiUSn4za8fNzsKgFdJmWDecCcxZLSF9on2JcifS85PnFv3miXNE92NQAo1XL2BYAD8q",
  "key14": "49fcro7LGihmpyRajFWhi6U1srHxRFzYfXLGFsqXtPvKDNs6kNsVteEJ5xDxAjkq7UBuPxQfRXLyxw6wCqhL97Ky",
  "key15": "4YSWReNE1m9UyT26ZSi8mL4f7qVYYZNGpiTnfwzFh3KF5tyHFxeuSi5SVn3aUwm5Gcj4Z5ARVcCMTNheWRrbZD2E",
  "key16": "i5t9p1fErRW4Qc23pQft8pzVz2XkUEsEFWWqMWqQZ9MiCNEoubitgN9kSyLm9EaCv9sJixXrKmRKfzFKUKnLc9q",
  "key17": "414aKkgkGwtyTooe8pxY8DkYFVUW5c5Rf2nxWgegLGzxVLUrvk4VeC7JTrvnG67r12AhiPBxCFQhgfPUtBXzRL4H",
  "key18": "3fq4mj9e9yqNb3aJfzV87pCWuViEr8QUhSQiMrLzZ6e7VvLNFnGR6jiQeMXTxicrak9ipc8NmFfHMriMcx9Z7y2C",
  "key19": "BB4wSsUnzt7cxW82RMA2pYRYLXfneAmr2eD3ZfgGrHErZ3FvRpiKLjq4qyMiRX6SWXgKZMiC8jx2HPkpjSjK5tg",
  "key20": "4Sb6tJaNXupDiNdrsp4CHA44pDfB1P8gndS3AML7GwgAVKrkzy7HQUJYkccb97EeEyAwN6CBGnHsRS85uvxfaRsg",
  "key21": "Rg7WLDV7WXwwNdkkfcWAkaL8FgrmrUAVwMtrtYA2ekjwNiKzoijopWLQi5a3X3VqBTHJujva7n7cizcTj4LuW9Z",
  "key22": "5cPh84L5HPHi358SktN27wsrAwQXHWXx1TUwedPbGj4hXnqiEAhV4b83vhNn7SPqgRHgGDNj95xKRiBumo1sVZBA",
  "key23": "2o2TzmFkpn5CXV2rejUmcENHpi7L7ktkrRZyFdFmjnwGKxrRiBuJYsGuaKhVjPsxWKct1nE1XFDdLVZ5GBFnjt6a",
  "key24": "CtkzmuC8NsXPJ4raEiaemFhXofZLGmkVHBcwSpp8fxWVqpSuvjD9MsdkPFNDv2fdJHbEadmYkivTgr2xENnRFhC",
  "key25": "eaL4MnqQReDy8CisrA1HezMcWpWqAKto9xWXs18bUfpAhA2BHWcambzS4vA5Qu3Sjb7XmjjuNGvyjfManrBw4b1",
  "key26": "3HHAwcLgmRCCCKMUzKnm3doHHXPA5wQuaBpcrtYp4Z8iit5r9tdReKKwairSE8tJZooY9FNF92GRoftaavCYG9nj",
  "key27": "5MC9XYwNmcYAMSdiDVdefiF3WMiJUwArsimQNFbJcTGjFRKBdqGN9todhuNUg7pVdBM3eXrUmZxFEUbBYeGFCm4x",
  "key28": "2m36zAVsnXodr1P4XGG3W3sezY47dhX9UYzZB9Xqbm7PuLjdm8yVwSHsmQw46fy5WosuBaRe437A49ezefint5K2",
  "key29": "5Ua9FsvH6cbmx1zhyZubXMwKSh4ckTojSCadKE4PBe4UafV6w3rP2e6TncRL1HZJWYxmHcbUnqk6pQ4qtPfHW7u8",
  "key30": "5GhVrUP4JDsZ9aYANoxfLF7MCG443B1vNAURYvNj6jZAL7EjcbNmQdSeP1tzdXBZV6ZQXprJhGL6EYrsxfjkX2iy",
  "key31": "uqhe3CpJNHjzwUkKQpg8YWzCNfKgY6MQxNX7rCXEytqntpZzHJT6xJbFD7fDE497bXiVqhVefjNnR4TZFXd49Vc"
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
