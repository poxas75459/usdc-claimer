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
    "5w4KF7r33caiuRs6og7HoBBgSTdma5Ti6572jYP1yDpddPfEXtcJNPVbb2ubn9d7NcdHqcc377PLVvFAxVUgsnbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ikJasM5ocwtH5zAT9utzYQUQLHBTa3k82522ygA9CviKPEdmcQL36WSCdk7KdRbXgFVNPK4CXTqnAyCaws9RiqV",
  "key1": "4pcBiV729E28pTD2mDi895ZmrGTdoCopLZgimzn6ot8J3NCNMz1kDgtpZQGJ8trC4NCo3JSteZR92YuNVFoDZmYR",
  "key2": "67Tz2cvGvcbxqyJhNntBPBQPiFtBDgusn1DXxjFWRuSJ3U1TWtVKmzgLg49iNCo7jPSH2Ni2SkFUN8MckxJaNs6k",
  "key3": "2cS75pL1EpGJJ3uyiGXBePFhFzCzkDNLdrSKMNVQVhqXv5AcwcW2nYVfZ9KnPSKa54AQ3qVTNxERQkPDjgq19ZWP",
  "key4": "6fMS9Gh1eWEnoVTw75DsKJcbPuzSoxxZM2StmfL6QiAFJJJ94R4ixRbrL7HfLnXowBbNm8os2qQmHDn2gZckXyC",
  "key5": "4F7VYwPGK1ZAjERKTELYxx6PeEcYjhNCicHFKR1LtjQEMuDfL559mG6sTRQaq4oHuvLhNUK7bLwUnaa1qcGr13SQ",
  "key6": "3e7NsBtw85MBonX4zwSCgFHma2EoQT6TtdVcnYaQwtPjwam11pZaSQ9jdMS36HDCAStWxcE1b4yxM2iKTU6UxUhp",
  "key7": "5ZBQDZULnLXYc4uRRkcgH2pyrP5PtUPJSUo1q9PUWXYCQtUzMBJPrFJE4a3yRGyi2ef7aQC2skKoM1YvXdGYu8of",
  "key8": "4SiSqBUU3zDiJ2L4CDV9WqSvNpWf7s972CDyzsvCJQpZFxMj4zztepabq1QxBt8AShoUPvnbh9c8z29iWwC7n5QL",
  "key9": "X11DDHzzrtaNmpmurC4tmLf9dsac4FXXu7xVK4JHLZhpC33qXu8KWWGGqUpYtZgAHbkqt9wvRBNc3qbQ1sNRUhh",
  "key10": "23KcBcd61QUhGs8zuQ1T1dPSTk7hy5oKUxgJus735wVsmzHjsmdRQo5AyNHSitVWL8ojKw1NrJgWrm8vzzZw3Mf5",
  "key11": "FFRe513UtjDiDBKbJoTn7XnoWdzVkm9TtHKKykmZaWBhaJpy4LeeFdWn5UPfT2XnaM2JLA2oYQV8iEtJ63id92R",
  "key12": "28Hc5YUEo7zkwzezLymjm67fBt6onTqCrrJyaL1x8m6arLWqxMSkZgvyetVLZBdGBKMqyF3FUo8WVLAQXLeFEioA",
  "key13": "3xFQ4GyHb9N4zeCfTrdSa2X3oDwF4JivJUz8SvgBx8F95BeLRLPJqV44HF8P6JLjBoBtf3QJ1M5Qd8kTwsMz5ehP",
  "key14": "AvMoqtuymqo7e5VJabrPLKywwozAg7PWPY21G29VfXy5ruoi6T129EfrzjYSrcvDb2GgjouyR6j9PZGk6NEjWiz",
  "key15": "3heDHQyKUURCU9YT8DsDtAbKNEhqZCqC2KwfXfz964c5HdToUy5p6FunB1KE527LHKuBsyrxMMgV9dfhPhBKHuTu",
  "key16": "63DEP7xT1qn1nvxGiHANP8qLZUfKybeQc2zt2LbcqGRmr3atiLSkX9cTsPath58cwVVN5fTru18jLmjxWsp3aLBJ",
  "key17": "5LtZBPLq7B8zUXiXV4nqvoQXHZ8UJ4pm7QX8LwWsttx6Ws1sRrfpSRckBNEFSVU3AD77vVgYQpSZJqTyJozhzD5b",
  "key18": "4xHWjWB268DXe5QM6emtCBMqsakMMs3QgffKrb1cEkc9ucHVD7fgjpZhxnyN1jo8LhVHSBcYziXbiSA8xoHDQmzq",
  "key19": "37aqvRXYuCB81qR9MAPnScKxNtPRdRJ3n8hdp31EczGqSCN7cvxkoCSGM6eTbbz5SEEcjTt6e7Z1MfhMJECPf9Ld",
  "key20": "3G6SVVqMUa5nF4yDx5tQu8DJPUaSA6fuZddWpS9KKVVtjsoUBgT7MJy67TdMWwpRmLeLtrf56AfdJsAtxfUHz16D",
  "key21": "c7DwY3S5BkWg5C85spNC6Atu4SeMHvGgvfdEb8h7ZnAwHU9zgA7bvUrQxCW9MCpM1FotDo5UJcBukGjZH2GE9AQ",
  "key22": "4iB9oyir4SqLL9CSVzWDTSU7awYkQm7v19cA6QUFLuit33rAsWfz6r47ucMzEeb1chhnJTiTgmjajnQQGoVNRPXe",
  "key23": "dAFZfVkD8JWu3zNksLUhi1cPZRaogqg3s41wsZh2o1t7bfwHcdcQ7Rm5wjA4wk5QEKxXHRAvXq1hHPNHLe4m37X",
  "key24": "3s2vKpsNADwG8bnrshP4MhtN9mJmK72eFWrDZ9gx7drbRr2DAM2DZea7PGcij4juk4S545cNbUmPiu9w6E3RCcso",
  "key25": "3jYtJTyPaGDotB6bh2qfejucPKjKKFTtd64ENYRfGvTSSFaU9sWetZKjD7xDGqoYRrtHcjCk9TWjtZLdMaZcwKbE",
  "key26": "3Hf5xZe1esEBpnwYZhPrd9pXQHBuF2F2zeDp53EJ2Tyb7G4GA5e1nf3Vi1Dh5XsYp17qSL6we4iswoNR3fsFmTFY",
  "key27": "5DUL6xsDakuMPMpLRDUJG1Zds4YBziqzmoijtUDzjJw7F37naHUpMJnkAUjvUdAfyoUXgH6E4fppfW1dSqc3p1dz",
  "key28": "3YsGRpYY4fJ1kfkSnckv9VTfHpQ3i5grqvpYAPo4Rtmu955WPVL1CsWjfLW2rsoEtZT8rhosW2s8eUEYAAMBi3jw"
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
