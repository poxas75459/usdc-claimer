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
    "3xnWqdbDS9i1sa4VhqqnbyzQwY8DRZ8Xc86iW4cQu8mTRwTk2rcX49bpqt6vUU1tG2B81ELa7xG5WWKDVzdcjukw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TF5GQnMzE8UiYT56HozGR2Z9XLvKnaTAoKKChuwARbppjU5cHeZ8yK82isxBKnvrYQFYvKqWJxcmCS4VcibPhwY",
  "key1": "3shGugTuxwhhAhZaifhc55RSz9sRmuToGQ7rsmAZ48qX7PiGB5K15pohFuZaY8gdsmefDLJyTvpMNdoHGHxXq4r8",
  "key2": "5px8Jr1szcEFkWk68jwhu2d3hUFx1GqjErPNoycFVz9UBkuUxaCqT1KmWn6EVXUuqiTdzSefpBPqNjj2Bqt9ipoq",
  "key3": "3koYfXj1dzMrrQtBU3XKH778SvpmGbzcyqTL5QzQpUaMghgoMMGi4DCmCBd1XovAAChLf7JqvuT3nWFmUVwZvL55",
  "key4": "3Z3ti6bjdV15CKZRPzgPfa1vqTZQxFebRzmQAzTRwFNpwuFxxmUiHJhhYWJ7FodhjW2yqeMzqbv8qGWsT8rBh9cm",
  "key5": "2YvT65RCgDxVyYWCmkr5U8Gwg7YbHzE3inMRuot6jxSpXn7qJg2APupzuZHS6xtZN7hvJb6YDno8jfCYEbmj6v9c",
  "key6": "RDG9AQmTuECkeswV7dz4h51mhyAFpBCn4BhQcJpFCD4pK2VjWZVQYJB6eNGULkETKY1TrUytXXj3VBEWkJ1MMzu",
  "key7": "4BrnjtfZnizfqVDC4Bhi1516yQ3RULCX9twZ481FNNRu6njrKbRoEqbDwm5NHdkQ2JpVLz79FqyX4PGWbCPNMYn",
  "key8": "57UmsuyCWgsRqSvKLThGrfYv3aLpLpse6rZ95L27fuS2uAvGAkbF3rjWSGGLUbBvKgqHrAMKoZFfxpzbm4hzKTBt",
  "key9": "4qfeNhde1tvba9w5NrULtquB8DGtoHFNZTgtGbKfdPJjEPL6YfxLeFNu8nruyQ2BpYssS6f5ABm8szM3PrTcS2do",
  "key10": "3aLoxpi1SA2ypiY19kePEkXAb6z418KVGCqLmhPuUNqRjropCyuPJ5nzuwT8jkrKiKFzn4iB8DG2WNpEDLYveowU",
  "key11": "4rTfV3E5tGNtBt6A93R6iSs9Rq7nrW4pfKvop4Au7hk9vgGnHeHCgfJFL9aw2v1UZJ88TRYF7bq2QQeusvnn3uvS",
  "key12": "2cBXqAdVdxhrYx2KfetUPbdMCWBTZXsP1dtGNTkornipnv9b9DVK5Uq6y62XeVU87zFkbJfAMCApcNLRLVtn5sbX",
  "key13": "4AxBmxMAV96XAAKDozLR38KyuJJH3sBi2Dm7UsAKgssingnA5po8C85sXMoNb7ekpmBUkDHSfRK1NJNPLNZYovgc",
  "key14": "3U5LDnTsz2K9naEs8xoKL1zXxXk5mNqyeSxv3X8MSyVskYMbSaeKxk1qAKmGLn7gT8PeVykvty2bSEShhkF6kxGb",
  "key15": "4ZYNVKp3JKSDVQdwSKL5pEZHyLpvU6XS9K5md1YT4PkegsP2V1CMu1jgooQYWR1W1LHPdWiakX958q9N18pk646N",
  "key16": "4GkgoKBvH58EtXX9RR99buHdi4M6nPTkb9Fnh8zEFTDo8TDiChM9tUKzwdKPpjUSn1bnwaRYuFZxP6hgo391QBZ3",
  "key17": "N47Es8XknGRBHDec8KPi13yAYPF2hkndHbMLULtNpffkQRJ3wik5w5PNmjtuMP1yS43gM76wrbAYyUT9iASxX7F",
  "key18": "4jmbHtt2E7JV9Lor6FquoX7H8uhfD9Cuq9crp8kL85Rsq1etWLkv9h71REUiaLKPjSoc57v4cKwMj92QxTBuhfKP",
  "key19": "57jSGQG7Bc3qLSAmdmiKabeQb2E7eBzmyouGYpuXR9MzHk37L4LpDZb7rSMreewCdxhgeKrs1s4qwY6ZYEQXTe6J",
  "key20": "UbAreqri4nxsxLZbdp3pqVLbwiyPC6hEZ9mcUbbZU8WxnJe8YbAQym8bJRBkh5DcTB36o6zpbNBX3TNkg9oK92G",
  "key21": "4ZU37LCsqxzrQpSsWG5UFEqnxMtfVwKJMZLjnhbdsA2D9B4C4XfbGFpc95Woo5qAga81nhJAdj6JhxiZPVDfb3Yd",
  "key22": "39bMNyvLkWhkQurFCpQCVwLtr6BStAsdkRSVLdZt41ssJZiEDo7jitCFxp8HnS8LE7NE1RF2BrHFaq6coyLrNZeU",
  "key23": "CiFSokZVb33YPug1FStYJW6MRg7JwjinQNonDpJogQTFMLyfvhbqZ9wivgUNJUYMS59cvWzkUmuJ6AxUnGH6dj5",
  "key24": "4jNvgoRrWnEghHxkSCmK1gHgAuanU7qU5J6mhrGPu39fD1TJGT7Hf6p8YZoUNHEX429Xz6xCcPSBs4XpiybRDYLw",
  "key25": "67gcjs9xbbu2yshjsJW7ujCWwnuWAHoxqCexuzZpYjnahhTaCrC7SAGeRaApWyh4zPAk3KXyKhUrsV1iE7paq4R6",
  "key26": "2Jvy59HL6j7ZX1avaM1bcRPJc8QaTuZz6jGwr8ftB9nu4hzadSPUGiUNnCZpb4xVWi1FYLb2fG9KBBtbpcXV2Kcr",
  "key27": "22d8DG9PYDZqVkK4mkHZGfodnoTtqurcjwovkxJfoP9Bij8w7ZY2pwtfnnBbr78JbXrx2X4QgDDNx8wF9CjcAFtW",
  "key28": "5vxQkGDuufrT5jyH4trhQMmFsczhxkp48FNQedofhDaybroxPwS6MAXw7Qh6thvs1EFKSjPy4TjWpex5hpzdTjxr",
  "key29": "RTBpZz7tXWHsh18UrB8dVHDy56indCe3UPZYXKgRQNy4GbEE1yPqeUbzC744qbZyavyf2DiMmdu4FDTwaiyjYR4",
  "key30": "4UgEo6Vee4h2cU8vEFausLc1xFgb1XbzqyZEMqg4E8AuR1bqS881QDWRnkYxL38JshQLm3pMgNcFwa5RSKghfWw3",
  "key31": "yrgV3LrdoC1SoviSWRNT6VPZRb26CdDSysGqjgU136DJuKejegWafPfEpHdp4d4QU8ucabusWZ9ZhKgB7Z7MvSs",
  "key32": "4RYB6ECzmSJHL8DwMZ5tBrsuDFnx783WT21WseQELtvF72kj2XkjDZibThZ1ztskRDe4hYvMwizBdqkTrnAbcNb4",
  "key33": "3KdbUJ1Ww472kFrTX4kS4Lw8ACMLdVD83NQ1Dcg64TDWU8KKQvtYCWzALvdvG8ksyXMc9B95eSG651Ze9oVyemPs",
  "key34": "4F8fqnhHufS5FboRfHVZ2nA31KFngnVAinWhcUAt5gxTpNKgF4zLVueJBgZLDEwyMSqmDa4nEc7pfUqXqmVjfJLH",
  "key35": "4Uf5MLShsRg8mruJX6eVC5xbbnaaj5ZGuPMcA6szKu5z1Cirg66F2mgSrFeLVY3wwruEvB1ye8jwdeaUhP8dVwhN",
  "key36": "2vhwazMA8mxzr6a3oXQaiQCKQGrUh7tM7h1pT6zDt6iFvAYQ2PDu5jbKdrF9CNvLZ3mdn9og5k4v9vE9eQUxAnAg",
  "key37": "3KikDUaQQ7C4dcUyixCa7wS3m4siDGbCDQp9UTiRKCEZDsFxZxTWp1MomnQX36FrzzPFMgnwmXSBFxt8Mo2FJsVp"
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
