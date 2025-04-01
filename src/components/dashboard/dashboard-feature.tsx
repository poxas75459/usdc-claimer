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
    "2YRXzXRFe6yG33Sg8mD8c8eLh6nafTD9xNXRhnosJfFWSPLkdk7p7TQwt7Cb2vNMXcwi6xq9zvpnSaeMyy6WF51d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z56RDrYzehg511QwDVq4FFYMmmxi95VavAJP7V7DfUNQYzd5fT5bzRXkWMiH66hYR4ivccugHnvBGnsyqAEj5Wb",
  "key1": "4k4Ad1tyoKEb9498EDnsqNv5SjfxGHahqpmo7sG6cbHpsuqyijNjftLKHaJYt2TFh2dJ3KaSD6aPktRgFJE5v6a",
  "key2": "5cVp5Zx6vW82Mn4Q9whMZc8sdV1ZeigfS82LqNhp92uwWM3QbrrVWDk1EYfSHk5U55iwcBirw9mZ9G8ey4GttRrB",
  "key3": "9mqGeT6KjYSMh8HLujtEpXDFY7gFDCic46yqkxDSgem2vRTyZudbcnngm1RR48rqksQKLx8baAAgWkpwLj4q512",
  "key4": "65ZYvU2LU6ZSZJXL6vJHMYsQ8K9T1c8KKjsvggUxt3pQDWLwo18h9aW6999y8ghYcM2Jc5J1FC3pueq9dAVCwiDo",
  "key5": "2SWKx3PHqRZvnCxKo4eKen5zXzc1sB3sFBmHRCHEiUGU19btXr9i9AHMjVm7VscvVL6FYHcNm8R2TEtJA8wDpmbS",
  "key6": "4FmZW93CLnXixj9ZoB6RFssRA7QSk57jzCP1jjHzNCgd9hpfPRUibMXJ2GzguKch5SR5rFT6ieTVKEbDaj1MKp1W",
  "key7": "Askx5UvZk6Fz5S4yYawMLFGyqumutBMCoaFyiJV5adUWJVoCAcwRz4EpmsduuJPygQonV21LP1KoF7sED75c9Nm",
  "key8": "65rGognZNavdYMXH7jLXSwMveEUzUNPM6YqpYZyrzf9vGmLmzsra2EW4QFXvGAUVTgT4ZwEZ9WU1P8vXkfumv9PJ",
  "key9": "3FiepReUNShusVCNqGJgbeMwWQshVSoDmqtSyBL2UKYrJgvc4YRPduXQF4AwioMnNgcLmfc7azbQfHZC888brhAh",
  "key10": "5mwKo67dLvdpcHmEDyqMSjD3qTUn5aGv8r2RtYV663fat8C9MUvd158QSLvykVfKqXPh1JN7KY8beDdUDLjALp48",
  "key11": "46gVXmUR5u1TY8UAoLS98dhc4ncDaRfVPBLFRv48WaWbvFrmtnbqunXY61He3XueC4qTgunukkE4g1vKMokBUwhn",
  "key12": "2riXwp6G3XSJVAp1e7KPKSsLDxkTA4PgfJhPhfe1WEMoRfrYWiWjZjvCM8SBuDTP5NUaJVYoebCMv75fpZkW2d33",
  "key13": "3fetx97K68sediLbiu1rQRp1fofRyB78LVcbBYhPPXvAPT8HuWZjz7XitzRLvLyoyTDhYgGY4esq8GUzfWaPc3mM",
  "key14": "2hWcRGYEDuwy15FLyyMDoYHWRPP3y1yP5mkZoiiL1hGGXqB8VVRc6x25d1BjyAu9Gc5zn7JCvxnxg5R6ETV4b1om",
  "key15": "5B1cHmzUCAYaPrAt3knRfWBmSUXQbKVD7ATQJLb9kRVYPPL7DQDtSMyMuAdj2Khx8ttFVWdnxbcvA9NVBCqa4X2S",
  "key16": "BFMEugFsSHV529HaZcRXuTtCedxbFCatu7fnPnU54AExRFyfFgmXVak1sQqnZeHPEbK7JMHFsEQe1kKkYHD8s1N",
  "key17": "3E4jkcKYZqY8TGjGXVUJ8EC4apScAhKZEsEnbVz1Ybr9fDQHsiigFDeujN5xgNYh5jta8teej5v9CQMNvKQdc5jd",
  "key18": "5dPH4MEu9LpWi6UUsxt3yWtPsecDRZwePQek6qUeKbKugxmtojsRyHPLC6HRn4bSo13c77Rt2rAVm5dFwzDN6TEW",
  "key19": "5JMUKv3vadiUKpxWZ9eSjvk4E6isczQqeNtZHtuv3tL3tL89NzFGw5MgrfvwHWYGrBAvtRSXcUZBV4nk9VXorwpd",
  "key20": "2wd7oC4SK5a9KT1w7gij9LYwVSRDFkkRkoHViesHsbf3b7aR7KTSJJ4HgGaiHrfpAR63qYKz7Y56AjDxaWpGmCxG",
  "key21": "329Z3V8r85GhatEXWchXF6Aaqaw3cn4NVe29uwXZrdjogJbzGDRWjceeFDf9EMtj2HEs8Qqbhfhy6TmTVMh2AHx2",
  "key22": "kXLZdz7wF9gCDyYR1323pCQbb4eKaerToY53z3D9dinnUSnFvZEPmKBbXVtzkGTq2Zf6kozDtN376oRHvXdFgN6",
  "key23": "ks6kEWm1pA6yeGLDdt7mBnW1qhV7CRuA6ZYCJmnWuT5eJ43QzYpw7UvBPUUcA95mHoHWM5ZbSi9k9zcFfKMtP1D",
  "key24": "3y2xnf6LX9dhyfwnR32G3XvzQbosNXUxbJcGzRozzt52N8a3ACtQX8dS8pbHQYeAW3uKykC8CbYqJaEDb615LLQJ",
  "key25": "5kQoXi67bgZfXJwWv3rUk4ZmMUfoP65RdWtz7yqpnRmVFET9Z5AFxXguSNk3xYo21j94kdLy1vy1zJsEVT88H7Q7",
  "key26": "2k1sn2FcntPZJthGTx3mGs8w7TWWJYT35NiudTdtPgcA6uv3B4YAucfYKUzLioVMjNHLdTYgBV3A963Ef9wT3ztP",
  "key27": "3y9oLdvT9id4Q1PLEro7btbBit2EVTZeSb2Do6toQh8BdA2jx6i8ygooSsCWL2XAWEoMgZ99zGJus5gPTaseCpHB",
  "key28": "xzLtPTXyDPM4LuSvm6g3HQb1oaF7HTq66Cbv4z7WMHNdxS2YyMvH9uctXM82Nsh7qmnRcyYoXSHGiNgUsi3s192",
  "key29": "2X51CZUgSy6ymuUhNWZAvrhCYWhNPFPSf4B3E1bwfogr8WyhpjEyjBFVviqz6LDvLdYMn2HmUA7huJun8ss4G1Sn",
  "key30": "4QKfpe5kHb7FSgYdCwgNd6sR4Ap85r6r8zsvR6cqUs2R8fG47xyz1u8uimqvuWQhkpRbJuXxX63MoQVyNWjE5YNq"
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
