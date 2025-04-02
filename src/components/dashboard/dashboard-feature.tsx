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
    "4dAF1X1PyjLrFDuaK53oN6BTRPhVXKvAKSsF5JkrRBa4M9hiKv1mhapf115QiPgfga5z8WhZHFSY5WLEJSSmfdJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mh93vaFVQaBsexse1onPiuC7WUAzUcrt6znRRt7XUJfF2BbjHpwA5Pxfhrq5miu8Bp6Jexw54rtmbCnyXihywV",
  "key1": "48kPEEY6hyDVf3yKBY3KFwzpPurKR8STEpUj7G1K2dTUCHnRgXbRoyraRkHyxdCeTr1wAXXLMpX3KNTpWTYQNfug",
  "key2": "3RnoA3Ha4eFpfUhxcJ7wZ9VETNmCXFQQ7cH8JB67PAYmmQTMmTonojF3Hr1DmovoAUW54AJMKqT853mykQkYCbTf",
  "key3": "5BX4dr9V3nakCBsp2Yn1WpyBEjNX5oEBHTPqDeJnoQPFZyaJbhLbfuhFQP8rRvC898Bvg5FVe8RbwzJXe8871Pmy",
  "key4": "5FAA5KSKsXmnBpwdABooR8tG9SjgHQigRsAKSYpeV3zRs5sc4mqCSjDXiZEzTTmgFXoUBZrkJnzuMtHZbK5XFRJz",
  "key5": "2VrwaWV5qsk1owP1FyPiNxk77cp1xHGAhEVRaVJxtMoDeDAZc1RojX4zRSovHz43pMu6M7vxaWnHdveFKU4wwi1m",
  "key6": "4ANUuSmkkkgojnUgii2FKgkdjjJ1EJBLWywfVTVKck5xy1tTMakUgNn8qVwdYG1rnFiH8zCTRQ9ikB9WhvqHhZbh",
  "key7": "37MBRUT7Tc1JRnWq2oPgYHnTzZjWLZt5SKjTxJtNeKD8MWmDx8FyEKFkkgKKD4xmDP68c1H2mFB3tVCpYTC9HijV",
  "key8": "5D74sPbygNVvb8o3NZijoJibcfnuZM7VhreZcPBBUbMhdGpN79FVgJ23UQXbe3itozDKQXc3askdgCPiTXd37Y37",
  "key9": "qcaNTKua1e4esttF26wTuHbW7Siq3Uo15Pvgj4bSypiDZYt1NfDRMPeJKos9QfEP2BjFxzvJ9X8vYRULNLwtRUr",
  "key10": "2kAcWXrWZmw3ju5pdaKX3YFpYbyNGwwFoTsAmocGyr58SF4GVyXdVhrEajABCfYmWCy74QBMtYh2138zNyLr6zxv",
  "key11": "4Uf9P7zCMtXtbHsjSSnKgPPN7wbg3JLu5gQSMciGbfuD1LT7BtSE3YsB3cMpHymSLZPzTZRD87ztmWFSREzF69CT",
  "key12": "62MQBw3JbHecooyUPMfgLoyerxDwEtF2qDza321qiYey8KSZ4biDRiQL3EjbjPKyr3a9FrZZMr91XfUiwGGvUKUd",
  "key13": "3MhgtJZL38bSe6THePcL3qjPxawWVJo21i6JXhztGsyfs3avcYvAtMmRLqTqduNUQ9pQ7EqVmYKMDgP2DzmQ91QZ",
  "key14": "3okM9SySNwMdA6P7YefDyG3boeygfbcQfepjXH1kzqkm6JmnxB1WYpmRN7WH6j7bHauib1S3GCAQLxN2x22JkRj4",
  "key15": "4SDKG49rQBmh1ZYkSyhWsHXZGCerKwnKiHdUojBWoJ2c51iEBVied5VLLzYz6Yxi6TxQP42P368pe8idJ95C8uMo",
  "key16": "29uUcYupCDHAGZmJiEJ3fqrjNVV3WTBo7tXGJE9jweSDo4jo7rHWdXczqswbprWFfTgYgBzgSFzoF2gDuz3iXqhw",
  "key17": "mXwJ6WQNkxknefGYb8Ki3mN356SsisSf2NmHD5GP9jU9t1naJsMW5aYfafW6s47zfp2E7bSBXw8JwhbhGMVKe5X",
  "key18": "59C7A5XhTugfDu4DyxCZx8YUEgfzBURY29iE92i17kYDakGL5JB4txbanbgkRoVwYNgAb6FC7E72QNZsmK8rDoQW",
  "key19": "4PJjEwxGYM4bqsZDf1i4hZMvMuCnqfp1qwtgPQdbKNDfwkUjTNG7sM69LLMW8C94tKjKfZSTZBZsMDgMS2TeVq1r",
  "key20": "u6bbUiz5pbyS5HXf1T1zctyyPXGcVHjkhzGs46U7nUTGLiYhSCBpspEu8SHDnpF46etqeauY7NhcSRXMhxZCcB9",
  "key21": "bQ1gHGDqsWhLM366qZTvrEM25LfXmUPPyZickSWD78ouszMydtwkHC2o9GbksDdQmBcUamxHJVn7RCww6Audrum",
  "key22": "26wTsruAo68BdCWhXrFziYTgh23yJQwSsMV2eox4shR9jyhoWokVdLdscttAXvsUxjWR5S8noGNR3iqxznKb5iVp",
  "key23": "5p57FdBxmqdMg6fw6Em9HsyuGUmw6aqxxcZRH27e2atKUuwwnTRGj1YjSwCyCmgmVkWuRsxx3SF1yFbzLqF1L2nj",
  "key24": "3VZsN1ETdektqCzRsou1Qo4MEPfJLChWyqLVGgiZYif8hkcBa7T1fNZ5u9xDzFfhYp4HJRWnnEQy84RdwYjJ8UKC",
  "key25": "5PZKn5d7nsrZwMmEzeYQVcfzc4tZzLm3RY4qEHqcuGdVhkHMe9QVzSCvZeWfW7P4XyCuHECHBbtaMukk9C31ZAxD",
  "key26": "3ZVqVEY63vE68T5r3VGSB8TrU4xT5ui5requzdWNAco1qxvUZxwmspA2fMs9Xqrj91q8x2ZoHrwNXu54obXfJT5D",
  "key27": "54HpQTU4N4kZtnuxNvBYvd8rt5xAZusEHhRgX1UNwSfW78R8W3ApEn5PQm41CRV1UaQote3MUFn8wL3gB4HZZ4yb",
  "key28": "4f84ELa8vzMEc7BacGt2xHMZg77nCzn5r87K232YjXaAXTNhY32VxAmAX4zWcdUzQRFFFdqxo9QCTduaPhFLovmG",
  "key29": "32p3zHSU5ULEFSZaCayxqmzhppfhaL6B5ijjufy8cgxC11Kn12xuevMDnzzzQ4VptrKBzVEkqYaudfkJzEJTEaNF"
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
