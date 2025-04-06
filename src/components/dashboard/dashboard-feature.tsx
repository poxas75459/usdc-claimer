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
    "3i3b1i9rCQKD2hBxUC8nfENbtgFW5sinNDtK2UH1ZtNThCs6z6mitrfHzS2sTrTX2neoYvL9dLbuKV7V2DDWDKsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEqEEHCGALQTEp2gBbDSvBrmvMpKdq93e8x5z4QJBrBd5ZcpdtgSkp76iYdyjUEvkxyRKsPj86KxHqSfVEbh11t",
  "key1": "59kNmrMNUV8iinQ8wE7Xnb5EXpPN52BERmcuJ7HofEnunumwDu5eb24dcv6uE5vQ3MyHW7hp2Unvxcayhcobm38k",
  "key2": "4napsyVZgp98nkSJxvBjwRL4HM45DxisrGmWYwJnkSU56MLwZMXiS8HBFE7pCibXc8Bd1pksFFuBjGzxkYdfmt3S",
  "key3": "4g2siMdPv75UtrR7GVxevirh7bNtUarumgPkCHYsxCrihK92Z8Ts841pqAeysY3Pm87s5rLPUr7U3GwLVxYFuS5a",
  "key4": "4aEkJvf7fGtw982adaSufPHWBsD6MUCKCQyDfuvc5njd5s1Qqi25x5m5aognSKYExbT3LA4Jy27XjMt4jA2MEmsD",
  "key5": "44uDWu6PM4725dGfhAYuG42HjZeVfoBanN43g1sVHPcHLgfobgPuXYFXsthHNwnv7kZXxWGrZg4mFmvbKryp4vZJ",
  "key6": "4sH569w7qM2t2LVddW18EfbcyVvM84WSMgCQotAZeAAg3yTt2Z7YDNSuQCHHEqo59UKpwPgtkBrAngpxopFtP7WP",
  "key7": "621Yokf7kJVxSyFVjEbUbxGkLjtUzDeteR5yE1eyovkQCDe88BvEaGfgk5xjL47NRCMwRZkp9EUpHxXtnJ1sxnzc",
  "key8": "5eyd7QtAbt4PBC8pmCDK7rZ7rMkMxTLqasxJnx5PdMXLyYZrVcGiwHcY3MtRjDpRW51iBb2Q8bpJZFrKRXmbaX6z",
  "key9": "RZh32uVrE7Np8fxQVjzFkMdD59FiPbcpj8LrXYrsz9h9kDTA56beXDtcEuy1XYUubwSPNVFMBbnyyatdYheuKj1",
  "key10": "wBvdfMi1dod5ftRq7s4QequfPFZNd2cuvz4vaLKpA5LdDe3ELBDaGq7TdcnNXu86be5NEQrcPfWkg6MsN6GSiNs",
  "key11": "5WUYneBiMqbMnUmhFBe46wJKPFJnENCH9ekxNQXokPMvaj1oi3cNTrqEdEjA2pxTwLBxb49rY5XSbNBRzYPEn9iz",
  "key12": "53viRSvckgtVB7RRPmM6xj9Gwb5ut69ezLWDKYhPSjAC6xGqt2CtLN2CunrJT8yHMPp4kG61t3Hxu7wkGpK4C8L3",
  "key13": "3jBMXHJnhrp4DMySVSYtsfzjCbjq9cJF7Zot2nUUZPCceopndoRQCMx1ivWLw2tmfcTZg73V4pPEarBnWySHLSDC",
  "key14": "4w6b2gP48BykWVkpuMXhABNY83hUM6uXTYkEoddXUvAQPRBhxPevRq894tiHmErusbfz7YuJhRzhTtai886bYLJF",
  "key15": "4G5FAbynxiRwdCLfaMUUoe8BHRbAdhaQVLMEvDCJAFFHu1fzqn4BLhhNnanWWqu2YPwoJckfCwmS3EK1o2CPcPdT",
  "key16": "3CqSrVnsA69qdNfx8Jz1FHRw6VDGzCSnmUzCnxqQYFy5YF27ZThyMSPx6hKX7xqfZCS64fGgCUU1HTgwBbpzZBZX",
  "key17": "2hrsprRrTuWoDkqSqpAxAZwRWAVJpryUQSSo2GCv238fQb2QX8Rd3FoLA52noKvZvC7GeA5oHL4kUd9UDSo22KXh",
  "key18": "2oCHCMXJMWdHoUp67DY5iMhQuq5wrZ9NkEE1sGcMeBkBfshLPuMtpMwNW9odcAq62SfNMTaHJsF12ZY3JCixsmPV",
  "key19": "3ECTiEX6KTxyKa31sxNiZjD8nNqTQZM5A5fbpQhCskTYcJZZ23zRLRMoc6fv7y6raWRZxRjeBNbKGMkZPg8LVtkN",
  "key20": "3w9prbystA66U7zYFXU2uum3B6RKJAaHhyUzYNCpd2TY3VskVB42ZCBrrAKHyPzKxYpHDK8o6sFncQEXbkMJTbDh",
  "key21": "5knCAcrrqJRtvBRKEbTDXf4urbjQurgR1wnRG7N5NKszmsnd6EYwc1hNskLvfGyw9A353pbn59oB4wHHidGrHJaB",
  "key22": "2EXZQDhn1bhtrz1orE3tAoos8PQnhWAskSJEvNkn7cxd6fxV42u4fWr89qB71uriT6rtDgLPhWCHz3Pq1MPKrTHZ",
  "key23": "4qaHxoyfNWLJ3JamFYx47TSi2Cp44HqwaQNkMuYicNPmQMSimN2Hp72peEZvsRNvM1f24RgBXNccL3SRkTySm59M",
  "key24": "2hRTqLMRLvvyqvuFTkwp89bkqcqJA6nrbRaymKajP53J2EPn3XoiznBun5St3WYYkG6ByfrzQ3BUNu1y7HRYFxfJ",
  "key25": "3qmKYoYKpQtv8kx4SaXQWDEBoytZBism7yCyDiMzk1XVfEw3MwoUcNF8bGHiK8ziGdUdKYvJB8fvJKJK5GLqU3qD",
  "key26": "4dPiauKc2oENYJxfYBzGj2338gFrQ1RfGEJ1w8CEGj5xLzJF2fZFKjjmJwcbzmj9ggZasTzp3cF9TWcre4oz4WZ1",
  "key27": "669eSLDQMVZVgNfkZSabDQwKe8bkHPLefcAxYSPg6EFjLg7BRWTmkpaY4j1dZxtYjm3XNGoc8ubxscKVrVX2u4Qm",
  "key28": "5PQ92mQLaxwfpe3qHpPra9CB7Vjz4jPqjEFMwq9cAL83weiYkkdBJ3WzWK4hf1afWYzKxqV3UHFVA99VwmaUp499",
  "key29": "imA6tGUxMDZmXuqGKzk7qmj9SrkHp3tEMpYbsCE6DurpeuhdiAJZLTByGT6coHyf76xhLRD6HHqHJtBD9z77SqJ",
  "key30": "5HjPVbwGiGM2M56e8N4L7te7vb2MNndaUNH1uHYmw4KqrHGKdypWbgfvPQtnKf4brLefrJAvvSqK7P3ngMvEULvQ",
  "key31": "5E9bjRQac6TeZ8dVZdGU34HYimnJiUHnJmoEt2FPZznJoxe2YwZuqbY3bUMtuUioUb8pwexXA5V15KrNXpBkkbug",
  "key32": "z29gesY8mV52fy1oMbm9c7Mg7Dc2AJUZGcv6Ew86MYvtAyUoH7aQJkZ8TGFwVw8MhVDKqDTWppDrfApeUs9ZbZr",
  "key33": "FTE7G1oCLGcyxNJxvpBZT4sK4MbKwTPvxRvmPqrMtTMGAWt5YRRaMAg1JZMz7X2ZguHDXeSCsfCwg5S7RDqsf6x",
  "key34": "5D4DYRYu525iYEaAPRZZ31FNJX9fy1u4KQPoi9LiqxtUYA3x5wS4FQyc8TVJzCkRkpfCxZFzdHDpyJ5fawf2JqKr",
  "key35": "5YN2bYS6kPf7uySKXGPRZeHkhfWsxkCT7vSizfRJzx3KzQG8TVU2L6gAvWZ3V1kY2kDJDzbEefFhrkKAkho2wcv4",
  "key36": "3voDVHF8ECbSMjbaak5PRHXXoVmRCe8gGCVAHnhiZfgk31PMZKzQnJTeDVrfnGW89Dt4gyaBQ7tFcPAsddhLPCZq",
  "key37": "4ShhARSikFYLV1CT11RQTTGbPnZa2v5rJdriTc9htoHGW7ptMX6YrmEiJ5Pwn3BcorqHsHgs374Au4z2tuJKWn8V"
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
