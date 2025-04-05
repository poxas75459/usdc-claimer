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
    "3FnCbredaL7tpK1fsVs9xU8TZM1dwDteRQivTRzuvEjkyBcWhwViuaiKgfk4TtyBG6jWJnc1BY14MxtYspF1GAkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P685tX8C3xwjUsqwMPWjw6415CUyiz1HsJPvCwnnKXr72Zz5fPYCDekhDcXkDuZHEPL1mVKZ4YUuVg2JgAvKsHf",
  "key1": "3GpXRws2gavkn6ZtaahNerTnVfTnhqhjRZM5hYCjk2WZmp3F9aJt7gTTHFE8QwZgzJjvzcxnSDHLfZtr2JysuWxC",
  "key2": "WMZQxQG9aakfHXP2KmA5xwADzTorB4waqLTa7ys7wyXEgEezCSQwoLVD5o7SfELqQn5UD6fVx7yHAUyCQF7uB2z",
  "key3": "3gwhpHj4cXZv9TdgJnoeyiKsLqv3rFeRKtHT3R1ARgD9AMFoLXeXSFHmqGDWU7FbfHDThCWqJRb3gwLBNBG97NoR",
  "key4": "44ytKYnCX3LG8ijscA7FDEwasRcTNqaCub3cUwyFbyk571idQ4gkUpDp6PLd44ifkbDzxATxgRbCTwfxGmuH9jRQ",
  "key5": "4w875j7JJUokJvTGPwQVdJ897B3kKgUbmFKB4Tk9wEj2qX8Yg7KqkFQdoTySPRLS4jCYjtCksFpP6QMKP4kA6zEa",
  "key6": "2cLF72f3jvUDCdBPqZjb8hDgcuRgngqZHdFA7Lm8bzaw5cgZPfaA8jN82FEDoxTKRTHERQGqGk8dEBpyDJHAiY6f",
  "key7": "2Rtbwm3mWuPm2j7qWJf3bPJyyWSt5J5NEE7JB93CtpctrBk94KRvfYEYH6nuwCfUYRYwyfNTsrmGBHbezefRidro",
  "key8": "58eqTqpZ3y66voFSL7N7ERGXBSPLEvGEdaK3dzvXatfenxGtB3iKUnTJYaZXJqZ5WyXdHE2V7oZN71Tsi9ADqsEN",
  "key9": "5gRnL7o7jPSYuRh8soH2yZ6WVsjETUALmSoodstpanXXJZzSRVKX4fan4gYntvMtG9dFxvNtu3Y56wu2CB8mK45R",
  "key10": "QE6YodhFhhJdQEm6GTg5QvywAGYQTdK3bUSJubkaEJn4dj7kQgN2VHFCjQjYzPFMfndYx9iBRnH1Ghxk4ePJdht",
  "key11": "3zcK21suVKhYFyPnBPynwGzC1YziPbREC56VbPxneuEQUn75HBSmBwo3waYwpU7oXUgjWR5ZqX8LbNQhipZeS6iN",
  "key12": "x1ocqZJDQZhsPHYZV22iSvzQ5BfArXhxkQ7TDrwQnq9VggV9KGwwxpTDZTKCnRspienVGWAYFpcMutVR2DPikRW",
  "key13": "54GHMTBcSARhogoauK98i1XxzdRJ6EfpkbJw2BT3akkfjtDRM61NZEn3Hs9giWe49uSsr3da3Zf3qY2eh5wxSzSX",
  "key14": "5zMfHvextQQM4df2ZM9JZthppMLpG2unefeHTg2iTErjcTYA4CUgA7QXYRcYQTPhox7Nd85c5iBzBFjLgKcWtrBU",
  "key15": "cXUPxrMJVig6uKcHqQeNZqfFZWsvySrBYWx3YTdniY5nsvVjTWfcqoiUBAtgaL6BwiepFYzjLRVKkWuQDhF7Uaz",
  "key16": "bxgtU1ygm7aTpbh3ehK8JLRozxaf8MxqWj9nHDxz7cDXR6e2VX2WriyCNmYDyTsouESaDjnXsuarhh9tDm73AoX",
  "key17": "2TgMkDXYhSFUZBJaRepr6bcmuTWmv9B9dApHPT4Swxk7fCySte5RZF1xcWD1aAuASDmEHAy8Es4XKcztmrvM1XDN",
  "key18": "5xuSZ6i2VWfL63se1hpDfeN9giAGeeGVgHiWc959ATSeHuB1MKrN7yQjgDrsjB38rcFuPXmdHh5JypsuSfSpszuR",
  "key19": "pEeo577vEinnQBznXg8Zn2ncbZAQ2Gzcz8iYbysjds6FYaSyqNGbuV6B1LLzmX2MYnv46YqbCy4KsUx5Ezh7wFP",
  "key20": "3jDeK2pWrKVvFjKwSdkjWqABunfwu6RDzskdj2wc21zdcS9WmPVqqBo37rkGhNuW2JAPCNcsqhgdVFv3RrRP7j1p",
  "key21": "2URMVbvvk6VHHgxvMD5bLU5a5WfWWKg9xMSoJ9YKTEPwGSKGCj2ZAAAR7taeEMGfd5baz6adHVaaPB81awwbXoon",
  "key22": "3fBpY4PUSoF2o12yZvwNFxuNMvoiyya6RFxF9Qqn1DRvpTnSGeUTvyaUQ94pWbKX9wdgHuog3YdGGGaLfa8HkAoZ",
  "key23": "5sDChTYYCNr51spTB6cjcFxQfdWUsxiV58eAh2BnLSoBZBuxHg4QfhX8jMHfvu5r58ASkteMg211KV9eutGwAHT5",
  "key24": "5fWe9aDPsn1nZPsSVFJbQN4Y9FhJfR94WgNYcL4gnR7M5Db6anbq2meErdwCJehQo1tGB5YfGtekpTu5bryxVBFp",
  "key25": "3zKpUtY7UxUnncAJsu23myijiEJu5T8aVT8FYGZmQ3JkoEqAyCd49DfA5GB5xh4KGrTxPGtCkeyXLFExYjDQUJvL",
  "key26": "4oF87Jbx9y4Zfj6rBWgk7o1RAULnQaDSf1cQkdeZ4Bm7ipjHoRkQ5k3FArdZDPA5vsU1o6gPD1PcKMMM3Ed8ShmZ",
  "key27": "4Kb2vW2grq1Y5ZLxBRZghX8HsiC59dF5xAYYtPTaHwzHrjvSrCXUXdkwdKg6mj2PZzdhgWw97zgspthPRc2UhUJX",
  "key28": "5rUpYQpHZDLN8Ew1FEvKMpA9LYy9diMdqWScLwJaeZ6aYFuHBvCy42GxmCg31sQsvJiqxC1VYfUY8CsaqB9MzNis",
  "key29": "3nXXJne6Y5x8hzjBYUmxbadnihKNwBjWxzK2GpfNu43LsZyuwai9o3uz5yzmQ4fKHfs8vsB1s7BtrXHHuHaQsXTc",
  "key30": "4mm9CpCkumZx5Jp9ocmFvHs6zgBwzk4sB8WiUdVYT8BijuQZwsSKS8jqdoACWmpQNVt3eVdgPGdcsqwcdASTYa4v",
  "key31": "3zyhtL2jh9gjNr5emfoby4szUip2jW11V8fVce27TJDJCrJSuJTxTbK3E1XbRhfCgKizshhSEWn8BtdGuMvqHp9U",
  "key32": "3xwrRmQP12yUYpUzQVoxjqAqkficop6WW6LppWtvNo14HySGwLr5HAYsyMivynkLWFfQwcdCto4Y3a55b9YNtb11",
  "key33": "5X1YgTAzMZkdMdNCGWehH3P5HC6HQN7wqoBf2fBMtsmVoKm3PBZzs9BpKtuVD26RNzspV3TFrh67K3wG7XXAxVpG",
  "key34": "4E6vzGKWydepYSYCEjjWjuRrazPCy3guryjuf1rn7SZzQFGVgqBMrnFWF3zt2xprhymhWRgm5uBiJmd3owBx6777",
  "key35": "5oe4XhcT5ocnQguj6aT8pk4U81tcDrxugu1jn43hcrKitU6iAewVhjnxHoKePMMNUKbTJX7xgGyKaPniV7GXU9aD",
  "key36": "56U5wTdkYXw5JP67F5vphhRkvaQfrsQA4N8ZS8FqrW9kX74jNjQ9FMRsd8ZXAJSHkyntPF3awEBaQvyHuZH83suQ",
  "key37": "pjaA2kLcFd6pa2f6kpZ1XEcDQexQrZFPCxq4roxizRqPgr8XQQ9T2fPssyJ8qEDj15zuHQ7JG7KZczsj7QwBL6k",
  "key38": "XN6tFzzyC3dgeukcBhkPKpEdfomy8zKcxyr3bbPA4XHLrfZr7YxoMMBZ4v1tURMARbSuj6f365TcwcqW3xYJsND",
  "key39": "3XeDyqyr8EiFjNFcAChUxk8xHj5m33KysAy6FPaVNUrwjjnDSSB4zm5Vto3R7mv7vuggrbox4wCLJLmMUzzKSP4b",
  "key40": "5n8nXTUnnpnrARmvQo2zM4vXts4fqS5Xn8RLYw9idsf8oknmmGEdjuUWFLEP2fqwYs52BXGvDuW7FKVnRnr2nz52",
  "key41": "5KLLvZwRYsSF5MVL6kxLJTktTQp6dwvMqHHpUi95yjk1jps13Nq9xUGQkd48aNp4DjCs6VRn99Z7yJ3kaeE9Sisq",
  "key42": "5vXMGkhRptD4LiEy5Rx1e4HebSzxyYhZNyhPC4NYYtEsJSS2gt1c6yWzKFkqiUKjo8fCdm4upJN9yLXDVbZwQ9hk",
  "key43": "55dZ47W4QskqxrCBqvEzQcD5gYGpokBvVXo3rqDefKf56wuCmdfLKub7PWBoYQfoZ8nQznu8BsrjazUVs3gjmcWC",
  "key44": "31koUvCi3yX6uRMyaEbseDNvNWpVatTqBkYeuNy1rgkbMECvpPgD4QrF1bADnGhU4Tc7ABAexWZhaJicjJMgTRNa",
  "key45": "NMPWkfF22hYsGf5KyEP3PfEiKTzGD8g4HddwCJMkp6vpRAsPeQGV1Af4QNPY1qgZ4DULA9QJRiBdsWb5Y7daCqa"
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
