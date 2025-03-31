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
    "JrUgxG78EyZgf8Z8mxxrYBr3nXbQr8u9GdsCZq6YP41Csn6W2oCApcGWSZaaErgasAef1nj26A3ytCf8oJpLarL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62KRWCapR6ccjW4Xa4t49ofRsso1xB3U45fAhAuVPCJmEZr7wGtNnk1Q4aBbYZhYqa8wqo4aH6d4vSfczdbphGZW",
  "key1": "2RKuJGqnCmTZqzRUccqTTFPLuzZ6FBhzYUkDyTtZtuC19Bi3heG5xjZtc68ZpDEyFZw2ZhKLPU4BAoL8c8QT65Ay",
  "key2": "3BUjJtQACbsoWM7FZcowqPFsLowZPwkKP3eNriapiGbfWmjHGPa69GtGAHrEtFCkZf76UYoo9A7owd2gL9xR9mMM",
  "key3": "5CLdmsFuA4KQB34UxBUXXB8XEeUCLY2yQUqQ8ZSxrQfncg7CFEYC5X8vaFcNDbxUNonXWjsXKEPpyJ4Q7WQ331LB",
  "key4": "4ZPKUZbBA7cKemS6StdxDHPsHTiAWgNx3n4MZAoa176e4EEWFxSkoDWBugv3qErbcnrZEvQFTndBpsu8L1WuVHn9",
  "key5": "5YfnBt2B6g2FDLRDNbP7MRk8RtzhXHR6VfsZfBXVHuymKxpVR1QmJR2ouLzFbBHanfu9V1jDCxuAcEQzsSef4mXh",
  "key6": "2B5ZGd3oAZqd82YEMswaEkjv5fyPwkM55aR5FK3EftpcSJ8touWBLMyWeAF4k84ZpWNYymNBk55YxZVktVFxoN8e",
  "key7": "4TxTp8h4RriFkEkkGLTiLZJrV46R6gEc9oVtYQxLFs7DrPSEGwcymu6Py6fp1cUQH9dVWPfMYR1LDEEcYJaGhBqF",
  "key8": "4SC1sNMNPCf9itwQTDi2stpNHxPzGYeLLh2hu2BriqtXam5nHxjt7reh7DGtXYToZZALrYegpoVSXjNUssvxhq3K",
  "key9": "3QCF8pejTSCCMMw2p6nE9abimtXmWhfAFejghQ9JVjtkRJpxjXzEZoJPzgwunBMng5kKYbrJRzTR5UNeSgbG9hpM",
  "key10": "3sxksKAZMDxvophALKqnuxKy9DiQiKDfHZfiQ7j29X3HWvi9MqBQojdg8UCTKrtrjprrYsgFVcwenBxRGKr5uXRx",
  "key11": "4TQ4i58K4AoLr5HA62yEVCuVwEVWEt8aXq7shkeyoZaw4iQhtbQ2odBekW19EqXdBNswZko9PegC7M3HDazt2xmL",
  "key12": "QThAuL5PoiLvdSWBq25gfFVjSDtGFBjz6FuEBvJM4ZQewTzHdFC7wtM2Q2okuLWpeF5z1ECMSEcuKtaQwWPHakL",
  "key13": "2kfr9iTxt5ewMovcRLzScGovoPB4tW2bnmbCb9rNYYsV4e5PrvCZv4FexVp9MiH2ANY5To7i6yTBoxgidoiVTsrG",
  "key14": "2CD7ZdHwkRbU89agbjSaqr53tphhgHdEW3nJEdkpDfNytMu29MSjgSYKdU3XXkrZiti3qAC4RETEX5DZMqunAJtU",
  "key15": "JvVASArW9jHLXmfVyFSUy5X7ic5GUnNnfwpbyHB8jpE7HvYtBUY8zmBhwfFC9tYVFysuxCw8HS6H7YvmfgUfLcJ",
  "key16": "37abhW3GLXLGWN5sfDM52jZxr7J32x4c3ixLu9hPugGBwW83S6odDJNTHe5MiHQJB7vQp16rgi7P8EDtN84ZxLTN",
  "key17": "2xNTWVfL6rryZEwzGPDt6YGCDsD8AunJvagME6CAaPDXzpzDq78xk6BJNjuNnLpjbHwbGaPD2X9LJqcAQPvCU3Qk",
  "key18": "4RmCYnXe7jp1UDt1aNuEXzFFfAukihvsZM5qnAUaKGZqA5TsL3497AocFQ7euKY7Eam8KEyPA5Fn2TYYANVwkt3J",
  "key19": "4FUTdFwucSJ4kyL4cvNkoXzCD9XTfpGVCMKd8t68jFmphsurXmtmbswWBp3S5oFEAn4kGMGt2GH8ogNR7ph95jyX",
  "key20": "3VuwPedH1ZbkueC3ovbcm6zUut43JoUe8txKNwdEwU3msUP8KfZCA7dtRX13zhraxhbmHcRu1soAviQQ5NCxkBSG",
  "key21": "7eeR7NmeJfLNpsiT8SdbS7BA9tqgupse7Ma3NCEgTN5J9DV2qihBStMjYdMwHQhdb2ga1gRRxwZopM7RByByNom",
  "key22": "vkdaPwYxq8VR6CXdDXTTnJsHoNxLuRZL4C9njsk4NCeqR4ZUTNnArK1TmZGSu6MH1vii6kTP97X3Hu7AVCMi2Y6",
  "key23": "2yDrE11Y8g2sgK6BNiW2RdPnCYXTr7jnCGGkoZcdwJh9pSdzsZXteDxVrEL3jF9ZttACQwbkkRZDxDJ21MnN5Cte",
  "key24": "2H15CT1SF72tKG3ZS8Zt62c85rJnkRyjjp1iYfZgdGesg8xzjCxEyyPDAvX4LjqRRt93zj9rXAAkoXL6KpLCkUC2",
  "key25": "UrnxAxfu9WgLTgnXv9Gzt5AcFc8K8aiJTJKMYWKZsaQzmzknNVAhgpHLvRijgQpVsDPbDFzxabz2XmqvjzvP4K7",
  "key26": "5UgaV3B2WgrPnTCbjPwFYpq5URedWF9eNo1Sixt7Pr2m5sXJuR7vpHz2huyL4D6f4uHYYcB57mfD5bk6f6sJ1Fzs",
  "key27": "3cpKVvagA1GZtDSqdQ3jLjcJ6L5Xifw9ovY1MxFxAxkrRRSSP9DLNFVESqHAnSCpStUBoezePGq9WLH8WuttqLjg",
  "key28": "5mpNPHddr21Vr2PrqfCDox6jA3h8WMgyutc7fyoromekYKRQjwF1rKjRhd3AQwNMNmGNzkoxPcx3v3MC9B6GuQAE",
  "key29": "3w8Gm9Dp6xw5LrLWJx2TrYD1sCHY34bJTeTeS6qy8zztMpdwKS6ntG5amyoYcVqBh6DCMvawiWmnNQ78E2VWKBh2",
  "key30": "5S14ej34bXGwKkxJubzLLApgBeuKQUydm27VCSgh6pxLxDwVuuYjagcdPJBZCHBbyAUUsiahR4KTKJCVzXG42N88",
  "key31": "5P4DRbympMgAsDN5D3icbfgftJFoU7Fubgdcb99HFLUz6d4sY9wgEKz6iuYrg9FvCoPPtSDw4yJmz2GH4cbJMKAN",
  "key32": "uPECCP4xW6fEQ7BtJTk4FyqVf9xYyQZqHxXZ24tEbxX7oUC4JPu1UsyPb8t4vNmF638spJ2E9CY6AmSi3pSqQt2",
  "key33": "57GxF4fcP9qr3uPagaRFGFpW7Cgdfc5dEvChh9yLnVakZiKrArSwVbyYmabWCtRLRgdYS8aVu42yUULDVRMN4cR5",
  "key34": "3LHkSEWtWq9GStMihuQHKRX8kfGAN8Ps2tW9fdA8g65HHCxRzZnAagMffLQW8gCrTN2Fg7XTZX8g5ckiZSZ2wfUd",
  "key35": "5ejKijnBuMfkh9NMLFFWGpLG8b1iWkv8aDe2HYwt2KoT3mQijyK5CMZmZb6CBt4tdEjnULBPZ9wxhGNgRF6a3jKf",
  "key36": "5cas1gX8fenfMbvaFk9fbpQEapjNTEiZw1frvB9b1w1EWhn6hDUoC9nS3YNJ7voCSjFioWUwc4picN5ZFp3F1YYS",
  "key37": "5SXTTpMFb5U5fCYE1uGQWH9LTCcPcZ7hhewBxtXs1Ax16YCp5ubVTz8i8d7fo6mQLmHiNnZ1oUNFcAoYnBzuC1R5"
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
