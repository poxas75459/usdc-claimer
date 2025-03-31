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
    "2kD5jt6jqVYBKFkHeo2NQkDY1Hf5LxGwfNeJNMfVfDmBJJgiAbVaefJpPEyTKL7WzvUJuxHh31Sq9CLs68sm5EA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pgvPFcyxGAZ89cwF4DFH8L8RCcre7L1M6LwrjrxdivHMrygMsgD3hDtTQL8VYfMsq9zvHr18L2v49QUZdBeTxb6",
  "key1": "5SsmtTQdfxvLuvvyzRFaUvfmmiSvmaenhkn4NdDte9icFktVk4ZdvgXyzmCJki2Cq7FU993LnB6uF6y43G3Ri68D",
  "key2": "Tauq3cJm78T9fEXhgW7PnyCGhsA8RkPPo8gAe4yhqRVaeDRy3GUV8nfLVShpYDPjAujoK4fzEWQ21JkLup6X3xy",
  "key3": "2cSE6JrmkmurGGCk5Hv99hctqMZoDyW3as3WrYet1VEZTsSEp2TrxjwVBSWMBrdpk77WdZ1zuYFtTCkmKPByDVkm",
  "key4": "4ctMKfRAEjdU5qzABsHJa3qrmFBCPgD9qoGNUuyPMV3tG9dwwYG4bJbeDCgQjvoSjGBDD4HDJWrZUbR9kAaqs6xR",
  "key5": "3eaCgexKUP3epWGAtF6ChvrH9jSvhgmHR14qgKMEiM9AJrTzEq4wunKfVtCQCwzN6ed5mAUxmgmyn4Nu24KcUxep",
  "key6": "2U5vj4QspA5QpyjMPsZeHZp7PNGkF4K4yD71Gk4dg29oEiQ87jQE4zTTbc3sAbFMYMyGUkGZ92Hedx9Vt49GDxUQ",
  "key7": "5unBop3q9HaJUmw1fXentwuNsLmuP8XqWrfpEcLawSfoPtRnUSJMwrLv6zWYgfuhmrKbetyvbRnoLgoL9KCruxJG",
  "key8": "N5DWrrQ9dAhtWBE2zRYukFkFevErqSWCeV5HnUS45QVo27Se1dtnFqtDMc7ng4KCKNR9czpKbJqUg9q5hEBYdZU",
  "key9": "3fWiiUdZ7ZXSwpgX7K9FWJ6DwvoViKBQ2C6uZfuzpGyu4KqkQNWXh2oh6z66LccWQREE5Kuz1z4pSLiREGa5zHnX",
  "key10": "2pvsDZaXYscPqi4BbcYcc84M77kyuwst9AeYf7Cs5WRv1nWaVq8QBuPtX8V7VtAwnjQTZByiyPzMYnZt4EAMXwAV",
  "key11": "5w6mjUiymf1RDPSikPo85U5rVmW6LaGBurwG8rhGnTC9M9yK5gKHzyt8LRa2J6WvQ8t6REQuD7839pfas5VCV5W7",
  "key12": "3Wd8ijQUNDQvhJbT7NKmyC9BLvh7Jtbf5yixwDfDgZMLHkSK6hEQwgAJUENsp2dpBQRt6sSEySyWeD4iyjNjVn3z",
  "key13": "4dtymNoXMFNGow4UM6DvPk2AhS7TVw26WvEDpevGGDbVPoL1zDDHiD679hXoB62F7rK8BK9ixxQvKmsPCN2ckeym",
  "key14": "4AVSu3WFn6amdqnvZXzQuvSh6YyrHnFvbx6KAGNRGvQtrUiasPx3SRS3RFv6ctVJKUnLM8Vf64698QJV78NJfyE5",
  "key15": "5rGWcz7wtTauD3bQNeGEgugbXnH4ugpq8TGSGJC5vf8AZbCdFXX9shA3r7ynGUcwUx1WZWmvb5eKyujmMfn3AjuL",
  "key16": "2nZNpueZ56pqRrmrbzkPV1VdWS8TXd4thGrXF1zGhCyUd313U91mJW8j2pK6b6YxRbNHxxg5ygw3hhBgWnppgw3w",
  "key17": "27pE2PMTHekM5KzsQTgkx4ByxaxuGcVA5WMDBK7yXyvAy61zM5kPMJsYPBxJVr6zWNnZUZtMpXBPveazvBzDNvxk",
  "key18": "5ySy1hyV5ttxKh1nkvPwZVZY6ykYS2BoCA3tVyQpDuZCiBtTbz8cmebZP4UMoSxZ7ftRunA2psPoBaQUKVUUoQb2",
  "key19": "3R1kgmhBz5BPAESZ8bRo52NkcwhW9PUAofUMbb7HBPvurRtuGYP2dTHJdRcPRhnwxEcwy2wXGjnksYCtmh4XWTbc",
  "key20": "rgQ4fKNvaRtFw8LhVYcjrASgvEPvGdAGyKw1iWL1wL2axY9df3WtTjrQA86zA2DjxwgXS12CLLL8trCiPsApHVq",
  "key21": "5kNBJgZBpnDgPT3enHqMm2kEQD5PQ6LUsZUzyVXHhkopRsPiFwC8EuwtYBt1qwiNo4hiTLoCqBrGKmxdftxYhLtY",
  "key22": "5LJ7iRjoKcuNjXfKtFeRLVRwZ4QujnWC7Xnpzj7PAXrRQW2ic1ZYXN3ynRRYCTTVhjeGrQeNaVMz3gQt369y4oUp",
  "key23": "mPoLH9ajtTKLdhodKiN3kGXruEPQxGLNeicY37aVtpu1QB92PpiJpNoG84PVu1YF5Bt9nshEpd1Fa6xsRj2iU16",
  "key24": "5cYr42LqxmHrpkdXddf77iWYCijLgpqSKJJZ7tNHo3ag1nZrXTnvNKyAVaxohprv3VjScLCBuXwNyyNGNVtdP6Wv"
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
