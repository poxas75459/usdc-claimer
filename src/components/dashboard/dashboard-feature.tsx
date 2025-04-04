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
    "4JLzh3Rq8oLewooa1Vo5edLFttY7qYijq7EY2FgA3BBHQ3K7xSdVQRyffXxS8FQ88dZyhQoiPWdqn2444UaY4ikE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LGnDruST1UMR6tsR3aWwaNFNPXDU4mtZKwUMAJk2CgT958Nh9Xc9owq1JVj3YH1dfDsa9hKvT8gMW253NVCfufU",
  "key1": "s3aQmWUmEMzUkrXp2Jbtw8RQqzM5xMwCJM7VKRBoYy4uZ4b2qyZfzRg3noywgSoXRDb1hNpeuj72Uzn2ZCaxAwe",
  "key2": "34Uhe1j3c2vSEDKzpHqmZDqhQSexQuxTaZ2Ez8UCEEiuLMxRbMukUBMZ485LL85uF7qAxANwWWPjo3SpUQRQ8Vjp",
  "key3": "3NtCgoWLEcBYVUZDEDDxRzfma1863nHAatFrspGc9nM5CMfQrQFvUxC97i4uEnMgpKW86gUGJDWyNfK9mPv5jiyV",
  "key4": "25nbSgmCom39UqLGu7PLTYWH3LxuPPNG8sB5ge9iFQ5mtpaxxAhtvAxwQkrNjqjHZsEs5j9Wh3MyobgxJioKDyzD",
  "key5": "3aH54FHSpBsQaQ93r7yBKGoyg6qzrLRpDQHS51tQeyDo9dbaFmT72e4c4e2o8zmXd83BpRDbtAud19ZwHVqo9pKm",
  "key6": "4aiRzncxLziz1vq5piq4zez1G2deri8PwGYzL4g1cg2LjsU6brcuKWMXrBNGNdq11aycN3Bqa38ttUqhRTVHn75o",
  "key7": "5GwffCBWFHNGpq95uA5ZZs4sYjmFwDcC2BdraVkM7JFeDgMU19hQdTXnQh4H9LGqfbGK9QtppjqAfgNzo7hzd1ar",
  "key8": "4C8fbkSDuRkX8WbFeNfygpKg59Aphkvb9sbo5dfRUJZuq9gZHCTHhJHhcYdUkS3wTvvdnaiqdy8Ef5zAwPTD4ziT",
  "key9": "4BTpaojkqr4yQgH4Pd3DThVfao1ee7rhMaVqNbgXSR4Pq1A1zWexwBzVUKgwGwhMPRceYEpK9SNcKtWoxchHbDPU",
  "key10": "2p3ydwhmVu2M7tNzRdanwU6HzPvjYvKAHeKnfPKbaSUB36rbq5cBWTYMLhbhq97mgN3zqp5qnHc3JUTP4JLin3dP",
  "key11": "hUFkqoB68AGMv2bSL7JBFfiSczpedWXWMs2bCFV7f38fh5ewd7STe2LfuTnVrsTJxnAgn4P1o2KisvW4umN1yrn",
  "key12": "3WkCj7AARNGyh7x1Yg7sfWRGFhR589Z56gRMb1WfkN4LHS8cNHU6aamLdZvRcFV1vMMHB8zDbAD2yjfNNpc7ApvU",
  "key13": "5cLWPuRJReZUyxgCdu1wA8XQabLwAS57TQcAKkvrAGzZrTHVCahx5BbTwDEsQNjZdSkeBYNgFc9Gn9n7CSz7RyAv",
  "key14": "3krpX5xchp5CVuzHXC9rEEG1k4sy7H59tbSHHJtVtr4dzChoaQDQtpaKF1Nhyho76JzJzSEjarLHWTdmsmYW97Pg",
  "key15": "3eaZ3iz8qGxziyvbiBLj6R6grnq2R96Z7WnV6CUAMeRksmdFRHcZAkA7Z9BeTmh65yx5yMjaWyrqCEorKieCLbyq",
  "key16": "iq7wVG3rvvUxjwX36iTbxJZYmusYavDgZPm42AbpyJwza2Zeud7MWkv3J8MSmnq4Q83dw9gEB6U3jGJqePCUaGW",
  "key17": "4gspvT2gksQedgBSAZJeoGSXmunVxSydYt8wqKEGHKGRauK7DCcf1ByFyJGPiWAashEhpi5ydPnPej9K6cPKoF7p",
  "key18": "rYZrkAiD81QcMawq2qPgvkwU761r9JP1L3Cg1K1fXVvQTZ25zybDXqMsNew1u8uBjMzghiVxSQPo1DNwUppc3LN",
  "key19": "2LnwsSdT5a38qHtSsLyfzkC9qdbCatojHh4ajarb2ranZonXh7VhqGiijNN3hCXohXy5ZVcMmgZhEcnPpbcASKub",
  "key20": "5JEybb557AyLcnvaUKDZZYKMVaL5zE1kEWiM6C5dyVSn3SFyA9EYtZDksVh5ws38PksYk9NXUBZmxg3zYCyQrk9w",
  "key21": "wX1UqAosJ2a5HyaRxzDAMVdKTwiL97hmNyo2wjtGddxY52K9xvKhoBpBv9QPWruQYuRy1h39sY7YDfqtrBhRDmB",
  "key22": "3ew1LJ6r9a9Tr1D5RhqQo2uW5RzPVnTAqKueEtfA6EGcPEJkSnXx4RRmWwJmgNrAjM7Linm5sRsMfpH84eiJkZuk",
  "key23": "2WVWq4iB1RZQwT5pMrtBBC3KetU6cGnqfMRFmELH377eJ7oG1JDCDfKaQGfi3dKKZPxdagCxiKiiAXr21iu8cfhs",
  "key24": "4XiGgUMGf86a6ZK4tn6fh6zWjHj2Y3B2uDD4mbfCjQoo8xswheajEQXoE9Y1q4i2Lbgwyz73Jsc7wGGw2etc3Eth",
  "key25": "4xCWuwBU5sNHV26fpEtQHYi4jTj71KaUuNj6pDMrP6Eysb24zvTwALx5jJxRynXdgv2y9qpebCRLMXU4r1AN8rvG",
  "key26": "5DuVHmxnMQUdamrjW4xYgDRM8vK14Gy6TrYdG21gP3p2SenWV65bTdTN6Cp5KZ2zvQZKtcEdC61T8ZGNewAQ9T1c",
  "key27": "3b8tfSiM2QVHV5gHxL1t1HvKMTeEbyD7Wndxe4bB1uRfdfVXj6jd1pMvZvsoikJ4GuGxWkAgLuR85GipitKRtTzt",
  "key28": "66w4JxBJFp2Hd8xsu9WB1eRgnX1WHMC5BHwPRkHyUierHGJc5zbxRfv3hbwRxqaxkgQfcoQ48s5cwDW661hgMGFa",
  "key29": "5mA1F9kE6C3Uq13bqJ6obev698R18G4s7znsRJjtWdoyjbyPcPfoKwK4YfqSxku9P1DuGm7HW3GS6ryNE2JSPijA",
  "key30": "5CRxuW3WWfJpy1niBk7FVQ1Wahd2Z9NokaSYuuBygHs6zepbakSnx2TwHpPajWMoSTWLiKmiCJEqdcPaafzYwFfC",
  "key31": "3Hks94484jxeddL784K929amr1bWcHBUGGfL66JCzjCiMZ2RUAS4TJTAXgZ8Fyi5i4wkhjnAPkLP1vGTaFfgum1H",
  "key32": "3ZNLdKn2Fqa32PSLc5Enesr8faijSK2B7yLxsEyefLSsT9wvNeyyVqkLPRKRXJPHqtkobndHweq8tkFKAputCkwC",
  "key33": "KGnZKkEQLTFq1j3eEi6mKzDxuvH7et6TjYDCCdwUyuw6nKKc5ippZudcyKU5wrLBQucWFodBvPFaReZUpyT2uy5",
  "key34": "NGgqSRj5sVp3dSnQF74mhr6UWnXKD4biZF1c5ShwdHbdGuXJPmcD1zmN7ToWcUzhXAd3n8BPCiqRwjMzqJqsyzp",
  "key35": "4zbqa1t4Y4Z5CFKshRFSPH1jVPfFFbf2zEpexcQXpdxZxqea4qr3G1Pygg6Cfee725VGpxSonjafhuPfB39Xt4C7"
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
