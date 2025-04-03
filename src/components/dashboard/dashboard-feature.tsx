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
    "duETAYMQoPnzs66RJ8CU3iHdArem8DFLcnkYtTz9ePLHYVcb8oyNVNdQMYMzveboH7S7JqkPGTwKp5sneb8KnHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PFcCFJpjayRT81s3thLiEFTcdnCHMDkBMzqEgUmjtcg7qKW3CAG3Q6xcaJiuCeqMtAEPArs3d8K3FTsZjR7erWB",
  "key1": "3HkEa9XBx6SqLJaAwNqxUJrsu7seXCCMVRbokHa2ya1WBZzigx6EDx2Vyi62cGyPsb2UQojXMaNJ57DuoU3r3jhW",
  "key2": "5yUCsoKZpWUrPp8KwzLmAYUtmue1d3hsgM4kvDsT6tdP3CoCVPbNF7tra9g8KcvSU4tn8bYAGJo8vFgdfwFD1Cp6",
  "key3": "PuHZaYHgSwc8rPCzwfbEQcArsWNqt7pYNjRLKHyjq1JHBY2rBumBjj4mfASX6NSqPfnmfRdApRHdqGAjZo6uecs",
  "key4": "q4PqFCqGyMZX8n38Cv2a98HdidZKYVT7kjovsoXXhGFvwghR6PFHAXjom4GzuCeAWRpk1zwdHkfKMGrmVC6octF",
  "key5": "5xjhZHaRK9Jj57kxmZM65R7qSMwAf7zMvoTBS631sazmx9JEW8LbESYKrQkkP3C2FUT3yTpYWQCdhRSVXWpvKMJo",
  "key6": "3nKR8jfLujJMwFESSKoBKHNeaZxGxQjf7Fw1rUB8f7QMCpjB5Tow63jvzP6J5WtamwdjcCCvqGyfeqD7BN9YoYnC",
  "key7": "3XeUARHoCbsMuXDownQ9g1V83TRXpR7nZQdXo9qkcZNm1Y59pKM4jAVxQ9xw5pBGZtjjJPspZBfq1QKEVPSf8iKr",
  "key8": "2DfP1kzF2vey14JqwRujMfCx7TSbHbjxk8Fho9ExFsJvx3K9nHochZtyoYFBgs4qYxneFVUhUY8QffxwYqvitoip",
  "key9": "5XZUyziUYa64K7fnyfK7J9L7mTTmJfxDnaeNhXpBwJH2aDVXFuF79EDFLiU3TLfJnLPuY9n4y2jYJazTJK9Vezu7",
  "key10": "B1hU9tRTY1iKntUXGJY3LmB2ycxDMyz541dzjB8TvmML3TeXeDZcYb91QCxGVn7MWNM7zEAxJ7V9sSmq64WDQU6",
  "key11": "37yYVnYZwPkX22CTtouo39PmYCD6UM9Xx5qGKqzDKwbscsAEgcdW7uTFpPC8EQEqFCifDBUqjuoj22DufMjkdhzd",
  "key12": "4V2ehUkPwEvQcveuj9RoSzWv3JYUiGdwxW2hJwFyodBpSPbS19pB1DhCPAqtvRfEmkcuQgB67GLmPfPx5b36ikEq",
  "key13": "41N7XJD3dB6SwMhCDq8Df1ewX8bZvi4RxpjDMn1wkR1gGNMCdon1UZUJ6MvxBbLFsJ1TdNhpPAgxUUdKDo8awpUr",
  "key14": "3ywgvECnYfR9CLjwhB8v4mDuJ3asFjjNqSoFFbfDTdvivX27Yb3kRFYCzvGMpwNMJDfH1nnyNagkHYRCd48zbgbM",
  "key15": "5u2zyLsodNsFSnvqUjLFWzeyQtgoJGxZ2Kr5ZGyf1v5fCHDiqA7H8cvbNRKUhkKVH44UJC5ZfUpVRdV5PNiQTUkz",
  "key16": "56NAXe1MT8GRt5RNopuiePfdnqRucRsbce44PRaoLtY2sAwkvxcqoBmvv7VGqV8BjgDMjE93k1AhYPE9WAKC3vHs",
  "key17": "5xRz8EyCjHtRDNyGMNUDQdGUj73oHYzhun6t27bPjY5sFdSeVif9dYWJxKdkxKMLoERg5g18cydUJ9DZC3NVoj67",
  "key18": "3Ghxz3VREWMEiU3LppPjsDD7jbooDx2g5TN66hx8qfHr1g9G5HSudz9QKiZeghnoBX4KmQNo2BN5mYP8z67KpthN",
  "key19": "eWSZeUa8JJb2B4uWab93tZMdtyhfZjm1YfFYwPkgutmyz1k54SCouPXXqeo6M5EwBfXywGTGfXXeiGzNNCfR9LH",
  "key20": "34cswYxk4jeds988ZtdKDRFkQJpVXqSKcixRMi38VjcwkANuLPKTLnhVqLQfE1uWrDAhM2ekx7pn5kiDnpx856ea",
  "key21": "5RFU1G3jdY7XTDb7wN6hhCuaUdYYPNe7XnmneDwS4qejV9HFX6RyhE9fhwtVxZeXVT4FzdTPHrR2hxmArzWKYNJ6",
  "key22": "3GHEstHEWfi9eL2A3JPEFJfPNm9zxVjEQCdStvdXu6LtQVuZ91iz18EDRNd5DEgmfngjsc4xRNooxApC7B3ecgF3",
  "key23": "5b19g9oh47FhRpsaWLoPc5ezesH5R6BxGDX36WfrU5G12nUnZekwZyJeBYTa8WqUPJJ9hhGjTe6CaRtuaVB8yEVn",
  "key24": "2Byr6piLvApshYLBPWgvNK6EJvuYwDGdqeKKjoTZhjHSQTwviX91pWuGsYuLULqb27fWKidHL89GWU7ZhWph1dfB",
  "key25": "3v3CRhGAmcjNmFGkQSYmuxDBj7h6CSXMXvtHKJn8X49gWrQ6bRQUuAgThparGkkWj5RXyS33q5X3cS5W2RCPbThQ",
  "key26": "5mCTx7nwoJqQNSL924jHhsVcwjDX8Yxgk7xvsvVHEx2FR5ynag4ZD2ZQX7Hh6WpS2xTwh7nnc5CWRmVU9jzMTT7h",
  "key27": "4vnvgRbrvoHXH5LbzzMZnz7Lp7QS89Qgu5a7r5ZxRbLTYti661sQ3gJC6THGkXBBn1CshVPSZ1zPF8zm6Kt9J9Mg",
  "key28": "3spmUNJ2Hw1cCfRFbsd1CxPPtt2joi8oZrw9erFB9xWS3b3aHFHdKt4tbfu6DugwQoSFogb7yyVf22C7ug2sgoGT",
  "key29": "4u6fwyNKe5qo4zsJPo8g38ELTG7VRAWQsLSyn6euS9LozkEjpzH9KXeb3ADk2PdSKud2kt8WvQMKZ6TQGRPJ6h6H",
  "key30": "5cjbkPi8ksG3jM5fUWjNuEohnmx8aJn153JeJJjSyHJ2cddYV6gTP7NQrcfuGCKPyGzJ9pvzSEDttfBTFr6XmfiE",
  "key31": "3Zsj2TTPZiwbU228kNxLMVmdZBd8TfVvAFLx2gRFXDjYrEtobfFULmgTjb2Ru13R495ZziLozpcJYdFXwXS96XTj",
  "key32": "5381d1mnNtLdKqEjfvR4pyJG49eUo9ioKePT5pw1x3CFdKCWwvBWeZ7mDHbv2eKi7mYY7goMrmbgUfmRwUMGZ4As",
  "key33": "3wGVpRMUbAmwAtHoGu9fSSAL1TWm5gZBvPcEo59sVW4J3ReHT3Cob3mvq8UoUcjie84EawdR4YWtYcCyCVtiHZoW",
  "key34": "pt7cK4TCwwynTkMEpBsWbGQZfGWp8riTj9LyVszfTLbfw4rGsoubhcDBvhZGCbQez4rHKuKv8xhhBL2Do3WKctu"
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
