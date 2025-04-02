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
    "5SHXvoP3cE7CqhgkpBg247DNzpbE78mGnDiPz2ZVMhZN4CQe3ay5gZQ15vrW1c3N5HjQfjG9rdnn32kkJXwjiZjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iiw5rmxdY2dNDUxffhAeT6CUrjK1K4WqFxGoXYjZv1s2xpE9i8FuTnchzexw9ZzNVzFgKXzVBp3RhtY3CeqhHwd",
  "key1": "3b2Q4oJUJefUTxmFQFQhZRrVzHEh4gctriSzXj9MSAmfWwcnXWrwHgLNWD9VjwxY7Du9j2D7cNKCC3N3wjQLJiVg",
  "key2": "4nPwAMqz9feFKVU6c1SwupqsYhEwXx6hMvoDVFV5pK3vmH7SJudPC6vBpRDPwDQkP7M2KeAkueDgDLi1wcASNPyP",
  "key3": "3QwF9fsG4EcDNn89bpxDe4h3WjNGjZpaj2CvtdovxUAiH95sMbXG3rzgvXXjXNnWZyx7Qbv7SwCkRRepbqj4ZFAV",
  "key4": "2KxAi5Rk7VUPWNtEMUkbUNyvt3QP5Lmq8FcppKptH1fjGUhAG2SHnH6BziLEvxxfg5uWctMCHjVGqGEjRK1JbU9Z",
  "key5": "3jsJSjdusyWG6HeYoxL3MNT3cRdpnroMMYrBriBU9RxS4mzZeiafMsd9RJFavZp94sf1tQvqxPHU3Rz2X5WXbp9X",
  "key6": "5RGxjGG5JZhaEd2RisvN9WZNumCM6PPGYnrBx8QVqghnsCW6SK2Q3LkaCNBRcqrYamSK1AmtWXBcYSDjEdgZYh3H",
  "key7": "3rY2iujbL5uUeqeQDna9S5snxnijVZdxPa9iihCBJZYTi8PtJEdutr6LmgbmSZraRTJ5tSxur8cpFGHQXAmxYmNz",
  "key8": "kgRi7t9gCivpTNDcCuuiXeeWs9yNUAKmNpyaZe5krY5CES8kHVKDkkH5oD7XFPevnhjMm434S1e9mPGNpYFmYrj",
  "key9": "sL595Pc1wCm8axdeds6Cv37e5jPGUDAGzx5ZxmXm7fHMWGd1JvsSPNoiJSRC7jqHs5TB48c74c9f6BU1BoyKkmg",
  "key10": "a6iMP43q1eYhwQiswW31vPkSrCDXVNSHLPJSiwXZkUoPCLJT1C6Re4kwxAZ6ciocCmkrVZRggrruXYNHye4YpEp",
  "key11": "2rEFnY6Qf4Jaw6yGmkyzJcFHrhkEAbbgowYPiGnJUJWJ4ZKRWPUgMfhXoZcmezuE8qPyMD6fMuxXfaPopp6bWyJ7",
  "key12": "5LN8LCCj16iapdmBiLVGm13cUVnTYKoXSfhcmBX6N4xNJxJ181JLoaP5KMrFVRe2GKWZqaeKViKQJfEzvebTy5bD",
  "key13": "4iTUHscYrmt1suMnaqPMaSNAgKeK1CXfuNKRKeXWbXceG55c91ismeUAPRqWzvLuXGRvMABRiiUmPmFDg3uvfekP",
  "key14": "59XpMDGrqex2EZ6eKXrxQm4dNRMEUK4YVr68nRuS7uCiiBoUhAvPBQznKwGocBP9cWPG9Y1H2xQbvT1YxzFEevnx",
  "key15": "aBLVWfCER4po9JeW8XS2cNcx7K6QJL122Tg9FXxKnYoBrLT66C7FDPAJUC5H3NsxT4n8zSaWUvqQeVozG3yyS8S",
  "key16": "3aUpdzWDyerXPkagttZrGDVmEo62BR4M8BUHS8ZtPbXhaB8cqijS1JFEDyzsVHoMbEsSmf95xYJcB57qYScifQ3r",
  "key17": "33LgoBfdn14znXzrXEHb5VQPTEwrLj357eJZzjDW8ZMAW5m4oMyErZs74MmTtLiXnJowc2JXUS8xe91hgc5mkC3o",
  "key18": "4UyhmaXBVmjrpwqvTKYSeN45jdqP2EfHeERx28vy14XsSmYULZg7mRFYZPSM9JpfFCQLwmSjHq4ZJFsuBAXXRLvQ",
  "key19": "3U3QgdsJ9mV7woq6jfj2mgZL9G3ZDECypAygK3oLjBJ16PsCCzfepQiSwoR5cV3wEa1YDwkqaFUHX9eq6F75UApy",
  "key20": "4cnwAa4tfdffN6C1pTLdSmjZSkGAGQhSNuv26eEwhSRpWFJ4ytCF84ezoL8rCzwoUZaAbWLNmQdULTqux4NuVQsi",
  "key21": "4tViQ4p9AKefuS2htkihHxQthA7SL9dtaNqbY62Znq5qfhBMoABcBu3dxKsArw3opE8ckRM8C1HgtbsXHCZUaa8q",
  "key22": "326X6cZMXxtMqiYRF7youNRcbiCHsG5QUpYQLXtK8yozciuzmyhct3PLGekhsXo1qPDnGCGLLDXzCsX8DP2Cb6aQ",
  "key23": "4ZpfjQrN11a7uGCFtQhgSWhVmeV8Q9LeZzoCL1CWQe3PQEVfzBjn4siKvtCuae1cJzcLFMV4Rkr3XbUjkXuHQhkp",
  "key24": "3wCyp3rLpwaDQ9UJe8CgKjBWe6o2hkUcFzNgHZw6TBpueP3uUX7rnRTRwg68Gt3RHH1FD5BJxk5Fh4vPYAdJmbwK",
  "key25": "5TYTkSj6wr3ccdR3RcC2aDVorNGZXEAAX497N367E6nQ9Tnp6RG5r1XSQ3xcEjvfF6uztKxea7eCcNwBAW4LsnZt",
  "key26": "5gKFMvn6cQ3vtizN76RDtceRLKkKbji6o7jjp14NRu9zv2xzwSNJjFLHoqs8wSX7KNpcWkD3dD8RVq7rEXxdaLVj",
  "key27": "5QgAYm9qHyR7iiEW2PJ93Edke8b5JjMvvp3faSdY8LJCPLodSbhS7Hi7XCUU2YCEMmZowqwTzRyjmDMZ5MLfiNei",
  "key28": "2M4HKuoVJM6ZAXh5dkRnn7sWQu7vcuhvKfxuChcB5NyGA6EsQqmRS4gk7ZkeA9fHQKd8ri4rpUg94Ww4yNTzLgE4",
  "key29": "5VDk8DAvcxnCnBd8DnMPFTv4pAu4MAX1qrcguTTRqy1JYTFJEGiRP76sXhRwSeiXRWXqpNpbmgFAjUTKfQFESiVX",
  "key30": "KJMgsC8zApgj5BuB9h9XCTdgG5tg3mtH4iF3fMTDRWAe9fMQDH6XPHev29vAJDaoACvjwWzi3LPo7VRuN8QmNJM",
  "key31": "yJcYmCkYbEJ55cDe3u3DESGARRA9iZMdzJZ1UWLi4Y3A1MX4EwUdVqVYXvbrsufe7WcpstvNt1LNkghK1GnNvU7",
  "key32": "4hTZGAcVETUe1zvZbvSJqpQmsN8xa2StHGVhsmQx79SLWMF5RtxK9MWZd61qyG5QZ3uvD6NvLbBWoSkmKfbzX68R",
  "key33": "2FfDBVw5676vRcZf8d5tUJzBQLmfjjy5GAnYMBpY7anHX72sSgZswkYdb7o7fJvBXYJJvtWSFGSm84r4mUqzK5YQ",
  "key34": "3P3Tdyrb9c9cMTQp67xB4JvJoLj31JNUScSVe2ftRP6LuiY1uv1xuwqyLgBTSr7D4d5j2y3NtZxQtrAZLeojVAU7",
  "key35": "2Qcir8f7pun5J8x2vrDXcbxzhVojLarynP4JRSFr2xfAMWfkmok2pyS84FYfCAysh6bRDNnWBBi29Goe51vqRxdf",
  "key36": "3s4Guzwd8tkJjhKZ9MyKHTW92xfwYZ8xsTbGxZbaqbSAjFQJ1pSHojXDsHA6pxz8767m7YGsPeVJCTYv9e2fYnU8",
  "key37": "25dW7j1C4NHoqy4bV7k3bAZLPW3tDFqjTDRDtKZgpbcAPasbZatXahroxdcB5h7FNPLhJZL6ACpVVyciYNURrQo7",
  "key38": "4yucHuCKCWQdvXgB7pVXKCnyU3mVzaRXLAD8hbisjfG7rbgcs3v8gU5uyo9BqbcCqD4865WbpxGB1iw6tSzzEtzH",
  "key39": "eNGA5Xx7564ctujSaMdm3JcVQ3uUkY6WyocYhsNKcxEaT7WAxHP67YeAPj8uUrwX3gSUJD97KhpQbbCmm3dhF5Y",
  "key40": "52y8ZKZVdyr3wZsKcoZtbkscnnvXL4MyUC5jXowqzHLzdPyNsteZ2AbPCsiaci7m4M6wim6wUVww4HoqYCXmBwLk",
  "key41": "4doTGufTe18d6bysq8Gyu5bNyZ6FqiH3PttUMeky7Vxs47FTEDfurPvphGRY8TBVsqxACkQLwVggMN1A42SaydNo",
  "key42": "gyK6R4Ekw2sybCgtMmBxLVhdNoVcUvAGUbeSXqnTMo77BEuY7hsqfKdvyDxDX7DVfPweMesZz4MqdugdAnuuGgL"
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
