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
    "5bwpdbRXpVo3XBbPtK6WbALeL4QwjFGg93Gs8MEprvWPQpfmEV8v3XSNvBEK4auDBVyTnG6omCy7wBmBSBfoLeQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KAmkSzFvXAy3WdE33LHiZFg1xPyES6dYsmVncggzpae6FbQjNFQRbSjA6h6qyWx9LdyagZ9qLv6yHMc2476KMm4",
  "key1": "2aQhnmnFJTB7xJLRQSV87Ft3UUicnWinXzzmwJaZB2dyMeA5Fd5kK7MoLT5zuCg8BY9GNDNY7NSoy1qUVWCRaVfr",
  "key2": "um7ujKXdFfFHrVieqCksYak9gHKW15Agncna9ThbTXociuq8y3fc8Tc5hknRTBXnTbmR2LAbKtf8cHfQSWCa38r",
  "key3": "onKkGtiyfbpTwmA8ug1QY8svxcrz91wtWbxayAPjCYtrBAtSTRwWc3LfSULWzsRFPWBPVFjLTG911cEYMeQoZj4",
  "key4": "4cEyTmLcfaEo9PRqpaG5dnYRBkQsMzzsmWP9jcnKDWNYzqtpPyPvF37wtrBC92fMSbYjKzu35dvbdMLTHN9JYnMy",
  "key5": "XAQJSF9BBfK8E2RNrpa7uTuk7ZDbGhQJtEndDnn6wtixZGhgrTf5RRjqxZYNra6x3pikh9Pdo4cMRrMN63UU16k",
  "key6": "2nFLANWR2jjF5Ychg679d2KPstHtntQNiwzQdg82N4Eczbe4keQhgWhXUajrDL4xybWeYyjbb5SnUcCAuDMoLSJq",
  "key7": "4AAidVYegbzuSy4uZE7oNye16pZgmX59wLx8KHm4e9uyMyAjeQpmDf7KC5g3xin1biPdmpLg5FSHV7Gxr822Gioa",
  "key8": "5jrQNrSEms2JeHWNdTL5JyVB1wQPcaiGU6wvuyS49RVPa9tETAV3A88QoC1vnkC96FATiAhLfuF7MHaLGJ2a2vXb",
  "key9": "EhbghAwfn4W7ohNF6umFqahQAzGWRrQKdrnhroKRqpwUFUaMoGNyC7N7Diepbkxm6dUS2cC9VfsX53y9Gcb1Lvg",
  "key10": "44M9dWNkHH9vjvhRxv58EJtTu1ZZmhpYSMuuZfSg6sXgvujGRjJE7qxNeBaSdbCfgzz1DNLR5TQb8Mwiv41wQCJZ",
  "key11": "2eLBH713DVADuyvk3D74jGsDztCXf8GvYEH61GmgmmMgNKSdUnzBAz2ck6xH76JCKKR3BbkgpPMgGHhUynaWjXdr",
  "key12": "2ti4RLVVXNukckw15LRmJjye3SqgYAGnH2ZcBHLW4KFg9YQQTFngQs5CZpgAGJ6WWMJdoe3QMEPrrWFLoWjPFpk8",
  "key13": "3Y7xYXfX5LJqRjb5WEz769cu3DBdfQbxC2JUwFR8JePuHLMmik1xCSa1kWt6R5DBGbDhcRSUFrxGMQRZWmH5N63s",
  "key14": "3JMJVoTSSPzKaHiV7ZANQR7VkPdEhcUmfP8R7uAL7iyuzubWridG5ikTWBaXiYkspGv99appaitCJAyuk2fR7ZVa",
  "key15": "4xMD3LVLTfgbFfs7SMg3Qj8Mz8RYXXqcqCrvx4B4Wmba7jgr938kaBf5botjfy8tRPK1iBmtK4FKienb7xejLAgy",
  "key16": "gWPcduRZfsShE8dmo8FrDyghHzDrcHJnC5m6VwPZ8XqBNa9GZe7s6PJNShwGgcrSn7swmKhPUYmaHCHoyM6cogf",
  "key17": "jJWjMkJQyjGQYbaVBfEVoF77dhpEtTUvhgW7B9s5LLjYzEgSaHGhvFu6StiCpwY6GnG3rPeXLCtSCCcy81ad8dN",
  "key18": "kAUJdC2TxoUYyDTB53RW7M3t5pueJ6xapWXdjjnrkg338sLCDyrkgUSVMZ8EBrkZjYohiY7aqmZ2ANiFuDVyv2J",
  "key19": "4jUuNz8CdgTukoQuJ8WuefKJPhanDwFvrwUzNEXi5xt6CHYP4Bqhhe3VRn9Qi2D5oPUrbjNpqJ4oZ6YQdCyqUdRu",
  "key20": "49mBLy5DJ4zU4v6ikfWpFYNq8Q1NRQoq47sgApzCJJg8Mu8MNyGqbDo2LQjv9FcbKiCHwj5qYdhQPdKqcuwAX1Xb",
  "key21": "5uLiGQSdzNy2xSyB55CP9CWsQGpxPz6wAZ3wiCMXqKxohzyzDdofpaeTxTdZab7ePk2gfQGH6oyunidsY4Yp3ZTs",
  "key22": "A1mR3RETFXQEPCz55S5oZk6RUwf3d56S5j5NoNvG7u1ShbnVR3vvZCwcs3koWnP4Ktw4SXgKvkpv7puFHuGnABn",
  "key23": "3recAw5tJjEFBAv2QuXGBTWPmNZzxcb2QdbJXgSsMa3eN8FquKpo8jN71dcANtZeBP73wxKaUeibU86V6yDAbjun",
  "key24": "57ES32foACHy8VCfVHP3faXqZxCNnZKT1bTUg1ywyqsjRWY2ws2Swmu14jVcqMRrr3qaN4gmfadFp3pwPqq1vx2u",
  "key25": "5KBioJdKwqMqJqCSdoTjD4iFQQBwk3bSqYDMiTmsdVWHKtTRSeXKVxXhFzfLqLz8L1TTqEPLGEJ2M4odQED6D94u",
  "key26": "ms2JtU3Skeh3BrQnihjzBLCetL99TFKVsx6QyXsZxD6VZarruH254ySVFk5iHL11yG1kd2h6q2rogTn9uJzoB6r",
  "key27": "2SEqrL5Mg4UugfV9oSmSFxFyoyjT4HHB53U9aieTJqf9NwAEMjBYkg66M51P83PAtV5S96nbeLNXtKrF8GCs7Ke4",
  "key28": "5gHnRaHbMGWWE8yePJpvneAeHfU7WYG7h5mGs6T3XYJLgdpjSZY54JMKExVnWntc9jP9pkbTXav6JVFPrsy93aTM",
  "key29": "5Lktup16E9sHpYGDQNLmLbBxMKyyqwTuBrA5tFsBeGDudrhhyjLc94B3gpuMUik4HVtnTmEJA3tpNuooSp2RwmhX",
  "key30": "m1y7dK2mZBhQzQ8Q4izdY4c6qjyH3Hkf5VRuVhzKMvsUmP6RCVXNN7jYAuDHm4yWPvTBhLfDn3qYxGUZgHLRbAy",
  "key31": "2uR6pUMrCvDC6NZ8EZJDfw88SHJ3aSJqA14rThRqt6eYMcnCxxRBoeYnbr4xDDvx1HZC96y1kEUBbo48vhLjdHxS",
  "key32": "5CRsYumKntE4xxskLxG8qrfBunti3DqcshwYLrheHih7KQHBXeZSHwUWF6qLzr8FMJn5rQLTQ5F2Q682oVjwFfc4",
  "key33": "3NLQn3ag2QMMTXUTagXSoGb8KBKTcbaty2s4XRn5YejHcRRqR3Xofye25ViizKnxL9iHCsoEeDnzM2SEbdw6FHuD",
  "key34": "46FZXKguShvxVbYmpwZbcXEnwATTqBGr4ZnxgeqhSUQRSRNAYWG9a7fAg5peMce89JBixJfP2mQskd83NiP9RhKd",
  "key35": "4iDz3mrsaxRgqCnGR3EQBDJnDJ1yzU4PeKfw3Z4DQRxA9CHS4NxpV1UQkKd3jwVRkq6XbihctYHEjcV9B7UauR8Z",
  "key36": "5DskFM9gKLc2ZbHbP2nhvtRnhUFnGDdWH1anmUxMthDRsbTykvL95aNPxvyJomJsmgQ6QpHPxFRFKbjxSpkhcTag",
  "key37": "2npmWmuZ4TLt8g5957kxMSdvkBdppreUVauRwRV5gACWRs15j1j2HLfwsaDfXdDijtqFUd58185HFknFR8tGZWxE",
  "key38": "61ET5zvy3KF8McL4aUreSJXrZ7oRZiFZVRm67pRxs1Y1jdKJ9ddPpA4tjBZ6CX1KCCf4PQWfZpyueSddupU9GHAa",
  "key39": "4UfsBpnk1o28hjeSaSTTC3ezVahBQdXXMEpvySBKtggPJQ9QZ2EdstA2UjMkxt4fnAd8pFaDa11E87CNLK6jFurg",
  "key40": "2fJPsK6v4imVEsMxyb327TJhzWei7o3yTSiRmpY8Qwav5mrL5F2BFpAzbe8Ho2W8XzSdh4bvpbQH1KanpE4ams6A",
  "key41": "5ewDncJauGxc52b7fVZkp74VtQzMmT8mhuCNurg4hvi4XKfMytA5RRMGwgSj7BxvXAfS9j8RE6D4Yc15eZcMh6p2",
  "key42": "5tP6nBquReGmhCUbycqVhJ5gtgv1D1Py28Ey1YPtXrNLCBX6MhymJCfEvY6gNZfrwwAAVLFPAGiDXXDATqLP9nBJ",
  "key43": "2RWaLHjvdjgM9Aoj67ABHQJxyKzUHhrv626SaGKC7WeVv7qdid9zs7dWUCRpwMir1QhpwcDN9Fn4azCPXSGPi7Qp"
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
