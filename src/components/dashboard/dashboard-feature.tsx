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
    "rchHLdxVSyF5yah8GRmBTedsTa9brpXYDMbjLBFKuDs6ngznwUCBg4FikVxogzwA4D1EbBb2o1tv95YKfts9abq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SoQSNXdbvGhGAzwM5QQmkCWTcbgEFXx39wmep9PJgWhDm2iFgbkhxR4er3UPu6suuN3zrKG28wTJAatG7UU6kaU",
  "key1": "64fQLMB9N35n93FxjM6Yhbgvb8LzNB5Ahm7v4P1g5Ai9zb4FP7fxhRQbjxs5LQGAoRRh8dv4goSBdu64UMTq74rK",
  "key2": "26rgkrmwbwiEamGRMNqALJLFu87nmUSnRqw6GMQnPNBu95Uq3sknWt5VHvyqXhCuKN1Phu2kKPYg4SSgkwpn31L1",
  "key3": "B6e8cV3CYs1b1LZXh4h6rYJ7NHwU8Lf5iJHpVop8NijQb5M2h7rZvnmovUMy8V4XJf7zqhfACvQDaDLvMXxZwuV",
  "key4": "55tyNrhgKWRiXXGyZ8qWWRYfS7swazjVeAEGhxDa3TbFKAk7jZYxdqJqaKBnY1KwQ31Z1PQqgFJ2a2S6bX579Rdt",
  "key5": "3QTqUiX61xpYziWhsMqeaJr5w5fhLUjQ9wtrFmY1tNb2sb8Mu1NExrpbv96HSFgD2rZm3xThUyJSzmWzBap4bGFE",
  "key6": "5AfaRAaVyiexRBN8vbkCtzcWBdgEJTXWBRf6QeZAkA6QZqNaGypZKC6mNqKU95yEUCCzJU3gRdnkbVpFNbQ9m612",
  "key7": "25qtztGxsH2Esas89qHvdWc9JLc23nRQrrK44LWFhfQzsevnoEqfiTzzQnxrG49c9gsFMZPCJ4e8VEHGQdJGPoaf",
  "key8": "dyTfvTTdoLc8fvnbMBXyKJu9gnHY86hLjEbAQudSggfPcn6tEwK4X5yG1LqK3eEhyWv3CS8Ln6D1Qfd5o5GiGJK",
  "key9": "JPtMLgTC5E87eMxPSurJHyB5yqBNhLn9Un8QD2Tw1qNXZbAfqjsWSfy7srLjTJ26vxCj5nFrZkZyiNQPXUcANYd",
  "key10": "EmdxBsfFqJW82ZhARsApX4uMafU1sv4u6xx7TjNUejVGofRH27VjbkNW6Uu7wV6Lm8fLRJua27XReoaaBprnquR",
  "key11": "bKu7tg9buMCM98aJpNuvQieGCeY76feoA7pnrTNNz3DwWnkg2sXgqk95Mm47dDsDZYJX1mXzzWotKB5XLhuM9kF",
  "key12": "PaLAzFvkeDHUFojHq9yPy6A3DAT1qvDjZ59DKCdrNg1UXpAqq86qGWqnuNiNHybJaDH1xcT4ypwwYJZRmA8wKM4",
  "key13": "62VcQ635mn7n1uyLv8ZcSQGnSrdmaBYJAwuub2TvfRJzjQW9NK5USyFSUyf8eLoqUvKxzifHrfoRgiz29m7dYJe8",
  "key14": "2uk7SBzaeH7PhPVQJScETY3xe98Zu5ZWeaaBVmtsmwnMFSatw3Sq7tgavBzNDWDjBgAGJ5C518SWqm95k3A6NuuS",
  "key15": "4taoKRZn4dgu4nVoAWuDLDRUaFEFrVULpbMfGZUmU9w8JRx5YPaFZr3X8AGMTJ5NeG7vVazJ4SuSU39yEPu5uVeY",
  "key16": "3P6X8C6qeJsALog55a7Tf8uc8EHAg3WQbqPRLQtqgVsLxCMtkQoQyb8pj9wxnedxAXbxexB5Qn3C67joByciJDsM",
  "key17": "2aZeuK9UDfW8srnctXTyMGEo4vN1KqhpLHJ4fnybtdGG9Qbo5AjZttgqUgyn84MuS4FmasZ3nyeUVgYtF5wZNyKC",
  "key18": "5e1ciPxQhaNCKPAhtcVpXuR7nzu667d5aEqwL2misMtvNU8XS1ZdKBR5Y8WcwJs1xaigYgiHJfWRMHa2oaaeQj4",
  "key19": "3WixYoW2KTnmcKCwxtJbeNpQCrMn3uMzDsUkxRajxqw8V3ruwo2czDLYM3qi428Pppafx41tpfqiX2HpTyCNyUGV",
  "key20": "4iKuzv9ERXXozx5B1GFSaZVEAk8gSmEqGSD24dYFd9ppttTh7obEoYHx8oc5p9Q1kt3v6LfWJCG8bovtBkhno9kZ",
  "key21": "66bcsBs6PTYZoiAj9hjEExZwBKX1cCX6Ho7dGxuuRB6Msght7Lv9Gzb1vKE85Ao45QaPVbGuVq1y6Gi8hPhVt9qK",
  "key22": "52Vtu6Lo2acWc3fNhRFxL8rDnVS4m7xgKFkDsiPNFjHB7AfoeU1GoPfe8o4pW3jVPfHCGefGSLZRtTjMamemwpfE",
  "key23": "49pSwk9kb5YTcZcoM1mnsMt4dTNYDhSu1u95dvKvBnSp7zmaThBs6Tkr8TF2UZW5WGN33m2wNdd238baCRYicNNz",
  "key24": "w9AGMeHeVxpqhsJDNRZ89iJPoEBTxVntzvFdzxHizS9LpUsKRAC8xST5oYPt9qYLkfM8yM51yuqJLgu4ssyhmJx",
  "key25": "2ReBoq69LQPn3hvWKfdsAJoAzC7tWKgwdaJkVnatwMe8nrWZvQ83kUKTUykahnPxdSjac2jSwtBqzVmPpQSWV1zo",
  "key26": "3TP86sZkfhpE6AiMvYjLa83NsumBDPUWYJpBvpPjBjjTWq5KkX5xvwEkR73N8Es36ZqWwN8dC4U4S3Ay65xb6Jjs",
  "key27": "2xPqAP1QT23MKks2acD2WNGMsgtAAwZ9uEEqbWY8LP2f5sWuxF6y3kLuAfNSyDsKB3r1kLvkwqx696GgZRkhbxdD",
  "key28": "3UKBs4Q7yWdPSpqvxPoDxR1yRuV6vACnYChHEJr9weyXJdqs7m87oJvEVbrEAwrV1ssPzawkpCdDxRNNH3Mr4B5y",
  "key29": "3cnT7aJGKNJE8xZGfyx125RW3QhcCESxNmsayL1e95szVS7eQn6F8ToVQEoJzKkv1zRuG7g4ErqnampLSzk1dhfn",
  "key30": "2j9xH8RAQd2K4RrQCAMCvHWpMUv5bYRwNWgY5XEoaX2W57V4Zio59pW27Xfc83czdGbwCj9cWP9R9Qq4XP9MYTN2",
  "key31": "3kHbboQcny1TT7vcoDYYPvBoVCima4hjQHL1J578vRbavnLiD3UXmu3aKX3bDBkdfiMqyuCcyJyopgK8S2aC4KJZ",
  "key32": "4gKBDAxyk6artEt6ZbAqU3thSBGZ7o5WBmC6AS7VPmru3trfu5dor27dDHTmBc84NSh1mSjLqVQD3KY72pmZvmAq",
  "key33": "rKUoRmiEzkV1yDWkRSqp4xNW8EW6LQakj1MtRunWcSpDEcjzpcKJqZ3pyAy33uQ1FqBTj45PYQW938nMftkE1q6",
  "key34": "4JoeUc4o23mr2mDeBQNUtxBuiPPpG9CyasXnZ6jUWABXMBnaHTUyKSE4s4dvgJtaht3FrpgF9tm6QLt7KZPnXTEd",
  "key35": "2EwoC9WdHijPcbJoRBxJ26nM6WCRHmjYLXRTNyPrhke9RENgk2iUmgbUwufD81Tpcxf6hsBQSXNM8BbhPo4rrKq3",
  "key36": "4XULmkAigPR4kCfx8fZMQHsxRwCz8NbNDMrCFrDsmPEXETjGCU9AsBAPX12i1AH14NgQNygd97nEajft2cMgpPMk"
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
