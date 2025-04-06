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
    "4ZxQNV9e9H19nw1CsnGyChGtZNxBwkPqz44RGBV9jjGF9G2mtGesqrP8LcYVss3e4TDFDSWg3cnAtR5xPbVPNdJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49cjqkyWBPCpbu7zx12BKpJP2p9pJErFbWbaSAJwdkNdBPQcKZvwHYL49cSNoXKvFcs8d11ZbNYjdmyKD5fh9UwA",
  "key1": "3XXjoqXquTXoGiWNJjHeNw3GnJ1ZDmWrKtsDfCGRmmxfcqwogsqNzpGehrTJPtrVe3fP2MJENjh442ZCtMUxLaGY",
  "key2": "4AYMJhqft2NfhW4rkDkViH9tW8Fhu47odKDKVe9W9ZXSvThL7yJ34GSk8TE4EzMr4VtnHF4oxn5msLc1b68Prs7V",
  "key3": "4vqrWD2z2Ln2z1PxQbWpZaDGNfkhUyt8HhrXFB4qAtRX9s51vJMNF64EYHmvhMMA4jL8cAiMcemSvE5eRxoFJfrt",
  "key4": "3HcmJsiPGFHqbNJpb3DqXjgKsrfJRG2UftLqhsxdihVd2GX3R5TJvUsAPqF91qSiaHRXsm8tENiabEHjEQmNKEfo",
  "key5": "2EkK1J4VTuWpDvzZpNkmcB4pJBrQGF1HFiQBE3zYjwj6qfhNbDjy2TKB1nTVSwDBejp77nnrtF4Gx3pvKRGqJG3N",
  "key6": "rSb13ApEwEHWk9REWiJqbWzPZ6RMpVCGYpDmRk6pMWMe98bRsKrTf2J1ukD41sX5pK244YcP4rsCWALUojeA5Tx",
  "key7": "4QU5y4UC87ynRtZBzpbWBgHmjLTCM6686npWMXbPUG2B7homqWHrgM5McZkVxCdJqjCeqmZxttVDbwgAa5FDwPN4",
  "key8": "5mJjZ6EjN88QPqh8SaUMpArhMudtBeGGWgHxTx2TPgBqPinfBU5o6HnF9hGsywwiHt7EPEHgtJgQkdTJoWswAKDn",
  "key9": "E8QzqwhpiHztYVNewLVcDtzHTwTTVyWTZULve2n1GTigTQaV52FtyFZ97pXw1iZrfiGQHhiLQgB38uRg9Tic7ZS",
  "key10": "5yL9k1Q7V66zjmq7rFPLWGDN4dcddL44g6ywB9zTaN5qtqwc1o2tW7MMqZUvQ3K9hrRhSnnR8kc9jAZ4A2v13ZWi",
  "key11": "iVTAk6cb6Go1oP5GknT29cXY96WUytsifnCBmAHpKeznAhPJXEcnbRNZVVJsw1NE2CwXY6YxKj5t8HpK2JJqxNC",
  "key12": "4TBPsQwCvHLmBmbhXmaaoF2Ntwoz97pPm3m8K7dXwYoDBWfn6zngC5fLjVftZmDxvjA91RqTp9J55jPacTKo5aVn",
  "key13": "3i9xiWpYsMAEwjbLzYUHo3ToaZykzdBMGrDx7KKfFqFshtWWGRmKLUkzRw2SbpQhogRyUzCtXsQikpkxR5EyVhXn",
  "key14": "siWe2c7cQ5Xsmzbdstx4NHf6zLohTjaBj3yT5NEQsw3wVNt3byG89Mw4D1PY11vrQSRHKJx7CrC47r8syNuCd9v",
  "key15": "2yPtfyb4i8zdjsUiuhSg93A5Eb8ZBJA3PUTg8ywxjisznm2cTpjpTq1NmbBSieckmfAkjT4oxePCNP27Dp5C3FuD",
  "key16": "52sWXp4Ceeucqhg3rjfwTEAskhffb5XEEaBH295Yt5qaqF6SodmPtes1rzuwgPoMtiEgTbSoU56z2N7rD7UgdNAL",
  "key17": "2nXnjspru3sxGRXXsfd8jubSbAQD9zSKUo4hjgzYauRvbrwSVG9DnL7ZJ8ma84B5sg42bXT47uGioQC9cTxD2J5t",
  "key18": "5BdQU11xfocLMJuZLpN3Zi28SeEbLGRe7vhoWGMZdvEZyFkVxffNf9pm2gLvQT6vU4dsgLxVaaj1MmhiLEbX1hFJ",
  "key19": "5TfW87wRKetfEQRBpHRKRqCePpzoHSpKkBaruVaQ3aisW5kE2i4dyPhGxJcit1EzLHCpQb6qg18HiWcvd5u4Vdgx",
  "key20": "3j6KYv5uZbQRv3Twye61Cwi7tfz7EzTqycNmx4kgafXHmo1mPMJVd6wqeZF9ooNw1XE97ukVo4br9bqNqFHzDKVu",
  "key21": "57UsXq1YRhSBNhesNas2ngZbWupML7PdGEXK8YhtpDgLp44qw3ozp7JXiJQDg3fhvprDEwUrtkhqBGWRrRGWbum7",
  "key22": "2YUGVuR3rZhxN69BUbJqtQEWdUgrtbE61emBX28SzpwU33ws694FZqjDAHLMtLgkXHAMAri4MdNqzidibdH43y9a",
  "key23": "48eGjpaxhsCjWevX1HweeWdpvGtByYNw5YSgb7G5wp56CQKXH4UeHFEqB4iVQUW2H5hDosv53gmJdWciuYsDQ56F",
  "key24": "sHnmscLFfekzMZiG6LVzfkGDypaFH1Nttw6uS8fZ6Kwy3yJKA1fY68rfkkD81Y9LCU9aGcpW8xCmhcPqCreKH6Z",
  "key25": "35PFfz3BN6dArbnyNcj7FJx4ZY7ni1MxsBKRYALADJZxu8PproFL7hivmUirp9RGnNpr4yVxPMLBHtZfLyka8Yos",
  "key26": "2MwfDjmj1chvmGghBMoTB2W8hncBuczXa61HWogTrFVEzy4boiB2ZtBGisdGgSFTehDqkedoxEEjoFFFUM7UUT4k",
  "key27": "ubUXk4KkDVPDcgi5qtZDmJ9PLF92wJNqoTeyfgY8F4u4maXhAtJT267inm84yHuSxHP7Di9QDk8LYdxu2FnAM9T",
  "key28": "44N6RFJodLAiLgZXqDYkwiRyngeJxwzFobjtALMKMctttnSsPwmXmMtdrRtYoiWuxmCZ2PMdEAVAQHDBA2VBT3gF",
  "key29": "3DCejCsirrCZJwx8vMtAgoGfzx67fN5HfwHny6KqXb6BBreLSBUBNsW8EJC3ihZ3bSZvZUisDqr55eum19bESHFU",
  "key30": "2rsvDUzijk9hEpaG1Xv2oZC4V74UdFXMggp1NDTTu2HyFVpiBzWWqjbgxLLkQQjq8CfBwUacQbPfxhYJxjcX6GbH",
  "key31": "5pqCFnDi5NVN8kJpXDhY3Cp3Joeaz1UwCo7FYbh94Tcn79rqjnbcgDGTyHQMXLj5jBpZfowwwS2Ua8u1CAsoU6PD",
  "key32": "4QmjhTKDkgZ9Jyn9rD5RceEnQVfd6qB7atHqiQBrCMPFK4EtXEM135AoZ8RJQLnYbJ1YxEaVFXYG5zffXJCCi3c7",
  "key33": "3QgKwdRLqV1KspMH4JYbbE17beEgB2YmUBNpsY81d5i97csvjzNHKCvV6nMr4k9nmPSZ4vPLeb8xAyTpVLfUHQyL",
  "key34": "59CSjjNejzTKQVkozvjXAteevjXo7sLJ1iDwLPEC1mML8d69PWuczTWpnqMhESx8AS69Bvk2D29eCqiBayFQPhf2",
  "key35": "44VQCsSj2BF3Fj1CQpa3PQD2XAUavpYGqYWWP7Lk1VeSyuwECfkrJF4AyXhNCBHvuMdgyDBV4KYectoRcE33f6SU",
  "key36": "2iAuZEKxuYUHtXQEmqwCKj6CsBm94DQiHX9UNeAVyNK9pqst9LQgJaPC1vbVz3h1uFEzcTPxNAfrpdCGFFGt9sGx",
  "key37": "5GceheeVetGnssodAFxBfhV2hxe6XsVdYARpNdymxh6fEKKx4geEG8xjZo9JAud9Sd8XnvZQHpEqyQn79Qs3KsH1",
  "key38": "BjKykyHGrrUqjFExoc8zfxDBw8ky7cWr1XePh5PtuqbPon1Vd1GbPRLESgPPsA3jDihDkSKaViTA2zngwddYwes"
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
