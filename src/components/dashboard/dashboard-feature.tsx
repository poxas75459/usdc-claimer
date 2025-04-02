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
    "osyv8v8m3Zd3Mo9GM1gw1rH7TAddFktAvvGDnr5ic7nbS5ozatUeX5tYTSUPFJoGBqmT6HaPpZWx72pBheSDPjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQxMYUhooTsgDYv377TQxFd3c8Ux6rtXVJFtcb6i5FPAvdLJfDyu66rEoGbGGuBhncqT9yQqAtQNJ37KFuT2nfY",
  "key1": "3JjgTLErdi77EaWBiBTEQ3Y66kVMzSrp3dHMrEYWocgd8Z7zRh3kyCyBsB3fZffPPGZLpmtPSayLxXU9SwN1Kzcg",
  "key2": "2X7QKWzmtaB5kBoR82PVNewqu5QVvkig9cCx2xtqpTu1XnST9CuVYUbWX9TjqYpFyu6dYMVscf3krMQiGMwnSdMR",
  "key3": "3gGMjwuypzLrENNYHMktPjZbZYFevCSJqEGBaodnUr2Fs4Qtk4smzoHVJLp8nyrohirWVfmtTBkUraMyvdAMd6DW",
  "key4": "4ybwYeyQe6Ko64NDNvZH8Yg5qSYRB6QvLhgqdWuYPXaMpMWNjDrYMhJ6nVquaQK9jYLGGu6VdgyPhqP3ATWgh5bB",
  "key5": "37utknksj2HBfRwuYgE93Y3BZgX1wDWoe2tNeRYEoPWABM1mBcYJxcHTBk4RpjP2hBbixqDmkPEUfcVF78Wam2xs",
  "key6": "52cSwrGiqojjbxhxrPDj62M5uKjkhj1ef2WUSR5HqHU5YjJyyQJC26gVJdVF2n2ZGVYQNhSKWX5agEqgEbxg9CdY",
  "key7": "3qmhDPNcLgfQrMJM3JnXVxijpwLfsGACnPXXPFRWn9xWcFpZziBvtPh956jJVYEJpXoSyhedsa89SBLxBREAcTzK",
  "key8": "4kHKariqWaHNwMCHyCT6RZp5REqPCndwx1SPQMDgnvD2AAhwktQVUuVDTZSBL3rTDsLRzduxadtnFZWzFFZHwXga",
  "key9": "4wcYfEkrCXLGMnszfy9pDsvonVq6v8etQUuLaykqkS539pHg7AC4VLCohy8uT85n6a8NPFTwNu34bWsBDHS8GUHQ",
  "key10": "ZZRk4yXxcJUt7WwkU4QbeF9EjchYCobC8SsYUM66ouGbjdyM2e44pif8hR2XYobLKBKYda1ujsB7knW4i5jC3EU",
  "key11": "26jXrjaDDH5EE7t1aBdQdYrv31KinDc9WvpyViy7hFGpzny87oxzCW7K1tym1iYEzMLQAoV9Q7Dpjm6BmjkWNJ8U",
  "key12": "4jXJkqUcS4wA4Cci34HoV6xLw5VUEMgbEwodofm99NURAZatpkMqRZtpwVCb66qGBvRKS6ow7aV3keqaz3fvtfYn",
  "key13": "3SDNRK9svPEo3eJqbgYQ2jwyJ2Cq6BggG92128s1b161NVEXWeFfb9cHSYfVCcAGCa211Qw8YJgDB4gtnmo9z9Bw",
  "key14": "4UfBfrJdegsxQMLWKuZCVyXrjztYJeVBfzFFPQ44sZ5A7uQWiVWe53rxBaUNUiqmXq7KAUC6AEZzkDDzPod4bo3t",
  "key15": "2XwBWEQcH9Qm2YhszZsvjh65xf2Aqe8cJGYYKvUs1JBdFXYtM79ubM2XrybsTG6RNnD2MrBwNFdXWsjqHbvJhftT",
  "key16": "431biVvxGyA2q47DUURimoe6qjCgvjpCpSGSSSgpL2AUPQnYkY2kAPW3FKZ4fmsVtYN7aDbgiM6TNWkWufGnpCRY",
  "key17": "544Wuty8FzaQiQg4FxmnGRXJqvA2qJ7ty6ur6ZNwzEQ85rrrT3wmG4jfUS8vUiMoNT5bEsreXjpSkR6JAdWFc6Uh",
  "key18": "2KrwQzwp8ErJMxBw4GKsAr7kKs332g3D5yWJVu8wZpCgsWD7enhLqJUAirkTXrXo7xTESFmyvYYRMz9Lf9N3bZ9d",
  "key19": "5ZyStkd2oTXLLmz4RtmtEXJZLZ9tkw6k433Kz51XENQBkAbMGuAPShTtcNifHiS3ws3n4LvRnmUbNgjDnSGQFYbU",
  "key20": "3tqA1NT2ewbabHZUi4rfi7YKqkFftYZ1kKjMDe6UEyJY81vLpvTDkbtmAYg7vBGpaMLa7UPUaQknS8NwUh5G8gmt",
  "key21": "DH1mcJrUyf9z6uFDmaeqc4KJqPDncax8RrGrSRAHBeqXvqRUDGFPNJ7kS34ebdXJ6RffrNobS2rv7Umf3n4Mzjs",
  "key22": "WzMAAbo1d6VqbYDbcGP9EpviU3pHaAEQ5MK54MmkPcZCBEUFVEcwvgHD49WdhbboXrMRnMD8qKLym9gvn1g9dex",
  "key23": "5TAWe2DrtERqwAum8f3yw5irrAqLdxk4yv976gLLcEXsLm4qtogkpPUjykfm2E1YUhjxj72Z2Wr27EjHxan6Hoo7",
  "key24": "3xuc6bRnNgbt16CT4Dh4Evc81itHvz1eJLxah6XnbgqmsgcXdWfKt3qN4mzYFpAfWUz64MEQcLE3UZbvrcLvGF7f",
  "key25": "5FqSiYrerhrmRVCKjgyt5dMfLjCc5VbyQFX37t6tnc8vj1wsoJJSt8FkEmFqhWQwyjmFHFETF4Ew9dRVui9T5Aap",
  "key26": "4zpZEgGENVjT7FtkiN27NyZAqmgAAUqiP8NtsiuhUHvzejjPXZFkeJfWAoCMudrcJa53u5JnfP86GMb4e1vXbE8F",
  "key27": "4RKSwgJgyiGAecjpYiznNveDmwH2qpVrpYuJoeDaeY7wZ6TLYXcRrbr1uB2gQCqLUBc8bA56P8K2jLqvt9zfppN3",
  "key28": "3cVfvb7g6753BA8zcrMQCbAQXDwqZA3sEc3GxSwuJ6uvvada5BRGwmQyGxHdXYw3isQkMGQbrpniQN58SpuwcpTd",
  "key29": "5ZbrNP7EdiZAbeUum6gDML6PNibVy2aBkiSap6unbYM7UgGBjc9MopiMJRBX11Sh6uyRYTUMWnEufbMEZ2dpxGAX",
  "key30": "x3boXRR8rTfmX7M1WywgJJyGauvogb6YAT1Vj9A4zQrXmEJMMFufJcfMi3AWMhXjStKiTKyAhVNxgsUZArakTC4",
  "key31": "35vv97Zo7DnYmm3BPBbqyDU3v5zKE8i4RjQXxFWVZHx5CUaQ7SRQYjpzsot23fR9jakfDL57iUrw5LUZvKheysiW",
  "key32": "3JDbMqW5aaLRCdWhHLC6isvKooPAYm36kp1kqxrnk4k33i2iLzAM2Yjse4NzF6eV7CA489o1KamyfbP7vTcdUbZW",
  "key33": "WMMzMCogYbyyTF6DhHWdGvVJpAD1Rob38vJ5eWwmgzbRz9WrcTqF7NeYhGEMnDZviojytkEQ2xHRFdnsuN8KN6R",
  "key34": "5LXN8qaecoT4QS9vHKBGw6t6SmSz9cRy7S3APedbQPGnkJambxXFu8MwFhGg1QrwcaT9zwHiMV9Nsax1qdW3oFZQ",
  "key35": "2EsfJ8ZcTmfBNuvTwvXSVb8FHbz8GZtB31cVEs6WifyPQM3HLSbLGr1jXhQZvVseNqcTF3P6c1WJLqDpU5285hGb",
  "key36": "3ok3rufopC3NKW5LzPeWJbfM26qj1mE3Es1bieNiQEanw7Bkw92U8njCvarpRwMcbWdodVH49RznNihRY4mb3PHU",
  "key37": "2RT8FUxsir3d2m2zESGCrv7HxFoUjBzv2rtnEPuhMDyVQD44o4asaMsUWE3adEo2zrNwrREgqC2KR25frXtDNozU",
  "key38": "2Z7JU9Wkm6ZZnSJ74xaFmpi5DB8ge5wXxYFqwihs1Sz1nkL2UGpBJwAmWt4PusmViGuDRBhDrqnCzZu68xoj9ctq",
  "key39": "3PWYoZWFpnmHqU3BEC5gqYZvBJ2adm5pXqUuwqnSnSx6eP4bs1dYCZPrSUwWmt2pUf6YAcaf2fRdMjKdji4SXCky",
  "key40": "5R4E6GK9XUukAYroZAs8YDiouWxjQBpeR7hiZfMzyxZnPfQ6nA75CB85iTLCGt2bY1Rhhpyqcr7kSb8GvbR6dFaV",
  "key41": "2uzMYU9a2atiDLGSYcyGkPKcGUJwG2safJAKAwmKnzMCVUgLyBzB8w8DAhzwFtJmFghTBbTx4u4uFnaETW5WQm1T",
  "key42": "5mKNRpUUN2N6TMXLyQj4nFfzS8EA9bHVhUo3X1bhk8noaLrCLh7R1vms2aMH8DAZgKXXpQ7Kkdtrc9xYsTpJAYiK",
  "key43": "2aNTs4wjWyXp3SG69V1etCT5VXzJJQBFie6tvPTVFUYJxujJt4YjCWLyFM7iPQ4mHdcwZGMVX2X85x4cpBvcCNyx"
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
