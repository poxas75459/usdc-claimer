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
    "5Adse42EjsRUpoCM36CcyqmiaGDjpucVcLFnjLzVMXVHehmDHHfWDqduZE8Yri5E7LgfThFCXFjNZXDdBYQdGVSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtVxNnb8H2b79vFjdJy9uFGtqBGUqzex7rQesVr1hrsRZfGvuic3tejB79x6ZjPvKmMNv4KTmSXK4VpybaBaDpN",
  "key1": "2JuvivYu17drsgLyE665yiujb3cisJTaJ8eGhURgbrjjGkTNnfyTmTqihVfWP6cafVWNveU6qYyjMcPPH33dHvtR",
  "key2": "5ggurQSn33cb4cxXCqARvwHeM5mUehurRaL7YkZy7UBGj2nmNQuvb78mEVxBDP6aeYUq1NEJCe5sKXWgLfjzucZz",
  "key3": "3zjnWgbYjusprHa9hPsTZFeXSsUskeTRXTBk67664VKGnyev4exPv8uErViK1xHesW9yFDwWFKYtthvqoUSLehUL",
  "key4": "5f3updpPBgKg657bYVvMTJdaZwB8DBNfNT9cYUV3Fvh5bgjhgPoqCMoTzVQvQfr4LsXvgwnNKcyC8xw8smvfBMrt",
  "key5": "56YxkfseyNco464ckSpLJYASKB7yEDhDha7ayG9tK1wQ1gHRwxaRCfgSftFwcK2pxEkuJyLNB9omcffzT4rBkYAJ",
  "key6": "2LNG3wdvAiDnEK6kj9PCXu3m847auDjkEtveWx9SLHggx6hT94nc2W3yv8Rj58qRKusaqeVLVU9r5ZVCAJ9WnZ9P",
  "key7": "3RuLQfEArh54aWN5gKn4efcnuWRFdytabCgW4mSvdAVAiYZBXMiXZSLfp6P2CHxt9EqzKnZ7hAX6MMSPWnoegbCW",
  "key8": "4r76VQFrWcbMhyHtLhLoeLSPEJ77NnExw69RmWHomTjgiEw82cFSa3Ug9Uv5gfAseRa7dyAdccGGBF5ZCxSQdypg",
  "key9": "2iDTuVE9znZb7qxFY1BoZXhyUAd2w2euW938JckewndZQ1yj9dkzhUsiP18qHuYsGcNiSNz1ZbBBtSPtwe5XtMta",
  "key10": "e3d1YCbB8AsX6aidCGf8D9GNxWY61Euzsf1cjnMxLCcmj7HSCJzN19VjpCyqmcJHT2D8ibXJJMXAH8sbeAJC86x",
  "key11": "2apdQuPR71BjLRwLskuA8aUBmy5QnREFzMRxP1qUQjKvMW3qSjWp8MJaWyrhtg2zWmuXnYpjEnxoZh1NCJ5EsXTk",
  "key12": "2iuhQWsxTcCD6PagP4CWUr8nDgYdnxtnzjcwWFhtzqXoqJLcSwpp5r9We5Rw7uycXYSPP6yaVf8uVGmxRCbBRVtv",
  "key13": "33Z96AWaMxiBByrJ8h91i4LmpKFFBdeQHkyNxScKrumyk5K87j4gwnH7xkRTDwpcPs9v8fU64SZwqHkgAuBWgzyJ",
  "key14": "2UrbBTY3HFnuCQBU2ucjAFxuRPLn9pF1qzPoc4TfVxnAQVV4FDs2FKPKhv5z14d2sqRJdGULcgpkRBRS2kGSFT36",
  "key15": "4FaJoxkBWPNePGZrMYK8dE4nSq3cRHcBRdZu2kVnaUaFbzUbUcyKtSvYiTXnAum6bPLzqeoF39HrZb2V9TJKjafh",
  "key16": "4hf8UWYsEa5K6FirDBoF8NBvmyZKTw97FdfwJPQ3L8i2gJ4Kqwk1Adb8dUB5xHdcQNu2jgahs9NqLkr6Q94jmGEN",
  "key17": "52tiBCUjTwwfQfumXWnjAcMMF4dPyC3nt5z4fht2EVHKAMpTQHA5YdBq5MTJqMG5jMyhvmWzPbxh4MZnd2Jh7VjL",
  "key18": "EqrmLdwdirZGjEstQQPXQd8ZeTSezEpdapCGXnJvEBu9LZ46W9TQ7zotKdZXPFW6BrwMAPqGjVkEax2t9X1Kpp2",
  "key19": "TdzVcRxYacBKurf41khyuQ6H3CL2KAFaUQYdVkecLvrbPDaaGj6kSpKf98EmvmNJtpw5SMoBo85DoTiqcDacAXi",
  "key20": "3Mvf7gAt9FA6mudvQK7kAMpg7UGUSnuTRP4iXZwV5pKgojXgabDebP3ZPB2J8FLA7H1PV9JGg5prLZxfrxJG5ran",
  "key21": "3aM9kFMMtgGjRARJWuA8Zn5LhWQNZvGxPG2oYQn57dFzo5STGikk5riABah2wPKviUxmsvM1bQvBfA3sTXjkrSZ4",
  "key22": "3nDuHRWF8Nbs5FG41eVag6mXXox7JdneBMEn76WWr91TyfcoSCcsnQDXN4TteEwuvcBrNRSNFAtBfij8TBErf4hM",
  "key23": "2hLsu6SCwnBqyERSpeqXymSM2CcxTzPYqZUqM8LJYZ6GR2qrzZdrnrEZT1Yd136oZv5vo1fqEziS16WYzdja1JDA",
  "key24": "3Bmz4SuAiPZnaEv5FBvLeGM42xyfCz6xEume5whsfPkXRA5aZqL8J2dCj12tNB5LFZMfwy7fmDMPSoepZaN45CsE",
  "key25": "6tnK8rEsmJKUAJttGQqcvhJ6McnxPNfP5bWidUxape5f1Wv8zdyak2VJVkwJAt5LcxAjGuhcwr27ncLiUysCqWD",
  "key26": "ZEjrfev9EhtTh5BffZHJtNJC8hRnWGPgWP56rwSojZbJ6gBaAG8VkWCjvGsxCZx3PAhCE5JQ2p2D4uEoLMdK7dt",
  "key27": "57VeiMHvU93puGVDNw1Nej8V11nAtfHKTuH3yRPxwujCihitZsnSCG4GMfFzFu8f2vFfKB1u5ExVaviXm8nY1rWj",
  "key28": "2quAKpwjUUApvPWZKRcsDX127Go63UAKPvzgJYtV8zted4DJPxseQfjj5d62MGhS2GKe5cic1uTRRvBJJqtikAfp",
  "key29": "3vnPYi4PCCZDyT1LCdpUJt24RJLGUNYH4f7NvZfDjEAPQxNrnZnCoEDijbMLit3ph6EWMw4mTjZDHRKtHhqGzTMu",
  "key30": "2Rhtvn8UDW1MuBHsw4Sc4dE38DTwNAQWEvTySLbx4my6wuGyxGaiY6U5a2N1n7FiMUf9YYGAKdahpD59UBhKsKLo",
  "key31": "hCyx9U5MBeCnRz65qiifHEvpbm8G5WABEtojhr4cPb8m6i28cpvRo1T47nWaZECfeV3yVsraWTr17Nx1of6tFyK",
  "key32": "kLNxbvCd41jJKbKwBtYjkv3V3VuTiZ314dZG7eh4H5V8DZqU2An8XLmKwzAPpbs14qtQSzH5b9mRj6BXM2fQCwv",
  "key33": "22nq5XM5GAoq9PCdqvZwJmAbvntCsE8Ns8kJ2VqjGDRnm5BwRCV2rjGe3HG3HjYbT9BEeqviepMCyTkTuoBidGXp",
  "key34": "4Jr4RRjStTjGBARXXwZvEF3H5N4trw3HTvAAgUZPLuFSDFztr6nQYZ2w44NzaTAKAavy8q2cRtfSnQPQomVx9jYQ",
  "key35": "2t15oFKSx397f4EngwDLT97XYqNZDFSznLvq3Pzxpvm8TbCshkibXuiUpRBWL5RPUqZHFo1hKoUPxaBGF4F2yXgm",
  "key36": "3xkjm2y1VjbaBCpveU99KxMxKzUtBvkziW439auKbvXyfwiupxxLzA5VTdCn83i1o6faadgZAJLchc5WrWf7DPba"
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
