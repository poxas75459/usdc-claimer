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
    "4TQwz6VZsrAqwy86W35NTfwkHXrZNdje8f93aTK7yjXtmVxyx5tc3qfLQrTZZWQw1bG7ykXFxgk5j1a9itxpTwgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sdDNk4J9aQRbxghE66SmRXgZCg5hDa8Y1jboo2gJzWaVFzdTUQkz2mdovCmkXMNy7nx4yC2bHU4ipay3bQxfPqu",
  "key1": "3JRwT3cP6XaDfsYWxASUjyLR85QnCkEwe4qin3Zs8zAb8mNym5HeXSgCTMkXvSvhX5fQ2jqyrDciPJnLuYRj2zRT",
  "key2": "5vK8C8ApDq3wpbr1AZ3qye4RoA4jZzpRekovaAViuoB73SdjHTYBukfQ79T2PzHbU1q2FdJdq38iPKsT5n6eLzA6",
  "key3": "2dySgKL9DRYpTh8VeXFbu9DkVbs6Jgv3CxwVmye5uBNFd4UzCxDK1cTHr5FKFygrBrTRJF81Xxib33cxsgWoR9k5",
  "key4": "7jkCsFQxoVrQnEcUtE1MMcmxiJPPU7S6uB9UtD3AX4VLtrEzzpqzQaEknyunbFRwBRd73yWcJTgJSV7acQfRkz6",
  "key5": "49kZgYy82P2focoWGqXBsv24WcBqJDHFNDkyDZbEm7sxz5fYQUdBTH7VFpm98jfDTjbv3553A7kz9egeipp37Mhb",
  "key6": "2WQ58JZiN23b4kL3gprvHPhKmNwVpzPmHnafsBUURtXkSaEypGAZ3NCt9ocgVb9R4ouSQxzJEo8eTS5PdtrY1ZX3",
  "key7": "56j2C8e4MWe84XTRHHXufV5VtNzuyRsp9uXas5tJmfXVKRJ3A4U2RjSyXU6QRPeLpougBycbtK2fr63y3dUYpG8j",
  "key8": "5Xp6DPyRhrNrrvmg2URu9wvCoKBT9fM1FHXLohS99dbTQe83sBZ8WmLLKRDLwtHUU7n2o7ctxTLM8NvGRoFhSGPY",
  "key9": "618bqVCegN6dAgoeAsJykZj3naqdoi6yUFmusYmuDpCwNABDyABM4NbJJFYge7kfcwirRqdWDtWEBmjtGTX4rkjd",
  "key10": "4UFV54qY2ZKUuyqxYtEsMZgoC4sNcYz1Ti2Xdt8MmpPfw9p6ZwkWBgG4fxjXBTE6AgAzeBRVpexuhHJnaBpNMSL5",
  "key11": "jhPPoYjfEM91c2uGyxWxyovqX5GdSuaLpGsaDL81T1DAxTbu7phAw9wnmVgm7Z2GnHRLTcV7GM4DGgSLxLdzSws",
  "key12": "3Y5kphKCifwKaF7J85ALcf2mwdicTxenv9MzSJhDh64Bm8KusUgQb9N5Tp7zhBqzHFZUC1h6GQEgBrnun3m1UmCm",
  "key13": "52X9THQdgBa9DF5Fpxo2FdGbtQ1LEezgngh9LnSwV3B1N1dyGXUHeWMDrcrHgeoB1pYJH3YtJosW7rYHnN2V8V2m",
  "key14": "2jReJUEXShN65GbJNpkfYDPJDrjtRSUm1GDffrBT5axqQ5oHmVZEB7K2uBRKMpK7dryfuwZ2rYUTAvefoZPgHokQ",
  "key15": "3VUy2tJXoyjridG6NZdipv5qSNv7hk1XMpWFXXV4RNpqn4G5w68aPk1tvqdZiXnyXAAU1zPBQ6wFeUYtHc9buWvg",
  "key16": "4gcMxxaFBj6SjgAiqrAMkBMt2H4NM5Sknw7Nt6wptHLVdGc6dfVneGuGyDztWfjEAZqbQ5Ef8Wb6wPNVaXHQ72hs",
  "key17": "3jWYk21NMXdfdHsWjynPB3gADJpFM4bdCy6mAmEVMMTuZx9XEDtrtMA2dpRuosyvJxRx2KQbb2nnHNJkLzHES9D2",
  "key18": "27qLsXFNPHc2PXRLLu6uoedHNd3JMeJL9v65yYJwTYiVNXNWWQJwiAms9SfSSNUwwGNU6a327AbMP8nLWgudM8FZ",
  "key19": "3ajG75aH1hsBnoJMAcYueYeUKMNHtZkwX4UuavtJkXhpLqGf6X8WgeJ5EGdmGxYDATtjkoUU2p9qiznMAwg3G5yQ",
  "key20": "5w72KpCWdKFryhgmf6Yrd9qKddWeBRE9FKY4QVSnQh9wPAgrx3XgmMcDtiUu7Ufp9wKxdyyRUj9NBpRJHASTcDij",
  "key21": "2Gut9K8K7a3uxwEa29dGuiUXeTri45cnfPzhZz9ow9LTKH7VsLgFCrLLEUG9gXEw2yt1Jhe4p2eWn5YdYC7UDN1r",
  "key22": "263ubsetB4KwMzKXDV7dpkwSiMRqPPg61GvUPJazR3Zw8wLVdVk7FmjJXJn8v1aMpfhjY7Ro41NBURMyK8uS7eCL",
  "key23": "2Dsta4i8qJrq9ZLUmbm6Wd9UpGvaP3uJHAGBG9rJS6UiN9SSw1eYDGK4oYfRKmW8rR4KAZnKNW7Ez7hgLgajuUGQ",
  "key24": "pQGq4tGAnPDGzWR2CVNs2JaVkYBgZCV4ugHuzSAAckfAM9AgaUvMxTXSjDTKd11DdWndtq8bTsUr84su3yKfmuk",
  "key25": "4AZnE5zGbK6fyCFtFr7KQ1369XYbF6byYi4ZeMqfw2JmFe3W9HG7ZBpQeX2G5JKSzwQhjxij6m7xnXbtWEARHryw",
  "key26": "4VyerN615tSJPFLbvv7NAugxdpPRoD2UXvYCCHXTwm4h1dUXrMZsy82osXqTtsVSVbiLn2dreTPtLViG6AsyCnxf",
  "key27": "47P3aTJTL5xnvRZa7Tb5RPrdQEdaDLb3ps6Jp2VY4vHbQySVgRDteDuq4dvPXyy1pcX9RWgL2nPDRvQMjUSzf2Qp",
  "key28": "2zVdLSFqmqV9Vqyq1eSh4gTf7wWDSGEJ8nDYAe1nbV3XUbbLrNZkayCeJbt9jTfMBtL9HZTSaWTaDTDBP6rCXiwS",
  "key29": "647XrPier2iodgfJZiXjziCQZLexaKBj9BqHa5wkeNoTkqEucqeBTbtJA4M7hqCbFqtt1e3LMXqNH7M1vdJwVpBg",
  "key30": "FCa1PGVQRYJyNyTdNDrejCtwJ6D8RRZ4xM65nz6yUVjYjySLoDuVSWdu1TdXPNhhHDuo8Hc5K52UbW7ZnfMyibX",
  "key31": "2BNxRpWiErFHoMKZshWBjfdTaQzxw7WAXa85VEFEcRMDyDyxtg7YctK2YNDn5PnHk53bY3Nknf3G8TU38yXsTk6v"
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
