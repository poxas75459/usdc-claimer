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
    "2Zt7y7P8W5JoRZQhwCDohptc6KiGvwhgH5YgtreziHutWgbWS58ReQsZg6Zn36UbTsZqzjqdsfnNd825jSmps39z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YiMof1rkpZ3e4RF3dYUDejTE4bGc28MpRFH4zUt2sB6MBwKap3hRw74j17FkTj3ey1jHHY8SMjFuZNY5WKYC8d",
  "key1": "2r1aJULJNv87HLXoaTSvhjRX8F1Rqt9cHhHqGharPbe8dVearGuwoXgy55D6WAPNCNXxFito7Pz9M1Cg9LM8EmqT",
  "key2": "37iJG5Lw6DMvbCRW6z5Voj3faGBaFV8Gms4QpmHy8bgg6TLZ21uEHg491bEcwdmmjykAJLT7i7gzriikig8e9j3T",
  "key3": "5rCRjzxEdiAoAxrCi8RTXiCXQhmRrXrxeF1diEenhqM8cqXi6XumwwUkbH1F45aZnJm9vyzENRunvRQCh4mq3CHS",
  "key4": "2uYuEd2zfvg61yXiybEAGGz9pLL3VATjSyiHwLMzbmxKxYsXP8WSjs4m3XoZsJ5B5VzwTXikVCjdDA1mEJGwHrYf",
  "key5": "66BwhdkUJmqykbYaRMvLV2NMZY8SkbrD8gAJWHoGjypf9PLsmstmdBv9aTftaTtps3dTzmWWMKne6j3oV9DHjt51",
  "key6": "5MxtbkpBSP2e3vYmhjWgh3yhVdymHcYB1e1ZodFeJ6bYF9oVkP93M1LEPh3DoqwLKvDMP3PGnbbgE9D49h9ErKYb",
  "key7": "3dYo2xdU1FYyrTtBeHGGzZ7Y3QFL2NZeoE4GfTvccwBSwfoj1vmo4DZ7svJHAfNrex46iH9TrJtwqvaqEs2tKD4W",
  "key8": "4B4tJRXe31tJbHSraNwpcTgu1U1NECEfFeLhbCkBZKvCMmHeVbo6KANf9oWQ2UodM3NWi3NBNKQ88eTpZkjjuXy3",
  "key9": "5ZnkKMzXGKGveDV9fNdiv7gaojciksjsGmePe1piSPnRVX4j7acRkGvkBvY1y7oRWr7qEtBX5BQh63q6Gf2Jdvpf",
  "key10": "5JTY3289BNd6PKYXzcNPR64o8ehwdkjmjKWVENjRZcJcewA2EBvMHVWZK6kBrdbXdLXndGyWRjxoh2X1V9zAZtKj",
  "key11": "4cFeMrigHUztpkf7KBWEtcJSURvui7pmJia1C1bfVTkPoSSe6ntVzfKEQvBnQM51C6jUf7V5C65VzNFzxLSCh4DV",
  "key12": "5VMwobagbXrFds6qpgjJaSowZV33rW3Mj2Lb5jtqprwepCVdUpWE7aZTVbt5Lh5YkKHdvmi1FgMLhHi3Mzr3E1vB",
  "key13": "5SXu6sLfnuULJS6fMbExNd8nHNNYgwFt25RWF8KUko7CcdYQnzH1XRcuHJ3XZMVi6Mgz2nYtBc7UBvSRxjSxa3hQ",
  "key14": "2PfjVuzn3ye3jAquVdf4xtGrksNg6E4R62dkqJq4t6nwuRZUMpCQek8vtLTQt9DLVPsUSMMmf24nrPM4ztkfYfAK",
  "key15": "hjZinYW5cYVBUJFEA1LQ8KbVmZW8HdP1h1dw3ZXni2KwtnEeDh18A2T6qUiaFni8VzLPWHvte7f18khPdNosCQZ",
  "key16": "3nwQTpN6PLiffXLHQtx93g72Z1Fpkbscf5wFF6agcobGfYbT2aWDfFh9zvXvZVTE5GzDjvJ8hDoyg2a3u8y5juPD",
  "key17": "RaYexp1P2KWPudGNttEJWpXjJf9qJazSWper9hjtPN9pDpQo6iVhQFVvC95Y848bZFjvZR9V4DSSuoxx4avViaE",
  "key18": "5DdHRhu3ebtAcvU4Yev1FqiX6rigPgbKXKgqtFhaoy5jjzjRRDaADhHAbUFAcTgEtRBmjWyQm1f3hyFsgRimx3zp",
  "key19": "5GGuvXuaSpTvNSsukVWcxkeXu9eCgAddjagqyCQt7sjE27dkVYw4BbntD7VZK4joCBFxnPajW5MrF7tcsTFr1NUU",
  "key20": "2qUSg1FTidFHYHqdcuxdQXXsLw4CUAeqqGdbzZ659syP5616kDXgDF2DLiqh5bEL1G84dCBmR1K6s35Ej8im6U3j",
  "key21": "gcCMH2tWUJDPTPwpkzSoHYKhWJkDDnTz5toe4qtDFCYy8kA5CKHHJR7xcx3cdjVXsfRPqyYv2m33FwcrNsnX36P",
  "key22": "Rw3qJsYuB5ChFAHMTfjZFdPzwNZBUgbCYRazugYXqS92GuvX8BnkGGwXJQVE4CLA6P7cwnXLokbD1qSjaRy73PE",
  "key23": "42kz1fD7RqYExzNZmFtoGuy1wRWNtQi8EpTtJKtW3Yoc2j5t5oxeELe7cFoztteYqfNVyFKBfEaT16ZCDoXjkscq",
  "key24": "3LJ9sLppcGyYQePLMY9ufPCXqpyZfMM9vCc5SeXQ1EFR87VU8Hq7TE1oe4ENMwFqkqbz42mvLKWZsenXQzRC3GZF",
  "key25": "3K2fVeMLevQofUtAR1MiqAhDYqqcwCSSvtKSBg28mjvyenud32uzGYoP8LWw2BPaeCE8Vz74A7G7yiZV9zQPSrtF",
  "key26": "24awW7Gnsyh7WmvPSzzK6WiYy92pV3siqRvdDuz398ib5hA33DDvG4FjaBZsSobkdisu4argXewmWxjqWvtj61CM",
  "key27": "58hcFXnCNfc5j1bbfumzyHxBDezfhZf7meeR2atzH2svj4GETnrEmpc8FmC4MP4B3JunvnPzCQs8M9yW2sRW1PDS",
  "key28": "3Auya1CBr9v62QAXcrnvuqgKxpVDD6WeJ6ir5gj8qwHsiTapRgrYexSo9ASCjwN1dEJgNKaSHqhstQg7BB4JPYnj",
  "key29": "3VfL3pJXUbwhX1wpQ7qAeeHzZXHmWgbyyF5c2LbGMnLxWvM7o7diFzWsfDhfJhgnvDqkLWeLx2yi45DKSx9Z9MjP",
  "key30": "4runhe8FTYFvzgPjgJMXAdmMcc2SAhsEmKJ428DywQ2epkNwqmfzaECZPBmPbqpuPYLPKfRvLMdTkHQ6do2EK7hj"
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
