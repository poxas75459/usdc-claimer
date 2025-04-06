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
    "9nAWJrFpLTDpvnLLD4PVMYRZ8L8MZAfsAnuhg7X5nbUmGfgjbZzkQLXxRk1WX7ueCyq16s4TCr74oJuGyhAjiF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyJRMR56YWXm5Ggq6xFUkw3KvETK5eF9QWPidwTWvdddcsMgcKDBp1YeAacAjzw4ARTcrQsGnCBFbyTa4itCFFW",
  "key1": "43WsvAsowddUQ77Zg5EzGtFt7hFL1FSzd4LDJPpa87bpbutqRwMRkk1swtrAw8Xjayp6Pnr5NLfL5pmsByQYYFo8",
  "key2": "3oit1jBqeh5VwWuu6QzxmyZM6TJrZ8fTNAgRJ2GSvd9UJvgdNuNjUUFnTPao6sKPmSB35CG2ZGFj1MhzRbFrpehZ",
  "key3": "2XQzHGHFZN9vgcNN9kh4MjM9vXmm7YgYv6xwEnvrxiq1p8RLJ6mRKqqCAf9NXcKMUeZhbbafHRsmeG9LvtHpCgzV",
  "key4": "4GtrivyCZFzyagS6FWkat8uxFY3Kn9sAE5xfGwVtPoiZRXLN5BEZdQeM3jFJVEXsqc3q6b9cYNj8tfRuo6XaS3g3",
  "key5": "677pGMPkjpCJnWWF7nB1cFytv2jwDHcSAEFbLYS3tswtA6kgBFEKxctthq1AabrFwWy262Jzq5WKHWeLowoFmnCr",
  "key6": "5sBpML6icmQbmwM8hrPowHQE9qReMtr38SBkecravLvH8GbAtQMtHEb9KQJo5G4LBY4TCUnyQk89FNmZpYVTEAqU",
  "key7": "2wUrQLEEwY42NRNG1RoP6D9UEfueEEUCPSyZxPfseQSiyajLTmYhWaSMMb3DUp5Hza9q7o1Ydgnf4UY6U2pjGVW3",
  "key8": "5y4zZsqDRHm4cD7ZxxAHSUaT13Pb3pSV5muU9dnsh1zuHXk7fVortjucwrFMvzEGuXmYUiGqxFoNBQZT3yp9tjF3",
  "key9": "3etS3WEgCeGkkjvUKB2Hu5LSNUS9HMdv1KMsPx7mTwg6S1NrxNrXzaeTQMHp3Vz1DJkSb5NNaGdzEJPi8QysAg9M",
  "key10": "HsxpsMXx82JGVdJXAyjXmyigq1utJxRUmXLeJAF2pTKZAwHULzmLPqBYGCS6pSPSJsQM1mFsjDkpbwxNyJZME8g",
  "key11": "3gC8ioTQR9qFsothbCqNgHT5qkVewFADPcmY4DpuQNz73ckLhbCEzJoj72GQ5TJwzqzs68QgvTJfQonEeaz2RyuN",
  "key12": "2TJ7vrwMqttzBBHHwcnapdxAG39kAA551k7JLFCjDmQVFvZbBcyB4CmoMKDxJEsCuejLFRXSGqY9YWN3aPPEem9H",
  "key13": "624nfdgPxNjQSfRgWPk65hzAj63mAsJ1ytj954pdLKiULrSXqXaizAGDDzJva6vcRyAzdQ7j3Nq4Mg4PR7rdGcQJ",
  "key14": "3AdPrPd3BVXZ6HMpJWZgxfx71ZWsjwDFZLv31d5nh2a8qfnCFjVvGPx81j7owZ5DMNLogbuk9EUryBK4LUZWuVpp",
  "key15": "2bGqi2G2qWF9WGpkYDED8FEThSv2i5gY26RHB18eMvuBhytaFcgb6bZgPKcFr2KPBt5UcgDUqh8X8KpyY2Yo6bKs",
  "key16": "63x8SwJV9jTXKr7ZwXVyQpg1eWUC421WjqvymDdWMWzDXbAVzAVL5YqfZzUPEpE6izhHGMEHQcqEFLzULHWipWwV",
  "key17": "3niViWN9m2Azej11wPXLjY6XdHLCeDdfaX6H2RJGjB3xhTnPfBfkQ3TDYaEZX71n3NE29pXZoxGgu1AiEKBpan2s",
  "key18": "sWfqfwZULxjhzBuFELmiNknwoQRLpGZU83BTtyc1WtzTwi5U81ApwMfFo6B4oVsaJKDJT49aMwVQfgV1gWoRquy",
  "key19": "quo9tEYWCjxvSaDKkaYp8nyzGNrgjeMsseQATtKUunr9yuisdNL76UC2b7eunqPb63Rfn3VTpg91wCwTpPixLbA",
  "key20": "3pGLVSEc5c7wfMEAHbWkjpPR2vi5hNvqnNQnFedvo2YCm6wiWfu7frRfCuVNrDYbenQkjCwZLmDDDDXEuTXYkGcp",
  "key21": "2Pmo4dVjTus8Rjh4DCmEw7JVPbjCyLSdjGViwPijtrT1Qy9K1CmaNYvTy1aR5Bh9giQoDdotawDU4xj1Fbwgwy2d",
  "key22": "S3SgRzaMMpiAYQ4sVuqKubZXdKjdo9kdLB42vfk9ZMYF6XdeqW9DZMoNgjrau8Upy7jYKj227GjTzNxrfnFv2T7",
  "key23": "FiffBGTunBJDEtDKhw3HP4NaLJ3KnTbGhczory5eBhtHLJWaqBaN6enCyBkUBogVycWMjBMVTqYbJfiY7zU81NY",
  "key24": "43o78eWigHvTQ3XqEmZ19By52oJfVT9mH5mdUkJHZMnPNquDjNGPMC5QPovrpJG7Bq29cxrd6d4Us6v3D5E6F8hK",
  "key25": "5hZps7mVbuwQYgTp7RRFM3WvBzoDz4hLe6aWEfBHCvKM5C184WmVegV6fVECsUUJ3rZeoXXLYMcgsTzhF7FALUcY",
  "key26": "2F44p7prNA1PLVRUexi9CXjPAwvZNfhKDqB8nnkwamgtYiMvvy4C2iU7cSRda6N9ePDBAfBtjb9EuVuZPCBPJ1XX",
  "key27": "5tkd6za5c42tUnPci5muCrhpB7vNnZ9F3gUZtKhuYimHnafJRPoc2LufGnM5o5N26cfkGYpBgdvbjc3mQKdW3vdC",
  "key28": "3jhKeAx1rk4GDM2Tr9np1YvfW9c3ezsfCfUdoXpDvErRaZAw74NrG5ydfRch5qPgVWPQQP1d6kmZ7mBHcNCcPmGx"
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
