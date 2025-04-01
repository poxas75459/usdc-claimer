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
    "28UQL4Jmyjgpm3sZfXWNAwnuiFEGSa9CzHcRLsKskjfnjptU5AtMdyq8havaiJ4xbBipsbhY4YHffYHwCsDAF6v4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QgNqZQJ4qwFz1oSZSH9NvuBEJFsYHaws6MBkEq6eYuUNVs2RDrw5dx73dkp4VHZZAyvigm5s8MBRW8ppT3NfGxW",
  "key1": "3pUqerVwqESqkccaBBySoBeicDFfCAAdyzcwT7AFtWeuP1rhbQh5Sd9YiGGZjeQY9xnEyyW3BW2CB8BpaVwjaP5t",
  "key2": "kdX9A2kyJEprp7t668rAhDfVLV25LaS73wCTAQeN1g6AFZkiaaj9z5FFHwByPWozqyX3sTnZGFT2vMjcvz4uup9",
  "key3": "Uo3MzrEATbFtwiYtwYm6tqd8exH1LQyMbAxpNUZQUr5pSsedYa41FeGZioNuJtbRHRsWNgqRK2YoUqyr7LJvsyD",
  "key4": "237JSYWbCh466eGVv9R8yXHdiMJQNKVD9HMeTqH9AeLrZCNvgRc9XabCt8JBwCphmNWbFc39peh65KwxAG1d57C5",
  "key5": "5TzXdUMZFpTaPiUa1SWy3oP4DS1qLrWEUa2eqJ8B1sazvxSPpyJ4X5xGTTU8x6DhhwRrxzyRtYQ78TabMZvhVaBv",
  "key6": "4AejPTwdjLPYVF1MgYEkp3pPBMVsv8anECHhkhx2e9BRGubacWpj1zehcbMydNS15R8GVhenEMqnjgumLLsMTTWE",
  "key7": "66tyyYp5ZhyBoqfTHUmwqRV5frg4xdwgvjhRC6knSyuAXwN6sVxjuGEp6cTjDBkB8AkEYNNuPjRurS3k4yp7WusR",
  "key8": "2NTf2bnMknNTCnqz7d7zVQaEN9UJ3g3cC4Fd9zGYihhpD5CveGhnFWgY4A5m5mB1mc3pYLfWzmr2wyybAvQEuQfg",
  "key9": "5qBpRDDFYnDgPDMNLUFATZ2BGnpLBMYXGTWfpAWMgziBXBigLU7yyxPbgNYn8HVXsS2SXUjiLpuSQpLenG3RpzPZ",
  "key10": "561NASNxXgarshzBrkd4kZWdCzmqzuzBzdVf3tUD6Bg3s8Spv2q6RG7MyknL6giVLFuspDHdkpJKARCv3DrWuF3R",
  "key11": "4cHDLp7nTUxMA9fJZgB6U3kCtHKkfPAnTj3zrZwghdXsx8J3hyJ7EpisJqXKZZUQNEG87nsNndCq2ysJAAHCvLEJ",
  "key12": "2PmCF2G2vPj4KW6vwqCczGaYDCNJfeHV9rgnHdf8pS7XyM4Q82LduUGu8DB4SVmWEx5zvhWVqehyvANd56nqdZV5",
  "key13": "29kQJbsmTSPnjL5DTuPrme5VoUF6Xw2z97hkygQ4oeBP9YSNRnEbJgAvvsEjNaezLK1hAMquFY8rDP8U5ycvEDvx",
  "key14": "3tKsSQPyyQdBqxK2BLf5Sg4dfrkmtYPXyczaiU1WX8QoYizuC8WaT41Yh6Q9LXqtsqPTutqMmwEHmLQ2aRNjbwGy",
  "key15": "4oRwXJFXChKi3PFJtGDEQJYCihuksvafyLy7fwKmDJQkrdFVqNYbPEfPV9qrNs81JsaHV4h1LRv7kJY8GGwMhSoM",
  "key16": "2RRtAfCvSjZ5MJXAW7cfg6UTVAyJfEzp75GPQKup4y13rA7cq5N4XbQ5NBGJz5piuL5PinMH2vwuKGsr5TtzEjZ",
  "key17": "5bZjM6GCSj2TxXJnxDEbugU8Utzpa9DQ2Eua94nHKo82p3nHpMRUbukj7X8eBjLpmpMZ3ufF9KbsmC3dNQWAHqfg",
  "key18": "424hqym3KdEuuqhaEQxizRKZKoZ9GJtLsrrKeJFGP4X11pX262hvaFSYMzbyh15t2Dy7QBoj3pZDTHTvqgDA2tq2",
  "key19": "5PK97AsxB4NadCzmjxe2NQ9voMrLnNFw62gAcGH72auUZeu2669JxAsnd54NVdo4Bmha2b1nraJcuQALwedZUcyL",
  "key20": "2nTmrWLzgFr39h39sVKsdhZaeESffCpa48PSzmCE3zgq8DZvKxyaEMgK4pnN8BZy8Y5emzHHhiB3i9YH5RogS3SL",
  "key21": "BVP2grGhmNY8MmpXavqZUdscByyKqbmnTbWJigXEhLr1GBMMn1GBTZNAprQFjaybKd9x598Rrxi9EcU7rX6MoME",
  "key22": "2Ty6uvmjjNfjcirTKtekxzMcNFxB7SAr23TGqAE6CR3gxu89PFr8cojoQkVpXz6XfLQZD75BFQDMZykVFTciS1os",
  "key23": "wNDh1GKimXxZCWUGrkXz5c7fULWFqGBnJT5oiaFLA7eF9MFYJNjjhChKbwPcsAzkQ8V8JdwLM6GHSBiF55CvsTJ",
  "key24": "5zqmUx6FQKhDMHjVq3pozVsACaorXJRFrCQzwsKV2tympcQ14K2HEuzVCVdvCze2tokqPdMWK2PsHj8dzrRBkjK1",
  "key25": "2sLSdmsnYxnRJXcVrR3NFSN1J4aQW4BJvEFQtuNq3TSXu72Mg5C7iCLW98zcvZ4TYpPHNPk55DR65tgJwnSAETRW",
  "key26": "46MSv7Pj1UkV3G66TdyrNCaKn53XFeUkFNaPayNqoHZ9aM37NWP43R8HwmyE3q5yzacVuqQfFjF7d3oA4nRWzReR",
  "key27": "5jekN3JtjxSdUXr4P3nS9SuV8qYWigbq3VPyuE2e6CxFn1K7Mr9pKJf3nV834xM1cwZtvmGb9T26hR4x5ygbhNx6",
  "key28": "5h17vSbB7nGUTKory9MfEr5p4jqGoYsptpGU6HyuzmYPxKZToCyDMDaL2qPeikiTyPrXZXVkpkQZk7jJYUgtWftH",
  "key29": "4EFH5YUoTVH9B94h2yYBanKh5in7bVEJau9c8dZs1VFvXVkQABRvD3FsRpUYJowQRkwXWXKFCMGeUWMsEEMrwjRD",
  "key30": "d63TH7Fe48hVVV3KvwVx7wCXaSDcZfAzDNgRQBwnh8mZXwzYeQS6qH3PnUuKB53qZcP6PfLHfZZ6SS7MpMr7kLU",
  "key31": "66iwzefxKnfvM6GMntV4TPX3zUDNyRQdgmUwcoam84Mb129T4hu9s7fnZZibiZQ55GuCLRpB2KCDb5M8GScKJcTh",
  "key32": "2vt5zbjYYZvHvdWXZi2AKj93Hn2gJuPy5HTeAnXkFbUHxDFJFGEjwkNUWuiVx2njmvwZx2uNzTXMvnDi4mcAzoxt",
  "key33": "8bkaW5EJ9PFffk2SSDW8Autz69ZK6wCXCtbTsuz2LGqWRXCBEw2qTR6utG11SSJvQoKbLTcNEm3nMP6KHHLt24g",
  "key34": "41JanL8DJAHryi2akjv43LfbLrwPokR4DpuGMoNBLrBKGPxidJcw9cLG79y95KNxt75kPxUMd9SqPePswFCdT6WF",
  "key35": "34kzMqC2AgjPSSchuft4bPuGkrZj5r6zmkBz9f1RanYyGvvnUsodi5YoMhVhzqhxmnCvDVyYoGTxUdVjEPWuzFBf",
  "key36": "5oHPFi9mJw9TB52FM6XrLipfzUe2boFFRAVU1apm4JEEWTHt5SMm13SYcWoEfB8Uxm9WUrbeXir3sxpafsafNjou",
  "key37": "2VkbgTk9N2e89hNkTecYfc6Ri8o3eo2pHgur2dvmGxoNSxUAzH945acRASxiqif17QxayfcQUBDbfHEoXJMZGLnN",
  "key38": "FiKtMzgk4QGphnAoCUWm3cvHbFadfhfJ7RKcMJ15gSXsEfrXJeDUMhAFpAzPLdBb1oUk7oLgqbSVqJ9eNHPkhKW",
  "key39": "4Sj845Dy7LFuDctQCQ8sR1cS5BSbaQVS7GJKVC4ZNTxpCSg4871XhFivM2Djbh6VPNPQj7qF3Ud8d7Ke4pe3REvN",
  "key40": "26BQ9VtaaiGFC9oTwmR4NcpkC8joh3kHkmkvGWzDsaqou9etdTkDif3hWTSz7apRGgQriLnM8cerrVTRcYfdnXR4",
  "key41": "3cTLw8sjW4g7qefy2ccJRaPCY7sRkyPrbSKC3ke16ur4BduSN1jGvtj6UgXFUiYA72LmazpnP7i8iUUycXH6VQ3M",
  "key42": "5GwP4HB42nk1HWDQT54GPAvXz1yqdowhQVbESDfmxP9Tqg6Nz6GJVr4diFK8keTexkpB8F9LEM8XGbQDwMqcDngu",
  "key43": "2mCGAN7J94Q2gKvAYjo55Z7hshFD7xeVAG3gJTXdbK3Dz7xP1cEYaNdJNqC3hpA4bssjE95sPgry2dVwqzcp2QBS",
  "key44": "VCfDaqdTBtCKPB2CGKEbyZz7vNys2jAZEw6D4U3aYtLQoH67RSgWi1AaVXGMm1v99n7psuiC8WPQhxoVCzVgQN5"
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
