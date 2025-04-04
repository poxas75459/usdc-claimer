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
    "36n5WfjbNHfTxpTF41BGzdzE9BKR6YS9WGQkCqiwoXGNLdW4sEMggevGCqEsN6pff4iGwsjvnEjsmX2rauBbLvov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mT1tAuomZtq2zmtQoAfCfkfEJL9kQm91bwvZpHenHHnA1zTQJ17ikA1NSXxM87tezCaGvK9zewPynqKXJprVqyg",
  "key1": "5BXDz8HQkcKRQX4n8T1i2sSKsdp4CwYTZaffGv5oGPwtKJo7f8LZ9zFaJQes8iNPzWpXYM357fC67xMYMXGuJ8UH",
  "key2": "4xhnu2g2hbNeQamrqa8DsePfxX4Jwi19HT9brMHr4wFzs7SLQqJ7CdMeLgw2xsBC6vozzokE4ZM5J3Ji6cPpVSsv",
  "key3": "22G8Mc2414mBoiGESrf3hKk2Vadug4sqfHa8x7UbSkpyvJmJ8PU7QbA52mDprbnL8GgSdS6RFiPdDQ9Z8AETDrTx",
  "key4": "4UR53vEfuN6xLbXzpRr6FgRR8Jr7h6VTu4Ngrw4kH5u4x8t4sE4Sbywo6SEFhQFByDgFAhY51L6CXdm5TGWeqhU4",
  "key5": "3yt6dkjffbZRt6pGosZpxMVjSmGEUCfwux8qwZqEji5iGaZcW4Qia7i1iMELejzFbWWonUPe4zYDdCKTghV8uGvA",
  "key6": "5E68AHjSigYYxv2LLLxfZyTLuAxmzshrTrdbNTCVnRkoXNviSThvTKH6mJGu8g64CJDNnQDgUpSopzj6sw9PhTWi",
  "key7": "3vFpHe7i3LnBBqbQi24Wza4LTqjyJqDqqigjNfLNefrr1G9o9Bj87wh5BPHkxp3EPLp2coqbBcJ6vtaCtG8AiHcf",
  "key8": "4FMFpoXsEAnjEHv5Lr5QeaaMU1StuUQ1dx4Rg4XxdSMx5aWYzRS79Z9R9tf9vCzCX6HmCrnRXrza9a9nn1iVX6nC",
  "key9": "4NQpL9LNGCJBTmekjVCWG8Ugs9pKzacmTswzS2ZKoKff4B7fNAGz6ByFeLam7FAkYTt85LxYKpSFXPwM66F6dQwG",
  "key10": "KsjkJ3eDLe7LXfJ3mN6bsZUsfAz7adaNcPA5rFB1S1qKZY6uHXHSpLM5rAMmcESJhap2QWg7ikEnDE5SPMobJB2",
  "key11": "5yGXNctt1dcM5hvWzeWrQG4sWo7ZqJ3vqkcwUJ5aN3bLSdwAbdRuNQPajzTP753QzXERhhr5qa45YVRCgdEYNkLB",
  "key12": "5AgicyZPuhmfaUWhsRHdpE2AC2RLmpLrfH6avoBUMq6QC9ESJAxwrC2QTCsbm3Q1AqtA6xaNLjjHxanbeJaopQbU",
  "key13": "5zEgMMN2Z9WsdJGC1isYcrKkSPBkupw4xJWWHSGeyavbdJyr9VGJCg5uvdciqRUub4eXB5a7N1sfKGGTmrQvw8Z3",
  "key14": "3qbtXDY5UpMRwJizBHHNugAduaLvcauczwEgpGxSxCNBaRBPs5GTtYjGZdc7JgsCjxLxajL56UnSQFBAoxYW18q1",
  "key15": "5kUog4TgwwJJ7uovrXekiiLrNv1hcD4rVo1dQr494hrW74vvrZMBqkhUJ8Me7nskzqEacVw9KjJgoXHQvqFaQexY",
  "key16": "4RN17gUqUHVPPL8CQD1a23BCSaMz1Qo2QLKZ4skiWWzDabCNSbiqEJtfi9ahqBMxeAox2xmTrD3QnDbjDuoRX1dC",
  "key17": "2XGGiUZqABfg86r2Z9cpKU4tfCw6kRF9vmUDSXgYtt251nNs2RDiLZ8pNETBVpQ8mbgxvycJwj8cs14xNta7PmCo",
  "key18": "53yme9iyxDrxtDHdoxn4T7LEeWzwK1XwdawHtnPNoWwTfH2mp18dCaqbjRzcwVNyTxBtsLMgRw1di8YwPrKtWiL2",
  "key19": "2DjhiWk6YxsnGz1sosCNAYbvBgUPrEiERZ6TBtRSnUew8DVDY9YeDTU89nv4Hvo9kDcKbk3hBkqgxccG1U6ohaEr",
  "key20": "HnHbBv29wERDL7EEALLro8JNKeLteCLpJ1tRfJZjMTZFAREhsMXzaiEtMT9eABgCJAhRWEWUAjr7sgGCHgtxGAX",
  "key21": "3Q1TAR1EBvpi6h7TuPyfjH2HydS7SchrzKhJ6sGjSoiBpD7wWMKZsBdt19gzmAsFPrSY8xFbF1gBodNPQpty7KZe",
  "key22": "3V4SN8DKcjrrJ1c9Hi4CUuBzU8BbjbVsMGyXQ58vNtiUPE2Bkt2mYGQRrtLgZpFKsi3mRhFL4PrG9wJQJCDgtA5U",
  "key23": "4tjZDhCqB2TBuyQe772BQPjtTjS64kv1VwF2yz97aQskYLmDhQinhfheFbKie3m3cbye1ZTkmQ8FHWfLTtwB3fZi",
  "key24": "5Bs4vyfaKybST3ZpRAgSZjYuakAkdtjveGvpDwNFUU6J3VzwNRTEGUNgiGAGxo9MAPZvwRdAvXsctBfmjRQaDE3s",
  "key25": "2tyN23qeWXxJHmBtoEUwWjwWedTZxX6vyomStojJ9o2FhoyLMTf6XTmqducjaRBymKqQGUXzRbv8Y81XGyGgKjgH",
  "key26": "5R67DctiLP4UGo9u92hi5QomMzhos5ch4zB3zJXzEYu9MA2pq2X84g9CZJJawyMNKEqMHiQRTC39q5jhKfDz35tG",
  "key27": "2TzyEdiZ2pw9hT1FyEy1AYdrqqNHm2YWcqive34aQe66NYPaAR7djd33Q7jzBfyM8cybnoZ9WbSVcmDcFtj8ejPc",
  "key28": "2eX5FVZaeK5Ykhyn9xSrzsw11xA6QsaWvrDroai653PCjxdBagEnjfmHmERaKCfyWQCC9SVxEiG2NN3PKEYN7UTQ",
  "key29": "5uJJbVRMKaYwaRxyXEaTwVYfAeDs6uqXWhrcKJPsdBVuuTGZm8qMKYxJPfnZzQhr6AVmgHduVjAtut7Cyt5k2tbg",
  "key30": "2aKZPiuhZQmDhajYE3QoDDNa9TYDA6Cd6j9X5tBnT5RkCarKGDhnD9cup655iqu3ZKib1fp1XsfUDknhoQ7MAEQS",
  "key31": "4SMqXNMi5wDBkadd5YZmAN6HaUMsQJGwLfV5M46Ujp3XNZK5Cfjk6fApyibxRtgK2gZseBmnvZvQGCEQNLB1bLL2",
  "key32": "4ArBZUJu85bMGGaNLv5EdM9rMx55YvnTztVZaytsUCB4WaykeLxqj1CY3Ef6gQcPVpsfXGYVXCCxQmHEvSN5JCGU",
  "key33": "544qBPHcTW9tzrtNmTrBuswVGxWM1PrJtK54dTAy4pRjLZnBR239CwuSazj7GRVLZJCa68BdyrVVDJ3HttLSxiAm",
  "key34": "srHeECAVjVnEcYarZz3AkLUhqwA3JU2D5NnNkUoBGukkXjoirySwrum8rzWj32rmMVDj9VAReShZ35XRkztpd13",
  "key35": "2iLUHx9zCSjFuerUSEc1ZVi3scpLFwkGLNozNyNuSUHZTcsSuzxjEcT8p3Ue3CSnfLkny2wpHPKHRAC9UhEmRUr7",
  "key36": "5knQq4YX6bfQj7uRydZKwrL9w9Lt9n2e6N5vipw2oj5QPydNwT6S9FYFCUQ5WiXzT7NThX8eNJXY3ZVFtn1G5Mqq",
  "key37": "32CpPVSDLdvdiruyX45aEA5FMBbmEPWAZuovyrVZgAaDx62UVmM1fNj1hq9wLWUt7FnF98jEvgZCQC1HhE7L1UgN",
  "key38": "2GETo7LW3SxbMFcrzGTY6Fpvrh2oT4nppmGJVLzmsRwAdWTuPL9aFk61hRCs8JpJRj3tnDePRncbgAD7UCpc1rzD",
  "key39": "2TbfnMYE2faaW1K67PYZFdZVHNGx6SCoUtgZmUJCgaaXhDTPNzixySVGK4EMguFWrkbuySK3s9PSCgPxTbXK3vfx",
  "key40": "5y3d5vACxPqd3qLh5UNjpiRSeptDJo4wbwrfjm4tDNDXVCkgGhREdAWPmcGbNj9imGN8ePu4DNpzwTGLnVZiDLew",
  "key41": "34Zz6kDGHGqb2V2hpJDZmgpay4RzBqrQjjzSsQNfSEVqJ2QUY9SLSmvrV1UFy6PXLcqKU5vygLWhrdtpEK8i4Wkq",
  "key42": "58EEPWTuADrTi3KmGipUuU29serwwLS25EE8FoWTWqWRkV2scAqZxcFQ39EehYG62bNYEt6JeNnHFVTcNnMz1z5Y",
  "key43": "k4jhGf7gzZp61j9BLTNCZJin6nm65PoeiKqC6hYX3e9vdfk8wnDrb9rSaG5Zih9VXNmXAgwYZuUgizvb74KcHR9"
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
