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
    "43vXzRJqJxtJKDpV6LcK6gYKTcUp2TNnxw3uq8AAGW2UHLWwM3SSg4DG74TFWPuJQLENPg5vSLkZtd5NotmetTxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcRF1WJS5snv6ypxJHJmnpkWEqLSa8ZkwBh1CUoLftJYWp9HwCNCR1gkrYn7XGn2hhworDqgEa3Hr1eQsj6jx1R",
  "key1": "3DoE8su5HjqT7eysoa1Eup5DK61ZZppoFXZzFFBmzCjNJEQXfE2XxpBv8bAaxtWAoQ3k8UwbSHr4fMgX8EjHdFrC",
  "key2": "5ip9jFDihBDVLGSuFqfyFR1AyTRHcKvgHirSW9eJpcjEQmJ7PmMsfUuKBTb5Tcq72viR7r2vCGK6mVqMcdEqQeoA",
  "key3": "4V18sDTt7vwvqoB6VUpyhUrtL3kntgGpfoWMhN8QuShPu99Azn8L5buNndJwNh2ubZLGyDhGpzCnE65kiP5om2iw",
  "key4": "2Mm5Ss5i8oPgcxA613UK9bFeHwoXprvb5ovzVb68TL4CQfpwWcdYzpKfma5daJedyDZoyPewQiEfM5w4K5PCYRAH",
  "key5": "Ybjyrghsq7vSggA1vbFRcgP9yCbHwNTLUAmMZCKqfHjJKPTnmadKgkQxKv9GTAJU2h6zKCBVoZzn9o8hPLr6qep",
  "key6": "3v4BjBebhXu3GM3a4V1Pn5ghG2bGmTr3PsVtsTAng89vzhSFep6WCFxx5231VD7d9oi5uEtcQa377gDbLRXSztfT",
  "key7": "4Eo4kNpnq3dXhVVR8xTkDt3fXpaikNYMPCiiXzpZaNJrjPVUNW4yKvqRUc2c58aJMZjAuFjSL5dkLN6B3QkF6mWw",
  "key8": "2Md93v3YjBmKwuh98zaJng6zJn6FwNRnTYCcFKRgb9BiqCvi9zoAEc9BVHcqbmzK9kNKyXXqGv8LTzgmv5Szstge",
  "key9": "KJ6czhWP9WkVPgDhpZrDx9RU1BGV1tbrgg78A9SuoVqALe92oUVotE8XFSMc1ddGGA4nZ2BMosSR5E5LKH5obTG",
  "key10": "edbJE7jP1j5ZZcg6re7gZrCN2iVLkSWoVt16xy1zVCQCYAwBiZQV9wBDv2TENrUKSf4id3VMKA9MKx55GfkqNVR",
  "key11": "5LeqrtquQZGWiLjYAXmSSCK2HjQuJhFu7h8UZ8fWLgAwKWfhL5Xr8WjcLMPWXJSFphn6VhKj3fn7Tngpmo6tqhu8",
  "key12": "2j4PDbqNLnjco95vexEzMsSyWxNTwiZjYiE8PxJAjotTC4ozwLNFoN78SFme2qNNdMde4xBvmpxgMmaWFKVMtDen",
  "key13": "4itHpBzPX7TtnRpdCnGwhg8mM14QNX83aibXuXtiG25c6ZZP6Tb35BS4kG93bPCTYLJNdwZ38MjxsC9pyRkLr1Vm",
  "key14": "5x7QvCdshg3rS76Gts2VzDzkcVk1JDy6PfaY9pTQ3HgZYPqxiwGtV7hw32ortrQuSMzxLGbLw9TsRoQft3AUCCpi",
  "key15": "2gsKZKSMW4bHdgR48BhVCMiTvmpvQ7grMboNfVuvk5Vnpcjh8fBP44eAB8DW9AnpKaKAcJ4FPD7Hz6XaoKXrvN4g",
  "key16": "3rx3vKpjsura7zDywZQVp1eqpacCgYcWB5f1fSeyTkh9iU5g4z9KcBfWnuSxFF5ofHQZrrHWhiTNB2tZhepmV6Wp",
  "key17": "23EAQXBEyxdkHhUBDhKVMobJ1Dm59vkDZFjuLJQByHSPNpHcQgEZumJjtSFZJnJeb3KXvDyqX2WY7hFvDEwB4fut",
  "key18": "3GpxWnZA9fErGgBFUhaFSTEfnabUqExryKGPMZkEd1ZsaixiXTuZbUTZTcBErrxcxZJgRRasKvpXaH8LfpynzjRQ",
  "key19": "67G8UszPBZY34tWaSvAGhZW6ty92zLmBZZ1FxHB8j6VgwoZ2QW4QqpgSy5optV382UkaUBmGuULmLZUgThT7xZvX",
  "key20": "4zRPRmUWzHSexn6AcWqXxekrifnxc5EbTC8e7FmZ59zwk4ixKnEWtq8J28qfMeF24Lvcea1BhSURZEGaMvEKLG4c",
  "key21": "3q4suw7jjeHhLifH2eqHNHGEd2b2j5Yz1jHQFFYwSZUn7aiL9tKy8RXaFvZWF8vXvJ4HvzD82tfUeLMDTij9Y259",
  "key22": "21SHMej4TwNd6aqFLs1idTZnjvZCReY8QqUw44m9tQeswGrQaW4DgDRGPKzCv37bqXLwh5PsmaSqYVc6PuLVkMzA",
  "key23": "571ohaeq8WjpwJUW48J637nspiAs1nnAWE9MhahrpWKLhMTuYQ9a4hwShLrnYqZzEJbDo2PDDbmKjkxhZBo1LFum",
  "key24": "5D26pDSin12pJY5EBB2wQiSSK4A9nUyvmWWJJkbt93KXQTUtnVJvuQdQHUnfg4cVEUHFbFv4aaMWN8YTg37Eqmjv",
  "key25": "3d7FZ4jqzKZrP63JPGSWyz1di8MvqbWvCVAZtnuVVUBTWHLDCCkVTLyx4ZKpcVSGebkioVPB5Jgj5FoVHyywhM74",
  "key26": "5mA4kztFPkDx3aYZ5wZRVy9Mj2uLbvv6jmqifSLxBTnJZaxMES2cApqQJ3aVvzMZptvz3viSccK9TDzCzYEcNM2E",
  "key27": "4Q9YYLKh1Wufo9fsqdFk8hWyeag2ezaLwswMdpkceBHz3kcEwdSqs41fc8BHoqtQhr3yAj5J742qRCHZiqsFVCqs",
  "key28": "3sGtcMufj8mpFqJeQj7DWMB1G7e4BSBFNeHU4svJu6guQxrh1GhgdDTAWziWjVzs1H1jzcxodawLLfMgEiPGK9br",
  "key29": "5z45aKXf7V5BU7BYJFKGYViUGK4y6NCtQuhnByaQh1AqNfAK3txUwBAu57hr1bA3B1T6XwGtvQm7qF63AmBbvFbo",
  "key30": "4Zs73vFZVGnZY4AZDYjm3Zq1cW9aacnfCPsahctvELZEURAMoqxckjv5AA8reNuUBpyYmZuQthYHE2s3DQmKkbxA",
  "key31": "2w29jFzSDzRXp4gJriy6D1RPcousFgPxCs5WGqE9UeF1v1RWkbDm1XLprAY9BaERbhsf8dX1NFpcA29uD1pj1q6b",
  "key32": "2vP9a1VW5SLkR7ZMXFLFJLGK1av3UFohjMGUwx9H5mjVJc4WrqsWBQYCAGsNaxNmzYP7EuqS3NmDHuLjLAoMkTza",
  "key33": "3VWYsioeu2uJBmHq3oKD4uptGb3MtkiXxkAY2cxLWpv93J4GnNWzNECuXnDAMivN7b1KNLRM6uXKZXvn1H4NNi3m",
  "key34": "515ta7fnXA8XcUnGqnDfx8A86mzkLxvtthZo5xG8EJp6AAgrw7XZCnQqovuEH8KeTekDMp1ExMDmtBjNEXzj3DBL",
  "key35": "5gznmRA8YN1TAmvMykdagxRrTfvqBzBYoSt7D7QfFUBpPDoo5U9ohvSpnGKVH8k1wxhzTEvhkV4rt4wHumJWWigm",
  "key36": "5dkvg2LKmjGc9NMsSYuDaMfe6xo3ShVsMw95E2VseoUXQYzxZtUzVapACjGZjX3yXgS6ijvVrrcHE3G1o3b7HH2E",
  "key37": "5TFh223pmvanYESWhkiSUzEg7gApJPaBYFYaF7MM155WunWiSaLVpgGHJc57JfB69W9NicTEvPU2caPyTaZdJyyC",
  "key38": "3NxEbv7CzhvkvTWeSULUSPqCLf4bngjh1ikDmr1vGUGAyrE891Eq4BsE6F6LH6Pqur9SbZ553L9CK4vVhojzbhmW"
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
