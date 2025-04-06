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
    "6331Ksw8eb5tTcxuoDuEACRsr3ZjFmVHDgMQFJ4rsSiMYni4vPEFnZD1GYPcAivK2QD6s41Cwd7bCoCYxYMSgBKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7YxnQkDF6hE1pqM5M8Er5k4sed5CWmoe8MNcPjiYVU5x7ecqoCgTE1fCxpzaob5svb8eKEt22P5eJV6k2xJpcB",
  "key1": "3KSQdzP3nKzV64YREXp2uk4BRHTLgzfXaY42UyfWeMFoQfU8uzaRHx7iqzSbLjh6pLqSkAGqREa64SCxynBrHy6g",
  "key2": "4phDTybbCc8K5oSroeLnhtpi2HKCqZPQfVRmz2PHcfEY1tc4HmNdB98CeQoqGaXJ3XT1UTNchsqQhDaZLmBx7t4X",
  "key3": "5e2aY7ZLzZNmSbpq8UU3ZaFpkLGY2wrYpSfAddZB4638Gu8jeFEFip8hrExRsrvqaDfVz2qa1WjRS5RXC14i18vH",
  "key4": "23G73UzVwDjHc8f8gWWrj3TSyKczk1RbaNkRzNMEiKxcMDFPCB9NxaVCWh3ex56NFmbGiGfkp3Kw6iUpdaA5xcsN",
  "key5": "4mQQve3uYEzdba39GamfhfQoWavwjVUgcHG6mRoZvnta59nU1c3Pi9qnspNr9fcGx8P8uLKkztbfvqWUAtAWZVSB",
  "key6": "3L15AmrvMbBdj9EvujKRWUz4wnYfXmwW2ycj7GJ7rBU169EupAZqLrtmvWkCpA8shM43Fz5kyrPH4nHYpVAskdSm",
  "key7": "LQSyGvdjnXb4UDso7QC9EFpeckZkoZC1QJusVEegdra6BpTu1CBAAYoiMt83C1AwA6e1Mk25dPkWUmAcFaqWwAb",
  "key8": "4rDdRC3tfmAeEwmBfyp28Tksv5c8BzemM6ZWHeupX4GSHKhcDMmqLvtnW1HGdL2ovTySBstF9sma9ZHierXLkPgE",
  "key9": "57i5VcMiFE5C42maWV5KGiRHPJK3bMbhe8Ww6pEUimx1U8TKsrr1XPVzvCpxdn2DLCFvRfdQ6FXWXNkJ5vaGNk78",
  "key10": "3Vi8v4D2rcStskfx4dD9gA83XoCXrEfg6obE2Lu7qYCgarxmCjMSw9Kxea7Dur6822Cneo21qDHwZq44Jry6PcnS",
  "key11": "4bRw6qYECXoNkdkuo4oq941K1JVU21HGhff7SG9UGDbzBhbaVE2zJRNnxNGvVV4mGdjP1KRVabBqemQys5q1x6Qq",
  "key12": "3kfY442LUP39corsGQYamjraYnnUrnqqdxcqi8LtQi5UPAQhhPHB1xYPLS2717uUVSVNymRwAucVBW65UUDAmwh",
  "key13": "xhVVrzGbs3Fc6WAANhhpQV78yG6NizemaGpm6JPN63MjCFRbF3QQ4MSH6S92CSUMFncdUFe2LQwAAqoQLez6bwA",
  "key14": "2Smpp35Dd1DfgSAsbU2xKK5zqca9d4zEzH1mvMTNKE1hQKCdfnbCsnu41ovpjrkXXbPCYm8jEWDiQJHi2UBMRter",
  "key15": "hRMBCfVeqQJQYm7CBjHeZmDh1TP2XzTBZsnYa4vEfKaJgRbG9BYwyBjy7TZgeRwEeokrCVBeQQ4uZRHP1FC5r8h",
  "key16": "647Jp4F82AhbhCPGavE88QaQPrQiCA1sJ8GRNUur21KzYhuJW2LEgFW2455x4v9ozL4TuYJxq8EP8p3jL3NZ8TJ8",
  "key17": "37caoaT4sUkQvqBpzW7v8XfjsYwCZPrAXPzSBSoCy97ZVM1oaYG12zuKZq1wrZRvbvTK3JPuvzGC5bzCTcktvJsK",
  "key18": "5AELPGqrFgjSsx2YXHWbznBqoYMtiCBAjpp5rHDQ9JSicVuM5Supa5Zx42nz1QKYyPeTpJ8VBK9m94fEwd5kwa9Q",
  "key19": "51EWb9ui6zJeRDtdan2pLkBRPhjVgsaUahhCsFxHYkyekm79WpraDLBktENJQfpwbf3HMgob8tgy1pk2GGCSEPhc",
  "key20": "5TffLY2nZykrgpu8J3t3BYuLLZPDR3gqPZfUy6wTNgXhawHRuANR6QqQRrkkqk1HAXTCHaMY5nT1vsnEWngsMF4u",
  "key21": "2dgtWYLgXXVJNeWWcEWUVCPEZ1qDi26kvLT1NetG3pj7E7JpXBc5kfNcwwboo5VDen7RtCXLwwKYoYpPpUAwNDoS",
  "key22": "2Atyu5sVZmwURDGVPUSCT12Cashc2ydAXhvgWAkH4xme3xEt3CduWJzxubGsWn7aPxSZxnbTkWjE9VpM61Jru1zx",
  "key23": "3i8yhzGaQDiw3rVAMFgfAbU3SPHfLagG3xoBwHHaXwUuL4pMbcZE7VMLatmAwhoM12RyJ2LGZZXdU18AhFLCdMQy",
  "key24": "3ySA8LzBfaCJA7o63fL44jqxxCVGEKATeY9Nemnw1V7DYFw2TiNwxERosUPSoTmN5JrQAPZLQu9t2MaKgxgcwScZ",
  "key25": "4ULqrXyL2JGA6RYohYjZzxu5QtgQvYLVtxC3zyJ1rGuXv9kKGwD9crybRNmK58ifLe3W7E7LVLxEoa7T4ojHnx5k",
  "key26": "3CXCKy8CZKiGjLREU3jZ44UDnZugHLLwaLD5LegLnehAwMuihnDzG7RmGEzbMucTxUk1zD1TdQtJc1aE4PVgBnes",
  "key27": "51mjrC5ycdKRh13AfW1hm4buwjBZJcQzjZYkLCTsFZDWdbzCEGRWZ9vNZXA47oh8ax2zfthLxuXizFUY2Lmi9Sxc",
  "key28": "tzLEazXgSHT9RJVi2P4QzBQ6VCUUPkgigQ1uCihTuEHHeE89kcu5JGm2yqyL4WgBb4xDrgnj7RxVaDcaaqGC3W4"
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
