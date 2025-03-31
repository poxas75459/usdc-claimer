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
    "3o1AUnSdtTH4PyDD2FQ79dr6ihNC1XGXt1gmKpspSmvaSk59acJEXXzrynhMbajPVYD4iWKxN4kMLuNkqQRGs7fP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bgttgTq3K6oEkN79iGxseFkEHQBkVDnWDwq7m92fip8uhPYMDTDU2gJHYg9tf5MEweoyUnV746a9GXXeSyhVC2q",
  "key1": "4bkBStPi4r9M1p79AXed2H9AFtRMnGBwS1M6oMmBJ3yhHXRrbGTi9hhkAcxtiM1ThPrLg9suFM5kHkA4MeSazLVL",
  "key2": "5fPGbyRJWL8mMTNh363Jrsxvt6Qu2fuSNbKKzuwzKVEhZSAc28xvZH1jtRvV9zXXmGB9PA7vVoE4BE6LYSJYBDN5",
  "key3": "24AkWjvsGPbM7K77UGRXN6GpdXw3XM4AR4BVg2iAXZ1vUAb1aZpFJXoyEwb3TVBUPmuKYLrLSY48ykeiUYZQzY2d",
  "key4": "29Tq9ELSKS7Zp3CE4ZiQjKjBjpNkpbnEhWLECZkvZUJFbCiPysuoHPN6T97aL5F6BawmEBaA9NEAFCDA8tpEfRwf",
  "key5": "5ftt9i4A3MqERz1VLV2X97npeu1xz1zSrhquPDVRdkma9UrWcqBetPM4dE3uT4ZYqGVHsodgKtAexCL9qzn5FY8K",
  "key6": "5F32k5pHne2MjwvV988dNadycNry7fAFiDFjFAQeD4V6JFcrcCHqT57K7oDHFvHSCK7X73DLTrXpknoHWoFsXKmH",
  "key7": "4893Q48A9ZBJMuTDWMHDR7D6gehgGsWELDg6RGAjchhczxEPmpBSr2KJxsVBFvWqTE59qw9XKth3aaCmiTLtTrRX",
  "key8": "37sAmjxQdM1UUnK1tGEAPu2hWxJv61yZXmaX7G2A4Ba4gDWYPiQbnm7MDrcfFqSrQ5jfSSMLcumQHU1sVsxsnht6",
  "key9": "5PP6rVUhFvfWGb1etyHSg93mXAfGTegWShqbGn6Gmz2XEimSrf3xYWRpiy3gmyidJDFxRKFUZnhAotToKNXkoQLF",
  "key10": "5XySiQnfNXkPLMLz6t33TuiouyDwrdfRtSRRuSrmZyUskUopQqMkUga9P7ziFCed8p2GdXBto4d7p1hJwhjsSrUz",
  "key11": "2LPyaFg191r8dX3PRp9T1EHBhYE5sGjxzYEMZFrZsBNo6jPpepxfMWgW85PR3qSYg8BokjVAP544eawgUhXWDe1Y",
  "key12": "3Kz6iKQJjDSRSAyYJv3TGakipJxGvfLNhQdxWwWf5JeE7xqu5CJ787jMMiQi4zDmospaXNTPfyVT9pLrw4SKhEuB",
  "key13": "4Q6yUFxSd1rWe4cTtWyLiLYPFd4FSv42A5t9tZBEyfXSw52RCai3MGMENcbJiyzLWFpXY3TAFhJSsTdG8VrFx6Jh",
  "key14": "5UefACQwHHBEsZKx9SeNECkBnqSoRW23wjXwDHuSuPgo8x6P2XN7vUvTWnb8DwNHYAhVVv63rwadLCSs3sMUoSeE",
  "key15": "H6Be8sdfDF7fqs7jzAHLmeZydLxaGP6KsdmLciMLcCWjU97e7xGJJLsuSYhaNzUZ4MBfCaKnZy5BdwEthc6AR1g",
  "key16": "4p97NDbPEZaWMwECd2Jw58z4Z8Rze2A22CwVKC385SjrkqsZRQAWM1ptjnidZLbpmEb9AyAe4ZfyQsvUVk1TpRbV",
  "key17": "5mz2jq4umGFeZavyKMBLyVRzSTtSWVBvcBE4JnMg1ip4TryUg4SqDbENs2ShGYt4s4WKDSeLRwKoG3XrPw886r1r",
  "key18": "5NsCvdKZNggfqsD7sK63CcaSYC1Xwg1FocEE2uMtJkqjrVd8akohiVy7BNGiRq6A4RWuB24wkLrREJG3AAJN1iL8",
  "key19": "56Z91rxfy5u1V5cijFjE1qFo9RiL6tZGzEii5gJXUHTcJvBUTSKxfrmLrn63h2PGYvRsC7HZibifQeeWhzE5VU7t",
  "key20": "57g3WwwzRM6xE5mF4cSUyvLzNzwvPYrQMCQZeQrsgNfuNNYfjjbfUNF2Uc7VF5R4QPPWYVkAhS74hREHDko35esc",
  "key21": "2YmpNGxFgHfDWu6uaXMiebpzyfRoVvPxVb75voq4ukPcHvo6fQeMWfg6YFw9XVFu2K8PXVjzQMDNzPtZrAmtpNxo",
  "key22": "4ayhx1k6RSQDn7RGCpZZEV2VeyKxjveKKKHMvcJyDEF5PMu8BiScqix8fisUKuzhAaygvJLA4Dvvo8W9yot3C7gz",
  "key23": "456oFF1vQmoV1sAbpcFu6yuguoRxsoFgsCV3jm8gfcjhxmqGeDqqmvpvwR6r2FDtPr8ZE1cyAJUuTxXgbPcNZSA7",
  "key24": "4RQfP1gvyLtNfzunDgiCaxwRxfRYPRQpMUQpK68pUuTTYiXeB1u68ZeAWAjzZo1sE63b7LrbFWBwqs2wodVUmxer",
  "key25": "2mzC2naF9X8r2hsAvYsYXTYiPWybVDkapMPgtr4TMXxf3bsr1HbpoTLgcqWt3PMwoMDjEq6XyeSAmCLp9naTzJWp",
  "key26": "42WEhLWYYjM45qUctrLCkgp1CmU3UNM4Bh4Ws44NpGdCpB3nSSiU34DxrAEoaV1vbZmWarKnfuFMf2hHZJsKQSvd",
  "key27": "453ZgVweLFTFtfC83bGktNYtxDBWdqWfTNVkMNobjLaCozscdwNEikLr5X5o8NsypzjP1KHe5TdbqSGw3c7gFscJ",
  "key28": "ZD31vGh3N5muVJxLDwZoFafMBjd3CACi7HXm1UKk8hUuRGo25XS5sH5nbRg3uQxpEt2voziVGuhmzvgPwGYCdZC",
  "key29": "5fVmdWqyZgQpd1U4Nv4HReBDx7wcE1pej1pyqYGrgAY72ms7mfDvXDPJdzjPCLmxjREmAKe2aZaRhKdaRkeP9gzh",
  "key30": "6749AtjxyyBWcx2F1pCcErC1c5tV6YMzmpZMEbYdasezH5tB5pv6N2VEds1xz1dBTuKiCwCdhWdGdoxffQvWrrVQ",
  "key31": "4Df1Q5fhx8VKZBgJ6oTv94h5o2DzVk5egw4KQct3zkKYVCEYCePB5HtXhPiui71MZffAN2b8soxSHAywuxn4uzVA",
  "key32": "5nLeDp7yVaDSVMQkEibYygTdK4WjSLcjUHeF7i98KFiLTw5UTCQuVGxGsvgs29WrbJDQkJmjjmQPmVQxg1ExkKXd",
  "key33": "5N4YbDhwU3N7N1iWDPi29gTkTNwZvAYd7o6jtABhq6Q6hyJr4smHKo6LugDhMjPmTJeTznvRy5JGv78rzyc6rbHk",
  "key34": "2zhhe3dUkScMsUnwe6GRv676oD11PN4qR5MUrgUUEgFL6Fp8y4Gificvu64TVKQ8HbKDZ7TBxGjWs8TzitambVtz",
  "key35": "46JMpnUHvD9g5o7mAvNGHxDS2iaMgwdNwojDc9wP52Ze9VeTwmQdPoxgkWbquFLPB1yNG8PueMqGqYZ6hAVVNDpL",
  "key36": "4w6bxJ33Le3Gt36NhnjcBnGX3b8ic5TnxZTH1TfkxqmbcKbDj8twHwPPQDMVk8ad9mxAVVEAvjiKp2SP6o7hUotE",
  "key37": "BUhKxjMtx21NzwQoUjS727yLrUPLC51of1Stkuon6FcLBuWzZK7YBMvDZ1uZJQEtLMwZPeZBDKzBo9GXTqWktQA",
  "key38": "2aZPDVstGupf7fwhvdufsqgUC4ymfzPQaZrWeLk8W9cko7jCfoQEsgyBoBbNNNZVLhab2jhPuAXKnYo1TzirTiSi",
  "key39": "3efys7b2FRzSWNnCTCBvjo1s9jWXEosxVM2HvAWK9Uh6GG2gmSqoxtFHrNB4yfpg59LyrA5EMzNiyiiMtcRFZ3u3",
  "key40": "47uTZPhk9S3hD9w8cUTJvJGdA7MzvZPBdBwSxhXLk54FpQuE6tGw6GpGg2NJV9N9rS2K6ohVgBqEFmBY1VjZ1fS5",
  "key41": "5ogr7ovc9s5bM9v7MM388qP8Ld86ziaR1JRAuskkmPxu48pjx9bHcKk646SHoBk1dq2gjnk4zsuns4pQzT2UqLZq"
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
