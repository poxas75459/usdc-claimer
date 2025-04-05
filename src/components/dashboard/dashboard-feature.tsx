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
    "2MRXJkTRsPBVk45SGbgnN45YSo24vmgu5aJzdCvprPUjsVxJW58dDwPBj6aRsCnjxZ1t2UWB663f9XUp56ZwACyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kxFgwFPeqcGxD2gpnGFZqRYnnTAN7NXkCrnB1hqPEn1ahLuFEhGDbRmEhaPuNp49Sdang6z7hHgJeLpiNoMZQwu",
  "key1": "38FXxYoiFJvxZdz5fRn5RaFbdQ9mcEbH13HYvnLzVMvcnrrFSivxvVgs4pqF2R8gaFWBeGCSqQgfsAbsUFsmyNhy",
  "key2": "2hBXdV8Hzjz7vKwQx9nza3PPdHSAYAZStoH8UETcgi4V8zbpGe7ZM28MJQPfTjoGJdhayS15qca3i1ZWUnBLNbAX",
  "key3": "5h1BycJX4w5NZDN5WkrqMKRH1Sz64nR5LFDvZsJvEmvfxd7D4idBMZjdHF4W5Tg5SjLvLXB5FaA3w6ywv6eKk2DA",
  "key4": "4TCuizE485zeBMsMVkU852bEwtih7BzybiAijcDZRCvhgGXT4XG7moWZrZHr1Baky6yyCkG1U4HLeoe8gJimkEwV",
  "key5": "4AzTtkzexQQWVSQ2RhSiphT7etHGzZJqWTy9N1Q4sAdJi395ovbdBsRkGUR68ND3ebXbRp9PjYeAuAXNrjAD4Q5L",
  "key6": "3draLwnxV3bPUZywfuGBusbdE5j89AgTNViJmppSCpx93qaVXCasMC3DyMtxv9jqk7vJmnYy1hhbBTgx3HyVDj9u",
  "key7": "3JjxPZVf7V6ZeBe193mTVHngxngYopzSBSRN7D4Cwb7QS9WpTz6BwKmzvngHtfZ9NUxqzVPeaxqn266xoQMdTzoR",
  "key8": "AAw9Jyuv3T3hNB8zx4kTh6qXnqLXR5yu7kYQx6SFfRfriXyukqaJGKXz6zJeoKhTyif6n8Vjv4wh5tenNHArujv",
  "key9": "2qiH6Qh7Nm2ia6gJrp4ZimXGFqKp9AxxsTStgKPkh5SNJTRSUoVqsxCBi1F1MEBs2JPtcvNJBZmnPqVqHf1sAEuv",
  "key10": "4dXZVPPU3i3LZD8batp5JHKzPQjHf68Zjc6UKXMPfxDfSZSYdfaaXny7nP9B4g5Zo7Rqpf7MY7UVsJKhx7yWvho4",
  "key11": "5ayfS7rC3m2vkNW7iEjwcXbPsJ4Gr4WC3YiMYJ7vZqvwiV5aFDzoRYRFfKP6tNQk6BoM2Ym88FMscPdqV86ahbUW",
  "key12": "3yFRtNyquKR5TtN3Ui1oiYZzo5xjL2o5EYLx8NGTnk4eReZQNC3brz3AbjrZeSLeCHMJtM5Fj7mSB3nZVP78wbjR",
  "key13": "4iTzehbnRw3pQCoQXEVArnwkCvowg5vRjmvbfT5wjxthcSzBUWRnsukStEm4QG1A95r7hPftNYddPDsyAJ3HziSW",
  "key14": "zZW7a9oNJKn77yTcS9tomV15i2xVs3hApjDQsGfRvBQHTfVUxDfWcUGwS1f3YRzv1kspn3gXz1xQmd9HHUpJ3PS",
  "key15": "3rbqGR9LguUVCcuL45YVu9NdJvmPcGXGoSRyKqyjKHRzqHhijUQJoCcHer7JmMGUE7RgGTuzsN5xWfr5n4bDBiQQ",
  "key16": "2g8dGd4rcHdUZRpB4MRRccD6iBaBMzGCWvH5YUt1UauD85RwGyFCCmStfHWvoJWuu7DPeLBS4HokYzQUo1Vrcjan",
  "key17": "3AwG7PKPxX5MCRNGcJ9SkTXcxDtxgLcmDrgfgJeS9r9DSF3p2LrDseEoEBdBw6MtHVsqhZB2tveSBPtAeAAhRGqe",
  "key18": "4fkAwipikX3Ki7qHdrvVfn336VD2eh11LVNywJx3zDLgp4pCYTU5GkQ1f1vuYi7urMN4L7dpToPgY8JuCYb549vE",
  "key19": "66Rsy1KJ1jgKP8vqHCRmWAE4S1kqpR2XLUa4wm3PL5dRXpLKfn8qbVLPAfqDNVwqqJDNzPKp3U7mYJD9FcEzeHpF",
  "key20": "471jrozxdy1n1yavExHQhqx3BzvLZUE4CwKfBQQU7T6YAGSgj5SRK4DDcZ43fdp3Fz35ZBt1NVVqi97oaJyy5UYv",
  "key21": "2B7hALwX7RuznF6Uwkgp6TeU8YPwNVYL6nTdNPsFmnWnyaWT4Xw4zfUggwtNidJFEXHZHhCpqYEWCh7ceKTDGXUk",
  "key22": "6FtpCF2oT2tY7BUnP6g56kbqDrMeQ8crEveLbbbJP5TLMf4AGSmTvsaPhyxG84FA5ecTy4eVuWBoFTe2fakgbhD",
  "key23": "3MBRTrPvvsAy5phPDSTE3JDEVB4isbePZK4fJpqgLHyUo5YMPFzP7Z2rrc1X7YbpYgbecmokAZC6Q9rXnvRysBtb",
  "key24": "5CTG64dJieoW4Q7m1yu6DkTkWmNN3yPsMCfs1TJhKMd87ZE1Ho4NrFS4STNp2UL881SuzjuGt9YehPXcQHzNHsg1",
  "key25": "4p3GJdb3fQWKAzWzBwLibvTpt1RboNx8wpfDWa2SqeM592KUucpTTTtRHj7h39H11baYPM2bffuUzgSia62PEuoP",
  "key26": "3w4R4moJRs4LiyB6umwcxAKiirbEYGpjFXkgAGKasD1yjkdUhEKkWXQGqGdfm1AiGadqKNF53xJd7BckK2uJ6T7u",
  "key27": "2qsenoxR1T3GxWp7LWTJ9ALtyxsCNJiGstda5QcDQzH7BF65gApGidEnzCYDJ1kSo4x8VXRoPRyH4NbeXSAWkaBA",
  "key28": "5YeQJCBHi39xn6w1oG3PUQm1tDHGXx73u6wDgMhqCqiL2AcaduSTRCPzJSrq5qaC4mWg9WoPyafUrQnJ3q3LpXrr",
  "key29": "2o13mC6BMgcWHFgUYj1K8N84D8mL2ScEhuB1HvRbVW1y2ehdxPiYdDT37HT1PusE5n5V7qP2ivic2HnWs3VXeEGS",
  "key30": "u97q2YTXCkt4BsGgCpj9dTx3iLNtT4THJ5CgtDecr4xFnwnnHrF6aMBLT2NEZupYGpYiP5JzoRp7YSAfH9vmUNo",
  "key31": "j4RfEhqGkPNmfndMyjtwZP898YJ8Nyi46uxTFJHDoBDM6VYESQTF5izSTaEhLqoQanQbLFZ26kT3FTESoQvw1gF",
  "key32": "5z2a8dQpbeTAuKXz4wxDYD5cv42DfhNAGu4JwSjr2Q5hRh5wddAoA4MXY3emzTL8JsatM7mpQvTKHkv5iZsdkZdG",
  "key33": "3bUP4qBxhb22V8NBfg6JoFfvxNvU79uoEc4m23Xkmz2cutHFNdGb9mXWr9fAGnkxJuNKEMjWSMEEkd15yDzfoipt",
  "key34": "2QmWgx6dVo1kzDUA4rrDUjtEau6oceSyC7REqBnCB8L73x1iPDifDcFJ79SSJFqYJTmXBBAVJCikh7jTHxieE6TG",
  "key35": "4bg7T9HAWJk6hfPVwXJ22w8PXdtX2ZZfpbeWrmad9KgynnGUp43NJuCBZTTD9PnX57ZXHGAfCCLEzTxXgQQt6EPi",
  "key36": "3yPEAtdfaw5JrDFjYPNZQQfEzJ1RNwaYuhmeQrAfBWCXKCWYMPairJd3FfcvgjUaZPyCeAJmiCdYodfmPJwf5KrH",
  "key37": "42hz2cy63676b94b2eK8uwjrApkDr428TdwDteBXnUkj4McVdVjZYzZUtXNoWMcEw1CcMsJQSu2dJeBAYxgn9MSx",
  "key38": "2P8vLZbxCt5U7v2h5Kqwu7CdewPCUeEx69vFF4hHAgm5XYFLwM2DBNd4fgZMkK1ZSaAs9JawXzm2aEjekZVqg6aH",
  "key39": "UuSkGAXdQVFNX23k38ckc9zKhXH4bE8GJbor4zRDkpoQpEk8CfFa43un6rUZSLtbkZCsMHpUpB1eXZix1x5EiUJ"
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
