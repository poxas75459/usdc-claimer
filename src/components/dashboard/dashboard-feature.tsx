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
    "5z4uFMiEUzfxQ45JA3PrVnxyftzbSgytbjQrfymR5pLtyA8U37RpDxcGv6YHkvpi6NtVbQBa5m6sL6uEUiDkYG8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCx8pAkpzxf31KVnndczCgvrUjJmVhFf3tDvRZwJG6s1hhih4xj8Z5LAaR2Zxs1GN7QHj4XKb7hDz6eucvRzpDD",
  "key1": "fCBTTY9LZ1YvLTFXPMZDHWwMU9JnNaZjgou6YAg6acUkeRJ5ABjXJ5Bsi7DT8enejETdW52Ux86745Q1xRNtCLw",
  "key2": "3WZtnkvTrCYSgvcKJMuKiUq87vxHp3c4SXVkY5ZSEM89MjKBQFekAZTEYdugqvFTGw1ndaL9zgY4GGazFUrC5Hk5",
  "key3": "4DKq71btXsg1z9Jsdf9viK2PvahXmamQqdd7SRAPmCUXbAtqkYURjEHs86D3kJuu3si559jZiaWauh9df2doyKU8",
  "key4": "4FhpQawnn4AMLEn7iggj43Sdti4PHKeWFgKe8iTHw3KbCaC5ViYGMQ2z9HqEBi5GULDYxXXnECR7KMW4xcZBELFs",
  "key5": "42P65meiGFWGHBik132RFTMKsnFig5e9tYwmNF9h4FSpK4TNcTkEv5uAyrWEmr1suuq1oK3uPhcu29mcQUJpceMN",
  "key6": "VWE35p5oLRgH7XkF1wrdqdVeKo5c2es4bQeeejHC3rDAiBFvFJV7XcBnmDjFvaJdKJG21pc7Wk2ajj3zgMrP7R2",
  "key7": "3T8CtbkPD75ZAb56h6oJw14ex22ZubXuuhhNrF7icsFgjV6vZByeS4Y7ZgLPYdNLQLU6dyhBoVLFNxAqB1Cb78J9",
  "key8": "534a9EQGfmmEGZdv6QdBQHTx5ESYTNVsXeKwnbofTw22YrxbxSzaUK2wyWfaP4XninC8KPtnrZ8U8SQjoVpjMXkA",
  "key9": "556yRGwwL1YpK28qw7nYkCsSmLBhVasBbZZhtdDzrRFTJ3QQfS8EdfFCiZuGsWyPBdbNVihpL14kqNqG5FsPfAZY",
  "key10": "58cYWppBTgbEAMhe93AYPk2WTQ4Z7aATqCPkScTNGgFMgeAuqEdvMpBoGXVqEYTJZTdY34kj8FDx6dneHyvN62wV",
  "key11": "5kMREzm7PMNEgZGYbcwNrUmkqr22nvitXf7zLMTeBAxsBCksBQ9DdvJEPtkTe2qfattamPgUacurcVFY5fvpKYg6",
  "key12": "5HFACZWfidUVN2FrALua5Fi5n4Q4L9yRYEjDtsNiiAjthJGAznMLVuJa9ZuDMHpYRTomx1THSZnhe5hJBxmPmg3z",
  "key13": "amVzYHuJZ6DT1gNwh6N5BhN84FSn8QcfZHqPTyrHN3H2igUXP5rexpund75S9mm6fX4cK4otDSu4tdm52Y9BqUb",
  "key14": "3GrHb5SQ2XdNRibMdY35xkjuPm32HjT6TLv3ajZcubmLcVJCSqzu8FR5yuWFahWDokuTk3bNYo2KA4vkZUzkCbbL",
  "key15": "zvk8k3jkR6AVZFPreZYqAejPL42QJj9AeoAw4nomEHaLxqrdm5JYeVCZaz4L2XLkiHWuwc46LpUTru6vrMvX332",
  "key16": "BSrGPvU8V1VdUbqtWo9TotAgr7BdfCeUHh2vd2nQaA1yjzSAGx74nwDjF6aKzvwfJwdZmBE6h9x5JVib6G54T3E",
  "key17": "3STmvwAhkoTfcPnuNLrMhf4wWjdFjUQ4xB3pzCogPyW62QzMwCtxiu4dLMTYNxYUGXMBcFX3ocKZ9U2NX2BASFJK",
  "key18": "2KWgaQkE8i523JLmX9y5iGRjyvwGqoGeTubBRjRBYhFLz9RJWbgS87Ak74b4Tpq55qAVSQ3af9u3Kvok3ug7TdV9",
  "key19": "QsHkwG2AGQE8K8T3QZdDXDCeqhhfcTg7AMjPctDXKY75t93EyVbEy4eXjJz1VkXp1YaBZNj2bjHQBZkJNELUTyW",
  "key20": "2HhrhNEYEvqyavj68YwpbRgyDpmf1TF5YaUWYMvLruoPL2MkFZMWzNFm4mNDX9VE4mc7YxKVRsfVf4AbK4uQd1Hw",
  "key21": "5HqPjBG4Bqh5erE7j11L9NByPAjnyZYcspYejcgkM8kvY2FF1MJ6pTWxmgno9d6AEENo5FkBECodUngWhqgr2GMG",
  "key22": "3QWJFtJ9eLomyX565A2cbBpqS6zZRf16fk3Sh3kKpM16pSmTpGqmVF5GfLVcjxfMpdfomHefpNDTzYtc8HwBaHt5",
  "key23": "5g9sADzA7EPTHU5egjuB2E3fuMeKBd1hvgRpFuvX9K2z9rNvujspLDo7iTe7anGnnddNXgAX59aDemNGKugXdKCe",
  "key24": "3FwXH4ywf3MDHsREqRusNzAVTvm2xkhgZkqfV6TiBHDoGNrdhNaPzkzkyjuNcTuxfSF9q851dpsFz7B2p2Ffs8uv",
  "key25": "5F5aUGEiCBAkHMUfbSiLVHpshkja4QwBLqxmGqTqdBS5AmLTTvXBSRinhnAtpWdeMrXyVacEiNbKDekztBMUMmWP",
  "key26": "3zXmrvxKSqbbMV93sjSr3yVF8qPQmU2SDULVRuYJFKV963PypMoHWVcj1xHjXLWcT1YJjauEVUp78i7bhJdmhqai",
  "key27": "2DshFCm9L89MhQYWKKacwgMfnz5kc5BLyMJq7FUw6HeLRQrMB7zX2kpSsTWLi1reTZJsR4c6MswtPiAzEysTmFGh",
  "key28": "46Et5n9NhnrLbvC5VuotuhEQdAigoCpFTYvordrMiiNTU12CrKPrCUKyRangaPDKpnWb87vdRuVreKRDGyt1zsRP",
  "key29": "5cTfcV9EmW1RNCkRXibqHqK9QBpqGrqvZfacPkgSfgaQfM8pXNviLUN54APMM5qa1597GZfFw1pUmaUC5xUPkmTW",
  "key30": "4Q68o7yJGBNUa9KT8p4FGvsJF5tRqCQEYxySgHBWSaWBBBUT8f66RwdZRRxzTmaoZMZTFjdg5F3fghUhUShnfrCH",
  "key31": "eBx6CzcD3QcBbqpYSev9v1N5n7xgjaUqKjLnPbjnapAdHgYN1ozNAtZVB8tMYRvWUmv1CH3UXVLezuPNsuLPNdC",
  "key32": "2B1qpBbS4Av9PhNm6GrxJj2v33x1nDXUMLXM6J8H4VPquiXQ8JqGsFJP59b1Cc5XcWH4qYhWDBXohxUGKSGGwund",
  "key33": "3exxHXrnLaT7567CCJC1pycfrq9XNQwkedpJqc5nvHotY2576qCDerYHCjvyJMkL2kVPagKQBXncZPqZP4MSbSXP",
  "key34": "5drAPbb7wfi4uThHxKyaYSmdj1NcVQPahooYJGfcTeeVTSBxRPbneLGNZQcdjkuYsei43fP39QscWuJee92WCQhG",
  "key35": "29DtifLdemGUTixBvgtp3WTfrBrSc9BxdJJLXMAV6RbonfNUVA4pSgC36FeEUM8ei7aLaDm92rCNz8Fj8VER39yh",
  "key36": "2mECvNH3L3sSGGigQM91T92QiKWwPBavckqgucvGJ6ZzHhrC3cDn7vWHDRwEWfBCqSEmnKBQS1Ea6q1yDN4noEav",
  "key37": "3ubUncWPNEaumBLJ2hGGEjegqwPN8oPSWVACwRgyCAhUe56wCVyjkNBvZztox1d7hnPupR5GV3QbzoAqsTUCpz1C",
  "key38": "2vTSf3gCsHAdRnECHjYaX8rhiTgQ5uCzaW3CviwebEyezYPtkzi3wR375tdR3XE8GjbHQgBedXEQcavUoihpaaXp",
  "key39": "3x5EpTY7cNoVYdYpVwjRZkZLNSMVytMHP8mtYJri7dkRduCMUPiAC6Zhbrok3YhvkqCDGno53SdA2iER1rKDvdKP",
  "key40": "3LZHwmn6ZQYzNcYT3d2a3P1MXmLEtpFo9jesratcDdx6R5R9gEGmDTbChD7pegQbTQn4KvSc4BsnJohkWwNUb7uA",
  "key41": "5HTA9c93N1Xj8Ly6FefZ4APBwQUzUvkPtTBFiJrzL3DPPyhvU45PsFrmEvpuef1bCgcpjVsJZtHAa6azqfibYsvo",
  "key42": "4fXVVVo4FUw5x9yuX7JWcTobLeBizSsgjoTjBfK5rJf9QgFRErv7VAqigqfViExVzFo7JvfqejLDKh5n29jkYwBN",
  "key43": "4KkR719aGrUJKJWV17JXxwGxDjcbQ5dSTRqvAw5svGtx5joQSLeV2pXGH9oe7U35KR3raZ6YgmcGwu2rSwBjbbt1",
  "key44": "W8Y3hdMB4UZEbxAsd3B9Sn7NxhQNjfMzKJekkF11zqY2sGzD4sPiA5QyEKvUqyh9o7jH3aaexiyLmG8rtqGog1z",
  "key45": "fgfYdP9N6A663sZFckGEnMst379hzBhkSMghMmmFSmd399D13cdhqrdromA3RBuMQZyrs3QdGYyb74XcsLSeyKG",
  "key46": "fr45aNJqCfoxdiQV4dJXzrD1JmKLCJkhb9WEXHFDneoykukSgzMqH6rLQ9zdSbWnitk9uCGG2iiqv8TewyS1hRB"
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
