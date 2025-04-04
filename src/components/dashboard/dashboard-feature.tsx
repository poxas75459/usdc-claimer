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
    "4L3Q1KXN11o3Y2b1cLaAvWYzq8mouPCfP9XvGpGk9bh43Pv2UBt4759hcGWpiUym11g9vji5E8tG2TTdX5UAF6Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385vk9CUQaAPs66LYng2t4i9S1bRRmc4aYo58WFUy3oNgq5QDXuDuGsxmz7iM7Uixb7UwyqYuXXW6ZAQkVcrQtar",
  "key1": "FCK8FpM2tRadoNeocd3rnit29rBafe4hJ9ycToycqmUhqGZnbFTfAwzbGKu3XhdMhTHKvvtxyG8EwnLUvoKgjLq",
  "key2": "31eVXeB8KZnYoaqyHUPJhJkFpacufzcnBQzuVgKnTyRjRzUt3aj3o1xyfxDx6qSw6vULZLszESTR8h9tfTubLk1R",
  "key3": "2SJrCNgmkV78Dqm3SZdQ88aALew4Su66wrdM8iPyw4tk92gWe3orreSJpZQhWcYcNKqqdKnxWpzpByDiwfZXvBqa",
  "key4": "2TvAG5p7ATBxJ28woh1JbYXDYB9CgkVBuYdS6aT4Ym15BkirPjAcDEKdC8fkkKkFuZPzEq6kG1V68EyXA2Sxwo7S",
  "key5": "5quWDwi1XhK7dFmRdiAEkuCUAp59XnV1VJYjfBbN5QmDLZuAPvPAjPgfq1VAngHUwtAugQbL3ZbDcFm2TJKr7pLK",
  "key6": "2rZrVAUN3oGa7zXpn7dNMxf2yqN9gLztVwqZ26c3bL5MpFHbNqgAGnwoDcUxTbcwoH5xn9XzMXHJrW1fHfDfkYa2",
  "key7": "4w6e9iVEp9TtPqYnPfK7SLKD4Cs5hd3QkW6Sg82darpaq2DRFnskSds6bK6q5K4JdM8SB3QiU7PgMid3zPWuEFwa",
  "key8": "5ZJhsx2FEU7Vz9KReMgjrKe3r5jZDW33NbCPsYKSLsLLqYf8JphEWFVr7GcipwLKNLvjEU78WwtXaUWLxF5wcjvr",
  "key9": "2CXi9ntEbKRoDSDGM2pXMB1YXMhnnUuHDoKooPhsfVrpWpv9CMwKKAVyq8mMDBEvmXm5z8NEGrcC2gKxFHWV5a6K",
  "key10": "2RrYtkqmzJ5DZJGYBGTacYPxAFWTGZnmn4MVQisYhBD8QtfXzhRZjZeNcjT2nGdDhDBkRLbbdhZocT1c3tRS3JPu",
  "key11": "4kbxwXyyHqnTkmeF8SsiDikURpHaWavbhaiMQRdcaNqjfqivbP9HMy5waxgUDryLeHnESZCoNQFPn6eVfWbHhP89",
  "key12": "4DPYTo4g4oRQJCbBFq2QjvtpcTYLfTgb4rNyNJ87TuQEMu5LucxyxjYb5KP7BkfhxZMvxQEeeZwxMmDuKirKikRt",
  "key13": "5GLuscfBYRtyFnAUDvsJ8Kd9nwSW3HsT7LBVKY2nYPdSPpxBjGP2zxh26aMFCPCw6yAo6uCr6NJsbWNDqPttg5fD",
  "key14": "3gXvDHSG3NSSLtHFTBy9vhP45DiyezzHd1aGP7Lh4Lac9aK4Bz7kYhAmornJrez989dyfMAtXAS4a2B9c48916EU",
  "key15": "4ByvaMKe5T68zwcx9ezmpJ8Dz3bHNK7U9TgKRiCxpAAGDfpwVPpbaiJrvUcfVj3FgkAx6G9CKhAw4USbsifGor2D",
  "key16": "5vAnb9KHcXRQ4ES9rSgQh7gMcyHxhE6j2h267GnGKBkGLsqMUeXbadUkip73fNGqvv25PuLRk2cKHPPaEfRZ5voJ",
  "key17": "coEecyRjHk4de8TDPbnHAdfd46eeg8WxNcXPX3nLUCeDXG17RucXy7vrMzm8T8CnbJdNXxjb27mXg5BNyh63X2z",
  "key18": "3EmbKnw4L8YBsirHnmNm1YjYjLSWVrPBL6kHMgZvzs7s37tfNwZN3K3rKibsoRobVY4gVYsVnUs9fhiXVfmjReH7",
  "key19": "4BVdWMtYMDWBRAAhKeLgKPmKcviUcJA8hRtuVgnWEjQUUXFFV2bgHoyqNKmAjBgEejraD2jGhizo81A5x7sUXdg8",
  "key20": "2LRKFkRJTtPTojsZittKn7frPM4rdurjBYSGdiEoLhWjzuugQbaVQVvhaXSTUhwoKn9PEMANR87ojoNgUGYZEhMt",
  "key21": "3q6P2zxCT2fPZzjZLEHhRXs5JeHhj5agLEKSJY3tTw4EHsg9aG21RTFiswZUhUNkhbGGSDDCAj23KSvrUVXg6wen",
  "key22": "4X3Q1crVzmR3DDJ9YAVky44QVwVWKAhqi4qLT5upgYViB9Tv1PBfED3FCfUwqbAkX3fnDBB41CAB1XST1KfBkm2v",
  "key23": "24PbH2HnGyq4GXRhd3BAdLRqNj7dYZgVykqfCAsn7GxVqBH24eLq3vciBoWXrPkVHd6Ptz7usW3uEpZoNoXMbUyY",
  "key24": "4X8VJ4GTPbE6bjD4jN25AMUBvfKrdED9BqaNn8UfvEhQvbUiEmaNE2LMQtFqFTk6cLFttrMD4ZdfjiybBpt1vaM2",
  "key25": "5dniNuy2jJUS5Yz9vHQm9hi9Svtyb9ndJpwKLkkZCPoTxg99U9f7CKY73c3kp1Tz49Jngy5xkbvZb1U2x6yJJBYo",
  "key26": "4czzzvv1YAvnR3ek6G2oEtvDpeJFTdb82F7ABT8b6Ch8o5rVEJe87pcRFenzFKUddSDS22XyfcrzmXo75REBxyJx",
  "key27": "ppShEnrDDbrYkWKRZ4Mmrh1cHy17Nf3LHmMNipLVjLAqJGoGB2HKPGGwm3eZLu3kKj6gkvCUFWbyeVvdCsN5uKn",
  "key28": "4tN2NWAHpGGXCqA2PQz8zdwUSYUzneLePH7J9Bg4Zn9FyUqYQ1SrHNRBKoRUj3YeAKCkPATu8TMZEwSPAjSaEyu6",
  "key29": "4TYivzQ1fnUEfJNm9kCJxD1SkDfGdJuTHdqH7dHmCa82E7KDKi4Trhx332c9gv2k2xo7KR9xfzg1SHFNU6pZ8hfZ",
  "key30": "mcj5DmmsxUifE5rDwCRs9G6iyK8BwNatzuNA77YeFHpNdFF8VjA5CzHuPHAHCeh9tQhDTHzZURKMtpUot4Z53VK",
  "key31": "3NVqYbaJg3XQ8GnTbNHXqtDV2fLYZxDPYz2JDpiam6w39x8t63foGYANF96a7Nu15KThAvXGDX4inSJeVX5UBqMp",
  "key32": "2Tix3C5ueoycJnVU5rdcewaQfZmtRbUVrREVSaXUCy84ifoNVQ5VWzGdjvPXM9RRrBas7tSa3N2gun3mfLy7BsZN",
  "key33": "5Ep7TwpZeu9cQg9nZV1LF2xnXhjqeqZKNecWFczjwL7zQsJZNdTErfvve18poUE4KbibPk1MpiAei2LpzN1JkMX1",
  "key34": "Ut8DDVMiDPzZWpbN4MuLYEu6vnMCGx9JdPwzcWjBTDahcqQ1eEarrnQP95auNgUKB5R3cDwvdVtdwtXtwjGFcKN",
  "key35": "55ZsqFQ5Uke5xBZtPdKUey2jFX2EuEbz5GfDjcNE4qccwLG3AJPk165pnScyLBiQRPTuDwveaGEXvDoYa86g8j3i",
  "key36": "EwAFJY3bS8ZXAZN1wQGG5cyoRx8p4HdSzJaq15UCTueBNBNEyMdCWzcgvHAPadFAmg7zj6454vm5Y8WhcmUe2hU",
  "key37": "5YyZQghSVtgRMx1Z1gH7eEGZijH4kWpF7mySHGyAhYgDPzuyBWr41yE5GRpvvtPferNReJBFJwb4akD6a9bnXB7G",
  "key38": "2at3hRZrRpMv8cBwQzjEZXCc2PVWaYBEgongSUhhBThFPX32dEMu9ZdiiSUmgGSxdFWpU2NrWhZEuKDBZeAdf4DS",
  "key39": "3U7TNGbgSB8MbUR6wVTwLug1tsfqut6D7mc8zZPeEp8yNuLt9NjX9aDzoFFkc7vF9BumJmCDB9DctUSETbZpkRQk",
  "key40": "4jRbLPW3WMA9wHU82HnTErFpUKrccqyoZFyS7G9szsgDfNJNwQJJSEhMfxEDpkLhy6BnSk839tnUJC9MaQJVGbXp",
  "key41": "5dZt5safqfKkqEjGTUraB9egn45kCzRG2JoATdFHF9Y646KNkMBhTdJ14E95zfUmU88vt1iYphWUk24YPBjJAo5c",
  "key42": "3kJeqoNMrLxzCwhQoHkTeVj7oUgaLhYs7YN5a5FH2Qbi432DQrTWWSv9ET7e3PBMqPA3TuUJRDbtnodFsAd9AEDY",
  "key43": "tnmNqfBS4Hhr5U3CCJworXMvBmYSUYd2qe3RhAABrdukjFs1djEMU5YNs5rXpFfTTAYL6JcE5GmyMhedVdDzSYp",
  "key44": "4zDRFzPasdFrTHPky4xjhcY5SGVZ1WfVrMuaJpMtUWLUiAAYRu19kzsnzR47vNG15kWXdoamdGM6Rh9eidXX5h5o",
  "key45": "24RZrQimyyAowXPE1SN7vXLzGxBP2kNXzUPC8CZEt49QWCzmThWHZMKxXAdLWNSMbpMRPXSNoZgPqJEEyg197i9K",
  "key46": "5KzyicSPnggJrXpNicvo8835ApkrUpxjA9j3goao5MAQgaSapeV5jV5ajh9hsctgd1KeSmCqvWDNZ5afCkr9prUu",
  "key47": "593Yvc63uPHka4eNmbv8bCwZ9X5tRvtFNjwraRKZi2ojHhetJBacYsSiLFP1nGKNAE8kVFGh55FYtnJdHRudKfj4"
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
