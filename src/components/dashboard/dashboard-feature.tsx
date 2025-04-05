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
    "5NFhycPXdXGdVkDnHmHHhNCoRajFjrBCc2FFoc7YHzcK4EysZvGoQAfH4BprjHD37vfN6biQ16k8tVawCf33MMfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTpapSedh8QcrnwXCsFprxJzSp5gqa51jXHc2R8T7GBxznBoCPLdYbRdZ2rFmGzvz8dDoMpuHD8Zzgi5otg4LMw",
  "key1": "3rpEQHrnzC5dD36YPHpfR3uBsrRTExJbwm5nsQiuzMEEgM8EsgBz18oMd8c6sJGhGYa3mhoJxNgUgJXrhCMa9HXV",
  "key2": "4BqHKnJ5RvVizkG55tw87JqUaNeeEkPWguhi9KZpUyRDYXfh739UqAwNTg1gpoip7yzvPsZDHNj1Zdio1hZ5Dsrm",
  "key3": "GK7A5oKZ7MtquYNdYa5ahEFwbZkwuFSs2tPciijEwzzvPUjfaKK8bxwQZ9uybq3oYZZqzKpcA9aKjQ4HYGL27fH",
  "key4": "35EDNMGjH46DiHRHj9sULs3ky8aNcVSAjSSjzpDLnBmhMoectXVprHNDdA6baAsod2BYTdufUXbwWDpmcxK1Ycno",
  "key5": "qjgfvTsZ1cj5gv45NXN6tEruK3P5L2kAGsSuppYJu1Hgr7XKUmsB4ydBRjhp1ftyV1yrutDmhhkTMwxiA4bKmqJ",
  "key6": "67QqoKkBwDoq2cEn6D9qd9Haaz36LbAyFmLdLhGgncTbUTQ9yAFe2U8psKWfQ2NyBmL5TczaaZFRtRzozcT1wDUL",
  "key7": "xNeo9oe75TS1PRHUA52Cd8qS8vQJXLxx1Wdko8oUGDxFzFFK9xifjv1wrL1keyo9JyRbcBXqN6iAUS1fuUvwU28",
  "key8": "DnkQQDJUT17tbuBQra7DArACpJBXCi62nhLEQFe93wPjNkf1WQS95An3kn4WTGQPLpaVAdcoVfmWWMKgFw1G6kk",
  "key9": "5wHpbp2Wd19yf26QkrSywETsbx9bXbqjZn8sYicJp8irXdZ9H8hzxY8YXUn4UmsAaH1ph4ozoYeFrQV891rnqq91",
  "key10": "4jjwfbnUkhNuvhqv92fWmkWGTLSyT9Xv3qH5m5mqUx8uFSPRYX4NSFgaMxjGXaYXvq31WvfaVndYtGTnA72Loam3",
  "key11": "4zCNcVewPhgDGw8PAHw9YzLfE8F4PhzEkNSirGZGhFAYmrGqo9218DTPfxecnj1br2YK5btMxEFsU7EnQGVqatGK",
  "key12": "4i8h2QMxYwRzByjaMELMNoFDhCYL7G7fBAdQcsVLQYuccxYis9ndyeqSv4Y3cD4esd8zRF6xQtyueVjGnXdisZ9D",
  "key13": "3mby7VFFyaGSfV6h4PBCXXLmspNB19sDkAyESp8FFpP7VRtxH7QcRzkVnZGqvSAnLWpERcDZq8GYJVs8kZC3Tt9x",
  "key14": "CGHhzRTyFfdzepweraUsAcyZnkKpKtyTb5h53kZLWANB3rD1tHJ6nPi1cbXqrWJq83BbPDv5LkM2wv5WGXtofqS",
  "key15": "5cN6LchbLDqerMTGBQ9K16hhGjfpSNaN7KQsteVgtr1LRCgDKQ6DU8RPLpzwWc6YtNPhb5dVzcXP1MZVT6hgsN7s",
  "key16": "QqfgtsKMcGjh7aQ9RCZCy9JqyZX8NE2h7drwx3H9CzXhxnwJ8h1PqatdU8HugKPZ7g19RQFukWbZMcspecYYSoi",
  "key17": "3tJ2pgXBmRDsGb7LnrM6qJ8TpmhvLJ5mC4rFX7UJq6vwt89DCfMbVvmP74Mpv4iJ9wDCWLbw6F3BAV5qAfD5vKCx",
  "key18": "5TLkwpbkS6n3CRFkz4XDqH498dfcSR37WQQXLmC3r1HpPLHLDfAd444ZAjXMy4VsePtY2fh1oAcgjiGfsJtEcEua",
  "key19": "4NgZECULCgQYFXFH3gN34RTyUpYAJFA2xq8e5X8DSeTpopriARDNeEJ3gN33k73hqzrRjHjk3NCvF7r2GdJaNqzB",
  "key20": "4mqxsLwANQVhvmUeZzaF7NXyfHt5WUL6YxS2bG48j2nBWZQ4NF77vHpyjQChAHDDGkWNkNwCC78ufxGe7tvHy845",
  "key21": "41TXgTEFQGSLUEP67P1TSyUdT7UyCv7veGPnqaF9n2kM7ugNSKasuarvArkMjnR2CXRiad73JLuvUbxzqVAUnvT3",
  "key22": "4BvHPK81rrSEeJyM5eFUNk1tNoUyy5GBt7pezx4ot8FjQsAmUZEV5YDNjNN3TVHeD9qdJoyjGs3NMjGfLRZHPV7J",
  "key23": "49Yk7TRLRpYDfvy6YYi3igSfpe4Z7yEum5mRDRVuc4cfGQmXVgpthmFpqnFjABDVq37dq3AVZv3GSJ7zwwM9AtDj",
  "key24": "atMPnniqHwZcMQTwR9EMsBjXxLoktrZBXdhwrVHeFA46QSvko8GV4XyFhQeFV4bgrwamQixKGBA5a4RZ5f2TgBF",
  "key25": "5Azg1qZSNhSJyTNF8smssXtaDKg7PX8VawWKcHVUFzoneG8RSKcwHJGE521cptejDvoWQM59rxRuYzqT9Kr1eck4"
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
