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
    "5ybxHe1RqQg4kAudxB8ypHfSzGKRnLurZupQYPEHkwZ2urEKqTWkBfbA9GvwZ4QAeNArE8U1YYUnBQgp4i8Zyvn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjVSLVYbjaBLze4yowTZiM76u4rACaSsurivCVKGsgk9pU2MqBVhqdtzvSehEjzBDnhGgCqmMJGLuMaL3MTktAE",
  "key1": "zxsXXeP856AhUSzJMEweqfhCmeZ73yEgSLTCEtHAC1eNuhADG6m1kGXMExtkJycMF569EGz3nrooVFUts8nJFNM",
  "key2": "344G96uogKAm7jddXBTKUF673S1ntJQzWGaFca8TePHfXpqWsQhYvYxVjNpzrPshe9RuzpHEwYQ9V9fL1cD6DFY4",
  "key3": "4hpesGJqWhtT564BrUMoHqyiHRZsbdGQjmxp8t8KANwXcvjQabHx1g2tsG8az37pNWqK9L25RitsznA7xu22foLR",
  "key4": "5s2c6YYm8xzhWykoRWKzZNLDjkTKCi3VD3wXPkiptxbZp9nf7pxHcufPcNxV9sK31zid1T1pSoY4oRn3neAejnDi",
  "key5": "VREMW3WVVnyBgu8hTepBednfNJXoruncAPXDTd5njjRrMqeHPLBFpXfVToZiuQcc6Gb5whoq36Q12iLRX3zGcFw",
  "key6": "4GSpCS6JeFR6mvNQBjzBY69HQMNjPhH1o6UQA3qeMFm6gCC1DS32JdcTyaUdsTwYN4dvHvPdCAviYt5h2qwNGuda",
  "key7": "HaS4N17MZeXWBkwq6uT3WkYUPeH55ug9ycmmMnN7iY13q4FXdHuug19FRymhzRJdKQVBJsHmga2faLiwAE3euXv",
  "key8": "rT6i2sQiWV2UQGamAKVGiMLj7AQcZ5BgNt8x87X16D6so7By945uHCfRUZvQnzCnuYvnRYPp1byg239h2AAzeKg",
  "key9": "3nN4xR6qHDA43tpjLZ6WXGnZm38SX5HfGjdkciMmpV6eCnbq71ySpxEvrFrqRHyThJTD19MEutXpBGJWXyB4VQG8",
  "key10": "2rpaDnZz7dam2WBykcBAuWpeUYnznGKoHk9QM1GiP4u2Sre1MYCFJ2KhhMfufxfmT61e94fihphB36vWD47VEE5Z",
  "key11": "2dcGdeTXcLTXBr8CLe7Ak9qRYTRMmXTLqki9Q9FwJRq5yuwWYy5QzQ1ETGWkm4zxPKjSaNv7vi3vT8Jqzn3gMDkS",
  "key12": "5YcC836tgSqoJxgdXuRu2mF8m8cwvf9EMnGUyA5DdV4hyET21969i8oM3mB3dD3sMvvQP2JHSVV9NfpHTFUMyxYX",
  "key13": "a1Ym2RwYRPBDiVQapjpzYp9zMcBnASkDsJ9fJC2hiAsCUjNFWk4PrpcA3MMUzWAgyq9E9FF4fieQicRmnpRfTEG",
  "key14": "4rE1YhfrR3YgGkChsNcuD3p2VGmHAbCvXJG6CZv62p2Fz7SW53dKRKossBjtCQWfvGgFSzaGm7EUUdoMxEvtgsxL",
  "key15": "KRUMtFNA4xUwHtrpvMZVNdyomz7Tf3tt2GgJ1EurwsaBDZ3Gz4B3VM3Rfjvpcrx8N6W7fiVYaF9foH8VZEcniGh",
  "key16": "2rjyaZ2Z3uespWLSpTRHhoNvpgwR7dQJCN7rJZQN4qcUx6D1mVVKFeWxJEk4pmFt424S52k2kDXUAVggLF81MKAV",
  "key17": "5XBfUdDYw9p9Xu81cd4zctTEGLLKB9WqWZ9568Ko4eAjyC3RDZxvANqncAGMCjsJeRUSq93CVn2sAGvGCciVo9HM",
  "key18": "3DYdZcuaUHM8zJrFVkxHKkFYeLKizQLvFBpbU8DusJtKdBsTmT4oPEgET1A5sbc9H7pMjKiSecdaVLx2iq6X268C",
  "key19": "51cCSLhdzs3UGt4EmU6zzrNPBMjTwV4xMR9Fd46RDdJw2JYDo8F5hELvaBWNKDrB99B4kav8BqSukoMihkVg4F7H",
  "key20": "3RJR3VYtPctSkCuC3ZeBhRdwZTcEFUy9G7xXjAXh7wS5HYGfDMJeZSzQMmK6NdXkWbzFLTuVXTfwYQtzPuzvuzJo",
  "key21": "ZqKUksaXUQzgFVBUPfaoVSv2PTuvvveDmBRgKaL4KJAcJJpvnsfFWjRvdSBQhsJnRMAavKqJ5fLwCFSHkiSN1Bk",
  "key22": "NVDN14d2vD9RkGqJA5LzA8QRXpCgZNccN9MkzTF732DRpib6D25TkRr9cZ6yrdssyXFqgabSkoRajLDjmaK2arU",
  "key23": "2dPWHprMgSifNW1zZbkBZQhYGQ9Qf3Kf1kNmm7HUZjaDgqVa9jnThMNKkM2tW4Z7deXDGg5ZJxRRv5w6h7Z29WMJ",
  "key24": "21ep8NQNzkefD4dVqnR5fG9fJw5dDUPbjtbyEsXJjx9vrvVGPqSRN1SUnAqjYfJRw35i4u1kLE5MbYNoMHaq1Tax",
  "key25": "5HMzWtNgzBUE81Lbf95Q3htaP36CiFYN5qVPhijMzSv49UV86UYAH1aXuoP5gjYH9M7fBYfGp3d6gU4q1u482kYJ",
  "key26": "3KaTCNwwBnAG9y57An3W9iy1tzbRhawGizD667EGbsHJWsn7KMJ24E4YaZZpBiynF8JqtVNq3Ne1MTpdNHvQETo2",
  "key27": "3y6MNxAvjnsz4uVuChdUDaWawakH7JPYukr7omvBm3t8F4cRBMd4b34PqU1oBHSTwQa9bJ33oMnXwhGyWxm5S6A2",
  "key28": "3tzbrjnsLoRVntHxQy1zP6SyFJXkEYN7LKr1i1xAUjswa6vttg7GHGAfFYPSEzed4qsozYgTPz8cbknWWv3Ym2Nr",
  "key29": "WESU7C3gPUFxYeBP7kU6m57EFTP4i2EvYWJBzNQuUw6PEARMtzWBx1MLAxjLWVD7WJyewLCq7VKdvXPufaiDfAW",
  "key30": "43wqZYYybkS9Jk9NEXhJi9Sn2mTRaqxPRiiX8AbxdoYcgvWn6eYLmiMtXpGTCd4nogBST4KP3BzXz9EP5sr9f9KW",
  "key31": "2y1B2C8yDbhT32d7xu6aFwCU5EJL6bVrXScxWp4CFBVoxBiwdKUUawWvaypbuM3LLqbPLumhY52oW4XovdETkm7s",
  "key32": "48gd5k3CFvfJsrkrHmANozdbTxdMfYiL24D5MBMumuJDsojLtx2F9wS2xLnoFWJxRJViAhkd9x9pUxrzhbZiy3GX",
  "key33": "rLCGA2e1W4fUzBkE9rZhScnjXXWpWD9Eepi8UgdyKnLoCg922EQUXTDqWyFzFhDQRkpyQGXSzAoNtwxoEnHu1t3",
  "key34": "2PJr8GmimLLcMZ7GKUjG3d6Z53J3BkxGRHhncww38wdWeUpDWRWm8UY5KigP5PMoLucfDNcsagESHiXQ6Paj3wAr",
  "key35": "2LZUdP8wgXARaXyfyZ9FNTuoNLbCftw5kyH1RmpvmYf47g9JyeApYHsN7hnSaVfseTaG8YQxBMNUW1xZYEu4ioLS",
  "key36": "2ynBdvrf1gFPJS7YzM1U2LpqzSdVX9tiSZv8sn2HKvmzwrcvSgZMkz8Z9zjmJ2uJYFPQdKbm3RJ4coD3wjFWyCkp",
  "key37": "4juWA1mgViZ58XFCC7EHjjSiwxaAyNAXDTnzNqxiKaCHfkcNzHvsHfAEuWR9s8fo8S6Q1P2F1ZMi7fTmPJwf8scD",
  "key38": "2GJYt4djiN7TNZLZgHVvrqyJuKhpezMAQ2KkVNkiGgMNQqr7x6gQmnUSk9yiPwqMgnw4Pgwk9aMzGMiS7zNKduHL",
  "key39": "tD3KBwwibQ4dEYo7x4rBg6pqpeJAm3vyDTHyG7jhGLfeSeCSzGD3eUcLNSMe3iPwSeZPDT7o2JmoD4ksN6ALHUP",
  "key40": "5G9HSjHF8PzoLNmAuKqQatjGRpRQEd6nw3GKWQ9kmu5A1ZVjQHQpfc9NvMC4FESZjJ64WWjALjfsSx9S5y7oEHCm"
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
