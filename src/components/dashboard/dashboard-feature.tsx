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
    "4LtjGxp9xrdxFzSCkBZLUtnT7T8aWiJDQVBBgN731S8NgvMwdyhGhfjjWS8LpihQ9CX8DuuYjJWNLLStSWyHH6RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JggEKWUCnG8C51fs8t29JYoygvRYqoK9zkTYeGuimKJKUybVcWWCHA5BCwBTj1wJg2GzZQM7sBCZ5Zqa8FrCpXe",
  "key1": "5ySF1uWroun5CZYownQqx3mq8F9tqQMtAoY63FHt5qMmSBCatLoXfuVr8WfZe82q57t2aZi8Tp1qAMRZ3VTm6C3a",
  "key2": "3bVkCtpC8i1LA6i3Jf7kooUHDgpXYeTZjHyFMi2KKmJEwhGd8ag1CnPgypiFnZWSgUqTMrHsN9qdYunQ9CMDyNad",
  "key3": "Ewx2BTxwHm1TzYxvapGpRcqEkuAWLfepZPhfR3E7fy21Gh1UDtHP7L3JTJ9teXehLyRY7M9fFFHbgXHgRBWKS7w",
  "key4": "3HMfp6B1MHRAKHRfzZdebKrPcobCc8XtUAWmsJf1LFQm5Rb5HugH4i5VDCNusBA5soEFeppkaBNFVQDzR94LUVXW",
  "key5": "53Wjujua3YNgPy2S2iXEtWZXi6MWP1oGfdmRLcmyYZDMFf4boi1CHTwnkFN655ezv3WdfsmMz94a1zoNVVj98ewE",
  "key6": "3TkA6Jp8RcZbSjavCxu2jysvDmZtca8TxGbvmNoKqeH7Eq4bYJiTSTMTuGNqTokSRQurop9i1ZxazpWMt67u4SBE",
  "key7": "6457i4yUyh6KJeYMuFYdaYrPF43V8FS1RP37vrZFnU7bkQoPdsi7KvKAdiFViWXW4vHouGAcrJXuKMEAeAyPxRLE",
  "key8": "4gYiihcZnWcRRuExNDCw1pANn7o76PfFxiR9cJNWATZ2TAyetmA5gVKzfUQVDqVbxJAEzYGEDT2AaRQGKR93TARz",
  "key9": "2PrdKocWPGM76tVzyXcX8x2y4QJDsd391qvEEWSXnx7RuwrxEVTneep3LmH1qiCZdHVnfp5X2B3BAiwUNQDdLeLP",
  "key10": "2s9aevr3HYJexdZk5e52j88vpqyZXYY4C754uHm1R7PNv7vQYefeNuC3rqLsY7AAJHQDwnTTHpfY6zyDq7Ak25Te",
  "key11": "2ueVPQRaunFdrc5B1HUmqDELafTDsXZrWi99pHiRL1uXwBvaDFcWN11aD8LtQD1rt8kXzUtK8fN1fT5UdvmgoZ7v",
  "key12": "3aQBEeh9bkn2Pb2Wup4hwynEpt3oxumJcKwrvE9snaCShYzxAN7iqEhWP3mffNKBiKP9srg5Q6VL93xXJHmXJfpA",
  "key13": "4As1pbRbCm1zLhZTqPsKWgmULij39U8RkN1UJcF7rkYKyv4oYoEq46ExgmsVMu7yX3Vvk7y5tgJugMEZT87pJn5m",
  "key14": "3JhTqkSfKqNNxGdHvRXGWdkEGRdKg6YQNtitaxB4G3fry8wqqgKFWbguuMxFzoVWU9hsNvURo31QeYkqfSsFSwqF",
  "key15": "3wfQEDwgMpb8XR2HA4PeaDz4U49shyKCVVxhzP33BQvMYaCfympK8ruNKEfJpjSibqJdFR7v1a53m6LVEeVW6rXu",
  "key16": "eFwK3EE2RTWSRnSDi7u9RcNSm1gWd7HPJoCdDHQiTzEoZBrLAkNEXWAKygcDFJxHd3xFKWDmae8FvFgV7REQPBy",
  "key17": "3Y5LHWRkRcePTkg66mAoSjJnRfGZAfUobrWu6ZMXuVjnjAUW3YaZV6Gd22ABkhwAUZTmxyswpVCTjt6198xfP2HV",
  "key18": "57GHd7Cn2zzGEEqpiz8BRVtgPpyn9he8ESWJXV4iZ2qKpAZr6GCpCo6yNX5y7sA1Ysm8YLoiNwfr2hJX1iNGQPpA",
  "key19": "8ufDtfLdVAW1W8JykBVoaGffuzjg7Kr17CQAvrrsfLLVVdoSigKoxmc72Qv2fr5gp5iv6iey1kKLX5F5eHBPP1A",
  "key20": "2KYLx2beXFQ8Pj8xQuHXJWhNioPBQ2Ch34My9GcmH1WGrJg4PELwrr5ChYoZTVbsSzLdxwuiYnDrcVh33oWaZAXU",
  "key21": "VfYcJY5HPfb4DCDecnfBYu2387PLNVnwFFVRgviQxpAHSKHzn8SSDsvG5sbZ5DQ85WporVcNeBmYbiqUXcFvuyv",
  "key22": "4WJ5DtbEyk6gadGvkF2q2ixB4RDqUXQ1MoxEdzS6SQ5X1i6jNungEk8EnvB79aQWVnaXgtnqxKtZjumkFDo14nxZ",
  "key23": "W66hqn4uGF9WBaWHpcPTvdHsW4E2g5QRepksX5ynmjJ5JgB1V2qd2YFE7iasokUfWJQtx17KzkfV4EZsYe9T9x3",
  "key24": "5EinC2CvGQ8y11Kt31Weue4GbXsPeXbYfvz3nZeaUwAAKtKxwVCsxbrhr9MwYo4QpydKCkzAMC9o95TSg7vjrCjq",
  "key25": "5Ck7212pyg6S69t72By5uEtXqe2dovQdw3sL2VPhjCeVjN1L9wqgyf1edsMq9LJ7HVrJKz3B1meY9Bqt3nC9y1F3",
  "key26": "3PezdToyzAQ41fcDHU8s34wQDC83p2CqH2ucgta73jd5JSfN7KpmYmzpsZLhpP64RxCJS8ryzPKzK3hmQfYVYYF3",
  "key27": "2CHFRxZSsW5xE14iFK6rSDKKprXN4moywJY98RFJxyu23Sc3tuKarbU69tm9T9bXg7ZHsFanKp31ZsyVvk2VgwMV",
  "key28": "3Lgr7NzqmGRUVdbTnc4BFz64gVnGorzCEY3g4YPXAbwbF7r5NTEpXxgBtZKsX6CdqHT6JqPpjt2VW83Te4xwsMVS",
  "key29": "CgsWQCdQ9AA715oiAFvk2bvEg6X2Jknf1BoP8S99cryykrBbfX6FrDMdT6VJRKwQseZ4vMdJEQd8bEW5aahNRgf",
  "key30": "2qWKuEvyr7tYJJqsyUErt99w5qHnpdAMP4NP2hgURyGr5DmKv2z9gUH6ouXxZv75idJWP4DkSaKFM11XTWnMHRNb",
  "key31": "2MNVNFDtEkX8SnRHm45VUwjjtGyNezA7QRk7hD7QVTzSRrZHnpz5SnUs3MxdhQnqUkQqZxGzyzsJXqPSa5w8Q3VJ",
  "key32": "otZmzjScjj7xmVWxkCjEgAsx9SqhG8U3Sx5wmjWiBUWYoYyPBVc6GF4qQ2ztq7rARVPALfA6rdKkvZVp889NfBm",
  "key33": "nroazuvQ6T3kjmiM3f6fjfTAYnkXqh6i97388dTGhA2kn9qgjYyCtVQaVGBT84jFzfZWVRPapwxLe4aoUJv98tj",
  "key34": "PLVMtCVoY9TRwU6k9VSXr6XS52xGYFXqiaZmX7mGC5Lq2pYQQZREdHeWn15rTyq7BJ5APfNzP1RQoNvHs687cxi",
  "key35": "4VaALRC2MLKxi8GfEAYPss1J4nGZStk5PRzJrYsqxuRKZBPzLuLGqUgTGtNbsZz9bvz8bFEHxkaTsx7zujRiZmt5",
  "key36": "45i7NHKQH2fHt6HSHJ7JHXpimHLpZHTgtsEPpde35w4CaLETPvLNTmmy5mkrRo5cSQWAhiTNJgxD46KM2Ks331tP",
  "key37": "5mPewKPNvTvmmir6fuuBQgZo2DPiCfVHx4JzRwWJ8ryDd7JNg8ZDCW5QebYQRMnmvehK1eb9SzT5fAa4mpCWhDqf",
  "key38": "2FSBjPe7at6dMhivojK35QJWo7Q13yY3fAbT3TvjKZqyFLbgsGrBdugWpC3uoyxtMqiYN6cUeEdCQYvNiQhbhR8h",
  "key39": "2rXsn8jdADkbcNxux14Bt7kK8Qt9AGt85ZNpkLq3kXt8PgybrERQcs7RMLw3JyWFeyDByhgJjYFHwVZZc3Zv34Jn",
  "key40": "2U9g53hXHuwNrKoBrLrVzTrkmq8k5WnH3epDpH3PBa9awCS2MdpnQ2bYcGetGJbGM4Nk98ePwmhqBrq1KGXtMDfe",
  "key41": "aMXkzMMc3f2yvpoq1xuSmy8NTkVtAVNbKzJRgWmpXHpeMKbLGLK9uUH3RYVFfw6HGADiugj1Ki5TRkiFFy771KG",
  "key42": "4uhaddbYZdRBRyKknz6wWkyyqrxBBxUtUUvnyEMmY88QSkC4ntU8DcSzdA51LjDm1jng3mBLkXQzooW1i7bg6dNi",
  "key43": "5LZijAeFcBK7P6SkGTx2pMcKG1mf9xBwFtqhRSjDUzvYJoiPwKssZm6PoiZFqYSicvgBZjE9Hu8SACRCX9FwoVnP",
  "key44": "prXLza6yUTg7DuvvHaxTxsNJW3nhLJHi9mH5E7HSKkBaRKyvjEmzosACGsvgukN8YFdKNZewHXm4Jxg8q1W4gqY",
  "key45": "5Sj4TbhpJMQZfKAo9XAhYaiEF4mk6MhEAbv2LKGqVgJnhYYKdvvEB98M5kTUvMZPvHfn4pGmDHdhiyM5wog81YBc",
  "key46": "4iaQcXSccy8UnbjMNx1QCvSXAowYFYrGziGc1ZFC8aE3UgvhZqbANepFuAzbjSN4yh7VmHr2FXS8UvTjvy1tvN7s",
  "key47": "2tKvLktkH7y3nHH6oPBewZZKYnL7Am449v9rdmvqy6VEN6AVWJpMAoKhN9bzoDW8FU5Ba6rXioKbUSJBbEjcarVU",
  "key48": "5tgRfBwiuLY2GptS2NUjA4Uz3iwH8TUcU914yLzPGDwPWXnQYX6x3YgWVG6kJ8rNabfx7B4JsoEStDnkRTZhjwt7",
  "key49": "463DeCMrJz1Nb6TRoXGGY4yxSmGxmqjdfpsbrB6ucs1RzR4Z8SsC5y9TC8DNvCLAqBMiwYEV77wTA4R69UxEtHpd"
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
