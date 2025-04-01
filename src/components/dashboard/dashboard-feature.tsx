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
    "2CbmntBGBdHryNFukG1WmcE7BaTSycWvk2uQTmh3vGGA2kCTAFFW4rrMS6h3tH5FLGcvxY7YjBwxjaSVZy6nsDBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjPYF9P1CC3WXC1eF78b6ghNKiijLYiYcodMbmmsSAm5LkgAPHFpYnmE29qmUYYiHWAwCcHtN4kHKr9jiYWQnfN",
  "key1": "4zy6UYmTYNaD8aHvzXNNgNDHu3y2vWnuqoE1BAGctAqyngifdTEmoPgMftEo6H43Ndye5Z8JMWwn7qLaZD6CSKkZ",
  "key2": "5USyf1tHnfAj7bo93ynzgYBWKbzdkZqYBXzWd8Nks6jXi7AcjcKn82jpfRoV4gdwq6GNmVXxhSeXbSmWE56UMQtf",
  "key3": "4z1tsPUbd9X7eCwQhSvGCKmK6D4xN9u3mwrmouX1V8PDudQiFjCxLssTrxnszPuBULN549VWbEUZ9updiYrbqZ6E",
  "key4": "3a6yytvQbs1VperWst36Ee4YEy2cxn7L7W9hQaRJBqtE4mgdwB9muNVbnX24kh5RBT5gBoxBFDPKV6EXzojPaqoy",
  "key5": "28gkRUhBq9NzwMztiKjxDZsxNGjUnCi9Xmxdz4BPY2xBPoAkhDt3QR4pj4aFK4VHFdQ2BoVDwgi19mp62BAkM7Me",
  "key6": "RhoX9D1g9e18FBSKUi3tCjwUJ2kmtkJtxSL8pHTi2xhpCwLBwKbkF9pkLMTyA3KfpWh6opy18tZRcq2hdNYaFYC",
  "key7": "ttyhntqLHw5E43KUQc87Y4UG7T2n8bJa4ZEwPTBA2dRTXyUwheCYoF3StwdkoepcKXHnvWKupBpK9avRaAc4pmz",
  "key8": "DKqvUUgwPZ3uDk92jFB3Pwb6vGk3CgUSjvHRg8js67xsXpuZ9WVgS5rBu6BcFdN6Eo4HnECgbYKyJoXVPsTu93g",
  "key9": "3eXvLj7cYgVx93QwaEprhVk1YraJUVEAUw21qCqZLjiCtcjt6FcUdH9m1xvU5iaDXqNvNvwqpWf6GAGtpFdQ6TsH",
  "key10": "P3LVeW54Sjaoods557mvRY5mS8V2NvXJiy5AD6wQHYRvuD3zCFZUYMmF4QfvnVTMeSrJibCL3derZbXnRP6kyyM",
  "key11": "5yreoRzvSyeoemUKKqQvxNzMpVDKmdAW4fa7F8uCQHt69oQ9sqeY5tj66WArGKRj6kkaa2g9mZBkGsmTAtoYAZvc",
  "key12": "z8qhhaN9uC2g4CXCVkSNQ7LdYAA5xxkbhRcvyhzWvrmiAndHsqL5Tc9TZPAkVBcQZxc6u1V6YB4xtLC2WBTtPQU",
  "key13": "2XyUwjhKBkRFu25tMzKhXLrW2kqN7aTAtXpSnpkPU5bXnxa3bTTARK3NPodHt9odgbNutxdukfndjRcFv1Ajct6M",
  "key14": "4oppnGacWmnMYDG3Wy8DqXjXP5pkgartMtMgu5Uw1w7AJ28ecuHKstJNYjeCzck7kLphNytGUsA9m8Hr94T5D9N1",
  "key15": "5Q8m6mFaF1Jc9JbAmVYKaMyDJwx1rZCwHXficphFn7rTCm8dpDQNaZECKbMBpqFsVMiMqkmrHpPZvtnSpJHx36TC",
  "key16": "4yG1jCWHWx2x4hAho5KyHevXqiNYkiarZdu7yjWtjMLMzjQ7zeqPdMmozmqnUbyAAUFjdTnK6PsdeZUE1jz1skEp",
  "key17": "5VSUWzmQU4k1L1u2ZuABTmrxHk8HeCdTZ9xkVxu1dgPijCeaFvf8ixNbnbyTbWAARTiWehaBLmnwprXBJHBw7rBC",
  "key18": "2vnFyCtZftmmK2z4Zs19vdzB9G4nbP4ujaZxFK1epQbrc8sxEnEJ7btciJdELQXFzUBmfVjiAR1jiAR5TbPdH7RY",
  "key19": "4hw6gwQo7QeDPpzQqDg9R7TnFUt2qeCWy32My1hE6id6YEQ66ZsYCoAMvSXpC4QSCneKuLMsJpN32hFrtE3HZgxn",
  "key20": "54NVcErAEC6aFF1YGqYJRa8GbhHAA6ppWA8Xp5UgvjcMhm38b25RpzcGatkvi8TpjzaZ46WB3GjKrjjHSkCQyiJN",
  "key21": "mCnZPY5bmvteo5MX5yAetH6SL7r4HcoAZ4wWjTnvDUSHkNrN2G31jMSW37a227RJNiQpzXSRqtUxjW8YWrpinFs",
  "key22": "3K81EDn2y6rpxNQgv5GGRgcRk3rBuEVXeReoPbHTJ86gwUMZG17mYyKrZbkc9CwYaEcUpZLxxKqd6CWn4UupomP",
  "key23": "4gsAQZAqgucQjCvosoGnk5nromxhDqNWoGabwkXtuXS6p6XEXbg5SUidCpNQi2WKm2RqnEuxxHGb4kGdus2ZArNd",
  "key24": "gn81bfmrWjQvSbS1MwNNHo9Yk2B7AyJkesCrRdJ9etpyK2AxVqbfSQmCLCoowBCrnZbJvVfUPt5ZBz8zNJwxYPu",
  "key25": "3SGBDwSomJDDi1i5fvEmtXr7wTqXfSrwwKBMoVKm8VFkcWShVKqS5U1kU9YWuidUnFXqVPKSRRDb17UzptHe95cv",
  "key26": "3hBThku4Jk8Z6exuWTifkwwxo5vdZevmosvdLq2wVcJUU7Xa7KNo5JQcftujMQj3yrBRR7Qx2qDCNsCSMzBmCN6Z",
  "key27": "42tfFv3kDnbENJXP6qjvj4mzmV1LzMRXRgsPKzKPnVf12jaiVvhbRSddLBnjUEENrSacnbDEc7XKK4Y5WXrCU3LM",
  "key28": "5Q6YyWyLQKeHezBWeZwASLiRJFoKMbuVQWctemVy388C72cxNzTNKpcSrq5KcJTuLSCAQVL37npzYNPEpcFf1jw9",
  "key29": "5ux7vEauq6kLBEyiZFt6R6ijNCQGSYug8YimnTc5mPGNNsBPJ2ExsLpZaKBBFN46Hx1LHicB8paohFsYaUqa4TYd",
  "key30": "pHKxuMREQjZJ1k2eHMsQowacfsHknWPu2Fdg2g83KxuZtg3rsVU8UvqduiCBLNSam5avGDpjMzhuYr6ZKFgWwJL",
  "key31": "4brfSdZ87zjMSd23RHzNm38ivSNV8GV8wkiirwJKprBcavvPNApHiTgWLu3k8xrgFwwxfnfPiFf97nULriiJ8NR1"
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
