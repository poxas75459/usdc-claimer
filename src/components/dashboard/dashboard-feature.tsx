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
    "5caUgbcKbkdWevgxMRkHaj2Q5DyEtR5tdt6NzffRWY8MZcfsmHiReQQm3xnuSKtEskWW5pbstUt1HrW6GZqvCB46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmAJvRSy8UMPjdBK8augFMuntZmhAHL7mXobpWaZ4CvTPcz3yhur2tCYvFjUo4mCdEFRR2APk5pZ5XKE4fEkSk1",
  "key1": "5K5weq5JVhugC3gSx7eaknAd22pi9RNAcT7zHJkRGN7yKp1Nn3Coo75JtUggq1GLvJ2kMgmvCBsS4zioNFhh2CZa",
  "key2": "3XC1uvLYcq1hpEfurhSFuomnFLNAf7AvyMGXwkHqdEhmoFUKzX8J9Kq1xHWZHCuTHYsVgMzeWe6NGVP3HzK6ah8Z",
  "key3": "TKu5Zwy7ULDTq2LXfrRjHrLN6wppBR6bGPP9YWdvb8CiZn9qgRtuH4sCZAe2Jy1fTgmHQsyVbZzfxDK6GqviEDE",
  "key4": "35FWTq1eq1K7TFfkAVDnvcjZCcdZNXUBmzjC7GFrBd4Gg7bwVbaE4kEfHBwvk6YCxZM8faawc4AQuXuGQ3Sary2o",
  "key5": "9ySnGzkNcdT5Wuh8SybRFrm9UmyRFd42qJsVtkx7aKNA7GNPFDer6y1VnsdjgUfcKWPFtNR7yHouwUfRCQtCynh",
  "key6": "54fkMCBsD8XNGCy8122mYvu9Tq5pSAyMv7aRzER81ZM3Z95H9LXFB7oj9K9EVLUijrKYPq2irZJEuJXA3eKdqdwv",
  "key7": "3NXniksKpytD67g2wgaAoNB4AZBWWr5FVsWGM9ueGBY7bZDgxTHJEuxemRqtZKLtMQnsiUVjQXThtEYBCn6kh76m",
  "key8": "4fmxaNXY8iDkxC67SRcuyfipJtWsZX5PNjKNgQT36yetuS2KrRVV5eXQfjmPf342dh7cP9x3sfxMzJn2k7JqQNiz",
  "key9": "5khL33u1VYkxeyUVZH4wwzLZxQADTyVfRbwYzG513Qy1k5QEjoqnKTFUA97gCej9riLLi4rvHHTfsFKNRBNKhte6",
  "key10": "4gaswywcWSKVZxNB2b1cQfPK5QpwS74sY6KAdDQER6dXZrT4zmua2rVnDmNiZMbP4yGRU9iKz7yip6jz9V6ZpfW1",
  "key11": "2fLbyz2ybbqJWXXqTFPCsCRQWq3B1aTxBfSdGbFStic3fn57St82KEqgTcy3Uf9j6V9YyF1zDfXqXbsWvLp4umMb",
  "key12": "4mEG8Hzv52nHwVJhFxdYNhsuXoFXn4bdokcDCaPVMBZHHcah8LKnHBAv7mSQ6RXEPMyz9tbWS6yV6nKDZTDQiPG",
  "key13": "2rQYhf5Mw2aSrUrFssGHPrthRMNJF78QBSbC4ZoaXRv8eRyhVYvpYQEor8o67G4U7Dd1qWvTd3uP54cNqv6R2q8a",
  "key14": "5jss7dot1bt8bxSfSm4wFJExkBKcm86DWYVUHZ1bMqsKrTNAAYerZp9hMZn11AtivuyhXwWpAfpC6R435Jh9SCp8",
  "key15": "4rtMsN3Y9U1xUQFQzCWKr7Z9RVuo3gWTv9p9kpVCqebJXUpDLeQdrPWzopEH2HFmCWZB3KExyG4wDhAjhZ6YRFUG",
  "key16": "ENe31hoL13ncU8JVnQcsukGiEUQPXhVnRcQ1YfTaUkmRpfFNaN1WS9Qn5aM7FbzeWnoHoC8irD6tFnJ1BbnvEGr",
  "key17": "3qN1RWvLvEUTjydagkS8SaSQPixU8MBVYj4aNTTeXdZcRPMKv5XWwpAdJCUtTdG293iHe5c1CNMqyEKgUCBuWGRY",
  "key18": "4WgizvBGSaw3yTPWRf3AcSVomvd1tCheFgNxAL1Gnf2XWa3bRtstEhD24FaaR4KBxT5k9W23Ucrzkb3gxi9gGqY9",
  "key19": "2Basd5qNiHSexybYqfnyaqYtXbeGphMkDD1j6WXhB3szkQmVF1vdCj2nMD75Gm13NS8J77ykZZpqieRj897xQi5e",
  "key20": "3j6SViUiyE8y3LLZcpECxbrfWyUEDMxKcugiGa3p8PDCqxAfXw8ka2aondC2je85p9d5Yk4ttC8YQeYEv8HeWhdv",
  "key21": "2MPQi9XvX1qhJUMMz7tQe9TmJyUMN9zEwfExk38RsHmDGhtUY34B4KSYp7Fvzx2NmoV7TvXiFqRMe8QtMG7xySB1",
  "key22": "2onZDagxs1kqEuuzrj7MLpjaCPD55pRqJETkwtPbJSbTgor5FKeq8B1gHwjtv5yBgqGnVwCo72QExKhEwfpmysf3",
  "key23": "tQrX1qiN6eReDT67MjxPJPxYZ2wTfmBpKw8kVeJ7ZUH72aQesMri7N826twiHFQrA2aQjZmnmMovk8pm7UKk5yw",
  "key24": "34bGokEVnfGBGmuDdySypJhGDnY4nzjAe5Ucq6DzMnra7D1oJt4NAYHkoDR6BL2pSfrM23P3MMJgF7dyuRtT4Ywd",
  "key25": "3nVhD9iQwAPynTg2Gxhxm93U9VABGBpmnJc8yLfjytyBJamErHBUGC66cJtS98WoikA7mHL6MX23gMLzkVnJTfVE",
  "key26": "5EubtJfvxt1SfqvNrYFHsfK35FD95J3YCYh9bWJotAjeYZBFyWUzCWPstF5DxEj26tzZMzoBdkdHmZqqyy2ymV5a",
  "key27": "4aQSv6B7PhMJaYN6LsCXPJeKW5dJpAf5mghtC39rQW8wYn7Ma2sthfWo9jgnVKSrx5ngqpGy9tYtpkDDJ4dZNBhB",
  "key28": "4Z7HmBXV97RRk29CMwWMSLwxcjxrdHYx67pJUqZu1wjL7PKN92QGcyqK77uDwKshTNyTP8v9AUA5rzxZoU7wL1nd",
  "key29": "5tGBsCsNUP8oRgmuTYzd9xKL6HMnJjVdjZmeTMtgjzfTs5ySofGB6fTLFFPfWhuf6TfYq6yvWUufphCz8ozAQPtY",
  "key30": "4CBusPEAskmnBVvHqMmGwSmfaEDQU4TUeQMEetfJ6xWABJZh8htHvJHTLuwowjrMySzUKL3x3FQUJ3mYuEsRXnBy"
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
