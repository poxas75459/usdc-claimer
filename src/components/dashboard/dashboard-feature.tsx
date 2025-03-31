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
    "285vCdM4zLEKAvc1o4SSi9w1YPkCuJ6NUxCxH7xvUg6Jvi36bgiEdSWdVpbZPVdwuwyb3MPH6P1EAH8X1Cr9chUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqpYtQX5gVJtiwNVtQdPGzTGjebm67HytNeEuwM1QYSJxtLeP8wFNxZdf51wBJRqZQFVQh9WCbpNZU9wibQF8XC",
  "key1": "7bW1wpHQv5dEjrR6JQpPEe3NzkpMNeTvqXqXBZjNkuBUCxvNDpeSmhhVB89Yer5H5bigjchHBtuesj6xiAcycCW",
  "key2": "2Zo9H19jLcrjnsBcRP7kpWKXbhKsjyHLVjUVk2ZQTRtWrvarMZCSPdvvd3LBwPJpLmXJ8G2fa1QVnWoXGCW5aR3",
  "key3": "TjXazyckv8xrF29WvZJe92yLjAVrqgWKkiRqiepZtoqH74tc9BWb6HD49r4AweB8EmjtHoge9v6rUMfoCJBfoCW",
  "key4": "2PscN4Cm6m2HJh6hcHYJSXpahi1jYpy8oq8kdRzY84BdMes7SidCYAjpG7YxAFXBuCnDi6hNy98iStXcmfzMVtLZ",
  "key5": "4nEJLLYrGQo3Pgm7XRSgx14UaWW9NGeWK1QLMH3GgaYvFvy6dreQjbhaeZr4kmf78kKYpYTmntouirXAapfZejg2",
  "key6": "4re2Njk3Z7y7buDTGWEa2MUPPoKcRtdofeq8HdskMo8oid22USNhYcuZmRiBxHe9xpxRvRNdp4dfHDh8E1gUNwv5",
  "key7": "3rYbCF9Htr9K33k9sfqgEdhsiopcyAsNoE5ZWGr4FEuZEyw6mdpc7oxeVnYUQH6ppiBsiXZHngGjxZpsePDr7rEp",
  "key8": "5aekvqq4LMYRhoGMrJCEagqeddiPF5kzWdQSqsdpDMdGVBQEmxHykHNCfFty1AsPUisChcDQKzanuy2n5at653MK",
  "key9": "3KshUrU7hu4iXtaBQQtTQ2eJ3kzpZGHdYd8aSmNmPB4C9Jth2Mq6oJABmrJF6oA7EjuSynzJEgavSCX4KDViYjUd",
  "key10": "4giTu2PrrnXSVgtP1CxBoe6PNGUu3ve77yMzsNwLau2mbr9MWLuJxQSDaYHCQZP4cQY7HQqwKHPBii26ovhoJMNP",
  "key11": "2p2KDHMkpgrrQPr2BoQvtFJE5hw49KYtsPgy8RfXKT1XVbgprqoisUdEkXxmG337fQjsE9S4fnUBopKpmMeXvmid",
  "key12": "uU5BSTUTM25tAT4a3myMJpHMA8FmxrC2bcinAAcQPZpQCFrgYTf6GKdK9hs2EtXDcokZcZFK6KZHpmJhF64CVGj",
  "key13": "T2uA68RRRmgs2naheRvZqob5JJGNonqNtruZZeN9DofJAk4AT8UznUjygqxQ9DK3XrAnWbzcdGY3Lw3iugga27n",
  "key14": "2HRt5bBy7nzBBGpUG5BHBHFoNGc25g7Apa5Dax92cVQcYj15rsHruH4aLyHP14MTiJbD3hQVb5qmnuMtCvJKYxWW",
  "key15": "HXRUyHygtUC7jgyzca8yvUjdu9jdSXTpTRBhZN7XCpfn83y9u83M8G1BPPVKXxZZ8qc2qHTLPjyiVbh9uN1DR17",
  "key16": "2ZQHAm1cJ8A42WBMF76Gq57oRMhFUNrqkzZnbDnmZFXn1P64JA58Xx4V78aj7usNA72NSa9ikSNrcnM1S6F5qFEe",
  "key17": "4efRpgKf8dTWs3B1iu8mQaT1rWtyR5sLZVcvCPowLx6idARWoQGY4sTNMGQLYbKPK6BoUHJdPiRG9EsfNhgrvdUo",
  "key18": "2NgcbZBLwKHN58NwAvcKG5CJbUWoxiXcwyZXKQR6L4tHhaR9MkmsiHGu17KiLeytm2FydEcBtvrU7PJhEdCypf5P",
  "key19": "2e4F4L2iTAYPvpAndjFMtShHp4jaKntQ76oHozXRkTaouWkJHAVjUGrzrMHQXCsK1Lmyp4nsYnEJfT8vaVf5QiCv",
  "key20": "hSbk82dftrjm9gCYs56Bb31GcKwRFYrsKuhPWGZiN8MUDv3bXRkMRgA6D85CStmzeuu4DCrdjYH7geJv72XCB6n",
  "key21": "hhW8vU8uaNse2HUhyhQ5PV28CcVdNN93XfbRzPE7EMwYpBkCqbkrsePca4fazuvp5ZadHrUNcQjZ7Up5bHaPPjY",
  "key22": "n9jythSk17qmLmcqL5nwtWUrmiG29R7gVLun9LTDTiHECmoUx3bBm97EBJXYCPCHnWAdW234y5jhnSA1tNXqkj9",
  "key23": "5JT53kS7is7eWVRTj4bLLxzjF4cTCtisn26rQfHGxUFvYF5ArvgYUmnQt1oVxgCzGLGDEMu5rxA2dYnvdJdcym1j",
  "key24": "4gsXeJnqvwdpmLr8wjh2cZCN2Nr71b4brGR6nNcSPGoddQZRfVCkZQpmK3vod144ckQ5sM1g1xGyXT6gHbnnFJwJ",
  "key25": "4XrtnMet92vYYfvQgqKY3DB9qAnnowjQd3aeGjWZkKbTC5AcGJxMCZnzBZjbzboXZsPTaNKCGnpnHdhVxRaxgAJW",
  "key26": "465abc2Af6WAgRerUeYfeWfTf3kGx5cDyan2Jh8Rtf6VcUtk52fhoh4oHcfPazMfzMgAu4MEvoaDFMc19TvahMCZ",
  "key27": "34yYMyVfyBQqU5P2xDMXVAKdDrbu2TsyPoED9EAjjPEbJQRkTF37Usagmsz5Mg63jJJdGF5VqpdhzFsr6EZopgx9",
  "key28": "5J9Vngbq7tuf4SisjtHbtbcTeFCo9NBhmV16RmJBZtPtf5DnByDZzwqkDjSzhz14a7NRrn31arj1r1QmXFfqZa5A",
  "key29": "4AdDk9SkDENq4frr43Qo4XPQsfgPexknybLo6Wufe3xbcHpxkrJD1f17dbPjKN8kwkqaGpw9dg4HAR3N4EVSN2hV",
  "key30": "12bdDjQiL42MLMBAxJYrAo2TC5D3uiu6HRKSRqQGh5RWf1izZ5gBdyCZ6TFFhciASo9i4r3A41BgoSDQjQqsJzU",
  "key31": "2UqBZn3CXQ6vCx5DhY7wkg1yJ9dZSVoxmKRYuChTuDaCDTBzGd8BpC5xA6W5tZkt6XqoBW3XoECCbdaFBwrb7L1k",
  "key32": "5W1zrXqTLujBTBaHzWAJTT1XWayjkVYRZNe4GfXYrWLte4WDF6YbgdFTVdWfLiNJref967ND745xNcxTSzdPymsE",
  "key33": "2RioBuMXpZdD45kMuTXa5bsKTf9sG86N9FeyN9ZScwVUMBkbbtQDcQFt3CjHbKC4L3Lip21P2udgNXnkRvX8qaoX",
  "key34": "5EtZK7tswcnG8vPACop18AjR1WwubwMtG39bvpuBgX2UTWQadoBMC7i6JsAvsJHRnMFxtiTBoDU1iuL6n7QPdmbX",
  "key35": "3hzkdwcSJH6AQqQGgsLwwxR8UJqY4Brf8onDJXorkroE2f6WcLnVCCK4QLSgtJg3FNDLeLusqrpYzHEdKfWZNtC",
  "key36": "B8kmhR5SbAwrUJhmKEskYivVQf3EfGijZM6Xz8bHgL1sYPobSYTfKtZxtbmhgYMTcD9xHmk5Cs53SHCddmsHfSP",
  "key37": "2NqN3s7aynqhSYSSwCdUqKsFXcNCycKws6LeQz3JLSw9ircfDmCpESRSVF7V7FQErVWNo6etcYLVpVS1fGQMhuY3",
  "key38": "mkg1iJZ1rwGZsNU2H12GTmJxtPmHc7k5M9rLhnQ1bd5giFn8iVTaftbyS5DJAXdM54uWwTjULTMNpzZUKSj2KA6",
  "key39": "3oTKGiegxoATo7XfQPYgiD8TNS6Jc9LLBD8c8dnPL3kByKZX4bVeEygUdy9R2ikjfKVo41NYGNT87jbScEXazW95",
  "key40": "5Td5k6nsT2MU8WPsj8pNkQf56eCEn1AoT4QGLaJVDvD9aZ5P6LMHyQoQoJ4T3gynkJ8WehYb9Y3WtTPAid3CGMPi",
  "key41": "2BAnaQMNLqjLHshfuAbfMEpCdtwXiZpba5yoVMmfpgqFY7c51GBRvZXELMY5xb5bbF3ZoYdrbWY5DdPwkPsBBcAm"
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
