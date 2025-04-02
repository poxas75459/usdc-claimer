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
    "352htuc8725f1GSHpTQvLyGgE4SS4hMrdSUoP6iN2zwiTTSAfCP53XgLN6j9ZMRPHMQMH9Doxy3FJTHTF1gh9Vvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPc6soEDRxFLJzH81UMphYo3BDCMGDXGLva8nNdqHEMCNjfq44NP2JAuPGECMf8k7iDobgnfDKGQPYNv5fN1YBt",
  "key1": "5SxoWYCm7q6XJR495BanQFHi9WBAZRsPcQ5U3WcXrK5UnPwD1rRGNhAGMnNjA224pSS4aYLE934geT3D91jbpJmz",
  "key2": "xK8HBr33xGQqtCgcE45kApsYdc8TGAjaeaezC1eRbwkVXJJXxm3DzMhaYuhT6yWTEmtxoji26zY2XPWsjsLNpaa",
  "key3": "4ckSuLdvhF1adiXHBQnZ6ig4CH1Cj8qfLe5zwNP2ZkSdzvrdzpPGZU7hkR1x67htozkvVQgNNmymZjEgomEDCoR9",
  "key4": "4unXcjPXqkeJrGoCJswLDjZpmSEaBdPxUcVasoau8xx5doWNYMDzwhJzKTg5rc9grGegjSnyoACwCsG1Zx6DtQn4",
  "key5": "5tcBeVJSNE98YWmCxRcrXD8M1dEC3AdMLybgS23b742fCqVABetoAbSQ2pDLXcNtoRYfirdDsank6tgZwTc4LN3q",
  "key6": "sRYKxVR26G28rJQytvzE9mEpdDJTf5zXP6ZqgzfXu4Tmyao7A4Y2AFZN9pMCvFoAhSExADUomy2JRSEfpwYXTVz",
  "key7": "3joTj4buN5A5RexVMh5WRp1qH97QBnrn3QVLUrxCKFn6QNQgqzQSPDpdFo8BW6WSTfbUqbhqDSrqeyLT29BQ8eF4",
  "key8": "3bEEF6WetQG4AjdFtKmVmXw2UXvampoTNUpkeZHM3hXjmK6Pdta7SGs9sFj3Fa97mHUBmnUEsTYgNjy3oPRD3fZZ",
  "key9": "4FfYmBx57JJN1mxf8Q35ircTbM9KTHECZ16Sc9XRUCNGpQ6mUwwthCsTsrjzUPiXnw3Upn8fS2xnyi1GMsD5tzKq",
  "key10": "3UA8U2yPHCtU8oYptH8yzwpiricmxrVLcLCsUAF1HwZhxYWvMHcKWmJGZQJRXWdueVQXBcVfDhiobX41NHfbQ3Uz",
  "key11": "5gnN4nX8JAY2YgUoL3jBC8efEzQKVCgcV4hjm9B7LZB5jmhSJKDA5TLs4kRU8dn1FTwt9GRzgNmW7VPR9z6gv4z9",
  "key12": "2PQmLjym4GLYRjVZDaM4RMupb1AhiJ3yfQXiYijKYVAArEFnMtxb7E7tHZE92WxneRZDSVLSk9tAAt1zX3XHa4Je",
  "key13": "2U67YvQ42EfQtoDWcJpcJqYGSfCY1oByjh8fjkJDXZ5g54CDzgk2ymnHoN6UzU8zz4Sp9HUFfcYfZRxvGJV8YCzA",
  "key14": "5yZVUumfA3vf5c4nZndoCH111iKS1RmGBQRq5umjscrCceDfQtAQfsBaM14g1u7NHt6MGFs7eYezQTzbburuCeCY",
  "key15": "3j8yxSoxV8Y17Se7mhuPR4tGLgjAsgdvQYzaCYkQ74idQnidn9ZDi8RY4HsaMJSAyngL31GmgJrQZjMUBaszRr3s",
  "key16": "5wuYnJv6yrdt1CSXP4pYiSPZNwBZcZSeKq2ZNro8SJKm2iK3LdetDzjJg3M4rW6jqTAaquSxmzBbfFtbE5PT4BnL",
  "key17": "3zwVfajUZ3iBNGM5encQmdc4wkafZkNBKeNhud7FtiUKSbNASXmA5oAGdWT3fXYGkmZDS5A3LiJZpY9pUxXkVHsG",
  "key18": "3vFJFnCWybvvSaCfWqzHvN3djVoxWfeCtHDF6CzG1jjhxkUGmGRYhvF9vSrwGDKBMGGEKcgKhWJYqX2CTfEcf7s4",
  "key19": "4X6hgVKmheCGcD3hTmykEByqbyN9A1aoNffKPnpeM6RPsZFnsvBcWgCWohUFFSrSaZxeX9CHYgf73K25fRDMF3nL",
  "key20": "2KW5G1tKSxR4qVQBxK8FAWQAq1e1E4t6L4JXZUjFuVHmrsaufsPNcw6VCd2GzdjJSEcr4yeiZdXx8oSkVvYzx4aX",
  "key21": "8hhDDk2mXEcsbJKuzU8MhMU5Kz2pQ8HCLpGXV4DNmwFcKFCB2smgK7zwfC5EdkW1JPsZ44C9tv4os85ueKEU7j6",
  "key22": "418hDxRTEzZLJQKAeRTM9vnc6qGKzWBoH8KEXFwoyfVB9jQ8UtL6GwujLspvKeMavACbsDsnNucidbJGHKSFjy9p",
  "key23": "2xvjtJ1NRJZY8GhHUZYAf6AySbCVxoYKHN2FAXcDG7khw9b1ysXExAxXYdVpCL5TKcWBrj9zUmbbGV42cXLyt93A",
  "key24": "53gFLBAFJ7iS6cUCA9XyxQ7UECvDwvP5F9DgY1zS7HGAgXC1Xnhx3HQBWZb5rYdFRAdTab29REQzysgPHMPKKmkE",
  "key25": "2jBpPdbBzFqYqu9VtziCsLtM5Mr5WvHpX2HavHAQebaBbqq7EbVpurPpam77puCEhQJmnfGish8sPMb1JKmvUXKB",
  "key26": "5rFoz7NCzmpBqnTaqbBzdrXJoh7x1DRzhXEskfRjyZN9ZVP1BhpPRq25bGZ1ohjxrQyvH72x4sFzwa3HuAXv1cXb",
  "key27": "48uqcRVUJR8oLFBuqMpXcbUur5ZzNHTrcKoNpcPUDsWQK7R1SYzCv6HjfKXhiTumjkEjp2SqQBEPMCDC9wtLJHWT",
  "key28": "yihZ8JFvg2KxoT1uDLTgLo4tTX9E887ZStRdAFFCtz5GRUw7CyjTJeXs9sVRiSZfDsuCDBycbgvjRH1pgRDNzW4",
  "key29": "5ikD7vC4gfAom55i1Hmk82rFpb8BJR432QS3Ajt6hKCZ5cp6S9sSsycKKj6iYbbGeAPrYzzr7vVYNLd7xwaw9udg",
  "key30": "65TLw1zEGfnPYHRaKFtaLNxn9Fn59NWHrL2vj9ozDPZcUavCVHFzrMhUZocHZVyUwkf6cZ1aMFgU2YzXYiFDmRt2",
  "key31": "2E2S4PgKo8Kd8USm19X2vT3Ci7vD1Cp25BSwj78TFBH4VUVbLeeoYtxkAMTopQ5XX5QNKVu2FeHK9fweDBYdeu3n",
  "key32": "Ub1WnyxUNxfngBZcS8D3axnkRRGqoZTHVWz8s662vNjQ5gvi8QwTAGrQ6qqGK1UkngyxQGUKRLkMKc6Ce7rvR4k",
  "key33": "3x54bXYtGfGNsQhmzmaV5JWW5VkikJAG4ZLbgUrVvRrVBpXtytqxWLEBhGSXZhimraxTNSMFR2TqsrkNBkFpXnEP"
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
