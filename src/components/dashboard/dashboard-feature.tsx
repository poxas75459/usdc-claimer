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
    "46wJ23JRcW3nqS4aEoWj5s1kzee48g8d3VvkUEFRkZiLPVMobb77vHHp7weUd2BEk4rweABpthWVSirJhDn3KyVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXAPXHMLCKP3fznf4ioFD4ouj6R4kQymrZwaZU1KAN9EKKzHHT2ABLETNZbqe39Yg6DirVNipQbFBskFFdnkBHw",
  "key1": "3UtU1FBtNf41osf6kXMtwXu2z9aYUQGroVRRABjKddkr2bvfQNomXHZ75Z82VhsJWh8Jg4GyUzJzar5UGB2qMRae",
  "key2": "5oprNhEV8DD75yikV5DPaRyEaoFLU4JabdhLw5FLkTnzfy27tB6MWVUkNN79diAwG3mpHpXVx8QygeTWaeD3Zfoj",
  "key3": "4mS9zDeZ4kgaocpHt1y7iA12ryF9Rj5e8MYrpLP8HYLRDsPCDcsYxSz52SBnuy3w5KSP26MnRS3CtZwYmbrFKV9h",
  "key4": "4KWcha2ybAaCRXGh971SqLYgpZ6GfKTEVAXDSFXb6yz3RZFU5oJv5376kuvbSSwrjv6fm9siggebcV3iBgVH5ZTu",
  "key5": "42bqXdSguNU1PQ42K9XGLnLe13hBTJ6ZdxopxjQhPuVG64yQcnKWHnMBHarN9wLDRZu8SjPsXNUBLHgJLx5ee2wR",
  "key6": "4VrXSw5jCdh6qvc4x3CQfsVfXpTALsjDGwyeuiFByJhXo6vXjjVRvNFSE2FPSN57Nzt889beeKVdZ3AhLzWXrRBM",
  "key7": "2KoKaUT1Q1Pi8pjZhXtcbXbLMG3LdUyEAhYbpxZm5MB19iFLsmX6uhNwg9h4uUsCXecVTVmuBbnmaqAtFzq4De8x",
  "key8": "3LFobGvs9Qj9Ttkuzw9yewzoyeNMnhrrZ48YjkPGgKVW1oeQv9wihX8sGRRk459tZktz6SuU23n44K5hjAvRiexo",
  "key9": "4W49cYzDVuGReXLfUSgjsjFjSczRDv4PXsDCcbViFAnaJ9FoSaaoMq6hRQF4rWVRcwQVFEh9iyEPFPeNTHBYkrV4",
  "key10": "2tp8jYfp9UodZLTudtM3SUcoVgt1CQ6GCbBezrJBPFJ6dZKNmragWBh9PkJFEcf55UsDeFHAYFHo9KeCVXTSMCxm",
  "key11": "4PBXywXzViW3QQqZ9ZfvLBiSuRFQu5zrqKaQYmwKqiiPKxNYfB3uJ8WrsqhcSDBNAr9mMsNRtkPqNvgGxT9dftQ7",
  "key12": "3uFcPkV9aoi1kmjcMDGwvrfzggv2sW8fyQGghKVdhHLog7pBKn84w2yKEJAoDUNekEao8wNdQ9SPTTv2JyUDz4wX",
  "key13": "5jgeEU6FHzNBRU71PwimrXXACPpX1epiMxgp4fgZkSJr6HBFWjNiZeN8TGpTbnGUyZsY2oURZBJPNhzW68MQW1hA",
  "key14": "39jr1ov2qumeNgzToSRXViQ1w7xYcHhmA8V77Nx5PgBi3KrZdGowynh6hpfb649wAm4hbWqSAy76sVixxcBJA4wW",
  "key15": "3issaFzWCe91Z9VJDFexqnUG5PURbiT8iigS3YxSv2P3HvRmFuBhXcBxRUgjEb9i5nAH9qpCqFvJMqji5JJLvdZj",
  "key16": "tFDiBxcNBqmadnrgLwPGFF6xUMsYh2f8oYLZcUG3NfzPM7qyTA8DmzvJYviGBAe9dwvU3X9zhR1bHNguHYqmgdj",
  "key17": "3TgPUYfBCWGx1vebWpo5AL5gwof96P8P1TqJpRrWQXanUWEjNUsPwCNao21Kf1XsYYg35X5KDoML1cD3VXDgRYpY",
  "key18": "JYwErqUfCodcLHvtawG4krVSvvRHeGfSg1Eq8kSfYTDGWsNUj7HHYueCBz5mWFwj1tg1ingtyiPy5MhX11ymZnS",
  "key19": "5PjzVpKzPao1ziJqqJeuveGqJtrQ8Z5jTKEQVPzsJa5vRyDQxzt7t3XvB44Hox3ReyLaYUvjJCcRwAk4oGG9Lfj1",
  "key20": "3AkisFDQVDUcf9VdYgTD5AQu9MNE9uy9Taw3PaUbgpVcFDn4WYWDM6auZKDBN348fQSXPrzkF4ddMoeeHoGgW444",
  "key21": "5kSS27MRxPk4FtjKBZf6ZUAeU61VZf2w5VSndLvPEaSndK3PWgPACqHrJNNsj4CTbQbkkp2iXfXby24BZwUGeTZk",
  "key22": "4s8U5f9qqU1qRmzsq5MebDwStmyBu5o6XpC86Cfiv7awfXgpo2nmEWnV5NYH8CZ8qCuaCFW5Cvi2C3brHv9Vd1jS",
  "key23": "2YknyXit76pT4YYUvirnDB8PdxFYRmRyRFcSDRQutTXUcREDEx5TKypFznMzVGtznCBzJuVyQgzDkzescBMifW9N",
  "key24": "2LbsCSA6gaP1G6QT2V7ama4daoNNkeUC86kjuWi4ar5VP6uod4PLcUWTEVabrHuXQ4VuLwWYmCHv6jJ6E8mZjpXR",
  "key25": "nSjLbrHvkT23BKC6BvZHCEA4FA3jXzHADF3CDM37ecaP3frmcM6B5k2osKjSnxsfGBAn8tXiaBYdcWcqpCGeaB1",
  "key26": "45rGqsMgNhZ75yCnRTeULhJMonX3HRc465hfBzEG5PFSd5LDvVCnARsZunu6LTLrGr7XUmkeyAiQBUvQUScgHNsj",
  "key27": "D7hgynxnPECDzMwzJq1i69Pa8E51eXoQLwWBTnUhbz2n6dToJEVtKkzNMLJjKeKBnPvdRh5pqCfcBijbYuFKJdV",
  "key28": "2qr4vBnQ3JQMerzuuJsdY2qydJMD89ZwEkT6QtPGx4D63aMyf9eweRGNwyw7HjwbYAYkADka79NfqXMzDuyMQPkp",
  "key29": "2Hu5i9zeGgtrqSwYyiRNaAry74FWdEj1NDkdzLSfUQVJfx57wK5CYZmiRQRs9ZiSnqhnk9ZMuogrz8DLXACTTEDC",
  "key30": "466f3rGhJnM2rFKrUARm3Dv1Lc8Lnor6yRcDTYoax9EFVX4bdpK71LmKVMZRLikTdKUcsGqbcvtqdozyS6cqyKaT",
  "key31": "RF5WGnFWkmbBJJhvzxkfKngt8AVEVCxZjJNJpNfE6vJWXujvWfn2wdzYTGY4KPMEcFnNKkDev1vBLK8KkUAdkdg",
  "key32": "3NrGPKG2PZwL8pM5qeW41GwYBYWvA8vmwdyM4qP6oaX7TKA5se92Svf7qErfarkW6ssyYSFqBzbKfNZai2WMsuNa",
  "key33": "3pnWr776bbqmQjyR1M9Wkz1EFF25caSwpJDvg5pot7QwBCiZGQaa78UiuCzkZrReXUfr4xn37PviSbyvpDe9bbyL",
  "key34": "5gLoWkBECZ26Nt15y2UwB7CFbL6kZyb1LGHZ5DFMH2VXWvYuYSRwhh9v6LxxkNwbWFcCyHZUzjquHby8WaTvPWtL"
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
