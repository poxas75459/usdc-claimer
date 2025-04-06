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
    "5PAz3gkFinyaSqpDhNnSJmJkdivdZ7whT9NZvf6173cLN3ve5NkMcC54EvNYMi6qY1qTiyswYdVUEpEkKsXHFqbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywrnYo8focHMiPeFUj3zWYaUzRJYTUg8RBs44bpk7935AwEEbWykmEFAgvkKXgPBNejkgL77e4FPQn3WRJsB4Zu",
  "key1": "x4TrrxJdmHWopWMTeJkNqvCs1kRy6kwpyBqjcSFnj8aQ2FXZk7GjzonY2bEHQktP1N1Tc8Xd5qzDsz1eGeFzoRh",
  "key2": "tnF4C3x719mtp4RHrHcUDJZBSksjqj3QiLLh4UaAgKTMWKNwkRzo7RHiykwcj3yanPoHPmSFHtuHC7bob4X1Z9S",
  "key3": "2yuxcJmur8SVDV4K2V5PCBisp7QQApcioBUddxZcPg6BK9fhf6gKvF1fmk6wzTwN7Psww19rPikUGE7VfqzdhJd9",
  "key4": "5PCzpDCwiRxF9La8jthzv19x2ayPeo8RpzVSQC57yU2unUfRta3SxcMti8ure9ZxETWyp9nAeuakZyEUAHs2ytLY",
  "key5": "5FN8Bj52d4A3qL2cUq4Xx5MzjxdgaYq3BNuQ7gAYAoKaGSmtR4ekBY7HEfrteS3Ra9jNrAnmU4LB4YACw4AocVRf",
  "key6": "5kGmD2JGPnqzPg2XeiX1NYPdY9etqXYPfbmcUPSJp4UoEHu32qJBVDrKdYiGm3pgGYUrYmDQdWnq6YqEGQbVjmW8",
  "key7": "5p731BVfMN5QD3Vay6zK48V1MGT2974Z1Gr13yFCPebCSbDC29jhDDWC9VwfUD7MrxfYMKKTtUiZEXEEAkhCGiFk",
  "key8": "2DetNb1PMTujh83T4R1ciSA716HFeYeyHYVutsV2Z2igrurDZVjCweXd56qzT7C3nGc7X6N58cH9MouRG3EKNLR7",
  "key9": "xpdwB4qA3iDKbpqwwwJ3YYoQc9VwCeKiDVgjjQpYJHh3NP5KRiWbixd4e4XazFxFir2YngGCSL7kWhzXjr36VqS",
  "key10": "3Gp3t1fgEKQ1QmbEy1APz8rZ5fxRqsDZ6XunC3TD4N5ehnv2QwheEfmJc8N1Sw7S3sEUaHkXknzrQFkRobuMySB1",
  "key11": "5Xe8uxMNwVZYSKU4sLMSEnf3C9RdYXvaAtUPsxVSaHELtE5jAx93SanV3cTKieZAp3LV48cVcEaTbyH3Xe8fRp5m",
  "key12": "4obe124Ft3MasKkFw665mc7gwbwDfddkKduCVjb9dVjs6BsVKmisHMSjVkhkBf7GmHr89rqgr4Ph99QCMZz5gNcT",
  "key13": "2tsdXBjdvhwYjR4diAS3AaAqj2KX3tnVjzV7fvsN6xzdpVy6fpgACLYTDibJvnufL97hfd6rGJjehz9sGVcfusZT",
  "key14": "gtUn38uiWeme18YeXUkGsU4dirHu4ojmZyGnxcAr9w5evT2X92eoNzvYL4qq1YyS5Yd1rNiZRfAsyC2FsKZWzNG",
  "key15": "qHm1fAHNjJg8VgJyn8GBUgcM83jLNdwrFjH7QdR64JTTqKde9UkAEMtDm7Rcf4cS5zMyH6FAQFxdmi6hGLz6Nma",
  "key16": "5nNxJRhZDiV9CdMyhKTx4UNkdMstaXPEATihum6e7PbkVfL8wSTb9kLrRnXPxMX6wEdVnEtL1DS3paGvuxM3rgaE",
  "key17": "2Uh8d1wgiowhkxt7rUZDrP8rEXBrcWS2ohy4kPycVCxhQsTDBmifdyj5uVVXQymvRudyjQgNNnj8fQpCyDLhSwoE",
  "key18": "4o9LU37xPzsSBcQSp2rujjP3Duttr8PjqGmVTxntJzzZnxnk4Liyhr2cUaGrTECDFN5rRES6PRqceTi6mJXSVN2n",
  "key19": "3FpkjwJdKxyj3EA2UxfgKye7HWqWXtAix1brtb8DtZEbdp3Afnq1gQYoamzGJseGjV8rFbpQRTEkFPMSF5H1AxY6",
  "key20": "3S8ffupxPCrkdALZm9gPSBkc1YV3P8CkD2TkVKoevzVz3MtYVL7CWzNYN7szsD3aVUSsnFnPm2pxbKBMQFRvb4WA",
  "key21": "3LQSHh4aUyjR16mPFpkiS7YHZTMsVtLMgiAwFcibgD8HcjHx3SgU1EgfuJ68QujGUwRgMaRG44fjw9L5shQiw7BM",
  "key22": "2krXgyC35zK4WjzEEfMV3Gx63VyemxNfLUTRi2xCBMeVuCS3QZaXsdqLhoCKDSDM1PiCf1JwgaBkVa8dzY13PRKH",
  "key23": "3TYndwWEBoT6xijxvuWmmUE73jCtwcyE6M3QGLaWYBxUCBnont1gqrvwEueF4HEmfQYes1NAmF8b2MKnhARFLUGb",
  "key24": "5HPWxiK4kck6NZgDjucjHsAaCn4awXZ78RF9Jt1FtL72v72gE6DpD3aYbpJApQSwa6tTu36f3xWZ36PA5r6bvmuz",
  "key25": "Ff76q4X33HMHnwEhRWGUSYhJDi7ajAK1DhMT4Ly9LKG9psc5VXLm6fz3u35M8Zw2RHsndz7q2NTYpxekMxb3UPz",
  "key26": "3xzcYTxQkxAoRtpLJWdjtSWAY5aXVYyVS93ZuTTiFnFCMjDJoocsomrrLY66GsgT4LkTArbdmoFpJnxwfoca6yQa",
  "key27": "5aTVaGPyu3335n4mbbi9AmT13VbVkSdZoEUehP9MNpsW3nEkYn2yhPRA1uV3zHHw913pSx58cMYiqer8KN3y2ef2",
  "key28": "5eTHNvpejgQneSrgzkNcvG3MT8NFbdHsoHpgdfYDtixUNZJV9Uq381n923is8PcFLsd6S4jrjuUJMj7Upm4FHUuE",
  "key29": "5gnig84pYj8BPsa4ctiLJ8MJq2A6U4tKjx6P3GUrVCN8zzgwo1b2agJQRRLBeJCJamScvL8MUTKmSotLTsFZhJD8",
  "key30": "3p5wgfW1yeUXbmtMhNZ2gXfVHz1YijCw6DFKY41WbUrB14PjNoTn9eNLc7cfR6ww7S4En4iC2MCXaozWomRKabyd",
  "key31": "2EreFWfkzDsogmjdG1iCZATKAGKHJf4xn4FzNxefNTmLwpoKbj3rxtk7NvoHW2ibEAxc5womWqW8YvZTqxvfgoEa",
  "key32": "v45aiqUpAhmWB3cZe3irhBEPxLaXKLXv6roTNHBGJ45Yxo2eNs6ohf2ASgxu9mU1e2gn5sWju4y2PSsvE9hMprd",
  "key33": "5udCMLoAdpiw2PXHwNjKgxdebhZzqNgJbTptT81H6g3QRF84RTEUfVcAXAXd1Cd39pNuAeSHak2gaeF2T8LoPkdy",
  "key34": "3A27amME8pdvSrwbXakHrV98BiG6sJoFxpoacEWJj58etUYakKwJniUSkwh3F3xZr63vzPn3PbAzt5Q4KNu1eZQX",
  "key35": "5ua2ekabVZ8v7BXnucy2qR7sGwCkLuSxfeoDW6yufU7X8cxgBJZ2nUMrFM2x9mBtYeDHnd3rHdqLnqZcgeExZnMS",
  "key36": "YjUzBkxkyxk24M2xkRdHNrVNwcgKyxH5ErkZNhsASb9upSXavqqHYAm1i16mga6B5xWTVAxpzFqA3RPLGyofev2",
  "key37": "55L7Uq4wbr334aKYA63K3Un7vK112gCvdfEiM7aGjVQhL1n3Hj1xLvD7scbEHZ4vLYk3wubUVgnZanqPHorHzu6K",
  "key38": "518BSSj73HzGiK4xUVxY78zLAEPtczs5DNJBVgzaU2kisbcpgm1QC4SpCYYsSbiyfG8d7WXssMw53ZXMqB4s5ZSV",
  "key39": "LwGXTPFoBNhZsZ7JBGHDwpFyuGJQGqt2T56Ddk8mpQw35eajj2sot6dWKEHyg9Wzi4dyxfxzNJA2NuTbPbCPH3Q",
  "key40": "52WEF1KUVrCMvXcrQhKGMDoFQPNpKip4bZZYMyJmvvRUWojNtF1NbZVrSi43WwodnArLKzErizwTuotCtSmti9VH",
  "key41": "4jBkkPwfTqmvacZ5iwYcT3XkB4jAvEc5VmvNrQm7XY7RzgsAJCSjiDZTWiCtbjee6Bha1JbH9QDn1WY9bhYyHxGQ",
  "key42": "2TaZiCpH1Up2W3iz8FzyfahBfqrtmweNtw1986R9LQ33KzEMuZWx5BTCybRTettuqVQM95r1SAqiKkMR3EbVym8D",
  "key43": "3sqHVubFZzinMSzfpGX8L57uoUArAMk8oH1kd4VoW5fJsyEPwRcbqqA5NBmsv4S14x7xt3dMkzEto53kzufpvcCd",
  "key44": "5kspDUwUvGsDpRJatZmaaZ2uBpE4JwWM1qfKoKYCnkeb7w83uzmKR6r3LvJbSgEQ7MfagKSPKMH1Fmr4gCkDzuHZ",
  "key45": "3LZhiHETC7AfK9uYzBKXJcQK1JmBhLmR2fmJeU7T951UUTqRD16qviUQiVfTa8EiC1NomJhKhreYxvu2pyrYaQLR",
  "key46": "NJy3mfQ4DNVdqXYtCrscEeNxhtm7cCx8ms66mKwe87EFMwmRmsqVK2n8r4iLsSnYw5fakWx8PQEhrKddJfyHsi9",
  "key47": "c23N12hZH7hSCeg5MGRdiwsBiT69KK5THyvS9GuLuvaxK3n5EYjHXyFHWd8m7VdP2MVJon48RBk8LuuoLcjewTL"
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
