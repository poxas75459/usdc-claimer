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
    "wS3CaEUmZD391FLSCDiAhK8W1yvV7P7UTsxLGVMGU8UfpXM9nTE5BpfUj3xFaGetK7jy2FPZs189WxP18qND2fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKJenF6ih1hjw2HZUukE5CufauMV189ECrjwqSXp4nw9zCHsrpovgeVYo2cHs36Tfq5b3A9b2ZzMvMuG94DM6xx",
  "key1": "2ppDLBD9HAwMFyKnga2zBJ6CG5tPaucUY3iPeMsqw4vaPpSJVaa2rZhCcTmAMPWgw4kFSstnEw1WqEWKyWvmVXUG",
  "key2": "52LCjt1q1Xge2xj9KenbsXrPK47u668xEn7FA1ivanu7FhP6GmUxKVqtoHcyNDUnKQPrFqNrZUWWToH194bqwpYg",
  "key3": "uvVLjsysY9x7aQPbQ8RZ2ptPtuW9ozikjBDoX8eRj3ac5yRxpLc1AocBKHQK5VLXVM2e5CZ8DF7q3WX47RePXMB",
  "key4": "658CVwnAjKPBHDX1j95nSb7pxVsjNR8pWXvsnkiCPDJcgBHMWhdyuANZNzb2JJScV5BQUU5bNjTu1QAXg7jsf7Uj",
  "key5": "63riz91NCg2bFXChyq9dukEveScdYS74yY6Hcjnggvr55iyLbeMpM6RDDy6SWR23DLse919tTXpfdoxmMpYZq6du",
  "key6": "45tJdQnTcyheqdLNWYfmWcs4cJUVvaXzp9nWnsZaysG5mkPm8GRn21cN3Rc9K353ceN6s67toP8y2QKpu2vCKShj",
  "key7": "1zKoG4iFr3WSy1F56XQyMJ3BB6wzgBxT9Vj7yjELgknRRAJzz7ihPuJNEZj5wFjSpu6vxnhDSGNwEBe67rZ5jDw",
  "key8": "32pfgT6ninV7UrB3WqruTaW7RV69NB39rKvfg8dSBgVkcHR4JkH8xm3kFC2yMFNSpVQgRKxm1hTtd7LGa8vFb5nG",
  "key9": "Qg8axAhfvaV9HyLQ5LJZuH9ZHDqwm7SydHbvQDoc7eVazeGTbjTanVa37w4uJK427xpnF5En1ZNHWAa5RuLL81z",
  "key10": "5Wg6CwnmEuHhdxQJrRRncormqkwZCPfSYnK7sMMgUbQW7BDjn1LrkqQLt48BMuvAUihxEnWQdaKjvWec72gRpkoS",
  "key11": "4s93HoRBFt2yhsNAb7M8ez7QeJ3eLULzZrAAXyYAVv46it4k1NPYTaBg9Wv1E9VfyMYbDf6NCpPKe9dRer9ea4z",
  "key12": "5qU3Ec8iZ4WE1WU5G9BfctgHK5ZZbB6uUtQK9btuUQDzG7Lc2nKgwTmoDwqeUkQFxhRB71SPPRgRn52tiUzZFfYB",
  "key13": "3oGUV8AsFiPvg7Rn1VrPCgyvEmM2NpSP9eRHemf5kaiYWVTx5aiza8xQL2Z2UceSLPiyJFAprk6JNHuJga5QhSS7",
  "key14": "4iTux4b7Ypc3Q481mA4w61GbU44QB8RJqSvjJBtWV1R6KF6Y9XmZKU6gtvDLaVA5PDTwr7wsTZGc1EfY451yuodo",
  "key15": "44XfXpJ1CBtuB1n5vLkFS4oWwYvFRPrd16WnANZQcDMYcNTjSQ8cf8YbQBQoZodwCxFbqoHh8DB5Lodw7jCxDqN7",
  "key16": "52UiXGNZjRxCVw7yfvgN84p7wyyGAPMzHP9qwJX6hS1FuHVxSs6YT7ojKWLkQxY8VYN2oJXLie4HSasi9iNFpscm",
  "key17": "4xQPbF6ob9j9JqhbVoSy7jyKf68xTkezGzaepkHZZ13QmirgeCp9y4a7Nw7Pu3KFwJzHA8NhZZs25cwNVBbM3M7U",
  "key18": "423VkGDZjFv8jH9CHe3KHq4Jb5HPVuuarWTRPM3ZWf5Mt6aCHb5sbTdQhLdz8xGWYrhutWBQfMjZSWt5ednJUU8Q",
  "key19": "oNoeNydtCeu4qPQrNcF3SnPDXxBVcykUfMr7yPJTcjU5Zuae8KBcqY7a91ZqzyP12jrJGH5AgNTB81XtJwm7mNd",
  "key20": "5LUmuP7SSEHctSPsbxGuGKPG17xfCc51deSKGP7tMZVzpsWHv27YAi3nwuNkwuFFu9nDn1CDtmoroaYwx9m2exLc",
  "key21": "3fiAbKyQhBht7CihhzZiSHKisggaANCmfvDoJWov7aBxhFLGXtAyx8GW4jSo2g52g3tMWR1VhMRhCTchVs1TrYB2",
  "key22": "2oatKdCKbAW5asHaTtgmsW75ahRKj79dshCpvnXHrY9MWxopAQAQiPguvW2jU26753jJqLYe2q42bsXNFdYcizCe",
  "key23": "4mifchk6qirgnchr4huhwzcBf1NmiKJaYtsFR7MgqKbipMMAifJfj1spj6R5odo6E4iAi4GumxDx891maqXfL4cZ",
  "key24": "3G2NZvXfMNgV8feck6aKpFqHebDML4zyNEsAasqsofMwfQT3R32CrCnAAVwXCWrdQJZtTUw9sBXsvtUP77dCrR2M",
  "key25": "4KnzN9A1wJjwVUZ9FhmQhy2dUZQvRxDW6AwVDnXcphmUxMYqXK4GfXfV478a6dmwehqYcSFERvDHfUyW1Zw1vMLa",
  "key26": "429nTPAosfqiNELL9v2qYstubzhfqFrjVct3v6ATEgPEDbMG991EaU9GVwJ3uisRY7v3Ho8RHfdvdXqFWFptHdx3",
  "key27": "2EdEcMvMWGsKQWWrn8cuZcS5QDPAGJz9YK1vco3e23TGGsQ16R4VDMixCqpyVr6pHpzNC9f8eyy6vPP1b8mdJDkY",
  "key28": "3ShGdDm7X88j9DaHPUmPQdvRxEcdGYkwp1zzmRkLkbbdJuuUbuusi7dXSDCyHStVz5myn8bpJe2Q3yZNnGmRZCFt",
  "key29": "yhTmDknKU86X7fXMERecg94TDgSJBcoFCmfXWCrgTkEbXeYhjyPX7cXvygdJUniRRpE63TvMVik6RD3iDzKa9v6",
  "key30": "5CBT4LbzegdEGpEtX6p5doKXM1EjqmeLXJhTNaRyPZhHG4VKaeUtWYNeWsUG7D3mcruYzer6uB6fq6LbrJWRN16H",
  "key31": "48eWhq7GognWUwLYYVDJybfy7UUdGyc3yV3QLaTP2y1PK4SNGnxxSXCyXj1x53tQgYSBudnivaLV4BkLqcu5nPes",
  "key32": "2ZZeXXVZRSN3uG77TDuqSzgkwJ6PooZmdzPEm32qXXwF9YamL7ZT4zzQn38686zjoA5ue47QaMfkhfAvxUvdUEP",
  "key33": "kFZnsJBTCf1AqxGRFL99vtVrV3eKzMeYDQc6Ynu61R1ptXbfwx4qHeLCqzuSbLBqkyzXenonpiEGMyB7WFbR67c",
  "key34": "2g15MphAJWg7skuk1v53ZHaP39xRC4sKmbPMG9tMcR6pSnNrjwZffLf1PvTtZXo6o3raWxksD7Ro9vnNfbsxX2Xt",
  "key35": "2vpxib9wjSecYwp9yBuM7cQQsbPhQjfQwqUo7hhA3hmsfdXF8bm6dBDtBpzD3GR9DavHJcKiVvSp68S4ZMfVTKZ8",
  "key36": "4fpovAf2PHy419arY13dMiSdR8fN1FkjmR7bNuAcRqZPy94rdp4oiWJNPReoEutDhRkQFqaXkEbJ5g5g8dc58Ucq",
  "key37": "2p5HXVSmGaSVsgM937f7qjNWcMqxJApdgQqheKJLvkHyE3TvLqa18bYKkzioaUi26Ph2crnpqFNtZQRmQj38z5TX",
  "key38": "5x1VymYXx1eJyzqr6vKgt6b1SgPyWoPSEuhQBPthxxMvC1iDdxDEAkEWXj9T6AbniTRo7VVLtEpRNJE4tw4qCuD2",
  "key39": "5NWCg2ijpuMWaBU5q1i2Cr5B6VoiLBTofau5XRo4k4KkjrYXUh2piUjxBdQVicmgvEG4WUeiqG1XAD87wf8gbpsx",
  "key40": "2gVtzic9gm9Pbhsc9RBiqdFSdar44inR1qQQQsABesCqF8xVLKVWMt8KdUkbd4etRpHThhqFcnp3HeKjMhR9HzTD",
  "key41": "3T3fhEZxRvDvxyfoke1qPrQTuiBEjTzGBDqSoEr94GGBHuayBvpF4phPmPZzXH9grnbjffyuoEewFS2zByPw3Vxw"
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
