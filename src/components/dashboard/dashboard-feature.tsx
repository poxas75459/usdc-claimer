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
    "5gUTspVRXpjfXTcjXTFZ6QigJ7B38DCkvDixVQAuQstMa5xDFYknn78sDrZBpQbY4KQgDkRSqFeXuUjdXrQxLpP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M8kxv3d7fj9yhKSscmUjU4DUqa8BU3r9CJ4NXCaJF7q8m85hQa2swCcSwLgotcY9LtqhaSa7a2Ryosbbd65cL34",
  "key1": "4r9bpPFiaHsb2Q5K9ZusF4JGavGnk9SDhca6JAmeVzwGGmd1xf6j5xKqVY2UDPufxK9vpTo3niVg6XcoLHK9kC9o",
  "key2": "5MckKUEZFnxgjWD911MZPuyGYUCo5LUzQwsxh18CiMbf8fzA5im6btA4aEcon8NNpVMFKAZRLx79UBKiAdCHb7XD",
  "key3": "omqnCfSaig35nLnfPb5yh3jjtZ1kKtSKhHDDabz5RWLcJTpjM2Wc97SkeQ633c2XEoxYuAKHDL9XJ7jW8YecUso",
  "key4": "2pqDX1uguJDxBc512UEe9L6AesBkUJgcDMk9XVvaZUyybTCivWu9B6UJMaQvqdBnpyW7edmHTUS7gmeTMVudSs92",
  "key5": "5bDmEE8URsq2Waq6veYPjphjqFeLfjPdCEha7n5D1NYMj5aRKkxCjs2qdzCsh4diaK4XE9qW6D2ZTMWuKGmMTcLn",
  "key6": "5Q8A1sWEfJVxokJT3zJ8Vo4WqrmFQnpZbnhUSxpdugyu5ABBE6res2LP9ksgRxqp7FS7ebftYWYyVXzTjkMp2eUt",
  "key7": "5AvM3dgo6eW6w9FCm3fQJo5aDesM3R1LrJU5JWgNFG23ap8Ld2FueodWXyWN9cQycYRps7iR47CquX5px46t1v2v",
  "key8": "9UZSj1u7cXTCbNcWfnxTRcSgMJ9sKSxXVevoQLYK7FWui1geVVcpB8skimVjJCodTEem75NdHSRE2uXPqYijvmj",
  "key9": "4FxShTL9UhKuwceG5KW18ZbRjJky3vwuodZV8YZybELNaJvwrbNdrRwBMyiuVZAS7zXsB53bz6mruJYsdnhC4W83",
  "key10": "4HQvN6fteLTngw8w4ez6A1Zss7mkP1sk4MZrk7Fk6wRqsz7XFFsvLLNvE4EiTPqhdMKahd3V5cEBtmz5P64WjaZU",
  "key11": "3eRQszSorCD6M8Ls5bRhf2UhxC84CZhyeuURQoZXJim3LX8fedHYYYsa575p8eB9HpeQmZADyvgKmuBgECZqfoC1",
  "key12": "4VrFdBWX2hUGQy2tCdjTi4yCVkJ4X1p8pjVBPjyqDKVgnA3r3Sn2o6T9VXdrJxLgNvhWGDf9nFjRQKvh6eAsmn7W",
  "key13": "4qgLn4yxqMX72inpPHne6gns42ETZ4v6ukeefMPEBvwihmVtKZiqH3ErvDAiEtuFCiTc8mbyCUDQFHKhXtDVNZVH",
  "key14": "bgMyFCNKB6oeQhEqggUnLVHyYGWR3JvP3PvF5UihPynVUUyXUL396WK8Sg8NfzbeTd7j2Ds6sr4mu2yaQqgE39c",
  "key15": "2CKQrDF8WoeFbD1di8Mg45zGLbBwybdeYST5oTV1cZYMQBEEoQc9y7cqdMooG3k6sZ6Ag1L9zLWESfqVTXGDgCAY",
  "key16": "4qxxojknCCUSuoiE5i9ZfSZTJLJdrkn8vBTxA1B4VEwjqz8nsc3MMJRSZYVYbbqH9pH8e4qhcZENoV3XzP7K92GG",
  "key17": "DpD7VUg4Cu4xh7wn1DEKifSm4aKe6D25TX37CUHW7wVGXPPmQpRAE8Wq2wo3guF7UMxfyc8FMzBcTbhhbQk6cmK",
  "key18": "3FGGTQAe7nE4f2HFcL5ZoFKWnPmRtMLumaPuZwg1DjTmh8HFzxXZmDBYb1qBuPWXRmvfMZNcMYSsnicmvxSGcxxw",
  "key19": "3jTc5KfdMVFvKteSxU6ZnVG5HWbKDoV3i6LgjSSr42TdDCgbZZCqd56iak2XgPkPExsAdS99ZttHsgjhYBdtNRwa",
  "key20": "2fuiZP8Zgwmoqrjy9REK3matkZWqx3YjsS85FU4t7RkLxEiYH3Pq8RQbVip4cgjkZRcBTkWeUAUwNZ1RkpcX4dmh",
  "key21": "h8fmSxZ9sSQMja97h4DBaYK1PZyWJ2fEE8c1jugskPTSyUmVYafoL386b2M3JUa3v1nMfRggNUaX8syH96KGP3V",
  "key22": "Ww7AjLKPRMP9xmGhcfyRgr6Codq3AFVVscf99NdUK1rLSKnN5TWdroqgVmzsH7T9uusmAaQ4xZSQL1V1BNrSJ5n",
  "key23": "UUz5vvvdwwb7Wdaddj7X9XeDsTxPg65Zwqu3zoYoR8VBwuz9BLSjysabbNaX4e6dLUWXJPXkxMjHtXSuQpmSwU8",
  "key24": "cbTnDNHVfVogHBeMjD5GQwAJGoSfjmexT3BatYTdqfj5QXK6zHbYyooW3kf8A4T2erv9Cknt5isQqYutcjGrYgf",
  "key25": "3sdn89HZSEYpzCnecZsNCgpAk1oFpfh7moS1E1oXFbBNbwRpkrw8sMVfK3bREhewC1fGc5KaLfUeQ6c2FuhVDq4q"
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
