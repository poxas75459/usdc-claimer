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
    "5JXLifNriStz7cbPUMuhaxjbtSMtkkBkmqe2skx3uA9A6PZeCj3qA18ygPoNqEwvJKSd6S2PFwuQCwUoyzmajhfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dz8s7E954MSZg9DmpuFFUHY2B1tknicashD7MtS4SRxaPGWYSmkqyp2gQkc5SMB5CfPaJJP78QDb6x9dfBh8TFU",
  "key1": "5mn87quYvQSMbZ21D2mjd9EhUe4ULnk4GuSp2KCoPLZ9z7hsi3jE73btosVWrhZJWhfKK32AHJH79jGzedyRPmPo",
  "key2": "2qA69mkCPfNVWGEj2yb6BYbzx9arnHuZuixaiYhbvr64Yx8738gN7ZynkKP13YpHjo8ZRQE8zRnpBezudkccgML6",
  "key3": "5buyWaqdiZJbWbqVZFCJtbnaVmBRwRnrwpe7h7uxfEGDZz569R49pdwqkv4jGvx3dKjV1taGPS8NDbPzrgTAS3dd",
  "key4": "1aEoPRQkHMeCeEnpPXSrQEWRXAcxs129mNQ3e4xc1yRF9R8gZD2Q7CXyRcvtJGNkdALA7bFYrhN3N92p1juJXao",
  "key5": "uWJQY86Hvmq8q4YuUwqeRZDY8JXMySDn3eVRExBQsQG5Ez9bP7Zwz3oFPU2gsonAB93cGD4ZV4mmCunKCUqTTAj",
  "key6": "4co7GsZGpqJtymAyY6ko8g1UKeDdvggryM9CBGy8qU7zVX2iKhdwWb5hffXhxpmv79o92ZMzeAF26kJ6bL1TjN1K",
  "key7": "592MBQvfkk3iTCuFqjXGtNpvwcbvEWyHrADs79xKJMrkwXoMUwbhmEVU3THZSfzem4D3HYvzbjxEPFMb5epR5Sfp",
  "key8": "4aaNy4FGREQjyv2ypnmGdLHKyhnoJ27qUbems9C6bPU1fu9AKzCUW5jdRE7Qq7ZxgucyztL2i6CSdZtXqH2eT1iL",
  "key9": "2JjKf9R1VGUWAYEeqVQzGswHn3APDUdMNfTwhRjToQELPLiuNPFDD3WMJsQGMRiTgdJCf4uP2iasrcfLmNRp9HPV",
  "key10": "4kFNXp47vQ7zpQbWyNbraHJs7DokfUpHMR8xwDYpMYzd7PphMnnGNqaq1VkHg6hYhKxkRYrGgvWSoAv169gTReDH",
  "key11": "21MPhX2UsgDJ9TTgpmgUinUFFrqHaBgQFby5xAktfGgcHCtmLHBoyxkVjAwdM9q43W6qU1e962HJSFGrnzPRSPvV",
  "key12": "pX6eodpr4wiEa8kYg4NwmQSaaTggCbyUG1SDwGcwzDSRb7MQ7GWPUTr3PhBFo5NSrZjxXC6Abh48Y3EUjkeECYj",
  "key13": "3feAYLZ1TA7NfsmUyHm9fPBaBrsjEhqgs6dvaBhMCa4euUtxrCUALq7zoGJCoQuJ6Ba364tAJ225tG7Y9UT4RFGm",
  "key14": "4uuehkw6YMCTjZTCRK2n8geua6yLSd3dji4BgJrTm3rNJBkuiu9kgsFRiAxHnb4C6qDvQrRyCPjv1GPkVTif34Ya",
  "key15": "56pRojx3oCCwejuyRByWLQSzJfbGU9hyNN59agknLnynm15MZPeGhG7ivweaEvnsypDprjg5BPPS3KQEY5r1Fd91",
  "key16": "5tcMRF8aCH7kEC9UnTR4gN2911jrbL1cVWJGZzxycvy8QpNXG5HpzwgcoUoJ8duNNkhZCLsWqbxR4V92QymUpHbM",
  "key17": "3V2NHS9qpZUfBDEEAtZpa3naxMJu9TANwz5q1Yc1J4amE9v1nBmueNBP7NSurUSkKjTBh72i5mpTAUQamSgWg4dM",
  "key18": "7ry3cse25VLCbxu7fMttp5pkfyTyzMdq5ALeNx4FvFsyGVsN38S6xEUF2eXqrRycGSiUnVKYDFCEiP9zyitNMZD",
  "key19": "3tzMTiidD9zBVQKnaiVHapqJmtps4LQUoYMFEbCdEeMgMMoYaWGv7rsLTL8sKbxETJs9NafvTuHuYdkAjeU2Viwg",
  "key20": "UiyW9GPFdZRx5Pp3iepxnAefFu3NwrHttVxVGiPbeidniSikJu5bbCQ2Qheu9saC797VGQQqrHQqTv7gzHBxQGc",
  "key21": "xWxR3RrpnzkvpxbpjwYg6Jqps1VBwMWmMnsD9D4xbjGXPGGRpV74jRqeWoimghGD4kozzaQQeEdufRE8f8nsTpT",
  "key22": "BaDFS6iByyVmXodLgukVw5k9vsHELwPMFAW8chUHqRdst1UwVBMs8qaJu3uiDchExDFxf1AvtRdvJpPg2jLt3xX",
  "key23": "5v7oo38AYutHy4sxJ1fNvAYVGVrQVF5eu5UQipfvU5vHZWCBCRMvVbRGYsA1P8XhFpZwNdmo5HsXwAQZ26URwgY9",
  "key24": "TXZk2ooEpzwUT27sczVSwKafgmDBi38j1kWGiH25ESNpuSMKePouoToXz7qpN7jUGmEdxNcqdNZMQnf4vXFCyDt",
  "key25": "4ADyv7NMB5bgvCPf5EW367B3L2fRMB8Tq9feC6ipWej7etXbwvdN11mCeECRYh6z4E39iNcyQ9M3DmmKT6RTJwx8",
  "key26": "mBFibWS68TQQyAETSN2mong3o1wmy2X8mTmup5Ef8xGj37P5aAnaqmqfEavfD77EvjjaqyZ3Z6xyNudCCxY7E2a",
  "key27": "2ML5WJncxCje5LHwHSUNSj3JiVJ8T28i93GPtRbhsnkDhwK6VKFso9veAFSUAFqvFgbHwRhxk63FVctGvfbunx3y",
  "key28": "W4zykAWfTXR6wK6XYT32mxNzZwLXpHaP7FXFAWugjxCzkzH4jg4b8jWhpi5m55DzJzK3MLeUQyekB8ZZmbZxryV",
  "key29": "5qjXTFWBQqybKvkndcYgxqFzWD3ig61GCDgCCPvkWwBNXEn1yyj9pWEXhd7F13aZTACEKd15UyLKkMfysrMjz4rs",
  "key30": "3BzX6qbKPSR5q7NHyNHVk7HKoAbzV6zhUjUKxuZHC3RLRTktgYPdPVrxkiFkKcAJqoj8sM9dCfpgLvkvjsw8QK4c",
  "key31": "5jfVzRFf4jik929wAodDQA9k6SqASweCB4ia8DiV9Q75xivjxBnzyYAJvNN5qywhGo7Mo6L2RrZ82dcdeswbnMPN",
  "key32": "Fp8QirrTqfQzWKRJnAcLWf3AEvDSyp9X9yWdttS2RPS1UHeGSQt94qFReub5eh2dP5fG5xAPYmwuzNCH4JdzD2b",
  "key33": "624MtwP6YXXeqzxVaUU2vVZXZreeNX1E4TLn3fUFhbMj8mURX6v1ndeQHBdMXQWYH7gDW9WU6VpF8p3KRE58vPxu",
  "key34": "4XyUzCrdw7tL8o3FYtCG1xaUfdjKyanQTXumexLKk5Zr5iwRwVfvVSX4Qe6zkBqaP8Jb7Bnt4giTrDL5rYRGxpYR"
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
