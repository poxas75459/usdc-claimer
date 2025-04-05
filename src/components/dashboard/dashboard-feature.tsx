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
    "37BUyHRhjVu4PDSaiTLCuxBAdmDTcvRT64u1NZ2eeZSVZxXHbX2R13wVXRa2YzPoVWwmBBYC8T8MuVzmWhEwVU5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gqb3ynKzn8EP2GpfafigLMmxLwtZegQH1AiqwZC8JdkBTJHZ8GL7mU7GVT341bH8F9AS62XPcCU4Za9os58y1LV",
  "key1": "66VuhDYA6vHZ2npeAj548dz6LdFtfmrhcSoLhZU1xcWD3XrVgkHyRb3fiSg4HG5UvX4Tb9v7F7yUg6EsRrTe8d7E",
  "key2": "2JGMdNQQzDaRLU7c6M5VCyXS8TiDB7JcxhMqZavwQ8vW593dLp3cxh1DwbR7kQu8VDz3pNZRMbizrBiBeSrEJkgF",
  "key3": "5LdhLzLumpg88FvGo54fULcaxC9SfmhxEKD3zeS4jf9T7HFRaSo4UEbHPGxby9M4La1XEvEqZUi8zKci9SjGFGkg",
  "key4": "36JUc61RKwV8czpaA1YMkaBStFDV2DGY6E327yN16TM3Eexe5qQCzWHxxhkMYN9z6rXm6CozvzppRAyEoVHG1d8i",
  "key5": "q6TDhTzUKvdVzfVhFgefteTaSxrKLp4PdsdCxSCeVYY3QHMRteJbKHGL6fn4j7QT5RRJD8RuDufQhX5XDMEVo2C",
  "key6": "yxwmf92iZLD9fN51AvJLw4rMNbxUhhBt18nMmpWtxSrGZJAN9x5Y5mSjRurKZXPxFTwh3JxuxHxJFNSdMqziWx4",
  "key7": "4PZUMLSYCGGsQBDdhb6Wkc31BTMN2crfqRDAyHcvH5yBMaJxn8epeuAzpjnAomSGb4AnPrE1X7CF9DDXZRU5FLZG",
  "key8": "4Uivr2mLzikbeaR34AtGpsM49ck7hpa7WimSjdWZi2KZrwvwxD5SKtNP5kUCbq4xoyCcox3YKm58gpkMDf5YTUYr",
  "key9": "3KezLkU6eVL2VjwGBMJhCvGCWyw5PGvb3a23fqSTUACEjZ6idsBWgmassP6c29LvYbX4pduN3uEzCuvgoiRCYVxM",
  "key10": "2JmcTzoW48RcgBefZCR6nSxmJ4zG38pDjssZXWxx1a1qXxMbv3inxvHGijXah8zyvKhKgkd9cUX5rgk7M7G1TgvW",
  "key11": "4fVtLoUJedTU8uwwKQC3K1mJV77WKomEr5q9yURzRnnWdfFRry5u3NVtpTwdDMyPkqC1DrTbekPs7rsCyMtyqUoV",
  "key12": "49DBunKa8rw7Tk7zR8KcS3bQuFmkGV8qqxStrRZ2Pv3ga3j4Bev3HN35816RSVzuPc8MAew4nX7ddrYWiJ6HarUp",
  "key13": "APvBfCPn4PkHWwYJH8rgPJzPmYsqLNxnUzQaUuuN2xtq29ARRZP35TrYTTuyPyLHcvvUXSvQG7ER47b2wxgk4gt",
  "key14": "4zhcJfG56Q82QY8WwaYgvjwziShaDZ467973NKg6YcgpbN87iiBMnp3Rny5z5hSRiezt96YJYfhYNhhVgu6xR6Mp",
  "key15": "617W2zRHGbF8tUbdS1qbkhgaGXpKFrxogfhvXBqonzVW63HVw3AwqjY3eVxUSRQqQFFSaaYt1DEmix18Ne2NEGHb",
  "key16": "5VNUDDn6J2WoguQVSiYp5cUdzdLJ7ErBaGZZrx3JGh9qKTzKeXQK6jyXTJDUcGuMQZrUZrv6r2Nv3qsXKQgoid4Y",
  "key17": "2GLPW7LDKsC3jKVfEq6RnyYL1XDcp8fNuwLPrAXbSFKiwYoY5cP5oHGwshpiikbt3b1gwih8wt2zrCDBMQTPpFbS",
  "key18": "4RsRxZA5vorkGo9VtuFG7GSKpii5fcg8F9RvkTKnUP23S9rtsN5iAnMi8A4RPVqaLBxuk41njgtqWZZ11uDcrW6x",
  "key19": "3Zok5cabGVkXKcgsx7VbipfbAeDXWk9zSdSTZoMVi1tbXe2rr3MSAtB66ewsoYSj3e6pLnnhfFfAf9x9qdbmg1nX",
  "key20": "5S4b9KXQQ96a5cHJw8LVc2kGdGbpJDws5yyNYLyvbTtHQiFxAV5PmjRtLuDncDK3Wam4yHf2TwTwy6HFFL3SU5rD",
  "key21": "2MnWkgXjf78S34CvNwx3VaLKtYZA3wxeGxDmCof3nc4do2fBCBmZsu3MpVncohdPFeLSps4SNHhrgPbRQZS4fgjD",
  "key22": "5oym8ZH9FmzpXHgidDkVLCDLUJvnaKHPNzRfTt3oaBMJ7qtikTKitrLD9gkSzkCZFLSibZKYec4VyCCx6dNRxjUG",
  "key23": "31mguezov6dPw5WGnVpD2gCbdNdQ4SZoD5sCqjhjTTRyr1TYTHkRVgbXCQmdMcpy7v8pfxCMKGa65eMHNXVC2Rta",
  "key24": "34xFXSGeB3XERPM26B1Q3HDVBE3ET9FCtHStxvuAqZjtmQMbGNMrTdSd5KCyNznxR4J2NRjoMMvqvzbBHyyoAdNR",
  "key25": "2sBdo3y2r7zh9enpTGgd47xJgkniDG68ZXgXmvQnBoN8oVAm4QFJhnxvKtbkoTcqhgPgBVtsxMLoUGLn87VPtqCJ",
  "key26": "nn1vRPaxZUVwthU8uWgXyqyvbab7rboBh8116hjPm9X6uqYu3Sp8z5a3Ay9CbE2Pq3bLhjwdHZrdPGUXTBhCVfn",
  "key27": "4LVP7xbY9yfwJSjetmdkjnoS3XKdSp8qVRcUx52oecYgsVtFqQAnNqrP3JugAkqsNsvvSdmua3qRma9q1muPzDW2",
  "key28": "5pWyznKfaVMkcyTBqQzQXZrssAGMjBA1TwTZY5hGnLsQwXicv48La6yGNskPFFPJxtD34kArjNZK3E39r7JZJrTs",
  "key29": "Zf4aECnJoB4PPN4Y9vbAtSmSx8mwH1K7q6cZKW9RzSycR2PKUNKmCSpRkoRjdnJAwQqWL5q3a4JhtDrf2n3NewS",
  "key30": "48YcNDSGhfDiPS5zwccmW89TkRcuHP1iJFBibmdUM9LEprMLc5ATaHPY8a1r2DCFv8CRRtXrQ1eKDpp33oFUyX7W",
  "key31": "59RnBXBkmRxd3uFjJekxUqoQ8mcwv2jj8i8PZwH3fX3aaXQZrtws7gNjgnrEn72NNVQDsQux9ff5jhhcG2DzpiBU",
  "key32": "2khTL3NBxsiinjMS4D8SG1LUghMLmrw5haYd6kXNGgUpEpbjLW67QJ4nR6wv9P4BEa6tXPzUDEQSGJwhZs3TNude",
  "key33": "4wDmb9vizrc53ZuL4F2iyLWzarxBcezs3YA3e5PKNrMNUjTmEVKsnp1qTTjpD1r3MJaXjAPZEn9B644nLhu9gvZa",
  "key34": "sxTSFv7hEMWvjetU76TP5RAnuhV9g5WNEoJv8VfYuguhrqVMKPa97gSthQ4c1niGRquEzQg1nUSaK3pTxVDYEGY",
  "key35": "57LvJk7mwhEAXG414BNc8KjXN3kqT9CULQcknBcXVTUwHs1U4yqJkisr6jB8U8P7SCdBu6xmtqrgz6FXJLgjVS5q",
  "key36": "2u14XjMgdRzKdzSCvUcBS5hBp1jQSHhUnjgZF3pFPnPtC7dSUgQtL4uy5gEnaK5JM6cxaM3FxemqTSsYXC2QhfbE",
  "key37": "5Y2cJuSDv2u4d5W84uSM8JLxABW5jmM8UkRvBJ9NCKzispTBncVAhN8oJcEHpoNsZxf4fAaVZtqbhXeJxvCsNbCL",
  "key38": "9CdxqodV1d9JQQchisb7ZLsCQ2PHxRWC9kVJuVV2HjNLcfFAZMyz1EBPSR5Th7HTkrdsgxT9qtphbbXrHvNLoMw",
  "key39": "38xuzzSo6ENQhh9dMkLQK2ycVJSMDmkNb28h6EPmpVKZDsMABvKv5r3Vj5LkWcJvEvwWa4RNJSkqYcNLNyubdWKG"
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
