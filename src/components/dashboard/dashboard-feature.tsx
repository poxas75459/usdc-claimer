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
    "wWbPM2vNPcvNvK7ue2rcpkcevsNGe3eDA52oibkd1mKxX8ymMf27u4UKcWaVhfuC4yHcZHLenYCMjiYTLMS4B6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHRUGjqB4JNPaDdNaZ4gxYNhe2tHKqveQFgLDEoYn9nuspLWoQP19VhoJyfDmjHJ2EfFoohcMVuMThpzC61uvGY",
  "key1": "218AqmHJuFAttP5rVV8yRN6WZrKCVBsr32SkVt4t6s9BHY7eZaH7cPAWsCCumqdMLZpZUcMf4fRHJK3RwLinsyvJ",
  "key2": "mP4LHMWn2Jy6aewWy25X4owXFuaqZcxa3yb2n2Yo6EPgjAbG44ocwkjsxy6fU8bq68Wn86YhtLPtK4j13o8r4Yw",
  "key3": "WaZ6gQh5mxwWt4chwuXLdXTd5rBMg52H9QJ5rq6K7KWVtcDHaAKcePnZKtL9y45s5agtVfSuh1SV1NK4UvCDT3g",
  "key4": "qFEAiFTcdWfZjoT5gKcfa5MpcRtkdQCTzUMxH1ySNtid195e2YcXryUwT6pS2fedNqBZmfYqV2WqfRbhXDYvg4T",
  "key5": "3b3VwoTp7zyLbQxWAiX57Nk642EfbcQfB63A5bmzNeffWXbatUzvFLwybMsSYpvtjGa4u9kKkrHcpHjPGKk34Z97",
  "key6": "qkoQpvvsVVMiTjk8dDpUkBtd7nyo1HSCvQsj5VAWRDSFtiG3NSMauABhSB3RxPUyJ14wtxJK5PkgB6211y9LivN",
  "key7": "5cLMWdFMap8yWU2c4EgsungyXUAi3SRRBoTLNFASKfX7PA7mcYsK9mfd9V8oTGDoSbqKBLExTnCjG2CsmukCZKRb",
  "key8": "dZDFMAVeB11MoguqNCfc9oKuyhjXsiyu69zmZ5omNxUFFK4pVH5y7fERcBR7mQaUNRcmSDK2dkSm8d4wHfqivHq",
  "key9": "5xiaH6AztSe4fAzJptF8zq5DmzkeffL6iW8hF5tE4JjNLrrmwvLdNNseB4ENotBpJWFfPsySNEuHuQsG6oscJWtL",
  "key10": "4d2pv3LFxTaMzBiB6aBkAJ6jJopgzZrDnJMmqYe8T1govRq73q8CyjySbQ4xnaaL7jernP3QN8wJNqhxjYx9hYTW",
  "key11": "3uzA4Cwv248sQaDRJBoy6zkTBsnnrX1eYmKz3ujQzzQnhLVX8Wcn9sQ6jzg7W4TTRSPjd87qpweHujqG1CsMXZBs",
  "key12": "4DvfH65S6JW3vedL7hx7EZ1PJnRHDVgw4KtE7VPBzVsP74B6nJXpLSUkY7D244Bwa599FZd3sZaw11R4P2SK3Yy2",
  "key13": "3Nom2WJnw4SxbntYgrfD6ue8sXWtcEqshH3HT4Q5FYzZvFZMfUaVJEQip2fBmawHdFyYG6F6mYrs2MsLJquHUDiQ",
  "key14": "3eY6tPhhp67duJLsWTRETXpuLzhBBzwzoTLDSNgQfvji92kSuCMj6WkupBa9UJQ1xmNy81r8i1rRLokFe3e11Usx",
  "key15": "2QaRiGgjGVfBa7H8fiTyAhsxYbQ5YcJGJcfbhMqnLQw5r3Wu1vxZXwwSWievg7AQTAXHqjsvm3PGuAoGGACUfN4e",
  "key16": "3scR8Zt69tB5GLK7RwaPrNPxF8bbBPZnt8uGSnY9xckmdGZcJUJxGeDTdymkbm3ogAworg72aB3qQreNdxAcb6ob",
  "key17": "35BZXMkNJiQgeeHVD2GxeU4fePVbcmq3YSmtWueEnddKy9cNHQUi4DiBeuxGUxiEnm9DuNto4FTvbwovmAZr6k8G",
  "key18": "5JDwgv72oPMBazoZ2zHBxa68nigB3WifHrEJPiKH4Vch7y1cbqmNUErPNxqDy1ouFyAQDEXwYt9BJTpgvN95T9mU",
  "key19": "3DhFj4yEYdXbXkeEuKEBMLxjgedHZREor5JuFBHfys2NQX9wPNYJ3VbfgzpvmmsM6i8aM78N8ki7FKSPjf8bn9zx",
  "key20": "2RRnZTx9fjibmC6snuNJZGKHx7YPunEsJiLh6udVsgJ6A6JddF52FzGaMyik68xiYbmuWRDLQMSxHvU6WjD68Mvv",
  "key21": "4my2Z4aTxwydZFt5omqZoVgq2jBzvHVHTuXaoiBgScxjWLr68baxVrfsP6uDo4uotiPi9nmSyjdmHFbTtFkkp4gs",
  "key22": "63ECR1N24vyHXQbcuGvPY5hFP8Jzut4HhhJPk3zu846iFweMyrvt2WRw1rQuvoseAGHzd37aAsLzxaFL2ZrRMJ2i",
  "key23": "EtQMSzpVSK4qe7PgaCfWytBNaJzQabiKMawkt3LPAT1SCwYY8yk9n8CkWrGv583Upq2BEtxArwQa7yP5nNtgXg7",
  "key24": "4M1FEVvZXudFhBBmbkw5jQKgKSeGnvSsRE34NFpj4MTjTCUp6Ut4sh3Mx3DqReqi9umv7DmeomKz9CnkLiobS9NP",
  "key25": "3h3PkPAqfNpef3YifV68KH8K1SsUapUaH3wwRS875zjbZJejwMTtfhJMwMVrhooPkPo7FmNLqKnoDAf3eHzzWcEi",
  "key26": "4vP2ctdezCRPZy3CNS6vxpUafTX6MUHBtaR22zPC1qtrU976KFuMLbCyVtxaogwMjYX3M7JhbfnRB4kgdSUcwSye",
  "key27": "2kQgtWSW6XG3DaUgTcF4TUSfSY8wXb38A1cgUEZke2wjyFFBtfbXzHa7uTacEfT17xanWKuEwAK1HLsyiFh7czw6",
  "key28": "4qigFVrtYhL5R4kgfUDz9bcYo2xaA6ENdDQH6fWeiZ68Vs8SsHHiHW1hge3iCafkuSERdEX5Hvhra3Muvda7TEEh",
  "key29": "4NPELNokJkLEGrLaRXeDXbQ6B4e9qgrCPB2aGQkPE3L3KyuwpTJobDEQeaPbcd77AGWJaocUxjkQs7xVS5ZsSXQg",
  "key30": "amxA8FTh55xzJ692EJLAzu59i6y4TUdA3AqqN3ajPYWftHHBCVvrbephXXSRoj9LxYSSFaUjoxmCUJZzUvr4oZy",
  "key31": "5PoPrqHnB7kn8dD2KJxsVCuamjcDm6ki7HSGtsVe1Q6Fr9tDRicmKGN3F92pcWwa2F7UWUK7QtCqw1V4L5xZrNm4",
  "key32": "2ztsknAVZ5f7CWzCs5DVU3DPtzWCbnPx2p7YcvTNWCZmhBhtdqG2mHScqCcx71i6BCEpQyV2SLAsaECrtfEvU3RT",
  "key33": "3mt3eExrwq6BvRReNza8crMeCJYo46xGidMHS4yJ5BFxLjZH2kNByBPb2ugrv8GRssMD5h17gHQaEkmf8AhhjbyK",
  "key34": "2GiPGg5PmXpJanD1icK6GJsAFy4MvEEPxURiHvAWsHEbuzQRp6FY6Aom8fNQ9MsDDTShWxm2ervZa2MkeFxAeZL2",
  "key35": "5QJZNZtzdNik3YqZKdsVtBnA1EGAPhVLugN7V55stWBP95ZeU3mKDh1QR4we6Bd2AAQzrMpUpnMnSmQ4fGGRtaDs",
  "key36": "2AVWo2dMP1ERNpyXvDn4MB6cQmUwD1kPS7DMwz7khxcvYqtpN3rDY2UMsS7BFoBnk65EV6RCvn54foTQZucVkpEQ",
  "key37": "77uxW6XnahLoVbTJQ3H9s5sK5SECLUFmpFwn4uZrXSjhBSuFSfDaUHAHqQh5knvV5bDbVCx8PmTHdSaT82pYRt4",
  "key38": "5C87pDNo9Ff9J114a6UjmovwWGpyfvxmfFzD8Qj3tyfTdMBafDoQmDryQRaZdpPZYvToSLMEw6CUG1AATo7coAse",
  "key39": "2iBxRarsVh78q7cgBW5UQgEHgRWpjGJKoQGqPxitd1ZnCMwJFCtcYeYP4gY5B3RrW3phYwiUqtmT2XrHYQvFhx3A",
  "key40": "36shn9WF1igoDw3jTj6dwVx3hrnyYGikHjZAL6VYhknS9JhkHDUcSMYiCTLvfgrsZY4MsrzQNq3Qfa2qp3uRnS3s",
  "key41": "2rTyNmEkNJjEZ8JCW7XMQ6Y4dz9FEjkeYtNFT6NM71becNLs8LHRpU76q68UdQfFVr2m4XtJWxMJkuPFJLmLaoRF",
  "key42": "5uqW2rZfZV854Jhq74p1xCih8J9b63d1mcMpCiKeJN1QtZKL9RcaxETAmmVc3uBezL7kfc57BGirPsLoMXyEWsku",
  "key43": "a6U2Yvh5C8vcxgHHubYjtzvEAStstFpzUQLJJhkhifEQXpugrXPo1cm6aywMnNGANdhWW2nMGUb1J7jTwJzsWHb",
  "key44": "4hVACYyd9GZQEYnypTdWsFnoqGmhdMW6LF7ui273eSJGXEruKk22mUUQwGa5P7D5rMWh5NEK1s1ku1PQE5TTfHmN",
  "key45": "xrAXuY2Zdd8NjKGSE2qw5qwaQR4bzV9gUtx1LK4okPn65cdv3DqemkobDiz3KE8QjpVzK2JvpFiqtVqJsQ7BUFp",
  "key46": "3thishrBsfo5kZpPAJnKcfcPjthArK9i6Amd7k4vWigFnCVqZfVyDBwEzunNEZYLCCVJCmbYLPvd9Aq9yAmsvEpM",
  "key47": "3tmw1sZmip8bvR5c9QVVjLujrTDZfQGC9jEE2mduDkrqE777YYAHaxMbfHR9fPwWm6MNn997vpEpNFxF1Lh9Kmw3"
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
