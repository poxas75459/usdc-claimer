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
    "3JFbuHuAtvDJjWqbQnY5SVxjDZxEEZs1QW7TB92V7i8EbDfPmhGHsuyiWWcdSDkrUDhr6J4zvpBSMFtbFeaSAEmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64gsvqkSxcVmoGqcSY7H7MvuWwfqatW4pXt742tm4bSEjjBLjSZJJ2Rm7d4wCFyXgSGiSi7CkHajnAuXSC9TWUuf",
  "key1": "pp4AsqWfCx8hMnB2qbErwVk6WFe4EJp4ub1c45MJ9Aq7jHsB6rNpuowhky1RoX3tMibf4wnUPVpvNjqA8qHPfzY",
  "key2": "2MbXAXguEexr28ZxZxKUH5uzWstYpkDYBbnzt7pszPfT83o8svNChZwtXxbJFW6GGgV5VNxJu4Ss5ttXaZMwPL9Z",
  "key3": "4wufnBe2r53bQ9X1QDdbW5BpTXDLTZF9QsFYG7LjBWuGocuB8VNPyBnV7yi7Ld5SMaaX7Yrq1nLDGkw1ZeKoB6Zh",
  "key4": "21aRmovY366zuEmRRD34jDCWpoPs4229edBkRecN4FQhTapft8GX3PM2jvw7UjSGGHCggAcBDCjcgHGBn7MxXcn5",
  "key5": "5BTqtwqFMN6XFEsVcFgLkcWieXWTkShBntUp5ua3JgW1NSXohfwGgwgExWHFxUamBz8no5QRQXqh6p7zCYUJku8z",
  "key6": "3kGnAQ6hAzh4bSzgrrJEngyw4WD1xGD6NCPGHNd8xWtstVJqVzYHfF44smiT55m61kJ9MFMsfbTpcdsvSVgsG8ar",
  "key7": "4J19hkpFyMgpktLoCftbk6dPvhftPWGMgo9t8kX7NyEw7mZfundWV5VgdLeYxJwAYVcXE7mBf6F97LggWA11HZXp",
  "key8": "55J3w9TbBqdPG1M3ef3DWnS2FZrx1M1RpZSDkRQnSCNtsj5mJB3LPwCjareAAo4D82SKkREUXXzcUR51dtp1sauj",
  "key9": "3wKxTJ1MdWBoSrrWuWWCT75ftx9W4Mrp4DZ7XEybT9QDnvvpQExpANArd1Fnn1FVtRH6YLJyPMcpt6qAfkvJFZTP",
  "key10": "2XnZke8x5KdKap5rYUYdSVnjc7Se3GrLPVJ1ssP3Cx93cEZJHBLiHZttovUEPzMJiDZSzKxmCQSHc232K16keE1Z",
  "key11": "2pMEsrBHYnZq6SWTLeJtvnPmw8N17Y1y5B5udFKbo24AWzsLPjKutK8HDEq3CuQFrqVYb5Bxknd549JwF3MWb1TC",
  "key12": "4vNNL2E78AnBpDYMkGMPsq33GdT8u8fdPjW58pLWdpKJLiyaagpeKrtbmUiWkApbbH27UaP8jwduMqLSLHMkCqD8",
  "key13": "5eAuJWrLn8MrbrY7GUUvvHedur46mfiAEVss8aA32yKcYh3XRuUadK2vWE2jdeJXpmJeWrDxtcp5XqZBdomkZBHS",
  "key14": "38HTC86txmrZXYXoqzfWFL7kfUwFRVxu4yMczN5JbWzDYQdXebUboAnSmZaDMHcaVbCP5qYWRLsnknM3oGkVaiX3",
  "key15": "5Lmkh31MbbnvpE6THJxGFWZjGZMbsosEdoSbL7HbSNCxuth7e6Dvz5YWxffBpgRzW8tT1vRvXfHveTP8NRfVJtkA",
  "key16": "25JiT4AaTj1fiHYjADwZPeqX2ncj8NWWSvHCdFtV44nwnc5Y6fK9UssYhj1oEdkFZATMHRoL2yDKyAj86rqELVfM",
  "key17": "2RrgUyCoFGKaowbPL62HfzUBi8X1efPyQvnW9i8kiKwhL7jKBXR5GNNaaFMUbRCMtQUKgaSzYiLVa2tb4eGmYBCo",
  "key18": "3pBQjr2MWyqxfFZYVmVnjAtFDvvm7GDCso6c2q3vjJk8topMwNCmwkByLj1b7xkTUkQUQMW26z23CohyjnrKr1RJ",
  "key19": "3AuQDgzJgzLTMAD5dGvHrAb6V7FeojEe1oRrcFjPtCkFK495KUKFkZsxeXfJ2EXwvbhioDKKcTd5x659pR4WMHyb",
  "key20": "6VvHUaKnmovDJyPtXz4wRLR8RJ2gCKTrAVoFnBsVLc3GtEfm3zL1J71pPSN3jLBFNYJGjRA6DFrHmmbB3Msn4A1",
  "key21": "3vRjPXViNXYLZ3gbwVtAxX7jNgExPphq5HfUnf343Uktqa8mA3oYYM2W2BVG8hhbB3nq4vxNbcDMq978YurNjHz",
  "key22": "5Gd6Pok82DQUrDQCEf6WPVMUi4nkCzPTG6Asos5JuStmnDUHsmydv6zMMaoKeyQTw2CoBgAuHC7QR48ZAf9VeDc1",
  "key23": "vdDyrADj9QKUWHs2VBX5UomzwGDu2bzwfZHuLm5nLB4J6WdLYJRXzALXGmBkmdxhXvETstk4xkPUcJbHgMFGejb",
  "key24": "67cvdDwogi3Yvh3uDBiMNrZAqMpuQisVBo2RzGpFWDrwip85XUQMCUagwVZMXEZGq4DTDpuUo11hguRvqMHzSVM7",
  "key25": "9Gy5hXpmxAcM3zoc5WhEGbTciJBmUTVHRLqjmHLY2oURhtLbTgQ3gJtvaEzpq5x6WrdGSmCzxPeR1G4dLRaniBZ",
  "key26": "47oQb4qUDCvCFE2bWiw1jB7Gr4Enus9ehi9DhFc3gjcBuz8g2uqWU8vESW9v1C13t3tW5noBvjdcAdGqjmVfScXz",
  "key27": "5bP4vEdyN9pMNrJcLbyzUYCurnwDMy7bpvVKYpA5JPKhn4LbL8kKnmPaWaKehmc9SQot6kcqjE4C2cxcm9RjyjPJ",
  "key28": "37zE2y3orPVkU4oT9yzeKZjrTjJWd7G3dmf9DMQGWu9c5wAL5hH9z6Qu9hZJg9KfBzGyQTHQVELWC9QcbBQGetbX",
  "key29": "2VjsxoLm2MaM232X2LB6mMqd5qvXmUpdXsUhUbVR4yuqDJTtaELb3PbXHiiESyEXenS1x4gXmgdPTQf6dnCgR4Wh"
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
