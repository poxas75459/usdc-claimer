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
    "3kphPHgEvEtrLwrFmhK65Ee9S7gmNm8gfG8aQaQddVtjPvPf5SZDQ5kosJEpRKN7MFcpaASmiWxCDDhUZucmo5bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cP2i1yueTTZjboffa9nZHhFyVLztEMcJobvPLNrHZEECW4VTWYX5S2odjcqLE1ErQUMD8hv6ECrsTVTJBPMJpgZ",
  "key1": "5uE2ydSQ8WxeUtAXaZLTDCUL27xfcngryLrZk7Hrkb9s34gNUyJBxtgc6Ee5JdJubjWQa8CEWbUUCKhLq3i5tyew",
  "key2": "58c8Qj2RdnCx38C25P2GkMHtsULpbse3M4rGtADG78afjqaFWdgusp6sksmJs3caz7ym7kj5UtPEjN3jCSp47Kn5",
  "key3": "4jMNyqzz3nv44oSD9bgDxgq2aVHwi95ECgfoeVQLYSL6rNvBUkyFAHQpgAstJarm2NQaLeo9q3Zjzuwc3EzssPYu",
  "key4": "3WJ5fTPH4c6acttqj1Df3qThuHbofvYFfVUFXPEyrW3UvEGhSj2PH5CmWcREGVz7iMBrHFJoJEeacoFE8zrtD9NH",
  "key5": "2xSkNgEcxfz2E6AnHFdTpDz6pVthUnTxALG2iNvZEHo2j7QkxQCBnPYTiYYo1AqXtT6ar73LkLznaJ2BYnEPcjGJ",
  "key6": "2hWZx22FZZHoBB778DH4cF3RxAWiJLNwmWgdMWWc9emtim7fy3SLZHBRdC43FZ8hTTdAv8oUoppmFt94TuPgQEn2",
  "key7": "44ZfY5bmYPxrczPbMjtRJ6AiW6nqusHiMtsfC9thqsnAP9kqeA9f1GbkpdnhiPVGgR37C5QfXnq1F6Mg6QbueFA2",
  "key8": "2eXoQz7vdVXfhtqJMpKDTVkBjEyToctHXDA4tNvH3MQZpJgJmR2xbuQexQwPEn3X8BjsQriYLzvpdBhKsM9FZYPd",
  "key9": "V2YGWMMFoJGLH6Bm3eGgVN9SVLPhhaP2Wuv6S1KmRiyLExf2M4FU8iTed73yyQdxxWb9MTBpdbqrRk5bRGGkHPh",
  "key10": "3soUPewJKFzX95p7g57F8LmZbm9tTsFeTU95jKha3MNQ9xa533jU4mp3Rh8cRwHhAkj2EHoLayrZcAraa3sYT1h7",
  "key11": "62MAohqRkan4Lwxg5Q7LKpPC6XCpuQfvQqAVwy4m4vDJToQXiJPf26QXktDSUZL4W8w93HoMY5bptvWw7wsru2mH",
  "key12": "3JufRWsRDGhqqyvgztqJ5p248MngKhsVRGr6Akuoev4VXFnTYtbvCNJ6Kdc5SxouRejcJwAVqy56j3L5EHjeSs8L",
  "key13": "4boded6dtF1NBkE5jZRbXHrD9mZq6HdYkpY8nhjLxYNyyVCq2pwXeUqhDrb2NirkjG27bocCQSZ3JmRHkSYb1U9f",
  "key14": "5ddeWGo2k4Qu4eLaHyBv9g2u3uUFDQFXFMy5B8Xu1mpGKpc7DUN2vUnkUak2x4qxxHrLqG5RLCkia2X7jReF62mV",
  "key15": "47vsqkQVXrn6PaU2VngNcFjHKobd5g1yYmJmavXwk395XKQv16imQb3wk7jZMbkKTquo5KNsRY5bawMfgrVQeUFi",
  "key16": "5qb67dHqtn6RBMkTx2u4yuvx19NpsMXiQ2NyDPFfCvXrq3DyUWwDVBQqWFHmv9fzs1dcJQ7cqb9uZn4cTy3mPzug",
  "key17": "4GNsEqjzfJbTgccyr4ykTvzLPBxjkzq99pE3unY5PEhMVUeUKWdzZge8eW3mmrwm6fHcUcqZPUna585vEkxYZgD5",
  "key18": "67AVRLAMjRduB4HMotka2y4od4FP7mwc2Nwb3DSz13sa5SPw4CkKS6xyefSS3rEZVdSC6fSvQdvHVyNjp5nBbNvm",
  "key19": "5cxjnmBQSfxGU5ScGk4dh2djswjQzD6HTcoGXHe55xSmzruZbthAHihvWmr83dJeUtJf4MKY4YM3uFCDggcF8hGs",
  "key20": "Fv55mQkSN5i99pwVBnNLC4CA1epRYWEebtsmjnSz4X2RMqC3UkTvAYQS3H3ejw59DWgpHwffLZ1Pz9N1rSioht3",
  "key21": "5FJq6YAiQYrcopTiikdQKpAu8gHTDHHpNx7y1Xdd8DN5e6qVRASxfAHUNsnAcVoLVaaKKnNLWG1xFwdNumLpo8MC",
  "key22": "2RVNZu6yT6ao7QE3RAtN4tjYqu4Xcs8Rk3guVSTuWQptTfnRWDtnCpHf3LugkvEQ3pWVjrD4zbHceean1abMHe8E",
  "key23": "2NNGwpgLqw7hWEU8k324SpQRK1JBRive16K1Vh1RsHFwcP7abuVPewvePwxGxiNrAsDGDERDmVjujLFA8rqqhHdb",
  "key24": "5a4gCiDFxxZzaKceKn4ivmkyU8AVKKhahD9uSVTiNrQXy6ypXQAeJGP76JdQTFRunigsQeKWCUig1Tcx8fFsMEru",
  "key25": "Lc52hbkCVqFPnSspAwutNkdeq9U22i6gpyTAPXmjR7LkZBVUyCMrFio9vyejpyQ2BZqcN5dWiRPVf3Y7gmLi98E",
  "key26": "2cz78ynEJBDyksbRQh7YJzrtuLHzejdzXYR2fM9MifCWh7jJygzzLZb5cbJtM5DaGCtvnS1d7WEsaUkuwbspGPmD",
  "key27": "4Z8R3QZFoSxAGRhFWg3sf34ZsZn3EqnPumA8Ghdr9qURFhemskwuNc2j2N3zUApvZj6DYU7ZK1kAJCkR6mNEGRXg",
  "key28": "5aNqjNUSJwoTbECrorqjQ8gsJM8niaZBXTfHVjiWEJXagLNxyyTyqof5KAjuwemJqpfQuNzYDDtBq9PrBeMZdXkc",
  "key29": "2HsEaJMZJWpi3qTxgD4K8WznQeVkkE9uHW8RZLUc7HPq17GqeDPX5cHdkbEKSJurFX6NawkbDzbH1v2a5i5xA5fZ",
  "key30": "3s3iUJXSZd9AstCrZMWDwsBYAmNvUHRxdFAKVXWmYo2uALLmHzLktNutMpgy8sQPwGU77Rur3RdPhzozSaZmxHLM",
  "key31": "5ZzwEYveX5BaPPuqH8wov5BjschBgeLmCTPYLSQWYpcAnweoyxV4cZZwqQWkiU15zLPjEbnjEWC65ZGhSDtjbcaH",
  "key32": "2YEN5z5wyojSAa1Z4mEiZZ71hMJa37rNqZp1t8uzbSWniqBgQdMLZZHAvYzwTFN7LAyHGjkJMTcgtSmTGDpcF1im",
  "key33": "2SFHJ7YkZsb1ycWcrjfSCecT9th2gsJsXvEVriqszAEXX7QxjahaWWjpyCKXmcAig75ZaTGmfqAMsoSdW8vucVVh",
  "key34": "64bvHfb87asjEiAecS6HxUJJaQWeqHhY5xVdjiKbTZAKw877AY9pZ7sqcwALnEZxh2QaduRZem1xRDw2NH7P5Xcr",
  "key35": "2sZMVCEsr1xUnASGDoaZSucYpjopxtzM6tnkrdWQ1dNaF1wegYHvVzqMSWSU7z6QuQvXXNb19Pvo9SC8ztYYJtR2",
  "key36": "4vVFxhGJSLbMnmiaNV9iUkSRbx3HjMGJpBvCCr83vXgDnewZXH1Kn5UvkCqtgYi5pAEzfNxNoAfiW7nD9x1DTqLS",
  "key37": "2G1u4782dahES8T8z42X4BepnZ2SS2FnEWj86Dsbwwf7uaDhQ4jZZTosk5Pub2nVEGdm7tDKP93HmiHmzdP1ESa7"
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
