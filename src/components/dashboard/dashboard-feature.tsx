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
    "6foVeEnUiqkfW9Q8VDpNf4qD2jh89jJZjpAogdqrqjigiK1ByU6GQkK3VGTMX3AV7zX8nLj884cctcdXiT3N2TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aePHa25e6JzHEjEuLgUrc9P47y8Te3EcFqESzxo6WCSWAUdGamwXg6uvb8oi8BuG1eJtWZYXZka7nHJMWwPE1LR",
  "key1": "4fDzen3w37wGCfh3b49dhgoVfyWQ4iqy1dYcpjLFBPcTnkhyTtK256X5NQdwhnn1xZUXZZXoBu4Mp5AHokExEjeK",
  "key2": "33vvVPFE7WhQ7hLoJ4SqriXbrsCkS8fKKjU4eCBFeSLwEsRySkAkSsDPspRwwzUVG9n65j3mvbcYdDffbvJhnfNJ",
  "key3": "4nykZiDn33hQnSquDmJ3KKJkbnrMgBtGoMXNKArTpy2L68MqQGZiGpBRr3xRPioNDhq9fZuUuvQfUJxoCYT49XLw",
  "key4": "4nwsAB87LRrbcVPmJ3bvXrDu5bSKTJ3irzAapz7K47q6PsQirC5iLUknhXTXkWA6cQ1UeEtwWQyqxqTK6Aq1s5Xv",
  "key5": "FZJZEUFDFCMUyoEj8Yr8HXUoSrtdfvYMTxMzWLXWEWGXWdNTDCznV8aqt31gs2pXRc1NLa33CQrPpmbg3Zb7LQ3",
  "key6": "5cobhMnkwKFcMAViKeVRASea8rCS3TjtivJTTVdwsJqGjSbB9q9nBEi5oq55Vpj5a1B3HzZ1c9fJKKGn4sK9UNAC",
  "key7": "5PnvbksENeXsyxFeQ8QTLVHD5MMjNoSQfQFuTsvzvxfUJA9LbMSusti1YoHkpzZZgieHombyY812RpDdJMe3Lqjf",
  "key8": "4qJAdmqEZHArkiYqbwrnSLF4ZboZZWfinLAer4HX7JAsMQQtsNL4qPXJJrdzHyk139jNdSE8xtj5LNdrBe1kcyzs",
  "key9": "64nKq6ouSSmfMXp2wQQub72Yg3cQfwqGJjbs6K3VAWzHFcWmzMdxxGwmZVbZLrG4yELgRQVUGVo8onhdYcf9KHPf",
  "key10": "5ZU7v5Wfo8rTAk2Q1oSD2PQxe8iuPv72SvjPTo9YG2CVswFGfmFBaEmbxWwx3tnB7U5fMhftBS6Kt1WyCQa4yLtM",
  "key11": "3SujR7qkBN7cBHzzgFL35D5GKzbYy5bpJDQFDBReBfyyretaNHont4grT61SFAMsj5LX57DEF4JNqcVA2AkbGzif",
  "key12": "2eyxaTKpD4EvJ4Ggtd8jDZTMvvCFdx4Ymwhggwu9Ek9sx6K4TCmzL5B8F3beN3YWb5FaUJPFUPMwu1o5GQPmhBMT",
  "key13": "2QHbS2Uz81v6jeZiJMAqznEBmTn6XHbfA4dr9jFmDj7tnYaBmnpmdYkgiHyprJ5WA24rjkD2iHs1SSVPP2xK93CQ",
  "key14": "2HMtyVHSBXXgbqqrfWjLG7oBP4zxDZrzRJWoYWCFqewbT77sCah57queuDm1YMbQ5X4U7RFvqASPFND7T2Ur7DFF",
  "key15": "3NffArHo7VDLSqZqRZuFw1JRxvjR9aFay4XQUjKrt691MxR8KSDJmT3ooX6JfozCN7qKSY8ASCYLPXSE5dmTTirD",
  "key16": "2G9sudsrLR2FyzAoyxGk4EJ8nqj8F31SQaG9J1qEhWYFQWb1kCE9uQiRntqXchWTGPC2MJvLrEYh8PVpzkd44KwA",
  "key17": "38Gr4Q39E3cJYojP1AE95f8qFmRRwqVHoTyRGC7uLoNNXR16ULCBQ8MaFY9fZcRt46W8eXnMRGHWSaNM4eFzdF4Q",
  "key18": "FxY9MSHb1LZxRSqc3F9NESDrpfNCg8mvHeD1V6y6Nk1jcbejzPQiKF6A7g8EWUPqYStD5cuXghFookAmVy5PWKf",
  "key19": "CTx9vcnJySZife9jW95hqu6FAxPQznSkDP79d1gXzdhHrJCk4xxia2caeYU9wUUHLidGe1jr2Pv6LTgddp8ko2k",
  "key20": "5DTUtZktYGxeuAAbYMnW3K6zsCXByCBrCQDxLSuVzqkvxRjm5PxxZUKUd68bKRmFiM7ufunWAfn9UFEsvez8qpiA",
  "key21": "3Whrv7ZbXR2GzQ56DEgsGsHAecv62u9ep9t44Q3ZfJnZtjZ4swuMDFYzskafzm9QAM3TbNQnvkHs87hr8e7W7FAv",
  "key22": "3YUKLncNdsMzAEZGpjeu9PDaWv12eN3ENQAX7De5AM5VukZYDfyhEHsdiSvF5dfwEm4Z9w8fQe5WRSNZ1WhgtxQr",
  "key23": "2Wjmt4BHBx31y1QebPgn3wWrhasJhk6iR149DdUrqgAwGL1TWitMmLU2894YiQWo8aWouRBX6J5iX9G3pNptrYTF",
  "key24": "2H18GeuaQLjh7SJsEfRuCKHmGnQSEGEvjsvYHT3gn1W1LfwwKjHkt3PKEDgXkT4y1uf7upZaVH8cPQyJTW5b1HWb",
  "key25": "4zR3qgbuxSnPPt2VcZX7Dgz6FPdBVhZRAZiwLGEtbyePge9NbZ1Fft6tLpymWZU11dAT3k47H66WcsgRj6tDpCYo",
  "key26": "r6qtwqf4BVpnGQhAfz3tkE2Kqij1VuiysieS7sJGVHxZ6wMujEvEZ4GatCAb92jWayFR25eqTUzneBM5Ut2BwPx",
  "key27": "4Khz7RZkBgG2GW8QsBkfzp8HPWhxWPNgbUgj14TNkRNDnKG3zYBt1SsUT9qNXWMK5Co2Kt9rCYvJAmnAMMkfrQk6",
  "key28": "3opg8H77AeJop8QFNZX9VaiC4HiAXq93KTvtk8pFJ45g7QiVgRHzu49T8H4M4zpk24Wrrs38hrqDteX3Tk5q5TwA",
  "key29": "DzrFdy9tQWPnvTCVDf8RQLfgrbhjkLbLeKZTzauEdYo4ouuje7vb7TQXkcuwu1TC74e7iTGf25VpVfYTgYVxL1i",
  "key30": "4oUakermPRSnRaUgtFBHV465KFbpiDxG3zb6gr4BTeHqhL3DgmQTmhiQMirGyg5ALXHCuHQD4WHW1Z7VAgteP1M4"
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
