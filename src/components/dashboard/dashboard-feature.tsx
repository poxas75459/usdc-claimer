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
    "4DtT3fTPgrXvJDHPK2Vr8DzbFH2x5d8idhjLCuxW4gPwKguRHf28RZqCj4xtbRKHeAyiF28uZbu9ysSCLtBg5iQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DAJNuqQvGqT7ngCeVmu2psfbtd7QbKCGJdJG7efPUQCPDCNu1iPQXUkKwAHEoeBAYk2bbBjN6eyShyScQJv9sB",
  "key1": "3eQU3fVw8ucmcKAaQhj6CnhV2QGWvDNH3iikwtpPt5ECSiHtF6i3T9VmESRx1gT22V6NFVgeTnJiMLEEUE4pioPb",
  "key2": "2qBmUGCos3Xp5qGqEzh2Qd2zpjG4CvndqXXKeRjDAEomfRqq5UUyFLgVTtCnuet6YUEE31j8JTnE6LJ9MpUcZ1NC",
  "key3": "3F1336gvMRE5PiRq1uXxFo2PBRkwwU89CtSgEcGU11czZXrUeEynS6cJjsPk9hsposWqktX534KQmT9mfAyVKeP4",
  "key4": "7y1yKV1X7KtnQhxE2XLrLDEmiodKUjCuNDVuweBKgW9oHDD325ZpkhYbXPouX1Tf5WytiF6eody1XdmhWvyufii",
  "key5": "55KQW6trnDTjEdoYdjvfqQQkj24eEuATdUAk7srAmBp7cVnZHqD7XbzpWDSpRHmbgQHRPCS6i8ucRsEZGrg6HxGZ",
  "key6": "582H2kANDyV15VbdTQbmtmEH9akRiLut9pqBmTWozwNRUxuMsDKg53xLMYpWLsHW659aGDfqxbkRXcfVodWw95xx",
  "key7": "4DNULmJvrj9tfPCece2WWfwEZu7MjEt8t9RtrR2CA6U92NXyssLyk9Bhsq1fnn99nLyHevBn8SfXgVuv27SkiwYY",
  "key8": "3hGJTuKJ5h1fgfiB3iLBkanNAJLfmbYaQficyZJrGXFfgePpo3NpQ3rpjdZf7WFZqmoGhcP6yhru74Lgx1VpSM2B",
  "key9": "u71FdC7w2JKTkLvfZgfAJCAv4nDY59J2bfSe23vJh4R8Pu5U7EwYxMMmnV6opePnFTh3spsqy9zQqLPzx5jaWGA",
  "key10": "5K6fZYG7o7TUVxMwBac3tEdmK7nnWYUVJtpfQdo2KTUP4ffRQMGjWy452f7M1xiGYPjCJY7qzPxNQNkbKDWS787S",
  "key11": "45yKDmZVUNX7Xj23V41Agz8p7sDTZCmMQvJuyhmHXUW8VevMud5D2xhviLv5h9ccUqJ3MtS2gHdtCDZTZcz46atw",
  "key12": "4xEnQiDLSwcJgarkLmCLUzS22dGRTSpGSy7L3BbDCj8vTSFBPGyD3nQPAoa4UdUrQvQbRVgKXQhvpHruhD3cmLGt",
  "key13": "5cNwgi3vFAgGG1xC4mj2wNoebmjvYdd9yaiMkqTFe8TvoBGnqjYesWnAyqkwigD25aW3v9YXxxg2CpgMRRCanMDW",
  "key14": "2VSm1gZNQ8QP3MWt7FMEX1qtioyzHmtUtCthgigHsop6b2KEwBg4HYVCmXooTCXoFvNGPGGreAe6pKroPQnvnrec",
  "key15": "4JPNHiwLiMYNScioXFaoeMjBhfzVXjs3AM5EvT1SHueVrgqivxXvDP5C285dgHpXECjwqYvS5Z42xeKxzdH6hb1B",
  "key16": "2dYZL33W1ijgmjf8hixCvq4jUmaVKoBju8zVcqYbJ7KXfW3R4ft1tmD7pGDhokwXhmDkYR83qNFfh9iBnHH34CLS",
  "key17": "3yqVyx56QR9Yhs9kPEXfNB11pXvgdniJYw4T7KhhUTccY24gzeK99DnAyjbZiHWssAo8kXxMa4xaysc3VeFPembQ",
  "key18": "34jMnD7dqbg858JgG64Ce9bVdydLzFb1Z3Y2EUzUyfTvdS78KLwwjCPgn9GrjtmcDgdtHhgcWyi5YytqRLzatTa6",
  "key19": "N2bb8n86V873aU5U2W4XZ7xneGzRKeCrUmM4b3MztoNSVNkQ6s6gFE2MvNcTKzWFvR6FFXx98nbHX5RT75AnAAW",
  "key20": "54ajnjQUZVUrorKcpF5BUs3Kwbv1avqjvxPGdfTUJmmqnzp1c4VJZkDgxrW6PqYnkpm92ZYHYr9QoqbRJrfKEL7A",
  "key21": "3riqAgfj1uwSbgVhhbmQGS68i9CUXv9qtbs65gTo9dX8oZgaLpqSmUrRuuNWLrJQQbeJFzroWYW84tGTFUyjpu2b",
  "key22": "3DrrQVbKBbustSAmJxpT2drgvgk2BrraiCKmWvaAPZBtZqHzJ3Z9RKg9SuSYCdRQN4v8m2FHzv2NCejMCptBNnCm",
  "key23": "4t7PiKN6RQn7ExLqEx6a3tRgQmygkeuv31yH5ZwMucJRPGEw1DSQEeGZwLX761wt5JeYYQbN3c7EyLoH32Qe4kv6",
  "key24": "czmBiwwS4G6XRYzkpUkgueNnmgArKUgog3kVK4D7jsEgNCSKEc6G8rg5eKMKdHdVLcvetb87ctizk7ZXQkm1ttp",
  "key25": "5mvD5s7DerzEnTpYguk6KvcdPQ23E5JijPkrGssNPTRUsYEx2iHv7QT4txAaDXLNJfUqJD9DABtjj6mWenj4d1Wg",
  "key26": "4SJtzcMZh7mGKmMZnuqkWZ6TryN7NVMimztKfg9UZ14WAKpFQqvvjZ2Uk51hMqNVuAWMAuuHvzbHWMC9Byz9t1Uy",
  "key27": "2SLJAvQkQhy864Y7zS7J8AcVsFE5yJWbucuAQHkCDBnutzCTLfD8W7FWABUPXLJdQWQDTcsZUVNNbYqGpqbFzvHc",
  "key28": "4x73PmbQSbMsibpfoBQ5xvF5AiQkGuYii1wr1EpjC1JDzbeq5YSac71oFpDZW6uaUZNPy57D9Bi6EKcxcSfaoK2k",
  "key29": "3DaDNkP9q9CNvWb7GGboNbBcMwgJo6iuFxAcspjePTH2pKWsYWa4R7okeFuPS7CdvbqSRRVib9YodNFsy4PwjeCU",
  "key30": "4Cw2d1duBS2XSGzbcjBRercJZypQ1DsG8wo23J3DDk6au2CBZPPBfw6d1nHUNcN44nhfKGZ9xZ9AfyqR6NigGRoP",
  "key31": "4c4zghMLPKoP2pbUm8Yyy27SZhbN8jwUvkVv2NGG656KMf8fJ7iLHCiE2wnTKDsGCxvNSk3ABqKYP2WhDBhkVEzA",
  "key32": "5aWdD2tGBHVTrwKoa7XAQu13ysFLwdSqB3Rc4YXyqNj46DxFusughpnRQtcUgTGGMPn8vxLqJihYLe8btVU5XVdr",
  "key33": "47ZgoBmv4nTnfZyXiWDT5fSnh5LRFjaxq1Ho5n4BaMNTq1A2MczARQb1NGzXsaT6eNXs8rgAkpYd14vZ81pYDrun",
  "key34": "5VT9HqivHEXiYqh7vYmkHFmYPKs2r5vWhD3JVXearJNpBisUky8Y5c3Mr2C6BotTeT5gUMo8TVcUEfjosp3s3nWw"
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
