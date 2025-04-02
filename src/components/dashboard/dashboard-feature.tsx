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
    "6T6HXST6hnEycCxLgVkmxWZrusFMJ1woCV6Ro7iUDqAxo8vNBRkztN2ssb9KpU7t4n6pBxTMTiymUXehC8Zjt1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZqhUDVmXB5rMx7onbeQLjBao9J2nuQApYokDrNqjoxTCWFXAEQNuVL28yK2s9EoWHcBpPqyymRVuukows9qczTn",
  "key1": "ZZLrV4EhJeuD5fd6y5dWveePrQz4H8t4c5AjynNSVrgWwTnYnPwYdzVDxgJ4MqM77VpBmsxVgryUL74mU6A5iv8",
  "key2": "39mtoL8vK5DxkJZ2HPYSJo9B2J1Z4CgR3Ty6J7PFjJ25Qg6KcUHgoxYWvhMRsVGbPejmbubTNmsLHJFWagx6qnur",
  "key3": "2eP458r4EU4Y5aiB8DKMaFnuKrH6yHZnrCcSwi7PeiciXTPJ3R73gNuGnnAgZLdjBYYDL4enYdpw7jLzxtE4dbHz",
  "key4": "5tcfptGRK5xFeJFE3DBkS6GSoU2yZMtrmgwCW4TYAcYBwsnfTbN9vtycndUNjduo6czzoNnMsQPV2hHx45xSvMN8",
  "key5": "44ojq5W7oGAvogkTZXy9qP9cvtwy55hzQj4nPxgAn57eT3CKtWpjvsdhYWjBxjzLZ4uXKB9Vbf7VqzR9Xtge2apy",
  "key6": "3zgf16dkaFiukdUwYsqjq2CovHnDbgycRM8KQWg1gLvk6KFM9wKfHL4Z8hGcDm6gj2jFXDHZJcM3k9GcNfXdk8ft",
  "key7": "2Dih9XkHf4rXJwVDKceGD9EgYdmYaRhpkhYN2zZNmweMuiLPm7AxJGod5h3kzr6Rb49ezJ1fCkAYwxXHnhNLGzSu",
  "key8": "3AT5q3FcNprRvuh8PuneN48hDawd5R9MtNqLv9wbTwjA2vovdRZrhwzwpA2Y8wb4egxP9dgEAXgtMYFvNRtVp9GZ",
  "key9": "2BqCNPLwkiREMKZTRAJ6p22DJBBdgD89Hwdp1m2EFmTzo4o3somV72GTvKvmkXsT1MCqn4948UNfWbXbTzXHsQCD",
  "key10": "yRyKTBsA4GiAxwqFuKhLEvtaF5WcCSHSuKZJkEq1yQmAzemLdP3gmzN4yUNdNaW2nXuQ64AWfSjochFeMZPiZcm",
  "key11": "4Qn4mMVVCUY3ExySyjrfo3SjkH6XK8xr1EhuaFHmuz4rJwwpLui5MJ4uTpkVsH2hQa5JASf19htdFBkfnQDXbege",
  "key12": "3Uy8iVgknxofDz4Yoq7N8XcjQXjzXoAbeqQQUBn8C7VZ794MuvdcG8zDXpnMryt63rzvFfrhgBbHhE8v4cuWH6dR",
  "key13": "6cKyvdQBr5E2bqqY3Lfg1e74Tqu9Z7pPoXkWJM5VP7324oUg55pxQVWf8H7dhV46NGPD76uamx2xDxDPevtksKB",
  "key14": "393p5ovjzr4tP6V7JLw7BDNb7z8gRXnqjUQCZDJcxRe9zt3khh8wY7ywFWtCdZnmQCTr6XhtfyZEXGgpQYnvkMaF",
  "key15": "ddQmTtozAUwKshMwBW4ZDFiW3ryqSeFN1xNeaxQMrMU5BngPbrytRpUtyV7u6c4Gzpyp1xkS5JtHLqVYzscXHpf",
  "key16": "2dpKQ8i4ifSPHEMneeU6i5d5h72wCEexPH1bAm82PxTfQjPQtGe1sVS6gj2xnozwDKLtLZ6Qy3VEQDWwKNyrXkTA",
  "key17": "3k9inRE4HhfA7cBbx8peimDBikSTzF9p69HqNs4t9r9bVPprVRmvb7Y9dX9SP7Vy7EBqXRHeVHs1aFxRMW3PcGXL",
  "key18": "4PS36ofsND4RYr68GRJixVAFxEc1zCH9cn1aAxhidMoDBRk6tMDq3yY2P5XpM7vkZe7qNKV1mRfFUSS8bvqBnxUP",
  "key19": "55A1csDCYrfVjbVMBUfTGJrct9enwan1afHRQykPMDXyPqn6BcAwfcKkxbSptJMBpNyS8QVbbzQwUdH8KobUsx4M",
  "key20": "3hxrRaHKiWPrPWvaHxnJ6SAMv1dQmFEmXPpPZTWVvGmEZbLbTrxK7HkRxnTdgVTejZGgKMrjaNhwCmVF2viXqAsA",
  "key21": "5DnysYLukV1ZpLq89y7gZpXVPSEAnoTSfubXRt2TH7JLP7P5EmYswt7HiLHRmCnvUdirbutaDScn1Nqsh4CuxCwM",
  "key22": "5MkhVMnAFLammkb9A9uqGw7s2YYhTYyjcChAXZFLZXAjWXvmnvmAfjo1LaEaGTqWgAkpZMzjiMaKdvzhFArBDaRv",
  "key23": "kWBiiTwsmmLXodGKGEZbvwwHmS5bpdN2T6gumityWHnWXH2oRCqKNznu8ou8YSp7xKSQKRwy7RmYh2iXyZHzdNd",
  "key24": "hmNYCmAkwSc36733r2FDxvqek8Dkg37EGKqCV9xJA3bMqyjDM2PiGcYLr5YPi5nxvHgQQDAqoWD2vRsYuxs2FTM",
  "key25": "5Np849LCJhiouVmSV9Cu63TDeuNa7Qrj5J96EWxXCo2o28APbLEbstHMjACqDEN8SUdbyUdbLduLcWife6yn6rc4",
  "key26": "2B4UwxBcCz7Uu1ALgWn9CP1TmazsbTZye5ZTQTK4btSMChXZKV47RAtbb4u5t5TgMEWdBxMiHsWTzxhFwE4YUpBR",
  "key27": "dG5EvUypHh7qKqRMdZKRtjdRwS7x1hATyfCv9tM5JaKRcAsmHAb824UjkUncCH359xSpBJePmxGchkmFyKG1um4",
  "key28": "8KJpcFLMVaJ9rLSg9pWhZ1gN9ymXKXfJP9SJUmbEpeoDczH9AebL8EpTW4GQiqzr8BJmvqBNG9yy5CkJ9wdeqMG",
  "key29": "217mF6M8auPPnSrvGa5hQDFQKSAiSUfHK7CRFkThXNVZaRW5dp8P2vEPx9cVpCkcVcxSjqd45ptrT1j1tfHsCdDv"
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
