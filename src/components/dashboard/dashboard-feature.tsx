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
    "3b5hKiSCQjYboH6KjsuvApLKwJsp1dUoc7q1Y2hdcmD8TBT7jZjrnaR8WXyWFVuzcNLxipuKsvqyLU9yoitYLZMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4YVSR7tvcu6SHfBAXZuHbHa7UoTgp7EouEa6hFcYT3S1taHptEVHHvseZry3iqoB2zFm7tdGmj5EiRhntMRxX4",
  "key1": "55j63vgHgtTDMwXEjA6ifrdM1xdb87LUEYFes2qaxJm2XYretbpdwqB9RjsFLTCBaSKUD5BCynLtY52MV51Ka33F",
  "key2": "3XywVewZCjWbfsDabG5quQkSp2jiL14ai6U1MUEMdbshC6KGyVUt1tnhb6aW9d1K5hEpRynZZHneJMPE8eXqDowA",
  "key3": "5KvXGqMU22xwiaTXzTdzg2MQ3LgbyBm3ULBcddEykAp4GrCvM1nM32aGV6fgTWvSyN5fVTRtSdyzKVG4tiE3ah6J",
  "key4": "3JdM1hPA3Ur8MbPb7svRDr92BopA5cv7bV8SpQUTvnWWtmZCSrz1NP8QbfgqkGeMdBZqbCDjcGjinZbokFguAvKt",
  "key5": "xoGPxK8J2rpDQcXbzH2CKrwTC1rTr5D9KFPHBdySvJstqYHvxypTkraF9UYhQXwJfDhstRUy4fP3krudreX59Zu",
  "key6": "4PSUKJDNYV3CubY8ErMrRhNFoxmrwdJCxGbF3JQu4wFEAJ7AkyTDYizMUZzf7AUh8mCJB6bPnGq1ytH5AmBwYJXV",
  "key7": "21WEuSpA34pELYeWQbBC8JFAbAKgpDiQX7W1TJoE4MoYQirKf6UP1qm3BKWn3sEHaRL8nKpiUn2EYGvfsWd62yk6",
  "key8": "4ek7maXRxYBEaCogUJ11ssBVmscvFF69iHnoVb1yfDA5V3yh9DDQ6DUJi66E8RGuLFcpMHo2wmSCdUkMWGzVRdrW",
  "key9": "2XuyV3ioSgRKty7RjvEdSimQjmKnvbvoxPsiiWNZSzzHkqJvad13NkUXky9PJCHKDDe8J44kQdJGA6RhysX3dQar",
  "key10": "3rTuXqVAyoV8rt2HgyBkBmi2QiiqnBPWjUBkQx6Fni7jrF68PwzKhsxji2daXZEoFDuCHcxt3FJsBDTSAU4BCn7G",
  "key11": "25fqNNncwFwUeaLLtjE1TNrD9wnfftFCTSdXqRFwAUT8SMfpZP4xLnBuMMiFQAg9DDJWEmF9hkUmaA7DCLcT9wFU",
  "key12": "uFTWts5tjpYEuF2sf2Tm5XjzLQs8Ls1S4PTdmaTVtzaByx7Q5juFs21TA5aCB9LQeVh7G5MZksiXBvhhG3nXd8b",
  "key13": "5pq7A59WEeRFSMX45tCap6ZRUnrHTY84XdTSrihR5KRGVxQkFuKYrFj9gesHrHR828qEyVtYaYqBcZSvYzZBrdsH",
  "key14": "4uf7MEBtx6XqepLCodDNJ1wnjxRr1EJVXdavZmgueM3YRt7CUdhJsxVaMvW2uyxq3yBsKe7AMxhCBHz7inGibf4L",
  "key15": "59HXkDukVdLnskviL98jRuv6LVJusQdqVYghsx4RvaE8bmHpU9ddAhaWx8zrBrPYMHFnGxpM4c8zZUDuuos1aQeM",
  "key16": "32Y666sTasBeydQWVf7AX6eXVtX3TS6Wzu4d6FHzrfqMGVy4Ccb3369hUDf9VoLzH4JrBLuDXHn8CqdWbr5aZigA",
  "key17": "5GBZtA1QN3uaSWvTcVS6aTMJAzjcXgToxEjj5MYemNLknACafAhLg1CkFfjA4xjLmvyTNk8Qa2skjN2UnBVKQrjh",
  "key18": "bRDDPzVuaRjMwE31TUbaAQuHcZgnDmB5M6CxtLbDk81dFZnn6s2zK6RiSewmzgVEo96yykFm3yJPmpiiEpiMxvi",
  "key19": "2kSBCUyJCD8dWPkYP8USSohJhdJ6DjReN9w1o4G7cB7QrkQWHgAqkLCBLx6BapkJmiLrqZLtwGAcNdTTciWXn6ss",
  "key20": "3ihNAEVDbVBxkAWAxjCGpe6uAgJACN8jrBvMG5SBQxk4AxTvQpEvWQ6RZGfZJch3GgJuV4qyUH8K2yCNSdMEEvCp",
  "key21": "5rLvQLUU2YHaTNSayrSPAXS3SvbNKtGqdSpYYPYfVr3AFrdKgVeMkshPfDViXo56N5MijGVYxQL3PNXjVeL65Xq4",
  "key22": "45QMcpEpf5VLY24FMyFd9fV7JdNPwLsLJjVXbuf7cWSJfGyTm91eAAcBukSyew28fcZLGy9K3ukvU5GezXVCAjyQ",
  "key23": "3nYvCkcWWX6NbRd9WAkWWqR5DSxhgqQs5mir7nFP1nr9xUmhDK2WyGsEUcAsxegk3BNuDrxmX58mMfdnZAGYVh1w",
  "key24": "WbuThn49d1WDTaMRAmWjNnBpYN5wFNj6dPa4tf92bXTMYBnrfG4o6hN6CN3icZhUFK7EBhjzGrWFGvmfe28wqAJ",
  "key25": "CMYqP6ebKKxZyjiPV1Gd7rHPcwvr3tYtSV6jU4qcE7cZ5jZzTthaZYy86NCzGTtbyoR2tZ4NCnjMynz6MLc9z34",
  "key26": "3aH7e5MXYeYTcQ1MDn7efuQLPKuPHCqFwF1fkk1ErjVBRJvp424QU1ggC3WKHSwPAkxYLdUj5TneFCvR9ufKrTAg",
  "key27": "JXMrAkWSg9rzL7fsm69Py4Tqdgk5a4QTZz4Y4nrZjdj8eJ1bgxcAqFsf1DWo2Wf1Fj41dS7PQzAMcCEbXKZuQhw",
  "key28": "4JjKv3PHaTDVcRyGMYbK7nGTU1UGPGy81HavP4rSGwkV1mTRd81UBW23whSXmv8sHcmM1HHrq7XzkctDukSexkR1",
  "key29": "2TUZdZQTn519FZzCicZq66q6tK4v49UJ8QEzZcnwDfuEvWhXfunbd55W3GB1AMmi2vpTTxqKrxehNGmtYsLftzYc",
  "key30": "5kzdi3CK1X51UuvZPv9GByYhcmZp8ofn6yejNcXPrdNTejjqEYzf65nMziyGHJDrsQV6afEhsdoz9wR2y4JYGZh4",
  "key31": "kbR1TrvCsKjY94fiFBWPH92JZ41fpCKuYy1dA2qZJpRUKqQLzmsUz8rMQfS78FTVqyQ6TLyw5iJQfiW9HPGt2Tw",
  "key32": "5EbjoXcNjB4CtgjJ1Z2FbcodfV3sUBAWDCCHK7nf75XtsCgKD62rrTq2W5ikAo44JeiCEaftDy5Dwd6wBkT9qeeS",
  "key33": "4FuvQSEvNsdCzHd2k9H13mEnynjv3ASE4u62j3KxS5i2kdgeGzGkrFWjdio293nv1ncHFpZaiuMp1PtREg6jLUpB",
  "key34": "5XG6PmMz4DAK8hfuteghuZCEVfm9mcientiNPooDeGTFE4QfauYXRtwFphPDX8jrth6QJ2N4JTK1azJESEs3kkdX",
  "key35": "5RuPsGKhG4KK4MiTW46LubPVjdivoQkhpLkU5S6bXBQ6YeMUJC4yKPvA298AiTfbrUqELSQ4w2uGCLadVUHu5viR",
  "key36": "2D4MkSdrT55zkaYXFVwDfNUGSzzNkAwautvDCga2287Mox8h6aaPgBtFXY6cTyZiQjENpmHtuWqKh9HS5fLEiawJ",
  "key37": "4LLyxkPtrxuUPPEvNQaxEpby8HL4V7Kkh67vPAnCbwQTYYLkbejfidAi2CdMcUx88u25qkKvbmyf84mYzwTGMsVE",
  "key38": "4HpXy15Tm6XhhLYpmYoRrTdXBSdkHY5Dg9Z7AJR7TqLjzHC9FxniVp4czNrH6z6ohy5cfZmts9hAVFTYqwFhSTpT",
  "key39": "cB1yGGrxKRPKMzW3nf6mUFB12iKKurT3xQwzdEkW2sHbYTC3ySbxVsLcGvev2SnHs6iD6STD92jFMT48UxpnJf8",
  "key40": "2CzrUnC33U5yyR8QBDAQMaNHDSTNnomSaJAMfgNYsawaW6toqToQfitTfny9uq3u65TNd6orFPfVNfoA1nbWtcb4",
  "key41": "5Edjn4kCbg8HGV4Ra3TqhxRmSuq7S5uzesPTgAA2N9Vpui8Yug83oxfuvE8WjgyoNKLHfrp9Q5jysTm4PGuHH4tP",
  "key42": "4gkAg92VP7PodUCo4R4x8fHoiU9M6Hm8B2aL6myyNW4X3jFyiXm549oqshoZ4mLuULMVyznHqoCqB3o4yXCc3sry",
  "key43": "38TrpHDzi2tzPdkNXXBfVerw2nKAZzuri56rtDkyoPUuuBLSBBy59fvjnj8ViqbJPb1ytPurx4Vt47zKAqUxCVJK",
  "key44": "3jxdZC1HrYvriboRuqQoQCc69NiWi43eLo9YbZFpcC61ELi9AP2NnnKVtVeJ2sSmaCvhUsAcCwn5J5cGcVt8g86o"
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
