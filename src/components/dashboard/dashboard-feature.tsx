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
    "48gk8VQiVLATzN1A7R4iNqDpJ9xLvoiwHw8D2DMktfX4NmZfbwxmECaoKGLu3gpar3ytVYAYT71Lnu6tb6u5yV8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2ckWEBo7FF9he1EiApXAKyTSG2CoosMYvp8cakQjxJ2gs2hhxSosh3g8UgYXmAPdjoupCP65HJfQWWoHdxWtVf",
  "key1": "2sKh29GvswRtRpGsF5gLkLpg2EpPdTgoQ2zh4SYv4DqoT8WBMKQ1oheqBP6GFrchf4n1rDXFSFhtvSWPurfZprkd",
  "key2": "4aUUpZz1NMaDDrXu5y6GZs2NdtgiiueyrHbcAJLPB1evbVH6gQGs9u6NUTvbLC77d8ML6ied8JG1pLxWpaDGuu3h",
  "key3": "5QFEasTXaznneqhz74z9grt7FsiuwPUD8U6brYDqShy5iaMVEzMi1ZgSd66gaAja4epmdszfekLUVhx2DGzT53A4",
  "key4": "2fZbjaiynMvh63bEdsyzKPFpJHdFnavzLn1jw92KYFzMpmhf8E144GCr3cnyMs46zCEMUCM5PQd5r9BGHKcKfueV",
  "key5": "3t8t4eEUb9iNZfB8zvQe8qwkmbS1RykyjxEgBRyLWAzWgeJJ6yTjDoEA34Hc2V5rohVXAf3F8U9V4fnLrJCCom7w",
  "key6": "3D4N9sTDs4wTb7GBJnUNaiUuntHWHPaPHPBoaEG39xBMRnpr3ff4vyiMFerdUfr2BdJRox5eBBrDYqpc2X91Men8",
  "key7": "3CBC4wqGyX1GvseQnimdPQRtuTFcsSkaNE8vsUBQD1di9Buwj63sNo4986UMpCcgisQjzwPn7LRrdYpn7aWm3tuG",
  "key8": "CWtDEDidDAvyG1gzLKL82GFzP7qVp9aq6D8TfQDLVBqZGRQBEaeRDuiAfqyLmZCSQd666wrHar225pcqfh2gVbE",
  "key9": "2G7TdaWpXnqCamu6HFjUhcFtU4KRo1qhTM68MphPD9hm9uLr3yUDSgjDove5RzUScH5C2Z1WByY26CE9jW4mLYdf",
  "key10": "2VFywZwDkY4583vmVyduTBnrtm4Hy6djvJhU14a2HmZB1edrynqhrGRrXz5U947TSvg9wLRxucDzEmu4q9SBBn4B",
  "key11": "5qjQ41T7E93HCkKpqiHiKbSYs7MQf1B9kG71BrjxbsApxJdC1UAFjfBPgvDBn9Y9pvYPhTksEF16M4bFJu39sfg3",
  "key12": "5ShhMby9c8WMCCbELuGUMqvYk1shfhGiLF6dGBBqYrdRbWMXC8DRiwEhdExrV7ShNEdQbUnzf22nycme6iEbxsDe",
  "key13": "9HVgaqxfGvJTdwtQcpig5362rvcjSZYMMEMQ1i31gVmH3GPMGwe3GVpJGhic72TBNEShh2EKaFH91ASGY5dJdxN",
  "key14": "2vzqo85fMBJszf9VM1cXZUYJ247Pqb8hs7NnuadhrdVmm2rkFrMTesezGHUiViE5u4NziUv3PRSDD3yL7SWdQzoM",
  "key15": "3QbZAQFMwC2ibyJzTBcDPJjDg91PXBDaceDrHWqh2ak48qtoDU1HhkbzTJqmSs8TTLHuQPX9UH2LNPkvkQ3A9oRj",
  "key16": "2Ye6MXS9dXnSBx6wB4aCJPTXe6f8jjkM5VQ1GDFm8o326TqScW4UE6Snssvv7dGfKARA8PWjbwyeVvJjeFKH3zde",
  "key17": "tBVxFqoFcwG4Ksnc4WE3VV6tzS4XaokMzgKFM93nwk5Kp8gLZYpm1Mh9Z84reoZtjv9LxNWdFkG3zwUuMZ2nGt7",
  "key18": "38Ho9saBcS5sdoH5n7KTRCUUeovTsNrbWxbjbBjwqGbgnxEPeMFNjHxXYRisp1gCJD37xfaGS6SHsr3KR1WCqBCd",
  "key19": "57ZZ6a2kdySD5HvUCNet8hWEUCXdJwjcNdXFcxXaei11ZTYPnMjHsBmtDQxdL74hJp3oficmgAZz1FRAocmbUGEk",
  "key20": "36XmK5rMg63ewm4bL2BLbztSGW2kih18rwNi9pJ8WUQEQki325bDy63FUZYz3MtbGs8T2i6oHHYCSSUNRmAt9xAo",
  "key21": "4cTh1BYJb1PfMi2oxEo3sH6NuoPqNuMsdBq2ya83p8oT5KDkj7JL9EYzuNvmZVwccVnCgYXjRSnsBLv3YsaqcRKJ",
  "key22": "4in7VeUPs88SoYQfEsTBqjxJSSXepzJWDoj8f9XNudNyfncwNw3TZMdtq1MZEdYx7tbdxfXCWW1odV8fpAKndsgT",
  "key23": "M5EpV9Tz1mdWBKWYeVo49PoqHsSGRsHhFFZifD4mBo6aSsuQZVnt6TQytggM3Ri4dfgvuPxoLhUJHU8dpEe1ZTF",
  "key24": "2UF9Zv2NofUY8MTCqp98fqS7AdYpehDR9xmmktqTknhLAiRZKD6FuPQb3oRxXvDgjraXJU6AXvYAEvvzFABXeY3T",
  "key25": "37BnNXN9S5sjCYwYw4ari53eCoo557YQwBDU5MiPwBwtML2S5qdkukUs2Mwum57LZqTDSmVVNpTFxfWfS2o6in45",
  "key26": "4nMNksgsadvn5hM9b4t2GU3r53L5YajjeXg2UJKnbRhZopEFrZJNLFJKQVAeD1SY96LNqABws3HVxDpKCcWkLYW6",
  "key27": "4DYffTqkUHrCQK6ZkkeMiXEEH5bvCotS4jwZm3WFNHKorhivLbnGWLTzSnQiE52S2KqvEM6eD76XW2B3FHPvfSAV",
  "key28": "476PYmhhAxAwNRH9pYhkiZW6zGctH5sB1o8t9D7PK5Gza2ekU2jz5fm9TbgvY1HHhk1PmbwvgiQ3e2GXspTnzCKH",
  "key29": "28Jh3fGM5mvZNf7S6FpjZfK8msaoSb91H8T23D9Qj3AWYJukSZWRn19fhUUPSrZV3tuNKJmZ8S6rnv2sHCnYKK9G",
  "key30": "3ako6gfvqgaJqzu6LBwgyovTPFgcr6YzZoRroC14Pco192v4yxNiUteiAJVhqmdd2hbZQVykqWzDLJ9N6zee7yAi",
  "key31": "3E4giBu7jSEJYVEp7fLV6JJxaBmW1WTY1BivSYBV6pVTaWsRHDXGjEGaMxDPFx5M2xt62vFwkfQz94q5xmV25sgA",
  "key32": "2o6TXJPaERzkmhhDhdxKmwGUS7M2gXvFdCA4KzmoGPpsu2XGCcRc8TffmwBr9B9NVXLqrHLSTScrYAJ4agLyE4BS",
  "key33": "3To6h5St8QdDQ7Rq3sgLxEnUPvV3BQMeVqGhtuf18EpvgKj1str6fo8CHcAy7WG7QwEE4ygA8T9mCD9MHyMZDbsu",
  "key34": "3BVYeLpRRQVmJjPH4ZKhGSu4SJTb6Cj173xrVAYWzkgo9tTJENQSwU9dUxrH69KGmPVPqZgL4mpbBPUKp8fchwER",
  "key35": "2oR25DsDXxSxU9PieAgL9um137KAbkFs8A9njppTBqa5Y2nsYx3yG88SJJ7bXuoWBQ3sTx3G3QwxdfnDRLrAWCsZ",
  "key36": "5VwzqHGo5e9YzLFhg4USgesnycPu1dASZbB3aca12aQMWeKBfTnFkyBVNJYCegBzUSuDgSKwXqEcso5zfGa7R98p",
  "key37": "3AJc8gvHK5cjSdGsrCuZnUWqWjJPgCgn6WBeVrYtqRixC9JvTcRE7Fz8kQQYuFtmrYjxkTGCccnCrFrR5LqmkaXn",
  "key38": "4qpMJBXBJFpjRjkUuEtG7SZTTQkpLd2vkxNmxLvEJPrcxCc9igcGdfPyuApWtAjmVymK2TDBXGbxnu95hvoJvziG",
  "key39": "MXdQpgjHNYzV7P1r886JMGWZS4LWedMDgaKns8Xyh988RBLBfbDYvM8yz7qKy18sBL6Vcbfjsq1mGiVrSy3nFqw",
  "key40": "3Zwqawk5oXWqhEjVFRz5idSWc8oBe6HsMDBxYChRkQ1gniNuUMKWmyx7bCPPHqqvKQ9DgSQGzN8MB7WTb1HNXCQX",
  "key41": "3T2DdaTj25VEagdK4ymRvyMJL2MGUuYj1oVFhQqSTdHjxpfzuYCR2SisDDbLE86dCgMEUSwMnAQNaVgv6VQWpoBo"
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
