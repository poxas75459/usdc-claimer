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
    "2WeivndE6p7CopRW84QgDfSjrfzd3aaLv5kEec8qkPVLTqjDv9Hgt2LVKPdh9L5fJBpbjCbMjhdfUc1xfKH7ajtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGrvLryHMPUBwvcaXqpPkrYpJkbVTsDhx3XGxjBUWNgQbMxsVbigvbk7fj3nc6gH9FAYoKzGLhLYUwLnDdGkhUG",
  "key1": "3ZHNrFjmbPgcxiFWwz92PUUt1B9XXywn46NNWRXuEGrZetPkqKhUyZzZSkKbMBiXjFewNjVQKH1H7skgKgAbzQXk",
  "key2": "Jqn87GVSeMyqa7GLwwkhKHEFibHAAMQxVEjXzzbXbbDD1uMqAHAgggShg4FUQAHhxzPXSgJxWD9GBiXS5figssH",
  "key3": "596FXsDtxoxkRTr6QcdyynMsfBJYnAwLgL2uQDyvyNgXVkCSejDuFwk49scMvr86qBWUG3RXNQWCfp16etD2HtZW",
  "key4": "3AbgBM5veVjYUN2Kq5aS7w9dzUkBzDVdmrJGzHCoo4f1DSgHnE637iWk6DmHrduHHkGb8mFY9tv5KE5htyFnfgmK",
  "key5": "4eJg6kvFMhvhRyFNqMahtskmmK1dbKmRuXXJFtoCqvEpaT4pXh5YnEn81QjTx8BquWuC9snGFU7L5U35MyQRGfKE",
  "key6": "4aLpzfgkouWKf5RJsUGUJoV7ZuqWGKYt6j4tZWzjKYqwYHTwPfatrsoVNGKmRs2npqJSNtMHZBj357GK7nz1H7ZG",
  "key7": "5RE71z5Kw5RdSdL1VtAf18ozrEBkVUn5mBeq7NbLK2mwpq34PurfC7EZCiRDte4Lw35aLNQ3hFsM2CLbjotDQfA3",
  "key8": "uptgRo4sJ7vynXPD5d8V8KUamH5UqcPApZCcn2hXJFuHovpcFwAXFcLq6nVzzWT6GCiJawjLF9hdWifG8kMkUEa",
  "key9": "3okojMyRH23Eg4C6yPCvGbFVnGiQg6eSs5EZgZkaSxaeTC3JmDzaAq37hXYJVUxd1hAgQahAPva5sBkMxwLeKznC",
  "key10": "2tNgoioSj9PHYFhwF4D1i1ndstedeujmjQS8uVDjF6Ve7NviZyUGwMosp4YBwaXt8VvjJuDD5uqzySY9yXFBCcS6",
  "key11": "3cCBoHaoMPHzyBCsXwWPmc9YqsLwRTzeVYPQJHqAdKjwJsFsH5EA8KZ5nrHaxLnyfMZsgVPSzr7wZRk2rwQawBaU",
  "key12": "5meDbzZWVES9zniVramjSm5tSR5NmJ967awhv3yhbvy5zrnhEJ2batY9647TQJf3YJoRAemcWgKYqVBdKVZPKF6P",
  "key13": "WqBLtnVDuZpShR65RP6fdnpwe4SFnzemHbh4yw3DG27fuxRtv6acjAUwCZSVtSFMjkdJy83KjvYEyMfJSPaVdGN",
  "key14": "TXHREoy2Pnn8WxbBMZSg8SVjq2f2uVs38p5M9z5vwaGEctJRU8fnBU5zUqEme94VXdXMw4o6PtiSqbidmKjmAbG",
  "key15": "copZfyDd6b1d8vuGzVgVbiLfUpZdmwpJyJJgMoHKeQgvCSkABoCKpQCuY2NHhCgoy1xxx75ZkJjAYoSoWxmduVv",
  "key16": "2hzDZiKUvnzHXj4M2xQKxWiukABkf5o5wfKjhZtVdpiS2NJcgTsjh2zZziBwn9MyAUUpPF3a9SsknchD8wxeDxBE",
  "key17": "2yFwvQiMKppwW2CuAh5ihkYWemmaAyPhD7mb8XgdF6Mjt18eUcxBvKf5Kz25uHGV24U4x6smRE5a6gNgsQeYJVVL",
  "key18": "57oMCtdEaiahX7wRKSP2iYAYNKcVibTfto9QpfqHEcKtG9v784WFgRfFfLsFDwSuKaRDMFEHD9K3eYYzxTtVc96g",
  "key19": "3zS642ULrMD3AAiW4r7kd4WmVpnwnwKQxr9KMG1gnyvQq19q1FF22hzvmRFvtSQpH6QfPzMpJt6URbrvr5PXj4ph",
  "key20": "3vaCKjViua6TcdW7Vcmq9P8nqWp2pkAY5gW1LDpcur9zymNvftUVFv9xyf2oHWdKfExXHFrLU8hY3cjzRDbYg6zw",
  "key21": "3efnhc6b5jgC2TqiAoR3TeQBNdy6SgVFa23CJdy4newky9WMUDUTka3oo6UcfxspdeQTEaeGkPJt4EsZooUsEu9f",
  "key22": "s1TrLPuGaHw1MB8XzgZCwsRYpmU6P2npVjiX3eDMPLjrWVh2UZwNjS5xfmX2Q1wm2tW21N1sMfZNpRNeXh1cGsr",
  "key23": "3ityCtnyf8hseHh4kYUPcfUCtELKRvWy8ydE9mY5B7t4LS9ZDXjdCbSwU6BQUtpLCTWTQr7QnMctrKxfxsZZFF7b",
  "key24": "5aEYwEDKgofkKpVe9yU51UGUzpT5EpYeLQHZmGRv24i2G2bw4F7it2ir3fc39vqESq6PjUjNjkhdr2XnTgos1TbF",
  "key25": "54WyviBhtD8boFuMnfuzyiQTKYWgkdBCWCBRwCZzVgegaDa23XeyzeDN3uHexiTtiXikZdy9WwWGPyUukE2N1kM5",
  "key26": "3XWiqbsL1PRDK8QTVFhJpkt3yinsYZtEdw3Ghnc8V7V3KNg1zaGY4Vrv1UvH3SxYhPsN2Dg1tHrY3mZmgwZmDZb2",
  "key27": "51NVcsat3qPX9VkMe9NFRv6avH9HLAnZvBaFN6XAjL4WCQACqBGNCr4dLRVnAE6rQj49um94wNsBe2fFsQU7vZLd",
  "key28": "48ZkzMmumzHo9xhRLMZUJTemSNmPevCfefn1YfrB9TWD5BefwXW96rgqcG8Zetv9ikkwnJeVmvKUycCEgZchNEDa",
  "key29": "47nYg15BZXRKgsHQ11NUFHK761j6qGfhaGmcphSfGkbVqDBxAqzoat8pEoA1ehKsmMjw73pM4Bf9Hu9npixPG42P",
  "key30": "2cStTfSkXMaAGypPzEPXKMrqSn1gNnNi7GpEKgoPWUZaJYNAU9QqxZDwcVeWdtEkHLGuFMVtzgdbVaP4Lj1y4Kr4",
  "key31": "3pF2SPDGPx9y3PTXWQaohHTNrUgGcLSNYktaT2A662bJ6UjCMJaDxKHdAQ5JkkuQLEWR65todSYoZT29z4JpF5JY",
  "key32": "srAzV6bm8zjU3iC2zkktizWrbHgEyzUE1fTw3bJH1qSvvCjsPPDnSHiWXkDiQyzQbiA4KfZkzothGFN5Ej5fUUm",
  "key33": "2eHWZnybK8D5wTfd3NJCVJ69SwemyKHBmp8W4LBoAVg88tS8kY6MgQQm8FxsZiKh3ti77Kip2JTvfcPdYYs8wj97",
  "key34": "jq2gqYuLjM9p7X2GSkdMK9bYSak7JPdbnEvHMkiEicMmztvmjedbDGp32wH92eor7jLRFBR1VrugTdZgGrFP1yU",
  "key35": "3ffyczMc8nBrgd2jPh9Utgn8K4w2K9t8b59vkW4u9J5nBfCAUCHH5Rht7i1xBbTd1288EuLgXmVbnCyCGpdzEfWc",
  "key36": "HT5CEVnmhGYCCZapGgMiMZYQBceo7Qdv6coy9uofuMbrzbyNZJwTbM84HND2oigChzrCeHEjiMiaKwobrDvEzKi",
  "key37": "52hqkrwtDQRfe2T7jhRv4YZ1T3paxs9x4rkugtVXTV1Qa2Fwmfoqcc34mVAKaaJT7u48GH93zZHkgFfPZP1eySyg",
  "key38": "52HUwLpA5shwjJejNKRPXUyAwUgKVhWbcKbBoqptHtasCQDsJZUbSD9eTXRuJTpmzBU8t48PiMLbj58tvZPvF81e",
  "key39": "9n6yDnp7f4Qa9iCyYGkM2QraQfyZiZXv3G8Sekdi1rWs6cSxetU2ZsC8mhCWJT3eM5eYVveNEw7D8kABr4Xk5Vb"
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
