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
    "pA9N1HGBWapi2xFaH1xh3m8cKqGrTUfKctzcz8Msu4vpXuZdf6EfWBxci3b7bdmGkVTEYpqMo1eo2JGGveLGNXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PD8QZFsY87CWGsV9Fwu7jN6q9t3gNWF1PVD8QPQVoMyg1btRy183Y5AEFMSEYzspViUitCat92ZgotPgjveK3K",
  "key1": "2tfpMivRw4h5mt9Bf22eSyTZFzeWEdPRmEQ3dDdBqEL23gCcaQiNeyFx4sChr4qkjWMatJVwFQY6rH8fytPYmNrB",
  "key2": "2weoEGSQ2Z94XHDo6MxaKMfCz2wkqSJRjbRJJ4wsdKBoH9M2AxHMGH6uSYpm5vYGAgkaadoWkq2DR2Rj6f7v4xzq",
  "key3": "4DNoUGEL5oKnf6mjhaD8tiYPcUC9uwHZdeN7D1woUHEhoaLAds1ywHJFLvuwd9pZiZqti7XAAfsJGjp75uxh5zhj",
  "key4": "4R1HnbRTWyyxS6YQvSa57WXT6KvJ9wTYn1QwZBr7EqdrVzKVkeP6nC9Yy19VpSgMW7fUYZXgV19XwqtUPUd7UxzW",
  "key5": "3Mfktgyfp8T9TgY66DkZmPZoZw9Af3sWGYT2xjhpUcuv75cbYCnLw4JwzZQm61GLNqBEPrSPfMCbvH1t17xrtHgF",
  "key6": "3WzZcKQWF2Dm9Ke3ex4C7MRNEUGxs1FcdqPc1dKKpUS4VQTtC7QMDQ2y34eDWJFvacxhnFtYVw93g1JYqw4y5Nn2",
  "key7": "wRaMGQF7NpFuNAai8qkTq79e14uPh4HFUQyon3XYU8TSeEmHfaUwbNpB3fpySRUsB7E9ZETXGwho8k6gN3rLquj",
  "key8": "4ZU43cbh5Q2oycq7V2s7wjFZGPVM1R3Mz65osrYRFYwLD4Amnckx4Yq41UjckHcjPbsJd5RFgAhowwTGudE5wJUE",
  "key9": "594k8K6ZP791B4E41H3vRpdXH11AQhDAByhcY8wRcMcSbRBA18vZgMiDYHHmhx7brx1wXqxAL97SbDfRQVjfht8H",
  "key10": "5QdAkui9FuMfumSbj9LkMP1wvNQFqTpi8EBqg3TZ9VFtTwBDUcKWpg5idbTHJNbtr4DB2R99HAmcmPCQyRB7cQam",
  "key11": "b5GjGwR4nBevBctxvaCjpQp5d5yhbE7ogmy44eRC8eezdc8i7Sojmi1QtbaQwE6fkp7fSsEFfxkPBwLPFHHNe1q",
  "key12": "4xbhmgxBaRF2k3oJh6Xyz6e4fzciioAGJi864QBU5u93nWryzMe2cCRDucdo5A1HKKVxJBBF1Rz1iVMmwBSFCNP3",
  "key13": "61v1NbTBuKoQhUoBwBN2Lik6jH8HZtJgX5m6v5CfCVodnGwmyovewNqUu9dwAZLRaY5T89AhyHwxqVKAB1G8jwjC",
  "key14": "3hB3Rxj4pm24cfj3cSQWAiaSbhPoVYGtksTHwFL538ijtV9KtGZcjSkmsjgng9kqzE1WKKtpVyNAYyMgoxHBkMXi",
  "key15": "4QLNqoSWTC6dtmbLfV595G9LtmQTY8CxKRhgNDCDWVvTZ97jFcAQWatNYj3vfb5ULxuoF6mGXJnaJxFjZjSg1emN",
  "key16": "SstHRBy6NK5ZrF4j9RduBxXni5fY1bfAATSwyAcqnQS9WpuatTchdZo7g83szs2qNshDHk5cA86xdbzfiUDCVuv",
  "key17": "LZiqN5xbvqgaZc5J7Ac4YiZN7Hajqqukz7YSVjPgpa7KrDxSgZcCCrzNXzFXTWd13AmEvxqxpNkuQ58NPdwvngr",
  "key18": "31JjSzycWGeCk7NY239eu3bbYcNCCK54TmewULw8gtQcJvvPuDtzHkuVugHgfxcct6XRbf7ADXxr7N5CyxSY22Cr",
  "key19": "5gCHi5oCoXc78ftpyYiKwi5BXshYCwvgUnXSY1EQrAUnze3pnobLtXg3kxobU7k7Yw5wYgdgb5NTg4oMQsHZ5P1j",
  "key20": "5qUXqzQkEshNXwHJf3mGo4JnHr1unbTEaUs5mwZ4ou7WrubjjWekVrrZSqa2DqpUQtYRe1GHxxc1g8umCt6UcL9s",
  "key21": "3j3bcKihwUJSSKogfHNwZxfrj5UoFNBTpuHkYo7RPaLy8TMxERaCqqVM7PcKWHhCwd3EoxCgthgVC5hjVNZcCCBE",
  "key22": "2QAv8f6GvQERYEzNjUWW7RH6jhjXjEvpgX4LbTResRgXaMSWaaowMKLUpoR2gDJG8BW9okvZnn8M91eGiNdtfmod",
  "key23": "2sKYg6igVfLXniTwUQFasVGUHLzaGQzEAdQTaA2QmzaESoMDGQaMbUj4piMABY8atRHwNhRvkYQZhaDjsSuLbjTg",
  "key24": "2qe6PdpHwMBoyTUCNmgHa5mJdGocTLSYgeEbqkzz1wfRJBEA2CptSncGwJMuE34EuvGhtoH4XhSMVr6S7tbRWZ66",
  "key25": "4xbcD4HhGXWixFNDXMrgf7vU7Dz58rFWU6g88po5At5jJWLvdeSyyKTWsQyEsDeqdLUjQqgxj5QmjE1nQXQeL8Do",
  "key26": "4xo155krwae2PQ2299WaoAYBpYbYRDvkejhrNKbppChNqwcr9TLQUE9hacLRh2nRbHyzpDrehmhJUVrQKZBsDQvS",
  "key27": "2pecF2d7LPGFKetM5gmQwXxeASocU4Gp5NQbqFejtTungyyzDcbRs5c6b585pgwAxSoin2KQQQbgBMJoKUS8PjVd"
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
