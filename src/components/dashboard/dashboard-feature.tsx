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
    "4o3FSmqpCNjvGFiGL9DpC3e2B5aUkAkn46iDbPBC7WwARGvTwoNpi9Fu8ApcnNCLgJ5LcQVRMfQWWJTFGLAwUY11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Tn2gyA5rKTfwQw4v64ZdrkVcZo6avFjZS1iP6mF4FspETS5wfhuJZy49h3LrXRMTZJpcwJMYwmJzmEbZwvoGVH",
  "key1": "5LdA5vAdQNyy5mg25TK6DZwSVGMKYVHLe5CCwqFVJQqgmP8YfQWKUJufSrA4k6rpp4abaHc9Hho5xgvsCU1Vo357",
  "key2": "5mJJCrSVzQXQckGRNT4ab1E4nKTUKTfdQKRa1R8non8HewUVpbEEy9eWAYGzbGGRFwC8vSh9zcJjRHbuPpHq1zSJ",
  "key3": "5KNtbMkyEtMgEqrRb664HQZ6hwNhNU9MkdeQy2pvi7N72kGaKcczJdAvbyTdYa75siceADw29T5nBhPhNR3Xq3ZJ",
  "key4": "38LZyJQmmj7SmAz713MgTMhDnnXVtSQ8KySffwuPmCL6BfNwCp1MLr2Jsc1YPczdyPhiejUzt4gFz8qLDENqi2NA",
  "key5": "3yo6pejFHQzjLi1KrkueMc8rN41eLd4YtBk3ivEMgVeoHhZLU7QxmWdwgsWNd93F4yjfwPVoNwR9xacribRngc5o",
  "key6": "58ZCS68XZKMDG7avyLv3FCgfg5L1LgZiH9hte2JcacNJrZcWXNTNWXFaNokRVwQbiKSrZuijW3nRduvRY8fNrCDg",
  "key7": "2w8jZf9QUeqwA3HquFQbjSxkybCJNPVkdQnNzAp2cLgE7V56Aig3DFAtorhbR8Wqpu3EnQgLBGsNUSGZcABkXLsa",
  "key8": "3FZosYWds8o6bWRQWfvprKodTrjeRzw6dXzTSaxhNYwRQUrp4QeQMa9oY5Qgr88s5YcTtDtKpibejqitRcrPNWvh",
  "key9": "2GaxnHwsPcVzQz7xJg1GQzjqtFsRxi6CVjookZngY14AJ5RGo3SWX8cXXJaJHP89ZRRSR8L9bJqFGzgxCJjyRdtJ",
  "key10": "4UFbwkkdFxBjd44e9xK7dhMFiBnCCcakwJCXrnrxrd3pwQQtGg9pQThkaAKfWzPvF4SvdLYDbG78UFhhty37SFBb",
  "key11": "8kfXEuz1QR7Q72eccWYGHQxHRerj1zB6EqXG7DSRouxda15jRS5aAkkifBqQ6EYD9p5jhZBSJwA9GLaSsf1CKmn",
  "key12": "3A36JE4fkjXk8eMxaQMDL8m9sh326uw2tXyRe2j5sUjmVG8CSeBveWRBgjrbPiMhi41387D8Ja7YX9wTTBvmkCZC",
  "key13": "4RLJuAvM8o6UunpXKVUnxx4bVXekcN8mtwwj34BbvTCnmSrAjjUMifMVUgXyzwbXruQjr1XzVHhGCQ1R4KdqrejG",
  "key14": "2nr2kyqDWLaJ9Gj5f8KWgpu5W9yZX5zhvLNricxeH2LsZkwMWdgJ7p4poRRbmYz9R2a6JxVA2yyvTzemxrPayDCk",
  "key15": "2ZYbCNwYSaaTQN3Fhfk9fzFhKfaGsGTJ81FGcQuZbPo9uHpm3W4CLjTpiQMiaFZfTvFV7h9TSSZWDAjsToyQVh5e",
  "key16": "2pQeWXzFWTMN5gSBfeZKTsvTvaq1PzakBHgaAvANxjLKDHWw3XePN2sQo7nrTDUeao4LoG9ayncTRA6fG5NWLTve",
  "key17": "5rPFThikUjoKiKtBrfKBn1hxaXd1aZaPrtwLCwZNbXNPMYEqEVP86zjmZbG6Zm5zvebRMRF79wEeBQ8jKCmQdXGt",
  "key18": "2ceYFZ56n7cgDs7mHS792a5rdb6NwbwT8zsKXEpNd2qxK2yGWfJahfVHQDtT6aHiuhUbPbXoUrHXR6VxtspXgfmN",
  "key19": "5NhdSbMhzX3BeNHrNS2yktwNfuuTGLR34P721EsGpWAyiGfo6ifXTjRn1NkCdi1xQHgF67YwcaK6a4b79AdjwBJV",
  "key20": "2cVpgrTom9SU4N4APX99d5Mu6xqCAw2SAxsKbCK3b7FsCrapvUwVWb1AAvPFCQwVukZmdsKdc29UJduptYFxMRSv",
  "key21": "5FvLNbWWzdM3a39ACqzjKNbShatDKLtwmpuDFLv588cYXubSCpBZv2Q7KkGxzjx2ytJJnmZswna4qdLLYMqzLGh4",
  "key22": "5qoDfaJkXPQn2pKmZbDaHnwCzWv8P1TxMLD8TNFcbdED2RyP4zLBfHH9oJMbDW9EgAQ3ViuY8RHvTXKC97pk9z4v",
  "key23": "3z7NDgocxjsbeCBSJ2xfVZFm6Qe89nshqoVce8JqTWoE7JQWPru37nkhQCUg1QPA5SipyFxWasV4swHxkQGa7NYe",
  "key24": "29Z2ppZFhYa1QhmQjjk2SFLfNShm7C1ZGQAdD93m1UqPSEow9Q7GQ9tPcuyZBfMLyLPneYqgHAnjrA9LabZGCaSw",
  "key25": "3i7wr91TDwoy6yZpxb3VLtJBF9L6cWM7PJDy1JTjrgKQcXobsmLwhxt9BnnJKuBXVZt5r9iofAoUikhAuDKrgdx7"
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
