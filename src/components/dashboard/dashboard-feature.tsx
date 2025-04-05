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
    "3yu39vAtWFs7buj78Kg4kpeu2QTaE4uq74j2ELu49BG57r17eqnDkQnHXvmo74TjbXf9yU5AbtHtsMWqYAJUWRno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qApo7ps3h6WTeLozSd65asQh3cRt476rH8YKYWMQfS28uPoSPwksJbLDsriVjNXVuv12MSfCbZQAXfpa5Wzo7tx",
  "key1": "5mPKyVri1TahpiZRBw967h86MiyU2XYuVJpmBpqqe3Nx8ZhKvSGZpyM6WZ91LJvgTphRB9R2AHXJrEBEXruuBvxL",
  "key2": "33jY3brZwaNF9NB1Mog3U5aun1sXU9QPqzjnxyqFDrLsPVXiZGRS2msYSzuhuHEtPh4gqpqDPv1c1HspZgToJeJF",
  "key3": "4aLJYtACNEsHZwN7u5jtGjVCxtortfc72nT4pEwUPzcQ87KgNUeAx4tbM3qtpEYYSqsr5FYQsjCCgkXMTj1Qv1Sy",
  "key4": "tiRmMmbTNsBM6aMNdpyNXLjPxyXRfRRzwCWgEmECzALLsP95wkwBR3qo9Jj2tHcV5LUtTTVovFCTgWcbqywkfkz",
  "key5": "2uojSgQpRBqi7YcDB6U8qBUrn9u3YBHMwtwGkHtWbcyadwXAhzmUj9xvh37hyxDGUHvKLU7fLKk9ddeXa2rDgfvf",
  "key6": "3GLdbtzgfJDJaynYJMRGqPAi6mzoQnXJXNEk6GJzAg4iYepg5ojHj11EsQvSygEE88g931sjDF8g6P8hGGaC6RP4",
  "key7": "5mwaMxfea1zFc3jtW6rR8dLeAnbqSF64c1PkxedZ4jM353RazwRY67GmHfEx5UjYZnhnNptG3pofgakUteyNyte4",
  "key8": "4PnaizxucSwJxm9JmV9SJJfAmowNmL7YHcSsZcmsdyn8Yse6dYFphZtLCyBrXrzJQqcY4dLnMQbc3dCuj2sxHUEp",
  "key9": "3hrXqxAzfXEWdgFyPsXvzpSiC93FGN8WMPb71XaT7s6oZYJzBjgZSsiV9zzMYsxrzdMNXXhoimAHZe7NTRQN7z7q",
  "key10": "2xSE2EBpGsRrsywkG4kWkPMPNW6Y8cePmfsATqG56qJNTBxtLjoAt4HBh4Gn9LjtegfirQBeTDSzEuB9ZJt4vRvN",
  "key11": "YWyRhsVvBwaykBW6M7iDT7vJPSoYwvSMv1Ncbs9GKaT9qMr4ZQzsyXmrYims1k5m156Ujj4HVWkZvKvJc2fZ8E9",
  "key12": "2WbwCaeSu4uN9NRG7sakYk8P44H5w6Wuer5HSjiefSobvYgaCHivzYB2SEtkj5AumqAuh1cH4odvuArYdJZTAuuy",
  "key13": "zNYzGUr9L4v1jG31Zs2ZuM9zvfmaDL4PRhp2rkBs5rMep5fTh5qHB3KN8jjbWcu3tmHJ9FfAdSmcka9ytavF76t",
  "key14": "4rjsKZekeMffoRiJdaMXgM6EqQZNv6DsiYWR9YoCsAvJHYG2wy4k51Q1J9HQmdKQCnUVVJTbrj3fB45mpHe56H4",
  "key15": "4xxTpFkjYwXTvYCE3R9jMYumX5R5X1KbVgd94aJUZPUMfbNtsEDwbRNVormyN71bT97SeyMmaG2gUs7UBdvj39hs",
  "key16": "2KuMAnobDBLXgadE2mVmFvGrkhZMY6wcwyUnGUnU4kGpYq9iUMbTvkaPJx1qgb4MqUKR6gCwfcevhbJCEXJSaP1f",
  "key17": "66UjuX1czKTxvLyNxujt3C7Mm4nhRu3L1LfiXGbLYb4P3ssJV4parzKfEGkP5JnE8cJYfz87uSrhD7QuUmpPieYf",
  "key18": "f5fc5iS4WTiSnwoRbpFV3Z7bfVCXABfVtQ7tvDyidTvwgHzMDmXeBxMX2bVZpgGfPhFM3K64Z6FGP2QpnVmnbk5",
  "key19": "nchFEmWuzAFPetas2pfSqWqc6r1HTZp7iZMMRMvUTd4AstnyRy4Wav3hF3Mvy2RM9zjh4c2wJmnp6Zoo4Q7KJUG",
  "key20": "5TDQ4o8AHJW4PLceQHWCncmJPxMEi5jjYaFb7HU2KAWabmk45Pc8EQYXUK9Z68Hq7AZrpqCkXXkKxZwoHfacz7iV",
  "key21": "58st45G6K7RohWCnbQ8PdKhWwdTwNqbfk3Bbbnrd8a8kp5M9v6Hj4bFBj9Y4Sj9geRZvEpgybSHsswu1RcA3tV5G",
  "key22": "5D4r7cDBz9fpPpaveK5DNtwrW6HFhDEXdy7WBoHvQU7K4vmFs1Q9v3xPbjZne54T4apYgmzWk57y1eK8FVgnAvDN",
  "key23": "38AyRwPYbqqtNQFHz1cV7eHx4huQQkgUVGVXBkmUN3bv7qpEK6fXB79LpC7nvhkzfG4qY592GeJs2ghTqFbe4Vj9",
  "key24": "4GnA3KKpBobKVnYiME7QbZgSczXKE6rEBUXWVaqN1PWU7p9RkuYqajJUFfscdBYn39CxGqXvsSnsZ3HJirJanwnu",
  "key25": "VXdftP3SuSsx4pPw5f1jrkwqDw71k4FMEaCXcvMJXmvmuMLMK2SqJCz5Wj2ogzzPnKm6S5Wd8FrZ9aZSQ6UkMAU"
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
