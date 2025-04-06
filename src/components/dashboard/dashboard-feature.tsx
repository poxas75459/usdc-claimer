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
    "4hLeSeRiwSYcA5KA2sTcb1trfdA7LwzvK2S5UzRv1DbWkQSdeJrB9Mw3p6cmmexkUBocYvp4kRocUXSyfT8QSJeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CDFis2inbJaVxrhCwXkci9GJ12KFfTGgBCXxBnUhNtWmNTcMgiJC1WSZxDchSCHVN8PMQxkUzUM3Jhj1F1QKMaF",
  "key1": "VSENNbJj13PGj4an8y31FMTAP8nGTTqaY1F7Mton5MoTiUJbUhzJ6kKuFMZaE9QkM9xdcPRKgP7BToLCiDJyqHG",
  "key2": "67HCmUfCr9gmbNZjZASxFM6nV3o3SPwU8659BKfujgo9bNgSeZk4qZw4ezsUogdVMFYpoPN5iBeoLw1mYUYkRqc6",
  "key3": "2ipoMYHWrkxZuM2gGK2d11e4bgJ2kW9nU11GkE8MTJLN99a5YcAeXLxfhA2u24oS4GY2cYFQLeiRMT97dodNWJCD",
  "key4": "TEGRqw13i928vtHv1y5qKfG81jRFxttg31sMLCVWP647yJkKCWcFZ66igGyPkceJDvKui89rmSsNPFosEemQ9y7",
  "key5": "28kZuFAsraWRjn57hAUBdx2W8M9DdKsKY6ytY2MQK7hNdFDPTF9tB4NzgfUN9J1kXBJYfa9EPvengk1yueuj85FG",
  "key6": "4V19aMLuputochzZNdqJ2iZhwrjGy9rxxqJEEi1x12oGzHPfNJ1xzF8t1NKzwVLU6NNBriWJp8YDuAiZztZRfe1K",
  "key7": "36iR2E4FqtAhho6Gz615P1stMjKA9XincqAVphMv32tLrAfyinxzGfKVK9YYEkH7M18HiCDoB9M6dQp9qcFmbFAS",
  "key8": "4YWBK2CmRdXChwmh3YiQgruY7Px8TMgx9HNvovtnwgFQjJFPBiKTpUePqWFCqdxU4KPWUdc1foueP1jpwEXMhXc6",
  "key9": "5avtaYCdXsqnJxTMecnb2GeTNNAqDw3UaLiUq2o1NsKBQN9JfPnDXcvRzV33G9ptbVyuk8kpHAyDKa4DNmqdk7sB",
  "key10": "5NzhkRoJT8kqLqmsz7wDZUPtU9JyhkGqo9LQ3BJVnhWyWMbm5jSKrmEhrTASYf3Wp1t6UAkVBijGaSzhYSsibnJB",
  "key11": "2zDQFM6uHh6N45bSS79wU386SfoyB7dMjdDi323EYcLx5PymqPFjiVzQ5vRX9RvEGM3KBZiPmxkW1bPx4Vy1jme5",
  "key12": "AjkQoTRi9N2YewLyYaEoCH7nrqq9Vw5WYaeSmVGHCr2STZgWw7KSjs9mhVQmjUNfxuoGQdSUGp79eMSyq5UAbfL",
  "key13": "45STWvWpS74R2Pw92dQ7vDUAqN6CKvLYfWZQ4Ekw96Q6ELM2eoRswt9Tugk82DkwFP3DhruDQQdpwEbMJ8N3ym5f",
  "key14": "46yKSxMpBh2rbhVZQ1RAo6sAmY6PCrqLB3cuhhph8Zpf39pDBi5rAhXiosH7pX3Yx2W5FJAJnfus9Yaz2jVK58BW",
  "key15": "4vEqWHvtDJCfSKcgSzdkRfV8bFWwBZEYy8RwV4D2o9n3s6xMAfV73dBnoeq2nxWJigjVUuxgQrbUGfXHHyQC6e22",
  "key16": "4fHjrRU2T5gM9mqVq4JAKqZFaz1yyCXsDAGH8hjwfk7Lj91MJm1VcxvRb7p3sHRKmdE36Sn7UxPEKvodQcKTJtuy",
  "key17": "bWHFGRTm6A3J1twN9KQkkPER3dWtNkD1jPbBSzTK2eotTunRakSUmfagKQN9Bni3JazBwFZoLnRHvpUyG2DRcTU",
  "key18": "5Bfmthz82vBbNhAV61BRvjTZZYd3cm1X8QX9CEZ4X78W4C8aiWmyaPtE1VvX3W3QgBZyw7mK393kdKgfGAXBvFz",
  "key19": "3pQaKx2oMygfExBn9REZE4rSM75jmjhXGwmEXLdeJhUKbQMwoELL9y4RaBrf1sru1Ke1z42W21wrUs2WPtBMsXgp",
  "key20": "2Wky1isXgZqxo1LmZHmnia7HVCxE7DYmRKUwijnztZdKgGRGhRXWHXdDEPgau8tFYdgC39LWkNaoTFUoAn6pJrQ9",
  "key21": "czMy4keTMzsBtdTc2USKGT444GuKV6dBCLMQkuifCNNGpXCkuLHvU4YUtVRYyiAaU6hYQwcrrknEafe7E8DKYUF",
  "key22": "2EhvyugCJxGcxu5ktJoVMvdp3ZC3p1sbffy6siEyF8rc3MEVFfrFWEFpWkwkpr9irUNzq718biZMHcruPfrLSueP",
  "key23": "wHgMXqnGMcbvYkpjjf4ktFmpEAqPCE6bJ2AsfUbXM28vscH7sSaUetktkiXc3x2cG7p3y3rkSLUewGAq6zKZaTx",
  "key24": "5u79Z4KkttfDeuXJBFGqJjiJ7Au52BFWps9HQ3AbnfBfFgVH17QUgoh5suy3NEDp1wCPmYM2Cxs5MtdeZXkdJC2U",
  "key25": "K5mdCeYz9mg1jFtrgH5dPawqNuCaLN34f63wcfX1cGaGp52JPQWw4uhtnLiTtH78urxD6jGuWbooSqPuBrFfXQy"
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
