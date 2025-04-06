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
    "2pdSpd4zRgzgEHv8YJXP22xeTDa3Y3SdHvxGRYBE2D6yDzeFjeBvpDuo3oCbgF3TfT5kPZDRTNCo9rrrikegWZXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ao6ei1b82grN2Jaz9X6hCjQn4PuZjDn2vJwCZXz19LDYFMkS7XTCa1sPAZC2pfyT5srnthvUF4AGnTmnPaTWxfh",
  "key1": "4Zr9KH5Ef78Ywbakj72bF9y1LzE3nWJgu3cY24fMHQ82ZvxnSvemSmHU21cP68N1o4rsRc5LzDaJsyX3KRF5gZJ6",
  "key2": "2zNoqXCPBTesaP5WxoNBSfoct1z4GBmhuQWdS9Wr5cJK8tecCdFn1H6syZGLSreFoHE8d9Hs2sD3uPfzr1rBbnpY",
  "key3": "dLZhAqx8wbtBPJcNV5XFgDX7BAd2CPCiaig4LmSDWi1rKHHMekQUQxqCHoNKFmAKmGsftrUsWXDPXARx5u3e7j7",
  "key4": "5fmRNvS9QtJQfgYA1AStYQK5xTn7PFWhdeB49VqsTzqQ3Vbamx3Qd6AQSBtL9Bn1rBjdmBKXhVYFVRr9sLC4Siim",
  "key5": "2dh9fc4vFaAJH8BnW9KFya43mphH7FWGs9aQAUUGjrZabGDvDEJAjYgmWim4cviwN2zwGdMD5Ezua4Re211dctSz",
  "key6": "yERCtAbZ48XRaG7BLt9fA8QMCvPTBSwLsk5bfmh73RPxnJb8WxJ9jorpLchW1bMsP36tWby23rUVMT7SxmuVEaz",
  "key7": "4v6aRQbLrP7WUv9qNsUoC73TqnAZCQAkKeMG7YfViT3aiAnTeGk4HcJUd2UwwXMn169C47SBu7oZ3SE41bx6CHMu",
  "key8": "NzKvCPkoS7yS8GG7thiKx4iEPjzSEbHhiU1kE4ndb9tg11ULhL9n1G5y6GEqEt1rwX1NtJiGoTVSZdDxwp3zkYL",
  "key9": "2zeNEbt41BLjXZRhWJeVoj4f6VoJe34ZJyKdS3xYMoHWK87byK18LsRzrxxFnX81U2u9cmAJqmdtUNxnsHeJK2DF",
  "key10": "4Lhr4okNnHtSQ9pz7y5mG2sUprbJBkSj6phhoDG3JQXrns7e1s73Eu2q5cK1KFisAsoKH13mFSyRcxj3jtAUCM3r",
  "key11": "63PXKCVs2ShDcVuVW8KPhLvrumMQqPpkvuod6dbCT29KZpFWxQa2439J36pd3zzSE87RZMAkjQeKY4tpKvUvmhZ8",
  "key12": "2rM6NdqcDCgiPXPXyLbukC5ESHv5GNcGnMfurD5PncgVKNsBupjzLAVcvynYHG6FcSidnrMDEiTuMG5u4bucoeuq",
  "key13": "2ApjUyeshFQXrpKsmw3m7yvQNs4tixZGjbMCMchus4EPtH6bizVRXD7cmVzDqJZK7FWWiRukJjRNtRSDx3ZusYLy",
  "key14": "3TZJy1CxVFqNANqoe8pUUTAszzqKgkVSHh4nPXXignBMMqaZ4AuoBnXmRUjiWdmj4ePzbavDQXWy5s2m1TmhBWrc",
  "key15": "41QJy2dvuVsEFBsDPM5icLc6gcgLkyX6VTWUh5pSneQLUqvrt12wcpiPgu9gr9GjF1F4jARATJGbGN24JBcp8PNx",
  "key16": "YabWmRDyGFKJRKr2k164Fd3hjP1Tx2uhN7BEss5WuAnRj8sBXJs3tEccMJePSb2wyNn1kPQJCscXtxzNrxBrMmq",
  "key17": "4ZBzsq6Zat3YTTDSCso9NkcacwqCbR7MTYNMx9MguPi8RLG4gFEpBqf8skxsnBRuKq4JQBxeapuMagtUsBYsbs3E",
  "key18": "2DqcMR5JhxXCiMMf28W3ZxXKXdQe39jKRS1QfgdxULhQrx9XTFZg2YkLdKJKmdhaRKdP6FPTTBH8koCUFmTsANSj",
  "key19": "4pL992GaJycKhoistFDBLGLNS3S1rHjXyK3CVb6JsaSAisEhzNEB3pG4xexv91wpt9WZWrCpdiooEeo8AMNcxvUy",
  "key20": "4WEQtx8Esvg6skZbEGXApAYFawA4mtFKvcw7XDJsg8sZ5LWrzPuUUw1HXz1Hcs7qiFAqRTD3qU78VdkKqWrwHPg",
  "key21": "5ATG6pjQM4FRppcAVVtWZ5B4DMH57kNdUxfNYi958Z1x3PFW3Ff87YBEe8PqzcNYHSWAUvD8vtyePeuXz6VLQdwi",
  "key22": "2n6ffoednHgtF8mqSMdjiSrFHyu1YCNeLBiZd2qgth7ZaL4PiC4FSMfbGpsywUdtsGqYzDAobJQQGc7dSoR11uHx",
  "key23": "j9aC1jG9gmwWEnqJ5iqXqNJAJsh9xoCbNwii6UAsMTRXzH1cBg1kcR3bNWTnpAh8Z8cEqZFKuSsEphMPrSnojUj",
  "key24": "3yvsaNfCBmsryVBc2gK5YV8PC3NpCHJFTTbi4raimBTkgyYumBBXGMpgXgvrYomBC6Kwva43jqcXxWXniEKmmEko",
  "key25": "H4oZAzWinmMFvqKMVshhZF1gauNQjcC6hnmot3XqMFkyghCEkEzDVLUEe3TpAVerN5HZJcyiK5svXMmMoQccsn5",
  "key26": "m63rYiNRwqsLNbskGUPCkWTodYXhWJXhpAELy9gaokvubbnQV7W1sEAnfZi2hRh2AUjLzBXpt18GC43iLLFLBGK",
  "key27": "5mbbqafzZJ7sHmSE5553GdrQtAdqZuur59KHpzZ5wPPsVf1Rp7Nb8BrKGqPjbx8tsZbp64tKHjm9xJjEc7f6PYbb",
  "key28": "29oF4NvWSvCU1RUsb7vipvKbj2apzhDdgra4n9LxuNhJkNsSxwL2eWJfvLAWUPdX8RxsZna8iGp973wWuRabgA38",
  "key29": "4fxF45PyNQRonMAPGCkFZqx6ZNhnxkbmXET2NQWmMnqZBLvifoaBptsQxh8Ta4fdikPGKzAD75c3zZHkKYWN8y1m"
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
