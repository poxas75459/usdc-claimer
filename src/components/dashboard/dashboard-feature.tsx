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
    "29xkuNR8BfKYBqy6A9ws64UEqK73B5BbSvyq9wFHbQh6F9W3abswrb4EwBidSzN1Ekkig7cBYMJ6dzHxtXpcQQxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wsSH7Nf5LM6aB6RUMw3k7rqDvygYTpwDRY5bTcWNXUy1Jq1nZGxohzi6Q1ShBZd9A1ci57ifYzvwQFFdZAd6td3",
  "key1": "5XGuNvbKKUhVxZDx7P7r3UQkN4EVCyxnFYZr5Li2FgMigCBMuTgBLHrhfWCGqjekApjoLDtPhHw9KqMK6EKo76uN",
  "key2": "3VA6eLtW9da8NBNR6vGGVAmURYkJDhvtwpn8CigNkBDqxsJGxTcLEFyM6nkKPLoq3R2FLzpJGCDTjn1Pp5uPm7v1",
  "key3": "aXc5WfHEbixGiF1uAKooQy4P46zkp3u52BzwMJmLEuK3ju5ino8jb8QDdRfLcNv941gdcpgddd8F3yWEas17yGW",
  "key4": "V1t9d25hKpS8MxC6CDZfBszT2Fkj2G2SYYdVoNqFhEcCDXamv64yDtX14zRwjHBLtD83ZbEVpEEUxd7ZeuLZ1hJ",
  "key5": "5S1ZJXWAw9VXb1S2F1YzR2DV149VfHdT47HXd7iy5Y8tFJamC5RG2dWZ4yJmBptL1eaLzmXSMmwQKFxwJydJGmgC",
  "key6": "4dfJNFUSasydSPcSKNmtfaCTfFwo7ZZrrK9gXfYtA6jS9ycQkTDg6aHk14Q7AyWUHbBpqZej4EfVUPpEHsVMmJsv",
  "key7": "BwKeQUEBZAiTbj1H2mQ7U63A3yroAtMzebqmXwTuW5UVLXRphgnmPxuig1nzJvssu8XvihqoTeGxFwT99LL8Eou",
  "key8": "5pt4LSxVgzncU1qhb4J1WbQisFffQ4RMP8DavE15PAZYQuG6zu1K9FyyfrHmwjd18JJ6K3MzjiXHRcQqCqT75j1Y",
  "key9": "5EWdJY6VmeP7DcZg41pmoE6u1uEmF9GM3yAMBEWRZxYxZ3RoMJAPJnfKDTcAXgMQtrFEnwYQBedhyriuGT2LtbV8",
  "key10": "3P5VRpm2kL5d4u97DdrzGGQgui9xDwi61FiXf9uA7tbPnbY7FedZE6vKMSr7d5zRKSXcjaWdT76gQVArYNmSNUAH",
  "key11": "4xmQNJb1bAUkmuSXui2u4rNboaimAriHL2sbktDqzAr9WqPxArLu3fkFB4NScwCjtXfgXzDHwQ6MCMB1wGwjTvRJ",
  "key12": "4WS1bH6mASTMjG4JBfvMNiBvb7roxuRFCKc1rtss79FrJvaMUNiEjLNfpGp626rquekHWAGdzQPMTmJJ2htuFpUR",
  "key13": "3mhbLPvDZq7p8zsEsu5CQkEuPevaz7t3G7zji35nrF35ygryYm8cwWayBYbyefPgWzycicwJSnUnNYXE58BFbjaV",
  "key14": "5bFn5XmW6JN7iWWuVA49DnY7KYnJz49CvvQTvau79djeiBF3EBFAxifHBwEUg4AtMCZ7Ze9TEp2rCs4aSBxxNBn4",
  "key15": "5MQxb2uP4CA6wXJFH9zV4hyBwrfNvnCYZypQoSTAAVpkx4dNWC21UskQgpMRzn71KxN5Q22Tdy2WAw7b34ptcFTG",
  "key16": "49KiVRiERQWFzk2D89k3dCMjjdZtEQaP2UC5EEfG9vCSnoie4xYPFpAUoAqjYiAtD2u6JjDpxc45xGEaVPTMPs2N",
  "key17": "3r3zEGoHMs2AvYRCJwW8vs25aTtxbmUZY4t7gcUtzwwbaRjY6aqxDTsEay2TxuZb3BxCiFKLJNRYZvGr3nNbLPKs",
  "key18": "3hNkiGmP1CbQurfzdd9rnRnca5qbMH68jiUaXQtbRxrZcDffaoJUtFBWMQT8oFJ96F538wDK3Z9frzZLYKy3tM5j",
  "key19": "5prjurm6n3iENPfzNyfiqNhYfSiudpRR2XSD3YfnsFEPDS153wgPH6wsvctQEXNidjf4qUHEFeVEzLp7F6odJhrt",
  "key20": "5aWFMMBmfH42qS2y7vFrdTdNt9bFLtfGCVo5LVkvC9GqEfVUcDi3qYqZhMcSPtBHAzhmSj8n5Ds9AJrLuVyEbUd1",
  "key21": "3jsjeVsmtsgDbTUqq3aYQ8k5igcbbUNPadqkzfLRXmKsNLfkXvRgjgZAQBnRNDwTqog3fJC9aCabCqNw864hmHcx",
  "key22": "5io9Ak49JZRM9ptMoMTjSCvaZh5aPpGoFUaVdCAjKiJBgo8jTBnrvTvSakYhVC5yXtxXi2EPjmvsofLEuEZ2uTqa",
  "key23": "5H6ZMWsXNc2jUfDXAx147xpH7G76NYQ2Q3CDxZd89CE6VFL5czGH63brUVRqf9SSYu4v6L7xE7RXR74k8Azxha2E",
  "key24": "um65oD4ibGEBnzJM9okwREeQg8FRRG7jT4bqYLbPfVp8dAWWtz3M1d3aetnwqwWzx6YY6aP7toRuHyFUCe2D6eq",
  "key25": "5ibX7MZX5Wks9J3iFhrztc7dAeEVb3765iHjbimp1qt9BvA7Zg3BWdoPe1cKmv2jsDN89pKBG3hCMGRkXMVaye16",
  "key26": "2nRAxUeA4yngvUCXPNiziC3ovAi8ZmKaubbdetUBugkLELHp1VGXahcTPEtzkG19yBSvxpRr883PKYpPUqA7NnXm",
  "key27": "5Dk3FMjJGnCUn7RhDdq8pUGJnWcD2Fd3PmRYMwQMfSrWq1P4pSPtLkQ9FgKdCAoMbAx9N19BXXT87tbxmpMcPwgJ",
  "key28": "2wuCvMdoU2YsBPgkAzfZcWnt7n4ojAxxuMfCrcYtBkpwCXZ2roJCYDzkJZNiXf79nC9cDgvNkTpFvWjNnRc2gNrx",
  "key29": "66RKqYMY8a5saZfkeRcztax7EvvyTNEk5jMUpqj6V481EYnTzDJJNpDjpkfuwzJebYmP8K1JmJafgq4CSisEEJi8",
  "key30": "MbvgvhzsBHjU7eTtJVCd2tu7dxaW4tV1pkXcGtNzzwo3EPaPF5CkMBzNb5NCPg93uHnxBCnc2sStC4T5nsTyWzN",
  "key31": "kmRk52uxdBnM4K4Uwtp2LvKBJ2Nv3YtJcYaPHb9V9HmJqY9SQo2swknZvirCV9mpD9ipAe41ccByQjWocSLkb9g",
  "key32": "3FZkXVmM2seFPtYvSU2TRKi2RZHfTeTSg45gYDf11Rzd1qMsjX31pyYXnEf3YWZow3r6Kp6cEdyodFtrzzStJ86r",
  "key33": "2Q4pmiwz4DHwEWu9phexKCgdCG953PkHW63NV5cSPfKBREJJsEkfsGt3resYKv2ow7oTAqsFmtHPWsmwkCNh6TcG",
  "key34": "2trwwQ8L75yXBjgh85DKwJxALg1PfHgJka6oxxMPTqJUDy8eycBHyXqCuSFgAoYNwomFpYtw594izNgxvgwwMZLF",
  "key35": "VtX2zpBcWVnE7CPyFmRpbpQB38dTuJM3C2vt13fBygUG9NG8e84VvpkfTEr5x5Dsd4p1f2kKhERxRVQRBgnLEbu",
  "key36": "4zoemDmuMp53YazRp8KTwyGuTNHRtUCoVaizkiLHDZWXnXQo8ehVLYauNaGyDZ43AeY87N6NXTmEeD9pXu3fYsjn",
  "key37": "Yxwy6seUZz1C3KtAdiE8UxgpTG9pa6HPW4YzLgdNsvQRQxg4ynLXFTMPzbXsstK2SUMZnSrURp7w6XPXVC2Bu74"
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
