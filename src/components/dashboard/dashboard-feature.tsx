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
    "66QHRgdst7cHyeHLs2sPsmEYuzx7TJpMzpMdvpoZvfw7tGx3Arh4GV8x9yhaVwDhavGLawo7Ly8S9Kc3uzVJ3tmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v9y7ymTM8QmCFbY9cvp6Pkk6GpzEmUuE3oW3EHk2NMkuhgrxSPsM25sXMezjiixeZyK8v2MmjNWtUYF5YaZBkoz",
  "key1": "MzkRBGBhau1DNocwbco4HQGh2CqAosE6WufAHGzMKLn8zLAEat2aQw5qzTauKrJWD6gVDjCQcD5F1pW89QDfUbq",
  "key2": "3XscJqgbsNqK4LDb8naJccvMAX9RbztybKfRmerCiHiJk6psEmtfhLm1FYvTharwU82uwxj9gEV8XQQJiEv8e1ZE",
  "key3": "5q8526EcQDfR3RpjXSdohz3jhQ7wW5g6caxHFt9WAUpzBQjGmKKsKUz4GqGAnsrrcoAY5T5r5DeLZMEoCwb2Knia",
  "key4": "4n318cMbuHWUe1m51JmY83nkA8jfTNQS4aX6187gXizmNVcqCKqVggL9YLPJ424VDtfQrZrxVnP5WZSgfW9oGeeZ",
  "key5": "5wYHJZLLQ2GhfkPTbKduptpZaVE1enNUZgkUQydACw4YuXQhAEv7RYWzARM4XK1yV17Ro7fUrq4Gg93KyeMr2pW8",
  "key6": "2mzRpA3d7Bpyq6c9cEWgM6qrzH2GAc19eKXrh6a9THJF7eBXoMrmC4XpMSwdCBC5bqp7RApdtJcHaSrjYpWaaEoR",
  "key7": "xABx7v3ahKr9Ng99sQ5uQQfVHysP5gzDNDKsdhiznqPBstABYKeUDaD3S7MdAT5DXZc8eRupsoVPVGLg2EZoEci",
  "key8": "29gY6285FQCJmTiiBbAmedncvTRX9g32aBSJEwR8G46WSzTUGRS7gA5DqoBLEFuVNPbXzWeBmc5Eid55einGU2Y4",
  "key9": "3uDZJZfsJphv9ELBe2YjN2SGBtWnrzHg8CC95MM4mGGKCrH3ugh7jyJcPxi3HZkq9yruZsfnt9nbqzSzE21VRvxZ",
  "key10": "ZUXkqgYbDZnnWMdFfskQd7kaXJFbJ148o3hrwhkSTn7QWLs8crJiAMrzYHM5scSwGouF8gEB4Z64XU8x5qbVEgz",
  "key11": "aTCc2uDTWMFmnwxP9wofc9XaiHBWjdwWVv1cHVfuysVQ29pGeRTfJ4u6efmqVMqYLEFCmafwMEHe2NXX9SpAGab",
  "key12": "3qgbTdvE8hPV6DT6Upq889xTMX19q9RW6VbnShpU7kddYXSzDbGcmVTU3FSThqWJQyC2FikzyFeHpcPgMSZ7t4s5",
  "key13": "nd9aXzea3MqgFKdqHXdURJhFKEFJhvoJy9iHoQNmkpyWog7qzQg6BHwpnZ9mfNNvpsb1YD9wChdsJtc6omL5Dr6",
  "key14": "LgRc2yDuMdCxWhqAxSL7UmDoQAfhH56UuQdQFvrAnPZEn9iq9Bv1pAXYiDUZxWzu4iwRstKAAzfppLsk89y4SUa",
  "key15": "2ivYjyaFfJhCHFnDpuBxZsX3hWTEB5P5WBgLpSLXVd98EDrs2RBrB1Qm7JeEo8wRFMKSJpiZEPqUSrtbFe1UTnnR",
  "key16": "4vJNFpaFGLUdX6xNfKi6175p5P2k2dG9nhq3uPwAN7HVR788MqZvCiBtjqzGXqzFHQai9TBZakANqA6MwBD6NZim",
  "key17": "3Mq2HhSB2fDKadmpoV3DQNvcFxQf7jYpHLECcDtiZYWFdHZfeuycBQi2FQyXUf3SciEuyig8JcNU6omEr5US3YGC",
  "key18": "Nmj3eWpgirpD1AnXDzWtzqws3rwtZUCyvRQ3zJL4f5mgDE3ovYkH3sjzLjoGzAdx1yXF24TKNcAJgjPQChcnK2q",
  "key19": "cVX9hNetMRE75zwaD6dGyr5XEZpddro6mTgLEMEgFP3z8HZzDbrGjeLKFpTTwdBfSM5NXKFgM4uPTVr32hPNyXY",
  "key20": "3MZe81TwtMSJ6BTXVxyXxXXjJvPRAYGX98XGggrs4393Ap6VgCL34taLRXC64HwRoA59BrLCvquVLzxsE16GaCWN",
  "key21": "3hJSLCPRrw1XrBqYc8DzSLH2ZZhmoJRk1MT5steP6DEDxVaeGvurwbm6z6pBnawinMJHHmBjbgZ9Mec5CwuB6mKc",
  "key22": "2FKxGdB1VUjwsJZoHFLnPfYzYrgthWXBgiuU8A4VspWNSmpjRbewkD76Pp8kodp2Bp3ndtaZkKJKyebYfcWnBati",
  "key23": "2bMj4zzh1fjBnLoJBkDp27h4zQRzToKmYrDqZurret8FDkX1b9nET6Q317o3EqX9DAUZRKCaVbwMzqfxMsSpLsJW",
  "key24": "eu4guE1YU9XuvJJyCB2wo7dj5LpCeu6WwfJDaN4UmMT762doqEf1Jzm8rc4PpwXpB9cLy3DeFUm3jnW5EPiryzi",
  "key25": "3hY146mQaLPQ1yM2RmVGEEmf4GFGoNddXR9rKoRBLX43q5MkDcSgc753WMqumxvfmihKb78P7guvk1DJnBGFwL6W",
  "key26": "3pzufJu5o1HwBb2aMq2Av8VWYhNqF25WSTXdmLYMzSdYijmqWrMGqB1R8haNukzayi7D7YZCJ89uFpYa4S9NkUfc",
  "key27": "3homa6Cor9mmPapANwERR4ADSC7TPoTXj5DMFzfGZaMTzQQ5dwcefJuBinJC5JcvSWyLTPUTB4JnwVCxvxG2kqLK",
  "key28": "gJHhVxrLTwswpFDDbqr3xiA4Kdkwe9oKJcfE4NPnRxJtKckcXrb55fCsjZbMreJgJc6kZMe1BFiFGBhihAfaMqq",
  "key29": "563pfW4bPvbzweFfXrqBEVF71yWbLYiHKwsTYr7pmgq7og7AN8i92HGZuwzAKN9nGN6dRNuAhptyJUkcxumaNzpQ",
  "key30": "4gK91n5iPRhaFc28SJ7SJ8CVmoN5BbrNoH42GfFiFtoZL8YL57hVx4eWes7WpnuS5LTxpND9Vvw5Yek5NG3gyT6L",
  "key31": "3o5wp1oDYRdfFZMb7Sbeu9UhmjsvuHeHYttuyv7A224QAscss5uUKJHkM3SVrcoEmk5oTet6957DNcCFLDigbKSS",
  "key32": "5ii72ye3MpDSSayKKxvf1auL2fKDxyj1yzUuoT4zTXpiaC1hfaCP2GvzTbR5wk7PeFaSyEYTwV8d56huGcsrp2y1",
  "key33": "2eBek69FdT16MGm7jeFPrkjx8gJL7tgw9KyS1jQ4Mf97Rce2yJJvdkbC4YbX8XhrAP43WWzVoA9ifZaeMXKE1CXs",
  "key34": "2aPExSLGAqtDUCLJt5g8WSESSKSstf1SgpWX4cocUoHH1QwD5qYb8E3uzpT9N898gKAPUXZPvRvgGAvBaNQ1JZmW",
  "key35": "2yKPMJgrHUZQ1cxCydDZCEqUPXVqwgo3EWUnoeHfyZKBnnypWHCmkaukx1xNeus2u7NpxxFaag22UUTArkEGebdF",
  "key36": "2eYZJXoQAz9LDSQaZUVx43b15aZqi6uPgXopojzSUDnFYKbHZfYYzVryzYa3TYCtpWHA8e6p7beQQL37oaYQnFAV",
  "key37": "acMsSJaBwc4cS38D4boYFLUfu4xMavBafToRsFLdt8CTUspAttnB1e2ZBCd7ZMFR2NDaVRjsmYehJE8Li6Skugp",
  "key38": "544z92Xz987C7VFzgd6gKVmPRFgaxbs9EsMiwz74abB25XwEvRjuGXEWto8jaeH5rrqxaB9bv3YZ2cJDq4SCagNh",
  "key39": "4qS8bVMkvjnoUed1maFMXuYSvzxMyqq6tUG9ByHSSmb6xW8hzNc6ZS8VuZmGW3bvep6mAhRCB2duw6asYX1A8Qgb",
  "key40": "SWoYwygRyFrg2RqMvRNM8mqmUmYhxUpPnAigksFbLwrRf9FbKjfvenXLwuZJGuoZa1qvUoizRSVTA9eJR2KK7Sd",
  "key41": "oLDziqDJzp36FegjRCKwDVQeVG7f3cMSfq6XSLuGyGtvxkQ41DuBN26Jy7cUxXG7z1AXqRwneD4pKhPVJY8sZqA",
  "key42": "UGckWqFAo4yKXtvXTvBWbLJ4dbokWMAJ9zZ5gcNsgMTJMhYutGC1Fp25mJeZf3mQ4923SNWL5zw9Ts1GZLdu5mZ",
  "key43": "3Bhqkcaa39tm8rSdHH5Lp4rukoaAgX1w8JZgtFGjYbLpLEjJXtBGihpi5Cz8cpXbNfZjrD7fJjbQrCqt2kWAr6nK",
  "key44": "3QAfTnpLdBtsixNfFvAou8qK78uqwXbgK1Phn64hfbTshyLKDCt33MpT9BCFkgvwuihVqGCdQTQSZVzhLgT1yTAk",
  "key45": "3GmJNUKFPGYg67QWubC6Hj1TrZuFd2WhuUp2ijmrTbwqkRiH47buBwtwQX97Looe655VVi8ut7pW5z4AW5EgQHa4"
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
