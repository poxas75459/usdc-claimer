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
    "xbLrdVEYDf9wbaMdJ9NtaFreQVzNQ9AFoXYwRfD9aKPzufDGEBt1rXU26zBshqvVh4EcPikjffWM8xqzZZavRvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G33qUZXHF5rkZHXBN2TwBMqFJGugjMmHm9G8RgyhLShts2QhpUjeTVjK1j9zcvGJuZji1uEssEcJ5WaMFwwrTXs",
  "key1": "4uEJpJuC5xnzTUdKpR9D97L1yYH9PQDzEYddaqiTC4QQCE1L51e22ZKa5ug8yC8e9qQ3D294UmGtBi4DJNQ2r5TT",
  "key2": "XZt2HojEhiCpo33ost2TVvTEcB1B713oJqqsKsC9Qo29RFhXPYTFabgfbMpHkfFGrd72pmfWzxqsknDC3uqz71y",
  "key3": "2DvcCFTyEf5azNffVZwE1x6BrBVnMdo5RK61hVZT4py7ZReb8ejirPLcYgM672fy59SEk7wFYKynvMcCWw5kPK8L",
  "key4": "2tr6yi8sTJmoTh324xzpNFN6yWWKFeLfJ5PmiEvk3zASqGTAvs8a5u6xyKfrfuEFzKgBndjwwJbrjwZ7uEGDSAWb",
  "key5": "2VZWeyxoBeeQmy1PSWqAoHeBTAKU8hkKK7GT2xoTN6rxTubU1brupLcpigz4dvd9guhThU6W4wvezrujrQb7hdJC",
  "key6": "deGJLJK1LSpUE29aMLaxRModzSaawP1DmkkHeHFUYvyWCWK6Qtz6fbUHRsmn1m5xMq6EKapEBY8h9fva6mLxqJc",
  "key7": "4TG7XjgnwuZBwkvqG2ABT2E2jEdfCNh4HZiZbTcR7bZuKL5MLB7J1VdTCLAtweghpG63o14wBEX7jNgtDB61JAMK",
  "key8": "iBjAGNs8MtjHUcNX1JdRXqXEDGisdDzcMY97wLUDXivzTTKBGMZmReDAJLpCaDF7Zs7AU95Y84Zgtv7vsPtRYor",
  "key9": "iEHmq92HFLQFpRdyi9xM3R4SgrvykCKPM2qCJzjQ6npwgFFeqfJk4VzCHa6w9qe1F9P5TcxFhGUiK7fA6i84Ks7",
  "key10": "5xqZZ1F6hEp9QaX9iCUwWVhnVbE4dzEr2PCh1xudLxHazLBXMoaKSZdyMue1XpQY2SezQVTAYfu5eUiBt3xWMwyj",
  "key11": "4cCqhVVVXrUhf9VVbfVmmvES3C6FNDEc4jK44kxS6WWbmxbURJsbJu861PYcnZJQSAG7rZmkPQD2tbZELpEEe9F4",
  "key12": "55FnG6d4E5Y8FGHLkxVAMSeHePXAXbAexNQhqtwUVfsw23x92t5tWRUuMr4EBVJSez5X8Qs7KfAmviLKRV2tCHhS",
  "key13": "nGoCWmtZuz8t67tJo8qMUmnUzW7kbnqagg42dCwXtSvi34x8ztk5mRiCALvXiYmKR6X8AYYK8pnjmxPX9TVp1Y4",
  "key14": "oRer4dmqGuog8Y2N7XLGsaKnyM4f16MWSakrG7uu9JENuqsNm7UfPRU4S6eBqoLjMm6XMf9p8AQwezU4Ng1m6re",
  "key15": "5weL3RaghnZU96JAajmcsEh5G9zjoTPhHmam8khzmr7vuK55T9VYiHWwbqctnoBskwHLmzEX6tp8XV6EjA3Yd9aB",
  "key16": "461wNbb6f2XTcj7BdMHdijiPTU8j3o4DZCZUEAYeKnMFdBYEqjaKkvENmEpK77HJLVdSir7aiP5rSxz3WXML4ZHw",
  "key17": "x6DT6fELEFovf6SrqLx8gdYQRAUBg9K25CF7n3L6dBTUwDww9L7oE3MvUnbpvpkvAEnbpMbQqAhht38qdsJh8iA",
  "key18": "38UT71Lgws8L4GEkQD1GDUiWBaSru9RufFUJghN4ms6pySPUQmVUwNvCCEvpcbQDiWVrpPj5Jk6wwkC7ZuZtyqiY",
  "key19": "4wyz2uLKhL3amdSAoyyR9Kfm87EumbNzE8pKXULkpdL6dojbuEi3t9EaUwNyRnTa8htnuLqaUE6DK7Uu9iKeDmwP",
  "key20": "367ftppmDZag8p7smZLUoTMbySDzAWqdpcBJdu9qDe2B17GcZRnNtSs4Zapkimv78fTiEpGu7rbkZY138V4T9JP6",
  "key21": "3GvMYoh5oawVoR3vyXxJSrhYJkfBG5tSv8LsHR32BTAh8KTvbt1crjfNGLQutpyLe3RxvGJTUjFJe9Bz52aduzfd",
  "key22": "2bEJjrjxZYttyhNz2NZXyVNeFgc6V8Toz4kJDuS4iYpcoCBRUgzpBvd4zAGRwFQKLoSZ7AfTq8qE2PVt73CVC5MZ",
  "key23": "39tbZW8knscVaYE5YS6DGJtxXynnb3bFMMenydaDGQ4qTQGva9VDR5KVn23ocxt33AmYGuPWCVYJee3KAhGyCgJz",
  "key24": "4nhrSeWtYwU6hXQGVj62rxuHGjeKBfeLfQth1bUjEtmUjLc9cFbTb3oVeyCq6QPd14Pm3CuHVfEz1vUvnLpSW7W9",
  "key25": "3KQXj9VycHiomsSD4uyPQZx49e6j7rorfBtdWaB4aY89JGtvEc5BHNKgH8Uw3i2CSbWKbbex7mS8FxqmiVQPpo2m",
  "key26": "3VMaEPpc2qdU9gBe1G2eqohf9M3iCRpfi3pJeZTteahghnf4xFJxTXFmDqEHDGPsAhPxdqUJkMNxQodiGKtiYYeu",
  "key27": "43bUTJpHUnNNok4fC5yZbeyW7m8g79gcs9Unko2njVPihPQGSjNpYMt5NNCFpfmGsuCVGM44BKuJz76LT9nYgpfg",
  "key28": "4TCnkufeEYYq1dJrS48TkgbzD9PkJeqwjG6J4jqhaMCVaTkC3cfeF2MRu4jBp1gwDcCdnxMrWUE3erdscBaTAXuU",
  "key29": "TDuwXVo79rkDPaAPwu8NoyQyqB1XzqW2ZEQSwhHrn2rPw1Q6UG7p1U6zULRWicNeJg5UAxyTfAkK4gjHA1vbtds",
  "key30": "4tYmC68WR5VzNpukZH6yEqvLcmXkdFrQ5v2mFAuLPRiEEEhmovxZamM6KLX8KhdCtPn2Us5JiM8R5f93PyTT1aU2",
  "key31": "436XsjVpWcY6VpBDBWw9exioPBXT44F8wbND6FrUxSQM16KNwirXy614kgNdBBe21W82gdzYYQR64dpTZmi13xCR",
  "key32": "2dUEzqukH43nYWkR6BawBAHKGhR1ZmwVrWq8Q2DvJeEE3vhkHsaLDui38rtQHv5Q4wi2hYuiNig64DQ3XbkXYpGz",
  "key33": "2AiCWXJwRwh9iR7uqjPQCf9hagowhu3Mu2P2E8xyTuMkmpFFy6mhrM5DyeNTTrQ4irhesuWDzCrazH8ZspmuisrW",
  "key34": "3BMLkdTsgTZ1VaAFFjG6dQc2Cst2rNFTwSooWmqKUVqwiXyV6siYpZ2GH2e2cqUvojbZ9SYhbvTJo6VwbxMxFWj7",
  "key35": "xKJd69i4VcYvVQxSAjaS4jJaBQgDjBSG5PGeXDtdrETGgsEW4XYxXJSWqfaMXPkwWwQqDto8K5cU9x2P4pbyEJY"
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
