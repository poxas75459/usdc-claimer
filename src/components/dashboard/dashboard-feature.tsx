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
    "sv2d5YN8fPp182ja6PnuBm3wyLvSkMMTSiqa8Qftoq9st3sXJ7rz6GtsbnCgnitoycD5r6DFjf8H4rcpWuf3e1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVbjaMJseU8AuAy4DHEjwNBjhMixrpw5kGxSobS4qF5rj5jNFjXny1kGGh2Ax8N4SHDnEFaMZzxbhFULkgYereL",
  "key1": "MuueVqKSuUeZ8P7BtpkEiai29pT193VEC7AtuexnjrGu7opHVyuWFpJNWbQaoGPk9AMzyp3V6dro2DRgn6uCyfW",
  "key2": "49gangMR1hRmmQWke58KaR7S7YXMyTdz9XHoPykdH9jWcUiVkZPFBebQa5yYoJwdat6Z6maQShfA8AGHaJg3cbwA",
  "key3": "5cwFDsavoR9XgxZtKwCjeSZCVcS1rSszbVNRkCWQH1BUZyd1p9ceak4nM4wb3UEjqiLXQaa9jadhB8ijbnCYdQwA",
  "key4": "5Y5iMg6g54ZC7KZQi9rEdQKh8fqZfHZcMRxWCo2sHDXJoh6JV4zauTpYfZ6CNaCgggdf9FriGJN2DnB6SBmAVGJM",
  "key5": "3qXTkBtsDAZGhEdwTRQ3Rmj4xbav7s5wLLGZhC2oVVNfNvq6H6dm8mFq6qujMv1Gv1UhUhzZ2JEaVPZtonF7Cabr",
  "key6": "3CLdL4uPtZvENiRb8qbRZDdo3Hg4KExvQ8aM8zpaDEsz2wGEXyajbFK4LbYMFks7hVoBwLonVW1kSfiZDPE8UP3Z",
  "key7": "4A6TLQgEmZh113dWAd1TtkXoiH9kLSSb9UTm3oANDan7itJiRWXaKr3HdeXc4RtfCFdsdAe7en6K27HqPW4HDNa6",
  "key8": "2Vhr8BJE1f3ga3VhP9RYwg4PHkC3xfjMH92ZRqMquoFXRXpMNse2J9GEBKx1qA6EoTaWy5XPqYonpBMDNVFfN1Y7",
  "key9": "Ta5epmKykh94D7tkfSqjAzxvWkajVqkdvTEQiNTqDrxB7D1J24WewQyCznK87kQPiFJZS5zzawCzSv1xe3heLfP",
  "key10": "5zqSHkcNfyvtaw5mc3jbUA5Kkf5xRz9hiizM5JntXYAedf3qicHzKRAx7m2zUPUPGA5zSXoK6Yxm9ugbBeEcrJ5d",
  "key11": "4Se1eDHfrgpjQdB37nSo5JBS3Krni3Xg5pWswm2RbWfaqftcMzv8CwvqyXXEuibGXFpdXjTHXf2zgLnZAiKpbRaJ",
  "key12": "5G4Us973wX4SqDTqi8ecL4SCJLAov7dtEfdMKsbcF7Nn1NXigoampeNeHEdvHYdH3BRsNpBYaYvvd82AbcccYUqc",
  "key13": "4AQ3kvvTbfgCMhMCTyUvbMiZjdW5gLNv11eB2YqzSc8JQjiGj3zL3Pw2NuXsgpNYYPtEYQ7wjcttagZCDC3EyN7e",
  "key14": "55A6xi7bT8662NXp642rH6woqb7upHdBYWz1FrYuVwDrvXNZYGe2A3djkS84mrM3D3SdMcwk2NoaEF1WzSbmt8GX",
  "key15": "2vub4CwKsWvacjH1LYFyx2D5TzMr5QKU4zwBWs42dfMQb8ap8WuS5kaoyYmEtLFxd5TeRczTCDVjRw11SYjKTafu",
  "key16": "3HAYUrqT4r1R9yAkByP9QjD3s1srjV4E2qMPdSWmx9eqdfnT9Zu57Lbk6RZTNwMaUHZGDpTqSe9Ux5c89dzEwdSu",
  "key17": "4QWcLgKpoHuZNCULpsPneVQPeiyz4GdHhah9YeXxQHDWzDbXunnUhDi2seHQZc1xWbPQi2ASwhcPwKQF3Ki6wzrA",
  "key18": "5Mmgyvb9JyB1hhx77G7MpRL5Sfn8G1Ztba8nj5PVH8cfpwFbURrcnRiL7p8dP2rbaUjkaK6BeCawsnWZGNVwPXyB",
  "key19": "21yEFsv3bct3zTgkrKPmn3Lt4LTeoGjVqsHXthpeCppastJmQhFoYHn3maJB6yaHGu42V8jw1tCD2Dppk4xXA89w",
  "key20": "2xbscmgrL58pTPRYysSDgYdEe2LNK6wsh2ARkdGBVWomWyoYE4cPGWd3BcLsXDBd5eHgYp4x87UgbAoFFur9Qo6m",
  "key21": "4Ms2qYgb7JM4YQHF3pse1m1CCAqMMuNfNyX4ZMYaxG3ke65QNQFoATHShi6yYmgEr2PASSEFAfar8esSUEWHRTGb",
  "key22": "4zzkdmWjCRgmoY7dDRSj3TAs5AgSeajS6X1eigADNbRz7PK8YptCwoyXKRWpWbokSnvZ8vqRXTvW1tWvMPMisTbd",
  "key23": "2vx7rPn6sXfRzNM2426Uk3TGXdXYr6mzhXYJJnUVkdxD3aoFxfBMynaS2WQ2Ctou9Sy9FQ3CycNwhqvARG3CFfMq",
  "key24": "4F6wfzN6nn2go6xVVonYMfLYnP6Q9dN4tT324wcK2UChn9QXdi5inBF5o9bvrMsjP6FmwWgnhDbGsNs6Y6HKr3xf",
  "key25": "5Fd4cX9zHjiR7EWXYVcEzfxsqXsjUzLgZVR55VLvXuhc3Qz4NpgRGV1APPoPjRCZuREVx64iQJvS6UB3okDcHuhW",
  "key26": "3dsKzJGwRsUB3ZjLDZBgJfCgKg25cbnuE7xQFnU131J3LYKGixjWuhhJjgkjec2Y5T7UpvTmJpL2sk4WoNa59BZt",
  "key27": "2AMh4BMo2v5obB9CDc7iBUPLjGDn99cRqZ3Z6vvKMTkU5uzbCECaPZ3RieSbkRwY1eNS6UntRCTudTAvNbLpSMTN",
  "key28": "zGgUjWMcKVXMfrQWdsMcb2DRJVXieQk8DLuRrdZXhHkRdcJ8D79gD1kBpw87iZFSFHUB76RTvuTTK41uM1yfG6m",
  "key29": "2cniTJadabTZ19wCK5gunhv2dmTiLiwX8DRZeABCY5MyUjXDrbN7sG81RhMJAmYPSjpp5sP8N8evxLdfmasiQhqj",
  "key30": "4F6myy2jH9tDd9zmdpLRdzKkAGqJTcU6TCjQzeZf3nppPVYj4ic4Ts5GTxKHgUDXkhnQ44WNRuTvXJafqMbAoqRW",
  "key31": "4JJr5RUcuojPp9TQFcDWtQRA3Qe75LEQHbvr1Rbj723LRGXLBFFLNsVDERVx6TBkgeAXfAR2fjq6RrLUAbaWUHmS",
  "key32": "N5npVJLkNaMmJxLcbHBe3gSL6PWjmvLpLzeEotgoCuvGHXDCJESrHciVY1JBnd7JYRDf2QY9CWSW3jK8SWEdwo4",
  "key33": "5SvXThKYotCtG5BmBc8W5mv6LGWjkGTBXoVBqMTVgJ6FtJLGHG45tfJ2a55pVAyviT1qkC4uv2jDBKmMG72afKz1",
  "key34": "627aTnHsjD1RTdFNkPFjPc2S9Ak6arzGhsSF4PQb5o3Xi6SHrT2oLkD2d35ANmfU7h6wbJGqePJ6QDGS8xKUCWrM",
  "key35": "RZnkrVwWHzNVLSMSNXTkxZ6nPMQ1VGnjKVHKyfyPxPF5HUSsGEQwpXXMYajKhJZdn3KqcnDuSEKR2twGWfHUGMx",
  "key36": "qF7Y2VuD7eC8WDLBNUNJZzTeQhZHZoZk93Q8NYv8c8nhgAmfiA8uSn3p5hh2xXAiYFQWwBMq24jASFVWjg1yWGF",
  "key37": "31Wp1ARKBWSg9HaR7sekRHoMmtsBvxLEM4vyKSsmguP7ATsoeNob9Mtyvuof2dLmqxoKw5pQT78nQGb22F6TTMkv",
  "key38": "5NfbVySWFbCiLQt6RKko13kUziJwGhfv7GDDoMrYn9TxJ8WngeXxLmnETFGQXQmxj7KTAvZxGrpcJGB6zGArMNaA",
  "key39": "3znog6CSiBDbzWQuUK175yV6RcZCenRpXNwgSdLWSQNY7LLPttaLS1CdP3CECrZxPZKDEmKsvC1kWVELkUDhEjXn",
  "key40": "2XYJrK5Me3437qwuSBCy4YcZh4CzM9gPm7NUm28htbsgCmfAa5uvJTa8AP7uYA8eiZcwNij12eT1x6ocU5jKw6M4",
  "key41": "3rd5QgiNxagSwSMSJQEhLbh3FVrfDmUbfXmZFBEWB9HxASS559H1NhVoiSnm61B4TFCQSRqsRVuqad5pRJQfdyK6"
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
