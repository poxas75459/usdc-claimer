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
    "2sEjiP6rEVjGVZ2DWEbQ8FnH4j82HQja68fZvTehGhLawrLK4DCURmR8w6JPiDQK5wGN7kX8LnxuSRH8QZMpBTrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39LVoT97A8vtMit5EDANSKWgLRuQGJrPW6g7Tpq6zRS28t9BK7R7zJmHZ3Y9ytW7wn28njkHwhtAv84vpXBQFzpx",
  "key1": "XycKTUnBQhiq18ueFkpe29BvRNKWd2ATntikwwVuuHS55etjTYeBJmTtLHehQDB9opYhhuBRy9uVkvxiryFMvYV",
  "key2": "5awFNDJHQ64zNQqhJyJwzR8v6omXbV5aEQAnCgB58vYxBn1xcqoE6pZYnPJz6pEGZ1a4HfhMAgbPRuZzFgMjyaVb",
  "key3": "ZawRiGD6oHuBiPDiLnGSSgdJh2A7jo1mvJJV2Vuh5pkTGNDLhCWgJngLmuKpf5Yah3213JWdrAyLY8vcLafWis5",
  "key4": "DojsSeG5UQxmpgzZFxKhaegvMSRrbLX1JBpMjwpHNW9vFTCrU33zZLZMSqtPm6ESTM6UcNdFCAKAJTDV72fZj6c",
  "key5": "eehD1DsYs4NrCTyGDDHD2PW1LZ93GbnjsUy7jJAwv4pZZe4P1hWDoGWrhEnJmvnEGdFLKewCuhWqkShqi2FHtKh",
  "key6": "2hpKHPH9uupfGJJucEgRCXBeHdX5BBMKPsmJXeXHyDKSUoByo7QNG1gawDqBLgzo9x27mRrYerN7yesXEA5yfLpM",
  "key7": "ZiwR3HYqqqGYfiJUB7eP3ni7yxHFoUBbnkMBEHpiWP3JufhzJezN1VMyf3nLnW8K9ZpbWd575v8ateU9REt35ED",
  "key8": "5jTEfDHiXVa8QHQSdHdnzHem4FTpCPJWsb4SWgE7xt4saTUz2GPqyXM4cQrhyMRhWE5LF5v88sLYZN7vXGy1vyoH",
  "key9": "99izZGeL339mVTWdzb6g5UkLuwzDbUpxThcx5yGe6ZjbjJmKQcAeXk2cqnFujHLb1gG911uWQ4pSxGp1ao3gcJg",
  "key10": "CW2vrBkEJMVu3YCzsdHaAn9MvUiKqpGSvazQSgxmLqBjLuGeVkDWCopraBVdBAy7pnyPbc4p6b5g6wBrG8RY6rJ",
  "key11": "4vreWFdKLQUqnHUjCjUEnK5xic6sM4RXKNqoE4aNm76adyXbhb2KfgA1Z6YQniwdXbMx5o4tyZtaGjW7cHT3Aras",
  "key12": "5RsHfxXDNgz2P5GDP4Zn7EsSzSPcZtLQ5AP2Bxe9Z9ALHSxN9bouR4mnNBYdrAGMNCn9DECahv62e7spMv51uiU6",
  "key13": "4P57aHTvrjVkvjkkCwt7maP6S6qdP4q6nigqJ7xEta4XG1wbvfabVMqYh3u46CireQ6SYWsyWYKsss4fKFfPCYaY",
  "key14": "H1xoDBmyUcW9GR4B7iXjS9y7uSN2rhMsv4Vfjmej8oxUqiENYbvWEH2MNVJQ3qxaCu4t96GUiMiuUqp6n7VAAcA",
  "key15": "qLvjTwtQ8kp4BcUzpiWCNW7HDDn7F6UsJP7oLtbkn4zq4tTJsRc8TmmGEMnNWn7ewWuSD41AzHnexMbMPZkqeba",
  "key16": "2NoVrNduhhMreRMWGH5dfh7ggnSo7ZDbz52kLSJxUhPwbYfDnR16U25X6YTufWsNzYwmeYFRm9pVxTcnkSUJwQoC",
  "key17": "4pTBG1fqSGYj3EzW7bHaSzzSK99U8Ti3Djx7Mu3prduvSasvWepgxTH4gpKwQdXtNnYKeQUYdQec6iDjdAr8svdr",
  "key18": "nuSaCogDz3kzSKCtF5kFjZy8KmJksupYBREdCojxznKDXU5nVNxBw6Fb6v4CW6yjJPMcrn9r13BRBtj213ATemB",
  "key19": "yUp5VcLEoZu8c7R9yy9PceuhgWrS6AADjHfQ8d451SVL59YbyLHXuuFgxQJrcbYiTViNo8ttDvQxLwyh8X2woNi",
  "key20": "56r2ULj3a9jRviE84pSiS7G9XKhV6SyjJJwxJKkQE1hRv8KhGQchzwcGriJ6ScEkK1nWCVGLaMwDr5Dxno7fmpvE",
  "key21": "2anUFnp7iuHmg3MzzVwBtg5u58WYpt11F7xvUUFuES7SA6PuhqNNXSWXEe8DLF2PStcgS1DJVCjYYLHxXsDkpFeA",
  "key22": "4MbfN9U5FVmzre2L9fYfiK13YVGgeaPfwWA4JXRQU5tRqSVMZQ7M2yioFFzMdeSH7anAbT39Qhj7M5AQS3vmFEPu",
  "key23": "4hGoXu8hmysccEE9GFuEWZia776rd4cn3qLhHc8fULxQ9pzQBgEMV8a9RXsnEsDT82AxHzDrNoiCo8hVek2RFbNV",
  "key24": "4j2iodiTaePyCyDyAxzWQiUR7gy322XqU3xoGzEHADZoVetG1ERjX6pKWRJJUV8TbmaTWZoLoeD8fUod5ZPkmotJ",
  "key25": "ZEzMRkNDyNWCo6Z4xkLdJGhnebf2pv7xNEP593Tx6KkU6r7z4gSvoRLk4sRx5MnMVdyc7vjCuPboDnaw1WzysDK",
  "key26": "3FWAzzrd5cxreDqb1xfVJXBmVQQW3d9nPnQXUuiLCzChnkKQKwLMp18KmDwjwrPXeUBFhEoVDa7iw9HuzkG7j6gM"
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
