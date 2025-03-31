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
    "5dPy849cucvWnzkZ1sMHmFeJu4EPB6oz8hUr9d7X4BGXB98D1a8AgnAV3cUFoG3GqeQjKz3UUQtG8EgwAhHgJChC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwfeEZUJCV1YUAj6P1wzXseEky4s1yf6Sg8Zh4dbKw7H3DNQxEm2rWcZp52fhAe6MSJRTvSCjGwa6sS5nTow8a6",
  "key1": "4aPT9SmE6vbVqX1X3J6Mbsf8aGUJPyLxJcy7a9Fx4gayUqQLApMKpJeK4orWbvVdVP5ramAEvCBtmnd7jb4CBQqV",
  "key2": "3Q8oCPxW4vGnzRTpStAEpsd9KUYUEsDVQFt6PNbEx1818SKTmHmdRGiw9vT3KYTiQctLKHY671zM7AZTesjQJEAs",
  "key3": "2vjBQiY3j4WJeuqqdxCRTguG4kMXvdwjtgX6F7SmuMjhUHdT1yqeAHZHaM2po4RUfKCDjRY11zr9zdoCGQ8VeeT9",
  "key4": "4MHUATU9gqKf9h6qRySjbRe42wtjsftVU2myv3dtTvaRpfHvzmJgPC88aoMU2cNF2brAhCDPkWwoBUuE6tZ37ZYS",
  "key5": "4BJR8M8cq9qVBCi82P8RMMbicN37KwfYykfMMwuA3QsDkxbBYNoEFw3GAW1CZbfeyBK5ynyBcD4iYhgCQnV6tiKQ",
  "key6": "5kPdgivA1xcuGnkr1q3yZp5zihReh7GVURojeiujRcg3SzsYRiSH9vReKCZn9cjzUinpmXtg85Xti1FvYzReZxFf",
  "key7": "51L7Xd79Tq6wSQXdStoYRXAtGKqfBcoo2UGiezmia1zHBVb3RDMsG6LDT6N2UWmJxrqKpYcrsAqkkm4Zvr27M6qC",
  "key8": "36SuDdnaxShs7WVzrQBQQH2LdZDZfF9VgEjewK2V91NMr6kuamu79anSn3wY5LNCfx1yJ1hJjW3VGqpSCdpp1vjR",
  "key9": "5RfvZjLft67hSq9He58m7Exikei6dtaBA9BzRKQ7ZHNLUpUAM75CsbuRhWpVnJudbVaVqBomCWcWV8queJBceCQB",
  "key10": "4vgYBx6vK7ZbxEdLb3JwY6rxfCkaFjPFjPvuNVAvz17i3U5yesXSAaqdMaW91tygyUmN6AYGq5ATprm2JSqhJ8hU",
  "key11": "5Am3EYuTKXdWcdXGAcHvboXJFpW87qo6JGpDLMBsyaWs1cH261tJdo99jVNzTH3YSdfYGCLHx3JATLFZbL9mn6nW",
  "key12": "cDmNPvkjeg9WvhwcLfTGtWVAD14xcmR4hw9jQyk5Ckxs7JoTyXGebb7GmZge184YCZ3dD8bP8FPgq4SMJf7UrBt",
  "key13": "4hN8DGHDL9A59Jqg9gVpFNcyRUS16ysnL5q8PQZARyyskk9MDj3RpNiE3Dv1jVffseGoJvogCT8C4omypdMj9zJB",
  "key14": "XR5VyuMKaTFXMJ85sM7GHcRgXw9PwthJpkkdonWqEf7ezQRZNHi3Xtx5VsUQF98mv4yhKXXMrDSgwy82z9DqDip",
  "key15": "2V8iEvCL2i9NLBfKx9NCskUXoZ22wYBvTfoMERTxkhKJxdn52Q22VSbdKpggLHLSKdfDRdccPQjUDtq7goUqogW5",
  "key16": "EzLvCW8gmyxhgkeskTd4AZBNZT9NRnLbjuNUsLvMJyWpJQicR9nmdN3jbBDHCUQxMM6xj3wkvGsTd4PXKuUQoeG",
  "key17": "r3p8chDaSCSo7vdm2i2hQHpRBoSj1h21EeqQmafFUQp2WVxsQ2GmcRoTmKVZ7aSLvCCeAJZz5ZUa7UrzyBmGeer",
  "key18": "2NYcase72wdwimCjLznmEJHcnMYCetsLxt1P1vtF4PaVRKRUiumyn1brxdnMwC2UJCRyx7z5P2PSZvQSUNkQ5uMd",
  "key19": "5pcpmCLcShSDnAYHRwjJXq4aBnftYpprRAv522hi6rKGu5qpMRzh3hDJ8U94eB5KrV5NsurZfKnWVUjGeVqBEpuY",
  "key20": "mkUg3q7bZYV3NNqMUiJNziNTUoYUEYW8TfAqDxoDtSvdCa7AuebFxsKRVnMuaVChdiQQ73ZzqiLmjiDf7f8ZnPN",
  "key21": "3TtZM9N8gtAukDBhkVnRUMrb6x5E5PXsdsbG95USQBJedWT3om2iyAj18aU5TESYU1LpKcoRqVBzSd2Jh14uyFWn",
  "key22": "3q4cawzvnzXzURGKyuvvqntfkpSoFqLtLMEwcSzHLwDmeS3mJsvrD3jF3xokRvqB33kpPhyzuJF4ZtzB2wcnCB8H",
  "key23": "3hPW3vq8T6WvxFGZ8RVApDmTzsfCNshyi6Vv6ni7UT7ywZEbRXzFBDN6tJWrsF6PtrakwXKbiatnsM4kj33HMrc6",
  "key24": "2jHV7CAEhzTh7KgTzhrnKRf7J8GGAuN6HovDD6MSVWMfA9ZKSY9VvEJNHd1VAqTGfEtfi9dGT789w5nUMq9G8C2j",
  "key25": "bqVJoiFUiZbSGBSSUc7L95T1wGfmfUijdYisVbqG1GK9Fmi7Hrn451nKi7EKkpJNBb2f4yBLKLqr2u9dPxWpSwJ",
  "key26": "3xVorSAxg3cPKhC6hwq1ZZJQzM2cCCxbMbZnx1szyRjV1GgCwt5q2qHan7DUbT183QdhYa41thn8YxvTc6rnqo9z",
  "key27": "5U6LDMoxp65Cf7zFaevsi9NmYcfZ11XF7txGKDuNboGCNKNTknEDcDttKZRx5tTW9pocWNakJg76b6THK2eDG4Fd",
  "key28": "3dfnL1ZgqSPtvmeuPe8UWvb5ATJmeuid7hMt6PX3fqVxcjkdCo6wdjkamBCWpWuYjhKfxgkefbMqJfurKu5AWi2K",
  "key29": "2D61bRr6MUdfJuUJFqS8PaQyQwLKEUaRUE2M5nvr92k4EcXU9e7yx5zfgyCF6LNCF36QAMw4KtCp1DASn8s1TG3",
  "key30": "rdMdChoZhBZiFXyHJkkkaYPeEsjf9FRFUKJ2W57JtbbnyuajQoxYUrDfReqs2GUWrosRHBLL4LP6jH44zF1g7z2",
  "key31": "5PncKAjekdGhJHCHVri8T4ZTx8xew51CV84qYSsnMaSy4G5ogjz5Bv26beWkAsQKJuFeSDLT7tUKHcx35EqhMyuq",
  "key32": "3gQYgVXgKzv8SVtnKpsXoeFgvoiFWhj8ZSwn2bMQLm8GcEE6wf7BX4nQzTAQR6PFwZtaHASDhABZWLTSrgBGDz9W",
  "key33": "2MpRaK7fExmoFcWwXg6yPBT1q47T17caEPcYprBWNpUFvRqt6RZJPY7x9CwoBbQP4F2BVM6b1MrwyJb9PQ7FoTbS"
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
