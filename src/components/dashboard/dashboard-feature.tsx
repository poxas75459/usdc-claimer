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
    "35gDwE6PMKJUKpheoi6KHVvGhPv2vNLo6WAoHcMziT2YDaK2yMqvgqUtp5zH2n2M2mvFjezXpTikXEe6KLjm2j27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xB2nnQZ3YEWn7NBbTB4Jd966gD9NZEGUsWb6iJLATCPNYJtDWhEanNfkRxCftVFX5e2C6E5okfUeqZTYQo96XNK",
  "key1": "2P9zYBbVXFCv6X2Dt576vaSndZ8Kx1aRHjQmwmvc7UmC1gbD4qJhjxdWnsU7TWvyMqoies1dyD9FHsGPsqFvPWYH",
  "key2": "2amKShtSvxSAPZyiR6MpaLx1YxPpLr2QoCUSJHvfeU6Snv388jVmqXsWygXdeB29eqfZbzt2en79mJZovQ3vC8f4",
  "key3": "4vnSMYcNyA2Q4aPqCGkGLcvdBnKegmKEoPpTS5MpvcxRM7LNb4osrrRMCxiTTj1jSgqyppwwEDd4BnfXLr6yQzTm",
  "key4": "5yRzZJidcxvvKnRiHH4DrQpNjfrKY2PT71FaX7DAtPaoBNDc3W44tTWm3KKqpQ3y8H52mXguZnqAic98yWYhPfmD",
  "key5": "4fubZtqHonMGyVN5qmGN3cTfJd8vfAW7xK2ToJ8WjS6CEQ4BNfQWJ62n7bDpgAGLCudkR1Cf1vcQWU9VGauLiu3s",
  "key6": "EXbxcH8Lxw9JQYnGgCsp2NdpWFrKAcDz8ewFuUgFXhkd6KxdtWyRS46c8XwEytjXJXmshboD8b9viv7KcAN6bhV",
  "key7": "43UcyBiWBcpmgDVoviWfFXZLwu9KWZRfnhzWRAxoskaDAiuMMF8eX8WLTqPorR767tqzPniyM14RyundP8XT9dy6",
  "key8": "yTFvzoDBddNkbpYzM4W698tURpisFa4sJ9U2uJRGSLW25qX7nf5w4xbanJ5S4DphRjtnsCqshLp3nUXr5bWECBc",
  "key9": "63gqa8F7X3Ko4eVnTggoadF5mnJx4Z7k4VBu597M6V4qoaJfUsE9FuD4wEeW2Jj5Nki3auUsxhtimYo67gC5rFPG",
  "key10": "5hfibsG5epJ2nnZZFuwwSYSDkHkcS7RFpHdafkA8NVuLdneu3ajxhXbcVA3jZzC3dz3qpKqEQG3bWq29fzPaHGvn",
  "key11": "5HmjXDjpMFYUJ5T51XeqDLrYARqZizre3yFoDtetxCwSoQQsdciaGZFURE9dBhTKEaQ4sYmcPFjJxCTCQMoJJU7P",
  "key12": "61nJqs5At4Fi5AWtJm3YnDeRrGTNkvFrC569PKHe3bFG9GBQfqqapmcTLbL6Di8xtYB8xHyEAdugFsGmLX5E4B7W",
  "key13": "2VUtRvMNWwDwkg3W7Td6bjdYwbTTBBCrmfDMdJFnjxHrGaWqjfj8D63TzR6nfDitnfQXjX3zCq5772tZ6YguXehB",
  "key14": "5T4cWJfDLMqYmp2JZDVFosuYvfQUwapjxzJCCFpFkha91NrNXv4RWsZVLRsPsPe7g9hTShVMMmYb2wUjVELYqXJd",
  "key15": "2CprtCATN1aMEw6UJT3m92z3LqN4THt7DNdvXhXAP6F9hbn6VurJJfGqKAPSQ8JS4DZq84kXJcLghL9UNLSnkrw5",
  "key16": "5JpnxdmBqP65KHk5YNhzN59XbmP9K53AgNBPKrHqKgBQsu7ZYJGWtvCCjrmqAQwNErs5yPGqT7HnWss9CXCfvKzd",
  "key17": "5ss9e7FwYBeJA311U9g2qDgxLnSzvyapKA21Aje1prZmJsL8YRafkmCJnb73Aec3ow6yGh4VT2fNDQeNrUjCDzVX",
  "key18": "5kPBQZxYvVEZb9qJuQazs8ssodG59g4B1uUufUxpzQAWtK6BPCFbxpHBxXSFcKRtFD9HCYkQrRZZdtwouPAw8ETg",
  "key19": "3Ea7hbz9rzonY96wvcZmW118jE9d5qMUDC1UySjSMdqJZgRnhYG4ntqZhBboMWrt5WH55sS8McZxVATs43VTD9SF",
  "key20": "6u9WS4bxHYqPp4WZ37L5iAXZMjdVDnKpQ4BjUfGnJGSdvByiFfaLtiCpFxkysURnTiESG1x4xP89YGQtj3GqQLj",
  "key21": "5WdHr6TkVHKRWYhAEzaADYUYYpKE7262TLG4urTqqcDjGRXUxVaSdpxN98vYZN39wavkUp7qZ74vatMHKL7AGWd",
  "key22": "4tCXtLqx7gXNRiYWXek69qBzkQVpV5SVCQQF8TGiTpCFBubdNQurmfKS8vhdZAUQEMAC5bcu7PCc1vCJbY1qqVvC",
  "key23": "3ZSoRsTY4bNkwmpkv8nQFTBuDSsdYVyhcXjASDhtLEU4gS6Sg1BsNwnv1QTttjpyxEv91m4L53n6GEnkERxhAt5V",
  "key24": "Exq5AG7yBvrsWpMPyeykYFoHq6Z5UK2L5o1ZH798xHaneeV5dBpgsV8ns3PXxsMZ8HyEynRCHJtctf9yszJfd9L",
  "key25": "29oC25ate8xkY7CSHL98bPdWLP1qa5MmRsw4ioZkH5dhXE9K9ZgTMCG4yztKApCzsL3YzDymMoWYdY2egxCX4Dsv",
  "key26": "35kTqKdCuXw9oSKu3f3y5x9guVmGAqXdv6VyizDMPdryquZi3roQpnxcFJK25xUb5gN8KKTHfZM3Z4XgknKuGGmo",
  "key27": "5AmNZvRsqnA3E3w9svzUjvvhgvijj9zXGPfRxebzvu5DPCYfCnDztVJdq88rmr23H3Q77dxQuqj6YDCEGF1Dz65A",
  "key28": "4QJXAX4HPEJ8chaPWjEaEqLtZ2FprxiScn1Fp7i44rKskT9QfYxxdU6CGnGzh1XxK6bFHwvT4xoMmu5jQkSwmhAF",
  "key29": "4P5cEbtgARh66xe7XWCWSLou1KaRNCsHkq3WMz8s8PcEvdvKibsPqZHSjXf3GP1DsfjMiwGLh9uXy1k491Mn9GEk",
  "key30": "fbw1Su8yBoJ64E4BpakqVgqS5AkCxi3x1ic5HJZLsc625dnmAm1edaHNgLhGWZe3s8mj32esXL7rPCcawAGZNHU",
  "key31": "2h8wdbcLANp4C1AQhLkxE8dmirNJdqSDZ1cCk3fLPREriLiG4vksuGwJfztxpfiGRcVTTfi9TK6zhWqZ4YHU127X",
  "key32": "REqkRGonkFZAjdoNMkengxwLBW8VB4haz49ujt3EAUuJHrAio8MshZh15PivujjNuKepxb5AqW7KWUMferKDjKA",
  "key33": "5bJeWrn2oiRSF3ePvisqA5VyAjoARZz2Bp1Sr5BwSVQbAZyjjFQR2bGysWUHQwCoXyMic6218judqwpxDK3mKQuQ",
  "key34": "569FiqFesPxx7Xtq7gEZcGvgMJSxq8jgfrVQWSkrBERc7g2azAx7S2PYBAz2m2vuN2xApNJqdBTg245gfczv5JNc",
  "key35": "ZkrQShGGJJkojxLxxin6vqAxuWj2qW47xcd3fms6Bekc6wj82AAjvcdzr3BcyNoFwAMf2Y1HaAFbfBDti4LYDhv",
  "key36": "2tr5kjia8M9mrR4JPpETjSahoPKqxxh9Su52bXvo1w8X6m24ywpawfKoeWfhRsWJoPp92Rm5Uh9CGpBHgQQzEkHR",
  "key37": "5FSW3SaMumrPNvHMduT9HsgVxmyJ33z8DzrAJFKm8KsW4z3JBnuddrouwiCrqoxMvF8AmVQ2zFak97HCsCL9pT1p",
  "key38": "5hJCNSKh2GqNdiG72qQkW4cYSJ8aAp4ozvBVHFELUQDCa8cgvDie5XSpT3oiyyoKireW2Qk6UisQxkRGt8b1QuYk",
  "key39": "s2ADGEL5MPsP796bdzko64S8L333e8FGFbgKLp9qrEQ4LikC7c6TUC6xPLLBfNtWK2NVmLw1qjyQm5r7ei2ckP7",
  "key40": "4Mk7C6v2Moziunq6fYrzqPbPGfzFBGmpFAkoHFXrKw1gHGT7jVyiB5Yf6BxDFG51S18aZq6RnSAKcGDx2vS1PNjN",
  "key41": "2YSduNJfXKs1asv9M4LhYsYAjhszkkvxavb6H2x5BBJUy7oRtUSfzhwaDhtyL5R6vqHVRRFvHjioE8ytWyDysJJo",
  "key42": "26zdwqetvtEZWfJXizPiHiMza7z5ZsZPWVUDUuMSGweFdXorFtQwNaGaSdbazzMRQz9ZpCaRisjo9JA2URyoApox",
  "key43": "5mLC3ogprqfuRQ9t5pU4ebJkXYQZYVf7zhqXTHRueqYYQKkHe6RmnxzqGpM9zTc98p994WwTHVEksaDhTZfoEuTx",
  "key44": "6pfbhBFAeGCvGaFaRtihT1iqLCNEUwXkcrWRZTDYiAtRXh9Q24GxqNi7Z9JzfeNK9HsbJYgjAmTtSyuDCsHyzrd",
  "key45": "5F3TeGEJxLrcygyebdvNSCLMjW8ZtyAHnmZdEDVyuPaEPLwXA7AEkprKQsDWXsGqpM6VCFv857Kg4tFmdnzSoN9f",
  "key46": "5ZbNWt49qzSaHdZj8wre64QKC4Zww459Qgw9jDNo5Kfg2UZZD4RLQRctnE5u1UHByroTEytxNj9K5ZX3eiEv9YB5"
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
