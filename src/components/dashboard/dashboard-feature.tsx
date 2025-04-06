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
    "3xBz8z5eSFqtVyH3jfDeA9GmSTNAgVnVUfpazuCPKtAQq9GyxtBVSgFADJAa69n7Qj6NST149V1wXxf6ckEZSXoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TqjRzHFdH7qiPNkf5C4gvJmbiZK9FZ1PnhdBo6j2NhYqfcVL4WQBZJieeh35FKtD2xCBYZQc2x6AnWtfCmZL9p1",
  "key1": "395M6pM9E2ehVM7BuHztF844HDAaRnbims7U5xsXiKUKM6wQQrzuECkjBHcUuawQXFXWtNzUWh1CdwnH2EYw9114",
  "key2": "4bTqeqqwnVxX5sGPbnRPAqkkJrYuAZUDeuC1hNDWKJWXNbN4ZRS3cXTkiR7LrJRUGmUr3aG5zrK7XBj1LPiPR9gM",
  "key3": "3nykjsU8Ss6dpjUM5MaCkoMRLq5Sy7sos5Z5bn1N2TAhmMY4JUkUd3do7QfLV5aRJhJMuTRW72RUrUghgkTMYhA2",
  "key4": "5PhjSDFTtGH7GhDKRAf3e6eWsv79Uiz1P9wr9YqePqZKDuGM592JZctsV1wLuWWKAKBadP69szweFbPFor3RoCAw",
  "key5": "2nmajNRsh2ymnd8wvSM1KG8EiyiiRPz6LBDsCyGJsxtBii7js6MEgBmpZ7smcXqLhE2ucuLyDwjayJfTCDfouyyJ",
  "key6": "5fB6VkGGzQxut78CSksCHkWf72ayaUnpXZadknGGkwfRgoX19sGKopBbzjtxqJkQ1qtqG48VU6LgUPmmiw7Jt9p7",
  "key7": "3DnfyY4uUxoMooHiaP1cGf2jRkEastcV2ZWJpwwjKZ92orc4zv6Hy9B5XKJJwafZ2mQgmYadEwPV4hUmFPmicsnt",
  "key8": "3Y4B8TcjdkiGZKkHMKH4AMsH689PiTxAcAZHgTGjmhNNvmg6kKQAoNdRJgiBfNZwDACtJkRNRJN241F5CfowVPpC",
  "key9": "5eLom1YziT2ntJmZNFm5SK9NGruU9S4q1otWGm7XyVsGC2YiEsVrMMj8NkmttaKchi5L9DSBnye1WAHHE5k8enES",
  "key10": "4ctkyHVDP1SN1gMmZBHWceNmdmhYBuDmxi5trcUMNBjvuEAQgzMrXVCGVPrm8mvWLrUTrU5PQicjW6F7n9twvASb",
  "key11": "5zseak5XmpoPFYq8EsRiV4J9WBsVsHJLDh8NcRuHYBnuvt2rfnbWgP2vhbA1ESmvDiH5veKE1oSPvJ7sNKEG3NQV",
  "key12": "4p7NLBksv6ootX2KMa8KyUAwy1xd7yrwTybgooPidTwyKV2hpPVPLJLPaY6y8zfQMzSq3567g9mYsGasuCwTcS9f",
  "key13": "46Un53Sr5K6ZissyACbVnAW4fsSBwyyZAk8SwtAznE9mRMtCe93rdnXPNHc2MQ8DSw3egxnr2P2KaGDsgw8gRv4u",
  "key14": "mQ6XKvf2BLXw1VMPKe8Yn7xYaby5SVCBEqkvv6MVJiKUckFaMys1wHbx1jonDsePEGnrr3PxT3ojZBecxoLFAVN",
  "key15": "4fgQa8E3Hrm9SLYdg4DCQgRKLPUDUoveJmEEDwQw2VLkkeVW795nPx158Yx7V3XVtqc2Xed7Y2snXzupr2tPRwnk",
  "key16": "KFZurh6P1CCMvqAcb8yHxNanHiDNj57dRtKTi2DVCKitQ9cn2FLohUHnwQgdrdC7e7fH5EYi1osj6Lr5zzLUE2C",
  "key17": "4XZt1AUcJPFMxP4X14EzJmiAJ9sMw7mxw1pzwPyy448Biv83hA4PH82uRTWgYQySbHGfG3eNRq3oeWXtgfwMZXET",
  "key18": "4ofooBBBYrcZNDkjgYqgPtbWYMock8BHAqBgT18CgHHrNPWMTXmju8q1kYjRo8EWP5rhhiPDPFdWeDRkxFzZwa2C",
  "key19": "4ogrsBRqto9qxZB3E9NHwddZb1VAbVMPi85K76NRnxbvZ61J4vF7BTQePbjxmvLBXzA78CB9gJ6yYCJwrZQsXXyy",
  "key20": "2B9JTxNhp65mJU73HNh5G6cyrQii4wJyt6VR7Bbja3eL39Pzp6L4obnBtYcq5tyBTeKioUugSoShW4X3sDbHQJCP",
  "key21": "4DiH95oV2Dq9oM4QcrNEaoFpDdjimU9YQARxD4LwWDXHADs6QEcPLYcxp7G7L5yMTJB4Bb2W55WTwDokKL1BDuuc",
  "key22": "3bb5PSUebZtLhZVf2oPJw7twTyc389EDcZUBJbcSYZHCrmrQ9aRZDwS8TXdUbpTeHw5sRyZ6iJinuEi7jpHGYjQy",
  "key23": "4MP6XfocCjMdCvkUuUvJrk2RRDBqJFL53pzVEHyMBbpvqYk3es5cuXRoyKobnnnpUixSis5rCsX4dzFyK2SNtVMb",
  "key24": "33JNGFbfdiaS9qbMDXJDYvFC6NLnRu7eV7uGTUM67aKTCabXbk3ixawq6uWm3Z389AoEzNBfCd76VbWDJZ1TSLxL",
  "key25": "65k61a8TiL1KnySqgvEanoKBkcHnbT3rpkYuhvEm2iMyo6A6KgqfMJjYpsmmTCmL7X9sRAVsf73uSnGurh7ajYWs",
  "key26": "29iysaBy1bGDikQK5TT3ZTEHfzoe6Lk3vywSuAhtH9CHaFAqbAhMR2sf9znFZG3saW5hG6Tf1ytFkcMsomfLGv5v",
  "key27": "3sMBeX3F2J5EnLotRt7bq6coMgf8QMdCnqPzhQoa53SabchzCn5qseQFZTkqAUm4vDVEeLXnN4ZxQYPbHMaMqRTH"
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
