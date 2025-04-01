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
    "67AvN9xpvHHYeJcYaFQq9eqRscikMyJ9CtMk6Lk7cFGqCLozGF5zJK7rheNXvX7hfRcGRAZxgiBwWF8ZT7xyJR23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4eTEEEEjVdbx2iYpkY8Axcu9XWF2wqQBiYfnnJmzdrWQ6bAyCuo5GmeDe5JDAY1Nno2PY5PT2XYSra5pMSk2SN",
  "key1": "471oME36sRCAVrmFcpNHYw6RL9CNacETdJWMU8eJKJ1X6WWxhSG7AruB4CyRWkSwJii3dAr321wqFVJx6Uts6MpB",
  "key2": "49bCHvzoXA5yc7szjsrSMyQVVSV82AJyG6YHUEcAL6urC8D49bQKRKNV6sJc6hXVzye3EbPAhqRTxGBZU3Vh3DVn",
  "key3": "2YADBvs7rkQGz7WpWgqqzkKCP1tvvRxN2FQ7YX5zfVaTozZFgcxxb556C8LYbXh8zgD1w5Dyr3taB9bmqBArANwL",
  "key4": "H81wkX6Wfk48zeusBoS1iQzhUdx8ESgtgDUh9TgPManXRbFhbGWNmFpFNwv9DqBE2v1MwaNxqTF79dZif2JY7Ti",
  "key5": "Bx2CvTgWA4N2vZNrJRd4LufRquwJJ4r6hLM4ETkS6s9fYRcE8Q9YkH5yhHPtuZKeYkntFteKwyM9jMywXnVW6Jr",
  "key6": "2ifJykYfYo28SEymtUtuoqwwuHG6sEASwNhxsQhD6Bp3puaDtYiZFznSSuReffczVPrvMijigKL276kx5YuV5tzU",
  "key7": "2yiGcFFpUd37xAogEy7Psm4cHbwB6qHFkLoTZLaaULe4HEs5q3UJvj5fCkecH4oFUrKadDhj3V1NSPkdfjXdVxEQ",
  "key8": "zn4ciUsQAa2sdZnxzPhPM95ecEcc9nAaxKqKmjiS5M8e3Qrcdu4fc2mcCrg4t3FRr6PxFTX6m5BZCop499wfRVo",
  "key9": "26Sxw66z8qmYeXsN9gsrhsG63mpd6RaNXY6MaNBBGm7ybyS4EggWbYdhdxnBXuTK8Di3ud5ppH1DHCp5X29wYuHR",
  "key10": "2PALCkVr251DAxhRVzU4PKoS1RCTfmYjnVqfz1HTaodMKmdPMYgEeYXK3tcenQgDij5ppAvsVQ6sNeYoXHF38hCk",
  "key11": "5Tizm7ErWwnB5PPfNCWNj9WG9pwyYavdx5U9pMymxEaYq5nYAra5yVwG7JW3zuVoaioqp6GKysTNeiSX8sGL2Q3S",
  "key12": "38wpknbr8MVmCLS2aWn14RcwRGU7qyCu6SdfLGCvJDr8x7R92ACDF4xRsPH3uiX5KWCiNe2cBzwYYJZTFjw9PyXj",
  "key13": "2i22h4YWH47QDgssyMLS8LDtVN5x7VJRMDbv18o278aUWsSMf99eq8it3AfeCELpYYxboUr5Pvt3ZiG9NiZ7SK5U",
  "key14": "42ycguSr6JsxpweVdg5Q5bHVbeByzLhuek9ZQbNQsHfZG6ZaHk1fHHedEYkqY7qeuBscixPU4i69H7ujw1PmhYEw",
  "key15": "HeNahqffP9YXYTRBNL9NudcGpoZUYKs8twwbWXnynYzjGsRoPF4RsXbYFRf6trKojgdWN2NmzTbuNTq5efz9gjz",
  "key16": "5da8ktZXKrauB9KsHBnrm6euxBXmZE1UucGCK9QBt5bHdtHKVpF3QJ68VZgDNukowZtfpmNeAZmHMeu45nNzw5Rt",
  "key17": "3tXL1vCXuer87NCTo6LPE6sCbGWqEqhcBhGQHQ2SyFeNWELPvaGMVJZiXuzcGnMF2Qf8JGY4aQqKJLEaxhFjoSX9",
  "key18": "252vpUWuGBV8d6pAfModoFHTXLVnNLSpBczLu2NHn7q1H5LskbPDZ8jr9JprQqcjMRzJTJD9SrrbyNno9nHg424L",
  "key19": "5EfvWwbz7xoVBQGBjjR7KB4WyFVPvCgywAqqf8EUatRywoPPWrwrMUe7dXcGzRuGX33QcuAw1Y1owUB8J4XotmH8",
  "key20": "2198zvHvdUXAm4aGftBp289ESiMbDT83dC17ck2gb3WaVzLXSukYDMgabunnUKhf7UKKcVFWuwNuTfqh3d3Le3vR",
  "key21": "3jkZ9Yrtqpo2eSEv3omvcxdSv1jLrKEbvgnk1MKmbn1WZ9E85jb7QcJoPSn71Z97UB9eMgw6iJWBzVMMfrKdZnma",
  "key22": "3RvxFHCPrPvKTSEswa4M99nst8MRVb42gvApczS4hB28wCyieRbqgy6BWxEVnKobZL1WuWXDNCZhBhgw3D3AgHG1",
  "key23": "BVZ2MoBvbfafCLvJmshK1zBaKy8MyVMXsSieGk3Budr9iymTfXR1qoVqDMUrmALusLcq1UBPqdYccwwuXGBXxXh",
  "key24": "2YVuK1PGkjbjVvwfGah1tE1NLK44YXjjHFa2Xd9okGo6aDg3c9tVdg7XQ2bZaNEDK984xZYfUHoJCeaPcqJjTrD2",
  "key25": "XR5HogG1TaiiYNA7Rcc91hfjCPvx8aBB5nSf9aNpSN4KvnPsYCkjgRhArFSfYiLqAF9LompxLRP5QLYBKJYWjS6",
  "key26": "4cXUVrhNtr7J67BmRjdEF9U8TNgmSDJqzhBW4VZsNxDDrHKN3pM7c2b7kf4W2gKrYRkMKeaA67wqJywLrgr9Wg9u",
  "key27": "5Yg3c3mP5n1NBWxHgyXZgKN4L9UmnBRAKFkVfqiRc7U3u39xMXbmv6ewxiE8srDZShkQXVwVJYDASEFRFe3Cq5RT",
  "key28": "3YvhVUYU6rVZdcn8F9qxRAVmTnWho3gYFnvSPQekZGdAAa2czfzFpnMbQJwatR2x11CkuxjL8hhDiY6QL1HZ8Eu2",
  "key29": "4QuQrW6KKrWX8ZiKc424nNC5pKb7g2GNdgyg47YrDYCo55oVuFrcmpz7Zeeq5xy24xWSuQ33vWcjyUhXzuEcUJH7",
  "key30": "CTHrpz8PaARKZHZATa9y8tSgHbZmWnopfVkDepFooFXuXKBadkxe5xybukYeLnUxcLnystgwnkfj6Ev6N1G2ohi",
  "key31": "2QAqrM39Bu444X7MXbob9ECLWJ718N8rjZnnxjy9tAN4GhYZ5f3EFb9xwZjFeTP2eNQzviHoiAfLE2wF1JADpd3p",
  "key32": "2uVifzk7bMAAi2oM3fkovgYRxuuxohpDWzLN9XhHuAbhAvoD7bDAAagTdmHxnNMZ8vjFX1Cg9vEUjacvh3KNp63j",
  "key33": "33n7hRufKuPmhUpTn7ghMkRUzmJCRTU6aveimxb3yfBQCZTRzqd2SgHfye5y4AhVZ2iY8kKc16zAgSKHzaEdGFjd",
  "key34": "2opfR4EPHYmmZJbTEkCGwpx7tRfzuMA3gCDiCdHzT7KUu5JuhQyb6ZLcLn13kjs2ipAHeyQqdwVjqYsnG1z3n3Hn",
  "key35": "4asFavPDT6PdAu2LGh1T2DQgCdDUN7R9S2kUKxCBDPWuSGLTph5iWDqCifSVtQmZn2KGFYqN3JUBtRz5EBcPCqvh",
  "key36": "3p9dtDDpzFaBbzNmGA86JK11y7Ni2cRS4MYHX5zJJHHeM7nrrPcWi8QMdWRJJ1Wto3i8LpG6EVHWxbn6V4TCFKzZ",
  "key37": "5PZcNj3W7VDvkDZBSMmQ5rNdniFvbfBJ9uU2GcR9zHnJ6hsoVn35Hroqy6h9cSuZ4b3RRPsmkaTnZ73YTG85PnD1",
  "key38": "2HSjpoNt1xUVgvrwuGjtybAmnkyoXv3kLDSMTB76ANaicX5as3SPErKKsQtgr9NNUnYrzwfzNW9aR5bZiP5ZqpTp",
  "key39": "2cLcKYskCYG7icn4tmGU2eQbEERkeQ1CqVmXvGphWRGh3JgkzVst5MTJeJELBnHMcPea7txczP4ZfSspzZ3fxzXz",
  "key40": "5xsP8UQo44E1cTAMShJRmHjAX1pDRL3vh6gZRscr6kn3iEW58d3R78JiCkKqqUxdWbaDqeaNRnD6gAfyBFg7mNRt",
  "key41": "oUhqrUKG4AwSkXyVJA4ydiSK2VKvsH5GoA8tuzAvf8s45ip3Zmy4buqyRokiBbpbWaTmXiFCgazoTarGqtpfNHz",
  "key42": "4sQTvwPzUMcvaDLBW6FnHrjPmYk2Dm4a4g1eZBujc1vSGRkXAuLTmnhRojyLwd45dy8RAWL6CXMBwnyQPj758Zdc",
  "key43": "3jmDCEmWBhSMmR8H1n6Geq4hMWBxSyVHhUcKXaHmA44NkQ9cxFDUNKyDDBGR2Qc7HjcEyndZNyFVx34YJtAzc3st",
  "key44": "dy8KqTJ2sWwQrzzj59pCPkPk7J2vFj4jsK1TgocGbAew2ZKtChiG5emY3jxKFW2pPV9K3d8Z6VDdWnSTHfeR9be",
  "key45": "pSSxm7qJDFvkQPi8wYyLXEXXaUhXLW41F5Y15nhFYAnghes2GFi6gydSXw3S899n9EBMASETLDg7MP1aHQfa4oZ",
  "key46": "GZ7P3WraNi1fpaxw7Githw19QjRNM9Doxje6Bf4ZZ5n6Fwts9vpt67K6yr6L5aTp7mhqz3UqtM2L88Eq18YEZcf",
  "key47": "yJUmHLV8rDK1hfKQPG2BmuSSHVubWBqmFdgtwqSoCYQeUpvd23mdqnhHzXMXzkikis6VktWusmutjUj3TqXTKYR",
  "key48": "Poi6bNJs78zYZNBpPHXWeMwngrWWQyy5pPffX7QhnaDujiCvJp4EnSg2j2SayuvSJbGnbgty3M7VZuETP1ntrNw"
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
