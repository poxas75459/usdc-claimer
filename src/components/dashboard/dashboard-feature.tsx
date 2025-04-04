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
    "4mSj771No8eG82Z4YHm5FxZrCoBevhBBeTnMoVMawKfCgk1oaUVcxFDArrFdGABikLorWCn1uADSrVU7R5cgSiK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8663rPTzSPBtvLZ1YfC8kCwVAcZsWJvrNrcq5QF3L5gkatJdAmzHkDsq8h3vbcF2dw6oQT8EnS62mGVeHYa1Kh",
  "key1": "2SGVGhfHLPfRdNoGau5dt464BLeatUP2Th3s5dWnL8zVcy7zs4BAXD1t6pasWDuDNAc7JgkXTZxFcM1YuHXQ1zYA",
  "key2": "4pJs69co4nfrzbfQLAhS48LH7bkeWATG3EFu7ysFytMUCwLkQ6Q5SY7x3DqsfztGdTDavzEUjJmbxnjHQScP4DZb",
  "key3": "gAJ4A4agPkpxAdkKmf7cTf97pf1UyqHSsbjtKay4QwwS1C3UAnjQTLHe1ZQaPdYGQdBPDrq2SdEsSPuMXbKJ2q1",
  "key4": "4sYA5mv3cxbtuwWqhRCcVwnSTnGKnygkvSmrP9hVnE6j9Rk1ruoA22VigHJjYM8ZPYkvk9QkvJXs1pPVQgQDjNaF",
  "key5": "3EZvqCgRkkva8NbMXAuo2MuWSXUoF66Wg3Y8nMLKEJG68fZzxsYg4CvmekGw1cezLn7qJTUYQM1p54xjQPfDjTxp",
  "key6": "3KzEhkmf69uVuvJxyobvGfKNDt6o5U4ji2Yu7Q7wNizfToi3nQDrXQzMGhYQGVzrR7vTyEBCgaMXRXQyW1TBwAPK",
  "key7": "x8KNsaSnw9voRdcCfk8nKK2kKpyFuYw7E4tkPDQmdXsTNLZsLFKQScCKhdvphWqyEryWe3x3zPnGcrfUo2F56pc",
  "key8": "5LKdLgLun3zrnpFucnxMtaQZqv9mk3CKLkqRKhLqFdATKmM2ZHmHMHqG1yfmqbT77odzujNy5dxdgR9HYcdeBVYH",
  "key9": "4ASAthQKN4WiAkaq96RdVvQrRQBcQUNekS95BetC5xNN7zRLcidzV9pV4UpfmbRWUbX1PePiDytLcX3RUDJ99hyB",
  "key10": "2xqC6sy9Xv23XjypnYjdttF5foGJKuqkjgeqJ9MnpQJsPXQ9skcMFujhhdrgBnfQ58MWsqdoUNa57KLv2R4P2FHJ",
  "key11": "xWt1bc19Xk3f31TLJAXMcwzLJgJ9bAhUiMAbnL9VpKPsfH3yNqMZpAx925Y5RZd8qxFPPnDVXyDKT4XqcdkGcrH",
  "key12": "35ZWz3G4yiVqm2W52RPdYpzZC6YoW6Zzrf9ZmLwyGRrhjRPjegLPSAMV8v8FVi2KdVi7ZxFzKqa1Ba93842sAkuC",
  "key13": "5Kq9tWPE3hpqqFYAoCGw8skGwuLvVaVGXWaHaGCyQwWnJHbZaDuhB43aqe6CDTpfc9EM8CJMz5v4WqQDr6jaUop4",
  "key14": "5UyZ338D73bcXhMAwf9ZXiu3shSYEN2drZ6MswaL6HWb6MQ5UDJS2xLD4tf7CBaEUCi6eo9SymipN8KL4sMv6n5a",
  "key15": "67j4M26ES6VwKX42WnE7kTUUPQx3W9GCCTBMU9LQwvMZ14t6YZyGETXUeMLzasDQU8EjWDMTBy631jnrBBzTKiUJ",
  "key16": "KXZckEzjy2DAcE1Xxe7uXUF65UQJ79RuK84Rj7AzyzWsM7Ktiuvox26wrsQM5H9HZGhcQDuEzEmZSxhNnjBSPjx",
  "key17": "5wjYrPyeFeYbyaWDZCN5uPyu5aewSM7nm1GVAew3XtZpsj2HEXh81uCcpCh2bZnV97eku8DZTfn2q72RnUC2C1uA",
  "key18": "2ZytdZCcRtG5WVEEZgKWjwbgRnpWtenkymhPoiY18vpGPisfnoZbtDM1QuRHGiQzTnEDsM8DXSxVhp4xBBp1uTvL",
  "key19": "mb7pCEkJveWtxoev8f3ifvgyYoQaYQEXLGbniGzsNvjqbgGgsYc3WgYg482tuJe98jkpQsaU4DgYpW1rSREQ7Tm",
  "key20": "2oSY8yhXFAnz6km1tXLVe3E3fyvTCywFydpfi1kkBWE79edZgW6YM1Tu5rcE64KNwTReUt3HPAU5A3T4CapqCP8A",
  "key21": "5DuJkU82UFYCu3jqBZ77xjAiWCNxGXqAFuHrQQ1wFthVw9cPb9wBDFP7PrYJ92AEYLeGstZ4Ln99N3djLdrETZa3",
  "key22": "2scVaGJKjCKGMaYnt5VrDeocSKmTpCixg1f9fYSuPrui4P6A7BrrhaevE7jVx8GG8kxBETobtQn43CF5gzirHjWQ",
  "key23": "59Vfd9mMTiDsBUxnAQx43qaT74bNdmZtpF9JTiXU6Yt679dbbG2CAVTcEREANVCPb3yUU7yrfE4QEnWf348GAL5V",
  "key24": "2zDqWzCLJhq9dj5ovZ6xSeEd6Fx5m9PYa5uym9CMaek8u3yeN7NrS7e59oLaA97LcHEemS4FpBSrtaqRarCTjmrn",
  "key25": "3izqJgqwpXfQH69jS8fUrLZyGDhA527RtorY6M6FZ7kPyDWx82QXWo7qdiC6H1vQVHQUkDZ734SHBWsu6oxuYFhX",
  "key26": "69TbVNk6dxt8U7WiFY4w6u6oWDhCFKFgSksPoUaTAVitdDtfX5ikGC7acaYWz6ZfjW7MKuBPDHfWG5XXkhNZMQo",
  "key27": "242JoFMqAtN8gFCcyQb8cZTZ14gJNtQZMmPEubzQXkj1EoW7yzRf8e1csMF7F1hP3q2FsSbJiTg7Txd9EQH8Sa2L",
  "key28": "Hyg4FFou9dPnYpiGTKygcX82P4RBF3HCVoK43rg3ZzXxsAwmqezZGkLekv4dbmF1DqoJfFJux1DR5QRF8RPHKsi",
  "key29": "4nGeqY93817bRNfn1arL2tKHw83Hmw2yMCu83D9SkeHtRsiEKgmm18Pv69EciYrsxpxXTcxFwHFdtWgkBSUdjbU6",
  "key30": "51bugf9SPRxrX5rqLUqAihXxiA8rd27LvrnSFkTiUzh8mPubSNAZDG7RbufQGkDfGYdauKWbQAx1vfsvYLmnXvTA",
  "key31": "3xTKzqiD2Ckoh9tqwiPP6wQcWeM5g1kR9SSX58HiY84xeq3wTj1eqvLKUv92XLMgYL4DQufHjMizfTVabTuRgqta",
  "key32": "55reBt5bx5mgvQmYNw9V6RtgYdXoheCcpn41cW54Dgibs6uRgYDNK19ob7teX4FUX6VJivMZVJz9zKTZUeXxhPYo",
  "key33": "2tHvjS2F8JMGJ8ZLwy3QB3DtdiRd1qhJQTNNA23a3ZhjFi3uqJkCqjWP36ToonF2TcqmTBzFXjcyHxxZ7G6Jy3zC",
  "key34": "1dFZ1XsAWiTDEDTy5xJPe4C45gm3hRagGsvP3sEWMiQgWPnjQR36CZbJ51auXEMmZSxr1bsX5aJjU6f8nRiWDsB",
  "key35": "4YoV2gdmRoUKtMFSuRTtaVxgE8RiroHTTLBzp25yZocsfLVQVMzrTcuEtjMuG1MyrXvWjHpEoAsHDMLzBu5Xb357",
  "key36": "usBAVmcdJ19zXx1jQBrM4B2jxj1S3yrQjLrP2ATTW5EVX8cgtz4R7CxZbMLv2SaHSvoczTmrXcwBTTJEJiTrq3X",
  "key37": "32Qpx9J5LdgejewPwGM7pcKCQ9kjKZKcT2Csk1Mtu5NPrEz9RroTREbXSBEwLpjQ1jhw5sK3btWWef1TbUWb9UZm",
  "key38": "4bwoocif6XNChsFt7sR4i5MeLRSR4LuyTBqQRHq7vXEh9kzr9Ru6VkpSekZABu3ECEJgpsaKEEBRCKRd4kH6xotn",
  "key39": "4n6B3KFjAEsaqxEjac7hfy5zrdy5DY1Uu8cLW7jD5ooFghtbJw3d8uXCfjfpoZxEQuAYnZfTd555RLBx3Y79Qd9X",
  "key40": "2BcJYr74dxz8bubqSKVmZ47NKhXery3zf2fmhYHMMPe6K4HZcqVFsqKXNSp1fmuwcgLVtxhiYgw77s7v3Jz7tztH",
  "key41": "3NTR4cnhYjdLqCkM6yNZY7jQyZHLrzRVLU7a9bVjtvFmj2hX7QMY1AHLvwArLPW97r8zyP3pvHreN87txAbYtx3x"
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
