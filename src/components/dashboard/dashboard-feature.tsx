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
    "55gNCbeEjT1jMfChhWiQ7Lfge5b5oqtdNVSKaga4hzLu2BUWKBsK19JfrUCqU9pwMAaYKWfxKfCVCurdA8Z9eZGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DY8FAmQ9pxjJMU6bu2JaWzQJwhubPnUJyKaPQiwHgSNFt28TrapYNV1ywa5e5VArCX15VLDV2N7E4Duz8DPcnfQ",
  "key1": "5YqPDPaswuCoCib1DrC6e2QkApPE7tYS9KVBWoCqLCvXEey5J9WcY2RSH8FzDwgmpJYrUCyC1rjEg1i6m3oWkb47",
  "key2": "67B5BAfHNFsMTdH9kqTepFTG86QKya6zLBri7Gje12DwTNYjHsK1o3KJU8ocL9nuhxNUcARFEbbQsTqkK9kd9men",
  "key3": "3UsejK2oCmxz7B4N77UrwuNXuhUBCxo9CeucyjMEsPyUTg7qezxs9TgCzJaCTYiQjssVp7BPKUX2oHmYnpJ1Bucm",
  "key4": "5b84LqJ1oHWzPQ8psbXa94VW61iDDK7Tg5Sjv8p9V66P3SHj7nnEX7tqNvkw4z7FvXSRVCd8ACQ4ev3jAbdZgMxP",
  "key5": "62u6uregb15nvSEmPdS7iTG76WpnFgt6QovJcs35GvibjUuXzc7odkwxMx5k9e2F1tADpTr5TSK2WabJV33XZGe1",
  "key6": "48SbstNEkCJPFRUCc5yzBKdizvYh1rtjG9GLNKqDXb3Seff3i4s8WAyYeHYM86xYXQFW2QyqKJ4TpbAoAv5TA5Dr",
  "key7": "4UirEsk26Ltd3uxzqSMpmatFua8uQB2ygn3iQfUnHbPCYeyVNMQ3KyvyqP4NurwPwkb5hSfWQBZUq9H9NG2aJ3SR",
  "key8": "5EfR7rQRtK476JxkYTp8p36u8tnJ8dqVrkiynbWoacNiGHFnwh783BrzrH6dhb4hUX7Jp5a9QD7ZMQR9im6HYd2T",
  "key9": "3ZZfhgL5zXgcWyxx7Q8WdRpnxFRLmhTqFH94DeuLcX3jrvhfvTTNSHDoCPp34H5SkzwZW4eeQd27xa28RayrTkzs",
  "key10": "2TTVjNC4g5jppBtUvMLVtY6htHrNfEiD58NkaqrVLKg9ZGhmX8jsqZCeSWTGjkNxzZUvqpuaBa6iDE8NTLLi7Swk",
  "key11": "2SYMW1gvLy1V6ZgFL4ADZARCxkpEfPXTFgTkkPpo5VN6vUYSApoEM57fL6v3bDZQLzzqPyd2ZATjvdDVyc4C8PFT",
  "key12": "41iFQbtDhgifSw22dVKqwBPVMe6QgL1NvoERBdmLzW2FG5URdjnip2XkKLFL96MCnVCQbyWNj6r1viYjPXggbN3P",
  "key13": "3MFcyiTGdN4ygDDtrQMd31oy24gCd1Qgd6ktPh25tsNjcWsQUi4ywn1ULTncdhaqHyPrpFbpTbT25RN9id3G6aao",
  "key14": "SavojKwf6DMypWfyki3z1MBzXfVKifzH6Mz5EcHicSbrzy2vLh1Zy5KbKq1hvLddAJe8MKrRWejAuiMUd99wCxk",
  "key15": "3y3paVDyRVji2jc1KeAqT3egcGcCNHCQp2LBRckVt94BMQqimxzDBMXUARDhMDBTRtHqG6hrHSTexW2ZBeC8S4wi",
  "key16": "4vt2wtgRLXGLc6vVycHtTdZkmQGBriAkrfgXbujqPbLEcPVXBxsm9zydurzvoLCuaCwSnisN8RFVWPNSZrydjFYJ",
  "key17": "3bCEaNkei4xmu7qyZRmLkZBsSupbAPaSQGEjpywcvxTEnDjbvyQ6rZCEch7kw77aws5q7CmwpthHyBiRYHo8er2i",
  "key18": "2kZ1qwqvNFZSrdWz9WbEjNWiDm9YGgcugeHZXitBvXnhV9i29LkzuA2EYpuyKq4Pk4WXbmq7A5nGGqmowpFRfzDy",
  "key19": "jcxkkWYgEhQYVDydEmecJK6PgNK6V4aWYJ7ZgUucF8h4sTAhVKMNbvrJwAQNq7qhw996wNuLNhJXN9AsmruQuRB",
  "key20": "4qFN1s1v8Dv17Lmd6BPbqYipGwTSMz1egARMBD79Xgaa2GnVYHQgrsxk62V6qEnTdLGFJgGc4Eup3qipKmTJigHt",
  "key21": "4QcFiADhmaVArMCL8bWiScaXgDT4EHqWyzuX5kTZFne1PqS6hZY3G8YXoDxgoRSJ2yDDYuyUyvY25JXezJeDJNsS",
  "key22": "wBzQpYL3K9DATgPKvffdCNrdyNDmXczSwuKbwpbUCKPWEqsrTHvzs1xFVqYYJbeQwZ9Wfq96gzNDJ4YJxVvm3bP",
  "key23": "3uFd1WXBKDUw7GPK8McDp99YF4uWBEDBBQ17Mo8fKsMZ41C3YAgafU6DZksaQZgbWqtRNgQdXavqJPAmFUFC8dJG",
  "key24": "2Ka6CsTphL8cnKcjUBmSG8HDxehtv1ftVvoKFvLuWRQjBPNpPPNwJp4kPoYDsSbxPE32MtCu6Bz4oUJziXDMidcD",
  "key25": "4tXcHDr7fBchKsKzeQG5QFKJ9JJJRozTGntR5YatHZ7eB5QgfaPBCfCESjbwVB1U5zuPiky7TTbVeAzFgLdFqZUr",
  "key26": "5wQpV5cH3z6CbmTmtDcVgCczwTKg1QwwL2tRZMgQiNau7jbq3RtyfoZjo6DepavkcVbro7R4ruCNN1xvYQhuZ7bQ",
  "key27": "39YwrxgaYXmkjq34fXBfydJeE5L9wwkfeF9A2W6fF2jwK1CjbAge6uAxaJEyET7kgwpGPeov9r29NtwHyuMn3qgS",
  "key28": "61TmVHVTj3MozkMWD8sa3Yh5ehVfjHoXENvboe1W5dbzCwfZoBFa4cTuZc9hjyjY6Z5ucSHi1odZo7MqBTJ6GuVi"
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
