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
    "rypJYSYQNYh5WvbSVGyjb9C1J5s1PHr5tKyY8zc9xYgUDfjcJcZDbAjwLYDJDJRe94bs6p3P2Zg2SQT7XuPQs2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oeNh6T4dVtjrgcimMdbhawADFBGPsHRoLCX75VQgkiUEjX83eix3Hvqs8phhHQZe8ASBaMkc47qRhHbTAsoPFd1",
  "key1": "3gwcmaAw7HHTA2sDD6B5Z491USp5rA7mnxjrxvtjaw1X5vnfFEhcgkHN4S3ibr8ykg7U6pZDjiJKXTxyiKMcycZD",
  "key2": "33yLpVkyFimJJbWpMDLV5ay9pT7cGo7EJ6SU9LBZyokXEqp7KWxhNi4KtGYkokbJv3Yjo9y5m4B6fJn4Ri5KT3cq",
  "key3": "55kkMULdoqNGis6ifx3K4E8pvpuHG4qVmyYLNS6Cmi7DsfEjY3v2AD8UH8TMQF5inw6e1o3nQeuLuRvVAvvFviq7",
  "key4": "TqmBf59Jkj8wZFWQPbr5cm1wCudX69UauUygoEAPiYydp8bXMv2QhJJ5CQuBjFA1qz2qqW39siZMFncciMTCuJj",
  "key5": "2iQG9K2rDNrMk7EpCWY7Cn4n2Kcaw6fMqr28ZG2BWHGhPRcCBewtWhfDGLzpMPCroh7rf81HyTAVdgZ4qWX2Qcft",
  "key6": "3y1se9Tn363mi1heRDFjKHRMBBY95QyeyFghGBUFv8abzV3HDznic9T1D8priXAASZsDJnjNgWKUpK1uV53eCtRL",
  "key7": "rMCqHFPKpR779oxDsEhbHUHHgc5DpgR2F8GSCjawYdWk5twrY5Q2sWubPuEgpXqKHrAVEJMQMbDmexcHWPpPAZy",
  "key8": "3ycA5DWxrGTxyHgphJAW9duWpiYrHk5qqygKaRcEK2KpCUK2RwEKREkaM5incVxXdbiQPBtmMu9hxYBabkpMV9Fp",
  "key9": "4a7JerEvVzaVmi24G284ZdUXE8TYJsuxug9i2d6eHv6PvxYhMXWcYk8XtDbPdhj7kwQxENahJen3QQzvY8GXXca8",
  "key10": "5jgCbpTRt26sHaqAWao5gmvc794Y4iFgqxYHog3jNYbK3G4x4hon5r1mYfLKGxKZ4W2MDUBQYeAGxVkJkXpwLTjJ",
  "key11": "4bcLzhHECPzKDtyHbhmNMQvtU9nwoE4bgKGo4TR6PVLwt88wgNAxfmkTXzbJ2kHb3Qv7exx4wBVyN927JgxJcLLh",
  "key12": "41z2YjifdNZ4nh3JZZt7LQ12LxbWD48cXk49NEsZMGYDarApHw3bquZKjZM9BaAFgTRBf9W8uAGKGUGzEwJAg2JG",
  "key13": "2NZtbRvSRrwSyPukcXeWdPVXeUsjP8CKokiBg1U2jnPCcSHziMWLoYoJpKSTDyScUgJzZKXCrPf2LsszyZH2c8Rz",
  "key14": "5tbezKaXWFdes5ZLWbq1pdPpFpgkU88RgWdR7wvEJhGVoKTdM1d95FyeYPNtndYed6qZGRAFGemNfZyjJHnd42EM",
  "key15": "51hTFt2KidC76G6FZdDHn6o3mxPR7Ymsztv8o6o65eveMW2Bn7F2i4Dp4qDkT8NPMdK3CwYseyZBYdgxcbid1YEE",
  "key16": "8eBb57n8Edtco9RV883rD9iEKkUZXJwvoYjwvo1c6fAbgeEz7bwZCEURUH7Nr5cfv9Kxqy8HeBX3nFdcPbfnPEQ",
  "key17": "8z3uMS4gvcpEtHY4mq7fd9RqHmTY4vCi1VQVvwDBeY7Fg6fvvNAaPCsvatmjvdTEepzRWzU2EP5pMBWfiXDh8Y7",
  "key18": "46nQPXsRWWn5o7CnaTDnKMYQiMh8gLxwK33XvEpbWprPZRSTcgLe4BNMs5Amfr3v2TZDmhgsX1KReusgdjFj8BZv",
  "key19": "mzVgrVaijgCg62Rc4DrCrF89wvtqGJ9n8RvzrV2WkfCM4McciaKzAPXZQGvPWwhiAQHt1HhPDxua6qcu8hrZsmq",
  "key20": "2rXhwttWb7jFEqKhcHEkW6oD84yuJ5EC77BVVGxyco3VqkTZLq5FwhXktSMjAJTcP39hNo8voQiiXU7Q9N4rDYoy",
  "key21": "3JYHAEfhqU94bKvQvYRsCzREaPLhLZEaB8egLYS47XEa9KzmbHA3cXFQ5YNafndyLzzTWbUPDYbgB6fSgtvPXyVc",
  "key22": "49WkPR4sbYCFj7ZKMTo5hpWUbU8QGCAaZEL87NkGgXKpx2EyySSZEuhcBo5pmL2A3W5pwDNhr58ABZ94gMb1qUzn",
  "key23": "Mwt3RBoUoToN9Ao54VqDs46qnmiswbnXfJcW9ikzesT5ArMdGXLAGYBrxVL8cAcbjdovyCiyCxzS4THYM2CDwnW",
  "key24": "5vhLGLAxcLd6icL1LG1yWiLysquK2GEbk5aQLu78hfGA92LzUXLMnqSsxigC3yGgdLbTf46UcsKts1Wf4tExt5h8",
  "key25": "idWuyfGshC9eZKpt52YV5EcC64xPJZNa9ZUArwcFyCpg88F1MjQw66pPtzEaG6gDeGrUns92amBTsft3emEmpp9"
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
