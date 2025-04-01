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
    "yYHccy6WG83WxiP127RK7pjQNbot4SZaaUofseACyJ6Z18AzfnWHPQvvduR9fQUwZJ4vKCURzyfEJsjvEFaBn9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PpimNVm7vBmgWoGiPXmGiMQHdeze2MdUJe4SokUD6vNV78dcYxdvMnP9y5RjJNocBqZZ22wBSXc3J3LdnLwnDJb",
  "key1": "5UY2kmNeziQTmnx6Qe4DC3bMYd5ax23qYbkJmP6pcobAtomxBsmm1J5iTNmwQokhkExAkEu8eRvxC8mdAhwiJ6rN",
  "key2": "37iU9y6GnfdcDN48hhpjbyHkXLA73p6SFLQQV8261G9FD5MZzaDXXmsvfbidffvZSjXCjdKDzdJ8gkoAxXaQSRG2",
  "key3": "2rMrkSKHGRTDVraWdRXHSbKA634gvnNRgue2Vcy586pVHdDrPf6QUXrs2nu37yxTU9VGVbEozNusn9DESt3jrBc8",
  "key4": "2qVWmPj1d1QcrMJrmfGCP7tM3vUu7Fzk7gEQFJ2DM8Dk1wPssLsmfcaKx2xmMMkg7kbJUHeoYdUDN58dtPeZN4dZ",
  "key5": "wagz5P1ftA8A1dUDth4fs2HLbLFrgx8uHd1THJU4T2xQJLQXyhhDmZxHFos3qkTfDjjC755217SfYD6EvvXTHRD",
  "key6": "2vMGLKW8tbaUWjjFLKvwmBDuxd4Tu686KNK9F73dqRdA78FoDiBmw96eahLzWiByT4cVfRk2EzQ1ySW9ZU2T9guC",
  "key7": "2oNdb5FaXdozggTYr3LFjLXfri9XSqGpYogcWrb3wEyj9CsVTkNTac6BQrfHbMwrNjXz2X8rnm1gbqZpr9cpudRv",
  "key8": "2ZBF6NFv5rYU1xUsCkFLcmRrR1sLPLUC3VHKM3EBHUGa79QUKX1uCzv8MSJRfb7Zw4j2wmECYegMM72ACmFS8gPu",
  "key9": "5tanp8DDYs5aqwwycqMHNowG2k299wwtDnzKJHxA6st19nExhWLsSM5TWKczwu98bN3oSCLppkv3uke8Qx3E61U9",
  "key10": "5yKFiy6JPT9PVYUikYpCT7HBGMrZhTpikoZYCNLxriDig8aP1nYpaEEQwAtE1TEVx1hTCSp7FNjRhzjshmrpEmF4",
  "key11": "KL9uw7H56KyasXaQZNyREfTvsn1QuniFzWzhbeARsrsUkeR1vMSwNahFBnBNNNqBk8JkgvJhgZp2whEYgyJBdet",
  "key12": "x8rLMyCgYEVCfEkxmTEwCVMbcBALBHrKc78F156bAsh2V1Jdz6DFeh3wee1dcTqjXGWevW2ynEq2zB8euJJvsK3",
  "key13": "64MM1FVVzZYU1FbiqTu7YRWBt6zYXzFLsm9Puhc2LoDD1aPUDuuXfH142P74QF87ETu7KAHUXeApMLaSaTqxaxZc",
  "key14": "47Cmo7nJdsyjS69GdxASMtquFmHcnbZjAxzfum3PRL5bhGiUMDy3zJ3wkijAjvC6CRpywgcdWqeatK5SoHe1GDL1",
  "key15": "3afiQg1wFF3Wx5sgspVD8DoKQdy1QRGQ3pMQ1LvKc1BDVr34tUb4B2eYNs5uLn2dXqDMV9YGYJ4ugCEynP9LscKj",
  "key16": "5NJtXFm3Nq6TZKpgf6kVkuR31SfX9scTf17A1c9fVB1j2jSNBq3pPKfpNLD6eqUgpfkintm1w9w19x59qXwNenZ2",
  "key17": "5EfYFS3cjcxzyM1XbdjSSSi8sWXUCimxxANB23ky7rsACco8idfjEtrLijq6t726zJrmkCehNCFuHH7eBtBjEo41",
  "key18": "aod6a1hYaLuyQja4rDFPibWtbLDU6gRkcHtDchX9LkfyDGHFzFpnGkeVu9EAvc8NgvgkZ7qUthLUwSFoUnZfKHd",
  "key19": "4g99MH8sVbB6EhCak94cLvE5QxxMPSHwNcJ6fxGfrZWgkhKZZEF8Uh1hYLwm6pyncpbyTLws9i44U7bbfsLCE6Tx",
  "key20": "56FVczWVzBgvCJKf9eML1HgvVQF9MvaLyvk7cRAQiYhur3fERDtSWCiPgACzTeaLpE1tkLH49sQkMiCjpCHEAcS4",
  "key21": "2kvUcEWCUjqgNegjZMyCLwWBjBcsGTXbBzYR18n5Bb9BE4uWU4yfbavMCL6vAPEbS5EPxX8dazFoDRT8vj9CJVym",
  "key22": "3WkdJuaSYrFHHiVjrCBLaVYBLDamAhxEpi1GAKmQFQTu4qcSaZh5wv7xoCZw9XreEGAahvYgtba8FSos3J5CEJNb",
  "key23": "3RSMLAD7Cda6XCW9gutjRWZDEgnmsUvGTGdYhdT5gJvvtJEF2ubE91gTzp7xhMrwokU7oPBPsQEM19sEodoZNyt2",
  "key24": "bjSpNbeZU8qUfLfd6q6gVxjV2EKKcDbevTrBhrV2Q66xM4sATjjbhWMWCc6ffeUpMD1vKKPqh3gZFdvnhwRXrWm",
  "key25": "5KTnW6yCn3APhNNNgWfDFdTsHec5uPpgi4zrJSUP3fnbbcX1JJQ2KGtfjwWk1JqJsCo6freZUey1XGajnYA5ATeU",
  "key26": "5FE4w7XYKjrzjmpPQHLT1nUVp3GHKhrxFbX1qHbGogr6VH7S4wvse36aHw6cjXetMuEUhyawirvxd9pjn9m1CaJx"
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
