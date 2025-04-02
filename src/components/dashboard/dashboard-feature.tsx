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
    "4jTXGYMh8SA2Y3ruH8iDQfXvzymD4CiA9LHZK3ERDEf3kj1qXa5Ur2pUMSa6ijTALciV8LuycmxSQbrsgxkFpeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzaE1PZ5N3b37To2kFXrBkNfrnKY4EWkSUJ38EQtFx49dZZwY5WWZ8m6hvCBuTwbK9E4gy2DrUmnPugxNg83Y6N",
  "key1": "25wfaUfK9gPqPkaufrheHYPvDTXbuq5n5vbTfY1BCSnbsUVbUzYNJ4z3ZziqyHbeHcsKBQEiJoaWk9vE7yniqv1y",
  "key2": "31e289RBekHbp9LVpDwQ2wn4Lg5yExvhNmnG5QcdHdxSbFtxURP8d5EZEdXUkfrHYgxrRzpYncQJuUbDFsA3NHvn",
  "key3": "xwsf5NJuWbKR7bEv1FMqxA7oj666Vh4YFrAsdj4ViSx6PG1X52oLgTk595wYZbdte826uDweu1BicRaEqx7fNd5",
  "key4": "5PByELMjXZiG2LB26f3GJBLx9hXs55zzRWezCDKSdPp76DC1gi29T7bwo31scsyWFzR6ghkeCXQFL92sdnCeWka5",
  "key5": "281cdJrBeUtNmoBwZmaDVRQ39LCjrJfAhLdodFzKGy5t3YhuVsH4Q5v87qoUPGawncATjF6nDVVSMv3dzQUmdHGS",
  "key6": "2QsbsMJCbKJJUaDZD4dw8WLFMkTG3vPmu8Q6v9aP5ETnJmxnDUXnNrRBUU4YzqtYANfGn1ASyKkzqAKHwMiu6UF5",
  "key7": "TM98YmNqZJVeKfW3g4bxFHDDBvcHWeDpbRgvTE3Ag2SAkQdVx5AJb5fTGn4cZCqu9Jf64e3snUMCbtfemsF5PSj",
  "key8": "4RnxMXDa7QYRfLUPb3Sxxc47GMCspDig3UdtzWcLKk4zVpFEFotTeegbxvSRfPsBwPkgufQBaLJm6NC4pcTCVKGX",
  "key9": "3iK3H2Rg8xekaxBYPRrLmRTVzanTe1B3dwpkFsXwHjh1Xaw8tomgXnDBqkERGEDBuSnUre1swwF4mHgamTTaDL7Y",
  "key10": "4ziVuoKfC1U7q9RUQRsZnhMbFz9rDKiRe4Nrzanp9yfXyRaDjqoq9cnpmam5YDtyqyuBYfwwrXT12DQZcQ2bfXmm",
  "key11": "KQqchboQ4XCB2PA7dqiZgkRac5LMibdXkf5frv1p5fBz2ZdaCq6ww5bKLZDizALRZ4azMqCViVYghe9avrvXWgT",
  "key12": "PUufM9CfXaP19TLZNWLJLczd8kSHm7KrDLGMxgPx5QvAVjHPFGenUhj1JqRdDV5rtHWvQ9piLpGScrwwv1w92H6",
  "key13": "5iLtj8qZ2bYqm9vqRPvpZDehsE6GX64UcxXb6nsDqwkeESdCmU1LzDNPzj9baoqqwn4d2LrWj9fSy9FCttoVyFHb",
  "key14": "5aEagAHJT63ePq2hkSdeXuttDa5kV4xYW1ahXSDraLmZYQXU4qCTnkTNTPZm3DULBtyHoz4SqE1WkxLfGMgs6AFU",
  "key15": "3Uu2z1tHUyRV3WEswb5tx6M6okQNP749STHiqoCDgp4rnhXenrPMTH9McWTsDzNUhHi89jYm4fYgWTjZBA48EoKW",
  "key16": "5xEtzVHTQPmJ8SJnhE5akebunQsADFB5zHpUec9RzoVFQx77yzw8TYpw2ujQS4ZWp61J6KX9Wff6C52y91q6ujJA",
  "key17": "2hJYu59P5nCXixNwh9E1pUN9oawo6zombVozqA7oSCkfn3Y3oJHdsACy788pkNmha6kBUhMnjipASHBpVXLapZrB",
  "key18": "2ALeL8msZu4XdiMmm1wDxpD3u3F7vjToC9TbKGijofie342roispvZMTAG1EM4jPA45tqfLHhcnFxTwsTAZ5F5dG",
  "key19": "2mukv36fd996EhB8rS8PT1mD1YaroMVECrvLL6t6DPQqpbPreSErZsyZs134byzqXXb8oCLc48gWpNATxrVhydp7",
  "key20": "3CzdtpdQHoAifyrv9jkA3LXNwZWtFt9gdY9tcYSWi4vHY2BGpjxb61SbEPdsFPK4D2Woroqk3y3958pUH15CAa8a",
  "key21": "5XnKk48ww994o15nVs1TuPrSBE3TQWEZKvaykgCDdJMxJUpNwb4nnfqx8JAzwKJqKws4m8L48NtcMPV3h63xtNTS",
  "key22": "2twAaPoUutChqJpNWFnuC7Ki1MF6itDoZTEnLQAkxrWn29eXtx5ZZ5v1gL4CMFCT58uezjyz1eCoMAaip6kgm4iQ",
  "key23": "9otp5hgqX7vghGAXHfpBhNceC6nQMyqRwmdcWHwTcEqHLXBtxPe1JvquJeE6C8Cdk9rpVpgNajS4Hg3m3M1H8Ta",
  "key24": "2KZrMBgn6BZx5pgXkHW2koMYtANNVsCJN9qqahKgedhcUqWwWiT11ZaHRDe8Y896rdNDNoukxbsXg2df35yxF8GY",
  "key25": "54ce6RCvVcBxwC4A9PWNTGnCgdKLY61fcse5nAizevDpsSskbstzrTGGaqhtUYsQ7wUAeuoPRMz25Ai2711NFECJ",
  "key26": "3MdpcLJ53Hh5RFnAxTSkbM3Y7t337dv7ium44PLRhb452Dcz1c1JCS3r2ycKV4WkUp9CpuBm4SJmCChvyez524Kv",
  "key27": "5C3nGmfo9Dg37xcYZwVPNzLvSsqgjEoYGWes5TtaCrMfwFWX4TohdhDKTnVMTmxiDHs2yYAWaRj62DNTuj4DLQwu",
  "key28": "4u2G8oU2Jni83HvHxByn4Y12obr3uoHemzP9ZBGeizGTdfLbYBwJdYjGYzVgPHsM6t3fup8Hi9ZLfgyyBXq6XjVM",
  "key29": "3ZAmrcpYarJxjkJyk8zMcwhNjKY7rNZVW9vQ8QkSZiPrieLGcCzkjmYDD5cd8egZTBThHPpH84JgP48TcwrnmD2c",
  "key30": "34FoF11yw1oSzC6knPRFER5xF4GC8r5VRJhjZ8RwtoVsojGk7tg9r1gLnFANdugeEpZHqxqSPv6dWD1KvdU4EcN4",
  "key31": "5zGkTtSvebaWC2obyZvcgTzAGvVhrxAUAjiuEN7WofmfFv1VAmXWm26brzeKKysPfJWFwwFciu4Abh3Pck7XBj42",
  "key32": "47MVMuufwDYZJJDekrnGoqCxdjqPSdmmVrkJDQiT92UBuU8NqjfWzb9xHPhebiZPGKENAAqoTCRrHWXtyvq7kWKJ",
  "key33": "w1JxVZaXWbTDg9J4aW6XzoMqdqzJxPtuJSonQ2BoZ3hDq47hWvRw3gsbySj6Cdz1cd8bVAJgqANk5e7VoBxKMxE",
  "key34": "2ig7hTy6GhF8gv2CS3aNhPFB55KanK1Hi5f13NBFT5MD9uPdEJ9K4hSvfqcDcoBkgSBNFSb9MFVVecmWSXW6gWh9",
  "key35": "2va8q9nU8U7ZGbCGnuntpEgtSwMypqwMz6goyiCiw2DsF5yaCsXrMss1a7LDDgCE1JphY5kqrwdeD4QpvyZ1NFry",
  "key36": "2dUhWPd8zDFB8eQ3VdeGiC9UmooReAwkyujYaXEcqxRwMW2BBwMSbxVC5pWUpQTcQVV2tCNdaDr8rXEaqvu3s1U4",
  "key37": "5YvAmYauiMetV5e63NEFWo3MMwW9DzAairpPGduMh4HFhXLaRwytXoXPwcRxiAcLdfQ2dYAKkodw2YuyaGiRHaD8",
  "key38": "D1CDXmAi1emm55Z3eL6pP85zAgerUPiRPBghSGbEfmq8tx7fgY1ZaLqTSwDqtn5aGtm26CuS4ABJKJxLrS8UcSN",
  "key39": "5nToYvRXeBGNJaRcBzLaiwcyXT8wDh3auFhFaMYn9KBjFpG9rEWW4i6aJqqrBjmmWuumSB6pE9TmaxGsnENCYGPF",
  "key40": "3LDrWwexaQDQWXeVL4giMmfUoU6qj39ptB6RD7m8JanWzMtGyFMTkG7qWjQF23XiaTsjimJta9E7wy1K734eyUQo",
  "key41": "7JS8m9dBvdnk5B5A2ZHxjJ61FZd5GTsUsuse1DDVvR9p4mMErJiUX9cbm2PQZCcAuMJFPtVkQRvfD1KkSD7xQax"
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
