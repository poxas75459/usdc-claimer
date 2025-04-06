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
    "q584iCUQ9aTR7Qv2THTr1Bce3bctn2hMG9EhWZHzLhacb6H1unMtuSuAZmRB4G37Ax2LNo7WsRzDPJUtybgvYka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yuU1mYnC9FTBYvUwwTeoRUBWYUWcQ3zW8pSe7bVYxW5CJKP3nmLiJFWMnbbfw3KEP8stfcAf1Tsr6qBNBhtDUrc",
  "key1": "Ly3UJDX1WA4NHTYBfoAyKbzfidpqtfnNJYEBDeFJu638o3GWhKHYaxaVPmTJZ1RsbyDnidQXMuF4kmE3uoZttyv",
  "key2": "4k4XutN1a95yWMkHE4YxAEEbFaHGD98tQ9epR9RCzSfq11WcqCQwkqfs92wCGZ3BsG5X8HRPtAQpaMM2CQZJhYjK",
  "key3": "2Qrj52h71xzHQshGYDnJAfdEkyMuyh1WVFdUhUdK6okLNfhGLjJRAnjCZaGeJMWdbJ3HYWWLDteURxdejAKinRzX",
  "key4": "5QJtAWeTwoEEXhhCT1nqpzbQfWjrE1JaVrDenVnEyWe4TWRASbU2FGCcyfexUbEvP8hP1z1AQoVcxiVrvb9VykFB",
  "key5": "34QxVMtGyhNRjQXBJoPBM1weXLU18xozvV6wWpXegk4cqyCBot9qPTHJt5Tx4L4fx9bSqwycWniLecpTNXpXuTZr",
  "key6": "52E8jQL7DiW8DkjNb63g2pgTwLbjuXhMykYmcNW6NpsEyPPDE4McioNHAqCXxsT2VrCcor2byTr2wKZhTZTZZhcU",
  "key7": "ffWqjE8fTMs6oL6PLKd3wiwxPEfaFL6QyuuYW15roVAQfCsBMx9VLpD38Aye1rSJNPoZ8LMkCSBCaqKnxsRh3bs",
  "key8": "3c9EvPtPM58St8arYjebJFRLsfGGwrMfY6Yx7mw8eZMLjSg3zTyM8pctNf3MwvHWy9sbN71VRLgz9x1cewz1rqpN",
  "key9": "LABVLFStTPm1Fdw7QDh2iEzS4RJZLmmxZSV8hpz4fhnfrP7aSLkUy5NM2KKPSnrXyRfoZ2Bn7RqUp1nZEa3nMsR",
  "key10": "4M28rTMTYPznugonr888udRWHEEGvDz8SMMtjxg7QHpiUwmZGAMCSij2VVuGD3qvNofdwYgKDk4hKJJpAvosPWRi",
  "key11": "4HowZyxA3GUNj2MnGt7o7zgR3GSzq6LFDvxt67aijCZCKUy6uTQYEjVAhcny392VZMbN6F9hrVcuwFdai9wBRRPa",
  "key12": "621iUTuXdLqhfVe2f2VjYCf9FaKexMqXksiwDMJUMAvc1cJPFBYXBc7zvKoTnPhcwHAiAdatRFzESNreTrKaKaci",
  "key13": "3kgPz88KzboaaJkyARQoq89WcBQSXTr6WPe8ybFQNE2gGhYTUtDsrA3A1jJZiMUoyZzFiC6MLES6ZEKUHPPKEDKf",
  "key14": "REWvQLexV9zDSy4HJutHRSkjfYUQ4sheE2yssng3w9CuoUUK4m5cBXE8FNCPvcL9rVnzqwRLLSfmVCzNXto714K",
  "key15": "AVCPD9vFWXPSS3ARhUCkqz71XT4ZgDiRLjeK7FAUJVAhYHLvs4SPVs4Dn3Zx5AsL75o8TMsHoc424WuGXSdXAxc",
  "key16": "2yQqXvpqorNrDPbQ5KuuDj9fUDRVA7NG5VYsHC98DMzjzt7xJApDXpTsTTH2a3vUTfmparDQFTVHDwVrTBNnVkZd",
  "key17": "2Fif8Uurau4JhNUEk8KmLKpFbFjzaYQjNxvaR5xW42J95uJhcvgfgCTGTB5zrGNdpdyzJvqDMYvf65GcZtw41ExR",
  "key18": "5U3wKk7kzzxAUVfuQaGrr7F88NnAXpg2hgszCELa4XCR1SSGbXwco8RS5memiFGJnpXhEFYKC5BEubKBZo4ARtWw",
  "key19": "5FmSv8MfsKZEEvFoRmVWsLZJE8FEWZrb2GtZcgpwowimJBeRUocS6s3tYTD2pgqkVyyUv8JbQA6BFSiejcKLMSpx",
  "key20": "3FaydziLgD25QGKWdKRyd2nLsTRwgHek9zDgPJsLmN8JRJgTKYXSADUMs7qxruFZQxge39NiqeXWGBz3ESDUnXNU",
  "key21": "MtzdNC1dfHoKBEK6QZgTo45VAVN7hUEaougdCv6v4zYDpBUNCssJgCgDJePknuqKtW4N1Haz4tZPS73RTWuXtgN",
  "key22": "2FE5QssjAqTtKXaAJvWUWRJJ7yGQzNCbgE4Ec6AUojVRhw5y7a2UxoCsD7GKFLrLHXKWfsGW6bJ3U6JCNr6SgSkN",
  "key23": "42zai7QQWNqxzQs1bYXxiJcnKeMUieEznyfteTFyRnqH1N9QRbWjrVHQpvA5ocqadWTL8PdEebjTa6eMktYRHUET",
  "key24": "N7nHQjvg9Z7XSqH13CbnM4QRg4MGWT3P7uWcEA6f6bYQWh1WzCouYd7jCMhfL21AjSqSX7eXr3bdCkA3kaTd92J",
  "key25": "5A5URrR7XAA4o61a5kNxbEmDuSco6QLFW4ztyyXQpWrbRD9rxajJhfkYDoFruTNiY1YEtHDF78vhec8cW7auGbcV",
  "key26": "3eGUQwd1ihv7VPNM6nTteGui7uovBEgfxNgu1p882KJ5s1pcdxDMm5jMnXKcrVdqVGi4aQ9hfqix46H1sxpw9qji",
  "key27": "2BEUtNHQCf2Rw5aAitwrFxbQNAtiyd2Zk3C4WPcBXBrfFjsoJM4wCa39JLpAoJMrojorVyUgwydcJnUxXRgnJYvV",
  "key28": "2u9BNGB2S9LYRK85zz5KRtqtsMRuprgMqmqudrF7irC33GXtorQWDVXnT3kKsL6ZY13f8pxSu39VvfaeJPzCS32p",
  "key29": "3unnUyvq9nwhrPDrGHRqMcrwPGp1GNfziepmfmGFFxEKzWf3pNuKAnZKNguNPADokZPj9Fq4SpJVCBfBbaBmBXE6",
  "key30": "3v8wiVsyHpBH9fr4peAFyXhJsxS5DBa5qogsrGLLdW3bkfmtkYtvDTBEQ2fWFj2RyENfLEoSGzXgqN6kVE9JeiSU",
  "key31": "3ttsVmits9YBXY9hxYtvv3MaM1WGYwYT1afB47VD87PAAacwxey5Q3t8Z9sXt1Zhv5JfByaUuaMARHPdx8G7wbRL",
  "key32": "4WFgGeVjh7AZ18eeHVW78QJMk7kL5zdJVpQaAySSXBNQSQg4LN1RMS2ANs55jnKiErZHieBxdiLzs7tcfRny7fyt",
  "key33": "Q215iiDVjz6Soov9fg84nJEsUdVeK3puGW3KiSKCFcMbisGJjm7cNqAY3C3E2DrAE7HPkZ587VSYWydM6zEPids",
  "key34": "5PEzUKs73rMnkHFSNrLd6HZ4p4Lc96r7bYEqE16z8r4ea7gUoXr4dqjRkNQNHHCm9Gcqrw4FipuE5ZRMBgmaGhCm",
  "key35": "5iT2zchsJ57QRNPgReu7xqoAgdNAfgBwJAhQpXoRMZp6RWcMhks4iQpzyNgC7PGNmTTvwBrDUH3e7Kioq8SoUEnw",
  "key36": "2RX1jBgsyEkEzCYFryKh7aoP31gFpf4Txbpp98LHTwakQeUDSzKp4QjuRakuzkvLFAa3sNe553uZnNJ9kC5vTcQD",
  "key37": "aLedNcbbCobwzyUEfaT2d3Bb4sae5UtsMb4Hkm7vDDYPbQHgBHAUAnXYVK1HXEp1enDoHJD4ihbqNd5U2RurFnY",
  "key38": "2RLJUi2HpCEHNgdKBDRmYnKwZffZeqiK75uVjsPomJxybNmUXBbcpspLgRtS3BKruxxo6vNk5VhAA55gaukz6soo",
  "key39": "63ipTKpNarfNBAkCQSttPDr1w8rS3wynBqkNych8oQzzzo6jKyVQ6fvmvNZ1Xks6z5p9xYLRhpzyF7iJKSH95JTw",
  "key40": "4Tdaz46tYbSkaqLF8Wf3GRrP1JhNYTWmWt9iaLqYXD9gbWiJ2b2Y3T2SFpxCuqveqJ6XhTSxw6ShriyNgJEyE9JE",
  "key41": "m3uK6YpJManeL3UmSqmGJGsFLiP5AFFvSTb7gGnU63cjryq5CjnLa6xxkyvWNaPxB1nTKDg9fiyvHaok5FXaKpD",
  "key42": "Uzb7C1d2W6d5sRkKaaTgZnjzPmUCKHcibPE6bgB4GjCsj5vhSh77TGSz5QvJCkwH1qP8rpyjA5q3ANXMX2U5RMi",
  "key43": "37hJmZSQxghNxTod1MSrVo5yTRtWrXcSLTV62uM1hK9T4m3JHqgi5ULN1hovPhQ1ZW5gEeC4YEKbt2CCXZAQ7yGq",
  "key44": "48SigMa6pP1xcYseHZfsEKw6sCTSdRDn8FUcvRLWYEKZXYJY6yivQ5zSH4PGtDMFNbWrB9WaC3K9Are3rBVzoxz6",
  "key45": "66xmLKpaaGWQ6JK9rEC7PXsYVYjtUooYNxi6QrRue4KuSdfWjntPHKD73CZPFW2XWznYmbW2t1vPNz6D8GEZ1yeh",
  "key46": "z5PnSkWHT3XRL8uuEFBd7PXUMBiXocPXVtXKfXJgM1chY3RCREYC86TFUQFZDCNbK6hiUwsLSYJqBVeDdxFaHbr",
  "key47": "52H7ooC2uKJoLL2A8qkjg3AKtN2H1sDzox9Rda9zNM1CFAw4D4V1ZedvAVu3tTpJCb8rzVZbGTg2kxFZZzS2sVFM",
  "key48": "34Wv7rPWeLisYjfysaMx49cREe9o8WmoFx16bAh9REacThHotkCVZVY6w17v7Ez6T2FyP7paoYcf16dgMydBgCVf"
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
