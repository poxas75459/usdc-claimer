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
    "VPjoD3dZTMN4yE3wZRspWfKyFaqkqEraGFk5ACgZ3iciuH2yojcUx7ToSK1qHqreWcnPSPpcnTsaoZu3ZdHJRqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gYLB7t3qhdYJWRNQUDhvkGAGfp97P6mu5xnrbvkLXn8hpYyb4S5LYhKxzEVM65azqgPsV4JYzT9dgt8sEiAPvq",
  "key1": "2BZELn47sR5H1erUBFH5imuiCw76kvfCV6Fb8k7NH2DnFAgs1xvsxMAhZShrYTkdM892bFy245EhuyF2UkhfdjFh",
  "key2": "yhpwTJ22t5pP5i2qFEuVZ6xiBZW7QVxjiKV8eoKt3BRMhk9gHT61AoxRbecVwsWtN5TaUau6kbkqFNDFKQx7KKZ",
  "key3": "3c7c6mWHjFwjtysarjdXJGq439YXa4ARMXdnvn1RQhaaSANffLSkn33U5es1RBxYyYk5mCLT4js48pn6CgHrJuVY",
  "key4": "3dF53UbPrxfcmG9kpVNBn52h5oDSY4Kbb3C5Q9D6wkBZjkedq3T2wzZNfYvE1jsLPHZWHNFbzPqr8RdJmioxMNAe",
  "key5": "5UZBUUiMmVGj8v3PreysAGzJn3HULQFswKrGqZNzKMpAiQ73NVTdFYacRuac2BRobcNZ5sMe9G1wRmcn3PUfHd5U",
  "key6": "twiF2ZN2McLULew1j8DQyXBy8U5AWHFMNmdYwNd3sUGecRpjWJa5Vg1DYQbGdCmB6MaS6txTu9adZgwik3cjvVK",
  "key7": "5Y3FyR5DBcUsbL4M3bdzqdiQYFQcwbpFXgytvuT1drXgNVdRbwNwn6L8HJ1vgWkzqXp8WzReKLCh8ECxLCbFYNWH",
  "key8": "3a5QxXFhj1sq2WYjGfsKj2XryM55hJqqZHpAxadG5G5AjUTCJWVpzCX4aZYxChXGybPPZK7h1Wm4cWy11HpRoTvX",
  "key9": "55jFpZJY5dfSfngN1NbPfmUXQJv1bUEhKH5zhmiEJbAXpAodd1DALgXA3nznBd8UDMdVC5CTCdRaJQK6YXUJo5BH",
  "key10": "4sGZNqWKXMmGECd65aNKCcx38DtqgK3TFoah83Vy7bwhqCR38cejMbWfTgrW1zrb6ijSGfxJLASVHVZQJR33P6Q4",
  "key11": "5Yg942JKKpCDVr8pfjGSjdSU8MWVyMwq9PCVijdULPU66Sxu3uG7UCRDa1i4TGdrSyVY1T7QckFTKbaka3vKpCbg",
  "key12": "4X5MP1fpgU8dZBX2wkgJ5bSNrirsYe5Mp72PURikwB9r3XsTBs5Debk7oxGJHCSqfNPB7Qx7MTx8BZk9uXgrFfRi",
  "key13": "2qvn4X44LcopD8WrmHk5w9bjiXPrsysZxfeNMjGMhFGSkBqLzrRvciZhGkezYfMGmne6T2YAro4Rf3iV9JPGv5xC",
  "key14": "63GwfqKEoyUeeddcf22A9WxG939r28rZwsq5MFKpEhQi3fzoAhsiSgMQCvzb9SQXbHxWhx4ifBNLhvJcjo2g5ows",
  "key15": "2TpUfK5KtrEqyWEqpk7toqzfbVMaPhmRvu7gqcc9mUk8tPwyYE33ANsmtetWx8B2bP2fb9hTdNpwuNNaTqfhSHGT",
  "key16": "2k2JACNxdV13Ut57anfUmE6gDmmt6DxFovViH8poTyXhyeoVA8ynNTyZdvmybFfUNd1mWvcn6jJjexhczcsjjtcx",
  "key17": "5jH9dZX6iAF6xPurbJaUk7UoUzCcw11jwVwpurZZhoRk6swXFApkHHXJarPPrtmsJ81xWg7oBrdW524fRdRh8pQX",
  "key18": "2QyeqwtutsYRQgWhnEJJzSdDaUckBPFZKtD3kDdHrnNENh9VtwYztcmAo3S46j9xEkqnd3QS6vgd1cBPnfKmqzvh",
  "key19": "QiZjnXcuxLSU7JTiexWHaB2ugMLRRMFiyu6BRYMC1k5mrxD7AWBGa2LmVW6NBhkbRBQmFTcxcv6T6i6iset641N",
  "key20": "3KbSDa5cCKiRAcSKmKXzgWUnxmNLqYLRZ8FHf93HpEV2EBST6mF2SGUPCLT9c7qtr6ncj3WaPEHr7DrrWWe1nz6X",
  "key21": "p3Npot8hRAStFPwSU94hFgsFR84MzGbfbBvhc2SMEGvEseg827Zcd6uUaKAi4HhSnDDUrt3WWnnxnrzfJKCnm2M",
  "key22": "4TgSXJZitRcxxT3xyup1C3fBWvjXgbVACPDYHPMvYhS7ekrfubMqnLsxMpoACXvrKu9U5iQxdbESB9vjxSozN1d3",
  "key23": "42eg9dDuehoDUYWg3XsP2VDJDrtYLgfkVTrzy3rWNu8ZBBa9CtK5jW4di5KrBoEiwHzR2bT6dD8qcDpztG2zeCGm",
  "key24": "5aZtzwgQMuZJUgTVN6bwyKDqHkPGDDLDpt683QEi4bhABv24nWgbPR3CY2vhY56LNfRZwZXrFnEkpsGJrjz1xzym",
  "key25": "3PqKQnPRyugww7PTfvY6V5RvsvYFGcNpy4EyrUXoM9AKF2QyZsm2u8FzuA2kAGM1dNK72pP1RJtuJ6ZXKv2ezRmX",
  "key26": "31M6Gvjqr98uFDW4kqLEr5YfXm5ajn2k8qG1YquyrJxyThnfwZ4u1gPeHzjC9MagNzw6RHGvCnD9cEtqVFtY6aYz",
  "key27": "3nCJyY32isPmT1d1rrfAc9JJMXrZFyuMSKQ9sYqZXZYe1nDa6SaAyNw4fFyHT3AXadCuGwb84WcvkYUs6VnCd5PJ",
  "key28": "3Jto2LbQq7HjBEP9HsyrCh76jB9bVJCrzNQ1LELv7ZNmVzHbwq26gSM7WELARwA8bpomEDvTeEt8PukyZAvYNjDa",
  "key29": "58U1tV8EJ7UGqeiNWAb86EvqcWYMiWRzAYRezcsYp9kq1YxuEYbLGEZP59p8619gyQ8x9bz1akkTRQZt1dFLVWNh",
  "key30": "4WxfptNVdvC2bMEmskBb7zk7baoyLS8Z3GRo2L9z98sjKmsQYzPVsC64gT17uQM1THg3jh2gsrQpjJtYx5rh32kE"
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
