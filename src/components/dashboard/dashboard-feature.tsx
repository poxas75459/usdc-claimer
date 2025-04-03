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
    "5sX3nhADR1P977Hi5ZdcyPS12SDpnfU1fZWspCCwA4huQYJCH1hDWHt83j9kmqn2GfjsUVtJCdZGMDLyQ4GZBuHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RKkVRR5XpMet1zLnYi5tc39t6inNU89Wrg17pT9n3Mpjisq3gyV8Tus8JXWwp9esLCPdgNTXHnbUyPWzgzn7ct6",
  "key1": "4wEjY8pnSrv3odd5pp6MdYqfeCQY7j9LNqZFdTRHbgbJtrgSEqweYT2hWY9Q1hfDEuDGn4oU2HFNCLaWRHf7PreU",
  "key2": "26pRhRXUR2PGSgGPmxqNy32pZ4kLw4dUy7BcRMv9T64aKp4eZcSdEXYZvQCPmbjYqkaKCt7nUrzURfMyHGRvV7bf",
  "key3": "2zKzWsVjZW5hUjAtJKqz4BqRuv2sVpv6sMzLDbfPqK7EJGfiE5LKx5ncjNPDgHiDybNEWdTtuRqZRhVtcqnTkWXY",
  "key4": "66puoZ1MqQLMjGUouvvXVzzD54PuiQce6L4Web3yfJ2iiGELnVaR6KhVSjr22KVwjErsn3GemUfSGsHhMCAxrhWj",
  "key5": "3dfpghPw3zAEEivADHy2KjuhFhi43mLhKhLzLtbx8CMATE6UER6RG6TTJ3zvbXcMmjDSfRSxkzRJeh5zeVUpWauM",
  "key6": "Yuc3WMG34TNRYKQbB1UN24TZaLQuyJooPakuvUZiYsKF7wTidpe79FLqm9mnCVxtPZhXAWX4cHR11AipSwt36Co",
  "key7": "3rcfXfBcRKMhWZJPPpW9RVrjhJBWzPKuveKbj1CNrSodGjGQ7RuiftJBSLjYU8TtzP8cswvFbPLBSSuiMHRQcFfZ",
  "key8": "3mpWrUBjsbA96tiSkRTZ4zhS4U4rKKhBFF5ujEDVjsRNxvYcPQWEumcAotSXn9HST255ze6un9DtUqaGP3f8ytML",
  "key9": "5jJurAdiWPpSVEeHpKzKK53FoUQF5r1V6GL8xeeg3Zb1KFdYig8ZHkrZbqJPYViJ7eu8mCYPrZTbzM4mccMXEx3b",
  "key10": "5qx4mUAmZbeVPenpaQSDkx2mK1Udq3Uq919Aeu7KgSo6CN4dbrgo3AyiySDFstxDhzmWaHn2fU7yDvy9TXo2h1Wt",
  "key11": "ivKgMPw2V3Se8riQS2nkcBdC3ihqo8N9GpgpKUPYCm53WjSFZM38CnMZAsrALHLbV46nu9US5QmeWivjMpLHYF5",
  "key12": "2tJyc3myL3VnkG7Lk1imm9qJK5FeC6rHMHURngs3PrTz66HCg7bxHD48gGHhmYXxLmphYyst9aMDuCXcKU6Axhqa",
  "key13": "417jjgAq8wgzERJwkG9e5C3yJ2FnsNaZZgngoipeXAc6Hptw1nDdYjhJtMy3gcBtpq2TZ8sQgRCQeoEybY17WqPi",
  "key14": "5BqsM7aUEvoix2LfYbH9CBsJE4LysZ1QyKBkyDGjCsb5d99A4iNpjdJR98WzBQrMqiLy7eQ2vc8p5fL2eNJVt1a5",
  "key15": "Xk2VGrahqW4KYyksfFxuNZEmx6ePF6ctGRTyft1ta57QLx2yozwM8AQTKB4nR3RiLeyMRbawCv7gErJ5uv3zcjm",
  "key16": "djnaWwayTsjRtnskovVBEnaDKXmVci2ymzejC76DEkkdrrooWwDXp4mZaj3GxZssrdrXBunVBi8BurmgiaKCtKq",
  "key17": "5iagxKhEma4pmJrLCtmDbrM1zGLkqPpt9XhAJcNcZqojyDfxdE2eMjFbC1wsMByZ2RE7GyodV1CXRvSn4DirevWt",
  "key18": "2556zC3gFyLNTPWzhf5fCvBfCSLQZsnxVtAZSj2euoq2iVUU8d8qaD6Q5kHQeqDLyngFrGmRQWNLXXBaxe43G9EZ",
  "key19": "2QnXtjwZ1QYYyEybvdeuEoq5RVo5CbH9r7kTmjsUe8pi8uERSEmLudFS2evE8HFGtPMjMcajS7rcSZAZyyjBzZgF",
  "key20": "4kKmD3WXgqW6fzyDAXMLPzS9oyKma8qe8YEK1EgibKihdTyLVtTgKF1VmQYXHmywj86zEn7pSSdtJe8JeFBpF5EN",
  "key21": "53SPtmNZxZSF2Y7SieiUqnYCLw1MKVFFyoE3HtcUMkxFicLdjDbh9V5s9wSCcBLddXNRLrcFTEVVMpycaF7dfc7q",
  "key22": "2gJ59YQnJ2P7M2QUKVozKFve3jXZAYBCcsRTuahBvnjNTVDBVmQbbEV8akXbEedJfTBeHAZGem5MXLAK24YrJvje",
  "key23": "2UqbLVJP3wbfJcWSctP7RQuuw58kv9aUc8CCQrJgZ92NjCJDywgNe7mZcZ1RwiNHs9YBPFcp4pGucf784Qga7jFq",
  "key24": "4LuLip1Fy7mxDrfmU88UafSoqK1XaB61MPwPMEkvEWGegGeNgYrkCi6uWwT88XhyaGGziEWr7AMoAdsX9CYmVoSd",
  "key25": "4bDmsRsgYdQzJJjSAfTBcXidLCuw163gyE4jHma4rsGeEPesc7gVDMpLvZbia8G9ze3FgNg5nUfMabKwRZ2drFou",
  "key26": "22CHUYwmBBenyoPav1dGDhaW2syGXjkhLFrTZb3raLd18Ld7Tjn6oeKYcbXDuLuvUuScDvQvpBmrgjpJUKSeT4jv",
  "key27": "3MGRhA2grLf7L8oseZCWQcXiGZo8dNq1KU43CdxcQHHLAPbhVtkUFde6aR57ashLZhMnTGAprjsAkZzNZX6UxUci",
  "key28": "4FkcW9nZA65y2jNbf6HVXAidrUB2Aff65g55KMsVR7tBnwNDnDuQPzzuaDmgpKsvmBNRjGY15gifz84TN5oqYLUn",
  "key29": "4SdxQPzZGofyAqZHHCruPtWYamr8iJS14vEeHjYETDeTW2agzRtvUho48w2woiWmmHHwYXvamcz4ouv2G97GnmSV",
  "key30": "3MEF3f2FRhBb3ja6UVkWZEc8uNN4946P3CLNrkoZk4dToxor1GJS4vDpCpLmz3XGxeouXqe6pNECpiDZogfQApK5",
  "key31": "5SvXssGYG6dbJXdroN3qWZPbMrKG7v3oC5bSmBDe8YUDCZ4qQv5p35jakHbd62GZQL4rFR8Ck8jGAerB6pgiTGRK",
  "key32": "2gHJZKPtfYga3H9aYqfP1u3D5WqPxFXQUGRk5nm7MKonx5HsjKYM1fXAgRv65sRmrujsaoJPhZGm1aocGSQYrLP",
  "key33": "3nXwfJufSk7tg4nqpr8nR8x5rw8a7tXgjzuqAeJ92gwWR7PqVyHG2DmmbGchGQujSJgQT7Wi4cN9fTjzGZr9jatu",
  "key34": "5h8VaVLk1BmSdLEiHJNop6iY6C1AsA8Kgt7T2sNaic8QmSQfXiKmjMsR2pvfn7qDam3vNRb5HZzF5vQsWfVb6yF1",
  "key35": "kPGebXv7ojNf6WXALRm1LATwUiHiQjkLsxhbucb28odLkn8caFKvXRBbsJgbDoLuJHCMAtggVG6LnTQ9wcPgsqh",
  "key36": "2Jy9PbLMdnkMYusLXNvbLvnRKjNhuwKoc8q4yepj9oTPPKJz5fGnvs4vjf6sBJ3XMB2dy1SmfSBb1Mv4b6anpwdr",
  "key37": "Htn6CfEpftNeoGvaHFPCUxFC4FwLdtGYBvwqxu8JBQVGQx2mmVmPcn8SRLzCbX3EhLMZymgZFZXRUVYijKEGJK2",
  "key38": "21FpyaKHjRXy1ouy8mv1v14ot8rZmk1YGwNfvLyhVtEFYjPFFUQJmt5Hxn9qEMvxsEoGsKMok3FF5rNHmCx7Tnvh",
  "key39": "34iwEVgUjo7Xkp9NDGdELtE4p8VVaT7FdhZRXVBNZbnDJyFwbLJF6rNkxjXLpcKKJNqVjQh1CpzJYgMGFq6uTnSn",
  "key40": "4S66Enf56YEGjm2NVfrXc4JvrkGnFc1UuFGSsGNmzrsZHy7gq3aDA5gAs94fUe791nfoGDdsgA22FTco8G2PrLQ8",
  "key41": "3sX97cs5TvQMKWjT7uV3qcBmnV11dvMPZeCfADmMeCu2MB42phNDAzQiTuALtZtQrpUDP8ENWCpz7Ttmo5cM6xaW",
  "key42": "58sUNW5Uy9CQdVwDBChb216ECNwnN4n8MvyWbcXasBm13mAZNv8bkgzWzC22n2AKZmo8n4hqeQ7HsKK5mvco9cmQ",
  "key43": "URcpUQCGFcTgXRqSXyXSxBFCn6ufxZgatnZ7tZGovrmjhZBV2Xu8TMrFFbdK4Vwqvm2zgCzSKuG23PcobqJ8dXr",
  "key44": "7T43Vfzzu7rDEemCu6ghUa8nHmipNb7JBK4S8be1fsYyP6q5cCLmEyafdtBCpb2GhjH7GgrfBh6tZriLCiUyAGv",
  "key45": "2L7s82M8SsQgf2HxtsuqLaLYiGo1mrn74t9qhFWPd4fDuNRjLKSscUKgrs7hP8n2sXfBdw1DEnoP6Fjwq6EzG1gE",
  "key46": "iMC6EdA5veSUPhQ8kKjKhY9UDRWc1qceWS4ZL1YWNA6b43jZEZvmG7Dg2EY2MvqRx8bxPUYmBDVe8p96tSf93vZ",
  "key47": "GzXjXYXuryYFwHmbmZ7KRqm2KnqQyqSo4D8us1GgoyUiZJZZZEnd8mdzuJBWmpNuX4G4vkZpQN6wt4pA5zWYort",
  "key48": "447foj5kni4UDhdwLEpG2ktDNJenVZCNxgYdS7taR7hkBbRwQJTY4yeoVpv14uWaQKKHyivVFPxQqH4t151Jbfe9"
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
