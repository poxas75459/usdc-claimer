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
    "63KzA2KYeBLnyEfCzZku9w922FK6Ca8S9nyfWE2FZuD4v7gsiz1xUjF1L7JHbWHKZ9EaYo7Gf3iyVWbb8c4qCsaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zZyhcRnRBarg8e8ryFxoUiNxbRrjNqNMhN4ioEgYvZYDHSb6rpQz9rXPUYgueVkNKMCcA78AEbYjkzUdQSb5EjL",
  "key1": "5Vw1j4f9fFK4sdw7gat6qsPYDRU6TiBQtzGjzC8hntGoVPYbDGUdBTE2cQPwmYF3Gi4BQS7Fx6Y4w1pR3kQNky3g",
  "key2": "5aiXgVjpAAJMqXhKSwAiNncm2RbCNUhj6YxKoTFTgPdPTdyQztesgphnR1Kj97vz717hukrq9HvY8pze8XKkSyY7",
  "key3": "22vht7DYnKt86L7tURkLNh5kF9vuiQY8VmkaW3jv1cuqqx6s9EczrmrMGVoSxAU6CV1tkJYXDJYcN6UWdj6Fv3FN",
  "key4": "3tKckHAS8YLApKcv4o9iiecCeR7JYnrEGtBJ5SqtDLVNpRrCZjvio5Toc6DnnuRZ5zaj9Wu9oFci2arWV7U3oiNQ",
  "key5": "3wDwuheRWC6gdpRpsxmBFPyMc26T669wp6xyZ8Do4b2BPeJ7aa36Tr45HMGCE92HJ7Kh6JnEjzqTyAHLwjvDqwZX",
  "key6": "VKjtGKm5puWCfo2QTcZvPE9fA5uo1C2bRPDFAdntBF7bKmDQoN8qXK2PXXoyoLLxSdxHXcFFwLRXifL6K6hHtSd",
  "key7": "2gCcPPLbPa73YPyod3VasoYJND2rUJbDY8rhTna967umB6puQ2pNooeuF3mmCVvZG9CF53CrZs81c7zscNpy6cXB",
  "key8": "4VLxzAPmPyFNLvNd3fbEZzSkep1cvqBpkxFWn1uyMX8TqgQENXLaLb5N72KE7LhczvUpPvSrZ82bgmtsdxWvkdD2",
  "key9": "3UdNJUerCdtszr5GZfY6qZDrXbA6Gr7utTauBmceuavdoaus4XoMnScSQZYz2pyEMNr9fch3MZ3xM4w1WJNVYszj",
  "key10": "4pn9VhjTjALMQ1mxZy4GDQ7C7FFcLBFWNkqedWf96yCmCiSANHeErV8GCAMeN33MNMUuE468fjJnebbjQBC3CbvT",
  "key11": "4Gt2KvAYY1vpXT5VbEnjiZiuiRpxkLJukTF3B67TXQNWn4avKY9EjC9t39wCRTgsEbK7VbhG2KW99e21QAg6ojUJ",
  "key12": "3VdVR9RkYTbtJf8wmtWxkoHvwm7hRnW11ZMGAk6hnPRpsXi5mPv7kdbXaSATJ1SB89zh7Tw8QyQUq7eHCh2aTnvV",
  "key13": "36CiYiEYP3cbfyk1FtbPkPCQNnSM1etCVLgVNM57jnyRfrMNDma2nPLbn6QxT4bkBwUMRdp5Ln9jS8r2A9xXVMQD",
  "key14": "63dr2188LExFeHYMCsK4VLkTUCSA2BZn9N5BrfDKunro6hiULSdoBV9rXim4Soi9bvLC5hHnZTtJskaCYddq9eqd",
  "key15": "4veha6xbKF9xyy8qYo2oYy2ofniudvZCUN92HWmAJydxBSKE6p87hzDt4xqD1YmYoxBwpKwy7N1TGjak6oTPSHNC",
  "key16": "nm7dk1rqmnCq2vZeuRacwrBxYpYcJwpdqCiHwrDHgrCmuwC2YW9MbCmr7FPV1FLUcbU5YF4rmS5yipNxDX15DZY",
  "key17": "cd3wJhLmfBycUqSVUBWzy1WrA4XrSYQSgdGSL4cKYLJZ6L1V9CqBnQvwcNiyrR5W7sEorkzXBj8UrPmufXKhKNH",
  "key18": "3T2TCV4Etk8Zvqc9EwYDjsTt8SbHHjScQQJ8oREMUZfnNFhvnT72yz8x2gAGD2gKJrWdUsiApgwAE463Dz2f1VYz",
  "key19": "egZcMoMz3G7WLet5TJ3XgUmztwJhLYU7KUwNTXFdzrkC1Ch8o6oFSxhDEJm6JSsJkfNkEKeagnSwHHrQf12PSCx",
  "key20": "EUjdkCAwJbGfyRuLmJS6a87CXC2Vo7s1222r1Tj9Cdd2cf7ME4P2iqo4pvr5HGcxEWHZp5jP5f4kU5DF67fGKMn",
  "key21": "StRj75fcg7yYBE3UuDvXz6B92CndCNBZfWTpTCasuNRgbUxYX15ztyyoB1sby8VJfyKCjAJraKbMnW2gW5tqDhE",
  "key22": "4jLiSSciJsFNVH9wQuAteJMT1WUipckwoar44Gt7xB2Z1kiRUD7EHxXNXubaBzUu39rGPG29whVFxHaudYXX7ey2",
  "key23": "XWM78YYZVaME2RW7HfSYkcbx1T5chSttb71t5dwLVMpoCEUbcU7Aq3qWvQAeMzwszmmURpM9DXjpVpL26KTh4sW",
  "key24": "2RSg2BiSyeLELA5GkYHP93cC5ZV63U4jud9dVsDixpYGsMdUyEzZWai6YD4apGJfZDerp7QJ83JzV2LR52Njq6Ek",
  "key25": "4GpGE8JWtxc2ib6MGmiWBorDvaDc3bJyfub7EZsFFEfvdaUzaKUQWgdwyAad5azwoYyzq5YpuU4YBYffdPiqHmA6",
  "key26": "3xVbdiBHJbFhDU7LZaPmxfNByDYcPQ9CrZjZQ5BYw1mXQWYgphEhpSCNeFZxvBX9YjZ7LAttPVWibSCj1NCDqnDs",
  "key27": "29kz9gGtCu1AmoGH2zMxRsM4QMLUQ6Xg1XRHd6DRjoHw4hG6Tmr3z7sXTZWukoHRuCj3W3pE9Rx32kdjeiBPuy5g",
  "key28": "wMeptdSYDxh7xmuhMtFWpzdzi3srxtrLRRSQfYzZsYndUqNFYx2tzA5teWNQGEtwUSfDwYmDZ95ToHCa9syfDcY",
  "key29": "Xdz73eFUv9hhQTGVNSvtdKZLosEZaLYwwbcCamGDQEj1UsbBLfxNVHx2kBDVn4Qcnfb4vtmiBS4ADLKVHUMAmTF",
  "key30": "3qu9QU6R2L8rtS2nFAK2CgXjTWddY1iPbrDL2jbZFSZbK8N57gSQxVqdd54cN72Dh8HGVFGpjefGkBaLVgrQJ2iQ",
  "key31": "2Dp4kUypDHuknoEhi4wwzMvgebBiTbDq2aWhCKSJdeFg9wg8bi7Kfh9r8JGJfTAdrXBodVSn5mhroo6aLfwReECJ",
  "key32": "BNQgfoMtxehjYZUyKUZMuyDP3jNecdxVcUhYDEyDxKRHVcVuPrADDGACUwHPxeRcEG5RCvpVdcFmmcgUWT31Huy"
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
