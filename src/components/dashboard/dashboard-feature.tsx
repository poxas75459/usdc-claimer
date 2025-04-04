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
    "39PjMjZGxpLHHnZcYwwCNqrDfZSDTVdJPy9SY2McsR9xmVmapRteHaSGuYHDpECZgZrPoVaqij8Wz5cZ3x6YAbts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u1Jo4iMVyJR1nbH5U2MFJxyhh4ZYiC5scPtTW2pioDVAXcqU7wfEBjCVpCxTsTcwu7z2zvPSGnGyX3CSGtn2a8N",
  "key1": "xzb2ajACYiZf3ib7TZdzSvmF2QKLrN7EkxLVLNSpuP2Kwi3iWRaxNNPVPez9JJkbdyWG6NNLEoqTwGwt2cJesrr",
  "key2": "pi6cNQi8r1dknWZ29rDN5jmMSjBT7osXF2ripV1mSFFPcB6ATrxJiTnUjBTfq3JaFV3VQmNP4QDXni3hnRwi6tM",
  "key3": "3zawazLiWtnpHSBdcwpcUHQ87vXxJbYDzpRK6mEwneGDEtVzZMZbLHey6LZeAtFH1mzfMSGwwjws9Y2F7Bq7dbkP",
  "key4": "65pqe4RMbATJTUEuef4n8nyvpMyWhJnZoMeXfcoteHSfbtMVJSMyeVJgCG7pk9ZcrQiHNLAka4EodWgbmptsKwy4",
  "key5": "4DyQs4ufvvT6GmjihDsHv5feHnCQEitdkUqKTXLwdfUnZFoLTmwGqqVrug8ZJLgNozayK27EYoHZEgqyJZ3mXZnT",
  "key6": "58uLBrXCw5pJkM8RZ7SoFWWuCmK4GF8y4jzpPUbVLMKPXmNnbJkQiVqrnq4DPsYb61eMtihvqwFL1KvUymfBoTn7",
  "key7": "35tjrogfSLUPB9NKYiUPHKZou8S6WKtG24Tkm29djW4q9iVRT5jaRHUDqyVgTR29v8SfvZFs5GS9TGqGVY5PPUQc",
  "key8": "4yNGmsR1TaJLWHYbKuR66iPf4Ha2uKo87z9uQcmqy1Hkvvam9aC4mUoQwtTpA64ePQ57pNCbPkrtQZh7hfdepuKZ",
  "key9": "37wh2BPXhaAvx46gm4kRKHhmcSR1CBPkcmoCT3H8QCPcKesqaVGoi2W7ue3KNrznV9hfwAF4HMqLTK8ZgzFZrXS8",
  "key10": "UBDeAQi4CwaLJdD8XdQwCVi6b6sK7HHNa55n22sdg3jnEvgsP6vzDh8oewy26KboiM5ahmQE7idEydaU8yoJkYU",
  "key11": "3zeiarSDB7XxbD8sUsv6fFcaJCRTJmU7898jfaofKRsyyfLSFmtwKJiZKsfsbu3mBq29jy9aKNTpMUqxxyrEE7ce",
  "key12": "2gdFDNs3YRZPSP2SN5LFxXW7dmnAQ1uqggAAaTAongGTUgwktWGCuUDeR42YS3MLWtSRFUXi2DHxFXc44zYvzJ2v",
  "key13": "4orWta3ceuqjMuibUaUZ2g5dpsQwJ5xMEdqUVUyG4L6VSMRQ42AgmDUgVAy3cQMuM7ZX9Q5BY7jSx7puRR2bQKY6",
  "key14": "44ysUmTeMo8GQiKyY1KtZdqohqG19i5Ak5o8ReavXqRTQ7EKEfCLzqJt1DArV9Fj2aGDtv72iqfHjjfnh9agVJMQ",
  "key15": "2MYZJ6MDTPjiDYYKngr3tPgimQXgaF81HwETU97HQ4CJEzDwHYxNnMxv6fVP4TXFk56bpyraMJVaFapfRbHXxPx7",
  "key16": "4hWVujHryzgE23rpacLZe7AT31ZcipFRdpN21z5MuZB5S7E98SieC28bz8CK9qy6RpQWrCKVBJmU1MPNBmzPwEqG",
  "key17": "3pTkUgiZTiefg3qbUzTiqQDfRFSkPdNF8aqSHdMZP7F2RXvLWeAmpsKwXMd7Y3eLyaSwn3fb8KaTYrt93Kfe4J3m",
  "key18": "3uD38Ynn6tZ4BYtwCp1MLnEaqDseMrA4zy6XzZUXKSMXWaAUhMoEFUmrbBoe7c5C78HQhEHT31hcqkCWeRN1tYik",
  "key19": "ZykBS9tKYxvv6JP7un9gswCPhCNSJDFL1rvWs1LzjcWoHa2KwZHAJW7pUKxxU9D2ts45SsJHEUp63krduQwi6dC",
  "key20": "5Bn6yrndNNLan2r6ETQSvgnp6YMshLsv1wrZoMuVmD2W9ugweG24Dm1Xq76Hk3iDP6shgu8R8KpTetQFzGXhbQjH",
  "key21": "5DpncccMmsY1wsCf7cV8y7Guhu53JGqeq6KkrGJUnqq34YhmTx1fT3zAcq618h12wVSVWRNL95DY3DZUvhFh83FL",
  "key22": "4ZbaTrgxEMvkVTb6zzagxaBovYD3owo215msoYtPEBjknUTbUTo2Y42AQzKsAYLfEtKbYr6RWoEs1KYsahafSFUA",
  "key23": "3sm5cdn7TtWnQzMF7k95jCjKzw2b8XreVJQevqHbKBjnWCN3Y3sgBppwGh28GiTQ7dLTkG4R3QA38JGiXUACVor2",
  "key24": "3FZSCk9JNPrZ312bMs4sNKouRAyt9kPHudTkEXXKBNKfksDgB3cLyfdFeMmGLRJX96NaiqGSB4NRgurm21TCweUo",
  "key25": "3VHUG5H4FyBi5aLZrHjMTHSCCXMKiL87YFqEBmf8fatw623v6kTikgchpTagcgvrgSbaSv1Hmqgu2n36fw5gihq7",
  "key26": "45yJJtQx1cR3dqRVgqa5vupb3uSDgncXTygxJXhSzWVTMTUyKKAB9G41pSbzi6JEvm81XragE2zJyAodDriTgzkk",
  "key27": "5UZ8ZCxU8aiciJeEg1858oQwxXMh7vRSNtRwJEsXhyTzgsD63zWW9pokYTeoGGihGZjaUy6nvU88kipYTSwv3MPd",
  "key28": "9N7QkLxCbMqqm1oWDyBmJkSYgBJ8c6pXX4VksoVujRgB543gPKApS8rLaH7tFNexfJHWp18w3sLtEDPdHx9AHFW",
  "key29": "24uFsfAqe7JJaUaLJCDtgEBYq5EryQQudJ5TqHomKsQAtgQphEkW4pAMndrkuVAPVpTaj7YE4fu4aDnP7udR8Z4p",
  "key30": "4ANqQ46k9UjvqNnasXmBTq1rqJtzUj2MKMQ2nZMNees3xMPDkLLVbtMFKgk8mwEZrDg2R8wwm1utt45Ms4mVqj6s",
  "key31": "4uL6JT642gfZmbT9fSCLWdCg1ccsfUsnJ8S8U88ZogZXmQT1iXRfVqHKwa71MhknTuf1gAo6pfZ52icjpmm1ENwV",
  "key32": "5XSPe41ezocKa49SUFQGME4dzjvgeoFuZgZi2DUBoDVqWEzAGMDXxq84RSozCbyavYtx2XwFN491z3vF9qifABWj",
  "key33": "2Xim37gk8QZK2NLRMyxt9yUKdXqcPMqHWQ9W4XepHrK1EEB6HhReXVeYVKG7ZUTezwWrLG6JPAhR3XbcV3SMQ1xs",
  "key34": "4a5nnmre4K4ZukZ5Qhb5qLK5sYR2HRtcBAvxj2W3ZumRh3c45R423jko5eSx65TVwuinEo7TY9GX9THoHgPxVpv9",
  "key35": "35u7TYY3xno7RCj1H1Bt6FtFqfhvcdCuDEcRFuKE8dXUHgPZDsLvgFfCjvhWcVaLer6J8MR2BJy8SDvPcpNoSCDd",
  "key36": "2NBDJ8ZxbkVsev4BgJ9afrcFJhEj6tWwGe9fJ1jxe1fWUfeQN5a2YyQ1GKWR4neqrEonmFnvWbDon9rUgr9HN17R",
  "key37": "4cMogaS4QXCH1XEnJogDKypgiDESthdeyyCQJZTzE91atFYNrKWxEkGCCZhZKNZzaMhc4GujjDYvU99dkuZsrMKA",
  "key38": "iR5w5waC7bUBA5t4Cmat5TBgt8HWX93NCuae2J1kDUq8y8MiF8eKX8k2fpTh5TYMKASjxaYDTcyorZx75NUSxJ8",
  "key39": "JXTFn2bM3CViKz7cJbWoDZ5J5zpYZJ55B56LARxnBAfGiB81Pw21Rfj3EjrbtAJ7wjxHwoJ3sCJxRrMCpTs58oG",
  "key40": "7b61YHye9Piv5DzHpf32SGu1e8KWXZZCM8obJ2QdNpFgFMREG362VfKWGJemmYTtoxPxMumrMnKr4qaFctbJcS8"
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
