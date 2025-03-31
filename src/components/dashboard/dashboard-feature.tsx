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
    "2FAe2RLx3y38DvKGyUBXMaDEFZAk87HNRACw9s7t37EZz4jptR63MjGLk7aDqF7yZanRKfXhER4hVQZFHFeVuPvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZZzfSv5jEeDvchAWxtoMgz4mETPNdA84qKZHcxZMJWkswYGjaUBqjEhvL36LzomCDLfPfpGkvv3k73mVPnsutdk",
  "key1": "5Sw8cN9RALayNwMthz3M6BoYCfNm66WRQkzmUVPsnWbEvZZQzMSMggQ8qvFvtVvksvQgamVzMXxRtYzg1vL65Bns",
  "key2": "4cX2EmBEZaZwNvvVidg9v2BqSWJE1KuinrcyDfWDnS2DJgMLLPXw9UR6WLXk8ux4xe2CPtE8YtYUREf8eUh5jy9C",
  "key3": "2L9KdvpPMn2k5yyawVQgMSZ7k4JmnPwgjX9tCnUePfHaFQGCTMUmNbsGUKJcTsLSeGCMMfz1BEN6dyLBiGPe9yvP",
  "key4": "66iGnEimiUKyaA8i4eVwQLp5Cy1vhVYmhjTLnAWg3Au5igfs9nxB6k5ekszxeCWe8z6JPdQGSCWh5dTZA7zKLJzN",
  "key5": "2g6Gfs9dujqqXMehEUfx8WhrTjiftMMixeqNYjESfJe9KuagL3WqWVdLRjFJVWFkSE437vCfpbFBX3QdXtwQ2gx5",
  "key6": "3y5TMfV5dE8RUrhjLUzBa77t9KtgkyWZoTAUarV5XjzXw1aTE8WuYeCZKpk5t89G6FwcUmLcUZDjVieYHyDhsBJb",
  "key7": "5rrhis6DmYFBAaG4DNGdbHFoFf71jP5B77eveqYGHWJ9ThBt6szDJ3wV2stTRxLyM6LifSHX4qLURoSMvazWeKrC",
  "key8": "4wHNPZFoe7W7S7kRGhxZTmja65Ay5PXZoykQxB9zeqq2ZSNCtXVhY9t8LYuqG1iJMpeWJvoUfWhR9VJTVjfFhqrd",
  "key9": "5tthzEEXToisSc9bdrdfVLbXgeBNP8vztvuT4Cdh1TSGDDpRKdnJM2CqE39CYnF4TSXnAegpBr88SGbGjV69FD3u",
  "key10": "nySPCW5Du4xHdDhF72wPNgzJ74oydki2wHeHNX6LUppkJ9bLA4KL5wEn9boWnpp4Ta4zSRQybs1WCDiEA87HeGB",
  "key11": "3ckm61BEfsPYppWC6SQRXpkNTWGVDFsXjsh61Rj529KLzcETYhWSbQ1tTMrxffV8Ke2Q2rfGV9fVtugsjFs3Cwqp",
  "key12": "WQmq87CoSzwpgFGGoaikv8vyQYjaS4GVHokn4T77Sp7gCkpbTiaSJkkpwPXtScb56JPo1H5z1XoUCPRNzAEyofG",
  "key13": "BNRXffLjVXGGmNrcnnQjZJVVQxSwBXJf49kvYDWvpfNQ3eYUGKc9vLNiUZYYJX3npE6gzjzGtD4K2BQnzDnn3FS",
  "key14": "1zUexGUyLx36uykoLSh93xKrrh63XtPJgt64sWyWDTjMYyJyatzDLW5ozNvNM942cV9d86buB583s6cVuCrE8Zj",
  "key15": "Q6ZZseytNELViJxwVuFhuBvHUr8HbKY5M4H8BcCtAa6Yf9eH215aejcKFcFsS8vBKMLv79mn8qZe2J4294t542o",
  "key16": "3aKwjacHfumTr21ycJkFBuATqswJVRYaBfk1B6JvG7G9qU767Pwfi916V58LuNztB4ooJPBpLNX3jUpruPGUD7ea",
  "key17": "5Fe3JfGqYjjkjq39MSHYbTCHkdgJT8hS2zk5bM3CQfe8YosNRXmzsoCbUZ2cNvfWqAwwarxk4rdJZkJenjXoTvCt",
  "key18": "656dgnJyNAPCfyFeYUS93umV1aJghFswK3uprxv6SAE8qqFu7peoEEnwanWmDze7SLpFdjyrHo6anxdM59yvKFrc",
  "key19": "2pGbhVKvAxDB6T6YcQWmbiBsKVr6Cge4ArNTcapNHNzoVRUETkckCXm2CKrvS9K3ACzP9bbecCrd9nj72HS9kqyo",
  "key20": "3aGXphWMRvSjXwogEpjniyYtk1m8nrn3gz5gQU6xgWoJQNzae9ciFDXnEsepk4HjKJLDns3VewxgN3VbB8oybE6a",
  "key21": "5rJSUQ338enxryUwJQubiqX3s6KKjcPwkuUDcuhhpBZitj6f3mprG4Zmoj8vdKSzdvtS4MuLvHHHKXqdyx3WLGXZ",
  "key22": "2wQ6xuS17h7vmiSpzniEuGMztsMngT3M3uNvV7cxkThX76NWjqhZKfdrSJKDxit9w7BUjEVkNbTE2APdp2Nu6HDe",
  "key23": "4hLrrPSwWLGDzWuyWo6JJ7Y7gn6yUUj61qWW5bYrd5MF7Kyb4rKbqELPVxAtmKTUFaAYWKhzCzSLveKLJnm7smuS",
  "key24": "qFAseap7SjTXzovPToaqqo9TRJgBEkEwWSZwcxzF3n9nZVtuqpa2Jqci1FdW5VVSF7jhPvZTLPAqXB8LSzuaTKQ",
  "key25": "5qAJvAVUy5dW6mMwkU98zphbKPTs2nPQ5Gy3Gw9uMfgW2vsUHX4eW93HhzsyZwgS4tDtdAGhAEJTmdb4VKNiGU51",
  "key26": "3uCUC6WbfAAU4BdSVRJBJ1rPsNxt6WiXV81UCfZEB159TvwbFXhUMzvZ2BwaAz4gieY3nGpye8guFqGUCKNz5DcJ",
  "key27": "4U8qGE6uxW5roWuPycx4AVJbqJbd2f2Tyys23hjg7JL3x23HMDihpbAQw3bnaS7XMHg9hJ26S8f4RqJSkQC8NFv",
  "key28": "X7zgcGKPMfLzupBK3caVhWUxU53G24fYQL7FHZTphV75zxRqzJUrKMdu6KgeKzcNYUsf3QpvQTY67vEcJChkxih",
  "key29": "iDNibxDMC4tB21EGzXYUPs9utT3f9C3zADdTczSJWHd5v1Umwp8S3Yq2WBdJobaFQLMDrsRgh6pr6LvXEG9JkF8",
  "key30": "3D6w2AKfMNg655yC2ciZPC8gZrgtHBL3fvqC4tAYqVsDB4S4jPXVsFQzf4iFj6KHJeKEppwBjszy3hCwWV6SezYQ",
  "key31": "5YSsp4aJNtNYmzBPxJraxBdZ22Ezucs7PkxShQ9Ao9sEbhcKLr4Bf6beXvdWy5frXf5QFsvKHqw5v1XjzjtyRwuB",
  "key32": "4gn7djnkDE1N4V3VLN6WzKctXAP61rvZnjWH8aE6VN9S82eaaPPbtwEdjaWSafxd1RTBCL8SdMxeEXY6XXvkeBtB",
  "key33": "4ZSBA2ktYwvHmixJR7MzHj9GcXfCXFaqhMMgGSunQecAjAXbyAxeqZXZQzeSEQ43Bh1bmzStUXsSK8N1ZqeDgFXw",
  "key34": "3tSpoZQwD1e3F1PJEbMh4KkfjqkPXqq181WX93qBBbHRyMB7dmGfGHtQcwaEZsNPBUJqGMqT1jESfSi9anQsXCsB",
  "key35": "8jsZbZjAoWhspjZ23mBTSCncuD5Ji6DPhaEK1zPKD3cJAHo78UWYK552dgQtoBHzAKMBRiM7UD5qTBZok5275DF",
  "key36": "4J4HMa3rVwRQE21WPtiogNBxH2w7UNtn5zxzxTDNVoYBiHejmGfoVEt6iuQHnhcjGFAAJPrbBt98DVc7B76J7cor",
  "key37": "2Y4jtdUDi9ZV7wsE8NgH59hgdy56xANMf8ozHX1LeHzom4PQiU1Mw5fgyGBDuS1H8r9qFZCSLPNccqhdojGSNdeG"
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
