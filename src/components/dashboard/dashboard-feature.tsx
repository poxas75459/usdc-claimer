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
    "2JYmEHBrQnPDQogZK8Vt9wk7kAFFGLZ8JUuCGnAy63jqCKSHEa2hY6ojstrYQmw7E766eUC2JVfx5YchJA5MAqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hFU5F5QzF3r33m1qxGEYP33Ev1Vp7UnFqETpXPkm2RYR5bBq6MMeV9tc892rX7JDpf9ssStZ3QGDUUY78bBLRn",
  "key1": "2K28h2M4BDVMKLPt63izDKbSBNoPsnHWRnf9PLH3LJ3T6jCyo5pLR3tQ62TLMsb3EqNvCZTFppzhW3aHcZo9WHun",
  "key2": "5fxcrgUDXAruf8TrB82gCJiyNP3HW3yhCGxRHSE8SYM6UdG5eZaP5LM2YP1miTLT1rYsN6tGy8GJr1X4KHbAAssc",
  "key3": "3bzfzeayQp3G9pjFsWgYjMQuX6LXwagHfNpA1LTb1queuCfbvLV5ScqPBLDN9cBnSoV9mCp8EGJBuCWZQxXxoXha",
  "key4": "2ZKKKRSycMBtbMyKobt9AgX7EtYxVup68GjmgtpC2SJBTbugaSjuR3VMsairDJktUnAzZ9JGmpy2zidDG1s98eko",
  "key5": "46afYc9sNdCYM8z2J85dztB45zFgFW6KVZcgcgfd9C88e3PtGLZzXtPjiz2c1D8ybkGrXf2v6zs1eJ6VTBSrpAgR",
  "key6": "236KRGBDzhKxG4JkbZeWc3Kf4m7WZH4hr7PA1ZxprYBJwsrg3p9tCrrnN8h7dedSKx5TxjkqrFY6pTS8ZKDq57AN",
  "key7": "4MyTumQ7KvRMTDph9bPuYUQnUvGizj3PgQo8sWixkkw9KoacZUjxv4AHpRR7tvaitb7iPPRWfBpoeomku9nsotYt",
  "key8": "2ja7PotphG3eBiF71CwHdrEjxJepcfUkeJvBUiX3pVNtX7XAB3tzpmheLoBJcgQ4pEFRJALcCVWzqX3wFoLVF6CW",
  "key9": "4wt1MeUk3c72zfcc9476o4PCRchTpXRiDDwosxknPuybKzrVcom67wCcDK4PzHkFfNFn6B6S1sHBjgir2fa3Cm7",
  "key10": "5y8uSCyJN4tpmheXTdYwFydK5XYoK9avV5QKmLKFy2FW9CfH6WBtb3kpNv8ex7EQB4kMU8hM3ckwQNNyUQwkDABo",
  "key11": "JRKHdrNbSu6sZkRjcUFmDzWvbAAFajSAPwgBLmZon5LLxkHxpqYadQV13YtDZrRy32vengzQ2MQyuka2MyNfVGr",
  "key12": "4SBdc2k7JGst2k1DFxVbnp92L3QU6GwKYydUmKSvLu4j7ug726vjAUvcL1V6FN4eFZtQxo1PzKyavDBpHpqFjrHL",
  "key13": "p2M3NhcFkt3Mi3hYnz4zhsWPbxaW6Fgm9z92BU31BjxS2uqTFpUoqqSmkDs8itsn5rihW2Wri2uayyhiyc9pG4e",
  "key14": "5d5EseBA7Hy3f2yt3KucLaMe7bYw6VyawMDAFjgHLtoVqapXS1qUzVpnP1tTMtYCy1xiuS2NnsULGSjqMizc84Au",
  "key15": "2EZKwrbg34uU4CRkVjsgVkKfv2Mcy79tJkybkp4Dv3NfgkXsNnwMc9Z76DpKZTXPnWba55kAdiPNt1zJiJD4GPCi",
  "key16": "kAPUgFWbcxnPEQjJ3JWGScB7c4CL4wokLAxfFWT8RbHzNJsrMm1jBgFGPURNNMj7HxD22hmkMxAMWEMYcjr3nU1",
  "key17": "8SS891QELavmqa9WyL2z6ig3pi4QopnZ2uWqMB1TDkT7VkeaVv3YoTJyCtmwuGaBia6kSoB777f5PtxDDthrBqG",
  "key18": "3E3PfKPbTrooMKrHJtpq932bnjH2auoHuL3d7z5YhvCbAhbzZfcbvHyE5iWE9N3AwwRe9wVgh5dUR6KjjffHD2Nu",
  "key19": "5sUvWByHexsvdHeLqB7b2tGNKsbVKEtrrPJdNFCq7ZgRyWmWdqio1nvEXUh9atkQ48oJCkArweo7iYqzE2McJgGk",
  "key20": "5djTc7Ecq9y6hbxfMkxJBhgnCvcTTGmQG5RdpgHvgqdKDFD2TksS6of4ziZoMbUyqzBcxw88U9mHdvGmy5uJpVLh",
  "key21": "3nXvpqXC821fxLmpBTqAoCMFdxoPJHY7avh2coLLazcDrutzYkGpYUfXPdEL1uDneNkpr3MVo3cexunCipmL4qaA",
  "key22": "5c5kJ7bHLXycG4jVsPemCmDZVZvjeaffHKG64QThMvx2kELDRGKWg1K5Qa8LeigfY1uxrhptZavZTbHSZoyXyZEk",
  "key23": "5Dj1YRU6ntwPYT1uNE4Uc6nciriHJttqU8fh5XV8QAsTk8sTbYN1uex9pZvMv883qbQPyJkMrqY9NeuLq3QrAkFR",
  "key24": "4ECKu7PR7wqCuq1AvV4s2oVjiUSni5rmgjU8PbwvzQ4Xy3F6YVnzj8rPP92Ntrfb7GJnP7fsReDfUf1B27CgtZzr",
  "key25": "5YhBTB9N9ceoyEw1c1XZkc54nkzovRD39afLuzB8Pnv2WjjyuJNDTKX1M26XyBT39teV72KiNgbhbGtQ4TcDQfpL",
  "key26": "4sLZaKzCtC9jXBYBNHfnDDWn76t866n6QoJAnh9iWpNL4sCu49GxZnbZSjg8vN7VwC75DDC9jEEBCWHCw3F9TPnH",
  "key27": "596muP8CYZA1nTnCaG8w9ir9HXfVJsDtXFXodetiEQcTCPoAHFgubkx4SqkN77iUQiP7H5EqHTp1VwxktvfajgfG",
  "key28": "2Sg4rqmceFAr2B6sHfYYVxXpHwBDobBjeekThZV2a84AsSyicZUkG5keK9gbAJErbF6kKTjZfksGsFsjTHt7aGrT",
  "key29": "4JNAtgR13Zr7baJgeBbke4CUWU6z7xMiaXHwhzhz2TeADruVoXt22tSHGVqDM3eekMirMq8597JskVaZAWoUEYhD",
  "key30": "41RTcCxxsAo627m8E9dBPsqAyKTcon6ks21KDqvGuVYDczutAVUULs1vT7MAWPpQf2Riindr9aNPSJdhWrJpjiXE",
  "key31": "52jfhQaaKs7DC7aXtW7j7HcB7PwCE528f9QaXySPCwM4hVBgryTrQz6TC3UNrkfzbDEmsdrCZYEgnMkrQmDqPt82",
  "key32": "3qxUADsmzUYKTX9no2uHrQA2p94rRZdAsQKRBwBPkoCC9c7rdzwhUwoR2pA6xVvonXBmPcHidEm3VBXeTE9wgP3U",
  "key33": "3YBh4YMCdQMXj1rXVJkQ3p6q7F16wm2nZ93nQTdXA6RW3mJzVSndVtLdC3ssneofcsSSqMi6aqdFSW1tqLk2hsWT",
  "key34": "21HrdpouP2nKSdnmvWaVqWnx9PrYASSHiqg2pVenV9TaKgQ7Tn2fbyGqsssKwLgjuWSdsuXyvRDdAoa8C3Ljo13p",
  "key35": "5sT734M5AqRV9whiBSyTN9c1NRf9T7v8EfVAsc4SiC1UG1NpkEinHz3LGBAQbL3WcfnuaLDF2zt3XrD8DPZFhoo7",
  "key36": "66yCX6jADqjPvWE8PmBd7NvRHJXFTMZcbrcjsEShf7qo6pfqKVkBKrwfYSBqn7CMgHHYvaEiMdKBKptefLREJLGw",
  "key37": "3cjZm4xKaFDxGtwq1UcMZLGLzCXkbxt9JVyB3JQf1mp2dWHePjyUXjMpgTBEdVwZgDT7d6eG92VQZ9utW8EMq1aG",
  "key38": "3zhm2mGPDX2T4JT86XB7aBv3yaCTaYT6JJuGBEyZYHr9CD4tDDYwSq1WDSQ1X2CieJMWVuyzyfuauj2Ybwv24RsJ",
  "key39": "2XSpjTxusRn1Nfcgp9qiCmsRX6WuprDyVm9X3yT7zttM9PaTzqV4YiDSHivtEjuXhCNUDFZDeeWtTCg7whhcSvsH",
  "key40": "4z2AZxtfmRTLEoL5ou9ptd4aY7rKFZ5jrQQ8ziDzCMYK7GzMhdqYLEpjGtzQjWrbwgMK5AFgRXiYG4D2zqjxmEtc"
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
