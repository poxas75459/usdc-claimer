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
    "HiCgLSLDfhe58qvRQKu9Qu3kWDUDAs6guQUGTYBD1XmfXuhf4A4UqQ3JpiUvF321ZNWmTysZpJ6A9JMkSxXghjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s2m1KB36KN9Lwkad9RNFKTVcPJh1ZqM2vZRCEsy5oxg8myqv3fUGQkfW2kD4QbccyQCNJfuna5wg6w5xsf48FRs",
  "key1": "524XdQEXB3uzGvgJv9MURNFn8VaQeAuxUeisUHYhfpBYQaNm1k76yxnHjnwH82F6VxnEmJCxkArcgHyQvpzfxPv2",
  "key2": "tjdZYz85F7czJRh2JM8oDQ7Nbi4gsQ49qnZUiZZP51LDfG79gn4x3J4CS9khYxBUKdBjvUxEUEGedaLX2fNDS64",
  "key3": "2YvWXp5ifPTRT55HeNi7xsg4tb3WCvmTjaFMckRN7mVMhtdReic8F3kRD1WcZWay6mPNX5nbzLvVpoXwKT5by1D5",
  "key4": "5LwoBtNAy9syqeQBh6PVTAGo1DEZZCa6N5a8XYVq2e463nMKFoXETsQBmveZtV3Y7XVNPGVdFU35Wh3kdstxPF9V",
  "key5": "4ZskjpyqAAPvp9ZDu4ZinvyCvEwW2R5nrETm3eQ4aYVivmZFBkz9YurMyYJGFi83RjgT3F6Y5pCHpNS1reAJHtzk",
  "key6": "21BeCcVjfgdd2t2qNBikFeEYLzpemcbR2QGPpuhjwnmJz4Jt9EM5ZGNfUS7NynASBFiSsK4GDZJXiFEg85Jwro9e",
  "key7": "3ToHYavTHQWZLyqbmya5GRQW4A44z4DK8mjDUbPkenJu31foaNvg1VsZCbt2Xvu9wXyy6pH4DhmHHFcdjmykjzia",
  "key8": "VfGaksyr5CyxbQtmJrEAokpxxwD8WP3MV9unuUKsqDTHMLHPmoU7Pxp7KRUVZhiLqtQJY2qfz5CdVjL2nmK5Mmv",
  "key9": "2bTMcRAmRiTSoBKt3gLSL9hf6u6r7mve7WfeEF9Nnk6v33nHJQ17evWceowQEr1LFwXFedo6wGzf2DucayckwzEv",
  "key10": "Qy5qAykoh2ttbMz3vz1dZ9X1pnq7PMUacA8GRL6FTy5VMnnkfEoMB1ZkdxZ1w4giUzu1MRfG6g8dsk2tDHt1w5P",
  "key11": "Rqffoqvp86CEZQk8yVy2zmNssbVEbv7To4VJvpxaLJvLWWybDpnukypiygCw9xVmPssuVELqi8fnS98WoMTFeVu",
  "key12": "4NYP98CEnQ5wxwa2KWLECBbgE2UQLLZJNT6yiUTxy6UaFNk3mSqdkfQRCnmpRaVWpU2bvgt9ZBzcrsdjv3NZD4vM",
  "key13": "4A2h1pTjNcfKeM62VLuN3M34ovQpohEin63J2geKHiRkxpnpYdSMeURvGh6VMwgHF3JUtaxV1jqvgWEWvNMrc92W",
  "key14": "49hPfdtQdk9voWTAFJ58XWJk5tGqwLcGNLGp1vRbj5gFR46aNk9dPaexy6j6huYFFvzwHvEq14bZi6ffNE61CL9r",
  "key15": "5YvEFyhXbA13xQKi1BTQ3SbcevMevAMhMNNd5Xc5Uv7TmXghqJbs8qKdmuNod9YK2L5aKcHhYXmHd2sRZWMuctQm",
  "key16": "4ijRpqBpK8L65svthy2Ex33yZDQVC1GPJ3gamGYGjsbMFCF6gs6DbwRptrvFwdkoaRiBc3SyConEfWgmLtjw1isv",
  "key17": "2hetBT8trsbugNfUcD81qkY5VFm4M3HDbDpH76VynZ2gYu2iQniMhVD8yun2x11m7WKVmev3zpYFST56BBdPqUSY",
  "key18": "4v7z5mU2xcnDbJFxnJQmCSFvjqtXEr3ewCCuUFtaE87ggeXqZUMoyEbbpEQwcj6QjSQ22ajwwYDY3SMRRRY8741Y",
  "key19": "5fjmpg6D9MhTU3HSbPesstLapYfs6xWut1vG1xA5xcwP8VZvoiWMZLCTAa2y7nZb66D3ERCRo4oaizEcCAEmCiYt",
  "key20": "4vcBzzazKuhjTEGyz1pGL85p6RuwVTDesVmcfVzDZ9BhP6DkTSZ3dGWazg3sosknRY2e5DaXJ9hUwXeS8ES5VgZu",
  "key21": "4sVBss3W1ufkVjTSzrS5SfHyRCSC8rkDPXF5vVVWxNUEKrzpPWtgN8dityn6JZsM2qDhkvVfgobkYg1v3xzs6oEa",
  "key22": "2CEuqSmamm2G6gjGSUN6gTpLhoL8daE8jRLxjv8te5ji6QW1r4WiDwnU4CBYFTyyTK7cU7ALWws1yThiDo4TCNwV",
  "key23": "2gfQRvLsJ7WnJZCYkkS554KHDgKF5zcktN7VE1q5PDhm9LxpevDGnsBDpuFQ9K76Sw53S58Y5A3hg482Rc1JYm9z",
  "key24": "4SUZDoQVM1eb7n1oCV6qXhRf9fYRR56QXZg8sF5DKWTtNX7gZW6j8CgXiVfNU2jk9AJBZDPtaEVrXacfbmB2A6aL",
  "key25": "z7tWjvMZn1ikbZMxf475EhHirmpHJQm9MrXQhxPVYXo3RAYPk8vSABRhRmEHgsjRPxPZRHzEW4XaBHzxcwUyzva",
  "key26": "4RDeJcmffhXdki9MbAx1qorLDfkaDia1YJSHQYyWz3PXze1tGV4bYvYZzBPaKVVggnsSRA6ptftVwMDWqa5urdCh",
  "key27": "2tZG2mX7EDNexUsseM9WJd9PK9vGudW8ys2GK8AKfhxDC2X546FuGpkJYav4SphowcKDPmw6EvUxqoVKQ5imCnPe",
  "key28": "58i2z8DUDPUPFwDKJS1eENeZ5d2dTqFXb2PMZEfCcJ5q5Pobn7ZtGb7YZZiB3DgW42AtwRCrfvWPocKyd9YXjfin",
  "key29": "UWh1xhnKDwfMrt8zKvQkLd2Un7NcpVeTxfYTijyoHWUvkBSNxm3uLPG8JH2SM9w5u9CaJb5NQ6FD3YfetYFFYwY",
  "key30": "4FH7hEAxP6JCVSupP2q2bWwb6SRmQV6GtKYx79zzSmqyJUKytesgEPv7vCCct7mErbBMjY9dVc82Sk3pGB5pGTCX",
  "key31": "RqEbq7sARhLzbWn6rRwSrbvgZ4Yjq55qkcgGbQC8v4Z8ArLxaHoeh83qa8wwcFt2yzFC3vPzXby4bTSLHr6xYTR",
  "key32": "4J1z8BmtQriULbJ5BpgF8Whr844QyQZ4TCUPBARqTo6tWSHdmTBeKKbXDpzW97ifFdkFGBrpWLcGynpHAzyqnQX7",
  "key33": "3r9i5UdbvXF2pdSyVPq9oDtKhL512UW6ssAFTyY95RxieBjE9gZNbKdyQiEPDA7t2XzExe7Qc69BYJvt1XDnQiPQ",
  "key34": "oiZvjACLwJzGCLLTELyXY9aewNPpXkL2U485ihH3uxNHSccFZPNF18oiLCFHyU17XSiPSFEEGMzPsspdpwyZpM5",
  "key35": "sq31dvQuw6hAdqsasaUafff7trcgp7gWtwP2CvQJ6jCqN3uvcj4QYsgrtfhNwr6Twv1q5DGXWtbHRQQnYf7Q1xA",
  "key36": "4FMb7Nwn3JHBuDFdpZU2GfRRXzczZZySdDqE9Tym1q9GxBSTHVcFyHA7m5pjErqihfcokCQ24QHr2xkES848ftXp",
  "key37": "49xiapbYycL2MEYTzZtFNpYX4MYsxnhqvMF3x6nG1mPXzant9Kmh7KVVuXXyDWbK926rPcm8yY3LKynJPXnaNBvU",
  "key38": "3UYbiWHjB75azHrkHpewgjbhW8bHbdfdZc89iCKUvxNnz1dcJVifN6gmg1GYGCsoSe3xitiGix15kK1s4UZjyxio",
  "key39": "5NyTBCG9JBwt5SwStYdsTtm97C8C7NkBSecVnWaXZ7vKgvARoHQV6Ho4AFhsgyF1HukucNukTAgiosfXEHD5wLLX",
  "key40": "2PoXwJdxcuFWejQaBeQqBvbERUK5jz6Vhq7WommBqhpaULFifMJkNUBhpdaCMmQhYEEJ2q958xWrmCjU1469bRmb"
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
