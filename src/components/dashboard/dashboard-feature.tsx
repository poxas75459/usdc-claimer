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
    "3QtbatvjynjtYuKpnvsQ29QLmrvp3wQN7capp5TnNmwY1HwZDNdCM4b16Qdmiz1TpeANQck1NhuGH9P3FmVK3Ltb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xEKNveFfs9zvRAG2Hj7JrPoWzMDk1Ubzhnfbd8yhGn3aBSoZ1LRoW7fj62Rkzr4neGZJNAjmgjNUteMmseEyw9",
  "key1": "2zQMyn73T7XbrEUfSpb7YB8YRmbXfUXyLYRowucYUpHBbRUVQ8nnSRoqtkXpcFnkBL8xwf8Ms5UQ9JhLvbosQCCW",
  "key2": "hQFRc1szeCTbXFBb5c577JcZnkh5e8S4x5PRaYq3rAq55EhEtmYk5eNQ3K53Kqry9tCpgRCGGo86AJ4MxNSXM4f",
  "key3": "3J9G67EgotsdBoXCftbq8giPgTecBZ8J5feCzcbzVd6H92sjK246nyKkzLUNMt219GLZgD5u88U7ymDPENAiqcVx",
  "key4": "4SiicRSftfk4jGdcATX5pkhgpzNfbJyn4nnsh9sFdC2izHRHXo1Y2Z9uYN7utd1ZdP3SRKa4LFjcpoaegrGL27rb",
  "key5": "5ScAvLVKvz5s4qXsBNYsvpPT5asY3bH4M6KxpkzVPdM6kFXNzyPRGK5LMDjAJLr9wyKpvsQ6GJ5re7KQWKmeyZFv",
  "key6": "517QEAGdebMdsxefzufTqiJh8AZ2kVrUX8jYBnSvDkAXTBknsGV5FDguhtNVrEVw5Ytr2XvQs7VGPaEeuxHCck1S",
  "key7": "3JAFXNp6wQzBdAShmyu1foQ2SNP386RnJBgauJ4qdpBjgYdfHWTM279RgDEfemVfsL4rvsZEmH3aZqkMu3Af5dGP",
  "key8": "2oC8yfn1NmJY2HqP3HdHa6JTnMLpYJyUVD6kG1mMjnjXziuKyDRDXuJdiCxpxxXYbkMHM67waZ3FxrSdgdyDQ1Kd",
  "key9": "28SV8XEwpS7FprTSNUQiTpufhxMhAUuPnRvSugKTyAMDd2azgPpPrGV96zX2PDztQ6pRdSxiyyaMLsD3tSsbL1UA",
  "key10": "4b3U6gWJw2yesn3CG4aZTNWvCFsRP53R7bLauvP4ghiRUCj7kusL99vPqztAgR1EGTjcEFse8CMau5kBmvRwqYYH",
  "key11": "YVwkMNGKAyBmUXJfJC6JX1BjMEqa61XDUjb532VuK6ESEn9PdRK1unCfVBH4xrG3wFvMW5AXcBYbnNsAjw2n1pp",
  "key12": "2FhrES3L6jv7gggZqBob4FR3ybP3hoKu8wx1NYUKEPmbiz7NGpk7ejwYYRBpe8Z8ameQ7gEXueA8F8YivKnyW43g",
  "key13": "2Lqu29YgAVrkVnW3ytydvW2jEea3Yn3KCxa5mdoCD6DYeePMA4EY2aw2ukdMtKGGCjFWwe7aGHdzvWfkgZt4rbXK",
  "key14": "2kwR4Z28T69yYc7ymNY4gsLbHWAWUdAc9ySjveXBWs1x3sgtmxWyCZuYuFbBFKVUJkwXK376tCXaXkyND7fsYK5U",
  "key15": "57iHr5UumXVvLKK9D9Ay2M2nLa6ejAo5BAodzcQbfDuRzpqhfHYFdZJQDdu9bhGnRDr7RFzEK5mp8pjdwZ9Yodre",
  "key16": "3TjZezqQVdYiCWWd3V6XR8oBmBLM14nESsrkyL8KrBBvVjF8254ReSRMdx3GtdbCJbgEEygoLpAUNdxGhCPCgnww",
  "key17": "4ZiQSGFfWhwTtQCo3zCwCMitsMb749T5Ez31p3SwXo6zRfLpok2q7Z9qfguFPj6r65xuJk2b7KYv37aocEVJH3he",
  "key18": "3uMnrg9gABgDmLu3VWxnczv8QhVKFirX6aQ8UogrCFwguA9WE9T3cpHdyJoxW2RMARBwxy6V8RSyyWhGM1L5qgyy",
  "key19": "211UH82kSBWfkKesCkd874mgs9B2tQvPG7RTQoYfgraqLL1d2XgkvtgRGiFwML7ELcbCD4FovwFv1uQb8x7VSujF",
  "key20": "2CFSPEWS1kL4mqEaEv4rNYpzxyB8tjb8nVMi8Vck6QiywN3UH7XMKMSeUrDotCA3PPr5FXf1LuMZ7Q1DhwVQUWoc",
  "key21": "3hN5Zm9RiwKvCU8sQ2VBb1aSPmgp2zBTZyrje1WK2rtVipwqRvG5jJ49qMyN5fH5iXSdKSLmSQcvXfj3HNYosYn7",
  "key22": "46KUQg2ATE9Lv4Xt1sLCy13ijaeNkbWHPNa2AgThRBDwLztTNAcUDZNebFHqqnRD9fGrEVmNYVmc2iNa3FrVTYMD",
  "key23": "tK1A5b1VRSQwHDKwZWfDESHWn85b1GnmchY2gjdsB8HWHQvSsVNHSxQEhX9eAWpTFKbtt54NxU6e6oKF3uWmJEQ",
  "key24": "4JxhNvhaydEKvQaxmNyT9HYXa4X8kmM19UUP55MhiVvvSCqiQFCym3VgMSjDi1GDswGTJaigxviMRcdSjmL3K3Fg",
  "key25": "5FERXkEJzArHgWeFifETbHL5ux66KfAd4odPBMYGCBpHuPKGKeDunMA7aguULfVm4MGSyvzNw6mpZvapkx5j4GZ4",
  "key26": "3AEQmzJ1JRfXSkc9ph2BBuqGK1BgMPrdmF2XCPMAZywNu7fMV6qvriogTbLbA316L3UsbeYsQ6NrwKsbq1zYkF6A",
  "key27": "2Y3qJ1DVH5xcppJinAjXebo2aeV586oaHU28WVUEzYTV7b85hE45nApKLS6QRpYdSm24q6QZBmPXooK9Zihi9PNw",
  "key28": "5NgNqNiANEnCzqXur2NqmMKPbmwLXxvyZbp9wdmA2GLpaDkCDZahfVssj9g3kQxFzEBhCD4a6PRTrsmcZdFK8qeC",
  "key29": "38zRSRfk476jXg8k65B9tHbb6Zmp4iHPjsKpZQsBqbX8kP45xY18kifVsnZNZ6jSKKF4oWjk1VMCci7JbwaVFSDU",
  "key30": "A2Wu94c66udYxGnPUaeY46fs9LSFTagfEsy2VgUDPhr1XZjsMSqzSaKma1o7Lt4mA4Bwd3zGcp64kqckeRsimhc",
  "key31": "5k7TUkMQWRXpjahwhFiGZLiYZ1mJZaUEyi9jcCjcDPB4HYtC9jqhTqsyzPZrGVV76vhoQhAwVXTV1RuMvhhGB1D6",
  "key32": "2RQg3o9nZiFAbUZTH9s4XmCtPuFrEqyTCS8vnvmmQyL7xsmGm97uFkRhcKSYPTj9m1yuAx9jsy1B9aw8heiTe4uY",
  "key33": "3fxy7TTQJgsKa9CrdVtLy64EQRRWdGHotX2d9nJcD6NBbpmc9xaQxxtraz8FkZXzHKyjtCXHFzBRzqrKUH6soxZ4",
  "key34": "4HDeiQhdMAKaKf8yvGQ2nmeE1cuT63Pgux8teyjcXzDuhnUSm8oNVaWF9GAyFiArAi1GJemVpUoZESizd776VmKX",
  "key35": "GHxTtATPnLwYyiFpny8iBU6mDBoZMenf6ZUcGeBGVCZtJdzu1XaA4JXz7N3gEwaxykyxbPvMdcP1C1vogjMQaku",
  "key36": "3SSWSr4nQEHhU2d6kVxzqgWjaXaGePb8b7D7VoBZ1p9Xd6u2sAaV8kvNGAy9WY9TaBEKecppWPLNx7pb22pPKx2F",
  "key37": "AD3iUbrtzZYs1ozSYv55iyR5yszWFBa8CMj7xJzQ8PikoGwXdTg5idrjtdpML6c2AhquLBRgGAZMh5iY8mZ1Z7q",
  "key38": "5iz1gYCgtAFjfo7hy1wajJyHjqsMoe3uyFWU2hCz3yejYNFzgnYrutUrehokkcMZS5ocQk2VjUMkg4jXRtKxfKpe",
  "key39": "65HZpnU4bP2xeAvD2znyABwKkvzWUJKXEnDGZA91FcMtvjBHnZzyzYcuRyp1zr8B5fLtRL2FDNqW9zfuSTV8ZqSJ",
  "key40": "5QMVY27k9P9rLwV9wGh4eeWD4XQ4K4CfasN7nQn8EfvecXUtxfKFzPGCZEEyuGWUfihpjXQ3dsX2qYbf9oCQayyR"
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
