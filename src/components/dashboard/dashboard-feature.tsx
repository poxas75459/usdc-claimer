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
    "8YXfAivsHVJiqadGXefvg24Dg2GrXWrGSKDLNjetBWdgufrJqWPRT5aHm8VE8pHXaNcqntaou8PcMrcSzia7QTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPFg1HdUYPm9w4i8dsmXXEor33A2ZnZnUgvv89zg6xwhNbxX7N6WmzruMpxSVuHVWgXifp89T4QfLEZipmir3bJ",
  "key1": "4w6WwzyzN3SGVhXej9Bn6M5navgHWhiadYTn5s7PbEABrHK64UAJNJSEcpuMUPwRWKkQRasGosUeqkXyt1pYJu7b",
  "key2": "2m9CEcGZbMfAoU9hBzUmBdTnYBMoEyUxXqLbvfSrNo1g1RrN1BbCE6PdchAp9ktMohqjCBeXGriT62mAafe82tY6",
  "key3": "3pbMngK1iUYAoLVaPwHbeGFc6xz6o4pWqdxBtZdmkFm1t887KVzrWWYW5EbTLtd5nx9nd57y5pftMqjSxzbnAjpJ",
  "key4": "4ovcwVUjcFHCbjdMoJaTHW9Mvh69NHmLRHKUggmigHy1LLoG6rT3ACMUudA8rqfxwq9ExpFQfrmMxUT2NcWM6fys",
  "key5": "5vStJaLD4kKXszWX9HjHEo1RZCyC9Vu39U8m529p28fNePsgESiBqtTbHFDp242b7TMD8EgwBUNgqYcZFRZmk53Q",
  "key6": "2xjWHAGAEVKzG8AvSYqYZPvFLQ6R8ZAyZLWnf68oysYLktk1Ub9VzhyvcpUh641JxuC3Qz27CmReH2PcXo4vteci",
  "key7": "3xHPxSgpPbzaYWbXG8f8xwtQYY732r3QiVVciwfB5WJzMrpUnnwUYCqqkkCyeEGfqaRcU7Rq6Rx7rRq5YGMBTNDY",
  "key8": "3vvEGqpcnBqEAMCWWKfywxbaC49rdf1bHNDTYzjA1WzBBFxRNyp4RPa9KsaMegs3Rif4iB2GL9V8juiTUstswGVr",
  "key9": "358d3gzWZZGU7aVQCfmtHjGCFXTm9tw2d5tNfDcqohrDfzumtTV6JoPfNGzPiQHYSywrXsan2YNBgxJcYVuecdQs",
  "key10": "4vN9wbejjLHYrgDDzz1B5UBv3TSnvBtGwjBJYY6A7FCoHFYzWETSLVLb4QMRspmtTNEdKkwuronMfY7qzjMAzkAG",
  "key11": "5cxt6PJGHSUd2gmHhFgKtziFEwJUe882fn9NVaAUMdW9nyH8WdM6xhupKUenWzHTp77GrLNwvjPGs2RKDrp6Kekk",
  "key12": "4R5VaaVC2RdCsmyRPD6HQHENvenPbD1YwMSDvQUyYBUeoEMRPTrhdfnCk7LzqLa5XDWXphjaAQjvUJMz8hU1ujTa",
  "key13": "2uEmaYfTh5o7tPjfGeQT3qMfnE1XoJzqKZQeSiCgPByK33SbEfWBSfH1Eb2tbwUswuU7xNMJ8iBprRqF2iWFa711",
  "key14": "5b3KnPHerS1mAtmniyF1RBY7hN6f5QrnDYBfsm2ZCJP7uAUAuFz7KSrfnWKCD3mmevVmGfgheEVRHh2MmrrcCWTX",
  "key15": "5fwdtUVxdPremGAPDDbRqseU63K1tcp3BUAcnLGr9n9T6bCVHqcvdtzhak8CYe26sXDBqCCo3GNZXXUyVwf39WxW",
  "key16": "3mcpEhBEj5GQSt6GahcTzdjLy1iNxnrYupd6EhGu9suC3urXJXvqnGcNqXTCEnWdJp72WKnB7htW5cVzGoadCDHL",
  "key17": "5CxMDuMQ8vdPQTtq6xaJPcB3B6o9X9tTwfDn4FBr1hNV14Eie5QbA944gNbHGGDk5LbT1tpS6EFujLh1bssjxA7q",
  "key18": "4WzxSz6v5JDQ5QnJhyKyyaxLKCsJ3wChBaaj6hvF5HAHqoGSBXuMwS8G4w91duUn3VPKRsmfPXWFM6zSvhKFgDSd",
  "key19": "5iYbtn3yoevkuHe9gwNyYdDPXJ99XSaAE1v9NiJNLETMDrsAQAnAXBfBkvybSbKJJA1DP8ZNk5R8JJaw4CM3yUmz",
  "key20": "3nyjzNMHfbD5oaaoKCtShwHtiBvri6qhLZHUGZ7oZfhd2EgTUGvcz1xLhHvpdm7ALenk7PdZxmPS2EkPDsnEpJfb",
  "key21": "5TcJRQ28vPXNNQqwzuZRYPvykjpuixXLBHt5nh5PG7xQNCntQCBnHbf7zkQQYuHLRjX1aXJdrPXzJjsjRo9JCYNq",
  "key22": "4mq2nofYH2UdrVPQggujbG4R8ZiMjRLw8TooBCvSkV3iwWMrSacefrEPSYi1isfWRTo5RTM9j2SfdXyWHMqNGnDx",
  "key23": "55L497ukCkCsjbmReMLEpvw5rsFHcD1ci87AEnTf7LqP9EPHCHAxLPW4gx46ALhNhncVXsJ8BpxHozsg8dhLLYRj",
  "key24": "63dE1J7Xb9PQmY5GkAUcPXCa7VPEArbVx9GaFpUezsxX53PeJETGfWwQa1jLf5hiJnbiMZn7noUoyb1tsep5WxGx",
  "key25": "AQ8Roc2yGR7sEDWCwuCumY6iCnRnJbuWxkVmtchjVKPk4BzMfMgtyt2BybEPRTHojpBbvfYhp7tgUMSq35uf36h",
  "key26": "4SG2ZDuFrJgZjrbkZnDxP6r8h9gDZHPaoaHq8C8GZ8csBGKE5UY1LsTT3NzBMdHWaWRHP7ShNwpGXkTHigeDPkgh",
  "key27": "5YHVFc4SVsYL576MgK436TjSsQX4qAqNhskY5aYKnB5XEkL6xUhuQLkBTCk78GrdsvqNLxuF6qUS7v3UdZEw1FCj",
  "key28": "4ka777oraxBdPSQEmaZPNTnEPvVtYfspg7mpJuD8emdLw9UUErCz6Qz9VME15gJxoiESBwZLK62np3H6dhTMU7QC",
  "key29": "AfqmNApgdnLeVhjiSsE37e4e9H4PtRTaijSHEMfrdmv52QJfPAtb3qZsv4V1LBCsodwi6YWnxz6i8sZfHTcyXFL",
  "key30": "4uvv6UhnRbeDYErzVXHCAxQbSGXhyGGVdvXjha68MUR4Aoo2gSk2ymWYqzeBKt5onYergNset8PS9HaYba9Wxsfa",
  "key31": "3Puwp1CquTEDGxemnoRsPZxApHzmikjtyYmMMd5Fu5y8aAcTTrH3ajFYxikTbRGZ58uqC37sYosW5wWY3Y6oHqzS",
  "key32": "ZKfJ8jPux5QVo1hRTPU6wwuMjyTQiG6UvbKoMMyJLfAVuye8dtxCfpUV9ZcUo3sGCXpm184AC6oJU5v8BTMqtbJ",
  "key33": "5H9Gb1oVSrmuaUNCBRYjqF2Gop4Q2e8RiW3QySH2SBkotFAUpapuuRQKko811vBVpJMtMqvzGYKeGPms2FG6onMe",
  "key34": "5DNsAU1nKdx9Buk58bG2qTCEKGRQkxYfnGjd6oFcG7oVDx26puUZdX555KBQPfNamtzK6Scq29DZG7BhsBZAxBpJ",
  "key35": "3Qa3bZanE6VE2bGjZ3xabw4W5ApPUy3LAmns9uHJHTGhDRnYwdU6giPC5TuhJ65x3CuGGb77Jtvyx1zqc48KsWi7",
  "key36": "iAitRJZeivJq2v7DPmbxLo7dvhMxjJEhsKux4yg67nT63xEGvGuqKTG44X3xXP8SZ69DgAZvJj4uuderY1aqZvB",
  "key37": "P58tYjvfPwUvAJEggGwrUoGMZF7ZYgNFx1kR3nyv2Ac8ygSXLw962GkFGKWRzb4EM7HDSJrFXYaLoUz1E5xrqQd",
  "key38": "3QvipL7vsyNWFgRophsN9jyzysjfz1rvJT6L9anwKU3xW9t2gmhgBir42fe1XZmmjHGg1jBFVb2x2TgjtNGq6C2d",
  "key39": "2Apmm5A4RfZiuwwdrRoHE2yMZDq4tJj5sZCQYzuYPvgCudJCkQuiSv7XLaoujK7HfXbwgZ6wdJFpLDtk17tBqUZt",
  "key40": "49b1uPtyhhPQb3dHshNr5swDVBsxPnJNT9M2YyEat6uoYkehwGc5bc3fAZD5aMn7XyJ91Mr1upEDW6h5fEQ2u9A5",
  "key41": "3NtvuDV6YF7YpAhzGgsbKj4b5K4QJ8smKC3chvtfFBR8XrKSTosnoPWfJgByeBW23saAbvVAt7J39n4xFtcHfnNR"
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
