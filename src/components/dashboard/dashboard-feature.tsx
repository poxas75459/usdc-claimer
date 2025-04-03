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
    "2MqFtKxYbvscEwGfF63tq4SbWvJgfUPsExyFoHqRs8gyx3HiUYqbdHuQPEUFSN2v4XrRUoKRDC2cP7Zrw46244xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d8Yx74BVPkDHF6uQBQXxJVagnYEeJy9un2KY679bLEGEdrCP1D8q1DwjmQHyEEC237LDSqUcMvr3MxBDhEbcML2",
  "key1": "2fRxVua73jF53rRPW34c18feRfTPpWJHdV9NbiLewFGi8ebJH2hhAjBXws5G3ferdAZWC6nCoPGQipqjxyACKMVq",
  "key2": "2g9bNXJdAezjgLdM2qh4HsXFHvJ8UdZ9vMmRCoY7zwAt1tY1xU9W7tfEt33BE2KZNE6LvudAbx3dfyVSeMyrJq5z",
  "key3": "5uRVoFLQxQNPiDRujCcvdFJtVHpy9Zt2LiVN5AkBE7L9VZqwUuQ74r1kVqNBKDJ1BJZVRrZghjeyJ1uWXzjHmqcL",
  "key4": "3KT6ByLtnV2NkTxGueQV6kUgz3Eic3VRHP9qvA6DSYvc3Wx6vi6XmWXDouibSeCB5Ykn8RgK13P34A3K7v1CdtvT",
  "key5": "666AaT9Me3XaViQHBUhof6vXQVJPEmL9FNgGTTwG4uRtgqfVLEDrFgqhhXiTMk1YbABfVzXSnvnPc8smiwopSi2X",
  "key6": "4oQ6ttHfbSMKNJgrdff1thuv1cGM6k7n3Tg6TZk7eHEJsDpJDvfVfSW9EZJs5cS7aGc1ajQFCSbTBSuBpAeNh6zn",
  "key7": "5eMQAw6DfhVYMgVHaCiFqhsdpZ6JhYgRfaZUddcJFMqLqxybuwhVmsKTBDWcVij5jMf5civnwLJa8RkY8uDJSNBc",
  "key8": "3uf6EzPGoRZShVuZjRcPCw71PwdUZ8iQ3JYRVsjwyaxtBJ5TW8dTxh9NWaP69dFhyaF7YmqX2ktkpPv4MiZHJ4vQ",
  "key9": "4rgd3haQagd22ReUhRhvsMbEN18SGtBm7WDbWcLsBdRQ8QwAs7xQWNp1huzMv6dy3CuKpuqzAnTBavwKRQS2kBCf",
  "key10": "2ZzxWErmoC7DPup2sNw7h524sucyMe3f5SBatkkAxk6eLcWKFVyU7CpJZd1h9jNY8EmNuZUsvMX3v1vgSsmqgkz",
  "key11": "5i1V73uuSgMcuEaWuyp1N2tQ3EVCMKLcQejiNCteTrtEEMyYMdFAeKYSmXU2NqQWHWZeHt5fcRzag2RfFnH7UxWo",
  "key12": "4n8fssEMdvKvmUpYowJH6UTqvhbpoWDYiT2UvB8tYANmtBBdy2a6uPuhfGnWxWZ7sB4PFKHegdEX1x47sMYaxcCS",
  "key13": "5xoVh4yKAugPg3NgUT94kF7i9Xb6RV41pwNu1YMhYwVUaPLTUousKhxqAjCwcsiLPd3GEBpQMNh4nfmtaY3yKUA2",
  "key14": "2GDgeV7JXE2oTeN24MnruGTQ4CxYTBTqkE3iaPoCH4k4ArJzWHp37Cj9Ba3Bc1bMdDYULh43c9RUANNSWBnAn5cc",
  "key15": "4yPEGDQTLRMxS2rfAXfAp3SmEV7CG9AkYjXrYp8JtTCGDyNrkZERQucFiPzbFyhLKR9DcinCp56LjuJR6CpxpZzi",
  "key16": "2Mo3sk7kKWXeaJLcPWyLMKpqYNkJ3TyiXnhGQ29T48TYVkn4M5pgpt4t18kkFiKmbw9BgdDNYeD3gMR2ahbBTsUa",
  "key17": "5XoBaVvCgPkGPLtgDiMUYMaSzLxeETgcmvTCY1HGzfRnivjbNiErKHkU5WVeGkJYSFGS5faYRrFZTssxhGt9qSkG",
  "key18": "4kBR6GB7Vi18dk5WoHnxKXLtLxwTTKCnFzMg23xsfApEymqivwc6k5cnpeUkjbbm2Ckq3E9LPHXjwdKMNV6m4dQf",
  "key19": "2Kt4gnoxQQuSDZPMxFJ9ioce8MAziBqiP7A2feH6xcfcL5wFffiVeoHr6P9GrvCAugU1bnfqmddaUhL43Ahq29Nw",
  "key20": "5tFkHBLg4qpTbi9R8oKt1gHujJznP6dweZcnCpEb6m4e8kM7QuBfuQCaWkaD8TRiT7aaEHe6GretLXyVra9zSkMC",
  "key21": "3Eaom98MVY2c4KZcFVHew1wkVvz27nTUxPZCZ9ximaGk6kRH2UMbdgbkwdi1bi2cxjJvGPLCy2vPcvUJAofXHwyu",
  "key22": "4uxvQcR2Pt6PRvdRLpVM5Vj5xfrMYavYUz4NGggXxLZ6DfAUKuKz2VF5VoGvV4CtDHCp6ia95wbDiXPsHNLdaefa",
  "key23": "41q6fCCMba47v9Z9vbsezSBfDWvzVPTZPydRUXqLaWrcZJypVWV5yZuyGv63Hj3jdxKJXjmEHtKK5tjBjU6BxN7n",
  "key24": "47ETMfMswBf1iNAGMEk764omvJ4JPMYieEADnk1c5BTCKmarDaJXF4ECXBDxSLu44GTqVHSCjVQ7p1uSUuPgttSa",
  "key25": "2VWHbjhxsq4jvhWZz2pSWgDSkeoLMGkTj9zfvc8npWKdPPeha4ZLuyYwmPJ2ZDw7p2rqGckX2peproeQvJXbkRcU",
  "key26": "4aWvHVDEfvt1u88y6H5fZYUAHZKnaP6XgCn5uX8WsaxAtjEpEWBjjohq5rpx6BxcPnwqEaDXV1eCZxxsVZUmECcz",
  "key27": "56daoPbikHhSJFHqAWSGq43wKc7cA5MjGFzBuDD71YXeMpwLauJQ6WCwXyxaZwv9RgrcymLWSQPusvnRiFLZD9Rs",
  "key28": "4V8q4bfGqUsf3vZNMJCioNfMiAKyk6iCGGznxswZ8YhPEnvEAJcPzYrAxYt13VdRqpGkwNM3dGMr42BLjtc1qi4j",
  "key29": "3XNFuXuHh83jnsthnFYmSAPjczcwvrwL2HAt14Eh58qnsEUNg3z5g9NdXntQc7Pekb5nAwhsgzvyzt63BFmQsR4s",
  "key30": "5yCtAYueA8PZyWJsWBGB4btGvgnYcgCKRo4rkoqqRRHScmGfLa3W6dvNJqpxzHf3wsNuuXuvZMkH7MTghB4bzjJm",
  "key31": "5SqHv8CJfTsUbsXEPhSScxraW3ErwNBXAbyYLoF28cH65ZiJmHBuoHy9KNG8PRx8X9PoyT9WrPM7nE2ahtfMq4QY",
  "key32": "3S3J72bFwvj4ftPXAbzgWeBXq7yKs3FYtsU8DV5zCCyLUyLyuLmZGKdTsQivgFkdBU3nJgiKQ5VvJHCBBsTqev3q",
  "key33": "5oj6NEem8AheNDo6HjLxkji2dT534GANcJSCPVSbxvPGiUFtJEGApLJmxzpRJG6hkLyVP7eXSajGchcjdgmgqfSF",
  "key34": "2iRDWtoEPau79SW95NGzUqHtr2x1gVxaE5dMsDHXoeWwwCgCXiJHKoPNxAwr89N8uiNkjgE3pshCMv8WZ7RTjEfN",
  "key35": "47HF6Kca8PQbc4vx11Bu9c3JkUaTwwDsBiVp5YeFGmQMJPrAVBjtRVvdENLdBQoSn7ccHLgE8FNdGw8a6MtmZBRU",
  "key36": "5gEtUkRw4ZLPujSBmpVi8ngfDLQXu2r69F9oJx84gtRNjsm86kKUgZNLyDfyJfSrpjtaoziNsXEfXScVn3QXQw8N",
  "key37": "3jnxhjboCSfgSQchSdbPd3mtVUXxUaxcuANoZ2nAMSAoAHi5agJxbhdYiQuRkW55c4P3Ld2tGPHg2E7wbqKBeZx8"
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
