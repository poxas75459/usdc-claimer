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
    "3wpzP2SE9TK9d4wzjG7s6DkSdEk7Z7VJEDUNYWzRTE2JYbVacheBjPXxgS65DjFt198yCQmXjTJrt6RXG6EPXZFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZMBUvq6wdgMY5ZfCoBn5y4vtDNbs8YjfVAbMZ3XvZWxabJENBh2YjzqK45FG2bHgs7sVdT1HKPdKGoxUy9Bzcah",
  "key1": "2ufHXFTCjVzUGBg7mbAQF4TkXQuTRLqhX5rRBEtyGm4opPY7aKs1xGbHzFNrSo9pRytX3piXR4SJ6ekXzhUufzPE",
  "key2": "3tPhjSAHNjWMVvYnDseiBVeWuoohnaWTYCnvDBKTfDND5j82F6xVD4ZLCGqBKNLcidAGfZpowKW8r8VpX63hi1M8",
  "key3": "4e3t4oMbNb3R6NP7TTA6HeyjjNLgnvobZ1c81LL7kvDm3MVsR967TDMonyPGXSbEbFd5x9xVhmcdw8iCsc3NaJYT",
  "key4": "t4m586LprE24G3sKF73tWFcFni2SE1ARKogqHNaNpfHcDmFff3CEjpyFQXwi16kSSa9tVPnaPU9W9VRKXPuSF3z",
  "key5": "2551CTmvtvfJ3DUopxEYK8bSmsW5L9pVEpFEBbco5Ug8u9jqWCQoXqHbaYLF15is3MX6Y9iy882hXGXDw5LJGgCR",
  "key6": "2u2m233uq1dLgUL3nKk5kTXGU1pVuvs3RqVqgpqAefk3QXsuZvNgergCtH8wYJ7WecfWUf18Kn78eENWNH5RBLmo",
  "key7": "2U3h87Eff4p8P2CRAEoLppCHtmfWoaeAHxfgYTuYWyFz4wPKh575c78AgeGngVBsautAbEVaARs9wkFK1ocjN8ye",
  "key8": "3Q53wx8VntDdUf7ARcvDSaZWXbuuhZUMNPw4uAUyUiD3yvwj9aZFAq9wWLpdUinJ3mrzuu7bUtMNGaQVqnWXwd8a",
  "key9": "LFZLZLeSrA3km2HD6qUUGgndvEDmW4ZGmkPyw1Vx1c3ZDykyUPk9T2vfwZJUDzadBRpU3n32G5awtZijBtUs5xC",
  "key10": "5XurjkD46EQAGkmxaznGY3er9h4FKX46aZv7vb4dDL4Yz2Bg8Qp9x3betF8LFsJSAsAz46iUauzifbT3hTRxseuW",
  "key11": "2w9FobRXFi158TTfsh6CQeN4Xk2qhttbrHcmeai38ceoE4mVgcNQ7AAzvn8AiSKQX3AMa7nFGjgRY5jj7yDzZg3N",
  "key12": "2DyHHB6MdR4Sk3PSjx281EwNqWy5qTn1cECifj4DmkRLwcL8UpbiLvzXHLyFk3YxhBKcnj4Qh5PRTEouf3Vnxyje",
  "key13": "5W3VjnFFGoVPcvEJyp7joBGcN798ucRFaMZ1TKwsafctzX8edDuFNaKx4Fiubt83ihvvFYCx3TdFzBpaLh3XaaVU",
  "key14": "5rYautdAExJFBFZQX4nGLC78RfBawfThFUhPiUu6xDELxoLBtcWbNmyZb8BaTBCmBBYvZgbnYbJYKqsm72584FTL",
  "key15": "23mUmPbxfdWopuGiKo5peeM5EMHZ5PxtrFBeLiDjCyJgGHmdfxQwUH4NfhRmtrQshaKT1ajjtxqvm5VBQJn8Zbkr",
  "key16": "34rkySUBwLoWdf9jLBPnY845DqwNz1Di4RPF1tuBfc4bvjMUuyh5CBZDPst94efGLLZoWXFxMnYXJKXnux76WhPA",
  "key17": "2ucAqH3Aw68EHHBNzgwQNZemFJUcjdUE8KFSPq4Mq8ZXe42TMeyy58Ruz7rTaRfqPPHYDHLdcS6zQaRTWhFTrwzo",
  "key18": "58WUHVzELFUbxvmpscYzESMF3swPicGMEos2eYtF6jKY6JTGjGH2Di8xm7GKGho7GMRcZLpM271u9PscyqRETLMF",
  "key19": "5ZcK3EuFc7yQvZ5SsnrYtcmq2257uLVRZeYAvYSuNwUuTEbkLh6SKK5CsDPJ8rRhfjvoQisKnKDNzh6mvbDtTv9x",
  "key20": "bopURWyUoNwATKAP9UacJRg6FeACvhzDjenF3CFMdqgtrYJJi3CZxQK9hXoLrepCoAcF1dFTkST9jMqZ4UsGCHv",
  "key21": "hukW3Uq3ynz1bNPQH6VswPEVE1sFFsR1PwyBXVJL781gRviCJutnRse9Gis6aAWdzPMLKiCGsgAq7rkAetZbh5L",
  "key22": "4yatWzErcBPNVopzov5WbZDGU7DZnXgfGnTAJJm5A4XXWvRv5sxzqYbqdEkKAEQXcexJWPb1PYFeBZN53F2Lh7Mw",
  "key23": "2dN55tvyCAgZdTDU5RwVPPkLunq2fAQwaPTD13rPAs18rc8RVsg9iobtCv3VbammQ6uqcLWP3vnhZnxczZRxJ7mM",
  "key24": "QXEAjEQuNdtiWUA5U3i3n71ke7rHRudG6GRQ8N5t94e4FBd2APNzKHU8vAVdFgMct4VKJdwdn3DMKpqySDuMJW2",
  "key25": "RSkBc3hiB7jHBnpDM9BACtjWNWoxVE8yxkw9xxMUghUZLERzK11vPmrink2gEpEtQ9Y5aXTg4eQRPfBxB7dKth8",
  "key26": "ofCQoWedBASYa7gkMb6KTLEicHscmkQBNhtFJDtYnjLembP6HWQjBA3XSGNPfL2FtWmEkqfGFJD6Hkgr5VBZTMx",
  "key27": "2ACmY4b8VKDrNXPsHt8UrLosxuhCGNB9aP6RwiJbcGPnVgZJL1kpej5YBnbh5ZBVGxuh5WQ2w3fiZT3AjCU66wQy",
  "key28": "3yWzQsGdfuqMBmi6bXjWkJR5zQDJron1CaUb9PrPnRgRUtwFT32eFcBR3ase75DoMz1WSLwwNjR93AMrmYHq61fG",
  "key29": "25d8DjEnQChfSqERrVLYMtVGypxoNeoSbALtwP4dZ1kiu67Ca1oUKV5xttXaqjYU4Zg22TMVQi4jKGGGXNspGtoo",
  "key30": "5XqpnWk29cZVUHgqjtTrEjk55QmZe3WrbXLfJSNfqeLYDwYX7UnBEQyAYypiUP1HnbKmfY5roZ2LZQW1QwiLFPq6",
  "key31": "4Z9vzVwKZmkWsdXLM7VTEsKFwEsKWmNaFWBcYfDWdrDDoWp8jzYaJCe7JG8RRpX6Zr6LsvdTEkpdRWvPcqJcTFyE",
  "key32": "2csPnhi7mw6PbnxpAYfJYg3GAxj2uuFCt2znzq3Hzuvcxgqt3CoMcusnA91NaV7A2riGvxuE6nrLoHpEFcj7UvvU",
  "key33": "3oBRk7VQptBFASampGM9hSGBaFptmmEbtoV6BTtEFw1b4prYpjwH6EQXxttcuRarakzMzKFVChki4FhdEwiXAico",
  "key34": "4qsJA1TMFVP92GKePHYaunEQvHkheLoMp4peWveu6LBscbaQEK7pavM138hfpbk22TT6ZBeigNz3CNSxdPjHxYeQ",
  "key35": "34fJjhig4emH3XWjbzBRV31zDfqxqH4sUYARVyaHidFWfR1E5m4j6QNoXXxvA3DqNQJcJcfes4osWKaqhFcuDzmR",
  "key36": "5UxBRFZoKrx8xciiHtZo7ZTdNDLG8qTZc3unSD5sNkfrAXmp7Gmd4QQTLbf8YzENtoQWpTVpRwtwNBuvxhZFYKZJ",
  "key37": "4jZGPVzCwznh1LJA7d7nbGPVD3XF5vamCkXo324N2JsHeXpsv9f8g56iajcZGZgKue7dERE16J1hm69UaSF5KZkZ",
  "key38": "4ebXijUD9Fokd7Rp5r5JZvP74RRsCAEDtTADieE5GVu6KYqQWv7eQJhHpTjVsNxT5mVFXYpJBR7LRV9MyqnStACi",
  "key39": "3uqWAoUifhzU3BEzby7ifbwnvQYL7ivWiy4p2dY5MuPaP3G1SXDfTavUPH1fDghyaEqrqTDQ5rHNzT68rCnHHHEe",
  "key40": "Px1sVrg5mLDiBHDe2bVZry3vNFCvp9Y9EMAJTXU38e5uWemSvnPpZKDrPM79c6g3yN6EmWtRcei9XiTr2f9QnKq",
  "key41": "6tVEBVQz5PCMDVNRJRjxiUSzEgKgFai1ntEZMRZmvNPpAWpzcpBxdPHck4GwNeKSPzhcZ8fpGWhJPxgpharWegs",
  "key42": "G85EYbdMRoHHbXAwYaD2Lkdx6o2zgm51cebpFJvSgc1XECMv3dyNr43Eppy78y4tnzfmi5VeizZ6wqcEvyRTWs2",
  "key43": "4SatZXjzR87HqA965ahtSafawvAPYhCZdAhuq6T1sVvDyZUcVBtS4SJSqGsythoGZgBy7q9qRgdvYYduXcrxqj9x",
  "key44": "3JtSsi75GcfPtgWwrWWNBe7bTantHH6xeFQp9n8WngnjMy7Z1JxM9juC9ragQoX5UVTfmbFqcsuLzVFLXGXincxJ",
  "key45": "3M4hfRwawF6H1KCfazMxrRCrPDjvX1wVoRx1Sw7Ags5jdi58FRPNQxBHTdzw3cgB4TjsjdNaXasnfBSxe9e7a1Dt"
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
