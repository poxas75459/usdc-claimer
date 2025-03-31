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
    "5CxveQL8B6FT32uKquAPG8YZNsci6FP55eLmaPBvvzXU4bDkvPuQn9xkz7DuZVYpY3p57TxDSSkFpq18hCg593aX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tUYHQqbFu1UzJnffoUiA6vyaTHEy88ToYqZByCriL6uUAa8PMVZ3DV2Q7HTwfN1EecGXqFEtnmZsMHM7J16RX3T",
  "key1": "5So7L9C87mBXYAFi7HQgjkSdahDeLAmuJYSsYELMpeYiHumBMoxknTviTfsZXWjMAjg8DnJqytpPgdBkyjZgXMzC",
  "key2": "8cjCo2BqWBwLx1Qy3FY2BtJ4B5B5hJzvXu3L9mXAGtHEgc3gQQsPGoZYVNoS4jJwv9r979et1FzyiscBUDVKKNe",
  "key3": "4VtecyubixAkJJ9onTW4tFEpTJRHKa9e97Wwj1QzNgZDtsJiu37QTaYNXKpBgz4YJFx9NQyDQhKaSpwAauamx6JH",
  "key4": "4YVuGhrq4BN45bt2kP2HgXKc2uXjqDcfYdxMgn2kMKQrkCA3XAvjUY2jC714To5VTMw8sMdbNTjVDVrAixRf3oUB",
  "key5": "2yN6GMfXApyrooRAhCFr8jKJNc4LbL46fH6ey41xckZDQNDS8KackALqgusnibXwuq7Lxe5taKrApp49zQE3DMFr",
  "key6": "5iTspZSiQgxAsTPRd7wQJgXyMLbsaz5sYqpVS58pxqV9PkTKNSDu69H4LR8nEBZ6cdbHZzmTHfPTNDog9NeEBYUz",
  "key7": "2eSC3CDrnYx8xsjVWqgbNVvck5RXFKRcdVEcQMf7yemchpEx162U2zDt9xdtmLE2RJ9x85hRHavcz8isTWnQD1Ki",
  "key8": "44sAmJykqeqwAfAD8tMpUxAjcnR3pCimnDnEzJjr36xDRRwsFxBA4ptRh3f6xtdBBk29Wn5Q5FDPtdhiSdTJQNJZ",
  "key9": "5Q97Xn7H8fKzYGTNsEcJi31Npu3Hn3A2iYymgf9BfxpqaJiusqRrq9PFihP463zhUKkLKf3tEAmQQN6BgGCYwQ6v",
  "key10": "3BnTrAndePQFrJDu7vbV4CHZxdRZ23XwuXb5LvLcbvnAfxQJisLXsUnTGVvNkCDSibsHyQY8N3aGx3VYsmdAtRHT",
  "key11": "d9h7vvQZtfYg4WYzSfaLUux5eXGwgEpxMgzGBDEquELwSxVEjrSA3edQcfYpZ2jxNgY2hxZ6XBxMCnDtAaU39JV",
  "key12": "4x1RgdYkSPUrfbkqG2WtcUn4eVa378QmQRtM44FEPC2QnvcBRxNT4MBbuMeVRwDtTRbFp4ignTgPt5gjaiLfyQ4X",
  "key13": "2Tjh2GZk7wJagddxKwJDEfKi43GHuLR3ija6oeNTjrfDHdJDWnApdxxmSxhi965XNLtb2mcYrA8tmKBAaUyBJ1cM",
  "key14": "5dVB3zQd6uQk8hCcsCPX6r315S76JjVxvqZWigKy96WnAGwQsk9gL42j9VFPnBFaK6nipGccXc5hFpoajdVPb2Y6",
  "key15": "EnG2MVJy62BugYG1v6pJD1GpRZvBpgSZkG3upQTfqVvY8oPHZ7cXZXjwDZT3aj3g1CfB5KvREt6oj3gBN7ZsjPw",
  "key16": "3WMFmZBkn2zmZaaRzME4D1W3d6hvnDZ8GBKxNErNnqTfy5UofyBZfGmySWf2AjdXCv5PeaznPLEYhhToaAUHqo6C",
  "key17": "2dkKoU6MqQAG4mbaQGMjy7kG4EFDmdcxVnUkTfCGbB9AqUC4FQqaSr28wjNBUaga797ygMuoBowNuyhi6LZoXPL5",
  "key18": "rxftSNo1eDDD3UZJZ2dae9FBHo5WT1mzBDuz75yQCxmKZnJ8hrhys1XJ7Zzy7fTmppqbtLGQj7eQhfZ7EWLgniq",
  "key19": "5nyVFAfxCrHQLvj8XyM1ptCfDMWVimmrJx4PB4mQnwYPwt35LeFJxvWx5hHo628f2TkboUGjJ4P2DsQxGb3W8wV",
  "key20": "bwPSkQp4cvQLVgBzLccTEoygFNGURqWJF9YV8qSyZwnWyvB1mF2s9cZn4TP27mXnrBAc3HPxc9XzBQQut4u4noW",
  "key21": "2z9qEp26ubbH51Cmf2dK44jT1DMvbRW1uEdKotQSL4buHrXSddAKiqX3m4ihLJnMMBZsuKGo8tG6hXtEZFTeERuo",
  "key22": "5fHP9fwHAcX3vUEQWivWCccUJZ2ACndgZ5GCEjdaJSVc4U6mpkZsS1k6P8yNzS24Za72my4agYZq8eizirVrL4Ns",
  "key23": "J9v7usxBJGr4oNtGtTLomALVo3BZK2szDpSqUayjE4F1ytPWchbbMG4azx4SxHcnMDfJ7Um4Wn9dNHWTVD5Tz5n",
  "key24": "2e2YgPcQgusCjcm884gkQAEdBjyWJa9kbmkZwpYXy9EHhWa5857KteFEL7VrZdEFMWvTwKnj6XqeGUiYw9YpJk94",
  "key25": "5NapqHYRTtfVLVZffUWA14hdDcyZV65etNv3uFHnsy54CFUce2bhavY9N8yXAtQXQrcoVFMAyQLuAoMF9svNGr6R",
  "key26": "3z42hcLp4wWfMkUtwx7Gaez9fWfBjwAPSHo9KKxVnzxr8E3AxRestdzsE4wYWKHJ4vxynu45qN6EFF8yrnZQsLr"
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
