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
    "2x2LQC5j9UecXzDiuZhoTi3Y19a6rj2EDNeKeJzRbbWVeFDSus7wCmkZpCiGeCHtW7wLwE1GscWjaNs7fkNcRXUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsUJVFGksuXuVP5v1pCK4s5DXLwpDXqS3rA9kKgzePcxQPEi8WT1eAtQXFL4JHL7dUSPe2hRE1bVWzjD2Lf76wJ",
  "key1": "5bbDfmsAESfGQs4qZwuhMG5XqqMA2sTo1TFCntpRL8zabu1dFww1rf3t1jh3WcrDVoGYpb3P9WaTDuB4eRcvTeCz",
  "key2": "u4e8EnRykLA2sG2E9QGhJ4cKRcBpkqHWBzpVbM6ex1QASqeywJBLqnN8Gynhv2n9bPj3GKxRpQp6UQnjsEarRiK",
  "key3": "43u3zc4CYB8uCrpBjP5A4ebo9TEG5KwhAzRXJtGvSJDrgjazfcTwZKeNAdXRXbqFrSGr3dHRdwzyG7dnVw618W3W",
  "key4": "29XSchQyEkLkBuT671G5iKndrJpzY2ktRJUKPYjfvYPP4fXjUZVMw8B6dZsVK1kuhzVcEVmM7eD6Pkrh9H8sns6n",
  "key5": "56dBe9qV4nx5L5QT1Y3Xsm1J94FiEM8V4kXD6NrSxdfxgkDZ1mJdasMUAVyT9cmEfiRjH3jaqGxVaJ1gRM3JEdKJ",
  "key6": "5ubh2CV9EsoUM4MbCBtYyLzJazEzvP8GqvHJqpiuiiYyvRToHd2dSa5EJeUGvzeY9wjeTqxkjKGvEbNFPecXA5Ca",
  "key7": "2LN6arV7wGRwFKfkvJT8qpg2qsDPK3KtJRaDAmBcu6hqsREFPM3PXXzGYCrKEh3tTubB9ZArLRumLgDFoBmZscMS",
  "key8": "5c8HZXG8QNU1gEJ1QeSEEkUGdRnMbu39brxuJcGLKF1tRShrGfwMw3zPDtN8hVjoB8fi57dgB1jucLC8QSGRUxuH",
  "key9": "5kkcQjNdFuauq438vny2gyBKXHFA4hdwubxAt2BGwJbtMoXAxbjzpcXUfVYaBN4ZARbwu1aDd6QvAYnB2F8B4tAX",
  "key10": "2y9pG35b6Aj3Xdq96carndMiMaGS9R1cx4vqHjh9PRgjnykxTD2X5fCrQ5f29yGiy9dzsiGUufatLAq1iWiKzRdf",
  "key11": "5iJWD5kSktsDbo4vo8S87wS7ZUuKn8Mtj2HSyiNvthUjwKaF7jA76UzKritzErWsTP5RrhE6Yz7YARYB59bTipem",
  "key12": "3TAk2giYiZTwxgWqwr6gaicJV6TpQbCiNZwLtZKB4ykX4utzC21kE5qN5ze59WgCHWqqeJEHorVE9EWqTXgVHG8z",
  "key13": "51TQYUk3nVUDGgMHrEYqvSN3BDQNZog5r1Nu47yXJm3PVJeh6EsouAjCGSBJrdnhqSaBZYWMUydPGJ5VJDvDoQ8J",
  "key14": "nU6e1JRRDtXuxrbz4dxXazeZZBdKbzfj9vQGpA3JqadjZw9NjCyu78n4TR7ycyWCvRrbs6huDsjjvi3PsRkRzQE",
  "key15": "5pNaNeoeTe9cpiyLV7LQA62pt4csKCaTkCAzyNEcAfPfFmpiXtmyKQuCfXy3idDS6oAG3Db2oxrsnZiVx9nppxQ3",
  "key16": "DNDT1PTpkDq6mou35AwqTKy4SbFny9vdQaeNNNFFUESSNiBkS99MNCfg3pX5ckP2diwYB2QmfBit4vW8pstHoeH",
  "key17": "5CiY2boFQETmCWvdTSWZkBxvvCGPV4QjiYt7BHMoMFnV3WkQqghAMLKdh5YwwQFdTSMCPsocGMLt4fCpTq3CF6ee",
  "key18": "3hdLNhngLj7zk7xaMPwGwcYHXQGMcj2Y6h2WRusJUh8dzToYzS1t2CWxKCVethQKtqxFt3bKNEa5QsWcTdE1A7qP",
  "key19": "EPjMs5XrHAQDtXRcMRWW74WLgjhrwvGkHhX27z5w37HcUaKxMGtJcQqZLWJJtPvYadX26JhLuPGHmRzyiHS3CAn",
  "key20": "3FdsWzfcRqqzA1hXYxfbBcWNaPc5ynNdLpoQVwgpopPS9RiEFwyzmGi7io9mFB3RKHXcyPAP6btAnae9zHK9R5Y6",
  "key21": "3mq6yLLVam1u8KcoUwRjGrVSkwas1nm9mHtiHMagArn98mpmX6vbqMwEdAS8Fbtq94i8hBZ89sQzGHdWYurSMsZ7",
  "key22": "33hjuGTeiAH6hjNCvj62GvD78ZQLoqX4f3i8ifzNZPFTQDXsRkpj1XEr7Zw9y1ZLHtJEZWAnqF83pVz8eH6SUkWa",
  "key23": "KTHa2tx7q47S9REQYoA44vLJ6jxznZhQGVPprhKnuoJYD66JfdD5ENNsd7XLfumTtP3PouWhGB4jjgr4W3d27Jv",
  "key24": "2Kw4oTgdceQgc4sKDqhto4hkrjYPegWoPPXU6zHAxZGToBoV9t7dbffZoF9AFoAeiQm5Fs1qVnnNuTaG46k1EuLB",
  "key25": "2uQ6ZJEaLxJ9qUS4EMd7oNGQUkYCcqQkUcDhR1qvAPT2a9WSPn6QuNoAB234EsRkHg15xQiUVz7tySijTg6oV4hY",
  "key26": "4MoqcqJrcNRwxGC1aw4PFU9FoGuLBHmoTjE3prhmbsfhdK7HqoQ8UDTZRMHY5FQDwyUSGnhJdXtYJLN7MJ5pUAVg",
  "key27": "2o1mRBmrxAwA8wUDvaKkSha1WcwZroQCSeYd4Vs8bSNiiwUWRDpGdPXQDc5z2muJ7CWabD5fwQWvZUCH6UB5FpBH",
  "key28": "48qw4F1xZaEzXwuqnZ7M1HhsNg4Hk78PcCvHkNicw7RyxH9HKVLCofeUJXPEdoNGBoQa3DtfNhXBMw1wKDBihxCR",
  "key29": "4dT2oGHX1oCDud7rJjjdJNkCWBGdMYj87swcWDbZYG4EPGQM1Zgvn9fxTxTpPjxTcBu1LipGuNxqZ7K18dG7QeHf",
  "key30": "gaQo7s4C5izDWfK1HpEhNXP8jFtDdjtNaGjakk7tyKfVoEcZzZcb9UTaYCtjozY6VhorUV1fDPMemFZDNA5xS7B",
  "key31": "u7pEhFTx4Rb4tKib7XGTeELnGcZxVbgTMpFyTzVZdt2cdNELEQaoJDjKi58xomXNvyBe6uSZsVJgTiqrvL2kRNf",
  "key32": "4pwrvTgST8DC422HwpWcdduzo3g2DEtPDKf5r3wx2dwjx3etjgHF2ezhAovWcq5iRHinsoUUBLzxotyzZeWz1vAh",
  "key33": "5cF2EA6bKGdG2fXwnCqCtZoi3mtRCP3VyizQrMcpSHP2ozpDM9ZjegA1fstDLucNqPG8LZBzGHDkXX8KKddPom3H",
  "key34": "2K5TNiV7jov5C1hE7nGzhbup5UiiF2fmdqT5Qcoc4XwXyx4xZmTqdSzzQU7sycU6vwUotr6r2kddtM95K7keriYa",
  "key35": "3UXsFT2MKXvxR2sUwvhCXsJwGFQPAFBv5PSTGRKnyH5phqHC3wZAU5a2qpUJ6dw6xatEyK2EpSKxVX17iacfjSgd",
  "key36": "3TMi44VjF4u5wDzAfGfZJpAc19WjjTeh6NGxSRxvZPDFA6KNDYGXnpVke3jphA67n5MMJpHFhRmcXwP2CVUedwq",
  "key37": "4ZJ78KCwrmzJwkw4xLSkXduQkQrE7pGeWhvozCJ9bKDnJZELYLsM2kRdtTheG7gtyz9qdoptru93WaWe5EDdTUdu",
  "key38": "3d1987ADV7N2H8Q7Z3bWp5HqKrxPMqzskhYStUHnZ1bo5HK4yep9fsSySerCbZUzs8C1YNUxK8zxLQdXqGT4td6Q",
  "key39": "3PHZsKXowVoYVDTKG5LgFpwpmPDHsnMszsRt5V643CCetNqVRUbCabLAELtgnpPYPp4YZkMMynwi4C3k6X8Ek6Qa",
  "key40": "37hCsVvx8Wp4NyDSiBvuFto3k6LDTiRAJ4oBPVVqGrEmkqM9yA44BpSuHfvXLoPPGkH3ZqgEbZU5ZwR7djMbyV4G",
  "key41": "n8W9zjgXSj1FES9xicKHbAbvEaAgHFsqo8PBvKvqp4ZNezzVvCfADt6juBbFg23XhD1sswehgJD8RAraHmN6sgL",
  "key42": "25TwQSoyFv6by2NsZktY27iBZEp22WtDU6XmGabfnrbHbNeCsmzdL3WUAyWjw2gy5pyDmdwxp41MvHrnYRh3GqwZ",
  "key43": "2vJf9KS7YfCNXdgrYyd4BHqVDRD6atxu8nq2z9wuMrV3GWnqrbhQH3xkKRQH2ncA1Mp52DcZcAh1mY3wEMx6Cy1b",
  "key44": "2NP8Sn8grQmKFuwUtTT9V3pq8x8yMpneKCZRkgUfa6jZ3cS9j32upbAF4vYeeh2w972fXyBLrt766H7XBNANNeSX",
  "key45": "23zU8kTWUb8Qy8wpb8FzaRMwCWJjTJ3vgdSotXmsVDU96tXZuuaZ8gf8gfoTa6xARxFhDvwjw4BUFHG2cfddgMYv",
  "key46": "5pqEnuwntw7PDPrDaebbn7K7ieJXkaZm8kJonjHZsF4omAkfv554NVXRpXhRqNu9kee3MuWiSgFtaGETRueRcBEp"
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
