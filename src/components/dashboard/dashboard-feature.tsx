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
    "38LMCb9ez93aYx5xQnU2mnCoyYmwzb4pBjpW6JdTUn83Lwa1shy3SRSisVTLbmEnfAg1GFRKARo1FCf5YEBNctN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ckr64X38Qhy7PpasgTiLHQjK7g1yQw8aanXPjeyVFYvD374YGqK2uZ1L6WRY3kmPzW2uM8VhhEQgqerEkfKgdDR",
  "key1": "v1tjYr79afd8mHEvu5r5rqUYGNUxULnS1aK7Y4c6JVW2urwGXzimZqWshkGgnKHW5fevtVTL11pxyG4bQK4wGQJ",
  "key2": "2V5KkCXWD9wwLPr2exCuepqsQUfpu4oyrwxvpiXMxTNnjboCQXvqqAcpZxK4A1SoRMxjcCfK1u7V52XXk7R5Hd6e",
  "key3": "55iSMiWtEYqDvDmBSLtVaDTH7xT75RkpxmqDGnm8pqyx9H5FMuG8B6oW82kZz3WqgpBWGatB1ZsyJVFFjDXHVBdJ",
  "key4": "5fwtdDGDwbuq7D2B2pDP6HATC9jwWziiiGJKmARitDm5GSJsL1p5HGrzDDdKCiSd1aAisHof95AG7y4LmLYedKgv",
  "key5": "3GLgYRrYSy18y4jHE7LJtjGwYwKoro8rTdv9KiaeAWHJbSS4KJVUXw5pq5Byo7cWB8YpHvLjoMN67jrP8SpsbZWR",
  "key6": "4hfxGcapsCDRN4rSiZYhvEKdZvngjE256xFSyHEqWDfsscc2vPGFtaAukwKJhUQm3kdX3MUe6aj41nzYSsUEUXSg",
  "key7": "3GYxWZsnfP66fuQ2KF4bGvJMBH1SUdMekVFbVZxS2ABpLBRg725byeBaRFkYk9pidUvik2PnTdgLhYeKZjLRp6CB",
  "key8": "5ya3qh7yStw9NyG1NzsLhPYk9SztLYTAVYEWSzRRXXauas7dxGt9SetdH42ZUUCBGuvdMv9UCnthYrmjLWgsJcbJ",
  "key9": "5H8SLkam1WJrLNKMwjSdQQN4MuNSHpKM7DeXDoDv8koo3r6ZXUa8ByUoryaBiiSptEwuJxwsmyXY5DunSVbmtHDW",
  "key10": "7FdbdXQKXmybudTDhu9c3SRponzYyCXR4eszQA2Fra2tsMQRQGra8QkB47w4Lzct6sedob9jJhH33GbyViugYmJ",
  "key11": "3RbpfSWfZU1uQCs14TyMBBDMQKD6uYNpKyenRdK3gJ8Rg8sPCzokS3FTgvbWPCWSEFwyx4QFsqxdeCqQXTnSyhQk",
  "key12": "3NV7bZf6UU51WWcRFYj5fTQxF3mXp1ESfxYfVTi778mqVZ2b4LrtXB6zHQnFQPJwrpoxHCMkpDCnCNVBEbRVL58J",
  "key13": "2e3sxDYHfzptKzQe5GvGtzTEQ6DFUeM1nVLocgbFCURx6PWkkPTjtMLjVkHagcvWtxPt38k5mzB29VpYMyf1WqRf",
  "key14": "3HLFY1ggnGqCbS2iVQYgnL5thxeDRvnPXCrW1drC2jVinysXx4WMjEG8DihRLWibv6xZs3deCVCJe5cU239oVUfW",
  "key15": "2TqSad4Bw8apo5fy8rA6nNobJGhwZyJ12QYvQB1DyXEs3hVHK9zbqJXhn818CimJiqUaCiYpNXMLcoJCqHi6pc2e",
  "key16": "5dRV6Q9eymEeJZN7hCMsFVz8uFXpRNVA42pRG8RMPGmxsYd5rj2Ex8Je4YZE56g2ysLnqxg4dP1pAc73ENM7oUqW",
  "key17": "2xWAB7VRmuDQRWggcgB5K9pTZk8NeycMSbYZ7WxjpmgTsfYrF94eMmXiDCH5bPtLoFJVzzi1dh2AR3c4xWE1bTgd",
  "key18": "5JXXm4yuubG8QnwHdFneGgmo7hDHvz7X5NnBQQ9H9JxxjauU4AKMQ2sBGMBraTV3wmaj6yc3pEMcazaEZSfmYmaV",
  "key19": "5qz1i8U8AB837Zs5twv9bKpn9TEq588Hqc2yeMbtekxTAqTWCxopHXtXA7ptasDGYbtsg1V9Sc4JKJ29LbqZs9M",
  "key20": "2EAS8PBPbpn31H67v57EbsJhZuyFhnpiax9nouEBx7iqDNBN5Bqhe8ByrWpu1J95n6P9ZVsLp2GFj7hffqwAG67c",
  "key21": "3HHdgEFqL4QU1acKsYqBad69mZotGS4K5pfmo9BV4NpBUJMqw2V62Xh5eGyhHCxYhXLM6giRGuQQckmshXaefsLm",
  "key22": "ncrB2F9d4CfXtyaSYsv8tjJCyeFh7TryYZjd6QVNf9jHmFxSh8E58UMTMptryJGQRTQbaoW2TxJQJkSoA1tESaG",
  "key23": "2JWDquppDy3hchgdZvMnvbcVEes9Jrnd8dmzDNVYi2hLiKt5d79PwgKBFq5UXp9UbRXdj6yYhx4quVxskprenHwo",
  "key24": "6VkuJoA4Yu9tWhY6b8HwXwG9XSbdCA8Wjh1zUUoZEVkLiSd92KyAB8U4Zmf9CDGknnnypx6YRXZhcrGe4jiekU4",
  "key25": "45WcuG4s2V9j5rADEPZMqvy3Scdzfjzp9gUcv9P9QhHPvfcKgeFoicyeBZ5Loy3tK3WBUBrzAzh99UmsKRCNGCEN",
  "key26": "22dVNXZ7mxguSYvoiLiS41MXwmeox5ESnQMZHxLaBQHL9FPrTw7CoJzsZH7fAQeySRXs6MWebnnuqcgXrsaR37tv",
  "key27": "49V8nmZsJZuUJLmGNH2ixynoVc1po3qDCY2odNRxc43Hcrmxn7wiQL1z2mCu1HJMGQyBgqvXAmgXvdEng6mFVm3i",
  "key28": "3mCWdSme2mJ55mJfYJ33tKDTJsyydCP3KFnmu5UyGNteccunkCjWyUiVEiYovShkzNXWWHAynR71yGecD2Kuv6t5"
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
