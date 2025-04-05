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
    "3VdFe6fTjbBVcwh8pkQ4eSV42y3jNb9YavSej4RCBxD71FMr2dgpLFd4tbBvaPo6DZBoNxVeNjtzkc8GLstjhzLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w14s8qVtog7xSLyWjo2Bz6HS46gWB27jZMDVKFoTAYtqXYynAejTPSL6AdHw5EWu6LxDixXbBxHptJueFZ1nUHM",
  "key1": "3hUSjiHoPfEBQad2UBh85YdodM815LVNhZKY3PdetfoPU1vnMwGBWtsEe7Bq7ZMKBtxAtJXosCxA8rdzcCjYE6wA",
  "key2": "26nfESnGmLLtr2bgeBRfsCJFWXghVHUJHGaGZdSBkmnAukUTthqJFv752pVn1bYWtpAzbpmRGSfB3QAsELTwAPCm",
  "key3": "2vScyZKXN4gSreRafDpXpA231yLRN64PRAaABrnAhgCc1opZcXSxfBX5Yt55ERzdisZ5Akzfa3DQbmxjjDPqWQmV",
  "key4": "53tAHCVpkAQjQ2QFiy2gMbemkGzFAN6E1SyNXxZBxGQGLAzNsLyNppcH6Rn4Fo7SThsJnFtTrHatpkzHonfWDwxu",
  "key5": "JexH4UDeooGYyr34ToZ9s7sYm84rDBP6DRrwg4KzTSAZeNdo11VpTxyPeZRgy64HA8n4KuT5FpcpanvkfGLcmyi",
  "key6": "3S96NnukxMceczxcrNoXdo7pVwGrCKsa1GKPYXMZvW96njWSMVbdmz2MdUkqMKjskV7NYUkqmkvh9bkGh8bJP6Jz",
  "key7": "7Q7BhGeHDZ7Wmtn6qDP16jrFc4pU3r2odvQK3D5g2fyjTYXF19rsZn5pDXuD5Yq1piALwGUtvHUAiZZAqzWXzyV",
  "key8": "2DzvmPhzPt8TxgSu59b8Z5ns2TsXWCUQwnz9Rp3hkNQhKyKDjNcnGzLqdJkdrAX2zGi4sLqmQ9SQv4vZZtx86QA",
  "key9": "2rs4n2ZEvtWFZoX16TSCQCbgLPXdGnjgnx1w6XMB33gqX1LNpws7S8hTyPcUxeYqU349Wj9X761Nkn1r3Nyar1Hp",
  "key10": "3wX9uBm3GLNq2bcZ8A6TzZQGErKL6q4ma9rcoSSqiiPGh8q99FvTBeUZXoz98pjHqJnXTD1xF31fPXbggiZymUFu",
  "key11": "4wHDJVaDuBWgUFpv4Kd7EnNU339hrJ3vpv2XKLrx6FxW7zsUWVqvX6hKgZD6LyPVHzWLpK99gpCvt3q6Mjj2EM3S",
  "key12": "4qr2xreZk71XjHp438WPN6sokSaWQZA13BEMLeCn6sfDJ3yEr7r8nhU52matFWSdg4E4whSgkmyoAyELvfx2yapN",
  "key13": "5jXqtx6EjTM6fWGtD2raxK3jAj46M81daWph91SA5VERGtXTKZ8RZeYvacFx82biQsyEoiwyNmREcv9Y2pNrf6i9",
  "key14": "414qMoNs13rLwT77EEo4b5L6knyJ1rCr3txAEC9rUUFL1dMZYwAurzBzvL3gRJXWKayTctkDQZT8vwz6uw4yCRfS",
  "key15": "2AM53MUsm3D7pjEg2Ts9SSY1pN3Sq2ACGkYwDufsyXc6SpEy57qkkqBmj8SPrbhWdTbGJeX3BZBJXqjK1A43ZYnV",
  "key16": "jLh9t4WcbPuuv2Was3LPmXk1j3nmbLDXZXywvhTseQx13rUPniTirf3ojvyogDJwk4rvZGdmVBGbyt6c4uFAKHY",
  "key17": "58rkDaMGLmQYZK7unBUb42DTwmYAnKXsPR5YdhUiqKAkbXBU4Bhuw5UvsqoPC6V394HsEv784uWexmU5xHYp3gzj",
  "key18": "5iBqk6mDaN4AZx1YDsmsf2WCk8CQ2Jp5bQhDtM51CBibVpfjahgpB5hcVpw1WNtJ5eyHY3piRTou8DbAmBoBwuuh",
  "key19": "4Bbp6YeTo2tuBb2rH8aoHgQdB25PvK4F7Hn1zfKFA3fGR2jhoCksSczRnjdxoJUmjr54jYHkkr59AFzHPYi7f7wi",
  "key20": "53jK8Y9wLwJhV2pypqQa77ipF5EWXoyCprpKvKRJdZFiS5ZhBZV7xFj2nP9pEgNCdXeyDnYGQFmoipEP3guzhBPH",
  "key21": "5awdfTT3RxZ2xaDhHLfDBDdFL2xP3YN2ENpznWqB2Gt3B32H3z5kScBnVeneRTS9srYQcpUKLqeg5WvePiSkH8Ju",
  "key22": "uS8QJuUKfdfsKMvN5WrnhDkDD79QNZzyAfNTUPFERRct3pDdRxumLKSnT4y4KgjUPZgAkuBjgQaMSt4reNrS7GM",
  "key23": "5bV1RfFowK6eNbELPvNHZ8BSwerUHoFaVbpEtps6skNsndNHVbKCZH87igNVUmGVECdvwy2ePNHGLbJZmtuHvcjN",
  "key24": "2Cx3eZLZfEbcd1Hvp56hvrMKsJwC2E1aT8z2F4NwvJVAu2ZZuwGdp5ZR6Nd6GnRkFZyaffrYzUXQCkZsfiosiv1V",
  "key25": "3QRBEjchSw9USEH8zkDefgd4koBcLaSxvHgv2MDGm2ixSHuC9x7rwhs3FEkLePUVQyVqC62wZMjENKZhQiViX4h7",
  "key26": "33YFsE61749Rb6vBjMaZGdE6PYq5uzxACWHkqMQ7NjWMT4hyhrct9HnSFtmBm2oecfL6YwtBFWtCdP56ZQddRpTk",
  "key27": "5dBr4jDFnrp6BnYZLgVNiZxLkNmsxCrtvSzPTPw7agkjw5LoaZSmK2ewZzjV9gvGmD6xY1hrGEkpaVkB2akrGnjB",
  "key28": "31F29AFWw25hbruNCvSeDV3V7zjAbrF7ByPjmfMjHPXFqfKGPb1LYkVoeoh2fZuruKwpVLYYXQyMGBzaDg38doTG",
  "key29": "2Qfkgt3HqggmmsnHNHf2hBEqkfaEXGLfWvMBWJ64zNkYXvQ6oEgLQ2asZGJu52Cc9LQoepggsqMeP15YjH762BtV",
  "key30": "2ogqg2XH3P4cP1GMREtcbhLXhn3TUQavF2EKeEci2kNRjS14mm6q11N194gmbTAZWk4CFKNeEMUTj1ZzetkZQrJ5",
  "key31": "4sWsQcDjoX6o1H7jf24BJw6yt8M8K92y99Vp47rY2GkXg5nXRJ8TrbuiBiCAZixbpGLkqmLhgThVRGxRSZHNF62a",
  "key32": "3u7TDuQsRJc8DP2quHwp2jmWGE6P5r516hFRFqxNDsACjigjb3j2VP9PBMtrR3Ft89NWQb9RdkuqdsW3E2DdamLL",
  "key33": "51c3ydG9iH5pv4jB8NqF7kb8thKzj7iokzhGnqodpDLBnSEtmrGFb7699XoLMUCUHtoL6rUXoE9aRqgTvzwwzTQz",
  "key34": "2CQH7p15R6765jXxX8wg9VkGFZSKqCaVPHEDoAu9iMSZggVtgs4iHLUq1g3J2rHwV1xfKhKRZfoBAoj87Z1YcuQe",
  "key35": "4KwQXL3rpkoHTG947zVvLUoHabLvdsMrgbX2sBJnT4medcqaNW4WdrULGC3cRNmJ61EdYBG5usQmBojPqSNnCvjh",
  "key36": "2Jmt8VXNxQLPbdG9sbywHKPJepkSLgyqZ1kKsNQUEwJsweNo7QqrQB5tLQ1USiKmrx3V8Ro7zssUAjHikpW3JkYR",
  "key37": "5S1z3ZgRWRLHvRwXEFANDWzgJN1EbtBXYQRFxKYyh91r9bqpAmZzFXAkcCA947F1ciGwHyRFtTfzLgDXfJ4Xjobb",
  "key38": "2jdy1zV98JyWagz2wbGeQm21gaAyzGEckH6Aos2puQQo7nBv8hbXqVhB9y7tcvCK6YDaVY7TgAZsCET1ZouzqFAk",
  "key39": "62j1uijJTyRRRpag44dvteiaqgVFCUW2yAwZTxFJe41TzaPmUSFR3ywBsWNdwxqW4ChcfgXJUtiJmvqWJmzwhowA",
  "key40": "3vFbZAEdX4n7vXYJCYr8TMiUcCPh3ninYNRzwCQAtcrB5r4QrvPLaHWnBZt9mYWQxY1fi1NMcjXJ8Tbg3Mx9Zvr7"
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
