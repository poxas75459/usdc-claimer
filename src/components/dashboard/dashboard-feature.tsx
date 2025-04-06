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
    "4r85ghfDTTypPfhgctrvFAbozbSXdZLW2TP7znkHPxSaZwYF5XbMc3zCAQMVtQ3wNfbogg92ty5XpT3hWBjr1q48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HqqfnwBP2yvEhMcrNayphMMs3P6CLkDyF1VzQp7XbpaurM6ijpehebjmNY2cJaWdo12Pjwh8UzPaewHcVLe7y3q",
  "key1": "2Kynfy99aAaURqNTvJNRm6Ui5keRLxmnDpfPoYitbRx3UhdtRdfXueCd6JxgqVsgrALwp6ve4BFjaBNdKGo73iL2",
  "key2": "52XyAAN7tXG3yCdgEkz8BQeLGhhu9QXLMe9QoPiaPD8pVtFHmNqJJmY6mngwZQSGiAAXjvDgAXJBzS7vQmZ3YpL1",
  "key3": "62o4CK6eLbH2eAraAENUNDSYpGER72TekVkonLAUeqpYHmBEvu811s7sviYTH4kYhyf76b6sgKRkBTK1jCx2CQLP",
  "key4": "4mnJ8mY2FJLxvjcKSSfzzQ9UW4MkhgaLBV5esTg4LmwR6Di1d8MD5bZPjV37vh8cR1vkDiL2HvhAaJJZoF9rUQbe",
  "key5": "5ydPq7EnvUa3kUQRDyA7LxAL6qrq3k3DgNBFcU2mmVyu29VjqSWt5V8J7EoipVbeexqp3gWp8ogtVwtyf5pUxhRD",
  "key6": "23gUFtGAm9c2oiAxwJMBmjkfKpJxxtm3qEdUWyJddbvYYWqkMUb8cSVjPVc4m6CsA98TTNaRJgSgkxxSnziWVqh1",
  "key7": "An4ygT5nkTeRFiGiBC7yQKv2adavmLD2vKnjaYGohnWahkaDEFf4MEXyNo1586vDR5TFGPMChPGua6993RCq4Tz",
  "key8": "2pLY2HieLuytEorfpvoincqv2rNAJx4C2s9kuyrNvEqvjY3TQrbGoN7woK96hXJUR4BRKZ9QoCtUY5QwmHKNYNH5",
  "key9": "34dLNscBkwXMrZwHQd1RF3c3Pq6kEnt2U6eSLkvcRwpQANjMYZrAVRZZeTXuhVDkFrLQU2tyGs2r9oLfTxsEDFt7",
  "key10": "xW3uBgzYXZvxbxcVAF1KXzeKMFQNpf2VGmEdqHcVkuTjxWSZMywCZN6CkhC2BJmeYko2HHNeAJfDZ9mj2BMpnKp",
  "key11": "AVfsxcRdLa9qLF4ruBMqQTQEwcUzJmFuqQbNGY9esAkfD1QYeGt1VFh7ZBxXrhkt3HqnDW3Te1u16YZK3msKtMH",
  "key12": "X3RXEaRGDTtaw11AdZaE7D7NUdz1uhxSGUiKemLkUXAxSbVHdkhPcHRo59zuZMnFWPKJdscHo1smM59wP4hZtxW",
  "key13": "4Z5vfaz5P8nwaGzGhS2993DrAj2CbYgDfFHz2SvMffCZWHoprTCFSW2ojGSM6ZZT2aqmaGZcpkpipYbqQyAiCZUi",
  "key14": "5ZH9fUzmF8toAd79FEiuPfm465bBHd5rfPxENvyjCrnLncyAqCqckPxcSjt1xStHWZ3q1oFYVEsrbeXfHNfhMweC",
  "key15": "2qsxwWKaWXRB2G332iYx8vrFT686ZuGug2bzQDo9AX8cQbdimyTT8Y1BMiBGCxje4xeAFq1Shr5MXtcKijTwV37r",
  "key16": "3cwC8LjqFRibU1hUZhCXA4Juu2uWKwFDVXJNnEpTN3fA8cS7fA5U6zmyCwmT6V423C29jmaME3D9FvBGFPiehXaq",
  "key17": "AHZQCjhVqHrw3x9GQLpySeWqqGciaqfKxG22A9ErU6VAz8aBzccJ1S9rEuetUdSYoDz7DJKvCqHQo4LqinkbAtk",
  "key18": "45zGDDrg7XoNKP62nhCyV2WazHh4SnFEufWPx8iovDg64txw4UxisyZ9tTRPxB9DVgoP4bdCQsgU73yd3v6ygMpC",
  "key19": "kG8HdFs2Eq65KX2Utg9JXxU5edd5ksph5nZygEbo8indXWZajPc6MrhNsrHFrtQG6pNtM7nWA2oZKQY1nARBxMw",
  "key20": "3igah2XubiYKUygxyvKf9JsQVxgV7rVffAcqHUNiAZ6TfBhKLyN2XKGPCST2v2KAjuPiQcMA88BbDmr2UQspsdYh",
  "key21": "5xz24STgW7HTP7XUHg5DBFcGUkXDi8vvmakJz8tqFRykLSMymVMchN2xRRJHuE3t9ojmFVcMdNTwceWee1394zDo",
  "key22": "55B2SBCpqDnFG7JYq3XdK4VtiyjaXji2KSGcFV7SaWo3Grt2AfMjB1A27CRP88JG1LqKfF8RaCuAVEgyxKTiV1qw",
  "key23": "QEjiC2rkFrsajmsTYm6AjEUngp4aB9aeFSY3kuf3fCoiuQS9r9mLTj6f4n8hntiDUaxRMU4AUWth7YEsTewVchm",
  "key24": "5jF5zzfRyc8caRvDxBmpwPeigtKb4LKdHBGxiP4FYxEVcQDSi5PW5Eb5392sm9jQfWRX7PZJAnoFwmUFEhNrxxPs",
  "key25": "2SrphQ2SxnDddJwNs4t9VatDqQesEduuCnnZ83qoCGKvAJqhu7hm7F8jWE35KzRHMF1nWjnQtb6HzRYS7z5yWMwp",
  "key26": "5R5PBgDDAJJxru1vNkxAZciLu3yUjt6WNUk7TQcRA3fYUVQqEgcYuUeybU8amK9zXWuU3uJqoHx1oakjoA9R4T1V",
  "key27": "5HkcB8zLPmARKWDGVj3daAcGT2gkx25BEVenmidr5KW5BBQ1Ts6ieTgMfQbAgEkgMYcseVPskvESTWKuurbBBLCJ",
  "key28": "4b3Pbr7vQrvmyDXx4u8p9oq1GUYGaK2UTbW1y2T3zjY8iXweLHijEAKBMcXeh5vfVipjrU4PMJUDF9WJABBfofS5",
  "key29": "3rqdgVUf8RKkPRdCgbempZEnNeASNRRC6QjphJWqnVAkeTNkg3yjznhb7RTFm3bMcu4YT6NPd7FVzTAsWfR1nTQG",
  "key30": "5ksfXVHrjfW1D5SjaJ6TjfA9x83Hbtwj7R3VdzyuJYXqA1heAyncA3SVWZD5vpNEGBtEcaapayEKtWy5HqJmockD",
  "key31": "5xP3wFX5TFcrsd849SyrNaPHDxSDe5gjppRwqDpjqNLGLM729PmDiinaorFiksN1y819dwdZwMzAenR8H9zbTNs6",
  "key32": "2VBdFCb48hB2YJT8HXqMWRFrxWTQqrWhF6zFXE7yNqJ2UcgaKTEUEG94wMirLrqqxhW6xWgRhF4CAyMFn47VBsy3",
  "key33": "3PGSvAfxA3eaNtHTXxSYVmzjfRKzeuYUSaGPmD7ctdQstiSkTTmkncyDoUpnWiCHULwms2doBATfuBLufp3DEfsL",
  "key34": "5VVB37eKQg7XT38Jwm4G976oxg1p51E5GDqVQ72LdQpTUgYpnC2GKqHn3rHuMEvbLBJm7U6FYpLS864pb9a8rJTb",
  "key35": "4fBiqu7jBpctQNWVDbvCeeyJTwJkHZx1VFLtAsxjTgikDaMNkKSbV41Lk7heKCc4ZRaW6SwqgvJchJ1R27cDojBm",
  "key36": "4urha812FPVZpeKPPHjAJ4goGCJ6htTgQ579TPYD887GeU1k55dawRasBrQVfmnk1d1E3AaUbS7X2ZKgPXfPPVFM",
  "key37": "UL2EVd7jg5Y9EUG9pBDCQSsRrLAzsCk2WN8qNSB54W2Hwcuex4dq94ncugXs2xqTsxRcTuSJaBDanLrx8SkUBaP",
  "key38": "5Y4kDSYYNotEdgpTxMYLb3SBzAMKEaVNLo5R6Arx6iLPimkpV3XrUJYwrqXD4GfoyAFAe6MHhzZjj5WQzxge9cqH",
  "key39": "3bcQXacs5AQCDhXXQAyedmJdazteFRKp7KNkonrZZZMcWRgpavrujzyT5ew32WLzzGAyeN5mJGJfT4pi3Gr8Cjdt"
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
