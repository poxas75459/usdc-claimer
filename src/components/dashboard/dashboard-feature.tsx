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
    "2uqVHbUc2zEbLYTEMbBJXvc5ymRj6DCpfNUaNNBmyr3VnHPtBsGXfsVCdnpXbXkNuy4ZtepncitsT1T99Tax1D82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QcLzFypAVJJBYLCeNtKp3mC4Efz87XkCxcs875Q26UyxFDX7zg1puW3sbfFV59er4KhEpXbAHn1ea9g4DE1u5mH",
  "key1": "59AJTNmgBRFmKxmCr6hGHJjwjRuESFa1Tr12Qv7ZmjcRr2CsuQ3aNSNkFv94ioMNenSaUNi7RJ8S6enMi6ZW6mqa",
  "key2": "4PyMpzm6zpSzZ9PjRcdNvHTiY537mCJaeD16VhyxTWeCHKwZjV7a28bhrA1Rq6qyU77gFWcDgUaW6ufFYcEqBFFt",
  "key3": "2kWetLgtsUg4VfAkTtdcXQ8tZN9AvkTfWAmt4rt2Qi6NKPbTxyYdX35LpNqaRkYxg4KZYiA3zJFF1kKNwC5tHi9r",
  "key4": "1NjVCdJdmmF64ZDC3DocpCa4apoSd5f9gam5HDm5rXHjEnRnW3UpxFogfDAY86HZRB2J3EZrQE43yQncC4opcRR",
  "key5": "3D7GA9EGFDBAx622bSsCQz58T8CBqc4KTkz5ays4T32kq35gTRMgMgzDW9CVp158ELtHUTvbL9st2rP7ZodAi6qJ",
  "key6": "55jiC76F5q8f8ujkANJet1ooJH5YTK6RUSa39paNQ4Rs3moCt4VxbE4Z49gepuo79ac9XLcbn6fsG6xonNWy37vC",
  "key7": "AXTZkesBkCFE8V2TpJHkanpFhwxn9A5GkZfd45uKJn7h7rdhN9NXoT6QQ4ibRSxxo7roYBh8PiJjKsSSze4L4tr",
  "key8": "4i189AoY9dcgFKZMJw1BtjvvTevqMph6bDakmzAufhvPqU3M9BPnMRCZLyiZfKZ88a4R9jsT2MjvvAUQtHXmZpG",
  "key9": "3ShKNfgrx2unEMB1aXzazH1eGzjqqHE9f4VjUBzEdFZSXV9spneJJMxTKKCnfNC7bKurNDWVRztzztf8YSsj629k",
  "key10": "q6tb7ZSNcGKW8vU4QJ2NxmzpJh1musEtcW24GsJLSufCfyxh4yxjMyKnMtsULegknWjotyFws3q5vfC9RhVVm9N",
  "key11": "4S2AobgG6GLNZfGTjiPpaqxZwqgLGn225R1m6HQQpyPqDC8nhJzAxQzdtDm5RaioDZGi51FUiR5TGvqWsKtSTLBT",
  "key12": "3F4pTuFV8kTKMoytpKtbSzEPbZCYPHmFt3w5DtHPxQXq14VdxSsXNo2aATZ5nXvpE1tvC9q1Uk8kbxGzvcLVEuxi",
  "key13": "3jmsGNJ9ioLFC1tYaip5pzuto5Eh1ziHv8HFw5UucSS5qQGHL4F5rCjGKeMq9wiCX5pCqJZLNVbTn93mMwPoNULo",
  "key14": "hcXYU5qUrcu746J1X7JMCKXr5LzZmxSWmQi3asmsUhiPBVC8XTWhDUtycPdKRempGPt6BH4ygmasa4T4MzPLBdx",
  "key15": "31XiePT66DXKX3xRjqfVcvtxRfZeyYpzkCaaHGAA1gti1DzcALNXGGPCNh2nCzxrSmQDE6drH7Mj87MmaXbXkFvd",
  "key16": "31JbRAPJKA6NeMzvazFAXQE3aaffdTYqmnWdwef1xVDejPKXYFCWBwWpof1MtCfuG8vF4XkfDX4ejLQGhvQMRb7t",
  "key17": "3b3Afr1YqfADrZe12CmerfvmtBjmgftXtf1GCKjVV4YMwRF71HbZ9fJnxw9cn6zRNg46TPGpL4ZY9XQ1msMBYG4z",
  "key18": "65venGjmpYReevDdpx5kD5STQSwmLbqNDpznN7H8zDAkL25j8W9LBZLDyCW8ih2YHxvAFrdh3okYtJT62wt6LQuL",
  "key19": "T9KsGLdowAF4iuEQpsVaRSZXUfaLv3S3WLHCrUtsu26Fhb1c87j8e7aoMpAtHfew2FowdprzrWiWsTvg3cxwJ4Y",
  "key20": "bEU33E2X8Fp3ZLFcnzGg6Tx8LVzb2YBY2ErjnoEfrAwPZHQQiP7u8jPC8dY4Ki7rDHhWnSHspDaAR8uSAgLEvBe",
  "key21": "2Ttqzhhs9ePJjhU9zgpvxzvXTqmTsYgX8ApPtPuCWbTnZ8PgqDX282p8ymhPVZbSn2XvS15jH1W1VTkGV5sbz7wn",
  "key22": "37QZYpjPPNBLARNcUB4NfyCri99VkiaRwyFzoyNKeBJZbSgdsSQSguNaLkmwbCjaooSmnC6TjQPySjw8Wedq83SQ",
  "key23": "5XGBpzhakGJp2mPHjaZc9b2jvEMg1gC5pPbgWfzRVAJYv5gbYJu4H49835daTfx7wH9VhVsHti9LNqVoFpyqaZFr",
  "key24": "2SzNzPi7KQtdkqUtyDSsQa4N2peAZBWu1byDTheRa4Jr162h9cahodb9w8pfHypicYD5as72fGD1uq1A42q1uYzb",
  "key25": "5kxRwaaDt8foMEX6gQpacb1LmyJup7t1WdrXXYcNtepepyTh8kBQoTRGBct3PhsPvT6rEGs42Bkg6wsdXUELPL8o",
  "key26": "2qjd5CJ1fn13ps1M3SLP8imxcxZbLBrWKSuoPiUp6PvhUcu2o4uhbC7ffbkfRWbZDrJWrmUHU4y2cMBpcCx9Jn1y",
  "key27": "28PH1ZGK1ZQNXBBvrAZXiWMxUCRapYrhwEAKV3rjzrwhA2UfYH6K1aVACHyJ9d3e585BRoHXRFfEWkrUhx7T7ZWv"
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
