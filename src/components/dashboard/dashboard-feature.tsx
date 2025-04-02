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
    "5tvNgDWygzNDCPYHwh7pqbExyUhkAzi6qodm6gakwEZXiBYFir2J1mKQ6tmsRECkwMqY2M4c1iYzuEU8UzKbML2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWdpCUCnsZoVj9FctNnj1UubV7VfSmMDH1WA5QAzXMfa65YhzmYUV62pLHK9mveGaqRn9fMWdcSqFU1ZZLeuE1n",
  "key1": "FSNdj4pDH4W3zhEN6tivYpRfcA6NuUVeHQBSpfuJieYfajRsNwwQvscXXcmjPdwggHt7amhDpSxuhan1ebEBviY",
  "key2": "2gRCwtfCG2nsDSfkzE1TKG88z3n9EuE5QX3w3hnkQQ3bTdTZW6ZfsZzDZxsib4K3C3AczNA2Hg9HmQah4ckipu8S",
  "key3": "2ibxE8YanFgwnAzzUzYXbZkrW967r1fCpNw4JSiY7Y5fBBuSvVVQSHgExT8TtYDA8hYy4DkRVCpPPQVgg1VuBRSU",
  "key4": "4GtsdHSHB7d8wDAo3vw6CzGqAqyXEJdMLxQft9b75haxgAnGGfemYH9ncNRg7mLkfp5jeHD1Jh2yBL9VL3z3YJ2V",
  "key5": "2gxdVV898uoFSg8vGbNZHQb7m2Ch6Romr7jzhvP4QRYih4oR8w8na3L63pVKvhDZCfEsykvqrc7DrBqohbAXVDsr",
  "key6": "3Z3DyZTGb2KvGJgmKLgR9pGTxpmgD49pXRHNLFKF6Wut6tVHMJ9ZxfFVSzCC3QwZKGqyixQnGnygFFyGeLcx8Fnw",
  "key7": "CL1wfpfx9Fkoi4uGVVrSE4i46tFGRa4ALUqSWhPE1MBmtTfVgp3oifTeP9qSfkjcjpsrGeDspDiE9ArmvzGDNm1",
  "key8": "2ygUGodBhPM7Nzp5Jk1Hit79SPhiqHuhEZ4HCSV4KGLHANmCNpyMXevkDbDJTwuwDvGGPLWiZkPc4YCgBzMtbYTP",
  "key9": "25LSx5LVJ6jHgEUHiiHk9fQa1WssbRSg4G9Jh73veMtSPKzMgWxiFJjU7yxcjpLUMWdbZhoJ1QY5Nv73HA5oq8j7",
  "key10": "52vjjnVfcY9UrA2BgEVowxPWMLTbLaQyLQwJzeaFRYeX2Xzkzrvo238FKGZA356A7ErwfoKTVnd8b4aPwvFynMVi",
  "key11": "ZokJ3BXRVjjj1MZSWoJj7u4G4NGJzTVc394bD2hF9VkCndahSiNx2Vs1nHribeziVP2D9zGZQBt5ChaJ3UsdeCF",
  "key12": "4ucKh9Zop41uweFVTmc8gNSkwDiJy7gLATAPe9Ymqcspe4MEPXgQrogeiWKAcTWbgSWytmxKgJYAxLGkamgiJ65f",
  "key13": "4wGXdprMicAtFPQJJYQbaU3tHnnL3prfASrDa4QfvidZC6aCi6MUeyP365faowpqMKd1FFhZVrDrXU6d7gfNLLj3",
  "key14": "4njFgTgzvgvmPuGj2cKhJ6ARBUTJ9fEB7SipewrrjTZDhn2xz2WqqBKKAnn4KDPFP2iWVh44eqskAXsMttmynay7",
  "key15": "yVsYGjmRrxfqnvV2ueEnKM16Rx2jQD3f9vAMP8C3uDMnh6MGb6PRCa7AJiVfw7ikAw5sdqDGGUi4J6BCdtqvoDQ",
  "key16": "rnYKZFu1kGvSXw37NnJrQnGFeueUicEqK5R5f33FtxbopXRMHcvx4xeSb68mfM7i9ZnU4MDvJsYUNb1ir1iT7yj",
  "key17": "3dBoVLxaQu7fstdqELFMB62uP421R46HtEUQbwrrBzySztku1xBaTL7Ri4zbgyHjMpt5tnk7pxX2VwYKkan1ZJnM",
  "key18": "t72VhMQwYbYdMkgFN9hRzvuxYX62JyPjJdJp4VaDGTRp6FGyk2cf56XvkcJ4SWEyTAPvgXo8qBkZibnNBs267oy",
  "key19": "kNMm9s1EYxSohthsAbEcaJLkJkFgeskE12wctqhWwC2vBfxrehbowSixLDpsTVZTD3523hYQVo8MVQySraNBtS1",
  "key20": "4eH9k16bZQBYjdsLZ2ibooQDMbeJarJ6nH2pT36dwdDpnzqCYyveHuy2phoLradvzBQk4sKTgFPr4GLyiwiwgENh",
  "key21": "jbBDwKVUQHGG5q7q6xcnrezb9LvjHJdGZ2TPdMn7qA7CqAqXLatsNa3MVjhvF3ADHRXVpioeR9wkARg3PqrB6w2",
  "key22": "2hyHyY7c5yk75eq6efoF9zegiD7PBbEFHkCEA8X8c5zjCY35AKqGEMeqAn1V5qyczdJGBuvH7s7anj2AsCYSRE5J",
  "key23": "634ZFWN9YsKZFat4xUu71e2CBNAJm5HJ2WsonfR2ykKRqajs2zgeSx4zH8NypFfbCWxQVVh5pzhhjnSN9kSYdgWB",
  "key24": "531sy6GjHo6GPdqJ3aYwpYL2UFdLbJ92BG1agwZAntPFbRoHeHF3TmjwT7aXPwW3ssdA6Jbc7YCq5sbZWxenuCnw",
  "key25": "64UzB1DUbCWsWTorQW3B9hznnBH6nYWLgJ93D2J2ASBqBZTiAhka88RUMyjLoCqGcXv9D1Jd8mapbiDfBKPPdprv",
  "key26": "4oxHAV5edSVpX7xE2F7sjtJRh7YaL339UdgYSYnMwnHMxxyBtVbvcHV43zKYhJBXT9an9asHN3enyA5YMyuMnaJe",
  "key27": "4iJup1x9HST78TU3bLnLDcumyUL5us7nCroVeP4jsLmY7oFVWWH31nHNFUgNNRZpWT8UkCkEigXpjsyZKgMeMcQj",
  "key28": "UJXcLphguSRNn2D23Pse6R2YY5Rh8XRSqJthyuuSHbaaoRXixe8fT6ekiam6dEPdM6vEtzorVRr2xcw6Z24rSdt",
  "key29": "61sunGHJZ5FG8y4Lh63AKbkbmRbV3SDzaTL5gXNeGuR5eEenDaCoQ166xYD2CJ5mp62UES7dCr7b81313hPcReu8",
  "key30": "3Bhr11sdeToUM4gw4qKtXWRSYwJKuyCYFQ1Sm1TRU1Qf3kE7q8VVDjhbbdqmnmCNAsSnKrmy3zEsv1DX3PWgRUaV",
  "key31": "3qFP2GgvJBRRQrDr7VcMcbxDfkkyxfUN7f1r6rY3xubhbvvhiSSFe4hvoJ6TiXX4KLUYnBwLRHQxdMZshoDV5qKE",
  "key32": "aYeZBteAizKNYuBm91R5r4ukTPuhjYZwHc5be9E4YcWuRghQGGygrS98cV5cPWwFuV12UCoL2d4W2c6XggzM9t9",
  "key33": "mYBvL4wgsnTyHYt6QeTrkiAdwrtMKzZcKewVgFCrDKzbTrYYzGih2W7DeadjLnX5kJ2p7TGFZDVmTSFUTjx59UX",
  "key34": "NxiA7acAKfaeNa37zpd7yimNSUPgzuDZGn8yGcgxPx5xdzE6NUYj3CtGpRCE73weo2qvzN7FzhgFqrMAaLiCHq8",
  "key35": "3eg4Lsesqs3DxZsePgymUJygtkuayL4Pv82BvZg3CzHa1fEehY55b3RbgVaMf2UXMnxJXMMv11ztxSCmNXXAbKqv",
  "key36": "3fhT7tnCBcwsWcxqXPWP6AtHuVnUekxxqAHGqH6XuLmot4H4rSzZUYpFStKmdy6BPDqsFMTcfk27hRmfMByS3oXb",
  "key37": "3vmeyLvPGnGoyur5sxaDsLAz2tTW36af4m2Z3PrEcPNiwvEGnH7FkMkbBnk8rFxv6A5DeJpH2dmjbVrobVcrFNzR",
  "key38": "2BDfXFVfNtzjEzNgTp7nVho2CDB79WzoeweGcUMTusBVM4tFi7CCYxCj5do5kp1NL45UknrQST6m2Joayc7UmWiS",
  "key39": "5vJA87ExwxV7ozhq3FmbsLTNp5LW9zGVY26G1tjeJwjkw53p3roMkdnwJmQG5kjExS2UShgcnxdKL9mG2Dufbikb",
  "key40": "E3GGubnrk96SUork3293NQ5ys8GMGubaQaXz4RQpHQJDZgv2N4kvj4PF6Nic8mM5WDNqBn89D45co4ozvamsvVG",
  "key41": "341vci2wapBpoTy6t9Ea1WE5QYDbJxNVAs9JpcgdeUbnNTaYeJtDvwjp1jqzr341ZR91iRtvY7yoAUkLoE7qypVv",
  "key42": "5vguBEetd3WY9x5YiXzpywiJCqnhN4dzfDkq35nCSUoCPvChS86Jay9ZwKJSXWEgdGRBWFk9GT7gQmkfJkTg4H6n"
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
