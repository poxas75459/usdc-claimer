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
    "3oqALSntLJxEWXT12imtAyvPHWDL4L1YNe2h677PXXnYWZ6vgYxHRHmhmow7wafT43Be3hsicNAbrbugP3pTJmrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H37dZLCv3RWFWsa1JW9BvrUZp4ihK9mWYx8icN94TnvKoP2fbRbV9vBeZ8oUCqrbSu1XB5wn3odsk8ccxtUWGgw",
  "key1": "5vLzWnGGA5uPuVzwnUd2vcRrNbdAZpgJC1mrxLyFjm9x9xvhchD1FwQy4WTvKcS6ZQ89CL52Qc7C6iV52Lg1K4nu",
  "key2": "5x1gfD4EGRBpBJfA7mEA6Z9PXgaXFeB54EBRTrtkbLNxj9VT8tZxggr7Un2iguC8osGtj2KxpJ7gemzvTPMFjFAu",
  "key3": "3NqL31fZWkePJUJfcebnTUWmhXZy4baxRh83UiUQXDRatcuJXJ4mSwPVZKD9zayZN18nrsxqdPjdo6F8wqhpeafD",
  "key4": "5y7xjRnKefhGwkH4Fr7dSw6mYFaBGGU8uP7iQ6C5DP7Wh8yZ5aT3yx8tBvafEvYePTiZCTZqgrpfvpwdcoKPwnfq",
  "key5": "5v1mGV499SeTSR1J4jeoJqfYLn9C65mjGJkseqeoWJAmjZyyww6Z8DyfHhoZMUxqrT6Fh2DuBx1C9yHKUQy3skmJ",
  "key6": "5B2qPTEaNzmdhRJjBLLco8TmqiMyGXGCvRNRxQ3TTLh34c9Tu6Y7pZsCSwNTiSgpCSUJinXANf27LeZZoM3KAYvz",
  "key7": "eDU9LtWZZJgnt3rGwWiaQThXX16ZMawy1cVRyPWmEHVHhZtVYyxcoygjdU8Sg6reifsBLjbGXErwXmVgwCeoeJS",
  "key8": "53hXC56HzQgYHLr3iNPf3qWbsHWfzTipmn78Y9FyiosNHFkNWGvhKdGs4UN4z5wnGaRsSKRTZiB8CGaJHbPZbthB",
  "key9": "59AewKsu1hCoiw3xpbvk9ztDcCTRb9E6hMtQNNZ38SaLiNNvCpVn1o4j7ivCiGeX5ivzbmWZRGxWT5yfjeQVM9oG",
  "key10": "aocypeGAwm5wBDBLGR7od9qKRozzGU967VAkvZnFmRSvKbXBVrao8GAYzyTsr5rZybfwjv8uoCLzz8MdR3K9gAW",
  "key11": "2AiSsNPaMUjzoGJ7sZWtbNN9ex4Lhut5dRiUvnyytomSGjRTh2HZskz3exnAj62a9XoWt71VpkSNBhjSee37JEV7",
  "key12": "3LEAWYnK7Bm9EMoPyJYpReNqxqAqVCUyufauWzzoKRsKKprx4hHpKfMK2hmzaM89YzZSN4pmdhtLWJCWJfwTdsTv",
  "key13": "633koZc6kRUXRJCqHqmEMmKLAB57UU1Hzu3ePewwAYmoQckMTQ1JomtfJgohkNJdHZ7mDWcD9Xpy7q9in7Y42tqZ",
  "key14": "3qa1ajsRJqN5aFVvssukbM4W8ErNab68yCRDbvnyPCEH5oCgtCgSvWZ6yoMpoMFDUCByFWeSnYJrp29389Xs4pSR",
  "key15": "RdB2DDG39J8G2F6PWX13GrgcqWRf2CMxWXxQHgEfqJUXHWjt7mrSDeNK9WZzq4zuWJFHMT5pnSVc9VP7bTfPGB9",
  "key16": "2cU5cqiJjyEL82UGZsuouwc7GxBSvSPe1QRUKcWnKe2JjLXke338BgGecA9W2QPDKpbDg3c2miUYZm5NazCZjen5",
  "key17": "55jWNf42MbEs6kT7JMorD66rZeADGyVAncjN5qtqR3CmKhEEbhMiEsUA8arn5wG1XZ1sNEUEFcw7WWuhbGpEivxF",
  "key18": "4pkXerCZk61yGB6KxzKtVRu6fqts6oWoB9V5LuhUnVGSCoTPFN6xW6cn4LXkqaP15gQC6FSSzmxVd2hsstrAHN9y",
  "key19": "2Dnmh6iWxSToGib82i9hfALyC3EpQa1ppRGzLMcCnAdPTcGR6sRn9us9WxZ239FfQ1vwAx2ZT119y4g39gHM9xyU",
  "key20": "56evKJaWvK6iZqKMj6MD7h9JcbZTVvtYVqHNGJWNvJd4J9gCUQWdvvfdrz5GydwsrfJE4D3xLUYuH539nBaoNAFu",
  "key21": "4E6dqvM3YZhzH3vr1fi63hZBdjAeJ1LrCaq3rUEdEMotuLSnGwBZUSbLzMpu1SjSWwrqDqmSx3PhE2qAZW8Em3g8",
  "key22": "36jrdovEboMz4sLhgwPPX1QbCn1pJ7KSVNBakSyVMF1Sc9mi7bTUnGUPxw7P9fZkYrVHnc4MpgeVVse7sNjDgn7T",
  "key23": "2UrA5eCrR23De8BHrUjFuZj9qGZYqWw1LwXisZNWb2tp4ahCzqAcRJS2Pk5CSDZcCcRVLPcoJzrqWRu2MF94vuLG",
  "key24": "573RwbzJH4q9uPGPjDY1kucNVHM8wPhZpyEusH3gy5Tzm7E5N3GYeqPBpYGPABcMeC6Yc1HZhtq4RvuSQhemDMhU",
  "key25": "5z6ZJAqmyt6h5ihvRKAmdNbDUxB2JRVvhBZDFboDSqeGhQyFai4xWpKwXCNnUFYfRWH1632jnMbEiBcwixURKgzh",
  "key26": "cQeSpikgm6pMjinZzv4MrWEGfGZNhoTY1x7wf3keuLB8rswxWrYz6vDXtShumqT6tQzz5kp3xh8ecmFSoEAibH4",
  "key27": "4F6iFRV74k3mRqpU7msL4b1Z7L7W4aMpUVnsEFpCRmViykh3qau8K9k4f5A7d3jtxhsXKVmDw9FB3YwG5pYUc9Jw",
  "key28": "5hrZgaCHWn1xJALs5kg67eLN1UjuRBFZe4PzWFvG36pTon3gUCqawj3hzGt2ATPvM1iJj3YfEk1ShrVWauvynbEu",
  "key29": "2kouUhKXiZXabCcA78VF9irBramWaGws56cwqoFoiobQEb7AQrrRAtH5fkCVLWFiJV2565qyGjtCPUHhZyPGQPVZ",
  "key30": "2XyrdzDxzGurp3bSP5wpNZkZofUf2ULC71fafNPzGh1WAqnaBQ8zKMrLhSL6CjjJKQYUDxSFDk9MdGxGMjiYaJwB",
  "key31": "57DnXVsVoeWMCqdDaaq98MRUqVravwMigG2mHxwBSqJXfrre9gZv9bwoHAsXuUKBaP4oggLtsBEt5VuymJe1ab9a",
  "key32": "seENKSkhf9QXkm2tETdqkksm2dH2NY11wBazPcCE1CrPSoxGwNQpJQGWLFuky3ndDdcPtNMRKTftAAdn5X51nGN",
  "key33": "yE4xVYbvYUBbSFt2oQeFJbgngiB4mLQUJYHjSTAdMLsZ9xBG5KryRTwyhi3RpZoz1EiyihwVL5FiAf9MA3kvwJd",
  "key34": "GbWq7dho5LRfsfkKZEBBWxmpSahJW24z754Dzu9Djqyi8Gnb35eSeBwJZxH7y7Rat15zvMaCduJFEcHSgwR6NPv",
  "key35": "5YC8UGC89iwKtLDJxcYHCqU1NnoH7kCv7FxcfgNn5vDyTU3knEH9bqcMeNkGnyVUbPJYo7D1kr8n2GTCoHhTheqc"
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
