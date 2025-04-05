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
    "5fU5dRUYB9AKJQqoavD4qZCuifgGQTjD1x3qzbcaJurHAf84q7h3tYM2Xn9e7AcQibnaVuCpyteiSPhnCETTZBzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32hxcBZbaRsagX6x2RkuRG5zchf87nfgWeL61URPwvWRGFRt4yTR6phyLcwH8WGrn4dSECb78wVie2zhyzcpSDzW",
  "key1": "29GzsqCZpJGxoTYU7UFJrt269xCr8zyp136tqZAg9vZNBoKrjJdNynRuyrAdas51Xh8PsiRL9me7CztveWSrNtwJ",
  "key2": "2RHdbj6Mt3aVbjkzFPCBdNAeSqdY6bdWj3YTtwJrBPgeT1x6BgWpNcbPs2cJmr66DbWinFLiVTc1P2Vg6U1WHxxL",
  "key3": "KM66ki3ZDhA5ydiSbQRQvAFuN6ixFM13GmcMPbsjWxSYj1Dd8fLhMnUuuHmGDWR3MEJJjpSV2PHr3cMzpFZbN3V",
  "key4": "cKXbMtiFqKcRwUc4kdAbxNDi36K6BCiMn9ZeYZtfNh961HP4kih6f9PJ5WUVDHUsNGRSyZNAfDXoBjNWVspgse7",
  "key5": "3ZPfTfDy9fvjfuteFezA8RW3Cb617XRDyoyBeoAzh6FGsXCP61ym5gSGg5kRmwSheJdYMS3pjkfrsLntE6EmaGNi",
  "key6": "2aWbwUUGnBWCP1nPGGoopTbT9eyQbB8fJwj6EvnM4btYyqeNDkhPv71rKpV7NcW22QbhuuK9DdKm1UMXd4rd7pKE",
  "key7": "5uKsmJVQE9bFWibNqjhPWtrxbQVqd1H5X8HiPk1zAsASn42LMaBf2HU5UVJgxLVbKryYKSHPeRQhGLJvbmtf4Wqq",
  "key8": "3NLnEa2xzTVpsLzsJTDkxdejLNTtACUayzxGv3AwLJER9u5ZcKq6wYFDhKP8t6eqnU4X78GorPEVZFCQKNMFdDwc",
  "key9": "2UzemxisdUnzFD6zShif71LcXtKPRZxdxj4AgYWhWfx9k7DVYcQDmEZGgtmzvVNE2emiLo7xHk2RQ3n3mNNF71qv",
  "key10": "44Fxf3zdW2Ld131NZDjZm44Jif4KDjCd7xMRsrgwMkziY84oZ4vEG8H65HJDhtVxHm6zW8eJLEBuwKH3FhcBJ1s4",
  "key11": "328GcCBCEUua9bvcfhtqV8XwCtdpboZ1j839FoPJHBeFp1BQ3EYgTPFdAsti7k4K3yN1JVqkdfJS2sERrF2aXFAn",
  "key12": "27YigHRVzwE65CAWKmwQp8FARXcEEBQGSkqH5BdKQjxyARC5tpNCzWoVzCGR994is21bq829zyesmkYKrrwJfPbZ",
  "key13": "2SLM15iStcL34FNcS4539q6tayWqifzosPDNgsLjKHhXKXMwbyeJawVsqESFwYmYpM9G1YbLu4GVHdgXt1uQ2519",
  "key14": "4RQ5VyXtmFwK4StAdnAYEihSjixFDwpeNaSnVshFaRuhUGLYsx7W9AnD1Xci8En747WPrji1UafX2jRdu2yvrMBn",
  "key15": "5Vvckz5BtFZ7m84KXpW5L2oWTupMraFmyko6TB7iGPHrizwF7EV6fPNBrfKFcB8nYeTvZkPHChFSgvRC1izpa1g8",
  "key16": "4zhrXvz8Fb3UsQs9sRgZBpWqZTKBdLkgzzJc2KrCJ3xWVH4GZYpzor1DMNUhwhw8Lxq8cyTX9tB5p89G6DC1BpSZ",
  "key17": "5fW4Fa8xyF2ZmHvm7P99QCt1ffhvEzG5a5YgiHpyc7JhWCs11jSm9mziDUjMz5zGQq44MqZGKX448XqSE5mpUMQH",
  "key18": "3Eq1717xnu375odj9FZ5PeTHx8iJvoXBGywFxkLda2WqXS3vWJivkLkmKT2sGGvbgmzmZUGYhKkkUPGP1jFq7QtV",
  "key19": "3b9JSzQFUGxXYBvDrT2fodkcN6xDnhrmXMbSHaQjzbPo672zCYDFrwqz5Dm5BD1iwryRYhozrXL83zDBofAYrRqQ",
  "key20": "2GNWUx6XG72w6uWqdzdaU1JqyTfqwuYGLPHoVdZU5WRyNnboBKgoTerreuXKKGsvJ1n3TwTMYyV1WRfBGEXggybD",
  "key21": "2hbkMvcVEVRnkTJafDuCL3PYv6fcpWmf1nK9BFUzfxrgDt19Ejd4Sh7YGhRc85672PpnxYuD4cdXdxLXHoG1msKW",
  "key22": "vP7Sj1vRJnNvxgFzeynSHJQ8zvSFCPSC64LFzpkRK15v2adDQERtUZkHwuGUjcrJa2BhgZqni89vVysWHMh215Q",
  "key23": "xLnzd65zNmF4HeSaNkuPuQw4MXEWkqW5AdPkoiM24bSGjPLHhHjZXQVNY8P52nJvefTesxcvczDndPXssaifiB1",
  "key24": "3fABsGbAnX7oRzrMGYVUf1AHPbVqK2Cn3KQjhUZNxYGDuzxQtQmoHSwEqg4Yws74NRicZdnBtwmLZnVvBZx7HGWG",
  "key25": "2tKWNbTFXBFu4bnCCujLTKXB3CXq2oyf8yxwSuE8GgG1jhcKeQG1irQJNc9NzJm85Rq5viMCo6mnvexxydZTyLYs",
  "key26": "41gFgRcJ9BCFZstRogtbJQNvn4YQmLPC7AAf1ZJxcK1r28SEBXbEqLyWvFqctP2JeX1wjwxpWneGF2C7mokd3WUa",
  "key27": "2NDrvjdQVPvMBJNCX14tyKrskfVysC3BehznSvn7H7LSBj5xc2xd75DgnCFg397567bgxoPrvXidi7u5R4rMNyW6",
  "key28": "VPbVzTYzzBzHZtkndiF9cyijxPhD9wcTGURG6xFJ6uYjSVyGwZVs9kP8nBmyW3QdY83tk8RAZ1Uun1CS5jjLwyR",
  "key29": "3iYsGipKwAsC4GTEprHQDjLHCjGFHapxToEVBJ41KNpCHH7Tyze84jaon5B8cHYNvYNSDPeyt8zo9yv777tDtEYK",
  "key30": "sgaugpfssjNW9gdM7eaRZKfAujNsZgQZXiVnep3RwbygZ4uSyhTbpJFBnWaNnSWeHrUdYoC1Zupqc9zRB5DmT6Z",
  "key31": "5zX9heX944Uhmrpr8PgHkUh91L7DuP9vMcihcUH9TEetKeT7m7ToW34Y6nyKSw6qFiM8d5NXASrvVuG1SUs89Hnu",
  "key32": "2JjbXYETvPJ9GGLqRpBxXfx3FjwKQkXLTYPvMokmJWMLucbCsBQ1bo62SyEHaZch9H9tDjH6tVqNznEpnus1cY6q",
  "key33": "3yQDpC1pQ4jZ1EJJ7LhoFJi6t5sff6zKMxCgQkPK33imULfpY9dUXjzbNU5kePsHbeqg1kmnQRqtu38naTks28cZ",
  "key34": "fRrgWG5y7WQML3Ne9jGA8BfyL2992RBwFCvUDpA3LiJMSUq71qiiESSewjTEVkM7dSCYdAZFFHD3igUSTQz5AkV",
  "key35": "4jRMJCuBRjbSZpbJZCXVg7HtBfE2w6THwZjZGDKsa8Qb4RjaiL1FvH14F2w8TDgaUiB8uw43dt87mSNBKrjDXBhg",
  "key36": "2MQ6XnBynu1ZZbJoq8RHV5FDqsd6QNZpYViXTk7eKGvgtbPDopstaH5ZeDf8csFNAozpr4xBmhp4kWkyAW9R5g3H",
  "key37": "p6s1UCiviDH8X519RKBUE9YiBKDbQQf7FGksEpXNGdot8tYKjNjgMYUuHaEvKbJBGURbRcdqbCH6szJP4SWtSud",
  "key38": "2TjaeGj7TBppDSeBkR7hujadnQcHNBKojNXc6jsUjnpkbwQX8tLKYGgHJjGXskyFtu3qTNfS5Ne26GdkRQJfqtNL",
  "key39": "5U1vNd7GED76kYb53JTUeYvHwqZb5cGf5nwjnLpgCRNZxdAxaUfvcyovUxURmWUr62iMtcJHhV6Zc8Jv19ww5XYg",
  "key40": "pgiuyDk5XmkNtGdoPYvVK4dfYE8ujFy1YhRes6DvTGM5hFQyQfxd9SVKCs7bvSmBbJMG3bfvdFrAs7GwWmFFruT"
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
