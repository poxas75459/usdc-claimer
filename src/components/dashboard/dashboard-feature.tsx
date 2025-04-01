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
    "5qaSR6x44AvPwp2Gyyb6cMqbLAuRm7VZZaDQ37R6k9EsmLwq6oxNVFH4A24VfLBoTbsqowq3dpv3PpYu6EQUe5qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59bPDB7tLc37x85MXCNUEf5bTVP9Mov12LN84MzQfcch2oGoNuwqrxG9fBBqmLgCdX9voaAkLc4b2RVNsJZvz1P6",
  "key1": "3tCQht6y5ZHYWeZtXNMRbqDj4sw1TfkQ3om5JdJWRqEqijjo6EoXGP4imR9YfPK4xVYAbQoKT7ivJPnfCBv3W86",
  "key2": "2TJyi6Y38xqsF84123VgzYau3sFiPhayCs842yW2crzNeJ8zV8NJc1q9ZVks98ENyepzrccfrPxCg82vbL9zJQyx",
  "key3": "5TuKTTGKjqVqXHzrd3upwQawweuyJxJrYJozZ3hynkb87ZN2RyjHrPngcBQHmW5shRCHZgD4bDwvNms3ThLoHvsF",
  "key4": "4fRsTHENWZLRWjMtX88Re7F2PbmzSUkWSRYgBb39XLETbh39JrNsn23UHrm9u5jQRu2b2MPy8b8VvQKYXiFHkgUS",
  "key5": "2bHJaMgxAszYWbH6akA5GtG24hkEv1T9fgGguSHLenhTaiaSm6yRcDcFTR7VRj5PcQApDWiqPkVXMqWF8aujdSVy",
  "key6": "2ABw7WMU2DgW7n3FK3PpwjHkge5GKFQSBB1kbBhZvC9NtfTLU5XnJzM5MEwHrxSZiK12869hN2y98ZrZq8wJMTAH",
  "key7": "3hT63N5FnGnGvuhABB2KtEiMgEjaZFJiDX2W7ttAG4CnZ22HbWAwRBKZf8oRcWvczcmGzaXBNvBA3Ui2EfEKjEbj",
  "key8": "4HhxPSUVJ3LH4MopbwAAdLtevTvZpEW5MpM1oQqqzBF7AK9UHuauQLS7WwGWocAiP4RBtBKZejcJpq1fqMCvJS2N",
  "key9": "FRW14DzHrTpwhAsEeXMUzXpepqGYToPNcZa4ye7BMyEUm7mEqv4Q1ziG76P45r7BSjf6kRMmWnCie2VwgWbLgZV",
  "key10": "4coAStttn5EXZHjnxdPn1c6oQyS4Z9MgDeCgKjCgxPQNVMXr9BD8x4rPmZJa86NKsctPzYzJQ72ZuTXpT5LshJ3u",
  "key11": "27Ej1mHMqNkivsbQA3TqF6ZkgU2MtFmm9hP59DMBgigEqiveSqe14z91u6dwFXXqTQoxon3fZJKrZuZa8Q4deZvg",
  "key12": "2N6fYcHkm6b6GUratDJ1iPu3PRPYXfDnKT8cvFYE1SPiwbWuujmbfubJxiMera3qBQrpS8PLnZyWGHMbWrRE63GT",
  "key13": "5bSHbCqk8ozE1JZoatSBfKcA8aBbKSyL66mcRMvRL7ZHdGNmn1hKhj8umiRWRRDvHzjP5DeKoebtBRx54X3PVXVX",
  "key14": "2GssZGDzSZPR9jhcHkD2XwUvpTuVqLZeV9jQT8yU9NSFHPF6fvH6xuJR6u17RnL87vFQubciaaZ734psdmVVQPBX",
  "key15": "2chwD3R8Z6jzgWW3DS7u2q1rG7xKXdrxZEhGZStyVGhLWVyKEzZTsV92UabTiryPZG1qpctkwAvxUNFGT4TFG14b",
  "key16": "5U54eGRqWJ7zhqMYKA3bYoToxGFKKDVM8DAppVaZqS9LpmXc6r3SFsF713RDJu49yTJ6t8Aa7LUgp1SSbxPLSgXA",
  "key17": "hvFzNtbrLs6gTBgpJorXcbtRsikd5F7tUmd5VQoonc67vUL37CrMri8nbz9HUcKPpkFKsdQKWWazKPbDx3RikU6",
  "key18": "cayoiGFdWpwGQihPEg542V6Xbmw1mYX28Thtx9TwRcddbaej8XtXNgNSMmGLBcmFcLo1QG1ndEDxzivVTG41Ap4",
  "key19": "5FTv4pQN3H7j3LiKaVav1X3Ly9BpiJsN18Bpn6CkkG9dYDtSWz4bGB21An7ZnME6erJLCUK2D2r5tuws1mUPCriW",
  "key20": "5cUzhMCAcii13b9PP1YV4AjaHm9xJvheXaN9hVx8yoyFKftt281N4jjsag3QDor1sibzhftz5MvTX4NvRiArsS2b",
  "key21": "4ANvPbpYytPnuem1bhLB5KbrXvUvmS3GLxPBf9DbopBC1tyas5FhjuPSCL3y9nXBhGUcocWT6L9oGtG4srMZqRBp",
  "key22": "3qSNpFsXEUpvK1fbb8xvzq8Bz5FBHZycVs4qWiP5YDdaDbM5TxBywVEZZgKMb6CMeoxFqXQjRedAzWVUD8wmZRRS",
  "key23": "3LMLDKuXthJuP7JeCf8qBpL3KABFHU9o9jTYAkh7CAmDRzGGw2fdJze1qMuENyq3eYoSYALr8EaSNxRdZ3fEP3BC",
  "key24": "2pw1esPBtbjM5UCdBbotAz2vrr3bbiojWs1nuyuEVWnVPi2RYtfZgddS4AcfubXjWaQ2t3V6UsrYGCDfNzNDoUkv",
  "key25": "3HQ2icUTCUZynhJjTd3viwZHUPsq89pDKw8YjsueB4k5GJVJeD8tKXC15zHtuDras8TyJ7XyX2ZH3yqfGR49ipSe",
  "key26": "yWGMuDhCRDJCdmdSzhL4e17fVYfKXxU5SmkSPYgBCvXci2htiFJ1eLPQts8HKndPPXceTBZc1ihbG47vVkev6q6",
  "key27": "4mFPvAtAnmAVVZ8s5N2UEd6ox7SMqtjyBSk23U47fUCvivCVRUTjgqJXh7Cqo5usYsVCfa3EKVdJRQsywEzQX9Gm",
  "key28": "FtKUX97gw6rabphWt5h7x57PGDsrZYidPh78FngRLEDSnMR55V92w7WDyb9o9tDGdyNoaemhqUDp8HDZMin42RL",
  "key29": "2BaymYACmcSerSjh8nqUSKUYKgNgpNMDCcJpAQuXeQfNR9Y4vrCWZK2KVbCsFkSUjeSN96MPr13PS2XoqYJCHt4u",
  "key30": "Q8qm1Ji6NmrC8w8ArCKWkVX4xStoD55QVuns6r2DfdZQ4kdcaiNzzSDEmkC151zK8TQebHxMP9beKSJPc8tspxn",
  "key31": "4cimCsev8pvQctnUkrj8AaExHoK5G3XtnPuocmwYNij3i5x7js1jCHLBxfLynGhfVcwRnmsoZMJPB9hrQgaXeqMf",
  "key32": "4zf3yb4p9Vh71QZm9Pw4emnnHx7Qtd3uwpBVKhV7ETprEu8nFFTrSJ2fNFYCotgpcunUWCyUxMUVDw88WRXHMWbs",
  "key33": "3px8hJuW9dUhzcCHMWyc88GrKv7jV4Grrkgc3hfUpqCiB4Pt3HNGwR5eMjwo3nfAVZh8T3S65aJqzGhTZgVnFepv",
  "key34": "o4WRYUU3bcyTQuz51sQPkrcb9X9EmGuextfMTxW7gdML53eeZMMwhGn2JjfCWWcxnCeYqWSE461SWVwA8nYDpxM",
  "key35": "1yzeK1PcoQVDndE6TRVSf8H4EP93kD4VysSRLD6BZApBkkfuEf7JKwEEF19cjaLYqTbfntXodkTRsZ3EV2vrA4G",
  "key36": "5VSTN4drmZQqQBp7PyLREMhCrF1ZCNmHjqa8Ekj3bjM78ivsKVKre5Tn6vWBzebYNV3goYb6EDxdzpU9ByyR9xWd",
  "key37": "5y6bQ9kkbr4CUdwwMYbTTF5kSeYHLscbeFk9bxsSJDBgjgNHgTQNcB8whUgmGD8ua8teosbS2mKFZ7mC876FB3J4",
  "key38": "622T8gNdQyGPTu6L5UHZbipRtJf4ndAovNuiyQeNnvEQZWFD77MUPm2CsFygX4MnoMNLBvbn8Sd5zNmWJmBTekdF",
  "key39": "2SfeFgL67zsRam2cXXJzh8eAP7WMg4B5DUQSXxG6GL7FKmnWoq3nPdDtLQc5oy8HZeiQbP79Me3979JKcZyw62Ep",
  "key40": "J96VafrtBKWVjVQKDpYR94qBtXJ1HeFeccz6HyScQRVstMiPva6ktMtYrkiBpgDV1EXxXSZBXBjGdQvojBtQBas",
  "key41": "3CbELucruUq8UPFBwnrQPAE8wxSHMq1pBcrADeb255RR2qRbupHGEA9FFpNRd45U5ocKbQjQFGWcjuFFpt5352Ut",
  "key42": "4ib5nUuxPyqLkSCvQqWskC2KU2cSeERgMuyn8Ps1gtj4xvZEw7285jtDz2Lan85qjC93tNtdDXRwyMvWXA42gmB",
  "key43": "4BS8bmRwD9LCgbeqDXJwbgJfLYrXZYMZJKoLCWee2PNLbTRLB3rNsGfgM139De9eFVpzcWu7WjhhujCMbrrex3Pc",
  "key44": "4cQ3a98QK24TrP5gafEy6ttait9QU4LpAYibKe8EiDEBCTuRAJGWKE5fMSCL83qiq6NQJ6RKvTzeJk1DxdoPdrpQ"
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
