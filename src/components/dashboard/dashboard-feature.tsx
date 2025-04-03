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
    "2ZvQGogr7WGcezAmThEJv4zTHLxiyKBbkNMuXCL7Qh2p7DmCDioMhEq7qFXAyASQTPS1SGQDqRvn6XnZSESBMUGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6rBJstPrwprKsnDFzveArd8hMoemn1Yf1JzraBTfpBBqaNLgLFfCD9KGe3GYjKw88yLbX3nw5jYpmCMqj1sHJi",
  "key1": "3x9pF28d5dTbqJAUQSAMV85V2m6KYESKdCi1RxnjJHP411iEeh2Jizu2V5RYbAmf1mUpfkfE1PcqgMTiv4TKqppc",
  "key2": "Z9w6qFQ92QF7gP4Hhw9h72NsvWxir4XFTVA9MDkjmgTPFi7NJLWhDtz9b1NB7ohJydQ3oSzFFVnZTrYCR972aL2",
  "key3": "BGbxaTJdnjP8zwHEo5h5TZzs4gV72QNhq4qfxk8Pn4kry6BxGafYkbDxhQZutvxqcapXfs5N1CEoErjDU5BTcJf",
  "key4": "3M6iaCThMpLwkt2iFG3MkYyyWufczZ9GYSgDPoDiUyD4KxubffM3Tn57EWTnP6bVnzcb9PuzkiMrPeHHVNeGi9G6",
  "key5": "5a4JLRQZDeUEMiEW48nxP33V292La8pKAYjNA4kuztPjvt1VdXR7wiojdha93kp2VbLvuiSwQh8fQNubbBMVi96H",
  "key6": "LpN57EPCNwEZLxc8s2BHiWrqn7Uw3rUYhZKDKHAveh2n4RMGyCU97TSMv7XTQAEmQTYfVXp9MXaBqKJ4e1Wfe5W",
  "key7": "2gGwNn44PbzGvrE1Xx3cK1BnPn66YVjcHzH5G7cVydjS9S9MkujoyR4LQix4tSRQUFBtuPLRsMRgQ2ERm9uiQ96B",
  "key8": "5LQfG9u48kBgc6yEjKQx3KnYxemdnrnNiNbeX6DeZrFitjLPaGJzyuZjKe99LJMzi8ABTkTS3GzJbVAD7HNwKVTe",
  "key9": "31BMeqimdNdhaPpjLEX8tKeJXX59uwcEwE3a6qZtbmqubD9Cf5F8uS1vEVHqgt6Pj3r1iZvc7ERp4hEXLQrVS1io",
  "key10": "5t5jQg7Pruz51phHMgfvMivyJaJaju8GXJ8bVPj7P3vSmRxRCzwQr4B41tQUGJtJPcMmLuDLyZQGCiZixT5g6jru",
  "key11": "5ooTjbK86R9ebkzq8KhyGMyvFjreGJFYzEehibB3Y277LvfGMTHTnfxzSoBWRYP1wkgAaFjpYsChgmBRzhYXikeu",
  "key12": "6cQQxGrs1GttGUcD4y6HzeDmNadGG8DHuioPLDLJsMyqGLPyDaLTkoruFKWnJXhoumAm2DPNM2GBdArRvoZBxas",
  "key13": "CFEJsWhtqwPraFuh3yG4A8MV7WkvNrN22rUHQiKwsvfFpF8KyHUQcBLgJEJJA8tDJi14Fgt2precBAeZW87iJ3s",
  "key14": "swc68bBVc4Be1178H52TGWyDc6CW5tBEzHm2grdXeQek8N6ExEf5K3Y2PuB8jYFv3Dn1ZaZPwHw3kSN9MAdewfs",
  "key15": "65bgGQoQw1WxjpEAJYwStL3mm14MRpi3Q9qYNcXXNsW36fm8JeMVST7bY7utNcJ92xtMxDusChqnAb5jGbZJUu4e",
  "key16": "4FabFtSAnuN9BqpFCwxvMRMveAaHAvSWW2ExaS99FrmSjuGjnbGLfUPUuALVDSEEHD7uDwzNjDUKui5mfjC7RjLB",
  "key17": "5xVtiJQ28gtmuXheYTbS25vzfBiD1ASq4TiG2hXfmYQGMBF1vDksxT13rnbwMX55TA3katJUYKrBH52fpcd9CQZp",
  "key18": "2Z5evUBNe2icXDqRK9wTg3tFzmhyFAbJzBWDCDBBu6JQGvAsdNd3dLsUgfVVEuAabvzTvzbAKrUZAiMAG4QcRbtA",
  "key19": "2Jef6sEe6iecL1bRHKzmqsmn3HTfaV5BkuFLoGbhfrsTMMgtqNCmvofDxjiMPCoHNwMPxyBW7f7WQjhS7G59hqQw",
  "key20": "32E4iwH4KHjKd31sRzwDRjm6a5kr5MWxHMwxKZQLQ8ctpA7QWJJEiA8uAekvVX79jgz7QVcFPfzziN1u5cAJgUHV",
  "key21": "2xG92SJDV76uPC5t9AsiWtdMppSaUdLVSXaYuVnJA2ftnsJHHY1HLz7EV9V21kxQCJqSUyvacsULYyj7G93V8Wtt",
  "key22": "2GHY33eYVVtEzNQcQdkw9C9BexdDWGXSCisxbVoeqdeuMSaf7V9X8ZgPeLWYn7X6ToikzaDTgHKzd8EqUWCyEWL3",
  "key23": "4mkL7puHrNNEAcY76HyhSZGHkscYPeHAU3vo55FMxXm7NKbz9JC3nnD2dsoTf4A4qQjkGKyPdqDiRWLFE2WLqxQW",
  "key24": "4TcrPnk4RD8Mdk2PKYqgyx3b7v2WKYGaBnFi7mj9aZ5tVwkiRv3svhE5xqQrLvfoFYtBpEBPGWKCuymyj32Mx9xp",
  "key25": "5A8pPdiprTZznxNq1JogqnyhRiTeDYQSngHnucB9UP7SZhs3a37LyEuDLGjiAQhd6L9kXsQk1BfyfSpSGvREzsvN",
  "key26": "hjwGxgcd3YsQ26NxDFLHBhGfFbuxq1wpXSigH8d5LEPrqGWGoiEyW6wxazkMA4VBFFmkyASr1pV3vXgLvdgfrak",
  "key27": "4U7ZNG2mVoyZQ9bjRsb79on1TgCMPTE6jYkhTY9QVN4477mThi2qNMH5bK3inTqxvz38hf6ymfky3qKKy3dkVTTM",
  "key28": "3CXtR5Afwy5xrTYK9WA85cUdFTUL8Ev4EQx4bv1hG66jEYFNfdaVEN4ztq2uHwgz8HGxNkG2Ns1JDCHaEnMW6Vwg",
  "key29": "w2Y3pka42DAXmWA3FMV2Eg2fCQMNuRpsgcpJJM5tJ9bjeESnz2pzgCMhCcrgEgvchW4HYZfGY79bxR4QxkKUoW4",
  "key30": "5GZBghAP166q6572j2NKJr6tZGsQ6qXtfFjLVbK1p7Z6mWEtLc5u4CKWQJ7PJN7n2mYoRY4H3jDJCTXMZJ4Whfd1",
  "key31": "2jfGiPGxcrngjnE9tH3FLw84Nd2t8aESJxbuek6baFTPWTmgg7U2wbdZ7quzZqLz8CfV9JEmdkGdSZu95aobnGxp",
  "key32": "3bufWaSSaT7dGK4hVZpBL9VkcnJSJy7e33HnTMzYDcdpveeSCjez9DBVcEmixSWCQrD6CD4BhQ1C75io7fo6hrgu",
  "key33": "3RvnfooZmFsCHiT3Svnv5CLdAxgektxxUp8DJyLzc71Ntohjsya3J7SU8BtTTdMdDm9TtypEcAovW2kNmDwf74VT",
  "key34": "42e5PUWFzyvsth2xGmmc3icTA75Uj9nDiQnuTqSdkTCpT2tyEuegXvzSgEbCSWbJFZU7qrj7AKXEkaKx6ds3rFPq",
  "key35": "4immnZxuUvy9sJuGo6BRVu9qu6dXuc9VRpoUftjaMhVVRJmFWcEfgDYUeDvLNwy2fWrJwmcP5EgRM5rivoeTKDCb",
  "key36": "3vLA2RmkbsGPN8RFvT2ze6MsVkc8vnfxGg49Mog9yB1635FbGPgTMJRuJqKATvGT6Kc7dnsYQGtyvYg2k8VviBLL",
  "key37": "3vXKWrFT6W3KC5XjhuHvP9moxrz6vuF9aa4oCbCxGHsDMa5MvZRikKnjxvMqafiyC9jXdvU6HmrhzgzqxXRDewid",
  "key38": "LYXGggFk5iUG9usbBHMNWZR8xdYpD1Qf1T1gTExWTGAf4j6LH3yrvn3r4TVLmxKmbmYgS9xVezZtqdNoswhrzWX",
  "key39": "4YBmEC8uNf2nN5o8CPcPgdq6A8kjHcEAw5geQXoPdTAkrUGoKzHuPYehE3538i7dTpxDSQM94Z7PtrpQeYjPky72",
  "key40": "4HrDCo213FjgxVZmy5hJTKoo4y2jBM3Kj3Gr19sXnDFfFQCt5hyJgR9FqWf6qwfzwv7Q6Qu3aESjkGrB9nt1xXuQ",
  "key41": "3U2njwJdfGURH2w2W4JgxQnGhN81xfxFrAKX41ShgLkHrBBkBT2nGxfJLQ9PcUKu7LLsinJE4Jm4DbpQwzUkNr1F"
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
