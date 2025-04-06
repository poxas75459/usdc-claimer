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
    "5kK8FDiau2WMvMgmXS6sv5KKvWo6tSHNMufqaED7ahh1bt2Giq7xqjJz4a7ioKeaMtuDcgSJ2WVjiFPvfHvrmJMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LhvjiGatdpEEwNUCKSHVSYCjJHbqg2UUL9QtFPiAFRXk8pcubY1bXbHCVXpsN1QrWpvUdbn5HDxz12RodPBCTb2",
  "key1": "24j7rfMFaNK4p33qeYrMrcMo9AuQYTmzoJe7ozLVPCzLpkzuyRFZ4S1ZAwVjmHuLKUkrja7Gt6AEDb32FSW5FfkA",
  "key2": "38WwH1ecS8cQH7DQZqaQtuNgSJjo4BtzN1cPwGTnK7p4Kz6PF5ZamEv4QABexPKZ68A11A8mZ5FwpFGjeAKMxFau",
  "key3": "2R8PQhaD4Auz4xx2jrkBLxYwiXBHsvWAwichnM2fU54MBTsDg41UBiDhYbiZyY8uK9exKVD7FRfob4CCUhUUy5Gr",
  "key4": "qaGhDuJqXaGkUAX2F6iRq5m317Bb7sr3zKT44hRrxrMH5o9KkqhyG9w4JqBzWB8WyxiUS91rSBQdzzb8ozfzZjX",
  "key5": "3w7kceCXQW87BoQfVhHLbsspSae5g8mJe8gFLxAFeLHEkUG4evo5neum7WvQVLPS6WitYBF2joEwArDujjixKQUa",
  "key6": "48VomNg597s2CoGdPHtR7mojxHzfkhrCv7mQtJbwCsbTtVnBS84VWYVhgcuEBQywKz5Mn7vmX4MkyVb2v9xmre32",
  "key7": "5S6UxNmTzu2ZVMKE8ojgH9XZ4DjabPZqB8yFDiMEnbW3KNQnmyW8gG9XgxXiDAnzoXzKK3rTAxk4Sv59mthGqdMd",
  "key8": "3in63wEEXfcvyKjQC8zdcEBbSzjGN5WPxNTBpPM9pim5CtvB5kCBKBJgywLWpBV3cxcPJgCMsHJkZDtpY9YG5Zpj",
  "key9": "PvtcrFRpUFPnq36k2nbPN7u5NC1nvXGseGpxLiZ8c4pixo5oAkqzNviGwXGk7yQ2EKSSYfRNwHFKm9t4EqM3iYN",
  "key10": "3AEQKL8JGFJxcKkG4omcPAghNtzxUDHRDABLM9M6p8wyHiACg6RYhL4mwfBVek1pseYv9KdJ98a8eGZrpEJHkzrj",
  "key11": "wJt9iUAaWGjCFJRoGeZhkEEnW33AwhspEnTQAqRD2BMX2GMJPTgW8DDFwW7DCQoUgvazwGjamg4SxrZYgh5R8p4",
  "key12": "pmYiymMAknoUqTRe2t3VouKo8F7bCWG9sLTXamJAW7LwBUDMvuun4ZmuBxVzZdDk19HMsna9PL5vqjTv2kdfLuV",
  "key13": "4qxX6VvunRRaB4fwk6FpN2FxE8vSTjqsZocRZQv4q53AnRBv2pm1514mjevDCnDydiAwHFREfhbc7DECLg3YUGGh",
  "key14": "2a67u5UbEERR1rvV9BJcpWfyjrD88jb8kfUtHEAnLorjCkfX9gyY9PLNEc2GVkAQYqUVQFH3P4XrqsXGaR5r1Myr",
  "key15": "3vYdtQmtBWDoApiNos4wNuJ3B6BGLW8xSXvogxxiT319xRTQ4io3N6njGhEBttAXeejt8AjX6tmjJ63CMKx6Db5x",
  "key16": "iw9DhA56vzpPLSQSnH1qwPTvkEjnGktKr2SNQFvv6FLhDufF8PrqKqNUbRSVNkveVtkTzddP9TD9ZmWUbeshYEP",
  "key17": "2NLSDCbbYm8TaRNkZBhCPgAzYDiSnXdiotKk58gEEdRvMX9CDNdvxZPX8bgHuZ8p9cWNe3cSXLrJruuh2mCveEY8",
  "key18": "5pNUogxu8Bk42SNGdyteJmfuM7PtLx7C83BWwVuDKF3QPyA3Y9Sspk32hkqPigNyjXYJvm797emPTG6rqEBFNGBT",
  "key19": "3z94PRwXhUwsb337P6YNK2Y496XttVnBndsLE8RhxggndM5XFcH9VLSpzshkEqYnnFxz47nYXCPJHQjmhAssv8Li",
  "key20": "eyP2iUiExZtdYSuHzhi78MxJoe6qi8iUZDpMvzAJEyZNKNXJX7GpRnsvrdyARG4RiaCs1Fros3MeMtUWGYSe5YH",
  "key21": "5oYX4a6T3NgJGqNjFakJxMjR2SgRJwdQDC9ZQvWe1oSmdqxxYNFBvEakc6BJVDdydCuZoc8fucNQ4ooRfm6QcyqW",
  "key22": "4w5FW3sVvcQCToUqMVGiV5dJj1869and6MUyS1hfY3FXWf2iYP3nA5GVoVzJ7aGvxTHQZm1mhZAwgsET2nA9tQ55",
  "key23": "4qCCMyNG3wdfyMV8cFK6Jy7TNSANw4R1AHbPKCpeyJuN1tnKoSX7HDY5ejSkxK3b2rQEcrUJMcJ87Q2UvNxtSRmW",
  "key24": "44kmrG4SwmNemqAvdb2iJ9MeZvvFrfu8iLPTV4XLmhMxWqPffmS1AfxVd4KrbUJW4JVo6vw53WAz7x3Rbu4N6SV3",
  "key25": "NroKz34vMSWbErVrzxDouTTH2HQLsKBe4MMSpzAKWwCwRSJpSFmFUDDfuuUFDmq1HiLQCAuhUPkw28KKFzVoLLh",
  "key26": "85N2HvzzK5jyu9H6mDfEFcNjcL4zPceHcgjzTPJMBKrqDWLi9ZU25EhkK4wpCdmuDaCMG3VqHPR7vASn4g3WCXV",
  "key27": "vXDHMirxeZULnEm5AjDm1UTM2N7XbWgnBF4tNKjsFuUuMZcx44MGWyya3kNW94AAmfzwm9Aa6kd3yXtesDzrXgj",
  "key28": "23EGpAFKiNw257uS8BM1QGiNdNB5rUn3RFTohw5TXne2coHCJjb2DJSYo7A53VShyVenozgQ8oXPPEPBhTocrrfq",
  "key29": "2nnqEv8yVEFPinM9QeAnmeKmuWvghn8iDs9tvrSmERXpVcNAkefgWDnW4yAj3679KrkxQ1ydejSic7fku6LVakNY",
  "key30": "47KPeDXbpn1D8yrBuVXkjEK3nXEdDBRNcS18obzrtA9jKLYGdjJTRQsievkKRsrawbyfWZHj5hviLkG7rQt6Ns55",
  "key31": "5ChMWaB3pBFSxQMobDdMW6hJuSd49ZLsHS7vXEGJTCbfpHaigokzCFp6wtHvn1gSPD1opZzkKU3FLG3QPVCTxK34",
  "key32": "3ebekdkbHbbr6bStqiXyQK4qm7S4zpcyZosvjECMhu9qkW5NJB2UZK2fJ2wg2rNdRDK9ve7Dn8TRhe5ejKtQ5cMr",
  "key33": "3H97NdW35az1QokxqFZfeQ6teoY26eL1BiK7oNef2Ktmxs7XYCLGjh4wsUSPV97Ata7e3P1yjgUxPHpS6fp9asZJ",
  "key34": "29mVuU7ZHSFtzq3ecUffXNpVp9AR2g91B1QTTV2HyAUmjjfePtxy2B2R7G2RahiRZ3QWkniK2pnQSbzrpCu5UCaz",
  "key35": "8mSjGA6hgwEB7UY7wqYKHVXFQ2Fc91Juy9Wv76KY1tvdXY9oiz1Jy94FKVfd84rcggooTNzuGexssN25dNtwsFR",
  "key36": "3X9J7v6Smin9GVm5484NdioDcqT3uppuviwXFKrWma4L74UAUKRWMjvkkDLkoJ9RH5gsWgW7KB6Gksgeqtq87x2b",
  "key37": "43jfgBj2wLgsXJdfRC2PoShsAdmCvSnTRxDFX4VyRqK2BzVWWnPSsZPoApDrnt2nSkLf8hc18rX79RzEMXgk2BWj",
  "key38": "2tvRd85rwsdWW1UdWkvRkS1W3ndAnSvazXTrp2SFgm8jATPY8tYB2nwRgU7tQaGa4FfhEseP5cyC5c4XibKTVod7",
  "key39": "2H8Q3wXhQ6FUmg3Pz6QhQoeJmDuSxGavj7ZvCwy12t8W2gh91QGBjCUpz69YEAhy4vafiEZjyrRvm538V8dHgsEq"
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
