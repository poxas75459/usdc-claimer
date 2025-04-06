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
    "4kfNFdTD6CkNeTRzhjaPCQ1ip6vZqhnHfVyiQuwcTJfFcPNVJN91bdWe6hRaWNUREeZDFsMwZhP43WW7n8XSRBLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q279wWhsMNQy85WFXVQpNXPq6Mig7T54RzNVrVNTRjW5EY9zZXty8cWYA9D6iG4A2JX4esLhaL5YFBgcck2TXMP",
  "key1": "51PSC76AZZfq55piMicD4i63ctbP3K2VLYHDz5G8Tf1ejhZP3estzt6KXNw6amFyEfnzvVSN21anTiAssTmycAHT",
  "key2": "czc6NRQX8EA27qr2njbN92qFhpDqLfuTR8dMJn3Rtpec7rNsZKkcXMU2keFpyTbsuZNVXMSvrvpV3NWjEdYXMum",
  "key3": "58bbpAmzAe9oooWvRm4xBy4J3SJTfhw8iEU9irfYaWeYLicWbv8tCZasPMpBWrWoNRNVRpzS9JSuUoGqEv4f1A82",
  "key4": "2zn13u9pDyCEV4g7KXPMEg1dgEF7mMnMXRswV8R5is4FYfQbmRY6uZi3ZLz7z4aXhdWxmYAkmryUaTZ99LH5wAic",
  "key5": "A2RFSig8oDqCpxgRVzo4vx2vWz7dhg6a2bPBiQWjXCXAkEoG5zbPZ23qWzSr1JpZ7s9DzVhEHHC6FehLe5WiJwp",
  "key6": "48sL33U9fXwSaVrenrgTowW1kH9BaFWk94qjFPDb1dAdPJNr34vUndJEMNDsArkE2TSNDuSdrVF2fTsYPcyqH2G",
  "key7": "AU5qyowLzaYiMFbMnvPyNJYPMxrUThe231BYNiXPB4VLVcB7a1fFfE6kXZtQQ6KZgatjVT6DhnT9eAhFEYQANxR",
  "key8": "42ZRrQBoEcAS5asxDoSpxBDguvmLePN7mhUcCJLJEQLz6qtGVF6k4qA26oX5J1gviErEpVCU8qgcdEg7fZ7UsPEo",
  "key9": "4iAq7FT41DV1pvnzFimPNtjg9bwykZUoe42j5wrGTnJyC8fihDJptSZ8i8idFrtSMBiycSHBJTsNT2r4GKTd7tja",
  "key10": "5coeVBLQ5Yue7SUeWUtgcFrpBbnZHp8HdWZKK3gjZCKYmuTwSt1FmuATjgfEhwFZ1pjc5JVaarVh9ZzX79HWAcTs",
  "key11": "55tSoTxKc6xJ7ciX2cXAuQzhkR8HqLqYCgTCV2dobuYnCufF92mraDMrWY5qz4UcBrQaSJ2HdFskspXuBnXsaXfB",
  "key12": "4PLH2D46SQmyzN5RGcwuWZrvbR9n7DwqYwEiMofjaoMf4bTucqe9Pb9BNTUKk2mta34NAaSzCrJNCbvPFu8a4UHr",
  "key13": "6NyvKxWtQd4k2rGgWbuxtqd2BfpqcF3tCKyMwijcwDNWHnXgYL5ubqzZWLcJqoWPorq9ZRCkswKeKNGTYA3rLHW",
  "key14": "3qGJLGaUJBk5tH2nKvgw3h2kE5Fz8h92Qgm2SLw9CD2G4QbaFvRWgU6yWmUXNQkNxHwYoZGhinvYpvBGcku8keba",
  "key15": "3H6PXHx7Bj2eHuuPBtS5cNm8EdUJewTR2UTqU2isjJd8fwFrfLUQBMMDskXsr48Efj7rfAKwAwAZ8296x1YtdQyk",
  "key16": "38PRAS743Cry42HXt2ob1BCDUFgnENUXWBrUZURsZQBiGR7Az3Fom6iWrjJsATLZdRy1LW4g4GgH9fXY4UNJKm6a",
  "key17": "SPq4xoARAn49sBhiadLnq5P1bpiGPaouNKoNzfqHCzPBBPL5w63LDefdMrofvffrX9rgE4WxoYN2WBTDPhEkhhn",
  "key18": "2MhxpewCscYyG6nU5XKFQ6NQxNDbNtCfigJeVDbHMqTWLPA9q1zBjgrjPxbmyr12FyiXUBJSQNr5oATc1muy6D5x",
  "key19": "2dPNpfvJtj6FrbQC4wGkgKZ2r4kzstMZB9Ej9YRFgBah2h5quYFDypTCKAonrAr1xxkXNkavL1usEU6pj4tEfSjc",
  "key20": "sXyznCcFrNTL1ABG1gK8P5sU4TraES3P7zKERbpQTWmDsVLMMSjeBMVvVXnoNhrypqF5Lu8J3JV4PsfhbDBdyWp",
  "key21": "28gYZPr1HDo5UWiUWhs3VbvFnVi9GxbW6t7GzG2PQwqwk9hjFXXn2rDQWbRKFqeWPrgEp458ranJTBeY9iBtpMqz",
  "key22": "s7N2oxd6qP2SD7RotvFk4hM8PVq2U6i8xTm1CzJHYYH1cTyJUgWuEt3e5jvkuLoinwewxzSBGsFeU9Qz8d6cg7E",
  "key23": "4aK8K6exPups2etVkjUYsg8A4p3nKDnL6cUG9EjZqTxsSvHHM6PrV2XV8qd6o6yB6Nyb3rNBkeJticCkG4gZ8rQg",
  "key24": "45eW6Z98qCrjzHn8WDKT4vdve191v9XJvDJfqDTGZFaX38WY9KG16zmJKMBs657BaaFgsYJcMUBv6NT9Uq7jfpRN",
  "key25": "pJKDsziH45JRpWCzubKbAuq5whYkoun2xCHVcuBkrPBJDhoBxj9JJZgNyYs4ixrJ726a4gpetFc4XSgpGwYcTuc",
  "key26": "4hGaYx96tFdnc8cDPuZbjdMtcTTCGM5AaizaccgFykkLcsjWKBxSaj1ax47HAmxwFGsZLfeSJvzPGF7HXdNnByMP",
  "key27": "5KqBCG4hDUfvNnJyirRUhfDjBND1RNDJba4kN4ZYM6gmv4Vj6TyBoTwk3fdhbxx3keM4JMENLYDMx9ibQE6vqBE6",
  "key28": "4tjXBAAXTxQRAvWv3sLptbLuoyBg5LE7zPDq12cR6AGjYr7EutdAZMDvPCQBqBebDE1tdnCgBrNzwhaCt3peJfTC",
  "key29": "4L6XR41n9cusZoTeWAxXyMqEVFuRs4k1cpYQV8YZYdDFax8nfPLQ3PGKEoR8QtUsKekeFH5GaTz5ve1JKejkctcv",
  "key30": "5mnnSRgHneW47GNNUcXa88Wqs5gAiaPL4kxEkrX1kAFqMFdFUTS5zkpX8Hc8CzFeCso7r67cHDwGn6YZ1SybPwSL"
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
