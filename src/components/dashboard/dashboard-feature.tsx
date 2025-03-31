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
    "DmLiU6SshR3mDouwkDE33tcJ49z3DLTRzoNKmWwbWa7r5oZVoweKem9a7sndHeGZK8KX4wS55EyFzvomhENKf43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egjHsYZ7biewohT8uZqhCii3b3K3AXBuYBpoyHEnYtGc3wQWUqxdApu5EWhFCGuw1KG8Bv4Fy973KYoaHEzRAn2",
  "key1": "3tLHiz3PWbo4ucji9qy58TNuyN5zqpGUKZ4eihgZmKJp4khfTXhwJaAz3eH3KJfWcaz4874ACJKDSamna1bTgLy8",
  "key2": "4iiHz91fEc37XYQdD9Vwi8b5E1hwYP4yFQ23L33rU7Chzs84DeVXkaZ27pj1wQAAqrHYLJv8hsm1YvLU8Aa8jsMf",
  "key3": "2VKaxE5kN3AHShSBcc2Kmv7rkNeXXJ9T9uFeiUQVxpgS5L8mnrjuMGLKaCt6jw9s3WZvH2cMDoa9nqVEE4oBFHqj",
  "key4": "5A2M38C81P7eVxGNGDdZVYLeAiZpLtxU95PvSkzcqRQ28WPu7QfFYQGTpqrL2nJvz8NUYswZwSnEozyutEh756mS",
  "key5": "3kqJjXzirvtBS3FShhXXx4dvWVqs6SdNtw54J62oX89UTZ6MvaKz7FbxDLrEUfHw76vhiHF2vyNVApcr3vbkMex5",
  "key6": "B1yfVyb5wcPSJ7NmQFgnkTrurVxkYBLMeFWwfAH4suk5U8m4QKXpMALAWg9xofbcauBWwrTZwP4rfnpsmPooRfA",
  "key7": "4LnJknzAqLa8PRAN3efEDLnr1pRUEjxzSQtdLPRqfRRLDJQqfcRwdrVwRcSXQ1D4Mk8fSuLqNcczeDAs25Ui6f8c",
  "key8": "xF2rz9UmvnMRqbTDJFDvA7cEi1fsdQ8KRRyFS4xuX4nZGAt1UMLUcJkmErPuHbYx56HFHKGNhfH4jdWtCiwLqwS",
  "key9": "2pBrwcjPuFtrbPHUEEEjkqSFmVujoSuB1MBVejwh1KQVy2mwarKUrBKmCbJwazn6P6maEAMJwXc2aPJd887E4cJb",
  "key10": "PApaRKGYLyVoQhcGeEpcScUf44JXTGjY3wJXrKtZ399HTeheLGVUCRfhYMGZT8v3ZG1dd5NfvairzkYPccwm2V6",
  "key11": "3VsFLUPJZeUHm4ZjSuRAcpGHc6uxFzm7f5bCNuBNhXGp7CVexWvXcH87mxoTQ52iuXa51KnrAChyTHBtCaksqu1",
  "key12": "314JkmCZmoKdP8zMvBPLfVgaTr29Akr2SJ5oDLfB19hJkvYTKYpyS2xvxdmL9hgKjHXHbqvYwm5gPYq2iHDfEJoj",
  "key13": "23kQxcM3k2sZbDsznvdJ7XtTYkYnoW9Ffe4Jd3p9dPnoT9vAwjmmz5CBE7zFYLTg4FtY5GocRJgZK7YP86rCSY9j",
  "key14": "2udVkT9XwnyJ9zzk9C8o2KrEvECw7sG4d93bGDoLUk89zXfsPf6Wic2pwMEpf8ZzG8m11XDLKodSCnasThwWsp2o",
  "key15": "3ti4AtjK7m8UvzSDVBYwpEEHXncnSynGpVWSRrLTzJZpMexSJdqLdqe9uQzobFCYdvD1Sys2bQW6nSsF9Jw4AU9v",
  "key16": "4X6tNXut1wXQgwQpedVWjr1Th76rXDBWSHm99BW3vYHmKeZufSq2P2zDZq4gDmXRxnaYhsS3HAzszEXEZGRbcjRV",
  "key17": "2hcPZsbFkzTqYSARnms1J162KNHJdcetEBX59PHUAEAF7inG2NWKK5D7NvJiRoJZcoqYXxRgScUt3RVAysJzTfha",
  "key18": "2WxXWhgowzkSNwPQAxEnTgCPWL63Df9dtS2uRp2ktMLocm9WVZgbjYuMiaFRoXf2U28NDespi5Pzqiqr4vgVR8HN",
  "key19": "296gBWts5izBx6DvEdFRAMkgFdn858CzZgSG612auJhpr96CgzzTe97s9MHQx149wuZcvXmGyxK1Qrs7WryJ1puS",
  "key20": "5vR6pxzPztnAY3t6nXFk8RKJj4hKRMGVSDpcHEwPdSLzzSsbLRW2tpXGrd5oXhqDXJzo5kQuUE1PHMCrThs6BZYV",
  "key21": "2aj74xqcswgXAvQyjMwSdvDvao5515e68YQEm5cErYcGGWb84F491uAGeFeEvVqenaKZ4cftJa4Eoeh5GanmQTSL",
  "key22": "23q5j3S2Q5i8g5SkWYdNwkkbdRkXLoXLNy7SNM4QxvhEpc93HMGUPYoiaYfheSQKYoXmxWHmU28ByS3s1GxGVobU",
  "key23": "2LzZpHfLzQYyDfW6Ry2D4vwnbDSnujxZafpZwfG9Unto3twtfp3XrUCYGDYGudRjAnWSc57hzgzu3Q9RkfnkLAJs",
  "key24": "4TgURio1M9MrJSKBWc4tbnrkYsjHKEsnVDW6CDDSGd7PqENU3tvXkuYwgYWZ2sWLhtYdAGnfHUVW9rVkLSpKvWSv",
  "key25": "3E7pLUNnPwbVW7kC4RXC1iPf4KNgraEmx4TJWZn2W5MDWFgfjdLPdrEcbzBVMi3bCvN7mSdLssLCS4ZPbXYgaTMK",
  "key26": "rV8KNb2r95hht4uJ1812VW6iafhjBGtBpPSY2G791jR9FM22n8WAQgM2xKboSghWd3CiXb7EjnMjCqdeohdyr2h",
  "key27": "4tBooWp8qWjG848Z7oEmhtuqTBbdFGZGwAcJp7b6bLLudGuMYcrjd1qiyLLJoiNaJseZFeRvhBBC4JUvWjKAujYD",
  "key28": "3SHYCZvZizXDKtKNMa5coEuerCwyeZ6P8GiQQz879uvHFZDK41rJ55MEUym4yYzjAVkydpoHakwPxJgcHaS3BtCX",
  "key29": "5vZQMAdYkhrAiV1Yvo48uDjemp7B7xcy8DxEYdwBFJe55Cqiz1fvcST8jZqMxp1NqsvGi6vRMEerZTcVM5nN6mEK"
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
