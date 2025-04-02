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
    "5BrGKQW74Ycw5FMuPNcJ1TkFVN8g8WCywfdWCZs6UwJwGxV1v79gLGuWKWF6sVvFzfuyDKyNZ9FWfSyf5NBHzr9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYoRebRdkjC3sPnKCZbVT4VFWg7oGMHYpYYUQNhgWKfTsDsG1YTzX8Er3NS5huzw6Y2sKafhGcLeN8N5mAwFw1R",
  "key1": "cu7vnfHky2mm3TdPwxZWsaRX2KenM4gzApa4wkeu1aCEZ4EDkVekatjXo1m6wZfC82nqjvT5WfpjQvAxMzotAdw",
  "key2": "5NdVYHzmopseii6FiLxwmUKdbBo1fXSiCFJHA6taJe2yXMKxxUznaJrX9jMC12Yde14rB8bNU7vkW8nHu9YF56XA",
  "key3": "2LBvvUnnVnTA1rBnYkMz6SCKkVs8aq8wuH3Lbqo49pDaeN49nZZJzUsb8HjtypAihbF4KieStcwWCbsC7cdVLdEh",
  "key4": "42MmgVkpP6mrGgmeAzhPQg53Fn86Xz2SQVyaN1zam94jwyqdeGoUhGqXaXFNmssyfuCp63jeVh7srmAh2PJPCgHn",
  "key5": "4VcxqQR7YUfS6Gh5PKaDqU9ikxJ88GHN8W5Q25wGnij1wDgMH9qXE3u9ZD6q9EmTCP8SnZncR17ARe92cVrJbw76",
  "key6": "3BtbQLQckaaQwTGRNShbYAP96Qig3uQ4e1oAeYiyaKofjPbjyMEr5cSo36UKbx9J2JZNTFmRJgxoPPi993jEExYL",
  "key7": "2Retqoe29A88auV3BZvsj9HDvZg6wwo2uYfRp9o2eNW35ahyr6M1Dz1HYen4SPpGZ6MgkaN9UefZeZ2asXt8vSrq",
  "key8": "5SZH578E8JFdXvs93Mxxp8QFVJbkD2MHEnWVGiUEqE4mn8oT39RA23ErjEV3Sg8Nzs2YseyJz3MQhXMdASdg5RoE",
  "key9": "5RiqpUxjFowwAKZZjZ1qc86bbvRmtrB5G3WPHVsjVFoApBDobvmrUY6Qh8RNZWRwKd4Hq6oqN3e8vRqeuGC3URXf",
  "key10": "Krfv5b9bKw9DT3jGPMiCnTz4XznR1ZbG85ypu6SNP3MoVrHN3j8KbNQLpHMZ8egursUK66PY1gcjyKcGz4Vt5aL",
  "key11": "3kD87zq8SkXfap5mKFmXup15Ui2QLG8TMjC1STwVgypAR7ya1YehhQUmt1jfz5yxykcjeSonjis3qtaCsGdM7Nhd",
  "key12": "9Tffp4haQgf9knPYsmJEEkPzLRBQJryzdQ5oV4HcdwA7RiruJehQNR4VGrWiYV1YKGUsWnvfeV81ZX8t3gmiZ8r",
  "key13": "4aLCgS7PjCRqjeREZABw8Sbed8fx47ZR9L9YnHMBnti7YKXvf9gKJUftrVSNKS4EWGwTYJF4h5anDN6HkYVMx4mf",
  "key14": "4hqJWQaiTWEJUisuHWhmGfzdoPcGDzn3JEfz1jvUwgmSGczCDWpZ3vWswz5z5EWoyJnkUge5LbV4XFD47y93AyE1",
  "key15": "4cpgDub4XnjoUKgKb6bedyg2QjQr1vYVFnhrxCKRaANCjizfQXPmNqxWiCJm3usHP85ecejepPXW8c4wd5fzMWtQ",
  "key16": "2zq6A89syzzJMi4bNNSxVH1zicTiHweh7iQHGtyucndm2ntRPBwdC5beZDMi7A4cE5WQ3zM35rxFLx3vKVuDgAMF",
  "key17": "4CjWJ9qv76HC1diDVG6eyqSz1XnrDcs3SWQbiD2BqkEvMXnsKApojPhoPiALReR3HfaGKPeNDkd7W7MGRFgxLWkn",
  "key18": "57bTUpMyDbzAKMTJiJzJrqY9cYDQAQu6Knx2dQN2A57NpBPgtoqGd3XwnEVe47D6x68hGSNSyt4CBmkPi3FU3HZ2",
  "key19": "3E6DXDYS6hB79ozpw5xd17Qv8uGjdi2tQ1w4JC6vGrMw3M7kfXxjaBtiqnxYZ7i7TMmNGnkqxoWB5gp6gj3t2Hba",
  "key20": "3wCUadnWD78ntmGB2eS9N4LnpMphcrJUDhRSKzqkRyoxuGjbfwUPRdhig23jeBtas8erPHTSN2SkVu5HHZjwDPsW",
  "key21": "5GTbMnueXMtV3shp5YuHBWJCiyUomgjifzeAKiWfBgFCtCP5ZbbTTFQKWP1pqQTGXHhQZC6rhk3M6UVqunVvAXVe",
  "key22": "E4mYpiMhXpL1vPnzAswEJAhiUkaaAqBW9LF2oZcB9V9k4y9JFPEt1qeqDvC8nXqMurbdQ39ZnaKzpmBCqe37zn6",
  "key23": "5545fDv7nfo1Hbmq7kTFbhHQrs37hHHmbx7CNWW12nABz2N3fUzjpPxpW5o3cb4DkjncvrX7ZqacYPAoNtPb6bKu",
  "key24": "2qPt3Wmh7u4FxVghBT7QkV1EXvNqHoVfJDREeqcSJAmnHXQJh1mQV7UYbapsnpKE9Udt7qSj71woNpyqytJRkDmV",
  "key25": "2E5RQRYwC4YSuhhKaNrymDFUa8VyY3chy5xxpuB7o2LxG5e3VDEn2GdmPhwg2CzF1RFseHznQcoPKpdEaQ28hozY",
  "key26": "2opazrWBxxGogc8XmpW4TQT6NEau7j2EyuHtwvmoU9SzZtvtHc4tHP6j3tV5dp5Z6PR29NK5FGNtdqAsaBUie5C",
  "key27": "287oUMvnm1kkqF7qijfuzMWcQrJh7SbvdF8VVdHkEui1HVmwyi6pje4h95XuZWgi4YJMMFhixscHXBuWZCy1QvmJ"
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
