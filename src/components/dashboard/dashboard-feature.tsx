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
    "Ldkt7RyLxbQBLeLwaHt2vWezpmZbhgrqktTTeetvUEHQekGYYQitD9svWfFmECiJtLqWBT7MSAL53zZjZbpPk11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5gotW5RehM7zoKCm2VREurX4TcdoXhRkGyp9TUseKXVLEfN77En6uWQfkWjvGxQ8fR8eD9x7ycNpmuLGsEjzob",
  "key1": "2bBsfU5cC84bRZ79sb6MuHgeTcV9YqGgLVmeGAbHEFJnqoiR2e5zjHqnh525DhRGxuSZSjyveLuQg2MjCYYfsJqj",
  "key2": "48Y6JJU39chF7nwyTnueKJTJjniTQiJB6W9NWNypg6CKJSaoGgL8WcrV8G37h81pghcmhr8V1kVnE5hGpKPUekRu",
  "key3": "BHTkfC6w3BwM84mVKLU5E7p2HbdcPgXxYLdpgz3rv8qsy5zbNurwFc1RF5SdePvtBfLNYygdgcewQoDMWjiqtn3",
  "key4": "3ELaUsQJxVZ2xiQTduuxSwAFf9RXdC4cYceqPz9Xr57ifqaNcfDxdzmiyo3TvzNtUo7koFpJDgASPsFehXtzp4tZ",
  "key5": "5T6ndrHnxB6bGSibYmWjFncgiKD5zQJcjZjPMEDU1imefRA2CSG9dfVvLyt5nqbfP59FJFFeCAW49e7hRJmArLmy",
  "key6": "4AvaAa7shGJCD6rErjTmGpRtBCH8DckXLwMxYndhMi3j3HPbrQb2XboukwgGvoqn11nmwiKrudanjUwh63CpmMD1",
  "key7": "3ZqPjiUwk8A7TpfboFynAbRXWtZGefXgzqrQF13HLgFg8dGq8uYBy9XnvKhMioFGq3Q6v93B6Q3er9k8yG6HfkkR",
  "key8": "2DoHbuMT8BadU7M9U9K92wsvvx6o6fZCQRkos2oth3XjF5XRV4wxfbjbFhPWq1RLuPLwX7T2TUn3ujVUTdm2bffs",
  "key9": "woV41SJapF6JPuBbNyQ1GmPHy9EAqu3ALQAUchnVMxserRJ9dyopr5jZbfkY3mBko9B4BM8Eg2G8ANBbC1fGMP2",
  "key10": "5bhRkQ1wKapCXgAq78zDQcB7mn1FRkaXzLY3vTLYQW9BXwyPH3yiVXMyRUkBcvbUk9QY8NgwLJLssSuC5xdtH8Xr",
  "key11": "5rfPDpCuxDtpUiuY4dCfSzBzRsnQFevB8Zb9GUhrnb57pAGGVhTXKgipY4jWTfthJnh7hn93nNXdenn1McGUEZMX",
  "key12": "cMSLungdoGbyh9nx9ZyATaUXNrtjDzQcMrnVaUgennfUhJzH5Mg3jQVJppVGAXKjWrNLHPk62kVMSD5VUU6BCT7",
  "key13": "KWUYJFE44BME9DeThaQShKxW1rs8tBSLKkxjeMUdcYq39hK8vwJg5oqE8ywwgHQXKFtDhpDtQtFFLQe9Fbjn9Sw",
  "key14": "3zaTA8Xm8omzSPM7voUjZyVWPdo4QobT4A27ZEQskJfPnuavn3FWZTu1QBouuqtX3VzeksTjZW9Z5NPxTpTxBCpe",
  "key15": "vMnJna1ufdcdM8QF7J55H9m6P5gj7FWUYQkhShd3xxSmyjRu5RxY2nGgYj4u2JFExyjajAhgM2zu8Q13aX9Mp5b",
  "key16": "2LQEgcWGaXozTe46RDy78rE5tN9k7bPc3wzUY4a65tRTaMimz8d9UFKnQnhHi5UpiFV3EPQvKM4TbuHVwyC3UXax",
  "key17": "64y61794jQ3y7GrDmSUaAvtZ2uotFZRnWkEm64uqJ5e4xoB3n5vSJJHBkSoWz6sgtpL4LiEFkeYYQ95ysXoWuj3j",
  "key18": "3sJqu5erfDwVV6VmChwjAJpzb3wUWKxoHEgCFfqtnTBB1hPH5BUuXtBATKWM6AaWk4GoiJeWUuttiebXrbkGM5wA",
  "key19": "5vD4oi1e4ZjR6aN8s9cty2sg39JCxT9bP1keD97CPVxm3oFUGt3eh17f8S7xkwsAbMYmUGmhchirkrgsZEsrtMPi",
  "key20": "r1P2T5YtZHzt565jKgQJoKPhjGZYNRGBZpMAaab2dFXK4dh1Hi2XSp8dByWWKW7ig317WdsLFtRVbVdNV9YW9ZA",
  "key21": "36yWRfVxfU2MWKJEoxxoVZNyXfFcSv3MLwFWnrT9KvcdbYNtRjheEV4V2EuQWtcEuSXu57eXnpv5T6SVmDNmMrNt",
  "key22": "4HZf4VwsgiSJFhDLaJgca8pG5eTHxMhupgviGWSFAWZKPh6CgT51S6DuicoSTg6bNP3p6ZqLiC3jto2d3RQcdzR7",
  "key23": "37Eqm5UbWMXiCMvmYgwLxSVccUw1Zufqn6LBi6LDgaQTWFQwVXdFkzLByMDUHnjhxqiqa35D42AjXGFo5KYqd9Lh",
  "key24": "47fSKbBxwsyazgwUS19BQ6sLLfxFiSSaBdaPF1Kb3AkZe2eEC5nSFxbb1eUQT1aLVcDvb8jBQqeLKdDAaPC63MUB",
  "key25": "49mA4P7KimAM19VDjGb5ETJG1ounG4Vo8xg9A3rfhEkbJS9Kds14fAM1XjSTkxuj34BNfASp36G2JyWK6irUPuM6",
  "key26": "2SgyvJecZ2bVkhTeiKxcY3DzLj1SkLAMJNR4V2DvCpD2BJe49rhvy3CZq46RhnDnHerNhCuawbSYJmS9vZKsKRmt",
  "key27": "tZMmr5uiQs1kiREMXQfjRxn7RjkEvbAxD8Drnp2jDobQCVC86RHdSi5y3jAqqAkuTt6jnFfhcvdAHLN1JQHw6U8",
  "key28": "j4eYx2v22r6eFATuqJNm1BFRA7HkLyMZ3ktwpNgVrhtRLsYX5ywrNzWicyni3WmwdTcsTYEYq4kzjtHoCezbgcT",
  "key29": "5ietX1aFo2PLH7QbtGNGZjqcfUFuDFup9FkyjgqwJ5c5oAqXFLt3GuzrKpK8mGjBe3drQEjnw4h13KZQcLEoWhcT",
  "key30": "5JoxbdtU6PDRhEx3rQeYJ6cYJU7Ueqt5GMgpA6Mke3SaFvDmiDuT4AHAnc4J3XVjUwBDBxQYSfQ89LHcquR67qri",
  "key31": "4tMXpRW4Tvo6R2c38SZMJRRoWFPghsAKZqZt5EovhnxDuZHt3PUDRbkNfzipi9Y9w3jwa3SmN57uB3Fa9QoZQvuX",
  "key32": "32YTDkFi3RQVMkNNeHBSLeKxeC9hBJngdV9Y1L4wRP879cXN6zyMb7SB735aMWiLrDa1fuJTbLtGygrrApZPbhy2",
  "key33": "KHpTMAcri2c8LWbVT57QJFsTApsfbcmCAEjFdwaSw8jsVp15V7htkNhkfpXunzWF1YUdvNDQDo68jAjcVcSTtpn",
  "key34": "5JaaE1fFDChRMtpR7YnqesnBAXMbNQMbdnJ1PLmpTiPbtjYJp9qAPttVxzWALFu96JCgkTVBnMwSzC5RJRfucPxt",
  "key35": "urLKXpMQPtmf7oWi4qf8hgXL5dk4yNzU5yyVLVZmaTymRfxcFPRtfpu1eJyHSF3zyMqup5jsjoURvrGmrbuWSAH",
  "key36": "4K9NWKmNsJj27N1VTJRj6YXPdMrpq33d8brn6i9Bs6zMZyQfJvuc2tCZytNZ9YGNzyv5dRukbwGrpbzpZRyRA2a7",
  "key37": "4NT6pjHV8A7rBeyWEUvYZbxpAXSW9nLVAmPKi9txYXa2yrBuHkLB6foCWbeB7Ep9HH9fQMTW7PCjauZRx12cddaT",
  "key38": "3XE4TDbdSG4wCjDLZ71vs7Kah8TNRq84sD1hHRgSqmfsQpeN1qNSgeisbHSSBqqp3waUxrYTqsuLSDvQvjAHuLh",
  "key39": "5fksAb6NhEwR39M8Q7j3HME2vYREH7S4mEekHZRqENmNjCaEsM1tFPLeNKJBai2wMR8nWP7Mt1mnvKpHtyQHjwGr",
  "key40": "4jBbEekvEktAM1hgRiEqUXdo9iVV3kccUp1DW3nWvvmkStabbYo5h1yuX5BzeWVuZ7V1m9dTPvQNNe29hVKowN13",
  "key41": "5rojFhyU6kPp4DAF7zURnJQtrT9uN15Jvxpq3u3kBpMM1NtagWYggPWxVZjrimD6WvhMz8ehNbnhLXW62YkUWZtB",
  "key42": "2XvSNva233W94De9BENjuoigbb8UhyrmsaJ5aVwP97fXjPf2BVLAHseBvF9WA7YHCjKHdzfvEYgRLupCDSgUTpRc"
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
