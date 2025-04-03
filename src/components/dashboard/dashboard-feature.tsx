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
    "NAgAG5kD2xDLBNALZ5jsK56RnexNLQ1QNtU4ubzPHbf2iVRqnEHL6ShSgUHFAq7Fm9oGMLh4wgJHQiDWgPKn435"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZbEgtuoHu7ynP9zvqfjgR1k5uTAhXGHCxGLDC8v1AQSbpRjAWdg9PZDxW1kZpwA7gVf8VEk4AL5RFaP7oWCiWQT",
  "key1": "2SrFgdXAnjqWsaDW13446eWuDr31VejVoupXnocgtTwGXXD8NjyN9edyNuT2MCKMSyMJ1y7nn8acPYRfkcRZeAS4",
  "key2": "moFSHyJW1aemdkRmyB2agfFyQ9yucDqg3tn9fVZVYV8aAXWGsFtDwtLpH9t18YWefjJMnu8hCreuzwq8siWYL57",
  "key3": "3UasvysNKtrX62zgkZcopjXp6wRxKtBMVdwxrLiDkP3337p3VchnbAiawALKGBpk3vFyqFNMcSjYP7E4CUYLW7X4",
  "key4": "DkP7dvgTBrRGgt6CSY1Aq8NtfbbdK5YZ1h3nF16wxGxKizvsxDjQ2LTkCfGhi2pSEiLS14Sr9KqcdwN6FKYfvQW",
  "key5": "dkRiNd6VZJVqm6RbZb2JCxWqG8aZK9dxTUekDcJUTdGxJMxUxmGwtMfHCAm85oLVeL9UwwUe4DoWWS1b86rxF7h",
  "key6": "VtdthKYE4MVuzG6wZo49dpqNSzYE1vYnGRaT9eW7eVj1ssaVUp9KzkCgBrbrRdczmXk1otLQePsKK3jzk7LeRgE",
  "key7": "VB7Pq9iXXHHGYdxiSQ4fvnZ9fS6Dm4jhynZioB3sqT2PV7u7r3f2Zd7AfoAaYJUbZqtUff3ecwBqcpVbYd3HAUm",
  "key8": "QkKQWmwNPQzPpBozniXK3mMvv8HLgn3bRZg9TCxWvcNZkMv7sTd9YTFu26CThn1RA4VuKhXyR5tVE84b3JQBaLd",
  "key9": "1tvXTB7WWSgnm33yZPGwhGqfZc4aCb3T4AewtLWfRL6qftNp2xWNgQmtzyDMFMDU9gWo1K5zqJiVncPyCXi4ZCy",
  "key10": "5pUkcQufFijSfjLWwE86bPvWfG9nTgQnSEDHYZy7MaYuZJjXn9tjSRyN8UUzZHh4JA5dNExaS6JqHtRD2ccUA7S5",
  "key11": "647h8BWw4FpVH71QwHnDwZhjSwWEKSuc8WQeeeoEW7vjegUNh1dZ9fmqgYQtM6dTADdmRcNfwj7Zg8jUWysgDThS",
  "key12": "4hHTvkhgiaAZu7V5bQa7TKBh5MWrrJFXtpvZw1gAq3ArbMH6L32atuURyqh8HgxyQF3JMN2uGWLuqvijebkPWJyH",
  "key13": "3g4QDEM2ogwzttBmyLomtYSskFM1jjtDeiWNE2Q1gwxZqsuhwzj7v8bo65s9g4jdpP9hUou7oB1fgWKUtvaGMsXE",
  "key14": "2XQHhNB1KqVM4eXR2DQBwe6ESMAS68ocNCBHerZHXGjwNv6nEk9KgZfrBpxNkNu7vux1yMnESskJmsHPUsoXB41n",
  "key15": "5pwKP8o1mab8awbYywxykxFR6HHdrVNYW5j9wKR24vJjx9cgJyJtT5aBJwtYojLSffnr4s4tfGkTJQeGrE48gH2f",
  "key16": "2edWi2B8CteJkPyHx5d4zoAcB1UEhci6zDhaYwQZeaj9iBacUU7fgJRDHLaFvTsnN9mMjQUxuzTpiu1Kzh5Sx56V",
  "key17": "2yicRaBY6ng7G9rh3VpzLhUQPxG5fExs4FqaWswoATfvDKYjPpq6FAMTNVQBjwACg1YDu551jSad1mtLNpdn9rPd",
  "key18": "3jPEeidxxAnJkmDmsw1KdGWoAJBoYgmoiin1jRDPyjasLWKCEnNszcUtcDRunTHnjq2k5tW7nWD8fPaCsgCWe92h",
  "key19": "5joGutJe5PHrk68Yz2C7Kb6AHC8KNdYdpt4kMWYiYePQMUrXbvDy1eUMx75XoKr7NWYFzBc67Pm43vima44mEQVq",
  "key20": "3zD4Mvod8vmjJhMzHMyPKUPUKQa4cgy1mTx58vDXQm2VZWupFUN5Uekb1ouiTFAPqcxXiojKeSFXW1tEuaqcgHJw",
  "key21": "3KUwaydjUPeAqYJ2YmPDXb5CwLK1yPrsZF92QgiTWQndRdAhFTQUShWgcah8wG9LhN78MH7DymE9FAaeuxeFxdPL",
  "key22": "4RcycQJHBvExiHgVuJSGcuk8t4pC3zxURWgKBqqXwvxVkRTnLhDCkFB2xXtuEjbbKzSuoLCxKuLfxT8sUNDHd8kt",
  "key23": "51hjZkLaxd9wJDR8wtNTe8Y1dqfwdTpVjapJRKX2c2KLCSrgCZ7TSrZSHtG1MvwEnMVGbUc5x2RWBJURxexJwjSh",
  "key24": "LZe6BSuaVidDPwodZAu36W25px35fzoio8hDCSv5ejieB5KWHPjAuxRwMyQvykDfAuYCWzV2yombjL7LYAD2Kwi",
  "key25": "5zq2N5AexQ86FLdYC8xngfKAkamHXSaj4vPJcosLwusiY4i46ajrSQqnYdUbsB1KCwWUNew8nVouVEa4GgYcvSxm",
  "key26": "58eS2YcqLRHgLMw2g9tFyn5fCt93rXeejLcGCrJGirRNY9Bfw6SHZJyR9xpUSksb6bkr5yAKPtR4PbX8m5TJdfx1",
  "key27": "3XEDoQ2z4bduPfAWi34oxPpocNvp7VJf84oakmZyGRyAVbof21cJoVMi1j9RJpfBZ9VAhd2Kfr47cFMGCx4HYVqY",
  "key28": "3gc87A8PF2uu3TFBZs561FXXFNS32EcvpURygSXWMFpHWB4WKsxExwsk2qE2gBDQU7ZiPtdP7evj7wmx9NHFRBp3",
  "key29": "5EHanjYSYkinvLkimwNMnymWuKTt9PJehNAE6FFiFcWQvNy2ttwZaZ8sXMHiaVHyA4QWNKwJWFkJa3X5EJA218ua",
  "key30": "2UHuwvisKfhfXSYhZ64oCkuJRu6DSitURd6dschcrWGJn69bbCBVDHx9cEfCqLNVXmtq3fidnKBhMad5wWY3LQVa",
  "key31": "2m2HbfRkG4YFMQ328Yh4EoV6CKRc7iB4PTePH64FsCt2Xf3LSmwBugAL6ACsEEZ5G47PqejmQge1Dm7Lr2983TLE",
  "key32": "SKXvQzzooFbuUsMDwUBSWLddhuYLLBYPfhoVk9BKDAd53nfzoEfeX4EvaVK2gx5gsJNUvNQQN4sCQV4GvTpMQjU",
  "key33": "5i1mmDN5iUZr8djb6HaXehSywudsamcBRvi3GXYWJHHtuG1zskGh73WzfKAkUcZtGx2UG5qzSRFEugCKynzMPqVW",
  "key34": "3Cswg1TawcQpis4rDb1J5Dg7vviAD9NSH94FoL3gMPjkYh4gpd7yH5ePYpoHMoGwspDg5mwnmpgiRSLsXzJst1u",
  "key35": "Wj5SgDqzgyHUtsAvQHZ9jPKP3mtoVmKMxgsmBHo4vWzX95hVeDAzoKXcyYqhZPpADq4PfiF6qUJKCWeQoTYgffb",
  "key36": "3MiQEAU9xCtnK9poDCctWJV7r8NedNWgBVKqNvryVS6nsk7UHbpBv5wnWGygBRYN8UFvUyDF1bC9C232K3BZXWRA",
  "key37": "22KHoZ8nsywZC46i6KNxY4J6yanDhoscvrUUsx46ev6cAtVaYhdyDW7nEwfs9UeeDnmvf9zhJNqVE4DXBCpZonJq",
  "key38": "CspyWdPgQ2g4PdaUfbHjg3ZyHWewnZwDfkFbW7aahb3n8cgKnUQRP9RKU92KB1EJCAUZatPnmaSQxt1mxXtYQDQ"
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
