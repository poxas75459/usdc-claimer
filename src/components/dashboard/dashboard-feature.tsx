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
    "2du4D75GG5c3Wgpf4utQPq3nxGgmFBMNpdbAsyX9yeM8KM44Rwf1ERHEPvUUDWHEbRVHoD28d9jghNNyeE6yJ3vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36o9zhoidY7eerPi28DBTcaJWi2x433eRcVLqibYish5JYRZGJoTivN6nNoS4p79AvibSaHMKQHTuXBbb6wem6A5",
  "key1": "eGat8q5nd3WbjXJGDx6d9Zea9fjMRiLiHbpgim1nJLyPYjQ3TzyNvgB6LgFkg7fX8Uy9qJJjk2cnDavJqG5KPm3",
  "key2": "297mHSGwFdUfi1hFNV3VxDHKfLcUPf4JKQQjPoEN6qaS8rw2yNcgTsJXGqg3EpYK4SdZjNMJSmBoGZoMYSyChfDm",
  "key3": "2ZrX4LXrCNZRWxXbVuS8EZkhSqqmAMR5aYVcyVR2Y7Q9rQm5AtJjaCCjHn7gQH3mrjF2pqGXUMi77coqmbnoGnLw",
  "key4": "4tDYacozQwughWkSi2yMatCavYpT2oxYWcD66aurzct5rtguKFS1XRuChXYYoNrbNbxhXmMTe1QEQoT8SiP59Yv",
  "key5": "3tERaq22EwGYc3rp7Pbg2rzZLEzsNV3wxo8ig9R1cukgqCDFqJsvPi57uuX3eAxQRKzvF4fbFPZEu3sBsVXP7kzF",
  "key6": "49EjQ9eJKEjTxu8HK2Tsigj5KdYYyj9n3r3K2ygGtS7r5beVHPiAXFAaQC7XqKTYYLM8cgxt3z3zvmJYNXw43xxX",
  "key7": "5igMRbcdPgqcUzY3XYgyiKQWbogxdE7HfD76DKoJcmxcwWpFLcfT14VXMpqFpdJhJNkQjKDKErJ2v9wn43YPVmoe",
  "key8": "Jx7KpSu9hSQeXmAeD57TZn4qhd7dQV6dxB4PDa38CiA6t1H7vFJYnJ3ca1bh8gcNXMt8dp79Jc8QkEnsGpNrs2Y",
  "key9": "3czKezH1ATsPZCAWmik2xEpc64eaXcddfVKqkuPmtoY7PyDT37StFoW47m5X2Tu8FkRL5CCwnT4CnU9ihwTeK4wZ",
  "key10": "4NmhVpzUPb8R3DUkuWUdFuxu3BMSNnfbwHC1i37FX1JAEaZghCnGy1ftLzUP59TSV6pv5hbiEa11NWJk2RE9cKec",
  "key11": "6aXeszZjApdNF2KmfSTXb6Enp1YAF7P4DMkrUFf2nAqAeQsH9NKNEzBeHxJ6uhdo6dkcfzxtGmehRiQDixv1qZM",
  "key12": "iA6bscR2AQsGdMYQ2V1969v2cyi9AhE6ydzSRRGiz1GpDMVVzYutDC1pkR2R6ukNYA3aS3QB2cuFuTu7e7fgwud",
  "key13": "4jWPebnt3oJVYqTLXZbSQJW5yAAbYWnp944QZTE3dSEwKRckvS6P4zCHxxXvYt6Tbdx8yXLQA9LbVzekuycnYcZh",
  "key14": "2Y2r6eqLJdRZHb9kvDRbfoDifwBtnSnX5b35HYDtZWivqjBFwnWbFnk33n2diCgqthPmE9yuU9oLFS3m2ABBNsaV",
  "key15": "4CYmCuFpzUDRCamtpTD3Fbaxih7YNCmcdjW1DqPpCzK9jWtD3FLymtGUzE2HMqQEvWkTRXfnUBgmwYgdoEUgQruu",
  "key16": "3GQ6ufR59Mz2tSgTG1CGV4PdykpxSy4ki1pqEyYzo6r8e7NmfxfFZjB9UQid1hwgqembeKNAXAsdfvou7Wo1Ck1o",
  "key17": "36F3W3PtWNBMEiP11qr77HCMRdTiMUaDnEKPnnv1UCgZ9UWpbND3AdhwviQ2CszKVPEPNA3oP9ripcuJ2GsaeYRJ",
  "key18": "3g5NMzRBdoKbP73tRWLaNYshzWHHS9MvuLExyDzh3FZS5b6pZKzkzPEXEjiYUAGCRZoK6zeazyEuzPEXeXqJs3ed",
  "key19": "S6h8M7wjQagAecaHuQKtion6vXY8zXgGp2DNjQBLcgPTz62bfP2EDYmEnXKyEHfNHMqFMV8EhweZeXMcybTaRqF",
  "key20": "38fjVsULr3xxJKo5uyMo5g8PkDx4fyPe4CdSb9u2SGYovZwrBwyrFKEDzXNgJokYJfNzaYQRFa3FgvDhK9cHPP1B",
  "key21": "4oYfm68YSxkJbdu1mou155MfWiGBTxYhUuhtUtmnicupiUoqYkZwSWGrwwWoKkibaB4KjzGhn2tfYwjLK8spVvbL",
  "key22": "twpakohnEwRraBq1nhkDhoL3DdF53AYEgweTNDiVVv5mCXnzT37rVz5BXNpSAdU5mAaqLPqLxAqNcLXzMc4ByGZ",
  "key23": "5mbjJDYgWK5vkYHybvoB1QL6qX7BGwSi4Jpbjeqoy2Cq1MBDiunxDVHNbB8fYepxBQbDt6nEXcrthrFLh79ERDw2",
  "key24": "5nL2CPYtZu4sNcC34By5CHTScsQrExRYiHJmm4vMu29ZfK4KLeEV3dHoh2U2JQr3tVLXhMT5bPyDUzGR38TaoJcg",
  "key25": "5WUjbfPPNTo6PJsAinEkJ65T2EPPoKpriW1jR3PBR9W22cjRmuXADr2dvEGmPx8e3nms1T9cBJywuiUypxRZaLuP",
  "key26": "PHJxWKGhz1Vu1KXgzrSnJkhb28niehKYApoZLeRGbPWAxrsY9TRpRe69R7zV1noWFfrJXsqMSEBZhj4hiktsPEa",
  "key27": "4ykVAfHfGLHnwQoG2FWbTRf9JrwNqeiNkopiFUs6USDvNafeWo2iyK8mhDtERZAvhEFktEKrU2QP1pEjx6gQaTYq",
  "key28": "5ZKYhiYHob9sMS87hq4nXEcYxnhFQZwhsvRMLh3e9JH22AwyXGJVJKrkbSzDrp5JFDecGRvorSWpKqUzAj47sMCw",
  "key29": "2auwSUU7VYhS9iRuvMQNBs5DENhVSac88DMmRiBmT16kVFCAWxMv2NjpK3BZ9kKmjHeZxDAcb4qgzSkhhpdhYyW5",
  "key30": "xXnvqxbtWc15DJeZceCCBgV5PLrXwUFspH7UPJcmC3YRKs2jFi8rBSdi99R32q65rXQgJzUTzFcAtfqEzrGwA3Z",
  "key31": "5xxMnEe4Xz1R6yYWD6XLWSzV3RHTiPqXvtGt9kTs55bwHPfvBaGSPGnkwtSueX9qhgLyxzyQhYdrkstCgx7dHjVd",
  "key32": "2GY3XBYEbyRRQRvgfVM5aXB1MztRjdUqNpkkSzGvhbiBu8U2prqVkk1LKK6AbcDv6xV8KRZ7fkvjRMqmbaV6SwpG",
  "key33": "WwiTaKzuKiTiU2rGzRL96tUPp4Fe4b42RECXKojotSuotSRvvuqnWDqt3pxKiSuLwhG7134bW7kQxWVvZ8KHeaS"
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
