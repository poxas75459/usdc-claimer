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
    "3uauPsi9YVmtJqoeiYqfixKqRYbaQsLAJxXAbn6EUkMb5fKL8qm9raXp1XTYwdMbo95rjLrEA3qv3Fh7CWgnDVbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XMU37W1hjRxQydVbTmGhNDibHQYpThoDqjWywt2MYdjwBK6pXvhkdvifEiRpg9fkUoKNtbEdB6PuSAqCdZoC2Ag",
  "key1": "5ZGRdvFj4jMKgsc9kBEUYtQknQoYvFG2DcgnmTWW6D4bHHgMs1UptRiYree79vwC35u4z6NvUVMXp9ktTsQGqgkz",
  "key2": "4nD9GcJ5ECiQJhHZA5BDit7U3sKVtfkznYN2hhDupKgH7KQJMhTufYD5BbbaiuiueuG2ZfXpJQZ6P8T2XJTnp4Q5",
  "key3": "3beWXAa7bihF1gseGNxRZAe6VXk8D5N2xbWD1Rrqhd3FsBbdehndfqfAK96fr5LMLU5VVW66539oxVvrwkSzTq1J",
  "key4": "5cDrSmBWzkWjH3oxjfontp4cVhPGkjgxz4JqW6cnUTfiSoCiNYfRTvynjDnVnXf6e8pC3mNBmPrJ1ZDq2scGA99d",
  "key5": "2eXSVV2ZPA6xaMBoKNcTLNvdk5ZiAUQFCewLL7qBBCRhC1AGQS6HuQvt66Z7am5Ni4A4Fx3g9tVZmN9ZigBd47Va",
  "key6": "3FvECxZpufW2jbgTdmPhnNAonZp3AX5zUqNXi8zZMoKecPWi6ZHX3ZqFZYwsNgBkehrxzZEb5g3H64WRxUfDBXXR",
  "key7": "Kh6W8tUCivkqoguY5f6XsnD3GehKTyvDLGgDUMQpT3zfBAEoX67cUDuyzaWkThdW1a7R4C3HiLYHpSf9ZrTT57e",
  "key8": "5265VENhCKKK7dM3P6W7kHRcojQ1YDiFFhFnu2CuCG2ro9NdKs8XvwsENsVzbFFvH7BPALMpJtyKjwuVf4NmJ4A8",
  "key9": "3BpbyeRofRCSDqYBhZDQi3Meqb4W7qY4v9uYSXxNZ3jKScabC4jeTpwe31B2ZarZrQM1SX4AfGmi5PFNgPjRDpAL",
  "key10": "5j32eSNa5oj9VagyS9CPR942pqnXiGSNzKgSiQW5Gpi781SEyn6CACAHBQ4T8ZGS6c8dhXsDWrrVQVmy4qfnonY1",
  "key11": "4FD8zTrLXjXa7QCNnjcNW4Zd15ZNqkf5tDxqqo3dYMSx8VuQdJWFU2JNVSDxVnFM5mCdq2ziXiqK81RH1ihKAbMg",
  "key12": "YypasKmBhfGTYj1xN3rLpadk3Myk4B9oKWwtmM3zf9bXyAz4i4B5pXXJesE6rh4uYUbk1WpWrxDrUdqEktsXmBd",
  "key13": "EoaQPeRZDL6yTyFwMcryxrQa6PkcYFZu9gsEq4kuDApNphWnmxfFjZ2YnwNeQs3rnuFVd4CQ26tbDKEMb71ENTi",
  "key14": "5hwqesQ86DUnzRTBzr1prRXDUVxnVZUz363zGto4oCrKPy1zJqb2m8EDrtfvEDtuwWbbuohopD9En95VdG8o6ahs",
  "key15": "4kpAwqMwpwuud8tnxKKEJGUa62Gn2Gdu7PjdtipafPJ2kUM69Bbu11ewt3f9EHoZrLfeTuXooz4zgrQJiPuss4Mi",
  "key16": "3EMWaBLuhrJFePunuLGbG72yyatxrPqheqrvXuVpDEkLy5F8vE9HAFc8ZdgeAsSXgFjjTxxZeSAHNHUNwPdwqNqg",
  "key17": "2AHxfpRNeXz5zFmgDGix9jYt5QKs8BfsWsRaEgtYfg5Aw9zp4Q9AS7wU4cLcJx6S2R9LAw1Ckk4ZWD6zdVLFJnuf",
  "key18": "2i1dHehy9mhU2AKzjmD1kCjXt4j6jr1963rcHWn5h7vDGVFJLiM988h7814ud4XcvVVmjxgo4uAQwV5zM3EMzaJD",
  "key19": "5e1PoceRwpgHeWXTH9uu8UKCkDmCeemDRwy7UPNMGomjL63TEuf1p7GjKDZkiPMHAg6nMHxCd21VnsNzxGJqD7wt",
  "key20": "2y8uL4aMWP1FksTLhxnD9x3gdi8Z4L2vSmM83YARDy3KtWHC77K3o6c3HfuW1bZkLwM6wvZJYompnvGgo1YZXFTm",
  "key21": "66PEDc6DjksvxAorjuXi8zBSbRdf7psegwa8761FiXK3mbX3sYG9eQ2v7S17jFUsPfngXez2U4NjTypRZoi7JsYt",
  "key22": "2PFuk9VS8HgD9BVhw1yyaTD7GFFsEChRUvGb3P5N9hoZsHC6cZ2khf7eoJU3cVSjYwypq2arfyGwMiA5dCmsuiiJ",
  "key23": "3qecsUFqWTnxvkr75LXTvNoGYCt3TPCgWTnUjuMWJaiZQFJebtmvQC7iTKt4Udh2K43PjABNkFpyLtcaHEtHfF99",
  "key24": "53TeRE58Lp1jon5j93zATbpSekbBiUvfzNhybmLcm51iDHgNDeJ2dikekauFwuwiounSjcBNTFGuLmJQF6eUDZWL",
  "key25": "5PMfb6i2Exdn9Amh12svGoZhnY36jhNRUuaCwHTbNpAmn1KQKr2SiuCHSWmJjmbM1r2R3rnvLTg8qZCgPFEAuws8",
  "key26": "Q19qdcHgvoPeWgFgDUusj9rYuw58B1Uipz2Vnrnwv6eauqFqDrqTLEbMZNCtzTvk8VfAFxLFcNoMVqKFjhikWhW",
  "key27": "5Ecwupm3QvLaaxhsn1SuqkqrTvXMM9jy7YWSyjoL8a9sN68kaCgpczMDyvFKztXExEDAjjAvJt7ibB8kAabEEVqG",
  "key28": "39vsWXFHw3jS4jMTHnogWwFJp8wUUrrmjTxNwMbNhx9dAMWrCWqT6Gcs1UUy6ARabwNb1MrVsiTqK3oF8vqUV9qv",
  "key29": "4UaFogFQt7scQTETTiTrF4Kb9gKeU2yVdc6F8vvEtMJVhy7oXie9on7xsEYEZyCBurmdw5KXoXNuGYRa4th3R5hB",
  "key30": "215z5HuLxKiy949r5ZsYpjEWmEWtyrFGh4oP3V8KM9t7uaEay56gVraTF74Hgxi8C1SxbnH1h22HzkM836A62fFP",
  "key31": "5MRwRbyoW5gnNAeKRVNzkLvC7tpth1PAA6DtXzoSbS4M5Wd9AnfsLGtcidngsuwmX6Ve1ViUBRJTd86mhkhPjfVP",
  "key32": "iCuX5tTnVmaPKWSLNAHsREXALuCu3tvgWBA7kCaPryNLBpktMuN4Wpj7Lmx1RvBav8RX7GjFpyMBxJ7YFjtjFgu",
  "key33": "42bKmg2vPYWJ5wqyLJ1cU5gRjwAs6DMwiLPLRXfGcYVqQ8M6bibJbxzC2TyUGccJQx4Kvs711DdPFomCMhBgArNC"
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
