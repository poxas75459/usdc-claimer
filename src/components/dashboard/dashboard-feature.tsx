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
    "3TrcrgGHFyaxkozsMWHnCbzC2kgaajLU8f2k4LeeYiGrKbJ24qMeGYgfVezKY83dvmC3prqcYvQn4kcco5CcweLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48P8j58gbfWxa22spdGEtJVWJv2XPaKwFmKDtZvuAvV59USNCYh4N6hunSpVAXeULeKEczEHTcXCKrcgZvsUW6sw",
  "key1": "34VkSfiJh2ofHFwhCpXwxVNGhFiz6uYTi488Kx2UkFSJXitVoTWRnCYguSDqt38hrPjqDZ2KLpnB5EYcxmnbARms",
  "key2": "6YSQKEv6mWeTXPUttHJMsp9mLhLHAoWQnz62BPWmMHZXoCCVjiJUyZa6AngTY2mTKeZxkb61Z5V4rL7wiX1FLbs",
  "key3": "4UESPcC6DDgh9VkzVSHWQ59XZCg99HQErbichMFfrAG2TbBgp8Vf4CvCydNRxn2Au5X9nr6GqeSkcgpkM1S8fP68",
  "key4": "5AFF3v2dHJoMFJKtV3KSC2rESCWeRg2Reboc9QJcgr9eu5ZpsJZCxMHkdtSAyo4eTZBMXxYKvMsVJJe2k4MerGEA",
  "key5": "3yhetpSpAQhpH8SDP3TYKj5iy8zzGE1nadkDf6bctddmNVMDVVTepfpycEx8dyzWKRHngXDM44wTCAeh7TVFMStz",
  "key6": "3FbuPkN8sTUPEmr8rX8L8tgVne9LaLoTRYQFd74qM2DYrqHNXW39fZcRJC5ie5a5g4hsnPyT791ytUK77ziQatnC",
  "key7": "QRHD3hnVC4Jwhq73ThL79x9GPNfeqBdsLi1RfczaxSxaq6y2wsdeynxJPdSb2f9BWoxS6Rs1X8ZzPE61M5H3eK4",
  "key8": "mbdAsrQY9vCipJbihkj5BwVxqY3ZMGSwD582ZswaHSExbpr3WrC4LCmx5VVNuAuosVT7Dkv4FZY84gLwkvf8CAm",
  "key9": "59EYVuu6MDz3Lj1RKmQo8mfQp4rozN2xCvEoCi9uY3KFWoJrQmZ5Fd9EQw5XCdFkX3ft4rD8reDUiugtcCZEsb1e",
  "key10": "39kodrrDkMqzAgr8UC3ny1Jz5YfH6vrZpf78MC8Kg9WL5DXKwLikotwdCRkqAJNiMp62jARHjLRvyoX2kydDbDnX",
  "key11": "2fKG82Ykgc6Mb2bt7HYmgCQEbKKVAhKpngm1741RS1o2wzqq1LfKYktMhP1rTGQMnj7QZaiFkboe3VmNBTRdhKtR",
  "key12": "4BTAiMueeDiiESKB2FjK1CtSD3yVbtxrspsU2j1qEkRFgJjyhv6HerscYWnZGMPAvDP5qTNF2K55WoKLYy4f7jkv",
  "key13": "2YQJCRkk5aGEEt54FTmsE2edqsFQ8HZfNNjKNjUJk7iaLPsFeebSniEMfr57vLiduvz8DwYX2SdQwnb45ENvmTV1",
  "key14": "2f1to8mBQYLsmEtx3ZCZAWWZFSTEBcCpMeoBwwZcFdHPSfYu7z1UxY9EYmr3T69teZSsnfUywcDPGmvwUf4Yb6HN",
  "key15": "5QGkgGTHeKaKnAMhyDLgdsspkk1R7WtmKNCG8hrYx37rJ5sMBcgX8wvah5YEJV6nMbrcMaryB3vwmtAZKNNPYwJB",
  "key16": "3cqariiXkqLzoGzybE1CLhFXmnNtL9UW8jBxmdBJpuD5xLv25awv5XunEhA43N1GxLPg45sEdqShTYCriHSpJVZK",
  "key17": "2fUqF5rLhA1btjrWc6LmmNW6eiPiChhb684PRwfDkAF5CL8J4kNJfydDmX6M78tsteF4GnLmQgx1rcsHF7TFX7uy",
  "key18": "5vYGa6tryu64zcC6ZQybCXjjTBdT6VYSQoW79GeypkXkPtVTeFFuzncUoekmfqx683fyvJNx7hEvaPYVjDU32LvY",
  "key19": "etTbQrcamJLzvysSStGRc7bDQtNssdfGEPg5z9h9HJnyttFFCCiTdVR3wndaUxsMce4Fkeny36gL7F8AzjVzaC3",
  "key20": "2GJPDSEYZpvXWshT62JbVB592mqNn5ieTWWe6snDYG1ZQpdBbQ1kfp2rGDTAoYFibSzfe1RQm5vFt91u6Hm3mKcZ",
  "key21": "27WtTS6BqYChthHaptoRKyreEH4kLsN1T5xhD7FECFyxDwHU4Cez8jJBYFBr1JijjbXnAdGaCFnc8Txi7pCEZ4a6",
  "key22": "nXPsc4BwRhUzRDAVRHWNSRLRj8vF4py6af1DrtszwyHdc48h9xemJy4sziCFLHvzDAdkw9pjQijoSJ5YdhPNwcA",
  "key23": "QBEcY7pEFuMiPJNvwJYzCmiYaWyyZnibQXkmaKHNHk5yNuqMwd36cr1DyrPNzs84PXPjajizpViXXfv8n36YLMZ",
  "key24": "4WQNCLp4oUvFekLrtF7YCSKzxybSX6kWWg3g4rbaGjUkRvL8E2EsM6pQEwGu9MMEFio4DTi4JthkeXoVCSxunFMM",
  "key25": "3N3gGCiSLH2GHStScvReJkAGrKeMphXuSSZD8WXgt3Mutq9tB39A3VuSod8jkjzJj3UjwnXVfaMziaw99gEgQuoL",
  "key26": "vfy12d2a1dXDKgDNDNx8bGbUP2LPGBwiXU5sP6S7jxjzT9hrKJbNR5QWUZRozxnRYpvhJUTUEheh9K3QytSDyPn",
  "key27": "2UxJrJyJhwFxCG8B6RjnRrQB68E4FmYjxQEPSngJkYkcgx1TKQXAPVKQkUWzja4N3ffPH6wY1JATc4mougRBVLYR",
  "key28": "3d5HSEDhcyfHCfZkcQ68gfYmoBfyyS6zHTzdep98MwbsXMnxypmaKUbWtCUbepuotk3uiCxTdFMFRhRj9ggDfQND"
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
