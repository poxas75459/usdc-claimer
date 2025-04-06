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
    "2mrHJrbm637ZeH8YEMZNqCeCEMWEfUpWc9N8bqEKqpVTsuePGmqK6rvJLXDXwL7YdCV6wv3obGaLojgcpDCE1znS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnLDC6eVZxYu5XD6z8F8KTETKUMyQaaiGSRRhqNj4DtwV25utLvRiuBACkedsLDMg5cnmdFgG9ULDoJqgEuaqV4",
  "key1": "5zZa95FaXqmmUkt1RXf7S6gb6PVxjph6x1pYadDG55a41LPkh4ESJZjZDbrdHeea6w1F7n8Zxd69y1SzVAaVLeXD",
  "key2": "3VEUiisdbTpjsumHsSLyiMn7oUmwgzZhzA58oMrHAPBxKFBR1DLN9vcJoF3kSvYJWU9NjE2eeg3KXojExdh7tVdQ",
  "key3": "4c61rxM68QpgBytGnYcCkZuBjbYRgsenPHcFYpjhDsjH4BXtn3GuLCuwZoeqg6VmzQdroyXYjyaf52oeydkyvpCa",
  "key4": "2ma9iTaYa7yQkMk469d6LvDYED1GozYXQPj43SJDPFf7mhUkYUfcsrfhhTcyBfwC4YfiLefaCwBzMsvsZJQHT9Tq",
  "key5": "5i5o7Ji48u4NbwqWygYrjz6UxFt2zJWDPePkb6YM4VeNAjPaEztk8RbLV7aer8sY6pLhofqBVL9KowemkBxBjeVp",
  "key6": "KBftMnYY7Q4ABLoTL5bmCPw7b8u4DKMZm7ra6JN7UGX8HP38akw8L7nqH1aW9EEfA2RH3fCqJZSoK26RRkyPEv9",
  "key7": "2sM1vfjveFoi26qpbAuj6zZywEsHXgwQFxAb2xHdMrBAUvu1P77zW8JFe81UxRdXtrnubRoUz5MhCsVxA24pW6k9",
  "key8": "5nrNPsHmGA1cM6NBbBhK1tofV7vKnwRRsm4oFhMxUSuXahEbQooqGPKJTaJkotjkDSbXYZpNWk2LG6CPweWosKa7",
  "key9": "2veu1SyqZwUhqnx8UZKgjRmXjytXKffMnk3JwzhhxzgzP3kCGe3fyW5httFsgKeWusr2jHSddfesKTLTvMHEEJAB",
  "key10": "nRvPHNRK97z6F1aoX9CBQhD3dtBzEUYAepgX9FUKQSzTc3fdm61vqu78mUbU9bdvTMoDpoCnG9rCgHkeguwDEfe",
  "key11": "Bvi1QBxuJCrE9Y481sCHR96xKmQejkfadKc3VAEdqZf5jxk2YaeQrST3Ybv1ugXaFzEQNV8U6uRbWLnQA2iB4k9",
  "key12": "5huTx1Qq6kKru4VM5iyaph6Rr6trqcNEtD5M5iJQ7VcuyQM1WS2komWPUYGVg9bKyGSa3wFEJ2zj5PnkfhGntvDp",
  "key13": "9x3Jag6ndeKqQhPn1HtfX74QmqsSCCJaukSg93pmtuSFWkXtinxsBExg9vkcm4V31ATubaYigLmFf6DL8aFJuYQ",
  "key14": "3Pn7mrgcEvLgjkgHnf2F2YwVVbkC7e8LvjvSLdcf4FjALUtsF94irtymzzUYt75ysWhKcH6CmBt2YtPdTcqkaduE",
  "key15": "3BCq6femdh3Hgg37vVF7CLPJw5ES3cLond3H3nwfDoUrFjxbCW2TZVGhX6n7H1P2GGqwnQPxegcwpJ5YR9aW4vDk",
  "key16": "2auU3PSLu1wt5CwMBV9sjr7gUqXLsve57atCF9zox1rELQJ4aupiviJ3jc83CwAHNJgFirGSW4kqBP18ruhYZj3L",
  "key17": "49ZePxG67L9PymFNRoASXY2pTFeispt3YToa5fRWey8PnRcDqUw2ZWYuM5Lr3QP1mAynTqLhV3KN2ofkbT3r82Ux",
  "key18": "jJa8pggRCPtWEh1zWVv3rBAtyTaSxSu1knjPxPXrXGBrk5i6byXNy9vsA3YJEp7D8NS5vccad9mNF5NjVzgbL1A",
  "key19": "3tm1NnJSVVW6ACoHtcKJp72jkodNvxNEsGrxTQECzfAMsw6usmEZnhp98pPu5vVLkxgcb9PRQWpAi5yA8Ws8v1eD",
  "key20": "5uGJamyubM6U2ZwgfQYDRc3PopvDtEBRtPuezoiyMzqbvdiwEk6gZZQAhZJtZvLmQKx8J5YS4twA3V5e1v1NgdvX",
  "key21": "c1Uafma4RTUDysJgU2QukwqMgzivWpUby4nZnA4C3Rq2pbvTBewQCEPovbXycXQ1rUfMyEWwNfoV6gTWFL1kN6w",
  "key22": "5UFotsZJDBAXPxLsT5PbzFvfYLb6dF3KkAey5MGbTbdDMMnEDMxuvDWCekBYmPtfATR5HYrectXpUq8ZuMVnrDXH",
  "key23": "3ZmrpPvP2h2C3rn2JSohNZtU8ZzrRdEso9w5n81nnrVhusCoxDBrroqsi9st1Mi5N5jjX3mKveDQZbzXo1ACCZSt",
  "key24": "5FHFrQiPwFvemnu5QkoqqxcnLgNsuH24Yhjyf8PZdtKqMxsAJh97zLCxHxY89BGA8fGFdKe2UVwwvLKw19UAA7XY",
  "key25": "shDwmVumcYLR2vKKqDnzURUHe3CV4XubazYRh6HDGYoCHaJ32h14uqtLFNgkoH7X28gD8mKMBWv874Pa365UJJ4",
  "key26": "3VNJG4BxHng4U2FKengcPffx8nVS9HEduiNutoEukgzR8edV778UvQv8kaKFhf8BXQwY1vgqCvhpka96bNziJVB8",
  "key27": "mizpvDvqZAqE8YZVUS1eqnbr6UZrvaHWBzvGEhGUhoyYpSz4x94cPmpNAKHq8YXyxgdBLxWMFUKqbgLDQtMMLp7",
  "key28": "63KyGXF4otHzWUouewmdnbphxjSUmdyYJFRbZpugXmvSJKcyhMi8sjUKxwWY8YeT9AfSnqRGQk7ve1cCnj6MMgU3",
  "key29": "Rrsm38NaQY53mc8RbKdw5p8ZpemJkZpYfcJXc7p6kF7HJGSoXeA2HiigsjRBnRWJFH5dbMjUrfWWSQukHQhBSqn",
  "key30": "3PmkhBXz4iyQyoVv4vnjKSpYHKuN8sBGsC5UtfySER3fz7gg4RVGzVADGV61basSrC979Jz91n1YS7tmAtnVH5Lf",
  "key31": "3E6dr3fVJFwBnv5rk8pbDC282Gbqf9jiYRkdgaUzmWNmEj3nq1ygyGfCfcFMMbVePXwc48964WAbNobhJJbXPsHv",
  "key32": "3T6KWuq6M2w9GdByTb5kZpaee5x9amFZNpg2pUe87g4Tdeq552V732EnCL7J9PmyhtAVU8KQjkTxeptRWWofw4E1",
  "key33": "55CLtpvXnS3v3dNeo1cyq3qRGjB1xggiHVn8KURRHRYwynA7X4tha42hP1EQaKPREi1hGoDwSpAaz55sapTChRri",
  "key34": "5SGXkYmb1G5xiibScXdherivo3xRdGDFXa8sqVgyiKYAJfrdfAebeATbjkUt9s38WwTmkBmgkd5jVksuioMPk1Vf",
  "key35": "5HqwaCpinnCGJZdmB4jQAzWzAJSqnHty8uRhz4EKh5etHo9y3jTGSCgKQ7xWG8rQvB8hAfNtuJhGUG1zXZDeBCZC",
  "key36": "273kb8YZtZwJ6JaAYvkVZHo2wbmoeVy8vm9vhe5HMo72QkGmW4pRpwmoJCYzajundMASXAHyniH1qn8inrYws4kC",
  "key37": "2RcDznhUj22dFUpJpziimnqB3C7Qbk4UWWTBLosFk9YETcsiYg8xQGXN3ZMzZBuvtiNh8QiSN1iNYYDm9FBmVA5z"
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
