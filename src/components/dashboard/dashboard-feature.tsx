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
    "5te8wEH6DmDpNScXxo6hMZ1xVnvda6fZD7hB8pzG6hk7rjHzKmK59gnSy9LnV5mWGKQpAZ5hxq1vFMRLVAf7PRut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUJ4HQGTG8EJ86R1mdb77DuCKqMPoGBZBosPDMeRgGYejDUPCykzpaV8umce6NRBHzmU2sC1MbKzU1qt117reMs",
  "key1": "2zPFReEDkEQLLKV3wZWfoTecy8J3Y4yuhExyGkVNaHGPUvJ7cMNW8RjhLP6g1AhBw9uAchetyHRHntCMk9Sa4hKt",
  "key2": "5wUys8VZkmdVnfL4MZ9BoiTjoHvYdfdzcUQmczN7S27rHuXiXMn32xxZQcn9BhRvGmuog4Uo7pstQ9SDumpA6WfN",
  "key3": "2gUnmxqkmzpmCfEn8hz2ggcJ2Md1FoD4UecbCwnji3atkD7Jgynqg8zx4d9dBNvL7WwvrYue1GJNCYRHCkgqvnGq",
  "key4": "5KeNhxXyotWVe4m5ZWCN9QvUgKgXSjFGNexpeBizGh1a8UamtFyXVg4PaXxY4WVXK9ygVqgM3W8GgXXt4T5bJ7ZP",
  "key5": "4ZB8ETPHUZPYZ4AVvHzHsWQMmYE4eimWnoJe2schiqKQy5YTq8LGoKacVJeJSEDpw7TKyoFmYC32wjQG5qH8bB3P",
  "key6": "5qc26shuPbvYozKF1ReFWazAx2xNoG7HAvCvrWf98CmQ5s5LqbtUKRsyz4BshnviBHK5tKU4Nja6powEwC3fr7dX",
  "key7": "3MmzH6Q2WPmCebusUPQTVs2Bxx1bMD2YH8YHXLVndVwxf11rtctTHJTqgzxQh1HoBcpAdnnML3dQmPnzQ7C5aAP8",
  "key8": "2CtrzjqqxKriRCgHZpbrh2iKHVJLyBFLZRAMtY7EHpu9p1t8ne425NoA5Lnan8xtGE1D1zgS948aDfVpx93qzhMS",
  "key9": "57PKKrmiz2NW5bKsj4cgKrui3izvbfwFUr1vX9Zwf4udoYCxm4nTVHYs9CFB5GqQDiRHqZKWk7VzZfsNSwe8oCrQ",
  "key10": "5MCop2uxUeG9RbbwbkafdddbDiqL8AeTRnnQLGChsxBjdakjD7V6pkhYgFtBMsfhNwqyQ2a4DjoDQjvQi59YUPKP",
  "key11": "wFnbRTg3wwu6YyaEbkUqb5Yyuq53zpEJVjiTXYJ64fdQxfJ182z8B49UujVSkLTpPqEXZZ47zuFZFYSQi7NT62R",
  "key12": "7BQRsK6oqFrxPhaPACAFTsrxfTsBRLGLcDsJRwieLfVce6NeqYtN39S5xLv2n3RtmBpUxECmBisLLDJirpQ3M9o",
  "key13": "5kq8R6CLHUri4YhTTmvWKUX7fjJ8CsGmzX3yrxTGYQAqette4cdq4FLppEixdTw42uTwo36ZjEegM5c4h7UWgTEx",
  "key14": "4ZVnECjh5J35nZ8hxWW84vpc1TSvZoPFBk5VzCt2WWxZYxezs4R8TzcdVDeSoj6acvp7LHwgyJfHPjkktbTge4ih",
  "key15": "P6kQ9aapRV7iqgLcQ2KWrSqRDwmkHzMEcz6yDKARdMjkJh64YSphoPaoKzzttGc851HpcqdioYMw7GLJCFhh4F3",
  "key16": "3zjy6mSNrRJ2vaccqfzCUjwEUmRtNbdWQyhNQArJDevY1iZ2i5vBjmkJD79bunyNrAd7cUCDQ9Yyjws5qJGvd1K6",
  "key17": "UGHVSQPzDSt23kLoTU2jHyJdR2kqSTuN2aqHkf2B1fFEGzfk1BtxHeW9JGkmzZzyBbPrDv2HaucVPpp6v5hmAx3",
  "key18": "5HBD8wncBCM5Rt2m7PMMYoChnaWBjvsFBZftS9LnFqdiqvNjBi7K7uFptg3f6h4cjPU5aCVjYUrSECgVjatN3c9m",
  "key19": "4SiAdi5DpeyXK1QRAoFCMmN1zrystBbaihAMZi6HyDuuGSzyXbAJdpVW3o61Q4DG4aUKQQGvxPyn73CVcZ5jU6iy",
  "key20": "5oFeqW74PwqmSeDs85cV4NGE11Kj9E2f3WhQif9sbdXUfywyHoagtN42qGEqvsgSSAiR4Ek7JaQnRLVi8NuwEoLy",
  "key21": "43HRyDpqxMUhNhXzds14Rn9eX1yKjuTPRgHgqc94sNMthGaB8pWdWd2y2P8eAjtBp2av4VSWDrFiw1W4Tz7trRjc",
  "key22": "SFaLK8MZs44rrxHsCKi3sZ3tPFtDkLiS3KVsY2pDdGzeJK6o9MoAcUqEEd5E9wBJi9LW3AVfxKuFJQEAEw6isai",
  "key23": "3axqSHkroGRRZ8wPViWxnBfEEKUgmxYRMnNzbKj57GNoKfk2QEUmZvHmQo9fygh6dcQRauoYwBNuMRohEsxe62RM",
  "key24": "2SyqUpgfk6Znq8xu8hTzXTrh6WN1xy6QidPkK35xxEmvaGKYekcEWwF1SZmVNmQzFfNJnas1aCazA9M1kZNBkz2B",
  "key25": "PdcaGUMJmDG9vhdK22sZQU8L5QRmnegqKfamvJRd9L5RyKAez22ELcx37dLaZibiyV9SYragP9shNEewRQB61VH",
  "key26": "yf4DC9gaRSBxm8zfvMfm1DeA3Y7tubmeihiEKRLmBuCiQCW62852wsiaAEQ8ySxXk3TpXvrus1m2kFWmgZ3Jymk",
  "key27": "4FdDbT6pBaHZ2i1NjRathuyFx4PfErpyK26A4Toq2SdgdVVSUsBkUmuryAmjD2BtdJsjjKYoYjtiTCSTedGRJKPf",
  "key28": "5oBATjsVEGxudotB31tL2umwaFdAvfJWJnmvdQ1EpbRRnYV5Brvy7rMqVNrddhPucwncfrCsPov9BrAQGY4Vy5QV",
  "key29": "4vsTdDm83CViefH9rdyuACcSc12yV3Q895rCxjqDL8WsijJmiJKsGRRTfLhXtA25fPmarvYy6q62iv5GvErTfUq3",
  "key30": "BCavrFFmCrP8wgJk1HfK1dBeUXYz5PxwMT8KXv6XUQV6kMbYtm9GbrjJsDQE3UhaddZ9TTBx9ML62WGQzaZkXft",
  "key31": "nmLdcJuwaGy9EciYy3V3bEXvQALaJiThDwkQ8StevD51kLCJW5M1Bz5PtRzqUWFyriz3HivY2PQhG5dS2VeMqK2",
  "key32": "4GBHydn8bvhogYxHCNTcybs5pMrfuBbSCvszPjrhnxqs39aL2b5z1bpWyvgBg9j1FD6sEy2VfYhtuAcUVcmUVwkS",
  "key33": "4BLWuDDD5BEqsQx9R9Qtxo9vaTw8UiFDy39vsGZD486E83rte2xaRG9wV53QmU9Lq2UmGxvAPHhqBrJucxe53nqa",
  "key34": "4HcuiNoi7Ee4bMysQWQ9UPqQkaqt4WD9DEGdrFDhNeweqsFpVrYmWqfc9iaF5uYWSYGZxAudyqQQZE6P2VWqGEJh",
  "key35": "8TyjRZrEQh2skpYpcxYogCorDfijtf5Vr4fukED1mnbyJWyK8QJCgcw1de6wEcvAYfS8yKnBHxH2N6mXG5zohRq",
  "key36": "2kPNZLCbHRwzDJb8pa757qZyxATt4yvCfb758HVrtzCLHfbB9823Ks41jQpTNpNeS5rjmYDrD49vLwDoWewcpNVu",
  "key37": "3bSPM9WfxJtfjNai9ATCtXiCh1ydsgr979TAZ7JzyHaKgBsBntCTkimULExLbZRs5mHbopmF7UFirUiwB7nNBVDf",
  "key38": "2dvji2tnm73uNEC4u9Gx8XSLoCpWf6c6Qf6D6WomErE8vcnTwcwJqnmCMgZAnUoQagJK7MQSiQ2VaRwNXLwUgnpM"
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
