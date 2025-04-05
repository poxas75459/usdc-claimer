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
    "42Hie7wKdFpayjGk9zCczCu4sMYr6kAkRHeS59Tua7FzH39VbdiU3SECKbwcHJDjFN2R7M13nqLhTpFjswX3zXTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LPH5m9rzAtVhpzcWJATuWxSw57QU2d5K5H7XQCQfin6NAyhQPooeXu9wha81VaoKAEwdi9tpwtZ5o5f32J3R3w1",
  "key1": "RCKYqArTWff2Mpq7KEB6aL7E5vJjbzTWqWukvqsSrjGLgExCQDZpQAjE6h4wm9TqqQWcHPRE17a72PqgXFr5shq",
  "key2": "4HLebomWfxjLfeBhWpZG7AaLf7arSaedJvuz6jPBUFfahxGWzWZPtRrFf6oGk8muXzQHjUB38GS9us4EjZYJq446",
  "key3": "2YwE3pLY11TzjVv69VQwMhvZYuEMLYRZB5uyPFWxAGY724ksBbeSS1yiBYCeGJFRSn8uBhbNADaRPdgg93KwYyC1",
  "key4": "519v2xygDWV8zauR6H5aDhjuQFgxW93kHtsdmcGsoyuEhDsjoftq9P7ouLpyatso9zWod6TALy5djZ5gZ1CAx6xp",
  "key5": "2FvnRZp3xk7RM9iJf33JEDeZEoVSv1Yj3QkiKyQ1MreqviQaaaxhRaguqLwBADQoSVQcE5vDvEWM2DoGZRv9k4MR",
  "key6": "3sCyMjhkXTZKBEFHV8zKh5yT91nuaPmNmmUSHkX4suYrjMS17gQu6QkG683foekGwKtNT94DXkYwYTANdtZy8YGd",
  "key7": "mtkJFuftKxFLrQCFD1zS9mnSWGoWazTt9gHcp7kseEwimEYEaRvgG7eScWM7mRr9rw9zP8wVzNiJ62EhwT2E8x3",
  "key8": "2okGVtd9Er6HjK7gYyTuaqXcYL8Y8R9u57NBuZqpyPRv7fga2hneEshokqDJmgFMn4HuE6JF8CXx1XqU1TzzGS7a",
  "key9": "65y4zQBENDU8iW9Z2w3oVvaX7xiahbQfgmrLjcEjuCZkuYiQtuBZBbgh39k1V7c36AQQuVrEZWAdJZup9jdjziZp",
  "key10": "2iJcYB85fzRMaKsorh4hFfkGHX3B1seup5W1tsSP2nb74PPUQ5pSF8djtgRjggTbYWDp36tQcw5G3g4TU3HHiQuw",
  "key11": "5t1y9kifNCA35gzVLuMpiakduRto5yDcjNL9bNXgWiVup1SrW7FW1TqkrAm7f9sHWuVVytZGZkD363fkGQJ6isZV",
  "key12": "5ntmRK2fkrr5Vw7zwvg99QXF6sHc8fMSrWED6dAV5AEW54gcX812kUvj8raWFPYfJFuUEbSvWFUW1BB4mBCotCE5",
  "key13": "9ZvLkggRkUBN6gaFiwFzfcmXZCJX3q2qigLd8BaeDNZGSSW77Fooq8xEQmvmJkY8ATyWxxLtynyvrfn5ekFDEZS",
  "key14": "47mnrB5PkwLeLnTByRWNVePHtorSvDv4hv45WcXGFBxBBeGj64jG4N8uuBxUsr3zXupcX53jEjbNAHBstqSC2Z6Y",
  "key15": "5bD8quAkjDZbQPB3pmqTeoc8qGpFjqjyHfT2n2dCQAGdTgQG3oHga3CYiB2mZpgGKPJijTXQmSVdmgrHjkhQ5nTx",
  "key16": "FGZsSQH8o2XQWAkw1WEyU3pZi5a33NF5yH2WE5MrHPAggyFnNrB14SsnSGMwJfUpm7oCeR3TWp3VMkraURtvPh6",
  "key17": "58zcsRPi5w4a7s3S4JWKUWktECostnq3Gvnqqu9rcUXaZxhqHHLyMZfMGX6FooxQwZGhoLGNhn8VKygWHWvzCaow",
  "key18": "3kLkd5q7jbjUD4g18SNoXhHxy3xaULmRkAgQAVJcw9t9wzaqWgjGsgSVZ2ZLwYmCnibATTaZuhYVRBr1qHY5fU6a",
  "key19": "76exJxQEQgMuzna4dUq4gHDMpBD6bD9jpaJU9CSFws8WMH4CwW8VJM22NR7s1zKvqhpF7pwBgwqY2AqcFUDumBh",
  "key20": "26emssZkNCyFaQk1iPx85quPUxTLfh69Wp27chgR9hKyQSiJB463tzux4doh9RSNdPQTK9w6TD7pyo6eDZGDF2B8",
  "key21": "3cuBoBzGMMyZoE76eJ151XeEsuNAK7cgoWvhJD4LP5dnuwWNSmdPW4YcmPBLA1GqSbdPRQvcgi2LaCnHdYXQnnR2",
  "key22": "wuzkQF8fo1nwYdVZDqoboyxMFUPL5XoAgGbw8ZevVafa7vSYVRDTg1VQs36d9jbdGqo8FCNrwu45wDbEZ9WsSGq",
  "key23": "5cLrnuQWGUB9Uo2Ft8TR6KEQNEM1V2JLna42APSZoQWcJ44bLDRoUAdzxRW241DL3pS9G73LJBgrtxDBDmzWT9bV",
  "key24": "BEGSGuMDE4xey1hD2KecmDsqvqyUKGt8S2HShyVH7QrY4mSaChaDzqqP6NwkbfBm69xqLewkwwuAdP8kVFpNdym",
  "key25": "5HaQ2T9KrUFZyDGyWE2uhuMFgWvE8sTpdr2ABKGjMjX8rMgUFZDn1Ti3hSqz3QGSvzGuygNud4LK2BBkHc8GgYAt",
  "key26": "4FDP6mSES7CmdLC1GuC4aFPgUaCYM4eeN4puYgocbczBEL1mNrLxE64nP3wTSFXnNDpwxXtdcrAuobN7ZB7E5P2T",
  "key27": "2G1SRCuyY62EziPXhjEJaJZkvZ9Qz96chyGViTZR2mn48kwc6uscPqYzLTJCosJL6xnMp6eWPdFbX3NDpLTnD1Te",
  "key28": "5muAx2zR8Gcz72KSExzV73BbjdXsrMrtFAkwuAvr3joUWS558bTgny66vuoXRw1fxMdYH9SoftmusuLAyGfmXzM6",
  "key29": "tDKjYjfaVnexCA5NXvLmJxU2UW15LYiKRBjGwQnoeg2bjVkBzgDxVjjvHf6UT1ABJmAtoMW7DVVFLVRkNqJHxHD",
  "key30": "5hhZWpaWmE1sh8284hUiTqAKZ2v4TA76mpPwQbF3eBuJcsTNz8tBLrtzZ965vMLGSi7fgRByKVhGMG3uv2hx8ahe",
  "key31": "3xiFNHLj3K7EWJyP9shW4JBiqBN7FTAtJAY3NFRyF1nUdoZeshZYdoCdAcYTX9MXWviFjp9srn7tW4irxXTgYE8A",
  "key32": "5PYUWZYCjDSLtHuhVxdtxqtS9zB2vF7BdPXVRhwbeFmEjT1BrfVS4qxxAkEugfWw9Npn7naRvCS2k5hGj43pwT1L",
  "key33": "6Xa2iUf82R4c5CAMFKrpY3yMXt6ojJzv9ZXo26F3ubfPysGQAK1hqRQF78czx55jAs5gz4Q7cMFLNf27gVm4boN",
  "key34": "2nHgKE7xJ5jtVhPbg3FeYUMjLVw64XMPt8avsw9CZvUAwm4Sxd7MN6bURVEvwQXpWjB2YNqRRsEfFjSEhkNEmTMV",
  "key35": "a3Yd96R1B2iZJkteNRTsHDLDusPDBYTPyiPNWp8DPqoMRN8Fd1ViaYrVouZevXPHyWsxz1Z3pkdZVqqn7JF6Boj",
  "key36": "4f1Pu9TN9DjAhEnt5QVRrqfgav4ecbuhKLwYbkd7JUW8VWggcX8SEqPmJrYGsU3s2Gh6tdcbXwfSTDkkyrwxJin3",
  "key37": "4TnzafoHEvq6Qd2gAZTS3ByPBwuF1qDJx3aspqtc1AQCdYGKMRmoGSMF8NjceaJJ1Sw4Am7j9MuvmAjaSHQjUGw7",
  "key38": "5PULstcoyCzvMJNyxcVi4jZLSBBuM7uBRAEEnDswH2NcRmp4ZyvuaVuZvFqPiapAyioeyc98XXfz2aNraNQHor5Q",
  "key39": "aYLU8wBvvEbK7YVtCirNbtBSR23xEdidYkbJtzewsbaGsNbNLrybuH37u97LCWudH7WDT3NPuUodDE8FB4KmGiC",
  "key40": "2ZTKdc7HTVF4xhvpu7Jwb2jQuUPDXGKto4SKqYSCEStXotTTM5giWuCdBEqA2rqBCuHsrGo2tUVELFiE4NhJhYZe",
  "key41": "5fR9WQ6RBJYEgNchKW8MLbk7u7szpLrRu5dCwmGFeUDFhTc3Tej5J1MikneGKU7FSAPkVGW1kVyaQH1rbDNiehfy",
  "key42": "3bnL1qk7S2D43X1Vq5MLwoii1F55b5LaehZrgWq2UBejZK9EXYZWxkhzDQZwwykSs2DNmfGzFoBncCF8DtYhKPaQ",
  "key43": "5PmChni2JJtgZ2dsjTKVxxw63shCPTkxdMnvLgQT2EjYgtfx43UnM5tmMWWF1FSrHFaY65rGrswmscz458hHeV1q",
  "key44": "R7hrB7KP4mwwaEJ5FuBsH9knnJ7t3xwNDk7f9Dpw5doEk3D7FkntQ6sGM5PJk8SN43UMNeeJnr42KzVDwTSGDCp",
  "key45": "2fvP8amH9xTvqCeYundU1pkxGiJZijN5dz1nv33d3zjP2rcRHXGJYBkfm4RKE1iVaX7vzvZPH9TBivr23PX2rY1e"
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
