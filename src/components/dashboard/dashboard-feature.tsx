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
    "4EwEpkFvZFiYWR4tLZnbtAQYVc6NSb87yPBUuC94YzAhLQ6MBWNZbzp8NUx2Adhe6C6Bux5ES3P2tnETwZYGCLmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5coi5NWLj4MFuaXTCzUSEbPmofTKoppJSNM6pQ4uYZK7AhEbiUYur8TqmisxUx5jFgVbT6FTNP8nHe3zfoPLJm",
  "key1": "2uGQKFhPATzJqZgkHm9QMMUddzXbuAkBQWGTep4wcPUMjQGQo89TvN63ZgQmhyYEY5cW5xxd11oMtxCfMvq2Gurw",
  "key2": "Pcvg15ZF51QPNY7aqUQhx9PNk1Hzc2eira56ReSVcK7bzmS56b6VAHWjHWiyXFFaRodNKfcKAK1AYQFp2j8j4bj",
  "key3": "AHo9n7KHWkj5HWdhNmVdMNn3p1jWMoJ97T3v5mR3DtV8tXnCxLfuCDenLXcDT7bqxRq818M5rpyeocLL8RuogRt",
  "key4": "22yrmvbfEzpu85BFLv3BpHhrxLAxUdvVe5RRoE3E2eRKWnE1V2kpEGT9keNQHQBD9L5s4abMvnu9SrK5gAvjqTz2",
  "key5": "4H5fMUaZjZ4FA7e5qg3AZ8VnSqd67hXAzz3JBVj1a1NXBkTYZe9b1pv59MAZo9y5potGCwgRoVvGcVoGYbcbYUN5",
  "key6": "2vZjtLiLZ7kDaxKeW9c9ubEKk9sox2nbLMAJxxkUBZq5ELqzqaJuy3xnhqvz3ticFQZe9JNDkf3SBrqJnmLNCAMt",
  "key7": "4pKfkw8U3YruqSgiAUeTSeocaP7FTVNSHqXbHs4P3Gk9HFj83mXdRxnQK9M6ChfDtwKaDVYvzfjgQ2QaB8y5qjAb",
  "key8": "5Ye86Cu4KnVCGJZNNQeJfc6EeHfMaN6UBewMn119XXuCCTSa6oQZPzvs7JTg4crMmruAK79Kx5TEyvm8Xbm4rrFX",
  "key9": "4ap9tg4hFJxfMispLyQVGB3NCSwYFig1FNF7kRWeAt3SAVUWDdWxfE5t7rD45viTjAYdM3cB4STnxNYFC9j5CfLZ",
  "key10": "4odbK7n4kfGCFNeCztXMgM6E38xgfzNryFcqxpWmDbDJiYf3r2ZkZFpNQ2j4JUunHBnPAcSs4rNqUpDeE8sAVVZm",
  "key11": "25QffdzX6Lv4HYxpPmNvkAAn3jeJ396XNVWJFtKArRfXRrV313h2GvptaQdkDVeKwDpQiRduCtJsnGpJmwMjY6mC",
  "key12": "3qvyVrHFrgLh5Sx1mkwTmKW6RuqTzxZz74YFffmr2kekzDuaxVaHQWZaLHUHDKV2kD87sbccv3CMcBUia5qymtnZ",
  "key13": "4nrUMNZv9bLa4esuxM6vxK2R1icrGGWd9m7HDhjqMWGTmQYbaTWzBCCjcGkd8as4cVMi8fBP1abZKkH9Zj7gcerx",
  "key14": "4zNujJzuU8GcaS7gpwVvm56aeF1hQXJhMzAaihYhJSnwim1CaTgdi4VvwQHGVwEiTAgirCLgxhF8wkwhPAcJTxnc",
  "key15": "3SNhJqYy1FXZC7smmPueTpVXwcK1uov7pBuUsrsve2jfwHbeKTW1wS9VCL67durcUTH9xNjWcWocR6Ktw8PzsYN4",
  "key16": "ZPPyq3CyHiQdcfLvVzB7tiDQwcoCSv6uj799HaKtSgxhgnnwEWLJSnjXsAcd6kdHmhez8Eqd6z4mEmA2ELVA8fP",
  "key17": "5Zr4MQfzwPgiUp1kv68oZd1CveceJz2j65BMSpy4n6BNLuZfat2LvW2FCBafJ9SDiYuZfQHTMCnkwkJyGAFQFEuz",
  "key18": "64t8fjfqXi54if4huRdc5fYv1rdKM8NjYZYbeF3dnWAUAkfpW4dGzgvSf2AwAaCSZmRvnfcgK6poHAti6tRAjtWn",
  "key19": "49cxxnCmtsXVJxMhDuhL1dRmNRQkhVZGQJ5GvxqWW7siKtRNftugRRE1xJhABMNEQHWTK8kaogGkFECB8mnVYXb7",
  "key20": "3HRUZ7mG5asYWZbfFUu9vQC1Rtasm4V31Rp9DLYzFv321jmYbrWEHSkn6n58tREHS3No2qfVV39KjjGtpajcbD9X",
  "key21": "5RQAL8FfpBvS6ULzNuFajsZfTCm1RsZuCL1RBxCXxwzkNcop444H5amQRM2wgN4rAbLeUKh4GPbrWdnDt7h3CqJ",
  "key22": "46pzpbYeVBcFEXz3BX7cLz4mmy3Fem4GixMcUTfAysiYS8MNxh3aRcsYTYgtFR4rXyMzXBYBKU1pP5xJbyjKYwRR",
  "key23": "32DicRFWwZhRpVNCarJLTog1j5Jde2GEX4uyineuRe8s1doQy3z4yubynNY65DdmiioSW9jDFaPcWvYexc7sgFTC",
  "key24": "2Gfi7hXdvZjLE4vDxVvorv1EjuaQMLkUGWjfNETMEZJHyEokF5umatpZkX4A8XCyiKQ9sj6ZHRWstL2junQ3e8Gx",
  "key25": "mbM5WpjjnuYmaDxseGmH5EDfhhU1HnTZHnnPc7bQc7YM54TchT9rFfXjy3YtNCWArqVq6xrNwzVDfqXTjeih9iL",
  "key26": "2dqyzLnDSur53tGNYYNhhpn2byMkjB8Hfg86kFwQzaQ8W6jBWJHiTeaMjtJ5x7HQvx7yRjrCR3T8NZKAxiDTbdEr"
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
