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
    "3GPjUMYvJLg3Qkg4trFAv4EFRiwzPLrhyYg4NLXTQtEQkYGgsnicbEuD3KgpHtLPq1kMgC3kjtPMpLv1k7rrpZYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqW5ugsmGw8fxecyNzhUQfP9oNA9BfpR7zm4NSv1sebccvaTULxHWUdPaZ69Ju9yWoLvpueUGL9jMQJv4NxkGTC",
  "key1": "MErwPfMi6vQrBsqV3Apwxqn9NRnn4hUQdxjbWX8eJPLfQGMppBhG7zwR5paAmkUB765hKrFk2aJax5kV86TCx3y",
  "key2": "5sCfTkeFTZW1pEM7UArxDqRRGWPEUNcGg5Pxr1by3UccfE2YKAzEPns3rHFeuT2msXoQXKTUzNqLEqNZWrKW7BEt",
  "key3": "4aMjsHoWvKWibrGQAU2rjPccJm9vVhFn4AsS5ZFCTLpnihMjxhnBc4p4c2hCjVH1Enx8h2LtrDvpPP3vWeeGpGLD",
  "key4": "tUYzaH7yhiuVPsuuujrngqFFw3ZdDEfGGvNet47oTw7xhZU1tJaTv1hws7gPc8p4yrSZUxkdTZxFHbkU2bwdbig",
  "key5": "2bDJEe21cH7P8unvceg9PY3x1UEB6kAhvawdqMVi4T3TAGQrMQ1xcRoTJ4tgFsneEbBx51j9pJYZbVZgLsZbAyxg",
  "key6": "2dAQhqfF9TCq3VQ2w5FhyHbaS9uP4oiENcHKXXTqkHKUbfJVyFaQyxRVoJn8GDxtBhxa7TTktLderwScwN64FAb8",
  "key7": "3xkcJkNUvhYNFfXk9B15mUVpfnNg1T3rNBTEd2vMEQ9f7WwGTYgqxb9aEYM7RNqxfkesSggUmrP9iP85pCVfJptL",
  "key8": "4Fmrr3R6X2SXJaTvA4b3csKCsKnMq3R3LPjHVNxjJJ7YtVCHubCYBDKne2hFU1oPduvFzcBD1UmzvfvdBuY5UuJC",
  "key9": "47gFWRsXpkWc5dDaRvZz8ebVPztFT3pfaheq4krio2q4GtXy1RVxg1EvS2EiBL87rpmBCeuQNwWrJhf8qQeisnCE",
  "key10": "HMTyARGQ28FyxLRfVGnEtW229HKCCUfuaKba3VrnuH48pKyZY855iq8RtyqfECPTaxeK74BRVQJxE7r4SPsqKA1",
  "key11": "38GiueJdZDusn9r9NFEEzoffdJjZBnWy1HmJAWb3FHEqU7X1XtmS2TYn5adLL9GkMZxojrdm6xxvCuaZibo3pKHq",
  "key12": "sabGuFLcg5H4gsVYccxBgvDEx4p1GTLG2MVfzkjG4knMuPh9MaVNQCshkiP8brxSrvWajjYPJSQfFExm6qx9s6U",
  "key13": "47dUcpCbhjfVN1tQzmCFZ1CdUXmAZgeau1yU5xPZ2J1hvRePcY9WHPYQmEs1AxjLPzvXi4wd41EiipinvowNQrCD",
  "key14": "4homwoL161JaLAA2umEd2vbbWJuJcv1NuECyWxB2dPyE5QK1DwoXxCABxmU3HQyRhSc8DmJDKgPJB7kWmCa4t2D4",
  "key15": "22JLNJML1ECicJ4ScP7vcJ9xsnSd2Q7XinbPwCz96NBrh3Dyd8HYoa41DTkpyVYDrS4FUGhL4n8hrpdGvwtUvD6M",
  "key16": "3axBAZ1CsqBvJ5v8Pbybh9mR4T6urqNcMuVqULysMpnwZWxQhXVQnbatcomuZ7oSbjiajjwg4tHLHgx52UkPQxGB",
  "key17": "PA4VmdtuSFDUYkmmSK5Q4x146yeSRx8P5ZfmEdCdTQSVwkQvsXNCBsyWiu9BC2RyqamdaJYGyXNs6E9pnjoRfNW",
  "key18": "5zXYTgUL5cy2RhyoGXehQTRf74knud7wtSjTHtGA4GzsKraxfYhpATG2y9h1kyJMtQYqhnMkrre6fm42aev5WGZm",
  "key19": "asALXfi9JPMWjNFwgzaA2yFyB6rsoNzawMBXL9vTQsY8D4y55Mf6YwvnVuDq53bC7LP3HYNwfVtvDf5zeCM4MHE",
  "key20": "2WEpagV2pZxhqyEzp7W4rDNxvZcjFL2nbvj11qKaTY3BuYbhhkUkpHv49iRaAYvTBkNzAzX4zzHk7KSuVDwpEzQ7",
  "key21": "38ieTCHnBvn1DFvZic3Baug9urmqBi47FyvZUk3kkfxwnjpRLbZVWbcD5CAQBdLE7UrJRT73rfzQ79GTyj2EMtZt",
  "key22": "3i9kWfTgHpkz2gXxobtFRa26xphGBgvTY4wDYHq2j2utxxEwyWF27ZVxdFpY6jEzWnmXbskKyvX49Le71vd4BTNu",
  "key23": "4rvUWhmkU3ab7LosHphn4HZqSYQ7B8qW9j36zBiLRVJY1AuBYbZZoJJ75PXh3jo985aTXRfTXcduzmSzxBWtG7vX",
  "key24": "41qJqAeyg7Eczie2Qo2y1khkDafuSoBBKU7fmXmUpfAzWQFzs3jTt5qLLi5i2YL8qHusdrsjhBhCRHDNvbFNnrdD",
  "key25": "3GYqLNSzbCoF93dZozNCqSP95xyUpdQzGYcpe3UztZ4Lr1nGiQPHr3V1vE8zoPQtYD6Eb155pUDHVX6LDQFjybk5",
  "key26": "V9i2nrqnTUcPRDjE2LeJZ9RUccvraNB6i6TnxV24t8BnvVrNPp4JTmUxfZA2o4Aw8amSbg7ddmwnfqRrTcMHg1w",
  "key27": "2uww3mMpGbtUwVSLHTgoSST8juKeD8yE2XqbRViQQUJ6qMutEokKDJcFWD3o3Qi4tA2JqSMnNJ6R4KaHY8XHizvj",
  "key28": "456L4wmrSCYT3ohNZdtpASbsRPpscj1sXB9AKfFw3k7tg32C1VszoXvRpJCxH86pXXVYTdh4a9cJeK6mtrEPUrwF",
  "key29": "44s1w4C9aKVjhwpx9b6b9yr3V81Eo4y9kQ7Sfoi7W5L4PMKNknH9fbkFqVJf9yeKNhxJtsvJzYbXYocFuNmyT5Ji",
  "key30": "3CPMzvKMP71qywxNtQQHWTumYJdACVLSFD6SuS98fRNU9bVpJHYxzKVyGtyiqz1pjiJeW7tif6pXw351CkpzWT5j",
  "key31": "2eDqmvrXS442yfKG5nRnYGQaobrMH1WdYFi1bihsqjXdeDvTiwboMs53zR9iNMAktTQmD7F7bjfUVpaZcSH1sMtU",
  "key32": "5eSLim8DhYArmLQJrvcymEcgvCpq1Tpj3fXv3qMo7WiSRjfyuyjYeNkzwtYfaRyYvhhQ7Y1YhnZbKAQxS664vafa",
  "key33": "46dsQndTBGT821BY3jhJDKdh9NXk6e5KPpVti7koGAqeNiN3ptFtopZxtE5hfZaKVkePkwsQX1cpK2RWeRfPt3WC",
  "key34": "4ZYBK6cgME1UHj7p38jTNNJ2QQz3ZjHR44Nw7YUesJkjv1pk7veyA9goorvtdwMJ8nv3MCSmzqjCB4FBttcUsJ36",
  "key35": "5EK7mkDpsVdr1PB3wWB2bp5y9rmgRNaqEa7yLeV11Gg6YQt5og5Kqd7rsZHz7CUcdhmBJDCPUySshDa7SqeEmqMT",
  "key36": "Du78RL9gEvBhqKRDYfFiEcvha5dS4yGdyWAJZqdJCxegFKEEc1rbEpyTd1rQ5LjnWraDkQ3BiufLpzZkwoY3Rb2",
  "key37": "2qxvyrPZF2LsZo8177SD2ASNSvopaabmqZEKPaoTbuH6P5sKtzzSZ4ZfhEP38CJHAabNvLfZE9ti8Wa6s9Dvbf65"
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
