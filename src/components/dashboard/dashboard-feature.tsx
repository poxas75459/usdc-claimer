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
    "5gK1oQdNeYdwJefndxEv9MiszZJsBw9ZdmtSYVhWLXugFkzcJjJ6TNu8PPwMjGc1yuCQBbBwKJZCVkFQdUUfbsEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6MbR9oJgaWyeTGCX9TrZAsJTPuwihezwruZUasSzJSkzwoNTbQ3SbpLs6JBCtLVxEm7bWYZPyjmtRV4ketkASK",
  "key1": "16waVGz5Qm8SBLfDDDQ54HzNRn8HegQpcUcnxYkciCwph8rm4xyGvPrnBi1iprNX4KPD3tH2MDbRJgNvC7ZE3wu",
  "key2": "5uWbJ4hu2zJSEVhhd5vimdtzVkqKemZgd1Q47YKtmk7c91UwdfhSbd6MuaRaK5FWvDVKzrmccPEsCd9hmWDuxNff",
  "key3": "4Esogh8Gnr2vRuzkPCc4tPcvaA1Gwxt5AnUerx7vtWALxGetvix3nKvbZTEG3naBPHdNcxvCnLHNt93h1JdEiozN",
  "key4": "4ZBVkqowRRg9VRhum8ERJbFNEj2UTsFYEJjk8YU3xMudx8BkSA1scxvE6g5DD5XtF8t7twqrzKPmQT8sA8Btwi93",
  "key5": "ZHoQ5FgYFSwpTxwTAHH49gmpjtYXjSU3BDk5LfNMrUkPCij7dxzVs2TjYP2QYAF6pxUGA2HtKDgpUQ4QCW6wuxK",
  "key6": "5Fmhci7ZC8AUxgADR4SNcK1u6BWRHsizuwVcFRt5LXnZQZU3v8a72LXah6kwMJDSkcrS1VnHJdGMrHELe3YBktQV",
  "key7": "4yK3ovfDCRCFU5hkgiA11j7cBYdxSy1GUbSqqVAp1ZakyVBZ9kL768AvA89UfMmHcM9gRB1bV1ax8Sc6qAnAjf2n",
  "key8": "2w2w5hMBx3PEcMxqEURmFgaBTTTyTVZdvP1A2jkPWjtRM5YVXiYPdnTX7gro78sqz9BngktX9XJYtVhwFUxsxbQJ",
  "key9": "3CcyjWw8mDeMgAxEVoZoVhtCGW6T7BFY5ff9uZLMU2QfDPYbqB3DtCqjnSqAC4snRY7NxEY6cF8rupoYHFu6pFNL",
  "key10": "JpqM5t8CV7q2YCdQFuKbhE6skcdVePdskLxrR8tz7mW5gTFmGBW9J2LE9iK63Dtw2j4LXRDdmpNEG7DbqWK4nD9",
  "key11": "3i1cWWHSC2mHgjwdnt2zk6mCW29TTKNM2s8KiP5174PxzAUNcKjD65wUBE9jt14qosff3tJSECcXKWw5YTaJ4ZQH",
  "key12": "2C6zxEmkvS2NzHUoCCMBPGoircNVm288vhyimYNCKgLortt9YFYfgcb3nVbsqzgGKRqGWhKqqAnJeh5iBpA6wqML",
  "key13": "5SRVa7f4xmdULLjJ2MemjFTWfmWXbAjBg5wp6GoLhtP7wVaDv59Tgw6X2ydqwNTH88qMMHeqjskPneDbzkBtFcwx",
  "key14": "2nphpZ67qjcaY4CRdDLHs8xAnSzhGri3Vfv4JhxK4K8vfP2kU4mPT3ZvSND86KfAVktV7Tv2uLUNV6QPbP6cPZpK",
  "key15": "4WnBqgy3N8wcYR5ciWzpg1Dt4pN3STw2RvRJKA6AwpLu7BXoekBUX4JwdhQuNG3F8emwRkfT3J9GJNjrbz3xZvzK",
  "key16": "443wVKZjU5Aau6wz81qnkoPrLN2v3JPDpPGtxdXZTVePYEo2dbVgpWCQiruCqPckh2YtCRopLWLqbJ1N36Ye4Y7K",
  "key17": "3kY51o6DQkBP69zXJ431Ag3Lj4WeUknZHfx3DSyC5ooFokkvANQfLmFCHAMERQxveMmJFMoV9sc1UvEwhuJuCEiA",
  "key18": "2bW9CvQPkXTR2MN4gBEArfMQVC5UXwL4LJk5xnNvJgXyJ9CTuYV81nhhe4gx6j3wkThGUMENe3C8NUe8q9SAvFw7",
  "key19": "3nqGF88YkqqH3qWAf8EYShmisUcW95ANpsrH9DBAyEMu3KGd7cRm2iugfHQNFBW2xQ6R6bXPfFsMDYFx1TyNcViv",
  "key20": "43f6dcbWuvmXh8rKR5Vswru8iL4fPaQv4BA9A1GVKea7e26GP1vJHN9yekWVyBqM3dBP8wijdF6CLK1j8UN2uGqc",
  "key21": "4V3TKbgNsGAGvgGUi86UXcYoJ5pRbeGNQbpANrUMY4Xz9Emn6XZfLKuZEYATJkoPCVBNxm3cDgEzEx6kREsWcJM4",
  "key22": "4EPXHqdW8CgAajQVaszA1u9A7XPQh5aBmtTBsjxMNMt9jjbXdTe2BKWhquCZdX5Nvr3YdGgj58U4fKoRogd5vm2q",
  "key23": "4qPUhRKzZDQmBpoBmpFQKDdZ2WQhZ73uuvfLbHxyfkLu5UvzP1XsyhSYcf6XhNuVX5M563ZCrk6fACx57xKYqkzo",
  "key24": "21aV2AotdqpY5Q3PvpswUKgiUQiPRdz3CimTSK4G1KiNcmGRWuahz69Zyh3bTZUYgRpqttawuMD9aQGG1LjX8ZdT",
  "key25": "5n5PwwCDnGhtGPoMwLyVdHVzQFEbFfbBHv4GysbJEoqjxmt4ZQZQaUmEahDYrVWqZW8jQca1VUtPLgUay9Jt6yd4",
  "key26": "4uf24q7Q7LAyc24nnfgtGv87kFd4pFEFCfgghuCxVnztyzY8aG81GW4nUCFXZkYXKCL2hweEs7WZNMR8MCP3UkFZ",
  "key27": "3XwkWVCrGuzLHYN6zsoUcXZEeg19zEozY9oHE7z3LWJfs3WL2e3GuRhSb8Xea9Z9et8AVzcg98xTjYTq6UVv4jDK",
  "key28": "37iYM9vLE93D8z15oSRGvPYs1e7UTBt1zC4upAWam91dsze9GbDDH4tev6Q7fgrYRQf36NTb7Nk1KxrZn2tpV1f7",
  "key29": "3ZGdYrWmfKntpQv6SVyWm6JkdoWoGLpHbWxnEU7HgPA4juCvV3E5naT7mDv4RaHzqM4EpBDqtkxSfX2ALg7R6vSh",
  "key30": "4HPtULJ7TmxnwKwAeCx1fTJrRKoreVZYDHzt9m6r36YCFcdPcvTCHN7JcU97NGarB2CjRE4FJdxwuDRoK7cHywH8",
  "key31": "rYGJCdn9zbMPpSABzwFWF1Gbcj2yNGxtVYQ6oGSZC8sMXzfs6oumwGFoR4PX845q62tGKZ4yxWmZozqLY318KdB",
  "key32": "8Zkwq8Jk9Vu3nYvbBBJmMjChcZMHuUCk6EygGKAPVvZzJjVouSLTg6Kjx77hYAZGTbayKCFgppUXVkeLFoRvQbs",
  "key33": "2eRhddNMvyYr42iXEuuucaXLMcmKUcbM7kVqreNRExSoNxvarbrEqPmUUVNPc7huQEZUPNaukpKqBbVryzWP74Lq",
  "key34": "51NwYTCNw3NL37PkXBuGKHQqrEp2ec1jicMKGuUwnwsqbvG8KBkBKjyz3jkPGtHm6bw4ujaCQUoohu2ud7Qg5J9M",
  "key35": "2APddPruSA84Tego3NCAeibVsFaCPreYgJih9y3F6bvQwBYnUUDquFfKyR7eDKi2m5yxYPJ9bWxFTaHrARH1tNHa",
  "key36": "NU8Pf1qkaYXXAkB73ofeDSnQx1sNdBpS11dXLxDxiHa4m2DumYECNC3k8wLn3qdctYe865WRShCvsokjEn64KNw",
  "key37": "bPrR3wSoMM5VPHwkhXr1U2sSBUjqTrsBm4DhtPyHVffaNpnC4KMChhUmWX7YkcT4QLsgxkoJbwRJ9nXBQC4Evjd",
  "key38": "21pz8ATrKunbvvcA3FwSUfrbzcFuRRG7r4SKvguVq3A1xDnXs7FPGBHGZXD3W7oApFi3b1UjeoWW1hfMdA1o19g7",
  "key39": "2VBiRh2XmXMcngnq51eYzesnqXfkPpqaCNrYwdVkrKmjf6zWPnTpD57yEJ8QwZCmUBgxxR3nyBCPjzZtg1yGh3SA",
  "key40": "2dH69wpED6TQRmBSgGRWxq8zsrfCQ4u1f2BNtssiKqj9G3JwPS9HLjfKNRz7BYaR5YZTzwjdLuUqqrS5ds4iAtXT",
  "key41": "5Z6ZH2QUbHJgHtHeAzwnNcNXANqioLGsLZ3Y3MoC3nhx4JbrugUQrYn9csCuXJ9Hi9evqFnxk1cDe6RhFj26dBVH",
  "key42": "4fYhETyE44Do8wJzfHEfh71jD6zjBQhSXWxVW3WoehmAVazU36Gb9REvXEBgyEEbnVAJty8DFLdJfxoRmpSKTgzr",
  "key43": "uNsd4wKNvH1zdnKQFSUNRzmGnGRdbz3ghzAKCVL3c74PBdoj979HR48YCtf94TpdVv4br9kRJSAZxQLhxmYQFro",
  "key44": "4trUo3ngB6NbykeG9CtgEwnqfp5deTTg8L1BzmdCMTEZGqMGsiPqAsGUxoJPbMicJvjfDFc61o7gMWnsDnYL6YnG",
  "key45": "4nmtSrrhvx7vL8hKgTSmWXUTMWPLzYmZo2ciEcB47zuU1FWX6hJ2R2R8FY4AuM4K3JkdXQkBSpXDa66cbf59JLuZ",
  "key46": "5Yjo1vzyzQB7cBdYSTKrXxvNL3ggeY5GWJTEpwxa2gDFnE2yg9HAUnfHcJdcV4Vq4y2G7CcFEawQzuahuyeh62FG"
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
