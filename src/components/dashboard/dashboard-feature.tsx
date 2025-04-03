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
    "2Gm3edLRLZ8QEcVWMRyYFhBNkVCzSDFWpo6Y5Vf4Cqa9jb888x3C42nhNcuSrcqz7Hw4RWu42wK3nS1HC8CiUH3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23BgUgJ1utwRpr5h3FYuXhfKWedc6NYip77M5sBp6LJo46Ft3R7VtK8oVwbrsbYHEBbPqNLn9jC1FrDS1QbrXFXX",
  "key1": "26gGpkWNRXHoVcLmwwUX1HU4QqKDe2HqSNoqzPTEf9nBThiCJRMdtKujKPSKJ6zdyhkUL8JRBM3mJpYpd9oy32eN",
  "key2": "2pc1piWUUwCRJqfev429acAsPbJZ7ypF287oqw74PxsJpD7SrzDC7q11e8Nev6eNgTZqss81c6TAC1xQwcYeQ9sM",
  "key3": "5Qk7vUhLh5kzJVswL3J9PFdPF6mqPKTCpWCodpHx8AsDViCR325A3A2LYG7aXpM1BbuNKt8b5Z8UMrx1rHgoHTHv",
  "key4": "SuoRFpSfDGabfRtQTja68ceMx4yqvi2cAJSEgueG4shYj4BRufgEeb4RbeuagLxGPuXUkQ7YtbN8rCBrVP1RF87",
  "key5": "UAkqLUcdWvENSommwMj9nTY5WzBVtY6Fz2WY3PKPKygnDssbL5EMVLR1evLUy7YkxxDxyDad12DKBiZd8JqvhsW",
  "key6": "2QoZvAZaQvnFg6WocWttvBkFgR7g4Ah3U8VzBJ1jKj8edhVK4zEiGUmhyE2fHh9tkzv1tohnLUwaBqtFhyxY6E8t",
  "key7": "xwHiVxPfgrXwCdFxSWkR5nL586HUf1r8gk9x9NjnZU5yufC9Aoj4ykbQjLNg27fbDtuuRjitKJFq2W7zLXQMDgR",
  "key8": "5wyaaB4uVq7HUD8LH93nSfJPRntpozh6jJwRoQV2mPke8cDSoEZViGwMJ7qZGo98QNvGZww5k1udjNvcFWtZThZR",
  "key9": "39SmW1z5TY6wYyevQeQZgZqmxKHoPXAV8m8fKf5eydVvYtuESA9h4QnGjhMmb4aW71AL29dDHdpMTkb6rWHUD7UR",
  "key10": "2wfw4aHjSiNk7BNb2nFj4yJxCgyUCvT9vsAPwURp1pMmvcVq1khLTfZ9t6p17iJG3mFbVxE2d8RQaPD1MtFm54y7",
  "key11": "3tGMC7TjSuBXhZUKuqM4GsxJb615bmtdTcUeyR44v5wV7WEY2kvRZugqRdorqkfLvMWv9rCT2VKjhjcYABqJ7mTZ",
  "key12": "5EFLS2oAPov9mUrf3H3r69zeMn5ukxB1MJzf1UEAA9HK3HsZ8Yxt4N6AfGxCkmnBWFBWcNbxEVNZ5eiLsTHMDcM3",
  "key13": "5krsBG5jP57Sr1qM5vrRYn7D9vDh3c7FoRMhGKUDKQexWGhpzY2vYw2MxH1ca4nx22Fr8CNNb19FDSzBpnNvHk6A",
  "key14": "4D2HdUXkfApTQRuYKWAvSnNGT2m3gre3RTQr6XKrX8GQboyoTA8EnBXU6MiU7n7EsNQUu97b1G9jE39TjmUqKJYu",
  "key15": "4G4egaiD89x9LX6DquAgPVWpM5t3G5knsnSy2m5pBkAcH8Y6BJE6KvovgPp9qBBv7R47mz6K8GYXGzDHPy7UySM1",
  "key16": "zYELvSwCHxhnxm1UUpHvpLojVxExtPLaCLV9FfGCXZPPJdTeTVza7S4aVUeQtV7RD6zDPvpbDDgUgKdD2TeReDh",
  "key17": "i7hSQqKhRYe3NiZToYV8Ww2qZRbMLv6agAexwDB2i5TiQeLWqpF1qzqcd1LqyMLCtsiGbMFWpPBFiC2Pzzci8s9",
  "key18": "39DmPaq3MtQ54u4bpYXJyCzLrboV8vmiCYFSwMUUxWWsJgLJyNJRyBzy6Naj4WJUHBA7rTT2AhwWNruiYbBbGA8r",
  "key19": "3s5rnNGWvkvmZY29Q2h2d7xjqbPudme6K3HLQ555fK5rNKuZ2ScjT5CNxjeCCEHL6GyQmDkQ5VoTfofZfJEFWEAt",
  "key20": "2v6hwju95XbJKEjC7Ce1bXKHupgRqPjx8oeLPNTzkRzBLop5MCptsHPpDc8F3nMmNy5j5qTG52zBKB8eaAWm2B55",
  "key21": "4kVg4tYBz1VFzNEkpujeaARaHHdKYjit2o8DVUhZfGRUPnnQuwTafvBSx9YhK8AciWECeZyvjvr9GLJR3KCYiee9",
  "key22": "28BnPrd28gRJrYAZNtfj4NNiFaGnw6u3vx1B1Aj6g439CL5EgvToAdRAqhava1k7iqvgxwLBjC9Z5W5J4TZL69Ka",
  "key23": "3PZXYLYbUjuLraV2ujhCwqU3Y2VFAvrasjTxUjsKzfLq7R2UUKs47pRhSsQuHwuZBpoTLHxeeiQgEujRtx3ZzYCd",
  "key24": "2gAEfGqw2on31JJNCu3t4zvbswP2fYXsMFZ3NGTt8QRUVtga25Dj4DG77PBd3B4f15q54mJBX4KByaptpQxd2Z42",
  "key25": "cni9hZKGP7xbSMzDybtBADMmpB92q8ke9EGtoUwjukkzPy8ZrjFn8VrkEAaoBkb4JqZBZxnWetozCzjHVVFASDm"
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
