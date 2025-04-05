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
    "4YvQrqW843oyC1HLFCPhmb28y71b2xpbUNF3cynQpZ9shyRyc4K6YiX59Vvz88sXD3LpcotdDhx5MmF3zyb7L5NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s894Lw3gGfcjaTU3RnwJykX2rT2kHdj4ux2JKBEvMwqMfzGUgQ9SfP5Ev2A1xKqG8Fz1JyQ5dfwczdSy4J3EVtr",
  "key1": "3NLQWZpXn5SSMpqLwfoC79nkdcDfdR2nj1gDt2VbfDrrY7nGWQPHh1fEDMfvvpQtZRhFmG43nwGuUSuY5RNLhfQv",
  "key2": "4qHkfi34FvhgZgtkKYcSkbeDtpxc2moLmwb5ZR9rBtYSsQMJT2kE6XL9VuXA8hdJcLB4vPEKeNGsd1BrHiSe82kZ",
  "key3": "4axs9uv2FYz5fFoN8StzCs4iBuruur5aFj5WrHaL5wMg88Z9tTssw74gegZMnSiHpP6VysDe9LquPu9cYa4tti3R",
  "key4": "5uVGfX86BXZNpuxzmUbAa6iNPq3dzv2Xzmr9C91xN4y4vPUvkRV5BfdjeBUr41RxnmJDHMqAWK4nsVZcCoJNxLF8",
  "key5": "d3uF7cFpTcbC7AJ9yKjRER378mVZW2JyahfPTYWhaEHz2bvrEYsBoCfuapziBDzo2QA4wLDP91fjMwXDBgJcfHu",
  "key6": "4QMDVM14V7XRQimrDbKVJu12PAdf6AmDNFb6jaXC1yqvNB4aHHUReWnHaCFM6GCDe7nVxEeB8PzSyPEqbZwNqaCf",
  "key7": "4BtLHqm8mnxDWxWnF4TBLGzbWwNmDMAb3Up1CmXjZKiiKJmUMWEw8ZPQrcz3BCw8dbbtfdZUmkapy3Xmp2S9P6Yt",
  "key8": "4XSENSqXbdjschJBwhYneFNrTJ49TFuwgPZFyDAtHRngTXVoUTxpVfjkjKTQa6aKyxVwzzXugEpSGCmjrzwuF8oa",
  "key9": "3ERA2m1yLMhBixKNkjVDh8REypQ1dQ9mPRn2Vk2Udn4znomBkEgrPoBgx2cZxE6DqJ4zoBY8PRaJYsrR3E15yoJj",
  "key10": "2k9Jbjkxr2U4upk5whULq1cmvEtnqX2woitXxrtzLabR5TuyovGPQ2EmSUT4etC85WHijF6nWrZcgQEkQ5ihEUR3",
  "key11": "4CmcekUKkHM8Hpp7J1uMok13tjVYeuSfokTJJWJu7jhxhmEJktJyuqe4oVZe41yEPmgBLe3iK9x8BjS8bAedRUST",
  "key12": "2KFuxfwfgzFQXZNvJzH68ZEKCc4cfxgt6W1WPBoLshnxKm3vA6gjXe8KKRhDbsnu9fr6tEkh3YoMdw8M9L6jSFqR",
  "key13": "c5qn6ocSNLP8RGi8HH8nbRTsmU4SgS7CS1z176wii3bqzEb51RpeMnpTktvuemEu9HDcUcMQExPqHQjeWN6N8aq",
  "key14": "5Pw9kbUYd6eEYqKYnf7dfdg7Mx8eVCitfn8f9WPcmpdRSNNfgS8otiFfwLNoTGkNdxspxGoGxxcE1cptJosEFZp9",
  "key15": "4EFjCMrhHUY49egqCW9ymMUegSdbVn4STSyyB2ErvCrcWdy7EYxXsp7twAWnD6tgX7gA1nHZDVD2RF1cXQ9TYmBB",
  "key16": "2dFj4NUZbvB3imqU7sWMu79fFa2msLmrnerv7jVe9iTMGQzdXCaX3X2wHsX3KVttbw4mn1izCxjpDC5tsUq4Vm6v",
  "key17": "4xbeCLLTS4ajEPYA1LCFGJbD2wDVYuX7caRTLcTDx185i6EBjjv25rza5mZm5sjPiiXsrVkh99cLnUaZUKFE2h22",
  "key18": "2JtUB57EmNxzxShKx2N4WH2oJz94Xo7g4TUevi2sgDgbZKB8BkgTzwEyDtXstVzzeosRYrVTLadDgCFWmamqWnWY",
  "key19": "4QTctqpSaxSsJECY8ZDP11sevMGXucq13gzDAZv1eMK54xKePDAkD8utdGK74PJrHEf2D3NXYXyXgP1VZ7YBZHPW",
  "key20": "3h7k1qqfwfp2pQYCU57CfGMj6fsQyBZGPwpxokUn1MTLMWaoGeoyXJoji49xTBiZeKZwtuNs2dVaeYofVYsmwAe4",
  "key21": "3uPp5UAAPSMP3uNhvEyJP4JbhQiqcknsYHXe3X7jGdfYVmuFaGVLToHy4bwAPv41FKGRwEQY3EctFd2vSHekBQtA",
  "key22": "4ynSdPAybzsgzwyM4s4hrtsvPF6Jh4KTBQddN5jdCMit7Cr4DvfuK48frCTXvPWitgrZy7RvctKVfhTmd4JoCmff",
  "key23": "3Rsx7nPAkBzdnDxHS6z5fndwwBJiuQyJTYHYdVyooCtWZZ4Bu4UW7eQqjUE5ipkTE2XUcAWiYaJqFPqet1fUUUJq",
  "key24": "5VU8djq6TjeGGyBqWvQcMNskmY9XUcp7rF6hESDv3t5LcLURajdrbhxAKjN1i9smU8sZfd5eX93anm9MJNwi2yVg",
  "key25": "3CmSfamDDfGwy5dqmHoUc1Cy6kos9o6uwZZz5C4ZYeNhxFyPSUmz5fVyDT2E1qQo53CQHoSw3kN8aFuihYtYDEFQ",
  "key26": "Uu1dwZENXcVvbAivf9MfEQPiJUDtUDbkDQ3fyi6QsbqhqkE5fh1BxTkvAxVRz8sC5ZuE3R8XYsdnsKvCeC6SdUg",
  "key27": "4Kx1jq2csFyaw75Y46VSBtYVvxVRNyWhynwQspSssNJM4Fny1PdUd1P6g4tJVfA24MVGW5CTFZbsJUvQQwDt9a7g",
  "key28": "2by9NSTCS2ASF1T2tmhMpiVVBqh4eqAK76WFBge8GvjPmWHRiZnhSvoLHuqxvbyunTKRsLd4idqkJLwdLx3u72e6",
  "key29": "5R7C3BzSbqCYH21drJ7TFAwAbDVgv9gGWRYQ94VqTVmtZmD3w4jwyo3uhp9VT2euSpQWYDjCiejp7xVR98cQFA15",
  "key30": "3uRi6nMGL3LcoDNaPakvZqTWCrYKakh6bAdGAGhrFXEvuAAUnVvY4doRnsswGEP5Q6MFSNSCuYC3LR55c8vrgBXn",
  "key31": "3mP14JjWjqDAGq3krEzWgWxRCiYc9rHT2FjH51QLaeqZ1xLdDiPXRMBYLSSnuNmaxENGd1ZdzobnCx7JwRywEZg9"
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
