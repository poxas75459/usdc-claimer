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
    "5YcnGPLHbuSasWnyrF2VfVdxvKNzHp7Qn4iXUh1PduEvM1oeAYMLGkCvYxbXdma3aNB6AsH3hRpHgogeUMtMzshe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dLRvVK5tGq2Gxtf1NrqpKLYYBXo8tLCGCTmUMzdLrBgwfQsJRW1P9kDjRf2FHFts4QMTfNir5JNLH3DJ8iaA7iU",
  "key1": "39ydSyZQnFzN7QJpjsra44a7MAXby9wYeomsLnBhA8FXXbKXdKJ7rRVP259j1W4LuPHCdS6HiRr6Tk7oiD1HD8CF",
  "key2": "2dHyirvr2bQqFJzhjoPTf4n1DJtcqbD1nsKuJDc7v3XNF8PgjeXCbYYCTwi6gUNHSEjhwCkfWNp6PutM2ZvtGaB",
  "key3": "4V1zGHaFQeNyfeoVkLCUGVa2rSqDA6rAw6e1dVno27mF8cHcdrhNJa8ahJwPNixo7XxPC4so5XoT2X9SUBqRNfjN",
  "key4": "4DgdKFiSn9eiYJq3vBXd8sd4PL5D2SAZr5qNTvC36fUcDb6d4cG2GBLHwdFn92NaFD2vhxWBUH6CWuY9R5wq2Z8z",
  "key5": "5xPpfqp62AqjsyWi3aUTo81vmJYVwTU7GuFhEZQwnrrabuCkyF4EVnCKH4v2PnXzV9wp7r4rfDQ4C7Gu4Prpg3AM",
  "key6": "2fFBzLdiKNsSQHxtNTJmkqhRieoo66HQkUCYncwhSULY2gRYwZzzxyejXwqud1g3xTt8wY5sqEj7pYFPMz7MiTY9",
  "key7": "3HwyRz1d7VNwYu6EMK39LbTPNZNCLg93tgv9isKqvgJ3Wcpq2GLADUTMK8YKfNjJDS3ExbDzFCpbp6EQ5GNSbgyf",
  "key8": "4T6F9nnDS55t1EcJFa99YyV4S9YXqBk8uDKo4Z9xUq4wybEW2T3mG8qkiT9FyufQ9co18mcTTbHWLk5TXFCsP6q",
  "key9": "4vRushakmo3A5nZFmKb4wJAkmq7HsX5Zg9KfDzFANor91PXxU91kUKymEPhRGQpX4WqqgugCirDxGsuMWBVtvPcj",
  "key10": "2ba24RcGvCy1bRRUMNzZU1hS9BaYJ8GG2rgmU1nMUhkD8gBVwJoHTKFhjDT7pCniQaGkhGJQAmYDDdPTJdiMjr1N",
  "key11": "2prufwBvk4CfJcdSbdLMQU9BWagijY7RGQiVyzthQznCNVphixDX6rDeA5C28Ys6sfKUPVnZVe3SeWiTvQR1gQsD",
  "key12": "61dMgja8qQiJhQFuhm76eRoV4SGrFQ3TM87cRdDubAV9YAAV4zBDmZc6HJe8CDR2jbokXYSjvPyeR65vUxpGTTGC",
  "key13": "5jEDBts4RkTgrJty42B9LmzexfqY6n3Q2o8hSvtk8w6ZUy22fCRTJ4eWuHcSoTxinbiS3L24SynygR5CcDt5UwW6",
  "key14": "3c5aZf4dx4bxMg2ZTxqdNGsKBu126qb5a2JwpbBxQ2DiEwVwGKzcbRmyHLsj4QvnKZTxrADfGTJwgxDjz5Rsjsse",
  "key15": "19gsKwYUJbjqbJAdXbMtoD6H7YUaGkN2hrCuqCU19cP11qr1pQNthbhyZiN8Ku87EXgSCxbVtMJUfwc4T59nHdw",
  "key16": "2tyGd4zYnKFcqc81QeCkWL3umfutm5YTftZvzVMMBMusfzzuNkwpZFPH9WKSYgEsiTySffqCJSXZtbfg9aZCHAzV",
  "key17": "3P5AiNKvAMPoZrFDJWWmt4wpWD7UdyDzozQhQqtJvmo7BZh4f5HvQecKUCAZZop8q8M3u7Epsq3g1p3AmHY3fWQ8",
  "key18": "3FbV8fvM1KGDofTeUUtApNmGr1kzSb6hTh8TS1K5dJaf1ZugmHK8K6ytKFAJ2BeBMZLdoTzx3DmwL3f3e9v3ccyF",
  "key19": "5RGmHLyjZ5VDqYYTzoRaACj7HVbv79D9yXKMdZz76droVDirzamHKV2L97CjLBCBp1v8p4SNdiBrVqBqD5MKiZEq",
  "key20": "5bMTFPsrZMbL1vyd2Ld1G7Ta99XPjYPhM2xDLLxAcUyPrVTfyRjqDA2CoXxt6ehTiprNBKPpFSzRQ3dpYh988ZiJ",
  "key21": "5auNDsuwgSA6eqjvemxtKKVeV5bGcf7py3k1Ct1VhSXuJWoHnnuSupY5RAckp1t4VeZpAvi2TUTfBM5p7eEvgUko",
  "key22": "5NapD2TVhKNuHM61dB7gDUMADqT5nC2m3SWU5rMPpym7wHQfTAfAL8cKRthcx3S4NASgQ5hGm3kMawAGbUJsWFgf",
  "key23": "3L8UCjTEatpxiydJWi3XvP1TQtnbmGjhbXX7z6kEsm4mcb6o7v5ef6L9iYVrQhsEYiWdx4XS1EiM8MpfXo6iJs2f",
  "key24": "3j599CJ5AL353kHTvk8mu2pU26eSqLoHjyENB2rRxRfk3vZVtVAH7X6sS55EDFEbWQWJ4vBUn2cqm74HbMJMB8Vf"
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
