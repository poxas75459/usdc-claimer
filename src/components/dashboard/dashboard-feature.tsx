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
    "pqhow8Z6uWfmoS2JS1GDCkcNbARh3XF4FQPSddpqyM2qYX7SAhWpHrorotc8XAP9RMPKmTpHb7RTfytLcBmTtvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42gG79MW47q3ZPBYH3uJVk6bzRh5EqoPMDtNh4Dbfw8vcDM3CdKnh79eCRES3vppTQ9YanvUjFtG4VHA5jxwhEmi",
  "key1": "4GG6sgnKEcX2o7WANTUKhNjXHyTvKsUswczaWfhwvj38fkwJqzrKXFESQy4zFpThoExV8b4UKiA7eywSYPfBrPvo",
  "key2": "5u7hSLocguXeyPDspeLzcuTqqPBir1Ueb8SbtH2nq6rdu9fNAyb4avqLP7xZHvXd8npME1PQbDvAJae8JFeyyg2c",
  "key3": "2xA9J2zwuJhf9RcrxKSF668YE985gKW8UBgdSEc9Wbb1vy8ouU9VRJMEK7RypexrKrFXAut284mVwhVDf4snUNur",
  "key4": "4Tc6KuqMD3gVGv8V2LLsh5WyHshpQxuACtJLMwBcdzuggVm9tun2odJiJNFq4DbkQQepkoBe4vj1mhSWzyNCx8Xe",
  "key5": "3fVdjUAQAM8LqHPGN5kEUmpM3pTD21CvqU12sgRZXsg4KeDqrUXYBCNjsqi6w2Xaohn2hT1MPTk22bCsvinFExou",
  "key6": "3e9TGz74Ka8suSZUxxWLQHEbmtXR3DVVQdN5JiG5KKHbmrQEHU9Ts8Uvz4UCXPrDHeaDv43nSixZKtxBqnPQuCVY",
  "key7": "29KXaeuJgv1PdthXaEjtYWKL73FWfnnmdiaz2nsb8R74Grjt29kos1X6qFP3T1LK1oBjUch65sUf7tjaw5GTAy6c",
  "key8": "4561na32xX6UipnFEwWVtbeNjyazX2F4YgHrhLkMPiCaGwzSor8AzdSBerdk13qadTMF534CJWQFEMkomVRmTZrR",
  "key9": "nn2NfJrpT8uTs2xXfuhx163uueiTPbZJzRgDLuJLeZQRU1GURLTCZ1tgX3STx5kiHjqC65McLoswmLbJjdaJv7z",
  "key10": "56AfRvdJTVvjcnie8Zvc4K5ZVrrPtYkARrzneEUj7FfbzbmLtCPVU9U4Y6WhtC4ZAD8vUsfMUAscrDmPahA1dx6x",
  "key11": "2EooMSZGvigrWkiWe4BELKjnvCMrSH42SnbVBe4RfSaSZrUuh1rcm5c42oeDgUrayJ5V9aZWcBRPopZcrFerJJqX",
  "key12": "3TR9ZWXtWTVPHT2PTf1Fq9L2LVurA2dgSEkp871vWaz5BLJi1DpmPingoPMZrZaGt7RQNNHnSndjxpSTtXu7dEcD",
  "key13": "25hhyfRiaq9E6H4DbqH9kcY95zNd9SLv6BL3Qm734wQPSqf9v84cwVUkZrpHtkid4xXMMH5XPYWHQFULp2wFf3xS",
  "key14": "3S6PffwrCR7hrrDt2SgMafxEuJprezRqUM3iaiEc82DaqzqimLWodtEFNVho1dzgFwhwgjq8sKJUh6dMKZDUCHH5",
  "key15": "5MKMjMWMLyfu4yt488VQKFWdEmyo8QCqHFCT8JCiyBc2tczTcqrHTB6DXVf3r4nTVhuJYXTGg3sTQugZ8uQ8tKW5",
  "key16": "3ix9hBGsSELPw8YZBRoZMXsE2ScfPU4UvxN7Acid78K7PTvZg5osDcpMDa7h2k6GW3rSRkM62t75MAFeTrHCAYbK",
  "key17": "67VEpaAqZtme871cp5xrPKHpprRzjFja7ysoP7ZzVCr8LV7dhkotJCsUUv5rpmQ6M5D9EQEdiVUfYAGRR2Hv47t2",
  "key18": "sh7mfuBzetpBjzxNYqaa6MkuhHi6GGCSL1bNquCJ22m9CYsmbGNDshUKXQmkMFRXT59jCHdYWH5SMhFUqh15iwj",
  "key19": "3DZtLK1f2NR2tg6DcbDb1N9o3eQHVfxMvGSaXcr7uQfva8X9LJ2SjLSBx9MLkrNznr36xx5be5mvGcg5kngfHovk",
  "key20": "xXCh6j2RqdubTy8ymaS5YwviKiYb6ENj6AFWSuWBTstE7fARuPrjEMU1Sn9HNQhnThj8LcXzNWJWSv5yTgNKYSW",
  "key21": "5yTanYjZoYZy8A4AvAoMVEoyxCaGG3zhWiSESSqjykKRRJQyUhKB69ZSCoYMYWYx5kpLks6TkzgHv1VEcgy5N3PZ",
  "key22": "2awivKKcMLjFyNLGZoaaxjUtPRs5r2MYg5yPbnKNNR1nMshpQiDboeeJ59AQuJeGmF63bDLMCRqQF5aRyKaqAhhG",
  "key23": "2wMd1VjeNotPLrcfhzmtVxW8KwQbCJLRr1XLhv5ev9NPgjGwE7Ffrimd2T1D4ock9o1TFxzKCqWiy6Wko7AmWeqd",
  "key24": "5EsVrjv7vea1Y8HnyQKPTG25oFhyRuHvWMoP3oizSXzgaedRf6bxXCUva5kUUxkiPYXjCkMZXMSqsZBPAykjdJaq",
  "key25": "49QyY3makwHrikvFcodvRqxrEj2ENmxEEzciQzS882fLs3EeKbjhhVm38h5CFdWXk8teLzy7J8Ee6TRmQmb8xumv",
  "key26": "2ZRpWAHa73xXTgtrKSV3D4uN6agbYLrRJrYPzxzjpN2tGawvncZUMdT3A5tX39AijnqpvTEiVAd5MrC35cB6y7nQ",
  "key27": "4HyJmxnG4KjWoAHQzyuev5z1zRNYHjMGEXTUU2t2Q33x1XBERaFn3AaJ1VhjENN1N1nPmnGrwGCjDsfChZL4dVhZ",
  "key28": "QrSmDUe1LRYydoYrW4DqwBSGTmLt2vfinC5oVWrok7NeDMP6XHSpSh9kw784CeVV4kXmNJc6jzjxfcEh4HJPSwx",
  "key29": "2hxHXpQJqbVAUuMe9vdWEGyQcBgEB7sWSH5haXA4LsNQoxcZLk7W13A5GCJZ5Tj41CAuwiRqyvGrSZme7LmwpTJQ",
  "key30": "4HsY8ojyiE5NkWpELFFUi2Py5KKTgHEKkY24mHu6DRkUPCFaFrekQAFYkWXLomk2nxEahb79GYPpQUds96P8qA6Q",
  "key31": "eSgcMQrFYycb9mHvKhLYsRk3EnzLt2gtPqby6NaaSre66CqMHjZJqWKbqhU393CrBq9f9a65jGe7kaoGPbYaJSz",
  "key32": "eZ9MQ4nGvFxU13As14mkx7xicKP9fH6CBgWkUDoYgmtQo63aLFCMG1SzZmYPuaGQ57S5atMdzGUEXsy9nADZwbd",
  "key33": "j7Ywi9SvjsRqgncwBxtVPq4c8W3jG6Dhg12pnmSnhYRNAQWZwBBSBJUADDSSiVuhBuaiej5ffaVshw2iBMaVw5S",
  "key34": "4bXXjzedf1EB7vM47Cz1JKZ6Aenb7E49zBZ6HVK5bM11iLntf3FSMRnuTMVepo9W4PSPRYAMsBNnsEvRobQM7514",
  "key35": "suWbFoDWUrCH51AUAsjaHWtHB5bzYNUdBgqm1SLQDhCQ7idbynKFi2P21eAsqAfv6dStsfZ97B96h88bnnjKmHa",
  "key36": "5UTddUSCUmQEXeptJYdMonGoBj6DmSeUPAmBJ8hqZxu8isjJyi5ksRzUTvRRCqbpiVqEXUYvvwHihLoVxGY35dTf",
  "key37": "69eLTBcaTj5MzNWXzwgeAkGSrjPRhEkqWHP7jEGYLbeEsLZqMCYmLt6Ub5DyeZJGFdaBG4s9GTcGyAM5sukvwUp",
  "key38": "mymC24VqfTD71bWqLFZfi88KmA9W2mEYxR6qjqxPnXDknYpvPsXGvRqUqUpqgXTMzPEEJUzETGoYaHRGhLXCmBV",
  "key39": "29rGWMonrHNG4gMzRdJeB7hsjjWWQN5Kn9RDqYo9BVy8fz815vL9tvVrKPRoxGtyg6SCvzNJy82CNxTSUFhASydo",
  "key40": "5v3B3L93SRCSe7cvsmwtv7aCUA87omqjbJ4rDR1aAn9jEwm5GVoium9qX6jhrkGVfwAFiDPdP2edrJ52bu3fFkGU",
  "key41": "2fa58N1u4aNNEuzbG9yxgPBFRW8kzC7FVFHogX24hCV6gDP9JSb9xPcswL7MLjnLkaLeMpa2nGMgptR2DdYrDTd3",
  "key42": "2PP1B2AKimXzJ9tS8X7eB5W4zNpepPHTf9uuURqJ1WW1BCjP9gWEX7PkK9auziLnYq7xrUUWJFX16rZVCH727rFN",
  "key43": "2SpSwrZRSurPfgpMBRbukxXkhxG3t7fyUMT9EYm4pbUgYThNPoxMGhAgZR5GFSqVFwnF82DcQYcm3fSSTgRzpFfQ",
  "key44": "4j4fKsxedBVhsRrqQTsAXihpc1KFLNKxPiEwJt2UkJm8yJiYTNXr6xHJH3DByctnZivzgfjkkhUKyBwhoPH4mxTG",
  "key45": "EEGeucrfgnoYm3oK2VTzb3zuRBFoHfwsVX6FUcYBcMBXxNcUxT2jxocJ6ELqSmkS55Dq2nuGa7bM6hm9Jt8ZGcZ",
  "key46": "2B8KM5YM4w8wfa1zMUbHBf8hQ45x4bHjrSh2NN2TS5UFyqz388Jp9VnPTv9USuWDeSk3wN2s7vc8tQJJzKvPQhaR",
  "key47": "67dpcjfZ72Y5TWprEbNM69iutVhZ8hbbL7SGG5nuhB6rpKAHpzCFSPawwM8fHfRQKbG9fiXNSnzATcdPWTkF9s17",
  "key48": "4QynKducAh1n5Rz6dr1VfScTDDxeN5dvPKA9kk2iG7YJ5pz1Lsf7brV76tpZEY3nV65fA42CBDRcfnK1b7dkEH2U"
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
