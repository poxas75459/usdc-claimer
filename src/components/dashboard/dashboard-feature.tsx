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
    "2etxmQn8fezzHHu4t8Mwt5JRP5Ryo4BKpQ53XM16CEME1zqafmhKrK96hZ7xT5qKw7WsLrCGZYcivKwP3Xkc7YJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aJm4WVN8Gd9KqghuJCV8P2d4e933dFxYoRemghm9NS7sLUiHKyNS1ZfKcRVGa7xzd9QT1jDLjoXUUgyXixfPDXm",
  "key1": "gxsq9UikhdkAnUCqTyqEch3qebwPfRs4w3MCnZkzKP9iEZPG2VmzqUV7YBzNZCXtL5odfgaDjWzaJv9cyBbBrYc",
  "key2": "3z6PSVXJBkz2Agd9o9HhRhXPdrgFc7kTJFyHQGGeNysiKwze8cT5aswk5KVEtC9fBDDGU8hoQM7evbw68H5pn43R",
  "key3": "3w9jRcHSmfRw7hGr2shfjRh5SWbjytDvFQeEB4Br1LoiLtiBybCunZuDpAaJg3vNF8uG5dYgSHQyTPnX8PNPoVvK",
  "key4": "4UUqAar6T7J2TLJe8JT3Cz9NAgMkKVgbCDAVv5UVhxCifUe1ej89g28KtbDJ67Zvzko9EH6dqhS1JsnjFpaHCC1A",
  "key5": "2MrTfbVM8TuD8pbxxWSVos4SuyVhWDZys4W2akTEkbbJrbzRw7L2DnnHYXbesrkfRNKdEu44bA87UZ2gwAWj7u1A",
  "key6": "2k6JyuLn4mKJyzdRnZRVCotzeCVLRRP1B8ajCjjY93o6oTKCYRrNX7h95RCuqLXjtXekqsqTxWaA1TWNFa9R8bEg",
  "key7": "2aogqvqvW6tEfAkp7noFPkcyPuiC9eSMMrE1PjEyQHuPFZfPfDnKm4UAGw5jh5h9zsfABv4VirmmGN5H1uLhmnAs",
  "key8": "53fVSCS82XNEE8vpbMPaKoaCDSeBLwAcnkSLmamd8mNzQmSiUrhDSy9KpCRrr7C6bLAGRTBKUTFcd77DmToRNVpw",
  "key9": "2tzEzvvQbvvDULnSyioYk76Qh9SAw3ApZLCVTsvrrJF5xwKiNR9fKLoXW5K8nc6SnEVmPugdtuMsT5jAHwfpyHAy",
  "key10": "3rr4nJTnXzfpjXGQKY6S42qPV9YSygJfNiQsJaqiPFKoc4zsNRdHLMSe3XEfJ4BM64yE6truHt6PhopYxD7YBh5x",
  "key11": "4AMDinmRtMJgsdAYRGiz8qJJaCmahFdzT9YdLjHwqDhHaxpNVriU7b7LbUPrW6xV4ui4Ug84yTipF3ZDEiYtWCiS",
  "key12": "D6iRK6bQJg1Qqj9yePEF6PY24jbFZg5MGwcMeecfngfSy7MKwMZUDwmhiHjYQj3X7oWqfsogrZoDkmmdCHMQGyS",
  "key13": "ZR5jCqBHnYNHSbPiftGFWdtgf6xSwPj1NdEJ5ULUXCo7aWMFcZ11TwWmH331MUq9DbYRp2N4omGUDBhqj28n8Hs",
  "key14": "3mR7y5rsSptVt7SY8tGLUE4dCSaaNpw8CuyBHHsakmEGhkVimio9kuNchWYdQAc3MMk7uqiWRFPAhCR49Hn6A9k8",
  "key15": "4dC1cERGTJmYDx9DxW1X7EV5UTjTS2gfQqDnZEok27txH2ikru3c9buX16tCnN1L4JaFp466ynppybUSFceDqnwN",
  "key16": "4CVMjGDgrXSsDceNQzd6CceuavZt8r3HxgzZZaz4FM58Uz7cVVF7CjDpPxLTpS4pXo5tnHidyzYxdmV8rLbeWnfk",
  "key17": "5xbstePiiFyqwT2wCHNW9KjsPPkNop1JokyMHN8CaBzNoCwFAvi91u2wmnEYvDraixkz37kWHWJubduK8tQpEEMh",
  "key18": "3TkVwUuuAj9H5nxqZcNBsAsgsEt2AARnzdMPd5Vgwqf5aTQxUscA1mPL5QQYfFePJKiHd8yXREB8r5GU5ktMRqUX",
  "key19": "3zcyjcWq3zHPrPKbtnidQkCYv3XJKpcAN2aAWo8mrnjvoQuTPTrbQ5v1gDXs3Jb6yUUzuQvfg6Awb7WjNdPQdZpQ",
  "key20": "4Mm2MqSUpCynEWSCNSrPuzMMmcymkfi1EJjdBg233XEgGQp8W9Nr4TU1yhxpAfkCoHHbeJy2CK8SrBSCQWNg5mvZ",
  "key21": "5rKNQwfb7uAjKicuc4MLrPxZCJGKSawJwTjDALojkoSWFfXwvXHSeapWHQYBGwDqiKhxPEBLWTBVDFDJJT5dkzpE",
  "key22": "54reNksk4iSaDL9WqDBYzqx9AmWwAiGiAaRJXD2RAHhdZeRhMWgQQ9y56PoU1bbEN7qUCY8D1RSrsTNWuTEMHix8",
  "key23": "4MBkyXxueL5v3BhRiuzXU5wTwERTDi98eMwdDXjZ5bFdsCeMKJTFbrwejqi17orc6gWNcZ1NRcvYrutM3qfrMXCC",
  "key24": "2oKiuwy7rEZNaiPCb34HXqw4apJePXbRZ6E1xr2K34kakZ9u736or8HHYXTfmECPnMATfhjarXnjzYE9DuTeL5CC",
  "key25": "5HkpeZ6aqneJdDPJvfrpNscsYsrtYiRavsfKS89tYVvdWzoCaHZ2bVHuV1HTrXjcxVbVZHr4mbonBAbnBQTkUifi",
  "key26": "4WsKPT9DKsrHmY88hEJZdb9XXYtbQo65Z8hqBY9FHVLwvDCGjuMmQef1cec5n7AD3aUF7juzV8ErHtAURotBTmhK",
  "key27": "3gortmhT8GTBZhwcAiWrWDoCDWZUFNCUHEnwv8aaR5hCpbz1vakBzcNwnh25LKzS5Erc4g4C5gGfQP9FKhHvWLy7",
  "key28": "2oSjCKRwgqiPhorS7xDRT8jgbpZaFdBX2LBLpVU2oBHjobxPWSaMWK8NL7VGcBRKCFY4cuEQEa4iqbhiSXPKT4QW",
  "key29": "5K8tD5LxfGxCctLGtRCKfA58kmZozX8z5PUcyi1QCEihmg9PgbgGPf4Tbszts9xjyrSZozc7VpNqQaYDXVxeHU2T",
  "key30": "2myQRBJB95jG1NWvZTb6LK7tmbyYkPiEGcytyzzvkZ1CYopRTYLtQrTDjy6HUgBveNUCpx66fBDwBUquTM9UQCwc",
  "key31": "toq2sr2cX7MHgmM1YpMMGaqbmdVjv3RF9VnoQGDDkLRbTRC2Tp9a3yv6Qg7ZZ3sxoVjhTbWgKJAvjnayGbaW72S",
  "key32": "2zB6SVFdrLNtXHr1UnGnAaZ18M3M2X5Jmoaoe48KKbcEWBx6oHuTbs6cx1Wfr6udzuTUg6j3a4uwuwG1Q8aM5X4z",
  "key33": "27qNrqgpmgRcdYsHPUSRvQQrSavjpHsShuzTqmbG6mVVnFjj7cjaa8uZvb6eswUWyK5Bp4ua8m5CrujFvwmGzQ9t",
  "key34": "4mQL6Wmy87jTG2giRFgyW455NKTxRACMrb7Dkb5LymLnNkoyesoXxmbnzCrtCdF9QPpRfivsws9gmdt89HYZ6Gb8",
  "key35": "3iKtvVT74St2qA1EwwsBShE2DnuUCEv7w4Zvx7pwSTxTCCon28xLacULcGhBhR6Mewq5oNBTmZjfxbLH31qura1",
  "key36": "5XJ78EYZzKSTqh9Kpv5AdipqpqyWFweNWN3TMbXhMJXKDk6Qd4ZfYCHxWXpJmmgLWBojt4ka2VHRejJq6LDt32gH",
  "key37": "2zEKvP41aL5dHwHG28s6yxuaAwzsa7iHrCQgVTL4d6h7n3NtqRgEa6LmZt4Wki7mhwwVmtyZmSTbYeTneavdwsa3",
  "key38": "FC8sMT3brcEugcSw5T51qkLEoMXNmkAMT63UDfwfQs5kXoTV9xxUWJL5tNGVKrn3Qm27Sm3omM2JCuBwX5G9DAN",
  "key39": "WSmM2opvUoNnK2yYE5t1buc4jLcrcxrBZFKLp6tN3tedgi26QSWnibT6gWzqD2P5eEbtEhijJxANTnWqGZq2DDY",
  "key40": "xvpTWpXM69pMmNvuizZhXVeB4CeeHesBPuUM8BSptZ5m61V9Nyyx6DvjZcrMNXJcuuE5aaC76LmHFBsnEamJcfZ",
  "key41": "2VxcqybKfm3KZnkrDz3CEoptczVK33yX68PuRENEDpsPRksNd5ozcbvVZFskT75B2F3LvL6JfHY4S2DMNTMkEzrW",
  "key42": "3Ew1b1Hi9hakUoUG7hiJXtq2FPHh4ChXCW6wGpJanEuM2a2dLJcuRcExgGqkurshGMRQC1kkDv1hyFLLgu7j1uKN",
  "key43": "32VGXdwTG1GNqv21pCQHkWYhbUAa9AnSUCGvsK92meFEpj5xPwX1PooYVeqtd2ATpDN9K6cVGn2j8ZGk23fXCiJS",
  "key44": "3SJeUv4edZg3UrHGgS8pJg2NgLgT8JPxM8BdrvhP3H2i7uQEmi9tSzGiPpkxioPT9VPnhHd4WeRk2pmokyW8hYhR",
  "key45": "2XQu5wiuf1Q9FMJmTBfPMP4ihpkqK5AHXyUekwsWuarRcY8bDCSqkPuiT62FN2nHTqrE7d6LC3jh4AkPB8an5oMb",
  "key46": "5Btmy7SKqr1Zzvwycf7VvkjQszJLJeezLRoK8rrfADFD6ynVTfCCHQJHKzUPwtb3Fw438DftoCSBwsueb5u4oS3h",
  "key47": "55XCt9nSrGg67fdCus66yfQFhktW7XhzXwsBLQ2hccowBHp4kxikWGSyFmUsq4gFuXY1gpxnmnRQuhwK2Fd7fD3t",
  "key48": "3CbV9FXh2WCtDwyH5FRB4cHfocrPnXp88ww8SHgDZSRCY4tEkYBEz8bxNCe7a6wFHdwC13Tf1xbeHof3QGfYHL7R",
  "key49": "3v2Px629ycGoDdDEGP6EoBNamU1DHpqWVi7Z9M6RMb1keDjN5hfR9C8EZkGfCTquopRerec6HtNJvLwjctYkj8vt"
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
