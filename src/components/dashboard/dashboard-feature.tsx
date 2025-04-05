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
    "3ZpwaSmPhhm6QJcCd1khfzbzfwCkHujwourZzbe3p6RMNwZJnN1xpnhkCTYX23wSj9N5VRR2oLyYLSsXVkZrMJvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7P25P5xWCMe6bjdNzP88xRJ5ZyVYyNGdZx4YMLrWMgNMzfUXMSLePJNRgxB35oSPzWNNSnqfqbNK7bAtkr7FiXn",
  "key1": "4qg1dWRyLWYF4Fn4hz9sbDvNg9y8ASZUnnfWdVjZ1zZEXPrks8UApKxjA5Kb5WMR1ttFa2uLpvrjHhHWLuuEccug",
  "key2": "4EqAxsHzy3dugLmX5GXPqeKzpUZCApn9ngnHZBYnRwdiVDZkaVXLvekUkqS3z3DxN7zY4KEYZYVHjbEfT1ENzCn4",
  "key3": "2Chg3HzcrMhCkbZokNX5eTCkogK5RNx6scuJQPgFonNqCK4ZosRDADVA3h8n4DoCyxmXQSyxEsTPsPryH2k9GZAY",
  "key4": "4csDLXVyLTPqBpPC9p7Pj1ciz5F87bDkSLHFhFtJqb2RGeYAhFUWz7NoaH7c8CcrfCQXSr5JH6jjpUBePjCwcSVs",
  "key5": "2nQvuL1kPbQPkHc7NX6gKyYyRQnUrbkLbzmeeGLU2dKSHp9MRmuQNSHapudNpZ3hjemPtDW2mTK416JrPPBeLBz5",
  "key6": "3TM6fHKgzBzLkVg7koWtUYDdtKpraTY2c6WGSFrAT2aBBKj59HcfKe3Mdt31UtUAmF4R8VTTrc4ytf3kQjrAEBXT",
  "key7": "4cLucAPifdE66G8Sa2YgxX3UKHYVHvk8m248SYzSiq21rEsND5Cd6UDTZxWhAG6j5sUAqNL3hwgYfJKN58zuvs4N",
  "key8": "3juS7bBmGvieRyurL6CYuGeeVLEFdsDWb3JeTMp1oUyoFSBj9kjm5w1U98hxev3KXK7dcYZWEiAqvwBVmXyCg9Sw",
  "key9": "5kho2QMGriEm2UmfJuUC1jVcUmSwVqfW776vvUs2J99RPh8jyKRvFX9eZBh44TBuWvk1cBT6DJXkW366uqBndJwD",
  "key10": "5khMCz791N2HwS9wa5x8ydXUYfgyJ8JegCqvdrMu1XDbUu8NU4ALpTuBRfENhjrUF4e4SCkaG2mpTVs39zrGFoF3",
  "key11": "3LH5yv6oAVknEw8HcEFiwQjGTrmqvhRQem23YR634HdQ7yEaAepRijE1cfaq7NFVfhJk3U47ZxRsnyhevs6eUckC",
  "key12": "2B56SyqByAmt1a3QEgyVPPNZPCDgw1jaQiipNYu2Ve5YSiBUWaRKrvBNhUWY7mqQjYe2YCnzJQ1Rp4nV5smYiSNB",
  "key13": "2bfQTE5sh4KQP4UcpPYz4sRQgRpAWG9pAtJ6tMYfVxPJCnX1thTo9Y7PUfLAt7D44JXWXyLqp1GmcUxLUfVpQyHr",
  "key14": "5orfgqDiM2vwzWAH9hULRBvskfSNucXv3hUMTLA1AHxLcheM2REbG5mUouYU8CVnXMKjVkEo5o25UyUkAta8MWu7",
  "key15": "4Mz31WWMZ5h1x8VQJofmVkxh5ZFpsaKk4SGvcNSiv5m8zmJ3ug5eqP71G64zYZCwSgctw9MX4QYJdqvjf4RkqU3M",
  "key16": "uiuPYP4Aa41xTNV2BcYkV4tdPoX3zv5yL4Q9bn4wCUUpFmxj5qowJKE4j7dWBtGoqwMHMTMK1uPn8rkPKgbrjia",
  "key17": "5ps7PCCCHh3Nep74J6CN7D4tTd8J76aXDkKPefcB45hyUF56YYmX9ebucSp1fJF9f1VY4ABwuqbuGYK7Ar1SHXxR",
  "key18": "2svufDVgHNzR4NNQ6absPgcHdaXn2z3ht4L4HLFBPnnLrzQfy1SgU2MALPc1fKiFnKrdnnBkJM4ukH9b2ANXpPMP",
  "key19": "3AxUeY897HsvSpxHgSF8tqFNeh1oBzpEAb5ASTLTUo9G6X2eESSRWH7GsJgRdkfGSfS3rp94ivovcMqQiNsaQ2Yw",
  "key20": "31sZwVrhJdHXEv5W1XhFQ4mqQNr93iubPkD1bMygCMrTSkSxuJKnrceeapS8BAj74WnCYUKqWRqM2sfM8CehMGsY",
  "key21": "4NYEVts1NRLLgNcMA44nPngTpXwVUgJrSvDdVTgSj6ov63dZLTWms9esLq5pCLhdzxo2aSjfPy69mjcn1xVaFs1g",
  "key22": "66NLpLR1rHVAEGXuTj6XQe7hfE9apgrPHxiFdMQQrmhj5B61ZSeMEX5oquaVCFP45fp62NENTx3WX36ccvh9uXcE",
  "key23": "2498UxGFRwVq6yVYL8UbrFX5rm8qVGn9eKM2wSQZt15MeSq7DKRcBj5EaGEASd6jSybLc2Dbijoz6VkCeaAVPs8C",
  "key24": "2xeVPyYfUYZEBjnQA9ybzh978ThaPLyT2Rythwo2KJxpqF4yVHY1Hv8eVhNyZ9B7q95QoZE9WHVazFiLbnQyj5Yw",
  "key25": "59c4ZocQmkeTsNzTKFcBwPKtyoQHwmcTwuSw4ogBR3y8GxgcbGFo9mjLxmdUXzpR6gKBWfwnFqBB9TjRtmeo525n",
  "key26": "3sDjep1eHWX1Q6yyYrW3AVojBGBGHz24eBt7HvVZxGSLXox3J9br31M5MFwYSPhC413Jgf33w5ZuyDA5NBbUgTYJ"
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
