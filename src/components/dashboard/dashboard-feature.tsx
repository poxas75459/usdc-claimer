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
    "4SnU8sDwj7KGKYMCR7dMyNvEADbz3WiVnfHx9Px6Jb7XxGj3MmWnfpzXx5S9RxLcGWcP6JY3jU8W9oUsJFZiZEEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NXvNBjBBXcx5Dd1CPWA4f8XCXadkQAoAwi6D4ynTKo6zBuQYL96jZjjUh6Gb7wEMNrpzJUN7d31mEeTowA17vqz",
  "key1": "xkNwRPt1S6v95qbk4VQkZzpgDeAnAiXQwCSPh38L2VKaykxosmpCkZQ39GAjSomFfRCt5LQAbVSVAMgxqL2ge57",
  "key2": "22dpcC2cec9puXfVM6nfqsJAGAThuTLp2Ct2seMrGdWJkB1gaaEbN1EoGyDHLTLKPieom8eGdJjWXRJrQRsLtEkc",
  "key3": "254QVKL9rgMB7f2KFSyiZEkgQ7PB8jfJFor43W2Xzb6F2c13r81KGm2wY74sqzZszgNvyrBJrJQj8kuSjx3PG9js",
  "key4": "ZoDXcg7dBKC2HsqwdPm2ga6csxR6tzduMnVKe2tbpLX8qZcKqcDq4nb5iUqgfPNWco7MUHTKdau7CSZUa9dXB9a",
  "key5": "mWgFV7yfY7jT3QJCKVLmrZpKmui2TDp8XGMq2BDLuREFd14ccinSicL42fQtnhicgpurLYHpRC9mmPQenqvcybo",
  "key6": "XpfeuMTyCCUfSgc1eNFV4SxYq8vkjR57MR2WxPbmEx2bV7UqybTxoPwy2sRc33MtLX2rmizcsE53rr7SMQ5mVMd",
  "key7": "2uGM5f6dRr1TNgB2GooPF1ALCd3QdinSsJS2mfoYkdneJMbrAKM8F4AWkmpgYwUqYDa1Hyr4MZzC5iFPj4URs4Bq",
  "key8": "4dHL7qX65JPqyjj4Y2uKFG4DuDY92wDEzqDRDpFGMTdNfABEcXqFq7VmXtVoKJTwhFAYrVGKJU3nnZ6m1zYj6DiL",
  "key9": "zEcbXNeudoPd7nbETf15xmupn7DNaYmVrCvZwG5deiM424Aub9XnRT8YkaZmbT5PFAjjvJrWkGSASUvzUHcC5PG",
  "key10": "YmdqoLRLNBAR6TKaaLBftDj2oc55oZY4AowhFqZQzdJtZ8YqvUk3VHvrzS8LfYtz7VZR1JzV5ALfwnmKwanEkfR",
  "key11": "4pnfBUg1ohfmra4kXKvr6Y1QkbrsaYeUYbEjxP7GTiE9v8kqVQ1AnY3QqAeWysKpN396ArUZRvddTwwntZog9GbB",
  "key12": "2RSimvdBmKhDqb6NFS7eRUEz9gxtsydCdKdWJQMNZ3jJw8QJPZd4teZ9mxKcZuivFoSrzFkJAE6KLgdcDm4gHecL",
  "key13": "CoLqoZbwMjUcyjjd6yUcjd3PLb57Sd5vFNtu9T2gC8zJKyep3FF2B9FcFLnVczf6V8ay7UfNB6FLJNBi11F4ivA",
  "key14": "3NDtvi2hmr84x3YJrhwPga6k1qtuVHh5C1Ys7UNqVvFB1NsvzfAQfBddZDnPbgKu5BHQ8nzCYrnU1vvZxgjpejJp",
  "key15": "5ynNdMzZpTvDguxtqK1sw5dJa4URo3oEdnMoey3Yi29AD1NgL8SYehZwtBxK7JZnwuxD4zRXin1eUWKB2jG9xX31",
  "key16": "64cPSeiwdtBQrucv1yEW7iuKu6GKi4DgpMGxoMd2CN8z5cicdp8zg923M2w8w1iH8P9vgdyp5LY6xdZFYPGHLraW",
  "key17": "51KavbCGsK5GVjfGVAetLtdf7Td4f62MqToS7zC7V8KeDnow4Dd1hAxtpiLkXjAtgPjMJ1EBkgV9gZUXvnW7nZyM",
  "key18": "495TLPtXWnW7W1Faq9A1QyaCcbLkxr3bUbPDCgVr3iVVmriSABcPRUHAfEF5nKFFRSEbXwEFeKirzn5anqCWKUZQ",
  "key19": "3r11A6Bc48xKTiZMYJ8oho6E79BXVmjeD37wxLWB91ZSSo2tMN32DRx6qBv4GEf4Rmhus84a1WQNRVjS1B2HndDV",
  "key20": "xvswsQn8aQCBGooPpDzYT4RATWoMDHpJJpn449r8yFVQfPb26WZHH3PzhSGt331gt1WSMTVVoZupvTG7CYZpTZ8",
  "key21": "5phhJhHz6sg99pqXcyXc95sD3H5vnS6BVDsomYJ73hpKzafi7iyDffMP7ZYxjmUgG58oC1iGkgrNEgpWndfC13ra",
  "key22": "3yurLBnDRkGXYTkr6aHAzCaKuKzNzPJQMoSvaofz1FukgZb5Ce7hBg5FaPzUUJ4yFbZdS6tz2anvby4DXr4u5TFj",
  "key23": "2osUNWoq6VTsMbFSoa8r6HmfF8ar9mLUG4FNyXBhNeiiXWMGXFFqEypqxyoeJUtxfBgJ456RC2HWrUuqVJQS688C",
  "key24": "5XQvMWRjm34kAWAFAXmjftwqiJkEpi9hQGBUtvPZ37rcEo7kee55wGKDHQnCDKgU8FvbdZrz2ewLzgENAdcbanHU",
  "key25": "4tz5ShhGuVnQAGR9RVp2crEe7cvQ28pnvsFHw1ZNKAoePpamfY87eTgNEjX8T4KYo4rF4pk4JpnNVQadpzQd7sFs",
  "key26": "4w9jUa8zh9QFWLszbqjVghHdrCAEWec3D4KrjdcZC9bksrGtc9cDCg2MiHffhEU4NAhddViAyGkC5zM3da6njVkQ",
  "key27": "286UToUbM3Uiv1WuP3Gu7Q74yg1DoQqjhzoa9pXaCZT77PVrxbrkXX58pneYT4YvruCnMgVVSXguTz3KoUePaBer",
  "key28": "5yyG2ZRhJxk3BwyR4df89zz8UTyTtGb79eaqdyibi8MygRxV1ddMgAAD69ctJtKstNNcqKhQVC7SnFqCQBWSxNsJ",
  "key29": "4ZZqG4s4fUkUwE3EA7yeoFMhvqtZ1XduqFHwQgkjSjQzcF4ZDMkkbozoND2qr9teV3qbUEj3DyQ5h6FRw5DRuqHM",
  "key30": "CMiLNRM1uhqtaK4pbQGeNdRqEa7GMhrfyEnUrCApSbqMvDKJSLQPQjieuSNk3sR3KQWNUvzwkUYJwGKxpnUpvUe",
  "key31": "4J9NPYzRVoCbgvbnyuFzPqf6Gf1fnuYzKGrF5cAhxDJYnMGBTvrYHGqnSz5KCfF5bAshDpzGQ4aqY5mTaCUk92oq",
  "key32": "7PnJ6saLx29en5pwKzqXFCM7k97uD8tBJaTf9bxEJrBtVujezfANNUATMbUM6L6mb2Qj8FgiZ96VjirAdFSMJPx"
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
