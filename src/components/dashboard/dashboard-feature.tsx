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
    "45o9smrN3mBKxcD9x5vz4fD3iQpW6VGwDSNEKt3RpoYhySJ8zwFAtN5HCw42DNFkHubAj5sZqxmGDhMYys5UwPEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QsbP9MN79RZeQsKqUAsHHCaxuCAMsBfPyffiQXkNHSzdoi5cMGexeMYEGgbv7f1AJqXxVDAE6LkKU7Sj1iiPux3",
  "key1": "2GB7hB7ty5m2X9LYzmT2xdHTgPk3ZxsmHHgCRBrNx6F4hACgwG4MSrx8Fgf8VURrhp4MVbUXsixPnAx5STtpxhVi",
  "key2": "4QWtmLFEpZfDtTYtsjekgf95uJ1oVyphJ3QN8fk24djHNW3KCeVAEvvPWRMpNJ7hmzC4GPwTpkz7SruNXJJj7st3",
  "key3": "4LdwyrH8pkthUqRi8q9dDenN5x9QAuppsRMzAfiaVabNtkaQjeEakbeE1snozYUfpSbbkRfA3RxPHQNaTTgrpKMD",
  "key4": "2BCaVkK1fG6CL6TsqcDrSDqFcc2YvebJgsxhsYhQzr2yxHCUkdACoQ68fa1RWH44ewWXGA6dkRDHSjRwemmrf6ye",
  "key5": "3uWDuryPCovfozwEEhsqhAkPL72we4UbEQrJYwkh4k7PKUgcnuzjfxbBUvj2xY9f78WSijgkuWyVQwoeDLcUmyX1",
  "key6": "3VaPbPETQe3aCP9rzdW7BSpDBn2RzqhAS552FPhgWXt7HhAFvcB5vkPa9S6rHQN6KQJnPtggpRS2t2GvyftpWenE",
  "key7": "3HTtMyvSRaAHD9SneLcQ8AMyBrcDDdKJqZzPxEVQrQm8KTAh9ZfeRVcveqeyFLBeYCJg5seqgir2TuZAavykbdn5",
  "key8": "5erfo7PnXFya41rHgr6gEXYBHoUooy6L8WWsAskmQk7uRTTHC3oPTECXB2qy3o8MEECWmXpzxLYBaumsHjfMjDwm",
  "key9": "2yjgxUbPQcc7SkMTPtpbJGos5besdJWXAtVYbi8PCpTL4c1grQUtXBwnmQbGKP3qMQ3epqNLQCoqJiqKB6AtUNhJ",
  "key10": "4h5xhGYr9ZMKq2bS4vVRvKCVh3WpKRT8wZ9CNeBjsEZkPCak3g9z8ffmSDf1esvaSumWDRB3V8x7Aic2nFPh1rJn",
  "key11": "3yE55qu1RozKTSuBY2RLNfEeQfF459H4b2ZU8YVP5RRZtS1C5ar5tQfjmedwKSa64NGjww1M4Ps8XbLFXgSMezLv",
  "key12": "5NoiCvrGKJ5oYpWMjHK7BgtATrptYk4aZq765VwCTKpD1Vank8mRijsqfR3V94HNZpgeM8xRoVYm1LnpFsmNCUFJ",
  "key13": "2cirXaxu7GsmfRoGySSR1qGMG3eERgC9K5nhUQdni33wJWT1xWKPZAjVzqgHUMm6unJhWgvi2caLBtvh5v6d2Jru",
  "key14": "cPRBTaoEf2mDdDfbDN8EGZTiGTfgS7WaGZXdAbJwsof8VR9H63pe1DN4Rnqrry8EuXonpcM88Tr6r5Yqr8Fd5jm",
  "key15": "5iZxewVPxverXXYSET5YKYSvXqneZH7jkgJFWefW51Km9AYK94qs6KiadY8ZWpCbGn5YtH1vcrALwLvVWtVv65uX",
  "key16": "4JE1qEbLWdUL3zayAWefNhwsYXMYSiLaR9tKpw7bTW9nBbBCizYM1H5TkYb4RhTrGPt74mUVZY9yM4o3GPmfaguG",
  "key17": "9BHy7NwbuwtHac9w78r3Pmpa8kN83VwZ1yLW1asPywzTffXt8GWELMGnzm4LF2p6bkNQ3Rapg6dVnF4XSsJ6WLX",
  "key18": "nVJUbqRNzKWzwW3s6WowxqaLCC9SuSR4LCNjy4LnzstqztUv8t99YGar71hyixtmHSECQp4E6bCUfNdacb3JeWB",
  "key19": "3dGFT8fXvwAemEcvfbwHEcifGqxJLSimpddgsyzQ9JRsHxifsLdmYRSfxFG1LjicJeWg5kHaN3dKJjdpgiEdac5N",
  "key20": "4sWTCBVgZgHvuqFero52HurZWdRU53iX6VQaRQXKYTaPAEWYcogG4jwfF2T4jdYnfgGxciPAU3hSScrjjAm5Zj8R",
  "key21": "34Tn58xkbLp2EU6rhDCmPes2itLcprsXdmKGRsRfLMW1gDTcgJq56zSsTQXeKf61NfCgbBxjotuiimLHd4MrxtYf",
  "key22": "PySQpsXv7TF6cRyTRQfoKTUdB58ukdq8WZuDaj7nYdm2yowkL2zBPpFEfwA98SotzQrt65hzbhTm9KgiNaVnqoZ",
  "key23": "2KJpQWxSdqdHfsccKJqi6SsjQ2qHYKxEELaWXbgepBgcu1TkKuqgHX4Md1Te1JkEa5gRvSvEcfm18jgPo3u3hREi",
  "key24": "5vfc5FQVxJG5eXwyPB17LkuPjqykFWGwZ4pa4VvetXL9RZ1Sh6HNoCo713FqekTyEmWq4EMWgVytdgEbYdfM2L3B",
  "key25": "5WypCZTi55YJYecjMrq8MjofhTtQmCanz3khhP1wRhUofMX9f5LdX4Y1k1D7NMvDKqE4qgjkWJRJiXTPQi1uYeEf",
  "key26": "5Qvyav8pPSM6QaPYvqdoLoSsruYRH7RM1GWCGwG9gdokgWUx7xRhQZyeKBhGr2wgQ1nVzSHUwuy13vAE5QCAPNPi",
  "key27": "wzmrU8XwUViYKSXZWG72dhvoSG3PuvyK4HFtUrqyUZhmfjCCGiF67MJ52knWVyP5GadmjFyx9brzfhWx6cTFPra",
  "key28": "3KueAPWxzeV68pRqKsnbkbsQxbRiU6UfT3CPB1rAW1jfRdDrkwBJ2zwc9j7hYqBXtswPJMUZMjEcHCruPUCX6Yse",
  "key29": "54A3eQpgs2wABbNEXsZizY1VrcTnASLzpCUWKkTbUuu2MGxr6LQC7dJni3mNX7BBvERizchzaozEwtavfc9a91dm",
  "key30": "4UehkqietgYpsbsnC1FfsMdZUom9JoBpphrSBMJbPESq3K11ANKQcgzrhjeiyeqcx6b8ZQroNn2pUGtgz1TGXY9D",
  "key31": "2kyyAsPfTKHUu5Bc4LattECduVJJHsao2duJ9eQjN1CcU7t3mGchMS6YasQVgREFab2TqizqSPrzrmNe78jmj3s1",
  "key32": "3LRhKf3Ycwa6CQ7cvm8i7PUEe5wmrwtuuaaGBcXz2rAP3wFfUiR13vXEgvH8yonmRxPiuQrxF3a93Tr7wqaMKzi",
  "key33": "NBXjdcFyphiBHEFNVy2o6bqjAaC5YMgmCWzti45A4EEj6JossAPUFkhCtiM7qpG9p3mgzMFUh1UsGZ1kVnwCYhi",
  "key34": "ZgxpvNV2D3zuHLLGWmVkcTCdThtQ6GgTiPyBawgDoe5gX9tDa1LZ6hHYXMZpbiw72QEhXWna3CKQhJhZoLTS5He",
  "key35": "64izQB3mYD9fLbjv1jBzqCTYnwEkFmdhLTs3ogeiZXSyimy8XdZUiHXM7CYRFPwFXtAtVVBtFztYiGw7PruEv5rT",
  "key36": "4kqaimopZqUUbNsGE4SY9XfR83VXPvYdcRhgXrW2USY1usWYDxmBqqeJ3rD3X9UYj1mZtiQLeVdqvR7WBkvyqaBP",
  "key37": "3tRtPNTgUTd2XmBA43VGJsgJ8YBnFjio7NTLEEqYXnYxSJkriXmsKVf4JKJWZeEzwPnUuEETgW29hHPek4Wmz5Q5",
  "key38": "49V4vJtuRf4rn6XjfXH2eST3x7iwGrZE98ojxfN1xYsDRgzaStzQ5gAnB4LsNLyggtJprw6Yke6FbTQFKPKRXarb"
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
