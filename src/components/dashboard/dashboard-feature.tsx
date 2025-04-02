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
    "5va4jAjK1VWj3f1NJvr3smbAgZzb3iAzfcvGejQE8EUSpqrszU3nwQDUdaaBFR1rtZiuKRBi1SiiKQHVjFcAKcUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fPwZMaCqYenctP5UR4TJ2XQkwP6W6X55wgXRSkRPv7CBoLjMUJUJzQrUaattPGSgCA4ito6UW9zfk1T4mmYZiet",
  "key1": "4S8R7NYZQHVe74MyijJbSxKN98THh43zwuFBNFERTyxVn6baa5UEwUE1yqk7iukTRqzKKdUvNqedpiYKXJGNX386",
  "key2": "3kXzUn43bf9pb7AWBK5W5R8be8BGpcGr9NEcPhHkeNry3KKeja7tNE7q4PHx1xUeLeUKyA8tsstE1tChmYYqyNW6",
  "key3": "2NCA7VMvieEKTN1U9hcCFCqfP3VXWVVLV1VxSUHPx5Hgdq7mZzVsTqWwwAR1TKE8iusDJGg91GXdnzyjMEdLDQyK",
  "key4": "5Y4reP55w72bV5HYzTVnFiCsiKYo4i2kg1tSLQmv4oiFM5oWfLsJKKwgtQbNg4BrBkeeidoLisrVGyCkBEnp64AJ",
  "key5": "Xn7SgdMZij7ZzW8SesGCVFEBggxThgD887exMPsg5csTTBnpuZDVGWsvAbNzq6566Yko44VhZgoXNcoHyLFah6F",
  "key6": "3DfBb2s2NDfcWKipSzty6agpH4yCVQpDuyS4dsXEn7HM5zNtPqQHnYiyGXMm3B5LT3MrVcBvjJTmk2Ndn5caqALv",
  "key7": "3eihPThUMEjkW54igY2Unyhsa6aGi1Q4dbWNPuYzMTSJq9ey4wGKrFrKaQFQzZpuBmURzxXnGRwPiFQYhC3EqTwV",
  "key8": "2S2ZqKt69EVDkG4wUXmzNxYHuoYDDxoGKjX78xqZLtf3KMsaNSrYA4PoDCWeCnhVk2W6HABw8YmqWnv16hbUoURf",
  "key9": "QFLpHjsgBzJyVZNQz2iNaZB1WY8iFLmmDsbGjXmc5gnV4ZnBrVpfvRESGgJSm3knx7oc6LQgVQs5iPkGbYSXkda",
  "key10": "5nYoDKgWMk3S7zcnoANMtVcCQHJt5m6ivRELtyV1YyR5GJ5AiC3KZS3SDbrRN4eqJC7HQGhbbTzWxd7QdDP8cUFs",
  "key11": "3wFW71B1kVf3iJy6yrr4ss7Mg1MfGY5JhJ7iJ25Z99eiZqHg4BzdNdHs9xaBQCNSc4GLXnzc2RJeD1kGNH29ZdUE",
  "key12": "4erzV2bG7evYfk69ZpUiDWcFvMmpBXZTNCpL6xknrtRHyAEZtrgNqexPMweSPhcQhjN74VN6J7JJU6kNpmhhwmV2",
  "key13": "4mJh4iQVBe5zT1WonytnMJAAGzQ1PvzE2Wr7NknHsFtYpzWrAkE5CLrkgngnEE7jrRvBsgGpdVJBZ7tdRgjTrWpU",
  "key14": "2m8oMNLwkpxGwSpFSdbFQus1UyVaGVRxhGMC9JUWQnz2qUoPSPRrWpTXWcNPMGpTwD2JVR6H9HaKH7uUwwyQ71Mf",
  "key15": "2TrcpFWfkNxWTLH1xJh3QBGSwogMS1ra8imSA2NiY4a4Pq1Cc5tXr4BTZQs5ZdXjhsr84YuiEAmtawrb2MWVwDMQ",
  "key16": "3yC55SfqATEDgyvs4Hi3PJrpfkvPq13jT9HChc1RZ9EaiW1539fcisc9QVLGju8anLPUF473ECWR96fXTJgeg7Tq",
  "key17": "Gv7yTdLJAawavEKu5xJf5c4EGuC6BSN1RELTq9Eq1LKkF2XNW6b4oivku7uc7p7jva2Ffgz4XHB4vZDH3NuQnbf",
  "key18": "45wZLvjnSdbYV4QQwUWrMZa2D2uKTGsBbK1ZjCkFm4tF29uP2wvKzvsZEMht3qBJG1YCdeQQkcjgoY1vR5fm7FC",
  "key19": "Atj2ymoQYzXzqMW5Aq2AUHL533iD8B7AA5QypxtvqRUMLGxsCsi7WtkwrW2baTuuvagUUHyCqicAqWnLS58mZ1z",
  "key20": "5oYtLrTKpaRWn6msN6zk5wFEj125eZm4nykTMCoZGMJnj9TBW8y8Lu97qttz7sSXw5wuJQ2iCN1XompRuxFvFKS8",
  "key21": "5gRMpyM4vzGJFiHWUcPVN9ZKyeUW5bwDLtJxE5L8WZkpLgCYQosxKtEXXbpsKUNFiD1uND1fPyKXY9LaojT9d28z",
  "key22": "ES5LCwQSSAbwV5r3WXzYAv2YPDfrGkhjRfkZqySCp1ATUBqcWgv6rD6Fqk94Cc2ZEGYiH8ojMWtGxHPUsEWddLJ",
  "key23": "5RWWksMB5kZLcNjQnF15dBwuC28VnmRyPrWY8XfXoJREPFb5jit8t2FxRET6HrorHtYekVHhZvtHTEya5Zbc3E6M",
  "key24": "3zXXBMMNN3gWoSSbBDjQao2hAg6sMRXSX2yBp1CUDxChTzALvT3enMULVB3pxYNizo171sAbjcnYt9qiPgm7o2VC",
  "key25": "3zWppDP3SheetEo3B9eVB97fD44GzFTYRzhA6D71WNSHT3BAC9bjyLAGDP66JZ6NDpdFFA6VofPhp994GXSgZZbA",
  "key26": "5wLDRnLYETshYBtHvhHgoHBVMDjcWbLpjSvQZ9afuFN74N8dyx2DeBQW8bwKm725SaSgE5beyFtBpyNtDsSp18da",
  "key27": "rPiR7xh3vQQQxj5nUhqbckYXNn9mUr9q8jk2XycSmFG2TXAg81KSTori5vkaqCUzVp6scdkGZk3tNQqCqqPVpec",
  "key28": "559StsQ5BtnTcmL9c1zGQqehVZ1fNqb5uazP5D65wxdhPDYnJuCRdN61fysEbvrAG4spMWtaxiiGTA1oUN6ffnYg",
  "key29": "3gEZQyiv65pfoetMmLGVQJkN9zR7jYKivCiMYoj2g3BPL4n7n69XvheccK9vmVVXGiCGpyrekDjyRUEdoFx64udQ",
  "key30": "2yW5gwrb8pksZNJY7oxDgQkQjQ1aru3Sk2Si7tyqJJgfuzbwBTQRF37hCoQ45yJC7WuJaWL6rQKCq9Buc4Tn2Mke",
  "key31": "2PCdbgitFTjE8tZYoN7f1oJKzuWeaf3gzGdL7NttMkCRLo5s4xvEUxuSWqZ6DBQESqi9hTuJW16ZUvU8zK2B3x2a",
  "key32": "5rvtMpQb4qWyGaQ8feV1u2aTaBTQGPb6cXMkcnpZ1rsaUspTx39pjgbQVJqeYo4VVy1sFH4syeDgqjij23PRWqkA",
  "key33": "5rbBActTXw7bK79GQ8gdu727qFbhmVPDdEktV6Nnm2FnbuDCmUQ9ES6AShpTfhMshKWTEQYQpq77DzVUFwC3X9As",
  "key34": "2EWjeTS6XTxxRj77QZAhiygrzPahgpQs6RpxpW4tEr9A2FWwSUmLKSAEff2hfKeu58mEEmPjvbNkRUcoUzrGtgZh",
  "key35": "3jLqn3DVM8TDadiHfgeSjg9eoqACV5BkSALtFvH2aE1SkerQBp5RR1sFX7tQohih1ZmndAnqmVnzzPzJfc2fpCnX",
  "key36": "5NCBMExiYmPvBFXMWsKeV4gKxw7Tndwa7jX1T6G7aJRBBpRUs8kXMQ9KWzAnWgikX7Q2cbAHG5txVtwFjj6hHQ2o",
  "key37": "5iZdTwhayHqfpCB2bhL23MmTrBLKoJaapSWi7P7GCBjfzjZyV1F25EkV9BCnYcjB4JF4JoqqNV15Nkpzq821Xwxo",
  "key38": "2hNXBBEtYFnmyjm8ygLuPdCV7AYJwtjRPP9uyXNRwKyeaesanyMAeuj4XrFWSB3DnvCDQ38PBfSBK6YPRCQTJg14",
  "key39": "58r9awvkLHXUxKfkJfbKsNXWuhRAyPtVj5DFBQx4DEcyuTzBg3c4pgm2ktRQKEUtLZHeSBzGmwq7WCAtNsbSM6Jb",
  "key40": "5zC5B4RYiZeNnfLTSmXAs8rzbVLSv2KpfFSW4nV4ezNjT7P8R4y75ubG91nxoejzbDn3FBNm68fK26XTKADSqUYy",
  "key41": "4bb7N2gHWX1jJxrNbz9ygY688Q5E2zVZ348yvYQqKCEW2RaTPvGgWy6kwqoMvEM81o6pFAZruomAmxyQtaPs3krv",
  "key42": "3GKT2QLomPsTjrQ22Yp14Ya84nXHv4F62M5SE9TgitGryR4sFLFMKX2gz9CiDLtQDtVUFYaT4gfkbWCxwe84vsW2",
  "key43": "3nWp7hQRpPUsCvL5NeUSNtU8fNqHuMfAVup5C38jRHFetDCJDLk3pa84mGa23WKFV6WkX6CG3yRRnXRdrmcnkoho",
  "key44": "3FSDNHyuVXiYj7mWuJFHYA92dojuHV5fFGBgkeZmqLkcMAgrRx1fKJj9QDT65LrLj4bjuD1JxWa881hERXTP2R4H",
  "key45": "3Ta8eRynuhtaYRvb3PNahDCFwpDAxRNUELFQx2Q7ZQd3j5ZakH9Z3vRZjayA7iJrbCwbfKVGLXvtScJWVSWCv7SA"
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
