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
    "38PVpUtkXDQWVc27JvdeVQiRTsvMvs3X1Lv42VNXN9sEkA2dyWCrfMJy7FAukTL45eN69Bhcspyvz8EFPngLxiSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e5oEhny1p12JGRnrAJ8GzcShwwjAZZVW1ik4WwztEaEYJZzPAMtnkgKz2dtQ69aT7o5mEZ5vgzafk8WGgTbQ6gX",
  "key1": "kQ2dsL6rT8qeErSrXF1asHKBdsfZVsFgtBRAhuQP6Xf2Zqjv5bPZoLcZrspDwmyFznK97WLfL8VgUdWTfhdwerL",
  "key2": "5yaVZoqZj2k8wn1BDpdR71g7cvuwy8rZ8vgQA9R2AkaqXwuT2gPSwKkueeTvbhjwwBWqqVE2Xu4z8eATsYDnN4xx",
  "key3": "5MfbNy3HeUfDc5hNj3kLAxc5nQxHg7TxqRrdmL2G1Lj41JXkPMLM45rWWdyYFSU6UWk9G9WDtkvHZotR9RGfLkZM",
  "key4": "3dq6WjepCY3UcvuxPqLUc77cf1VaZX9VDkuwP2HkChMsUsYZNucUf7ATeE4xytfoZRAYQt3t8wavADeb11nEnWY7",
  "key5": "4pjEBZ8Bvq3iuzeQGPUinJ5Qx8gFMfjCgUdW6EmHB2J13QE8fEyF8kL1qjHaVPigTMrK9nXwqF1bFJNhTgZMac4X",
  "key6": "x1pUojYj6Bx8w3WSAG43MfKyppwiLAmZgeWmXw9FQkE3JXu4YsouRcNUNH2r9mk7YBNbzgYy34wUUehiP21Hdny",
  "key7": "2Hg5JpaT7TUZx31qZeEn7dYNRhRiQXD8bGQpyY8QwaJ6RqDFjpzQtxxWbXKHNrsoawda3Edz1Q9PiKsta4Q8Vxhy",
  "key8": "3cQLvvxa4s5RTeu8DWawnN3qa7mGwuGtVCHA4DzFGUwHQ1AgzBarAyZ1KSniTmT1ebFK8ARrBMHdisEu1hhsHpuB",
  "key9": "2noCxEVykjXqEgVcKcJEjxPWnBxLQHwszSA1NNuRqjTn2bCnSL2AZa1gtnxw8JyKwQK1R3ApMqrUjboJsWmttsAq",
  "key10": "di8u1ev3MEtg9BwZbhgKbmAbNQGVis25AsCbAvY9sinyxW5UFvjECmeG7vgeeH1NFbJh8MozXTQCn5EaytqMAvP",
  "key11": "4bWTNhrYu9stCjXHxbfYE8Nu1fPhkdnPaoKoWRwsQW3T8iLH54nG2988UptEXiFUaXTy4KAcT1DXXgL7xUFLvU1o",
  "key12": "52tbt3s7EN7UogHVbqDCPFQVCweteUKini7bF2j78EB3aHT3ZSpz8MTFZfuurVZwSypJyV4L3qZXYPu4XDitnVRu",
  "key13": "2scsdjTARED3BhQjYvAU7ZzP8DZJXKzytwhU7QTgi9Kb7jHZzwgK6BuEMQY4pWWRTgzqWYxmfsp6Ebxj5CzhMxeU",
  "key14": "KXEAjShhALGgkE365xAojJFEjPUey5hCdy6JkHGFNSxxaskmfSPfEGMWRhHhy4FLp2frkrJUveFHwnP4UYfrwTQ",
  "key15": "2GKcyR4d87Xn9ShGG5wEwWhyEunoLEFztBg2SrUVVWmz64uAVyR2ECWXeg8ei14PnL5Js8TJDVcGTtwmXhYQd2b9",
  "key16": "C63dVYovhyinCGNVE3jksU4zAUP2itTXUjxNjCExnKptGbxBYepQxJmW7ZuSTpPxDXPCrLPwrmcNujaw9xmVQZq",
  "key17": "32WeU9mPJ9uNRZuU2CHCYz3rK6213tonSb6nGUen8D3zEnxKh9qWT2pRmYxRyxd45LGHQRo2ZocKHYtfm9SAetZb",
  "key18": "3EsAfLH6PtfzDoMNqmdu7vAwEiGAbqu8yT6Ys3a9KFdQFQx6aUewSmASb9EzGPwcRWL4vPvZfqxowX4QkMUhm2VB",
  "key19": "48UW7cxJFkR6E42KZx5Rc9S8CkJKw5cphC9WG8YZiUyw5AkzbeCPjB27ArQAkiL4TVJdL6Qp2P8cYbrkqvnVHVBD",
  "key20": "3SoNz7zfCVf2VrJW2P2hqErEZ3mohcv2S8KrdKoagUEFFKnXAhhxhoXtJzFpakSwA9mGuR18nA77jSnR4Va7hobj",
  "key21": "5wENaevgVRsU2BxXEjjYcV9T8cp5FDyQgNddrGQMGqDdcFyAD6vKuCB1Q45gtFpFeYd2nG2MWb7ayRRYwpEeKAYX",
  "key22": "4H7Ua6frGJLc1dnM2VW63LKVuVcCWffGQor8ESNQHNr4gDjm8uspHu9wmbtP3CD2X2F5zXmLQcjtDNBixZBWgCyW",
  "key23": "65ZM3aEnSykmA3wyRf3ArpgL2H4j7C2bEQ2PChqKewx8VQF72NnCWxXa8CoLqZJLWg93h24RqkAzsfpChdBRyJ4P",
  "key24": "4rmoJBp9XCP9kED4vPfL5g3khHzNALnRJD74HDqoeigwvczn7NrhQiTKfTT9c7EG1o93UnUxyQmqgAHDFJL3DDwY",
  "key25": "5Tgrj9syx3fxLvXnredBHpHdyT4spomwdVmdCbom3hYvuuheLpPktB9nUR7QhcMjVfsEV8JYmNNiybEX2SzvX236",
  "key26": "4hxcN7LUR1KJZCE8XK79V8UPKfUdSeJLmjAkiPHG7YPbXFryC2RDJMJ2dZq9J86PcPULZFWKJgJyYEFdiegMbvty",
  "key27": "2Q6hFtD3KBMniftaNdy2VLx4K2DDBLUodvgewqPFTRMZSByyL9t3z2xfYLxd4GDNscdwroT5BnUcbeGhYNvoeMCt"
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
