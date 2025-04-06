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
    "Sagn7RsCdF5YmuVE7MmtpbcNGFFxKwUoQpno1Cre6Y8BAtzjpn7ux9Gt3FYk1K2UJHqeaADHq8ckcggqFFrbVom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSt48D3ZxMXZe19wLuqiFsK3YjTN1k11ztr3bSQKHXVf9mdNbuqihKind7zeeHUCpdxUzPZ9GtSy2Km1Ri9vsLa",
  "key1": "4qGt72q6qKm43o69GWpaYubgdBikhYacyxZvtCoUgCaeHT8G7JBdGtN8waUP1gWUYje7yi6Ns1vgJrjjpjCQiU9G",
  "key2": "c6E9K3XsKzqw1xgF7FUcepEZFqgxFqExH56QEBDdeQbEjGFat5CJaXkEyoJAuF1c9s7PdcL8Yt1QPYMguc8fHW1",
  "key3": "JjBpH29Y6fhPzqKQ3LHKv5uiJKRLmmvwPsq1uh4eJgHaymyF3NdMuYEL84Ppj92szEqEb9xbrjo8ASAVNJMBCf7",
  "key4": "fFVxWprA8Z1PhpqSg3JSmsbNVFaFLvzPrvEYJZTdfBSLmnGb8LgTDeH7MBpGAsxs8uqughgx1oiKX4EdNtGLFLX",
  "key5": "2swJLyRVuZC6LeLdokHE55kQjMfMfVXUwBGXJQFrGbxBCUfDp7VF4FAMqpEoQwVTzYs5g3wvHZ4xk6H1yvP7FjGS",
  "key6": "3Y62qWe1nbjjCLbNUaN1r5jzZjVvAwbyQXqVXjfUGNJVm7psNyz1Difv52UYpW9V1ZPB1Tr932cErpe2Q9kjySYt",
  "key7": "57Shux2NiwUh9M9uBtSfAmf1jDpF3X2c9noSvRPU58kEYnattqHqrCP7g2n14k4B9WqnGC2EVjRavtEugRQA8wp7",
  "key8": "39E5g9LHfTrm8dGdF7iyd8p2Ghqs8JgPyJrjtmYoAZz1FVsHk9LUU6RNwh6dxrLBvbduWL5czpjbVh8d4VNYxd9P",
  "key9": "4iLXAmQZuCyED5BdATCtAnWuA3XyHhrgeZoEwj51xayi9BbqFpd3J1pjgU5zygFtxFbgMTVdNgDZtF5svZ3NVBVF",
  "key10": "3nPyS3UzborCh9PCT7nacrueE2QcVJzzT6UxrTHUe9tCs2x6i755ePGbks4956pEA36UvW9ZbqesAXnY2vnKcG3a",
  "key11": "5onJi5sJqoyPzYwasTbvvbtoanGupjPaQ91Wpd3AD2ZLhLp5fPnGFtKWoCaeCUAW9Q2WVzAjLxrDT5Vh5FR4B5jf",
  "key12": "3o3gbxP8kgQyQkhaVmhfjxDyyeTUCdq9RHYQL8UAtmpqv5FH2qTe5AqL5sQzN3uGLSMjSeFPUcsMZy6gCajavQcJ",
  "key13": "5Lr8VtozWd7EoYKDeiXzaWw6FMzyyZ3jTQZuYP3e2ZCVN3GrLXYTn9R6WPQTYhwjCLH9H79Za82RiwowJik6p1Rq",
  "key14": "4vEkHY4k5K59XshVdpTYpEF2UsKiBpnNY3MyUQQJQyHqCEka7F4AYjibErDpxnyRmpzmrUzzSL3GZ54tWteBLL8X",
  "key15": "4NpMHwxnJqasaeU3JVszp8aFjDB1v946rcizKKzQ2S2pejFei1JERY461ZrVG4mjYiGEFZsmf9tUnjLUQvfbr1b3",
  "key16": "4KMS54b5eHZZnD59PaZPNnmiR6KYmkQeCRPJsNe3nFZZAMLLLxHLW3J58eCA6Bq1XoTStK2MfgZSLq1zxgYWEMSH",
  "key17": "4CNdargiiZxENpxhCBVcCbG1ytCm9DkFhtwQGri5SmcTTEb6YxakqcXTWqEgrY7iRwTJtEik5zPXEL2QWvjTxAeo",
  "key18": "4p3dSZ9zD9S3ri4eDVa7TCdJBtMqhjpacwsK8prmCQG3v4Znd36VETEBWW51Xh7NRLG5N1HUkFAwothHNCRwLdB4",
  "key19": "ikyDCcjewHKmbErRyb1PN8F7o1MMYzyncy5yEftdj1qV5wPVr8RaSjBKsdSbNdfwxSfwdAcPG1hxbYakiU6cWpq",
  "key20": "4nr2CpVzHjYGsxwcM6tmq3MdPeaYJYnR533MVzoJBPrDdxn5GCB7PkLNbjCAzQGMCTrJXteFSSEXjjdVpD7Xqpin",
  "key21": "2eBWuzK8SuuptXRC74DY5iiRTsznCXBAXBnXMNDbhSaK2J2GoApjgK1xTD7XMrfEFfpsdsyFgMV5fLhJH7c6d6z",
  "key22": "1H71LKvUnc8vzPgCHAWLsybAZrb3ygKGVLPAnPWW2N6CXMd7jmZsW1pMfeYkZevNbz3Nh48zANjRFX3hsYMd3ke",
  "key23": "2e5nU2YwEVeyBNXCwaKon7qPSR5tiuXQoBqQrZDXVjt4t6m4Tp25AbqV1cyyWm3o1AP6DBSATw5CFhfrC1JRi1Eu",
  "key24": "2PxabqSxyBjsVKUN58KPBqSXck3zPuHHASuPW2hzyUn8utf2aCHggVyv66d7JCHNJmnxJLPCkkyouykwHe3LdACZ",
  "key25": "DKW3mgu1MRYjrpgD7RRsC2WRxPKTuteB6zCSWaREGEsYej6YFHCzEojWBBScqgqBHFBom5rLTntusUyME3C89RA",
  "key26": "7FPhn7xa3YJ1aCBfRLfs2LJV16Eg17VjD5USF6VQbzfHpDHw9Fw5F1XG226NMkM5jZniFLHUJycAJ8ucPJCkToG",
  "key27": "2AnRvUXHxh9tnDCAKjZmMsy35zWNcSR9nVFyTSFopDrBsf9KNPvsBvrMNq2yUu1E5NZ9tSVaoxhxebjqZApd7TkV",
  "key28": "4bnFWU6vUxBAFGcrFo1CUBgdzFrKWZ5wcLQ1TQnJjTKBtEzQqPkYvcsfb7XVY1NGkqjHX7pE957roRyqkTCGLucL",
  "key29": "DSUVTA5Q43VjkW3oojuVbXETYrJtScpX2ocMCYpiXxtJJuhxHiU6XGacdprHmGAbSXuhNyj7bHSsyQ8ZXmz6TCQ",
  "key30": "xhVocsivWMynyv2t4jUjEHihTnUX4xUfjZRAsyPFHuyFwecM2mupDYm1uHCiYbv62kSdcRL1jMVcBbVjhfQnBeN",
  "key31": "2U9KosV4zWWj9PWUFCRQkrrDa3dF6znuvkmw26F67fTU5kdQZNMtBH4fxrhiy5Nh2ADx7uH33MjZqavCiFL1MSev",
  "key32": "53L7ZbGLTATQETxgPxsJ26UiNMni6SuGpBZyhAHF6n9VThuxRSRxjAYjHLFPx2noJAPiBwhqSQf9weN8jMwR6Pxo",
  "key33": "5QsZgAWdnPF88BLMUvwaYjUYfZjR7Gs6XrNrfYfoi2pUNEgEwk5uzRTnjJvwx552rrf8Z94YBosM2Rx5KUvcXZPo",
  "key34": "5DqFfsvtocr88RmEo9dnaFoyL8mukfpeGGXAA8rfhxn8kox6ZrXEnYeNxXJVG3KVekK94QqEAXkZRcmgQ4BTe1Mk",
  "key35": "Ar4njAJHnn9MXKqvauEYqWxZFH8BFN3An3csnjGCBnKaimTd8oMEDRRW9DqymXQMYRgYZkN1yWzXFiqcRnYdpHY",
  "key36": "36Wyc2S9qmBD5xB6H1Bd2712qtmuqzq3XjhHiRVopsqTDNrPL6T21LrhwU5XsXbRV1bQp6MfaaUBV47YCW4FSEGz",
  "key37": "2A15MGCgs8WKFi8aFL9RXW2h251QKGTbBxusvJhNK19gmeefqcoeFaPenFoX7eNjvSJXMLyRYjkHRqF9Z6xjc8F9",
  "key38": "2igmrPHcLrvavun88d55e9xTuvDQHjMt4cn92cAPFRCPDnJYY7dvrRg2vvTSzn97F9APDpwxy9GkC2UWRHPashZe"
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
