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
    "5n5Jq6Mypb4Ew4EZi5wJAJVVmYvGasMAihCcfheHUjS1hb5n8JteS7PdBy6PErWAg4Wq1QtEz6LdpDhHbqhrh5Cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xdpw9cnwguJ2ZqMm8raHBHKJ61nQ1g92wNeCxhbBo1TLgANpme9eHfRXDRpBd1wsPmdnVwXvF3VKmyFqjNX5DFH",
  "key1": "DDzxsVB1yUURXPT7kefEUXRN66ahxBgzi4hJG3v9mk82Govsn97vGFFNhXGfem19icUd6yTQTMDEbSTs7HYZKTa",
  "key2": "4EEpt6LBKNEt8Pu85sdVig9dxjzAk6gesZeJ5YSEmCgSdd112PVP8auaZj3a3pwqUc4DCw1GBqchynLy2nVA8J66",
  "key3": "5CantbmBrgVyrS6hkgX83k8MiLv2eXWwL2cdhrMVSKrvJzUVRDm9gBCMxf5Fmt1RR4Wi9Af5mJTdvWvSAKrFrFK2",
  "key4": "2A1Zg67vfXGSPqdPM7oc84rAY68X5LT87TUvYbTVyohm1fyxDwqZYkr7oVVCe3XdFY5UW7hihnTrUdGSHtCv9R1h",
  "key5": "2pLu4vtdjqBG4cHBfSGtSzKetDZ9SP3ySpBggZk2cAnrpextnBUrNNt7dqwyaWxyeYd8nMrTKpeYeTW2V4pAHkXX",
  "key6": "xyaY3xoJQd4KueyGorrpZpfyYBV1jyH9Up9ZdyAjfE9o4gRJsJXndzbi9jxMj5CpijSmsvSE5UEFo9aAnGHvJyK",
  "key7": "3pN247Ca6ACKR9tf99JBuKh7jyTUTTgipXyuE4wDpXaPBoznJPTjtnKG4gzPA187kqz5R3Pfzz68aU9Gk2NA75Wr",
  "key8": "4iwxcU21BvW9EqwYydQ8us62BhDkjNmVma5wER8x1dGUCaWW7yr2WWe44FgyXhhuY2Ch7Ntv1vWBepu4aqizCYQw",
  "key9": "5Pdd2akscqF8VCX1Tk2u8JqSBkBmaNr88kn7ftqvhaHbHH2keRij8Yj4JiFdzXX8agUdtFsrfEmvw13htXXtK5iu",
  "key10": "67N7coZzjaB4rEFNKJuHoLePkqpXaV7oY72yP1cshQviDgneLwgq38sxngb82qSdwAgjjbofLn2MbigFvWXjtpvV",
  "key11": "4LkUSkWWddvah9gPim1T9Nf5qiv152LtgF21ffMgcdoYKhY8pWpJZ1ZPxBuL9sHvGLUsvmSMZLfSRat4zerGQng5",
  "key12": "Nk1Sa9BrcxHPAj1gRBmYTmu8JM4NssoGTDsaL7wzR3XU6c8etKx5wRYE9MEvLUMhd6V6yMyDpLvjmnrJ8cwoTPh",
  "key13": "2R7bjarf7bjHaDpgCDxV8WpwCGwpxo6CeXjqF2yhyoMPDEtsW9VdDdoBEqhpPG9Hc2mCQytPjWtgJccgNjBXwLuP",
  "key14": "2f3oEBekmZr1b5tFVw88VSAsbzYRCLKc24fDsMnhHdW5rLyaWvEVCxcMjBgwBdTUA7Bt6g75ifpyzFtngWGioZDU",
  "key15": "5NP3MiKiGH9tJ4tULpyoG2AtjXYHazJxPyiZxjpJE12ThRowvqqvW3cHojN4ukCS9Jmpudxn3fm8RuSDSGKEpgeb",
  "key16": "5abQrVVYGvkAZqCTRGx4LvaY6H48PiNT9csnnAqvNjybPkuQTk1Y5wFdkW287RbCkGwebijtSpDeWtrndSevmQ4p",
  "key17": "j6KyMw6x8fMyszbzbKCE1v5CGXBP2BiEaqJUFvJa5jckQe3ygyuLCWrWUBHHwGaPcF39tivpJkQndvyTWro3CFi",
  "key18": "39unetC2T5r2z2UVEd41CjJNCDPcnwtN8KXEnrML8mEW6oaXGsf4Q8D5Sfz22Cjn2ntRABt69cnnogwR7gbJ7op3",
  "key19": "4NVyYc4xEdHe3FHCRrDse3uARHNvLMjzJwKeDkmVB3kt9Fxk2XxJADqDnXUz3aoXgTxUjG4S51pDfk3cigGPzFT6",
  "key20": "2j6SKkhWx82FRGnHTGgrvoVm1nBvadpo9yofPccAJq7n5db4bAV3gdsv4VHPsiCCcmhskgffCRAYVgpNmWPKdkEy",
  "key21": "g6t3s2nVPBXb1uW9Gdd2rmZc2GHV2jxz4TTshYu7DhdiS1ajsCKbbtQSeAwNkb3PPPVzF1iduG7xCJABoEJx62S",
  "key22": "3yk9xJMNUUVeMcTKNyDHWNmKDviLSa9j2nUhWkSLvaMEkaEqgyzZ3WySFMhhaXgk3PxYpQckm1qxFqkyniwgdHCs",
  "key23": "3k3JQFH9Av7NRudZsNby1WLLZAeUaT9YK51igKo71H1BpPE9ErvG9HLvoFpAEZx2Ntm4iKHTQiqcLXhimaVh7vES",
  "key24": "5WJauq5wgnvS28SUzCv8mEr8LyFdfwcWx5LPmjwaHKNsP4tH4pJPtUigGxewEXqXYT7U1iEuwqTA1JJkeHNiZR7K",
  "key25": "4D55kZmncjJmXk6FhPXHRCsqY3YTBgUdpBG7Mx2zWXP7n3LvDbkaybG5hVhBiZC4iuDLvAwD2tjG5SbBuayQJBBS",
  "key26": "2qWzHTQAbJCCHgRykRiwDwrP8c7GxsL8xbUoGsWs2KQVpzqBtKPvDAVc7Nad7uUN3vByRZERmcd3anVGJoRXcX37"
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
