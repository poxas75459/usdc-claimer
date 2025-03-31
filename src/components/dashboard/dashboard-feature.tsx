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
    "2jgnjm5VmKFmyzoP9Wuw12QytGpNrmY54DuB6Gu7N1wTamPnpe6MvrszLbmzc2LeZFypkCX9Qw9KrYPcdeqCN21W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoH63zasaBzMBm897EpXMwgLdh9k15wb3L5bhToSVRpDCpxu3XbvXYWfqsGhSMv3Svk7bScoKJ3n6yvE9HP4Dvi",
  "key1": "21WE4dMqJCZKiAeAp5ccmywbEM1qZzxFVtV811K86rsMtDmi6tuTqN9Cs1g64TRkJCRgUUsNgmLvECPb8gR3qf5S",
  "key2": "2U6FVWV9TSv4zaWoLAkF1PG8cEbWWXhKMjRy1mJGsCUkcZQowKUkva9EqpZrcYhWXr1EoFb3K45fC1syCKAmBc6z",
  "key3": "4s2j6XhftehvCA2sPyBgkha9hLYsUwEzAvFLqUNGENACAgRfT63XpAv1Yn2LkqNMzgU63dFCpvDxdsibfL5fzPMP",
  "key4": "4cvVWqo8CaZtedx3dmygexEGcXyjKhG3FJ7hfT3YPNDVsqg5kq3HhmgaNTDMa8Gq8u2NGGDC7Qgd1jCnUQy9VcDv",
  "key5": "2DroWVMNES1vVSTiBwXFPHBeeRxdvarLDquPG28vbDXhNTLBvBKZBNx5R6k9yrJNJDmzCtEzMC2mVYe7GGUQ4tMo",
  "key6": "4XaoMprQuk1w66guvgutkSMWeC6Euz1hkZz1JpVWwsiNn4A2WLFTepVKv9NHkHZYXtDebn13jgkhkZd1ht4urmjB",
  "key7": "4eQmCZeBaVkHWuYaaQoor34Agzvk4cyeN41vsvHNnNMqFTEFy4dTY31JiFTS8wWe7LFtQtuTvuEqdfmxr8g4DxFr",
  "key8": "4ud3Tm36jSAE9AvfXBrWFMMSkJkd9S5GTpKiNthbVJ8DNKKNDzc18G1QoZMciNYb33aBRCHdsAwm5bF496YmZpPg",
  "key9": "8emdg76ApCFzPUaLcCHegrM7YLEkmnk3pbEm6b4soe51xsVwxMubWQJ13cVRUJGLiAb6r7zApyR3Fdo5UjVFvo6",
  "key10": "2rgw7MiAutZAZe4GefTBLuLPf3SFUy6tYTYaNvdwszKgSqF75CkJsPKFMeTEKxFi6pkstg33jMqEUtNYyPF7mqSX",
  "key11": "yJmdZP3QpiS7wfYkZLpXuTofPyRvQjGoitviv8rkwbYtU1ri2S5DxXKueqPpnJabzANVduzEYc75YrZpGXe7QNz",
  "key12": "5dW5ENmKMnt6gmWj2U4h6i9PWFPR6u94gmfH35fFFMAxR3kwvKeBok3JjJv346EAzNGo8t1zodEVGN11pFCnGyWi",
  "key13": "2EMEnqwqhKAwEWyaJiGoQBnx96JUAnDT7eYLAtjNDsqkFY9RnY5vaHp6fv85XbGdwx335NZqGq63ZCXFV5quXNoP",
  "key14": "4PiHspKAF3KwuPRtqriNZKue33ebDHqjNYfkxcniAmtGV4S1sJojSstzfHd6UCTh3icgDwfKnSUa4RgWfQeUtu15",
  "key15": "2wrJZdDT7DZZ36VhojNV3VGBqFTRC4ZaCnvVh7k1GepUwox1CmxmRMesxjrKRaFrkNeu9QYdPKYWJVvzicuEyfDH",
  "key16": "5VwU6644ioQQXEps6C7fwnLcT2b5tiq2RFYU2RhCYGrMJJwYC6BThZPvNyevhGL6LaCmkUHGiYWqRCJrJmFu1gv8",
  "key17": "3BYckVtPEdWEBGQpPCrnnjsZMU8j9ZKpuXEVtBESRZLGqpeR9b9GwWkMop667Gt4atDU4LJFiWuV2His5T7CPFrZ",
  "key18": "xvxiaKoChEBhiS9Ec1h7vwKdJHadyzpv3RdRd3JxMu9etBaBn55YJYhudiWmhi2R5booB7bPDm3HPeugfAK5BV7",
  "key19": "5nQnGtSqFVqtqBHZ3mJTvySmDgZUtVc7mYmpc1w28tZ3CtgyNhSwZWkn3wPUer2Ti938gxV5stxpoxjn52KjBksv",
  "key20": "4NeY1RP7UjXkXcB9wB2gQtzeqskVxYu6MG1oncNf6GfvTV7UQ67Pgx9PtyKinCfuEqTdRGREmvVdpvYrR21JU9zg",
  "key21": "2JoCMmaAcEoAGi4AkRv4e6vLPSmMy43VJ4hhx6rS5sTMXbxJmQdJRdQWVN3CS2rYxAh8kFFHLQHvFr5wK9R3JF4H",
  "key22": "4Kjcjy6ugUGbSKFpeR1cVjD34gL7kmNyrrxtiuf3p7L5nekzHcsVjK5djxkEaYi9qTrwV1TNx45jZFakmgbz1pjx",
  "key23": "4qVU8pT9F5HPm7JG5PopsqtvZGT1FxjKmycAUyztZFwcqhf9UmQsx1NppEmyK7p1eVSsaof8K5ggYTp65nrztETM",
  "key24": "5gfy8xvHEvNEp5yKLe4mHo3QirHFvPBa3hTR6JPi2ntzEBXtxnxN1XhE2PYMJDT2SskQpLhAL73texX51wyEF3tX",
  "key25": "2UUtaN1i2wS9LR3wFmpEMEUoszX8yD9VkHkCx3Cmh6d4hWJapQzUXucGThSDRcNQbKkHgjpUaa2aHRY72ED6EhAE",
  "key26": "2NAzBVN8HLVChZk8nxt3Kxiw4kVKo9LgcpHH5arSUykwQtYHzc6saARuyuhjkJmUPVJU9zUHw6AEfvdC3EbXywCK",
  "key27": "3eNQiSg3ebGQxyFxAFyPCarqCYRyxxMTkgDXX8Sjy8WWHFoFe8Awf9SgJdKaqKKnY7XjWiAbdJ4iwPmmaxpQfsJv",
  "key28": "63NjRuCsZBTa6yMSMXTNPe6v8h7hHochRzN9xguxCtuWgwrkEV3AFf31DfrpXwdNEg8eFpPmdkhAmMPJmXwSJvTa",
  "key29": "2RQaVRVb8yDVoFnRxN6v7n2SJbEyb3DftUAQWWbRPtLrt4uz5PmWVafYnvv2DYKoxV9U833WfyucPBQtvUWqs9G5",
  "key30": "4tgGWvwuRXUtjtCeE4NyLHRkCLNAz5tAozBEEe2H2zHjQUjsoeXKXuvVkxrPZ6PrtVYwAsmiy3zZry9rVi6gnpnL",
  "key31": "hJiYZjd1htZ37i6RbnSiX5vzoLt4GSZCrrDmSbqgGUvuksaoqrLG1Sj1uqKf1RsGg36SkDpawZL9Q2KxPrNHsLr",
  "key32": "2ekzs6cYN7b3wBfMywu42f3GZxfNVxzpzCuVMpPXdamXJPKHoxxbR93T6jEcfmZjMGUNFNvRPonwrjLULqivnMkt",
  "key33": "3PQZtbUnwau2vcYsEbV3WaRvMmnvP6rxRY5XU7tTKS9jR93EeQuXjhqBc34P7WJgKHjvoTnzq5AXgGEhYM4hPtSz",
  "key34": "QaTV95q5Kw4zd8ubA1yKQVot4THZAuRu34zmsXy2GRYBKk4ksBNuemThkoV2fyogZ55v1SuYRphCy5PjDEFSA5K",
  "key35": "59dciTJaJPQ5Cuug2FqdW7otXnQYi1n4YrvVJF4iVJhiZSvNdV8NwTmHa2c9oNiAbrVA5CyuYctnTX4d1PvgBfyZ",
  "key36": "3Qsarkh73JfqbnMbpyBuKpwrqDWfDeT3hENuUTCDAcXrwahE3KS89tVESVNTp2fx3s3H6qgen4mh2RfSjzrxouPK"
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
