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
    "4AFvt4kCKUiQyVJMqayzUL1hBhAZ9YEzxjW1s41cQSyHe6F981rFbt3N14hcB1ZCq6A4VW8dopmnhiJTtbzwTPMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aA45arAtKCJNpZnH3771TkWhqwgnKDxetsBRDfH2KQzk3zr1TFN313GcCDHqnUDpMqyUMPTR2zUMnnF62RqjB5o",
  "key1": "2aiBYuyjHmJuvj2SWKuFmgA3nfMVM91NK9xHcrv2dfzgNi3pbhqbqbz2jVh3JhqumQtsYHZpmWSS8AKJnCYkNtwf",
  "key2": "5vB2nePTttmsVhVJYMLswkvcNMcm8US7FHjE4EvaVe9cqT6XFZB4njrfyaRfFvwqJrsfMY8ixaJ1gnFYe2rKjpwB",
  "key3": "2zoDfHKfyKanRKjyiCrK5G4XqrHJRxKork9kPt1CfYgiov9Dk8JTN5Ak4RxVKYP4cqSkpBqbLVp9QP2KXWuNRNKZ",
  "key4": "3ghcWZjD4zjWhKyZ8SDeYnN2tfhcaPYtEc7goSBdzNfEaJTcZgZQ99hoSPvwFWuGbnkV4wdpwwVBw3DbiX5HJxWY",
  "key5": "2DRCgap6wN629b3ye3nbtKaDt7VuME494qwGXGQXV8bEv6R2crwXP38icRZAkbAAVLkNvMZg4oitiD9tV2o8AjvB",
  "key6": "33ZSoavDuyYez4S54ed3HAcNGrgBJpK65yr1m94E3tvjcKno7gVKoH924gnoqnBTrRKUmMxvW8XsHjXzdLya21Pt",
  "key7": "5i57WtkCDeVvHziodtkGEBS61LFfDUK5MF44r4m1smdnVSpUcuwo7mLsEKwa2yE4Q2XZKnK7aQXf2rex356GHjSm",
  "key8": "34b6wSdHy9FmeyM81wSRZZSRyDZ1xcKevPnE5fqj7cXWnDxGxBXULE1v4J8Vm2PicEZmA7b3VzHYZBuZqJ9Qrigk",
  "key9": "3yPbSX4hoA2VXKnr43NxbXCoPcJawqEz2iLwv3aKwQdRNoTtrBN1vdVBCPDY2aLSRRfXA9K1kUWiYVLFW6shpRHf",
  "key10": "5e6rmoysvP9tyHpWrCi1fs1nenG53dakfCj43K1AzJJqjMPBWK6hoEUoePhaqa1xB2HCtdWknSD4imXTraGX1cjo",
  "key11": "2THZZUZrxUcUD8iwAKZQ6SAmeqRcaTtrRU7KuYfRrwgo3WPoqkjyHenZi8yMMh9WiDzLz5pPwraQS1PHH8pC2DDM",
  "key12": "RjyG1aSizs4ZWit7z4b1XJ3JGeNEfPXLnR9chJTh3c4CtL5qi7Eiow4ivecGX6XVKDZMWH2ZD39nLyXrAtmA991",
  "key13": "5BnfXSYKo4DmL4oStUb6ibYe8hDtb4JXn1WkjPzAaWmTwNpSRnRH4cPCboCHi5CuoScYnuUFNQMVvsWqo1mrfU9T",
  "key14": "5oWLiRetFJKFTxMxKXM7RFK9ZymTvE31ZWLp69TYPgEwFi9XSrupH2oegG8YtXETfX6QuHUs7pEeNE4GvcDQhXrb",
  "key15": "3DXsZBEkVXiUHKkaS75NMWNJEBPr1E2wx1XjisWmG67DxnV28npDHzdD8Dg7T7J6GeG4XeEpbX1Vk3MYFCVVjSwy",
  "key16": "5r8iTrjAvM7o2LnvojD9rzmJHFcq3bzaNi7U2a6KLS7sW4i2m3yJTvh2h6UF5dAnJqKawNqdwbc3QFipMJUYXGGN",
  "key17": "2pYnTEMtK8y4Hb1rrxWC4nB7bwcse717wLac5LinMTMDfunUejDzfDdMQowECMZXG2umFRJD5mK6dASL7gkESSvU",
  "key18": "5ZN2TnH9hdCkBf1JEDPMRnHJrfS1AiD3T4Z27gWEY7b6M4nAq4G3zVSEsqhaYVN23V7SdWmdVHqLw9Y2ResvRhMD",
  "key19": "3yQcbFXuu7ykymY7Jy2YwVekUeaECvAcBYouALwbeZkbp66CvALQQdHHBEcJLhmWZrbEDQBDuzwJkEQ7YzPLeusJ",
  "key20": "61nRPNEJrwt5Wo4JZ3ASg6uuyLDEAMt2sBSnm81jmXC3TyWDAwCVEwPyTbwsCFJ91N9jPA2EQk5DopbW5tPQfbPG",
  "key21": "3iQkBo2EkW6hCXo84hkyq5YrCN1o5z5SFwGDx8WZRVg2doVSuBw4UkbjTbgQE5LTYffvikXVxcu4Qd168PZbwsd9",
  "key22": "4b3BchbCnugqL5SEswbaCv6GF54kSY55aoyqWoE8NPTJpWRzwxSSRBtZ8fsYM5L31DsTPJq85Nv2NY6CLN7TzE6P",
  "key23": "5uzWoW5rqDR5tL1N8c2sUedrtUXcdWsQ2TWKe5XnUrdGp2P6gcxZnAkke6ukpt5q848HWynA9u7NrnULDjzxrKEN",
  "key24": "4ukiG6goNpBNgc6ndCBbK9NzF7RyvAG75pcFKRtVKmvY8fLwKecqFeevSriiAqoFuL5QMf3EhSuq67AJi2KMwWLD",
  "key25": "4Mge81a4dkG7PQz1PMjaFkrnJ8k8mbnTofWzCsRuX18Ai8rSip4Hw1wmD7raGfpzPkt4VL6G6nL5GE1wQNhsXDu5",
  "key26": "22bFbTGA6j6w9LQw2sKF6qD2Xe5y2vaijPCVbp416KWurkjo3LjM2Q9LdkuZFiUKw4453HpNJrbtuC4n7f8v61CW",
  "key27": "3fE1LDRtTWXy6GVFHrmGAQMWFmGzhm7hmajxMuPqSWvCxMM5ghZkKzjuPCG854518at4z2unUFHPaXxvEsVJd6ez",
  "key28": "4CgYX5gCHS5TpLBeXko5kb1dMVvKtcLeFxsYbkYc2KQC171B7wnKzN65JmBCZHeqeb92wh78E5FS1VmXbEst4LP",
  "key29": "5XZRHyRTJ5NZqMAcyFojxVcmLFqgpi7KrRu5QDUiboFsCzWXCHFK7aNHTSEdoMm598rwqjTYxavqxESzdzEgKpW2",
  "key30": "392uAkLa1aCcPyhdYdBuY4cAJxZesWsoRfr4DG4D1SV4Wx4rtNeTZjQN7HPvG98DuZkin1LJdKi63E4YzSxwLyyp",
  "key31": "3kSqA1MQAwf2itn2xvbfTj3YLL6Tijjod68fWuE46hDB2xRcZsgmMpkmRrxaXNdAzzfNZsKfrirQz9JeN75Nh7od",
  "key32": "3dyhX5CdqR24F1iuPrnZia4bfPVnm1U9xN5oG6fwJHYxEMmwbPqFrgtGVoMuBxXESzvVQ4RSE8iWHajudgbYaTfu",
  "key33": "33qwdhhWZ21YVxBETRtkSLZ8mNYuaMv1aZUdRt61N3vLUx4Vc57ULibKVhfJ5QU8T3pXrgdVgcHypk8HrT2Q7cm5",
  "key34": "3Wi2d7URY3ZZi5KyqLL4kgxvVR25mMxDPWbwWrvjfhU64RQjGCGeELjux8CAG8zjUGQD9eD6VpfN2rdp1CJGTeQ6",
  "key35": "535vnin8dioj3EQCbKfAVUzk3YhvthesCVGiro4maQR38Xrv4Th3GqtnGUq4uyYL5RRzhRLinK6ew1oGwMg7Yjnh",
  "key36": "6Y61FBLcyN62nUQvqAPLWAYsJaYE27c9ktTpxorK3cFubYmDNhhfDgNZxASsNDM4abVU2akGy9dG5UB95KSpRz6",
  "key37": "gyaNuFqTgXGwYerpgXtn6aPaCqCoforQpF5qB5WXoD2ECA5khbWx4BU8CNVMqszcEz5S3fDGyxHFPLE2SQXK6Mh",
  "key38": "oaPsjSGefwSFt5JKca1RM5b1XbqRnBuXcWhwHoiAU6GRWtvn5gEThXBQFLD8pCBxDFyAoVLM1AHC6WcHKcTZuuN",
  "key39": "53j9EMgm8d5zEPoGs2FN5xSxbpBSQz2mSBKwgCyQtxMDE4bqvaHRB4twWzNswkq2ksCKTVqjN21Few9CZb7HbDhq",
  "key40": "3ALiFTJjrmF1LoTaKifcKCdncqRzVnsPsW9siGUSZ4YRdT5p8pmTFKp7vD2RFKJXEkiv4faerWWwm8ygAemZHugv",
  "key41": "2pgpDrZwYAroit2BBYKfnneeqNVMq6MKJPJ11GTEKRusEYWgZr6Drv6imqrVt23bsBCeUGCJWyD9FwiygT8NhX45",
  "key42": "2yEXKKi25vzUZAoDHPmGCpfW5uxWcvQY12KAW8VjrmHPpgptFysccyEW8jmQWbKncKv7NuZyEkVdgehexan5AvWm",
  "key43": "5oEjWcir1vAqZiGoejjn7tjQaFe6KHmYzZp1bsCzAuujUDYcas77yFvUBK8bjSwDnW6hr8uKAx9JLrfxGrY9hye2",
  "key44": "4j4KXKwZz3BsioXKcZBqEyqQ2QDzQtgawg3Tfz9iwLkLfQMcKjXd8zyDrC9QYpCk69SYLkqSFVLrD4CjEf5v3CBV",
  "key45": "3GMimLVo8bGkDvAmzJzmBapXVY6suBwwtgwhLoMTSEvnyMQKwVXVmm8SGMR2M5Q82pjJPbMjT9u3Vc7u8NDuoSbZ",
  "key46": "2tYR8Wixnx7Bf1AxN597FwYkZAZTLE4N45NUk9QPKLnq8ncpDb8kzHeSx6mzRQT5MrTZ8Mpp7gaYzpq1WboNRmLU",
  "key47": "2J8T2TtFCGAEbuNi5GrxejJUqqxQuFA3qH6u4AQjDMZLYDGkC9jPaGegENB2BVNkdbzMHzRbuUKT4Ho8tChsBVac"
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
