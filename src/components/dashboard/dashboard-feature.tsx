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
    "3ymT3Wj2hAaJ8ofHPDofYtE2M3zg6VgukTuRA3buCZAf6Q7KjFg8UpD6TAA27aLKwMYKpzjsPKzuTTGmQXhc3i9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7cL3vs4EjG2nhaLqesF3XTxjsXGprtexKRKBpoNezGVpKZeLb8g6rzG33HjRVS4kGtt6qYD3kqKrc7rQdiNs8E",
  "key1": "5ozMooNhSApnvwAFK1Vi6z6Sh6sNwLfW6Nn9EUAdPParSQ28oqX1RA9MAnRugwsftACLc7wgr1jyLpHtywzgrNMa",
  "key2": "58JorVVhJGUFk55ndoJhx1y8iozF2EpF3LHsjJU1tAkXgVW95QVAdwpB16KHLN9i66i61FmXJNziFwF7LFbi9BpU",
  "key3": "3p4p1SBog1giycTXfsdN9FW8Xf3VfjnhPfR7jVv4NEvun931wavjUoWpFr7cVkghSRyPYqhp7BBZXeFZ5PaEXFi9",
  "key4": "6nf42GbvGZs1nRyXEqH8mj996PzX3VhDhDGMuBz2Fy8794b9LSge1iZc3LVJqKbSbSsDJfX1RunLwuNE8dnmXF4",
  "key5": "5DFbEFGUvQH3qPVMV1hsaiKzcpML1ndq524292i5yb2X3bZ5o3nSPxcaY2kDG32DSC2tkLiUsKqv4JqR4Cwe2881",
  "key6": "4A8NzNru67QCYe3hD2rhJuHEzdna5fDkciA8orP1Udbq7Y89g4tvtiL65U6XLZysDD6eCJyxF7f2AURsHqpbMCCK",
  "key7": "2SxBn11peofeXfWAMkur5LMjXwZYChsmrUuqoVcCVGTn5FDvGJF7gKYSem9dX7K6cWwFgSaccnrKVHGyAioz2uoL",
  "key8": "3NNWjL9ww1RmGpy92DvMxWr7YhmUwmw2vtXiyECEjiUjgP7HnceoEUi8k7MN6cRULh95z3SfJgaQEEqHudkqsZfg",
  "key9": "BR47ksMq57ceYwy6xv2bj186PhrsZDjRaqEAZqKau625aJSjKTo1otMAnPqjQvRcku5HxBCrdMFtCrELnuntBDE",
  "key10": "4L87zJBiKSXRcC9eKFbnd1Ur5k8EvsovQpVtYsUGJMVikFK8FSzmev3bRhxjg2qkNU6JSsJ9NeCDCH8u1VHkJ68d",
  "key11": "4KjeZtEM1kSnuRnrmRhyX78hT8bxV4kSxaTskAnyb7xnbhd7DYpWLjrexn9G1tWhemiJNbcaoNc5TSQTveseDRb6",
  "key12": "3YoMnfbo6PDeGoiJH9e5EQqfrqMFEpn66WqdnspHTgXF4i6W6VqF9cHE3FSxNJ5YU9gMLNMrnNmCtzKJWnespTty",
  "key13": "5jjkARd6mJmySg6gW9iYLezVPaTYVPsGmmzujev7qqBE8wV952yAvUR7Lz3Sb1r3nTx8BKmH2DDXhgWJ2PFhJwbW",
  "key14": "66MvR96q9khTkQcBtT9M5Wy26q5GgQ2mRGUfwXFk6H73nFPec7H2P9s7MkLWyjJFJ1dNgCqLe4UfjCLNzHFCGMxx",
  "key15": "42mxw3T7kqiP1EJ4SJfz45K6VB1K9p6ae9MBXKFJt9viEXEvhmMFk1dtYuVuF27WdAKpJXB6UuimmpJ8u61Y4b7H",
  "key16": "Uu6sZhfKMY3kzwUotPnc8XecFmuXWKMMhLtaYYHYPEh7qHPQENssDiEdKBTzdvQUbnDMYaywTfYe5YWBoMVMoLg",
  "key17": "4kGdKKkYYNmPWgfDMCTWkeRu5pEDuNWjkFerkrVYLJpgm5xSxv8ktJGaSvx4NJFCfQ4xWXuodEroGBS6GReqQt3g",
  "key18": "3zihUMm8YDcm6BicqcW8SCcsvd8ecT6tbkWxjRmDSy25KeSQ1YKyjDoDCwYUymFWAp3hUPd3KM4NVUYKs9AQddi3",
  "key19": "4BE8guYbXmtZo6TeMkvKfovb3mjzAFyUpvLTQe4pRJPdkkRj8Jirjr2vZMkNiwexT3ZiEEqmFxQEatkuhu93Hxtq",
  "key20": "3NdF6UMLdwyKHoJS9tjwN6bXL54pVLKdE81UW9o96JH96ucd1sKxVbCjRao1U2waJsHSbCnJAporJUV7PZ7YiDUM",
  "key21": "5VpNMCeZsmwDahwH37ourjvcF6KehkZBbNcpZ55eztAc8ykXTHqw5NfRxCYdVDMRH7aPQxKevU9ozbjNJJ6Cg7pd",
  "key22": "33okYaphxjQzWZg4hSjPXvSb4uYmDWhecEyURa5pNTBauVcpGLynrSTycDv1JaM88bVMzdm23NZgH22VMBu9e6ct",
  "key23": "3RwUt6GrV21YcNc1z6tWFz95Sh2LZA84aMJZUzYwjDQDtSJFFQPfsfstjoAP23ZEQR85vNfPqGEoptHzbqGHudux",
  "key24": "32wZ7WD7Z1ZL7pvqfEBeMqXMT453i4rgWfSTkY8Z9vjwbyX52yVbkRQnBdBi2z97BUXQrRDq9SS2hTt4yUhSnXqo",
  "key25": "UdGwprSbkCUWBfvD9Hu35WNfJtpL63erVaLKcjsLPZf97ixoviCxbtWLNkjjW8vhEYjkU2RUVSCfwYTcXHRqp7D",
  "key26": "Yu1xbFHvnmp3MxNmRcA71C9Ub3D3dNHfmZhA2uNT6ZADo9UDsWpkNmKjqhmuYZNHsWxfVLCUETXx6kuYcQLWEYn",
  "key27": "C5iVowbANoUUjj71ZaFjWXnqmDGdnVmJE98LmyZCq52hasKXzp5fWzDwSG8QhDEQQU5HsF8cS18rDNPhYoD45Xk",
  "key28": "aXACHtoxMXFcG942yYWCJpypiNZGcyTjtpQmjYYUChSNCw228gwMvH9PnE1WuQiGPqhDJZ2TsgzG9A2a2vw1VLm",
  "key29": "2P8fLhrLPSmKr77n2Z3r7ggM7mZs9fwM2NusUhkPwmrWeMQcYMtN5L3af6fgBC1Buxx4bVSXBvv4kPCQeXhpQrRa"
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
