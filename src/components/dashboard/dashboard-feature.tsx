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
    "494S7mqsEirfujBKGSkjnJLhCSMHsKQEP31BPu3sQScdV1WWbVVgcFUcmZrmBqeY9t2YM9T3u5tKRXqGRyxbegNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43msF96EWhoZzSKmryXgyiRq3k9fZt24Q1JaHCdRhzxXJDQUDS16VZ19u6BagGpA5xiYL9Q4YQo2zumWE6wLc94g",
  "key1": "54KTwRav4EH5nNQh6aSnt3fQDTJoRfo9viNQ374vAnq5Qxvv389JoQSyVnAhK4Dhs4kbXfrfdMs6EJ3PfQhwTEyi",
  "key2": "4RmasmnarwfBM5B6EFBYBjPS8pFLwqpef2WRMWUybjNKkgUWxsjghFYhvSwBZLHdQ7fnpWYyYUCXV8VZjica2in2",
  "key3": "HXTS1yqPhe8hbodkpPgxzosfdfUbUFsPsJRhdk4kAQppwKc4mcbvTFddqWBw7eJRV3DZKPXXfNyw5VLJH56Ah9M",
  "key4": "3q4u3v3C6g3XJ2P9bvJNjjsLj1bDbPW3vv5Fx2GXsng3quZ8nfsDtVXdd7h8t5UFKHFfhsxf3jUReVNRDqxDomDw",
  "key5": "5N8Wt7rPb3wjWMMdubx75ksXgwect3ZqmbnutBjRdNU1XD1MARuWt7ZgeerXdWYcC3EzJFgfyWiYm6D82TsrnjcM",
  "key6": "36iQKqLq2t7j37w386JEjKeHZTiFDze8WyHb48ZzDVHsEBrdfaPkS5suLrm54DEZKhwHqH61EXoJFVir1bUBwgEM",
  "key7": "3RZocphtWeWktUnCeeCn8RL75fSuKQjayZyufkHbj1hJjTuKGBVq3FdiyjCTHAZgyRRdQafFepA7rGe73FjvUNPh",
  "key8": "2YmavLcLtFiR7XgQLj4u5TjQ4Rw3Y8TwCHmE2KGKRq6NyQb9M7yLX8emsQ7fwbQSXB8YWnBVW7TqEA5uuUYWrL3b",
  "key9": "5M2GCxCfwRCAZswawMVoB8x4d7EFoQoPNudryaD1yjMxe7o18dSt6Dyg24HEuAMfahGXtqoKiVhxbdWkLWokY1ae",
  "key10": "3PQjpZE1Bjg4mnFbkkhpiUpmPAE28TtFEDD8JnUpVeC5m4cQ4ooTwnUz9Qd478SJCCHfd2JcnFzWZLUw2QJf8KoQ",
  "key11": "5JiNGd8Wa1rdZWX1q6M6zK7k4QrBZySpzFB8dMxX95G6WAmZCaBpyUJRhZ3uBsWo3puavJtmpLB3auWsn2GEDymo",
  "key12": "3PKgkKgMFkSJTDWBcnwKcaQiTreYhLWpzKmXNcfSa3BJtoE1SmbYEM5bQAPbJuDPbaDkA3irptEvKD2qtdh38YH7",
  "key13": "3hqssZfCV6AshEJBFoDZC5sUDp3TyT9VF1EZE8QqWZBRgUwVsnFNzvbGbH5YVR3WytoBJDF5YmmP8B18aex7Xs24",
  "key14": "4Qf3hD9vX8k2uXFAQNrYBMKUSwPn3gMp6rXyHrXeA4MW1UwiVqYjrk2cd9W1htqf2tHcQ2BoJMkWoPxqwkc554ot",
  "key15": "UPYLh4hyw4fhggmpZpcpCRmCXJ5cehhZbHTQ1SUsQeV22o6RErwPWbuGUFPjPQtqrN4cKSxWRBMHj7M92aLPGfB",
  "key16": "2iSuwLs5w4ENfpfRdDDVdahKE2dGWQZJDydHV11duNVg1Gwzqja26uUYn89iAjwGMpJ5vFd9MW4XkUCDc7UdjgXx",
  "key17": "5YecGrtpp6AqHwF8fwuhZYE75SDnd7tncA1eHgAd2eNYuxADMDzLdhAiV3pndYmNnEJZb72MeE6mRZ45831KRBWJ",
  "key18": "67ejiVoiY4tw4dCePYJKnSbGUKcew1zmmUF5onbmDStNNbtvL2bGgBuApXzxzsKuQzd1Jhj3bkYSFmSLabLQoytn",
  "key19": "SKLdPx6JmturZxND5U5vxejtU1wvSByWohfC4sL8cLtxWJXs7G3seCMEHxKU8iC5tNEwo1BmbqrYZmmTFDJPr7t",
  "key20": "3J8vSNMa6ft96u9Myiu77bLsawaRKXCf5baCBTN8sZ82yF3NGzpMjJbze482Si2DqaCuVFpB5emNfuNshapwRBJW",
  "key21": "3vz8J4yKBgtgwZDkr4BCXViKpD8SuAiogLXoY5moMfkfk92AceCW3ovQMMJyUenueiWtgTzKPM5fbCgqDR8RZ2eT",
  "key22": "5TAA4zUQbzX35BPFuQdp9iTNLVZXhYJxaiz2kEk6F5mwkC3k1Mro5jKD8VJAtPzk2xbU38J5ywtohcL69gCTR4GG",
  "key23": "47hz75ffcgSupRy3dY8ayGdjEPzhmQ6oHPbKekVyWBQxWovVzbaDUgJk89GMQXM7Mq9cKvWeP8dTRtFwHbHDKGFs",
  "key24": "66BDU53ktfpfboqzpFZS5BdX7j9GGFPGVzSJKJBf3pZiinhEZP1nkJR63kvwJkKxZpjwo5vPd9pDqDHxqPYp6qiT"
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
