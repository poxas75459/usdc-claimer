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
    "Gvh9nQEepi12siCW17Fwm1mRAybw9JaGSPkC7CLSMCLfRk3CLx8oHjH27xSHhUZz26MKe8JDurQetURtXN77Zj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qv89WiindjTHc1a1WwUxVECgReBzzGo4YGD8M4spnMSkbWFaXn2PeRMCDZcWwbGoY99SojW9eiCUQ2wGCEhq9Z5",
  "key1": "39cuYzNiSX3bJwB6rjDt7PQQwtSk2tgS8WZ77es5SBh1gzidrZZMqjc9CFVNxob6maQXCxE1dZRJZM1V5UC4Ys3e",
  "key2": "67rfY2BSExibg2htwoMsvVEqJ2NSCFiVjeoS1kmqqxudCzhYp3EzW6JK8tkVcYu9ohmTvgoPngVY1dwgv8sTS9PN",
  "key3": "hT3Qn9udRe8qXUwgk6K7qTEZKA7j1HX5UTDECTVbUHeQnWsDgGYBZa6LyaBtLa57ZmkCFEwTBZiZazUANg3mKZv",
  "key4": "4VeAP73kJrBLeY75qMbZdTDem8K8Na3tsYz8dPcgFYYUc5WkF36tKP4ngoaa5udKsRBKdaPMYBBGaE1eKkXc5DLM",
  "key5": "2yo7JRZrgmo4yyQJvU4FnRFcDVAD6F8dRC7N6WUrFYprgJRDjhANSmZkJHJZQHSPJeHT529TqqmsJbJ2SZdDASU7",
  "key6": "5788phjPqDvQKzfEMBVx4Mazzm1sANFN7wS6QoRtHCYPZvG56fVJquxqESxKmhes4RLf5UG7ZPNDZYArVAkD72so",
  "key7": "RDEE78dMw4KTto9NPoBXgFoY1fDpoomikCBC8KKveqnrgEdDwJeF5EFgEyxjpjDSqPA1AFpy79fz4MK3ut141P4",
  "key8": "3f5itX2G5oQUV99chnVjksqXvgZcTRAYY9pPw2zTtQrgWeqjRSYMEkFyQbpyZhsCfP2HipdjfqZHCSHPUgeAaPPF",
  "key9": "jEvQ1PYjKeaFzb1zW5dJBaGS2gWMG5cFFdxEo2uiyDKU35d8SxJekv5K83e1VS4riikVSbEoJBv6Gy2WS1g44F6",
  "key10": "uA9FtPrrLAMqcr7gE5AGtFL6NBNwQ1XUWoXWNWKfdyVdxVBBkra9YWhCYzgMJLAm1Q2qutdeRn3rWAFkX87jt9t",
  "key11": "3bUbCg87o22znSewCUdwJ1AT4RDELbtSACdXko4xyweF6s9vVgvASkBgp6uyY56AQKUT6YhXWqFMACDyUqjFteTj",
  "key12": "5S1vwSdDwPqJkepm8cmD5r5PjMVR7tAqe82SLfik3zKAVkAhQfw1EpdkCn6Dnpxrog8HhSCjJrT8drBbG8pwYtJw",
  "key13": "5FoeZoi2zfoe24fZJ5rbMnm8PxvGA5efzVw5jLomAkxzJNGXChWEQkDLyiGHHYJBA2qUhAb5c7uYvmB1vWyeZwGP",
  "key14": "FeQRdSdVropT3YrqNtKkGEYQ5QoauFF3hiV3WJFGAB3kdXrkccg4Leu5nmgF4Ciq8fEPbdCsbvfGtLFRCQHeVKx",
  "key15": "2rjy3BHEn3FBZT7SSbRjsPrVbT2tKMT4QJTnHRFxR29mCU1nRDWpTmbXFyRhWZsL4rUXTc3gyCnusZECesyDetij",
  "key16": "3ushKXEmau9N48TBgoLNzHUuWM3mHJwg5TdoaH1XBoVwSgYyNfC6vko51mEqobsnqUy4DPDv66UsCa3eDV39qArH",
  "key17": "3PRR3BQ5gtkV1oeNrqh6H8Zw3VzrG8QVEQQzqf8ECvDYfA1XaC5NCvTdBHeEUrAmkN4koADD2ciV6KN4ScWhGUQP",
  "key18": "92TcktavLyjs1CEiDe8deP7WsfqsHKmRxDA96mdciKPwcEdK5cZAbYqscQaD4mj1wrRz9SiXJFVChB2xKZcavB2",
  "key19": "3ihuqkRzybEmz792qxkdadJzVX2mFLY86k4ecX4yC9KxgGSmd17VLr5WEF5iVgjL9Hn1gWNAD7RebK6Fs1ybWzkR",
  "key20": "2meUinCX2WxBoCZix7tvNSBthc4XWcrw4FYuLbtcEkKxpzPU2zWGWwayAKGjrKhu4isvx4jLXMvLtCxvefKNMCYb",
  "key21": "UaGz7TEJvJ9s1u7ehnJfHtydnfHfTNT89p9Nqnbf4fVGQBJd5UEbaUQ5FwpnpN136LHw56EMk5J4xgqP5gknYK7",
  "key22": "3YkZAeA8zfXABuohGynfNSjDSQb88QELnhCNkPbRU99uBobzhijzWQE42eAtFdMg467UPtCzLJ2U7gKJ6Yibzrog",
  "key23": "65WwuhiosLv7fBm516j7ExcfezGLMNSGmE3zebu7DAKxgU12EfpjXcH2CokLCWvhrCj96Mo3ghxWAsnVrmPtHQCf",
  "key24": "5hfeRgDdbbr847sCBjJPNBLZ83BHK79FAKjz4tSX7vRiNiwwhWP5wFaCLUv27TuNAgz3V6ykGoPed7riVqKa1qfM",
  "key25": "4NrBU6pnY6WVmamfkh9nRevUf7oLeZrHK5fcPT8YqP9dLhgeHpfNmKZ5ZxtzYJpgzVon83CuqW1T9naNcUTk5BV5",
  "key26": "7ELf721VYsVSSvdJ57y2nfJQQjCdoF9sxbSHxKhQQsh4W84TUfVDysZMnqZ94GWWdopGSnv9TMDVRMc2YyFFMHq",
  "key27": "4S24GJ65fxjS7RDHMALbpbzTbzdqmbm8DxR1vNPbGjFosB9CV9Kni1XaqEMpq3TUy9WLJfbwWKeMroUnsrP57kov",
  "key28": "4H1LZQEMe3Nm7r2UA67ARTQAzM68pY3JxveHKx4N3KrfpBF9pCRQQv4PWtLFHBVvb3EMVpooR6JAvajacBMWMiew",
  "key29": "4pREdP7KeC6Ef3M1t1quo2aQ7czqfmwYK71AhtnPvxSmbbH671BWzoVuscTUxu8Meas7WZ8sGwMd4v3kzFy95km",
  "key30": "27fQbocKkzN1goWV6pL3Fv2kxqdxAvbNhXPwJNHYB57eoJsipVUEa2dpB1dX93W3jAcgHPMogUJnJqCZmE1FR257",
  "key31": "Udv9ZKxvm9iWsqzDqFxCfmspKpcvyxqWSc7FCEhMBSgvuctBinN412atcJR1b5UGZ5NKA5cd9Fk9DGpnPXhLo73",
  "key32": "39fvMK8KPMdd6RDZSvGBPuzsTREYWt6s7scbhctA2dyWyeTp2oyLaqw8U48BKTk8ou5MdJVhFF3aXGCq7vciH2Ex",
  "key33": "5vF8sNaeVskoXeuSPo3KHkTcJugFZYCRBCCyuNEg5D97FmX5XJrJdDdrUWCX45aWMXNqGdoSjbuhvJhX3R2D2v1n",
  "key34": "2aSmvWXuuedmamH7m1amMje4qz83urf9pFaVyBh6JsHg9Xho5jAMoyK2ToK1UUdPbefADczg41GJUBrDhFE85fes",
  "key35": "2Qn92qCdqLSgxQqc8ua6uQxDYEhdLwMNHtWrAqhAAjxVaRebswj3Roh4ThCyhUSvNoZ6rh94zFDx8GYdbEAgkWqh",
  "key36": "5WHdpaviSmjBzJbyqd14nfPyLsqEKx7iEnXTVksqhXyWDMB2u1NsZEumVsujeqqfWJbPz4b2aCLQQmRV7LhVM3cT"
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
