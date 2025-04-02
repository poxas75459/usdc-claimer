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
    "4EP91FY9NyXo6ogJaczPU8dbjJS8ppB5MrihmMpW7Zxpm4eoDikew8kErp4WcXVTiaXEn4THKHqFd5F4dqrCXh3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWbTZnoSsuivWmCj8XWQJ9nXy4MsAo9CCU3NEF3LXBHChpaZpWqRE2ipXmQaCB3Gs1KBjyT5jNibTNzVCXzBJcu",
  "key1": "2TcqaPD1vmj3dD63D8Z5mPuUuEdRqdrt1rUVHQiHwBLPJeqiSx2MSq5Z3hmnc9bHuHBh5RHdQWVoTwzH9U29D9x8",
  "key2": "4fofVpGPYUcfdChK5rSo5Hm36xpKrVCgsnpaHs8Joyu3PMYWo8btmUVfU2F6xz8Dtr17qd1j5ZHvXLzSAJKVDhaX",
  "key3": "fqWKF7UJidudaezpX4h56wn9E7mpQiMtNTkJG4yywvGQZjSJwSpxi42CUukhZt7aZcCp2y151D4wTitAFka4YL4",
  "key4": "5tFdVB54tc6XYdUXzRUhQHJ8zUfhTMspg74sGXK5AJ3W17jq1Krwmrnc7G8Rw1r3aKtq2LEqUCMRFaznoUi5tWmQ",
  "key5": "4HGDr8TTXbccbrtk9428i8JQPWncxc5hQXPUaZ48TkaGhyMyfQjq6FpWX3UeEJ5kJ2whJV1SCZJC87sGr2BATw8V",
  "key6": "1jYCS9562bTfWfbkgW5s1SgzmpbZkuwnbXd62b5F6THZmgQ3SJNsBHCn8zsHjcrEch7f3ewkQSE419qaGoTyaT5",
  "key7": "5eiNMRs11GmV5whdvoCxsgzj8LuW6vYxUS4HGC7Z8FUzG95cm5TNDxRrCc1XqDYPHs2dzv8DLTeg7qhjb39G3AeM",
  "key8": "4DUjoz574aGqPTV3opFoGbZG9hoJ24PtrBqv19YFgB8FzvnFkpjdvkJdiWSrFRBVYsiqd8AqAFGJZBPG3CGbXCfd",
  "key9": "5tvuojBvNBvRyTqjnedwBeXwLLSnkRa8da4dGE7mgJ9JfPirHKpbvFFAdx8WQZeAYSpzm2ikqJVNXB8UFuPhaRiG",
  "key10": "4Kz7sbtnLqygKYCrxdF6sdkCPmLaLi2AJQwQUiBqNqqGYXr6kDgEvm6KdeVzkjPz8kAEDmx7nLSSgbfmiRebvgQW",
  "key11": "2ANXw9SenBKE2ebW8VUxqtphyTYDMyeikGDdNEjUPsExWQsaZGsZ112FNwjmR4n58GT89N19CJcrDZURiZn6w4kn",
  "key12": "3Czt8xuKobwT41MuvWh8HNHkMwEd4D5bwrm5JhBZjmZFx84LvgTEk7kenzkrUc1RzX765qGUx2sbd4PBb3hbRU65",
  "key13": "2XL7wxkJqpfxJRa53C5jj4r6xNv2TBiJUq2aC53s8UzztxbutGBBu7MmjN6EqwXfoUCtQTWZE75arX1jLPSUPj9P",
  "key14": "3Jzf6cByx21cV7tGk2dK6qwgzfb7aMVbCLvup1cbs5dmYbRxpNudRsQ8TU6jipj7yDsxT7aKyKoRBqjC71hprGmL",
  "key15": "4u4wVvTNrTX7QjyWqURGZ43EPpyhYCFZrpdgu1G66J3nzrZqP8pGoZ9aPXGm5L5czbyCCuHRU36mN2cxdZh2nDPQ",
  "key16": "2JFz6eACK2zT2JKhHe68P1aBerLxNuUaBZV2wSEUMT72TkJR5hpHPpayDXxHUNxFUb7t2Vhjkem5sqAwrAEMRa25",
  "key17": "4MajnnabBWV2x2CeX7dtu1yURjHJ1ew1w8Ni4i5X3t3F3foTk92VaAn3KobeuVmzra69bw54PDr8kscENgs5CiqR",
  "key18": "4YHGQohvUJt65cb3vqQPCjJ8PpQmt4KcoBnKqBq9tJ9mRCyUgYH1PX3bRHYokJzipYNHg4othhKzkpEbbxyrkiUZ",
  "key19": "35HWN5XXWTbxtVUv3zi4K9mozNBV9rcYzBYv9rB5nbbiZ6yastfxeL5nkwc6VP9oH5mPUW6A1iJ2KT2nBrDJ7aDp",
  "key20": "37nqrBayXLBbWCgjw5LKpfKTJLNyFnrYE5SE7Sk3KwrEDSPA1DAyKLbYijKwz8MpXqrkTeTLih1sXf2ac9f4NCHx",
  "key21": "3Hs6mmzQac3aNNok8jSXow2gZVYtj1e6pMNn8xGj1tEq6uJ5kpojrEjxp8L3BANA2q9j3VzZxGaiD7NNu6ACj4C2",
  "key22": "2eap46X16GZrLcVf6gEnqDhmKMjLBpgFGQKvd8q6YU3uqjntGfLQVDLy2RSZuqqHB17jHcsTvosjeHN3tSZYvHdN",
  "key23": "5DtDAu2VM75UTS6ZMKrNnsa7DqZCCYJyLvAFGBVPdFKcpqVkjou9daMgoimr5FUxTEMWMsggVGq2fpZxveiDQU1y",
  "key24": "qvxDEQatw4wbNhQ8YgR26FYyjeU8eLcVpgrBsh37t7PchpadfLxzy25SDXQPkZeMehZqUQ9Dna4ztZqqHnWxDRP",
  "key25": "3WDBCEf6F4ubbsxGutyRqsbtG8mJwz4c73xqwpg31CnHFbfHxCUkwkMA5Ajs3Uw5iWEawLbsfNA1iJ3L5LpqiEiy",
  "key26": "NgPcjGWPwfKENfGtG9Kt2LM17KkHKutvmGeqn3yuanXUPsQxZ2LMNZ9JUhC8od4X6pYBCSsrncyzzyvJVNP46hJ"
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
