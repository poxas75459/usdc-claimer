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
    "5zS9383TgUVnZAcM5PmLYpnaiGYo9b4vrJtALRR2NV6qtHnzsYr15YxeBep3uEsXVuY5QY9VVr3C2NLkyrHTLZEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMZBfDTVupA5EpXEPR1CzPF3DTXn3wAvY813WwCniePQQPaYM4tWyPFRwRHggTAPfTt1EPyPW4KEyNzMCrKAwWu",
  "key1": "Lb11qkEegDJgqCSJnrbTkdEyAKRJLVBvTAZuwgG8dijvCiRjmYWzNDyX42iTGLKQ5xJHM7YkhTCqamx9v693tS8",
  "key2": "3RoUc65Sk6APsjuED8GbRyDeAdu48RHhq4UT1k48qXaec8nbc6iPVmDKx8kyP6bjdKzCVJMoBQoVkmSyq3yeyN61",
  "key3": "2fhYKyjXyKYUy6Ce16ZWfnJTt129gzzwmMaJ5JnShXneG8QmrYG5xmg18W1WT9YsFhmuazNGwH8cRE3czeTMy8Kh",
  "key4": "5UyN384uoPMDBkEHfYzhdcohnMNesi2qeiVwStcPrBDGk84qf91EyNbTpFSfGmGbUaZnDxYkTPgAaFA5NQRiuUmk",
  "key5": "2vBf83kEWgBVRDDSFuSaWs6irKVPAVsvkSvWivGbvZFHyy2oaX9g3A2EDACcMyUiSqxXHi2wDEyMHeurqLsSqbEZ",
  "key6": "3UPvqmnSgNSvPVw1FaXG6hNDi4Nu86umBF8srGmXzyyZeScVnaJUgjNg7o2RHAWAo2ALfDAWy5fLuXWRnaKKFa1H",
  "key7": "tYHXmCSo2tpFW9y49GyyMR6hiMELwQJyY8arAd1GnbrwKPpnJGuETHLi5Brdjj96apUnrJ2DQwccVje77GRuG7f",
  "key8": "5K7TEPgymHQ7rnQD2pm3Vj8cks1ZWWjDn1pDErjeMTvU48tddiws75dRUWGEso2tjyEYBQyxGmBb78rkC3tTHeBE",
  "key9": "GFafqbVJ3WbeefCJXjHP1YsCKrcjWwXgN3RUVAvfJckNo7p6KzCwCm3zyHEL2YLKYxGf3reTdNeyDh1S5A1okKu",
  "key10": "4EejCeuB4qsd8m2nQLej6jELZxL9qJDoaXUzpKZVwbbxbLjgeEqV6cCVHKjvDR44itXVjbYLQxNDzEDwY6xRSB3p",
  "key11": "4eBVFJqmrPjx131ikHQd23sABfAAMaUvsUcWbiJBMLX6HwH8BNmtGa97tsbdDTgJ4jaQCpTWREr5EQxMKjnZVosR",
  "key12": "38zBx3z7RwRjb2e1a29imnairTm9foqYD8SJfjdbodiMQivrU5VtBbF43x8Qevu6hrW1yPpmYXzM8uGBXw48nxFf",
  "key13": "447EUWnovEskFSG1jopmDfohCy2cmxtrn3Vj6nDytURStyUpgFmKRLv7QsYLhqk8QF86x1VLL7WwwGEpwcz52VFC",
  "key14": "2pqnukgqa8yLcSxdqbg7pwhbuKqww9n2edtE1QzBaywwVCNNQk3iR1VeURHzUWn93BwbhvFfmpgci2mb4DZKSYLv",
  "key15": "jwT3MFt31YnzGtJg5EaMYJCgLKxHgfSf3wPcmyhk2G1Ez2MJtZ72xBbk8C7XE3jzErinh57KdBX1DWo637kmu4L",
  "key16": "4oEYUuouxcQt8gA1Tex5EjitRcRaXss2nLjZ3ok6D5AiLML7kxjBha7Pb322LgdJX61TETpFM8E8oCpZUQkQP58S",
  "key17": "451Ka88BvsJaxxAgNZjwCnj8j82k9Gjjesoy9BdfLhAnqegh1wxkHGoHBGmpwKqEHXonjTkBztwYWWZybLz5RAhs",
  "key18": "3Ba7HJc6M2vxn4d2S3zPLaZVxvxvwZEXjVMjZQMDYN97R3TXzgB7YRMZBUkPBTpCswQBV1SfifmZxbUUqvc82y2N",
  "key19": "4rhKUpXSf3Aqka6Uf8JK5CVES1ghrhaNSgZmNoscc4kvjQQQ4s6M9VnyiqvRB4JSmE9eBfwMUSPPWBbAvFZZVLEH",
  "key20": "fujaUEa1cW2MK86NFAhbVYWLaU9nAtwxCtwwb4N74N8Kyd7Dx7XYBGM2ULDXjmj7vCw74jvgBp8MKuhDE1JyKWi",
  "key21": "3BmmpZnqoDQrqeD8xYsVRrZy6XkA2B9e7Yqc4rVpQZE6yQM3SThBbpNJuoSNepTeF3ecqPpPUhKKLSpM3kFbXGdP",
  "key22": "HQGwRZpuQmV1GiB3NUXCjuU7G5HYSMjkPVa3gEbKQPz4CLUQw3vH9LQoPdq1kRnMW3gPFrFPFSLyreFo4wg9WkR",
  "key23": "3Y1LhBtKmY9MybzvVDFKfTN8cApmq7aRVVN1nxKTqUKxeBijueK3p1p39VNXzk3ygYyRn3WYuRfdhCSTnN33UMuh",
  "key24": "2XJxsiJ7Y1ybioeUYnBQQWopzZtaDqoQjgV2WmCziMaokGLT8sB9cJLigQJ3seVPmdfTbcPfR57oMN7JYMEFNYu",
  "key25": "38uWRrn4BA2WynhWGtFmoeGzjSqcse5vMwk8JGa8Ft5ne5hCWLKzMcQRbhQQAUEzy3TiVJcNpUH65P5ZoHVhTDKc",
  "key26": "4osfYnASzMuBhBU3ndt4M5jAazY2pEbubS77hfWTF7iSUfuv1aPwnzdw7qVhhPYj1F2Ek9zbZ3a4Dm4UEDgsNy94",
  "key27": "okjbRPcWB5sF1QYusnvKgLPcjBpjzQ7TNFNC7uBLiqc4g28sf4jy3dQHswaamMZUtBSU8GuwK1Z3UuLQm8zXwKx",
  "key28": "3W3sYud2p7cJw3xgT21WwFPAnWConRPW2J9zvixCnLUdHeSiFfyJx8DndqjTnEnisyEXzWRvoJvtQCgnTuEmYJtM",
  "key29": "4Zz4y1G6ygoCu2kDnm2RtdphJQzWWiCiCi5rXgMMxW7PECXm4m8Y5QuphH3CK2TL3fd8Vx8bTCH4HZFZ4CMy5kbX",
  "key30": "eHwTC5QReQP8a7wZa8jWxVveykifVYohs6ok4yNpKQYXKc6DkW75G6dGL9sUWwV856cDTTXFcvJDmsWWT5vSSMc",
  "key31": "2yb7a5FqC594Jc1Wbh6EVARW6H6vA7UR4FH3QD8JyhhrKgf28MzDNTHSGsnkzCwCazBvKqGFZmTw8ZnuBaP38WzH",
  "key32": "2B7gQ41eacxf4r9kTFuDoHD3e8UjuXqjp5nCSThu6WFubLi1a3z5kKZ7JeE7eTJJGUWWf69jgAo4sucYWVfP5sVc",
  "key33": "s4WqiP5s5NLtmkUcdsnjHaoVXxNFBe2GqxqWvwPmM2cGw9E2TH5JKKKBfHNFytXBynsSfD9PDfAcFkZZ3MNoPAf",
  "key34": "4r8tiBL94p9a72jARvWLcZuzrcC7wGAvaRz5izmzfQzppgiA5xVDnGP474ijD2CKTDBHVVojxcpZ6VqU5HCMnr36",
  "key35": "5wNssng6bnC1rvBMuUpcQF8rRzyveR7rF68m4KAizHRVyxavpVAgz9hCsS9n1VJpUsPC5icVWBtToEkZETvaeSXB",
  "key36": "5R1MTgGsfYz1b3JSJaa7xr8PsuTxFysVMAw6vRQZVuEmkgNtX5QYiNWiJsA2n1AxBzaEeygtcSUinmpXzDH8XeEh",
  "key37": "9SAv84Fv8MRGFoNwvbPR5F5EyLdp85q6naWCNApuCFDfdTuYqjvi49W44BQeKA6iZyQevtH5g6jhZsDMFTDvpuM",
  "key38": "2sJEXVLQQGhkmpnTmvTLZqXiVwXq7hLz8QiiLZdFHXUY7mrm5jDMJs7zaRyQJ3MDifYnZvTBppx2buCBDgg6vksk",
  "key39": "5RP5hMjKuBsUhMJLAmDNhjPH7y2EQgtPxGf3KwtQjgUh1DaDYSCJJocGVWhiG5ADquj1AMG76F4pvxDMaCRZvJqQ",
  "key40": "2yNZ3bURr6JRzU1SQaUhgF68ZZ4VgbZDLDbBfJ6AMoAcYDxnsNWiRwhsDcSSsqjgTxmjm4GpP87eygmT5qnnTRmj",
  "key41": "2VVf8BAXKTaGLVDf6k56LoVLDd6oxHz2Kb2ptooQ4wHEgtFEf9iNGmAxVFTPz3RdsWH9Y7qacdecCKu33s8mtvF7",
  "key42": "2eLdoWcWyGmwD1iRD2cGNjMGVsk2Y24inPy5UNSzWjVBvvae855mme3DWfbPoZASozADE2bK8EsAxJB29YHWcKpC"
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
