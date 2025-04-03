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
    "5o5Z4KtyTk4czXk1g8LDN1LWgx6tX7VnegHaDjM9bdrhQxvBDdFpg49j1cvCdjf54G8VgoM5f92jGCtwhAATPKzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6VeNkGPVrNV2jXJKxquqVxNpEKxH6nyXdux8DVDCVi1PhgqUfVWgo8zZioSk26NCmg6rkNBe7B42kp6FB2hct4",
  "key1": "29TYjYfv4dwV5NRnPL4AfBbY8JBcMJHkLHrhrwVdf6r9fKjtBNV9FcUjkYBSLcVLBSLVYCZSucUCKfLBwfjwsQgn",
  "key2": "3B8xN5q27nUp6ajEKEkHqhxEji3v4xqyp7g8FdYtvuMkaMQs4inSb62aoy3YBrQ6w4BkPp3DRemqXdKFCGXrbPn7",
  "key3": "5oTXrbAdkVjFC8kN5yzUL39PXEhajNmfBCrqgdGtprneTVrHQsUDAyDdXYFDLfhtv52g9zFZEvizzmw4tpbKLctr",
  "key4": "3frSShxJkJVt58RrgSfXT3YXcqSrVFCwYdF1kCUqmH5NzBTLTemhJ2CSLMhrEWnpR6k2BgBa8n7rfGq91ttku3Hn",
  "key5": "5ZwfbCtwLLEBryD951ibBDDFt3VVPDvAMEruePoUG8gUqc6ATgRmT2uNwgcGqkivr2T67THgd1sZrKA5epwHNEVz",
  "key6": "3uFPFxVP7bavkKCKnUtHi6D1FUhLL3MUYtuvDPRGCyewRgE4zu5nf4sziT1zaWkUJrXCnBFQ59eQztXffX5unXZT",
  "key7": "4in1tASfHa2noNA6zti751VvsevZTmmT4tEqvmAveLSuyPDX2JL2DLrhoVyHcc3eEnXjBL53ZSa5cv8wbLWSWqYp",
  "key8": "29gzUSAhVshCr4f3VVZGr8NCb2VKnc6csxGvJu4BYP1pvjPksX5gRzVBHPHK6kdaz5DztbnUMTFiALaFzHE6vtNf",
  "key9": "5ynT4EQWXuGAHR4fhrN1swiEqeYSjRB77VXidSDWYeCkHPPhRwZoXMZyBNr83twJu97cmVChYVp7C9hyBgCXwdAf",
  "key10": "3FCyyiK6kxutvjgQs5avnddjXPXbCy33UG46XFd1PoEH4tmQRSrHGQZsj4nrLK5cdQiCuZz5ZxFroorxy6Bdm9Dw",
  "key11": "2X3TFBfCddtG9hyhSVwSge1K4g5CuE3a6kd2LnJeS9bgucpr9KRHM9f4cpQ1jqEPP6PcPZepPDv6Am63DgtpRuSP",
  "key12": "64unn27FfcfpozTsWYQALWDM3fLHDEKBDHBbYvKG86KAEDYJmE4fqFoqG61yPJ5JWMMeyXyp58f4KqNx8wz2zGoB",
  "key13": "5ABWY9j4pccwXtmTxgfku7ZAfpv7vod6hjDXpEofnf6USUhpzo1mJ9QYFVrRtLAANgGXQA8xYmcQMjcarL2fWbgz",
  "key14": "38yvGUfFTMAUP5u7kSHGmv3YsEzp3CRaVKW6GZkrswPFnM9miCUXWrchZPr22C46t6WSZ4GVf9AreSHmP72k7GRR",
  "key15": "2tt2WGkvSwGvbkfhTYV4SRReDHrfvyCbAcwey6zdT5FJVmSgokvhQGLq1AbAbqULHjBqLNXYULZiPAQgoZDarzN1",
  "key16": "54Uy7meDZJXJ984i6qmrCtAC9U3HKaFX9JcpGouBCpgc79AeG1v5CdtxwkKzerNfwzkC8R3FLJTv9vSZPUTjEQMG",
  "key17": "GVfg3r5v7X9fiWsaJF7CkM8TzCVxKkcHkcsuQg1L5iXtHtRV4HTkaiNCTP8uT5JpEkHEY37MM7hVbrMAnHWMXNN",
  "key18": "4cWdPytbRowjJyKJAP2YVNsKQMQ1fUr6FrtdUF7LHz1q95T3YVLMSpA5mdKXcwGhoojepzEAeqrnZ5FdVogoR8gb",
  "key19": "4nPUWjrTASDhRfsvx7EJYmu8PUFtMJo5sBWvkZcT2A2s6f3reKcELEyS7coTD9k6AUzxhDrGix8UP2J6zMvUo7bY",
  "key20": "4N3mNKRDDdn2CYnJpcGqmEBGq2dmdbu5ogyjBz1TBSM4KVhUkR8VitJr76TqENET2PzZeSLmEn3LVP1G5BuN8jPd",
  "key21": "3GTogviEk2r4rnX4oWvZZdVLXZhr2uefutt6EXDwW4o72rxJdzDX3h7BozLpYKhWvYnsRYYyZBvDjUZnAKvisY7m",
  "key22": "4SNNNrXa331Cmxcg9U79npjzci2285HXvgpCcofr2uUpkFDYzvhGA8DokRKucnZKgvXcCmr5ckGDab5Zx5kjdJi9",
  "key23": "2thAqL3hCda1CKKZ3EhVmQv5SzchfuUVbYE7GodwxeZnw3Lb6Agm4AhjUiM1C5qPYRHCTidge5vs4suor6e1AMxK",
  "key24": "4CD9JjH5tMh4eDiw3ZtiS1XS7uWiPLVmpB6mgLyd69LMn3a9RQqe7Y46zE5grMPRdZ2qRdciUAVz2XtgucizaX5r"
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
