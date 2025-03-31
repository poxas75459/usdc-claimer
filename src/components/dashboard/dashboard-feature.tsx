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
    "QLo2YRwmk7nTNUp2vmEpDZNDw6bqE5s2J55frFp4hTpYH8ZJi4byBjzFGJYy4k11d6d4S6XsAw25ceB4pJKddyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQx8rfoopPzTkqSGhpNhSdHbBQ12Jdqp5dA5p3f37AJBWccdWTRiKRCiGoEHfxnkRVY5ncrQceFLmYKDyMFGhjg",
  "key1": "47axaN59g1UGojnib8sgwydTPAXxsq1nQ1YgR5Sc8c1B1BiRTcNRc8LDBcgXPryuPw6F9NZsQS8iGweAYbmYnFBB",
  "key2": "57YJZy3DPhHBumRi2NaxpWYnzN21qQi1pSYnaTA2YpWsRzZJymAkpWBJUP4A2sFtgSaMSdHioGDkjFFeSesSG5on",
  "key3": "5bwWFFLaJsWGLg6Phnh5Vb6Dz45WNY77RLDyetsHX3jon34WeAEcGtHxX1PizBAhUV9zge6g38PgXB6h2neGY1xx",
  "key4": "3Z1HcQayutQUShhA6qEayoYABfaN6QDrmMcXYVbbtvXfSpkgn9rCHdD9KkioN1u4pFBjQ3ZZxZKJgAi9kGwykQn1",
  "key5": "3QkXDTGCv6CfivwycYumbR8rqBX36QGbAgLNBTY8xy3kDGQ3iMc2sKHLDc9fSz1uXbLx1tLmvjQMHFFgm5KyNUYE",
  "key6": "VzQrx5NQwxqGudbitrAqn2b7AwsbSUts31qEaLF4DWsGXq5JVPBsNLpTbYYLuVEEwMoEHNWa6AxvCNJtFRCZrkr",
  "key7": "3abnUcu4WacXKAeyqJgPcVCaeR1ZgQ4FNN3eSjz3tNhSqJv8buaxRW8FreQDaVZRSkJpoUjLKidcxdZfd2PBTT6G",
  "key8": "4yRtF5sTV4Tc1oxMD34R4HKCugYNb5qcC5Af5RbzJZ9tRMPPgKSevy9sTJfxSe921KZezC1jFW2yJaf5sVCFWjTb",
  "key9": "33TTSimU89uAbCxf1NStts5Zhcebhqmh6vPJBhWEM5PmYtihZ8yxjQftPJTUvfK7G8fiD2fSZCt9XJXPfeSVafU",
  "key10": "3dauTb94n9vbM2ixkXpjqzdYfADUSRHDDDoe8pEuH5yTGB7fo4wLsp46mdyNZzRcMFpD5Tne78YqtfvvCE6gXgM9",
  "key11": "3uLuTBdKcpNUr9X6DczW1y3FpNHVFp6K7zyPR5Ti87D3LX1VXAEVa9CwCXqKGLQbb4UxW4UoetaHwzVVgqQyHtF8",
  "key12": "3AkMDZLAMnFbtZtAsjxMRkDL3QxBMcFncTkruSLEXGB73ZiiEmqZriwCmaC7yrQHGT4jiqtxz1Lyp5r59b4uLy1h",
  "key13": "4ubctvPQ4s9HincnJHvnhFxd6xQBsnRwT5z4L6mLbaPa3vTUzBCuF6KN7n6njZdTWLZzH5HcYs1gh1dKJCezBuh6",
  "key14": "367U7YVHNhpMZ6vZuyPSa1tQkn8uY5PyXLeKeki6yrBnuyBE2u8ex9fbdXktHyfqtXFSZRrr9woLMHRCCbHrUDPL",
  "key15": "2k5rLQ6soSXj2NQENHUboNQ9DnQnfDsE9f4yNZdQRMdTERAaSJBVKgWLpNpGztp2uJ1cUcWYKkTkSzEtjQQ5FKuj",
  "key16": "24YnfDwauKcqwwdWptz3FmYwVS2abVuUvwCVTy4cWBzGSSiUmgAjnM3zt7tKzaFJk54LenMLv4rYvhBmdYx7M57T",
  "key17": "3nm4H6JA3TWBouo4Q7Fc51RqPDBh8fWCfYL3rLAfGbvXEu5H2AYm8NwzDJoZ1ke916RuXVUJW5vpHGjwzVNMffYp",
  "key18": "5Wd5nLGy9y4VoTA77D1AFj3xrHLtbPajrR1yBLbUiAHy9BP5JjPBMAN76qcoD1d52y6nmbheBXB53t7s6cxgoEQm",
  "key19": "KXWeHGp7ADEzi3hhWnJYxmwKV2cFBVxLqoTjkRtL8inDacF5Axa1n9YZqahKTXP1ZenaycWM83UR4pdMdPzDzXn",
  "key20": "4pBBxroKh8wzyWvoLs5Q47WYxfqwLPrpVQGogrn3qMwitnvyHqY2WNQQ8bftGYs5MW6R56zyzKqpa4epn7SYVEPc",
  "key21": "33vJ2HtjNLLSTuMP9B41C8XSFASLDWamAA1MA3VqBgnw1ZHPmDyBhx14iYEsVMsLAJGHaguH9Pfqs3TccseFmsD9",
  "key22": "22cLUQdoFM4XtuZrtUkxWLUetYuwf2jwHRgb7ywCwPYJ5hCX1FhAzUwvFUE9t7jYFGkc2AsmBPDR2beGwaKrCjkF",
  "key23": "3yB2WjgFuzWS44L8VKBoKfk4wgQfQ7gLTFDecMoXf9YUJPeaM6z7iTyAG7sHLwiKdYCDbshgdbFezDhqgJMVNjkY",
  "key24": "2LysrJeirjEerXHuTGQUHmYW8if5qNdVh8Fyhnsqzu5hgxUAa1f4JM1JEZMuVo47ScWoXEDJAaQ5yfeU748ACtug",
  "key25": "NedVFsaJCCYLHMccPCJVQJDBYoD8ASKCAbFmjVnhMivMzie9U6XeTv4o4WmUHqGdUNQBEzihMLQavxEjinN3nCD",
  "key26": "5wqc9HbtgT5d1FZ5r7Q8zxBjQNeMRYnq2voPxp5cUynTueyHkoJRcpLSghErWkiy6FZaDMng5FAHUhvtG1BPoMBe",
  "key27": "4zxbGY8TXzAjmJWFABTffLri3bwrbgahJ2PxvkRVoDq4Vrfki7YSRKYcsCHL2izR3fAydcE9jB3gZAMx4UidAFp",
  "key28": "2m1k5c7GLzvSAJNBBEYPFGeMaG6bgxegzqqUYbfRGwZNgr4cPSAx7j5PrW5DH9JwGSJsLQhGWsqzSGd2wa3xRZB6",
  "key29": "34cDmZ6wiHxYutMnHrCQfajGYcWXkTH9395bF3YcBtX3n5RjVzKqh7b5U8yxpTNe8fTzxjtonUJao2KzGkjovxaW"
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
