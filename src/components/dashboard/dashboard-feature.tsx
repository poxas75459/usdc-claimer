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
    "2V5ZrMCiirmVEvX4uvZu21LHWPCmbbSQvRcX1vqBibytHHfZxnkRY6JWWaZTz8jmFtDksWZwcPYPS3uYFoATRFZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56uo6inCfD7cv3RbEVka5Td1aKrittvLjNvVo56nKfJQAMok1C8rj9Wtz4rwoigQS4CeVp8ZRhQATJ33nZXSCr78",
  "key1": "3akfDZEwEZ8xtep4QpKi7eRMKuPVo5xL7kYXNNiXDgrNXzmR9rgYPhEHMKqGY7ufMgDpjFtinfSTfHzWA1QjHJkZ",
  "key2": "2UjPfY9dMSGcHRbeoFfZnpYC8UcvW47YSfAsRWFmHd3Ld9iVjYbFwDqosEwmS3nq1xgTnBejRimyS2E7g2vjRmBR",
  "key3": "ve7meHn1F94NxjcXNfeKKFkNHSaKRCuGu724CLjpu4sgehB7eB7FyNnd9Gw1km7NMoeGkHKbY8TBa9Yh2mE2S86",
  "key4": "3NVncMWdja9rDnwnJtjbDFsdHS3YCJYwtTavAZmwq6pXp7wPEDPo1fAKvazkT2tJr9oxZGVooxLGTcUzX7UrNYfX",
  "key5": "31bQzvHRPKAsf3y4ztfiMkg8Eqs52x8suwPdjpU5U65AGxui6J68ApU8tStjVWpDXJ9xghp5ofde56Pk9sztte8b",
  "key6": "2LLjQGKp1D6vmSokWrJ7PFb1G7CAQXHb4z6ZNCtCdqBmqhHCmtzxP1FMWJQDTHj9xKjBkkK9p86wduUmXoPnzxs1",
  "key7": "51oe549CAtfmSkz7iGDtxC9GdejeZmsyjNiPjCT61QhqM5Jk6PB8kMsGHDp2vb9uqmPyQm8uYSUC4xBWCqfk1pXZ",
  "key8": "3D6m2DBqS5BsAgGJVFzhCsiTNkSPCLYMvCYrHBeNJ3gvY5iZoaDRAQKDZ9gqG1Z4V7oCJywcxcrZSfTJnZA2rnje",
  "key9": "4EyW598LbwBo3UiQWKgidY9rUmbUMNpbTpQWvrypAts81N7VML6R2UJV7zDs2dfPdSmCcmu77UFhP9wLvv1C3oqa",
  "key10": "3JwqoguF5z5brfyLrwRH79KzCJesXmmtbrCrSQXxnWkdsjEEXtG5YMxtZ9c4tK1Zf5WdkKnRB4rzRKZRfodMSogx",
  "key11": "2PCsoMeL72SYs4PVP1U9QwHdNr6FRVFDBQZkzaze4BhptF6EVZqahkPMeGpy9tUpo4DVZ3yDP5qmje5H8DEorwb1",
  "key12": "2j4Y21jFVT3bkgHgZMXmjp5yY73z8SobSRBZnPp3s8QXDvqDAC18EvRCrLnefxSLKGXnu8gQEDMyar5ANWhWLMDg",
  "key13": "2JhocgccheubPt4R225DTK7V316ddpwHhrihSTHSYd3VxURjFfk2e5H4CM7XxoidGFjzV16bT8QALYjjQh1DpbXf",
  "key14": "3QKcdWHmxYgHnJjAPs8qwyXJRQ4jhF7R6ov4EjouDXoxPTyarPWwVUXzHeUkD5DZ7HkLNKz8KJVvBLy6WBrEW8ZN",
  "key15": "9BcXL7pPpiFVPwXSrwnehqfq2Rt2PDrJ2BbC3cmaXP4MZ6Gm9WrKBvUU4dJdxW76Y1bCoaeGEd4du2c7Wu69VMA",
  "key16": "5sDqN2wcMeVsUALT4RCo4FH3neQT8nnxHe5ZgQFzMKm3WZbeuwZDNQtSZBmC92JgTRdsAu87rM41TssKLJnvvD8p",
  "key17": "5Y9E8FHtMV5sT8JB9n78DSvV4ZSRaxka78CUbgsTdqA5duky6X2Q9KubbVafGntMjxmFM8RRpiWyneqboDTWGBa4",
  "key18": "31bErj8Gi5QEB8Rupu6Jkt8h1VfqrhTSpk1FkFFt5C1SuVxHPQACvPvX1N283wtUYC4f23kyJS1qF48WSyAHid8D",
  "key19": "5jpnTXKoCuksTe2Mq3cP7DRzmQsWd7jHcYnYttFXT9dyfN9XP1zrSZzFyCdiz4n4Rv1LeSdp5dr5mrjTT351mqmc",
  "key20": "5ThLYSHvgt2Yv1kCVFR4agEHZtHUNryAKG2NmJtwx12ptoKY8wpgumZdyEfhFCnU1z7SP5uv7yH7NiUpV372zw5R",
  "key21": "4nDAkerN3pDJK2STWmq21Mimvgkrmv8VJQi9cqeSNJozem4rfSjr4RFNcRqj1qsNqQF2rSk7JWdZTTyuV5jvbZ6v",
  "key22": "2q9cvTv8VqvxEvQkt6iEGJ7mhy4QgKPEuRbq2qg1Gu4KcqMSfgdPLuuhhU54KqiZ8xxV1qzztDSDEczyKya5SFqL",
  "key23": "2YnUoeHTLSQYThbne1QbjiAs9sr7mAaKcoHqtmNeDZJG58WopAVgYa8JdjLSWhMp4o3kfyyiRCLhAPZbg81qpLyK",
  "key24": "36FMPP8akm5C5uZz54vRdEEKzcRhRkjhWB3mmrBt2FqzYZVqCWQDvkZQYzMyjPLKqMVpWPJSo8FyeYs4BJh7tR2h",
  "key25": "x8zzPDic64X2QmTRfHtdgNk4Cz4gDTnqHa6t7NatGWpMkrM63NGYfVEahgZT6j1JpBqpmyNWb9s8z5DNyVHJWUS",
  "key26": "HaoibLCVCfkgEwEJSSQGvLvHN6yyR3swb61dS645eZt2T4wmsgdzKxBqmi7fx7XMQiAJo6PTBnWJEbFyMGNP4wP",
  "key27": "63qotK6jF6Se9z7yWpvo41NQ8ug2GzBAowegCzgFmHE3ZzHe6oXY4abrT2921nNDcnfAicD2B6JjPoowuFMAAELN",
  "key28": "63eapQwBgk71RKEFfHo4TwJfp4Z64bS7JGFahY4n7RNYG5ET8fkxQt4ZBTkcEM5pMccPgxUBwwN8xe9rCmxSD2Cp",
  "key29": "Hk4FuNtZDWFTvo4N3Ydht4bF2D4D2wnmBrzLd5wXXDizWzRAWZG5PNM3ffgYLpcCRs2gQM5M9gPPkf8mFLARsGA",
  "key30": "4UaUuseu3gzbot8xdr5zoh8hXyngDfaxiqfSGjnghCySfECiEn1q4B13mbwLgCXfFZk5EfEaFyU2YowgELQ7ebxb"
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
