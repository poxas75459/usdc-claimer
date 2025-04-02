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
    "2SpyM5PzNXX11xCVyumedgprsLJ2m8dmZtiaRioyUaT3YykxPXwMAAHMtpg7YTAu56xbFJ3Wx9Qc46a1UXYgWgkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ead3pHD1U2QZSdjB8k9q4vRe9mRQEcnjora1fUZhj49LmEq48svjhEy9hzhudRsYMEknGeUjQaznYbsZGQi6yo2",
  "key1": "21ihWd3KBth5ziSB5ybmGFM11r2oV1nYR1PotdJUswpKAmsQjsTUMJbJAYPwaT1SQigx32AoDtFri3CvKnbEjdb2",
  "key2": "3iTyoTBWYge9bfiPP6SuX6wyHUKCxn3C9C4iNUcbPZv8pDCXAXPr61FeJKDzMbNWkQGVUUG7PEBYVoFBCJzKsLPj",
  "key3": "N7ZhEE4upbz4V9DBhyvfRpkrgBGMTzxNfxoh1gHMAY4PT3s4kNLcQ8AqfWMJSM6zpx2ZRYWSJQNdkUHkFHNwgtp",
  "key4": "5Q1Cyj3NeXTi88QbJs9J5yQfcyNAULXyrG3cTf2cgCMo4BzywjHHUrkKzJQsGkXLPR3NZFNMewep6N2VX4TBSjAh",
  "key5": "5cCfKDVJzfTB3tvmHHSWabdZNZ3rov6bBa3rMrRUoAVyk6bbL8nzHvtLCNoX2rswbjzPZCxoXKzKcdSYR3EkJecW",
  "key6": "4VrqPpKuyZEaABkecmfYMtjM7ZfQhRwwu73NvPN83M5diYuSwtgqXarKFB4VTMXWWm1r4MMoNEV99PCaGhdA4BdS",
  "key7": "5siavxFjeMHuj2Q3iaGfwQvDdKrL75qCHYCn912cdCz1VH8sG42hvn1UStPkvJabyuxW7fiZyPddSHGL375DmCKp",
  "key8": "4TSXDCSsvm1jpnmorQh43fFD3fC33xZnH2f7JYEBvAwSm1h53oqC1keKuEVFe5ycijsH9ZpmZ1tmpkk7x1a6HPAN",
  "key9": "3YdpvgU2UGqAEknxCvyKYSz7DwArbVrnCMssawRbErMnGXX1MgeV71zsyevomzvP9hi686nJJu5aZ9KYCMKj5FR1",
  "key10": "2Ktq97zeGfQBvG9op1MgLiXjzaVPZ5WxmDYUmjWb6sLuf8joveaN7wwkxopgEoYg5EYcbRLBKZ3QyGPHfFdsNvg",
  "key11": "3gZWUKpPqM3L3L5wz4LcCUEaUUUAMtUWHn7rUAz9bidhWosNwUHVi9is4VA5FB8DzDYmBD84JUaQHZvBnRieyHTQ",
  "key12": "41CnC3TsKAjwkkywVwAKs1CLz1DaPDfgJpAjXBbByKoV6FiYoeiN4nEMejjjmvJ3cx49Yaaj3nTDMYgB8LtjH4W8",
  "key13": "5iSLk78Sa45mJMSRmiCc91viaHgsSUBeQ9LQsT8Uwbx2jbEDQtjznMw56Vcx4WeTBRrGj8aS1vejJTmwag2SZ7E6",
  "key14": "JVxsBjagSnefS4WxQT2G73QVNupaoH6qbaH6r2oxmGGyNqV8BKwvg61QhiV36MmdYWEGpmFZdt3FnXodvwGViMr",
  "key15": "4PrpCae42awKagj3uBuac6dc7kGTNi69ZwqNkSuArsTQXXJjm29Fqk8jcdjsk8RoKiEQRspdTAVZu72u1Pq6yeQh",
  "key16": "4twnMAbKzZhw2iby7tFZ7DkprdbMWsCdYJbWRWJwuE7wjN3j2omeR3jdmvfgDWk5cEmbXDNanTeWMt944nHbPhiG",
  "key17": "3HyX1y7mo8HjGNRtVEXoC6UVApBvtxjyeAQ6U2pWiCuN4m8gv6hDDVDHeTbSiHprTaBWBjS5hCMYKATd9cZX9Rr",
  "key18": "5virH8ziwyQFehppB5fDgsxUiDzSE3u4wdu1kCSXX5eJCNuuki6B2AwSsVF7XEZDPTCGi1Kqck3aXAx5am6BSM4a",
  "key19": "2TQcwN4k4BXcCcAJWAxk1PWQaGbSTNm9EbzAng9VBUYgQvnxem7L8aiDdP6ykqV5kwEyVxEgjcC9kbdGfT3nHhqQ",
  "key20": "2hjcW4QBwpaASGb7XazX7Vywi4KkxJfBRoaqj8HvDa2PJDPJ3uio85DEN2jM8GiPc7VKRF72GQAFC4qBSMjxWP5q",
  "key21": "4fkBz76eaG8wU24oUt13EEAhGZ3jxkAABSwyMLjusLcSSCzjxVPuChmzHEDmh5H4D4eKnYV8MH93wMkZqwijJdMC",
  "key22": "2pXwPLjJn5TU5iSB3KLGMsxHQ2zn8YFYRPZ43ev92xrpw8QQsArdbJ17t5c9QtERjkg8GP2zaBonupSKv3RwxQDC",
  "key23": "5W77nN5Xzxt5CGxCfap9PkjpBiztL9a1qCWjbVYZXzxEUaHqof5oWeqvVe1JpKrqswugqWPd267kEqUnDX7GYE3x",
  "key24": "3wUbGBf1aUBsWP335Z2Lw7J89z2yUizymxEB1AGGC2Qr9EHozRhH5mLbn4ZQubv5GPFkA5QS6vdrrcyQYx7PmuYr",
  "key25": "pChm6URc3chVZEZSLNUz2Nsad6eBPeMX3y7SWpZCRsbqcSgGrmrZC63HZYqeWna8X59mjdbsT4zit7EBdrffsW4",
  "key26": "3sR8uoEeajfoDauMZzCkHTK9zDpAKp5qtfj5HoPGBPAG62GHQdAL6Q9NtpV781a1fygJ2vAGPb9A57z9vaBSWtdb",
  "key27": "3iXWJk4ghouRE1B9QtQws7dBnGwuCQfSyXAg3WAVVgY16S6ozaki6ypCpQwbXoS3s7x8qYgQnpUykjbQCWLPDjmS",
  "key28": "5kFYoTAx3qXLG6vWWgK51VHWNACsmbdnbH3V3XYzVac7QCd7d1LvVVRTgSxPMCAP6tEk5gwrrYQChVgMpB4ZswE3",
  "key29": "12NsEwyd5tDqecKAN34kwG8Mdr3a2Ro53AAAretja8662bSzaA9LPKwZ1DVMWAZexiD3TMoWaUp3EVo31xEgAde",
  "key30": "46e8awBf8pWzo3xK1oGv5thVmUPYK9EqQsjbd2G2t8GfdTEKPHzjMYB2cxpmYB3kQYrEenTSyRmAWnZnftHoNdGR",
  "key31": "MSrEEGxG9yd6qfMiSc5ZbVXiaD7C7DH5ixcKArstzqQ1Xf9ZgY8VXqCm667BKMPKju1RkofSoLfJt9BtzbtJ2Bu",
  "key32": "46aYpFpov6rHpeRjSxCMnxY3tskvQVoSNnqL8DH67WPZuecaQUH8pNLk5h13PJVnSiQ3qrYvQ4HeSWYDKe41ozMF",
  "key33": "YZfnBRxsg9Nj2CRFHv7Bwgs7nXHrZhk659m5PWt592W6UzXPxT7tdMx7EnZEEubSYg7nTVoymnRq8jiSW8n1HPp",
  "key34": "4GgAje1dG144JcYjSQjwT59PVZaUaEweqto1Dvsa7qHqyEd4tbTphZY5kwQMhZrJCc8KJuCUi79njeWogaKbojDS",
  "key35": "4KkhJLWvKPMoQkVuDku5DWYdzE62btayYnkEVoDdfWqcNjYNS7rgrS1Xj2dcMivxpsEpnAndc46Cu5Gr31ZquxZ1"
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
