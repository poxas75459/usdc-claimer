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
    "43GpMH5etheQMteS9N4QfiD2nbpQtSGrS8KQHnk5q2StGgdDdtAfps6BYmZkE3y7jxfL4VdiMbBu8eXLg2a2mvCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dExH5w5NVwHX7kBazHRCPPzbzQsSXfA2vhrQPRoyeQSiuyfZNKxA5aBpps7yA2q9CyER4rfbLdrrgAY1Z4NjMVp",
  "key1": "KpG5jN1kmXpSq5L9okX94PgkRAVAjgchALHWe7u6DmKhXXzdEostwF1V3JzdJL8KEvuPejNgAaB78fLSyLmtyAx",
  "key2": "3xiRwexRdYE2nihLnfuL7JG2gXKi4JyiaXTBSwG42RVUi3D9prTiYDjNhU7NWuzxFH95MXofyBkZofH4FWe9V1Ha",
  "key3": "5ZokTD3ZYhwgZ6BDLYeBZCKkJz6apoEt8poDi8whe41QQNvwiZEesgePVTDSAvka9CbwLW4RTPQiy7KctTMXpnTB",
  "key4": "5pUt2P5V662XoUba3hvWNGkTzx1zkMb77h5yHqAD6fY6CzemidCYBCeFMGnFGCX2f5u72aHazTwvgqGDN58TH6tU",
  "key5": "4RVYVXmD5hwiUU1f7P17QLdsLGo62umcHEqF6qFVxAPTi7q74XMAQYf8214B2m3SewfGB6XgsUVDHgGmTLWVfYbx",
  "key6": "5Np5gjRSZWKmZNLVd5EJqysP1trit7ukW1p7NK7CnqXDsxqEMLUP1LDfheMetcTZehgMFA9B44mRweiFGXYn77UN",
  "key7": "v2LvT8CBUMvEocaGu7kdspE5wt9WkZj5UxqFCj5xZ8A3tqFh7S5hBNzYf6vWc1zBFkheMfr8ZkXUsWbkjHH1rhA",
  "key8": "3eQAXPmB9aqrw2xZhm39qn5rjs8ecsqzV9x2UqCJnnciwZtPyNTEbb8uR5htRWBgPeV3FHPLCyiyPBU9ybQBwwUj",
  "key9": "2fooECvg8YBwZ13QBxEMxJCdWSf71Khmn5xXY7QMXCRip2sMZVPMeTofY5gMmrWf1WAzstPVizuH5ia17PfNaPfJ",
  "key10": "3cxVmPen4hkmQp3Kzy7JJSRcMjUjGnTV5AsXSjaEZqNok5bgfbnd1No63iBvgGsNoeLjJa5ob99MB14BkFQnai5K",
  "key11": "2k5aGMffMrnwCzw5XnsKLMBkFYLB4XVyERKsay9VZkLXg51J277cyHdnUutbMWkUMxHN17s9kvPnpdnvuzf3qSMx",
  "key12": "5SiWF22ZuvS7pkeK9FruhBrUCX9nPrhCL4Vkoy3vmVEDFxrqz4Hd3zfxWTE15AsGPD3t5A3DpCj9YoRGoh6Kem5U",
  "key13": "KhXCfZMvuBfF2QAxjHiiyd33to3QR2ATnTUyq8e8nYfum3FtgAmxBfzKWyNnnC3q2wKvoW1avZkf1vRdskdiH1d",
  "key14": "5Wdy5AqpRo8qZUQbDCGKuWJEFWMaqQNRQW1MKnd4CRzxBmiFuox7oPdbj2EiLtjoNDNvyneNafmtyDrM4vuUdsLh",
  "key15": "2zfh39kWgrJ85GYaQ7Dc6bWMJLpkZcCiqC86qSjpFnqygNHwpRmexe6UR1fkLZh4ktSMiog3NBngdtsxNrwXkWSh",
  "key16": "21K1sW1au9neM4Hf68Y6jDqVVnB8ZdRk4zwwToNPc37VjV8VoErnKQLiXbU153H21DCJAktkhNSLkYYteysD78tc",
  "key17": "cX9DuSiyDqDVTguGyhGM4oxkqhbujrYFv1x553SBEhrQtJ9PioujvZhE6yh5Z9pWFcnABrhSH8m7QZmmcvQQe3K",
  "key18": "3F4VXn424nEfmH8fe5mEShUQmEyV2uVE88ZnkeAL5MeikTf6i6BwXKCs2AcWFDZM8KzArGsycCGzbARTC2hBdZzP",
  "key19": "3CQ9tYMGFgy7AW5TGnouwYrFApuTdxxTBqt8d9SURQGbJ9ci81FzvkCesbFcxYb1PDF6P3z8sC1r3j67W9TNdJP2",
  "key20": "CV8bp8gaXqDs1y5uAXoMUFgBtERe95frxfmGQWzuywP46q3NxWSMDfg9vyHswYhijcXs16u7ybsRzXTFm4Y15xG",
  "key21": "sYcSWFFfKzqRPcobYEJRBFrB9KXA8p6jQ7TtMCUZarLvQNf5W56mYEwD7okjsjHA5874RRjJHakNCHcPV6wt7k3",
  "key22": "4e2EALDXVVQ7jUMppkyGsySPTv7br5kS9x454AYJu6tPVx2e3tcjCjtvUQ8AR9nPeG5rVE2p9yrkUBHnwXa5rQuK",
  "key23": "3FYMbwaXT9Ad641vEadYFwRbkn5B3Q1u3DeiigH3i2EhZu1kB8HYJ6s6SgmkJJwxFroWELVwFJGA79khhkB5UfmV",
  "key24": "BaPTrK4GFZgY21X9GGJRryZGwpQDX7ynnTYmEeMdnT3gaLqL5fhLfyi8sv8TV1PxSXMyCCVrDQRDHrQwBFjLbip",
  "key25": "4oqnmBZ7N7VrX8kVr8SyosfH6WCQerr8BdkZSqwMUduxmAVVpeYpkg6MJ4SUNNEj8xH7WHWepv3dHZmdbKXnayu6",
  "key26": "jfcj59hjb1nf7rhPndwRa8HQkTJg6DDoijyuQUDqAfbuQjKD7U2NBPyn168v4npvQv3vXcfeR6T8EbjSDitiBJS",
  "key27": "328FXjgqqnQfzeziCKbiB8mGJp2abzc5SYGYMZGjJjbqBkpejMt2idyRTvZ6TzK3g2PAGL76ZkYS82bruaQvAmHr",
  "key28": "r1o4FxrsCF8cbEzNFRcRcTjFvhsLfTtNQVc1XnU5ohkKWFa8DypAR6AiLU1HPodh6JsPoWh4sP1wHBkV22Fy8ro",
  "key29": "t5bZjn5Dud2ZaKaUY8Q5LoD5t3vL4PYncRkAWzZ6HSsqtq1KTfcD79uHR2fjmr8RGGvonTj3SNXueMVkfEYRBDY"
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
