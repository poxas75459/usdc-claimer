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
    "4BJqBW5KKFE3phf6Qgut5w1cqtzgPnnPbYjNgBso43m5WC7BYpQRvqvuBcZtChG4BG5yugLgZWwVDdd2xstPXqG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o9udh9N7BjVg188AgyZeMBTyf9G9H6xvGQD7qVsXLW2W6M4USiUfbEsZuXJ4118kBs3z43uBaE6LHUdK9xRBVhE",
  "key1": "4mK3PUhV6fAdhAJenesrM92WPztebuekku7W9nPriJ7o96kV4SMfX9sKpoSp7GLbUx5md9hys8pnYe7k3bTDicuy",
  "key2": "516338BvrZx5ehJ8t4C6QMRQ4rLXV7r3mocdqJxJJHrpfSmL3AieFtG6V47hsqS8i7XPez1tqWYSe7TiurTHvYoe",
  "key3": "bNXPFiPdkT43smEiLwQhTJFthvRi9o9Kf8xoUPRHktjhrYiWU1MaNV2ycK7atz9rpKzfLALTHeDmEcxtjWkCtpZ",
  "key4": "46GCsbSMTZ6BJiCBXCZSpzGmMTztBJiagC7ecJenKY26KNsqLyuqGvYkkT4yPS8bJBsERuXh2rzvrpZrhLXFPnNv",
  "key5": "3jaaEzwHVNoN21QxieLaYZ27shB8rp1NQdLGC12gqJWgB2Q1AGmHse6ZvLJtCFanDLs6RYRj8qxKqFs952y45HNx",
  "key6": "4jJHAp75UwB1RwtJDM9EnUgMceSxwtdmZHmdAcVMwPCzQVnceReKC1svgUCmkx8A9EuGA6WcDohsM3sQQFNmXjkY",
  "key7": "38UVfVye3HxtcNWKFaAakr7cqzGME3tsWJLGkCohYJe7e9VqEGjdR7EixCtLaG1Q6cdLMGFZkYxKbCRjCZiKeEkJ",
  "key8": "5HUgWFrMHRtZW2EmjuDQWeo7vPhy1ATQ69EwWxBmMoE5KxyNvhzMB5jEfNZ8Cnhp14thsfKQ4aG2rPxQxjYueinr",
  "key9": "rzbcif4V6mEQ9hhEwc1cUFGmSw9gaqJw77hm9oKHENiHPSFnNLxL6zs6WDeYZ3UsrnNRYi7odhoPRn7LBoS6FWx",
  "key10": "4QpXn1okAtdSGt5eWdtGoD3tAkKn6L2kvaswEooWkq3pQAt8JAybcqKmMFxN9nTMyH2ZoJSRCrE3usXZNN8QSE2X",
  "key11": "2fKR9ANTqqPdmy8UmYksNXG9rycbZX3AgGvr3eAQcRgU184hDEZKByHg6aHpN6MS6HYdZ2yih8DUB3UWWfWwVRim",
  "key12": "5jtVSZ5vbTvZAKVfZ5RPnzfFXwBYc9se4h2oUNqZVipw46HMQt7MpYzSeQAgbtp6qk3t6fju66SoeKfEZasCjCHo",
  "key13": "5PU1usTBqQ2jnW61Ma92BcGTcEFx2Gtwi57joy3JBXLqXWxWZ9r2oKBc71gde4Gc3U2PZ4VsFTzYrX9255Qok8DA",
  "key14": "3HhPHcu9PKkC6mhX198zz5UmD2Hw2xg389EM61jrGzxiAjEMszZ6oiqZStPVZkuEcD2FVVPqWSmzirduQ58Y2C1b",
  "key15": "gW8LVgmKmrtNfpuLmdisCZhJ6SYs9iiMtyeo8r84HFX9dqWjuemUeWtzWxgXeBsho4ukowuEVPu3LaFYS9y5dZ7",
  "key16": "4U1kqFvJAEnGvWauRynn4ZZYX82i23nd2MrjMDHPYcTuR3VHETRAsQWWDbvzzyVH2867Y4Pu83gu8zFApWavpV3B",
  "key17": "4uNWKaxTbsfwm3VZa5RqVQBEZf5tBxwMu3kfxr6HVC8iWk44hzMAfYq76VueFDrmw3BwfWEGueak4BZxW3YobBSE",
  "key18": "4rrgkLjt46exgbeCzuY2tiGS47s4VuaoU6vh5cUqnbWqbEYYens9cA19TNKHc86MfqsF46EuHPemzG1cXHZPYf5x",
  "key19": "3Qrn6EweGSCHPbSdSvYxHcy2JcRmWk4k6nQShqSZV34VCrSLQdxmyiYaMA7DLkp3YCcyYByatGjxxdH7wKNANPkD",
  "key20": "xLjvZHMhSb4BGCojUrArKLiAFXsmjNcScWN5ZA7KfupkAQsgBKaEEVUKpD7fxVKXK3eaMSdUbQbbPDWJJpNtKvT",
  "key21": "5A1s96d9WQCHY4DhY5zNTMnzQRutqrWbYxdDpEGj88WFrvJh6JTBcnT8RwB8RmPYMyrazG5zmMZMoCZg9xqqQ87z",
  "key22": "3cSV1NvXGmEecJJmmyCLL8QoReyjMiYziKBTya9swyDTVU2WYY7LSSRp4MwnJCbVGPfwUhTNxMCyYcm12kkRkt5",
  "key23": "d4hbByKMM1FLBhrcSvisbXJv1pMpDYDco4jEEYtm6jbfupSva5S1dw3w4yokDN8hvrutaQqdtuPd5Ay2wzUKEeF",
  "key24": "5eehTxCTCuMHu7uySNTGzQEqCxWzwidUBskAzCuuiqDFS31Y5Bji6Ykopac9pE92SApW6pTz2CGsQJx8nP4XZcRi",
  "key25": "4hvEiQbX1KDyjvPQV5wV8YU5T7JtSJBDjnHtkqvb2kbq5howPoZRoVVVPx8pgQeihuMfFnKg18xjCABmHu874Joc",
  "key26": "jwpCwtNcsUrYtwxYVs3fZZYpgXCWfKu4yaeob52g8jaSprbd7c1o67HG6opNdxMeEXx8UA5wBrHmrisBpNGNSEX",
  "key27": "4uzTEg3ARSKL5Ld2zCwUZU3y4USeXzqYohoibXhL63JRoeHoMGaQrvmdmQnkUDnQMNUEPuk38Bxh6gVmmpyyrxXo",
  "key28": "2aMv6Rvu3dsQiwwdij5hykzH9HDA2BLTCaeTTbZ5CCdU2jyTu2Ap5rAJgQK7fjT4FdwNzEDxXXGMTgULfzeDvHnM"
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
