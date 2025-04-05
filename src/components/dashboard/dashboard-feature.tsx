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
    "5DazQ1LsvjyxPQSuzaCCuN89RsCqLK8DveZRq2CYmD4mXqovXoo7SNzQ6uAVQReeVDoj8iycpgqF6AQsArjpYiqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LqHZiUheZzak18yjdpfJyxRhSeHwVwvzZzdyi1d3FQi7FNu9Be7KhmvfHBhqnoYxga5dM8ffJLWswDHfVHvSz7",
  "key1": "mb7nWZhJNaoUuU9mDoE4t7Er2Dtf89Pi35VKDNGoW7HnebLWVxSLXVUttvoDpEzrt5gEExrt7gMHihqQCksbLhb",
  "key2": "4AUVGBoFQBBH5aLX2Y24HCYME99J21ZTtNtzijx8uSgLAFCTcrENnPKvjD9jCAg5toDBLEFucoSe6uKGbnrnMRPw",
  "key3": "DLr9eKNLkZExVgDYdJskMaAA2NcUKw5FYUVAioJ37cTcnpRngkDA7SN78U7E5YbZmCWJRgZhPbb549RSzSZCXJa",
  "key4": "4B7jkwkoLGVy6qRUhAn85N8wqvHQbazbm45sijZ6f3ytD27eax5vRbDH6A9aCmi6ZXVSyPw1v4FQeUcsN4vBG6CW",
  "key5": "DkWeBedYpiVbH4ArMAkkCusRmhdKhnfvbtQUntSaMvETE7C4jeAvkydamt5rqca2mq3JDtxMybPCJhhVd3TKnP1",
  "key6": "6uxJTp4iznMUAtL5W6YfQDGPNNELUfbDBkwd9cD8ZakxBaaMo7Ghu6UQfhpcb4DoF7XsLLX9xwhUnsBy7xwJAxN",
  "key7": "47ZYbFmuWqFGmyk21dB7rjZ4FPC568Wvhfy7bwiwPoUa8g8KzSteHhmobExrXAVgeY8QubRAMAMdszHDL8DzFPcT",
  "key8": "4aoAq38zwumWmqyz8AxGyDiszzoxL3qKbhxTxfAsCpTvY4UnwKCyogn6Hrk7JyiKg9Szu3Gm4TMEfUcjosp5SzRk",
  "key9": "5HdUKDz1XCpUfZUf7mNQbJNTW7Fv1k2hyo8HLRecpHcRKWGnBBkNdigKFTpBmCtzeV2erSoFfQQ9cRyt2AVYPJJd",
  "key10": "2mYxvKEuUhLoLtt2U3T7hAgvmbv1cL1ZVuNkbPHftZq2LvAtDErJSh4rjnfjx8g81cu6NgHtco6DXNJRu51mCXCj",
  "key11": "5BcxXwGZtaFfooib5nVYnw32ya77GSBTfttqE5divhLtXYfbAr1nAeUhwgD5TS5z1Aid4UQz8rhrJrG77vmBgsGG",
  "key12": "5B98y67NadpgfP5p6qSkTVTMs8LpbFJHB47k9QeqyUEvKbr9Wb5HWKcT9TW8Cuh8wxyCop43DhqjghKQpZGkBxkP",
  "key13": "61tbqsRbYhQiEhsdSismm4wTG44oUYtYa7S3vZuAJQRSNDzpi7rRPW4NEdvCWTBmygfQyeSHCh1XQATX8eFhyVaF",
  "key14": "5z7xgVuhdwhk9QDFkMVoZxJL1oC7nZGn7ZYaHYoWBiuR4R15785XPDcA5bMwZ3Aq79ML2zRvFnieMBziw517bFct",
  "key15": "2Pr5ziH2Xa1Trg75nrrNb6jQaXWqDq7WSkigqdhfViaxBS2Nxr9ACsYCWnPbup2LLr5sR83vvRnq9h98H4YyHQw3",
  "key16": "5DmrAomtANZcCdeBPR2SgS9eJyUieGEaq6CtNkoq8Hc3rxQyEWWWqq5doKwdiJo5XJMyJNQhW85rrCX2fnJNgN2M",
  "key17": "3F42L8a9h5GnqfJxE8ymnFXBqav9BeSBrNn5ikygGXQViN13GfQKzBjt88Wqb86Vfehr17QAVAEp91zi7mhWDPoh",
  "key18": "5zTE1uDLimSM9Sup6TJNn6zc8mMU1g4ia2XDiaVSx9hndYwrXvmvBybKQUFKyi7RzuPignzsx4pnEBFET8iB6bNN",
  "key19": "3kuhpC4tWN76BMh2mwLVLpNAxZxy6gnLDo1RfYJvh48QhgxBj64t5NQyMpcBL1zFH1cEAw9aM2BkjdaFPHVoPARR",
  "key20": "HabweB3EUyKW6SNJobqRTMzNUbvRZwULn4DhbKCDoGg1MtqS15fcovY8BR855PNb99pD27PLT6G5ucMzBziXVNw",
  "key21": "aQ3CLSjRq6FyVpV3ZfUkMfeF5d1hgW9643ATxU85gANM9vPsZJrcK3zXtN8LnEKPRLWu3rXhon37B2R5koAK3Db",
  "key22": "3NZn3eLMWRp1czFtJY7DFiCU66K9GwUoBx7hN3PGywf7Eccoz6Yp3f9e2d4QxaChpqraBgvML4uycZFGjiA8R2UV",
  "key23": "mcddJh83TCUgVe6jwaon7TCpMMgUqivBDGwFWFpV9w7oRQSn4AMfUcJ8b5N379b6Nsm32CcAhKktNe76YhCjL4M",
  "key24": "2QwHYJVQYRXcWg2knrguAN4BZWyaeNWiFg5hJdEy7xrkrqhZKcqGyq6WBeFmT6i3DMpMEVd9oTLbMpFARzMxiXMA",
  "key25": "5ehBAhVnCoKWF7y7Msi6VUhvwKK6rURMWsiJ84Ygv8u1zMqJHqkHUR7McFzCfxuj9npWbWrQvxzWB8tct6gYC9Vz",
  "key26": "4MoFeMowLdc3d3wvkM7FYpUrLsnY5VvSmK5RFCy3EDF5dUoPQwpXhmpiY5RraCEk72ZfECrFenXEAHckwGRZEL6Q",
  "key27": "5hPixdRyzyJQG9jrZFyytfR6a9CstdSeGeJSja9XADwieAD8T7LxTqKUzx3dq9x5oarjsxNFy8NVWsEup9SQmrxk",
  "key28": "4pvHyRLx2cSsaDGRLvwCVD1DNV5t6jT3rkQW2brcDh2BCQ5LuLWuuw3SR4FFy85sG2KFnv2J1bym4GnGfdFxHV2q",
  "key29": "4WFfB9rENxC2exkbWZ1d1CuUCWXwjtBmNBqSZ8ngNoYk8igFfqyGwfgxxfe3KokNigFSyddk3d4t2MQ1BGZ2vxg3",
  "key30": "32dij6PwjL4huQzvr5GzQFUXoQeWmBT4zJJF4McgkCBXCfL1go2EYMbzjGETGVCZXYKojVEay3Rhnv58w1xqQa3s",
  "key31": "5PTDYwXbAiqAt3LJhjXpNdbDGQKfXehy9JVH3qtMqb6yQoKFM3zwa6Vwg4CEkLAkrBkFpam3sDbRHkD7nGgE2ALx",
  "key32": "2hLHKEHisdV1uvxcEymh6w9V7FMae62qWrsmp5xx15NxQEv1YpJbgV9Gc5gU49HsQCoRQN9frXEUD8pHYRQ6g41G",
  "key33": "5drmtUbW6o8AJz8Z9DMNDLVTBmpL6tFDBbks2mFQwCFwtJXS8bNfJhWLZAKtJrBjZWnRPdEuekb3AVixM8cBLAWA",
  "key34": "4EbqjYiiTSnnhScSusQCw3yJnmrJEp6tcWf7WZEcFTmnfCQZHBC5UJRV1MqzcR89H3WxjjtWAHS22qTCM7PemYtA",
  "key35": "4vLh6WJqVZbFMP9MJZj2iDSgLHUdffMaF93jrzntV5qvmEk48GKskpNsM786Uk6S8tKwfZHJtNTFMUa3wPrMvimS",
  "key36": "2K5iUeWk7nStEay6AhaqvuYqK3wULXN9Yq4BKP5kPF3HTdNFdGqFUCxrtgXeiC3u3sJ4NcDXXrER4SJbsd2HqyVu",
  "key37": "2KtoQWquZGbY3zSyd5JFuW5EkbemVp7i71tKRMcriDJLdDq5r9hgDbgjbqcaxTFZGsC9YxKPq4RLYW5bbbdAogPw",
  "key38": "3Sx5NkCCXRhzT585TEtNwUN3omt3G24wftvYRKnVieVxPpK1BSkugMNSYY1Qfx6bNHnhvobNWdAKMF9HwZApmVkW",
  "key39": "HAyi7NdQchhNKqBGgTuzeHvia1nyd7hXZSfuSmnxVZSCcyG79aJMvUwSEXwBfZPQ4bUqWJtjUenD61gHp21b82V"
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
