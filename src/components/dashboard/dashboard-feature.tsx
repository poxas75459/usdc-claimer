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
    "2QMZw5dd6eLnwJc6SXhRdbJ4fQey1LcxDi9CTBSLY5h9cY4LfWXwGWMuQkLUvxa4d94WBSzsLmBzReBYkPC4FQxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6641L8sMKMga3x8AuHhfpTrNoPWUFqjqvQp2MQYcrjNywsCK63LbNF3G4LANM2LCDzKSEs1Y26TuE1PQiSaBa8RU",
  "key1": "UwwhLeAA6xSaXAN1qgdrsdUUJuiibq8mGNxR7hgqhGamqJBPvxyFANeU7297V2iFfuoFjQYd67PkFZ1T9yiqTSE",
  "key2": "bKGCdQ5giQJwSuFvrP9qfCcSJ3moAWspYEuQcJPx1aBcGXe8JC4yTKauex8kafivauzqcGaLUGDqkbYhf6Wyhib",
  "key3": "21vTXPpM3GqT5jdK46RWUG3DWRgi8cdheHVUUDigPyWX69fRGWR6HvNXg67oKTuBPf25RdjBVz6hczvRs9GQi1N6",
  "key4": "3kCr5VC3PXiEBqVUDuNFysj1wWcFsBfCQYA6ZuB8LrANctyatvXWziTtrRW5Jnn5ygSMdPatPtaD1nYtb85oMadk",
  "key5": "5QsWbRXKivU7CNmh1Q8byZj2BXsLobKcbfZMVUVR2QQFCMGaTRGaYeDBva8bEpivEwrUAAsPDQDAfAnn17zFrg6X",
  "key6": "4QLnQTue45JRroPFQjZnzAY41iegrNfB4R75tVjfdnB7XuUvFL6FXWwgGNY4gRmwuBwJtuuSVnfmZYb3m5eEQ3eR",
  "key7": "36ASP5U45WBqqi5GPPUaAdBq1ooNwX3j83S3etyazsDtYkj6eEfDAQQWfnQf9NoSEwTxs4cdymNUKxoQtwkrYJaB",
  "key8": "67FeNNYKx3TDRJRxPKGF1rXNdDg28MMNKSpNShtqe6tcEq43ABS2kci4e4JmbUS2qpCNRhGKES4yGQkqbvXJ5f3q",
  "key9": "5Z5xxdzVcd7bZAMEbzonkp8ckfNS9bbGbsa2u59A4tn9ms2PdZDKcbn2AztuoKBCnHwJ6nhzbCAKG3dQPu1u1gUv",
  "key10": "27oEGpvqqBtPLXjxnnKA7mEJefvsijhJa4YvhYqKMb9RUhhqauAg97TVhTBWCau948es6Ea8hqrgFURo4MHRQeWd",
  "key11": "bvhtMoKfkE1FqkxKCwzbgmoxoHFegRNhw97nR4D7VsuNEQ7DhokruvGLFAVGmGwCrhbyqp8XbrnMYy2umf1ydWh",
  "key12": "56ibYyTxmmfQ1swJFsit2d8dRSEoW96gkfmgCcQB6LXeGN2dkTtfVo5FcjbeABvJ16Vg8N5Lt2ZEn8k8yyWASrJw",
  "key13": "47knkU2FxFcUZBmwzGKoatTkURo9sLKUackdLKgZ5sjVx6LtcQzQhg9o3sLVA7YWMm6KumibaRUuRfmrwA5Pj57e",
  "key14": "5oeAavfcYeLFW3cMi3n7bc7UaNmtTVR6Qr2HdZ21iESyrQHURww6qYGe4o7yN9Crxn4cuPziVSCeN9uTfHv3cAZT",
  "key15": "4CrXEbqPYL4o3bXbsdo5r7fwPHTUt8Z71NVZ9oKBs8XCqjqDw2LiPbMJBjrJ7Rv2EeuevEv2SjDQTTtHF8ycVVTM",
  "key16": "3nCcjqPkkmno35ArN8X8AcdGDiM5h5krqkJseT9JMuev9wtgVbpphjbM3TxgHoQLpNX78pvkQHbrR4zAbkH3RLXD",
  "key17": "7NAEjwKNQCGGXmVT3ixmgEFZ2z1UXv9fPmi55k8mMiq5rRa8UyQUae7upCjdhvMftVHq1a9GwPw5crtw8ssLgeQ",
  "key18": "2SE7zvjVomFAjaWuuJiLv9GSPVeYv98QuoHwSCn3bsnBQTdZ3aqaZzKRkTrSB6ghpJjHBQFi4LTK4VHUGmpqcq8b",
  "key19": "kK35S6Exfrp47M2pJnL2HRUiDBwiahJ74iEKFQhHvLbwUqMxUuhD5qFGYnWnpMDpjbZCBfQ2byxEJVaXS65VGn7",
  "key20": "5GTaKxf9cYWx58S3cmaos6N1aXoWQJzokLZuU63KTqhiNiNb67HxsYezfCDoTgpL1MtKbH1JrYFW97fV6BxXiMR9",
  "key21": "3ANrsUTfdq6qmkoKftcTMLhcrNdp4eEzbLUJbXRL57UPS1dALbXhiPxJWcFivgEmXhP3ruMw2yEFYsBFBeHHkary",
  "key22": "5ue69KuKi2cbbU7cAZPFMyRie1tx9WqJKMQm6gykLgx5VrH6GvwTkJPhXe5S8xaGYXqw5Ujg2B4skiSpFJyuRMdA",
  "key23": "3eQ9jng17YXKoUc3mteMV4EvbazEyBThGz9pjRCknAMvRhaVCbDWSbiFy6HxPNzuV5nT7pWaowDKR4nVzrL4ZmbE",
  "key24": "35MyuTqJ3Ti5UfUBwemwuz2Zt7sfdTKJhccYPMuR5G5Z5NDUZFG2ApWXPvEoADHsdykezWzhWtkWPwW7tGV6Di61",
  "key25": "4E7BMvj6B7sR4pPAit6eUZZnHbpg9L1mrK9UQNeFUnRujWf2Q7ChFCZBWeK2Ynhsxt3cpfBmqaGyotieYgjwEfEg",
  "key26": "5onjTun1GbMWQriAfUnKhnqVRCVSBLN6fRWptr3BjZaAgSSBvdL6iygGRgf9jovq48m998JeHXCthV3oqqKvbzHs",
  "key27": "34SkAXmcxVwrkC7BnMW4HWfN8utQ7vVvFRFJNnT5YRqkbKT7uCik4TLp5SVzuG3d6WjUqxW4RDe5AoRLHRUeXz9g",
  "key28": "4fUkWjjvFdkRStSVd7wiFh19ivVcPNdbhS7BUbpnx793HYip9AN1N7mZBH9xvSPmenuNvPowDDkyK4Fx8YQJ3o8E",
  "key29": "2k2c481ZvjVfPerzwHZBTxYDXZuWrGbF3wfzxYyfjj8vqBK3UePaBhs5oet8hcEbHvvrQLMW2WXwruRQLbdNKimK",
  "key30": "3LsAoPsW4EW4qLSuLNn6udP6pvfEytweYorBzToFXRxStyR8HZocK2Bb68D2ApxAGmrhjdRETDApnmWrZVTivL9P",
  "key31": "siWpvBpgbgnWh3DxfYiFsFuY8NcDyL82ASSHn7T4gMzoTRmthbJepMr6HXSseTDLp4wWNqGhXwEvRr85iBRgwWP",
  "key32": "5aqCWN6uNY3WMe6yTcrCtyYFdyzvDAs4Gi47aSkQ6qf4C6ZHq5d1riWXFoj6g1imnWkZfEisNxd2jicAckjrGJ1R",
  "key33": "79thkkMDWzp8NSpVjXZtabN2yRMoX2bp3dNjBEoEc4GK26ynh7RJRqMxnzebkzqoq96Xxu9TYPdVfkVXoXJ5y4E",
  "key34": "3tc97Wkt17x7sJJszdUrYhRq4d1CELhbRp5Ugdt614apPSjsxvZmPNn38yMJgNERmbJUnxhsQw2VEHR16phYTcDS",
  "key35": "4HYxkYcA7m5FQ8p95ipHuqW9NCUt922fkGhKeomPSB3RTjbwmiYa15FyAsFupiLRz6roQpFWUnzz6nPuQd2TnHxv",
  "key36": "2KpaLSPYyEy6XaSyygVArwrMeR8bhd9B3PJJhpsKcZRkWScgoQmMTB39rjakVSXhT4vHt5u153fZwVmiktwp5Ha4",
  "key37": "uzY1GFUijPSfTufBSJSH12ZcAhUPCnmyL51PJ1MwvbAgsmdVHwTe7kSS5y2zMo1CW1DgFhmAL7ZYE6PCQQXXb9d",
  "key38": "44dJAKAVhNivjZcmxnBjCq6YCzZm25mXUZHeXHW4mvcTB1Mk3uRVCvW524TTpKdCRYjZqmrJ2SeVESs5zDzGrWwa",
  "key39": "2YForKBxGokjS5YNpF5TtBsBLtpumHhAFn6gdsVzgqYEwwe5hR8bR2rgARbQeCW3t5DH8ZGALAG9kQdvSRxyBw3V",
  "key40": "3rpAjDaZtPYcVf7vDiBKuPAUqX5czkYpxGJ5SbFaCZb3TWyJ8rEBQHvgeQc9BtL3uPKXRAov7dBoSxnumjikyM8M"
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
