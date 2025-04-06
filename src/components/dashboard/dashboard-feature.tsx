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
    "4tiX3132BkkkuZJUsNSz2BKazKpoV7Yw4bSMUmTi2Xa2gmJrHdfYFDo6tnTMAaZD5cHtxVXMTYmEUvLz689o83cZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22xT1g4gGE6BKLbFt5zCNGrWfAgciATPvWs3j4TM5FNQjKUn2iG38UHeox2JrkVXuosqrdYRT8KGowRDcXu2frub",
  "key1": "2Q9sSbsGDBNoxt2ipoAwXCoTVd1SAqohq2hXr8fjbk4EecuCRfcsdU5bq3HpEnHWrpeQqPHq3mQVhgHcNhCNgjkG",
  "key2": "m116bg1sUXAg2bdxJQPqCQkoN2NPDwuuZnx5tZdhggoGCjKiTLFPDA2piEVmJ8Q1cz5pVsEZRzebnv21QiKvqzW",
  "key3": "2rv9vBS7Ep8JxQcuqnGryqdesbM7fuew6duqk6ZQ2gWTESWpoheiT6QV22cr8WHFdzFquyJnaSFq9MWdVwjUwWt5",
  "key4": "GcrgpT4dJPEaZidKY2AVnAdeD5W1wazGveTuHDbi5r3KvsbRfyJx99v9bmaAcE6DkBSwcXeLCfxYj6mEsFzDCva",
  "key5": "37evobhnwN9nxpQEmieEpprkguGnshtW19ynfy7R5yAevofg2SeL4ua3jhD8WtC1xxcXmET8VCQ1jSxieSWDckhn",
  "key6": "2mHSJuu3GfushJSiLQ1NDXXMcmkcCmT9v5fvfZM67QiVfkgmdtttBb8Cngs6arp33B1qxd2kDkDkcE1S3kcwNsjw",
  "key7": "6WztmBguS6XSsAv3VvjrdpiMyYZqKtgnsw6acPQeT4Qd8e11Wk1mJ8AJQrVo5uZVg69Qcnm5TTPBqbmgWCHToeK",
  "key8": "2MPDs2Pz8D8w9JVUgcExd6tXf7uRfNDrktuvya1zRnmWVgDwp3Msjca4QeR2z66Gagr1ZLFZCiyVs2evrk4GMGir",
  "key9": "5zQ7zZ3ZPwJPwSerESK2qyqgq6A9XUH5XWm5PEf4UwtPL8RmbM2iSbtPxs9nZDnMRbmoSUA1GgYVQCUHb2hxsKqb",
  "key10": "5aquyQXaoYVQTyZQc8vdN6qYcp8BbCpYGZU1Uxc5X28AuD1FjFgkKgsyxSSmzEK4rTR6cj22Xjh2PMR4W7HjZjNa",
  "key11": "34yrfdtq4fDLz33A1e9GScEUcbkGzLPvJVtYDXyMkzovvi6wrkRpkKpQCbhiKNb72QvjTQVCaBY3jLrw5aELJtd9",
  "key12": "J4tsENAsicR1WepDYQd79st5A5Cz3dW3LfSxDeFhPGmxCA2uuNbPmG87k52GTFwmygYfFQUeJrs7znRirrupC9z",
  "key13": "2rMHRWgACCEZta1FJ43a3Y8rSWY2a7Mxzz8saWP2cb5RPuQuppJX8kqfz3qCw3DJuhmp7mcsSPaZjwzBKmRnXEqs",
  "key14": "4qk5JuMHiFLDVHkLUkp2HJdU5QxEssiuhnarP5sNoATXok2tXuTwH1UJJV1gu6bMXx6Gdcqs5Abdd3Eosx7nA4sw",
  "key15": "66oemrAbbvTibs9qeGzxo8i6nvDitdBajczEBnFSdoiBXKH2yhZbTJqQoe5HfUMJ2hipDqNweKYzq4PwEfhtgLTp",
  "key16": "45eKaUsMmBEmz9e42xvUwfVBNM64KURBWm5k9Ttk8c18dPZDhKZmYkDPaDjWvvp4NUgUsLReKtwe6iHLGzvsDjCn",
  "key17": "JW8gAQ3vtjLJYPuuWsQ4HxBundaVuFKrHxqAvoYnd4X9nYV4vXD1PJBEN4T2HC8vViKkPzyt32Sx7wZPAVEW6f3",
  "key18": "23tXYWgTjbw7H7NkgtsCQKbuTYiUQaRuHNadoCaKmUMsrGuQryTiVWnxGbcDQyaNBkTrvi1myqUTfA9gFaV86wkZ",
  "key19": "2GYqEBBHofeZgMT61fp3Ahb45qETUyAYwgEnKifx83gWZHvCc4sNZY8SxHq3Y4kESLgYPJZnufKKmQ94H4p6QTpk",
  "key20": "5ihP3SWzddXMcYiRSpBF8ouFaNWQViPVJhWKpji7uZsZSRuMbJx3irVgZxV2HVf3buo2M3tMwHWD9D89iCyfeKmH",
  "key21": "5TLaECMXxL4XkVeEJnRqm6J9jzoZgmSN78v2KFHnFveL2UJKigp9EgHxN7nBitbLH4h2M4zcAzPUt8t9cuz2NtGt",
  "key22": "4mEKng4ECC9Rp7W7WCia4DcfnCBvUmFkwnBfSA3t8dqJi7tTSQ9jfQoYdZ2pDniVEuEtHcWYJ9XNbbioM9PRCbbh",
  "key23": "5r7A3QiG73skVE2xYcjNa23XtVFtXqHsQhNjpN7nDeaQpJ3RhBYxnAEzvvLgbXZa5KQnx19Tkmmhm4BXcKVGojRz",
  "key24": "5WwFzgSriX8ZBUAup25GW1wEEhqsBeC7ib3pJXYeZD1gUXzadwabW99DydT1SFXKc4b1ViaLGHM34JPFDVDWnnKp",
  "key25": "2eYvxuRdDG3R8pSa7DH491tV8nAtHLeh1JPcmPJWTftxPbwR1BsHZf2XauqbrS8raErLTFUcsXpYueEFfoa78eDo",
  "key26": "2BrhfYcPgfksfk33AiSpPFrTNaumGfhiHQ7HVcayeaCd9nDormFXFnXFUMXyd4e3SMo8nkowq95WCva7a9CrA3EU",
  "key27": "cwNDtoCYxaGmTkLCBmNBPh6xGrEB11tNSTMU6F5kKa9SUFLnWdHFtrWSsguHTHTjJn7uvPvjjXHGuh6uWPJVKdh",
  "key28": "5r1zpQprvYmpqCKQuMVVLMtEoWCVtSDqSKUdCVfSTUpuYyNGwvV3K2ihaWDx4Y1SL1mvH8ErjbvTn4jcN6SZj7Xw",
  "key29": "4STToq3gE31NBvw9zXttNHKGpvY6AvEoyjGk1UpGSc24Twz3ynW1YT2QbayGfD2NVX56vZVWxHPur7QUVvSbHKEM",
  "key30": "2KSyTTF2zx2ngoofyggMf5YcBH1yjhcwkx44vnacRkTkKNdNuhWHydwcY5mqGbXmJF1LuDyrKtqYWcmTZk6nMFxg",
  "key31": "5ZdQtK7AxirRcT3h4wVxof4HnqMPJ7H4NjKimTi5izcTjWewPdZnBbhHsVx2Wg5QccoZbhKTgFnGjDguWX6WbPx5",
  "key32": "5JmwaJGawHYfvMjTUJQU8HCwqumcBXxkLFw59aPpMqE4PiyGYLhxmphxpWckGKoKfZoTHTxauNDLaGmFwkyBLVSV",
  "key33": "yxmuwpk5UWrBsN8WSBgP2yAuvhBCjfRJCR4YFRRB1Q7osb2oW2PX7yqmxRJpYL5J19ohkoEuBQTpLp635Je7DCS",
  "key34": "imDVraZ9MLi5p887CXQS1akrPHUMZRT5yXU7L3Pr3LfJQRf4xHNGqg4tmyfhUfzJzwKQYekPmfFrUNt7X8BkWGx"
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
