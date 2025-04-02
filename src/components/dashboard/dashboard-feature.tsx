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
    "5u6y78YjiCmtHvtJ52ZdfHme5PoXNcntxJggZwGiK587uEnphZzht7jik5hhMxEZpmKkTBC8zqccLeJ2o73rxdpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zc9VeYxfwVVrquCQLbqdZTQPmG2UHNx6UDFD4AYeyhZYcMW9Mwyw7VH7TBnPNRkVnm3R4Uv5UwVRYVi8KgL9xGF",
  "key1": "V2Q5se2N4gzgfX17yuGm1eydiZSHfSJrNza2vrV7cQbxpFxcGgminTsmNTPTYyYnPEuUrd8n3zBtUQB9Mgm7rgR",
  "key2": "YCJXjLHtffdNtSk5NRs3PaLunsYzEfURSAeco2txZRFoeK4Bm2KsVjU7eHvKyPWbkSUhfYo42YJyDDJG3LYiyzB",
  "key3": "28xfW2TUoneF4e6QAgRP4eW3rCWZuofhwRJpZntiWHRf2U8fi3aVYtv3cdXmiXoNruAC8nExs69aiwLyegnqtAMd",
  "key4": "3MP74jwvKbbaiFFahgwqwK9mAExjmyc3qoA842pt4sPBZ4xByHYWgSqMDbCazDqyB1YAxvtVvAHSEMKjBY91f5tP",
  "key5": "4h6KTr2s284nJfLgYnKm3ifhkftD7PXe1W7oAHTjcfFwdWVdDyEBrM59tJAfZ2zdS3fn83Cuxct4szpBnPFjTPZm",
  "key6": "4SN62uUQ9TgP7yr9hqG1BLveva9JhRfqS8j2AApLL9VXvCb4ykquR8xKSqSMgJ42wm7o9cEUxnTjqURVjuZJow7m",
  "key7": "pVg79rMqMexcY431Yc9BC5e1GfAWZqqMXhfhAWwwU3wv9J5cNSEfPKJipSasNYQKZrUDdn6THRRGNVhx5FYAF8h",
  "key8": "4kCgjTq2N5THPrfs5GpPR3HdZEVETywH3nBFqTKuBBzLTdnfHpwNx2gPHsrYKpcMU1MioQrhzW8WkfKALWcVtvcN",
  "key9": "45wujfcfFLN3TsvLFfvfhQQm9BpEx4j5TGrX8VRwL8ph112MkrGEkrhxwjUYEQ5HWDpPbUVntWxwoDepbzfJ5gUn",
  "key10": "2aZQja4VA1ACcpSi2VfMNZHLsyPdyseenZ1uEWidfawATZhX9QsbWB7daWahwUZDpUu8swpJjJ7sWb1CLp3LVUZf",
  "key11": "XBm7QHuc3zcfjnoYMYZv8oPKGo5jZQQpiGFPkDHxEtfzgfs3wXyjwSK1TmoeaFNwupgSS7Vn8CGCMMnXUJ1qho1",
  "key12": "2XrZDkUpcEWu34485di5wmmeL367C6CrjTFRaCfRjkFhvPZPj3bTDB7R4nsKCgSDdKLxFkxYaj5auUwrkTQDvXJU",
  "key13": "3PKxa4vfFT37Zuyj2Srk7SqVrKJW3Ta62eMVtkgutNsH563sJbUacLrEgq8waKkAeaGF3z1wfyKvLXd3xfj7Qais",
  "key14": "3JSRezRJavuFyF8sbgry4e8bwZa2xWwCYG5S1BVJ2LxVfgUXqLfAyKmRUdFTXbmbtyW1ucnspTh2VBpgWHUpJrgW",
  "key15": "5bH759hzt81nzN6ovVLCfTvkjXh4dXb2Uccyb5G9wwRksdxnVDfhks7szUqW3EWE3Jhns3b4kiyXDDPXg3QXUmXD",
  "key16": "5PYiygeTZ77hebVa2G34U7R6v1ifEHbGcfsC4qVrRZWWFHg6w6iiHhqnxbmdnAWMyX6Nx2Hux2sxnsM4dvwe28mf",
  "key17": "5n2yNyek6ZqNx9KqPeVUx8ryNk2ejRATToUZmyhUqdRkP9wmnWqGRG3cZb2DjpNQWCHZhiuuoiFCm7RurMCkEixu",
  "key18": "suhK24tMym1ctcs9dqNhCqcAsBSEDo8KU7LDgxKA8AWtj6M1fK8jR7Q4te6Y3g5s6oJDseWatoye8bHVZoY3aha",
  "key19": "4SX2Yp1zf2KxfUwJUrVNVkjQXSrfwjwKyeeFG5zSfQ3rNJqBMN65YbXhEP8a3h5rxSRo3vsV4tAomAsLUEEsbeWd",
  "key20": "4K1LkwFNotR5LNAAB4ZnPs3HFMx5pb5BLorGVHNKA9fSNsZCtEYyTwESCx7hR7MRh9YqkWucMF7FFqU2VV8pCYdN",
  "key21": "4iVZVwBGXsd4MCQ8Mcd9J48x1m7PVhBmid17NHPXwAEzHJ3DP39k4CgXP9pDPgQvAbkiviM9J6pHtYJveif4rd15",
  "key22": "KfoQUHEtX8p7XAB8fV76oKJYK93WZusztt6FibHXVGWWtuR4x1xVqaDXiKdt2BH9AniTfAP8TS1ChL5YTEZGJV2",
  "key23": "5jpLoKzUuu8GtFHFtqkvhciBzkHtumsFxVFXE8KpMWxfefC8TxBwmz5fjfyyCrMoagERXJUW4yFU12bsrN4dDhq5",
  "key24": "3pqMN1pwwSB8u8JxddPc7vaTsiR7rwJdJqzFPf532gyGx8zfPFFAy1eEYXgf1FLp1wBxFLn9ZFXA8GagxYu1Utd3",
  "key25": "W1XWGibJWHGpPAe3ig8dzLKiu3GQxgwbapPTZXSjgVui2kEu9h6WM4MCG9bJDxWPY7uaTUhtzYSQT8kgYYfTX5A",
  "key26": "4z2DtP5u7aSbPFn3w1JFYjXrixM9ZHRhXBBwD5L7fR3EViNWCLzymMyNL6yUX6tV8YipWNeRDUCSs8TWqz2pAuJK",
  "key27": "4ED38pGq3afi4n8zYAijo4bgHNgnPF6jg33s6aghkoXm87G1aXCVnNF5ABvgPZh5stcVFoGTRqmD6EiNTtu7a2sW",
  "key28": "5KjLjxqi71GMA8NYQLrG8Y9rjeFVDxeDrhUT2yiYsusX7upwNAXDYRKL51ihLPMCedRtPEycnbGDCzDHMMT78Ln8",
  "key29": "5BzYf8Fh3PBwXvtREE9ZEgNvJgjs1M1YCDCFe2R6HqCqBnTrZkDymfzSSuEqdfrpY1prm2HPbPTUCjEX3s8fHBcA",
  "key30": "4YdoD8rLuSQjtrXdEaeUy3PJAFfxAEsJpcwbcJHFbqD1WWVhK23atPqpcki316PxeEoBBpXUPWiRtZSeyGop5Xqd",
  "key31": "2g1epMyX5cqAKz8ypSc9qzMpye3HXKirfPE8U8d8qoB5krn7aYgiyJ2oKKNgdDHdzZZgJxGZ7xt66Mj5dKKcALZP",
  "key32": "3WCB9wTUtYwJ5ZrmHu4FQD7UkENWRJg8qeznjdTE31HntRyovDBxYuGYWe9j2ey2RHHTWpBAdSy1bibKfv3Rh34w",
  "key33": "2AmnCMmiRH1LAqhYWHuk1FaQg3AnDxuCqdxVUYhyQkRRFY3aVNxk16oQNTeZ9PqcsEnP68VEPupXcUtuSgrWDADQ",
  "key34": "2GRc2CTd1npydZfCW5pg1NFmkAdrvkbsniQBfAmpfBtqFaBdY6dHiNHvRYZfrXX4zWzFky8q2jcxtd4jbzMkfccR",
  "key35": "BWPsd3fryibebrhwoQ3Y3JMFwBhJvwEqTSPDRetorFj4LvTDx5xkC5MMBU9rhFybfyvaSTvK8jmfj1LLTBWYbin",
  "key36": "5mxNZKVeucr9fEt4At2cVXdDsU2aYb31bpuHR7JAgW3sgMveoVVGnCZe8ZZfP62PsVyxPmwma2DfJAWWis3S2WLk",
  "key37": "4DsZS5963Wdf2Q1GArGaLNNEapHt8Rf2UmMUzBJH6B5eofubRoN8SyNS86ku8NHs3oQ4UgzXpbyHCkJFRjEPGHKt",
  "key38": "JDdbdf6zSXwqogeSpLcpiQiC3U1gJAdrnWAX7SZHAPT2rAvkr2aus7PndMtSMWARWJyy5XpMfQZfYAV6j5Quq9a",
  "key39": "279yQxskiUZBTwhnda2eiWALdewQfUg72aTwWA1AiVYdkZEiH5wqbmBMn6QKAPVGi9VvH3KAHdr2Ng4Gf8DWKKwF",
  "key40": "odoZ74YfhNTGMr9DFEcWYkQWsrQPjJLKzfnEebv7DjoEyQUTA9ro3UvSpf4zxRenRrtDjhdUphH2TRwhsccXoyz"
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
