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
    "2TwmgFWYmL19SAcnVdCieBkKLG3kE4VAkDDUNPqwX6mpu5wukUBGhBaank1ebChpFuW8L9TFXmzHpKF8xSmrRpGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dT5AEizUJ6PCLEk3ry8Az9iFZYYAjipUf2j2LXQ7c7ycaTmAuqMNqqCxvpnprPwHZYqLXfk4cwokqJ8kS9TuF3G",
  "key1": "4xgAhDmDsNv68k3kqQWiZ4TbewsSNCJZoyv6aqVMJgjKahQ5dLx6MnJF1thfruVZJaR4nMgPUsdj8JRejYTSNxnF",
  "key2": "5gu39Q1QAeBX2ZyHjAhjir1M7vFdCwL3mX4izBdrWR6tG9UnmhYCtYiwYXKACQot21qVq2Y65S3cYE47DwemDCwk",
  "key3": "5uKEtxM6dFeECBZfhS58YDUfABcKMcVuwp8G6HZLJVEY8ouaSjDwoxMeoUjSBkusosteXD8mvsniZLrnDvBSNwuB",
  "key4": "5ru8zQqk2aA2MMdvAfZZ9idy33J3RUSxXqqBmfBZL4RLb1X57TLUcptPkdWBQCeUWXTNAcczUTdtoRKoY51RSgrX",
  "key5": "5rxFQKB5d1rGnHe1zooTZtu1ZBALS6MbkqN8SBF77Jm3vKRm7TpwzCRAisVjQjr6YCfxH3qg4MVEoQcghmzrSHJ",
  "key6": "WH2r5AyH8sK8XXyVG2Dk2rjgjjhg8HwoPx8joevF28xWJfBw6qE3Va3eav4DoZJ3NDXeRCsHcesTdoZreuAg8BR",
  "key7": "6o6DNy8qdmt4wtM1GHcWKWQDj368g3ryy2T5hMfhgULm3KJtdHYeGnLAsFeV5ip7u3NVwTMfbQGAo772Xjewog9",
  "key8": "63157uXHZmbTcJ69MdK3FeyxuLLVj6TFtZPDa7mV2ugyd1CiMi6sShoBJ8XwmPwNHQ1S43GD4UiT9M1KU4g5o8sf",
  "key9": "4pvzzQ5YCCfdXZQQ9cXkirs86HpWZUs6xfondfFvFm1bRNGqQdV1PV45X9jKKsmFG3AnHg2UuRByPXadQqpZh49s",
  "key10": "3SETeSfvUMZ28kHtEzW3yqDMxLpGU4rZRbEAyaX8cBhgffnquzTPFaodsY1KLNmsP7yAtEusJ3P3HVumM2MvjqSA",
  "key11": "JzZ3eCkJyXRNNoxrBj7Uw9Gw1gKyoQ9i31U4WkWb5yiE6ckVBdDm4zUAtcyCL8cWvgV1FRnSFYjbtFGj8z3Ma3p",
  "key12": "529AzkxyspyGC9TwTCzdKx9nefvyRDnceXHL8SSEzgkw1v2i4ig5ttQ2wNjnvzBajS3PPWBdruzn8D7dPbn3fnAq",
  "key13": "2Xr6mjgsuUDFUDKPRzyPHQxEYCnzLpDBUVSm9d1o38xr5ERCQoTuEzTkHTzmbTxRezGrzF2c5GKPGe1pQfPp3MEb",
  "key14": "4LFtDLxkPZEigTmNv7s2B8VR3od1AQXf63tgJZKM7uMw84XqKZyKirSyuB3BCbfQh3jujQeKWBcafQHYuvCqgXrm",
  "key15": "3jBMdTSXChikCD6JPiFjgekskn73vTEK1hDReoWz1Tc2aT9wJquo9HU6RB3uMV1i9eRE7WbZNPYHx1HUMFxiupW5",
  "key16": "5vKYFMkN35GUSm4UijJr6QFYtJuesderoJjyZzSu1Yg4iho6rKaxKHUMdAgzffeNGY6dwCHmKRnmHLLXCS9CYNkP",
  "key17": "3Es6vnfWTw2LVq4BPJiQYDaVvzRBMHyHEk8UYVHdP6SS3oFi586KCFoRXhWdWd7F6WsuTx82P3Xxb39kewwPJfcY",
  "key18": "2rCkRj5pR11Yy9qKn8dMq1CVAWYdF1j5KhSpT4625Bg6rSa1ZHxxb3F6vxMHwPCMohd43zdWuYEGhCn1iB3dMyXN",
  "key19": "2mSRz433Y4ZCSmioEdunPwzVZwK8DVtESxG5TFwmhv9DJZXFJ1p5QsBAPAcAVPFeeCWCBVb5YKnXuNxS3uEEi9Qs",
  "key20": "24fMpNhYP9wPThYww53jcVJaYTkXfJqXTW1wtuLx6TMDkkQP479tmpcNXEW9r3W23aY9zPSaroZjHgmvcFMuNxtx",
  "key21": "51GYRw6b2WuiZSydpvtt5bDdh1jPeuzyRMjWebrEp7pyYnUNyu3RJzgiPKAmLxprg6nvL6YNg1Y77JCFrCHcEf3o",
  "key22": "63VPjQfzJK2FokYTFbTFhSpXZypwPJxpVXkriCNjqHgpdQ2N9x2XNCNs4m8t34dgsLbccgDnTMvNXyJuXZUBeotc",
  "key23": "k7T78Rm8ikRPbosX4DAsoJSFL49aZHUgWJCgJs3tc7KPFLKCc469N4w8Z8BBSnt8aUwCUENmgbEv8zZ71QsaVqC",
  "key24": "2g89bbZFNVjAnyNqkgvpedhTPVxu8d2HKzB9j3JgUWQcXo2ffAs3ej63BXrZejFnKs7xvL7x45u9NFh78PzMe5Ro",
  "key25": "5esf9dw5io8faXLG6dFePaJeX2yM39vBedkmAjUADtDY8GD6nUBL6wVAGTL52uEiv4UywVwGoVCZpnrKY9LKFi2e",
  "key26": "4j22ZRwXYi74ELaYyCfmrtR3gVx3dxqS4DmYMSbHJWyHwPdWyHs3DJBFoe5qJCuLMT3ZgjPehaURNoCupJ8sRAVx",
  "key27": "4BXi3eAYEB6rGC6mPm34717VLwHjjLxAmjBA8EtPNa6Xg2TEKmWsrKToNjLAHpuy2q9Kvbbu6AsUEGxr7zuRSZwj",
  "key28": "4KQaKvke8Vdp1rBfmdpMSgUsfzGmSRN8njwJv4pSnnEGb6zzhzaqW2jn6teCkgcFTFjX5tdAsBhN8LJGuSbzMPbG",
  "key29": "44MeocCzpuBLB7jYDfgKYGjpBhuEoVj6LtzLWw92g5wmTmBdi4CHKteZqeWKsV6per8Tret3o2Bpw3ofs2gxQzex"
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
