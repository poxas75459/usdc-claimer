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
    "2ARVA7SPJ7vqo9DA7RFapvH9eL9q6wCm8TVx1GqFHGryrjz5cKpyvBCgZnqTr8zASwRfWignwJWnKdCvsPVA92p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jgwQuPaQVfg1eHpzXdLjfiAq6eDxGUkubYyqSD8GBnVevJMf2ApMaKZfn9VzNvn8FFfcG3EPWRxp45kLrAAZiY",
  "key1": "2kHhEF8FMyVP1WFW12ncNhruJcUZYoYeY57rdZ9a4S3x7WTrYvY8g2AEr2a3937xxTs2PHzTLcvunZWWMsQLFBtA",
  "key2": "61y1He39yJbeu7pYG4wT6DddkWj6HC6AuTMn3PaULmDAat3ofwS9KtR99NwNuqU8KjTkJB8JLN8GeJzf8WPdBADx",
  "key3": "4AY6nbV1b9DAMWkV5UtDGJ9BpDvEBXoZy4Giy65xkzT3KuMdVvhPJQgUse92nTSbG1o72ytCS12BFhstqMmhetDV",
  "key4": "3NggGCDZ84zneuPQkNgsh164GqnwbuMwTocuAjMfEmoujS2rkBby8eafU6tj4Mo5L9HwnFr1sbKNLgseuwoyZ35E",
  "key5": "24Wae1CnRLXhNrmT34Y3sfb4LN54P5ABxUX9KZ5BuAtuuyientg8T6JBDgQfDGbrKmPdfavwBvcw8ZhtJv61e3Rv",
  "key6": "32fZdoDr1duGEp2qBWWbdMkDR74TVysJv8JnGN7WpJU1YurTbLmsXooK1ouaX7ip9es9GvdJFyAdUgRCfmeEyHLD",
  "key7": "2y1pHpLeB33nVeAERWZSD99pCLT5PkxhhhByZkTXPwjCFutLh6XbvBXVE9YDwzfRNSvEak7VUk2YqEwUUjQS4wBg",
  "key8": "X5sDpMEQuicD9dGLn9Csy5x2TP3cCBtNqZP6cQpqHK2LcSdK3AW7LkgSRfxbR9xGHLZfpehw77bVqo6ekwhfQkL",
  "key9": "42TcFaRERnm4KKZqLbQ2WM5b7gHwhBQDy5Cb9kLBEadsuK297VHh2DmN5x4Q7ASNpMs6zdLDo4173d4phTEFQ5xM",
  "key10": "2GmTYbus5iEk736eCLsm8kcymikCHTfFZgiDUaXysFNMQv8n8jjEjMMofErdbC9Z9p96iEEkTkitSHtPTi3d5kb3",
  "key11": "4DBhHYgJnVJoouNEg7kQ729YLxRGBySMQir87RVSL6xk8g1FgZPySBGEkTXB8QCjpiwrseyFsipigWKycrpBBcr8",
  "key12": "5qRCFiPn9SPyjsbsELmDPy2BhsqYfnuCUHMNoL94jhvt4VRcsNo9xxXU4XbLeEkZiMkQF63862ja8gfNLmsRWBgm",
  "key13": "5b3YieTv88jqwbiRTHA7gAoEA3mQuW9Fe3SVWUP7mjQ6yqa3WXGEEdntu4aYjES3EAHVxqBEisyAtwVJihPBCgHf",
  "key14": "51JVzKFDTz2ciZLnWd4J84dtkihhL9GWUmX1zACqJSBwwy4jcRuyUSYyfV7NY3Tc8dsbpz9ZG7PpQRetTVVyskcR",
  "key15": "3CNR55JM7ChVAvjhaDPVP2ZG64kzkVQmmXLRRAFWvF67X5NXGR79FZfNST1SqGGBTUkKoPKYWA38kFu6yTCZ7fmx",
  "key16": "4W4aXj8P3eNBDjkYzWZDvrgQvE697oLwbZWqsmUx2Zre8RyE1i6pvNrcRjeswswkMHKF5nPqLeXsrzQ7YM7MaqgD",
  "key17": "S628zRXBCqp2QQVtqLiXBkzXmEL5h8s46gWMU5EwfMxtztSjzexVLP968W2bHQS3p8FxmWTGKgsNNvcPzriq9PW",
  "key18": "2zUjcprj3ZKD4hRCSSK9ox7YQJwNEY9MaehyWWQd55c3zLAa4bj2PJ276JewRKPU6hrshGBrm2NN2x9ofujuSUPq",
  "key19": "eNaTaezpxsym9rkYDMPANwABZYJN7tsRjpxFkjVshgmzMEpyejtqx1pNRZEDEvjdk2WLaWEkFgx19xwb4rzxsKQ",
  "key20": "21DWDwTYYGREam9W91hncuXfHa9rmrTTJBY2MWFbHRX21Uh4KU4wnZedkRXxbkcVXu5cxpHvRMAzfW4HRf5AJ2r5",
  "key21": "ZtVJkSARQeoqo86GkDs48ZnJoPrQkhdGJJjrrPSnEZjsQJibh3d56n4twdxm9CBvTfy7JhzKX1TV8ksGzsVAnq2",
  "key22": "3QiFVtKjz3YXJuDaJdjYcZtAJzxaTW2cN7B4okn7T6pe7Yyd4JyJKnQw4ZcVGiijwooS1ptGUHBqL1ycCaSR6Wom",
  "key23": "44xfaYkczxghpyJrnbbFJGwS8D188dxRjdzhfAXLjg1DCaM7apoM7HjVsnWHVtydiqy4RUWHfuAKdK2bxeFfimAG",
  "key24": "E6XvtbC7giXTFN8KWbH2Nio13jGdyAmkaUYFKFXUUWEZqoQDTzK4FcBoJgQcFPSPxtZnMNycGaAbKMFPrVTmrde",
  "key25": "4tbqXB7skwXVzw4y9U6QaP74X5djxuroLy8sTqXSS8qZRyHpoNPCbE2TrznwqPZCfRj12sAMgtdanELG16Mwv1pj",
  "key26": "8iE9YaviRUqZ1X6kZ8yAC8kDc46Ge2rbEtgeKFJ6G8P7kVw1mjpTSgN2d7Pmt3a7RmoLmgopbaZPQSHw8Gxu5yy",
  "key27": "5TeJs6jBNYNCAtejdhQK8fwgfyQyvqzBhHmm6iaAfaAc73tdKrqDcpyRvMApMtc6HLfY4JTMp3f1CJ59D9bE8NKc",
  "key28": "3vg9Wt3bz73YeTDjtD2ex3Smf9nhMgo5QASnSutpw88rcnwLN1QBnsQ56dJU2xrqbA9iYG2tCQEsjMh1BzP6EzVo",
  "key29": "2VPRFftZi8m2PgPPvr1zG3RxsiUJMKFEz48h632h3j4RRRGefMSXqoHFQvtm6PC5biidGBHjaNc2NssyCbZJNh1C",
  "key30": "EARL7sCamWdBBS1s2qH9gXkVVGugLeK5dqRpyjqhfEqJ4Gnxyh1sxDNcDSX69dpUCGGnYUEwqas9UYubHURbJHC",
  "key31": "2tN1nsaayqACxcP8FX1B7VJiTpQjbPVUcHJy6h2DiH7VrfHwuoqHMooK7C6VCUPRXgtT3RAXEFkPaK86sJjRvuQ8",
  "key32": "43GqKsaUEh9k3uQw1nsKDURrHjB3ZPMfbLWizrLsALhPW642JNP87cH5oh1rkqofLQoy3CNDGAFKr9oKr6FyqgaB",
  "key33": "2h1pyBUg7USvu6246LrC8urmJTgmXkhjeQGCWfibdrANzAd2MPtDfM7j32zr1BnmgHtSfB75pwRijfHnicP4tEBP",
  "key34": "2W8ceihs7PTQrjnjffco4MUmimFQHsyQh4nroXPJ1gbT52uvKTSiMTFXHAWWoU7wdBQ5iDMqhZXmn6ooQo6MyX23",
  "key35": "7vWdXk97csw3NNWCsSSrP637KLiGX1NBh9AHCDRdDro2mGpdrwDRmS2vhkUHo7PgsYnu3rK8paXMjDzof3Nz7E7",
  "key36": "3uiAurB6EvmNNSrSyiBNwV6RC5qjdm2vXjDcvXTVt27uxCKq1xKw4bM461rFGqbbMZnoTnGtrZ5Q3scQFLQFVhD6"
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
