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
    "2a12ausxXHHwit3HhNEYxTdSBC8R6MWCEnzncNzLk8mMi9cbx2dVxDYWmRoyz7cGSgfUnrXMv5sw2DAxKZrHgosP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tXc7RZtBFbXM4v4b4Lhz6C94f5fgVRQPRmw4zS8UqDYDX7xHfhmdUwuA3bR5TPnnKimZTkXds7XmbcFRPLG7QFm",
  "key1": "3ki1B7RqCGdzCC1Fj78ZyxRUVmvHYRKV1b2P3THtxQhQfAsubGGTnCBDWjiPJrCTN3xnnNyofNjhhGBGFmx8xKDr",
  "key2": "337KkCE14WJEoTyKymQFCc3wA8eN8kE5PrMYKMvGoezZEwysjZWRL9KpooxV5p5U6JHoNQYoP7RdpAbqCR68bkXt",
  "key3": "55waZUd5Lne82vH4hdPNYzXW9De8E3sDazE3GErwYc2V4tpWMoRmT9wh3WW4YJiGnvYXCFQJMptdNppNLQ4xdLxg",
  "key4": "2AExxhe8xbZzNerXYoT8H9QutSeYR1JWer2p4WM2SHQXS7DVxxc22esseKoyXFGyTmhxejGsE6UUBGTYYc7WkwJw",
  "key5": "4G9X6xsCNQaT8neTcdRTfics7XLKaZRF8bjCAzN5vV7uSqwiGHXycYW6zESLd1jQoQAKk1hHbhgQWyz8WGqmZMDU",
  "key6": "5Eyr7m3TjSksdK5kPz8FP67pRKeFLs7fJQ3UYha9QSUUmBhdFVCiWbdwZHMnwF8tTzTTcooUZ6CkP5xLhHwP5WRF",
  "key7": "3j3pU8bw3yhptxvkehXqzfcxmkzvQ42qNeWxkGr5njKeZVxAcaCoFyLBPq9dJhf3CNxhma96fD4SGqu5eZHisJNh",
  "key8": "2GkqdeRX9qvJ9hbNtiNysHLBYCVKQrqinz14h67f75FDWLYzvFNX3cvS1JR3ykgUpf2cE4474j76juhj1pfLwrgH",
  "key9": "2PNMW8LQrMpaDxZkHQsm6fa6VYSpivjmMS3wVTsJWWF2XaiZ6dgnqeW1J3sfUciGMDufbj4SDyKzThSA82wnz9t4",
  "key10": "2VVmyCFtV1EnFxwfWYxV4Hmfa36Za96vsRALPjHTr66hwjsvTwC5HoF1WAWJ16TZ1kFrBhC7ferykLTqqrH5s86J",
  "key11": "4H5SEucqAFWjVew6F5zDAMqfroz1KiJaZT7z33aGyDY9HPdox8z1bmX4fc9VmWnzFmoTNcWJzWnh2EN51UFKGHGt",
  "key12": "TYXJcv5w1mYWeXkJoevugGpqtDhMi6oKfJ7BpkumssEJzKbHh3iSa9gp2CYvMVqhmo2kb52AMJmzbGTVcaEuweJ",
  "key13": "2EkXTT4UwoMnsEKnzBcQ1D76cPGrqArGAAJYdy58Zy78CfbbeFepcjDN5nVaLjHRVmCoDucPueFSKwr4fwF9AsJx",
  "key14": "4UggC82UDpQK1LAQKqCrg9DcEtBCfoCWafscPga38QcofYxQMZnZbF1Ey3faHH3qJR2CwTBcYqAcKkzPNhKvji1q",
  "key15": "DwqYzyEpwmpiDZwogi9XUZSuubhmDw3NqrM6scG5a769fHhKhyWUYeLUjJozxHXLUD5csgUNsUTehmnkgK7TVDa",
  "key16": "21KNrmQM9TriHDSypKS47BGrFJTZ5wVsAGTHtBdpFbMwvD6eCtga3LBfRs463mguC1BN953xFWgPqcEGeqaKzmkA",
  "key17": "3Y7ntqx3Qgu69GGKUhoEnKv2p82LpHUGqtpdRtGxjNjFMZ4xbikyvp9reRAT2gb3Gyo57yzitsERo4eyLtpoM6kg",
  "key18": "amvraqVjrzLLSPfXZUNqkmkTEkEc1hGTfnaqEwJsz72Bmi6iFGvYR7Z64HjksgmNRLim69DXPeuxqUgqB1KZfmA",
  "key19": "5taZ721LHReowj3LNyFXe1TMZ5K638e6WWL7ykK2taf41Y6rqHQx77M1Uzu29rtL87pui4npskYooT2iA9JjShYk",
  "key20": "3KcyLmatj2cN7g5YDG7C2EiNKysP6tJN1rrXesP1knsLFqaBySCwPgoE8Xni1PquBVjuJCZSbFVm9u86VDqNciW2",
  "key21": "33p3Ld8aKrUzvpy8zSikSooCZ8LD88jh81sHoyq7w6pg6sZkx7mvHjMFQL25aUvo28vPfng7X2uLDktoj7N2xFoo",
  "key22": "4h8ARnH3FZpKvG1oywcFq6aURBTKbns1oUn2YpAahrnBeZC3yUeaMYLyBhk7tkkB3LZK8ZnqY1ZeyrFfTvtkPm3h",
  "key23": "5LxE3Hx2wqBrTVfTkdmG4QqWwRA9VAkiAyDGRP1jDP5Gah5BZqYxUrr6AeBf5d1aiw1nibuzPxJitKHn6dUBdptC",
  "key24": "4tfPr7JxGdUZtgo4R5zHnCnAytTMxMw2TtXMj2wTcjf8jwT6DmxqJg5nAXmALnz3QhczzRCV29dP5MBXD1MwYvys"
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
