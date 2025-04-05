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
    "5Kx8Csyrasqn3crTjqrcUr9B6AQaNLrk2qnWQ62HDPJKL7uG6J7Yrx2ieSrG6HFGC9oC5pFpYiUYjo6W9Wm4x7iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XyjesXdPokKvBYXPhtc3ZahmN9bUyJfz4zDyZrcGhtY3yKjcLndhktXwBgXfLsxE1GSFmVFiAjxLR7LHLHv7wK1",
  "key1": "3e4hGHAHHZqmeMN6WqCPkZe46mTAfqCKtZY5ZoBJrE3vodvNaT1LG3i7o8hwAKkjRqpz6viFJCtyWjE6Xh8AD4KZ",
  "key2": "4FwEMNCZvSBFtYSPdvYJZCLyYRPYCXiYCcznYuTx1Xa1eiV7S3UQjXFSTV5ieXUdyMPFKqQ1ELXrumKvHfoC3wdB",
  "key3": "vim1tkQ2ZEdiADc581dYDX3vLoSx2XaN4sNtesJ3VevZsLG3FHZ5TJ6wS9e39mu1e4HXgpTf2CLGxDFYcJL9qF2",
  "key4": "4D3CpktW1C1VepCjDsVLCQt8fLMviibM24457yyKB3DhEgcTriKwrGpsCjuNt6W8achd6SxfuxajcXEmxH4vWJNx",
  "key5": "Z3sdRt7Nriish8bQ3GJMrt2UnBptkqLB5S1M8bPggZ8KZwHc4cgZHJZCFHQWFapqoRezZorcKYdEph75keXhLim",
  "key6": "2vUn4ocbK6fZpJva8wDcLFBXAyzrJy8eU6zipKCTeooNqV9CdsvaqdWpprByort2nTAfw1tDucvmvZbTknGQ6SCB",
  "key7": "3MtC6Ju49YmFLskGnvPV5xc5ooAhREQezgZYnECpSmGd3tD9ZXRdVejkf26xz1p1D6h36fEPoEURVcvzj8o5sBRo",
  "key8": "4ZFf9xf6peDHdpKrS9xNy3U2JT1GizP3pLXM58D9AFXA1bTg8KNe6NodBF3osrNU1CG2nkVHndMDUVqVkUmSL2am",
  "key9": "3AQDQNxG5cC3DJ8USBRNtf9jjJq9JyTbpcrBjc17eEajjAwi4xSfBCPzgbBoGbQV4ELzxcTqhM26LtQp2GETMaGF",
  "key10": "3A8NxVNnPRdJgVvFH7Atbh4hWSLmD3fcRL39zrQBHjzk6cdZQQxuCPmYEmgktpiU9yabD3SQnRBtGrLADxsKVc5X",
  "key11": "5RwPBqKL1A2wzoHgfWFWXZ7pkLPef7SomidjJMbJMrxxeMeKTTrhFsYn4sWjkq5HzPn5oNgLsfh9CNMt24L24Ahh",
  "key12": "5weUs2aNSfVJ5Ntq6V14BunPksyLBz5p9TBn3WiurhxJyPbotUwvk33gy3Qkp8hss1UnLcVgSpswYQZKXDFYupdJ",
  "key13": "5cm1KtdjfGeTY2TVwAUT5WnP3CyHcRUsCo1M81VxEGpF9PSdFJSGU88Xegy4FX1kL9YFFMtheD24GgoTPRtj9g93",
  "key14": "41SCzRHRZSiiqZ313GVBCKTHxN8r89ncDRhhxwHZkXe7a6PzZaN1VxLUc5oDLEPq32m2D4uTFqPTBUZKhKEVUUEJ",
  "key15": "z362ekdMajbnd4Y72PRNDY7cLv4TCHxBscS6gPqEv2xsHK4rZGPffyUtWkKt5X5zZbxypC2VbCTkA7urRCFNe7o",
  "key16": "3vBXY1V3VaNqpDBk44r9D6YqZU1aUjrLKXsrJzXPr9hoqPCUyH8GDFVFREqRpKiNrMhYR91BKKSRuT1geYeHtbQo",
  "key17": "37XkHcFTZBfoS3jnCv2e8AUTAFSmyzp1jXeMxYenix4kkyg4HqHrDMHzVtvKeG86anWycxfnLSSYWT33zJsF48E7",
  "key18": "474kwP64sue9tCkFVyTpk7CLcoUm2UH3zyg2Q7uKJrXoi1NPg4YBZkDGVzjFJUsSQDN2xCLEZWxFXvH6WYHEfFWB",
  "key19": "89YKCapAh4FQRg1GcEi18YVQmenY13KeBejmRc7ggHWZBwM2uekF9jcTfoQ3AFVW4KCTRLBzFDTDnX7boBzs6dD",
  "key20": "3yqS4Dxz7hURsqLAByW7uRdhpCYxHzPbrjbHNRBnpvLxgxQvuNo2cnnd9r4ezjgpDcxRz7Q2mohTjDZ96jVCeEfG",
  "key21": "zN1y6DzaBSjcMJNEvz5XFsuRFm8yiBv7CeEKkPZptr2MMeUdcTaRdatVs3B9uDZmkQYaUnehNg4vKBgSa6hsYe6",
  "key22": "UE8huqCYn5HbRWztt11mVajyJZL8zdfUucDAwDtidS8BJ48wCVFe3jmWJ8o8EH7h6Fctz8LuZ6fHBzCsSpWHzum",
  "key23": "657AeTXn6WkjWeQjfDPJLgoFGAnxhPAS8ZQeQDSg3RsgenbXni9324brsDxyX85iko481bUDdtZ4dxGab3sriKju",
  "key24": "2VAnfKRmxY8mRTA7kNxnL4QATbCfCi2MUB7ukcejxJ9Tt6Z5gfGrVvYwHQ5RVu4N7NbvJYS7tCxAN3nYkwX72gR3"
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
