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
    "q3ut5v2x2QiG4JekR3d2CYejUgb1SmdVzUtgWjAz1fiiaEEdanqUkYxLATmYP5eRqkCsm6BvWDrD1eniF1ihLJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZb88W4z3cpFoEYDJ2DpPSTi4gbZYiCBBdTfWUpvJ2BpggzTJEs6X9iCZa8xHSEiCW5PMHXmM4rXCdbnJnF5LNC",
  "key1": "3Nd7dabsTkSpXKhCE1hPdrTXRRT2C11jY3Lpm3LDGNYC7CxnXgBrebPxGLw51kzSQRvikLWP5sGoTg6R9eMEyEpp",
  "key2": "3VWtxDfbwn5sB1JsGQ7n1E4L3siTy3JRvhuR5ngxtN6Mztc6uZ9t3ER63qQGae8YDbehzQCvGySDWvX3En76P8e2",
  "key3": "Fj2gMqLqvjHNosH6hv3qvyXhWcNmhuxtnEstmsRz3kqTSKiX3DLUsad1KMCG2bsGkWZt1zszmeHCwGcDJxD3gP3",
  "key4": "2bEwnPXSRCGvvFgeq5QZ5RFPRX9LiiHnm4SBjTLrXfaw9umBvKiqMXesGUjKkZXmyHG3fSRnTwPEJ7eYSdBZQfT2",
  "key5": "3GGhP4DUuEfmU42sGPhcKEeqQEaMLeGbUgBw2DTVLVv9QAJR4rKzCF8Tkex6u4A99GhbrJomvtbJYUcBmCMbYNUz",
  "key6": "5v4MPqt6q9G4S7S9ZPfSkqK7dZANxw5f1wDL4zypxTw6JvaYd7ePYzNzTEyRczxV4phVBVD1hkV3XaQjjAhcFL6r",
  "key7": "4tUs1Gi6tf8TGP38nmSfdDLr1P7uWZWH5rqxPmGWgosgMwnhhqouhFBwbcLgAje23gmcAKLrgF4TqnawiGineWda",
  "key8": "Hx2KmfVMtxSH3hCQ3pxhW2q9srYxJNYUY1J9Pro3DUacbZoNUGGhBb5B5HjMVnMrQx3SXrE47uUFPmwe4d6YEHd",
  "key9": "2PyNM11MFAHRrcKzr9cJgLUvav3DJiVrmkcp5uN8oNryknx98TV76oDyQsCvMPoyfybqdsbYvZFexK4BAvAhWZEm",
  "key10": "MAdnQ2qjbqaCsjKUS6HMKpq2figjGPgNUyyUG1C2n86GfVQKLxDfGeM11dbFqZmk8c9Wzwpbn9UR4pjpamoLDmC",
  "key11": "3KpFTBVnVAyX4ACkPjgNzAZb9mXYXqkGCtXnBJJxTG3LT29gzLwN3bXWHG4itQxTWHHjZKaNiJHgUua37vMya4kK",
  "key12": "2PbXeocKnqfVH1xeYkZZTMEvHrZqtF9H8KHzrVTs5BbLRDph228hGXKCEqQYyFqLHNTejNhDisU4Mj4nURVkkWjY",
  "key13": "4BEcRfpGr17AatyVvmMvnsyfR4BxDLXEByNhxwvbEPX9JuhsRzti1ifKi23VhqrDqwYpsNVMj9WduKcmXCq78fwk",
  "key14": "61EBRv1Dp1Jb2hWdjFk76fZmZHbfB4T2FXUhbyHeb2viyvMEJyMHTMDmEHT6SupSjH3dZSLSrstaJLpFcUsL5bu3",
  "key15": "21J19nY972kTN6wMtJwAvk1surpW4JnjaKp3xDBpVYjcM8DFcBf8dZJ5BPdKSj2B4hbmtvH8cVb9umTxox3dJbsZ",
  "key16": "8ETKpMXdXNM1um43oLgsWnv3Ca49XxRPu61zewbWsXXzfaG3W7N798uLXkkmWSBXPVcHJdXPUHTRN5xWt7vQ6pw",
  "key17": "4cR1DHQMktth3sc9gwA7efmrh1LXUjymScrXMHdxKfoFWTqCnEqfCPRDEeDLvirta9CkrMkZ7gGbDVaBtA9s4kWy",
  "key18": "2pKFUT3vW9T2grJUwouZDtaxoddkgXFyhYA2qdyeEEmXZPfCncQv1X9VUHCZDLC98kBYDRgUkv1Jsb4ot99L99HU",
  "key19": "2yh5WtPAqREKQZL3kaudxTZgdbWqoYVjzDATQaD35xhetU1EoqSrbnACMvr626UbMAFTzKAYgJVPSUoNMikdRkPS",
  "key20": "2WgLCssEmBnf8gPpEyxmaPY6ExCs3viPpCnBkW5oUSMbDqvAEVo84uyTyHV2Esb6G7M32LKfHhzGUCCqW8GLhpvT",
  "key21": "y2wEKaX4Q8oZTBTrDGqHddwXbwRaeU1idLrz9VtLN15oDJtk6XYqfGSV9aVNy6VRUQ8mAZ9oVz4J22RRThWpr6z",
  "key22": "cEFSUZ3XQn6LvZzNkeBc8W8chTwg8EvB6Zao4jzDKrSUAohdReP6mtSEDCyi22WKhn43ZHSE6MutDtFgbLU9CLC",
  "key23": "2a9SV7t4dg7VX9VCAeJF5TG8StNxjV1veznPqCb3611YdTXFQTFiE2jf2w3d6M3MNqNipTwEbc171SWEKiFuLGS3",
  "key24": "3SrW7CMhfDXWB4MHnFh4aNnabDYn321iPzY9foioCCeEttch2fT9PvqnCewFFG9YKFjgCMVQFwW796AH2qzzNARY",
  "key25": "25S3Ua4AeZDM8t2tG5Dvt9E3kqLnw1qeBWQDPv183FPnG2itQNSWtQ7jPF3vGYqWtA8khi35FUmzryQGVdC5BBp1",
  "key26": "3UjQxk873NajXRGaFH4SGjT26wyoVgR2Cbu4QTHJwgh6NUcbgf5C8EVEN56baAvxpbufdZoksQZEYYndDCymAK6r",
  "key27": "4whDPXvR3jNueDvuBigpS6PRtRPACa8ZEjDnPrqtqHhJzSLjB4MdBih6W3Q25ZpErMQcqZ3ShvbGwFQQ4MoXbfCq",
  "key28": "57rzV2i8HZxcVoqVd8t8EGWafSioQFX74cGPmsGDcjXVK3LM7PwJjjdu4yrr6RiqjDxqsfp8qXYiTFEq8WthaswH",
  "key29": "5QyuHcgaG1n4Fj9BTyo7Nxy2xYnZ3n5BfarTjT3ywEcKuBrp2er9B2vscPHr1gx6cV9k2pkzgJMNS9XJP62C1Zbe",
  "key30": "3Bm8acJfk7FUHrVF3tRCXLR1c1LjeuWG79Qsz5V67jRcrz1YmF41vo7cjwznRsRPVWcGJma4SD7TBfvaBRdFbgwU",
  "key31": "5iiDgfRCph1Vsig32D8uyALT3p6ErrXTMy3R2XWfm32Lfnw2KR8QwnnoHks66v6153mZFcGUrYD2vSexwTWnNJFh"
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
