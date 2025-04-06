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
    "5p23XhnB2uLkoRDj5bg83UZcThDJJB1tb4StTCkZXQv3c9iC1cFLzrJi9ugDvniGaVQytiKJSP7dG1SjRf6K84Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpPzqvvsvRQdawCcXeAUm5zntqVJkSx2VkWVT8ApoSmBhuujEKYofPpCsADErCNVy3Q5ryaLWEvP8vTZ5SYhWHe",
  "key1": "4g87jXy1tbgYPu8td6iEYNwnBvzgob5Lc1JGCgxCw9JBZ4swMqpumhH3mbte5XU6uxPNcnxdiQ2oRRhxViUPLMei",
  "key2": "5sFzEx7a7FoeXiSzh9siKYiV22Tb4hiHGxNxQn2T5xbppgTfW8ASzPthA913fKpUwCgsL4JPjFQyUFPYmZURpsmW",
  "key3": "3kr9chsxDkPtCCE62e4jxSAhmaEzVFNaGfmQEWgRhv1eCdoSJ5xJmZfAv54Xaip6uPWBE6VGzRFn8wEGJXQtXkP2",
  "key4": "4ak2MYpAdbuj2HrnCUKKGmPq4HMu3vwQc6DKbTmzxXwk5psTG9sU5Swu9omFBB7iXbMjAXiVxpQ9jLd9T8DD8Rdn",
  "key5": "HKVGr97vKnkHhwABSFT4MeKiDTurLDAwPeqqAGK2zXHd6KMHVRBaDdwZmw35KC348sjn5iKxQBew9TCsdjEPWCP",
  "key6": "58TPyaC1jNdDVjxvCP8iqLuFBcYDs3J6eozj6o77C3hJcQsugcvuCtRj53Pjx2sRGtEH2hySmM6rxezSGQkXumL6",
  "key7": "4hfeKRN7shLee8Wk1Py2DSTf6EvYrHd7FQygVaPdgHEEAYbGH25NaMxQZaiZ5qzgqu32Ba3UDV1cQkMDy3cP3qGW",
  "key8": "3jkZMbqzpYPQVcv1KMtuzWnGFuWJRv9epjxg6dDNyb2eT2XcgiVbcho1XwfxC84DgN4hVBu11vJGoqipibX6P9C",
  "key9": "2UcLcxw2v7kB5Wr5PGjCcrikBrrdtexLPxS9m7bkwefA4ZNmnmdoEHzAJNXHo22JnHnbnwgfRE2BHdYAS1fDaitB",
  "key10": "4H3z1NgKNZ3vBEP6fWZfk46VSHkyoKbwWTLLRosJMqojXd7irPvrcaKWDSPm9eCn5k3bqZEN9sZxM7Gnr7NeBLAB",
  "key11": "4ZkeLbaeXc2hUJfMgyRjNF2bkRQGhHP5NKhzHRqVgMJv6gtrs6DjCbMWWQ69C5rfdMjAkuTRDMo9kmDc55vGWE7p",
  "key12": "Wmu8J2qtSPdyMieCUa2E2k5VRyGhmvtUDtEJVFLVarAjRU9k2NWCrr7nLKWMz9KZ3n7Hpc67C14f4TRDLVsdrns",
  "key13": "4ew256TLXEqD4TNTBaJKwW52EMKKd6XxMZfo8roDMFfD3QeAn3w4xJsLeb19i8Jro2qRbwr9mEzVC8iJHm9FU9Uy",
  "key14": "49fiyWGTeKiHASFXeJSuqv5Wzvwdn66pWkoC135KayYaRjBnY5dqLwgpk458fm6gEbCb55WGnmtsu7P7AqJUeE3R",
  "key15": "4z3rS9rd3hbZNiHhVJKJtM4Aw3A3hkSL4dCMBSWZmDQAia32EBK8Wmwhpzucc6ynb14io7CuWHTEQz2zLzws59W7",
  "key16": "5ReJCnPavcSkxHSzn4V3KjEWY33p4abrNRuDKpRa36a19Pqj3e7rfyRSUXC5DLjC9p3tAtKZEXSkkGGUoVBtvrWT",
  "key17": "2aVHbpcQ23EbjDEBixLJMKBbdnAVyX5ac5WxqWpXQMoymyzdeBrYBwWR2DBzvevUSyp63GbxHDdXEhqCU6EzE6R3",
  "key18": "5HeniuNYt2xc1WfMGhBpmDgSJob1bTsksJ1nkZfdbJHRcTEGcwVm4RS7zxKpTAVmmEzEruttpgBrUbmG3UNh6PPN",
  "key19": "tRjgNV4Ev24H13pfZ4i1RRteAazXN1R6QdWZV6jBdEjyYwV7iA2ao7dz8iWmZJv8LgsLqYyZrvC4RaVu6XnX5Js",
  "key20": "3SXAesvTFRErEm2o1ivFTCJFaMvj3mNXHoqiqLW5jTkgHALA8scUaWDj7fiAzLdvVy7im8FWg5QJunnx8X6GVt23",
  "key21": "Hq2T1bcvHi1rPXFnXjFVUfR79evxnn5BEkurQx3fz1uciBsYVtVXN1cktKg9iXDPA3W1jH8i365xcUgh8H7Y392",
  "key22": "4YogmZf1D7oHcJjqGxLDLFcub8oNyK2mtxhmrY4WKAoMWc1c7CiixZ3uJrmTw6GHkd3PCjE76UaN6Cs8hKgRcgUB",
  "key23": "4SvKrEQQSiUND7swnQdg5cqrTnnojxm1YzbsjGDXM1uaMB3kKCufwf22by7iQiKkpKHGUQDTNS5pjZ6kFu6hCtnf",
  "key24": "5LFFXXMshqrLo2UPYqcM2nrbynvSvCem12jLxCrsENjDQZEUM33nn2UcboftCy9qLnXuprHfYiZS7TeKiwbkxVUh",
  "key25": "4szLzZjuAbJkvZCZRHnZmyHk6umAjCxTeLUmAiD5WwkfVLxUCdGjyXyZVwshQMGNFErTnYVzDT5K5hA1nrEkGjjn",
  "key26": "3ooWSpwynCQpc5bBZxNzuGBYLJTtxFDmDYhupHNwkreLgUqdSSQeMWkK5PhKFPgPcfUv5mqSbJEYAScLcVV8swj9",
  "key27": "2HUA3bXJEBaQFdA6v99mT9o4F9X4udEwpChBJyEPcekq7CJMuoSHixiC1AqM81BGY6bbLiY59zFQAWCSHGgnDTsD",
  "key28": "4PwqCjBekcf5zP3iTQYQqyqvF3RXkENbRiqhBJde2PgMgwguatCVHjyyK2u4nbm5WrCAKXKjCRhxCcFsbW9e3Ua2",
  "key29": "3r8KdJuoRij8ZMbDPVubocaEV8NHwG9FZqw4JrGnUnJJsLMeqNrRqqZfhB2ni7eMFVashFf6nuMCySqr7iqNbiV8",
  "key30": "4E71hd7LuYy25QJYK9CT4BEVm8Naw1FwJzeGiSqUNZWUSdD1QkXYQjwxmANQPYiNndWVdrne59TcS3ZhkbUGxBji",
  "key31": "4Go35AFwzNFq6K5wwsRf7UrxP7EkzEqf9jSiLGG1AG7EtbtsWZ4UwErpG11d32B7YaR4S8ZQ12aBgSU5Kt1Yaoqm",
  "key32": "37aS6kSVNU5gGboUvu5Dd2xNaLsFhAFGaDExXXRHZVfnxbuG7Yhx27uKUXoPGcXgVfpkgzQfjDjYBYWRUgiBNQj5",
  "key33": "31tkernG1yJyDtvbcqzQGGfcqR3gwXUeUccsQ5wAENXBuaiJE7ugqEphBtCjDThqeAWZcAi8scWcH9PdznqX6tsd",
  "key34": "4dpf1JoxMqHxATDYsMzeQ7zP46GsCpVxFiq9BZf77yQPSSykQ4vgmXVacowysrVtj3DMHMeZtZPZ6MvFKstTNSdx",
  "key35": "44NZAFEKkhFftEh3x8baX63SxhjSCT81EtvEm7JZfPamwM4ZaTMBdsnXx5HZgPS6BEXFLxjY3UL5AQnVrnwwdURX",
  "key36": "3LbCYxSQvPZKV79B3syb56vRRR2LFcfFy2pmJvRF8XWmWPXghWdbJ6XeZRyyE7Xc79fw632R9Y9iNnqPNREYyP6V",
  "key37": "Gv2TY4F2ASDncD5FALZpWHzG9UxZ3QErbMwWsg6RvzfXS81F6FuyVjwXYGNJbGB4YgcxDnoL2n8AgkjEzZJDoMa",
  "key38": "2fE6bBvaNWM2z2X7aM3uAxMUat7yArS3tQ6d4Y9Yw12hUyGRNCBBwYB6dSu7C6pA7mJ3AzHCk5nghBXvPzHaqLRe",
  "key39": "32w4FYNBVm14iCxRq2S4QdtFrEpujSFZcs2K6dCHWB4E3fUJJpBiqkTvhX9QyXnKuAzgT4Npu2MZGH88A29jfrJc",
  "key40": "dCvE85SCgFWfpwAizqS6SBBf9dK51ZRK9U1J5CsF5VDb7bVECpALf9cRwFw2hd5CnKvoHenrZQc6svyj6arUaS4",
  "key41": "8Wo5ebETUvMBeqHdJ8giX2itpyAXBC2r7vJLqZvcYHuLhhZCtkUyR2Eak2JwtWGbJtNNHfEXMp6fSz3g9PKoPec",
  "key42": "5iCWgEhvScAPjdnEjvDtJjP34683Gq6U8s7yDPpA7a3uKvScrXFBMjojw2VYx83rAyovEb431Gn92HSooA3pL7AJ",
  "key43": "4SSz1M5ymk84KY1XWKBxL2nAUP6CgfpiCMsD3BArBHwuVY8yvGHLMLsDmutTy2FYkguJQ18uNQ8XJtGdJA9dERbF",
  "key44": "5dp14B4htQBpFDMCEoReHonQERBcxEW6oAFjzAYB6NB35e8M3sPu23DZe7g7LiDuQgK3dwRoxLao8mwt6S9tr6wn",
  "key45": "26uCUbBcQGfg4nT8ZDZRHuzL6fNYzzdJACMdFNTooLo7HGfzSah68Zxk2TZwyZczaA6VsCSrJrHJzH8jvdaLPW2k",
  "key46": "2cuVWdvD4iEHKev679G3qe9Y919K31sRfcQtnNjPz9cdzV4eyuznRsSoQgHGyp79ArUBZfSkHWNU1vjEvvMpWGXH",
  "key47": "fJdyBMWokWLmDcJ58nMfJDcJSjhLRwLPXEpQgp6J6yRjkwAPka4ha2zRtxE1ttfstuZRZd5BqzctNq4PD5oGT76",
  "key48": "2JoquutuPgcDVH6tYBYuoBVkyM6bHtMPBbmCW45J59KdTkwQSb11wTJ2Tk32evZQCFTJjLrYfYyQGMZS2mgoQ8HY",
  "key49": "3BNMYj5AHXLekEHwLvyXLdgm1vLZwnc1UZd8hmNHP8dmi66zghwcwGmwHuF4U7fdDXzg13mcqxHCGAfyPZFdc7nj"
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
