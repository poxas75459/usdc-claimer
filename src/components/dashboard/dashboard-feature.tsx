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
    "5tN9UrQ983uLRoKRsp7qE2QMEiqMrTTZ5epccFMWUXCDVJNzxgmJUce7rAHWpyMC7Ps3HZM9yYyCu9ayWyoeCXQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kTY929jQF5G2Mr4pXeiwHXrQnPHKbmFhTK5XVZo6NXggSK7y4VEMupfYDHqN7TrSD4AroERnaLH4gfnANFWeZSr",
  "key1": "WFmaoKbE9ZcLMc4BiHXao96r68nuX7YQDf85ipcpQUqYyqs6k2ybDp8hkyDLz2qCvgTzm24SVVqv2ZRNBPCEd1E",
  "key2": "USks6t55p83NY5GApLKBL9aXXumgLsfS3EfLAsTnEwkaYgaDNYLmTqAHfqCKFqqLhBm6Un46tfNK5hu6ZkJqfug",
  "key3": "2YQyFyY7mYCE8DhCMe13zn9v5gQWxF1ajWaQKgJQuNxokqzzea19pZWrVLamBanGWGVxcJoVD7u8TzR8fRrky8LR",
  "key4": "51hzub2zqrac978MBrVrk5vPQRrzZ4cBfCLVenHQ4LmBAaJbMy2QK8TfzNM6FYE52fk7a5K2HN4XrUb16EXaSJm4",
  "key5": "2CuCS9vdH8AyvdteVDc5CVoyiz8rLYXsApNmUmrPuBHN5R76ZQADJwDKWkc6Beh97NeF3Go1Utv4uYGsD6uxPgn2",
  "key6": "2MnVJ6Vu6XCRW2XoFcha6aYgzzNT3KnnUR6hVDxkx1VN8suaw2UEcnFHcKdAoSn4pMHEtuTX9jsTW6oJExEBugds",
  "key7": "o4aWa6kpEwqKcmuUa68YjcaasafgYJrJLUtTzVFMXtSGft4UuF4VdGwbS8BJQuQWBvLgoRWdk5qGyEX7czNEa5f",
  "key8": "hjYC9SiQxBHLNfFg3v8h9FFFzQCvWKHPkpmMdrLM5eDWmMwPFnxpMnSKF2NFZwiJk7uk84zr4jiR2xaVTUHQr5t",
  "key9": "3N7v6fXNC2WsMheXvFDB8uMw7DRQVicyJoMnCP4eY6bVbLxwdXyZ1LTisiSQQ2S3vm7SMaCWsroJ2LVW3L3WDFYh",
  "key10": "35XqpGpzJF1mgfQKRtgLumQsNCP1TsLZAoPF7Ki8KnnZmv2Q1QntTB1QqrkMeiBpRuJabyugmw6PNP7cNdKVXcRs",
  "key11": "MjaJqv9SqkX7dNSjCG5suujKe2j11F4kHU9XCo13VQJDWTGf5H5PhP9WZQAGxXfSDFA611v6zBN25yoBDtNTUsG",
  "key12": "4aUv5FKcqwpRt482CxzS1EY5A9gj3fZk3mqhbc2qyWetnY1893Nw2fgF1LMsxZmFFKtqe61mhddU6dcwh9aXamHh",
  "key13": "64y4KUHM6si4u7dPLsAduHsWhSKwmrtUhzGjTsmUHHcSUqfPyraJo63y26yFKKWAxL8PgroJ9b2gnAXEz4oKD12w",
  "key14": "4BXpy635hbhpftsd2aUh9FPp28fWSTWk2aniQZb6XUx2aiacu6KR5mjx5buVLtC9BEdsm3RuS56QfVYDjSi8VeuL",
  "key15": "2nQCiSdVvkuvXdKqYAByAnbPET1eY5GVjC1hXmm4DJ6RLw1Vgmyudh8Y4ujGGv88wGkdSwH6JWFZYyMV7NEEnFgt",
  "key16": "8bASqQTz4u4nF5f2aJUP8SAjndf1GMXFPWAL4gcDa2mZbU1QeyRHNbvfkeSh35NWC4LrEVK28Z7wbgDxpK8ZHmL",
  "key17": "4kQ8j85Lt6cvmLN6iA7PP9nV8tVd4EX8dtvgsE88FrCHKXPx4KoQLkCzQCGLpLuhcKufE4yRExFaXDRwVoWMLURT",
  "key18": "3rnYjo53Do7U5h7YTDVU12U9eazscRY8sGuJC1PN9ow1aY8GcCNL1hY7hfaVSwRuVx5r3DMZcBJ2b7jJNtoixNui",
  "key19": "3cdRDrSFu3MZz3AJn5RVcgtCp53A5j5KN1PDYQ5tkE8Jg35f4LG2FosjaHqy6rAqw2PBSv3EfCTmysEN2NtwnA3T",
  "key20": "2tCsxVDk9FT2Hf4GW52ka2GAowWe5RKayURjqfbnp7HZk5sGMAXNdTizfJDeaGWKms4FFAud1w8x6H8CfH3QKDVU",
  "key21": "5B75rWxBMrssV9dKtRnyy2vhMEqGKqgn7BsTF6vTXQdP75pFK7zyhmU7MywJ2reeyUEoe5Gc1zZdi6LJwzq8rgbo",
  "key22": "5QUKa7mGGv9qyAyoFz8dHELidDFm4Yis9PsuFZunJ6Fwjc5Cy8m23uv6FnVEAjpFwFR75aqNLFjEfnceGvMa1WTN",
  "key23": "2T1NTRWXowwDCnJdDAitCBwtM7HU73FK6YrQYx6XFoj56nArMrzTD9qACib4iTdN7XJ3CZXPgByAaH1fcSYjzuqD",
  "key24": "35UtFwVpP8cDJXUiJXWxVyfsyq2m8rsZkf17ku2Umk8bYR1wNshC4V6L1LR5DM1aZUi12Xgq56AbkbDFBbva8SuL",
  "key25": "4b2Fvw1dvHgZXGaubUPYLXT5biHWbgtaCzuc7sx4eyR9VUx1qgoAEV4AwoJ9QdT8YsCMDAmskSCFQutik5F3GxRA",
  "key26": "3AweJbQSaPxFEzv54oUz8PiEf28abBfGStrFYGPJpD4GbD91EPeXMJrMtbatzRpdtMkQ7QnThCLc6ERwA5Kyh1AJ",
  "key27": "Y85AAhVD3QUx9jRTo2LzHcg6WEYBGubk61DvGadzgyZDJcddyHDvMQDVoeDYdmpF7BAdZeyLv9Ub4S5U8vbj1Rh",
  "key28": "5UgtRRz2u31WgwwcVZYDgmRBhHKJeEEWQqnJaBEDUrtiCeuanKKDLw7qX7K13zhWtwjrCDD6odWHqFGk8VR6KFfc",
  "key29": "udm38q9wcAL2mjSL1MEkRoC3PC7qjVgZ9UEppKTnoh47J7Ao9jfbqno4KSxyniTtKzSoGZedSJ2wzBCD1eSQovy",
  "key30": "3XyLHBFuqWeQDPuU85UnoQppRzkVKW8PaZZG69KZf3GhoYezUzTBmfRBqLyKErG3fgKre4RruSpRZajEr7ebnTo8",
  "key31": "5KdKsEawJxssPKbPmjbMKrPeTnZtebXseiUCYNzBTb6tfzjtJMgSLaewHkLdmayp2SGgZSBexXtKcYMg6WTjaNjt",
  "key32": "3ainZzVTdNyDiT3He9vu23d6NzscydqzNLoXeF1dV8yBRBSmUX2eivvJ6dd7f9uZuDubAuc9zM5txetRM1gbFUpx",
  "key33": "jY1U2SbZEQCrb2g8Ek227JTKryK6ULgiNZgBhm5ZDy6rsJtC9r3NThrhLuSPW4VoCS1wvcFk2xqdEcaJWZhou6j",
  "key34": "61PsP5aSU7hEobjc1ohoDwV8hfMVVigkqUaJyeirkZJD4TXgaExPDyGpr8CQ4KHF7ekZqPJ1wQ5EYRZhHjWuDTHj",
  "key35": "BsvNrY6iUh7auMzrdSVRi2PAofzAfgSMxbJvrZ783v5WsY9GVv4zMw6dEf2i8LoPvyooDZx77L9GyKubQtJdn5J",
  "key36": "5K9SP6uuFm4FTXJLUGvZaRVsAVYR1DFv75NWZKkU1dPqAB8cZTvChjEEN6ntejEpe4toa1maa88dM9sYVcZvTZbu",
  "key37": "57d3H4wVgZ2R6Bf1jhV9X9QxuwE3xNuQrTZHQcmNbnBCsYiHtTRvopvsy9bXiZQTYc76q13KRi1kijEmfppRWmLq"
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
