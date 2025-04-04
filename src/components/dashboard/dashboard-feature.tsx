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
    "3mfnceVbVz32f5HVSmX2sb3XvbQSMGtgBAsLATc7J7LJzeJGTXCwGw5gbks1NDWV7Fo7KBFZ8SRSFduRbxyz4mKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o81pF8WjMwb86zgKjDTuvbj5Xw1Tj8aRG5SBiBBd5VijXMxkEiJJXQoEwyZ8g4Wa9ArwkaikQXe76X8QToHrMoT",
  "key1": "3Juk8sRuPckGrJArqhQBw1UknQrFYoJpw6wbUKdkGx84H3TLHKPGEvyHhijvnkYzZ22EBYPDUf6jhrzc79Qoegsr",
  "key2": "481rxTU5wMMyuDaHzK4Ba6poQNM5R1eiS9EjgqGFakXMAw3Ke4AyqfqH7bMEuxWSMSvv5KNrmsEAfJ8VxqMoQGNg",
  "key3": "58T3eLzLt7YdrWmMRahstJNXFGcrnkPz6wXUCzaQGWuqz1VEMWXPtnUxrcSnd7pMhYxEtGXz6tjTcRRrxvmmc4hQ",
  "key4": "26U19uFR2FxJNT7Ddpf3SAU18DcFNWjE59DDz77a1ALwuiCctLpZoFfupJWJGDKrQtQDZNo6sraHUv1sqh2hAZay",
  "key5": "JDJWdZusRg5PhUWQqjzL5wMLGs6TQF8LxhdQPxpytH4QUMPiqPtEnHVnZvSByGXy9CMBv73RQ4pzz9DjrsVUFkw",
  "key6": "63h1nPctQiyL5AEjjmHLYLvQipCjAeHuRvCizFK83ATXWdJpmXbNkZmC4m5aRKjLoHFH6Je9KgTzTCHMBDRik6wM",
  "key7": "4DQGJecbJfn3quzubwCSTNUiP7ssYQJyUDUcrRTPNUJZvE71NErJKwngUzEzVR5Ttc4ZeRrMqD2TYNEGknm8CNWU",
  "key8": "3DNjKqudYXNBaS589kTedB4C4mDuipikVqEYCa1Quan7PyC97PNabhkmQaXREEhVgNxXauaAa1fdiZa1Kph3ha8T",
  "key9": "3h1ggyBkNipioCLcFdnqnej2tJTLBM9ri2dBuh3HtnYqavQ8gVWyjXsKvZQU5kKMiokrNV47odFZc8c2T8297d8P",
  "key10": "3pPKqmrZquLbWayBo13nczKT5wFM1985MVJxgbvYtmoP1H5twnMyyYDHg493mmaHJ3E5upZSqTjAD9ZHFg4qKDGx",
  "key11": "4FqdWgKN2ShkVcFpUTNY2UwfmqwZiYNkUD2ZMLfek9sXFVwygxawjNrhWMKGiiptR4Cy3a3aPjvrfScSyvMttmaw",
  "key12": "2smUvHfLEAiMf8km8aP2NnvyEWJkKMoAQQFjajW9LE3JjYENxWr6HqVBWAfspxVFuB1y5LBdfr7JsPK3ENEajhx1",
  "key13": "484X5bwYFYRVNimWynchmjmtANVD3TMvoZTCG2Eq6bBjs6PjVqPovnQB1gzFybNyX9BzGxAPkc8RUPeHRojHAa2L",
  "key14": "2VDQFpNcfCBsGkAhhH7TQ1rRAWZDJUoY51vhBjZGHFTQahnsotgJXTgvUvQ2Myw7w2CoJnXLrBxJWj9Aa7GeFWPc",
  "key15": "3gUBJmaFLRFpVYG2YpkcNs9A881XLwzRbPFBNCqTLSxxRaG1muEn4nBdwnqunP1Wy3dp2U64F8k8HN5JZ6nmMmoz",
  "key16": "5mBCrmrJWSDkzXcuWkHBdafZ6mw4GtB937cqfhkyDUadYTmWiHVCGxTtKesYE5e1T9X1S8ESsVgXLkcoYL4o6HsW",
  "key17": "RVstpL1ynUT8UZKehRDeHQ6WoF39Xu1PymfTYcYRuYV8i99uTFe5WTZzMPW69VAaqMY2rUuNbg62Ygd3FrBdYeH",
  "key18": "3tLWntXUG7grtUj1BUmNGnVqaaFZtefCj6n3pmBJE8MUBei1KoU6Mw9ax28hQcLyqMYCtTvfkZgG6SqdisD56N3X",
  "key19": "3DeET19sMeWCqF43aKbBQhfTnqJWPM66AHChPsLUupKTtPiNaYJV4oM4LDRjejvM6uZu4jhnHoYs1ryhKMy3ziZ",
  "key20": "4CGMPM4oxEAz57T4QSHDPnj6LkWiZAY8esk838EPctV6UTXpKz8Q1YF3ZTBDLDqveqitRidvcwivqp23kDREmJNk",
  "key21": "4ukQX6DWWJShUaXADWc6MpahVjcDwaaqNF5FCUU1mkuPbrii9d3A1ioQrcZhBSmYmWpvGM54btKxdfq8xzYyhMUx",
  "key22": "4vsB7GZEgn3wnoM9FvrzhwMPxFk92jyqTqvRd2fphSDErc9vQJU89XxFMsruJmzG7Dt5C8Ujrdrg716eL5LEhanM",
  "key23": "4KtUPjYkRDQaMM5jjm1tMpMP1QxScDxf2c23ZXUL5r27jZsW4BdLnLZo8FFEPX1KxdJB46mHFMJmiHeTz432Rwv9",
  "key24": "3aNu4Q71jJFhEpYbhvqCAXXGgYuYAweb9JpCcWEwowy74t9bFxKA1meRqCn7MQAHfMJwVJRGsyqeTWRb7CaoeLDD",
  "key25": "5eyjFXvXPNUG8zX7VqZFxdTFGF4BM2pouaVVoLHDZqfCjJg6cNNaMztEGbM6MgqPj6XR7vdBWkWWFtch2tZ179op",
  "key26": "5WXjxvZV4eXETScJHSNdoL2f2GeKjmj8SA9XMzdeNw62BPvhuukhedpgktgBSsHr7KfDvV1XnBgyhRbjgSmTY4j2",
  "key27": "nwkFGYUuaez8xEdd9noM18p1bZo7HGCxig5gYLTcuGbvwBWmocamGb7S3XqqBZ56USzuke61yLQsXErjZgs8mjx",
  "key28": "8bnYXpj49hmYqC4amHoXtFmQsSSek2u8F2r4PJWVELVjXbcW6gf8vZU53BsR7jWsQW4wh8prTzYQWmB5Qq5mSFQ",
  "key29": "4Byfgr6skAsbAhL2k5E2xSFcQCiR3e8DNAyZwiVHE9Wdsfq8gaPEsQNh9tjbGxojGjTVbQpKKQzzMZE1mmBQrCzA",
  "key30": "1Q6VtdqBJx6eUh7YafsifFH8nHuNzBQggzuQhHW3Rw2xDKM5WPi1igdAHx3BFWsSDGHH5Ng9nkWfoZvLm3suKmU",
  "key31": "4FWr77pCjsYaptNzcUzMj3MgbCYCHsLyc26Bvx9ZvLs4d3Spj9fy5AtFSNCxSwwiWPCcVXYFM8GSfBhd95LLw1qh",
  "key32": "5PAdcHgE7JVBdVeANU6WAB8LEp8NwkBpPTqEEbqDU8cXrDr39BiZcr31bywFzhsGJvUYjwSWNuj1xVn7xmuwuYHb",
  "key33": "56uXrY1ZTa9kCgkF9oPPW9i96GVi9V2X6NLbHmGZrg1qZjBAcKLHPfSUqdmuhHHZ11XCf1j8wP1SiST9KApwrDxn",
  "key34": "3ukyhv9xU93Ayq8xLSfwogYYjXsoCqdhUZjVUCVaLQjyoDSivFRXFJVpXgsGRWVNZjzVqyNpC2wq9sUmKJCFKT2x",
  "key35": "5dGqsfhSTQN54gYG3SyaXFF2DsUWGi9yCFxpyzuXZs4tqrSKjTCyqxBSmqomc5zbdUqSMb7oDduGa1GDmLS51geq",
  "key36": "2aU82Ty6zrpZYcf1WJbxr1QCnvPRw6YTMc61UN3iTcawMVo2VnsUQfS4BsGryp7zNWg5jLZopgZoUnJaqHU5Vxk2",
  "key37": "2NXYV6dYpgGC94sThvLxfR9voysYnPCoWkh7J52EEfkvFi9RY6xxmefy2u9JbGqiP9WZZHruy8hWCKcrCTxaSGpK",
  "key38": "25B15qQUmJB3TVMcGfjX8dx97JSm6GU5HsZyRCAaKy6WDWBDiJ2s6BDDyAY3ebRWpxDmr8dMb8gK2RWqS8dhRikp",
  "key39": "adA5x8oGrgjJ3zUjzDNTdFPKBBDikKaJnGz93VpSRrmDASVRihdh6ydLEVW4jYtKurs26BHXRY7ayTuGr2aHeXr",
  "key40": "2jDGazBJddDnUwmZ6jXVxu5dU79N17k35WaUznHYmYUEFBNwGDriFhn3pWdGGgzaPdyaLy2bGrDmo3ifGMUc4p5y",
  "key41": "2oDMu5odnVKWJAw8dPgvJRXeG9fDCEmjRShNsJJh7PydTm5dxv1hjVuoZTmYHbKi5hvkU6U15GHTb2rax6u6neKz",
  "key42": "2um1nrXSftKihC8nxiaqnjLrCD4et4aSeqjzNmHZrvgrueC8E4q7wWQj4xxmhYw4yFfTzAYmShy9uSoU1LCbLvXd",
  "key43": "41GE19pVfb518zuCzrWKjiu4mAi9HUPdyb6NuCUk6Nvdo5HJrb7nAeSJnjSEc6dFx1JMGPFmBTMaky9gHDgiM3Be",
  "key44": "2rWB2zYujTerCtgt31uPQoocNuAmyvp3VZ3WsJU9JwFCNAprBkp7LWcZg9wAz8r8zdymqwLxdmCTcrJcsrEUgbvP",
  "key45": "59qQqD87QekfWM3KXTVmAewfGehnhQ62tnLfP4o2HSBUPpZv75bo6Y3zuwGYk31uJHV8vkKHNNunEXmzfzxotLkj",
  "key46": "2UBoHCj74ZEFYH4yt89y5w2xmEfXh1R8j2pPQTNbMdSXw32bGhHUuC76Q3FiAtuQjuh6qfWoq9w7wR8k8tkATT2K"
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
