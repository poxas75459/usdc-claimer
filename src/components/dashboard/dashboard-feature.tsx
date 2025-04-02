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
    "2YMEUvWkmLaXFRAaaxxfnxr4QSVgSYrYrGVCiwSqngVqoqKf3etVwaqYqDkuxuFD9fcVQ9NWwB1tAedL7wMFSZYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MCTFzbA656VEUYQGYiNBpZYHjn3cRfMXZejFAVrL3v2HNcbouCiNeUUtTJXSeEb6zzjHYVWc9o6PsVzsBYW2rqq",
  "key1": "vWju6BR1GME1Rkjh775Xu54i8cCr1k11NcZEuZ3VTAybLBosrnnT6rB9SjPgzKc8yCW7V1zG8iHKm1XazUa8r9c",
  "key2": "3iG6hEymxbDu29HYpb86dW4K8GXtbNRPp5D9m75uwcFZXmn35nBJuF2pQLMfqgJ8oo6srHUxU47WVMNCFDqHKVKG",
  "key3": "5FTgG4PoYhMWYNbFvBKFPGa5yciD72zJ3dVJrsyVELdczjQj9pkBDSmr1B8kb77xbTksLcNsZd4cByiJQs1u3bRR",
  "key4": "3tidFPapgv2ezMr2wDUXRQADtACAfKzW39LSK7WXP7KCfGrwPg6jqY1Va1nSFzKgBWszsGaE8tPHUhMSzvjv3yiU",
  "key5": "2a3KHrJYZbr3jufYbPsphh3wTdzFYG4PBZ6tbu6CNNd6E6eA3ymNQ7stsh2W63WHYU2S2LSpgHbgri2Ds8fMYsRE",
  "key6": "2SMiHqvrNN3vtCmRSU7JbjGt81W24nQkCvKFfQAVK6ByxC1wBBmuBfDNmu4LxUos728EMtYcQGHL3xi7CH7C7YuS",
  "key7": "5tYKXgR93sG7xijTbtTnAw4Ftw7JKfxk3WxFBukSnfkHCa6sX2UUrbQfbMMpFMTjx3Cw8MtoGXGFZDLxiTdTXBTk",
  "key8": "5ozjTLDSbJUw7XgrXYV782Jh6PENXtcZrXPHBnPgWcwNk9pEMdSauoSSGSn4d5GtpP7L89j3AnqyVvNn7RECUQQh",
  "key9": "2JpvMTZeZ69QZRXy3g5uhxaYNMXGGtD7iP7jMzU1zaz2CfsRnw5cb6VBUCRj9UHjrWgcPqkXr1GF4hocAb4SGJwa",
  "key10": "3EjsgmjaH8LzKzfJNnqZPsfzbw4SM6xcXBePRgGPEuWouTKX829p7pAotHTCj8nPHKpuS4vjCs4ist9ZkU8MmKme",
  "key11": "5MQYL7VkFYNaD6RAmypbvkZFuQVu7xcapZ29vxNVKa3z2FNDowEEGXeyydyftfD2pyyM28Rgsuu2un3762R2Pvwa",
  "key12": "2UTQR8xy82RhEEAvbJZQMHHN3k7HbLLe41s8FjHLErPDrMHZ5MC2maE2UvPyGfhEaAnuSQR2t4aHYyacAPoyhHw3",
  "key13": "MBGjoQ2748jbWTBSTyDwt4rzYgUc3tjBWBKwNmEJrnsQ8UWEVo4UjbE4bSUxA8xt7XEMXRxWvW777xwHSyuEsGZ",
  "key14": "TJUFcrRt1Zf58o5MST2GhYRwBCFhwVADWr2QZu3W9cPsLtLQDHXBvrRT2MWWgsuGn46PM6cXjAHt9CRCRauSdzg",
  "key15": "DcqfkfV9zyqx72XaYdRDuCQACFzmvXyQxQE1SdtELFamPHq1rz1tKSXyZCwdSCKR473duJJTqs9H99kWNZnXfn3",
  "key16": "3qRYAGhR9QnP41sLq1amwSa3meoKC3Bcd3bRBLcweTx9u6CcdD1R5KHRFvguHXdvSQ5HiYyRwaPzTjYCmxMrEx2M",
  "key17": "5cYNmaWkd141csBfQySH15tAh43FePJstprVr1WfNDkzRd2U7csnzAHpNxJF3rdussJybjmN36PnSZQFE7AfhfNg",
  "key18": "P5cUKWmAzSauL53ET9Hx8m4fq65YJnznZiMQnpjDBBFqFq5tSgUD3d1movPGpFjdAPo9dFEQVc1SQayo1t2Pr34",
  "key19": "54uKknRgrv7P6pthrq3Yc7bsyRM64s6JZazMMFm5Wzbndboks8BGREwFMzEdDN3DJLzJZRz4vPhN4nMtYQqFrRyr",
  "key20": "5t37pniXV9FuhB1kALLULFaKL4dQ834w9RZuewX5m1Dz6St4tP6ZiuqWEJFSf7n8jenjUi6UGzDVdTTqFu5v5Zjh",
  "key21": "3kpHb5gUxi79dYLt2pXSQVRiXSUSB2avH2M864uvTwt5xmWUJFi56XgTG2JadisGhwzVtkSTRfMGHowWrgJkNJgm",
  "key22": "62z74PLGk4ge9a1otBRQmqZHvykdVJKA5yhMRSTPcYBSB5DrM3LsgxAytNr4X5XZHJJuWZFhvgnHMEuSy3G7xSTq",
  "key23": "4ksLoagg8hhikSsxF4iuQsVUC4REdNymQ4kmLVT2NLnWkwKi8XbMoVgZ8FuTx2k1YLrEfrU61sv5CHSVBxUuab5d",
  "key24": "3QR2Tj7CTHbFKcj3z2aGED3ttFtUgyqCQDPhjmfniTpUbLf9CtrEbNTvWcLismHgWG47n4dGs69CmjAnrRVUZjiK",
  "key25": "4sAFzHaFv8NbSiLSzB3A5A7yNHDu9kJESwZmFLPw5sFaYM4V92Yw85VnYseE29yyQmfiYaKT6w62Dad5TpCypoem",
  "key26": "5jW7Bir9t8mLUFai88N1rkvZYkBowBnpya6ikqL5zaG4bn2p45D9xNWD4SEQLSbAN7txHTbVdJiyrDT5zwbJFwC9",
  "key27": "j8rySJFu7yuHdHQTWguxUuMBvnjHSw5awDAxUBqwuRkJjEx2yvETdFA5hwpjYNSbmuNS4EnxYQZ7BHKddoKP4LT",
  "key28": "2CYgNgMDbBQ3XG77pb92fELVzWuj4Dctrei1CeaomGntni8si6R79PCcctb8YBJowgiXc734XpSPCzUgHtvTED2x",
  "key29": "5Horwj4me6cYGkpDSoYMsKfypf1a89c3ZZ4rr5EoHrNw4VuWShHFNNYdd1pSQt1YN6U4VjVhCT4dBQRkwUBPWCCt",
  "key30": "5ESBQnKpEUDGfi2RWnBVCFxtSzducyBePUp16jNMFdswon2rtSoZJNbtQ4tTpMfksUf4VxaoJk2e89dJBbhQuURT",
  "key31": "kZhWGt5S1ZQhFG6pvnMvJeKpFTr1SuQZ8ZhbiiFr1gi7PMMDGwh4n5FuRfYMSicfeAjQHNVNvPPStDrhUzVTjGz",
  "key32": "4wTyUVw2vJ44mCQoAngcHHFrxY5YCbDEjAEGFNzmzLqCZL4ws2eUatYTsPx8PdtaJEFoB2WnnYQBrzMgmayhPJFN",
  "key33": "dYCncqXKqH6nWJTMoZJS4JEcMAgA75qbyrmwFSUcBzCfmSHUULzapDAXmsFcMYBNMEdEksvCNNPSEJVuv2kbLBK",
  "key34": "5m4buFQ3V2SAKBGmzkHu1w23LDwo5QG5yJijC15Ez18mzva17ztTsvg99eVbX8guV4R3n3br5a87jN3Lt4SP6uM6",
  "key35": "vW2asMYhwNLpLBqn9ZZKoip6Wg56Cp1XB9uA5hu8p2qhUtAdmkUBNg8Q6JGmTwZXXvMVpiq62nM3nkAT1sUeBJV",
  "key36": "66Dx5524bdDNztk9TKkVEZvpQuCTts2TqXhHb7Tcik3DKzNk2Q9LaQLdQwKeKvU1pjxnsD9jHEJhUuDDArPiN32h",
  "key37": "5A5qEp1NDzQwod4Th34gjhGNh8UFoejkyTui7oEvJ43uaeZuC5KEBC7tcah8jV8gAVikDPhwAbd957qgunDbNjwH"
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
