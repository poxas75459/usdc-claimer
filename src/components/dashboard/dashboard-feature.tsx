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
    "2jQFVjuw2e9BV179pPxeEuBeAD4FzMapB9Gap1MGFLQHv67qc5kS6DUBZTXVeVvx9jXKyJ6B4SeN8iupNjnSrTdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TS5YgN3gZ4oJkNfYQZUCvC2bm9uQ7dzxT6EMYWGmCfc91px39vpPmcjFD5PaQVNAWTcw81qeWU8X7ZxCA4v9mNy",
  "key1": "5g9FNetCBgwdC5sbjPvWNq3v7a2LxrYzmzyPXSykfs6cEyK3PYv3GFYuCbA7sfkVgCnVaRr1YKTHkqV6KxCbxkmF",
  "key2": "45coLYqgifk22qFj8bQcZWCS5UYDZ8JFmGgQJhYg2jpFMhGr84mWM4vb6cVbFT73v3UjhshaMuYqnJ2ZbZmYrNVY",
  "key3": "b7KhmpptPyX4DARVn11GYnYnWWRo9NPenpenoTtFoaMTWx2hQx9VSTjs3K1ZKFwT4Yunivmyy2gEKeGemMmipPy",
  "key4": "37Gt2DZbWZkr2HL2hzpGMpdQ1SKnzseuCt6avnbxAi1T7p8nuf6XyiJFUZoMGdSjCys69YPPNwpdQKnuEXeM8Vto",
  "key5": "4NL9jnah8aReq1cXc6Ujy6k5qLW3Vao1whVJ1NYDzsGhDGvsdn2rwQEYh2owHFZYb1SpNU2TCsuNZnBAV1czgkC4",
  "key6": "2P7Po83CbyvSrB6Xm2FFzeW5U2bsm5zsvtfFuMU3JSBg89bKi7ceMsSJ3cvExeV6mUQV8KMU3tK6AS125hXrAfG2",
  "key7": "3zBhU4ASig7VzmgMUh2jYEU4FXx3xpB35A8WYCP435RMZHvJjJoE6Q8X8vmXeeULWUt9KiS7FyzHY56WbwpmHvpT",
  "key8": "rZs88mAEfFSFUKPadd59ecwFxp436xesM9twPi6V9mQzWP4USc4SEjECkwxpnbBcTdriWxzGSvFGivejTKARC9v",
  "key9": "2fp1F9AxqSES9p91WcC7i5qN8U8p5consuBDkxwHNASwgqiz7QebULiXBqNt15vPrkRT9okMPWZbLUT4BdsfT3BW",
  "key10": "2QYYJBmAd57DaSThoPfyBv2CH8SifxUzzH7LtoHt195mxBGcF1ZZteHEnwo5K2RXTe5nukcnEy6yuHXuRpgKBBau",
  "key11": "4EcbDEiHiJxjqcBPoJpiPbMXq5BrLLMgwQQQvbmHZejpAwnxqqUtHBmtcsCheen3y8LZk81aq16obBPFAgfYGJnZ",
  "key12": "5JtZovSj5hVM95sfH1Bgxq8CzUxu8D35xAR2w9hRs71T6uKu4q5Y3HiekxCKZB2R1hANqQCtCzD174n9Fqvg8B6h",
  "key13": "5pYZRSnwzwTnadLXeYcCY5TYmvAED8bbeNq7YXiwkT6QYLPirPrZtqnWQvvcDn84rLc1f4dDbzefurCcgqZwnyCm",
  "key14": "37eSh7vStRckhafF51V8GW6Zmy4bVXSKM4GbKXyKzczLjDK8C5ZsoQ7gEJ1S9EDE2xPcGftcbgGQM5NjuC57UAet",
  "key15": "2m4rE2Pkj955snCRD5CCgRMPkJzr9ftUTSdVMgzfdGAMMZ6k5tXpKgGMqSSjH8LgYKR71hukEnu8NwHduVEVYh4W",
  "key16": "5cix48juBD25venvEQyfgBtqTq8GxRs3FsDAX7yyeEK2AZqvnwFcExU6c8eCN28uVBfbrQdqzMC5GfYLLMHmisjq",
  "key17": "2M7MS7VKDb4jNZDYGDirJ1dfy7GZ8rtFnxrg7c8SvvYxMMWcopACi2hFjaWBgiTVdNsgg7umwPKxrpodmgyBdEx1",
  "key18": "5MAokhsqbSrH7cqMD9iqEitR6SA9bLbgkMdMbyv2bUgjHYjWBmnritgZ8R8ymcAbJVTaPAkZQGKpoaRNhBsS4bhr",
  "key19": "65WdZDFJnyCkaz5N2BCzjw4USUTSogowo99QmqspEJmtcLZdpYpQv9A5X4S3hLtQWusAgt7mikgn2sJ6GsMHFqpu",
  "key20": "4aNuYbwusXH35TQ8Xe4fJRzdNbjZf3tWzW9M8uayRegDesysKhnF2JeExmtXJwX5HxdzEcDqxbiNNDzWWc7K6uej",
  "key21": "5xttbmHnhsTYET8gwsDnTQFqCxjpmZWuyHozkDT7uFf3Q2piGrdZwVpXdYrvHe4AJkETgwcfynb7XKT8mBvvQGX7",
  "key22": "51P7PfBVchrg8V8442u5KdZrCtBFHLWQ7sh5X3HUb6jaAVCRRjvHWR9KCRoPxfJomP8C5XZyZKiGSUqYhuHmby8n",
  "key23": "5t7w9AeiSMp2uLkJQq1bddArHrsadXtFRpzfiDwYeth6dYUa3geF9SkdZgQnx36SqFB5ZsrfHN8wmmTKVxN8GP27",
  "key24": "3U51Hhz7dFPvy7dumpjoqHR3qDiHUreHs8wohFVMkN5yV7LWedSnxDVKUnMM72B7G89eKuwGmfQ8f6g3aU3dhGf2",
  "key25": "3drANjd1xQyPuBtUEam91ZEy9homM4fPpdiUopTRXjBbeeARmPZW2UmZzMXw2d7HzRfKBqQWoT83xh6jzCd67Asb",
  "key26": "3qo5CmHCPbAhxRBhbDLNPd18sea3ihqWSZiiKEeE5He5iUoTBPj1TpVsSmBNJg4CXBVoBD7FjdBU35LoL3vj2g3t",
  "key27": "4hVKDCNwMcRNHfrDGbJWxa4pKqJGEVwndygFtrRftxVJTBNMVScM3qNHnYJdFF4ybtzPgXkSvunrNCvaATQUXdAT"
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
