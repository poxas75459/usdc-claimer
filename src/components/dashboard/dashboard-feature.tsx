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
    "2RUk1he5AaN2gHFDSPJVYwdpBiuZpweUypQCE2hm2JGNjQcR7CsRTGAzKZDrmHUPsZNyDC4LpYFA9Qqf8Nj8ZSTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wr8CFZNjqLKmLsw5zJbeBq8Gf1HF3psZ4Ga1Punu866DUvxg998MbyUC4Qf6Vz1gMCWYyphrxQYNP5s5qRNBq22",
  "key1": "3UaH2TzZsnbhsqy2TwsL3Ja17jDbf223r7FMEsCfyzHhp4dkDKLrR5pZDXC44FySBbXgghPpTznH9rS1AYq7RKY1",
  "key2": "pEF5xFeqhr9Qg1dPZtfoRHj2dPnJ6ceoWJgrku36Yyrnjyph3MAfUM5JDQssQcRB84RxgLLXE9NZXAddKWvF4EQ",
  "key3": "4MfrytXHMbEuBb8mY2wZcozLh7JfnUXEtrA8TFW6AHr5RbXkFXdZJPracPWQqjHpVzLuCFe99z7xFp9Jz5gUXrBi",
  "key4": "2C6CsUcE6Nmr75ZsVSFyNytj2wMXAuu6LZwvrkP8fKCX1vLs2U5dRii9BQJgF3gP4RyhA6bj9WvratGRGhE7jbWs",
  "key5": "3QSCJuhiUqqf5h8pwDrCFjhQcYAwzzS3VsgowxnKRK9hR4qwavsiq1WF2DYpzk8ziGLiR7FyB51ztTyhgRP1sFys",
  "key6": "36Z2mGr1utVc9BhadFa9K9vdBiFEXG8CdAhzNXdxpuC7zFnRPiZ46pg8hKejpskzzJcJecwZ984u5HaMoWJ9zJbm",
  "key7": "315yJChpjnLLHqxQPbn5tzbBPqkw7BU1JwMrrWuBNJdkCkALDxfop4uoqbsCQfHiy8qJ2JEucGTaWgGMSCVtj9tr",
  "key8": "3YnDnK7ftjp2rVhzCcfFvRaWTSVmPXmZN1GSTQ98VfALvsDYM2p9raooZ8mGD9RN5p2wdTzaUXJWHWPJYJ9RXxrC",
  "key9": "22x4Etiv2Dm7iRoLkuzDjHeVumPuojr23VucD1aicxz1kq4oSBS2onNj9tx2HGcBWzWgp1DzGWcZYMuxgZS6TjAz",
  "key10": "h6Jrb8KwrKkYXfhZFujJd5iiWxJ7iEjpZgRChZNscrueRnhMW5mmLGVrcikXrhx21Z36W6bJ2SrMSLqzVK51LfP",
  "key11": "21zF72id6kbyRUBpeTJiPyH82uNXZz6djGcV8MucN5Vzqb98rar44V1KVUHcAUW3LcbVG9CSMrKbXeA7sjCxe4Vz",
  "key12": "sF8YAze2HvwHW97VwMu3BZxNW7EwDzMqsdDL1j2CU5XFbjFVR4r5f3M3VjTBY6i68xjVHAJXb4jp3iqhcJpQUEc",
  "key13": "58RMDjKic8FxmJDGhcptDg5CL4NrqevaTEBtdJ3sLqftYdMsMojApdGTUiAmeFLQYVSNs5U1ohrR6yQeXmmmDofr",
  "key14": "xxmTzvioGH95DQM9Kwry4X3htUU3z8HuSu4HDhhKqsf33UmD2VgvELdvQsTapCmfmRr5AousGj62yiwcUVufBWZ",
  "key15": "5ADbukt45HyHa4T6c29gWvBbTxj7S4HrMhjRvFdVQYXdZ5zNXtZCi9THvK13Yu1DKkpdfJbnuMSEDBwYLZKjJbxW",
  "key16": "BqG1fQSjeD1cvnPKthdZSoTeUx7u51TiCzKdS5wWjNhN2GeyZQiFRWFGQdM9qCr9ft4B617LaQyBRc7qfRBjAbR",
  "key17": "tGtDVEg3ieM14ctJDNBQm3FNCZqFgscrnTPsQ8dE8ByNzGbo3Y4SJHF96LEVyC4PpAHHSyAEVq18E6eVjBXqMSq",
  "key18": "4ymzs6HkJs6guVBW6LZk17zcooXBBCkY8xFWPYn7B19ZR1u7cM7fDXXMKucmHPCMkxXJdKVwR5pMQo4q82gBN6ak",
  "key19": "EMHbeximFBdi1GoApJTbP9JUFQ1f6jjebGvS8Deenvpb5CbWHfUwrx2H9RRkTDjPwQ3mNzx8e4ym5wdfbMyzPCb",
  "key20": "7eSPqTBTr3wCkGgJbZomVfYxzDbfBYoTSh5BzAp6p2xGft2Xo8kijtf9hiFtNBDEqt7bbRjvKxJXdf89BHaVe4t",
  "key21": "42DBaZrMwuipxtoEpyn1H7RFwhu4WecaThWSg9FphpzxySfcFWjwwsPvrmbSZptFuNxrtDMFceVxzCDgjBJVcfhc",
  "key22": "213gsURjWuVapWX8j52GZWBx8bcET3EynyWJMUjDRFnD62tM9dnhmJmqPxnP8mJRi716sLnTnUHRk1nim4xw9g8x",
  "key23": "4S31eDHNqabnpATundpWjNPN6xQb6Ay2pk2evu23crZFJZjtru2c5RThFotRCRYWL4XcUxNFyXaNdBM7bqkkXeeS",
  "key24": "42BzTYCatktJM5rzbWxMRMsnLF6TbBcfTDnwfJzZJZZooKeyx8ZiFM1mJUSnqreXTgSo9tyiVyPPPJzLGUNpKBay",
  "key25": "2vV2d75AZe4pkFsujL8V9LhwccBAnPsDD69CYWr1QweBf1bNy2yfN4xyWfjYYrztqCZcbw4cppcjMGhTUTd8CHbK"
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
