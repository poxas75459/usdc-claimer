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
    "5B8hsAGXd9umRbsg8kZvzQLqh4ZkPARJnCPCcR3b3udUM9PydcR6mLv3HPqVdzdz2NMD12grtu6Fb2E8S1Edzr6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfjsSCKLhqGaTw6eJTJeYphQxCDE8KmX4kRUgCjKVLxRrv9c2NLZGhhqas86UH3aShavmCfXAqBs9HBPLw1LsJx",
  "key1": "4YEm64kk7cRawxQcDYn2SD9fiL5yW3fViXHDsA4dJ1pr4pJicvmUu8VGGXP4dt5m5kN3SJVQYTybZDuVpde6kYi4",
  "key2": "3GjjqkLu1HhnbM6LG2NfurAdDCAv3cyUjF96anZTreyBRd3DfYLopMXx91AUBWc2pTeDDJ7y9WyGcQSSM8PZWNjX",
  "key3": "idiAozYZnELb2nr7N3YXqdfwuRv6MA2Lq5tNdLjp6feQJ932q2iDGnPCWQk3B3uAF1Qu6S7mAeyVG7vk8vQ1B9D",
  "key4": "4WpYYWXWHNjeT9VJv5Rx52EYfEL9D2jkFht9GaNaxSEABaSfu6t4QaAyqEtP2rF8gbJdhdJB9iLe44w7UEwj1J4V",
  "key5": "5vj6LaJwH9tAc4vmo8b8pY6KXi8rjRT28daJQg6TubvmeGdgZizoJhz5RmejQq38tAePANJr2fi3KwPNGaxM3g8R",
  "key6": "2sgE1Yzr2vWpRiY6NGa396eN16ufCV8FFEFfKr77qJTkE5gSsnazNs1HQmkJgkfZ1E2bK18qzdJHpQS8BmDfQQRt",
  "key7": "2GSkWQZY6pCHvbN3nLSN3HLAdPgykJEmU4PW3oCiyWDD26ggFvzGwzTw4HM4dGKB1Fxi84jQMdN1V9mdY4hcqnTE",
  "key8": "3B8LZuR9Dt8ty4TRjhxFMnu1Ur7jGNvKez2TqQrZw2ZYtPDr9zUoiVj8bMrUc149wzHZeKhMGDpyoNrVw6EvDaJk",
  "key9": "5HxZsALd4abxm4cibwZZr67dVAvrg7rx5yiJD5uj9jJ5Euof5bY9SxF86cXZbHbtxXuWuamJTtYC18sedToEdgJm",
  "key10": "5k65Cjx8ng8vCqe21QHAgw75tePswCgyFTGYcH8F2WdgAJXLC6buKxsJ9WhoLC6C6GVY14eCWwJtCpFomhzpyBWP",
  "key11": "B7eLdJwNkScszogSpPTEDiqC1hd98DrHRy6pi1Yd6BUCCmSp5NTk9etxFV4LsXxydwMDDYwxGEmSP8Ld4LSZmnp",
  "key12": "91umyXwzCF8VitVywY212V59khSsWwbDx9GaZGsq7ziKeZvBKyvNEn2kpNpMqZ1EZuJuiUM7PG9LkTWnE6woY4Q",
  "key13": "61HHkEzmsG9GLyihoCH6tjAtfWa5vBHZiFGQUvKMKWXe6EWriongHiJdwp2Rg3q4VWfkuKB9B9RZR767VjNmpZMq",
  "key14": "kmnSkFvLi5fsdThCnpGy5SLfyMESRQPSgKpdLUgfs8CAgtSroZrbEZZNSZ83bAGWv5CVBLXUTQWbFkfx27xT7WR",
  "key15": "4wS6MkmC8zVnipfecYrYjiXhsGHVgVhtGpRutcsp8Sm55JRBFzgzfxbsC9Zm5f6gSWpQfM4HyF7kf3tZSuMqEnuV",
  "key16": "2kJy2h89ahbRSNZiDZzPbD4mjd1z121Fgjp3iZiWCTDwXYo9DEprPJFzMP7FEKJGhJyLu4zZkdpQvTAH3CezjzY5",
  "key17": "5Qxn2nTadNoprjohQMAjFfEwsAQhYSUY87ri9ohRLk6Dq29oG9d3VpdcNNdUPkfKkVvjHXW2pTq4F3un5u1VNdjk",
  "key18": "5CwkzrwX9Z3toMhAD6K1E47M3gv4ETVNkfg37v2m5aWJRB1pw4y4fAvjrQAXrGZAiVu6W8FhA7RtLiukWvSseMax",
  "key19": "NHa61XgW4CUhaZJf2fHgnB43dvoS9wYi62TmRm8ezuNuqU9ZaxkwwrdmbvSVPhLxmToJB5f4J8aQjmr2dPzaQpH",
  "key20": "3oy1U8RjsumPX2kq9JJ7cJAdQ8h2RMFwv7v33bh6FZQrv5tBPgHnFY8dKpAdjPDHW44rv2Fu67etQGGEwY2MpHww",
  "key21": "2RsTqSBhcVxjBvoMcXgLkCvMj6Wtj6LZbBPDV5fw9nhgb59qbvQSUZ2WTd4Uq2HYZ3bL8VBJfeMpzcwcxRKJNrMz",
  "key22": "4La6kJSNKJLbSB6Mtukpxt24VN47qrbCs5UzSBQ3GjDPr1itAG4uA6BnDMCosdhbVwbiQqFgSCekJzbepHTso55a",
  "key23": "5yJPZhFmYH7PeMF7BUMuHPsar2o9NzU6xgmRckutAB3UahXjcgbLMhxC4kKvqQAshehgPFgKxWfza3DVxeQ6XZi1",
  "key24": "3TzCfWjJc8wK7ezXN3Pu9UtPMg5z7PALf5AX8iNeYH5MN9Pc59FFpTJG93RUnSbH78iUpe5v87SS4i58oJewoWL1",
  "key25": "3pQhdYQPU9g4ZFX1EFM8oVX3Phu5s8Cf7PfR3PqTscS8fsrJGztzYqCV6Ju36rkgWMEJTBZ4udiAQntMyVmAjGXo",
  "key26": "4WBZtpwpnVvvejyjNLDc3944qbmq6vsfYgNwK4daRh3pUYUrWrkVPGuLik7PfLMmV5iEUAtbd36gS3rGBn4epkAD",
  "key27": "4QDvyDLXzY18VgLDYb9eZir1drKNDLo61ebcHW5bt8rsLmpR9ZzV9XYwdS55wnmk5e4C2KuHJEKagkC83U8BY3Sp",
  "key28": "2Q21ZpVxe4j9GeQidPhiM7WG8sLULpAJcKM1j2V9iHqGHwivf8ema2PaonFYSeH3XCnZzUiw1BUfsFyLZK9hhEie",
  "key29": "XZq7jaeoLqaB92JL5TrGZmeH6zBm1AP43NA788N9JfTd2ZzkUkCkFoc57iXsnV55K3P5T375E2YuvRMaT1yReAF",
  "key30": "3jhtHJicShPhdU5gqtsKnyfqb8YriLknnxpQZ6rgTjx6Y9zqziHGJ8Ag8VfHaR2ggds2UbJkr23hRsdR5xPhYEuP",
  "key31": "5guY2JkLtBsrVEYXwKvAoDmxjnb7pNjjimbdQBdTt92jF9MKyVCA2fz1zmnRpRk2oUu52mecLTRRY48dkitKW27B",
  "key32": "bwPiFc48Qpu5vTpHHdwUKvubLLiqTUrJFEX15vwP1o8LiGCT7FX53CPkqZzYtZ9UjVQ3R5YFHxt4sf73okqZ9V8",
  "key33": "4YjSYjgk131yFQTpXX7fKT14EDB68B3Y1a3qoLNtRgojCvTSax67eQM3neAUf5Y1kQtGLfW7ZeMqmNkzGC8gRjpt",
  "key34": "4WNogGX3KDL29jreGUXNiXQMFRgSPb2q1KSpAQ3exHzaSHw4eFzwsRoPB9FW6g7UKrnzMdC9Fr2jyzpBbosJwZ8x",
  "key35": "61fbfQrAbE4uCZhvCqASbNMbsagLJaE1LfdrkP9g1KfX77zzzdNxnmQWSDgf4wErcrh87KJwfc2dz9NR4LRQRDZE",
  "key36": "49HCeR8646rbh1RXzT1KvQ6BxLy9VK58d4KQcgd5NdwNmGYc8uz3gzJAU1TWcsetAQnfp18urtU9UH1723HroPD9",
  "key37": "4bnC7dBQDfkTzP47D1FN4dJ3FGAPXRRitbrzCCawevLocZCX7mC8K2KhXE7WSViy7dTzxgL8bMwGX6YzyuNSgR94",
  "key38": "2sv25ehXiPwchaHXDHApPLKdnoujmai6zcKHmkEKZxhAiqjDjTZCE6RhZikYR5bHB2BxcJv9mqHd3YdLqVr5dKqe",
  "key39": "2UrNnyagP7nn8AQXqAfZUcM3LeEUznadKz7xSdd3z2ucie3pNQoXb34zu44XqdBPCfZYDXDravTcMPJRsZhehnz1",
  "key40": "3Mt1G7AcjprnQ94fXAFgh4GYYUxiZNXEbi33gWuvsH3BZ4b1HwrEzd6GL75MGrsE8xFejgcHxmRUB1xJkXd9Xxcy",
  "key41": "2TDnUDxKEXRgPRmpNM7WLSPq7mooZ3AjbsDTXsVktFCd9PSSjV7Jao9czKqZ2uVbQYBpcZ8zNEpecKRtRQr19E7T",
  "key42": "5pFFTC6ACUZKM9NoF8iAzx9ukZ3KmqF7XwiUYHgYpDKunGYurC8rxLhicje1jSY294yJQpXcorkYym3bcrcfqXT2",
  "key43": "4ahVfUBRphvHP3ABJMAyqr6w1YwXNpBMQg8SG6n2S1VZD9KYs2k6uQiEdm3Pap23vE7VkqCGbEHH6mXMfGDRcVVD",
  "key44": "2vEczgbe1AbCpyM9mVKuySuZbvR6UxFBNKXhppjjEh1s4E3CjefoV3pSAa6Kkd5v9hWFScTSKbNVBzgemrcbHUU7",
  "key45": "41vSBWBTAVq3ryLbtsWxjgyqS8nFBBg5DE4qwH3utK1syaphECzfge1HWG3VvrvUA38d2cKumioDr7ftoz2CHLWd",
  "key46": "4r7G59zmTpRF9hYF6w8R4T85SeQZp3XVthuXPw6VVfzfAcgNDkJxp2BNDETfVgYc3ndZT6PHA8bCoVyYYKkgEUn8",
  "key47": "gVQDPh2sKQdAhDPbhZpmPkubY93MFUo2mUys7A6stw5NsMV8V6seegWEaxeHt9V85mG4csFn1JaefaMtemkQLh4",
  "key48": "58YYDhgrSapxKVQHA1L7SjKBuWCJtUPojkF2yMjGUNUM6K1C7xbYDURPY2PiiduqJmW6U2sC79YNBDGknHi1vbBQ",
  "key49": "3LWjs1BWBnaf6jUQ6G9tcBePprt1ZNJLPevrPVnDKvAtS6sNYLJAEYhu1uYVxcxyQFUVCPKxw9by2sN3khDZZ2qS"
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
