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
    "4xqFeLJm3wMnNCB6cbENCyf3Q3K2HxRnUgoJLUinngDuk3L6iAsoLnrFuN7CY8Px5D2JoXTsonwzYoJ4opAzq5tK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUELkhf91w7JGmhxqvhgc318odGRS2f23nVVCQxbj7VHfjL5aw7smopgzmBeEYacFN7fBc1ysuah4xzPm3DisNP",
  "key1": "3Nf5RkUPtrff94fvqr97nhXmBhbf8MktWoPGBpeGjsRSUuLqvktr8R6Gy2mG98C8tBTx8xWnznRmMABqUbNRC2QD",
  "key2": "2ptthryMdE7zZnbMbAfqmLTVRHzZkAZfZKwrYRtpBScrsPbo3fcZDHoJ7XDuJD5BNLkabv5GxhTxYrTvHSEDouw8",
  "key3": "53zPfQp6LoHGLfDrcteLBueUwMyyXRnw6EQ6cSrfwB3TBUd7jcV16oN4xwYC3qVkfmB3daGhFEWwmirVtjsXuRKi",
  "key4": "5vqze2xegQdBvjDC9JQpeBigBSJNWwTbm2nCj2z74ycJSrdR9buGzfqB2muLYsbwT9Xh7DMdhMvQtFY9Yq5Axsuy",
  "key5": "3QWkr1sz1wXaGN5CuErMrfhoboLwuCGsm3GFzZeKdohTeXPXxnWz3qbHQsiMcJW43vyw7uZHCFM3kyVbb4SGxPXU",
  "key6": "ca5uRKDiBCSi3YsUbXzqxx6izHDgvq24EmG2guSSGV6XmSnbpcLR4KCd77okeeo1Z5zWQHNRkxfNAuqd8FC4Jtk",
  "key7": "LoPvbuLRH7Gf76vfeii5S4RQGsVkNNsHaoPCTH6wcduwhGcWb9Wvwf5QcAe7XwQwz6tDYM4KXQHbZW5KHQBRFGA",
  "key8": "4tumPzzcuyU1ig4v7kv5saRE6EVGPP5DqWHwPMH4Sn24x5M3fkxDEKGjeq1sFBcdLQ6WEW6Q8YiZfXcFfTbC7Tct",
  "key9": "ipDU3X2miitKpJzCGxrGU9xmMnwza2mZs5dYs2Hsvndu5UM4yV6pbvv2uc7ZfWtPWBssLwkQ56uLysgUacvzL3j",
  "key10": "4Qn7ArDQGX5Nr5eo5sEn1oJKBZBs9JZ776286LFQnpNs8Beb4fsZgVRfuZ67aoxE9fV2cw5NYnY9C3e5wXJC9v9r",
  "key11": "3DN46AVYSfpdCBhguL93RKDL8KEgfrLzJjw9X1piJnFEjjdAp1gbbbvqS5nf5gdJLwd9qN1nHSNd2WcjfoDDpmwi",
  "key12": "2TbcKmxcNxvjjN12KCUqiKsngBYV7qEPkykce44WP4sf96Pc6o2ANonvbmdubYDnRuvdUDx1B5pWxjKh76fjLk8N",
  "key13": "4UTdaKRwLgtoXUeiAmhRZ6PqDPUFqgctiwE5GKkLLmeL4iYcBdY1HXnoK2b77fEDXCP2CKpvdrSmkyzmdnoj9dkq",
  "key14": "4ZHGf9NYXDY7kK8K5ozVaCCPrKS4FEef3X8wNSkf5yaRy5HxPCrpt3gDFXQ7GMmHkUvTAs6aSJtQeL7Ca6D3bvUg",
  "key15": "2W1KTj1vbXK1GRY4xsnwzEsjDqF8D5XMCbgqnRgeTt1kondhyTvViZur52kPKdzU24BV9Mnfn2VGSoaNPqfEgsXL",
  "key16": "3Q8HuQY6cw5L6CREFP3LBpd14HpXMKpsP2tn1yiD5ydo9aT1Bw51MgAJxHgPAr9HyCUff4bTC4qETTrL4Zsk39gH",
  "key17": "4w5iuiSGYHcRepEaAjHumSLTnRniciEmnh9zNurrAonNnm4JpMuaZtEQC2NoA5oMwYUfk4YqNQWc2G5hLG2eLMbH",
  "key18": "4Lv2S6TXz5vh7yqAEdovDgJTq9awwZtqjNSmoygXpEhVZi8HcbP8gBmzxaP76rNoeHSCHzHVH9KF7Bta3KtQggEK",
  "key19": "3x98nfYCLZcZdj77mFp8cJQxgQLhEhPKdKz52E1T5kExAMt8TPPwUoa7R4fEm11bEHau8P7E1332t43bE4ARohxg",
  "key20": "5nLwUcHfVvpu9eqBfKkecDFJvuMwgLasxqm9Wfu1X2ktj6epwmA69uEtd19gNq1QfQWvvqRsfRmHdwm7FpRmHEPW",
  "key21": "2Qz8gwa7WBP9m1YAu3yjY9BYrfV7vxU6w1aR99AZH1gnUfDQz6oT9oMTFKyY87TbyZTmxfyfMmGLeUf9yUdL73mR",
  "key22": "2eAA9sacfSMiFQnxYsMrZs8N5a5Bvef2eHgM3voQgmzgzQ3Gb3SsQsVf1P5yVP2M53fpMjfo1vpi55HGzSfb3v3q",
  "key23": "4E4PazQjwYRaYkQ9MSxGJfLjtKLhRLnKP1q6R7YiAW3mdxL6ZxLieuVwG7Y9x8YAxFoip4aMpSifakPWiPdfaxSo",
  "key24": "5tNJ5dFEEELLPP5ucR2L137D4NZv4pXBSY7zBaWXuxXsEsv7FP3BdMPV12oxSW7NQZ38CaeQL1sLosdGPCJ6QLUk",
  "key25": "4QSHxrTQAoZomHe5TPfP1YDYD4oZrrHyMvEM8N6RTG2owBY1XTso84J2J1hKSpEDC5tVjghbv8yEKrqGGRf57X7",
  "key26": "2rTEFhEG7dRgshKJDJFkhHWpCeykoATd4Yun7nCeu9Ah5zzfajuocmc5xwe3aQc7245hRBG3YnC124aJVMdkB7vg",
  "key27": "4DGt2nJdkXBHmXtHGJXHTHrEfKxgm1QGoQoJ143cnv4TJLZsPEGbXsjSkvgqEX8Tzjgjy8UPyFpSirhx6Lh6grxx",
  "key28": "43QFygoebWbuYysmL2eSTANg9ZUzzRq63MuB2QMo5Q6Bs2HjtvZhvdTboBHrBP1ifqQw7R4pN7tmtTNE34VMHjtG",
  "key29": "5ywsQRqUX64fwEhr1AdmY2tAABBYobRvQGraCzAvSwkshY2WU1TzykdaMoLCUKLb3EJA5QXa6YLPhC7dVeiqQYvw",
  "key30": "3fPrKBC79UppWbXf4DwMPq2u6EQ7ZStqWynxW1zZ3TKK6pjBGrUryE1xHxsTMvpwhpSHC589BBeiBUH9WR6TFuw6",
  "key31": "3VpyrH1FEQSoqQwGFqsBsLAxEe9AuPSwPfeFoMymqZcDLpT7YzACaPXxC4v5qRCe6aHmKJvZQEJxTT4AUmmijaXt",
  "key32": "5uvJFDeDt8txK732uX6D1YreC7hTCH7Pv4MG3GUdEcNLFspCwgrsvWqm8dBkm1QQg78M734jLo2x8A46hKJTGkM6",
  "key33": "42LQR46iXw9fSvsgiym5fZLDndEU5VJCd8FvZkaRsEbKMw9jwnEtP1UDHtFPbwFMcts7cUpribbHQG2stmowvFZs",
  "key34": "46wen1i2mXYUwByw38PHuawXnqSDuzhM38GaKGwdmiwQDSwFsGyv6mq8entMNJ6iHfiujYuXMQg5MmW14X7cuZu8"
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
