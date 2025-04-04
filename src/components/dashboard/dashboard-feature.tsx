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
    "2ixw27iXwqHxiLMqKLB53VPsim5xUNT58V6x8MMyW1VGHSZVTr47eUWuWSzob3fqRqMpyYHpiivPfDBK9fcUJvN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UFEcF42MYGrv4mKBT1DN35mngcSypu1aZxAqVAJ3mM11XTusBGeEXSWC62BVBBjaTU16ShTjAFi3kA6K7jCjoiD",
  "key1": "3BSyk1M92GRjiqDf8Ra9EqXdPJvbQXHjV6kVYEDZn3PapnLcnup7hp7sroPziLN4ndRWLWKcxDCtm9ru1W31KP68",
  "key2": "2NZomtBMwP3g17Mcqcwy83GDj7e92ASbptn3FpHKZj6JXnZyF2HKwumWyXNmJEviDcVGKerhUYs1GriW1D6MkbZq",
  "key3": "5Bx3XEvkWz7VG5APzrravWFih4v4D5aN7Z3L2bND2zE56F2Xnzqdr4vcU5sqE4yE9NfDiKoVxBH5MviNTF5uUqpZ",
  "key4": "3p3YunsN4Sayyk2aEVJtFVuEsw1e1sxTqjPvKseaevkE8gUwuw3PJovgJwdnN6b6nwFAeUXXXBEQ7UnbTFCJyj16",
  "key5": "4dCvtQm1TZgLoUJdAgQeYKdxoTDGvXVD5AAYrLq6bWWhGpeodunVTE4vDAjGNEHKRNgCfcjWQir1Bw15Cmz4Rt55",
  "key6": "4uLYmWvjrcCzjaTJMk9rmQVQS1DQc1VF1bDXjL4uPvMLPAXzrr1xGDJjPvx26SThvwPKXDXYsaY5uJZVGCFgC9gd",
  "key7": "3usJp4hLvpY7YfUKsgdV5mje3a1bAbEUACnTRcHScFgUiWgUYR94f6UfJQ748mUXMkeenpcezLm6nvYdbZ6aqiJX",
  "key8": "3qqSEkaVEWJEgwrmPciaygJqAXKsKgDHBnqDT3sNNuEtZsmGvJxdWHfGyUaH56YcDPZ2gzKNjdvfYfGXcq2aBMUr",
  "key9": "598hopLR7N7shCbHZrAr8a28qJC7D5k7Anb1dPAiXTu5puwM3bvryA9MiPRyLo1TNgdB94J6T6tSXEsK1iJq5dq8",
  "key10": "4ZmBnR1ELQgWbMRxGLBFVaTGkARgtGbWwMpkeAZMb6bq9R4ibyM3fgmhUpsJhuxYWYPx4PGDzjYz24t8N5vHqQkg",
  "key11": "4CbWMe2EokyyhZXzFNMTCPQMaCVZvEEAqSg6EcnCcjq6GTv9FNcK1iqi1Zjd7iv4RHaunMUqurny48kLPLWttgWq",
  "key12": "5jrjihwa5EZ9Pg8BCKfvjYDBqrPq7iBLga78PRu1dQ5nyJnWrywiSF43DGvre1zSuy62eVtthRjW3Smu8qtSUXv8",
  "key13": "3d7EXqZ9DdQNqaaYibRf9wEkpJSTWr588afEBS2YmUm7TGAt4Sj8THZD4nt9uU5Tou7bhXATVFpSVWPA9NjyZhAL",
  "key14": "4tpgUaLUVRrY6xLTQT9zi6ofPJRvDziMxHPk1Q21SQdcpuqN8cuBP1RaKRvfJqtakLJjyttnh4Pg2GPPvRXAKF2D",
  "key15": "3CdXsGCKs7CBfFTmxkA5r9ezqmeM4WTMVJ3bugfT9Mu1rQGiA4uVM5RZFHFbxLLZsPPUcFvGb4feQiQ7e9jHTyPF",
  "key16": "2mLoCtgASnz4jCuGC5iswEKPoK3KW7d1Fjq9fGNcEtkB52xo2EFq5dEeD3BVvVrfR2YDfkP7Q7dhH5G5eX67Hqwh",
  "key17": "2V9TJARE4A1L25SPmzjvVmcmbyU3B8G9KrE3QcF7vBQdv55P4TjaDopsViBQcWeNXGBWpHht6cecABYmSRBs2pPY",
  "key18": "3ETodkWYudKtrgekyWJHfPC6rhfrWx8H5a9ZqyiqoYYHWqGTTn59uf6Dr9o2n3Jq14DajL92fYNLWtdAXBn3MN4g",
  "key19": "4sYxm3yQyEVH29AKv6DDqLrrMxymaZ3HfPetwyHTgYK6YHiVGhHPrGBYshU7egkTEt4BfKGZxPT4E7okvdkFeTun",
  "key20": "LaZJCEN75fMgxmmcBdtFaz9nywHKGt4JxxHL5BLCUHydmEFtEt8mAtzXwTJMx8dpTTsMbFNsVSGyhnSsysmhzzk",
  "key21": "5Sy1ZB4UMvvUBfDqcMw2aFTNJk5U2q6QR8cMS8j4C47btoVQbDqgz9v2igqAsuodkNpH7VRZnHcwvBsdwcSTuqy6",
  "key22": "5arDCYmaj3p7P8F5DXzP5xnWuTeJrqrY5iJVJ6W7opGhUpJfPSRPtVrSZfZBYMehNE2Pk6kec4hgs2rwq7iJsbJV",
  "key23": "4bVTgWQzMa2TSAGzbRfhUDKkKjfS6GZpht74WkAvSZKCSE1pDje1aC16vMqBjFngqmzbp8wr9Ere9QCujq3RvUdD",
  "key24": "5e8cQjdT7xLLU9kzXfPNj6QTX7cRHLCYXdvrL1EUjsUzf5CzhhcfEdchETw22Zok66RnubtAVUChrgNKZCDkXihz",
  "key25": "5DLyMShNfEmQDH4RYPhRUTMUvd9GLaVLEuvUajJkfciW2DfpVrsY884tTRTEM4hepCDfd6L73JwkyqQ7XhG94eE3",
  "key26": "43Yk1obsnxnaqywGWZQm44BLjtAbCAJmni5ioW37EZL3YrfRdkKoaHCdSZSZ1fL1oiXz1FnJMiq8eKYZL5fMMPHQ",
  "key27": "zmKFCSFjLx4hKpvrW2MmXJ2wpojHoegHT5S7FTPdw3iJVPAF3po9icSXqRC8vwgF23LZ1uFADxVDE4bqUffwfJx",
  "key28": "4XSh1Go5ybNcgxbnmUv6gSjZwdfjNmur4HpsUUbx1Db7v5E4XfVmtqhnP81JMvJ8ehsQbUS6o9CXHNVTUkTcFe4V",
  "key29": "BPYg2z14rzx6BaAhecWnB3oMrxkuFvrD8MzksQjdMM68yonH7GJQSrqPL6EL4xnYNLtvv3J4AvUyFGXHPydKmVm",
  "key30": "2A454BvKoHYhc6HQYg3YcSUN6TinUJ7Te5nqcWf1LHwgE5GqopLfog3Yab8ChwaKvjR5pYcjy49Z2Y8j8E4tb2Wb",
  "key31": "2QqpAHgXzP1BUkycn8Wi1TqXSj174dNf5mUmu6G18u7SK45CePxPTipr7WadZh1K3PV2816j6uuB5M4ctvpgtrmy",
  "key32": "243Q7d7mCMrTqycBP88yarc3yxAuHmMaiZPj4C15PxByfQYoLwhfxAD54xCRfS6wHkUR4pXtyKJyaDz48Ap2RmeQ"
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
