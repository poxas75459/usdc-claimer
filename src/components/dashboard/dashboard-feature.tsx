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
    "U7SVPCHNuNpSQ5GE6ozH6H6vuV59tYSrdtrk1iKst7dQFZ7A8vC1VtVepHSV7vUSYmKQV9LaNedfFC35c53Zmwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQ2DkfK9Tb7SsxP3Tb48sYAfvzjetZZcykAkrStDRyZacfoBQc7du9cFyrYR8pA9oy1xER1eFFf1Yk7N2KL3Mr2",
  "key1": "39K26mnF6VT4Wc7HDR18W5qZwH9dBhvCqnTU5gBKTAtirjT44eigv9h9d8qF6an3Z8PWeLjzb3CUbRj69t5C72nR",
  "key2": "2yF9ULz3huGzqTZVGrjaGAMh53mEWQioMFsUEgm2mhk5odF7bbKuJY1eabLe9eg7sFZkZv5TXYvovSj8xsU1LwfK",
  "key3": "3Z7hBvjDqX1ecbUJGkuRJAVF9TTHiYpGD2fdAi46UHLmjPkTnqYbBKfugrpQ4TWyfz3tTeP8ouSJiLZZJ42jkEFU",
  "key4": "Eea5joqwxBiGwebrLdCoccYifU7bAKM5YZPkejEWNVqdRUxmp6nKmoRuaRQ1VtCKMFby9oxndgCUUS6WcqohS5u",
  "key5": "h4Q1Q2snnaF64vy75Ja5QeYUGkJQmXZDjFcmZKgrnzov6WFPCsvEtVgnYZvCoQYe9Ynxch8BuaD1Z61Nh5qghD9",
  "key6": "33wp6N82YQYijTrSKJaDQg1KNMeAvidtjjKNYmWiwTTPCrePqkJAcFEZB5F5UgiJmjqpyRDDKUHisYKHoDKSHFfZ",
  "key7": "C1No1fQ6fp1o3D1VmxkfmtFYiW4Ho6f8JzmwfGatNZFgQkt2uTK4Dzyem4oJhJo1N8WYEAN64PeJLfJTEsxz8f3",
  "key8": "2FXVraeoaCNpYQ2pkZeZ81si4TPagKTu6C117XWk2GNWTnqhrhE3TUmKz95G9aBgdTgWSYaPSZN4bR5nhnY1tXgA",
  "key9": "5GGadocxKZ5z1UBqT66t88P66ZuBxpz6QtHehvHcp968WHyowVkFXYdC2TpXNRJoi6NDNMekJUuHT3eXHgKDTMGu",
  "key10": "r8eZj5QR62XsMpsAXujsFSDLKkqSGacVucr3YR8RKApEFKuJhWU294RkP2PKADA6nVDwiP3h2WKwjdqMPFJH68T",
  "key11": "XXdwSUvRw6ZmTvux8859rpWfu3dEx1vUVMgJmNqB7SK9gJ2hQTkYnhnmwHptThEFHAYJqCLhaWV6m14FysRXBjY",
  "key12": "2P7BU8efkY7n6GpCGUt9oXjJz7FiD8LXfDyZexYdF83GRoEa373kdRXYiZrmJt73hBjEraTJdAKr1kSLHrJdE9cq",
  "key13": "5WBtyj3vexp6rSqJKJyJhSH8pWTqXefN7mppPWXp3okfHwfDRo4Q7rK5WU3NY7rojwNNXsTg3umBmJrcKTEXKGjY",
  "key14": "59ayNWp3KBMEqikukTqW98j6XNcG1B9fJ7hnKJJVm428uYCoJtR59oEvLxqEPq8yNCvgrsY5F8htrXpU1menHgmV",
  "key15": "4tQUnogDo7bduDyr848jWSMGQq1ybiJgUTxuUeVGoQaRW2ypDTg5dr8stBhc2HdyFszYAw8BrNYD7KUznDgMxJPc",
  "key16": "35PKqD1wG5fTBZdpHHLwtKzKpM51BZem1T9gWKMH2YZebijYXpjE3zNsqZk2Rar4XsM5Ys1FNShNRrfFXAeLNAjK",
  "key17": "7YTztefDyyRxb3q4tXUVRefbEaZ9KT68KwwVNDBkgHcHkzwhNBsqUU5jq85obsvbD4aDfzqdFg4xRaBVL9P68i9",
  "key18": "4HkjvuXHoV4F968SQBcjLyqyYypH4UJQUzYRx1s1ANfWk5hAjLjULE6kNmthtJZzmDEVrS8n4Pgahwpmt9cq4UUX",
  "key19": "5tBR5ut27dCMx9Qcvt9hNz93rkWZ2RU5f2U8p4t95sSidL7G9TouRdX6buUAsVD3dPxBNF4aBpRau7XTGicpwtMb",
  "key20": "5aSnMp1eVtYYquzv29pZBiLm4RaTyca8yFwErLqudHHx1ALYR2EiA288tQutf1oPp3PssyYpDfLe39XwHdMLTBd2",
  "key21": "2CPfmJjx6UmQaeZLucmfueyBm1sfVXGB6mvPGipv9QhrqoibNe1fL19hdygTuzhhg2F6dVCWqiGvGEh59bw3Qefp",
  "key22": "3SJxEYt8daNzGFaKSb5fy3EtUXjaogaAEpqyNeKR1CK8jxRfcwarCZ983mFdx3s9DZRWCggEKsmMAMkm77qNvqYz",
  "key23": "3fLuD6R6sqqkVJG5vtqEioTEtew9MYpRSut9Uq8yLM8KMLnULCBqkqXFvst7yRTKFGsUophetwvWi1DjY4DRJ5ih",
  "key24": "VPc9BGUmbAVVGiukXVxFFqkpd5y4WtyDgZJD834eCx2Tusk4Me4uSfSoVK1rkdi5hDWYyqBsft7iQXrdTaVogYa",
  "key25": "26ZX4gNENNGz3PfDNfuamnfh2dctSTm9UDpvFwwLt2MM4ocWVhVHEHdcsDsg2wZbi3LRdbNYfcuVpn95mBcvTgm2",
  "key26": "4mAfsLddth3TGv2Vzr2iwsLWgkPRKaMvMSxNMjMFWC2RgPyn5rQnnJ1mgwzz2XVPBgi5yJeXhg1keomqcMiuHcne",
  "key27": "2stupToJ8ba6n3iGWYGqFSbAvrAGXTEstFARP6AAewW52Mxf2UCTMtXYbnfUtQVr26rPExF1uCLkJor3pM7E2cex",
  "key28": "95xxc75uVzX9YgiBLgEW5SXDTWcdDuzZ2dNBgnJR42BhmY4CmmeF2STdnE9Uj84GtwJadEY86HiedXZm3XYcJF8",
  "key29": "ALgykPE69fau6pTPFFyhFYMZ9XXKS5KN182vaZRnwNcu8TnqHUwdDdsjGGGSC2mUHzPuCUYCpSYAV6aKs3uGQTT",
  "key30": "pPqYsNXQE19Lem4GnWqweKnC3a4E4wFkYaSYSZEYbSNdykVYXDmzXfjwGWWyPBpu1VPLGov2o4A6U2EijdGbxtC",
  "key31": "4MLbHCqasg6xNDEzF9TUFokZvsXPuQ4csJDEA2fWuWJB45FkzwHL4ydVuX5VByManEKEK4Rg6sAN1pc22bvesXAN",
  "key32": "T8c9sDSKqGr78Ccdt1BY6nRHyMhbDxQaHmc7m5xz3ZHYasw9aXHd4hY9i5B6C21WxWhefw5SLzhD9tkbEMYZmhi",
  "key33": "5nUZmHAoAtvXYH75zKim8QuozL7BtgtPYsQ7tQjJUjoxBmxJPdCdXR8TkxvjwmEzFy8N7thu1z4ffXr2vRkRVZMg",
  "key34": "2xc7qaYFN49knWJoEejee3bWQrkpnSHar8i7PtNEZC3TBAV4iGvUaPsemqVCRHddQLPV9qtF8c1kVEkfTjAhnw41",
  "key35": "4kqsRXMhWo4WfG9YuGomj4GFxyVBApJsdtrYS9TSgsTk3dYEvDupdfPP9JnuEFedUENE7fPNckwg1dXT3ik7tk8C",
  "key36": "rTpSQq6He7dtXNsWEpQ1tRXTv39eQeyQ2dXwk3e5winZcp3nk8Sdjd7XvTwJ84oNAXaw3PqKh2SEDkSobM9JdC4",
  "key37": "ZAbypqkgfe8Q5XsMZUYLnHjvmW6qmpJ3FLo6ku5UR5QgJ1vi3ydmY17iZXVQs9fqHc4PrEF3GGZfFh2gvJfz8u4",
  "key38": "5MJvYwma4xtk3bx6ZJ9ov9kQSJ5w4ZNb7ppZAeim6jWk8aoqtbjGu7ksadtMJUjKb71Vm1FVhtbXZD19ChfHBU6Q",
  "key39": "4uJLkvTKw8Sz4Vu3qSDAycu2hU9XukQH7g75uDfvfwGoJiGt1VQhZeCmFqDy4YRqd4QzvRpebbeQqfExWAiJ8Y6Z",
  "key40": "2t2CgtLLU8WejqUYQfv6giXWVnjKDYM4P5WFfMR4gXjTGddEXeaZhyRrF3KQYgn2fXH8ZnTaSspDfjxzU4P1nKvV",
  "key41": "43ynT3Ms5RgoaDnZNo8ypxyb6hDvmToZLMqt5odzMSYvDY87sFMmzfLq9LzDTEj7F4pv51iXYPt8tEA73oX3L7BR"
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
