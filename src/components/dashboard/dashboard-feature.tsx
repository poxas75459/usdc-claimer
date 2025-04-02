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
    "2uGNjvFJduUAzW6XFxvtK5Gs5hwAsTbXcTKxWLVUy6mh66NJCuvvEbZa2RG4XXXAEu7zGhjkZnRemGmbu4ohFL1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oeaW1ehVpgbVSZYGHRbbRZVytcFjvZixi3nrsh8wW6vMrTaJLy6ApLLkB95gRrZU3NkL9YUqAEAbFSiZNTWPBNi",
  "key1": "3ppaejcWZSkPtbSr7rtbmrQ4Va222vMHmNhc8F3pKvBDFTkcwWfStsAYUdeQcoeiebAvrKJ9Hiy9XW7EQ1e41Wej",
  "key2": "34A2wvX5uE1uQVDdNDsEtjC4NKAQ59LcERERMcMyDNfKjGErxEJVqBakNU88XWL4qc2MGZ2YFYhZPNKPM625BHab",
  "key3": "5wwP7pwLwKA43ptFwofnGw3Nh4YT2SYNgP4ubQBbFuukmQ8gwEm8xbAcGJ2h6pcYRL7nPCJrEtX8k26QCGJjEtk7",
  "key4": "EJDvmsUk1BvZ8o8Y8Dj4EwLpEeDL3uKmWd8iHGMWrjQU5tHB2Z33926usBATQmN9WbWjp3YMDJUDK8dQpx3F9PJ",
  "key5": "35U5x8pQ24pfphLuHY4xApzGwmdxhYQLCDniQxaeDwm9yHBCSCDvvos9D5ZZDL77HQybak7kqXHGC12hv5dTs7dU",
  "key6": "53qhTjUfvkQHBPeXi4s36aNhXmqXr27VH4sZ5x9VYK8K7XSXDwwYRwew6JZ3EJovvXQgb9esE7cYaVvyhoZkdhZ5",
  "key7": "pYBti1v4HJBospVCr4QeDkhtsL9ao7oUJ8x8NnJvZ9qz62diStjXFM2bhnDZoEeqyy5X8BpiwdTyzpoVTpiaq6M",
  "key8": "3hX4SpZcZgxWy3TeDPSWqnHWCBHdNXToeCWKjX9FJ2SsrCvna1Zyj8KsmW8CDGMerVCQtPtaXA7KJnDdXEaPB1DA",
  "key9": "2nsbeFqr2gnpvm9bhHDpRHzX2txS3MUYPyKd2jGaRvTXirzS5f1PhtNJgbQgcxrg1bBC8hW2EAHNGPB4Gq7FyWcG",
  "key10": "3UPcARXcWxPE5DzvGaKvYqSADDzhNVD1HhpmNgQ1o7P3WVcjHiSA3QwGGar8UAwaoTrpeQPWUib7PKTnee5NfDhn",
  "key11": "FJMhzC4Kr5g6zU7ParBuX1WW2rgbbiY9qQdZXu4q373cMZ8v1pHoTECsrFupW57uxca93vb4EaicNAo3NxBCKYw",
  "key12": "4qevzFw2TvqbqgoMvp96ZztB1offTTsP8wHCKAoDhAJ7hEdfwMtW2tQybMqrrgCgNazumN3sUpb5kEbmTrMnmYYr",
  "key13": "3yiF4CGMNHHQkLurxRvi1asNdbW5oXqpNTMKMjjo66vAHFJ6agPLXYqzeat9qSLjFK8mZnZkxrR5ztrbicPoVAfw",
  "key14": "3WPgine6YyviWUGcXBP2GnjFdpBxPGyrrL7SfTL16zRFYRic5s2dBwP5GXqBYNcu6yerGahshuCshs85fBTTnTzP",
  "key15": "2YXFRWtzciW8Mz5tvmZNCjYhjNWUvGAAPKtix7XQkfpF2ZR23GbynqkQPfii4aUtn8jz6cPTk1rBYe9Ty11weex7",
  "key16": "2QHgBgnqJ126VnnJ7vrFbzGT98gWobpPbm2SiRW56PakitucYFZqBgQ8SDZ84N9RFGQABJxcdVPJDFHTd8NLGmte",
  "key17": "GQNue1GigwJqkRbSRJj85qUqpk8QJf2oGx1dTUZky9DbSH9jb2fFh1zrenSYgyzpx2UuD6pXgvApEdZ2p5fTguu",
  "key18": "g9MCsmaf368aMd3Xzr8U2bkxtEfGCwZsDCRupgVPuD9Sfqv4ivKdjqthxt2ytLouGE3sMWandVRy6Z8CMcFkMmj",
  "key19": "3TCkY9k9uXapLNimoSwJBinhCKXTZeTKdiseEj3dpRmUtAbMZHpH9YDSvXZmgd8pnZjX7LDSS48yrgoHntWQNPYk",
  "key20": "4n4k8ZMCAeaoetg2vB7M3tUUnM3XQfXh3SzUugFF2BM5kdKMpGA4nwRv1P9DwzvX5dvKxNCNe4mskBPsNyXXyZeW",
  "key21": "4NRbhu87RQwTEqvgGanpw6Cpgo5qW68Ceq42U6TpJsYC6hCZyDoULRx7TAVPwVKfLiDa1s5iKpMJr1qeAJbVCt2G",
  "key22": "5ffNuKyi3iWqM41k7JZA8xg9oRdo3MK5gPfRdQgibv9E7uxrSVvzzJuX1Cq9tzUKrcsxK3PYxciusiquhHyVgBcp",
  "key23": "2THqW2ag98YXBds4EUtgVNqDx9Da1XrHE5JRxMSwbTXDxb5m77FimYQUw4MGfXchh9inVGq2v6xsoeD2VY3rzqNg",
  "key24": "4A9QzCj6w3k39PwgjUjWaBbt2rVtXDsHJ3ocPTpK1pQJG55Z6XSzMtw85KmdPEKwQ5CFP7tSAWcF4tH3eGY3UDTf",
  "key25": "2Ky6mqWkiGduh65VA2dkv8ALGUcoyXNL2tfTSc8WWbuFkECEqnbGW3uULGn59WtdwNJHTsvSPHAX3HTYTS7ngW1X"
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
