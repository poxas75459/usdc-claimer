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
    "23qWZ9tjJ79HoWb2ec4RvuscoAyZDK9FhoxBGGfyhozp1SqvB8xmm7ve19FA8SP6rPzbssA13ZNCATE7XkX2YX7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4jrHbknK9m7Uc7YDf3SJwijASLGfxC8uVcSE6imV83RJap5dnBhBkE1rgzW5PQKhVdM3LjdCY6U3Xk9us2eXJW",
  "key1": "3VEL7RQm4RSuo4MkiSC8KsL8UuSqQzwWhmHYwpZ413EsPEwf6EDfGPHW7mL5KBkUKTrfZ9CTzHhCd4njmn7GZGE5",
  "key2": "4b9VTEtwh7xkdAx6sLJfjuaDCua3g1dgqkK6ZnwfK9pzz5xytB2aVaYs3QCmZ5kTtmav1ywT4SQ6CwLP7aEWCMPs",
  "key3": "3CM1e4gShGeK5tyWXEWKFETCfd6Rs3BqgX7oG9Febo9PjezKn1taQY7DmXoM3zxNxBTi19K1DbnxBPuHoAYd5ttb",
  "key4": "zadW2E8Bcq9NWZ2XC1xoG2YrFng2bSuxRkixvyHmXNUwExWa3Ewo2bNaQrQRpHPydnCRmGGUBBkoxdjPy7NvvTF",
  "key5": "2Bi7iGEH4DKSRtghYz5htjtqf4QBXQjyffYNez4pK2oq6GHjbgcQZdRJXQQtQq8fdeysDVRZK9nv2ucFhTQ5tsJL",
  "key6": "kNrJ25dC8yc7C3U2wc4napHZ7m4SWpNVzq4iEzkDFdzsszJ8ictkD3QPPFRyR4YEjB3E1jA7kwB7eNrdwcqA114",
  "key7": "5m12LdyJcpZUiRt84jU236biQXUdwhqgQfenkgP2VhhNsirbXFh2QBzvyfmm1o3seBXNbANxoegYJrgiy4HqZMKQ",
  "key8": "QUtgs3wjjksnXr6t4DNZE8h11nG62KUYiWLKSM2TL6MAAyUoRCe5EmSfUwLaFhV6ah971x8aEgiePgHrmZNCWgY",
  "key9": "3H34JbUNiNiGqBra5SKdWQe57BH3orbps8jwRfMfphdKR6U1cs6WqRhi8ka6ZiVZoNNEtZaMz19ukVhL7HwqPqfr",
  "key10": "4Y99Dk8zB8Ex4i8PGCX1tzuo5RrcQSotg1YjFfjHzDEpak4GP1fjsE78EHTjvzyQ6ayLmaRmWVAPugDohqaTrBMY",
  "key11": "29EEkS8vCc4NDdm6XYGzWUag7Y47fJ3SfEGjYs3nzNpGb2nB2jTKrCSKPqrh3bcn8y6Fq1K6au6d5wu3KvWzpz2k",
  "key12": "2Uz9EKvWz6gSCMpeqqn8gdJrTJsDnEMnohQgCVTFyjFCTCF1cHYhkWbFDGgD7rUiF51boRFfq2n1GgVmabMtgyEE",
  "key13": "56kCDs6SVPrM4sfXPZCuN4wzSfT7AyUDDkCmVSrWXCqHxTfTtS9UJmLTRg9oxNho1iJaYH1x5RAiiBNiFYXDe9jk",
  "key14": "kdoh5J4V8z6SpqnyFe8Bt6rPQzvfxVTq9EqhqZtJP8Q5TnjJwtUNLqqpYNFqmAqVvYfU1YUL6iCp9jRcrnHGeoS",
  "key15": "5HZY2L9YRpxBqDcVea3KoMWgruEKKCKeo2ZwdFA3AcGL6VdDZjcbSmPvA6KT62tt2xGEYkYsGuUVXRSthabAgnmQ",
  "key16": "2Qk3rALfaV3S33mMAaxRHZC74Eyd7WPosAfbgRJYtyE4yc3MT8ndqaPaBJypnv1Rik4Pav1pJXgbvm6SPEqQpiW9",
  "key17": "3nGXu8arHDBR7HaDezbL4tA2BoF7htxGFx8mapfx4m8tBCf8Qku5DSVKorXX1tNxtPCyyXLPMf1GsM6Rd3o8B8rs",
  "key18": "3JdjqUhPsEGEU9ELQ4sKe1jmsxBSFDFfZ47pT3awEkkAEnhDKRBbVpW85FCdj55KzfGZCEJnGUXA7aTNXntPWYXE",
  "key19": "5ce2q17x57fZgsSpcad3f7uGLXx7MfJFgAhzBrTSJFuaE1hoPnpjgaVBvxATtVRKALkkyMbXcpvaaybF4UH8JzKx",
  "key20": "U3ZW7saGqbTDNffwjFu6RWJKraWkJj9m6bDGXTTd62qHPtnic9YtPqCSEGsSUyF9muYw2jRNm1crYQpLNyNxoU6",
  "key21": "3n4x14h1p5dnjBmchnByFxDzcyLV35Lppn6RRhnD5c5HG7vQDbRcHGyrxDPxh4KMZXAM8zPqobsodshoY6n4d7VE",
  "key22": "31SGWDMmMPdiPqkGQncSCgj3zkMRb4jsuETWuwmH7Y3iwxSRpsmXx376rNkBkxpZspvAXBayp7yRtR9Gu9XyfgiG",
  "key23": "2Q8mcoD1FM7AnULcroah4C8wTfFnZ3X7gFK5JkyWts2tJke4fN447oVymPoHjmEBvNV6PBu1vJ1fmevKYc6r7QbQ",
  "key24": "4YqGA8GQ9nYX4vx8NRjJXabc9Lrx73Y3cAFsrTQ7UwQqa9GM1TwtSesPboXxWk6jAvPXGD8G1Nrw5pQkeNHH9RXU",
  "key25": "45LaA7N6sBYVjees1tv5jR1TfMs45k6VYePkyHVktaNapovcJniJ2fcpNWWyN7rKJCpPe3FHR2YjmBkkxL7SXTDW",
  "key26": "4CjCUb27nP86pfmVB1wxYZxDb5UzV9hmvPT4Bm7u9nCTHiVa8XnVmyhasF7Tm1BUDkHuvxprndJfG2zQL6pSn2hX",
  "key27": "5YC2EaijA4LbvyNTwyrg2WmjjEoWBRKZg8aacv1tqzYYS5F4H9ep1FH7xnvtbHFR1qA4dsE9Snufa7Y5MvLTyK68",
  "key28": "62SkxnfC19iTBKYTnmXT564JCXK4tTfSY4WRPToZPHzFhqpj8euxLBSx1DPzjsA7joH2RSMSGs6SsP9ZrKZKEPMY",
  "key29": "64gGebWwYmxyJbx2Jq6xsrdWGqEHwJnduznqGQ4mzruGMLjrrxZfWtD3uoFBgSbMein1wQJHPedmRkPvjjKj7czL",
  "key30": "mmSembiuU7AfQ92G9VCT8LoeA7Cpz1HeEP1y19CrurLoMVFtZnuLBgc5PayAwA1L2Ygi2xyxkiRVuSQJqBMVf1j",
  "key31": "2MULHknYP4m8mzTW43eTKQiAUUkcruCFB2SdmH62WvMFYhN8EfofDgivXsJeD9pjhkNTLh83y8QMkV1fyn6XvTED",
  "key32": "23SxCwRZ2ohL4VbNdcwFpbY3CM75qsGkJdejoCg3gRa11fWaCNKCGaxXbcjWvSthTsiJAGt6RYcmFY1t1t1XH8py",
  "key33": "2pBohQYe9oeDwECYexzcHCu1ydVFQkz2PTknNy4Y1cYUWdbeWLDeLNUsyLQAeJeZyfAoPiGzr9SdEfNubmfCssXP",
  "key34": "3u8vfaw1vxDmJpx1JDxtRmDcVfwTtAhbxA29sNVgQ1fEtN9ENzXm1ePFBG4jq95TFUgfm4YEV1kYXkCVf9MYYwEk",
  "key35": "2L71qWgmJc77UjhiCijPwEPFAk3E899H89DdnqZWWpyjRD7cjfhnxmaS7d1H7iPvunaFrAkfBejN2Jk57Xpv9hyv",
  "key36": "4RSRKbT8oqcZnw7PqJ5tXeZpjTJriENkuyVVWsJQ3xoRb1iKHkGqG2h6Z276AcJkxMMLVs9j6Z6rxXca68v4S1Zt",
  "key37": "3xzQrRZimMtjLjeot8kKN22KheNMGGJLFKpXRsaDF9YtfNBPKvtzN1rzkBihybhjpjSCxGtvBxcgVwUVGQK73VQc"
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
