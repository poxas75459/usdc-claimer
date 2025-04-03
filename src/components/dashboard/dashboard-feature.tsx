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
    "5kEW1ahgTRdSZSS5U9FLQ5z3EcNTig3LvLENua96tLn2Jumydz6KXUuHaD6egc1FyETYKqegN18DUKxQUeZx2Hau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27gaEYSKQ3PT1vrZiYCWHK38zYA9it13H4bLLZ34TKKUZrTQ8k7sErKcXfmHqR7121TRpwBNYaUoS3uC9Wrc7tXJ",
  "key1": "mJhmXsyrSYSAf3esbM2PZ8rJSXhPbKfiCdjTNd4CyGrQeDrMW51DSFm5gHSUGYjvvtjUBb7jrEXPX25xk2D26Bb",
  "key2": "4pMyXd3tbqv7uqmQdn9hoQuoz9kPJRNChVE147LJh1GJgfbw4xJf9tYgRpsftCkqtqs97X4Dx5eydGpCA4yMScuZ",
  "key3": "4AMLiuoCHA8vtKS5uzGySr5sPxHZLfmgUNXMXkYrBPBccYtoeBndh2SmrcKmFpy4UTcXEs3hxG9P3MXkyPTipWt2",
  "key4": "3VUbjbQCajbBJRfRM3UMdTZAL4TtGJu2uQz3HwySJ7XWWqboy2cpDwWf5Fa6qsaPzvSvuw2nYR3aoBA1qsnL5mMw",
  "key5": "KsST2QjP1x3ScGCwgnq3NYhwKXdyVGNRz9NzDbHSzTz6g1GTDznLn2rVNCNf7GBtGyP35R9TAsE6w9adopEnHPy",
  "key6": "2yQzcLLmj4Qzsdevo9hSY8mxYdgCHetS82Uthh6exjki1HLjebcbg6L2zeDR2agrNVeeA79MtM8n5ofmvKWD8kH5",
  "key7": "63Jv2WEkTL84Gv3pUJbmnuanYHdsyQvR8WcsjN2esw96FsWLZa2L8uRJr1qx9a7oXsMtPpo4fecCYkcaHbEnEXxL",
  "key8": "46p2R6irdWw4PrFY93Vd47WMJbbWMsLJSdp2DxxTFAkqy4ZUvteQT6ypBUGreTsyUJ4eywxugfMZY5sizv8rnfuD",
  "key9": "2z4RHLaNBvHR4kHWz6x7CbQcoQstwbak9aFu7ryg989UqwftzmGeYkkJkvSCsu3GHVuxcjB6SYNJ5PRGRNCchAX8",
  "key10": "3ytZ3tsKfRyyRpeJXv5rn4ADPpaD4BcV14ke4g8kEskuoxSMiHvULTqNaphEH9Mw6Y6cxx4uJGX7hGP5pJpp5Hvj",
  "key11": "5NzXidyYrG8XQSR4N1XmYcjJVG1fnJAoG1CXRoTBP9xo7QEq18TCttdbh3NHxmeuvnNgqzsUaAH4TrNcLrWYhv8o",
  "key12": "3WEq1xpDCLm4sgBukMunhS6VmFxukypBeBFzGJEHvjHh2DLiqPzopRgiBAwSVHVwJhHRLtuceLNf3jS5gweDUfT7",
  "key13": "WpKT8voRhmRtvrTqkeiEjGEr4oNL1CuxKXxa4uxSSfFwVRVsEaGv1tUSGrP98NHFWFsGXtAyJGvDb4DvH7vnFKV",
  "key14": "2KNb43veztpd21hzciSDUAfki5MUDG5hwSdFHAupB2reVftRxZV27fUGQFHQrbQEWZawZwhcD6Kk3cF21uTCnGtx",
  "key15": "2VgiDSSnXD2WMUHutJk7kP3pvmSTsoBv2HRTb54fBLAGBHwcKNkVKsgeiFYU6GBSVcrFx8AKiXNjjHAeFqhFHGqH",
  "key16": "3uGLWG4K86wi3euYVAHbWC876HHDwwt9kMmRqCUZRUcLTsb9r8mb5tNeYuJhu3DMLYYY3Ka7bF9AwnZYdCKBNQ1",
  "key17": "5iqXNqHkLPLU89BqzM8tqPsxgGaA8syWVCUT4xsWvqr57MbAA1jSon5gYKTbnCpg2kGnTWHnLAbZkV9qnBYTwhvA",
  "key18": "4PTXTsjPTJVQywn4QeyHWFBTYVeNSiStUNompkttzADw77kz7gCAYyMFoVCP6iJK3KzwiQirUoecbmTj3cV5nPhM",
  "key19": "3tVsugpeXc62y2g6cbTxTJ99vKm1H631xsok4PCJaSMEH4m6vP7YYA6pbtDaKfi6rFchyJV4vxVHtEWfURwf3Gma",
  "key20": "5STLwU3N6edvqTVsiKwQ1FCkEwW26pJpnfsKTaxDwDRHmpSYzqEGaSiCyHTwxU6zpgojzeoox5CGYxNFi7YQRRSC",
  "key21": "3crS2HwUZ3fDJ99JQcDnD4oWRi5FGN1GgpfedV2YP9TgyYVyufQDK5ZpikLxDvA3YKM13N9JBMeaxQg5jbLyMjvB",
  "key22": "4RvQ8ucV9K5qBPLFmkd3agGi5oqbPi5i6uHq51wEQEWJTR73PKKYyr5tjsqFacmqhpKMMM18MPCmi7xxzbRyc3dz",
  "key23": "wXqaf7RFiEcNKAcDZG82twhgN9kdfYMXXty1abacob22jCDALWemoAWqJP2pLGAbTapWhcfVDEPxWPyuHJiRXsi",
  "key24": "67SuzPi3v2yebdvWCKdpbNizQRnfhy6tuBEFTDowkeFGPn3r1fxFpr5W6z7h6Kci5fa8pGjV7iBdjPmRwNCFNtBY",
  "key25": "2Vbwcq9kheGxPDSDaVpdQLKwbWULFpFR3uBe1ddArZSRcmpgNN4N7WFwWxb4s5T3CSt4SAtLAK6guorhFNHVuUZ9",
  "key26": "23kJLVtZkcccKSwGokXTtAL3WT7QtNQCp27iqayG13WA5bBXLe2DNbSnnV72UPyyLhGpiPjPGo3z6J4JUNEPN2sV",
  "key27": "svA552CzcJ87VvviKXPg2geWEGM8QNmvQCJwJJLkdxjkpg3nHC8cLk51BGN5ae1w5a16zzowY6ZPsjSFHTSbsqe",
  "key28": "2jYWXUkHSHaiBKAa6ntZRV8ZufHLa9fU8aZZ3dkBy9YjX1jp1C89mbJM35A52FUswdozA5y66smh8NTpT5P5PmDK",
  "key29": "2GEi84TT7H1oq11Vd9Phvcsfe7yVAW4mR7b1dL3uAC5uT7Zf4awqQ3wyA6tneDvBE7MKyU9kUBRUbJeLXJsFgEWE",
  "key30": "29kphvqCDjW1fqjmjkXgzeEJnnMShyz1Gqa8RY9UQJcrfXSkxZ5LGqh4FpR5bQuwTMbLgkiSqo69te3HzEiuS5Bn",
  "key31": "4gkFpQJNphUvCan8TkAHxaz8nEjjXETnHiWFqXKMifozB3LJAWqcFSyeqNprNJVkum4i92bw6GF17J3xDkx66VUH",
  "key32": "353HYJCE9tLAfR2UiNUFFyjWSxNv1uGAb6Mj7LEyzW5t2pGAWV8U6u6qwiN43dnHbGrBJXAyBESaHBZgiCFbThTU",
  "key33": "43zjPZsACSAPt8BC3h5xaWz6EFzGcopWrt8DujkntAadcJhKtzHp9bpCZfRT6u9dD99rTr2YYdddfzdfkqpcipKk"
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
