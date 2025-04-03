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
    "5LSZR9RLdxxWVjyN2YYcyit7gq2yYZvCzCHnharApioejWtSQadUg63BPSCqqiQWVfATAi23VDJ7iRfpDpMoHJc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5rCgAmdNFHr2Zowu6nFMedsLixSVBVT666vaJddhUmacd4ZELHKCGKMLUq8Ln5SuURgv2SWAu4rdfUY7yVutB3",
  "key1": "2sZeECN8TPvXYLNUc5S4HGP1wWBGtmys8RU7JcRNMwYwgh2x1zaP6xFHuYAKTdMdQoika5qcWQRqUGJtkhykNn8X",
  "key2": "3Re7yvzRzh4H17EaBjgbgJfx1Sm1WVrTZ1mndHRSaJAqAwFrZAtdSxK5Wba4Fr5ckdEVvizFHyEWCKVX77vMJXSq",
  "key3": "5h5kBXUSS1LK1AXfMEC1CMdvpuQtVZ7BYpDLv1zcV6GYXp9Gq3VtgvhUKtRAKAmDS77hU671qeXpEys3QUwkwyyF",
  "key4": "3uf2SvMfEDG8vJNF9JgseZJP643kuhwweCJa9aMGLkcPjcm4Sa4HJV6QJNgBnKtQXoULYJtrhCMnaChx2T7KRtRb",
  "key5": "X6sEKVWkB5ZqMdXnXEXMUS6xzZTB1oZGrDD6aWPQWNFjUC9SyzUh74rwnso2pxDQsG3SbsWi6oZyPFeGB63oX8L",
  "key6": "4SWQY9L78TqLTTviTsoBYS9EJXiiyjQosKi7heZNzXdf5wdhwpMUZxBEU77thrgeD4scfAJjT3aEC782ABnjNXdz",
  "key7": "4zUTbrkqkQujtAfRCDH8jyADh8gFvAJzmiziy7spYoCc1zGrqJMD16ytihhmALreb3k582CjpD2rEQS14XR3uKm8",
  "key8": "sXgAThUT2efxhNM2fm4uw5hjyTG7cxdoz2Mio6mD1T6g3D3ZHiNiUzuQi3zN6LLFuCXnefVDMJBpxC7TQoAG3wK",
  "key9": "2gdrW7Q172wX6cUc8av5FPWFtwYJP7D39mwzaLaeUsGxMPFUb2mVi2pQxLNRZA1Xgd6VbehKhPJANySfbD7Kqj9j",
  "key10": "gSPdbG2D798bcoV289KPaj4ELKnKQ8hrdakYxuRY5EKdyDP2EYz1Ecp4twEaP4NWcVtSgDA62PC2W5prhbH37iZ",
  "key11": "4BdoWzgRYdrc9dGX1Rikb2Ag85zi95AdCevLBdNiK4Cw634FtnDjSiT64KQk7wqqeif7HTjnCpMPdF4gzWoqJS66",
  "key12": "49ooe67VGTz8WDhY2xswYECVqnW2FuQmFAxEpQBikT9MAzU4U9umLJDBUH794oUbaSJAUMXaaxKnJqHxbEMyTb3j",
  "key13": "4iwvPhwyj36GPvaKPZJtUU3zALLN8PZ8YincC1vNBWfKLLznGe2eqtpjQzhusEQcKqFR2JyQ8dqFx6nsGq529gCG",
  "key14": "4WuDPcUcRWeytnymhpSb8aWSK9eWE3UQ4gGJtDxF6VrtXVG4GdVXX6TaeJdS22Upx9eQeMLVtcnvetsj5BMnAhZu",
  "key15": "4SM1yqSaUQRHJqK6oXNjroM76bVRMN7sGP7XejwzYynS5cP2zs73StHHhGVwNENydwjZXdBjMSY43DBX5yn5z1TV",
  "key16": "499frHypTM6Sb1WZk43tgmNEHGfZ1a1zHVTUtj9KyLyqmw1Fzqm2hRYSkUHigSuDoeTX4GrNphnqMtoPkTycC6g",
  "key17": "3qj7Erq8eQrcw5DfYgfDYMFMzH2vHPb2MJeLHUd6Z5MxZTBUSbzAh3ZAiq4HkCV7frruBW8ZtDvWmmS2qCxpZ1WP",
  "key18": "4DpsBj5bXm6cs1yHMW2GbkGLnnSr55FThJrn7m6jFxgSkiWvPgTBjLJMihhEWzVPVCgm92ziMrac4BmQEfi8CbrU",
  "key19": "UjabypqAM5ZT8F5DZoRYnzZuGhdPT6zAwongsiK3RwfK7SgBzjSdPHigv5jazvdsuUiu5x9cB93YWchNYfs3AD3",
  "key20": "EGsuaRpiCuJvrE9qiyfNBfM1Sa26qjwauNgmZuyAK3k8BE46psRefYAdzpftW7Df6d7oQ6hrtCqR3zg6so5m646",
  "key21": "3foRuxkYPvrrSv1C3JAseF2XPkRTeKxvGYsMqXaQxo6aSBp1cy2B6yakeche8rGi4XcGSFqqjuxdH69ZZo2w9dHf",
  "key22": "63Mx13vGtYCeS245RRwDSE2H75VjjVmuXassNhNncL9eixTsT4GhcT6PidnDNARPRnbdfJkiYGfNkmb6cVSUmSeY",
  "key23": "3LRc61Vyzook4mRn6JsPK8QsqtYnQ5yYq2wujgzf4TGMnPjupt7MoDMxg5RPXkJQWwfC5c9uED63EP4r36DifCc3",
  "key24": "35gC3FoqPrcoCLviCfPiTd2wrp77vHfDHAosG37aBJZaVEmxyHRYbRqF14cQoYnWfnHDjTLYqubUSVYDnfMh1nvK",
  "key25": "2Ji7qWns1n9Gse5gWJnyNM6EafsDHS6wtnHVwSQzt7L1ebMxAk1JMvBg3cCGfbwqNbmW4zAFxrQW3R7tPjZMS5EQ",
  "key26": "5ar2b58bGMiWFSanhMctncbtrVsAZUxmFzJjsyBiRVqisNq5kMWsxPT9nHDygPXkSxP6tDRgxJULkENQqJM8Pkkj",
  "key27": "3BjqYJPuhgYghN5n11TuRSigQi1JhVU7WgncCC2e5Pg2FtUC2NjH7vvNA8arFquZxJc6cVk33XpqKXjahALKeFHY",
  "key28": "3p8r7Bji9QJctgL3F2tYc7gvr2KXq1exBgArFsABRKoa2wTEuAkzMjC6XGkXz1zGr7i6b3LxpHBnAQ77ojs7G7rb",
  "key29": "3mbAVxw8n6nW1q2gYGkq9NmkWJdt4DT2Q6pd9nvjqPS4g6XUxeMGyVhHdKj8qx2KE6Ykbm7Nnn2aoN2E7yrPEiT1",
  "key30": "2Y1pU5EPVSMPq93aRS3z7MCe5AGwgXNT5sM92Hi4yb7bh6rdFLREbti5cBsRBZMVULJUvBjKpE7S66bnHPZCTgnU"
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
