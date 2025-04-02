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
    "66Ecx5EVNvMFoWDqDq5enUktcnCvem2WVzPojhFpFHVqC746vec9F2ahj6FFm68ngXCjhw5mDH9RGyALo1L8KPKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqXzKCXqrN8VSBzrGcug31Ny39GnJTp3AfvhEJoksaz1BW6P6BcReUjd4mU6CJGNYcbse1QiU2TVSDD7ZTKt7yx",
  "key1": "2UA2suGUoaof2HdCpERDBESrm3oYkW3B96xG7mb9Z63rDoCrBaDaxjZpEotCNQNX5Jzbd81HsGLrQm5Mba6Bxveb",
  "key2": "2q3mZMEgccfUKQHfVqhAykbQERFaF1hRLmSyUcwxCwwZX25GjKK6m1k3MX85Z9h8azJFByWXtXtJBXB5WLDWJFnV",
  "key3": "3jsqhJtnM29nsPEuruRLTmgq51qtLUumCh4yieBRYrP9vxr5SBwMLmrNzgPpEHnZzV5jMXGDuhuy7dkdi2gShZKi",
  "key4": "4pZwxcsAxWcGTJ7p6yVifts5H8UAvAaaxa7E8CrUbS1mQAeWjX1dFvooDmqCtGB7AdvhxabajdK1KYdt79YoqiBX",
  "key5": "3ZdhKYWq8M9GTdQoBAooV5DQ2vCbhQWLDYRjHqoccnep9G9n6rFT6oDxv4jnjVv6j4ah4SAtgqBSJcQMXiZY4EbA",
  "key6": "4sG5ucfK4zjHoRi2SB443ppZaiisLmsJacpa3bq9ofyoSKFqkhjDiMmvf5d5WjEARRYFMUdSQqawEuoUbLgWmcxE",
  "key7": "4ZV68RiWAavSvESRLutYEvz4iwqahwq5zfcNQkKTRH82K3evqDS1kxYRuBgxLQChHJEAUVx6TJkMaDbQcdej8Ly7",
  "key8": "5KHx5ieAXkiFy6TiMAhC8iRBbKimp49Tpr85Lj49EWKiSDLehgd5ZoTiYgpBXsJoboMiAb4ypYkaUQQvs5DiLxAE",
  "key9": "4zpvk2FFVqKf2GL7vQH8SsQSLZgT5JFdwAjYtEbX9DPb7Rxk285ZyoMkY2xrxq4CVQqiU8FixeCRNNqzJwr65Kn1",
  "key10": "5WmxtBqMgXkntbtx5NAikpteaTE8M2vBK4vLY347qY5tSa5pxLwEDXAdK5XRrTmh1KMV2o8Rxz5m1f9dHtHcKfp9",
  "key11": "36Z7dsHg2VHrp2hyk4x9iEFEK7LbaFKW67Ju7c396pTkboXaCTdRmxx6LRYLzAQBVeo51FqXFveT64DxEgeLMype",
  "key12": "2tA2z32sZhTAYvZLxVRcnnEag7WfvP4XTWAyZLBHq4345yD6WW8MCQBqazi33pDG5sA14KQeknDkGL7KXr1x5Hod",
  "key13": "4H9JvA1kDUTGz1CoMjSMEMkqfvoZZF3v6bBYt6PskaXdxYsottyTPgM8VGEyVD5HxxsXr49QTvKtNEDQPFSDiuz6",
  "key14": "368eLoeTVCRvA5L5nQyeRsYH1vQCKpRKjgZRFbfcgcn3zT8vtekBUUESfQApatX9FRQZMeQETACCVWRk7MaELeXF",
  "key15": "4wn8wh9X4VEwpsuLtinzDndeMufzdj15V7gQ1Xx3AkPZBbDE9SKBovher7zQUb8mjtsKxCC6KoQyE3Keyio7UrM8",
  "key16": "2L3tCdSw5ozEmybVoWstLg2SgrDibmsSXwzxCRAQSjAqYNQ7AEHu4a959zUXxzKZBgBqwYsT1ZKiXM1QWRLnmUc2",
  "key17": "2cWDKiTKnpbQyBB2cg1EihSHjFGABpCieUJc9Gp6rkXh8GsXPsRc3onzKiErxXoSKzqtK23ZfSu7QqwUd41aeYrP",
  "key18": "58EyCx771SwC4Bb7FAS9fFxHyT8eXpKdosQUQ6gTftS18TqCYXJLAs1q4GggUEiRduCS1AXDVon1jTuswVrQvocN",
  "key19": "4xbHjFZB8vagfx9apQD7va7BF1x9pzKR1neAZ4PNfrNdU6sX5hRj4rkApdFfDaGnpS8U8eL6DEEYUi2dijr7YWc2",
  "key20": "644xEf8Hi3XB6ieTLA8nU2p3jGzKtpLUWktCZKtssCXPyQ39R5F6MGF5mXZv7vQ5tRCGvW7VZiSR5JVLbPFiu8L4",
  "key21": "dCe7TE9RdiCD1REWdVJAJ5ppoR67Y5bEDsN5Xjct3ZAbG5KWtwH86dLg6uTQxAsir93uGaRWMF93V7PSLu26pvj",
  "key22": "4hkm25dm7mK4ewtKVA1y4pfMfW1LDejv75VVcXhSQZQtdvMjQwKoo1eiSUnPep4cBxcUZNh4x7QNhXXXA6out3Q2",
  "key23": "5Lc1BKU7gispJW7gVTVMtR65c2WdHEADZLcgTky3JN7HFd8fgjnB47gWePHHCgrx7h3aGMWcNVujr6GvnYyoLBv1",
  "key24": "5UHsrFPQivy9cf6q1zqwoJpAC5Wzi9ipGsYEeLS31hZrLk9wHBeyB4814mbSg6opv3gchEANXiAMdr8wYRbuFEB",
  "key25": "42xQ7A4sXQBVX1e5vPsNBc1yLa3LJijn84hCBxhtGvFMPk47nYKMhyzcNHbLGo6BNDFMPYMyDfVBS7RThHQnG3q4",
  "key26": "37qhBJtZzkuockiNYREuHBR3rewo98JN823MJUU7Dn3EofWzhDpz3u6mzZK3raMZz7hpwtDNvLVuVxx7oh9kMdAN",
  "key27": "3WQyemdXpNfS4z6fNsFafatE19as35mjLhbD7ACs9CWtYwqcx27zfxW9JaAEw7WFb4VP3xz4juFp6Xxw1q243tXA",
  "key28": "KqpF6vYZQT489b35o7M7uhQjm6FDcsXvMyXg9bimYW6XYWRDkAQ69BNMLxFy5PtBmkdyGetFES95hMYi7pu61qV",
  "key29": "4jJacuCX59Dkmwz3umFooS73rzQFtXrdWPGN3etzjprSCMxjTvRvdsbP7NFuu1B714s8V5AUQ4zTCShfY3kR1jAd",
  "key30": "3dFLsZKTFZqduuAFY2nVmNSjsKJPJp7XEfKHTdXSLNydyDXwarHLC7kkNjTekBMgLJ2eHsWF8Pv1hW1XmHdwb1Hu",
  "key31": "U4HZMndARJrdSuWBhVQH6FBjFnSjVpvQGPJTrFxLjh48xZpnjkUcp89AEWa1JbrqVt2EXweR17TMbRUiZfw4Xqb",
  "key32": "Z96VaNS9Hg77976b27qxd3yCA3N1sjTEXQAZH5dyd1xQt5y5VNTbZ5EnqSLu9NEFowHCiDTAVHg5tsLrtCUYAmf",
  "key33": "5P1nRQxn6ZLNE2twmEskU4FVoAyWDGXeEgvKVBiQLXB1DjxPdAaNo4JsH6NatuT7vaMDHtHuXSsDWMQ9uqMrLNFJ",
  "key34": "5hpYuKdP8EopZYu7jRE1qqDQUcvkz9N9GDt3PW9MJhLDr8wLBnYnMqeJTQZ4Wk2ZJ9Jip3HGxsa8XyCmN71x8q5b",
  "key35": "P36nsr95Hmwtj2rEY1V7zVFpepVcSpa7PDmNQGpwSiFMnmP5QX2cMkpyCqFZuBTBnS27Ng7Wo9xrmcTLD1T2fBr",
  "key36": "ff6mH2hu8AcAqUiVyarcL88R66FtbWpk3yREDN9Ga5GY4TRHpMwX74awgscva9fd1K4hX7XoLG3XmsTaDnBDoja",
  "key37": "3fz6xEQNs3bb3HVUsG4V6hELLdbZRYMhpkoKihTMaoTGAADCUkyLZBJ98FW3ZpHne1jKWewdCfvNgZpD38LSuWTy",
  "key38": "34eGpvCUdfrUHRtAyU53RTvwEMCT9XahJmbeXpHLpTYwrRBa8aDBxSoBBkspnYLBuYynfLMriHocZJUV6SPuoxiK",
  "key39": "3MJCZAoiwWbK7Uxf55JaWRK4QfKxzQMKSTRs61LUBTeUSrRV5jooypwHEUeeaMsqnR3zBuvRT9eSZvWtcAbru6Cq"
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
