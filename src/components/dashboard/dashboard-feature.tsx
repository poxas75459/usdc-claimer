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
    "2tzvskfTstJtEoa6yqe7oeQab2Whu5LHgabtEfY7zqiwEpyXThzaEzaH37hfVwZrSURb2dYm6rEBFJ8g6Hcfaxvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEqXaB4sPLGFhBCGqZrdvroHkMytDbYoHhumzbSGNVSYxRdzTHtUZzLGq7aknWgWPwLDkDzVk7Sn11Rb3jiCAcF",
  "key1": "64zAn9kQupAivk2X2Ey8bz2J6UhFaweW9uHkCrHbZ7WDiyGaBfakmbwsYCD824hSc26qc8JEn392kdjGcAZy9y7G",
  "key2": "5PiJcekNToWXzqVsp6JrJy7z1M3NUUSpcXnSenYD52kJkmVx5FyfMfrMsKMZn3AL91CUsCyantHSwHSYf8virz1m",
  "key3": "2rYot2QfZ12RZzWxwtGgpqyVhnbQXnmen1gCsQP99tbGnMnQw3boyGNLz2bEisutjvEqP49UcMe3He5uuvLaUqot",
  "key4": "3TXwinwpjSsDe639mwRwtmeoYtMV2WDhpHGasNrNN67jhGNpYxzDY1ZTLZ15PMDt1BDwN56v9SzPturzH2QkW643",
  "key5": "3RH31Ya2oovDp7BzbN64sK6UiNN2rZEoeaz5w4N546tz5WvBWSgmg3f6D9oDJ9zxAwZ4T9HhCjSHo8saAtasAZzg",
  "key6": "vCNcPFTBuemb5L9rz3aU7SjnxdU3siJdD8WaYK9BXy8vVgpPgxfPtdiTMP5pKBnjY5xyFsLn5aGqKguS3LCLdY8",
  "key7": "2t3uWC6UwE95ks527pJ6LDaFMPfwdRvG9HnbGSniiQSYQTjkiSCE2sudUnpeHvj9rELkqE8hyk4a3VSTXcDfgUSB",
  "key8": "5i2M6VoCcvf5mtjAM8VjfRRaDhonVK9A4vge1tVCyoSMxryrL9qKW6mpxb6K8ExkmR14JnqaeyNcnVALdmEcthez",
  "key9": "3hjc4nmPsj6mxbi5j6vrpPQ9Zg7xpq7aBhnk6KdybAvmk3pwdBQLNHGZnYYygRd7Kjbxg32xNXKM4UTeWC1xoyer",
  "key10": "63hefDAWvAQdqLccmRKxtLgm95Jkf9oiXXBwWBGZzVMQh9wS1rqQtwdMn4nnhcbuXKYjpyNDq8KeTEXfgypYqT2D",
  "key11": "5Ee6FzPAuQsuXo4e6DiLsDWn8ckETNNza9qcY9PCugTNqVuhz531zJ26wwP7anG6gwJ7gjPaMc17NS2b5yY26d2H",
  "key12": "4L5gLnrY3TmCGnWDVb6VaX85DYTJwjcPSifCeJausvS9Ci4xRUrm4wVWAcNqnbxXKikn8AkBRMtASfyLCFLhdwHv",
  "key13": "Ch8kk5hEDoEsF7eoJP725iuY2dnPTpdyb2vx97GrMrmp6eFvsps5ygdVTs1mKMLgnGjMNoizg1kPv1QRoDdnr86",
  "key14": "56BswnEcRCq6S4HGkTpCoEaSKPUxc4K2tyEvRSiFN6gHMUc4ea3jEMAHifdPEW4UExSpk2w1rUjhzAJRiRhngP2e",
  "key15": "3ktYpTH7PnrGFMrUwMeyxgxEBKqjL9eeyWA1dcVLSWE1yHYDbxUvHtYpthbteED7T7R2F7NRCjfyMgUjT9pgtRNh",
  "key16": "x7aDLCJJocF7g2DMiuPfuRAPm4SVbFdg5F4UzjNcMN1Rxrt4znvfFKnX6in6GGf9KLw2Lq86FGgDuAvozGnW7DL",
  "key17": "2B5tgw3QkVLMStCmM9ac4rEy3iNmKN48ZwUdHC9oExyneoQKRKcSppNJErGZ7jgrqzzPtELxhg3AYxWn3L4ihPZQ",
  "key18": "3B9QQ9xDK1GfqNdvEB182oeawT6h9cBzUGvXmNG7joX6kyvvWev6PJ269kUzLejfWa7pY1ymJY3G1STVEfjwxUZp",
  "key19": "4Ze2PYVU3ykQkKL2jpAJw9qw9NDU2T6jYoV4rJ9fD7PQ1tMg2KNUoE2jBzYtRtTPDbceYNyxkdaVLQRjxKm8gTVL",
  "key20": "3VoWEMB46WzMrh6pP3WzCLx41sydvU6j3yJimLFs4ZzmDQLGNu3KxWhnAwx1TNXP7YdezyGyi6g63WW155GWmVKT",
  "key21": "2eDQAj1W7zgWMJqXzmQ8GipMi9YT6d42Lio3WeFRqpVRH9jm1HWdvKFqP2u3kN2wpWQCG4s7tPqNmE5cRF5xXVga",
  "key22": "46twQeEFcrq42iZygiwNSRXJEU6wJvoZL6HoF6go4hFDCeUxyXxoXRFvV3Sx3jGYwKaB6dCAutk5KdoF2Wx5zjNL",
  "key23": "3cpWLnvajExkg8FBoJY17QC4NBiMripAeJjdsjcW6wvJwRv3Mn5ggo3G5o1X7HqrnyNYqymY4a7oACpwUQSCnijL",
  "key24": "4DrYnuJZg19s4jDKit2EhkcCHX63dJp98v1GKyGs6aM2XSCMcndp7usL3aPfkuKgKkDkYjLMmsqjg9LFzN5pkgYr",
  "key25": "2s4gy2SFMDPp7FhpVkcCCUnEVKJ81LFiZJ4XNs42u3L7ejePCMD54S7yNswB7NC2FzEbhZnr1MsPmkTa45Lr7eYw",
  "key26": "TPyAmhwKWXMRauGS5jkTGUkQZk4SxRvPMepfRFrC2pQaeiehwEp9yiwqpS5nY5T14uRVCqNWjyJaS2KWkHRpkSL",
  "key27": "4akXVL8aUT15fBLowAzBMzBq268Cusw5CiH2oCkgqr77KTwGmEwtfe9jyQasN5s866GtxT3cnPxNBNCJPxYMkiUo",
  "key28": "5BPZA63vYRkPhmJ6eDrdf6ugyz5uNkRN5Uwnwo9w7PfZooUR9LMWteRf5eVKKzYxrj9gdx7geiPS4akMTxkD3Mgm",
  "key29": "26YVabrVDkBgLe7D9dhv5ckHLruJbX21He8wTWD1XpKiy2srnQqjoWAFkxDPZrUKE21nQmQeHV55sEws3Z8j1ewv",
  "key30": "3nmjnNG3phKaMiLQMeAuM5V8yqYFyhZEknsFKpsHZviXcVwL79EASduPurrwRp6unQKCmuuKbeUBgFRJs1Mr9aQx",
  "key31": "5hmWzh6qePuXZdQ5FkD14f8s7o86qWkbMaQZupX7GQezbFFDKLa7yHdp1nf1RxRE87BxrYYsCPaV7SGLKzXPdTYq",
  "key32": "5tfrvXQwkVjEzsLXksMy13FcitqtKmuC1vp3FS96RUmH7gwQmcYAQYZ5xnTwKPJVZNmSvKZMpS8aQHM86qtHckRF"
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
