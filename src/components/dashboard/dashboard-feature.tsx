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
    "2seN7RpeFxypJjFQRB8zQyDi2VExtniBgw7nk9cv6X1y77vA4y4NunrMpbCo6yXRwmZJEEPyLadieT5ZS5hcb7be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cBJTfDX8uyeufqRfJ62nqiHLKrdLsyfQraZJsU2JaGscK9AteWJd1AAdmvKNLWvw1BAxRf58ZE6LGH89k54vTvd",
  "key1": "4uDXfTPoyY5KuFcDnytVHzkFBuEsAeNqw5cWxUSqpEeMbtjtTtfXwrJY2427NGuCpVC3wofPcrC8eGF7y4nEVfxg",
  "key2": "3cN1FWCUvsjGSYAjypBNtb8tENzKi9v6S2DG6nsfCq64grhiFrANBRRGXuWvJmWok39WSqCBNiws2LK1cdXsLPrv",
  "key3": "2LEvpityL86Jrsi77ykcy3ArfmfA1ZGaYV7cYf8DVZk135pBTRGxQykUFrSzxpSzzj6piXraraZPtz6U8qW1FuG1",
  "key4": "7b6vGJeqo9N7jqX4ax1awreJMguMoSMiPLBrFpano7NLhSCZqeCSHUBonoJ8qqXyPWxzCwMgFMn8VVZ1iaZ7QpJ",
  "key5": "3oHbrano92iowHkh6Po3prpbmLQrw7LnWfXcrMZ1ESK6wAiY8Ss9kX5DgBuXWmfqiFLV6ifXMqapDwsFjqKy71R6",
  "key6": "58SjEEjQP9fXhN6rsSPiMAF96ZrtK7ATmd9YthSgsVBRgmnonKwrrD9cnkpXztUuRDbv5fQEmNky3jNjXpTqxxju",
  "key7": "3X8mrN2XCxYZnv342ZFK456SWKHRmET8cKzCYqAu3mNaxiozxrYkHftojQfAPdarV6btfKYoAcK1Da8mW2wcHWaG",
  "key8": "4v7aJUf9gx7RynGXNo6PirTRZno7rcpcLeqDf3x67Weni3CQm96Ss3ye68riYGbQVow7PTvQRsAJsFq9r6k1UMas",
  "key9": "3jUP2Wx8pCQkTMBHnkC568Hh5GYPp5fKWhcf23coVHzFZZ5VXYyBsfycNSH4La9ncTS6z9dxAtZ2WrUkRc1Qk7FS",
  "key10": "5Tit59YD53XgrNcabUt67UiMbi8KS6eLvCffZDTD7sxtijRKtknSTUxBWAeBxQuguwSfU5BSvFqA3Ub98SPj7o5x",
  "key11": "CunK74jDeAsQwx4saSSpat27D4LDWahEs1sqC9iDsxUGZC3gdfC82YgQEHo5JQ3FbBvWWbMoC3b16g3ZGSeS1zp",
  "key12": "Tr49y9kvohRiGhiVW6CTqvR1J2EqMGADzzFMqNPYtrb8h1adTLsL4GXXXbtr3pqeCGN8qXKD64cHAV7u1uaYoTt",
  "key13": "42CDrj682D5LVWoX3UK67YG4pouJVo5FN8ATEV8uvsJewYy3XP8JVA1WvKAhmNB9TcFXVdF1ZnyE8wmN22W3BaE9",
  "key14": "5YDjvTd98TQAtAkEE6cH4PZUKCtaZMCqEY1bNa7nYiC1vM8xiq8F2t3vVGkbYpByjmkqTqPKKo9BK2BjNGocjNHE",
  "key15": "2CA9SSQUYuC1Q8pKtb61y6fzc4JBHKAzLHd2j3gC8n4UJbT6ojmhKbk6CUuDaaT3BxrtFGZCmdxB7YxgXoCRJi6G",
  "key16": "3uTbCP1ZjAUpyUVFLgbeGjwrsGwnT22rpVRFUmkunyoeJJLuCPbtVUuH3HxCS59NUn7hTfiQjtGjNHddXevziYiP",
  "key17": "3SeJvYyvqPw2oVHbSjEPzjc8oL1CCy2kT1Tn8zNKFzTxvwR6hswoMKQcevDh9ZLwo9EBh5wrJvnZJX8AWQA6EjMo",
  "key18": "guhQL98GGdDwceJbACRgxcXintBkV5EeZxHjQ9skox8R7oHdyqmzMzNC9mMFenJ6QQQAFEvTyEhx75SuS786wXe",
  "key19": "3JoTL1NUFneP4BALBd7xXqUTVXLNGaS71aKNVCTSVPRnTENX4YDBoxaGAHhfVY4PJsj9pRkEcdk5yKRMHcZFFYLg",
  "key20": "3i5e3e9ta2GFqgy68ooZ7ntsLkAqQyByg4m9XXNQKRsr8JKCY7wBPoQRSwnNxnAuEtaCRFSF8Nj6WqZEpP12H6V9",
  "key21": "4TMk2msyjY27P4dVT1Zg8HCouCV2MQ7uP24WRh8CvbUNiFJk9CZ5triZReVGfHVAM3PcAW7n2929sAbjzhpVXkuq",
  "key22": "4cmLHVftHjjyCTj57tvkJSvZosrk8RsuZP3r5NrL9vLg1sPqgDkKyGYszybJ7eTGb8FW5GMmJeuycTKZfEfVXRJH",
  "key23": "2Gk9gSSMjf4Qqmc7UYWqZDQWZs1FRCRwe87NwtP7Z7p3ZYN16uC2FpZCdGjZW8dfV7TuXQ1s21PYgDcMp9vmtZTv",
  "key24": "2weUNx1TpHVXc58TU6ZpVfQw4km5gmhbrRiTn5eyGGmhDBTvkST9waWwZ5fYnPT29fbwEqaGciRYwS1tv4w33UnR",
  "key25": "2vpPxHiAoAKwunWc8JsjDim3NuVWmEpHbC45u7o5zWthnJZ9qpe59nxoXRfxoaieLj9qhCPN5j54DKHbkpFbZZGh",
  "key26": "4NGEKsixnpChAe2UC1Hkk3MssDFzhSSS2mukckHJy6s8ofeHMJMHoUWbs21r2NdojaWtHCWSz6suxT2zy749drTK",
  "key27": "4bTmY75hp67Tu6r3Q1WngBBoTHnrXf16FkuAd73L6cXqPCFx3cWP6WPyVC2JaqWvwCamkDV1tuZsRiNjAxwSEMB",
  "key28": "3ytJAhfy9vLovCHauLWpws1barvGWjGVSvKBf5GDQdJwDM8ucyjscebShpZc1FK8BNxpVaEymygbCWru7z1gKKkN",
  "key29": "5gh9jx9FFZHkMwjFW54HaUiikRwTghbzQ78Pabxpe2nFgFAMBp4gWNoJAzZLJENAVuECLxKG8mFLKCzdP3foaan5",
  "key30": "22n4KCd1hsphvUz5d8GCn7jY13FkpHvGFHVLhR2nLpV4R3M66d8huZzWvM1wgLNdNHnppBfxJddzHhufZoEZjM32",
  "key31": "2F7QwnST7SKtaPJ9RVbfPBzoFHKXKEmotLRY1CxWuzabHi8BvvTDQ5R2BcuUdurgVcE2GAjjWCfrTysS9RscpjG7",
  "key32": "3a4HPpQTiZSK44CrToTNDAo4nWzbuzf3BG4iE86Uk9kY5GLQCPW94HvKf2VZXFzoWPR671LLeUbensPXfU8sd8fX",
  "key33": "3Cciu9TLksfsmCxNfrba1Unnj5acn1r9xJtJgJEWSwSDk1yCbJSEfAiPTYU6SKqFxTL38SE29QXySUhRqCPef51U",
  "key34": "3h8ppyBbR8VWSBDhupNJqEwp1kAByRbvGPZmdfrL8PdAcmqNQtZPW14U5FTLufs1as9LdX7W3xiXXMy5ENdT5TPH",
  "key35": "4DhMJTaVg4ABys21ScsDmLf1Trk5CfPzjvQb4sWyMAfhcXjWT2fpU44SYYRwiibw4xSnPX5x95Gpvwq71Mx9SsoE",
  "key36": "3ZGcgc9vT41qi9qTAtgdrWBx4sCPtah7RSHJ9JcrxyzG9HDeqcjaisHuKTyLmmn1tjesKYJ2UXQUrq9APQiknZLs",
  "key37": "5ELHSQUsVSyw7gd6ip9CHjHLzavYtnKtxS3GqYFxukedMUguGqLb8GGikFuASjGrNWtp9enjwPAJqJ744iGKpQec",
  "key38": "5yH7GFzfV8gENvEqCLPDqdA4U3VDFAvM4cAdZEF73QTzX3S61pgbyAcsrWAwWpNu8KkJJP8ApefJo3r3dxghyiTo",
  "key39": "3TCq26zquBC7vXMVPc3fmuWuBUDV9yMyGuE5xRdATCfLCZsSqUTipiQ8F5UUct3MoJBdQqm9xZBvzf5veVzvaSic",
  "key40": "4CH4htHaU42m3C4NE2STJ5qgGAUtxyY5n2C4zXQe15fCf78FziqSiBHQMNFXfe63mZ923ja7wjvVNtxBnmCFL88z",
  "key41": "4RcJ6kFMGAfnvQTTpu8ptxGmYfcLcokXyf6f37Q7KvjoBzmXNjTBDoaWpnWAZrYBJBUr2prtA4ZjmoWoz1nQRJRF",
  "key42": "3MqY3nrAKBzn5qdaYAstWiTkxskSEdj7Yj61EhCMvbkR3oTEcyKproAphz2VaNAo9nWjzL7CHPZjkcmh2omkyB4"
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
