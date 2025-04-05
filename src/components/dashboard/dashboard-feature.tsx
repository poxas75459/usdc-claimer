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
    "5234YpM5WhiiS734wnCjRWdp5M2T675VeY5diQFnMCRDq2Ejwi8yKoj4eTQs5XXgoqEwf6CAKFhDh5xZMKLi4wr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmxcNVkJbMPvQ6p5ZGQ7qRY8sxwKUUTD5J7H7NYLCVBgP7NCq2BoewutYHCZVHVMRTjKzbuE8zSSj1cgwM4GxuE",
  "key1": "44uWoEDr8utZeqVni7XMEBiWqxXEK3x21qj4eSCc7oWMKQgFFJyEatjAm2PY9Xi2MGGxt11fSfcQaRzchfxj69cv",
  "key2": "5LzGSf7VVssaUBivdSpAV8dtoGADaCX5HLTStkfwpYd95LTjBNMAzvQBpxXg9hRyWvTdfrkzgqtB1m7D8ytpbrzp",
  "key3": "3vNsRTSTKJVk28aDfWCTsexMder4KzHkpEHp3M14cZvH5ZK3NHHetn8tMmuJYgzbNPhhN5tS4WCsu9EFHwsdS6XW",
  "key4": "24rCFCxy2AtGpeudYdCeYCiGurrT7vcsM9mEVVzArgzNoeAAo7qb73cFrfo4rtKYvwAo97ctTiyuUU5qmkX6ER84",
  "key5": "5uGcpgvseXAsYSMV2MCESh3KY2Ag8C4nRfFSatqPAAJuxpCMq7FVd3oJ3az8rwiJAu3NEmer83UMTnLUxPTDxnum",
  "key6": "TfF1xuocHkpGKDv8q2Ug5VArVMJDmh4fMkuSBRjA5hYsd5JfQcrmNn7EpFCXwCrPyz1vFyWzSRV68d593P7wqVn",
  "key7": "3BQm2NJfYHZc8py6CKbbwgMcvms2hPjqApuBEf33Mpe4q1eKs6iuSDAr6PTfd3oSMHkuvfXJDD6zspXNhj4oQZ1Y",
  "key8": "5M7aJhsrqcnqicm7LfByKX1QT9SS8BGJ8Nq4uRY2dyjW1E8zV3moHkw6K7XQxUQEuXCSvgYEkFHFaXCBtrcaYfx3",
  "key9": "3fynGWqSqsvCmnpHMaboaQ3iDvLu9i8LPLidzu3kGyaWKXmJHuVYSfYMNzcsW14stGPXcB8PsMvTmBHs5dVDTPmx",
  "key10": "4JjjE5uF5o5wQposeigVYWY93rHZDwStYb75HToqXkBkaSweXDfEqCFAgM1gQiy9DMC4Y7t7TGYYQh8N1TLwLPe5",
  "key11": "5xbRzrk6UzqteLATD6FcnsEcdjiFT3irnFnsoENHrKskaMGTpn965TC5fgwrszBMYkMbJnADvC5kuTMBMch2CSaN",
  "key12": "5bBC4dvnANZqFq91wRizzHi8NLvKBndazKL7hgVQmoeddF8zNYKpVTTP63dr5tPisMWPjeLW2B4HCZmrLSHinEhq",
  "key13": "2FZ77uodeSNNhYCGWnQXi7PHqksVrXnt2sJiRjwEgb1iLFynmzw3fbKo3NBtajDnwsDsWGduL5TYMG3yEDNqxNox",
  "key14": "2keBMTi9GR4LE3c5hyKL9bst5UnJTd76M76A3o4xNbzFQtJJrDE1drf7yktQf4h5mHhhkC3zNmrvS24zQ6iNgFR8",
  "key15": "RwTH89TvcLW2R9CegYXPfCu8GDdF5NmAf1KbHXgf3s6yBAesVUUHWeJwVxtG4QgApTNQqhWc2XtbDRKX5j5oaqV",
  "key16": "4cUY3i2fARTheQjEFGVW4YF3xeuHDNUxU54sbRPNPY9t1x2Mb5davmoMSRHg6NMUK1rfuTXRxFtyEBHj1V3ZRHcv",
  "key17": "3q4sAsMdoy5bkYqqoS2swM1TYKKprBfDVs4v6sFtb3zRsh121SPHpcRuQHjhPoLr7dyp5fqzqpK6ctGCfcoUFbw3",
  "key18": "3QUQTWGSWZFUvsPqpr4EgeLbivHWTR3QAuQHMMNi7kbEUvqUXkyeAbiiTbdYibsQPCSTCFNG7xvhFhBbMjFEF4qq",
  "key19": "fpav2iPfdZkFbBBJDhvbXA4kmqb8BKbXEGPS5Ve7YdXAEBfU3vwEQkoBMndtF6wtNj6TgD7ChkrVCWS1P8hkFoA",
  "key20": "KE4aReWtzH81jvhU9Z33pyRY7DD6JsbofKRL9Hw6EHCreaiURGsJS4eCsvjnwVB9f8VMcQAxJ8ec3UCWSbUsThd",
  "key21": "2Ny9mJQqXArtm9bPpuiv7ZfTytuzym25ktwXKTF1MVP3LYFAaJqutrXLMABm3cHH1jfPLqk9fB1HQ8qh98sP9GDs",
  "key22": "4h3gE1cxpPvfCXUmkf7STHWmc3Lx4czR564y5SWtb57CuS5MpH9RhDQv1posfhWKiHrpEYSdSco3Xhj8VnYXQFyV",
  "key23": "4zmFsGCu1NLZ5hNcpY3y1MGvhzRe7DtmKR4VTMsjr17UkvSFjeei6tQzNVeeyACL4KaFoUmfQ3cg1QHdfasP9KQ5",
  "key24": "26UfDqSMWAXE3bfnzXFF8HUdnSEsLJEAaxExNgNKZansVZT7CeQ6fPvyu1PDFXTMpfP7umDaixFzsejzc4f1g32p",
  "key25": "26usk4991tFfuV7gGXXkxLb7B2KzrBtU5SQjLYLqxhVEJtqaNZ3WsF16K1Cpr8PXH3wuhgg88j7i52dParK9n6ew",
  "key26": "qXcnq3wUbBj6p64FxGRT1dyv3v3RtNDHy1KxkDj7jqHJFx4R58M8C81Dww51KA9m4KrD8sV8sP4EdxQ67Ywxx4H",
  "key27": "3z4f1LSTiMAB5CRFa7NXkBrg2zaVCKQUMXkYNZpkFgVAqt4bSpnSq9ihDgSvMQvxJ76mF1SpHy4n5vaZnmwBMD8C",
  "key28": "4RgNGJsBSTRZxUNAdGEDdL5vcwowdK6XFA5yL1uG3ruiWXM87GAZ2GdKin41ojJLqBXhPbqebPdzqMkwVAMHqfdE"
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
