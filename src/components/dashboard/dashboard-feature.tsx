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
    "2onyCTXD7afGs9JLPzGqzZ9ceNcZaHnqjvLeaapHNKwwGi8MjW4jiTQKt7R3wK5fjXv97VY1CkUvKqjECo8WuZ4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dWACzdDiNkBA5KvwbkKLETGsMu1Nhx2wysKpJnsuFTnCGN9zuvszye2v7DEKSyR4XUK1LBbYVR1P53HMjUQwBUU",
  "key1": "dwS9CDcRxtKbVEBkHQvZXCV7x7tVfCgXgjkb1yoNGeozjQxT1NhGNYZfHpyzTpUSR18UthfSS21s8veMmyWir2c",
  "key2": "41wDcF6FQznwnqeTH71fFkAnSCyAioHxqabz81YpU7xFRgJfeSguS6AFRH2BzsnGuEz6FzZn4b3wkLTCcKa1iEGH",
  "key3": "67pvj1CgRpVFp1dDrAzJkDMQFnecYZxiBGPCYsSyrPqe6FfmMugYZ44e1KnoD8r3DMhiuHZSHN4UXtiLeY3vqt1i",
  "key4": "2FWqtSGCnJTtLdbzmtEpyThfcCPR6XrZUj49unPB5LFFM6H5BSJuV6iEhjVLUwmrTythU3cZkvkuhh6AsL9Tno9d",
  "key5": "5nTavcDPKyTQajmqPcatSD9NoWdB4SQftTm8ZmJdZVwt5sQQw1JALdVhSUemGt8ez8P86wZPMhm4M5XYVRsVF7vT",
  "key6": "2xeDHYs25sFBzvRD4QNi3fNdjzZYSFSXYyGQnbpbdoiD7ZeRKDyh2V6ikKrdRrqu72CMKqrG4jWAoVne65PEwJRz",
  "key7": "td4wSUsoBQtJd8BfKoo7tKUoXyf3sS3BFa5d6Ra5NKhgtB8hRv8AstwL8ijfe3iP86y5zaTcjw8JKcvVyB3iAUJ",
  "key8": "3xQ92y6MLmqfGTQEPBVRbXwMmiA4BfpTkQS5ThXfo7ZD4gFGQm8noTCHtxRZ6YKHpyMqzv4kA9iVdhbcB5eBett1",
  "key9": "E8iNVSQY6etzekXQVacGdcCMBZ2rHLethfYTkQjYP5nLj9UuPwmWnCgQ1q2wdhrxi5uA8XeKYRfJF8iWYFqSpm2",
  "key10": "2Ee1CTgbJ1gZECRTLz1jQJrKczbSKSHiBXYFeNXNYWX2KmVthDHTndQPTy9mcsjPese8bT9FrZnzdSCPSSEWyF1U",
  "key11": "2L2uVumkpUUoYig8rW14xgR69ppHugnr5v2cDTLuYoZkQB46z3eCMYHwnJUTa5oL4FTjtcdVQXqZGKqZ8sd7DJmz",
  "key12": "4aMF8XeK8ZscQfCdJsDQuCqLCNwthRGkAExUNMN15wq5TGj4tUgt7e2MBqa7H1BiuiyspUK1ewnqXoEGupXJu7nF",
  "key13": "5aEeEeaBBSA3DWjfQDwqe7QvtNZrGBUcAWhQCzZdeoCAymUrup7v7oXtrp81uCqcZCrYYXnU4jQLTnTcBwE91oJ9",
  "key14": "JrS8mnDWgzDuLVFsTiS2EAdNyteDhfE5WidgrwwG4CxMCvbr82Q21FZ8wDjG6Bsy5yjgp3mjQCn1LjkSvRxrv6K",
  "key15": "22n72cRHux5dQcXxYM7HEbwK5jvUwhXJDm56Ua96XBTCt15rBxo9DMCmrK5byeGqURCRoX4rcj4oYt7PV1sJqZBX",
  "key16": "ANUUVNqoUqZVWDgk3B26ZkCsgrNnJxHApJKFKjCYqmKr83mGyLHNQc1uaGzu5sRcYep7hkSxrhJPX3zYFDZoXM7",
  "key17": "5iKFYRSryN1u4Dq6khfybk7PHTvX9LLjpBYajERiTLFun4fELrQZbxGcHRxoHvJjtVXUC2vo7dySoXbtimaPCN75",
  "key18": "4eFKYDbdwjfFCErbDmNV6oFk15xykRam37VWMPC81VQgHDrcM45KfFGYNAykw9ZABR9tCA9Rjo1xy9G3eKpniEG8",
  "key19": "2LNRvd4JGiigFaEfYS4YebvafSw8ehbuTbdEhQc3b1dKnKz5ULcrEPfpmKNvkeZgAwHRzzwMtDiFAMiJkx3GNbvn",
  "key20": "BYvEptc2Tdcdg2qpg57yTNNZBMbpmo5ZJepZAJPLHmmBYAJFfde1mdqqkh1nRMa9MQTFAZhyT366R4dirSejpu5",
  "key21": "4bS1vLTys1w5yg5AVjU8hDqYSLyzMDU6cWkH5qQKCs6xwNAgiACpgooon1gT9gsVtsxJCDRrydGh29jFf9Tngte",
  "key22": "2WXzwgCBwii24AqB2SfbQJ21omSmkqgwH16vTqwm3y1aWzan6siRdmHTtotK2FGWr41VZxQYmjhJUqZAmJhXqcdC",
  "key23": "4Us6EGtuVVHQqjueuUA1ctu6shL8nJQz6qiphmeKXxDHZcNK5hMatqoz3LdCBvwwCChznr9CJzFH7mAHbFYHfJJe",
  "key24": "3bo9WyuTXMCXZaGHGN5x3Z4H8Yqewvq8SN26LR8r143gzvwm2Nwas8xNQrLjdHNhRNQyi1k6jchJvLZtpoUKfEa9",
  "key25": "22GoeGvnyq8W2JSwgFw67Dx6nRLLMP1fHHJcJK5Y34vNQhDjJkmNzVB53AA72H9URJ5RcrdCd1GFdaxbcfseDK7X",
  "key26": "347mKpjaVHFEEQN6sqdTeDyMUNF6kgoiPHD6xmgFYnzXReAb5v5tYmNbXBAbEcEMbgPsvRfnVcgjZczZdMRxmddE",
  "key27": "3bgDZG6EhU2XYy6Th9j94R82ks5iSkSJDtifNXbmnY5PCf3cj5t4TqbvxcQMGTGhQLDiWpq5boCpLT3oJ2uJsAHR",
  "key28": "Fbm2kbXTqXUkiqzPms8ThvdGFUERSbUtfFFWPebgWRFhtzSx4M3icaRhuq1imwxNHEB4bt4og5fqsZ19k7qLNyE",
  "key29": "V6C1qdcioE2CTGJLHpFRDsWhxz4q66Tdv46SEhJ8rVBnwKdAANR6r66bf6hf67aBPpAzFGEZksHcvbrr9WYg13g",
  "key30": "3WR474ZokFRq5hLsdpqjHRYNxmRJoT76SuPVGbK9XcKFgp6rNvgZRKLDbdcuLviv8PdVxR8uYw8BRW414v7JKYT3",
  "key31": "4XhVwRNMYZG4srPSJxC4zEVQ1vjxf4zo1mDH7JFmwY21GRGXWbNPVg8NjNvQHvMMGAdpzjPxim3Ubxqxn47L4mik",
  "key32": "2apqkXwNwz8mShMmGhFtgmTPEDYKAsumduCPr3ZfFzCugTMHsqVshakYa4gufEZQhT1RNdXnba7YP4Lx8btj93WJ",
  "key33": "2TkYuxVh1kXz66DWQMDYhoZyBiYKwL6BdqeXMuUUXXjouBAw3nLcSaXxFRaAWeA1pU9omvJEqnKrAVHkwirM4itt",
  "key34": "2FygXUaP7mLuP86iYszBKpYYWztPhAo5gJ5LwLvdK9jkAfbQ6bHo5Dx7KadooZ31k5ENLtNPXaqzgrRkNPwjUBX"
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
