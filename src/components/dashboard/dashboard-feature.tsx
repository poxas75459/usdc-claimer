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
    "2SFty9YXs54HposBmYwPmqnUjD8WwQaGnmNwu3V9431EdouwBKgE6kPHaBekerse2JQVn7LWHc4tvGKvsdPSYpap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yYDF3fBT4FhDieddbXAfU3rnx1TX8pyrZ4E3YZaAxJfv7Cvahf1FadotHxavF8k5Ar6LtvXmAebAKAWeeYSXHgJ",
  "key1": "UfFNjUE41Gy3rXUCQrx3SsvzncKps5NPpwR2nZ6cZTWpVVPrNxsHdAMZDXet319LHhc754K6jaK6dJ1wmecaEhT",
  "key2": "3QFNGM2QLMm44Jw1w1n3Lo2Su9f1ZNzUEcmTxtK9CWtP5YPZmqhTSyFexG6WwCBTDaG53LqCo56tMwMuhTgmB9tt",
  "key3": "2BAJVY3ioW4ZBxnLDSVT1GLwCndRB9dbMLQJz48FY4x6eaw8Kh6xyioVFsVawHa9WbSCKL2vzVEezNMEJ1EUWwG5",
  "key4": "5hdBtMjXML3ZAZHDRibViA5qqtcxqH23eFHk5aJvyUjhN19BB7WACiF6e1BUXYE2ZfteWehGPqd7Yq2tSQqeXdqd",
  "key5": "494QU9ytXU4em7fKaNFp1Z435oDgW3AVu9pLywuAk8Szh1boVYNyN8aCxF7ox1NdKdRL3TgHnUT9Baq44zcs6xXi",
  "key6": "58eH6QP5nMcyMySsc7QnrV2CmQ5RQHQ6722MyBUu4Neceukb2RYomKnL6sQkXxgAXyTzHVhuMAf1tjCj6sGtE8Uq",
  "key7": "4AKuUr8GxdiSHZa47ioz71g7SNoKdfPQci7RHReUuQqmLc2e4bpUcAK9e5FJkoxC2U5c6mg869RpR3PDe67FwsjS",
  "key8": "H6oQgngAVXghfZKAk8HATMtBSWRxentpVwCvdPChucw6Vt6KkZnLBLcCqJqDesJebChwgEqviJXp3KvNSxPb8Zz",
  "key9": "2GyaXPhf27LbUL8SryysqHUusm7QwJ33K6PjKjsjke7YqUQBPbXU2bZkdk1bHwZvR9KyZ2g8rN9tmXpBDcDw4M6b",
  "key10": "3To5AzWVE9dDgAD4swE13BjxbYkHSKCTTuBd6YUjKV6jAqLoWdgvHWD4TynXkbs5VPSPQaHN6K6kRRrDg4AWibnK",
  "key11": "4q5rJ2nqPuEkKofMyMBvnJQGTFySr3tATVrYkdSu2cTPWx8QhTLjEjAKFawt5497GyhXpj6vcXg3fWT5LQS9WWh8",
  "key12": "3Z56waZzHYdAYbBBAmDEw58QaFZpaCRxdRZBhMBrQphrDzv7EBsKioPvmUaJ6CtW8xHREFMLNemK4cc1Pnr5ivSk",
  "key13": "5zCsvFFxQwzwd7VdXMxdqKgit4F8NmynmKGJBUT4oxwtQF7UzkaURq9no9Th2U6G3eSiaTiWCFfDdSPobRnkSMbx",
  "key14": "2K8NKhwWhtqz3Zs5NzEBB6w4biirPEKFC3GYcXGA3ZBxW58qfRHfftuXLcnQ9XEd1XMp5mvfyRnb4pYY9hDtBRSf",
  "key15": "3YFbXpHA93r4y7u5UdtGyzFDTgT3HEeQcyp8niYZreE5xZaPXF97fNnoQZHQ2BTXtuuwXoCn7vYd2W82WiTWUzJ3",
  "key16": "4QzWQzvbf6dFqkC3SS3bZayUU7W38mc58pCuSQCrjFSCrLPBepgAHrW3EQEV3a2KZe12y5AJTqkMPM5FExCVMAXb",
  "key17": "MDvKvW16zCUJes2zeVK4LePF87zCegEki83Ny6ymymMEPWkqa3YNzCcEe4S4d14q7jLEFP9ccTmVuebhjzvTnca",
  "key18": "3knfPMeWmEZnoFqdgC1YSC3Fautvh3jmEGtDgN2CDVYDTNDxNqBPsVZjz9d6tcBcpUqcdAWvLnEAyCTJSbuaUCET",
  "key19": "3SWTt1u2jWWBahWTpeeFg661gYHpLiurkQd5XyLEa3z63gXnAXbjkTT22tUEmvYRe175qp5oF2XTrarjToF8iF5y",
  "key20": "5FBbbiiF1xBY53RsrsZTygKNsNLDf4WRZr2asLWRuJevEpREf86My9DUpM2NqGhP7n3piB7tHXqM8uyw7qi9Y6nB",
  "key21": "5DsQCYtbkkkhGLDvEHWKmQcBK21tFzkp3mpXjEhnYCpR6Aj51quPRhSZ4Q2y52VAP2qD53FGFao2dBnhYKpB9ccR",
  "key22": "5xfFAFGhKZrQRyqAxbcKh74aAWf2WF1cgPFQmmMccqgWZ7F3LBXzDf32mqBJvx198TeufMKDbGcHTXsQTu7Ufwqo",
  "key23": "5fnJQQNcjBXdvkLTp2L9QfCQLDiFxUkARq7Y9RcjtU1LPud16tE3x6acUN3L5LB6N8AeXPHJ62TPeZJgDK724pYm",
  "key24": "4N3PEcfkiKwQgr833qthH6jp1ShmWYJL773dvCnCgcoCqy4jsjh3yQh4b7nuKDceFBtxcj5gvMQYorU5sxczFAjJ"
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
