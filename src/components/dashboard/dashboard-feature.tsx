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
    "5cvAbnsJY6Ni8oBV1m85DqvykM2NGWWhx56xPAc2KhVSfS6eTehKHN9SbPErSo3tPiAUxVHCo8FrYBcFNgjyMZVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTSdHvs93fhcxg2vmAsb56auURrbSKu2ivKnbDXiX6BZphZXZERRkqtfamR2GN5boqHTvLswh1Wr7UCXZjxxHtM",
  "key1": "pCZUfqxBwZX6htVVeFx9i5o5VgCFsTykJuADGNU2NMyy8ChCaPkJmYC9wiXr819uRey6Laf4SpokUg3zWWdu7EV",
  "key2": "5aAuwGDbYhNKt4Cigp9X1tVYhaB4By9sr1wQ7cGujj86wRVWauNdFEAvh8nAWXxhMo9Zc7Tby21dYF7jx2h75fgX",
  "key3": "4LDKAKFyBHwRQXWq7FWdhQC88wge943Wy3tRMuMDohTzEcAkuCr41GCt4MLAjErieGy6BbgAZWWtNr1WqJFD8qiz",
  "key4": "Xbe34wrVLrwd34hbhqjq2tibC1HHKwkSiCDRqniJY5mad6dzppus8qs1QT5wMdKXT6g49zea9NnmqxnkzixPZJV",
  "key5": "47a9jFUwrApbrxqcTfjgE6AW6ukenALGrkz7gxmMxmTskgN5yw5AEv92jeB9vivX9t9bwj7s7rL3TSby6bbzNSWk",
  "key6": "49GDtdHy3ooNVjn2ys5fGN7pJpdpNAjKsJgMFRw3PsFXsM65xm5Ho3dRin7jrLPCFerq8ZsCwD31W7H9FcNZq39y",
  "key7": "5UuD2nPDSs3wNPtqHkTWsKGXoZHjjBsyChspbVDhA2rRJJ6F1Dtm8KUKN9BH2pyC2iqyg2j5GKSiy39Ff1u7sDuE",
  "key8": "4WPNvsMEGtxT9yDbWccPZXVcyKPwbuBaiK92j41aT3x9BjPAkGzStbs4P4F6wY9ptPJuuvWWTAEbU5Sv81Tum5PL",
  "key9": "3wESTNhnC26RdDDPeLV4pL4UC3A7o9pPfjS8qxGh3XZwtRPzFvCfgQJV3wqGtDAedpBoB5abF9KjmdM4GjZgDcbW",
  "key10": "rELot3mxc8EduQwuMVaQbjJTfCjpMzqSx4Br1GwNiBBWsPzVUkC9SHs94mneVQdqKoUVD7w9c9uSf8Cjk61roXv",
  "key11": "28X4JkA1z5HiQBrm86522A5XKZkr7haMsnZtMUnXUa5rX3mBDWT6LXqRQpBmXWrnWb2LgkPqF4GPhhVUxLPCqwr7",
  "key12": "4uJiLjMRdcvLEkry9qJTmYmxU6Z5kg7A94VPhQ3fJfF3Eqmo3v1smxJAHRmBoyQw29qqR8BX2XuJVZTNGdBhPjGG",
  "key13": "2TFUnmSEAb6dBQB9smB8djPSRN64cLXUWeDhva7tDLhjXCAYQCmVjJ7Xk22W8m828cqHU4gxa9kioqASANc1RbJB",
  "key14": "3UzwCNoNFi52yXzdjxhUmZ54whAAhTRdPAdsEX1DEn4JcCaZ4oViq74runVcQAwDeghpaTBUw9pmKBQMtF2HhU5f",
  "key15": "5mSrZ5QvFYhDunaZbZrVh42Fi7ougXiVZb3us8L4cpH6QPDqtRRKtHAyUdcvNe3ywMc2jZ8WBdgssD1kQA7ye9vq",
  "key16": "21WSQAvoWy7yif9tYZZ7XVLhAZSM8AYDDcgWR16H3WnVghNwBCv717kWd8BmQH3CAFM42MZyDioVJF4kDakj2Mip",
  "key17": "4QhbhZfruXYL1oCwyer7cqHhVPYVHcGjRXxH3mr5gJx42rzgQms5t8f91Cwet7PQwNffE3tGswCzJfsEjFDfRswr",
  "key18": "ixZbSiQGdjFSz2hGrNoJrPrrVx7T3HA6iSifn5VWEFBsTQYTzgBzKVpqU6BbsQLy4J2petTYXHbkGrFSZgcfTMU",
  "key19": "2VD4h3VNnfUdqQfqzskbdayVivWFHJzbdLd8XyZ5k63BqGNeCQ9dLTxr5PqKCHRunJg5o3JkX8YYGxq3exiJwDaB",
  "key20": "3XBynFCXmEojDQtyzMqz8m74eV5Nugh3hDn4FEiRV7XMhBKw2KLywHdpdK6yAmvMmMBsDPD5dqnjCWDLs1eveHkC",
  "key21": "4HN1ri415ycu3nn9P1sENtsCv8pTv7R5zMrA1zfdS7a6qA1YmjcKEmoNZZiAqDncLo6noMFZWj9Huqq8snMa2DvK",
  "key22": "2gY5wxDYBjMyJdMca1QpJFLoxBkeVY1BhLodJhZDT8j6xaMC5SFYed8eGHmGpwySwctLyAqqB8L6FKm5p4CSAZ92",
  "key23": "4UTY9gMUkckPFkNTPBDW1jgheGXCGTQWjrhGsFcQ4UK7P6rQEBUcKXyKgXhFtkiqdcvs3ZWb7h5LtpRGxJXdfEbG",
  "key24": "QnaBm5U7uecGzMCu6GpYEGKMuvLAPUG9PtqBaCSoC3ijtFU4DJnNRPJabqAYThdUYgLL7YjgJHBqVZ3J8RnWXcQ"
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
