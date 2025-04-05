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
    "3gs7t2w2Wthw4iiaNSvPwNMLCLUVjhMshmCzrrAPLjK56RVLaVyoSMLiT1Q1K3KXGDPM71hoYmiNyjLx5BkrMXJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Z8ZWZ6Xnvbq5T8boxVj4g5tY4GrBbXcW99GpmFUq41XhgBBtUP5NtJs8jeye45Ha6fANLQYyVD2ivWR9ega8EQ",
  "key1": "5APUPSQezciTiDMb8ckXWQFMdii3mAox35y7hTTWfS1Rrdxk4N6yAmwkXorbApkbYbH144W5Nyd4RhcyF2eAz9mK",
  "key2": "4iGUaDzgDEQ1zgNoYSTnygzdNPVDmytd9Jxtns3XYsDst7boeJKNV6f9KpmwdSMZMhLKBMhgzb5txGx8XiWA3egV",
  "key3": "4R4Xhqy55w3puuuENbnBFoChzQJb3rMMfAb7iQU7847RmfktcZLq8wB1om5zHYHiR6DAz4sTZV8FZUPr5p2VrU3z",
  "key4": "RnL9kcX1feLrWc4rYpvFKjfCSRpWn84xJRBusfS9AU117MvBLjsiSnLnWCZs1U2nk8wKJrwtW4UJuAyTLk5NbNX",
  "key5": "2zxMkUNCctbmrdFKTaggcp6GqgXMBsGoZEp6FPYwzGrBWsykiEdYp23rbDZp2ZBocW4DZsLBPjdbv5j6tJv5N4Hm",
  "key6": "27dCk6Cc9BaJpoKCT36RHJTbgQBWp8VutRF9XYxi762KV4GCJRGnBHCpHtQQcpQCwSmPsB3MJLpWAapEiWLtPipe",
  "key7": "4uYYLeVVYbjJ75jNcX8easad5iVpdffR2E2ss24RrZCcWeaq6Dpt3KQ64j66T1Cckk8RQpZHY1pm35Wmh5aqcoda",
  "key8": "3kuGeiET4pADRcL1U4hrau7Gu4zQEPFmMxVQAoP3AJa6s8QD2Gv4LzP1UvkcY8E51rSvDBGmqR3npbG4vXHTjsue",
  "key9": "5EeAKXDcJqto6EAUCMzBwroDSmK9Ksv3jo9DbBdHidUhDWmXn5rZiZPKcoqyTJxrVmuPJ1FX6YrDf2DQ2dbqqYcM",
  "key10": "2DKYqfJNF7F8gqVywh3rShmkq4Wk7dcWC9hZKnqdwUzSKC3bKYKSKA6766DxHLG9YW2XFZhEQS5nueb62J4f6NAQ",
  "key11": "23YZr1mPS6BLszUEW2sD4hz8VEPesESgEZFxQ2Pgb1eUwoxA16zsjQ9rrEmifV6AkVwWBhXRUPv7XturqHNUmuQC",
  "key12": "QahPgXiPLV5f8zHqzdNSdVFig6z8Vo2QZ7o2GEJdtKdEHjyi3gFxdQGX6cHwxaiCwrvSYDdcto1MGgmaZVji6n3",
  "key13": "59sAERmFy6XjDkuXeGJDQXvtyp7mdHNe1iBjd4G8wWwa4aMhHHZH889UC4Sx8q4aodZD9PTWxjEoo3aorJv2x8B3",
  "key14": "2kiwBCRWKnJz8HPeXzDzK1Fa5BpYEGwGyZG1mD2tRxNf1oUC8m8iSoaLfrLCapRXVpmDgci5h3L9hbkAm2MsiFU3",
  "key15": "39CgjmEEHBufRcgcH4CxeCKzLhBnZB4uAvfPi5MG86VxToAkqpDV5bebwvu6ofQKmZWPpqcPvHFzxpe9BCedDgSU",
  "key16": "9MvjAk6Y7A9ooC4EogFxxLwFbHcPSU5uQ9SZT2YXZrXiWWfaFrhdAqrq1q1j2KLSBoNtbzgihFMK9fkmnza2BTj",
  "key17": "2YcQYXegJLDpfya19bUuJDG3e5H6MpBThzXkaycUqtyzGA7g6EP3waun97jZ51Qnb6LpKzUZGPFjTAshT9RSGAsS",
  "key18": "fqsGDk8v6uevuup8Gsu6A9MTVaJx49hzMuZBwqRFtwG7c7sV56FHVivxDAGL1kPggtyeoEtng3P9XBwcYmEKkmL",
  "key19": "4EvzS3EnU2XisJd6UB3hGRGHU3XcA7bz15d4ihDXQMBnA6gbnoGzPjEv4CpjVVdRHsSzuiqkBXaukGZMwe8napwN",
  "key20": "2c7ASXtDKYNKTeMJSmfBsdUqEna7pvbMCYG98WiZSLaEXem8NTbg8N3xqaQ2LMfmiAzecgXD33TsbxyoCMvXzfYg",
  "key21": "4h6PGvE2cj7WehQNN834iGng6oegVKZ97kCb65RN4YxRbwvVWaqzh2qYtNZhYd6aTH38Ls3LQUaPP6KRA2hYNa3y",
  "key22": "3Lakwur7m89cKB9kPFjuMy7T8z5BqLQN2dxB9cYfekVB75aW7eZF37LZrcupEb49a1cpxau4VxBDkTAi7JPspPjx",
  "key23": "3Chq8pSGbwY3dWfyKNFoHE7vqYYgmn1e91aNj9DLEEBU9v9FLth2Y5JbSRgrMrhCpVJsGw9ger8Y2edKmxDqFVeZ",
  "key24": "2DD3Nk3Gy1dVxL2Dw2Vf97KBRUPXd5KeTvBk2YhSZXkBCC76yxaHghYwno5h7tvMY9j3MxKmQP3Feavs4rcmx9cc",
  "key25": "27gi2j5iRvT756SRq4J3wecafNUVtibbK6qwU3JBNS6rKiu2VkVKGo5dFRkeHHxysYdYxT5DTLq8RoCxyA1SAWWZ",
  "key26": "2oxPA6QAhBrtLNLiL29YuJJJtg2P6iH1UzvWmDeUPNpLGF2fup2VGvQ9mMUw7Si3RwJn4KHwQ9q2G22FcxCQ9pQi",
  "key27": "4bDZUrgLMSTESusC228gTvmUvmJ5mtD8XGKnYtTT1ZHjSnoL5icKtfTZjuZCezNzSWQddw1frDQJ77h43rK9M9LY",
  "key28": "4mUFxyzoYdvzM9A2FDAgLJEyN1Jz6YZaugVg2HCBLSmP7d3FggsWV4xUtxx5g8Wa9CJVuZc5PnFKkNQH84KHoxUN",
  "key29": "2gpHtrXTSMup5k5LWWnLLJjG89sxBdJLQ8TKjHL4zEGcgfoaGBGdtNZmrPgpiYJN2JtnWqfXrb9LCNyjkqTxZnPx",
  "key30": "Q1XhPoc7J6hh7Umnpnoqo2gYE2kDivm8DS8qSVCAbZkhNhjErqZGbvSiMwGAAfwDMjAdB2tvxd8v3yWv5JUCD1V",
  "key31": "5J74Hx4eZpLWs9MMWJwwwneqYrBJ1RnZpig5txLvz7UQV56aUQYDAojTqwgghmoxBCmzDCGsQ6zCrS5XYWFun7wx",
  "key32": "5t4xeSbkjQfkmKJeA8pvv4N8S5fi4beoWgUJYiJ9Z6eNPiPBYV4bsi8M3J8PKha9xtTo9gcgonnqMgsLbUjCDxp5",
  "key33": "21dMiqc8qN85x3qnmK95pA5XJzMJ9TBu6uFxwnjGa2xdCBKeWNMrvsTps8pHjqtkdea5zU2HQZEULGacmvxrsZB5",
  "key34": "55VC8dB2hp9TFCctHnCKvy1FAQQDmvXmhw9vQ39ZmjESpatiSdeXCvUMvLQ8d17cDiRxV8DgHV8iLLVg83GwygJZ",
  "key35": "42Gtnky6hLQZY6YxCNycujVW4DBf372WKKHd32xMQUWySxPqvDCoPoKdR43phpYRCSyxtd8reipHjQ8byBwUVgNc",
  "key36": "K3cpp5yyYtdiFXXmpTqDzDiRwKkJaWb9ZQMerkbHoAUu1MxZDeAYPB8jU5uawkESevdoLuiVxnP68ZhUHf5Xxvs",
  "key37": "5B5YydkN8tJsJYgqJCy5yYrLpzjZ96Y6xysAAo7ApA87gg1scdhev7pw36pMTRMdogRWcT43s5rnJSbXVvkttFEk",
  "key38": "5Thb5xqAjEBXseX6iX3bPGonVrNpbMvedA6c6trBe89b32ZrdWuqxb5sGeSVzecTQbgoq2THYCo67ePeqTrARHNB",
  "key39": "3mCgkM4LB1mkJ5kEf32vY7cN3UpBtkRx9E6AxdaykEKfsEHbpChcQLg9LtxmQFpZDFHXhxnWHDCgbUa73Zot55d5",
  "key40": "2pp5Jb3HZKv6yLJxRboeE84fiAeknG8tKHvbBabTEcr7S3TRBY4DtCV6Cfu3fuaGFwcWSZVYZVZMsrjYAuPxQBPb",
  "key41": "2R98EpgAu71a3oYWhQPua1nRUpQPdDyFCz1mgh97HAGZRuWfjVPtVgDDNnPY5Bb8XXMVJwEn2NFEwVW4b57EoUkJ",
  "key42": "oRQabD9Adh3XqMYwcwtxGZy8nFzXYucd7ujZFnBfHrjbEdTpqFaV88xpRYhFi2BuhoRbu1SL331jJJequi3Daah",
  "key43": "3oSEWvby2nufS5SRN6mvbRykdrg27H61RdP4vNxceFo9s12Uknpgne484hU4v6FZzi5yBraCiNyAkmV671GNFAEo",
  "key44": "5BzMi1T84rn7o2QUCGBsut9kTnhd5EhhpbqRGLD3gu6FoSZEU2rymCQiTnPvo7HSfjYUaPoJvAHs4E6Z1DwWZ5sL",
  "key45": "27fk3Xzw3HuwAAShbxqCSewoV4To2TN7UD6F6CepCLJE9X72vA4iydA3bQWTknJXa2NKKQU6XTJ6YaVCPRmN8fei",
  "key46": "2fDCsXLqW4gm1kZjeqXXcEMRvh3Tk4LNXitCkdeVK6aBLXTWqmraGHESRA6YcafdZfyPSfAAE4p2kdGxzx44dpqc"
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
