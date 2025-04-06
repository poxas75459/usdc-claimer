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
    "5y9RGsajHEuLZVNkPkTiPrF6ZgufcKKjMVkufgBcDWhkZWoTMtGi838spa5PC1bt8RXSd5Hv8tnYBXsqL3YsE2i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eTbdJPbJToft9BxDBkTTYvfNoZJtuUiKLHnhMQFdpktBZNyHqrW2eZYHbPCa9jr43zeQnyez3BgjqyuffUP5Win",
  "key1": "5geG4PH6CZKcfATco1A5TajqNVcnVkYwtrhTUCX7LH7YRdkcx1FYwyuZetarmEky7XFFpjUGuuXaCBWSahyb6yP5",
  "key2": "4dFvt3ikHQKiksTBChX7fxDn25EigfWht98jvLuXR3zcbpFDw5CBLGM5oHcDQ9wSwC5sk9HaERhcAuysh4JX2HC8",
  "key3": "39ZatVXHUBWkREM2sTm7NZU9J3tutBiegXXjemmfp9kQMYiiosdsZ3rLcrwkUUrozcZ3WJVSAPJBwbRj8UPDQLj7",
  "key4": "5Fa6NbWALmAj5kwjVzqscYyX9FCGZMetKhvXs6nKUAvEKaaxe4qSHJgoUMkkT4bRuxFSL47A76x4z7az7NTSE4YX",
  "key5": "5rnrbcxn8kJRREriHJw1ht7ith8cwGoM8gXX1Fidna3vCLh6ad7puaa73PDuU9KbMUwZV5MTenokL4WdZnkP92pP",
  "key6": "4mSuB2QneBSUyHtdjnNgJS8fk7P38uvdyepdpwe7F3KeYmW99krzygcFs2EK4SMRJsmC3vsBzEBwDeiC5K9zSRac",
  "key7": "3trmwvA1SecCsaVbaceApjd6ej1wdahF5dENsAYaWRdZcEnkgnH6nLxKWmX6tgA5yNd4eh91SirBYAeJiKEfFdXZ",
  "key8": "2AVG5PzuYM3268fhttpxCyts9LUnihScwT6zhc1i7tDJ3YstPaYg2vdYQLJoAWBM9deVbzkjC5nZh8NcPbKTex6o",
  "key9": "5HUGVcW1xK1FMUMVg5KfLExmfDPcxQLEj29bswWdq1d4T3c1q1Lu3c3cuNx8phmEPnQj3qKN1VguDHqM43Z9uHhv",
  "key10": "5M5wLnp7wvwEKm1HAkKE6B6bezL3xmnFJNnAJHrfcW5VnM1ycyhCxcEkLqCHD5AA7E8FwkZFTk7iASE1dk5H47Qf",
  "key11": "5B9h75soYp1d3Kz9pUVta1UkCtAovJt2dkZWhzABcboXLqVKUCfFTeFudWUDZKpvhcuk7MLvAeeYfYSyC3YaWwHC",
  "key12": "2Tee5FefkENYBhpJv2VXtDS17DLGestLK8bmcjHCk37P5qBw6544JgNLspbqzXPTGacVdAowKrf52kFrYQz2xXjg",
  "key13": "5NSeT5eRngTRPzi3MLnQviH8QWwXQKNavQ2UY1zXPiihCQiwvnCLSBTT33whvZCL2tu4MbGhwzBqLqdFJC4Kb4r4",
  "key14": "2MFhjJ6G4rg8YzY3ATjLbGbh6dTYKkxewBDsCiMTEWSX9PAu7kEkYMFsmCZ6T1TnDxkvG47orCxeqUfYUZR9kwnG",
  "key15": "5Xq3t8QdrQfjr1pUxzfBcvA33re4Si1Z9nYnBRiZvtMw9zsp1LSq5mhxQZ8QV4QEsyjCbyVx7oMSjTRLVCE2TYE7",
  "key16": "2Vgr4q4fhPJUTtQ5a992UiuH8VxweYUiCGd421Qk8tBkx15AioLSMdaeRkBgjnskPYMEF92rSVRYZDG9kdV9RtEb",
  "key17": "2vdK1GYWwMJUKzrBzgMngmZdz7oSBhrta39QrRWVcM4L4Q6GJpmag2knqGs1PYmhnipmzUz6CHLpmLH7k7GT4K4v",
  "key18": "2oQro1qaatvAC81g5qEAszr3nbKr2zr8RvRcghPWRAL5tCxiKExLs5ms7amp3PJCyBdqHXYuvnWt3k2qt6CaKoaT",
  "key19": "34C799xnHvpCay9QX9ScfoNJFKutS6SBCeJ5j52onvWAjcyw5RFfwrq5HxrpRujUz5YHrMoNjqevurtJ22PPFcUS",
  "key20": "ZsT3HLQQm9H1JhGzrPJRTGPSWca64kEXYyLXVcj9AAtkJkoLDA6aUkc4hTMGpLu9BDeKMBrWJVxA6xbEtzq9e4i",
  "key21": "4DSwb6RH72wb8oNgk2egZjgrZ58APbta5QJAACoebpMM5t2PaBqYB3wUiQNGeg6AR9HqngWR2FTsDHJx26pxnq6C",
  "key22": "5oyj8eNRueQyZ8shfAFtWAGGRzH7uPMERdiLHitwxAvFYCBDNmNbkdRx8BNHP31VgSqDtn5ZimAq5d7FCvP6oYTk",
  "key23": "5KAXcqEfrtu3UqARuukyEV86QRLdNhsDiHhVssxkQbSRXAAZZryMLnNFRbxBCXEJhiSo4gYjUKThqUmDBZ6nwzyi",
  "key24": "3MzyCSwq9V6xEDGALj4bWv6ANmmCTyhyq5QxvAbxTmDUvCyddwha4Wg5Pvv6nEN6C93nGQdps65iYgLiRXviC7SG",
  "key25": "2t8CB72wRhRt87YBSLmGGiVtxmEkKAvgTmrxeWiy94qw4LLxqQ5PsgcpunwuMBzL1BJBypMFomct3SYeAkC7Aprh",
  "key26": "2XyPcM3QLk5eeD97rbPkpWHJxCYAFsbXTpKcY9oF7Uof3op4CkngDrCLtAFnr2ZodZFmYffjmuzJkhtyCxKouwx3",
  "key27": "3kojh3pUoEhUxDQg72d9XL4v4UByHDB3NfFuJnVrjoxgw6f5TznLxGDH4PskSuFHenmDKUmnexJDbTJkJVYSwYwd",
  "key28": "3dUmJ5AUsHojmSHEwxUa7izFhgxryqZxt5CAet9Pr4TAM3kgbpiHjVGW1LPaZdy9QPQLdk5tQ3qi1NVgZVQynJCD",
  "key29": "3V8CjjuUMPBWhsxtFeib36pzNLuT4DtJs31GQ5zcbBjjjCkbZnhVkDk3GV77p7Rqpmq1PQZeDxhhyeSCAHQBS7HB",
  "key30": "WajbDnrpPUEonYQNkttEpD3RrMBLwL7v3SwiHyYhgVZ5gdeY3JPYJLgWdSzjnctV7FspMSYR83KRyseJdGd1oPP",
  "key31": "4qbV3NnENS5TpUHEmSk6LtvSSCo97e4eBM9nExNNVUEMsHSJwZdtGmGv9bNz9qrqZgNRRgmtw9toSxNTrNcRSv4q",
  "key32": "37pYgQVrSRL6AYRhMQzaossdVEmV4d8Qb8Dod7C7LQ5xDKrHKuC9bEznFDJotSKi6Gg7hxVQnzynqgXe3JA1mZb7",
  "key33": "5V846y4QFBb7zG5YxDYVogMS3bGFCycSQptBg1nR49QNQ8de22WzbzrnGW9SXbBnGYf7DsNYW8x9L3ZArLT7roux",
  "key34": "24Smz5bo1jhvRv4YGNxHbZn5mmX8FeETQHNXqo2C5U5NX58o4FfDndmzAwXZ7LwZGVkdHeRjqR2JrHX5PGYE9YeJ",
  "key35": "2hWXcjkKhBRr8oXxhG7V5QgcMKZUGaEtGUAy7D5r6FUNggzwArzC2uCJ7WKuZh1SpxLSTrPAfRk4pZwJcaoyMcJP",
  "key36": "4eG5fr1xdU8XHzmKa13671ZNbLQUmzCHJmugX9s6v5KAXd8TQ7zQDmaqMifTGuXLNkxMBAUBo3S8ToD1a9frbnxo",
  "key37": "2NZdosH1w2tHKry5BxUDfriS25sUamon8PnC2cgDDFM3YGLX71Dz6fDkaVBqcmikWd6vSyVtQfKPM55hLHCJPNP2",
  "key38": "3Ajccz4Z7NeSgJdynzHDAGsdx8BweLVoxY4uBRxWhPtcgpDf3A5cA4hi2NMZVcj2kMQC2eAxamWa7uTLEB28we84",
  "key39": "67HWoJ4JtLiZZLg8e7FuaLH2b98EWXtyvzqPhFjCmWHrb5Rvh5AtatoB8X6DMniNZsu59LcnygXvziaJK165r3A9",
  "key40": "2i4YWGUDi34w2jwZR2LQs3WZ61UGRGHxTAh6noE749ay6Htt5NFKvuzFLJv5k6N7Cw6dhR27KYr6iKQRnASAa78h",
  "key41": "3bntBQatmEAopZSMi4PyocqZoYNebyBFfJHkjg8oKKJj8gpKyrXoW2v7Wb6RXfMRFWRFkjd69xXD4kNAcZiXzcaK",
  "key42": "2kHFs9SJUbWjqYJx9ydq3ZWHf46WT2vZNRPdqSQf9Akt8wpkZTR3BwYUig1khCqRjAGeKtXQgnzL5GZfpuZoqgP8"
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
