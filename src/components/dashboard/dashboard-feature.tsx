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
    "38gdGZYwPYvYB9id6wMwoEduF3H6zsYfWfzV2CPicZ89EVs75HiHniwz424DokJ4PoU377JWbYCykdCBcLyNxJJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gvhv1yw4QWDzcUhqV2jnBLv2NMoctds4SAhrYESUwa2zNCgs1PjNAc7JvA1fuLppTA3FFxrzg5jdNjogycd71L",
  "key1": "gyMuS3vieuC3yPGaZAvdy69bwyeg98bHPZDvWy5vDwBf62LAL391qqrsTHNVUEczKUhHvaRBDmPd9ouYBAieFzr",
  "key2": "2qia9bK6U7RVCWTdjQknpSVo6ZnC35mXwfSUWSFvEemMFDLDiAKiDo6dZMsnSpX98H9DysM7mVjkjbrmbFGUxG7Z",
  "key3": "5dbinQFtcTXfvfXJtzeTx5p6eqtdJ6xoxQNMrSjTeUDU2GKqJDhJv52MQ9MzCVpJfL27Rqw8WGCUUVxLh5g7s8ih",
  "key4": "KAsN6PA4XeXjuMRk14baF8ZHUxFuU73uDDDkQ1B7Vg5XCXGp6qBtjk5wL1NeASByWJSbEm1dqvTTn2d15tZmKAV",
  "key5": "59ihn32WRWAiU7rh79T1CanneqWY53dADEGPmNhn1WPCjNAT4rXzvgC5cUWso9EDeUt3ebgf4ADhfGYnqbYqnkjm",
  "key6": "2P9JBztHaSKbb4GRHsqWbLEu7pFNpSWGQBX4Mc7E8wBJFiemvzwFX1gXpf7iSqTGrMjG1ev8XC4SeSFpTxBbZASR",
  "key7": "4HNyRyDisT7ULxEwpzwyR4E4vQSWB8NJSpKZJqDqmP3TUgpxMH6nX1yTSDchsdTV85tarE6zGHcptRoHDMj9Mjq6",
  "key8": "G126twGY6mcbnU6AEUBdU4fF1bBzvhgb3BHcCccXdi9cpMrvNpYKjX1vjqE7Eg6JJjRRLULEQNHskmEriZnsSZG",
  "key9": "33ADhkdPaEeGUuSxLdypJESZAao9akJKUeunRB2ftsu7i2KkhugM11TRecKPrT38P8sDgyrNCRDx6YL2HnqHVAv4",
  "key10": "FgjxP49DwhZwRDsdT4eu1jWoPEMtBVDMcsPhswA5q1tB1MUjfsotwGyEPTDnmerJz9ufiCscL5q1azNN8huJRW1",
  "key11": "3pSGYHYdRFaEQ5v27rGGwdXYnFAa4mGB4SQjAAYHZQg8v8buC4P887kK8nUTbfwpqSkMpcNYiUSGwUtfi4LaYGDH",
  "key12": "3oK26QtbMERGqWWSvJAAyBuhWoeS6bEtyEDQWvbD3pBSC746ZrEwTQuPSAk39n7xgidpfrsDHFQYzYBns5QXZCfD",
  "key13": "4ddXGjXn1FWsJ19yhCosDvKHjKVQgFF7qxbfUAY3nLAp9KZptfuJhbdNya1gJnReVW5vxEiE1QSSQhn62DFD1d3g",
  "key14": "P9zMrLmBYiLdtSn3VccR3DSD7W9ZXiMHg6PkLCaC7VvxWeMuBVHg5RJsT8oSH9AU7kVMRMDAjSGSNzprSB8GNJe",
  "key15": "4CugYedhvhLjY2cZiEGbW941R96ga8gzBTCEMzNY37MR3CD16SXTNssAbJYgYAJVk5aoPSNQwsV8n15kDAEzdbEW",
  "key16": "5WCKkDHzyQXZN23kQ2X6b2fapmfxSRwUM5zwSJ5DFoS43T9C6CQeUK2Drbb96oa8z2eGC2gbnwbbvgEjP7SHKyc1",
  "key17": "4JdWHidPn2PAL2NzbAWhfSifcmkyQn3NsdVyGRhh7Qd1z7wFuFtVgUj7utEVYUJzr7KErCR4zdHio4ZwXnf5qCgZ",
  "key18": "5JdUtKBtApMABGXsuumWnhagccGi7yRsY7a6YcYcCiXXTAAKT7jaH8DrGaxK3uXJybDMSEaSVJYt9ZdmEaYRf2SB",
  "key19": "3HgzsfRpg7Yho3BJAg4GeieWbzDopLRqD6yMtWSzAmyy5GpqnCaAh2gYNARNc4ocUtmThryPyhZk7W6ofuAAdc7D",
  "key20": "5hkj65ukYKCFVEheCBMvikeHHGNSKkZT13jBvP3fgxomNZiVvLbwNgLFPst7AWEgHM1xLsxisHmR4EXgXcNHnkZR",
  "key21": "17Xooe8Dotho2QhKxzaiJbL4VuLVkFGc192HhjNCMWgcUfj7jhLgvEJRg6gk9ezyUhHjn5zaDHvqhuPLh6792Ep",
  "key22": "3LQABCnPSJ9SavNoUkNxEn2G68JPRe2x1HK2wdnkErMMnzB2xJk43xEb9d9VjGMsiognB3LkkFLZVQgdYvU8dxsA",
  "key23": "52v8uvkgx6xdUZCh4bcYSSrkfwhPyipEMaLCQFruNNUkkgjv3dDGLQojQ68WS1xwiBmKKZHFf9Tsz29YDoyfarpc",
  "key24": "bm11LsHwZBBh3LcZ76C22EBDoaEbWQpB5g7KAGdvnEFeyVv8LsDNsAiUhXg2mPF4WzC8xE7ygmCYfkveWnywyLH"
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
