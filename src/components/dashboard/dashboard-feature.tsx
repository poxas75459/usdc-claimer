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
    "EPJmQC4wWNSSCNcG9gQGt1aKPYKWwp6NvrkSEQyR1ykj5SE7s24M9fLMmReZQUUxtU9XpzAwAma6o8s7ciECG9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yD7J7pxHaCLtaFQrjLU6dnLjSfsSVvR4QXhAJYbxCpCfWu6PEWAvWTGbz3PtrW6imuTqdX4AJ5tRpKSh8uZvohq",
  "key1": "4dunrQDG9rv8QyLadZsQT4gDphuAcCwswE86PGdEMeUEuScDstuiGD6gey7ovw1Cvyj6Zfdr9rckuMxmY6JsBeWk",
  "key2": "5aeh63CEDDQLjZRvu2XWp5DHtfNZJsY1QPPySPY5cLdvefAb1G1zmEivchdCUNW7Ds9dDGjGoTsz8mgVot6fkpWD",
  "key3": "x2gL5YNrUpgsjzDW2rDDHqFb8hTzhgfAhxQDBJr84trKXx8jcXdpNvJUmdfQ1dVfE5P4JZFkUNbNVeKvgj5cKAu",
  "key4": "4L5K2gARK9x1cBpD9ZKaX3DFWMiadtiVzsAWBVB4ygWYKh7qcyYsThSPM8EnJ8bseimCZjn1xs9qJtt7QM7iB9Co",
  "key5": "468H88eN9jEp1grKc7PmZAQswHQUxvHtHT5hCz2LBsGLGdK533bY1FMywZ3V2CuNAdAagfM5sv3tnNJ1tcYerPhj",
  "key6": "D83AEa9sEuXQTK4mVCLc8tySSBd6TqKi3j3ucsLH8PeFifNaxJvNDVmQ8rFG4eqKoC2qM9LSigHmx1TyDfx5xyS",
  "key7": "4Em5WUeCnS6Leh9sGJSgs2NX1m42GVF3fPFxtoLrMyTCp4MtHe1oe7wPnZrv5Forh7wu4PZAreFQP9cdCQshJ4Ra",
  "key8": "fUvbqEwQEBhRjvdmM16Su6M655v7smXCWS2sKnGzXUWL7GL1Tiu3rg58wL4AmEp1Z8bMioS5mkwLzGnnssVGXWw",
  "key9": "31hKnujRYwwib4jamLwu5fRNH3Tm12VCg8rAXVPBWvU7tfVKBB2tjuTgG1j6aF9ByjokCHLUZV9j5iz8wak9ggYd",
  "key10": "3ENkHk7B9rgxvjk9xbuLA3Mv8gPDqvMF2o4jBaaMyQypiKoc4j7eMZa8qfzdL5yfto3texFnrbfD3CbFVzWQQLRQ",
  "key11": "5r7kQyA1m3edQdYQS5zVuDeSu5uuD2h7TczztEHWiarFZWDPpBvbNsSXQKHR3Kxc6Ldqr6cHtBAxK4gwZftLKpdq",
  "key12": "5o22wTGgzj1dbfDKW3ChJmM2FG7QBsQqii5taN4XbBogdx13Vte5KPoyVCmuq7ssFdTHAqU9v7jp2nQzQLisH5Q6",
  "key13": "2NtpZbU2GRaCyRbrxqbNLn6F2F5Nz6esUTJU3VgjuMetfST1RyqkCmXxZBMxiZqyw1ujGYFYk21y422bdtj5aC7y",
  "key14": "5a1PwLJnKygyNSnp4ist38g2DHdyFUSJtJoyW3nYfrLc3iqAyqmuQCCMrX617UE7uWFqq6Vqe7rWdRJK6VKGQam2",
  "key15": "5VHE3qkunKnmU13tSGAyK9VCz77NPw6JGzeGnHLpmoDuTXBxteMUqKQXLiMfdE3caiurzGVZSat33aUBx7Kh8GdA",
  "key16": "4aZZKiFxW6ySmr9KdEfaN44K5riGKAQR2WcK3maptRivVcab5wHXT9FN9s8eQEAV2rCoyXWATgxaspBFAnLvrNYn",
  "key17": "5mxmjijgZeW4dXgULyMsgF2ud18ffY2TAL71NhJr4atGQxD6XfGjrNSRqvmVKrYUEPWU9WmDcfabDTnaEteTXrh4",
  "key18": "5onxPnPsGKisqHy9bM3GkFDyG5ppcYoMDHkgpkVXT7ow6NW3Tdn2qEUhb6rhTLRp5gb8ou4dzEvgJmUrWYdvLe7W",
  "key19": "2V142QuecRHzzrTZjU3UoNg8zDejXBKsNCQuQWyZbyBBB8cgZnGYkN7hVEQ4SRKEdKg5kqsE5oruzy177o1Cd786",
  "key20": "4LT12hqzZEDzCvyxqyxUNDeqmjd39eHiNNix47JbfQvF1SnXjYPnAHLLkGij57CmyYwWvUyKT3ehWRDjFT4WvEpb",
  "key21": "39KqDJP1byngaxw4b2R1iCXwZGYL3sqhQh93cJZBLZhBa4YfidEZcjVVcP4mWjfqMFFumjm6SmHcDi9fo4cQXXrj",
  "key22": "5WYNd4HVVaW1GBZDBnYAjHs7Egn9KnesP4FKiZKhLr22UQvUwCNicsY33Rft3DvvkYE5WtJgygbFF1dBUStVVjBX",
  "key23": "5WuLN8JCo2aPJKdAi4XVArjJ7292yDWmijWPYnKWaN1KW5pHytRuoo8qbPZZrtTHs1H4qoNFwNmmGkvGFzZvBWjK",
  "key24": "oKYUCfvWC2N9gTeUMgjSKcWcSVL6KFr8AV9gVDRVgBhwyo7ag1f2CE5zWC5aoTMVgWMMpUedpHgThyUUaU5GVqc",
  "key25": "4sT9LNFCaJazLrPpvcHtFLpuAMviBa6MBoGgGtKiPozZbAFVKLhZc6sKtrbMjunXLzqHzoPKUk1zdZJ6UbsfGUwh",
  "key26": "5QygTeRXTeQqGQ6G1vQUppLi6FP4MUJCNFkRzXjk8nBahxBvozYFP6pbDLsdjQ4ZzPtwKarSmePyoijR42RTVzs8",
  "key27": "5vTyiwWG3PNs52oyGPDG7cBxbJ8rGVdu4PPAHdBPWf1JXxz3R25Kt571rzj2LMEbqXWVvmkri7ZhsvnR5bPtty2Y",
  "key28": "4Zibq1ManUR2XSQ4R28fVRGdHbSwVemQxg9FT6a5QmUetvcJPxsd2BtHvbzWyNxEQYRW4HKPuiy3erysJgdqEcz1",
  "key29": "2XG8Uc3v26UzHTpZpBUJK2BWuMssPZTVJP1396xJyjzxLiuLaM1eRRdB6zvno7r3Ki2ReofrHUwPs8pVcnyZApVv",
  "key30": "4cVBQqyLypADDhL7X9ndtMJeNH3jFcrnfHqeLG5Autqnwr5Ehs7nr4Sshm1G289aBRvn2D41h2fmedEx4c8wBhx6",
  "key31": "54ShruKQ2pwtX6vokuzzMhpHoyKVfAn5Cnstem8XFEtaQX9CXQ9DHw6gk7ZMhMzpk97zwdmztgZ6yN8Z24Qj7Nve",
  "key32": "kTkQVNvP9pcac8oU1SnnyakJWiYQ8ZabcxSJWERZp2nw6nsFUjaUfRpawNG5xkdLdW7jnskGM8srZ3VXKiG3G3K",
  "key33": "4PyXBciy2re77RPYVwvp7Mn7hBy7c3P7UCT29h6NPqDjvfnRGKxCKSSGyCo443dyQhJomBkU3r2H1VhJeNrXhxQD",
  "key34": "65N5pT4AdSsjVxWcNrN6R4JTU4S6uzAVXtxKzJEgDD43jU5xDMfGaBZyrBZfRWAPGgxUDLnEaHoX1H8Xv6iKk51v",
  "key35": "3mNqqtCzUvWPjfLttt2zv4M4pD2Sz4pCJ4q8UmEr1t1Tj33SKpWLmKmgTRXMZ9qvWerFMDpfE8BAFZybsmt1LC18",
  "key36": "3jWhZzv33pnQ6argYHae7uMV2VJwTMPmc38MpPMxKmkRFJFKqQ1yJXZ4ain1PXgshX5wfnkPDtdzgVqbF1Rk1QPe",
  "key37": "2dY7RrPVX3PsvFjqrF38G3kr9REhEYAqh8pbowfUNHZBgrdUgxydZtrJfiWceGqZZE5HyuTkCJyKLSPqKtRgomFN"
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
