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
    "3bSPeFbSUT4NNXdYqLayrsxgkhWUf5dovFFbWVfFszrPyNVt6d47D4RCm1Jg9zN4n6Lbf5MGGKsjmrBpxRe29bri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jJmzEpdWoRJe9sV2sKv3NqpAppifJnH4ycBdAprii6kFVQteKM2BHrXo2s55Y8AfypWNT5xuftgMBDdu7ZfK6HW",
  "key1": "2uFuCtfhb7TDhyaTrwJmLr3BvjYZ6gAjNzxcSMf6iFMJe9pVbCSq3Xkd9gHERYfVMzqvKzgDJ3ukUgQzWotNUsD5",
  "key2": "3MCFmiihkK9UUjmS32KJLnqYdQYQnFofYyG8WPb6372rNdTCvomHZEUkKNFHHxRJMLt28HUUTUKBq9znyQZtMLEN",
  "key3": "sVZPCqAxft5bBcz22WddGqt7vAGzHqeCPezHvKhsf5GLbavTRwep8zYJp7aigFRpz4XPavi9d87WR3VY7GinSHb",
  "key4": "2aafRYQ6fUxPTZwgbJpct9SA2tXdR4XiHRMExamehbMr16ZFxzH4otafEb29sbSN48FzhLdxbXkUeHemTJLh3mBY",
  "key5": "2SyT8woed14FC9gLjeRktfGiSok2oQhELdWQ5ThTwTvQU9ojX5YXka36sYCfoof59pKH89BcPHJP325XvAw5ZQah",
  "key6": "2rS7cgmYkDmYTfGy29ZZ9JnUdTYr8X9zrqTZwHuLuwLLL1skhfUMj5RZV6ugSxxj7honcz4qKCHfzSmpnpWiQHCv",
  "key7": "2BqcRDi8MRw6FBgcWs5kvmx3oXEJ9CF4UEi2gQM5LGgQTATxBikDmhayeumvLoQs5Ab7gvCabbQfSQWxgrmtLFXN",
  "key8": "2RkTvqUCBLBmh3CytxrXwTLALvYg8gJX9QdhvCYNiLP1rUaFJNhqet8Z1Qjsfh9gV3jnqPjHwUPbAiVdfw12uG9W",
  "key9": "qbgoeZWNZaQNQXyfx7rsj5ABiJ2J5BnJniJbPQKEnZg51fDUQL4thTSc5D4EHAEdKPSxfoioW9WZE8kggVRRpVT",
  "key10": "3jmkE18tdthVvHErA7G4zbrHppLN3umvxTDhDJ2rnN8SGawwjsz9DS9Ku62yHLypj8g5vmo1n3AY8a54FupkbocR",
  "key11": "5ewXsc3ka6cGYJ5PUsPShFmacUjtfXERTkbYrWBkBVPMXc5x4XU3B5mYqeFZNXHJ4A7UWaQv9R6rDuY2jaL63heq",
  "key12": "39emttFHPmNdjcVEPWHeCUtnmjC9XorspLdEeo1WYHLVctPxsHybndUPB54fVcsRSPuJEuyXXyFuWys24FqQqk1Q",
  "key13": "8ofE6MrcUPJKszBWcR1BgWy9iKh1CkJESnu3AFmkkavmN714wFT8J3mV97bUjkakA1cgp5o7VX2ojTMdtjtLwP6",
  "key14": "3Yi7bNkmaAt1ySxmAFmMacF5ftgtB3NZKqymfEamo9whgJJpUYPzjh1AeT5d6hjUs4tNeAXhh83Q7mku5pvk6747",
  "key15": "4zbALUSSCeJwkekrpkXmpVK7FUGfrDkXhhk9X18eGr4MXL2AKAZJ8YPynbiJerEozFr6FS97Z4SnYWFc7xifdcF3",
  "key16": "2Uvo6XvzLrhg1ZjphbJbue5xQFrXArPBDd9PaAqHsdVArRZ9xU7Lzm2oqQYzdJjn3KmYePxkcuySPd7MrHRYUzUU",
  "key17": "uxudBWptQwDdAYLyUA6hXosTEvbATHrTVYmEEgkkXH8MFuxZsJqx8KVaEVFeh9QG7bLxB1NUqmtq4eL62SGL2oX",
  "key18": "5oujejDt6FmvKyhSigi9DYmMXUrZphLXFvpzXaeyiM9o7zgaRbNgT4u5smUvRn8HMRthqWPQpSZj2U1jBYpgixns",
  "key19": "4c25DKuRFVJvxQduPJBEQeAHeY8Y3CqkBgg1BpjiLjXack3iU1h7qPK7r1fEYpF1itd361bPNXYpbgzcdTQgycN3",
  "key20": "4Q8eGUp7bSWo38Z771DZJopHDov8FHs5pjLyu9PaqKE6d9Y6RU18jSH2BwTj6WZcuwU1vNzF8C1LFaaStvkWjacQ",
  "key21": "35MAMi6KRgxNY8i1J2aZVEG959D5C1DVRV7ghSqQ7ZFmFyE4WRSprpN9pbNzsGaCpe1um9o5M2JzGuiMqd8hDj8Y",
  "key22": "5sCDbbiBz9yCN2uu5DEfDmXv7wKaUNbK9bEecdX5KbZquD8y56FyCu3i8cPeqx76G9LhRAg8JBqFjRvh7XPHor1X",
  "key23": "3ZB5QDDjyPGSXDmMQNQPYSiio6tRq6iJqxkWHDkuhy59FZ74f7kKzasn6c7UNydH3Xfk4Dz85LBV1iD2AKNjLFVU",
  "key24": "2ys3JEGQ3y5XA3t5YeRQ9aUZffwmxMqM4zVxKRDZXLRStC4kSvNzigCCHaBuXS9iMiYdrvb2PgPvPru4CknBMmLx",
  "key25": "4ajVUN2vS3hMuHLbp9r7mKqAsWxLbFfUU6au5z1vsNQXcpEN8jmFcDgnq1d4pNg15bBFVMKk9MwYz5dX8pbyMGU",
  "key26": "3n6bFtZf5BYcUSDGMSF4f8hW9veJr5RgqMYz8YSnjvHHuHYZ934tfojQdLVJAGJbtsNo9xEDMKyxD2SmJaYnhNpF"
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
