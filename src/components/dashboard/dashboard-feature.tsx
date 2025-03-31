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
    "5zS9Vm5KthBwyoKxLxtpPwfJPCHi4d62hrckCXbTXZgTCRbkTABXC73fv3Vy6FKQH4JEuav4ZXcP6mJATCZWcJwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvPTjahN8zmWL85xh8ygCfWWh8CFMVLGB6GKhMRq72TnptK2KY9QKQ3yV9VAgFax3YVrduWZkBTNiy7hN19V58w",
  "key1": "5TKcFYgz3L3iGrDeQ4eqEg4TXy7L6jjdsbN78sL1yXsZtN3A6cWKfmGiXYcngu7icYQGTGxkzvf7ZkDadEnzCMsx",
  "key2": "46cfjsgsbBgQr5huT9FKW8NvzqExX4i8cvuFRBVRewCUELzPwKns6apUVzwRsNKa9tw8t8A96tz6nNoSe6EyZZZj",
  "key3": "2WsPqj4eftqZRRmEXtUfSAtodmyhp1aFcmatyMVKonExiv7UwysbfYCWnEGXGU7yokJ6456cgsUf1S8g1AgKrNZ6",
  "key4": "eYj3NR5Pqhho3YgiFt2kaREC84EuuRugLykAqzPTEAPjzyHQ7Uxv98f6N4bjV4uDH1K7voQ7pdVXfC5zmTuQawp",
  "key5": "2id2MaveeKLTcvB9GF4QGrxHouhKe1zVKbJv95ZLc4chXMz4gX4Em5ZSNdNQxKra7UL4uYcD2MA96TwCBmwLJHj6",
  "key6": "5scecBDXLHqobJdtpGNmZLXwai2izDvX8Vx6BCuhSenbXgn9ir3AujHwf6nCVNaFYwiYRWuG9ZTjLCwig1xY8Wv2",
  "key7": "3CiYuoPWc6j4BqcNcuFnsh7d5KU3YQvFnCDtB6CKF6qwSssigW1cGepF3kFwjsfUdChHQnKuu8vPGpT6cXrLn7sy",
  "key8": "3uaAhFrzueB96Y2cq6fVR7oUu1YBxqjJLXsK4hsRf3yaG37vPQkAQHy3tDFhbxtaZnozzfoggn6eBouwFJQZdzNx",
  "key9": "3mjQcwHJUna7QSsnfrRCo3SLpcJnugbjxuZSoNUP3ivz73CDNCEQx8WYmCT7DQ3NDrCCDyL5cvamKT1oop3oEV9M",
  "key10": "5NXheD2bGUXCH6xsJVWDfdRCL7FgTNdAWFJqZHByNYhpo7tKpWA4ZhoWWLfvg7bXMuBaKqpFz8HamXNcdEqT5DdZ",
  "key11": "5FYZiyWB6rEtShM2PYGfGNbmcTMyHMT2XzNkjwKqCRgHB3PP9eqqZRfVLGv9FiwiAbHkLrczjqqEbww8XZQpDzT5",
  "key12": "62MDRjuPzQXDCXghwSjXcoue6m5b73Le9k4CikjorZSCFtBY2YN64NjmWiD7VaNK4KWmyx5wkyTPdyCKapbPCioX",
  "key13": "4fJ2W1DgVm5CEWQLqW8nAKDKKzkCw6ckkx57Gd9fm2FVHiVuav8hkaReUth8aFtTBUyWaXEn4AfYZYdjDb7Xrgwt",
  "key14": "3JddubynhPcL6k31HjY64WtXx3uwiuuZb3QoscjnDczhcCLo33vgs693zEyxcbZMZTQLpcFGuCAfZuzquEXcXWTs",
  "key15": "2pckehrCPLWhP6vqQxNVxXS26CsjftpYadh1pDwwLkxHRpKhuzBhDyLYsMtxbjg4FbhnCPiFhxJskuMmSEYsoqZJ",
  "key16": "23Q3YwJ8r95UcpN6jpkUCFfiwdRPuNk4z8HFAoNgCixgi7gfbuMNv9yGKhKdShNWmNNZAoZETw3gSN7YRd9Vj5sT",
  "key17": "GrML5Wz5oWTYTUpvtbne7gav4r3vqdWeEC8r3kXNFPYe2TPAk9zZV79RPn14DSppscQtYRAN91rv8Swae73BDr4",
  "key18": "KHPSe91BSZGuY3cyDuTrtHvTxLVZQZBYtNKpBpEEsvCnG3eF6X5wGNWhoDTZUKQ2cqfwhxBS2rrGtUHn9TF6fxL",
  "key19": "3wqUaJKP7rSqiEDBg5kpy47dMdBBE5oQBcbtUgXwwGnkdqCWUePW7ykz6Z5nsaFdETJ2bDNLzSmzy5F5paNTbdU4",
  "key20": "vTF4iQGCHRzQvfjYG2PC6mkGTKiZ2VB6XvvWmi37H4DVNc92chQiLTbngZaP2SCzY8ZQRxaynhgnY9gcVhsyFsq",
  "key21": "4rm7F2ALvSkzNMkpH9XnG8q2Ef8KLp7Z53Qhww2Hp72FcXjrUBBLC4FwCb7sYAxPx23ALoGUGAJ4sKWNpBefCPT3",
  "key22": "54Bq7D8rw9yNc9V7br9nJ2rHE6p3abyQuBotvizT5gXuHV8Acu5hRjFBxYprpbk5vdqBqK2SLESVDdiAtXr8RzvV",
  "key23": "4dCXFXFbkvXmnxyTdmZx6y9R4SW87HeWXkoXtYH61o7mQiB5GqccnUtRiNA8AGgaFwrsByKRNZuWp9t1MGTFqn1n",
  "key24": "JmD8UFwebPMDLrfyYFL25jZj2TiKSb2GmhWvYc7WhYMRz2GmxQT5ePofRTACeQZkpZAtva5C7QeCasjs5VkMhYY",
  "key25": "2m81C3GnigSjZTMjQNjHi5ox76Jen2R5QVykGSG8Ux98Bm3G3Z7No33zS3zuVTz8WmGaHBaXENUpbEyt3A7RuXwS",
  "key26": "gHF9cZn34y2hr3U9iH82ULSWk2Mwvb63FEco6aRj7F4DSw2udfchcKMYxUpMsKpq2wtrfeH5xBUapVv3Vz4PiCb",
  "key27": "33NAgV98SY8wW9W5dn5iQv4SoxMyb51PBPEHwuU8kM4e5BLeNcNhHDz67DudfzytCmRfQuWa4LLsrBk9JtYwsTi9",
  "key28": "5cVomEDMJFVeBTTNwQQQMhxdgvme2puVG5V6TWqA3hXHcQc62NYGt5wMt7y5ZqaDFccruGuSd1BL6CzXrtykDwGE",
  "key29": "F7U6aeD3NNwtHjhrPhL2QGwEduqt7EivNfuNJZk3MhvqccGiWrQLDGgwTcEzEiu8B29mvH7hrJoYqPuFDYoCfCU",
  "key30": "2oeZEa6R3w2uTPyMXpKEALu96Ud5uU5QEist9sJs15YPwkUoGwW9L8vokdL5yKoU6CDzAdaFkCXPHqyEeFk1Pvbi",
  "key31": "3jnsnR5bakVaNAJE9bsTWVCo8KiwXXzPh67zDzppXw4bqcceUdMmTjrAzRs3yUgpkqaq6Gm6yadUBZJRXYsjx8qg",
  "key32": "3oTHSRmJEJtzaU8KzgxmR4trr8QXV8qCMXgGRCDcwEehzJwH2N5G6QiszsvUxaPv4GmKbSt6JMHLTfkm9JrtUAjd",
  "key33": "5VrE6rxsHC6NHvSAfCFPsnZrBYGW7UfoyhFVs4DaskW8tvdcj7wy5minsMA3XuCcMi4HL3c1D4nyKsRdTn5yUfWe",
  "key34": "58cxLCqgJFDcW9mEL7fb1C5Q1A6YoCaacdQM934oSdWKZmthmpURXcq3xoo4tnMbWRxUtnvTJf6t2BrQ5NHbd762",
  "key35": "qKPkP3YP2TTMs69vxKRkSjEQk51neFYZUojnzJfRXS5aLuvpbKaXqdDCMHU2TKHejm9HiyNxcUFWXt74K9ZmS5C",
  "key36": "2fE5vjCzdafQZafGQJKh2xsFvCRQ4383rLA5oSgAJ4a6JxpRmm8778RJNDw3Jsw9Zt1VuJeizUkjJWXEaZrooLH2",
  "key37": "yEPLqNvHAKUtJsYUhGJN5Dc6Aitb6fp4bMaP82YmMtfuBpaajcrzikS2vvmEUS7GRBEpzhqY66uaZxhLwtnq3f4",
  "key38": "3CEtmboDCRY8AMsQHSzYGKFYGWkVL9ySSh6WRcYfzJFev2FNh36xBHDtZW7g6svm2GF1xoan9iXgSTCkHfmZpXrH",
  "key39": "5V1EReqtgN8WQQH99m2jwRHHLKwUJRVp44vmTVZgC6g3Prjest7ss5tG1M2yMheHuaVtbZ9ke8XySdzgrS3cy3iD",
  "key40": "4qrGfpMHq9Sy5hbfsneNSekXCqWqXLj1RHCTg1ccajEYthudVw3QoGW5GLRuVJgfF79QqVQWwrnTEZve9SpDyDwa",
  "key41": "s99UXxaUPondwtL1yKf2Cvb8VfuHqsVV3oJpSN217SsMHN8Xknc33xEjWhYjQyqmBBFtgxLkZAwr2AvvqAf3XB1",
  "key42": "6NJF44ZK6ZwvJJrXUohBX2cMHwZhVtKH1XcTqQvTpaHMe1kNyyGJYyjtK8qGSNK4BAZGQmaeTr8jCAWfVby7rdc"
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
