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
    "4bYB5zUxmRtjqX5oRrFdNRG8k9FjfstBN7CwcH9P5nfkfowdAH2qj5KJn9NXXVL8roYU88TeZkTumfJJreu2wTpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S8cew6w888WwitM9GgJM7UUcTceDhSCgJPNPpANmgydQ8dVWJaoRNXDRzX3AHBnr8LDiTs9Z1szSNhbpi8X3c2D",
  "key1": "4dimDshvnNNc4VEraVKvxsKyh7qiiM5pbSAZeZ8arojBBHs4udG8hC7tLUdbGDfTfW8yWoL6vSdPYVzVfeayRrkY",
  "key2": "yNgVzRd94NXtC6krcBRitthDbA6JLhdrXoZVgR7B8GUZGDD6aEGRhE6G3gV8tZFvKr4MXCzGoidfau9eaEee1LP",
  "key3": "28hDSoBFvgLFkY79R2pCnkej4ochcXSKxxNakxHq3yob11F8NdeciLZcu3Bg7x1EXx4dK2aQZNwPgjrGGq1PHp2L",
  "key4": "53VMq1ZWMAxbbFvCaghMmtz9TCZzgj4DqVPDW5LWjNKbXoSL1JLJyKFPvP41hQc6SMWe86qkshU5Kh3a4bU8NgHL",
  "key5": "4mCbGymtpJKkS5RUMyk21BbfB1tdzXu8jhxYECSjWSwrP2jG9M8wj3rRno3ztxEdBzNv2QsuL4oCnqDG1dftt2q2",
  "key6": "KUcDvhi4CHCCy3c2571Ld4hhXHKjY3Ty8zcAPmnij6v2bAzU6gVAXyChxbPb3HztmqrW2vRUUMSF3YnAMsPrVXb",
  "key7": "2CM6WiUYDYrhxCJjQUb5GEA18T1YoeAHr5qFSDhDNS7DBGb55wmkNpCgqY3CTZASUMr2DVhjbBSWz9iS8hERBmnj",
  "key8": "5J1DYuddsyYiYDRWhN79NuhtAtap6U7nNhAbxupZnsCzGmxJn1hSVhnM1mDx4NeGEmY2Rh3F2aLPnEXr6LkQH2SZ",
  "key9": "3nkTBe141Kwyt8VdqNCr936ZESGpFQHc4rkP1aTVJkzVV2Cuqr8gjTDBUFgY1pibK9u3j9uTRM3uQckJXXcNwCjU",
  "key10": "22J3iVDJ6TyKdmWLJh9q98WdeaQWEVkkyfditYLiznrhiokRnoXd2BiV3sNWDT1cE1nn9yqYsmCWcpMYptqMK6Dh",
  "key11": "4q6iNwbfEfJ6NGhvGYpP7VwYsoxVouYRMdtPW94xiDyiYmLMaKRwNhDxi2cJVvX4sRxDpYzj2YLGoY34bvQfFLob",
  "key12": "5SY8o9HNaGLicD952Xw2dsmLvbb25k2xK9zA3NafVN2hbFLx84AKR3dbKvLx3kYncZ4YvKrnxNxtR67G4TNq2FZH",
  "key13": "AUSXczvpuJ8NiixxKiNwshMGnXnAVQzPAvsVLXPDrJ78zveDnri7CeXRG2d1QzkFP83xpVbfA44WEVvrLFnY3HC",
  "key14": "zwrQ14GFfJ8qidf3RV2ub4ZG7uEZ7CV7PHRTsQNRaEViUArx8mdNGeAinLSyr5sy5LnthCDTHRS2MvBAo1LwYHh",
  "key15": "3r12cTJmQMiCDCZa6tmJMrDqkbzsd1AtGqq285gSf5JzdFJWiym4zWiqpunPtBs3udUwUQgv33TwB2zyTPCuo555",
  "key16": "3aLqZZ6AU7ZsUj56NZ2WxVaxW8GkDj8WoFnrGkkaknEQaaUGkjns6j1qZYY48h8X29miq9XGCve8bo19KhQffQcp",
  "key17": "5tqgyUoEZg45TSqWokjFZoRAj4UetPSRQwyr7Vuxh5z8n3xQ2ar2ZKqTNbH5r5mSR326K1nM8f7eVHxwKZHhScM",
  "key18": "BYtNtvQkXiDAJecZB4SwjojficoDgmiqeDAM2xufDpqCr3KixH3MerapWHzWPGZDWsbusXsasQvaJ2TBfU6Ag6H",
  "key19": "5a7wkvEc9YEBifz8U1rMxyoS8BApLj4EjVyeWApuinTtGuibnH5uypKBC8GJMfXjA7dRjJtdozC63fgNbRKh95Gf",
  "key20": "3QsojNu5emCHhEKxMYQWak3aAsttttgUNgyjfYxg1qKbMoN5WMirmzaEjjLDNQiNwxZjEexE8PbDwGrtiaNTQH3t",
  "key21": "onf65QasuqVay5L1tcSLDBwS5QLdfb8mXW7BM9aBJtng5sm1FKgoqWRyVs61RDmv6hAKmYVxEqHgZJc1Z9vDKGt",
  "key22": "2W9SFjoYdnF8BnvjX455pzqnrD2f6kYAULk3UQWdhJooLVZMXVJQw8p2Tf8tNgKauF8aWbZJamQ7dSRTQyAXAfCw",
  "key23": "ommWRhwVZBdktSUCuL3R79T1xtoaVBa8AGBJCX1mvt16HzgeDhHVZVtf8UKzXK8VjiB7RTn6siWNnTke4pR17JL",
  "key24": "4xgxbpqqxUJ9QUHGso8vPKex3WkoFKpDCFQo7qQv8jrCv2V8j6jLdVcrYeyw8ki5EofEyzb4WR46Eee1ZTAAm9rt",
  "key25": "2ZGpddwkqt5q1pSF1qCcxGTSRs27CjawAve7qVjy3uETqv1ZJ9PGNx6h53zoa2gkMmHSYLyJsKRHDcUasHPQ42Xk",
  "key26": "2VWVpdDr12SnFDa8mRGTavoN7JUQfEbYGhvpsQffUvncYcjkbbvgqNgLxhUCLgR9CmM9HrPVahK39iJqHwgMUV5h",
  "key27": "24yy9DYSb6M7H3SAsymT8sc3RCjVgqsAGdrt2r2fz1rhAYC2hHQ7ADpEY72TbRHQTrBzgAcBskysUeRpe2aB2mvH",
  "key28": "5Vt2wYPtvwsQJaTrxkAQZfm59ytXotvsRmvWUbvNURGGePVQqYqQTgxn9YqFTfmsxErEYid8VorrJ6V2mxtKjCyD",
  "key29": "wTzREgAFuLsJvkgB3FH83YT9B3oJt6eFFhhW6Mb3PSdisuwMGxcRieWMvWr57StXUvBGqp3TLAyN1GCdRuf53bx",
  "key30": "2R8EmnAs9CGhmLX5WGvaHGkf9234NHGhNPW6doMVd8GGYfbs9WtxJdDuJRddbh9yqqTwvxucpvSgQwrbTommVzTn",
  "key31": "4BRUMThxw4XyhhoWJ5jVn6fbXxG9xJNAAoMgzUrVTirFAr3J3zoVnRPo4scWvSd4gxodsniZzFNHnADoX2bBhSvj",
  "key32": "3Roco1s6oGr5atJ35u6Kjb9dDqKsf96ZhKwJZ48tx1o1ACYmaioWFXZysNQJDMQH3KagpEqmaQPXhKvxDRq5D1Pi",
  "key33": "3adassvcCa8LGT1X6jGExpqZ6BKRi6XisujFc1ybNrjtHUEzXvFWw4EnngQ8DKxcBTUpjbDCtfedKutCHzFtPj1V",
  "key34": "5U7XdvL6WseBM6aYfEJsYsbeCooLuX6DKyhtJnBcqpN4Um2LrCyotwWCzZbGyanizhMYpMRZx2PJ6SFKtfzVC47S",
  "key35": "2Z7aEuawPjZHduqJw8mgNkFsYesQmSHzXu72KinPLYWzCuZ5LPV6o6hKMBfeemoANwg5m9Kchchkmsf4juPnYD8",
  "key36": "oKirJ3wnkxRyNKvgGppBdTfdDBsBmgx6pXoRGQD8EyTrvmBNkGHNAy7UQuTZoFHaXfHzesjzHMopN8KiDvG5UKg"
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
