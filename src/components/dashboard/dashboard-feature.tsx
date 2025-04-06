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
    "3t7DVK27uLbgXv3sJCPH9f97f1d79Nf3L6tDn2qDDd7Vinq5yBP5Au7CJ6bVcYqrYM2wJhgLhtbgMEnjEgDJTDfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Un4L6mHvQBN5iSurd8FSJaFvHmQ8JJEAb1SKF4LMTxYLG5xraoW86WK1dU8cFjDsWVggcDge4ZXYBHs9ARscvSF",
  "key1": "YNHRSUDdHkdcNVgNQWaiGnTXXJkYaf3YASjRvzLFuRjboC1b1WcDDBdqkshHBFhRDtbrfYa6e9nroV1HUu4dr1B",
  "key2": "21o4xWrdjmtp7RUu7FkeHc1DfdGFkwuvn2XxEa1yQRqTKTEhVkHeoqzibexUQqT75gef28A5rWWe1mB21NX248m4",
  "key3": "B3VjXXFxhohsmtJST1DB5sDPh5i7Y8nDuMhSHeTFVAzKwPMk2zLkik5Nu6ZVZPRJ5NpB84sUKqfj7z53d5RmPGE",
  "key4": "5oMK7k5jEQZQiN2e4oKibMACLZveeAe1Gna6TQi1Dg12z5MqZdVAnfcJwjqyZMbR5EHN4XMb2fsN7wEZw2pE1ic2",
  "key5": "2omc6xXFasTkLszVubcNSax7AsGYYRCvKEdtsCApJ25ujHhDciFhWrPQK4MnLzrT3uzbeLf3A5JQQsJ8t3EL8Fc3",
  "key6": "KuX7p9NwfQghwRPbXUwt8gp3ad1AmJE3xCPmFsyT6CDvE6mdTHZDbdRXRxgavHNxffCbdDSWFLDKcbyeRxdKJ1p",
  "key7": "2uQS5e6FvwWP7DsUsT3ggKxggmV5MG5LQUykpUfzYSBe4NUggMMSrCt1C7uNQoaibUXWBQ5wvB8xmmoM2tBg3uZG",
  "key8": "661edjcQS9WWAWBu44Ff7Z9cyJjaqut9nBgs5siiuNHpj3z6JWiGvM7152ZfjJvPCEzahE5bShLv4LoipzuYH5JN",
  "key9": "4n9xQfPGqPEaLJVgXbrWYEEZxMwZSTgH2yjrPdokXcmpoExSbW6aPtYpxzcxyccSZHvi2itgusBD1qSxVnin49XY",
  "key10": "c9BXmRNpgByv5R3dp11MPUBBc17Fu88Jt1a6c3Jq8o1F8NYsvKd27AHVP4Wrsdi2K4RFynfmFcU4py8VbUUPfYv",
  "key11": "2QJSZeiBdjSXkme5RFmzmtwZmHw17cbA3ziWWY8kZFx5XwqppevQXRrTN4f73rq7vE5NDvJtvQjP9p66npWeUVaV",
  "key12": "4Vf4dmmTST2D8RSw6698cATxhrY3HjoJTWU57Anx1tHw6LJc4xLo5W7Q9QU39xZ5Vo1L6xRCSMJUvB2iQ2ejdFrP",
  "key13": "2UHidUTmBgF2vktdnPVrQuPMPMundv5b5awNjo4265cXwcPwLFviz2MVu3jCPxMLzRLPcbozmGqBJSfxzWZEv6p5",
  "key14": "5buSuRhtcGNruwfCX8j7hxjBWStFiRCbbRzHKMjKN8GnVHELfaC5XAgojvbWqpdYBGUDKEToL7R4a2BuzFDQV5tx",
  "key15": "5kwB3M3eSAnehfdgNdEWs8EtaSkfrGqJthkcoaQmBMcJimUHsHtkCWR1ofDuEiW2hehhPuJ69rCeAETRHD1EXxZS",
  "key16": "59yDu6VUC5JewnoCukTPoLSQXwq1EKENDhz37R1wwcVD7J5VTVM1rvUUGBqUcPZ2Mo8vjivn5k6Laq1ymDeQSes6",
  "key17": "Y75LhtHDoPnSyE6chcMYypYmJBqFUvaKti7rx9LQhNGdsfk6Nw3fi3VzcMFrWpthHs4NrW7ZFFQrS4Hu6cdfBoQ",
  "key18": "2Dc91vu7DSkNYh1AQaePzdmovy7jCc7fASnTjUpFwr43yzzBJEyAmexRQ8Dna5mMcGYhQju2UbdCRQwP6ia8859f",
  "key19": "3FRsujwJyYBRsGUKaSxUkbvsSBxp5FDq8B4aKzF9dhksoZMxt8yHBnBN97PwHBQWTRgTw1uLAVDenUPgtrwHuHzF",
  "key20": "3XmyACRD25RiKVvHVyoaXj7xyqh4M9AMKdWmGUrRXWwMv3qgK7ivRVMbCescpTfzWAQejd7g3X3fA5bQPdYwM4Qd",
  "key21": "wQ4desPN6rmYntdU62r9b8Gpxu6eNN5rsBkXZUMgEoFEKJv6fuMun7NktTPvrkVQz1AkEwPnvQr4qqBGf8aDNeh",
  "key22": "4qn4fRuCcc31t2ptrM8YxscksGPsMHzM1MpvrNTQbiEtcoEiAiy9RVtEAAPp926iLpSXgET14QSRPiQDRTuBBa2R",
  "key23": "5mjDhFy6kra7tT4uhpo4aXoKZdY6UjUWdasWXHp69xm9gt8SNAB2tzrpfsbZw2rN5K42aqWZ8fo5wsH7ZmRW7UfN",
  "key24": "5QXMvq8HqrR8d81zmqxPTiow2RLMQ6yMnKUF5RjFcjTp6GEacpWg76cCyaguPKWiVHVcPLAZHyysTDg8gNxALaNi",
  "key25": "2ghGQAJxGZRzUxXUNvXoQfakwbiWPhgc1PJcNMLj3PXUMPv5ZBV71d7aL6TtqLyEpzJ1ioUxa8mjmmfmPSwGxAHt",
  "key26": "5bQnvUf3ekxZmuRsMKBnLPJBAZcH817H95YYDFK9EYoNEjfqXMMu6TngHfThnNZNU4sXdXfG67WBJdj9vvSfmP2j",
  "key27": "4G9Bcnv78gn2V7d2q4dzesYuQVVgo2orLrjEDuTkHG7TMLJSrvdziBXSzf85UYKyGKKrefbBohHx2YFpr9THXjGb",
  "key28": "JST2Kv37eKhXy9HFXc7FM4diWVwDKmwEhs8eqHL2RdRoSR6MSK7rD4gg5yAFv26q9catHo8A78TDG4C6YvREzjc",
  "key29": "UfGvRBDqwpFd3VCE6h38gDShftqUNWTCDQ8gseGnNSZP73pwmjGAQWBDzw8wxf2DJuaQcv33YpAyYz5aXGfXPDs",
  "key30": "2QaU2Axy58H64SeJkUEumpXgaZXkXwV3VeQumovLuDcDJZekAbwcEny962AzGZwmgyKfz7THUueXjDqVSpwNz5Ni",
  "key31": "5qhwN5HA3FC4FcAM9rsPZ6YEj8g2EJFh24jEUBvJKR1Vnqzmqexpq2CUCoz5FUh99xtYJuX2suTAUD6s6HiUJ3Ri",
  "key32": "2aicc53SDrA9sAv8enrqd8WFxsswdjhUh7V1LRdjeH3KrAuCwNZkGHDyccwvxiNKugPknALQZWLPNXatzxxr3B4V",
  "key33": "4HUhWfTz8rHE1CDWZLieQEpZFBJbDdPWpUq8dA4gByq9tjTP2HWPauER95D8J4aaJPGqt5STTT6x8wdvQ6gURpAE",
  "key34": "2rAt65cY5W2RM2ivvciE72TFCkztJx45jpSwEoCjoiS9u93g65aMGnoyijSwTugeW6UNjo9p7LPBRSXriEbuwczj",
  "key35": "5uXZEgri12MioP2Qv3hbKpTsZrL53MiDywdzJZDYHocpfLVzdjyMaYZknCtxez6dkLTMS9KPyZirG6QQvpXkM9AH",
  "key36": "4inrKkVSe7grk6ER2qhX1xQLS4gY2fiaBcVaAWhmpLnThzZgowYaWRgsFskuNy9mADgvG1FoJdpPogeXDSQMFAw9",
  "key37": "4gDXU1GUDxcSB6aGiUpwu1XWb8mWPMcLGjHAjiUqQqk6vyNa7Z39if9dS1voRVS642UEWHXiBaRJ3onDGyyC1nPK",
  "key38": "2HbauzbiLt6bXX3KpsLrzVLX5aP8Vd2jQAhkQce2DTTpCJRg6ozxV2SRy58vwwkLjehDWbZq6FBfbkB5X32PdZCt",
  "key39": "4ynaX6oLCL6obyF4CFadBUi3TP3gdv1BQkNfCSNYzU4yPrYQY2YMwbSutW4yi6fyM4oLZJ2DYri7zqLUXEmUbih6",
  "key40": "3Zofm4oqoS6G34fMrnhkmnDE1un9s6fVKzi3SWpywQ9m7je7YeEDJRFndwii3cweQd9RHxxcv4T5P7jXz8nTrHxR",
  "key41": "4nLTCqvzVybx9fZ8z7JjfkcEz6jcygL5SVMJkSqaDx4AWRL1eCTpiMPYCUqbUr6SHjGWH8kzPFwtsAFVZotbiVRV",
  "key42": "3oTF2KoB3TG51J5t8LHZUhS3LWZtDSZZZRSuTvjH8aUzRhG91fihKo4CijF83BsZy8DvbA5Lh5jFb6uoyudMcJX6",
  "key43": "5rhQAgkjLg1riVnByEDCNz7RVKzrrZwdSti1TZE2ndAHKfZk1HxU8r6M8QP8AmGwsYvVzJLZHvsP8F5gncCyeH2y",
  "key44": "4eUU4XEt56Rufq7o8khNp1NK17YFfgeEYgLwnkNbcCoRSELA7sxbtGfh6QhuXWvq6xc8ARYxdFu3qsSsd9MbDUvX",
  "key45": "3UUQL5NeGZsNs89Xdqyz1uSbMZkNDwW8VtrVM2wE1kESMX2XCVWt5pNHnTLB6ZARqRGqDrftynRjTdtsHNsorupf",
  "key46": "3u8PsA26t51SgWnYgPVambxtnZBpYMGqDX9K9yqjAAS7BMbKLs1dugZ6aShQCiJnNSv1xFEKUUhsitd1pufS81VZ",
  "key47": "5tQ499d4n4VWq7FdW8TBtVQ9a65AmbMSBpiJ6exWaAUkct8qthh8mG8pPnc7zEgkYY3WGxdvU4HcPpAmgpzcqgqQ",
  "key48": "3XYwfpazoDaSLoPCSg4i1UyzU4Knkyn3uYfvQd8KgnvUr56dZvhDXuk62jg1z6uSFtzA2v89z2nqZDm5tqv8ehTo",
  "key49": "4csGkXKQfYaKgAzqAr8XpkbXPDoesnVvLwWSiNCKzaFGji8jzSQjRR8wj5rtpSV9xA2suZaXFfaaMxrbx6ywAuBn"
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
