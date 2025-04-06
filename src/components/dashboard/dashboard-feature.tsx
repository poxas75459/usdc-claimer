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
    "64Xc4K6drCMVqp6SQAsAkyy19FvVeSRdpfeuRzawjbUsjYjwoooWkWihtv3gwdd6dUutbr3csFKdJtzpfygqzqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ToqowvHVriZdSohcz2B8BRcZa6GeAZDfNLWXFyhUfzxvcuaeDC4pxJDj1zz5RzVNWHF5jZEKsZVVhTmnca9azj",
  "key1": "eVTeVQBC4GShQbXFQ4V2FxWtM1JFhnWTEWGaPBveXXMVGzKtSyALhWtYjznk6c4XFaUKBNMUE1EAAvrcjTfvmNQ",
  "key2": "2Sjcd4HepRCZg4N1nuW1acYwhw65WkzCN78SShJ1QEvvKfXA1yi4aM7kdtQMhxYv1KffbC2N7tLiTBv7QEgHHJc4",
  "key3": "4ZEDgzkpbUSgXCXAYiFCwTYpKnwEeH8DmLx9MgCUkzRG4B3hQuLQcGLDz9ghgbrhyFMgv3sK9NcWYQFaMU7Ur2mE",
  "key4": "bu216DCT7rMfG49ZKZyVLZ2fr7fVKaiqrQhVwSk2UrdwbeMduQsbn5Bb2cAJGzdvJLV8PmjdWZFVJfez839iY1N",
  "key5": "3jNCwiXwTd44ZfA7i1TdfLL5ojVDXfdDGxLdYpjjpbf1FQNCRaPbW5Qm19uwWDzi8YM5gTxH6GXz3qewcgmAm7PZ",
  "key6": "65MszZDJszSKDv2NLb1swmjy3wnAU24f9YK82p9gpZM3doPndr6CuXU1XwquANDyHKHZBrqpqAhUqv5sKfzjDCdu",
  "key7": "64hNicjxCSdvPFhXBFLLjiA35jMDbHkdn7Ey5YHTWnSsXzEoD77KNCFiAuiRSJDXmKRFhbHDmMBQH1Ex69mG6DCw",
  "key8": "3Nqqkf2bcX55gmRJhhVEL6YucpaSQrqGXxfDXEiDq6biZxJBV3bFu2PYpBs1CHUDL75drNaZ6DNZQy3Nvzb5CBTg",
  "key9": "2TgcJtq2H727aDiDz91sAfaZRoYwtYtqP3Wp1FciKyA9ZHeqZ5uSzpHHjULJSAvj2NjyFLCkuP5opLkpqf9RUenk",
  "key10": "3JTtrjZAVzuNvvfHXdTkcSaknRXi9uvusLeDFhVJx1Ba1eJBDUSCzwaDe6pUEo8LMMGBCut6RUt3GdWvksWabckc",
  "key11": "2FJjAoC9pQpNhMTRPUXEbt1uW4S1Ar2p8xYid1cncHr4xSmtPWDynpU55t7SXSKvwdYTJFjxrBm1DiBY4XHLtiqx",
  "key12": "24KYLZMGnrpytbNp8g21mNrB3rFSb7gEmTm6dhvL6hC8KjvG3ZW1XCVsPVdmy28JBW8TdpLBy8F3QSBhyFxZg2Cb",
  "key13": "5EkfAhrqS1zuAkuUM4FANiiQ9ty5YFCUxY74bfcyMN7bsSXNJeWNvJuEJJfnBEHdcZBfV47JTmxFd1miFnVk4eNo",
  "key14": "3U3FtxaP7ZeZtWaXzmNnNNyQDtJCqoXR22MRWXJACoX1GLpiNcEEvt7yBMrimwF2m46hh1ViKoXcb8cTJQiV85sh",
  "key15": "41dUaCSRKXFcPJfkDLM3edrjpDrF1Qrvs1umpyJSoV5kBRC56aRRojX2ScCpnvU8gn2ceDBjdDDFr27jvyF6N8it",
  "key16": "HeJg4LRbKhvca4UDDaR2hUszsfTnqpLYjDgcckAGsQQaYu4sawXyc1h6hY9mJ928ehKrH6dhRfRbnexcScRXehz",
  "key17": "3tmroNaT1z52fR1EgChUed5WMMuZyGTrj2uVPnfqVgCPWC98tnYSgSRY1j41hApwGh9ivfKgdgu5QPnMfVtTXcYv",
  "key18": "56nPH7mT7f5TYSQfYLQoawu8FvEGBdP69wp3QWQhYS2P1acg6xRwErHQNfD6ntMiPVJKmQVxVGdeAjEZE321TBFm",
  "key19": "5riqU7NJmXbm84pDPCsEVFqucuMJ9F44fdB6RZpADWABzgAaeVh8cAyHmrrrZPjpV2h9LLS8RYJ8894VR3Ln4M2E",
  "key20": "236PvdCASqVLQqbVgE8pkxBLKNy1ee2cznpnBDrP81ZtRdxXMQtWbaR5WxbsimrtvgkGWEgXKVjBpGcGXSm4SdWw",
  "key21": "5m6213yH4pBMCeePF7NqXj5DAVpzsTPZEDAeq7RwGfya1WmVTh2LH4AMNHAtaomsxtaEYzfVvrXPxiQQmLXMK3wu",
  "key22": "3vvZs2RE393366ig2ddBkuo3LB24BjpNDRB59GNiqhnfyPNTugHbUoEmWWHeRE8EnJcUUb9A9zGn3uJdNAoR6VDL",
  "key23": "5r2j5cAs66djj6nnxup3ZSsggkwWUfDCseLceCdyWtq5ZmGJfNGme6GaK6SppJqaTSv17LXf2AYNZaDvmkTuEQgc",
  "key24": "5KzPC82wSDD6WeuFmraVqPHv9PwLS8dkNopKs7AvmPwvqXEi6iphhHXpUCBHuMUzeUi7b1dz95H4qc3fHgta5ew7",
  "key25": "2NS35Fk7jNKGg3RmjtWbTyqDxtaTaz1nmVC6jzFPcsngxeRi2qMtHFDPU3uBw8dX9rVFoeFCZA1iWtwGGL29t88C",
  "key26": "3ADwg5tdgSZtGrFTWkcZb6omADDvEx3GT36MDZ4ZtnzZiyphoFReP4KZRzHouVFSZGUVwzUXsE54DFHMGjGoKbsv",
  "key27": "5iZjnMcfGfoxma8q65kNxcmD65Bj5vyEcB7RJ42v8GgBrKyrGzAL434L2K35tyiKm58qfChp7iAsRRPPz5kdejKR",
  "key28": "38SysDqK4ERFRhN1QJYVS9ceTNsLgUEZggP9aSkN2zFGKg3Q5fZQx3sKYKLCEHjtq8suEGRjDYqKzpTHdTNnBcFU",
  "key29": "256gbf4epP8Dd2WdQtFLE5hduag8c4XBAzmEgwUm2j33JFqPZu12NNdNFBfgkAoHLB682s5cjqQdew1kdMNimKZE",
  "key30": "2oRtxLwhexNv9y7aUySTHAsMTg17aKoxQUpy2fogU9enajsfNFhpfmxKKLckvum1fFJoDY31ZiUDs17QroT1QVb5",
  "key31": "3Z9jmTCiVsZz3vSipM2XbRCb6f3zDQ2eXKiVnZivgu1kdhcoK5mH15yJUzhF4mmefZ13bAtmiFUpgXzkhq9CNFz8",
  "key32": "5fv2AB9XoiEdpF4Vr3hNB9FHzJqwp8SvW32DvbBcpWGmDNtPmAZF9isw6p4aCXV6D9kfwmD3zbUfg4ZxNo5cWxKY",
  "key33": "5TbXR8Ugb5R2uiu7t49hEaK7GtzheQoPprCyLavbQcEfiS7rBmPkpas85LMAR5P7dJdzT2kjp4HcFwgkQVzdLSFj",
  "key34": "3YTxHSVWpUTgtZY2wuPVbQThpdkfhpGkxLe3En8qheGn2CAtFFxYSwzv1fw93TH2FN6cRtMzmyUsCbFw3Q7PJEh9",
  "key35": "517WEQfSj366kMfiNUHwudamx7u7mRyAYLg2vtMa3norcUnVJbmcu12fZhdVKejfsahQ3wFmLneKEuq5afHJvVH2",
  "key36": "63nYEdqRwLvULTbmJaLidCZ9RDf8Bqr7dbLfTHKCxoGhd7yBDDSfZ6UfM3NBdik5n9pKaAaSscQvUSrH888QzRnc",
  "key37": "cVxkxfJDfSv2zGj3JxLxNkzKb98GBSSyKVR7WkN6UELuUu2CprL9RWtEE4oeJAZ22iJabeyfxmYZdHJ5Kam2x6F",
  "key38": "ZPw8iH9anWEcufuZwJnCQd6JbVu9ymckK7oV75rkbj8RGWkCJWUMsgBTjacL7PP1hEqVbownuBGxJmtcVY9gzSc",
  "key39": "7E95My6vbxxbymxjgAbTmciBxGjD539vfohymraaqETJw4a67Bn2jFov5Npnv4wkqJHXmzu2TCvc9mdsK1fUPET",
  "key40": "2Kfm5qBNx8fLbS7mzBSL8Yr7h4osWTvt6pNvDTHZo4SqHgQKeGWBCrNjiCTK2ecQPrvuBY8SuvRJz97N2th8QjWe",
  "key41": "aJviA25tZgU4LBn5jD2PdTP4WUGcEbc81e7MD9r6PqhbByyJEn2uBJB2UsoRUMf3dRmVwWxNiDRGhkD6RxEKgog",
  "key42": "Wa5jMBBxx91aoJ8of4uNxpscWgoLDX4NfsFTugYGePmGwQNZs5bCkkA2Fig5egCmmko1PFvmhnPGtBL7EpvnG46"
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
