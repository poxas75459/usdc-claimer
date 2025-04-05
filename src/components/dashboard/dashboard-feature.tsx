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
    "ijTGe1kShGhGXCFLn38EDA7wNht43QYeGWySyFdAfiafCgyUBGbCXseK9YiUjKD5JuotrC7BrxoSH78iqzG4HqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQdihmmGcfnY2C2cf3q2r9FJJJLU6KPhhL2Ezp93BZXGa1fSHvZ6F21WRaCt3PLbzDRzyrMEb6sC3GcK14CrTzJ",
  "key1": "33k9CdxVHZ81Z34RxTfyH1mnhBGEzj33Uj3Q8iycVx9ZXn6edigzXd8TRVdVrVzh4Wpi3DcrSw2ExaRr1BTpyRQs",
  "key2": "6ayn4DFPAPe8FLnnUhm3HbPSXfdhBv8NYVXBhuJmWkqpz6uCKadKHtaWLykvJQbMXeTLXUZdNJkWpwE9fJuVRdT",
  "key3": "3C4hCX3PQrWti6KvJi7yP3LGMiJgV9m5RWqd9RySgNRqzFsFFVYieYvwGV8mDUkfxxrdsTH1byJKb74udFsUju5w",
  "key4": "5ggDz5WeuR5331ccsqEvU53GHdMJpE9JZcATZz2LHVryw7MZJpmG2QroW1Jp5ANLPvzCfehQ2AhDcnaLLjKL1og2",
  "key5": "44hZ5bEVKcVqoGAb5GuKucDsK8uPcchTrtwSvxd8q5FdGqSBM6Z3vz3ku98VCE9eURV67j2PSF9uExJzpujBg83V",
  "key6": "2S4hq7xYbcugEjYFYFMjvhG9LXKF7J6E8WXpAaciAgmpqd67MKB2GoyhNHgvsvNWTkEgPWNs4VuqDkBzi6M7LkoU",
  "key7": "2SnrW4XFoBHV2KKfQXZrtD5M5pDpKC4h6eR2NZpTSV7uz1GN2F66DiCF6hDovhqb6nDoha3mwEtzumZdeYLwzFti",
  "key8": "4opoMaQbZn2ydPbVomdjVhyHnZVjpvupv9twNWDz2GXEGMZ8PTBhi9roZK9HhKpFMGk4sKqVNJVP6z6U6nFkbvtb",
  "key9": "5ei3Vy8fdDZj2MpHeyW6DZv4eZ7KZEvygjSpNpkTK3RTrA3JKZFFVcZxfrU4UQVQKYp5fpZ7CVLSnoHpoqDZ3zsD",
  "key10": "4aGs12ED6XJAQ6Xrb1Wd7TxmGh1k1gmed4Jp9RfwEdLsij5VAUsuXibkJAsnvsXdkhfsQfQF2CfwjsKGLbEjAx8T",
  "key11": "ar3tqhsgKSByQucQEF3UTEkdUycj2YRPvosbF9niNuXjCjswqSa4CF1iqLN1DNQg6hBdQN3iBAAHVCntBrWdNci",
  "key12": "2rr6fNzqVAU9neDnsWDcNnpLoxi3k4XpUsNQtGKFu8C8MSGbofoiXeJMFtEJWbNBRqNgfpRiaZ9qmcYV5c1vP6cp",
  "key13": "3312vA5SHPLBd3aUwvgS1FXanWY5uUN2G3sPUhMfUTuKSdCtAGmjuRjKCmQFbJH36vvXDQxezC1TUu2TiNj5P57s",
  "key14": "HWPz9xdjMSTz1to7hYFEXs1D1wpAPtLbvocaFY6TxwiUQbBU3ztsyid9dee4sVgv58p6viSfAVkatzXzD1qfmyc",
  "key15": "4E4cZS3wda7AihkiDMGHSgfLC1hYDdFVGGqnaMiRESQ41ybqh3YNSGfYbbVJZHmZ2ASu3vnPumRVJa46GkrEpbHn",
  "key16": "4QrJYyZyKN9KMAuECsW7wDGp94GJppnGwvoM3qPGRFSyDktHDPLwi1bQ8G8Yzkw2E7EH5PdouS9M5joDdEWER6Ln",
  "key17": "4MEiYagYws3jD8xnQCAew8oAQPVgcUQenGXr1REuNUTWPRgbfUxK5KCNtauRiRaVTcBUf8wPJ34PRGyJhegW2G5h",
  "key18": "3Xp7W7xkmamqegQGdtpXuBY27gqtkPpXNfCFsEdZsvngCqzoYgjmwAUBfUQVLwEnLgP9CmYBHjiQsEVnM1KFH1Pc",
  "key19": "4twvAL2hsJ5VarkL2ehs4YkVTrB84foboPnGaWiGNzZKMtucUop6XXB2xCW2v1yFBDD87c2QNS8WvacJtvnnFkAV",
  "key20": "5nGgxSWEozpc7p3r2ucq345puk5Tc8xtxX5Gqa5goFukMn2GTN2AG1QDv8T1JAbLq9FoVmu1NESGpzrfkrYGreKM",
  "key21": "5xjFzu9SLnmRC4o7uf3nVWPxmgdfipcbfm6bx7rX7h6SAiJqLNxGVXqmKhjLSYg6naFjL67arEYMTq69VCQWypkD",
  "key22": "5uNPqvqkDpFgJZE5odScLtyUbofFG5nSZMdzFiMM9vQ6gNE4MqGHMbag1SgRT2RHtBE9tmYN6fVWehHRAGbkLZwk",
  "key23": "5zrzm5QVGgq7sqHvD6CCfhaZ2zCgNMm1v4R5srA6h75ZHes5mrr5uMtHpobpeSReWwTP1nZTpdLLjNNxZnmxz3Lq",
  "key24": "5ecrDbLZ7BaXQUvNyqxLgWjPqciFKkKY5pHGZExC12A239YN2CnFhBPnzzwogNHPjVj5ijSkDq5cuW2v3pzy2vZg",
  "key25": "2XsFVQV1VUwEGdFMMqaxiPZ3jt4nCSqNhSk7eWrHbsGvKFsQMHUU542QZTfvSrzDMifQi8cSLgjv32KSJ4CUPvYe",
  "key26": "4JhLgacqHhq9NyPKVWVigkBxtwSGrumpTJve8kHJcbadqomrex1JcdyruxoA3Wheg9Do5ozhFcpvjtL8M7WazWBa",
  "key27": "2JMZ3zvJGijHPQoFFoMeJpBVPJ3vvgF9QWaFjbQhgo6CDTmHZYbPZKCxjgpaiC6wKx2yWm4T1mtTVgFEYuaYxYVZ",
  "key28": "4QmLNpMMiWJ72geyVxdYgtKQnFrdNQAsFeY2mNRF8roxtVjdsxP159HB2RgLDuwTkWPNu24z1zAw2z8X7kCCc6uj",
  "key29": "2MM7Djyd1cA1JJP9HfUHMYZo8EjUp3uCkHw8WA1TAiAMDtb5TbZFFcsZ32whHfLsVg2Jof6uXS75hHyomggAfBg4"
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
