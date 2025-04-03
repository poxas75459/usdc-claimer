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
    "5jXCd9ELU549K17v9ZVcXVT4cbXGzKKpY9Y5bPi9pGKhL9nmuxk6TV7MQSto1WqAC4x44jr1p8PFmhqNnny26Jdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3265ZDc1V8SbXBJCGhb4qHsMSnhdkGn86AKi4CoGbNs5yBzAsBZm3Mf65m6cZY5D7Rcn4Tan867KmkKSvzbaaVcB",
  "key1": "s7mgWTcMRa17AfikApXzLTEW53CcZTpfzKjELRFjoRb8bHLZGescjVgHYTgMEdvfiNByR65Kuon5c68ARpkvHgg",
  "key2": "3xgRhDVwN5fo544tQ2RapWGyZhcv9ah1snYFvxPnCKQ8Q799dwScXkz9u6rBBSSkyBq9xYKUTJ1kKodjRQt97vp1",
  "key3": "2wkYoF3N9jVbWXFftLWghTxtBJfYZmJgscw6kmYRQsKd8xs9nbh14ZheSwKR3drnUwXSUSzD3DySMW8oxUZdQEit",
  "key4": "4apZCtyPMWSDKv2nECVHRDEritZKeCAdbnX4HWqYJuFbdQmUb3cesJoJBvfCugJWCxSGjqVVZKKAgsh1KzQE3LRc",
  "key5": "bA8rJAL7tof6xJE5cBdMN1wkNHKeV8xB2w6RXfN1X4oQGGF9BxKYGv4dsaXY6rhHiyYgfGytyRffQZBLhirJT2Z",
  "key6": "397uDxFyE3yCtMVER3q1V14Zum6q9LMzyeGeDnpb1gq8pY25MjzvXi6eRx5qWK1Z1qoGR6e8gC1UMVmGrCnToNp7",
  "key7": "5wKFaYJASmqBqkNHKKexsZNTeHKmGzsXdWvqQfgWFZ5SRkhZpzTHbtLfP68oaytMnVwWmXg9xdEoMsSkqyRXGJwN",
  "key8": "4SAJzFKobT57uS1HBDZCa3Dc4ZySTywbpD3dUrtxgrMpcFDHaktSeRRHcpMM5e8KsAwFzLKGbZrUwhgTtSki1BRZ",
  "key9": "5WuSacXWPqRpFqzcgkSqP6mbBUS48ARW11qeJKsgcdwgTVNLx8aV4pQGnyTLDeeJqQwkepL8LKnKiYnPgSeJxm5t",
  "key10": "3ryEi3Je9yTpvaAaMihcuh6RSuu5RM7czuqdgSRXyYdfXA2BzGmck2RJSUeBBAj2VLKEc6FHAzAY3uAgR7jNYmUS",
  "key11": "puUVABL7DFvJFSdA7Hi1Mxz7jD1wS1Ve85gYu9qtfMi1X8TGHTyiZKxjZXhBX1GPncgydUA3fevJujh6vEcVuFg",
  "key12": "kdKoyYbpPB6YMhokkyPv3aeo8HiCoMBgDEwtfWgBSRYC6BQN4sKFfHeEWUkdHrhmkjZ5z1Mi2566Q1oL6B6eP2H",
  "key13": "1F1PgZUcZbnsBfpUz5bEvw1rgH1o9WtaHReaLsn7v3QvhPmmcFXQaMvRAAQyYv1arNdDpCuwdeqae3onWDhM24m",
  "key14": "53HCYnDKKR8yTVipJjBi1wWbtuRSzuxkdWG2v5PNWA1J9v8axC47VWtwQnCuXQhqDRCSF2PqAmNN4gsCFEDKrk9L",
  "key15": "nYv1HQrYwMHqEfkRTDgD4hc1MVbEu2JDHhoVQNhc14cxfhbYbE9twNLkftP2ttryQc7uLDKWUGqb3Keavw63FDa",
  "key16": "5NxpL4QncE4FQjqpSAKDaLqCA8ccrJkFjueTspG2GfsThZYWfLeQWL7Bn4u45cCGJC7ZYvKStocdESdi7hQWHVWf",
  "key17": "2c2M7qowXVRfZSBnV3CkAYudDY3aWwhWJYKvw4ufWvQsEjSHremRYveMhqCSwqaNfb2KbAu93jJuxGzJDsGewSns",
  "key18": "MLvVUM9EZjyLN5JmKgqncLqZsvXdXhQWYn1AxZPSJQxDnzH1qS5gH7L2dXZAS9iWBGWT3KufNJ8PaHDzZDHXvZL",
  "key19": "3ERTD76T2uWfcrwepAd3g6VBxhTpaP4YBiZsiGMfBAEA2MgEHgEM2XBey8HsiDvSi9Zd6wYsQdHKewRmCyR9hj3E",
  "key20": "28933Vbc5VMVZdsDRgBYWZW5W2PNNthxJEF96cREfzDjgDm47PXvYmuxdm2fpaFkJR81vTgBd7TAYNgKoGYdV4Gs",
  "key21": "NGChTvqd4NgojBNwbh9UkHgHdLZ5D4ZP5apjhAc79Xeq4eP42Kv2HqfkU2xLxkwPpuf5vmLYYSHc78TXPqpBJ1E",
  "key22": "49tXB9grqLqQY6LUTRBxZvBz3ZJHs9RFsA9YYpDphZXsUVWiAm1pbjQBsCoCMnPccaCzA9J38VUo2DfhHCtPWZCU",
  "key23": "2A49tXwitwCzfsdFSRprSQFzqrDHHAc7PxBJUNuqdo4d3FuSCXJc3FFQRHzzP6XFRX3vftKFR344xXvMNDkvfdkX",
  "key24": "4KSGvKVkicV4W8cWcm5HDTbnRCmUMh8maQR3o2eqBBdJosXPk8dNpNxmqKY6kzmCRbj8SxD8vVzi2kcRophWWbWJ",
  "key25": "3qVvv3WpYByJ7pJAafQKR6piaXwYZgqw6JpvVUg99fZ3a5ZACSXJAQ8t7eNaHwhsxevCVUdpk8egD6HWrDyzwsHh",
  "key26": "5q24a5hmPL3bEeRBZjmTWw6tAn9HSwce1ZSzyQkNGrkvtNxzHeQMapuchfwjDVN97cxRULRXmLqmRHh236CRsA4b",
  "key27": "2AYQpTmrsUqTsKj7RaebjdxiFgb8r8RWnADUkrny99716rgU4d7nnMa9Qo4xgMe8SdqszrYCAsuJpY2iYb3UkoLd",
  "key28": "3bpa1NyNcwcsGTPj9x8KCfcQAeWZpDgZhs94eEeFPZRzwutUNEjYN67m8cDfii3rgWK1hnsp52L582g7akhtFn53",
  "key29": "4s6Sicwvv81JN3WvJN413fWfj7rMrL5XcVLxsP1ZDrJ5cr65LaJf8R6XvpWAacx6diohstVDbQtApgjzLXcDGTcW",
  "key30": "3rXMLpKnMdET69vh3LwemfwRixTsfE5dpq88aTgUbhffmhysD6Ei2UPKoBdo17rGsTuUZaQvxWsotmSuTpKjSUve"
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
