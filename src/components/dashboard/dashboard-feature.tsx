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
    "5BpYtbsotevH4GDH6dRupTr5sSwNDqtzMdjp9UB7L1n7jcqNW1FbLR2X8pP8GQEFBtWfGL2Jrtmedn8PDzWnw2Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8KhYupvr9rvGvqkDff1Zn4AP34bWtEDEtEzZpquTQa9Zuf64pvJnz1Jovz6Y6oDzxR3SQA2KgaTtxaCbsX7j4K",
  "key1": "2KdFZxDT5XBdJghGegXP7Ct1jcXuyDTKdn8zc8DWaF8xuVVMqXVn2moR23ScPGy6MKTeDGtpASwzaYyH7yVF7drc",
  "key2": "2NRTCFtQMwwhnF6MzFSo4dyxvb8U67BtXFxWvGBVFMZ2Yi8znfCv69JZ4jZf5BvVpBCutjY2MqxSampVyhWXU9U8",
  "key3": "hvGCWdKjWF2rSUEP7xbQLJY28vvVq3SBwAtgy979aAuTtHVAeqRwkR7CE9qeSs8k27AMFeNiAppsndejDaGJGNY",
  "key4": "3w9GZmFEwnGEXrqgiMqbD2coDdgJtD5Po1wi9WHQLQkvhFqhmZd97fzTHzUm4v5cDZH72ve5x7CN1rkuZGLCvo3E",
  "key5": "3ETtdcWfaqivDYdKnppnNvHThvUP3BFSnZwc448bVJMiGiNvBnZcX2fKGohfGvRB4n6TAo19KV2omX5tXyeZyBXz",
  "key6": "4DY1GFoKK5cbsYAQome2fkhtHdJpcyFG9HCiqYbdyMWmt4PiKRyNsMnfscZhbWz76Dq7fB1Yu3CQVDiWMHY3x2Qu",
  "key7": "3rKngJnDoNs6aTJL2dz3ZFXArNXa3WhY8poah2q2uATo1wRu26g7dPmkQhbH22F9dhe5ugyAmNJUn8qPtFJhiGQ4",
  "key8": "2KcNCF6f4Rd5kUvfxxtXhxNKq8meaa4DLcHzbATknzR8hGTE9NgrKR5TY8BL361kQQCw3K1Yzi2CmcR7CUjy6UQk",
  "key9": "mQnkdrztDe6cEuC2cAzyUASyJdToYy5CA9XjHCC74FA52qwt1JMNDoBwtXZVRXpxvVC332eceWpnkYTrN4VMHSi",
  "key10": "4oV8RwHqoQKChgEM7fc6ZpTYof2RiR45ymUzXCpEQqM4J6xH6ErD9tKzgzL3ABZGc97iipGq4aCtVygMhfaQkw7D",
  "key11": "4cFo4ozMRjnEKoQawJEPuejCZL9JUwvEhpqFtaaFzR8UPL31vp87JtXZH14vhCHRx82AYjAZQJ2TsQ7FAwRfCisQ",
  "key12": "FG1LpNnLX3gJbrPT26W12CmiH5xnEgGMQt48PtSLaxc59zjUejGbvdpyPJGo4zpAauabhchMWSSrfrABRdP4xyh",
  "key13": "d2G7sm42Hi6acRaLqjGwQLCCb9jBRap2RH2k4DsZXn34pJFd4Zs8XKaLQ2DsVVea74qEU75mfSUqfWrdjGsJctK",
  "key14": "4kdqCXEYJkH9LHSyxop5ghqdLMG6ZxsSsvJxjTsPbSNLXDU3Lpv59dDFui6Ke7iVQQ2HHqBLTrnVUjLqg63LUmP9",
  "key15": "5P9jGTWjeBiAT6pyG1HFwCUSuPApVmwbkSLkHwezPqALMHT1QHY7nyWuEETEV1tuy2pi53DKUYkNMyxkidZ1apZw",
  "key16": "4QBbq9gXYXMXRisi6Mtq368jZLonzNba4H6ktEiRW4M1etJ12H76LkJbXTZX8cHdhqLgkj9knVpgnSzB8FRqEjxV",
  "key17": "5vxHpz5zEpocDoSNHo9XDz8ACD5w7NwmYHrkupifyjHsBz1GAynyF1bcHc9nqcNuxTX2MjPJpCz8d7dCqTjks54w",
  "key18": "3pNcEkXpqorkfy9S4wm8RtByLJsv2kxhhFjVYKoiS5R6qBUR2MbBdRcaYYiDEz9ALG3JrsiqUGa6N1bAw44cSrhH",
  "key19": "2GFnQNfJhXLNejjHFvwmUqfgqajgKjLKPDxjWttAubMRgXLQUeB5z1tZsDZZQDXpk8EEkS3T6kYrsJJpfDHxitZi",
  "key20": "vCbZY88gwtNMkgdQiYsyp31NNoUtafwfTNnyLmKRN1ah5NKTskk28vQrU5d86mG8Z4UZ6o87KZ1Vrs3kjECC1ty",
  "key21": "2sVeGgxwmzpStGaRbgsXnLs2Ha7nLcJVx942N35Fx2xq4ECoZGhrSrqN5BjoQjEXEbihjcVadN4jiAGEPrToNs7s",
  "key22": "3o3rLcgMMFTPtQELQtQfR7SPKHSJfd4s6VX6bkqGjHcre2SdtJ9XwxGhQbqnNRLhRvr3Pjacw8N4uSEWpGewoUgV",
  "key23": "3CidbuRDhBFBZfVssw3fCFry81qNyHqsYCSYYt136dmJtZYMVQ11QftgA9GAqVTZmZXnWCM9D5pvFhQGvQ4es2W9",
  "key24": "XQVg9XM1GPQcJthsoQooE4nz99xq3WGcTfCm3CZjBG8osu3u1UWUrtXm1kUCHGr5SBPtdw6FfWVz55WHHmdHcRx",
  "key25": "4QJJK7q3oJEsV3qhTagh8JK69XR73RTwAKbuYnnMaWiSwhgi8HF83KBEXKPhCgDtJSXCiq9vaBEVzgYwC3RUZe57",
  "key26": "3Fw3sC1MYATt84wy1PXFqUbXHhiARbdxJn9Qwe39TX45YrePrhuX9NH7z9daMysnGnXzRWFUAstCi268vz2QPUdh",
  "key27": "3ezYvMNqWDCtKbzy4bfJ5miMHjv3eAo76945fFheNu8RgFC56b2Rq1gQoT8WGuAQmNmy59cuJYpPgsQKL8iieo8N",
  "key28": "4osvMhk1oFBrDMzJtpFHpr4ThRGpGVQd8iYRZeKhXrgJm8q19GNghvX4J71R1N4MTR2vpK3qKg9252jYjV2Gb7s4",
  "key29": "5LpiPipCGzoNqTAJJSYKJqmaX1QUKENoMmvECcx5bBasiH6Gmzu7EpvY49MGHSYa8xJZGYaCn2FA2BPaq2YYf2hn",
  "key30": "2wFYuCFGbkJvMM5CT1YKx2ymePYDiCAuNnM5HYErQoABRhRZc1Jbz6MgWGeYJPs1KNZRhq76DiNyypWzRz8aJ1vF",
  "key31": "4z9KUThRANQpsJJR5rp4k4CJC4Fim6zxtxZqqLNYMNWnwUxbiaj8EW8RpGxsknjLUc5vtPyamDEhx9diC3xesX2t",
  "key32": "4NuEHL5H5QdLufiwAFn5dowrvyFgzDLtmrgshCp8BfPJ1XMttw3qR6WZTwRroZrFUzPUhZxQ7WVEEAse8JzBM17f",
  "key33": "5ntVoUv7rjYgNjJKd5Xatbi1vjFs7KyEseB9JSCqWvpEcpoSYFzcaiA486msomfj6JcfQus8YaGHdST3QLXbyeLo",
  "key34": "27syM5TQYjG7FFoYh4khCmVmY2pgegx28LpYgTmBkNUUncYhZseZjqt9yCUxzgDBTfCKVyB1xxC9chFH75MDB4Ty",
  "key35": "5KRsdotihVPp8G6AoaMHnsHLzXQk227H78osuaU3thZ8WHiHZ7Gw7jKM1Ezoa95J8jooV8jEYmGjibAusfN3bb3z",
  "key36": "3BF1ho5ze8MEQ1W47rCmoZAhZ1MgZdY7k7Dv7y8cTfB7e2kmD2yA3zrFev6oJzLGez65gjSAQkMfUupdCtFjjuhW",
  "key37": "4RDi5JdDDzrX628bQMDT99r54ysi4AxgfiUi6SKM9WdBi54AQwNjh4cpavSJ12DmYTHfKQvcdqwKDYuvaEuyYSD1",
  "key38": "54BgrLDxx5g1E9UHZphRjFss9ZqkmUQTbbqNTTyG7nZ7zkKQfiFdbXydSkHTMSnSDwPqUX4nP5ZWwKSnwGrhcdCb",
  "key39": "3a1Pmr7Hxv1kNkWuEcSRArMr5GmSn6kquJbHze9g1kt617TbSmczxBXGZEdxmayFBrVGbewTYRuJTxKnLucbyi25",
  "key40": "3e3whGHqtSAvb6X7VJZnmpjRGEHovbBuaB6Dt2xVZ3R29KeKrSJEFUA7RGb6GZoKSDwVygEmf8t2zf1ZHCaErnat",
  "key41": "2Z22RUNsaez3rPB6tyFPPH7pK4CY6YLt2Rb6BVgHXFYBFrTFzFU5LeCJcoRwsQUfEd7wgpbUhknN424QDmNLywiY",
  "key42": "5kDTwKokbqXqg6ZsMe6bA35632dLNGnKxvdSSZhuvKvQZ8Y4bVYUERXaQmfUGde1rXnKUFj4RaZXuGv32ooKe4m6",
  "key43": "9BGukdJaebN7TyT3hakaWk4HTCopVRUUVYTjAtRj7NNPut5PemNjBvfFeXmENhwKwTsQ8AsM8ym1RV8gPkDtZsc",
  "key44": "cj6w8onKzp1oPTMUBh9EaApTtkT3a3xUPWC8chpB3bRDL55AuHGG9k6ZSV3TNFWvqpfvBV2arARhyKJesydF4AV",
  "key45": "3JPSLeYwAacSqoHFraXuukNuBv4fpQMZxFAYBmCZDM93F5CA4tFRqCQuoJXdHEkw6JVvy59tYp2h2snYkd28fdJP",
  "key46": "4jjfdJBd5oqYQhTcAsDTpbKTYhnaT7aKrM2jh4XdLwUawAhqoFfw5AtTaAtyAz8S2uJx1p3BSQgX8Y4udYimKUND",
  "key47": "4pe8Euaa1kXHiz3Qaa4T9tihvFDDy5f54CNc7FxJob9FARUoqgASXoQt93mQceshKjsuU48kjKedm1YGXz7k3CQ5",
  "key48": "53so3rFBorqBCxVhWsJzdNqs95KkauW2JpCbWEXgsNfrn9TrkHBQxuBGmhT8h9xABhEDT3jszQXAj2eNfoC1pjMm"
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
