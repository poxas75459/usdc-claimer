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
    "5irBPCCJQo2Hnkd9758MAN4Qo6h7yAUHiGkUePmJdNsC6Qs46v7UsvW5xUcanMm2yAfxcPruHAMBYhStTSTmF3VG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VP776rq9ahCkcvWgmwdPsm7CaDZ7gEMjMwuwu6mBuYzW4qJ3uZJ2BUbgvKC3ss287UKLozB8W6aQVAH3Wz4zxfU",
  "key1": "4f6hqCd8aY5tfp1kAbZ3D2WGTNBXZU7r9ZNANGgG2qeYTRjddr45ssAXhzWRh7xNE8wEsuB8Vu59uqnRuWEjpfop",
  "key2": "3vCmgejSf7iyVkp35M27oi6ojaHkM8aRpvuW1NrbfQvspVBagu6sPz5k4CtbTtaZCRtWuuPBnSKVj3F1hKEDakrQ",
  "key3": "LsZZKEkLYaKxiAJWSdrbSmTbKJwujfHk6uq5mpEeb6qM33JStEdSfUarfxF3YmPs52yvxDERu94E3urMu84M4NL",
  "key4": "4qEspVLwck5sSXMjABMWBy8LrnUX23TzxiuWc8ed43wiy8HE49ucVJtY9WGsgpgcUJfbVPp7XALgUj4orVaR6XgE",
  "key5": "S5F2bUQ1Gu5Gm73fjJYG2Jf7c6Q87HutMm9mruZ93PuS5pH53dpSuRQcCnt1o328kcktAoD2XHZGEWCHisVPdGr",
  "key6": "2BGzM6GyX8rBhVsrxQ9SNTFHn2DVieK2vGS7zVRt3GmEejbdmYNKN6daV2YfY2RqvKJkaMDtJHhp4VXd552GgAD9",
  "key7": "3x9R5mYhw4oSxbCChn13R88S56H1h3h2Ez8Ty6DsXmvRFHHtT3fX6km2X8eX4wYn3FPrTAuXpD8iZ6wJqjugdm4g",
  "key8": "4jEk1prBWNGN25rUgbEDFiAunrffdG8GLythvXmozr4Nx7Euc8RqzTjZ2i9sDRaEzTixez6to19VviaX1dahK2ZQ",
  "key9": "5mqFeWTBpfszWJveiLkjqbUayQX5ymLD9UC6HuckzoSWfXFCgv2Gyo6asGGPZoPo3fm14XVmnqYWRRSCHjjr6FNV",
  "key10": "3i1rwJtXFCxwRcu3SPbPR3vcvKorJsc6hrybFpVuVCALMPomwGiSZsEfmujwryde7Nq7waKjU4PJBHkmUb3pA3mb",
  "key11": "61nZxhpJ5nPxae9yojq2BPEBK66zMnvVjyZ3yvQgosXoM63m6MPAp3N77mTCiVFEH9xYpSNr3a2ykpikYExBHFSe",
  "key12": "4umSKsgirxDrmtf5HkEykKF4S6dLAvzf9hhRgQaTR9sS9S5Fcrv5qWsd2uT3rfavtqXdGs6jfGU1Py9nD8nLEsnb",
  "key13": "3oAsYukK3DfJJSmaw9MFrRceXmUHeHLqeZrtWRPFmLehqLNouNkvKdVB6TsDa3RHuQpFYTkDoTphxrq2NHENz5Aq",
  "key14": "LVZgj8qMSWCsEMRN7hGydWQZpRss6hV3WvK4Ws1PUCaCBGqh3Ug5RsXVX4gEWJrsRUbE967bHossW6uFeHQgaUm",
  "key15": "5vzC2wVuD9hi4dAyvXLRfjwN9kfLxo8rYyudBY2gBytMQruBziLEZ6Zr6Xf5Wc7oDeiAPXPqhHmY9ZTkfVNFMjx8",
  "key16": "2CNDKy6TJQQ4AYLPjBtXH3xKyiaRujc4kQ5tBUknedPQeNgS9gf6AoATM68pCZ9JyXQxEsufNj2my2NWmWCfAA5F",
  "key17": "3Y7BJQobbFnScZMVXoVkEatu5TLcT4HntqUoFt7bYPnRRsfLqHGabLL2pKu9etzZ89bWDXzGF98VY289Dn2BfKmb",
  "key18": "u1ESpseFJZfW3YWKsTTyLiuJPhk4PS3tYMFLpe1CoamHfKaFrLrXfQCZcR7mx1gC9sBhEefSrrSxRc5AcmEG2cE",
  "key19": "3XCtFT1fmJdFpHDuuNc3n2HJ3x7aVZfVDeLFzN87hzYM1bM7dpJ86tEFELtSiCLmJqss81gAVgDKQLB4TqdYTcqW",
  "key20": "4YeVaKwrt2f49arjjoUj5Kmin7ik1QSKCV5m9fQTENhiYs4XgFxMjCE5t3xhcvC1vJMRpFaUNYbvbKeUf1rQdkgQ",
  "key21": "4rgDxHxkGvWRtzum1wKcYuZL1fqfkyR9SANzQ14JvDcGvSjsnpt2GL4ooXKx7xDY8HuvJiSTuRfMTR6HskHW6MtE",
  "key22": "WChHnWsSeGf2SuUpaQtpR3a1RjY3SfwvR1vDbiV2rxuvMH9XquAnFbqdbBtsbCLm9QXrmSPt9vV39ZLWo2ZUpbe",
  "key23": "2XYEZq4rZgmu1S7i1oYoif4JCUcm9ggroDySGjwHqj9RLcq4m9gtoQHXyeLkfCf7fZuf3q24hvtDCcTGURcXVAk",
  "key24": "5RuV2Hum8LWJfbLxf7t219tJxVrfB58GnUyjZhgGEQmESTwSZx4S4CgmJJYudn2MJAcgDSsEjCs6s6AAmQ43DmEi",
  "key25": "4LjtR5hTxb5wLTpKnW85CgXNdommDA4veoH5LSUFFQ72xJ5d5nYXeXkZP3D2Eos8y7k3hjXNcBNkZbqhzz3VSCYc",
  "key26": "Q6f9ZBYpgbdhVPYgBZRWdZRqMiYMTrY2utSxPartTDxGF4YEAZZvAEtAebhQzZXhf5DGuxSAMh5Dtq5BojxzJkd",
  "key27": "3JyirpWzG8PNrojdSBj7YDEUHBfHi2wBpiPrMgjd3GjokYszngQyve7wBZALoeDtTrXs3v7rMNqSvhic83hGZ5eu",
  "key28": "4XUHQsAWXc8owGC73dQWq23VECQXbrWqcrrhPRbtFhFi6obgFTURtiERVdCyrs7HBDWXobYPvStp1DvfGhS2JSvd",
  "key29": "2sBcMMHfW8khm6nqUjMF17hmNc523ZZDrDUzPkUEQaJkr4TAMoHwgCM6yVw5p29JnzNjiXcr5DHF9SC4v5YtbfrK",
  "key30": "67SttL1CcFg2hRi8yNsi79EU84K43WExiH43yQjBmVzD3ozCqJzSYv8dNA7ye8q8urG2Az1DLAGWitxB9rLzPSmK",
  "key31": "3kBZLm1WooxLDKXp2cUNsGUHyGr4QbVDrTYBZGfRFPQ3Z8f5QMuh8TyHHeUxoobAEpeYh8WtGRS5XFjGxmctBQwa",
  "key32": "2EYgBrTwkwQvQRcBmtDBrEMTjifirrG9JLXJw25yV8LqT4sr6zmmbyskzifTrAyC3CZemkVFtg3pCM3zZDMmgfiS",
  "key33": "67bbda6Zz9Zu9sXkSKNSKnFkfARx8L487bjUY54jGUMTwCWwECSLXvGeQ5eS1UW4y2N4VKnU3sj8WAmSXDfBXQQK",
  "key34": "3XHiGCPvgCoSm6JfV3xgjBoKwq5QkL2ovs3n9TmJjGTDiq8756PUVHJe9Tv1mQbsZHUzDJK9Ua6aFdrrT4jU5JCs",
  "key35": "3uWwQBtaFd99b9ghSHVecbtmqC3XLjCSZxECnMMq2FhUkBdgyvLwRwhrVgSRYCaj1MkcTYBTxhmMJCHV2xcnGSWu",
  "key36": "5rQC7YSHDdaZtoWEjaj4BPtHyHk6dK3iTT4YhTBEpiJDftwB2USkDvXbSxxXvAtbsiuEsE5r3j8Ls8KrnsY6dUgg",
  "key37": "7HwpRKmx8scVvNx5fn9TXnVcTZq4JWtocp9BsNGVHt7rh9EkUxJd3mYfM9jeo2zNrcjWijVngQ3wbg8aWGZHqD3",
  "key38": "3juk62uXbptkwdRUYCP2uyVLgoALpxDpPQBkQrqbFa56TEWwuLATVM4WpEGbABnsZMhXgD86BDoGEUDGoC1zWWA5",
  "key39": "4Gejmxw2qBGMtezdpKvwnF2HqMt7Y5iJdmBP5JNSTXaWFhgJ5TMmZtQ2aVHw6R5awMCCUSwsHPLWaVkMs6otmCGn",
  "key40": "5sRDHCtKdBo2HwTUWAYeV9Fydhm1VAQ5p1NxdsB6sxp9xi3cYWiucjUyb6bB2Ymq5RigoQDjj7yA2kKbuEF1X8Fb",
  "key41": "2CWkDE3W9S3FY2vtqLehEY2QCgwoYa5EATbvrzne2yG72E5t5ag8H8wxWyJUkarAUCnG8N3kznXDXUHuBxBrh1w",
  "key42": "3ic9Qaftzw9mEKLbZQbDw2sEGsdDV47sNhic6E2keTX9dGF81UoY4DMtdmh8GYca2RkZi78PsMmp726t4HWtqVfr",
  "key43": "4ASUUzWXUoomzzmNAJepZJTWoCAbnqctkxYnZsmwwJWXgs4dKv27ZiBHMiKqck3QCpa5jfryZxscRwZaZcDY2Xyc",
  "key44": "qAjDXAbp9smvM3V7ZR4TqxoUpyGp8Wo7ATmApdKGWT2NJ5WzftyTd6cb3ZhBx8Fi2eDFyDnEnB3481adjLuQimK",
  "key45": "4bsYt98mEPFwmAtjcba7XUpLcL7SKSq54yRg9dEHep9atDoTYFWGbwAi7Sxb1qtxQ1K4mAGm8aarggRTwwvqdQk",
  "key46": "36eqJQBT55ArXEbyJxEyhMbJapqUAXKSZHFxDvJAEw75FvaY7pc2RjNGn55vmDAaYk1Uj13iuLKsj3dj8UuVLs5m",
  "key47": "5SVyhF6PMXmSTM1dMKjQroe19j2reD85TFp9rpMeMfakVFwoE4qiVppdmeqX5XHfigQGqFQjqmqUZKfxjTpH7mfo",
  "key48": "2yU3KFppPwzH27nk2MKHpjaQNaDFguZjSHPaA4HZjQCQM2Y62c1dKFzpUdHRiHB4yZLb2W9PiWWHtnkso5qnVFSP",
  "key49": "2thtXSrBR34vYgmJiGdXpgJ7P9c6M1Qmy66PJwBMTsNKJ24SjbXTENQ8RtwU596cg2v4NG5PUQAsGJc5pE4ZeAw7"
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
