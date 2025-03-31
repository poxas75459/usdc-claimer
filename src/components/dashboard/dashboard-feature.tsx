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
    "H9aWRCdunc2v3wD7oXVT5BbYzh3YF8pQuGZfxM6ptBvpkX34AC9aRGCee1LwFieNd6ALo8CsQT6ysEb1RJBR8PC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwuHuH2Q2e45q8Ab8FyyfRGTaSfJy6JP9GoJ4LVpcXJ1FWHZST4ZJg4Dm7tQG8Tk1WVgnKN9THkHmKi7bUThXJP",
  "key1": "5dtp1wLwefCGfaQRMcxCo9JMYkh5Px87P9d2KGmpSzvdmQEkcc8XZLdxid5mmHqCr3Hg9PknbbkhavSi4HEBVnrP",
  "key2": "4f4wVZ5BbN63xg44Qg5jfcs7TYjXkYfBmqEu4qVEtDVroM2bo8mJKKLaqKTxdQyixpzE3cauUjZBF8BnXE7Hvit8",
  "key3": "2ksZNus7ajvk9QJ8ecrACHjmUAbJ36GGT1eaPUQ9Nfm4h1cgBNNayjkx3Vi9r4z2jc3fZooBzCgeQdfxKZS2xw3u",
  "key4": "5dyLF9kCKr8jcTQvuVCW9xRjwX8KN7wHQUTiKPXmEBFYTG5vdi8yFFUCWRfFExkxP7ma8HyvmiHgwom9XQdRDX9W",
  "key5": "4dKRM5VQEDfLvaCTYFN1v1srKvHnLGGNRNiNrNeUBUCYtFh16owM6abTNS9TARn4M3Pp9zgUmscM1qb2Cy5bxBGB",
  "key6": "2edgWoiHZEXtAreEPgPJX4TutH8PtQyhhDEwa62LCLixFtSA4Leg9Y5H65mFthqGn98PCX8wB2iNZ8zV9xG2mjyE",
  "key7": "635XtwUK1Jb6vPheWYfqinvfaQa4S5mxdYwZAFoRrUrysgz6g4totP39As3aRRbQosRPmnQPayGdezoYT16Xo5y9",
  "key8": "348RG98qD1kqqwYitTMUfDAAsxZkVbr8RcrNHrMoLc1iSAAwkzSgcqayAZR1VFEL7EB7kMaHnKNUqfg7sLont8Jn",
  "key9": "hR5E4X55EKdGpJjpWexECcGqkwpesASLeqiasBn5XjMtLxuQnVLcLyomA3P14K1h1DDx3LM2rc2QN1zdBoK34b4",
  "key10": "AhmmbXXwnSqCzP36sTvvaHMjXTqYh2Fod8RssgPnC6vX1vuYPhkabwPeDWRerV27kNUfF5jdgzeZUpU6VSLcXk2",
  "key11": "d5UEUF34UnVwpXmi2WFEcjLNJNNyKJRWhy2cAMQmThj9ZUmxKDe7U3EpikJ6jHuYCSmAB4GfdXyS4QnmjLBWD8r",
  "key12": "33QQpwg1gPow8ghAeemzaHsEx661xDarkbFPaUng4ThoWX6N1MLUrosQKDca7VX5FfhGYpy6qwhvEFPqxyWnmuQA",
  "key13": "3UAhbBCrxj368MSyBYgc92nY8nnbEYKPPZCn2c5Kpu1jJ7pAdGqNNR8BHo8Fp2edbwVdHEL3SbcdR7JoURbT1vAA",
  "key14": "YLZWfhUNA6nmmKMfCSLy6TUsvGye4yXusqCNnqnHVJn9KnFhr1jUxg34sRAzfh535uRG71MFwpWWLmA4R3pzAFx",
  "key15": "3T6pQYAV2Mpu8dswqdupD8XbbCwYShf1GM3mpim11xKf149AXD8fGr52gFGaCJgwAbbfE6E9VC4HtDVEUhq6JySa",
  "key16": "2vBH9h2my1DuAdwxNHcrvbmzpaGzn6RL66JiJ7nNR3u5gbPzqLurgRnkpz6YAu7yM5eT3SUWmE3KifhDA7rrn3Lr",
  "key17": "3uP3RzqwQqfx4AnEzuyKvnZkYk9YC1UCpMHofPh5eFPRG6QJQPNTivh9ZLKpxHRxMWEdxDWSEsrJvdLFvNxqaJBo",
  "key18": "TQ3FKLMnUQuZya1Ng3c38JuxDT6Uh4koCWNfdhGPdijBHv7is1RVA2HMJgGtvo3tP7SZLi55g1N5Bkb6oy9hW57",
  "key19": "5FF9qTQKKw4Hzrq9FejiDX1uarEGpjLiiCujgYEqLWqkAaC5tCDXTbojjaZM9tDhbv9TV7yw7itfcn5ZdugPFrCT",
  "key20": "4LMBfHXVKhD8ZLmYQ31Sjj2BoLNVcL7QTt2M8Mk9Nq21dq5L1eyDUAWYBXCArQAr919wPjnyhLMLRzkiAMnKmfkn",
  "key21": "qy6zEmXEuwdPzRs8U6pDX7MbtFqgQtzSVhr9eNkMqCHPRYFiztUFwes26DASzBjkAJtWGcAVjfB8YGZeuCjYZf5",
  "key22": "2qxWN5SePC5Tj6dtWbeWQvf3WzcHmsZmMeP8pXdmkBNfqWEcVCQS44bz2m4KsPZmfvhkdWdzuWZ4FHmNJrw3AuUA",
  "key23": "3ePzkQDYYszbxXSoAzQjgQm85p2fL2dVAWeYneUymPVrNyngzcxZgYdYTuSktYmyoXrz9sDPMRLm1pSouRCZhgVH",
  "key24": "5ztvwR1LxbBGanMpPeCJtsPNoMYzga4rcXx7VsBptMWsmBCaJ9ZdMakMaFrVXeWNu9KKkEQRkuEq82QqifufFGCY",
  "key25": "48NwHprbiLqGYLr6uxK9FQZ7duP1rTMz6FudasWXNSQcu91nWHa8nkicYBtmWuqQWzjNryzKcH6QthbnLG9D9rHz",
  "key26": "2KmjgC3TmbKvgKQzH6ZqtcdARVu3EwoNVAcdV3aPW3a3YX6CXuhWj4v2CUMrFQs6R67vmwP8Ntz22W9tjYeYnp1x",
  "key27": "42W4fWU6MTeSE87DCD8meGuyywnjKMLTaq8stqHG6cYerxwPNfZTqje5g3ne6KbFbj5hdNvjYiYxz6ToRUhWYEx",
  "key28": "25ZLVAyuJNLhbYLMzouQs7cNWgnFc7KW1LCckzvPV4GE9ND5GsSRf8Bxg9QVzVnFKMhuTRhdzSFr4jXY8dy84mi9",
  "key29": "2nG33scsu542tvooaBT56hkfWovCfGBYmauZjm3TNr1vBcUtFZ73g9GHduXcYWXZ2xEHEksSeyWcou7wRxd44q1u",
  "key30": "2CxZ6SyZiAKPEM6i65unJq1XmroSpQLQGT1ecyYHAG4DP7JhrTQiDReYT5a6yC6bncodMDpHezUpQvAWKaqTk9qx",
  "key31": "LCLAzY5nrqEBMpEqkEZUwpAv4SXzY57Z7mFY1AyckhqqmZjL2UdjEooWS7BxBH69Lpw7tukineQAjghdufqjoVq",
  "key32": "4ifVkwPC4u4NtCrpH7ruStGgPyWEsjv4UWH5ioXxWY8mSp6YAK59DrYaEAxsZ6cibaRFgKaBbywpEhScPHvpQuu",
  "key33": "jhQtfaqn31F6Y4tsYohvcfmCy5zeF3u29biE5S3RSCDWe6CxabuS8j2U9oZmYUdzo5g74DpGusxrLdAamGiAwJm",
  "key34": "3LdMoyHZaeJoxhkdynnbSGFRxPauHLQ6KGxptam1H2DtQLJ5bq7woR1uNARnPYwbCqcydfYxgzv3pRjVQpk52wid",
  "key35": "4ouRzxSDqympjN7m7McDQ6QNt4kTxoRQh8aDcTbk5NmyMw8GCGtAvgriq4gG8KHcVyVmEAGvW1QayzsE3cUgQe9B",
  "key36": "4K5y1ekxqGsd35JEz4QZVCMi7yv182X6HQ6ZtFrga1kuRCk8cEuFPqCuULqxYc7REgyH8Bt7HJh391pumT4K6UL7",
  "key37": "42X575KjTGeU1xaKsheS5hk8UABJKF8F1WiFrDSaBXDLT8LbX7grAs2SAVc9cZbY3giByY4f8j2nHKSix8h1BAQM",
  "key38": "2vkdzAkcNJZcM392FzWeJrZVCeg2pNpVDjfQWvhi2ZcXgSjuN6j1r1qzed5iteJPToCeCqBHVEbE5r4b31NDqP9W",
  "key39": "42KUSbsr26bj71hB1uS7WoeEo7A8yg7YVkGVaStGj7Lrt4YdezMinpPNDZ88C6Gk8WJyZDYHichBTvUKwMdM45EU",
  "key40": "5xwWZ1MSMoxnofsMtXQCJKQLRP8U3mrMLjT2gdWDUSzM6uQgPfEcCzmRfAXgyd613CuWiCEBLgj9ppM9Do5e2Nxk",
  "key41": "3idJQXzER628THjR7stZ61Uoki2KYMKsEkMcQsuYMamJtgRBx7VkcxUydgupRgTPFRW4XL3PZxSKZ5xGNSxS438V",
  "key42": "3ckR7ZKrVopioXbCxVkFQoomPtfJoiionbejxbWGM2JqAmc7LnufeCdumWnYsSNdbbDU8hq4WpBvd3r67LmrufT7",
  "key43": "3zwma8pi5WFS2sJtqPP2mnoxoPk1jnuof4sw6b42UgMwoSJ6DeTNXStWrkszhZeoW68jxc7JNoZSEzYwuroiGLqv"
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
