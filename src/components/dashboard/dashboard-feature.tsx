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
    "47EpTPrLCciiaEDWk8979oqGryPqDqgaZ56kL5WvKwwaBWtTqTmrSJHrCwNmAiZXsPCrHczvgb9CdHvsSsbVEZRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uUH3pws8bdKMK8icW6jJLgXLENT2afkUCRRv8SjLZyybkqzb4PbYno4Kbp3fW8JAB3Qbn8n2BTU1MeYqMYyFXM9",
  "key1": "44pfJrSekbcHVBGPpQgM4xGuH3qjCUPY6twQsvGXkcZVnqW7shVJFGpt6KxYMPq8EUNWu1oyn7T8Md1eub2UT8jr",
  "key2": "2p8xqPr8hVcxegVWdLZtjKjhhMH64kxiaGgNt26qAmvfcvi57gJS793MaHN7XNvgeK35V5HTv1dLpVHEP2cHPMx2",
  "key3": "4yX9TffUSSwUSEMPBBFJdB7v1xBQSnrFsczGWmhbASf6nZrdqwkwRbi9CAu7Fvs2e8yvKgHfUgEE1ovRoTKTzWEb",
  "key4": "23FU2bGvjB2nA1TqDNj3h1t1sHtY5xoHkM4wMP6b4hMTqyLHmWk7wREK3fRJfM1UuMDGhFs6LKCeSuFS2cavGmwJ",
  "key5": "5hzCauabhsoRGKbcr5vwMeNnJRnGn2mT8uTV1fL8PhqunGatzqK4TTxfhxjNUA8BGRAicy48FcNzuVs2yk15enG5",
  "key6": "2M7kkL9KH5ac7wud5WRroE2SheHTJaQWWEwY4Yd24ijDBbQb3ZyU58w9ziHFeanFzxPPvPHPBq8j68FWPYA4vFf1",
  "key7": "kagjGF8NedZTjcwV4D1gkXXtvvut2ToV3syuVnyQq3xG9bVd3mj8T9c6A9n1hgR1joENDUmBHHLWLE91Bp7m6Nb",
  "key8": "rbhFogmJYMn4oVC7sQYJsbidSmdkqebhZu4jAZyTv4JbgHbjkixexhvCZfqXaqsPaHNAPJVHdfJnkPBbe1DxSLv",
  "key9": "3HiYFi8ZpkS7Srzgtpj1oigQL7PfA2p4kyD9cJdruS4SSpDJzZkUX35r8ngKP4eHvxX9qR4BH4WP8UMbV7gxB2GT",
  "key10": "3mVSJy24tQWZfstyifEaeFapXz4djJyoTFQ9HnQR4YGZ97Tbrum3XwREnNw4eivXnqi7mpNpf3vvgb6yQU1Yfee6",
  "key11": "4YJyyWYvstyvNaMEjpu3MWprQbPsLaEJU5UsGd3U197A2zTUk6NakHYEUPTZhsqGvQQy8NCcNmnoVyLwHWnTXvUF",
  "key12": "5ywQJipb2cn2NsTeFRkxbzDYNrSVdu4axaX2perKEzBecRk8jfW2fhjyCtDJLakwGfbgWF6BLuJm9WW5hMiWtzbK",
  "key13": "5WCkP6asdAkfFZD8cxufaLBtXbYZE3woEw73z1qpYSfMbNpGjEEEoQxJNk337fvcTRFBZRJtkHeBZjhHAW6fjJrU",
  "key14": "LSQw9mcKNpBBcW6jTuwszXkt1j572A8e3hscuPY1qortvhbmB2t68WRT4GQTq4qA9HEVFxssXa3M1oYsLBgmJY8",
  "key15": "5h7T6GsqTKYWyf1gji1Z6ymsYnocYETmekgJ7bBQkABXSbbRVah4UtGpCrPABojSDBP7FoY28tevcArQFfKcKQ2D",
  "key16": "kE89woo1tkPiE6prsaCTTKDwXETQ2mkydMoapgKDFgvd8rCVYW9dJqZGsJNEm3JvLqHmjgvyHhZcwNTvXDm1ZQA",
  "key17": "5jWvByQadpuFc1ELdiu1CEW2fXwCD9PFQhe4a1rJ5VUNdqUBqonkxGrgmApfpjDBwvuXzraC1QhWb6GJ2GtaGgRe",
  "key18": "YBAb4EPCsYX3SChWJ9TpExgKkuNbonLmu3VEe6jTkgJCH9DxuqsNWyUj2YFNU7K1coK9fSdMzf6wMhffgkqZGYe",
  "key19": "4ZvU5v49LqVdW15sbuuYLEcBq2782EHhFUsH1e55zYHqHjTPq3a6fM61kvaxcfTtJc46jGScdWLHY5KbeDievmA5",
  "key20": "2QRddS2mFwgVmV3Kddbav4TNJaC4wkV6WZzjWmzSu9HFX1drvCjkMDwrpVu2KKMDqHQENDUsrPBUfoQvjSkyLXMa",
  "key21": "6dV9biotCRbUgNbLDFs7AgA4qRzxA5TRpYLApH5WoeMtQ5BXGWEGTSn9mKZ9w4pwBeWVxJCLLJdpbchnLjjwTTH",
  "key22": "5H51AsqHNcsJMoY2GGY4jTopEgouEkVSGvSMe4QYGVwwx97TEvJ1c1LDGmc6RmmyATs2N3y1e2a2R5uN7H8y1n1L",
  "key23": "5UqwcoXPUCJo48UmQsyXn47okjKyTkpCzt6moZ3eEGyj5WLFEBMHgbHGb7uRW5NjnsxKvpcR4pULooqGyXz1wadb",
  "key24": "FwzjqTGeSouc8Y9jawdVNazBgZFGJ8Si25N7bGPkmpzgjtrjkufwvhofac6fGA9RvmLF1pmFj4RkKD76QhMi9kC",
  "key25": "FN1G3sfJQMvF1HpgbNXZSG3Ptt8efqcCeWgz2KLzDxgbN5PbPC1ga2wgJNR1Y8VNSdt1pup2mL8PvzRRk97GEin",
  "key26": "465UdmzMWu1esXdVJ3NH4jW99jFEFPnmExExi8rx8BQpMy2z534uPciK22pKbRqUJtQ5NhYQnMRVoqbsvo3wV3b6",
  "key27": "3EphHaT6PBArEvMFxxau46FtCJ4y2wvnE3BUcRJuMoSaAaXL5APs2o2GGd35sETB51mRRuTsD8Hxf2BKQXUrHybh",
  "key28": "3iY4PJUU29XrHntBAPxWL8udeaSLBkgXoTyghWSmSLEmdnht4PdoDM5xogngjjXB3WWoe7Bd5jjmf1qVSW9GW3A7",
  "key29": "czmR3uGZVdATL2D3e5dP3QzXdgTZSRoq2wFnZ161AfzyMAudmnH3RRk3ejUjCq2PDvknVP8uLoHyo5r8bCSvmpt",
  "key30": "5B7rw6VH28LyDqYZWvr9Nhtqn2Qqhc14Hue6z7QqLB4ZN9pqKQdEip44GkS6MVKSfnqC1K6AuCrzQFDmJ135tKeH",
  "key31": "4hS4KNy6tD3j9GadYWsXLaCycwdv1Pr5Rt9W67HojHpnKVEW3su5X3pZw9BvzxxKV3dxHVFAsYyW4NYqkPPVT8Tp",
  "key32": "Uq7NT8yYf7eXejW5pFbRmNmFHWWSdoDN4Goa6YRm8ynuTnAkeNuEFH296mhvZVDbUdbEJyykJKaQstcVC4GckDk",
  "key33": "3emvYfTLiU67F4JJNmoVVE8RguqUCRq1vbGgB4kVexNL8SDF6idL2UNmrVNvTDPFc3odjrrAjxKhCgXaEmNQ7Cqh",
  "key34": "5hqAgNdvVtPZL92qUB6uZheUY28MhHMAhw4bLb6bmsmnv2J3PwNUynRGZ8HC3GDTHtQsGQp9yahFrPd2SGpSsBzE",
  "key35": "dHJEbUdTEug457sYYLJz6GskMaYyctSZYbfdd8PFYygyzcWvQVX6YXX83VaBEwc1ZShRBfxdqMyo3Lt1EoGhhxS",
  "key36": "3XGVn8BAfeCJfJFxwek83Smq59wmmm3X89zBSVww8zUmkYhULULYja7g8dTqkbx5JdaHGsfHNjApYDJfXzrMtJK",
  "key37": "6VN8jH8M785UcHaJHjfgfMq3KDzRj4XbPP6kbAEiujFuoV8b7CmaRZUrA3WPwY6peyNrfTAWEzy56RfWjGFfi7r",
  "key38": "stbw59KoJJ2WUbYTb8TCTZEVKYrEkZzdAi9Dr58NVtPtgv55dDZUpyxJg3VUsaH8iDnZaqNbvyxCaA8fEdg9oQX",
  "key39": "4YbX2ARYN9QTryX3UoaWemLSaYYWdQYvJoAxngd197SFM6AGAQAis7QuMcTbFFCnccsqJ9VnsZ6nf9vyZUz4K1zN",
  "key40": "4YgHqBYUEcWN3ZT1Tix9DbLUMkrL8ADzGPCHvwepxYGJWxn7DFuicJvMiJH9rPqwtHs4xE12sXHnZDvdPWozCKvz",
  "key41": "331dSjvMypbuoFUdma6S3ACzaFUpjTxoGKydbCSV2WRYqYHfY2ZK241hxAFdu9XBT92KHuauBHsEV3ZfnWobcZ78",
  "key42": "36ZMyhnWCK31ZZrKQMQSyM1YQrnuWFCvQGtvhCaq3QpX4D3otfYJf5jGMmAd7XC1M2rtsb55aL95orwsyv62FeRT",
  "key43": "5oV4NBu3eK6J1AeBbJZ594vNXsEfs5g3gA2nfXR3XAHFVdqMxKERiFNQxM6cFR2Jm8njtVmjhCtqTKFF2zszZgdo"
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
