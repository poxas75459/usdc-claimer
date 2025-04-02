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
    "31ibqdgFvyZFMnGynhrzK7wuHagzxRHuMXHFnzCcqxZ8GMUXLseDjfMS3UQjTZCu1PKpAD8Ln8hXsm6DeE9YySrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rLGCrPVGn2SoyABZZqQUs72vmx4Wise3s4FJXYMsRa5SZTJtVkyKA9y4tjBc2wby6Kmay7cVtdAv2KwBHAMJf9p",
  "key1": "3kBLAnGQrjKNNyVgzoPanJFL3YJ8ARwoETcVPU4ETS5kcnqBYZk6CdsAsQAdyz9GpAcojysfpPq2ynkH9wNZaDZB",
  "key2": "4csoJmm7Ym3GiF7sRtENhoQXhXhvA9HFkJJ7okKE7c8Mr5pRrQhKBfNDdDLjoQjXse2WJLQzXuBci3wyruxrM8xn",
  "key3": "4tpXw6PQAD5ggc28kpbFEoZhQxvBNDsTJZvZDrmq13BaZVZXfpwLDzL33GVDcpnz67aV9VD9WY9yTci66RjLbkPw",
  "key4": "KHdmB3KGC4bnpFfQesGzghFn6EKJh9RrzmT29Z2WwJMDeZhACnfqFGyDgoTwuGdc3UYgffcCEdTNnoxq8uyzrXv",
  "key5": "5CQsCQP4xRrfjiY98u8qZn81zdVB8NQReoFbHAkY6B9CueAXEUHUFTi21RHAJE2XgRt5NZxyrN9m6ZPTrTttBvXY",
  "key6": "4cqMvgins1oxKToSXopMCtXtjV1tSGne3kw8cbjARd15RBGyWswz5TgauCvacEzqZEiGLhPvm7yorPSCKxZNY7ap",
  "key7": "4w4awBLhmRx7fDUWDifJu56QJAo8ord3bnDMTpPkhNVqwrkR6bCxFfNpM5bqi5oJsSoJQhfREaoW5GUL9TrTZx48",
  "key8": "44xtRVrZosG18oHdmbnWz5rDRVqU9ovosh33dN6B7DqjmJfsk5Fx1YAPtVyGmLrhiNmJUxWfNB7Pb5FSsxK1DUmG",
  "key9": "sbgxUfNUXA3ywicmMQxsDQUWKsQUUmHJQMQhx5o3BwATKQTpLHaF3DFwFc4gvZBZ5UnF9uYn6cHpWJwU8SGUnZZ",
  "key10": "4KNKng8ZxUoJgTufuAzVREGMo6DQcXMmBajTgRuYbm7BfKZwLyjFWQjjKMpe3NN2Minnym8dsZFPg6hykbs4f6HH",
  "key11": "4uXYkhjkXYL5FqSFQfvy3qvdustUgFDcTtgr25RmVt3tVCdCmgPJmREvt97DA65hMPGEWrJNXihxUM7nHeHxGWht",
  "key12": "3VxsEeCgrcVVxwWw6bHd7HFefWh5yMHJeGYe2siLj7BvJe5g6vTvzhDZvXzNHJ34QPpo8Zz3bJQg2ucenNMhzGCn",
  "key13": "qnrpGkFRFd92vy2phrLysq6i5ukzqMjuU7DL51knCcF4YeEqtLwuyDhWwqVDUWXYS9YJdDiLxDEG7krhf4qGtGj",
  "key14": "2qKUvm49Qy3tyqjmNgdudPVpDVo4M7rmvopCSHuP3DZpCm9q9WyZP7TmZUDEYK141m1Z3JzWyv58LaCiK1MLDS88",
  "key15": "5PdmGMh2MwB2eCUH5bKShyNq6U3VBaB96K7MoyF2ENSnJWw82u1wvK3JPj5YdJfSbbNbdnWoMuwNPQEmupP7GKZb",
  "key16": "55iqW8X13Hm5acXxugYeJQv8eBqn98pRfi4d5TLtb2h8FRT2wPz1r2Cr3uMxEx1FtrmV1WcKPn3wEETANbN967PL",
  "key17": "GCnbXb6cEMW244Y6L5L1m7J5eYJZGM2vLXWdFxndcs3hfGXn4jQdfmHFQwdEGHnhFVsTNjKcaya46D3tuBQ2g4s",
  "key18": "4ukgZAuEbZDmDZTTeerpVePshRB2JhPNKagxPb981W5LGuKCKtyioYJpycHDCN8wQG1wSNHCkHU3DraqTDkhPnxb",
  "key19": "3FvMtU11wR64mWKgUmAUU7asWDEXNQeZBkjiDj7uTtTsQwtKHonvbZxPobEdNqEPcJNQVt5Abwzi1TdSAshB7TQt",
  "key20": "vWFCj9gJJbkDnUGG34xns5aSess6VnYGZtk1dTxhGfictbeRKkJK7qTKwYSAhJ733v7RBvzJtAMZpZjhLeB91Me",
  "key21": "5qveoQ7JKAayg1oi1hPQeHUj4hjf3KK3MgG4xFVanUdCQqkaNVg8aNVWmU5wAPxbzC7ha8HLXaWi7UJkmFL7DJkc",
  "key22": "3EPQkKKeiLD48LoUWYUkzjQBwm4tuGBbeeBb8ifYyqErxAWj8tuWxWv2VPp4AXCmvmmA8VDLMvkhPuiUdwCQkWQ5",
  "key23": "G5phwh2SWPEHnubWfABEaAumKXANdPwsCxnuUP6YGRwAw77CdDt5GudJBP3vLbQY6PPnYRPqQThPWVDgQafpEo7",
  "key24": "47nGLXGw1F3NDAUWBTFU1wdFpEr2h36BduYyznkiU8zKhkiQy2iB2ZxgjAhAhRecmjoa6vKcW1Xt9BJ9Ue7cEuKG"
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
