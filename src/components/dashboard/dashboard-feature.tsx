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
    "4RhF8dmDTtDiPpK76GJCk74bRE8PNmM6jLdMDxNjUhs4pYXRgmKJGQGE3wNc8wTco5BsY2PrccqbNXMqnGaXU4wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XLopMdxjRCBm9scbmtg5VRh2WTrV9DwkWbsd3awooo5X681QFXjEUfHu3Jh1E32TppDSxHgCdT9N55ksYwV1B7G",
  "key1": "3uazwZU9dxSPBhSRMaMAaEtGNHXXHkKLBX8ndGEQ65BTnco5ppHyU6m5deFFWKKmYjVysFdpj6oGXcRhJdnVE9Bu",
  "key2": "34yc3Q8Xi7J8XMtfkEY19R3jnJQTzAyABn2k1eJvHsp5t97hyLxnNwgQiSRKTM7422U8iXr6AeunjFzqU27voNHX",
  "key3": "4aCwNa78eabzXtirZERg4EtaMzq43JG2d8r4SnheGVwsh1f3vnTBQB4KH8ASZ5sCxh3x478jhZuXYdsKBRK6cyvd",
  "key4": "3TkBL2E7ERbof5xtRKXkYrpk2oWo9rQXQ9716R1hnkt7fabYesedEtGFr8hPwvzcvmGxCq4UyxrkADJSiHhrtQaW",
  "key5": "5iKDsNt5eZRjwffQ7UbMRuDYXPXbDhtJLhQUWYqLhcwHW8MJ1oC1c6cmpSbEXogyKRDo4V3notHqgfU1jnE8Do4P",
  "key6": "4pUqVnB5PvsqdAJ7jN6TzdRL1wGJyR7Ga9aSphCk9ngAuBN2GzsNLo1takagbzHss4gzyzkMigtd4RonEdtVZ78t",
  "key7": "nToi5Rw7SqUh4rYwdm8bXuF7dSsKYmxTF84ivt3Ae1hZKhnJsKWpPR3PxbChUxJDSqP1YHUDpL1mpkXAFmsqu1i",
  "key8": "3G8uzK4QuQsjxYAsZu5uSfhq2m3rHEe6mS4LYuTE3yP8NDtRg8x7LJbegpmoMSBLe94pPhfm5Xi6ZUzxp3DNVYvo",
  "key9": "5H5HM4hY74fJKpdDxhQoqxxhV9jXstJopQQAUCgVGqNAoLkwPjxBHZHgFYaddTzbMSDWc7c3yRdU7AyqhaTjkBzN",
  "key10": "5PZU7tKzmBP5zfJ2FZDCUcJ6w76vffFcVNZGVov8j5L2yBZBDcgUkFjRLbmtWXSNJEwB2N2twdmGnnatHFVWL9V",
  "key11": "4u5wBMuirJeYrXBVRfNWG1RD49JEpgWr1KX9fuoNWnSzuKk2JhgHi4kGJeqTmX9gmRuV5Vnb4zX1zkaVJ8L6667n",
  "key12": "2c5Q9nTqnPzju9bRmspVgSYDJBdRp9pxAebNKr6kELHnz8jrJLdtrtpRZEVpTfpEBcfeZd9hbobmjQ6ut6bHEe3J",
  "key13": "2SRxCK2SZvnmeq69sXRaivb7u71MJzmuvT2uKWf3QQdPSQRL2oKzfPnarZUPPwDPdfDYPyBGwfQJwLtQduRNXSuB",
  "key14": "qayLL3dYsJdDt5DUtpkfAyGjPDGKANnRD8fDuUbvT41LkbnYoVav7qiqc36KuL8x9SSBZxaPVoe13JzTqtCYV7X",
  "key15": "2Nnsijs929n5odTtmFx79QU5WPMJmw36PA83PWFg2PAnUvSPknKqU1hJvpSxuzemGU7DMqSR7mCEwA4ukwqnddQQ",
  "key16": "5dDfEqt1H1cjpbdJ6y7DiEKYwrayVNySfgLabqcfRnzzSTDATzHKNPMugUn6dW1rtpN2ymmtH9ERT4rzD6epJiME",
  "key17": "4a2SvmnYW6zWb4u4BiuHYPC3Mq971CCu1QtR228Gr35NV2DXDwC1tYmHpaMxjnW5tMpNypKxwTB6YFxNTqGToQKm",
  "key18": "32CViKSK9rpWokiGD4BQRBtNfPg87pyQV214wTYrydTcuRxoGzZsTJvYFkqhEQcpiduD6jkwgJtetF51x1NR8bto",
  "key19": "2gyuqkCczYdrSMyfK4KLh3NABL25qoW9i9XZaUP7JAvaptxq8LPAB26UShMb6ZEdkqnj176hjV3kzi3Jru3xdpix",
  "key20": "2Ztzfg8q9Nj9BpDxxitVFLdEARXZAKmmFZcsKigDqXMqFrcC5U1p4TKv8YPREr32bPKqBp9ycWquac6w7QWRWAaM",
  "key21": "2KMnAjZTHPKjFqa234SRFQHhy3iLmaP7MAydVNEW32T12urqz9a3N9FVGD98o7q6iDvM31z6cBB6DiavzRuq3UKo",
  "key22": "4HsPaPv5LgvwPrkqhZnbs23vY2epbF6ff9GHcSGFA4xdSo1S7wxnyTkTVej2VGCxcscaq7DctxMGbx53z9AZFf2o",
  "key23": "2TKDhhbTejB3GjDgwyvJsdJkZjmQRcCikcDoQgPmpFXBTE4xyxfyZjfUe5Wv6epKfZ5douRguWnFo3sTvKNaUUWd",
  "key24": "4nbSD1ovvwmG6LSpknK7sY1W8UdywhBwDK3eaazjxGhmnsdVdSGcjpnbYyhiujwYDB999BHtbrqbJMgikgnhye3e",
  "key25": "3MFKBkhiuQSYsEwRRBWFryDHbNyVwGozQLrvmutdooJeetHBaFc4FCrf3PqYpfYDLb3tfXky2umwsZ3cuJsXKeLL",
  "key26": "2zdFDU1beYMuM3zpQvB2X1aGrpkUtgHFXiWYrjw9YXomcfWArXAVwyxuHhdm53uTs7XaZ4TpuZzjHQCLqHFwVSuq",
  "key27": "3aEj3NRmT1R1AM23HqsQBTA6aGYS45Ncmawesb7SpqynCLfeSBp6zkX4fgc4wZR5MPjpgAQFCMd6faULnZA6DhrN",
  "key28": "5W4gkRojdP9LC1fASjKSTscxBuB2djZWUZoUGQgVwaRkLoLU31hFXG4zV4hnB9Nxq3JL67rmBzcGjYXf6HWT6qpB",
  "key29": "5KUux1PsXRDS9WaWu2XTg2i6nVwudeYmgVphH297xZiha8P1zSQjDLuFzSxSNnKME85VJFYDbMN3DujfoBeCphpZ",
  "key30": "3m365VKZ6gbSqVgscUi3o4eLqxs5UcZ2uHqxREtaw6tAcEu6HMGNh5G4JGQMSjMxyYK8aaZUvMkvCsx9MXvwYTom",
  "key31": "4aX9dr4iKpT4M45cQae8VbnTaQrMPPFGJD7aUhUZqJoXtZkenXQaDVFbDZevJX6LMyMxkEUqqeSM5GtVgudh5FoR",
  "key32": "4i5FEModci9bscvvK2m9xqDsSe6TKoDnkKdmjFsDGkjs4y271RDw5hnxhegf18h3YsYFpCkU9SuUrzW73wrW2DUj",
  "key33": "3dBwLDbxQjxbfMJ57kZMCM2JxvRsXZ3pQFMDAGaGPkmZjpFCZAgki58wgDo1AYr4dJ3pFBTEZ8pTdkxp8BfaMtEZ",
  "key34": "kEs9SQg4ZDDXfHPmSLE5NtepM34CvmfNJVyTUttwTruK3RqEERb7saH2tP3dRDXdWGwe1Ug8BsMpuzzFZjJRDH1",
  "key35": "5oXMG9UKHtUWHUgEiGNA7pwfkyneXA6csACsfheet7MDPds4m7gVCLEHDEmvLdDVc8xsRMwunWyAF1vrXTTfDsiQ",
  "key36": "5yKhfSGUsx7pxC2ugSsguerKt9n8D3h8gbu9N364jiRLVwDsRCirUHWGKhB5sZTQQhiKWXJzDvdLRzhFf5C3sjZJ",
  "key37": "3gkeU1rbLeFQBNRoWNRjranDiUoxkZou1aNAHFjgJGnp9KgukoEi16AfbaMbiSdAHzqi7BCSTqJBhZ46H6Qtnoxb",
  "key38": "NnM5EuCx86AtQBcfphhFkZdRxrjvj6P95k4PjCMeP49z1wjiYUCsV1tqCzc91rkYyzu2NkixGndxQVqD8w93L5o",
  "key39": "2dUeg9HyhTNvmT4BZctFAt2gPMdSshbNs1sQojU3Y4eHucdHkwuvK6EVQGdn8NcgYn5Fsbv4jCqC4HGBWK3q6GEu",
  "key40": "5TiCqc8YoAG7oGAXzQLNwdH9ZeZ8otb3zqeZK15FGrC2nF2ucM86AjZ8Y93bh3NhkWQYoB7sMxLAkgTe63paKgcZ",
  "key41": "3kJHbH7prWppwheFqFBUcQ9UELWd5YeHm2jxoFVvUUJS1gBkyZnDow4Ex9Sgmp5BDAo6Fqa7XrdTK9mPXZt1JmQu",
  "key42": "5EakrBFbwACGbw3fCafoWhQW1GeUqy9c9R3JcmTG13puHhUruJMeqd6Nq36m3Rdnnzw6bYK3WC45taAYVashbGhv",
  "key43": "3UKVirPVCYYGihc2uyXw9W233eKzyzdaB17MX1sxzCqBGncjZ9XfaBKypfJqmLQ5wanhLM5piMy9QKZcJQ3wifCL",
  "key44": "2oGkiM2QP4vtfY5AKZV1grmpvxtb1AY96h7DhLZsZvQvNFzxoUfs2nBduRBMdFXBPUezNdMCt6EB1gD3S4BCBATA",
  "key45": "Qp1cA9bMkhuxycvYjyfv777Ze7RpUsA7d8VuS6DiSNgm2tbnY6UoorUqDxxZRUK52XgczaJNBtgFgePE49BNbvW",
  "key46": "5Ey5sbN841f83YBJ6GLer6aC2odBtYNX6BduBKvbRuFpeQkHNG9MpmgJQpk5MxHDRjF2Yy93Q813Ex45Qdsnw7wG",
  "key47": "2UoBjGuS7EzFp7PTzyAkypGoqEL7kmeB6myPaiJLVhWL8qUuDVZEn2bSHq94gUJBKQbDHRQUa1R9DyXsR6tL44T1",
  "key48": "2iajuYLCQjFDZ9My9TVf1fsn21SFkZAbawLLeN1guNeCNyFm29P4WrLa5o5VptCEzpYp8aDEhmRv8TSn4vZgiqsn"
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
