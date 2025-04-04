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
    "EUj1X58mWf6zsPUNkyCLD1vDSXfRCEwS275VFXJnz5wrd9qWkRxBqfWv2Mu4MJUBBiz4L4XvpWXPT2TVnQuqANH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjNK72ene42bZwQfEfQRNeh5kiVDpDZ1DzF1E7Xs3xA6aUYkktp25NdZsxHux2zYpTEEpPKbR7bvkWFik1dsLYp",
  "key1": "K4AUTKUAmDWm9HdJUEpyPzeSrQRyhbGSLiVnig31rjpoEXniEhiAXUFXWxm7QajbEzrvD2trtN5g4bu3sfTvvBe",
  "key2": "9btUmwTPCUUqxXV5aibx1Wp5WWMVn3pm569T825X8tzDM7igeXoZStdtVYFd9gYXcibMEAQ53Es7ff71qpoLa4B",
  "key3": "2fZekZ5NRa2UmW5C4wxvA5HkNy2pZdcVyvPrDUUpFBbuBbnSVSWz2mmuYFYDGCf2FWZUR4nw4jv2y8SapExfYb1u",
  "key4": "5DqZM55G2aeKYFYTrhaEpyiAoGy6XkhJfgWqG8gzaBHctbsE1U4SjcXvSSWE86qJMkhWzcU9wxSvCSBi527LTp75",
  "key5": "4npQEgJzsEPcMNfVGDr38MSkkGN3hbtGBLTBrpqdpjD9Pke5SjFZWu2xEoQyrfXZBwky1tJ8oG9FiJRCgCGHd5eh",
  "key6": "4Dz4ttanTHsew8Se2iFUu7v9oQBmL3Tb3GCLCZj5hDdbCUdYZYd9qQpvCh64CQDm14N3cPTiovMwTxuLohfqahDi",
  "key7": "WtBKCkyfP4dpYS9qeBwedpFMPmuSHTv94TTdCDxicSM6FYDu4K9r6BXsj7raj7EgoGWRsC5dXydZuvvE9MvqxMw",
  "key8": "48QPvcEqudbFUkznFooszHaJ2YCFa3un9143SkjH8gdjjcwYNW9oWFpKhL9MGQgYs6LzMD5mEURwit4zcHm8Qf2W",
  "key9": "BEdr98fpMmJq5DS4NBJi5dEcFYxyE8U8sb1oHdTvZ8z16rqLRTJWhihB5CfsmDSv6hyqqGmFpLtqVGEAWzdD8Ms",
  "key10": "3GWogiv1Rn4j4uNcjteYRDxqBptQ5edPVmezQtmYGDCBT7eParTTv6yNSfZ3S7BPqFcHHQnLk3i5AXCrwBFvnbvL",
  "key11": "2aSZ5QNWE2pSzHNiPNF72Z42rAwnaaBo4i49sUr3gqBKRmJHrt1JLbPUvmw71sfY6B1tbFJ9zXk7v2PEHr7ibtnk",
  "key12": "2bgpYAkQCJYmfn8Ysr5vJ4PJYBja4wGNhtj1Gd4F6MkFRRfrMqKP8fbfjcCcNJ8gQbkPsKx22fQPpoBgNuiiCtX8",
  "key13": "2xpS7m4XXSURfKGPiKPLA9bMnhr7pfDdYhbNVNRha5mvcsjs1NhRE1Swp3jaFbL8NV2qezkFDq7GtgwVjWzMzQ7D",
  "key14": "5nKDhtmcjUuszeD1GbQWbwdScm2eQVfyw8fTFHWs4UaErcWyZG5ZUpYD8wdLcHH1DX8JDHNgriDAajKxN7hteEi5",
  "key15": "3pH54zWeE7adinndS5oizPXRgvtpc9nu9vU6xpPDrK6LKLKFvChrfFnyCWH3nbzXqyo26iekQF5BvgHCkAAeDYX6",
  "key16": "9dVHVncpKPrxHBHLBcY3ESyUFJZvk3DK5vesnpKSk89hN4XiWt76ky2xKsALVztcXhGZgN9Satn88A7BK7MfCLu",
  "key17": "2rkmGtUXa27rbMpdfCgFn56BguEE4CBxujFiiff9hLnpaY6M8g6BpLHnK2aSbo52RaUcVsmtXJUf9FPgySrStpnM",
  "key18": "5hZxZmoUEv1eCDoDUk6YbuyVXLaz42k34BPr3cPQLf4iQDF5SGwkgwqtZ3p867BYVU7hAYGcNacCCxPoX8HZ8NH1",
  "key19": "3mcm6fSHoHs7qDPBL7jtnMx9Z8EzEnX9xXjdWDLcS9cMzhGs8fjUiK8eKJfZuzAQKY6JVrnjB7BxemBtwcxRqDDE",
  "key20": "5ntaEnJEYg6nnAYa1mFtrrcCL1TpT32ssfJpzHUU5GkREogrRk8wJtt7bQufiKQiJ93nNyTRVTLMjhvvwPNZjJ1N",
  "key21": "5k7fJPVWEieHJ8juueabxGCWp5u5W13h5fRinNnE9nPTpNRPhbRKYyr7SqLK22Q7eyVTwDdaec2SgWpAfya7tbAu",
  "key22": "4pxPr8TRwARqWfrVQo7npedpJMVxeT2KydSw3DSVDsdouAH3R7SoPauA46iZzLitxUrp3s7M82GL6X6CpzPE8bWS",
  "key23": "5hgWASoqw5JwLLeyxRp9TvFYmPaxWqTrm3o74MN2kz68kQfSxUE8K9Lfw7coHvDYabqwnG5kdsKEhDu66Wgcwgff",
  "key24": "3ApjF2gQB89DN3xcBX8zntad43QP93xe3YxJdQvW9doEYxacV5LeL4A9XpeThmhexkaTWEe8CTF3SeyVxzARPa4",
  "key25": "3n9Qqnxgmmh9CY9LGNqrRGv3FBSnBbFJj3LnnRk1jEF2VebP4zmc6WoEzApQ9M6v9eqR27C7NtybcHN1yes7qQRA",
  "key26": "65DTrtHWFLMBF565Tse6kTWqsA2YmJyMpX1uJSrxMsBbjybY5tgURnBtYob9uPeCStNVane2DYYSGp3UeDC5zNHy",
  "key27": "3VPCgHYVwFjzwjLSouqQxv2BtZBjQrcxVt5UpQt8iTFcV5Se7DeUyCSXB3jcGhTAAHzJobYRgdmj6wqQvsHHJnE2",
  "key28": "4HLgPCY3aj2ShcaJcBWVjtuCkDXxJsNTLVtUGFbW8yZVMKNBbJc15py5J9SKG19oU3A6nk2Wgh8sai1uvRzdqdWK",
  "key29": "2di3hLniqXETJr1KuJcbWDUnRPsvMgeG6PeU1S3foNWUwnH8uEHThZBFcWuNreJSztQCtbGohmX2KccC1sVbTXYe",
  "key30": "2B5Fbzcyx2jtbeCnRTPPP5YTvo44F2dzsHQmjjxrgEenYfayuijPJQgLuiPt2HQe6eoDXV3Lx9Jah3s8D2Riyz2F",
  "key31": "NEqD7xB8H4HiVWoiVsgq7atxLfR5647GbRwMqcgeGnKBFE9kwNwhFGpxe24TpT5Kme1s4hHaaZxZFxkQazjcAaU",
  "key32": "4Y9wPKuWV6CxAmGQfBKk8z6zj754YvnFpTuYAbTYku529xpE1QgjUkPSc1FK9xAp7U41uZNgFVHBcoKAy8YZgEtj",
  "key33": "3JCUJ1E6EScNfMBLod8dXbVZra2dJEevGghrVmanHxbUsr9BkCaANM8mEEsA9YVcg9qXDthCgzpDjtymozie8kRu",
  "key34": "2m19KUtBUU58ocNvzPeVgqrUE5ErqpDWmwEvJpwzM6Xxe6UtDGXmR9Gcby9nNNA2pM9ZCj3u77q8CvUXvvnv93M5",
  "key35": "3yjp4vFqb3GfoAn3a1qT52wpTepDSRJLrJCvgKECmSvfHHXWkup7yEGmJ2u7qknXgyVN1WnjBLk1BNGB8avKE7Gs",
  "key36": "3DUigHAMGCbpKTv2zPM1Z9qYWir66i8ntWXvK6VYsFgM8tCubQ2RVduYKmwx9y3Uy7NZivJ6ihfRWL5mYRzohoDs",
  "key37": "2nbNGgtz1pwJg6u3iT25s2VMWYYNj7H5Z5gZMUUDgE85YzH4txJ6ku9KTFYzJWKfvLXCUz8BkhwTV8KAiZTwfbRF",
  "key38": "3XsdY6QbdY7fwNdEWK9RzbP4zEySSLcGYCbF22Y7i1c3hLkfBEARzDZeMm2iNsQorHGjEdxGDaVru42Akg9h8xgN",
  "key39": "3rqkBHxa6USK66iHVsvXF9xn4eH4uPYWCNebU9ujHHWLRs3FBgj7k9vD8QFGVT7i7PzUVurdfWU4bSYfv1c7wg6a",
  "key40": "5zoj8vTRyUuwXCafLk6JBmR1PEUrnz9tBoCsm7XorRWd31QgNTLPFqcAnN1UqSmroVdPKo3YQAFhoC7T9ReVstWZ"
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
