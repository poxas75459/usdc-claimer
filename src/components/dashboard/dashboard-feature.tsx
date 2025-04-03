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
    "5sAavaCZJuXPy9aXc1ypR1jmJyw2bDiJigxAL7VVJNwuuBxAc8kfLcYTZAGWMMKmFfDuCzA51UraNTFskocCmD63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xEzo7A9MefpCBPqDbLGWro9sbZmfhTQR6homXYWvp85q9mB6tF52XyNkTh1LXry5b2faSBd78m9qQuLSh9fwhm1",
  "key1": "26NzriEFFE9uWs1U4DN5Ydyqj7JEoxqAAxKvSitkY5vV8bxKFNEEVkW46Stvg44GAjgQfLrHct476UxgJ3K2DmYm",
  "key2": "54Wt9n3coou5DzFff6ZeHrymnhDWYVSogMarARhFqbDYRGsP6gK24YkDgEBYEN85FsjNxmfZaPF9ZzvumZRcRLAv",
  "key3": "2x9inQqaF4HZ9TbsB3bkQoofq3d5cZq4X29SMGVL215bfXFA1BMSHG3bB1kfsLwpznBTZttJsrELQ6Maf1DSEFd7",
  "key4": "3vPH8rT9gmre9a8aT5Vd7cPLtq1JHx5jJMG3fHB7gjYhzpgG9S3p67d3yDDBuFGZz3m9J6zhFktEKCt28nfWRey7",
  "key5": "2k9BsXDZ8KMJL45MDpv8NZjS9cmr1nX334pnn7YQPo8jqw1jdtbHgZcQ2ERep6oGfVHHRkughywrp4ZiPEUCKbmQ",
  "key6": "4K6XCfKKbsTB4SUoNjoaHmRSxo7hsHRmKM3DvU9WPwbt57AnqLJDyw7voUVCbVop2bjC7N7gbtqB5WqScRfbugog",
  "key7": "3L6i1FyCrg6MCYKZhmjLZkYGJF2e1CsL41X44S3DfQ2HqSBB8kjgMsLiz7bbhn9YAnChB2vS1qVQvADSnXQqSAac",
  "key8": "gqXzbAKtr8wNCQUub1NDD5q7CsXQsCmuSJ3MCzR4MYb2h7V3J2CTzjXSCShmzUSuZ52t3P8cdxdiePmwSf45W34",
  "key9": "jKk429Yuwq94bjmgLfV8HKXyzBzkPrd8HqCATaqZ4WqjV5TuRqnuUDmdr3zyTXsFt6jXK9JjKfe4sGgFcwsFAjK",
  "key10": "QgoJ58bCKrzPm6pE5pgPp9s7GjaKYArKK92ABrHiFVjvC48QMef9xqGyMq6eC7ju4xstdGq3ggHFy8eVLiuAe74",
  "key11": "3mHjBerf1KiKQ4aeCpkQbsc4C4579ZyDmafxFvxK8L26LYcsszypSKuw8ArEPfJtRy4Fk7fsz1M11k72B59s1NQh",
  "key12": "3f9Nsf3y7MUq9m6n2BoyzAAH1cpPwN7uJaVsJfpcTmysGc7es8cCR2XZ3nPNTwgrQ7F6HJLyBe1o295dNTFY7erE",
  "key13": "65r9bzAuvZRugXqW2J4Hcyma3dZUS2b9ircPChNTs8oY5zDVtJXDHwb8HpPesWFAxqriNVfHK3nKRFsFMbp7c3mC",
  "key14": "5Nywq1G7DAUjzoGrSZ2XugeJxe7cHtHbohqwF8jrBu3dLjSWDsAiWW5BjeXUSvTiCsE1nnPpwfaso7DDMvMWaqGi",
  "key15": "Zva9jz5gW4JmNZcWb3szFg5GHNBTRji7mTNvBSHhYRm7pZq7As44CMzMwj9uSgM3EGfmEzEEWUzVGqT6CNtx9H7",
  "key16": "53e72nRT8QmzHP7cd6yDrVqcfWQCgpsp4zSiGHqdzFJPXaUegrq5yvY8CjBhZ22de3hjWpaUimpSWP4hmLf4423b",
  "key17": "4aL97FBuBmpXFQLEqUWqXmJ1vCKavhQfJFzUwCRvUU6fCTX2WNyGNVtHyZVfAUuCmyu6rLAezg2j2dSLTXuNFpsf",
  "key18": "5JzGZtnLQd1uHYrM8KvAQ82Jr955SnuEL5pq5qssdqDi1E81d2KorqaWDSLjAPdpN5YeLDfxamtyNf3Xa9e6aCSG",
  "key19": "21iYMbjiroVfK1MYRRWXRbrWhKRnVKwjKjEh6rVSNpxuh8DfXxydCAgSSuVAuue9CBPtjEunHRjg12i99YFcdVJT",
  "key20": "2FLPncbN4PSsLAawMw4VrzGhHiMtXysz7poxKCw1FywqxEjLA3wz4iAoau2cYX9Gs7uvV1yVdtF7hz3gddCTwcyc",
  "key21": "4B1hqbQKz1sY6kuXB3cXtyFp7VEKj8JaoASbHJn1tQ4z9J7qxW38wDW4MKiQ7wqxXgdELHvp5fGFW3h6HHiwExxC",
  "key22": "4U1gWW8i93b4KS9Ea5sRZzwBx888yw6Kt7uw3dsUrkTsFGE1cwxNNdqYJgv2t8hPGbRMG9VMBhL57avryfGgc8Xp",
  "key23": "3phec72d9nYrbQ8VCXPTv1mKLEprTCMYoUZRh1fjJXKKzArFZmvjFNZDcRi3j91DMnJWYQsSNMumu9ydq5NDinKt",
  "key24": "23YE5cUtJ4cch2kXosJRrLn9xVQoiAEDvdx2NLmS6q6mtfd3aA8RR9Gm4ZkyKkSdPFknqRmNjEXqkYBxCBNcq8dm"
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
