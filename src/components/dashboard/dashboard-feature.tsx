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
    "4A1Xh6cheK9WoqPMDfQgGntMPziAxi3V4DRbcU2jzaHfixSCq8Ynr24EsU2gxauQBq2gQmkocAZkKXFjSHXzXUXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yWTDHG4Pr4JnPWkRjtBcdwkLLP4QHFxPBhrJsUJHi2MZ1YfMrThbLCxZApTwxywCaU2AEJRXZizBYkxWjN9GVM2",
  "key1": "4sLzHBw7Ni6dbMR2XyKjmDHMLu36a4yYY8rjiCjxQMHL2LuyoNSaePUaj4NqNdVTrKNJBxmCjx6oL7kadH3PwJqb",
  "key2": "R28DvYh3tMvz4vW46bXSWXRWvoAmQ7DxD8r4df4CXpEpQtZya4ncCTjV1TTCtFYCHVJHeHpEM7FZMACw53F6xdA",
  "key3": "4nChF8ENAi5vCnxPbf2F6J2q7GPUWt6kaCm6fV6SdKLV8A3jP86HdMkaCJVZHfx2Jm35GidshapHBYQZzB7oCc6V",
  "key4": "5QGpo4ER2hZibzdm6qu6fy4erc32HsfLDRogzxKM4qurdpLg7kZiYve5DPtSuPV9sFmvecPydMX6xxKsFgHjMChw",
  "key5": "LFjZHPYV7yRzgddYnuT9iMyYa7M6ozJVXsHvDCVqcv4uCaidMxM5nqATEBWCMa7ixuH9vC1zE6MPodkMDqkENN9",
  "key6": "3FRuDo1SbCnZHjQPrhfC6af6iLMx2gNN6MtGrrFWKpbczU4CXMGj5yaxRSHfwQPZMoV59hSXYbaoUUisG9nWo2Sx",
  "key7": "33DS8WWDrAPLBh7ZJfntPn4ZXm42zpx1hrrhbJYhGNCezos98D7Guwg2Ev7wFFVGyyzfbPht4ALyf88HVNycuSy3",
  "key8": "4UxT1i1Ls1Qj4qbXUBE7gTbMyP4hwGY6TZUAY1unqrwBgrbWEteH2pE4ok23kujhJDQCCY85FPJ9JXAEdTPtZZ2Y",
  "key9": "8rxaLUjR61fUdhBvbhEUUu4n2PmuERcKTwk8dTK42zf9MVfVswZpDpijvTjuchaMY192VVRaC8hj9sSXQ7KK8kk",
  "key10": "dbLfVgjsdSShzKHTkwUzJ1wKcRunHPXVWwJZLUYUhZK6QZQGojKiXRCopANeKKHXyo2HxMeq75svb2fnok1rQ16",
  "key11": "3snNYUwm7qbPN475ZRyjNY6hPavyLi3hpAWPfaKQsi4FT7rxnGJxVP6Ci5ybbZv6UHU3MPH2CT5gPQEWhrccfFJn",
  "key12": "4RqasJSNRcPzd5n3E7onu53V7d6C24ohjbeeSRPY5hcrKQBaNAbjTKTHq5tWu7bnrPNy2TuiEq2yP4NisYWjUaDG",
  "key13": "3B3SaJhCMXc3HUL2YKpsQh4QMCV8tgCesqWQsNQTbmQZZba6cVzWcTief9wqKdTibRrgVJhXYDcohxkTBAtWkKns",
  "key14": "bE3GZFQdizTbGSX3c4iVLXYcu32DegVJq1PyBaghgLjessJP7JSPb2ZEYYvSFbBeDRpaHnsqNVh2A7GS3C9SYW9",
  "key15": "2N4i7orHJCxHkKoZYD4sgWwWKqe1A3RPzBCkKtTmoBKGgfuAMxLmRRHFXHCcHM2HxwJJBs6zxMBFC5wTmEDyAVk",
  "key16": "2Wdbyf74GP5tx9zjvswfVxBZ5dzxeChbYNm6Rvi3bEJ7DKXPdcxyKn2g7KJbZ53Z5vDPcBLynz46itnggHaQ924R",
  "key17": "9Ce8RfsLtxATCGr9FtaZrcqqk1yKTGpWiDkLE3H5rPHk4baueTK2pCcL2TjAvibzzX7m61N6dGv3yPF9wEXSvHs",
  "key18": "36gcHFWC2zabwgUE8UYZ2UPzkoUWGudpGLXnDQE42JKGLCToAWJVthEnvqyuUNrjLXt4g1L7SLDXHNowDtQcDjQu",
  "key19": "4WdtmM4SbjpgxCZDCeP4DjuxRMUzLYozuKVdFbhbeAFRGPCnMXJPi81TNK4Y856hKAgbY9QmrASvJi2CwFNYrqrD",
  "key20": "4HJ4uuAyfMpwHmHyHTawqSupQi3KwsteQx2TdgrFan842ffmPe4zXXG2eKfbGDWKkJjisoXQAqmo5hvXeoPgdBEd",
  "key21": "4ZuFE6JVUu2j3uv3FsQW44WH4VetmSJWCqkpTiXo4FtaS1SmBzi37bL1b7zitZQX67KqezmbRVCxofwDvzC3VoVi",
  "key22": "9whUufXSTa3b3MQcGUpfHTdSpjQHYzyb6gTNERAeRMz6yf59rPJCordoq4HvE79nMbihFwLhrV64zHZ4aSTCZ9b",
  "key23": "2Vxzn8Hm4BjcFPYcBX57RoqjHYJLNaqrwY4v6BFt3sJ5PCzfRPjEJ9rWGe1NEBeYD1mfV16gHR9f22VKR32HNN5m",
  "key24": "4KpPJLj9tEkysbUko1dx9JLaXhxVXMB3yaDCakHQpcTiBaoYD1P7JvtXzNJeiac3gBSb51aFi4rKKhtsK8sW4pN1",
  "key25": "47J1vDwfnVsQsZLcuyJQsyFmmDCn1drbtSkQeQ5HwzZyVP1fdiSpGux8nLcpJ4nuAoVwC2xvAaRbMbRHz9PXjrQR",
  "key26": "3HWR2eg8nAVn2mpnoFbfDacA44j4Z58R3ZoARTLoBpRJ5vj4ZDHKFoLHzJR81QyGtC42RRnZNFVXKZkmVKrcrudC",
  "key27": "5vSy4hFps2cy4oDNM6AjXtCF2npcKgo6xoMMFc1HPi6QAsUzMJteZbff6LDGPqsvXvoCyuBJyHejbyqfVzuChrcW",
  "key28": "2Q88yjM9rvhCrDupR6M1SCApaZzGW4wxFbagQxEbS5hMzV5cRVipUbxbWrr7SEbvHkwNtPmfUrGAeYjfvEZmPybq",
  "key29": "283b6E7WT4yH8YyEZk4XsoMqzefWeNR5nKoPvhPhYkq8RmTNN8BzH7B3sHKXDkJdARZr4kM7Kin2JuUp4km4tFo8",
  "key30": "mzTHz5adwDL7ggs2kopfiHJFiGW4D4MSYeCQyQS7TsV5vrvNngEaz3MrafrAVWqYTf38Nxzs4yn7Lj4cvzsKYi4",
  "key31": "5aeiwPKQ1nQDn2UmAAjqed2muDkKYgaVLi4KeJMoy2BPNh95ye9ubBkJ1BB3pfpY8NnXqKqnAuWWqg7d3CofefWS",
  "key32": "2TnsCByLeBiyMaBXut3Um1FM9m6nLLavFSEHQBMjg4j8374pfMabrBRLXF8RQcBm4VqDZWvcBZY1XMQoyrmX1yLW",
  "key33": "56bNjzP1N4PjArMqwbJue5VuNftieu4CeTy5b7GNTRQtKTN83Zzb2XWAryjkDBKjqCvfdFyXJifXpaFesV5tEAZe",
  "key34": "4sLgogUBxJUEEMDMG2dynYU1LbVJM4XiLCuJ6EdhFgNK9wUeHT3WdVoKsfuMbG42k1uqLjk8NuX9cj9aB9APJ2G4",
  "key35": "2mBJPjPveuDsHyp9ktEzRDKESji9zCJZUH3sFvVKbDpBAgcWDomHMT4oCQPdt6fSyHLEjvLvDWGQeEzLSdCmaDqU",
  "key36": "3W8gMbeNtbzevuE14WzzYWGDs1UpzCaFY1jEZQ396i3VFxn5c5JSJLU1P35pDQ1RF8Q99nCpXsTGTwdtmQHDkxW5",
  "key37": "2peKt1U48EAwXYUvzSqv7E2R7wLEntz16xNeKzWocwXGSJcpPDXS7XU4jQMVGjfyaUiHSuupxNo4vsG22gwzu4g7",
  "key38": "5qVKr2TwbJfwrpBvGeJ4KkppqjrdpsaizqYTXBfyQUKhUDWkwYGttqK9iMaDaZK4Ta7wdpsz4QzuC79GN29nS5MD",
  "key39": "4bCCwgz9gUhcrxRzuqCdaJuGe3obSaTqmsaZwaxf7epBLgKV4wtKqneesVbTvrVpNcZwgVDDsQBjjvFAjkWsGcg4",
  "key40": "aZuGkqzQs29EqaL9jsXeJusbVWVD5oenBsD4uWKL24RrGEPYYrscDhUMtYpX474NB4dWU6qAdJyc7Rc58xqTugS",
  "key41": "d1Pzh42tWabkVXa7w3azpeaN5nuqCmDNKiwoYbBE52uEp9oFQs753STo9JWsEBuUp2opzArUzScvZofUN2Jk7Vr",
  "key42": "kyh9cYKoDfzdrQVdPHQEvUURSjxRBPf1dj7G8rGJAEGmBCGR1aEsytfMy87fhRAKkNcAkJkHrnSzfSMcGXCSL2w",
  "key43": "3rEq5ZM6FgA6y9YUaXUp6NWdofBjoLdLdkT1fqjycprEWYwWLki69jS1e9uzRLVQQHH4j4iuburndtkYgAr8FQL3",
  "key44": "jsbL3rohvfmJiUHBtjBBw8AKs2zKHyR94FYLzTTWzTiXA2b3WickBYkwNgGW4tRtcQBsBafnxVtb9EHTb7KGSkY",
  "key45": "3SH84bei1Hz6HinSfJdfUNSgt3gzTXTTjc8HqWD2kgkaCiRYvFNhJihX6bG2kS27BUrzFjxTDgtpi53ckB11L593"
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
