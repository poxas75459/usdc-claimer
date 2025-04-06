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
    "AheakadRb2WPSTGnpSfnNBVEAUQ9HeY9wDSezMTVF8RXG5MTNZ5UdmSBcoe882NXV2G9W9me9NMdMRFdXpFQN5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWNb2bENcG3qSE4hG6F7ChRhxcNm5MAaW7KLRTPmgxm7UtbfxJmAJSU9ynG2Vy3TKdM6EkrGJdy1ghg4cFZQaLU",
  "key1": "2TVUnhj2UrWLavMJcpBJ6MuWQyw75RskmQ3vxonNHJcuSatdeJ2aAVRAtQT96RjhCfXtTVWSTjSfQ1VscKaUbXt5",
  "key2": "4D5KzUuexCYr46bdTQfxvFjQELmHRJjkfTKXCWXwQrDTdBKzmeevXjWiz9bVcDJ4x7eDbmsehHGXb6qSg5gZPWZj",
  "key3": "23ttQkbcgxkMqE4Z2yd2fLQ2bHSW58weW7Akp9dWRnChrgiVDaqJey8EdnLZ9V9hQ5ZE6HwwSgQZgy7eX8i5uDvN",
  "key4": "3VCMd8GCDkRozGDZMaK3U4N7XaT5KUDNbHRwtvfqgT9fqt8qxsceH29BjQhgxqSphTZX6xaFmgHgeW7a47GUNRLq",
  "key5": "5ZzDpFXkqZmSqLqhenPnFJ8bS2kdFSrfXTMUAryjt1x7hiYVKkF5BbGzfbatNs8Y6STqxAw4hGzhFK8kuWdJ53fm",
  "key6": "2YtGKBGhD2RL5xgxr4JwqTyRrraddCGK3YWFMcSCxzj95ZUAMEUUhbqdA11fto1ocXvnSGRCQ8mF848g5PJiZVB5",
  "key7": "416h5qm2CoErRJVnGT5YugEbsuJSQAQUPDyk2GXgEvFqmGcfFFAt6DESUZxsX4TNwwx8fsVGQ3oHFLmcLQXFw7Zu",
  "key8": "4sEVnWjRfNEVssJWv4TFff1XfbLGhtw3UFth9q8pU2Lbi6pRXv56D9DwCa6gVGNb8emwnvjemTWnbSoQLgUHWNTv",
  "key9": "28ePmAHbBFbnowxDqFret4zgf1KLW2oFkTjDPjf2b4Ndjn4yHCURGYszfr3tXdKKrUr5uvhb2R9sYdfAohxn42sW",
  "key10": "37eAqWBpPttiuHLuQSzRLbyFDAqm8YyX3NZrzMrzFTd38jjMz6wNfn5uy9zaZfXKoJ3andKJoj78yQ4vZsVTH1jH",
  "key11": "2PAAZomAv5duoPX4hawNKEJ5Qv7WbS5sdyNnWvKUUmXYvbPSjTiq6MJAKFfXCvMJpHyQbWpUcSnMUauNMBwQyXhw",
  "key12": "4V2nUseiNG92Ar1Ajx1PAAZaYAEUhppH6SNK4AmWjhQqKAZTpqhfgiBYhj8Py9s4QjjezcJDdAto4QPRuvhszJ7K",
  "key13": "2zGdU7nN91TKBippQtD4NRCqk5qy7Ghdj61cKgDKFGt2fFAVjrFw1nqJ4mGoUF2KLRwMNzzqsSZRTdFecYqVUDGb",
  "key14": "5ee8JK79hkBdepfNjQGsoQVjWJvXbPxRdTUGgRAD5dgqDfaYfjNSqUw2BX29prQd2ThxvubUmFDdHjPwU2z7rM8Z",
  "key15": "4uArL5492RbCSSccMHDBj8k2WDSkDtVB4mtbBwJhXYgyUdpNkjBh7T1i9qzvvmP5z9hLRaWqwxc6MymG3ZY2tfmd",
  "key16": "5AnUKiQEPgbGHyKxUTHzcmSbWGCkJn3Vn55ZWhMoGj6yuLXW1koLv2v6kfdHV95gmY53yd6Kg3Q2XFPQ1qCnMEW6",
  "key17": "fzRoNSVfUNe1U3XW8uy6YVgJmUrJGutFB3Q4gMqC3QzWJECWd9ut2VuZNhQc6QxuW33UUjBWACo1zoNPJVFWqXz",
  "key18": "ZEU5WH3fXz5Bh3SuzphcacA7cPdsWATtDQ2fyDqsQv9DSyM8toAm4aaQTGPMJRd6hydAGfEm7CJa7gRjrdumnmN",
  "key19": "UnoCeRf9SmzaFoSn5gR5TzhVKciEFXqcgYeFcrjVNSHwmnUZppt4dKK1K4jsJ4TTRR4MAURTreZZXqxdMw5mdbF",
  "key20": "YXhERqJX7ZgE5y8nV4RjSz9XpQcEvcDFfe9YEu2oQFeJCn8fs2S4RWop7Dhsx8T1oWVsUqkU8rZv2L9XXxWakGA",
  "key21": "34tjLAs5oLtkij6TZVD14RsDpBavjH2NkX8dv4JfXfP1cFHnrbnd42Z3bNox9CZpvFnNvmGyx4KadyJCPEQus3YP",
  "key22": "35iMrrkZARTthpLTahbx7z96Qni4iQqvLCx75CwhmSbVwsSpbPPsWP6VQ12XNhDyg2pgm4f9GB1U1sc6qUYtSyyX",
  "key23": "35gfnrKsPVL2odJsyYiPWLfFHxRBSU2YRH2QeoyjRDjczQjSULCnSzHqSegokd3WhQZ3mpUfPMTb2nxqNcm2Cjht",
  "key24": "5EsvweynoaVDaDz9JhhsciWRiMX39p4rrKgRWxtWQN9wgH7NsZDdWo5odGQzjeq6mPFRqvMXaz3gNDPNNJEWMhvL",
  "key25": "2P2CbMFm3XymEXLzpd3PzYvWFBdY9xpcqZkMoqNc75qPg5HxKnk4SDTfvyQ5i5UiemG2mfFv1qd8doS5t7ktNnr6",
  "key26": "2X2eJ4RaDH8KukxG6zeFowsVmUqiWsvYasZRbXjiWcWFCLCVc2aA56Ff9RYLDZZ91GFzkxW8XWCtWh3sD1vQY69Q",
  "key27": "53zx4M8zyD2pvR8gQtHmK4hLDFxjJUkpEyV3zzWEAcvG3fh4d6xA86cL8eUZk1RRvTV12NooxWqQJi729WBLGzmj",
  "key28": "3pJ941kV5ExN4mgpTodJuVTe4hFNicDbQujsTAGdDGtDLoZDUMpNpNSDiDTpqYNQyRkHVBTc44f4e6aR97PyNs1v",
  "key29": "2yEY4Snbb7jBdKJDSVEN4A618P3mdH3vfJe26peDe4QRZY2fysLxL3Jvb99ajeWX1sZDzvwcGuc5sfhbzehTefRd",
  "key30": "27USZzpFxDedkMTvPDd56SXFm9dqSDtjZjLsKsffDX2WRmisMjzMekWLMNewqwU4AnqMWTg3gEju1rfWh6BoH1CT",
  "key31": "22MUbd6NwQVH2dLjM8tKy2Q7MwE6Wieh4Rq3WuakNFXYs5dycN2UNLk51KPZPRarCGwnfKnd5sZihdQPpmAPT2x5",
  "key32": "yyc1wcckbGBZgoxDDUEerruAAsVr5CvmRD1mxnHaDFK2HszCstdD6eGj4iPAmYFMe6FxWcbFvTWXxrrRHsvY5mb",
  "key33": "4Z5VzQg1QecgHwh6fzHXn2mZN6LP1xKmo7bgHtjiurkpEDXoX7rGww9iFySKoethB5nAmBHUAMKYn5PjiLfeCvzY",
  "key34": "4e4jJF9JMLMbeVykScmBgMCZea6ek1cpVJ7JN5CqtQbNKdghuCogvMiBYf2YyeDZgF7GUdfuAmTcx93HnsPmENET",
  "key35": "651wyDVW8XH2YkYKA82ydaUiQdQF7YdMrfyQULvgixNvBbDMdqhpEVsCpRqDxaY2z5hAxuUfpJeCocAxXYHhTUgW",
  "key36": "4opXTPErSSLLBEb4YYBFb8x4YvAnbfW8Rs629eohLjCfiwoeZGJ2aAHoMWzMrJwuqBUCD5JBZMmtHuKca1Cuo8GA",
  "key37": "4bar96erCLGxcKXNgGCAbRMPEWzCmtRhNYHH3Ro1xTtCcdEX1iRPijzktGAxtwTgLC83RUUivPcSfjUacmaK7SAb",
  "key38": "4ZRmSWMP1fvi6PSdPArJPweM8JBmBKgigvuHtch5bcj1bzKozvsLvQJb3jSDNhEw1RnWsqGTxqsLfHfEA2v3Cxd1",
  "key39": "naiCQ2oMLqp8gWNToTA7jst22kk8XUEnCvSfp8rh1zmKsyA1CpqBY2hrDm2zDKoVoZ6Y68J3JraGSpDxjpZqdKS"
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
