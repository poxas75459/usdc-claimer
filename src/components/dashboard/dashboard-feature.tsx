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
    "4LBihwSnMHLiDzATa14cFXhpk7kidsgq55d3oL9BF3ehGJmtqeFTKDSR3Y7F31YiKDZ1VFqfXTXZ3BoEgG4eU5Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKWrmtS8yPSw2Ye77ctUM26jYWWrv9fga6WLydmn3A3MWtDaiPfCTyK18whm5er4qSGubWFYsFLbt1AvWDFeaot",
  "key1": "49yXjz829hJaTCvpUH66Vfv9aPrxKiAfVPGau1feMyXNDAwUqN3bre6cDyPhushK2UnP3mi1PJuoRSpTnkACgSog",
  "key2": "3gXYaARtPGeBt5EQLhNvRrv14NBzsfwCy4EDCRxstbLAJsk3buqmP69GPapWYAsfepPcnKmuXhjpS1CR3X958LmP",
  "key3": "3TKEJEzmnHrwXfS6tG1tdNDKayiopZiejxhSn4BhAH2oSjtHdXLh6Z2c5bGkgsL5sPpdUrMmUXPUjh6t3aZPG6Mq",
  "key4": "2n1akUAymcTHDcSJP2MkELgjMNoELc9GL82hyPnXPyuQqnMJPua9sGPWwwePWJgdRkquMi1CZyKXssk4Do65oDwY",
  "key5": "3xUKtCa6Xdq9XBzWbsQWasRVvdBneDevCkmBdTMscW1D48kxJczGMLPWj6CpF7gyxAGU7m8L9Fdb1eVuY4kVNndc",
  "key6": "4492fbVhrKypwuG4bR6KNtQubLJG5RdSBPQJSxEvi76g6hMzYpJmNpFbMWGURppsSVCY3eCP4WjQpVvcXRgNuADd",
  "key7": "6RRvujfx7THExgZbyoabyLcgoEeRxoCTx3YtdgVrkDabAtHTXCpzAMtcTQnsk4nfGyExkBtT7t5NdTcxaJPjETi",
  "key8": "o8VHnLtGQCM6ASLkGJB7FL5NgUw7LcdPzLotxQbWrcHtap2PF18cb1nc2ToFoeXTDEoW77cpsJCys6Y3gzQQrpd",
  "key9": "4ppTXvYckUkH2LhKSs1HTcRcjHJi3Cefu2H1egpxKbSrBkwFDo4xjmnM344zgyozhMy7JmbtCsVPeibSpW8Dj9Qi",
  "key10": "5Y2kBX8E4217kA4qoj1ZwaRKpGW2LBoYQdJzPL2ahmNLnzXxTNQPXbefAWY1cb1jqXbiTGAhYfxFbd9GuLtNZNxP",
  "key11": "299Z4e7YqAH4H6rGUKAeD15c3fVv7t1tqBRZGDwbYgjFg7W5fbK6RsGzaXEZTHhzFPSkjKAYEAsqFT2h4qwtD6QZ",
  "key12": "AmtYQdri5bH6wQ393Zc2ESujG9Ud4r2ghY9qFHjZjpbtzSms9SYZdTHrpRSQkgDE2vsaEzZtRBaRCBtL4wgBpND",
  "key13": "UGoyx4AqNAs5GZvZU9emuyi7NLbxEyNJeF1QZoynXxYYMArHJpWGGLeh5Z2mRccoizAz8oTeweYme3U1peG5jjg",
  "key14": "3EufnN6JwbQAMBke9fkHyzg4vbATsYxDkzmaz1WECw64MBnxSDK1bbZuVKfMxV4bMrVEL5wzcopHV7MVFdvidm8R",
  "key15": "561GimPcY5kNtbaVdaWRcUEG3wCFjuuRUom6HgqmfWqTniijvgYSM3y3DK9ue6pTnDiSTTPTYEr5Y145H2AcDCDu",
  "key16": "41LRTrssmERxwpMhnkauQuPeL919fenXFKHss7JdEhVPhhEYZbqLrSuDYgaGrryG2Qm19Hha8iNRFXG7pc2XtA7a",
  "key17": "3fdjy5Mm3Cdg9zUUMmhwMgG9ZHuoLJMWyZdSNDEmRJCAGKiWQBZ2XHx1hqnhsSfgZ92PPDdBEieQMKWPGcXnptQd",
  "key18": "4TLsnUbYT7urFKTC6MCofxy3Fi6qAXD38w2X4RzwHkyZuUmpxs64aWdezEVd1kPA4o1FBidNdT5ejXSK3qw6AvjJ",
  "key19": "4yxNtKBQij5Ve4Qb83oCPFB2qgWZD1xs9J2YwG51XuD8F2gDCnfRGEmvVp3abWhHG72t77RcB571vWvdmSYpqPox",
  "key20": "u21617QGN2EK3BvPFS9chQbiyAZVz1MXZKbCC7QWNGaVgh2iaAe4XUUAyVVLmCijKJxgKXCytJH1TZ164mGuCX3",
  "key21": "5dBq8PCH6f15YuGWH3yM7fQrtEdJDhq3UDSGHhWuAAvcNR6VT8MYWX3WRKxaNe4ab82zG9vWWwrDtAXLSUBkaPdz",
  "key22": "28XoxRjy46w62G3QctsGnrDiFaWdcSYDU72v62ejdwtSYV2PCfhdDhBwY2Lu1YYU8LQjNwqEigxueRwhC6h5ZeEF",
  "key23": "4igy4bXVrEaRREQzbUcXv8DxwYVjp8MPLcF3bsuVjGNzAowKEKWZXavLBD2GmTmPh7QpMpPhiykSH9DqK9Zp2b1D",
  "key24": "26i3ypwC2zXtaSo4ByYdpm6enwF7kXchTzPhxUxR276PiZ36pQ2apExmaLtQ6fDcWnRCbMuMhafn5LU9NeJEodMA",
  "key25": "252hQxPDo19cMrmbhgLJgyJi5hyWH9HfF9Lvoagh8jtaZos2tsuYgBXGyi35gak3LDxEwrTStGHCKLZXCQvZ5HDX",
  "key26": "2JVTN7G2omqxKVBFTiPqp7cwkJxmdbQ2o1XRmnCxqtZA5Q7itPtmiZdbTBv59oyvc7nKjyBkYUc976bRqKxQ5mAY",
  "key27": "64B5ToHJNnheH3bMVLTGDh62RPzzfHR4nPWhgCNziL2TwTfqDqho8RKFHb7Mfq4cmvhhJWpEquA8zeqT99g88b8M",
  "key28": "36uJJibWJRZRmq9ponmb4dKSCnG7eXwmwaCzqCDDUyGXhjfjk7hyW4c8YSzdmVfmiZ9rtFf6HGn2fDN13ZHqsXMn",
  "key29": "5qx66bNfg8SXTRRu2dyYykFszoRH7gm4HmRCPZLR5NVzgkYFWavBPXRXJcxZ7dPBsPTkHzwtSawuEJfzHY19dBKA",
  "key30": "HkkLLnNShgnFsqXk8KcGi3WbTCXBFZotCgAonmLXjaic4cTWrypqs1s6Bgoq4ApcPEaPyJF6C2vVDbQyMwqVujU",
  "key31": "4wby4ncFNzyxga5Qr8ZnKRjFo2V3kFKq1X6QEswkjFQ4f4RsT2ijvUdJJDWhDC9oBAoy7i82m8JB2hzS8ao1RLog",
  "key32": "3PibPM2s3UhWYiZFq8p2XPEnqMw8yyhrt4RXmiztuVG318hQiutor84JZkGSRdRZqvtzU6mxzJmy8jhXwpSL5F1c",
  "key33": "41njCYfs7tVVomeuCWJAZndwNCWbt2tXDHzYp3WsMQALWwpfjFo5ToqAkn6HYHza8xcsMyoBhLnGJFdWm8didnZM",
  "key34": "3mwLnHTgjkFPHwYug4p17Hdj1eGt1Xh4KBoEhe4zbzKB72CaGxzpUyDTTjZprJauJ6WrvFPw6RQa8ah8idwir38k",
  "key35": "MUxeF3ZFgsgNcvKp1d2MTcv4Ft1xHWEBzUHhp4XDZBDCdo6bGEJoNGhJMf1XY6JWDNQZM7kCzdgJv4TZ3wDD69q",
  "key36": "4LfbieRkyrd9Pjq76ADdzgu2B8pDj4ihKSFYNZHfmwDXcjZcu91pgQQvB8WRTp8j2EkVtoXf1wRjSi5U2QLx4yu8",
  "key37": "Jwy5d8mGb3ffpv9RjkMjGEU9CvUPNGi7ry3pG8HWHAdCJjTYJKNQPZQARvwuN8gcYBRrkFcEF7j7gqozSCKvEd2"
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
