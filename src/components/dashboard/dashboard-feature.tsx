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
    "4BSsGH8QWqzxmDQxDZUgZ9R9EVhqEkJfJLjhajbWdE16rvVu3iaYhRbngBSUhadCqaEfPS2WbADaMLc91f2oFd6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oSh3bNMs6YWdmVZWMMANAwq3MDo4aMagJsJmLV9b5U29v7d2YRrDfZWmZVJe7QWJUE5tHQ34hM8kzukyhNypwdF",
  "key1": "Nvwj4PZgFc7wJADKoqKvJwPwz5QaDxrSVszNJCftuCutpqC2Vq7q125JoMfNFDrMesvA1bMghNN2wWJypxUBL6F",
  "key2": "JaPDf1rj8qRkhNvd24o6sAL4ULqLkhnbqE6aDNMV5jk4VzbdkskRpDiRtXrQjCrVTVWGqyrofmKQpi4NCW67g44",
  "key3": "2myKWWjUyp6bYXWpc7CqUP654PtDWu6YccsQDxfEQBergrc6pvfmDdFyhcikKU7aAabZbLEoHiqNXftKHpxqLcqp",
  "key4": "59d1e4UQFG9sFaTMFXGy33QkaYmXQSARwpbg7JrSMZLBdWbrcYoyt2L3nkFVPN2sDKNbTKHvTzSJipBc7extWctf",
  "key5": "2L5vEdYEzqitokYzWfToMhLH9khL8Sz9XXgM8EfYvnpmc5RcshPA6Cst5ey2L5TrFZjmT5QrmS8EPEyCaTMy9tnq",
  "key6": "5xyR6W4pAq2nTCDqWHmbTTDuyP3FLaLZwHwXS5RrUfYypVUMwUi9bRCUUQAwn6D25MNnEEedr8yNDT7xe84kf7KX",
  "key7": "32cR248dE35mXNbPaEDEEzuCYuppyfaig4QZ8jo73UuXqP7k3tdDhyGTeud8MaBKNNDrbhEpQvkFxGiNrhr7QqDd",
  "key8": "3JrwVzCRMgNggwDGVmd2kfzKrGvKxQXd8Q3K8rvuXNZ31Gy9D6ExyvFcVpPSKVxqoGvuPPd8wYdSpgZb8eK4PmZU",
  "key9": "GCHM4uqnV1MKqxCo5HbxUEJXxztnfojFVP5xTYkqw1B5oFYSat4NDnUjFAbzizSKSnFf4BDjGfJiTe6kxT6pXbJ",
  "key10": "o2mnqFzYSRviTitZyZXTYdSaeKyLDn6wUsfyLmNJPiVmjLtb4yGQrkmZRqQPNY2cz7KF1uxxgK9U75r2Lg4C2xC",
  "key11": "2yURiiLVEjPwGvGNwSvHzHLP5mUSsNNSfZy7MaBtjYEWjPDTYAVHqXxUqny5yc6a5yW5Uyk3XY1wprpG1bBygYEY",
  "key12": "Rh5PbdXZ8bLo7mwNv7NES9NbFAGGXi6pNdyZveUoNyrfarVfSnn8tEvVEf6NmfsgLS826B5ZFmNjSF4Bh4hCC5Y",
  "key13": "619EjUQoMEWD1LJotRcgPpLuwYEZmk1PzK1o6ztNAYzz9Vd7vX9MSpkCnDGUimxGdpMJ6b7oRty99J7uSz7MbGsA",
  "key14": "3u57Dr5SDqDE6EbD7YBzf9dcqsAkEJLs8GLCRNjfK1qGgPy3VxNwXBtLV3iBZmVFnURvkR2wmRS5ob3kKdPwkyVG",
  "key15": "3XFVmNgXhBu9McXfS3PvMfb87JHfpF3KmGZEjjK2cZVdxfQyNWnWWR3EvpVR7DgDo8b641pq5GPHLSujPximKT5U",
  "key16": "5L8VFXQxqPeuZtGb3Ci9E7Vfw3Q2QKnjzNTvd6SkefAdabkbn3K4ipuWoGUf1QRrBZ1h9Xr3TGA5LJHJbxkfY22u",
  "key17": "5htwj3yVBcdWC642nrz4s2d9DiMCF8UCfDPdfjAqouibLfUpUvC8z8QpvQ8pVAhnqy82tinJLgNDUPAjtrGucUop",
  "key18": "2VQy7ScLAMVQZ8xQTUbXPZ5wLnqxV3CVfZZdmW6LTF8moJLAgPNHat1y7R1gGKbBkXdfqZM1yhTkcFwxpjJvEvpU",
  "key19": "E7xncacMb89JfcvdgwMCBytkmbL8ouhX6AaaFfQsNVVccJZ3gtcEkzYdRGfvZRv4h2sSPBNaJc3vFMq7exuGt5w",
  "key20": "62soYLZttVbNVghjKEUiDFiCa7A9mvwE6yC9mghuEttUG4PfjhQzBTLhp2LuCmfMgeiYxLMANUaJNrMiNXdyrptb",
  "key21": "NkpoRqQkWKE9kFu1EMXdv6eXNinUDo4f2c3CtX57wZS7Xh9mVs3fKTGFwuwmP5tN1WaXWPH4gCqj49muoxrfSe7",
  "key22": "3YDASid6nWLn5qdrLyeywmoE9ZzUa2L95UvP8f4zw2xSGYdPo7UFFHbEojTebxBs1epWgr6JosjcAoFz2EepTred",
  "key23": "2CqSbXmp2j1wiaZeVT5jJXEruC4VYF4Bd1D9aC98ZJ9e1CyK2YTx19EUG8aGZVfR6GSbJ9bDQJ6TT4XmgJoWKeDT",
  "key24": "5V5Ruqi88WoaH5ChpYA9FQwhHqiuNgJYVMTGc4QgDQqLxZJMyZSnbkGbn6KVZCWxvcdgeYomhJpWUV6HKrbRD8yB",
  "key25": "3YR68ffWoGeRqt5AUHGV8uEUrYLj1LXHvfQYtqpo2Ye1q1Mo7g2S9ndgBcR8Rw9RgKUwfM7FsymYLF3Mkww3EwDr",
  "key26": "4rrMLMgR1x8JDTwJaCfbX2TYmcUAYUC8QNZfQagPWYttwokqfZywtLQ7EhDN5bJB3rMXkaRjVw4YpA4kwusycpeb",
  "key27": "6MyRiC9QepRGX8nuKTtQg1gbRtDgGnyBqCaijEYKvbSGZcFSgBhuwXh5mpwnqg5uVnEF4arhxJ4pcwVnKoHMmtj",
  "key28": "2dLBvL7X5nQdyiqGVHoSE4nMgXVsF9yNvEPzb6PCNohmn6UPt1kaMUMi417ixJbZhsMVAKwMKqqRd3ykVSrJVmkh",
  "key29": "43dmBGVrznsDaxL1BuivCSqBGRT6SkKGbcVueVvmCnLajnZBVhSHcuFfv9b4jKZGpUQt6LcT49QZqjCE7Z5GECqm",
  "key30": "3XZfkeDKsYmQ2maFSzTQRkeXLXWNk4rZJjuNDG4bTXtMGAZQ3qhqedoP9tA4UZQzaA4sM8fSuBqEQVwygM4oMMi9",
  "key31": "2EUetvoN8SoHDfyDUnrSFsaAnw6DNpvdyqJdEg3nVXuBtCiXahHaykKz3BHfRyzSeYTtS9dbSzzd9SCFFTG5YwwX",
  "key32": "2xhjqmC9idVev92RRgPiXV43HxqRSjAPpf3p1To6ozbiyNDaxnuMBGt44QaFsEbStorenVz1MVoszcuPgP9ykL9F",
  "key33": "4Eba7u2r2DENgA8SQCEAVoj4QDtNtZYMs6iAaKZnGfWz9s4QRjweRiHGZkMwfMq3EnryWLkP6kWqHffyLbTGcMph",
  "key34": "4acAfm7x92dSSNsDsjjdbAX9of5DoAApLi1xrw4ggBCLP4gudDokxRjyLzuDnop76KFyVmA7qE1u3JwLSXLKXtac",
  "key35": "bGHp4pxV8XrKdUN4vx9rHnThtGBc3X2QswvMCFGvng7dJ3gejut2HAEamkbb6RxpjGTZ12XBbheU7CkZVzNFw33",
  "key36": "2eoQtZKh5bVbjQyw78YECy9HFcHHUqUF3HT9zWt4ZxjChtox6jsvSkwLQtPKFfSRQLc8QHoNnm36C1SXeKJrrw2W",
  "key37": "6zD9M7iXKJReLBLVZPe39KGLderYVHT86X1Bhf7Ke3PWqnQaKqqXb85jjgkewFqnsRVNgXARrqJZeSpDjR8xXGL",
  "key38": "YYf1oEszmjEDa3vFVjBvDjfj2JCchSdtGZpnzE131MH6zvp4ugyT2hn8XFyxhrsEPp6YrgELkQzit4mKu9py45Y",
  "key39": "3h1RK99uF5G1HZrVJW89KvfNPbXG8KCeF7JVwBVqRJMHgf6HwyZGgTK385DmhKB5hxYp73zY1jD87So4AnyjMc6f",
  "key40": "3A4BK76paJQ6NmV6x6tWSjrVB1Vi2NztXrNd7Ppwg3h1H2QPBeazM4YQ5N8ucaUbg3pnCa4VGkvQnP3WLreHMXxj",
  "key41": "2nQ2ob9nBPTj3bHnWDGBuA26BiTkRbMXUZLs9jbQGa3Qk3bT8rqNiNd76EbCbajbPoTUhgKJVWe3dxt77rcs4Hbn",
  "key42": "56E43yZRabK2HBdLjkLsaCW8EfBN1WasVs6Qefsyg5QAJUV1N7o9SJuyrseAie5nJ3WAHeHo4PQ2XwQyBKtDMPEF",
  "key43": "3zkDKxdr4i1QhXNAvUTmQ9J9a6VXwt4PgTjWAcz1g7V4nc9Eqksi5Nf8JGj6B4eDpXDZvej8n695Wj2rDiz6iK57",
  "key44": "2n4gkhS9rxttvd3meuqUtM7TSxZtZPLbyhcQBsWbVhX1DyD3EqUs2Znid6x39t5HKzLfyHqZzXiCH5Pwpx9EArM9",
  "key45": "E9jpN2EvAMRifektcbVVzpC985sB939tB3XRcAXPRRRMMZCF8mQgnpi9yiiP2kESnxk98e9ZT5Qa9PisyY1zqaZ",
  "key46": "2kuSQrVgW3dAwX5nY7xMeiyH6cMEwfYWaq37DgkfiEcWt8oipF4TpMq2U3yA7Xqu1sqZyf6Zyu7GxksDcRxb3Kz1",
  "key47": "39BKHH8ivkHrBeST3fyk4sDqWsxbQHrrpccBM9fndfRMmYWyfs6NJZjethWbEsSP5J5y2N7DxCTSSRwXemhNE4Tn"
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
