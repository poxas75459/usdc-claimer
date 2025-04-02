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
    "44ZghVwrb5dYpo616ZDuMGtNMREw3BfKtr8iPot1dTLyffgHGUnErCdroVJMKE9bTFwBAj1senHNZp6vKXMqScTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWp6TK3wwFr7CWaLC8a58SX6La7kTCqPSit8paHoEprzBUZaC2iHby7Uhx8r7PERRPVAEndMzDEgsKo89bp9Mff",
  "key1": "44kQ6FiS2Wgs2F79mHxvmZzQZedBh19U6WL9eXUv99wjHqiEeQ2rrw6AkhWzy4JfTqymUoY1qMVJLhAfFPNm2ZUF",
  "key2": "62aYkjKoYuo2MJpzDd5bD94UtxSFmMsHBLAN3k8cTxEkXvQvZU9ksL8wYNuNwyYzAJc9tfSFcrdLRtuvLFksNYuL",
  "key3": "4NkwmA7gRwxcui6b5acYaPBE63tGXBVnuDcwvApH6ow5MYAm21T8DQSDAWJijLdwHGGjWuQEb3NvgtFSxzsdZsM",
  "key4": "2K1y1so3vLTdjxXsvPRXKv1hQPZVVrduLLjsmfLGzJ9gm6UuJKPSdMkkbVc8AdpKXM5FN3EH4Ckax5tay8R8sBCq",
  "key5": "2CQXUdUmKZAJMjKkiL9kXnqAXZdqP4WjvFxicRq3agCtt1NpZEvJuuRtzgS5o9Gay2XUTaULKgqBLESHBmF3njne",
  "key6": "2rxNuy5YzmekK8AtgGx1AhDAE9mLvF54kFnuw722eaS4xB9EAwFmXL1LHXp62989fWT6Ywwdz8dDzL81hi7cK25Z",
  "key7": "57dU8nSLu1x96TTknguC1qhcfNgMuNzx9MRSJh9mYfsWJrCCNjVKwX7XdggzDcPaC94jbRqV4MtBnrW8MH3hYFhB",
  "key8": "2i9Vj3rXSfQSUj3htVMBVVBEqpsbRYFMh7b19JUyLopJYL3QbDXGnQWH26DFwcQZRdc8DfRyb42pfi3STnU7eu8Z",
  "key9": "4adtPodJcj4dTgEhFXpdo85etxSUBss5ic86KzaBtqh6LtmuYoK6GYkgf8pUiqchBtaGDqoGt2qKYvJNcUtHNkFS",
  "key10": "46SHJJSLK2dHBD4fqEQv2B1wBVoB4oD7zEQHkRXnvVYa1NuAU1WhnQESwyBxrHhmKuAbCop9Y5mTVy1qj7oqAov8",
  "key11": "3HVXctJnCNDXAPfD3S4HNkdH3GGyLGuG7KcPAFaQPHpMsUNsLHbEsK3y6jYFc4hdSJq56Ma5bFeA7D9MsU7pJ9vM",
  "key12": "2CMGGg2oj9S4y4K6zZE1ceebBd2WfumNC9jEBKALa3fNNX1GBmuwQbwX1wNJztZTRtwhmdzXjPfRqLVuD7T6KCNt",
  "key13": "JKnoZnHaquSzwJSt5vdqHazVcXXQyQGNf97SZdjZsSqWSeW4GkhsWWX7zVgqoN7ApKk7UtVeEoNidboHT4ZDd1s",
  "key14": "4mQk4eN6r1YZHnCj21UCbFkej1HtY7YkwzoesYjCcZc3a2hmF1vnwuYipU4cxduMvdJfmXWUMEdGGmgfwRCTYCF",
  "key15": "3vv7no3vok3tdbj2S3DEr9oQQWGrmAwJDNxTCZhHhoW3WqcLjq96c2WU9tbNV5zrPAct7jf5jHye396CGeoHmSyB",
  "key16": "4gZHEoCY9pHeK8ivtke3LNA6XgNVpN5RaE7hq9fjqEZaJJCmHKSui15QHcXMp3AzyR7wC3eG8T1v3oL3ikfJExvA",
  "key17": "rZFiQNdDcYiLDjtFsE2QgA8K6UTX7guWWLfkgovwq8846VWnCYncNeufqMfggcgNGPey5KTx35xbpmY5JiZzWNM",
  "key18": "4Zu13JEt6e7CKLTEiKQnTzsnJJxb8jiH4TooqAskcLRcK6NB6CB9HsiZRVP9Qshf1id66iFn7q5Ro2PkRoprfqd6",
  "key19": "4gMpZDxSAVrhrAEpy5GSF3a8TwUrhG4qxaAteYCQGP2q9od8VT7PSmNUGhWaHdjC351QsErmiS5mGHKc2uaqBLpx",
  "key20": "5Aoycg3sAg1jibV7QzDBN2kY9x4B8BW4gtDr2zxpz3jY2bkGKni1Q8ajaeJF5ubSVKRr5qdmP3oYudLUsNU18vAu",
  "key21": "3AcyFRARVfL8zDNQ9HyhLJcZMSaRURNK6kNvYRfP5mNSLWmahK1MZzZmyGwRh8uMEmwrpLRdx7gtJugkrxHAucCP",
  "key22": "3Uj1QFZZeTP89r5CQdjq7swBkMXsPQZZt6RtN4Aya3AnBD9HVVVrqezvigTbxTVQf7BYYSJWMBNdQETzBHThNBGC",
  "key23": "4FX2bPbMoGhN1Ac7gS79WnWV4wJVnexvMjJxjKRTQThVv8Gy9FKXj1uu7L4NdR6t53yUUYtyEG9jrmRfgopVpvWb",
  "key24": "2F6MozYTRx5z4ZU2k7f8EvEqZpVgs2QVUwKWPEazgUC8MARoaywi43YdHQXX35sYA66tWa5H6a7g1YcWo1MyAURo",
  "key25": "66b2RTFovKMPGzZ7DdjvsFDRjWzGu1RLKLjTGDNAd4ZcZZSmdA5UTsmtUsjHyHg5Ly58AezAtF9SLtbtdvhForki",
  "key26": "5hAxqqubCSFKPrmbuy9BDCc36R7im1VqVENiytvTaay1J1hvucjE2YLWQf4DLPdVJCXiQofKvJLtNRZG7d5oPGwq",
  "key27": "4FFgQZZBEjQWugAW2ah1tgAwS78DP6Sp1EfSoD56KBCKeRioWW6Z6SKe1cxVhmFru7vqFUFCVmyo8dGpMWyV8DG3",
  "key28": "bkhsa7wFNRginKhbK99q8BjUVkrsr6ApyErXdVbNtBABJxyDDg7D4RVFgouMhgyJurHH2VukTdrr44xb8bNNLuU",
  "key29": "58YNqbcTZXCTbUAHAiUH4PD1JeCbbmcWfX3Cd67fZ5JK2WjMkmX1DjBh9sAkghQQk1zUZgqsSUffuyU8v8fAWQdT",
  "key30": "5YueswNGvLQincUY8utGgcS88NZJpDNJvMiwyE2VNEJ5ZFS4bNBPP437nB8WgDRSUmPHdn3afs82for39rPKyPeT",
  "key31": "4qpnGoxy9hxMW1rTZ2kbRfgk3Xrn9r9QsC7dVwb4PH6PECsYXq1bkVetiybxeBzxKS2LF4Q7vD7c6hzxE57qJxHd",
  "key32": "227vJoY9wAqAAp5jLZf5rzzPkcnCuCL3UybZyd9sPwwSWmuoY3dnJxDSd2RDkEKZsquHTRpdpN2KmfUpPXDvbbo5",
  "key33": "x66Ykf3HS625F4z8h89qrZzqFwpkDssNeaKyADHxjEzx7st3de2nXcxUrGyCe8pZHGuxsYqZP7XUoSMZdxeUgX5",
  "key34": "2yo462poN6gQ2NKC9LM9tiJLiNEURgNvqniprHKFAtWUXJy2gefCpjHMofGG9qwVQGnQ3vDetchyrqvGKy68MDgS",
  "key35": "eVwfvxABLQJ6zoD3iys9MVJkcuUFdK1Wyg8L3tbPzeEE2CmJbT3Es8LAX1mWqeyc85j1PQUMF1CPLpTWXoYmhZW",
  "key36": "5xtgfJKxM3876MbiHcZUNhH6FpcvhwWBAxtHY3ZCkMYbrTH7ZdMFuTztLiZ8T9qxD1fGCxLnRtYxHqvCY7tx69uT",
  "key37": "3QbARJ6izbzTpjUaJ9cD7ZsR57H8E7v2cPjjwUvf5XBFy89KRhF9rPFnXF18LuyL5GofsFAKuc4E7xKB1wdJV1vG",
  "key38": "4aaEiekkLbMMBiikSCmgW6Uw9RFzBqMTpmqEtHFWWT2mQSLEke3ggbfnEUEb7ZYUnQtwJw3r9r925953SDpjfjRL",
  "key39": "58ARckT9zVQx7Vvmqkg4M5ScruALttmVZtwzxPwUYukLFsLHscGSRUpqcD1KwdguEQ5nPqudqdphvGgh3tgXfaro",
  "key40": "wT8bT3aVM8yf3veXwMvPoipVUUX9RruKpXjvaFzu8wGBS58C9GXH91sGtVMFBDXCW6MASXjTyFRC9ogDn6hJ8Us",
  "key41": "6584Mv1TDGZJpwU9uvsGevokaePw4V2JUqzsR6KUcibbWTyxTE9M7biaMBX4zo9QeaMvJhvKyZdgUrQdbzqFcx1g",
  "key42": "4Ycna2rG81G4mVR66HJvUUjPXTATiN8UYau5C6txToXx37gatEKYvieKmKHwaHAPJ9MyrivgGiDrM5MQVGN4XNYd",
  "key43": "xHJaVJoFuy2a1ZkqtXDh3jSDR4hQWBBbKThy3CP8vJtsbyjnQx76rb9TmkY2hkhu4FcdVdHSNRmMjB6dtQYW2MS",
  "key44": "4pB4nmko51VM5G6MyZywrF12mRuETbtobc13LJjU9w2G5EqupGpdDiHULdUcvA2KcgkZ5xXwAgCanXGqGBpw58Nn",
  "key45": "3fK835hq88bNKjfazbEErTuVPdJCCrF282wZNtZ9bG4dcSNcm3s5GaTJBMLRJw9PEmh1deebZumoRpKPny3iQ823"
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
