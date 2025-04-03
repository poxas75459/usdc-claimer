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
    "sfbYr9iL35kZyc2YquqDTLih4iCjg8WgEukZANeNiPEgks3gnxvuSp12BSeAy6EUosQ725Gs7sqdbhrVVMddacg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnDDBxmh42gEeDQQY5bH437KwYEJRHjhqhzHeHwuH4b6Z6tE4yG5NyPtibLcSBWRr79hqmdRo3eRVBnHnXwKYb4",
  "key1": "2fyMJoqLwk5faYnUwSLzp17ABvsBq6rUj9fxjFrshvaFjZ9C39WiavMuDxfc5eJZKdgiZPneeMvDWzgkBXTZ83rt",
  "key2": "5WqcXSaBAdLJyjC3mc1LjD2qctSfYNS8pz6CzFsyWm8RZPdo5d3hkBSQ2NCW1P4YexJH4ycMqXjZodW7SnBwTHbQ",
  "key3": "5TVHcDGoERbZswCNrQAdhYd8GaC8eBUWJXwa4LcN5ViQyAn9dPE2q4uK2gtFJ548WqePrRNXaCs9xSHnJ7u5ZsqL",
  "key4": "3KhxbTL811XcU7C52eYRsL93syfov53iu1MjGgcdDzguSNBXXBtjg9ovsfdFXHEZv7FtjEuj8zjGnjHZUEoRLUeH",
  "key5": "5Dba88cvhwu6YtvP1PjiR1fqwAoQCPsndJTy1KucchnZpX9tJBotgF5rQwLX46pXX7AmVmk9bUnSt4afSQ21TWVS",
  "key6": "5m8aGQ1VfG68bi4suwXKM7CUAKy1Sw2nvPTPRGiSuZx1PgFRpdXEcnxC8trPmjV4GjcfrfSpyxpEP99CSCRaBQim",
  "key7": "4THuGcnR53tALrnpxDRAqtm5wbynkKYGup5aD8bAkftfvubR97LaKxaHT7Ja3WkqRTfXiZUw6EHE9Y8KcD5tbJGf",
  "key8": "5jYTVxtDHz5m4n8deV8kxe5Tz6Hg53hpwcQ337bLTFTrJ8YmaZeYDZir2Yoky2zYLbHHn5UhBq8CpEyEqvRfdyTR",
  "key9": "654h5dk63zniNEcN8wyuWe3yqekYoHGTERM6WwkH1XPeYi1k4XGWSW7uPYguaYxHMN8oPasfYWk91L9NiMQSGitp",
  "key10": "2WpMspsX2nRyWALuvJbWkVXV6UXUUHky1aPjbuAFkjK76xDFT29AgzQ7vjyZ1TAysSBFz6cpzTL49pZXfdMWHimN",
  "key11": "5dN83EfZU7PRNvD9eesR7VaekCs29bevMXx5fDq4i4jBzpPZiAyu8df1vJ4CMSGNtW6GYC4MATTyxy47MLo3MCXd",
  "key12": "3daKVFjgazhcxU5ikoNU75dhYGiSkjBdjBrm9PNXsnXJ1DTFmqd1hcYHddNMvPxLXkPSL85A7cXvFakrWgZHTHAM",
  "key13": "4vt5x2V8Y425PBPw2PG9MoFdte2Vy4uDpcyidHFvfdpjARHRtugwiW1mKsbQ7SUqVzPuUStEgqDXzgUP1Vsd3iGr",
  "key14": "Mdyms8k2CNDLF6nAbK5iSiRE2tU2pf3Vm6rQJS4UjmBMhP6wpX37hKU6aFFid2qMuMavoYkExMatJBZdpB5Fdk2",
  "key15": "3Q8Zk7kLwkEdBHbxMqhvo4SKP7eStgFfFNycQAgzKWH5YeyKcuvUVdKBtZFhocu7jDE2P4rxXxv6Fxexkfx6XMM8",
  "key16": "5u3G7qEfJeTt1Y6KdmRNmUTsoUuz9HH5CuehKj1WDzoDo1aqaTHSpZ8yMmNL3jCm7y1TYMk8X85JEwdTQq53UHad",
  "key17": "5gcteSiTLLgZiQq9FKy4NQh8EcWLsXACtQJpTvgQSaeEzZwpAoHwzV7QzszwevEqCyS4uoqeYFhnREVQSNCHRR4E",
  "key18": "2D9bnfUCNuUkZA7iZn4j7CiqziFW7vF773vJbFDu5nbnmrUfpBGiWbtXVUzj4bHk18aZSJA9yPmAQKpV323XpJdr",
  "key19": "3dnJinoMCx4JwWpPLYTCLzzXghhNV2xLKZtfoi7YNFzkr2xaugJtqX3RVzf44ygmABDjY8vxsdRWuDX7CqkeQ8yF",
  "key20": "2HyoVjozyenNFrgGKA4kWkM3AXiEg6X9yWNESoN5utrmTwJq23SpUbTnRiGmkndvT7K1uUXoSnGPR8pqedEwoq1Z",
  "key21": "3nUaHG9zAjY8Sm6eHHBtQ6ik8PGgQZTK1FtoLFqPzF2AaB25tADGqU7L1Ka4UEqn3HsJTSn23NbeaMUMtW4se4sy",
  "key22": "5h4kL2uCYa5PkUk9adjxCJkKq9cTz9Uy1NycDHcmvpAVWeqpQ6T5MvNpLcbgNNY4dws5LQd3Bqj1totd7cLj4TSe",
  "key23": "YaDvhjnkBACNP3QXqrqit9aADRNzjemTYpTFH6LKkNtQtZbx6A4CiqbFHyXNgFEVzB9gkgxTVAadwwoES4EKZSG",
  "key24": "2BGDYrZacJuH4Lf24dJbBX7i2yGnAUZdYfdR1fgVVoL6dgqy6BMXyhZsP6wLKNi5vVtnRpxquCcZTLc6BYzSTfng",
  "key25": "4XYy24Ek7NCbGcxvwaNF8KWiEqg175PS73JAMDJKYihQsbXkkfKc5HaRmSSX7VmX7JH2xyU1pBRPatSwwL7T6wUV",
  "key26": "2KheRv6LrJHTb76HQnnDtGHa214Txtt9qNhSFw31PkL38VuYgL4HqRCGcy5aHPxjbyyui3YZ7oVKNvNXWBH3sUtD",
  "key27": "3h9m7bPCmWwnNHfg5brq7MTKgzDHSHvn8Ja8XRPXVVPTMMqfNja3KDBdwGMyQsWSrjMo1Bjp9Wp7tKUBifaupz6g",
  "key28": "2P3VpXnDYDkrHdWMyz2bodeQu1Xnb8oAYEAcEzP8eEk4fbDp74prLynLgs2gnQb6ayVBnFxevFVYprXCa1tvFUDb",
  "key29": "5YZaoxBBPbSccC6QvsoX5QaEnYrFUSRVeLuHam3F1fqtLW1o6URqH2v6VJZwJMtXgnTFaMLixFG8aYPaCWXoDQne",
  "key30": "5kj5G7tj5hS5zhT1Z4zEt5yoxrK2PJG9CFXBfX15b8Z3XWivfASA6hwqQBqm98mXboXVeh3TorCxBEKYJHpEJJcz",
  "key31": "prgkqSgndTLi67qEQ9SAgVhmecyBeVaGufQ9dGcSqH7d3AZ8koLsToU1NMb42kr88YfX8VvtYw81i6gFuphvLRG",
  "key32": "521ZuTkMCSVTCXRRpDQ9xqWgeoMUotSfmGCZFRvG6obXkaP3WqC9obhVKzLp3N4Pt5pGm7oRThuLXhc6Kb4tn3xz",
  "key33": "2THNfYiiYvZcjUV8TMd1q2u7RgA6VmXs93bqWD6LvpZSzUCfovHmUjraJKd12tegZ1CZH6oMvTGhFXRo57QfETQV"
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
