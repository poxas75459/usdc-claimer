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
    "3K25q7q4QPRAtXguLDnNSqLAXiZZvoYSxjw3AFu4kU3fSDcgZfte5hyaAX9jJdV1r3yBBBnpySUNrqYn6nZWpjRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qyNqETBxZiL7vr1LasNpv5A6DpBKY7F8W56frc6TE14dyRAqbJWfPuQrxbkYEwfM8opPCpbYVUb9kGweqNgqmQ",
  "key1": "2w9achs26GVEma8UX3VGZCJN2iNMYkwAUp7nnABdHKm78rMPBvMNWDgutDzJ1iN4PMQ8SakUTztrYEDVGhxULL7C",
  "key2": "vA2d4suo5AQBUEmT4eU4mGAjuKdDPg8eYHcV6YtsNm51rrZWuZbBaVGxkrXVqHwkm55Zw1Tcjszxtdkms6Jkepf",
  "key3": "FsePh8HMDenz8Tvi9TjbHssbxTG5P43M4mB95sUQgGmUCWqnPYMozVaYsKXAdn3zoPg9m4mEFmmQX4w8zxiSqhz",
  "key4": "2Ub2Kbfkyar1cBdX5jZ6G3suM48ue1UyRgfzrABR2BKcK1nmzo2JBaGD42ajb6gPKQWTYChrkGqZbv31AKyuWVSh",
  "key5": "3LPgPzr2F3qtGJF77383Sg62Wn4EsKHvuV7QqKobspyCprkDeZJhziTFQHGD31i677FCEXyuq6QaHzy28cSJEmzM",
  "key6": "5VTzvA5jfhVXGChV8TMpDqSW14kFa6R1yE1KX2fKo6FpJnAPppWPkyimQFBrD6VHB3se8DPondVHkgfa8dGp7PkZ",
  "key7": "4CLrEtvV2yBAdVhc5QfBpPXhEm62SBpufbTGtfpjCUgbh5scAFGzihTB9wvNmaJk3GU7NEketXanh5fP5iCaXocP",
  "key8": "5cpbrJs7fmxXo3eN8k2zqhYsyCaiNx2KMf1r9NYErK4Fg2Ks4hg18ytLoyKmUDNkcrLgcEMwW3Cfp2ka5LE4C1NW",
  "key9": "2qF9oLucgLSo79P6ehy7apvqaNyQ8GJ6rz2AtYrugAAfTRVEvhQPfCkMzdB4EocYrd6oAqftH55mzx7y7MHXtURT",
  "key10": "4HBLeAnzgLTq4ZyrnNQfmrAzEsPbRRJjsuD9T4e1PiTUze8D6EnAHry4Zy9XTnWLuqYGwvZiT4XzCEBrzWZojRAp",
  "key11": "64LDNUBwYuFgnZet3ERh2jqNn5D97SXFGe62GN9CEBqtRvs95cUeamFgzJTCAhVPBBfMNt36Pif5hbYYiCwKvyBr",
  "key12": "3HiAguLZHeFwW7s4gyf5hjSbYJXVcYQjwACR9tZHsM1w2NLPUMK9UnXrXzibPX2YKpm6yACpTNQHmLJSYUgah6GM",
  "key13": "3H8EsTj7NxhGumqKsXLFTDKBxhzR7HF4uVu5fVXRi6wJ6duTiarYsP4kg6qX6ZkHQVKnxLcBXWwtLhnB2L5QZTD2",
  "key14": "5Zyn8ntskYXg1CTGX2vrSgCeDKjTvjMygkCxyfhDgC8aJGNcWdtD4V7ZRM4YH68wqvf84PqCkyjad2FbgQvQZHnM",
  "key15": "xmndTcSFBXJ2LcMJG3VfTmfy1zojXAKbPntWk7hrZmp961X5L9qJds4pEcnjRzug3oVvhkM2KfkeKHKc67LjECW",
  "key16": "2P7D8J5j9jwsJhPrbdWEeWxGNG6nLNnH67efcwviDECmQsiiT7DpEDoyD939r1AUrtcLzuthNPGxajedd76NN243",
  "key17": "3remHcJboreGX8pzWmWU7BitsgkK2V41S3UmXvMSrV3hA6eEziHZbryiendzeqqauVkZZazbnZgMAyBKuVHxn3ig",
  "key18": "2RNzzDeVu5m4Xh6Zy7Unj3HnwJxsT9NwPU41qGUctRsBEsUi3LbcbQ7MgoAKqhAsX959QqKzLWqeKDWriPH7cLkN",
  "key19": "4Csmh3Z3LuzG3gcTXiYNRvjJTXa9upN3By8Ta8jmDAc2ZDd48RsMivgSPUWYRxh6LWYQLxPBTw54jhPcgbhJunDP",
  "key20": "22s9GFA4whB3Kr9fyyafbmpo2XKMEqs9pEzRiHc5JVnuZ4VX3izpRrMpebRKyiXNd9EQaP6G82BzVP6nUcaiaVfJ",
  "key21": "64DVWuTsrsceTLD96mWtiJ3yZQRN6fT6XzJfcDLgXsbkm2S8vMPKATS8ho2GiSmEE1gHm6sJ4yoDAkyRBcGKCson",
  "key22": "4EdWUPdLXot9kNfUq6KNPCzQzAkvbsueeV7WtrxPSvkqcsy8nCxHvScdoHFuWgMHwo9g4N1LBXoWprJEiRjoAW5b",
  "key23": "UQRMrMzpZ4t6utxtBeWMNbApx9sNEQ7jXtxQeDDYf8kmEMhnAFxjhGPz3tEWWzDxv8Kbn9QpWd5ZR5b2xLJMZBj",
  "key24": "4FE4snrHCzXDRzeAJABKvoeLu2bZ1qHheYrzc6nnn8XUk4QZWnAfhtzhtpF68CdsThRXrfEMQtMffAT2fAxSR8y9",
  "key25": "4nJoPxdQW1K6r5C9PF24osKYyPEttp8s7Hr2pE5ZLdENcUqPvuXEp2bHCnhxNbcdv2tBNNrugAoBVBfRjBXnQmjV",
  "key26": "3XrRAjbWUSXRhXbEQUmX6QxWvPVVvCUoyWppbnTaDfJjTHJe5UN9Cqv4XTCB55y4rCJVDY5jBb83tZzfSL6JVNAQ",
  "key27": "41aZhFhitLe2XhxMKfcCaURMRK955QswFUwJk19WXAGEREX2UZins5VdsYAvU2F8v8UoKjMttu7xCtSBUpA1Ka7h",
  "key28": "47RkMFFh2ihFRjXPgDYPtT1amcBbdbHMQ5zwXz2mEzRMXEU6aFBHB75RFAxd1dYNHVjDgMXDCRwyQPoE9aAAJ8jH",
  "key29": "3AthnHaAHYwnkYoeh5KWxM9uiLQ2MuZENWyJppXTTGaMPgZHGBYuT78sF4HRB126fs3v2LvwTSmKLFsFoce3728p",
  "key30": "2gUrtfz1uHMZFo9tyRd3ssHFpKKiha5XB4DvMD9Ume9EnExcEVcprymd72kETb64EREkkxB8Q3Cuw58erehxNbp3",
  "key31": "5T8phCF5eENCvqLHq3spCM3e8ZCz4hnM4aAKHTKee56vDFg9QLnBkKRQt3shKKv21RbdLjgmLUKqegDsdJKYdDgU",
  "key32": "42FHATLeH2SPjxoFnvhRA5guhV3q2MPtb6PN1NVz9EfmpFpEfhvWbZzNHYKfvhc1s44szeonfkyaMiYsAePSGLgT"
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
