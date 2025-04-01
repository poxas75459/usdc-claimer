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
    "4N3fXK4FVCzd99LXMDcQDH4gb1Z3Ar1oJQYTkPLFpocrFoH6Qmy7JYasZRkzdiGUc9hn1doauMJw559QpukGS9WV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EY8vsQBpKF6WkZ4CDv9W7vwB42h3ZTdtf9R6XFZcdtHvHHig4rBGwZo96PCwgrtg9xsNYQhonvayZ9vM9A1PBnq",
  "key1": "3bvtuVUXeTojkR7NbhGze2JypSpH6tXgDTNigcHRrXhm1tD84qV4yXDpKGqcguPJxRSvktvHyrS1oqGyMJsR33SQ",
  "key2": "5WWkLgC9DUdD5YbkUJVEyT9QzgBFfexGwjVwDSqPtM9bH9SheV9MrpXWAao9DecTK6cLLqNGQkZynKQJkhkZwJNT",
  "key3": "3JMD7Dqsbkwk7Z9YhFshyF8AczzimmGQWSzXxHovrWxCxqhvkNvoxxnsXKjMJXfhncM1QZ6PWdP2c54MS1DjRXgn",
  "key4": "3czBfaBMm4Bjj71nnFdGD3P1RSzvJmNYcKgYqSPBenjJWRWkjP7qa4WF3MF9Grb65wkzfLB3SiNfPFS5CP2YcFbv",
  "key5": "2qbjtwXrdMJtpwMgXsVmMAkBgwgQD5xdasRMSRwPyDfUhvPyU1kMPK55CMFTH2a2HSTx2PD9eBm645iyTQFUAtDV",
  "key6": "2P1DUkAMdMWaCJbsmc7Fe5bwHEVTsDtHhHBnmtDLT4U3ocBEGi6EqCRmbpSFm2BVga65e8JF4a8vJXPREkTK87ch",
  "key7": "hbt9yU8Acq1ZdKk92cM9ND8Qr8CcpP4y9oB1VBW3gqK4m5MZ4gjzUqZMUiw5BewvABxz3QfhZwGydSP3G56YkLb",
  "key8": "3r8i1YvHhCE7zTashtHRh6P9MAieWu6Kh8YjCkzBjAH82BGj8Z9fDywQdM2w29t7e1g3G9KwQvRj9jsHPme7A248",
  "key9": "42PVAsZJ8XbP5UoqiBPPod1qutsK9dVoTsk33PWQVH6LeNiB5npfD7N9dVsG2RVSDGVyq86NxvdR2UZMGa8y7WzU",
  "key10": "5aLPPz3UjuRWpc9GFUrn7G2VAxvFKDFQtDsAbNaWHE5SyFKFpnXT6mLSFQ6KS1qs8AuEoPMSPATcA2T59bz5u9yS",
  "key11": "5UD8Vxpw9n44PPZjfwUaQj6hGXo769zLyxrYNNY3mWJdmkDdsDdp1LikTqX553k7wtmVFLyFn3LoovUMfMGydFpx",
  "key12": "4VxMJ9PTP3dx4bX3dbTHtUhJdSSNgcfDWwaXKyAuhef7kPArovSxejosC8zH88uwEMMLWSmQUtAYqyyATuG5txZm",
  "key13": "4kgmunwAMyWVkuMT6vAgpAkppxodTXBUr9DY3DnZyYTPhJWpmJ53JNSxNZnRCNB7WhfAs7nuTmcyhJ91JvorEjAQ",
  "key14": "4kLkGoHfZFQZMLwgUSAyMTvaqW5zWS1SzWSt1vTpnWZttbZZbtL4hj8geaq3JFfBetg5FWuFgZHDqaUHXcdjsxmu",
  "key15": "37wPB8WhFqF9Smp1DsZBwfRiBwEzqKgfFrBW6GJA3Yf4dHJW1u35tyUvDb5kNWpCxzJBTgEmdUQoGWsJwTtn1u8g",
  "key16": "55hKRHLhx8ZNS7RMEboujzKW6hUGZ7WrtAZYsNBHj5b3vpx2SRnf6VBY6PstdDNWWSHuM2xkzPWqozaLPmR6rsdo",
  "key17": "4MK9CzH5zWfxZuYNjm67a4qj5ZGhVVQ4MsBsDKxx7YxS77KNA6EzKCShfTysaQVuJHoPWsoPTqW391DK4dZBngm3",
  "key18": "4XtDTUfxKMN94hvRi3sqoCkTuTsJma92eTq3HCzUTN8haSGFuDgFWsCbPpYyV4CWyw9PWzu9vm4yKFo26qsuV4BY",
  "key19": "4daE9W3WM1YLvJR89Ymvc5FjvsLaQtiH8A97zBVi58rezmNP8MgPPEQjxPHygMuxA9NvhJ9ZEnhpDQHLLr5bdF4u",
  "key20": "vcy8LaHggVSS9oKpvpkB9Q17mn9TPqr7UkkbjXS13iADNnhUoeea1LCz8oyJA6J6nAYvsjVyrdyfhbyreY2sRqE",
  "key21": "n4sFyHvz19n9hUXwRV3YDi1rh88fox3qxPG14YiER8o4S3Z2NV8JKPjTGpdzR9dGEbwjeachn8qK3Qvi7qCgzN7",
  "key22": "3gR3zn2cDW9WYJYmz8SWvuDXd19d78eR2Ff2Gxc1oNP5oRdW4aoJvcL56jxYbJMXJMpWGYyNjNtj1VNxz8MxigrN",
  "key23": "5jwU1kXeyTxgo7yfUsXCoNDyRkF1BEoF2sqwkEQzN5LN2WNpAT3bQzQ1n9iC6H8Smkq6sDmiC9TXRQ6mLRU3jYnX",
  "key24": "64fkyiWUHT6msPtQrL73cyNY6JAeVSAgAQ3J5PE5wnEZSiaEG3GZgNRE2qcCUPJpiPzzeigg5nv8agsg3qTfDpCf",
  "key25": "354vXkTrsfsfd2tDbEXRDQ7HnY1qh1VHAtZ8VetKqPxzh9JRJ999rvAjwm8vhdoJntE5wsuCz3dwFrJFc2oyCStn",
  "key26": "2Vwi4CFZMzr8yn3b2QpzFKAE9z49UbrUQyveWfZ1GvVGEf1H1z6p7x7yaQU8i72UfL2LK54JMTCNeuWXMbgR1no9",
  "key27": "kuPa3SMkeRhzN7wNxH9A5cACnFyMGppNyxTJdYyLos3RmZzCgBrZH3eUvfZX7qQd19yStoqypFUpEGH9yVgYJLH",
  "key28": "5i56YQCaf31sbNekPkBbMssbJDQy6d8v2pgfNfnNCCVYt6kyH9AK1LebtpSiPBbXPp9CP8B31gV3gvfkvoknSbvw",
  "key29": "CuMCJSiXW1coPNco55dgjz2dLkSKURkym8jBWcqCtYWyx6MxWhpwAHkD6sSEUPdSELhTcWizWkK1xYLYsaN52V4",
  "key30": "5pv4JrrH1KcijqSgr4TXDH2o7RF5fi6YZLnfatDt2CQsiaxaQfXHyetiWUyqJSp2gPue1qbztsV6xG2i9Lzzt69x",
  "key31": "587VbhjRpvG8S2zwWu8Dp9FTHQq14phkKeE6zivkom6dqYccKYudttTFqq9c3EMdf6C1PjLszWhPX6yGztjv46Bo",
  "key32": "2qun1zSd1eo5BLQmpFV7Sav3cWj8DLpx4RNScS1gAHuXcGfUM3eDUMgXDQtnJAgeKq1qbDk5SYHN3xwHxCSLN8dN",
  "key33": "3tYETGUaDjyoL7QkpErgJZcKyRER84sv9GWwavHaCsdhdZgdfdMkTjnz6veh9UsM8xCJFk3ZAZiEpaw4UTSELJPs",
  "key34": "JCQ6wxH5DDjDQqb6NzptQJXteiAX1wruEZ4h7iY5JQ6abjvSScL5KF4NGgBrfC4YenyT8scWcnMhtLuJuVcnYCp",
  "key35": "38ZUPriQeuEJJX71KrhNqztWrmBekB4KZr1peTcoEedfygsGYzsCuWAGcC217TsnwiyTQBx9Hwj6KvoP19hCJFFP",
  "key36": "4B7x5gi8rWV5U44t3RK6wEfpHunXPgmFdPmoTer3dd9P9ZUS1fAjnw9obP9rMAramWv2FdqgVDHrxZSPJCmMSn3F",
  "key37": "5jznax7YsxUt2CrCxkfEWoHk6NKNYdri2bya5XbSShn1WmfMwMNzR7oiSV537hc2cRAEBEhoCbxebNN3vF5WwFDu",
  "key38": "XyozjeTd9MeK5gAz1Rr3jp9GtcuXVZFfRwBahzfCgcKRusY6JyoujxZAxuJtNyXSVn7ot9koT8PpVeVFiTzoSYn",
  "key39": "3VwXP1x1nH7dvuj9ViUf7ajpTEcGM9dYwbCnBhBwWSH5btJ37xBTh74yMtGeFSNnSXx6E4ksYZ3ScwpRrZuukYB8",
  "key40": "3Es47atYXBrBBwBF3P8kQdcP9peWH7AA8pjiBE7jTEBGgqitc7X6D6Hn6XrWBMAP1DmP1EdHGsshw5CZvsnYsfSU",
  "key41": "4aWxcvRN7RfgRcGroBazVYfB7LwKG8axQy8XkQ58ofKzpyhXJknHBmNsTyRketvvWmVL45EYyn4UiT5oCL3X6i5q",
  "key42": "5X7tWVg4ejyNvMzfF4avMApBeH5emmhm1sC5TmGe5FzBafp45YY4CX9w6YU3iwtFFVgneZrwSScYTGxsuNqsy6DH",
  "key43": "2b58yLp2xjjz8UTCRVFnrLPZMTeoo3s7kiB3b8kHU4rJnkNu73s9LeV6Rkjnmk35ucKBezbMtBSRxVagD2NoK4uV",
  "key44": "4JvN8coew9PaH8iH1DLSKqXSihtb1hQhJaidhL6UNDhM2xHbMuewPUxsAuTY6Nuq9w6z2cLeiewMWU78FcGKb58Q"
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
