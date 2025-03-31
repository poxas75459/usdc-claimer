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
    "4FqGDy2gKjVG88kPpji88S13h9maurC94TFNLSNtrcuMkmrvgH1rH8QDAY9XX1bAJBtf9xaaiQQJfUmfGhgbaNSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vQatyKkXWpEjnaMdCjtCzUBCsyuuvueARZWgWEYzqe4f2qY3Wutsc9xMDEzkfNT34929TXdUqhFbYComCa9fxTk",
  "key1": "2WB1fA7Mxj6M5koB2s4DxAxhp41frv9zyjGzf3Ur7wMJSyDLdQymQ83FXY5ptiJycLPvq22JM1UjvkN44vfxQSmU",
  "key2": "4V5v3ZHqpsHE9vzdxnLD3N5jK9Mu3oAFeL44tDpUxReBQSMJJG4auRvpE1qPjXNm66RhfC9M37w9vavFvj1VrKP9",
  "key3": "2xP6ic8YLLdxa9KWzjyceQr3GZWxZdT9MNL45hd1eJwsE6zbDR8qfw6B8BYRrcZ1VAQbrxJnGdVCdiwVEdj57aet",
  "key4": "2aPw2ZcBT7djTqNC6pUwrABkCd1ZJC1Mmxg5jbnwy1yarN3XZq3GyNSbMAbbA7TzjBaXu6SQNcrnVw1FQf6H92n1",
  "key5": "EzRXp9GvC9VpbtoPZzqH6r8Hkm44hJZfT4poMTPtG3ikJ398WV6VAZKdTbGiUwL7GY4axMu8yZ9qA2ms25JSuJS",
  "key6": "34pfnUKxEPiCEiwixmXWugRxrYfZeTzXfW42wJHfqs8XzUf1nPWhkyw9Ay3HoyLmTraVtyR7KXin8bKp5QgtdTdV",
  "key7": "34skq9zghoNkdryEzrxkuABtGCmd7C8yWH3pGgypANU3i6gD1in3acRZZKc3jxnDqdWx1YKhLRtvVpkbbt5cYAu6",
  "key8": "4AX4Nf8ynGFo2aoLhezpbqiRZpk93oyUCju1VAkrsPBmEzXkRfgbozhz6b7pjrzprd5kifydrwwmnbCHY132tvXD",
  "key9": "31eKwuezzJWiEEvUa3LdThuvXkkp7qRhQ6QP4Tx5aZBmGMNkhJovBirF8ryedV3nNzAcUa5J4cdLqFFheJogroHH",
  "key10": "6Q9v6NxTkj6znKFWsnHorVmoV4zsYDAKetEWAz3pM8YPcKiiGWyJzFraPZUJiwyVL6W3rQTmhpgfDwQybuH79SB",
  "key11": "5uwMgpaKEMnVDL3Fz1ahuWGYcvPVkS1hq9KLuXprAeDBauDv3iArXrJkVA2fjyHURzCHurtofRjY73nrmL5EKNbb",
  "key12": "c2xR8C6rzL4Gtvihp74H5X9kG1ukpzPErhvcJ1Mh2VuM7aCMozAc2WcyPq5GkGsU6iNNpWZpidbTHfTViDAVoER",
  "key13": "3Rj3xx1BPhDtAbr3EYZjXQNa4BV7qVd2BTGejDWFE8ZQ8Kh9VJNGPW9PFAUGyfZam3pw8vybV7GRSwZRtz8Gdwqe",
  "key14": "42K3AFKUk3izR6gYVCxL2fy5sFWo9Dz2b7xyaGYSkDbeD5Z87AXapVy6krPEhU4dneF2nkVVBBdw1ehEAywJeQpu",
  "key15": "3RmBCcH2cBqurSe6tujUJkbnJ2eEbUgz3qAf7DajaEMZYWrpC58t6Sxqz3BFeCsqjcpqYjCpzH3YM8LcVUwXyZN5",
  "key16": "3PfHvgkRYrhMTgUHmwRXWeHLkF2JXPjSqKyJx9XSy2xwHP9W1pvAHKZWAa3dYzU6S3T2zSNxfFjvwVk8kbJeiQus",
  "key17": "Q2aFPZF2LLt7xzRqUb6p9YMSomBwyKoUt7LgiumtRMLQx3yL6ajMcmFn9UEpgB43bASnQX3uZfURZ9UAhg89uN9",
  "key18": "4Km3Pj9kKKVAz7k8zvASCeNriB2xpLsMxqLSSDh4b7htHMgce3ZQGEnA9547au4xLokN4ccdgXoyY3FzKY386UuW",
  "key19": "3cGBZEQM6msyoLzDgU28ViJ4sh5QLqjAroPEQdo71F2chHquPBBq5rGj2P8w74YE39mAQL26JQZrmLKFp6hz3kdV",
  "key20": "mA16jA5E86xDZiayYny4pjNu9JJYwWDSaWRKaq6m6xfXovkY5JYbARFpwnB68MigqkN4dVYoPjN9tmtVfYFjRbE",
  "key21": "3U4praNiR4L4t5zsibVY4tCWM6dgF3rZyBRz2v9Z7j4sdBYtLvzGSFMpdtgKnw4fUtxGA1i4mDxCZ2mb1cpQ7Mv7",
  "key22": "3rvPvZYv4Gi8r8gWQmazby6MKXXRVC1TjUkVjuNfmvz5GCv9c21SBPnA8TWs7xBBNPBDjuxeyTCwsb4Ye2fjzXrk",
  "key23": "3rnvuEp4fiNcVdJKHfMqa3bhHdoQkvTp6uT55jmqCaEf2bQDzGmD3AgrXDGgSYLWyKUrDBs7uZddzg8YUNggHAfW",
  "key24": "2UyiFKmatoPacz43rrsvPZHTQkusJjCqZJYhyc83C1xfgDbbTwQXcjhgQyti4ipr8o6Fjat35LiPZQM1DkNb4Ksg",
  "key25": "4qAY9bM1fqt9JUM6tXFP26zG6iKHMyERMajsgczCSzjnCHmUryaueJQy8S93CAhD4gtDwBkpj6rA92deL71yF1ap",
  "key26": "5QXQRVmH4HWUSWnZPhT2XT8xBMEoLJRencKHe3Un98yKkVQkHKd5djzsFjqWuUCLqbL2d3sHYnBpzK8HsE95ESmd",
  "key27": "7Dq3T4XUk1Xk4M4RuQYtAYmELewJe3z6BKmyv2GHqywT8g1rT92U4xuogPsCHivZw9Dxr94sbsCadj7pDgYzQ4u",
  "key28": "64h4PfwDX5v5CN1a6VQ4fugqU6Y1TQ32TBQ7vUdXrogAG1keDQ9dVaJgyAzMSCfGb6FVzMSY6RjPGMfTkewqX4Pq",
  "key29": "2V3S8U42bVP7Tznopq1QoRXQGEHxv1nTtbD2QXJFtP6viLMYYu1p9oH9ZZGr3gbbokgyoUTsygYbudg3A51xbqDZ",
  "key30": "3NoMVYPimbLogpfMCi3khqVdpjHbWni8Xc3ygEz7Ko3SoqtBL9vT6jN1gqojpVXmdcYhW8PyLJWsMbRPxzUWVgUP",
  "key31": "5tGkT2oHvVoTnkXMJsyQrTZ67pKxRRBEX4hBpHN32naFuPmPtTn4KpXHkUd9pZxrgZ1zL6AjSWB8t8W12bNd1p7W",
  "key32": "3XrFudECrMyMPnAnHwrpnBCqHuqYri7WKQdpCoxYjhprRHE8AYQUnWvYpzSjNCp6pMzGrLkK7arV3KYhis9nxbzA",
  "key33": "2C4oftLgD3zxSkVPMVHAszZeVrpjcDViuB7KhLRXhThKmP3SpCq66Tvc7a7zSPsRyRuV5GmaZjzd3ZmAhh4iRjAJ",
  "key34": "3zNYuwrVTUj73NMgsKDh143TyMVWm2ZVZvpyrdxRUe9T1U6ZdRdaTFjGffMMzvuMDVvXPPZMWRpSKyRsnaPEqcmz",
  "key35": "3tE6jaqJMqEpvB7jCWmFxio7MKkNeWDZJrQbZsngpnjWVAtF83r8njc1TELtC9fYt5335oqrNsm6HzbpWWu4eUj8"
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
