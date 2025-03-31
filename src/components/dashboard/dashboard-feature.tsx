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
    "5jQbPNoLZApEMDnbkB5yBVE4W7Wpo6jUJFx8gPGe4Mv4bQotwRduwfvr7mXPj5TX5pWR6GDjYy92NTu9VTKeqimX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pPPoNWkKTFPpyGgH8xbVzDKgdtAmgbkWm6yn56fjsCdb63ogVGaSFtNQfJvp6pLvcqqChKjGTbfxzfcZjct3f5F",
  "key1": "5i2xHEFETeB2YASSp9EUYJM7NaDeGUSREWCRieT1DptmYLJi4AG1BaJDmrcdLe2Hoeautc7UPieWrrJtRLpTdJeH",
  "key2": "3HpxN4jPyEpC9C6eF8cXMo33a5cUHVp2rMhnk6MLvseGwXkXwa4BD68RviLbgeT3TcwyCLRvoWTgPbxrSAYt9dzU",
  "key3": "4eUug79yWUzznWoe5qNgGLcBHLT3BPh5b44YWwBHaYqjyXtVHUzG9V9rLAqoQf7A9f2V6ZseAh49VBLm63C71FSC",
  "key4": "jviqekaXb8YRJK2r6LcZZNdUmUPbsQ1nbRyis9P7iPFKBMx2x29pM4xq98p7j64fCMuVXma1u7wpuEAzaUtHBz8",
  "key5": "3SbWzbZoz5DpL1U39i2BNWPGcL85fEozZgcsoRVjY34u6NB4ygSBWmjTrAe9SZBAQ5n4pjK8fe3Y8XpZfyXn5xns",
  "key6": "4mFL1VotGe1kZgTikcBJvdc32V3JwDNziUHj2hsgDUDMZnHVMbMcmLuDtLxXBgsJkumaQE5QRtUNQZbyUt1WFGML",
  "key7": "5oAwouDaiugAicvG1TVY76CdcY4HtBevcxsefeqLeDUWVDZoPPpLgLWFb1vkZN9WZn316R4yXD7QUH3aDDUtAVKq",
  "key8": "4zDnkeEJtnKpy3aMfXZ6iS5UFbLSYiQA3Sw5pafjchtFx76gK1V8DPWw7iVMY5eoAeqoRL3yHbPd5BLbxAtN7uiH",
  "key9": "r4TqqJC122NYLvwTSup7ADLXYeqVaRKX7MutzJzKBMpwgAQ6bsFRA6yx4NJjmNWDhyFRVy7gzQbkJLuw1gHhohc",
  "key10": "4vJk3CJMFMoHZTqn5kPMbod8tPWwJbEdhsu6mWMAEwDQ46hQeHMzY9XjgnbXyxDjs54gaVFYCgVCt3v6Dib9gxkD",
  "key11": "5ypgqJDGwDFbYeR7wPbZre6Z4nRqRMYKfxX5QMqxU9zFYKNnBDjpZB9wTUA74XkzCHeU7t8Bsot71vV9hXhomG57",
  "key12": "5Z2Cwp3PEqDXV74E52PYSTWcM6bskEHjnc7VCUFWguNXuKJBJz8QLHWD7SYK76M3ox6S5cSf5qrJEJisjTGt5AyP",
  "key13": "3dMtQZV7GkeLxgKxW1F9eaKSjWRUuCTthgN2E6KrMiqA94NNYEMWECJcCBmyWkKkoUaW5D6rfQo33euPvH5PCXu1",
  "key14": "3bdKm7iXYJzAvds8zHjLg39diFdAfDfYs3tsMYDLrCKkEfygtrP2oYwWr9HmHyEkcez56MeTusQ8s5Gz9HHVtc6i",
  "key15": "5Q14KogmwqkuqRqsRSP4xbwFzrSGRKpfrSGiNDgE4JbjL5VAj2vk38Cam1pqnedxcu13ULREY5gUBhU8ZGjEHgLv",
  "key16": "42FsTK17mEuqFER1FktJTw2coHjjvbGKVwrKJXMxfypxKnVZv9hQHoJShRdNjXFjpVtqQXUijpfo97yFiFyJHsPj",
  "key17": "3mJDKsJc1FHijxBo3HvLgmk6QfXqpUQ9aGNFawmjmcXEmqgkHxEUtbo69qDpcR2EkGe6tkntahUwYBGctHmzUfZm",
  "key18": "25cvDTvgBvTdV7TebyycjB22Rh2wK4sah16snqiLKXHjb7vW8riFiGyWfJ2APc7NzS5ojaasrAEVn8DfT6ZRBSBd",
  "key19": "5wggoStaEeEhje3fZMhzxbYysfk5mjhYTscFT13HeBSJ2S3xkvQHGJbKuXsNTdq5u8RYLd8gyrbocXCx9PDgn5tK",
  "key20": "2AwY2DepJafUoeXexTLL8PR7s9PDr8cdVxmZmof99JxPGGWUTYE5RdpdiqVAC71ntfGeAjvn1Nz3SnYdywZ3FFMC",
  "key21": "4NLGoWE9Ds7Ap1KBhtaWnHCwwGtaEwYzj7bq1hyBzjv97B8wfiqyy2vDxaFgxxhDXCvJdsM2hGYgtZkhz1fo6y47",
  "key22": "55L4wCsrX6iVMZtPQRB6yiwRhxSetfPtJHW23WaDxfLbVPMUNrjz7TYcD7wdYAscpF2NCCtFfawhMGtgoc6GEDFq",
  "key23": "fwXQeKCVYhorquRMWa1RbJQQdR79sTiKnJGFiX6FHiSQCzHfjdnv26ANGHBw6RFwuCAYuXckupjjjt4ds7JfcES",
  "key24": "nKVp27fL33vUdhUAETX2X116H1TWXU24GAE3gtefCEE5efsYDQM6MWLQwJjJiixZYSBFKZ8b2ke2cgYRa6jMd7k",
  "key25": "RghuoCDqmAottwRYrkVi7ScTEjxELJNjRBhSgR26PjPbQTCdL9xYBvCxMKLbARBdeVYv9gLs14rcbCZTdEfqP1T",
  "key26": "4Fu8CQxt6rL3NR9R1V6W8PC1vVPPf8mx8XB9Tm4NB6zwq1AqJNgGt4nDgaXX4j6wx1rCnEwsJ7aL62PADSZaENhN",
  "key27": "Nct7ytKPWQjQRFsFkKb9momG82u98KXax4WLgZ4DpNJw9KCLqvywRSLXhQ4tqu1kbiFtQxMqboPDXGHAYhqWBPU",
  "key28": "3dkwxw9sMgdfSxqWmqYHbykopbLi6AxYPFjf8NEzDZnB6G4y8q3qPiMwyv5LSq5kQKgGrFqarDvZDk4Jwyq7AoJS",
  "key29": "2EZk1gZhyh5qQfbWDjSkMJ72kEUQ3fFE7s77ffsYKk9X4dY1WHjGmFbj7rismFvtBBcXzwkJYXBiNkaXUXKZEKX7",
  "key30": "4V82d3wTaxoVeUn4oh2euLL1aj5mFNoFtbGLyM4Vr37sQZ1cuAfYEmySjtuir5hH3o2eRXaGjqEcre7HQrdPPf3k",
  "key31": "5yPdv1ffgTiKfkWzAUgNtVMYjxBk8dMDAmu1UnejRMVKP7ZUFB77DDMCpaBPtNvYiSFQ5j179Yx4R7QCGmeKVLvY",
  "key32": "5bQiLnoESc4n2SynBFjRMGPHy6vzdw1SNsC3pPKoHAYEBPWBTKVfgY9aNWwNCgfNKxJAxpMJiSGZmySCfxuGAqyX",
  "key33": "2yvdpn8Ak2naPi7UW7jrASnUgNYRVcu46jHtXfobntu1aWiMEaR9bABmFRvTan2Qr92HruNphr5ZKsQ39nyGymX8",
  "key34": "4s5XNvtZeVJEnDApm4wjmNWPRibkz1WczbKiLBqzYLG2yoPw5xZxWePmQB14YsAmSmP14C9gnyTosn9BUBK94Jqi",
  "key35": "3MeKKEWYgfGUU8mSqZLHUsJgq26S67fTyD9Psbvz3V7uNBoFEE8hcvVU1mrtRXRF5k3H2oBxievoFQscBS3D4HDX",
  "key36": "247RAef3u4Fb53GDW1GRevHvvY523NcrFpVUrt5kj5BSK78orw82uguZzhrsMMJL8nNgbKW16m5xrvA841VYwEZx",
  "key37": "2QppFPQRbTrGy9EjSZUY27JJ8AD7qVVPwMJLiASmo6VpNuVYokvXondpAhwvDeqcDThNheLxDugBpV4D8uPkDVF2",
  "key38": "5SQeccnNTQ1dENfGA6Je7783qqFUbPezhxf9z7wChvfWGhy1KFke9v7KzY4zfzVRgdVbwHDz1rX44YHwuzATedHG",
  "key39": "3BFZkABZrCurbgQJTH8r1gtqQ2YDpxHCEsam2ubqYBvPAZ9RxEjYDHpjdS6wcVtz3Ch5ayhtahwuRs34yhg7sQRR"
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
