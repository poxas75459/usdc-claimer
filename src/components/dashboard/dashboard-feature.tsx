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
    "4vCnQVT7aEmtxn3NPNcpP9VdKUvp4qJDsdFSCPChJdtMxjKw2iArohUPw2gVd6xiLRkBt1LaGQcvsedFPwUVcmo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZX1rdVwyTM5jthG8LorXTxZqLRhpzYY4WxhJuB5XbDzPho2ANcgA6nMf5Dws24ZTzhLDTFdn5b7ESAi6dGwvYEo",
  "key1": "5Exw95dSYP96xU53fNQv4KZknX4hooyFToPkqTKT8vaNX9YeBpMyBGmmcPohUhyaJfZhQnwAEmQNaomBiNXY3UfF",
  "key2": "5anBc1WU43mjSKGsChsX1i5MrGtEkUUEKFK9jBM9iyi8ae8kcRVPXHp977sSvqKYxsxCXEAq249fNJUMFcHEWCvr",
  "key3": "442gYgTVFkXjzpTFmxAm71486koQWVk7ckC7vh3NHWGtixAASLTk6RoyP277U7wNgdviETqSHvo1jvypUtXS8xVZ",
  "key4": "g2zCcGMYAZja4SaDiB7B9dCtVhp8WdmZScNmsRhyji3cgzqyP8cp9SdP3BptCzXiuoagejVcWQWGi1XGBwMBqmj",
  "key5": "5J3CGeH9NyTYDGha1p5tUGcbukmxgHWZkDKxpLkeg15H5GZY2vQ8ctPtYD6m2Yr2kdHTR97WQ7hwLNqus7VyY6Ln",
  "key6": "3E6WfpuLryhPTiqWE87ekCiA737EwwHtpHeNFbcvCYFc1PSZWLc18uX3Nam5xpTmCQE4iFpyuQVf2YhX6WdFogdH",
  "key7": "4XG3kkuCJJhNvFhGin3PHmwKFgnQLj3Kez9uP6uB9QRUUHpwCZjAWtrhZxSeD6UZCUhCmfsbGwTQFzPyfEAiWvRx",
  "key8": "292Q6NRp2EBHE9adu5nujhu36pJzVa4nKF6eqFNg82Yq7aBkuDuo8Lr1WK4uQLx5vfvPKLgM1REQQsZ5bEcDRSfP",
  "key9": "4fBL53mHYvSqrjuBcaHoNK87688GQpgRYC7qCrFGVstKWhat8Unu2HE5EgyQfFKTT9hqc86DCiEz4MhENB2i3NiQ",
  "key10": "5gzF8yMcyikz8QniT37gu7T5BLxkiwiTLjFoJiCFcvDignm3bwdRpg7kkhRM8nonmB8929CLFNuYdKNJRj74FBgN",
  "key11": "53asWKwiqFxC9h47PthdRvmEZWgwD48MV9qWaMpFqota7LieoPJkt1ZAD4ZCgmyMsZgngZBq1wNeUc1PeAvm1Zau",
  "key12": "3JGkipdi3BSrVhxzuQ8bcyQNuukP7ANoqc9w94jxGm9WooU1wbJ4BaNrgPQcXMivv6PUbPSTNjNMsCWDyBWJJBT5",
  "key13": "3h9FdNhgPpnUxnAEwWsJoFutZDwjXfPuHCUnY1pSri3Zfkt9D73YtKBmcNq767swKzjEGUP1oLxAWuUAoRT5vpcZ",
  "key14": "4ULNHmUPRx62cRSCvJGof3wwGkvQX5sBE4DYJyF4dUhp1BDdyueU2mZc5vjmk89Ds7jgWsVhbKh917krcK6PwNvu",
  "key15": "3JynuPSXT455zVgya6Q12JQykLqEoAG95FvLgtCH9CTcowuEdrefBZUeMDud6DFduEFmJKxVXXS3uBkFLtAoSWZD",
  "key16": "3P3WLj3SexwK1EYaNxPimY8V47HqJ546H9Fo9kM9HAHRyrSNoM4rWvwzNswCKXcydBenxvcbwtLeNVPPnkujU5vT",
  "key17": "3DwAitGp9Nhi72BHXsRKqVGQTnuUDnDBqgN46faR4RMMjJk7XQsV4htSB1v8ctsLLm85jt9BfBNWzomfR9Wjvdx8",
  "key18": "4SrwtSoPybbEuM4d2gu38P8Jgmg1EL9t6qbgJKYBpBJvV1rhAwhMoRM2kNdGfYS6aKRXoy66BQRmU4M435wNDKCX",
  "key19": "46ktQXuSQiH61RSoHFRDsxyQnNaDJDzz6TrJVMSZP1rRqnjHghDtJmWSQUJTBC9QJkSn31fkCmicrHAWhUmNDBPU",
  "key20": "U1rtLNhzXQwwYfSnqoEsoghH3Fe4h4wdtbX7cxq1a8enwGGABipWCTsNJkU711wjvpf22vzL9DKWCfs82Ra9aJj",
  "key21": "4wYUqUnh2b9BNSMMvgYTosXMGEKLsseK3rNY6wusKNLnaU61LtctNkSKzEaUsgzB7pFKdC44ZmM7VvcQBzEfM2T3",
  "key22": "D7QSGHJYVBtiVtunq4eJMuu2jmk55NWZ8534KrLkpSLoNqaMf2LTwQd2vSEQFNcXeQDn37jaWJixpn3fy2kRSUJ",
  "key23": "4wEZS3ktM2NtojEFquM2NrAczzpBBBgGCo9PLxhKJftB5eKyvw9Wu1WNpjHiginN5GP97feET9AJXegfNMW2Mt8r",
  "key24": "5skzinogcoqfWWDGjB91bXWj5dVS3SCEKRqxbjQ5nkyYqgTK4s6deTbLgDraZeuCn3R7USgnoRurxwUbkfXahyLc",
  "key25": "RPXtGW5j5eTxux4sUKqNmgSzAA7yXJN73HgKMajh8vo33AiYckPGoM8H2SV2toiQVG4qMziXr5nubLkKp4zNGAq",
  "key26": "2bWcnYyAF72m8rL6sJoURYim5aa9waQgotinpuxkvPyTU7dzje18wt5KSTKokV1ChdfZjQNCZBxhfhXqSUTxWwdX",
  "key27": "3hjbfLvzeHh7wAtvRwoQHcAHRMGgh9HQjdbVZFUTvSkssr8JEVhxuDmBDpp1TCstvpidACdrYKfpEc3iMCA5o5GR",
  "key28": "4AaU1qzL3Sc9Hq9pArJkwgHWRKKEh1tE6ocKSrtdKZyfxARw3TqF9vswwZsRSTR9uek2FsycdyqEWCUi1RQTxPiK",
  "key29": "4WszhcU3FHDAtsJGcR12dfcwcCHvGhQDb3HZGqUUwSDKE6hobrPSzApqi2sbtdv4H2UdE5ympwK8hBdbhMkW8Zkb",
  "key30": "4pqzMuezJXw727k7FK9YdskKrAcTAEQuKk7kTDrwNWvLBEzhgDmMqfHeCUcXko5j63cSuEeg3VhBoRdctqqiWasH",
  "key31": "5Tkji9K5kwQiDWCxw6bH8hQjfmoUkUhr5p8TPYH1rHnAxE8MFMpEkjeTubzaSisAgrzgDRmoMh3BKJfbkgZhisYi",
  "key32": "4KcQ47fwaQAySVMDcm3VSp8bxaEn32nFFP3eKHc4tDefRtRr5ThPqoGoT8KZM16u2bbJwwKvxbPFcABnHK1jGnTS",
  "key33": "4uwabUCKa6Gqbc6d1qXxtmTkynJhaAPqXzkkbxgVnNb4n66xPwkUsPz1otQbEjkcDP2QmbzNyGWYBeK6ieuqMm3B",
  "key34": "5E7J1GYWiKvLc1wTpW5WRjpKMwEpeYuZZy8s68cMdtsBdTWfL4wNQY2kxJnzc7FiSvx3B5YCaasLkzKHKcy1rwqa",
  "key35": "9xxQrPC4UPTtLiMJnnoebbZHr3kKkMkaf3x2fZ4Fz9887JGfkmokNhcPMwk61Q9x84yk6zYLznjsDxXgyXeFLQh",
  "key36": "28SH5x9WAx2YMa2JBhG6ocYo2tNN3JZJLUdsaVShKmit3HyjBTYjrA93G9H3JsoxrVq6ChFQuo4tWTtQjgHoFeun",
  "key37": "4RfP5wTX693GFD1kkhdCaZo1zfD1Ph97MpamBgQ5BkWs5qTeCXbmDdhaGZUxKn8gymWoNLPKq79WBQwavzyCZRwg",
  "key38": "25F2dmt8h6vtzd44sLKHYyBL6gnyfMNHTTZGjVcKatGDPDXdvcuXzpuaxXdm6DRv8FCq5UK4HfhzNXbVwkQ8e6j1",
  "key39": "x1qjYoEwYBXLk5kLGWKiiY33YXpV5CXZFMkDfN1jUDBVjDaMJvd9ssumU5hTz5RaYYgsJjPccc4DToUFWjKD8pW",
  "key40": "4HCh8b8jAuSi3tbHEojZur3wCeQLoiuoFKR4SuQyYETEK72QThZ1p214kaXGRuT1FkoXN9gTLN8cb7TPeog41nT4",
  "key41": "3V1rPkgB4kpKLARxV6Hfrjoeygi8xG9uasxtT2fCeeLT43eWqyUru7NPdCMK1ojYZLxUgi2doT3Uq7ZnDZS2EuCy",
  "key42": "42bUybAb4G63Vf4CUUFCRZrwqyueHxkVszoua1Kr1C2eFHAnXP83RuChPTDBB6EofTWq7FG3J6MyNT6VyCapY1MT",
  "key43": "2WPe2xTFes1Y6RaebBGvPnJ2vUH4Ba5LqNm9ysZrjiqrsdryFFRisVbr9jimda5w2ZK2hYiqevZh6B6md7PytxcS",
  "key44": "cKBqKFWsx6UYXYmyrJMwjAn6GZfrcSkiSHAQpVTqzmkAVnhN2vEi1L5Gkb2m8FGYK158CpLdRAYFTCRH9ozsYEW",
  "key45": "4LHuDqzCLx4XXoVei1s8nBmpyKVpMmECwiYV622pM589wxUJe5Fbax5bz8gTzo18jY3mBGpJEQxPyGcGPJAMFYAu",
  "key46": "5ChaMaMzt7UXYmhSG177mHpUtWrF265iLzwiCRt6FoYSSPbPwMeu2VAc2br6bW51UQ7j6XcbWggtLmygP9GUza8B"
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
