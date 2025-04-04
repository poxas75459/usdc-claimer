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
    "58Uwj7XLhHFzTT8iHUej7DSKk6uCzPSSKm3GGhJFNdRtWx2K7Z8aaBN5uegeweF2L4TLtLMket6WdtE5uH7WMNqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7QHaivXUDYZnS7UCsxH46vnywBjemBL8h5CDkVm18zmzvVBineYMNLFBiU2CWLA1Cx2zoPfZnexYmC5VT7gBTzp",
  "key1": "5U3upkaBVnxGpF1a3QT59poGosfWCMqR85cPptWXaP6SFQLKfQkFp6oftS5ZWsMUP8wCUGWQ95RuKZf3eGuCUcGc",
  "key2": "4FtrK4aXmEHwvmtjV5fXwW1gFy9BVGuhRyVCPh4szeHmG8tXccw9aiLy1dUBSPng5FGk1h69yB4BWP6BCCDEozN1",
  "key3": "5fZ5LyaqunWtEJKAMqSdzPvk9qmxAPFqACVqBBWwiUtbRV8ceNjQqHGNnhUHQjme74s9nKFnu3EWK1XyquTu1bPF",
  "key4": "4aeB8nBYC2dS86RrAJR8jD6K2sYrMGru8saa6LkEDyePGsYcf5w2fVVdRQ3ixSPkkxsmyj2zJrTuUo4eAwcGYmvR",
  "key5": "2KynFL9zh9V3c55KZXFywhvc8uUiYWLvFSgzjvDRCDWhezgF8S9FZorprcZMqQrVsXpBGsmzicXYeachXjyr2UZy",
  "key6": "595n78EMY6eBRUdT5MoWhy6QvcZBN9xjSRWPVsGo3DqdWv787utdSyvddTfBuzaWNrUwnw2UsquVUD3k1tBXjbLo",
  "key7": "4LxD5zj6TPj5nVijCy5vBk7p1NHib1Bi8XVcCTP8S61ATRZbqyKM21CyWQxianjm2ML1opNyczPqHT8jsifVJgzq",
  "key8": "3YDAk3G9QxXieqwvWaShhKmofwrwrv4w9nWarRMm1v5mK9CWBjgH2C1Ueg7zhbTqsoh7VQRcGo85PvGnzuRah8qt",
  "key9": "47HnAvfUnpXDsuWgHSVv2cdez8kjxXZ4W6vekVs3MfFzDEe27XzLbD9seAq71Y2u2ZwFvYLv1rrHDJ68FXWC9uHr",
  "key10": "5iVSA7cGCyxAg1zx3gTRJ66jA1attoDV5yHfgaPiUDkombqoN88J91q9XQppmBPq6ErXnWQwj5EvPkN7gfUuotwt",
  "key11": "575KwyL2xYpqn8tKkAUNFjGTGriiJ5wWMGP2G5aFDyQ44BgczHTykJ1WHdtFpmS768RsDVH9NzTAbhSNb4CtkqFE",
  "key12": "3fHJVqQ95nEYDrzxMdGMUEeeo7va3A8BJPux4Z98JkMEdKZR1tZPUCMTyAvGiLo6FgSuHJExE1JMkB6PpvkyezF1",
  "key13": "3dwYHdTeiyBPqA2SsbiKe2ErXY1s98W1cL9wz67sg9xodDwbhhDHufPbAo34ptWQ7wZs9J8tPaVQRbWbZK46VRQC",
  "key14": "67Hx7UXyQt9jFddpVcR5GTHPFeJ1oJwVNAYc8EnQRNAzvSEEPHeGdTKZuf2Whksnfs2ZCTfxHPexdehQLA291HRj",
  "key15": "CR8tqGHPDYt3Zrc5HNCrz84xsHSE4akHZdgQ9hrQ9wqyg2j6bsVoh16RAbXW32nynSpbduzHmkPf3c5Kxu9BxMj",
  "key16": "3rp37rHBMFYJu5VLuhhLJ9qiZfsdreNUMMzXA2catJnaTuuyJ2CikMzNKVkkH8TM7LcLmazyttfkWSn3Y34mpmFJ",
  "key17": "2SD2hhxsMBrKuRss2GMncpkFRKQvgbsLkvDJEDehTk8uX2xn4H9u5vshsgnwTxtxm7PS6M4yUpXdNd8PaSkvSdpt",
  "key18": "5gJ1kQgYdghXQugxQY2wkWLms7CJ3eVVQiM7kGXeea3QmEg1pB7sSFUVWALLuFxYJH69FNNWty7r1hSS1uc1QBXL",
  "key19": "LL4tEaqK2m3tV42N2Qjc33eEDZFbSV8T5YqFgnSyQLij7cD2yY5ko6RtHimwkc8HFcAVN9Bs49ctWMjzNyDnUxb",
  "key20": "5GMv9oSBn8TPseTFmZHqmh6LK7YboNxkWp8kK3TYNXiaLq4yRNVEVQAE5EnHhVGHV2BDPRiFYtSyRFu3oCiGi2Bn",
  "key21": "4gAeamy3aQ9DnFaHMrUdCNEJWwMb9rj2dyZZFPAYxPtgyG83ovkoRx8RuB5V8n4Q5zPCnbtra4DDqD8Jy6ZmRMFd",
  "key22": "MSsJh4ykp7mzkfZ3oXMAV4fsVjxZ5q6GQhCQ6CEHtgDdum9BRbPHHfLdNqbVph7TzV6xRnmB7gbYUMp2ZpTWdSD",
  "key23": "3hM83ydTLvn3DG1ddPgC3RiB2iEVtpn4d16uDAC9rRKrk85m58y4F7rSpwW8MTRJMdfu98AW4yBpAqHoYNtAUQhE",
  "key24": "4ZToYpvHkvy65qoyZ4f75HEsdqKpDmr2X7muHBbXm8k7GmiQqrg8ZJ4LXN56qkmCN9HkQeEYd2GsUC13F6QNtQWZ",
  "key25": "51BFPTTBSoNKNz5pG6yWMkGHp48kZEEm2zH1dJo1eugFCZquz8UizT2DUpqDw7MvHmAyHmV5oxxxMoQengqgX3xd"
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
