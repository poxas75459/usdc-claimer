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
    "2hgLUVTs4jJt8vHpYjMMygmFNh2qDwwVLeJTG9nYZWEBsFDK7nVoKbjwNko8Znm8BFC42xodJLgQVpxYiQmLq9ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33oiV7t1tpCeDou4w5s4WHoKyqjXRvS1TZogyFgJCvfPX2cAWTenHmaXPdbZWnQLL92sUi9cAERmvAXyDiHmthxq",
  "key1": "4fsth3d8WiS4tmGF55Bk9QFXvPDzX3TiuK9JbBvzYzpayt6w1kuZ3RegBgu49yPuKZtpzbYAS6Vc5dpe7WMSQ1Mi",
  "key2": "3fpbLzaZLb8jB9qd4Nyorj8M912MYTDoPoUT2uTCqeZtVpisn2KEHLUxSLR5YRY76npKLg1DzfzeJRkzts6mnF6d",
  "key3": "4PWwuPSGY9yfkR7NpiuhVrACH6LGL6hvtTfh9ZMWkE2qLSsBKai17hkxx6UnHDjY6HyWXYjUyLdVcDrzQ3HM9c5o",
  "key4": "48t4zmmvGXcqqR5eYrKg5hUycB1SniRDbUnS9FM9iwgFC5BZ1DQ4k5No7TCa9gssyrPLw4HoW4vN2mg5UHjJScrG",
  "key5": "9EA7iHPhKuG9rA8UDCsLkPiuK9enJprf6iZtX4gcVm14zziQyAiL8fbc8Vo11s9TqFd61fgTMcY9AA2NSsMZxbT",
  "key6": "58XPeedWKLvPMALhzxUd1TAZ9RuhdeeAacu8ngWzeDuvnyxoNex4uXVkY7pQ7ntUdzFLWw8zsrDxgb6rV8hsfnSg",
  "key7": "rJoyLjcJ9wvH2E9PDmRfgTrnUEZAJtRxoehFCH44kit35XBNRPbvaawRNT5b2ZUBVcrbZaZ6Lr8z1vgQnkYMERL",
  "key8": "6661f8PEkowJicAwk8Es6EeBSaHH4eWWYfCnrJivmDCyxFy2KkHZJsi4Fz7yyQcdF79iW79qfHFQRbiapHQvKpyg",
  "key9": "5wjeP3ZEd6BBDSy9Hb2e24rhZXi44eCMfHn9UsZkH7HD4CmKoCqXF1k5biYXZZX64v4YnK9BVeSjLb63aX4YHPj8",
  "key10": "4GSHuT8MWoqRpKNYT3yvBbkZXbf86dxLesDxEBim72qrcKjhAx6TbEzrC85bYBVGTvcPkPB2fucnTKgN1iay15gw",
  "key11": "2Ad9n5mkLwRvpjR5okf9ch81tuznApP2fuj9GU6oHt3D2wZn9vJP5e3metapYm4XdqVjkd4TMAbAqpuMh35cokcW",
  "key12": "S1tMY7RjYbB5Nszo2mFmaPxjnCMH4uSKrEqvdiJF4y2bPbsDzkj3ohLYQUTTrrziaxbZhWuTWqCe9fyVVqF3hyD",
  "key13": "4B22zuVmEroHqgwNNg556zberiMSAf5dTvfVL5YarKxTBPerm3QvsvLaDXYPfo1SH9K1f65NM9ghsTt7M5Fih47Z",
  "key14": "43L6R35pn2fjAaH15XVGGHVN6eKxTapYiuiEMDrnvn1LCGKpVUFtUwsdDbNGLXkdFE3apSHvqw8fcD5Q7nirprVu",
  "key15": "3TRp4LA15AxXqgQenGfHNW3QGSKrGRoReD9nkzALWkeKUiKx4CYeWMCJ7FwBhQMevvF5HxiP8xMGT9qEhKN2sVxc",
  "key16": "36886gaDV5dNTVBp2WYSZqBp9ioE19VPz6V27xB381dn7TDfASAdfNpuMgs6FqSiE55f7pixNqnGskFewJUQLGQK",
  "key17": "27JqFBBofBx8EpbR4VX5fUyLwP8MRw2sBkjbwxiGswqz66SP3PsvNnF16VEMbPQhcXfqKpnYdMfabbY5oebtu6f3",
  "key18": "38ULExr9WNGEX38KBy99k5DLjfGDTgVL6CZWoWzgXnXhAD1agGWNsHMzPBJYRoMGZ6zzSsy6bqaPjFEocTtQUus1",
  "key19": "2xdtHg5cK8sg9JpTSb5BuQyFukyVh9k89uiaavpsum7TmnuLDfk6cWZmPmXhX9pjZWJZXrrsH9WxFjdcxh9iCt9H",
  "key20": "5su8v2Xi1Lwp4rTUsvga9v97i2jjRgbhMCtQY3G6qLKUyADUgom3GSidU64tbKX8fxPZcmZX9FxAEnUA67YL5DWB",
  "key21": "4f6pEV9HHkU5BcnvvEVvgQ4ezuAG48TeQC5GpJMJYR4YFicDMmhBx7LZHV9izu85T6YjJadziTMYDDs8BmN1BYZg",
  "key22": "bRfFZGwCNmSAh1qYxozvaNMvz9G67M7yUHouTKQJoCtevstgrvrJ81fHZrvoC5UdvUQ6ySjYXuKsULv3v6vB63V",
  "key23": "4DT6VkdDRDoC1gVpLBjoC9Rzw7aVRhhHZptV8rZtXbsx5NRg8uoSHxk6tNQF2Woo3uKUgozoP6Cnbt8WUDjPvxWZ",
  "key24": "31EMRDKPvyfvVim6QFVD1z2wrsnhjZc6uy4HL4eoyjgyNDaw1WwKgBDmuFcTueei8NhXnczggvaiQ4797mUTT6VH",
  "key25": "4VwBLW8Dqv7AfSGBK3cyzJnmWVPx7su2jVbJV1CfiBa3hKRqDuLAHNYUbfVDcozYrgRSvihjGQsMG5sen1qPdobA",
  "key26": "462xWyqkTjtjnWMbE7j8JNKozjNof1vPic4FZDg3dMuxdepDZg6Pz2yAT7jjzUP3mCEhMhhRwMAZB6ybLmkPqSm5",
  "key27": "QkK1JBmGiujABN3zkbqkGXfDmTNPi8Ef85ADQtLEVGVMAGHSht1zNvYjf2nKmW8xv9srK7EKMBb4kbhqECAu7zv",
  "key28": "2d2FeYXDKRngtWFP6vrMz7d8qKQs5mbRTGFJ7FSsdBGvnrfBzjhs6MUcf25vKjbp4yQGWWbEtGaZKVqzTkBbJjx5",
  "key29": "5k552o2veasy8537KFWKTe7RMarerY57haMjXiPpSifLiTiQahRSC4vTj6ifbChdEjM1CHmAEudRTqvUhfRWbm8K",
  "key30": "4LQjiKy5sJ49WXCKVVz6FSaZntELDUqEEYGVE1eM5XfcyoNCFWCXp26MUYx4nmqtP9Mwm297J4fjFH6EZqq1DCnZ",
  "key31": "4JwwNtLyoUuDp3pAZY3zk8WHFaGeyR1hpJFyUfkUemLwEWkV47XA7affzxB5WHnPdBAYk1xKSGDt2UgxjfDwJrPT",
  "key32": "3Z1dsCBcwP4yPLrzzrrpyWMJBuLz88M7tmFDeEL9WFQ1kVMDY3B5hNRChwCggMfPm5RNW5nJUhDUeHozQ9PwHQPz",
  "key33": "54dLaYJRgXPQco3j4pNiY9nRe2YPXKAD6gjd2dQgztRJYran48Rr8i5tKwP5v6GFWiGaLp5TjRXkTCub5qAUhib5",
  "key34": "5bTq7LjHdazjPPqHLaGDJzfuBJiQm8AJSXstjftkPZK7UWE2TAbkT5MTi2rSzxcRcFjtkqNWUSS6SU3wXBVyziqm",
  "key35": "khr1wSttqfs8MahRqDqNXHZ8V5vMhPthcGGHS1SQs69bb2xs2SdtPUMmdPzkTPdgN2KNGsBGm6HGouDK8CseHwD",
  "key36": "2Jt9umbii9sPxVuvkGKafD3jvxsg5pgCBVAoeeSWEDCs6pBNJWnchDAsNmgTSpkM7hNwmvVQwp7KGwcua4yjwZuP",
  "key37": "jkH2s9yWtP1M9BoiHv7PfMiKXL4ePmNC8Y1znMPp1cQUgmPGQUyfBqa331E4mesjZmgeEgQDxbeiqLWhPj4DxrL"
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
