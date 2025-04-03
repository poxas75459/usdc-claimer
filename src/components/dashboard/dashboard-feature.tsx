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
    "5An46B2fHCcnTje6D6qpm2jD7ubmSL5kf31Dt4NGJkQvUDhHS9ZR5RW24XaSLFwg2jW7DfmbBKuV8WJMxN5fxxGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpJf4Z2EHEtB477eASwoAFJtN6nRS9qwnepiAkuPZ3GvndqPDzECYAoeA9z7Do5D1XTCsnU2xSqVzPk3an2WV6z",
  "key1": "3TK5ra8y5Hs5jv72okfMuPSZ2wth3sksxs2c66jfyPQ1f4u9vXV8YyquHWVL8KbQJC4dXsM27pEQiRaNhKXPMc5s",
  "key2": "5cD8GcKWSBXiJVsXw2eF6tnoG8RPEhTdyk3Hw81e1nVh6hXny2h2JuM7fYifgtw1L3tmJvEgSo7fXTZjYTxwaabD",
  "key3": "3dTTUYbwasMTAkBwCwVyDPDUcZdjwGKRVTpsa4WibiqqoTXZaJt7ST4s4vc4PQG1Gpn34MYk59rimiPDVTxQCGKm",
  "key4": "o31mVC8bCMhah8yyvUaQnL4URvrcCLoUQAP9ZnfCzboQTsz9acqFYpb7kLP96BKDGDyrNnFrUUNLsGnMGuagJaJ",
  "key5": "2YV7WDWpPUjBX7RiFwKV6Dsc4gHDdHy5n2JKqeXms9S78xZLnwYbuCzYjFpvMsZomdsGfotfEQ9DaheB75wV7WSq",
  "key6": "4xQChDzTGEsabdWbGqJsJ2V5gMSsPaSqcJ8MoTXpHz1d6y4k7hL2NRNJAc614kEKsKzX5mPUzL8efVFcQWnuiFAr",
  "key7": "3KWBNKPp5QHDowohY5C4LbNnjfYsxMPT1Cs1t8ztUoroA1XdzHvdpmWQaK4dHcRtKDz7FbQuQ18ie6DKCBGUWkhi",
  "key8": "WDngZqFPMWPxNQdihu5UViQyjmAhdkUQQN3eMW9DbuVzLLS91GCW9jdNnD2UpWyyBSSNxnV5U6k5zbMx6hQmijU",
  "key9": "3kbaR89cJLJPjy3mk49NPfrdTTmh7sf9u9MboxZWgEjMyJy8XKsocmU8AujAF52GSYXrx4z2RggbQz2MBhKNHKBz",
  "key10": "41K5az5GeQSR7h4Dt3Ld4oppPzWQf1aWUpoXUApJh42Ta3JfjZhc8YrPtnUKjPMVjmGcXa1trAwDedGCo23rihY",
  "key11": "2HQoEbTiY4LhE6deUNSoTuhqDnjr65izhebMgD2kocd9vXetx8niUNknJGs9wdxvK3ZB1RxhQ7u13oZNmdPQ5FrT",
  "key12": "4HRSFzjyCxCze5Mv8QPXuJJ1Sdji7FsoAqLocq9di55bdou635mxYPRX8wRfYpr9hGmiVWfkDyzVge3CPFCJuKbq",
  "key13": "442cdmGZ132QArP6kV8TSTVEbWkhNMirP2ESN8wWMAZqsBdEk97k6f4X6dziBqS1ETYv9vXWv8o3Syt3jnQuygNp",
  "key14": "2tWvLjTykE7nB4Hk5U1JPMJtFgq1LUdBCnAivLZrjuUSbb6U8UaMB9mm7LV1vux5bTKx6vvrCzpqBsYLrhNzypwA",
  "key15": "AQHriY5RTyxxnGw9QqiAA21CekHeot6h8P8kt4PvKx42UtLpN2U7CAfdbSfbJif7ereMzEoKs6mGWGPEnfFjk7v",
  "key16": "3ZMgmJGFBjjKqv13ncczTjuDiLYjozKFtuLjMGcrVCiZmHm8uwpcdEpcicixLV9v8ufpkZGwUW9msQJSPQAMCPBZ",
  "key17": "5vXHMpV4btx6TgF6ygAgGMWSCSMSHK6QgT6FDNLVWwzDMQhwWYBy2J2UtE1DdUPkowRMmgLk6c5FuqK9dseDSXQd",
  "key18": "3nzFZjxPTJmsuyZ1H7DCNyz2X7Y8wQCmQDnvcoQpt92Gq8wnrntwjAt2S7zSWbnDCiSY8quZRES25UHbMCPcK6TZ",
  "key19": "2U3nhFzz7XPTjWBkjwSwRBT5NWxcYfA7jmVdPLU5pwfDzk4hzFzZZE7v5J2k4as6Ma4JXD6poeBC44MpsSjm5KgR",
  "key20": "LVPE8p9RMaBn6vk1rZACgt3PCGYRjKsVKBmRX3mQKhVq2kK3fwnDDPn2XW8WtehBBcFU1jbn7DeY1qohBdJZA33",
  "key21": "5SSFyA99ddHajra174TnqtfuWx1Ph7pusmWX84HqGForGdkPKFnaTKGw1B7btnba2vuo6uwDqb8epcYTtq3pPDnz",
  "key22": "4xm9KUpkdpjVJKKWbpE6iwBXsvuF4Wn9Zm3VhWcKhycT3RJfE4AVUHp28CTsUz6JZpJN8xN77BaoHGcNj9R6ysv",
  "key23": "Qqfa4jN9afjmRPo9DeZabUJtv1UBnTBRAJwUzmXNjCeHC6NAe7UnumafaLPsXccktmZWQvCMYbZGSuRbS8g1kAv",
  "key24": "4K6Bp8yq8Jsxvt2WjLhTR7FEGsozGtsg6mQ8RxrELeUjBi5ARARhdvueFVCqpZtU4z7brVSbYmo3NAiYwCKJSgK8",
  "key25": "2U8BkJ6futHr36CnByZrrSS7t4ajwef6i9tYALq7XccV8StF1F4xLRczzJQWhN1hMmiJujs22m3N4v1VdEtvMqZ",
  "key26": "2AkWALx4ZUUYmstnkFYKvVacatVz7jky7s8fJhXZHPXMF2NzCRN1XGMSgBwnrtTR9Es4PUmaFyCCLY6dkjyox2Xq",
  "key27": "5Q8qZsKmkUH5Yza5voyiJwGcSZEiJStpVKVAMqkoxLxSewKLhD3Ucrfuktqy9YDQ61xrAaht3nx5wHsibevEs4hq",
  "key28": "5CJzQkoPn3M3ZEyXFXrGA3TB35KxySP9Bqy5z9yKchAvqmuuaUHKxB3dVCQPCpkfwGUH9kkd7VXqadWfpgo5QRbV",
  "key29": "3XZAKupYyCsdNPFj5HjMbmpp8BdrCkhfw8ET5oBUSGSE7ndfvs77zQGh6MXoCohkafm4tDrWu5jxH6i2E8R5yk8V",
  "key30": "5ZovJkkPoyHQSS6TtPSXgvCTnjrE4gPCjpuRRkQoPYeccDJsA1PygweniLfvV68gmTpVCdnZNrCVa9h56szo98CP",
  "key31": "5Ac8jUFg67pnimxYcFHCE1DBML2peVhcEneVrNeiUPup68MbVGteeKhNMHkJQmd5kPjXYnn1zYQLRsKCwFDrwPRX",
  "key32": "eiZqA3X4Zh662wUZfwvYGemDvdeX9jfdi3HVgBnBR1FN8frfDHoxE2UuAJ8XvR7biPyRxHTLJC9e5AsjRkV8G5z",
  "key33": "412t4pMb5m4EygqL1w6G9C1qycqYWqsM23girD2dX1iLNJFsSC6LeJsnjpFntediahT2oCzysRzPQtNHmUHJnW3z",
  "key34": "J632FyrrL23LxkwAR9tp3fzrf1VtriK9U8uYN5Tbs8juKNTP3NeUzkLWyyfps6YcVaMhnrYfAw24fbnjLmoMiN8",
  "key35": "864TWcKCW6kGQKD6T2Le27bRQyC6QBnegQh1B67Ex8Q7dJxLGJ52Ao4B31ugQvKDPsszugRmiGj8XB8uj3rZDWN",
  "key36": "3xwQTGmeTJysCt61GSQoCnpsyi2MX8xpuHYyKL7tKbJpEEsoaosFakBgRCGpo4VbRXBDwKFUWscxrHoPbDiZgpSM",
  "key37": "3qJFPD7ecf7zZbEMFgiBb6uxKNtKiaNgPsX3wQU4Si9BGgYBTVJUaXpm12DjkFGwodaKffRSkzm79ohmKh5kNznZ",
  "key38": "2qE1uCUvtDzqJMP7FUUo5hhiJqYmZzpQYsst8kXoLjHGtiZkqddFR2CHonwwvv38xkqLdy9Mi7g2QMiSzNqUmJuq"
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
