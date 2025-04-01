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
    "5cMenCfjG7ZfjxdbJhaGXy3m5fuMpwXiWbJDz7ened2x58Yce4yhB8b9VSpJa2PKHCmFWf7yqgW2387fywhfhWgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H45ALYXfisopiBfi5EdxYYTYmBQd3mitKn11PB6uWJ2W8mNAeaD91SRKX6PBvJwZcKvtgNM4Xbdo9tJXhhEoLvD",
  "key1": "3w9kFWtSX9vh5Y6rpDVTjxMPE6SBnK1jY8G1HajQiopHcxFu6rJPMkgLonqMQrLLY7qTWLZ3um7SZ4dtbiVzzuPG",
  "key2": "4N5minB5eoJ233Ymij6Wxe2HLJiFfSMGwgdAeseTbLv1HoionCHvSg4nnxuNJap4VY1yNpcWK7tEFqRAgwdirH8s",
  "key3": "5HHVp5JKF3RxCrvhyycHFL9rvatXZBgzpkLw5wCkpcAiWtJuQKK17cdzYxCkrvXW7D3kabHbh8SEyarHyRNMmwsW",
  "key4": "4J7A1bCNmU7J5ztZzYbVEjVGcCjNtaZyewq9SGeJocAEtEEtTYvR92k4HAxH1TM3oEB7bhmzYnmMX99Y21dt6DgB",
  "key5": "Cetffg5JMvMJAhVe8Q1K8LW7PGsm8Vfz2G6yYnQjBcmwHXcYsaduFS5nuwPLG2Qm3uDiJPbMxoE3Y5xFBhutZAT",
  "key6": "3zhq8Ngsp6VMiex58jXfbpVpeKE7uAU4rDGzH99Rtwrh5aM9L4JBoY3czmeQNwDehYJpkKuoJ2GCMSM3cYUj4MCm",
  "key7": "3V1VV3DEJupP79qjgshuLUC3WA11sGZiEq1JV4bnPFPnaX4gCArxsb6kjiVecrChCVS55CeJbGfZ3fiHTMZtrqZG",
  "key8": "3UFUPcrikE4KwaDgmLnLZKDVVknFh7yZiEy8wDAVckb1w9gJqQ3d8xG9MdcsZBKrQ4ghNbxRCdNUY4maShD6Gisb",
  "key9": "2TnkMfgYUqdBV4ETenh7vXVeDSkQ6wQf7oeAKGTKJZfpREdJVoWMGLMBTU2dUk78kQbgiG68TuT7wweCipiCz3Pa",
  "key10": "29MrZ7tLv2eHPxmhKfcbgcXv57urESthYLDs1S3s9AQ7QmY4AGEmAHcYMoZWYvb8f6PkUUvRnBYE3jJCCKH1K4M6",
  "key11": "5dtgtnfQH2eBRxXR5FwxtE6uRYfz5r8jLsVk6J9zpkHU4Z2TaYq95Cmy6oMscV4Tmicvn65YwRGSrNc3goJVsJy7",
  "key12": "bvWvyaxsY6ZfZ33jS2Giu2uXZrfjjjov38qdYsLNshSTj32bVMaMvdDQKqjgNVG2pVAiw6Xr3zABaos28rpy1Ax",
  "key13": "LaitHCw33AKS3SvAuUd3VME8sDoQPsJGjDXCPiri3HQRFdrXuZVsphy65bVvDZgQTmG2YHmwwM4RFCtMbgcyruf",
  "key14": "4ANUPqS5VC6rHksmpwRTZp9xiFDuTrJ1HtUak9PhRpGPHq3qdUDzkV2HSQdQ1FBXsNJ2w75LVqeFRy32VHD4mY3c",
  "key15": "3nBccR2thvCNefkqZUV7kQZnFz87JtvbNVnX1JhJ7gTt7nU8G8y4qD6wDyxbyJGeTaPdjYGS8PgfyexJcaDbe2A6",
  "key16": "3y1jzVQTK28KQvRmSeMesVf5bznuSWzWmHBjmk1RkJ5ebsfjNGsNr7KxMqBTdy9bUyWYefYQUADAQJsYdoAh7Ngb",
  "key17": "3uEinNXAJAb24V4PcbfzKByKotfgRbKZJ8VnVJxzt337xWHyz6BzKFcUE1JWirp7M3xBk1oSTCnKweTSa3w7FWe6",
  "key18": "4UtTzMyHiP1PnPWDXwqLEkDFANSosknzPovzE81tpZp9QT5psxti6nz7W8z2RvttU8xSeSw6VEG2Y9uM3jcLrgHt",
  "key19": "2QP5JMJJVAUBRSu3SFhMXrrk3rC8tFRMDbQqzGN2WKc1QQd2cEAE3Sc83UkeB1mxr2F4cjpqk1yk9K65Htgs1cNr",
  "key20": "5foDj5CoH95AL6zbQAsfqVffYi9i9rV4G9UjVvpMec7tp4StXiaMXBXxJQJFs47M6h5hbjUARAuy9NCZhLEhXnNo",
  "key21": "3WjnAQjicYuMgH6dcZzYbkL3t7MtMQxHXbWM4fTJo7uUdRU5d8tYBMaoFtRfG3tF8MZx4TVR95ubfh7fXp88L5rD",
  "key22": "2zVSYZoVhjg8Ad7NoH2wThNWGgRnc9notWN8N6qjtGDJN3SQpAAodM3iWbKhv4NWz6S6M6Cv5PgKhia2eqJBS1N2",
  "key23": "5K9de3jmeAg2tLu5uT2GWVgQWcAMo4PV4pt7VGmgdqd69SdKqoaRwW9qFWVM4rtv1JwCRzCo11eK5DSi7azVNQDq",
  "key24": "irwMrZfyhQMZkAmaNiDNeCbAE2t4ZiGGXN5J8fwd3bH9id7CKkAEg26QBRYNXzmtjvYnrbA3jRsSCNNCvqL18rV",
  "key25": "3m2ni1LWV5MTnez6179D4P9RYZhnPqxqgycAgJwPFDPANVwUokLNYNsMhGUETMWJ73q7io1dbX2T2P6GXKhebpMJ",
  "key26": "3E6j19E3EhYvNeD7y54pwCJgy6E3LsBX7DYxfuKdPd46VsVubXqUKE3rFbNF6wfbkNaerz7G5YEq4BjbLzUgiCsV",
  "key27": "4YEUaP4fz9jsV9YDJEvKBEPLY4USt1eG95KkfMNH7S6KWfcL9f2pYPAN7fbkthPNKhVM5UkbsU6md5di5Qevjgo9",
  "key28": "Ua16qaWS1uSnCCbTQCuEZVQjpa2YwMKAwHFCzTjouf4JsA1kDPQWu4GfEGCjHfqxY6p9XEjA6nRu8xqsXLT7ASE",
  "key29": "2gZfwjZU5udBZuzA9WEVtyobvLsu6zWr2Bp4z7HSSjxuQcoHrvjojJp1VPKcKGCD7pE4tFguSVUKfSFuKHdX8VcG",
  "key30": "QqRAwBYzSeeUSUrjRLvsWTUhFtT143kzXGFt9LQSrip8iyVQaoMnYEuQemgdWEZA6sgPKMS2bADd7obFguUftkA",
  "key31": "4KV5Zn4sas6BF9a7aw6vqt4AnRyEXLN2aPm3PSy85pGTN2VHxobfy43WgveVzwjyGqLAtFgyH6YY2uz78W9eMwkM",
  "key32": "5G9SZYgsKEiWD3BnmXafXhgQvQ3NLU7PMF8yu69LkebadShM3i8YfE2CYHaNcmo1bhmLMkuLe1hARxecFJ3jHgsN",
  "key33": "354scs1D7rDgqLR9eHPPScfhVB13HzHSv3V1z1XBvRZXFVi7cb62g9a6zncCUwaTQC5mz6pmK2i8dnf8hm2HzKeM",
  "key34": "3BpKbxMBKS1SQ4NJLsABremjZFu1hRb6ea9rrTUfddKPS5D7BJM6hsdsPbGwnqVh7uQ9KPcA6Q5vB9WcFEEMNst6",
  "key35": "3McAZAhBH7Bgn6y9cxZ2jYtxdbpfcRGsoJ6DkQBrtK3ovVVAtBWHmZkbFzxkRLH2fbbFAEZKAC7xRrGfWonppA3R",
  "key36": "5xPDLJxoLnWg219qyRwy27xrKxhXmJyXz1MD9wo2bihpyLTAzZ6BCuWQWiSX96KLRRXVT6wQdNUZiQ2ks1P96aqW",
  "key37": "4e1Xb7hMG9FcBMsLP9ZF9h4gk9tXkjw95byw1tBRJDkHh2Nwa82dsVa9wca4xGH8RbjcbwC3EXwsJZaLQPyNZBzR",
  "key38": "Zo9NLNwceDMY24rdrXNB9nAGNhuWxWttxCBrtors6keHEtQE5tstE3VgFcfpbN7QXX71e5mmhcBZcW1bYw4BY2f",
  "key39": "4ThRXyCN5QbwSCC7rnNZvTPY1yy9o4SSqgMH8u9wr6NV4AFRDsSGVvu3FJ9eiXKQZyCYfCvrxmvu2WjjV5r2idvS",
  "key40": "4tXWWTRkNq3d4PRknXjW2qRmFGaA8RPfBw8tNpkEqtswFaqPzRGSFzmh199Fy4FStWfLahV7uRE1P2VVWtcAadRC",
  "key41": "573MGBmKX6YzhDpmTBoNR6B2L5UUT1S6b1LpMh6Ju5RyAcVgYFHNHHDSKb41syzZVqEzRq36KB1paV3RacBC1c8f",
  "key42": "2jfrTb577MLYnseq2vF4HXv27F9ji1zxuAyxjsYxKBqbMHz7iqBqbhajTUwi5eCmSjTPZjRbdEXiBFGH98RUeQnM",
  "key43": "4inEAHRqEzR1Tx9DqZ9eUZPCGdKnyYRaUHEq1CgoCqTP135sywqZeBe9G3riScEzaEJRhX7PHaqAYRSnFLwu9wEZ",
  "key44": "4Pz49H22fU9y3MmbxyWAniM3vywgQwumgz5gYALFm4tyhPVPmUr8CDnHhrBdDzDoMizrqm8b5sVPQ8ibKHSmHXk3",
  "key45": "wtT5bxaykQ2gugoDGpQDNcsZ2z8ddGbmaZhM768GDCr1nzYSt2LUkZTNgwB8wuRPZPfQSCTCqQefBxRFhhs2xsb",
  "key46": "617UcgrywwoqGjLTM2t8ZxpRG9Kg7M3EUYwXS38qcvwM5RNyUbDAN6sq57damXtqTi6ZWSBNMaHGyhQ1KpUaUM24",
  "key47": "3BBagowkhh6KhH8i3GPC6kWav94Q6GquqcZYyMuqtPh8FnjZ8kehZ2u27joHyq13d3jCH6c8FVpHUjGfHiXQj3Pj",
  "key48": "PmXMY1G9dmsGCzFeRgPwU65RsLhD56hnRJcVmSYZBkWAJBrQkczaabunsNuFGyg9rBH6Y2mtDPkHDrcs6j5vhcA"
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
