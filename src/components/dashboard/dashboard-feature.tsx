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
    "62JRByuek8eifzBken5Gik3K9hJo7k3FiUfzUiye1RqgBYMmmfTknodpmb4KHQWGg81hWceVoRayuV8xtHdzr4Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAXMDf2TTEwXi6MQWv6UqXv2n4YA6xFJELhywetyeUBYUZsuyeeaGm21VbaSwb8ns5EuufnUABuyjrcYkt1Vsth",
  "key1": "KS2JZRjfShtNSoVAVPJ1fBH73eEPCohn1Jqo4NV36VG2jYyRKwbTHdgdWTexeztx2jbanX14HFFBPdrdY4zCWjX",
  "key2": "4HNnLDwC9Dbbp2WiSc6tMzNubtmGuKzej2MHHCF1aQVXQ5e63iLWvbsS2wwvtT6yf1N3GqLoPNbWkErF4tuAnVdw",
  "key3": "5A8B9weQtVa4KXKxrSfTB8gp9xtyXS9JeN1Toxxcqir9QHdirY2uSsanFXLahQ2jDuexyou61iwvZHiZc2MnVuzK",
  "key4": "5KXXLReDsKvD3YgnKFra7QNAVr5eiRdQQXbZjknza5QNpMr2H85ag4k37xVxgfvT2HcpgrNzdm4QrXBxNLk2k5uk",
  "key5": "5Z3tTya3sVGh6SR9xiXb6R6NY9x8A4V4Sz34jNqLbkWEGgGQcStE6Mu7KFjUtxAo22Pk7BG8rzWjyWfJeMJz2vS7",
  "key6": "2SmWvDuZ9uFzRpvDiwNJ6CPMVf8Yh3E9e7hTKg1rWHiAEzSbX5niyu7WYKn2t2CeCfUfsDv3dWMPycNSPxFrNWTs",
  "key7": "3NKKeg22xNkWHtrrpS4YHWTskkFf297orXgeKYkc7tVJZyVWwCqv1Gprx3Hqcgc7uP8K88eaujFp8VDskqQB1L5B",
  "key8": "5kb11L18dGsKum7kWBjbNdGJ55oeHcxPt6zXdrPkEgDaYPkPeP7mzD1Vc6oUX2T78wQWCBXroWdtPPUHWYZ3pmEz",
  "key9": "5twKHP8x7eSthNRV9eFkAZJZXYLfDnwSRc5Xc2fHWPp8unpXfYWsG1L44f3UkiixsrbzwFXqMrpUeV4uBzYaWGLc",
  "key10": "3JyVWEQQJ9YbkJVwz1dp4YihTXrfQtpBkwGiz8QBMNZ7yspKpW7jANwsDyeGst6y242NgZiJCzxwuh5VGg7nR3bj",
  "key11": "39HB9fNZA2J2XNWfWG8KzNTMuTnwBE2NgW1bmKEhfCC3GxUui5bMW5Piu7R6osjve9153p4oLfebX7niHgDyve3N",
  "key12": "31exba2UiFxGkpenrCY1tHKJBeTYr2ut3baq7L6weVbst8iTSEtgUUppzUv9tQAoVXPPxz6ZCJE9PdVgRM1gij9d",
  "key13": "44mXhmdpoNgR2cgHebLjMYuC7raYKUWYitzThjrHpcoBygYRL236E4QSZZjZNBppCHqB1XGT82Dn8GJzrktoaJHP",
  "key14": "4C6H3GggbzW7JBGFVxnQD2K7MBihjPKWX1m5CZd6GKMdoSFvXyZBSdfQ5Nb2aMFJRwcGXCGep9kfoPjKHEhSsq4X",
  "key15": "4W1hgdP8awCTW1Bpe79ZLxUcReGJuKxx6vz9tTWt2fim3eAvXQuTAD6bFjMJfKmjXjfnvYZ4fUXZxseaJAWfqZGr",
  "key16": "3bitK85MpRXfratAZFUoDBRy5TnUb3eVtuWmK9P88vdefukSoFGFtexrvYpmcPVMKdCTskJRv3R9RycsK8ybfiwd",
  "key17": "4TseddbuMpzKEF9PmKwyXTtPQ1Q64nsHrdGZNEewKCXo6Hvcpbwa28PZABfTFL2cavttWz6SMGitWEf9jpQjk4dT",
  "key18": "2UhGoRDHy6c6z3xK6GiYXXFHckhcp2ejaviMSLTnQh8QhLxn88yATRthjaTW7dLmpP5cu1KQLNJ5vaiUNpjDwJZj",
  "key19": "5yoVvt52hTjzFAgJK7sSZWbBNgqiGA1eTugazYtwrcqouXVthDpUou8HmWM2NPTKMNfU9zmjr7o9Z7M8trrsic5k",
  "key20": "5HyuqnZCb6gMpbK17rer7KBmWXMnS523Muoz98RoyRykxbb9chLhz7J2Ys6G9pzXTMntfggTRTq4p9LeUW6Zd3WJ",
  "key21": "3PdffWRnJASkWkwXciQd3hKMdTanbGk7yQdqvrm3zkS9t3SfPw9e9nUZWSzGrDFfuymaHRRfmDYZ9XKVc2B2GTiG",
  "key22": "46fTUb28cFayM5sknKN6dkdGLDpvZxB1khbijcEEFPep99GPq5wj7N9pVEjZGDzrzKV8kHCMRCaNdZQbHKEBn2vk",
  "key23": "2YFgaRfNPtMzoTtKCbzvNYhanCisV7H8e7egKNW5q3saoHpf4VQ67qKHds7TsqRAKkL8HjqeWB2u2vKQHdF1Tvsk",
  "key24": "4RTZvmg3b1PTkiWYUjYXLKWHxB8nKm1F3SPAcHx9cXmzpd27ZSW7vB8XCWujXSoQhRg7aKEYYryZSbjtSfLTYexT",
  "key25": "2h5ci4Q5ApnLxNmCqq5qwy785Bx7NRHxDaBVw2GWYnAKDQC4E53VAfXQ4TV71zPPpnywxivzdF5FyMfRnDs7NeQz",
  "key26": "W1KSGRRRRLdec6szeDtdsh4bkZKtVSWT6kFYMqxcta5y2VHmDxxFwewsr4j1UHfJxsDBxPC2wXBQUZm188M5biG",
  "key27": "4FzSpxvRBWw32Luav49oT2Mb96asLHBkKaSXzNMN6NLcqhkJyo1m4D47wfTu6d6zD8DpZxGfXZfGj51rxgv2w1QJ",
  "key28": "5iw2QZipbNKi9HNz4FnTtyzwER776UCK8WMuexNxXmTBpRDeeUdnFd9QCN6G5aj3Z6UpgyNUPnw9Z1UprUEsgf1u",
  "key29": "28LB7TFXEfrGwEvRMYr9fbWFFw4he1actK2Aw8BVofNmxP85oLkpYziLjGDJGsQVgJTigD84xzepsx4nKaD75pQB",
  "key30": "wGDcRgmrW15s1hNrYpTGfYizeCZLZKzFsN1ps6PHVgJcq2qPJR1nQpesWVedNW13tmxN7GqPzjtTseHktiYcE2o",
  "key31": "5iGZHPS5CjTGn1wQyJvWJTfpheWVWysTS4SJV2y15r6GMKbBMpHxfxxGzNnynDxFSSkgkcqyt6eFWTngyYdoyGj9",
  "key32": "65KQmpwmz6guwzYUkFkGGCs5vzBouNjYzJzqwywP7zhc9CxP7qFGgAVWrnPM23XhACZKGJoS2JyjaWRhDSsSfFDT",
  "key33": "8WsLruY3mJv82QKkjm7oR7RJ1VqVscVXWQ4mw9aWGKvbbqiCbtHmeo5bpVTA1wKxbnkaWzjg7AZWyMgzEg2mQSf",
  "key34": "4HRhGvy8A5n73YcAsHabZE9HKyLpbGtwbZRRUQNwBr7yBgQn5q4wDXHvVybR7PpZvWNgCKk4hEjHFAzcFxoZ8PKu",
  "key35": "4mwHtvTt6uMVGakZGLRAu9qwX4BcbKKJwvAjbW8ekQ48EL5zY1tCkKDx3jMCJ1xtCjLn5xg14AbNpBuMfNhaucuJ",
  "key36": "81cBTXivfQfxEqHnZ271gw3K5F6NjLgi1ENgZ87qNmsvYAHS4JcMVrQU3smuGqLSXQ4fwD5dV5SdskCZGpGn97g",
  "key37": "qVqEhf5U7CQBRFL9HkMyNT713U2xKpWU5howNsnHUJVErTzYfB1WPJAtmE8zNJnG1d2SXecD1Re4zVF9hW2QffJ",
  "key38": "5KCBj4Aq7E6H6mP3qCGHQfoqU5bB7jeesGpgnPessKNJ6a7a9KBsMBX99DEurbucQqMh7F6DjtHvZ1SNeuAz3KKR",
  "key39": "4XHwWD8qKmzXFgkYtYgdEdZvWV7iYtYmdo5Vqs8Phu6JvPZA1Ex3ZoMJN2TpBf5QFN9iWgFrk7YXRMAs3PHFzPkP",
  "key40": "2eTsAzetJXQc6QqzzYRUrWuwTxLquNajgZdRPvmvFCXi6JJarHRwJvzYwPyGC15LpVjJis7fPNZNudtHUbMDwGWo",
  "key41": "2hEdNepXDiHxFEf1Gd12nEWFpaspxkCag2WyhP76nngzJBX5NPMkZJv1b9VSZwKEH4gppaozto58Kr7sHNhgoe7G",
  "key42": "2fMji1Az9wcAoNJvrNk2Lsa4HYXjsaTQQWXA3YPgyuDXzPGPeWGqDxN97RWMhsvaiPpbet8Cg2hWFFP8ZHBhwpgm"
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
