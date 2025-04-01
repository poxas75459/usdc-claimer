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
    "5Fij1t7Uwe3k7wdzPxrvEhDQaYJzkM4tbTnoLJZKsHT6MR8y7orFto49fqTgFqaK5zfU3ekBWP3Jh11AeqCcMB8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgmhi8b3pQrRESrXeDt44WFA2KVGCpGAu1mFHvmA6PNbpgtcqJhBSLFYzKxzMcF87QD7Ynyn3P7TyauTqbwM2qB",
  "key1": "5P21Rg5HWmMRpuwhzhE8aLheKG4xTQE5Ef3M3yDQtv5DvffPMYJmfWcwYkGjSWpqhNR8hBNC1a565QS9Fb6Df2pL",
  "key2": "5DzVWkZL9FA5FBQCypkUcpiCLQ325uuvf6f8RQ1VfzqYY43ZpCFHkBDjdC7Nz9DoghLfNV7mpFWpxTWg469kaMjn",
  "key3": "2svHDMnUwRNpWmTsXh6YTczbfSto57dfCCGBx53Jp8SrRhiD7fkg54NCCjhZPZdiHJH6xV6oNVnaEqsEM2xoZFga",
  "key4": "26mC5QvsL7smDWkgxc76Ydq3doJuAJdcPcdJq1mJhUF3XhNJauQq82R5QJZFGZiwuY7zqNgsrHsVew3aUt5Wz9oq",
  "key5": "5Nstg4hgCRZcxFicrqLUC3Er7ppdoXNV8dKKCurbRdiesaXqRQWJ8erJS6oyDohQKjTaDmJXZgdT59wLgae7iBfZ",
  "key6": "4dEGwgjLqaZHJ7KzabFYsHbfYcnZnHNtahCeuR4Uze2haJjWMyiQPU5BXpggbtc7vFAXSsY9QsDbXTfzKpDXoZq2",
  "key7": "3AWfENKAGCoDMWE7mj4ag1QFivnB4vSgSXps5BkTM9u3tHhhzwCvMYLw3Vx2Kpat3fNpBoGmoHNs8CGnFAH4Vspb",
  "key8": "2VwpoTQGsujiYZSrcrsoog8BvNmoujCU7girwUp1XV5MmDBLSyMNnrKAAgAfcHx6Gpi2xiRAiQJqKG7f6sgyi3ER",
  "key9": "49k43tRprUmpokp5CtkLZg5KVmS7TMgXX4spQdFxnjvjmRE5ZAxVP8eNFGdAg66Qiav9PLq43BA5on8b6gRJKvjX",
  "key10": "2oKaqYqGCVoMuKHWhFD6jLDmXrpD2ww9RgAGp8YEyBDPAWhiD8hkfpS3vrfocG35YwNpFUvFTB44ErCEbBb8WATb",
  "key11": "4d69Tvs1SfbEJPcNqGDHUq4EoDcJ26SaL8PGzEMJvFF7ScXdpcct5LK7C5j75DoteNUkarVKpbfh5n2tGphaZAC6",
  "key12": "3uB5xo8LXJHFrHjBKx8H35zVQBq2jfQZuXWR36ryaPakFBkH5hiawm4zn8juXXZhEksUjUGqUPJMGLjL9MxeVhAy",
  "key13": "2TYarw9PBpkrG8NCqsrm1WHRQhAUUwDYGGzwdRGHJd6V7JPw2mTLk4ADJcqsyt9CNRGU6kKkTqJ8wHDSkBDLUrpZ",
  "key14": "2WxH8RF2BfNqBqM8JUg84WP8uUm1jnsCuMeEGxVwgEHGUNEa41jpbG1shXFRj1uKURpnzru3yRtQzBzeyu1EYmBX",
  "key15": "3mzBefHYgk4zeiks6HpwJedE3mwkqZMumV3V5iM1jkaspPZpUj8XXPZgE5WXf8rJKYokHtAFwMf11dGyKG6AzubS",
  "key16": "5yB1vMGuyocXz9C2RyqT3hvvdPKRBnEZ3jEXq6kGgVQ6NrDRpNnN87AFp6vDGDzMRYTMrnbEAexzSDcK7XacP5BH",
  "key17": "5ZFr871vh7dYkHxCwLAcSi8FeG3ASv35xz8vCq8tuSv1PtXU4NncpCv1QEPY6KVTDkaBGyM8fkVkEwnLnGHZEo2M",
  "key18": "3JCp4T3UHC8DFqXmu8YbE3i3yTjLQeavrYFqXsG4NPLfoG3z83BtUrRnumGzThjikRNZNpRbPeux1u8radCwxxiY",
  "key19": "5tB9NXejhFEkiXqgTtfcsEhsZahzjU6v8kpMGvrM1RQcfCnE2P87p4Mr3k9TBUWtH18p43TSy9Di6zJVd5ter6ct",
  "key20": "5Um2RAKT5Vn6UApbyNFqu6aYGeWvqhhwf2CLyQxcA4MNEFHMVbxRz6jnxDsvX1ZXSRUwSJHcVp63K762j3PiAXM",
  "key21": "2e6ZopvdZaxEJDFcPm9JJKqJDU9Lp4orQtMRL55q9XWQ4pPD2HRXWarm5CJQwFL4zynm6jqPMM1Gn8nmdCSNU7DR",
  "key22": "4SFHNQLon5kpvTiGJFojjYb9iCv4TNpjePnZKrf8df8PK49ZvJwZ9HT2w7WcuEhX1h6NcYhweJgkUgtuSprNfoR7",
  "key23": "2DhLNacRcvYqMiFeXvJ1o3Bn2We6NPPMd3NcFn75XQffKMEuYBCZaYLYxD7oPCWVtrB58Hdv9fqr9fjDgpLQsNps",
  "key24": "5KkAUnkvY7BH29EBVD1TjGaRnD2oQDYUBXwFan87cubJQU3RXG16WAC7aYdopXikZcb36ESC6X4uX5fJhnXsHfhr",
  "key25": "3634vDdGNyTDgqcmnEHFu2qjjNcUgAVS815ZG4YHGqFMAJGbqj4xsBaynLrrAXNx1EnLbLU4rFqr8GWkyWw5PCpk",
  "key26": "3QaocQLC6dWai8cypvnfnLTfFyHMjD3WBTitPd1uLW9HjzRXU9riokHoSPZQoS5Rh5nStrATXA868pv1V8S4yE7A",
  "key27": "27uYBvd6t5Dsqe1247Lusi1VeLq5VJED4jQEhV4c8LzEAc1nVFgamuVeZDxV7USXGStouWDDVuA9tn6QKJme9hPw",
  "key28": "4PpDkHKi7ZJfLynQo8boE95bg6wmDipfhbPGJzAxX7uWBgc8Abd3hwSyhr955tW1KvpYjjFrMXMBxLrdcMqGinp",
  "key29": "Q1SogUJMg8TxCTjBVkmbMci2G3zdALKMJtmcvBCCm3yDJnePmMFKsemV61ouvhV3LsF49CqUE4eBu125a6vyjGR"
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
