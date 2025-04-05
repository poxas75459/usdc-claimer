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
    "2HahM2ugzhKsLHqAucK5sRjavibbNC3S8iTgr1zWhPotDRP28G5kyH8suV7Et59j6rSWUyowJ4h8wp8cmLfWZjAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQLWRF3FXe9rSga6kYTEVKfJdmEbaKFjxsRmzmoQEdHrNtK8pcdX15h4cNSQq1g9oD4Zk5Y4PLhkWAsYD3Q7K1o",
  "key1": "36rZx5YqUagXE2mNkB2Z5zsf46b71Q9BrajiwnQBNhouQFnVApavSyNFARfGG5opvdHvUPJQGzc1Tz3G3NHs4xLb",
  "key2": "4vsZas2aZEPXu8VenmRYA58agAZF86R8f9AMeHxqY57n7HGgDiZnL6pXNYBLBW6k4ig9FUDTR8tSV7wmeapsRq62",
  "key3": "55mTSnccuA4fzRjCkGWRqEwfBB2B1LAWvdjP5Hbbm2ANzpRZiQgpDD4K7QSMdYojcc1rPXcUtmzJx8o61svxwRNB",
  "key4": "4WPdtJkjTtxHP4Vub5rELtXGRVkVeetDYGfMpf2LeU81D9DhxWGxPbv1LKZJHpDnQCGwTUM2uroqtpv2wbZ1H43A",
  "key5": "3um7PA23U92qEM2aEWiuvZe78a7DaTc9MEkVKvV1DDBNpGnSxLWarmb8DMf75K12n61XgQQRVr8hX5gB6kfZgRVr",
  "key6": "W5v5bCkHKyAPSpXpyJBPKNgMk8GPioy8TnECm2cvkerDVV45Lm9bciNDh8oppwhb9HoKeJyq2RyjL6z878X7WEH",
  "key7": "3yX5HetJ1ZMRKRzQa94mx33xwpog8BNNagFPCAxQCBbVZFU4r1SjVjeUJPEW6C9f8DbDSYEfNVckUQXqj6uRqqmu",
  "key8": "4z2CkD2vgs6vWjYQyaN4CG9LqJY3mtHhYoL6aBWw5rb75oFPjsaYeyeNsBXwYUQKmqxfUUTFb7DSyJAgLxGomg4m",
  "key9": "41SziQR2hTMSzu7EG5M2cCU1GHYve5PEZtW3UrPhZzNqpGWrxWdgpAJ6nSjQj4JLk5GeumPUwwMFaCJm8oLHAAv",
  "key10": "2ga7Y6cWVtBUhd5BmY76RBYsxT2VJ7g82We2pbAeDDLSHkWb8pSXbNQ983UbHhbyhnXcJ4UdxB9vG5mLa3pxgSXP",
  "key11": "4GGaMCho7bEdXGG8wWPDrvMksvHmUngepkgHStx7MBxb8VazQpQgrT9EdLrfiPXKxemCHr7x2im5YrRapazULg2P",
  "key12": "217fzSFTfFQ5oLeYXiwCAA4HbveeJzcn4M7DLPFWK8ThnoARqfCogX6QWWLST2mnHEsrJ6bTnzYfV4MsqsYHM2zf",
  "key13": "974XxYK2Racx8NRUiQy3xdaevGHsQNhaG16ob52a5jeCZj46JXfhTLxR6HpkUvv6pcpBLHSRLNiphP8mrVkxnvu",
  "key14": "3DFZ2VpZyb3L6dSji5WWmMXCtJrxrHYby1FnREA4RrJabhoSo2hYFXL7j1y9qsArXrvBXjpSC3mGWWFxQtxkJH9b",
  "key15": "3tLb9pTNXua9vK1EohfyikX7ZEDi9WRcKrjTxRvia99LUyoaAKXfkPotMgz5c7pDZjhqma3yQ1fiph7JPqsfxD8R",
  "key16": "j9bNB7gq9cJpWHChF113QS7UshDtM8fFzWCa5Yd8Fw5s91VuRrhDkdtwp6muzr143psZAzHuU52EC22dtuitfzm",
  "key17": "5VtzvANbdLy7HvXyWC2gGTBL5X6QPE8BksXnopBRSq1pcdbXWXykp5s5qjC2qe2fRpNrpwA18s7eUiaXXP1XtNnL",
  "key18": "jFZCZYnRrDNwErB7wE2neG5urTd3Q9NiCaWCS3bd8qq7izP5RTbrdiNPHbK1bTg8oNfKjnUy5xCYEEngsocdehV",
  "key19": "3YFe29DkcHL72n9hanWHq1uwQWPgWJrx29FUCQ2gZj3Stoe4ks6RkTM3ajHaP8N8pGqhZF9TaBY5pPCimTUnDwUu",
  "key20": "239hiMVkYhHzXSzmQrXU3Jg2YacZSy4PBpwQpkXaJ8jZvC5ekdsZ9pxnCPt2fwzgJhXCECdjosiiyWJK3KBUXhTH",
  "key21": "4cxhfoejF1mQMJpvyo8xWECT2BUk77QQdBxZq1kU9JkF9otFYhn4U1JGwW1mAUtVj9TA4mtYb8cDCqbW5Qa4asRj",
  "key22": "NEdxLNMHXfyjXqQMnp6A1hkyshK4gSg6eBv1ZEyEAVdiJZz8RQUpUiKa69VSuHSau2W3QGu7wizYcihcDJqn2zN",
  "key23": "5w1KSWEeJjNhRdNm7XQJNtLFxuMbkQDhAYot7FtrYwVfCmqvYHmbWAtshexdPQk8T3D5xey5HfGrJcFnTREoibBv",
  "key24": "3ftoa3Gg9Ju9Do774YUcm4ywjzY5VKL5F93917cKeV71FGQPopzN83jVSCfeB5Qm3AV5sCFbtqfS6EKXPHLW7tDh",
  "key25": "5zyRyYCMBam5Td2WcBMSYo4Foe929TBW3XqnomFq29aFDFA6gvFMNXpj6phM1hnGVVbP5A5LmeqQQmHwH5e8cQiz",
  "key26": "3EY64PfdNTCfduuztmGaAjDytj2b65UZY6qcexhf4ANnAyjowoEbK4zDe2mweYzmAtzRsa1kFNPzgb9EiqFrp5Hh",
  "key27": "4GTz5WFvGf3dx9u1RUF46wsv8Z93QpMXRcvR8YYEnCHMqv8ng37FHfXiJxNqMpL6hRmqoLjxTjgC5yWcdqgMCDUw",
  "key28": "5jB19uWTEJGxhHq2yLL29FtwxJKBGGuEHE1Jn7BYn28cjUCuHghpqwXgkWTWMv2cWHHJwChxvGkLnb8RyAgsEpcS",
  "key29": "4xo41L47m2s8aBhdmVBWbrGa3JaRD7DV7F8XxY41Yrs9zsKT6WQfEirPGnVHEHoZwpkG8hqMPvibY3q7TQHhqdT5",
  "key30": "cwkUPCGtxFQFf62B9NLryr9tk4yjW8kiBq9QjDowG2foeURdHgKW6Zpje7nbbDyKiABXwQbtoJae44uRACTovFZ",
  "key31": "48NiR4gCkb1bYZ4bXx2dKKUrU15ZJMhRNxpz45R3afDqj6vUTa8YfCCvTxV3G76mfxbENXVanb2sQpofmsmw5XoD",
  "key32": "4YtKojE6VRxMbwEFsNVS1D31FG4MgvgbAmsLeQyvDovcuP44CD3pcTupPCMHXpeWUkhMEgdy2TaCCkfpC4i1eNWi",
  "key33": "329t1yNdGNG42wnxJQdvvA1kqMLuWqZr4jRQC2EzEnQXVdXy6wb1aduX1PffgYMgw6QVUYqwz27rvymj353UBYm1",
  "key34": "4QhMjCeJmjog7WMMeopm7cwHt2iEFnh8wWuHuCuZ8QqkULo3AAp8EvmZMZvEDtXQX17Um93WPuyCSBXDV272CTnh",
  "key35": "41HfPqkNJi5jqzPHQNJbF9m99JiDffYGtmk1Hgy92vCkqqnmoCA2qXdyRWpHkQD6wsHxTqjUFrnK68xrGSdTjWZX",
  "key36": "XfYGwEE8ab33ZzjxCa9Z5Gjpz5g4BtUMv5w6etK1x4vrHimvEzKVCfbq58dwysAsGBNXgGnEpnyHHcGFYmm8YYe",
  "key37": "5KhJxsD1mLQZATMxhEqbwoQjYjTMThrjVM94vZhLscnokDbrgZCQXb5QjuoRZm2e6FtLVhK5rnfTZpvbbsTLyGg",
  "key38": "3Q47LJrL11bRRBA2H2EkazzyHhGtgnUBtMaZ7WnJLadN81X4NWznY7VwfphiREsGBGESrU3MRy7wqDzrLhvwLcyt",
  "key39": "4VVDXabXZQ4r3taUj42yD7J2jSQnAsWudbnMFDSxrNyEjkfxJ5spXNUamdJQxPPCr4Ly7Dp4jZtuHeouTwvLuGD",
  "key40": "2T5EeiUzje5im4r7aHiWjcrp1vVBXxkthjzBhmhDvyxCFmBRmQ5wnExDLttvGiWVjYVsKMcUvSo41WVfXKnAHW44",
  "key41": "26kaHQPD72uNsZy3wyAcvmiuVWNd68e3UJSAdzyvcMjRPFQWiGyFX1aJugTJtTkRfNgzW7HQmegvduFJ2pv1YjeQ",
  "key42": "24rtkF6s3nAJtWWsgEmSBVNjeTUtgr4vrKGR1Pj6MCsaygGhA65zy7KgdVWeodPHYNCQFfkYnA1qHsBWoD51S57g"
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
