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
    "5kLMidTb6C36JofeuZu26uCg9EJFDMQ4hPFZPRQKNCbwBRJWgHBEsV7XPb7RH4uAtK3DKBqDBmKjJSRJTfBAjrYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfQG1pnvPBPCWa1QRpf77t7xbaGz9VWr998WkePRwjfV8CeqtTierfuu3zjmdD3ZznFJ6dAVkwY6rKWdU44qdZY",
  "key1": "3dLLMwkFgaZE9bSSGZofFDfYCW5kznSYNcPWtJdyJu9bwgzcC2aAgezSbkFDt6SH8bTmjJNRMHeSzYa5nJdNJPHc",
  "key2": "2C133EvX99y3t3cv89cjiCUEnLd1TyUxkHSrTgJtM16mXtw8zhVuWQgTrUjqiPaWfBJYmgYx3SYtHPSmfvYkSojU",
  "key3": "3Q88FE7FNi1K2VVLFvkHdUDodKY9K363aP3AKfu4Jtq1Vn6RKTcpjG8b3rx2Pk9WFzKQWjaVkjRZUiFLdv7LsVB9",
  "key4": "53LBRgeJhwB1F1pDEzeJRRddbHCY6WVCh4uMZ1DTQtgv5bjDbu3YPqa8ZSRxBwi8rCfdXQ7VRWFmLRAdxR4AnwUc",
  "key5": "5akpqjH4Z852WPXTwAUVqRyXySmQnQkM285Sy45cM3A8L2j4UBL26ded7ZCrLcW7b66Ns1VgHV9koNVG6MrpHdNw",
  "key6": "3P1cP24rNM5U12fsQvdJTnTdk5UY946VboiKstnprBr8Ppr6vyWTxyVH3Bapr4ja39PX413uEowD5qaEm9ur47CA",
  "key7": "2UjURwzijN1RNZ3kT3ZSvKtNGUYxwNDuwwHvkWTJu8HHGg6VoMNRLDMGgtdYHV9wZ1p9UPBtuaYZbsuiDkyTb1U2",
  "key8": "JG4MDspzxYs626Qk98uw5A4QoHnVnzZrGHRLYxH2CzYBoSpKnQgheVyDyzK5ZxJkSSX67FWguh4E65nX3JDqoAE",
  "key9": "3vx8zg7FpuskPLtCsQFyLbpyJCtvGxGFKKWCE6d5WbGwgG1G3KPjsGbRaepAQiGSy1tLLkz5U4Qg7YwvPRf5srJA",
  "key10": "2L54pG2FcbjpqTNGkK3hGbNQbQySkb38vNZhJ5gCC1Zfo7EQkPkiN3BC7WFFHbvpSdB8FPnwiLv7669fUSXGn4Wx",
  "key11": "2GhirrdT1iM1tKYkUnewQ3T9pVJRTC2tKSaLQ82cJJxoDA9YgLJ8AroPo17hHSPy3Wf3LPnsn6d7Bwfbuy5qDVEv",
  "key12": "3HBxNrT2sMyNxJ9cJaTvcALqbfuUx7s4pXzBEtgN2o5ZTCB3Mx3M4HX9kqouHiB2Sjs12d4BG6Fmpz3uF1DTn2gq",
  "key13": "3zpGEqpinnpEUc88kejUaPX5SB24v6uuib7GKKDJGrTbN7qVrAfW9ZdsW59ykVHmRjX1YpRFwfc3ZZrrNHZ7tMbH",
  "key14": "7akpzEoKoSeqWsCivRxzmvrEb7USTdcL2kM6CKFgoiukUbS8GDfttou6HCmmsfEu3d4NUvAnmsACxWQ4Nd8yhNA",
  "key15": "jAVrJAh6kdZaMwP7SUgTsXYgP8jje4HN3zYFV66j2j3XEW188Zh4oMP6DsZqTbdsuoHiNqWynBE6t77CqquSRwL",
  "key16": "5AN86mWC2kNu7iamRyo45pPB4zGs8dUWYpLwqpkxdMRh7DzD6Sia9yckcRM826369PZst6k9gg6RqVGZWXsVuySK",
  "key17": "zfDHMzh7Jt6Dpx69W8575ocG5NbqHTJds98tnFawGAwYqnAc7UgxmMabLwe2Fyn39RMX6qNWmvfrzVQqiAcbBZU",
  "key18": "4wjtB8HJdLG6SP1qg1AeS9vqZnssY87re418nAoimvFuz5DPK8vkPR6z2evqrAHdCLLpgbnvjdx6ZzrcPt6LRwFq",
  "key19": "58vbKaCyQZ24n9WqVsihmqPhf5C1tnAPxUsXTiPv2bKJaNFH2Jk1GQBHU1YqVAeYhDkXkVkajWgiB2ngz9A6pAm3",
  "key20": "RSViGvwheskQGrf2uywvnB8YHSZELLWM5Wo28HxsxVURjFLHokikmmTdJ9GE9wte4ahjUgJkp1VViQqkHVdfHLT",
  "key21": "632bX2znFFdP7Y95TqdqZY1waadRhGuP7MBx6u82yF4DM9cmtdk1BdMzxJcoA5sHBSounpJE23s1uszdTWEbhgi1",
  "key22": "2rSQUqwLPHW7dLN8ERznq7W8TtGGnRQhUKbCn5vepm9cTWnudcWFKF76xU3gDg1WL3btTs5Kgyd9ABMZdocgUPRP",
  "key23": "215mXDtJWssKQ1F4cVwtq6dA768wDPUemTb7ipgGKwyMrPfUJN14VckeMsfqwnfKdR6o9pV3aF1SNwUamWn88FGF",
  "key24": "5m8H5PNdzXChCtSYkpfJWWRvepxRz15DGx6nWMFgHSziqxe9KdwwLtEKuLxfAQpki6fJRcpuMCdvXufQCQ5GtRke",
  "key25": "5cPxksya1ez1W1x1X9ZFW5a2crfKh58tcZnFAVMJ3vmN5Rf5UMZzWV4Cn1qfXaaVcqgFbegW4kk8wEdb6YeX9iFQ",
  "key26": "5oG4rUVDr9uM1MyQqjd4qx34He8CSzBnjyYxwuowBo7xVqTaT47XWDaNqWTCgmsEYFdpxNmaqMRGmYg9ERdFUMxi",
  "key27": "4Mev15XCemcQiTG7xawg7AtxGc2opYeenFZnChLEnzxe1MKD39j1aEpj94D4JSoKoV1JbaarZescZXv57bJ8LGTS",
  "key28": "9QEzifszZ9Sqp3WvSv8rKenhHF8o1WSf9mj2tqabV3Tza57Pg5gciV3LLeydCiXAk3KSaRjLZ76aRDiGfHLz12n",
  "key29": "2qFDNVxTwZrbhSrfqx69V3XRtgRG63LjCxk2huRDpLEiwBZpptEyCKDucHyTQKj4ujmtuUBXmdoAEF3BHjp2RGCi",
  "key30": "4jEnrhs8ZB1Zxz4wXyy4UpwHyZytR8aEPe46mDkW4MZoGjEEaoTjK2RiP3nsurQ858ixCfLutNBrWWuAaxgNDBFZ",
  "key31": "9TVaVTZ9v3N8kaLxs1Ch7xG8TvMwTR4kZm8SZbU9e4sQQs8CKij9rFDb5ktDHMsaGSeTsq3BCJ3hGn54qbzMzLy",
  "key32": "etVnXB6TdYCM4U9QWdvLJpuwKB99NHVnEP1D4Ttw86e2htBWiLnHS8eGuQQo7ReLXqtXVVJNkfoAuES6MHetg3G",
  "key33": "AScgdTf8Y1F7Dtv9v7QXGkJkpHByNjU2sGTfVMhDMvA2EhbxqT23ap95kbrxpookncyvMwyRVGm9iH5zVe3nvqc",
  "key34": "GKWcwWJ9aawqTTh3p51uC6qHkXh5RdAMWCHWMvhFBhLJfxFAX5HEAnbEGwRAZt2AVJdv922XWFjuhmtnc7qHLmg",
  "key35": "2GeSuAb1J9FZRhM5WyWiDQy5TstdzHhKanCh5XB7rXnVeaPQAdWd3dTjyVH9QSQxJCzUD9QRQos4oMcG2HbBFTYQ"
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
