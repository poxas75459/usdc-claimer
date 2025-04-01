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
    "f2WS2wGduV2xM2RWYSMzUrrVRCdtEgXhMsp6LVrSNYyLbYp1QKsvKXSpKN6T8MSEwW6UhSskvozwC2r3YmRS8s8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqfFPqw17pa5ZjoPha6rzxj2htjzpzntZ8Ttq4pMyDUWiCkPvfuAmUYPXgYcdWksJSQLGUdTHhqtG2oj6gZyUBY",
  "key1": "2S3wanWTg3sdkrfo1zbpntrNHY5owfiJZqACYgVuduF6GHGvunRrjEKv4FmcMdNMuEaEDZrGfpxaxLaebdTPt6S",
  "key2": "3QPDRGyrDHM6ejMFZVn2NWD9ajqtRnyTq1MbhmMye4icsrjFWDKaLpE7jT8gUSBWAVThYv6PYQsuwHURrzj1kkR4",
  "key3": "2hpiMJukzEzRh8uH3fRvSsH7Jt4v1ouqpmGRmGZ4k2K4bJPAz2aiLhbJpxoFRkYFTtQn5rsmDaAw6smmtPwnfE4k",
  "key4": "3UMYmsvpaFxipCiPwFyoA3L77RUdoNtvStVSc74ddPWMHZCnq7PP9yaPuJt7gpcHszYkJh4zkUacsLYNh641XPiz",
  "key5": "4YLixiTUQzyxNfwxUq4yfRLgKqriQtkUk67ww8QWU4ZxX5cEY2sgQM968Jx2FDFPPpbL76mz5WxtP2DnyKMki1Sw",
  "key6": "MNPuxEsbae7FJxB2tKY8drTJV9avrahcsLTTjTN6wpG8FB8Q1Tmn1noVwXTkPC3AuZQA4G7fY5jKoxHU2eCDMn4",
  "key7": "2tA1j6wLTRCWRcTciHLJjUiQdHGLdjmmNbRsesKwXzSXZDRQv3xgGUUm7FtXYSNXgugYWEgViarf1D4k3oW6k5tS",
  "key8": "3D7P5JnX3UYQHU7yVyZm9PzZ7BiaCLvvR6sLFr53gFJJgcF5GZvMiuGtsbiT8EUU9pWpmWzPJ7PyjD2MUrp81Cgm",
  "key9": "K2Spspa2NVVmnqBME2nmbFokKX6PexSzaRsSscKY13ni2MVMmARqeyydaRjuz8bdTtYbRzZDMUwCAo9ZwtPSwtQ",
  "key10": "3U1XtUkFqPyyF5dK5UnEsWveJyd7zD5MbaKevmnqvuVtL1jc3734PDcWbbzKSQ7mV14PHFiUyjjBJ7G2imAT94th",
  "key11": "2EJWHjveY9ndeepYNubaZ1Xdi4ZUTYtvqkV9ekrFXQhn6V9j69Ngnbs2U6GjAvEdgXQGVPABcq89ziSwtEV54hiT",
  "key12": "2snhkJHUyZhzUrN8anRuTpr5YwDfAMaYHKmbkuDWCVG68Whoov8yYV7gmkd1bB2Mjrcbs3AXMq5Urj9VHGAYN5Yd",
  "key13": "67QdjhNVjRV8AQmzqAtq93Gwnj4coHsqqodvD7fkNwZQphE1JUMg7s4Ar2Y8U3CSk1Wy468ChYedaxDKb2YY1KhA",
  "key14": "5bRuoqSpmt797S8RckUtd1mPryH5Wg9yat8pHkA6iTnPC8cYvKGhCrZ2KghqcDkBWr2Wz1RgkbWGKEBCLRREesw3",
  "key15": "TJsobJNdRVWv8yse4r662HUMkY7XGofyjA7XPoHzWKAZbNDBS4X2xNibjszBGev2LfL5ruYaiw4UGqjPGykpJjd",
  "key16": "5Y59XRAGZwNBF9oPykHJ1sV93HKX8o1a5GeR56aS3yjUCrFavxdxcfSYnqkwk7mmZiKciP1oPjxAeaE4pp84Kk6c",
  "key17": "61RGArk8aCwEG11Vh2JaPmM4nGYxs2B2dK5M6EkB63cejLutJVBTrDjn5VLBtW27sJ3BJ3opyDxTkaNty4betdfk",
  "key18": "2vJX8qgGoHcSAVFGpcyvrVDjnYnjHkGxyu65hy2jJXdn9gbeup4MUqzVpm8kDUadoeeJ37QFisrbtrhqTD1oGKHv",
  "key19": "3qjhoBduixKqWqN2UshFfMrWMFRpa5vopBcLL8wNHMUEq7tjXJH5qk2qHBh4pHDmeudrzJiTCYwKWvELvGHcCMyR",
  "key20": "45eBqJBvoApouur8m3qhxeeLDP27CUBtBhHdPoEzCdBSMSDnt8FyYZzkdvoQkaNf5cyQqEHmauT1gDtm5mR1JK5w",
  "key21": "8F8zJKRHc5fcGMmrqkZNTKkAJuj8CjFB8Q8676WYwZndE4HXh4cB3ZyDiBVmrEdSLi1wW6rAdFcGUh2A4H9XPVv",
  "key22": "4VwXUPVLnbgnwBSMg67qRGy7pC77YRkRy5o6uRzpuYeXpCCHSe6tuZJmpM1hW4cx1cPX7QYevJUmcg2ad4GWUTSv",
  "key23": "3rtJkCggnTAaePfqCNkxgRP7KDSSwXX1xTGwUCiW9XCTFFdHm9SBgVLosUmWao4g1xfeBZFiq75QbAgZQqJQYNtY",
  "key24": "4zQMQ4N3wmZuyae1UyeLengNDrvG3KuefaDgrWTdaNEEc9iic1tcECotkYQapPCEYff9DjRZuv83NAkqks86Le7Q",
  "key25": "4zUCxB1BB4SKnYsR6TH5BQrT9T4zUXHxSNTkPm6zGrz7EapCsxxyXHjCcoocsG3Rhrd95fefp8wu1iBNmgZ8VPVH"
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
