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
    "227M5bAQgxPWgvpEuJk5KF8Fwh4HMn2drwUhdfvbBuKYqq6sZYHv3x9zrZBo4UDRn9XqxmmiDVgusB2tScWp9NYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YLqibZJygVhNFWH93jTyHtn2PV2sSPArMZdF67pjr6zBMNZxpqtQgCYDQvQqbzY5XUREqTYfj6rrwpiupf7AsKd",
  "key1": "qFnjGeNaeDERUzmTVEJV19p9CnXh6rdznDabt3Dc46uRNiDNVYJ7yq9dnRG3wRrUHSrpyYRGLPbkHfB1vg88yra",
  "key2": "8MvYabF6RnCxkLzpMZywRjjeVtDzPjJYEVWtRkWM4gdgoByHuYpswhKJXjFk9b9bXiqsB7NLnSaT2Sz9sktMLxs",
  "key3": "sFCppqmJXgxf6gxj58XV4vZ5XUjjTaQkszBe2NseJLm8bqjFTEgPkLz82xP5NYADUJemFTrwcDSogmK6tEFieip",
  "key4": "3ufLwJYFoGG5kQmqKSonzcCYLLD183w1XKU9vpKWzXv2pPQ28YMCuS74K1eH79Jg8ReEtqaQNVnyoBRrS9CoEC7B",
  "key5": "2fFu8NmF5bjjaSw1KDSJdyscAdib2Na3BLep2fWFzTUSM4h7H9kb16ZGhHCoAafnc6qGX3ZWms4yJDH7khJG4hKr",
  "key6": "5vu6vCsEARmrR5Qn82CjcTo2hfeBFquQ9Bh9b3Kv6q2PVVXTnkAh3bFtJBL1EbCTjZJdg6SA4u4i6ZLC6vNBPqLy",
  "key7": "3vKfpEFZayoRY47z2r7fQw4zh2KK3sqgLFeBpDoPeMaeKYKrZ3aHu9SxQcSMv2srBNHqA6peDikiqVeZVym94QZV",
  "key8": "2mxnQrduguTTSTdsnphCW43QZFdYgJDBj5sg3jofcbuP2KL4CPCxB5JueEHUgK3FaaGPmyUw7rQPEmgv87wMiG1J",
  "key9": "2XHMqxre1MUsv4qKFsQfzjK7CdvP4k5S9KP95STMyuVTb3YfTNeExps6RizXLWrhyp37K7YCmJk1QLjSdavneSeT",
  "key10": "2CvfmK4MAyAxiLEXPvpXexJAakpdfqic1VBXpsrYQKtd4HkedvEcEad6HTP9sj3mbNQiCpMTody5YoJcBniQ4MBF",
  "key11": "3nXex5hb8Ls6i4X7o5WmD5BtvUgJmbc8JMVC4vSHpbjSY8xD5KkaZwyeQ8CquY1NhkXfW82oTR31rqJHwRoUCb4b",
  "key12": "CkC7GiXYVGSZah1KjSbrvQqFikjtmrj3pwg71DtjUEjc7YvcL18ENnv9pfyCK5K3EnVnd6kGwdjQafLpJSE8s9h",
  "key13": "5nqDfPYjtv9YouQ1zyemgZb4i7FN4joWwsstYZtVtWLnUkK1phd2mfU9AfYPJqYiyVjSJk6yus3oSNRHxKKyZBTR",
  "key14": "WE3GSBo5HExxWoeDjL3Ef5y5qMcqJ5NUf96jJmQssafqYbDmDRfWTcsQFoF3RNS9YdwVPPpiKdhtWkrCzGEWDwc",
  "key15": "3xnc7skAJiRw61f4WC5jh2ESDwKF87P858gS7nTeadySnRQZ3q3rtPPk6xnxFsEYdv9ZgVCfCSqt9vJaZpQoCcvv",
  "key16": "3wTwEBd7MRAv8xtJwviWq8Wmc4ppXnqstkncyLfiQ6fT14LHsLm3W6xJkGGWCPrJGwevaXck59xm6KnQC75Rjtxc",
  "key17": "3n9xnNqkbtn41zaNYeFPcjZuzJjq7jY1BSy85mP9b7SKvfX4HLQFPQDSWLZDv87esBVgaFLWxY6ZDJssmCyuJ2Pq",
  "key18": "45FxSKXRQqzzuKeRd4V55fNrcA8wKtG64yZNW7x2TdNaoRTgDM4vXpMSTjKiD2yGhyMjixzmnqGsJi5wy19c7dYj",
  "key19": "3ipxLEQdFMT58mUFYGsszCsgDZNSmqMpquzNX6J97zwXWN1cf1QBGZ3acoLeQAvS4TE2dwdH7UhduZgGZdv9zkrX",
  "key20": "4bKxFcM7ayNQGphXd5oxtqiEQZzFR3UzhhYGvahBBKWjYZh2yy6pJLxo2woMtrUCBYigk728mGkJyb5WfX1z3qov",
  "key21": "29kAxNg3ubY5v82PdwBkwKgDGqWPJE3yLzGbb9p3mDXKRohwJ3LhRQoFeW2cn47tVuwgpRDUABAdUig4W5XJwccd",
  "key22": "4Mn13Dowd3S1esXAwmfUs4D7tmrwdxATc7hda721WGEhwmh8BwadDD18GxnANa7rpp79WPPjqFp7bmf6dxysUtLr",
  "key23": "3QfBdmjwCJZWhab6JWxqTVRKWBmLGA85uWz3oyFSL8FD1KFdGBScj8rURjEqtpr4tDNgZ5CA5ykkVNANEgKpv7sJ",
  "key24": "2gz9XA1tLV3wnNJ3eJbQTKQNnxxPPetX3jaHYaoDWBZVo1Po8s23wnZvHZnAFpVaou5CejNXHKjZCMktCXZCKGpk",
  "key25": "22NmVAo7rHsZduGfNjUGyNLNPEPEg8EJCoXrFdzL9QrMhrGr7QS67ormk4D6qV6BdRgCfJmAeUBsT1pXMgD61ZM1",
  "key26": "2Et1zhBMnsYDmJv2J6xxbph9Lksm1DNDimNxyN8VgTt41AP7NYbtD7U4zsyq7rgvqhDBWkT8UGQw5jVTtmmxtBpd",
  "key27": "71p8iCN7pqSoiWmCvQnkEfVCTUCM3JqapeJ3ztp2HCxMnHKsDnCEzpaGDe1JvPrUoGjNpyuP6pRqQ5J7wRSdqkA",
  "key28": "2fvtXdVykHbKrJ53kThPFASxTiPJEqJTo75g3oKCzwDte54rwbxER8nQCxMgwwzbtJvJhX6QKssMPHHGmkPkUGNQ",
  "key29": "5sD4rvfMU29FooafNNtjKPmoeQPiUV3kdiYFW3bZ8MGLC9J1sEpoNi5pAZu3u5dxV5XEE9oXSo3PY59C2zVSexF7",
  "key30": "3d1gHpS6ss2b41KwryKn1iVqBtG6yw16BwHfG6jRYwzmAQ6qwvDThRDwVSeQJreFaJ1t243u4eBsFoamrcSAiWro",
  "key31": "2QW4ex8bL4Er7iznCRw6EdV4nzagKEa93Pw7MP8e8DKs7krX2d3xMLVeVN8TDimncPuQ8Fjah7xVYUVqrPk7yxG1",
  "key32": "4fJMyM7LXMGDwUPUG9ywq9vDCA7xhq712wd9KDbrMvx1h7ajDpQHCMdi7rwdrAHzLh5NQUR6qZ6Rrxqc3tVrrhAw",
  "key33": "3KLN8Z1hNcKU14SuawH1T9WCCu629RR9gSksQpZoY7AbHaZHbnacw4J8cQUGXsgBvtaMx5LK3Y29x683fGUYewVY",
  "key34": "2V1SEWdo6zdxKZ8pnotWErdJwbJrMRbNuahEqGvrig2jhHdpVLtVpgBW4izxCteojyxg3p3CQaFRyQ9Ho9zMNg5L",
  "key35": "3cp8TNyCZe8VfBUQbfXzoTE2ZfmMa4C5CacCv8QJid4X721rAgZpBXXHDtnCpdcjNTJDB3GPtpPJT9dfD6NhEf3q",
  "key36": "5r5SwE2pFS7mEkaRxUVHpZ8xVhhqbfc3ppi9CvpfHhApmpM9msGiqxMJ3TqVZEozmYEBvycJJmJfvyZZirXctJu8",
  "key37": "4ttAZHqHNw656CdWSJnMGA2r9mga9dhQv2bqf3fNsg4gdHPiZufSoLCbc8HnXbW2tu6MxRh57VH8V7Y5LGb5ri9R",
  "key38": "563fKdeZMx4thoiFMf3PRKpGnE4QnrKVcnPqEFJBTu3z2caaU4ZsaLn6nu6AX4RZ5HwaqRHKU9GZBzeoF8BWfTLr",
  "key39": "3c35ovnpHCm9YSF3w6Q3HXqwo84PcEHx9rstP4H32W1fjPzG9mziDNCGzZmEKwxpYTBuJNstRzsM7ZTF6XrZr9Zd",
  "key40": "399s854P3NDV7SkZe6AgtRE94HByjAau4gtjdrRPCJNiMNqppBSR9ZfpcjNPmbWKBhT18EJHU4cQ3zjKDmzCTZJ7"
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
