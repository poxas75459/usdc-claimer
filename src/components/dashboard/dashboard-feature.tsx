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
    "4EPZPD3mXMM2mrzy97AjQi3axYeRoaQPWkLaPvmsUg5iBKM3iuzx1mY5McGczHWHJeKi7Py3MfsMC45PiCuMhGaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NEGEdgWkw8ac31nGKNWP6tg675h8ohrF9XgdBL26Rtv4Cv2RnkgguLTZjd3SDsCqrFPNzVqVmXjt1nJcFeRc1t2",
  "key1": "3hXdEFQoZBxvtU3ZJjXiqaf1NE1g3j5X61fcVvfBM6SbfQtBXhcaT86bxbp8tdTjFrxf6xaBtck6DLeJ3idx9v84",
  "key2": "369nFiFGKWXNwFzfhjVz6D9xh9WahHUfTFkxg1meh4iUP8bXswsdgRZfE3pqSkEh7J3CHTGDWrbCzs4CW3jaspdv",
  "key3": "5nU6hc3gTzCP39BHHJFx4aDLuaoz5ySZbxFYAM7HYjBco5X4xfuScua3MAy7Zk9fSQdzvEAyevoRTkgHNc3jWzUY",
  "key4": "326RTfMbdX5dPy9zgk1rMQEX8EaDWTJEkMy8qcH62CmJJt4TjQs1hBohrG8rhZUHf3h9Ku5LTPzqSpZ3yhHSbUfB",
  "key5": "5cQUAeyz8aQsEUWBGvykJsjg5SXZSqu9oqu1jDgUiSuN838RYhH29GLxcZZqibw3SWf9fwDsv1hxAt6XeHuduwd6",
  "key6": "4JbtwHoBtSrYc5keHq3t9NbKhEHJQ2ViQ4dtSAoZLzpYQqmMUVscC6J4D3Vuy2mXXuwBPPHinjyd6Vvrsq27Xtgb",
  "key7": "2wHEdnsV3s4JkV6NT17LYuu7kecahWzgbZkKP3QvH8NDnc4uCLQbmKuPDkfy8God3RNboWxwYofTxNuGNQyeJMoW",
  "key8": "3f6M3zrHSbihKP6iSozhKcpJE6Sqj1TrdhuyAtVY8hN4JrRJ4MATtFXr4KW4sjTqUZgX6E3uCD4mc3nmMZDpmU3M",
  "key9": "BEjqwptabMhKYnkBkpBLMdheSNy3RECHsAiLZr5tUfF94QbpngbXPtw3kACBJdWLcyqcEdoWxAGXr6DoXXDygqf",
  "key10": "4N3Y8B2znGMp452eUaTx93v2zdidmxNohEhfb5vbhQarjpn1d5QXANLMWXeCKKx3rwNwY2ceUwVFMQCtYncqi13Y",
  "key11": "3jABwch3to1bhyKfaRbtg7pmpDaQhekJ6YFtXSjqfb8MyhF5CUtshXNTPbooPHhNd8hoRkdsNaNzeqFC74oL5Yo9",
  "key12": "2z27bCFxAZGbKgUgeFY7jC92HQLzqLKbhgsNVG2jfVYasfUJyxBsBnHYJLtRJjNHNefVXwEsVivEdy2NNgN1UP8o",
  "key13": "62nvyCeSkMFHf8evaS4PJGD8JdV4gEfpyA3sTKdHwz6Msza9FPdtff1vf3tKikQxWt19Je4eEBbHJCmK5qVuDJTB",
  "key14": "2qm5gShUT67gMKqGAXpqTjx2D4EpYKXb6c7ZuoZzgMjneQe685rQeckh1xwo9bDUTbFssBeFczzVoimuF9vL4qfB",
  "key15": "4qX1XL9N19VmRBxKAQdN84wuutgpbmBvTUzpiyM3iDdpLzrf4uRuMxg7fWKryMYmP9MJoKCruBAqTLXYFZBTvPeZ",
  "key16": "54dSkS4xxRiwYYw5ynXGJJMdScNcbGCSXV6GwA48LcSXCJBDTY3wefs1o3N2LFPavBWurEdvus6GJhdKADBuMNcH",
  "key17": "5JiKFwwfFypucETXv3K4JSrJbrzgjskbpC4TWLwkZsZfS2eeP5yuaA7e8oogG1SqeZxLc3UAWoa64metsxz1Ceqs",
  "key18": "qoQNV9kMuDihfSTHGQ35S3P5kLskBwcej8Leh4TvF3ftaq4h31gzQF2XAr4pM2kEPAig2Mhsf9BmsMBzEa4Ztwv",
  "key19": "2ttc6zhfAoGBGWXZ1s9qX9Tgew5c2tM6ymVx4UhMJKtFSszTz287HDZD6uFsgiGPyqadtJqthMyYoxotszNe87Ra",
  "key20": "4LS4fS9sFXHeSRe8duFthWzEimxokanNBoHwMPE6xVWvbn7GWgEFYa63t9Pto8Hoi1QVY7k5dHTpim4gGMxX5Z3n",
  "key21": "2jo9qostBY1P6aBsXKwhXctezXWL4HNm8AVAyerp4Q5Pm7wfL8Z8qDfHu8K3BweJaTVbqzqnojhtFyp2TxWpS9xa",
  "key22": "5bF8Jmq5PRPzog6Jc1GrqYk13Chg32sYvw3xReUYXrmLC4xD62ciik7Fk2Nd4FQP2QWwk8Z5QNRxEw9RG2qTX3Mg",
  "key23": "4K6x9otrVPF5UAemEqFP9oLWfw5nXRKaCgq7hAeWst7E1eRQonkAB5AXrvJDe22RMhN6QBcfwnSYBS9A7c4dQX3z",
  "key24": "3wkmfbg24NjDQJ1bn635iPZkSo763ZPx4tMGjmknhcpHMnRaoSxeCehWrffpsfw98ggchfBcC8g9boetLCV3YXc7",
  "key25": "2s49G2n3ckppmhRKWKgd4Vf4FS1AESiCmnXh7uMWHdjS7SG6GLKqzUgSHE7LH9xSda4FFpTFSreU4w5yHF6otDY1",
  "key26": "29M436HYTF1FaNZstMfcvg4qdLwq8ptaZQHE3PEPBFF57hHB9DiQVrg6ixoE7e4T2TULr2NeLzZQf4na4U7R714T",
  "key27": "5iZ5viAyW63pxPKhxvZBiXYoejy8mn6yzNsGm4QzfwPcb6E9217u8jPouSCgkKFy9wP3GtgVThRHoqSp5qQCAX1m",
  "key28": "DHETBxEsKfZxQE8zkzB5i1QhosAEQizRKuu4jFD6c1oLyoi7oY3eXT5jSf3ZJygXMtTCDo5V4f6WgJDNSqNprvB",
  "key29": "2pFikNAPgpv7TUoWJKhZUW2agTL2BTViVQ4xssfnhfxCNzi9vLY5ZAZ9f2xfCaFY2XjrcJiEjGGhVAvBctVTxsHH",
  "key30": "PRZ3RsQtjyvfgVdynQZDMFzPmmmNbmsQBfEaKXRcWiXZgG4ejUdQAiByR6eqh5ovy2XKPJx7wnfW4ZnZ8oY9tF8",
  "key31": "5mWcRMY9Nhztt6ez2nk4oiJx1xymwCcFE8tw9gzbkxTjxqWYF8HRmcwf1SFhGAAAeSf8d7LDYkow91dotcBtCPGx",
  "key32": "3yvohu2j5yNy6bzxKoWLAGfnv3RBMn3kYdChrSBfA6wKRXHEsvqkF4j8vfpnJjLzgBmUu7s9H9dqJLXPuDYaKufm",
  "key33": "8922dR2ozNYqFMMByq56QG1VyKT8q8aaCWc1GZjsd5r5uyup8k5LhEMzTDTS57vo6ChQMCdysLrMEB3hs6xqvLq",
  "key34": "34G73FvWVquFBNp5Kty4DemZFy75rKFU7kX9n3a9ECfaDiDnh3tNGSUYp5x69fmPjFnG4s6D6sC8vJtXWFSaabFV",
  "key35": "4pWm7YTYxtRs6AxaDaDgGd13p8MoiXU44bHdc2y3zuEGu1ka4zurrTHxVPgX7UzoBSiD8CMrKTd15FvkmkxbgF3C",
  "key36": "i8WfUeuNoEY2owuvTnmM85jvZpU29HCqinPs4yhprRLt72DchedYVFbQSRhNRvgHAcj4HNeanv4Cv598kV7giSG",
  "key37": "5RnPtbUokmg7P9BKKNBCQVwKgxoMYKZWbJZPG823iRLd2o8EARoxtKJo5KiPp8L6LWS5hzoii76rTEKYJsh9RG9j",
  "key38": "4EuQqXoUqoS57G9ys4cMgnCJuPMjTpsou3vKg4c9cRmFnrbV8BkKHpoThxscs13RMdNHFJgqwi4vv7kBA8CqydjL",
  "key39": "2tGw6BKWDZqpgyafxGUKFnRC7EhYrWvgFPxKXDC4iFo12qybafLSyzxQTzoj33aug53f7ToDaFS5yk9ffNQn1ays",
  "key40": "5ryvnVrHHhC48UaXBDBcxeaTwjw7o97QW71CcgVDu9jUTNV1a6PW5nLsX3heBsGUhu9gbWno47YZr8oT5VJsvKV2",
  "key41": "3Lp5qDf1s9hxzQSzcW8hS7qHZRbPLFY5VX46F3Qe9ayNof1so3FTQwETS4qtS2zAdPFKMbxiBk892vb8B13rtiFT",
  "key42": "qXk9u9K6Ew5nQcdUjmLV6WSTRrV67gSMNiFwiPKkkSE3xnK7PahWnK4vHnKfdHwS4hrGDdGEUbgkhznTJtsLHMn"
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
