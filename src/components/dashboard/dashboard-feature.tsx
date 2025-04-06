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
    "3mmPtLhmgMFUyHDQsn79aGiQfZBUDawJQvHCApNaoirfJVWudzcwmU6TN8hEs9Cot1Xv73W1ffrurZS42rriR6Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wpcPZ3c9khzzZ6cGGCDhBVnvBEUc4kvDZ3bH7fkYoYY1Vjo64yjvd2mih9gkGyVkwepXqntaqdn3eDHXKfd8uVU",
  "key1": "42vcnVRMEQxdeqxgBj1ihXnbKTS5RXybyjGzpRahFtn3VL3cbshAyHGLriMPupgJeHkviJf7fWgUbEaFAVKMd1ce",
  "key2": "25TbtChnCWonRTiYHofJrjALMEgBJe6UAFRPQhPiCkaGkwaeWKCbDDZ2rFN19grKHaTmibScS8PvBQLExEeRKknc",
  "key3": "21FiUYS4N927WbKX3Xfq1xRqvCTppimCHQAYXjdyoyJ5SKB8YNDXTD6eYQimo6d2UEpuTxuqR1uKaubsK7hnDmNQ",
  "key4": "5evNPnn3JijYCs96fk8az5dUmPGqet6NEe9qvXM2ADGQo9MTTWJhWgpvYz4EcNFncKpw9N8qVXpstz763wLg3T48",
  "key5": "iaovse3SLKuYn24CsGNQ3BmD9mSLq7sCNQm7f3Jy7wCuuLoPzyxpTYb7ja8dUcwMH7PFXJjek9WYkuQaftqqJBb",
  "key6": "kaqqoTLU5p3QtPczSznzgtjzqmLAFPQ1FvYRhdYZAxQEmTcVxvDEwnFEZ6C5mYJiRHDiz8RQugdURZX2iLRjPwN",
  "key7": "5bR6aRL43RKzMBLYqRrAZ15eMKPhK971ajLRTnu382b9s52RChsQnR527Kir2Dy6Na93v6K2ZeidZEJQdA1FoaTY",
  "key8": "3RMxmho7z7Yh9VMWDPVtJ7rsTYw5MQDREJZAHMK5rKbvEcNgjpi72U8UersdvPxghdufucen1zLQWotSaLx1Gh36",
  "key9": "5o3JeiVqUkzqo3ExUfn9jJUUgTA45gWBMQyxqtmjqWeM5X3bCNX4xdi6VbaxojRn5yDa51VWE7gvWxdKWMFzmZQD",
  "key10": "4muHf5hWYYtrBcVKyACPHNgAAzWDcEyNigZuPaF31Z35tqnWqH8BUZnXB3ZFnzL6kV1f5cfKadWJ5heEur7CYfta",
  "key11": "B7gADxFXXH45NZ2NuZCddm5ekw27Zsjm3YMnQbsddB5qHRvC93ev134qd8Uo8ctpAMNMMM5MBraAdFkFne4d5jq",
  "key12": "3SL6NQvdTayKf6DQbgwf4rm4mr5pmotnbw8f6RCfXFgbk6VN57HLbLobhX31UkJFosMufazM5kcZTtsLFS4YnjBH",
  "key13": "3MdLrNJaw3robSYxhg8oXFeHZbyUm379iuUW14h35P6abVfMS3CExAz6yJRw85r9aBGm6uxLjW7DBD5vrRfZvbXa",
  "key14": "4dZtvKjT6htHS2pxzv93kQ33So4De6hWKrJV17eSUzFyqiqW634j55qX3TZC8KKdorCoZzg4ohcepaacGjKYTKGS",
  "key15": "3eS659YMZ8e6gm1DiMSgqY9YLHyFGUVbYs78YQr7Fm8MjvQQm2bfCqd37NytchTwBXZK1m8Hf7z9sbifb1WW652v",
  "key16": "52CTZ7MnjRmUZDKd9HN7JTMs5qab5LPTgfF6vak1Jp2rkH4JoQLmQZRWt38dCFVU4EpfA9a62YDnJWeYzhFiBgEd",
  "key17": "2XrLuu7MDn6n3Z8zceZkP6dNzaMkEUSKUcXGfGkfMxWHiyXWoqzpsuhPNtCyiMQwaFAe9poQLs99Ey9bjZJVf6ww",
  "key18": "3aLis2Zuei695wWWNsuRxDsgnbqethhbPyg5He4d1EoffvJ3cbbwwsoWNMyHH8pun5HQTgXMT6w3VbuH3RWBZKKy",
  "key19": "4aw8vBUqP3NXDhADPxBVbJv3Ce7C7n8iSLLp8Ymub9uos5bdWTUsoC5L2FTLBGZ8vjAkNbiwRqDDAMbtUKWnTWsG",
  "key20": "2TxmLkrbW1yBGMJuBdATYGf4QXUeEw7HE4b15QNLR2uxgHRBZkNLX7YD6dRkHmyF8Sb7Bvk2QLsR68CajNHhar1a",
  "key21": "5ZSBJDcvHByoEJ3iqHbeNPb79cWfrQytx7m1vYo4YiUxeUVyQ51p5EcFZfCPKAG1mxTnhKqSkruvgd2bg9H8CHBf",
  "key22": "5yJHbNs9aK3W1KuneU9fmBZkgZry1VuGV9z7YwqtDCLzMzdRHNiH9LLX5iSdRM1sTyiCwxZQLzkd7AgCSCGmyrAb",
  "key23": "ejCEgx7HYrEC44RsYP2Sj2vKqkpZXy7wjHghERggbo8fSSrkUEgV2cKWQNYuckCkHgxpfBkMg5oD3R9CmPC7aGq",
  "key24": "2u5vaWw4ZPJmKUVjb8RBEdtMMfS1qbshVUmjkmg4mYxL7f3y799qEwpeuzcqtmaJsiyNqYVVpAFQUD59WRiqhKXg",
  "key25": "3sjXoV3X8KhgYzP92T8ng2s6qiisGe4pnGi3Uosjgn72GB5qUHWEr6adNgyfzAVnCPqr5xiei3759MWvTrNvM2CN",
  "key26": "PaE3TgV9BXUVMsGegrRouBzbEhnnXJNsVMh8BajjeQQRQ1878RYS3sK7bxMDJP9goAdHyJUeDByKJeQNHqmigBB"
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
