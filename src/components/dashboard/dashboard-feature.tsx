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
    "1W1KcLmdhBbrmkBpg67sX9451gZnZCCtVbYcYfKtCsE1DKMxisfqRzdVyWWouqFgBZQjgoUbKn73Foq2U8XswCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3dnAXzfKYM2ErwEQhKSsfoeabHrqv4VTDk6TZZeYeEj7twVNfsaGWxTbizVhFzwVDDLUReigLcFRDmV2X9f4iS",
  "key1": "4MZDyYDNccFp7aEtGiGJNpva3zZwFG7G8so3H1ZgXFfEre7DBtr62iniX7ThSb1twdoFsfr7t5xPUuutpE27YyDU",
  "key2": "453EKh51wSwd1hkWs18WQP8XrosjkjnTQp6ZEtFS4KQg6Y9xtycdE2VYjHaQQzxRYdUaZQQnZG9KYMeQ9EE5kp7N",
  "key3": "3d6311hpmmBsHhmqjT6NaCMU471642CDgS1petCWRLrDDsMShrrzsRM6RnWyhFto6WNggaEM4fafS8DKC5Nhk9TC",
  "key4": "5pK7n9ZfCVJDGYjSoePafVhxicv67rSS83Vqgpq9MD2GKDcHQvCAxPuKvXJyuCeUYTchwXRqj4dUj54CDFDcf17C",
  "key5": "2Gx2ZadAqnt6oZ7tSWXJD5wG4rsufcRm2kNMkEBGFKsKEU1qpkbHN6oHEuwgUvPf7P8PfAdW73abeFXT8oqpoJbm",
  "key6": "5c87kEfbTch2PeQnSrGaTpGunfKQhRjw1jQfD3xoGG8ztd9ByLnkLqn8SB3WCmcNouEtyvzeDgUb3kDJVMsZqbdr",
  "key7": "56uP9SZH5cjXUv6F1MWqbWFdqMYqXiq7L3gYE6EtjZTv1AZRWqA4Y8eaQtwwHg67K5Syn3Vds1YftXMdiKuKNpeJ",
  "key8": "39XQRcpYPqBchArKTMtEUNjqAGnqd6VdyzhBrRd8esJzcFzmDRzgtgxZgjVVxHR5cQZq5cCyeqhtne5ChYYQjKou",
  "key9": "GpEBiA2WjFr3ACTmNngWSsgGYjJnpZe5eGJUef8Nt6KWt2dnWzcaXDjGdQrGfHhqb1B2gWLP3WBSoSk7XpWezbm",
  "key10": "3L6SyARs8NWN9ZpGEZxDMyXjaQUUkMSG2Etm6QL5VKqS2WB7PPTZoyaAPSSJSKoJXjZGQPCw5Gt4QYGs5aZudnvY",
  "key11": "4KMUakmvnnjrgt5Uo7D3iV8hwCdysuGxMfBg2d9dW4ULde5wvWQpETuKw18wBKP2kVZnjdRAT31zbo9onRwt68gm",
  "key12": "EogAuawzG5hVK7ZkiBHvMYdDTyyzws3Q7pAk1vCfrNF7rA88YrHHkhLt8oCSoeHE3iPvaZgMADgD6xLnR32bdHx",
  "key13": "5Rt8vgkMehYtvdRzzZNqgXvJswerqBSRZMEKjp5vvLeTKTbG8aDRLQGhQ4VnaWwEojYz485HQQUk8uWHPyQPDWqn",
  "key14": "4tEa4umpcL7MZXZ37cWnoaaaCUpX9zKi44bCtFsPDDbossuNs2ce4qoKDf2nLWNgzUvCGJQijgWnr5gLTFYyZijP",
  "key15": "oShwbk75z3WTZLy2dzovoo3CQTpmfxPRGRPmHXsARJdgh8uTLXssP4oCmM3wG6mW9HgUTQJZkBYuAGniaC2mkyt",
  "key16": "3Fm1cyA6uZBfvrVVeHaKRYyoThFAgMQ3hnKiGVaNyUT7X4DQbqbdCJqxzWVXei5oV9sZWxZ7gxKEnmgwf9qgrT6X",
  "key17": "5U9jebpR23zvTzgqTbkWU2sJxTHvaujexkjPoikyNy1SGzuqDq3zehJkqzLCpSvtHV5nGEuAQABPoCGHRKFx5G7W",
  "key18": "3HFu3wu77fKzSqNjHdPV96Pdsouts9vyPU9y4RaMPEbsZabKjyaGHBUWJUXThoKkw3CqTEinZMrhAPQd1638LExZ",
  "key19": "3iQoqXYTFrvwYrppJTqTooBAL2G9P1utefEDDVRX4BtG7kwnFVKtXu57B164q5Mv7iv18v1VCyw3pSpVM2kXD2GD",
  "key20": "2mg5w7MMkW2ogbNV78s7zRYnas2S8QWyZKTgkcA9sVz86SxYHg5VZvUGUKxnQm8ZwXfSDyoKBUxdHoRCwC7PtJob",
  "key21": "4GzduW1Q1DgUV9QAvTXCZh2TXwXDfYm9u7bmjcmqhdpxQd2dnxsV9U5yoEGroqM3ov8LMYUcSBfn5MPEksaTJY85",
  "key22": "3VcmvdoLK5oqTxiMKzybHSK3wdBxyzNmBNqoo5RPMHURCWr3EpeHfDMnbYiKbE5nJcb56RLXmTgLA2t5tF8J86Tz",
  "key23": "4wdDkkKTd1hwyNPUXToS7Y5xgZ5KjnSE8DK3QVYeDb55VKPFRJKSoP97jUD42UExAk4bv4zfdyZwAsoYNbaupT7v",
  "key24": "2LHgj1DEZgp5fwEo4WU4dK1CdXiFnHSbiL6YiRnovviVgAPV8j1nTHn92WgSCWjw3YvxJ8wnsaqCqa14ctWMupvV",
  "key25": "CpJ18xoitVS7kaGvsRVs9Vv6fW2mjRUgSPfKitgbxwLgyeYBnN9DNd3SiPLBcHc2QuoCLfu1Lz9SpEsh4Y29yTm",
  "key26": "Z8ZcJEDHaxiUZYx2ooGtqWyUYAWBdpDuD6H9Ax6PFsSqzCxkYC19dU7dp18ZAFhHqF1EaPFGjxjKJc6G7dUKBMW",
  "key27": "2BLQ9UhLMyuPvTx5UWGDN6x7dSWpKT3UcZsr7q2SwsdrRqP6kbY3GN2UWdV8vTvQp9tPEVvSWG56JBxd4TeLED8W",
  "key28": "5ADyBxPKnF3zQ1H395pZxjkHkSkCJhVJ4c2sqC2Xpm13ptFZJk1Ya9invPiVP5FEmM6xETCZC3BNBtxD5yceA4fJ",
  "key29": "gK6np4QTQrPNYyqxT2KSqbC4KXQFfZLVJh3pnvwcYuESs2Ln8ux8KUKXc1qMGvBNSqVcNraqVWuzKqAGz75NRax",
  "key30": "5s7oMphrDqmmgQaArQmCLBmKYWoDx5AaEX3MYZBs4VE8h9FnzmjtiB3A39WET8uuLmKus4j9Jp4Rk5yDz5aHDsiL",
  "key31": "4dpgth6Bm7wWX8CJuat2E8vB1apQ7Tp764heyi2rqXZNywjWyXxF6dGvXeDPBZFg9Fk5nvYTcsqMbi8rbYMTxJRK",
  "key32": "G9ePECEpUhwDed37tG8u1qdg3eRWQKsKG8juEdVRYiQAFAC777xBJYS4Xqm2MefE2RzoddT3CR5WTR1fxUeNrw3",
  "key33": "5GrwNPwEtGBjcz9YxSHBDXTCjdPfMDiKen3WmNtNJHEaK32Z2cJx1koMomA71DGTLRe9ko1qJEzswFxBg3TqUGdd",
  "key34": "4KdxSkaGRABmJWZs2xLxHj7qJVMXv2chwgB5utX3NVHLaXTC8QK3jQnoYnBUXPBnj5b1fU6255hLgYhPBRD5YtJs",
  "key35": "2xcRupjsf2i1ewUguggUzfb1nQzS7G1Uf9Ev3Mrj9jH253jGxta5ZMcKD3R8UYPhiUG2oKPBkpz9YbjcxdwHUzD6",
  "key36": "2rK2diKPYvwecERLBxo5dGd62TpbxozBeFDbn9EwPjzWerRjEtLh5xYrcbQUXny8RodV2HM1QvuLb9X8ckxoNBjV",
  "key37": "3Upc6Ryvc76qeXAbuvcq5GT4cLxhh6Y96XxLd6g6Rf6ryGv2eNhh4BUbQpte1crysg98i3PhG8cepQYuYryDRbEw",
  "key38": "2J7o41psr1vhF3nCpp6vxz1yhxsgjNWtyJxDevYsG4Y9p7gmSWmCJou6y4c2sKtMGrmcz8ZHMkHi3axfcMJe2VW",
  "key39": "MxBLUpNJSNrp3adQchwMmRBEPRbehyS88TfC23kTNSxENCBQEDhQV8HbLiENmVsxaq9Bf3d46kiUF1nqBwo28Cz",
  "key40": "5JBdkGMjz7HTLLn5hG7Qx5mzqc3QCR4AL9TmY9JyEJBXzVuBiiFaqqLWgzGim5qa8QHgr263d7ZogdMvnrqfQXHm",
  "key41": "2mQTNZyy14XYAa7Mz3AfDD3eTiKobQEBagW2QBEu4VuXbrzkrms4H2vhpgBCEe6JutiYSMEooj57CBkCpnYcAa8o",
  "key42": "63f7v67KoNFSdpo7aH1s1rb7LQCqpoPXotcp9socx9vnnpYgKnA9FH64RKDKoTXRfoXrZMfEbz49XAjdSZWJWS62",
  "key43": "5vbmyQtrWb8MgbUyUuUDJwpeGNsonY56mUyfMyKwGGXSP4gEUrUeQWv11cfgFV8ZzUM2z6kks1EZaq9hCdCqn4nw",
  "key44": "2BAnzqDtEbnTjDNqnKbw6eoYhXv1KiuGEVpDTm6MPLL8kW7V7DGjYyjwtQiM1h4Q34jfT5FrcZon2sq5NYFNSBvV",
  "key45": "5TggG9Fa5SSUghAfuqpGvHQ9m1Wcmq3GMhdsrN1zVGZyUsn11vebbLPtqM3kNx59kHodLTbfhXkmbEyLo5298yfQ",
  "key46": "5Tqc5wuws2WpRn2KJka1Xy34yJhSFzt5BS8BDuvioTEGZs6b4reWu3gdgky8UdzKUjzZ2LkYwfGw6SbNMuHwnjkT"
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
