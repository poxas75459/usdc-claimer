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
    "Mj1dvg1EpwWWFSWbsJaYhjLt99MRwxCaDLksa2kUfg2STmTPpYbC62HcC9ZTf2UX1WnngLGNZt7E8zyQV6KChAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1vf1gfnN47JHtTfRwXc2e1VTujgXjaTE3cbP7KWAAWsTNVBJx2Gs8wNPsDYwCkHEiN4iRfGWUDyBZ5nzQqbEZXt",
  "key1": "62L2GKzMkwLogHusyS4dkFW2D1nwbB1qXiYHA7SeD3KsxqnuE4TgLaJybjmz6rcbNT3ixnT47DwM72moogKdXDMV",
  "key2": "2YA2qc3axZubuKrrPoU9HM2ZXa8KKWpUiquhSkvkbtMUDeTryRA32LyyoJYAuXorFEuGYD29AvMpm7BkRZ3THYk",
  "key3": "5frKcSvfWYKpuwjipsjpRYA2nUJHRY3TfeEXbofe5Ca4XAFB9Tj18CT7yC2MfX7R2X1BQsjrdzEHdpHJ7BWPNfVy",
  "key4": "3eQxoTQCUrWVhJsfD2zSgzFXf1MR6pPgR3xVcskS69cqYsK9itjCSsaf7zrEnYpGHU7vhS9vs1imgR6pcnMsKPsz",
  "key5": "Dv9S68qn8myioCnyPg8DzpxyFGQUPohWSg92SUmJPDBHrCsupRUyhfNGeqCHXJyCYCB3hDUU3MKVmnEHmyK4qSN",
  "key6": "3fMSLndP68xRmESjEToDj88CBLR223mL1oft5Y9dXDB6DcyRJ7qTuGgNoctGaBonHVAg5zK6LFWVY4rLi76ibcnK",
  "key7": "65y6HtM2WCCsXwXVgitCaqwK9fxzJcz8fSbAxnmuxKJ92FxZLD6EFFYfVTTX6NNKCE1BtE6V5Bt8E4WzpHgWR98e",
  "key8": "5t3NbLyDp2Xc5d39mT8WzQyXTHkg6xWhmZFGq2SM98UvFNNkUpdtLDBEdbiuz6mVptPM6jZAnarGgNSTfVBicK2R",
  "key9": "3k4sKXabeHa6zYqTDPmzHPDQMmmmzobGY2bHwJphcyQ8Ca3esdQsvihCv3wAAQKunvpqhWwjcrgVp3jDkKZirVAs",
  "key10": "5QgCC9ygbo8qePZ4zdfwLxar3kcL4t6jtipHe51QWpg3WPbeh2cskZ4yXquKoeNtRxAwJfyfxaJxJtE7cGT8XAgf",
  "key11": "bJFH88fsSpJ41Tks3xKX6aLE557d5zgermsx2GSUxz8WwuJfun2YV1K1yAQuzrdkseMu5r35t7iKng1u5f1QsT1",
  "key12": "3gL1xVZDnNokM491t7K4kWz1LPLSmyAUBijrqdJjh2Hd1W4vfDoF7wve4rq7M8kvWRFDgonxdXmgvvVSV6mB57bE",
  "key13": "5idvgusB48kegq92Vem85U7xZsworWhj7a1xs4ppMS5xgxxHK8Ct7FqRPrRyTApKB1QehrnBhoED4D73rHcZpprC",
  "key14": "5YswCxgwTus4qcWx4dwHoWnvCXB4XH7p2GLUG1SnFcidrsgsmCNPdRxg8hSvDMr2NYd8A4G1hLWeXeqTQcPG2LXP",
  "key15": "5j77PHAnMoTPRTdxuYoKKwPedpjnppMNhGVsJjCREcZT4HY43nCsjLH6C1GUQDE2VT5UuR3f9w4ifqrBKFgA7d6k",
  "key16": "3J6vteLGbad4ptrJ3T8QExFJGo7KahhnacAPFA5LeAApocvKUguTawFd3Rq2zvSqZwruMhuXgCMM4zsZDPRQ1SL1",
  "key17": "2ToNXMUCckCtcv8zXmjrhaaxznggS4EdaZYr1EtkAq5xzdDu9i9Ss9AsbZHKtGXFCCtbEMGrs2rRWQVkM4p5ijoc",
  "key18": "61EXx5sU9bbpgxNL9BaTUUxGEsTmLsURqPEnJpKrZH2VRi58XC1TM7JNbdkfFsPZmCSS1YZbGwWkK3awYEvZNBDY",
  "key19": "ZAhsR7iCGakZqB3pK6c44WKYDGgDbosGMaSnGsSfN19i8Kja4RgBzXGeuDL112iYUy7qxfSnVPe1VxBAVNzj1Vv",
  "key20": "61qmEEeJ9D54FARGkUxix8SsGuztgAnuapLH8NsJT4SvTnFgPo7eytHtyyZeXFGMVn35PqupUjA7QDWVxJQ94cNc",
  "key21": "4oSnJYaVecTrPkk6mQjJkFv3G3Dsmb2HF4Dv3hZitLRCTH8k9q4F9dHW4wjNSdQGpa2yavJ8ZTt5EddW8czqzvok",
  "key22": "4zbP8ExcFcna2dxzHnkN4hZZMrUEL1SSX5TT3g1F3QEZbypCNGuAfkYQVRWsEEM8n8tC6F5v1wKT1AtKNQc69Eu2",
  "key23": "TXJmK8RSTVpSJLizFgzxmuz3ZmYNF1zar2HxFsZhMSooZGxdMnSKsdUVfXA7zzfRpsHm7KAGNm6NHhXvk5iKhZC",
  "key24": "5oAcEPYehYA1XiSkKs2NuEwyACsPf8rE1NsuUjmnWApVg2i59q4LwNWRE9wVXicJUKpf8wvFs1ZFGtG8NiwACYeK",
  "key25": "KE9iodf5epmukiqpedt1hYDfQRpiMrrfrbb7dTYZaZNNhyHH6vMzzeKXjiHQbc5cFSuR8cm7yedMsefgD7GcwkC",
  "key26": "3QqRw5LhiJRt4H4nDe9n6rmu21zJx61FzQZ4F5nEXK5RF1ChLzb5to3gBPzmGJLocJ2Q2NrEanDAJkkh6tW8LMhr",
  "key27": "63wmhyy7QDHAXmXWpZTp9M82njH69E4j937y2h149o8hBuHwBcmcJjwP9Mg9w8jAchPSoVoYvbW4uEXD7ccnX7eJ"
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
