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
    "2ZW1tXJnrFzkZB78SgiR8BiYbWd8nUB34RvQdZoG5ZH6BAkkdVr7yw6hdCzB6qWyuC2f32QgyphnXsSpKwgRGJp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "427WpqrdCv3dFcpU6iRKgdJZgJNzPuuMut2BPW3KfrTzRmWhcqCsbjW9vqrBM6Z7QqMubR5wMz5Vi2PpY2Vggwbn",
  "key1": "4cHjhzxjeyy6ZJLpqABKEWmV3gmabFE3uADYhiDPRX3dXdxRfnm3hy4JiCGfQ8gf7kEMDZpDGK6sQUkDHMsmGQUA",
  "key2": "CfmeGypQVuJjGBjHca8LqLzktytUG18XUCPrTFoqAXFhrVwhyTpSaD1Nm9gV71tNGDQb5pAF8dgGyRURcVRbihp",
  "key3": "2PXGF9qBMEYxin2HWFLUPP4V9u29HDAUY3HHxLzUKNMWXDaqaMqJgVmRaK6hgDXAAAPmnZYPNQxK4H7gUEwhy69a",
  "key4": "4D4LNiwmA6EfdXaEKGpmoMjDfJcrxvkk3zDgr8bTiWdtHqu2WpZhv9oWaKAY5xrHNJX3AmVsum8qhZygEFBFswoB",
  "key5": "2GnVPbRShxwkfrf7ac3j61ExYrgtmwnpUMqqG9u1ezxwhwnL2P6ZcRFkYfMBpeLnd1PQNwDUVdeftFKRAM1i2muW",
  "key6": "2K5ukyqz2hhbiZCVT68a7Kfvks7UjcCCUdTkWDJkQgBtWUYzhHKT8fgGoaV87y4vudEC7j9ZP6utaNysWMx78Ak5",
  "key7": "2neP8zpanRY5u9im9LtszJmqG1hJEx1pmmsomfN9hKY13ZV1VzWDSnc7vhdp3ReMuqa8FDzXKsbHvDPGRsi8vRRY",
  "key8": "5J4DMaB5T8RC9Yn3YfhiKZ447uv1zdofVXssNn7xukesvqyPpZDCvUCmihRhDKD4j2MoV8da4ccKroFa2awKRR5z",
  "key9": "3DRyLzPH9mAqriDmhbVtn9vjZ4BRYpbrearRZkGHFVFvfLJZYFjYAhLVH48DHWCX7jyEoWLXGzBstdZvUTAYcSC5",
  "key10": "2GNF8B31i84CDTMbA3wkEUar4w7KHzKT87EWVVxJEwwBpmYwqiqaZuxoNSUmwL8kd5CG7kGqwLo2BR8DZCE6dWYT",
  "key11": "5Ao7vH5uH6xgyKvZzz8AQGb3aWLW6pgszQn214WpC9B45oc5cMpdWCXz7e1dVrhwjQyNZfmwnZiY8faRUfvioZsg",
  "key12": "38Uf5zpvKk9k2XsdYjVGt7V2ym9Yr6QmPNCbZFNXQ7Wvz5i9tKYtxTq4fbeSw5PVfL8rMeiX6bqbAUo9Eo6d91kJ",
  "key13": "5iB1waYPhF2JryFhv8moj4hGwAaj5coJ8d8B3KdU9Lc648McGeH9tgqAVVrGjXDN1pezLtHnn4H8dT1gCb6dvdGr",
  "key14": "5nUXH6NyiFrpX7omHAiXz8McrZwwvi1YUCxs6BHjVZX13KjdM7LUKFD4XWkVtcpuNjPnirJDGTpQSqaBWJpzZeP8",
  "key15": "3YbPfhcHVfJGupBksjmfCwLsQr2vKMo1u1uhnAfzEwGuaX2njeQt3VBV2iYfHWZHUUcRh58kLfnJCUuimatxQNCY",
  "key16": "5q5CjmFUdHS9Gd48tfkxVGn357ge8d9dEjTagtVj1CN5WpyTVC4SJv13N2ucKmDsM233HjUk4iWTMkWH71x4ZJup",
  "key17": "2MFBcnkx4Fp2K5eFns6sDH6qRWa7W9C8PtNdYtypp7wCydpEW8hNmomXAoTYuq9mBXoWXBkwghLZveGSAUctpkzN",
  "key18": "4xvEY6YKV5vogm1zbJ9nWg7WMQp9CLZ9TUXXWqxQyfxBRxbpy9pfAwn6xore9fVEeLC5jSQPq9rNxrsgZs2AySdJ",
  "key19": "3rytc4eYGC8Kg149TerNr4PKKXpXnq2teiR4S9YCk6cyL2U6Sn8SbjGtegHHKQD5w4uqZGunh9C2cbwVbnKfG1AL",
  "key20": "5unDnB1oouzsr9hZyVsjMEHW5iBvF7Udo1MShS8QUzn8ZpuKXC2GnPR1YCWNUa1MsFHXW557TRkb57kuQyPr79EG",
  "key21": "23KyGBHwxACkKND32bFs2VPrbQA1cFw12CjAq6HFbqvaRNULrvNWZmm5pQWuLYDdR1wS5sp3zkjJe5LGzrzyQdY8",
  "key22": "3SBxb2deaNRQyCqr8TkTPbW5h77inEcfuL1HHzkLw1MsRLrg1P5JxkKYC7fb6WkZNfCTQkEDgG8yHKj3N1sS7LYa",
  "key23": "2JAMJsb2fbEoTkWga3dJvxvz5sBBU8ej2RCejqDtNYPb4GuQo8hX8kxmoeYqJ6bdBsgRw3Fahvvs3qowKfyHizrx",
  "key24": "41QYzVoZ1pA3G35Fy7MuK8DmHafmeNzhg97HQFbtRDAFFi8Qqyxb7orDiZD7VzojZNTAGPgzkM5KX3CGmY3tbD33",
  "key25": "4RCBoY4xKP7hdGyjgKHWwoNFhn8PE1JhoHxid2HngfmTgkDXujwgnxPnEPXExxBoY8pJT5pycSPUj3mZzSS7Lqhh",
  "key26": "fnazqPcZAP1ngw8iwNfQvcN7G8na2jciU9sBxh91o2CkZe7RhyoUbRZ2jEx7hwYzx7yr64yR6Ea9aYFJE8gCDv6",
  "key27": "MX7CQfjMfUjFG14boDcXyZDRcXZKCPYLskAAfkYyTpsLRxE2gRgQFBP4AiGAbUKtwYgPMw1HkzLN6FcBfcEqnKo",
  "key28": "4tJJggDew4r6C1Cb1eCJBz5yGiHQESL6p6hgz8LiabSez7ae66iMqexdUkfmStF4ERFg6eodY3hFTef9BYNzu6V5",
  "key29": "5kXwXartetpucSCiuVFj1XX2PHqbSkWJnWFsaZaNFLdCzTJwvsqQqwxY7fnLMnWyAUgCPsvQFWtanQnjToG3zfmQ",
  "key30": "3WQ81grqRqSoGcCMgdUGYZ2FbWBj86KHDRPhjqEqSBKoGVPKEhwwhKCfcmhkWmrVQG3zc2miFwPubfcBgxtgtSeH",
  "key31": "5zZcVR33ginQb8gJUxPKFaNjaSqmAsVLPrSdU1LqXUdr1aZ1rorsgwuxQSyHepeL1KpLbzF4ycPakdwLFx41nF9j",
  "key32": "6ASm7ahbNUYKsjx5Z1Gouu5tfvVTbDbm8SeQ6TAQ68moSuEUUGS9jaBLKcYywdH95NVz8pJL9LHj94rGRLpHH5T",
  "key33": "2nkPGkK54aFEJhg2SxwNLFJ2bS5NRirY2ebxb6tXHqNp94XiMYKTxZ7u5s4eLXzGyAWnhSmapphb79Fpxyb7hnJb",
  "key34": "32rRoCXgCJW3nvLmf9JMKyyQSf2RshzXeUQ4JbAAVjCjD8vsnryhQVfxA6CEPHREhjyW4dQV8doZgxSyNNUQcmnc",
  "key35": "MxVWtgc8kTbXemXa8Wn1oowb4zSUt9zdrCVNVNiYXtcDHjn9aAPtBUS6Xe4uQbEZ7U2e44tyjkcJSvzpLw7Axa8",
  "key36": "4FR6U8x5mkfiZrZtucWfvEkEvjjxjsTRDY68FbN7G2JqDafEsS8nDsGriQ7pL7xu6WG9tjigSfJxAyVYHrjxRGSP",
  "key37": "UVZyWdVGdN2msMVi3K6wqdZjUixM4QvvYa1V2jnHu6BQPH8BYkr7SzBRpFvPBfcems8NGVqKWGE4K4hhzJVN9vx"
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
