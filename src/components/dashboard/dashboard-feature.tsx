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
    "27x3BsSuBZfFrmVmwRxy4bgrbkonciGNDjst3J4ifpBmTYHx74Q87ypwPvmrvJU2zRgHBUA3TfCJqBfdThFERbfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1CoYXuGVyzrNrEuGY5mKEJqaNdnLVfUZ5fGoFMCVVh8ztMF3UjFdNPDzSubY2sCkgDcs139EYaF2tjE3VYmVGX",
  "key1": "CFt36t8LgHVkFtS813iLmNx595s3A4DuHgQkPzEogDWxEAvAZaETWVU6jXuY4ht9uuZga8yiP9vzTPboH59mUsj",
  "key2": "2kRG6p876ipehuHLpJuF5reHsF6WvPEjaGsiwEZTkuEBDjyknyZfYHRy5SK17VBmyoj8zCqTK5r5nc5dsGPm2Fni",
  "key3": "2jwds1x6PF27Y352ieWAGx1bZ3LjNYqbo58ji58ST7FLneVuTfj17V4pVRVYfaARTUhsfUKVEy6jPw5HEWj5ouWz",
  "key4": "2WwmZaZgGkd7YsnXZ7u9ELxmq7FzKpMV1gTWXebZMGabEDJHCU3hrqcn5AbTJPPcKp7TVRGN6TThzSNcgwp1M7uJ",
  "key5": "2oNtEHdmetk2wXaVZrQfvumDKdL5qcSxh7nGAGhSFkLuuR1Qvf5V2NoLPswYnaFidqKi4uhV1VNh7pg59w1KEuzu",
  "key6": "epNXM5hWebHE8WHHXnJoqvnfZNkUpfq7phG7KVkBtcX218ccj1qACwfmS2NmemBUp1xjSEjtuSWpDgvkNnVmfcQ",
  "key7": "5hs6mh5PG8Rd27qki2GDJnh6RG5soSEJS7MZZerf7N2Ruw4cdTLPFG5KD9oGZ7TGga9Yx6DTi7ghpGkm5qu4H6eJ",
  "key8": "4cN2Ks7HPMTxNp5v644mLCwPu66AfRXMsS9EV4WeHH1nwD4dz96zRFspw1ceVrG5zpqjxpCkmjoVAr4e6HHWhUnV",
  "key9": "5tVThc8gqrrBAo41Rrzm87aH2yfXcX5waLctvtBJcBsZpAUL87oeWCsKcmyGatn92tBzTCQLWN7orMfSmVLe1Hmn",
  "key10": "CmpcfQybNtLwWVsBGqVpe7DwQbbzcAQv3YWapy1hyJULnXN7ZPq77z2rNuEfm7yaV4wouewSdNeyUUSgB3DzFNy",
  "key11": "3hKiEekHrGKgx8Jh9UcSqtpPw56u8x9gKUMAjRmC3LY46dXpTnmWeGs3JRnFLVU5mgRh6vkU9vWBvCSzmDyDfRZR",
  "key12": "5UvDYtqy9ZRzbLBMCapp3axgtDDFPvc934v3TuJuqbCgcPVxgYNnDnWjeM4RFxRTVeBH38AHcnsuFCn1t2LtS8F6",
  "key13": "3wFf83SDAoM55NDoidx2WKmiViMFuwvmdkCy6cjUaF34Mx6zCvwF8jrpWYRSxtLcCrLaJ7YKu8SB1LMbkyGhvAwq",
  "key14": "5FJrCabyxs1xYM541GxcbqbXEHyMznNTrfANg4aGx2efjNoks5CokXsnsfQ7EJWwzh1WmdwtZ2ahCrDwhsi4Vf2p",
  "key15": "55eaEbivn1acFHPFDuemWidjrtwc4sRBASmazczJTBGMZ8UnV4Fbd1tEpwFeCXcMqsveEL4LZ54z93QB5FV2rH15",
  "key16": "4ftWMrj9VYe4gLGUcnsVsVTdRcXAdoDKK4oaEdmZCtfW2BkftzB2uFhTdeHFR8xzhGb1U2ZHtHYgLKipy4j1HCFa",
  "key17": "46ehSjpytoWZ3vJygJNWdfEMjzLpZ88yyXqX24RjmCH3uKYM5u2DXzu7dsEsfume6FG9GybMCUuKV1gG3JE7UoJT",
  "key18": "5P2Vr889NiRTSYmpWQZ1ELfVjcyUd7TFpm5NxnZMbPtR26YsHq436iptMh6a2r86CFPQGP93swcAZcZwLCYf5qHq",
  "key19": "2XrcWLxL6yHjMa1F6S9rrp51FnoWqyqB2ftGEYMTVmRGe5WjU8ZAAECUqmwZCpUNU7ddwY4inAs7sVAPCumSvqD6",
  "key20": "GAaA9z8WXea2wLtzPgiKvVyxzjnwdgoLgPodbijhb5oysEwyJDGMxovKkmumsuxXZ8y7K15bUemvxua2ZcJ2qoX",
  "key21": "5ms578KUZte4daMqTD48Ebiwbd3JsoEovsM3qagv8bBTL1K93EWwkXRMe4jKqKmCVcCsPvoJ7gih8ESct58cTKfJ",
  "key22": "4Lp1UJGS1djXbM182y9n6D2hGVN1zJrH7fQJVzdExLPUyMUP1xZ63LKnQhYU2Ww14Fv5Ev5ihzkyoEmKpcYXCkMa",
  "key23": "4v6cs7EAmYQBHFkzZRyP5uDCPBBgUUnfgvnePXo7apMzoMvvnWEyj7YbS4jjHQ1mqGjtEsraGehKKpmh4YJnmn1S",
  "key24": "4vCgS4P98Ray6enFargiUqnQchznYWF7qjmK2npPdF7vk1FwxD4EApFaevvo9UDynd4h5ASn9nrVHgahUTaPZV5U",
  "key25": "4uQAa1CMwCjrGQN3JVXbef2bDPaZHSkEZZuWQnLsLwh3FjWJcySa3rwrxXPgGRtdynKcqRaH55CShViPjus7Bqah",
  "key26": "52gh2sCGqt4YEB3VP7uBorJCmEevRaMeJ4ymExnbZ4Rt4qY3SSUEBX1jPC6mnYJTJfs4uqe2j45vB7vFYFiZvHjM",
  "key27": "4AskX2JuLq2CvCVwKewW4MS77wSHWjcVnA71HCxSvtEmRAX89LxRa6ZYixY8RGF33kJhadhDybW9VYeWguod2kd7",
  "key28": "cezChiwTDsuy7ZLTxqKt9LE6ofza9c6J45qSbST6u36ZZkCkeHzEfhcf5hPue91quNNQ2gUayUSEKtUoiuoem5j",
  "key29": "1NSsykax6Z2195HsyRc9XRC697dv4THD3vWtJ64Nk75JaTbtnsVH57UiVo2oeJ8NLDaBCsYvdQc9bCGwXbn7y9G",
  "key30": "2H6G3VKhX1bfmhj7HWxrkbuUK5T7m6J5hHqB5HXRvDcW1xH9uw4rBdXP6PY2W9xYuagLpCqshrTRMF7TXGRLQsit",
  "key31": "briZBKdUnkAedKromvZwgUdBJCydDskr6xahzvJXL2ZKUoG4gBDt4qLGsSkzwd11snzUMT2vzc8xAoHan4x5mzp",
  "key32": "2LvumM5x1KZjzvvEpRb7oe8pQnTfZtAPMGT96jqdjdcVbz574NraupCQeP7uePkxWbLdSR5UEosUyR1yWNdYtGD3",
  "key33": "3W1zPekCd9fL5dPD3vCULk4ZbFAuHe8yBAS9Da27Fqtqv2doqXxvHDfTzfKRDdWamepfzLgBG9baW1WsQ5iRx375",
  "key34": "1br2YSGX3EM9dR7Nh9Zct2d72QCx4J5S3CbsJyNsEqhy4rKydrdZD4W81xNhGbN14R2aniDYYyZWGwYJYVGFGu",
  "key35": "3qZtBqUAA6guWgNNLHgN6tu6BA3Gnyayw2jabt3AkiSBeXzJGw1k9R3WLF61Txc6Pwi1JKrUphUbLK12PjFiSHom",
  "key36": "37GXZbwVAjcGTo86Hkxix8kHjd914aUCfQ65yAQwHEe3pGGj53WSbDVBb4FQ87Sr36cpncukPY94ZKPQHyz9P7NE",
  "key37": "2HYwfy3CeypTyy7L7pnopA6mJGjDTbtaH449Kd1WmvvdftPQiSMiFmevhF3KvEzbEKQNvjFUxDLV9HvQ4XryfvUY",
  "key38": "5bAqQ37a2p5raTiK8ePcnVZamfiUoQFqskJfiqrs6a3nyTh63aYHMJAbYJMe1xGEiDidhbQt75we4e31KQXvWMXb",
  "key39": "55op5d3zbncpNY4sLuU2SRWuQdK8D5tdz7aZ7bAAcwJ3BdppZxxcVR8qz9TVe5DkGFXu7cY8tBbVoJ1Uso7rghL6",
  "key40": "3p8naC6dmnFCnEPHu8aSU9Stpv7Not14xzoGq2oF6DJEhm13WwoeVsTn91ehZRx8a54M5etx7zF1nUjEZGkCcFZb",
  "key41": "iKrB113hpcSuUAoyHDtE2999MQ7a8jxnLNDP37oMoJYmA4BdKjMx7szjh6FNJ55ESsBS6BupNLKrQvFEErmmHJH",
  "key42": "2pUiJ6xtNtCDvxSzviK67dCa1S9qmg4ZnzdMyHAfvQVsoTbVHAerSqMeC1tmnY1G7nQRmQjJ8YpQRv6pZiVLZT34",
  "key43": "KnTfzrw3YRfeCpA4Y9x1nZoPE1pqdENmpiApB5eJui3hVuC6p3c5AifZTa29m2Uaxf58U1giWQYKEp8jj7Zuava",
  "key44": "4iF4xybijFhaQFoof4yTXUPEgcVnonoDW8wRHdPY4QMGpfV3UiQCEst6aBXbQMA8djGTkVxWhCVoc8EDBEc3sQAd",
  "key45": "4DwgBnifV3iB8oAJAFrVsDg6mgFPPNH9pUmYU8PG9NYzYsDgacbXSBn7kqotpPqopoxZLLhgWnQxx5ww4TMmPEBV",
  "key46": "4cXw2Siu4hW2xviPV3p2BPDXjvxu6yy16jogcuKof38qquJUSpgrqREMupsg8UcLKjWgwgP9jaXR58CHTM9253s3"
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
