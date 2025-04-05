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
    "g7oXHahyE8nxwtR8GfW5fSe12pqRUGGHDUV5b5CuWbPAS5excG7751ZF5qgzshAMkMf1xWbjsTj97Cg6e3b9cvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k5QSM4oMDe6g3cemaT8rEB2ZM98oc9fBTq2kcyfcP28dPLNv8578GuoHSBHGDdXndQVEkfbnFLy6mprHo3DJ5Yi",
  "key1": "4MGw7hKD4PaHpB4oZvEJyb4ZPVkMfMALrFMvWWeXXauBZZGDoYLm6po3YgmcHzgmzEzFnLkHq4GbNHDkhNcnw5d2",
  "key2": "5TLcLHFQ6dZN5w1GbJM8bRRUTtw5eHGSWFnNuxVnwEAqYfH49nV2tEcHZTAcoTWUwaErySynBt3MpPyzunSSN2qv",
  "key3": "3z9btuU7c7HMDNCQE1s6CUbSVRJiACbVYVGAaTyGPowR8WwKSKGXSPc5V4dnYKKvVk27ys7ohnMdwLTGaNogRt26",
  "key4": "kSTgin3uSTbZB2tEbtvrUpjmSEpV14DnK5FT97kGKuGkHSsUwe8gaXt4nPugJYJCidxSNBMReAjXgQmWce2tPDn",
  "key5": "4rWBtmizfbqGzntHzPpZRfJTQFX12EDfCErpf7ZxdLY5pcnKN8BUttXLYogN1uGyr1LNrkBoTUA6QoZKrWJx7x9W",
  "key6": "4r7sZ1thY83jUKNE9WjNzoUuEZCjRbHxrP6HN697fd9HoCNg2tsUkVcmKza6Wx8JK7YZUu7ronitsaZZrW6CVWEE",
  "key7": "iAL2W4hXXwyBtp8G79Y29qRkqMt8f7rfvz4HogYAhPUmZNuwfpN4PPjunKVRkRmWrneCGScCbCfxDfVuAWnUL3y",
  "key8": "xiTk4rQqzFNEE4EuooyQBkQiBSgq6yVrxap11rPaDCEeuP9L51Dnr39Gt2JmsH53RvRMPVXQcJGuuSKjU4fiicA",
  "key9": "5xKuXEy9Zc46UJFucRPfxefR2R2PfTbZCVNzAxGJFovqtoaJ8NFoz9ot6ZZC4ggMngDvSp3P2dcCto9v9C6U2y1o",
  "key10": "24eQpbGE9jp9iviyECMmUVDdiAeFBF1z1qDB73TRi2k2quZ7tTa8hpY6PY8oN4qLZG7wG2t1xNMkky12ReS747sE",
  "key11": "5sk3gUyBhoqgqMfj51DCvXg3qd24BokGRcsvCMeFFobTC3WcxXo2Enep8GUPhm3iZKqfbaLeLNSv9vpDQfUnNGxk",
  "key12": "4mtYquhKJZoXA4c5kZenVz2XUXG2Bi2SC84svRtNrqurBCWvs5x5KfjqWHaotK8aK9eQRRRNTLpi5KA8zvYxkPWn",
  "key13": "5a2rrAKRNyvEMoyEdeJ69NNgzZnjSpQxXGp3zQ5oXx2xtBRoEopFofcXNmiyj6DosZsFsZ2dyGU12z6wsgGPuvW8",
  "key14": "2oCKL4mGynVBeDbEPTtt7wQUMFkgfopXwcGKhEzx7gF5owLKmUXGrWp6Duekr7LkL6gKstLZmdaQbaASqX1dyAFn",
  "key15": "5E2ucoqkMg6McxbB4TmB83gZQuWsZfebF7PrZ5hZjmYcyTYFr3gg8UYguLqKxZ4c2fquMdTSj7aQcwMvvfHw8Sk5",
  "key16": "N48NpJip1JaxubbEmhiKRjy8H9jECJd51xV4EuEB93ifJYHPzEW9oJwYADdu1gD4dXEcQM57GYN6TWddjGGXeZT",
  "key17": "4tLA5pYejD4LwTfypykxkPpt1fYEza7DBStL7FBjn8zQerbAjZPaL7oyKFkpk3cKu3qaPXTsFi8HbdQP9pJodg5z",
  "key18": "4XMT369P8AV6xV41ay1ihGJK7pwCS5P3LZC2ihc3m4Aecs9TDM2LYYgW2d1mNyYhgEYLxtxqR2zXUV779KrhX4rM",
  "key19": "3Xq4bYSuetnyJponTSutdS3F7tCPoWgra3ktTGCetqkNFtH8ytNM4jc7UJCVWYzU9VcW5VhhEfLMBWx49p9Edi7p",
  "key20": "2x9eGXUFZAEDMXmRzDfXWAjsZxXvSBvarV6n79ncJ91xbiiPbddS1xT9RpAeTzbGSyrXJzoGDRWV5QPoU67ShTAK",
  "key21": "G3nB6C8x9vTiFuedeCSzsorm2So3PGzkSkKisUBS1tENxfSwnAL92RWN2gTgjghJjaTXBFAybT1ZqYtHz81kXD5",
  "key22": "55pvdSUzUV2LRUbCS34BMXzDAYbrBzMWWJNbDqFKbkzCjmiZzS7Tu2LWGajR2wZat5i9xci6BaBatKxusLuVChkw",
  "key23": "N7WjAKMJonqTSdcRZDVkF7sgWGuYkPFCZHZMhjU1JX17SowMduFicH9Gk2ECAVEj4p1GdwDPHqyGKM6W7S432Jr",
  "key24": "4AAtRAf9gKTHhdmoWaD1SuEC3dMfGo8WVwLSYSYk2VftkrwgNTWsY6JJbrkVgVW9vQJ5Dep9JvCv5qkj5HRE6QFk",
  "key25": "4X1sJ3uvoptiWidhEhMLoNAV2jFX4s8QQmqzjtqnNBpNR7qvfs7xjXWn8ZdThMx9mytm8ex28bY7T1bUnn1rVgyH",
  "key26": "51uPx578Dc2hsQ5dLpchhqxxReDyMgsu7rjp2JbTBkQN75vStFsveDHMtxzf2xFjeKtYbpdZck3x7gyD5FD99CFF",
  "key27": "3tzStEnwSNHUg3CDR2kaTY9vqpMfpnRd4jC5j71oXd96KNh3KjNBdDyrm1XrJ7iGvMYKNqcbhdSp1KAUxnwKu4Jz",
  "key28": "kzbcEKrFnZLyXLjtwTpfdafrvayHDBi4KGzZodD5QneHGZrPthqkL7F8xZ2erTwqag2VgshgPu22MkykPxfRnAE",
  "key29": "2rEu1RbhL1EujUh8sfBD64AtR8kUKER6FWGz9rYA81F8UPSUNrPBc8VSZ9oC5nn9MgvsPiY8rTPgz28BSBecsgUn",
  "key30": "3Uzy4cd7ZNAj2ythXhYENxHEf1j62FBhAe6r3vbEKDbkYQDy749mcv3GQ98txJEfTBTGAjLyBQznvC3RhVumNR6V",
  "key31": "Hxb7RMKnBP3BMhH6YXfzVB2GiTpFPpE8TxpPBxiDJGTnMjEwxwkpVACBFuADrQ9bywRrSuRuVNmGcFkKEbQRdJD",
  "key32": "2tatK3DzkkJ1dVXQ3eesQgbonq3PFN8qSnzN5XMK5hQLhYAHw73bXMyjK8hWhYTVLWFzCrsaaqncv5qSWsF9QY3s",
  "key33": "3zakBDpxSNGHBQbuaWRus43Dx4NWWv2cKeAHhhXcBJq65qyprGhMcT8hEDKpCDqzpWT4Bowf7ac5Wp2D2oJR1YH2",
  "key34": "4EVygvEnRLwwNRrT8eA9WohT5wievf8QX3ukqTf1fusqBkSEkoU5NuS6nFYb7iWwdXTeamD8haM7sq7CCyixf3Kq",
  "key35": "5vKGTzubTZWfSidahr1aFGAVFCM5eF8yeWscEkLAqnZXTTRjWaWCLDkh1dRyby4rZPHVKPj3U3TsT2NY1frLV4V5",
  "key36": "227enZ9jLVxSns2cwyH9YJPbtNMuqfDXEnooprt964jWQxVcijSwPC322r6F7ARVx9MbNTi7Efx4QWe5NzbtUtif",
  "key37": "3jdVg7jPiQsSxU5crjzWtfqt5usF6M5GvYjcLt99xLqeQ8uVvVT7PmkZMuy9UwcDWiFLBmu8wyQD2fhZF83BnmMP",
  "key38": "4FpQVrdCC8REVNBZEW3kYogfxjssMbnBmTyDJNyV3LGkF2AN1PN6gYC6jByFRUm9Qp8jtp486rrQto5xDqJ1qMh6",
  "key39": "UBjHu9G3xSZ8eSPAJcqpBo6NTzGtu9uSfgQ3J2tVbRcc6v5UAdYRtTR1CH4yHfNwibrGZJNeCvsZiut1Pee1v3a",
  "key40": "3kqv95tji7FUbAwPaYDRQ5ji49dpy9ZcKgGoQ7EDx9Pftkq2Bc9kCmvvfTTUfY5d4L9uxtEnpdxphcjbpRtzhur3",
  "key41": "3cibLwQPFkqLoRi3vqHywzXbAY4nUHnXb57ramr2AVSpXarQVKJpvnw6Eb93j3jUHFG2RZoeZjW4ZBaZUFUmvodG"
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
