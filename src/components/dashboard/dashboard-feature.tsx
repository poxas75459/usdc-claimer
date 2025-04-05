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
    "38pCE6dqzSExQVXir5HfS4RDS8X2fz4VeauPdXd3c2sam6TfXBuyLgpBafrUEcUW44FFMBf6bbKMBy1GXzke6GN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FYmwSNE3HJbogqoV6EhMfULZaGRghnidhXVskfdNpAY2d7YPQTdKCRLWaXnMbuZq4GpBVHPRe3gD2jwpTPLEfS",
  "key1": "3yaU1E4m6k6HErkG8vpfeCGz8Rb6jwQoEy5EyrDnQnubxd967bxuJ5CkCc57u5YkiB7F9G1cxPV7tyFdvbBPMEPY",
  "key2": "5tcYSqA8W2CyhNAgSAfFm54XFqE7GvLyJaTmWpwaaj8BasDdq3upD7XdPgZ8bHC5WZPoZE1MpsbmRW9M376sY8nm",
  "key3": "5dWK1pVR98P3qJWcjsQDa4kgrLRUtkAbskVefxBG8DBRfdqDsjXwipUbyJp8Hskxf2mYPid671DX3E3wiZboJLGZ",
  "key4": "4nkr44uwCLFpPKfGfEie8t3MRQ7ogefpMd6g7SoKytiXpZoCngd6QuTir21EKTbDBACMpNWJ8UbZDaJCzSQTwP5M",
  "key5": "3ifH4Mbf5oMHh5K5zH4HSs4x4nG7DGfCcQmnmjBkoN5viY4aPdYBWPFDbwoWC3rqwMCpH4noNU2hUKB6MqGsq9N7",
  "key6": "4e5kh9gkPPdj6zS6WXi8DA6tHHf8tPcwe5sjFamLKtGKKbKakhNFB5eJdiuPLcnZzM8vuiApDABTPwm8LuhTPxNC",
  "key7": "3YyetN33h24d6KU13qBFnBFPtja6oAv7Ty6AMg1JVtKVBcqqGnLxgZrQphjzKcrEpapqMeNvz2ikPKUw7xj7Gcna",
  "key8": "5zVAn7KJ398G9oVHGg185WTYvxbvhxZeqqFjjsRUgT1MojBDDV4VJ6yvmjT1Eq1UoNQvJcFEMcSLv16KzLqMHboR",
  "key9": "4WMVzTkbL32TZaUe4XbK1rBsbfA7wNeqjVEhpazkxXdBXJSR8DJZ2Gnmr7fLtbQsbiZce3gqKUNc8Yz949wj7ChJ",
  "key10": "De6uxQR9kURimrEcrnE91Du55oYYPxnyc8DQ3r5WAvi2rWM1KByYmTShGNXmAVQFGdjbygkNLYT6r3i4ebxHnFw",
  "key11": "2SoW83BARvBpyZ6H3X6oLMmpQfKiSfvDjvXuHjuvP2SuZYCXSEX98cix6VmPsHUyEZ3iqRi6GgKyxgibN1gnHwXM",
  "key12": "2rGHA8k1qu5GAUAXpC7LD5688wJNkw8G8AbxEZuskBqU42uVHn7nArEa6BrxysYWPCLHafVKM7yCX36gZogKTNLZ",
  "key13": "5fCuXx1zLNbij1hG2GTrHR2R3L2qa7k3qCSYf2qV7iBFVvquKw8eaR3P3MpLbSxpDgYzPGFvZJYPgoXui1V4EEwq",
  "key14": "5ozXu7DBBGCgfBtMzJXd7D4bhU7GEkVnLJJWpTLdE4rLSQJaX4ePGNT7dfYZZJ57ryN5cL8USwxPEHFbqyPXX4BB",
  "key15": "3BiCLWVBb6myHdsfkLT4eyZkixErykAdkqVQGakk4sXNNtFtDbJR5z2h6d9LEk2w42sCt4oHzA3sKH2a96zVPt1o",
  "key16": "4nb9CtZRbG1eJ23psdkUk9ppk62oMv2Nk8YhUMkmU9yUszymwVNiJXCoQeqgcSDhWkpRFFcpBiMozcyJPjQrnjDa",
  "key17": "5gjGJvR2JnbJU9nLGNXpS86MPXxTfEEFjcfrWwjADzZCxoQnVYDcPNtEcvpV6WCzWvAivytivQDxMcV5ZVdfA3th",
  "key18": "3fcb5bqYpatxc6m8Aotqqyob67P8KHJ7yX9CH7BnDeTgYxj366CKAjqBM9jwzLh1qrvRVSHMarxd2t7vrH3DxzUp",
  "key19": "pDUmW5W8d1JMMwexvBBm8e3Y8Yc2RewQbWmGc63gFixunBztG6ymVz7Ek6QqpCqMX68ft7U25B3JD8peYvrL55f",
  "key20": "4qmhWyX5mC7AKHbnJ9upLU7ko23trVxSPNxCQenWLBKKnzWLMpLtdm2GAvWBhaXVNcLGWVZTxQdUoScX1sQPoCtE",
  "key21": "5M66VCupxT8Tr4Vz2XgFpMpLXyy1HE4qhX5KFTDF55F5Uj1NwvkQE8taAtG3EtMRKRenHeLkA5y1tuFp2ft5VuGq",
  "key22": "5bCnSqxQ7QtM4kSb9NiKi2tNHc3QEuE3rE1qsDvixFUzA8X5N1af86T4ZRoSi6mW9YGHsZij7BaxCpQ18Z1yJ8rA",
  "key23": "5xyRBV5zWucU1yp1Ldjsranny1WVrsFsTAutuc7oLqiBJCeY3FnMRBPynZYWgrdFhJPYVWpk87eZiegJZcksfbb6",
  "key24": "29BRx6vHsHnskApZpq4THSBQSsQJ1pkwNPBVXox4rksoM5d2dNUBx8bn8KeRojiUhSm1LFNrBhGyd83ERmCneyp8",
  "key25": "4o5x7Z5ZcK9dscCLfrx5QDSJhGwv2ZqW2nxEPxUfvtJJYhL5Lr3rEmwYVqHTPyxhhybQmM4NKJZi1Sx9YxbQP9J9",
  "key26": "2d2wKsuHM79qZ3mYd9T67ZagGbtWkJtAz3DKM9nHdzLCRjr2WzwS6vNSfLH82qwDL7KdyCNFyf6kfMcsxNm5hmQD",
  "key27": "mwtrqowj1eiGHQEmyU3PKjzn2xaBgN7owvWGgGUJr42F146ZccuwYBmLJZ6k5XhAdyg6jMJfueu3U7vUobyZ6sN",
  "key28": "3f7bG4QwQdDdSD9iXZtq3iumPZpKxTEnuJ6qgnfy3tZWrJmQu8CrNtNvJmpo7MfBpLryFBBGRimaJVqbE5QwhWHp",
  "key29": "3y54mobF7ciqHqXaG18aLEah45nFuY7cQNTJyj9VSeekKT8ZXNCX3rY4g6cyLEvhjBHPpdzzEhzgD4wcc1FjJmfN",
  "key30": "5Fwic2dK5tCaAd62GhM8Fwqspu3Z7xbaf6mStxATFPu82Qc8hjpbG43vYWMvLttEcbWa6iFrinhBLKPGohd4ir1f",
  "key31": "31AS5B8CD9BPQ7zK8sf8ET6tbeLRt62VuQHN1oxGqmkoxx699uqd6224o9ZENyitpwE3Fvry6czLnLd6ViyAKd5H",
  "key32": "2xDyFJZQcwrQdVKtHbVusXeKFuEAiQ4eDZ9w1oHdS82zMjUYciPbJ4rnVe7TBVBCXamHjwEyYKSN1TgzaxASfc21"
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
