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
    "48J84frmtxoobwkpzaxhhTjVYYNf22dtjaMChBFD21pJ3L9ARvyHdb81C4K45aq2W7ANF3K4rmELWngBtPHjxDRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wHyP67mWJwQsGLCQWyQZHcYAWoMqevzGLT8vxadmtcuj1xyBJP18ri919RpaNdUj7URY7ifb4LwhwNF28zL41K9",
  "key1": "LCSGFoYtp7KMJnCR66LapxvsxaiEiRkSDSHG3hvTKVy48A67bcAJ3RcRUgtH4jBiwuy3urET3ivTMKC3GpoHnoR",
  "key2": "35FkcNcydAd2NJWNAbSw8RwejVWJ7tx6snckNkAAZZnawxXwmyGQWoLkmnTAo3PXManWmH569QsXU7BZG7RadAVn",
  "key3": "2gwY4gx3cqN4C3qwDkQcWDmjYghQvezuH8K4iYtBXf7VUfpCu4Nsh4MoDoKhGM5mRZVLU2xChcpd79BhqtuaHWYW",
  "key4": "WbtkjXKvU4nyMuHzjfRuNPW8gn4s993UKogLjVHfPcrY1aKbgXBsLcE6FzJbSqMv9yHsUcdck2nALDBPrUCZWYM",
  "key5": "4U5Vp8SofvwLQhPtDFJvT2hU15jrL5WuJay6QLCi9B9PMwPMdfYgHzhWqjC1Ej8iiBqTXqPrR58rFAayWMxcggQx",
  "key6": "3XU7R1u5fyoEv3fSknnYU7czvCz2M5mNSf5qsdSvLZ9TWsLbqemJxXRzp3CQrVzVxTKS5F2ZcP5ieEUWAQhmnVm7",
  "key7": "4yNfQouqXrHh3sgppBj8hMrRQDmJZR4UcJVghwYGSBPnnT5eiG1A7JRWbtXzVJJf6aqfPtMyyRWBeVqxvi7xoR3H",
  "key8": "64dXN9zTB53pdLCDoyiRjpkrCojWuiRFmKTXmwaay4C3vcBoF1SrB7fGJGmxB8WezhQ8HCdXoW6Nrrcp79mrdFy",
  "key9": "4bSJp1PJPqj1gE2GBkU9d1Npe9qVQ2PGAhfBijLaFceWhiUbRYvN7Tj2r7RnqnpAVAAg5ZMgSB5caqxBUKBLZoYD",
  "key10": "WJatbvwSm5T2qizYYohmAeKKDHXofuZMCCyQACgSYYMhZFotqBw4tQQSQq85zAWCrKXUzJEXNAKSnjju7wVSQUv",
  "key11": "3gqTN5CPDttoPtYXAB8WPPA4hcZappHUYQ7oq3L6bjxHX9YLNn1p5Nh9WMnpMDxNRtynu4LMt8iDFtAAbJb6Q32P",
  "key12": "5Jh5BcQaHVw9mbReqLPFpyPb85CjJApesanbqQZbDJ3BXah9uKxZ3q2PZGF9uZ3CmZFQjwUVHZ77DiyjdSefkyjb",
  "key13": "4zUfA1AqZiN5tCr12wPkcTNEC3U2iJ6xTJyMJSoLa9JkMBpPvAaNnaGRnVSAgdem9941m431GSZuEc7tXWHJqNeV",
  "key14": "4K6svZNUjejr4zRbozTgxKdzFnsd4KzvBgDzKwuC7g3z9rMv7SCC4o1UM2kDnR9DX4i1dqLRL5TSnv3kZS6tDfa6",
  "key15": "4Dp1dAZhMP16jL7YHLhEwXEht5kqThdmB3rjajm1QNv4wWi1kLBomLp9Rj2X5uxfhvjJitL5hTZBqkBZ7hEA2nJB",
  "key16": "FCoVqjwTLDEWmMQn7BtpkKqrkZcA3q6d4QySGaWisg5a6e8d4beHMtbRqzsVoyDxoXgDvvZ57NVqnS755Kzjgqk",
  "key17": "3h8Hy1WSKKafZ4tvABZSUa74SAHVM4vDaTxBiUmV51qnSF9ey2ucBa5U3oYBewLhfTtFjDb13mdjVKjWB6RZAawG",
  "key18": "wk31JSyhUsYUFeEhnh3Tg5pnsKr5kYsJ43BSmAHbxSUNDrnM3sqNy2W78cmyvLYQL8dRhGsYLE9QAFaREQMGbx3",
  "key19": "2upj4cPzyjH6Wbx7SU3sodiQyhqm7qRK3rjcDe1iZXhGq7KC23G8uoTeMZfeBRAQX7y1Kni8UyrkWbSvsGSriJiK",
  "key20": "56poX12BTC2i2N4qExiuEqdLw8utvqUKJvGDjiAJFdYo8nMhVPqPxYnvd5itaijA8apCBLYV9R4LDCv2So2CxyZt",
  "key21": "3c7J88CDGchF2MnpJWq4iMT5UUQmdtmvwquAmAwUkvTRMjRScLWTRaCKT2L8jshXj7ZkagmbiYyG3BVWE6wz23LL",
  "key22": "XMb9zBe3Lia6BgXyuufKG6mia1g1ufHdcs9hB6dCNTtqQof8MxQH5MdsYixAjfjUHP6g8rRvGGpbHUyhEenXTWf",
  "key23": "3VFxQx8DiSEEc3Y2McUsp237KLy974f8fPnRgua9oYHq7dcZcMSaVwhhcu4FEQShaiAcQ7JhvDDnAejj3WLpsNFm",
  "key24": "4nFeSDA86fn64xEo7cXWKhwJSDNad49S8vK5hHJ1td9dXAZxf1JrZXo2wxE2zo4o5jjC62caD2R71yvjNwmeorGe",
  "key25": "5TemMcUd1C5AdyTC8HfeacJ8YB4dhxUvBHZ1oyRJA4koJe4juXCdShzNg2rjnsvtw3hXrS3EBkcGqGnE3WB9ikyk",
  "key26": "2XWUn5LuDuHFhhBdGNpUELom1fawqmHFVSjW26RWAoWKRRF6sUX6v3xhE37kEPFG6SWm5cPgFLfvxg2vYByRQ8Vn",
  "key27": "53aQ8rBVmZpLisjECmcvhw5sAGEcwBjxRsQenMFKfCBBMoEyrZdkMYe1gQNK2penxJFn8Q4vxxnTu4dXbnu7wEBi",
  "key28": "32xpdzTVeGtZsfCbBW9sGPubh6kSoN4whErQ4WnZzANjWLLLViugZmKPBXRbUCMWUacEc3RGKcqJqNncxQzoXa6s",
  "key29": "4QgKCNjVzLDSVRrpEbZzNrsur9p3oYSh2JtbiKsntHX14Dc461efHFtTBXeFygZTayK1dZaxxv5ZQbJHw69LzCij",
  "key30": "5XrsTfGfXRRYDLWv5zeAWF7HtdQV3iru4eTJsNpyKijtHYdySR6G382T4Q9kpvK3dekM58aAgXJajd7FjRs6V5HE",
  "key31": "674coYpWUy2FDHLX663RnRXSJ6vLAcEdDwuXzanvTM4MHzSunEBqMm9P6erzPjNWaWte8EeTa2V7PoPdoVA3Q37G",
  "key32": "3M7BEGenccNm4KXHGxqjZra6AqQvZuCkw5sKiuRdKBFAw6Q8gtZTzRkmTPvvEeLDKSouGK9fVoU6qSPUXSPWYMWz",
  "key33": "VprVcyuK8cWLbK8x9TXjkTsXNCht5ph2tqWN5UeK6DzJppmWkZNPpPXLuU4FJUwNroNpTVwDBqoXR2VVyiGnLvZ",
  "key34": "3Ni3KJP55n7KkLUTYHwHT4z49pq98iJcgtMBAvWSycUs8rr5ssXr8nToFLwXG5etQkzWFKVcw4UweDhQTwPhNDjs",
  "key35": "2v5nMG2AqDxxqHP98yPhRSVtE9JiZjsWG446H8bovEVpwkEJQNLHMr4DVTprYmcQf6jkASHDyWX9XcX7kJ4sYC9J",
  "key36": "Ehv2rokNbEEyT5wuYSSxrTmVcV48CBhNYJwS2C4437B2URtPHYBrq3DKSnXhLuYNTCPJ9YLSwEHorUHjY9JkQmQ",
  "key37": "3vdgVewsi9rPjpLVEkBE8kcv2wS3NCi7qYv1bDm4jnHpqAkdb5bKfB2ptadV6NQQXyMwu4wEPGCD27DSP9HACE45",
  "key38": "3PJV8nYe1rj4QMMSiAgNZ4rynkHveCnEYZ4hZht3KxjLF4PoNGWmZAHzuujB9YNTef4FCTVeuUxY3tyafYh8KvCe",
  "key39": "3WodEbKmN2R649iKsHVoLwGzf4QPmxiG2X3HmjLVvKBb1WRoggvzxM1A4CibsCvPfC2y1a6RuXu4UGrAkokEcmLj",
  "key40": "2fVyYAXdigeTmm5n1NqFXzeZAr525BUFoHXweyaswHmvt3rjSsfFyhfpJx3S3dgfMCcbQx8xEp8Dq7NjH6NKyQQn",
  "key41": "3LamU8AgmmHTkDb7icJypUtHMhgGnNESp9bkw2LkD2Nt5FNGQXPi6YqsJ6HfjRT6teXewizdKwJRF63keHpV5T28",
  "key42": "4Kgbccr7KsF3nP7NSyuWSiAUbnjkoFn8VmUuMzN9NyxXHfCEEUBxJCJbmzQrB82W9XFw4UWneb4ZXzKagTWeRL19"
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
