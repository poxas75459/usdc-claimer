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
    "2TNo3MdFjp7DUqu3zwDLosKovDiCbVf8wt27fjz2CfBwPWcCHc7KDfbzFpcbz998Sxcxhb5VePgksqqCtjJrqFVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKAxxUdhvrNC9JaHsnrahejZnfD1iizW3972JFfkwrcUVPNUEU7XXjRfJbSFJVNNJEkiz87jcfMEQbbFeroPd4i",
  "key1": "4ZmaVCkqvMpkLnghpbxxxfHwthb2cxdLgFoJcxMmkRdLPXLEiaqMALSYVv6DW1784FhXYknxX48veVwyX2ZZ1eoJ",
  "key2": "3GMJSM9o1NC78SsHipvXyYjMbsjXXhPvfi97CB7Wgx8YLQ1ue37mLHzSBt5ro2z7pWTPQkERZ7YyF5dwsKP2nKTw",
  "key3": "5tFCAcbZxefapHaFoRx6zgVS8DYn4Mv9z8eACTwYo8oKgoh8t2Uf4Mopmzfy4F3nwbLDcsfUnTxhLz3GF8r27ACJ",
  "key4": "4qxqVy7jEaS9wpBggeBDsavANtWKDZVK4epjVh6vjCAp2gWrvVVqFpMzRerokwKpFk7bHTUd6dhLajMND3eQpmz1",
  "key5": "2KfJ4Ve2B5mPRxtXv5CdbsvoEVtuVYrj5dCzNtZhL6tyXqwmqtK1bUtqVY55VLkSuQZychx32Dq7JeFkjBXwHAAQ",
  "key6": "2GDzgdgQdfVZWcYA8aobuwX2DidSZSb4oEG6YAV3j38pXcemvXx4wHmUUPAFfyN88VnoGVg4dMV99BbXRZ4asqR6",
  "key7": "5PkfjswbcFjF55SPKaSvWQJGDwCQ4NA5eyLSksXXjJmMg48wLBeKKTy2xLtSjS6r6gKrFwzHZvqzPZXZFdg528c2",
  "key8": "p5rFMPYaupy4s4y7ynPYPcx8N3Aivp9RfYS9N8z8ZYYnuTyKbqKrmkqG1hkphG3xDScxFL3pXLBBZCNQAaDA5WM",
  "key9": "5LWNxzapdA8cqkBzUJDH76q1fmsDDnQVKRyURy6oyWkiZAANQMK82Jj8sZKZPtWdzCGq4JjEHdSagfYzqSAkC3sg",
  "key10": "2EZoHRNPKYPVf9NnyT7eUr1P9xWrkts5673T7yNDCfAMzJJe9LGWXm8DqVAo6h9EgVZ1M9QpxQJ7hEWZNTR1KESX",
  "key11": "43KjSa3Zuyw2pZjQGw1nKpQad8zzgKw6vgAWXqg4MNpaZ6ZX5sRrUj8Rc9zBoWVWtqaazjrYmXTMAqemqqiHFXEc",
  "key12": "2VwGWNVR91ZNe7fGvZUzguKL7w5twxv3d7yTMM6nUbS4VMFUg6GJSYLWGqX2ivdC8BENqnUZ4a9wFiBPvPrcEvka",
  "key13": "3eeET7kh7qkFsHSLhN9SgYJYmaqspwFeMGjbd5PmMz4BuMktaiUPTW58FP9utuj63Mbw3DFSViWhxjB9EFwthTHG",
  "key14": "5Q8vNBm258ToH3vP952QJqYcSbNa13CjPLayY33gxeCQyoajvApHV8KNtS8tgV73Y9nfDb4kjMAZd33DM7G9qrKa",
  "key15": "22rJ5zuEJ3hr6bjS7YzroB3HWXy3ZVdoffrJctmUEGyw8mWKGWfx2C1B7PjWDpZWod9LUZW19DqEkqSuhW4WEtB4",
  "key16": "359p1Fyins2wg31zFP4TVbvkj9zYxKvFz5kFiFiEpEX2vg4QRstxP8ZQYo7pciH7bezxcPNRYHaD5GfMpZZF45dK",
  "key17": "4XRkqbdx9MNRmH1hijVDDzmUB1tBcCRqAGdp6pBy7j3Ehxq9qNU867mChhJdD8qnohFkMPvX2HSho8EUYcoWogYg",
  "key18": "4YPWWfsKvabFAotU7VR535KrVX3wShHZ9CMnrBpn99QmP8ab5k6sC6qSyAaGgpoSYDL7WywJkEicz8F9gktxuPw7",
  "key19": "5eRbB91cCTM5TuV91ykgL6LP9HnZgweuCkfx8hj21ZxPSaA95TKtqwDpQYWJ9nCbLzxQFEgWs8KfV3oDn8vU2J3B",
  "key20": "5dAw7g2NyTbEStHSqUuXJn4U1LyELE4imo7n2ndSgmzKKmAhLe1HWKnB18SN2eDbN5jRFfAdY1d9rngotmuxrGhY",
  "key21": "3uguJZEW1T2BKD6VhW9rzGVR8mMpsHNK8gz8bGDNGyCZfDNyEZ27XKBCx9hcUXUGPemRcR1eVMVrKyAZmGutRxeX",
  "key22": "3nbHi9KawCcRGU179TV5MwFeowfL5ooRwnYf9hbpxEA9pMRcnipMFxwPuuyox9ZcpBbQ58RAfgU447FmgEUHYhQJ",
  "key23": "Jf4mHkpoK4ouAew1c3QmdLoTHSL3UHmw57ZQSTKjDSLJ8LGUBmmod39XrF1W64Fo9LHC94teDovzxntDTZ8bU9p",
  "key24": "2MkJdvK1oRe4NJYi1B4CrV1PoXqpvn4EJ1e9pi7c7kGDjD2SM1XcN886uhJ6RiXrg5TF77tcd5vaB7FExAw9uFRi",
  "key25": "3EDUYUYbHXc1y51KPsnb2oTCjis7fxqa8DRGh89JFYZrdu1xZayDTkKbuFuovFHoMf42DYHZBnKcVsqZN12xvnRe",
  "key26": "3Y5k9Vj1Mdfo8aL6U3YcKsZjgPtws1kzg9xCooMF8vuo7MhHmDoP2i9kdeFCGFjvApUzkS51X1WKcycQ7JT7PJs9",
  "key27": "4wQHcmn5Sib9wrKJ5WM2KJ7KzJKFA3fpZRbRCVkA8CaDDEyx4cVaSiCH94kgUKHZGCjDHmiPvewzJKtChaK5CGQg",
  "key28": "3HwNAgjAyfmST2YHQWqFZKU3aU4F59u29LWmQaVgtBnzaqbA5HjnkMEsdQZmPtxV1o7RKjCFsramMhRUi95oTyVf",
  "key29": "eooe2wCHtDju9LnvwUvt1iZpDWTKbMWhgNh6Zvpbgs6TfpyNqxD4xNwvNS6eznopVqGpzeXYfeDFqBujPUTNd8a",
  "key30": "aHZge92G7yQhi2BMZMoj1fZjreJs7xqPKmezc1SG6nchTGwHj7aJ1GqLn3NQqxqTcQoaXQG4Ecpyt6qB1nDPRzD",
  "key31": "4miWER88rU14AAYfF3BJ9VE19f14tZyfTC3veBmnqP119FcRNySnbnug3HibUnmsvQtMzECP7DoHLMxCtKEnrphd",
  "key32": "zz49A59mt4oso6dxwCEbLA4qUbJpxKPKQeWGmLyrN5dQ12xuGMCkeYKpDobw7NyBwuJGjNRZ7szv9jYqstqJFqu",
  "key33": "21ATiwAWTbSbbNcfRDksvxuTbfbLoXbhMRR1WaZDKPyHku41YjUaEhdiFw8he5aLZyRXpwUzLhembL9gEBVhHN6A",
  "key34": "2n1Bk2PJeWNjg8SCXKAFKGs76Z7mcYabmU6CAzLcwUeePpudKkXHNQv61YxY1Kn968rnj5svJGcow2b4oCzWqzoE",
  "key35": "g57ymVZ86nvmTPf2qictVcgUYpGsMEFmDrm2DrNa3FGV4xnQiWzgAyjd3mZxzjh2xnKGGp1KdzCT6MTmUjqJzBv",
  "key36": "hVLTJnALcPaKVY2EicpkdpvHcmmUWfAeJ77qiA7PfJ7Va1FoQa8a6GxThE8gCpGRjEveEt7XUsorp3Kr2mz4iVX",
  "key37": "22bAAEmHV4Eb7u85GdZiS4byx9Q8nXZT8CpiqnMk5Yavr8LGw1p1yV2pt9m7tVxejx1ZkSL9mFsZAYXZxFHgcjPk"
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
