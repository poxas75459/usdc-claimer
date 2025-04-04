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
    "sF19uNhWxi1fcWpeTKbZ3TGKvKsegqv7CinZ7oeGb8feXM5iokLdgFja7tEvb183dCg6utELCgC4yVch7Ui1Fta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D8cDAJodz2zcrY2kLr5PUyQ2StnyLEt4u7t5phcryaLoosqBuGyzWQhTJpaT4pvn5XGnTwJ2LSGpZtf2a1ti3gX",
  "key1": "4DiLeS5esorqkhxg98j36Lxgi4C3RjcQet4x8iiFKtzdeXjBS3nrBidMRinREbA5PyAUwjuDCxMcvLqKVMBitxMY",
  "key2": "2seRckLPLX1bxSYmCpoiYqXHPJcbD8wQqznGQgDmsH14gcGAfevQNsppKfEp5BQe7R29zvaB1biRKaTi3agKVsLx",
  "key3": "aTa9qEx1k1z1UupucUufdJd6SshgHMiNDc3nHTikDTW1zsdTQ7FnXEg8XXTvF4g1L87s3t6t4N91F7brP2jtQkg",
  "key4": "4ETw4468JWh1R3qoQx7g38QJy6YmupU2scMrPT37BLeaXMcB2QpJV13JTGrFmt6B5usAiJM3kfgVhyj1r5Lm59uR",
  "key5": "5bUHSfUzyJGeNDEhf9nUruVKgL26K1iVYKRG2EYqPS7d2E8RHtimprBEwwvRaVY1xdPoPPv2PccCzLEJPHJQjKXm",
  "key6": "4kzX8ZMCNorLXLKNaP7r7mUWQ3HvToQnWeb2CH1BNoNCRt9vk2mnYq1C8yaTJnofJVfXBEVFkqUTWvc9RHd291CY",
  "key7": "5M4EDAWXr9CgyfDnmMKpL4Ww2z6MZPU1PrUsTM9DBni8h1tUiFJppJrGTxwm82eUwvQubZcctWbiebAPeDsH8nvG",
  "key8": "63sB4Gj5kwRrFE5y61TR873wULuBWT1AqMLfxhJtzC9ykVgUtFzSTdQ2J8Bg2ParCh8r1gEPA1fnAnse9n1DXs7n",
  "key9": "4XSEQMPrfRab154TNPsGy5D11nZ7sgPuX2nxt8FrATvwVZmkE4n2koZiRt8PWMiQ3A44rGoyzt8J3xHGstMcrde6",
  "key10": "3UuV82Xvs9YpQUqhZqENnrZif81PQrZfmPHcDospr57s8LphjYZxyX5h7CxBu8JTNgGw968jcCyNJBh2HeaLNEsv",
  "key11": "4os7gYNKtM5yo7yBEUQt11t8twk9m6fKgfcaotBqWcdkYZMaNdaL7uG3RjPFbEk6WzCGsUyrfUUcrTdnTa7CaW14",
  "key12": "4E7PjDAiqot2RAmAyFe4b1WCLTyV5xwuFjBK6whZUHbTE3vdrMBqVPmxevf2kRnD3eYGweJVzZoYcTJLXmHdXtc",
  "key13": "4pZrMUvds54ReYdMr1RPsHXsXCptu3cHsECtXafvDBQi3MEAvQZerBcjxrbSRccDMi1vCq1Qhc1UP1CWyEBkgfYF",
  "key14": "3hBEGbzGbSS8C4zqWa1LefNNUsb69QF8uLfTRLsLeekPCosmNj1LJZXShm2KBidyrR4KrMgc18Y51g6if4dPtfo8",
  "key15": "28jKYUD44cX6W7cFJDekUXmazDW7vS1x52FfSuMWFJXAeJmZBA7GgbUDwdok9muxMgnGgJvHddJwMo9citPJ3GfH",
  "key16": "4AYDqXdf1xJ3cNtdirZtXBmRksHbgZUC75QokUmsLBgB5N5ry5yGP82zDbGhTAystWmEsh9nz4WprEge5gmzC8A8",
  "key17": "4SiuB678gXtwSJNNj89qvmTWQ7gwpjgXB9bKYLxrvsnuku7dsmPLyPc2UtUXY3Y2VnCTAFw9byiMce1HEw3FvDSC",
  "key18": "4Wq7Zaw5x71QneSXru7Cds9u3ZDPrCkxh8jvnNLDwzP3QSyPFsrfxUYo6YtpufGPYNjJkmhfuPHCxjhFT1WBKu4g",
  "key19": "38pBm3PjvAY7n6jvdCHvEKswEJszXgPFnAzskmhfVdyuksHE6bu8hpNB3CfkEtkm3XQrpJTkZjNcmCDpL4e444YG",
  "key20": "3rw4i9kCpgGbKHh7vHt6Ag2aUpaZwUDpqcsuw2KFXMuaHxSEqKZzdJxEpn7pfdNx3QsHQ2mJ3wY3uhF7p32bvTWA",
  "key21": "2pdVcVbxUzsivM8pVD4QJdBAY7hu2Q3nxbWLXzg7EPsHaHXxDo7mi6bhD3GXAyKAiaAeLaQGL4vPEqYi6B1NqEv",
  "key22": "4wWXRDcMgKMJ6sj5dDptRsfsxXnKUvUqZaiSkuGFMTKAnEXJUjX55kKoCykYDhL6WHjE4XvD2PEv86dUjuBnQEj7",
  "key23": "3YBXpqLygjMPZCp47e7puppWJWkayb8HVAmBi2BekEWiixRHx7kgQ1XqznFiH9MQ6jRCRiWw8yLMyM1B4shAN1Hp",
  "key24": "43fnEMKvH7VZYcrBTseKXqw4BwJ1Rdi2kCng3HodrGDRAA7izmdAYxPqktraJmeteU64MWAmqwWiotktXwBeMXmt",
  "key25": "5Q8E7TVBXVYrL3aiUx7SjMvHJXWmbLhf5hVAhYsmmkvsGv6GbHHvgEpnEsKREwEy3DECpENjTWvwp742isHRbeja",
  "key26": "3pdxCuoRkKf9cJRwa34t3qTP5nh9rspYWS1zgsMDdULddGdbdtph44ropy9GbjjwuYYPCtBz17QHi7pgN7nEsWvh",
  "key27": "4YAzjtcPxwujx9aErq2kh4en1DAfaL8RKaQeXAYMFaT4xFeHXKEDRcD5f3jkivzFqvm47yYoM7eioD422z48hffa",
  "key28": "5ZqiB9yEjQ19sKMYbHpVyzPNeXXfnyprfmmvm59dAAjehsdSBZLeTuCPe8F7ntZq7jZwBHd8Z4bF2B22T3QqTXSq",
  "key29": "5ajb11rayn6QBsqSG6FcgB1bstWLr4Zr2XZ7toJ1d8jjfmHXBJ1rzQVcCnocDC3rUXCM1taSpRM7r6bLL3W2NyB1",
  "key30": "5q2x9ugYLLGjLq95moQeA7enajjdBSNoLq7YArMqABVcmKbV8Gh9ocayCJKLCCsdhmVv6btmEAHRtD5B4BFTfFWb",
  "key31": "sSeqtXWiLY4VTnutKfwCepW95VufhFbx8wXyc56e7vaE1VQLUh33tKNSJcAR7fyBz3PZkawDbVjoFfQbLVo1AnS",
  "key32": "31iB5Y7nj8tLTH6bbYCnHLvx772w9VD18qzX3hYCjFqNmuPxkZdQi9qNkmg6eEjNdsWCWNwGFJgqG9PjUVCi2jrW",
  "key33": "2oRqu5b6bY4n6BR7AexVoTUHuSLiauCnE6kfM8EvBeikdwr7wUrd3zSRQSr8JPT9CrebrHGM1nSEkLcFiGyY28dR",
  "key34": "4ihsi1YoZGSQZcjTnJguRENeBiRthMt2tEuMFZNHxvtd8T3o6eivUnf4ZxeirVUQcwM11CCv27ELVEdYvHTQXWu2",
  "key35": "Zhvsr5ca3is4gcJmA9jub8pAtr156GHwmBmt2Bceh4Sje8U22bNZbPQHhRWTS12zQ2psFc5asV5M7qXSktMPfHZ",
  "key36": "3n1CkJVNhPpdYmQkgjho5kv3qjRosamksWzK9BTjgLdx3aXtTRzrbW2tiBQ714wdNhH6URfnH8xjAKJ2kgUg7RzA",
  "key37": "qoN4AwVsfWXJfP8muA74W6MG5BLfY7sTFyCuKPUGJzXh9jBCXLkDjH2F3eCDkFeqrH56DnwVVFHQT9CCv7K6Mnj",
  "key38": "SeFszdiSAbJrXGFTHXGfci56bogx5YVtTHXaBHfRg6ucZTRYNJzLy4cqgbCCDhHrCk2NtTt4Fsa2XzcA8arVdQ2",
  "key39": "fn9Krj2ioeDrN5fGjwLueteGtFWfjeLg3Ag5SPr5ya7anZZD4tJa6muafKJd3Nvw6F6EubtgJPkMCzmzqBdbzzu",
  "key40": "h5UK5K3uMr4nQjc3RkGV7FM8taZSSz6PPAFwcTzy3yku468SKb5qVA3Xx7eNBUTYtnXFuwc4Syx8zK98vJQ6qav",
  "key41": "5jy4QuChdL7ZHPJG3fGtXz2ywbJVM7m1NfJ3kZQgnZ4LQyNpi5MjAPwdLY1qgH5V4XQWiPf2Jevjbxvi1KiQP8ab",
  "key42": "3o1XCM3Nubanwk9VrWAduo2wvSYhCbrvoDe6bfcAXMGnMqu4QEznQWqfkn23HqC3ssWPYjsVxSeS6qc3xHwRahLs",
  "key43": "2vDtGnKajm3ZFb4sJ7CoZBvUkSMpkussBNu9XrsXtNWSjT72zdTvHCZeENRbGbAxaN7hMtDHief9zvnzoP8jCZNZ",
  "key44": "5FcYp7xN6YUid4oUgRpk31DA8Sf9D97HCiQoHmHfmQFb1ZSDUcCT5QTaeLAwqzGxtzp6eJMmnCgpig8sEsZ4CtTc",
  "key45": "3M3oc1H3qyYdNCoXdH1G2HeL86wvCJpdf9KVtyjbGETgmjSjFAnFNtm9TmbCiPa1yE5jPMa18jP3hmBRnkYwe6us",
  "key46": "65nM449i7f79bNcgKpVuv8XHD3EnfcyKhPMHSW8sHJ95rLc4mpsNFMEKWaaD4iUW7bgCNC9sdvPQAxhhXSFb2UnQ"
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
