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
    "PmWZNLKoSc1wtDZYkSAYkJtuaTxdnFFekJw5JQVQGSYTuJzRFAWbq7J3UFyutSCdJBrKhKY5nrHBgenGCF2jLzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uDDDCy96GNbkR5pqT53csKCAfTvoWcYakzX3Tbm8erqGEoJx4r4m6D5LzvEJXTi5VTGkPYVVNkGt3wsSbceoyaC",
  "key1": "3GgAPMeC4GVX5sDk6W7HxzLoxScU1km3qESEYJaKErvcgmyaGT8FdHLiQivK2jmpsMr1yysi6qEyCX5LPUJEXwKw",
  "key2": "2nQy14t1pAJhV29rv9By9dgyHkUTzKSexmNgNngHsqXnyorJYuYULonj3grNhsAriWhzBNaPcMXZnPvAiaceMQgP",
  "key3": "5bBSkptmzdcy7y2zwKxtDaEsR4DDYbuPhQEndTqfEiTNuzLqW38hrq2DgJ5Km5ebjBVJWJUHiRVbcXBd3PoA1Uzr",
  "key4": "9LBnEf6LYNkYU3mo37ky273K5K2KH6bpRQuUNKbVX8XMSHAkibSbFuAbQHJuD7giGVHJJ9zBXfisS2G4VZLyX14",
  "key5": "3WqGGckpAJetHmQSBnNFhDNPf8VfDnGVk3UQYAWvP89tGxfCTLXSAZ2sfY43dh88DCssqTkDhHuiHG9Z1XB9wHA4",
  "key6": "5jgoUuHoZhQnuKHgTnQbBADkM7g3SQQRHQKnwoPTjats5J9stfanbSDTLsALTAoBY1tGZ5E1wTrgZpLjfKq5rWRF",
  "key7": "AHa61MuYo2NXf5zNbiHBuqfZikBWpcE9o3HYwCQtDxkNNjNQtUgAMp2N259WgmT8kCDoMrutpKyfz6vL7wrTuTx",
  "key8": "4bErJoE7FDRhu5hcdzj2XWUe7XyfpJvZpFJNhYiE2J8YHoKYyKL427rzMjg32TW8VWQVd9mPKQjYbu31GVDv1tdY",
  "key9": "54PUV5DVYzqWZPekAMvPyT13Re6Wvu95JRV62unqBULB1M18jJ2wzxoTPWi5fX46Mv1vnAXxkRPHKzXbg6nE3jXW",
  "key10": "2UVsTEufZsMZzVBRks9qornZ2ifWpH92jLTPrPpSP3WKNvvpjiabVjyoRjdZanTaG8qk9444P7eGqsZZzUPswq4T",
  "key11": "5oFcHLLa9PTXFB86gyqAW8aNTSnKTm751tGcfZzeUkk4Z9SJR8X25nESn8GSb4ozk8HmP2oLYUbP1pWkVcuUYk7w",
  "key12": "5KTKBqcddwDXbkNuzFbQmy2mKAPVEsCKzEWFgThUEWZhzRqcRAPT2evC7ziVf3GawWSDw4ZiyEGxAfEZoS5dQfc8",
  "key13": "3scEHgDZf5rWTte3Qnmsqw5o6ayFgKYL7WeNGj7TvGEyELADJgRYxsGuroaYKVK8V6XNPP9CUd7B81Q9afLY6qgU",
  "key14": "4QPSpMom54iakDsvYevzDJda7G5WcQbAEgcpHAdU9m4GsZVQiJsA1TtVjXC1NWqyjmkVtXTzSaa2JZRmFZt6Eq6i",
  "key15": "2JqfwqyCRnXWTUGAM1gUsun5ZeeuwMrz6RoTeofDUniKvETdD1bW7b1ZgCa9T7H8BBjFyQTx6WChW6zAux1TM1zK",
  "key16": "5kZpMNLLHjHCVgNXgHaYPhyoMtY16mBdcFGJNWT5wRHMWwDYMdTst4RcRq5Vhp1F57Ne3rwfpztTpsfywT3BQ9gn",
  "key17": "52JSViJ6dZGePAmTVfzKafGv5en479Pe2PZjzTHDfDdTZbb49bJK79dULtVV8AoKyRwrxLUfvLoWRUo9eqvGgpME",
  "key18": "2RyPiHXw1v7BHrzdprsfm28monnDncMLXrVtZHKy7zuN4VwP9MwWKsc47W8FXFGwejJmkWgXcAKYnBX8pW5bZHyi",
  "key19": "2zy3eP5fHMsvY598d17EyTgVCgLMxsgASWkqxL5H7cfUfvriuh6dR7hxtfa2vZDKS298HA3xKQ4iCD8oQJHRNzX8",
  "key20": "45JDzPtQLCC5Kn5MGqqj2nhrN7KYZbETHwfsRkck4od9zE1yowFYUEdzdhhJkHyUgUS1b1VM2xvizsxfX3658B19",
  "key21": "2QxNbqVaD81mzswsBLuWdy6zL1Xnf9vcGxw8PCR1vwLM64Z78WZzJzbK7eytwZpS8zgc5J4ZfA1WzDYDMsi8mHnU",
  "key22": "32dQgxhJLGgo5qqe6eyzPE29TJesDNMvaDznTExi9H3BfUMA8urJTB5dqxhB8o7ALHSRPHPkPMka7tQXQG89V7qm",
  "key23": "37BZsf68b7geomvG7NDqavRvVqtpcsyLWReVPZzi23wPQnqeYqqRGe5S2PHmx22v1HbDKLv7fnbW1hd9X1eDaXtT",
  "key24": "2EXU8e7cjNUvbgBeFKsTTWexJ6U8mYNW5tLBvm6BLvYP7qnQFydgdA53V3KpByAkoRo1db23KtpF4e9KQmMzEBAy",
  "key25": "LpoXNK9N5CKxexV6tkTHrkbaSJ5j1ztP7E43U7EKjrjrcgxywJ3xrXdrMquxxkVGnKuzoMEMkT3BnqEXhqsnKJ1",
  "key26": "45QtYrBPdmwSNbQCNguPEyVNT1gm4mDpLgFCxTapbJLzSbdCwDhTmpRQrqg5MST84yQGeDqw8T3RAa9ojFQszE7h",
  "key27": "5zv8KiGWxzfYmp7PSuYycDRguAf86Fy19vwKhBe2WDsGpXoh5m5NcwfS4ZuHwuMg8Tr8nMHmXip4CeBw4ix9tmRN",
  "key28": "57TPpUsYLtjNKRmvrJpugb7vEyZyNYk7W7c8HVuukM2qKwVJxNpEvSfASDxdV92argcon3FFYg8tZ9TEnDembwpk",
  "key29": "3aiq5WGKeQPnHPiQ2AE1kmFwG8Duuv1aGymXpZCcwAvYEMvQKEgYuCxFtdT6s7igZhrjrf3YchpKxA5XwLNZwi7g",
  "key30": "2385drqUDrZxA3Wviqthf2e9WYsVs9onmZe5RptGKrDMzZW4t9DpdyB9afQjT47qKxQhkviDzXK6M8ibG9MR1jiN"
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
