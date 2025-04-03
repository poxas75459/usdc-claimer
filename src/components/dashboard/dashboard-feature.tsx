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
    "65tDXKu4Eat42s5a1nydFA3zCWZSftyujuRFfdEAkN9QFYUCmhgoJQTcHQQj36YCWEZyeZJ6FJWGrPud4K99tKrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EqXFnYoiMuD56tgWUXqU6NyTHnbHTXVoJwNiGNqGz62RDraNVhtyRE8s6YDzWmXVj1Ht1doG28oiZrh8Cvhafp5",
  "key1": "2bkVM9fQSHqKza8Aur1RX42opbcaLidkQ1AqZJQj9L4kxQECCB6tRR2Wq8EPsWhfdHE4Jug3ByS35c2owLxfspCS",
  "key2": "2QHrAxCgpbGLXcuRGsPmdQbip8FRWxer53TYBMYL7x7MmVFYeLgUdzp6wB4YQM4yxrAZkA6yqvzcS2WSS1RQSFQB",
  "key3": "2sFoLfDKsn2HHCSK2RAmRdjfSK7UsDTzShtA9DtUasKmkoYC3dXdSGJSmn5zcPrqSUBD3CkRf4jjHDa7v8faiGwA",
  "key4": "Uem9ZhjAUWhE947VZgCNTZnHCmPjt79eBsCVhU63MqL9Fz4gKGvmHrdBsusBgaQZfqAVXjcJm6XNjVH3vyxMrVn",
  "key5": "27qcdJkrhqUb2Z7wqga5YgRG85B7GyLozy83mEme9CXdGSPYurosU9ukNVUDDeTNPXzSJ8qvYAwUdTaVwKZCaAFG",
  "key6": "5vXuAWtVRV766wdFj5CUqfSQ8WGmujoc3JAHmrQ1efKkJxo3bZzixhvdZeBNHbPiAMXdZptgYbc6fpq4xL1Hs16Z",
  "key7": "2DvyJin7VNDf2PFLaxikXSnsegJPUs1HPUwxYPDYVwNTnWFBgbYgpauyWsHBVPdRRBHXjMD8MpTY7Ti5UBekfTJg",
  "key8": "fMZpNYysMsndHzj1BvL6Y26dWpwWMyDgbdFvhhGGjMizszKWwFLuYnaGCnvG4x1Rh84i2DzT6EgjVpfdQDgfXu6",
  "key9": "2ZVRe3rHs8szVYvHbjPuvmFf1t681cKQ4Ro1Q2rerufAgFEA36GBJzCr2SLxN1LLVZ6aWiBWHEqR3ZXuWdVYYpDm",
  "key10": "2KY9vL1hLJSQ2CPW2aDNmun8GFaBrhBvn1hXnJbUyT7kdSR46RHikLMNobh2cfKdbCpGdNFKfHE9Kmo6DA8omwuv",
  "key11": "3FXbg8TaCcWbgAbTvDeHLtiiq6pbCYS8ffdnRMF3hwGQXXjZue51W7ohNTvGH9QdWtT2d218hZ2za2eiYZSpfw2X",
  "key12": "4GJiynpdRfiUnjzTqwcW3qo3XkXg9R5quMUtcvni6xUZHtZ87CvMQLSTKrFsuGjyyCa71LobBKs7Cny8bLZFdHuJ",
  "key13": "4Ce5dxa7uwTzmRsHbB9HRuqiv5eqWQqYDzM1vdj36XH1CHDRjuvbQhzELihKNdy5YJJFCmJs15WGaQwC8aLhQ1v1",
  "key14": "2tQb2K3HApQ6L6HchvSgL6oKdbR2oYioJiuFKn5zhFtPWCjwaskBDKaiHzsBAyF7a2P7SnmDk2ojAazQf5N7yPSa",
  "key15": "eUGXHAFMEdbi8iEXrVWvN1ggHv4AEc7SyDfLGotkYdynNLndw2eZutWZJkeA9TiLN3UbxVJRgYw29CjJtzFkB5X",
  "key16": "5Wh9Xwg2HBVBZ54BYWWQRXabaDMMn6PJXEzBWCESnFJeJnMzPnzJvir2EwU6eV5VRcXBtjYqJ7LETgoUiLGMcYBr",
  "key17": "5GfEPxfLsbg2Qtyqp9zAguSuCH1axWehmLUncumvgqwHXC5ppwVHkChdPKcaKuHGSmQuttzqoKvBwES1YY6f4Lmf",
  "key18": "3uhjvyk63yjhHCjhcQ5BeXLA6eMV9thn18KmZQhr1gbmrKyDY5g2V24scgheVF2rWD8JG7afhGeNSA3G9pmoQj1K",
  "key19": "3Fiy1rXtGHLGPdnp3mDRcDCmwLWmvkJ25Cg6jBTjHxKjTotffKQwwQFunELsDyWPKPRPMHDbgoETwGemsR4aJLAq",
  "key20": "3adMBXE8sxpdG3vDuCMeSJDnvqZfd7msyUSo6qk55FKdwyVNawda6tDubaWYQNJ2TMGDV1AStKYVwMrq5ks6GK1g",
  "key21": "61eofqHjcgQeP2VnZuW11zPt4BTChi6XHXW2ewEz6PXeLr861DKTtUXrs2srVaQrV5Dx9hegKZpgeji5tzUsy7c6",
  "key22": "5YhAtCA9Rf6k3Q8fS2KBZuNKM4QPXVJH8U3N5pBWnccFiJ3r5M519wdYeaUUzvvB5EZz9HP3GrHZjeFA6c1KDWiC",
  "key23": "2xQtuY148YcDRwvjbo4HrF1ayZBpR8p1mBztRhezYy3jrwt62TqqZXYkXtUUtXmm16xSJMCSRParLqNJHUaapFmf",
  "key24": "43pNctTFUd7LjETkiLm53H4DziUkzWkHtDEU4TmrdoK2Ev14jDq9QkwDX76b3roCboZpp1eKPSsWdmWT6ujAHDgG",
  "key25": "5bRNuPMp4oViRj52Yr6tFvc6xDVGv4NQ55KzW3nvHFU3GBwNg6Rc7qjQRdccKRtyKEkGV9duBEqYLx7ZfFmpcXCM",
  "key26": "3dfHiegK6cPV137siQCm7ZqYT5FtWBkWwzhzdxgJ9LqvWiy9BrzTVR6Tpbd6nU6RYEB3RcVkQuvRsREFw6Szigte",
  "key27": "237NanGX7QTzmyV6Tv7kQVrfK7Cx64c3oFPh3uGpPKSKe8AbVZNvfdtcEuPeYvT6qUxarXKp19n6cuvi6WkocSca",
  "key28": "58r4SuAPCJjqTh6wP8mYQznauVgCtB5VsCkssN2rAzFNy6AcnJ4ezHeaHfDK9LVgn5US53Ur68toU6LkCLdDUot5",
  "key29": "3efEYFEag5M9avWnLdU5ghffQhqvj32Nu2wuo1gp5NfsQabwN5Rj7htTNztATirUtuM31yN9azGEsjsUm6LGwBgH",
  "key30": "2sRZfp2LwiYd95Vswk5ppXcxSRkaXWpvhtygHqM6H7oP8ez9fqfvVWWhwfGDgUrZLGBoxxhkvT9wV3JeVvfnXq27",
  "key31": "2vd8d4ebi6oHAvXAvtvfvzJMKg4EySAqDWi4JoCstAojpU16nu7E5EqxAGju2RpXELL3jSDiBvv4F2e7kaZcA3gm",
  "key32": "2ZvxfnVg9cUEDch6UcWhiAh1V4FHCd9psJ2sx3Bdq1Q5wS3FwJqhAqxCbwS69WkM4zQE2jPc6NLZKhSSEkiBbvpk",
  "key33": "2pwcgvjP6ph4QgE2gAArUwG4etemf3ZSAjY2aqQ1RXQ7gF69PZd4tSDY5ZVPYM62mRMupjGBVuLFTLsSGi3FSY6K"
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
