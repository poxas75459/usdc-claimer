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
    "63NcNY5cCqiqbPotjvgakuXqn76Z4A4ZXwWEXzEDitoKHcRNYzc3VgKifqEpF92x8ziGvhXE5nu8D2M7huUiqbPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xe4aCdZaMnyNHSTTdmssJgvz4KXpBs2jhJm4nri8a7Eu61htCjTeoKt13CgGf8RdFrYNUrdLMWydTTxTREV6GFa",
  "key1": "3FiiJ5WNPRDVRKMhrFDXB4G3oWxi6Pafug43zQYgZAEqqQhZ1XKKiMoz7PPAwPETSpb9Nm5dcyCpR8BGU5MXBaR2",
  "key2": "3mvJroumcM88iACvWBRWXtXxz79vLwsjwwFX1CiDpep1qMtZ7bvWbPDtSerG6DCAvBCJuLtADT6zhThVZSzAKTqn",
  "key3": "3oi5fqqHLvnnWwdLx6h5wshRD2GHaQmFJ7zPqeEbo59s9F4s2wn5HYZ968h8pGWfNdCiviyFmHuLLWkUZEKq5wJH",
  "key4": "3mCt9QAUe4JF2jgbCCvU1LrkSjxn6r8z5SamH15zZBaeZ4pfdCK21VhYezZrYPci9ABwBsVEBSkjfx6xckNK7isV",
  "key5": "383qY4JB2SUfYtU49TgvNTtm6EDBF1Fagk6ZhB8ufSDb6hQ9GnAqq8B8mxCH2fcqLxr6w9LXPtDm1U2cxuAFq2wD",
  "key6": "Nwgmjj1kBHKLAoWjbo5DdAydvxuD1wjJU926qaWFjcm69NPkADFHFNLGWxQFKbsL5Ei9wP47a3GRBqXgDKv1cfL",
  "key7": "4TfVwhT9aZ4G1eLpugZencjPHNpDyv1A6D8duaoX6hthjTobC2jWN6KEik5xZBHzwpBBZSSYdYQ8XeJbHWDXJv4H",
  "key8": "2QwLEYfSXD5f59v1wD26oLKBpNzSGbiCfD2yewNc2qpymD72SSLKP2sySUveBuWwpyHP2Rw9imtm6Geah11igK8R",
  "key9": "TyT3HcMnYLD6VN5eBhLbwqiRNL2KTcguC3KE6RLUR8L1LZVXwHmHxZtrEfSDqoSA7du6jzBGnNoUe3BDsEFxpny",
  "key10": "43Q7vhE3tucPcuQwjCC8uYJGPo6JCBu6EG3DmR1sKeLQRcN5VgYgAKF6Uq9HLaFqfzreR4mXPtfMQUZ3Sw8DL2T6",
  "key11": "3Ng6XRwipuUtqaUnYw6bwXKbp2SAFJCwbtx68dcq11jRR7ieMmX9P8ia4gJttY5wBsdBuWJdtvfP6xLSAfHRQ8A7",
  "key12": "3vM3bPWhnCGyXSC3QRivFySsnAvrK9EtEjKDQcStMMGa4b85vpKHHB7rQQwjvZPyXWZX3oXbzuzRijkyKmVmU16i",
  "key13": "61shA9N6ydPna7cRk2kpLkhoKG7y7k8LQcXEwn5rPH9SGFCmMUrRqvUL1bZ66ZwEcvjt9jocsmwfMpmwUSwbPKpY",
  "key14": "g5J2GE159ahoPivd6XMu4phuH8qWTpBrm1HmQbX6qbDtgrvEibjmWi2m1ZTBXPrd2Cvg2ZxpacDHHWfQZps68fN",
  "key15": "4N1FNiqT6WesjsA5iFY9sudKBxupdd4wAe5sKmAM8Ng7BFgomXk5uqXsJUuNq8aMTKam4SQC92aPbeHnPc67s8FU",
  "key16": "2A7EPVHEJTHKcUnmsaPcqKTKC7wP17YkSxY3Fb4SqVkSaKugP8HHDtb6hYeQCBJ74n3N2pLx5yhRrQrkwp5TQVmN",
  "key17": "2s8iySSXUsJdb2f44fYV5fTYnMsc5FT5eXv1AKnDMtccjhQaszoXvWL4bEnZnBWQBYKy5eJ9AwXgo4oR6KEYTdTc",
  "key18": "4j2JTZurRmMxcKrs8Vm53q8VBSSAStcSC5kHcimgHqVg22HJpPjzR7BFr9McFuCd1eiq3hWnfGg9dLN77NHvXYVW",
  "key19": "4Hv44PHpgqPbJXZ2xghdpbtZB6z7jeNcpn1wXTg9VpRnzmZ1x8dSEjQELf1C5TspJe5FQHLweQMfSwzcLfoaHVG9",
  "key20": "2sEqoH25BK9tARw87kBwkacZMWrySFfNJNbbf9v6PCpKutTZBzvz5kQvoDVEA9LEzkUepHcK7MnFFYX6oNDKjqNW",
  "key21": "3MJE7DmgoQ6dSUS486W46whqojM5PnLwzSTG8ThNfywUf8aTUCf2F8oia5H53Fyjt34FikfJzyKJkg9QgTGzvjyj",
  "key22": "5CVn4HSvkiXtD8R1TofKnu5FAaaPAQ4B5uTBsbUTh6caFup5c4K6z8zENNgoFLkP7DbXPETEixzyzFiSLyhhvhcZ",
  "key23": "2n4trgaCvzuZhT3D6znKZwTnKhScFE5n8hCR1Pye6UNYFNBYPrJdTfGFfEijJyAVwrcnqYfQXohoMRkYJziaetU2",
  "key24": "22Wdbiud793g53Hpk9SjTEcR5DX44S1mXd1WJrTkd2hSaXihG2n1xuKJ9w9Y8rdWP5qe1YnxMg6N3CveQ9mtc1Wp",
  "key25": "5NAPUKsAugUmS3gX8Z2jBbQ9CaScXdAkUTjbjcbLNkYrSYi89f7tQB42EaMXKuSYht57JSZ894xiKvcr7x8kSL7E",
  "key26": "3Wbo5LMFKwfuBWM1jZ9w5kvhcS5RFKnDWoQZdgLCixEbCh2rYR1oACuWFZpi3MfMo1Z319h3zKh8qGyheASBBEB6",
  "key27": "5o84RFQ5ZTiW2JRWAhNH7DvqCcucWJ8byKjXxFtG3X3cjSktqxGZ18xgvgvHNwe72AM9hetisYVsQ5584s5JotJ6",
  "key28": "BQ2AcvkBYFseFfL3aEEH8Z6FgGYa8XmYWuAV9EFwa2bnCMqZojttB7YDhuRiVh3qJ854mYBg2AY2k5LWbxKtUqV",
  "key29": "4Xq4dm4gzfN1R42gx7kUqsMwKEMZFkxxGo2ixwvMZEoxn9hL2gXzgxsQ6o1FyKd2rDgBcZHbz2QUsVL7PVSeiLyA",
  "key30": "RivsQyxL3M1zcsSKraFzG6zSQx8XtgnddtWEc6oY5RY7PuXNSAKQgem2xkUMyonr9HUQfGa4y5ocDuxFPNmeZR4",
  "key31": "o441xg7rCmgXvHRA6iFhkaWdTR2ibe6vQxVzRVNfMgTKjJLPfAmibZPqK7Dj6VyvqExGSRjN9PDDwaPkuQ5qZpq",
  "key32": "4rfPmzF1NFePzputsSh62csqwMBqRxNuuJcWzib822CVZXPdf2RX6LdGxbB4fqWGgdMWSVo3uhguxWm9QbTbsU3H",
  "key33": "5mGCGKAxk2KsN8LVvNmjX45p7w2NiQMEqJ3NNKMeUiD6boMFGHFTSboA6UmTyaPvtQcVXehzpRgZqv7jeTKep4W6",
  "key34": "59cjNgSejRKYacqEP6P8MSp7R8GCnGip8HtHqyfcNvbv9b4nx7Y8syMaFt3zL52YqMhopEJXzh8xxAQCVBnxqRuN",
  "key35": "5fH5YyXQnxAorbmqm3j3iyWN3HAD8CkUpVnzLezoYDwMNK6Yk7c2fBZ2G8FDJ8gRrHno4UbxJ5aBK7QMrmHWrim4",
  "key36": "CU4LXYfLKX38P7ywQC4AdxNzhXH8grwnpByyaWoYNZFfmReqCXBWXC3SU684G9GZPcWPg9x9zJENs3fWDFa9Brk",
  "key37": "2fuKnoRHAG3AVoQBYrWW8o7s6QPKLaj5xQuFGGYJxWcKXrmhYKPebXcznvPPVT6kWnh7u4jBYb9xqn4rSB67hXqH",
  "key38": "5siwN6RMM1sYdEZ1V9Ek2K94TZePqsdC2tpxr6hAJpcu7xogdRdu5T1tfSntDwCd9t6mJWuA6jx2sUhRFmAdT1Wk",
  "key39": "1gztPUrpnqrxWQjGiVtcooHhgmFvyHPxFLUXqActFyFm9h3yHydguqbHmvgQHMkMYR6cPrkP7WWLj6E4QQSv5hL",
  "key40": "4Lbhhkchiy9pYNdwpDTkq8tYEKDEkrVo45Yb7CCUuoc6tAfXycEogemsznj1AvfQsZRDwfFtJBsnJM1Ws3H8qmQs",
  "key41": "FaPNr7S1KE6bS8jMMv7SeB15Srx4HA1iZfSeypfxwFtHqvPT8p45afpSjKxCpMw4cJneEGtNk2aHqPkUeJNtTep",
  "key42": "3Npis3eQXigLA5B8EfdD35m45MKYMa5dKNH5Be9gqnTwECAnpYkehwYxbQ7c7jbVZZk3JNsTQgivjFkbbfw5ogt6",
  "key43": "2BTCmnT19JZMATVHfUdA2QWErpvReLmBqW6tQRySsjpfuJmFfNXbU17KLaoJuRorayAgi8L3Y3r5ibmRFdTKbpF9",
  "key44": "5hisEDmAhPQr8yLNjRf9fUuBrFqrqYKf1uNaJBMw83voNWxHjJpkotWVBijw43mJFw3f9RfNbyZ91pzS6SHo3ou3",
  "key45": "3QEbo866PrqoSekbf9fbJNzzPSa16abTtjzpnkGbnX5qSGyr9AXq1X6XLovKqV7bNCd4wa3K6GZczrKgcfBQX9mV",
  "key46": "2uDf9hQwhedhJSzzSxQrm3t4A3TAp6q2iqhrYgRmq3vCuVNXaa7iTTAU5Cps6X8ZgTSiNTURAfzJCivNovLU4nKh",
  "key47": "2DtWNyT1ZqPHh9iieLpZBLoRNFYJPnLAQHtJg2yfveNEb4YmqhDV3r5xg1a5RuEFY2NuGM4YjUpHEzppP6FMiqY7"
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
