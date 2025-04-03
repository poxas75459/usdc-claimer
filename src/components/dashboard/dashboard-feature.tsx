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
    "2mEKQhw4sPV2uw9unvKPovmCyRH8JUVnipH6CR7UTXxw3VmXttAJcgST7QVBxm6RkYqRk8RLmov4G7Eg4Eb6ytWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbdx1Bd1dkGyipBjgZwdwC5yhwK88HPC9Munj5rsDDr6r2qb1o9pi3azcKBiauSvBu9kg3RPYLEZo2c8uVCLLG8",
  "key1": "9LurcamoVv8yV1Sx1Spa2Yaec4fuEZnNtXHYELLhrZc9raCvEvkWcAsGfFiS7aDcFCm2mcM4uJjNBaBECv49KNi",
  "key2": "5tKBcrHrrSSzcPbvWWf3doUJUJsdRbwDrCSx5xwAwJ71XDaDbmhiPo3qKFzcMpYkm5rKqrX3mg89WrXdNGb5wP6n",
  "key3": "5QXcoVtD3xJVdY2GMf7rp2ZsY19nfFyryCqJW1eHKfWPVPwAAKqhjx4mY4Y7hz7FzKu9YB2j2nrAnKVPDrJt1TzQ",
  "key4": "5q8p4TWXVbwuKSqDuUeipd5DaVmfrbjnK52RVffgyJG2MnrMFgdwKaDHUu8mi1VXfYzc3nENKicvwrwh5PGdcXxy",
  "key5": "4Aaz8biwa7weEv9vACWsURY2v43fnQZ2cPThRb7pxKJgpYFscjD7vni8NXXBHEDReeXVcf5WcoRasZ8diUrCZwVN",
  "key6": "59W1X9GHLsUkyktCybw4pceWz3sAhibai5tcu5uyCLbP8pmTndBFhk7xuQphhHnvcbX6NpkCZwCVhfoQ1jzcKFRY",
  "key7": "XDqZZBFKV9SvoeGV8rpHR3Eym9o6SphLumfueQqExdK5euBtim5DRtGoLiThgBMaRckgzS6PX36BHnEwgZBWGZn",
  "key8": "89BwBfqniCCsK451ivjsHwk6H7fzEMJctaD7odNXWnGSZBqKu8hDXrKL5fhB4dSwMrRtKCSRnoMsxQM9GVvhHDH",
  "key9": "4uNx5v5tTHrETrDXNKCHsMPUj5WF5VFjxh8T83Vp8KHicS4zZe9dqRVC1QspAauthBGVjbM75at4ffrLbzTKZmJ6",
  "key10": "2WikKcPifp4wgGmh4RG95Xiekos2uSfxFbteFHytWGDtyKsrKNkcAqktQL4Vd6353FpZwEbDEBNyg7NMeRCkL62y",
  "key11": "3AvzEGBDmPE2816oKQKddnfQvSeadry1V1sfhrCzmvsP5Ps5QbTRJqe7Eq9fRcS9Q6kKRcMzW5DxiBESBEWzGyNH",
  "key12": "4wX3Mme3uEBkqWhgEeDRbU4n9HWo8fCKfLPwvZmYJpj4tQaSjkUcnjcpoh9qcTAWb57KFgSeXodST7Ljf9G55xNJ",
  "key13": "63RA87rGejdN2ZQaoRKkw35DTUSYWjsgn26Qy34MRKmcrmf7mziaYJLEPGkZAo1TvaAcc7qxbhNyoKNKr6dY4t2v",
  "key14": "2pytB65AJyoFNhV1Jjo6GErg5jnPuxeKcwoAjBYSjpVFoiYtVLTkRSyLoDn6J4TRf2G4C3g66g9EqCuD5iZkHupR",
  "key15": "2s3U2HxoThgptbpQHq8mmMZDpMEkiBqQsvi82mLVWhHoLpPQYgxmJ1fP93hvozRNhpRyxAgJmFxDKhsM4DkBevTw",
  "key16": "3e8exANt4E8sSQ1r1FC9PbjLFp5cAA6DYtyiwkEPH2TrY1AsgX5TCoA4Mg6GWhFPZyVrBjVojyyu5scTdDSdsqmF",
  "key17": "4SbLE5Lp2PQKPcMkHQrade1vahabgjuobghPVZGiEzX3cdi9LuxzTbYXhAFRSg9oKNWhNJpWeqVH9nXrYxbyHcCp",
  "key18": "4DoEccKp8z8CSP2ycEpHCTA2qxEhwceeJbCoNQ93LtuX24uVydQCot7Ajw19eAiXbdtPbmw64fC2dy1bk31azcDQ",
  "key19": "46gkEXRmwgk3PJVdq96Z5yeCkcS14iAcuToDwwGkUwvmqEKoMBpjf7LbNqYFWF8LwvrPaWvjiBx16RptCE7MTiYu",
  "key20": "4XXMvsZTGNXcSoFrjQxSfhWmLAUZVytefoXcNFKduNpZH6U3kT9CAway7RgB8ANqAPUTqX8rqntEvk7xGTx1anqo",
  "key21": "qjVmnPJdTeKZQcXmPWR2YoJxtRh3iUnzvdfx7SGQrJvcoPs1LxUfmEGAEErTapekUxHASwJcAZ5wPRcY2NpWaCn",
  "key22": "4siRCzE366eC1NCaQJaQTyaBYeuR2mS56YoMVUuWTvrz8Rw2iKekL4FT9UAXCmqHVMcbT8iYbB8CJwsN5u9P6iBb",
  "key23": "DwEPTgCMBtqXsJzQtcEeHBZJxd89drQnjHwinFvHKt6WYm9Zk8yiHH64dUziE6gpmA9o9kWGdyDVnBrYJ2yHLTJ",
  "key24": "3hQ2GKGbbza6iUcmuE3XHDqEjJFufsYfte2d33EuHqRKGDsofYumHCD3gViNUGg7vd1foFP2oMy6EJvwj3nBB9WF",
  "key25": "5phKZgdAdFvw415Ff8VUZMEGKNHVW7xoTRrEA8ugsqwRAESPzv6iDGuXf5h83jiytU9YSgk5jdydpBUjTf2MSE6f",
  "key26": "Nvy3kcCUV61tJudSF4KbEWJe45zoYgFWSXse7BFJ6TqKRmjpdFy8KTM3GZrW6gqWbMZM1YGLgxxG6x9MY6hXJ65",
  "key27": "gX7eTVs6rCbmPYfh8MVyoWi7HgCqBg5VuLnX5KyS4dCeYoG7CzenWYDD34xUs2tExanB5jrJGvTBFSiUxLFjiy8",
  "key28": "3pd9qsCrSB4AamZVNxKuDmdEUVyv8qC6pt5fqPYXf6fFynAxbxGLmeGwssSVM5cgGcavsKKMEK4sHMowsj9P9D66",
  "key29": "3MdPoXMXhCR5wrpzt6NQxyduCZqGfBxjTyJZgKF9xpzBh43p2g6fVuRekTwguxb1dwjJFoNgZ7NeHmXToLBHxHtC",
  "key30": "a9xuRSnVWYwVqXxXm5unLp34xBizWjCsdw4SALhjQ7Z4YCN6Dosv4U4xHf58hf59NAnLAQEzCFFAm1RSixGcDLc",
  "key31": "3XB7sNbMdYTCPrZhs6qpd98ej34Az5xob4vrWa7xGDFaLg5DR8MPofoGtWfsG9KPfW3m6G3iQsXfyoBdjxQX2skV",
  "key32": "3drDjzcbQHpG1VJYZhZLVirJvwUm6eCg6Y9yAJc5Uhe76ehiCGH25ph7nX7Lj12DrQzLWa2WzfNLxYvbChkenpsn",
  "key33": "26my1rfWbyHZmg6MaridiVq9KFvxfoJp1aacdb4XmwPgdKKzx5ouv8m1bshhqod33qt5u6m3bDsB4pqNFTXNtxwR",
  "key34": "4JKKDtRNWMeGoGEUAxKsfPGhdqtVdZSvf6N2fFa2QeGLAwrZvyxRTQywMiLUdbKsvm4up7Qu4otb3dTiX3pQ5yZU",
  "key35": "3xApnod8H2XgPc3LnSoDANUd2sd361HLjxpVgd7dEPzeuUPyC3GvJDWX4QJSUQbQiRz19pqBk82TNXdqd1G99oyq",
  "key36": "uyoQZPFhvFnLEFJ82KFHquX7Hpyj8FSVr7kRFE95aXHxSzkruWsaavoyP2hTe3C8voM6BehtB9TV7QmK8x5TvXF",
  "key37": "5pyuVmef5X95gf6C6We65opwvdhyAAtMxXJ6KYaxeKWEU1RvTJCovARRRJHiGySTsDnbWPNw9UKa3bDsTv6gZYvG",
  "key38": "41YkWPHgPbQH6YtQhCCioik84kGpQsNWw86mCVTQ5k3zMd6jPbthvwasB1GGx6GE3chALvQMPLHBZsxcmqddAGvS",
  "key39": "4QXou3QueS46rrnoozAMwmQYiJPgu9WuTCe3cvsq8pZBKNFux31g38k5B3vGe4B56d47KhnMV6XaQqYqsfaY9WLJ"
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
