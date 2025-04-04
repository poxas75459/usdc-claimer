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
    "5tfQYGUMo7n5DHqtRkk3S331mVdGGr9ecUxXymANi1ZzED8ofBLPPBG37aaRhr6ARqeWAzTnrZi6NzpRT71TGXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nks6YKFpL6gLgQ2k3Z7jYzwCevRBHdMufPB3xUtWqUVPaCq8ZZq6DU3qKeHYe8Hqst8gFWspYDaUZu9h7yoP293",
  "key1": "2ALhPh2x1DeUjJng1gGFD48Yay2FSr75b5vmzNv6Md44eHRBEzi3wwshf5ghmpgmAehDosNxnumWgatmkBhdJ9HL",
  "key2": "2JMxp9GewpzFCjbgGSRePjEbdb2aNuUcDrDgiJU7RRATrCWfbwknaS7CGgp9dEa4ZgnVKhuLrsbxQXFcdJ4zinjP",
  "key3": "efdEqfpry6CXE1zwN3Uk1RWPm11SRjbapT91w4n62ybaLNwdwz4qjRXgFXF4wzrDSjsvo1ATTjRarfYHtrWpWW6",
  "key4": "5dj4UFmZMejq9TEpdW7kx2NZZirrmxUHHUqTTXFW4TFRj8nhDAY95kS6drrBFNTMVsw42bkDpw4LjgPMoum35QmL",
  "key5": "5zXstANWUuM7tP8MaR4an54sptnGivY3hxWo3iAioNjCTAZFLTJgxtfjNsCsh8AtF4zfRd6srh4W5k2nP3TbBzDM",
  "key6": "2dqFP6MokgyihGb1Vfb8Mj6PaMWpvU6xVZ4hfEaqGV3FXw9Ea26qucj8hkVz1pC7zzBk2ATv2ZGBJC26md6YuwE4",
  "key7": "4uT4tjKjjApu3rBRbpDRTwUNRsNdBQRaM7H8ETM5XigrpfZvosEHucLN5gyrfXPKFZLbNgB8eKXtXEQrSor8p6CK",
  "key8": "7jxKSnTRGHUWYLXX9MMaNLwNcpCvtx9YxDb92vEQC4Ek5MSBwEZ1mSi6VPiZgrsVVPaNHyzb59vV3jBpnGNc6tR",
  "key9": "25BCiC9gmUtRCaJ9wz2y2xRGFWaJWw5LZLbB3U3sJUbCXQopwQKRHJdzuXQMw8PJ22tDJLfL6ES68hRZ6bqUaVQg",
  "key10": "KFHj995fA2doiXjCjoiqQ5QysYUKVfkd7qHV74eCWsKaNu3cJDhkZ5WjP4dB8hNg1E1MvomiZoSb2UHr5o54rH7",
  "key11": "3wkmNCRtk3DA5uR42phKAsJnMskoQ5kA6Ev38xEuK8LqXiN5wbkBBpTE8CiSuf9khW8CfPv2LHx95AjuxgccyNgZ",
  "key12": "4dvVUtXFNVXALskFtxM1M4XfZ4x67LF8YQMbTCZCY54bvc7PFo12E5n9NoLreHxRDnfv7ktow2oKBVEfSbMuM3b8",
  "key13": "2hdCTrz4nKrYvsdk8qSbdMxGiaDC91LjpdxZuTWghfKKBs65fotunasBhJ1MJZtKJSA8MwFtxYVXwousp2qFcEPg",
  "key14": "3w1jLr4YiReSr5p5DMTgLNGmBWpxZ1EJUyAWbtfE17sh3egmMcYYo3D9jQHjdAqHb7FmZ7uo8LPRVR9KMaGmPLbr",
  "key15": "2tyhUVepm55XwddnNqd6nKvPfQ5iXsZM9FBwmQ7U3vU2CyfXrLUyuLAoZqXZzNdvxbh1nVpDBKmB5JyNmg2jDQ92",
  "key16": "2kCroSCnodiApH3jVSSeVh4i1AKo1q7DvYMEWaaLe7sG2MXtFBxrF24JEqr7Mp2JNN3VNyYue2m7yu56Ykyvqisf",
  "key17": "3awJPA123QENH2KJwnu7CW9f1L6RRPGsqxivFWo4AENW7vHpGyrGuWq1rxgWnwagss5ahTQ3rKoDRNJoSH7c8G3q",
  "key18": "2K8QU6ybZakVmFYtFrfus7Lsr77qNCpqvDXZQ5h92ZwH7YPPgbVdNTihF16LvYJqAREfMzEy32DE46UnKUFCNpw7",
  "key19": "3nzCn6974WE7DR14teVuN53pNMJ94V8LN6ngMAWPrXV5XdTN3NHeEXb7poQZDJQnvJAxNwF5csHLG6ZMrZxsCLjN",
  "key20": "23iF17rFG2YgmzEFp3t9hdWbaW2aHMyKhTgWhQraFikFshxUmvnexEjGwei5czpBDcyfWLCmEXkHX8Fd29Z3tujM",
  "key21": "5bMGuhJkDmTeXiRi5ZhKEuV5kJRQgravxReDN2z1JjS1uZEwG1UayZxKNLi7rcDsbfEG9gopqoPXDyGiDVC4Zmvv",
  "key22": "3CpSDLESBeMFrafzH1NVXHsc8zcWWa6qkGM2SQ2jZALje3s7TrCFeqd4JLzxu4f3mRCFJoe9VB1EPEmFhDtvXgss",
  "key23": "4DcAcD7JxYTLvoTD4njf2qs2rh9GgUQ6sJnmD9SnTq2QagMCpNYuYLwgWUiSMKDx8vuz8gDt6Tbjmwm2aZyAZqJu",
  "key24": "V2dQ6ecUaTgRrQ5sPsYBb3e9u9Wwte2dnqLwLun5mqBqnxiaTSdE25NeMzWLCbkBTAvy13Tov8xZqvKBreZH7Fe",
  "key25": "4jHAqvord72B5LS82PLqW1xNYtWEERfRP3ponUNNuX7rDaQDaVTVrQPcQB9af3FfGEQyQp4uHCpjKucfepQpKfLa",
  "key26": "r6iqTBu98Q2vou6s9CmTXh6Zd4SnnX6c1BdNDPKXzx4VfkJD8BYGdssnxsGFvcDgW1WfYxcr6vyi8zxzcGjWRP7",
  "key27": "EJPsUKM1RyCBWsDcTp5e4UtsqnrYZyZDh1R3iFEBBGjPemL7csytRZr9zjg1rL5RMywrwT7VD9EbYAVpjy3Vjmy",
  "key28": "4kTmJ66Q2sUWz2a9Do7s88iDngvi6vXuqJ6WiNDG3EEdo5RvKJ4FoUaYQnw4Awk5LS5Dwo5DxcwyikWiopVX9Uqr",
  "key29": "2Yh9iFF1BeasrpTPv149xUYo1H7ZM7n6MbQrHZma6ZxRPbZzNYzRCkQotH8TFq45hfCnVphN1MFiSE3Shmr7LoJT",
  "key30": "2aKnc3bpRGQfJubuLFTCqB5SmvoucaCHjFEYnNYfxDAsTZcUjqPrZpXT21TsxGfhzVP6N3EAZoLfDSR3zozdp3RV",
  "key31": "padNNb15Mb4w1XafMGRsESfCGEfdZriTkTnSBnET7JphdJJt8mfpGeBbNj5eipHaPjiyz8W3rcoYigWZQUurdtj",
  "key32": "5JncYmA2W1iWFoHpqCCizU6VkoSFqv5C9wRaPHbCQX3Fw8MAVbkNZ1VWcuCRjudJcxKg9ULGLsQD7ccC2qG2SjjM",
  "key33": "3jYJWvyjg2pfbgs2skFVeoNLjEkpSTHZB8D6Sjt4XUDge3bzjfCVs77UxuYZJnF5NmbdeVEGCVvb55ypvDE659hd",
  "key34": "65AE9FuZrBJFRZF5jUeuwKqEWfgUoZ7b73xPEGHnBDrnzwQdMaLqpMdH7VebkHo722VH1V5fnWh2hQuUEAkqNALL",
  "key35": "3cAJekK8JeJQtpvnWt3AfqjRk85rRZxFYsmBjbiYdg3o1BTXtBbkRE5VhEejXgEehP55XjffUdTjMQUJCW85unwn",
  "key36": "4MvGL5mrs6RFF4A1MPW3rJfQhSxHCiCjUAWTfm3qWHzMx2h4tw6yb5h6utykK2RTRGyN6unqVFUVtk6qqn5ab6SQ",
  "key37": "3Sk2q2F1xsVYbpWLghQL1V3xsHgD19A2T86CHNrNoe4HS62o4qswCvNUqstqSAPmoQTGDU7kmWKh29MTZiwRpakG"
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
