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
    "2CgD2kzg38VtUeQMqzRF5pyRuzngPDEq4nYnbipYaeRfXHcQ9RY19QCBgG79cvGRkCC4keR5pNgSyXKVKS7JbZVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AVc1ki3n1eYpucR1vg5qkT3LGCaj8QojHZFs3z7muDLd1dVBtesPTbDBcw23q8FfCZLrhwSq6toVtHEPkopMPr",
  "key1": "4v8CN8EXa77wBiAi2JuneZVJtm3cYna4d11njNmUKZ1QpStKN8XNvgC8dFMwkYGatjuwCbQPQUxbfdKiC3e6oYCy",
  "key2": "26XPeePyz1jtHBJwGqSgbMrYXvycRUGCdX2MdFvCRxS8oWLA3crCtGbsh1MXtBgPpQ8Bh1caUhMcJhV6gSg6w2f2",
  "key3": "2DDhkvUyNawnMgi8ThoRE2x1r3aa5sT1W2XfPQsprk5wucQU56eajuS9EveDjp3LYthAu61mVHXeiCUBLLPbQ2be",
  "key4": "2y8UiUNS6DaTuUsBhZiawzy939w6uDus37ycp172FDBXKdutr9E6d9eoftiPXvGPq1tPziQH7NLS4HcS4WecX3bZ",
  "key5": "5oYUjkvF16uwBf8hsWAZq1KwftqvYiocZKK2qLKKkhxwaJa87aL4uQuRaULiaNqWbWVsmMnBVyGnMw8TN4bKAWPi",
  "key6": "57BtuwEGoy56Anb3NC23LdiaPWVndSSHWXtTcv4cwpni8axhTXyJ2ZhUWD74M79Sn3G8yQcoCceJenffZHgCGcfU",
  "key7": "4GZHFpZafvqfUen44ZPeZn6SAAvDHyQ3nJEh9tQgJu7kupZ2c82avW12WDyPFfS8ziBYWBDzTKF7td6rcMcCH4bR",
  "key8": "4WGj3CWJwAxHYVRJUxSPUYgzdHR335eerpMLvgZajXrWB1G3Z2jP7nUrgqgu9QwyfCPE4uQm29JzxpvE8ZtQYqjm",
  "key9": "4p4zh6tRdWRtjKy59QxkK4yhqGGLyqycYgtKM3u9XpEZCLQqToAyfsfEZe4hx7wu2oMzGgNWH7r1tCidPxGnuNTE",
  "key10": "RuRUZAYFGKZ99GhjensaUzTQ77ocrgf95DCXfjTovWWXoZz4Q642RTj4kpQ5res6wXL1QqTSm6bbf6kqqk2J2m8",
  "key11": "2vyyEznWkd4y7kHWokdRUGtANE3Nqvga3Hn2JFQqChYoabCBPzuVgKSQuqytQCFrUbXdZKeaqLBmabudxcswjrpx",
  "key12": "3RMefA1XmNTEkY33iGmnxL4wjExjsRG7mwetXxhzz6WkT5Vkxihnvn6i6Z66XZyTP3Cncr98Zg6FSiKYyWxFQKaB",
  "key13": "s43yWF7EKAYatgaoVGL2BmC6aPHfUpbva48jKv4UVKrnMsvBk2i5otYFHgsT7CfWQzNVcQe2Lraapr3KQSjuvJq",
  "key14": "5ebGnJh99uD6Btry87pRbVJzfFQLufPZizfsAY6hFhYfiNKKQtmwzzX7u5MQK4TW9RhyDud6v9YzYc1YXYWD8ces",
  "key15": "4ceYSrRA878c4Wo53xyqb7pWfTeuJs4nHEFZnbdYpcgKSkwSQs9Fgo7VvajL2ZWKU31MN9iFY6h6Fh2aPaVn72ZU",
  "key16": "3ppj5orqLXhTKAcYGYr8aCkeusyqMf6nEm3k8Uf7i8ut5mdkwt1wKinY4omwq8Q9kw3ipijzGgZBRrEAUXJMYu22",
  "key17": "mBCAhfBdcCNxkt4rfAEsUQLZpECXViSYXfT9Kk9AJ3T9FUigNwMB4PpQDnGwhc9jGRDwyipE3hmMxLijbV3vUuP",
  "key18": "u7PWXLS6DzrzwwcmMVRvxLxmFEqVK314nPmjEWCA3ucmagSZkAVXv9V98vXKxjQG64EHnzEtUdmynTbLwTX5Ygm",
  "key19": "3nCk4MPFfhWYC8cehMPLACqx7ABh1iD3QGvkjBQCRHhaLA3AFj1y26j53Ty4vV4E9ZAqib3JfTDUktVw9EpFWPTA",
  "key20": "dAuyE98yfNEJG4tGH1UdJnkYUgVgYQE9sKTygmxEgZFWSuDD5a8sLpByzQdvGK7aAdxpL8YkdfTkjPpfHEQd3iY",
  "key21": "5DdyPvTT4LBZVPBu4N4qnvahyYTousg1Tab9HBeuceJtGmSVdbDL8Kc8SNwDrPw3U7t6DmZAj3aHNuytSd3mjAfe",
  "key22": "3c9vVPDsJunjqy2NytJWS7AHqnEgPMgrhviJNfiZecusQJrtqBgbRp2ws7ac2hvcnHsd42MQgY1FoE9GxszUfici",
  "key23": "3jWvfx32PMDuNkQseXHsjyJnmAsKSm4uVvHX1TDMerdhszRWWRrKcL2F299QcWTLwinMPmf8keNifwefKGE5oFBZ",
  "key24": "4cLN1ydKxV2HXjaartqh4a3vscx5eytf6dKHgkupo8mKdnRiVFkQVGbbhNRL6as8bEznMDHDU6FbwFfy5DnwybEd",
  "key25": "27mGGWCWAz5Ky4yTjhK5j8pbJTDKyN6atwDNAptLL278kmidbQd8fcZiLB3Nk4QwnoVHQv9DwcgckSvWP6bXfyjv",
  "key26": "42TC9T9ZjyGPb9JaG4UGMeh8yoxDBcfrv6qeCCP6YrczKP5cDjMokPRcBnyN14ytFhhmqVrM1Em2JA9zRRReeDG2",
  "key27": "5NSKRdazFf4aSuEub6AhRkx55JBHC1jQGLqV124bYRpqPKXN5YGVy8zdW5DYXhFxhByEQeD1eVwSZJufz7icHjsx",
  "key28": "4NprivbqbTsQoyn4ujrV3XGh9UdQfHAK1SJotsZWuY8SExyJfCnCYT84otBGoXRy66hqzY5NCE39f8MVCfhpakhP",
  "key29": "2cDXEWvPY4w71stVYrQtFmY5h6K8okyjLd4WCQ6phQ27m8ZgCPD9gCtjSm35aN3cNVtrhpGqXq7zy1tXPfXy43WF",
  "key30": "4CtkEe899ni9ngxWg3LZRy8Xi9tg7MxmTFRihBN9WvMCyRRHQJY6bM2caXn5Q3QcGHTy9xC4bzYa91EMnVWhZhsk",
  "key31": "31LUoWmgPYpPCSdPFkdeMcFxeTDB1E6D7HMFu3sKjEM8dJm3GAUAC5qKYtiRDN3xkKpUHx6NcpP2rJPggEwMpvcr",
  "key32": "5oCeuxPwgkiX9A3Y4XMJoLrEK9vGrN4VM1bDhmErmobv3HBtd3yUjKHovqZTkqQho3Qh6xKMr6RtYsXGFxiX26SL",
  "key33": "3p7j2iYGtsymuZRNJ9DD99FjbgRKt5Ccmxr3FAU38Ybx9PKL9kHWJNV8rkQZosDJRFTt7ChimETUy4iK1Yst8GaD",
  "key34": "FsCXM17A8iz2CKmowtE66NBYa1zscf4RdgUpivqzTWXePhAEnPUJsu4ctiB4ALM5XTJ13ygsQ4Ssuao8Jg54k1r",
  "key35": "RV1LUdFuGkKe9VSbkudfRwod1P6bYBKgG59LnhvcNjfqJdbw4sJ9WbfcqApcreXi9RFuQCbQe5hx38MKcE7TD3t",
  "key36": "2PwCUpM7K8wD9XtzS6QMkGi67FpmMTULFEFHqPu8SqfvHmfAMmQsQyfzynx6Ew8aBMjCcmUVQQHuc3Saia1t5mHr",
  "key37": "2FYtLDggCJN18bpMuq7u5DfpUSV3XzDHyw8XJHFpbqS6Y5ZFWeezX1ss1TBfQxgvGh2JrRDnJmsPHsMpWYLUXnQd"
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
