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
    "2P5BV2xGAQR1bpXqsLFJsaHKj9oBXzEtkVLYLiw4AEH6JJUff8SSo4vhTy2NpY2m1LsrHVyC7tbseSuBT51gMJqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bf6SH7KSpGwU81dxGpPrnnnymrf6zvKhha4uWhYBaGUjT1HpeaPkSGWLkkMHA37SNaanES7hrweqn4vc8Qe8ADH",
  "key1": "4agpdeFpSVoRXfjdFSQ1jtwYf3P9Jj969ewzSr3dFg3ms6L57xKiVUt1jUvfNrDM1QGVFVEPnR7yXYd48c2fvRAV",
  "key2": "rRtZUVdF32rauQRrv2aoQPNWQp8yz95AEnSPcWYtzBPz8i4ZeL9eLuR1kLWJGXAGVnCGK8LqBEut4ReTTFXJGGD",
  "key3": "Ea5h9UpTeXv7Dvy8cP8bhoh95JLdq4tXKNX1a3Gb6fyVPDSJtkRGyUYmGY5Fiu2N2FUBVkpYGxo1XFCoqCkRWPo",
  "key4": "D1TEr36o1DWsrsK1S6ryT3L1CCHydQmB5WxN6afoP6eNsN7ogAwCeXUgNhHqgoWDmEPWXttRcYvPCPtLCpmDh9b",
  "key5": "3KinJKWj3kQjmRGLDCFxChsaEAR4wHXFNherkRbZEFWMUFfNKRfHfPtbC72Qd8CSWbqdmNkgCseHFg9L57ovBq5i",
  "key6": "3FRVpDudMGfPDxKhof2FmttGiKXDZJmZ4FnDqEK9VNAfa9p4XWaFsZpc9qzPW2qdibH1uqTmT46fJZmQGZXYRcVK",
  "key7": "55Yzgp6aGkCEchbeUninx7S9DojCScXUAvkCvDA6YdFXKRkqGcxaYQQjSPEULwvW5atEBSGAK4oR8FijpTmAgGms",
  "key8": "2366vye24ufPLUU9DfBiostnXRpRcJ6eVF5fF9U3txejiVVWzpfyude7BunPKfXBSheHdQpHQmK2pWFgeNmXnEiM",
  "key9": "54q2f3eLZYADdkkEUBTB2p9DjLutw7kLFMu5B9yjwDd9xLozVeLNZDbrbs4fMJdStZCaAbW2Z3bzfqFN7sgXGLMc",
  "key10": "EuRXFr8EmETAdfe1EjqKe9ivZPps1sSrfvHzAjaWp8NEhoRcVn3FyJ9sWqCBifgkXLXpFkS8k1NrYhzmvCrXxmm",
  "key11": "4LJfDEu23F8EC2izXuW1Kptqw4DwrikdUxzX8ffiQ92CisWbpG5Q1cNw5Gv41aSitjEWTiNGA58rWMJ61cw7j8J3",
  "key12": "h1Xcr1FzRv68rNjjydN3e1GxGKKvovKF2jq2ZsD1todnxvcQgUbSfB3fWU1gVFaLyjSnxUciU16CMDDpVdxhXzY",
  "key13": "44wCus3Ty5U9GHrcE3429crMj88TbV7AqNZj4rEqHopyQkzcZSzCh1KizpjmkriTC8J6SaeUMEz5CyyRoSAywih3",
  "key14": "2wy1QnrGRG4fkFiwoVezhKCbWuEtUJaKJreKZZsFcpaBvDE2gSwXFGATLnJCb48jGt3g3dKCnA8F15x5PuPWvWMP",
  "key15": "58fZPPW9426qqTp8Yat9EfEuoQRfxXPuKYYNtFVRynRsyzYK9uJkAWGoCDzpjEL5nax7pqXMfEa6YQ1H2q4Hke5y",
  "key16": "c48WgXVxz1tHNSpi7DuYYuL2hXgHyJZHi8sYg7HjyMhBiP7ard2qUXG3fjfjVENP2wuB32mzXEK7EFrgw4gkx1t",
  "key17": "3LcJYbte52DRnggMmnGb8UPHHAGovwmGWrVMSxWS5Gk7WP6KoiZFUdysYKRwLciarz78gv256fpQZ26dzoW3N5q5",
  "key18": "5msDCaYxZT7dkbaoGMA9ZqPMC4ndnuzm1EiEiizqDv9xehuwv9cqUXNrBaZyrjMJs2K9HYbYrt3S2Y4uS1fpTYLk",
  "key19": "3BrusM9RhXFMRuMakwdJNnHyZo48CbKxJ1SKUbXhKXYiedPg2iFnwMMzjNPWra5g4zJDMRrCgg4pbH3uGBeCKUwj",
  "key20": "TN9s8bE5vPSBQV3wnNSprN8GQRmTTuboYVPeREnvX6zunDWm17wBXttwkwebZsiT2Ldjgh3DS9D9zoJ1GQ26W87",
  "key21": "RFSDJTSsxXY7hH913h9Ho427RjtKxBpiTfDdC9zaGYLE9yCnciiZVKRiW9YCdGNTyoexCsuttEhGnv31VmcULJh",
  "key22": "5R8eyM8Qocp3KceYkkNzGQmGwtXGpiPXrmEPkLA4P6NZevcArsqGk9ZrHyTTxYtsvi1oVxwJ8kZk9AiTtw8LRsh",
  "key23": "4HepKkmKy2DN5QZku17Rg3mqFrXcs94kRfRUxvzL5cYuvPP67c4uhUdNttjVYa5XsRsbXZEKri5Wqj6pSZxNdH7h",
  "key24": "rkNXme2YpRH5CjpaB3bkPYa2FE3AMhJbaUHKLwgiD6z1rKQ3EXTHh9pfxHySM1e4rkzjJJjsvKuVcA2JbzYVrk7",
  "key25": "26GYZfaEPTFmdbhNuepq1EDub8s9XU7w5xhnL9PBvFJfH3hxAVNa1Vbu9BhHn5P3yya9ed6aGGXvbxHQAuu2WBUT",
  "key26": "dQAc3DCGRsoFMyYVyqa8o8zKLwBYGabmPWwMVbbkdPyzVtacEmRCSUJXsj3SurhBC7bbbb4PeUmV8Xaaa4L5qJn",
  "key27": "23PAHmChdaJbnfwH6rcvo5JdtRTFdY6q8XaVGHyoCrHsqyEPRJyJPjY3jaTRm1oxXN5pxKnkmkiGbqn8R3K6wd4r",
  "key28": "5gcToPf4iGK4P772KHqoNqoF1DLQj14MJVkyUbbM8KGoygnYV97vWEgbAagRc66wJpxrefMwzeWG25vcrBZNPouy",
  "key29": "4amMBBeDXM8neaWn4bECjiYaj2zjzG3Ng4YuA19inEUjoM6guFdRYcyPfcHs8kJtZqPqHq3TBuE7TsDcBe8qswNf",
  "key30": "2c2Lf2n2UzPw6EQuesyXe6VefSrnYCFRFVvN1NNNmV5kQ2RuNrqbSALb87FCPk1kuG7n2VsbQwSUjjWGboff13mH",
  "key31": "4MjqS7grkPeuX2rPgTRewRFw8uDCsP6aVb5mRay2SV45G2ajnszkmLGAXFfKHr5GCNfYCAL9RpDLsjSBabMgZp3n",
  "key32": "4655L5unzfzTcMUakaRtBGnGCnK1Eb5WUzCXrDuuEYTZS52jc7joZ7hybEfNcAakdR84u2pD8xy8g5REpbz9vBQ4",
  "key33": "2vMxh6fxxn652fPeu7pvU5NSsogC5AiJoS5y5AX7D5ZhGj6AWhZD6ZciPxzX6StySkBLqVqGBscK4zSc71a9KR6t",
  "key34": "5AooAuZXH9daQkURePoKhbvBhN8HVaAe5w3pBNc3VoW1M69FZVGmbTYkgo9wmThMfXTJiJKnKBVdoSw3aj9Z351p",
  "key35": "3rqiUZTWUUVKaqkVYWphmrako2vMnnDa6eUpd9qCTKYTeoKogDdjbVy8pgHYzjCHSAA7GrB42sGMaH7BF9oXTpEQ",
  "key36": "Jc5Lj7KACjz2ob19bBkr8eFYWCVqhoEyECsXJAkRtZ5ySS6K6dEq7vV86ZuVe9nvMjthXfBpoxWjtr6pBNaPxTd",
  "key37": "38BEHaZduU1FS6SXkL2uaV448j4DFFsALYUGXVPmK63asTeizmDgrjGBH4L6zM3c3r1aDwp25cSxFapPUKpLE1Yf",
  "key38": "53v3NnjeLjaU29tRdFQHEVR2MnDoKBZeoGpJNak1mNqFztK2U58h6dWNpm8Lx3ybXWF7bbkBbM4mWEFeDH3ZK656",
  "key39": "QCAbpN2CGjJhA291tp9zCNpC9RxpHGjCYKHwu6HHr74cCMb5dpoYRA5nBzpLVGYsx1ccmkNzbJ5w5oq3cFvDvCC",
  "key40": "36ZC4Uu9Z3jSYz2FYNNdGT77xiHxBGQY5jw2n7KgQBDrSVnA7FDHP3kJtnUxjVJ2oftm3WMd2Vv1Q69WEag2Me4q",
  "key41": "5yZn6qC4KsnF7wyK2dVR8kQTYRs2MNz4x4hP3B72e3Yk4q89Vh3u1hux4dWN6nJV1tnox7Y7Xkt9Upt8qzt6d9b"
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
