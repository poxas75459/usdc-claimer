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
    "2RSAGgCza7X3JnemxLySeVrhjXLz9PzyodFSyDLXzKqMxGjGKgHno4pgLsPE5UcBNG8JHL1716jfMzsTYMjH5t56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62JGALczjCKDN3KnkUb7Es5FcBpLCMExz1j7z2BF26uBCnqkiBbNuF9HqXBA8S3jHcwpeHzB9AyDazCKFFXhdFas",
  "key1": "2StTK5iq5V6Fkq7gYKE7Qsr2hnH3NVSGVmhcchhsGmbnZ2H1Gj22VAmb7ik83q5rrhcCHZPYgvTX2HAzNm4ua79W",
  "key2": "5vZmxM3i46bcBQ1saoKosNWFEdtcTVFmsUDMYieCXJmTj5gTb1A1dfnMcaLVDqYLiFMmgMkitGYtnAYBzi3YrcAu",
  "key3": "yMtJcjKJQXhFrSytwA1rhmrpheTMSngCUhttarMZ1nFC4qBNVonpE2cmc6pXxPtdotw3xHbsMbb1UuZeQZwhAuV",
  "key4": "3ELeT9rhsQgRbRfP7VLcbkzMuk8EJtycthUSCaNg1cPpHSZ64AiBBpi8xfzrQmk6SYxytWnCjWPy6RH6jeXUCNYo",
  "key5": "4Xtk44EPorF3tP6N3inURxn7EbNJASRtcCoKuBf8tY8EoLcNvWEcvDQSjARvZ65HkugGhuBdaXZNomUnfk5Rn6uq",
  "key6": "2c9LYCjn8fTZdDfKb4MNDpt8XjogSuQZ3VZ553magvBAkB3rkryZBYbnWworFhRVtdiU8KqLaifZKgNf3Hz4sjnS",
  "key7": "62BwtmnipX4qRtuRs9NGfNSKJDe1BjNqwh2iopAUQ5ZfBbWLqkUdkVtwsEZ4GKgfWmM1LCCRAUHHNm8J9gaX4NdQ",
  "key8": "3RN7KMgbGdtJ8focQpVbDLH1QYMJRhKQoc7MHDcWZSVKxuc9iB77UaW6pJu8b79Wk1mqqbNEyRc423XSgSBwgf3h",
  "key9": "5NsJsNZgBAJegz8JXWQukHPLq7aZvCUE9vmcVQFYoCEEjoDTGoNdiGRCx2d9uuyrbRATJa37FRsntNDnefUAZtnD",
  "key10": "22vUjD7wLfJC1Nk8HynDd8RdpE1gZNwjxyptPGvKg34xKt428WmQ7a5baBLfyEMnUkeZBTiWQ8wsRpwiEPjvx72y",
  "key11": "3MQbAkAAQDsj2y6EPuPzmie8GuuSnJKfPiSH3c5zKQqvTKtKuymnzhd9QWeTZyNoasEtqNt2KbzRSUL9y1Lmn5kW",
  "key12": "55ZcrTu62Yt876xF6M3ZvFHfWg9fb13kPjs2UPHhkHSgekJsvjkcK9xDAQqamytmLfaxEvcWhRDKKLXp3LpNh4LQ",
  "key13": "5GoTJugJCW7cXHfMz8W8WEtfd3cgSRhRppQcWd3UpDZu9DP8BPF4sjPfcS9cTh9RwcHqdEavp3eYM3VDMvxMQzRs",
  "key14": "59aHjrAz9QbrmFjCZNJKdP6FnWtFhHJQrs7CXZjbp8mbQq8utNEja328H1eQtEoh3HptRhwbDZXW3jJamQspEA8e",
  "key15": "21oxwGrR4fkKwDCHSQ8orKaDBjQp8pNSZcff5vVE5YTLozR3iaqYi5QrLSiSXozK4379mcHCsSifPunC8SA9c7rY",
  "key16": "2yyHfx7tEz41JYAoLACVRy6iuHMzUMyC1GgG31zDqA78xEK7d9qLzayyi1WNbTm35s1AzTuiimfeq3oo74vRHFs1",
  "key17": "4bpGAk6vi86tbHXBdo2mgQVHLuhRNKqPud2fb6K4Bhe5Lk8J2dVVoup5ESjZhysoaHHDJ8gzWwbTzbb4hGnDP4BY",
  "key18": "3Jm9mYtCypxfqRKEGWeb7Qr7AsRmfvHDe47dKxkGvGbuEjPJcBbQnMgyrY1ZDymdwe5oCQfQZnybwT3F86BukZgQ",
  "key19": "3iCfr3aQQFYDkFhU1S4YxX6UpZUNdTq5e16NsudtfsneD1JsTvh2fkUbnWXttKdJwFHgkZSMQmMQzpyaArDtAiX8",
  "key20": "4rJgWVFNHqiP9DF5e8JvSw5w2mAFjY9hQ1PLGijgWgTHg31UFqvcN3wAn1haNmdKXA67stqh7nhwztqd1JiSEUVv",
  "key21": "cMtKKrvRKe95fS4dYnb7wi4JKLfgvKNSyoaueL4bCjWsYAQQZTasSuuvjwT1ywEvuTMedsD6mxwo3DcAmRVL5Ma",
  "key22": "H7QB73qZ94V3uT4AovrcbCz7JGrk3rbdxiExUm1JhBZiD9X1MKn8i4mPagpCPq9hNVpu2Fs2D3k9goWQGotcW6K",
  "key23": "2qUVC3yzHqZKg7AwLK1Nx3uttctxjXDMs5bgE2oj5AupVRREu823vh8cEQCUp7We81ZeQDHZqUVA3d8PjfZDUCWZ",
  "key24": "4mggWernVt6VEAy2fkY3Kaezdu4aZxzWTbyk7G2cfLAjooockYUAvDyYjcxw6wtmxoiMrLkB4JeDGseZ7SaHdu4o",
  "key25": "5wvAnJ1ACdGN2gsGhavpxyH8CbJDT8hx6MoPK1ECmU5itJrXijeiyGS2WNpdgJGci5u5KXDTBwQmqjk63aULXKKD",
  "key26": "2pCDu5EDC2rdz75h9gP18YkHt4fxWUMRbhtsPhVxCyKsq4q9ChoJHqVLZfECKeVLckuz2PFMXEUPMk2vo6wE9H1B",
  "key27": "41kypumpHfQ6ovkSt3DSN8SZnP4njup2FiWSoZy9j8d5ovF3mEHF9ARi9R84APwPeaLSk5jLnep2Y1GWbskBXvcr",
  "key28": "4Ris2Hh5yRSEL96mpY74Sg2989t3ybHmg6gES5iZeYkWULTj8D5ivUbLedesfzqwfM4GkjtU2GgUeiY5RUSaRMUk",
  "key29": "5pFt54bEzrMoQhPaqxkNUrhJDqvvXvkzcfZ74jRwNL2udPpjJQm5KngoUjiJcnqBVUHLcZKf57T3YBtFZKueBWhz",
  "key30": "4uocawSoWtSw7iiZHErNkVRKQ287gc51v4rwq8GjEJ9MFEmJDg7qZujs92TezrLY1DEJw4b7nqZ3jaFHouXDdD6h",
  "key31": "482G9MMkZd3uqeXQq5aGtd5Ma22q9RB5gwywG4vfK4JeyFaf32rF9oSpXD2hW2Vi9JRKYSPkcyUgSA8P91c3CChH",
  "key32": "4Npth4ziRg9pVVgHb8MjJtGLs3rSxLozdK8CXLQnUaZRefAujktNgV12QcCfGvvAftZjaN3gEoSTBUSrCzuXjCHt",
  "key33": "54Ped2GSyV2Ur7w5vaVwceJAFxsDn98tYbMdDk7RTK1TnXdrw6h32pD4qo6MmyPYPefffLV9r3fn25tmYn6oj8SU",
  "key34": "4JUeP3bWYcknRKmToFpCxq8pZ3sC2Ai5S4yGQ2nphR2aw3o7H5Xs4Q65527dqucioRK1RXipAso4VWDVKwNhPwgj",
  "key35": "4XeNR5xPNAqg5hFKGD8tmZgf11ZMCCH8HPPdbyGgbCUYYxn8Tk9wLkQEbvbv5uZxQqJRT2x3seCovxf76UCUDorX",
  "key36": "3Fggjt9PKKV8ziHtEqTZFBp3UsSQgfEFQ5BWj48e7kNYNmKYFUNTPMATuGjS6SHmFvDAQi4zb3pTLMS4f4CdKH3Y",
  "key37": "2hCTZDZsGYxdwyGh94GiETawxWhA4nwXKBRu77diemCNvrzT1TYh8HEDAYBCxZwdusDWAb8pcq37tLFWH1ancgRk",
  "key38": "5t9ZKhcCanK3WqmFY3PnvSyXtfaLXAYxDobdFgpx3LZCBuppcxSrBrVNt7U889jXrkjii1G1YTvt8kyrC9KnAZgR",
  "key39": "4S2GzhWDky9pCbvdmZEQ2sXEKS4WGGgZFeic3nJHWLZMGvTrBrpKgyuD9baNRZMhEvTxcch9dzVxn5zqhXdbN6Si",
  "key40": "2bvZoQUaX7n9yQm3XM5HjUHVDmzMtm66YqMnqhMddyE7vBH7cNhzNGBmCqU6b3EDUbQdqSctpynH3nyVFokqsmxg",
  "key41": "66dYTFdyEmjYPzEy1PuUnVu6bkw1CYHGbz71KsFtBrBKa9ZdigtHjquvxtxEziwYS5Ho5aqiDW3qcpgPb7hpmfaS",
  "key42": "51HSUTkLG1mcJ41eQaUpvZfdwF9JGcNnLVUkAWUTfqF8u8oX5Wk9uJSRn8vF7LpAuSuDUUteE2mmJKyG3p18nJ17"
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
