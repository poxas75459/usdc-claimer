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
    "36mSHeMX59ekNNwQYbppxbmQBYczHHjQfy8APp6NoLAukMb7urPDvzXor1FMEzM2yjgSYByKakctLdy39mqEXLnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sb4coY3eumXJpjAgj9EF8X8boSN9Rb77TcE8ytpjTn2m9rMUuyLorAgDFK9Rgj6ano5e7tt4F8H9uSb3CXP5FM6",
  "key1": "3s4WYbT6FnT4YRKGYGMqvLRYbkzdUHw7Lmcbac5YRRYUJUwd9GmnocAXJ6DpLK635fXwhZf2YD45W5q9cv3hF6c3",
  "key2": "2Z3cKEy1szjwseaXyZ7swzC1u73noEWgovtws2w4pndgBSb6Dog4srcjsoJK96VYz3bzYvj38npFPKGydNFR6Lbp",
  "key3": "2qaTimYNY1JSvGjrRe8Hqrz3dFRYtfL6P3TKu5pCTKtY5Fo7jjCXkpKndwm5G8HBu9HAk8ZJ7MR6W7xAKt3LDbQt",
  "key4": "5w1x5Rqj1Vk7cKfP797PQdwri3ub295knGkkpRkx7bMCf1y3P6pLHoqKWpsqjtFwspPEnwcg5D1eHJ2eQ3jQ7R9s",
  "key5": "M1o2am4NBZ3n1iCyUFYa4ViR4X8FTQhHPi71cZeDoppLncnDRgDoT8YkpDpo86gtCXnpzTNaVAFi43wUrERf7Gs",
  "key6": "3zo6hzDdFENyyyXy5FpCThQzdXmqVDxh6RVN4nAsiEZQ3V3BW1zZwuoN7g2DzxtHp28f1G1eDAvwSfcKktE8UFJE",
  "key7": "2yqE4VwWGyhRaGMbHpoqm7Wmy1Hf1vDwh3LbJUvPSevo9TFRutvAU4MaiRc9mUTpE5qw942FnCnUoeFhV4R6c8YS",
  "key8": "4QpLh5So8tkzvmwyKTyGFfJDtJbxQyYnviADi4mbMKwaKMCTY9ahgtSXvowrcg7pExzCw2UEeK8VcyqApxEb7kpD",
  "key9": "3koLs5hZJge78s3n5otYWvebgGu3wbiNf2JX7bUWzLYyzYDHUwWokAWTSuH3bcSAXUMHUsoveQNVirgxYB8s91oF",
  "key10": "rJVeZ8rzrhF4jnvacQiX8gG7pnmz3ZaYp5EcD1Dsq7Y2Lf4C42g2NqDUc8XAyAD1khGoT3mi9GZTcFLBdmV4CoR",
  "key11": "5T9g9PyEp2QFhTr5VFJQhFGntMAWzrKEdNmJUyW11o77njFeWVTR3rAkpRME2x8orVsd6xnzeJ5oqRyi51jzEuVK",
  "key12": "3uVQiahCGac2zwKjHALS713MtTk8RP8NRSUdhxpxCgRuWfKAgtdDahA7GYEBfMxV5j3atM8Q8khfnAMV6JR8Xaf",
  "key13": "37YzQezfdxQhCDxvvi2FhQJk2Q9JUZn4Dp4Ad6ghU9EYcqtYqDAjzXeTPmHa3YFQqZW94rzGwwKQ2hs6Y1vQVtDX",
  "key14": "46ctR35GPZ3bcGJMdYh9bL6DC4DZqZvgF6rmpxQ6NqCFyzBWubp3dSpWiRPNDtv2pYYEiEjxNpcHtsLBkuQcycrf",
  "key15": "24v91RGDDzVJrh3Gzg44WRK5d6JzeGoP9mqv38vrP3RERk3j7xe78ojMoH9F3o8XrhgmXPFx2anzhyF1kFoatX9o",
  "key16": "34suFDEuoNHk5up5EdfCdYNFweav7eWNucs7yWnYqgjigk6i2eHnJaP4bA2KWg8nLiPhxfz6yQWNmkoaNerMNqYM",
  "key17": "2Fcyy9ZKMB39itrbenYnFFEtoUBo4NZ2VGH167dvWjQ4YgeHzjCS5Hk5JAon4jAb3EFv1uaeTEKqUsakXbEUZKbG",
  "key18": "wnDUCQGnEzvRPKvp6NcV3pcXKE9G7Lf2Q2qtgwRG8NdYPfBjaq9Sa4LutQSHgrPiVE7T5QaCCERi4wxQ7raYY4P",
  "key19": "CSsM6kwtxJcgLmE1LFA9ebWBp62vCrKDmmX3FR3tbi3NnLfV86KGDEeZCpMDCgWX4jM99UJTotAB5VXFPwce7FV",
  "key20": "3qPbMArprnYyKvT6A1ajmoh7go8Rh8RsVdg1ytxRjwv71mkK1wrg8Gk1pyZH4KCQ6jndorMokBfMWb22gZweSaWc",
  "key21": "2tQhRcLkuaHfUkb6GTMWaK2RkmGqAmGNW3aoYc9wLWMPfonj9oXzTenw2fz8TPoFvZjuU69Ci1PSzEnm1ssPN61j",
  "key22": "oACHV43pDYPD3wmA4yndud78DLSWxG8dxjgo2QmXQ8Q1Uh7ss5k5tVdVcS7p7rRKeNfQ7Uo6SPGqLqr8LrzVMBn",
  "key23": "mBSWxthDPTMenP5jQou1tvyJriKvs25nB6q3TQiJZWS2XLuJpfdnRYudFuknKzYYyiitud9GAgL3HSC2dXNrUBU",
  "key24": "5XDgbemNHGQS4yAdXZnBcokh5orj3RxPTz1R4rRckyxZF7sdLfoVtKf4JcaTcqWp4gtG6dxyup3DFfvZ2inhK9H6",
  "key25": "dGd5v74ryPmxGTsmNr6WshtxZ5BqrfGF26hTbrRyU7kJo87b46nwYah83DVsLAM6mRaNJvTz3xBTXTtPf6gpS64",
  "key26": "3qbAy4owA7EUr34zCq1SNMfwHH8EU4jvaveM9iw71cfhZ2hDperZaPAyAyttzTaMtsJTFVGpVpUtaJgayAnXeGyk",
  "key27": "3hxTMAksm9Q6qUBvpX7vdXXi2Zndx7oN7mRDmHxydzCgztpksBU1E3u7RwTnbRb7q5MDouG2uMnKh9TnfpKpfXNo",
  "key28": "4BU7h2Ju6VWFM3Bax2cziRShJSPdcj1DgXuoa1hJf65R7uCRADECv9SjtR3BVpHMrBEtFLg7Zae6RY7qMTqC6AVj",
  "key29": "GQexC8Ss7Wb33NrvVCbKjrBp87UtxAtyhsBLmrn5Az1oyF94x7BhSZFAZPLZm14QpP3ebAkm7VoG2Ax7xytJftq",
  "key30": "4TbiWLGaSU1cKTeG42CvCwX4pqDrDZpsMbVXq2fBqbzR6p7q7Q5zdMFZCQywvJ7AvxYoKTpAhQVJeqxkEDB5UTEm",
  "key31": "5aderdZkxg7y4SXDRMMV9rF79HmzGYmnac2rVJ2853Tb3k9suMuXe5Y5BDc4NMdV77FcLcZipoKfKf96HNCFnVWN",
  "key32": "2Sdq48F1uYtrQCWvsGePsiyoP7NVqSzK2XcsdzZW4fMXLDEMR9SAKEJCzxMbiwkF9vNYGRuoA43sSZvzQsycMAyn",
  "key33": "2FQ77N5eqtRajTbnZn484isdiEYdbpsSvxqxV2XL1yLNdhRMEZrAbNiuFefjEgH84pBJhkEELn9VH3WyogVAdXVr",
  "key34": "2n718ZNR72dApKszbtpLDwZUg9zzpu2reSV9ht3S4ydXabkL5owKUJNv8Rro6UDr2Y24N1yKsZdtgPYSuPireD74",
  "key35": "DYMuTTepB5csN19jic9GA3V9nfqTGZN5XTcKEskFRPKEYagRdPcqgPJhkyaC26NGoksMsiLTVvDLYbiY5Zdri8v",
  "key36": "bFgU8AQ3jFDAYgaFtK74bZu3L74U8tDS68N55c8hcmWTXdEvUJ6895ceqaKPgG1g51bWfw5zd5WHjPhW114dRii",
  "key37": "3rz8iRruisYkybb4RkfGrrGPeqYsgKj2FFWvL6quSV2seiKSTx2JBSMp8riyEuDUbfHkTYAQLV1xpDnR5wMZG7Z1",
  "key38": "5AQH2u7KfZW5SbNtuaaPD1SgdiRH82az9QXrbyPJaERMUbcqTESjqmywNvfngwkKazqDJHJd1SH7MVQdxsds9Edb",
  "key39": "5NvxTV6DQes9jww6qmrHemNNR6bnocx9nqfsJ5mDAPSHAxnqJJuucp6CwLzctgRDHYXNa1k5kUhNfFMWj3QCgKyT",
  "key40": "4hiEJnmhSS4w5geSa9ZKB9X1fwsSjws3fkNXCnarHNrTL3zzNqAFyLLUb1TwU4zWnoQ89QUJDa4mM3T9qi7qZAMs",
  "key41": "2fnVoH32cuvWabtZ84HbjBqg6nndictkdJ4bShD4zi1WKKe8RUyccMbEgt3rowLkdBFeUGce6bLsVYHTgur8myij",
  "key42": "5Pu9Abjy8J9qN7yaUniTcbvDY7dNv2Cjqsw5JgDS3cr1sj83sEHmGMkkyGi7SZKwuNEMeCT2kGwe2hNqoqcB6L6f"
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
