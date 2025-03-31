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
    "5zkXoV6zZuKyEcuHp1dQgJfrhKErszfa9QNcz2N6hm7TF1bziZyuMPbwk2w5RasP9erBPUVWXrANVkRz4ivjKewk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQFLU8zPGdEEXAdRscayp6tZRZBJRgUcTUqf6ngtj9GdPL1uiVsDUq9r8dhQp5xq5ca2xkHynWeukiuGXP1guT5",
  "key1": "4YwqbKAGUVP8rnXxa8fKnpzNRHLoUkXAGqvjY8ynbxQYbPNhB7LXgFBLJV64uT9K7HMXw6zsU5XwBUMJSTpDrgWW",
  "key2": "4TxPJwdNWidpyTTj2u3xLtzdAZFh9tVUtkcLbKpZJAC372aQuwR4DFjNQDE9KKoFDF3yNA7TQoaJfaV315iNBusF",
  "key3": "vDmr91w9hnJFoSVPV3PuaRn7PqdSSjuei5tFYxy6XxxQp8vd7nGyAV4tqndosbtxYksozobU5pKGxG5adDx3vxV",
  "key4": "4YmFPytrATpHrcQu2FfDdKAb9vfrZFKiTrNuoxDyiQNcpkd7W8yUW95XojKKY3YM8utvmQK64WimbdC4BFs46esK",
  "key5": "25AKEDMJzCiDrWPFKdqtNExDoBge4rRsFKidKot739t6oJGT98baU2Lwwg8XfxVgwpvbtQYV4Px2a8ZiCWEVraqH",
  "key6": "3a78C8jvNKqbXYnuAaDGSSdV2jtci6FKox8WsSMwAD9BfAVezQkxUUiZFwcQfsbXfDoHSyAXLjPSA1bYjNKB8rVr",
  "key7": "5E2xrRfnsXgsTFYWAQTgRosZNPUmJJNbfu6ztYGcY6NshRBx2WRHwEh9TVQcfbrs8S1gDPCNLLHVj1bNHyhNH9dp",
  "key8": "36rkRaoLcQDHyCaBSPMvPZSLg9ggKUtzV3idW5ktqJ1h4nD3wHywKBW1sTYN2xtn4WnG5cBh8wfgzbbZqSCAxJ5c",
  "key9": "2SMaHrBSuyf1nMTvecnUdKQ8R22AuLUi13gdEfLS8Sd4fsGrj6Lb7aHFbZvaYzhmThZMSfDWtae7sVPiJQgUKirX",
  "key10": "465iC3Le4JEa1KKTcqMG3YMwPXaiAatuZAzaP4RTt96iLwb4AMi3jKc1xdXQuT4Uyz2rkuVF1PXMkPwgEosWbYdt",
  "key11": "3V9C4pu6HWfskvPkCKc3HupQaa6QAFykh1BDuhjLBm1JY3YAqutXsoA4EGBqN1WogxCEwZqMZ1C1g1q8TKpznpzt",
  "key12": "5zt9TUVxDnJKMrBRs7zaaS3eEEB3949HU1HT91ZpZiu5voH5WKks9M69R1LRTMqeQ1GE2rMFeRentQ5Bw55bgmRZ",
  "key13": "5a3diXBjmL1yG2PABkDfY6Za7EfiYuWMHZqGHfaT3aEEehoxoFmwL1f2gBGNEmuapEFPBjkWUW7GHaDYcVzDFUVv",
  "key14": "3QpXza9QXGdF7BAnNca8x4ccD3AttuReTAR4JUbsDskWQ1fHCWxNKaDurn8M769Fr8FqKSM2SkhSBJSiABRXVsxU",
  "key15": "4eGxNMa2mE6n8VQs5rQWGJNUqeKLJW25nnCg7Ld6rfkdPaFAfsH7FtHuE3emtcxiCW5EedByKdAmPZ1RxKtdmdDE",
  "key16": "4KL9zPiUJvcJiQFyh3DaNENqhg5ni44WV99vEmKb9uaSf5KeyiePb38UxJoHo3tB1ne219EkD5PLg1W3PjpZRqbG",
  "key17": "5qvw7kfZ8WMqAaETRivZnv5u3pXTFB6oQsaKmFhhP79t9VrpXJ3ZYfWjijWpxY7DEtWSgEXCfGxLbuh3TBfE2Sr6",
  "key18": "5AVVe98Rh1xyLwFFZoPexezVPNfnRpiuoD5RjckmiECeD5AQYznnoS1vp1AWAwfDj3wToPb1eAf7VSjcU98cZ81D",
  "key19": "5eX8NL3i1GfznZmbU6eZYoTx2Jo2QcXtyDcPby15mnoXafc2fF1SZCD2HMnr3y4wgo8Ew6qpTPk2gLHMCbJRFaj6",
  "key20": "5MmszXagCwmX7hW59rUZadM4HpXTFSBWxK7JaNbn93MB7ShmWSd8bR6BZ8JDY6VCi45fcw9ZSZAHu4pNPVj5dMbv",
  "key21": "4FfAurj9ZEeHYPW1GAUjLTQLywFQU36M1wL6zq2wEVdpMN6MvAkjbQX4JWtiYHpH5eTvXxvzLQokXvqRoSkrQVQt",
  "key22": "25sEtzdAEgeez8EpYGvviwqVtCaAjzsnoNdTPpbUH9j9RJdwcbhXapww1hLWZriSz2sGyf8d71NfTytaZvR43fum",
  "key23": "tHDmmFMHsuS4DVsmkuSCsBBAYUQsxKQHxAtUpGtR1AbrpK5MTKA8TaYz2CFEGdSecEfmumD4JyD2wrFgUW1PHT2",
  "key24": "5HH8QethLmSKZ7vbGYWpZwySj6KwTx6aLtUnb2qX7i23NpGSyzmper1LxuyYsbWSmvbo37q7mqKxyTfH5nWKAUZZ",
  "key25": "4JFej5Vqf8iWwuhyzwwS8pUpF134qhpSiZiYDi8FDWnyLCFd96g8aCeLFTREBFaWaomzs76BYpWdq48e5GMwbFvT",
  "key26": "3xDW9gvYQU1rqdfimcrWGWGwc1rKeszijjqmXmEXirKSXWkPqN5JG7SdQnsvuSV5WP9o8nk8zDdLAwCqiy3QAWDu",
  "key27": "2qpdQFj7PhmcADRJbSQgGDBjgkhD5hDDm4n17ArGn2yzrTU73VrF6bt7z6tpZmm32dPyjCZLQQTa15JZuw9V25L2",
  "key28": "5v9iwdoApRBxEzSNKdMoCNcfhzmGrAuqCUaAE5wHu4Wwhpd3FCHoYXdr7e1AVFaRUJZSnDPBuu4GqAUd6yW4kwzv"
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
