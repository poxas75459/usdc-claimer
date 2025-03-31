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
    "26YLh1xxy878G9s7bysU9nGKbpZQYFjm5rHdC2yvYdmmMpMvhTnWdPKHKDMxB38iVJDGjNUpMzCLyZ26LddrnBB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJhx1b8nNA6Vf1yPVhSNYTnRSqMVBkF1j9vpFrcm4gW2BfUD1fwEZaMt2CKxTgT63TCn9L6iQFuYZ7JYf77fsp4",
  "key1": "56esUkySuygEHaVD1qqYYKn5GPvmCKuFQWKzMczQumWPcvZPoTSYQtriJK7AmncFNs9Zsw66HEu5a3aFXhwZnsri",
  "key2": "57ysFWRrkXGuYRcPCwCFDzXfbF2JtXPaVnFsDYBEpNbWbhkjWt3NXmUFxTiLWLo6FNb94fXS1UpvkePuTqhXnu95",
  "key3": "64HVh4GS5hW67f1zhmD7HgJNpTFCgsLkpKRw6m6xSgtEDkMX42uuMFSv16ZWrCzYfGkndUUWgUZVhGZ22g6AuQ1k",
  "key4": "4F5mjfhMtUvUCzEVMwBCewb9KoRUEdQqWNsbbZ4mVWhS83DgyhUhPZHcSGqKdiHHn8cwTo8xWgbMXNER7t5Efmkz",
  "key5": "ssrqEUBQkGe8j5Qw7cWAnfc1R6jSTEXqZ1DFpeSt6eYDM3jAzFyJSzrqSoCbFgRHtQDC8pSdgS7UXkzQuZiSaUN",
  "key6": "3eFAvuw7VZG3F2GD5pM2PoJfPzWF3cifDrheCYsCNtXzkaYYGzk3PT5Dx2t8ugC8aNqhJ1wpJe6DA4xRd7JXpGQe",
  "key7": "FYWRzgiZ986FQP7byFHYhAd2qgiSs5mRdZwH9czHytEMqgJqpV9Qn7RLGVYcnzXnAAgMgqcN9m85BTa3ejYLd4m",
  "key8": "47KdoZHqdT1rA9JABYzGyQ9JQ3KJpMCKHVxR74F7eeLwUUXzkbT4tnGn74icjCi9r3GroA5iuytYVqrpctbKuMUY",
  "key9": "28NZq7UAsxkSTxYxn9PL5pUMaax68q4KS13orWpxNr1VTGNaq7JTtFH8hjNCUA91rvYPfdPK8fGP58KuVBzDdy4H",
  "key10": "4NYPJNEVAYG7MuvBP3Qpd3cTHVhZXs5rysGrnFdBk8hk5hMPsCoLN32ptJEc79CBaZf16mXPqYkxCpbsidA9i7Y7",
  "key11": "4TLRW13sGhPfv7aEtjBcxZNwZpbEQNsg6mEzvgSkhtV6dccCBCRBAS5bPaH1rVMBohvBnC3RjwWUvLvdkfnrDAGh",
  "key12": "f95PGk8YRPeY46YN73TnKeCFtHhA2fAg1Hs5RGw7uBn9a4tHFeRRWyR8KNwVBL9Vnu8bqsbhDaMQyUE9r4ew19d",
  "key13": "xXHkZiJVuKqmUr8MuxkWcrDx9e8GPz8HyMm3XZqDJ3M31DmcELS1QJRqZxPoYS7FHCTJifDNyp2kcNewvbZPpb1",
  "key14": "34AdjmT6feoXGPDXgHfNk7Df7yXMsS5LiptCpiYNyqcVKeLVH2Tx13CdQkEMfgD21LjASWxszzyq2nskWZrwzs8e",
  "key15": "4scoQWFvVBVwndZRMBtp1oXSDj5jkFUeGgLBnhsypupp8V2EKBcPQnYXj4TiGuKkJgTfQHxwqdMJndV1ckzV94N2",
  "key16": "KweRp9iUe5YFA97nKRKBQGJrvbFPiagNBiWKZZDDWYQu4TJPfifWGsC5X9Y22FF22sV3X6YxxG8Cckin1ivzCNz",
  "key17": "kTeDyEgg7VAJagq1yccod1rBqyoZ2Zv9DetvYcLb3pRDUCfsRe8GqSiGx48PnjcQz4vRzDEnAVebmD5oJGG4ukA",
  "key18": "wPkfKqLQZt35U396c78h35B3QhNJZNKnBFvFPUwi2exuCuFGcUVLCnCFuDLqNH1Wgrta2w3sgzTx16jU4uP7w9G",
  "key19": "29wTvp1V24aGNKwHH1MmcmRpvjJbRE8zWutJKajXLCvTbUvWwvGGvtYvoNGSgYLszUWq1Q1yRcJvKtAu14c34zxj",
  "key20": "3H5PkhpuSGwfeSqv6C3jyP47WVWR5nLbBsyZeYP2z398imW1czLaSLcY1jCr3svDA3TH9uRjo4WU9wQ45aB3mCqP",
  "key21": "3KS7EM4mpZx5ckdSfqdgAhgz3pHzGG7GBBWYRbKayHTjCVpZcg1U4tuPHKiW623cEgojYjhz5uF2Ph11cTKYKyJq",
  "key22": "4dYnkUNw8JwGEsP9yeQygSqsNdZy2a9RtLNc3vcDQGkgeNpMTLaULSRW9kUAY2JFVdug2t2paJAhgMrfmzMrTNaq",
  "key23": "51zvuGYDgMdy9F85F3tnMfWXm66zaSoDffhhiJc9B3PVNprGhSLpiDnqKQk3YYAzigEchjJg3sv2mSsa247FsoRt",
  "key24": "28XiuNJs92xLfeghTkE1pxze8eYZTSFLamrjwNYuHXVDoNLJp9N7S6WLshqj4C7TbgdaTmVFfeW6PgKtPCsXhU7E",
  "key25": "kpg7v5Qkt14TrVMCP3J4gzis6AMc1J9tBuTBLAHPv8Eynid2gU4Yp9a2Xk5CTjF569W82UqBbzbuXRvcB7Mxwkf",
  "key26": "2NLAzfSUxZz8odEYCfeqZkNkrBrUAX8ny5Gmh6Pm9jNVivrCC8rZ5mhz9Nbm2xrtQKqVkbh48x3yYN2mBaSJV6YS",
  "key27": "4kMvL6uMWvMHT1XBZ3yTd9ufoeUsxdvG1yDNQY82KRzvhTum1gs2KkTDjxPKZVEebCj5tzQ6dbZPsA9VhGEMZ3C5",
  "key28": "3ekCZhLD3tGguLzjtWWWBy6iFbTYvjBHSXQCR2pMSRLhYsJCxUSiBVqJcMCdTDD7mndLDHGtA9tmx5byCsJecYFR",
  "key29": "cQtvG4izBgUSeMLKmDot6PeHH48DG6HRvATXhiRuHC4m29PBmea7qqjRHmPFH6v2kVomgBWSiuHFAiC2BhB9qxL",
  "key30": "5JNMqzAfALVMAHabHppX8DgmUdr8EFANA7LvavVHaDusGFuxokyYyoqgHY115V2WntBHxsVJWDi4Z9wkTDBhjXMp",
  "key31": "4zAcDhx6qvmbyZkgGcs8YrZ7uqnwUW6gvmr52QragSv6tN1F8GNpvesFb7vifATBs3Zh31twttzVxo2JiPGsev34",
  "key32": "3RnWfSqf6FvP87X4xZYwuzXNzHnispvabQ5pJPp79siyiLGKD23kG2VMaCyPrmQsh5WBFjUogbcogCeuiauREt4z",
  "key33": "fVztkWmWuTZgTM6kuQLMXQK7o6pzok98rfFZzWyvxVMiJiXZCvaixhrxC6EUxiL8JAabF3xd98TwcF2iCqkoKt4",
  "key34": "5mCv7AMq7M8UR6r8bjRmk19WDByP64o5muR7mojvr2tyW8r3V1gax6G9JGyyoD5rjtCQBJe14y1w72rarLYJn3uT",
  "key35": "4x84SRV68EGgKXYjAJeyz5xSCByDn25duDdN6rFgbJ1hVnEpV5jxyGhAcFKx3PcM1tZehRk51gbGQyGPqVFJrPtd",
  "key36": "3HedkNb489fSTTKFmoopJeQcTUagHE61HTv2Brt6DNwjDKhrGW51yifwxqsmXuUm8cGpX5dtmUcwKdvKXdHxzaxF",
  "key37": "395p9VhqDEdgT5ddQBzB8TEyFiTnoQnPyyb6pVNVEAJvDEGq5jnV5oB1Q3HPN5rfGvWgpV4QRgBp7mH6xoFUB22m",
  "key38": "3Ka2aCeT74wDAmw5qiHkWAxjcXQQXocpSj7vmgowDmph49KdQSdzTqAPSeqrtCEqbwkGuwbH1R5EppAiCCK1QEHt",
  "key39": "31SmAMYxyEoLVEYpFNiHMe8izS6WQJm5e5L57oJqd6fd51z7d2aYofHdXcWXfPN1rfCpu4A863rYvG5eaUvVZhT2",
  "key40": "64AiQGGgfU49BmQ3WdmxKVMXvEceFsZf7X9Ec44CQJGcK3UhSdmJR6o32RrgE1pswJmTDocPZemjKV7NnkkoVEzr",
  "key41": "4MEYxr3BXQWmSW4YhLraQouPGpPgpTvp8rMSznHGgfHHGGoFUMLJmWkR9GZ8gVwU9NezUGEHckithXKq6yuKB4hS",
  "key42": "vFm3ZvnoPWPYSCWh6vTEsX3i6nbtFU1tqSwTEyoqHrNtDNBe8aGWty8cEmmNRRFtTWkmcLy8xcfzmsdDgbt888n",
  "key43": "SEhcqeSTFb9jVdgJGbk1uXGjXHkfmE94fePPNdpAn9cT9CV1gfEgVpM6sh3uwvWQNHVoxJHpvbqunY194HXmDCY",
  "key44": "22F1K8stTG8fswXFgb8otuPCXBYLV8cMqLnKjLAhDS7grXiaHjJEvthUBCyU9dv34qYXt8Dh2ZAXqPZyxAbbC9mS",
  "key45": "fjBvRApRWh4PweLR7cbPz8zCTsYnt2S3Dqs2ZACSKpjf8STtrMpyUuBchvvdF5tXQUPSA8pCgciKMYBeVqZBZaY",
  "key46": "3xeHmvadcVt4mQsVKyYywQvk9Q2jJ3XrdDy8poWyDdxU5r2ZiieQEqeaTaDvChFryQ5mERw91MfvFnxjbjQK6b4N",
  "key47": "3NaGbp4iSz7p7wYBX1xgEZBdzj1xEW5JaU4f4iEcXN3dSrWdDoPaB7a95nskVWXMtkXZXoGQ5kyXxHHYQ5Ymaie2"
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
