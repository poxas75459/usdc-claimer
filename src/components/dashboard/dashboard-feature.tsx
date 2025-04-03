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
    "3Gj5xCGHpEo74Tawohj5k3L4G4vBYSw6zESD3xLykgingYuZc52A2jDvQj3U5UjdAoJ86BhBu1vcj81tu32tEJU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sktrLKdYoWc8A6SZCtu5g2QDPheP5cVr6qwJbgfjmdYTpDAF5NetQYmRB6MmkjKdMryTbqbTK1yjUcAR6nHWjrk",
  "key1": "2GKskrkH7Hg3M967ZJkgEd37FkUZrq3sMSzgsTEwdVpUXPMJqzsEpMkDHEu8eiDzPVEytsBoe35RQ7nwNBzcf27L",
  "key2": "3BKUgT2VJ94GW3BnMti5o8SXwvXrLww3MiPwbmCvJqqdWbSjT7zuoqQjivepx9nkjd6DW317PMCguJ7XzxD2UJ5m",
  "key3": "42hN376G4oCHkwCUqrDCT3aJFr13X4BU3VHTAAQf1rzS8c5u4KHZGizYuuJXwK4sEFDRYYNBNkxxzMcdJxbgyrQQ",
  "key4": "47R9JQrhV7PdmrVYKxij4rQxzvCGkg1aaaCCQH9MMpPtSa2Gw8MnoDdnyiDxt3fDG5dPYPz89AKbhBFDJ9uxfmRC",
  "key5": "4BiBysy7bKdHay8ok7LKUfhc1bZSQpdCtGX2PM3yMu9kR6khUjPN6x29B7byWYVKGgaeic4Fg3uw8a9aarf9tSHP",
  "key6": "4NKmFcdz6PrSnoeb6norEHm6nwVKzNVd3xsTgUwpKCoPXGcg53nbNgvpfpguKB1tP4tWLEsDkofejHQANWnivMPL",
  "key7": "3ttYwUQkamVws8VSunM5Ys42H3AG4t2uUvpZfmv6usy885aYTX4qABdcuRczQ1CVKVLpdq13SoF8nrdBunzYjLpJ",
  "key8": "1MVzomshHyw7ECNBjL1j1jRQVxfDeAVRXct41hXu5TnfDBUEiSAjdyEg7MDq9B3fALVQfRo1P1Er14P9o4wUNJu",
  "key9": "2JFoou65DyzPGPQag9BtxdzbSNWkjtXnsZGH12BhwWNmiWSFe7hFR7LGmwF9SXToUD5GpTWXDADih2QuS3oLArQD",
  "key10": "QF55waBz4kAsDsnA2919DuZU7BzPzEGX9ooWopPxVyAcXsarRHngivMUutMUpsssx68257DvSKBA496YMDwYytH",
  "key11": "3fxPri3Ab5VGLAZM5yR7gAmhhsbLjsQvCBK76PbNBCPoYMkfziMxVoVa7XnXoGDA3YNSQxR5t9Q3e1hCgwYupFjK",
  "key12": "4Jhd5UCYguu7Dm38JTm5RtwqBefBF39rCXHNV7MmjCSxXBJbrt5tHqyxSAGwbskNtawKXYCo7n4GhRB7h5FECmck",
  "key13": "3UFeoeuUY8NdvLCEiSXJDRHLZBjQ4dTcYw2uf97yAauW1bLvgzc9Fnzxj69AG9EiVQ9muUF6hAvF45dxHQkNnng7",
  "key14": "3jBm9o1wEU4Q1NApBN2GxyhFnxDBETAKy1dKcjRgJpzYDcoHWDzru2edP1kgEnLpCdu9aGn5oXcksDhrpsXhMQDU",
  "key15": "4fAMmEFPuypXCQMcaG6PxVmdg9nHoxAdxV1aYv9uPZYHTkymsFkx95rWixwUwZ3pcpLv34vzxM8c4uhzpfh4bhaU",
  "key16": "A2CPtLkAZh7TRrg52QemKoVkyLXxC6fA7dVKRT6durWoB9eAcrFGpNFPsP3a49zEB1VowFdHvbdKTa2MG8q5jjS",
  "key17": "5jnfWjzGyWPiWLacnQ2i6EFRPb8XUVa9KiFL4Bu4pzcEcbCadxRStkGJXHWMrJdGW8tspBBSjiA2ge3L2uCjFAka",
  "key18": "rGnsvXy1oVZKKfmQXXydUKdXEfQfBUEYh55jB4RhTKNAZUeT7t4d8EDnSHpZJdfAYeQ3mteD9whpye7CPfdmM9W",
  "key19": "4shxDepsQLdeF8BGjZLuBVn2M5pv3yv89g2T2QnK68H5Vwdkz7KzF6astmbBqZzkmtRFqR2hVcAiw8ps217jgHm8",
  "key20": "3bb9rMSF9GLsLsGa1XJf12ATAcrwUeF4Y9GgEo7r1vRNr4Dz4otFcXRM9XYNv9JD7mnyf7knzHDrQG6t5qqnUxvh",
  "key21": "3qugjzCeDeCC8XtwhWLazWSzmhajhGbNoDwW9qQtYf4bKaciKppHrNDM6jZheExijN9qFH1Mc3GSHtayeGWFMPRh",
  "key22": "4RB1Aw4axyjs1CQxbtdZTBaVwxqLAVNxdEZCaYbJLnRANjTJCbT5zGpcW4xPAjY8VNg5GCMMMqS6zxuU2zteBfNC",
  "key23": "XpvT8HEvy2uSpQUU6brG9j2AgKzUX2nRg9xQZSNewQh2Nbk3YWM6krzVTpbTsFHeAsfWqb77FAxrG7Vf7g71YrC",
  "key24": "WFqPrgnMUhNGY2yJG67To3hdw2H2aTadHaypP7vVJdMbNJTc4Qu4ACXqBEi3XxAA8c7w413Pc18tDnC8PP6KFqX",
  "key25": "4XKLwtBhzNmDo2mnyPP6ZetBJT5JAEmN2G5544RrP4BRYqzVSgzjNBkMsdbnbf2HErEMGzx5yTdDAcNBrNHqjFi8"
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
