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
    "5VTmviZyhhDz67QgL9RfAB9eHBqcmH1DjSYtqxMgbkwzUHKWkha9LrjcsQcrjH73sczLbNV6jBtkHhpC8EVG3qBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MKkUtFwm6uYnEJoNLNM4ywSfzmmkntU3EhZT9VKKrwtgymoSXgcMXqN2PRC72iyjLtSSJmfhc4oCzi4enPHFCiA",
  "key1": "3f7cTzD2cPGTGE4QcHMXMR7PGgjf5aeTj8ZHfakQEKsUNmnRLCTpY4bxBGvJQqvTaqxhqRxuzyrn8UfhYSKjpCYs",
  "key2": "4Le3ySe666K9SvnWHYegyw5LUnvDB8tCG6VHusa3NYq98JHzA1EujrGKvTi5iLPw1YPjxZ8fGiVVs9XPkndForqY",
  "key3": "3uiGJZjRs9BzQKpXtVGpEHFAxZWAkehk8dMXg3GCFcgswEniYYXZNnsYGsCPHV4bAmQVxKzHgYDr5LCaxSqknZ3N",
  "key4": "3MzTt8SBEgTJHwyACkifc8EnTgJXZhgT6s5Jd3jXGm6p6BDVVmiVC5WygT83PLBfQG3semmVA4Ffctah2TjW8zoV",
  "key5": "stoypARZTUiWAtPdanUQX5bvfAVBNiMR6WPbdp323aqQgxcWxfhq5Biivs4a2fA15NpFj47SdPWiKx9zmUZTQPR",
  "key6": "amvN7vdqv2e4ReTEFBwFNm6yu2zUHXUCzgdbPyKSjZHv8GAN65UAnfAdV5jfZaLUuyvKemTGVQsjRLhwexsjtpo",
  "key7": "3Zgoz1nzxc1cKN1cs4wLBpQpN1quCncC5K2WaR91JLeJAuuzsQwmkhPezFiz9Xc9L5UzxjuWFtD1jvi769HZeEC7",
  "key8": "5KCcZSWPpZoPJhzD2PxtCAR6XRCDwv4ecyBqoQc481ZqXmNDfYdwCV2uQkwhVZ4WPqqL2Buw2EQxyCte7p5bZ81j",
  "key9": "3urbDJb3tCg7FuufBVWtJab5BnBCfBazk9ybftE4wdEznv1imgFjVeCWUT34SRwUk6AidSJ4AAYFcTCxvUkxJXpd",
  "key10": "3GuprsHaXCzjcUmPkjRnrdpPLvUUgtKQepwGR2BCr2oYXGwBQq9EjsMjF73PDqWyHW7Ltywf4S4gasrEHcZPXbEW",
  "key11": "5uCjkTDYGjiUWgGHiWrUxzJBh5LwjBp3LsUDefHvSWwbmweKn2PGU9aBEvpDzvEvPpVSbcvnmmmnNiLpFtJf977q",
  "key12": "SmLRRmtGV3R8dN9AZcmY3FBU2LAPtC4w2JM39SoF7BBZf2wpSiJKYd3cXP6wf8dth6KwtuxSyCQQrFdmeYWkSAf",
  "key13": "3L3owHMBLwJuXcApfVQMMjJZ6zDpuTFUJ5ddephHRMpWPiadERBedYXbtERH9tprcLxCmrP723T6EPAnuRuHsDfk",
  "key14": "5W18bzzV95CdFcHSRLCAsNskirCLj48Hg32BnXWN4fYTRkGe8nWju4S9XDiGXicykpkYJYW9fQCtb1vBobsjxdT1",
  "key15": "4uWQV4WKHNAPt9hRNdVtFiQLpDta5NyuY9BAxPiRmiZQUgmkGtbgUL5wXDpaQkUGRr1mAJQ9oBfJZKNs66zfZVXn",
  "key16": "26TMNUUmFkJyTjuXkMH4gyrV8XNe5xhXLDT8JC99sStbJ2dow4wEjDCVSyR6mzeGvC53kt3PQEYys1k1B8GQtqN1",
  "key17": "e797drpWg5s17ydSK6kfHdvEJbRyY3E9un9YuF24qSQY2BQsYCr94HC87nB48daGa19bACWhDXorKxAG1nb3S1X",
  "key18": "9yj8ZW8Tw47Si7SVit2C6EJ5UGfyTi13Xwvj3QmRZ7GaBfR9kxsEVwvcryfLapQRFt1MLPSk1NDuuYtDQRWKnmF",
  "key19": "2s4XdxQuM318ikLmeWKNgeuLE1QoX4K6eXbos4D96fFPWXdGkq66pFaXTgukegXDejCeCDEXCwLfZTrZBKAicDPK",
  "key20": "5ciKbry3Vtt7HH5nWXFqhZ9JvsaEafNdStM7PPAv6UXPpSm7PC5YExEK8iMaKnXgGGEMNU6LyrAjY89oFPUuAwqk",
  "key21": "gfstkeYTUTqKEu8uV1vSuBvqL3CjXrUb2tV1s5C1VUCPTn5MpVSC1rv2eNSeD228omCVcXhEzYnikLF3QkLx8pY",
  "key22": "4AtTD6Yn1mMGnJLWNxxhstMxb7DVQueCE5Qh2rc9kysBt9dnZPYdme5yfXAzohfNJhVuP9eXzcaAUzxZRYBEJKb2",
  "key23": "547H1vXduyLd85EX3HN7ecaJvPXcv13i9oZhbZFnnR8MWLthhbNfbqDSCYQFivHPBatryXTHPpscjPqktipoXEer",
  "key24": "uDEKLBdtv3t58cKuTDDQ3pxDvdYBqdZy4KcbxZyqw143XSUKmSHEHmR2pkt4SCDMCB87TGZMofQt2au4nMgsXzj",
  "key25": "UMCWucV1oUgrbjoGD69ViYgXZGJ6ZQfh8XdhJD9AtVmXcJx3rPAxn5fVE4FDDwuAeDtFKPBRGioYBUbjEJakavn",
  "key26": "4wYu1e8vYtBYwU85G2MS8ERqA7YgdEmHc1EJdtcoe5wgr9qrcKaQQabveXKtSADUgd9x9JGwhVdpiqfHMkgewsaU"
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
