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
    "4TRwqGSnNogmU2yb1bvqht4j6Su6Z4yyJtz3m1Tg6ZE9QaoszfAoRzzxfakh7nv413EehddxjQArn8eVzyTuVPx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oUFLxj7eVwocM3G47GQabrTtDX7Pe5xQ54HU6h7UH3ybtrUSV1EiKgzDRuWK9BFuuDFqaKCAUa5Pw4kvfDtwgQ7",
  "key1": "4NpoUk4RqKwja5o44ASXKxCLYVA82Bo4QN76TSP7qqaAN5cj8gzkiETG7ExxjrN8q457mHeruZgzZRGdsCpwRwEX",
  "key2": "MSP7jy9Kr6U1uqLWdSuiAWnb1mXxFFR1Ub7G28waDuBpSaz4vmBUhTFadNEZ3hdiGrUKBnY9gKuCW4cBMXeF4Gs",
  "key3": "46ccxS3qjrth6g3c6FKfGEJuyuaUMo4HUGspLnYAUuKZTaYn4QspF2QKrnfM7frtHgcGW9Wah1yS3aMdLM9eB26L",
  "key4": "7ZF6jeE1S7QrL5K42vp7PS8AATZVNDC6cYefAEPwXtuwYmLK24fbabFzdo2KTod3QQF2vpwJMmvui7cQQsDUCr9",
  "key5": "GeZb9waZxjCGf3P7s82UcuqZ6NADHwB35UvYymZidaTGkzq9MPsczfbBfUCRJGWXoAknVBdBrVmZ94eHzwhMvrm",
  "key6": "24wEdCBNKnWikmHBSydvFDXqHsTgFzBDpuWWv9GX8at1KvEiHgvUJxpcQa5WmrjCPgwdCDWY39eVZ4xTruDe3ZMF",
  "key7": "3xSCG3G47KV3M5SxJx2ttzQ94EW1anu5tcUVouVmUpkEBMn3jbFd2x4hJhLB7xkRo2v2RwyuV1xecKJyAMMjztrN",
  "key8": "22ny7a5UWttXmmefN2zM4jjEemi5WwvkMjMzRmZsLeqFRMumhkm2TbMDZmsbthdgkYAG9Qah8HevJ47m3NVhVSjd",
  "key9": "2t45UFLAZb9p5p8tT14herCZ9nyyLRdw52Ye9nxsXNZ4yZAPNhqXeKq93Ng28AyzwEFGcJK5JJmZbwnYn8BW9caW",
  "key10": "63rV388BrQL6xtTtWbPrC7ZxzAshtRbcM2GNeub2HSmdKMvLFiuZGaofQGXwgiJGSeG4i9jYZrSCb4qjMzC979jB",
  "key11": "47B2E74Dg7Pj1CYK9qnY51DVWC63RyfkSxf1eBnoWF5Zb4j9Ycsjs5uqpwk5sUudUegZwLhy5z4az4xzYxhsq5BX",
  "key12": "51tHzYcqxiMsvATFfYduwwsEt5Nkdx6EznvC6sH2egbNmq6nZimn9TLjvsAd7NjmjG9yNc7FcNnJcZ7B7V1wYyMW",
  "key13": "pqUMVqZeijn14G6tbrHntx5mhu1PMwfVKLK1bjCytyyhW76yzFF3avdtVuN8yxiTahZg3tKPsKBjy3ksDWiBFGE",
  "key14": "4KTiJ9EotpgkCzAhAh4bGAHRn8qY8mNpTy86zfjnwBeJuJ26Hcej9HSgZ453QCKKBPRmdommwkjPNxFRsLpCeUKz",
  "key15": "5Gqk7FGvgFnCnZ279vkH1XGUBUeDogN7qBLnJ6BRphUJCdRogtrEzuC9xXtVBNFqczHWD9xi5cDZVoYgxqUMwada",
  "key16": "nFnk9kasoMxpjnvpAL4a1i1MZp8719qcd5Shw1yEUuYTz5Mu7xCi2xCF6pA98Qsxh3UjviLXwhyAXLS7HNviYir",
  "key17": "54ZCc3eRV1rse598jfMFuM3WKxhPGyJucG2bRknreqU188Ya2CM12ZCzUK6HdWxFMcLNHzzmheGUPhwUJc7GtNpV",
  "key18": "415vULyeWCbr79JkS1hW4GK35QzcAvVUxRQ7E4wuPACw6foDJZcqgUbWgaUFzWddDWDVy8WxVk2ox91LBJhzQVB8",
  "key19": "HtNVgXgDg2RpHMa1Ya43fvR1KYBkkcDUrL5wXa7ZAvLuKHchboMp4W6P53Cw648SssJd9nioXZQicAcaocQ5ojw",
  "key20": "2hHGB6mJnKFd7TeFMQ9KGN7K1ivdo1hK8noxBVcmETaCjm78wndPTwMunuJD6hAzRVYNCUFRuaftSqHNqkaXut6F",
  "key21": "9y18yezngeQBEW2UULRafFd4qAVj9xavfDC3B55X8i9s8TVTZAXKE7Ux23bK7CHJAwjcQiEGEknpRL2DWa8NEiw",
  "key22": "N8hsLhfi4uSFb4Fn9awTdvrsS2WqHU7umynYTa2AhktQLVnjktJh2DSXtDA4rmipLJ7zW7nnjfau5JGjtW7iZ31",
  "key23": "4i5NE8VZ69ZpFKtF9Kt63wGtDxQ2wfJ1rbabD7i5YATLZV65HaSuPpFcS1WvWYYhTh3Pv1kBeN3r1V4u4eZ7pJzW",
  "key24": "2jJfnr71PPNSikxZMg7DGqW5xKAE7tvwxhis6k6ZR1LER8x9JM3AhtT6mmpZqWwemNohoJppqBD6YxEPvRkvj5hv",
  "key25": "2XqJEsevBb89NrvoBere99KKKVF5MnNbh6JDxSojxNjZZksbveSiToACC6sysc2jdH4uLKEc3WT34zpm38CceJGU",
  "key26": "3E1hryPiupdNEC2TDFfcocZ9JDRrFpSZYuLKton4RgyLjJktZVQ5NUzEbkpcMk4sEWazoFraxWnKf4LaGrhCHKug",
  "key27": "62gyPEbGsmZEBRBkiC3aTCvc6ecQKaHoYbSgJQXemMxJYjSeeMuUr69Hm2ubvFDB2BF82eZhqNWjPjn7fwhQwfME",
  "key28": "2y9njTUXA14vgqmuFky89oEGN2XS1vDR8SQUhtEVdDxtzx3z6ruU9hunkS4aAorgvJR1rsVNhh8e54sFgKAAautT",
  "key29": "4DimHXWtMUhtCMVf2Kgjv8N2Fwt9S9rExZsUuj1iwmjEgHieZKzpodBiS1hzyRUM59MHEqJDdm8uLrudeSdKV2LW",
  "key30": "3EMiKo22XuGPqZaMiTZM2TSAMTsNXVvfM5BgxbEM5zaViaEtTPgc3gXdcTMfobGFEVHGSqWqWUbMXWqu9nm8CVdz",
  "key31": "5UtG8HGMyo6PUATqZLALKHAyXJGSLh9jNymH46t8mPXvdop2WrmFPQsgLdgb9YxdPF1RU9JKfdfpCGCQ8kyiRCd1",
  "key32": "3P7rN3grJpxiCbAszQuHPv5S2WSBDjZw2uyNkaRTYNGHZqdYXUzjQwx3xPtuHsTu6Q7JkyDmPEMaYnXYWkf95drU",
  "key33": "4vcU1rLniEC4eQUYh1G2MAEFQJv9B5kzsLtSsYufrGf9aGguqm4tpPV3DWsnidixvb7aYgdBnP7pD95BqPSsNdUJ",
  "key34": "4rH2VujLufRAg446rzRCwfrVY1g4h2RzSoYqFYrE1cppw8Wou6cmeMWmeaif8EBwTmc1pmeDk6BcEYfmDu2aTNGW",
  "key35": "2P1nFpsiJqieK7nG6TRDt5macJAVDZ7LY1my1YmtTFDrsPasLr3PtC8THDvPsHPZiib3vM9kU6tHg3yrAV5CATsr",
  "key36": "2XSqpF2bgwoAnyBjrYehUtRpPcmP8CEnBL169BrT9NiAtzDri4uMsZx1xpFvBw2CiRVaN9rr2dDQLCC7np6jYQPx",
  "key37": "2cBPMU4X22kHBTzD1qtGc7HdiCniMshwRh7Rb8SADffxuxgDWQdYtzNjqrwouXjK7wQ9oTHXY76Y7kc8jBMP5SZt",
  "key38": "5XC9eC3NDdaEihykkhLwRQSJbjpJoT5ukpTQKDYwuyNKCjMfXNYnYJ3Dyj8yqs732LNhoguybJ5jJuiPmdbx6RjC",
  "key39": "5Y4XU6eKcWTERKR1kit3Krv2WsVw4n2C7DyXEwFPSng4MZ4VfricVBR1uM6enMTdqMgLPrq2LcLTDHTZ1vTHbAbR",
  "key40": "5LupwzaNpCZg3A5bnHit8r2pEbxmqKr2bQzV9MUN5voG9sBatxadbWE11G9JvJva5AA76Vh8QFFSaxct8D7g3yTB"
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
