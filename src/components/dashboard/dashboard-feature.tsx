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
    "3VDrDedKzZcPFwXkkL4su5XQyMTmmppZ9vQ3MbtHWVCLLkCBdCCNP1Xmp1yje7w7jM6hm1iUGnbXqKWktbiyepiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58BsnC7Dsa98wD4EB8hfm71Hm8fBaMGyFzRqtfV6BQuwJhW6KcxZf7AKRNQRQGsSrNSXs2Abygx81RNq7zVES59j",
  "key1": "2dDyypuaN2HuecioKz2uWz6kSKh6eNZnSunndtSsinTUyAS9Z1x1HK9JcjQxcQtCBP4zQNKLNTUTgVTorRVXKiGJ",
  "key2": "41V4KuQb12F3SbZaANyRz4rBsDf59dwQJQZEuKTaaqS5KAT4mmwAGDqBn8L9pSwG5PWAoiur3z7JAsLE1GnFSHsa",
  "key3": "4X6w1xQbLJCern4J9bCfZJiiqtoTmK57Y1GrU1ks8S1Q4AJfNGgc9GYjsDtnHYUPJsSXSMLQy2LMbhDipYr6JsLt",
  "key4": "HZjsUzxGW2uWdLQJsFLLskKof7p9ktZxzqwzyUjbaT5sgiY6LvoTXpCbPdxjs9uZWEEbhzzkWr3JRXCLJfBzoq5",
  "key5": "Ece9uBoVZ433FruBrcVpoLa7HwToAmd5FgAEiLVrnBMBTMT4tr2tW1JWKtiCr2WCQvHCawvCmoNKVKBJaH47oFi",
  "key6": "22659EjxCsAzxbFa1Nov5YCMh5oUmzKBmiHsoXST4LaiJF8xSLM7ueMBvcudD6N1EYTU7aehNHwuY7RwNcAjUeyk",
  "key7": "AxFYNa1sJkFN6pmC3oDTbVVtFWrD5H5t8cMTN52czS51ibF4FibLzRpoFT1FWHztUxGPSBBXZCDGviUPGJ5ZkB4",
  "key8": "45wzn3N6mLbwAJMbxUAwn9b2LdKKB3d19MQPcgue4A1ZjtrrbmyB24gwsZchL7dA3gifTYdpMZh3u4T5fGzapLdz",
  "key9": "bMAvuNAfXACmWPWCjtkyixtKFt6yavN9KMgcSyc1gtG4KryB6ivvqvdz2V6Xw2ASdmJDPu4TEsgcp2yJGRKYeGU",
  "key10": "62bzenHWaj7AYTxZwPQFMCySHri2KrbFXRzZeyuPuMubhkE2NifMcsxSvgTbnK97UzykpWL46kQmiAKRin5raDT9",
  "key11": "4bGdRWScc6NyuEKN9wYYVAo4SuFtwazdYGVQQtrQyLBHwgoZ5PZCdpCAvUXupQe1FoLRTcp5DyCUvnT1RXUEv28B",
  "key12": "HzsyyAmBMLSwQ9FzvXMy9wjy9ztwDtRcfSZW8CFrFtgea758cU6LWPdxFpBHzS38T4EftmqgeDM1QmvWutrHCyY",
  "key13": "3v7mWqiGZWs7RaotbbYqttYF6dK4rDpt2qrgAW5zGuFkrmUrqxMXpdXc57fPExSHdYvrSnzQp5GPAPeQrFJPJJVZ",
  "key14": "4DDXWya3sywPbm4Mbek1m19vjWxN6NA8RH3tmsuaGhALPaJrxRZCTtAXSvNJv3UjHY1P4DLoPUS4wApXccPqxTFS",
  "key15": "tdUEgomvrRW2NBBLgQrJBBN3HSpcBiQCasW7JhhsP8CFTrLeLDAPhALNHctVGq67JAShY6VMarQ8EPEJUaVaZ52",
  "key16": "3nrpnF2NMv3vo7DgQQod2wp3UjchVbJirnTjgGrizx1jbx3UkHawPPtLwLNn56FXdqmxgxR4LWpWcFAG5Tcb87yu",
  "key17": "5crFhtnp2QUEgXhVjvKoi6FC887vuPuXMZcmLxjg4aL2Dfon8MmQSqPbWN3uwU92gNYz9a231BrxigWFVhJAxLA9",
  "key18": "2MsqhP6Egck9GMq6FHMUR2AcE8K5pJgeEzCh3f4AAsHRf8qSWW58T5ofWY2WTSrX7r2YmwEuqWAbJWbVHauXJf3h",
  "key19": "4CKoW11bpbjcSzdK2oi1UVSJkVnLu5oMY4aXM6NoPLWXEq1NbbNLjFBENDFgxcd3VA9TUwoVvEwNCP746QunSjyB",
  "key20": "54kGQSA6i49bzg5fwJuyKVrg5uEGYTwnjjBtgpF2LjAK5TpELa1LwLYLSq8nxssbqFreygxgsbg4nmi4WZomy6Zt",
  "key21": "fqGuPWBq5sffJY5C4PQdiWeu7XJXYAWpvC4pREms4da6Co65q9XTnjmVbTUSjdjxcz3B8YoEHBtkz6AAY1uWPNx",
  "key22": "vf96nWbGose2YB6nqTiqwrdxbzgenq4qGVeonpwan2aYh88EkY1A6k5ydnF74fFKYZuvHsFf1bJtGGq2URLuywD",
  "key23": "33BqdgvLx3tfmKthKwgTGCwxth4jNGeg7A3pKuhfEaavWTbLxnMcQd6hUUna9fafsMtravgNWB2tiTPPTo7gd9hi",
  "key24": "cVvMu2KiwxDHfNjYvkgN9oC3yXWTiJLankLfpsc4fdFyfvq9vhjE41YeSQp3WHAdu7BCoEyk7n5QCrVJhDHDZCh",
  "key25": "5eb8fKJp7Zp5btykouQ3xCPJDqMvRno3NLcwYqTqWFLWUGRhege6yDS8qhL5sAqnsmx6eTB6AtB51pk5d3qWBgYV",
  "key26": "4mUnPxD7AzCqdi5Gq7kU4YiDkPuTenfuBJ4pid5dVKXySe6sUeo72C51Nipspdwff46W9sHB1p2qaY5sBHpMVfpb",
  "key27": "47JkC1ErKBUPXswgLBTFo9NXrJkuEsPowirsJACbZ5RYcJuQZAvKvkEFGW7X85CQ7tifMdYdA4C6DGqCq1CT6zjb",
  "key28": "5dgNSSArV3AdU9YkF8Wtj7GnTeWesEtPTktJr7oCjGLduYY98Tf8FRNhNeezCWyJrvzZnqvD5ow7dpDcjyEE9Bsr",
  "key29": "2WPmezxoAGw6rGn6vaqZ3YGc6vM5b69GUSfHcuxfx26Mr83WBnxNYy1fJa4VMhzSQnjzKakDWnMzTu4xqr3YYywn",
  "key30": "FtNgpPfz4oGTAexFXrp48SoGfWmAKCbogpTqHJkFMm4P6NhGQMv6bc5YXio68QyzQKvx17CDTZikXwtV15ggx8Q",
  "key31": "5Kfz88kRitecSWazq1wLACSo59sDUR5D3pEsqLwHJoA6LomhnqicHawzikfKL14hZpefUgu7BvHjEbSAdzbJmLP7",
  "key32": "2ZhRHG1FnGoEHWcoqTDoNfzJyuGtgqZmWBahvTkf382xRUbqKtSS1m4h6Pscgbu1gxR8askXBnnWY97N74GAHZEy",
  "key33": "3FaWhcJS4WF5fEscfYTnVWf9mqV6SLuw6dYc79w4VKHi41nZeQfRBUX5YpNZpc3xATYXicDmY75W3BLAoPpCJZ47",
  "key34": "5hMtbXXnU4TKqoYio2jdxGBS7ErRQYhMuMP7w98FcPXBMhwgihHWqScwiZ5UGe95bBujaaWDem6AfN6sd6e9ihH4",
  "key35": "3mcJ7sx6Nk49KJFGvmntdLTbs6mWfyLgE7nD2DFH9vgDGAbrrN2cNfDCCEbMcXB4pmAwtwNpzT9b6Jd6sVRJ5dLz",
  "key36": "5STpX38UusvU5YVrW4BzkUzUiQdEZDEzvEXa2b2fHJ8pkzMLx64NHWzYXwonkNsJT3uQerRNoGEU3vWF62jDpch5",
  "key37": "4faJhsTdtwYt9vSPPQEo5Vfr2YVYaL2wnwnKEE9V9MRsWNyBCuC57eF91SVUSJXtmDe5wpbM5RruyQsGFskFwkds",
  "key38": "37Fkqwuy3dG2g2bcU4PDT41AXRFwb5JtNx13PayiVNKBoq55o1oWwXqFjRNm9Zj4RFr5BL2hAbKC9kME7skNQnxS",
  "key39": "4chhCRX31ZV41RZwv61tYuWvbtSYxuymGimfk99SbdkRiqDn59ZMvRjnCAYhEe8LTUvQ8yWRaoEF8ptJcMWyrFZc",
  "key40": "4SkJ9BqdiBvNuaKiF9LySNFoiCybWGurHSHmQoCVTtKmw4DKaQgLAHiLQnk5STY2vnZYmbeve1cSnThLrmdLRo57",
  "key41": "5vcm9kERjY6aDPWCpciuFqa5u5wjjuVnDnfzDzauP2SV353ZpcAhnL8MhJ942YmTyBMk6DYHiqK5bUjRnmipsZdw"
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
