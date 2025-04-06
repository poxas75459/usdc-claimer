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
    "spquSMtLUKqUC1jPP1pb9TGTMgRT7HxS1dXznvEqDGcG8hhMwQv3k5wMnYBxUs1fS552zPfkhvCXfcNF5Eoa9x5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7a4d1zWx5qx49xs19fCpbFP5RBMSdDp4CN4ysQ3yRZCF8rduX2t8kNhZCx9PiKA2ihJzYfsdsiNJyC6diHCCm9",
  "key1": "3CQSXbCTYn16LnMLW6XDMo31RNfY1VQ6SericX7x5bJkwKHVRmL5Cz5MYNnqHRLfdx9BRMZrLHxutS4tmgQzN1Cj",
  "key2": "61TizWE9tihTFFjevztcre7L3SKrNxZprGMUHwV81utxfctdcn5qPRf2KLV11NFBBmBtGgQcWc4febQtXhWnYHaL",
  "key3": "3rbvC639qexNgyxdqxZFJfD8qTjhkAKTKyfZpNPNfvpbRp52P5yALvD4f2cx5Vm5g3eMu5d39MSSPknogTwRKeRH",
  "key4": "3fyFy7Vf6LAZSz3SFXmVFMDYsDdQgjp1Fz7kokyDweGfy4NFQ7W4FyKKVN3vie55S2JFJ984n5jezH7BeZqy9CoT",
  "key5": "3h7bFfesyPqaFs5sVxozX4Gfa3ZLGP4wUnL65MEC7e5Ch38KJ36ZFW7tBcYAxJCSYHVqzYu2MZ51PKX3RjRB7WmE",
  "key6": "2Ybmf8JzAWNhmPe5wXhrDAY9NJgZNJP2hpvJuoeJz4yEV1zEysah4PSEqVETAK4DKYRUTgrZQYoUx3vmx3NxxCvH",
  "key7": "K57GxZw6bQzzuBKY7ymy3LEQxtn5B1uCEvP7bGiwyGU9SepFCuL7DJWXVtV8Gfop1iU41AgnUGwgtR956dVzUGg",
  "key8": "66vem3StXFhoDmGjikgZo5yVgBFc8KwxWqRmyKx7coZHJB4csxibQvXSGqjX6zGXuJTTzwkz8ETK56cA9VCH3dxU",
  "key9": "2C4kzXRS8KPu1WekDFrFNEfP6EM3esu3V8zYYrSWMLXp9GiuYUcTXWTGRhPfDMMUWFHSw5hRXiTZoqne1uFYo1CM",
  "key10": "26aCmBp61NcRkk4DCnxt8Nt7SDXdNft42s7eTrRD7qopoPjuPByKSv84kFNQfxo7sk7BZ1hfL8jmJJG9acqQ6cT8",
  "key11": "KT7KA1sCWhT4pYf9h5XiY6WGPqKkn6sqjjMDyvdB1XEyvi2uP1fVhMDPBRv3t2TwsDrNrTztqmwC3jJ9rqiN2z8",
  "key12": "3srZsWcwREL3FNZtjjyQon7NVzyXPqi4zZ9b9iUaGhivFSoa4BQMAzqHTQqR8FYbmTkt1URPcSspdPv9uD5egdGa",
  "key13": "28vD8PrJfSL4YzN7WZjXpRYP3ya73PxLWBpEVDvbqKPA5zPRXhCBiRoSrKxcU6RQ5yr3UijrTmvQUZ2XSJhw7LTb",
  "key14": "322E6UgEEmzo8i1XcwC7XbAQekRsoYgBU3W49Qj2PM8bsn1L1jNvYESc9P8n4tzKoyZgVzbiiypTVpLJm5hPYrqh",
  "key15": "3yquQAMYLoXs8NgRuRcJiiToazmB2ibVVGjH1FpULWYS7EDoBSGqW9yXSxGEgdjs1ZLp5LS9EiQgSEJfShKWsHbY",
  "key16": "33ipbSNJ81Vsw8hTxKTrYxbnyLXNBhyV9kk3u3KEWYR9eBi7MgPtFFgBYo6MRtYMqnioeSALjM3Ep81JKwfd5Rrn",
  "key17": "5oVBL7XpaLp9t1kT1vZAw5ca7aA9M1rg6e9GfYPYKNexUez99DCnEC1nukqBiwDfyQV6UaqsBmYmUAbiTCvyWNBm",
  "key18": "42opdAa81STjW96bpxUGbJogQcGiFiybbRjfJp42Gqwk1CtgNYtDaMf9YmQVrLQ6n8EbP6V1emGdjHY2vKMGuwbL",
  "key19": "3bMLYYVmDE5hHF7joajrMCSLzuNVjBBXtXJMoUQhRZ97han8hS4VeT8Ap8Ec481DJzrJHyfmeZbzYCDzg2KU6xZL",
  "key20": "2tqT19Xyj4xbNo2tWba3aZFC7pgDcYwHXYK5q3fZB4z8it1hSGYVLSZKBSHyYqEEVC3hmoyAy2D8hJFE3tZWpFh7",
  "key21": "54EJY5niHacNpxEzxyLc2TkcrhEwpMBSwQktjvYMX8kM4Frk9vxSXbD3soupJy3hCYVsn13eYzGaHFqmSmYi1iLL",
  "key22": "5tjAUEY9cT82KcMfWFfqJSVhvB1mSfsh5mrMA4ZDBFVwbfAFL5G7ZpYNP5HJP8FF2EXGCZZX3eiRYmKrxFWt9BXv",
  "key23": "24Vod2oJbx6NE7Zm5CquEaFXozTJNxVNL99G8eK12FqMQCWxiHXdfyBsvzUSw4XvQYsX1sSbpiCVNL9nSb2J3STx",
  "key24": "3AbN4NUeBp6AiSYuWCH7xJFTtEMXtQ2fVv7t2z1UtT4hdWCafGkNLkr8sMrsLnEvq6XiAi633mBoDgLNnyFKT7EW",
  "key25": "4hx8MLmVX4ut4XgtC8vVk7xGhzysZJiDzrz8agEg42AbvPBXCyaWXrwXaUNoqPFVc3x2xZuHt6VggsMkoGZ8oL4K",
  "key26": "2Hr7WvkgpCKWxZZuEEt5dvn2j5VVVPD1fqM7k2VCWabzhtT5m5527Ge9MdTNM8ruq3CqDRwrerbcowZiCrRibryS",
  "key27": "2qNdBWrgzTUoGsR5NboUYD1xLwNNLM16pJnKCMY5ERGHjAWifa113bAWNKP3X9tCwD7sRVVKCw9NKXsHRMrPibSi",
  "key28": "5qh1XJRKgjFLBauxVRfnS7oqYg1AEYdzGt3HvNSJ8Q8hY7whJN2Bno91tVitCaeFV9dn14s2DG3mPmYnHJhar4Jd",
  "key29": "4ABkJjguDJHkB4C7J1QTP381CuHBvqR6u38Q32sgZEr5AMxvWhH2TuFYyi3Q4sgUkGd8awPV5jJ8nKoUJu8c88Cw",
  "key30": "5kbWWqJ9TRXeGkEuAozhhC131USc9Lt2jVWJ7DiEHtH261ryBDGu2pZVtbz3eq72wkDVPwqiAPMrcSavc5bHp3kv",
  "key31": "g9k8SBeJkLMdCTpPUoFhhvaeFtEaTjAqe88wic23zbGAunAjBurysevv6ARid42Ze9dm46HSrnoVyKPdksSNWEK",
  "key32": "4ZxAkkQJf7iedySaTNEATuyXvcc2Rr1EBcg8biEkwRV3jyDVJMwCa1rvkKyAQsy6wLnaVBbB51Jux2rpPPPUbLNM",
  "key33": "u1x7XG4obQUknXnKWWR4MDuitdmY6fvwAUMeo3LycEaU1Eb5xAejkwstMMsNygmqzYvwt5d26ekzc5sJsV8RQ7S",
  "key34": "42JPMN2zJa5k1aaqyiAhRpbaMPUE4t4C5yWBvtK2vDVW22Gu7Z5SgwCKAEL4wyoZxeBSHeK3Cke4kDsqxdueT2bX",
  "key35": "5sCaS8JxEE8Ze9eBkVYi1sSgyLyoYfxizSAUgWSgweqP4cqwgSKT9bNFj1yFKJED8vkiNPyZ7VDFcQqze5XVqsJf",
  "key36": "5t57uiD4HMyCEXMVbZAfUwo96JGAFXd1WZwYSfhHKdz7pjPjQs9hCCVP6H9t3SQJHgTFbNXF4TvxLF1cNFvYjrbc",
  "key37": "3GRkp9RCcNmJmS3bcQ4LZJpDdEM15FUXJaGDA83j7iRwJVqWHsBTGDMYWcpufkf85aYcPWJqTe4JTu7DuzysbAdJ",
  "key38": "4GWvP9Uj4r5tB3p8oQin4vjQqYuSPmgdSRjGrrNJkR3XtnwvAbDqdFmQrzZPfmFhLruHuytFFZeb5Q83oLTFcob7",
  "key39": "wCzKNKQRHRLiCWPJBJPcrNwtpAfB8NrHhwTLhSHge9HVC4ssF5eR1SiC2pSMeTHFXFox5vwQXDkvtp3KuDmmNWC",
  "key40": "3RttQHJwNGoaVj1LsRi2vQCmixXVqHBuPyxaUxinJE4cAQduphwhPQYjfKBqw1JZBrKeijkUh4xYYPadykhL89jc",
  "key41": "3aXhoRDLbfxwW2ZdoteHLhwVHFPySBpwx4BUBFLMuMJVLepo7iJsrHaGNrJ9XfFi8DS9etLQWFLPJfpriumseCi7",
  "key42": "585H6t71dHYk4Dtf4A6D5THnGQ8nb6R9EGmN5EZ9KqTBetv5UJ4MYaBMMZX3ocmWKGpeNe2XpAstUZa6oHHqFdgb",
  "key43": "5QwNi57yJwtK5sSfigaXmeZygCtPVJ6bSQpTKTR6Qr5TPLpvZYYkSjNei11xPRoZoavstDNkevBWwvBFim1SsBpP",
  "key44": "4djDqCE55KZRhkj9cmxo6RdfEZzc8hcCEZKTKuHRGqzSj2SLUdaMsLNrGo9ocYFkw4q3Zo581qTQKVffTBowqq6E"
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
