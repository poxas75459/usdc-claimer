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
    "3TFRBud56QgQEhTZQmUPLpYbrqLSKboQ2TgRBKndWjovX6fy5YjqwZJ2bykKWMC8uLNAv3GZjjnejh1j2pg1uNCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ahXQHgYXqc7D4gyXYUXDzHu66Q8WZB7ZniYYZgTVNsRsFHHTsS8JoUWedbwix5jfiSU8dDuZXsv6uzCF5mLjdJ",
  "key1": "2nth1oQctvLan31tv3fSqauknoKsUvJ1CVTPnqU5wSpHn6gHn6TVQraD5FfsXyGhrED9FycS7mxqZEPeGb3WrAMN",
  "key2": "66EhrjG6DSXPen6aC23qbtVFZA7kQTwTf5wk7vf83XfZm8mjj6id4RS9G6kwvuwKde8sWEj2c3TJGzjGFRaGUcfn",
  "key3": "41382x5mGp7mMine1N3FGFSYu4zREBp79V7FcwCpFyYMeS9qgkJ137Hamubaz2Azh16JN58QTavXQ4Bn5CDj4kyM",
  "key4": "3ANFqi3PYLjjx3Uusc3nFhAvMUF6Wn8FdWW6MP7amQ7z2t1Pp6vocuMzcbYAKT1VZN7Dk46vvQZZfn5rMXN75Awc",
  "key5": "Qm5RKrpwRkkn8L4DFp8QqcRTzJrXtw4rfimxKmQ23ckKTfFjWCNmD1GWVGttrHtpD8NFbVL6gky3p94vkVcQZf6",
  "key6": "2hNn7X7Yvh3EArpG1BPjGLgAKSfXgn3EBHEKorowe8M7n1UqA62xF5FWFd1hbtM3ECHMBVpZmcUQyhRXyZBCAsri",
  "key7": "2faWEidSUXRKgoXHRyDfHpHLeKnkh2iQ6jUKJGHPrLMEJ2TsdJjMTN2TsXBLGdxXvCFa4QdMDR5U8bryB6nDCrst",
  "key8": "451dfM8pwdnyFDP2LesPYQT8wCKpY6JwANV4EzPfNHygTszReMJR13G7fmYNcgDoJ2MVWV622BDeRRSfZEjCbwYN",
  "key9": "4sKpcs2XMuLbcrGkktk1DLMUD4tYwn7vuo1N7NFkPiFSC4T9mtx62WTNe1RPiPw29ZytSAjf3AubVdp9eDV7y7JV",
  "key10": "4T7ZNVX3ZtYGTkaDuiXpHzPcmjZqbVPpCpnCzUm83TJrxysqej6BMhG2mk6AL3oxn3hBY77bCwHS18YS2tU5NXzZ",
  "key11": "uHGaNG5vCmxui795anFKm4XnFkdZmLYbFNMrzL5RAuWHBirpQh1fPqRKgzq8W1aNtSWgAWLqKGJq2VZwZKN9Bhg",
  "key12": "2Y74LzxwmiARW9Q48Lpe1aCWwyicBw1nSX2R4z8c4o5DbrGJoRx19PcSxL7S2u861SJbpGhnLkj5nRXSpggc8SfW",
  "key13": "5KKsVXfnX6BwqVtwVcSe2bJy56rv3wFjdRhXiXS8ukU7J7iyGNo2ZzVueg3CqrqWinBT1WfPkpYLr9kYSBFP7ZTz",
  "key14": "5KrvFRzExG8TdmyHnK6ZnNZjUbjUoMo1qkYC1aMNFqYGuEctprrN3b9ZYEcTjUFfZjhWiz22yKhoue1uow97jhpW",
  "key15": "3NGPAe5eimzXuzTSi2zFq5HcyNQtPgaci8jQ7LGjNcaGsdSnCNXwEYnkTfPzgtx7mophyqognuU4Y6FepkobmMQB",
  "key16": "frjRqVqAcNZpeMR3NvhJZQ4uKkjh6xZ3UZFeMBPVP83MVim1bja8w2mttJoeNUDLuPWWmquZB5FZp8yiv4VMtPH",
  "key17": "2pNTiw8ofJ16itv6i9kSLNChKsBQcrNMag1xWyGYYWcNJmYjsKKKUorKupwPzeUQ18LN64mbJ7gBijD3nmGPfrNx",
  "key18": "ff5jUj5zC2WJU95UHHxvhfmpH8Zcp8vFctXZZ4AF8xky6kakX2QGxnDMmn2ztaNuFHrGZmHtHtXJ2w8Cbxc6f5X",
  "key19": "5Zwm28BzaWvLoe4o2yDYeouWANdcE7owqfhJ63Bun1nF6T6XQ6aHrPfuHn41TmLCsBkftLdwrLqNVUN7pwPi4ixZ",
  "key20": "42Q9upAimiXeCXw25PWeUCgbe2car68opSWH9JfUmZhFGhQKbindS7fN22bmd9S3cSRB1kHmytG5WQN5mLiynaNk",
  "key21": "2HBaD2Sp2f1x66Au86dHqKHuUwrpYp6Npo42XSZhCtkkiFzi5fG8zYpP66wgMcQBKnRVcYLj8BbEpxMhkThyEs1Y",
  "key22": "28qMZKVYgHpEMkxXh3FtoFmRu41NR5pTWhk9wCtSifkoTxW4eBBoKhSH6vokNBzowZuv4uBhxgLSk2XHm6DBDXRG",
  "key23": "HgPNnfpZVfhD3mBUw13zvvc7kXTsg3juCMeEJWpBiUYLbmEN1nhL5rSDi5cxuJgG5QU8pFPvu3JXpp7hPjmzDXX",
  "key24": "4LfVWGRpck6ZXCTsQdzuVdRbiDcTbkyrwhqjPcdnbq3ZZXe4xRADSxtDVRnU8hBbCfaRyp1uRannSGi8XTFN45JP",
  "key25": "G63UeSKczsCM5FfnqrXbN98vfxMec1qjNXHjb7mz25RJ7SrKAeAwDuQTMxwepnk5PPNHWNSxg2JxJ68UR3SYQDu",
  "key26": "fGQ8YVDEkubCQkc63QCSqcsYGtcZTLfeGy4QbqapqwXPaSMZkqUjvxRo6VPdpGEUFD97HLeJ6ctomSQ3LRCj8Gt",
  "key27": "3P4ny9ngqnAKCiLZo2hz6ajXN3cd4v4z7GqoKQXSsYH331P1gcivBsijWqdrAsEBvP5mRSQYwks9Yvd23VDanAn1",
  "key28": "4qPCNV1WkmAoDARkAhwbpaP3KhgVHSvwP6mS62PZUSk1SegZF8Moj9nQX4dJYtAwYcW3AHiifTuCZLuhHUmkHHBX",
  "key29": "2MSHWuhHqZ5eeMDz4n23MuyLkEsR9qeDSGbGFMC4KyrQgEoeftKoGhx5z4vf2aqxUbWqmd4n4987yLB5iyHbMiTE",
  "key30": "ZRAsWAuJyft17HGbUS9LPQxDXDTwXSfhR4utkL1uEYGF2jjHJdqsiNxtCDSfxbAjdokEPGzXHH7uardphGnfVj1",
  "key31": "2jtMirzawKUbkE8qeathojpYpnvPTW3a6ZLzu7N7VLPFJrduJtNn4tMhmffFNhjPY6yr8W8MQFViegwmjTLjH6h4",
  "key32": "2oEYCeA8x13biZdSF4wwLqFJW8oen1CQheHaWW5DRic9hCvm1H3VkXfSTNk2Lxnrh76az1miu7AVr9buVCqKtwbv",
  "key33": "24TtrTAUpmjmdGStEZ7kSX1hKoUnT76ezAcHaVm8yUNc3YtYQBwhuywT2xNkTgLaBRYwnDJxezDCDAebtLPeRXkZ",
  "key34": "2HHoZYDAxRe1zxqxMJmbDPS932uDxumr6SpAAsH7mSVNvv7r9j8h7RaoDxjg87nMvd3aKA5jZ14GCrvTdNa9Seno",
  "key35": "3woQ6xf4TUeoramsTEDJP98gron5nvkzDK5oCZ2EGeuQ2YBfJn2ewbjsva8cvbSfxHQ8wGJVBKP2S6jEG9sbJsYG",
  "key36": "4bEHNhtKWaZgSzbhfPYHTwMjiio7fhFyt2k8NhaeRbwdxJYmVBD26wjQ4Wx8Btw8RKtxX5PxcYu2DvtuNA17ag6B",
  "key37": "2mcjnGWdqiDJRa2xHcvMoL7XhDJG16mtuzHuckXxQa7EBSr9DRMkcKsszJwq87FxDieWsRF1a5Qv9Ce3BHsjGqcx",
  "key38": "5F7dNC4Jio4WbUzDQbGZnqFBZk7ucHYTKNRas87qbJcGVwN1q3mPVrsgACqUJ1gDY6ZwSDt96iEK9g8VxqumqCuS",
  "key39": "4taB29CgFYZR1f1GsEPScVfnaSUDiPiLKKkBk3eHnwt7JQfVZ4fKSzyBZZqLR5AUDJjX49HKAL9taSXK4FGhyQcD",
  "key40": "4PmLkPyB3qWgj14NBKVCrtridkpGdECU5QMmGNchwxMS4beerHAw5kFh56PRm7mxvM9AyJU2WGqoidFWKa7RcuL3",
  "key41": "4F2SXk9nHwGLcVrmH8nJ5kS4sWN8YYdbH9zmf73Ga39qjqvvDUB7msavr6osQxPnNNAc9Gw7XsViDgooq2JLRD8J",
  "key42": "4yQU7mGJXGjkQnMhef62btD7c397qAbu9edyApvpTMdKM2zoEFnLUyhfS5GHPr5jd91RtcTCxp87krVEkpVPpF5n",
  "key43": "44ze6x5gqUB7UcGqwFtqRBm28NUcnXVc1gjaLgxYexU8ht9JkpL7Qt3e99HgkbMmn4DnR5qCvc6K1gqpSwQoQx5y",
  "key44": "2xEvnY755d8uTTEDYZ7rMcqDRjUNJVibdw2dCDbEU124yFR4tA4K9Anujyn2X6bHsv57nFSjHNBAEPGVUCxK1QUm",
  "key45": "2vc6U9d1XnwBwEQ9Ano6c9v4vghcyHHHiNGkiXTJxjVbYPMvuidbkEFFooR5rwySrLfMuXmPuN8HZnAwHsATbYCu"
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
