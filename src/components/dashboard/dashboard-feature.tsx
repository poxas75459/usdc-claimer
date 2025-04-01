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
    "4afqkgqYjLQufFNFzmzRWuS8yfCPd7p3A7HoLaUAtV9NAC6thdV161Uc7JsEGVXoqoCQkC3tTMrWzrHLUL7ofRjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkgBsUisYu728ecma83Qrp81ZT7umj1EehEAtkwKpBADd9phptZxDfb2zQnUcXzjMkWMf8NPK3jo7oSF3Cj4dCq",
  "key1": "44x2A5qEBwjx5CagEQunzceyh2xHzTfxAjbMAfi4TTvJEHwH9pNLyUEVCPUaoqfX58gz6WqbWveSbUKMn9dPcwHC",
  "key2": "2bzdyKbmoHdXgYQAVPjTSDWA2PdtEDbCHopwBBHcK47zNyETM1ZL7MAWALF97L3cjFmym5cpATsm8DeKnEWTmxUR",
  "key3": "4hSCdbh8pY2aKhdEG72ZBPSGg9Ab5B1Jbyf3jNs8o4NQPWDA5RWH1XswLsKfr8ms21V8TUEEL5gmQ5sRLPfpo1m",
  "key4": "2EZCLgnGUHT8ZerxegF3ZuRrchsmxbe1RirvTJ5nqw8W974BVuzJb6eF5EoXJSzFzd8GBhqJCe4v6gNxrRD7mS1E",
  "key5": "Uh4ispKpC1PAKfofzLmnBgKt2jQVFL6bY8YYvedmFwXj9p2uwnUgVSkWS6Xw8H7RRqX61TRUnQ6tAUaj7v4JWfV",
  "key6": "54wrdQiv7BV8JdcRffdccWoZUDAo3x5eLryBWZSkgu7FZyvDh1PWdbg5i1HTpcHHAacFFgYB7SXy9cNwPnivaLcP",
  "key7": "3kLCpQhqSVunnx4eBM6AqnUujTJDZYF81BWnD5dzU9TcNhstqbQuYix8PtUZsKMpazcDgqocmbx5mqrYjHt7onnZ",
  "key8": "4F1jLQse9aQY6c2VLYdJ59Cc7xJXUwMuVdGCuDu9fob6GZqmr1MTDTyrusdSVNh8PCwknKA3z8Ra9dQAvmoJeveF",
  "key9": "5hQn1CpBGjZE25P9Vm53w3MYzpn932PKdVnkTjeYnKG6SgPfLncwpzaQxGMdTjvCusQYg8ouTENw8cVUadbA7sZy",
  "key10": "5AcWQNWnQ5tL8viGNsVoYTt4otAum8qrsPXSU6CtHSXPExSwbqAC8aZ3VgPn9Lq14zM46unkLRZ2iFknSBm1QXiV",
  "key11": "AzsgLFrzFT8pSVRicursWsJPNBvGcbiV49QkPiU4aDTCDrqUutg4gHsQhqPxc3RSMPiohYVxenN1fPddd9s7L9F",
  "key12": "eCqkkyByZFTqosZPYJ4wHwVFJoX2fjm7Nas5vgSW3LQphZNfCxnGt985xDV7qx7HzeiRxTzDLDoYdQJGUh6Hurr",
  "key13": "2faTE5sYAafFFuYcUf5iFE6m9eaZXfUW2yAbQJcfVxGN7VdJB8BjETP9ywFU6V6LJG5o1EXDYiJP45vzrbtkA4yb",
  "key14": "Tsgx4MQkG26GKqoujwLYT5h9McauXQ5FpeFhLVesrHnYVvV4pmiHteUhcNpSeum3cYPL78QMRa2nmFtbbMaUvnX",
  "key15": "ohH13WZTMxDrZtUAW7a83PjpPZhyduPCQ9eWx4i8rnJoxk9LgkUL92sm7rffADG6TDSfjFLd9UrL53Xd6zQybmR",
  "key16": "5iMqPyZTKwskwaeDEyVn75cE43MAMK9ewLJKy1FVTXMu6AAV7ovyXps2heQcLQpGhgRTUZLGdrANF8D9fmTVsETB",
  "key17": "2q4g7ERZeRGucfSPSnsNpPNjjiio3eWF6dBVRQohC5AMQWNeBcYK39jC1qMxYit1yYz8zJBPWnBscHggnpnYvRUJ",
  "key18": "dKPsoCeRJsh12NikHCXB86S9KHkwbHhsyEXEKGD1yU9rF6dv4k64JJD2CJ7yuvBXRgKbYASXFqmWjwCDQmJnwDt",
  "key19": "2soDHHJf8WyDkpjAAzERtuuw8B8zygTMgCV5i8itL6ioSNuY88EYZFu8aNxDa775gLqqzSzLPsjqyZ4DSHeBXXZS",
  "key20": "4rfwfmNfSP2Szm9gvLEEbtAvG1w9HKpxXkKZ8hS1STNG84t8zdF4MiE4r88eF6ZsrbuXNaZPgtiDGNP31RmWQDhS",
  "key21": "36qAv9y9EtnX3sdnRNNnGVCtNwseywQK34Ev4KZD5isMcbjk9CWTp5LA2V1iriB89wB9KB7ZmTD9nuzdSeknU13x",
  "key22": "3h8h3WfiwrCDRFLZDVyHdgdokfAW4SXdaHgVVr5dAdHrpkJg9hGBEeAkghnTbEAZAoHhXtD66WzDn3RE5PdMfVV5",
  "key23": "4qdqytga4VxFfzCdCT1LoHhMoDcCCnubxUyyhqps4H1F2kn9CR9y49wdoDBh2HXhAvHT3UgdFGgauacqRDz1ucDL",
  "key24": "3Y15Y1MD57HmmxH8PqHABiVKQLz1s6S7TsYcGYqerYYG2AgxnuxGCdMQVu7WRMijXFGLQjTBkeFrRBTmyjNBNhiZ",
  "key25": "5qhKjbKNyFfH6smbo2ctuFCJ9Z6g591oZk2wiwT6qw6FVND5B5i86Ho1H6WmAiRx9opCqvQBE9r6kUr1xJQNQ9kU",
  "key26": "5igxnW3sc9gZ6n76PFwWum85bjQmmarwgEGtyse4LbEeXB769NgC4VThDKfec8GUjLyx5bJXWkE8dNxj5u3bmmnq",
  "key27": "2kjyhAHcgB7HnnSpUPdAWQ6XpmMetgZ4zPGCtjNZaAdzEBNwFmU4P4VLUpfp3rZLpk86UaUbWnQkHiyJFU18GZ5M",
  "key28": "56AiRWdaLsEM8PvBszcVZNjkgSzcwHpfykMJwN4NZkGfVBnkmG734A5U8ZQFQoZPn1Pk394uqCbq3w1hCX7MTyhQ",
  "key29": "3WT85zFHt33QsK76h7x9wvPrHUh77RDCcsosBx1E69guMtDnghgPdzvgmro2kNyQPiSwpHA4mcgMAcBb9mN76qUd",
  "key30": "2bVjzjYjkdP9ufrzJNKbhUFvXd6kRxjMEA4HYs2wgcLSC4f9EuvmZ3TTD9FkCVGtUc3uy2bD1GUt8PJ686tkxuu8",
  "key31": "4dq358BnrGi8fGQ9Cdm3fnZLKNqzPxnqwNFB9P97ss2RSDmhdChEbM7Bqs4LbEt3Tt7ga8TRsjRSYcCZsKHUVZSb",
  "key32": "hyC821ph8UkQziRMfpWk87TbMxGexTmbwHV9wAmVERPY8CWsAFiQ3akjxitbfp9gBxKaf9M5qp72xT2D1oor6Ed",
  "key33": "4FuJohUCVNZx3YyMXRK39JEBVy4WwbTYKwVejzk2FXxpWRyYj1gkSX6KXepfUw4TBZrdh5KxhrdVVQ4J3ebV6Dx7",
  "key34": "3cvMTw7XwpifbeoeVUzMawepDCTHnZQDzzHfWGVHq1MkXgp2muYZ9gELrzXLyJNDJWEGoc4bhuwFui1ZK84CHcgx",
  "key35": "2N1Vz3sf6YBv3jHMmHus6SDjGusJUvP36yC7Q3YbHmJ5PFFn9ZFrDJ8f1JkwHkAaiD7QBavSZK9RxhKbQoCJL2at"
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
