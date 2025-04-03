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
    "fxEth16PAmbi6vi28G14XAHZBwvpzcn3tZkFwgAB9Nskar6geGqF6YTuPy3djuwgTzdmJ2SuyZNxy1dybV2N4Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7A8mMW6hy6xJUwRyPRxXsApVfes2zPc1NLadvYbdhvxQ5acHkUAbCPK5QQeDweWC9qpWWYv9a9noY2y1xry476",
  "key1": "5ywaSETwPvp9M3z3aQjgR6MLsGrMsAFdtXd3jg3jxj1nhWW3EmNnk8HZypLMhCpcDDGVCtg5pauqcsh8PPUXkiwF",
  "key2": "YjafErAYVrCP2vFPA5MxUo6hhuZt4pD7M69v8XNByUU1ZddBKGiSYpgSASzf9E1PFM2WHyUdj8watcUEMqxXBYz",
  "key3": "43mQigQs5fiuXgXVY9kymG7LMRBDFC4CapmwzoAWQxkzb2DDXDeMe14rYVuNqgNFvL4Vc43e4JRN6p2wiPJnenQR",
  "key4": "5jxz69hEYsiLXBHzowqAj39ArE4b3RfgFf7xWQcE4o7evAXcvuSn1wevZY2vaRjM1TVGf1b4cgFbWVpcUHeEmEez",
  "key5": "yfq4BH37rCc68u6V57NHb62cYPbLrXAH6w8c2PnGauGUUsSK1FkAFkmXbgfsSGRsDviwqbW2oREVxvwKFNEwgQt",
  "key6": "4HPyYJFjuNMwV4d34H5nePqXCRzo4vTAvgzy25V71vGhPUFyeBZQn9p5CdafgKzTd5UvJQymNxifsxxXFwhAieYP",
  "key7": "679CP9U2rJEnZi5BNjyWyeBoWPdpRhsgPtkACwPEfXvDn3TUefocRyTdD4maGZESRPNguJLMvyVUtE9pW8ufeQ28",
  "key8": "t8UJeTyy8Jywtn3BBsxiUWgxXNRbW27rgUyY4qSfEvE339VQZvNF8wK5g1yB736kRWDkSL8ykgPimBPD1mSD62a",
  "key9": "QQ4xVMxuQsLfikd7Fw7psi5fwP7onrsaH9rvSXhHtXPS39xh6gUwa9DGPdqbt6PFR4fvBqCX49Wg6mwP5dH9hD2",
  "key10": "2YFwYHWYWmDCijviReHaJvZ26aVgsLgouJRVUZ2Bng2jspwfnkhyK1S7ZVrtbHLwk7TXcWZJ1x9FDEDeFyid9Ekh",
  "key11": "YitvHnw4oEFo4ZgrXoCBKrihBtFsahqhxtsuoaBZtnowQ9pJt52VsVx4fCFLQEsnovKnhbxjiyucJepvAnnLByz",
  "key12": "383jaKvYZWVBhMdcpHH1WZn9xcEjQbeGdcH9CiKrSMcbV3KNWWqYMi1WXvmkoUArNK7j6ayaFQSyZpixmyrWyrEz",
  "key13": "5bzJuU78QFsWx4g1krbgXe9cS8KAAU5KFBmLv6tpPpp9sg3cJz73SVNmk945fpZBpgM81PNe2uh5sxpAkmnFaoSe",
  "key14": "5rirzp5p6uvqtkUXu7BT37GgoUnAfsxry73AnaBSi1BndQnwChSGn4NWkcsk5Ja6rLyCeW1gZZnpv2uwkiQggmTf",
  "key15": "5DymzcLNQ7WrdVUBvcUqgVcQPGJQuQDskirSKovxx8T4oK8Ysn7QCzDL1VDZzkqXztWZib7nbn6D5bM9Qq3WeRGK",
  "key16": "3jTB79BTuogpVbcjEtX2cvU6H7a55tgAta72AxNBZkEcaxbG97ZXX54qo7EUaXsko12gQjNWuV8i3amQJHpyV4FP",
  "key17": "2WYjwbzu3aYswE6DnYqfkjqohjWxKHj6HARd92tPgspzp5vfKUqxyaJzuqReMvnm2KZZagHd47GbjBP2bk8yKic8",
  "key18": "4feJ4FrsXrqyijQibwk4knsPGFhNzbPhQhvoav6vhipiX5zF9FU2trMcarhRP5P553rupaFymQEKAhtiposZXsvZ",
  "key19": "3JacFQhmC9BykUgzKBBz9jRr6xu8oJ8a1D6Kt5vUdndCfg6MqCjrnCx32zEPScxELED4tLDZqi3i38pRTzjTvBXX",
  "key20": "jvUDPyy5SyTmBMWRdfD2PuJcqFnaUgSS3qTKJTUzZoSUXBBJvV1DyjXqstBnonkMAPQcdfg8nn3c6Zjn6nERm8T",
  "key21": "49Vk3HvQ3bbYkKJXyYoMEUb7g43ruVNhcEtvDtmRroXHauJM8txQunjAHt2Jy23y3gUsGs7Tkb35xy4kAQb5xR1p",
  "key22": "2M9352G2t2QexRgr86UK54nYEiwUbdJYsVWLmxMVcWCQHV5xKgpWXtBvMNwASc2PCjN47qJwMyynCVcED3qhgSj1",
  "key23": "4fyn8RT2Sn3Tq43268ycbGzGGxpoPCqjJP8YQ8J1NCFKbpg2af4PY37zkWizgwo9Nr1ZYAMyk31jqmDVpQQH6o9L",
  "key24": "3sMd6CPmU7EoJ87dHiEjgn5iXhP4kpMdLRDrbLmgEUg3qPa3X2Umdbw6xCyaon4Go55WjKQdMVPFeQWhvATnn2cV",
  "key25": "2vNnHS3tCmHLMBjJQzwcAZBmMhKYodTJALV8qQkNh8HGTBq2SF7v1xNYp6HgcnGQnAc6qHNMuzz1DVvMgvknNhjZ",
  "key26": "4HjQciAh2YcWusm6EyA7BQLNcGwWDZvjsH3NGh6TMgA45cBYj3mQTcjwhiPN9Lyfexoknf2A1pJyyW8NrMHa3Sm3",
  "key27": "4CjyXsTMdBEfZJizi6HLNPUKrvE48r3UoW9ArCf11McZUJK3EUvFkvDauhtEBxrNq2pTUMzVENPBMYM3eVtMm6km",
  "key28": "2VgjHYYWr3ucf51JHTawn9j6uq1fwzTnFn8LWeqDqmnnUYPqxUjMnNEtjwXZ5GUoiRnjur2u9FvM5qBzZrJB9r7s",
  "key29": "4BkPnPfD5L5BTbxRPTJpwqhebXd2Wwqn8npFMPfypJS1M1YfB7fQPW6TMYf4D2a3n7ZpaRENDJFWA8yLM1JsfoTG",
  "key30": "ZLPg7xcgrXYmMvySiJojgJwmKL192nPmL3y1ZSr1dDxUsmMeDyoV8uFow2dTUwPY7CxUg5cqjRHkqngZ3DUx2Bk"
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
