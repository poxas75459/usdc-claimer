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
    "4awHnxwpXu9Man1iFJxGQkg4LoUkvpqrNh8y3pXA2Cm4c7PaJcMsG8Z1Ek7RPP6DCV1RxoZjeejCUUkunG2SjGgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E4uKyz88ipCZ6ePpcimQgRMP8UMt5xTCMmiHzV1MRPBX1AHavnzZKeCvrSdHHkM73JEhPb6YUZwE9rpnE2fmcpz",
  "key1": "4de44drnZT4fN4WNzT45ieDqjBufnhpumPy4sPNkG7vntiWt9VzYuPLahLhAgyvhRJsCxGvHNnQYBKa5hqa76WvU",
  "key2": "KVpf6XZsnheR5hDo431HJHXEjQqKUTNdR4nYTKgetvdooQtHpPKCv3aAUrfmmTvExXawikF5Fzng7g81QTiFULa",
  "key3": "33QfKB8gzarovPaQw3eodfUihtZfSQNLSHZpazCAEXoGcpN9GjJJKr5NyY2sN3nLUoeWdoaf17eFqanLmwdjdHxM",
  "key4": "4qrYuvXF3KGnFqRDi9DU4zuvxsBACKb13qCjqxwM8RjVpa5UA7R5RYRGjq76suRNSMhSHRVgo7nm1gfgR8w3X9NZ",
  "key5": "2jb4GYmqDekgDifE9KqsHSptprRNv1B7mtZdD98wuYbBr7Xv5ZDSuDN3BoW6mnJRgF2esJJ2m1UU34AVEY8hrNbj",
  "key6": "3B8hFWcowkSyXVZAuQpym5JTBtNB6gXkLeqSTuXvmQsTe7mqe43eyZQei7J5yu378bGsrxvGgNLUFneqJU4iQYCs",
  "key7": "2ueHV1ekFz1ekZNSNjhQAChffUjwpFXb4A4ymUhfRs7z2d9tDKpXTRr4vHmsFaPX8KScm79z9mNRpGQX2QSPJmcG",
  "key8": "5JPc5k4fFhS5SYbiw4LB56GWGRyPt24nBBwY7Hix8iHLZozZo2kFVgcDSRR1vPAWbVWA2uGbziQmsDhsDG7qwxeN",
  "key9": "zNkUt9ZqgYfscGvsz6yRGfYgRf7yibWZbsXLdCWWouhijkCW7mbm12Lu3Mg7NWyDzuH8JeDvdSxSQPdGSYxJmeW",
  "key10": "4W78CsYwGgrgadbxPCbfZbkBm1SPvJeNp1ThMY8Av89GCmSxyg6TyojJbGAtm8vwzEMnFYo5nrcfwwAZj41SWqXQ",
  "key11": "Yw7iwVCpaFd9oQNbKHdowTUDBWC9EzKyZFmjUNop5Mvb7RTAaqZXE9tWmKRy9TALcqgQLonQy1qK6TjhiYD6CF7",
  "key12": "3pd5R7bfmetBdx3cyZuAFiGYnmLf3d1Xxv7rvtDpepkt7dSVg6g6VwX1cHiM3iFNhE4Wyfhi7Gdfv3YG846txdxi",
  "key13": "2uCBgezDtwYpXjexadBVn62xMFV7Y1wQ5PTGxqxfZFvD5SeaE43DHjW7nG4W5EcipuEmbSkVeUgokyV1FaWcF9F2",
  "key14": "4jzmaw6zBXc9odx14UbogQLAXxVu8v3FmJtyskMzdZPeacSxpzHHe53PYMrYosC1jqPkaB922UQrppav1ik8DRYR",
  "key15": "3dTzz7MQNc35M8ddx9ytpuQLWu9B1Q2xcuiVtAxoNiE3oqKVmGoihT21NdWJ9USsiDDB4wr9GEadN45cukBJK1xZ",
  "key16": "2bnPstXefnGQe6JbLD3UTR6NxgAtSvFrM7Rmtg4DcEEyEa4jj7UQvC3q4HtNVgrWhm9CXfsBqZYiKpEGjjQt1V6Z",
  "key17": "b6sfGAxd1Q2u8Bk9FEBAfT6e6nPYQB695wpGwmZj5r7siJMSMkWKGR6h3CZTx6SHvakbQUu1fQexxJjxAAgpvSc",
  "key18": "5dNhMYDCU9Eb3w8Ypvm5yiv4dEB7S2SAeKAFn98mbMC2xyEN8GbJSiMUEpWhqVqebLnLzFyqXZ3SvSwhHn9yoHaf",
  "key19": "4Qcf22fFc8ijhV6MJZkXNChqMTWyE2qKSFDDV5SqjMpMfxLvVtRxJ4F3yhX5p2LrLsqZQqLQRaXEqnoX72dntERY",
  "key20": "S6eRAf5qJqS5nrB42tM7hMf8Wp53Mwbte6ii44Pf6953BVhAKRogV63buZ9YRdGW99233yUA883kMMxrJgesmgZ",
  "key21": "2xAjZSq4nrAqEEghgmUwqpG5htw45vArL5tDAEuEGFc5rNCi4TaTRaeEoasKtRyudYp8AvMgPDBFg3VxEMNoT2dk",
  "key22": "2wuWRM97gh6UY2dg5cfPLr9PSF4S4A5xqQAdc7mo5o5RE6ahqxLXRTMxcotxgV3HUHDgTEBg5aqSgmFkUdWU8xhE",
  "key23": "3Rm2vsycX3mZXFiddCopbNHrdABXUhYBfhAvfCPEfrTrujH5CUovykxHJ3JRUSqeLha85cZ1gHHeBjWu4ytP9tS2",
  "key24": "6Fsu4kuB3PVUcY6bQofawE42eNU8QmZxpHCjAuNo1GsdJLJpEpGie2VaaqA7NztLQngRd11dXxSS6ZKVe9m7xX6",
  "key25": "2AKWygCyRS8HPG5J7GHy5bYSoTMbueiH9nUak5k2AqGcTExKLF6WFvyA2xLNdXJoue2VdBJRLmq7YDYJvYgqdp5t",
  "key26": "4pHJQYpBgeJoNsgDrW7yUgfeS26r6RZH1mNYjziUDcRqDmzZZsrmSnBNraXt3AxYdbE4XPz7z8RoEFxkQZ8QRpzv",
  "key27": "4TXVscnsX2ipYnrDqPcUvFEMvecrEmDdNWkorWLM3fpx9HXnAjU4VNpHfNuWB9mG3Z43BGYNBion2o2fW3cVNd9b",
  "key28": "ovqNJ7PAhj1e5iENxbqpQRX3ZvZwsKp7VNJPnYoUFj4MRHphzKdNkKCwqxpvpZbhDBCm12Fhbf3psZVAJ9ovxE1"
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
