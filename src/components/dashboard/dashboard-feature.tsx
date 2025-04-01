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
    "5DaqmWjrpEBaVWy5a3iLgJwzfbeQmPLR7HtUzLqNNTRpyxvWeBBdvx3EeZq3qKwn1yCaXzX7YS7RfUC94EYDhjka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tgpPFP4NX5JfhpQLV8Aa19TiihAQWvbXkc4jCJYefrDcpun6YSyJ5WZKUmRaeky66gVagLJhYcxNJGrgpxbuehb",
  "key1": "3y9e1CgJ7wB14G3tcpy6Le4ArEayfTNABAH22kX9dD6ZuFbz7EuuHMGAEjMNzBFeNfeS7wA6sHtbq37jPFboMibU",
  "key2": "2wPvsUyWVmMXtLj1935YfB1CRDqautc7yVgQPBWZd5SrzrvxKGhjYDqd5mWHtU68eWREusdcpPBqkgx6eGmsuEQP",
  "key3": "3cAMBvX8L7QyE8xou1KanvdheimyNNxAhvwUJcKfRkyRmno74pJbTSJN99HsspFcbhBPXptWY5msM9mv831gACbB",
  "key4": "5YUgJs6qLHYuaQDbWDxq5frBukKrjuFU6HzTJdwVyEYLqFzmAimbEy2TBe6B4YmqtkbN7qKTnzTy83YeysonbF6t",
  "key5": "27zhBC5VmCvj2dtvLkenz3CtzCot9Y1eQvofAYy6D4izDPzHK2nuEXqaWYsTiaky4MQyaw8nyrNspMDpfrBkhE4j",
  "key6": "2TSfv8fuXKtKHcUG6LHu4HdUJoefoDhv3bS2PQNXSLutsM3CRxAiiWBMNcS1kLNEGLACzPnYQkXSBX5wbwW3Fv7z",
  "key7": "BG7uaL9ydDxDkLVVpjjSggJFhix86evjdiinMz32ZcBhCzfi5TPeTAPxhEkKUdTTr79sEBp1jjJicPh5WRTofCp",
  "key8": "2tbztXhCVHhri79VTjD5BrKGHFU5mE3E9qzrRePizEjQkEdSeghcicPHEiSC6fPBREzdB4ih9GyWrUtQmYAn1gz4",
  "key9": "6zEDiKEobNpou6S5g8i2sZEetq1EN9SfQWD1sER48jk9WoskuQc2P251QxQgVSY434UktmDCKk6gsyJUdv3pzT4",
  "key10": "2emccpDVhxoE66d9qprUQyG8GNgz4GMJe6kZri2VKMCMaYHiWseaDu1YEcPXvk6q69XbNQFm8L49WVhZoNW67iXj",
  "key11": "CDPBTEtsADo84cX5mapyq1gc33YhGyx6yLiWqce6T7jz7itSHoBb7QtPVCLkMNFmgTq9ZSfZSgGdGmxm5aguouv",
  "key12": "48XUaEAPS7nKge8ADDiy67CJtq25VN3eVSzYrTQiXCmUBzu6TWg9DKYvcKEYUh2RhLp1Sr5gW7sJgrGFuqzZmVcC",
  "key13": "47Zx8sxiFCrvdJHipVYfFQu3B1mVWVete57ppxGSdqgM6G1XuFzVMkPjQSfgprvQTfP4jDTnAjFiwWvqvaknhtRF",
  "key14": "386ML8gEXGCuwwEM1Rr1hHeJvv8Nb8oDch9LGWmFXRmpyi1GoBKQ1WqMGheKEwr7KM3Ehuo7WRHTbPAZVRuJNZyi",
  "key15": "X7PB7q3MdJYqPnoLpYouuiCJXiLQLkp4HFx8j7xxHM4n6f6sXbS2fvrUUMnsKT7GTaG2udVYY1VgoBEgeY5BwFC",
  "key16": "5LYKwVHF9wQh22YwkMzP3qAeZ5iAtFoC3ufgHpz5kiTZ7ZHFBabFiJeTZmYapndfYQ4SJWEvFv5triHV2Kjxqxgp",
  "key17": "5hxJe1MtasEFToBiAcDmqjNMLFDFh8HwinRAhiAtPNpmmziS1ubRFkpHfZDLoeBNLdMAdDNdzuy8LZRujt8aKUjg",
  "key18": "5stJYsEFgU4fqNFCmCVd14bAZYGC1ifRVigZCitzCmGuyWjc3RnmCPWSb93ZYMJSeP3Vw54fFXk8ZuVxU9gDLTrN",
  "key19": "FPycuXwwb8RqkKjxL8PAqxaTqCRc4rNae1fju2TNqZjbBsadPYHdDf4VRbEKYnQAo5Mvivf5PYrHXnwmFvYrzSD",
  "key20": "3eWcQdUWrkL3Ay5jccs2b3j73Uw8zQLPwB6iRaKDtt5cQQYJ5wfNiuM5t29oqpApBNWTkntCkqEtbv3t7GjEtgqF",
  "key21": "fYdik322BraP3Xa3XQeRRzjeMNhSWqirssonLuzh3v1yZaELGSvfxNC8kajYGHj6D7nufniFFAKX4Rzq6oxyYRq",
  "key22": "4eJuUehWwyCYPJiFAex6U863CSPaZqvjHrDj4hPkADqdimsA6n9eKNg1YYFBuxLbtfRVwEueG6RXAjuAtH7NDTUi",
  "key23": "2CJ1qgp81TzSBbohMa9HdGbBDVMaFMyUbQVME3hitqTwBatdhxS5HBSrck6sMTNNUk2XDfXbJZvTYzv1aArcWA5w",
  "key24": "3F5GBoi9B4VRspMansmdurRkNVaZn4t5SqewtYrRXUBzC8FNWTDExcy5VcoH1Uh1bYFhBA4RdexFqMRxw7mz6jaR",
  "key25": "5UvWHAtfyBjnoJBVJ1VNwbYQXhVVD4HotCg76S8L7zHwon2XQLv45QdscuMBHvHyPpr23ADtqCSoFB4Qq62SyQmS",
  "key26": "2Hx2pJLV2yUc1CCN9Q3gqN8hRR7ugjxAzY52powkP3xy5xrnFDKSgMNnAkQTYR4LJVeuxCYLVPTHJ2yKNFFTQBxP",
  "key27": "2VWb1V9UahgG5UJJKYgv4KCDFGwrvrsX2jegWxMSAzdP7aHrjUhY3p44ztDaK7Dc88iz1zoQjvjqzszNuS6k7kjm",
  "key28": "2hHK1jzxDbGDsDe6JaEFdhb5NjwRkpaSBq8CyYN7mQfEWQxNHmLJGUDjtMhxVQGnex1y9fUwNoFUtZnVNSdBeVJZ",
  "key29": "2aZ494PpiCHvt36TXZYaZA7Dbk1V2kJPhNxdLxGVz2KFfUEgKzaA7949HQZXWjcYxzodHMZLFpxPVXxFxSHvMyZN",
  "key30": "5LhwmQ7YDak9pvcV9QWkt7jNvguEMHyM531S8HC1V6CAXAm6VS2L7Ht5zreFiHmb6QenhpxX3V9VJjYFNSawAsFm",
  "key31": "5mDCdHH4JcVYWBdQLw4c1a6jSoUgo6zpUG57KEQkDbBHbCCJ5yoT3mUyH8j475acgxD4KbCy7rWjdJCrYpqBPMfH",
  "key32": "5syEmySS2YZA1ttwXDgU2czDVhmwGRhezbRPjCzBGn5iLZSf2iZPUSwKkPmDTVCoebFvvR5xdRKCHhLsSwK5zaxc"
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
