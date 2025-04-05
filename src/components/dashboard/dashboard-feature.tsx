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
    "9gXxj5ajEJXsuGkgqwvBECStLpBhCQn56b4FcgcB9EBMHeHMxNbwN4nVfffKfk3fL8d249BJzqpxJNp5rTQvncw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xAsn8DvCBWxDHR5WteFB7Avn1ufUjTEivfvci8qQApPDj1YrBG4xeddLHPUukhWtX9HGq8zW28dPsUsZnu3NJH5",
  "key1": "tf9uDopArzSjKbMfvuszq57JPbcUNX6cHR5oYHRG8f19Zse51GbJ1ZTLpboheuNoKLTgft9ZxzcSZa2eKgwKWxP",
  "key2": "5K2xtEnpmZQ6ikbvoRQ4wLq2MX2gpMVgJLWBYZhey7rdVMPNPNxvQaGxrDhWkReMz9igCB2T4eVPuZ7n7mxXVjFC",
  "key3": "s3md8do5pZz4xkWk1fKn9BqrBFUWjUTsR7XWj62956nKgpNmLyhaeMV8qCB1rPhXMEyPssuZzXR4s168CRkVjbt",
  "key4": "4xGMAk4eGTYJB159qzJ3Mk3NoFGQk6Wia6AUCu4xKztxWK4ppRVyHz9z7Hvxb1Xig3yEVbLWdKyachBKkJY1hxA8",
  "key5": "4hk5sXcbxtK43qyza24BASmCfDt6VAH3JtA5TrYK3jQwYbfVQPG55CkZ3msTMgWyidh3XMm57BL1K7hzP94fWJXr",
  "key6": "9kurYS8SfxfFxKFxc1wibW7Szbumb5u8v5biNp83QZ7ZhX6LHKt8Fs8miVDAGFwihmPU9VKJXmf2C4hSemMK4oL",
  "key7": "2FkDSrNnviWf72aCrnnBVuqrYFEoCBiFDoabL2GNEHVrdhAuMMju59ARgMSCE25RfZh9TRRqj6Rcp6yeJH8QK4AB",
  "key8": "4drDs6tWqvJGz5qbFof3xsxDhAGVYzfXnHUyEr6xPnAe92oNGfFmykTF817rVAeDMdRSdV2SnJpgwfEs3eCCnBrs",
  "key9": "3wciRptY9WoWtC7GJ75Dg2iwAtCSYNZEkLY6WZsxQ1ooWhFJEwTW1XEoUq2oLn9hQBBJjrWvmgiQQ1dqiNbwHXwz",
  "key10": "3hqa5NYkgbLUYhv9JYuV2BksJJrvNtE9zAXg9qARB58bVM1C6b31ZdT6xXZc9KMgcYdD8mKBn1iMyL95QTmbagcM",
  "key11": "29woz3fm8jk3KetaeNgHFYMNMyQEGtNBQKHoJSw8abmqadWeXLrWxQcHcBVCncX1BxyVMZgzvPa5TYV3LJjiAinH",
  "key12": "cusczPtRFqufNa7tCjnbt4TjH1fbLKz5UKzAw791eukEYzVXNndTrqsuH3Lf4auKW7U7BHssrj1fKA2a3BwwgQw",
  "key13": "2k4sfhhXp2djxqmawqwDgRFFqMN63kMByxCdEKckdgfePnEhkTkPezwq9Mpp4qKNWB73RF8JAZRQQNmYK3pZnEWQ",
  "key14": "4D9LvqXRPyVC4f8kSBCFNgWmWqQm8f1r6xAa74ArmWu4dshcMVcQmiLUaVRFgm1jHdW8y7t8PU9AQU6sqmQEjbMB",
  "key15": "jB7Ny82CqgeFTBGJBdwoe7X4znGoqTGMhowCRd479RQPC5fPF7zTZEnUSx3PjYkTSEEKay54LB6X9KfEREo3E38",
  "key16": "2v6cfvo1RDe8m8BLYEvRoyfK7pF62fD32TV2Hs4p4qg9AR6mXWj1KWyBoRJ6aiDjzBvbSt8WjvjnzFWufbXN3Sro",
  "key17": "1FPy8duLmYne6zJLjXMRfx2gb4xTGC2WgG4XNmm5mUdeXtithN7ZppxjP831kzo7E4JNH6Se3RUXyCnYpiD5a5K",
  "key18": "3JnRP1qUX8dh7UbTq4J1Qp4ERRCmJLhiJutArxM8zytoXmP8qiuwKhjF3VSSZcGPmesF9JMt7t9xuuvNiZpuzSFs",
  "key19": "CkaQG6aNZCFMnVporuL5UJB4G5gMsDmgFtPhscDFujs8jr7zQNnSdkyZxoWqtZgZQFtCf6rJGWZw9rPemJ4b7gA",
  "key20": "3xiCRmVdyc9cm9YNSQnMrUFHwmzt1Uxc8JiRcYEvqxoZjiRfdX6PgieWbpZtkFQxi5S49fM9wWtuyF5nrUKN2P7C",
  "key21": "3rURV2tDSGjBroAxm28D6aHe5WbXbX7NHo53EtvXNbTGhVp6MwBWr3wS6vJY1HqHr931TpBj6Ce6qfRcJgWLMTMH",
  "key22": "4r2M56ghwrP8CRY34nEtyTCJKkEfLQ4q44UCqrEa12VGktFNLzZw9i4EwNcj1UG1GSnRq6Lb72LzGqgqUL9m6Qxz",
  "key23": "L498VRiHVDUR1aNvHat1hh29D8wGFM9opx3GQt43z8qnEi5AE1tiKnfAztKuGxxKZa1DkTz1LfNZZKjqUt16WWV",
  "key24": "4XLU61TJ7s8SKzXWwvQADUE6Bs3xJoeGwMiySWr745CLn127jyXo3tGtFojNWDRs6jN7pmopAbf2mBAC9tAPeJi1",
  "key25": "3jDHVLGQgmq4sg3cSD5SUWc9kxjcGkXgWBUjVB6ducmkWnQVqwynpBCMNbGQLk3pgpypKpdc5Q6vR97voRPbCPAv",
  "key26": "k7GovfTR8qabCGyhNH1U7fboLuw7dbi7aYevynNbRFjt2VrzCxxbun1qkHHz672r96AmkEV8bwn4ERMRNT42wRb",
  "key27": "2fcpvScKFoQPyvEo7dVoeT3EH29uUKvcpgbwur7B6ZZhqgD68RummWXaWDUXNJ7RCpEvnziBdWvDBK6bATK6cUex",
  "key28": "5jAo8k2py8rqRKKMZc4mSWsd7Kq7279AS3HeThJw2cxJYTFpT8ufuyWa2VTTF7fnUCwFZDvm7aGb86pYBHJPvv61",
  "key29": "3WuF5b1bRTYuqEy1Qhcv633nC8tKWP37ecPbJj46qGtAGfyq9PU6wm4jMuqbbJnRSzJYLp5hRvGBKBfs1yrukCD2",
  "key30": "4SQV1SURBTr2r2n6tQYvefUdkqFBbM7r4XBJ5N5i3W2VjU61xapwret5rD2naD3vLMe8KHjwyE243HRwFtb8xrcp"
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
