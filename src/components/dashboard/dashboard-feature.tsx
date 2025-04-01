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
    "3XRxDnHcQLhLWsyCDtPek7QuabdnF8PfoAQCrUsLdvZBr8hGzFtCiZCioz2mLo7Wk2jkVG9yjXGHPbT5Y7wVgwgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zhudDSaYB7oiaGyqMvrGgZAFCEU5nj2RQj8dxWVc7pHWFpd6YspEBfZG7xPyCK7QqbqzxtiH167HJ3asmVCAwXe",
  "key1": "2ENNxie9j4Fff91odUTmBVhVdUYcdp3M93DEA3dUqrMVkN7M6nBG75nDBd4GB25UdQr2xni2LckRTeNBYyrvcbAy",
  "key2": "2ZdRQfNpoePAKFCM2muZ7wzySb8V2AfvFUgSNXNa5SJtTxfKU6KcsFKRY8sGJ5Bt9Ntin9Mw3imQdA9cjCPzXimq",
  "key3": "3AMPyRhbmPmr5AQSbFGBqVjk5GxE16LwF6X6tsGUx7Nf2x12duPHHet9Mz6gEjf5BRycaiyiPW7V5AVRWYhcRHEo",
  "key4": "2vBTCXHvwv3kwwgs2HpkJNNR6fLTdiw4iEm5Vcrfovd16qu5QmycZRXFteVD1cU4L4dXnPPbYmMRxWLfnKq4c3EP",
  "key5": "4CUqhY7Qg8bX1sskkC5VvSEz1zZDm3BGSbDNGJXS2VU6N1DBPf6SyMUG4DxqmToFpUZAdd9objg6reegV22JRK3n",
  "key6": "5E6qBTxjnbbvZ91n7XAPsUL8yVgx3y8V8w6y4DoVeUbbTCsmkUTWKe53veudfmaTSKEcLFU8RrDUe1cRFG9KBLQq",
  "key7": "3iQeM6xz7tuccuGUV3cStGD9uEEJcqUWghj8s6jTJxjP5nAbz6mVpPr6dqV6SiauovHafr1yG2Kty2G9wPdnKb8z",
  "key8": "x6QYrvpys5xemEghzWs7Jecy2p9cXFEVFLcbNBHbxS2Vh6UNoYSTKGyimjYPBxr19Lh8ZxwnYhydc8jQ1ktsFGM",
  "key9": "38NKKdNTUjxG7AQN33bVZBzrrh8BbP7ktoQMbuTayaYWnvhqEiDsUrk2z1HUw8pc5ZCqLEuj5YYbVe4Dj5AYR51K",
  "key10": "2BrJWxocqgshszu6ARUMoAgnQUQwAWCVTHX4CMuQ3TN7e6jbGaccEbdahsmP28QR6LtyYH6RFQEc1qSavzFLUhyc",
  "key11": "byek4gW7iZWa7WCXxSbSqrxF7ES2JQ87Fxtf9Dgp5qdusxV87rUkUzPokAGBAyFex1MjvcpBgQ3h3yZauhcjYTf",
  "key12": "4uHntW6nMrLfuhKCUbkd8xNS6QDkDfKabDpB6sjAKLiUuCpE7ZqHkhG6y9zLdN4wYzSCaicjt9VBpkavfd188pRf",
  "key13": "45bnxs1MYgvTRMKTg16mBkkrt7BB9ZMqLqJZvW6UbX7MvyAtYCtwA5pUXGNsmvjfoyVtUzdhrKV74tm6Znnw4yF7",
  "key14": "3nurFycs3M8RSggsaMaqBQZGvbhAsU68TfEQWoqsYsBS312pX8mFRueH62wxYWCtAKrbA7GpyuNn3BU8o6LFLFNA",
  "key15": "5BYcCfTmu58gVTyR26KTiPC6abYtaRxgARffBNGp6QjozH5Hvd83JxjywEr2dQW4G9Tp3ZBPgqfx8UXWfYWQZKn5",
  "key16": "2fLNs95N7qcMiqYJbXZL3ctwAGFWGKtzc6QCmb7xm89RojBQWBZwdAgv5pz31FE4Zf8ZiM8nxBKo9Zaf9dXMsspP",
  "key17": "4H2XYgmWhr5XqnKNAHqgxYFu8Buy3vDhtdy6mvM65amu9K2V2udVsrkwKJvVEkMUdVR7zwH4XQFPES6Gje9FHemu",
  "key18": "5JgbaNYWJoRTDjUP2kNxdGX3K6D78GM4MabtNMTXGANcRvEt6gZVMizdDZovgR1MkHrNREytJxsgVQui27H1KY7S",
  "key19": "5Wi5XXYzxsZxDs5mxea2H4bExYzSGhSCmHJT9R8jgiTP31EECmpZ8u95WiGrLjzGnf2qQc4JrBHUhFVtjyunmafw",
  "key20": "3Z56KuBCdqk9aZPD4UMBoFYXnKK17TVSCZGSSRSnb3CSDzLBbzNJjBrq9yoWJDEwHzDo3u3JgZGJMVUzCCozEU8m",
  "key21": "3PYJDmR92EkKrm3MBuAjwwxQvEQwu6QojkiFVTkVm81BugKnQKVCL5tCssrAzSvRKWR76FsjMTkSrS11GQx2KqtR",
  "key22": "5c1R4V3CgKowQ9h4fjSLMAZoZPDdFdW61YsYZYUCUtvEUMcauf9zg3kXDxixrn4edPw17ZMUzXENHc2C2yogijap",
  "key23": "2SLVbPpbNVYrEpAyQje3E8G7iFYVGeAoGBKZWgPpbqSkH3oTgCGEJXqniCVZoBmbARngVDLVzbRqpZYM2PkeX34L",
  "key24": "4cqKFUkmqd4dM56hr6smw44AQkrQMsTibkfT1CKGkAvz1TLyM3fRp9eyh8rq6hUoJUkX2vNUHAnDzdUVfqzFwjr2"
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
