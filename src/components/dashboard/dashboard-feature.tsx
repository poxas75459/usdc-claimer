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
    "2hAiQVFRUHdWZzXTrGVmuuystRyGsHj1F8arBL3wiQdYUmc592yU3e1Uw3LuPjrGqAoGcje37D4tPAQPD3PxHKib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5yvWhHLLbwvYmFSTjw99DR41qM4owTinthYeetm3hNGVA2391tio6MQREpfxjtj8ukTBXN59pUjzWTwLctX8QE",
  "key1": "3JfkEKPReeHf6iLhE5X8ePZL2sZP6kYZJkoA2kBMCxPxgrTnjT4ygCK6v1Rr8rNEMW2bzGHgojz4k19C3Z9wdhRQ",
  "key2": "3FyZ1xr1tHa3r4zfx8Bd8UQVHhgvNBo2HfLJnSpAH7UaqW2CPaNwtjSC8t2r2rfm3qGPvUdUyMSBrgMiM71wkV3p",
  "key3": "Wkt4QddPuG52SUu6tJesqQoxPpnCPCMCU59kCcW8fRcQSoevHK7UVXbvmjjcEyvE2p4rdf7GoDtUnpLdCkB39iF",
  "key4": "4Tkv4gG9nRHBXAvTgPVjmW8kaBP8KQCGaJw6ZBuMPCt6Nk2bJMbjkbmaBG41th5sjBnNdxBhjaNz9kZrqcsezcYb",
  "key5": "SXCup7fvZ4KCcB5yVB4bhvC2XmNXsq3QdmtWjp7eJZ4SYEeAfkT3oaK4frmSJjYN77xF1LE5hDQgjXrs2Ebtejc",
  "key6": "6sF9uQv73vPxgtDpvueB17CE2E6G9U5Za3ry6DetzhKo8Sb5wbGuTK9HrCrMtBw2Fx5zEJnKNRrgCzTSiPKR86w",
  "key7": "122En94QjMiraDVDd7Y54UNtY9W8jv5am4MCEXRUYs8HSqQvnLjsiavFg8aAUR2qnWK2vpDmjbjZbzqz7T6CpKZq",
  "key8": "2txmLuhPfrQ1nriYnDci16mKpPHvSr3WaMuFsDLVzpFq6ZYQETohMGBhrSAiMN4yxuSjo1cJiZ2eKLKe3dafjdHn",
  "key9": "64jiwg5E8ickpa9NtyGa2zvzxYavSzxMW8jesrYzma85EdetsM7dtoL73g1ccih6VUswjVQDwoRiirpb2rMqZEfG",
  "key10": "T4aKAdBrcBAh4b8na6utR3sjEFgThhQ7dUVFqJWjErUcqTFzR2i9ESCMMtr66qhB93UYg49kCRYgnUmzkrFsSvA",
  "key11": "2geYBkUycbKbgx8eQx3gCgCoUf8yEEUPCzDmajD5Nq8wVnT28771wCLUK7Qb2qXP4sdQdR7dSQ4bPNbboivGbaRZ",
  "key12": "uFrh7xgBNWWbvmSUQyXLCr84KSGWDB2sxfNV8ZDjehYbDfAX4Fz42nTVUWdAroTaKaek3jrf7xANEPVs88V2wEm",
  "key13": "5rKVkBTaTPmvjqLmj12e5ZtUG6u7YoXSN8iHaLjsEjjcDQUjUfsxrhRGQBJiTr5kAyShhuDmN8Hnm8Lq1Mvbq9Nn",
  "key14": "4QtzQktj6yCGxJPvKvDDYw76yWWzJf1Fr5QSsmUobL6HTsmeEZgjKRB8RbM5zBTBeBK9FAHWxoyGdAGqcfdtY6PS",
  "key15": "4wtYmKhmPSUi8kTwki719QsyubZAP5of2PD3Ng1z9sEn4F9tp8ZQx5p17hVtPjjSaGrGXFpvDvdYcDHctMPGVNw2",
  "key16": "2aHpwYCoenFh4dPuXUHrx7xL7PgqX2gK4gd7vn5oqnHAZYvF6pYnz4FoD3LsV856qV6xuHWpauxhFvXSbjurHUQE",
  "key17": "2qV8YBuvA7RpmkBVurXPyZgAKk2pZD4iuRRRhfTVmjqSR9DEgLfzxKFQe2NyTCoFrPCLHP4vNn6EtRbEKs6R88JP",
  "key18": "2AXwrNS4zkpnkym54kWN6sQergUa4YGL3ipHg9Be8AHQ4zXUYdnQdR8eWLGe6uL3tT4nyxXUeMkjC8R7bq8qmH63",
  "key19": "5ZkgAMnqE5A68Bud5jV4YB2vLFuVQ3nUgtNzRnqKErhbZK6BRLDeLVtEVZ3hULGVfhjkd9QquNF5a4wUNjxrVZih",
  "key20": "4N6ziGbu7XzhA9Wem3u84PgWEW5gjqyYUTfhW4zii1XuwDK82qqwgBGqegLg3nGuEHKYsKvvpGBGkKKJGt2GCiz6",
  "key21": "5TEsJAhqj7hSYfakSxM3eoHPVzUyi7tUhAKhsYwTnUmXs3KpmZiaZ5DbDQzQudDByNWbTq4guuwnkPfeSuFNRgpv",
  "key22": "25iHPNJtJtA9tgMbsci53rDcavPDL4J1zYPGaKTxx9fNq53uRdR6a2gwhfj4tFNnqmukby84WXLSnfbhGKmmqqzu",
  "key23": "3sXdrP4EV1Jc7YCTqEFMXuBADpxg1fHLFquq3SWEtNH8GzBWfW3Purf7FhAZwXAtfEihaAhrNs3vWQTPjw9PKDnj",
  "key24": "5a26NkD6xLoc8nfHoG5rijcZfybYgBvHmuJNLMdHKBXp3CqNWbye5kAtd3CoBgXPouUeTUuPa17Ri6iSa76DvuLJ",
  "key25": "DyHbxb89n2bUCyY8GT9eufaTXP3CNdDEdhha7ohVSi3Cr7JWWXspN3os2DAszb8MBTfaxpHJxLZDEjcAjtSoxUN",
  "key26": "25q9JGZDawQh7FBz97ZPKmBnmiw7Fno2ooG5tGw878qfLdpsJY5UK5GmSVHevptWwY5ME5sEo9j4pVNCxcrYXrKg",
  "key27": "57AjK6KDy1RocRaN95C4JZGvERV5WJQHZEQec6t42gR2CcR5tg4hGft99eaMbu213dVCxLAPA5CG2PMahDenhCWV",
  "key28": "2wE5w5uFcbXbioT1hkcCJKo26dx4Lgv1nsEGc1Axy3j9hrbdD4DwZJVigFQb7etieFrScT99Fj1KpoM81xwc21de",
  "key29": "2kDESosbKAJ7HnZvMkmdm6ZnusuG4x5qxMzJ4tzSJMwcQXvPCTWvDtXiQjk6LTAFRir3CKQ91cxtudapHtPBSbQt",
  "key30": "31iPBM6yfkKVPq7PVgFkhnBxzGvaFWqEomopdUrvbVtmC2zNLPbQPphxTKFqj62oqoJSJHMjQheMB5kNxfjoRTFK",
  "key31": "6wT8MdEVXvSuvBsgC84bZvMnjqne1ABM59kCYMHMUQZG5xfvkmcErozC4efmaeXSv86LQ1uA4aT4YoXkjLP1fWM",
  "key32": "K7kc1DpLnfyj3HY8mCN7ZesELbTW7DEiev3s8Tp1Nau4cYzBhR6hzBzuwsojprp71iCQXxNV3TqJ4cW3DL8t3g6",
  "key33": "5GMBx5iwNUBsp1Bjw7r1pyvPLH5Q5Jef9LnMJitgK7RW5tt3t33ZP7g2ph8mVMbLZzfos1xMEB4NciZFvYVw59Bo",
  "key34": "4b11UbmUxfpQ3mykmsDUuqyUXK67PokYEYbJ23hqGkw41a7uYZTrUSzVBWLfgVLS7DmU86HkjzBHCQvouHHdRK6Q",
  "key35": "3cfhs9gu6fJFB8DEi1Q1FKnXZx2quR7QEgeVvX1FmE7R9G96JwQe8p8DuMcd7wu9NKoGeppxDntabCtc85wgjzdy"
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
