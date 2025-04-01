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
    "9pVoDvGQnja5xWFPNhrCpB3ynLy84hZZ9nUvGJA3uvDUbVc6LgpKwHR1dyw5zUXhrPNMuE2EAiudRMHy2PNVw2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ovd4w9KydSZ5f1WNvEfFNbw4xtmhYQfMSz5kXGZ4E28z9z76ukQyfzZEmRGFVBRKLMr3TWvUkevnYmSx5FYVNG",
  "key1": "5XaN7rPhPJmaaeQB6XHWu881hetAkUsomgXdLqTq5UgSMSJ7hNW7SrzP4kBGUVHimwTSgaeRyDtqKAE7uBXRb8Gs",
  "key2": "22kd1yGXSjeNzK2d8GxmjE4h4FDx2RgLkqjrzLyBU6XJ664Bu9Mv2ikGPj1LKZrWGcwdqn6G3aapP8iw7UHZY9PG",
  "key3": "5PfJf9r6k3B4wJfSp7JUc9vrRBR8SKkuWPDfJhE1LjWfno9zdt4t2mAYUQBPjCjTjpWNt4bN66kqwS75FuEY6EYa",
  "key4": "yNibgG4j9382dmomEx3gbwLYTHjqwuvGQcsyUMXCX8RwaMZ77gaFCwn2FMFH8U6p4ULYUMfXrrtZPyaqKvZqgKJ",
  "key5": "3mhe5FJpCEzs3TcT8GJjgYkn3ehGpvGcySe52vFVwKg96Mtm7F1UmbvtCs1PpR1tfgA496wBei82UayhX2d9AKTb",
  "key6": "5yCPXZquWjBLP5LQvSeSKo9Vn61dtCJkJni5BER1To6ybgv89PBFdq8hUWyLMRjYJpH6xd4HvwLTJevYH81ATWVh",
  "key7": "4mJZwv2o4mE3E1KsLNCDA66igGseHHnuo8YyQT71K22Us8p8D6sWSxqKVEfUnjhnWdw2VYpHZ2b8abyA6UtAJUmw",
  "key8": "dRBawkhe9Vrg2XfehEDSWZ8oC1k788R6roraU7sNxFpD4nnaR3pUYusiwXVV2Rav4E9RPiVNmRYTLF2XCwAEiG2",
  "key9": "5z1RVbJCM4f2dJsydPjvTWW5L2zKvJ9zAyByqbGs27LkUTDM7Q6k2Xi6AtbJnCC5QTn9U5vuRrZUzTxUz6LZNfDR",
  "key10": "3tdBkyf1BZQNHUUrtYwhbocsUNa7R6GGq22z4XmWJdTbCpL7gAGt5RvuvsRBhdHH1YjCoCd9UMLEhN373sXURfdR",
  "key11": "5HC6JNfVvxxdztwYnhVpRo1Etj5VKB4ZTyVTvBkEYzkmBwmyqZrgK1gY1Zc6xtdL3SropXZnUuHoeTmWafPsp8x1",
  "key12": "346mkcBSMVgxmmq9tKra3aq8WSPwC5dfimKa7QUa3C81B2gQFddvoSYWsZioCvsBUPAKPTNEsor2G9zt83Myi6z1",
  "key13": "4TseZU71e68ZXfguGhdeCbJGkfsAWg8v1vHXWHhK1tjD9UukJR8GPEhNRNwBtQb8pRnhNYuE5GKkRT9ywpv7JLjJ",
  "key14": "2qkjr4Dy356EeT5ieYxwBx3vQRLtBXvSiHFcQrmAZzqwqLLxQQxBvzc2rmtNwhCx8R1f7zPLSXi3iZo9KpxMVfWM",
  "key15": "3JQv1wiaxjojkZQWd11v3KHThVfkvTds5pm8psiUNQ1qSXCAFcMD5SFunMEAt8Mp6Q94zMCsZ8hyd2KfSz4ez9yi",
  "key16": "51MZdi2frmxyoL6zQ64MBmWwKGqZPGeTDyqdqfcdzTukCtcYndJX5tsyhCSmuyc37kTi4MeoYYzCvmEqVE8rBpt5",
  "key17": "4PBn1E1t3jbitiRRYGk6LsbfCXdzFSVBBEzJcb9A38HfgPk43iuCz81FhNW9SjRmPFyrDH5o94qpGE4CT36E6JiP",
  "key18": "2JqWGXDEPC713wWBEcuxEGUP3rASzYJ8k9nFREYhk5RNuP7xXZxamEHRrR68UPCWtjvwGK7LtxLGr7DNkCtq2jj9",
  "key19": "233CFSMacC7UDpgz3hLBAFpseLj1VqEUenA9yieyeQujxEn4L6bZFRwTCMhhiRxU9cz9H4babxBQ6D7Cz2EG2h9K",
  "key20": "jMzugYgLoGT45pXxhZGML4f8dNmj39BrCGs6HX3Lf2QgmYd6izMn3tmdz1HT82sKf5EMWpd3iSBPGK6MWjZLwKo",
  "key21": "fMc1dEttqbFgfgUgDgUjmdVQ7Cn2YTeaK82rcBn6HGd4e8rLse7YzTH5uaVLhmAFGLPrMBJ5b1h5n95e1ey2kxD",
  "key22": "4HS71Vr9LSaYyWHa9vfG5MYzgq6uVQEdS2qEL2EYAf4sPacpgrAfcovRzmqukTj6jkZ9fKoPgvwQrfTrDNS1Gmk2",
  "key23": "9BaGqR6rRW7a3HVqmNj1FDrWNMNpn6niTHQQ2HxE2jA1AjxRUsmHJoBBrJFcFDTtdN4vbEyNNnChqpGh9vwY9MV",
  "key24": "52yUb3RBrVHk6AeDLjWCA2jhCpBnSkxQwWWkcYPr8sLKat4bLVbcjpYQAeKZQC9q4L6Vn813ieBEvecupq9vzkLH",
  "key25": "Xv5aLiKNphzymbBUjgyew1UZycaxqnCJXuAej8FefZ7hHmYw1KPef8Zp51hXxKfT6hoeQUaZdScCKmuYKo45HTp",
  "key26": "2VzZGZwuQwkaoykS4cik1RprvS944GTPED1aibFQnLuiUxDXfYH129NqKFmMmRoN2oxN6t6pMPHTZiECK4xjZb6j",
  "key27": "3yv8YREz9Y49XcVmH4W1XhVNXSA6G4RDEgzEVFaX6F2HnY2Tuuc1kotgvYF57T35vgC25JqXrwZ287vLXxCexYyG"
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
