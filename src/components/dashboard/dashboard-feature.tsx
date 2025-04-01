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
    "c4ffrAUBARym7nxCXnnyjpxr5scq2oYSGX8tPF4jAoP92XKFiGtKQWuxF6zeFB98QhP9Maq6mz66CwdB2mjTboW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4La3CcgxhjYCcDHt7JbGRNa8hwU7EKk8QoGn6UYxfGTsbBqsgVXjkxLzEaSLg33zvZyR9ER8MwrzSbxBM8en4eLq",
  "key1": "4rXNTxmUcNvei9cSWRthKLgiZcqss3dT14AVFScFzhDpPwnSarK6DDJAKmhgCSYErcJsy1StB5gbDa4LPQdoRHdD",
  "key2": "sr7UCofKTnc8T7hMsRWELt3KCWZk8o2uajRpjRoWG4SwYdMvqU26egEb28ahRv6gBLiNgsB7UjkLfsEXkFSX5c5",
  "key3": "5bdPX7DzYXed8Jw6upFVypfG9qbs1Sntsbyrf8PgwAAabByYpudG8RcTkiQNTfkjQfbaFkSEX1sEgMxA8UL7LDBz",
  "key4": "4idsNFoUtQKypHCPd1tTt2tTyiXW2KDsg6sG39fhzzKLpkQG6VWih8yCumfD1qiJHkJWs71wQdYjTXP9uD7Cufwn",
  "key5": "3ymseWhTUSR5wBXRsrZfqGjFCWvTVUZBQfbwHNTzkXq8zvWtixiyB2YKKTmKUZyeiHbcdWTrphdJjNmXky6U6qC2",
  "key6": "2NnEGB3FrcYDNhrU36R35qbfXjJTLVBgaed1udChWaXETTBV5fxckutCMkGBFB4Yy3Pe1XckBVBf5fY4yqN1cWRH",
  "key7": "y8jxjDf8TBZczgTLEsj68hLcGkze3USZE4CX69j9UyuoHRSudM8E2uUMC5BoJBuZJ4Utg5aBNBTCcjjWhrgGhU1",
  "key8": "5RvkwivDBEJeDxaTEF5VJJTRzfYLZs9w2DAMEoVs18k86kh23ayHzASywZPnbpWJALf7SZwN57Mwtwh1ML6kFqRt",
  "key9": "5N1rTQsHqJAh6GE8LricCiuj4L1XeTNuqVHxbfLKuH8nWN8MoBP8KkjuJt9FP5VCvgmruQEYeEjx2kgDy9Ebr4oV",
  "key10": "5bpGrgZr2iZDhfKEPo18rESsF1xg3Tx9Y47uCmxiRzLLKZpKjbFrrP8ykPGTaSQgLncvi86AywHGdP6Sk3tQorUb",
  "key11": "5YQMQ7ywvu3xHF7EtX21rLgVzdUm8LshsTnCAPiQSETf311VK4VMx463Uuox3HUrbwMzQLnXLwLKVScfdE9fSs3m",
  "key12": "3qvjPL4hNzX5ubFkZqXuuGvR9XPfbGLXkvBBc6Y6rSbFfKqZwvcJW9ZbS7ni6NHQ3h1iFeoizyas4531L4ZmDfGM",
  "key13": "3a4tEegieytbt1HEqM8jSEj3ZNb9x8oyvQhJD4rqtzMQVacovPdPutNzU7oXn9PMC2iVcogPX42hiT5nhpDSCf5P",
  "key14": "5TrPLms6aMUofvCrHZX4rFRykecjZugTxfqksxu7brPwcD6g7oRhxsrokp4bzcSMSyrjLbrpc3Wjku6G8u7WPCGW",
  "key15": "49GueVtfKcY7pWgmy6N51s5KRRMYP7eHfUySz66j3WHRmXPxuuYtJbdJy1SEt6U3fsS865FbJkzh7MvBLa2nuKSB",
  "key16": "2RJQysogB7bs9PAeQEjHScKAoK2Hj3zEsFc83zwdt7UiwrzXKoS5uCie5qXBb7PRQuX5fMfsDHCFEHRc1CjkS8Th",
  "key17": "4nSMMgG2qqrBdYD4TAq9ovzhFYXzEUNWbrZt7m193nifxD9cQw4avv4dq2JDyechC3oR5gvMS2fvGZn7Et3ydj8R",
  "key18": "2xNeNAEhhEjr3oqEeUzJXMTcMewuQHpymCmdvvP6p8mn8FgiSZ47X4sD1WXYx3e2nT4kn4GjcNTBBstee4p1bGX9",
  "key19": "4HAjaPau8mXU45T13BWS5BorCU3tNVhyP7PJLdMdQmqzPthLNVGGVRgfpuJimp228ub8poTyUqY9wgTpoiQG2zEx",
  "key20": "4nV7gvxhtAK4LXog3TQbWvvhJv5iMfrLZ5wpy41ZeVaG4WkMDDF2JudcF2VSFM4Fh8vSMaBqRzksa1RButNhEhis",
  "key21": "4n1c77PhGaLo4CZ1e7SZG2Vo1PsVK7Pf9RPjMxhQv4yvpiatJTpPRJk3KPcAhTECNdtdmAKDcxJdCDevM1vu4qsX",
  "key22": "2DgCeoMtCtYfW8SJGfdkZGn4fQu8h6mPmzdr6MPGsQU6fZ3YJxK6xg4oF52uv4JVjmkZ8ecHvP7UYK46GdMyUDBW",
  "key23": "2jb6faKF7sNGhoFXCom2dxxhCEzLXwXhk34tdQyebUy3VDGAKGYFS57qiYRCsNdddbYQjYG7Lmj5TkY2qLt92W4G",
  "key24": "2QDVPwEnr7hGZkEmpHkpnWU6zV6w1oqaRHSLYRt3nUuUYJHDHHHXuhqhaFwdrNMmUQEkHBD1R6fJUR6pcKkPX7Ym",
  "key25": "622KfBb3NVX5cX4QXGPpBdnL51eUZXpo3snV5MN5sRd65UvNR9L4PioTYrwzqBcdAkdm8AHmDCB7yWedhjirSkJV",
  "key26": "66uMq8Bk3TswZ2uUhM6LuvYf9D4fEcgSmrodwZHaKBmnGkctdB4NySgX62Ahc9gEtXJgLggWxHhVbGZEDgmepPVm",
  "key27": "4fXrbds2yZqf6jxnXbATD8AppxJo34sjAKyFfbdPdYLvg5BY4wbWegnkojrUMAWWETiRdriUauj4y3ba9kZ8UE38",
  "key28": "5ZQ5WsqY9JfoLPx7xSpLbfoJCoXeZzAConjfpiaUCDJdhuxcvKN1QoNL9FYhhTzW6b1jLbiBZ8VWHiL9LHN9zGB7",
  "key29": "3HnL55YcV1cgei2VKTx2u28pJdaGL23Qa2AfcspgryepUpEvTjt1SftvQuRkuyAG88TLYGjftz9gBLVT6WkqVc6Q",
  "key30": "4wwdTLK7Z5W8o2cL7uA4pZZjGBEwBFvQEyBYvgFPsRqRWsX8GYN4TtraTNfnKiBuxKVq5XhbeKGccjYexW7WqhZp",
  "key31": "KdHuoeqgPx9wGAaRSgjyPb5Zsw2f7WSKG6iPCTmYjooVf4bSz3tHKzjvu5ecWdzvuNjV6JrrnYaK587YFA3ovYJ",
  "key32": "4rbpF7vGsmfZCGKjTo42RvU6vi3EvhV2A1kbzQH2mGW7q21Vd7MXzCQZTUpXxMTeNotzoCxM6emX9C88EVynVSb3",
  "key33": "4gnPUJrSc8SwHijxTmDqyfCpb3df19SYzEL9o3XDWrGq1M2N92tV7Fn2RHfrWDdTpsyGANAjopLHF44LsnpeWe3m",
  "key34": "7uZJhkTjAqyBCdBoCmpimgvtRkxiSDhxyzFQMdy5zfyckoNFzeJYYExWdjTDToMoH6uXVxaQ6CnL89VTnmdY2Ge",
  "key35": "4z742ctQcAvCWAAieuv6yJwh48BaTRnYyedVp4g8whF6HyVAtVfHV7Sg1oGgPGSPxLitD2trEzguBy8i3xCWveRs",
  "key36": "4pnuMYKRPhwBTk3nYb452SR7kQfxq6hSct6TTa8pf1Zug5QNmmHYkcrbo1i937FmMSjwhAi5go8Fr1UvPwDcUDT1",
  "key37": "q4nDPhgd7gzLzEDzkWnnn55VxWJ4YJytQPrH3wzQhzP5LkWd41GYcZKHXTGDUUsvtMdkrEcvmAigeKvYX1jAaqy",
  "key38": "4LMThQFAnfU1PthikPwxpgFPbgEqyPvrrJtTCqpPAnEekk1YBZ6KCMsHvU2VPcR5EyKmv92aG5DBCrjQN9uQeHXv",
  "key39": "9sVSMZXbBcN8n2iG8o1vRcbThrzCUSDh3M1KDJUyp7uKdk9vBUR8CZTudcqh9GWaewh7bKvWPGRdBXP8ELQd7uB",
  "key40": "4pe1UX6HRRV7AZHmo1xndQ3ufb66aJBRToi3bTUkCshDkcnnShszHYvfzapNB1i7V12HTp7D7mdgXNbEyHmnEQRL",
  "key41": "58f2KYRpvvacwLJ2dfSouUG9bj2WQMHc7Sxt1HshK7X7kuEirj8KG1sAjcwCAyqN4ShZCjSUGB4vcJubM3CtFGVY",
  "key42": "4hdUh8rrYGcM6sGGDHNgZJCRGXTu5KCkoC1TCQJGmHSJPdsGwtJt1nEkwCbB6bubPZ8PNHABPXmWrU75YdkA9D7U",
  "key43": "2eduNs8DHfCD5Yj5JsPYU4FGRYbegCQu6Y1pPz9rQnKcMc8tLB5fPQm3T1iw6g3xwQ1RAXBzb82xoQt34KmsMby3",
  "key44": "2cJy5JfSjM6siu7Desdz2aCiTHTnrp42SWZ15GRoenmPGMS3jChj44QrRMQ9jytg7eUn9yrGMopEy41tRp8ujdHq",
  "key45": "9JNovu8VVUPSdXxy2Fdw7wVxGAq4XdPXwiwTHkFgA3aUHc2wmKhSBZ1ivpbM66THmA6AHWrq7xmJuf7nqsDbBg6",
  "key46": "EcVCkGY1k4Zo5fUYv3Y4Kd3tmVkKtddwDN814YUN4niC14pfNhhYJqMJAzmsniZ6VMR7bQPadJmURN7eHLA5qph",
  "key47": "tycEp6qnufGdDqcSbi3ttjNKAFCVjmS9uDskMzmZSpQNzXZVHCpAsAdNgjw7NTqJM5C5nayMpoTaY92gJBBPdkd",
  "key48": "3ALbNKmBBY66qQRShmdBoq8Tcsf9ZwVvmBjG5nXhPi2b6NAXJUeQ1zmgKmXjfjJgs2YW3wWnRRzRH475KWT915gQ"
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
