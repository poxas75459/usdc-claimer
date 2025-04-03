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
    "4bTG88w9EejVptp2dw5TrDdakihAfq1g2mN1TECxPFGDmP17tjfFAfgGAh7FA9KgNmLHVm3WZciR5nwTK7oAYNej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4PhGDoa5RsPANNsiDpHTtyjYTNZqzoiGZLeSr6nKKWS3XsTBSrNZeuEXo4KxTz5MRpV4h3bVmS91GqapqAjBHM",
  "key1": "4BhqHR82fnABihmMBV2GaLDoHN4D3dMF3HyzKfmjTbSCwbu4y3FGWTEeeMfc55a6m1hThrh3umQjT6y4iyr48A6R",
  "key2": "3JQ3EccHNF4vLKoLX8NLG5suRZUWy6Lw7jNhyCfoJfgSfCUMvZpkPSe1taFUT32RHnKa7py5ebz8xiEkXLt6yDLJ",
  "key3": "G827p4RxY9WpXDKnQJK6Z7PuRp2xvJorCGUojXtEEjyKZj43aaSLwDtzfa5NHiZ3yRADygwfyqtdfqhsADByEBC",
  "key4": "3ogw7bc1UhcCgGyBRzE8e189V3b6a8mWnuMWYtv6tnGqWjPxGiwCS2zBd1PBGmhchQAWA7XR6aAf6hSvdKffq14h",
  "key5": "57gGK7PaxDEacuvXY3a3sRVoUFmQw5U8cbQs73MaD7trTHKd9tzW4tQzhH1p1eMFMYv7orFQFrYiDa8Yz3Ck8JXQ",
  "key6": "5mdC5ubM5zTPpLjii2mZFfoKwxViHSwWvipvexnnEgeKCQdNNVa5Hz1yGDiToi2u7oSwe2jY7YYDkYx2AXM4kSQZ",
  "key7": "5uMahJJ6bg6tdMuzcRxTD93qYUFJ2qRBoL6XUHq4UfocHYMKiPZRxtnbxEwPsFQMN4G1jZ6Yyk3ie5aqTJJaD8KQ",
  "key8": "S2bQUWwojSbg5zj2YtMoWNsLsRi4FecNcN7NUjbDDAmkFyFiVQ3kngLg8QKuRGpViRfTu6y6V5X6F28BeMKBRKx",
  "key9": "5NkVMjUjNb1PdmvVAQfS49b85D8mKXZfdvPt2WC7p4ehmc6rkcDtyvXu95Z5yFnqgrBvgwjX4svQFaWR2EZnyqjH",
  "key10": "41p3tzRebzMAxtfN4d6NRZkASRWP4NN1zxizPzHJGodXmpMpEVWNG1uV1n1WoxDxiG4Pd2yfSFVG8oQo2onm4Jji",
  "key11": "joA2baWJhUsfqW7ZXGGm744rcocyCFnJ9MY92SEE6XXsmnwNQo4NBty86kkj23VXJAFLsXUn1yCJMAT84NfXZFW",
  "key12": "4r3DDUu4rkTbMpDuqCS4iGjPkYhmZAtnw9GrtMkrnysKTXbrAhCWsDwQTafPN5hcP7MaCZbKADKaQoK9iQKzfK5k",
  "key13": "5oxtucdd9wtyg7oSB28LrmY9dbJBmHpFVyn48hD72LcXgW7aruEp55ZgFV1ME5pJP3kS33BbQAarkA43mZuZhHnS",
  "key14": "JWfBKfA3SRTgyCAndoNeqPcTd7oQVk4v9hKbkAAEvpj2tDLYth3kz6D2nJKXFXGFdpejEHGjNENuyD6RWKetgH8",
  "key15": "Ez77QwXkXwKVhsngSHvrDnbC9J9veSe26Sr6KLekDyXPfksM6BYKAdjqeh3tDvvSeYSF4KQerGWByQb6MXj5xdX",
  "key16": "3p7n1pus2SQDJRWkvmo5pe4aRvMeBUNenU6H9aEkfJgvS5vTuUcS2qZcHaryz1nYaNKUuWBU1vF5mDWPdkdiDuPL",
  "key17": "5r8XHpWCTzPnhg8ian7Xm4r23Va695Djnn4vQkEKDbooNpF97Lixi8n1jbaFqXjXCzwiUNyg213kxrTtGPKxBZpt",
  "key18": "3hg1n3MBLWhRMsgRaEZLh4PxLXE2aW7hrDb8wg9QrrckZtN8Z9sCr7RFYQyFKBJ6GTLmPhZrz4HXum38cLViEjDE",
  "key19": "56t15wuyd4cuh4QxrRtJeT9EscpaF6aPHHU7o997HnKJFPs7eKjUhfXB3pyyHVFUBe6fNzvtccfdNq9B9X3JPu7S",
  "key20": "3NUnwEgYN7kXa5fZuArVy39bq6mBbHcparBc5T2htPDRennp3rbERA5t1G2sPxxuaa2JjkSjtn19xNL5A9LS9Vz1",
  "key21": "4YieNYtfp13yXhthudX9ykrc6vNvFt5KHbETSkHiNxAvJTGEU3yJMLLGDduZukMj17hztr61gbq3uYFwv45fVZeh",
  "key22": "64cu2s6KSCpeLQJovbV9RVMdqVfLFECRhgRb1FquY5sKyB8D6WEtY4Z8cGZFPci3faeJWWWwQQFT2Q3VFGCEma47",
  "key23": "qduPcQqU2y49PPBMfmg3VV29MCaxh9PXiUXp7pvdozVYt6sAnPKHTHE6ZZMQAxneRocnEhouf7b1nMpZAMJ53eZ",
  "key24": "2W15W6jHkmoRzCEM59zVNYKN5cWaN8VEbtAsjxo1xwSkdmZLAN9Wqi94aMmKaQD1suEPnGbC4YSPErb6FeW3rLZm",
  "key25": "26dFErSGydcgTjeaZ7MWax2y8Tn4vW9n8HiFQLMVVqRyVxqrobZDopGTymE38j8SjcG6beXkBFmtwyCpFX7tvoGL",
  "key26": "4CRr1oEUuGRTguP2vT1V4S7DS4zooXd5um8hxTyPWKv9YGVgbUkQC1DHFbxD9QQvmaxkdedTn87FPRxEuSYodF5i",
  "key27": "hTCfx7TCkpQXmgpa45CCWc6qmrk7YVSvcH64ZCazYfuwTFu5kN9KUx6gMYnru6rYbLPXPyiJkhgos65VvfN6qm1",
  "key28": "FPmndphwnW2H9dYbdZWvBDdPJLzPPZqzUD191NddirCHxgeZg5xP5bhYuwB3zj3L8r651TS5YYiGTKakvWc89dS",
  "key29": "5ZVpUkw5FjYVb8FKo3BFsnwPbttrk6vNsKBAihATmavFe9qmLBSEGR469f1poE6fnhC7A2vdptr8ua1dQJrrr44C",
  "key30": "52WnK4Dy7PyWp3K4SeayfPCaDwA2YCtqLFiGs8yWzKN7STbMwo7Li6PsdsGRm5oAWXXcCq2WypBTnWHFtaQkooYF",
  "key31": "2c87DgphUAMVsdxabh1iWWQLCVuvyKkryFDq4pF8aLwgV4V1nPNRWVG7Hky38iVrDznAH6SLjQdF9wDhRuMYWxtz",
  "key32": "4EcDxm43i7syR8TgY86tYHt5hRsSJbRm8BQAsKKEaafSvc3Wk2mHdwDdJs1QWQ3YJsWob6okA3DR1QasAiKx6gQV",
  "key33": "4JdMwmCNBbSu4S82h1Xh36xL61hP2x5s6Si5UEsyKGfgoqW4Pn8bfVxKgRaDdPm2PWUhJBHU7V4ZdLyb6mx1wPAU",
  "key34": "5XnUna6nmCt8SG4GmsJ9eHhPTDPT3RHHZSHhB23YZ3tEPXcwJnhhPfnxDL5obzsWARABGep24YEby5vv8vQbCeyj",
  "key35": "3UoZNsVgif1RF83f1isCM9rwccNST7NNa5uyr7NmHtULN3Rk19Pp9L29Z4UxEKDrFzxQ12a9N2ZQdATp5re5Dkf6",
  "key36": "5DZ8M5YEbdg3sv5Kp2B9q6wenX49Gbf7nXzCFCY5oNkwtsc8e4nGdpfyDL7hSuSwVvCDK9Dxrgf9DAByoyLMmVmM",
  "key37": "2RWeejTAVVETAjMqySnxFDkia71yYdxRF2yUGwcmq9hn3V4HpyMCgBNd7sxab9Z5CRFJdVSihf8GWFKwt5saCbXH",
  "key38": "59tmJSKFT1tzPxw16eQ3XtEcQJt21tsRcUQCkNN8imsC7qAE9DUfkpxhhagZ5CdrRh7oz6Mn7eyVFAdCKvTaDoiy",
  "key39": "43tbMwRGc6yjAz38R379dPjT9p7qhkkGpxEMTyyxiVKoHfHFMAXJ9WekHPzSPMxsKMRfxqpVhsHyQvNbHMcARhBR",
  "key40": "3jGAQBXRix4GLMMmVMuLqDwv9TSFn4usQ3oBkEbbuyYdwaa3A82UFzjV1HEUnvLpSHvCMz5GExc4P6nGfxsFtbN9",
  "key41": "yj7e9tdTueEicFnmcv6nm17DPcHGnRvBJbakup5AKm9sThgqUJqHAf9R6qFGouEzx1tbBfDPD18rW1zSX1EPZ5b",
  "key42": "2X6z5jzgUc8WBpbikRT6jBgK5xpzRJQ6ZorNHrBMyCiLMV7AQVJoBDmD3hP9n3tUnxuCtk12eE75rMuFjrWBmfcK",
  "key43": "5MuhoExLN2re4FZZTv7kHVVqMKp785RyMNne1Tw2fKfTrWDrMdoZ2Uh9VrdpCNmeyyjyHNDv66SL2Z1EhFCLtEwk",
  "key44": "nDjjJnuEqqXTiAFwbBMMc4EQ8fuXq9KS8tSnRc2UaVTP5dxQPcs4GhZ5xA58hfWDuuG9BVWK8EWnd5qy1U6n9D2",
  "key45": "94a98SAbLppw6EDQhby4bxt9xe4KRRn3oyhumdwBLrgDkuRP6NAqZ2u684hL6Ay7JtfL1TGPMPKMGu7GvgZPVG6",
  "key46": "3xSY8HduJawEkfAcpSAgDJL13KdHmNjDJxgTZ4KCC2jUbJyCNcuAGkYM1RX9XhPA9k5TqmDMxpxW52Apu3BnVGpu",
  "key47": "4xXvYt4mwEKWNnKWqwLz2PUjfKVEtPKjDDnAUknFPKDAy5u5sJmkj13VG77QX4VmPBb3TVmH9KKQKWziY4TQT1cd"
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
