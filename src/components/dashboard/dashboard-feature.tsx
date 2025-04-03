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
    "3sA1e6SPkkYdiPgrjZ3tpKLYdCYuPvQFUNob7GMinfcWn2rxztFMwuWoMqToVgBHNM4676cz8hqHpx1ViDhxfQy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgW51dBmdzBboZabZ8hDh3kWf6UbHRxPKHaFianBTp8uhpqeMhThBwAFTfwyrcGijduFd7T3b8PbvhUFXepTzd8",
  "key1": "5YmiQcpB7MzwZFjTKwfUvErUFvcsMQg1ySkXaz3esqeWMoj3MktRfy4KdMCzrxWVour86FW91zPwzKRVYVHkwqNo",
  "key2": "4NWVfpPQZtrBqLUUTbp14P75a6Fyub8eUkN8yP8NN3DAV3BmB31GPMLz3zw3ByuZeKGXTj22aVmEp3MXNZehYMzf",
  "key3": "2bMw3LPf9qFrNJwzaeXkYHukCnKJkb7LwET379pKW7MDfscAMCaoEDqF1dskBicDKArvdYVaZoGtRXTjczpdSWbP",
  "key4": "3LWw3PFJrMf91JkaRp12UMfzPSVngEZbA7XX2yZaQZ3gcCRdGxPyAybxn6y1ZjiE8Rjk3j6Umqt8J2vhULHABzNh",
  "key5": "3M3tvhDpK1e98LZ1f5od3b6VnzTBbeXqvhFZBAerzCwX6GEoMkgkZKHUzRXcBRA2vVnrdUSZgcEcYeyyP7gd837T",
  "key6": "53cyhe1S48hP6ocaNJ6wEmDro7EMiKtWMgZ1JsuMdAEP12H5CPny3bdaEUjN59fB8xDSpRnpKFkxSM8Td7jTxnWA",
  "key7": "3YCpp8yb68JtXAzgkq7Rzcf1QjRu3NS7ZfcNEzL3N4gcPqYALrzRc9wT6Ppe1NxTWAUwiezUBW8NDcF7VAZZcMnq",
  "key8": "5KcmfnVyQG8CyEumKEpFXmxocrLNMmWx2YT8dz1omwiy8EA26CTcMJuJopSsrWHW6vp3yFSMnRvk3Wwb5KzYEa2n",
  "key9": "5ApCtjRwGFQH48PPRFTNfxEjHa8evBUzeKYCwZPhfMYC1ApDPWDwCzJkTVArq8Q7jzZXUN4id9K679aqVZTccHox",
  "key10": "5ZXcwiFp53P9Q4LENssrpYsvS4aXnokRjGYcCpaYMt46UdSrXE8WvExs6tTpwyjQMTkxDzhs2wJq9RXVehacYSPy",
  "key11": "4zeWtqrdyQu2KcFz87xxaWi2hhoZJ8qCb7sVYoJFnbRdda25yYWr8BHQxKaLAWw8qrLucM4unDPYbA7uuaxcuZed",
  "key12": "32EVzrRKbhkveeMWiW6wFi6JqFvvDZLJ39VTsvMrbpemRmFXrJ4jxUT7Gzw8EsRm54jL4xcQ8uqCAfMsVitJa9Ln",
  "key13": "4kcsSpqaMzdpdetg2WRsY3CK6YjtpYmH5XhwzJvNDmAbwg92mQzwQ2qhVPAn3GpAMzYtGear6EEkMGgnvxVvnYxS",
  "key14": "3CKieW4qgqpGNAzJu4qmotFtg4GRKHH2xwY6sh47b5RfQLAH7eyHw58HmBTjusfuPt6GLQYUrbr5iSKioh5u9m8G",
  "key15": "5r6piuVuLCo7q7dqvDYfa9LxTSX7wtPJnWaD4W7yR3oimVfB66X6B2LjsnfYKDqBkGrrepjuWLLjBcjREgvV4w9c",
  "key16": "3n7qg1SoKLCqx8ZbWe4e7evJHJwVmBgGfThWkjCjW9GjHhm5YDnebRfjUux6P3uHDjmxASt4TCuabDDZWGiYMmZW",
  "key17": "4AXh5fY5s5gabH2k3WLvHKYd12fq91jM7PnXbiiASXuhRbDSgs6HYXcXHkVYd65F5bMhUwiCU9BoihA7SLab7xMj",
  "key18": "FfQE4yhHqg4mPVDAgu38RUhqUia7Hx57p8kevtepcZS7aeQHf67xj9xQc31MvVTgniWmZtDnmwxgLiLca8yszJH",
  "key19": "4yVnikBdwoHTQQWT2yyAsEfA3zDmC46t35v3EKSBvFsJpbq1tbsA7d1RxgSMUZ9Uy8jWCoA44DW4M4XVEEHACKSM",
  "key20": "36inLE1PmtvT1QZoPqxwfM2otLMQVrZKPQfCjEX2fYeRBBcv7YWxYahnATUNuByEvh7hmXPLKyYUD66EfzdyRRPQ",
  "key21": "359TNavGSPpnVfJLnwmtyPRqcRAthvTDXMpYaQU9o9Zz8oxYt1xEcCdseygBoiKjyZiZqsGJEPQAWogxC7ZQZ5iG",
  "key22": "3c21VdPc3wTMdFgqcBXBPBPmR3XgcMfcGEhk76a4RG7Pgc1dWm9VHhwRxWhb8rCXJxJeYBfMP9wcYg1B7eHPpgVL",
  "key23": "4L4sewHxCVGCMRhqTEvr8m2Ao4m3CRFygiAEJXeiwDh9XLMmtKRMXS67MiXwCgAfoxmyQWExfkUnd8yZgyzuRejJ",
  "key24": "4Bao7XJ49JpCUqr4FMJCxPBPHp5xYgnkXmnSjCzTyZ2JivprN2waVww93wV6wJwoGpLGYn5yc9pqU9XxJFxTP1Ex"
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
