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
    "oYw7HuPWejwUx9izQMEiJaZeLPN9aN8N18b2yUrvdypqfwwSREWaFQru6jKEw9LkNgu5LsnjK4hpes8aGe6DBYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W2p7WzBWVwF7vncC3reKhd5ZtDLpseKDm7htSca3AjxjfE3gttx8rvCXho3qrmuoFCe8ZbbSE4jbdECeK8iQDHr",
  "key1": "3gcpvWkTxSHzHZm9q7dv4tNsTG5Tz4f5fr7MFV2TLN7X7odVA55VT7pkdEzMKmCZRz56dnEaYpijbt7sddbbLiT1",
  "key2": "4LbxQUEnaRpToho7HkrHJkHw9KpexyrabSkrS2DFzdmzPXSTTX5A94Z86Ye4DL5PM9rtXiv5fHd543fx96dxZ3G7",
  "key3": "45ha8Up2AnRLRz9ycQ9i9xfQoHXcpZfmn25NagPt4WaVcAV946xZtHRCHPcgrnTVtbiRNAk7ALoCchaicJinfc36",
  "key4": "2SUD7Cy3RaSjrTPMJenv3U76FrP8TpTx3XaCg7qLm2PoBzbrc8CjZ77W4vhkxNJJUYwXAZm94eqCnJ1VfrHtzvmZ",
  "key5": "5a9ooHHSh9P9VtDRKpyV57Yp2vPgNEtrNwXVtFk5tXxsgEgYDHuNWxp2KuwnbfLqw913D9PGzwELAQK8HaE2XnyQ",
  "key6": "398XNcrEsLYbsT7VEvFqL2zLbxBSoVCgLw8xijYn3kqD3EWvYkeN1d93nrbuJxmXC7iRWco8CjYpxV8Rfrjyb4KG",
  "key7": "3xXAvMUyxvTdyNNWLHYZfXJ8ZyeKA4zUuUJDi7CfN8YGsEAHoRPrAKLBCyUK2jJNaDGLE4ieGvT6JVq3Wqs1jAbC",
  "key8": "29CgNe2fX5E8AUugqmswh8wUmgNGzgZXgoAzrnqRmfo7uTecXG9T5nxc5vYF9oUiB8QgKu4XXSb1nVCUX5LwNRgm",
  "key9": "3iewbmXhcfKwKbDFAd7k2htwSnBXq5NX8YFUuDV551mvukXSLQTB2gCJE2kMwJGn1b5B7sf7Zrw3DFWZ7BeJjpZ6",
  "key10": "3bBFD5H8mCzUwFVkp7ua8HDJ23MQ5W9o9Hcd8nrZBTBp8cdLFSj8nS8ytrKYPvvSo5y7XdxjrpR3Aej6wAYj6SXN",
  "key11": "2o1guMHb5FmMS34ySNoougrE4Cx8ZDbGj2qzT5fAndQNUsMCAoamCR3YgYYhTRd1uKUh3UmFjEf4cEEp27jYouhu",
  "key12": "3FDkx1G146Rz8p3Y7NgeFQcMFDyn18Fo6yiDvRdV1MibsKvbxkFG53HrmRFbjN4DQbQKvi1xfaEc8QTVRs1T29KC",
  "key13": "4a7WseyELbDG7GLE1Ykc3kRTxzgRkBcgdjWYGXUATEFDma7LKmMYJ1LQCP9dqC8L1ahiGcwVkdkrrASgNVhqj4V6",
  "key14": "3VzkoR2fF88jsXnBQdshAaezHgJXqUNbUenz2cEVqpCR5rPCEwkzHCJgvZb6aHD8mPC98oTLe7hzNCRJjZUkFCgS",
  "key15": "42DU8qwiq2agFGBYNyWXT18BxrFbNggBHZ7bQr1T3EBomvwbB76JTWUom1LJkfv85uyXDNLCVGv7rShJpk2uYcqx",
  "key16": "4k6ufNnHNgNSRJM5E8mvRdRYDTQXDeCWyQf26WiRNCEhScCh9peQjbop6DHt552FXiV8F3uTzFZbmzDQCsyAP7Jc",
  "key17": "532aXT2Qso2CdNBDFgQ9VJm5Df2qvDsPG6tuAkWuR2KA8AcvLGRKmZLDyGCq68rPZ7LHkGHw5BoZ9T1ZoNS6n999",
  "key18": "28vNpwB6fje5cLuDKe1ZexAnoKQrG6AuzKUjPZMNdwKFegFmh28mTxxvj8D2TptASAsNm44bTcDHf7GCeQeSREvr",
  "key19": "2q7rHSpj3TxHFD29hmyDuY1uR96uJEw7xdbu1M7MJjTnh9pxPRt5F75x4hXKgCYyS1JoWRnJjyJLzTahNw2foExE",
  "key20": "36DhC3Q4cU8VqMabuZjanc2LX9B8YvvnpTtuRtWgHdfXz9fa2LYpahYxGoRKas9BgWc8fVadMxAWQ87F2dYmWqFx",
  "key21": "28LahJHbLAD6g39cvVRCKGQJGjvVmfubJpc7SUtNYbVHvSdfd2HPApoq7dcfEGnai4v5XkyVLwkYwHvXHtT1NHA4",
  "key22": "36rSZH15LixPDpXt8y9id51drpL34cmtWo9J56eifSxXm2Qs6ENXdWDizm8ytehUrHzNyqrLvvqkcYXdET8DpbCu",
  "key23": "61jk7ghjybqCEdEDWsEqHUcZNtKNorJxRCCagfKSEHcVMnuupXzPhG554N1qqJzYTNJSmUvWuG43BYKVFstbmSRB",
  "key24": "2e6j3MvmexUpAZ29WMV5zop1geCWEwwEWXKrgHRjxHui2UTiCizCAintHvWa2DKm7XodDp7LmsUgEt8TgLT8NWkg",
  "key25": "3b7Vg1M2oKQ1t8PHrdr7EwEh4xSSDgY2NHCWYy4JbHNXDkn4Wct8fH7uG3bbxRu9vc8dsyJWP1CDFDGEJsazrBib",
  "key26": "5FSTLXhsx2SmYLWkzbruFqADCq3oKrQ35V6zHYHYwhxNJ7dSB3ygMxW7Yfno2SyQMHkPYj9ZA83AzurrqaDgMPku",
  "key27": "3ApGmTNAGTRSdjMFcjzZ8r3xV1zyyjLtPUhSiA4FkyhfzafgPTsQngeYs5og3hHCg2DBRLJ1gHsMBvR8yPkkih6u",
  "key28": "4vPa2MQjFiQWa7iLS9GwMhkA155Fep9c2jDoJBx6cP2SwWuYZdka8qEHxfai5crdJEEviFMhprWheQKhrgpxPLCh",
  "key29": "3aR8pZBrz8JGqDHcneeZSx6iCqvFLy4swaYD6mUQ7Ugj3nhDwDtU1sWwXPCaT4hCysvnjWTyjv3QXZJoLWXK46nJ",
  "key30": "2x1XYHv7DwtwcaNXLZ3bDnNtNkhaHRh1H49SKWEKxU975NUdUpiATVz9UaVPPi8rFs6nRvD3VeVstc5sNf2qa5Ec",
  "key31": "3oJvkJ9kEorV61yaSS2jkyeLDFmmHzryp7JYY89vLuBVuNxHzgDJcPUMyUwG5FqHZz7m2hMFZMfo4NpZoBTNZWi9",
  "key32": "56f2F8ruDJgJrr4FHx3dDwdmC761VbWJGYzidVV2k8LJVurgUnj8LgcB6WM6y9SCpbR1GnB8v926uGXud43X6dzt",
  "key33": "4dfy6ZJXzjU5vPFKR8DKguNBZy1aQ55cs5ykxR8HCGbprx1YbQ57xiRFQYtpr11mmdBB39nNXEftS5AZJiKvaHj7",
  "key34": "4j979JTDwvihJLiY3o1EEgujzpUBgVR1KrK129AGdJ6kwQ6opVjwn2YZj8HUVrMuJ1F64jsgCpvC7mzYMAjaja2D",
  "key35": "3BM55Dvzcqigokqp8cW9WDQYBJWtQ1vwgNUuxrD4nspHBrWnXBqzgoEjyxzPBzDrbbNJoo7fc6UEELgTEUjsSfig",
  "key36": "2R48nsBu8raHmv85ewGvaXzqFL3g3HP9zmDLrWpfeL9sF3jDtgCc8vZfMzzBteV7vMXhZCVD7Y8U4gVFrQpMPVtQ"
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
