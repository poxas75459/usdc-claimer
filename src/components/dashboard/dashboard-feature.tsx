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
    "2ZrWfFNNnPRH5qU6r6RP1WbLjQWaEit1Fdo7T9Ax4psdnLcWXBDn9ieJmgAf93tTAyLziqGPPCTm9mgU9zYoDDes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aob7uqY4W41h7EARxh54bkTwPTqe4TcLdarZPCP9bXS9hueGe2TnDcC4D2SheuXiz4aB7F3sUcPM4kuq7fELv4S",
  "key1": "3Uhy19eXQ8akWryX4ooxer3g2AvoiNycdMPaiae5i7aPq7K4ph6dx5hVQzFXuQyCuHv44VwPjAqjLNZ6ARSHYuzt",
  "key2": "2qf4FWwCs3R3zixeJrMH1R3WEEjFwNbjs3y8k93P1Uzkmp9N5gP6oDEQKVdcdU94nfWSFTq62cnLnggcmZmkFabd",
  "key3": "2FrpfRTb4SFt64CGqYaSShFqw3DzYoF3ArnqBr43eVPGAzs21p51WXTeY6GjfA2xhzoVXfK7rXudYMZt8HL8MRSN",
  "key4": "23w2wMWx47hKVDAHTjfWcpHENbRLCKvoV6RuJZakYwHtna7jnD4aKeGUbadBwhkQA8sJPJ9i7YbRQ5VAkKoFRA43",
  "key5": "25QfknWfLFnEm2umowE7yrEddTkCDosdCdNj1NfBFP6cp1Wh4mdsXQV24i6yG47xdd1Za9w3TwE11QSTYj8AuZ1C",
  "key6": "4j6hmmiFGFXvEhfa2iVngtK3URd45WhYh4ZERKzRhNRXm6WvVgjLLQDafpSjPqPc3yvKWA63uB6XeENUzyScep6V",
  "key7": "qhVSBecb8T9dzE2XX3qNY5hLHsspCP2qidt8PneYpBz23f593FuxRG6rnkAbCn1VteCAg7hYW2cAkh6EcXRZkiw",
  "key8": "Vx8wbkuYUjJH5wFztV9JhqBzRUrMsMUetM6QxhjzQUVjTHKZBvZxasaWB6YM1HeEAzHQKycP2b4vTKYv1HJ4faN",
  "key9": "4nMWYE246qBFWiP7VPNrt7hT84E1ky9j7YGrrLimdkhQiL1EnnrPpmmHmcGYHnLP2WMmBAdbC8dqkHDPdmjmtHjg",
  "key10": "5BL8oDeAQnykny61eHvLeHbCEe24RbVGQq4P6xcYMfHMdGYoZ7F8zi5cCxZchpWFtHPnDQNhtLe2E5VcjUjtHYvE",
  "key11": "4T3MnRpMhZCYvDB83fb86djwkh9wFMstQBpi1yPUNad7pZ3DmpLL3BMCLCkRxAzS4vKKP6m9CzAJgoQbEjUrfwpu",
  "key12": "2SjmVycZZMgFDNhXJBJVtM6RS4WuuzUzRmGmvcWULGMxouCEnHwbH2tfhtsrVGvudnxNUBYafb7Emh6rZfyN727g",
  "key13": "4s5smcaaGkwTtPf3s5BnExfFJBmVMjm8PJyrYjrneEYTU8QwH9eTjM1FFfMtL5meoMxvLoh1wSYyHgsJKYD8kRYG",
  "key14": "5XBobDMV816NcCyA1CfmCwYY4zm4ZSbJWyJEKUkxFGVGcquWa8FWKzEqMoHjFKLrE2v8TpQKdpqNSNYhJYDkwQhc",
  "key15": "2ouAtLZCMPQhX45cA8X8De4oyjYu3F8ZpKK5YjinAYBngn15HEpd8qedfdupPoraFTBB2NYsnwFSuNe1Qrrr2bi6",
  "key16": "4CjNbJ9yU4ajE9ZQyLLFQ5BxFCL5syo3m4xD3MqGN4yxXYLZwt83qeAbLpn27s7AFDaLWVF4Rw26paKrr8imAUR5",
  "key17": "4o6fJwX9q8Y6QTPxztvt8uCQNM4RWRjFJc4g4j2HQafWKbJoXUhvZrweED2ni4UEStXJidTe9K7jAMWrfxyEgB8G",
  "key18": "2GXeqKAbn7xoH6JGBnKrPfeupk79QKajGCZkigkNwnFsudJUqPLQJUPfR4GomMjaRt5YdwiiLBFbk7EHAVGAkftu",
  "key19": "5WQjMCqsggmztUfVsQb3W1uUxhX7BKPWqWiUyTfe89RCVDUs9z588R1ZiXK3wA1uWPfQj5euoNgYs4zNpdDwpcgr",
  "key20": "65gVoC91kKameMzV22BRdAs1cmVgumziXNr1Cjy4zt3aWod4iFyYVdLVizuJZmFxPNge818Kg7xaTRf31cK2NYNu",
  "key21": "27KDue2R3bPFXXFv7SZS9gT2U6d6ivTHRzUgL3FH2MDShFRLsUHieUJJyFJJ9a1DuNgm163v8saCCbP5i6GdKcFj",
  "key22": "2pUnkZhpTuwaqeWNgQBPpa28TAuKj7GCSsGxDKRLU266voyYHtVvk5ARScAMm3cMNijq23PcDUzZtNWDpbGcs5LX",
  "key23": "3ExK8TF3MkUfo5PBcACGZ8KWDXDd2mTeZKDwD97k4Wr2hjGG2youTakUnebPFSXnBngwATpkjxkdB5fMMQwtMPwK",
  "key24": "5pmoqA2RwR53kzNtms6VnByrsxeM42nti1MqPRAG3nEDzN24eGQWN8vaBxU35iDaLMjNge23TJ33KWwJD1Kfyv4n",
  "key25": "N6iU8izhb7tJuCm2AUxqQY2cmy1uDDwawfuKwk96sJE7NV51CtPuHFfdjzbRNad6UfkZNngHksAY88r2NwDYfrB",
  "key26": "3wVzyMbmxdzKZgbPvuwsFb1kj4UfVypUbGHBF5eT4g7CDNJ367f4xD5aAoT9bVkNRb6itwAhZYxhFCDHwPnWyoYe",
  "key27": "46CF5Sv1iQ5esG6ypixJyMJBYjpSdeKGuVsS78HEBS2yVTNJKZTDCuGrTq3JvKjuysKmR4jAsgdyVLiX8R6CRr75",
  "key28": "3DDF2qT39LJFfhxHWJv5JSZJEzEAZEmSAzJn1KYRVZhPEEuoMBc3hF8uf8nwts2vgySdMqqfLNWkuTduEgt8yngk",
  "key29": "2bSDyhjP6PXNgEqnGv8vwQpR14wDNDnKq9B51Y2z3ne155VCnz41E6cp1axLUWrCPks5GLzEppZ6pjJESN1QyhUn",
  "key30": "B9ycfZWUaKmvfymJwtv8GrD211vYe2VZvuXmDS4kZi1FSJ2eEk7uGB3MLFeMu2LiGn6Fpi7ZGtKD1LmFbyWNFNh",
  "key31": "5nZCbEqdDX2e7Qb8UMmY2dHCgMEGJuc33H8BcYUPFZ4WQeFrSbvWoocuQS5Hn1fz4Ds7XoMehRZJXBUngtKkMM4B",
  "key32": "4cX4Zz5jzNPXQj3nH8743HByAokSy44a2UzG9gZKeRSfYxoH9EdsBLu2d3sZdTHmELkVb78gQhQxkpbzzbHDNCKD",
  "key33": "4ApnzLVSc2FDAEwXByJTk2wMrXGA7ExSkwxr79x6YPhw5vePJhgkSVqS4v2JRd13JKnPfY65QWS4Qc9XUn4wNavb",
  "key34": "64UJ2NpETXCd4CsiXk9uWtTFPdmBC7hvR5AFRRy7qK6maDytWdp7LYpTutokLd1LuDYpeQ1Cfsa7JBM2zy4yDZe7",
  "key35": "3kFoT8o5eDdQWRGbhGrpCPXGeARowtnHeYrp9dfNkpWZN9k3zU7oRgAPpAwiWgERnTpsofe9Gm9FTGt6pYc6hZWi",
  "key36": "3XjqbwzQxre5VvaHHBb3f1twueuK2Rao4AycXKKCX3HF2Zikn1hcWc663bMwiJBFSvz9QyCWoTo1ryoR51n6mte8",
  "key37": "ReajPh7WTU9Yk5kJSDxCi5gMk4zX8MjaPzXPWLEtyBRqvPXSek3asU2f7K6usQ1N5BSg98w7XsmWR58NhYkD1vM",
  "key38": "2jPzUaqZqADGn1vwdWk1F9wvAvpCgRz1ahRy2znNcULGW6Xw9fFSWS3wR2MENpfAUaUKVgNGNFaQ2obtTortqvxM",
  "key39": "2qirn9CrJiiszEwbsvQeAvfKjka7Hh549mwoNsCLpwBTBdtzqBNcDXK6UkFR3rJfod4E9MQrFrjhVcy21hfumc1j",
  "key40": "2h5aSySeCfC6Fetw92ihFxZJQMc2zSzQjN5j1PH7yXAEhGdhAtTbKH46s4DtYz7YHWtcxPCC9eqwdetM519kqQMM",
  "key41": "3xWTvvGV21u4GWCVahh5T4XYoSG9E2VaQjtWMnaJi66UKJNkgma7SkvqcXUogGwPeY8q9C8r8zREM6okh38oVQFw",
  "key42": "67Ra29arMXHKiEVso75NZdNCniUEFu19CV2N45tTuvzRYpruLBjFawWHL6sVJutUjTGWWNes18o9GiShxcVvghqC",
  "key43": "3wcPsGM1B3FCsaWoAQuFNBbe4bt1qf4rngrFQnGH1ZenMbW5jXrjHyc1GKbSWGMJKbGmMAm6bzvSsqtjFgFywzxJ",
  "key44": "2JuvSeJwXEe2eaQwHkbFinCYrbp1ULC9LS1bLpSNPpVfQdMEfafeHy9C51oUHsP9czZmRW7TdrbNxtFBjcx11ips"
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
