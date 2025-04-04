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
    "5PaqtYgNCUS4nF8SPGGGbJGervx9g5R7paT2EmRGXQtqDLSiv3mNPvNHWgxPzG6pEQCxXjQTiAWnMXHmc8cehBpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hbbFwJzuWuCsEEa2QKFxM1ksUsjhivJ14rRCVgVatx2HuYpKorQ5hrEvJPLs7iyS5pUBVWBj5MvCJfqa1U3FiUw",
  "key1": "h42YSWMMD8CQtcGcK7hpbiEqEH5x3WjokJMzw1DL1rBbv3VCD2vYjZwZBtpBYvaDxNtYtbE4e36yuW9BsY6BoNA",
  "key2": "5pC15afWu7dEsAmfcKNCvBg3oazQ3PbEgBt76B2WXRFfLaspDGPPBaEGTHnrGdyN1yTvLNZmVkE4quaUfx3PoN85",
  "key3": "3iGWGqpjWaYWzeArqWsXkFh4Rh1v5sq3BEbBhAWTd3BL6X2RnvCRj2bor5fS4uF9xkFAw9gNZADbqmX6US8kbyF5",
  "key4": "3Tmeu8s6eXBJcBLodww1Ao2dG4bur9pYuwKsAqnwvnhXPRenAPQ1CNceYyKEpgWw8APyDnwrPCyUuqgjHP7PJrcp",
  "key5": "3rknLow4CpDNqaPWtkhKaZkP5hfE4koNuYsbUp4JDGtUbyTr6M3FpLQRM94LVUyemasZCPQj2K4mW9nJgyAk1i8U",
  "key6": "3JVfV6e7VmDBwhXH5FQDGQdpBQSAwvWykJwbWsWG6kSC1Zt2Ztm9ENLr3BRNPK3N7rDSm6h2AEt689BTGjFrnLaa",
  "key7": "3So6kxKFArubcDuEt6XnTVdGQ9d8Hgun9jJGcDBKZ4XqfzHXQ4i8zrwQQLpVYkyt3AWy1AzVmqQr9nnFvhQ5UQVF",
  "key8": "391gKoFA5Z1EpWe5dL6jVzfb2hWfHcfzpyKfWvnroHg56UUE8xqgbnx7jLrKWW9DmueKEYBnaBFDxNaCGMwhPtzV",
  "key9": "5ZW8j4ruuTD4FPrmyk6QS7ukRinCJREUDPkK9vf3xbBZmTPvWWEjRbi458RjBkbfapmT4LXAQQcuNgx9AraVa6Z6",
  "key10": "5kbrH4i44Weo7pab8ohz8sUqzg92FFjPPFkfEAECuacmjeb6uXejLgZ14VhbWmZkeZuHu5GjyedRG3mPhuve7JaR",
  "key11": "2vxBfHq1PgzXUHqfkHVfWNdQ5RPvyP8NrY5rbDyjyMe5k9fQsddNXtCZwqFEJZMg9f1EQxXBm4yuP3ZtbnxrF82E",
  "key12": "5m1hTkpDMc8Wfd7ZXnx9V5zRdzSsvJGNCihNaSkuPSfhYkV5mj5HwnbjYdy5qasHfoNmuGqyfL1fGnUboqawsK1u",
  "key13": "EKATTgfhNx9BGApWcKQHABnMXv9EoufPyMTZfcAhWENAk9GTQtydsHWfyG54Uv38RY3spwGT5axAWPS5vAFPkXV",
  "key14": "5ZzTa5Huzq5ZyParpopsYmPNHK83HN7LSMu3kRMcuurBt7UG5TcudGdvv6DLLHgHNKGvVhTC4wb2D6tYa5XZs2S7",
  "key15": "2p6XmUQAVLwFguaZnn4TyJv4BVNcowxuWZArqTLXsdADKy2MNXdfMjsj7KYssLy161ctGv23pW58LfaZwso655F1",
  "key16": "6351A2CxzheAc9DwGXtfMct4SrkVosfz1xsbLvmBAN9DfDfFbt11KyTqU6NoaqiWATwahgrj2Xc5Up2385rV2HBd",
  "key17": "3TsvQ2Qpby3saZ6FnVNDo255ytKyEoCABbFsX4xg4kahHq4J2NKs6hBvxRekiGq8EkXufBWGP1nWQM1na9N3N8bB",
  "key18": "4dXfs4BDb6nYnbjrV7ExdE6VA6CEGqkc9MdB34Vh3YSZ4eqMzxNhtnGknD8cNQMuGBJxjk9tjsP9bCxjfknSiHqa",
  "key19": "abf4xyCBdNcjGAgDMUjKoYWc6jtJkY2rf6FYP83p14ZtWoiAjc8CpSYEXyrwGDvqQw2gf94oemAeSJwekQfreSX",
  "key20": "6562KD1kMVirnXQLoL3X2SdjksyLPh94H2myZ95meJaNRWAUUgDV9oy8LwfpdK6VUZXvmf4PrmvSzA94oKpePwbr",
  "key21": "jayvXa7Wo6SELZNZYixUupcNhmjffN19Ttoy8fqqPrNuAkmSNeYMhUP47vp22E83JgWXuxCkRzD9Edf1RpWKVYv",
  "key22": "Uke6rsmg1k1CosU1B9eWbQ4MSABnGbq9cgn5DvqdL1eVPog2GNgvfCkewhopzBBADKBSugUaCP1HZES3svoYy1v",
  "key23": "Wo3d6Hb2qZ5T7Y7PJhuBbeqv1TxCJRqj9S19jTaEvJrNDf1MzkYmJQyz4F5bcYFm1B8T5iHLywJvHWLAFiH8vj5",
  "key24": "4BQ9kJYpbVyYNUjzTZ8YKRQhYdFXv8W9xHYUvLA2GCHWjkMxRKktNDCSEkGRR7mk27W2kZTi2xyGbeEqD1fQdbFy",
  "key25": "g6KQoLFj3xGTyRkuipPcD53Gg2U4sKK6puwD4C9f26L5dWtjH6y1G3qJLct7nGCoV5iLuNven936XMeeVhcSukQ",
  "key26": "2iHECd7rCUdZxpPQ7oJfu7gaHDBQqU6hp1bffeY5EMddND9nHiNLDpdY48xkHwXD7Zijf2zo8kv27vPRWfZVKJwG",
  "key27": "61c21LFMSLuhXnztnUEFbxD1AL1fGW5GXap5K5hEWwkqT3P5g336wJ7jVJTvEo83E7zS25SbdhYcUQGSt63QNmWx",
  "key28": "5GkmGUBrAmmYNKwLqc4y516bzXB3hfmPhCR583ueLBF8XtGr5oF8sbgznRx8NTc6zbxW6PyYD95CxrMNqSSxAZXy",
  "key29": "2AhRAxXhvANJ2Lqdcg2NoZW5B2WBR2rHr51uSA3TrBFsMFYnLpfRNmY5qYpZmutCkZHbxiqvUhbc525X7dv1WntL",
  "key30": "U5LVAH6Gx35KKMxNH97tDcffW5xbRsy9g5D71VQ7QzqQkRRZKDmSH59kjJCur1bV1rVYffvHbwtJrLFJq46wViK",
  "key31": "2q2EtjR5p1XVsF8eFjwsZ3HCpgVTSSnhahwHg6QgRCfEGXFju975brHztBHquxAF8NWULSNJgaiy9VUsqWvCLdaq",
  "key32": "asXrVYL3z9crjZNWxdKeqtpJmc5vZkDjJaWzPBnbvth5rVLMb5WQxUTXm53h13MuDWwPkmcgTzUPuQyGNtNDiiF",
  "key33": "3Fb5trZj31Gt4suydThta7ZNWQFT2hVN8tZyQu4KK5RCEGv7e5Npv9v3FoEJWSnoFcH6LcLFngffhC6ot8vyEksj",
  "key34": "LL4cAwCidcCpTLiAPUk3dbPazSQ7BTBKkVYZXZL7KSwPajjL4LfUtfwh7PVpzaAfCTmzHpu2srnWqafZ4zHA29X",
  "key35": "2bt8gKZ6JqeLV3oVrnayUoGxSGUivXwoPfgmvdXZWQ6eKfpbWJWEz1MaaGfPi1XsKfcn3bF64DAaDwPWAzHiHrs6",
  "key36": "4eRJBr6NgQ5YRXJyHZcSxLoSUtA3gwqFpUcJbWfob3yKticPfsL1HCiEa6Jo31RKPtkidFybNQqsjbUeAb6TZyPQ",
  "key37": "4soYxSdmPeA1Uekw3TN3LAYGwZC85sD77hmUfTYoZVuDwD6r5oyaDTdbob1HFLAxNjFxaPM6BZ7gAou8YCvbjr1m",
  "key38": "2WzSs2AkvEUcimfeJqG45nYMYdx1F9p5cSEJZExJ89itKSfX5yeahX3RG7Gtpq41niUjnmhsF5pfJmeVYE9UaKYZ",
  "key39": "3hhFYvswAQHNKDYGRsD1oa7ijbjpHnqqF6p44SwzLFtTDYjs28qMJST1XaAunAaoqqbMNFy8N15u1igiTGNpA19p",
  "key40": "5ca5CDw9BMnjiSrrJ1HdXNKDLEAPghGe42j7U5L3NiMxqZwLhrtaihhP3LnJn3PzGedrBRnk65hVzzPDpPaAdTop",
  "key41": "4td1zDRbwGDFAhmQfFxjRnSGMVofyWCwYNwJhiR7JsjZXT9ytbGAA3JbBSu2H8nmLFxNQkZy7fXF7B78pvhoJGJU",
  "key42": "2VaYgsXA4Y2oboovUPuHJRJJH44He19rT1wCzW5N6bqmFDmDygu9Pgtqvg9e225gBAbm7KdHmgE1JVDzkw56ejmS",
  "key43": "3QZhtvfum6HbwQihtUaMh3b22XDM9b3GMeDuwDQRPHssWbwMqzDpreCu9XhQ17GGQsPUE1928hA6srMY77ZkZPzf",
  "key44": "2AdgY3Jw6WRpHvLTQSA7HJdweueek652cKNU9JRbW4MuCSXAAToZgTSaXdE4yfAxtgQs2M2w5pxMxmqVuvkQbib5",
  "key45": "2fb8kD6ZhWPt93C3BxzUjMbXxNhbXcLS23rHa6F42CwsCS5NhCjH4dggBgcbkp5ZGrswCpsruNUj11XE4EkXof91",
  "key46": "56zUphjcmBCfwn86eZrVSB3YDekn39vqgQjU8oWFcFHQgEeHfYEqdaXSmKxMEPbHJXUpjugVLuPKWPbjTumvLKAL",
  "key47": "5zU6oys3iuaRMNPqKU6pJs3s3YcJPJotykdWE3TwVhZLJcjsBZ4wdmV5AkQEgjy362iPoj6eJyaMzaMwh2ZxEH21",
  "key48": "48MSGyiKraBLWGxv11j7CHW1sCh64qPiWCWXTE7pjvyL3SUHjaFcgqKiGJAdWu5TJTFU39UYkaYZeFzZUUCB9gRi",
  "key49": "3HSunABN57crH2QaUeau6kqtFHzsVZk81h1kuaHiF8gZgp6nqjqN2U51AHv8u93vxfuCA4yncmDP34BR5KVdZxP2"
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
