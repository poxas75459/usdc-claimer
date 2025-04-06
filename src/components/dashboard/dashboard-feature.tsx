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
    "3nkQdGA3w7PY7TwM9XxfQsuRTRSPQmos9tB8qtzmqtRND4qZJx6xHg8cDw6Xe5EwDyP9hMmMnvaW9RPrzy1gPaxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VeFgt96yXKdWMf74cTjfSvHwt4wVmU3TQoM39PBReynQQWSY8WX6pvQWkGMTLtytE1KzKjKA68Qv9KD7YnFa2zx",
  "key1": "62QXHkB7XdaP5u5KLErdFKDWsMcfFrh93cD2kvi6udkiQdgxhtpE5LVs2xH8CodSdSmhrW9u9UpjqHPVctbRVfsE",
  "key2": "4f6H4TvzcSa2q6BNZnFpXvDQ1znCLPXBdGqLZU3jNSJ5gsKgjAhMgiEqjD8kXhd7AwyicwD1HBceHiZpRXTi77hq",
  "key3": "4pjGtJtvYAromvAFqryXfPqY9y69r3P2Rj8c62ud2obsooELXdGmi7F69RNnjbQ7VrXHvqyR3VZjvMRHaiEiw6Pe",
  "key4": "4vS8CMG3s3K9DTtf9zMhDxq7kr4UnLmqx3ugAekoeDb8omy6kPisg6YcrxtMBU4EDUMGPxAAdrZG6LTE8oaWy4Vd",
  "key5": "3GQ6KGMXciC3rQ7owa5HSuxwq1yck4qj7du4i49fUTVuUsKGcx2mjpoN7BgMMvxtWTpQHeUpCb4Y79o67Uh4PaXu",
  "key6": "1b19pAkT9HCv7jmgp7QcjgnfZQ9TBSsuTLgr6uogxTYHpxWTgbYTP8rcNHY99RHue2ZxhTXfmEGzFjkTqbnfVJk",
  "key7": "3HKW9qkT6LKT6BiUY5aauNwWtYfgukehDEghfsxLCpaaQoGmH9q6jwPKfPTs53ThrANQ91cy6XGbRkJ8mZSg7LGL",
  "key8": "2DUgr3XQ8wUxoH6BKmNjPMiSP5M9Jbixy5Bqyva9jiUAKgspa7CqGGHqjArhPeWJGzGe91bcDCzuSaSvdnZJ15YJ",
  "key9": "2kUe9CkKfqY7xMe3h3DnGnHC5iqcXMYqWRE65dDkqyQbaExqcgKzDDGNk1JnYQDWAD496rVhQuTFEYyxMuuYqpNN",
  "key10": "bxaCyyRWLShiqC8GKY3dKFP1xVQy7tkEGrpFF8JgwnbyFfuSfBPE5CTPyUgmonMUJpPYTB5FDXNKFR6nAXtMUPc",
  "key11": "2c39jhJ2nrevh381LYrxEgsZyjq3Hzpn7ukvSqKnuKAVkgDw8t1SjJjfT7xDboyFivXRuHpEohurR68cuRuKVqXq",
  "key12": "4hDjnTukT6PMsX1z8AbDHRtum56htEREMRrK2Xw9Y3DadwF9UcJKEMtf882otSeWGwuDwS18dKsBz37jf4ophHye",
  "key13": "4LuKqXcsXDG6TKimwLbzpmaDcZ4U74sYeda8dHfTvpu4jWrMTWsH9x8JdPzXiQ4G6JHkHHWcuhpLDKBd47QC22nT",
  "key14": "2Yokr4s9nBKTBrwQKCxU1XN8mM1CiuFLSjPhbLgCG4y2aiozLjmDiPSnuLypGzarCtpy96emqFL9nbQXjtUd1hpN",
  "key15": "3HK6Pvcgwo3MdDWj8TTWVgaHRQn1NVcwJAn566fuWvbQVCGPoKoqVJywfr35gekXGM7QFLBejDWbsapF4qEdM9Qi",
  "key16": "2zyTGzm2W13TasAPBPmyKffvXusY6RHKSstRkE6N2sZVEGSdShoJZ8tudBGYMfmaHepQaExP1W6RmrzErFuWZZiQ",
  "key17": "5VAJeQyjPCewWrg6CS671AwUt422DaJecZ6SpGg7w4TRX66iHhib4nRQa3yvJ19fc3xAczYE9azSf2UXibYMoSmT",
  "key18": "2Da2yYy2bvSpY9ncJBKMPnhjHKxgUxsuSwUMRhNDyEo2swKZ6aqYDn8ZSmzpj8B3jWP89zteFZf1TcK9oSDaxavS",
  "key19": "4NvU1a7FtcVPRyiL51hKTtQVBxQtBtBnpMoPdgXt51wDqgz2AaE3tVnrsiE4KefriXQ4LTHLXuFouU2RC3Vgxa8W",
  "key20": "3NqY46FXrp67EQSs1aVsTcyBBL5JdPaU3xEUfq7ru4DVAnVCYavNG5fz4jXWEAMcZ2wW4j6R8hYfRs5pVufQeFt5",
  "key21": "k5ADaVv4hvwF3MWa6wkNtcDTgL2wtkuu9LKZF65DR6JngRX5hSAhPaw9J6yi3q6qpeMeySLUeLPdoEWaaJdVVAz",
  "key22": "3fWZHMzERMzMESQWAQtLJjVv6Nm6ekEmGD5iebrorkRTdbtnVUbx3HPDFs1vwTzxQbipvKxCHjDSzFCTZcdkwHZn",
  "key23": "2phUFbSZk1VRTCPenqbBKR2wTrf9M9T4T1FSqNgDnLVaJmE8beQpiSQKebcNyf9dJWoBZUhmAupofDCtydVuNsX",
  "key24": "4tmRg37n5YRRbx6uLJxHmAynbCk4EWPvRu4q9NcCz5wAGJ5MXLDrCRXW96XVWPM3sY74hvsAbqPFTfuaEnR7Tqp3",
  "key25": "TiBYUBNQv7Uoc3hTMpgrX6cMVcVfrtjqkia87EtEzzDtr6gb8QwocgTng2VUyEvwzrzcoCK5WSonPVMkw3s8y3p",
  "key26": "4u6hYweVCzsMkm5J6P8pdza13YM5qhwyGvvZhoZQdDbBa2YAUae84vToF5Sm2TuvpHeM8ySpsA8LK7QMpbo1yeCp",
  "key27": "4xL5Ti6kbqPJV75AmD7oZRkbRz7j3vJzt7KCVrfvn4FqKjm8TiupTrWNLKqs2EJvnJHcgUdffK2v7vQdgHQDRbpD",
  "key28": "2kRQLECfUQS6q1smoZN3QZNziMBUMUd5DFLV83q9Mb5dqDckxvEuWF4b4NPX24WKXSmQ9mfr1ePemwenPH95TD7Q",
  "key29": "5nexYktTebFRtXm9cDzhhL8vvMEcdkSoCU5tRSFSt5rnWiwry65iXfXV2zeaJaD6bMiVC227wUmufSN6o4g5YGqu",
  "key30": "33dSEWRKjFTkmEf3v4hKdwEabnVbr5uSVeCELxy2K5oeitG7auLJq5F4HSYyjuyEZ9kJ8sDSGQf2uAd5LVDh847N",
  "key31": "2NPMWt3hn1JscbmLhwjpdW78Yyk8TjKpeTzPUVvo6Nn1bDTmFBzh3Ui5ufM4BLAiQYuuzMsGZL2SM59YVo4G9TGY",
  "key32": "29W4qZ3YYcN6xgH4mkdU6XTu9ezpYqgEV2fKmiACsjoct52viUkyKJw3j1y9rv7tTFiU7F9Pm3cWyKAHYAWJVmkU",
  "key33": "2DPRo96KTUvtWKKBUMDzCeyCYvCXgNGY5UPQt4rUPnMVJQcFiLy8YKgc8n7f5nZ75r2wTE8MDWg8rs99vUKJYAzY",
  "key34": "34rzY1YnBYMaBMTPQc44e1Vu4CX1BgqBb1S5T4DBdQLTVAqu7f47Cw8Fwt7qf2SLQKx8KK4g2MbecBxkrYhSBMiD",
  "key35": "2ynr1jp4tHGn1Yd7TF5h91fMcyMUzFSYV1ttQJv6kPujQ9BDqrVXLnPA8jN3uVRgE6UGkTSMFA3ZWD2AZwg3oacy",
  "key36": "2FzsgR5UNMVuMto7UFz7tM88dVLSzjcQzkVKSWFzhpZgNsZ5Swkq6qqH72W19GU4PrdyYvSN8yT6CBP4WMHQVJ2g",
  "key37": "3xcAgr7c5Bv5iZXoFt6BWTrPxWLfNnEMUtTF9DW9RtWWzCoangyoaPAiaPhbS9iytG39diAghTknXkr7DvaWC7G9",
  "key38": "2JAB31eGsjQxFowaZHCgnPbo9CKbvNASofpT8242Z6Csg9ThTGHdbdUWwNraAEER5QTiZCi8y29t4Xp83q1AFCk2",
  "key39": "tae4rUmiAjkZg3LP2dHk8yEK5B6BzGXRNjtS53bUnyqC2vF76UxjSFvzuVcxvXeUnum69e1xyxCsy39QDVYgTh6",
  "key40": "4x1UceiBnMxNutoEA5TD9DkjZ5UPuZCHFwPbB4Xy1EtidKdeRxFpuhbKoJbhmhgVCGu2JbRTVxAWwREyaBDFwruv",
  "key41": "3LHmaiuWJoSXkn2GH28rig7J4Jh6WrGvCcG6LXJk1pNsQaCrRJoQXgeajGVWpz3xxYWSedH5DzAz7Sz21W6nghAe",
  "key42": "52j58yftX81QHH58SVaR58XYWxex1qG5WoyGfdTKvuMsvTsQsUF1sFFAZQ13syL2AsnmtqXvJWoxY9U2m4rMBv2k",
  "key43": "4odF5SME5GtEKT3SSZByBSz3vds46GNFqMZdSzK7tqrk9AEzJS51NED4Pm2UnnLsrfXUCMeDxdK1mP72LbxDXDhf",
  "key44": "3N7MLhsD3sUkC7cYWz1hqMkeUvJbW3GCeCVVhGhspigTziT8PsQhgPioWgQtCrcVJAfrpW6TuWc47WJXAPc4Qho9"
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
