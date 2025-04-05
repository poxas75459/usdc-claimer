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
    "5o1xfzdU2vE6ZbUkq1XdbVDBhiLqjzbuzr4qW9qrrjAvZHN2UMgmHqFCEpupzFSee3X4CPkL55cTsJjyA6hbUyPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ETgJECwahgcrvwT6oJJha3YyqRQDZF8n8jV2Y7JYD1RgioQWCYHZzWjZGT1hC1Jo1SK1J9FaYwMbPAMpmjLibZe",
  "key1": "BqAhaCve9VWibVZzQkqbDJ2vdzb2F51rBokKuBNQdop1vHtSysxcAviGRgdaARMGedHiF69RVyT5f796N2PsxBZ",
  "key2": "4PYsTaxbrhWYcnjFc5f1B1avXVMKZNnmSF22k97PmmLnpWVuU9MNGPe24jTQYecz2Apvd23j5WoRYJgcf4BQgr4q",
  "key3": "3AtwQhJc9TPCeuAVZUFxKqpHoG7yGbbALvWHM399eCGghTDvtCXKKvrMQsXG9xPm6wCnunHjACwHuwHJvSQARyPm",
  "key4": "2dSdNkUHNeBXc2fP4ptvCAaw3iqqtPPmmZ5rVR9gD6WK37x529ZV6WAfS3SYiRefNzQcTcbAebZ34tHnfSM1cEEL",
  "key5": "5ZtpSDbko1BXnFLZUtTgouNQ3UZkj6q8B4Lr3wYuH1iEW4293acagphMX6fRCkB7ijQeo7xBCEpUkQmupV8pUt2z",
  "key6": "3pX8jVPmMGPAXUspDsvB3pqBR7nEZfBZqJ8aj4W6bDEEscvppBSvYWyQPgygBjGUpRpowBxxnuS4JVYXk1qi6iw3",
  "key7": "YbMU5Ua5xdsoaZ4dsoLGo5m93fzvV3nUR3uXGSwVppMxS8P3YpoiGtMuUFe172um4uVHG6uKUfonQtFLPnrDqTz",
  "key8": "2NGH1Z5f2paJnzzj5GiaoXaVCkcZj8ySBtEJ7U6bJhm5K4ii9VtRXxAtfEdrh93PFW2NJBeWYqV7nKkCdRSuR2P2",
  "key9": "4zJbQWgK6uBgvLX232KjXYMGzYeJXSM6RD9qHibsMkhU6qhk1kPXgii36vX27XYDDbqGaWoKnfbBakQ8dp7tU9i6",
  "key10": "5VeVV5GSEHsgDVFUQUdBvU1aDau9U1SNKyEV26YriKCGwTK2yn5JxTKzgKBSrPvGqPV1KP8uUjcQx6R9tu2EQ8P6",
  "key11": "3jqy4viB6YanHhTAEHvgH1WbJKuaCDiX5q7QABdNiraJfFCFTieyKYPMjo6ArD5pBc5m7haiWgUmRoBdujUpGjU7",
  "key12": "P9r5bzYRknw1q2C6Ed2t9GXMY6FwSvzHqAzBnaLuD6rdPmnL6uqmjt5PcAj6dDY6gkNobkUKJ4QoRDDWZiyAVaD",
  "key13": "4WtkbKgwJkfLmsCQG4ieyrQaMEsk41xLkz2Axi8UGmEqcux9hesxnL9BkSwwsDUKW7c9CtZ9VURzddUQUTModYL",
  "key14": "2PGPouFCYxnZUsU5K2hR9cnxPSKz1N3jjANHhLsJSWi8T5xL8wPLkS5DAfA1ZA9MAUMkAx22tDJozPKKBgGpTYLz",
  "key15": "4CQ7ksj7JiGZySsqYKem8oPaLChkjiwiuHSoKb4gMY153WTXBnpxBUxvnvbyKvdYPxbzneZ9mjs59QSqr36pUkSX",
  "key16": "5YMHVy2sYLNtwuYyCLSVHYHocKY468nLQtdJ56J6ZUootJb6JzHK8NZHx1VbgY5C5HbvDYAe84ZuuB1DfTD22aGH",
  "key17": "4byRbHNhBb5PR6uaEDitK4gZWD7vVGkKveL1cpJbwrMibjTUgL7Ww7p2QSGEv8asvHZZ3Kvh1eLjvahmBKmrVJ1Y",
  "key18": "5jSjHP7qASmC9b5VJMn8xfVGZj4UvJoUPrCbFzW5EL1trMnNa2NEG89TFXGMbSuz1bSykAHLwq4Du7hrXq9XAs6S",
  "key19": "3iQpS3KbUpBkP2AUEotY6Mev18n9icAuKKyYNqKdPBrWtJ7bp9oWTgXUJE9tXavM5hLYwbvRYGZbEpfzxWdyojeW",
  "key20": "2j5awA2uMhT1i3F8nEH3TkDXwvvesgSFyFdE6Y1Vx1HPhRNo8ocoQPrVy2dcBuqo34MU1N6fZiiLPDkmfEvEJRvV",
  "key21": "RZCHmXqvZ8MW23LMvsmBr2ogdUSrnYd7WLY8U5jcfiAdaj5LJVhmBK8sRYSUDFeMdJPcpTgtRbVGVQpTuLYeNhi",
  "key22": "XPqKaotpDziY6rzLPUWzw9C4Hw2nt1yJ4n7scCTYQcKAr3LijXCvwSYdfgRL2vzzSZzUdd6PhqmYfya8S1PwJ2v",
  "key23": "5cecoFEPZTc3YWd9AC5nDDjv7QSEiCjmdGSxsPWdQ3mraWf5EWDPL9WPw3hTfGKjT4ihZoxSfJ1sq1Aci7HHJSQM",
  "key24": "2Z5reWZuQVhZqgLGdCHf6YARamuLWg8T7UwFEqemp2CkSAmkK4gjvGSGpYPQ8PKsADQopSuouWNgP9CJqdcPFcAn",
  "key25": "ayejgMFrNaD1284CdjXFQhcKYjwrFmixboK3dWZp8bQ5QWc4XxyH6W6FWdTKfm2XWku4pJGqZTaQUz8TwjEvUXB",
  "key26": "DwAVBVz6yQCQ113XmMjMNs87APZv982eQjBpQDCVsfLYdtY83BsQLj4DYtDSaWj6mujBc53a8MFvtWH6N1zdwbc",
  "key27": "33PouSM7WonUMn2QH7eXyzzeHz8iW9ZcznyTRycqVVHGPgLT97ZhSWHbmmeQhVNCfuGSCinJALKWDAbPaRQEBd1",
  "key28": "2fijQqeWgNk3Kf4DduQUUtjEdykfHBR8Bqku3KqNk6awvEEefP6LjTf3eyuZ43fDjPM5N18vaxB1RGYjQEKWvgMK",
  "key29": "5AK3oERCbp3J7w9PuGA1HpjiR73QBAgKBu4D7TXV9wEhzj2oBA4NiMK8VXcSKxspjHGeqzTpR8N74Zrv2U8MM7LJ",
  "key30": "4W1rNh5n3hZGHutb6z1n8DAU1fa7E97NqDGXVGreJsYkygmkPmJWKNkuYHN8VxAYaaUTGLT5wokxhq2zSZ7wRyd6",
  "key31": "32MSFs1P6keJivnwmmgpHM1CrVzLFas5YTvBTksAXXEqaPbhFu7gUeCdKfs7L78QJmyNBUWMZUuUybfXRp7E1ZDW",
  "key32": "5F8pNdBsjHbH8mmgTNMEomCUgNoRQ32uKPR6Lqzkjxho8pChH2sB5Dkq1GUBrBJCSQYdJ8sthVmiT5dxJxCPCqu9",
  "key33": "2X9ebwgc2qRbRgfPGnv4ygaF781UqypnMpj31P4CjPDgGPfktZQJ19jc7TG2VwPz9LcE3UnCH9mkRRD9HMWvuKZA",
  "key34": "6ZVEajoSGnTCRi5acnvrWLVydL5HM2mJLXLDQVzUj46Qx7zP2LcJsGrsMtvYSPcJiG4brGwsdM6wgwmS9zTEBHq",
  "key35": "5uJmcFpH67ezvHh2Z4PacaZn23TyRFwo7FLcTcy3qkmBc4VbESRKeX4qpLpQQwEfUqPG4oVtDPapjdn2VpzmnmsC",
  "key36": "Hs7Zoih26UwHLXvmeCRfz9VDJe6ed5NRBE29VQy7PpaSAdfoZ52Gw8DETEedghJZ4ngqPfa9myjBKXJoTAJHxAP",
  "key37": "429w3YQRsG6zqmTK7hKUZx9XNfSrnvRe4SkSByYdjuUi3gCiVeBmrUPgJn21SJVpfS95MxcrVmCg5YaSiZMYXxbX",
  "key38": "2etuymeT2PZQiJ3C9RLTS2pHs7rN9yC6vhmwvCNET19FPQKohZqXEaR6PF3upVUQ58khJ1wfGLWe9YesdqerhGHt",
  "key39": "5hZuZf17ryJC74JYb8AJuNCLmepPxBQc4WWUwZ6KYCrMkXKGVyQnmayWYrpiyZoLHcVWbERtepi3pnLZsTvmrNEW",
  "key40": "5ojhXDRQcaxVPPCR1Gen8oaPyfTDvzmx2FKFCUZKxLZwZ7yyRxcjYKq3isaGY1jgXQ98otyVUj6iAZgFompBMzkk",
  "key41": "fZjGYca4EGvxipfBdc9dei7Zss5HUWe7URLww26zQRrM78sZETUbEcKvupjXVJjzyjwSfWMoj1aiMstNHNSB1NZ",
  "key42": "3Rckd61Ax9z2RiTsvZrpK6m8VLwJGBmM5R9TyG7mACo7UkDPftKcfoegBGLJQoZY3RDZum3bfG4xSx5tuFY6KnF7",
  "key43": "5LotPqTgAm7j5p6RUNR3JoMCgqxsMm4G8RnnBhrb6jPNjZFAjCL33UmcP5RB1mWzUvenJ9qXo8Yos1BLNprM3ssY",
  "key44": "3p2JFUDDDpEnAEWUaPaoKgSGEq3wZLTUuPTZJ9RqgzRD16dVFipTf7n1oqNdSmRWe2p2eNmaMoPR7cRnpZyL5S47",
  "key45": "3YcVsACsB6C6ErJmvmtHU5dqhxdcMyQUHECbyafYz8HurkEbbVkhzevhPZjKkB7JFEqG9otmPGYvChaMTAV3PdyV",
  "key46": "fqnbvaVCopWiAbWU5XbTTCidZDW9AYfwfV8aZK1kNYHa7VQYa6AVhjA7fVbWDbzb2ff611XZfuoWjvsd74NQKt1",
  "key47": "4XfHAsh9brTY4TwaEqtSzCaNe9sxu5NKXzoQZ9BLEVUkkDApu8Ntspnye7GLiyfRnTugiPxZcLWYwfC7wrAFKYr3"
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
