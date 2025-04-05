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
    "2jCwVCVmg1VH2XZS83SzqD5CZRPzZgvnXqCcCTS73bcAZ1CyCaKh1n9qjLBAPCfyRpr3Yfr3LApxd2ChzBpdCPbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmxJF968mC4qw3KY7X7p4FqAA6o4XdzC2YEejKH5RaJq5DCh3QTyJG7B6JFYz6fJDRwo9CCGwh9VyzZWHAmMKNP",
  "key1": "3D8rw3Avq1mp3TkTFcgAvSeoUTSSZaDauGkmfnRT7Dzjpg8o5Au7VZ4LKyG83uFuCnEo8ofgAgkX5WEXqxraMZSv",
  "key2": "bp4JZ8m3DcEAq39hv8hcmX5Zo74eevvk2fXCf6LnMBcSDndVrtewuMhzcWhkHyidNRYiwjtip7oorF5bD82dQj5",
  "key3": "43xALfGPzTn1921PZ7nM4UrL1DwURHmMXxgxu8gwJf1ZG3DP7iENSwYMsFeDHAcPeisXCGGFDVb7yrZcF6CQeVtu",
  "key4": "469ptzEC3ahorHMZT1tscz1ryo24uCpcWgaQoxouhV5UY3xK62GdpkkFe9G3rz2i3piDNPnefR4xjDNxUWtaNXFg",
  "key5": "3CLMm5c3VoaB3HqYBL8advWHHwkA2ujwZja4Nifp6A9YVma7pBKusqBHG5ookCRXGxFNRCWMFQ8BGAG67mptJPnv",
  "key6": "58L8qfTH9JRsGwsSMFHY4V9UAvXTr9dctbHNfS8snKoYncMB2fFRxmPL9tVgDps92sZFnhhtpMoAqDk8aprMzFW3",
  "key7": "3WFzuS2o3KGHpJCTXyC3mBJqQxnSVCoxSuCW8tFVZD3dvxchSFxVUii5kufw8c2HZ7bn5t2aseL5Ar7JXiP5e1Ev",
  "key8": "2wk1FxdjbxYthqCS9QrUopNc6mgcvc5ZPnc7EZHbbNCGggsqP7kXWkV3Tsz1wmg8uAEW9Fb4giiDXPWWLe9WvkXj",
  "key9": "4qwb3qS6uSHnjaxSAKbLYHozQwu71LFMSUJsxJoLRhUPYf52ah1gggQrRxrquWju7x4Vtmp4NDQTPdLC6CKAvXzD",
  "key10": "waFytrwJ4NurTdkYQo4zqTBMFc8akx22sxk6AdDYExBckWyjAUfffK261RXfrUpnnnin1ias4TU69vUq3NkC4aM",
  "key11": "356G2yu4X4YGbeGD3PnXe5AugDHscTLk3jLSM4MeH1W1jf9tWVVdjmUq3DTu6nn3L2ARPnh1mvCPSzYk61NNp4rD",
  "key12": "4QJzw4HmobKMxJxqFAV9PRyQXytPkK8rxLrJsFDHgmz7fwUSAUUzThoik3fAH8TB9zBSVLuR1JVXCg9DnYQvib1U",
  "key13": "2wQwSiBeBfsAeLHmKXWsa8WhTCsUDmZeSJb6us2T5Kn16FVyjzjrEKsUD8tj1pAmv4PC1MCmKR93Z8xD2A7CBD4D",
  "key14": "aSx2FrqUDZpCP5AZ2DC46FYJfm24BU2yywzJXQrd5txXp5AaNVkbCziad42QfJri31wrd79Qnpy6GMf9bmLZdmr",
  "key15": "NpGUsHXndRMQ4dUzjow6N34wzjxyaVxaY46QMN9kjhQM164wMwB8aZ12SQZdocoPpmV6jZKeCEr5UxBhqtMQXLr",
  "key16": "4XBGeNMUKgVE8oeC19SMEnVAutH6o1zfwN78r1Wuut4RbMt4qkuJA4PXtvk3X94BdkiBJujZ5WBkZWdLmeTusqXc",
  "key17": "2EJ4FwpZMnhV5dx8mNc2JecQKjQxmkNJ3Weesnoo4nj1hpahQSNxFX6ARoKRyTdBfHD4YzN7WXMeqxXnKFPbYan6",
  "key18": "3yDc33kRLsovoCDWmaZaResBEpZtk7bKMe651uMY3xVKu2gAMkURNAJ83zaA1rwJXggbXtSGDYWRbToSZY595pgo",
  "key19": "56W5Rg8ufEoS5pDe5saVshVQEEMNtdGUpnUxVsy6JTY5mWATQgRLJkwLeViEqA7hyaLTZ99RaWhaAAwMYGZL5uYs",
  "key20": "1QrbgEFApxJf86UJLseAAa8qAEZQXMLqceiJnd7tvmeqLVqgXW82ifUxytNMop6E62rBzRBLJWR8BC5a3FCPcHv",
  "key21": "5XN8mvnvcZqv4Eb3mED8dfhd32mcB9jwhpZ2o8KEGc1AX9chM4JsSDC6fgECs5Ji4Aupvu1Wz3P4G2Yh9ALosMax",
  "key22": "3AvtYCbUZqAVdL1qVaF8HJNPFCsmwM6kWFZmBBSrwHmw1Wd6dU4skpe8Adk425TwFePc2mk1KFi718MoF2doNCyj",
  "key23": "31dAxvrrCRGFiLS8iVM54hLCXbzxVtynuyqkNz9EkHmYh2brNu74T62eAdGwiFxLD7xRubsg8aFF3jFt7nQeRYA3",
  "key24": "5SLBPrstP5f6QNKpYhPpTHhKPVETPbkBDu6whYbYFUFQ6u9q6ToYUMnkQFAYtpowjDu8Qs8V8J4xgUCYdaYfzhK4",
  "key25": "64jmjwSB5czmpnVaxkzgUNJLEsGkSD4ubTYNe9usYhRDZ5Gxk6dLjZ2ZSBE13xTtmzRTk5NHJkXSfUPvPJHw8QsZ",
  "key26": "32qhdxXCQpcU6hwKy6Fh1RN13P3hUwbFcS6w3uuv2QsPw4LDH3mjL9SyhWRcP9t7wYKFzCfAc6V4kxsAKBEDEgX2",
  "key27": "2b8vEcYsxkcETyZs5aFc1uVLezPKEbvWMQGrsx5E4ULih8umAtz3xZuWtjqpYf42dNd8dY6Cx2dTqbqsHCiZpewK",
  "key28": "Ba4k7azJvftUtYk9rVzz6fDCPH66d279gmK2S3SFpRYfE7cvxbZSZpALB32UXc6Ye91eMRbiyXnzmfp8Cx1Y2xg",
  "key29": "2kb83UxtCVk5cE89vSJiymakEmtNm8UYx2z8STU4Rbu38pJbxcvKuFuuAJuHtSvsn8XXLxoCHHszxKm1vxNSMuCs",
  "key30": "4aPiWgC1oENC7pQF2oHnmAqtgEGNKAZaen1hBPPz6MqXC8UKRmL7frdgcXQkbutjw4cibRhVWZ3QTPQZBbbGgiBA",
  "key31": "25eb8FAFqPTreQZjGAuow94t2zmELGN31uui1WR78gphW4TaT6EYkSMgqyBV7UfXLBv71eG6DM8oGpbL38t5qrNU",
  "key32": "4g2k2ur9MpLcQJkZvtkibDkPRZc8ANSg55JPGUSwqViCFzz7obvuodpmMU9JRsYqfG5ZmapEmXrwchBmrDJtSFbt",
  "key33": "4ebU8FxRZc2fiRnA81SSBEtae2Zb4eASR4KEoNQh64xRv526jnU5NpLFkaq6nv54z8ouj3dFM7oXMMMat9wQDagn",
  "key34": "5Q8vSqrJmemh1nCfnCs4jdqsQdSz82apUzR9RdYy5PtYzUpMQVT4PN7Qh1LG93oJJAhjeQWDQaQZTiFNgqLPHQXH",
  "key35": "3rmNZ5QhitWEV6cb4i2xCBrHhG46eefuyynQ6kxnpSKoWsYfZxswVsaBuySWzZo1tri4YwrYgKCrxQn4pocBZHAk",
  "key36": "5j5weFZ3tVhx5D5EJvM6wfqk9YXCqMUbvTGmGCUVTGGk8FWnZEpjJEjDDTyQZ9qU5j5m86SwEkePdTx3A4DZqd9w",
  "key37": "63BJnVbe9tPqhbiAyznuoXU6gaWdQDMZpSPNxd1M6CfJbm55Hmc5j4ArA5uukePwgkaSLyNHMuHGYzutu4gAZZDx"
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
