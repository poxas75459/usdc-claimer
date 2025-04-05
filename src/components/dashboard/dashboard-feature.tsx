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
    "vnJ2CYWyUng2adKhtcz8CnWReW7wbDfPE3BdUpyvGuxhibprjicfbRGWJWJm9pVFbihMvwPCTYcxNemhL2wUCS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1ttN4AAVN58jcTswiXz8TRwJb4D46qvxWur1XgjSr2hR6i6LFGVN2RDCQxsaXvgs3ioCHS1C6qVCxbY7VsWa2N",
  "key1": "4EbgfvjViXQ7Qnin7B5nNZWERKE3a8sDnkBmkWKpMeqLT97mqT1fhDHiKFD2v2dcAxZBGA7jcujwLKpx6KtGFcdP",
  "key2": "66mM7fWNo3SNDGRbf79CEHW49q2edE7ETSiwaCcT7YKWZJd6DqpLFR5mZ3DLkk6qo6LFW5t6L6NKmF96LfGksDMu",
  "key3": "5sNH7jGroGPGGFzExwgcGSsTwvMtzaBaLPq7ckCiJJwrj5avVjhHtAh9WpsHa62oKZ6CT8JAUfUd56Y5Gov1xgVf",
  "key4": "2yN9JM4KyLxWpN8FH6V24CmcctBNFEhRaXfNMTvi54XFp6fb9VpXmEUNMX5QdQYdMWFLh9kviBfFHuBrjS7KhceP",
  "key5": "2pxUWPTYookjyHnwxd13SBLsRfQbvK4LiE5fDFRKZApjvhRz3FQdG2DH3v979cAZNDRPk1kd5vzS7DqNJFVbxAKt",
  "key6": "5TtcmhCBwgHa5wEuiSwjhwayMPzVGqogK6b9vZZ7BfCKuvdoAqxcQ5HZtqxzTg2T67jZbm8negsy3bHhRimr484b",
  "key7": "4AMFEuSjGa2sbPa4X934oBpwxENd7iCKdmqqjHLRhCZQ1jiy36VGUNYm5Vv3xM84CjZQ5J3B76MYwfqz1zNydv46",
  "key8": "4ALLpw5ZmW8BfoxJdnK9owi2NkcwN8PsikaiGzpLHPKUSDsiiQxkTLd3tHUatr9gtS3Kww5KJC6p3Emnw1vKALkB",
  "key9": "wvSrXaJ6GseyAjPXfALYy1sKsWj5gvoq53CbmHp861f4RMM6D2owFGMqPg2nqYpa3ktb4woFSsgANUkyQ9ZMB55",
  "key10": "4Q8nkjv9teXiMvfEWgJYNCpGkxnbbTWSath2utSgujRMbsUbTkbWCwtvUxjCVTYRZjWoo69nXwZbUYcvJjSbH4y8",
  "key11": "53VWfHcY8H236ZZaEiZsDSsPLHnhChFm6WKQcBNGZBhn8b3FKnk73RnLiwLdHYBMdTBVNmHGaT8pKpGvx7Ws6kYa",
  "key12": "4WLU7fRF352UKWuvMLLcBocDkhxDdeBXd91X5eHUoEEYhB1ecFfNEew247mUcs5FHH5yNwPPGJf99vMPsrapKPgQ",
  "key13": "2XxDycvuj2WAiVaX4JbFnMNi5wvkvScthdWd9wdWyCPaVr87PRJtAEsfUHE1JTYmVfAk7eaNVg9Mq2qAA9MdJaHZ",
  "key14": "HUUoqLyaE7wFtNwX2mDiW4wo5usN2nNGHW3rVpMV3HNxJdh2HwCCj71UTBTDU3GNLPp9Q8BHCkk5m4acoYA3WFU",
  "key15": "YtJh1XoRu8kvV2TnUS6ZZTCmGRS7m7FaNRFsohwnzdnoUabmWHDkXUtLGFuWyLTetWfcEq6TakDYjJGdcr2k4Kz",
  "key16": "2dbTtFauQYsYEaEKRbvqB7cdXB86ZRdUs1EDnEDN9V3HVvJBh2eK5vD62yfqGaDCgDY2N1G7pzm8dfQCXJY39Aeh",
  "key17": "2tfCUZq552yjraqGvZTDqbq17WBFNUchbYNoAEsxYqtvSpRfy7hmrk2EfdVxodqwrBjBRtANPJspcC6kLvGMo4ya",
  "key18": "C2ivu73xbdZ8zdJiUprh3akLUtCrZ7Vj6Ss94iPJqN6HUyEEdMsLUtMqM12hJD9U1t5Citfavg2pb5QnHHXr12A",
  "key19": "4PzBHFsyYZVFWirMsPWk81exKCPMZoQ9qSm6rimVY4VPVF79bVNkyhEh8Eww1NXVNNwB6x3YZWWzCibA3RyDxR2E",
  "key20": "dqBeZXxyGSGSMv86kLuyBktjfArXkjEfPPdY9Q42AxLGyAutEj6U8Zf9HtHYdx5YZszbW1ZuDe6MoNe7LrBKGou",
  "key21": "3RWGroEVPLpSi4dLd3wpKQchi76EA2r6r3i18XWaHDpbAVLAQxwDb5mC3dJmDFW58UzySBgse6QRJ8B7mJArUx9r",
  "key22": "3Qxjo2nksczvif7bZuHrYYY6zTm7yB39xUm6bv6yi1UNAA1UqugnB9Wu3uUmRcbUZVDvJMz71euDDkTwqgFyaoks",
  "key23": "2kQJuJw4S6F1B3fBrjevUhn3LpunZdJCnBN5pCv532DWS9n9RrLdJsZF7D7CVZD7NrFbp1iiDgXwWwUqASrQoexg",
  "key24": "2zYqKKrZisYwo1rA1c3df14q8JyPvxUXqQeBXEwo8XDMCVt67tPw6S1kVsrjiobozPYacvCNDeArTRqRB37eGnFd",
  "key25": "4WvTF8qG12z6SD4CGkw7WECMKUYW5vsQXsbrj1hMMFXL7A4zAE1VGk8TtcU84dns8rh89LESpAh4EPBoSNxUXda7",
  "key26": "yeFnQhZ8cz3SPhYaUMmPvg86MXMBxTZqc6xB9HonjDt9bXnExAs45NWz6dQJAcfuzL1iFKT1vDzMZUXmUe9qQti",
  "key27": "2nS7ZrCNVXXZWYJmeDefcZ5znbMSw46QNqH6q7g8LBi7D3MgTma37eUvUd1mmD2H6XPHNn5AAfBB1sMTLGdeUXJR",
  "key28": "4b5jHww8Kc8jkZSDwb3rrtwMjxUgo1iZNESpcNx8VFJVhgMypHv6W1iQqiaoZtZE5HzBK6YoxDF8MWqUjQUwezrs"
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
