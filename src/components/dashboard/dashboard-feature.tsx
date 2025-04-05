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
    "3iDLjVdhae9MHd5kM1p4n6RxXdfwsJRkfffq9iKvH7Td2U7oZJUZ2SwRejhAytVgP7gyrXrhfcm1uNrSvTQQiq6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36PB4LTU7RocdpKm95zdJZKFdzbVzdtPpwzuQTnzEg1gfYTpLhwA6rQXBiKHeB2jTcX3EP5xNHDVAvy7uwMqzNSo",
  "key1": "2nJvWG2tBZ4z3BoHRGe7K6ZAmz8P1S7AGNGSsYfbk2t65mc1g7zU3qxgvJWM3wGoYjbpQtModk9jqLyEkLxYYd5p",
  "key2": "2RaSsKAmpHmunkrCHTogiPpuhLwyp7mzczM21m94TrUmcfoTWDUQMcr9VFceruZ8TPJUYDWqNYsh3LfsEV26o8ps",
  "key3": "3gSoRnAzMwpVqeQt98rT7pqHxBEdt8rzefWWUv5v18K2bCAYN2KuHZtuizKVm6pnFbefy1N7UMRRUJusP8MdGSRw",
  "key4": "CynKCbSMzCv9VJwsCZpV2AxebnXzkMe1nV6RxQcS3v7t7Jx1DADNHXDgnJh3uKGF4kmUYvuxXhJrSrVvWogTBRs",
  "key5": "9jtcLAWZ4fLsHYhhnruurCEdTUhtgUm1nCGQWoFZWWqctxWgr9YhWHQYfX6JtxhhqKQR1uwRBrTXbFSBkPyovcX",
  "key6": "3YuSbCyDadR7YPcaJ34JYF8f6ZrXQnAEH3arxyjrMfMeWu1UJmtxRx8VccMyvxWDgcbkXJpQadRPQ9EMwwq9Pw2d",
  "key7": "2Xr29PBUdmtdA7G8NhGzxNy33JC9TZRcy9agoZhcADy1FgtfrjwTHQmhhDo322buFNSUqacTXzt366pz53qQLMBg",
  "key8": "4GUagnacGmxHMJfcfnr8tuvYDF7rWVxpjFnU5sYrqHWCSNUnuvRv3Li6U38n4u22DhBKMbEpacMgjTrK7kvgmXvY",
  "key9": "3tbuR9XCJf3zTwL2u6ZXrbEWqiTXQZxGF1gePEd2V2Kq1KiPAyaMWQFkF4Pna9GeVZLeVx4tGxTgTrPbTNqKPFGX",
  "key10": "5bc4TpwkeW4MUj6H9rsTteK9s89rQkDcFcsNA4aELdFnxsyr48v2gfSJWZMioBSCYK42R5mpZ2Msw5DCVhWWunJF",
  "key11": "4nmTdxVauGqHgLsUBjw57KjdFWAtpzN7ATniTb6X8f9hjQ2vKHGUBi5g1qxv1RLgWgBzLeiFXKdkpcHouRrduep5",
  "key12": "54STjcT5QGFnUyNvVtanMu6ERxeJ7sQu2a6YEpGjq2554umowkwma9uT2N5grj9yUgu2uerJF9iPzQmjcRsnDmKZ",
  "key13": "3sVrL54DCXmK2SfdV8xCwZhGeRhAxZbZnSwq5s2VRjoKPZF6zHytt2Ko6JxFd4vd2yETWXtJaaGhwJRDHW3d9edS",
  "key14": "4mZ4sfQCENw5kUvWbn4A1MGqydeG3fKn49Bnj2vYiJkN1c1SG7V5yTzcj2fVz3A5REXWVYkHJPS38pTYFmH3RB4L",
  "key15": "gjxajH7GvoamYjmqEBrwBL3sSb58uJNEphWHSyEjzXz3XrGCgKdKBPL1m5iqQeWhVCVPw4JtKnw5jugJo5pECzw",
  "key16": "67KphzLF9KgNyfZzmj19duwxFWP47iMQ6GcG9rM3p6CRpujDab5nd5GoxhoFhbcu9BpMgZQHTCXJSnidftSLt1Hv",
  "key17": "5JzMfKwgxstySzXon3ZmMY5kxu3Y3B51cH4zBbcv9ZrctveDeZPRvH8j86wjK41YwANm1bWGBjbm6JwVEeUY7ajX",
  "key18": "BRDt75xYiThNAT4vsNDWeorACwvGL1qA4DSQhoLP8hwRBHuHAKC6njspGHjsk3Q2goQgVZj4NrqJK5LqW4UjZRs",
  "key19": "3fnkxMVR5GRKff8bLoUmCs5WktCE3hSnrZTiz8S3QKjEtcCJkrnFySz7bmhDCr4CwcLYXBxseGHEDxnX1frBheST",
  "key20": "2PSjAfhk5c3FNN9LdJrJhnEncRLxoG58kJDvzFAn6dmNjXVP8k8jKmvpLsc5CJ1MiyUvQzpS8Mnr8Dex3hsW67X4",
  "key21": "3Qi1FgWbSbh5UHgXgkue2X7FC6NgCJtUYg6yU4q2g1W4K5kNcNDZ9jTD1zTTGUKm4aZbGKJeM8fBKcAaygr8JXYK",
  "key22": "4AM83LuFXDHxTgeN1w192EvhkBNFooBg5bGCijPMLZgaHGGfS2DbHQa7RASYMfas6XEUHWFKL8UpypZwU4ySCX7j",
  "key23": "5mFMuwQpFLNewsHkCgjCCRJMQKFk6XEzxwyPtjveLTg3EkXVqF8CCGx5CCgAThJWH9pQ1n5dciaurdZt2sPUEYNP",
  "key24": "5jjqz9GYewfreSebyjkXsXEemLZPh6nMK4rappVTn5p9G3LW89P79MXjgK2G1AEmSSSx61V8ZtxBx56z6PLNZdbP",
  "key25": "4XqumhuRLexV1S9vwa9TmvWNZS4vGkz5S559xFboDpvkTueKexbo1TAqD4zhD6E2FGBuP8bhWFkz8xWmm6Tc6nU",
  "key26": "2gz8sNHr2dkhLkb6FNsGz8jkpPWp9hNLRsgnQFaxVRzbsEH92NouNsirr7CocoaJ6SfaDbssiTGgQ8GTQZeXzaXf",
  "key27": "JVeqcx9xb3Rzc9oWt1twKRzUYUdAvr4DP8X77ZJiuj4rDdhgixc6wBNCje7vyPvDQVVz6Ry8Ut6Yymotq9ZM8Vx",
  "key28": "4vioag9XRDXhT2Pms4mjS3ZUjGaQVzqse6BLehYucaAc7DYx51ecd4jM3J85KTP37b6cbUq8ifCGjRyXV5jK7th7",
  "key29": "5pd2LVXAFGevRxVKSegUVjEtFgFih2Wmb9Fian46FUaU3eQn73JgqzCEFeYd8SawFRGx7vN5Xn9btPq48zQxtkM3",
  "key30": "41Me1wNrYRCqxPKTchEaamRpGSADYsNMvi8Q4xNzdsF36riUXdrm6SkSaaGLKtqJLMdGfy8ZGPwryPQh95btYUQo",
  "key31": "4Ay8BUjbBziMcic8YJ6LUNKqEENMF1bL1D2hn4R22JRVx6A3y1FK3ZyxieVDSS3k7gpHUSSMeSqb36knLMNkSUtd",
  "key32": "63mbguuJ9gQXqtYEJV8pvebfd7hwK8HueQeUX4zN6yapSyMXYq12M8Y2LPgM485dpNPLUBWgob1jjT8KznPBDika",
  "key33": "36LJ7VHwpZiCeS6yFECXJdedDK2atZyYeTNeXbJrfQeeQB66AH5Zw5DmjJegp7xaELi3xwYVUXVbxNtDrAwdK13V"
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
