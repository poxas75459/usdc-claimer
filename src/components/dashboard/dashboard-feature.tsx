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
    "62NqmHpb8KwTbHP9QDWUA6kwnSuycgKAp8H2oUrSzkMFyRB9jisk84RAFa7vHbeEfz6nnUsy9k2yfkGqPTtDQETM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdJebvCvg7tRqBWKxfQmqtAmCxXWC4W1QspyFiiSP3L3RofUpCAtGYxDqRucA7q819PxTCbR5tvwWR6NGoWHMS8",
  "key1": "3Wb9TSEbV8vY3i9XAm3MxWvV1ocLBPz3SKyK7st9xCdHZX2D9W5YuM3tDXUsGbVTjzPQxh3AqnkgNqdYeRTENNNq",
  "key2": "4eo9ytQMk4XXxMeVs4mWdpiv2yEGLG4eaRCerW2kYA7HPVovidbYoTC9txSemf8yPk2mf95VEcowGgXH8dvjj4ne",
  "key3": "5uBbnSGE1iMyGBskRekXYpEKikE54HHamk6AJAZzvXfA5wovYLYqurDZB7jAWR5Qus2Rr6SGPjsLM1gzMDi31rJZ",
  "key4": "2smsewHdJ5L8TFjXqqA8BLnttwDATrWJhTJMUGXQEuL6RmQanEAiFrqCMxjxw5A4zzb6ZgsAgBWNiFnpRL4vskQf",
  "key5": "4C5CAyXkXC2UAafDNShctBSzqegvUNyNFPgP8dckjYfzzFDUuBb4spZXXhKEheMNM9mEvaRnn1jSpaXNi8ZudLqW",
  "key6": "22wdD1Q3zdcdH8wjVT9qcdmLPeHrS6z6PLxXV81UCdg3FPbidWmhgfs9sY4fAzAGEN4AEd7KfiCzX8rY1W7M84dH",
  "key7": "3gLjdfRZvwEDM1zfkajJajyHgBTMsnS9Z9HfDGgqcorhGQobuHPGLz2oKGQt8R4odX9JT2gZBhoQDvcPE1CqjND7",
  "key8": "4aL7z9tv8s6bd47kmbHt3CVc1jqWCsHUgq39hVgg4BjUzso2xT8A29xBCCrvsP7491FJShCDERHTHFceBQVVBLZQ",
  "key9": "4eu1zyQdqPVjvYpU66aTWGJLtfAYoGgQtLyPg8kvVFsYEAeiFYcmzZk1fjvNx8F9c2rmbQih9ivx3mnFqGjGxDcx",
  "key10": "4ddMmnkYu9aHGUFfeSR6aHxYxSZtYYynZbTce76E7p4aHH7Cm2RCXfM24HkzkS6oNcGKWun44Uz1Xn6snSU1ftUH",
  "key11": "f8DJJWzXSt3R53WAiqKyKc73BfxkzY7U2i23TaNWk8gZL7miQsymhZCbuRL3rLbcGP2PYLtQ1vvapENWyaud3tF",
  "key12": "5TADQVZyeBCzxoLLkhDNE4FPLmTQWjnsvG4RSkUEBo6ReSfNadaMGNEKJJTzgFTsg1ooFaekr5eXcCpq51uVH8Lo",
  "key13": "3BwJhcNKSGRPx2BvpoZ2JFMvgtHREMbr8uVy5n5vmEjNTgPhYTMen8tBcAsYuzD9EKsdaTQg1pXKaUTMTjWpoBQN",
  "key14": "2XmikHAwDuzmmgkXiW9aHuhkf8Qvkit7ackug6Mep1fewi1grrHTHJ6H2Mb7Gzo7t79fgJeKoFjRS4Raf9zvjF9n",
  "key15": "3paGgpn233uBUYSqtreofV25ER8Bv2wpUgaV7FrjBcNJP9nnBmnZcfwyjMdWywFKRpgkSmHUH9FJXhYUv693JghQ",
  "key16": "2e282ZxFWKWJrKxgBUcL56p9Uywrmyxa1tseZx7fRZvKEKhCcSLhQqvteUMsbZXADWBD5AQj75ryciXbzDzBNY2H",
  "key17": "3ZY5zSvQUgCKc8jnokuukQE28LjE9wNps1wbFQZistVHvn8eSzvTPCuWrPDoJ5LKUJtAFPMhBaC5z9UUeneHM5Yp",
  "key18": "3JzSFenBZEjwQRnKvWi89zLSG66nGS5judcyGbiFZ21Hkxi9LWdxrLYuXpyJGBDMTqZUVBwWE53juymE7zNnMjTc",
  "key19": "2gUDNRXdihMZi9rUmamg24zDxoiurvQ2z6s4xVZVkR6rZexd3X3mzTc73WG1eT5c7BiaZijCHqjceT8BeLzB8Pt9",
  "key20": "66y61oGvkAoiu6onrDkZJM3GcbMVzwCnikvctrAhmygCKyvHh2rK5gxLfZezcQwStyvj7AAvDvPMGM8DcbePdpoJ",
  "key21": "32TbnwCYmW5w5jXyNZGekdBUmfrHDW8m7rAtZ5DJDPGKi49oJr713GPFf9QjHURgPmhHTbSvsfbHJv7XTqvZp3g8",
  "key22": "5bXQLuRPM5xAzUxss8Ve7ANy568PhdkgHNGq4HvFxztweYpEtXpbrTwYMt9q4kTj6j2t6W2BNxm5ghguRW57GcjC",
  "key23": "2MYQKMGbLcZEs9C5kTD1QMMSoAyp6u26gDRvQR65gVDqtvPFAmnb9PH9yXYZfZz4wgsk1nTzLxGY22wn7hADrq2Y",
  "key24": "5tLMLrtbKAFKPGVbPADEDPx9iPpWzcnt3EHtgW94cwFg9qSY6eJ3JWXe4Nz9Xcyfmi2KBU8Emy7q88aNaVKHyMwG",
  "key25": "4miX8kfFuJFQCnHjhjwkTc73u3hd9wDtTMXCY1FW6hrmiFNML5v5gTdZTVrSvq59nA8Pf8ddgZhoh5vrBzLHBMXN",
  "key26": "2qdqFdCrJiV7ZDDjgqkUTJYgWYC4yiCtGij56C8SuGz9hyJbWJ3D6k5xdPQHKB3NM2CMwtPgxtRSFGmGLcBe2Bij",
  "key27": "JL2JVpitZSgKrRs1Pks4WQJ7gNk8Rdbe3iXqJX6icpkC3N2cpCvd76o18fgNECQbGThp8vGrtbjsi7rfvfLaLLY",
  "key28": "5D7p2pDVhaUwivLvQsGUZ1cUEEyUAeDsMT39m9zaa3ywmtKPVonjmtWMtiX9GssuvCHXdydV1wWY4HwBycVN1r8R",
  "key29": "3j8ean2hJo24iNL9WsPaQoX4hPQgq4eAbTnTwFRQ8fNptR1rSmrxKRVxVrWtcwKpR5RAHjUdauBKwpFdXqT5ymC9",
  "key30": "3ihxv77TLErhfWZHuv2nRTnFKpz4kydpz7kprrBDq6VAzzVGUhPRECGSncvWC17NgRZUF7NanAVCXMbn6jL57WwD",
  "key31": "3oWmaH1CsuTYxSnVG9sUrQCHUkE4gUKaByPeyzbZGG1MFNFoTCJvTWYnJ4sXApPR8x2dybHE1ovgxMSmxywLRW3g",
  "key32": "2Ak3dKSYts3R4SjzRVJ743RZr9B2A3TLEvVA9Kq6XWKqN7q7ghPaWYyCeBUHBxhXY1RrrbzvJLF7zNSjCVaj1w5U",
  "key33": "5fAbuPVQoGcgKxSeYzFLnUEJiR1vjDrLcFcRhjELzME9wdMbmv1Bn7FQ1aSTK2eoCLwkxamaPodyujnepxKq6Tma",
  "key34": "5nNyKTZFmnJTiqsxrPjk5K2S3GaUHr87vL4oXPjaBbpqjnab14vECT5usej3QqT5WWzyPH1xzb7DSLrrwPimf589",
  "key35": "5AFw1qswWqgd7FxBjvsTMuGfKD933QUusWwSqQ7UZKcBfnUCPpE7wnZLpnKTD1wtQAJEeXa3GkE129gByePdGGgs",
  "key36": "2V9GKtaEtzNzA9mEPkpq6cuuzEDEXKAyRgoBD1wvAsn95P1UihRSueifSXxvPBBLF9LjBhsN5nRXfa7gti7EUDMb",
  "key37": "2A3h9neo5mypyMdP4npfgKNcCn3XoaKJ3Dw9Sra25nifd7BVBamJTDsteacny59F4oZE8RiV5PnYsHY8PwnhpfRA",
  "key38": "oSSJbrWMsXUiaauvXFrotjyLu3x5aMkzRFduJyKgzjjASgbLDKQ4SFGUbgyRttaKyFkaZFC8uqBjHefRTWN2nTN",
  "key39": "JTJCuWXuLcHm5QNjHsta1eEgVchGqf4UG6C8jdXVbBwB6x8bvkroZZtQkpBNjLzZtbd6YkyC3Lb89u3tRMUQZ1J",
  "key40": "38SCLUgPpy5XYPNc5tAL8KuZkuJ4LN5iwyVA2mAvScigVCH3pYekbMt7hoDQwJhS7HTPedvqZhE3mkkMferx1cKB",
  "key41": "3kXXU5fo5ravQrxqHY2969QFM7hv6fwwX7B6jc4nCVFS5ezhy5vm4iMrDvpY5u3svYWQRGS7iiiQAwquhBi5gwcW",
  "key42": "5VpyCjQDrwMfGzo9gMA6zh5EH7d67KNePrAbotMd8AMJvCzeP7nwpcKdLbCbSdLaa8kbSiUFYK3UPhn36h57r4KF",
  "key43": "4vrszTaVUWGV97D5ZLF9aLbSda91oEL2aCCKPCRj69fVDPQ1FRTt34NFnfmAVmzDEKjhYDc9xaGbNkeVTB9ArarQ",
  "key44": "UK8ptunTGrKB774LAMyFLbEWetzrp7Aaax5SExfYmrUtYNesoJLyhpd3s5dZ3ksVzvSgGc44b4sdEfkN6hW7VTg"
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
