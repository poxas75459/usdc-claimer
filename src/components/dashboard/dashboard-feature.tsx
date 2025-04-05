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
    "2Y56VN2ATLn6Y6jjCbw1okc1Jm7BWuykHyYoS7VgpN4bK9nbv3F9zszxdYdvnpDa3zryuuNQQbXUFUtvpgWt924R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aEJmQFkAbr8cMeSfzbtN36NtHHy88LQGGWXB6bJPofEd7tfyjJtxRoUSSbTgtCFDFak335me6yf8W2TJt2uVxDq",
  "key1": "1269fmrKMKgCuGtVeUHC3CEsV5Bp7nw8wN7Q2bwhghMXydpmKDurgWUZUGkG9zywmLQiztiSFcy7CLpeeEuzHhJK",
  "key2": "3qt3GGyRHdKjQjnJHWwCErNc7ZFpZZ1bP6CchjUBPAhguDrP1NSsVM8WMBYnW4Eyx7HdAv3usTDHpqBcWtJwk2y2",
  "key3": "SLAqNUDSgJMrmitKFuCkPzakg395TFsK3Bv9YnJfYTWiwVvjc2UyJ8dMZXGEGSy2LxDaytP8yZV3XMxsBhbnBzS",
  "key4": "BxsGuZuPS1HeHBMqQPMWgwTovfHc8fB1dFAmTKrNHXFkGZFVQSSdexPn9vANatACMwCz699N5y3jbPoMdkJg1dV",
  "key5": "3Z5AUPLSS9ktpf4Yd3nSxvpVjHowwJXikSXai13NtxCyB6GXZ2DgdUeSxufupwoH21ChNPqrudFE7pg4kU5g9W4f",
  "key6": "43veTrViD91ULVpn5cayymG63zxWfZQRr6GBJWeyprqpxH6oZMJnKop3EWFBbDyTrW7pKWuLPXKJQMF1LwE1tPBq",
  "key7": "4Nw5FBMem59dAWo2NAqMqNCxCvGaZnfWptvm5oGcZ5KZCy27PEbycijCwuxYSExnTwESruH35gSLX2kMbVhYPiye",
  "key8": "ZJTqJzpkrdsdcLpvJW2Hj7XkWSfikQVH8a8645vYXPQA1VaMrxqXsywU5f7kY9dqQ5356AQfvxgDANXgsiQfVqz",
  "key9": "MsSoX4T2ZWp343H1A2JkL7qxPHbFgVANcYmUr2PxoDWi6DwFwLggERzbGjxaDcUaWCQQxtp9xiE1j3CANfyLaQ4",
  "key10": "4o1F6w5BJVGGjjthbqkfgaNxxAQDAEWWbjfFh2nL2SVe5qbgMmE83t4euNqrpTw8Fp4XwwjikBq2JyeMxkjruQUo",
  "key11": "5VU4qRESUsdCVR5tTq8eG1qkgoCnEUbU254uuUQpUKjSfLSchKcW7GBzoBa39xJHXyc2MRgBzpK8uP2kMukoTpS9",
  "key12": "416sKDT8zTvk7NmjFAgtgQtdYLcEbFQcLhPSDjNCGcQhdx9Z3vyc26asZQcvPN38W5nSedTziLyaJXDHmxWufhU2",
  "key13": "4KgLVtLRELxTTCh9hDd8yRLqhqhfrVAjofNCAcUjfrCw99gKpVLv2A3WyiVhzZDprsiDnMrwnXZbo9kWY5CcKfUu",
  "key14": "5M5phjPwG4YAwNGgdZQgJFSoCHYuSp4Cduq8vphUTvCPtYZtQb3NpTFsj6tXaazy7YqMoMnvKvBBN8Hj4gF929kz",
  "key15": "2mGX82K2ehE1XCiziF1nGXySL3vx9CqTZGPWvg5d8x7rwzT3vCzrS5Mrj5BeA28VcZPJR7tFcT9VhELLr23cy1kW",
  "key16": "xbSzQLVpqtCPkvWDzQG8ANZMt1oY8Szu9eMQz7KXzV4jHJ9Ar2WnF8sQC79GZBSFXAtcr1YNLrYEtY3H2GpWpoG",
  "key17": "5rBhSXfSGYPopNRUHEeyRqQGrodHZ58bnmB175JGXnfT6B2RC45QGjSqEVS9vycyGateD47SjdjZwhF1W81iW2gu",
  "key18": "5aGwUWYjc5sonHvXQ6f4MNQGJaff3KRx5gAmrvRTBW5uUfo4waSDpxPanNjNeSCLcM1zj2CPCYMYBNrN4BirMz8",
  "key19": "2WEwpTH521VisqLm23QZ2RSRokishjVQFxD93ut2PtyegAp9H6kwWFpPw5L1n9fp89vZPaPgPz4yaS71rube3CDP",
  "key20": "43NuwTcDoTthPkhNBDMK21sEKPFbcDGsT97gcekABvgJxwMUcGqbceW5gDf33DCs29db6sixTCpai3G7vvik3cQF",
  "key21": "5jszB82nbLXzLYAq4HuEWZtgZHmqUPvX8zve2Ygo6FTtjVzak46THhvovMnBKopStiYq8UNaJoEYATY5DKSqU8z1",
  "key22": "VewAL7NHceU7ntbSaqfNMunV6kQj9FZWWb455KiHu9D7umVHJxXVgPoKigC6RaBXHLrbXvFzFuxFJci8Ejifpgm",
  "key23": "4iAAE6ekCeRuyEcCRea9tnCUTyRkqcXxWcfBc8FZwimQfo3dwTKXvfprYWTw1WWabw9ZfS7q25cZtAAGne3rUEw7",
  "key24": "4V4WRCKh3egSHbhyHcXcPDQfGRiVGtrtAzByi2f3F8nk3EoqhcJp73m7rysFgLYMb6pUtMLt7tJMfC1YUDsZGURr",
  "key25": "3tQAmNLNALfMENGJtNYFyR6R9FNuZwZxULcc8dz8nwUg5o6GjvJMSp1EvCH5TboMX3XzwSEQ9m9Y3kcgM3tTtX69",
  "key26": "oui9H2NPB5QqYt7oKeq431x2YiuCgoVmih3GAbGr6LU4LR79mkMqcYKbsLQAx68M3TB4b39dE4B299YjaYH4Wkc",
  "key27": "byzpSRVji34buwJitoZS18EwNm6iYZhkhSgEgz5wSE4r2WBNjaoFfahQVQ7KUgsWTo1DbkMKiC6tqbw9Bohx9AQ",
  "key28": "5AkraZgGDRaQ1krKkEvdffQFGSX6pK4neDmQ2e6Tpd3jGEhNfDhRZv75A65CpATK64opkdjM3LrFX679QY5kSRT3",
  "key29": "2XWMSPjK6Gaj2khBQ8ZTjn4ENbtzTSyCzNEFogQ5U5fnewvJirL2gZGPLcz9GXPSg5BYPrsUoBTHaJfhWKhtBE17",
  "key30": "as1L9D3bbKxsAuNf7KQKkts55ExnCs6DffHoXLXnz1f4VUsBoJZN3DM2YtwFTcfiJXYK35mi4Nqdg3iNRjhUD9b",
  "key31": "4EY95YnndD7Qcc4F5EBuHZz2knQPgD94DRexkpfWF4B5LEAEJ9qiUXGUnMqG5R69bSLcB4f8iKLxjPkW2E6Y1PCW",
  "key32": "65HYrGHLWzgBf5McQpxxh2s2edU32kur7zn4TtaJUrdnFfwPLMJMx5fJZWmvW4ieptZr5VrehbYVSpPWzTuqUJ6K",
  "key33": "61p36RVp5Qmh85TM5J8gjz5encfatwgU4YxevTRqpKu4twmPdKW6GUHLTZTeYCLbJP7MqQQBQvGFJA8odGJakxSm",
  "key34": "qyyZX3LSwpkXhmnC6TjkYga1MFEMkEEaT5om85mJE36n8B8qEjecqkUi8RRbRozq2GykSSX7VVdVj4LurzXEZyj",
  "key35": "4diYS3rjoRm1i8SL5EpLGaxdEaubcnfH21RVtWRvKdSe4ukZkwNVVSzeEQKJrbLSrJu2GUaYkg75unQVJkUtjHRY",
  "key36": "2cm47hp7VXqWVQbR2CNTznZrCrJgubwndUDH9bQRTLEkrbk4Q2mj1cEi1PyfGj5yGYDGXmJp2FxTJGZbjQMQBZhs"
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
