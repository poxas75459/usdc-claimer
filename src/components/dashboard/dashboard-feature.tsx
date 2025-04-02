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
    "3yC6HUwwiP3HFccUjLjGvNHcck2YznBr9LtLzcB4zsLTaRzojWUTJhacZy4VaodEbzX6F1E9y2t7r966dk9KbqEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V18TEn39LLLcZoah62JqFneMMcZfPcD1xCGidDJibKNbSgPVkMHjX9k3TdVsATNuNSWCjeHGVBgvMG7dra9TJk8",
  "key1": "27gTSXqFc6L3Be6MkVTPkz66yP2dCTVQZF84bKYinDuDbczLaikVPP9daZmZJYp3avjUZWkGcNPYsPRaN6VGMvDV",
  "key2": "3T3sVzjXpFfwmS8X3hd5fygDNpkeUqV188CSxKrxo3QvMomF3XMarDSRH2sFVYyJrvVSE3AfVRKrf8o7vUFqcQho",
  "key3": "HVu1wCGQ2VNDKETCoLR97EXnQzHGdrSaahjCWVBGn4AHfx5hA7i8dVasGA43wmMjJaocBMjmMaPELJfqqDhEcvp",
  "key4": "4uDKZkxbauUFUy9F7PyquSb6wAmR8X4eGsc22odLPpt9cBMidkPcB3h3r7mrCt4wEYq4n6SusRBYhQFQPNMncykq",
  "key5": "3WTFTpbx6bKHzmFZGruaVACKF8k7nNb9EySf3pqD1EFLw6zfw9gMz8GCR8yG5McZSYWJnbxXYPr9TsxKHjDFch7t",
  "key6": "594CPUcYhtCrGmaNtsKQgubMuJ1cJ16hLRzMQNwtsqWpt4dGUVew1UC21BXRg6YvyqPZqzGvrsD7mk9w2Yd6n5eZ",
  "key7": "4ZkCNWa5pcnYkGiqvcAM4UHddPXZMQKK6zH9u4L8NAAqaf2RqSPfMaFYsEPoDVF3h7tVzYc3MPJ9tE2MPR7zkSLA",
  "key8": "3aCXsGUhxX2KyQadZF6ueSZYjjBHsG9RdJn9kPTT8xaUR9RshdsR9VrEyQzKvEAYyi46PZBfWLEy5eFZaxyXSsxf",
  "key9": "4TLmrrvv27ZZwCDDVdVVAeTNffJfwKJifLJQp7fjiCMWBeWm3hwNtSmk3QT8d533pK3KQfhVKTfz34ZzLv87cC6S",
  "key10": "5moJ9zPwV5f7eq9Bz5BMT2hsQGDSNuj533feWg8CAB5PidXZ1KkUyHJ15uUBzw8sUcZZGrmAnJiMRHTXWTHWNyGm",
  "key11": "P2jtT4YScsxWv9uAUcWdRw5VxRLHtmvKquRJX72ZyGNsMfHYQpLuhTAL4yeh5ac4dJaZhdo1wUiwzbNhJUWxdan",
  "key12": "2ojwwynHcskErZvEhdB9DcNJ2h4MFiWUbwLqDWLCM5KJpkGkg3Ynzk2aAfSoYXJqmPPixHAQJH9Y8fcXhVtgz5JX",
  "key13": "43prB19VU6eHfFF6aSasZts8n1YtFJaCaw8M48GsfzGtpYVFydRdhkCCe8vSjfK3M8BWgdQNTgvCbxUSB3wgWe2Q",
  "key14": "4DEX6VyNqqTLcJJ8NuuQa1StbqWrHn8cDAcouXPtazoPpHKciwcEojtgxPrHQ1tu9zLYaKimTfStoez3FoEHR1H1",
  "key15": "4j8PXA3T5oRufQ2F6o5UnsxwesP4St3p4rVLT75MkRE2ZFfZQ3uDCU7b11JhRSKXhSQqBQLed2hUrtTo1bvUveVv",
  "key16": "HNtYty8oRPbHgvZ9Y5was6LX6mCBmBJg2B6HDerX2694knTUutyWSwZzqeVQqChvX7Khgbj5embwVuDH44WDu5D",
  "key17": "2dXMT5o6scKxtkaRhDsvWjrACiQhyQC3dums9eWPwqjNedUzNTuENxhHfwcNQrPr8SLEWY7fPNwtZHN4JjiMf87F",
  "key18": "2KQRX3LEaHmFwQfRSBEPosNKhMNuhGuJQhNH9yiSX6z5L8bd9zej5EBHLUEx6qzKTdRouDRdpUiXPYhLcsYMRrVH",
  "key19": "47UiVeEVHwukW6hNV8HiT8MXjsPbiBjfYc1oMCURKrqksaxitfJqZUBSimPwoVwe7jgzsdhsYajMuhX25zgRWL28",
  "key20": "5h3m5QLydLRUTEvUytCSXHyLXuMjET6XSah3kw9k3HsDtRCcsy2fbZSqV5N6ftgMp1TeCvcF1cCEdvnaXLQ1EoPH",
  "key21": "5cLcYqiRhKXgadgj1wV5TPJzgBEFeWt1w44ar4Cz97iASvqRzXh77x9GzzJeuJ7VgtZwY9wx4GV5Vwkk1SqDDDGm",
  "key22": "2A5CVC8XQupbXcKjgX7cykbP4XJeDTZEYF7V3dEX3vEX17auPRhNgvEavELH79mD1J3BtGWf4ZRRfTP6eoQPb3LT",
  "key23": "62xMDJk63gKYSHGVY7ipjFWyxoXFsxc9ugE246Zwoo1MSz8agrccdX2TuSJgHtwwYBXzfhCywxQ5Srx6DU57wskx",
  "key24": "5ZZpHhc6c4AcQN381CGtQEu7tMVjjZQDJYTDo34WXd1nWZJME8cvH7C8qJTH51rrqCtLLG2SM7J2V8QXPod2G65T",
  "key25": "4xeejP3bjdiRkV5KiuUh4kHvf7Jh6F8patQv2qF5BjctoobLdazp5uCBkTQ7LMjQZYJXpRdC3hqC1rgjyiYeKqJ6",
  "key26": "nd5Ws7iFSUXBxeDN5AwXhHjLB9Nb8Trw36ptvbqpMdbj8Wo2G2web47tYq5Kpedw8pyZ9jXL8s4nZyZ1HNvwfSh",
  "key27": "z6rqkcWNaiKuHmYDZ2XBDkQ772tkQbBE9YZGEsfpfyrVMgGzy1P6Qt5ziqpFrKR1Dcq3eEFKhvG3Lw8r4mTZA86",
  "key28": "5Z6DM3wcH2T7CkqnoNrsPucNd3v4RUKbwipRATznVvkeAgPJznfnJcrxFLFBpYTDkccemhBHzSeYbdsGiuCUKQ1p",
  "key29": "5Ch137qWcjsNktQLNDKdgBfYw63gVb6NmmGXmPRPNoCh3LCo5VfHUb5efK8gNVVtvf2XfUeXraN7YKejcMi1NGqA",
  "key30": "5WkR4ZPQSs5NHpspbtDY65W26KLdEF26QTYFYzpS7CSSYmALbZUCcKWqcYGYdHwpWXdWyfmZ6qrSXpCZ4ce8YsUB",
  "key31": "41F577Dy1KjkMjDRLwtCS8r5QtdQXDgtJHtUhrHedSKHZcwj5YPPqvJWTo9aSgHu2WnaCFg1Pf5PtjvLxLhitVmq",
  "key32": "2CbzdogcD4cSgN7mrVKFP4TD3QhHuQWJB5h48ByNrJi8k3KmUv9Giu6QnojZjXCR6TB4d8KkVPs3yj828YAiQqGx",
  "key33": "5aZSGQmMjdREf8N5Ujt6x16EG3fLKzXoJKdwAkdGJarujdFgCEEaVRb4jTiqFBseJh1yJbHV6LtTD56M6Wqabc31",
  "key34": "2fN7SEZyeanmQnMtxUr2WP7ehjxg8ChjDqhhsQTiqb9xuqYWZZFhaH6mS6hb9PhqNyBBqKHjkCrrFWz1X3DYnk7T",
  "key35": "4K8HTen69eWfW4rx4E2wpZgvZvEa5tKWvMSYheeGbfsFjPuJAjR6DfYtgZKvu1WSdXkab6EEzUz52YDD2auhgYWP",
  "key36": "5pB5JNnXdbbGchcui9PMYC9YMbWvUD8u164oQZ5UXtmkUSbZtQcnFmR526J8uzWsPqTeyqfyjGYfNU4X3pTfjL3N",
  "key37": "3Sdd2cH7t37VCfPd7PUrzgY5viGrzMQeaXXkJejrDpVdk74SQ6jW4ggEMDyijymCVqCTgEhDJehEDFgnswtf59S7",
  "key38": "2C5tYamiWsLmWk9HDUm8x43wK7622Jv2UANKY5AvKJgHTLF4qpqdrfipk28faWUV1wmHTcU299CeMv18qY8AhJCQ"
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
