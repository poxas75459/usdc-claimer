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
    "XK3QA2xRK3GMQm9dxjRrb32HQfUQTqXegDc32F87L1oTU8ippCfoML7h9g5i77976zWeThuztVTRy42EQnLmLzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MLkYDS2oSECLg4wBP1dPWJhEjG49bgAeE54jKMBQgqfvJHAYNNfRSePyU7EUKxwkkBRceByX48xrVxFK7nddKzi",
  "key1": "3AsWChg5vMAC8L4pSbu9cQF1wu2bW5o3Bknw1PehxAWENJFT8EtqkPXqeodMC8gD8HuDTSHY5AmxD9JYCTpW1AXD",
  "key2": "5QrXe197DJd9aUX1pbBQWr8aUzhhxmyemv98gua9iLBjMsvnsFcj8vso1VGyoiLeRo3Qq74d5NvyDTKnTAB9ojun",
  "key3": "3Yhu5LbZ5qBj17vdn5yEEtQFC3eDrLf9UHK2h1ZMJqE43fNo86yTjpVdBn5kK4pBj6YCTpkqhRVSbcWQPoHArPkT",
  "key4": "2HMhDaz5Qf7aAn7x9wcufKnYcUXca4pVyvHiPdSWCG9g94PcnLbNrMRgwdeKUcgY2b2qAuH85GRSVJy15DQYJWVv",
  "key5": "uujQ5fWuSuR4fDCPqgcxMvgZBQ231iC7kDR5aPrcxXDZAsevj6LzWQKXe9h3b7di1HTQWubRhZ5vzDLg9Je271q",
  "key6": "5WtLMFJBTjb7w3FwZXowrLTHo2YRiRpDBGWvpUSR8nXxxm4mKuvtuBaq9DVz73Q42WkcqWPQ5vBgRJLZT9ZtQmgg",
  "key7": "42u39JEebXrf1Qj7wNZVLeM8fSLSThKDybNutCMgcgaHmhWL7QUULYFpeDysoHWQwaiZAt2rYreBPP3AT3GF6VpW",
  "key8": "3oFozNMuVWE9hzFuhEwBU9qy5jSR2vod4GCBNCUfF1h3cUxfNyzAsDwDxcSdNEqZwzEpeEuLUC41U1tumtchJXUJ",
  "key9": "pWFNg8Sdua7rScFVKoG1yxW5tDyhfFyDZ6v1HakRen74K4wGnEGJ64haHhVWsxWAS8RVnJu76AUWGPMcx2EjJKM",
  "key10": "25dNV5pUbZKNqcadPc5yroB6tRURcA6m6UBoqzqY3dKLGboDQ4Z6LYn6AckFXEzFWSwRRPacx7CcTPAqW48C7e2J",
  "key11": "5ErxzoeQ1hNZ9WWwBJtRWU6qrkf5Mj1iUA8o9jCVJ2g3Ay1MbQ718znBGTExRMAa8L4uywjLCHs1i32MYmbSTrFx",
  "key12": "5jvhtmrFnSU9ERUeiR6CciA6RX9KgwWs4rcgtZ8mZNNFXQsCxZ85ACVroRsH3hmPzFdiPdckWMzaMr19ZAKwoKpb",
  "key13": "2Um7PEsCzBAMJ7VDud2xe4kG5o8PoJdcpg3dA3g2NH3JxB7uPRNo7LgVR3LTXd8unhpVbzzNQKvjs8SjsUW9NtxL",
  "key14": "4Cp94ehxTgzafrCYAKjcFoRBhQ669nXFugFaXUP9ZpsgpLWgBVtY95oriZ7JUexrA9Z25RyHKW2fKhWMhgu2zscQ",
  "key15": "3MpyDKbDd1XpwiKWKB9261EousKRUtabFjwqmJ8KpQ7SXjEp7Q7rg2jnjf8K1uMHH1BWqfoBaSxdbQnUUH9NyXo2",
  "key16": "5FnMEw4JJJBzZgyk95rozTXiSmWtwgi484M7QgV9EwnECtEQjZELB51EFKbY9Ap9HYcSemamjoJBaL7jgHJBc1zN",
  "key17": "4UcQi4qdGg3JMu3AUetpNfh6wLkxUJQURw5QoL4yKux1ZUPkL1Nbu1ZUxmu8NW5tURXPtq56oa8oycWTpnWHqG18",
  "key18": "4UgGvbfrEC8dTDnjB32wTiTZpHiXbgzvS6hPxarig5akpfMH9oLcRVNtt4jmmNGhNmFpuoqjQ9V8z6HUxUsdJsyH",
  "key19": "hmYL6vmQiBkD2iZd5TFyaGkVCAs8uKKdm4PfEBToVCjdaGDL6rRezrCRcpDeM5ec7Th1UW1uzx2mT7tu9VEEL2B",
  "key20": "2wTdQocq8Vv6NtPvQRRkyhPLDTgSjD1E8Rv5RxFhW3t64yQsDXdA3biTKAmntbLy4mnMeZVJBfkZ48o9RQTYNxqR",
  "key21": "217QMq73ngtiDn3ur9Ratshe9vUzqEgqeaLUrXrBM3gDVAzf7JXCzbL1H1LYZeypsq297awqeu2v9wKooU7mgbhm",
  "key22": "3w9MQ4WPfmMVoD1zUWaczR5uvSJwm7eCduiDZXdJUzNq5t2f372JayN6AvdTDP2vfqkw4g7nu5EGBRNbuRaLJhQ9",
  "key23": "4kLiNYR1p6du3RtPqf4x1iosZoGgzJztMHHX9mJkb63C3vbjYdr17mBEq4Sw8fxX1ZfD79BTW9nA3v1MXMVVYsK1",
  "key24": "58ZJP89HvfhcZXN8vNzbfGRFTpd7Aabx6VJcqW2xamgZycvpdNdvKq2sbmGBEKKzyzjJMAYTxCq3USyx4vZUAKf7",
  "key25": "5aFJgsyvd8q8vPhU9wahsPiXELzS7acCbCTrkMD5yo5BgoWxSufviyKisH93CQ6onN6mgBtwmAVRzB4WNCNbrUbE",
  "key26": "5bx3kANbdmsrGKEcu6BUhP63Bjs18TyNLsG3QbZ8791v7W3dU9szVPSpF836siEbPMj7ZHpEqEAKJWYGCi8TJEXc",
  "key27": "2B3Tgoi1HPPEXnfvWNsBSqB53igpvwG3gmyudhyGYYKYEDnc9ctp9Htf8bkrerDY8q6RwhcmcmCv95JQJzbYL623",
  "key28": "62sNzgtoGcw5THCxtpnAGWFmATiRysZH9JTfLaEY5X2qbMsE4eJzZDJQM7FwhkFdihkchuYLw2NVa9FTwLvGtRWh",
  "key29": "43FRPcc3FpGtBAFArUZu2mD7R8QCkpVde7mBXx1nEa58ZrKjhzpgFwrcSiSGtfHb3vbiVEthTp3pfApjifWDFzMR",
  "key30": "pS8rPDyo7272frEFRjgdGkddH2uNEriSMHAVjiZkjnk3RtLwGCDhVqXFMxWyjnFa74exhKg4ZcJuSdJPL4JARLv"
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
