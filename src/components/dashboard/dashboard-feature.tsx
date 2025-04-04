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
    "xsgL2hwk5PhWbStEKMT7G3zBjFeqJpGDcmSGEx7Kd6C68c7K4wThvfYJ6JFkgDP5BLoBMSXucM6x2tRT2qFv7nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZACbajHVwUjdAokYd9Cmi3jaTpvZaHWLuuVyRNWZQWq2aVxBfF8ihQAuLLWsZDPLWfVpHWoxmLZqQbjL7DXDAJh",
  "key1": "24G7pPUCSivWMxL7CVVviaRqKcdJqSs1ry7oyp65wpK3e3qFB5PwP9b7UJ4yZtbbiSBZiWgu1gNCnDGE5D94ukjj",
  "key2": "3d1DcDsR8Y7K6qwB5NHDsykaXNcz9i7J88kbmPgYgqWbzyqSU4aQYXEfZZ9nHgVHuA1yX86iskZrKfBg4CmA2div",
  "key3": "3asH2r6UctrerBRmWbvYUuH9XC9LF2Ukf2Lan4gdmW9M6UgWFRZtnbg3ee4URtUCM27YJbNqd1c28L5gYY5XcNN5",
  "key4": "5h9ixvMbEKcAf2bnYb732UwyrVNB5X8QdxpMB92pJfQQKKWoZM4nxt1YgKCqfRRa6dRc8zcioqPRyopwLC3uej3W",
  "key5": "5ZeRy1GtqkSQpbC8ZrT9c7dwhaSDjP94s4Z4NU6y4vae2hVtHDhJDrXoJreye64Bj1LNeKhmKtKQHChY8oonQa7d",
  "key6": "4xzxzo6ZxrgJWqsoEQPKjNzdimhG7ygup2YeyDLpTviTkks1TY9dX9Pzv2uQkNMiG428LWzGZDUPN8XJM7Ca1Nh",
  "key7": "2LemuPGcAamEKYQ6d4Xm329hvFMormBBVReTVsjqSPD3fuqS5spBoHQgVKzNywDFE7n4QDEtTx5XB7uHch2nYSTm",
  "key8": "5EUPaqssJXGue1ss9buzTDC2RYfhfogXGfUpHPN1KGCU2jQM4ZQBQiBsNfXZeRmRHkrebJqwtAv1AeBa2t2E8p4t",
  "key9": "44ZAic1gYWepRvmENDGLBxp5KjAsAyy6HypjtoV1JMnMD77JSKLYT1VC9NXsDTv8dfBAEpvr4Zoqx4k3US6Ls3fC",
  "key10": "2XdqQbUaa7dbLEkeKee3SCQeBgogyWsrnCGZ2kVhzH4SjXbkriikBryWktKipEGEV5MCEm1znSQZQ7C6zXuoaWJ7",
  "key11": "2yKfVq4ahcfctmiB67uNLqLzX9JEHGu9DHF5J4z2NNaDwpPfcXVFC1LPfmrqELStrFESi9LfTg2N7HxgueW9JAKc",
  "key12": "4ftjWY5L3v6s2DJYfhWUk1C26mypjjDGpoCs6pk72TPZSEvxvdw7jZK8aCpPjB6aemrAz9HZhLGesiba918jo5zc",
  "key13": "4x6M9yCAkHbpBJvpjyeb7RxeHSA2JoNj88ze5oeXKFzSf8bQdDv3jYYzLeMJC7MxVKGGJotfXukgwAGGXUr9c1ri",
  "key14": "5h3CZXVpsb5pZ5xErL2Lwi2V1XUGGyU8hgdra9Lpumq91U9UGoXBNKXYHYDXKxn2s2Pn3yTPe9yvYsEU4bJyuqt2",
  "key15": "4U3umb6Ms2n2sQazrp9pwqyKpohqES4ERPF2XtKYfW1yvcpAPKVHaYX1BLbQ7nCBEc4xDR48j3RhFqYtqCTUjw4Z",
  "key16": "HWhp2VJmCkfP6vQpMXxDycL3eDV5KMbCDNAemJYSbKTLLVqw4mPyePbc8EGpF5MiPtwtoqQGXTBy5QDpBggihNu",
  "key17": "4zNjZW6GBXGQ65gjiaNUwYLuRApBMF6A17gRkMPrCdPWfj3ft6yPi8eexqwRTi4j7RQNGNModKUUF4ESTFudHBui",
  "key18": "3EQtB8fMBuPd2HMv86Z1UtN4RDaoBSPq9ZyHbPQg2T8tLPdhcDKoq57qvrUBqZDMz9i7xX8tFLuARrxaSdRcpy2x",
  "key19": "5BaHKR9HPc24nyvMheZjotr7oBXgntMLnxzYupvprhPGN7FzRd2LGQxkNWfQgdQEcHhfzWi4VH8t9xxYYD3Q5iiy",
  "key20": "jVm6yYjE9QRrZf8yfSB1e72zAcR6H7pzMVvDrGgU7J5pN9jJny9AzNNMMwdQ6byktUm4BmnzmY4XN4PkFrYc8bq",
  "key21": "2oGzFGxip6Y4yDHmuLfZdHoHu5Y295xZxPV1MRM82bF1xKKg7RtZM9fVwxYskiaFm2kG7k2NazZMaP1UHHgJDW45",
  "key22": "maHadPWvRSod4mL6gM3C8huKNNHJ1DpFkendGyg5fWnguA7iSiraRmaz9RUDiRhaCHEH1NrbtkjZ6bZxz7CAxzu",
  "key23": "5RZTvS4sfsGLdXGkB2kKwGMmUZQnXuVWSrk13V4ZXTSdGrDaaxFa4n5zGkicpNtVqKgMpUg73qFPHDgBh7qZsRX9",
  "key24": "5Z1WThi2KHhHXC1PB6broMexTQZzkZKqKsLEqWK7jYDqeUAmwoVBbTMUtRjUmVRcuGHUpmeLimDwVoQ6pR7YSU2R",
  "key25": "3YDxc8E6JPnX9jZgXmftN4SyF3qBXEyN2cuxecQdg7Wg7ryqfZsztH323CYh7E1iZYaPbnpYvST959NyPftu39Va",
  "key26": "4BD1Wc9GAB4iHNbSBdbSXezCTe665PTmQx2JBfZtp6zfsedKFZDRJRJDms58KK3gCRsLN4Fquionzy8Atd3BgfBF",
  "key27": "5XDxoiKCfv37zdjVc2xYc9uzKoRhQEyJy3akStrLQynpuv6HP2vmrjDqw8Qf1yVFkZyesgPijUtJuUkmgb6JGqt",
  "key28": "4s2KKQ2EJj46z3AsZhUpgqd5aDVaxXHgLXpFTaH2HYEveLVqzwMkJqSS9H1iMFrT36CNEfE84iuiXm6wsqWSKJuS",
  "key29": "43sJ9b79TQbqvB3QFBog2VRev7DRUzgU3Dz2h3EQ2i2QCwoingtm7gUe5bKYHScHdKAas1Rr5VvngE3r5XYoMJQP",
  "key30": "3gU11Tu6K36QQdhLmmtZj5YAsRjbd2dCQ47GeD8ZNFGJpvNuFRjzjKzGGgT87VqibTzu51wrdtMDPwcTPpAF6KdV",
  "key31": "51BSbmSYrDxgeK2sWRvT2jMxpn3LJgh4Xbkvq51KjVGZCJkv3EhAPoFHcygnRDrRJEzLSJJPYbp9TzeZcoAuywKW",
  "key32": "5kD8MGv3JADUeAehLBt66aFX9K4hURkb2wh4u6ejxZXQAv1StxobPhFjG6F1mCHgo86vY8WgSk9dNhUcyqsxqZ9A",
  "key33": "5hxDVJqCDhqdjVZuf1N8SapJoyXJ8qy41dcBort9TwGAstVrAivahBJCNSoLKxhGH8SA3up5q4BTZm87C1irxrMW",
  "key34": "2tbUUyjPCJABr3CHBaS4VMT8FD2PqDVJWe5MRhyEGRETnJRiWRwyEgrWY89C4wggzD1c9vSc7E7FH8bLggRa2UC2",
  "key35": "45YvV9EnNmpLfzxEpEJ3htrGfjnx5vfVNQgLa5miM8Xty6tQd8a6psgjp6Cs85NpaurosaL6zSKHkPS3Pqcmnneh",
  "key36": "55X4U8qk9sBM8WWYMsTn2GhpXbZatQHGizsDyk6Pse47gi3uRwVZprRvCVCBpfxUeQ7T9tLNA6z9UscTeuZLn7Lz",
  "key37": "N2cqYsMqrPC11smx3JnrQM8S8wNgPQjJoGasCfNV8to22xS4FtZN8aUD5PVmqyGLyurKyUys7TRBThsdrmUQWo2",
  "key38": "hhEHhC5CM45PbYDWumazjPLhKxAdknNuMkrKT7h4JbXadSmF8RQVQXxqNUGaniW6tqNkL7xXHPGSr2YWwsmE818",
  "key39": "65dYHn6B8FZTT1YysfhUxEuC7pH8m7tCjTSUkrLtGn2ys6KMUsrXcDJ5b95ztvYdKU6GNYgUJw5qmA8eFSZA7akY",
  "key40": "qeGEKZ8xPmYsZEsFq3hTs8UiaTw38LQiqcv7ZHZSgucMP8T3PPdWm8QYPsW3wAeCxDUDCZpKyUsv8maTuyH58NT",
  "key41": "49wTg8JUiEwShtjEJCNZfGTWwvfqhKvi8pEAgecHDcRhA37QcUT2jTMSegDyZShZxAuYbbptwt27WCKAHcDbgGc2",
  "key42": "5P2tng1BQEtxyU9r5XYxTn8hhSX7wjoeTGxsnuAUmc8tPMjBcAMUunoqtgrzTbuy6MnRcXxxQdUdpq3hH4G8cKMg",
  "key43": "58YjaZdGpm78JvQETP3zxZS1WHnVKTkLTFrT8Ankcz3uNetcDbfFR2pAKTsBXLfYvxsnPCtohVK6jmZYvvjuFGvq",
  "key44": "4iK6po2WZVhE6V2XABEqNN5aavesmHbzE22Na7Zg8npCcCK5V8GH7ZNhC7FF1U3tJ83qkkRy28PudZw1Yu9osWph",
  "key45": "5a6aRpNnRi4qqszoF1jUGuWk3McnFqPGR6dNomLGNFbmGBwhBtvhjx3oF8Y9h3NjikGu3YkcAZXbj1tKsUPj2oYD"
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
