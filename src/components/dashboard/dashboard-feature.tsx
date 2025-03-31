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
    "3c1kw51LD9W1fjAwcHCLeHzBrsDjGn5QYX7U4G6uEbsb9xr8hjM8Snws6aH2yWQAtVHEEht8cS6zH2XY8CGqWbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNnBEo8hpfnvAwjhSN4mDVAaGNpUawkbERgsGh5JuDTNjEmhpW4pr1XBtpx1UMyXGySWBuA7zwe1Z5WkcTyozT7",
  "key1": "65ngmLfDEDbYRMD9zWc8e1k1Mr5dUjs5m29uDAWNqSiDp6hQcHUSztvycMH26d8akNUUugTDmKxUwx4KTEFS1ZbF",
  "key2": "4bALiHCsqkuRwvrxvstrd9kDxjrQgcNhM9618Wtoh8DqoAY4MZt8ryT36DKU4zfZFeyDSvkCpekxLTN7A3qKYEWx",
  "key3": "59T9E8D9aY72BuwyPUbJuNi2cjeXRAUt8XF4pBAWabk9ewgiRMVWfS2hogwJArh7AfYVvBLXh7sx5VBDQ2f2DrCQ",
  "key4": "3bD6txDuFnnvR7242TWBBYCDDAhaTUPYHBwZ2ji3H6NPqEk29Rq8vLNRniQT6TnwnJoBZAocCBeVadH9seXyatX",
  "key5": "21bbsRy1xKcw1F4kr74n8HRqXNXZC9NhDCg4gxMRvV9xisbuqUVzj9c2zcpynnWh7TvvzPE1D44HH5TkqvTvo7Uu",
  "key6": "5EFSpdZmVfgXNVY7xgpJMV6A8bPCGZjLwqEtSCSGenZw53eCbLjvqubQLnx7Zg1SPsUSwXgi12AeQg6h4FB5kNLb",
  "key7": "2BJvL9bVCCku7nm44NTjcBaYDE8dB4WXVPm3jLE81BCrD7z7Xv8m1WDbxXsxofU1BT5Wxam2BSudG6RPWV7MiVH4",
  "key8": "4cSUpWSB5VQimDYWT41GciovFS3VsS12Va64YMAUjN45G2853dSvSicLkJZJTStXa8nEtcEBWWwTb84TwMd1F4Rk",
  "key9": "3KoWRb3HT234Wzd4bRZoMGjPiHQh6rTbL1Pk17MRsTF9gNEqEfxSmy12rppsb6RwUqtbsPkypSy8DrvcAKd8FS9u",
  "key10": "2ewwSdAmnpjz91U7CgrEzroP9sPEbd1K9eidBBqByirmvJnD3LLrQnB9Hjb3tQdnGknUn8LJDN1xZEfPo1avPV4t",
  "key11": "4vf4fLZbGCdomUwrby7MrQS4CiiieMBhEN9CJ43egq8uJWHSAbQvcMidySevxfEjyRZqug3k478mxvCmTZhRXFfm",
  "key12": "5zKGRDBj13pgzT8mL3WUgryDAEjveYvdNj18zkinNvRnNbE2JTLqBmCNqWMS8rGn1V8iQzKCiB9kgDaL8CD2Te9V",
  "key13": "3nYvseMTUGcteoBwBhSvUPCZKx4yb4iyvGeKtkVDmvFzK8eBzos8GFf44fFay9tGhphwC6GKfzXoyVQvCoh8Jkch",
  "key14": "27HtrapvDmykPcmdhbwNpJHGucJCPuKvv6gbtEp1nkQWEZsbJWPssj19RVQoJ41ggv8DHp7KLw1siLZCFnjnM69V",
  "key15": "2nhCbyrGDbLjv8AHaHyDDYhpPpE3aAH6NkjMHMqBPZDeTbkHVKTVL9i2TUvFSjYWzpbd9qV2TwnN2D7FqHskoqoz",
  "key16": "3cSSabotBF3MPT6nMV7YtmadBaqzAbqPRSd4KASTMMRbntXBN5B7Gq7MofiYXzAbswJ39y7TtfRf6MzFq4Jhb8GW",
  "key17": "yibDixFXLgQ3ACrMdrLdov9VaUznA5UMe6FvDvhkRo12qksE6HnhuEjyMGHkHfW2D5CWEjNDG1Nno2WftkEbNef",
  "key18": "4ppnwSRKWknMtM4AjhBPFoATvrg6BLm9aY8QTUs9dviqCYSa6Rj3d7VtDtDhQ3C3izekc3cGpF4f5DfqK3dfGpba",
  "key19": "8eWBRCUQNqKZSvcVdW6HKDcx3wqzUZB47qUPY6tD5WdRTytSKX9NApnaCtVz4jWeA4Wyzer1cXZ8cfEgLrTUz6q",
  "key20": "4f8HznwnZS64ebFJokK85jDZZSS6XXDmdHJjJ4kutP91eGP2RiFSuZNmpXievgNH82DCp5mNg8ro5n9J5mmhP7Pk",
  "key21": "5heRMkQEwyWPHoYC4pKULtBZrn3m5YfurBudU8oxpzJWjfpJg1jYUEQcK7FNEn1x9KVKqBmLesnmhE3ut9e2g7j9",
  "key22": "2SsKAEYcvBgiJLDucTyXqhMSYHhGoq2DF8WFJKoXtVDJiJu7H4MAwm3UyQSjQ8AEsnrzF2KVLeyrd7uUwfeidv5Z",
  "key23": "3o4sRB9VAUJx6bMDfWPTh8mBjffBeHZKDC2bbLZUqhkRNpdHZUngLn8QxJ7Fot5LLKyPz9s6ntcAfoNucz4sMUX6",
  "key24": "2njFAMVEcZzLHrz78CKmaRogibYDuCHJdkbNQAaN6Mi1aVnHH5kPFD6JH7TkGEx53V4hYxMGSikSUVr2XFaVBzJh",
  "key25": "5kcqoNGXFXUSABgfi3RSc9BGSGXUhevbzGGMeeeZZVQf8rWDfEsP679MGqcBzusQAeRWzPRMCjcbbK27EUqDbtav",
  "key26": "64Nz9Jo3RymBgb1JMk5icqKdkmDyjbWXjTLXvNbjjSTcvMqTvEcWMBrokz3asHE5AQmDfL7D2qKFUoB5DUdrKaUE",
  "key27": "yMX5V2B3hMHBtkAoWUDzRftSE59jxh65u8XEbRiSGgtjuX8jfh2z7A2Ah9xN2G1FJewHFm3vgc9BqDN6gNECniN",
  "key28": "2Zuo4MqbHwDU1AkqbYBnjUyE73dYA749BaWRVCmoM4DHFpcd6EfS9xDFf89Wc8dxh439ptyLn2aKEdhrFEAzSCjN",
  "key29": "42RNZRXHuEqAvL662fGkqB3mUqwLRiUraafkR69daE5ogLFu3k3ixNroZRoRrSCSD7hn4muzLBoibQZ9iazp38Wu",
  "key30": "cU1koMqv3JXT7EXMDWnqNGmdbvucTzJz5A5ceGEmRczRHGG3VRhbbH92DKQCSedpHYQJEDKnNNA7x6RLw97vtfP",
  "key31": "5Kz3HT4SS6nHu1Nt32PQHoomxeuDAqPSUvhY91LtL9DSBHw5bqJojkxHuSANieF6CsFZYQmVr1wubuTdPnWqLFhC",
  "key32": "4cJUhx5AYb4g7CJMuVVWpxhrMDV7EgtTBGqTVGBKx15f4ZaZGTQE67W2fwNKZLPjjiGUP3HVbvQkU7hTocZJA9sM",
  "key33": "4HFfNt7j8akUYMMwFMwpdKuj2kL5B7mu7G6LYdJ3fyDgVQbVdhHsMWFcDSmkRfr6mpT7JCD5dVctn7Q4weXbf3Fz",
  "key34": "H6YrcKFtMTSQ5p6u8rg3grw9awdFwxmEooChqqw97AkSVx9R3dmu99WpKBbqw5bVaoU6YVQfKcjdKZpJisKffdc",
  "key35": "2BhJUnc1nZG4YzL1o8dgXyq6yRfLdPoJarxiwzfCAYqx2DZKFKKK1CWDWG5rewukXM4xLEfF9mwzKhk4doCymayp",
  "key36": "5x9zqJLFTK5LbR4aP12jNYcnn23hmrmnMvibv2SBVsdxCAQBGogNXFCemDvvqoNxgYWmurZ6hSTvJ6BeyBnhmLWE"
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
