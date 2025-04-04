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
    "peafas2Qsb4KXcXGVmfrvxxn2jerqG8uKkzJTF5LQxG7XAgEvmrfPXmcKEiDEyHnr1tpvF1cn8XwAASPoLEbghZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CSG4b4cypVXkfE7i1huGMBjhf9gTGRWT11ta24t3c8Hk3Hwms2EgoahWisBMKRUbtdH3uTQ9H7xbBUYqTeM231",
  "key1": "36siZxh8GfGz1Xfv9RBrXCpgXbXpiKDHXGr9XGKJu825RyAVs4U368QYqAB5HDyMR3nM9p883gCzRmK3ojzi6a3L",
  "key2": "5rJ2Mk4K5E6783PDxgtJaprxAQ4sjjqbczDY6rYefRB3fVVqSXpLRhueCSnsmhqKMJZUNN6F3k1c9UG55P22egXW",
  "key3": "44upt6jdEYJu24QyieTG2vM5o4QYCLzRJRHtZv8PK2WP2nJAQKi8woBnsmb7nLN24r8s9TPPcjRv2fy7UVguQrhj",
  "key4": "3tXGKm7WtfGUxE3aPKymJtVSM5pspVN5RkFtAQb8ZmfXYxfABosiqMpp4oQt9Z2PwivmvV54LKLQJFuzEMxa5fyv",
  "key5": "3dW3gy1yY7uWPigVsHf2GHKpr4kxB8xoJFMv4vLZ2mG82soMHd4eFXmaypSjiRC9b9DgmWz8cjTVQBhYbGS946b2",
  "key6": "3qAXBSpVALLK1TeorBDEzEsqvbGdyXXhB88U6EcB45aqWbBaWRb9CGYXwEKjNnfgA1i8CBwcTuwHV8SS6mewfutw",
  "key7": "3WbptWLv3Cn55VCMefaSeQnkPE7eyUYGwp3HSmXTE2jYo94U3FaippNMdQmLki62VSkxAmJQLvBZof4H3ss3FRf5",
  "key8": "4RMJWnnY14BLw7Ru3X3gZB4kG8Ce65YzhnYLdBAVS6zffCogJw54wwN6vabAnbRWPWyJWeWT6A1LvabNMWuULiP1",
  "key9": "4y2bK52fsFs1ySyg74NgEyyouFKoGfGyq8eMdN6HBEdGdNPKYtfiX9eVYiFv81znjxwbc2P9kdF65aiH3nP8j5D",
  "key10": "2Ri2HPRfTpUn5RWMcjCnmEPTZgn296UMvHt1Yg69Y8LjtYw9fpRUQrST8rTSgpVKw6W4tiKdJ5Bk84xQyPDxLSNq",
  "key11": "4rM1tgqp8ZY24wgTx4xZo4eao13KzuRGrveefmXvuuyr5wg21AQpj2UrgBKF4jzmbR6aaV5jhtLitd91G5aFnQuK",
  "key12": "5GdwKrrmD8fFALkch4bQwDHDUZVkbR61ks9Jb6uwXzbJjfJ7G1toJGWRFKhXoaMC2Wp5vafCEWGv2QVc5cPiQx12",
  "key13": "535RRcSAdSJPKUa6wHvvB2WjSQ2o5CyE1G6N6f9gn6XL7eYRv9We3oHD4FgrEbJvnz37kZ86t5aboghTPazGa8o4",
  "key14": "2naCDU3MR9Lumzx7PuFWbBcDdiGwtFazGHgmmCpXx5xEGASYqgxGuXiZ6woNptfSRoSaTKqiyPdZ9o9vYjxKcpS2",
  "key15": "4bA2agApShQGNuvxQ9SgBRN39mQSFSA1rF15FpKsgZ1q6vQkpsxdR2hMTLd9cE5LgG5Jmaj4kuCutSV8aamQvBjt",
  "key16": "5wpHcQWnqjJZCQGkazj3pjdMGinEa6pp4PDnrwD5o1cH4LHMg25fAgGzCsET7917y7MLcQtzdmK549tRidJJkzTP",
  "key17": "4QCeZRPZrKjjEhvpDCDNvBFA2ejCWZKWdsWXG7xb8cmbLzVQ5WHKpk8h2h2SmX75Vz2avWrVeGkxtzmvt2k5gBFj",
  "key18": "2VAMEF52NBL52C1DpqjKgdbrrKMvztG9Bc2z316Qeg8XBhKnu7WJfs9ynkwz4B9h1UanQquNGuJKELGUKBAWCAUd",
  "key19": "4puu1XzgLt1W1PqS2kGmVpA8kvyrwWjpMUm1a87eXhzcf6fEPAeH4aEM124rUCjfLxDAxXKJsnWgHUoPQV4aJtfr",
  "key20": "4RFEBHZ14otxVSysvzf7TwLgNf9gyTdebXDNdFxnMSyac8qCjtKTPFvF8uGJejt5yAAqPwFuFfnsBFfLRoJ3oX1i",
  "key21": "3SWmCfsGX8aTUvmHG7Hjp7YXttkiZEnz8RWiA91qu6PRBvCnpQsb13ekSx4qjbBdkMYALeuDjgpcgsNgMnj4GxZZ",
  "key22": "435WCMw9KQD26gg5KxU67kdBrhYEKSUPLRtT3D9Sq8PDo9HakuaMECCmGcVsxXpoSm6QwgP9GAVDBqfu1HWUFo18",
  "key23": "3EXqGXA5a4xfzwPgVy9YcnKibKtkriFsD4BFY5ii7srgphbK7TByT2snwCG2Co1joZPKkgJMyDRQwHBF5T29NiBt",
  "key24": "4r5KRd9vRYbsKruhUxp17W8LMyhbQHCE4tzrY4rn74j482QR36GvStK9rjNiyxfNhe5cYytUsHkx2xNcgMbxgViD",
  "key25": "3SGGPvbqS5i76QbWJQ8oH8g7tWrgQy3dadr34hYFtRg22fzw4o7KRbTtJL34dqZbhfwKgHjovHaFsV26w7Cr8QwK",
  "key26": "7L5Y5Gu5HWhPP9QE9eJCtYt8Pko1v2ZTj6SPHQcQf3NCUyjtbnj97A6uyU8H7bzvnmFhBBJtYzDfP8yFWpb9wFD",
  "key27": "5NZtBUgEbZATnaNqwm8vY7ze8PDcMjzf1jsBja2gzSf2Q2gfmwSCevCWRe7TsTfdyrgKT6Mn934BzScWVMDFJEYC",
  "key28": "hAJYKpRz4zdcHLPjhWHgd8Aq5pKCVTJSA1jXJ7niMQcMt7GKCXatAFCrLkfJz3Wgdqg9kq6jEvMERpuVyxBEuwv",
  "key29": "5nxP5xpf8wxJyLaeogD1RLLpyZabQLPpnG3Gf5zr3BtQoDBcngDGkUPga7sL7AdR6f3tgzPtMBVWaZSrmW22wQMR",
  "key30": "4Vp3u5TCP4Bwo84Fx7qHKXpXt2Co9SedQA4bMzgwF8y4ZXrvUThQERqTTcuuwNLA1aXNcRVLDdTztbMFGqrXopy5",
  "key31": "2wBvF1FoTkyEtAvdmphL28wK3LFTULYNwvTRehoSzbKCXLZcVfX7CwKL639dqeXR8QgQC3SAL2Rh6FAEgGfZJjH6",
  "key32": "3EeV31abQoPpt2qikyNpJc1Hpm37JDKC7WZgdv9oPQuZ26urTyypP3tM8xWmdj8t9PRZ5wBr273EaQdbcKeYttqR",
  "key33": "2CR73ofdCJ2En35QWxmh7WqXZnisLQWBhUF6xbVoQd3r8BCNHTU2JNCfbeFSVAi3EFpe6MQ1Cg92sNNpbpSaSB4",
  "key34": "4oN6wRHxbX51rosXBkhLon4ZYgng3yr5EFYUhRgm9GPp5d23G5hjp1rX58Db6LW7jGwnuYcmvTYGo4NNUbnJM78m",
  "key35": "2EcutStUoxsG7NJDKDJrSZENch3ctaSmFsyHY1btxte1g87YQLqde3dZ3GHPVDVAYKSMNaWBSL8NNFGKUcfF2WAQ",
  "key36": "591qFCAyaYV4y2GV3AkwAVGQJBYdCmsmmcTzMN9Vr6LghTYG8uPmtiaxRCqwg5i9U9duYuvSDCe6V5gC5T78qnZv",
  "key37": "4GkRcvwZ6yqQRnyq3PtsPJB5Dr9b43yctrGUuu4jMJH16GiVarKs8BmtAygWKgecQhGJ768H1GRokaJozGhHYHp3",
  "key38": "5NQcevuTircvv68B8kkPgdVKUCAq5D9Q2WdfDP5KA89q5HRa3U4YnTTTuZQPMktEeUbb7F2Nx2k9gg4FkhhwGVno",
  "key39": "2Rm88eHPTbUcWXEhhMD8nhaTPK3CiUHow2AyXLV29WrH6NAhKg4V1DiM5eyzygp9aPL37aJSmt43rMXChsCRA9Ec"
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
