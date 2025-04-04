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
    "5roW53svTbvX9Dug5wpFHyeDLdR8SvtbhjJiVQZ3nD9v9trU5Hgddkdb8jzr4Whwu1dd8A15GkfPQ3XtaZjDY1qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v1a1gNJfiQnsTLJvUvq8E7LKp8jXbDvnu7s5H2dJUCBsEiZ2WrnnrhLdpqmQ8TtoRcfCVUFXerULnv55cmPy1Jp",
  "key1": "5hp9i26bXic7xqtkgfqRYXtM1HvZ3ticytEimnm3nQXjrqhmcTaVkPJY2xz4L1XM4R1uoSj91MCuUYwkoxyhM9zV",
  "key2": "5Pa18SAXR1R3hJviangSrTns2JTntDWYQzzaAjVtL4ovUVcATPuZ2Tbka3qYJMp6xGS4EbKKLmXDmQrzDX8hCKZx",
  "key3": "47i33Mh3BqEgzHyj1tEfHHyZu74HGjXRSxnQdjoRZWJXji2AbdJrSFj9kA3Xgcszz2R28yodTgsEKko7a51yDJf2",
  "key4": "5AsP627TfhBjpRU3WefkffMLbwPqmvvH5DAmGG8Mnur8MQeGwwW7ef2kgrgdJSasL6yJmzahjZ2Kp2uTerFwuPYa",
  "key5": "654P6RDPyxtvMp8yXRtGM9sL1NLaciyopa5cGq1w3JTQVxD9t6bRh1TgeVpy4kpbknRVo2RajzyXZhALN8PN4VAD",
  "key6": "3Enfzi6PoDEV9hPgFZqJvGj8qbiZqVsdugho9sbMZ9iUpKiLxWhKDCr49WLAigf2mLcBDxGCWpSMsRqkvuzEjPy3",
  "key7": "42h2zFAEBXQBGTwFAAMUBaCTkvzrA8NFVxTUXWmcngrKWN3QWaCDXCFus3tc8RC4jTY515xo4YF3M1vJA8KGWjew",
  "key8": "3y7w7FmJbehCxYCEpv7DbXnVWS9iX4ULpDXXMXmmNL2pxak2HMjs7taPM6ckzRFUjF6rAtvnK49VMt3kcHbzxhVn",
  "key9": "xXKLPR2LfHEornyFaLj2TXWXPosKPN7nHazzaFfhdvHCfjxLiPXyJ6qwWoJD9M6rdSeYcaBPEviVS57WwE6Zn99",
  "key10": "Z1kzgjQCydn8cCrBnxRmqyiYBuJ8oq8WmvXHjorR5s4RHcakxGCcBSwTEiBKDnPGVZVHhyjYXjiL2zznedd7jWt",
  "key11": "yPitE6mypoWhTh7DJoTAuLscgRd2busc87UQijo46B14Sm7gqTrLbsnJKBHfAYRCparCgfubzttXk68k3xt5p8F",
  "key12": "5jz256QtmG6tUGdHVHQPu2JWUt19zyG9jDMh9BEdUKrmt8dvQuySEpv8LRZECvDFaUq7QFomisWd1asZQZVsH5SF",
  "key13": "35sKpsVb8oLTgiA8rht6x3wmLfDap28jML4J7SvoT41wuZKRmWWrevZaiRrvB2RgPyTP2UGSyc8Z1zUTedjiHtfU",
  "key14": "53Qo7iLkPEn7zpySA9sgMbendcXEQkXbFL2Db5zRnarRxpoDHDEzzeWDDG7aGJzGqM32kRLr4DR54KtR5koLNAEy",
  "key15": "2TVpjTbixf1CnUrK7CPnbc4a95TfXMZZhuLZFWZTFnr5CP7gXLZUBnzk8dMHQHgrTKqVs5k64pxvnNYDDzzp7ehF",
  "key16": "33uscnncXDQhVHrnP5LamajQM319eAgbimqNtAj56Svi2jvXhLuwYJdc3unhGvk9rE2wH57zmRowqrK9Dz3XE1t1",
  "key17": "3EyAC33cSvaJ5TGEeykELhH3oHYbqmg3EW5FY1JhV3PiogSbeDXggSXMtgWHLQH6ZBtYy5NkPq3ishye1kDoQaTB",
  "key18": "eQo2ZTtBU8gyyJ13JCQDWdeZz9i3kR7Qe3zSfgMcYHkV5T2mGWR4XAkMtAvom2gFSFwUHPXsHTTdcrXyozAgQpY",
  "key19": "5GLZia1fhR4vNpaoaoZ1KVRF8Y1UT8yAhA8J5164GkUYkBiHtktwWbmGrkbXSmRs9Wy9tpD9VXRQR8xv3xaxwuqk",
  "key20": "2Eduvh6pEwwbm1yfcqwrEdEeayDmcAGG2AjwTZFp9jwsSZ35F8ymZxLzgNfn76UkSYzxwfmce586YBc5HypouKZQ",
  "key21": "654c21Y7wk3mV3xBCAEW8BqBdrtDwb6iDdG8jpboRZL548qgH7RaATkujoUiq4CxpfSyuHcHhnqBB4QU8XY5cYah",
  "key22": "66VpTbRThB3Qs15cM55tq38MJa3YD9ydbsVeo762XZFmB39MVANKvrtGq7LtEsVRZyxfSS8S5jDh1baYkF4okBq",
  "key23": "TxUYu2Fu3UAS6ksbAFRWNKUAchDXThcR3qgtkPULZxpFP57vFnYDUDLnxspy8SBb4QfgSozg5k4FTBsjxeMh1ee",
  "key24": "4hSYjUXeKPftVqqXVZPV87a9vvrEBsgseRQ2rb72evqvTWP7nnvX759Nd5KXDSmsRpmwVa6vDDN4YKfo5MfqnUzo",
  "key25": "585VWK4Dx7NRPB5wgs5vt7CxqE2J9Jhsu4cwgZV1eWPHRZc5ZsWwVvUj5bo9QbJAFtqmx2EdW1W8gi6prMLSLvzc",
  "key26": "R4f5Kuf9Sy465k7d6Us3bKGLpvuMcpFoiysTW4249rk8HrUUX1eRZFw52E7qGxrPnkTZ2YBYqeqEmGsV4CsLegc",
  "key27": "388x64UdoTNQYuDKshAy7F2cGQWEKFuoe6bSHJkGsdFmLezXneEd6CgrcXTdb7Knnpdpq2tPeSZJXfX1EExEhDuG",
  "key28": "4tV563VGTqaqkVkUbk68Xbk7jD41v6j3zCjLypubqbzKReZb9XtnKWz8dTGHrvSLTmcy5fL27teMwpEbm3rmtSox",
  "key29": "124GkzqDg9a2CEWRa2x8jUgqCVsXdYMQQkobFYgT5PZBeEbPtuA8RLCXJwC4HmRM9Sie2YymVDpQDyt8EQJKgZRq",
  "key30": "3dXqLMj5pT5dwZe4DbpYVpNyY96m4rnSijA8KB4LniE4WrkQjKuvwKSMLeuvRSt6mQNN33PfML7XaopKPh4dv9Wo",
  "key31": "4AciSaBEXMbwUtmQgQvogYVLEqvxGHZLsSSEi46W7q95SAxD9usWgbJwKia75qDekM6YS9XmncdkgULQjDmq87GR",
  "key32": "48bysK2sanKMjLCmM5mLD8Cf1f4fD65n29fka3NfhcpHZGEL1xL2SHAxunmZRUA3MPe4ggX8BGNF8koU4H3oSL9R",
  "key33": "61i5xvN3bjJBmzfw5YmACKraPihLrnspYofzvu5Hqp6qz6e3BdWW8G75qW8NvvK7BqNS2tZ1awQQSXnSWnvGN2Dr",
  "key34": "5wtcY7s4cCZHaXbwd8E6n8GoJ6gvDJn3acppDD7Up14PcJd3Xopd9z6qqcRJSEWCxjcCJ4RmSQeBeufBB4kDz9Z1"
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
