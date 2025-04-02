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
    "3QE6izoTSefUsDFfoSCawCGXky98ox7hKLkXQMVngmCYkshn1rzGxPMCN1bg244k2xm42johjTHwpwVUVcF6gubV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21aidxemJsJe78CedvCtCywh9Jeo8maEZMtwqsJuDAuF4HJmYWHXueRE5kjwrRBgEW6Nu6RjiDLCRvBcjoce6RhL",
  "key1": "2Pgee2wR5MxgpiX4nHFgUYwtfgJ24HMEwQB4RYpHGRQDTexUaDeSY46S2sdySSY7Z4geu9F1t3CqdnjJbqCdgfe6",
  "key2": "44ZbfwSnS8vKz6mu6WemM8qTqYNoukMxSCdqT3CzYGEgCuyyYBCmEaVorC7oG9Xd2VRtYxaT9xxtLYGiVxyHBq4V",
  "key3": "5dqF268qGPGe8RLUvW4e5WnAFg7o6gxvtGzfd1tLgseJfm8eiLYGUg67hDe7237jrrC1nSDn3JSZNCcAGR1EWW7s",
  "key4": "3nS9FSX4UccwqyQbdr75ZL3KuKLtVtHWFLpBgd1HWbFXezMkBKGhMSyKB17fBVLvVfZWEUpevddtUzRxyxYu2wio",
  "key5": "59WjrwscFKncKi6pWpTNDLrQ1vtdSuGXgHD969w3Frkd2D3qWVbxSHs2ZNfXTu6aQ2EPPhAydutPNr1gXf4yvzR8",
  "key6": "4mAtvNCSHi1fPh6WEqpcKSi7ZTpv3Mz7tbkBvRFyEdkswPnmoy318J68PfWLKqk6Zh87VPYxwoEUi8LyD9x2pTAN",
  "key7": "2cyCMb8zjvWeasbX4UCqJ6PaWrwR9bw5Wuqw3RqFUixYbe7UW64ytnYgSoLTbfS7D7vc6tvi86qHj54gFEbfJLmy",
  "key8": "3bLE3NLiQnhC3ti1coGrCjGwHrdxhhedZhEojfmCRWPkgQBYjv1dgHyW1vZeyVRjAprjBeCjgNtrM1Vyw7WmXZnu",
  "key9": "5EWKz1esJtwGGFnif2Nffuh3fTdJwCE44Z9qawA1z7voVxnNFNQx35NmLJthHJ71qvJMyrYDWTk3dkLBBFx6pFkC",
  "key10": "4gTVSxrd19Ckyi7UJ2onUfACvnD7yVxhi2wPAYRiVoJrc1rrBUhKqhRtKXcRmaXuhJMBXmuHryhGctn9nAmEQqCP",
  "key11": "4iNEubRNvWV9KX8p3dDvG5ixhQb1ahhit5htjCqBV4qrGiCeuLFdEDqgbFwTCR82dvqEfUH75CHqtkQ8jJvKHoAC",
  "key12": "DXRWg9oJz4pzC5kiJxNyMzNBJwjSqX7oWYPfEYWapxxWz9K7XGtMGwtHSQ1QWW4Sk2o3qJdVo4g2uBPDNSbzjVc",
  "key13": "42EFjTkdPtLZABLftvxAkrAZfaMKV2stFQPMNdfEWZax9TqJsMhFe6GrVYYjh8cKT7qtHLWg5SZnp5bsU6mxFQ39",
  "key14": "4658Zu7h3cWV8S93dkStVsz2dMMVgt1gRsVjz5LVupK9a15rPZ9sjjjfkwgCNyvjWTtV1aMzLsDRM79H5WPRyvmn",
  "key15": "5i9Ych2zzsW9T4kvnk7Es7HZKhx7QPHdTrZVgBPJ2CohqEbB9begYvYt9rgECp6tbo26TtuVJEPAVgo1FM9ksXiw",
  "key16": "4RA352eGyZCArVBfNeLkF4K5mCXvw8vrgVqHvhNwrBmv6g6CQ8UMUh3vccJVEU5AJzd9XYsddADsYjiSizZYWBuk",
  "key17": "5DWStKDpo3cmfeKaidm3ECPr5tFa3veWsVasWqMYm5qbmWcgfbaC9UVRFpbzZdT1Sr7iXYqhgzPZKPK9jnRA8aoZ",
  "key18": "MdLtbQgczh3qbQrXaQAWPzr5WGtbohpUQvLxgMn8LXtkd4dsDc6hCVN7jA9MBLtu8M2XLVCfRBnzgriYTiYT3gb",
  "key19": "4SfTf4pAArbKwrWs6YeFSUZURf635p9cMrJ3rNatLTPsR9yc3J5C5o5GaxL9DhB5wKALvHoAMLTikQF13424mCmp",
  "key20": "37hska8Mbxo6CwvCdv6gCfhnQ6EVpeWEFNtfvPKtPxrEVW8w2Gp9DMSJiDtYeSjA46cjHG4eTYVrm6ZGVVbi4yh3",
  "key21": "5cdK6pvdr56pLc5gZ1VWVmm75Bbfdu68T4azK6HybvXoKzcSgDk4by7Ci3qrLxZjLpV51D9g5L36EsfNEN2PTFF",
  "key22": "5zf2jWCDeQRUrTz7LpshQetTTbfQKcurryL2JRAyhzaRewNhTDRr6SqNkK9P6cpGPYdJWPt7B1N4mHjkysL6sjZG",
  "key23": "4iENsTn287rKPi8TPZ1vXubKrn3B3LaPBGpRizARf91TyMYPTFXmwwHSU5Sf7fJMgZ5dLeDqWTB3ja8qRiSQCLpg",
  "key24": "3CSag4WE5cLUiEkv89mwixBMy87TmGSwJ529Hx4aRhDC1ajcmXg6odbWmqLKJC2kteDSziJ4QTdiyqeMPKESvddA",
  "key25": "5NKJZ3uP3cRLrMnLU5x1y3UHCs5wpYfHHbhHFGsNM6Bw4JbSbtdh7nSozMBxQNd9oLNxxmf3Pzx8eZQziSEAru4M",
  "key26": "31BMBz1PCmyGg7WA8gBYiri5yimTwBagS2eg5JJY7tf6P7z5UuSCUNjaheQreXhmYHj9dDpUzgCugSb3RSFxq46U",
  "key27": "3wcdCRhP2hgFkiFTY2YYbjXt2MLYyZHgvAu342y9koiLW5bk5MHAMLbrkyjuWdjZzWXp8K74wvVrttp3c6mw3KGY",
  "key28": "5PeZnvfVGhJEWmzULK2oyKu3jbSzePsyW5egNmxu17WJrZhjTQJj18J31kv6H53ZZQVzn78qYMHH6E6TAyKrpqem",
  "key29": "2BeeRgAswWFg46DjSCsDoEUSF8o2rgLkm6syHrieKkERyvwG7RfxUQfKM4KDkYH8wXKQm345X3xenzAArN4uH4mB",
  "key30": "5gB1B4VZFUJs8RzNoCxKNrXjSAnqmeJFK1DCcjX2DmnXSfcPwBk5ihmb15M34rdwwv2HVwudwysiA2aFu8nVw7TS",
  "key31": "4KWrfRmWKEwzKkHa7hPVkcXC3csRwrFDQjSRSXtfu2462EFrtZc6Xex1bZbmC5owjELbYWhoXcrReqqoHHmaPnbP",
  "key32": "CcsFzh634yvDsmAiBaSjkyRsURcpCLVvNPukJzes54tMFTZGcbc3aFPdH9fRSfki4YLA8FtEq7AoTvaUAQZrRjn",
  "key33": "3mcU6ywo9PJoHBy3vGqvFUJks77BHUKWro71Xk2dbAMFh68Cp3z6ixX9n4ed31j98RbXWBNEzL9kMpMB5gE9zw8e",
  "key34": "6181hWPqXyMnzDjAY48rHmwKEdBNDGCPm5RNJb9LNJdrBu5VUGj4Kt6qq1NYckTBiPY8tzMuFVwAobtYtihcromE",
  "key35": "5LKo8RBPGeF9EF7a7RcMxMwcZF7EgxDTVk8rKUnQfYo3vPdEsQQY6EUv8FPxadiETwtFCiLeZi6kj6NQ7kK89Qhd",
  "key36": "3VRFyfNLYaDWz8f7EAVraxZamKUSnERNyMWDhaMFefuQNztDRW8isRXHJNgYR8GyKgH8cNbTuyXReDbiS4RCvMGx",
  "key37": "3Uyc44KfABhGRb2oySM1y6cUm81e3C96xqG6FGeLNb88deonDLaMciqJnWCNWQYXoAfZ6XBZRtXZBwAZhzgwZ6GF",
  "key38": "41EDh3PGdL52J5jz586jxb39wDKYpDUCoDwQPL9fxUuQR8S2bJzofhL1CVRQivSUPiNpudVvcNyZ35fXExEwfZaY"
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
