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
    "3UDQdqxqQPyAkR1ag3BBXSeVKieWAzhSWmsuSTvFnFutPSmpXPkz1PbNz16M25CvjNT846FDrTeh1LtpxLiYM6MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DcNFpgQMc9CfBGDR6RKuqZP3Y2wSv7L5jLAco8GPrJgWAVLKr2q5Jp5wf5zcCKzoxJRrGD4sCteCNp4rSargFyo",
  "key1": "427PmV8ZwCmhebf5xgWw7cFx5M1iz8aGSLYe536MJj51TrpAG5HuVbztb2hNCjbL7NjuP88VEY1WFWrnD6GKaC1e",
  "key2": "3j8KrwHeyE2DCD9TqSe4UQQLeLaSb7wZcKfs4sNqP53AYP5PtCFsmRSdBaLLt7Taa2U5YU7vgK5CbZLf9Eexj16g",
  "key3": "5SnVSAML54ZirsJ8xmsMuPakCz7CdZLrs6oUvRJdTvHANsQ8gp1RxvapNrTEpawkHuYv9DrhhZPGiTDxSBxnCCz1",
  "key4": "3wmt4GQ3adgttS1nUZcG8FpPip1QQbLaziChm2heoXCtnxwWtHKuAAWsKjAmp6jfmQYvKQh8LTstsRBJkoe1gPM8",
  "key5": "34gjGeQVpp1MoSuDMuTLcnM6B8dUN1E7KQXHxm89R1CVe6cL8g8Z3cxWf6dx2W4sGv7tMBkr1FFN7CNessqaqfwm",
  "key6": "3U4WJrW5cqUMKq7dVS4X5XKUf6sVenowduviG66qWSmikBVaz39HGdEXGyk3HYDrp1rbReL1Q3nDfqkzGij7jpM7",
  "key7": "5VduWnC2ULpyGHuP4nZa4vfr39BywBfHy2qn6oRUYqwQ3pNfagMMyyj1SjUYTW5obEeX81AM8Ho9UJyDNkD7wETE",
  "key8": "9XqQkMcoLLiDUtjJWckM45cLxXcnypN7uMiokdk34RySFQDXGqsUABCYXzr159yTPmPWVkgUApMkZ7YUHBvtNKP",
  "key9": "3m3RJ24u3VHQJ6LCgruh17QNbLRbvubaUd4KCWPsREqCS1VtERLf8hgCEt2rZ4uzu98XE8CuxzabfXXhQkRz6RrZ",
  "key10": "fx5aqMxGwimaZrUUjKC9NXdgMNCYEuyw3QTMJUhaGvsrtqvAWfBauhrVWhaQhJqdfbG3EJqoZADWjdnNb8CXjfA",
  "key11": "65PgrW2CiivyQqzfpqYnHQfLV1knR2mNBYKB9UJmcDz7pJ4iRDY5Ja4aGemuZj2sJ85u4RLA2Jhw4qSYwf4kP4kF",
  "key12": "3KPgf9YxeCAeAzczf7nd8VRBAGpmo4mcAuFcydbJR9n5qkyJ9ZEfDctBaHo6Ce6euaTEVpxCttxQ1qNBkKz3a6Bx",
  "key13": "39ZCbsRXJoS7JTsuBRozd51T6yHk3XonEnRaHcGjuCoLtt8QqFRdhDqooxhp8hbhF9FQ4zCtcoYoN3jGcaFT8ai4",
  "key14": "3SMG46Dv4kZv1zDP3S2zvvGCWAbWGGHQxj7Bq8Y9vugzj5f8kwcqEmramoasEbAzgvhfpLTCZFUEweVJWuWKoazA",
  "key15": "mn95AjtBDMvJLLPLY7jiTXR2nroFNebTKjuQThsRPqymE4xwxQQeb8YXjpJgUwj3EViH2PyxJikMsPZ9M92NgtB",
  "key16": "3TVgyGUi9sJQoRN7ZU9KNq2q7GKQ6RNdAN8FaoqHjWb4CrFrMe4ASHJTwmrUYqFK4W9T3wgAZNLhbqyWQvHScCqb",
  "key17": "5z9gLFpm1N44xWrtdYeKgJhMvSPbL1YjEBLYE1Ugg149hkZa7gRXSBCzz8e9AxtUidpUAzBgvWRFXc8Mxq24K5HA",
  "key18": "fXCe4mvm4JJ5Xx26F8VQm4zLNJ7nyESDUXAZEutAzcqviVfVcCW3fQWUEwFjR9H4U6fFSPVJ4DVAZj1V3oM7bRE",
  "key19": "3xNEY53FyVZrB89hiE1sCQZ1R4TfxYKZRARJv5HtzgVVnrxJS7n8okRvuV13XUDRpKGWmvzzg7rqqvAY7u6BJ9gh",
  "key20": "4TeNQ9QoYC4bEwaXnqJWMYNwCamCq8LNZRrUxQaLmuKMGfGw8KJJxGgNkCcUbkFUm8dgrVvTxYRNrSEEv9A2P1Rk",
  "key21": "4BroJ5WFWxoiHiXeZNBipb9vG1uJPfHt5TehsQMkcBdAf7PBDH9PjSsHgop5dVJCMebicoCiyGhj57CSeM4pXb83",
  "key22": "2fnWrzr26db7sBnvUrBs5zUJQnGBsN85WX8GWYbXZXXzYq3btF3yfwaLVLiaMZkMpeL44jxt9AKWNUqkyayLyWeA",
  "key23": "D4H1VbnSgfggGHk4S32MCzkHbyNihyYEpApPvRhDfhzafKq7sp1c1nAXxqDpsWp5K2dgu6CkTpDExXGxqRMk9c5",
  "key24": "55pwgWc3kjmTjpUCffX5mR8yzsWQXSVfrnpBgx8xtMerdVp1ErNvrL7NW5C1sB8AWoMRpJ2rCPhFYxyMt7RNSbxL",
  "key25": "5KEBwGSyAmncEgfVj6X1YZBdMa7RVJf7VTMTmGBBVC8aj7fgsMa2fn9NfBnuodN5mNN1AqnYRFWaVojXMcVmuvdv",
  "key26": "4gpPoS9boUtHaxP2PKaP1axWUaeLNZw2sSNHxstrCEef45namXfW9FcnqdJfFEtkSk4vNA1Xto8RHdwuojkJCmXX",
  "key27": "TMYK2CuNjh7m1mBE8H7TnL9pXHns1uMn2dTGTQ1HcJtNdvsNbVpe4znFjCa8VZP94yLpZvF8qVfZoGBT432JZUW",
  "key28": "4HQ3AVmoyMjiSJQif2VAedHifKbUUQwb8urcf2vZXDJKBasP8Tveo7DZgkSZCmz5iEgH1MbJ4Efnv8Xsa7yYsAQc",
  "key29": "mgfvhvYYthYP9miSRswBeUALVoX7L3x3siitFqsN1AeJN3BcCJwk6pikm2xyZusQ36DmH1Xo9xSVgcShCC1xvEL",
  "key30": "3kxmeuW8GQbrQ1NCB5EMsJH2mgsGCLk7Nd8Fryrrhp2L3nqBsGzWkMF6rFxLKjWqy5RsEFuHUDx4pNLCp4DtU6xu",
  "key31": "4ougyj3Ex4h63iARPmHKjCcwi8UfzKMUA62KN94K5SzskVgaPG1DxywWtfonF7SSHfaXf1a8CWJqmGCbLi5dyEKr",
  "key32": "4d7YFxT8uYigb4D93t8ZgLXDmG5kp1qyhZNb4CvhwJEZJSx5gfcLd53H8AMnQnyG4JAtRQjgeCtSTYXCCT8L9882",
  "key33": "2gyH3XGhZwWYKzzFkzP9UrafCAD89QJt6NNPgbpgLPF7wVqX732tVawFthPoN8ASUyCuqK9w8G4rvztrDcPsRp32",
  "key34": "4DNEogwvT2NqKnS3vPHAdYrFUYLiFrBbMWGjqh1GXK57QtUyNAwuEcwJNTqbEHNxPSrkAvb9NYqQ2ckTf87GPqhv",
  "key35": "5dPcxsbnFWTao3hjHgLor5dWEPQ1JxDtkyDqtyRn3VrNR3PpBD1WBrUaTAJ1jJNq9RwfJb8ueGX2ctFSm7r7cVC4",
  "key36": "2BkE1aq9b6UxyJZWsygFRQKHZbJGA4VxULdZCWfvXXuEo6ZKYh3cuCBhYCXqR5Gu9usAmJ24EV2uWZsmpjRmhquq",
  "key37": "2fUk2xrHdFojVBNSG7bqak2A7iW4WvHNiRh1r4wcJH1otinxoQ9FSMiWXoLFZpFh9Pa7Jvea2LJbjnudpResfYud",
  "key38": "XU4PED24MieXtEqFZV95KuTzUd1EWbvzCx5WLwnvDSxV2VHBnPAKRazPmK8WRH6xQ3qypLHBak57Wp21PVDAPmm",
  "key39": "5qxJoaT9oPczUZfGX47wBkamYT3gvHgc2oGYZnzvgEabw6u5r4eZbzzi87rs5fsM74snyLRP4BrFSCXxadmqaTLk",
  "key40": "2CnPS2jL89JCAf8YEAsJbFc49mM3QHvvks2x6KPEC85GqynfvXqm6wjy4kLBKxiU1TKwvbBU38Eab8xeypMNbzS7"
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
