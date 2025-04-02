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
    "hz5KWayGXHU8afawSdBvghufFbnnraBiQvjyYwCuDxt36d26LTachFXrrFtTYcVzBY1tJXhtghSupPg4wTuUip4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Nuw8t9y2DPRwv7YTSqJThjBAUcSxQS7ADBd7CPGvHhSBe2EvNEjfW5JyhoZUGsi86xuED7wwTS6P2gGXVi8riH",
  "key1": "2B1crnjnRTqYFL9vaxBnGg6zfQxmSeJLH823se5NK6Jw2rAbyon8MJtWWoYZFhxSsUgVWaCrDSMygM6z9g9jBmy2",
  "key2": "4hrZBnptKj3ESMk58TpxZ1DEAMrPTLEzNR84SBBpHXU6ebKpv9obpCCkuRyZEHMVf9mB8xNLzJFLeELBHBnygao1",
  "key3": "3VpJWgx81vPzivSmCkh5Ui9o7AAoGNeiPCfkHnCiiKmN8BK4dg2wTuvBabA9zHhtvmSZ9xf9LUaW7omzSqeHvHyA",
  "key4": "5cLBq2QSLpZTJSHTZp4UhqSgNP4DnfpzrfgteYXyG99maFqrAsPT8eLSN84ybGSrZtCMC5natPMgYGDk9E1bQ4sT",
  "key5": "2bJ8bvw1iPg1zDgYyGGRuiMrfycPVdtew5EPyLBrkXFtpn7gPwzDn1ZoFMiuc5b4NjGRyXrAi4ZWyy7SqjhDZEkY",
  "key6": "43C9t1WwaAYeEB15wWQTyhBwV3TvaMhSjVMMnypsFiQ36avwWoKtYQ6sGkd6G8mznBeY5eRQwX18H4zCu5SCJo6L",
  "key7": "2h2HyaXgkdCr2JFNTwzZusqSDb2Y5KbJsNUgSJ2orqRxhEoFu9ugiFNxRzw5qtcgMbzKLFYwrg8ymYSWCSH78bWK",
  "key8": "23nGuyyfFKTEi8Vh5dfivTF66D3ZG1xyLu8pnZBhXes5iuxN3Y86EMLLGMKJ4xmZsyxqQoFMhvM7J7NtMb7m5AqZ",
  "key9": "J6BysBRYVS5WTvT7U8hWy9oK4wPaSePU494WbXYQHUzNQE4YmFipVAgJFwAqPpxidFLf5QmpLwdD3HTmsUfrSE4",
  "key10": "4Wi6fty8pzREfqu3J5wYPHLuzNSMu19HYH4hFHyCMViWJeiG1zCwerNCxFHNh6NjyBjU7vWvfQ5gtixGdccxJavK",
  "key11": "3gdoEjngdiYUeoMHJDbwXVhrzmKwFSEaJi9CLbcKX9UV7ZHDun8HDuF39iFAzJtzYZrcf5QhNQZ4nQmTMhGzuAdq",
  "key12": "vbRhP5xwmSr3SBzPg18r9LXoBPE1EYxsxzi33Qyft1kPoc3fQEgGLZe4wmuk7EsMs5KX8tYDTW9Hm3GpsKwRBLu",
  "key13": "5eAjqgxoChP1jcwicCbQTWwEzAm8imdTE7y9BcdwJS39L73fseEC9FsGxTCUfZ47czXsntT8XM4MtH9UGUvrvwDd",
  "key14": "5K3awa1qVD9VYtNkXShEK9UZ1sT1DRBb5udekWb8oKA83YKXoeeNpdzcw7q8Sykc2fLsA7EHj4fyusbxTtLKaKJ8",
  "key15": "3oZ3PL2Kf36YYLX4ACdNWdFgYXdRAz8W8GwWACFMWRRRvp1dH6CcJMhmYo2ZF4cRwktddb9M5MqW38UPkoLjuDcM",
  "key16": "4NgTVmdV5pz5ypzLhfXrvk6grHxACszC8MNpNVp6uAFYP1ZrTo5U4WZuEQQyJcdEai4ruNmp8MGS7C4UXAyd2s4s",
  "key17": "ACoBybxYb58UrrDrqwq8kbYi9KzsEZpYJXXjorn8vagRcp49Sh2HtKybPnXqLhpqMgBpJC37G2AzDouoPvrwdrD",
  "key18": "375oj6FR6FWvqpbmmbjMJPLLyPix6wK891LysT5esvp7DVJi23ms4g5tk9FgiQfa32Mv3L9ZWeJ9yAt8PwbrkQFY",
  "key19": "2SJTnmZLHEZqjbBaxBrV6ALqs4B5X2ddxqQ7Ei6T4ot4TKms1qPcor6MzeNgegdYJtTnVqPiUGSH4w2SprC1RYQP",
  "key20": "2BqGvb2iinVzKB3kZspGNQaqWjAiMBQerEbWNfAYmEAPkPMGEogkvJaVU3d3tV5bvodwf9H14JKeQamfD8dM5dAf",
  "key21": "4UVypMBsU4iQMtXqmQy4qf52Xhx675k7xkusurDzTu61HNFn34SYFMghnveFFSifjspL3b2Vehk5kRN5GjPrxp17",
  "key22": "2n5U5zaYNS1Ec8HoLz16dWjCQrbkGn65pf2Ld2mXMDpmS6QofjMHt67amAQZJUAKY9kLXDF3X3JhnR4c7SdkDKLT",
  "key23": "4jEgQxwU2r4wiqNvtrPgHuSkKGwPFJXP9AXs2HGaHUgJswrUynwpeKbDz2JEh4VinbbHhzenSmd79XPmeLTxUDsM",
  "key24": "5arXU47yjSH1aUDZPNgwscZq9Sbdu8Wybo8UApv7EbzTTt1tvn8PrDg5pun47YntLoKJ79SUbxx1DABSTazxvucq",
  "key25": "3BD2Z8gLF7kWr37qX4kqpL6VLUGdDkmerBHxsm5b3uzU2iqmgRfgAHKbZTkPLvepmQxhEUe6pjmsirNhAhbdmt2Y",
  "key26": "ZC5dvgS7mFZWQZkqWoWwnp3xbEHVgKdeQ6dTiBjH879UWCdJX3Vz2ztKR1nw7SQkG7pfcmHyNADtTpD2kMD7i84",
  "key27": "3tpUFaMNEBoQKco31NwtHSWXHwGMvDQGY6SvHDmTm3jGnAdDFs7eq2ehLPVUrifMHNaRkTzEGs5ocAasGEMrtbNx",
  "key28": "35bA8yDGRBJMYzQKajFXB5mosS3LU5yPuSTjHBssL1QzvoVunruKNJYJ9C2JsH9eSQkPxrVoGp3HbwJA1pyaGLst",
  "key29": "5ycJoFuj6bLktFbpA2L57V8BYSjoq5AyzQgjHZLq9uRixt7ju8T18xQkeqobmSUEzqdyzrG7ebEhdo8uXvaABsF",
  "key30": "4fsfo6YfN6Q2rtMMjJGh8hCgwycJCpMZA8HbGSmyq6Gd9ec4g6TRTkvcDDSjzzeBCq1nfEmvh2qyYpwUNLehSMsP",
  "key31": "2NBgymWU1QHpS3xcwiCAKv1aj4jH5Jq5DmD8q5kApMjeQNQ8Q1WSPwSMfSgxZqACxPSJj8RATbcerMqZpXv4UJL",
  "key32": "4nyQNbBhnuzVVJG3oqpYBPjTTjhxvA311xxNmzQeVCmyBAwaz63xSZNZpWihuNLhCCP14moPDrGqnqDtdfLxnoRL",
  "key33": "25c1nsM5QUrL5mPc2ENDq7ZLZk1in2maYtjUWsQrvBcw7GiGouTgDaowPAZH2Bmf5n8ZVgh3k8iaGQ6K1Q7C5o9z",
  "key34": "5LhJWAscGqSSfqJrujbisgeRs2b5mU81Qymi7bBjcSadiJo7zn4QFx6owVxC7T26yyBeQ5WHeANXigHsdewFAmGY",
  "key35": "41gBPxchkozKtKeG2wYgxWkBiL1KWRnbMGpBcZ6Tr6tWajqfqhjQgbwUbxBo6CazaBm6oBFsJtDBsELYs7tfX6LJ",
  "key36": "5Y4KUTgM3263rM1Quyr5BwvdLQQdjB9swBh1D3Y1SfmEcWyaF4HGnoJLoWVvekUem1gy5wetxvYYnHZVgV1rdKaM",
  "key37": "51x1gekzdvgxnLAqu92BYsKscQYWJrEbXwjwP6U2ii5A9Minfp1iNmKP1dkqxznjfumm5AzU3HrBTTc7bQQz1n4y",
  "key38": "jthPwint2nma4CrGqc1ELGb3iHTmwhFJCTmPd8poxPiyfRxEuc4UZPweHHFJT7xU76DnfWK6rER5w69XGdBWUgX",
  "key39": "4p9NCggbUnTbU5Ak7KyuU51pZ2JM3mSNZB4qfjaFYu56H8DayH5L6bNZjCMSULsT28BAsA9zc4D7CcPLiUexs9bg",
  "key40": "rBCm3to8mfcizd4fDGZyqah4KQjYhmn1tH7zsGWPwHG31DUsy8GaAS9oNbBfz3su931oE7h4SG9BfuYMWHsVpQN",
  "key41": "4tidUyZrkFsVV3sK3GNFKz31NaEtT2pghAKNbKmWWn5jDUBZ1TesoGoXzrYYLRgVv15VDn1psMo6gk2MgWTMpXyY",
  "key42": "5UgWdBiv7RUeW9jTfxbc8Z2DCQCpwwnoEEaeLTnKsZphbkh9xWbqVnGCznvUJsLYZ4MHy9vy8DGPtCpuaZ948VfR",
  "key43": "ZrdT6btKtsWLxtZn6GuMYHbwWhtJpHNdYB97jdexZ6pDD4EDgHL7XbrLstky9yU5LXNc94zP7237a43SCTNQnok",
  "key44": "4M91HJFeeNF5KcEhKrw4qQ16ouqCfrYTiJsn6gVGtBdgjnPogVkip9muBzJvH8tgiWYTL9J2XihPvMoASivFx5ju",
  "key45": "eL6aChP9G8CvQ5AR5kKkV2VYjpS2BB7tku2QAmiojfVtaw9e9vuwTqZ2MoEMaE4DJK76Re3HCWLyroWShKMp1Uk",
  "key46": "2hNqgKbARtd8UhcaRN1AMUzosQmbrSiY9cuBHpNSmvmr3Qme2Gi5ryQDBxUcgDfTFmnES3RvcURHA9VbihAi9jEQ",
  "key47": "3tN8oAxvUvY56pBCV9x2f8Wmewsj8AnYRZ2aovdjJm5rfi8ZfvQQRx2DGFRAgzHeGcrZGPDHcts62YLs4hta2c5G"
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
