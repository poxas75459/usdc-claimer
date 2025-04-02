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
    "4eKSgJyr2gy3fuuyiAVKhgJYsAdXVFV5i4aTtEU6wmoqaVyLxhkLazV9MNq2a1t1WsCmVdE83hY1rDaCK7wvz6yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bHm4wjUgCaWWALcRNowB8vCRsnFf76E23JPDUuiL6oDj3iJZt7TpZfH4tURwAckkcgvsBkWmF9yCqhAmnhW5ZzS",
  "key1": "rs1ogBYFK6JwzvYWv2LqnJXqvxpSAwkwCKJu632bifrYNUEF41sCViiu1R8UvYV3D5NTsmNbTNLNocdG3ZUV2ay",
  "key2": "55DihRjdzdxMVD2cC3wUvGWshBvLXALM6nvfETDWCdEtWZdmhK1XsL3HDETk99SJLoBFn1BszxEoVCgomoydhgFL",
  "key3": "EXgpvhdmRV17n8oJf7VucSVLsFybjvz8KyDv78D2wZjnY4A3SKMV51o7qSkv3oL8RG48jsLP6opCbvYtTAHQbJc",
  "key4": "q1AA9jwcy5XqZmhssTdmox3fdNXrHDHBs8H34MAdtKvbp7Yr4AfwPk4AWy84vB7bqfnNFzy6gtAM4jfsGhqZAXz",
  "key5": "2QXSM5ZoT7rnG5C2dR33xrM8itkDCq51bZwxgQ25MCPDeJUT9MiVANwhviWK4iTUVfJeMHt4UZzwzZJRGW3wNwCb",
  "key6": "234T8FAZDZCCdL9GCvXQSo8BX3CKWcHK6UcG483Lu51eL6N9N9F5nFBcAhUUWPeR8GsiZqucZ4u7pmHkMWePxXgd",
  "key7": "5ucznkZvbDEj5EWR3MqT8PJ6VPN5wW4XSekCJ9crCppVo5Ahxo9tdzhZFZDvLEeT4b3AJrVJpre1jk4fdKdqJ69V",
  "key8": "4j5j5m8y5SX81mF9b4zTjCRfCPmGSY2rAmsedet5YgngKnfaXuBPkUCB1FGN2DFp94FEMmYfjCnqLHtzQqA5v1Sq",
  "key9": "5Puuanu1WprqMwVAp4iBTkWqXbfNuCCnQvJHjS4xh6mPysGyRD1QEasdPMhiW4cDnN1iWXd7G4ziRbk9hy8KWFJD",
  "key10": "3fSy8rjenP1Rzr6xy8WnwTQ7z1xQiP4XbjUor5DpwUwBg4duVs72rnMKWAeUjUESb8aa7bqgQswLLd3Sppjy6dQA",
  "key11": "4WWcq7xkR5rYCcmSsEgmHKWpmVrQzoSFfaQN8UzU1SEMsUmbAgvurp3bcfMexULGPBeEga44GQWbXxGrLCEBQxk3",
  "key12": "5BDH9aJrn58MpPvYfibS2m1ao7rD953WaVkruyUVLuArca17vuyy1JmR2LSfdvkqfkz91pKkrJEMExbuJGwA8LKq",
  "key13": "3ryCAXaLYKeTFXwTq2eWsMkfVT1gDgMWpQ3fVGjCMcGQbpMbZsb1s6MBdjmDp66cXgUZVo7s6S53x8vuBXCkJNXC",
  "key14": "2UhNux59UZ7ckYd13XpbmZVGX96vdWsM5cUq5HpUHZZ9iExXs7uTMgQbvzTcPX3jK842WhSov9sRmz7VJr8AJ8qq",
  "key15": "47QUKowcUy7oXGk6b37CXFPRCvj31VPGhKYCv4tyeYpUCdqQkWU3DXk5F7WEZZhPs2hKytD5GGkrbjm1dH1pQwm9",
  "key16": "CM5u7mUmYyEmMXfL4Xc6csfacpCVA6XYcaYvReU1cpcSZuT79dMWWNBSGiyRxoJmkJ2mXn3jEacmFWjsPdipdWH",
  "key17": "3K7Nd4RwGHa43Tp3LG4rjXGkVD78SzNMtSBjTQMcBfCNAUykuWpfnrqqF3yNpjkSdyqvCG2eRFHaH8665hBQiyXx",
  "key18": "4hQS84WM92xFsCpDyZJFeqC2qGM4xcHNEaWdWA1z3jjWtkXqDrrmG1SAx5ZW6H12doUAzuFHdNSWRDUpQvz777m1",
  "key19": "5RbrcvQm9G4qZ5LzRYnwjtJ9X6z6ks7AUSG9jGXBVzYTx35xFUAA8TG1nq79EdVGb6ksf7V5Y1LX9oC4SV84rQcx",
  "key20": "HV2QsvUZHLubZhC1egDhKtGrQAhFNMwLuAaAXibiY5mpgK9jzeFe7EFGesmivG1s7C6SvVEfNbyWqpCih7cEuiP",
  "key21": "4EXJxnPNoGiAbSUju1WTSFsontoZNJpej3g3MBsNSpCF8wDuAhXbLQzPd2UyKb6iu4uVstjWkNiA8QnzQrcPqX8t",
  "key22": "DymgCyGsh6W5NziZH48M8aV97F98chh1Erdjt7Lp9vnRex4PNbfpV2PjsLKvpHHVAhefftNNgcTTU9eHcaenFEP",
  "key23": "HsoYAzteceg74SGVrcUNLB56brti8KysAngZCfHgtHX9Nq9HYvSUUZYH2mY8P7Hgp5YSVN4L1Q9gwP6aso9Qva5",
  "key24": "46AE7Gqef5bRR1oLUSfcLmy7NVmApQ2YkQZkKGo1iuBNhvH1scg1VtjjRCgiCP39mFnQkoX5LwVMfk5qLpX3repC",
  "key25": "3fed5wmHTmj5TjwaLj3PRtEyxKdXNN9pKSvNgSUKrGsdGnxw4keB4HWuCkAHt73MCvApe4EBBko37yQDyt36svxk",
  "key26": "3prcVkDDcGjSBYpLQD9WcUk9mHtwg1w5XTqhfjyE6JsF8HvyA3dC44ZddsntN3oTst2mfiNTbypQyGjvs7DTev4E",
  "key27": "5pQkHw55dYJcxqnVL9HXxobLNTB9dGppaV1GxnZUDPoTNp1w9pHJpaCJftgPNJs8f2kkUq4hybESfy5N3RXVSCCQ",
  "key28": "3Wz6muuidnuU86evw2yeB5GrRMHeAAuvVwWPZDCRZkU51ZpTTFmtXzLEPF7KyNiFQrphbu1oKnzmYMWFHMks3R5p",
  "key29": "5BBWmL9zYyxpD96sUyC5vyzEW5pyyfiYdNE72dw6YL9KJUqF67zwaGoScZfEtGJJFwGhz1Aw4CLC8nTxEomyB9Ta"
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
