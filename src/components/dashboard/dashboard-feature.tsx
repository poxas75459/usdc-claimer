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
    "3Vc9MqGHb6NTc9835BdoJ2Qi7BH3S4wSzrZsH6gNyKqqDjfdzKNbuFdL31NfsVX3i87ed3D6uBu6be38qXK4Ss6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZwqJN634wRZwkdcE53W5AcooKR1sbBrZ6kvYFykcnffJ1aF5gxGBczxcf7gWcYASiwQitQyMi8uv9bCWFJn2Z7",
  "key1": "3hB3tQWw1eTS6W4ZCHvr98dhMmJmUjiofifa7GzRT3zjHfxtxkt7LKg1pR8QXqQaGErYAzyFM72mdmz8RscVAC4",
  "key2": "3exT5YSsc1VcP4pxckgoEt6Q9YhezaP7b47CdDpBArgjYQjNngLJ1gBEAKwfD6KVpva2yQRrbuKqdeVcHEizhvu9",
  "key3": "5JKPNtnaHGT5WMv1KZXXoVhYnBwn3UAbxBLRVDHJSQhcuzitUDiFFEp1KhnofKMKm31KUQpSbSdjei4gJ7JxB1SX",
  "key4": "4pa6SkDDY35oJybMYhnyRcbEcwBYXLMa6PJhEmn9GBpjhCjpHnks1Rc5Wf2eY5CpQizSEfgCoMjinDxYX4cxbLEa",
  "key5": "4mdf5wyEkxXPe6GSuRLuueHA5TJ9ZrCrZGPSZaBiJgm6aazZeXtWCpW5RFY9Mt1RnLYJhEgS6vgJqHqb45eiwTou",
  "key6": "2w9hgMXkwikvsLnp8TBpyGDdXfUHzckK95A8VeWGgrPA3kXq7LQLd5p9n6P6SmuNcBZXx5z1QRCzVe8cKiiAGx4Q",
  "key7": "4e3WSr5LrPTLUg4jvuqinLAshePQKVP1Vc7cXyZJFvDutodzaC4iSnZSVfzabaRBLpdtiJexbwTEHaXPxJgk3NN8",
  "key8": "4FgFQ9zRQDyiULgPD3EPyTJvAGTH5rzZ7cRXinmipwSxhZ7sjXogVwYuqWDYp3o3DxcA95rDKmzgWJJyQK9mibEg",
  "key9": "5oYhzqesuC6LoHzQJFAZYAX7h5bjfG7VzUm55RiBpffJMVezNShkCYFwxgUaqofiBMjBD8wpasWu2jRuABgJqBXQ",
  "key10": "3ve1xtAcJEbUVPkerD9fkTCSVshYwwYCyRM5AofbLRyAdMhpERXG4AtNK7FbUe7p6PsM4C4Rg4sLa1eb9Y7SfRhV",
  "key11": "b2odZUseReXVkyeqkN7YifhhMa7gwQD2Am83JK1rRxU8zQ9esi691w3aC6Cpyx4SEScK1tsmwxm2iojhy9Fzdvd",
  "key12": "4J7iZs69mYP78kfFcJT7t94PNYU5QcM34BwTxW5fo58rFFNYyv4rj8k8fqzuGnoCduKowA6SvW9WPeD2xwzMt47M",
  "key13": "3w4cqyMLAiYESfSNM3jTNPaMRfxtF1GLnTnq7Lv9SrRG1Jm1Kbdgb6iHXuYiDSXkvgp2Y8QQyRwqqxviqakft9gS",
  "key14": "4o5FpXNfc56TbVJnCU5TSA6QBy7RMN9oNUx3jGKsv3PoxZ6KMQ52GgJwsB2JTZMnTkpZH6SbfU5isqwgjJW15Fvm",
  "key15": "32tD1suUpf1cxH4EvgeV8xDpRv2Cr1GN98QcSpUkWagZyiWuF2eMJjv22ijbRRoiKBDA4yo6SLhbdfsMmd8MHk1W",
  "key16": "49krMhJ3oFsWc4vZsXSodefeo9upbcX9vnzK3peXQrdhjBLWzWHMPYB7eo4eYHL7p8d6YDkHo3Vh4mXEsGp1hz4m",
  "key17": "2QeFygx5QAaE7tVBSsLKNYFELnCT8Lmqh8JCqQxDVTju4VuxHGT4mDofMVr1fN9V3krZw6Hj2WQz38XqiPzAHh3e",
  "key18": "28D9iKLidTdurzaNGsb9qXkEQuLQ8iwyePNjmrB5mJHrXHCmyGVcTfyVK8Rz5JLc8u7QMCQKiy8sLMPcNipapgov",
  "key19": "3UYBxkp4zCzWQghVTbiCLG1rF3hEDqQWnHzHxLFqV9aaGvFeXud8FqSmFgaiAas356iBCQs8ewWrs21qpF2XjKTb",
  "key20": "3U3BKApCRe3si9bDXfR8aPCF2v4UVqpHVsdaodeusvBiG7YguoeH8V4q8XGG1bLQvibUMEjUgxfEjLdDCuJGhEDH",
  "key21": "3WUG3nLBeU1wsXwDmSspPq1t8cZ1MD4jQtN23Eyk3MfGvJbJ54MpP6aQhXmmkTBCsSgTAE9gY2ay1gHBikW4WjqP",
  "key22": "5aPYh3LDShGejYEDZDEs6pq4QxWHoBGdGAs6eWa4yBXHCeZA5QqPAgJ5wEyQChLFfJCVWF9bXvoqQYqsQbGY2YaK",
  "key23": "LH5TVbu1BMG5eKsbNFLQR5TN91JS84mAawzEeLmHjdqZu4YQUmtWqVZ63GPe8M82uLhwdaJNKPVQLicWPa1un5c",
  "key24": "4fuxp93jVBudsJyDnmYBzam53ErsLRt71d6nbqRzirJ4oNNPhsp3CXiJcusrTyVVHwR4EDo8wNDPkkXM7vq1zVwi",
  "key25": "2mfpGbSaRajPUCP6QumyQJzTUeSrvyB8unUKjGpX4wfRM91s2WgeyqBYdBjUW59gK3FxPWu7z5QoPVkZcuLwD3V4",
  "key26": "u8rGYLUbo3V75sJW7nNBaoetAgznyR5QKbqqNJJ3iLoD6BG5MjxKRUc9Q7mo2pqkx2uNFhfm4xuSN89wxQU5Bnn"
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
