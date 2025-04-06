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
    "5bRj8Xmimw6JucmcgSe3kWt9QP46tvRJLCtGbd6YsvW5NU6tkjmxTfPXt87rdjV5uJFZRWrpNpNBBMfdA6FtQSJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c44za7BVKzv4mgBH1MpXK6oLiotpRnSxCqf14zP1mUqQAMBr2gGaKcDfDXK4jjvbebz1eWQwbFb6wTc4mSSaA7b",
  "key1": "5dgFViAsoqbHz1XtmpPjrmw9pG9bDhGX2v4vRekmLwPqisF4FQikdatmYs3XFFQkLkxZMwxqcAysm3g7QAYP1QGa",
  "key2": "3CBJ8R21BLkyiohi9WA4PTzeqCTXbmfoLRzFWtUjnuNtRiQLywNgR34E7ckCiqS9xHJPHeVXPdSiNSDKxjwJK4rf",
  "key3": "3Rav397J73oSr7yvRiJcwKkoU5xyiwZUTJtGhisQ6k1JVaP7oECDuEDjrxwKf4GLBM5ejKNRScxEKXpchaQwvLpg",
  "key4": "Reo5ChS7i6DAcUQdWjQujZMgsrDzorCa1biTsCvN1we3ApJTPqRTfwuxcd3tUsdeno7ifGtzwt6k6FipwZckfdH",
  "key5": "3seErZurAX9TrYDU9pirZoEGiD7TCfBB4VLL2dXcjqmUVsn4nmkxCGt9rmcZsW1zi7Nc6mp5CbRmDATcdKdE6C87",
  "key6": "3rhbAJXFaE2wQnKqsTP6Uncabid2F7oe6fzQvXNXZoKHgUsKXTSEoGSCDSsnfgMtqiYBw2ZUZqWQi5h2hnuXVzGd",
  "key7": "5KXdKeZfL23L7jjZoUx9kDDLCtmhUGUW6ys7kSmun9hGjvdSGvB7C7wkb6hyABhDMrux1nvx87qE8gRAFaa4kQnm",
  "key8": "4uZuDCAbotdhbzqxhkxJC1PCG85MKnzyQ8Bqh7wjbv2rXjVL1VbzEh4yad9w6NHFCTbYeZvzkFLS6yZaVUXHdoQ6",
  "key9": "2BgsFF4pRurXwX1wtk8YUt9BM5V4BLEDbcciqyUsfQh86y9P3zAv3vCsyEFwqNRhsvyFSWSDqW2PwZsufwBswRLN",
  "key10": "48X7iNtYETejmTcKVwMNyvPDjbJNcbpvCEFJThoNqzQVtnZ3oX1DtpcN4m59QyqzvwBABtKdX4EBoW5GSN85Azpc",
  "key11": "4MQLfxYgjznnZ67k8LENsMsmit3oZmAwKz9uNyhDSkhWz2KVRKzmRaWshzDQh5RiFJnP62Mc7PDPhUESPjAijwu",
  "key12": "ECxSE4rg742NmnHkvdvV2pzCf9eor7kP6d8QigFWV4mLZaWw54mxPHSvQ8dqsuXZD1UbMLMMUec9LqxcHDYmJXE",
  "key13": "2dAzGk7hvtqx1t6PFYDg1edSceNGa3crEZxjE3ZHDAZCaq3Usiuq3AzzpA4LxLzAexf7ENyvQJSagxx5RxEB8fVd",
  "key14": "4N8sX6veP7DPvu38CZSskf5Xo3mYtLiyVxS4E2spGYWUKHFiAKtLFqpn9eW1uKaRtpUFeeGr4be3Fhp9m8UZ4M7P",
  "key15": "YhCqDCAEe5Hhiv9JHKxcxgDEPGaBa1n4jVR5RRpjtCxLm9NM6sTLaPF3QHWnoZiwAzd9CUg4wVU14HfiKrFxFRp",
  "key16": "4rXycVXTCGBLwpjGRpZtA2qDpEFpBCU9vXfB9aNdS6VVQnYG2oYJt2GUp3i9n7bTsB9C3AYsE3Mav8ZGZd7t8tbN",
  "key17": "SVNk8463FvwVYfwsaFxnrcSqVea2yMFexHL1HgxxBzCFSdXmCFyHiJr64HpaMiCNHK9yBaTDwoZtxyrpqFSJJ1K",
  "key18": "2rFtw7JjPahzfQTSbrvMUfDc2FXQr2rcWka4zaJeRRHosXQYG1UQTTq73FX5PZ5z2rwAwA97mRiZgNeQikpNtUgy",
  "key19": "5ZcovHwhVPHdFbnZCzwSzvzAtPDKBJMvQGQc7i4V2tFHbrNPLtTpN5uuME2ceRWP36MaTGGMqZxiFXFYVsFDNhUa",
  "key20": "4MxEr21RY6bz5hxiAf5Kidg7nNXTFCRjyRVBbmHE5wRkPpByfWc2UTZvpATrcoWYsRSyCpr4R8ud5H5C2qAA8wJR",
  "key21": "2DgEfMo6FDazxBSJQZXeocaGeq48KSfwzisCqCKFp2FzhDbENekSbFFBX3CNPcahPzv3WTyzbBtQ4F5MQCJLeVyU",
  "key22": "AgYoJB9jSigEXMwQkxBAe4pdcctKaseLBcSVo9J3ifyX8zWyX4ZKHK9YXhavv6RuqqWEpfjD1bKb7PqL1cSTtsm",
  "key23": "5Y8MhDiC9bMcAz5pVz4DXM4aJCAzNL5aaefscAC5wtbcM6NZgrqtH6hGDUeU6goPeFsWW2FAH2XNamTdE1G78UE1",
  "key24": "bG6J13omTDQJZxDcQjg9dkBxYeJ4ELEPHxSwcRj4759FshPMAiuFMrrLByryfLLb58bNzaeiYKvMo4LBr9MjX5g",
  "key25": "2gXC4ufJ71U4QdWrg36ErnbNMQkhCPRg7fNM1FPVB8US6uiujFeAFQehTZY6kPFK1VjLtwZp8e9cfV6g8CrhbPjN",
  "key26": "3DtcreTKGudACA5CpiNZD77YNkLEBpL9Gg9Xaovrgc4qRLAaLiWD2RTJ3udm27TJkouTA5WgXouVpbgWDZTJEeTh",
  "key27": "4E9qAJiYhL38W411gxfq4g399Q6dfWyotjz3pdPW68VMHb7yuBShQamSDnoLZGbGmXvYjHRasUUskpsf91KS8gRZ",
  "key28": "5SLrQKmqQm9j4EQsnzjDJ7Hxze5zXZiM7gbFoJarcHMtcqKjrjvczoyhkbnGP4Vi27C4a7hkwEPQbsR16UfEMXGB",
  "key29": "5tFFC5gcCg7g5YnPXUdT8JqopZh99QfHButSqpTb877T4to6Bn6AZwG38jAtzZdf3ZmxbnXbaYLvDe71TcRjjocS",
  "key30": "3ygL4zfBrCaWWv46cZG4q71FfQ4JMQ8Nv4CxK72CW7FR6H7gTJWZj673tzbwCPPWFx1LgxiXc6LxLvwYJ3TBQjJG",
  "key31": "36ppVyF6FZi7BenBTsnBVMktFedUzkaCJTM5PDaWiVunhrroQeb9txVawyr7oFasi6bAnPfJc1gjxj3csiEMb8mB",
  "key32": "4cs8v4DqD14FoaFPPhEgi3y2PpP3uxL91rUqurWgJ4Hiy5ixdv8T1RpoTnXNg5XqpBHx66sT3mFUmgXkMUuHejsW",
  "key33": "hP1sF52sWUXRpL5CGpGYx42mhgQPTS64gxHmyZzLRAXgd1YDDbBTGQF13ABDb2aBjZbzWzfGvMRTrG9m3aBcv8V",
  "key34": "Uu1axjGWBs8zLR1E1Qiwiw1WvEfoqVhaSjXTdtjC2Z2wZAQMHH4e1XsRPeXdxe7JPmnGSZ4AoRw8qrwe8RAsVCT",
  "key35": "2f7hZDV2DmAXQbifnv8XCmECQSdm56GPUYLcRCQNtHXjKPEHV11d3rgfN7BCE7jRrBPPLAxbJ8ToiJFQuxZUbrUs",
  "key36": "2qT7EM5SuVoL5pf9dGhxpZ9hiHMF9Shc5K812QmL22g4BRjPMapTzmKtDD4cew59NTjpsSeXrrvyw2c5uvW5TTQU",
  "key37": "5ZY7WvwGWShsgRAhfnnzcmvPwwUkssHfTB9cBSuPxsvFeYGRRahp3E6AttLNvEA4GkBnoFFjxAHYMHRs6xMQMN4h",
  "key38": "4M27vXCma3XiTKsM3iCYUYvB385pxbMfYi5WExMpJUnHQiycEj3RQhHXN6bavmKRTX7Cvy3FVFcxbBHFuMkD6dF3"
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
