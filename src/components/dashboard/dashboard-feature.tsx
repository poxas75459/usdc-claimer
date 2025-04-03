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
    "4ZwX1tfL1FxQHcb9vcrFR3GWCJtgSrm55aCcFevYB3H8m5Qf4oYjVHHWfZ4aT8NGnwagRSS4NTQyDfuXNbvZmKbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V6TK1aED7ANjoQTPZYE9THM4DC8BoiPcsvC8rqmqWXq6dMCw5jyLNkGoBdY9GcMRuikSqHuzQFoPv4UzZuBCEd1",
  "key1": "KkkaKn5WJefdGxgffrJP8eqktuYygqUe5AKccujMQyuNvagpmqoy2SUK2Nzre6GMdXfgCL4g58ip2F7c9p8FZ9Y",
  "key2": "3QW4KCpLyxn8LB9nUGxYoZeN2jdxYjw3LSyAhi9SGa5hjHun7sRhoZBaSkJdKDgpPpwPyK5Ya8n2NpheS2eqzCZC",
  "key3": "57ceyxkWsny2RjCqPfHMRDvHYeeuxG29FF4FQVMaw3GqoV5kvTYRjavHsPVPpJQvRXT5Sy2B6reXH7Bmks9K1Ey8",
  "key4": "WXoJ2Xgi6A3ffqLnHfXExT9H3yGJZqw4wjq3hvM6toKpNPTyupS7y3KJaBntUKaE6PjHCRhz1vqzqRuMTVNjRkF",
  "key5": "QG154AC9qLgaghZwJMVioAeX7Akgpffo7KTJma5XafcQyGVXUoDQoeB8QFjUZcRT6JKsW4AyKXoPznhmJ4QnECA",
  "key6": "2M4NNc9gJGhnR6C9BDYz7dE5YTAysdpk7rQJDSKYsHdc1EMCkmwRhjKpv1Uc2WkVXmD3xn7dnkqadem8E3cbMjWk",
  "key7": "31gQE2nGcvGqAsD7gSiFVUKDL4kS1izr68Nj7eQG4xypeLM9b42Rosy32Pi3SZ37JpeBiCF7hMn7qPAbrL2djUVf",
  "key8": "GVbfXWaN2TSu6Lgdezb6jvetTyr8ksWnZnF98Rkfn6vjsW3XaJP3VRtGADS2GG4TW5uwvkCEARZeYrEb4B69rhv",
  "key9": "4SFgqRYm6pSHAFM2AijaLCpThzGZEvRpLwurkLpSWGjV8ZeQgDL39XyVsJihWXcGixVCGUWwZNXULasNypdPyGqq",
  "key10": "2vuHiq2H9bMaMD4qpAanBs4N6XevHAYTwGsGLvqkctYHbLamKVP5Z1NA7FqcrouhUETcrYQy2cJfdAwtJrHEMo4p",
  "key11": "33S6j9Rowca56oGyXgk68fd2Fd8zQK9pT6q45AwopKsKjb8QHJhKoAW7dFHcwg6fVVH85fECg6uGMN76ai9gPvmU",
  "key12": "2A6GpThb4TnyHVZ9mReFCyQpXDkWHT9apwUvcp43P6ZdavmasNBHHdBHruerPJeSt19nRaTvtqzHS9hxkuaiknUJ",
  "key13": "edofmhytd25aZwDMyvQNhX43duH1upMpueEe1xuRwP5qyN2i1Pcs9JTD52FutHCy1HENi2MH3nBbQ2YoLFWf2wp",
  "key14": "3j1Yb5LWoWSCdiGwWJyAYTBfCUGpudngmPGiGkTLubpgBwABDdcDyDAmoQuk73FDE4zHaeAxrmnkXJKWJqLgjn9F",
  "key15": "2EBeS6zwjBNTCjoTKSSYfRMFWptcznGXUUfEPPQmvfmzHq178YqewEvvfcLq7nyED8M19r9HQ63r8M7WKBeaFFan",
  "key16": "dKRz4r7vSfJBQmAnHnS2g5rBbrVAKn35n1LgraB79TMCJXpCzA8JGfvewJpHCukBLNjAB9nn6T9SeauBK6RbWuf",
  "key17": "5gvSG37csSx95jamhTvMpsJwLU6Wze4Aav9bVcNZZcJTf6jUjgnT8FAYcTFnWVCRQkmCsM45LYJTVN8cXK9meiPH",
  "key18": "44GPu3aXx5MzwZcn22jGt5bFRx7K2EpywnEA4d5DgsQm3BTu33jBAFZHipX6rZUrczzqkGUm8j4hv1rxucCqz7in",
  "key19": "43BUY2me3iUCzRgVJsU3ymJYASvFrZ1mCofR3Zf1JHVNhuUWuX59JrpaMwUouKHvN6ysyy2j3SJRyBAkXVcnSaq8",
  "key20": "37tMe2q5ZqMwWcLPnYxp2ZpkN2LjZwFnkSRNsVpt99ndA5e13KfkHhjq6TJSjbrjpRhsHpn6H2PK2WZfJtb8HWn1",
  "key21": "4CgWCxx1ocQKFeXgTU8ScYb4EzUwnUsdQkfKDVBzXWFtPEv6zzb1AZagvstkZc2GgwrBgkGaQMXcV37kEKwuReBC",
  "key22": "2aoSZBctyJ4BHyPWTbCtu4ydv614k6N4Quxd59bDf5LuhTLEdtRk8ULTSopSJx8m31KnZaT4geVe3RhMJJbhpxxF",
  "key23": "2irF8gVb5BRFCnh2sfkcTbP5wdKt3MzzhtP3HJqUwNM6Rm6QbkpdPM5u6NxK1iR519JYArfDFbvpAZaPFHiuKEut",
  "key24": "2BwsLhVyvFUaaxVbGqfAm6uG98Gjv5WtDwGfkQnjGCeisATjHbfdCVotHA5ASZwggF4KSt2QVfoPGJ9p9eNeWaeP",
  "key25": "27d6FQ19CzWJazqJge8cBJr72sjK66mYoeh3oHa7VHxQsC8Gj49z9t94jYur475bkTdERRxkNmiP27eAKCZrtzkK"
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
