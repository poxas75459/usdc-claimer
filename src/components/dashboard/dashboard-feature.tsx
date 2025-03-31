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
    "3n37yiFA6ZoQEnPJ14WBFpXe9vwfUxm6ApbuFNjXCzbUnJF5JCdyoyXQ4ShtypKdaX9dooRw3zEXwQ6siZXZa9hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zawc8MxQ4dSDWbgB8okZHPARYntDD7cdbW3L3idjURUEAXULeU721Ncb1vSBfAGDtSnHdV5LVjDKfn4j9Eu1Wrn",
  "key1": "5mgghbx8in4BY14hmKw8i7rAMBCzQ8eBDRox4Y41NuxXRn2kwBjTFkk6tAu813Y6iRPgFK65vd1HVtnaGckjW2t5",
  "key2": "3cjr9eiWFieYeY4APmi1zXEBzN2Yhvho2foriaRkjJkb4eVeyhKB84uzMyGtcUwEYR4792on2NH2UH8j4qvVJSE4",
  "key3": "59cz46GMwg8MXTAxW9VVRQGere3XkBkZ3bj5f1kCUDvRwEE8EYMAFoHPCgACxk8JUrDor2gkE51rf41rN7iGSJ4b",
  "key4": "4axaEXTSzXcWuC2KGBH9d19JMs6fQpGpjiMxe2SX53FvA9K68roGMKta6BTpK4txtLU4yq1H7EKL9vAdjQJE6mou",
  "key5": "4C7VMYw2rzPein2XZzaG16fzZAXDEA1YUk3AjrDo8Pu9YL8EQcihRB9Zy1kuG7C8tsWZ4r8apZ1uFzR9DRZsuum7",
  "key6": "xe1XeC6ZmMYuMs22ftbNj4dxu4iUW3EecTaybpXJYrx5zWTXeqvKe4zHrz6fG7PXLxKe9FuwiNnve9Ebtvm5T62",
  "key7": "3zcpry2KtH9Sw9XdAMavmLUuVWPSDREQ15SuE4aHaFEUA4JFBNTYyVsbsheAxEL2GrD3pKSvSEyN8M2Cone1qQ5g",
  "key8": "38sUXmts2iU3t6EXe3hbn6mw3WobJocCTrVKt6cg5jMdYKYADRZx57yVd3kwMoUuCLtWkkEFwFuPKKkWj3fRqna6",
  "key9": "5whQZcLA8ux49ck1uyEgyfdNFofCmKp6yt6DxuWwddMskUvxEb5E8MMHpjFNtv3Rj932zFDzAwUedmoiZonhhWa1",
  "key10": "3Dy9nApwaRqtbSAnruzSAKgC4UPGvwmuhQ1heHydH4cXJt5crgqudDcoo9fCxPUcxcbNj4fWPzV1gDsHQ8s8qZSH",
  "key11": "2nLd85ebNjUXUHtrVRu7rr7w9MJb7JvL8xB8kqZyU3G8xdCYvFggXq5BYU4nryzFC46xGyEKQY8yfXWT7ffqEgB8",
  "key12": "4qhpeFwHFsDbuChseiG2zLGyjkvRqTqYfvAmSzjmQm2sPqbAmjGBcYyYUwxqAdHWp2CNaf3MQNs5BVanckVM19mH",
  "key13": "5xVqo5QgbixsdquH3Yh6LMQHVzKpMhjLQTaPE9JGhLPcU6T4fxV8h8pj46m9kr38voXaqRMNYcWVk6m1JuKtMPPE",
  "key14": "5GL5Ji8VbfDvmsjeYwus3LiMZYJJ8WshfwHnspnMAEpE8skJ44XPEezwXyL7PkW8FkeKwF9yAqm7knMAeQkBx1yk",
  "key15": "4U7741c2ssj49w6v2isGUj2xUPbApwsfDBNmWT4bgcrY8Mk62RfN9MkXpdnzrUfHVZVipTcLiUjVw7EtULdyJvzk",
  "key16": "5Eak18D1XL4k1bwTo6m6dQCz1A9KKWUSueWAeCcdbXG6WteXAyFRFuH4GuqS4AqKpQge2d8bjXVYCCEJDNbSwZ3D",
  "key17": "Cce84p6HxZbBkgan8LqKVa3L85sx5VPEuCDkFByqJWMzT8DMt9kAwgf9WqkXGtWpXjdkzZN2BqovvUr9rtqnVhn",
  "key18": "2ebXMYTwHS9e6xBoQscW8vHSB4uorpwvKkgK356gM52WwAT6KYdpMbhKYrhhgyHG97BjLeJymzgWU5mdooy5CrQJ",
  "key19": "55uXezfX92c5fSXq7qNPkirNoztzsQe5GnE3WWoARE9TmMZBVtXVDBEWp5M7bGByimkMR4SWs7xWvRynpjYVeELP",
  "key20": "568R42G5CDdXPRaKb3TZrQuHbZrxZMxz7JMacRJYAFZvV5iBtCFyqyZ6kpBG68dntEAEJScQ7cYFBeJqzXMaDBSY",
  "key21": "2h39vpbvZ2KBRvQTCyzoyg4XSaDW453YuNcU22VNvGMvBKWbGpKbQ7ZKokf8ykRfD7udJctH4wcvuCoosvKBe6TM",
  "key22": "3xAym98aGReNCormHvv3Ni79iG7yCb1PfFGQx1v42fCA5PLHXczc9ezZE4j1NDxf69NoFD9qCV4Xgx8tkPy2uoYk",
  "key23": "5esJPmWLwEQtuVnkRuEBNFi1pxTiPLbDWgqmP2wWRPFeGeXKbUdeqiRU1t2xcEKikjKVQ2kbkpViC2QTfAbAW7HY",
  "key24": "5rn4kt9fKnRLAnd6RAViU3cxwitSc2jPm9cVMZYNXS2qJfBZZXcB2judeJZKcrGz844HL4zxWD8XVCcvh29yDsUa",
  "key25": "4bXZ7kTvRrZ1KSPj9NbiWV3vz579igRvFVF5HWN6VMwgfvn5vaQgBDFJxgNWk7t6bnMnyF3bqosYwP4HeR4ogMbd",
  "key26": "ZAGrKwXMRDB91btraH9HGop1BvZqMh9eCRcqEauicobjdowCeXj3CdXGWJ7rPLJj7MWPEjCFqPGMAuxECo61rKx",
  "key27": "4P26nmEzWWatMdH5B3o9bbkoBHPHow8vyYGjjrmRXmEQoRshyy3gxnQ5oooCU24Sa7pQ8kvS4Jj7n9ppqBCTibsG",
  "key28": "3SZaqPvT7JmNYhGurBsBpRFrdhEVVq6aCYdakJHSLoZacS6gpGAzX8Z3XkwReLvFUkJzvBKierYaCfrvLnBha2ab",
  "key29": "2gjynUpTTPsd5E7XmdT5LHNKcF378FPT8MJe5Jxbym7DkcmP4vfEUysx9xbCiEKKB388fJbVfUaXChm6mH1CSfDT",
  "key30": "3jTWEszwQnkt7QEuh36UHyNw9SksaeJTjGcCvuUPnBnF7wzXr1ZUUevwW6hZsdLqcaPX68BYp9TibWqnAT7NuPmM",
  "key31": "2mdQ3fykPBgBqRFDa53y2bFa5rhTYdbx35tumZt8utSjLcXY8rkT2FVvzdkRF27hfrPL76piTgVcuCbTfPjyf4em",
  "key32": "2fwW69559hvkGRR57REQirt6MApjDPpkikHxrfkrR7agUQamkUPbNMZX4rnRGR188qzw8Tzhi57XH1D6zmdYvUQh",
  "key33": "3hxVMVfXBwkeMgT7G4YWfyRHa3S3R4PQSsLF1NQxSQDj1qo4Uarngz4FJ4nqSnK7GWfhW2TKnfkMHyJSJECXHovh",
  "key34": "SZBbbCipE67udduKyXg1Asr4EnuZCMVHdi2dRzLV7NretqXVqqQyQnY4AqunL3zbCzJuYLAt5CVXdGFUNueFGGX",
  "key35": "2T7jBcBtFDYkdJhHEY8mfKY85vzLiGFpHHPcRRJ1g64gEkU3H5xwGCSCfeRqTpzht7v3p6xxdjCJc3ZNYYviLqL7"
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
