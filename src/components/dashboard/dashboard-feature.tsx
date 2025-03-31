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
    "2zBhGLxqhRHUny45PXcMteguTdo5Z9Sp2juBHHzBMkE57ZteYmvabRvrvSyDWwEJ3n1stfHdem22iSDJfetdFtGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54TxUWDGR4XKnYKuATaTHRaLV58WSDWodvsKgDz9VCCq7bArReHQc5YUwUgJ9m9ChPf6QqBhjYUWuL4KB9Bgx7ag",
  "key1": "9S75NQf6JcUiGxFKLNFySMKv6kPzu1BgH8ArFWbApJPBAu5uctRwgaSdnnPQVarpXZUH4vf5VhEqptjKAyfYhPo",
  "key2": "4wMXGTPqrKrbHRZQktvLfTZAvcEho7E3HT1i1g86QhhihsTaNxY4QGFmyuaZQYpvtAZQsiVzr4fABgavkjRFpeps",
  "key3": "2DMbrZ4EHuv95QGhp3VCfC6BRbcZfGh5njG5BLpGvsykYW3P6R9saUbaDakpPVASkbT5i7k3hYwzcLNjbayUMvt4",
  "key4": "5Am3nhAXZ9Yenvbfyejd7RwZ7DvLCbuT7i61QYk7gYiHi1tNpaB2MdNu2AJ52gHPDskhrKtuuDyVx52wNeUpiKW5",
  "key5": "2k4LJw3qqM8rsRtf6u4o3p29z8UfEo2MhPQZuaf8hTgm9xFENdofPkatv1CZo4mFnZnpEbhkMKg4s3AVUCmScjwM",
  "key6": "5BFib8w4LMyUqK8gaqq5Tkv94faKERWp4CXK3an8RiyNQyT7xXeCKTA1viT1nfv8461WwKH8BgB8gzU1rLr6fi7p",
  "key7": "TDa43vhQn11JvP34RN6iPVhkXvZfX5dcGf37SFe5zTmAVjin5Ut4CiT34C5xebKqUBjLE4wEgcuaPbU6TwAPrnS",
  "key8": "4GJ9YBqavQVHHDFwDXMpyjCZsXgohL3q8rjUxgd3TWy3tVSXpnvo5r5a5VPCadeGUh6hBPkhzDRM9g7s1ZnF3TxL",
  "key9": "rbPHuHDkjBNaQ4jTfh7YVh1EGkiXxgDv6JehFi2fr8DUhemnmEqBmerBMmCLi7pPqjBSAnBELwFmxfaavx4d6TE",
  "key10": "29vuCjcgT1ShQyTcARapf6p1BnaZhyLwDukvXjjfjpy1R6ErHMXiLHNyfHjEayc38LjUqHrBuexnDt3LXXywE5Pp",
  "key11": "as2BeEtbk1xyzmvuraFER97vpxMAiMgfN43WxnLR7UW1viQo56ta924aPqsbDZsuZMDnDauzvcvw85gMyXpRN7y",
  "key12": "4kgtJGeiJAjZzF8EJJBFDLPNRK7Q2GyoDSEbiLeyH1T4CshN4C7nzF6LVhPPMw75k6JUi3FjqfPeQu7jAfwyGt85",
  "key13": "66NDKrTagPVPfaqxJdGr7ZPMpb4pZtxwnaYtEjSvDcSjKF9dacCmAHNJfJDuoQtfg1rAjiaHEeHeYxoe3wABsBBL",
  "key14": "XnvbR6HWSTyJjdYJNAM6yjvYAiNfzp6pA6FnHQDbr62VELKA8KtkDorXL9n6FvGm4WvDkbYuJiAHQu3KivFTypM",
  "key15": "3i43j8Ftzn9Fz4mqfjNWZc2bRrk2ofypkZBDjtkX8HqPHXCAn82Xp6kySiwxfgX8HxRPrhsTPqrErBak25gQcBcg",
  "key16": "2wnUZGy6rKypcXC3fUr6vsV1LLcmAwXbqtxLj1EJjBei9Ff1F229X9X61iwsraYctjSwugdutwucnjBmyGpAZ2oc",
  "key17": "4nmSxFa47HNFxykA1kMZeXTajGUVxSKJJBNr2KKNqmvuaRpMbeBhF1xFRnJPiQyAvVe38P4QxwqcDWdqBqaGx46z",
  "key18": "1yRjX4L93YdFZHYpVnRFAEfS4k5hh8yZZixBuuKRxnVHG8ET5jAwaXXGoXpqBamh47ZA2DJe1WwhzfzbtN7uSAb",
  "key19": "SMqP6ReHTi56GprbAdnFjVNrvrX3EUgk5ii55t4KhYWHUKLKpHgHsVVsctPoDynBVFz3SUPZLCo5tukMciNGwiJ",
  "key20": "4zwUSUyLkJUcWW6xjkkYChGHeoBh6XtdBr9KEzN9ZngfqiyfaHiF2FQDu5UBQFkqzMkvHSNs7QCMyE6P3HjPrBPB",
  "key21": "3ZFvGPGyUyfGZ1yf7peTLjzvN16YLbDKyCbfWwNEiXasRr5jSm4JaeUrUTgQJ93rDjRJyu321eEiVtwdyfajoDJM",
  "key22": "4hYYB4Z7XoFWJZ3kfKcWMJ1nZrYg6JGqWE5tWbyDr5dMEZbTvmVTQUzcCD9r7DMzj8AJNvLsnda9wfbRPighK3rF",
  "key23": "2HziUKUkJv5jBvQbMfwgVZzPeJfeneQ44SpH3NVPbHvfgFQg5Cq8BLNJKd6UMtb6acVuG2yLqwN8m3KVFvddCq5V",
  "key24": "4VVoqUMgFKGoLVqmTvb36apdPzQB61PMqXuW57N3pg9y9LTg4CaQ2bYnzrDKRCzmyLXhjLjCXw4HkMKsDvT4s8yR",
  "key25": "5tcEW6uYurdVLp66JFh8ohhUcXr8hA8pxPMyFD4HYqQ5pHwbs1pSset3GXCWUXdbRnazLk5zR33VXVJYKUBb8vZ4",
  "key26": "1MMSDWouTRgMsCQAmP2PZFEKftaNGHNduWmQ1ijw7hChN4QEGs83NaL41cYB2Zz97gy2izq6HtngwhsNe6UNscA"
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
