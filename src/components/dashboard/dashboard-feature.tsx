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
    "3iEz5WY4pPWUtXjqrn8Zn8PWvKbbPd1ri6JjKQSYEMQJtXjQKWcqp4jvro5ibfZWFroGLbugDwrQ3x7S62HkwWfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQutwcLM56x7kWqwR6YhiWAxGfFFZ3McMXdmLyBbPA3RQRo6VmMvbFFj2kb8mQERw2ByPbkdBpWTP6rg5pmA3zL",
  "key1": "3AVFsgJm8WfXos637Tn6n1sAEHhfJe9XCagqVKuHDzjk21sUXoUuwyGhJc3StsGVd2xeMGC3jMXUxUu4h4eKFLf2",
  "key2": "2KD5ycxB35VuJ7mjq7QpL1WXG2bocwXfW4aBja3rJd6fcMh8WGPvP5VtV1F7Thr6HY7687dWRg32wBrFdwDwGaRv",
  "key3": "4GcTQ6dW8hQeRC9AxXRjadpuSAeN2vcrTc8Eo2X2sPSrCea9EsjRiGWbqMYCENc9oLc9SrrXURR7onvNGcjpEurT",
  "key4": "43QcVAvKjNhMzDhiRvpaV9RwrJ2acCUxbBCPTGyAiJzULJRF8S3JH67Pmy543WrXg5Fv3PVvCj5ieMXAJyKHWDSe",
  "key5": "5yukbCsRSxwSQzTzi8xMwCwTgDm5nDgJWeXqHcmK9eb5RQV8EYgfkBrryBTKgusJihEiH4f4SBZkVwZSXBVS1HMh",
  "key6": "3nH2uAurgShZGNQwY9mvwBw8reEg5ecHa9PMcPWV49xArkag1ZUSdE3P6Rh1gHQo8UBFzjQ4VuwWvkVHwYXKQw78",
  "key7": "4CML5gGAJf5wnYXjHjf2mvd6qaUktxtxcta5bQQrDsEofkfCb8AXEG3cgcCHXNuGUP1hBQ9Gbk6Z4qMYfmo5bDdz",
  "key8": "4cpnxjDw644uuHUjYGbqQe8D9HDECG1W7B4gwuh4fzs3pfQnzVfdrygsxh73wWwHPVQCAyLx4Koy241GMvFUwSCf",
  "key9": "5abCbxzj3tS2BiTJTdBc97njV9QDtBibNkdB7qjdy56rTcMVGxK53nAQrHDaK3yJg8rUKccyQ4bd1XGJhePz28SJ",
  "key10": "MhMTnpLGUy2hgrkkiYAAenEUxZu6JcxdGrrEYPivhGumYiGyKrAh58T59gYC94LQ98tfw4d77XQsWURpbdwxDhG",
  "key11": "5XfRdstDhpgrvuJWenvimpQybtAMJZVFCzFuB42jMLTCctXgb6kRGMCagXwNBbn6LBX49HZ9RsnZ5pD93ybDHjB3",
  "key12": "4onN4QFKWJUSZMasTUMfJnFt2PNszSUYAkscqjnyNGVQXhFWG2gv2GaCZV8Tfhm7N3jjmjJ2iyjgSHPi4a1x4DCA",
  "key13": "JVRLhK8P6r4PQLn9QP5Pwf4apr6BhKjrnPT8ey3YdGKpTUf1GiH1miJ3mQbQhqUwf9QMWJYRHgjjWGx1HrMih2Z",
  "key14": "4akUJtcPLTtPjKUThMG2hzpAXFGod59nbERkb9SnrhVMjzEqNuVb8DDVVTKMc9gAMxArCB43MUjjjTNrBWeb3cfB",
  "key15": "2CraizKPC5KSSXdG6dAd6uZQ9sGZX3JhaULNZkiASkEX2dZjTsjaL4s9dK3iogpNtRnUZtDEfEDXo7PspVkkjmHu",
  "key16": "2cBBSBdPjRgCPB8okFi8aq323BUdEVaY2bcC1xrWQKydu7ta5AHhQx7aeXqVhwKvaLFozdiKT8ifrJsKDnTAPS31",
  "key17": "4mMvkJHQCpDKLr99S4CHNfzL6ofDSdQUqiHpP2796whmSYNNfabVsdL8Rwkz7fxtVdu7zANyFiANUxMm2xQUeHQ3",
  "key18": "5USafnwcSZc56nciHzJaSMcHgDziNWhXi3tUgJQru7VRgB9KQaiYxZSGmFcWWgjbdVpbD8T1wMMwyN4Yn2NNNMST",
  "key19": "3R8LeXmiWsoQVC6VVEuLfDhbB8yuUxzuQfQtDLFFnD2TzkSMfv7R92VApPkeY9NQnCL9YeRnyzXxz9FYYNU1ZSTF",
  "key20": "5hQ66bk8dokzzkm2tF67qWANr8GghiBts6qECmojF6vGkxorNeT4tE6DNKzpxz3UiFHtucxHVFUfFgjeiSkdXmPc",
  "key21": "212FifxjrarniEK1kjEN8LbwNgw2CWWUS1Gsn8RByi7sf9T22bx7LQ5mbJSt3PMH3AKdwfvhSLEJe9rqg8uANWJz",
  "key22": "4jeSQVZLoXCjvQvAaFgX886jZ4MdpgHqokqVC6YSmujWAVx1JJWNcD3g8xtGcbGECGRoCSxVoZuf1Mrb87u2naFq",
  "key23": "1TXtYH3WfeX2wWPkPvkGtXYULQLQACYhXdRL2zETpBG1EL45cCJrRYNLJSFNu32XZzbp26EXirPx1aVJZC5HKvz",
  "key24": "4qLNgcpJCE6JLwtQED1ixy1sVWykRqoAkiuEjjCS9NeARKFn2wxSiTKGjhpDwv9jP7A13Lk3JVWubJtMh5ZNSdR5",
  "key25": "aktkGMuBRjF9LijF9w68xq5Yc22FtHtDQxp5HfyUiWUPwQxWZc5eK8K9iaksFV4bAMvtJ6jcgM3FUdUtEoNq46Q",
  "key26": "5QzaVVNEEwqZwaQeonS14VH1ycQWMhxofCM7YfFoUJyABJ6GyuuNPQP1yALxn9WzTMJqwGfahLgxUq1JXdfgVq18",
  "key27": "2uTtScXC26EDAr2kdgF2a7mWs98LgzUXgfJ3gGQzhHsKGyuyvRLSpR7yYXozWke6WF6frkTEnXbZ2MwoR2QMnRhZ",
  "key28": "4AwUTuh4gjyXYUpMoPQpE7GzVwKJ2aUZzdCLwdLg4QLJgHMJfRc1p2rZNQc7yxrknoimL6xFtSp8Rod3FJau2tWs",
  "key29": "4zMAeDEMsw4jWVkwqMvGLzURQzZXJprTiqSXcU7NSFz7XZ6kRwTgRCMRn6yWd221NmUB7YuCjxwcHRjCtHSbVC3R",
  "key30": "63eEPE1YywQxQE3aJK72KJwm7soSSvYMHWfc6aP9BTNeJASriJFLKCKcRNBPsvVT1W5cPc79AZRaSSmbXKRJoaBQ",
  "key31": "ZKU7F78XXw5zd68aHe9sGNrD2dWqgbDLhdK9PMyjwGFpmK7QVmViiW2pHePrwuWW7YABSzq6GkCpNSP1hzKmJw8",
  "key32": "4XKqkcX4PH3eSzqtkyWiA4iNjWhqq3kKePkTJnQkAn9okZHG2ArCcC9h8U7mYk3z71SJXyv524QTwZds6uqWwKh9"
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
