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
    "3vKvp8mVLHzXQW6LrEAd9Bq6FEGZF1rCp1HCAMtf9ayTseFLBD96QTxmKFhvsXK19EFfeuvegCdKydzBRt2jLCar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29iMLCUBTw3WFBDQrvGa9SyidwwBUKjR1ZZkGR4aQwrrbrZUD6m7S71vdqKUrmW38KJRddGhn4wgpSJSbBEFuAQH",
  "key1": "4zRXo9ChReduX8ArhtqMY9w9itTnfF5QmFRQHJ5oHU8L433iErTDTM2biHxBoWxkrBDYt2uU6UW6V6qkspS6ya8X",
  "key2": "2ongBmTZE8iFWBmP6XWhJnCLJnob39DU3ZPoUz5AK5yF96BDa1yBMF8v3k25Qk5P1NWy6HGr9chU3fxXKGi2SdqY",
  "key3": "4SNYA3nLLL37UvYSGAdvcVobrXEbaVefyft31eEf8xRKdYAHaLuJw7iw1UoGtMgEACgfcojiKQvFCLAPJWfXeMAS",
  "key4": "4r5NDxHT2TK5hUsbD9Mbfp3qyJsiJA1eTK7wd78ifSb4QZUrUbeCy2gUQpP3bXNda8PvihATAFNMQWvsanTT9i5X",
  "key5": "5ox8NqsbNN74doG2aaKjWSVakshJuRy6n9REMxoY8v4i6XKN2yfrR84Yt4bEwxEFLXhvTEcBRTbLDUkD1zjZpyT8",
  "key6": "2c4KbTxkapcqnM7f4xeD9QCyWuUfxcwsZsp9fRsRw3aQKd1DezxKBgy8MSzR6boRMAVC3zqj4eCt5kqrPB2FJ5ST",
  "key7": "3iwQZia9TeL4WgQJMZFTS9o1AmLuyYR5mts3oj7uBg9UHtMjyzEyQbWYZsZ1iNHM8mmE5stjucKekraiHh2aAswg",
  "key8": "2qiwknqLDvqeSXMns9TbcWqFC1tJUAyYCkrCAmfD8dn2qPcWNCfbkwsq1inkSTZstHsss1aMdjyacQhwDJYSvmtD",
  "key9": "Nk56tTq8SrqM1krHWPGwkB6NtimzgU7e6rthfRyZjL53SRZJWAZBqMDwAb4d8arkZmXNuboD2jxn76aYSNqUbPy",
  "key10": "2xYLsAUE62FfFXi9ySpNPhGzwaDxG4nRJofjnnioUfe7MdQFWfHx9HtLqEXo6nwEcBM3JDc4U2GuUr4SnsxM7AEr",
  "key11": "2TSRGMkF16k5RA1U1Nhsp4Fa4VvKRy3SmxbMskTrSPyReWf96WEkRtLa3JrUoW44NFjZF1wxz84aJaY7DeGLDACh",
  "key12": "28Z4vMbVLPszw1DJM24FqR5gLtpb2A5JEH3z1FMnEqjAC5nwr3rvodL9ucycUN4fDts7w2LKe6g84wikUXBADskc",
  "key13": "5HiUUaR8XfAVfn8dmKFhMxuaBKbCk6mqGa3ZT2oSkjQi11HKiVsSd6B2uNChyfjN1WgsiVxDGXiq2beonHpfasiy",
  "key14": "3YT7fQy4ZpKJzeUnMN7hYsphzFMYVnGLMNYVHJQKsqSr1LcKnwNStPuZc6hsvTKmZfA6rmEEAgDdZfvhhUNDjEKR",
  "key15": "4geAZLcZhPLbUGZv11dUvqKdcbwNosw8hKmwgR1pLUDexWzz7aWMNvVC3CntQQLsEcLRZfTNTQp5Dk5VQrha2zfy",
  "key16": "2xNSQDF7WpziLQkjNeag95QsgGhR1ozd22ERrHa24VuwbQX5tE8cseQv6aVkSpdJAHPqzJNAvLCtfZjEMqttuf5y",
  "key17": "5rzNxx2fHtizwN2m92szNsgPze55jqysBKpkAxG8JDK2KZd98LaMXpmjHQMdvj3A8iFPPSHGAnSphn8vAPbA5SDm",
  "key18": "241ajz6GZ3zzzeAj7nDN75Q3nkaFUkhtNpU7dy2CGvjHLiRhmQtQjaXpcHc2ntiyPyhFo8AbeQoVv5BjJHv8FSRp",
  "key19": "555x2WGM8pWH93YiNSJR9ek2T4NsJytKWVLP7rdkyti3wP7jh1xvxAXDsoydpRT5gwdtC1sj7pco6xzPNgNkiVBh",
  "key20": "3YFkxnPkQ2iHRmXfdBgwFtPdNj6p8YxLjorfCKfJ7U3fpSEuMGgFe4dTJ933hX9x4fXMxvVjxB7WJH6adLMBryxy",
  "key21": "5pCWQVL8b9P1SA9Wk72U1VJ9mmY8JfKQYCzcRnczevjXi8L6PkWdMK4Kt4QPhFb7SddqGUL7ZunHEdoEeTU4H24g",
  "key22": "5cFCUQ2ePVV85jCyk9Tts85kLtQNuMkbYSixURmo1KgWYntZdgFnUm3i8e2okfB3bV6eBJbF82RoNsTSpB7UcuqT",
  "key23": "5gi1XnM33ChBhboSKrsgxet7qqK1S1ZFYSk9Ppn7tigG6sPm49K5yp1eHqpyQjkWSRTg6xawKjh21PtYpDoji74g",
  "key24": "2ReNcndBevQYSR7sTs6SZGaeJC8fC5R4eVuJ9AuWqNAr89V4QTUH2nCkt93WUMHRpHJ6n2wdM2xaWc4XPjVKPEHm",
  "key25": "4g3ibNU5cjZKR3Lfx1FxU1JVhdgQR3Wen1gTvcAySYscYAtKmUuQzsuSJrGy1VVjmtaypLetSP84qyA9gVd8Vu2B",
  "key26": "3btbXi6xGUfnyeqqu6KqLP9Q37Gmovcc1dsRn15XKnKD7uFAwoKwFEf4wN4wVTpvWKAs5CP1CzSUom3pBz2nqtGV",
  "key27": "5QEts1Gm1sZxCAMiGW9dkiNDdWTyrByVFo3jLmQHnkBR2YhyGf3hS3gBPEqBcbX5Yx6nEAqJ11AVWwb5U82uXWMc",
  "key28": "2SqjAz9c6tLCpEdJBrp9Nuh73t35HnHbkW82ap7ggFMV7sDuPqmmakGwikNEonP25LL3raBuey1a6aR9KqDLmDib",
  "key29": "YQDjbGGhcgmSscbNEqno4W5tuwwe4LvgEtNjmPzNCd9AUt7X4EFYao4vdtv162ktrqQergyFsUesFkg1EZahkA8",
  "key30": "HjfwxKPuf1S8MpH37pNkZdw2HDYvh48R8re48aMBqKPi8BY4RKUenSbSWYoLijim7J846DKTYHGzVxacoLqdMYu"
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
