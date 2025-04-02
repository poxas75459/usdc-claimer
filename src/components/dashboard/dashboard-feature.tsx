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
    "5PpPP6J3e1SF81fBuXJGsTgH9wafJ2SQprMJ7ctS36mrqDTUDL1AhPe8XjJ2hknFk8JLhPZKvpWXzWT6oKr9gsm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2stHcmee5gpcWqJB69J8ziCBBTSzfD5752S9RaD6jDmJws39YL4iU2b4UigmPvbQNFGqisAZ54bMPtxdin2ybeyK",
  "key1": "NAZVv5T8rSbgVQESZYiKve7UeJCd6V8qd8Na1zUg4M4TADTHpubE24KiZnDoanBbmrrY8rg8FKzJb2p8TtW1Yug",
  "key2": "2Eq8MxXpPCgNrFzoQi4r72C3JAqRneZhvBqshUR9Rot1FFDiGEfg5CDaUUHkaYco7UFDiKwbHEoZQLTXd5LKMV94",
  "key3": "4pTPoBCZCzPTJn8xBVh9vmjrQEhmrR7848AfFHnJcVbakiUkgkKwB6RpHHQ1LoArG4oYaARHSHYgBW7hEYJJqy6Q",
  "key4": "mwEyDVmeks3A393aFPyUcQYN23XVQGH7RJWrgVpNzNz8F5EezKXsnf9sjasB4YR3xSqMUArDS8MTkpwhitBYPgM",
  "key5": "45TmrC7WEbPvxtiMoMGQxhURp7iSfPN6r22FNSFqx1Bo7Mp7kxksdxf8dmbssV7dpLtBEJM6CHgq3hLcRvLqJEdD",
  "key6": "25R81k7G7LLSc5mNd6AVRBwkC47CE33AHCVE7pnZ7XWxDA7ASkRy7RskXtapw8XRqg6MaM4aJCxE3qo4roqSXeS5",
  "key7": "5SKwGppCaPcnTcrEc8As9bAfugTBV37t46bAKRjgxUZkKcbyp2XW52gAwFzYoae8B748AD66QZtJxwWe2NKNLxkY",
  "key8": "4x9ugoa7boLWKukGzJTRWQmB4ZyrMKiS8E5fEnkYXR1PeaG9brjQRo82mVsphRxLs63FUuLLqyCjwT1CY6wNBqk2",
  "key9": "5HZYqfTTKG2r1kvafDPtWGXVjQvcF7f4cK8MRds4Cy3baYfN9GexzERcwFty375CCc2M6cqW8kot4PkNSbUnsRRy",
  "key10": "4PtQcMiPYu8xPzMvWpaEgkBztsRermj5FDYSeuuY2Vb9wqrGY4xocroibnMKXqEoamN1xufKRNoY7jgaWfymvgYi",
  "key11": "2FXwvZVFnJh59tV5A1e5T17TB5RG9F4THoPMBSjQ8Sd5ejxYU26J7aYUm1wCRQsuy1MvV49UfN4GsEvgnhW68Puh",
  "key12": "41j4dySHrrXKgKhPbrmSU7iZY3abL4BFuWTVYhk1cWfCSJrnGm18yUfpazQ9bJ8Yjh7KBpTaustaVyA6dTBFStmb",
  "key13": "3R7s53UQHY2EmyHg76FB5njiTR7oHzaWHJpmr7zGvWgwuKqh15xpCb5nemDqLRcN8UWmcZAFENYcz7xCbfGNLkod",
  "key14": "cZBRQ1hzWzagenYKiZrh4jE2qjgcmYLMrDh9FXCdM6VPqrAXan2wfjdWMzUEJAQjRWzs2kXUFrZZZtBELRuwycZ",
  "key15": "YMAg9V9D4Y2UygA3VcUDd8tjtKCVguYQVkUZ4exbJ7qiQxJ45kQxtAmKBYcuGPSsozq7kQAzkV8k66NbjLEvTxp",
  "key16": "3ZNMopgvJBimSpopJcCexwTzqs6kNRy2DtjXvSUk1BgtT26GTSXZcZNv13WRw3AxhvQWjG9EKy41PKF7iUXxfxyV",
  "key17": "3M8CPiPUeA5pUKjGknGzBGFeh8xFTc3cL7Sz4NdYmwuPDoCMnx1VvPFxCjQvNTR5WfRpAJZphkJLHhXWje1WwbSd",
  "key18": "3pkDYBaoZfXxXmbsU2Crpzzm3s9FRw1b8bMdL2ZTS8wgdAzSrd5arS33TA2sTZQSRBgiAXUWJU3unGS6zSdV3xpU",
  "key19": "3LxFV5weQDWSisvtfT3vf8H6rV6ZawZeFBcx1DjkHE1fDJtechqbGebGjJwSg7oxhzHNLgxDYYGS5mJx4GXzbM6m",
  "key20": "4bn78WsQfwLktYETWBv1qVTGrHscvPghVrTA1XBJwJseU5cNP2q5dvL6wPFyA34Gqk5PiDjSY8XURKSn5t3748s",
  "key21": "4Tm9bKdo82BACuvAV19urqWVzBuEJ1ScgujJ9RAPr1tomR5kun3HhZu7mtVMPAL3Jw2ATEEcmoFZKMSaZiH7vGxT",
  "key22": "3Jb8eor19mGZx5KNdJu1GzjCB35G7t6WnJJBX9DuPnUTH4aSEvL2Qw2reHXbkMLFcWwHUmqqNwTGHdVd3vX3TDTK",
  "key23": "5D5zkeHQxC7haroJ5UfW69VRizNaTo9RhMxrDBXqN7QQTZ6ZfqvDw1nugViecWDg2Vksu3TJ2CSTdgzYjXdvs7V5",
  "key24": "4R9fgPDEXGt6c9H3DTD3YXbzwbDKbMA2kMoZXdPGcUzDZ535DcYJZTs7xa2K4nbj1uWU3oivLpTGrhGnvY1MqLb3",
  "key25": "2Q4wg6B8sBb8266LQyztzVeV69rvVgddJV7rspt2Y1yxuTpAFVskeKi84EMF9R1P6vALrTp3238GDcxzSpxXMw1A",
  "key26": "5Umgp9M7foXq7vQbFrHweFbLMB9z1pKuUgv9knq7H7RZkKEHpk8TijD6ihgUZFfoThQ7rGjReAiNbnfBwqiZ3yzm",
  "key27": "2siq8Vsc9xVonqFNRTuoztBsVmvYm5szH24ySAdi2PwTnQtkr8UZUsG8WYvzKMQ9T7cyXffzomNbMR5PxwmcShsW",
  "key28": "5fk3cXzV2PcCFRBsZjvk3cygExvkf4HCAhruB5BLZmjt63CN4tnm4cztddQbo1sfh6emg4hZzU1W4DbF7Qa1mZvG",
  "key29": "28w9CPeXRbdkREA3134Ty6sxHr3S1Z2s8jM4Be5uBK1DoiwfLUvGFqhWSQQu2NhAUHna5skQ6zukaSguVnoC8TzQ",
  "key30": "3MfF94vhnQxLb3mckzwJT3xb46WnZEMf52rAUL4xCTb9Kf7rjynEmHjJebTZoUtU2H7LBcRyVDyUBJP3s6R525UG",
  "key31": "5K3ze89wSpwnifUbHGJvGMfEQwhpxHDHGyNgjFmdnWm8zY4c8EABriqeAiZeLY3M6mhMBtt6yZBDE4Xrs159fdyb",
  "key32": "51esSCHpbwTgomELnCE6NyBfziJ3y4ouDxGJhxWjU7w9QgFzNZEyCj17ih9em3pMqrFRGBAh818W3scANcuebSLF",
  "key33": "57CjnUzTEtwn9K5B2Fq5mVP141MtyNbpUHgR7nPB9A5YRQQ5JA17rk7cAFi12ofT9PcyUPGypYcMAAo1feQprpAe",
  "key34": "2iZgeK3HbiS2iEkcWTo9JGo8QGC54LQzsHviQcBqoyihQbdeGqmk3N8D8ugYQtabtzppRoavN92BDAcZhHgJ1rbG",
  "key35": "2Ya6TVG8pvipqKcDe9HTfNM9vZuzM83sQkXfZk8fDudcG2BdvKpKHyeJmFSLPTgjAhgptmGRZYwCCxV3CYckCJZL",
  "key36": "2Qhyp2JiuUrgH9G8DPUX5cLFZ91T7uRfMyxg2gKLi7D1qhDsd3wo3hVMhY3gssTrn4UokomgpyeUJXyj7vyPJ5uY",
  "key37": "22hmMXRSi38ynKa19s4MdP5GHD9PLcsRVMQmDu38QyJQn1dEdkf4qCKzdF3MnSWCDEjNFzNrf9SEp1E6DG51hDkJ",
  "key38": "45CevST74Kbn3g4X8vEfGGSJm7afYL3emPX1NvQcF55kD1JidNiCWE8RGSyFBU6FMTp1zodos1bu9DB4pKFu7tMH",
  "key39": "Axi2ZRQtdAifPcZupd1pB8aGXNMo96ipvK9Npv9h2U6D3KpsztAws3b8ccEjng4VZXjdyBHhkEsAT69kXKMmYHf"
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
