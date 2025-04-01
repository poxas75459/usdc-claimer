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
    "2nmms8tN7BZHQ2vLY8Th8Ukhi5VAFydS1zYjSJrtFbWH7EC8wCjyBJVd2rX6fA2DktmpwAHcG7e6d131pbTjtVVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53MNaDJKw3kprAto5DBvGfHFqD5wpfzZpxYkhxj8bMXRNgRDujxrhk7FYwKnCxB9j8N4nVTFrRVj5H6nx1vnGKm2",
  "key1": "hr4szu3QS9D44jWF1Y5LLMKomvR2tYYnVB3k7q6XSx76r9q9QCY1JVGierfkqMpaxCx8emxByoWSP5Qe66n7PMD",
  "key2": "3VK6HtCrkfi2MqLo4zwuJWqTiBU6zfwGCP38KAcZCRQJwrfNhetsSUpK1dyhxXtXfr4kt8MnL7zMwz76cc11uv4g",
  "key3": "224dBkTc2K48MZzSvtTpYgsBp12C5BGS5r2DQE3CRLLAdXV9toZ2hNeDpJ5RioCpKKxgKUkekUDS9tCipjqF8Y7Z",
  "key4": "qkZ9X5iL2NHCFskDjRtrgHnMNP7seF8hz7CxGkLjoBKgiQ4Ni1Zbki7tjM9Jt4Rgbo9oahD55mkw6eD55K41FEt",
  "key5": "5y5aNemRSscZi3hSTj5fxzyVtYRZGvCEpbu6qHHc5JYTXxRZxmCMupFmG911AfP1i8Heu1e4JmUWbqjtA6CdZwMS",
  "key6": "4RTtWegUfzExVxycwHioZo3Xg4gQd6pfQEfpj7AyqTWUZrzfHmGgZoLHM5EpbHE35QAs55Z3Q6ao3gNHDESBbCLE",
  "key7": "3PC9bmkphXM19fbvjyNmoZyLP2Z768g3Ltyd7x5JTzabiyuMTYofXHFCzXr2AtHn7CM8azR3n5MVbdCgELnhHj3d",
  "key8": "2kw9T4LZDkigAvD9a9vaXSXNrWmELAp4rCaF5pcmrUugpThecCJeKmDm219vKRFLc9KBgLLrgVBdpGBnuQPfaXrk",
  "key9": "5etLaPgMDYcaoYRwRsQKwq1hsLDhu2YW3G8bhEaKH2u6Nds5nVTafJq18MD7KoFsKBDzgeVgjLf3TrLyozqa3zQq",
  "key10": "4d4qkDvenk2RENasq4F5ngbM2y8pawCLcWp2YTh8ni2Q6PZwSVjNZE38L6VV2moanCEhZU6KLQvvFmqstYxCeZHe",
  "key11": "4usGK2RDHrKw8qzmmLLzktvsG5p453cVu2FZSMbD6t7YJafB6vVxDxQtDVfD2yFw39MXGkfwmtBw6wHmKk8o8hLf",
  "key12": "3j4ewKi1WADZnuk4qAYxz2MgYEtM8jkrbWSwzoL1fkgKo52o3c2hrimp88zai6JVQMMdXXonWMSkrTNYsjyecFit",
  "key13": "3rXBgiYjXkcVzzZkv8XdJHATzTNt8wbXmk1zSFfv1ban4UxZiFCCAZ5yg7a3vFBgbpDzVtWd43ETvYJ3F7Rm3Rjk",
  "key14": "BQWdHw61KdeqQ8Jb9udV55pCdb5PiKjdSnVZW7cfTTcHFBHFDnWAbUpzJ3BevmFQqPTNoTh9UAGwbUzRGTydXaw",
  "key15": "2J2ctFU88fsAHHf9WQ6SiraC7dnjdoTg3sSJgKSkLz5erocQc9zPpSoUfmu6PtVq1ENHe9mztWnqiisPUEraqfSD",
  "key16": "2WLhNLBsz2gW1oc8YAvQqnwmjKtz2C1C84vXg9saqBhu2bDP6L27BBsh1ziGepYVb5DDQapdwRo3ND7u6SF72MKd",
  "key17": "4QnHk9yLbYPWdJowVjCBWHr9ozVra9bfU3PiQxZeR5s27mL9X9o2Gh3PAUb6KPma8Vr788wMpzVp4JKcrmuK5UVF",
  "key18": "3MAyeJWd5Gmqhc7ZviCSjEdrkV8L6m7B4sjSchWLwzECXGusDHT1gi5ujBNASJqALL3nKqsDinZQuYvw1o3wGQgR",
  "key19": "5V77YCf5CNPBJWqUP5mQ3c68aRMHHxActzfjjv68PYrfmAs8rbtMLDvoYjBfo8UyES7iNSshFfs2Q59eesPotZ44",
  "key20": "5dRS2ah7MMNQh8LoUPRQQCnhg93kKtq4dYYgPP7TrarJr6DuAN1WzHGcyd11eCWWg1ZRWJbiVvBvFEz1W9jbe6c3",
  "key21": "2ws5cQMvt9nwJkUaZoXr2HUy9WGwVPooxyQ1M6JJzyViU6Xm8wLc13nHEvc6Lo6iMc3Y1jyfokMwJCa8Exq84dx5",
  "key22": "65tXcxqi3Jt1DAvi7WLCjMahaZs2ixbfeEEsPUf9kypRtVJK3phYyBv9L4dAjJ4TPUTPEcx4H8DBGskUCTcFQLEz",
  "key23": "3tAWE3sXY6bfiAZZZMW3m1QTnWd541QdiLGyhHmUsT9iEzuFMqgS4q1m7SfwDJ3GQby15bWFpQ9ZzDnE5m2LMD3Z",
  "key24": "2MbFZFtapnQTkptqXkdaVPkeaRMXSeacZrPHvGjcboSB76EVw3CH2HJ2zAHdW6mgpGAdgZmcgSwqqcjpS3D4NGNm",
  "key25": "2gnxVGietk3ycANDoNubL1Rfg7XC1AH18hPVQSn5hZqc8F4e4Qme72FUkBbCk2T5w6HF6Ng6MLQMK2QjfdGXaohF",
  "key26": "4hnu8ep41e6XefJ4ixKpDxE3winvQnw3V3aFEKEKwHEZpReErMtYY2J2FKf4SLaG8raTDrV3FzPM9z9MagcXS3We",
  "key27": "4fN4xTSyu38CpRtcoozp6PC8DDjP71MeXQuvXG5KPkVf5tEZhPMc4G81JGrsrUVaXdwaPybCQAH7ZmFXELZAeHeH",
  "key28": "3oBg6J92sW2EKBTNhZGgEoVQN8zv5sE9htuWNDrPExXoHpzkzSz67cq83tVuFMyGhq86wdH6sNozm4Z1H973gB7g",
  "key29": "44xh8eaCebqP2Xjni1XEW9hK7hCyt9fowVDex67Gi6C6YuMoHGFGd3M9Dqjri5Y5jNGseLaYwNkRcC2d1BT4KT2c",
  "key30": "4AWUgVni9bFPNVN3KgrYvQZEaobvpBXjY54qcapayKSUZMJAssJ4mxyXJ5gtCiaZBiGrP35mEBYV7SUEp14TWsmU",
  "key31": "37ck5B9obHXZBuFnvyYBGCpoxbKzeVHNBNC93dwTXZAa5wRn7VbUuCjzvxTyh89kBBXFopm5fsZwfFa9sAVntGQu",
  "key32": "5M9qbArZXQPbiB4svJW9SLJfXp6ALjP1YrAsaX5VumPeJQESy4emNgmhgKfQs4a5goCLGgzArwRVLsxQvJvKio7y",
  "key33": "5ocbrZHC9KMMHhrwtFTvr4DkegMzLjR4G63VznDGMNBpNMMcHa4izZbwS8TC6Q3GsYAD3wkqPSpUjjZWm9bsHoE3",
  "key34": "5A5D8AXaA6Q9Vn3QzYT1z3jznT72Wj8xvqxuq29dzNFQd5vyH484U6zjaVGCpaj8jiS16kSEmdWzqBpU3ArZswfk"
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
