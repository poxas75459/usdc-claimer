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
    "3VffXLijr1TZmsK287TEsb5MeZwcGV6wJFfayuvFJ26QLgHjhSuQJFcCEQgHGxeNZyjTGY7vkvmDj3P5MiFgE2tD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JAheAks17Vq5TA88dVLEpNq49wiYuTBtFR92g62P7S56fR9rLU7XZALE1rpJ8BbsJqp4Lou6Kexd79LTZdaEkyk",
  "key1": "31bLuXRu1PHRkeAX8Nf1xvqWYmH49Zrri45jY22MwjrsZ5v3GFTMLX4BfdxHVdxdktz1ryPLkMVePK5anCULRCDL",
  "key2": "2ucVj2QRU5zr9nsn6wARHnv6PfW7RRUggP9zaJ3KQW3aLbd2vqAXZxtGhWvRJeE25QPr7YCtGYufQg756eXLjzAT",
  "key3": "ebNik5LMU2CqDgVux1FNNMWdEe4o76tanNsRBEeydsRUoqtEYEDN4KUiQWVdMHSJmKZq1S69MV5vAZFWui8R5FT",
  "key4": "4F9KaChQ91K26o8mynobWWQBRQzjtfVNrVEnCpdd9x7pV7Zvfiq9HY5SRJ9rZNhJrFLTxwKARqG6TFGqJZeJDpis",
  "key5": "YktftRogPf1wysHxA5vzn9FVcQYeTv1gnPjAtSG3UWS5s8ZjoZCJMTuQzVeqSUqNSKPrQg7xf7HcXknPKjojSKR",
  "key6": "5DGWnPs55iGXsEYPw3ShZUqX4Ju41RrrTHYuchP4wTSTFU4Bc2enCAcFMQWiC25WurGaHRY4fZ2XqAsTZN6Yu9K",
  "key7": "aWUdYSfGgScB2dZY5YsuLxAaSDCjbNVhHcVAmCiKuZwdy5hLbhmgpbwRoLu3Uzjaqu6sTDrVLa6GM2Hx5QquU9A",
  "key8": "azJjLUuTpjEr7wn2ZRmg7V78FbcAcvuAmLsjKFsxYVwSTSGubyiHLTL2Dujw4oKPn4PfR92SSt2LwXmLnKq9KVA",
  "key9": "3hpASUzKAFNqk1x3dK4bMqUusAdS5Zq9FQrAVET96D1K7CdrZL3Lq1UMs3SBrghfMs588oWGgk68A2w7Nj31eYoz",
  "key10": "3J93mKZLx9jtGKQvsDVcrCPQpkztwaE9KHbZU2EcBpsi4WWdaDEfjNcYxr5hg9mt9LhS5c6k3SoxrD34ZhBuBBQa",
  "key11": "452yMvyGrirmACrrVEXrU5dcbQJc5S7eQhqXr154XNTLUi6UgSAWBor7GUPv4d1Yq6R5k7txatnTic881ckNWdx3",
  "key12": "4CNWEYfTpnVQEuo9jshnF5X8YeLa2NXmWLms96gyAjurXy8cAN9nLV6ZqxB2SSbAPNfucrp6yMWhJwLMkv75qr53",
  "key13": "4PP8JWvF271SGcqMhUHtpcxaL2N2PiFK5dAJcqYSi9SbYGMnxrgRGLJcjDMToENHN1DV9XW2zv2J8AxdTMPCVbGb",
  "key14": "4mfZkx6pvaBbiCU5dthH8Hto1HUFARpnUxcFFiaGLDkvbbmbrpBo2keDqzohw2mSkQ6GsYBUBrEBTgNqKp4Gkimj",
  "key15": "34tmsfJdiL2NsqHp2n7URhLN3tFdhTXVcUupNdXcHeQFQsL9brA5NiWraJaq55UXYD5nPg2UGdazc7e16bnujFST",
  "key16": "2PomgWtkGTxx6CyRaFWLZBVKiAio5QPxfASEjjNweZEjut6PvSEFy4Y9UXop4TPtttX1SJqGgiuw65kgimaUcXDX",
  "key17": "5QFvCmHsRkogqah5PRRj5Ny88KeBHje6cikbkA9Rn8hfPvGWVbutWLnBCi2uwXUmDXJpFCFKTE7VPYMoJcW3xWAg",
  "key18": "4BgR5dJ2aYrJFrWwrrXZbX7Be13txxSWkrKomZqg7PA5QRNNhvqZzXrC675qTVXbX5Ck2ZfRXWLvoP8N1tdBw3xp",
  "key19": "27inaWC3dVusaV3o3zJ96Px35PMxzhT64uGiAj9sZaXYjJtTNUmhja7xkYeUhJznM2UmiDKArwGG2pYQTzTsbnz6",
  "key20": "34FcYAsCKaAG7EuSmPAAErKC1tcPNMjRBPYZFxWaRpBJTFSagd5bknc2HJ2g7279LQaKCD7MPRiFazkhnW4sqRPj",
  "key21": "57E2qUyQBipvHszfLJjsoFK3K8g9P4PyhWhYvn2Afo7d76D81UW3rd8BLy2vwxGuBNZUoCMSttQPKMuAi5RWV7s",
  "key22": "3Ujo1MbyH4Mm8L4d2xDX3svifo82dHng6Vof6rvUsP7V92SkNYitDtDwZfiMCvEri9mHCp7GykdyB3d1B7Qo1hiS",
  "key23": "268jQQykdmNpNXjqpjCtJbhSLiHZKed7g6v8RTLnpMfuY6c8yP3KRiWnHSGyagCtc56k5g9B5d1bP86usSqJ3FN8",
  "key24": "2NAtyPfAeMttSFBvxrQCSDyuHqdM6eDppYEVYdeadhtoEP733Ck53Xg9MUrnbe1j1Xin6mBXBLBbRThkFEq4iQph",
  "key25": "4ro8gnv5gnSGoLVukBcLEFob5YypwHwTuk2o6fywUomtkH8W9fD1BZTjpEHGTryMsntWCj1HNBr9ttYkiFwyDVPF",
  "key26": "61S4qSLjfr6VKUr3VvnNxRo9Ktd5TFGG2QF7xYJhaEGAMttB22QBH9fkhMjKJGmEK6XDakpoKm4hewMrwxcA3dwp",
  "key27": "39deyHaAU9qieH5HrNQfGng38puhptXDvSF9Gdzdfn5pfNj8Us5RxmdLUZJgqDybvgU6DSFYSQid7vQqGQtP5pWj",
  "key28": "2pVcYXx6773nNk1T1QDgFMmgP4QGEUN7sju62Hc2PEWWjiyzQcAPVoskQxvz4rqZkNHDzuPcGzd9MXkuPPcvwrFn",
  "key29": "2Z4KjfMjXP3GP4xLvS3ZRW5mckMvkECVqFzGcb4NrLDEY9sBfETcYuJu4gjRubsgmg6tnCyDKvCLpbvJ5D3J45Xo",
  "key30": "67V8RDvdfUY1yMkjn28CxQpMJ9MFmreusH9aL7y75Phs2FqBXEa8krXmCbonaGqiL4xTiUsgu36aUeJdfqi9X3L",
  "key31": "21MrCSF4LHPWfVDRdQpbbpLDXdQLJbGEx2VtsVK7YPJVpc8X9doNdmyUVwq82NpkXKiYMDkPRnTYK3xBp1uKdmh3",
  "key32": "tuhG5oJJsVRXinNcLHbZWvpdpTrwe9ZLSuxtUBjJMtuV6h1UhD5iURaXswvFmVFrwx7QFcWNTiiCeDNTVneDmEM",
  "key33": "2HPU7nVqMqFHw3sc7bfo7a2jvHuc9yBm38EyW5dui6sRv6GpL5P5S5TgSGmw7Hh7fkns4ePP8ACBnGJ4Wr9YqNY6",
  "key34": "Tx9Mciot9x4vpE11HipqU8feuXkF2TVbveNWLsyL5zQ49Kmrb7To3FkgUqMzzs8kUkWvHsRRWGMQ8XzvjRVVx4E",
  "key35": "4K4FXVi7wusXtkXWYj6oRYgcu2yah8QPDW2J8YWfUUDUJGpFFb3gC7Q976sAPEiysNwum9Yw8C8joD1UBrvmFP4v",
  "key36": "2Bbz3TGQyF35aMihVMpBbVo6yhWYzSg2DEeTGJRDfWi7J2NR4KQAXnHDP1Ra4JPjdtBM9quvtAGBepyda2RaR7zC",
  "key37": "2SfT4kSkWX1M1ingRZxrH7rczHHyyeyn9y4qzXN8YkgsK6NHe9NKxLbshhE7mHfrAodTakKBBv5n5H8myPhwXNVL",
  "key38": "5eVdUVJLmjXVR1Gcr6yQzxF9U1VRmz7MY4xcQDfnKKntZp9x2rBU4RDySAiAV9MajMoeoYZGMQJYv3AMcq3jQLJR",
  "key39": "3usFu1gqYdVesQU4J32Mgk2AMC5s4kThKksCVRewiJKJUKYhGVgfGocS7rLohHjrEJPmd2he6VfcSxjUNQDMbKLS",
  "key40": "xkmGZqGdLr7EzHWNumFU8TYpqVcRzYjaBzdFuv7xMkn6Y9iUE2os6jvP4Ng1wvd4LKj6E8C2smp6kHG5NLJ5TbR",
  "key41": "4JBXdgZ8tjZatFSAyQW3neyfG7Zr57NEKi8wn3pMnJFJjUHfvL1pT7JmTRYwaFZijvTomRusZEGHCGkQ5LS5VkKC",
  "key42": "4gT9LoVmxBGVCmeSSvzJsLn6wvHeiq1g1oDBr8fwg9n29VrYcH6VpuB2tiMJh3UR1argqmo7DV1EPJo7D5tB7qMf",
  "key43": "3j2GmnXQJvGuBrAx4NvN6XfT1dHEZLpWFs5JCLtHJSzrseKJiLUhUuKwQ7Wr7TsEsVR3yyuXMWifkA6q6LBBGXNq",
  "key44": "2FdnqGPEP3DXQq3ARwbo4uqncsAHfrZXzh3F1Dmhf8ZyNjKUKuU33xgVBWPuUNd9NECGKS5MoUNavT7KjjbMV9N2"
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
