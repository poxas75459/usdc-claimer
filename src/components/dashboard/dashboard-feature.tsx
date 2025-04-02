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
    "4neED8fHKRVPYV1kMbixGL5wbvoVPt5J43Gb9RWtKbZRXaG4swbDpAmWJDQmXyDz8fSHbFihWBWkvTc1qeveZU1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cDYFZTkjPSZUVGqK8HyAzQJG7v9PC3vKLm41UcLdsfDtktvRzH3CKuzzQWEfXQHpaYixMGX3JEyfedV822Y42t9",
  "key1": "3tXvrGcEmR4Q3UBoAd9VyREs5WEvDWu1NZW5MezEF75aBYr2fbCXPeph6uxBXTQAQUry2fSRDxamz3dda8dr6mNc",
  "key2": "5ATX1nU4PSF98wTfKNpzT3uMbRCfzpp8KEfytz63rHxLewGxVmUxP4Y1QnCKb4pEHjNES3sMb6dCgUthu1RTQdaJ",
  "key3": "5rbndFxChoGZi92dXYHYSGFi9e2ZiTBXENfLfDjt4ksqLxTrSgybanhUhXHHogf1Swz6LYtWq2VEbzSFPKtnAnpz",
  "key4": "3cRv85oUFtf1uvb4PvLaxQ7Gsef8JRv9RgPpDuG5V7BQ9n6BxRxHocnjWnMuJGk4WbMe13bm49AYDSZ8CgX3nk4B",
  "key5": "58s6huz4Fz9ye6yBHsDsgCtqPv5gukhjEjs22VWT8HNWqnmJSRiL6dsmNpPdLjyp77wYYwo7WMtwc8gjBeMevTeR",
  "key6": "34xbMoZ9sVS8aeBKuQ3LTgpTG91iTkcHT66PruzFkWdzwx58ACTPGPTjbdSjjaEpbnQBiuQYpqvAtwt72SUZYi4W",
  "key7": "5PN2Mb11fB7Mkg3CRkFoyMUx1u7tUQKmD4aDW5aTY3p7reuUExvyyk2bNd5bcZckkaTJ8aUwHCoSXM72zo4RDtkx",
  "key8": "5QdeZp9mugEDWFmp1pv7cBqpqYtGouCYJVwEnczP5j5jFdzwGzDFW7PNVrJzBJB6dUKrVQ6GQwgnb9Y4REfzCmHo",
  "key9": "4CYE4ejc7cXZNzhUT9MdLuSdGeem9UFbD7AjpMTz2qYRpTA4PJN7hYZoTEaSAkxSoP6RWMM3eUx8LaXzXCXxnqMC",
  "key10": "3ENHb24fK7sLCV9PPzUPKzU9riPjG5FoF2gCeNsuzRKyCM1RRBwLCrPhsoTXt42hJJfmPy1ioZPWa9MG1QybA3my",
  "key11": "282NvA6sq5zSnuDnu9vAQ8JnnrewK5CMMRULZhjrWM4fAhBGRqMYLUphhTgMJJF9y4NdWEY8yScraqMHR9vJgxNa",
  "key12": "32C7SsaswvMSn3aJiYvhcSeSfv4y9rhn81t9c8b6hZcmcfuW2rwm1pa1h6MCcWvsRk2XDrSoXgAkcREr38Nexhsu",
  "key13": "48uUzsdwagkj16ftGoRuKYUuoeA1iLiF4pH65LGWq67cb18PDtKraD6xmvpaTVMKqebAPeBAFajsGFFDjki7Cc7R",
  "key14": "4aZQDyL61q4hHT8Qjvvx2VDL7Zp9ro9MSe3t9VULfoqLQaiJ9y1NEaGRZ23CmscBhkvmumx6FPk7cVDU5dtbH2Bd",
  "key15": "3mK4fLdLh9ejbG2fZ6e7LKHsMAu6Bgrc65nKZrUatEDXzzYnQTqQqy7RhGc2iSFNN8y9gjqeNqEZk85qMrbXYwZE",
  "key16": "hp45qYD7ZFHy4Vkv3Rgu99bcT6WsHDbT9No4pvebyjmj5qGy2gARQNd7e5Re8SqmwzEj3w6SAHUEkioGqkHaCTh",
  "key17": "5oeUuw3TVgDTqoxAsFthLTK3aaJCf4kDak5KtjfYmgR8wFVsqzRMzbcEiHREPhz2npkmSqyid8gwsiyK6qPaf8UD",
  "key18": "4Bpa4rnb9aBoEjCEoFwUMGquYLxcU6X8NDYJCSyYm4b5fpwN4XvZ4LWnt2Ktt37pcaFyhptfaDPpDvCxhjJTM8yy",
  "key19": "8WWEsTrZr2npofAWP8JpQXeKrQwFENbUeTJhCUeEc1nQEMx3oQuCtx63uDsxovVMLapc4G1uhtjaDzAi56twdnA",
  "key20": "5wz1uCKQk3jNyDyrqVLcs7SZ87RfA6TUbvNqKjmb55oWxhc5c6Tv3ohKaL3RxZFQTvPA5HrURaXu2pwvnEcGT11E",
  "key21": "5nqB1j7RHHSFXdCypCFUSJvXm53yt1GLQKgU7HCnB5G1PCkzc4TeZBavQSgJgcyqySstB8Jkpat7AAUnM44atx2V",
  "key22": "3BWUdhwXnuMR1X6tCokrNF3WYjtudnewyQnMS3MLJ9CDfGrjNbXozWDb5fmzcizim8qvZswavQvRA4WSRUorrq5a",
  "key23": "47GBwce8Rq5evVCyjgg9bxBLmiL7wVaw3TKsqZeaNEfkLxq49GKuYdN2D4HPQwtRz3USPPu8MzLETvnNWawC1zi8",
  "key24": "3X5kQguBujx5TWM8jpwnAho1zERUpbau8nwfAbHnQtQedUFupgcVnSkXcKroLV5f2hgBZ21CKvtqMGcMUsUHT5wS",
  "key25": "Y7QikuH4YNyKdoiNsrfnxr2rZpfj4oTf8ETBKo95d4XPoeoxFe8QdFhsGsQ5qfGe8uq73rUcxzQp9K4hrnaVWaz",
  "key26": "51DWnb1snFz7hq5FErKNPoBg8hGHb3QJXjsZLXsQypA4UT42L1W6ocJfG85BsZEAFPoeEGvAViPhYThYXArpxq9S",
  "key27": "5guWyKUXr48QD3UZfmWDGpJ8XfEiCuCsmXRjxaEVjh41u92LJUz2QAtv4nLQXf1MKDxFTbaGj5wzkYprrRHk2eq9",
  "key28": "34k7haa1UoXbex698Jk5Z8ifaNMEA1gWEApfUuyr9v9KV36WYoUSWo9hmSigk9xfo5RHRYBAvEHmeepH1nbkCrdu",
  "key29": "2AeADkjJgvL8drWhV88HgSWf9QNxpacnAUe5PxDaHeLihuYKJGTNBmK9ysDZDLvfKQnzvgqDuF4F5oBE6GeoGrfT",
  "key30": "2xSTuvgR21yYHarJhXwqRAKu87gHtSXqFey5DhkkKh8eyJFsdoT3PqkAdELSpbubK79cfYrvt2wU2g51RtvaKp92",
  "key31": "2Cs3KLa3vo525ycnWFBKTB7rkZjbKhEDer7LjtFeW6pcrBPhSvTK1t9q5A9jvjZA3Z6YpMmtW7CXoGw3PrLY48d4",
  "key32": "2bGM6ZxByAENmFCnT5dNzHu8ZTqFiwj7bWs37v3VgZBt1AvaUjadgB6tBew2yh1f8B7KkLuZCHNSDVPHDfSRERE4",
  "key33": "3TKJsZxMfdbez1i4uyXGGMLnSEpPK9px1FSJezsQA5vHuwHhoGv7d5y4qFuA3Dw5XB3xxzCgHrYs59opPM5fphpS",
  "key34": "3e1UMKi2idWxR4j5qDHMteRxufwHTBwcqYBLix9kZeJ3si9ut2X6C2dZc4NusnnAbfjRvpGvHdWMTLeLRLjt178F",
  "key35": "64Hd43AoTxLwQ3RczLxpYdLfMEDib1u5cSNRt7ogaHjinb83bihuyBkHrXnuW4VyQVocahhGwqdLcfdEVzncNPvN",
  "key36": "4Kck1UNuDeBjxiBjAogVrke2FPY466bxqu76ZqFRg9zcVWg7ZjBxd9E89xHu1kjKoZHsb5zyDa1sogdmwPVvgQdD",
  "key37": "YJjvVqweo4xVVGkSfU1Y4Be85Q6rgFHuEs3WDUCUF71WVDNGDULpknGcTkLJCXKevLU7bvb8kD3vaFXtey8p681",
  "key38": "2BJ9Yi3y8TFNtjso29oFHJavNEedFcf97NgF1WCitD6ieYZn5jCBX3CrfGh9mdkPA5SH9aTE6aw9bX812qmJi4iy",
  "key39": "5LaJkhc5SSC3XedvxgYd3bCmwyKEVz1rHKrY2VYZCeEiTjm1iizxF3nf9yMzpyMrhGRJDVwFmHbs4YmQn1D1EZzz",
  "key40": "3WLjKfAcSugsHJdu6R7xKoQYozny7VKaLdkZcja19jWPYje39KGMrpvZo6kfySgceiZxkj6rJGe19Yr2KTSyRAMK",
  "key41": "4KkaP6ME3hsfnpzCjxdMxbHBcgwPXwsqUoQcgTPavwddNbTaD2beStD91K2oPzy2VY8ZYrow2PTYE4vgwP8in79v",
  "key42": "5CLZ24hEohQMGSbWiWH1whNacTdzDCcvJMPBAZTTyfTUsnCC2f3Q2u2ELtr3XuhYpBwguDqvA23qXis8PNF1mFV9",
  "key43": "3SojtUjD5xQx4DYFcsn25jqqVtiNfmaZSMCXgkTY9J1MhoGqTC2xW6BVEa3GFeaa1Wav1N8TmyZvUYB3Q7V2k13D",
  "key44": "4pJH6sd1MHCZ6Bsb2nxs6Y7kNskzPfnY1EdLfGQWSi1grBFj2x8BUBkbEM5rcZ5sXDVBb1pdNUnCWmX6pHfw5dnQ",
  "key45": "5dJLqg9NKUuJdAQf8auvMRFEaNvB5Y1za3xPkhW5KCiD2F8C9jo5HziLecfn9Mt2KJqfUtmj16xMvRQTUVGDfrWj",
  "key46": "47kLSXvBtSpreqUtgZMKjfc6gvaV49fjsZ8zGU63x2sEHg5nMKRDrSihLGhJJLnKbwHcB2GdufeAL7HBBFenKHAm",
  "key47": "KqihJFmzueNgkhNBZodpfs1LyjZHGK2euWChdtb8Fkr5TMVA5ttsArY9ChT8sao1vdbvg7Myzcux876A6WkdvFC",
  "key48": "2RYWaQPcK54SE9986VNd48CoaLYSTkZeTimQ55uv15srDhAMUdwuHLo5LSX1zuHsMUy1s58eme69vPxmKWdMox94",
  "key49": "23mihiuVNVAGTdqyyvJ1dVXQ1bMRnP546asHUZKGSSSDp9ZtQXy7WHzWcLfwWQDs6DDCiz5DsSDZnCidTUsxPf1s"
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
