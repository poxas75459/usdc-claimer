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
    "REzcbxP96PiHMYXmDfBXgiriweRZ2DfDds14vbraNG4KrVzHtrNceTZTh3PzD7kLckatpLwA3xRDvrE4UEktaG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQV1pRkARtpuNuhNLdHkJFWCf2WVgqw9acv1o8L7u3hR1d53ZDcs8mDKiWpgemYjWv9WaFsA8q2CmcYbXRLV7dj",
  "key1": "4KhKAvqSDTDyPGbXRY24itW6ehE9CdZtp56B8bWw9V82ZMJe7KCzHx7aXsWHSQeaAF6XJ1AvdXCrTE4tLaXBDQvr",
  "key2": "2rgKcXPLYAqa9vAm3BCtRgDi3GCzszfQaSqVzPSRkq3yAzftAtEE7xqA3nngNKZbDZMAMW15SQyZCeErszGQZPJu",
  "key3": "3J7aD1KG1tzr7fbbpShQxNbGX6xAZzvRoPwR7DGJywLABk1UL3tVQ7oXtUMP6hn1GucqY6xc1Do5XQp5FpfKDVGG",
  "key4": "4EqacP9fkDevDWvyVUU7Y5zp4Hy5YMUa7MnHosr7pyPZJNiRHvRD86qDAfGDcVQhGnTL3TQkkhqWSeeTRDVt1DhG",
  "key5": "Fsv9tNK1zJpmjbwAPvWDH5aZF9uxhTYRZFZwgGWCscxfFa4jiiPCJnZApywg2S8v4ibggw4m1pcp6drsesWNiW5",
  "key6": "2rQRxuCjycdGT36UuWCaoWoxBfTSKnb84FJkr7mp1Hw7uzh831WTSoTZZnexCmEcJcWSUfcARmmqd2hhsBgJEJpB",
  "key7": "3iyUWuQ8o4N1TwsbgprMeDGPM1DNmNtuFaShRYAo6UsXyKW9WQi927Nzvzu7bNuNGj9KbG68zznsZoS5hgUQhAg5",
  "key8": "5gjeYoNUWABuqXQuFZa7EE1nT851pK7z8WznCJwuixrHRKpTrWHDvvfQvut5TJDssKkJHmtqtbu8WvbQ8XpfKfgZ",
  "key9": "66y24zgCnXFZV8hHY9YTJUZczNa3yVaYFSaBctJfLx7Jgv8xpUckcKWWLULnXXRMjAgfJcsA9ar9PDtKCsuFuPDK",
  "key10": "3hrG515H1j3R3MhcJnqZ4TsKUAkQDocuHQXMDj7LR95gpQn7KTLz7bFV9kU4awAuYrRCeDVQoDBzAyiqxHsYekvy",
  "key11": "59mWZmnMt2insWUNw9om6jKWBQKwE2uPYNTSWC3ey3hVjmyExVJFaaWNFDyaC8Z63db2aSSYNpL4nejqAg3629Sx",
  "key12": "5GkTjkpx4SU5yVMkmwJ5NMsUB4GMyXDPMwKGjiE2Q4PeGv2s7KLnq6LsgX6NDnhwHDVnP6MaXTS7xU5c3uXHNG8t",
  "key13": "5kR5VD8GWcPjfnite8Tai37kFegZcheAjYyvWEjnb5d522Z5hRRM4EESFXB7XMVcu8ACqWFy4D3M3sytkmvvLBxF",
  "key14": "4LuNTEqEEGzGvSP2mvirDbi7doGqB3pr9FUG3erdQ613NKyyTHJS1fzd273rM7Xpb7aZbDKZ4Z7xGHvmpZDDojVb",
  "key15": "4J8JPyNB11vsMUD6NcgNJrtoUofJJxskPiyUjGPmpRfjvLZmgjA4miVdr5XR31mzjmSspZm1h8qfJiHhRuiHxM83",
  "key16": "3nDLduNJx4hcmojP6VcaGDPbMzMuyBzfCGzABq5iCYxjdFCiGRiFY8QbZzFoYRayEP7wRu7cUGLcUh2DxTKbSXbV",
  "key17": "3SUSXoFLfg7T73ZsNhakj4uTVvQKFEk2hMsqQgcUri7BoeL69eo9KjieskzxcwPawkcudzgr4tngEgRDp9edhETm",
  "key18": "hRZqoBTpUzfQAq4WZTXBgCJrPLSBGYR6d7erBWJZBXMNaG2n62EvHUrEQHvXvvdjA8uNA9eL36TiHPCoepuQwRs",
  "key19": "2rGhHiByTrawSsi2Asp9zmg6hcx1LAZGXwKBwPPDUyyLbASGpUZmYutBhzCFFPBEwmURXC8dV7yc7q7JeCiK2XpN",
  "key20": "FfFzfk25BdpHXhhPnyLuFEfiwNJ6F9DxnYkU9nMjUfJwQtsTgSxb2U9C22xsHK8F7BWmTAAByqfb6xBtuREHMFm",
  "key21": "3EZakRC65bz2LfU1dVUArLUNiENqqLh9c2y8kcroy49BojV3q1KNZ5khrPKgtFBPWKarJLyAVaBacTJznPQSNSrX",
  "key22": "Fe9YGa3wHPRbwXwbrDKXJSyFpZkp8McqbjJerWmGwxiUmdVmU352m7VLBdGUaWA7C6byS3WgkrKhzNhHu9kiREz",
  "key23": "3AGyy8XB7dxQbwQUPUWegQPQQwLdRgrvZMVcHu2rFQA8bvkX4pERJygbm9BmbpD9WeW6HXspHL5ENacCu8pyMhGu",
  "key24": "3qDwKdqumQCv4ZdoYV7cAhm3rD4v4W4fCmEptrG45Rk2w5Mgm72BoiYT7kyeMyFtw3GpNUHuzbMDrZsLHewHedky",
  "key25": "24s4KB5336syZPnKSYV55iHTjhyMaeFtokK3XLBNgB4NQKJi7sFhXVNTztydFbBdeviivtc8SXr9GHuPVpxbdM3L",
  "key26": "5whuFURVEhznKJGFJuKzJzvohogEwRpeWeTuLMFFAdXPiQdUPKpAEAdhivMQNapr2hLHTe7HmSZjPCFcn5wCBnBC",
  "key27": "WEf1Bw2ia41JT7aMBADaCPPUVhKECtihzf486jdXiiKJSu7WKxBmNMfaXUarDTmtEGwEmDp1V5xVJryXHScMEtY",
  "key28": "2bw7JJ6UzByacgEGJdzx8rfD4UvyHH8Snrh4V3WoNoCt2bC6tyjk1buBKLhCpsFqMDuyds71iUXD8Xjm1xsFyKn",
  "key29": "5kH1GdzwG9mxSDpzvKibAjAAqiL3XZeHJeDbcsLBPmtNqQpjpYYGaXJ6ewK5EksepDbZiyTVfePuvdMJb6zyCtZp",
  "key30": "3eVE5zN3XNYYU8QM32JiiHJ1EqCY8u2RmQgQyvDfzKWcyFkQQNXGKpxiaxusuKqwZu9AXnQ3xYQkEzPy8ocYmgE6",
  "key31": "VW3HuH4jEyUizfXzxr2zG3umcmMHv8tkjF7jQf5GKGq15U2JmySVHWGQqjQxPP6cCBVena25cBgmC2BERWRPmZH",
  "key32": "2dFYpdydTSuf919ims8vCQhC5j3UFJsThaZ27cv2wgrAxNwuhHU7U96oLNa6sG7YtvoJysgrkPNYbizwxC9FrdiH",
  "key33": "3p1zR5g1sxS53RiDKK47XENx37HruRTX6NcuRxvMwS7TGHh141vcQgHQ71ChzjfR63AitzubeFSbD2rub15vUHdo",
  "key34": "35Rdkx7f18CYzhMMU54v2bZzXqbYx2Wz978gMmoLNQxLUs2viRHrE1NXAEAtw8J84JmsJMuadgNxhYu4eWE25xzQ",
  "key35": "v9LxUNZt71ZgiVEqdtA4aAr2Lhw6vAHiFfLTjkiMqeaa1odZV4XSCZydLvykBdy557SbPZjenXe791HSs5UfBLL",
  "key36": "2zgB81McVvZNh21DU2VtzJjmCPdhVyvjJUktBti9tndoXwz8LeKq9ecRUAVcAh66gdpF69YGdUaK7PKeQR8jLN7A",
  "key37": "3sMjY8EtS6b81FpbQwd6FgoxdJdLxoAiB2tmeQRyELj4iRp5EthestuYuE7cMUtRkvxC3mp4ss1neHoajTWsNGix",
  "key38": "5Dxzp1dCiHJW79VYERWahKSeed2cv37ZDa3zC9ZjPf4nP4rV8yNd24tCMQMRykSCWtWRMi22UaGGWhypRvtSNPtS"
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
