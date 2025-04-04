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
    "3cjTYvHmi3Gq1ge7CGS3gkQ43YMbqSdYZaLKVDuYWc93WqN8ouhyxSDaf4p37URntaXNDRowSJQRqu276zpxRfzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W67u1uV63ofyuKZhGxZdZJFPAfQuZdMdKfVzMV9JJt54DvDVuSUvM7of5UBTNNdmf6fuog9dxWVzvZ7KturtyWn",
  "key1": "43o71YfiwVnXN6RuS151XnSXxY3xVSyXmzyCEFqd6YdDyCqfEE3RkhxbSyQbTNQ2n33foMLAhCjivz3vBJdy5fE5",
  "key2": "2Em2iJkaPaBuH7MDwHqqy2irDV5jMC9uCJ2vKsHvSmQaoXHqdS3BiZeNX7TKwYmWCVvVgRg4veYFyBpg8BNvJm3n",
  "key3": "3dRqs5JzgkLLz5aA5wtEZsKtMj5rZ4ArJneQP5AdK4BpA2rzo2vqtv1b3Ehiuz5oWrkHdaPbNBWLHS5V2MoGPJd9",
  "key4": "5rL7K55gKvPKjSoQ4YnAm4cSNgf8qtUtWxLc1Vnn5f4YaQzsb2W3JwLgSJPjS6STYAQw45h8JMwV3aR3Mno3uQD3",
  "key5": "64G5kZr1zACsoeSC7Cz84tdny4tT6u96t8Aru5EeqgVkF9PzFMTa2dJsSPPm1xEpb4hkFAjWqLgpZwhSYBzhRsmV",
  "key6": "5GUzsNQ1Xm3wo7EP2B1p7gmLM1XLHGwtewGrciXmcizogKPvuw9NzfV426EJNVUBrZeARYZqA2aNkstp4uBefkhn",
  "key7": "39pYa6Ff45bkizinL2qkq5tbwQHSYX6Z9NYvkCsDSrtLpWva2A2KJDKVhJ3kakrtM4yDRK15QGe7KZ8H11t5E98q",
  "key8": "JMwszyfxdsZUKELsoS1ezeaX1oCY8EzDHX3nCMrzWv6xLH355CBn7WQJDXFiJ9bNSNNhQZamY4Sksir1T4aq5iZ",
  "key9": "5gFWxHCPQGajDgSMwsh84NDHCXMt7TiBjuy7VjrtYGHw16xTpKJrhULQGAHvNbmH5Vj6pnENb7jDWKxG1Ydg2EcK",
  "key10": "48xFwUS6voeK542ty7dsx2WVAJDSRvzdPZ7PzayrF9wFi7dP8Cui9rYs4RefJ83nvDWRhZ39zgPjgrWV98FCqLHF",
  "key11": "6WLXQk6YySRkYVACmGoTUAfh8rc117aPMr12AkZ72oqjbS5mmwKxCPqj7t1bkHAaxQGKXSkcpY6aySg8BMnGZhV",
  "key12": "sVX883fqfS91SMdKJH9ydAjvsrig9rHgUmHBbuLnoiCQbRBrn6hwZH9gJWj1RvHT1EaG4X3s5urgaqTjTbw2n5b",
  "key13": "5yCTGVXfnUedwFcHYX24HkDJWZD9wyQhVSeYmec5pt4eaKWjDZDY5wTKHBDcQpcn8RsCLpmL9asmWkJbgkk7q9VP",
  "key14": "2K5ACPXDP5LchmDnDYNv3gEtznmDVLePoxFdYSp3SY8B1bYpJE9V9ecGNEigxVeotxMJ25wSifBfBfTvCsfiJxFC",
  "key15": "36evC1aNN7rcCxYffpjEU5w3LMhDQ3ooBXDiX9EvYVsspgew5gtorrK3QpQKSWhaZDwFw6Y4R7SjsU6dVSjMzpme",
  "key16": "2MoQ1Xm9ZzkJTU9diWvjNPeG1QTEZLDLCcHCLKv2HpvNEKSmV1dt4q2XVJiUN5ztabTgM29MceTVLPAqnKnDMqg4",
  "key17": "4dUC5c114nKc2wJNV8fHZWgB2rxdXPLKCNzokc6ypamfvGUvwzHJkHvCtuQn5TBnA85R89KHJsEiNxEisaGvA4M2",
  "key18": "3zYQRnsvGcPK4QbFUkphqD5b76swT4vRhzDz9mugMUHH8KKqofSJ7QSqhpnkeLAkdnARSHhWABW5Kso2SLAaYYor",
  "key19": "3xjJLEeGMu3NiEWT2NGXGheWBnDton693frT4aCbCXm2KHVCJAhs8jEF6Tx9adBYJtPasEujq5iQ5rnebqpkFmU4",
  "key20": "624CXxdBXZc8qU3wu5hUfZmd8gmfTpT1Yq3KCxmQS7VX2ki7iJV2u4jLgmYFGgmcgzM2q8M9L7vqsA548skYnyx8",
  "key21": "TvvUBkBwqK5p3BgddvixRx1SCquR5EWkZfhuw16FaoRbJ1vXiuFbuqWeH3zqYXaqwEJ3UfQj8ramHy6VkuUiKYi",
  "key22": "j527tR2KMwhm9c6WUECDhodrumzwY84keZXWdqk3mtpCzb3XdEcR6vgjH8uFNifJsJcu6cy4uvjQW1GbFtQpsEc",
  "key23": "AqhFc9q9G7t3pSMBsxuMvjCPu9g7B1XcktnmxtpHbYD2nqqPeL4kDHiCN9RC7KZ6PdmJq7s6UrYWiswsAXmn7RN",
  "key24": "2nKaw9RYfaohz77gZbPJNLDVMukJegnvAST5XeQLouKZZQQmwESxqJawz7NBueYnMsRR86qvdwqZAXCjHhMCKrM6",
  "key25": "sWi1ufREBW3AFN8rm7qvyi3cL9h8YZiQUENUWnfLH2AM6brgqoXvXunTJ3k5eQtrvrrHPHVKij74yyDm9JZeTzy",
  "key26": "4Nj4e5eJbbu1pF2ZQbNMSD6MmL5ENeMMJK7WzvbiCshuVzfKGSNdNj2akqkHr8hYYtMCRmZc5EJuGmdArHCMUXtJ",
  "key27": "34sKrQhvwnBcpME9UbMyZgsnyzXGvEkjDiXmAABck4De3YvXzg6GLdvAJaNcd2kV6msnPNte6haLdbckn2hABK64",
  "key28": "5m7Y53VEFYVHCpep82SrdnoHjFF8WZmujM4CfHgixd5V3byHLTTMsNwdtuUNMjFofQr9gPae6VPdfDF498nNDUsC",
  "key29": "5fZxZjtVGw8GmNS7Svsyyh7AAQZW1AePE3F1WXyHCMiYFJfGrpdUrPSV83hUzAj4DMeVG4eb9yqJrwT7W2fT6w1h",
  "key30": "3DwhkBAqeX8sznWkGmx9ZmQsQg3116nZLEPfBUVFmetB4R6nReVXnpB1ARc7UzmNY2uzCzpkzSSmePfpmVaaR5eR",
  "key31": "AjmmdDbxd7GqAgRe453EwFRWqwJTKh4cugscXMkTmFkEcBy9CDusJvtoLwu2peLGexjjAzYugWoSiTv1B9dhYe7",
  "key32": "2Ygnd87GGCvvbFLnVwY96GsLiEJz15Ms9aihFiWZiyxzXX9hibhfHuTeiLH1T7EXhtk1MpYtBZkhcPb2qmAgjuSy",
  "key33": "3vStbnF3j6xHEKpCpJapyB14vfyixbxxBH8JiktcpFJh7FFGLufb4ENAgVUjfs5efe1wwuFKQSDWn8QsQnC58ekH",
  "key34": "3TTDNq5X7ELshs8QsqDD6JWJSUQLc7hDWwYiLoqXgJ9WcMmJBtS8gAwbQb1zRjiPXfMWTzu8HEW1svzNZrHYE2bR",
  "key35": "64QEpTv75SwN4JNh6Ws43epsD7EdXVnwc3KcRV7YpUn5t6MbrBVi5SamV7qBCVLmHeR445a2jDAABmDugPsnEvMF",
  "key36": "3smsEpdBFzMuzkPjQpYSBYaQNnz4A8nGNtZT5shcTKnC196sKWtLbQiN5TwPvDQUgdcKc268SfHfjs62ABcGeBmJ",
  "key37": "keUDQxqdT7uLKuP5w8Xv7LFzoWkSWE541BuXXXSHJ5VZvvk19G29qoMkwDbKmRSAdAvWh7g76qB3W2Fqzj2XDDc",
  "key38": "4wHKJYEDYbinRJRp1UkTipSk2dGoWvDmgZq4T5GrFsbxt9RmMaf7XUsiJwzYnnrrrUb1uuShHHqEcdA3XfDpxrdp",
  "key39": "4qdG51N6juohyKfmcm4hmQUk8i3q4Fu4pak3563b3cmXpEmAa2dvMrA2L9DJdtyDpuxd2h3116wdQrA1r82V3zSP",
  "key40": "3RMKQwZogJPU1yG1aq6915WAHciUQKD4NqtjKUfM7Zq8gwj9SuSwHrxpEbPHQqgZza55KeeTqsfo8VB2niokWQhb",
  "key41": "L88Q76QBNtusH8sSkL7iHT7dsZaujutPZF7gyGofpW1dJgWenh42xAFomMJJG8kiVvNaEVhTgrsgyNn3FEqJP2G",
  "key42": "2f7YPcsH5GGnMGyp6GPyv8bTQ7P1imsWy1jk7JXNAS8yJYxrQBdAuNpqiKVXmoTnu92jZZFLhzAuK5W5W1gVRBP2",
  "key43": "2pdjFwmydByUKBmU48LQbPtqNGGe7T4FhzBPLZeM9j4P89UbEb2qsuPT8pMpQkBmHXZgXPhgUmVoG7bGexdskCjr",
  "key44": "5g89ewm7yVziREQYY1gHNKL4ZeVvby9wG6v6bpqnkhCTWFG3haSRxFGiKHUem43s8yb2AAmaRRm3c5pBwy6FbyA8",
  "key45": "GgKrc1Cb2xYaghcMqJ7oGhyZP8BCy6JwHjvBu6GFqx5kzwbgpKnWZfZyAoHmJN6GXx7ZdUEj47HyaUWprgGpPx4"
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
