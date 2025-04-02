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
    "4GjmYQJbFb2oJZixpLSYkKKcUQheJXNY4NFCWyxVa7CAKYJyE87Eu2cLHnQn3JsYw3r5UzY3YNGQH9he5yk3vcsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LVRu7ELwJZKcWmSW9bxZXMLAbh54S6Dc5BBeoqmJMtqa3vigkYLk8jwxA3NfUDsXPhf3s52ssp9BkagorrdLzxk",
  "key1": "5YF7ojUQmaNcCaXeENYqbqYsDKS91pVvRJXH8k8fVMaRpyBQoLXX8R5yiRDFZDg34zzU9MaCGTF8AFfo3kCbEDr5",
  "key2": "4tqKjNiJA3YMUEqBHdbjGDY4L6B4YDs5RMGH7f9QGFq8uKknrW6YornZrwY4z6qbm5KLwNEAMg8ukR6bxz2VtXBW",
  "key3": "2r5FVc3ZCafnMAzNi2zFGV6U1h6zjozRQiZLqTZRB5RmTevbWrA6ZPiU2abX1cYVCNYq9tosMywCyBUCcvNtQcLq",
  "key4": "4y2Y15JFoHrZhgPHeKPpWzn7XjSjtxdcMXBk9oCveUBAuJfZZM3P1hDmycgAtFCb4LneTMyZcyqmCAM4oaLAtUKS",
  "key5": "2krQrfrqu2MtmmtJ19FKtNKJyRmnfmapidzNKXqngMchjvLRmUkqtE7R1otj4YbHe7jQN7utjUvsoQGRep4KCw3y",
  "key6": "m22JpPsrwobmeywpVMZu932WzgDfCJXovbMp1rVYTp5qGC3LGLySY3eRF38CdTaTZSFLpZWjdMGPHeTykFXU1zL",
  "key7": "4FcTxeR1BGLKokuABGWNVyy8eWKbiA5P3oeVPcQjJ9aSQW2VJ9nmH9Ps8mhgTkHukTcg5JnfCfUDuXd5ZbQ4coi4",
  "key8": "NBzfQe4Wu2atxYj7HzDyJDLK5PZV2npQBDAz4yU4r4cq2XUnaVftFUmaYz3GsQVtzK2dznxXHUzr99UNuc98kjy",
  "key9": "LLbThpUipTMKCA13zgbfyBNuXg2j2GxjWf9QMQpFCSZgaY1oPteTcvLc76Tw9MkcNLF3pofp4cQJ6xhxNhJVGQ2",
  "key10": "75fy6LBViRDbzDr1zVMddKdvB69qgLTCsLthV1QtH1c163wY4bdLtzaPyJ67orJeHvkHpuGx6CcNqTTB91yY4qn",
  "key11": "Knk7XZfBmVLgifJwc6megzAVheAExBsady9PuMvPnRA2iLiaS3EEbj1LDvw64UpQykNz3iFgomhZcou3Rgabows",
  "key12": "34WtVJVMGESwsi76UzA4p68uGSvgWJtFsETaZte2LpFtXCuh6BwcA8FfMWEjvnnFQDJu4oi5z3i8S7pCfkHZy2kf",
  "key13": "7pjLn8mYTAKoHv8rL7KiswmyzwBA1pe9d86sZ93ZbHMbntBvDQdyu8SLnKayirMfgDda3pp5EBgLwqAd4yYXo2N",
  "key14": "4i4sdsfL637ZUdY8XGvPt5yZgQ4JS8ssKWZ3J8hc6VxAM8qPpCHrXAzifW7iFdrrVTbEJJpJH6U7pgYbdzmjmov7",
  "key15": "5QKYJJL6FyerxftpfvfFSwWnMPAjB7fxr5UhGfJqkqrVw3fxfj6HkaeXA8RZRKf9xzh9D2DdFSbixqwi8XvS5YCz",
  "key16": "4291KsK9XA3TA2Q7Cpz47sFkJkgMPmrEpd1qCV27uAw6cC2yyXmi4hRUVgP9uEGrTnWU1NvMfJ6kSNthwqnu5fu1",
  "key17": "3KVbAbrvKTRveLob4o3632vnFMz7Z1yyAY296jx8jchw1x1vZKhk3qbpZNbwV8gruoPwMvv9WCC23RWRjzi4vFdr",
  "key18": "2G8T9cMHiTcBi2hmoPdWEqUHmceQ3vt7LYHBS7h7wEWLEs8v44eAmJSrLe75ZaanEYHzZuF5TuwMMyqCPJi9fYUP",
  "key19": "nAZjLPyvdfufdqWKWJXTjqsgjL5xpk2RZ6gWoNzcduiGxhEGaZzRZ9ejgEpiLAnoAgFdFdBBGeffzkPKSYn3oQX",
  "key20": "4imairTy914rH7CTSsmrHAfnJExWXJeA1FDTmanw3RCAYBvfzZ8USXpRzxydnQiE1Tdij6sbYvj6ZcoCJVJ7geAe",
  "key21": "2SneXH45qCsPxtPvVKKCdDwmRnojSES12J3NGffv5bs1Ypb4fXXZfmFcmyuBFeqKCVdLrT2D5QYJqYTqTjJhfqVa",
  "key22": "LMxUPxShRs4cthiW2wMMWod6KPsi8Js53tP77PDff5bWTxcFtpe9qauQUk3r6fcd2zG2ZaXQcMqsiXbUNx897Xp",
  "key23": "3KQMoyni24p9xjmSUDSc1xGJmYQoDz6yme5MJYdTivusPN4MaWw1CdR25r5LvdXFF17hKJA9u8eJHpzjtYM2Qfi6",
  "key24": "4jxA5VLt8abu2XntaEyBw9KRiC1ybViPZT7dC6UeJV68UL1gwADRRWtNeFAdcMXKLokDd7ZQH6AYE8Z93CMdzCSK",
  "key25": "2vR2achSyPgv7ASF1UVM8vKDuH1F3zBoFH7RK3Zn9RwqbkEjTjKWDWQK78fG2QbasyajumWA9TG1pabcLA594koq",
  "key26": "26WJcSCQ6LMEdD4tVHCME3HgLgX7tRXd84AxZG1U7a2N9ozEvGA5cyfxeHMgKW1cT5ifswyCX6wqEdotFzM4MVPo",
  "key27": "5XxXYke7sk1B8QxDVtBrPnGSFg5Shdh8LgdTYCcVWiXCckte9BDYZ4YEQx1XSgpy2rHR6Y8zuN8EEUiwaSw8Xuph",
  "key28": "3o5pA5eyX2CJoQjyRwjcZojD9fScgr88Bgr7TpghwVQyZakaveGwggxfGFaPbGgQNV5BxjrKfXUK7vzPb5Aj1xw2",
  "key29": "4rnQ9FxhqCCfT3N5FT6Sy1J6q7NUcAcsHFhQ1yvo7ufHVwQ6h83JHhGhbj9x3KCJL7jmcmnquVpUsZKibZJLWA8c",
  "key30": "2Rck2GmDv3DTTyKyvLqrv6pvaaQ7r5CytDfeSmgQUxpJbZyo3Kg5GLBezWv4s23XuWhGuNxPNCRJhctvKcF29ne9",
  "key31": "sA5s6mrfTrFFPpF1x7YUpYTwpuUiToCzmqkA2uF1HxcChUbXLX7nNFhBLi9rik5MUJtSeDn7GgiZMQNxdsQHRai",
  "key32": "2nQSwbpaXrgmYmoxHLKqr4yZB9FBd7N1DE1RGt895tjpPYnfrL65a1BWhSHUHjRP9ec9Pu5pbhSyXVmtkvZ2dZWa",
  "key33": "FYPiqsxQhPJmkTQKzThuBzSnp9pkoNDyAKWsFrQ7RAPWXE6fbm6z9NLqV1szttJ5n4bym3LEYPfqC9kuRM1iPvM"
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
