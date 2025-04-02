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
    "5s3HA9WBn8qPtgnyACaXrpgibLXND5acYwHQ3op5BPAHTznMXXgEFnXX9YBMsYwUWPWaQqJ32mia4LaR1Q4cVgcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eXz7iTeBqzcSscEuVoGKZV4xD47KBBSgL6bsnreNXAcdGW4qwidRQbsxpU1Cgp3Ju7SEqpuMbHSLr119wGN3fij",
  "key1": "cKEh7xpoa8BjTqN7MifVwvPxv6K8Tqe9HsEFmgGH7WWzf77yNEzEXN6TLBvpHF57H9FuLX76yDNjRtAhX7ZJjfw",
  "key2": "3Go6RgnJ56E4NVcSuc9fmdAr8Pvtu6N8WbgNvrihUopJRt7KfuXGQVHwRnteQWsfdU7EjhDkfahh8znmtL9Lqo82",
  "key3": "3jGNZsDqzuB29nAYnZYYUqWxDqLqy618Ty7bCCBffcsvixu2jQafcDUiBVHTs7iRvwfEBWcNAAzXErR7mFADpGZu",
  "key4": "2Hai61uioFFP17rj27FnAPf1yCggTz59tASn2F2WkUBa69J1UZrN8bWwjHgm7Yo82XjyotEtofG3b3u2qwQYScRz",
  "key5": "3hiNPKnGHkLgKx3gGxchQbP1MLJbk1hdJkiCcAzQByYr5eZXZgaQ3CotSt54UrhTLohfCYp8FA8TsQc28Uitqqbk",
  "key6": "UCqFhz52VE9SwQ4oqphmzGZr6jh3UnVQ9xV2FPsrGxWxFRSuMTrZamcQYmivWjLAsgNXPFBwhM4aGucH7c4nVt6",
  "key7": "2z1mtncWzqx2pFSDhQaPDZYQ85pJj1rvULPBSRzmAirNaTkpyMN3eDYaDmTTkwRyTxYaXvy6yXhPRy1CeWNcfArK",
  "key8": "J5wsAJKJ225VXY7XfcLCLaZeznGbpLTdDKANgtfnBgvdckTHMbipmcDrKpAdhPNDjo1TsDGiByzrumvoG5u1zMn",
  "key9": "2YLMvSyFyQ1vhzPdyd8qag19nRXNTduSrs1pHmXe8byEB8B4EtngMhP9yWAHtuf3YBLJYh7H2NcmCNo4CZWY83bc",
  "key10": "47QqLH9f3xfXM9okYcd8KryeE15LgJrNTmS5GGerWBydqvXE7NyafxNdgW5BWBuFLDmgxMbMDfe1CEr6cNSHJY4T",
  "key11": "4xPAmYaY3mob1b7AV6ppYyufyE7uVnXPo4C9jKRJAW4AcDLsg6stp4EXpoyQ5RPbxpyLEECQcwxrPiaUThbjme93",
  "key12": "381HdmYQmvggtWTpAFLGfEa86XU5urbAnoyJAogQ8SMaD7ym2wZ9D2BSzZ8B1KHAFuydN1XZiZgMHYNPJMcqtxjp",
  "key13": "5nKubrf7qSSPnkUbmBRxmNhMqwDyDPWdosyus6RvEsPmrYDkuKtdwDyo85pAZgcvCsTsU1PKdUCHk3sYpYZZStwW",
  "key14": "3zcCYE9c8wioANjoDavPByToVvsgQnDiHtsF4ioohTNfkjEeEw786bjTg4oG36LeLPwrvEkd5mPzzXuwkkbdzbGh",
  "key15": "5ZGmbNqotqnH7HrmcT86miYYPdhgA9mALFtgo6N9kirYGZR29CTFWiCCddbwdEVgRuhFJaCM6XnbmBxW3isaESvh",
  "key16": "2CFsCZ6utCC1N3C5jfAWVJpe6U1zvBPsMGRPeAdhxyJ1KX3p7bjmQJ98bedCqKtmAYdd6HaD8XF3tScTW7Pizs2R",
  "key17": "28z4v1owsAASm98dwrGyMxEYZSfLTkdA9mYBAqWDjDrtGeF1cL99ZdRvd867bnNn5A8W2vw4bNPF4XqyMJUkxZkH",
  "key18": "2UifzFFWGuqHmisFcvmsv8DTH7eAYTMDXaryKrURrA925SR7Cy2Z3c6JfHjkqKsdv9WTuUuh5zvop6ZD5hvLWcwq",
  "key19": "5aipjF3dhPHkvNfb9UvYJ9hBf558RnMPXCDX5fAUi8uDtQW6WSSkwUWsyqEJKT3NicMjZYcXVpXkRrxkLvpQ8DHE",
  "key20": "aDvE8oFGYRfSSSWP2eMCLqJLkRnB4tuzpybSHHSCMAibymmEij7gdhtkXrp7icnuTHC69BwFfFuRT3yKHpBZyoS",
  "key21": "5UqbrDUZ9EF8ibCYkReyiYzS2wmSZJFrxe5m42f5jqYLjaewnREY57VyKHAFWHapFjoa6G2kEXm7MTz9wq1BgYAk",
  "key22": "ZfPmVsreLWxRAQLyFb6c3JLpVX22JxMcd2wKUXYwUPC2ykiGjeJjBbW7o4fhQrezPSTWY6NjsUnhgvuft3Frd4H",
  "key23": "47zYHx62ckcuQhaq3QYyANnPURNxRowYZ2MgfCCZMFoJn9ebCk7HXWPoqvQLhdWdwHNakURDJmM27Mkjf1Aj94yi",
  "key24": "3GXL75Tn6Fqwu8f7rQcVvjxN4FWRMqGrGBCZTijzk8ZHJNfJTvH5PffBBeXXChxYmKZi8ZteSVMkvCtTtE3cfjtV",
  "key25": "32qvqdW8P6Q8s7qwEhqyGgUsVSajkJkTZzzqQXRh3w5kJeLdN7JyMKaEPfujWagk92GM1P8x12kM1bP5jV7frNL4",
  "key26": "3kFYZ88nPnw8bYSRAtNFAUvqmvaMAD2rEtmLcPMgDYFz3mEqYQj4ZgTL3er6ywQ1fPbVF3LcCgoN8LqLYuBf2Ujf",
  "key27": "5zUF3J266KDaX6nXdemK9ekGHi1KPnNGNLeWvRCUrXo82cbbYTGhXkYhXtSDERZRhKD8LSKaWyXpob9FHkSb5K5e",
  "key28": "4AXCvCH3CLmcPZBCUz932Vm1rwYoZxL9BjR2fNjqGZAWUHoZmvAVAtE2gPY12jxiSPHGkm8smK9HFT5hb7SGMF37",
  "key29": "2SLtNFqjgM87Br5d6B3k6hrQ7uSDfYXy5euNABh4EFwD8kb51PCaPbK66hK4TNFhHTkC9jUAsM9R7VdBQ8bUfycZ",
  "key30": "2Mr5MQF3ktqFfjpwrb6mgWPJgzLkNfMY76Zx1psx4hJN2aRkaJ23Zm1JuLT2yXHRprxJc7tuWe2r4e3R94zWwyVm",
  "key31": "3gn5xft1woMAyxUCAVkUPpjE9kBCUJYFX1sbCHPW3cf8dpY73bCsGXozBssmpazMDt5uF9f5HwYRei5pNASW3X9M",
  "key32": "3DqEtzHmn82R2XC4nnH45mRarEwyWWGXoeJxQyxxznScXta3NKYdB6hzM3Fo9Y3cT2JZHKfaMPBfK2MgVgr9xZUw",
  "key33": "5mG4ae6vB1qb3C7SjJqLa77ebmnLLp9oNyeBSLQ9yjRVFsU16DyVstNpTYqWSowFzxTyQgxAttrBmzfrvEzKhsgb",
  "key34": "5PwSJ8RUnFmtbgh65ymLzLxfNHNfHsJXYFGD8hqEC8wCraa1qfZe5A7wmkSiGy5dLprCeza23q51oaumZGooK8ph",
  "key35": "43mtofGunAAnSBVmsNHA6KbSgf5gX22FRNkAyidhmaaWRC6xHpDAj2T525TJQAJmHC5YpgGkgi1nzPBe8RrxLc1r",
  "key36": "5AyyDySLc3RRnTmdDHNEWvYGhDnEiJvHxhAmTj3yh3BqbRDJcL6b1h28R4qowUGnErMHLHgKksS3zccDcGvhjqwG",
  "key37": "3hqnsZZDdBuRg2m2ZayVaXP1WW1zr3WZHKpiWCjv7kmQD67txSmefNSya5MJqmzWA7mtqzmpnNcSFtbKP6C6ZA77",
  "key38": "iAX47rU8Lcpp5GHzYiLPVkR3nRrNZXNudXKtwSpCRvTaGaZ8pDMZ2oM8phsXAWSGeW9vU9picsrjwYGZNAs8meL",
  "key39": "P8tgtftFwLRBKi7EY2isNqrw2T5NTScyV9pMxfXBLSXviBs29rgYRERCWxphoSf7yUKRRe45fskgme5XRRvgHCr",
  "key40": "5dPYr31yiMEJg37HjosTDAPiLNDHMkDwTgnxWsUsYov1bqMkaBzoUXrPtKyRBcskB3WVHb7KWQzHvbFwCR74LWz8",
  "key41": "MRcbbeko6T2s3jV3HDdPEuJSAFDMfbv5SRmT8DzGmDUknwxRg1KiFKVbY22WcwWHPxf9Ak893S12BsdUZrYbLto",
  "key42": "54ySDk4dnBkepeH3xdPi2mGD7io7fS14c4qUAbqw5Jb4ySjtb3YxnsYoHwE42vecgyunq64cpoAUNnk5Heig7BvX",
  "key43": "4ijqvHDZunhLeTYJiv1hmFjAeSsqmPFedG964yvnwLmyz5f3HGDprPdUq9UJpVk3tNo27RWt5vdXf9XQNg6qo11X"
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
