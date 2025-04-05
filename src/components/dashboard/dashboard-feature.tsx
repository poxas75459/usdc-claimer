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
    "4aQ71RCxMWvG1VTGeHJuGBTmhrQUEFdNcw6EmTXQWPbcb2BMabevdNHatT5v7FAoh4aSyVYRVFYDpTafc5Tck2ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m2kSVBKM4sNJ6tnXBvQD79Tbck1wcDWZvd19LfzvNSwGo6m9cFNzUuu1Tfz5xZjKdYEXfGi3PGjL7c4Zpk7YMti",
  "key1": "31y6W5LNiK1NG3kikpdUjyEU42ULk2TT7VXELrAqtsPg4oGC1Tvj2NtYM7W2f4kcw74oGpSdK68fqBsUJpcoQd1v",
  "key2": "4NAEWDvhWihmqHqdp3hWzCU7srZhWFxDFuS5oPmHMVEPuomuwJEzpEdiQDrJH8k8tnDWWtPeXW6Dz2TtX2vNmAUs",
  "key3": "3UCjoW5nSvX4fjH4PVchNxKy3pv48cpfbocyqC8N9Ca2cjTiTPBQCU1npBEiZ78GiBkRNLaKsb1Vyvmuw1RxdGzu",
  "key4": "2eabfHvrPSwQyBstppL1FVZWdgE2TVNxy1b4nzW9j14GkkHKEfAw4HSiv9e7k1BbC3BpuEQHcgo8gJuATFjUCB5z",
  "key5": "pdvKrifgBsNNXGYsoPNrZYuzB3p4echCvmieyfoyvh5Hmn5DYD7FLLcQdS2J1EpvrG17UDUiW615UnnG4BtMWPX",
  "key6": "2k1W8ryjombxiPhfdXXLduxPupBzLSNvbRB1PGS7oG3FgVVtxn7wYqSpXBd7oDEztGaqT7HUyqxkzresj3UXfQn4",
  "key7": "24TL1AWxFLSNcqwLENAY8xf4oQvKchRBzjapbYUwozGMcDfkFgnHFsiWECYoe9kLCPah6XRtbDvPXMjCwn1yULAL",
  "key8": "3XQsVAze5TeNKo2iWGDzj1fuapqMR6KTj66j7AV1WVBZB8wdJkyMGxjcQpmALmN7X3VieBBJdqiF1q8J7Us9QJee",
  "key9": "4iRTFfjnvu5H5vYZ7PvPCM3sQbao1pL2vWxNLukCknXk7oXR56aW3CGqExNgbp2HCJk7mcWmTktJTk3Jgt4QNv8H",
  "key10": "5Xfy9Bj2zSBuJ6WNy7en4sLAEHWZF6yMoZc1SRLP9fLmw2F9KUHjsUrKTwhEaZ1573h5j5Hevk8ZYamW22izhfWN",
  "key11": "3Jd22RDdLvC9Kvh377AQg65SC7hb33DF3XctfBQB54MWyJjJzSsaJSy3i2ayQJewgmHz8thdYpnmXsCQf5TgvPxN",
  "key12": "56KWPk3eWPbbP2RuggqcZnyWwF9MrTsg5idLPLgpiqycDVeMFU8gXPDaeyGZhLAkdV9uBhNLs5CyZMhk6U1MTnzN",
  "key13": "3L8m2XW5qc3EwWU6Sf9MBmt3HYTAe2T3XNYgv4p2a8hQCWZnTnwxcqebQJQCQAFywv7xKyNhgzMrUEodRUVufxVP",
  "key14": "4NFsq6oayq6jViz2Gb4WnW4mRYcbUazT9yB46ALp7oEdViAW3SmfSCT7jZSL821PSC8o13DAEfAY3md5SxsLUDht",
  "key15": "56LG8KtJ4wsQtVUX6PPZezg37zJSm9AaegQmvxP7R5gXEecXWQrdtzmWuVyxVqEjGG1GGeb9bFzjuQLQT9Lfbe1x",
  "key16": "4SRe5TdsYDmNwFYmPdYP2XUUpjyUGMyHenzgvgKuirddnRus6NnFMr7uWW3jh24V3qc1DojpGZRptBHUM14AS8Fq",
  "key17": "5X1opvDvx1nwCNrqMQfG1vgxX6SvckKgy3b4zAqLzq7j71FhvpYdAzftBeQUQQmZAQj48utsBnAnm7yhTHyYiqFR",
  "key18": "5ZaN7UHNAy9o1mLzLbvavJ3bv1R7V9CU5d9wtCzj3ScxCyW11TQeTa1CiLvyWhQNuFLfXijJt6iks5r7FU9P7xL8",
  "key19": "2zrPpJGq76cVPyHdtJBCQ3dBawbsATkwFKf7xfdh2hvGzepbpspmuo5sH843WcfEtpS51AdTpQc4oRhw8z5svSu6",
  "key20": "3H4KELrssfhGCidWPDRSZdTmVpzLgAdPM8xTpkA8xxBQAiDePBdupcUoeqgqpCMdXo98D6nVFnCQ5rf8S778Sw3f",
  "key21": "4SSXPzPEjcbvsjTxSExyxJEE2zJ16vcKtugLjYGiD26CX7TkJLbLiAi43ST8NHxCdFmN9LiSdccHxTya6aM5USWN",
  "key22": "4845nEfe5nWLStfEusEXiddsDy66tnyBG1FzAKgkwTeGau3pyVXCEeuDqBxn7yjQETcfCEH9SmT37tHEkrUWJSdW",
  "key23": "4Kmx2xf62nmx84mH4qCZ5U53bEFZRAk5tKVxspS2v5BjWwvxoKbeFGZvCzyJwvEjuF4amtJUNZJEV92U9Lmbes8M",
  "key24": "3MqoyRBJ8uEztdqrRNYcwEMvuLTfg5E5GsriQq23TH7rnPA4nT9SdXwFKHaK5srtnY6xnK7ugWuSkbDsKkJmoQs2",
  "key25": "5REKtSSjpXQsdnN5DPDrtT4vA7seacEYdAWEo9QSve7XyNP8XpeFjBmngngT9yeopPRUdiAoci1TJPaWueyNGoKR",
  "key26": "13hAkgwqdFDExUznKXvn16NNYtjrdPP8uZj3F3U5oxMEMpcgVN9nfWbaMhg47mzC8Gka7n7uD7prfASm7aRH2Dx",
  "key27": "3eRUyJ15nJmUszPdZ9mCiQKCqD1dyySLu3ZC2R7YgDuAkFB5j7Vk9jCb5JnXZ79sBc5VYHgbFLP69EeHgh5fmzHu",
  "key28": "2Hq1bkWfc3hgCY3pqd3V4RnP2rdRLR1yxHgk5g9qCgUGyJSeNydZ22fnf8cdBgJtzDV3tWhUELNL84QPrcfGcVcF",
  "key29": "4BnBidjg4e7AVgNsuZQvYj7HTbLAMs7u8tUe1pXQFqQ3eD2fJqFp8BnTo7KS1t9rtmVe2He6EqXeQF2aHLJVTFes",
  "key30": "3u7QqZBfGY9L9SWo1j2d8vHo9cYDpp6pAN4Qg4us5ebm9MavDSedEoKaSiAU3ExNf9YxFVoayPK5gTn4ZvP8Zp9S",
  "key31": "y5hkwfKovjfDZDEJzFcyBjf6FR545kfvViFoBXZf7QgQ8P68uBqbGjSuJnnSP1Fo4dTNzjwhqK3GQW1s3zVGmwp",
  "key32": "5pivpfwsy5EBnw4mqDfxzrqiGVX7PnjTrZycSCN8rgfvUDeTmWaCGXyBMoBJkbHof4b3EgSbNz8ikekinhKnvDFY",
  "key33": "511BQddxhQ9qRAmhzixnHT8i4BYeb2bAhAUtTp3CZZ7YysEkbWpnkq5BZiSpPd222CMY2jPpsk8gnNxEWM3sqw8N",
  "key34": "4hu3J1zPDEMZa2GRbUC5y2wWZEma2nPYnL4gNbq4z2pmAkzcGzXpnMz7kx1KLgTN4wdSdNyjZFp9mw7kjYzjcjnN",
  "key35": "4bSVZXeVAumyuAagKgqAgsmEQZWftvsX7ZhoXrc787KRUsLbX5GqjM8bU3wWcDuMYuzf9erpsUsbqXPRQ8Ufm5r3",
  "key36": "2GVNXw7cALUgYzP56g4v8EvPkJTgfeZZTTGGZX9NjgcRgqYmFrtvWodTraAr8zp1WLQkKWQNvmi7JN7tmUQ5o48B",
  "key37": "3nRqf3BDEVg6mDAPTyfH8R6VVpxbGXMJj23d1Pmc8m7PhXjPBqCd24mJHESoncwi7RVCxKruLjHa927EUf4BttQr",
  "key38": "5ucBECkSnYb2gL1qZoFZeb5dxu4ZMqdGiwT7fxH72coP9BjKFAUpCZbsZyQqknbtxVAvL4FeKmJeTdY5kGes7vbo",
  "key39": "yH1ESac9yaEqFmyvQ6qScPf1rZa8bXXt2GXrTE4dS7L5r98LT8pN4VYnEvmj4HDK9Q4sTaV1gsL5Y5uAhaQ8Ua2",
  "key40": "2xrGGrRkMgGMj2A7FXXmiH5y5MaB84B9KNTq2hhKYUuzqUyTA831YhJkoNvTmrSrbwkAHZ6EFMqEGzVvuyTKXSqm",
  "key41": "3wvXEbHCoqivpUzBgFvgar7ZPWR1M1kA7viUawHJVxcEpdjKATRSiBZJ6g5fTpAfWxC7iahY8XNQ65PzKZYUMtsZ"
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
