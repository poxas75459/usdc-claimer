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
    "3mWXgizna7hrqpeGwEHk3SAX2N4uDk4HXvkwp7dDY4VyPbZbvyhNwUBujHqyqMVmtn9CkgRU1FEZkfhn1g1mzdCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5APVNMACAK7ArYLjv8NtSsEGyjHrtkSNgFAY46jygXvmtfipWC3qUgr6qYnALRTpVUR1djWWuYAdybyNAgzWFKn8",
  "key1": "G2i3pWTeWbFSz3tNjT5u7bCzvGQgVSQdGSVq8y2uhuPh9UWY5yQJCBArzqXgNHWya8KQjSQ4QpebNCQxn7AJVLQ",
  "key2": "5Jw6PUiephnnAJoaiHp6VbAMoqv7s56ZayFvyEMvJs41DEgLUN4XcLnXcAZi9UxP4dgikX8ZMcQQ1gnWbBu17Eif",
  "key3": "5rwB348ziNuMmc4yWCPERsaTW85pws5zPGVMnkFStqucGSwDVByHsDQz2meDkmcnemQg7FMQT2mXefQmKeRFFiQh",
  "key4": "54SMV8aVZakhmwsdoAkuaPKRRozRzXjePzm2fj3jgNZtHcUZRfRak1keckB3dyEa5UHw1D6wfZJ924NXk6PnN9g1",
  "key5": "5fjMTpJsemN4275m71tVkfzb33WRrYLqsCdDXEpHDhocHiGgPoiwLQXFFuVShRtXf6X7EN21nsXJsBL1zvWK55Mi",
  "key6": "2MLg1mcb83nP8qZ3hcFsHqieLSKmCfiYgUmCsFVFHQLGPDFMCe4XVy1yzHtoStsoeYhSP73qhEP5knVTT3Jqaqtf",
  "key7": "5MNjpEQ5iybtVRpw3bf1A6tKG6w3HEWLx3VThAjs9GtQyAEBJcGYZyF3T3fNTdM3w5EKSomL4SAGCL83KXqREWaK",
  "key8": "3B9arJkMu5WQxbQc1wGB45JJ81rXTELkVBBMvdvyK1VVa1hNUef6QSfD3oVrKowReuV1SPQ54Q2qZYKH5SHqpRMU",
  "key9": "2oPn2MAZgEqNGUg1UnK4SyJSt7MFgHfsjQCdQhtpGvCLHDj61yPLw94qMX9B2fvJKGeLpSX51UZ8WFQNTjo4FPst",
  "key10": "Un2bQcFtziJwk7hCdJxTkmw2UKynAEX3hF9k3sbuMwZ1CF4oVqfSoj3m8NGFUvGR7HVtqyVyrJTJzkDj8kwMxBg",
  "key11": "4gF6sV1UVzcnKUvdKdK7x91WSwkXRyUx7u2mrfjJ5RKAdYMAoZoLdCB7CScPZNZahn2acNBAhk21fbf7G5fnXp1a",
  "key12": "2R1Y5JrytSJiFKU2qDaQ14VPaMGajoFkcH81srkGnqhJVp4wzc7Vny2DUmjYYRQJig9gJeUXvhzyZvkmRUYJyfLg",
  "key13": "2reWZZHs3yWg8vxaoSLfqh922fWtpCNMxjFguLGErR8CcsKGn618MqqG7LzVW7kjD1SYKmE1iMZwGmPMiDN6vS9k",
  "key14": "3cgXQnoSWeGUefBvfdFqtoGgSkpSKHdRmdy1k3F7E2N2ukxFpxNUU4XMMXhQkp4eNuWwpqBQuy59ZRQHVyfBPoXV",
  "key15": "4QFrsqCja7ZRVDg73DUhUucgsLy57t8Xkh6Zq8Qpto1bSeiW6AbdW53cLWjr72qjvaMxad5UySAnSrGT7VtmZCHu",
  "key16": "5vMMgSxxSc8RGgtFre7MWtJCStSTa9JxVvcx2H3di9dh2Zu79pfscJsK5Qu4R7Ek6vU6snepzeVtqEUoigGxhkKU",
  "key17": "5ecxvtw43QUnr82J67PR1Yeirjkpx4MUHFXHJ6GYtWgkZdGZnu2WWih44q3uWdWAT5dAasZrjgU8EqAxZD2Brb7F",
  "key18": "4G4rdZVjutkLBAizqnm9XSB911mb4CEEu1ftzg2yVrEj8VQBynZEdbN8JwjcPqvsY7M8yTiTHb3gbWeJ2k4jKSB3",
  "key19": "4qeVA8RWCx5XAs3DQmVYwmHHnHeMsFv2NFqm8yzaAzZfm7JB52hXB72FcrmmS4dspkuDJ2XmCz4RgNBqdRdAb2yG",
  "key20": "2cC5tEsMCjTAHk1xem1nhesK48z7aXReEKhoXHipJzE1r8oYANpNPQL5BLR2psNUcsTzjKFcT23abkDco7vwJY3T",
  "key21": "5oNeDQP21r9YqWQuzEJRB8rjsYwh29aVdx4hocgt39PkmomdFVHPErKUfA1VjGe3Cz96MzMnLq5NpiyhJZeiM7KD",
  "key22": "3L76NaPpoQHiSBC4TMASK1LitiPJUGigTSQrJvCk2jWThVgsyFNfiVoWxFzKBTgMgv1NyiZ6amEzQiHXmq2CvwD1",
  "key23": "5ERwm24AgFrWtJmi5WjYUwq52t9mWAugHUTuHyy7UUWP2cF5dv97R96nLh2TGYWzPZ7CwCpUgXsBWjtozoj4Y1gn",
  "key24": "2KJJx7tEaFLvwDemPqxaRzi35HFKRXNoB5YxvbNjaTARiPQ3BMZ4UmorhHmcYTapm1o5NvafyNTVCnGUf7s2nqdH",
  "key25": "xZbkKXe6ouUhgvEqXTZdGktmNJ4aSkaS7hz2QTvRdADXaBkLWuY3iezbX1FAgqige31hjYC9ZKcbB9U9FNRfmEK",
  "key26": "BqbNmPStHMBQ5JBaGm2YGsCymJfe47NDxkE59kiyZDuyvAjkH298TYTWfFW4wPHfPaWFN3dK4fiGS7tyYewLFn3",
  "key27": "3ysbUDjFBygHEZa2oKKSqZHbg8rs7dYkdgwhzuo8t7J6LfSQXAeafALgFHgceKZiMD8eBL3RT7H4AHWTQPY1ZB6m",
  "key28": "3vEaLQdpFoXgRWxDRNtbxLvwYg6vWZxFGGBzuvnnHYzHmyuAgXEyGxofwrXsHZa42hcFyEiUtsqmBAiwzB1cFrTb",
  "key29": "5B9rXLS72ycmXKmF5oMCsaYTsNyqGHPW2yWweA29YncjhKq5VRFaopYzN8btdEjNYricv8rPN5harBNRjEQevsvR",
  "key30": "5ncJHpHbTHzV17QwQfigY5oPT9BuVwxhwckXPYUjbk7kh5pWeJrj2X3yE6EL2NWbe8DkWBJKTmT2nrk6PWGGQEw7",
  "key31": "53a491PgFMVHv5H878wV9PHrfeLCcQLJDZ6NkDzihK2b5uasRJgupFhxbmEweW4ggjgU5zPNTpGuDj2Qu2nMAFj6"
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
