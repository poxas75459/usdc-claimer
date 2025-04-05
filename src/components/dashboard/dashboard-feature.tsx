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
    "2m53ZAkkGhmXyMyraJXMZAPpVtzdof7sehi34CvyULYBfy5whvAS7nNgu5kfsSdrDMdQn11aQvoAhkgTZA2iMn5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obxbEucWMLFgFeNhpFwDEBc1CEtDsPtuaANXqk1zQwdKyqmXDWwT77sKGW42BRMEExukjAbW98qTTS7TYhMMLc7",
  "key1": "3njH58Kjyr8EYqfHTXnqvVAhYTXJFTPkH1EqN6NLihyrbgMd5ykyLbg9haCaY8TmgsmVNGCcBVCVcFD4vq7AtXbW",
  "key2": "4ZwWdQN9wvGRo3ErNiXcrfeEDm8m4kqEQX3HipWPJTsNmceYMi11cMBJsCzXbYdUJ7qx49nhmD6XMpdoWvtYtFSE",
  "key3": "48i4yu8KcxAfGtWgk7HPm5Z79QWq4WHqrQMWgdjtwvAZFjQAYSPAzenAPMz1SMxF7MWRWj5H8Gstvq8MkHpNNVrr",
  "key4": "4PHhEuFVWkQqcCcgd9rLF9PBaZf4DoB786FS3STBtCEH5hKDQb4YABDbfeVe4xMb9kTBbUPhxyAvsVTievA1xJhi",
  "key5": "4VQrVZhFmmXDstkrVpmfAE6zL2of9yhasBA1hCJdNsM75q7mjBBv5UtyBqwEsWwqgM2KVmAyUa5vRvwAxapGHgq2",
  "key6": "3gVSrKVKXM3fQXYdXJg3pq8Ww18PZfEUdbnrJ1StNgY29CWa6vARpDFrtS1CmBy7rKZHtom6n82g8Ne17C2TzUUE",
  "key7": "4txHMf3BfxBG8rZQR5adeso99ATD5H9Y6xaJJ7kqkNfKQSkWkatbswbGnjeTeqcq5K7X5DCjvVDPbBQ7Pe9FbRom",
  "key8": "2UaXKUDabVmGtc7ugT6wDLw1o1XVTWyGjcxDxYRkZDJst91dGpgDMNxdzrPapVamX7ZPiLjQs2jTVx1Ah5nFtxJf",
  "key9": "G9dKzinea6fTVayaHnEiVFZJsDAyNior797nfAwrhTtQ8RoZYf6bwrDZRdvTY25sFrL25xQNPM53Bp9ayWGmyWA",
  "key10": "4cez4x8ZYfcWyN5isEntSDqGCSYDcYjuTDaotgjjRMwjZ4rUEdPadS2g1vdCbRKbK68EFT11NbcE9ZyK4svDRkrG",
  "key11": "5HPU2T3YvnoV9r8G64cY4FnMKt9CnLd7nTdZL9qRZpCjs54fwSDfDLg5rFSKnVhyG4ZLKenh8HfVMyvHXFQJAung",
  "key12": "3nJXkTtcaCizhgRr2T1VWqeUB58iyYTDCYfkQGcsVWt8GzwKCqtZSZ5HnEHv6giEzHhZwQ7JGyrrhmKMcEz5oHxk",
  "key13": "2zaGRWVBiVHauJdcuw1DCkQ5AMnYGZGjpRiC4C2zGHuGKDGfMqqJFn9R51rMvGgAtsk65xZ3BwoShaWDtuQVK1hp",
  "key14": "4hm2SAqkkj2Eih4mnuKSTeUpxeidew2ffXDgDbt4CRiroA5RH3sH3GJByvUet8Mu8bcATH9RU2tfdFwWapEZQQkm",
  "key15": "U2NuGurpgzis1HePzwvoCvpDvdk1bL7AfmozNQvRirLTygQMA39MfCvQELVNGn8Zpd8sUz1ifd7Hy49ZJ86sJXT",
  "key16": "3h2vmCf625TqB7UQDtS8fLfdveGAkYpQooEBzgfvv68Bz1BLZ1VBMvD8w3SeapP23iCjm7HMDUkPFcX1F4nffdSe",
  "key17": "4AocSUFctvvF1oWPLB26rxPKiFCqfKMREzpMyGv6fA5Uq1U62bxTgCyxqizJnqARQgisUe6ABC3GeXYqRCFmYSyD",
  "key18": "5D6HzC8R8qXY2tJyGMMFCBiDprYxbJUFsatBogUm66SkkHVqczhgwrhjgKvF1jNb2Vm4egGNvXh8xtwwVhGh7Fhk",
  "key19": "5HARUkf1yPfEa6kvzy3GY99sVuzYTSzbTVXd7qET5pCUPKJwZF4mC93Y3Mi8BzhJT4cSPas1Ev9pa3AhpgTdayGx",
  "key20": "4Vux9ANfNNC2Ngs5jfJYQCPsKMqNXh4S2AHM1TkmBKxDWzDnaSngZBhCsLtLV7x93JGKZiUeZReWw6aRnrwx5oCA",
  "key21": "KUdb6PoT5QjqUTmSnXogHXfC683SPmU1hfivag5yjagE1YSB5Lg5JkdMGCeNeJBdZ3QmKZNqbDnnDMwhhEZU1sD",
  "key22": "4pwJczYSagabqENST3oJmsNumiqCk2E7Lasii4KL5TgXa73ntADE14vsLnJrkwc4HvtyTJhhhmwX73pckFFZzUkG",
  "key23": "HAr8bcKA3w4uXzesCccimX2amXaRjBQVyHpLzA59x1kwgKoW5AhaMQUZTJaLQb3AyPNHg9YUGWWUHMHdDcLUxCg",
  "key24": "LeYrn97CzJXrXBrccGkDAP9tLew2GD2vtRFWeZ7LWhd56kEdzKtkTy8qRptwut7SRBwdkfAWkareWqApNgDRgJ6",
  "key25": "3cj7ZyszDZepjjD6aDDLxDtNRoEwSd8igNRZ4XrhJD3hSJ3JMATRBSpHMedLbJVDdMdjZZY61oHhsCMhWM4KMBQw",
  "key26": "4TES3MiFdEu1vukrtULraTN4UrgacWXd2G4iqWsE2Zp1PTN4QuYJKvtXxhiBi84FhBZjnKbKdRtkibTv8uzzqGUx",
  "key27": "39o2BcYpiDTSZNA5cQQWLA7BMR5dUUFb9tY9pJTxBiGhihpQrYJUeUsvjQYCWqwhN6Tt9WEmSoot63oT9oaRAPbB",
  "key28": "4jLmScngAg3Pc1365yenGauipcD2LfF6dWmZ7opsxmi1WDTrdxiTyiQQXKLGRUZGZdZ4bD4Rb4Co1jwUXeSvgAYP",
  "key29": "3MNTpnX8V2C2A9XGQQ3ytt1fEHZZWw6Ljz27zxyoryVE5b3TtuLe8VHQmiiGABNbyLBdmciXLKAJ6TW53yU8oH3y",
  "key30": "4YuGePTZ7X41wKiRmTbRT2joN8sH5LS6MUxvbAenAi2HTguJbw6j6LQZrWoU46m35SviEYUgRjG9hx3nr2kJyKSJ",
  "key31": "27mTQXyw5swZwmvam5Br3MUdduCjGCHBbSTsiRzAEag7JFnv8qcys9SgMpheDqdbCEjM3ZmNtyr4z5WEY8ubX9D3",
  "key32": "4kC39qbWQDoZmKfwQYaKjbnj3y9jLNuzhdChESZwEBgQ9vma4vQjFbh4nd4Aj2dv6VrAuD6A5uXS2UqJSfBFkj2W",
  "key33": "3uvQ16hxSyunsz1URHNoz7tmQq849JxaYv4sX5mQemWUaSXT8F61ey6XPR1q1TunDSqmn7CrVRDNnvLDFJZAgcdW",
  "key34": "3SS1aYKQaV6Mu4BxLwSd5f4qKQd9tWehYKwGVQRh8UrEiDXAHXrNbN6Rm5G7xzAUCSTN43q7qrDNppZ4VhyCMJfE",
  "key35": "4Usv6L2UWWsLUqXWXWpsMFdoFjyVUFZeRPdWPVaNk9M6xyWy626Qr843eobrEN6MvWvZJfMy2pcjpDKMp9eveZx",
  "key36": "2WvTGZevnQ1R5LDMjHJb3ZYWDyDuxERf95jBbHTFV2etMYZqkijfT78iMJvVUHGxq1bketK8UigQoRLnGXmtt4iw",
  "key37": "2XH7mm1d8QM8CFeWZvETgvHC76BB22TrVRRyYxw2LLovzCXALQxYweom1fGE4B1wJbnEEJbvRubaBGTHZWg2nJvf",
  "key38": "UUusTnBU91LHgGxD4beouB6Ty9xBwHZJBbQdrwqfZsUpKMbSzSFB8pBW8WybctZXygoTwYg1cMHwXFosQG7acPM",
  "key39": "4ucGEzThvEuZqxgrbWA8sDg9ND8sfRaYHDVRZiBjoV6hWFGzqggfkdjg6fQi2G7rkDRyhNudUe6pjFLTY2J6DZ2z",
  "key40": "5GZNEte6icZUbD4VmC6Wk1SoMSSMHzLC2Z74KLfsyBmosVVPc3NQBGB4QUt5mQL7omUCHgrM4TwfjdTKQ7BDpdKm",
  "key41": "2qVrt33WbVVyon9bU4z8GPmeXwHUCBZLXnrHB7pjL28FZKYKdGWQm6dY7QzPbsiGS4XWFkjjiEyBi77vDpZeaAR9",
  "key42": "65yi4j4mVUJdjbVmepzttjpU2U73bN82Nn4z69hNBRNp8X2jxzQVgzq8XDsdTE5reKJ6voAZZKHzipyggZitjGZF",
  "key43": "5wkB1E14qd2LbdoouXgEqSmaPez9Zz88ujhBBHBT5fAZTtr8HhrrrbUAwjaZb8PW3TwZ9gZxTZDyekfKt9EHDWVj",
  "key44": "3LgsHNys1U33YMaHLESiJ6fjX2qA6eeK85UTKL1fAc6iVTk7GHVjr72sDQVSCkCmtwz9osUpmcqBjf5oTYyg6SKR",
  "key45": "3ieVDJxGDfeXb9bHm65TqvPhKM45XQhM5pySJRzSqRVZFayLjVdBgF2UoustKHcmabYueLKz7S2DcrNbAj5jo2Vw"
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
