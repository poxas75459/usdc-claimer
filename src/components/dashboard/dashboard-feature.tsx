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
    "5Ki9fUYUrudPdUEFgxKVCnd8BegaCwd4GzAidpyUVEwRZMCSM6G4FRomPQbETaEeY9w2sQDaaweMmcTffC85gUau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8q9crRoB63VcnnMPDP4bFGVhXDe6StUXAr7DRKkZFDRBdG5oPXdh2pPnT3Yv7rrop7Vhy1LMtxmHPV5wthdLU81",
  "key1": "61p2hSw3mvyqiJJtMg5iVGTSMCpUpGv47BNHE2N66q25BSop8qK4KCmrNiwmwfSufdw5wVvDQkEnjyDhe9xmEaUy",
  "key2": "3Goo8JoRJNyfNgxWRu6ZcuwEYJ2X3LYN6yrjLPcMaUcPqKV9gtgSGJ5q9khdvAyNo8rTVdsfdFAvk8oRRL3otesi",
  "key3": "446EFv4jQyzprvd3TKDZL2tJLqQwbRavB4okT4E9gozXz8JNUpkzgS8QHrtsbGvkhpY6SLEDyRWwxHYjBfTo3NXu",
  "key4": "2WyjnwRfoUVuuzookTWV3xKVLCmYvJSLa3byEmubx7mqTi6UYoPeueyAdfU3aXeBPcQN2NcecN9HkwR4SN5G5Mzb",
  "key5": "3Et2RBsrVQNpd9puW1gHeVae9wfvBkHoX6hibygTh9wSchH6YqDauF8w1qziJboXpGhosPnHGvLbEpWiKe9ymJhK",
  "key6": "37fvj54NVxGCBhXo4RhVkLFnPSkKHHXbmZNu1AfDfTAjkPZJnhDKRtDVK3f7np3CyYSNnCYcvfR4ChSUsBFvYB6R",
  "key7": "2wAB22tvRrLAsu78QnAZ6yWwqSyaVzVzjzZu2E5EQLTGwUpKnhnAnoec36wBVKVkc2TshgMz9EenA17k8wrUB5ku",
  "key8": "4kj5XGeYA6j9wYSJEk3n3ByC8JmJ5FZ6rL8nTYXTGEC1PiEuYtAU9HjESA8xvrFNnLwysUcWpvdb5Rs7QSgWFgJA",
  "key9": "29uj3yxc5ePnSTxtWZiiG7rtE52kcHKcAnPbiubQpgFjUd8vVYzatTucDhcKDRfCmyxm8QQPnd5XR5wTqzQzPP77",
  "key10": "2UC3qBZvPnKHdGCfkGnBYxomBgFR182TCB7YB1g8KRBdVoZdsHnDDfT8aLv1QcECncfNyswEHpwSt7HdMiSqu41R",
  "key11": "2kuMvbquJNXMhPQi3YBsUyJU1vgMyTCBbCFC7o1GQFF67eP7SXvxeNGuswFxBtzseR6iw1YMTGq1dYkFFNtv8XGi",
  "key12": "4jXjf74TdamxnLvwQxn3xJX7fn32bjXp9kKezeYVrMq29Xdo7163rbJYjZW3W7mqpG9NgF7dsk8zXSvicbbwhUaw",
  "key13": "4H24qf3e73vepzUphRKFD8gAmz89RASpLs3BTmrxoLuAs4TpmyajaT2aGGqn9UKcaLwMWZxghkwxZVfe1te1eW5E",
  "key14": "S2RutbmvunJhMUgQQ6xBB9jCziEQ3BgAz3we3dStXAg1AqFd63Sp5wD9BQdfYHgdZVmetwEkEtuD2q6k3LeiFvu",
  "key15": "4NqZ9DVUSUsKHTdyYTzbKHvXPsXUu4ftyLtKLBDWSH9CNfbY1JZXVRfSUvjV5P5BFueqKWfunEiqd562jNozFAVj",
  "key16": "55jYSRnxez5VKMkEt95GtjZpLoMA4K9ZETLDiVQwYQgNzVRNNApkSLYbVyPcoDRbrsTaJVK97yfogQEzzRCBALze",
  "key17": "2xnyKH78cQevGdvbueEvvNHsX5oCbB1Mf7hXQZzsrqQUzaT6RvTTKL9JjRnag3SZRrTy7qqmXzw4QfS6yCK1a3VF",
  "key18": "2zCRSM2Dr4LDV7eAgfqnjxeWGZvdfZcbMMSeWqpxfR2WiMu8fZ83xTk8PgN8tvXTeMgKawE7Rfr3iUoQon9fzcKY",
  "key19": "X1wbHXXUQE51YJkYrdBmGhW7Rjru13eL9wgH6HXwzeAVcgcrAJ5XQBKJgbUfn53CAJNHehJo6TG1S8BZQCsTait",
  "key20": "4PomZ3yFYUsvWHJDPhGKnSCiEGPjrswHhPrp6jhmhQFZ1xz8UHi7rnEpsMfiKsGNYCdrLzbcS2on915S36iF4Swg",
  "key21": "2cu3wqaMD2akDMFQ9F7QPdEKGYeu4xHtfWatFu8pX7k5wYHwAiHx7ZTZsLAV1RsvsEaL2yzv4pqC518fzB5gFX6F",
  "key22": "2hwPr2ru3pwVGXsDkiA8EaWAhrA9S7uAwXkdW4mHCbLQcaGkzp8ep8ZycotZj4gU3BNZJYPErMnjSaDaAcXPPWVH",
  "key23": "qKwhpmE42Le15JHqhvpqvsMS44MpxGKS3rhfeJfiJYwD6PKfSaBq4rfcQGa1eHFxJTFR9Srgv5ZSyZ9exVVrKj6",
  "key24": "4uVbuTh64FHAZDNbrH7tFDMwCgSE9MwJas4UVGQFkcCCKVkZkYagkYkScAGMfSieKvh5xgAjjK66RPqjBmnQ7VWZ",
  "key25": "3Wq2h5HhZo1MRex6tfcJNPvXJ3jZaSSDSg5CgxK2VdmjfMHpxpzNTUf2ynYKUjykDHQ8iPeYKZZUpxfhDMDQB2D5",
  "key26": "3ZGqP53tg2p61qNTg6uM19tQ8LbK4q8oVSM8qXn75HXGmkeWp8sXanb1tDv4xmbt3mtxwJmSXov9Nt7rJLSEQdBg",
  "key27": "4eRqVWiA8RSr2jhtojepaFPTUsSvLcRLYdU5ErLNrbficqnW69ciGtsMkgTyeQUMDLBmdQVD9iQ1PXRmWTnrt8a1",
  "key28": "4yfSYzZtoUe7FqZ538t41vVxdrHn25W78eaaiXv6SCkVyDxEi86Xr6PzKEw6CfBXDzE6bH81s5ZZanSKuDNBz2ca",
  "key29": "4rDWwMcobBWgBuWeEa6XERunyFhHJfKf9M66EMN51Jfrr53P6ictdMc2odjVvFUkQt7rVmu7f8RyfeZEXSkRxbej",
  "key30": "5upJWzzuopQHiduQEJPv2SerJUL5VY7GXtHUnauLPR75x9Cs2e3Ds6aU3xQ6QhfVQHitW6pFJ6WYynkmK31pcYMs",
  "key31": "2sVk665jRqbxiUBepQnFDb8yHvqoYWePBhAfFyCKvpAL8g9ZXo9X1KP92Ztr9xuoBjFaQrKJsytmxZb4UH6D4VyX",
  "key32": "TTDvetcz1RcrEoNwBzoCxB6x7a97s159hUhx4rNDD6Hi17WtynGtcpBETfgBSoJHzBHSQ11uMKuJc9bDLYNu6gq"
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
