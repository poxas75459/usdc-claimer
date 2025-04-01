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
    "2vs4wnmThTu2a6DUJs3Fop5vGzMeTWoWmjVCHaS1W1VadqnYDh17W2VFCpFNmMPZPurfoSRnBxeCGfVJvSypwxK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j476uhj5kyo2Ls4H71vKvHM4dHjyxDQfuC7Kz9eQnvYADfCJShcr71McpGBpqHjibc1fHXPEnNJ1fHyxKEhMM7K",
  "key1": "37iVZYtgHSTkR6ES4Pv27NNYPp3ekxNYrLPA2zNkNJT6XxYkcFey8EuE39KnpoSqw5Rn1C7QBWj2RFvftU4Nicw5",
  "key2": "5ymFqz6DR4FF6sXQmQGSJC2ST4w9vR6SWYptup4igkpSQCKbMhgktUY5uG2r3uz6tLB9CNxCKQCUTcgqAeAarQAr",
  "key3": "65ugd6FxUYWWJHPmMYmvsb8GseUsNxpNArwbTwdfCVArZn3JTFY76t4fSrrSKMaaWGMfU3KWmW7yGQ8QBM1tmjwb",
  "key4": "2WK72zAKAoxvVniGFMifHgfyM988eqwxUqDDxWKs4yYT9Kd3RYD2pCp8evUS4Nv24QDes6qMh4fWNqt4NHanzW7",
  "key5": "QCsxnzcHP9S4yCffsXDYgjuzeQ2f5L7BWRnceVSV6LR256yvrMNZ854tMMYQXZyMSC8LrvC16KzEXkE3LLY55AQ",
  "key6": "v5kjR578jzJ7dYZw7j1CFhABLTGvsyLkboksV5dyu53zXDPs1oWDReWP4GgUdhMd1Y1uKDeKhPqETKFJ7MWdnjH",
  "key7": "3amNjVcDYgMavXKAhPn6gp44N11jdcVd42b4Qn4feYfiKjrTvtsNZaVcrWbm9wc5XJfJ3xVw4cmZhQeCnR9yaUcJ",
  "key8": "4BpGnRbmWNnJoMTgD2mH8zKJ1e8Jy3Fbf1mGhR1KPypPQ1UzvxGUJZku4WBssk5kx7mtNPh9Kiy7ncqrbArsyEiY",
  "key9": "4MEXVW623Mpd1zA5fK6wN55UbAyZPVxGvj4yAEZjN2jhAWGnFY7xgUWXadyoytTqMZ67DJaEGcw4xfFyL21DuCoq",
  "key10": "2yviG1EAN4hc5HJRLoD6PQ3YNBcm9ph42td5Lc3GnmYfbZVPPf112jZc4ErrbVZKVDjG8eJMM2B9SBDtuDLqYqvZ",
  "key11": "32zmmKPwrPYofqpS9ARJTj2jKY4xwFwRMR5zPk2K5YEpuXee2QDLchB8uG52LWCKqGaeHfJ22z5AtAXZ5xkthYig",
  "key12": "kUjC8NGt8n5TGRycijUf76rk6dFB49Dbe28AZePmHzLyipZNAwVhBVyG7vJ4X9hHLiP5SdfZQW5yXn4Fztt4xDV",
  "key13": "3xSzfMkG9QWkXfQP5wVcR2oWpYQkZUuoojgUj8etej2zrxCBomTkc9QL5Q3W7S5NeFBXZZ7361qSFe2z7D2DR1rG",
  "key14": "16nTV2KuUxovYUiuDaWS142C47JmpwXsPVmCqiGbR6prv3YagJcmKx6QsxxdGjBcX7LRt31nE21BPiQnRpxc7KV",
  "key15": "2WsSbpd8TQAfu5iQwc6a4zmE39hiHRv9uEUHv2b19YBz7aLeJfMwhnifFTyPeNbpEVqhJpnd56VmzYSFsZcBj4FT",
  "key16": "LprJy6Y4XC3Fh7t9QMxWmddSnqtvzCTqby4Yzk8ampvTgjTMw4Gk5rN4H2Ly6FXdqG72wAy5GKDbwSGXsjCLTW9",
  "key17": "5iHUeoEez6J7ECvWSy7beboh4LHYp3cLWvoqvFH14H5C2j8y2xgY1NvxRPxHH8quH9fuvwnyHGEVLMk55z2GdSUK",
  "key18": "35ww7aSv4vjawnGmDQmJfbGQFkyenufy5tFeeTeCB6fti8j2voqXP1Gs2Y2P8QprxpSffDgue3KmxqgEGa8TbJUg",
  "key19": "2skv6Gvx6sEiYunANJKmYQkkztVE2LXTjv4RJzgrJBmdEuGrGUjYL6MX6EU19TcJRv4F8Qe5JVB4NcyKqPRXX8Hx",
  "key20": "dUi2EDL4mt7Df8HbY7S8j3BacFkUAz79NEprT6CAZh4vszYpQCtyfWmFVjjyyMqNZboX7jFL49LjWGr9eWjGtC2",
  "key21": "4DevJp1RZpAF7PYHVdRGX3KKvUAcSzi3QaHUDWK2V3Yhr6uLuxtNJBt9bcYqRJmCfP2CW8B7ormSvSfickaYkHqC",
  "key22": "mmc2KXcbBxGKeeVaxoaXi6nK1mej5kMXbBwLebUA3W78qy5VoYUr87V9HmcZFVcGLPV3CUfJSyRo3nPEtZv4Jg9",
  "key23": "2tGsCyXXrG9aVEQBu7i6LW6DG36eLJQWA1BvKrcxCs1SUshCEecFpGyQLiUzQVibcscGomHTM9yxaepQBBcGHKm1",
  "key24": "4BxCsv4CCGRGfS44BEb4qkQ3Dj1c4PhMGD6HL3J18UMvAyjF38opqQp3nnXgNberiz42tToKobSL5pBrvXQJ22XB",
  "key25": "4b1vNAi6tDKxozYruMYHfzEqJXor6V9squQcgg2n8UKnxqND8zeQwj11ccNgtiz5h2cTMKXvdx9QALWoJFkap5ND",
  "key26": "JKaRGyT9Tt4vuJCqz8vpz2Lrca2ezmFHfS5ACJq84VHDoz9ERyzifzSGKuQ92QSVpqNFJsWNWqwAjZeuRyCiUU8",
  "key27": "3XhHQqFWhkE8bsgCNSp2DqjfzrVVG8z2B6mfY4BAMVQhwbUFh7J1Z7DqnrFvQWyUHpT3z3jgp96ZqenQZNctNdcz",
  "key28": "5fuxV3QhXBgYd6v7npUNBo8hm1sD83ckPTiMh1cZR1Zxuw2Jn783iqBt7ddEiNSmxyTYNh2x2XGnMrXGSgR5RKUF",
  "key29": "3E9mqcfmwCTUFJuWPZobkNgkGY4jgJ7vTE9aSFuvbWTw7ea7QAFG92kW2zLvhvqXHZcUBuW86fPvNSyzxweABDM8",
  "key30": "4mveRwmbUsR8BV88gddp29LfoS26MYTab4qUpyL7xgnMyKi3TnJcJakRYP7sozXCfDCbfppicxPVsg7MUy8MCiwA",
  "key31": "48n3PJCPnJ6j9vVpcDm42HyFatbX9PxTwcz2wC5thVYyBe1em44NnjwHVeUcD3GnLPoqm2Fp2N1fkEPL4gsi2EzC",
  "key32": "3y7Qo4VFHAhpYYThrJZKHyMGPUNao8czo4r4uwJdRX7Kr1DRwz99oWFniwGhWmwvj43Z9YDDFr4HGaS9sRcBy3s2",
  "key33": "4R5WkT5uEMK2mWCwpLjt8Pn4W8UcBVGQdPXgNrzHp3LeuzYJpSPeb6eUj94HWPcxLM5yMmja8ag3Q7GXPDU2iZXZ",
  "key34": "3PvwvPNY3a54CXDjpphBktpWG11XSJRanibgzULCQ6UPzbaGSSeUaWmVyKtSdYG4VTwAUZzA1rbgdw2NDYw2ZYaV",
  "key35": "3454SmvsEU6vzSTQ9p5kfynPG2KxTHTt3yQhFPCkWqikgw1curfdU7cB58fJarBcou4uqfsmpzVsqCTZLMNd89GD",
  "key36": "WZUmfFq5xb3Gt7rjom8AJo91s4tT7jeqvFGPwTQRXwfY3CKBCskEi56LY2ggnXudpjhnL6Ab3uoq7o3DCaGTR2E",
  "key37": "a8MKs9JDaHudoma7q3RLcbvW8fL7gY3fA2sSdNam5GiEq5neZ9XjwEw98fFGE15NBBsDShQoz2HmLrtmbA7A8h5",
  "key38": "57dqFjaxiDE6RKGNsDuMFBBYoVw8fvQqHsSS2UQFH5CwMELn93hPPkNbKdrvrnPxQBNQp8fmk8Dxi353guL1CXjT"
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
