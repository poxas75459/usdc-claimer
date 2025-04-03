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
    "46aQre6gWjiKxAYg2z6Nu2wYWQK9NTbvyLeUuVqYXHm2NCToeWvcAqxMULi4Yj8kp8HWKcHGKYoLR9j4NFDAKZ5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zMDws6JchTBWeBsBNhApay45Yyjtt7Q35GvyeEDqMX9JQ4f7Zu6EaFADFvEUQR46yijpF98AaMybw82uhXBnnxr",
  "key1": "5KE5WDWiGHGJf5fDQWYdiewgDDncYt9iFBAhm424TyxcFYuT1ntveL7cxjCbDYtWmzbf3H43rTNd1WYHRiXbniVY",
  "key2": "5L6pww8Ngi8Y81wArQfgzfVHYg5PKYMKficqACEqzgUwtpa1zT4Sbm9P4rZkU9zESEatjtd3eHEi2WphgdaGLLXW",
  "key3": "35U67GLE1U8vcEWmhenDoRs13NjUezKZ6EcWiW8Pgu4QXejBiPcVyEBXJc7LdQtJnLAvRARYhT14Mr3bDKm18FFL",
  "key4": "5mhTqjwzVd7JsUqvmAxSKE9FWgKXLYFNKF4pstJbci4S1RcEf1h1XAVZoCZQb7hY1jqWFCEG1vvVEP4C1NfQgyCV",
  "key5": "2QyBjjm15oTyTyCFBZzWxQN9jt8XNp8RJEo2wDCs87fjiCNvcVhGPbQgzYrzeq2dTBaYw2MSrhxxgBrgrYfdt2Rx",
  "key6": "5xVGHfCf1cti9qPgthDQxpbMcgfJcvtfzQFDtmYdJz5CNjbdmtGzd1T82xLe5mFJg7PUJPbSSFEd3fUBWRuenHvJ",
  "key7": "51MsXTRMGT9JandKVUrsA1f3gK8u39zgrr1YW4nVyjaDworCsSWtQTVVemALFGo86wX3yL2GoR2xR8J1CE8hoemq",
  "key8": "3bnNT49U7qkLrEabddPCcDtDgybPuPDU81CpqkaHoNRviv8JJADPqki8LxEa82ZM56YkPzVMw2JLfkiy8QesEAiL",
  "key9": "2GAFDYqVmfyYvZhXLKfizZXBVoE7aWEYMvr55XPRw447evvYWeLyGikj5n3xRJB5U6ryuzmSQdTyZaahrxYRdU6F",
  "key10": "4axhFBBfB1K5DvZQPhKCrgMkG58XKxQjVYzETB3mXhstmd5dZN2o1uQwSvBJwKinoAPBatecgGQkwF7LiRHDJu1G",
  "key11": "2HfeGaN4K5Qe3Wr8iqsDmGfoxSbZfjqSJw3zEjp2HFmWjkNF8uCP243QpwvYQy9wF5UafkjUriVSHzQkPa1GHBJE",
  "key12": "5pUQSJtNzqi8nY85mqG4SDSBxeBfum9qpewAKXU1Yhm5RnjKW8Qs1eMRXhmDNXPnmXxHxo9LEkFdFPc3UygZHBaK",
  "key13": "VQVF987qVy9jwkarEgmnzkdp5yZiQDw4GXjahW7kkVV8Ack7tmye5GvYcCfHY91LJ4QFFuL9YevWVyDowAdHTwW",
  "key14": "44fr9MUuCUgwCcYwiTje9hTMJemdpFVsKuNVCgfaA1C1AEUpr17wRJQKwFawrwdFNp9vSLZQRfsXCPeXLMskW4ds",
  "key15": "3zmcAEpoRrgzkChEvGbSnhSQ5yTgMDMSTdKZCDPKwxfNhuZ9spa5NJDUHq6iuGftYCvyMQLh7PErQ35D21fg1FKF",
  "key16": "4HcRvpJnhtxw6oSKHm3Evb36y4LCM6e1ULgkiiDhgHp4aSrEjvyLhR498BJ9hXmF2nYF2Bi8uWJXeirV2XkSPjRV",
  "key17": "5wjiY7Tk1gunVPtxkQRJqJiPVuNpQHqb9MZvskpUQ8PGewDCXaZ6cnd5QLNETNKPthG4QK4kgAweiF9erTAHXB6u",
  "key18": "3a8ug6THQ3TcyUJBDKtvjpW1ZyddTsqk3w4BfQau9hpXdfsQxqoTdhN5K4kR9ixT9GzGVkggWwAo29WdpyQdshkA",
  "key19": "2hRRxo93t2Sb9SLxaMHcEnPkFYVqGgWQuCREs9agfWyFg4zZAT75PPHiAKs2jMKaQVnTmvY3pEDusV7s2bQuxxHg",
  "key20": "bQsw1F6gARAuKq1MhBZ6zDvWmiQJFvYCQEsnn57dkox83TDjcL9zwUZXA7q7atK3dhq7jm3dCmcYgFJBs7Uc8yD",
  "key21": "JUqF7hXA1Jo7Juz2bJ3qDaNrcdZYD1wLE5dMQpS2Bx4F1ub1evpCdkiwN1JWxAtCrZsdYMRAUAsu5hdhrpCcfXW",
  "key22": "3o3AQ7Bi7Fyjim9PRLiW44ouXJCeuSXXx4msXcCgJfEXGr2Mus9zY7J42MuZhb8bC2JAsW33f46U8fy3UQT5naq5",
  "key23": "NB5jLdRLU76fP2dwCsAhDcD4gnasTeDFwpxtRcui2KD7MhFxmK9Yttvwve2e8qXZHthUEMu79mHYZjFMaDyizSo",
  "key24": "2j5LfCPVi9MeSQSZ2H258iSo1oowWVu9xY48JWqSHUf1hBisHcBkcakyQ68WisHybt1jGjU54x81iT2Y1QN11RrW",
  "key25": "3TjxUCHT2tgazK9fjwpqshbfM141MA3ukZRGQN1kVytekDTcLdxtd3pZGNH3EnL8Be8u2BUMkvS2PTArez7U4Rrn",
  "key26": "5XrEgQJWGR8fTcTMiLLddWmSSpUdv1Wzt2ng6FjXfGKV4zzsTBGiVQ11BAA5fbTSs67ZqjrNAbmn4YJUbocMpZFo",
  "key27": "4mr93sbWdnAS93Av8TyVtrNxcJinGLbzbTMqYgssStWhvf7mpoLqw7F5KZVmDhtpMwyM1Q3pij1uGNYF9uxGpKMt",
  "key28": "Bcb1bSDPwEWtgHEACioZQQSe8bSkodnKgGYcz6WuHVR4qQ33Ln5GKS4sTnqcPrJUDtutLoDCW1QTG84FLL7e3E5",
  "key29": "2aNz9JSsob4q6N7jtzhxovLHSHSRWeFxHrwgnY145GB1yP78yGjWJKL7AmRM12Z91X6T24fyn6e4oHoQsTbEDqBE",
  "key30": "NYUu3h9vs8Phe7pyey1onwkJUkjCV9PbkwRoMnYqnnyqVvS8uYyqLxeAcRjHdgmeREUuLHYy1jhbgB4ukx7nxkH"
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
