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
    "P6jo5BNT9hJmtaQFf7ErTscbec3CiS9Uc9ftZdLNhzxeZujfJ2U41NnNj9nn1fu1pEV1Ri1vu7q16apfgFbfu2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZoFZ328ng7hTXJuaAyb6DZPRe3sweVKFUCkjbCYN6hUvqJj5GXycGHXDZR8EqxMcBKJjcMgrbpRSoL3EXHkJiPD",
  "key1": "f8JVQDUEp1ZArZnJ7uUejZz9HS2jfAXJYE2Lqyv7CCrKs9F6efkt8qg14GhGcjRhwKYgMbdN8xM12FqXMLG8Fes",
  "key2": "2ZzZSFW9yazU6MeCrk4vdRXDV3RKxaYcLpybESJBJMCaJP8rU336eztbp1wmVi68rM7PSBbqR5ynpokvks7jRW2a",
  "key3": "5YubeBW5Syuj5erbgAqJLgrrwKjef2X5TS9vHSBaA3AWAH75QJoGug1kpSQkRjNMe8xxQzipZqCdQtdEogjHSH8m",
  "key4": "2JaKVcJz5VexsuwTsV9BHLsm1W47jVDJWw7e8HaCdBtCoH9syGxVED9fKqY5ggYHmb8PDRzDywXDcSdSuRpWBXNy",
  "key5": "E2oebir55DdGFhfdtGYiBZs5wB9o2ZFv6Ya2tx1ScazSdAcugRBJucGqQfZFRnLudASxzZzow5NRLhKpd1we3n3",
  "key6": "xWs3f4ArTy5EA2KgziLmwsT4fp54kAXeujYVuAQ68wDKpbQXAeN1ZBZ72snPgpvv6Hc7cC1Y1CuKjSjDR3MsCDS",
  "key7": "4Czwt4ZX1w96FiYHtBAUv3A2ECCop5LqdkzXJjfsc32UhLzH5DNMnghbeb5cngHQtAGfthGDEmfGcuRgjbUJAizh",
  "key8": "4QTvByP3fSamnz88wS92C6L47aiTqzvcBooZxit1WD7fN1mrFfwmVbV5tWCX5cNEn5DjtJA1Cf9mocjrCARc9bVr",
  "key9": "3M9eSdTG1gAED1PrsVnbS1W3x1XWKsYUTtuhfrvXDwBp7CPWhGFTPMjNbqQP8WNJ24wfHhY2MPo8iXjCjV7rhY5v",
  "key10": "2oac7JMfbShZEr1uUxNDYZLMTc8adRX6Xhqvhnvx3oJ3411zhZNtYMboB4LogugbQ5YZXDCMMEhxY3eEYeS1R1tr",
  "key11": "3F8pfWUUP4ws91f9cZWPXDq47HyWPFtDhX5F37hjAh3KwCZZvSRBqCgWmhQv5twXjaVV58HftD8wUBmcaNcvZevJ",
  "key12": "49S8krP6ywJSui2D88jCXAKdNQqGLurLYkPn4Puo5FMEFoNTFhiJqzHxTBZWeU6LjFS46iQ119YdcNyuEzH4kMMh",
  "key13": "4pK7SNdkqoDcT7d9sraBSSG213rcgwaZUtM4KqMNHaYXsxhysR9iwKxbkf67jkubWMvBvy1RjZv8ZZUop84Ctvub",
  "key14": "3iGn12byEREyYCBtXdmm3xkV4p7unanf55bgummJ4sdVmesu9kr1s82DtTbruHRsLJ2JqWwedeaPGb9s1ahuEuBM",
  "key15": "3FrrNE7MiYL8fRxzoSezY3kWWcYEL1A14CbTQTgzpSxjnVgXkCYCNXt9pGHEHanoEhFFKcXUq6ERhsHFCvQE9Maj",
  "key16": "2LvUDc6yg3EXkRxAkvbYqgGaaqZoAUyVLiv9hUeS5FzEB5QCT8aKxS5xZxCBsHyL3tKJ7bPevRyqYG6Gq2yyCu8Y",
  "key17": "8koSacVmcDkJCGzoYUbNS3aN6L1QtikVMPVDp1kWDjj1gvyDrduPxwSqEs5BBBmFYVoNqqCaNN9im9vKyU5mhXe",
  "key18": "4DK4PL1Wk5URobY1igHz3XbQNSDhDjsFCz5Uva9iGZLktkndpPoCNBuSXyZ3o63K6qmCZNsa7GLCa3yjWSmZNNhB",
  "key19": "4ZgibqQcQsVGMZcftFgUx5EYE5eUjnta1gGpiZwZVX53gMoguw91GSFjyjCb1HdcfjJpNF7M74kmyBT58LyGPYum",
  "key20": "47UqheGJzYXMoES6daN49zCkgay38hd2CBmoR3VNgQDMoXRTb12RjMU8W8XuXBtBWHGH8onW6ibZNVQbUWCfKkXi",
  "key21": "3Qy4g82J6nQddQS3bpqec8knbVLcHExfas924ni2PMQgvtdChJ63f62NEPuinJMmf2PF8PD8PkrkobotFT25eDNi",
  "key22": "2kAKNJBKztcWRvQTnNPUo29rDAq5y2rjXKbKFV4io1XqFXG31dg1FPtWAjsTdtxS7FiW29QAKgPTex327U1MztkZ",
  "key23": "C9TdetGj6DZJNB87fexgRwv74fuaqyge8Vyyp7zqeP2UoUdqqKbC9KjLAshFx3vENS2kb5kqhN16abhWJGCTk7w",
  "key24": "3JNn4yB8aDxY7BgeXLS17zp5HJHg6XBifsfNHNxUasB7yGc5pLNHuQhborvNmPuX2yaA543cWaoWopMrqkHQVKy6",
  "key25": "TR5XB42CRQmDdpCm4Q6AuZzPTeob1bbM7dYTBXS1bMRaWtibyfiDmfDJcZbH3NYH9MgK15oMss5jAuVu788KprL",
  "key26": "44wgZBwsCUSaerPdB1HRT2Lxmmyg3HBnyk2HwybpLpCuPbdWrvWvN4R2pM2odYW5aMfuvUATLpkaPjv5dBjan17n",
  "key27": "21LkKvzoqtH3jQ8MQoKp4HznEayCEjwFXNkMmK6n8chgVX7cERstJSC1hPQtSjRDhFn5W2ywRbNDP3QSvZRD2Lue",
  "key28": "WXLE13swbVa5QvYBQbt9HGRMvCd9UeVn2amqiYDCcPKt2BLyjpiwHxjoWWrf8Bo933QnDDFX3hjqtTFwft5PKbz",
  "key29": "3uEGDnpy5G7pX8U3BZBjah5AZwfeZmHsZEqKQsjXH1eebGHjgpVw8NqCKaJdN2tUiQEswwRZhWbx624UdSrqY2Qa",
  "key30": "2PYVbfYvKhLdKFh2tVCVHaF5a9DRLUrqcE6oWzaL9nr3S1io72nvjzM5Few4fecv7rWuC5GCx7DA17jdnuxLJhh7",
  "key31": "9wBUHjCwwNUWq5QcAWQ1aaMCTzoSZnGt72uMtj9b1ZvgREog9UpKfoDDxW8SizWcbVyMbmFChkXySNKX4ZmEtkV",
  "key32": "5G8HrzEA5XVyULr17kAaN3Cvtut54Y2z8VDi1tKeYDWB4JoKDyXE8aEP1EmvZ94kyKsPBBmkxvGFwMEbdHv3naRq",
  "key33": "3acfMkBdzBZh6d7bGCNn16HiosVFW837BRSso9P8mdFLDMxKR7zdUUJoyQeif3WM3xfACY7NNdwbmDiTUU32DjXu",
  "key34": "4qKWtxH1Km4zPTq42EEdnKMNQ9YgPqCokVgxbYHTbMF1ka5kC45qaXpFTPxo9E14ybeVdhsBQz9C6z64QgjLKDyA",
  "key35": "48pYnBoT7ZBWbr8NCmen5D4Urk8jo3ZBLP52bn3nPexq5ASQrmPENy2vvTqPDep5eyr4xrzT4KtK37s38zQ2R3KN",
  "key36": "5nyjnX23cnzSjWE2QMPjyNpr4n3BpvMKf2ro4YP8ZoEyQeZC3yhYyZgX8K9qWCStYnNh4qjHehbfNoq9DyDVsQKr",
  "key37": "2abkgRyuDEEoe8NY2C7DFTRNjJxksYGzi1kA98zLo8SC2iMe1Q9fzKZQbrmv9Mw2mRHkvbK92NJDCwajtDpcwnyU",
  "key38": "3EwnGfbcGDrG6pi3Nty4wLRYLgtBvFZz32s8wZ7xtzpDehSTkBtucttZcdKqRhYswtMf6LUg8nuhehHPqqxxpYAM",
  "key39": "3uqo3E9t1R2rYzyTZvb4aF7MK9t4uL9vdgpoMbR7zvEHeEzEsvyU2tanropbgiqGCxNwboCiNHwiEqbCUaGp6V4Z",
  "key40": "34si155m9w3HS3kPfU44sZnh7FHCCvPgGxe78hqdbYA8ABMSq8muJHZpf2m9zNydE5cB6w6fd6v2nyHN3j4dc45V",
  "key41": "5Kt1rxX3u3mJTNy5qknvoX6tGYukpnq2UpntJKpW5JDp4eQ5qDukyHNdSyzuVfYCFSxAPj9rJVdzaZ7mRqhqTCWc",
  "key42": "2q1ysk3UXfZv5JY9dKjzmjcDTQjqgkBJEN1nACRzqXTsavdeRrwZfBo7irV44c5e1rLt9sQG3RSyJQBQWr3BJuut",
  "key43": "2JVBG63RYzjiUDpLk53bWkeYvcongZ9VQQxeYURjcPxXT54Vy4hBTQzZiGrodApEe5UBcDfi11FyCeALWzfX6m3P",
  "key44": "4jTTixVGAjFPAFWxcexRFpmWNZTtUd92HmWrkA21hi31obqLYkwsEafLZUMLKkDHe4UvEH2KHhTLtNEW7L7oQxcV",
  "key45": "4xZ4JfGmnjxiE3LA15PTzodKf27agCBP4iejLU9D6cMPxHg58rTc9eNXaBZoLbNdMpZmD4UGsqRgGzScv6jYxsjH",
  "key46": "4c81K665Q4iL5EQuTGhF4eieJjuQo7ZRss5Y1kakpLWxsTKa7PFkzZJW57uxz5tJui1qWbbiucMMkkLZg7ap5xVH",
  "key47": "66ivNL4byYgmQgPfRt1r197XbFMTwGvB5Kho8fu1gpnWAkvKFUDNsGT4i2vsHwhxMt6vHzd3uoqBBhQJdFERDnDH",
  "key48": "3JntrMumWeCEjCFBP1D7XN3yumohaWzB9RphtLNA6Z61bqSEVw7RyMeSrQunzYpS1wSm22RvfDorFweZnCAxRGFJ"
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
