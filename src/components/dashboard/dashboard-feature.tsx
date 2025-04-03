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
    "3nkSzDySXDAznUjvTjYfqY1gwMpsoHRGw6Um2Uj8PciKNbnBWYW9BmaNDtedp4VKhASaBJ6TGpVVHoiWGF4i9YVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GGWux5E7fzPEw4Xr8Ae8XT34xxusxUmyjDbRV3dLgEDQd4KJcF1sUH7g3reu4tKdkJdQTyAoi6C6HY5q3ojb4P",
  "key1": "3bWGsFoziM79YN43Ezqs91VwdCiTh1zEifdzzBe1N7nRsQcRfSo2kKW9R1KQmLNvrxG6xJBgdjRpNo4KGQGp81ug",
  "key2": "5ybQfa1ypCG5LstoMpGwgsN3PbbKwbqoH6rsiN89ubXXYxWmLrLQ87tb3KVqABKmhJ7f4biPkBKw1tAPyxYdcb2T",
  "key3": "2BoVwzjgTh6u5Wer24BgBjswe7v8opP8FXFKNL63MgXTpV8PBdLRBtcsuL96cs82DGQdSoSCy8AGq7tZ4C76z37a",
  "key4": "51H3T5B16h6Z82UpABxGrLD24yv7upfzR3kimQaryoNKWFxP1BypvvASDEHoa1N2EXAd2iBDNwn7mEciUfNB1irS",
  "key5": "5CTZHcp4r92eR3uPGHaja3GSSvZn5yHtXzRxBS6WpvRh7JpW3BEgbrH6bjfxjpH2Ycxn5SkiQwA7tNXATPtCmxfn",
  "key6": "2VDTmQSd5zRSWk5Typ6p9NvEGsbUTZRSJk3N3u9b5xNb3hJoCFS3NSCGwCX9jA3Y71kcgJJjAkEKXAwacu4C4qVw",
  "key7": "7FcGZFyPEhtERagkMH5UfDaNKzi7fT67yAQQnDj72mZSuHjwpyTR1HK7m5Qs4sEUqDYrZn1rvEdtqiS3SRwMP9Z",
  "key8": "ovumJcMY4uGVTiS8kHtycsvxr6K2mXeXVz8WUgZXKosVsNpyS7CveC7R6yTxHPQ1pnn4YsiyAYQoPZv79wiEzjP",
  "key9": "3V2uUT3sgtcN9nimXvBnPWQDNXhcS25mh2FMJ2QFmsRyXyXtjrqWdv6yCtTxLMDJr1Yn6HKGXt4yraBz1uXM2t9X",
  "key10": "25zWLXzG1895aCM9ccRmZZQBHGGsoVNtJVYYWiedgZmBmShFumhKRkF87JM6ZxLXkXz9Wdbd7BgXoMKexhuRnyB1",
  "key11": "5MNbAf4vxZuaACfAG9j6LxfgBpKdhFK1uaknGVGu9C2WkFMmSmLUDks65NSTFZHnXnp2GZdzjwkjTakHmYqxxCKH",
  "key12": "27CHSCvw4a7WDAnpB7FhoYP7Sp4wqvfB9vQasTX1DvRrGReee8YLC1ExRWcV7xMU5dUycGjQeuz8puhnyGN2iGv7",
  "key13": "2cj1kygGBqtitnUCUWwMiJzJRzg4A8GUVqANV6JJ1Qs1Gr7CkHGkXdzjTwGMZcjU5dJGQjuxUYZiV48uZvmdCNrR",
  "key14": "442Ee7bjcwccohjYdqM77SWT9vLdAHka4scUZiHQcx7ZKFpyVuMPKrJSqbuR3DRSgTXsR4pAPt2pzVHoYYUxxQVE",
  "key15": "67GMRzne5hkHbWMkDeQh1MGuBXYpDxiYi4SSfX7khEvN6r8pBAVoaQxKrg9BJ7YFeeTwPNecWNBZyVSyzoZGh4u9",
  "key16": "2r77JMgAhBvSRemj1oWHaDSYqPPa1zBejG4KF2tDgY9eGiBszoyCDcyD18Zf5G44G3JhQ7WEeAc7KmanBB7oQMiz",
  "key17": "4pWQeAqdhoXD9SQjhdohZCijpjGUMqCbFLK1BQM5c1kdfbViNR9dSLeTtDXJbux1xQ3fM3kx5vmtafoeoC6eohVc",
  "key18": "3BX5AP7Tgt259zDUFr6jDQaRXEzRa33yBvPBRAk2nCZK2hnKZzj4uwmwkdbeiRQG2ZCS61pYGPEQT9zGwRYN4knR",
  "key19": "jkLMuP2JW64KqZd3oosdNVoJTQY1dFAEpFEeLQFFjYHszBpPQvfLDCbBNy2FjW9iJpuCgMR7x1PUcsWefGHhpEi",
  "key20": "2V8j1Z17aWeiFTf6P2GnJdwri8MbGMQdFJQd5tb6yX7twTeeWbNwjowuxu4ETZSHu6Xvr351wjfZ4NWz5Tf1bz62",
  "key21": "62Wcor55zKW6m6b6DYNp2f7sPRcWSTMhx3L8pmcdQpuMCmiA3y4rch44JVsaVbbR8zPrr2bar8PZTuNQcRXhBmNp",
  "key22": "4mZkuPBckJhcbGvRVVuwsg1DaPxZbnVMPZYksr6SPpvAox1MjiEF3q8QpUwGe42Sc5DuAkkCaCmGwvJwHiKec2CE",
  "key23": "4ewrtyzunrtQ7dZnpPPZ5bJDy4TnpVhwdusnraWT1tB3TN9LoB562PMYsD8UYwtxmGhatQA7FSwMcug4qxxZhgCM",
  "key24": "MLCXhaPq3GjKd96ZBM7TFcH8vzcjVptPSqg1SnQkr5GJ5ZMREbKFuFp62ZKyeUdP5YaHGx2qvMNSETzWorPgyfN",
  "key25": "bmC8PhiJjN5FAwuPV3qPURqKKD7j8nmzAYaux8cnso8XYFrsy7gSi56o9B4VBMwhUhkGWLoXfK9uDMrp28SiLBh",
  "key26": "3xfJWtu8HgTNtYuANtqYa6fHszqZXcrmXTVkGN7vbo8eBZFdXRcHn5xfrQBeTE64ntPJZJ5CwrFU7ev8aAGdkoRm"
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
