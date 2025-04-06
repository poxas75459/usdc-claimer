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
    "3DTWGCwgZAxegCiJyKqrc466r98MZiRsur5zPBX6oRzAdPJejAR26yE6bYJC7XoU8QZki2UCxRLfewiPpuMXixBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8Fcajh1SKSBrosJpspsydxf1jYWWaBqZ6JCXDDhzFxpt1NC6bTMqRu7rV6hQ3x99HkyvdiwQXDFhNXfZEGcf5w",
  "key1": "3dtuJSMc37SsJGq5Vf5CwCf678YR9e8prvxB6GuodgCxqKkoRQW7TW4fwXwepEDEDXAy8h9mCiQZoa1ymCNgMgrD",
  "key2": "4XCpjuuUbXJsDNFXkNHey1iNYoQcKj4mfMwG8YFQK2ht2jsaUVFamvAGMiAjVAJdMqy9sQgQBjfyTkc2g7aQe9zL",
  "key3": "5955pxfznsEACyx5qomXCUvfERB1gMyUTNn7a36fj8JaQ8y7M3Yp7UC6gV5yjqWet9EXZvQckrHX6gjHXW9XGUFH",
  "key4": "3epozne5E7zS2tLV5DiEwjSfB4QqSyRKGEYFwCebeo4sdf2xiwkcEkBECDYTgRK1QHJDudHJqvv2SirhfcC8yTgN",
  "key5": "62HaBpQmUuHvw7sZh3bWtxX7oruxqVup3wa92ZYZhyZu3vvsfcXxWEZL23hiEQrDAvRe3HaGpRsnetuMLVEnaGAv",
  "key6": "4z8dE6PvAj4xTcGXaZLtPsXCHaWwNpuHFDN9a6aA1tzpsdsyVZm2H4NzyDHH83GoofacTpCZmB8y9cGTNtdJt86d",
  "key7": "3KzGH8jSzBNytnDAqeHJrAVqLS3FM5ERCrA22vytQGW2SJk81M9hMiLkiNM3caKW4tTf4swa3AQfySgGiipGASVb",
  "key8": "37t5Psuzd4auFeP4g6uyHxtWbb6eo8pYuaxBVa9JAjjeRAvX5bTpn6vAnwwa3qnUCjSxTVu6bxFmnjHmy45XmFon",
  "key9": "2kACLvNXLjgvzZVK4agPnwEaBkG1R1pwQosL9E5Kmce7MJ4yd6oDCyMbbgKmBBstY4Sg8G8CfwDeUMQHRwKEfh7d",
  "key10": "2P8eJURF1taAPT529jCfWtgNCAuvZsMMHXAMyt82m3omLKt3UMFH2bmUXyrASiLYWiUuEN3dggpZYNCZuzjTZRmy",
  "key11": "676zxgZWejZwVpaWKdmw9zr8duV1Vc8s2YownSdQnAnJX6fTeoLCTmdrLXpnE6UNnXD6AFc3nhtCLnyDpGXNP3oE",
  "key12": "28pESN37j5Q9eEc49mxLRdKNwQ5BNym5hPYm67T2QjVoA5YDixGuTaLGMRXUfS1MZWnHsfTA6G7oWtrzkPhzYLGg",
  "key13": "5SgBq54Y7AFGUPBYvBWf473rRQpbY3tJeBqJu4wQEU145sviWq254M7uGCf7VgLCgXoAKh8twoTSnvkCuvPZioza",
  "key14": "4RUkZBp2yUDYFvCoPsPsZTdjLurv1jC9WAFdCJPskAy771VixWXKEpgV21ZoGqDG5fHtHHA8SMEHjeUVZT3VPLqt",
  "key15": "2KyVJrKYynT7eR2oKJsS9pKvtiPtNAToKSyKxxvveEh8qViKV8hfwqYn9H7SGLQWhocbHdcaJZuAw4wSnn3p1vLD",
  "key16": "3DUCae9D3TE9PbtgQwJFbSFNtSuMX8XwYb6AwbpC2XGsvVsLPirvr6bXQ2Uqa7jM4VQsdXTCcYiPuwUBmnLHPyzy",
  "key17": "4DSweY8JLHfpzEsAnzWuu352tYHAc2U2iYNBZ64zY569ReqQNhC8G6hXqcMG5dHBZXsb8Dt55my48sLL3mp527DS",
  "key18": "3cScrpN43GNqvfwjKhFHsu7D4rDwy58WXPJs8NuXrGMkacPsQqi4pvbXF3qX3Gccdn49ou87c4j3HjvXTXhn2Zyq",
  "key19": "5FqERE62yXRpuTmmgvTsuuWETvjpZAQtSTLN3Bx3DW3cQpyDzqasVyn3QDCrfrpKjtvFnBUAUAZUQwZD83A8GFAp",
  "key20": "3MrWfNgLgtHapPkJmwo3pH8UHF6Vu34w36s1RzoLUEDy9mdtSH2zYLw2MLUPsTWJWLb6KRG4TKgBvpHYQ5eP39hA",
  "key21": "2hLnTFTM4nkjeiTqYEQnJRjZPkHUPUkVLW65rdLGEJQkse3ayQPtsfe3oJJpdJ7nL6yxPPB4k1pMJkdZ6z1yr7cE",
  "key22": "3EkNcHuXFUYM1CWmGT93QC5CaZGbCqECwmQ9FBPRwGNgUgUitHDMxpA5T6CAucqsdaYnKzjwPeJ2Ebfy7hsFfDRm",
  "key23": "2RmEazpXMcPviPDS8MUuLCYeheFX6qZqfeDN82oBVtibCJ8m9twTRtZjLFk49yPJBtwR4UQFYp1q1Xtd6SZemRQM",
  "key24": "2HJ1QzkYrib821u1kzDEgFDJ5sPXzaa8ejZLtR6HU7zGytJNoz9a3xQxpkUm7cTRvbhNVw7TycVC2vNnAeMb2wFs",
  "key25": "3eKfe37nT8sXuM5SKJBMC29AbKn4GhWQNS4TukQCoGVXVA6JnFXdStHnKPA3j66mXXSPK59CSoFHHxXD5DFnVwmW",
  "key26": "oPNHdbVRjbFVL25oEwKVR9mpp8Vi7t2gdQPFZMtuXfQmN75hW8ToxSVaTpv9E5qbaUtAHoEi4T3yMz5h4uZ6nFm",
  "key27": "RSon6Aggxwuq9r1jLLsJ92dFt6XostyqnAXNfgRXZV29qYP3VzHtKmcj46Zx9k4R6xuwu1NwU72ZUMwYHPWvFeG",
  "key28": "5daFXLDS9JvYkCYTtEBVUXBq9qn6AF9HYrJ45pn2mhLQfmeYBQNwEwSz9F6QJrazH6zJuRw27oXsCvadiNcdiiYz",
  "key29": "5Zs3RnLYaafApKVgzvQnriacDZANGAfcy7feUsA6JPXNfM8286gpCFF6tZVgnGa68jKxxNdVZ4xNJ4kJpfjTXTiB",
  "key30": "28guM4V8e2UZkHTDRsuU3hd1bBohMyCzzrreHZfLP14tk1zQDE1YSJFZSW4sw2Azm2vJzVFSeXCc65mcqd1aUku9",
  "key31": "33SCu6DEas5GriVV7gb8gJMP7EkiPNyLvEfXUfp2AZZrTGqgbs4gMsfKaCxnALbnGgSee5HzSmBDaDDA6yq5AezU"
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
