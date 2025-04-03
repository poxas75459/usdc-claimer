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
    "2a6xsBbNch1G88bkiWwbw3ndR7MyWf2m5awVhkAj7SFex5KtZkMMEZqJDp3JteHuPY3eJuQpqvq36TRmK2xuHXra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GyM5CTr2MZB7qZcso7ftrzBLXrwf5DBXvgbGtfwEzaymPutsJ7JEBaeSFaW2BSPp5NLZZyvDJ9RsB7Rt9wUXEv4",
  "key1": "3To58HDyhzSyNQf721AztDSVnR4dEdqMjYY3qFKqPGJtrwmyMPYxUo2kronh79G3qYubj45u6JfhgUhVjoqNWtxx",
  "key2": "3pbxH9Dps4vcdXpbGaXCJaUb8gBFxnt9dAF1W6tafxD26oFiW16e1ops3nQT8bkHmeZ6xXnbTAwv8TuUzcrzCFVm",
  "key3": "2yKEpPEP8G9VbioqydhxW85whrhJNdLQY1QNLHhUPa47NB2AxsHSVKeyy2MZb2eT98aC11uRf7kKULfGkF66eNYo",
  "key4": "2Vxz5Eqi9Xr34ZNriyoyy3V3RHtkQSydFsVWvRSNH5Q897hZRAB4KvaPLTvHmj19oAaPkDEfq2pEfyqd97u5VYC",
  "key5": "3g9gaTvjdqGn6Qurj98AZe7SQrjtoUXpM7aQG2DBcJroKKV8qr88KnQTCWkVdyR3j57i6c18qQh3yrQEam4PBm9Y",
  "key6": "fpGUsXKhT2zwjeeVs1i5cvuay4j8JcJ1rape1gbUrV2AkXEGuMVRREq4LrrYBMMmTDyoxbmc1VrygprfrPJzqSF",
  "key7": "5JAFqNNartya7TtmDw7GkARrFY2j1XxTiGVfC9E17vFEmUT9MLWVfLpgdHiQtxWnhdxwM5CyL65D63bNjqK9KZYZ",
  "key8": "4CZqC7suL3Hi4E3he4yYgwxgfrT6gtEK5mCKoCwmRbsqrDsJaWySTahHAs41Wip5kLSdKFAPh5R4ZjxAkP6pGxn5",
  "key9": "66y48SoR3fRnafqaBw1azkJXPUCiFvPnffaqdx7siXi3Jmgy7jSWD1DFETV1yKQn8XvwpvSMEHfc3gnKGpEKjgNp",
  "key10": "3yAUcPQ5DbsqhRW6DxpbL4TG2wL2HdPeWyCCk2Zqz1FAJVBRE9yBSvUTEwTPjfFrAuVtq6mzFzK6eZcx2geFW41k",
  "key11": "hR1jvdW43URrBwu7DM5xHQ7PWQ11KcELUqPcgvFoDHY65ALuhyZ1cC3aUUMAgxEU3s89712NfRciwR5Z3GYuztP",
  "key12": "2hpcGc3ZPKjcPvjAwsjPRu7rEQTH1YYvCZfMxJFTwqchExf5SbtaVVedzFUe1LKxEZnpJr2fTWrS9d57iXGuBT5U",
  "key13": "3eZpnNy7S7z6SdKopnEPRXjztwKEdfKjmJqD9PH9YMQkX1aiWxsKHJ1jnJWp7WwLpAKsH178CHtTEiJkGuZMdM1i",
  "key14": "apdsT33Hbv5JFVD8rmYA2qBopQiYeMXJ8nAHtJ8qxGsf9XvCTRJdru1etoH9GdZMVsTC8CLmGv4H9H1rwCUWkag",
  "key15": "2YKWrVRdDTzjZRpR1Bxhokx7ChEWzHDoMFdRMBgu2KibJUjdhCuLWCy9hJ57u7C1YDfFS96zetNaVCEz1e6FyJxy",
  "key16": "65wcvgZMm4fiQvUXa9KhomZFJGDfBQqky2ZLJqLxRWBuBB5quSG7zJA4Yj9eBNeTxYX7P8Q31nRawqkiHwmnK6wR",
  "key17": "2UxoUiiDpcvPzkp4BMKzuBDYXNUrVm1yiTDzvvnERCCGCz8s75CdMB7a5XEPAoJzxjcA62Qza3qa17JwFVCkTReY",
  "key18": "59bL6RYT8gNVCw7jETQHV9h8Euk5txQi3pPyGgFfMiVk9BE2WTUp8iZuai3qwsZM2GFGRLWKGn14MwGdPoeWGv2y",
  "key19": "25mofMnqHg8n9GnHnqcYMTfLVatcALphBQKyNPaysmNpqowTeHXvNngv6YzXLPtQNuuaYLouUCRKC9BkYn8Xe54p",
  "key20": "2cifK41875EagCg3iS8fqvky8oC1JTrzVFe5jAXsrJuM3fcZ2cxcoDJXaQDu7EpVNsGPhMqrFzYDj4jV81zMhoGa",
  "key21": "4egKMccDyN26yS1yG43v59SvsQ8HoXFFS5Qn9M8cHXaCktbeytA3vzMBssxPTGhfojKdSd2buf6gmcdtNPmXWpLV",
  "key22": "5xUowVVxebAG28XwmTS4JQP5Z2ctz9cb3gwr2KV75T24cC4M73gPUmLDHQTa5kza3Va2W89VtrdNDZGgp9Vhdz3e",
  "key23": "RrLc9RQYjz7rTem8x5gAzF6zVXpYd9bxtgoXyXCgWkb7hHbuk4FbaQV9wPa4QrXVYpYQujHL5QqeUNxsGx1yTqf",
  "key24": "zmf1VcFpuPdVZeajU317BTKgQSiVck7FTDKNdnpagLaCdN3VyVvHaWC1GSGFG6Ud228XwswttSu6UpyY8eunNK8",
  "key25": "2LUph8azy58o9VZKAdb1iXfxoqEjV9hQSczAFrHNXgw1PJ6AAyTbNS5iGexrgx3su4AXPXkiDMuYGTUTCQUB1w2q",
  "key26": "5wFKz27kVoe5Wjkea42i7EwyWegJrXqwPwhXGdKYeqtPC8tXk2VD3CDdaPAW6gFytFE1mkZNjrPZDufyTi4kyMDY",
  "key27": "BroERKD2nJNoiqC6dTGKdAw95v8YA8WYsG6Xf9tLMiv3nW95qZskoDtoHAJSZAYADt2a6wL9tUVFQXmkwbd8Jxe",
  "key28": "56rpbrcjA9oXWmFJgG58AkVh42M8uDpuTzR88aahwigEyuU3zVaJGza9RBBUbvmywguisq2ykmZj61ituVU1KRVL",
  "key29": "674DjGmxiywXM9TPTiXRwwwtbXGnBksZGxmjR7EPGExUYVyM5znuYi8Zn27Tv7e4yCCVFudyarEyHxMwG8ZJvwX6",
  "key30": "5aQbxRR8PwxJsZE9VDkcPjYLKnUcGbhhV4Qf5sWb92rw5rvxyHLstKn13vRzF7FC86dmo11XXy9Sgd1gT72A2W1N",
  "key31": "2kpaQPbRvtCYgi2WsteoTVHPdWP1aUwR7sUXAPJ4AKtPcmqvjkJibV82MHRXXPh4aMCvEM1knSeeJSPGmvpJwAqJ",
  "key32": "64t2JYQoNxQi46ExjuGfVub7wB7renCy3GuRq83mx5cFwxPUomS3r7wwv2WnouJEJFhQtSBjQmRKPTtaTLFW6Fbc"
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
