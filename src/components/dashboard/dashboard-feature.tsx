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
    "3Xy4nWwhNQ8CcjJkamVrD3YX72FK9wt9XUzCFfsE7CGnbU9kMZM2h1huUPEGG3ETThJ7qAkD6HduXLCsr91FdkXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nuv7URqHKXoQkjMaBGFLZ79JbcvbKcuRVUP2HxU1xAqx1RPd5fiSVFk8x8U6FL1TeKfRcrZbgzez1jkEBiSZEE7",
  "key1": "4t7KhMAqS1w1XZchNo1gFr9bRgS62UyikfH4KLsrg2ffUHy47Xh6Q6PQ7jiyh6nhcf1sUSbNLpA26GGdsqoCiSoH",
  "key2": "2vkbpEGfpNzqZ6TW2fxm2dpJAYopDuybp4XcLhvL5c43rZBpWm5oPVtKSmmDzAdx6qRtzob8hWj2nuv2TXbMaqMM",
  "key3": "3BgGZwrcemBdws23TVkDz2yFJ1vxVhDgJWHBeZw2abHWo7geWNwBWkny3rt892Q19srTPvADdQyzdJxY1tR7JEmK",
  "key4": "Xii3DhaPZ1C36UL83Lq6w2Q3ovgjFLew6FyzsizKd6WM8zKzwz1zPaAZvNARGHrngC947SL98arAjEQHhU7BNQm",
  "key5": "2eAsgYGsFWftqsjb9jH979p18zQdzuVMz6KXSRMxJkYkDkRg6Ff9KsD9mFpHd6HKTWkyLCnQQjfepPFixkL7stzz",
  "key6": "3sQLGvimSkZtnbumRq85EQP2Fjg12EmJ8AHFt1PDM34dV1P2dhAdeeP4oPpRtaehKjxsB9EDJM4fp2qBJZ5mneTR",
  "key7": "5zT72feh7R4waobsFjuQKbSvoh7w13m5qgHmYqyottqa2GwmM2BTqo79F8sCmZxNnHe2iTHSEhHpAF46x3oucXW8",
  "key8": "3T6W2Tkt7iwgWVSbvMevfGsS4bWALLdHxq1wYmaWauumjgFrfuNL2YRNfhDd3uvebwMbk6nwhgS5897acR78yLzx",
  "key9": "9QvsoJaSAVnRg5jCTLvgjmJQ8hkqX7hZ7YA3udZ2n2oJpdHRh4ssBqM9wpowyCS3tadUCdXVSDbEuvkP9stTPiB",
  "key10": "92BnH5bAMuVhuWjnZW3Jkz3TXVECiQYHRgTPnKymoHTxiiSSLa4geA2CwNoTVxTiJk3W7R6JRd8mbv9VUfzJQdD",
  "key11": "2D2wKUo6wGJBN3j1KDFPM4zyf7jFmjZebMyUPuKWV4zqnQJygECYifUjqmUxqisjkF8wYybfc5eTFjPmHkJw52LW",
  "key12": "KCVHN3Vb1PFopREPospGRHyDuJfUZyhgYtxYV24sFo4XNW2MPgidNAxV64ce2NMGgHHHa612j5L3KocKkceUwMw",
  "key13": "2WFe56MbsxKiCSpQm7XBgsSFkxdHbEPKxQ7avs9s2z11iCrpujZrJQTATw8QVzpp7CKsFtbNoNwisosKN8iZ3VsQ",
  "key14": "4doM3R6vnoB4pQpfQsvc3tTBYSmpmfhy5tmew3y6Zp3eUxJCdMxksfv1XTxNbfHvsvMoCpcUTQWJkcHwM3bSL7bc",
  "key15": "a5CwwnTsCWckHndgQKQDeVQicGNLCQcxgX8sgABMqMDFX1Y2htgaSeSVvkZh92qui7CVU5FLaCpJ5cdYQkvq8dB",
  "key16": "2DqxpJJEFDYFN8e1LHuoZGYksRmYNK4Hg2YWmXYFzCS8eimLZNMyJw1QM8MNh5Q1k5UWvtMLZfkN36544zcPXuQs",
  "key17": "5QJcPymobAKa3spBH2GN3jkcvc6eYaUkXsCkpNWr9JceR7wbfGXho6TZNNVMb3y7GuRGGC4UTQYun7aALBzPsDth",
  "key18": "4RQRxPmXmWRrbkSv4pXKuW9b1brdt7VFs26j2TzWfXHcDAtZXFuWiExoDGUiPTj3zPShjD3QfDpqbcnHBjngF6GD",
  "key19": "a4wpCgWHUCavmyW1YQf2LjZJUBNz5jRt8j8edwfxrRbPND3HbJMr7PcZqWf4DFFzgyj3jUbVW8AHuQQt4MLqfMP",
  "key20": "4Hefm5o2SwXBSLZh9xdeX1huLbDhT6cbdrd26NSX3x5jucSx3qDdSE4iBg2YQkJSCZeh11GCNsCU3U5TiiKLhFGN",
  "key21": "4sQ6PHcXxAz7QVz6nxBgnut9FtLSHonKhB2kWuRpdJjVFZzi2ynZPdJRx1wAVb7TVQu7LNP4xBS8uTtC5MYTJVXP",
  "key22": "JN6EeVj5SJMJfVp7SXaCEpNytoy38SxP5x14QTThJXf41bbMMPHDuG3pNntpUQHvWdtYNPwXBj5v9woSNjvo9Zk",
  "key23": "NQ2NtB3Mv9nx7FeQamwsncButNEd8L8SfZBbGAphuXtaACxDtU19uuhKh9aee2tyHZkHnYWLE3RMdLm2wDK8zqm",
  "key24": "QNdn6hE1Ej86juVRobcCCMJLxDvuXQDMQBdhm7EuFnLGr9wb9xtgqt1qxKPi3ks6XJeaJTQsGKP8uYVYBUxULj7",
  "key25": "3kGfnVqhzFWoi42FfTMmRwvC9GJXpLMYSrMWPvCDyVNKPhaHpCXmssuxyw7zQ9pbqnH7dufoZkB7jnPq7iADvvy6",
  "key26": "63kYdkrmLcVDPu1nYbQuxzGWxSqp5ZJYK3LZf32NAAf4x1Fpx24SF1ZcQt3Sox7sqXPi7hNiVHZHmJzUrWyAvt8U",
  "key27": "57gvGkquKgDmGtbjLN7FACFEB911pPU1cFhKB3ayzdfseKQF5sd28kBreBbKv8qvts1XJJCCaSBuhKf5K1H5Wky7",
  "key28": "61ZyPpbFaEWqeZdGwe7m4FHxL1cgL5vtSkxh837US5zb63eg3xbD9pUxFsCWpxkKpzZttyghpKZRUt2LDELYdibW",
  "key29": "4QNzTBxog82tRek1Bg5M8fiY52rUD4s2hVNeXVzGvgabwE1JpRHwUpdPWksNtzCA8c6kki3hS81h2epG3nPzF9oJ",
  "key30": "dyuHbkBcgqtqkDt22SJeea5MDo1U742aXAXmyaJWLaaum3hRCCUEaohUZtZGrF78kP7xCTYZvoan6mp9M4DyD7w",
  "key31": "fogAsbCJFSJYCfLTR6sdfKtoaB22yaDHMTVWPoTpM6zdr9mDFT1frzEh9rGXKci8j86vUs7HJW4ynHH4XT5TvBq",
  "key32": "FkCKXCCxAkSFs2XSqTW9yBkBFrcSopMSnbTSEArDvk5Rfdzg7b4cYSPw3LDA4nAZEt5p9Q1iHTwEj3PzjsK23w8",
  "key33": "62GnVdJxE1QN3vxMtmigrUFTjMD3UPJfnPDaHNpLDHrWAtQgpsmFzWQv1hDAnH7d4JMCST6DZuRUN5Tpo54wmn7A",
  "key34": "2ES7YR2oBRpdmjpiEp3Cu6QcRfBZyShxM6tKsr9dTfEb4zXT19BC8ySDWSvh53PA7XeT1uvGNrNWLbWXyb7i15th",
  "key35": "39WqLNytvTcPHLmMbSf9vtYE53Jt8HH5k1EvXQ8RsF39UbMeWrUz2h4sDgyZYkn44hDqxrU9CAc5FqvfsyX7qbN2",
  "key36": "qVeq63E4yz6M1KFXnVRvpgtBudJKXrMMhCtdtu3qoCWb7tZfcoBaQEdv6wdrBJ8ecwdsjKEpYzhxRtinPxBWC1T",
  "key37": "2xS1tQyJNqNHTfheo4V9WxUsMa92qDSpAUDPRNE8FiDTBPYLuXappsrEwFEEEynbWUVZgSDtqSfX62QretpR4fJJ",
  "key38": "4YzMStP4ENFdKMTk3yEEMQJ2Ku9gt8K22rPZtXURvCHZtsWhNfXSyTg83PYtHtNhr42u84EunENiWqEPJGPH4teu",
  "key39": "5tLsnptUfhAj4T7NFoEuk95QZks6bf46Fs9uSzqGFefgkppud7tEahQMBiVo2nTAhPraGo9VS4mBLPTerGHcxKrs",
  "key40": "51nJ7KRKvRDHfrqfFj5Gog4jsE9VqqFUJixjCYyuwvdVEmBkvYtZFsPYCkgAq7Xndc3SD1So9JGBNtBRx2TjYNUZ",
  "key41": "2Rb4QFheuCbosPNHBcStbhuqCBAJYDSL6tYme3jkPyAEEuE54bmnDeUU1K3pRGT2vxrC22So1o79V2WZRZTBQ9Cy",
  "key42": "4MYW7JFiGz5ntXQJxRvqwtkQVCRe4RGwod4kZXXh5Gm2k8GxMiLsQ3KUxhYxYGNUdzHJvq2o31drwxzNSAWbuyiK",
  "key43": "4H9FGeEJ49WwBezWV8cWxcA2Jnyz5Xv3DBmsG4Yg9QJ8BQuT21Q5oKpjEA5x8aBQyxCRuQaUqCyAhhAPrpSg7SXn"
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
