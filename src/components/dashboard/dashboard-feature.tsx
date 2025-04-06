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
    "2LTZDw5EBVLJp2j4zffMv1s3gnfah31fnppmJP7XDapBiUB7GBv4tPSKbU4w5JrMKw5XsQEWtCuebcXdjrmEApQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DfqJxWVmyAFz7RffXThz5kWxThDqY98m7kqxG5wMJtksm5yfd3t78nNnV9Pqroy6dvbvQGGG67XHcsEZyfAXwju",
  "key1": "2kyJXKmFLMDhp11cDDPv55UmZSLLysDnweZSEMmZHvGAEFWE126fSiN9F6utiSweRt4FqDE3nm1ib4vdXHzwcSKr",
  "key2": "5etjQa8senT8aabwPdfEKtbHEHHiaGkDfC44MN2uVE3Anvb1xox3dabnZhmrWu3EkjSYPCvyRBKt4wXZsyZZpsUd",
  "key3": "2FM8PuUpHzxQSzaaf9EPNbtbFMNGSkTdTvsVX3AvQ9afbW487iAZqpkKMSA9bwCKE6FzUtX46dPGBPKi8Efgwco7",
  "key4": "rSzGQJvmRqaVc5BzUJpyXrBUuNpfiyGukMxqJBGNafqS8t1GF5bFEW2u61iwUjRqFUdjPETC1VQ1HwYhs1zGMM3",
  "key5": "eax89QnrLvKRJQpkTr1VzA6cyWvA3mn7skDYLbV8EB9CoHZKDEF3naAxesnwcvzFMWvin6Utvs59m3ivJwLkjH2",
  "key6": "4viHmLM6KRf22Ca3gduTk8oJiwVQqiXv15fXRCXZ2NedPXyXojrvfvyoc4wTpNeCfS7pqAQJAcnja7f3G4YF8nND",
  "key7": "4JKZ8muPFtNVGTGQLEzmfrMfvnZaY9FsxyGK4VpPSzQ5HmmXXHxxCeDt3rcfi7AELHfQ9YQvh8H3jbynQrQwmLjw",
  "key8": "45pQKUk9KXGzLEXCmLXpGa5gZjFXYH6GD5gQi37zQ1pbbzZFcDDXcKupm4bXJKqVASfcReRnNhKXnDbhaXAKSm4Z",
  "key9": "21SKyvxxuaXrDDMToCuX3QPjrYPxVDhWgoBAFs24gn8ojX6DgoU1kMonMwD9oa6tQt1HH2gQBUpDjHBD4H3GyhxL",
  "key10": "34mKGUwjcHjcJMZyBvxdRJ2N1DexutQrdyCU1xXSzxTcSK5xsSEXqwcsqwDU8zwvYCgNa5fc12Ttpaoauih79Chp",
  "key11": "5qfJK1fUNssafQyhXhdctCXCBZjCgtqUHbvKxDTYezAvENaLGDNUyZDvypQHU7aAV1sxLVLwLcQxgAsBQw2A9DhW",
  "key12": "3DxwTmrN9iVY7KN2ercQ3oymTivWhYUMjwvB37v2rfD1WEZf8oKa2rnpTrRU7ZKSxajbW9tM2DmhTLHrCofdhYHU",
  "key13": "3xeAD9CS9BaKgUQCaEusucPdDprL9ZYbceLbsi1HNYvd31JkRm6Er4YLN8ipwptTSSnnLgL9aVbeGXqJDVQw7C2r",
  "key14": "xjTgyauY44oPJJLjyGWNEe4G6ykL9rmRF9pU33VT5G9aa6wTWczESztbNw92KUjTXBJ8CMNUWgtimXcrwxqapYs",
  "key15": "34otq6Wvuhkg9rnbYyzndJn6vJQSTFG7NBqNvGowEYmP59HJ7p8k3trNEq2gcPrAxLzV8NY327CgqmLdPFxPt1rv",
  "key16": "VKwSDW9DXQSioUuYbbiYJfP4CDCmRXk3bCBVXbLwLtC3NBZstarLK3TfPRcuwLnT7qCZ7nEZMZkm4pBVYrQHFii",
  "key17": "S8t1Bog54KSNSvr8Dz38hacw4nR8dz9NzCcZHDfcx3hT9wQkkKMYeVHUkZYN2tKtDpj3AzDoAazcnYm4M8GwA4B",
  "key18": "2YdhZQmyQWbNvQzESbQMSwcqEpjkxxi1n95Y6Myt1ipWXv7vnVt5M6oWFwtu4jriz22EWCNWv6ZxfByba3buxM8u",
  "key19": "3cCQE6wiW9FJs3suNVyM6X1UPacoUe4pmWiAnBK9QjoNouHg9FVTeRmkPdZkKs3NqHPda6B3mPgJUdmrmEDyW5L7",
  "key20": "2jvCW7RpXAZFgscHb2wv2Jq5wYnR9zyPvkXUXmXd19iumVsU8g4LcvbDFvfEy9cj3MYnFX3f31sxtn81j6jQw6b4",
  "key21": "66RYyNcp2pzEtgCgTMb3Em1WL9T53meoDGr34hy7tozBSrTBLexmTySr6H2EWu1P2i8vCM15hDYmbSoaTYZDXob",
  "key22": "VazRebioVzv6nsUKzGtNWTL99gFWsJRJMDJ8zBqhWV8TdfA5YTFprbWLXHAhC9mREz94u12o9FpxmLEKgNewzu9",
  "key23": "5eax3xMmzkC1B78ZZr8i5toCLgREm9uZaiGLM8YfipcL247dpNjtLGNgwG7SC6dY2zYPQezAkousAVMfQWGeSbQ6",
  "key24": "RqQwHhCsWy8gFr2tpBJoek1eNNgbrA3tFZ38URdn765d6TFQ3LaZmeePz5hzxsLivBFcMP38x5Hv74vrjTadLA1",
  "key25": "3C8QZzcdVhdGCjpzyVg3GdayaZjDvsZkV5b9BADf9xSQdm8rCnchgsYtLGB75e6YT4GCnK6Ya14RVCvYafQiDWCj",
  "key26": "43EvvRC3BpsmRRnFDJotjeR4CDkpRFfdr8tEjLwmxqFHLr7ZHyWoCT9bNRQ6etGsWdYc2519VHH6X7FNzBQDVcQs",
  "key27": "57fkVNHdppgNFi53DsjSuWN9osvUP4LZoWmycWAhLWqzunttNDGKfmcdu999a7WbVU6GPm4RpZ2zdqEVjmvi7zzd",
  "key28": "2Ci4rhNyXutjP9UJWfVe2ZwW9rE2h4sAicgmCvA3z7S1mADyg3q5Vu6asEtrMMY41gnZbN6WBsYe1iz3kd3mLYB5",
  "key29": "5UReB9dvG4RW73hX4eNx9Pf75L1R12ebfkibCodLaD5BF17bKBVUMKiyHWTMwCFjSXe9P1SWACa9jutKdB7Q9Xda",
  "key30": "4JpbM7ueV1U1JHR9gXGDepdo6P9qLmyw8Ygy4F2YF83tayNS9pMXuQbMhkm3ymh121XShgMU1JbELBsjvAkF2hQM",
  "key31": "P94g9Bi3inrB9tLPedvCzYJphJuDiz83qZy2PG3UzjEakqx5vfveBmAnUVighuD9X3yHJPzREKcR5X9wTsT7a4u",
  "key32": "JbHv5m4menbfCHgE43HiJj4XkLanE2ZvtCxGLMgpEySB1cVtSU7tH24HNZJrxnMdXwbKh9szyfcF3USJyajhsHV",
  "key33": "3gFUSrAuQT33XCExkSQ1ShP2FQnX3Gkgkk4aAayCcXLmGJ137pt63hQFHzo3EoYm1Jst9Wcq3kdD7gmntLHFg5XN",
  "key34": "3nz1CdRJWX7j1YRDvDyzdEDgMRKtWyQpqSGfavfKnmauCBCJG76XS1Uwr6NeLk5MoZMWnGiLZDL8HspwLStWMF66",
  "key35": "3knTq6n9BsHyp6iYzGsdvU8qsAkgGfr58yqYKm1ztGyuxb8FGqerpdM6hgycjuXzawA92E6wyiPbVwjhrDwtwnzi",
  "key36": "2TzJinmiwK1xgekgGnLjFpgFRQpgMNWgxQ5hKMKDC7me8GQbEwHUYK6if7MM3tyaNTeNd1aa88nQTtt16D8pf7iD",
  "key37": "4BrhdDKjTzhUb84E62Ym1HYARTgZXtLkoYvXfvDyLbtEU21SmhGKQLVYBcYETfNycS9ydhAoc8PoZUAsVKFca1kE",
  "key38": "5hzxrzJmiENhy7zphFBuTUhqKfE8ekVNPsf8hFuXtZ6wCjcgvJoauKDzn9ErTKVRXuU7zBePf8mHvYZqWJVwWZPw",
  "key39": "2XLRW8diq2HuByytJYnt6Cf2q1UR7wtfwWd3geHobGSPkKKKeBrwyTPyJB5zZD1HKC8sm6kpxeUi3uNxUkcCtLkt",
  "key40": "2niwUahDWPZMcxrvQQeM3S5XX9H3u8G2gYQKB2RmZ7GT3F1ghc7jMnfhmSQffqyKMLs6MhTK4Cg1iwDX8Mn8mPPT",
  "key41": "4get2ynYjEPDthAvvJjf1pUqvNrKTPXuBbc8rVYqv4weN7yxfpPdpoCiHoTsXyVUifhfzwCHPSyUnc3aCHJdAQ9H",
  "key42": "R2Pvz2JvxgpgPzCFMRQJf24EaySUT8DHsRv5gJk7f8W4MYWpgfcnT88A2P6TGRArM5SKCwTUKSpBUBKiF9FViaT",
  "key43": "4yKXJumKvtqcvpekQNGsSmg1xCVhZnVCRERvuAG9tSnXDzeNJ3iuqKQCf1vT2yAF5UutqzTAJzmgLJMY71AmKTHG",
  "key44": "i18jMhek21dZVTwb4wAiRFubGv9naHoGgZLYH1hXmZerKa8i5knfx6QFgiiayu3xLbmNnfoWD5bRNGH9WqsHX1V",
  "key45": "53Pq2q6871ivMtkh2P15wWzg1RicX5MqAV2p3xbgi3fdot52ZEVRSBGrb9K2vLMLge4QdgVWy2LXNwB5HMLEdtGj",
  "key46": "4DS16wngL5bdp3syRozNuXzqqRCeomPrTuStHJZ2fv4GmqTKYP3czj3gmu7j6rA3iXx8syPouzrcN5PphezEXC1q",
  "key47": "Wrt1ceec8RKX43odRYKsaURfdhkXaGYhexcHE2XeKP81sTTauiU4vuWGLNwvYMfXQKTw1cD3t8Ucnbbe9Rzk2bq"
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
