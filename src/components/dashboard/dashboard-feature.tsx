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
    "2Ye1FEKtkYz6YziksCBDkPZMTtF4PXuAkHgwms8HLbZcVbiScknEBtxzkMHnyuTiRHuXB7g6rRTtAFQdchnqFU1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMyPRt4NM2TFR7Nj6278u3GMQbqoQ3fZ4StCgHKQ3VRU5JD4iPexDCxmRaem57XNE6NFYpc5QjGhai7zi3586wr",
  "key1": "4moncu3JdFFkAatUbwmTtLago35f9dSqWpAaYFpLo6RJwkX8NjrgQNtrQNhPh7Du4UaK78b7MyPpZzamxrZAFfzc",
  "key2": "5TuGjxDSYbDPGVoazQfUtKrbLpjyK9dyg5tiqDpLXUZKd5Ar7y5SDcT5MEQ3aaUQoHBx45yiMH15HWQ9yVbxTMzb",
  "key3": "57xU395tVC5uG1urVocV7FtizBQhanUGTyRkqrwvXENhzdVorH9jpfQscmejM6SkfwktSuPwWiLG9QH7bvUYivr9",
  "key4": "4EJszQARj817BkEL1RfR195G6RdGVjR13Yy5k4xv6DuhfhRCG9SNgiEpasV4pdXpqFU3FpGnS8czYZKPZJyyFaAs",
  "key5": "5pBDdEZfgQKhbniyVP4qkjUEm78ZStc7s1JymEdxSnKyXskfj4rb7mUuRFgbcwdnUq58RJc5G9Gj3zqcxXiaXHns",
  "key6": "38hEwcpK1zy2BHwFiQVWs59QyMZPfb99N92LkcQrZtvHDeKmRAVJPSiG5x5Uy2bLXBbQy14d2aX77vWSRVRWj5S7",
  "key7": "2Nm4ejmL2BF5xcBmhgPyc96Fb5coVFm55cKavJgkhv57sDY2bsW1ezxPhnZc1wJi6WR6RBjN97knQZmXKhYMzd7Q",
  "key8": "485TMLSufRRqkrrejZmxjd1fRjg9uDzSYWuZProZndeqxxaVZY5oXQkw4j7gMx5cAL1NTnFupB7XKmQkwk6BZkfE",
  "key9": "2DuhtocuL4f7xdpAkNzpezbWu8hrzvbWn5QkSnqehGDhJa4k7Asic8fHc3S8opjnKDcbXwqZqF94EYuMaMArXfNA",
  "key10": "2Tzq4bxzxE4ZA1JZqJ1mYDx981MYFXNftRnT6uNtETtmWz5fGee1LGpLFH9UVDrvvB3ZN3fhsxRS9E6v6VyMDbFb",
  "key11": "5ALHqjKtG1yi6SV5BW2P5fRB6Vhotz4F3tnpQWGbLQRaCccwtJcCmiJT4vk6cGh41Mq7h2AVz4EdmmfzWboR3xuY",
  "key12": "4vAJmTjtHTpvkthKJkZdM3cJHqURgLLP7DYDqbimCJuptbgYcnEfv8HpDzSxzA6sYD1G456Ho4BTDWtPzCGR7KxZ",
  "key13": "Tm3zMaxB3FJoUpe5PpyLWNpSqbb1P5TgXD4eZgJAGrxRKJaJq7VtbQqUYktHyFFYCbh3okQiQYSK2sueJUza8TV",
  "key14": "49pRpb3jXNN411uXgw2tGZ1GDBaLCediKL91EyfYqRKPaoeJ543ZPXJ3X5usogyiyhsE4rgd9Q7wSGKhz7Y1hkhB",
  "key15": "3iDtnkM3SYJMGj33UJnSCCZJEDGqQPNXof2UGGDFyDNJXzNp88poMKC93FYkrwtEemSK2HNVdyFjpUgMgWrHpoXT",
  "key16": "47GWJRYWv5mPx9rSqA2WS5tL4bqAgGtNdoffXj9aQmfUtFyzdTiv8xXrERtrueoYCHFxQf675ipeoso5JgKXgVhf",
  "key17": "3BWLHAERLHcBLo7jLJgYLx2czfwbczoDEztaxTvd48Sbexf5yBekwGw32vWspwbmDEpMTjXLrD31moP8rCewfU4v",
  "key18": "4QrVAV2tWAH9X9kijLcHoSPayGT4Y8gvZ6Mc7vhYEV5BXAKNZr9RMAniutUWBJwAoavLtjRf1g6J98GRBA7ZSPHM",
  "key19": "4sReB4UhAdHj4M2z1tQTef9Z72jnGcdr2VvoRrX9nbzhK74mhqBiBdsKLmkUY2n6497QtfgidMnV4Z8uTj1An67v",
  "key20": "cby1g4aoSTsUzh8b3DRiFhrAnwoobvDZmoJ5PajzLv3Nm1P2fQiPTdEJTZVFq656VGVbZDyrJ6upE2yhpgtjVSq",
  "key21": "wwfCNmUKBv3ftCepPrU9DUU6ALPkFxXZLeeNM1UxuNAAsfqYPxfbpw5LrAXmnPsf45MqBmfxvm3SqSigeJyDCDb",
  "key22": "K5e2sDU21ZGmU7LaGXWzMFxHR6L7CoihEtPZjUsmMzj3ScvWGkQeabNu7ehSUzvXPzk6Cs8cvCH1LfsXa6beaQo",
  "key23": "5h9kDM6vHyn5NFFrEK84pdF66sBdZ5JW9KETsWDaY9Q9xB8xvU3cinGgLWzHvEViXARNN6aTxjvJhVy12uxmGSTS",
  "key24": "4kzsvxBu4uEPBH2UwU2bG8UowQqfNuwjtAbjwvciUBPJaUwftqZnsMtd1cwptwHM4fpmtoh9jbxeEvi2KbD22kr",
  "key25": "6Z6pAbiTj3KyS6ChbZuKEjzRULoEybxvNchyoyiG72DDpKhEXCT4718HotPSjyYaxQjtjcYvXE6XPfdkUbY2Qq1"
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
