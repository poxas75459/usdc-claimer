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
    "25SX9BvaFpqBwDgg9W5P9wLWp3EUXNvAsjCWBW7uNTxQGie27WUpFS2jbPt2mBn1YsTBoGWQtAkUvtpngSc7aRh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "piBYzaNhRMPCD6KVaD3sx3FeHQUpTdTenWyTL4Fj6xvBPZRRccdCA5RJ83a6xUHdEUPxRawJPaZxaQDyPLxRV4X",
  "key1": "oBgxuUz1D8v57WVjJ6ijUByJ1javJmqxDqU9EHWJykdSoVkiVneMevmUFTctKGNe1KSZiRZ8huq6kMTicUKMj45",
  "key2": "5LKhWbEwvkum48L4mWMK95Rx1Uwf6a4ELDvS2bMRNrbaKuqVT2P4NF11Nz1qqQRnQtuhUcU8TeU3wuYWoaZ5SqLX",
  "key3": "33aZ8yFHTP9mwN5m3d5QrLM7bUo4r6Bhpfe3gxCwnhqTZwYTqQrr7mghJGWFsMTqfWeTr9EvjtYKGHt8aYfgS6Mu",
  "key4": "5Jp9PEbvuQgQ89pyESYso3MGknRurQMXAaK9BBPdTMFpqLDWbwV7PhkBcubywPoSkvjiCz87vbZdmFJwRd8uXJYr",
  "key5": "2d4U2kWhjEdnNC9ZzYksFUNXrkPpHtrBj6zwDfAx87ogm9UeDKH2bvx92UpXYKqioEtfsMSHeBNfif6tWNVNp6J7",
  "key6": "4HYeVpwLLoq9mCHNBNteEpA85bp4q7KFsj9KNZcK6tAtFoPYhQNtAA3vCanzwW7HYEEB7JKZGqbooJ2vVzpFjPrG",
  "key7": "4PCZEBte8VVwTvxZTxmQkt9QTbxTrUgUDyxnu676ZeY84bzNHdLh5aUYUG2mHqQxJXjNehBhndeknFeZiTqQfypW",
  "key8": "3r4pKvYd2cBzZadh9VMSTQxgxaQ6KDfkfYDw3FYXzUCjYvrcRicWBFJdgy2PxVNCewbtuGWHcCjrePG8VALnHBk2",
  "key9": "4d5Mr4TvhqyBDmnYpLC3FNRgd2xmvqfkkhbjzsB4C3zbsyAAQ1fietvTwQgsuy2enmVfeXjGdUHQAYaXkXeyB9z6",
  "key10": "56mtVi9KWboKTbSzjp84V7aN7tB2AzEvCAZkmkFgtGXeb2Rzh644tzTRUvwLkgjPLQrpKP19buE86kgzeYyX7JyK",
  "key11": "32aGckJHAUeff9cJGcWJHcLo3HiDE6Pnc63NDdkhaGh9mrckUTsxmkCyjbafrLGYGJLU6kKuBJ2Rcf4hNvipRxXn",
  "key12": "2oqupwDP7e5uoRA5VdJPcErt1vqophbmHTTsr3gozXrEFb5pt5MSvpYjJhNi3wquLtKTUttSuvRSF46wDR1asLtf",
  "key13": "3ycysP7gmjUL2UXJxPoyqP1mDWPFBn7zVRZtiyHDUpexeUsG8MK7inhRnJv5rmv2kFYftRn1p3z88SuFtQd9xDXk",
  "key14": "3C6aWQ99CD58SJLqE4vtA1UVqrEPfaMLUvSjtoYGPgKk43nxqEQsz2cLxT2rCgUAYAcv8eP89m8RatYXfmaD3mNE",
  "key15": "2w76MNYj2Bze7wU155DC2TAsXj28Tp4venQch1GrffRwppNDCGE92osHr5De1VxRJrUzy7nqS8pmgVYkHTu9qLQa",
  "key16": "4nNgZwy2Sy4vie37he9J3Q8cw1rr3Z2REYKnUFCKtAQ77H3gYt9SwTsgkhwDkWx7bTqDGgeoW7miP5gVNwHr2ch3",
  "key17": "56kiTky4dN3CnepGLRNd2cQvNQnGRNUtSMWXZeVhTfzHE99WyUjG8tP9L5yhJY89sUJiK6RqzuuUGRwPGBK4LYU4",
  "key18": "53a3TtMcj8wSM6BQ6SGiiu41L5qDKgeQys1bdNeQXM976DbYiYqxeQHoHL4g8RzAKkfRRdeMPHrS3b285dGooYd5",
  "key19": "2AwdRYyRFnxZeHhB3fcyNUDqF42HJLBNqdTtrp3FTgKrs8rA9dXn1fKvmaKtV5R19uNFbdxgtLerLbghbVQyH9on",
  "key20": "43fGmMHuyaho2vwXnKrjBNgBTTmcL8uEbQjrvg4ZkF7fugWid9m34Y6EGJY166DWQ6tmiGhKGFsnhgQNJKAreu7d",
  "key21": "3Nz3KAZRWNLCK3MVuQuvom9eCw1M6FwGpiUd4U1Z6TXgHVXYxFe9RP6zAyeTHCoMEA85uxGbmnY5rL9QEqUGBVBc",
  "key22": "4g3PmyUfMjs6ev2oMo1iAhfpdrFDeNSDFr6jmHmEvBKxnTDp7JbsH41Uxf1togvc1eQhAdXpHq74VkZNrDE5Fb22",
  "key23": "2LT2BxPLrQcKksVQuT6cqcVZPocak2rjWYgx6kzggDpgNhF3wcmrk2TbRJ1iWB2cMGkvUoz37jTd44AG3R8f8q9R",
  "key24": "5QVis1We4yZdNtYYWDGj4yb28nwsDQMr6f2HN6PAoELgEFHfQ7sLf6cZyJxhocmwPzfr2oKVQCZPJsBXQg5W8Qek",
  "key25": "2jqZkHneFPYCPGbe758dWnaAuJaSQZpPgznnYDpcn16pdyNB2vABbKBXjLn6NDNUUDwMgzsgim1F3vGU3ksPU7NE",
  "key26": "hRZtBHjJnfEXpnMFmXTZ3dbXhWzgBf88aPwNy2zWs4birPDo5JQt1iGCDs3acrZw7iVA9YP6FsHBg6jAYfQZsoJ",
  "key27": "38jSLwKRaXCc5Kc4QtUBcsMApcAP24y2MWLeU8Wd99Bqw1zx7zr3Aoig3pqzSVXJ2pRYELbogGthhShEz8YtyxDw",
  "key28": "2DTsnZZB5oEEgXePEBvDCoXizY4FaXigWGsV7UYLpNQ6yduRd6rSt58wxnHHeGtLzhStWqgEz3m761PBQ8zU4xpH",
  "key29": "2D8Afe2udFNmLiBUsnvnq3Zc9UzWsrW4iBXLBFhNZx8fhhf7RnFv4curh3i4N8hzX3k2uMuvfkVFK6JovHArpzrf",
  "key30": "4TJdx6QHybifBMznHpsxumAZY3TUBUKWK35DzJ2xLkjHjVW294BeCxpzJHEdbkQk6n8zzUdqiKk3R6knrzJVuiQJ",
  "key31": "3ueKzahk8CLzWTexBVjzfXZD2ohEp3Yx2bEoJip2Eh9MsyQ5AoNPynAPr7cJQ5BdciCo1xtDhYBnV1WL7DBpj9Dj",
  "key32": "52UMDoLqGcxewaUP7qZgx5w6csdHFKvtehhcqPrTMmxW6JKtEeXXXnB8t282H1Jz9Sb2sSWQ7WDCMvSgLakHc2N",
  "key33": "3BzD9oqPbV6ApWVoz6VM7USYTfx1SEKko8Fwb1czCHd8s81ES3aUGHdcrE3csQubC9oSSEUucvto8AP8Umu3PmZm",
  "key34": "4pjK8cFU9NQohFs2DP8gUutT5iPearKMY631V23JKe2qfd7RCj251Pa14odtPyrALMYDhB6CpuLg33k2hnyP7UDo",
  "key35": "2w2yipQ791EJgErYmCbUxn1i9bSJ84GYcDuj128AuwQKHGUJdAJSLaHD7hqfMYoUKQRoSFThbQRvGVBvUET3u1Se",
  "key36": "3CjQqMkNUtiMBKwFukSGHsgPV14hVxA5VbVZt6roYeWDd6zMrTLYVXtFM9GX1XJ2XdLCBj3DS1SRbtw4Q13nEZ3i",
  "key37": "2mBSx19wSgLfv49dJBUWeEWXydpXbcKn8qsaPecJYVHY7pJh6MyzTyqaCPN4R4xxw8RGmX7fWD9tiiL3zh8SEfwd",
  "key38": "5tZ8txcPPj8v2gbBYKx4bYDUTCGbyDUBXRJ12UCkuxnpkYCqxAAPF8T5CwpN9XjpBmdeXozt25uqghSUGTXyzjN7",
  "key39": "4dCHKbCavJCfJ7Hf2n5xXjddY7ge4RB1XLhjTjmcfV2qEBPjVDDnWakqGCQxM5FZdtubX36XGezdgv3xTi939n7h",
  "key40": "5UVpVEDzigK6ersjToa3kj9B6au6reMDLjZ28rVJAgVzCzF2mS8apZQANvY35XiAjB26RJyNW3zJgU4MaabYRmG6",
  "key41": "3WgcLp2zLDokTBF9dEwEH37uGmfDDU1Vt7okCcjshdsYTwgNh7DXLmNHibFT87XqLjTWHh3CUhLR4YnQDFq146QM",
  "key42": "2UttiTF9ufhfZXYRQZapQtmmxqMVsQh8nHFJGkuvChf7tj13dess97LDwrduUtGEGGjxHbgM26SoFt3877u94aiD",
  "key43": "YWrXykLpXggU8fbdedU3LCMcdyKHr7iuxgaSQYp4tBNAAfJTxrB6Y5NZLbfrZkVLNxf6xBELsmuubRaCJ4rz9PJ",
  "key44": "3hn2TN3DbZ21WsNtUV4KPKLwmQQekPGfWdUkLxCCd2dLAdaohrHZ2SSzFZrRBcuAs3rK7rjNWDqHN4fFSc7Jpdha"
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
