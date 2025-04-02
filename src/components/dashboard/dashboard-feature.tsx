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
    "55bTncZ73E6ySagtQAqv6616Mwc83bCMFhuFs1kbN8NhJYGDA1jCHMLR1KJJvqbQrZtWKmDvJKPxiBeF5wZutgm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TtUFvX82wWZbCUt6GmUMZ8kqL3xnzTUX3ts3QnXWuTC8J7B1Ws1oizwqN6K7yTzJ62kpDrypMRdLwKpZG48CgG8",
  "key1": "61gdPGMn7EMBPvGXrwRDSrXrMC11VLvb5ebYBmq4U1pef5jzpcUGmVV8ppyYRbhYvbXx1RTYuUXJajVfksw8A3mB",
  "key2": "2L61bzzwPKFPk96qMCXMXPdnaAnPvZWGoqWgd7MEQsbghZGmpacjFwwrL4YYUfkFQfnY7SyCYy9gUeSA962icaxA",
  "key3": "4moy42TKC4sY8Zj32R2PWH7ybA6DAAaHcmRf5B4eSA4pV9zNsSzxbcYrRBBrszhmh3voHtHRCMZe39Rw3rypY6mS",
  "key4": "EaKEJBHkKef2C6VDVvEPbb1vcdbrBe3M6h8mA8fFptgqdnqj7nekJJqH6gfypYSg3H6tpTM1WZhmijjxYeNy8KB",
  "key5": "417PVMJgKjByFyPZjhoWinFQnLbyJhBfm9zeaKRBRyUZFcjRrmTDQggzcAdAYpDrXT8qDPjpBBQG27VTCMcM336D",
  "key6": "5XTP4eQDM2AdBJr4qzt9xYpy59AryebmtQ3Vbcvm8sPUStDtmZR4ViwT3PTDQ1S4fbz5nysNuxGR5YkZB4DdahEF",
  "key7": "2mbSve1bVt7ezuQU9vtQzNazPjzk9aABxE32LKS21AaLBVxafq8vTMp87Y65zoyepDLuWwNinNHfa2SjKiWY3x5e",
  "key8": "5eU8D32xYm6ihyEmxmiitcu5vhkxp7zPQQ5jq6uEpxqUFJooYfSG1nVen5Bi2D8DmWdrXDmNdnderchoKE6Xi8oP",
  "key9": "5L2rRDtcguqRMn8kF4H8nnBRShCbAcegrdPFfc6ya8Kr4a41LQmX4rEe9U9h8dS7TdgTTbkBcV3fudDkqGtSDwLW",
  "key10": "47XcT555Hw1KAYVWZWR12G9zztUvTLTP14ZysgJtknQpaowMYE4GHLvjYkpD8zpz565zSExpC8qyt3meoeWQesPC",
  "key11": "67KhU8vNt8uS4PZgUcUXZ2g11TJ7n7iM7uLZPADxPdAcKSU1TCAeZjDg9nzNpAmqrWxhjd8Cwrj5dNoeWsYVS4J3",
  "key12": "3KYaD3HCWJnRx9rXmaEghizPewDdrUpnmHMsR3hYFxK3NzhUNhJn3gnPeVxFhLyoA9yvBsUXUqq9AjyHngi3Mzry",
  "key13": "4aBf7beSKQxn1SupGW41H4uQNCd2TH6gpCQGf3ZPSGZ5c5kJ5YNXEVDiAx1iuxq4M7jQAuEn6rTMj5dmrXCR6MBk",
  "key14": "z9TjqK3k5EcPoXxkRzYY6FyV4SH4J4zwfpU7j7guErjRYVoRzdc9jVmMakR566z8KhzoppTevgcnV3BZXU1utpz",
  "key15": "5mpwA7JaHLmVWwGWujtq3B7sJsdUNe2rSFq7vDQaCy389TRAdC815TKiY28T4fxLYvcrbc1mGXJ9j5sbkTk1HX1H",
  "key16": "3x3U5aG5hJmGA3vQkci77C5NUssYEM6RD73XXaedEHncWPDUaNudMz1THdg3QcJdFwU7p5ngsHyT9QvKyr2jbke3",
  "key17": "533kRTudf3EzErpWUq7u5PvGDqTUF3eyjvbJ45c1EhEe195WdbT8GAAAXT2pyQdmKrARnVgtJPzoYCt2hCjL4xEe",
  "key18": "1197v1y6cQux6fVpPp4GL1XBYe5cKvfAXNWGDhmqe8uyUu6i52PyzNGs29DirHGPLXrSdz4eSeHBj5DSu3Q9aDf",
  "key19": "43YEuaspoE3vbkZ3XSbvfeFmWw5YZhQubCHHc5oj6LpcTRT6fvNyvneYLUKEVnvNReTfsp78qH4GtT1RtqcTQDFv",
  "key20": "3GS468jAc1M5WYscBNoSsWoVH2PRa2KJYBoYmpYtepGX3rBtq77geiU4upYXFS86D1mu7xBymVpJucbe7aZBUv7S",
  "key21": "2bmr4axQfaQMxwopUvZeXRHFDXVqahntdssz3YUvzNFc6dHfupfn7grjwnyQbRTJWpFHxZEkQ7mLiA1JmiWCoqS4",
  "key22": "WY8s42jYM1nUv1EUnD8AzFvqJ3GAgKJ4Pmh9YHgr9t1EMSoS7YsppTCcqFhhxrVbgopu1XJoANa4zqn6jBLTS6g",
  "key23": "5YUny4enbxim7oEpt5tRgKadMoALTU5agnG5TQct8wfU9uuD1qrqPTgA1iiErDSLySgXpx28AQjAtuoFC4U9sNB3",
  "key24": "5xMLqJGCKni1u2P9tiar5YkgpQpcp4FmcwtyZHbBgehNngw2JGB54iPpLVckaWkiqefMCXGsoLComeXR2mEjUfCK",
  "key25": "2p4yG1RXwyEJ4VvBCPFEr3qK1ZyfHNdQ7EiifGdQTZ14sfGCjqyVJdZQ1UXQa3s6kNJnr1k3VSgFnzZ3PHwY5qLt",
  "key26": "4xfHqZTZKWMMdDRhSRU6ixcGZ3hSLAMjGD4Dnyq5ZVM2a47Kk3AZHnCHdajYhK3AJgTxvYgdXw8U3k9wx8Kh21rw",
  "key27": "5A5qMhiJ6RZhNZhHyu8nP26pifY6pZpK5qQjKMy1RbJ2NQhg4Q3gETw5vwmv66DPbmRWXcekwSSMzMiLoFsCGWQV",
  "key28": "4fGqa5irnbEoZQ252v7Ke4PTndtzkG8fCvwZfqeEFi6ykrjRbcEbhjbuCUpyk1AQcCDR1ZW8wH4DyA3xb9zTHqvv",
  "key29": "5H5J89ZmBX9WCT26YhtE5FPFovsshybB77CNKprRGFGfdHTjwbbhkjrbwKU1kDdtuJKct61DEV9mPr2ojLED5RqZ",
  "key30": "24DPgnaBaduUHd1oXJco73qVW8Jnx9df6VTt3LJvLB3LdcdJvKNGgB8tXqYTqMdVt4bHS72r2e59K9je2T4kpH8j",
  "key31": "46GYSh5k3ayKiJtFp6mY1vVTinLki2F6boCTx58s7ewcL3AfseeU4y5FbmBaw8bW1AhedTfBTrFcCEDuK6EZgVva",
  "key32": "2aDv4k8rn1qiDK1xYLMzowjU1CXY23V8AGoDcmCkshgKQV44nf1ZaErt5yiXJnRRXSGYqX3wtTU3kKWMGzp1ckBP",
  "key33": "3z9fjnwS9EZWaHtK3WSaGGmvktXzt8U8Lcui5KThV3HDo7f4mFeJX6cW11PJKS1JeyxEjLZjz7uVuyPAfBi64tsH",
  "key34": "45zbPdz551cWkQbEXMBfkN7R2sEkosN2dGPbUSHYNX8LpftJKmo8BPUDe9YJ2FpMFc19syFhJQfoYuyE9n8DAbgW",
  "key35": "5QQMvAFVKwHWftH8sAGDwvTqANQrTTAbUJCfnr7BYs9MkaVhy6F8ifimCEoRwukZ28wNV6heqo7BqdYT1wQR5JUW",
  "key36": "3hikf7cGWthKXuFkJTJUrNt8a8oJf8KrZgc7Pit7dHykdGk9WyPhoMap7kbePQog9s7ZJNT27rMh6DYXu1NF8WuT",
  "key37": "44gFexZqviFKLNc1LJfaM29KGnEDK51LUvRX5NKT3HxA79HRAFtMwU5rVRpXgHRq1KD8b3G2CYZrmAdSe4W1dPQx",
  "key38": "3iEYBcECFdrzXE9FXNhdXbg33A35GA7b7PznNgTghazCw5G4nvccjFfG5G3FNeyuQYETfgzXyZcNjqLoaByBtSBe",
  "key39": "4En79HXwCzyM8eSBQKdFVWvc5jtTppxb13JpMR8GfgmZQYSLH8SXEtoC58jq63XXET832r49wL3zdWhZjL8fxvsM"
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
