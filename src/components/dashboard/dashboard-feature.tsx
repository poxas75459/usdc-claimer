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
    "5KZrR9qgTHAd1WPReMUcNCB4aCjCaUWnMC5JmuMtvpro9W4r1fGGtzaZ3m6WdFGjXzxBv22wXg3CcQmTiE5MEeKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Td3bVodmsVY24cCGmLEBYqNc4D9cSTNNRugTxuCXJ1JLig5exSjHVaxMqyN8maBzE5W9n6wRUMUmufSwP1gbKcj",
  "key1": "un1Udpy9qJ1sncg36UJS7pUXCyp6KTv8o43YmYLndGN7vrhD5FY3QWAzbifiRSXsAzJASLG81fY5HP9Loc88Lrq",
  "key2": "4ora8SpY5gtJBsRY5ZUNj1DCqH1HbPWGHYSDDvAaMwAeQxtttz7KdjePYSaRvUCgS1tHrZ3qsco771qRPLiFADX5",
  "key3": "5dxugiTFFA8gS4VBhyjvki43SiGctru75thpEyWfLhgjvXHRx9vVEK6dDXX8xzHaxFJPT4cfesemb8n1KqhmmDeT",
  "key4": "4AcxauuDtt3TM6qGCpS9cNudXjnCgMzsQL5ruPDLLD3yYD2cvSjAcGpppwkEayXPqXAhwsJY99knRXPLqQvrxHaJ",
  "key5": "382mbtPupBtdV95KWwZ5kmEWi7Ym1XqnZ3BHvsZb1yDKMpYbxQZVQxMuDFYnvLXoQ8PmZ4Veg39tJnchLWkSthZR",
  "key6": "4oi4wZa4HLot7pYbZiuaZQTfTUo4HrLMmVkpi7HfvcLrJu4QLYWaGe5Z13F3yJEyQH5QZBR5otZgnum1BjhBNwvk",
  "key7": "2LYhEtW2TzAALnCVcLpePhVzDsHgqEwyLwjUqsBLibscUHwboKy7Cx2iuWzSZPdb58wWraavjm71ERHUa7c6gaAZ",
  "key8": "3joZNiheAEa3Y8Zp91KgWzJMMGMxgYmzB2EnRJhFcy7xhYjcfSTfCJJ47jr5sxJhZKpQoD9NxeoAAYoSgCWajY2J",
  "key9": "XBKYyqYak88oCGdVbVbUpSbCY9TZe4xBRMnjEPpYUmrLmUYvdhCmfFAisQ9MqvVVthH5A1XUPbRpcUyj3GJdfY1",
  "key10": "3dQWtbnJxSckZiEnJZtjdzaMsqYAhwH9N5i8q9khQQfeeHE75hhFwZKHTcEhFQR4BcGA8RNgdM9eUxyYgQxeahfr",
  "key11": "mYwBhVqiu3feCcLqt6Xs96JWcNhv62WNHPJ1fvfpEouDmm8PuLYBrxobZiGAJPmWXqk7knGFXdDmpgXJswmTWjc",
  "key12": "4iNQ4omAaJfXLVmHcwp8ZQvHyGyVVNL4bZsM45usm8PRwabDsWSj9gzowRVQf8t18us16uHXfYg1cLKt2vodraCH",
  "key13": "25z7E3x8wYn2Xgbz5uMRNALkByiSY9CXThGbNN42oiroqMma98HRXGEjbfjbnjaPttMj1MSAkYt6a3zrkL6j49ZJ",
  "key14": "5h4sQhaUg1M9v1AxxRXksCSMREqK5gQPLaPgFAvpTgqdZBQtwbrfY3ZNedcrgi3GcRRczyZxxFUoWw1VJaa4Bhuj",
  "key15": "vEeUB1jWMXqBDBGLXjbuJi7RSkU8XN4n4ZhBmrgd7RuH1skDYZAxuPSMZFxyPPY4HR6N8N5nH2agMM647dbN7LJ",
  "key16": "3FZkwqiT45Ph55x4fGWhGGVwGPPgZQV9LLWJ1e43z1nwddXqSCZuc1RePSvcqpymjYQAH37PejDmDdM5rqXN3bQu",
  "key17": "23BAymCvT6WD65wRjfwGaDVPJEAKwjNb5kyHjrVD8eeo2UpcGbuF24zPNH3Zm11bCbrD9JvEoT2CrtCbiijsxm8P",
  "key18": "2ZVzcgfYo1uHtYwM7PuzmqWSP2CBtJYf11DBUjBmErjfZe2RpgvDeNniBgUebcxfaprnbffjkQQ8Da4EDAG23Zh7",
  "key19": "4Gbm2tydThzefwwtiytHyNBBF67V3TKYxf9ZK3J9nB17GEVTzWUuWubEJD8WMYpuNJvQ4AnX9EeatcU9aUUT7QFQ",
  "key20": "34kPU4buP2b5qMqKhgEJcDnYNogvZz2DHz24QSxEN5RtcHGCJBec3jRkwRMbU53dbD3xL64AWsdu8FEPPvqnmUCa",
  "key21": "58fJg9nkckiViXG6wUavZxZDsraosXwqanfTEtoyg8LtKCABqfDPSvRX7UPjRBL22uq7Wai7m5DKftP655z1AfS",
  "key22": "2YpqZbKcuqWreGf8bnYo6Nh1SYZFvP1hfm5LCkv4KcsBfL2PMFZrDX6uFhPgRgy9M1kgwrZ6ZicYQKMY7SC3Y5U2",
  "key23": "4aNWgijgRe6pg1xfL3N8Mikh76zNjy7Px3rAamax6Z7rsN577uJGr6Y3TzAUA8cACVy2AtB8SqR8J2CVerGfn72V",
  "key24": "5ZvUZfRuz3pFCK24HPrNmKNDfEURW982PhFjjTSH4gJpAxc8CEPxU98RF73XQAq5iRTSnzv9TABtRohmYwyrxiHd",
  "key25": "3P4sNgMfC8Jx1JTveaLKdEGsHnTkRcytVAAUBsdtiphuxUivV1JDtQ69jhUNF9BH8GP5er6nPAvbNvJGzUjNDPnk",
  "key26": "454grr69fkXU7mvLeJFAV1rVSUoVsncyE4So5LTBHoNA7dmf8Gm3KE4XxivoQKJGoFfcs6A2i6EUZWRZBUbD6JAZ",
  "key27": "4TwKQmyogrsdwMZioGJTLJiWAFkyCnJu87goPbQTvUvDMTA6wnMDxu69uq1wnG32VaGJmfozJw4vFm2fpZ75Hcje",
  "key28": "5dttz6CkGDeTQbRzWmXT3wZqLaPcikKW3BmHbgAdmXamyY3yCB3tSeQFh421JvCfM64AT4b3Jt3RUVFapXwtbHya",
  "key29": "5s2aiJakWztqXftDBm7Bk2R22GSa8Mpcd5XFMBameQGYk9mCPJdKxrvAaPQKbkhNMBSEodC1jcHbKLannW1GvtXW",
  "key30": "i2QDApxGs57jpVecETJbVBgorxmHWHUyMxz9gdXHvy5CKVouvJJiwfXMWvUzqBBK7nudfaRfNA1D6BdUWY4JGHh",
  "key31": "4keqxwD9buYMCYBQjoBizATAry8Ax1AQu4GSok5EpTqF18RQfYBBvTuWG79jtDAuFvFo6ZFmhRoaKf22jgxRotVU",
  "key32": "jAngcNFvhsdk6wdUURZoR4HXDJgNMpY5sjR1pX7Lwk19GdniwLFmD63yad89Z6bi2kUc5gduip3gEo13GRcSWRc",
  "key33": "44mPsuSRR64G6PvW79eVMCeT43B3iCqmbvQsFywcMecdssB7HxVfhDbgyXPb3qMTYynxA2vo9S9hFjPAyArWhZuW",
  "key34": "3GXjbkCJtQCydeNCzuYdDQqV6KtPMQg2UXg8nZAMaAZG9aYF2o7b48kBM9FCK59n6GLRhJWUgrxGRtkh3PR3QeaE",
  "key35": "9DZdcDceRqnmNrSUZ6DA6dk7LKLA1gYCWbT1s8iM2C1aVp1xknESs4JoS76FmSg6QxFurkdRc8Jb28Han4Fe675",
  "key36": "5EBTyGZs4s8SoFFyEkNrBFu58dTP6wubg6MRw67rYGWBKjYh9f7ETrboBEHe6vphgsNgSx4zTPhGjWWDPDWQCgKd"
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
