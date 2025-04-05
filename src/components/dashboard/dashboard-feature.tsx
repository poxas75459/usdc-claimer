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
    "4o2T1Dkhi2Sy5pc8JcULu1K2KKYf3odLwKw1moWxjv24M8YeshrqvGsd72on6LciHQfsNSQBtFypi6ysHB3Gve6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtdkPVH4DJurq1snt87x9vuq1837BADa2uvGPxr6ZLJvwhJE87VH5mJDZnrVeVMQ5r4XU6jS6GSPuE8m2UzFrw6",
  "key1": "5kjbxwMhtRidoKBsrVB4fufq8CsWBSNRs8qYkqi8MzxBv2SBU7yxLqLLxJ2wNnuw4hAVWowZzHeXDoCHKQ1RZtUu",
  "key2": "481juynBffvZTqgs2c9KQx2C9d99DLR8GJ9NMH6EKZCA3pE5NMdXyubsEi5jLsEcTiQh1oaSnAW8jmLKhwZQo8pP",
  "key3": "2N6shtKZNSfGT1WkKEKbGutBo2i1rLhtNsBokVpFDJSYp4k4KXGW31pGn4sicLCjbRCb8KMrYQZCMh8Xt6SZhRN3",
  "key4": "4egSQcARSvjHLsQyNUnbc9qvdZmeXicZ94Gq2TjVtMZwrj2fAyaUVpj7qy5rDqEdFAc6aTFbpyASDZNgE5NiCDGm",
  "key5": "42KXAtnYq8wf3D5QEE3kbRhSvW9ubxXqYRgyNvDWUS36b2GwCKwYSviM3cYqzKw6mWeYZ5j8CRdJBVaefEp1DM7i",
  "key6": "4SDwYxCibhk6wTAs3p2zYvLivT12Wkv7PT8nTpjArjqCP4YD6y4y76oBr8pEcTq3TXcRQhqfaiJrprAwi3MQBXaE",
  "key7": "7zEuDpBTd3ABkWESrvSK5AY7mAYZBAJt6QBFXiU9W45rnEpD2AQdcPhKkaYFC6jhQdr4WHtQG9NsKbKdUko8Ku3",
  "key8": "62GnxGovJypereLUeT4NpXcaZP9uFzY7jEHSveD28y3zkvpHQPn9tVAkXDu8c7Pw2e3dCTDN4tMBuoMGiAwv5SLr",
  "key9": "2Hr5xAS3wdMi25C7arFzat9Wrjx5Qp7P7eioQTYYW3nkX2dHBE6kU4i2wP2eyBxtWjbCmDffga699ff7FSKzAfMy",
  "key10": "oJAfSnCuHW1xyjTmcfVFDfJpeorSBvvUTnmpvEES9vWqF8G8eLCDgdf8FHSw4SrtmvWeuAjWSfdzKC7TzjfMhEA",
  "key11": "29WKJopoY5SasjQ8s9z7iiWCLRUT462rbtyG8ciJHAnDPLm3SFqZUDRHGKDUx4yTt92NeWLG5TVw4QUy2G9fdWfc",
  "key12": "3eKeNBNC82zFM9BY3h3xW4UBLJM3u3T56Dbg8YsTZWp2GfCT3dgDPEyamjCFfsv3ExHAR2E76H54e8PpAH5NiJLd",
  "key13": "2HNNrzbz21jBPB6xrAbzF54xvSZmBdgKVG8mdTGnynPtYDgqHJ8x54gTsMZCLNz3XEfkeuGL5L93WebNEUJmBJjs",
  "key14": "5Vk5mJB4ovDbWqtxATWW1MAr19s73ZarWc9ECTvbzJMdKYJdVQxUmSHsNzb8DB2cxTWeJJh1rK5TNQ5pAdAyqqQk",
  "key15": "4CZLhkPPM6h2GYLtPwD6JfH2EJFskiqJuP4mkg9PiDGGp2JtFtpoX1EACfZu4ZKYznWi2VPiaLkuL1SwqH3gVANo",
  "key16": "49fqd6DLvKCEE25t233UACweWKrpnBNC9tBiVs3ngB399omy6fq73gc8mH9597mDptFj1uQVCzWnhZv5BsdFu7eG",
  "key17": "5uB3jkdv7AMScKNYANgGndwwQkbLjPpPP49MKV1GH7iAtySYitr7h58JU3tvpvivzTVfjh3JrgHsZWP98iye6R7V",
  "key18": "3nNjGQxLtnt3NM8A8wKAbuGf1fkocAJ2hJ34whXhoHsH8CTHQqxa4NFP6HdBiEL8QmzeD34FiETRQRE4gtu5317p",
  "key19": "chAKY6L6GSvNgvBf3JZPLqW6DfwDTRUaNFZYuFdQ5FFUbB9yYVbWQcudLQHnyN5koTfLQbZMdLFMKRaMpcSRvns",
  "key20": "2DR5t7qEqm6PVARmW62wqBAgxBuU7es7GhuQsHZcJCBcectnrqF8Co5t9m9dzYJDctmm6tX2mvGDJ6iCCXsh4AG6",
  "key21": "4pDWkhtLHJ1sqzVqKn2jXtt2CRkMFibxgtundoP9G21UEZ1KG9pR8CR6Ezpq2mXEjage2t1hSHHH5K9BZ2Z8DQLQ",
  "key22": "52TGPHynAyuNsyooaKr8n8ZGjCXQsmukwXXY4ciVjHefUgNjmftSEGBSc15SVg2vyxwHZQG3oHGY9mxNWrd31Vgd",
  "key23": "5caZCDfF7BmgjwT9FZYzPe99ca437fhJw7kaRYpbNjo6qCzvoe57GJb18y7GjaHYmaP8c8euXPQT1fzJybNwM8cZ",
  "key24": "3Ws3wmVbYnGBhmVw1Bf7n36NDbvo7ReVh9vHGWkvp34jZGAtrUQpF7ZV51r2nnGGJSwbbUdeYVhBETqkgLVBwfXe",
  "key25": "yt7howGWS7aMEet4w9H6LKRvFWLFiFehLBvnDUQqUMv9wJR4gxXJrDYmqxUcmNq9SeZXVJkvoQgbJc4pSfCKnmp",
  "key26": "58tKVgxeVasz27PFFc4LYkoj56wgyr9n4HXDHmiS3f5RxDAh6PXsa4Lo4x8wb1BW5FzkzQaiDvGFhhsVJw2DkGVj",
  "key27": "43viFpoxMWJpSTp7iDpr3v1vDPfexu3udsJsNduibkVSgGLDhKYAiNMhzjVt8HRjuZ9M71asc6AUffB8pPViyy3S",
  "key28": "3Mfv3VeE7JWqWxz4obuFupqYx3kvq9BDW2yWxTtDUeddHqHdssjdSueUKSEM7pfMhsJ47d7pEejAW4RqP1K3kcp3",
  "key29": "65i7Vyj5VWuedNXCAQHAZRzsnQg6nhTFkNaWhDak9XGXW8DUtqwrtqtHumUb5AeuCSUpw9EA2rdBge6abSNkuFxG",
  "key30": "4L7ey2HDALEk33Fapy34Wp47FPTqLQh3uGcW6kPa7aVEr2KbQD7rbsYvKWDzuTEadxhkqdKm1tcoc7jmBkYjfY2Q",
  "key31": "31uHJMhrSQg1VYz1LnC4eAjZ16EDnoW9X1MtQW5gg5g4XmrNDUo8Nm9qyxmTXFztMTQjy3m2biytxqzyXM4ZMeb9",
  "key32": "DMBXHW4jh4uwRptntaY7t4i994UmWNCWA2R5NUt9rrtK5fULiBdoJvXHfgzig9txaPfUWy2hvLKBsttyMkJyjWp",
  "key33": "5BSF7ocHSKQ5JFRexG7RMGLgWLp3mqxkkePctoW9QRyph8CFPnuxa1vW7ps98qNHB78eyiHM9AwXgfzE1CCuBQku",
  "key34": "2Qk7vJRGy2bkiaLJbYqcPfgvP9oVj47Agwjxf1QaveBMMrEMdkwacmf2EEfHNEwcnykj7Rjy2a2ftgdddQhZdQUF",
  "key35": "34XncB4H6xSRkyfFPPa2XK3UBigomkNEbLzNRQvkESskaMSY13r5sg3j6bnBHPb5Pd4TGtk1tnV82CzUeH1ikx2P",
  "key36": "2vQfBAorkJu8XtqtJ2xMUPvCHfKxmAuQgdiSgFq8V4gkXD5wtjoyGi6DFCmwCkayP3rtoaoeawfcGzLLtznQvhvj",
  "key37": "24XjSmyKdV8ENZEp2iRsNHxfSy4ovKvR92WhxjXKLoscXX2BjbTVNMq9fCkZSAmixb8xX5AkEaxr2dU8dyRFDD36",
  "key38": "3mRdLti9mRFrD182JwMhVwwQdfSg1DauJz9BWLodHfFFGpbc7AbAPG1MxBNCQmLBnUCYvPpVKRdVRvWPC6XUtxbL"
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
