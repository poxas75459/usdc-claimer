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
    "3oXPaXvFajmQKJKb1vior1d9QcLGtmfhgigUPSMQj34hJXQVfDVaegdyqW3CWV35npk5rWYadXguMYCU6C97MygF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rmFHuReGcnxfme56qAcNQxK5SUgaoVYoPzGC9tqkfwR3soPzkjHPKSgJ3wHNiYDPWEvkCUvpW7nNNrHybcDC6Qm",
  "key1": "4PzVRS397qCxmjNXNe7V13FV7LngkFkJHUiG5iNm9Sg7GGsqYjb2K6RduFLs7UeHR3HYD1KYonUNCBe9g8Tntfno",
  "key2": "2CAhSFitaMS7aJHHFzrEH7PvjUrYkxkFtqwcHF5Utogyu3nS1LkNsuJE3dhguNka337rT6NSfbGnuuVfBGa3QwXU",
  "key3": "5vsNWgLBchCD2quhYEdje4uNPrQBswgM6MuN3Wwt5s6smAejGMfXuZiQxNHnLBDzoXes7Qc6Hzvcj6feC6quqgUn",
  "key4": "jL6W1proYASX9Ybj7Ka3Gtgk6i6MwW2Pyqe15X4us28VDBWBKhrafCzdud33d5knKfknTpjex7pjtjWq6frNgKC",
  "key5": "5KHfbBF6jQbm2rPRuiFMUVVEx1b3NuQL5EuL4KeVLrjPghqC9bVRpUTduWFKzfzNYYs394g8VCHSLEFzudWfoRRt",
  "key6": "4EW7toPeyWvUfkeYV1GbsF7z2qWqDVgu4n5P1as9NeWpLLAVbKXgT51q1Bit8vhzbpVYdZogM1Vx4zfTYkmZAatE",
  "key7": "5VdcyW73hev6Tbe7H1FNEa9cHHfgpWWPpzqWNNKkKqsB7n5NycwmCqx12Y1S3aei2XMVEGgzYxaZn9ebHcVdy9ho",
  "key8": "5drsEs6vcEaUp6hH2h2fCLkWRiPnXjchJFTKCEkUsAdtqLBCn4E8hbw38GNz7Q1KECNmkD12VX2hgkTZw6MMCY9J",
  "key9": "4ZrrjvL8Vxrjpd3DCTEVjys4n1MmsXiHSDfYZurcfBAMmL5DFihERhEiyHQ9hpNYSJkfUZRCgi9Crabg5ZGAVEFU",
  "key10": "3y3HRy6feYtMwtLQbdxAYVHg3jvMDoVW14MfHFNSAnLuLdsseV5zP9nUFPKMg6DiEyVjn9wfnTGi2ecCNZuCNAK6",
  "key11": "5r8YPzJMBCDWuRq2t44Kp5sBNHR8AMY57uyqmZcfKfdgyvnkkXeSWmMYECwWmniamR9WvZZj4kRE3hAmCqEa2uCF",
  "key12": "3uUZ2zuU8EC1XePsWZhYCkSWR8S38hsmcq1oTZAhHzt4eXTPr4psU2PBheXcXt1fzZuNsaaw3WPqb1sKfDCPPK8N",
  "key13": "35JbAnqF83XQKmf9Tr2BpvwLvKBwotrRp2Ftnig6yBLvBuT2jvmUr5WFyE9ArtmcddjSm5NTfaPxodLTYVQoPqT3",
  "key14": "rmhV1D769KHdUGVPEteNa829eVGoYAop2z6A7rAUp3httqmZYvVVauFcCBouesBBeiJ13SB2FAu5pkb5vuyJALK",
  "key15": "4fiC4gXdvmjPoEWraomwRUAnd6T8oekdHcsj8nCBNNA8PPiLfyDR9P6N2nDQf5t66gcNQCsgMcNVQL8iS4ncS9mT",
  "key16": "F5qAHEhfihd8FfrrMydUskG2qVD5Y6xo9zHorPRXz8tCsbp6qG68cHgYyzCFzh1n7w77XxS55cwX4cZyUmSEPMc",
  "key17": "2mSKyq4JrU8fE6DrNe2mbpEvu2sQ3RpMGeDMjUzntQ35bzpxXqsczQQ4GWJqpgVxe3Yb9Yg8ENRXxDyafiZVzbBw",
  "key18": "4YDwVH6nh9rQYdAGEv23Vy6vUNGjjDSh9cdVNTTCRc8zN3pKc89t7TpmYWKRwi2kaZM4J4PEixiV7aRNKQg6zZcn",
  "key19": "4Bop5oWhqvk6c3NqCHoD1yBpG5QNnZU9FeXtaFPN2iABYSEnmixSCTL6c7X9TWDeJeauhdMrnNJ8dtovvBhMzmCX",
  "key20": "65qNHj1Bj4SXRhdhqbLkiEHEuM87TNmZ1WLoxfJJ9TXc4xAZxa2bkaWKsogUZ6jS5RDnua47D8LHxD7jQkkdiYU9",
  "key21": "5dQ5eNgrPebVXryLm9yrV4DysCR88RYAqAjXnN3unJJC9xsWvi6Zs4UBGENKwRUbEJJmWLNAV81UrFoHWRYJ39VC",
  "key22": "4jWyTsYBeho1bz3zYE2qrLYRfTHWtobaPzFxdCwsUB8nSPiKLGeU6XpwuXHDTkkVUEe15NkJ38x23TpXZ5N2rzVX",
  "key23": "4R2G7KfG3JPJyYWdMYJHtRqFZSbu8PeCEEuXZprq8yHVZKN7satfwNesQR6gmrBbSN9PCKcoK4vYC5SGDFMbXhkA",
  "key24": "q1bKq8R5vLWFW2eFnXwnQcgup4p8RVMvYv8dG1pquUFE3pBtNoa3Jvm3eR5X7YunopvFV9TYAic13nPL5WejaCa",
  "key25": "rmSpNrR8r7ZBKNsQWeVWLTgmYBsRzFDwHSbazcGXccFUSy8rQez3nzRZzDVQk79myk1mczSg1mywgYbBFeRMWJG",
  "key26": "31RqjuCrBjziHLRh8HSREudEoDXnx6JJ7V8y75Wx8pZPZrYMmwsx8UPmZWR4FurvUzNGsNCzi7eJjHZj4v391mXr",
  "key27": "4fhkHRLg6gcqQxhAUpyKPH59v6YAnsqBkEsZVwnBEkT2bjALV3Ko9Rxi838mkyvcfB8LLd2ummYKLWy8bnBL5Qvo",
  "key28": "4gJ5MkRYALz7tVb2tP7PePonUvoo9192i4wpckaMEJmAfLbNhTxSvXyCN9oeAEQR83dA7YG4VBVYuUE3tkkL5ZoN",
  "key29": "3p5Lw4U5oRZqLTv236qh6nditvCZTXwBYG2vosrAR5HmXNe27tS7wcv4oycZ3jQtuSmm2ngpcDp6rqEUdQfhZS1M",
  "key30": "5osZDQELebW8P8eGgZmdi7tZDZpruNApS8nG5GoGVypqdvJkVu2nhZ9dUBxdcqFrFAE8D43SGqb6Gtj5XNNpuZFd",
  "key31": "5pL7VHjm1rzL44suKmELCQboPYs447WHY8H9gBzbfcmLjhtP4MiAZDMcscfAtA33nvUCEH5NqrmciG1zezB881hF",
  "key32": "2FWPMv7iSCTDmxag3z4aizcFSwBKcjn7SDguMsJs7Z3vL7jkWHEhtWZj2LRXfrhK7epDJ76a94nQxSMzo1i7bNwD",
  "key33": "4W4g7TsS7BpMvi9dWYjjrYM6W4Sm8ArDaK6rA8QnAuuyCAXxR7iNR112YDjdEz3hhTHxq1dqBWTrKvYdumNJQjxc",
  "key34": "3DnwoS5gqCaz8H6oMX95GgNZSkGXWP1HKVY9rriBrXG9SgpvJeEKgH8FMrNdorno6BvpEm1wh3jPVM4VQacHmR2W",
  "key35": "4kcQruMmXDCF9a4QmJPFZHpH6AjogaHtcs9KqKgn8M6EyH7Xvtg4hP4nT1gAw3DTxXG7enTuQU5sjzvCUJX7njEa",
  "key36": "4EF27GsvZ5qsUa5hqAK4cUP3DbCdb2DAZ9Ev1AhhBTd7XMWtgZRjK3x8Goh647YvWRodyx2afsinpz8YyE46JmdX"
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
