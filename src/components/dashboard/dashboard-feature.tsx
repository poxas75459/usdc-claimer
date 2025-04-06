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
    "27heUKQkHr89xNvT3woV3fe6qRKuHvHHwKfDATH1juEDKYg1gYyiLXuT6bBrD9foofiAiCNkUet3fqnCWj4UY2Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zjTCcmhBwAmDYUd4KB44HHigZSi1nPJ6sqTr6H4Rt4Lp6jdNaBmCKLzgFuagDjhVmXHw5pYRyLoFawEqnktHYw",
  "key1": "64am3Nqore5guMFTXMp4saHEkagY5gqnD2QeWb9URB9EEmhgyG2vpCDmGDLzZ3gAJDXabyrjH15zThc7B6bX1wbB",
  "key2": "3JKshWQBb5PRE38hjBqSma6XgYv7snRJ3SHN1n3snjN4oM6JkFTypJiX4ptoXy6j2KQafppqcZcdwrrtEf55maXw",
  "key3": "XJmoan1HXwHinX96DtmxmnZmtwUdTYGVaN5PTs4Lc5JNc8jc5by2oZPt7KCRMxZJBEH3jxEbYxfAR6FLyzC3Qi4",
  "key4": "QYayS3QkV1hu77ah1KRSmBHbDEdUAC5vnxm24akguM9ye4d5NeYW2DrUjJYBd4RUhMi6xK6gjniU9GZ3sqg2Fd8",
  "key5": "4CaRb3jJwERejYwLbNMx7A6TjenxcyucqCzSi6vENuzWET5A7GHMxm9N41GZ574emVSR5fsYmk62hqDeGeL8C2St",
  "key6": "Jj7EC5SbCKnaXAmdkGzhJ65c5jX5mwsH4qepLSvCUiLUrKrn8RKDxfUjCWh4u5W1W3XBXVLXcCw6feepeykvw3U",
  "key7": "3GPkeFKqS2N7rTWNCc4JWmt63nAE9zykc54z5CcubgCrSBNEnHS9VUmkHYr5ZUWt1QqtjXjVGN7xnQB7K1JQCKEL",
  "key8": "2PnpQ6WKySiBXik7Bp5nwvrKLRVKkmhdBQAchije7wBEwQPufxY3ZtJ5U22nreTK1qDNzT8FRzUj6pvs6bfLE2W2",
  "key9": "2hyNapNavN351Sqd29Rcdes8WuNfkVmMvYuJ7WS11rt5hemeooqcDezGa9S2qweCkbiULnVW3JAeL8EJhW9dCoQD",
  "key10": "3FnvRd87cGFByQ9fqMfdcg5SJeNZHrEPuXLuLwEQn1Qzg3bkNU4hCaFBBc9iiwN5ev997fB6deVc39Edy7WfEC4F",
  "key11": "4kPDAUAA6mbjgDcpskEUJHMR2q4J5BKDvhr5VCedpkLDdejdYxKf61qDjrDMsyA2YxGiqR8zUMoiXgWqEAh5RqWD",
  "key12": "2DVKKk3CWQrZVfjNCyjmCfnSYqjC8KnYmHny5BRiurBbk92N2CcAh28ZuVKPfx4fguRCufyyjkE8XTuiCt5aAznC",
  "key13": "5t2FHNZLSyge1gwZQ91ckq9D9vZBi1P6Qdp9bDtz8n7WS9WLXFwfzqdHpHEPMDWNoZWh2ztYFQwvQh5FuXawHdvD",
  "key14": "3zbr8DJpekJ7GRuaJ2MqLg5y4e7zD2xUJidwNpsbM8jSMW6uCatagsFekN1NQFZCCZuFTWVfx7SsmB8H6FnWmVd1",
  "key15": "36C3eNG1A8mdpQ3KpwzPKMt262qnb5ZTrcbip4SWmG99kb1S1DJJcU11ZB4fXiBt5mNyD5eHkcK2FzezSm1hmbZA",
  "key16": "48qzG3XBqsYxTVDcwKGX5vGWhGw5ZETVa7UfaQyVy8qrM3sUeq6savxnYwrVuUGP4xDrVuFEneXbxVR5532zFJJL",
  "key17": "fykQr1SFHKRLLeDeS547xZuQiMNJeEhhVUsmi6JJv2QahEHcJXV8yhsAkpt8ApfHGLXdVcNzNcZXX8mAmmaAKjF",
  "key18": "3wFEShTqRa4Q8fab1euuuuga1aGHK8cVAyrUNddkptu1ACGKXzUDZAaPsyUdhJVZqNUxwgjn2nSwUS5iu3EUCvdo",
  "key19": "2q8PnLGZHKBJ8Jg3QQFMAECoRgepqBw5RUxVkeWM17wmSMKhbs3YfEfJXre3uiz6eRFaXDJyMDwJdLpmf8ARG55b",
  "key20": "SjuVKfJS6FnSMrH3Q5zJW1FQ9jkcVpHFMa52nNS93kZVJKqK5mkBPwcaqWMsitf19NufFiq6ijThT8tFM4K13x5",
  "key21": "4UyUCaj5zyPXgWTNHnMytzjyv7V4QrTND5TNJ2ybBeo2NpwWu69TgNfenzzYeWPWZJ5rpiGpsSQ3tZtXn96ms6A2",
  "key22": "3myNppE7YNPQqkvktQ1wKtpTeXLGpNwaxRKchPfNmTGGiThuUKJA5F1Hpd3TDAzJ4P9gxmVkkghCiNiamdtAPdLz",
  "key23": "2TPkTmKYBJN7fVUPnHX436jPfzta4FyeuDzLyp6nQZQF1SftHT8xwSytvWWdmqGBgfGyjoChYWYYwpEQhEw2Pjqk",
  "key24": "2QHZBAn55MixM9mPtPXXCCgXGxt7t4bSVWjadTFRVZ3dRf96xF52RYPQ4Hgpgg79iH4iNzKv2T4vuDGjG7i45Hrn",
  "key25": "QaA9oyUQ3aeAJXSeeu32kBp4ksMRNFp3MMWrTrSk6ADp8Rw2c6kVk8TxSBTMab8VZTH8HYBMtG3scBz8ZxTSNBM",
  "key26": "oGKWMcJS7GrHYNwCoF5bZa7zuxUqQo9zj9ZzTrxzgez5q2ygfc8fi9TrwFPMJ9LWEboDNcGMH8bYFFmjFUfRWQx",
  "key27": "6uBZFbZsjdDdf5uT533F5rbRa9HwjRzepaHxPZTRHPbfsAHNVw4JmWKFURE1Ls8pXpCGKcTNezccTpc7hT6pZDt",
  "key28": "EcihNZ7tLoyGbgVc4msvVJFfKEQgqcHVTYQHoxEHnewhzvnUmxpBYoLsSAaTFuvnKuRvvLZF2ZJoE2FiqAb6TAA",
  "key29": "4g5xp7bEfY3vV6eBRBoXvaBkcuAsNbaJFVvgZHrFfwvQUiTLUNbdP5aQ6RP4T4kqrreWeQaU7u7oj9qWsNPAaArZ"
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
