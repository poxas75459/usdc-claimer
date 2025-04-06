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
    "4gNWFXcHNKp6SgGoiFCPtvxL5midJbCTVs1D5vZCwGgQegjYqkPf5hdc8M883sXWvCSy7D8z1HRYG3FJ2LEYAk6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49DC5B5uqqgqNPbcsfsJFAdMf2toFSLusNNJ58Rkn3bhUPFi95Um2AUdCZX3Zk2744oFgwBNdPEQJ95BTi7C8pTL",
  "key1": "4TTdSgqenEUR94q6vnW44i8RwSPPcVY89c1o32jXRDR2KvhsN4gdMZprK5nKubXehs3rRpUNY2uMz8WLv1mesCsv",
  "key2": "3dHYHkQwPnFfB4E2D4NRVRGz8S2to77pEo6MFuEtG6ZNoGFrjJ6FmNdWSeayWvcMqofeJZAPwDgSWAZTBENXu3S6",
  "key3": "5NSijXfhmKTMN1MDeqopxM7vwbNhqrEhNi4ifWBbtSCFSJosa2n3DnGNvWyKYhmpMR6wnbUd8nzpX3sPhWHcy6yy",
  "key4": "3ECyNKiqep91Ck7J3pAFRTYYx9kW85CWBJ2yddL16gFHdknvtnERKutsdd2ELa19gWQNLfbgkScjDGdxnkqGAciP",
  "key5": "3dF65JG2B6nmdpK8p1feChyBQ82VzYMSCm4u41ciPTn3fQFQg4B974ZueJNU2FyqNa9nLyQWwjCQGQrJxmrqTry4",
  "key6": "4DyWx5RryTN27LdKj2pmtgmugTuBTrpaBwRNhfxNieJhYrSZFqdJkzmSJxiCzEnQAB5is2CWVrzhnPUAj4ezvr9M",
  "key7": "3Xv4pXTAUCz5GbhQJfALt7AUm2LrXWFjyt7i5ffLAu2tqFUGPSCeJRN3tKZVvopWdaiP9RF8v2M2yjELUspdyU7M",
  "key8": "22r2VrYjVzswFSRvgFjhrmfQ8Be1481XKZhAB3wzEM7HFFnF2rxnmhx45PRptHeNLrKo2EYHcjPzH1yCkw7AEnCo",
  "key9": "4FRfxgS7yhgXe787MbHSeVTdTYygT4VYNgBXa6vdLwMxHvMLQVtpXJF9yxoLKWmnwXRH48vZPPMmQovX9Fitzwf4",
  "key10": "5t4e8anCJezZsHR7jf27DNXJWXJhtPRUQFA5HvkchjkMAzRt8zW9PsJRxL96TwCm4EYt5YTpFvo66EeuBLE6br8s",
  "key11": "33hyZPEF8cSkPPQot98HNyotnTdbfdpqtKd5vtS3g3ZkcR9XYyaxcS6XVabWEZ96QaKmU2TGyft96d1iyeMkF8Ce",
  "key12": "3sRvEPvkiqo8Yajj4AWEFqYDTTdHPKThaphAM7HXZkqHGtzpYeB43dCmMcURkSk1X7qa2c6992w3K36sYUwBGmfW",
  "key13": "4oDcHtp2yeH6AkBfV48Y1ogTEWBnHhgXjuWbee9QtXpozyF2cExLSYz2mwbbweJ2y9H3MtAKsZPSPjbKxY3bTRa2",
  "key14": "5w6Mn8NqvwfWvSWj87W4C89Cij9iJWhedqYmoCX9UwsQgmGw3g2TffBTA38MSEwNeB5HhDCHcfq7q1NacuZ9ftuJ",
  "key15": "2BiFj4PGxb8RA8cGVUwCCzHaZNrfYqE3CF1aVDbuvKWfHLNhjbCawj5FSb6b5mUY5jCd4E3nuxyYquJiHKaMArye",
  "key16": "4HFjeFWC8cbboUX9izGiJ3hLnafKtyEv4Wpio5fY2eLSiRn3Nimwu6usfw2zfqHzRnxkE7kxPeqdwXE9r74Gower",
  "key17": "4YEpFVZJ68QjTSCT2rCMudLqncf9Q18TNNV9jG533XPneiwULggeENTtJ6jTLcXpdaxBSWTZgHp3u9ZDxFvPuzna",
  "key18": "5XPtXRLWG8LciExGQk2pZ8HJuzukoSQQZaoLAf6w2xMUk7VHcx48LBrPaGMEdZioMF99UzrFVuynyBZrtaTwL8KT",
  "key19": "dkHB3ZHaxGbWP6j8tWUkfJcz8sjSqzCVpqhzbfRDTVvV888k2ppVVcS4pkBPT27nmbHsrNguNLu4Pe9EMKbjJNa",
  "key20": "eE5ZPxczgiWpMaauRN6oP3rBtRqeN7g4xWLDEKNnCd3Cb5hAGN4TyaGwVXXbcw2e3DqTobWDVdTc4Tqb5ooqFZz",
  "key21": "2uRWfT9KoqAqkDbMeJ7pivJ3NNUkHH8wHiHefXAHrv4V9gYgMtWvLSW3gj4vSXMkmU34C9G2Xf8qGPdLDgchk6cq",
  "key22": "2UwynCcFJ1XJdkEpkLWndCMhhRXv5W5Hdf3DugHGSdY8zqWMUdkgShekG5EQKPU2Z8ULutgbfkCyAKss5wy8giGL",
  "key23": "41azngVBNSoeCuGN8SbeJEvVrGR1Nk9G6T4FtNwrrYSNLo6sccsVKP4hxqptXkwxpkyz1pHXggYHGmEtVyaMMz1U",
  "key24": "4GDFgP2Td7AHrZg42bd915gqe6vQyopqMRXatDk197BanLPL1dk5ixHnngQsKJKdWJsLiVUootco5cHNWAodBKeY",
  "key25": "5Jsjg1qHQ1G1zGnSdUxunyntRBYKBVHbf6AsKN4EqK86sDd6kyCRQ1NvsLAEgPFM3hQ9NxtsvQiKgJtgFS8D3X42",
  "key26": "9xmnKiDFzsoUqEVN4TWdvmyYjqytPmMzUdKzFv7SfxyQ9weh4WLAJWaqiiNsexcotXNQk5TXB3xfXPFEKg1WepZ",
  "key27": "3mzY8Y8YzvNgpG9hCc6VTYYQF763dX6iBxjVLbv6a6HvRrBNDpQiH5gfiRobp7HwgDTcD3JaorCkgDFDouGJFepb",
  "key28": "4XKAhzVkhGNVqiLbAqXNKComrY2savqAHqCW7TVjCYpPgztD78YrWTmniAQZyyjQcrfrzVfSjVzQoBvmGusuTT6B",
  "key29": "2dcopBPFB1aVyYZpha1ZCu6gtXp8h7L6zgZMxpHosxj8MJNsUvXPMYbwNWgidRWazRkpoq91PGSL8pmpFMKtwnPi",
  "key30": "5cJD4Key1vCT6wr2g6ioygnBeeEkmXGaEnMckVMFixfcyfQNYAT7NHzmZHJtYL1ui3biRWVrGMj4P2i5YvzKj9F4",
  "key31": "4ZDp3sXX4yvouTGUsAQD9RKdv5TtmnUyAXtJGRweCN1Dn2cRcg9zcFSZmaUgjt2NVRS7n5KwsQ4Ekh33H175zF12",
  "key32": "q3FLzX56uvDq7KXChidMxJwDUY9kacAezhWuwZQ3hsQQborNWp19qmKSjjeS5mVvzFUQ6aae774TY6zcatKXZW4",
  "key33": "61HwurwdrJvrE8V1zJQqVp5M5EAshfBZdntw2q1dqgNZ78HVJ8xMNAfPCge5hRkh9fjrBj7hfUxrp7VQbojs6Vah",
  "key34": "2Y6LDk12zCKtGhYfLnCQEB1ch7iF3H8AUCTstznpHKJYh3uqMXk7CK5992uMjZbGuNHjBKppwK2FcdGVpF4Fby5H",
  "key35": "4SemXo7SU42uyogq1P5517fkSnu9cqPR4kq19mNYWsXu3EJVMjx4M1HTih3rnbXBBbCQDape5V7XN7XorBhFxCSw",
  "key36": "2Wv868ndPLCiDfHXZwUUfpVKZQsvKG4Xn6RTDuFFRKFYhwCiGM8pFTpQsxAaX6zfZTkP45BcnkhiWa9L9Mc8x2Zy",
  "key37": "2NvyW8b7wyYF3TWNEmxyadBVDn4F7qeRunKU2cmESXa1Yx7GcPb92Mn4pxBimAhFE4FsSfKxuTsrLakRPUH4DGMT",
  "key38": "62K2s3VB9XkhJBsCBvJyEGCr78ZvDAX3f9rXruK3rkwQ9m3kEcUPKUar4nFznYHkWzVopiow9PswU9fKb4DF1bUR",
  "key39": "4xhJkxLDNpYWJNbSHwkWzUuaePDiVVf99tuwY6HsEzJhLa1qwM7MgK7pMb6A1r9G6ku38assDB6VS11mCm5YAy5D",
  "key40": "4iPvYotRaLwm9SEy2o2cgsxFCfFZbqiWNCAPUvgTAdJpD4vqBKkM9gpWub9Xp3keRc6FPUX31TJTMWZy3KMaJ9Kr",
  "key41": "2fyJCdqg8SGhtCZ4u7it6FsU1xzFb3z47rFD2BEuvF5rtwifx4pXSyAGgsqVV4QbQH3VNdjDhqNN6DHPAztpfpTx",
  "key42": "4Vj14j4rHhwYrzK1M12jUo8e8cBx1DNRLUEKcjPCqpVro8h2MsRFZHef2dJWdPv2SR1x6Qve7LjL6pW1fuebjY6e",
  "key43": "3ws7wVbBLRF1gWGuNKxeAKcj9TevNyXiDC2cNhetTkgmeRXVGF7roay5NSw7AWmvQo9cGnxyLcQAPYxrKBvNVVZA",
  "key44": "2jtQKBLA8jQbQNCPVSGWNmnFmyekCeNHEZAJyWWd9GcVWNgFrJV5NDh7jx4gJ4NAmr5NfADzy7MLv23V3QPGtVgj",
  "key45": "4UWeEMNaA6z2MCL8aJvxwZsVF6yVYfndKVDyKPoEcwrUQH975zzKtiF2E8u6U8CRbyxMLPtrfoZGMJaRzncdKB4f"
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
