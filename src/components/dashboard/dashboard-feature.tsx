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
    "Cr1pt4hHtugLEcCL4MyCd1GfyvHCuyGnTqACTFPTJiYQAncqqByHAZQ1qup4FD2KWfA4zUn4sstVZMaAcn2EhUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7PRZBeyeNTQQRgkZmf1sSqrd9aDNKdoygizPCLH8C5evxduXhC4RDuKFfns4NW3xCBwQVZEPCmutvYfBVidUDC",
  "key1": "uXnS7Gxgjr6xUkA2MhPVh2FEQDKHBRPtHdtmn3Udx9XA4cE5AzyWnJJhXj9Uuvb9G2n7VjJdwqaDouhDf8Ps19L",
  "key2": "39ZnNib64BVTY37H22GgYcjhPZ9fnCmQj5DF1JTgcxv7AeRbDxer8QdnPngcP3yt1QESVrHGAJFn67HM18YG1yFf",
  "key3": "2RgEuNK95tLn5MFVAqAGtLeKqNpmdqob9jMkBHsaKVNpwz6Rioex6AYq3hvssBrz6gpCirpxvcS5qXV7ncnN5nEj",
  "key4": "3dZ9sgmk3REbW4BCjTcpVoSMnwXFnkHpjXoq2JnGzhbrUCeVpR6sn9V3sEsAWdNdnFRY6mwzGmpxknE1ypKxWNLw",
  "key5": "MKt29NfEjW9SWTg7v2ZwnN26sWzM7RK3G6ES8EKvMSrG59GGnnqVwSb424EuFsCQ3NtqXRzk2ftoLegPXBWUscH",
  "key6": "DYE3VTR9MM6iMLGiFsD9riC7aTfrjkqMrKwzSzMdKVXmkqRWwTiX75rw5hAGRKuyK3RhBNUiFzZiiksZycUDgex",
  "key7": "VttdHx48MNX8iA1BVvfwMSn4KFJk2RPneZFSWeQSv6WZ78fTzszvnv6pQVczSHvZCvCA7m3qE6tEeWxAyULuwc7",
  "key8": "5uybKHf9xxiVVHYtHDgc7CTvVznPh2Jbr9LuoGrD186HuZdz7cG6w4QrcaFndkZvMpcaPdTBdCEBnw4rP55HxtBJ",
  "key9": "2Nm3StEFGiWe5hNo7NwzZRLTFMC3L4ZXHJ9zG2Po1iL5qa43ttxMJafEpP8jX4yurYphC3z8HkbXYMD7pp5H1NuY",
  "key10": "5XxVhfiDLn3WN6RQ4Y9rkB6A6uS8FyGTjoZ5VzdRbb4LjcENdo3c1NFEE5Nzt7qemy8r7RnmjTmn1K4jf6a6CvF5",
  "key11": "5EckzJ76NTe7jkp6P6CtizQJ6cUDQNdNdWRtnCFdfrgxPxLDhNXxrpwXQixoNM9SdqDHtuCRC4YGr5W8d5dryNU9",
  "key12": "5D1d3LYQXGkogtviZzYAaMZW5B1Hs4D8fTQkbKWsxvtB3EED6xFeA6dVBkZrXu4MgPDvYv5kLg2L7FXFcpA8XBDs",
  "key13": "4EfUt9Depe7LDHTparGzwPmvqMDZKivsPXjhymyQLEDoc33b19FmzaPXQpgErYRkFjKUBjboBDMcBs2GgsSCyaER",
  "key14": "4ZkUBCEJucuLcWodG4jdXVS9LuGSXwzqykBcbdLgC36mSbMHqNQrCoojGewNcLvuJK2gKNNZJVNkEzMn1aP2qGX8",
  "key15": "4tLkyiUzDALxHyLCMfkMGowioupjYCy9ZP7xsotqXdRucfSCgoryfHXGgQ3g3uoT4UHwPcNi3XtBbXgjeNxLS8NS",
  "key16": "3bK7RBqoQsfuU664yPzaNg4PDnf2BvUvwog5sgg9sp9w2stKkt2vS4ULCXnqFT2jGMmzscg6crSM45j3R2XCJCi9",
  "key17": "62QYGPsTm6AaVqMXPna4mx9Pif8oqEGLr3joTFhScQtDXVD9YXQaXmxZ7SG3ocpE4ArJuvDycJ1uJ5NYvzhMy5mi",
  "key18": "djiMNozSPyDUMnjcjuGa3RUPuLbm9xyKaL1fjYz7LoKXtdHWY7HQhFtLr83ck9aLL12bvAXzLVY8Q26vZUWEgQK",
  "key19": "4e3ZJhSV2RXJmX3w6Qu1bMePM3EvgNH6WcLgNB5QSkQHYdN5jTtJG1nrtB5oX7a9NsZzCqnuNC48k2yqrdm6jmQT",
  "key20": "2wJyHXtu65Jjt3B6aTpR5Af6AjU6aG72v9kykoJfzYvoQs3SG2dN2XwbiUNaZfyuMbBtvqmXwKxwZgU28aMSsDjw",
  "key21": "4X6Jj88VUkWmi6cz6Uw2C61HXYVoTaJ4oF3BKQvFcxTJYYHL9UzEkwp5tn6186X2D7KXSG6maAc5UB85NxLViteL",
  "key22": "5xj3z6nDcjR9mS5uj12NZVoiAcYFubjjzEQ5xCBtfokmwSpdFRgXqDXSMcAjbviQTA6KCZ3T4kCJTEoNn5CeEoyk",
  "key23": "4KrmiHUyL2HaDAd4qdrK9aKsyZkxTpCVUX1C4xUQ9j4UZW6m3vkvHo3RMeDV1tKMnDcX4tXextrobSuYmBA4im98",
  "key24": "PA7w2djVr8mcnMsF2F3MR3Dw4Cit9RCfXvPgbshrAywPyAFkJsStua5s2YLdfGAuKHcRwaKyRhoQxgivVfzCbsu",
  "key25": "4oMHGEFnmK6kZPqCRrdwSY7mWtBNzk8YgCfGYUNEprpLuRmg6ziczPrebCrKp37EfDNBmETtvuE3Tkhd4esiFCD2",
  "key26": "5nDvT8zavLNUJrVkDqxcNTmGwAvVBkwLMQGCuwT7ToXjMpUjuW7M4hEXAyYxE8cGcHbdQzFJteFuoNr8KZYLspcP",
  "key27": "3eyVbfkS7mrJrNK3M7xRVQSaUTBnsagji1k72AB8Loi77Hw4Xo984NWXGtXmv4WPrSYcsMPWCbn6uWwzCHD7ZCfS",
  "key28": "5ZogTg5Qe4UCm5TzV5t6vU6ptSXakWLgf9BJVqEPgN4zL3h8raUZ9NPzXRbHCuaEGRiXZanPELqmNVGbzqzPme6e",
  "key29": "5b8yUCgWJeFL5zrSCYAcHfmGwTMcjMpRib3gXSXZNdyXdTpvXdqJVDwem6Pu2EgU5RvdR9e6RaHa43sn4SQcJkkP"
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
