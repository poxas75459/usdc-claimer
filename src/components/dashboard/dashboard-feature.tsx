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
    "eX2AtVsFWSNGkqLpKtefnF1hDq3zkcFfDwryyBcYx6BiqbWEa2v9t3Yo9HrQAa9dpUGE6Yhvbhr5MqoWK467Dvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLsDS4p6geJHjThNJztsidG3zeS9Cy6Kc6N4Rbq8oBKSTn7eoaQZ1G1ej8eoFDsyGdSpa2eRDvzvFFSTafoxTGr",
  "key1": "5vdf3cSxVXyDkYnpz3tGGANqhFd6D1YMXaQLx7wS541kL3EdqseXJy26SPhSdoVAQ45y1zk98NYjsTauB5NDKU3Q",
  "key2": "32pZTPCbtUqGmMNg4f5FX19Qjif8yN6gZNgrHdkJDfXqx2J45dxD7UoiU1gncjLtVk5JXpaZmSVaKcUV3BJAgGwB",
  "key3": "45Wcnco5Wgwc3G1WNGfS8g5jVJ2H23q5BYAQu7kTQpfJLWHNBZBe5yttqAW38gxb3Q3CufW51zrpauhaMCn4mZhF",
  "key4": "2PoQrS6Dc2qkEw1X4uh4EfGpJPPUXgQLbfTJDhEixMEStKfzfDwaS9r6pMxUKDxs6hpxLNtVWxJ1znaWQkdiL1wq",
  "key5": "63h9aqgS7mX2biZtbP3XA9Bk9sEaiB4BYa1accgQQbaHRqYfKDMpiTFxJF582bLTUdqxaWHRcxfTZe73z9N82pHs",
  "key6": "5c9yQM7KiQ6yncfxFrG3Q3HNjkBq11e4HKd4bb8Ag124AieyWWhnLuUEivEbdbiQejVDCNpEYJ2UaHyp7xUY3zjd",
  "key7": "5RJaRa1J6KVpqwFWVoDdULdH9LrYCeTze2SNcNxT9EwLPjEmMQc8wDxiGEf2M25cxnZf2qmx7jayxD9TMgrofZED",
  "key8": "3GXZbSS9Xqk4MJY4c89RngTquuhiNmT9GR119mAwUmh6Fe7dpyVuBcBUaPojhtb4C3vRmmv6uCT68GRvG8StjVJP",
  "key9": "37QnoXBFMgLokXLX5GUnKRiXf5fg2BJm7rVSQGh7bSHGjZU5v8Bt1Q8BUGsFHxwnjyqXaNLA279eHS9YjVYhGWjv",
  "key10": "5u9hpHjzBrzDTdr5RiiDKgfNXYnKEPdtfZv6ruALemWcfWGRfxZVxGBrGhfGsqniNszEVTQouqebap6S2QRHKvP4",
  "key11": "46UGRkHk87GUtSeVi1zafAAy3rEWTFGeJM2JzANQKrH1YLo1ZGCe5AdMxCdVdQNoXiyMWvx7LDK7VYd1Fq7vcVmL",
  "key12": "4xAKSFZP4pFkyo164nspdF89CGf1JdcX2vEFAKJe9m8qrvA1NC3bfF7ZubxauKKKPBUVpECBaCU9sSg1kEbWQFWx",
  "key13": "LCabn5ZT4hnbYyDKGY7CRcdXohQv8z4TdkcpMbi5qCq2Qp2oXuuJRKTYRaPdAZ5BMDLdDa3CK8c5F9FSchwKqks",
  "key14": "2ECWscw8bN8HKZA3BBYzM2AMbe1CMMSU83u7ypVumEKdNNhv1ScKnaeZp6cirAikwVpt9P7SAMDtB3azhw8nbHj",
  "key15": "AMur965HvCntZBEA8VxE3CHYH63meCzJvF7CqBEex9ySpFW31nk7g5xN58y42aTzcyDRQe94fUHsTmw8FDMqeFn",
  "key16": "YHKo3XrQkj7usjVVoGeRXL3y7ZuUjJdffWEdyxLjAEpuaDWFo5PAhXpBBPahvFkyAKQ5PKqua7QrKEgcEXuNdrf",
  "key17": "3kiCqcABPaZZQipZtbLNNDX6i3KfstGj5TgtEziLDx2gmKW7moVZwHNKhh7gDppRDAWvmmPun1MopxYx9m7KduDx",
  "key18": "2AtKw7dVXPnruwPyPa3b1gqrXNvPcC86qXYBHCEt7v1P5NiZAKE7WYZkEe8GYabXtVGTrB3qdVEVFhiPtLPiWiBi",
  "key19": "2AtNfwmJ7nXkG9RALWce8K2YhAvxRWWWRbjK1PoU2A4nFnBZF19NqLXw5ncRu3wVoKs89VSeWg16zXcqUr3hch5d",
  "key20": "5gskdwkeebQd4SG8TnuR1iTgptN33EQN4sktUsC68B8n4EpwbUk7Z6f8LvHYXPCSoR1rsmxitnWdJRtxUQHi7Yc5",
  "key21": "51M5PXKVKchYo8rFYJgkdSheVYoCeVKSHQQwTkSt5hSddyLsr3zo8zorkf3VixdUGctsk2GZvh9Ma8mHYzsbdgGn",
  "key22": "3eEij8pPC5xFNjhKgtYpVvUp3ADhVfYR6Uenh9vcBdX8kbWvbx3WMkHAL53dGSgjYT69yiX96TMHDGVbTY4NV1FW",
  "key23": "2MmSQjCCi6wYainU2Wjb6Z42K1jz7cUmi6gG2wWWPCqrHvQmJtPFewZnDCQz3XvFZfDu23Fyzjg4osRNhBPL32dA",
  "key24": "5RNCQwLG5e1eGHbUKeNpZwA4UNunNgyNK5fPLiQH5V8QFSBHAqYk2fD82EW5PggEn92KKccHAE23Za44p2T55BPe",
  "key25": "5bsgECJx1qr6PE1yv79yu1pX3iHdF4iPZshBrH69GtVcouwfFnvGiSX6mFrqqVLzvD2jcW5cLkJqJEKomP6xmHwU",
  "key26": "3KY1ihLksQaFPLQnSptMZyeyekPfyVM6tvN7HShCgRqkPXLwCXJifuHMpcq8k5jgHsDcJoRDoNbzGcpwaM4a5TEE",
  "key27": "3ngYeWXeGRMMvQ46WYgteNS71qXmN9SnR9c1f6TtQwG8dqg2qzWwann6oP5vTsVHEPUoY2d8gXpjGe7Cba9uyrUv",
  "key28": "3eorkJNd3zhhQbGbpLVVvjBSnB8UpSAtRagEL4DadUtoZuwbJyi98isE5zc6apyiRUgQEP9QPM7f1AyV6xXQe3do",
  "key29": "2TVrFQAarwxLWkwdkMuzSDEmpRADamxibA9PtbgonWKnu7GiMKZG7XfXZNmRHBihQ4c8hFpQfsqieHTq5JMVX836",
  "key30": "4xU48EeuiKo4gnP6jeiAhGVH2VdMsjt6bowNzpRACK76cPEjGgEyThgVWcmh2EnKrDou7X5Br158DNgHyxD2yMUs",
  "key31": "KGsxEDg9dQ58yFuoRVDCYinMvmwgRapkZXhA89md51Jpc151tgRAfz3iaQoFXLNcHMgoXd4qKLz5cwANPuxHrDm",
  "key32": "t2zVxcU59s3NC7ogRmBrBPdKi2St2DYMo9mVtufujJesHwnj2bf73yjmvwUDyKpEH2FEUxs1GQC5sm3zs1dQAJS",
  "key33": "4tJutKxeWr7Ewn2kbYYPJQU51mcfQYyKuDDcNvs5E6vnhsLZuSJt4CxWAp3FRa1j5weDy6gu8EgXaSGU4eyXPJ8W",
  "key34": "28drmBMyGdWEaZHgh9dBsSvVYT6nzfE4PFhWYBCprydrG2dwGJcspWC24yTtvg5ofRo9KMnRR8fVFX6Uf1BtaZSG",
  "key35": "3xHvM9scpMvftDGRqappmaEn68G6B5ndu9TyhTPGZVU2WGmsdWZ5GVzgYnWbSNzqwQX4mVUmV45NY8o4wWjA3oZi",
  "key36": "nT2pj8Q3q1csiNscLHEgYjKn4MJFrcHzpPrX3PE4mugERD9up7F3voDU3Nnf9uYyx2dpFK7zWg5b2gZgUg6dyje",
  "key37": "5C7dvqhLawymBbgPnAJoW3AghWiNqqAWLXS8CYqyQ6pV1jQy7cxv2H3KtHREaAGMotvjVMnpBgTiGMUPkui2iwHm",
  "key38": "46dEYGT4FSweAgY4AZ42RpAjpRaP947PWveYzn7Gey5uxMYpAifL2F8PYqqotUh2jmPveYajcKyuiArxG2k3CEcJ",
  "key39": "3PAeBiDCpJCRNSiADqoKt1kLbaBWKFX1Mam4ZBaybVbHg8sW4s6cxVMsme5uizpufAXSCBAzfTi8AgBwgRxyUsKa",
  "key40": "4PdwM5eRLBXPWoTJeCMnZnuPB3K9ki4ickpC5uKoNwHhQWawd7xVQbvmS7SZeyYMVfYYM5dnbLcGEMboRnkq7WcH",
  "key41": "5DxUQJXEwo5futHq3G1tPEdAAAQfu7wZvyVL1bVhV7WnDQbgF1B7nD94dpt7mLrkJXtoJTkLCjtbjQktTYcwq2dh",
  "key42": "2hZ97E5YULoayPoCdTBN3xj9RF5aexaZPftU1xLMXMa7BpkPpqkDi5pFR2WarVu2SWroTJZq7zDUUgkzTuaKMg4A",
  "key43": "5vQnzunGCRPXc2DLNDB7VpP2WZjaPa3egZLdXSdz8N2Q7uerQTz2sepoAKdUVUBtNscdMPoDKg2miG131VUa8ti8",
  "key44": "32DmCXg1QSLHfNVry1ek6preBpZ59JA4ZQxz3F4BN5Z43JKW6CpMvUVRKAfzbBcJYZYKLLe9BmGiiWEWRJex8eir",
  "key45": "2fK2NgVtNsD3HSh7HW6j1NVXtHPPLkuUgfyfX9AhWEKTrdTMEajJk2C5XkV2rziN6JeSAdvvcJhhD9kGsjrKJef4"
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
