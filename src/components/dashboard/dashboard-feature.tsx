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
    "3nZqXZXuKCxrFnQJARxUGdj6SA2bCmxpikEDrm2AcVCMJAdkgcpgJCjdsjkt5QrH1wMBqABkvurbo5NegsDVieqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wPrGtUuLX82eD7CQh1Evp4zNwGrvS2NwZJ6h9DMSTysSzQKqVxAMfD4YckkwJmu9jaDjtwamnvXz1SJ7Gwo2TaA",
  "key1": "54s66Liw7SsGM9FxCeGspkVD4mzBm3y2erxp7VP7Hn4UCMyhgkKxvi1XfsG5MxTn59DaXxvVTL3bvZyinbaBrMq",
  "key2": "3GkExp5uHvgqGkfoH9SeMic2viVW1UPouPMzAicndg2LTbvkqufJprMsbztSKoxAFxas4r1ipJcGKUmxLHphZGDK",
  "key3": "27ufBmbL3YmzpkLkpXcJoyHqyzSAteLqQX7dQNWiv8oARdp5U377kU7RYQxMn8z4PWuBF8qpBkfHM9zGEyvHW2vx",
  "key4": "31YF8pVAFNYkBLkAofdCKJLjLkfXMVpJBAAYu4GDgQjEJysKynTdYEkLrokQTEPGogk3Vgiy5dUzLuDB8vzNHiLw",
  "key5": "4Re8YvvDNKFrgx4C7LE872SAPKWLiuCCyXvJwTNaxHPdmYhV3qJqmSACGweGNWEgBDSZbrLtGMjZZhqWBMpyiCkx",
  "key6": "2DL52GT8KgvuyKYURg7A6HsX4hv8PmusXnE9P4QwwLhKC7V98NTWzGwA5EyMGzuybXN78B6CR4iS9YEFXAR8Tmtm",
  "key7": "mWZCn7FjswSrfowezVVp8THXZDrfXsbBuZLoZziNAnKTe5SQKNWeErhe6GffpNwtN52cuRkgjUXAybJE18hLay2",
  "key8": "4YTUSmveU4pmfJZNMbCsKkapy9BhK6emeTZmPp9zk9FPamDRKVYUBJ55iLX3f5Tf9Fmd7hEnWZEZxzZVgwR6CNQd",
  "key9": "3zZrwTWzSicpxVmxKF9BfiyLQk7EHHtwNjyu9UNbvptAMdGdF41Hyy2rsvsA26m96UajAp1MkD7YJrLdk9NW5356",
  "key10": "UrrygzjE3X2G2YXo1FYn22oEo5XDU95QgCVmQHRpu8ZaG5LZjSJzdJQdotybb9skHQWMeaEcsaqqkbFSrJXLt7p",
  "key11": "3CAr9v8TTGQbsppSncE7MmfryTtSbpVNxL6oRdYMnvfcTDP1DmgMYgsS1Es8NGR4UrEXVGemwY3nC56QUSnrphpv",
  "key12": "3zqqC7XcXksYyvmPCTkQiRWAXbzJJNgAh78qaS91GLXNHaYT7kKcdyGCbWA3EbM61wVxPYLDzcSQtefQD6cmWWMq",
  "key13": "PLLrfkSQicTPdk1NNm5Sh1UdxQxeHn8qzRavbSx2yMLV4CZEHpuQ7XPNrzBxbX9bQFYK4L8Je4Zivu2uSetnEnJ",
  "key14": "5FVRQJE2ViSDbWtgfoPX5zjqDSMtaXZKUkMjb8PXcjY5j5c12FuNeR3kNtAbAn7xhTt5eMn1fC1HjoF2UsF3XTS6",
  "key15": "29rDzk6NJnT4a1bLZQkr9MdmxxeaQjU8ano2fmXxy9WEK8BGaCFLKRLadLHsrmVFTfYT6J2TqPgKtPuHKFxbCtF5",
  "key16": "53tN9ueSi3PNcurVEHz1wFyX3yNVBxtehzTzJTsqUhgERgvcQyU8L9KK7f81homegydN8aMdak3Qmt9nkMuyPdec",
  "key17": "2rN78ni2PfBVc6PkzN8srEfKKgH2tgZJZoKqu1x3TC9fhuhUqEdUpvtpv74baDf6Z3L9gqvFAPaW8qMMvK3uPny8",
  "key18": "5rE9f9ctg6aQdHrkVkeMN7Cr28rA9Y9dAMDS7GqJyqX47nNjuBMW69BEb1im3SyQKe8MEEd2xU2S5k7UGseZN1Ms",
  "key19": "5wX6JoMx5Eu8xynNFCmYEKXKUFWyNuNJfitEjcqw8qwVs1hz9wf5mpQJLuZK3JhBn8RF6a3yAjMqaFArejWNFAdX",
  "key20": "4TT4rPCUz9cK4bPpGjvJ22p6CrMgxdYFVK8rnhQmE61M252kLDC687zJpyvpiqpWw5x1TTUC3cvonUMxB3nkfpPd",
  "key21": "2Dtaha9d3PS51Z6QTRBmfoDSzkD95npde35ehCeQKEGbetXNumdapxGLTgSkt9kBrwadPr8ecJDGnvw8dVYtt9ZN",
  "key22": "3jeiuAkpkk7LXeNyqF6jqJKeswJzBWd7htkuRwsC8nwojJFSqqgCXRrHeU8nn9uSFTbZNreJDHUmrtyFgDMnKahH",
  "key23": "3LEUJ9gowV8HFp1Q3kMNNZpdNoX3We5kNCSjj1enMCjeZdNzueJSF8h18bozgea6kijyXizGUEUHkmkq2vvMMFuV",
  "key24": "3Cbmhfdru9AWefLgjYrCSP8z76PLZcPvCrq4egiwE4U2aaWV92tV8xkWLyTbCesnZvMSTSYSPiitAwDKkHWp1mA6",
  "key25": "5VhpzZ8EUf6Lkss2UeoPdWH158nuRnGMZLgQisiWotYm17raBWUNH2Z6ojSWLVh1AdSmrT3gHCcKzqQu1AkpUHXu",
  "key26": "3vjyuaNqWc1e8UcDdHAqHpq1xZw4wvXHHonfzeTK97pPisbSFKgd4uAW9fXYoTq7CtXv8SBw7KvYYeMcB4QtoG55",
  "key27": "aUaNF6aUjoQxVZy1X9z7U2e8dSFk83G6r6wr8aqVTRAXF1qzcYuXGhckHXnzGoQP9AdbQ67z1Ryg2R41nbHyLLY",
  "key28": "2tdxBZAaJVcBtMAGkwkZg1VLEGTRRjd9urrCr2oD38UzzHXBeciYg6RKegxLYkw4QL8pv3NHnSCVDDW6gUfW35Ch",
  "key29": "2SCuvVFCFvoeUtrvv7N24Shj7AtK57QvBmddy2VyiZAZWTizW77gXhbPgJPu2D2Yr1dxpMh7Yr7zDuWuZfuwjWMP",
  "key30": "37ShksqPo3Zz27cwBTFzpFbAGHmRQHRhJfc971Bo476pr192W4yxt96TdApM7S9dUZbvH47TBzaSxmym2iV6uSyV",
  "key31": "3i4rpkrCUXxX4TmqLLnjNMF32D7aKpC3eNqQuDrWZxGLXsN7QXj9cNxhoPv1ZPRMdFMMGwwc2sdQrvSqHLSNL4ZA",
  "key32": "4uMcjhBcFnawunAaa12F1iK7w22hSsXwS6YV1gjcBp4ToBxiWF3FSL9hpbtSmWPcLL8eYooP8CdjgSKoFwTsgkPf",
  "key33": "2jJW557sgEjFLD7Zq1GdMfV3mw8YSK6PfaBN3WDP2fi7NBSUzGXhZ6C1yrnTKrqqpg4taeUsjtBPNDTCoQydRdmF",
  "key34": "2De2WWToyJ6TTW61N7uSQpe7QF8RxtuGi2JWQVjTJMuPip7BNZ8iLabJKcK3iLTMwHtb7hUByyRBV5FyDbDy5yYu",
  "key35": "2w3w565r4u7FtuFyzD82gAwpoLPSetHX1QXHGP9bbmiuMPLCBS7qQezKVEEUFYdyqa9FGuYv1YEvsTAAmXEsXMeC",
  "key36": "2dYu7SdupB2QMeVionEoAZGnLGKN9QmbqLt5FYkancN1CJMiXR5E9Ga8RZ3r6WyFLqf9mu9tEioe1CksxXW3ruRY",
  "key37": "4WvY4YocJLLQtN1bw2hZufn9oenrwMwQWCp75Nbsr3Zt3j2jd2s6evLSoVKLAn8uZRJTSpwRcDBp1Ui5Pi5zZ5jd",
  "key38": "EMGPxDzWa1wFfNmq6ubkqDhoZPBE6ntGnYRCycYXQpy5y53CMMeLeY67NGAFWd56BKXJjjfoM3vunC3zptqiBud",
  "key39": "5zVh24LPnkMtTSZfQJcyUPvwALFbsYpYMRrYhhQjTZTD6skVALBtqCU192SvTh3oJBTryx2iShGHtp57h3ZqTrgx",
  "key40": "5jUm59QjM9vCx2QPj6fi43NkVSENpcUtLhyUHK8mCPszJL8efpYL99y1jfXBumGuvFwxTMwcQogaiycjnKo9G74h",
  "key41": "5NWRphNgLR4QsuttmTS3P4LHvcK9gNup84B6PGRcEm1rqTEMi8X9J8YMbKSgWpKLi32fpLU7Zc5xSXyBnJnD63FV",
  "key42": "hX4WAvTzxEAiZfR8NM6qnDtaMhMHEooQuBVT8aBCCPLfqxZFWFTfRhwuJY32cWUfNMiCpWG7SnCjs5g7H6sp9pM",
  "key43": "5Yu1STLdWXNvtuCYPM7812EqBGVc8Uhars1KxTDRKnsmkGtasyy85JhngPagjtwtVpxB4jDUVz1vB9XDMbbtGEvT",
  "key44": "5aMXw2HdTaYSENDboZ8eQKVZPaoUEzBHQzS89jr4whtn6A2YErZSwXS2qoCgSPnuzB82UQJkUUha3eFcMZtc68Ww",
  "key45": "59hivz6HQXsBZDJ6chk54g17SHkzps7AiTkdu6ocdRotwwaVuhUf9JDxvTh9J3h6w4cJEhTS7Zs4GKNVcBmUDB6F",
  "key46": "3SrTXNX3mjCSxbHL4E7ShCiqJzh9tQMXAM1XNJMLrcazAdUwT8KwgU2zN1p82nBJFnfCnAMLaqMnyhMqZTgTsevT"
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
