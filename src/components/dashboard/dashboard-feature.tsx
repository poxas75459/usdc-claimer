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
    "xJwPd6BfeTsRe1hMUdrBqL2QhYBkL37WF1CrnGRcSUCkb8sTDa2eVJPFumRAdfBZjERDCPUrAoC2XTH6NNTWAN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QeqjxsX3ZvNKffET9AA5ZjYG1DLqSc834e7EMQD3rU8gNnMDq5p1W1pBkNo11PBwG8CtC7dCUbjEaHKNNjDTkMH",
  "key1": "35ZfyxxeP387Em5r1e8xwGoqTWr7PfVbnuhkkTF1T6porXr365qWzLRz9Toa9sS7CzAjM4sLLrGSbmxXiSQxm8KX",
  "key2": "oU26RmdjyZU8y2qsZs8F3cAR9frYYhQGj69xAFdpGAs2fPPqmjYXdyGJ9KdM3phb963t1zpK7W5bs9C98hwMR3S",
  "key3": "UUe9oEE1XjK3qM3ZMFkC9DpWJNdCETgYSM9oKo2F2umdKXMwohDWwwRLKv1NR7WUR2PM3rrLTmZVbsVNGBMJP9F",
  "key4": "2Gz96y9bbda9EJcRtGfR5cfjQFHgMgzsMU6NjnvzpzUR5t3k1oC6R4eywWmR6q1Z8vFXvNb1U9Fkc4rSujEs1taH",
  "key5": "2fUQGZafeoCZGrShiH1YFqYTQcBzvnR6LEw7apEeaRyJ1G1Br4SFQMNGNENdDHK1cSkbccJ8zRDRL5RgvRK9VXsL",
  "key6": "3d4gpuvgzGRVuCaMqaUM2NctpDDZJVnH9apgdH4VjyJx4Ax5j1BDU3Hb7D75n4AGxkm6zDxRbKeBiKFhT34DDSUc",
  "key7": "4djuWuPhAmCau7skaYBn2LLkW6i1jzSWH6fvREKUUcHFUooDzMKPcvxnKphF4xHzWBPGD56JLZ2gAqVLYjDEmpWC",
  "key8": "jcpMtxFTv4xxzUjv96KDpF2VdFPAWDzDG4EvbaduBDge5gP9SpwWrrhESXsHGrK7ZzZ5mxDBCCHJPAQN4rJbFEq",
  "key9": "617QhUXtgLWNyjyAm4KEBJLoi8Tvqws8Vv1SnXPyBGksatq8iqTZ9afUFAUFdJdJnmaR3H8pKoPsZopiFn5zkTN7",
  "key10": "2EtSEV2EPA57x58r9HUmd4EsGEnRTtKpn8erF9GRCovXnLiBLK1sEskX3nMbfvsJStFxMZvqUuJeS8geSfepbYSU",
  "key11": "5tPkVP5andABJQP7h3i8DJSwnxWUYu1ehLzuTxGtP5W97r2KfDWXBDsRq3ERZbWrRGWMc6a3TZtNF7WFiV3dH7bH",
  "key12": "3mEBgYuXUQ6mbfzU9k22TN2mg9BVf9DUMVQnkPZpuapKaZCNokgCBuhq5ufNi9kX8uMxQFZSgPgvCcHiA6tA1hjz",
  "key13": "4zTQMrJtczsMuiQ6h7iiA9141CMNBjBuKYKatkycwnMChBAMGffoX8VfazBmDasrctXiLe5eC5vkoPfhS4hfzyrf",
  "key14": "2EixXUsWNCNQSyt8j5zYxUKfH2uZgwrF4zdEkWfwZhZsRo9XvjXi1mPbco9mqYPRXw8VfZcVTuaRSg1DdCrJPsqs",
  "key15": "RLrEk2gcrCyskZFiEcgwo4gbA9gANok94oLmjghQxCRoxTuTMK2FQFWUeKRNsNpeQda6CN8WqN39N5936Y8tCYs",
  "key16": "4fYPCngiGT9vWfN9KK1TwqCk2FVMJDHWK1pL8RnDhB7RKvnNZVk3UtazeawkrrJmr3PXnE7tVAJFmdZzibvV8FEZ",
  "key17": "34XETR2FnzyyL6WdswHvp6dTdqt9ZL9PuWaGNVEePKeyz7mCZdo5FrrH7YNFzEUG5u9ja17o8ZnFzKwpQFfhKjE4",
  "key18": "4NY8P4KsBg1bAVnT2uGXBeUXK9pprZoYne67zRMxP2oixx5fxdBrg1graGBbvjj5i6MexXfyWfhjvpXytoqHEBWR",
  "key19": "4v9RemAEjf5mPFqt6VimabmBxme3it9DyEcjJv1S1EaTJ7NQ6Lg3voXCvDkkvCZRJLb1H97MFMNsCx2d52p3F2oU",
  "key20": "WFaYMkwqBz5Q6h5Ruut6P1ydngNifCdN97S2PpXYDU5zBj7wQCBSKs2bkVwR7PMn5xAusEJBytVyCnFrCg8kVS6",
  "key21": "5tKbDu8uANMF592rrVsoq17fk9kwqdrkvHKdtPGBPptmsJncv7Z1uMQMCorSfBQKpYhCwwMAqaWYDQMSV2Huey9f",
  "key22": "4Fd6jYsSA6G29B2qNQdqQcKjepcMeqAKkWbH6KeBdfshb2qxyKPiL2JF35Mufuycjep7b6mJTpkqNPkAHh5hJqRL",
  "key23": "2PmrtwV41ZBH3n4KhvWF99wPbhaT2dKmLDaLFKdULBspmyAqcNoMETR92sRpEiWvSqx8VbPG5TnUvjVQD638HMgn",
  "key24": "5UjRCrkwff5sb8fWBw36EdRVBfynVykqYa9nMNvEEYdnFQTx1cauMFBuFstLAoeecvJJ5ZBRDSsbHPsuFqFeJ1PL",
  "key25": "52AgicZpkKdr28n18i9Vsmui5WznAg8CXmneUBPdkqb1C9vtn9HV48861N915M1WJMVJ4dq1xaYRo8xzyRoecgLd",
  "key26": "23PLUQrXeEMHg3TQQybVadJMBk6e79YK23V5qmCshZkyZpMM1QPC5ZRwQF3v2rtSVQtpioZxR7RGhn9S9dhkmX7L",
  "key27": "4d17HbtFgKc54wm2uzzzUd1eM6BfoAdJUjautH6PLsVQxj6ZCQ1Gvcbjd66hcB9xWHx18UhvjYV5oDaFmE94awYW",
  "key28": "5WGZZTTNA35XfgHNuVPhqcoz5QHvq2eUYQMGpvS7TfAHuQuCXFY7XCgKs3Pa2iR1AXHYwWQKNbzeGqLDNYzNkNWG",
  "key29": "zRgerKKHtwpzFyRAeCx1xZxj2bXJLZ3uPbQtWgcSMpsDsj5vsfjiXu2jM1jSpQP9uBinNy3b1av79ytavRJBrvZ",
  "key30": "65iiVt17pw1H7zjidVhoZUPZtVpjz55pMFRgPnTBxbpFdTpu48kYS3pf4oY8SZJsbKwchL8xgbSoisWLxPhZat4n",
  "key31": "3eDf8zj6jpTdikqQqsy45PQKZMxL2NzjMZXmbtWSwgGPKKRJAVkGEVyAwCsuc3awsQ8wZGAKpfuFGBrttGPVJTEG",
  "key32": "58t8x6qYdrEESfKGvMCezN1LrQyj5nn9JZQbCBwJKS3HNA7BYXUrhB6UeH1toqhp12AunwF3EgDiu24R6DhzURAR",
  "key33": "44M23f8NfPTQSiBbX9DxU7r2K1w5iwprVR1ucN7o1K1svQpy7JyqGQyCHv95WmKvu8ZVLnVpWAUdcP8zLf56UXAR",
  "key34": "3gFbeVbXGhRvWiHRzBoSk1f4ueLvu8XctZs76TZXbexStvjna1ZvMCh9nvxCCsXLt7hDWY41q9a1quBcq9W5nehV",
  "key35": "LHE5mCMCvkNsyrxvFRjQdnbScNC9CmTdXgvHBPTswn2fX4LTRztLS2PWxC8X2wVhquE1HkfF73S82LZfbCNCfJW",
  "key36": "GBECERrRXCWoJhqg38hE6tYoocix2QTmW11NrCAt4TQp1dXx3zRSs13eyp8GyWxLApraxb8QKsKEjuZYitzfYo8",
  "key37": "5QAL2bj73KxzFYcfcNhu7jUoh24cGnEyAoxnG9j15iScUxKDDmtNyuqh13LiSvWVJJfnjeAjd543UEorsp2Jybp4",
  "key38": "5m2K8DCVz8iNJPwXFe8rTxAxzZyMCpLoZa7fuspBdsrTBQaAmQ5zTPJHeb4S7Aai6VtCo6v3QsVxS1hHzku2C5nV",
  "key39": "T4G6WUUo7gySx2RhQk4fqMge7KHT1L5jiRqaS3WBNaJZs8dwW33toTop3NnR9QKoqPuxFz5AUTKF6TtXX1KTmZT",
  "key40": "2qfVoHMKFj3w3F9ECnyqzUXkqxAfP8MZnwTf98xf5vhbuRPEg5HRQhnYvPu3DMwd4mC21bb5WG2QykRLT1d9xFCK",
  "key41": "5jyaeuu33VGc9EqoECP9qzaTML4unhMA7sqXS7BMh6dr6PoSmZSHw1ewZFNqde76BTxHLMEADstbAsL8A2FUTain"
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
