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
    "3wsM6gfPCQFJC7PbAv2zMaQAj4RahEgAej8hn27U9hUbsXRGJPreWKKNNudfznR5qeAFWzeztVAMC6VMNgXcmr2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofMssrmTG4amU1PLXU5LJHFtfpMxMJ5kxT6J68NcUa5jFYhVUrLSbBWYbnShJx2UEW8TqbGXeJDHadMLBQSu8Tt",
  "key1": "4RVkC6SuCa5kNEY3aJcw8ZP15Q6eSKiUsez7roUS7KRyfAywqTH1C4se1HvrdTWpdqzu4J8YYtq2sWzMqzXvxYoc",
  "key2": "5H9grrLHUb1oV3yLZqzWTjbu8xcrKJvUURnsbCuNUjRpFAGjdWDbNXVLoUKQg4nWgseE1PUyWtAGwKa1ZTt36uY9",
  "key3": "dPhf8v3DNbs3GcP6MRFBiKMYUEK8DQcvxRRtiCxcHBscfCM1PrBz6ARTDCuQRnXbzeEiS3Q9sDjYNnEzddnUACi",
  "key4": "3QatK8H2AGUXV7WrCqv8tMPwy2pcWBAw7g59DfKG7qPN7YswmUpjkY3vpBDf3JLraKyubKM2i4u8AmcKY4aFFN8N",
  "key5": "4upqaeGmsfvRsqHQmRwEYcu8brFJDmN3xTSBaVZ6FBCHw16vco6uEEjAp8KyXQ1RpECoqzwA3xhx2AQ1hf3h8Kbz",
  "key6": "3P75AUQPi5athB7mv6wCySZu4Qm2v3A4rEzyBBfGaqK5kEtTwGWvvAN7MzdstZr1r1hQ7ZUQMFiwgetc15v3BX6e",
  "key7": "3MnNEsR7en7Ajx8SRJBiw1ESyVNSq1FebvAeiHw3pcABL1DK3YqFWSPUvkoY55mDfqCiCPf6XrqEKZPZXong2LTP",
  "key8": "3kyvmVV8J4ixCgBGsufJY1ZUHLrHsnDQoBChiexudJfWw2jzq1jQGkN7UtgQjnTv27DF25FPhJc8aKf9mtuj64mP",
  "key9": "etsyATKRXYhW3StVnx7KBxYi3WKpGjSgJSdivHBo6o61v8P2xSdpaEqYyuFYNy7KS8zqiZdaMTqJNGZ6edf4A4k",
  "key10": "2Pia71wkzyuZ61SSrtntxQZGuW7DnGSH1JEfFWa1Rvr9ZGiSwtf2ZcWZ69us2JsHejVhJmKuXLsY9MSo7sdzfo7X",
  "key11": "2YgsMbsaUp8usS4rjfFaVtGsDcE41Grg88DTutbeyWgmsEboUm29kVkdqfYmYkY7aykSJgaUewhiJDuGh6PuWft9",
  "key12": "5cqxDZDGSytt9pVidBLawTPw31UobzzcHoLGu51E1vprqkApp59yvDK1HY6orFtSq1a1GaKdhwJG3GAA8cJpxEW2",
  "key13": "26xU6m3KCXP8oYqkuSrhUdZLj9xqYMqfo7WVykqppAfVcEvZgTJZnFnGZdqC13YwBSvBSFc5b2LEyBv4zXwneEf3",
  "key14": "2KYz19qbsaGFXZbHcmfvWPeSvji9G9EAYo52tyqX3x8HgzmmNhzQf2jYg61t6WGZTwHRWs4jyHmvoiAXptdsE5fT",
  "key15": "61zfzV12fomzHZwNdjNCaUrQhiCTmZHB6ESgMcJ1ukznUoKS15k7D1vKExUzT8JxWvmfNeQWKVDt7jeNadjQAF7u",
  "key16": "5gZZ8ARAg1Ksfwz8N9vCK7MzdgQ5JMkm3DBRGUs8Z8GtyPYQjGhkfrFunqYzqBGBp4WmqczN9Eu6gf8oQV4MDken",
  "key17": "2DtZTk5fuZABoMY753krgDXy3tSgnX5Tk8GwejS1uDgScAZS3qcwxfiSAGboUN42jusAVzYjuTdsVxRX4VnYUKk7",
  "key18": "3UjCDLnbGiuzwjxxnA4FFduZjsYhSSHznwLKW943ULwXdV85ujjev2aTxyETFm1wZJN5ausrgPp75a7SCH8XNkHk",
  "key19": "5pkLucAGhCiBuywWejWb4vuB1p5xB3c8smsoSGW66XiscLiCkQhvPngHTqYMWSpRWVUfUqEFHrsodcaGrZypubPX",
  "key20": "5mK1nESh7LWzVCEr61aTYwyZioZRc3LF513rQhZELvmrBK5ovveo5qnrT6REqNTCufEvFdZxemkL99XGpqX8oNNe",
  "key21": "5JLmhTNMiXg8gWaWEuRo9eFCABZVg6RKYAv81pKeyQkHHVQyaFKh3axMCYQLWk2Ss1awjcbzH4oMepg4j3K4m5XR",
  "key22": "3omQswjX1WriNaGGFRGqitWNn1qREvTjvTJjWwt8jt5ausHWN8mt5QVChMmgZbC3UWq7xcHZTHfqhmcqs3Ty7hdx",
  "key23": "qpaBsJoNYceAUyQDyrYkGKtmkqtT3fmS1AjY1jXux4XwFj98xj1VXTqCEkjAd2VGFmtGSf4HwfLZwRW9Et5VNLR",
  "key24": "2AKFeRSERyg73Ma9iC1qA9BLrj9y2yf2Dv1VfUEktsHrF2Yx1b2e6UTJSnXXk2Doo5eJSpGq1QaLeS88S96Hzk7a",
  "key25": "2gJHJ7tG2Y65Af6Y1XhvK1cjzTzMcU2F9kvCRPbw2aqnGhUyJK7LimVM9cyXYWohh2f2NXaZKpZykJED2pZ3dB2v",
  "key26": "BaehXBPi4WJyLwq271YEHtLB2QLAPHJ4AmGHKgs5WSNHySyJ4Dmai9vzKRxzEcxrV4hXTFEgG3nTM9LATUxpDCt",
  "key27": "3JEWkLgzLEnNycjEdcRf4p4y6A2vK4cYN9fVWgn1ukj3oMyeqGvxsHzWVRVsBrF4fB282ikbnaVUFmEA4qb5EFHq",
  "key28": "2VtGZDrAzKrpUDoDBVHe1AuduG5QgDiBgb9zUKVguoBVCYjcCLMiFow7EGaVD7KRfGHC5J1XQ9viKUvDAsLtinCi",
  "key29": "4NoNysTCgQWtP5uis1xzALuUqronfPokCBEULQhTqbsP2iynEfjeBceDxAZdZS3wmXDJ4KMAQGUyzw17hSCcQ2AC",
  "key30": "2cGLkZyD63aHzAQ3xPZsmTmr2Z42fb7JErKg9kkDZBvFNyYN2kFHre7msjeXEbD9cnMDYXTdhNAbMJ7s8TpDXfMw",
  "key31": "5jWv1ufQQRNiz42XiKLntMtukZPKwBeNmkvr8wsfxzANL5hRCk2kduU7qAdezx7WbsTzTkd7abGZ5YhYNszHwDPi",
  "key32": "3rZHeAuhqQN7xo3sCH8NW8u2dE24iFaeq6HfjZ6tvRaNhMeVw2qbaGyqkwkp61VmLxeMTA6T14zLcNe8HBrZX8e",
  "key33": "V6RkSCM9ENMVZwmBKu2eAR1DooDaye4B5EoN67B4Wf43v4YRuD4FJsD4Sh1JVEbuCaMRvEQcKoPTJU3h6LeFPhh",
  "key34": "rUQnVqjFTU7FeuDQXDgpbmUpxsdHwWxo1By6a1A7rmo4PhaxRrNWhZUgwqGvjkTeh55s791nCRtmnzhe8KtvHYj",
  "key35": "5VFCdfM4umEFtDsZjhTMShA9mEctkJ8m9ncn3MKT42ntkhXNDDmZZVQe4qDgF53GJGkStZQBe8t213q7BXH1UqDW",
  "key36": "5yeaDyCs3dsuRqrWz57fzjJ9jyVsAHkvVornqwV74haB3JZiVdgmRgjcxePDMoXGeW7Jk3u1XPkJ8ritPzjBrsao",
  "key37": "3gS3t35X1b72DNHM1BbktoVY73MQytAXk72S5Y9KzD96f2oTTyff4aF2J9VW9BatiBiZhzDYeeFSonqrLxFQs3nx",
  "key38": "4VWYBV4yQUS3CuxbrZgzXku9A4gGeQpcEDiGTfGwWYgA2kMEpM96JyCd6uL4zj7svSNvfEDk6ynX2eQpzfFF2qST",
  "key39": "4NkEuVRnBi9jgVEs8rwAcw8HVv2t4yYrABYBH8kXFYzS25ThPtfLshhTmQAgAJos6PQc8dDLcrmm5Ttngw7MmiMH",
  "key40": "4R2brd1yfruwzuc9vLfwkXodburiaGqnNfH1EkN1Y5nSNhZHxSFi4mkZBeTZcegYSS6cvonSab2gKvSJV1nCMYN1",
  "key41": "4GYTTzeUnrTgY94fKSDUUyeSGJSET6k7qSpCiu91kmatoeQAurR9TnhJGd7mkUZ9XYsBGQPAZmhscBRQuLZHCX1T",
  "key42": "4k75N22XpEDEzMTV1oTPA2ekPBKwKxMXKwKoi9tfqeZuAVd2Tr2vt9jcBr1jBgSQjnZzbP2zfNmpz3SypNrb5FLH",
  "key43": "49AArFyTLiwrEBGLf1fqeFZyswu78BJ8rSa6WFiKcqHqrL1JQxGvMir42NQgyR2CVaC2cxvix9eM88y5sGKPTAHw",
  "key44": "2MyUi63K92Xonsw2cSoYSr7EhWkTZDEjV49gvv6krwJcZFZAHVfsEptxTkvpiP5UyCULPbbJsy4LRxnJWVpJt9q1",
  "key45": "gUMfV4ws7yKCGgZPebrytoWhWXJg4WYyu8g5ivk1FRDiTKviJV7qbMKKPFmGyx5JWDVhoK5MdMYf8wRwma9dnB2",
  "key46": "4pYw4gaeeAzitwR5hn2F4zo2UTWbqMUE9VSjD6TyEh61zWsiXmjNTsTvjJcMdegNVHDneUZMV3NA4QbaP1goLm78",
  "key47": "3XtdJKXWBZW9bsWVHuiMkZShFaxicQ8UYXE26YXF6sEyUBgX9nihZt2ypbCRwUzh4RgikoZHiK5HjBbvX9qYhPmA"
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
