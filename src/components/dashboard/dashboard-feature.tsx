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
    "4ffXPsx7NvXVJH6eu5ExeyMCXSY2ZFWN6uXPbLQhwvw5J3yRKNoJCbyhLzGQV1WckxZStPbEbeTRu4QGYwhgzoBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DqyYPYvWZDDK6DDDQJ53yAHey8Vd97AgvVUSxsWpsXsbK5yZfpx7top5n8vLvG6CkHTPauRcJLoBtbxdVCQmUEK",
  "key1": "5ZNaYaBZCoTxEgY9LwUHYc8AeLAFfbs2NHsZxQQw7nNX2WbmpxMkNRqyKHAXSYAfjD2En3EZQQ52cmXgq72V6xLt",
  "key2": "2XSf7Zx7xu4JDuFMeaX3qjvpnGVFCf57PKgxBhGfbDTL67WARcMAQ6QBpXzACKAaVXHVTL9KqudPhT4Q5sFtwU14",
  "key3": "2PzaBdvZUFVt4dZTuogUmTdVEwCc39t4ZMkciX7SqRHFPKBSHStzCaaUjFYM78xEToJTuunBmsFxmPi3TqSAeNbC",
  "key4": "5W6CXyojLT9QCkYQ6E6MHgwduiXCQa63Lj2eRBXzi1bYTbvSmt2creYyANtHx3Gx7aRQZXc9MkarnQMe8vC3VU8w",
  "key5": "2HrPvMhoRNJbCLy7kfF6W5mDr2ayTSfaX9D521ZpfNFM844S9AWn7MPS33YDwP1seJdFcr7dTb3udTMrbKUj7ZxX",
  "key6": "2b65bcY1L2hCjGAo4TP1jEYm1bgf39dTeWK9uGVPQ4KiABvbjPmtYTJdrZakiqAUgxKMgLJBZyd1VtehC7fCkNuj",
  "key7": "63zKP3vwACBSa8YWsyTF47ihy724EFfduN3koQey5vmHVuiPFy8HJTbci4YhQ89N32oTBUnEgYP64kCeLAzhFbhu",
  "key8": "4D6T3WRcTdEFE3t6T6UVrMCaVicTPHWGVZsCJipMtHKQXHLGB4vYoiDRUPqshMKE3Ks4Muhc67BHeoEs8QCpeFth",
  "key9": "LVstYiMukpKUo7XSJxJB9Fdej1Knd7aCSE68tqrzxoG36uMRW9ctwDKLuKH9f9icM28mQas9zfB2kctUtJYgBcB",
  "key10": "5HuXc9tCMHmkVbNsuabCBjZPSXk5MAXPdcdLxsCi7MDkDnSASt98wYeRgLHWNs19xGTNUMTqDfCviLywdxabhmMJ",
  "key11": "3C14n351TcypHoaqb5Vh64vPNSHZE5FGECGNwaSJkRp7VGpNw8JSV9dMLd1MqzzEFYRqke39wEjFMhcKXuYQzYKj",
  "key12": "UqFvdNkcxUFoznKDoiCm3bxR1EPiaNW36EEYqLQdyqEzDXhFk5EoAmn8StMb5t66xHXxs78noTdJjW6kq3B7PhE",
  "key13": "4s7RQqrtRGW1DFb5wR1YCdry37GAzte63z6Hunk1XDL7T7UVdpoCHpaMhWCfhQoBKd5HSjV9wH6G2p1Gyso6SJxc",
  "key14": "3Nmz7qykfU7Ltnatudx6hqpQsq5SkEjuFC7wHiDnq1ecb6RVt1SRJTQeoTj4yVdbJxx97yTT8NdeFRqAR545u9DC",
  "key15": "2CWShenffh23HNMexVuRrFCfjgSUbqdzx6aRjnrhgFpcEmMg9CrjyPm9cH6Z7Vn3EN6WhaGhpb9xFSLVhSygNhSY",
  "key16": "5sdFMg3SFwPSVJBiPtUNPgX1zNKqKwseujTfxEHcijoTqtjALiLq2MAUuAsniJ2DhbDUVJ8J8wbBaWdcMyyUqiWW",
  "key17": "38qwdHrsMMEAb2hRuRqkcQ9QR4MKPxftaFqynewyrQQhJMfeWoF2ywXYnSigNWxypi7JhtVrJvKDzpWTmKsxBaL4",
  "key18": "4na6PWkgVu2z9V4DUmD1VkaMFiELVktnrGqbNrapj4f8h39X3Y9sJk4oPeVBCz4ieHCEzWDoxTagHPcQXWkbuQo9",
  "key19": "56GDADoQRhX1ADD5Fqxs9y86Ue1sSMpx36dUb74o1nYz1Fjz3d6DoNJxmfpmAxHfAYsBEcGzzoXVXPvJmwhJeHWd",
  "key20": "4bjzAdCNLNir64oJzw53EkXag7cA5nYwBr6GQwybfdVKKQDcbuxo7RLCmaiN8K4mak6QqpQEDojTLjSA9zV6gqB4",
  "key21": "2fNizmh3kM9qZFrSD8GCBrJvcUTgd3DgozzUEj4EV3rQUGoKiWYVkP1nf2CaxU53Wt2Wv4XPBtKqeDMMW9tGk8Y4",
  "key22": "5p5urkQk13haK8xQZzbQW72vF4BdtDZ9odzP7dHNePjfyw9q62Jf6tGYsjYsHPDGVbLHPxJNS3qJZ93mMcL3mhK4",
  "key23": "4fedgEvGF9BizQvqPnyNxRfenPnv56mbB1M9UFqB3DromrGANkoKuoBDacFYYxTNmcvHjhxdZ2Jek1vQ7tSNS918",
  "key24": "3wVtbndxLPdh9XbKdXG25gkQHmKG3RCm2Q2CJYUDtd8kXEL4gwYBw9gK652XceeGdauSPDiSF1uynY3an6feQR26",
  "key25": "3L2egAkdLQPjL74ShgnsFgEP5SiG6SeykhWMmpPc1Pi9qwoYcRqJ5KPUpW9hArh9qFfbtZyYTYiTRsaz4kwhFLSb",
  "key26": "2nPkHUEtgsH32TYvMSzr5HfW15aCC6XT3u529kmneL4Xp4y2KPkNoX7u5AvgsqVNsRvCQxdPFeYfNbYrwkyXj3zv",
  "key27": "3rVpWTS7kiTEKwfCo3RWexexmFDJA8Sw47ypgaDKYU5EYRvBZKibsnB8DrAZvG3qKTK8MJ8UT2NZqVFJZmSSds2q",
  "key28": "5rXPwonUUNf6fdcx8h4ysBv4qpWKXDyytdAjhCwgjpNM1dw7FEGH1XHfUWpXHQb1tRjFsnemATAg5UK4CRPJcyxw",
  "key29": "zbF4BacwwMdNtCWpDn4GASzR7BAoHGaKAebjk36z42JbGwTLEi66CF9iMQcpYro2Ux67C6zb83gKp7o8TxK1X4R",
  "key30": "3UsfzUP5wzccjrHezySAZimNVXBY5Hvgp4s38Ng6rNFE1AUBB6FktBxSPsJMFTTwAubwzF8pueTrezE2Qr1YQoYJ",
  "key31": "3F2qds7TDxPwexD3SgLWCesjuvBUConmgqhJ1geHj16kLbRbFxGfDYWkqffFXg9DBkn2mXEf8oFhd2t1LHrKkzfa",
  "key32": "FUCtzHZSaRZyHKQhcsREpcrsLYRWLXgrjQ8tuY6hbMYw2xMm34KaWWubA9zs1WnUzvgswNEuB63wTGkquwRKNEk",
  "key33": "5gzGZqHpiTZE5yEXzXnJsz1AybdpBRfkDdTN7nUKHvCwjxVUXFXw2cy61q9xKBxzGXEgskn7LUM2UcFnQZqerpHJ",
  "key34": "e1DbgHn1LxuodxmKyU9s5KYUXVXdoRQSzs1J8YNDBPnAvyx4nkeTBN9c67HftBpSSjH7EiHbxjXPeVamCnBiMiH",
  "key35": "4BgHxLCEtxXFzvPX3LeU57FAWRVJJfJWBTHyw58jHjELskYrwEX3CUceuekkpG1Npz2KybyL8qxWxQscwtduvayQ",
  "key36": "SAHDFvv5qDtWRQEQiXS9LozMQLkXLUiW8qnRQEabrNgtyQqDMgUhW3DBzAfTj45Em5c2V4Vm1XKhHocCz3wC2G9",
  "key37": "XG9tdPTtMZBwHMm1x6zHR821Jrp9Di139882MiEc1yz9sd7cRaCc5xufbojP7m9Payd3aQHy9XE19dfKzTNreVg",
  "key38": "3zMPw31gSB969YzxZMFt3CmRrbFo8YdDeHRM58cH7nMJtHfB98jFhFoKSyfqUJJzqFvLv5VsFxieGCPLtzaaQ6cX",
  "key39": "659M31fm5dUf3dXCMx5u5LDLpEHiA1tJrPVBEnqKa5FFHkx7VxePczCqSYNvMyZCaP3mUgmPEJHEreTAKhYi7xat",
  "key40": "2rFsNEPNaFvs6dw3R9kTSrJz5hdBKmrphkBy62QmMrhqNyTSuDQgTLpujffUU1znCA2QJhhKTYX64siMKEhfrztK",
  "key41": "4AaWx3JLnVSRZcBL2QApqkygt2NP9QcYeYbDFxBCTwaZg3mak97P8MzQ4iZ1GgTvyMNrDQP6VfYSgDsodRE5UXt3",
  "key42": "tUttGbYrPBv9Gbb5X7Djmqwv7PdVM96UcN1qZZ955uNMHfdeLUv6Yg41eUamFHZRqLjpThvrWeBo5tXEHAccEtd",
  "key43": "Af4BjgnrBXoZ6VHJpVy7zPLBC93GKdfuaddP6S6jcKS5xaYfmkPEiSDcVHNDc45s5juBQD5CiF9BWqfX29mzHUh",
  "key44": "67nzVnoA8oHPDRQEAGp1Ky3DAH41rWi5dJXYEyBNhjahsFgv7fHVYFP2xwfdmTzot87f5spsNiTRTqBa3CpTb37h",
  "key45": "3U5R2qjekJToc6a5AvsEtdjcAytcZZeEs7Hdj1iA1wvfWpaMfki3JKTS9FtvmKCnXAqnW3LKujoNdvtbnTEK4Zug",
  "key46": "4p92G2DTAXY7CoQsKrVWKr4HESYg93y4RqpJFb5gth6JgMq81nMf88bRcpeSjfW5oLLwgiEshxGZ21MSJdY5CMU6",
  "key47": "5KTdGUvAz15Mz6uPBvDSqg9TMBNtQsgi8zx7yfacjnHvRw9hWmtKfCGo97kRKq2fJHRSW3h5TyzG6GqZCPJ1DFU3"
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
