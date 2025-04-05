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
    "A1PdUeuXNQbakG82pdJqmF3nAz9LMctpnVJHYMH6Q9gpNJfJzpqBe5xEzdC1xgtB9e2ry1VtZNR1FdnkwN2LzuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6TYFr4gt4yxcnatfZLVSTtBsWwCvtMrNSPN9apZwzShogvzChxY4rRp5jgsqy8qYVj5RkARNmvrk3zx6soT7MU",
  "key1": "4uQFW3Bc8zGQX91wjmhnzo9tzp5VK1CieA7SgAa3KfYUMZQmk7FPqyYBVdhx3SwGWLxk8dm7vYJRH9EDVKESx4ee",
  "key2": "66HsBPYweeKtqkT3iUcn9oAmCeyW7aPsFG1Ew46Eu3WkCTdcBhbcFYGT5ugoYKe899gELT41X1Vqrzq5Ui4QfDet",
  "key3": "RxFpLanLZG57kXCfDPajBPrXd2BRAmePefcxLJXj8Gmi126Kxx7K6D1S16jXiHAorUV4pAuquDs8iKcXv7FSBwC",
  "key4": "2C3BWotu6b1Ed7Hq9A7m8A79ixPAcfgw53dffpPgsR2QkNgmK3ymaE9z5XTmGW83RNvCq9mgGrCgEGW9GNsbstng",
  "key5": "5V5BAGzdrmAqakyjdWpkZUc2sKSPsUCAcejmBnx6DeEuccpftrVdcJisWdox3k6ZFMR59FFohXefYQ45TScYZh9w",
  "key6": "3fSnwUVQn36fhbfdoCKwqARTip62Vq29ysVxsjcU3k3xgsdHkGR8i4wZJyR5BkKZUZubp31QR7miJPbi5AAxUVba",
  "key7": "J64QKaAT9YPgNpvY7mi4PsNiCwbVywYzb6zduwsKFUtA4qkb1jmAzRWCazm9C8sVfQrYqTaLasiyxGFyfDHmfxm",
  "key8": "2dP1sHTRquAXZQbFeDZufvzHA5rgpBtTWMY6xcr7r9tGrKjJtGT5PXBaSTpZG9ma1SgmJgijFKnTcVLXkqu7wG2h",
  "key9": "4FfaeYGSFN69GEM6fCYAdE94gXSkLNs35jMNXDPH359Aiv6S21fALgbSZ2eCYDBX6YcEWDvqce2ZNfYU3JxvaV4Z",
  "key10": "4ZRtuUqE6yDB9mk7efnSMVDHoTBvjBtUjwjDsNJsUNodJzG9kdCgYpkEDhrjKnEiDxfi2f8w7FjLgBQN5P9K16DY",
  "key11": "4BdxeLZnLtDr97naM5Teh5PkZMoi6YHXrAesbSDn3gYCZeKp4eJiDGH9dVrgYfUDUAxKHHZW7n4mJHsED5rjTqxW",
  "key12": "49SCgQS55ZGAPfVjjVJMtMQhqVbjqfGTuZBNob61te7wDGnQ3YQjiP2r5pGao9tEAvufMUEeLcrxPoFfBuvq5VDQ",
  "key13": "59DKvr6FSqNJFakG9qjiuSdJQYwzg6nCF7TdasUEVoNrYyStemYSoMeeHmykTHYxw6WgfYRr5QAnYZMioShUJXgK",
  "key14": "5Rc2TCZthpSYokzrDWT8JbTXFMRCBdjXLTK9bmpZap77G1yd6Va9NogfUdNEeZpdCN9koyJabPfRNrnUVXM32GAx",
  "key15": "332s831GxGUkp1so7yCsk7DGqrMqUf4YTKAXUSTbCbaHN9fsjbAvaMkAeAchSe4LF7JRebpBmPdLPpu6bHaVhwgG",
  "key16": "5YpwK5H3Td7it5d3fyp18CDDGGmv8DZVeVUtXgaEK47SBkSN6SE2ASpJ4Hq8hMyNFZqSD3gXwWtQ241whD3iXpcq",
  "key17": "59r1uQSQNeEFuSCZiHHn9ZjARddg8pKMzUdqUkhe2FX1xgbhoF6ro9Tozt3zsWcvomJ9mmij9M3maNmXv3emWgLN",
  "key18": "2aeu2FSAG1H766ELqUSCYdUrvXidkjkG2c16Fr5SfWh9gJ8PeBsrERQWtaEf8v5xkcVkwQ88HwRKFUK1gCjheZaU",
  "key19": "4uY2LkUUaaJTonztryHEfJ63mTWHCep2xoWz9Uu2N2pAgPD313AZHJSRCyhUHwgdtTiqnFpYfntnAw4sDQN8MxuR",
  "key20": "2YFy6PoJeuvaLCKfwWRz3cdEMK7ctBxgi5VAm44aY4gDkT6cDmvA3nzFc7xNCCPio5M3ffKx8xoUDzGzKghcAmnz",
  "key21": "4pvNLLeHJVMiCBzLaveaykz9EAMyA8Jj6osrXvyXCmQxN7Y4YDA3Aak45avyYFK82msgRR2KjULkAup7D2yawzFj",
  "key22": "2QjyX2BfQSLXw65DsnrTveWV2zr3hhzdJ3Fi3ESAi5bUhzKZ8vuP1RxQeGsYMTpPQasRoU3g1zdtWhJpyy1mBhEo",
  "key23": "3hpjg3ModCXHB1kTa9LRNsdAic9ytK6RxKn4bB5cNof4VDmwzQgB4U6FPUeiktswo8BAQJU7zz6Hd7m1QWxqjD3s",
  "key24": "4K8nVjcFbDmZpumNaNgAbdJ29t8Sad6b8nCjhcQ66TsANbpNYL89Y4aD7TgfuepMzLdQVsYt9sMV1WJ6RZPuz7fL",
  "key25": "33nL4RVRXk2Nsgnd35fDbAkiY2q3V6ekCVVRqTo5TBJALxqL7VBmeZ6eZygzgNECQs6MVdpVu5qNsQXkLKE8a9DW",
  "key26": "33jyYP7g5KZF2cbPUufFnMszgDazw9zaNk2QczBDoV3G58ydwkJzSkbGCjZvzSuLvxotYiPiBzGUHDyNxdWg17cP",
  "key27": "YFq59o26szhjBJUntehc441NPggmLhoaM5C7BdibuDmEKHarmFqPT7rtFBWfTUBq8EJ9gBp31uru6LaDYz8Abfb",
  "key28": "CH7V1UW5vBFqFCkmTuUyNE47BRaDNdD1AaGGodnUd8MJENekb3Fa5xeeJae1qmVvTqpdSDxXopoVyYnMqnTBBkk",
  "key29": "ADD35wKpgFQwqCFcvhYGc68AHyzExWn5y8m8CmNqyd2ZjjpF9swWyVidp594ZwFejHQfySgJqg5VGJkAXVMpu7X",
  "key30": "S6mpzkAnazCVCVDXzLRYR3vPHfVR8UJpLaz5tL5sdX1WSyHGVfKpXp11k8zYev9uF14rgwz9i76HEruQUPdtRCh",
  "key31": "3RTWdMpe7LwEpRrYLMfdAM97HLE4xs3moHKcLtWHZ8NqEni3KKUKMUNbjgHqyzEJfLu5L21GmUSr37LKfboucjBm",
  "key32": "2Z9eiCeeRkXcMPo71hfAN8N19wBnFuVD71y6PYjmjmQ2KGuVmMqhJThN55dmLhaQVLCyMEUfB3BUCjsbuff96hNA",
  "key33": "23sUnXxNP9oYMdeoKN6L9b458zjBxhnKpLHvqJdFBcwk7Gozpi2yZAUjvXQFdCN9H1uoTgTF29Br8nnte3CAdjHk",
  "key34": "5dFemzbp9w7b4HMd8DELw69aVzzaEuu3CjArnA5seUZcp5D4Xu8RNdccyotJXG4RHVP21HHnMVQ9shYx3SsZ9PAH",
  "key35": "3HQ3VBodQraSHNuWR5qF5iNU4yvaikHuxgbePHeWUEhJJV9PwCAgcPWHhjfgVZaoAtBn2PATuL9omqSXGmfjBCvn",
  "key36": "26EXLK9opJyPr7iQMSEeMvvzC85qnzNvuiL2JQviXKhQVwJtHoVpug7HpAf4DXnX4fqjiKCB9vbvdtmD5kUcXucK"
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
