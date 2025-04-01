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
    "3ZgT6mbgdauo5Fdt1H9GQpLXwcFn4zbs54zZPqyKFpus6zZAcFgjEJVueRmPaUDY74ghTJ2Bnrk5F25nxK5R33sE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JNnW3VTn4JE5UYihrNHE6jrkg9QfmNG5soUteiTFKoH9HWscRrDSsP7ixGKbJap1CmnSryFR28wMG6MjDWxv9PU",
  "key1": "4Ff3s5K5GuGPnqzEDSSyd3vKMxUBqR5MnBoN9Hu5Qia4DrDGaya758PYJGoNRC7qny1m3VtsfPQS3ncMn6MiUZsM",
  "key2": "5xyf7ikhTerBZnyLio5RLY9J7kZzh1GTvRNzTL9WieQVwR9ureBUAkevzDE6exHR8S8zPKsuAsvHZW215BBWkgzt",
  "key3": "4WTCNhjrmukx9SAXEx9gZ6whytTDU1HW9AB4YJwtWtRuWkbhcQcNYfgmVWN5kK37gvkkwd9H35NZHSWWRv67q6S9",
  "key4": "3Y5smGgSZwaD4GfWjPPytzAK3vMLkpoZGwGBC2p8CnuHZkeHmn4nV8ZJs3n2Rsrnk1dTqg4XzJ1F6Bi9fTPh7NW2",
  "key5": "4f9kg2eg9Dngn3s3L7uukXgeny4H72kuQjMuch2YwZszoEgtS83vSuR5LcGKMhbUQ6aYCMrDU3FJwzTE6htrKxGp",
  "key6": "3QXJ3KjYw8wtFWKPFVcpUM52novGUQfcW297vLb9feT1cA6r1g2CP3G1NX2vrSMRy9xZhYkH4dJnXF5bfkaUfdBZ",
  "key7": "5q2KWey1doCenHHAbT25Tt63tqozo8qSxTbiQBwWXVwP6q9pRMF38HdASQCnFQ5erf1TCLjZjGg9ShB5szgVdeoJ",
  "key8": "5j9NKhgMzHY6qLPutGb9rGG8uTWtrSCHcMoMhrEuQZgqKx29X6do2Lk6Lqefd8CeXaieMXdWXAjuFPMFD4ueuHsA",
  "key9": "5wpbSQzCbah2QRAUh4EZtnhRnfpAx4GYs5fL1d8zdaJkrwgVF9YBuzWyJZAMvcCx3hpgPvXQgYvEtTf9zxqehJ6S",
  "key10": "YycvJmnSFWUX8mnWLeJben58ipUqKkRpCtSDyDsXaNipXNSQXRaTmNy2R5WaBVEiVtJbTZEGuMDbnmp9tTWZhp1",
  "key11": "5tDMkpWZm9r8VFhjGAciqkhowbAYaZ8kNrmQbKy7kSYt2vh8tDEaXZDu83A4BmbwkVEcZhp58bfufPoas2475a5H",
  "key12": "govYrnUhAaZYCKP9npQ5jqx3nVepFHNeNuGqbKHb1VXFLhbQxLNpb7mf4n5j5YS9E9b7i2ijdVPxJ3k5QMKPk5U",
  "key13": "5AACM41vkBKm1LZCDmBTEcUAW3HTygofEHNqb1dJ3SEg7eBEBTeuYng5Bik3ua56PoBwhewwT5wHKpDjGXXVNBxt",
  "key14": "SHG9yxxqNv7yUQwgoXZdXjMHfHYFNEcprUfj8wjbN2RejDzocavL7XFe5Pyi7Bznd4tM2bbC6cKQqP2PevaKVA6",
  "key15": "2RRjZ73MxYKbJXVEx721S1CpGyfmwdbWsvcbxnaRvWnp7uiFCukR1kwJhSbj3VLD88v1zbfB7Wi7HNZNQxKWoV2A",
  "key16": "38iD5pFysgpbZLEhMgTVEnReyxSgoUfdeZcQd8h7WxR7JZDNFd1SfVsR4qJRjfJ4NZhUSXn1vJCp8EdDBikwyTfT",
  "key17": "2ZzcmW1VjmFsbSvhYiHS9JFKAzLyLweNzxKkK6NTsdYEnRwJgYejXVbWegkfqxaajBkM7HG4JiG85ohtCEYDxLa3",
  "key18": "4A2dc5htkunkSUjgDXF4rrc5GfTSbv1Cf9bbV8z2kudLK5kiLTepJFYnk16v481R7HRTJ8a2v8DqmZGKJdZQRoCZ",
  "key19": "5CZfAGSsCPBt37wHgxEzhzaVC9RhnXBhx4fPbuF9r2fCUpwA6iPH395LNtgodEsvghg3MuagL4HtoMBsTZSkF9HL",
  "key20": "5Ro8a9A8hXwJ9hjPnLD4cJuUDfZVKEAJ7Rxoq2M7kBZKjVU6iwNBJXiVKWqSmwUYJPysv12whA6RAbJUFEnoVNTD",
  "key21": "5pcuitoCZd6FZkccbdm9DhSuiLKLXobAK3Y2BZ93RiRB8o7xbFghTXfPzSQ2XYaQPs5NvXz8tTEnffsEkcbG9wfJ",
  "key22": "2qTAW6C3bqGGv4znAD2MMXbXRw6hsQ4ExPRHtWBevkXUB2BRfPvNKf5E7UXXW271xTPVfaUeRg9DZNf9Fp7YFZi3",
  "key23": "2M1Uob2SyPd3yMUnyfom7qNx8wivdzwxFUEE5XdFFK2chqi6wKy3fDPa3Yd19N9CNxcyGFr8PpFUSCgTDtFJE2Hc",
  "key24": "5DfesNfK4DHGHYgWCXyzQqoQNNi4jXLQZT4qbCPP2QJgiZEqfZzZM94p95yUFiQAYtqvh5J9cF1nA5HiCU4QdUoP",
  "key25": "2hiVTUKVGBRGfSCsY3EWEeP6JJyu6vcv4qdF7RqdfcMdBSPzLDFD4z6CNAP4CVB6GwsV32TChNGwmiScK9pWKXCP",
  "key26": "43MAqyezgY4TwfC9RH2KBHgcPC9ABrpPt1tYHgGMUtSYzkUEivUTdAvYG6HqbdVjxuh8TdGn8ZDqMPQdpaFsH4sc",
  "key27": "3J8HLe8EK79C69PKokeHApReED7HKefWgtVkwiRHv2XTkRM1LztEPp43ssRvc4wpMunCxXSSLPmiNZ8T37Z1UfXR",
  "key28": "c6sg5AguenkLN8DCMCjKaG5cPsngqdLqxoyJLHUNSUhTLWNRXb8bgiFpMP99Ue4xPUVf1HxvcVP3RvoPN2rsWKf",
  "key29": "4nyNLArZ8rhzHSg3MQLNXehbAhombU3phEYUVqTfwLK4AtdY3PdvKVVUwwp27EQRPGfUPg25b4Ty4s6XGHmMT4Uc",
  "key30": "2hudkFuAZ3abupzpB8fF5H4Tt6WgVy55JNbtUpFZ51YC91V9SEnG8Gm915HTTmfagxtXqpnvJyVVXTSshJyFXbTk",
  "key31": "2MWZkqq5d4FKQmcTPAb4h37QiweaGmYpFBxHWeLsd4Fxvs6onoTNzkoE87KDrPvzBULsBiZz8yVgqDeB2YbGGdVY",
  "key32": "qepiouqrZiDsjPD52Aj5GbDpQg2BgyGzEfevaSrMpmBTKPaTmJjAbgSjJypaiJShgkeXT3DegnDFJ8onGd5FAtN",
  "key33": "2azWphC3CEtL4LLiPqRfhTLv8W8unu153rQn4kcFtgYYMhRTdQ8po5fymKgVCzC5r8oDAEFWcs12FEFLBbx8ANdG",
  "key34": "3m4g77wezYDMQcqi4EuwmfcybB55tacXcXXXkvZhneHyras9G6jPGSppzKNbbTDwwqjSW1Lp4oNuqukkHdvtLaQp",
  "key35": "CfN5nuAMVAZFxFupVnNpLZPGiVAeshXnQrMwS2AjixUz69cT52vG1J8j9SUKzQzcvRaZwBSTZ7n8UkQTg2vVJkT"
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
