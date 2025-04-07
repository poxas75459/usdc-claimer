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
    "2NK2f7eVdFxNUVqhjpNcMtYAo32UiGcZeZUR9w4jfLh7EiCWeNRmntKHGiM2LW2DFGnJXy62Ss99sz23TourRDEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AgrvxCYEheee6nXNG3KaRvo4Qe8VJ17PZEuJbvPEzRz8TNqMo3qryVhDTp17eAh2wDNpaePvaxTsmLFTJFubeCT",
  "key1": "4WzKFBmvP7weABPFJLrvrRtfeGxZeC5XJi4k1QUQN6eZPU1n8eZzuCXKFJfk27K5H3nx6A9oiXxpH9iFZMg93c8T",
  "key2": "2TYu11Scaqpmrfu5bVwjPyoYKw3VWEaT3Ky6PPckNtS9AgVMEbkg418TAiB8Ln92sBnyTw8sfdsBF6hRA5wWe7B6",
  "key3": "Ff2PvpYFt3Fp4QXxbVHGzvGd2DB1gzHdc6z1mqpXMcsYtpUowizEXrzgBnjgiCTkhhS9Po3EWUUvKBuhJ1vuZg6",
  "key4": "QcppQc7Xtzc896Agn8VBuYhr1mLujiVp1b9YxFQxMVeKNGX2rYQP6qCiw2CUXL2ijwBJFPgTgT8gSScTgJJLsaD",
  "key5": "4GYuZZG85BLMQV7LxNKcpjogbBdLqaVchSG8KsBjsSnFTCtiKB5FY2TGe5tsEeDdHzKVZs68AEuCVSDRnJD1PB5G",
  "key6": "qq9v9JpVYZ6XHK8a4KoxqVppkCqYVbsCnLGtj4zS6gs4fKpuUNgUyNBWc4LLBeWpqLvfz8AXmCECv6cPCH9cfXk",
  "key7": "tAHjvC4wqfF6hUDqCBajxFxUfT4t9wurNMEBBp6YLvhX5v4VaJskJGw4uJYim8rbeajWUqjvP1gDXy2bKLJkDjD",
  "key8": "eBPDerYiibLsRuTJMu4UcNuVgz25yCaL4ssBY4jLQJjzu8Tj9btifPbsQMK1dasbXihZgbUQHKENN36RRSzX6RC",
  "key9": "2RkL4yKkpgtDxqh14oaQt4ZWLJRoWWVTX8WN77iCG5UyMsCbXVCMGP1K5uqmzZXeNyCtCob3cGMBFksnWzHipjtS",
  "key10": "3UqJpEfFERG6XaXuSbH1ZaEpt9FbCGA65uPx38BBnoDYgVj8FPHH4xZMwpBPxdoZkxP3psiHH75DQGXPFQueKhS6",
  "key11": "3sBkZyfMtQ8H4E3FiPNXj5vTX9RGHKBqrkjvkmzpFE6qK9LFPDuJL5w8d22VuBKzwE8cipRfqqR5unnH7bipJ8V9",
  "key12": "mxzV4csUBz36SdSQP4AyMYvzf9GGG9kLmohDb4fdHLGdpkNorWDStdAKQ6gH6vaLqizus1me9qp1TRU77zRqHps",
  "key13": "46tCbnYGsdqJ9SwChQYmLA47ux259dHpWRTmrtRgDNfxPw1k3khrBF3vAQMGn619RZjeeaM2tsDHdSW7rCJfiUPg",
  "key14": "2aPZVEJKRvrkvyjEm2gHSrgUki3PfsEhFqneqZSscvnfvBaG69JydwopZsmHpK3YEten2agTZb9ua9Hps1YDGCNN",
  "key15": "4nKSwATxpNTMARQii1b7itcGszT3Xw2LEQV5uRPjaH4uAKWRXJvPZEzfcVDtfDwCDVgm7eBALtkKoZzw27cKVYjz",
  "key16": "2YPo7xoXKR2zCZKv8QmfqMTVJgkhHz9fB8SYWobFBmk3vtSxTcCJukKEDnzNcTnHQ2gDKTst5dih4936f5YcSvs5",
  "key17": "51iF3ahyFCnxTtoGv5m9tSVRUUdo9uxm5BfZEFpvGNwJTN48xLxa4HxMvpF1NK3Zsb3o5hZCm9pqK9HcRPMU7LEK",
  "key18": "4rcrgLceT31nBC4omfQ8inZ4nRxp74pZeS4yLVZzh4VHdQUXJQoAofkmiAqVSWpR2b5GiZQxJNteVKCcij3mhCWT",
  "key19": "5owMXfmxq3M21mfem3HihzEwor5hS94yi3r4U9Ex4NDw998GAdPJv6KpkAWAuozvT2yTjfiJGopo6u4ZQMAuppDs",
  "key20": "UuPgakmZMLBxJtD1Xwi8EiaEXSocZMkxTYkyz39wugxUu1cDie2WboZeSKfVzpfqhgoUEWbFi1dP41xsSWnD93j",
  "key21": "2eBRpUs1nsjkr1TXqgYCgx4iXwCQrc68vk7VSHz97d65zwY4qAA63qpD92BkQYF5fA6o3DQ4bFyX2VBZQuNdEUv7",
  "key22": "ZvXvVZm7zspEFk1p7MT5NBjRemmrBYGCk3wXXm3LLksmpAwNnD185Y77FC4smwM4G9MMNSLeerGCjsKxG717sfs",
  "key23": "4dETPDFReoZ3JoWdBHsTZwyvAd2b8mwYPNE3Nq2rxK825dVbmbPttpBV9gZgTRQugfDye8mtooQ7Mf4KSfpgeyZV",
  "key24": "45hZYBnPqDqtvUQhNboA3U1R9Rk2PFSzPZLXwW1845EeUivB3g3Kvf8M1jMo5jZFuktp5xxc4fQy5myG5CoRbiCc",
  "key25": "5r4aVWCJk8hhh68BzZ26mhP17JBh3jrtQo3KDbRwN1ccnY1mVGRryP1icc4NQNqUY9XPdGCFnNMeJmB3xarVGQwr",
  "key26": "2XtNXsDpJD5p73cn53WJSsYoLxqM9kjtXEQ1cAhPvcfHBAJHA6r9StaCpB4DsBsrmFMvkUC7wMoC28qrMfvcZJRy",
  "key27": "23qbta8ctahznasQF9dPKsLvUMj8c6AYvKFxqCLcLyggB42SWNT94DHiufFdjUmhVHZEtqFdM1vYNnbQYjDpbYtG",
  "key28": "2qT8TboqjdTSaBHnoa1wP8LqPToZ7fRDS9xXR3Jbc3GohfCBfcDfRPAcTQpRYP1qPhp2Nf4CkBzJ3jkaJn51hioE",
  "key29": "2uKq7oLYgg3nYhheEcnye3RsR6KQQwZDThLvjYcXZtf8QX8npjuThL5TCKXN2XnDPFK7yHikWmRn1zTebMFbECdF",
  "key30": "4tA7rSD8G4c3PtMCYh8qA6yCdSrgBUBVp88uT4DhVNPETWKWJVPFMbyztM6dKzT9uHKV4x7rpXQEFxvGyxH397LY",
  "key31": "4eN2EVrw1PWvW4f87kG1gC1DhcupMGm4D4SLWvhNN2tSyZhZ1DFa8EQKiYrgKQogR6HJXT1tdRNv6oQjfhWRzvua",
  "key32": "4VPrs855RJGqvZcWzncLoe4mkWBD9eLeFs2eZT9Z6gd45kEf5ZmAB1fC6pYBgZyhgJpBUnPTWdc2K5naWxbgbDgE",
  "key33": "2uoVu5S4VXyA3yMhokn3TWd8pjPbL55kgCqZCZK2kYUdvqXzVi1soEX24wLH5rCpqgS5AbyGxuAYz1BbEQKuwL1E",
  "key34": "4CFpar8HL6C8oJxLwtuoCQGK8C3e83aYk7qRyGPW9kAUVLwgDC57BSdNwvKkthyTZQJhzNWarLsLDR7RWnuJUtkW",
  "key35": "4wGCeETA9jYaYVp1hzttfCv1sRAqUDwogEEqcoqXaDGgUm5nj97GP7gmhHXYyDmbPCMPtELcC3B3bJLS4pfi2V6o",
  "key36": "2Mh3RRDooo2y7UhwwqRHgXyCAcYAn2uxQszXPsfn6CmWGLquW1rKePo68vCKkReuVNugpVKNHwYrB6PaT7NR5BhD",
  "key37": "4FVmnU5UXFyRDLdHnJDvqEB8fTMumYMTRp3rfMGxPrvY6pSuzHYae4bvYx5jdq3NvCZqtw161e76j3VZXsMU6q1C",
  "key38": "rVxiTmRN8sS6BJVX1VN1KSzXeWnQf1DaYHwgP1pbRqty9soGFXi4YkDKYhoJedueYX6EdL85dFSJRrpdCtD7mbc",
  "key39": "3g1srh8rKRBXLJLvw7FWBY1n9e2iYfFqKZNQhFDLdKowXDMhrhvqzSqkmGd5ha5eBWr8966i1iD4W12quoYVGkze",
  "key40": "2bgjxjwNupdxSGoATVMmkEuQ8dnGe95JJ3TyLJSRMzjT35X5QdGxCE2bzXqmHhCpaFYtorjkZgBP9kAKnDaVkyai",
  "key41": "2pjNQDqWn4mYxHv1Pg35ewoFj42niEsWuStijpLNNYX7JrX96VXwDVFf1faUMxoh3pcpg4aESNnfzELw9R1qrsTs",
  "key42": "592qnPzgDGCAYsNPZfqtGDgVXKudh86o1WegzMJ53DNddW4A7G4bNBsb7eowsXgshNkKThkZn9EnxHaQEh7gBYW4",
  "key43": "35CU8iieCwTqtPu1URhaVjWEJ8t3HBJ8XLX96KTAcPwsQNKZyQvuv1eV8DK7UMNzLSMByx7AYzJAcUty8Dz4HfAp",
  "key44": "42dhyFErDi5dPKjoMiz3wEfRoXiA6sAwzuz3qCoyZN3VcmiXhJFZnM8JG3EHM8CLsmHod3rPgX6JQSpfZMDpixQb",
  "key45": "2BZDASinQkzwz7WMn469P2NU7mj7Xe5Qk6vm5AMyaKrxKsafc656yrh8hDNCnCyoJHXm5Kh91H7W27BrQRVgxuP1",
  "key46": "5hGRf7pPYK5weHkQV1WCSBxgTZbspPhwtBzh8gWsfkVQLLxtKpYDzEGryrtyeZJm5GZbyzpBXAqAH54Hzh4ZbZ39",
  "key47": "4VssBwj6bwfQ7cCnWRTmiLiLTXBEgGooFjcU46WjiUZFm8xdL4eg6G31TJAs2Ggbg9gtTv4hPGSZaDA6wiQBYRNt"
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
