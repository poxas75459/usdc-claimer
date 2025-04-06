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
    "5xS12GbKhwZedA83kFwaGDxrgpebyE7DLBFzSMhoiaUGFXrJeLojWE1maycE8c36nuVyrvh9azyqyEidbrNYMFBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4mWxKpEk2SyBS3XpHVyjY1m359kvdAFCvHRGFN6naAYZw58vSQP7H3UFrfFVKAJ2V3WNVkbg4QpiywVJDM8375",
  "key1": "2sqBNg2S2biCBh4n9HmsN3Lb5GiAgUGFEZjApNzmCUNNPySwCLVtLqwCfP6wFpp1ocdtoWQVxGpCKsN11cNPgnpb",
  "key2": "hFEe7dZPXGRDkKPmzfaUCytc4MQUybYceDrXyvmFMVM9XEAjo6Q7ED2b26Xf4dTVS1rQ8ryiEr2oEmPJz9HNXzR",
  "key3": "4PjmWQQ8Rr8QSiFtwqa8PfzZwrjYx3UTqoQzBc8qxLaovi2UJ7mn4a1LEqrXMTLUK64H85N5oWoVCqtQ7iSNRYCc",
  "key4": "4owmvCgUHskruLdYNpx3PW1ScWVywrpBdwDhWRvqL5wEDW6C7qtGbEKp4PDbHCSo14jAYFzxm5e5Krb2jFe4FUFj",
  "key5": "4UBSzW2qhSEaTH5rBJxFYkhvXfD2Ep7xJxX8Vmko2zdR7J5TdFY8NyGNAcJhJLnX9pD1JrmWwm9nS9QvFvnzhjm4",
  "key6": "WSV3tjmpQmdg62NMy2bVgAEidpW83ToVJJzA42G4YUrNpxvkVriWMKWR2uP24Q5HxrZzNJid28bzyxjc8p2CKfF",
  "key7": "Uqm6N1M1zRxpLCv8Vqdw3cpCH9qRDcyVfpfrJgsA4PHMpNjBhA6fkG5txrqadFY24M5UdHjYw5tBPwLCwU4FRFM",
  "key8": "5psDjW9TyAbeCT4gy9Jr2zZow6s2TnVe2EGpLEaGvbsmhwTcm6oXXTvxiwzGojuKgoQPSBRqqNKeR53GEznu16KY",
  "key9": "3crL1VB2YTT7HEPL2nbVHoLnvYeZbbJ8woxs6JPrsAk96aXmtQgqpqGGqm3w12GZZgWCnsyREYSrzcFR63CeBXYU",
  "key10": "37GDtECgJck1BRG3tiLjuoN1hebkNdvqk7cpiL48r1qdUkjLvW9i8WGpgYqjsVXxb5spLLuptfmF543B18veNt31",
  "key11": "5F7KHJ6wCpQK1b6xZHfnEqXaoDa7rJuWWiRxcNCxhqk5e81AZv36r4Ayry25HfbWhC9LAbYajf9z78hebuP82xtG",
  "key12": "VB5pPdc1KtPvxKux8MTiRZMtaMbXhKQCNbh1gUSf4ZsT6AK291sUDKocae46WwFAmYsHAFvUwtWpVGN4sULnzsC",
  "key13": "2xdqhh3yS7VFh2g8WaiGowdYD2F7psnXGfaPeHQHjMUvBWSDNM3xBN3WmtvGz62mBWoY1und1TeaidgArLMjQda3",
  "key14": "4DFdgpwUHJH73tQdgMvuvwTQZTRZ2VS35AxWo1PHX4CVSKYFUj7MBRhiBvBRC6SoV7n1UyFCTMnTtKwdGboScLC9",
  "key15": "2K1y9WdaBna1f4XE2AACKWvpveASRTmprus7WpVUa5vRhNH5BDprV7XjfakCH8ANa58MKoBcZ11XjDpseAhpCrLc",
  "key16": "5fMvVNJ8MGLr9fqm2sogaJAextQtiFCnFEK8dnzKBsPsvVaoSBiXBp1LvCmUBCfmtiyv25GGYu4zx2wT3PBmFwVg",
  "key17": "47eghydDgnxZwV4AC7HwJQxYYugz2tYYZrvmWdwRdY1dDpu8JW3UzpnNF5p9cUXBwTMKd9nzdRecgVFV6qGpLrBy",
  "key18": "WfWjhRx9SBwYaQ5GMwFZCNdmLPAxk295wTF22rwLVx7FbLKqpo2J7YL1RVtYqzT68nGeZFNTGbUk7whYoduSnje",
  "key19": "2w8zxZ1r7TJ2bWDwZTk6QuS4aLUaMskvzxQekq5DQn1eXRyfn7MxcGsUC8FDTZY6zBTB7U6dkTnQTRLiWKwnBcuj",
  "key20": "2wFJDr4JaswexGLSX45ELiXGhv7Q52YNViyqqnzD1rBd8VW8Wi9qnYscRhoM6hR8A4q2ZewkTbG4yFs22T3TRLs7",
  "key21": "5EbWqB6FRCDpxhKkWPWHk3Ssoajd3esK4yRwdWH6wP8YEwmFrbDx1YGQKPYc1nnNRyJLuTSTT2mL2N5jpLJhkHtW",
  "key22": "5jD6ZQgyqPXFLaK1uF4EgLFinJMyqJdUAx1zuZ2mPQJsGbZkgWvRfWtmdxPZbLBnWGzPFvnmfyrL2DBexUzi4Xhy",
  "key23": "4GN8e2dkjgqXpTGAKew8Rr4tkpou2147EmWMC1LRSbCxqivejBXnbc6FuTQWkfsXruYFGEUPx75T88jaY2PTRSMr",
  "key24": "2eZ4Hzp45zsZuXcFGGCxgraxfiKRhWrfpTn2hsK74TgUkdPeZY85mrcDjPn9qESf9UYDK16HpuC4sP9cgSDXTK79",
  "key25": "5Bra1S783VwE47QH8EvFj6oejpVS7ZeueVekWbFmnVx8C8SkC4FYwNTfmX4sjNp5girgdMWc3Ub982aAb1u9sxX8",
  "key26": "5m3ZyiDbFs8ncgAqej5aJ6QAhdwUeoay1vEX6Tqn6GEsUjYGwkSuocvS6wCQsqVrzDQkiRmiCuqYce7FMP7FsUiF",
  "key27": "2skzDx1TumsdCVwAZ4DLBAr7o4iRajzdgTdiGcFbgFPQkCCQWCAPw1PSErYkRJNUXo4AJvTi8rM9hiMN1euWtt2e",
  "key28": "51QhhHdLw2zwPSiXRUritys42EBqYpiMLD7WHixBnNUi3Nfd1ivaxJjAFVnRreM68f6RQKaaUF8wvf7ZhBzWgNXN",
  "key29": "2QoBcxVPDJhdKwc85bcumVXHSX7tP8NPh8KWjYFtWdHU6WVoW4a6toex91Fyen6okhEHgHAC2kmM3NWxPAY2Vkws",
  "key30": "5D5bRsf7o6ThFo1tiu1Gq7JpPsUKvYoB4j9RjzPxrfFZQKMXWYovKzDsDpUmsMcf9pnB377zuha6735jU7Xwz5Ht",
  "key31": "ygbR7KpUANNh3q5xfhshBSLaTiTzLjCqbrC3n6jo97XQeYWtSTJq9avKdF4uJm1UHnqqMRCvoZVAiGi1CJaQ1av",
  "key32": "5MQiCGBuc9EG8TqhCWugr1CkGfiU85wpKeP9ADnUHwe9o65q8sbUzMbAW5dJ4rdQR6ZqnnCyfkEP2o3xffGpoof8",
  "key33": "4jxxi3M4EW3bQKzfLqka2pXrvuq5811UmyKsXa64q9qKUAPVXD4CoG4337rrLHjWZuoAHtwcT4PUU7kfPPS9qroM",
  "key34": "AhK1j2mJ1rbvfE7RGkqSPQrmV9mevkNSYtR9NG4K6mg4dCznpWj7LQFHSuotvXkduCApZvUC4AXdrCAyKHxSwkr",
  "key35": "5RhxS4kXo7Nuny1fmjQd1XfZ4gbUeprhkYhXesXDpfGG58ELBFT6ygxxvUfymDeV4CdwejTcgDRfBxBLQmTLZa4",
  "key36": "2r7NN2SXhixDnUYZ8wHTwQwXNNSZTaoJWbvBTPMAUGxH9c1x1YCuYJemErEwJMoVb4N21es8QhSqV5YMrZGZXTB",
  "key37": "5oKRQFYk1UMBdpMUmM4THzarATik52NauihwyyjtHZcf9QFHMTt4v9Wfp7ofLUPr8whN5fhCeBDcjGaUg9bUJXD6",
  "key38": "3htB7idFX9cnwzGMPXe78ukBptNU6QXpqG1nUXKKK3NhXijweQzzDt8xt8wsMxvV1LNxXxcmH6E58oMsYRMHEwvm"
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
