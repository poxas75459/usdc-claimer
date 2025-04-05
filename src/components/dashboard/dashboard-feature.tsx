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
    "2HYooiGtudGDqocGKoZMuy1VyoCR3Z3nJp2VC8s5SBoq2vEkEkW7kC5iQYidaMvXeFALet1NLgwrnohzT5SSveH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BcmXKpogxXyAspGt6Dgto9hV1PnQLbUZLjmcHpPPXUoQXdENX8tM3B13RdcX9pFMGtyUHXhE9Y6pnqyZ653Q1a",
  "key1": "2KgpugbareyUEbTvhM1zCQhNTq59Gv38m7v7bfAxqHuSAsmBuHm5HhZGisu1c7KLaciMKHYAnuHCGnXC7M15sN67",
  "key2": "2wYN1gASwkTdYLmqvb7SR4j8RXYk7Uy3GrbYkn5uGz6fGMZqdrXJ1xFB862HqrL1kxCtV8zCrnBzpJAJsSnt3uxL",
  "key3": "3xXX15qodnYJCUFYnh8xkfGYW9f9BtXS9Z8BxcU2VLtHqQfxGf7hNnKCNH9Nw4FBhdHQFyS5NAqCsBnvMG4FpubX",
  "key4": "2BBqT2cXTqY3pASbReN5LN4XbBdAWvHU2mG1GzsorUy7Mdgwg5yvmkESbnJymxH1yg5FLPYptapmrK3dkyMQga2G",
  "key5": "gub45rMXjekXTF56vtKz3fcjDJnQK8D2qMD9B2dS52K3yHo7C1aBB9MzjdTa8ZWG5op1e7zTDaQ3nGsjDEpk6qt",
  "key6": "4FJtqVTp2vkkrEcGP1ZqdkVdYiajCvJreh2a861xoSE8MufxvvwS1Tb9oPKwF6sckesyrjDR6Rdap3xQ3Hv54wfR",
  "key7": "6UuXSn7RJREp6KCt7KLQZ6RP1FhUfokK741ejta7Qb6nUWuseL7A9qPwDNbWsHLLdvgH7N3qRmDbEqU81etH1Ln",
  "key8": "4xJyPw5Ce6qYgHPVfRtc4gcjPTddWmY3PcjX7ksR5VMMmsdPdVoHwiiXvLXEr9ft813P21FiMT1dSszakFoi9A8a",
  "key9": "AVfL7cWNPwXrBCjVbHnLEGegL923riu4z3AgRXExgvkckPBFiYWjd2ha3PjhjRdHwfxSAm8iaviAxKsN7LxffaE",
  "key10": "3DUiYa1Wws4suJPEoCTbV5ih1C76CtUDtxnGMJKDPHunYU7LApiemuZ8Zs7CVDXFeX7DTbWQ4bTU8vGDHkxfh4dZ",
  "key11": "2kCafFcSBUMeiJmz6ZuDw9XFKS2GUKegzjPobLvVyBGawNFQny4yY5BmjAaus7PMitfyjnRY5w4ExZPPnyG4BqRz",
  "key12": "2PqQAzG3dRoSLmH4AiEVwASkQRWbo5SVKA8GBEmtjEZCpagsygjEr6GhD2NgcsunQ8j45WbrDLFDtsFSUx8Uaea8",
  "key13": "3ZNkX4x9GJFHEWUAPb5Q1UbPBQfE6gDsEbQkd6KQ1Wy39nk7UioccZzbQTNVxw13jYPHhUM7Vk599Jmhu9yrj2mY",
  "key14": "3CceGCVm4BWh66VggfmnqndPQ6bxSPPMQEYc9nwmMhT2afau41s88h1Eqqfp8yQLLbG359ho9B32J26LJ8d1JJXv",
  "key15": "4Pei4o9xqbQPtohUcnqhCWkadJ87A3mg8x5ePCGAsNo3fBVH5NDAub8xVW47ji3feoEXWw4spwmMUFV6K35aY4jK",
  "key16": "4GHJFLKV7v4iX68WU7oyt1YS2qjZiAEw7EiZV8C1TLnsfaSRs4r75oGjc6r8sQwxejAFPR45PfEVnRrTmDZRTsix",
  "key17": "44yoHfiUtwZyCszzYdAHKa4YEZcoddzyKTRr7uppQEmhkoUKNTWaQwbDgRhBqd1LNxQqYrW2RCq8wTZxj8eZXTvr",
  "key18": "4927QtS6Ls78vFeevq7mrbx82MxTbxi1BexBdbZdjMAZvFpuHXhdcQtMVFnPYAFCdquhLHiZ7DQtf6RKdiaJzfCE",
  "key19": "37eQP8dEn2KuCXEb3tMK8vXCPm1V3mD88UxvvSYp7y6jcfoEQ9LPKb3awgNFiYW9eqCCBa5SHt7VYCqYM5UPwuZj",
  "key20": "2JbacVXjXZZpCKaBeWcUxDPKgX7TsFkQBZNFTsZ2cCjcPRSmcDa5ns9uSng2UMuEcG9p8zbfzwVWbzcTKN1dY6CU",
  "key21": "54Dn924u5LoL2LDondt51q7aTQ2tvEi1YNqqTUHKTeU8wjBiCvfBGMNsHGk6Ggr5mXh5aZgtPGMk2VRYi4Ypgmgy",
  "key22": "3gfjwHyMWTcXBZU7ChkDRbukjgYSR9Vg5mn65jThVMyRKNVkDHzVvAkmJ587GERJhGTs4Uo4MpJUSxFTpsCJcjBW",
  "key23": "xw4jWUZLtZB6SMWBnGnrqLisy1YXkCvp69p5u59r9QaFoQZ67ci7LHZHiLgf7ixi6Bc4gGbHvQvdSriLr5ak7A3",
  "key24": "bVrbXuRHH495fW2NqGvHcHdiwkzjueMakq7cqgLoTiCdzVWmR4wwrTcykvcMTWWKPRUXYmaTZ3pWE4bHZXuAx1Z",
  "key25": "2x1VfQQcXF4aAAWUUuuh8MGp1BpoVLyB56aTZWZ9oPKEZp7fyi8j5eA6r3g6aemDfG1kpEz5dHhSa4ukJUxuAm7P",
  "key26": "5bqAs6FEnVRAANrTzFCbxZ3ZXZNBfKiHqvEA2trxUxeaeDc3vKjS8299bWHEPUBueG5W9Mn8XN1bNx3SBkhaMUMK"
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
