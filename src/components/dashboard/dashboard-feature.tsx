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
    "5gTDop23k9VAGb68PWpEKend2eRnb9m5kPswPEmmMR5zJyBd2GDXr4xCeMKpL4DSJdtxek5Dzf5wvSsEFLeAhyxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kzuX8KhwbLagRhuBxNXcoFGnY8W6DyNME36yfASKBuhWUj2jog2RquVKmRCGrRka5v92YbLRJffMD9gqd2cetTE",
  "key1": "42Jo2jCMCsyDRZ5jZn6uo345PccmSoaVvsqUeP844y5rVapS5iUCXpF6HPXMSpybggb4PpHkGjPCkcYAZaoVEZkS",
  "key2": "2nrCx1y9CTMVHBQNXb9iMnSJ3qV6VqFweHLoCEP148KyfQRfgdmAoZSHxi1YWzF3z1HiZXqz3sf8X7RPa4JTJgYm",
  "key3": "5vBPB8ecA6iWwoSj1TehzcvmqyBRNkhSyUdLr7jugfy29nNeR9cHtpMi3hrXVpfsjd75GQ5YfFxXux6BHMHP8Vmj",
  "key4": "2b92smevtU9WYjcbp2mczXDKTqHd1mXhhfuw5AFKLmqgPQZziGuwxwMdKCz8rhhbwXECbzJRSCjKPH2tjpDHPvSX",
  "key5": "456Du5L4Ru4AaneYJdZWLbUWmQ6x3NsVJ6WLi13SzkN7BdBjvkLw5FgmHta5ih7xFqkDmR3SrjooqDEJc6tukcEr",
  "key6": "HgFnsWuPxR5RPBpquJcMZn6zBxW4QR16KTdWyh3Nh17GU5AzvQexxVCR566iiWgSP5g977q9g9egLFDFJidT9Zk",
  "key7": "5gfyHkB4PbZHhrVFKHjg1xxtjzyFt21FXrTTLtZzg7hbk9LwCxQZdJFcM6ApTokkk2U82zzfYaxYqkxMTj4NkP83",
  "key8": "4ZPyBMBn1Nii3XZWKhitffvYnxqS4uEdv7fdYb472A24FksDWzwHWTib3ztFVXR8qcmCg6tJyXF9dRiBqmupiHSM",
  "key9": "39nAP6TLzLxs5JmZw6M87S9geykTbtXzmaKRj2FMQauvAz1H86wKWkNCFb9dLRfZmk2omnDpiUSr2uQ4byJrcskm",
  "key10": "3YTHLymjKxp7S7Tm7SUm6oofvWhUsQHNXzzuXz4Sp3jwLjMbKHyzf3whon42UeNheodPoJvkioKyid2eWDAS6Hm7",
  "key11": "3zDkhYHh3hckCk1idqzePah2mCrN6HdWHaE4Xucd2oCDW6BNtXfVDPkP4kftFoeQJYJkJ3EAmxP9ko7jKTfGVAEG",
  "key12": "5CrdKu7WSEu7f171yuEfLsSvmtiyCKUXF1DLUxWVHfvopL3Ra3sicEEfxuoPXsQcAm15uD6KgCeWzkbK4mrVvAKU",
  "key13": "4bEY5ACEDYuLPht4VySb4Q4gW2amRFGvq8CrozbSbzpi6HW4b2iCN3NFM8YDzpKf5BWzte2tzwyMBqB2z6uq19vs",
  "key14": "4x5LYyvbFJgbFP5Fp5XJqYKaYKKGtijyiVsZUG5oHMPP3RJsXGjND98QCyeJHk2QQo641YNvWQqrpQLxmqdsx2Q8",
  "key15": "4SzgYNAvdRxNjhybtM7qSyHb4SxH1BaMsYFiV7U7ctx9KWS9E6xEcyoDCJRYQbPSFJUysq8VZ4mpV89tmHLuoTMe",
  "key16": "auUy17hFhYtE5fApARy2hvNuwS6WKnbCQz72Z9R7s9178A9vWZo6bc4mcsaJAX2LJVQaJQWR1KdsuGLb26zheHk",
  "key17": "5v3Kw1EiAJcwKvASRKFt4Mqk6RzuC5oyYaGrvDvZYGXgzzKore1BtdQhJwk1NHjhRVNrfhxLsktmCseif4vqMk5y",
  "key18": "67GVLgJtCxBMmSCTJj4Tdi6xWgJbnVuiBFj3eqaou4CcEW2N7a4wFFkwjuPdTmnVaGW12hCcQLxAjWWnMELEghig",
  "key19": "2LVgM52Lrv7PesB9ebfPY4xELzdYTzHn6q1Ub8vEBWVoU9DryLkAjnyx4c3T287Mpgpnio9wMH3YA17K7o8dyEbc",
  "key20": "3JKuAExRmArW95HgsmzW7GWGp8WoViNG4HunpFEFKXSgvaDnfBe2cLPYhyYSkDNZZwRyekNtjtHP7kg48r5C9c8b",
  "key21": "2tFcXKqFfRn9NNqXtWVBGKkt7aU56sH4NWwyuEWYV94Rp9TnS82FUmPZhfUJgLSbjoeidRcYFCV3VhPpeE6BcjRw",
  "key22": "3vzr5fzKQKt4QAGXL3zDLgXaLaW6ceGRHDeULYr4H7LeFwXgSrmKraxxDnzZuaQEy78cDw7LmXykiRbA5zycaspj",
  "key23": "5pqZ8vz6k5wkgzGxBZcFJbrk5PkTLQ9VtCLnb9o7ZMxVtmVFKDMRt4fstzJ7rxrShLQAw8o1Z2Pdjf9d4aZJ7Ct1",
  "key24": "5JQ1AxKavcjFVyvs5ZLSnoGdyTVeKf93aHSB5bvisHDwp3KH2NsDJ1uoW1X7jsKBNZ7t2WfKp6UgSofDCinvKSG8",
  "key25": "2AhNP1bg6ENT6kXoesD3stF5yB8vRrjWsrYciz7rzfdUvP3MnHq9vYkHLZ4BYBzcS7UFvEBoAd3AAwsafixPREit",
  "key26": "MWezAMSBdrBHBzAQM9zRH5gGPvWJaq5yKvT6pW8wHJkzwRAVQPjuZugyMuPbtFpQyipKn9J7CdQ3zkgHjYHWEGi",
  "key27": "2TjHfZNAveWkDSzVzcVfMj8RGTEeSeq9puHzieAoReuD2Zy4bFzEf1X5ukwCZFWjUEeGJhqsaEfx9h8pCYfBwL1P"
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
