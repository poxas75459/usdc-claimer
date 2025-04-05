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
    "34u6LJbHhSn6s3xkPtwxhpGBmTimsfXxKEwBCM9yNebEnXFUn3vLBVa3bnKjsQPaKYnCP1nhBN1gFnXhApLwNGDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVpFN3iXZXYAE4YvK7qTh71wudqDEzs84mEiFC8AvE3gWC6LQ6Bc8KpHfiHJ13W6ySEM6MoHAqmFz7FWehf81Em",
  "key1": "HpwJ2pDH4LGa5nEc8zBcCZEzBbeco6rmPwwYHiGvhVJsvgPstWrgTWGd1f7M5jbuC25TQe3VqHWyFTBXQRnu5z1",
  "key2": "2kTWoo2Zw3xskxoUh7CtZ3mkpqFHdyXqYFV5qXrbRUVUVfNumHvRRWgJnmuEUeSfTmod8yntW8XDXnJSLhnUrgge",
  "key3": "5cD3xHKyw62KRkH4tropBv5u8jUvTxR94qhV338PVojg86s18UMkC9WmpS7oLtu8iYFEYyk3fsPko9GGoZWrWpNg",
  "key4": "4vMWgZZF2TnzHg8uqKMDq2sXb7ZaEiFeYCKCsK7eTWoVXNovrxSXVHNgVDqJuiEj4o5ExChg4UUTJuZYk5TJJ7JR",
  "key5": "2PopevuFKSXzM3fAWEKYxpyzkQd18YNooq12bzFvWGfR93qvdgoNejMumbeQwmJKyJmaerghJRixqwHLXfhhdXYL",
  "key6": "5VHvsa3L3tGuYcM2VLHHN6pkdamuUgdL8MTJj2pEHqHhLGv1bTvZqZHPaCmq42rzrGCirvcgTgEG3F4zUvQb5Cut",
  "key7": "oEUii32BrvSjb4KSaoEfBYQH3Bb5xyQe18kaWSPxuTvKKpk4VP7yB1mfMSD5Bpsjjk1hUKzB5hfzrCE4QqLo4Z6",
  "key8": "3kcc6i4uCLmR74JkB5vu1EnXPRjFmKcr4MCgfFcV4swyfPkKBFFeb3MtDxchUDkQ4BucquYr24VJs2NHRxPrYc7n",
  "key9": "5yjc1Bzg2ogD4hj4ooY4EaSpcfDE2xSZ58HAtDqATDcw1MEALb3HNL15eUBQdX3ywhXcLn14QPTsXvzYvk23DPoF",
  "key10": "4HWduVmZpbTwgbRF6AZt3d45Uas1M5nYoPJ5ptcPMgiK61PBAUimWWEWcTzfETX32RNRxC8h6h4nZJW4JNyiDxT4",
  "key11": "3fSHpbnVdPuTfoKQtwRsFwZgSemejGkMf84wuhjdt8JaV3847bRranYB23tUigy6tLqt8Yka4iyebmkLuv2jdT87",
  "key12": "2Eczp67PvMmBmaztjVWJWCwscynQLYDsUZ11BMtRymBV22Mf7Xd8K6NwUrZuni7Kc67Hbfxpk2s29GbgXvza6zHC",
  "key13": "4CRG55vnyn8VebnnZ9ckNzmanDQaRE3QCAYUUMkKaDbZnksibciBCRsyNkMJEuJSqKdePrUL2tJaQwLd8cxqKB2b",
  "key14": "L9zB9DRPqXanuzm3Y2FrNykmrcJapstGeqiBDm2LKUipCERM26qmkxiS31PDtbAbnYwZF47kaDGep8Z3MGxezan",
  "key15": "3A3DvtwqJTUjU9nx18QPuCyqKktjPAgdFCK5htLUkMFNpCpKR734HFPGaxC7imu1EQE9547TqngzBv43oguAstpf",
  "key16": "264gTRSU4QJEt3aVuFRGw3c3mJYMGcjrDGXvdMJ77DcJ7cpJpkvCiDWk2NAJjcNQ1uXKxR6FruepbAiiXCDwvHqv",
  "key17": "4dsuw3zRRtT1Mk1JnKMxAKn8YWSzpY9x7wRwquwi5N9UC4vyDGsRoT3S7on2bXJpQD175EjqzyjJ7on2437D94U2",
  "key18": "xvabysrZaTT4uFiMCS6Txia48UhbjHsKfMQ4Hcj8KpchpYTf6FfhNTNjfVHFqDXeqhsapovpU56g4SZ2eapj3w2",
  "key19": "C6QXKPw7zxm9oGBz2T27fkD9SomMPAoMCH5gbWNcQK8B2xzcNFLzBEUbvHCjKTKoxyhPPVCqEFPs9ZzM8ASptRW",
  "key20": "VAg6PQpHg599rN9XaQ1yhBktX4pivHKuq7svU9we4qauhENCfBnBF6iguAk2eeS7Ush8UkdiHszfPTziiGjrBrG",
  "key21": "2TkUnLZMFbeorDVzh6mXcbZCFezyBFGBnrKjqQzYrwXULfFmjdDMv46BkqxG7GRhf4bg4JSNLYXyTCnLxquGNmRe",
  "key22": "61pk89hZya6oDxc7bwFQYVCqTSiCaQkZxszLrz7W1GAWuwk3P3fYS18pBKvb3PJ9PW4AUF4QejxymQ7jdSNVGca8",
  "key23": "5y918i8ndAh5WVUBtnKghnMsuFi8bUigWmr79BJ7qMFP6ciBDQqLjTApAMdCUjszY71qbrLEuGb45wEA4Jws7qAM",
  "key24": "JTfxtN7A7wixTCqxj3x2afGvBp3hQs5zd7AavoLAH3rVjLsWfAwU4DLckb67sy8gMpibDTzoG15rtsK2qeHM5BR",
  "key25": "5U7YERaYejKQqmvpuFgxi8EiVMJCcLAjh938xQLpDHvF4HF2Ybm8Suy7KZmsSpu8Jcd7HvJS5R8wqvYqQ771v8e7",
  "key26": "4MRtFTonGpGLuKrdADpLd3GqnGEiY1o2RU1vajC6H5Ji7wmEuipbxAS2r73T83Te16VLfhm16btBiDaSFqfgAns2"
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
