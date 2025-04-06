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
    "3UyNt2XqDk2gevKxKzG4nYm4DVuKki3yWNj9gyKiyG47EmYfGMVZuAWTT8fp34BYGQMkgY1NRqVKFm3P8Y7DnLub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hH5u4BvAdLPnFWqYNjUh9AnE5eJf6GvWrMnahxrM2d7631C8tVCo5EzDtqYUBZHzvMEPAsVd7mtRonKG2HF9GN4",
  "key1": "aCBMR1ifq27v3K2UJx68FYAUB2TxBfEUVVsQY1r3SfZ6tUrfxTLHhbKYVwUdD3PC63TLPpgxmGvGVkEMKv251pN",
  "key2": "5FSLsubbdWSYw1kyf2TxCYXU5gtkAprWikpAhu4V5Bc4uGmdcp6UpaASisU7HUjAvT5uwuAvS2ha58dkyWouc6gA",
  "key3": "5twvf8Jbs6Nk1zvFA5cvmSb3QNXhfWR5vRdwtmqyBj22L1c61DZj4fd6SjgG3rDK5JYRVJU9vnMTKiNHvTHyuQbN",
  "key4": "4qijPh5Qx9opiVhUrb62eZudrywmeY7FccFwu3Qw58czQActskWXgKwuKmREv3m5doZQQaMZNPDSxc4PjYvzduBN",
  "key5": "2v4YFZQByyzydbdJzg4aLarRd2AT5KuaiN4bXaVTyFLb9H8zAHAYiV2x9yRvHFcaz8mxBw61jGs5jMo9d4UWPDBj",
  "key6": "671oVjAz25QVNWt4EmMLbtn166SoahS1y3fXiCrwbkPacFBRCQqXDtxjyZvReusJ1VL5cvwJngKEwWLeuzuwC6DG",
  "key7": "3hCxE41vMbdJeQGcQJ3gkDixdfcb2f9jKE5NW1gLDSeSmuEK661YKBTtTGDcWuGPonCyNVhid6XN3SFC2Dtb5S8U",
  "key8": "29Vv1hZCvw39KVGNt7f6JnrckV5yrL4agPpo8FgEj7cc6qLU8MXpY2G6egppuo7i29TZyRUBEsAK4Zi5viDfvwJ7",
  "key9": "2xSBka8yyVxygWVx5WqQzwdvoESpmkWdgqVfY2rakBS5x4ykpWqctbyaEHVuY9qXK6U43Wig5koCSzRoeDJUa38v",
  "key10": "3Yi3EfGJx379c64z9KVSuhyuodwhBmhux1B4qpd9wtZFDbMWAQJ3Ztoo1W595584GqgbYtavm3xUsEoTWSPEfiC7",
  "key11": "7P4Q5VwWxAfvRdasPk7XWaCVQjQDivLRHTkQ36acKTEuHuJLLGJAmWmJmeHs53sRrAeL6q5qpdriovnQfyTUxqZ",
  "key12": "RxqHVxoi6MAjft5e9YqXAWRCYPrSpFZtoQU9AU3c47sHBrug2jm22S3iqHizvqnd4UcnrGEtahRnT6oGcgv9vb7",
  "key13": "4H1ECrN8pmV8vG9CgqPoCWLDiVuuX8J3Vg3G7DkvRLd7AwmoE6zih64YFvCF7GKuM1rGChr3Y58Gbe4iNZ1nTZeq",
  "key14": "478P7CbdYTtLnneM1Gq8uABFJjosFQ6McMVbPcVdmbPNMaRqoFTze8q5WVxp1nAVpnLjSaT5R27bZ5ETezakaQdx",
  "key15": "271KaK1c3AQuivCvjznWtK83VjyJYH6kiLKDYoi5buXcqEzVD3a9oXL8EykCR3sxqmVkgQCfmWDQBz7mP62FXT3G",
  "key16": "55PXqFHZSBY6AHxki9StWdTp2x6q22tfTWicomS8sE97b3zaPjBs559YxXBDkaGGFwvY6rMTgRPdLEw9Pv8j4iZu",
  "key17": "5TshwLk3HzQCcT6XMzkiEVizCayXHidPAtbzMAdfoEXkRVREbmxiNHyx7KnUwStXiU1m9AnTracjGisaxFEPEKFJ",
  "key18": "2EDY6e8894ngmgFsD98sZTwUj1cdVh7JNAcKHrjS4A43dmFb29d1qh2UBu7CcNvLbKMyjmBjNTFXrK9Wom9bhjXR",
  "key19": "4NtUZ4cb38SSfZbg82iZRhqh2uk1becsNuCMBcgrjWGD6zFRfGfn73vRM44DXf6Va1HpdFM3uME7n5dKHjcReF7",
  "key20": "5gywzoBfXdP2za6EL8b3cfPkSWEy9DQNse1DB5QH4B42XwPsx5bHBJQiUkh1xit63DpN8qviScKvNDP52cVMbXEs",
  "key21": "3QmeKosXpCQxtjt9rbcMPr4KD2Kx3mV74RdAYhbJapaXN3YHjcFhyaEPdWWt8NyswAYCGYeWnWpViQWswmfpKAbu",
  "key22": "4PoFYW6K4EKRMg18PehqeCi9WEhovtTYDQ6Cj8MuoDQjPf74EGtYGkpEpw3y4fPZV4jyHnjPvFxmiRXwqt7hcEB9",
  "key23": "3Xm1qRzzzZ6nDksXXiJMwTD8HauM3mR3v2cnKu9gRYWB7WgoRa7WSpevAEfDdibVzgQuGxL28oubY6NFrQYjaRQg",
  "key24": "Lon3whQpbTmMtKjKspWryM7kpCDCAkP5bDr7AkmBjiZPBGooKHFvHr4uMNXLqTvUtFhFjzX7bJWFWcDwqm6m3FB",
  "key25": "27ip1yqKVkLEwcGzJ2EUkxdCMtQxc7KVjcp98y4SRaW848BsvRc1Z2R7CxFZPR14E9hgAAs45YowPEfiTjyFcej4",
  "key26": "2X5Lir9kk3XcF1vak4ghdF1eih8BG4RYF5FJdyBkjRgf6a3GjaVmH1rexEYxyxuTNkxicDZK1f9Aockehc54Y1rA",
  "key27": "4kSGWfPKMC4qzjjHY4SNn8br9m76gixGKeEtLeSA2fwtxEcwJn7QoMzimpDCogCLsYH7eoTavtSz71TZhbeV5Hqq",
  "key28": "2zssKVoSXuJG3Y5L7un57rs9EYmYd7BHsNnyvxGWrVyRWGzfLh71u3HAtseDStD8QfnRkAXGNfjGxXtkmVQ5Zk9Z",
  "key29": "5XXaD2ZCC2scThCgb5q1wkwp3ATxJaG4qVT3uqbimdxmmWJiGaNuE2KFQmvENabjTDeBj6Zd9RJYru36RWbvw9cR",
  "key30": "51MziompXTS1gWp8GQQX4FiKjKXsmFrv2kV9xBoVEfTWoMwJnd4TgKwnEHnczbe5vDdupK4Y2SJWafUJ9XEeDrmY",
  "key31": "5GRiYM8Kp5VFBmU629sYuPbFTZjSf5X1J9VdGwBdgxGcJdWxzoSMJ7g8XNgGYnBbF9smudbKJzB2tebd4T4oi5Gk",
  "key32": "2SC5qwKcVPGSpKUe3etMLCPNedG5ndSxLs3soKTKdQ5kUZg3e7nAyRpeN36bqg9BWjSbVoham9RpMVc9aYbz7bCk",
  "key33": "4jp65uqah74tpkWc7Rxj4FfsWJ6Lrd5SdbEt5t9Bk5ma4qCthh2Ck4NAprkDGYbBud8AsFJCQGnL4AQxMMzAduXA",
  "key34": "3URCketR6y6WSWUyavBzC2AcHLEs1A8tMUxrqVNqSbgttTtmaDEFGv1jWSdGar1hgoLV5kRrQSFxpre6kpncPcWk",
  "key35": "53TfjnvwZA4CVXrHNr54bBu2CmFjAqpq1XjQ1RYKSkZd7YeAGBM1ULrRgJSMUg8ZWJQMuyxhbHgGLzjEUTkqX5FM",
  "key36": "2BqmGoWNmLsDpw5QD1Nif8yzxCEmkmyfaZLT1Dyjfbjp1hZvLZRcuM8AA8zq85z6S3Me3QCL4PFR99vpSd36aKY7",
  "key37": "JrNoqx9WQfeu3Ma32k14WDPdLcpEi1cWUNTvVG3GsMU7KdWA3SnQneYz6ha3rvNpSZ2PemFp12HZWG2BhXvoDj5"
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
