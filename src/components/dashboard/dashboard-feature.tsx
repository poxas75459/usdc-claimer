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
    "4rsMZ5VU7oFPN4ZuA6gBrnKtQYncX1gU8WnW8hNeqzrPR6cCCSFvWukpriDeMmtkDHfie2ZTqEh2vhfubtYg1LmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gSBsAmyBSQHJEkdA47gvrJ4Pq9HSUw3YC1zSDr4cXf6bWBg3SfoJLYxR14W3i8A4y6yqS7R6zjW7TnX5sbmU9iW",
  "key1": "5humjVN8X9hR68hazpn2Qo9mB7YLK5BBPC4JXUDmSNWEmgtmpt4JrPvFjExBpzAWwF3Di2rSy3U7ZEuNaZXQhYEB",
  "key2": "4DbFZSwNH5d3AWE641Tf7CKnGcB42uZ9St1Y8x955mp6jbMemC8ZyK8fpcEZHVFoaD1AyCpnZApjEJpoadNdfsPd",
  "key3": "3rtVxPnEGs1oFa17mJySgTi9Bmwm2cAcYqyETbqNRR4aVNKiDb5WG4jMFYwYaamtE6PKVRhqgsv9wrNyYn5VRSkF",
  "key4": "5FaUTNC7RM8s9U9XerCaVEahWBXrZmug5DhDv836pymvNMMfSep9bxaCth9dzsB59n5LDyVpuTci6ny2MnCDw2Gm",
  "key5": "4ndkDWuKWBnQzu5cCMR2LRew15cd3q8JCezJKAivXdLRmCBaixT26QHF9bBYABTLQhoGNuShbMUAnugzeWVWNahf",
  "key6": "64ew5rmHUSNLszLsXrYiePKKUgvTkEnSzZ8CYLSgyodthpvd3zgZZRL6PiiVZ2nU44ZoCWSpWzrV7eTufK8ktn7w",
  "key7": "5vo6PGWBLGZ9UtgkWBWS9Bhg7pLeFHcapodUxRaV6fp7xCKpBTanv16bzFMDmGRMATa4pCTRFwQz6nxmpqu1jYjM",
  "key8": "5erATZqHXpiAgF9emGsbM455An9ypo7gpy4vs2nwoaRqkjmN27ufibNp7sYvmzyE7pu2BVFwfKRxZenveRiQ4n6q",
  "key9": "5h7W7RuuLddUgrPR5s2Wr4m57PT7FnQawFb6U2ttzLQ2WSmGB69etVU5LCBbSXe8aVxY8f9PiCsjdaXuvcxMP56i",
  "key10": "5mz8EnSyQ9n3uuh8hmrQU6j1ETs2jTToEr41bjVqHjYBh8XdCpoCrKBRhbYbpYv8e6TonY3RasH5cRA1TzQWLwRP",
  "key11": "zKMVnXLk3g4i7QteTieHSCNktPTHjUqTn4R5itJAHhaWEmZL3oD8wWFqVx8cCexQ1rJbnTh1FNuXrHhsK4vadJM",
  "key12": "3DZ9rjbniKMmZzeeawWBRFtXkQjiK73VDiPXdYFV1bemcw4wZntzrzfYcwqENqLWXoj5mvP37StnpUC8WfLPPo4h",
  "key13": "4PHkfjEvVzPNTQewvhdEhHGWsmmyGNqPjGmFecqFctuBAGJ91oBpThtYBGNGuGDwFjKDotJK6yZMJD74P6XEmgxk",
  "key14": "iFGA2euKnTqQdEC5xytedU3NsCCKyaiT6xvyvjJ7oUhNShuPJdLBzexZN2Uc4VRQkgudhyhpHiotsBmcWdQfCpG",
  "key15": "3TZLA7Ut7PUYBdVovNWjLT5TMhouAvUfZgkzns6aqWKVmc4hBLQYPQVuqCHWrLUr3P8n5zr8AFojrubw3PevtBCE",
  "key16": "5hnXmU1pbVvuXEC4ZwF46BaiT4iy86Zj4XqRKrUmUxrcBckm6be9QfXqhdqhJT8USt3yWcBNksRrMXpRokHFkqfL",
  "key17": "2fXTmcXQs3pZMUSp8LTAKqqXgxLTaV4WYnB71aDVuqQL86ac1qtMd87m8gt81Z9GP4vM8ohGDR19Z3h8pWnHdtbL",
  "key18": "5AXuYvBZ72wzdyRJPn2U5r9YAnKfNe8wRM8K3iDtbsLAbqZcFG95Aa8UEqcwgt9Fjo27ag7x8ndZ5cN3W8rYSMAQ",
  "key19": "3B4ZcHa8MLXa7KN1uWt3naxh4GryjMxPPG1QHCAPMrZi8UTvSJAzJA1dUQW2dNF7Hp1Wcjqb2Me8N8c7rwSr2RSr",
  "key20": "EtyhauPSv8V5S73o2c4M1tjwei6apgGq5NCywHCEqrDLmEFUsb37nv1VQZpZZRZCuQWorPdHs32qBwS9wBERRE9",
  "key21": "5yUWVyuaMn71E4qwodRdUXprutUdvma4wFf8oGezWbV2espqK8gpuULszCSSP6zFJ6FC4WKGmUJmxMy9FAigb9m4",
  "key22": "bBauihJPGGQWqZz4jacYTMZTGA7zk2r1xQ92WGkaXVzdcpbUhChagFj3HUaDDAFLDCj3a7vudWLwgpTMdAf4Uor",
  "key23": "3QJMCUsCnFJPQH3XrpNkn2LwNsigG5KvtTJVq95NxixvjXG2HnXi3eVxDJn5UtMUifHtLgNHgEoZ4VgF6Cr2KBSM",
  "key24": "p8FRsgzbpqVY5iiohyZ5maKVsXqVuCZVsfu79XzEY58D8wKmcBksPXhyTo2GFXu3TAyZb8QW4s3NuKXqXUeXm2P",
  "key25": "3L7t7b7DzujkTj6DXe86VYxs84XcnrH2VHh6m7qG3CBWhCeCBYQFBt8eBNEcv6NnTXMt8ErFD4X1c8N5GVvLWCTw",
  "key26": "4R98V7TQZi5LygBDiwGct2z1k17W1gATGfExJxtQ7HEXDhFFfRoL9rErQKEJv2mKnb5159cziJ4CHKUxrNVbzkYY",
  "key27": "4mxBZEMMWmp5GQo7tnkMtTU1oQrtJJWnTiGgC5aySsibXgsszoF5tN1fb9DbxjKCtVBJFZdy3H5J65BnxAUgw4mW",
  "key28": "524qVqJSabqXyCDBW9NnG4ByMkFMQG6SmtWAra23HzoYpvAMQoYJjDR8DWHzi6qRAQckc1PnnaPzU5MUGdQPjSUE",
  "key29": "4xMhHy3GtKYncxthzsusxBzEkyF9hjiKmthULp9oBPgLHryrn54Dn6xp2qZk1UpZxdmRtVV85sYS8Q836Fnvv1sS"
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
