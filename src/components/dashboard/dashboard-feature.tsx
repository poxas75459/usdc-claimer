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
    "3MsZvpsnvUpayBafAcAzwWPeXfLDqwb4opm8TLZs34Y4pYqZ4k2DyuhX65HQDYie2FXL5oRiioYCyqCwrfHDKLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53b7VdtxKsGr2XCrJuC1Pes1w2H3oE2b3CpBpCJEQDnUSJSJ7TrGNNcHGwukiKZghGL7iFo1hjyftxYwFax1asfC",
  "key1": "2PvUzfWEdmVexyn8gUCQmydqi8tmfKFcnX6aTzbVfFcKdh3CPt6McuLirU4XCDPC7q2pWaQaBJt2BQVJX89qyMHS",
  "key2": "47NsjoEQH4SeCLjxUQ3Ka1ULsyRHiUi2V2mgPnvDcmfstZyKGVGuodCKwaRyqZDsXh9DPK2XgVwj2vrQv8QMvRC4",
  "key3": "4qp4hj797y9tgjaf9NjA4dqDvDYgf7j5NLZWYv3ekHEqifFwDh3fQccFmH2N7VsMYc1t9zHkX3vwJ8oMmEyLZyxH",
  "key4": "2hZ9R8SDZvR81uD5qHBdGD2dMwwLgoQrvkffRaHPeedisJAGqDehn612hqBPPGubc2wzsLJtZPkobtDaYrQf2DXC",
  "key5": "5DcWovb1kLgB9g8DRAkMSNaGer7gnPdHAUHcLvPSt4VNsz15VQ6pfceW1ogEZERwtSJ5x7NM9XanL6s7M9ZpVEf4",
  "key6": "3kpTq9SiXvru98uPQAXpHTq6SAywsoQD3TjQUGreZXisWG27EMRXgk3H8WgeASzZ47S5GCURz131t3wjmtvhshbC",
  "key7": "2LmiX5P4wkTDjb9dCoeW6dbdQri1FFfbrjpXs73QkX6JPKxvXHdWGUoawfobMjKBBLMFBAAnCEWfcCV8j7qRUfCR",
  "key8": "3JrzsbNiTXRArXAgaCgt3hLTzoucTMQGY6vWDNERp4F7kjcREkLgP5LgQ5xYQCzmrWEVBXpc8NcF137oAhgm3JkJ",
  "key9": "4zEj6NtX4xNVHvZE3zDecsQWja4vrvUDK5V2vhTeRULxGENMKp6ruyRBx3giaG8cJaCsUpjnNXy1HYCQWzx2J4Vv",
  "key10": "5nCMCbuQEchztTW5Jwp9x8mQRgt31vWYXtn2BEtHARwm5zAfkPeb4spQvkL2vu43C4CLckgVHp9njsmvVKKJwGKA",
  "key11": "3M4jf2bJstXrCy9bZtmsNfo5wHfLjJFAGQnQbhmnBRAcdh45MBLRAQ7e1dDja4r8VM41JB6YSpPfTg6S8U4eXDvf",
  "key12": "RyRwVPAh5K82UtaW1yr1H23vrju9SLXgzz2v51TNz345okxA9nsJ8Tr548SwUismAPCfAYxowu955LZGSs16HDt",
  "key13": "5xkV1Yrgce4M7HbWuHSqjctkfRkDzC5NnQQW7EXP9AW5Yc8uqAVNssQ266Br2hum2FD6wbpYBsPYc6vmjLPQiEfi",
  "key14": "3a6euZmxhZvJYvdfJxXC8RYqfaTSHaLBtvTSRExVQJEmrLEW5gDHuzBZieQTwDYpF8QU1sQDHsbg8Kh4Tnm1V1mq",
  "key15": "4R4EeqgJsj9ujaLwbNoRtcdWmJbGNnoPYU48iEfC7VtsLz9S5GArsoEeCJEzZWqB2aqB6LQMfGy7W3FtZ3tLSFHK",
  "key16": "Df6LtrdHzRkTQDYJQMPpHcQBUMk2hjWCDTApFUazZz4XdtyUvxeT1tKTB8Koym4T7dzQg9k9ngNkDnWni8mN9sd",
  "key17": "4zDJDbh6nZ5DbfDGrU3y9NKjunNTeJQCXcao9tkzg3uEMCJ1U2JLBUMnvyksKx9R1XVXZRN9QRzFUMgpdGMNze2B",
  "key18": "57iZSMs2MwTKtrjEBaF59Ugnpr74KethKf3AKix1GoomvtiMJjG8wMx2Ur81Jda7kPRjf7LyDLbDSpMowXs9jm6N",
  "key19": "4Z6RfZBnTE5RcWRbeYfcghwP5q7Fnn83R8tUn7oM2iyTjxrFhYCt6uDULqhEKpUpPZNvYPRH2HPeMUHu9uaC8odf",
  "key20": "Y9bmSZEzgUURYJhitm5GYBgoT7G4nCC6pJRXQ5JLiMe7FeR6oe8KEb3T3JH8XcXVHN8cPtU61wWrU2A6Lfth9oC",
  "key21": "5BZxCnV9x4fK4YUutqbejpjF1dutBPMXS8FJ59bbqWvSNc2nGjLWWfWj7GGyQqkCcftD7dporC4rADQMLTVCDaES",
  "key22": "4z4ZHDXG7FWLtFyqjDcc3pHybRYWdYEFY7xVDnT5SFwGBRmJ7gGYoQcdBtPDBjePM3uLhGtgv4rmMM69ktXPqpUw",
  "key23": "5dKvrC3NdvkjzMURTusuQV81wmyqS55Nvyr3YPAgRbU9UE9XBRSjh7poXr6jvCfymWzdCfvsGeueVmnysNVuezci",
  "key24": "5CPvNBp7rk7uTxnoiv1eHrtgWgPQ45Htx9Dedh4mmAGLpfeDtXCQXV2fKRkvcjWyUsLKyuh1Mv8CbDM3FMUV2AkW",
  "key25": "5fH5DfoKCcJqxip7KdSXWpJe6uWeQyNjrr1YDz3c33evk8qXtSxDT8kSr8T8gfp5va2TFMEsPgrmpWQC23p4rJev",
  "key26": "349e1i1go987h1ou4kMx8xxyiWhQyrfKQYBGFxzSb4eJVE4ECtiCwCrkR167rGCtBfYmtQMrPZkRcr7cuiXw2WVD"
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
