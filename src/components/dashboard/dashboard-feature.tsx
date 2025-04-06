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
    "3NqhuLwwUJfn1u56mWyYhJpYuWa45nYZvVcbMQdTGThvFJXTFxzWJpvm5zVjrttsAJhUb9vJXLNGqzGVgXMiTFa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LuK2pJGrD8ACDp8CAYnXTqyGWdAF3NjKLJ5KFcYX36t3BFdqVpx2jx6HwcfxQm4gPt929eEMYLLmNyH423q6ZjE",
  "key1": "53E4mfNDF3ikYi2eSPHqEQJ7cGc5Evsjp4Ae8TjppoJnWMzCHZ2pYeELXpnU3Qd3AcfffzkaBoSLUbeiRXKverAj",
  "key2": "mNq6Bk1mn4PEnkAAton1P8Dzb93vuxDdokcbP5kz9m3N95Y2KLmA3BW6WHgjyKQ7rb9ggiK6LKzjkXPkzM8dF55",
  "key3": "41o4cBAj8nx7dXgJM7jDrrLoMccC2BH5MV5EBWEKCvoSvw9kubZmZ7LHdVeQr87bUxtbGAao1rYdQDqvECBkGuuy",
  "key4": "4uDoHHHYmoQpFRyNUheJMwPhdmA4sAgHmooYFiNgUSYKhgKZvZgspSmma2HofLQKGxmZr3d32tE7jZas2LeMChGB",
  "key5": "2x7d3498rPmvmfktkT4SXqvc5xD1q8hqSNKzkMsZuDv92iFpwxa9jgCpVGL6EjQmuYg4ugo2maRtFrs6537msRdr",
  "key6": "44zki4wFs8ZE568GerqNiYGS9UFnW2HsVJ1nyCosbYSF9Ks8qvAs24ihjXNLPW37bZyMzn1sP1LwS6H8nDFdYWYx",
  "key7": "5gpjtuZ6uffpy5xCMouaxNum9CWHhS8fhm5TPrsopLc8gdSu69Si41S622UzCyUbFSqaAn6wKfFD6C8FqtyVFVcJ",
  "key8": "67gaUTUWSZX2dKRKxANrxBrfFQsjwfAakrenqawcGYEoszc7ssDoDgRFAGaVXZLDpXfBnoqfaKcipGJUfiqCiV5x",
  "key9": "27Lpmj2XZ9BMT4Rtnes7H6ZnqHgfmawjDQMFcYuzTSwkXEekrNR39dDNmMCNodAc6cDECnYnnWT1s9J4SbrsiyxY",
  "key10": "5NgEuYYqR2ud5PwRdeKHhPcBxTMTs1K7i6w9xSLz3qT3kZGyhsHUq41L3xXKTNzrmV7bC9XwgquPFzJqeE9ybDzc",
  "key11": "5WmbDT3vdMdYAGprWr4k2KvEbo1fu35kCmWgjdesqBkBYhddqz5iuwBVC4gGpi9iprwhsFvwDmFKcVNw9thdQdsX",
  "key12": "3aAH9yRdp99ePbToVbFJDzfPxdSTATUTxJjSc8X5Xc84GoziM4576oxKgm14JPiZUQCXrS4gxZSh7wvriBMfQmzK",
  "key13": "277ZU4jHtkZPjKD6NMj2zp45wYGfkMFppcMUYCxpRBUcT3K4knccwH77MPQri8kafrvnujCSva5xDBzcCfKb97D5",
  "key14": "vVR5HS9WBUjbQkmZpLbQkmzGa9mzt46RKs4ftfBc8thAZx5xbfuo9aR7wSkh5fkGKQtLx3WYjuke5KEEwoPJ87h",
  "key15": "29gcpoVRuJ2dXJ5e8JU8NmYLMF3PNwcMhqSBN3fYk9n3a8Am9pdbake4vE3ruGWpbUGq7QKTawpiYHd1m1DxVJ6Z",
  "key16": "3Zcrv9ikS4yLkYX4Vq5g61uoWJRu1488KLf2KfAx2CKp9N9tPByPKd5sMTj3UDhRH5aZKXvdu1ss8kRWh71NtabE",
  "key17": "4qoqdbtn59FAXueAQPck8wJkdf62FyZ9uMtAEgkiToWDhJmUZC76Si7mqwmahyFA1xLedb4MZxE9wjxiYeLYqCr1",
  "key18": "3NyxpdsJBaHqw6L6CWvHPyA3QQC5jxJeEYQnXQpPMgKsff4hESyskSxWsdiQBjEu72i7DxvhE2PyRHwResQMP2Hy",
  "key19": "jbeGEXAWJJPXfGSFd48Hh3deEbpB2t4RVP4qBr7y4Lu2tCJjtiLkNRiKgzwdbp6k6vxVTeg7tdqjTBoSJ8F4gPE",
  "key20": "438AxfqUa4FqjduhPJz31s6p7EsB59qPZtD83YCUXzD2kuvcYr9PGxHaspAZJXydXJNESm9SEr1SZQoetCHTrujx",
  "key21": "YrgZ8dPeUJJdsfHQKvraYzYC5QMkiEwkvK5Aghr26nRDPv3nkpu6M5442KyxvhQ7KDXWzQkhRsKAg9usCq6Rr2h",
  "key22": "5acu36GFNiFpC5MwWZP2o7nHZ4ZzNd7kwczAE8rhfq1bY31iFN71ZnpqEuWYzfd9JZw33VCmWBDWNapKfVfiXKTU",
  "key23": "5w9dTsuvFjtFgU8wZNL2aWkhUSHon9bP1DSYsbABnLXqbWuUVow6nGGqQPG5aQWPW8neNXSyFFYuqV3953GRbrd2",
  "key24": "5xY6wcfzFTQ3bv8Q68inoyZ5isnPujdk3iAZiiLv4yLmo8W9huZ729TWdznhZvjm2EXyMuGMgY57Z78WFKCX39HD",
  "key25": "5rKPrFnrFutpbQ5vW3h6r2jMLp1yySAWdumu5oHygFVH7NKTWwZWW7XtP1LtoFvCw6VxPEUG6Awy8fDvkYWxbTUW",
  "key26": "zYp5uuxjnXYDpvX4yzYexNU8uCgxydqynFJ8TiYkwLmcZxRkGjcVuRpknoXrE9a7GHKLxjYX6YRECXDZRsjCMmm",
  "key27": "4eiho8JJcvX9BxKPfva17K1dF7KtC6eyofspYmDEah86jKeUQQszCmc6cU4GSWNJmmojk9Y1reRr6A6o3RzQvvum",
  "key28": "37dCQUT8RWAzPJU2Yq9FGjGQQuFaPAS2MoaCoXbYMWFnbZqByDj46nf9aVg1ADoTCbiDjx2m4FXDdNkxLEKoEyHT",
  "key29": "3eZhBnNHHrMxC75SEDkW2ZofcDfeBcjbN35S4sKWtL5F4ZeEtNiKUSLrEk3TZSsoZoR3jcz2Nhw7AaH9oU86Xwuc",
  "key30": "wiVqXD1iYde9wTc6XGTB1Min8ng7TPf3oM4xQPVRVptV1DzjTbPGcAtoRtgyvnMUdwmNPrV1HfNnot8gxUSdzwz",
  "key31": "5G3XidSYTNSMvy4Jsszy5iuo9TDDWrZX2NddiwZrqKUPGzcwJ2Sx187QJFctG88w6HqnAhtMcMgv8ySUJ8djjVXS",
  "key32": "iAENTvRnn4Xp98GWhBzFtvS97UFp2td9ogL1DirK9BzwWRmyLUabcpGPZK5mCkxdwCgb4dyUyQJzKqvogkDCRwJ",
  "key33": "1G4MVtqNmsnSbjmjikKbb9b7rNtu15u13tsYCmGTr5Ef919GCyYLGWfr8qXq7vL2MucWwc6nHy684MWCKVNDz4U",
  "key34": "2H6jtvQBQJYTVJmJZd7x8bqjPB8jaJEotZwRAcTLkdtqjf6pJQw8X6DyBq7bwqnH2QAQxxamA2AsoWLCZCAxbQft",
  "key35": "3LR3XRWqfWEjtYATxM9BTqgqnStrVgsTUmnyxgzi67MeWVbeDhhHyuvu3C8PV2SAChCjupozEW7nHsAii81jUUuq",
  "key36": "36anGj8uHtEFtNQi2fW94R929z6zTW3Nw3ajD1ZBYGpCnPAzmWc7Q6hkMz3oYqfsqLmsEWP9goCYpf77dLkaMogk",
  "key37": "5wuNYK2G2CsKMwGCcHzj8weEj4fPX9AuZUYMugQyoKRGrDpa63w1E7eoRMLccrigTLGxDRBdXeTZVqsRyi7NXSF8"
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
