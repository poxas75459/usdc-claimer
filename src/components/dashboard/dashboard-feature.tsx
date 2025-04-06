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
    "3CbZWEAnweY8rRHDCbzH8zUpcYi4fZjQ3zvVVm3QwT9t1JxpsMX6w5iXN41dc32KNPhuTCvqnDuZLyZnFzKeZqAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QDAMhgwkSM7cBFmQQaQrtS7W1JRkzBSKhqEVhR7hbspnmKsX57ArM8Rtefbrk3tPYYoBpkzgpKNBeQf23UqXn",
  "key1": "4iYiiv9CeCBZ1T8nhXvnKgGSXRgfD5RpNkKVvrkSiZMC4MzqtS2J3D8aVC7oCjBpUz8ngY65PFoR38QNXs2VJCwV",
  "key2": "5vtf2PKEyKcFf7pRdupkZuCU1scmWCrZM6TZGBQXyHzGx2TDT5CcygCxW4mWAtAe3c8Eq9KKWPynu83c24SMFQvr",
  "key3": "3ipWJrm4Rb4aHCvC6cirEExWQvCqHwktn47vavkXMWE5NDweXBnFGrKw2gjbfxzds2KgfDhAAPuTePSNGtS4PUXR",
  "key4": "5faJdEqLB4sgdif9A5zsbqrJLRQFzziHKppedjfpkzRofAjjPwScVRgfRcCuTrAa3Z1mPVwgTwpHhDFdD2TjzgVB",
  "key5": "qaLYg1hcYsXeGEjTdgSBUr8hgMt3rHcDp3spBcXKcoaXiabB1ceiVX1KYXLPKW54EG6ZvGTpgv2NgQhzpHutW5A",
  "key6": "23JV4H9VvPDXH3HV1d8KWoqZw2GzrQTNiVq1fCpJww2eS5m2NDzJLmVZzfN49GrsesC5eWaQTrgXE2ALcpY3UgZX",
  "key7": "3tYG1sN4DcUAcgZoNqUf5dopoNBqsMKUzAQRKNggVePmrYVGrDGQhJ7vRuuto1QYmesXh5Cjphkb6nwddyqzdXoM",
  "key8": "2fwKgNMz9d7jruK3Rbc9hC1JEWv5BhgLdAhMUpwFkRR4QosEbXmzywMf8nsLcs7ouKq3GZov5gHsbCoy7fqQHgqN",
  "key9": "5EJ7RPGvCbRQLtaVRmekSyUMd4dDBNgniyW83rADnro2u3L86GaB39pSvZ7vz88DB5kZ9DuL93uJqrZSZT6jjvTK",
  "key10": "2emP31iWExMD1GdVcTJBkG4QiMLtVWrDrsqtyxWhFgSN5Fp7nzk1TJ9FAGcKbEjo9iNPoRj5JXVPEzVcWcRuP6G4",
  "key11": "2Xf911Wmkeff5yenfEVEtEmSq7nJRSA1XYSvrrb7DUYYn7xNSwCDdBfUYDivzm9QN99grTFJLNFiVdn2H5b11sgm",
  "key12": "3VYHGnD6uNTYuiG55bkw3Y6imoEeDTysxw1c7VeG3sTWkb7kNvXfngUn9BcjTgn4ThZQ6U8cdecrhe3W1YUu4nGZ",
  "key13": "d6NutqtQ3VysWYDTdKH4uiMAeqhuRcfFHKTw7Cf2WdRbUYrfg4c2Y3sUCdEDsNk48bFBKU5sSYdoPNhJcZiUbHH",
  "key14": "4QNUcKQ9twof7ivWqZ1vGsCjujpeio789d9bpbLKryJGuotLYNFYWahUrzXuCCe5jSMGJ5jpr4BnkuDJeCxAHwtU",
  "key15": "2cm4mRB8o9MwMNHcCE7tfazxaq7yfuBQTHoryEGUuMHda4yucmPYc9YhgGZkPGuUNRsAPwrz1Za3QKbpZvd8RbuB",
  "key16": "4VQgtgpyEhFfc7BzmoxyHEAtGF8XbVj8YyTEvooHVTTV5UG4FeVW2KT4FRULYpNBFMs7HTBjtzGWbX17LD6UX86L",
  "key17": "49hk3uWVQUusyuRmFixR9d5xxx66dQpWmaCoHZnjRreUpRhZf8fK2cHRU3zBGozRxdGEtqNwCY3z8q1C5jrsuqc1",
  "key18": "4k13R8MYSZmtCz39QteCJYDEssWdZgHtdFWVRT1tVWnq3RhrM1Nk9LTm4T2orso4n7De2f5MKpTW2gPAvrUWD9K",
  "key19": "5g2NKvmXjm9choS1wW8AH8bmEixPyNd4tcDCwscan4Zbq4YjA7q5okm364KPs7fqNpJzZEEXQ9ycpt3U5dDLxDtD",
  "key20": "2caCyUe673T2Jf4esnAyk8FATyRmCYHTEdTtaQzhPQGocGt8SUkbu2oeqzUAc4YSEboiVipRzmhvLdLn6hToXNg1",
  "key21": "3aq18KYCRDtSaSb41HT4QG2DkD3gdFPorNJxgFv4Ws3Btr4bkM7gvFkS6Kg7DrkvMJrrcsBTt2kKK4ASbVz9FXUr",
  "key22": "7ryVvMbWVzu8uxbKJj4sfN77NmejTHQgfURwjVGzi5Uop1QYufanaht98TvPFauRymVm8tAyMTR3hsaLxkns9Ee",
  "key23": "xskHPcycbmyctyeyPmkvTsQWUM9xQ5eY7wwemBizejzfYU5gt4NbzsLZwuMVrg96bQkw5aE8wXgi44Z7nXnzCjo",
  "key24": "2WVHELupQovvU6HgZn93mufVaTeE13ohLK5Sx3yigUDPvBAmG5d54NqcaEkRrZAF6AiMXujspiVf7C9V26F2sHWm",
  "key25": "4J3JFY8uTekR2DLm6zLZ9JWEcbq36g7EeeDfjRccRy96URnk9weUzVLXTprpimEwp1HcYgnAPGaN7PS72y3MzN6x",
  "key26": "2P6ThiSikVLJiZ4HEMJqagnHQ8v3gJbDMZMFZYnZMm77N3QYeaYhgVh5qMApQMdpdBLGcvpVLQQrEfZnZpMkjQzx",
  "key27": "4VxCpCdm1wyjKsdpq2Q6YJjP3N36dUUvV4qnRDq1w2CTQYUgvUwxVmxcP5nPh1v9HgUNSeE7GWs9JqGrRLxRpqUy",
  "key28": "51eygWRzzNFbbQPaKhb6hMfU4tykNUTA5evgq4XDVXshywrPCy2fLAWLnG1tMKJvzToCvNiqGsLmLjYRiZU8hpuP",
  "key29": "5mfvFhoj5Zg1nr2Af1vfbdsqvPJnix5ww1fxYqpJB1WWiY7vzuzW615zXpGZtHmoHPzppfpgYvk5B6GKHN5FwPd4",
  "key30": "wtNQp34TvvswAtandhRWJvvBZKE3L8SDPyVAp4jupha9Pk6acyGYMT1mPRJAeYmWZQaCxDGtUvAEw3g5D3oNueF",
  "key31": "5vjSxTw3LrgJY4PbZJRbrwA1yMq4EDQ7k34yHmtxDkbLpZSqUgagt9bgFAHXXgL8yYqvcQ54TQponsoBpp29psTD",
  "key32": "MEpCmToXYJnKyM4Cfc2y4WYk4V1WNn2Cj1ZT1W32MRto5R2AymfkXyP4yjhSHe4gwC6tr3Xs463mBx13V8o2qnE",
  "key33": "2VuyyuCThuZwkFJ6iCagAXtZ6bfvMeAeZ5vCiYUR4wagdniji1WUjSJwEPoBVFFAgMZpoYQ1uEZ3i921uDQgiHrm",
  "key34": "pQmeW4K9unYUZwzhaf4dgp7XJviz3K9e6skCtZ2DU7MTLWrEaK2URPebv8bGg6Swf9YvPtE2DkTa2375Jd2G6Bo",
  "key35": "4qjVLtiJhmzBNPkJqoLWtEghPURmMNXJNLn7ZGKZk6kKAiy8JLZNcGfSpVK3zd1mJ3ArLuLgZeb19KR91hzRXdBr",
  "key36": "42KFUNWocnKj3UnUXT1YJ8huHrCS8xRbQKqhaejzaKsMHc3bCBsUiuAzsSNXvKycPFP2S9aspAy9oYgc5ZDjfMZD",
  "key37": "5tygDnPCSzkPFnYs4t4MQruzvUDJYCkvCZp5RvPjCTjJREhdejfECvSGx4SKKDdTJekJLhYHAbrRUGKpFdVyL747",
  "key38": "2CkbcpvXNHBkQ2fD1aQezkXNsBoKP2TD2CmPnMk6TqXeBJGVqkTSpiKvH8PusNPhQLf9nCV9rLRLXG9dV3DeMfRr",
  "key39": "5QXCJdnRuTnww73vkq9myVXffwwDD77LNocaB4wWGsgbj3XaJM5eV28G2zYmXPvrQy8rntMm2Vw4s8zy6VYsNNxs"
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
