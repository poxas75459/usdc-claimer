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
    "2z3Ar3ssLdrGza5ZcSGTM8HnryavMbNQtHMZKj21PC78578vXD1qfwaqmj4NHnN3WZmPEC5s1GD6aL16fhd5Evs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CbrjauHVdV6BPtcU5KoBSRmtFZUFBM4JXboc1WjBX7e4caCDPe4zZg8qbiA6QFB6NAvvAyYcq4NWqcgnYDM86sz",
  "key1": "338qoKHgJqMtrhrF3SMoX3D7xgxXPPL5a5TF4A9kZh9iqB56BbaAiiHbtomdTEfsZfmax95frbEeYDcEZhayZaAg",
  "key2": "4jGdxs29UDPVCWTdfu9Th3qQZZ7wRNXW1HyBHe8BfH9bmBwQDfjAZzemqzmPwtt7KNih9iBnuzbm98xZZEu2c449",
  "key3": "5iV62n5dwTF1kBoXmLsqrVuTThfJ3kR2LDkWsUWY1x9SmXzLY7nAK9JhPKEajW9cKZJMD75kapk3gkwXbQCUFija",
  "key4": "3JZWSM5RXEgWC8qcaXuym1omvx1EL6Kmxst4FPnTGdxR4KbAwJEY9Qpqf1pRzZr15rTX52v5NoUJ9PDDf6sAnL77",
  "key5": "2V3xeDLQK4G2tT7qdbxfrDgeJgJYj77dn4iNQ36VAXdw3ACyfG5vA7ngDj58c4X9oo4o2bYFf27iQekASFYnCasq",
  "key6": "3r4Jfu9Av6a82FL4dPLskJcWr7NLennXLCJPanR1x4yjtn6oRfJngTJaR14bpkaxHEP5aTGxHPQoTFQUpbSvCFrX",
  "key7": "5cPbU5WYHkjaFHxcuMH5rMNzaW7UgQatmT9KogDgSnWWX3UM15FgeoqHbRBBrQx5bLJA4XKvPdq4tpw8TpmwkHtT",
  "key8": "2LNwpMfy9obKbyHMCWAJYhN25eHGEXuPKGB6kD3FHwUEiTHGF99Gt7gEbLGa4fP6sm2c3aegWDPQy98ETZv21675",
  "key9": "2Qct9hpZ8MrZVv6gHozbW9MmHPgsJ8ZCZiL8uM5auq4rQvjberCTiqUdBK9wCtvLY1y2WmSFzxMZ5m7RXMYayv1A",
  "key10": "44oxB1BCUK8Lf19advcnAp2vRmCfKJFoQ9aT3piTrS9pqQTBSyRbUPRkzx7jWYH2Pq8njNrDUrxVVwBVyEeUK2TW",
  "key11": "3ZWH3wRNtd2uRSmwS7Fzz9fNSX3Ep9sYRj2sL3fUFTWAmC4hZoxRFiwwAUgorfajkMfS5rkjGjRGMiCbCkeJm6a2",
  "key12": "3Ysn9AxsfKDosomJdnvyafERWqsWUZzEaBuzCvRsvvbCT5UBHvdtG9PuuKRNm5YMash6PapQLF6L8z3P1hf55VcT",
  "key13": "2cd2Qc7HU8LTi9pfaHRich4i428eP726qLkYuLxLx9Wdbdwoh7qYBFoVnDVEqyFo1zcG8saGaimNLJycosj3b5WQ",
  "key14": "5pB9BfsrGteGq8eBgwi1n1ynv6QHVtgWEzarXFgqipQyYeWSLDuAnZwdKbTEwk9CpeeMFE3J3iyk3uC4QjfdstGH",
  "key15": "sRyFgruM7cFvSzXs9ygRpAwp5vdYAFef3W1vauyHzsDMqNnLM3hwDFm7SDmKuVGEhEGnXh6WcSEbGi8ddQ1r7dE",
  "key16": "4mCSVFdN7T5oHkctxsoRRwof8CBH84Ai51oG7CCAVjGRZKNx7Nb3EPpZ7nRwXG7P8U7sXQQtCFfGwNCvoGVskcPY",
  "key17": "4VKPPj7Z23nD3cNewPR5MCBJ5UFkTML4HuutFNj6Sj1RcMMs1kBoFEiSVashrPRqdkMzXmi5DdXHQncmh7fcUzBG",
  "key18": "3xuZ1E375yx7awFxkWnjYzySwb6YFHpbrQQgUK1CCtgRdUAdNoaBkHapyLjuUNKrPiuumtLCRaSmtkBaP2E6TbUm",
  "key19": "3FEYqnzs1Kq3DtQgTpFZVuUw8cZAx7WtCT5Hta33fSKpHW5jmZwKY5SmVKCzC29Yfqj3mQMkbJz6UwFWhJ6y6iet",
  "key20": "2AVpSz5epcuoyPkiKDEZLbURxDeGCS4SEsrPcXkrZhxt8vpg64X4ZVZFpQkabdRwuJ7ZPST9sBBQDbDjRMZD4Bwb",
  "key21": "g9cGqBo7BHwemHttQkMZQsesShJdy3w2qpcrr8DjXWYKBE7uqLNXMFzYeMP6Vi4WXXc7hctxMsVssKd4t3gCy1d",
  "key22": "5iGZxNZsFz72yhi2995vdscWe4f7LqBtg9jpsRJABDbxp4iWHy7qnYFHBmpdeAdiELQcrkc7WJCCrYUZoFUjLEoZ",
  "key23": "4BYqzXtnnaTMavPJbjms181FJb3r3Ltqe4nGBPHjUveN7pVrjALcvacYonzRP79FwAqgFgxQbLeYb7eNnUnEvSK1",
  "key24": "25xSNzsiPAHdoMYJssJkMbmArZiFfrtXGJceMeFKhaj9RXu4Pphi3dHNkuofeHVtVhmsix5ti4D6Me474C1Xyn5o",
  "key25": "2PS5zUxp1YZwQGg887fASk4YAkPRnoVYG5ArdtFQ42Jei5LLxupniFvTV8v9Rh3uL969d7xStyDemnxLTWt5J58t",
  "key26": "4RXGKn83rQvchT9HUpFcaB1182dBKJbhiHjdHvQBLAvXqbtBa8iwXiWjJKKJALQ9psiCLS5oqQreQ4s6K49HfE7Z",
  "key27": "3hJz8ZYqw3w8TRjHguaUdaqJvGY4zJxFmLpxyu4iQppMqoC9xDBsjM6HLhpVDHezGgevKfjJXsFDny2WySrk9HTW",
  "key28": "htLsS5uhY4QzBKzx7SV7tck3RBMkA7j32P98qfrxgcSoeseFXA7SVg7SgLoyhpoXLMi7BuqfhyvpU9piLCRLFWi",
  "key29": "43KYC8TppmNLi9HF3kfQzVkFpu3GemRjtsTSifX9knWc7KXoX8HQNjS9TWxMdPJmpPu5ZTRZcoYSeaEmWS26Dvps",
  "key30": "34CHFDktXtmE4ZLyYeH3V7p7VY3PzYnQqeWhy3kKeVnTzWtc6xtUQuF4aKsRwgmZ2PUFfZPQCE21kN1qunTrYpvh",
  "key31": "2ZJRraWGsqDwQFmwVGfVHYih3cgEopPVgKxrXKnsk3S979EAQmtcrmcxaPeTeF938g7Y3YJvKqdnEhbnSy6ME2B6",
  "key32": "2W5KoaEHbGywwqR1K1La6XhYHs2wAZo8LZEHd2BV5WKNfmSFNpMd3AGjRLPe1suEK3ksDEfgBXa9RuKG1ywheSsU",
  "key33": "4M6R73QF2Hx8aGNKwjzyeKUXe6RyH9woosomC7KMoe2wFr31hN2Bs4wzgcV5M7zQC9BTxZzCwafUGiXanviDPWRx",
  "key34": "Zgxrt7u82otp8tBT42z9QgZwqj215nFLZ4nvoWsLhgQXjy7LWs8NswN2GgEVXdThVCFM2pKqbZ3eTyw9iRYnmkY",
  "key35": "4UXA1KFwrSrtxf7sWagjuf7ZTWUHfVcz9fWaCbAgJcRxdU1GPyEQ65JyWFTrMBqWAAuUsRHct98AHZ3jSWTWPPyJ"
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
