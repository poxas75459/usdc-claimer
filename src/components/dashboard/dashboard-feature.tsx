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
    "4EmhYFXAgttCp7LqucTD7jDTL1JJSo7zJDep4dZf4HCXnJMQNArKiUYypJHVKMM3wxLYgvtiA8qiDqgoggCjmuza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sBW5R6F4BZ9meDz9mVjnCtJbpSPB1JowFQZMNJBgc5zJ3u7G9qG2iqni4GvUEeYBbYW7RBKAPt3oN5Y4JbRpzbd",
  "key1": "5TVZTw36tDkWmXr8UXyGQx23pnXKK4s1KtcwZwmp53oXNDQ62PCbifTWNCivBJWwMXM49zeENN39cMoDWsEqemjK",
  "key2": "58M2DsuZkWUkG6qA1BE91nXYkfcNDiHqxbpzcUw5VypZTp9aknUi9iBXmFMJAdJvhJxPVoMwjYaMdqdgFrXLepUk",
  "key3": "5pjSwVCCNAthP4x6K4CHnmuhFNK2v8PDxCYcdrSkXgJKBkZRFV6b8uw7wWebRFXNhdFiaTLUhef5oUcXLZcmFscq",
  "key4": "4kNckdqsSgXiGf4NF8uAmf4rFA49c9ieE461imqj7smzYqEzbeLyJwC72gfkuZdrYRWx2F1Wygni72SbMNjvptxq",
  "key5": "i3APL2JM17AE7dkjktfMid4Y5cvcdDSg6RwWtH1jNiXC7vaEhxok9MBnbFjEN3z861v6R8vB4kRtF27q7LM39Jx",
  "key6": "inQW8vP3fV3cDkUSjNETBM8Mevq9jcry49XuobCWvXhJvT8xaquVSsyQawurHCzgJFZTYagWZULVBCmV47ikPbr",
  "key7": "327UWbPbGESY4QpB4GRxziHfcaDEAxNnjyXk3KB1xDMgkb6EvN9GQVKKzmCrqsYNKixufu95UXUwtXehJyofBqUH",
  "key8": "2P3E2eqccZwGU8bRmkLZt1eHTGJARVaCRAnZ3pBZahHbmBSYZNJXfbz6xbjgWRT5x5Wn9EAZxZPDM4eXRobnnk4j",
  "key9": "3iXzKTTCBmSMzogK8igD1sosuW67WVKGtc5LaqGe78C4orwoF2rjnZJPytsUzjNzQi7yFGjJ1hANuqYJrXfCUwEY",
  "key10": "2pnf5HsWf6RAAYR3oSjU3UjSioHBV5guSEnKrQJpYvKrQJoy7CzPKAR4FfoFqK6MXHAwmeY3QFF8G1bUBarLFvKH",
  "key11": "4bX6pgE34opPGT2ZnAzXAfohqCboau9W5idJj1RTCMsSCMe7AArzMstAWAFbNtbagHa8JWLiXdpW9qrucTDEfJk7",
  "key12": "XpUcZoaJ9MmaF2Yk5Yo7cHV8tnVTr9NZ58s9PyY5d3SLibfEZUWqWH9poos7iiFrPh2vTSqvhXAkF8NTSvUfaub",
  "key13": "BpqzJBYuxmShrcxdkuz8bXtYfucyskc99XQYs1ZpE2mDAtFDvZBAdjfGbkhuowaoYQGfDMScD1bzfi1teetkoP8",
  "key14": "5Pb3YyvtnAP6YLj7vPS4wpypsMKSnu2QWnQcG22jZT4Rho4HhqMuZf6Epm9oFc6MCztABKAPgUjdDhQS84KffZ3B",
  "key15": "55no4dDr7nhmkrvDg2YKiHg8jYCakATPfT9gfPaa3ShBSq8GP5SJhaVdrE7fELoKAwiDfT8pvUwf7AH5Mjy5Djfr",
  "key16": "3Bsv9avbVRu93TA7SysULWGbzieXwzx7c7YkFti8xUBhGMbgZfRRnPiJs3Eyd2CPCPscRSUqtdjNsXmiRnoE6FBf",
  "key17": "4AjHw1sb17j7R2zT7z9T5bzYghR7HJEyaHETVvihxuCbZe8xoGwSVv5WR5d9U3ZUuVUsfSiCjo3t8jDmHAiB8d9a",
  "key18": "8JrxBF7rHY1P2Evk6cTUY7idhE17XBety8ZtdTVkvGaubCuqyAsapWZj8PauETQRPfgApaJmTJGRow1d7pLuuFp",
  "key19": "3xhBLfztT132mXVT34dRr4XTjCoRdwHL2iZq7hUg4q5EmjxypgBEbXgQKK8upfJ4RiGDzH2M7y3W6EAKKRo6QWZa",
  "key20": "3Ssz2LEprNKa3ezocNsrGBtp7mfKS55ii1JEERwefrGFnXiP1KfXen8sHD8qURd5f8cXkqrWAHYgH4M8QZ8sSCKN",
  "key21": "2pEqxMm5Gyj8xQ2N5ZGSYfoBqd1CbdiZXJARW5h39gajvYGyd1hoHBrHUgkieGuUXEJi5UHDoMaV1SLj196gDZpj",
  "key22": "4bVmkstutxe8AoT7ysScwojGgiFwM8LRekrqeGCffDeSnJGApcF6M4BumATDomxMAp63K2krnNYWgdkoAm7NjAMJ",
  "key23": "3zfuUN93LqEjSQYQ4TnmnVjfb8jFL8xwbwfznA3nLCWSnWp96rGGU4J7NzKJVJQxSgFAy9Nu6uUwUQrXb4AmizFk",
  "key24": "UbfsueLasQJcS3Mr7UDDxQzydJqjA1U1AxC17FnWLBGxh91LXBf3HjF7gwkHDkKSJ9eueFkj3dQNtcspFiwqAth",
  "key25": "4qdZrXkLpKgQSXQpm4QLtqicfxzvmRg91ME3GwYfCiH6VydTDb1roE8GgZQznUyUKeYDPSBzsRmgPikCX1NM7MwY",
  "key26": "5bB76rx8GtkEToz2DMdZSvodHrriP2M2TNV37Y91ZffUnCAc2LRe2vL1BpNHtKvDBynDePje9XKgmHZBdm4BRM3P"
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
