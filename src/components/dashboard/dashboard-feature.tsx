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
    "5o6go9EuePc3cNR8SKDqVbFF36WKK1Ky2R9VvTSon58JENxojso6Ny1mPUpA3bMNB5aGv9BN1VEQfnkzUo5ZbdYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b4wq8C8j8LC1zw1Qsyn1SPCFPnp6QCkcq9ntaE85BpZGjRxLPPpHe4ZJCUMwK1PXzVYvebwTXTf7ZfTpf6iEXLB",
  "key1": "4cvKNdpqyjmg2EnB1HTciNQp8uXwvpUhcmi2SE84Wib8NwjX9d8bP2eQJY8FSU9Vk2vRh8aZv7NT83mbuzfuF8zC",
  "key2": "613MZhLxLuttd61GRb21qswfEFv8nJWH8zL8aPysgRdDKHvTAER1iwuZagzLMpbbYUgGN2GpVvfYBXouMLBjRsv1",
  "key3": "nDLun1ok4yQ4d2bE9xELWi1RBoUioErwDHpxHo5v7Mg1A8nRGt5v4Hj722krFBpasPjDGSD5jEg4H7TFodsZhvP",
  "key4": "2DC44wZ2kyixpwhZbc8tyXmG1adoiBoJKALpPfSyc2dfYYAYVBm6wq7S94sSx1KcChS297DLtM1TSz3b6sDu7BER",
  "key5": "Rz5o7beHJswhKPmMSJrUDUSHSawtDv16LGCk2jsyu4ndb6SAoCfacgGkbHQnFz1QcW9QLngzMGFJLKqkafhx2jN",
  "key6": "2VG7nCVJ8DVgSr8HG4DsCDBNAp8gpmeQFsV2ft8W2uTwFmpQFjH8hrF7dPmkFbS6BKrJfBkfLpacxyjYALUScPAh",
  "key7": "566yidxRhWx6a2TAey53yBw1UBNsQvVc4vpXN116yNKda7mLUAxYzHcWZKW8fB7nf58Nv39qTVvinueVETaNEM9f",
  "key8": "5yQtCsMhfZbCuELngkxMemMorHr7CpPAs35o2gEG67quXjYe87zpRnGu9fHFnbSzz1jZBBtqVqYR3znEQpvPPixX",
  "key9": "3LHWVkZ8hk4ycQJk9wbsCuKbqRndFybGZsK8qAAxnPaZ8VLLYJz6xfod3HXbqAD5Ci9P8TdUBLTL3g21VTvTUGu6",
  "key10": "5C1TMJfnfpQGQ2na6c6rs7Nj7mEafziqkrVBnQ5NcRZq97282LxC1WiiZRHKKyB7hSELsTSRoe3zY7krMngM2EgB",
  "key11": "4ays47RsFfrwxAnfz1tvz462CmAJJmx7BH7zLURETW3CwiZJYaz4ZmGdtNWqjXx3nRKdyk4hqCXr5YRsioqcbmQP",
  "key12": "Y4ayNFpnKR2jetwzcNgm6XvpVgX5ui5kavffjjVQNFDTabqLUmmmZn1zmnJkVMtiVxF3DahCjzPY1L1cRuKkvRa",
  "key13": "64xbf2U13C4LPkD235fEpNmpHjxRMofuhR396TtK9vHoCwfERCxUkUgpHJSyZWLza3k7KuohwaNbvcFXBznYKCMv",
  "key14": "3xuuvag4KQzaaKuV5oiq7Jyi1fNycDummUZE5xf9Lpgd5D5mPXbKRT9EDy2zYPrgtcMYQtYbS8bdat5tNktu1DQB",
  "key15": "5TsH4M3UoxnbdoETYj5EZ4skA5rLZGrT3Gs2rAxLaHBszR72sgEXXmaidWXc36xq1CFPnXSxAA2Yg6CzjjeJYyAt",
  "key16": "2uaYzsZmSiappfR3CH2RgT6BDpHPB7Y5Wd9CptVf18cfXrCqqadmQWXjLtbe6r95ACai57uW2aLELez7K5LCyL64",
  "key17": "4Um4ZutiEkozHWHcLTS6A9GyqwhJEacAFnTdyqcydqRJaj5f35Je8rgNtMkUgM6zP4cnTHWxYG1ifwmWEF2FbDmf",
  "key18": "3vTmSHxovNBfv3QzJPLLHpiBmHXfmxLcSRedW9TQEQDb97yf35fXsY2kMVTKzLiDAkaMfcKzsjffQmNmDbxpGKi3",
  "key19": "39MDXbPnYZUDif2fXTQrdBgcYDXY9P71k4Y8LtqF3sgPGXLSPdmHS81HqrovSvo3H225G1eNtRsYE9f4ebtHdyxq",
  "key20": "2bcB86iUCNgnUDjno57Smpi1Hzr6drS4w1jesyK1GCx2tVqfFPa6tVMhFQDy4nbZjYntDy2i2mWyUZWVyXJpXBc8",
  "key21": "3APrxYd8dkw3M38K6r42MBwn81MszAHJccLQi1iNuv8DrwWHnTgyQme75YN6yJD6Pby8Q2UGox4w5ftMoEJgwnRH",
  "key22": "5jCyPoGayEiTEZdMJDUVxp3Z4GYdAeVFSc9mrf5uyAu2KN1pV85b3t3SzLJrXEr7i4KPwuCcbKH2vT4vv1RDtWnk",
  "key23": "5xqtTxjzDPJHVXmt1M3tA9EECaGuVQLkFtFVSRR6tbGaFo34ckQpwcc3nViFGFGVHficrDcu8LfAG1SWsxGTDBjb",
  "key24": "4xCgzbQKCr3AJNUTUkwsc7ewypzM9kMeyQWtzfBkWXvxUx9y52dkkhjBqUtXvYSexSMQEYq2mE88GKyiZaRHP7Wz",
  "key25": "5BG9oPyvcKrPF18T5zoC8Cfhb5cU9JhT6Y7WYXsUSbm6dacK3xa4UwJRabcbe3BDT5nSeX1cfRADqHrdnb3aJPGo",
  "key26": "4fCjy8a8pG76H78wNeahEWafXNVZgC66565gSXebX8MAnK2ngc4M2WYyGF4nkvRepZwRtbhKD6qdeR1bTxMcDiVn",
  "key27": "4YCKcpaRDuSdMejur5xKjQPZ9wJGb9Zq59gf5JDZMApJ7Eh6ZrvHPQBF8v6Q2dbuDbTbHhYbAxRufzr4r2iGNui",
  "key28": "3MvgCMA5sJwqRAPB3gTPtNengxXRHEzHg956ucSYHczUwPUt86pXEr1CWnBmpg3qoHE3eHPzDP4hm3SaWZ2JzDfa",
  "key29": "2kjHCsmUnLfZ2SEGEg1Z1j44Y7q2pozrCDnbPKtWkERSKMuwr4x2zz7kYW84ritsX8M8jZmNTZz8PJn59wM7nC5b",
  "key30": "4jLRvAVSCfXRLg6GBSJrkMjyGpQfvwhZmFrNs4xWMyXfVvV4XCq7LdvtHJ3r6P5YRpw9Wd2aRuwyLmVhD3D9yYUZ",
  "key31": "2zPE55MLxHi5JCm4pTPtiFBNsPiUGuqmjG2izHEMc7xWE6Kk7FuvkN6gsDjKvPztCRpFkdQGMMNKCYeGxZaNYu4h"
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
