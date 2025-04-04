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
    "4vvJZd1gmSVAYdABLdse8GHSUrRGFkmgkxvF2arEZ2EHtGJytM6c3fr9tEp5PVyZbbWxvSK16KZfPAR6m5zbjtje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fhQe5ZgUjDzEjzYD7qXgPYJj3qr6oiWn7pNxSg8RtN87qc9G7VkpGxAnVE29cB79EBGuKh5GJeizaBgwLkE3aX4",
  "key1": "4dth8Hd6jxXHcumzdEsSBQDECD4U7Q74C1yr1qeVmdrv6kQr4theUNerf7NCYF7NWQ46xMH2G6a2StF1fpQ3AxBq",
  "key2": "4rLdeBoU9dMu2fh89BhQ9fpGATj6chwNUgnntmgjopj18qBn3P6RRAN1U9tpMtuRVvd3Bxt8AE75rxsF8jTE2AEy",
  "key3": "xsunBbEW2oShFWX9teHLz2Q2893JruR4VgKiPdxBN1mHcZDxU2LJLV4BfTAnvxwy63xquvo5CAoJ7F8N7uGb9rA",
  "key4": "4atfunRF7oJrq46YPqYjs7hcdNL1F6oBkr8Rymo8PqoxsH817cGe7edyREg2oJnX8PphBpAfVLt7VzXp4k3dCJyb",
  "key5": "5og9GAAi6fJYn1dTzyhZzz5B47dtyXXpUg2BHmheG9ny2AVvofYkuQg6NLVpmUgf6TmpMWqmJUvyG8FTt31tS5Sp",
  "key6": "zDj4L2s4Bqbj7LXLdtPE226SZdWwpNadjWXufSkGZCF8q2w7caxMqPRBDb8YwhayRTC4nK6mBoJpk8CF33XCfVW",
  "key7": "3mq8doCuYPKr6gwbWXezP68HHG3SCcZWnHPqygPHV1H2bGXM4Jb5hnkfGMrbutMsPQSgPheLWDqoJtmKd3K4n34w",
  "key8": "517YrqRgvrPrj3vkYevLJUu7jBC1p2aDkyiXXZVrujUUCsC4YJqeHnxU1QJ2YVJeSRBbt7GL363FZY2vmmvtvwyt",
  "key9": "5w4SPWM2nfVqmnAKRffC14rJv8RYaWxESipRZQuUpEofyorWgyZkagcvfCMFhHYiaAEEXfAwXkmrs6sXuEb1z4Ys",
  "key10": "Ash17ZtP42QsqBumbsZBqPYAsDSSDwgERzUspuqqMpRoDtwa4tc2KkuqFSpLDhixv3HXRwu5tNP2LKmSqyueU9z",
  "key11": "53EMxG4FwJHXzvVdsLYdmXfJXr3CpibvhgH8EJxbnw9z6eKLX5VZyoEh4PxNAKupvyWSKZZFZE2HfYiM47rjXGw7",
  "key12": "3bVrqsth9J9K9mBJAuvVfX2gSVbvmxhiE57xRzsGCWsMHoyzNFSTScsY9SZR99WxiCyGaCy3TqRHSR2sWFQV6hg9",
  "key13": "2hhjBafGauxmWxBHqBPgzHMgLdd3eXeMLvh9b6fGnVpra9vvhkxc371FdDUkdU4s4KMgQv95dJjQ2P4xBozqK6ij",
  "key14": "5Z9BfQ2JUh89p8UWe5i11Kw7BHMkbk48z98oBYswMgbZ4tV4uwLJUCd3hZdwTKRdpVPsUHLZnugR6XdD8Zei7RYP",
  "key15": "GAoVkiCaRymzKV7aUJyVH5CsjMo3zf8Bpf5XxSkBwU2bTRkVBXF4WtKQogAp9dNNgPVtA4G6XY4gqoj8eeZvNir",
  "key16": "4s9Thx3vhiNK6TX3dvhW7pX5LbBgYFY3oyiQEBU8dJWMpX3DixSMcimzJoUtiDNbztbxTDAN5aLtvrqaGjc6L4cA",
  "key17": "5E58MjEU1QkDcb79JJ4ZBR3veFLzSRKniHHrp9SguqqjtxJfqfhQLi8WEr4B37giaddS7PMJUQhDwTPdCKc2xrh8",
  "key18": "2zHhKA7j1YT8Nc8XVXr3JJzzVSsjENjjdoXZjfyxkF4FnX4KHZhhpGjYKqwS245pwcqHdfxiVYW3pzkNZTH8xdBa",
  "key19": "UUYRtDJFRsFLDCr5pE3JM6BicskrctwsKuyRAaE2yvZZ1w6tQXVig1jCgo9fbwAyrMt23NJMRivqmxbc7ZMt3Li",
  "key20": "DREfkvQZxp2VPgXUjVWFpsy4JG1k6aM2hvkq9eeRqqRP7VDcKQ1UZqnDEZSxCLU8wsrwGfGBt3WsUCDCuupkSy6",
  "key21": "3euHuKu6NpBARkGdvGLM5xAXNPXC9xSsqiF37ewZkRpTuAjUt61sYLJ6txV8XKZsRJdEsxKSW8y7EomuAAvHER9f",
  "key22": "HB9prWPMjdCufsPAyyL8bgUfmv6KP3LHZNgoqaKTfjfB16vi7KLRnTAe67XwSH1Suqiig1HnbqTYihVM5SPKisu",
  "key23": "4PSxF9U8qNEGxfhL7W26M3VMJbDSRTkpj16vVFqz8RS2UMbUDM7rBXBFkoQH71fj2PVmiJ9cBMmF9mnbNEHj8Tie",
  "key24": "3YbpJwxqdm5jyfYGzRbstmiW2XzCkFLa3o6ik1jf33u2mgGMoahXqYir8C6S6p2atsMUuSwk1SigptMCsrUYYmbZ",
  "key25": "2kdtEdkna7iax8HEdYf75VvrNLjX2wNtBVZqVkEcVsgTqBUxodJ4XGozUVqsQxwzuS5ruaY1LD5XwbrfJGicWpXs",
  "key26": "3xqm9ZaDikKN5FsPEHyCX4EBQwgqQHe4tguPu6FcgVoHpmofC8Rw1z1ccA4MFVRFhqqX1Uicac1yEv3WYdphnWEC",
  "key27": "5ytCkRCBFRPbd868v1wC58xNNisrXPwwmGSTH2m7WDXTcicZyRWjhRvbvrEQCTkS9owV22ovPqG8pAccDADU2goq"
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
