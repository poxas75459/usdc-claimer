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
    "Vi1kGicGLM8zFbH24kh95WJLuEKKwcPbFc3S7PJCMT2L473c2Dck1451xU45q3cCK4tVusRXy9ThoQNMh6vVxNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1zK2it8Tkiinx4GN9W8hvZYd7mU6rdebvT2tSukkwVmVHdZLLqLC13TTzyMto7JpwgqRrUoLpuboxefr2yDcCn",
  "key1": "5UmryE2UH9Nh5v2hRtppubSVqEjqgsPtz7kwxo9FLeJn1TURvy7aRe42Ai5BSTff5ycTNRBZPLU8EeMirJpUuoLd",
  "key2": "4bPSanopsyqvpfj8kA5L53Zxoa19bBupj8NHs2KHtiECinSsnLAFMgYNUPWvbjKomBLhEwPQSAs1nmvHoT3wp88",
  "key3": "4KpEZnZKbKfXL4H16HTK4mmuR3GVPURY3vU1K8pK36jDuMY3qDzqyX5ejB5Fw9aUFuaUtBQfievtWqCHQGXWW9fR",
  "key4": "5ueHB4Y6dM4TBgVomtQGT4tdyGNJHFgWsMDhLKVtUNxpo1epqLttsfmKVMDAkwzuTGLrGQhMXejpS4vvDBNmSLuk",
  "key5": "G44ff7HTqtKQmzBWVKoukZJ7rQ7K2pjobaAvunSrBMqkdLCTngFMYfa4zAvwRDMo7twcbhrYHoTA12DYFFsPDML",
  "key6": "3oCduN9SDQNuACncuXWecX14PBdLabg2pxGU3f8bZThM8Bd74wW2Dd1P4c6Df96CF5GHtJdqtJvoXpXJJUH5otxG",
  "key7": "5YzGMLAXDYMn4NWLmWTC1kPK2iFSPJkXXisNa6mtK7eV78xFnPYYGoQXak5MND2GZ5Lhn1yAaykMVJ7EAsUR2tTa",
  "key8": "yURuE8Qvj6BWyKUEFkgBXMn6Mw15Vb1amkTYMFjN41cjK2J3bcnFJna6TrgamPG9MhiEFbvWGHwJhWjvXQHvpKr",
  "key9": "2veYdPt2Z56mn7r39svTH6VTYTsHZWL4JSQVgNxQhWwhM9aEu94ywDoGyP8aJRTxJTq3R7T4Yfb9oRt7Qk8xTFh4",
  "key10": "JRW1RfbVX8HJUbAu7C8yErAUU8L39z4Yjv1RXV5VC6G7Dx2K5f5gJpsY4VMJGGAczmMdp5PJE8ae5hcMuzsDmGw",
  "key11": "5BH9yJQTJ9cN2xaA8xV1g4eDqEWVzwsufK4xpeuFG7uWuwnXYmLqtWjYHcCHFBFHid3MuqLaC6R2y2L7igsVE41E",
  "key12": "24iXvQKHMJRSxvgYfpkUnb6uWEpKvnxBuZYaz99Yirt5PJ4GGc3SH8qCDMzZyHNd7Ma2rcDLagzMHcEb6g3tLbUw",
  "key13": "sm1dQoBCyDVK2vR71NZaB2pGyWtxnnhELbkiXrEGeQd8CQnQn2RHkckfYWJFGnKtRCKCjyoEo4RPqNubPtfrgWW",
  "key14": "2wzhPk3TnGbHe8iyTdwswrZ5NNAczSmSPfXA1ZniYkZvtaK9MBhUGntdDGNjQ9bATkP74viXZGVtZ9cE4isnAgJ6",
  "key15": "2ZsS8bftujWFZBcywcFy33JZqPu83Hzn2nr4TwvG6GcBcFgMYX6V1LYvXsidKwPGCWbE5itmRAQHRkzbksBSKcNu",
  "key16": "3TruooaHyeEeuvKu9G4pPV4XTchsizdRoG9N7S5rxBBU1CJsWRdVSKT8SbSJUxj2TPKZwDaFVQXsoNNg5SNEEaiM",
  "key17": "2o3oWFqa7Uv2XUk5HPswbazoJC5r74vGCbQsjTArmL16B3A6cQwVrTpFxkTQ7NDfpqUbgbXJVEPXYu6JgSshXHG",
  "key18": "4R1vvvTFv3HWaNPUBFQnXPH9NThcXC1EQw72QZuqd8JNCqFooNMVBKKs8YEuKjWBb8zAmia5LjLLAeb1nZQHeTou",
  "key19": "63UujbUuf6RjcWbhrSCfUNb3kHMDfkExWVYvmZWj7ESjHdtc4HmLZEFh2rB6TLNX2eyDSCY7ayvq1ZQaqNA9pFpm",
  "key20": "344ojkMctBn7W5fRBgQb4vtsdG7iKt2Dsv3JwRn9aC5v1yEG6JUkmS3d3rxdsNXEVPfzMvLDUx8d8zSUZsxUGQAS",
  "key21": "2DTRuop6teCYokuJ5EK3HE73jC2HTF6pV7cEo69fKBSyu5WCztWbNT9VBSJw8eGdTrxjfGrpX3Pnn9q8aNkRPwcF",
  "key22": "DuRweFnY7rs4hjPNzybsrYZZfhWv6DRPmTp1i8qF5uqVboASm9LaaFtXFVYL2sbSmAsoXpqbRkfAZr7oQ3Z5kqH",
  "key23": "4LLv7UejeecS1KCsyC9cht9ftemY3ca8SUsenYjyLCoBYYZ4LkpQafkqF5LWtEE98aiG8vA8qDrkMuFjX9Jidgp5",
  "key24": "3EBayFyL3yptvRsnqDsGP21bXDrPjAY2M2EqSMDsoKmjtMaddsQdK8gHfntNSE8wAoS87FU4FuVckngegb8va4Pj",
  "key25": "5qg7NcaCn8JHbBQFLWpoBUmrMJJeaU1BmwHK7ykUv5KRhjApECFo3Fj6LRxh7SK3skLo6eoWs16nJaJFfRz3EHME",
  "key26": "5VpMa4B8CttNtwwAUv7XC2gcJxbbsVfrcxjfMhVkB6woNSrN2trLeA15ndW9iWnjuBUyj8UHcdw6GiaJAD8dnxP7",
  "key27": "5kBu8JvogJENmjfeEV2ojWazaWw2oKQfcaWNggWN6ZJrHXjgrpzFJqEFzPa6VXUo7ow9oZa5UzdfRi6nJ6G9sA18",
  "key28": "2aodvcD7B29Q3PaFgC3DLXCz56fVTh6WWdFxERj9zE1AQBHdyFwQ22mkFb32WbTYFp6GAnKKHaStXuZXdfHTr9YY"
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
