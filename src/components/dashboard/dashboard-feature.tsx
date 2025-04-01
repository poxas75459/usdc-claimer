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
    "2AXC9SrtwxCX77HXmSx4WaXSRCSAjYT8AuerUVZ6S6kHtVVp4KBWfAJB5oQL7aV2XtmsuGHG1uLMsosPqNAtGxrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QU55s55wMvdXxVtMVfDDmtECM74QuDibvin2TVYkjnxy6MUtVB1haZnZLo3p2S7cJmxszCx1HNhYDyXBACqQmMH",
  "key1": "ruL2TrSrfk7xgEuhRVahWfpkd5XJ53o5zAjXZA5LXZTkBvEXePa3tLTThTzUGqtfhBJg4DJeghGTYiaryFaQXgD",
  "key2": "34cGR3ZzHNWGNyBEBx3Qfs4Vxs6kSCMYGpLN6L7EU42egrJkjxEgfsPHhrpebi8ktBabhqiA2jZsCa4nCEqq7PhH",
  "key3": "3nvHZTvaoDJ1rXAMEx73Hi5iJwoFvJsTWcdYrDhWexzUsUayUn7addmRJJKZrjMu2S9h4GCEECHZV4uG38AWr6Nh",
  "key4": "649ggW7uDAhwA2epNv4UHDpj1EznoBGkxCxLLKWi2iwbNk997wDMuH6Huhc6t7xZ112m1qkrncSfoFZJkVvFuTXF",
  "key5": "wDCh8ER1LbZ3BKy9toQ9ZhFkwgnUVm86XGz6AJ5RDq4Wmj3EH4E8BqH32tWV8u3h5qApNJWEsg18kjhjs9uvNDU",
  "key6": "3v3z2HgbTqbyxSPHHThxo1fexnvTPwLLZ8AmG3DLtYx5LkUuJXTBgArzwmXJa3bPzf3d8jVhCHxvZK97CmHpnfXE",
  "key7": "3qrJjGfGPfr6jSS9hT9aFva6QiPGfXf8bRwCaCaVfVhReyraPuUXjV5prkL1DwXYeogwLJe7vpiN8Nr9eg96taba",
  "key8": "47ejDVSbGdDg2o43au1PvgS9uSzZEKqJuADNoFAH6RzpTCF9h62BfRNNSh4uZuVoAxasjwtmcuEMmS3CoZiM97r6",
  "key9": "3JVEiWAfa1ttHiQ31wrpSkeXp37xVBK3StfK5NvMckUwmtD7dCRz6mUbvPweJxFhBVWZWWeVE5P77dfYYB7iEGts",
  "key10": "QqYZ5ZyucaXwzYDNHJXqrsuYbr7ZTeY8u4Daohhb2pCGmX1HNhNftbc379VdFB77yEVJyJhqBfZA2vXU2VJ1C8h",
  "key11": "5oX4MjoxrAhHaKiFpdQUivQD6w1eZmG7GKhwXX4xJ83ia33XiAvJ2xJqw81hzyEDjbjGKuENsZLzXgUSARd7tnXb",
  "key12": "2RyJRNYoCrVx5c2we4utPHujtxzSMa6y7SR76KnM3Nzwu9T8pwc7R28yKD3k7VahkVeeL94cXKg5Aj4gqauWGRDT",
  "key13": "4cXc6UA64XxBDP3piKiwvx28q8q1Y2JnRVg72Ub31a33cd1GZ49TQdsE6KmGuNHkZc7hDWMsHkguAtsTaDABjmcK",
  "key14": "t2SKkMVVY1mX9VNLCgBw6vhcXYxg4aWgFWK2zsWhqKuzQvV1Ch5XfSzqZxU6ouPwYjN2nEvTDVYui1dUgTXwczc",
  "key15": "4WXgybqt1wUVjrCyFudJkBgr8wcjAfztqD5z9obobbuGdSoK8QT9kCgY3YwExZQ9JF8xaueeuX2CW1iGu7puNwYH",
  "key16": "q5PNcBSFMy2X1GXSFcj79jPBSH44rTRQmcS2FAhTwJPxgFTPwkczZmbYieBhJbYoa3aGpdd4vRwg3fZSj9okVKB",
  "key17": "YTPma1j5F3YFiJ5mVXmB2qBtP9Dsm7UE5GkvMRCdRhp9C6SiTcbGxbc9ZY2UsdcfVnEiECTynQUDUcCNHJd96wN",
  "key18": "2gE3oePwJRZFnD4VBN5Tdbs19y33rEHRyzHAZjtFJVsgzUGabTV4MZrmcKKrv6F41h7Gp7UrFbde97GVRCyZW8L7",
  "key19": "5E3wzat1maAUvD6SiRgpx31tcFio7wA2YjCr5V1EMoVdTy6us6dXPNADTLPQSLM399as9E3Gde89Ab3L7LFzSA5b",
  "key20": "5xVHPxVDyDwJ2YQ4kjYkeDabzFoNwrcMfBCsL9LRuuG9vhHH3WbMxuAzxM21geV7LoBWmvCN4NKJgxLpANCwuxUd",
  "key21": "3b9hVkFbLJR7VETEg3ejscEkbKB8gu6s4fCwvDBv1zobmtp7hposMuxNpEQvnJHNNGJDJY1FN94BzqHzTQoMYFNT",
  "key22": "5W2K15rcm7PRSBXaxX515JFQV36tcm7Kk7a8CFsZS63pwT64Eh9r8ygMmeyM68e57hYPqfe6B4zpEvrxeba52297",
  "key23": "4fPF348avhB7785ofsZQRpe3FnfcDVGWWXmaJUjg88SYt8a6FrEi1F7ipxqSBww7UtzzwVqMbRyhjM6hKvW8d1Av",
  "key24": "36esXf6UCSomFbYiZo4vAtHsu7eQyAqB8QSCmZs2neqK6MKpzb1ecWJse29NCV2Ux7rjF71yK423gYkBKK5kpzE7",
  "key25": "2SNgopK7xKvWB5NewCQBrz6VFztBhnHL8Lc8B1LGnHFaQMy3hxvyymcEb9f3DQfipGahvX3w8KYjHikHvYAjycQ7",
  "key26": "2cz3L9cpSJipoRjtbqHMX7woHeXhMbuceJdWWYxJyRtTEpm5AYUkrrH1TfdnNUwbZUFW13KfykM57jxCCfie3CGY",
  "key27": "2c15PSs315tCHHt8EeQmbSc1ushnzwHLznjqnX4GA7ryzFkLPG1VucpJR6U63qqdN64QkLV69swEhADAGikjNZdt",
  "key28": "2r8EJk3xYpeV1garA97pxqNUdhnJzmna7LjeBxWXcTxhq3NH7SbxauZX2vq49c269nrSFK68p2XszMrCiDiBZL9L",
  "key29": "34SyvYads4hbpQxNEimEV4JxQQTWWYSukwCjyQeTkwiAQmPM4rj6eeFiiGpUKwmNNqzLeYcWfCBkVouRrjvNHNuP",
  "key30": "58JGikhx5TDjRnFtqn8RgARzKnMxcfbqQxzVXaLJewJYGFUVLxETDr74WYUznCoT2qgFqrypqkyDELask4XnXidQ",
  "key31": "Frs7ShuSvrrT2Ze8SamAAfftSuakL3zR9siyYV6WKPGRgiyuUMi1JqA8KaDowdeTXeR9irDfqzUDXCPify44NyM",
  "key32": "3K9LefgAWZtrx74hX5CcPeH1N9hhYXMZSq7xvRzq7qm6hyD3X8UyzqNKc2yFSY6NBQznLH7KhnEqQctGMvd3pGVf",
  "key33": "42LCDfdqEA4SsjjCJ3FiNriN4gMWNSSVLC1HQzgZYuTGt4tiEonZ1TrtLV8JvpeJgfsFgWfGZWnc7tBgqA5FNfLq",
  "key34": "5EbezCG1P1UmfcvQXYEeAoPquoWedTfHBYFUdQJxKvT6E1GWZVMRBBqABGLgTsrgdB15v1qijwK5vQNKtUgCT3te",
  "key35": "34idGmwiu5cxQR1JA45k8qBzNK4JJrAgFoDcFFwFwuMiWemJyWTNFyJS23BBPatA8hcwF3ZFKSuShhHkp897Chuo"
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
