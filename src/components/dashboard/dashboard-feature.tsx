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
    "BpgwMHZGULRA241hfoT8EZ3kYGYTr4T4kmFo4bumGh1ce3hY5WQfRmNni1QyBwKKGoPEW8B2zTzf2SuXhDkzAfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4TfMCuhkBqwYinMXd8fU28844euXxeJWq4hyiC31iSb9JhKBGiVZjsvhwetaZ2ikkqjMKqq47FU6fdbdpEX7Ki",
  "key1": "2AnXJUPLJzHQNLSoybGssnrRisPTvriykW4XZqp51dyA5yqxtBzChzQqDAEAxAihb9LaYku28PCEXeS3gntFqmXe",
  "key2": "2V7XQQVmLqDnfsqDm2K1rjDSXY5HE3LkWjAjejCtHWoN3d1uaiknuHpgJuEGVeCEBrUXkkXYHGqAjN3NFsxsBjmW",
  "key3": "46sBJ4cSeEGxcbbqCiZMkmLC6iPxvxQzWZ7ppR2wjsHrLouE8QAnBNCpWVFRM5dBpBZVKRLeBHiTaaoZghx15K2h",
  "key4": "qb1if5Usja1wdqhdCVYKboUMH9XKSMYPQmo2LPeReCzapuF73aNexGRUHJDwgvmWoYP1dEMWoNwLWTb7i1589ju",
  "key5": "XCvSgxnycj52DH6uhU5nW46hHsj7555j6PmoEBCqhZWZnctFGy1cbpkaZXMAVzv1UUqhsVC6vvVo3wqo6pwcYeQ",
  "key6": "fQtzHtqZ8zJCKSRRLW7HqaUghX3Qu9UwRJ4zNCw99YY3TjMK2xpCNUBT8DUHFuPTz57rY5HmHWev5J91NTo43oh",
  "key7": "3f7b5osxForazSVSBaxps8TKAmJqKw64oCqW5hqSH2EC3d6b6PeDwJ8qd2kbdKLfmEW5sqpM6GzMedLm3fFZ8AJp",
  "key8": "2UjkK2Qh9DBKKgmjQDpjieeD7ur9ro9MTQjRX8iGtYEXR6x7xwA9PLEpggLFiB738uHTGDuUvwKXVSUegmc4ZqxU",
  "key9": "4Qg1RyqvVEJ7xULZ5xUQuV2nQ7qWSAwUzwj7crDVQTmC233wzhcGYXfE28fHuS99yyeWcNEdDoeAY9jNJLBBaVY3",
  "key10": "3fsVuKcVvkpjg4XewoDWqFwvWqZjrw9qSi75y2xT8zXH3HE63zNLx9LmZqQiSKs4EtBdi8KX9MQxCczCXvSz6Dyf",
  "key11": "MuEbJ1b5GCeMrctxj4kk8BmBwzvkEuCU24J3DXwL2PewJN7vQ9amfby7BAMarTWmJXxGagdgogRMY76q1FdfWHL",
  "key12": "5Up7VJDwjHomMWR3bP2tzRFpuFabZ5pxccgpHQm7NzGerWcMY9U9wjDtv9k9FuR8bZLFj6yZ8aSuFBMeKC2o9zTi",
  "key13": "3b3Ytr3yCnJVFHRNaJB775yh2XN9kS2BUHnRBHuWZLKWHE5PRNSdRCG9KBujNkjJaM7ep35r17CXoWfSz3SiSwfo",
  "key14": "2kj5UyEukLP544WZbuvxPKX11ysnqnyz3tJqymSs7VkQFcYWSwFzfanunGk3Q7dYDNvX97HFY99JXETAuW9Hort6",
  "key15": "2jnN7cx6uL2LMhtjb1eUqQVLo954xPwBWJDa9f3oDbq9VHCYvYq9HpMfenabhqH4ten5xjbBTYUnhX1rAZNw8wB3",
  "key16": "4r4GxMt1A6yDRdECmogNbWLozCaAtUQUm5MAvrexTp5H2c6U36nGKhCTXNBGJgBbYWaXyFWA8v7KVCV6koPF2a3",
  "key17": "2tZDq4qoym6PXwTKQR4VBNhCFcJ9qe8aQkUVa3N9khJLyCw4VGi3TqLTWTNaQm4gLLYyseRPtqj7jvCiE2Uo2CcP",
  "key18": "5Sv5D1ZV75xHdzRT8qEEQCWbxtXarTEuaB7RY33bwJytPcCkpLWhXSs5UnZDUKj8jhBKuQpwevoV9UFC8zH4RuFw",
  "key19": "4xK9GNj7VyZZcsNRsZjjfMjkLquxYXgn179BwBqbVK42Pef4b7uXbq1p7NDPw1hpYxUS31LQhKnYaPk6nm6HXBxA",
  "key20": "w1tenQ4Qy8XYypibwQtqZK2TgDFMcMPo28A4ndCKt7YwQUrzGi18jBe6FKnykC8KFhBiQBgxtW4YhGSSYeoXTKh",
  "key21": "4f3g1CYtceSREyx5BHEb8B8iGJ2mnmqmSqMGj42Js8dQjGbWZiW6vzijgKNThekGwhQScQctJCPVh7XRqPVHmdAD",
  "key22": "3iXnzpnjdPYPxDymXkb6DrQU8JxFb4FwkFxfT9tZvFzAkRikP16oJaFJ9yRM4YizCg32FnDEeTZ96ecCwHUs7M8Q",
  "key23": "27Xh8HptXphJwBsF6wPWeiHPFM7gqyo1cpZkVrcDCmxMRnE1RPF3QhTUd9iMgLU2GX8gBRJyRt6q2F6A4sgNy9HQ",
  "key24": "2azYw9wsdAvyFv2M67T1kADwd8PXyCS7kqDuKBzzvpWxmKh8TFCmC3aY9N5DbvywpcRWvJKBsnc5SoH4vKpwgMYe",
  "key25": "33sfayPz9eubabixcJa4nkKZE3Q73jYqxaqgqcseWCoYheYnHri6H7QPogghzzda9KjUmbecEVJ3SjaTr22fTqpw",
  "key26": "5ZWxY9YiJMTMHhSAcHnrKfQZQ3eftETFwfL3dtYKN2Fkx1HXgB4FXhWYcyCSAMXCWsjSTkjFEQjMR86zRQeAWMB1",
  "key27": "2TrBh3dqDWoDQYSoZqwWAXx2YQoGgC8BK6GHHYGP7xDj4fnaAC1Rpm56URgrdp9n3fjNcfHqd3XGLekL7GpUWq7W",
  "key28": "5hwXUJxr1jYDVZFgE1fQ5CFSBWmSn1QyTsAM8BjcwGAoyp5vFgWMUoRyJLURKy5Y9PvWFeG6ewXbzjDP3xYwYuof",
  "key29": "GvDisMAJZ9op9bFSFsJtaT2Yd5f4GBSLTXSmMrGfwyWJ84c34ynuPsS8PjjhXutUr7VtnfR2d2bh5M19D76JVfa",
  "key30": "3t2enkJQ31zyi12gyGSPbgqvykRw1eeRUsKTAHXqGn9sKTrRVx7JHWQU5y9URy9wXSMuG4Hf7XTvmRso385LAMws",
  "key31": "519tFLdawPnet8ppHKihruWWu4Rqa9mBzChiXjtSESsVNByntydZRFR9LHsRyyzWbMtvCrsGYwDpXhLRkZok4LSy"
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
