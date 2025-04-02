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
    "2MedKLnmihomEq7UMGXoCg7PG9zxQAtj2XLwgwmi1ZbgvfkXDuVSiAUfW4m5LZgacxMtht9tYhCx3DqowKdLdmvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yn3LTxrCCqaQf4sr6BTV56gbd1RENyeNcnA5h545iYUR4FEjUZxdgoYaMtFCpNgdJ2cqXGQQuMmiANBfgGp9MGj",
  "key1": "5WZmpttMbuSmTQA8KieYkk2gDvhwdXHjbUEmAwsVNK9bejKhMZwAaQnYyiAcg2AMNawtZq93vCxoz5LaxbLZ4RyF",
  "key2": "3AYTTjEjedt7gWDpTqhM3HCc2zx6RJBf7Y5emTQQ6yC26VgeHKsEU9WNEr8MZTS2zceFuZiVFZZE2TxSg9sBSpyD",
  "key3": "5RthVTLLD97FZ5ND5uNWkwBGd6TSgNjbEawqd8f3w5xRd2Bgwyc1qCNmSgspLAXhPAqzdVELdw3obhuZNnKYwFXf",
  "key4": "2rNDDPEvpojTSPXnQ8mmnuj5rpK9irFjLayt9vV3WXq5ZQ4wBbhZ3rP6VbhSQZSHDJ4eVNKTU3HQMd2mfUZvdZ3k",
  "key5": "3RBWWzx2kfyC9VaCsE7gko5DV6j4nh8McCa6y324STtCWkWMezagCjXThLtqxMGp3J2FDGB4BCYDy7YWnxYaGfj3",
  "key6": "4SqxaXG8wKMLWhjGHLSKQjfSGQ1sEsShkcnXvX1zGdns7KNYPyjKoZ1hFv482W413fpg36FRUBLMcXHgNEMZB9s6",
  "key7": "3jkbPtFE3zP3Xnw2cGqWbEyVnKx3CELrCNEcpD6YxzsgKntzynU1HTLv1LpDSzEZiBThUiqtnh55Ww2W1ERSiWkw",
  "key8": "2JP74f2e9K61SgswPvwT5hVQ8v3ezfCge7L8VtAHT7fRTwAKhNH6kAm7dhhwABYrvopPqAn4KV7R6QCn6B2UocYb",
  "key9": "5PaPtoQg1Pvza6Xu64yJqRtVx1FG3rWL2Fq98MA5cMZbPPqSWbdyWuZTh5wvDRwGHueiG5xDqLXf5kuZXPhHAaTg",
  "key10": "MQtoJoMu3YptfXUXcC5jcLBAkZUKSu49WRTKzW3g3VZWyv6g9Vc5phww5XEPveEVmnBfH5ttf2sKb5bDRBrS2mz",
  "key11": "4KXhGfcRSDgD3Qc9ApzsAkaQ4BitGjBw1SaTGWQtx9EYXVyMVQbvJuYRWucAjbh95HiKY3ab3RS1e4ymkveiSHWQ",
  "key12": "2vm27jLX1baT56DyQFi9YMXvVhrA1q1M9di73xQg5nXE9zvacL7Zr4UHVw7XSXtWTrex7ds5VMVPMTnRwY2amFfg",
  "key13": "iXasfdsoxJstmrwauxj1WQqWgccQUGSvEbGZSrCtVFypkiJdGYLChqKpkBJo57xg822waoobJDnMB8Z9am2zCdc",
  "key14": "4s2FgZRHGqNfNjPAgz4gAdu5XhxjPri18D4e624KnqykGcwMNFrHVbSqFZxLsUMPfL5M4uGhhAVF152VYV1jU9G7",
  "key15": "cRMSQZkgMfgseo2CkVihe2z6sr44bqCx1reKoG2YDmk94HqWMMS3nz8Fm9NZw1JkEZ7S53sEa3fgKC3GRcVcnke",
  "key16": "5RC7Hf32fz4ZSFMpa48H7hPc4Z2PgD9PqmyB1Hv4vsfTfZQwZdp7YwxQv7cBJdTfv33yeVf3YgXQ5q2oYprf8Vb3",
  "key17": "Pamwi4zPPeyZcfwaAnUntkzKMmQsEUxUxZy8hZxjyAw9WnKEGd5fjVvaQkNvE1uaDcLTvNBqKNctchozdoQBPZr",
  "key18": "65BCY2osZrqKMnB64tdZVnbom1zrPtCxtCZNPtX4xdhLkKqdn6wqx9Ak2YZBA8QdasHD6uahvw4JwezEDiXekWPz",
  "key19": "MqD8KfKvgX9dzDvGaVg77kQaREUMyUkxVmsz94UFLx4EqmVfzeUdZnhawuM1LgZPDxNwidw42MKeZUFVFfnmvrQ",
  "key20": "22KRrCMZCjEX7Vmexo8EiujsNZT2accR5qVeRnwHBAa5q14oJ7yrA4QCv4piKvx8wMNrthWQFDjvGaaKngpNzMz7",
  "key21": "5JaW9UCWAvEi5dYqtyu65HWpetc1s4rMikRiLyZcJTpGq7ohPgK7Q8hHchJRbYvcMV3WMaV1WCYxe7zRweSFgfeL",
  "key22": "mGjKVCZHYV8zjmv8JKmwMm9BnpfxU9hpig7P5fspmMfE8BuC1XbQZLwUMLsKy5FZHPA9c5i1UWa56Xx1xsUzwYH",
  "key23": "4XaQFVDF49ckh6QGowJzK9u9duweugyXJ5eZDwMW9RUjxrj6QzfLFj2E6LjxGBTzJh2XkJUxVHbhynG5ewvERwUE",
  "key24": "26DAdDe8invYzNsYoMLSchMqNjqSjDWKpZFywrasPFg4J1DM1XECYeQqTUfP2MbNX9xXwA7G9dkXXSRuM5HLw9Nf"
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
