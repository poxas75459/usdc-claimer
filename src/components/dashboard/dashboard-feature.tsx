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
    "2ED4FybijC56XGrMHshGr2YXZLngRq8HudRYQiBcmCdJdP8Q35HW7eZdkhpiNszKQrmtvhYdnUrfNDfaiyCgnF2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "291LZsE3jNDq17bafv1vvukeHSgJSPjvvMeM95EZfkrxUQf42gbanh44eXxwqHrdDiQvkiz7uko6mErA4ZmnvHHa",
  "key1": "4QoQUkBc1XVmsFyQ5mwDmNMAuWcraZtoTet8ZD9QkEfXqGYxK5dmM2cDokVXkscaiWkSxZYQFTvsJ6uBFpYaYHjh",
  "key2": "3yXjnWWXkLrvu6Louf6WGiWax9mJ3vTuPJr6qWrsufdKfsNJRQqy8ej1RSLd6rwq8nQcTtETkWrYJ52UYY4UM5sT",
  "key3": "3v9vKbmYGbL93bsRMAgKX83UmB92datJVMX1nWwZ2fys9LV65dMHxi7k866HhFG2VP4xWhpLTKVbg5C77PKZwURo",
  "key4": "5TXbvimVgXijdzTrrsoJAn8otJuTcsddD3zqKKMeCkTwctc4FCbGMaz9sfVytYqUWMPRycCTVF6WsNS4StCemFP7",
  "key5": "3jXuTmrC1WcqFNNTSrWvhP3QVuKFd7bzuR4Jm2SJj7VmhDthhQ65RZzE9ZCGQ7TTnR96Agph7WJB6VtipK1NHkez",
  "key6": "2amW7Ry5Y6PR8beQBJT4Nb9ENi8ZPZh7rpS45doGM9PFnmva17swWfiTUZfHksZ2tqxaSr7Ab3M3mbwZJkxkJKk8",
  "key7": "FAJKgVApR8vXk8JsSGBmDHjhEPpTZv9Rqc38iiaXx91dvtWgAeuTMwjdPfAKKDCut815rij3GczcuJvEJ5gcuNE",
  "key8": "9QSkfrgNkNg6doXqqsHFqRMMfc8iYkfRpEF3BM882KSXeKXaoByfXaD6L1kFQpfcfMhyJcy7TWc2ADc3AyQN7bU",
  "key9": "Xs49yXVPfBn8g43Zpq9YjHzv5W6w34Gw7LbY9JUeC8SLse6ogpdKjdtaDWMs7LL9tVDWzho5VRFGGEaxWcER3d4",
  "key10": "4q6MyZgVnqp28Gv2jvy1sUVMzQXv1TnxRCxqHmYTLzZ4UP4a84WKHkhyypLmrLMqQRjp14bqGA7ciWKA45QKDFeK",
  "key11": "5N3WjdKgmxuBPgUcD7Z6inxu84b7XVTAyxvZ3fS62PtKXtihX6LhMCvnHwZHteNwyQPucTbWG9e7yHQXDbSvtG5i",
  "key12": "24S6NKMzymATcuWp53J5vjB7BRSxwDRnCu3aPnZfki9RfNHptpGx8eKza44rMZ6xQMzcs52Z69hTDiaZPVUovr7m",
  "key13": "3S7cW3xJpGewSzL2DLwK59ioFhBQDiQmwyy1qw3qHyDmvkFdZE6LjegTeSEu1cS7uNbjZe6aHAiJRsusLfNYsSSD",
  "key14": "4M2MUVSf1N2AYJDwhSe3CRAu4s6VpjWTkend7TfrXXX7T3HbjCaWkVofdho8qjQdt9gMSreeziaF2Nj9qnhp9Pi7",
  "key15": "3dLWmNr7bytTk4TKU7vC37mD4myBDCPiKaB4tNaF2Dhehk8WsrtTggSGRqcbnKSP9zJA1Phca3SmHWMLpPmkna4G",
  "key16": "d1MkWuWre1BA3MFD7rHY3njejqSM5n4s92JLy34b4PfhmWH1yFZQ1GmXz8UT5yYkzAxNVgfCoDnr8twiGvaVZJZ",
  "key17": "3dKBaHvCWGi4MMHLFky2kz2Dj5g29N9oxAFwsckbLvKCgbgFerKHk7hLgCp7oTMKQAFEzMMo9rxmJzAeEeFXozMe",
  "key18": "5exMmJaEpZ8tWQgmvJReQfRMwKwYepyYFc2cogL9nFEnHKrzxSv8ed7ZE79cN8kwAuZMGJ97geAKxgDjZzuaKzcv",
  "key19": "4gcnp9rUuVNxuW2vdG8QA99gjt9swgEAC16yWgHj4ib3bVQpqK5QyESVZzCDfwvUZby1zrd4FKnHJhfNJ3fgq1rL",
  "key20": "3yto1vbQANwuwAqU2hsqYuqy8pnD2Pcdom6TWUz5n2pV5cMNoBK1DeHzeZRSo1Qp7ZyTAgLsxVspmRhDzSsu1Dc7",
  "key21": "2A53fNFRAp3sB3Rk3iLgFkVLUs9qkpjVVnT3EGm5re69ZT82QU3W54mQxQF9duXgvex6STeHzA48DhWPUodwMMHw",
  "key22": "Wq3HAUCstH7AFVd2Cy2ntVzQCp4oJgzVkyGCw8nCKM8Qy52JR2KmG8Rqv75PjTsRnQDx6S3dbayUNpnamWjQ94L",
  "key23": "4eU1aDaR7agUWA9ktQzkk1VL1VQ7s8hDxofikJapJVZ9GvM9bsskFShTHgBqgfZnjkQNJ1nkkoULHCPKQ7GyTcka",
  "key24": "2ey6BfRDq8EnmC9n3Si462SFYbSkf4Z8rNVW2XyqhGAs3vS9WtfvUsyKv362LecvsWeZAwDxt7whmjHcjDwsYa1f",
  "key25": "4bFnSBLiVuhuxWor2fZaPWarwLUySfBE18KfQoPt9v5KxQBSBK4C96XWe7TJwTnbGB1D9RALowQ4daQJHUBDZx5M",
  "key26": "4e77MCHCHZMCkz3m1UQre6rHdTK9wj3fvMdphVJtrv7FmGBbNLdb6FdGWLwiKCNXyeNm3bo5eat88G3j8VnfgHfp",
  "key27": "LF2uwscGqben6AnR4QCT9cdtTqHBKUM5VGMKS9Kzep9bjUsdvQJzj1JB3kSYfiV7CFdFfYFHsSAm84Q7k35i8Y6",
  "key28": "58hs8L9qkqEBjDvCYJvp5FicNhmJxAbANjEAWbVakdJh19ndh8j2g8mZY1SMQYjEVYKf86PjwfPvA9uBizf9DCwL",
  "key29": "6L1236fZiRmiCRySAKp7911Yg2K3RqDvrJH9evghy2UCFozShqSpZXg5ySM4rV5yGpFD3Ju2zpYU6BvnGwbU7ta",
  "key30": "29bcNMtSJiUHzoLKDPMsn6r5oJw7WhrREsQzYfDA3uYDnYhWd1yiDeamSPzSSyjKj6CPDuPLHQXqoL5yC8fZWaGY",
  "key31": "2kNCcHhZ12EuywMuZWvct7VTAdi59x7RtYoo2qCf3XP1gGSwZznwJFwTNfRTpmWqhd8eS3p4XaczrSVyiPbjyTYZ",
  "key32": "55iiq6GHErTWSi8a8xReB7rctwfsR5Y9VSyrc7VD13bYmYgtEpyyFnYsF8qcrYwvq3dVKHLA3GWDqBzsHE3mx1DS",
  "key33": "4FQstaWRvEX85gcc3t79ANkjRgR2YP7cKpR62sWYsrmx6t1GSFTQq4NMHjuqV7NSLRMycBENJc5VAWJLGyZ8nCX3",
  "key34": "ruaCrq4vZVkMRHJxUUEUkPRQFHWtx1BX3VTfPtnieBqwQpnPqfqHVb6Wa53GegAQbgK72ApAa4M7HaSW3t791K9",
  "key35": "2GEeeVd9hq2jymm3V4pszFBHnff8ULs4DhU3ydgw1sHwBEkzpUMwqPMaaZLqDaYQ2doo1SinBmLA33S2SNtvkMpd",
  "key36": "Exc1dC7uVqwpaTe4GVqpTnYpw5Y3bsWX5wvFGxnXPMDGi7LBfZpUMLetDqUcxcYkzWqRSfNNAaLw9qa9aKwqajw",
  "key37": "2qsHfbKKQctiogy64G6zh2S5aJCMYvmUMEmnth4nsAMWbr27aVmuKhcZPzfUUs6MZLSoNdGFSdKwvuq3Pbu5Gc2F",
  "key38": "2x8nYs2TkUPDLxyiuwriveGVSCVnzHXZJ95G89g9HNgWWozq3bUnGxdjyTpaM96oZq1AWy1Hs6iqcqV84eMEVqxR",
  "key39": "5rFoiwqA2o4qmvJR2u81FTy5E9Ni3xxzoXy2gMUPiZQAvjpKjdbE8RFCfYzhsrTFKRBQzdgcbtNzRrYd2zrzeR8G",
  "key40": "2C5EtcZyaHe2Z8GuUHKoC9tDPUugzebuNrDT4YTDDT1KezLCB9LUB5pBzAa6Ndt33kBFcXbPAeWtTjD7d4vMArE4",
  "key41": "2eNLKqLKttup3AwsmhHA3YVMNLSkcWQ4PeJVMVRMdeYRL6B2sYJEU4PwFB7HCAKBHLRQ2DAZHm8MEkZuyRQ1cQUP"
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
