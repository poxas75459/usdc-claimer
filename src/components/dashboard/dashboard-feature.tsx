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
    "3qkF8dBX2tqwa4D4qfshJmKKoVuY2xev7LBNvqCmubqtdXTXTwrfyvRq2otKXVqKN5cuPZuKUgKSChzLrUgyNkNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lf2r2Mc9gsYPMmeGAHFahgxuyCTLVXqsw9hxKFHRUGzmBKFhwyAQYrUG1P6TurCj3JQXiUbcGYXFDn1UfJDJNbH",
  "key1": "kU1QJA6S4XhHMxjrLQTHURB1YjNTKuymcs7ktoaoz816sxMiXxBCmBGhUmfLfeusAMnBu84tG3dpMUrX66UAPW7",
  "key2": "4YXJQGCJ9zdPv629mEdTVpZNzFqFjr2b9aXmhiRZiuDeZ8XPYM25NkSsbudr1Pm6PiEkq12HZ7pDQFXbgHW2dqgs",
  "key3": "rbb6ddUKCyuQcmLyEa4bXeHH1YShaJHdDuGRFRViY15yKGukfrFoxs1fAtDT5hqtjJmi9ewGFpH9Kro25J8838u",
  "key4": "5ZoVqCR5vhf3oV921coGJmghQnwerBdqJjci3octMDVprvQ3Vxs13x7ArjUXDmxMhytiHqw9x3DgCDKHHfMXEjMg",
  "key5": "2dix4vJFyTKA2J4U3z5WCBJXh7oQsrVCFoZthZA7JsJSR7bbGsXwYUS3xvwMf3phNmxtAfAwjqd3fkUKP5eLsqsT",
  "key6": "29ktQnb956SV2hgSmcVzK9Hv8SoYx5WZDxNKih9SnQAJjbZqgKsnTB8GihreERauGd3Tc8ByGQNvMXhbf33wxpiJ",
  "key7": "1nkDcrGhoKPRrZW14LkhG9ycCAopEtMiPA1AkiqwMWf7pESxcCxzh7sQuubFgqQJewX7P5VMMS9318qd9MiUZJk",
  "key8": "JVEJMKdx6UjT7xkUkUJMT2x3ReeLNu2jBxPTCR2CVbHJPYnZM23ckJra8FCixhuQswYBUGfUhnZTkN3WGRRA3nM",
  "key9": "35SJboNTS52NtNkgcWRwYF4kz4TyZs1AtCsF7Jx7xr1B69diyXTpw4GKpTxFAY6Ya66WK6Hu6J63BdYaUKAAAKZH",
  "key10": "5uo2HnmoTBC8ppvCbeBqG2Qu9USgeKFfsffcXrMYmSNXGfrK73CFgJdhX1M1fyf2fDm1F5bEFLbpHUyy7dS2zwWZ",
  "key11": "2jd5NVxtoES21vgHH8JY51J6WU1uUwkqi713kpftowiqG7MweSwuKY8ZKu1xYqCPSQcjrufNd87DV4ozcTpmhF5w",
  "key12": "5Te1FGV9xgGYRqdg3mcwfh7Y74g1M991S5K4Q8jupLU9BBo3SAntp1LQsb2sXY7vmuyDNdp6R5FyWaEAVRXYAgow",
  "key13": "4uQ5WGirpU785DgQWuGfK8F59ZQ1KpBxYfuHTMu2rXTrzZ3LjHFRsxLHmQnXnM9waokj8KTPChCcHZgswuC72WML",
  "key14": "4zJD49iWvwwTeo2Nj4GMAfRwgk2uSJ9e7TqgehBYmittNcArEXv699F8Z6TabV9WBoPHZ5WAKdmcVZXpEb58urzK",
  "key15": "2XUrqdaoiv7bKzm3aEevPr1Xetcw4oP5c7BmEWFrNbd3MDynUsLA7BRpb8gLDZPPmY4tK97RNdQgMrNXmF4ekpQS",
  "key16": "2EwTi5tVS2S2Eapv5tFJzcDGVNaYZnJ3G6zkjzBgrDGVMNGVFV5gjLjBTcxrMUdQqeK6458rm72cfxUradmWeuqY",
  "key17": "KcLRFnicHyyxqra8pyzQ2ksjDDpcj33hz8mWMtFSUVDjWVG4FVhtCVAzTcyEhJnWHwsrPsBQBDsfsRXpHzAxM6N",
  "key18": "WaCHeWX94GaQf3Jc7aXsgVWDmtvfLSsquEyhqDWgNdAxKDN936r1S1JHwzQwN3cdTVNg9uZ1KBsdVP9jZXuShkB",
  "key19": "2WBAVkMye69jvtMPuo4vPGQaTzuHsuVFitunvqQZQWAD2iG4ZgmTK8PVwAPvo2pGJNksHnFRUuMQe7kZiHFg8D6q",
  "key20": "3jQBzEY59aFxd1rpNe1zaHpMR4XNavnnkdNuNjVfRpfbZgMoe8d9CdgDDWpQek4TChRo7CtdPhXeVr1gYGWy3S5f",
  "key21": "4dwnvwvAZ98VyosB8L9yJu2KwTAMi65mpLCnGRRrWLQWxhmsHKWmKL8UaxgXXdGm4j21qZMbbyDtGwCo6d24X8kK",
  "key22": "5TpKQP2f5tthJCai95sTEEXzAHiVshxB6CWitubG5aMiguFnFFVBv1HFK5zV12ivS8ZrdBgyGbVRLdJcgBSBMct1",
  "key23": "3K6WgBK4GtNX8UvvWaLo5SFRFQmMM3QuJYAW4m5BNjLhZDRB7z3q8Tg8fAeWvciLPtgt9wKwDN6Myoiw3Mrap6jE",
  "key24": "51BZ5VqLo2psmkGjwR5UJPy7DwBMDC7TN4ukUq4Yr6hzLPUB7ywy7ZMx6JmFQBR7rJc9pdxJduQPX4BZHVSj1HCC",
  "key25": "eDGeWdiPHa4NDEByKZM9tbQ4kYGKqC26cAyrKeqoJWiSJd8sdT4AGzyqD5E7ZMPiUNCRgYkJbszkYCDEKoaKHvA",
  "key26": "4uSgdCEaBXGAWbmJQ2cmamXLWh6yTCz3VkS2viYepxxKJQrAmPHwkeHnQmDA6hTkkVy1KXMWCvHAm8DDL7LczUr7",
  "key27": "4cfs6sZAbzBsmPuaYVBMtR4PuwrnxVikp7p2c2X6am3SBPTTU8UF4xVpBgCF2U3aKhi2ZSsQ6A3sr1wRxqqMrU8L",
  "key28": "2TfSTkkwbmVVL898ygpSsavbQFp2U9VvcDFfJzrHVBwUDe7Nv1xRpGBEaJPp9YNSpsr8WbVfjqG489627Fx5W4Lb",
  "key29": "28DpaRvM2emarYFxrEfEMX78sM2Kep5Ks517rh2MYxH5gcqNDHcfJNZEeH7P4GiCkNqzQFTKudi3Z8wDeX5Y8umo",
  "key30": "SkWoo1sysCU3y9AWZwrwerjdJXWKZqDRN5r1SE44gQMT6X563uwQEQbswSXLNXVCdiikgkdVCBV4se5C1uHH3AZ",
  "key31": "4moeMxoARi8uk7cQj29MeUF88UQJh8n44jjkWUQyhp8ZsVvA23ArgaawLi51btuPdPmQ75tarj7ww2kmFXXffsdU",
  "key32": "35poFkjNwiBS2tXwv2MD3wcxLuz4uBvMGL8XDN2YmXiwhXm7oiC7g2BddhMcA42A75Y6doLY7f4g4UPMF5hopWL",
  "key33": "3Jhkq76XRpijHoxqRXoVZhhA3KVPMXzyYjnnvwg63QVVEp9ZsWhksxxrEeYBUByWmQuStcr7uyvnpnVfKF47JkNJ"
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
