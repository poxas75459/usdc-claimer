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
    "2mgVK7qDcknQbHf2uf2NWvpieKXRBTk3L4bfyfMPcPSYL4hj3iGcFmhY2mHJ5AUYYquFaGWHz5GKoUXrmw5438hm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mm432LJHYje35dnQX4JYenDqntyELezynf3dJWyHQdRk6SHj4DZ34WJtiDBXMDCBa3Dod7SeyRpotF7g6XtPqrC",
  "key1": "2UzrgrJm8QgS6p1ufBWoN29T1jbRxJ1oxzqxB7cXjyrpxyga2JmBuzjMYJ5swx3D2aQu4awNFGW3bmzXix6KEcsH",
  "key2": "2gzfbHGTfiejDe3YUbE58mCX5pqGedQJTw8daRtjL32uqZtwoGxJFmkdVLyUBA65RTm6pCZA1cymjWkJoW4952R5",
  "key3": "2rz5z9C8SdDfyRN7DosPo7PruJyyNSVPrCQNiDSoT9wy5ehDA35sTu1r4gi1MtxiTfJ4TyBvwcYq5PkjyL2r4vmP",
  "key4": "25jgK1Y3vGEXqgrvebbwKRvBfJvUYgyg4opXPmuJVfNx8JEHFGMV1gteGujmGKtbWN83dYw3piiydKJy8gqkKSUd",
  "key5": "3mNDEEpZqu5L1jsMpWrVBJfJhKD3spEtNRn7geKXxaPyJnEzbF1yDNjp4TQGvWW3zy4WaqBe8MTKjDLNcPorPtL1",
  "key6": "35Em66LB5hcDZSQA7gHcG6wvuavafLq5E5QYy7h9kkRitquTNG9DFgqim766hLoGkfY6kCNjJ9vma5FGjUTp2qhz",
  "key7": "175KAsceQGHD1QmnncPrHnTKKJXPpjzCKor2z3Tx5gwc1SWyoaQr9PsGbzj6nfRr3zdSLuHBpEbkH1BjKawdY8P",
  "key8": "5heFS8THBRqrqxy4sHsTuzSHrovzeRjZuUZCS8q1eAGUosMVrWwUD2avawBBD9qQ9yTQoGdHASZTSkeNTNCcqacr",
  "key9": "3aYhdVWVwqZQN3fi7AghhSugexJrwkJkEdW81onfMzhaUXutHXAi4etLhQBZWVh7NrtssviZYgVdKjybQPxH9RE9",
  "key10": "2meZeLCg9UYNKh2ckhySomnUet8iAQtkdsXveJuP1PaovhHkKpdko8Aa5u6MAThwgSUEhcekD5xWuJPovHNKocx6",
  "key11": "3VrhhA2iax6a85MJ23neCDKGxmaQSadJQdV4Q2XnDFYJcPtJVvnhCtMCxoK12ooE6qaggRZeHhtZofbzivGueScc",
  "key12": "iq8cBXQeTLPrJSAfjqnNCaWg3SqHWndtoNSu76mKyLv7NdwidDGsCnoK4dbMUJ2XkcGEnMWCMFxzyM44SGXMiKB",
  "key13": "2mFqTERm4i3x1dhB1i9AAab7fGT89v13r1nDJmP4yvCMTgS5QDiAV8ipG7So6VhrJHajm9Y5bMbA1AMwqmWWrcRa",
  "key14": "5At2jot1pzRCenXwTS2ohH2GbR1zfpFpdp2df1BnHBZtmnp5yvVsEjYDvNgvKVoofS3aLnG5wSR8F7i36KFjNNTJ",
  "key15": "4gvariUnC6gQHocicHqco4dvX5pHc3Eq7KT8UCVnKSvZRmSMSzdapDFm86gGut6LwoJjHJp8kp5DtKzUgkYqNv9N",
  "key16": "5xAZ9PuZ8p4XdQQJnV9skHgF6Ap5KCiVuSA3Ci9yn3ynnFa4RytDxZ7jqmhLyuTPEGN2fpGFxc1pm2fZvHkG3LFJ",
  "key17": "2SzQEdYti24KR3P1gujyi9Z3g1i294eFdij9fayxJ5hBSgbpQw7h3Q6xacHE362p51YcF6HJDRVZAaNif5DJReNk",
  "key18": "4LVvppaCqXiLd1FiAQihdw1iyTgBbKhaENGxNdfce4LfvLeueabVtbeW7g3yJzRK86t9ohJ4eN9KnfUi4w4WdmFT",
  "key19": "2XBAs7fiFtZw5DW6ez3TY5nFU5FdCFZ38e1arwiNzEkJL4TUT623yeJtD6nHzuJLNgZ3ip81zwbr5KDCwe7pVszj",
  "key20": "5ert42hYqGkSB1rEBNVokaBtTCuxezrM4yUwamFDNbtwNdkujPCuXUNWzfs8MD5JJuDgErtzgaNciqnKT34QHUNW",
  "key21": "pNKquutbSJTYd2oqgh6v9A9YGZPZRLxJNSoDFNYixJeUb4dzK84fAzNLgDw8sy4pp3Pkz8u86k6g44rq7F84y8N",
  "key22": "2Xajp22V6D5YZ41FemUVN6V7BNymFPMARDJ9mTc9wxBCC2vjgw56vDpcVKoNvU6jw545H2c1DNPyHejUhaAQUBrs",
  "key23": "4rT9tdJ34gYTAW3ne5L52mQJ9HJXAtPX4hi6UUdfUSJP8BtJ1cgneGyeVdSkAiStPCcVgBJYp8sSfZ2zWnP8Xi6Z",
  "key24": "2gns5pxWLRV6b6nefwDvV7iHRYGL7DQGD8mpUakyTaP9CLBy4YpAn9MoEh62SnYSFXxF5eEGc4JDdF2WKf5r6nrQ"
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
