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
    "5asULh4C1ZKhdNZXDfR9Zw6F5iQafvDEkYaDzQSpYzmTKqpHrBJ1YR6hZXTGpFccUcMMGgT5PbtWJSJBrFA3x1gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXW4fUYiPSmLnGZPJTUBe96WC9aSXkNYSFePm17YSp6k11qsgnj6YboBm7354Q1C5ym5NQHT1eLtCAqDgs6kpaN",
  "key1": "jDp76CbMVaFzbrHseEp2TLpbmTUHff3unwnzqbYH6fVXeyWnemzGVw1Xs9KHMJGMGQUHUFC59FdxC8fBd3R66cQ",
  "key2": "3Uxm1SPd3qGMytvi2GcSQSJxu6tJYgCDGmyM3PdCmQ1u2RQDWXAJhqfYAuM6SpVGPCiczyzdft9r6JCVBuneu9mT",
  "key3": "3yRbDFe8hwCJGDXTyPy2Bkd2ib39FDJTqvN3SXsAQr4sWWK96qWNWZAGb49fcrJwtrm8Jk6hzGNmNEsHBeCxwaMS",
  "key4": "F7xwiz2MG5WJfqnuvfMwKCc7ALN2aaCZ1ifC4q4ouCMr8MvvupmvioeW1DpCbtWh2sQjihw68nqtRxgjk1rqVqh",
  "key5": "3GRpntuyva8XS1bvezwpX5aMthWjcxCRmS3t7QNeiAPeE9o5XHdSo41HM9pBtRKWaNVbaAUU2ASZDBweGzCEw5Rv",
  "key6": "3Af2xsjwdbpxS6PK7xk3gtZf2qcDQXi1QEjV4hPyvcJ3676UCLAF1NHFiMu9Pt7eEFfn8QbF7pf5NpJ1JZMtUyHJ",
  "key7": "2BnhRxLMBqLwiLdwnsK5kE3sTrmjLSurv49bRxQFvk5gFz5nqsHrU1cDRrWj2jHQ4gxCdvoYdrZ71CQuJw34KCmn",
  "key8": "2MKhmD9DAEpYPVUDm6ujR5CWmFFB1D1sq4vrgRibwH7bqBL83jy5yMVumJyvNNC31YeGmiVqDqHGnY6i9kz77hYv",
  "key9": "124RA9qoGrvRTtrzvtuRV6w1WutkFMCj4b5u4sMjsNp6RrwZW1yuSpzbtqFuz3FT25XxowAsDTJTdTFYTRP7EENm",
  "key10": "4QaDGBdd9ukiSTErJ9DJeP7TTt3RkSdzfoMSYjxzxQE6ByWR32j4KX1ghaerjUkEztiLzNPXAgTCcsheG7u7HR6",
  "key11": "2HAuNpU66QX961CKhx3cR44cVsjouvp3NbTRJEdcWBmQBJqCRJGJBjh3vhz2XEq4vBiK2fPQsRS3ybCGta2eHQhL",
  "key12": "4WvhqufZxjRo8MJFRB8dShxHG9oNJXJNZZqckdu3S9MudzXmSUyxnqU7BLqP5HwpMJEP1kQMBTipoSxtL48h3fep",
  "key13": "26288ZAXZDMtrP8xYW5BKeX8Aczhq2f2MBxcMDLJvNqRn9HJzuMvWZAEfb4gUuVb3ERzptagyXSFDav9yqD1Rw3G",
  "key14": "55s3syFegogdwEJwvseViuoZXfcV7sNdDw1UsceHTjDhwmEiPRATZs4QCccbN1mLrCK1PaDzSxroknbfjezsQmvr",
  "key15": "4PKVKZ8PTau7PDfM8SSksFAQ9FrRo2AcrmdRR2cDGm2BigkxckVwH38x8LquEUxsPg6jWvomsUvSN6nzrCBeg1xk",
  "key16": "VxKkT4YygR3A9iP1jeqm1uBnZRgzrfyMFLyeXtSbBpJJoUH7jsT9Wp6BRaKM6xdXjW7vzrednRhGcYb4RkuAzgC",
  "key17": "rK8Dia4gCR6d1knPQ6j5gbdeLuRPax6snxcg7iHyoebRcDMEJYR62rccxMtcNqSL2W2e72NQ5iH3y7Fnqy3p8V6",
  "key18": "3baETPBFxuhLg2V57JktURKd8vfebDDP5VmRjCUQvMK2Vvh2fvXs3REqXy9f4uf2KQYEPRX6wR4Brw6MTHa97Coo",
  "key19": "3mK36Rsx7QJ2YjoDE81uFwXwekt9KkUGQAMReKmfmj9EJsrywBsqAbFR94sYQfsW1tanbZFfswoATNbLn5EiEgUt",
  "key20": "5YRzfXbPCcg6UhEexmMcWaoMfis6c8nTxm3MVLb7pfPqyKkJTWxXZPrruRN29jW1CpzBkUeBmbdG8tBCRP2G3S3D",
  "key21": "3ucjbWR9MptMGZGdLL7hmz2JU28cDK9FRJaKCgmA62wNYq7bgr9qgZeqSKAj5ypYZE8hXEdYCGfrAuCVU2S17Bsk",
  "key22": "2pByDyGdYSpjNFraFosH4Tc8F9twxNaBimZbmaJScsMK3ydxknm9vuUEs2GbDyeH3X3PkbPBug7t7eC1wA9XTydr",
  "key23": "5ZcnRCGNNEW1Tyi92tn2qoMSQSdV63ZEJDdmrxP9SSvuLPsMZ8SFg6dbhwy87zHVVjn4kaT9DSWtm3soQ2QriivE",
  "key24": "5nEMkHjFczp4R4pUcna4uWhBeUicXUq6TARnMpNJNwKveo3jVLDRR9hyAcmiF8BtPrzZEJoGZMkoWeupmHMx6hEJ",
  "key25": "2ioJm149jLeG9c4Kic2aCYTGrzxWXZytqxHP2D22a2HKStijdJvLLLC7R9b4JQdYCSnKLi7NkKDtuDggdjiGBCKE",
  "key26": "Q8U6g5F2rHe4CrrPAcsfPUWjkUPUgr1uMxMNjHcgNNpL3m8NzHzFdh8PBaEsMTe2unNEd3GGHQCRt8sibtd1PfD",
  "key27": "5yMqmBKZca9t5eScYC7TTHADJ7J7h4ESZDF6888rrdWDMuDwu3YG2yj9hKQ9XBvPQSwnjR8CDCuHFnmoGgV1m5nP",
  "key28": "ThH76yfKfUtQnvx37vqBU6PvBtHtE7MC9MbWvzfcMTsES4XnQfdYZuGNRqTChnRUG2uwMc7xhousdmEpubN7PP8",
  "key29": "553DR38TGfgd7wbGwCv3dKgi3GxMv1He6YeC2gYuqfXqcaftBT4PWTZ43xUAgQAoE1iomYJFWxAqvjN9J8tBKPma",
  "key30": "3drVA5BG3hPhWuqKFgAnxtQpq1HK6UF7HNfYDzZ5ZG6cgnenvhbx9KXEVoxW3Rz1brqufhr8NPWVcsCUk8JFSkSs",
  "key31": "3VkYVw7WeWaCwiFPgesuLvtvWKUeDhtSh8TfoDJKvGEeMyELkzVu32q2mMh1XdPkW92q9To3L4XC1BWHrtnNZNUS",
  "key32": "w8bT8QxDcCT49qVF9UEZnTqB3YSvnv5sPmShh5tP4iCXUmL7FJHUdsXe5ZzhUBUaeq5M32FErqFRHCwMiMnae1w",
  "key33": "oVAtvVyRtBW51GC1TMq1JowniFUaDd28s2CJ3UurQD6ZNrdDTgK1g8tp8C8PVBEzhbtMz1cTUX1LR2uJcpsWF2s",
  "key34": "4Mp1Fp5aTEgc31y3etmuZonNAAkgtTCp4umUhayoCKB7jeDjCB5qXpn5C93m98s7Vwpr87cU3UsjpSmtFtsWciZa",
  "key35": "5Wec172cjq9LUPiEDpn6ngBLvXMVZ2abNnJLH5pLmf4WuKY8e5jXidj9uNkm1yYji4euAU7yhzHqWeDjLENe1cRG",
  "key36": "3gCUw1mbsim77kiDxzLrmYzv5ZnaM2swJ2vbe4Cd2Zxz35JScEaXxxHYEeMopfGYBMnYQTFwbgeDvgBy1ZhMgCKC",
  "key37": "2F4M2MxjFduRJU4rvqJ93Q5v1U2ZBDMSqmdD1nTT1zDkA9TjXfQTg72A5oToBxiDayUSZfCodExkoedTsTaoUT1g",
  "key38": "3ZiqQ1QgidXBMVRxySAB35ByEg2MqdWWqZ5pL4XGSCTsp7mXchsC2APDg9mGJZeArP3zPBrDcemDGuFymKn5Ec6p",
  "key39": "5QBtuMrLeSqC8FBbUwKSyMgDwFXwdvDptkznZYt3UNY4Qb9rh8XmECViMCsdWjrGwxU15y4hLnRbWWLBJBc3ej4F",
  "key40": "8u4S5efspcs3MdRB4Xg8Z3EmKZLpE2U8qppxH1HakEoLUj36UnBMxxgySpfdVTD3AssGvUowUhPHXH7yd6a9EmP",
  "key41": "2ZAqG9uu4PgfzoXZ2hvhMJYi6Fqitp2qZio1Q3zEpr735WLEGfxFjRe8taLwMCwQNRMedSNZqw8zk5dUnDpf7LLp",
  "key42": "5BbvzwHinNR5BJw6BeTynWbNVUCYoyvPcduKBDnLqQrJXh7B9Ea4HxAYCqasBuiBEqG9dnRQs5S3PPr8CXzSWQYk",
  "key43": "EHFrnJAE4wT6XaiRXAeKbJpCaVQXLF9Fh6vo4yq2hHTwy4j8q6qbmzN5nAmcL4cev48zs4pb6ka84YRZGFw7MRT",
  "key44": "4pgiJyoq1nXhxHJmVF7xPAYBq9hk3C41J5S6NsS1oBV22UcT9e4nVNGv9ShAdTMsD4rfhrYsmo8i2ndmMEjYDikR",
  "key45": "YsaUSfvJhXE4yEYAx8Qy7m9Ku7JXseYDZfMMyGmJihxPcShH5siCp17aGWQqWxpUymVEhwP55RjfLYd7DWYX5Vo",
  "key46": "3b54EQH9saE28wudhZoPoRmqwCvtHvC3K4AcZjxvKF1LHeVyEJBqYGDJBSeYjyDdz4iKvS4stjjPWiiPsvpbFJgF",
  "key47": "3fNb8RnsrjZuZ1t9Jk7V7ijSUuMYmDv4wtkNbnK6KevFHphADNviiDevWNFN6mYsKhxf8aq2ic7FX7Z8wmGPu5QY"
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
