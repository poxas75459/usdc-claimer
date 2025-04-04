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
    "33kesFkxXSFoxmLYWMayBRPCh6cCkp8FnTujLEUKkpCckRPPcuP8KZExguJ1qfBfiNfmNr8xRF1puJqwNtuC2Coi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oUNrBnijS7tSZjZHg4SbJaXU3hwAjNTcgxAPDauSDdDsHyGoJ1W8AwVyc6CzdJ3v8qoa5mxm3Z9wu9v2myFNxWn",
  "key1": "5obUNvERpngFsEvUrLkLrAFmb8iN6pfUmXpNrcAfVEVkS8zPbgfvthDCeJrj1fRVt1w4qUZyjaAQUqZ8uPhQHAfy",
  "key2": "gtpKHw3tGQRY7eDAF1AbrAZA6tjcX8E7S9kbzwEhUq5ypm7MCEGywyYV31xi5Brt4fJrDDjJpHL7DnjEmErkjod",
  "key3": "5DQ2Qr5NsKkudba9119tTNc6WamKvL2giv1yMFGcstDUHJCG5MPbs7y3nrFxddipf4L8PN2JfhacqzgDTEWF5T1P",
  "key4": "4Tquc5iuvPGqXQhexjA7X4idbir6XPFBb4Q3FB3AuTA7vgk2XC7kiWEeegoYCdjHhMjyJSss4aZbmec8Yx1J5RPo",
  "key5": "HroRbtJraMjLfSaY2dCrCXRTWUZQZ1sjSwLY1qnPqippFNP9hveBFsLW8UKf91YywJmp9TVt13fMqQUiWQkvMTM",
  "key6": "4w9F3QxiwfHRycjrPNg97UdP1AvcczRjsVTLmsjWH75CWBMR1gyeM8j2vffzfNU5M7KCBbf2a71SR4SrSu5fSW3t",
  "key7": "2Jv6BHNQFkoqWEBmzbxvLdvKU9jJyJJ1NAzBfNFWGXbuaK1kx4SE776xcKECxJUGkuq3o9hKPv8KWqAxSnfvf8DW",
  "key8": "2oJqNRmgE7cUdYWbWGmoP3dPULFVk5YtWVLmrTKvmDasyMLJ2h1QxvEfBAA4AwDR2KGoqQFhnhRtTtnyzr343JvT",
  "key9": "5oXR2bAbuP7etgi6246M1DxxbFtHvvUvRkvJNDtS1o4BkBqdujEFKaLoVLNHe8Yo8cWegAFY6i2685Z7ioMn5Ape",
  "key10": "4xue6mo6bKRNxYX6AxH4h6xuaTgth2V868ABaURAWuxbZZfqF1vKK41u3DuRYowogKcQ8td9uiHQFT7NFig6Wjsh",
  "key11": "RcWNLKyAw9TzWr67XdgeBakDm16Fqs8owxihR1wiZXwgfmwuPmK1eutSKHa9QoJKGdikZBYMmcwVBSUYKG5KZ5b",
  "key12": "YJ3kCtnGtFoHeu8yyx6ojm2uQBX6VVLf5MWYJt2VJNKQ1bYAWFG5G8FMoe1tBJKXQdM3zK9pUQJNVWyKReu3znL",
  "key13": "5FiWGKhfRCudb5RgBTN9BcLzEveAirN5vafPatwkZz6bmxmanbvHeGtAc4vAPEo6znBjuWEJNhzbGGGRRGVSFQX2",
  "key14": "5aAYB16YzxiG6eLuAVMQVbK5ChmxLRkmNMg337kN5wLyJNjFdbS7zF5k9RbdGxPdfcwU3KytkzigntxF7drAY9iZ",
  "key15": "5hYakVxvZy4vXCVjzAS6QcPKnxxyy6zoHK8B4ybszDnuVemCnMrxg2oXixQxwmCeRZXFdYhb4HDEJ6yBnHABCamM",
  "key16": "3n8ipn8k1CaFy2QfJ69omsgyByio3S4ncf7acCi4746JSaHGJ6bAzzTQ7fcZ6JBTWY3ExnprDh6XN8t92khJb3hJ",
  "key17": "J6x5g9Vxo7PDaaLU8ZVbUs6KQo2M5hb7aPX1LVs93uBZs1dSCearfTyMLo3H2mwrTuCTHmi3xWnGyVysZAfPVjk",
  "key18": "CZpYMoLSqXyzY2zKPtbNR8hNANYtnj9pFGnza9B5FF1NbYFhtBTgo1nJ9r3hNbFvmGEQFiheAayQqmSxjuC59mw",
  "key19": "22EarTQ3UB2Kok1SZpApZu914iJdpSqwfVe7LiY63m9f3scePaTEGTSMU8vj5E4CqwtqCf4YtjmXQvSg28Nq8jkN",
  "key20": "2UhD3M2yCkGgFvp8WfrJsDUvT6pZtDBcMaXiBRein9HzS9kwa54pKHEvypdJSw6Jma94NBs23THPUsasVbZX15wr",
  "key21": "5w5WuH32yPVRrSYLG79TzT6qKbAr8UjytaAmN7dE3M9ACHPCevt6ztZ1ZUvyZNv2wy9x6q19iukft7R4M3nbYD45",
  "key22": "3J3nqMMc2irAbUik7g5J9FXW7gMBhC9bk71PKWguUZZ9agzSNAcyiRLzhCHbfxpEa8YBap8s4wB3E2nddFzgTMBQ",
  "key23": "ZgvctZqHLhJSH1mtKxUZdGFURPyGXmqxKG5JhHCrut6Fr63GE23EqZczYdcx4odw1vqmE8Cc5bHubTUkGE4p3Sn",
  "key24": "qhMJ1a6aiJViUHjVXv26SWmB1E2fuAinpaEA4hstv6KTvqik7RXE7k1aWYb9HrDprFGsgKEnEfn8FqnpHkJ4ksh",
  "key25": "3URwuaJGz8SRhS48xLnTnEcqCTsTwaeQVtx7MWXtptX6wM3EZJao4cDJL9m9bmhcu3Upq4wXNjZkJXhopttapg24",
  "key26": "os4QTY5SdU1AGRN5UbfrdHxWhCm1mZFVG7e3usSuMsNRJe4NxAfhUQZSaQxHNAMpWDY9HZr3Ue2RjHRNL9Gaj3A",
  "key27": "3usg7fkf4J5ePmRTSsKiZV5pJePx6hawo6oUiF5V7k3GW3UHMDDMFf6vRqfNNj4pQcuTtWUs9Ejgqq37RaSJCXDk",
  "key28": "X9gZitNVAy4v9kPHfB6hE2JfWU6phs3LUBB2uGnncuo8opFKuxe3D7V5NMMwaRn3tMRSLCa4u6pDNUmueRhijZi",
  "key29": "3bXudThPaCEsSGuPNnnpAcoGBWhmaeQPkzuoVBAEJqpMbmPVzFNFbb6rBcKP8eFFqNX9SERxyaBuxidqY4dJqbXi",
  "key30": "4xrXfiFyiprfh8jYPRCw2A6j65kJPjo3NZHW8DtCMURKcg1ATiQdMqq7TPiRGRhiXXBRnsE12SYkjQW2E3BjmXPR",
  "key31": "53bx4Yk6Qy4L1xVwpWNYPpahbYV4BLr7WPtA4q3Ev6ND3prGBrWEjTasBBKTCQuAp69qSq7CzPsnHtKEpTop3fTJ",
  "key32": "5PbJp41aTHTPFK3WPchiHuUy3FdhaHfPsUdSV8WgE6fcx8pnUuq58Mb7gRjzs29X6EUcHxqGrygd8PZnLfXF9ND7",
  "key33": "5DhzhAUh4fsExHDkCb2dMDo9weUsKv2LwHeo4mJKSLod6hG5JzTXnMLjiuyw7XpizaCVLfaaYVXhA8ZPDzZ3Srfa"
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
