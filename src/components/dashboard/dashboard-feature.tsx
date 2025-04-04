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
    "uC164RY7d7zFmkdMuU64JdC7m99N3xw59EB7LGDrjpThnDHE7yGGeVoHYqy8jLVu9Ju4MxBGFzBqBrXVGyKuEob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57b6vGErabjhJ5mFvcTZet4Pc21zebHTNvd5VDBJyTm8jm27ZMrv6aNPBQD4MWC2XxSCSQ7oT1XZQFjzx7mzaFrh",
  "key1": "3rVibVNSXnXqDKzif7C3p9TexT7cqmCdjrDF1w7qRh7rTd1WBiBJCWoHEim4GKKDG5KxfS9pdPwysGC7nharvD78",
  "key2": "295WqtnpxdWPJTfGviWSeeAwG5wUWsfm1MA4N8ih8xFxNvqqy35TugUNmuYFquz9Thq1JMR9rrDL7U2kLf9snXBt",
  "key3": "5XZY8iskYccJHUVT9Hz92FjRNy1McK1bhAAk1VxPL9qHdXEdQjcZMTEHEfzXGtJ2Ycq4kpdJqVBoZe76U1B8BFYf",
  "key4": "NGxHeeTbWbEDNwo1VgRAK5xWb5SSeRkbtSfXhCf6B19nEMinh7F6XV1WTyNvAJgfFHKUzRMq1VmjVSc99dkD1zD",
  "key5": "33pPZHKGvDnMKCredA1ksroq8eQM3d8AGaK6RxGCmiNYSytLVgKLdVh6z9aZhRMqA5BykqNz9Z7XcNLb2xvqdsCn",
  "key6": "4LfV3VWXo9bn5iPyZ9yquEnfKTtJavanupVmGtpbcCAVWi7d43oRJNeVrB3rstosFAx81joDn8k2ZM3TDcnF28v8",
  "key7": "BECbN1fonGdH5HNbQpwaPyys9ahAqQdNqaU1LLCu5Dj9C78EWq2nZRfUBpSxdDgFYvhkn145DJfndThYzv2QEez",
  "key8": "3WL1KMk31KHkhQcFj36aBiHHy6kySTowPLHwyjULo5ggHADGFQMrptdZgMGwxdCC9UYBozJLmvzr76n1pLuX1sgn",
  "key9": "k6HvMsgctM5hJ5hRp5UcdjzGurcHh1fWjMjWxELRgpv9MUjvM3uo2p2m6s8VBBgi92SZtTaPfpckLJZ6yM8R7Nj",
  "key10": "49QUV93rzesAenhnwCu6AWSzLm3uoNmaoRnLyDDB8rEqXyxFHMFsud7kqfDs7Tw7HfXjbUVvG4PqGUCWnSy8LwVP",
  "key11": "Y5WDbgRhyhE5FbHB8URMVBzpMjebfW3Xs9pEGAvTzeBLigV73oSrNifjsVU8XQgrzhiE2xp8aHWQyoLHrLJL7Lc",
  "key12": "2LiUc4qpNjUoWnixSGiybtxnXFiyXmW3k1eYjVgmHYH4hNbcPu8YMBxMfZZ9H31Ez269S5pco4skt8e7tDmgX6ER",
  "key13": "j39obweKCJSYpNXpXFcMmQdZTJk6h9jzfvfRKV5Gs5mzgkiZNKdKX4raRWeTNpiC8RDXKEdiY6dUKreBiMeioUz",
  "key14": "2mrStgVp1fVmuKoLVm7ia7JjJ6zYNBprfLEpsoHux1EjJKhqR91zvm2EM6KmPzicmoAmjV8Shofv8YuogLNV79bh",
  "key15": "3N64dFCntLPNPbGRkcd6aqJagCR3H16xnAbgZkWNGdTbsPHYnxwwZwh9zNpNpXHLGqvR6HFJd5nMZGYZHKFt1yDq",
  "key16": "5xjT8VM8PyTaeGRaaM1iiESqFQtxhQ8fvCjbskUWQMz7jS5mApGf21CPtXdcHM5ADYU5upDSB8Pyf2GAFgcPu7q",
  "key17": "61wzG2mrip9ptDojf6MeCBQ5dWnjb4JBBFXuwNmLawFhcVcVb3NUe5SpkYTKQEBHZP5FYRKBCdA1GZoWi8RUc7G1",
  "key18": "qYbUUxJuwF5vYLk667zcrbmAEQMHM3iviS2BqGvdPW3syUnTh23EPGmakrJY6Zxs3oBvz5gDWCWXDhQatbPYFrF",
  "key19": "2HKNRRL7uQqkWjZUkNsna7xKYJm2puJhykv1xMeb85SCRTm7LhdXG4M1pWJoEt2KcHLtPYTLqG8yD3HMVYacpS8n",
  "key20": "2MeKa2ULGMCfmKTbB7kxJ7q3aoBrpwwuHj1Av7yXRqG8CaVyHq7P2iTqCjftYxMKfm9UrSFQQ6GdefWUQCGqrRLS",
  "key21": "3xJMD571E8TXJk6mdCyfkxqqPBbxzThemvqhJhzgNzVR8JQnr3hrodb7GjpathEKGghxPowXzceeStB1ZVjAd1ca",
  "key22": "2dZZDzuuU2DDVJY5JtatRcDJqstCL28bkLrjhVz42xd6V2k6jwgDLzyqerLFEXKTrYcYt3KsKT7k2KzTSiBYLBbX",
  "key23": "F1A699BU5yTPkVhgAgTstV19eDmvhXwZZgnMUGcJPRtNs8y21WnHQyX4E6CQokG18fHzyu3EDggDcD1jfoGd3eD",
  "key24": "E2MwuxzdmcKjun6FN64Ei6LFhjupeTo6MGJ9JMW2F6rMAzYo8TBWrB1AFEJuwPkxvVMvveeb18iChdefDHwK2io",
  "key25": "xN7fywGf1k8rXsCoCxmzqmYxhmMXPKhV5vxUK2qBkABrN42vPyPw379Y8FZmGXdq9wJMrTjnTwedwm79Av4vvEn",
  "key26": "CDJTheTQaFWwXUtFUTdHDFeAX2HRnM2Pdq3zB7Tk9Ap5eNB1TbwrNeNRgH2hhLtWKGdp6MkPoJfcG4oAzi3K2G7",
  "key27": "4vY6C1WwsDRtEyx9MtpZQVnYvgrKHTAhWj92JngXDNNx5HuvWwQ2vBZxxh6MWv5xyHBRPrP9fDuFasSo4FfeGNwC",
  "key28": "3Dd1LUYQsefjq2ZtAzZPtTa6pAwQwuaHvUxw1Y9JLpfgXwUwzWmWsdUYmUyUCkkb4Lf85Zph98AZexNNuCkYDw3a",
  "key29": "3vyXZfN2u14vaZrsiZYLHdmXG1u4CQpNXT1mZCYYk9begC3rQNhxWx5wKAtWr4KnptZCnxgd21whq3KeJBosXoGA",
  "key30": "5fvr3LeSDVPhHbYnwtTHGRKzssHsxrTefEWSJC2ucLjtHvfBo3bqTdCGSgze2SPiVzYPhs7KRBrgNGmF3WcPFpgP",
  "key31": "4VjKyzEdSxRaAGZhyEVqta559KA4z864syqSV8F4jvWTJopXFMuZexmUvLbvr6QAaN67rpwPzmQ9dPgjGBrnSKSh",
  "key32": "3atgr3fbHFcPxFtKjttCDKhGVW2nqCRFMCqqfGUYcmwMDtB9Zsr41ybbSRXs6DzJQw5xg1RERKD9SAa2izpd15wY",
  "key33": "SiECB3ikaDhqEMGV6dCZMYXWCB2zoFgipVfDxxBSiHXnPKgf7nAWWs3GUFmbNsZ9YfPMnHfzAjiEEtyuS8jeFEX",
  "key34": "5h8kafPNDQC12FZR4inuSzPdtCxRCzzthxXHwM51MQNrpkixJiBJe2Hws9oR8TWdFV3Ga2kLL1zQQsVLv5rbgjqw",
  "key35": "2K51ZgscZoDwAfq2fv2XQsLEXP2PfRBSZrVzsXHZC9QEDkrmf9vgqPrZ4PGFvXXsq8grXwrJFARKPoUWvMzLyws2",
  "key36": "3BhQfBhkkT4wLwpibom3WkNU9p1436LwgK9KPpnJ7LuFEPQTPFeJVcCoGS1YTSmeCuYYH2Se74aywYU1M1zBHvJh",
  "key37": "E4Xp6FXEsj4xwk465ocLzhu4GWvsihtQVr3Gig5X7LCAQzcvSFbpEzz9NL1jnDKW4KUAS8caaNDGERzYmBJPdKR",
  "key38": "2G2V7Vzh38prhvxWMLe7VsyLkr1zMys2XuRqk77zGxkdV7o5hg3rXTvWDj5ZXnY6qQUgrHZPKrKCZLZN4hmMLS4H",
  "key39": "CDL31hZjW2SfLWiTFKq9RKx1FEKqToWKUsrBrkuuSUVvnJdZv8NL5DZo2WVtZ3GVUjX6aZA8jVVTnKbrbaD8P9Z",
  "key40": "WdgtVo8bdbWYBGKiSTFA5fFsKujswE7ETZLkYVK2egkfY9bvayLVUcQ5uqroU8HWpw3zmq2tQJBPJtcGnbGJrAq",
  "key41": "3SZoX5joG3C3YNDdxd4agmsw81CQ5AhytJU4kqBQuhxM59V9tan5JSDpAkkcb1CNaumNnbS63s7RowpwGXGDDxjS",
  "key42": "2dkzVQ5DqRooJi6fCydWW3Ri3xLJjpL2bDhqJhcyunwVqRYKikMGHUhWNSTBFPJiFcipzhvhvwgEwxSLcDSXCuB2"
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
