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
    "4Din1w5M7h23V1ATT2Feov77RDGDFRBjMyjow1CNvzYFShs9L4zE4iWyUuGPdZ9XQYa79rr4vD83aPTJmjZmx1zY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JuEMJktS9AMxfwSuFFywK5t1gWvUNr47QMTB6ejXuFzhHquxbKZaEDhLCVTHbbrjkNYUVtjS6gzcvYmxN6YhCAs",
  "key1": "5RcgGAJCffcfrQ4TpVFYFQdCSAGC1GHRWNfQrbZzS7P4dJLtmKwatPUQvP35bEyWKsaYaqLTdN7sj4m4gBvFS3J5",
  "key2": "18gdCS4fRaF71M4ZfMXPfmU3arSxjhMzqqNgk3TX7h8aQvcPCwiuG9o97JJT8qGNK1Pcq9FHqZbpgsqhGqUiDvX",
  "key3": "4DAQkDDLuTRv1J1tYNF8hvTebja9u5vVM7W148rQEmky43i7oVsYRxig8HBETNEevZw6Y1HGvkwwuYdwtYjEnxKt",
  "key4": "UUriUkQpqyKRayUzfWV8nfBHSshyLhmDvgCYZQ1KXLSd1ir6uxnZL3xwN5U2zHGATY3UcN4SLvZuPPxvvGz2DNT",
  "key5": "4BQMwXkdUqx7EB4XCHaDYEGuaXSxe4TTBD8gCfwCzxy1nbDRTESXSN5Y8uWRpWKxkPe4o5HCn231yWDvVY3PrYE7",
  "key6": "3nbJUrvyMrjBAYiPp3DYz4fbtAH3McBZ9wG6qJ1pM1FEqDR4EsX3bzK65sXmR28G5zkoBYtoKooMjMZXfVPJyArS",
  "key7": "4jTn4gjH7g4wAdW24z52T9n6XtAWMirxUAn62nZATwnWUMU5ZdZPtdjBCkV3u11KrjTP1FHehZdB5e6HofYmB5CA",
  "key8": "4Ab3gPwV4Ubtxd5aswpAbrs3maPRkciYWKQcr252Kqv9BzP6ASbE6ikMmNyMdpSKCq4z3y5N6BKK1Eucbgoaos3e",
  "key9": "3XhurZ8FwqiyEuS368hERAgj3u34FqznnLCtaTp8TzNqauPQqfympDvXzPXTKU311shdvZfwEZTSugBME9xsh7FR",
  "key10": "5unnUHpCFvJbfT2TYTfwf7fvBBmxyyHWhZZtn1ooLvfLwxGBLn8PpHXbUq3UDTYtb7NCwGk6BEpNifDKhr3mdYN",
  "key11": "5rWY3C9NtmSqtc8Npx1yLGEtnAHdbNvPJp4fmUv9o1GijfQ22qqRJpVdgK1oacb5gUZhh9vyAbMQai4F5mN5WZ6E",
  "key12": "2hdiFSxfD6bTxtqBnjHA2CVEuVQQY9d4sGiPiyDaGsedPgTsG3GTTaDTFwwYY4WGqQ84FUEMvgLMVMx7Ps9cFx29",
  "key13": "66dYjdrysN68di6713N3D85bFYgbTVnDPMB2EAqSPPm1VShDjiAFPKiveeVsDfR6ZSQm7H2Cn9cp9238R6rPF7Sw",
  "key14": "4dsm53ZwmbFY4Wz2m7FdDsA8HwWnix1z52bjNFu5dvCsU6adqRXVM2N338PLRxZoTcYJjnSBWc8Ww7J7YZCaSis4",
  "key15": "iCgiHTkkqZSEJdy9TxEq4171iAM4vnuEhZE1aUxnxJ8dQr94sCpcFSrSivamJubzZjYNVZhrrmqToRiMokuC8jF",
  "key16": "4sRuJ3z6BEThhMkL4g5xkg7TFD7rB1dWePwdvnptVFEA8shKDvqQcw1pvQkjCbjGUU48pKbG4SzVJsnYNY8xuTKG",
  "key17": "4ArJxpA3yYraVmphQ3MSkZwVpJ3BvfbgtFXcgkzdTaDpYyN8VDtP4BAmDW8mqSMM5GaQyFx3FzSVe3Qinar4G3YY",
  "key18": "5Baam7NcLZ1DpLSNYrvP2bCm8nuBGyCsz6hEkakoVCHNbAuDYvKNAEGSJkxvZGnWwPPWmfmZifkRWP8ggwXFCD11",
  "key19": "2sdiZm3hNJ9Wq97TChKsW72LvCA8s6JE9LrQ7wM5HBEiwBJvfYnPEDQmKq65yK2D4YLjxyzmzj9AfevJ6KisnXuG",
  "key20": "5Z3WfsRYcNfC7SS5jR5XfK4Bp6vrC9ksmYKWzPvHw34fCescue7ynHYnB2oxdAi8g1T631qfEoLooYPR9T5rdVnd",
  "key21": "5XEL8sBrxfekjgy4yRsmfcvtYWU54nTxAgWrAkZGcMx3hX4EDnuHNAhZf7zqSX2bzD5eoLHGZDm1Gosmb3uuoPMC",
  "key22": "55xDjfLZPSVSrtGDtuPJeKPRdkP9RapwHEugwuncgCDsB2E4G4k5E5jTTPGUaUgB4DNBfw3qtp2tJM45JKwj5UBy",
  "key23": "YMaGh2u3fxuqtCXYP7tS9M448XSvyTijp2no75uFATiLhiyuL3b39Kn8NNK11pmP3YQWZar4VoUY9rA52koGaUM",
  "key24": "3MgkcHT5v74jeiHc9LH6KR8k337HPb1KesmnzN7mUb3SYwn4AuH4GyjxVVf3R2FRRPg9LxebWGEweomkxGZd9iYo",
  "key25": "4ZWPepS8EDyAA1QmEb3RWZjfD9PitMsLVNzhUsjqgwZ5XGTzZVoeSFEwycM7MffwxNWEozzaNPmwxmLiqf8dVn3o",
  "key26": "tyZg6in9bmDTKk52fE8PJuc5CgW6mBitddLv62msYdcVXzRf9k15CV8iHkRFseoFRo19Easma52pJr1H6fbbFv1",
  "key27": "4vva2DJHPAHjnFhvE5BLeV2MikLndPNeedWzz1wYJsQZvWt3owdE4KSBe1ARjwKaaM2YSbrAe73AeLXvkBfomjTY",
  "key28": "3HLGcfj6fy4AwoSa55eMyYwQbwBUwqUvtmMbpRxJasrYrrFS3eyPfdUkcn32toUzpjRjWd4iYKkr4vNaztwCbqUz",
  "key29": "126CXjPgQGXmKPyfjFo1XiMKmi68cs6VLmNo9Z2ZyvaxSRyWxgP2xuLofGP7R8TzR9tcPFJ1xGmKJy6ay8GjQNg5",
  "key30": "23d2XNCmK44vHQTAysQeKFQ4B7zq6Z1kwmmbm8Wm7ttCuSLtkad3aACNyxiMW6RS5XPiu3fBJAC5fUaq7zLeGFkc",
  "key31": "2e23ASqzxpGGLG1smvjnP42SHheAw1CmSZqq3HpBndBtRhtbf2ZrxZuQgKc87WcnmHDsMCQHh7pGWov6hBA83n34",
  "key32": "hz7feZBRuEtKptvu8gU6PvUFWbBfHr2YWBtAAEBYbtpVqhU39S36aHpkpYZpCZHF8ppjViHNq3hQ7hwBU8VWXKq",
  "key33": "2DQ664fT8wUn21aBDvTzjPnG511kccuL4JtGwq4KbQLSkE7DBNVb9jTv46MUHCwpQBQ2Sro3UdWR2sQktH2ttSWs",
  "key34": "3UUMykro2WRi9XNqWkEq1JmoTGVNB9r2xpai5RVSvesBw6sCn7c6axxYu5T6ETVgLYQnLC7HE6iV58vy8VG6Px2U",
  "key35": "2KUwee1Ueq1PZDPUfiRpHii2NEM1BQopkEivX4F4reicQ1Pushv4JMvKxwRveeK6rSyUHEEQmZuNMYww68TuQh75",
  "key36": "4BLHYiUdqP6XBW5L1JsdZWUYFcb7VPyQYgQ4q7X6RneewtFGnojC5qS79VJ4jH8yoiyM4MSrNaxWys5hQhTUapaR",
  "key37": "4bavqSuXn95Y7KLhcvDeYPTJyPc4HQ7hGae4TAd6dKro3638LrnMooyy7nJD2e4RHU7ZP1Q6sRytJydhBQf3pAno",
  "key38": "EPt9VTuFNWhpS8wmbmSxccKRu348sF9yFp16cXPQ5FDuTtLiEqQARpXGqXTm23GC7gw8qMJzLND4338VBSwCCBg",
  "key39": "5tZh3Juwr7TZZ4ef9czcszDB5UcyJx5E98wX89i3qQ1qFVUaDRC1gR9Qxwa6EdzQRSd18VQWHU9DdY4gRooWdpNE",
  "key40": "5XiQWK75jkNQbiEfmf1uDNJV4CSTyWBpmqqZn9N7H4exctCWeMfEscRKdC7muCf419LufRKaASrBKxMXKPjy9f5n",
  "key41": "3k8ykVL5f5gkd6rok3TB3gAmPcov3BL683xdd2zN9PQcerdbokmd41PAg7qGWCggLgckkP6wRB25zhgYKferyQPY",
  "key42": "521yAywCxc64uMzEfXTBcWF1VyFVaoWtUpGiR1saiQUhU6a5uG64VdE3jzt2hnRzmgWXKQQMNJxc8c3pp1N9Er8o",
  "key43": "3f3ydoQw8mfveqAbDazu1UFi5rJs8gNDGUXm4xZxzWiX77jra2KnqAboHDfTouak5JQ19dqGGrvgc51R7q6iEtfK",
  "key44": "5bDTyLtmGqqsmKbqD9VeiKBjNKR9fRAqjooQCdVh1YXAdbmqqNXJkTSPv3jPyKGUudPNEo9N2NjLnyo4dUt97x3Z",
  "key45": "2ExYhE91cpv3j8dneE6wLYqGbBvHVeVbRciLrbUbYWjiAF4JdGd8ddUGyVp1wmY95GYSgGkQUj7HHV4p81tQmvXs",
  "key46": "4pJP1SnFbXq559o2U9TjangopAsnucfQSTgB7WvLWLgN9rvTTFRGcynW6BoF6ddnYUP9WsQTXhTWi2Zry2nRvLUt"
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
