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
    "3zUKXML9Z7KmzkRP45HzE4CeGhLG4YzSpPS9LSGtDi94rLAFk5fPyLNvYZF2eGDoCyEvYg3DU62CocEvqWEuUoXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VL2V4MowcfzJQXF7yZ7XCKDFAywZfjAmadXr6u1PC8iLwuGZAnjwaGFbnTkgMeBhq9ccVSvcjjbF7BkkPTu8Dy",
  "key1": "4JPAhwMAStDCth7LPgjfqnZ6gcnpq6edinH7y2G7yBebLqqkQwKp7BNVeSsamC8pywpkNsfJ8uuydutmNsJc48wG",
  "key2": "2kHXxVsy9mRxKAks53A4i2QzsLKy2Bah4LAs4ZYTgkmDbShcfdPzXzNb1nba3YpbtaMN5v51q8xtuhhsPHwpuAdB",
  "key3": "mDtT8rgZKCaq62fZ6sNhRZJcLqt3CQuLWXhY9WkeqGMoQqDpnP6wo4iNM92kqhkHtWavSBQKyKvyESXsC99twne",
  "key4": "4zMnoXDV38SmPQQF4oHxtF1CTouL7GhR1DLCTfPZtXGncT7joJFkSFXRFN6HNYLHdiKCgpPZC44f9jFvRUmegbV",
  "key5": "5yGZcWooda3QDF86Vug9XuFFxN2K7bL25DXr1wCmJiyNzaGM3crqnaEpTecRHJXQESAepDQjvrYLzH7DiZRQ8ZGA",
  "key6": "46KpFZ58NUtwBZfArA5jGqQb3RhTER9QiMLXX3kEWEaM5gmQvWQdpVwickbUxskLS5NojU5nXhVFrkP5ctXMFqg9",
  "key7": "4JHc5MFxdKTsStNC8TMnQTT2oaDZaNYo6EYkoNLHmkeV6H3jMTx9y5aE7WwwarNuprGdufwVKE3vG6gVjP8BqNX7",
  "key8": "5XxSoPnUeHXMxctVX3vfnU9H8Dxw9SBBEviU9CREx9YT272vsevGwPax9wF8vLg4hCM8DnC3sQtjS4nC56jDLvV8",
  "key9": "33k6Nr7FdTAbrTbgDDDBV9kRpzqNmaodUTFtRZwr2kDanxAYYxu2kiQk9RmrKndYhsji6k7QLp93pTtN3DMJAcyX",
  "key10": "2dhk5FTbCpNar7Eq8ksPUeowYs4kPmAW86LFud2yDT2hdJdTMa82kNZgLzEeBN8LgkDm67PBiNCbJMqffhs6svbY",
  "key11": "wj7h34SvbAKQxpSxcpyo7wDsi85JzTRYDYqiBUxerDUXSxXevjWUkRmEqmn1LCSjC91ubttFxnHkox5pfKMEju5",
  "key12": "5Wuc58XtcpkXKv7h7UZLCcVwrNxFXkRw8VcAfctz3eP7jt7YnfL2Q6zyHzAevxrXvej57vtsfrcxnotbiFP8TvEu",
  "key13": "3eJfQqjTALmYNnuMgBy1mHF4qHMUp3Hb86f9Y8pUvSVfBn4mHF171GL8NPQQTKk8xuNXjGuUomt28CbAdcLCE5G3",
  "key14": "g6RD8kuPHK62izbt7xVEDip6Fwc6CFPGmmgWwgT5xTmwawUwfDWrbuo5r6Av9KRrjCWUA4kdF6j2ZQ5nNeEra8T",
  "key15": "5Lnc1NzchNFJe765kztMH6JARftmds5mmzDhbSLMfk3aNMFxy1h9g832nphbhUGDQDoJPbHqFkeQBFHazX7nmqNn",
  "key16": "2gQUQDhUmq89vZ7s7nSJZaE7PcPse3MFZdgYnNYksoUj2qHZGuDCc2GBWFsF6J6jtbnde8PiNz5h8RYedNcaC115",
  "key17": "2hXz58wHzYxYh9moXenQaBzkHMKuHQVvrchbqkNxcCpMV4QxcVAr2KRZ4AWDton4qRUdRnyvcTauP8p2aGakBuXW",
  "key18": "3cxSgapVyfXE74S6RgEsPnn8BH2FFTCaVM4VMARy45AXtRYbCCbz4HTj7JkE5Top6ebGuGP3LrNeRm23SkS8rRf",
  "key19": "ddGpaauckZZYbM9bXkmPJ7J9kd9VeB9sych9XcPADJourp4wcdYEy3jLs6duGWpAbqg8Bd6vjVU9uvGwTkhSLCg",
  "key20": "3GvJA2MhbNY2Sv7NEo7hKn4RJWThNB4JhYa4JAMVu3ynao8wTWGaBiLvuAS2f2rmW8WpH4MW2cfB7kzrfht2NoBm",
  "key21": "4KGH36xQF76KLrEoTGUpovWpAvSPjxgEqk3nJv6xN4xWbvRH4saU5PDycb3n8iAZhgV7gQmw2j5KcX5ZEuTUCjA",
  "key22": "2PkT5qsWZG6QbAQbETK2ckg6QCnz2M2DcUz285dY4vukiwCvWuW2LYY4juUZ98WKBXhtSMCD6Gnb8J4YR6NEDcCw",
  "key23": "3LZqpKEYEfAofKEXJPooS71NoLPTqfgDk41BA3xtBWicupuYdyjW3Uinh39TDbUUsky1fGsXkEQHyRoNoNrtsy4",
  "key24": "2NUajV7L4TCZgK2qbEx689ZVAtsyNVsGqtCh3cytf4yprQnU8imQs5jSib5Mszbqs7o2ihSKXRQvNnqVHFq4nj1L",
  "key25": "3NAdyE4oKR8VsXwnASxNGbxfjihXFrtinQS6ed5DD7CCr2VkYQEGnEBu3cB95qzBLmTY3PxHZgkLwDPHgHEgJrEw",
  "key26": "58NKB4Mken122N14wF3YeZTaxjBDkJP3QJZjgvVt9RRvbGuupBtMJj7pJTNYvGLq2bBAxv7QcECFBHzAoj4xCyDt",
  "key27": "2PjZJzVrZHb9YLYrCynw9sbozHQBFtxrw7EKs4743MUSYc2mWDCwUtT3EEbNcYKWfaDFUU2DXC7xf6PMVLL3FyT2",
  "key28": "3Hs1iPj4pDm9BmddQL65XC6dv3kWcUzqo8BoE4kPm1JWAyerNR7fjPr2mtf2gygXUyxrso84dVqa13DXPu7B83c",
  "key29": "3pvWM2crptFLoaxPHMQnQeYHZjvAngoSYpme8XeM39jV5ypdTx3HwqN4ciFiFjBqXQvGPbzhHZGM8Y424yFcXGQ4",
  "key30": "3bvrkSh9YbZtuY3M4ohtxGht5cuwEKr9AxRf56fDNKpwTRMYX9dPVrYMPw1dEinCYKTSB7CRwcaMnMPbewrCwjxb"
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
