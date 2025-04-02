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
    "4kr1gF991Npw8EGyajSFkmBARw3ECd5z9GKuHgjJQVPJmQhfwpx4nWArGbSGT6fPUBoRgEyPSgEQKEavT8B1S7uW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVnN46fTPS8a6GFY1qBBeXELpnszNeHwdb7TmzG5gDAzkYPMT7wCEdxwXY5MYg4h9MrMn2s3xxqrcxbzZe9J1tY",
  "key1": "4XWPUHYzqDW2Lt4ZR4UJGc8Hs9L54RdAReKGXLmJdLQJm6neUBAVw9XToqwA87dgqjAf9B71x79uJPTTxguALfqx",
  "key2": "5rNnobRDD8mofmk8aDsneSqXXKfAbu25vYZAucHxpJrWC71akEGx9ucHv75S1Q3t6i2HFhh7GrFwLbmi3HdWUQNr",
  "key3": "3AkyCiFZfWWQuTu4iBymYoy4GniFQZukiy7fAHGPQJM9FoTfGFgsEbZdY6xacQTfK8axgs3iFAUY8vZPhuooPpX8",
  "key4": "4itdTxecpnjMAfcvBp5TLeG8tze6ntLdWeiQwMYLsV1vvTw5Euih4jPfmBZ2bHKZtTqUTpA77sM4CgBsKbSL5pf3",
  "key5": "Csk6EMhcVeipiiZeXeGUE5QZQjXHkcgqruPTKD9hEgMxnnwf5BKEsHKzfRmfLLHoRfFBCrdrHmRvHbjW5Zxvh9P",
  "key6": "2yp61weDG3jNdCr6HGYkL6ogNoJMCvpU5VANjBM7hQnVEkzETsSXFQatbU9rk2hAi4tBkMwrbU3aHnqLNtFFJ1cf",
  "key7": "5T352L6RaXyQTk65CsWvUg6nNyfn25B1HRPRX4X1shPYorXb5a9djoRSgT9uBWisUCHczTsDGE78EcVhqHM4QZcJ",
  "key8": "2VaN3XWXFcMssTaeebf4yaKkyDdVWncCJtYvkaPxTPv4ftcDQ4X5x2GfatbKTzSQKKax2ccL5yU68yUQwwCA2X5x",
  "key9": "3UG1AnbrWSpXnaav5rhqT6MzdYUBcwKSAVTn19jcubSZKGAHmSrRKJkS8v7emP7gSV13rX7hceF1x1MZFrc6USJ7",
  "key10": "26ByJZfepq84H4RkKMxEjyd4DDC8MmX6qphJtUWhcYhkreVzuPXq8KcfJmK7fji7XAPCshvDpMrq95g1tu7pBU5U",
  "key11": "5whuARpaGsqxnu42taQ8cPsSx8pbGwtTc8rYEotGo2kjXtjEhYk55UyCSA8m6ZGBHx483Mc5RrjN37XZ26xJwhwn",
  "key12": "51fGpifvtSYQeSeEZq1yNeW5Y5XTzMpJXijG8yUimzz6tfzTBRexdJAkcH6ASNMAph9sv8ULBMVA1jeZLiysNMPn",
  "key13": "42BXPcJW7fS1iNNDk1SbjsJ4G386ACHDiob74qqV7eUuGEc11LQigSRqv4qq5g8s3ZajZgefD4DUEH3tr3VZCwFh",
  "key14": "tmrdMdgniCSK4oDkdCSBi8JDd86h4Hd3QvFASHgdC3PFMYfvoJxF78WtPqME6PZ5CX5vPnEe22STAEoCFG4fQKv",
  "key15": "2sjvs1fntty8ZTKAZLdndix6NzUJ7KjYQeHuLzh8XvRiDbzjwtvdnUBqAvRgxTVEucDZDYngSvCiUfVLo7AkejtZ",
  "key16": "Ui3nHboTKvh9anGkgJ7qaiVLL3MeFrHCgb4E7vZZMpyjA11JFemw9Xumwaym7JtB7cs8SnwdALKMkboMcx2cBaw",
  "key17": "2uBJYtGUKvrqbPdxz3sUvE7PuC6jceBTY6F44dVbM2GMxvS43rxXYHbNEHjnT8d7hF4oBBKvQFSgybyN2K7rtjv5",
  "key18": "4DK9ex9ZaYsGWwC6xFfH8cPzufMiZYN4ZLFqxxDBUNrvoTsKfGREWvhr2KfuxViN93UxtXfWTeQHTPdSwZPsGRiu",
  "key19": "2VWBB9A4MRDnfcZsvyjF19uqGHknUfaX6FNabUuwWb2hVGe8CCm9VkD3Z3PqNGEeu6sRQXZghsjFWarF24AWSRQE",
  "key20": "39fYFuwHqEdC1H1N7d1NxY4SDPM7xP1sPxnQuYcNR7aSCyLTREbUZxhz524hkLGVXjE74EbgJCpPEHiAae2dk6HH",
  "key21": "29tvRd2kNG9G1mYmyiFcZKzR43xc4aFUTnAN4ZqVQyiy6p4T6V2pN3ZV7A5F1PQUxNzfuQ5WcBzSnSWDH2ztyFJE",
  "key22": "2FNVxgN7NjFAZkKMvAGzJ8QkJvWSDtT8af2XQFPeFi1dvseBVUdAD8QU2uC9SBd9inS6J7Dadwc6hetqb2YV6JCX",
  "key23": "43NjWsXGbnqj5nrFKJpvvhMdfLqdYiG49YdVuGcGZbqCdkWHFr6514W6UUjesFyXg2sNkhsnSpj2nwSoBjCE96Ng",
  "key24": "45FZZoHVjqxzUQUpmQUZ7LQsLjnzK9fgnrMYZtg2ufmoESD5yxoMSw7XVSN5j6q6dE9CSjbnUQsF42hmFXkR8T4F",
  "key25": "2H1SY5p1Zj2qKmE7G8ie9MjiF8dMkmM9nu5m14DewpgLTekLeQE67peobPkTc4W42t6grr4WwdyF9Jok3yA2dnbM",
  "key26": "5Sh9qKVTmgn64GN1WW3P3LX6ywYxaSgBPn3cJe7xHpaAAD4o1kCPoauL9i9TNZkcyJmwmgukLDi82BoJVMuTwsfS",
  "key27": "UAqh1zL2aCBRk2Rd782YLt6grUWt5tmWKHr2dGNQ8f3m5SMuHxvJJZxcPSQzJVUn9gb4q1XLuuDHXrb56spRGNN",
  "key28": "2o13WGv6L9stfWmoLWvNhENwABc29UeDTEKq2xzmHi68XyUR5Dd6htkoZ1aKJMm6PF7cW11N67U7jja57p7zD4ne",
  "key29": "4jLB2wwLXZfpSCR7WQuvhWDk6AQvAtYW7RAPvaaVJVDF9zdYyibr4xnUC7W6twFvFZ2dZecVH3YL5Yu7EFrZHuMR",
  "key30": "3XzUX2NmJsD8P87PGb6ddSvjHYAN5uvpZzmPcVcowAH1aa8b3SBWNgsbRMg3SxuhpG5sQ1C8sRt1akGJwENQ1Coa",
  "key31": "3cAcFRocH46ERg6zPWxCqpUE4oexEQENw5NrEPYMa7Wk9keykN4yias87aJu4zJoCaFrc3gG3swKuj9qMpuxAK5E",
  "key32": "43AJJippALvAuFxAgH1FDvw9nRiZV9BCe3oyXP3HCJbeJhzxYW7Jk5zfw2tQmzfNy16rRhtik5sXPDPUnZuMGgeh"
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
