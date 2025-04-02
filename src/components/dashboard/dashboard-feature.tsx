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
    "jdHPBEK64QrUpyZLrfGNwCpH26pUTE18G5sTPJkFxWsHA6kktbVNqF6mhPkeipc6i1N6XuQxcewmn7bPc3fTqFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5unQzNYQgtoVx1sWccy6ECKnqAq3NnD75MvrMRyPYocmRpoHDyKPsKAUj1vVhxRWQNxmZb7coLwx3FUcqV7LBQkF",
  "key1": "6zmEsafXXkBdRK2bsewz3SjATpTXiFsziTNZDc2YRmGiHpP3xq6Tg7g2RbsaTiUnXBf87ZbbWgTE61bfYdXrt5R",
  "key2": "4KzF4MMSby8hhARCQbprGLvJkHoXSdAuR2Ai4RVPX35hjWknDZm2o7tAGgcpMZmhTtHGR4nG9Px6oFY32Kbech3",
  "key3": "2Q1SRCncTwHnypG9WBkFK99MSxNtbXp9Yg5PrSCGu4ZQxLxRvNmEgyHfaK11k8kt2eVbBMHAYXprks6enCe729cJ",
  "key4": "rbw8cyNuGHyfgjEMv3Xe114SqE7ULNQjPLw56bfdAjZ4NAaunS3p2Y9mniEHrm1EWBTS7D6v5CoD2Uxb1JFqU9G",
  "key5": "5guq2h4KZoCbdEe1dVfEBaZ32f5K2w6gMZgd8G4JEMRhTD66Vq1CF1spRkQW6yN7LFCwZ7BTMzTpnzbJ2txym9fB",
  "key6": "gUj3S1MXrJd4DPtigvmA8FP2hnfvg8NAnTE1XtX7Jnfw6mAf6d5GDjvoZtVFaA9tikxmRAwgoqz4STejDNedGrs",
  "key7": "Spqb3voKwJimbWLGkRQWsCcLY4fwwLGbVf9zHUs6isPjsNqZAAg3dQmnfvwi98WP7Lzx76wYfvBU71k8Zztu4Fi",
  "key8": "49gCwz5T6UpKwVeSDwG7sjsKy7t7NcdE6CKm75uGtaf3CjbDHF1nijeP6u47DQncGfZtEaGHCMXM5q452SNnjYp7",
  "key9": "4SDqSAUBhMmBtCeTFtPnpWBZd8fL3np7bk4yKiFTKUkZioYA8DthJmTv8fSVYkEtVhWTbZFimKfoSoRAeRFUwHWy",
  "key10": "4uViefVLvVTjoNXGsHDkxy87FUTZcQbr1WJmzmLSC9PMgNu3cnWApiHCgpKFJthirqxMSbbwjNjHiSPDQaEVmtA",
  "key11": "2UihFV3EZQMmfvJnaNkhaZdcYEQZ79a7Sqbid6CyTQiDkumDEsnpXEBZHjVb9baJ35mFUm35b3JxwhAx1jDny6a1",
  "key12": "3zTi7AzWKqZxxfUaKFpUSqsMTeX9h9tSnfXvHy9Rbxph4G3jpsycAM7q2PLjjFjcvS8355HhCUwynkAqc2Pc2cF6",
  "key13": "2VJKHGERnEvzFxnU7twkVADFqSkLd7ruN3R9W7SWjGcqqPKnj8eRotp4DiFqKuTevA9YUmhyzkR9U25fZDbRa5tw",
  "key14": "4HUsSkRShv6muiHD7x1WETKDUeAPxDNJpkw7Me3LVvRtaUVWu3df1TTi7mqbPtHr2uVrP5QyAi9iwFYWP1Us3KWN",
  "key15": "C4x5kEqp2Gu1C4N7Tw2dMZzaUp45SYRbxvZahReWQFjvQ85Ggq68qnx3PvRU6fkfQ9jEnuxRqSHvLiKwNMCFbZJ",
  "key16": "36KQBSfJvZfRMeDjD8r5HnZQh9WZfPM4rC52Rk46byFSvUCGtYqAAq4wu1xwgUc3vCZ1k51tesPrZpCW1bpSUiVL",
  "key17": "qCpxR8mpworQXgkexndpBYqoD2hYk29GYaHB1kHtLt6V5ezm6eTGhzusn5Xx7Q6K519irTpA332W25juKRB3BXE",
  "key18": "3nGyK8uQohQ2yt5KqCx4NW3UiviEbyxvLHmD3CvS4twz6krbgWckkK7DLfFWUnfpM176CkN7LrtQLxoK8uaRHFjw",
  "key19": "iPKPfCEYnrnBThL83pAn2D4BTXW5P2odF92AjYTEHT7a9Cv2AoDRxSccgA5GWRkQvoAZGMYU4Rfhyv3ooy75CSe",
  "key20": "5ZNCh6gLeZscktVgHLsAzcMJxqsRmv81QsKetvky15fLdRmjbjKk2wRGbrPwYPW4qJoCGudsMFJXJg2cKFUf5qBS",
  "key21": "qxC3tdXriNgaNHbr17GFTTFNga1QN7mKxoSjkbMBr18NtctRX9cH19S2ADVdFFCMxu2XFLFxyuknpj8mKaMkdKp",
  "key22": "gzyhszniAdThrA8bfg6syNnh6kYnsNZrpJNRqZWxippqeX2CzX8orGQTe9g2Y76cXqLRwSd6gT4oMdmnCGKUY11",
  "key23": "4GfXwbaR7FpA7Fg692wtka7i5DRE8kwbwm8PFujkny28rHDZX8Pr4tpo7HkGfNQPKRPggXstQ27dTtbotS7zKDU6",
  "key24": "4YJoDwN91atGfcjVmecVk1PaeMLwrhRFxuuqdihkgaiFsBSeTSge1jw3Gb9qcVC1Q4XcVwRnEmXT1bo3Ux6f5CxN",
  "key25": "4XqK7Ejx4mEJWs3JgWBTG6EMRBSFv83kt98SL7WUtZPQ3AToa5ZMqjC217Zu3FUEEC7BYx3ZmyB6pwS9ZM5BGnbe",
  "key26": "5ydfqZPUNPxRnnxYCRJVRM4DU1Xe1w2KV3KfVrd2U3GjqKr9tknj7RS1AgHkxp4HBstG7NPQRjPCiYHR6GdCgwBb",
  "key27": "54DJT9kxR1d3scqYZ24iRpAodKrHhvRciBeYxsSm5biZh33N4DZDjXZA7J5jX4GrWGv1DK1BmthRjjjTpydTNUxR",
  "key28": "5oALosW3japJzC1vwMNeDMgGGLKUjE1tjrkPkQyLx2Di5ZCALUs9z8DXfEFMMPaFgtiFyaDv34aitE8QFabGmtaL",
  "key29": "626eY3rSWQGFZRt2xuZcUQGBD1gYgtUymfkLqA8ypsVBsNdyyjbuzipSyPkjpy2DwHbREsW2g4FQgygM4x7MRi5o",
  "key30": "386tirZQ9R5cbivC7mS6fLFYK8TWgroMrewgAGrfTaTbBk6qQ7PeFzGtRzb3tnQK8iVsEyN8b28wWxXZ29pnmdY",
  "key31": "UyYWAWGPa7RR3SQiNWPcmQBiiqYijF6bbvaAoXno6d6ES2vbmFK3GwxN2cvKSNAnw7P7A4zqGcrmL6cSWQVReGF",
  "key32": "4kE7DzciQ6vjjh7zaG94YPdtDzoX6WgBrAU7w1QDQMaHdWPG9bRGMVjgKNrc8KbTKKvki7TxHh4kJL27tUCKewzd",
  "key33": "4poV6W71m3dWxxs7c4158v7sKCqLxjY31SvFttnZSh93xzahUkkk1toD9hdnCnfaBum61wewgTMo2jyFnUUaqJds",
  "key34": "4ZKom8iwzUxNBQKjDJCxzUUf1YEAx2YqqWoqkYpn8r1ThXDsUG62qFudp4FYTKixJv3tuUG9WtdE85SxQWohWoBp",
  "key35": "f5rKaKo4oCtReAaM7fSV8oepkBWHimf4PJmGefe7jVVoLsqE3D7BgQMv19zSA9vgqimrzL5Z2jiwR4Ag9RdTAGc",
  "key36": "49Cze9T2CF8k884dqUaHJDgEYRw8yNoXxGcPz2JbRysvTxWP1Z9hHFWvboWYJsNWbYwgPhtezPCGXMPsYF6hxczw",
  "key37": "21NgobKH8xsBbhVC8kRZahTfjBEegvm2GucUQYxuGX7xjmZMKQub9kefY6jU8zbmUG4kxUXCinYKJZYAhqxqzh23",
  "key38": "2LLaE2x2KHgi2yF7JTwv8oFaVuPxqMrEmWLwsLX3q1BZsHqYKdyd22mLRCbcAwikPS1jYhvmUTdsK5ZMqoDseSu8"
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
