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
    "4dVb4PiK6VekfNYWvXeuLjbK2XDvKKPTZr6aFUSRUdURtCkxi3PUxMBiBKoAwpFnriwByAid7ob7iFeXFq3SBXPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E9Wpg7YufZCVnvHESCWPk5u4eo21BG8Re29mAeiKNE9QvxB4KbyoECyt3RU7aUoBvtSTPWF3jgKBgCPcroijUpY",
  "key1": "5W1fv3vo1HycAzouKMLYwiXVoueUewBTXan7T14eGSaYxfEeZtLrh7gAgTEzp2yKx7WvHZQYAQ7XsrAm73S4ggSB",
  "key2": "5Cc2kxFcFPLR2odNcCkqpwQxeZETQGVJwuTUx4bBkMB68xmvobtydsdpGJsuXzjhfJnSJ8CbvTvd5PoBSvvXMUMR",
  "key3": "4p9axWr5ra9Qhnfe1xDq22tWMZhN1C4dWKxsAnV8GDryRU7aPFQQsB8f5XPfa7QHpZvXbfRL5rdqkotbBoV2qenL",
  "key4": "5a2NjSzRRVu4jwv8jYgqFi4jJjEANYG2Zo1z8v9id2UH3NfGrGHyyKzU75nMUFqAFRnDootd9rVtfjW4XWCB9hzc",
  "key5": "3AMAsppiDXpsn3riPELa1XD53QdQyxyyqyVpx7D6yq35kEe3fzkpDdEPUN9PerbrhsFfwFVngZvLRQjFY87ndjGD",
  "key6": "5vnSkc2vUNsVWW6pDvXwv9rE6Fq9WckG9WSu9URK9ycXdh6zTMFbrphJqg3oayhCNf1MZv2K9FvWKNEha3WT2Z1",
  "key7": "3SwHfXosqJPZc5SRdj3mtjf8FkJD7wXVkzsVkBfWP6QUsTqjpJFwcset7tGLaLTQZZkWfXZo5aaXBtLrrGUVzMP9",
  "key8": "4yHKc97ugVicjG2pvxCg7gCYJjwap3BYSrQduQdH4z4URJ9o2h7AvprAvFymzg49pZZ9VNMPXoA4SxevW6SPJECn",
  "key9": "wPfDcBCJzccRh5h8yH5GdpNrWMmvnSpGNCRegGvyz97EMMp8FuwXafeotSijVz5xfiXFAuGVvL7ob8du1Zyco9D",
  "key10": "5i1VEmtmho4pVnhu3inyjQXoLDTk74Xgssc2RitWHXqLXAuiVgoua4r8H5SD3NnWEkoFTkvZ2dmJeMJgy2hyF2Z2",
  "key11": "5EcCrFYEia9kvZQnf5Y2XiME8y3GcVKkRWmPRJz9XxweKQHxiyh8iRqCqxXkJpWE2z2xXQPv9xy2vXmW9SNCx7Rc",
  "key12": "4ysfCpa7TStiQ6J4V9fyo53e75YkmAdNPjvAbSdF8SHpiHLAgP55a5L3RgCerR9NL1n7hH2eZhW9fenmMH7kGVQE",
  "key13": "ouWtfaZecH72cF7TjKUeAeSoFDPh66xrzXnHWo3FMpyM58TnM5DhrYPq8iBQbhYGGd8TGEBJkv1TfZTyzbkwfJu",
  "key14": "42NCDM2wH66GxagkqNUJBGZ4R2kXa9BJ5KixYTqhhDbXH8GMtdPG84T2yk1BF6tw19zrkWTPzJ6HP2sAToxby3UC",
  "key15": "2ss5o8mL1xBjvti8rhgR1FErE7QZDgSjae7Mnb72d9VWrxDEDRKiWrTHHyBv2jcz1JUxnS4S1pSm2rv5fzNNMswA",
  "key16": "5sDnRvinu7qmiivB3DAtRJZsmBfbPcgAZtrHcvpytxxD5VrRDJz1wkqA2SJi8sYMKCceKjUSy56JJCsXB9nM4XuR",
  "key17": "5WVpPmafoR8McXYNARdzLZyRhHad2ky7Zdd2KU8VWPScBzMEcuFZUwdDzWSF1xCgPD4DhPzQZENdjUsyv9wEBQQK",
  "key18": "5mLpNEGqhhY8qFuH2vtqrv6VuRY2v9CVDVum4hYw6sAjnxFVzJTki2Ys5ddPnLw67YguZhDSyzjfGrjn2uZJFbnP",
  "key19": "n9u5MkHRVGGTphKNgUUgg5Q1V45eh6dVyBRSQZY8Bc7wZR777wi43ujpYuEWXy2d3fmav2XzwZKJAvnzbAP9V75",
  "key20": "4xP3kyttHs6UL1nXcuFuZastM56qKnW1pyu61TtsXdyDjfjbucXUEFjk8tk2gzKnjXeYXAjjkMbCJ7onPse9Zc6Q",
  "key21": "5hLoSNqQZaXWzLQTQFaZLjbSeVzESA2cX3go2JSc4bp2RCCKnDkSraYfPvnm9G3eCBXTYGEYjxjQvFNnXvAZvXhx",
  "key22": "3KrL5JrPuFXTgNZbGmTFkCCjNqxbmhRrUsm7ghoaV7bh2axy3CHNDnB5wRK79MUuqhLHWTU6WCbiM6W1km1FDq3W",
  "key23": "23QHJJBaF2ueD4wbM3CiCxtyJq79h5MYe4y38WXhfws6fMr6xvNSJYwtog8DkPEM9BFVNCJ5mJfhsZK9KQGcFi58",
  "key24": "5D1xjUrToo524KJFiGi3ZuiDjEF5asRj17peSdoSZhsJ3UGMjuhoCrkKbMRV6yCAULJGHVrWgwMT6HBcjiwUr5UC",
  "key25": "5jdFav1GSKsmyGUFshYPxyw9jQ2vcKqgj5fmifBdsb2EEESUcFK5LapCkDo1u2R9HegtHmy3czU6VQBxVCFZSnf4",
  "key26": "2KXFP7FGG5AkK4DdHybABjaEd1R5FaYEENegizZEz3idbxvMVvHCfbyd3yCnmnZsNuoeua1k15Rks6F7XUFxrd1w"
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
