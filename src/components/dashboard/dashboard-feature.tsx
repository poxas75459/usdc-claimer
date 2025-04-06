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
    "5XqVUCPFkP3Py4vw4CBqxWaUkYrThXkPyZTuu6bBAE1k86mXaCz8n9EfLmzD2282ZaGovX8vqqpsB13nd9j5RmES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ye34cpPJ8AyTfb1bKzQt4zyGq4MS9M9tP2Fj9gHfZkjW3igESrFVn7RU94GpmEcmssRF4wSD2uV6CLbMa1rYGyc",
  "key1": "3LtiqTED6sCD84HH7NMd9EsGAjEKn6btAWupQg4mKJZmFM13hQiyg8tzrTWXNDB4bRXgoRiaiHNRaWRpPu2gvWtS",
  "key2": "2ef6smrjrwBBvfJDeiyr2KcCm8gVbmMgJcd28uVBmnqne89P7UVxsgASk9Qv3BFzUPD8Ye2XaojdmMZxTrz6pYi3",
  "key3": "gvARx54oyAnZJcKhzFCmMzFa5BV4Yv2srrB2W5H4Ka8qRWzS5ZMn6XJqqpLEGtvxubMaWa4rq3JpYEt9KcABpib",
  "key4": "5bLLTN7vC8XEZ255BPvLD3bYE6EkRrMwWar9AWTchVKCUVi7Ws4vaYBgRpv9cXyw5ewJMA34rREDdC2a3SGCbQKV",
  "key5": "2rN33Zf2YwxXoR8FVLaueUPXRXUeSCno8BGpvpUBd2784TbU1mbWKkAvfMmyK91FmpvXpcexzQ3Z7YBmcQUJSWWd",
  "key6": "qF9YZvAuqyhbFmKdErFYzZnPR6SPWLFkhcwiyZw1rGhaGzNDUZtzzRAeLYVQnpWNhayD1pG3aFyRawuMpGEdEMe",
  "key7": "2RQoUwygnr3QSprpRX4oiBHaP983jVH7z5wcEQkLkbzruuPhc9BRCmSLtnSQxadiS24QTNNfoh4n6sKp126WtTQv",
  "key8": "3tSXSxJCKGxyJ35KDEHJBPxkXYM5qNochyPo6upMnwLVvXEJKDKZr7o4s86UhG8wWyQtXxp2emeHDzuxmnYbeKUi",
  "key9": "2ckmWVWc1FVNQquWaTvn7MfhB1Dy7cXaCcf5vMteuicKbNwTi5peq2tuKe3PDRFjQF2SDk3FG7wtnx22Zf6BfJM7",
  "key10": "38Q13wEuTwc5mgtkQ3cTeSo5BbGaWaiQZioNZcAEVgWHemN6K3M2AhKRMJAcaRsCqgAyMjjZo87nmBy7krprPr9z",
  "key11": "2tmf5RGqfR1uE8nsMaV3Svv91g6jhNnCiLC6X5kHL8eShVb18zdBxe6h1F8ogXdoitBUQT4642DDdn16HJsBhivM",
  "key12": "3uiHhMsAz7EBLgFtQRrpPgUWM7Z138am6MWu4a5eNfDshPAzPM7DdXftSXbaijv73SA9nEVPVu5VjtJqpQrWo8N5",
  "key13": "3sASiVafFNwEeqVnGEDFfKASQb9RPmzT4KUZoTqHnK9CBVhAozMbnR63C45Lu8Sn8qVH3sUTp2WR9PVnMx91UPPr",
  "key14": "3ooQTpePwyMQLVKYWg8EyqDN381DnqWriDSMFGLRWSwSwNeJLJ6WgF1xQ11U6GnW1HiCYp34pWErkye7qFvcKAfq",
  "key15": "4zarD347TCXVh99zjEDXhUf1qZLL7jR6AbBvzYEuQcSqvm3NHMQzJhoLQqqsTzAPqmR1saHjAVKTBjcojGmNPvh3",
  "key16": "312t9o9teL63MrJfgCAVbFGGuvHqq9A5xRAppeVhLQ2mwS9dkVUbdX2pVhRVNGX5Sp4uDM91rm42vQZ3xYbxbHxE",
  "key17": "3Ey7riDEBCXK1kuiHzkgjNXYAH1bL1ds5cmG3x8Qqpoeqzk1oBneGzTvPdFwDQs9rL1zy9hdJvcVj6baNX9LcGFE",
  "key18": "75LhcV6fcrUSrmZq6krGS4KHm8hRQhPgZ8bDT51dVP83s3dLDaxwFVt9wWVVydbZnwcYjj5zEttXzVgq9pcqBwh",
  "key19": "5U2WS8XXCNo7nV4VCtKFNtG5CJbC54iBW437JLTSpC2LDeEegTzgePxUJaMuZ7KR91QmZxhVMKdZ8WKmKKthW7hJ",
  "key20": "57531ZS1GCrb3SgpJs7Dfszp631tAxawCSBMVdgFayvNpCMYVFDDU8Mm3pDXw6QyF9TxGJNApzWK2pstxnJg8S2b",
  "key21": "muzqbJbHXjBFNN5do3DnpbYn8gR25fKRG959qjrBSSSHVY7RhTVASiCtQDtN6drVr8thbPkrQndE63o9NC2tQjQ",
  "key22": "5ctVvEKYFjF7yigyH2pWpA6JcruscNAyd1Be8VwfWa3qfWeHQtSpbZYU9stfvaHY3BFZjRAhP4BfbwEpgQiD5TvJ",
  "key23": "57f8nvhoTk88ZoHkV4zmQovYJhRrADqJFsvVzR38oFFVqrDDpeo1VUMTbgNTJfzcfWDCTZkJPECLyj1YVARCmpgG",
  "key24": "2zcDHwpEFEVvGDvcEd2SWc9Ud89oWwxmk8qSKsV3S3gUYgsoccWi1i8heB4xd8nDDATTQXguzb1hU6VU4D3ozUDQ",
  "key25": "4DP1eFT3g2zJc3pPmm5urRXbYKpswshHs3Ecffv4cRs7PbjF4x2LJrenfNSRreN2FYPBXWX6hNcYUbBgqYaK7WzN",
  "key26": "2e6pFLGQe8CCXioU4cqMzvENcyDwhBxQYDC2EfDLgEZbZ6E6kfzBu8C26A5osEqknGz2h2DtY5AWu7Ub8EL9TukB",
  "key27": "5nAfERKsNTjNTcSELPoUhetoR82ZyH7boSCRnxSRJbF6wd9J8jgLmnae1BFY8v7GUGmucoCvGfsMsa16QNqfL971",
  "key28": "4amiC1E6nNvmYXu1dscSzyXSwZpXBJpucWEe8Kx57JpdKZpDPCwLQe9hVuSzbRXTDcX6nS3uFANGyYotZWW6PQc",
  "key29": "434mfyZMzT6MF3P1pRG7bLdGURmjqi7aHKuKAQBy9yrJKykz68bC7iZWuRDbkUMsWVeEUPP6BF1VZe9DPaA95BtZ",
  "key30": "4kFzbiE4QMtEDfECFoG64bFdcYsyDt2uWhRETgcmwxhwk64Z6CsYrDZJjVLnh1Goz78qievMZeBddevnq6aZufTs",
  "key31": "58nETpCcLBwx65JdmVFMWAH7atnAY9UVkLAtMRCMcHgY5fRM9zNSuj7aftuoBy6Mr8La9WNSMsBZ6GqVtfdtemyx",
  "key32": "3LXz46gWr32EXQf3sJKAJuinDj1mWccDwBCsnoinHNJA9QPF7B7QrEeTU9wLEjYonjTeUhWokc4Tw3p5msSjjPKb",
  "key33": "2mC4VbwBBDoi8ZZrY2RGwS3gncGQkr53iJZTprSM4wgNPqetq7LoACigR3k5A8W14f6g624coWfRms1HQoCESpER",
  "key34": "4reFvwC129MhLq2meoQXD6cboXaiJouKR4BoY1N7x4oFyfjMKRTD64LuAYNG8ffxkabn6dKH2EBXFkLdCerwUhXp",
  "key35": "2PCmcAhubCjaUrydcumWALgit9k8KFRjn8eKYMSKSPLkbDxjEEaPvomPs76gdEDx2V9USq3qymbUmkzmQYwk6fuT",
  "key36": "2EGACPbvchMe7WngXbwDMLHWcKGsbnNujVgxUwTUZX5QfdZpt2D95Q8V1uu4QF2ajWA1HZASLqwJ2dWFpqhAodMe",
  "key37": "oDosoetiWkFomf9M2dKPtzEqU3vy2H5biFmvbUfGbfnoYbbs612kG4pGbZvjEXHeJJCrMAqRuaUNrzXZU1NAwHk",
  "key38": "52LRBohQsmtcFSThsdqU6zDhceWjkbRGreCmC6ZUGM9iJWMRTMi5TrarMUy6yUCiee5cobnrqG6o6PaqfHr8JDWb"
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
