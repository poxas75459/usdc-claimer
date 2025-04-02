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
    "2MTqAke7L2cpWkgtvKZbSJjKo4DVqiU8LRwYmw3dx5nTN9Crx7UAvCvgfJrR1NRP55PpPxwKbEu1vF8EYnruAWUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xe9LC8xfgBUNE8SK97RuQEyZs1HyHMu3XzJw32GQJ3rzgtyKfFghivhVfSM9n6zZio7yfXFkwvpAgjSZzTZpsRk",
  "key1": "5WXUVhyuN78UGYvrmyaB6Ey7u9xr289L3151JSPizjh7W4EbnumXRheNHb2GRnN5dDuiMhhL9hPAzJgJTPEejAHs",
  "key2": "PchKCvP8pCAJQJwfSMBQoZzxb13j6385tX3VtRVtYKaWys99LCnNf8FKkXA1fy1WB5pa1vEiFHiDAgtsNMT5qwK",
  "key3": "28uHSrW8JMrjCpMHJHU7UqNdiZGZzjtp3XGd1rG5N7Tt7jAw4zyxfWQmkFjYg5h7erb6HAhpz54K5WK9YoZvt5f9",
  "key4": "XF6nQN5gWEcJdfkTRPDQ9wV3LWxUtseAofzHyZjRQcG6ackK8mqUHNLmym4CoCjp3JNjGGUyMDKc63EpS4ogakP",
  "key5": "2vhusRmLXkhKWL3BQDCt8w8unvcsFkWzhH1qcDdrsbeHoLKNRNPYETPN7NexY9R3bePBiqnRKqsQ8NmVvKS3hRPq",
  "key6": "sXKLxqFGUcYuX8cE1r5M8iLd5mRsenvCrkvMbJeJMEtUkvoFC5Dh2W2NDHASqF3xsSgyyQvHLdwjZPwFyDqWLLL",
  "key7": "4NXLci6peG5f9yVy5JPe6XNnbHNPLUqWs6z8tCAsZeECdteoqkVDwzjtaVgLcGkwM5qzwKKVRJq49vkT1uUaR7S4",
  "key8": "bR3yFRTRQff8mDcB3ZkQx8duoBsKrWXVhAnbApaHSudHN5hTLybwAPzfdz29TZBLDJQdNCXqrxteKNBya1Qa3CW",
  "key9": "67iuNmyuCyvjSs9hKbmofANUUMQo8VwC2C5tDNX1TTE9hKb65DmvYAyE4vQyGEXH6oXys55x13gswjUyp3QgqUSq",
  "key10": "2EhxmSA4SMSF1n7jQfttQKnkyTV61GGS8esh8BmvBrpkEuyv7hrtbjRWHk1knomru35a1KmvpLMosq3GV8RF1xed",
  "key11": "4ojiWvTQC4RH4DX6JMjVCJqaBYKh2DKKRNnKG3WD91qXA2EGEWCYhrJ6Fendsw5bpZ5dx65hhZX39t9jtQNruGp9",
  "key12": "2jhBvEfKjgsDWBzvhaAvsgDb3YxgoFKApcccZ39nDMFo63VQy7ByrFVfCEKidqiP1zVHT4Rp95ApEjwFcKwnf4iF",
  "key13": "4F5FeJenpHCkYHGC3TF3LyKCvNYK85ghUD8AgpqgyS6oBzH35GFCqTW8A6d2e7rSHpPHSSHP4QUoWHmnQFAVffLT",
  "key14": "2cDoDcfG18Tvw8CQZUmUKK376bT9ELjRtK7uy1H1QpXYedngCEM1DLzQ889SGdEUgtnuziGsEVZotSG1Tc18qAtc",
  "key15": "gZQ2v3FpDGUk47c2kkP7fbP68FrT59Ha7NTGLDU2c6ZJudbuwuRoUu6AvQBhmayPjhxXrGcjwsrwAeggYo1xTqE",
  "key16": "3tCXwtQbffF8aj2LGxPKAWPkfPDfFVfuGYL9vukpA5QdrKBWG8eY6WGn3eHULVSXZSHviZoHnJnFkpytPjquQHVB",
  "key17": "G7s2sHv3haG6EsVrqn2gVH9zutN4j5eDJd86Y1HtuHixtKhH2LNQ5v1v6RwiWVowXDrhxxd9aC6iQD2qrHrAyN2",
  "key18": "2xZPrxZraJupS9RtYddnq3SjGLMAwM6fkrxeAE1dsxAopYwaBhj16kiyBR7h2a4kZkXCDJcxRoYKLwUo1voPXwRs",
  "key19": "ywLLHz8FhoKHF8VaMA4yzkPfGzu3DEf72DTPVenziUWw7gzcb5AdZN8FFdZb6WJA6gL48Tdbq9VSv8Ebv45tdyo",
  "key20": "48nRM56N5BnAHhzcR69NUATVfrUMUSnLuBCxbgww7RzM38MyUNLUeZF7cidaRAz5dEzi2r5gUqtM5qKipsh1oRCo",
  "key21": "5o86cvLiosxshQGMQNR8HivWU9nZSBMdo2govmsfZoVsNzFQm2bWDPeeUgJvXTvHD8q9Hw4eMbK1PSP8vVoQpC5R",
  "key22": "UkZBqiP5tLqMA6AvmF7NpUL9D8AcYMjGwfJqMHyU9h13TFrGYGYZKs8g78vFXzWE9mgNrAsyPJ7FJTHdmWvqFPQ",
  "key23": "5YEjANgvd1dL1Ye1rzoPPACou6KsEgNuJcSupu36eqGdMcpPS4LrZBEGbq1EM4a3MFf1gn3zTTuH4gU4KrcBZThf",
  "key24": "5XN7mwLuF6Qtx1XUjk2k79iMA8CEovYYSbyPXJMjXvYugijom4U8cW6ej5wUzatJRHuVBdPGfVEa7vCN6JDb4pLR",
  "key25": "3aWWAiZ1NoWT3H7WMCsKJMxztFu9htQZTQs9sHsNemgNeBpeNDaU67p2SG4htjk4D46bbtJbkmmUTRiE6cMMHaTV",
  "key26": "4wL4yet5ekzu2MtJX2Zsk8aVLiaTzya2nCq5W2TYAEyqYCiaFvPKyRx5QuxxcFSgLmjJKe7QEKZD25RFCUkdPqng",
  "key27": "4bZtYGcGQNncVt2PEoqm8Ppd49sfKw2GsFXuaxZN9T53gRbxfdQ52fzv18rc2Hn45RCcDh1jGagpBWgEnR2yjQxX",
  "key28": "4rN1Ews4DrQRiaZrZLv9LLG46uvsLy23TaXCurmnFkEiYLzpDDsTTBRiEA3g4kSGCcoFmRCxaJL8Ub9RDCRjKFr8",
  "key29": "2ZFN24m6mXaXe7xSfU8m4gZ4Rgro3wxuiHrMeGkLuZHXuh8W8ppRBG64m3MQ4okCrtQMyYbcfKcsfGDCDsfYXC1x",
  "key30": "4ccNaNR3Vw6RJ6JveRxWyzqYobCK2Do72RkwJDhztoysAxmtDK5piZs9za6Qzsx3ZtMqK3qLLcch8Vtn3TFyTs42",
  "key31": "7w763A7bR98s1JzXTwLoDUuSxPkc8YbwcJPnXBb2UbTCgsiQzzQH5V2eeMY45wTsajE9i5qZ5ZAGRzmME94xabM",
  "key32": "JcjpixjvbvwnEX25pyjBHqXxEhZvKYFYYdHDA2gQUhQkqWfbdh5L81sEJHXKs1bYuduiAyNRtbp5r5FGizwJnCN",
  "key33": "3irtVRE4KCFeAGNk7eUubddf9Y8bXNR9f2Z9ca9shqT7NSsZ68bKYc2ufhJFmPufmJAwJyGHMa1wXCvwiDteCHsZ",
  "key34": "4Mk31yujvZzUAsKu8iEgPKe3iVuswX2hjB5x3nycQWuj99Bwk11BfTK8a4QtjDbrgKEMBf29i8A5HU9G4Tv2V674",
  "key35": "4CDxLrPW6QbS9ux37ybJNpXRPQuxvnEhLVpXWt3Von9pA3JdM3y1TorD8FUgGRNwUCv1uW2HwAjnPrmAdLhuj11i",
  "key36": "2iD7VYYV6DtjjPt2J6biLxVEmw8UYzJRkPX4wv69qYGRJBiay2cV5G1R2syWcutvjsGDghCiSUMmV73nrWion92z",
  "key37": "DRMKaPoKXwg3jgTDaS8pSNDxJSwc4wyqVPNSq7rY2qGqexzJAnnwktGSSwdGqgPCTa2KLKV8YmRb9QXjmBAWJ2K",
  "key38": "JePiKUA4XJ7pm8fsqmVSa1Npf7eNewv2rCZgXpkQg4xnVRQA48RmPMFnXTvhhviqn1APXwJ4fxccJWGvX9JM4yA",
  "key39": "AKGfLb4K7uEmZi75RhmoAxVEYBRiANJTfkmEhj6kGwW3bjBcPm9SptQ9FmgFU5GuhvMN628DtYxucxcLzdtH7k4",
  "key40": "3MFW3G7zZnRfNp4cnWRsUR6E3G6xALkFRRsgQgZ8Ux5u9qMQEZrzADaLrDd69X3hLCGsNXRkAB4gSNS97qqJL3v6",
  "key41": "3vUhJwAxvTB2LgMx3L9vXz2m6Z6SS2JxuyMqTnrvzU8bbEdfBjbnSExwnKX97wkpBKxu7VccMezTCJKNKx5XceAg",
  "key42": "4ocqpZgicaT7gker5QdwV9rYhTaTv9r9zDS48hcxrb5WGTmSzWvnsemNwN3pmszisoRqSf3tSjeNecrUYesDG3uk",
  "key43": "41pBMA9RtVu8Rtt1nTefAZ57Vz8stkWdooJR6nxRC5CdvvbkoDGHY4AWPAf3t8LqkTLSMo9uqVNJMYEVStNkbtZF",
  "key44": "koABivutP2sgHKrSm5y5h5GAReUHZomVkZHaqjTumZCgPZmrSWqSgVimWRbJ9wKC7Lx3MYw1MESxW4is9qnZrGS",
  "key45": "dZcrMbGHgpq5zojoSLgBULqDJMa7RUMtTSLDNdbM99svF3v8TcAhFm6ACkXKcZ8Dwxj8HJPTiUyhVrzkk5uCHe4",
  "key46": "uW82USShTsU3XvnzLRvFXEHiBA6RAPhFyZFBweeikaCiSbUWULzMSppgMwhkLaRgkJdiH5uvXuY2JNp8odoD5AJ",
  "key47": "5jkbJmeMNQS9Y41Eiya3mQMgg7sqsfUnyPsEnESvgTNWgfBaLXV9mJPxaPK1AQCpVhfhzBefhawXT2GRJTN8zUVF"
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
