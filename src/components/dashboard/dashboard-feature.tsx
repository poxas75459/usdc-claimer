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
    "4VpPxbE61tDoc3vysJpuNEGpaXFtX28EA5sGj2NUsEWsgdFuj1Lej9ZMRTw5cfeWWeg5kksFNNBdATcaHgUHp83U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwUvo6Q5oKhQRMzYgujZkbWrbPTqVhfzqqEBZiJUC6mEmE9NZwqE86sH6Y9ikr9s7qR2jStEKnegF6bKCDhRBgG",
  "key1": "3H4Fd1vo8RhP49VWYtaWiKwyaDxa6hrfn8dQfyHVwpA2iJsHiiTqLNnAiPQqCHsfYmaYTbmmvEYBCAXmDfwYXfVc",
  "key2": "53LfM1Fapm9uZUDuzbbCY8bs8aCdxL3fUfUMepe8HQBxx9t5cD36tCFyc7j2YGUeHW42kZyyur5SD76s7kVCz2iB",
  "key3": "3u7U12AGrKo5LsVR8LgxdbVAi4MRcQUPRkAvncR6h2aUpVVvbKCarJGdiXDUPh6LYDq5MjJkEKDv1VN5YXZZSEyC",
  "key4": "4n6vrGqAvGAjkhg41aL6sDbcizRry5WcXvgeAVzrx1n57zFeYVdUCCxNNTQY98dFsuZMjoSXkHWBnESBLz1fpVYR",
  "key5": "4WyL2XpKJ3fMNnGskwFyHcXjFMG32oq3s1AK3b3fZeV6BLXk8yGFgdSCzfxRxTzV51N1LLD4cn9u56NCihb3roGE",
  "key6": "3NwnYrjgLwFuBd25qEgQVZJKjP4DxyjYdnYsriJ8Pk1zLG5GzNm6hRNzq9SaakzGfvsBvPoJurWyANmtYCyWvknz",
  "key7": "4NjFmH5z67tHaEjJJdEbiP6GY4PzLDrGRS3dfMHkpNrvDfwPQc3MDHpAZX9zHhtiCi1Z6cqTB6kWGh7XPXL4ef1h",
  "key8": "3AcSdWqskmEBNqSfCUjFHUKQWh7cHiyFJG6bjnn9Knu2oGFi5rx1HinUBwq1UyqGbsoSAXviKkj1G27r7mEDV9h2",
  "key9": "nUSUB9uy8R4V7V3Q7YGQJgzDLLvgKmuuCi6FCdgQUjesiWhFsPPBzCvRWpne69SvjC7f79L32ULto8F5Q3SF6tW",
  "key10": "4iwPjHJpXfETpz7HobZAa3SSFhiBUPkLYhG7TorRxTjoQWqiK9Cv4BzocB1pwFEfHNRgG4KKhMkHyeGDGWAU7NxF",
  "key11": "5vrDhvfUhmxSXKAbe6CHvjL2qmFNX7PjmqWBY1mYZCQ513RPsGeqmk9r3tqPrTNhryzV7wrYkvJ2MgH83zepnCU8",
  "key12": "5eVkrok4ktCdXu7hhmobAjXZqJpSU9V8yAzPw3WmyEEpHQp4PZ5CPyrhqfPMScy9Rx4CsmQ3ps24xzCJzprTfucZ",
  "key13": "GcwbydvjR7EbScViA93pF2LVJedNxPWYzPNejcqPgo6WRpyxCLe3mDoHViJj1QR4UwRx6Z7wFxziP5Zp2uo9yCr",
  "key14": "5uhUPVVMRrB3T7WNLVYmiwFgDmnorBFVTZUE7uKPtu6VUSadciXXCyksxfaKX75XEA5PAmQTWpzFDdYWAzijrqFg",
  "key15": "5qLA4i99HBmA8HepPbTQmiC25pYUirnA9DX27kaFrP5Axp2L7EtVc4eZJBCskpDsESHZ4bEhfXwdtV9za38kEhVZ",
  "key16": "2MpDEw22743rF8JxEGV6X2428Kvu1pTo1TTaoJcbt7Ki6FJP223TFRbFi3gJStmSBTozTJzKsHw3b5dzfZ3b7AnX",
  "key17": "4Gpnhx9CgvDm6exUgEh9c9u1Ahy9S77TzxVAPK9yonors1TbhDzJUqnxVuoDtBSpAQWWjrrCJDHkCY74vDMZiof1",
  "key18": "qiPfLiKoeSoPe75x7YUkKFjLq3LjfXFQfasoMbvPjeG1pniVRWfqzTPzKv8NRWjZwb5E9zbdMKf9PJBYQ9ie3aF",
  "key19": "2bWERwbrudvv6T24DYidfF9CJ8oHxjtFo2WyUfagTE7x32aPGZT1iCgScxJj5yMtxdi3aezrmtewFCL9x6jktbFT",
  "key20": "VTtcY5ESn6rav1RHk9uBpW7CcMLrR12TFDeLdVQhRRMM7poqphegt9FraM8K8UTMTguvofr6vxdXspWdJGtcEQG",
  "key21": "42A4ocHJZJZYvcMbtNFZofyAak4zwxrjgmUzXz9TJBg8CQ157o8BrVTNWiusR55pEZpk4GGrtXX8jRVzVSqtVm4f",
  "key22": "5wubRAjXn55KY9tuje3CDLm3tJA5i2BGp9C8WJpFwrezYccVpc1yZ7UkniHniyKR4nZ6tgDgeSqNiqYjSn8cQp8d",
  "key23": "61JCNawupCPCvJ6nb2AQsftHEXeD1y56HeU77mqGJwFvmeLXLPCB9Ay58aURX6es6KwYgAtQgNnnX6W43Xq1mTpF",
  "key24": "2NX8wP2S8H8J8eybGVq2x7ntkvwg9KtcnfKGjTQMuG5yRYXykQBEh8pEqMSuT8W4n9BP2iF5Xvz7sH2NPMiSM8nK",
  "key25": "2ai8YNDZ9ivERMYC7Ffq6UTokod4F1ZSwfFPFi5Jyz6PwkEbbM3mwdYcqQKRZs5grYBY52mpndo5TXbDH1P8wUi1"
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
