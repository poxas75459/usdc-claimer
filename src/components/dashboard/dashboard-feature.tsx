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
    "2cB3b4p4RZZ1fbYoEwT3XbVw57VtMUUzsgEhLvJwdLsfiUYoUxR2tZgP6Cygn8qS7gTK1G8VWg9mQSyaiiiLhYT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gSJ8rFyAHF7Z4QGK64ktrbQRRUMT5h7QJn6FDZTkueDHCErCWkxLmqSwowx4uGHYpzurA8TbUmaZSkYDoDxS3nW",
  "key1": "5mPpMctBAV7Y7r1SZFE1n3nYK2orjizwgyN1j5Zkc6qu8H42wumpURxzy8NsK6AyftEiTKLWRUN5FSgLLMMCjVoz",
  "key2": "2JKBYV8JjApcSEZnHg4XKpvCHySyTxovmY5jCbkpmjc5b8WYoepg1NaHMty9YeUvMQ35ozhgGsRPUud5VNcurJqU",
  "key3": "5wVsvKvEWpDmkWvcRiKf13WhqG9i8TDHxPfFT6VqzeDeNxYgab692x4S8ouagWetVq5PdEXGZo4Tknk5ohN7F9k5",
  "key4": "3nGtVi97W3PyjioJRE1fGejyDoWsFtChY12tMPdMhUVVrzBDixSkSsfsFR21dU9c51bRPhXs2DriWp2hK4YbA5x3",
  "key5": "3h9eFafX4hYNb25JBkggazDV5UzVQcuQniDL5WwLg7H99oyRGvTqa5sZF2SK7a2St3uA8mLSWFsfZhUhqn1F5k5t",
  "key6": "2uxHqR6hp5pU1cRy8LHR7DTLgrMnovadD3KrS1ATA4D58zGHiB8LcAt8JPfva4XReRzf8SzT6VrnuTTYUT6He4kk",
  "key7": "5uB8ZuvaYTGdsQkJrR71NY3Tvrhr4eup2CqKZ4k5vzDVHTpJiRfzxt3reipsNRCXFyoavGs12FEcmdLXu3FXysXb",
  "key8": "2pZWwZ3p4dpcFbYCVS3UVgC24wQL3tNsRsTSnRyVr2LoyErB6E2aeAPFrirad2KddT3M7gaUamyXJPJP2RjbsjqV",
  "key9": "D56nKhpYLhSP2Aps3NPFkzSABFMz3hjJtczUbmDy1Q9TszMcgH6BEE9M96r713JUsvntyhqBE4BWaGNJ59NCKkN",
  "key10": "R8ph47P4nB2MteJViuT4hWt6KVUnawy87m8veJYFLPifVzGEav6rYeoptQq6AtLfF5bULiVKGudimNiS54DMFqw",
  "key11": "2ktzx7PN4kWfcA3coAGSVEtQ7wY9a9CJzMVx8CbpVRhqDEXSoHdgK1qC5jxv2GDHRynnDDSBDDgnX9WSqeXyuNiT",
  "key12": "gRkzmzWRFooJ1zxopS5TsJWr7bXMv4xH7kSRRTyYuG8jBhFUSXixeVyzmCkY7cDrPUqrsZP4g6noTHnt4vNTFDj",
  "key13": "UhPMNTck1665xg8KiY8XMEXzYATvyQphxt95E5P1M92JB9VjmBoWj61CafYijqrmxryWGXG91cZKpcaW1AKt6rK",
  "key14": "59DWEEfgqgHCdsnbzMTuM62Ed32TDPB95RAqbL6CQ3VKs8RRkgnLHnzuQQBnjBd9qNBTLB46Bbk7SfRHG1sGyCUp",
  "key15": "pEjhbrdCpPXFnkgea6AvxAzcVQTnBYvrgU1GzUCjYMfL6j8wGttKtnMFr6LW6vrDH2ATKJEUryU4RHWW9EfyTPv",
  "key16": "K1QJTdjVWNznDy8eStJ28bpNxC9JjzxpiLR23S9dUZ3tyfYP1P74aSAi4rPcjRh5Tn7B5fBEaaLoEhDwD8fF4pX",
  "key17": "dFSRDhzBzcWvgjB8GRz8QCcCuutCddHuAWshHBuivnFyPN1KoeUpiikdA61pRHkFLuYbAUmyc3yskFxf26qpNAQ",
  "key18": "1yk67DyktP4rHxaUGg5bAV8gqDoJFMYe3a45874eUyZ3BosrVDXanJny5XfZ9LsqFERtDAXigJVF5Th5CFzBxRY",
  "key19": "4dtLbbXQb3dZJtAGWA8dFSgaynppZE61HZyk26k9AaYuUacRTjPzseMwYS6qBgATnRTW9BzF3xsh2zuQvRkuXVbW",
  "key20": "bdcLzu3aHg87GbqbBNAs4mNjqGxfje7S4CysggrZdeyyLZ5AjXzudY6UDSeQTUVzTQ13mSw64LeBQXE5Xq9Ht5Z",
  "key21": "5FAUBKeL7UiWkuz8oq9h8SsqLfqbZfyFk2dTwxxvCX1wdtSuBfdFpZtkdV1Y4APWswCHPYV79KzUgSRHxBYbqhs9",
  "key22": "2MTm5QMCifXnTm2oyzBiqXq9ueiv2XCshEkPnEgdQEbcwxnLYBzr4GVoto1rekrshyQB5xd7eyrfY9qxLULPLqwR",
  "key23": "327VfYqobxtj1TQM23nG15eV3V22oYpHpJBSLrHT31FDezfnSgXgpm3s4mTHkjPNZzjykcswFEoqzaKssiHzUbkx",
  "key24": "Tna4F5dFCfk5tR2CeQYro28CVLicSYA6GFMv18xe9LQgbNTZooZgsL1yJPwo1GdUjYppJ1AME1BveoLsnqEbwTE",
  "key25": "fPqAvYmNEByaDaFsGxcXSA9Ub1bJN4qE1BkCbqpru5eugTtBdUGKjTx55gLp67NvrEqbaUiVAevWg75Xkh5JZEb",
  "key26": "2k2pY7wZN4CQ2PVgagAxMdsVkP2ZGBpSJsTamAUcCEPPcPJgouPeLkJMaLPY8ETnAhP57kDcNn8FLjBLXKsktRBQ",
  "key27": "2S65gSfgbU9T2LLx7coU3ESsmfWwFL4A5YH9uAU52j4ZPWNnaMuz6S2KuytiCs28eSpuow9Jqk7gYHFJqP44qdbT",
  "key28": "2s89zQfV8g2wKmsvB2i5y1vVucqkoM41Risw4abmfKSr2ftHCVYYPzR5xLg6pvPxbfEsdkcZ4hS8dAQhF2uCgUFP",
  "key29": "48Da8fAKrAEQx1774FFeofJ3bfhBVyEXE3BVat3V28tDMRXqKCp96qQqsV93cN2iw89HHeQKzFKbCQRAAUgMW9Jn",
  "key30": "5mXWGtgnwU3a1Kt7KsoehfmXYZ2iRmZhxqJfWLSVyedJiFKwXpWQbD3m2qzD94tH6b8DMXh71ujiWWTLjqixTxMQ",
  "key31": "hrAjuC9gJmp1SrsTfD153SxnWiRG9JxyiXesBSiQQPL7Ffmtkoi7bZ1KrAKZhFruc6PpH1EqRefiV5euPBfVfnf",
  "key32": "5UnhZo7MR913UMXs9HEiF4rR7DySJP86KGh2MwdnPP339wQpy4DsUb2Sr3JTcRdT99SG5KQM7HXuRfejUzXqaBg1",
  "key33": "4CvBsXTnqJHUasQQ6jHfc5opoLPyhCRaUBQL7QviRzv4QA4SnEexUDDntvkmfAyNRsmR3DvRfiA1itNd4orYxpiT",
  "key34": "3a6JNYQ1oyLB4zFMk7ULoapxvUTs2sdMyzF68dKuii4SYjJ24647j6jPXpcKNbXxKVY5hV8tDuHftgT895SVBPKz",
  "key35": "4YgaZQvkhyRDkTZSCxKXuRm2xZUy34iPaLN3wbr5mL2szQT6vo53NsTmMnngNHRxSZRcF7D9oi4kNqaB3e7iEyEb"
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
