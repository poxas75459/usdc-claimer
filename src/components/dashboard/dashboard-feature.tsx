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
    "3TeYXDk3UmqfWfxhYyxgGgKtBo2DoRqtyxbmeYKRibmqeKDmWQz8jhYr22AGUoiK6rEa5WgCaRjg9k5cR7kY6ZGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GC3yy9du6uomFvjHvp2MT4i4vpS96bNbRvA1tT2kJLMxd6fsZ2ZPLcq3ttcD6qwxMdUa8hYws5ji1WV6LtpVjhs",
  "key1": "63P9p3sfmn4MvrWxLZNKwmEENGzo5sckAbF7Cnn1f9a24JcLBJaJQiXhNNqxNiTSCYZxinPFWs9VwHj6XhCBL7nA",
  "key2": "2QuqgqftGknWyGohvMawyydLksGZMataRmUMHEe5wSrbU4NpYvSrBaQHyvcyCKNZS8afR7qkYAryn6PnbESf7Qvx",
  "key3": "5SZKGL8c5ydV8UErHDRpNwvwsQb9LusGyV3ygVSYRzdtsenrh5vmGN4W4GtVppFtshWBmMy1zt4udnSNWaveGr5k",
  "key4": "4QBqy9oCMqjZ388XqmSVsiGJ1aDEedCEU3QTkhzMDjv7uiL9C4K1UAES4Q1QekuQM9HgeP21UXfcCagxLeChQWvQ",
  "key5": "4UXUzvhXxZxfC8Bfn9b75sc2RWV9TnRPMGiJsiXfC3kurm39F21sSeTMqRVwf8f8x3ddX5SnkyvZFnLH5vf4d3Q2",
  "key6": "5FyLHXR7DsodmYZcatSYfH9bmKzZEhZ1qZwBadk9U73pfJi5t9RUBSz8Yf2twY3vAr1EFsnDhTFWyzAJRfD39Rfz",
  "key7": "7gxsnMc3HLfyGS9R7YQhHNZDqzjajUWJeEf8x1Ba4ZtvN7BHeokPE3dJqzbsLM26YcQuRdLhP2PcdFqHqtYeNjo",
  "key8": "5Fg8F9tzwX4d1LRbqMb1jzLRNDoWLy5mGzi6tiPcEjxGtSgyQ5gp7xnsTLEFViSEdboGpxvNgc5u3agefyWGz9Fn",
  "key9": "2Sn3hcHiWVLNii2UjrTs21mEV55CwUP4zLfKDcmp4gnHWCebPc2y3yRaiDh2aHZRuNYsiiycCXHv8ZBm5rXaRGQt",
  "key10": "2Eu3YQkGXtAZoKYbmywtYwmPHXRqzk8Zn9YLX4x6QWLHy1akRvDw1croLxFjj9atYs7vrWzQm5RfiFo4XvjZTicx",
  "key11": "4NdkAqtx6iA1ty9MMMcsJxmd9exX4ztiGFitpstYv4MrDfhgF66L2KwgoWtgPnWgxSZySBArUNGP67YKZb1uDMM",
  "key12": "3DdgNPmeQRvoaecUEhk7sECTGrFqXo9jiqKCMU9JLcHSX5YU7mjC5Qqybqhk9Yk9JQz6m8dg1pYSyRg7G4zEz3RV",
  "key13": "2URRTe2yoKXvw8gbaNTPfnZPLF6ksVsdyn2ssxaFBcKtKxbKcsBVD5hXjRKqUaKQT8MpUVcVHdFN3QS21WB1GkSv",
  "key14": "4tn3G9PSppzk5AMw9zS3zLuqt8qgvxzC35TiL69kGFg5sBKNzzeh8EcuEYBfuCcHoSVQCcFhHBiwoHdMs5eUf52V",
  "key15": "4uwcAw3fzuXfqp2ubzeAJdwRt8svth7FSSj8FEHkZFPHFwGDHs3PfywqyahwFi56QPEtx36ufbJ9MkvSrW2bXNWm",
  "key16": "64nXvJhFR37joC6x553SFqkLkQ8mAZbhehDycgU3BjUxHdXQ2D8JXVUWsFFHawxNUyMUvdeoVAmmxUEpVMXRBSW9",
  "key17": "37ynQBodgTM9xMsm9kA8ffBPSGKAMrnQPDM3crF8hm7wvW2JxipTZ2mm292sL2QRRNETnSM4BTXUiSu8hq7uRy1E",
  "key18": "549vYooZ3yvvcpYw2SNDck8mr6yDVEQ3PfnazHLoUSecDd3ykYnsm9fkAq7ah3ozCsm8BjU2BEDZbRuB55r5VyeW",
  "key19": "4CRXpDUN4a3t7LYcSZFewyJKDKCzG1rBgEH87EQ2cYKJDsDPiBDTuaxiuSUHPieNNvdvxqbYzXR2cuCQSLR54Eve",
  "key20": "4RbXJ6DhuQkoytpj8mMJJ5c88MAgDoyfJpkFpTNA3rTdjDFC9bciU7cPrFhMZLherM1SRCweGPDcGa2yPjuitEbB",
  "key21": "3sUn9htK9qDRrrjdS1U42Cg8RHwrXM5qXTLSygRgJtfMXYEMkcxCJL4KdrC3U3LEKx9VQVbV2PKR57PKtuTjkaTK",
  "key22": "2yjhWbnhKvKo88ML8bezsLD53yMLrGdD8QWpZU3TTUgF96oEfwUMJ9UmkxtwdEsCBYRGsGQLCq5sTyozhXHAy66K",
  "key23": "4GjPkXmV3uK8xfD4AiSembCCrndE8ux5gSxrZMtnX7T3tan3uAADNwC3MAND3YGAtuXLzYQTQ4L6txXJQKi34QDM",
  "key24": "2DdFz8UUKDX78xEdncWGP5reQwCJEhwPN2krRi8eREyTQTBS9xCkgG8KhMaLB7JRW9hJNkpK612oWg3iVhrVWS3y",
  "key25": "3vRohExDBdpcw2AiEAxAxxagdRVovxfBr6GdbYz3MR3vS7dUHGTKkrg5SFBgzi3SGCAExg1qMdGY8BhvJ63KkWAs",
  "key26": "2P7ctDyq4zwbTTTsYAhiGjCUYUtSac1J2xj6bnfGKDJeZSjs93Y7ExLUtTrjjX7k4TsHYTqRxoJzoGbE3ijDp6tm",
  "key27": "2Z4ZbrjYa2UHzZmVUo3HGn3VigvbjpHKsFxv8ZzYyZCgLxx56rbzpS49WJ83wKHYZ7zVxLjiDfNMQVHLZkfsyaKV",
  "key28": "512ZkfvEAhMh61oj1YZRe8EQWaBumpU9YqRhWPePvLMzfetK9MUfDQDKHgR7M1TeuobDCSdxSBmDsESTjAJS597x",
  "key29": "4vXWkRaJK2uT2WXQSgdRQzNnUpeuTLYRuFi8nhaRjQguaczK8PbCBtfcRsdFAEwwRyspbkw3Jc11ZPvni13Q4X5n",
  "key30": "5uR3m1KkxuZY16MQxS2m3UwsoRvvvzPeAwvPw2mca9YzvxSe7K53DTC3STd6aDauxUv4jvRrXE14FoabJgvah8mk",
  "key31": "2GhhDHcuxMsNcQhCJQhgQXJkMxsuSvDryi3waNTKSzdk6isKjKo9Cmz2ZGAJCdEHoM9dxzLt1n9nidD3oUjYvpq4"
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
