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
    "TiXrDuu6XqsQPvmC6rLgTbqBdbmtMqyNLDRZiuhxN9h7jewmvYt86xGmczmG4KjVsMihU1Bn9CbsRQbfV5gV4A8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XqG4Duj2PaQJzKBAGS5KFriKKsJAMJuvnEYdoq4WLXvHoGSBm69UTA1FXmLTeDuf64gAx1Y4C3ydJwuNqLsmQes",
  "key1": "63XZ8fD3hGVYKhta5yCvhcfBth97WVPsxRggYVaJwMQUUsrpxguQrvj2VrDdj6FyfWyQ6t2Md6iPDb7XWL1ojwUY",
  "key2": "zH6dqX6biGB2mmuLUerWaHtYK4YhKd8nToWVnMWw5bSYFxx5tmNV9gt2sBXXxE2mCFiT2mHhLQqQSUkcJapokTY",
  "key3": "1EnQKVR1kqfzo8XD811xpaKoqPTNjGZghEpQKj7rbVcqJfy3ZQhyXM64hyZtwo1u9SNCRAEDbezaNDi3dtpPhBo",
  "key4": "3eETFLpt2cgUvMeHojbhZvjRAHEjfzSAph1eSMvu8iNoyEBqw6Db29CxxiM5pNjTxyemBnrtUvikeXHFkb7rqrcj",
  "key5": "52pyhFnEiNTo4nF58BomKTrjt4YP1ZHsPrVQC4jHPVvTXQ5pm9jjXtwskQ3RZ8ASqEmu4GCGb6S2cVtSRk2KvXi9",
  "key6": "3DwQi6meYraSoZjwaFJQUU1jcPajgNVtTBRZgRPA3u9XsE8VfgP56BER1jmnFfPHcYVgstMEPFBMEmxxDwAjJ7Kc",
  "key7": "3f8eJXWJpE3oXY7zAyojjBKZ3HaHjSbg7maYe7mHHb5exMPBocY1pitXFjsqMQevQPxzmAVMcFdjJNw3nuUH7Q9i",
  "key8": "5prbZwGyVVk4nDugpXUTk6NJ5QVwxuyYPg6x7o1bNxUqXsb78KSFHbdj4XAyf5rD81F1mrm4fiG6UeSFY872mWaH",
  "key9": "rZohHC8tj5d6cKGZT548zxLiPrgH3Kb7nsFNyZxWMKydsS7J1Q6aFS9in9CfdEYV6NqCRE5UZTTtKeUSY86oZRb",
  "key10": "5LxRiCFwYYN5iatU1kdm17hACmYkaaHbNe3nVvy8gjzthoPdVX4j8MtwD6J5xvYsUiLWdQc1RsnGiUgMuB3MZx6s",
  "key11": "ein9Rh9EyeLueR17Z7nMRrrJ2tGDM1yBuVGmpJUCsMZt49gxxWGuJgYurrqFNeXCrkYRauSNdJMNAzGBqgHdbS7",
  "key12": "2qBvPkoUWwsCzJbXerVUszhehUAzR2xDffp56RfJuv6kaUgDUry72nFRHbmvxWcA1S2Tgbg4s3y5CA2AYY8j6xe7",
  "key13": "2DBozCRsFGYXovnwvHp2W9GsPYRiUEAyVA3ndgunZFL2HqLmv2p6eVRfZT3MDp53bDxpNQNmc36F2hibSGzYiEeL",
  "key14": "354XJSetS1B8GFpkFVkTdFFqwqb6gTX4NMXpreFqEEVgUat4EVNNBgYNiMuVMiivj8iWtXACGFADHGtRRnpT93Dz",
  "key15": "4DAmDWK22KvkC6PiZdcjjeGFyPHQbuwUBtgdJM4Nvv6WPQ8D2CKjm7phmunpQc9DXyofcmbeynSvMkuwpp7oSZo8",
  "key16": "4cL3nvexsbS9qJHoq6f3sdYoNM62MtMADdhu5RzQY2KWrF9xdVCy6E4nKtWgktaG4UNzKAF4dNZzz3f84Q3c5aAE",
  "key17": "2HzWBjhb4SjrwQCQjzGLt2H19TtsQhT4cLfHDThBmmxbXmCTBWcSxT5Cv4tbKmJY8DCp9uhGCk4nrnmJA6Qr1siL",
  "key18": "3AYgiaA1XXG8bG3xFGHkjdShApAxEdZHQ4EQnDdT5qkDwPNXbGgZehLxukyQqqFLNyaE5jNSe5y5AgaPK4GbKsW8",
  "key19": "5hE2cVuffwpD4fCnffRJd3UEvfVTVk9XnDH1RRD7GirHZpVUfrEMSMFoyjGwbnNhoW1fr2zqs2o9efxPZAdQT4L1",
  "key20": "555BZkeyr82Gt32RaEAJzCAyySrYQToX9HEsWaDiDUaMENJpwERk551EDbRyhdj6UcWatYQ5SDDutysfmhxn8Lik",
  "key21": "4CcrKEfGqc4KcgFzKS3XTDexdxXTS48S9GVcWHLfzBarr61VzWhbr1RbfmDxmRNmKdkaKEmHZfo4KYkTvsGhPSLz",
  "key22": "5XYFsJMVr46su5ryT1nvShcR23VoJPoEMtjJteDwCXkD9A74TsaQ5yk9kXqRMtvRyGtN6knSVSHycgXDxx8QKNdM",
  "key23": "3tjcfCdUKyj8wttwMYDtdvJkWYTyFQ6gC4bst3VCgXE2HEcPMmeDebZWtT7nAn3oTFgiALBHf8adgfBwraYvKq9h",
  "key24": "B3LCXVDsEshj2rsjxrFXpACqof9dEBhYDBbyzuKiow5qrWDSrp26XqyzGb8dTUqbsYhBiMPCGPSbeAXbj1Hcki2",
  "key25": "3dYQtEtroKkvM9Ru48bD4QanRm2VgDU4MgsQugFH9T6m216XA4QxbEvgJZbvycFj6JPgKJxsbACSKS5r4U37drvZ",
  "key26": "5Pig4dxNe2EwcpHJr5brMfvzwknz6wc9b3txWok8eYx7yfcQ3rhAg5VMBBexN2fr6CSSnXrbDFfGfMLYN8vN5Uwm",
  "key27": "ej6rpPU3c4i2uYiwh1SbrWRLehv5mZAdBG65p6j6n9BxXWoY9PKNpysJagLzaBtQdFonFGLf66KV9mmdp3rxj49",
  "key28": "2gq9aEPtGuA1qGbQ1QrSxk6eLgXZuZFFnx5cohfKCfiBxdnLS1MRNnjatGC31nVvURHPfSGjvxF1Z5RbueQ3hWpR",
  "key29": "2exL2DjcE7S7AjMXgvQ4JN659SbGZMoJv2UBajXyKurW8nuBUijFFwcYWbTN1d6HNU9YGsTLuuUPKRLwGov91EEY",
  "key30": "fJaS93AF4aUNB8Ncib6y4rG19o3s8g64CuRsTcmEUUwNNYLgBkQMVLqQNBJ68wsP2sCRmHzdUUL3NUAs4rMpkja",
  "key31": "7536haMerh4GPF9xuQ7XR1hHBPdbWmuyqV8MAS6AuDzBz283uh3u8b7qkABASx543B6QRZXN6JSHwFxEw3zB1JA",
  "key32": "42QiVDJBEvdxbcNoW69VYSa8GrMnysisf79cnGAcs8rLGA3mCQJDTPJdSPBX2doJyiz79BivS8SKqGLksCRW5HHv",
  "key33": "5fCZBo46f7N8FgAhKorQg2SMaGPNgrUnPKrfxEoExTaJR3Ki1JrCcGeKjwhqkdCVhe2rMtqkehMgTQDXqpJvN8AU",
  "key34": "5JBHNoCzMEYfD45DPLh331NrtUYjp86bR5QrxgbuN8mrDDPtPjiKERdyiVbcpWcqnSfqVrdX8xxagkkKHNoZJm54",
  "key35": "2TP9povFPyRBzo3UJSMAgWQULX33UZd6xP1PHewPZzwjqzmL8PG3oxmF6u5LomGhWjN8BkCB4KXbJsTboD3Nrkvq",
  "key36": "f93ih3mz7iFjiGkpU3FDNkhWpz2Xp2aq3wGZtiwxEvmgcCvcfanyDXvhJNtRkLetTKkGFnXN4UVy9SzQ3MW5UnP",
  "key37": "5yFp93RY5X3kzvsr7zAT9dJbKcH3TxD5w25tzboC6wWPPPf7v1VA2QsmsWQ4qGNmvtxq5MCi33FZSxSgyzTQ7jDy",
  "key38": "3KHhTQgrnMHymdJNsGvgDKJsPefKG5tYkeFY85hPwEPFqxMc4ndzzZL8FM82HYFkfw1modVL25kojjfcvAh8hwNV",
  "key39": "3d5UZhabceBrix6PChgPo6Wt4bsQWPZ4a23wfZPErvTutj2swqjrc9n3NVSFqyhKgn9PKKvm2tDsw4EkcddxYusX",
  "key40": "4F27YHDF4MBhjJ9a17fmXio5mjTRHWhyvgLN5QeiDajkvabgzuZHxiLxHckjoTRcaQvnkTy5AYtZHLrToLjnvGPA"
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
