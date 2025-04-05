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
    "3oFjHNJvw2RrBtzqqqyH6p8LsNX8mZm2ZHz7YmT8rKvVnczA4yAxLW9fQRtmR7MFPTE8nf6LLef2GTZ9wS69FUnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqrBcoAHt91HvqFzpAH8RfeLTDkYFu9x7H8y5GnTRxe1Mw2oVhQZ2JvaXqUiRUM72TqHsJZ6jLv6KQG3SQwFZKA",
  "key1": "qiqpXvsXmzBj67R9n85C3hUdir1CYtqTNjXV57hY2RW5vVUEtfvNskxzX2rMv1VBdxrAmvZ4WEXyoWjBfGVh2Uo",
  "key2": "2hwuedBvASaBtqQg5H9qja65MyD1hkaD9JU8jso95xQwdnPGN8gfYseRfN8888gG4ZL9o3yYcgJYTjYVtnXxWmTa",
  "key3": "HTS9nFR1mMH2ex5Wiek17YVimXhkJKw6iVRb65CUvH43vHo31uQRe3FCv25QLZ4QiCGTyESwxisuadm7VsGAWT7",
  "key4": "77Ygw9rSeWnFCdUvhE6LDECubzM72oMVMbNjz8HojHMRcJrd4YnMLLmRsC4PrQKBNvDKcKBQYU8jA4QrjXHWxF7",
  "key5": "3c1fkFvFcBrkGRVYxvTWAWnz9vs9BaWGhpCWPjPzwZcKYiBCpHDPy9eHSRcdeGHmuQEDsPydtJCd6mSs5PbXxr65",
  "key6": "BBtENi3Lx6zDq8SjSyvd6xGHY6GCtVxErB9tpzeUA498aiznpaWTpZWXrTs2pKTF7i2HG6FYFQC7Ak4rhgWkwnp",
  "key7": "3GkBzqWbEckBfNsnCzarCEnpYVghcf1uS9WK6EhAssSkvGCPM73T9eR86KnHUdMPm6UT1vak3FTD5m6HvjPJxYsX",
  "key8": "2U5TWWm1AyQm8aWhoFiJZiQDx4G1SPMZxTkDvDMXjzkYuMR6fMKXwUNHCmWCbLXKPjNqCpT1MVV62nxGGXA3eGbE",
  "key9": "MUt3iAtBA4ZMBKVcJrtVZe2zcBDDcxYQcM2pJSBNs4Na7m3hnE5gN4DxSMtnfHHFgH2a5ZJi86d74WUfcwADnZt",
  "key10": "VnXm7KBBUd66Sq6YnrmpAQjUTiWVJBqzUwuENJtyr4pC42AxgDpzwLVV8xqh4JX3mANAGmvZbe6ChjTaNxUq3oa",
  "key11": "3h5CttZ6gqsqPGhU7FyXxC65dhmLD8GTkPA5EeLu3mDmJoQvcTMJML4eK3wLRVrBwkhmPmiwxm6rQE6fr7nD54Tt",
  "key12": "4Rqpuzo6hcviWwR9e2NswjxvxyL4NJxhfCV4fJait87W9okyBqWPVbV8rGgo9ueMRK6JTNdTbmtasWRexi8wxfMo",
  "key13": "4DyBRw58KtczvXzc5S3e3nZXoap6mCXY5ZHej4gwZM8PZTg3BwbV775ebBiUqBzdUFY4BHL1mUweYMHtHswhusTD",
  "key14": "52hRNNCaE45oe77HtiM6H3JHEeBsoY61fGH3QtEw7NWv5MyVMNeUcc9ekC4kt6Ck6yQkyY4QrciuwQTd2EhbCXEA",
  "key15": "4YzPw8iT2C52b8qSZtX1CebqRvnUKzCtRHXWGBmqpWJuNpZxAKDNXfKgu1p2ec3UHC6vjBGfzVfMyvaWzNsE5Z5e",
  "key16": "qnSRgMBX9hWLZyxoPqoH4Pb7wQsRADvocawdCTNsf6Fsz8Rp5rjveDYVriD9T1s2RM8U2u76HdmErQtps3PnzdG",
  "key17": "RzyHkdEzRy4Dt59akpfstzzkFjuX5dfpebpwjEaxFeGbFLV92RK6n9CTaDzr3Aoco7yuo9WVbS9tLgHqpeLZkdQ",
  "key18": "32zaPHQ7e8HM12b9g3PAQCzjbdTvTK7ULBNaK4mNuDRtgGkVfSxpnmqWL5sN2TU3s3pJUVFNxvsvSiX8kDehM9G6",
  "key19": "56Qi3m2qYjVwa19bdtof1rKL5tLSt9EHGKY4pip8eioHyjxCdvEzXnFiLmdWMZMSU26QWVKWJtb6WiXe6FqipA1W",
  "key20": "5QdsBJXY57k7Q5yzAFVDNFhEhrEaYSTyDpryHRQ2AzM2B6MoLNFnyE4EJuZmEhmDdqctJdx2awVty5rw9xhMv2rz",
  "key21": "eau3WKzTW4Au91TnXdGzXiufWoCAZm4XrApQ8cx6qx3VWxtVRrh7bahiUEuHCc8xzA1Z1Zhzukw175zRFDUMtue",
  "key22": "4YskpDVpKTgdnbyS8gjRAdNWyi2tutFu6vnjrQp8ihGUAKkYbDXVWyX7JKzACLoSr7k8HiyPEpY336HynzBAfQf9",
  "key23": "2FjXtVPVggWombUeZxUpYD3GdwQ1JRm7SVRrZYFvNeW8WD5nXdRyMUTGuXztsetVFea227pjRiJmFJeyCcX7vpUd",
  "key24": "xE89GRawTkXptHSiLpRkvh5YkiVe3detxpVEZ5fZr3SS2QFmzy7EwyYG9uG1GyQMCjz26ndCPVKd9e9eDs9fS4L",
  "key25": "5LemQ72m4eQNSYSVok79uCfAjeqSLvEzKihyJ9Fm6LRbdQUBnH2SNfev9fhoxDW8ip14Ee1bQj7WX1NpQJtUr3AC",
  "key26": "3TDYPU5TXMJsGjKKH9hEPW5oJvNpGq8UWEApu5UB3hTK9tQPM4S4Nf374ty29meEt1kCFoPpSsShKHT2KLJftKFM",
  "key27": "5QyCesXZVfKFTVvsTqTzLWXQEdXfM7KxpCD2f7pENooa1gjzAKAW379fK4sYA8FZWhmWiokBuv62JYU4oSshEwvW"
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
