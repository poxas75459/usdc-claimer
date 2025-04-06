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
    "2MbEPb1REuKbmuSjLGkBmuxhGweJYUfX7beaBA9XUftMTs2Hzti6mMs5cK6aaTpzfzaByFuKPY6ADVsq3ZcVe9Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ox5Kd3c3KVxBWZycGpVzEHHonBMS21QYxoMHbmaLwpRx3PeY8NGehNRUQ8zsvJTa6Gs1fWhKxmJ4KHS38AsbAt6",
  "key1": "2REAnsZgjP6ATHxanzUppCK4ghgvvZtNLSGiNBEFaq47Qrord3FC1Vc4qrKRZUktxRfnWkViVW8Z8SeS9miLVPnK",
  "key2": "3AzkJ81cQX35BEYRnkKeifmuPtPFJXPhoBsxRYqGX8KKaFVijgwuazMsQNmTZFayJYfuJzzJqTRAZNsEGnybvWbk",
  "key3": "38Dqj6Fe8bHnfVJKdu8ftUXUA2FCD2pkuQuGj1TF1aoFRb9DHXDPpsJyJrczPjfQS6DwmZP1FjWinUyBWg1PL6bR",
  "key4": "39CfdvDooPULGJphQAKGVEh4V5ivpJjH6q9feSAxWiLjVCir4Z8r6swpBB4NxzwKms2fxYBa2pnVaYtc1Ht2kqnt",
  "key5": "BSbESdRcmZHjp5JkVtL31pyPdwFCYboj6LeSChrMHeWfjnnjbSL1QDH4zhVcXx8TRGMzf3MNVP1ccoeR6wdRexp",
  "key6": "3A3vD1SdgFqzqMMRTe22u1Kz9mEzVunwruc3hUNygEV4tnKm9w4FeRMUgNdbsxc9D39FUnX7bDDHBjoBMheqPeD6",
  "key7": "3DB6Hgw69xJhZkuYFq7bXD5dqMxNZj3hUK3UR9NVbAYmNFLo4K6t3urBVTZ5jPxw6g5ECxaNqb5WB3DPq3g6mxsb",
  "key8": "5LFny9HLKVwajYAAhgVwysz4n4ZtA7A28vCtdX7ooHHKGxBRnd2Y3feK9nvvx29cqadon54RZLJCcyxjoxu8ZLnS",
  "key9": "3z8uQhxynKBKJP1rwitR5dw8ErmZhetFjNxiRW8CVj2f439yuPSCGLJFg2pADxeps8oXQcax5iNhsTC3ByTA8MZz",
  "key10": "44tXw4sa4F9SBEzTuGPqsNyfYczd6RRUQTVA1cw5B3bWcARCfWYdKEYHG7TY4nF4Hi6ipSztPBdsxxL3QgoR1coc",
  "key11": "HUwtZsoZNBuZjNsrRhEoFQU9o7atAz4fSt5w1H6aNUKuRRFxSjFAifBEmeknT8y4KcE42zNjexVSbdaZpCTaViM",
  "key12": "5CfNn8W7hvfSvVw4Bf3xMyQNPAoukLLsbKXZU1RyLLr4ifoDk8kXzsqH8sXn7gjuJG5ZEmWPKGeD9gM7vn15DgK",
  "key13": "5HB5oGwnoKK4UhoheJ29Ft71ZCvnMQE5wrG19hxtc6bpkUVR4oeURUc1HVcZoJAyaqTWRdEdRN6rbe6wMzKh3pHT",
  "key14": "5JUtKJwfzNzMeRC7ctYLVJgUqaNBRPakk7twYLRpuA91HYWfKYCYwCEDfvJPeAsWTQAuhkgttqyJMegw9gGsaNDT",
  "key15": "2WZ8qPFMLbxf8VUy6W7pkeKjzc3exh2Z3g3zCKdbkPQnZPebTisoZ3NgAJtzs5MsewFhnqqfJv4UEz4QaqdZY3dq",
  "key16": "2xvYn6J9bYtjkiYevYyAqyYB4dH6ZyKCg65V8nDTA7mWyZqX9uBzsEX78wftiTGfNWTVzgSUuLMk5t53rtSKxxfw",
  "key17": "4pNTFVpoCfVj6LUHDWVByh2qwsXHJjvSQgkYWibezGQZnp6XbN52ECVuYDq8Pjetoqzh3vEL3xtBve5BcVfiCnTo",
  "key18": "hZJKcUirEdFv7tHve36A29VdvcGCSHawJ3GvXThHLRkxfzWPemRZCsvq3wNhrJDj4dbKVfdNGEVM7be5gXsENN5",
  "key19": "2Aix3xqf7qqAk7jdTdYnSaFeztd3EfrzLgkZb9b4Z5Nce7VRoyNZXPFFjgDv6eKs16UJJemabv5gnSzfeijGYmgF",
  "key20": "3ac7BjJ9m9M2bjfyzFZ32u18CfyHqmbn6h535MAChiaYmnSAzMHFZLsWYjz3DQTuCsVWYbExXiSvdcDyHTSAZMgh",
  "key21": "42g6Tez3yM4TxEKxsXTCef8dGLtsQYDccgfKok38S3TPjABrDrb7MMjSJJHMHcp3sTk4yx3cpUj5Y1fDAazrsDUU",
  "key22": "4pSdwo3QB98oJNg3kPmcsArAq3HjaaDz8yYKcpkmzfeAGBqGA7NvB3k8xicC1qNR57VXsZdBZshbsX1xaq4c5ymB",
  "key23": "5bmfxQi13KSMScA4Bi7KKbWFgr3HRRc3z9FchzCMqt5vj4xoTDmH6V6YEq5dE73Ppg2zdb2dTHS648piuLKw7B2E",
  "key24": "3whhMChX9RRmXF4ZZQMjNTEBQZ25xu6pTnXb1GTyiVAohQT411j7ywnfJgrXMPSyBqBn52bUCKuXduznDJ9dY5Ze",
  "key25": "2NjW8dd2N42zpww11vFBHDVZnXqZF1pYjYg9WMLQUHKKgdGKpAr7TDe5uCwpJ5pjZyneDkQTFuKhLiBYrY39v4yu",
  "key26": "NPGqUSg5yfzSM7jzgR3eFjrXFiSb7kESno9e4xnA88Mt5jkK1hnBYGTUtu6TuZwnhmW2Ayofbu7bBQFYtEswCMe",
  "key27": "4n5gZa2qnyY8dmSXeCnVDkCRdNCu6xzqtZepfHLqy6xqEb23gqGoWmba93CYBcJnvqdmEKdTefHDHRsvAvDS4eqV"
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
