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
    "XzqzaEuU3Fho28fSmcCqYbKUEngiXSuvGikeHRbwGNtqt45Vs8zS9wuYHU23eizViaL9U5eD6gxaLGfEV8ZQdhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zGhxB31hDwDLRTMaE5SPoZkq9FqAepV9QeDYym2gxfWEvm6MQCuCc8EzhdLwG5AZJThXNcuLFeoXZyKnNW8bWu3",
  "key1": "5te7gBbG4jQxRDVsTHrttiLfD9juN7MvgLVBsrLcZKdkYHeJxa3G7iz6cGHhhK6rmdGubneVN8pnTmiBdacE9HFw",
  "key2": "4SdNocnpqJqQTMNjBaoVFcWTtmXQZvNirqzXEnzswnyErqzdXJKLLF2GLFKJdutcpej8vBNgEy9TGAzuLe5H1RpE",
  "key3": "2txH5qDR7ZcMPdtRWAbTQAwjWAQ9ajvAjzDj1D8ykkaLiWTNzwnRJVaHf9vwD53ZC8oYXfBpArLCVkDJpdwj4vGn",
  "key4": "3YQJRV9k7SyzXQmx7H3h751SHJDEaR2UJeASoSr1n2uBEa1q4PDKkbtsHKY9d8oSSy9djT9CHNMzUt15MsPFLm8U",
  "key5": "5Dqt9KHJJZ5V6EVcGwar7nFiapVVKpswQimZxVZSbMKyXtLdG7Qqn9oy6fDnmNpKQbWhTWxk6XABvEdkDK3dmzR4",
  "key6": "P3o1959KG88btLvBaZqqmNZ8rwWmE13cwnoVVFj4CviserGYbKiizSBsoN9WakEJg8cF3Qmb95FEFJswRnvcre6",
  "key7": "66FyL4DTF7FQYrGyWwsJg1UsQEEaQ7ygw6ABQL85GneSUtFrfBGxmZP7JePPBcbU3Y1Ec8HGqcnYLVHtjkj84tWW",
  "key8": "3trAqfv3PrZpPuKu2ZQ8WKwEGfgCXYgM7kmsby6jUdSLLYEKMdXPqcDifC4JF7pUsm7dtMu1PJVyTjib8wzZoQnh",
  "key9": "3j7WJYj3XBmfavfNdEvcCvRkSck6kTs42qEZ12cmDUQqNmBnT8iTE8LkiedDP8XjZGG7mHShQPt77BmcVwDgZ7RX",
  "key10": "33meqSNGmuk7JZrkw8LcMenMcqqA5hWipybnFFLkgKfeEvwQm863FwyQQkkmWMC4rDxXq4aVVEAQJyh3utigUjRh",
  "key11": "JiF13HY6XoPWPwLXfVahhigNfzxXudqGGbyqDaxPPQ71s6BzTYHkMPA9jhBCZCM5hUXqyv9poDTjejkDyHU9dYx",
  "key12": "5o8uKAKrxc8Di7CBn51goCdnZ1WARnv8ZyxPLgkHXv6ZMwJL1E9HqLKBJfg3BV1yBdrzndnqecum1AJyFcmByN1C",
  "key13": "326xhswhvi9tWhWMNT5dDdy1LbDmZEiZndWBhgMWT3jVvcaMZZiQSjtyMysqLrYyxD6NjFLxpiKoB1kJ53ggiMz6",
  "key14": "3atTCvmf53EomLeb9HTQpn88MJkwgbzQ7dEnxgsGVbme9E6Cy2jS8e8AjYVcdegrceYPtpQVAmCvaHgGt3vp5EH2",
  "key15": "26wzDMJDC7GrZQBUtf49yagwdC6LFGsuSKD3njLJozshGYVWgzqTAyxkcbXdxY57rgh3Ggsx87hZyGBV9teRESxX",
  "key16": "uqv5fC4qstUZUU9gkWxQfsaLmz8vrqzvvpUCDtLpAJLfYfZAprtUmriJfZwUyGyHkEMfyNSTB1y2GN1Shkpj9rm",
  "key17": "2bg5fnTsdXYXUddBTdqetZTYrKzEZpTTxWUDq27VsGXdceNk7KkUdDM3Gf4Pyvhz5c5945TnwKqRWTck5e5FBHg8",
  "key18": "2E1ZU3YW2ueHzFdFKPFeRHmGG8FC3VmK8LANZgf4cM7yQvwYxxhr3ror8NDAKsSqWW7NmVByGZ6cwmp5bYZFowXj",
  "key19": "4orc8LYJ3NbEhBfWy9C5jG6rJArLH8tdx2DYyv7ibsHukZds6fbKGvsU18fjY19jX4K8HU4xWGhBmQX8pE1P63wS",
  "key20": "2L3ZczGipjMDJGZwGW5ZsnLcPwVrc7B2F3usto3Jb1x4RgXjAiVVi8tbzSJg2vGacoj5ftpVcff5HVXeRhB7zrAZ",
  "key21": "3hE6dRuMzdUHENt7TiJAMcRSL9vLyPBGbfJFBDvdh5iwCPbW9TmgPyuGnsYvf3P2Lpx2Jd37gYaFpKhDQNG5auk3",
  "key22": "3n5TqPi7PLAzQX1KjQYNnJBct7crBjwdGH9sgMgdMniZTXfyAgHLAkyJ6jNnL6TgHn8byxRsFpDWaYLfBwsFWXg5",
  "key23": "2LZNH2jEV5TvNUNqDwjD3nwNVR8s4854TJKiaSY8pKmjXooPanPS5QdfEXTZPXnap9S1QVhZDMqQy1AYHTdnQu4i",
  "key24": "3sR4HqPPdfwFyu4M3LmX4NSHHvWQ5Yr4vycPPFvc3sPjJ4FJek9NrDFQ37k2WyRy5naoPN8JPRiiXe1hwtMA31e7",
  "key25": "2VC16AZdAtA9MgaL1CW6jYDDjT7hVyxu6TuYqS7BvUZrv6rCrEgdPLqo6v7qZLy55szTLksifA7h5eBP43iwt8km"
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
