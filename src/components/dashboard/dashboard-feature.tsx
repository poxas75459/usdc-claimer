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
    "4fhjcVHeom1hnUZ5bQn1aShHz52jxBUSfuhNXkJTgt8GSvNQ53dyG6eQfaNzuMCUu5iRq7cRiMDZVFV4466d7AGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SS8QpsdedZypZvCdqyNcFF3NS5ekaTYNrTXwT6DsmXBUSwPB1jKtZcHGCnos7whwGrn73KEbh7jutTDCSXeRKov",
  "key1": "55U6qeL2NDCbs3vqDGzk5hW6PJ1MLDPMynKySAC3mAnMckM3oUZUFVJCob4La2MMMLgs3ij3rSzUHgiKV6qrUPtf",
  "key2": "17c3VmTjBice5ADWQnpcTrxu1UjuBEmLyMM9G4DMo8F9SVXqxX2gRSeAEKHQ93j4jtKSLGdUGDA5DMxaESM2v83",
  "key3": "2yp3dddKKYg68P4D9aYQj5EkoasQt5jmCbLr2ftMeUvvTg9o9TxKAjN6sN7hXsN8QYiXfiV1DmpJbi8CxoeAXm8V",
  "key4": "3H2NFZyz2GWTn8nS2K9bZmVriuBYwrw71oRQNauMuooWAxeTRWScikxjxHHXFFAweWsGgMDKdkYYQWuwDLyXL66L",
  "key5": "4Hfos81ffKUQiaRN61CVknjF5sFQzrJg7QdVSHSoZAdU2M99ddsPb1A2imoSKWdRRFvEdCe3KtVGVKrov3BkZw67",
  "key6": "LuA52ka9vBKcehAADt61JKkL9AV1xeHTRs64U2pJ1XW2oqDZW6TFdfZw2FwFZjY2gQxpHxngWf2oRf2jacCcPM8",
  "key7": "3MW9ESwkNM4kazWwD9Rrf9d3W3QLUxpGvux7rG2WgHC5HedkFC9Dyh8kk8Q121pWwUr12K31bhVV9qAnPZJsAGAm",
  "key8": "62mX4BcqQqanDN48vkexTNnYetqDiBL3jdCZ99F14qDggG5idKywFNQvoC4pNK4es3PtwWGjgzyHkLVTP8SMizCS",
  "key9": "2ZRuTAihcNeprYWqZYRLYF5PbPXxxi37bETSMtSnzirBUzaHfQQJynMzWuF7kMVZdJyKSjqWCFPxsZpmsCXzFDwr",
  "key10": "32HbZy9m4PV4LwP3esU725wTLysrDbdyNKgL69DxsD4Q785TqKbH8Ppt9iTV64wVt7FX1S6oGvwvujjt5N6DK8bd",
  "key11": "P1U8zum88MgsieuojrJKqZdJgHu6gKFkTkqZicyhURKiWedchqw3RzusH9rbQDeDLNJSyETq6cYgMQFftcu9moW",
  "key12": "38ds7oBies1rUbgx2eg7mnJxroSk2xPDw4DVuJtitx2kaqHXPrqBUTJVfKeLgvNuG5ujsj5F8btupg5ZhPK4sAzA",
  "key13": "E67TavtuXB3Kxp8fC3rwGq2tqMkmZAkuWo6hj9BwvSopcZBkGw9uFhawYmucE5rVnejML2ZDAfYrwtt3S9C5k8j",
  "key14": "4RiJJNwuMzvQbw3W1iFAuCCgVyk14UhYWwiYYpeZVyzNAUzRaw62jdd87NYZ5s55SryUdTmH4yc5tK6Kg98Cw3K1",
  "key15": "2PHPEHmU7f5Ht5ovJH2Brgx5QsDJdceK3U5ochaBdpz37rjmg2MQjo78roLW8upMB4txZH5bha5p3aEbwjzhSQfk",
  "key16": "2Syizm4kbn3y5gmE5vRwgfVVPUthH3c2ogH443Uaj8HKC9mQyVE4UQaz1Ne9TiigC4rqHbitp8Skg6v55WCby4UJ",
  "key17": "4hBUYJmEFLXR4LWrwsQfcuf4GzVEBmaTYP6LeTbPM2txwY29iceZvin8KTarR8rAwgipjG959iLLPP2eqNqQ32pt",
  "key18": "3sUoCcF7QRvCfyG4ScsXEPUGn7J81t5JQLoBsD4tQRguikYHLt9dz1D8oPQnAZj5aQrQY3HBFVzgCiPmpc61ZDb3",
  "key19": "49SgJ6v97Q7T8vGaactAAfm2SMHkZh8WmH6HD7jM9beQwA9EAANgAkgTaeR2aXSoBmEMGNKDARn51XzfsMcDTAgu",
  "key20": "kdCMYLexRwz3SyTjhjA2mtfCuyE47Lkk1TxhqsffuHn3qVfEyJ3S9QKpqsc2HtubvEGvELbVXx7AqMPRuHt6i35",
  "key21": "5SrGPDtJgJKLxERm4fxh4vVKTuP1FEoJ8kXhTwG7EvZbHqdBrv2KuZeqC2XYjf5nrUgKc6UJ9GXafTPxSrjomB2B",
  "key22": "2SbhvxmMHMCuUTHSnQN5dzBEa6dVje9HuFf2jZBXkX4e38P7Skzm1xBoFTcPfQ3MZ4AfZQBeML8VGGbABQw7utP3",
  "key23": "34sMVm7FpprRsX8e43kRR53GpBh2n8gUreUyhHiGAw4a5ffy7mc3fqQu446JfFMcXY54HVkQD7btc6aSYL2wQBpw",
  "key24": "uxDL9r5H7SdedhZ2dP2ao7DeGSZsuJWg366D4FtySErK2mP9S1ijsn74eQhgncML9UnbeoSMBZnCyBWeig9XuV9",
  "key25": "32zJfLQbJsfrDHDcgdhf9kpqmxSEPjmPKZTjac2rU77smGxPjJyunkLoEWA4iXY739YdTmfT2kTn1mErpi9vrMpU",
  "key26": "3a7yNsPHfojnHaKJshtjGbeDBxHDGDBj7ggH8z4awC2keDA5iVF3WDdeVsaZ98ECqt17PXwVyqnrTT4LFPNLv9dR",
  "key27": "56MU6UNKiqsKAbPinNmm6KWDatfnrE1J4GTLVjsAQKyAkDGxvVXuP8sYJfP4NAyixj9vJTLm38b6jjjjCDTYkvsq",
  "key28": "34xDkiNWXZHfc19e85awbU1oTXejaQqj82kRnAUEWizPSFS1VnsjHcxHyaNX4ZLaTqWziydF6uYfCL2BGA6AyK5b",
  "key29": "4qzhsZ1jaJ8pqdXqc65tWcLom9iHkie5zuUyMf4EvYUjwT2toFUJ9Z48QRMPgSGTiP8UL5uQV8noW2kSKV9NEBzw",
  "key30": "2XCshcmgQoGtmVHGamQm8ubdGXo5Aw7aiQ8Z8kYh7xjAUrvcNdpJGPRNvULVaG63QMxWy1USWnitCd87euGBtydC",
  "key31": "LhF7xtwCeubs7GKqjCLV4DN7hesqhoKhC2Jyi1J44YLj8d21ZC7w4F8gqR2EmZGhab7vFGXj5XRntuHy9KQczWL",
  "key32": "4iKVfQkDkH4gM7sDZPHmz2C9x3KqWHAb5rx7dwJU5Q51MSqYHnNZDkzFcgMhCREEh7m4GmhcR4BeHLqP6ut6U3kp",
  "key33": "4rwAv1TVPmg3Mc14cxYDw8Chdo6DGmPRHUGoUeyD1fx55tXdkCmZ2QCQ5axDhpowzzRvQr64FhKv9G8GywZCh6ni",
  "key34": "5F2vZCFWY1jMsJgzv3fYKZk3P6PwSAkr147DgqkLLt5VFAFkpFzeErLj8Yu49fe2VGeStZ8D4rTQqXViXpUNobfu",
  "key35": "4FfcPj5S3XUHZY9Rrxym4uMy1jTk7gR4BYtQ4p9e6LSeRvv8nnzwyRuZaRzuTu81zJAA4NhYK9n285d97HCZ9drG",
  "key36": "2gaJnLSWWBq4puB1injcA8kZmHjaRMtPLV1eA1FBcBaVFF5eLUCCXkqkE46SHPEzYJbKVPSo4M2VpQSGWEDB8qEh",
  "key37": "xjFrwMxTRQFPDwQC6y6388btvzZknjhfbYVDPSTmHsCtK4WeDjnVXmd9zD2FkknUd7euUSzdfyzp7TzyUEUCE6m",
  "key38": "3qGsjvDK1K4yCXxKF6P6eggKrtDRzezmemopFyFMQbBmZWB9jznAxSThZ2dsZhft5HzPEYiy3WD4a1wiPyVUzPwk"
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
