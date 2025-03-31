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
    "4Zrunr5ynEUAR5PxyJRD7hJ8D6hFUTGrZHM4ydTbBKuKHmhZwh7JW7DtwJUjaPFXp5EvCnqHv5csvqrZFrDfkZDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdxKqL3o2KbDqzP2SG149maYiJo8pAHK2WkcQYjPBpRdEQL9ukTTvtTey4WTYAAkev21Tfn8SgyauM5anrYSM4D",
  "key1": "3TSH73nBPH4do6khwg6JueSSWNLVeWmPCxG9TdvqqFyoSSGv11MLvW9aXZxthpTWayRXm4eZjJWdiTFAH4onJrkJ",
  "key2": "3SjzoMFqMqRmFKaHMUqTYRQMT26vV1GtQ93MnZC15vuHU81x5NFurwNS7qmWPxDD66hhcnRxGGdgkhfmYVT8jKXk",
  "key3": "sxLXdm6SB5tUe6da1ahyLmG3f2nk8GunBvjmGeo1AEKvqdTouc2CkHcdnjkGBuFjzrsEX1Tu4D4vzdmKXjs6xgn",
  "key4": "3cJ7xUrsiEcJR1D5K7te5pan7UH2iYVGpeg2nPkR4snLDfLhUYqxwWzd37GPbmazmmLAPWPQFcKL2mNe5Mdt9DsT",
  "key5": "4YRnMDtyXoVURDTYGVd4rBw3Xoam8nc9fL4qgMJnLmz47Qivu4jPi9AfGytJ6ojftQVVMZg7UJokpm1gUNfmRk3d",
  "key6": "64rB3fLPv1DPEa9TkDY5CsD2SVUvHpdcunDFo8941y3RuJopfKsdVpkLWJg594fabwQjhfxBaPk72nyJmvkuexTg",
  "key7": "4CM47G6VeZdN8zdxQcM6MdiTtPEszMELYrKeeGJreFCBj6DNd6APmvzKCJsjRnZsoED1ivQUFX8QQehCvryq1FL5",
  "key8": "3toZNAZDrMNadKqvfkpi8shfPVA3ZoCj69C739Gq3fzpa7jUoQDmLuU5nfmABFZy6BGV82tHi41nDLsutzoR7Wha",
  "key9": "2Xwqam1hC1jJWDevzQPSvuLrJk8CSyhye3kmHFk9fsYi7uaunNM2RuMPQVuuFyHaMhbhfNKXuYEUJcGEXCdcBiak",
  "key10": "5ejrVJ4Sqsz1c8DxDYyYTqMtM9iZjzCBq9HUFeLBZf9i3sVRpXVUM7ukeCyRmon4nTNBAYuSFiWwXsEvQyy4AGLY",
  "key11": "J3xk1fb3GMFEMcjgZVQVS2d8ALXB91qD7JEd7ZpzAHzKLhu6ALfDCm8QwaxcY5o3XoCT9FwkebFN44ABR1YCQR3",
  "key12": "wvuhQAKLDt5Ec4G96T2H122KtCZyXZAN9KAnATBQKDiMPoQp2ehVLTCTqaj5sE7tgBi1ibhYjnzvbqr9Ev7Ze4n",
  "key13": "2oKjU2Ff5dzDQmiAgh8AwLvLFFjQFmqrFSdapcnR4NgBoz5xGGTVnL1JFPjC6JFY6DosmdpXTKPmgBAHjGUgMAii",
  "key14": "AdikQp6vn629TTsUqgm5nVWfwWrAN7zPGLhbjA11kzy1DmWgivS4762uzX9L9ZDz51kCL2RoSxFaBPz2rdcSbZG",
  "key15": "2jmcdmsephYraeCrF6ztfYdupaJXwun74yTkRvMDsXyAESVVhYxG4ut63PsmQvv1E7KbkjXsuNFSkLyYXbn4PmUk",
  "key16": "2xTPDBXcuq5GMuLBhNLh61ZQj1JkdJEc3NUNaaA95ajbgUCMQdLqSqy3yrgrxupgiYMRhvrQoKM1skDEDg7Nbdnb",
  "key17": "YZ3EpJYEfgTVibhZJHkfzMLJ6S784Hv843zFFAtVv4cUbU3Wun4QNQKkTs7xQ9BjDNiE3YrvtWLThpDce6391tZ",
  "key18": "28342BgkSCHdA8ZWS39Vo2jzXSG8fRC448xMUciELaVjqNeNN244jPFH1i2bYDF8vantRAHX8XNaJgm6XfAa6gjK",
  "key19": "55yYjkSTuHvNRcvDTVxCfCbRMn6oGEbd989TULSo8TnfGSWjLC7FWi1QC2r4NQN79gVYbpRsbzaeTxcZwmHL8JVA",
  "key20": "4YKsn3jK4nKDLpq6sXBHD6pNQ9KAMfGu4r9TNJPVNwyAzwVonf3NjVvQYgRzyQd44EwvGYevz3hWEGeLDxAGtHFM",
  "key21": "2SpmbAzM6BULhQi5NRcFVHEyELASPq9S7fa153C7LZiaQNRsygRvGj5JKh4GUbLPrKkaLaq1Vyz6Twouq8VksAvq",
  "key22": "3VaE7maJ3MJdmcp5tBBXFyZWkptVQ8N4dxDzkv8ssf2YXqh6G6C9dqiEGbduYLwrXnjpRa4dkZXRuaDAoQCyLovE",
  "key23": "5s63sBUSXdzNT28dGi5xEy2exggyQg3fAmx3QGvjCEtUX8UjG4C8X6jVUevmSRxLhW9kigdRLRfnN7WcHUEyqTw8",
  "key24": "4dJSYKEKg45EwAAUJw1NSGZpvWrHeXCgudQzT8Vf4rVR7v1DCznFNryEQG7KXAft9RMEqg1oaCPJJWspDDUSkB31",
  "key25": "3rykt4LsUiC4hmzGaDSzm1yzbriHEwTsHxm29FZewNWhv4PhzUCh7x2ZhmVgoFRHhi8ZQ6Cio7NCU34bS2CuE6Ao",
  "key26": "VEeH31CBtX2aJk5b1enn7RA3mGN82twQAtg6NN1nFqY3fEDMBHKK6duzM2or8cMyTtwjSRMLSQ4pUHtTaCcVbLR",
  "key27": "3vgcscrcssBdYxKsQ7Fu4VgSZkJd1iv1z6JxSGY7fbHshhAgeQrrfrKSXXKjx5wZuymyC3Q2S9Kt1xfrmR5cNkTq",
  "key28": "5tS81sYocLaCb2BdiMqLDJ78GBFrtEhU9UfYacBZzaDiVzTiPs7qvx7P7hdZ57Q6Xq2yCbzrM6KbrEM6zR2muLJm",
  "key29": "2TnMzSR5wXNLd8VPyzGpE7vBm6gCV98XpMRxZTVrmJco5hWivJe1rNrs1Q3ZC783mKHhV7LKdJSmYxvSuRNBg2PM",
  "key30": "2qVEgodC1DKfLkrGamrr6vNzTTECfwD5yzXmgzuHkcNjnbXj1XkiT7G9qA9yHqkFUWK5AZkJXb1rk8cywiZrLsJd",
  "key31": "2oDun49USyRAo4AMe61MxwzxwF9tY14K8bK6JqivNw5PcNeSABc6rrzFM1e7GkMWe2r1TX4mCFK3sHSsVAqKKHL2",
  "key32": "23ZnXtvV2iHYmhz4vqC4h8evf9kioCKDSNPxFYcBTFTUNq75DEX7ruywaNSUfQsWcDojK6QsPfJCqW3ikRn6KwYh",
  "key33": "4S33jmsoC1bVofkFLYZ13MnfLCdEzBar3VFbKbMoLBZKyyg5xRAzN87H2VsHi1wNGyMwibu6FHymKtDdgcTnQhyG",
  "key34": "cbzWsjQJM3aWVjGbW7oqSm3qVGDzheS3fgcWvWDsQnBRj2GD7UE7Mvz8zsSeomFvuHnT15qf9wvz94ibuBDKkH9",
  "key35": "5j222X9xdibKmkkSWvBGnsAfMPkJHTLX7W3trNLoz7bkptuxFJVsgT4oPjJzhrBCoaDvHXHCPbStpuEPeqoGWkdj",
  "key36": "sUf2ubJw4LNG6bhwXaCy7KE2nK2Niho6Ay9gxjKTHPqMYS5cDGraYQ1hd4gD1uipSPpxCrEijK7QmhihiZD3GvT",
  "key37": "3sZ9zeRtHBwaD4bKxcarK63Q1c2qjv1S4SVhCB6pcDNK9SFdzsJBLiQov8UEqceeyQPQjo7wPsqM99vmiLHjtqUp",
  "key38": "pErSmdNZ63Wu11wDbwbLi3LTV1rAk8BbMmxGGd8pawR2jkZvXGnGVGAujtg4dioYeBnbmWPMgsDCVrLGCwmerDp",
  "key39": "31rkMPDTaKz4w633s2Mj5jVVUQYn5ZsGTUidivjXBzye8kuKowXGHySyQhCVHgiHmDVg4KWyqepEi9ihnDDfajqi",
  "key40": "5KH22tJtoEKLcbXgDESWu9ynT9ayBBSZV6NHmWopAirGv2M6gfTvMBUn7bRmmA6XX5AHiQRiZK4JmaYZFodSZm4A",
  "key41": "35QsGwMqjL4PgURE6ByCS2foY2XPnZkGFZTa9hpBa8abm9hwCVsfZGMzv9hVpLSJi8EFJdS6PF1gx8vzSyLxoTUN",
  "key42": "2qMrYiz7YwKUFUHsMQjkU4SSVaLiZR1D59zJuiU1No6SRCW2A5WmUhh2DyJmwei1zstdxtXYs1YseC2oV2wNqJxu",
  "key43": "2pxrzxWrtovcCRiU85t67CNh2HQZMh3RzvoXR9scDYQ97gghqkrhj62a22D7rYd7ZSr8b5QM1YS2985KYuCmD68d",
  "key44": "2VhnocGZafrNmhvBTMiwYSMXhQME7Q96GK9epyxcre9pbq4XPTBZVUb51CBXtQCqEubEm5NPfk8WhL3oZsYUyZwR"
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
