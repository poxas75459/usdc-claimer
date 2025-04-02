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
    "2LdhUget4tX1HhtQQaT2SVsixs5fyMiaoGJkmeaaHsgvCodak5Zb8f2h8F4Jd8QDgHi7YYB5KkDE7qtP7srhHXkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qH7fEjUcu3K2v3Job1BYP4Vu9y134xYb4bWej4JyGQTEAdVn9Q9bqyhyqZucEcKhBn3RetTQ54p1ukdTb5QE6y5",
  "key1": "2TfL5pSwUZYgtnyxaP4GbpX5gPf4aN83UULsysnxoKVx8kU9HQvpJPT3qjQxi3Z7peiLWZNCFDM38AhDAB85V6du",
  "key2": "3jwzaJ6m1xfbKm9Xva2ZcwxJ5PbYUNusju7M8ZmzmNSTRoWMZNuMvhPWaK4XbL5W1g1p1ny4dQ9qKmSgb8SF77uB",
  "key3": "3mJLr2bcQSqGTde7BZEyRqkNeLmSpqpJrgB1ncX6opTZX6db8jAPxsSB3JCgpqaeLcdwQQZ9mz9apJSBQm8nrRbN",
  "key4": "5ReAZHf7rtNbh1KExujWWBpyUChKi9rzsJvLJGkCPkeL3RxKWAWHy7rWVKKieSEkY8zQyyP2wcEShcMSrr39KsUu",
  "key5": "4o44HVyBLUL1yf1UFmgTXkGeegKfb1hovVKktY1ik97M2fnXkNnEJaVowWiwK4aQXxPLpAwynGCDdxq5kSbZF4Cs",
  "key6": "3zvWPYWmo82MLb14vFj6ciP369TgnvQgUV7GxuxtaUgZgygkjnp44Qt8jkDXQwLcg46eYXPxNZkcZZYwArkrki9s",
  "key7": "33rPjc3pijNq7DjiTL7WKDRfp53hErtVRzR1Tks5sEqMdKW1zX1U4qVkKpRgHiAc3SyY5k2RYt1qBV2GrExS27fU",
  "key8": "48jMYW36Mfh8z1xTnKBw1j7BvadBjM1DfVWjsmgPivKLyTB6UYAczR9xN4cmwm8pxvvmsHZMmM9hjFiNQQhrN4jq",
  "key9": "3sL18nZQXqGCJGQRGMDXTWY3ZzF96uRtK2qJxkuJ8J52gGW6DgMWbsKLjUTpwZAesYHXBfcyrsjBHmYNCzpRBeGp",
  "key10": "4XmEptSWKaU8gZJC2HwMhkn7rRxsNECVHjSmA1qh3ECs2786AjAnov5YTqRT9pJ61xjSPay8Zz2RzsvDsgbBarSQ",
  "key11": "X3AoC93EBkexNW2PUPZPwfMxRoED8NCgLwaPHwyQPydxXhRggLTZiS1wuDXjbGyioV9YB2eG5moi3USQrhKCGPb",
  "key12": "5RWZ69EBcFxW9iCy1yibfpWVswQe9wNbKd1Z9y4G5cYAZWev2J92TSRQyz5ZBtG2BDAf7MTc23EcYCi4LBsVPVqY",
  "key13": "2JyJ3zZguzToh77wsMUQxwshAFGnrfGbeYUb3gk1ygncgDXrt6xUGB99Q7UjRskm53GNguaHYUD9PEBLo7E7M21s",
  "key14": "5xevne6MPG83vRzfxcg7qRNJC1uy8mHtdDKKxQ3RAFXzH83oX8y3B9wfPBaEr3fwbbUpWTjCVXRmkcRp2assQmX2",
  "key15": "3EwjJdezosKR2hWad5G9rxLNK8Lq7zn3fh1QnypKB5KJ4xDym2AYoQ6MKGaPL3VLvYCQTgjXxgUfZJdQDmP8N8XC",
  "key16": "5x3TGVBu9y4VQc6ohJozUwDtRXaFVvqDyRvndDh2TiYGPrTUdAW1m3LmnJRmX7eb3GNv7dmiRF1UnSKwJDSWvejU",
  "key17": "5Yxr2u9a7ng5whSekFWKaMwWUApmiuMRRyfJR2kRKzmVcuZQi18GmoL8dL8Eq5FSri4znboiFdEzCNVDvgbTr42L",
  "key18": "34miR4nMHCwakbxoHBKPpiNF7mKt2rutPMRgY9zt3uddwwxptsimAMUWHnQf4GyFxVwdYWDfcR82FEDnPJDmqXPW",
  "key19": "57ieYTtuzRzDzupn1LMSjCN8bdjL7M5E78j2CX6URaMtuFXwAW2Lqsu4PSo6afH5UaB2Qb5R43xZyyLdtWnutuqL",
  "key20": "5t9TUkVNWkB9wKAXK2tQrEY7hKAgyE8jqzcokoye1mSisdY6yTUEUK2hZhFt5FPU4RkzwA17wBbZwgijupcjkjKJ",
  "key21": "5cxzgaVvzEUYvUbAQFGNBqPz3CGYchBYMzpbnmwv329dy4uW9i6uGCRBep4h8ajs7yWm8DsF71fJRRNoF4hC3MtL",
  "key22": "3Uy1Y7EiPRQ6UAYTPZsU3P6hz4p71Jgf42EdgmmgNbMd7d79YdUerCp3aUqLfSjjZZEjHG7k4XJUJQGW5FgXqGUk",
  "key23": "3Zcf1qX7EMx5SwSM6BJms1vhUA8EUV6YmNpYfR9V79JaDsoGZYsprd5uWgfaPvdWfkTycjDWj5UV2BnmETpywiBT",
  "key24": "5dKs4NATYpSmQW6d92fysaFy6UYHYfDq7SYm49qFvim8mUeabBt5bPZ15VcX8V2gqchPe2AAmEmbgy6HaHkHGmTS",
  "key25": "RZ1AgtEv4zCz5H7Xwe1HdAtwTeiiaDPkNso7uNKJs4B9qgh5A4ebQKo1pjttzszwa3x69HrV7hUpJQhqiayEMaf",
  "key26": "wAJH4omhpokzCbTuqm6FBihuLjdbLgkNPKTJLrm3RiiCf2siU6ee55jQrsdvkfXNMfpFQFVd88wNF2gXQArzPDs",
  "key27": "36LGssmn2JNrGVgYC9bj2uJH3eHojTSu6ZB1mDY55u4q3oLDGWakqbzANvy6A2w1T43Q3NbnEHhnrBUQnCAPQHaW",
  "key28": "keAmmZ7NQDasb8VWbddmtCMB4FduYNJAZC2QNmiVjZ6BdaUT9DYQvoGG3vRNk9exWgCiMstPyRJ5vEgCyBU6oF5",
  "key29": "37JFkspgvhh7SNFbCTsuMscDdiG6EKE92oJKDQifxKGqd9aMSSDvferzJstv7nAYmNHXFuNZ2iSBigqCnrGtcaMQ",
  "key30": "kW7zv7XEKGSXKceKN56QkDk8q4ZxNKXsw8DcLdZj5s8QRisGun3w3FPr2pnE43SMU2opkuvoZEggyWYvP6tTPVV",
  "key31": "3aKUdfcBTyFbzmxRh44Qzt1CLzodNhE712y6KrqWdNCemSunuvqiz83wyrH3QW6vHjZy5YfPidfs6HVCGr3nVsDU"
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
