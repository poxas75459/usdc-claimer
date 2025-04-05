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
    "jEJ7WxqB11gnttDTRA4F7JPKnv95r6H7M7DJmFuotuPSL4FmpYqkjXczt3VD82nQK28fTHjuGCrPPfwCCywAYL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBcYokNs8HY8qv2NZiKAGFjFN8F94DT5eRYmJcA93AxyaktiF5oTUvxzD9RKPUD98WBZZY7gPxNSt2CMuRn1oPc",
  "key1": "5pUY9yqPKAGkLXigdLXHW6Q9VwGvoxc6VkXQSd5WRgxwgsHyNeJGz7KDj8pxU2D7sYsnhyvvfzfYBb2cz3q9sFge",
  "key2": "AYEvYnk7rLk99fQRxBhBnaShKjGSqNa32v2H6b7a8NPiVfSfp3L4rhE8dyvApcBoBpT2gi3VveV9JxkyhRiDz6s",
  "key3": "5iLiLnFgMwChKZ86wYjH3DxDaFEpWyaP4xqN7D4z7SAMH53RFbFvcb84s77Q7Vkxh5H6k4m6sygeFtaxZgjcj3tA",
  "key4": "5946e8rrhU7t73HXL9h5TGZNRVPFzuAghFXRMvZjbxjJFugsBUr9uTx7Q21SvK48XWfEcKEtPVDtKrBx4a2qj6e2",
  "key5": "oPYXJ4qbndgeHLNTrpPfeRfjerA9fJE6MNGiEydRoec5e2y4m2MPvMJpwcFTmHYXzPxkRK7z7iHHN8tHPd9RMPs",
  "key6": "34WUrs4DQz7izwkDepSYsLndPA4c36emnTtptve1thL2jgJnHaapiNTmjwbJR3e8R3ydcRqxtvsUMY4C8wn6Rvnn",
  "key7": "ZRVK8JCmE7QBn2kF9C7NycWE1q97EUU8qxGJuezUnD9mxnCeBcJyMbenpg6YApLBmTbGRBRYnJJbG66NtKuysoV",
  "key8": "5CvRjBgcMY96Y5gpLqTXS4vvhdWLFKZS5ARPyPRwts9YBUYQf6HtxDP15roNKZy9UbGVNpUFvq2JHqnrcYkYdQU3",
  "key9": "4LTJL5qDesUu35Pbf8tV71kPdDYYWXUgMBWJaUAoSzmHdVxe7z1tAonnUrE6eKsvsWKsxMbiYgveU5QBvUc5oufn",
  "key10": "5zKph1e4QFR8rr3RwSkT1UHCaNpag2EMp2nr6622E3wNkrGrVtBuqhK8E4NrZaTLPxRzYDdpu8omGvQ24iLBUWhJ",
  "key11": "5NUYtofMgkRu2u3nNKRG9WRxVpSZ1T34yDkRhb6fgXPb1dVw6bGTnGP4Cyiyhweq8weULffsFR6JwdqAKiXD9pTJ",
  "key12": "3pj7PKej5oshvdYEEat7E3R5T5vXRRVzsbRE38Z4gNmiGYqc3zrVR1LP5QnRXA7gvRfCbYp14ovW6jv4K2RUVkqc",
  "key13": "5JycZUiCx3XaFJwCdCr8KNVsQ4oBotGciZxr2nVi98xfC7Xc17JZPpt6T6HkxJMtZT5PHVPKi9aPF9aKuyXU1XbX",
  "key14": "1JbNGa77vjUNRWg2WcmNxYhayDJs4tXq9pNiFY8VhxWMygig16HCpZigE8JJ6TBYAG9MY2vHS7T2ivoYHfrAhYZ",
  "key15": "6eJW9bWSPZofdohN1FvXphpTYkoNJQ7XZhiBgKFid6dxqH5t4dPHziL7inctgmZnK6om2yjKKKQFsHDb2a6FS3W",
  "key16": "5UBuZE6cJee2VeGi3KbMJfgAD9USJJMF45AW1N7eAzKwU43QnVTzBhByZBW6hEjGL8yJ2qSAxmgfXFLdwWwGSLCL",
  "key17": "49EvNMKo8k5W9XsP471GbdTuUMpFb3fYzEwpt2cQZYzorQqPcCirMH92yzaCAQSja8HoWCTBbcGjrZMsXtGcYDh9",
  "key18": "nzjtEK4uMc7isQzmSvzw9NtTVS71v4vkmX6NAJ67FUwcfP3mqnuERHJiWuaZBQEunNhTAJN7hMVuDeo5ufVW62M",
  "key19": "3mnc8Yga19px2ZQq2QQTF49aqKAWmm5Pa4HBiECvTXPhxTPZK3y6yU6DpuAuunSCdMwzDDC9mAmxRJepeAwy4oC8",
  "key20": "5Z45JQVFmaMBGkLHpWnnkCuTmbR1wYHmRqaAGTwSsr3uvwFi727kv4zGwELmH6TkzXpauFKiBsjNwmQ15jgwDDdz",
  "key21": "9RrBZ1kr7CxdKXaoXmv3ggHVkBDKatx8Kjqx7uzhGnGPjvGzye9wqLsHSibsZUHVswuASnUyAVnTL2dENVuCcFU",
  "key22": "5vG3kxeeyxSh578KaKzeGAprR2VitLBXMoQiFJ2ytpUCHZNcdXCmVGzvPn4osXwbUxGmuSX9YqpfmSd8Z39GmLyR",
  "key23": "3R54kM1A5jmBx6PnBjGvbz6pUpffMP5mWUrXVq2miAXnZWUeB27CmgKDyVNMA8xnLSiDT6RMptetFoF33bmnFHsB",
  "key24": "2dwoMpR1ME9CF8k2y26B4YS4ZgYyoNLnwgi48S4v3qxJirY1JWsyhRpZ9ogb4NWbqs2YoTrNU96BT92TGSvSKnAx",
  "key25": "Dvi9WZMaSJCZH7txnLgN1mdJcrSPe9Be57D6TKV55edgVT6h6g5xKqjo2hgF8N5yKRAFqz4KjPTTGjtKFejp2Bu",
  "key26": "5VGUHpiZEW46E4rzHGV5mez9vjdVj3FpfFcisSL1xZMjtDfFKvGgcfaSc4uiQXY7kS3F6x73Mbj9N84NaUZGHVPA",
  "key27": "4REa74K3hmqaVhEoHLg9M52Kxgm2STedq9G6MwxjbnGoGBhaDtDyBqtVwAuAP3zpXjKK7XfBjNk5vowxRdwj5bV4",
  "key28": "5wfn49W9AC5WhWdmY7ZRhKEjNgh1LzLKTyWXGnbapRygsAmP91uKWj4WhoFqcPk4brgQMFojLTeP65StcvmKnesa",
  "key29": "3whTCS7hS99MbdYAmvSgwxWiP1vRncypYbYkPARRvUizm9HCGvy4XPiKRqjFnWuuEDD7uYn29eJNmpQ4ATYot9fq",
  "key30": "33Lb5m9DCqnjMvtx154rhDdGsP7BcfNF7pdrXX5HnbLG1fPTd58cBEdBzouo3yfowLEhMee9YQpukGYsqcW48Ui"
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
