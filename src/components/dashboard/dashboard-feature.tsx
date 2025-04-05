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
    "2SEs9t3TJCkW5j1JmqZ4foGCYykiC48rtUGA8wgMb1CDBFyVD8FQZxr6PrHFmYiNFHCkjEruTZzym9KStSHzEzqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWYDcawe3y5s7uMQDAZujr9rL76ihLNweu1V2sjaZJHtwt5Jf5RcuzNbXTrX99dXzCgD8Fap6zwMpZWdRv8GKeN",
  "key1": "5oovT1VqR2UaYiHQgX46NQS4TyjGbjUWqRuJ1BLDkevYcFDhsV92War2EcoqgEvgoasHuHwjtfaehkwqQubrHthB",
  "key2": "3PfAfBPUUqnnj6pVf18StPGpfcHDoZ1xgfWUtYnjiZBG1Xp9uw1LoTG1Fmdb1CFQwP4guqwr9YF9S1MhJmieJ3yk",
  "key3": "2jEEAF24Ro276Vtpw4VvidSUFBxkoMGhWWJwXwXiQ689FW9RD7GjwHbSJNsouG67RoB1Qgep2Ddf7AgB3b7L7sFj",
  "key4": "2M8iLe7GxAuN9B1hPcH89Uh1Bu3vofoM2E5ymKhESMGxt7MWUzVWtexYE4vQZMi8SXceNuRSxUEy3JFb872A8rME",
  "key5": "2qkHiE8yTzQTVBybG5tLvN6rk8DyXMw4GEdra3CW4fLtXNEfrVvH12mANgykFkba3LmV54chBh6xjVWxg8bAHCnB",
  "key6": "2aQ9VMB8J5p9vmtHcbyMDAWZpt2WA8hX7eC961b2gwHUHwoHrGKE8ikKptZbTUqQYGot8XVUL5gPstnZ8SpZUDNm",
  "key7": "3m5Nt84oJvCkPq3RLq4NTcDe3oTT2DUNo8nRAZWaawGXF1rS6W58iXhCgVitJ1P6sv7tgReQB6inRWUdryKZZLqc",
  "key8": "3HRk4Nu2hX6KuPJhMAKVoqA2yTcmQxdVfwyW3TSSDLc3ddZdVUn3EfY5JB8QW1bMc9haTDCA526qokji5okxRBvb",
  "key9": "2YgdrED53wBnQji9bZ9AaSKCe3rFDJGAvGFeyDBY72jtxqo8ZNnMF3kngvUgzj7ZQgVD4dYRzg3WbrebGvERQ9R4",
  "key10": "5JNFg9YUmcuBrZgdMNrq8XhU9zWHFsLaW6ahxsK1fw57XZrnarZBzAR5cTgGjKS7gmqQ5NnqRrgqTtRjpgux9B37",
  "key11": "2KHRChEQK9nSw3qXEnf2GeZt64wGutyFm8cQkZ28BV5zcNpwXd9ywrWkKiCAgttK5eUhPFxiikG1aeaMrtvSCsMP",
  "key12": "5rVc1b7oFp2VwKDRNz9D5WxfbycTcQhuupssWV52h3JqP8HSFz7Z7FLXKUhQpLGfF8gMLZ2jxjMPZnBSuy98fbe6",
  "key13": "5SKm7UQP4oLajLXtfNMe5gFkS7D9K56A6ZiLrEkFkYqTEwqxSt5ZVRmUf6ySft2CRKBgSFa6a59eGXJjegjju3aj",
  "key14": "5ErsL4S5cTJ4V9AJUQG5o582mQwESsVgcXcRHC9GvRNSZzGTkSQhzQZffqG65SKJY4NvGAzQJUoFWJZciqopzL6X",
  "key15": "2H5X9eXNVTGBJoSBW3vt4dou5CeZ36QebPnj9p1QqsUaAz7zReprk7FjHBW6FgfbWMwbJSZgcFefdzJqfC1FC7q1",
  "key16": "2s9mnMPViUdrvmxmd7WJTKkWw897wJdzx1Qu4eTqaSvpQWEUsMqbYyMN38T3worAKpaSWTBgjsR5eXQp2LQZbVAr",
  "key17": "ghL2P1qsVRmRUJhcMgj185mh1CV13JCuFhBAgEBynRBVcgdiakeic5RAewNjbT9qbzYqZEyC8y8DmqCZPzBS6U3",
  "key18": "4WCEoDxEEka5JdzwMRXWxjoAADAboPmCaAxc6GpndycZ7AzhWfUL1jMU7AXaS17BXrDKH5pby449es4sFMHA19Q8",
  "key19": "4JKfjMJBmubaMzMGL87xknoEjxToTDzqn3Rt2uPpzhuA2DCKhMVcc9HvLrbEgUF22Kg5Eo1SiPbHEVo5iE2zzbjS",
  "key20": "3Nj4vQQGhpmhvAeqtqYzMg1Y6NayFuDys25ahEit5hj6RH8EKumKxniCqMiYUT5Cqz7miAbQQHczXWjgxN8opz4V",
  "key21": "2RWZhDWkCK7HRf6aiHZgc8U367tWJYZQ7gqgiFLbHSD1Y26AU1xqgirCckTxHtY7iCvsUFREK5wezssPijqCRdxT",
  "key22": "514APTE8EWnyDhKbjn38zUmC3NpYB6E7dpFZ8SwErVNFUnfLbb2kapQM5raGVCqUXc4mgUcgfALRTBDtkT4rVcuD",
  "key23": "244n3SV4J3sw2F7QSoYHQ9sYTDNYLfH9ZUnTNC5NFsPm3Gw9N1dye92ZpaZbjZoo8FQVK5rvHuMo313bG415gwR3",
  "key24": "2GBfpVVPtUeR2awvwZLYdScbFCLusrArYrWYFPBp32eGNZ1uQk5h2EhqR62tsbumtPCkLC3xpebfGLHZA1Z3RpPf",
  "key25": "4LfBS7mJzR4YDEDhFVQcrNrCHTN3GaienPxqJ9NbNyaN7WNJFAuTSPzUoFVugUFmCRK2azhUutMaBAydttxardKF",
  "key26": "4QUzdLzN8QWBxLRpRb7oc9YkAgMwHm9iTWBWFF8kxaHHfbYyoEG3pn8KdjRRto8ocAUThMQ4oDx1CV8hPoMXVmtH",
  "key27": "2LWzaibLEKohWCZ9vvLSE8k9WpAst2TwEGWdPjc77gQF21YbNxsSYD3bkywLLeDYBo1poLPAxEFttJwNmE8APX4t",
  "key28": "5cDydeKrj6FDZLYxNZcfMCmLjmYoctaaq7PSXgLcRiw2xqs3jTU5TnwD21E8WjsSngMERdTiJgVB3GUYovKY7G6Q",
  "key29": "2o6rpSoLc841snsETBhRUx8gpxr7YyKc8Cc6j5tTt7qTd6RYZsChEW8Dk9fYji6UFi8Yex6PRpFwztCcUEf3Jr7t",
  "key30": "5jEc8gF5LSSz33ndeAZmWYatVxvte1gHS1csQKvyGfbcbcmMhHdcd1FLi4L5BPQYsjgQo14V7smfT31hvhdBCMRG",
  "key31": "4Q7NjNH8hhCb9sNRxqvNcTtksxufT82RfjawtumxuuPfnrF44EYmLBZ5YQTTqopwosrKww4VLqH7pc6gMnwaEWv4",
  "key32": "58UKUjan43GY3PJsgHNUhwRZqjw5gaBPAtSggDB2j4J5MMsEDHVXXoVvSRosVUUXy6Z2DtXqdz1FBG9M49A21dwh"
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
