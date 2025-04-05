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
    "4ukxL3xzF5enCXNomafeaTd22nJkqnHwypcCyexEmTeV9AZeJD1DHnZp7LqDUNWUH4WqcX8MNJF9FDNSXqFhRz5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LxcnTBGugie3TfP5zjM9W42mw9fxvvpR5dBVuRsoKqt5FW4m75ZwpXhJFG7TN3KSAzS3ECfijmkH4f2xzQWNP6u",
  "key1": "2td4pxcttw28oDLYcepP2fTgLhueLAoWoqw4j7zNft2qaoqEQuSUAK4kjoZhJLaTfapRmUN4ZbKx46ZfcCv3aNkb",
  "key2": "qoaChGrjmJpvzdLaLLZnfggfyLe3kjRWsfpNSuamZf3rbDrdDGNsHZoSQaxKXStyMByQ4HzYjsFaArhCj6NQgP8",
  "key3": "44szJK4DeJ2crGGKkboWQB79oWGkYG3wTu4433fcMjKZzyWh3CaUeaopZt43DuMau7UidBbY95zsBhUmSitCC7U3",
  "key4": "5gK1QhwAphrVxMXnfhwMG6Cpj8Np8tLQMBaA4L7ydeskJ4sj4m5HdKdZBUNq2SL7c9L9ZcEcPgCLNJ2nPqDvcudc",
  "key5": "3zrodzQJj4kRKkYwPAq6d8UiCac5nV7Cr5V5a6iMk4TGdRd1YCPWBeH45zmDbdibxNpe2GFqWRx5yaD67h1HEsQD",
  "key6": "5ZZVsRrc7vdJzGZcnLaApFfWseyKDUHHYvwpYaPggySkDJWBzi77bjLm36D9jfTuBkzXpCHNzd95MPiy4Z7g46NM",
  "key7": "2wku3osxFh1b5QaVaQmpYHrRKLZeF84T1bDETJ6PNuC1QF7sEZE9NWTkNTMvkRMntpzNKMXdkvZ7MjmZjpRoDDqF",
  "key8": "5ra1MdW7YtNY1vvwNQ61hNLL2AbDbSzmFcMeDU6qcfaaMQMzrooEXsYzmh5WN92H7CvA1W1LfqVTC2HLu6muhNgv",
  "key9": "4upjB6VAHHuSDfSUm6sYW6CzMtKbDTxRxFukXDKYQ7Qw2Jfo44CgQchB9R5bq7CLSosY6dqDgGcuppctfxeWyg6o",
  "key10": "4JqY28Jn1FU59k8t9Rk4V1MEb8xi63tarJwkW4opnSLNBtqEpyamKZPZaCoorH8kZqUiitZnoQGCNwL86tyyPtxS",
  "key11": "5TJmYz3k1Y1Aqxy8k1AMCYDK4hBPSBE1D4ymSCU1JsgFKEvCHtpDdJ92pe2GDyP6vgaxh9ofXugzHKiTyUyvBF8q",
  "key12": "52vqoRgfnAdS8AC2Trr6SMYDHHd8twiqYiFCNG8d79xdwhUBk6RdGYv49yzW8dCLPUK9YLSoZfhGe9hcNDZMteAG",
  "key13": "nqzrMrZtPr9cuyWpoU4Mmcevuknvcwg1kRcsLbYX8AhRBoGSFpwkFUSHSZfGkX9KxxDxpA2b9ZhDVH6haXTSx5J",
  "key14": "2H833AzMzwMnZmBDg55KS2SsP3P9AfKjJ6ZzjW4P4i8vdF6ke6B6LJS5dsjxcf87Asq9f1e6CEtgKYkrHjAoDSMr",
  "key15": "2spdgyj4tvHDzXdsvvvjRu9ueKmiCuXpDeiAWWPvQHLTUnnziPmq3G3pXW84N17vMDyuSu5wUf75v3vaEDRrsrzi",
  "key16": "3SFPiFmFTUxXox5etaqDZ3m7yD2ENyXAbDvwJz7BcqQmKnvLMna4mCzuknhCHkRyYCyK3ucY3L837uicV5S8LWoR",
  "key17": "2quxkbBi76CpeZrTXo5DsDp3vi3A36yKW7FrBWoVCQHEBSHhfGjYPdEvnwXCKN9mNQNP8ewxafx8kV9sbWtVuDd",
  "key18": "663SGKbvn2QbKKvxNebDGEu9Vv22ZnMkVVd3JVTDrfEckLnpYW74HpokZX1TP1HRafrtDxQkFg4WzYKu18TTRfbV",
  "key19": "4Q5e2LMEfym9jFXBJti2v7cX64ZP9Bo9ukGiawjJvSJgM5iBtNF8GM6EEg2MBttp5zQZeHv5C9822KPxRXdqGH3H",
  "key20": "2CVb6xicrNiSkvWDRrhhwtHMWMzmKro5eknpTty8EScbW1ibMypG7XTfJMQkvkS6Y98Qs1dEPuiQZwnbFX6KYz4i",
  "key21": "4Qgv668ZEifGAdxEprvh66L4HNk68Hz678BPLvq3yaMgDLp6XWBMUnHEW1CMV7mwusDpKz4mB6ZPJtNarXAGnV2H",
  "key22": "5i5HCSYjxxkemhWtpNj4KxnWq8hJP8EfT4gKvvxvvA34Wh8baNe2FqEzrvFCNRyuknfcma27w2duKxEf3KDc7Ayw",
  "key23": "5erw4zVMePuQkormuS8bWaLmkYwBhfjs8uN3bdS19iAwFfZ5x6mGVeEJzHuFYE587dpF5Rx82KxUWdREMLcdnhAn",
  "key24": "45Katrh2UaZZmrLMceufqpQZ69HquqrQkTXnuUaAbTkZUrWNSyKxAYbxVxhYVmAEJ8QNfgSFuifP8xH8GtsrWCku",
  "key25": "5yWtuCoeyiw56x1pujPqCWtyJW7tcxqdSZk3W8FnnMk5Yb88Gc6Y7BoKGwBjMskNsU7zsDU34V51aq1VyQRjWeFP",
  "key26": "4tffwnH3MJbY7iLopSRSS7S7n26GsUJSaQAG4rWXpjNcNt2trLCApE5y9D19fEFVH7S2domJVfEStHvRHkomJ8v",
  "key27": "8EyT3m3MScYPwhB7uRL4yFRK2KB7gHVxF77um1Xuk6dsAT8LgPeK8CaQzHoWdtC7qhqxNhXXr5RYx5MEgu96hMp",
  "key28": "2GBfMdf7f3jPEfeQkFabFeQvucbHAXCYg4oGriqm59WGyeeufLPb5ojNunE6g3idJvNk7T4M52rNe9cQ1UTWBDhQ",
  "key29": "2ZJsqPTtr5pyHdFyJ28NcgPcXUXuhg23kNbfJjNeK3cnmmMQNe7neBHW8Cnww8NUZ9TXczHvjaiw6JrfLe7NRsde",
  "key30": "Xvnv3RKYEuGBNPsavW6sSrickt7utXYGb7DsUsTAERMawXL3BQoCdbeb7gq7qK2ekEdU7Tohkg1EELZ6CaKPRC1",
  "key31": "3QXfPt422fcN9gHZ8zxEcj8jJL7rqusWcNXtn68bcbNxBQH2eava8QDbgtixJV227hPGAqkEp4XDdnxMauJjeu5S",
  "key32": "2HoZbEV2JvABVgLPoSBf1uDw6u8VC1VYK2UizKGa7MzLE5ZnrjCZaZBHAkiv88diaF8mq5yx2UpotzpQsBrM6hi2",
  "key33": "58ccs1kteinxEfEKGvPjGESYHG3f811zgJxZXgJuAmqtXNedJ6RV4QGsJKQ2uS946MS8uZuxiZBXMZvx9RHWJq7v",
  "key34": "3EJM4xGwLYweAoj5yWUhydQJMAFGAB9P6zzUnKQG2Q4yMhDmUABsdL6Z9KG3dspGwADgg45915sfARXTVEJQMdim",
  "key35": "HiJcCCQ4dJEC3YLXqb8zAGJPgPejHcTePEZxuqQoGX7oAmvnHmXnracrmQVaQVpf9v2rgDakpv6JSzPac9zaTvd",
  "key36": "2WFJd8GpntUVyh7H3U6jJgrHdPtc9ZrPfs1q8DBmPMsdghj86awcEgG9XWmr1ZaSgDnSxXty5KFUsd9vYcsJKfDK",
  "key37": "5PX78Wxa3N5FJ3aGBSp6TiQkpB5oZj1cGJUJgFWQqiDwvp1kiNL2mA4dEJ3EK3z6YJazXBoEfQtWowqnfXsU1Act",
  "key38": "31ni2EHqLj57kYtePmcABLxfk1yNEEumXxR8WDVLXMpQ7N6iUMiiH7X8xocFZaUR2gXpRZ3sEmvMeFzxddSuNzXh",
  "key39": "Lwkv4Pj75kAeEsvLBvdUXRjwfbU6busMni3mg4AeaLZhmSUHWbbRonP6yJ4D6dtQxtj2WyTZguj3jUGjiHNnuyx",
  "key40": "2WZhKPj8JxhJZe6ouAivqiZdqyhN7CztA38msRFNSHkqjN72sJhiu3nJWqvhBrrjpFhFvkrCcECRJBu3yE3o5zXh",
  "key41": "53XHb5rjAWBURNexNLSFGX7ZRhxexZZxUDQHY5RwbmrdEJpxc3UPtpwgMCJaviQEMWeYtZszSXaN1VndVShXFAiF",
  "key42": "4ptgNqDsQzkhhZxsd1dFHYCv2js9AGZahgAzMRQZbgnhiCApnYxfVSSefebKvQ1uFBSK3SGpgHkdGeZ8DyAYECDt"
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
