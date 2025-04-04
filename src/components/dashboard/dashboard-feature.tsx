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
    "5WC4dyN7bR6z1TRcdJRY3JZXyckotoZwRHTFULFwqNHaMXo5dsMDWiN5pK62BHvH5iVVZ1Mz3prX21vMXDVjk4Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6TML2xUtxz1JWwBJnSJ9QwUPbZeRB2cDpQWKAwE8D14jF5c9WZb1Eyc6oUmdeGBJjax4hQ5erB1fTnGQgMQQHWC",
  "key1": "fPUBrG2qkn7eJfM85ui8dmbhYTRWmYU4M1M6rrkNiUrK4R8GkSk5TPGfvrWfuzyxQb6HiYNeCSQocP9RwkUyjL1",
  "key2": "5HvNN2r2zRtghYh3pj6xGRPwTo5tPfsNCUMBhzHPxqNaSCfYoe23d5sga7kgUh5ePZXzKU3PxWij6QCbH3h9cq84",
  "key3": "4mGGBuVy4QZ44Yz3DLCjEKYTEkjNN1XCkcQ6983uxB7svrxhMEs56C2V6eiK74nyPHLLY3RfDbscRt6DyntpjinB",
  "key4": "452y3gNcY4iepJnCiEa5yjEtWfWUpsDnYM5sjrU8REFD2NDdrLYtkmzfmdVRDcLArtM7Ue22eWpceq5tpNfEo316",
  "key5": "2cxc95ZY55zhdT7crPxgRiswwjLjfKLQZVoGksMBJkqg4PSLdHKFTKMV34hDFp7Ye9whUYMShBRVVmwd7wsqKMKs",
  "key6": "gmnq2ZsyUoY6mNzMik3twfaoLRYDyR5o86TUcSXSWjLoFxazbAFgfdcump6t7vZAryeVBSk4sPnuAaQYyoHAbm8",
  "key7": "54WqC9hxyvDjPPwgD5CtupyaTkJpziYgsFFvoHpbv2jrwCvAxbfV6F86GE31Jn9qxS35pHfLhEs4DK9s8XkeQir5",
  "key8": "4TbW5h7kXM7kniQHQoWzVFwniG9wPr9iQs761SmKLCL4BkkC5sVbcsYScBTCBVRZGD7K3BLizrCHMUEGPBT6vh5V",
  "key9": "3V37UpVrAJ5LP9E61jjzKceqCPnVpUqvTbqXedNzAsSB1vt9cPPXPgyCxjHBFmeu2twZwZTGZFkrBcDK5bmdLgj9",
  "key10": "2vrXYqWcfrCdGcjbCQ1YuY1eyK9KHcUAPhhD3rwDo4wxFrdqZEd7f2dsEHKSJYQ39rowa48dpqYnnLzCGcBYdDEP",
  "key11": "2UR65LYbZ3T5A12RHnyjawExJXwUR6ioxQSY292M8rRQT5urgRJcy6qoQhmu7wBGsQYE8Sew34VMj3t2Qt5uqpbc",
  "key12": "5FEWfhw4xYdM5s8fdeaadzAc2z9p2zTq7LhhgCEqQK7PQdoeU4w4ReV5wthWR4HYnXiaAL81dnR3qzeJWVG1BTKb",
  "key13": "vgtSBaRebdbhnsBoXCKUZ2EbTf9Z7FJtiYJkS1az6wmtaSFEotShAmSo79eciANqT1A4jB8MacPTv6bxvdNcDcv",
  "key14": "2zEcFUSTmPGPS7Z7ABjS8asqnduswT6Lnas3ZD4N7x3PntXZDLuYJpzv5BzgdmiiBDu3Qq1tXxUT2zaN752uZeMZ",
  "key15": "4jLxq1c6GPriEQXbLVvAWDDttXKmvu3DipKaH1zyfQTHsFprhEGvzoZnsJabPtxHCbiaCYhs3eLJQqQ7RDdn4Rfm",
  "key16": "4denqwqppxyr8m6QeR67wEkW8A1MAYkuDgWhj7fFCWQijYmdZQw2a9eqQCB5e1Rjumq6e8VXaxgwtuFwqFbdYDKq",
  "key17": "2cjJssimFuyCjDGAJU2FDNkKw4CBfEpsQ2MgkAyUnfv6kN5Jytm8oNEDkPwW6jspzU4btL35EJD4KXJhaKJ4aRy4",
  "key18": "4mFuPzoAw7kUXeAstzaGF5rEeujTTodr96HVqwiqFEZc9sywCMupj5CE5XUstFc3yFQrMqFNdHCEK9onVafbaYeo",
  "key19": "3Z6GJvXuDfPBYbtqqeK5g5HjfLRFGEyKqyPuJCA4DuP3yfch5EJmti3AG82fAwS6uUmUEhGtckA7J3R5HkoJ3sDE",
  "key20": "5L1FYLs6Rff6RsNSP7rDuRRu9rVo8ctygiVwkcdcL2G1WJSwkq8UQYeWPPhC8zGAoXe4Axzs7PQ4n66BBMb7PJKY",
  "key21": "3U2eumyizMdku7nctUENtkTFhkPtFVTvMMDtMf1ZprEc7wtZUstptrMrRMj4xDRh5qoU8s5XmaSaqMTGLxrwqeLg",
  "key22": "4BJab9U7JMSxiNPFQdRAtvPM1uUBKrKaS33ZmyTwRqEw9yf7L5eAwkfmtqpJaqqHPThTyzwU36pGuCXMy4j3CdyS",
  "key23": "4rz1ucQESpyFLPua9LRPFfRWpF6WV3deBYAjB4oxk8TqvZNH8Ez2m4BWqtfLeT7d3k6nQ4ZYoM6xkRtpJqDLdXKM",
  "key24": "2BKEPRoAifM9Rr9FGiXoHCAMrL3gxuxEMcc5EN1FtSbpGX1FtJWugpEX2fYqekPQp7JGs37HvnutsgWnpKQ3TkTm",
  "key25": "5Gv3wwDCtn9Gm1j8rckwaWwWbK5KTfaQWjZEKVgV2yJixfx6oqVHRKh5HP5GpoNUXjeXWorTp3uSG3RyxCdFdhgr",
  "key26": "2GKJ94dkWekTZ1cSqX9qCy8dE7Z7UVecpd4c3WXXXAf7Ddw3vs197SZyVZDvY5xRy4BFnA8EPkhxDPG14LcYdUTm"
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
