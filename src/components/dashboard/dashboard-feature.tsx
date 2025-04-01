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
    "7g7pZLzKzgk8GxX6nsd4Wn8hCUX1YvWJLyjar3hzSXLDoAFnjjv54B66fmqra9itMpRDXFsL3CgrBsCpWcnoBjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "266CxH4PgTxiBbsvtyyVgZWoQDPfGMXrYLe7L5zWs93XCnv6QKE2EiivnPjeWTedwhVKCwxbamYsJemPxxxmYVQG",
  "key1": "3h8DHWUERygcnsdWD8bMKAFBdmVY3cCuArcDQ8aEWf2RAytdJxBcBaQT8iYbKAgyv1A4UAKSEF35SZgk8cKfashT",
  "key2": "4cc9aqxYMRigvjkJLyp7d8Tm3c8cUmuoi98UNGRAYfYNvgYSQ8z6JXtWwUFBZDE5BfsiLGTwDHWtwSK86UBP49S4",
  "key3": "27Tm8i6pYRiottG9cGKHcTrAmoeNSudZXJk5hgtfu7hzy21HKiLDgVDdChcxweoCA4D4mEtZPGw8CpbcNu7SEcej",
  "key4": "21nBYu2uGc9Z1tytL3zf88xPhiM7Pxeij7hFz79yfzzAeN9SsQkGQ4StfcvZcxkNwd2hvTz1Gp1tvzQvDfq9pgo9",
  "key5": "5Si1kn8wp4jt31sT21Q2ECR5PNeXftatF2sBPAzJEpVMEaxnrrt7sa5Xm1kCb8cH2fkxUHbcVufQpAyGBtWgTPzW",
  "key6": "fL2QW8yHebe9EBs5eDjypvhcfpWMo9SMQV49KWsHheF8MrSNnphjAUgPrigWFJ3R9r4R16x6KG7gvg7tc6TAJ7L",
  "key7": "Ah2cwZiX14HudDJ96jzukpbBzqo6kSefXDXvxeuAQrcb9A5nnVUWn7EvxtceiQgYAm4mkzYZkNUGtTG6q1eZx8o",
  "key8": "56U3JZA76kVkVjbSm9N9XwCqAbNFAviuzhkszfhXMQkUAW9R3NtdYv1UpTxbqk4qdPTmwmiozpkLiisMhctathLj",
  "key9": "5MwvtueCoGShvg7bJ3kzt5kusnTDQuxfXuiyGcRuZjtAacc2DT2bYcKstpFzHyoVYvjCvjHtvajGTEV52GMZhmMX",
  "key10": "2RLKTgBpCavd6nznSNbMHohAntQw22u7HjWfoS8hdADfVrxAJVBqLKVPHATtBuxK97k3JHudKJ51szVAbMP1CAtv",
  "key11": "qHdx1dV5w2kenw7nDbuh4bvfz8b8RzcoUPXyfGeNPcoAKDrTfQK5V33WS312JVe8izf1PqgVtqJmjpx2sxZmyRU",
  "key12": "3nJwDPVYeM2MZzihHv9xKHEdNUVJfJkH2bKxqtnEyWFB76Brfms3apNqL5Be9pBbGjceSDsDykrrZNSebWF72J2u",
  "key13": "maqzjtXDLekZ9tzuLw7aaBL8Q9cFtThbPDSyKrzWa1WNjGb9DuwBabh3ppZXRZzWTPJ29AnPD9okJcepjA81PDb",
  "key14": "49BhvT4taM26N6JdK2ty1mY41CiBVtKYE8CTANC1o9D7dJdtRBaRUB8GJcicpUWPGmwCxMFUC1xBAs2zCCfui6MS",
  "key15": "52GHnEUrTM6NU2b9GtPYLbpKcYTuqMgP7b6HoKoYVv93PskM2wHCd7WJEwwgkRoYSdXYEDkquKGohKe91ELDroFE",
  "key16": "2fLrcFcZgwd9xx4uFsnvHiJrpPFKZ23RAZboeyn7JgpepwEU9bFBE7AMwL7C7iUT1QThX4iZ4TkgjyddCCHnnWce",
  "key17": "3XYjf4kj64TNyN6TpqP9id1DzBqtBv52cc4N4wEjewFqRT8urCmmZGuL3j3Y2Xffhi88ZY2pMr3tsQd7Q1CCLh6m",
  "key18": "4AWLjjjS4b1rkFkMNhyKK17ee2ATyz91HyZonBu8JBriXN7PzDwL88tr62ZF4TfTECUoWsFnrgu6ce5HqfLaZP9j",
  "key19": "ha9UjnR1nVeqvJzT5mGf8bgq8dk9FFRUTP5QidSEHMUyugc77tDskkndR2GRkJYLcjfMbr6jnr1LtX6ZBPrXLxX",
  "key20": "5kLaW5anD7BK6oSZDeBWfk5czuyiXjy3LHjVZUF3wZifrN52zAVYw5iKQzpHhgK6a6cBjy41bBxSUaMxaYs93FYh",
  "key21": "4yPh5DBGFou8wNNd1yq3VHyxqrUYBAZdakZ6oYiAKGgZ7VkwW1Ptjh3DVVG6rcJUvHrMtb9bDfYNPPA39Eyfbgdt",
  "key22": "2XfZG8Wx62R8A1UjhBZXEzjV2qdAxLdV1HgHAnST3UBKyXqhX3xKTx7LkfRudFqBXPkPXhrZHwR2VEx8z1dKg8sS",
  "key23": "4Sxz7Hf6VURV6VjaVNpFsCo42x1RnRUMH8b1rHQgpY74CnkF73ggUAxp3c6JkcUPkVddnUgXcaXuBtY497QGDBYk",
  "key24": "cagmUw7qQoBT5dFxTbdRAfiqbF76po86TdT7Eny1Qx5owEE3xwsd4URZMt6WfdP6r3i4EjaWhaNHcEXJASsjv7a",
  "key25": "51r4zAvkri4Hdb5kuZdT48jhgeBWM5Y5qh1zHDnGtMrjaAh84zpxg5RohFjpRExVRn5d8tuGpLsXuV77xBWwi63q"
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
