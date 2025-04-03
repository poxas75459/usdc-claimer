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
    "kFnSoktyxA6ZrvbBGFfLVKf7NvAJP7n4FnLHu5NWR5DxtX69i2pxKAvwcajiSWKcJzg5SyJm57BNgzH97EiepBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lxi3eYWaTCDVcxobvKYyAVsJGpE5UnsEYKj4a7hKJXseRYGfUaA4gXGqt87sUt3aXZE7MpGVXHgstFM1DWWEf3J",
  "key1": "4neL9Fr7E2paVfU3qmKaDLzcC7K74Up25ufyKNZn1moFDV8hoFJ8Hwp79KqmvsepGLQeC91eBz1HLAvDMZRQZJJb",
  "key2": "2wrJ9reSdYriW4q7kLVn4DeV89PPdjr9c8nEgizg2G3sXqXtGFPTanDTxyFsvqXdmrjuDAECqVdjZzFEpy1E4oUk",
  "key3": "THKTHkiheg4r8Zi3CyFtxUqqXqpfACtjeTbEEsD1e6DVTTk8ux5eZ7sDdFMrD1SktyrPK6DmPwMAVhxv4ub1Mpe",
  "key4": "e7k5XBvbEum18hAr66G47DpibFiaxLLnMxtbSTYBrmv2X5ssZHC17jqLAX5tHkH4uL7uHi9sBLH2ow5RdNBmY1A",
  "key5": "3uPKx9RQL7oRMvZzTfeuVZm47L4DWf2nFo1cDa2RbHm3RRAKiJaFfrPRdeEtKMwxAA6EXh21yKfw59tmFhZseyyb",
  "key6": "4v2wcL6rqUzDvVgWgFMEGptgbK7z2iensm4ZG7HCRD8i7CN5wfxxKxPuuxUAbcZLtMuVv2RULwiaoQ6kEsexfv2e",
  "key7": "2HF3e377kcXEnvsjinpVXnF9bV7d4kVmabGxYPq9VGUAvd13ExkdNL5CoVZMoJfk3FSkH41bZDBVKYbHw64UEVUE",
  "key8": "5g2bEqvWrGVtsrQNLoUdByhDv4twLTTv2hBs9T4ToWi5uVErdfMZgKvRs1ZVsSTr5AVGPRmER8jCXM5GAWVQoWUL",
  "key9": "4vf7bLDF5p7VME17wiFhaziG82G3eikEvnJBVw8RVPAWg5JjTJUvr1DVNLkZSE1VHQBUatg7UhyMw1uVpbnZtjP4",
  "key10": "3Sob5T69yqsDQGLcUZE3r6TxCKMzBC5z3SwGeS6UHcxxA5Tw8v13anECkhU8jGRByy3YFoZdXNSfiCGjuskdBd8x",
  "key11": "4sgU1KyEeZBA1Eh5fCpQw2ufUrNLZKAmkKRf8Bantr9VyrFM6M5sNPdr7c5f4SdMphbaoJA8ZyNDHH9VCrxKVNZb",
  "key12": "4C1RqfBeY82pMNKu5UgsUV171PtqBkc6yHZc5cgRSWQccU6LBATFeMjyss6QCkhJa9UnU3QQzJjZJtGrKQQZJJMu",
  "key13": "4dmYsHuaJpTv4gCfnPVLX8HoZizJaENK4UVSE3wzGi57VA5khEa1ta79iqDXV37SRhTE2XSscWA1g73kDrLBxQBR",
  "key14": "3ragmyW46TkgikANwRzsjtZVnq6eP63knuYjoA9jtN2oMvVtxs3m1ic1gpxPExVzL1LePaUMNNM9tfY5VTWWdRv7",
  "key15": "M1UqXswnGueRKJpnkhnmJM5prKPuZ5k5YjXkyGot1u7SLdKwA2eG6cRwKBBhsBsoaCHiRaCxwjSNzZ4Cs6REwQT",
  "key16": "2dbch2CajCQ8JtTKsbPuVSeuH3NJXV76nSymXtPJjYpJaJ1CGMMKZk8m75jgVWPHH3j64gbr7LTsyCGErexTNSXX",
  "key17": "H4ESCYVZ42ughQ5c7oRW49v8EY1U9nXXkG9LZdhesuUekoDLV2unp8oFQva2kxxYPMdCpwq4fidqJkiMbQmmxZe",
  "key18": "4o9Cio288uUp9yR1QVWcdZpgdYF6M2D4YQAEdBWv2t6w22d6ZNvdJVhVHjBsuUNEznFppasBg9EAW9uonPvJR5Zx",
  "key19": "4dWvYTk8Kg6Zwd7TSzGYdKqG3A7kCEdmEg2A5MiaAFNn7GL2bk6UpzxCCzQePiMRmYfpLvBYxZP1qUo2FxhNnGRx",
  "key20": "EBxMSLxrHdrPvuP9qRFZYW6qJxe1ciHX6GALRAUcNbZtKS4ecSUbpMfJwjUtnBiXqVVSw8mGPMRtfvmKe16nKtZ",
  "key21": "3jVUfEqv68bmCGkVbTX2F5wjd5uFcj2koUVxbjZCrHTNLu7aAvtnYeZVUPvp5rUbzC6YXMnCeUhwijjCdjZGgPYm",
  "key22": "smJS1834Km95SYZ7ESRd8y6tKycWXMNZLXKoURgK2WFAmq2fmxq43fkPtnMxYbsaBtxtKSJeLuvgt7GX7jiLSuv",
  "key23": "5jpWgJ2uUbBFT51Q1rdfN3WmMviqWKH5g7mCrt9VwUyigMRtAGVp81MjT9oBm2yhSQbczm62nLbrXJ8d5FoW4yA7",
  "key24": "3nFkaiqdtYSrCRRomk4GmHp5PjUQUdRPg64qSugp6A6X7jpZH3jyYPhbUxRNczSYonpTe1s8rcitJxx21LJAzUm5",
  "key25": "3X9YvJj1ED1sDbCoz3qB3nCVN7ttHHj2VT2rgs63dmkiSppVTECWhMF5Esjkkmg4myxgcqX21dJYeYZQACzqNuYP",
  "key26": "2YRHr1KKejyMkbqdgceEVy5bkdYMGU72KM71bdkRK7panHMKegQC1HuY7K1YrZ33jkGNkTfPf3JLJP4Q4brHwKV9",
  "key27": "BeYd89ri1T9EFxzAU1qGLp6wk1jPc1yf8JrkR8GPL1YhKDSNPZ654UmzNVErcsmZpHPVS9oDQ2j6VWsSRkeKABu",
  "key28": "Ri4sMAvtXjTNsuLNH2X7doqY9dsyg5pzgf4YxpSKHomyak4QJ2hCzNuETbMcZXdJqG8iH4bCCWpr6USELcTJ553",
  "key29": "2MkmxsMA1ffdHoeYobq4PFMpRSnsbf5wUU8gnUyqw1peqpNGDo9CEUVR9x9XhFCb9ND1zPwBoxfu2NDQiDKKAPj3",
  "key30": "3TmdmAN7TcAu9FNtHgSm2J1zru9DDLtMckdioxqCPCu1c6gTbxdp3fZqha8WSXY7BS3b9TJHZY91YB1UVyQYhujj",
  "key31": "o9nwqDGVPH6uUHRc1edneUPAsBrts4GPN1a9VEXmB771XAGiWdAY1eC5bxPfdDP3rTbjKRNtfyj3S9aU4TCBN8q",
  "key32": "4gbkLuxFDDU4CVacYf8f8HXu21CqoePmzeES97fywJfpDNUT3u1x2vHW9VCnEw6bP6wGLrDoYSuRjSKhYGUBCkTY",
  "key33": "2s35eELtXNLk9Z3QmXPfTGdFDBfc5EycvVkRVKkemU1aDLzAZ4k1CvhWhyZ8TNCewbYB3HSx7TWwjJsaQbVrZjz8",
  "key34": "4U84CebocJmvR3Mn81zFZkimepp6v8i6Fu4CvjSpHpKdHJWziCNGFDt4coe57WEu7Ede6tfZuVQbpMdGfNLU1Ucn",
  "key35": "43t9ZpxsWt97YtE7dTa1tHG5oRdBtsGBz8cfBen5yW5gq6UDCWpbwYWaWLz8m2CG2FanpJZT2cF15fz5XDFfPnmK",
  "key36": "4UnYnA8hM9zMSxLaRZ8hhMx2wbAKBEKHjCketNeBSQZ7Q9SeqYCJkSCnje5K2WuF48ScZPrBN7iBy9PULsUqA8YQ",
  "key37": "4R5aWDfN48NwXgYjhcvMHpepcR3rVJYSjVNeZ45HK3w3eLnGusEwcZpMgKNzgPTpDfhPXhR3vVJNmYNTbQeyozG9",
  "key38": "3ZNAQzyNiG4rZoNFt8e7vqcwfT5DvDfRhXJbsUuAwEdMiew7qsdsxrVf5Bx6CQRyGhiSPm6ZaZMDWwCwARm1WT8b",
  "key39": "5YZnWeBsY5aEQy5kFpmQyWsfKv8Gc4P3tf3AFMSVUU1QwiLcXgx2VPxfo769d9S9vXF2mMs6MHEVQiXYfPMnvaV2",
  "key40": "2G6quRj4oj2jCZoVDPvytNmsQfP7VU9NE9HLViyN5ZqsUEZtwLQqK2UDpfjGD2eHTvwjDTqmQKs7xm8QW4UZU7Rg",
  "key41": "5cfmNyMF1qvZX9B4MjH7QQgSzpMYzsYavwa9NvrD5ew9jKkHWA7xov56VmD6G84mCz8bApT66Y28dMuGEtK7ET8B",
  "key42": "2AoJxjzNfTZkYJXyRovDaGGEsLBi9bnf7myuNHRE4rCytLsydjpjjtkcnLSSjgd17e5B33N3G8VQpp7JkTNiTSaG",
  "key43": "3Esg7gzWzxMG5nCRTmivAAksSks8Gg3Ym7BWdM3J75UfexZycQFZ6DPGmqjVsLo4MH6a6vCF1H47X1dCuQSF5Mpy",
  "key44": "5smJfzDQk1WLbq5iMRbSbygNfvHj6cmqREtyYngs7fyWyiJ3PfiHpdTDC8qmiAQaNpMUB27AZXsjpsjYB61UwP4q",
  "key45": "4GF3ooAEfG7xWDA7WpwG1uoKgjNDeG5U59tJordykcjc4PPxg4BVgd6C5dsDkkvUnt7tKr6WiuAnP82n5NtGQK5r"
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
