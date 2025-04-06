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
    "ZXJeDSdkfUV62XbDTacb9DLGsYqfhqiR5gWtqvcvQSCrYDnzekMHViTLS3TBqYbZhWwYu12Csp33GyygGHpxdHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qt76qqdFhaay4fqWhh7Sf6bFqi1quQMGzvq1Zj7DP3abvNr4jFVcYbvBeZ4sB8VRuWjDTZTFVgYv79XNUEEMT9G",
  "key1": "3kJcjPFtBUkiQrhkyotxH8YgnUJmQZYJY4Emd4yeDfjLFyqpTrMuY3nPNfq4anA4RDNVQUENSUHJQotY8PY2dvwT",
  "key2": "2gsTSvgzjbaaNBEKeejgMu1774P8EKtzJp2BWqKmdmymfFUHLioWNJ5jSAHNQiM5oP5mXo5SeHH9eNao5EqRCW1M",
  "key3": "4qUnYq9vNnVbLBZ1D9pwn1tZy51DFXDAFmzdj1NryMwrePokMLCkj2gvdpNVHWsU5eG9fZTStYHEiXcmYUXCRBhw",
  "key4": "5G6VLVYWnX44r39hBtzsA2oUVYY2VNp8qNDoMi1qoVQi3UrLwutck1xWbQqoqUTMzmkVmhWaAe2eTMsSRkqETLL4",
  "key5": "exPTvVhc7eJEDVQ5EMRj84hvaq1WvhwNFkxisLGdZJmAavhMHnKWnHDFiPpt2eKzfTXdb5se4GXA5BH86RcneUM",
  "key6": "5Q5QhWaaPKdwAoMFEU23AN4qDVT7pqUQsF7gupRkGEgz4xtipZJBdTxbH8pZBsbWp3LDkBjDUPkQtJnucYkTwt8K",
  "key7": "3XCdRo83mTaQuUWMvoGs3UGwDP4mTz2R4d22J6WUdsy9KXxPFXBxwxCw4FLNfTsFQs4rg4xjrxanspCCGNzbVjsg",
  "key8": "krteFYnKZjP4MNPGMjYzpTtTiMHDAiJF6KSRVy9yJksL97y4oRa6bZBgSnDXvaaRximyQuaSCgMCix1fZs3VHqK",
  "key9": "3NJ6aeo9gtvNpCmNftMbZLnJWuVvyk51M5pUAoWL9T4aW9YviUuZUryEiGqHiH6nVQeyUhs5SUyxAW2jEETVNJ2V",
  "key10": "3bPVRtBXGHpD4TYDBxRWhGpnBUxUZAYBKkv8aVhXCT3sTBPLCZCEY52xoswDmXL3vHhxs6UycVWcQUXxF4y8BBXv",
  "key11": "wpU4DmDrGJFUhoKJNMe2vJZJv1bVyDwA92gsqiMBJhqYr6zSd5FNpNqE25YBLmpVTeNiAuC97fkVDaE3ptgjQsA",
  "key12": "gHtiCnpzPQxown5R44BR2ws3jyPxejhjGVoMmNfyq6X5eEKeSG4AUUax6aRmStECEodABmNQmZ3KhDceRVWZ7ZD",
  "key13": "xp5t9ASKQPrzSBTAMJjWWCg9tX9zqSfj9nUjTA2TSH2svwc5XvWr2crT8M7mJRLmRtHETG4TpmVbeoMaDz8cZxg",
  "key14": "3H4jYiwHr499eNaDisSYGVny3uFK6evFJDud2xC57ixToZfXs9zdZmiKpFjzr4YB4XvCt5KTJvsqnpakYKPLoEAp",
  "key15": "26t3odFjAD9TvAiZv6G3V35ar4mgy2xL3s3UvjREF7tz2B8fdViKTLQ54n4G5dauEMuacAJFYgjXWE6Tny5CAZ5b",
  "key16": "4KZh8JpmbmEB659jmy3UvJvGj6wsDYSxKXLSZi2crMQQ6yEwFzVRXntexLBs9sSYVS9eCLJsTMTTDvk8pv33C5aZ",
  "key17": "2QubZoHLi88uRgwemvnA5e72ufz3NGm8QfqmBV3vya9CG2xj7C4niMZtztSdERg5B379Jt292in2AgBMSJVhG8qg",
  "key18": "313bMr5hSgTKz69inGSND8gD1rD2wzZ3zMvJB8cWJrY8C6RnTf3twzancMZXREWwou7paCVxHS4P28DmticLvjNP",
  "key19": "4K9ZuXymxvpRi5dhL3pLC1vu7hD3GehiQE12uYnZM5TYoPwJkUkxuTNPuXRNjnnQ2rYCfCVuDXtrPSfjheGNrxJs",
  "key20": "2Nx2TrQWqR1yLe32VrcPKBQynHBQRtc1V9XqQAZeJYb5YfJmpkcNcbPYvDqefrxbJTWw1PdhSNWGv6VfrUy3CNp1",
  "key21": "2sExKEhRUqkjmB1DSQK8G4T7kxcqSBBPGiKVF2eL3iSscWaZiiJKqd5jcJn7dWyVxXvjB5RMFDKYuxUVZKdKY4vM",
  "key22": "5fzdee4GKrVNgByxzQR1pz19LbvtfQw9BV9kVNaCiZQGw65hsPWcBJxo65EM3ReCrDvQawmp9TugzyEN2zNkBB7V",
  "key23": "EfyZonirYnZFSDe75YfU8cySvMdpEPTXhYJmMCCFoiDBvbGCLYA1fuEHqs1cWfX2QaYepzJYPG97iSKjrEE7jmk",
  "key24": "62X2GHpeu62g7XEFSWZCmSg3496QUjzfMWdN1GZkyeTXskCgNy5TJt5qV1PTvEfQScTsuPPspz8NdtrFaFDhxAyz",
  "key25": "46ZYXfWReTeyUKb5LQieahTHsJw7ZLsGvhehG8H1W3w8UfHTw8smJjQcmdPeft2bTijghuGWwTzz77hqKCPVm6BC",
  "key26": "p35cMHN6YhxXJ9CwjXpPEHZPWhD8EB2YQk2Yi85MhEeMMm6egpcFSZG1ZHk71rfv8U9SXFNwKpZ6DvxhfHvbgUX",
  "key27": "3cmJZ7J6F49fSeLLXz1WDSKv6wpmdVVxo8KSaShnVeo28fUCa8Ak91XjdM9dC9mGtn6Am5CEVNKgj6BwSnka59gy",
  "key28": "5gSUYerx1s1aqXsToWB6nu5uXeESWvxewMHf6TRpmm7f37ZQDWXAv2CDVWvCLGiwK5tSue4YiL1Z2Qahjs1pLspV",
  "key29": "2GTsiUn6NDzGqdajorktJ5QMCTLLu7m1Zyt3FZHNHF64Qy5SSkEmQpQK4rxxzjRdoKM1MjV3eHnDr3GEi46L731Y",
  "key30": "5jXqBffJkuCCCnW3WZdXM7ssN9QJhLhcuXgFxzmFMnDpabaBXcG9ZgjYenGvbpZMqx385Bjqf18Ath5rpGEqNQY7",
  "key31": "45TrQN2SemE5HvGijZUqRoNMSGUuEKiMFev4Nn28q7PX9z3iDBRYgW5VtCffQYoMa45eSzrc9sR8LKRAMTdWog4G",
  "key32": "4HdWNYyCR1SNbNgh1TYkDdaSPCXWbT1pgRRW9WnkmiDV6R8BxCwRCunUPXRJ37yeWfnbymEsKGprZBRXWwK9resT",
  "key33": "5v9jagoNAMZbWeoYZNgw5c7vBszjAwsYZtHtE9owhWfEicd9QMx2WWfEbdsCd1B8LvQ8jGsHjKLd7dXJnE9XDXPq",
  "key34": "4iGKrdfg5NPp7cXQf29VWMxVzYMotawMWrL38UzNHCvmM72C8Gp1gMjhj37258Gkk9gd9R686a1aucQrabZ7WhEx",
  "key35": "32bgwnLuiQRGPyCMih5NsQzuWqzSqx8aa8wiTEWSyhoDoydLqGFDstpp8HGHvfbMkpTgnPD8RfvgebJwcDVVEgi6",
  "key36": "3AAQUL97BkJzTfM5ypTMrxWCbQJRzw9QaAGyPKSwWNdKghkQvCMRyRqJJ2BX6iU7dEKwW1inJwnBnLtnWGXMAeA3",
  "key37": "2gjbXmy7pmbXu3UL3fviZc2YQ2fv6kjHaYDr7ptaU3eUmwP4nJzp6aMxBsdwZw1vVbmrv4A18JXWUSxBhXgrRW1B",
  "key38": "5WhqddqXnm8kKPG7rVsByq3TzS4NhEu4Xsu3EHWfLmCxL564P6Wb5b3jkKyqK6yf1MduZjK46SYhp2XFERtEdPbR",
  "key39": "5MvSJ32rkimBbyhPnk6pUUQ6qZkQRXmoFHTGryX8La6snBkwehweRcsGkSsEzm5Q6dnCEbJiLBXyKoUKNeezPVYq",
  "key40": "2hsQUBxmPgMCP9FnCvUf6UufViaZtVvjpHT6sVgaRQFcbonUFVcT9ixwosghTPAd25zq5XzYoywLD8jbWkrA2FvK"
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
