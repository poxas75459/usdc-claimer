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
    "ste2nvFCxLfJPcKohLP5DwnC6ggQYtfewLh3QUXL6nhbeci3tqZKwzCKWHoFTHoLM3QCzGL19Yopgv3pz8a2EyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w4AgPcJgLdGweFUACD761ULt4h6LhXkhtfYRHJ8yHVZW73V4zXZs21jszy9gPieJ8i3nYHHk2NGRwUcYoJYh2pU",
  "key1": "59nrti3vn3wHQGf62MYoZWPafeXfVVoggvnL8C58jKhAvK1tJcPpVQ7CVstcA766MwVmBvDUt3GV2MW9zP7X8pko",
  "key2": "anFyj7dAfNZMZ9wG1j2VMKRLCbE64KNaMPNv6oVKksBfqcgbMeYCpvgZxjtTHyQxsm9iEcWCbTEjfHGJodRyQa8",
  "key3": "5uTgPckjrv721wroopchyLYfacmsBEykTZPhuMWmDc6fqhnytHFEWAWsM3DGjBasU9ACCcf18J2WdwhSBvnQiYbS",
  "key4": "zEZxqShmMNR3HcnD6zYDMNvE45wzpTPAi68a9UpFirgaZPeaGR2MFBkZF4YpU7CBtM3Gaanr2qDrN4aus3szTzc",
  "key5": "3J3XCLcDCw4HM4Ek4Q8DoGks94h9H5sk1R5CaBSsErEmqS9LetiMYbQtAL8jJuzTLq2JC5wJm4BoaEyjgR4iuSaJ",
  "key6": "3PXwYbJqN3GJGeFRreE5bsqntPU6gaBUQ5wdmwqhzUASNQGos89UWsEyav5TfmJZBqp76bUBzM2CwwSun3XDrkms",
  "key7": "5nrDfR8gB8ab2JNB2Jvts6MVtcYoW7Afo34f3XsETc3LQRWj5LACdGMs9SRz3dujvdozsvpShLccs7ak3YxaDf11",
  "key8": "4unNzpQ5YfL6ckTDonUA5cNjvDFN5uU79Hw2puRSd3wAkn9Sg3nMtXZKs6zEUfEdMfjyrhhsrsrpCQci3kpNM9cN",
  "key9": "4Sr4Q82tjn5dqCmLgiWgwGmqUL6rDQqVbMkoeuyzJiMigfaVZMFWmTBJs5wqkLRPFPAXaQ4ssZn5sTN8VmFSTr24",
  "key10": "2sRjZjqqTdgSRTkLMCSEmzo2NoYsYgLBXRd2KGmMRztLAiLpcwwi3w2tgnQc5au2PjH9a1WcjtDu7wTnwN4NF6RB",
  "key11": "3iNZqZ5zNSLNRPMSCMZtVycqYwxt2xFTxSC1fmnk4PXHydX2sQgBvNXta1A4PsK4oqYChUiULpQhFyqP9Pif79J1",
  "key12": "4m85HgqbE6n1xPWrRJbEyt5duaRNA4NrDq8svyE9kBcnEu6ee1SvmgAbUMPvsGz1KfFppXgiZMcX8hn9LPvokHvk",
  "key13": "5UpUTASwob8wBWYURZsaUBGuB3vo3fcwcSNk9MrHju3AXZJAo2ALmoKp2mey3oUap7j2kk286BUr2Mqk8x9YiELa",
  "key14": "53LVhBUYsZ2BU5HV2nF7i7veAEUm4tE7TKZr256XYZWsreLTwZMwN3L1KCzmSAvPbqFYnsJ6kLvbCwDRkeo5bMxA",
  "key15": "gjdUVGFptAxLBTn81vQYKNk9ho3SeThdau2ZJdMJvwPLnH5iXWaoxa25HvSzTduwUoyW8AYssXbgetfZqZPMfd4",
  "key16": "2vCRaVHF9jRvsHUJdkDN8ZJRuHjzpwRrZNv3UtGgB6Rg9xEn4T9pFdzjcD8dBCBNG86ZvcbjFwA1TuFYZXJc72JA",
  "key17": "2cb9KTtN7PEm6oN1fchJgEdbDyJVbDhLa4dM1KXyb7AHXVGvb2j9PmBUPmdQYbeeWdJ7KQ7wBuz2o6mxj1b2yBzA",
  "key18": "58nm2DMbrTESRorTmZ8c37ogTT3ECUT8uZruZXKQt6XDbHptwyiSnmS6aGHhPoPwD1QyH1GyxpBdkHsJA2W8oxi8",
  "key19": "36cGNLGAeFNH4kUg8hyWvKzby2fGmcVbSodWp6ZUYXXHfCxzKwiCaGuBuLCh1zZ6cyY4F8Gy5wynDBeV3kWwYLes",
  "key20": "3mkfMwsFJNjJL9SHMX1VnL93jagUd6B8qM2LGWacaAizTJMHUkc9N6YLHhdw2rqrNHFXbJp1GC6Ax5SGkGGynxRz",
  "key21": "twV43BvjqivwHkAv5hKKMtqWY7KTpYwFtFDucSnZD3TNwT1tbCSbiZWfNyp7dPZ7XebDsvcC2CJ1c2SaXUurJSq",
  "key22": "58874x6Tnd4otu1Jt2WFcJUgE73ex2Cyb8WAwYgLN8mxixDXip9EUg4UxqWW5ztmN6fQQKXZh719ZWVT82V7mpDr",
  "key23": "2HEJfwRTATJEpTgLbBgdupTuEqBch7zP7fnvAAgG9sC19oWoML2oCiszWvFsHxHgUhqiXgJ9rRRhakzyHD5GiCrk",
  "key24": "39ocU4uMyLHitJmnbP2AvFMdpCoHwk5eUjA2NW6WhYNdyNLYN86PcS6dr9EZ68Lcfi1jFycgonMCkNQ53Yqf3j6F",
  "key25": "5tV7U1xWbyu9g3AdBLsjzpoeRiMcFGEqMWyu4DYhRPLeToxp2mYBxXyjWYPjwXhBWe4X2TsHfKYhDa8pjxFZubek",
  "key26": "3jQPYyJyowDCM63p8BezDf8H4gCRZmhPWJBQyMdRQGAtcxGhJ59aPZppKoV6kr86eS8bRayWjzUpSoFx7BHVuNYn",
  "key27": "2jTazE2HiNzVX943AGMU4aZnmDqf2XjreqBuswJ4KqqB8DrLVk72RKQ1uvtaW1hB1n2Xqw3AUmm3NiCXkufv9ZkG",
  "key28": "2TKiiAywYYSjnWD1WkrVbj4prpm6mSNXqCg5ft9nQKckgdYhcyFvUWR5VheMzedxg2eX1gLx4t11cTXSVYMgNkBH",
  "key29": "3ywgV59s8JYxi9coaCB3XBFgtnwH6ptyzBzu9VSDA7ScMh5zTiuRnhGqfbWMqm7LZUPWEYaj6ZAYj7mBSKpmPtQY",
  "key30": "4ohJGmBrt59koonGanwXQDzmVmxEwzrFNL1doRsS3uyHyk6wiSoDBD5BvonqrBAYCfSG2apFUhsTAx2z3aDgvD6D",
  "key31": "4yzpcDkBbvNTXwfxhLv4gr8mpPpn286miAtD2HWd9LkTEChvNV9JAgeG2zoNU2MRR1XP48aoob4SDsWZTFNoUSzh",
  "key32": "2s1gDLrU7g5nunKBgXQcAAyPRTLwLAXnvHJdYcvYTkY5xUkztauRffbZDKe1MS1KJosbeHLRX4K65si4VHCoHWnp",
  "key33": "5nc4GpFh3efEUL6nDMsHkt9BiQ7EhHEfuuFUybvqru1TBV6s71713ipD5cAH8hwKWYH4q3xLmx2MgdD9nras1tfT",
  "key34": "UDbT92UepFQjdbDGX46ALDaj7YkhVF6bLx6rV6QRDaHJYt7xLkzutByn25c2dnh6tESMGXjH4Eq1i4QLfjNWfRu",
  "key35": "257Q5mit3snz39ssVeHBeoKdLugcsz3RyM2NRjqQ9bSYzStVuR7VLSnasGoCyaLG9VXFzDh8hcsmqCKKbbhTMX8y",
  "key36": "3e6jQSXoppabzueFA8518PLw4Wp2gsSevbCavaKqdGgBM5Vg6JpqSPuPMCyQ3vx1UfBgbPzHCysTHd2B8XxSdvK4"
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
