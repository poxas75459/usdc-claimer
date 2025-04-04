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
    "5BCeAvvWkkgm5YiuNaHfUC5LkJStKxZtzgKq1SH246Uu6TT1FVCUAALJaFWxUePXbRZYp9W1uKfCWUQ5jrdBupMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdN8AfVSkGzWbygqGKBgDPxN6zE7zkCZ6hzb6W66qQWQgSSrnwapY2pSPGy1hiRt9M1HkMr999s5gsGcbWbQ83t",
  "key1": "4YoBQsYGDpNAEvyFwBRQkdLEPnRwjSW5df5nGnPBebpJkReShkY4J1JE77ZmxK2DVy3AexvYTLKmmUUBGaYReJnC",
  "key2": "5Q1xcdyfrg2RsN2dKsPGM3ws5JJmioGDjMDCTgs6oyNdif1yBdT5S9RZw7UQdDqZUzGm1d9scg2KQ85XJGxzbNs1",
  "key3": "hN35DbsKgXQSXYCUxW75F74Myp9hFvEbHh2poHk1VYjFZRyUpm3M8p2rD1vKSbx4oHJpFn4yP8uEHjctZubxXW1",
  "key4": "4xzugXpUemZZQRDPTQquNGnRpAst9kqS9XDVtfqofjbzBnBuZRggW8ghFBCpAbwG8EvZjtdg18sMvQc8YBFErFpd",
  "key5": "3wVxurMiDGgbXo8iv5xaGbQAP6vSykAgDutomNpDwCv9usognwQT3UJLRGLdMNqHr2tWghcTu6KBYPUDTrDvgV5S",
  "key6": "2kCqPB7gX1hTtaJM1vgyFBkGy9rt99YRBbMB3etePYcbMEZpsFWFoXuLyyoUSMJ2Q7QaEvfRVuq3d9rsgtj3a2HX",
  "key7": "2yZ23k8xWZxgj3UHkRR1wc55UL79WiTw6z5AmW5i9P1WeXRMgyyCV8sE1G44JAb1vVaxo1FoK5ZS32n9gifLKCPy",
  "key8": "3SvNFiEGJ1oVEnX3E1NPNgBs6BZTPjTEGgbzpaYwAnNf8fvBrLL5xpLJJuAaXpr2etTT9tFwoLNimrraFNngJthJ",
  "key9": "5159W6pWaTVgLcWN111bp4ewdNQn5Ub7BqLRgqqNAGXaZ7hZNk7kYxh4f2NanQuciuqkNyyhLXBKVNMCRjEsD8U7",
  "key10": "47pRge2TTBiiSUzq9MHEVokCgi16KvfiNH1qqKcmPCMoxTjsyPGeckfHSjPPHuKog5HWK4ANYehJvPKxWVNmf1Ek",
  "key11": "58sg1wcU9bkBvBmxu9byxzB5gjt89LonFr4vFJFhPYaQqh6vmK4kUfUxuCivm46XaAUPC9pr621cr2FZbrvUeFb5",
  "key12": "4c8G8QxDgLwvyS7AoT65eU1qG7tidYmij4myD4gCzituuZQbX7EkZ28Yr4214CXabTR4cD1MNVMtpW2nS3vymRpe",
  "key13": "2D8T1XXs3LjWXBaqcyNcugjRK8HJaTVPrSV1ZeWve6FRL2TL9QHfzaAHbQ4LxPTNjoRw542k9u5Lb1VsY1vxrfjD",
  "key14": "26rMJgReX9C1aEJSCehG3ne7dxCwHYCuh6UJCggKttuuKtYhwbMUaGGxgWmxrMMH2TpsYLkZc8AeprWG2MD7E2uT",
  "key15": "4AWuwc2SYqpWhBX7925jd8dPJfhcV5mndXxnJzpUJwy1ea62dR1wesdYdn5BALV8ZDjSZcLJhuAgXoBpo8pbGVZo",
  "key16": "1sESG9Yqs4a3NzeP3kGC4waRsTSEsAqRRgLPgnRCsZTiT8PiwLUSoz6Ym4caT4VP2DM8pnN139anM2hoAQLnvox",
  "key17": "PaxwkBJMXZNZdRd2KEb5ASedHbA8V5aoK7P8VjvL9ZjsVC7neUxb4CyeSTcQ1v8pccgdsbgdhiXVjenjynA3ndL",
  "key18": "3Tpej6J4AgbjJcte6yTE542MsrRKUVfeXrZfat2G7eZvWmwvVMtUuMEed7rq7kADEfsKyWLS1dvvsuTHdVqyBJi8",
  "key19": "2okoSXxu1xKMYZdSxXEDq1Wycx84czh6bZSsw7Nk6A6mgJQXfXJomuJwKcFfUb4QTQ2FzyfzGkiJJPSMnxVHP9Kj",
  "key20": "4YpVgMxruuFJo1Voyz252Fh6xJHEoWd2rpwuHmmUbR99R2pNFeaXVHPvgEwXvoyY22isZCeAHG1J1Tbkec5NVzPm",
  "key21": "3hqo2XrAGoF72JZP15rWzCySXs7Q7HSjaQjgM7zYioiaK2pkG65ac8otxEesww3Pn9vMEUd8JmHAtcvP374jfyMQ",
  "key22": "kgKLsbLAMCq8RLHP82cRazef5HzMvfgHrkXXPCwb7egyk4XvCHwmqFVqCUo1ULjZmi4wxFjiftbQywvi5vPyFE2",
  "key23": "3BFJi1yRetCDVNqAAZQdMrCdExFLDF54KvNQWArbnpzypKYPdSAR1DsgvzC82thTB4RQQhPrfVR8qyBL4ywJtMvN",
  "key24": "38o4CKYHuSoKvAv38PWjRQSeiXNfkML6VttpxWdTg2WVaMZrjbeNTP4psCpBKqJAJoPRiCkAEWg4BDBhSgWoQur4",
  "key25": "5Z6dLCUk2fAvUYwrhT15BxabhmKjqaGyr2PvMTfxu6ArkRx1dwoY8ABtJrong6JSN4yons5hFHG3pWYhURzWHDMV",
  "key26": "5ftvnVJk7rscoYQ589QQKGyLTiK8PZvNMYxQ2XDZvZrKzzw5GHZqVqUzvtDN4uNAZMQ5a6MpHtHjCk6sLXoxLF3V",
  "key27": "4VUa2SaEPsFovRTzLWCgu3MgmiNhkTcJLrJHwv3Ejc5xggYmddmbRYo3dXBkPVNRLG3SBuPP5tPkTD2wSw4BPC4f",
  "key28": "37WityKpz3Gzck4Q9PgxNDRGES7CvznUmoHTCQRK3yEU6qNNSXUafcGm4Ghx6yeMhSjhqYV7EttSCSbf3GKGUhoj",
  "key29": "4DNXKQ1G1yzfudxt5SDTZ7cZV6i7iSxbU2nwFSUZqNe7CecpKP6wzsyCskwVeNxQJos1izkAY9Ucsm45tcehQNwd",
  "key30": "dZDbYigbkLALGpoTKTgwrR8CZu2eQKtDKytMkaqLKJPNDLoEtrzRv7nmeBaDr1aU2FtTaapygziJZZFJwG6erKF",
  "key31": "2YXiwdJmMLzXY3xod7QsHoAofi1Vm7K37LzbSkQfXcVSqGdbUzADvzzCSHnSP3CHrhA9TTmNqzMv3jP6sbwvyNLr",
  "key32": "2JwSJHrYGmJrQ2eRfHoraihoNH2qrUxjMaRzntrp68kLQR77KEj7GX3wjfLz7dD3beeQaXmqFSNwJNqGz4S7FRm6",
  "key33": "5H4CWvWLz2ok1PR1gnYpbVRvgtv3Bh7WFY5FYD6H59yQgBUgDUqWkQqEcTLMMnpcwjj9ijpk9gPF9kW9PadYZyKF",
  "key34": "4M3uZZ52bVahRP38RSiGhYDrKn1i2my1y9CkC6zknA9ptzxaFaUBKBfa2iRsADfHBbGLbTiGMvyVbqeXmTvf5y3s",
  "key35": "3bytu6WpRkB4M3JqQ28RYnmGgBRJuBNzdgkkdZ2EnG7F4GgVcCW2yVNJXGRpVoyYz9pktxjbxpwKkx2zpf3kUkHf",
  "key36": "2QntegJ7KVTL91WKZHuo7nqPwj4cugWpkqBXWHeJXKJbc1NTcPmAHsmnTZ1ZU451FFrn1pSVJXa9wsSdp9iRjYes",
  "key37": "3hxkqafgfMCm1i22JMxZdPeanUULKsaYsRE4j2xrtwGYPwGyV5r3oUyuSGdG1DRamRcjaUwjkVqCWBaSLAcqsHHo",
  "key38": "5rYawZmpcJQhLJubpVjcMo4vZtS8RherbivKy28DbA4nNV9MnqZJhf1Hg9VTKGsQtc4aF5d5sBn7pAnr8d27giLj",
  "key39": "34nrNBPeenyhLCsYxRFQzN7nWaj41YxKWTSc1wcF1ymXy9NKymxPGXpYTjUjEADYjT5xkh83H6WdLhbgHgqZngca",
  "key40": "4NubyPGA7bZjFRDtqyBUVjx1qrf1N8GXB9NVFiSPBLzve3eDfGZ8NPi3chU8k36W9CwSBiXXd4KTqkJR9hNCbydi",
  "key41": "3HkA4D28FaS6HkpvggHzyBtTXh3KR42jtAkq4tpKaVoDLVEwgUz8x9d1AZZm2B183DMVJuPRSYWF1zRm4YBjyLmP",
  "key42": "4j7oUC98sw1soxr5FkG9UQJ7ShPveM4mB2dVfwVHgBZxKNDiDTtarpgwGkiXSza6nSuLKihsH13CqMj3oueCLCKF",
  "key43": "4fU6KcLuLAWzeQJL2u9qwtyQhQKh3P8qo64Y6wFArxfuVP9VDeRJZVm59FvGJwNs3hkrHCMvX9LdM4Y4nfv65Rtu",
  "key44": "5yAcqyFdjZUEUKzxqvB645k1dy1LPgdBpdqs9oYyR8urdRVCkebsyieKhcFrnbs2V5F4JS3dK5NZgSTjrPCv2LX7",
  "key45": "4StnMBrF7ersLSQYwHvvtSvwknDUpGMBhMxoz7t6vA1ZqbZxWnhmJtsKpiu2CdUoreSVF3zYrfW61m62asnL6dbe",
  "key46": "4G6MGy133sZJwx81Kf5tfECY4736S6okC2qxnzBBAa8kdvvKMGKQ5Nw4TCoSQCxgCFBr3cmNipA4KM2zpJ9rnPRB"
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
