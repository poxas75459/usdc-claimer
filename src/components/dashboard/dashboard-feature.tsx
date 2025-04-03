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
    "k3HKVJTfgC9V5BKspof9C5n35eBpogP4AMQztkNjG5DYumwNTjGQUUTNjsz8sF3B8SVxXJ9vPQeDHtcoX4mJPyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STLX6xCt25NWJTjniHu1wh61V7m9uYsCSfm5eGHJXQBfzTL35B1ZC6naexAgGCWzmHwfCFhnE2oKUtz5MtTvian",
  "key1": "4i4i3ZVbS6JZG2ZpRacDVFN7ZyzpPvSBe2mCVDdc5dC4EgMBxcUY2skDfAH7pLFNag8bQK5Y4krjfpHfZENQNxTz",
  "key2": "2sHajnZYNJK9PEvEa57BfsEGhL9kQrR7NEo77BFDH4hraedQXTpxDGweUWLmxcjkv6fkzJNzDdTpNs9izKN5GmFs",
  "key3": "3Vax1Mz3sBAjUQjHLwvWaAMykT3ZE3RZQYErBxb4oHw7msmbugz1w617TguKzzYBTm8vkbgEDfiRLCLFECW79dPB",
  "key4": "5psK1WX18jbzkU29qAccgqgyNWM7W6uvd1SF6V53NYe3tJx3dq1uKB3tBxqgLUGUhnVgu9nay3aLQ4vR3ZLXsVyg",
  "key5": "3KVRZVZ7L5Tb7c2vHGDZ3XEdY3w5GtZfmbSrCTvZXyZDytusFEd9fCN8zM4QKufPV2nR2CGE6A6D7L4FZGRsgK9v",
  "key6": "2F59dg8sMrXpvEGVHZy8DGUmGoEThrpQXtxJiV2fumwwyYfXHYjxQfXGAGPRPsmYs4Wz96ejFb2VHNvr72GqbSrC",
  "key7": "5waDkG7u4bTFm5ojFNVcMtj9zXKPtAm13gK78gC3Nw7LxGmvrrPNczb1vg1tkCdDVM6xHs6ptRYUd4pSwzhhT3YD",
  "key8": "4ZJ5fkmd3vwQqHz66dz46rhiWFXN2wshZbHNfBmouUQp1vFL1ehSz5CWb3G2FnTCJwruqafFKWks4zB2XTBLxZg7",
  "key9": "2L8TJLKe27WkXvCgHR5imGbhSJS9xuHZ3vreMooLNm5wtwmZYiF7CAS9nUyL1AVvnRXookXo54bpj5fySRu28UeB",
  "key10": "3cXje2Gj3V6cWTMw8gwk7jr9VHW97EPEPhvx2Lqa1iKrB9SK4FELNfrL9ZWPAY5shB1DuZ2rKPCb3PBm256jmUAZ",
  "key11": "4CfMbzLE4ieRd7tYRVoN32sagsJYyP9eE9hFjKWP7J9gmCeGgXUKwba45DwmFhyRQtfdXQYJYsqB8PADM7uy9pvb",
  "key12": "3mtRoQGLc6fFyzyqbcLiF5EuuhKWE3qRY5exBiQ5MoR9BEWk4jq5ojNAkpR9kgc5dEe3TtCs6K4mamowz9GRCUso",
  "key13": "2oSr67EfDVcv1vmb8pD5hQ1kE4FajbeUTwwKU5wHF5Mgc1RB75qgd2hrPtRY5G2vHgrb2uB6WYe7wN4eYif7Wnmz",
  "key14": "4nKa1finL3njuJQ3WrzRWtNP1fj3heer1q5Fi9PUKVoGh7JQSFPowBEdZZDJiY5p14BbK9ra7t1bM22quZsVRakD",
  "key15": "YMUjJaxYcV3HPcA5eTg3hKexSAG9mKv7wqBnRDUyMcfK2E5LQdiM41mxjb1DN8osfXL48QEte2iumsN9DzhVbzn",
  "key16": "J4otKSGLfD9H1gTz26JEMG3JDzrVgbzbzd6q5MgTrnGVsQg22pTNyASwTUz5axqkJqmZcKKQ4MRtVwGL1gK6CF2",
  "key17": "36wdLqeYMw9QxXR45krhkT9B7FcdV6kLfW6Tm2zGsp79Gp8M3bfTjN85ctTqbHFd7654sTYALcjUBEDQWMfmGa81",
  "key18": "5jnTdGPWEkkDSYbSC8BsuQtjTp1RdqoCyzoZN59fG5QUuydg1pc459QrZHxwKMdUj7UuosnyVAeBgVKYJCMifiMW",
  "key19": "38FJ7neARJ8X7R4bFbK4CDrAhETncnS9PHM86gEZpsPyKxX38zytK3X3y4K85vtLDmkbWJPb4RicdWkkj2DWtCKJ",
  "key20": "5Fx9javazxDbhytVLdMWrT9wNYAxnPyAvpp86PuuLreTitp5NKETnXqVwHHNfuPnBVJ9Lt7ma21fFcxGH6pMhLo4",
  "key21": "3LPVJaCPnk4C5wawneg4LzqwC5GM3BjRE3jf1qj4H7qzh1cHiJbGZwX2nzoiTS5Fh8P4HmzG1hKNcyZJK2q65pPT",
  "key22": "61h6WGn6FND6MX3QDxqL9XRzTbLWy1YKuhkBDUrbVYmrGmqqM56scVsocsgT8t9T5fvkBiX6TK1ofR3KKUmfz7te",
  "key23": "3Hp9qWDvw8YKLR8r4hMcnEhXMj4RYJgqH9tGVZaYwBSUu3z2SDZ8Gj7amr1hjLJJcamVMP7GDx1AS8ymfnJrbEwz",
  "key24": "9FLuJuErCqa43u52txsL6BzsQtnBKbx7dLCyndoqK7SMfrRhQtU6iP8t3wB95umB2zp3HQJBHD49FbfBGyEazN9",
  "key25": "4A6NrCtCsKbf5dVqDdeuipumLCwyjLc1fcgJvQkrNCXP355Hu7VE4gAk6U6eAPckVnqDHqY1xXLDC6bw3r3AZF3r",
  "key26": "2gxoWA16DReWSkm7FibR7XHMJJsGaX6n21QJ63x4HGoKHQK8V9qLLPQLooCuoR1QyPBAo6ka5Uxv3gWM96hmEYxh",
  "key27": "imynWBdYFVYUwAtNBhQbG3ZqiZWdfFoPZNozYznHLf9kAZhMSAvoceTMpALFocE2FTMgKKxsokMn1DY9msqKSqq",
  "key28": "r9zRyRNf1JUzM4stq1tkzPWvYXVQEgLD9h5RPmaAnv8SQS9JCUHSNungJKfmAq5gubkcds2W7SFpEsYMHoB7hit"
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
