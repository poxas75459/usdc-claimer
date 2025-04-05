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
    "4Sue3wXnR9ZD9WCaD5p4p2CRcWxeZj1kRk2gspkCzDUqGtd9tmZ6WAuNi4x68Q7TqnhtKpXebVm3BB198zVDZv2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxsGyHLXsCfh84HgqhwGErpStveVDy6oV8BVtLXniECJx5spb2Yduir17rxBhU9ZgGci98Rcf2gUvqgPMcLarQf",
  "key1": "5cmRcAx6s4khSmtGGazSitELwCpURgni6XEqPqjYGLxq72MVRRhYC26qouA2wrBw69De6b8tEPMgEyN9V3NF27ej",
  "key2": "gDUG1Yednk92JopP3TaPfVnwbC6BFEFdTJQVQKxocaJ9WY9iayy7qUjYkPBnDWLjq47CxhdgaCuKbhUg3oYW6EC",
  "key3": "4HmHYW5BR5r1etvwM7HeJ4iAwGvkoSSobeqRTqtGAMLDaJHcYxN4LCvARybM6bCR1LbWKvpLdqWxPYDomb8duSMQ",
  "key4": "2iZr1qjTj7gA3EaaXwE5ztUJDfu4qUHSa7NHBZxBmRw39PL5fwDZ3nPqz1YG6Gwp7Vu9XuydUaVKkW4iL3YorG7X",
  "key5": "3LdgWaEQSWwazgqFiMZBLWgAfgHC3DGJPzehQNZWtymWYg49TnVVGxK5bw4seM9iQpXNPfg8J8kDM4xYLt1vfcBM",
  "key6": "ipsZbDNkn8aQUXvtDBhAndvLTeuJxPSWjYrqZ3u6FGdUicoyeEZRWF7s4eQrDMZtnVQGtLYwVfKt2BWnU5xJCnu",
  "key7": "4KVhRFnHc7ArKg8r1UMMSAJTeRUggXzp6n2n9FM2JYWjCsTW87wWLG2aJwqdDHEzd73B97Q8GfsJrAgKTUwoHpsy",
  "key8": "5rSDhbdjcG5fWBTZ5EhXt9kHCpXdYNzLkKcNzfdseDN7QP3Tu51xU8bDfdqyRwRwcz3dgrTBBQQrrX8phQ1UAwqQ",
  "key9": "4dkMDh8NFeNd1ZEhTsjSSbA6UpTLCk7tHHpqDBoTb2jsdxFhS1tH4VJ9Hj2NvjPwuR9LZEViDuLctRWfogg8ywfv",
  "key10": "2ATiVfKjnuayDYhf9nneaUtqLhnBQqAvXDcEYy7AotU6SjsYqekY9Tm71tkr8EU6M8eS5hZ3Ms1vR71CUY5WDG39",
  "key11": "3ecy3GZWmNzr2wirY2Uz2Wc3SvKf5KqpY81EBy5L24vtvQZUxTa6Z7jZqFc7oMKjcXdgVsc8i9dVYe8TvFCp5ieK",
  "key12": "2iax1ksWrNsykLUxuvj8HBLbfEW7dxhJoyAAYrAeTKdeVdZw3cfXgis4XJL2Z5RgzDGLMbXXMpXXWnGszh34vCjh",
  "key13": "5Mvi5Q9xHVCWjmdKZTfFJyftCZEdsKm9V2AdGU3MwLvAXV9qUDAnAuLQPGhDE7c5umpPaXSSZiRQ2G5u6ajcWGoM",
  "key14": "2kPQxcao3GpFXA22bfvgkxT6CLeFofoNqRPSFx2kFuVTutwH3s4VAp2q8cCFWvkNXn5NtiF3Cj1Mea8xdx8Dch4c",
  "key15": "2pQaUpM9ybE7RSzouPjiw7rBhoLfeZpSy2EctxVdXF46QnGW6zzScuVn2FBAzcV9LvjxrDZ1nyAPEMcFiwhXY1Vb",
  "key16": "2K9FSYhmGha7cy9q6j9r4MJJciRsDjmbtVCGuqsZVY2HRy95HZdZNriH4wpbi9NYZexU1E8YEA1Uk3UDrwRKamxP",
  "key17": "adhyGXnZjCeczjG6onjsJbmbA1qZk6Qcxy4d3z7VeiLPsvvLPfYAD4ybvdKtPDGXPkp3x6qLegeBx7qYzGnwifA",
  "key18": "2btQjpAoWpciC5UpzTb8EPyzfpgpSf9CQA2QrXQ45xb3psqj2TnHHsMGS51gUEHY2PKAjRPVTLCiPU85CT6cN4D7",
  "key19": "PKqpxPqw7KuPGw5Xj4UFjKSmGUV5sfTFwrDCYNgHQbDddquaTHfgUFfmVi5sC3tZHCohmWDbCcpMEoULXm1tQiE",
  "key20": "2AQ1d9jMS89nhfwaPdzCa7w3h25HsFB6zszUZN2gjruAcoBhJoVx8C2D96JZPD1XzupAk1W5vHGLVH7tndTTfeb2",
  "key21": "43usJ8jf8KdZyd2AnJnweA7KAY5doAniKV9FySDfLdzdhqGQawseMfGDUPBeHGTa2xPvQuXgSoxdoXRRSScCYWo7",
  "key22": "3NTzxm7CnvueDTdb1pe6L3EtEyEvmvMv7rvRdvYY1qtAq4xoqZ7whM5zdK6wqBX7RcANzcW1veVnQGqskTyLXXqo",
  "key23": "3UrULag57vYW88XaGHWEBeCqN1p6D3MpMYWmcxhk1rkyK4vgUbh2x4EjmPLDmMJAtcwPimdxyCfri4CddbREvW1S",
  "key24": "2AiUGpF2ivyxNqFeveJXrgpKYpzouPUquRSBRpqSoFpDubWNsFfGnH23n9gy9rYMKmodCtf6LZuYc4eCS6ZwpLgf",
  "key25": "2wuvcpQYc4gUxL5CSFvz1k6NaVF36i1of4WCaRxV4yrF2ADqdmw6bBHPuFCKESFLJpjgjYEhZBUzqYyfQupV9ehb",
  "key26": "4aqaVBGnmBPxWVGv4FYwnq54vyGhT3Niu1PbWnkCrwTPoyKdFwq1iStPXzmAJoADoD5eKkGvobFrFJaZ4zCR2fK2",
  "key27": "4cMKni5GbAPsXazSN9WjywjpVJCi92FcjC8D54tP9kYeLi3hL65LQ5Ldi6WAQyCBSY4ZJUsfK23ARouTjzL4Yf7j"
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
