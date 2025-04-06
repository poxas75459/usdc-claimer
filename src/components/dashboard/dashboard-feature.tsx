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
    "PYMMuhZHYXc6adV7QZjB99uJTLbfrYp37zrGw3ovZuEPSGSveNmJwcLw7KJxzdSiTuD13hRpcqDJwQfXpbg5Jvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRMmjak3hhLW2ww5XU5yrRn5GLS8hZxYMhZfS9p6hv7dPLeaGsiJ7UkK97myt4d1gw72embvaZgwtn4yb9nnhCw",
  "key1": "osuN8sX15pwbBoZu2L3bbxNXGnozy2j7GL227aP9cX5ZzrEYLU3G814W4Jgf6giLkcVW34e51MkyyHXtvjZMD5d",
  "key2": "5QA4BSyG6vdQhfr1HnwqKAxShRwfNYHMso7o2jY755KjGxk3jMPdrTTBMTuiKJZWQS2pJVusxn58VxyL84gGprAv",
  "key3": "4f3mZG3EUSD56s4RsRWGBN2Ff26NwxdrUBpw88LXyFkaC3Tvm2LvirphLiTtkVxyMdi22HM2acYnwH97sGwy8Cjj",
  "key4": "4ripw6LfYaDPvXKf8F6wjq19YwUz4WVN6n2hLn4wpz7Umx6k5Bh9vY1DT9h3C3VPnmFxaxVJ6SuP8XETwpeqvt9H",
  "key5": "5hG631dDiQvyyBo9RdCqFrSpFjQSR3b9Nx4uhxZPDhkG9hwYzMHq9fgrSJuVkCuswFdnC3DzGtyZ6NSZvH6jj6Gu",
  "key6": "2hW5A5ukTJ12BrtfYTUGvnjRMx9wkf13Z6gEww7KdkRkgTwhuMEW6QYGdYzhhgU96Z2A9pJsguUCv6vHAnoYwv2R",
  "key7": "3KEwmxGmLrKG5oRjQsxVpdyH4754WyJEh5tGQEPMhoDi5o85RS9athviLXUqbiCsoeuFdpXMcFPEuV9fzBh1UZUo",
  "key8": "QZSbGpxc63ikEPSvuh6McVmotrHuXrLg5NxtEXA6W99mE4jqBGK4LsV7maSXcGGHYLfaLTpDmeaMmXZ9KuGrpTm",
  "key9": "2P6d666ZzP1bEA9kkXTsGzUkf4YsVmhPZ7mn7tETJsBDWB7cwdBECq3GHSrsD2Aqf89vircrNFgkGzGpH4yNWpma",
  "key10": "gVGNUwWK4fR2hF1zW3fR8YMciv8oiSbDvgJTDapUxDsAnzYPPsfNtevvnjK61ucmnEXVrB5ZEducjk4LCH9utzn",
  "key11": "3gQxcDc73tyEtegq6XNrXcf2M99ZpUNtYEM9VjKfRWhfj6dRMEAepa9WpVmh432NVh99MTPPtzKoicXbrxUTTdXr",
  "key12": "5UYbGc7wBk3LAvqLLyXmx9W1SDFvmxUgNbuWPL2HFPJhv11fBRZcAPTQJbVDsAR4k4sPCDun8qD3iNLAqsu3UKvg",
  "key13": "d1Q8TcfdyKTCfnjFFtfD8FvYUYxhY4fs1qpFjJVdeRcTau8Gx3puFtDgpbNikx7vaxQfKTqncYLUpgwkai3299u",
  "key14": "2inrM8mEQEaVzzcLjbFbSfMfQJLXFrPEN52G9BeXS1tBdCHQou3KdaW6LDbDcXraehyPKR2aFAPgR7jXU5V8YxdJ",
  "key15": "4LMT4skv98v4qCCuKVSkPvP94x55FHJqnHq13uQ6kRetsbDwGDScQTRwXHnywhae7F7qJbGVAM3cNcti4XrRimcE",
  "key16": "4w1EHtUhZ7fpzvb4NX8FG4kauaTH3p8vyXpAb45CYDnDfauZjsTJe6TNDhUBfdeztQfMwhdSQQxR1FXBoNPmJiZZ",
  "key17": "e8dqhoEHRFuc4v4s6xdETZuMAtqMhgFs2fR8x1cVapCtSdg6Y9QgqbhgL13M2YCn5grMzpv4yj8GrzNvhzcYRZ8",
  "key18": "4V2p6Pyh4Erz8pMKgmgCBoEEMqiTEUzA6ictkQQD16QdmC81LHYbhNg6s1MYhW2XEmDJCcnGD5kZ7d7gSJTG9ELH",
  "key19": "53QJNca33iEdrKApUo3MroUrmUW7DVyhxWiwTnUF8VDZvpwBG1cFXvKKv1YMUHPnyMmAV2XfMnvLVWVAUHdzyR75",
  "key20": "4Sd1pYXfEtUHKTbropfHpLht4S7jcubREFY293woCkicZ51r2We8GrZZFgZv635J62wr1b7o9ve4cyjiv7fsJTCV",
  "key21": "468aNXZSDGEFRCyFnL1Wc2qmtAYX98JD178gT1fV2c7PzJNdHb4XMtwxiE4ev2PomUavD1r9JNTSAVGh9BzL5yKb",
  "key22": "3fVoRXiMMqXA3yZ9HGHSXFSx5bDMSLL9eh18feVy6zS2rc7jCcDA5G4EuV3HUbRwjg2SJchaJ6cSLwJb3uhrdcv4",
  "key23": "2bgcyPuHoNxDcjx6ZPdGrjNqoRBqUem83AnEo7PaXWHzHqNCtGkkkZiSaWsPdxEvFPLSB5MUPu9tWAx7GaQ6H8xA",
  "key24": "pbk6Pk38RopEL4msCDY1MU1fLQMX1XGxuwqdPsCdfrMTF1WTULzpk9B6rTWce1uvo7As6DAWmy6n2QuEFFrA4cX",
  "key25": "tCSKFLG2rRkvRiMvTDPbeAaqbRQ3PcAyYGanFr1eYWytFKCcrZcKGas6hv7dvSNnVZPRbfa1qHYEiaBLmvEc6et",
  "key26": "3smJe9dYWCwoArpW4WsX91rZ2qVtCMr6f8TEZYxLMG1TFkNFWNuBacv7UfRnzQ29JaL37hrMTchLtcTvf7Q7MJcH",
  "key27": "ESU7xdw3P7Hpom3Cy49ba8mVeaJZ5kGYiXfFeSXy2tV6GPSuc5jV59k9hZSrGWn9rMjThZbRseajosXYLYyRMSL",
  "key28": "5rAJTwFsHD4GXQon6Z9fQEVixxCdEAFEqZLb1X3Bu2m1yhE8oq32zDKfvdVd2vYeDanbPzRbyrjpxJ9FSDS221Fo",
  "key29": "62CsPgSce7QJSeP9zTaQU3GVzw8u4P4pFVDyeT1BXRbRVrwBDLeYFgx3ffZoRNz9oYixAk4rGbca6TAiMcxXnnLx",
  "key30": "Bva8cyQHsk4pfJRTkaTNGY8Qt2SdNq2rivAzAqJ6iMn5Q9Fnpzb3h178TAPGddY1ZLQr5JxRWHFzfY53xdWTW7a",
  "key31": "gTScLcQ5tEbWnp22sEjKYHX2p29YW7WtmX4VHc7eBkAeRyJ5gs3XCFVoM9sUY1gu9pLPZe3UNkj9oPYmRY5We4T",
  "key32": "2aW1utbxLExroevY3vQ6K1uMZxyU2uNWDZg1nRytCi8F18J4C9XUAYfnPAUeqmQWdab2qLJdHqC7CYuqgeHBkuK6",
  "key33": "557tB4MYeUDi7uBn1fADEJn39B9ZDprHfVMevV4ENtid4ZXqyH322Fs447zmPcsU3LivYj1tMTBNZDnGf6FRR3gu",
  "key34": "4JNzxpFK9ZT41yh9ti27z9XyjnmMWpx6fU5pezDANrfKKb55v39kNSXBJn2dJwCiFLctsZx5sAGoT47ch18vy2q9",
  "key35": "4pkhjKyeGsAtdNJe1ya8QTgh9Dhj3WiVx2f4jSaubPwPubAvAUM7RHU1wmrrNprBhQGKchVCn72J87WzWsXJXjGg",
  "key36": "34TT3HPxgAgrX14oLMqj2fK7uL3isWZVAfM3fMxoPsUXzPoon4Tst11yK4YdhPEkmZQGDrcrocaiC2UqTCTXXAhf",
  "key37": "4LunZCzUzSKRmbMchPekJZq9hJHwFTMhVQPNeLhXZz6gnKBi4jMtmf2YmXPsF6FQoam4eHWPPRSA8rDtw1NZ8rHT",
  "key38": "5nnpVVmq8hvNcZZ7sNNZMPpaWMWjX14h9iYdh5EajwfPUkyLHKHEQ4Avo1kEwFcjXddfqY1iCAqmDsPmX6Fu3rsL",
  "key39": "2sNRKpsRGBFPhXfnGg9NoUBZbC97tcESqm4hXPqtcZL7dcVgHzmPqV37f2mroRuPt2Z2KnoRzmJuAGUKoJHiEiYm",
  "key40": "HoViNdMBJUetVB1BLdGY9a6LhBQWyYU284eR8wPxetVTeNRMpXCgeotUq2RiVUzaHDMsm1J9gvKbtQvA667RMsX",
  "key41": "dKE1huvAgfimsXTmmnf9K9cCmDV9HbTH64wzm3qMYA2uN2T1QSebaBMYCYTSkR2MjnddgHxYy9gcX2EeBcUQ1Nr",
  "key42": "5UWVi4phLfv7VejHzeQe3GnxwPSmX99zi9cmxXqNhGt1GE62QYt5YWxEh9beTv6CeQEofNBsUqKrhRntrvB4fGRs",
  "key43": "3G62cxomQzCV1yQoqsLd3J3jgYhAkhh4sWyAiSCkw23vJmtnxkL9zmh6t4h1bV7HaGQdMFHuNr1WPcGMjHtuqiH7",
  "key44": "58pqzHi6a26xi3Hmrs9oMybwp4vCcvgHen9JKUw7BWiFmEATEw6M3hmQJoTRYCsW2Ww7xLAsevMeTXX2iDAYRwVq",
  "key45": "671SXLYTbbLSJCfZr4vdM5dgENdt9zt3CHoi9EPCDGovGmWZEq6Q7xCpzsWYNMj4fEEy395vKEjkvFzsMD8RjZZ2",
  "key46": "4614HaNX7YA3out8SFrKV4ZArmKAYWChXHfpVt9SPhFAxrmaep9ppUpQD23eoHmtpy6f1azqUK4E3211U4CNa8ny"
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
