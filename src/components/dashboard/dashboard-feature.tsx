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
    "hKYzj2z8MGxTn7DPC3v37ePprx5WZa5e9DYaUhSnfDzqb5bhXWS53Gwu2uCfqoS2jEYk7bL4zLGVD4rywtGZrkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQiGudMSUEy5eTV8tnfDvUG69g4fK7jD7mLspjptLKKEjnjZbwutFMnWjY2trV1RTPuDkvjKremgBvQmzFQABYP",
  "key1": "2kCdNiAc8uvsiuD2t5mUZJNE7ivJSzjbAeGSJFF7DEvbyEeh7VCJMNPg6LH3wrqggWNLYBUqWKKshuGvFSg847Bq",
  "key2": "3GUhvfQQGBoTEo9eJzX4nF8TG9vVFnjxeHYgnZtnjGSPxfif8SmheNTABZ82EwWZ56H9xHSzeknE1uyUHrQgqQva",
  "key3": "5w6fdFKvhe5tjBUh2ygZtNYHikovSVcXYhAj7ZiDvbs8ZJLXycisasLvm4zAEL14Hq8iUchNqhu4HvdmxptCcUT7",
  "key4": "35xYxjX7dxMzBb2H8omXJNH47qoJN6WDmTYhtGCXDNDTVEUmEJmf7qKxuVNAnqkeVrhPiKkwfLPbt2LCFFPCTEra",
  "key5": "2QKxadfwsTRt7E61auJ194ZprzoiZxLDjTrqZ2NFwLwAiBcEh2Km7zvRbYJwtEuKXCJMipmLj2hKQQV6amYYHCrE",
  "key6": "4XCxWEXVjfkFnEc6wmryBqDBnyhbrrJi7qXMaBfr67B2GQenzJDcseo6SjMwVfQwSMgua9Q48A9Ncp6MrmW96f18",
  "key7": "5aPevGRmqeYuJFLXFmRgSpau6tYLuncsPwvK5Bd4k3ppZyPNdJTcDhgvDpfSaWPQe4njnsuackV9USHNqKT2PtPU",
  "key8": "37LXUSeKTPcf5SMytj2QNjujkpfw4bWuuo8wPps3iYUiHVqPkXEKMQpcKmMfTNhXdPZFu6TmBVfFtfWcBgcbyB4m",
  "key9": "28A4UMCKYjxBEFftUdwuDA4jX58FJ8vokcrrwsxHsnfMdF7zdb8fA7WpQPAdqAZcWAeV1ZBroDh8U9iPjSS8gvmK",
  "key10": "2YZbDJ9FVBneEeDgDYE8qtSAy13Ssz6iPZ8LTq77354RbAfbFTHkbi9ahNFWGeT6XGJv84S6wqEv9QeBDuG7b6Lt",
  "key11": "4YFw4PL5zmyiM8rSZRRdoKXnA8eV43ZZVX3waKHEvCk9iM4typo35452QVUCpxMXNbGkTE6tsVPwn5B3sn2b8vkp",
  "key12": "2JTE5saw87qvJSqrJ57UpbCcE3H9rEJkiTYVBbRBGk7iEgzbASmJejLHszhr4FWzUryHWEjqtCimfMKCV3SJXGNt",
  "key13": "2S8xs7sbFK6Jy8ocVuA9oaYJxVGzYj7Uz9TwHHMwm8fSkeYB7JmSjoDbei7A9MP2hbxqbzJc1heBa3vdnay5tPKu",
  "key14": "3v9jiFpdKG7fuGJWS25Hno28xn5VmhBGKsCjrcNMVT19SiCBk7hNcQJkgNdZwUFWHAgSytxgp23TPFayee74MR1m",
  "key15": "5gNjuc2rm5z2GyL3LChsrvWUzVJYLpqtycYFeT99qhw738EUzmVrLH9D9g6peictoX7HV8BLCt6Nedjsdd9m8zoa",
  "key16": "5rdH6DqwaQRy6iBd5Po3pDjc8erTNBFeVGEtFH5Li5tiDdvCBQ7cgFCx921rrxzFcN16SN82jMd6TqQtxWDKZSCp",
  "key17": "56igKKmFXaoRGb7LYEXrbZZi88BgfFcAnjAK46S9nkg2hxyubB4GZ6a3VVDXiHWjDPTxaPdcSqADrMre5xrqWLB9",
  "key18": "2whyAofukzowrkcbyYaVuQtYrQKfAY379ntYh9HuVG4tyVxao7gB16CKMcJZ6aGVYe4uKWtThoVmuD3hi1PUVJuf",
  "key19": "3NaQVvG6EJjxnECVz3LL8aGoU2zcHnh4qs9YXPjow3wGhDN2bHBUoZjKdAx3kH5VspoLyQ8r5M9zCNZYfN6Vopui",
  "key20": "54JgGMDCnQJRoYPPrwTgRHMjUKf8Q3AF5KXAgry6tqebx7m3uEnheuhyKYgSq7rMhJ6ppQuRgKZh82eareAzg3T9",
  "key21": "K5mBkq6v6KHMD5KUM9uymYHx9LvxVt588RBFSECZrk3cF16PW1MMFcfsZgA7cggJB6r9uLoBcyREdHB163LkkLT",
  "key22": "3N1uuBFbZWd2iJo7gxotprowwYrjuVKotGHLxoHtdJmqG5QPEQwv1i4RkFZpGyzQRSUFhPMWZQk1vJuCzzxrhzyc",
  "key23": "4FMcpGFkhrUSekSLQ4dLhAUxvdDDmGEEGizeUVYcu9HxuwZFF8pKor114FWUHDSrT8hCdypcPvTJBPkJppp5kAEd",
  "key24": "3QWbFhRXMHD7Ya8tCK15AutGM79t1FkBSiQAysH3DPxwrVAPLZZVpc5nYeDGZH3MB2J6FE54cpcD3xv51vMovBWg",
  "key25": "2SW98Yt46jugmYmkgom2VvtxYoC6eduihUAr2H2fsuLqPU43hSiuZ6h3oh4jZxhsWQj3SABLM1PRBeXTkAuevzCL",
  "key26": "28Bcr6MQMDpxaKCGcsLUK1uixY89pN65TehcJoffJuY3ZSNGsycpShqZTSqAQT4SegHp78322JCezUckQurXMUV6",
  "key27": "67TDHA6rL6MQrnB8vjbMeP3GP4q36DNzsAWifZqfu9E7SFpGXGaKSAoNUJo5SneAXpgAo1UW9osH2Wro1dBQQU8k",
  "key28": "5hiEYpHUjDG6YCMBKKtMZfnucbq5R6JWxh2Wcymqpyb2uRxU58qZCKWmN2w5c2oKLXRSmekfuyVvdovjJcm4Dq9b",
  "key29": "5dDZtm1QdyxbyhiVV4PP5SssYJ3WWJhbcSAHyuFUjzfnFhDh5jP5YaanuqB2Uup7y3mJ3838csCXdXpxY5bNorYF",
  "key30": "3X6yEGCRAGeobjF6G784w7g9J3ng5E822gf84PGpM38Dytke4tP6QPvfUe6ed7guR8CjoFHR5f8FAh7k9vUHZMVg",
  "key31": "5enzaoMeS5GjcVvZVGGyENRCqHhHnt24ARETGZhy6N3AzB9KQqoKEcrGgYFRpiWuXm2WM3ckX2vJi7hb8gSPYJbz",
  "key32": "5o5bzqbctWvEWStjQKJ7NSgAbeVPR96E95ZqU2QN2Q6vyAb4GUe2QuMkBhQ5gfhNjr2EHYZ8jCL6xNSqG7B5zoT8",
  "key33": "4q7fdqPVsT5EcGPKEhwWD58CpJp4GUH7kPDDhHQjqsobgdUCcV3L4XnQFpwhAub9RKE5pvwvave6h21dxB5hTHpc",
  "key34": "2FYmQUcFZAsqVXMejw2xh3VdTqNsNPc4o4r6j7TzpXmssi4oJn4JrSCb31Y36PM46wL89cJDcRg8s1xuVM3AWb9R",
  "key35": "4AERiVnF7j1AXG3YYrc4BbDRDmjxP4TcmenbRMx7yvTpeqcvQ1hbeFXrRZB5D4U8wh9sm4Tr45J9DF5cin7Juhpk",
  "key36": "XMLZ7p3myq2kLpFdafcczX3CpU864A9GjbVt7gb4CeaJpsMaytZacyMZDsmjDTKn5Y4LxRKfPqxqFR8Mu5uF4b8",
  "key37": "4ErzMggTQq8WwJoMLScNAWUe1jTqC5Dj57RKzjtLhC4GqSrWEvFYYBPb7fuypUBHG4ES3NbtxK7487cFyp229pHx",
  "key38": "4WZS6qE9goL7EmFrdNqeF7bM9jKThGroEdHGm9kLhVgHfMjSEQeMGLHsJ3m2TU1H4AV4vSN1obTnWUpqycsmrN75",
  "key39": "5meD6VxiBstsnhwSBtbu1EHANLfd5M7UuL6k6idF7ZDj2W61FLN3PMRjKtsL57Y1mc75VNhTmAwDGuiR8en6Qo7t"
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
