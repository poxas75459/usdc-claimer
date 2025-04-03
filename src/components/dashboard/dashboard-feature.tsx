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
    "4vMhqMpeXb7sBg4sTPfL4fY81Fp3HvX7PmSVa1pYnETGjVBozCi9f6HhXdc3AAmqdtFzqfqndeaQu6FemMV6Rwhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rGzZBgqPUHfduskVTLGyKEdJDnWbSjPuSScrgcHd5kuZWBzXDNcangZpMphXKh9GEYjmwEzMCkBr1KiE1hRAKp",
  "key1": "4wyDnV8VnAmgUmnuKDmPK5cSy2ZakU2CG2CHkLiLjHqTRc57ymBj2FHXRbZjvfwAMAsmzJrYKnH94RG3H5EacGCL",
  "key2": "2Tjrx5jTp21uosJrupPhMmvJCUnB2stGcTADZj6jfGs2FUoBqW6KWzCKMTAG4AwCrpUUk6s5MrZpjRgi6s5XZbua",
  "key3": "Rm4MSHMhZyvfip1KzH1p26XzJA85XDaiBcADamzuiVSS3HkZre3Th6JJui8eVqH9GioqGzxgP7qpUj8B1wm8vWL",
  "key4": "2Wb3YhNz15FQSemtJT7H7xV52cvE6bK5kYKjDzF7Yn7XBjtzxqbxeKFn2DSJ7BrPbD7hEH8DBt9546ZtBJ9pQP1R",
  "key5": "2RVLUPjzXNtxdeJPWyFPpTg9pzEzdDPRg9VxazeBZvTji3RjfuRgd4TbudworpUVCmecK7eLTQreST3f5c3ZrkSC",
  "key6": "2fe4Dx7kbzWKS2MKmiupNGadcfF3v16p1LKs4jgLo4JAXyD3zajAfhdEHDgNG222cNMcSQf2j7CbF4E74F1TBLJp",
  "key7": "5QDzjdoinn8JZLfGze2r4wmrf6b7LDsYFiKys93m4JdrCW7iX6ms5VYk6CV65kzCAfQTZGnKCJe3qCgpLy4eRt7M",
  "key8": "2cn33NbK98ZV64eHjsc6moazMSSZ81dSG4wvFgp6bhfs22QQS8QsYQeUqBqmHk7i1wwPB2Wg3ZHJHjPuKBoZ944c",
  "key9": "2SfeMAfW4rLEjUwiHDSZmLjGL4EeaUQuZFeyf97Jzwc4duTBCr1tUQW8Gce5YA7bLWG7DhTefPLJjw3cCHgDxRuB",
  "key10": "3hYY9Lrt1dSpgYDRsnX1TUnMSwkvUMgQTGUX5kfQ1fCPRBQNWcA5wqAA2Z6eL2wPj73Y5CjRx1zsVGe3WfYwrTTa",
  "key11": "3f96MSpdRAnYqMpDguBic8S9Mi6CWqsgUYbx9TCz9PUkeQbxcZAWSKDPGMVXL3qo5YnP3LHFRdxPz3m3ykzDc9Jr",
  "key12": "3JCWqB6efdhVA4cpz8jikAqYusgJNVqKM6eL6Tdq1KAHBnKk9BF1AwdCHnWNXbtPV5h7xiKWhZAwmST8E9xknsgV",
  "key13": "32j2US7MRgFn7K1VsWZSV77hhZBXg3SuCGbsPDKzh9wCVRZhwU9v5jgF9JH3wVKkGNtj1GqcTPXEQ2rEmXRUWsvF",
  "key14": "4enLi8dA8fgLjJx1bxM7Gg73gpjxb2SaGkNvW5Lt1zNfKCpjN8qbmrKUKYVJtZni8wdppg9J8SL2hT2gJGc8bWKn",
  "key15": "XEtpKKeU2dgL8a7oNvTNuisPFvgFRhfMkiY2uUUrkkA7PWw7ZagfUMVjzZmgUH4v3xQC7oreqKMSXBerWM97shF",
  "key16": "5ywkGRwT52QYsqEhCLj6aXKHhSWiX667t8SgT1iem9V3SkMgFHAS16NHbPXtNTXjLEAjdk7hXUoshg56njJE7CDR",
  "key17": "2sJ5vjgyjQQgkZQDGXzQwnUuRGTXcQnH33rm3GwoXf7MF5CN48A3864w1qZruHUz6reBAugJPcpmUiyGbz3ipzw6",
  "key18": "3sQr7nfeHcphChKE6rUH4m5AoKdhrHTJwoEwJa7JpPSUN6n6JC6zxH82QHofPqNymmgjusmD5j73Hi5L8nCfprD8",
  "key19": "28wMHyWCRdmU99srHjdjJJWUPmQfviB3BW1DJFBKEF4JQbuaT9nmFMNHC9QzsdX5ZVeJB7Y2143GPymHybx6FKFW",
  "key20": "2NYyyWBdKyxny6bQTydQYBmkuweDM5888Nwz4zHUR9SvzEc4SwaDqPBpGhBGgQvA24y9ev8Qer6QD1wBXnvH9aks",
  "key21": "4iAckHMUq3rV1ADbFohmJ1HB1pBztHxE3gX6dV3N1eEHHSz122xEjE4XXb1r7AvKwNMQ4CMPRpGswSeZwTFzY2Pi",
  "key22": "25ZqmHVLEgxpcJ2VQpKSNaJgJKHwUAiagtVNZG3arFT8emTNeA6dyHHzHK5umntYw4GwUMf5812GQbenK88eUe3N",
  "key23": "44RWkH8oWJxYj3X7MyRs7qo31CKKvb2brCypCMu99PHWoMttGu6KxEJ7m6zF4AePNT4PD7n5h1mp7fS4MbEfMfk5",
  "key24": "2E5irZkUGfG58K3pFReUTjFwgJRZR7UVM2uHxzR3qMR1jkYGXmVpWjxeBQvEPYBKHyxBh5LULeCczbEtMb5Syz5p",
  "key25": "ha8rkNDt7c1DFksD8ChRXPrCsgbo1QGRdc7iXXrmKqPhDt5iPKmo6KSX86bnyPTpGeMoWMUoW8XMHzTtgAYNMmx",
  "key26": "2i1tzm7Bu1S4Z7PVkMUStL4ACZyEuaroScRqYZRTq9u9ZFRpfP11HYR6FgctYt5J68ChrnN5LgwHBTbQx4dJWUrU",
  "key27": "38HyuntbRanYEfTKdBjGN7BXgrnFFmGPQhvtKYYyxeMda3RYUTQPt5YUoDj4RPe6wyvnNJ6LiUNg7fT4JUUSXfEP",
  "key28": "hhUpU1HKBe9oWiDBo6ovWYrPxwD2Yokx3hwmdSUoPosUrXJKYdfjpNa73zw5VUBj8fjdVisc9SccpNmYU2W2c2p",
  "key29": "32q2TKipFVcLoAJw5s1Dnivombx2eKC3gbwf7SwVwWEByNwrw8cPUHvj1UjLwN26qEFQCERttP8Bw2CqiKN4sLVM",
  "key30": "45zeWCNjFu8VULCUnA7iHcGWZTRWDfMm1XoJnkkGzTYKiEnhi29db3592U8Mn2PU9zDtZEXQ96N1iPdRsHvBSu5c",
  "key31": "5WGNYUCK9Ao9Z7muA7JjC9szHwGS3fNogLvvdBcUfZZkec2EqovYLiAPFXRfwCTL2pGY6aW8wW4CPKqxQfmuqMxV",
  "key32": "2Gvq8XRkJNhGWEVqiwmWFvDT8baBHV8E6aBGQ6tquMogJ8VBRf8XdhCF63HNXKKiEK3eGnCpZdBQrqpsvqAGR85F",
  "key33": "4hHbzUnmnBDZqWaL4Sk6EJvpgyTnrM8WyynRjpeSWymuVMEVBbHZNGv1PNxmP5jNSF3LVxjXLqM27XMF8cKk1TDt",
  "key34": "3UbNLU3859m5M73tspbwaiUiTJmzLCKGieBGvqorMgZWAUiPdNNivMBdXjK2T8xWcJ7JPwtHzfmZQdpwYNmaASg6",
  "key35": "3YqvskxB5qDXKELxkZktuujyP4PW5JpqEgwk8FFnj52nYSHZmgiq3w6RB9U6KWaADKXSPFYetrTaXJ14pGYKWGRF"
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
