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
    "2wMHCkHJyfS5CedGrj1g3eePbieQ2U9vTkEmkHRebLNAN2xzLagssFPYs1Qig5hzBvMgvNv6cVexBpjkPk8cdqVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SmTDM7KfZjQdXP3QTb8LSEr6fLySPCrR7h6QWkttCAuVpV7FTzrhNoMAGJtLnawyPscCEoC8NuMfGGj3Ce4YAUS",
  "key1": "4QHzpqzRZyc2FRCATva5AYJWzNRzKcyXs5SuCuTBSjk27h4TRUkLXSdtwkQwtMHv9JRhVxHL8kuJ91u7oobTAPpz",
  "key2": "JPE2GuScX8md9jrNSRZJnHcJB4mtRkxpovyHcEK58QieiUNxkZDJ3DfhT23LGZqZUZUrYoifTzA76cohDch5Ryk",
  "key3": "2hSuPUBSyZCURFjWGhufybjRxSD8gigt1JGjcJrTM4sD1GzVC6Z8RaZt9Z62JmSmnqPPwVsNgDTqJ9AZT7GWq9PS",
  "key4": "3pd5Mnaz7bxuHYDMjpYqXNTaUsBAoGas99Vwskz7N1Jc65PYhjpgYGCGKpfdFyVQ8qB5h6NuH7RVF1Rq568ZLZUp",
  "key5": "2tLpLF2EnZwnBptA93jz2dm5KysXP3RAmG1gP5bdvWaY5BBzFXihWRx33Hqrt41zGSvGPKkxudf94mG3dro36Tf7",
  "key6": "43Gm9uSNBnMYmUCk37ABTJKSRZ3c58Y9nw5mdD4Y6L65BsVJNEKNrxTxMVxrcghtnUKxQcibSjhZ6bx5FgYdF7bU",
  "key7": "5tgbVm9iFDyn2hBsKnph9qqEPpFuVUErU5caiH1cuDTcJJxqtwNyaukoAuZqPwtn1kTayuH3Zn3pswJu18P2XZk8",
  "key8": "36kCoz1LhYSyvtUKckUFhA6KsFEVGZWB8g3QRaQ9RD9jZ1bzqoW3ki1VEWreHyzUckEXo9SZEQwURPEBSLKUZTCA",
  "key9": "5U6fRy9w2eNR6LNck4HKdCaxV8cudN1L6uH57bmKfUPkZTAMAmKijaGvATbJDwbLpmX3FFEcoPwuBXf5gf9xZQ7L",
  "key10": "2Uqy2gDK9Au9Yxue9KXUY7bCFrEuwJRFo4WjnM94WZV6fHhDHfwwRogWUqAyxBQcVJ8SDAwH3ob3ZhDNVuj9gEhR",
  "key11": "MpjkvsjQTGpd7UsnqUWHSsj6VJ4AdAZXX1yxPkBHEkb922bV3rAXxaK4F1A9FPgchChX1Cchr57ad153XzWGYFc",
  "key12": "2QZ5X5HJyEg4fJSXUiLvfc43qooSRdcevYfL4Uff5gXRfxFtwcxsGdHmbZn6oW7DbWLFHhfCRfMYJmTnKhRmDUmE",
  "key13": "4czRVsrZZtgw1r1mczzQtfhZb75w7Xbsoha5F6y4du7o7K4Nw45yAknVSQnKu2xUyH5un8tH94GQjwhzVfMNhdao",
  "key14": "2v1YsTexSvaKBcswPqKM3a3WtAy6XPvuE5VDFiugDdCErXcBKorMoDRW3kQKuUDJyNq5FXytz5B1dsEMZBei5PYM",
  "key15": "2m85KM1EKhCnupZXAyeoTtXimfyVABkkMEDxu33aQ99zz5iRWmQMzq5228vXmd4SmY6i2aMJJbJjX7YWcLGH6sYM",
  "key16": "2iAHbu6ddfeVMArS7CnrBNq4G7uuY5kF5ndqcRjMR1LSNLjr2S6EJhSkedwirahmrCDXhCmw1pZhdy8V26JgLDYS",
  "key17": "3btKsFo8AYpLWYtdNLESJaVyHiLLzYgJyeeUMHbfbinbfPJTKzapcLJANqJXiDc7xyoN4W8wsHE9mSxAF4JTb4gE",
  "key18": "ySvMz7Ej1cxGycCgGdSHCzUrLQRLwx9ktsfbVC4DwEp2FdWC5VpxfPLQipqMGF9AcDBeG7iu16FXku3ziabdhvZ",
  "key19": "sYd7G1EyhgYA562F94LG6cRH9SLRbSr6QFad9y7ZUN5nEyUQB1iaQXoJP7cpatE4dy6uqKoTmgSDUEjk2GQMNJM",
  "key20": "3LkcpoCuB1v8XMuRqCkbvgte5CW2B1CU84uHmsukXjgwoYV5dVM1p54iLYoNGu4v7ZzsYhsQNgSPgkphK36T5Soe",
  "key21": "ZrpdVY5LZxP4vcTLkxPjckbnQpE9soABXE4WycQ7k8Eyc5KFrPzU1iqNy2UcvZXiiWBF96fPkcp7aLKBMWG1SEM",
  "key22": "4xQzJPuV9pL8NdZ8YoLAcptpus7RUNi4zHgMyswPPWSsSRW5TBbS2sqJgqPsj5oQwi9BqoYMCTXYb2q5j8DQfTpP",
  "key23": "swQo1x94tSTcy31WNs8E69HXj5t8F9dvhqxZqtf7fHyeCZbc4yZxxPqGP2ZGUV12Qi6b1ZNM5jVe3tG296on7o2",
  "key24": "4uHBLN17xmQESskJikc44yoQkf2Sx7BPUucpnLteMDjqe2xMWxWjE3wdFkkruG4vNwrYFy14EHqfNEMwyR5FrwHL",
  "key25": "3WNsNtxqyBHtWmJpLLY8BJneCaUMUsUyLHaAuu2x5hksMcN4HJByHsz8pnxvVFKcTtDTHBmk1nmY5CBdL2DSz2PW",
  "key26": "wubc7aJ8aBQ49JLmgfMhNy8ShvsGGyniJcrrF5hV9iyLDTgo8gKCxHowPDGPHcpngufcGZv4STxb2gLMmGzSwqU",
  "key27": "5JMfXcMHmEkDeVvR2E9r49cuZUUasiumhkQMXfga4HZ7JDovRxEcWcuGJrkPoYiKTFRTpYrz49UZqNzM6DE3tpLR",
  "key28": "hstF16MnhPiKd7Yq2ZcunbdkUTyYyZdxDiT3Mx2oJgLuyCpKCJKyciejNTR5QijpLhPn83XZTtY4uZBVBzwbaBJ",
  "key29": "2br2PkxQbfZb8jqfD81C9ezZdw5SbBjWfPj2xmR9pctcbhRYoYPgaqpmcQ4r4WL35nBQLtp55d98uRDQB64To9hn"
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
