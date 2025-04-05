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
    "5z4jCcMR6i8mNNoLcaBHbTSjE4L1s8mMCDFWFtUFbY1q2FVckd5uE3toe2E871QzeALvPUAT9H3rbr8atSQzcDhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMci3gKYisztP27DVngDuivN6h8CiRLBFYLsRxqbzx1FtwHvb3tfMoPatrJDeQZ7HStgJjouQez1r2pmexXrM3T",
  "key1": "3KXztqt4XVQkFAHi6SVvVihB1RqxKiJSi6wyEKmfYApPW2d8EfZg2VewmYG7fZZdmFTDGRaBiWHtziFL67thjJT4",
  "key2": "2tEWobLhi9u3RvxrNaUrBUGf6fgwjt43suahHae3thqS2wnM5gVptd6y8MneeQ7f7gC9DpsDEHuykmELg8FaGTCi",
  "key3": "4snVpWjtgWdygW9Q9fC2x8bYFaEYctNfSvzD7dMVGPfHZUfxFTHpjXfYQSwJHMau5nvmnMPoJqSEuM7DkqvvEGna",
  "key4": "UrbKYo54wXYq1a1G6axhhJ7TRStt1pTooqrMDedrduBeLtxx7JndHmciYW1TAn1wvFc8YQ6K7qbwsE2Aatxo6CJ",
  "key5": "UJ2LyDURVerR7wREY5Zu1HQqfXPzEL64PZXnBvf5egvK3Gh24s3xiZENfrHFwZEnt2dnY8Apoik4ZeLfgnBAycK",
  "key6": "5TQKtWzRFCdPFCfmdb5tXwRyuevyE3dz2xswF8uw7iXo8kFbTRRTjQumNwuop8s3K2RTsoHQdzWz1YDn95rFcaMB",
  "key7": "5jiQhC1EeVv3bgveVwAVJiCzfU8bqaDTSiaAYB46ZuZc7cTZHfm5YnB2xXRykEosri3vYWqVKH51e7jv9Ddpiu9",
  "key8": "4C6fHCDhg8waWHcQhVoWtCS7PprhTr5QXX5mDDoeUMayCy4jgJysEmAzAezfU4ubWscFDzXFcfoWDsRRQhHRvtxq",
  "key9": "2oCQrrjYtMFbhPi8N4hjHZdMZB3hDQkUreA8rvgkd94DGWgGWsN6YP51ZMpCiBmoZSxPABmywrHc1owTkHH3CViN",
  "key10": "4C8ZxXGMqSQ1K8VPuoczy9z454HuNm6DfZSPhZ5NMKytWCRaJv5hqe8PLazM5EkTJeabecCXhzXezzVDZErutP4h",
  "key11": "3HyVZVvPLx37LmApEsgJ1YUqUsG71DQKfyhUjnKB5kyekSyuoMstPJgSkmMvrFTdkgL7MXndNmgQbz5R5Q25tUaY",
  "key12": "2LztYvg6hXeHaDBQNPPPKLUaTFn6N5xtes3JWgcHPv8abUHxJwWuLmVDzmK1eiB16oEJVLY97E8u2MnB1mSYXv8",
  "key13": "5eFvuuMQkiHYeYxrC1f9Xas2fCYt7YmX9o7QYmHbJA3mH1RGWBHXdm8ysDXKCCx4hc2NMUKALsbHyHCy7D19wvxV",
  "key14": "2fXiLvHSWVbyPyAt89PUCj9AZkMuwY8E7nMyE99S4CNcwW11xVUdBXPxSs84PMhczzQPQBRXqups3JtFrBqRQCN6",
  "key15": "2gV83qd6qBjjSHtHHdsYUge2QPreLMwaxfehGcF4rVnawfSZxchjoFm94xBnJ77kR6aEpnKAzZc4A9NgSWsUqnqb",
  "key16": "4HW6MqiJ5LijPzP3gPKnfGn5MNozACjXfJ6di4BWaXUB7K53SS4gHp8eNXtnxaXJZJSPMUQ7C4cJxkDCEpzXYVs8",
  "key17": "3fe8467ccXF89jtNv9628ordMLT3VU7KQx71SwTp2Nb3WgfTygaQxNsqYVufN5LVRZAD2qvRrC37NdGioYGT8MSy",
  "key18": "32f5g35M26wRAWjedAZJX4e5yJtubbFTjvPNsMWE1N42vuZhJXDJA7WWMkHaM5eQbdfU8WRUH4Y5W6NKsm79LZwL",
  "key19": "5pe2zqPTr47xyUfQSq6TDMFdKiKYJ3Pc5iMEWgDgKQjM3cHCjZMq582yJHuKMauWTvbGShJZvok3fTqTMxfQ42Pt",
  "key20": "4GRz6kkc2u9eV1yE3YVkLRAqx13ySQBzotPi1XWGWVvnmRtgknfkriFcJChNytGSKUS5CouoMB79teD1qNUL6ebS",
  "key21": "5yP6aDZAgfSc4D4WLdXi2HNxDBe8EGm38aRu948ErNNaT4YaWhr4QTDiHqRa4BEAjz2UW5e4V8uhcgjjUStiY3jH",
  "key22": "2N2hPMaNEvpm12tD9WhmHSA2vEpJTzEWxtjRVSxGzkZBYZ2yfMmyyCksnQXzC17RTVag7XjaS5K66SJ7wRPAQdnr",
  "key23": "4mUHrJctyhePQXS4pGYMS1apZuEUMAutr4yH8NgF2qMcdCouYHE9hpgeBx3phkm45Zmkr9oTfNuR3Wf4ag57ZfhD",
  "key24": "4yWfS2VQfWU3CKmLz5f9i8t6iB9yD9DGNCZcUBkwmciXgojTmhc62fhqQNxTjjs6WZwuEVjVYn7Yn7B8us2bmwqk",
  "key25": "4WFbmeQpraAJLENNLWjMHksCSxj6tBLHNfF9E64pAMKtybTG92VbKe6u2RBKms6DjCGBfZ8gXkYc2CFUx913BAzc",
  "key26": "4dzJPLnChM1MFL5sJZJeud5APhqEwjn5QBFq4nxrvzip9DVGCuefDPCK97e5AiH1U35vsDbbR2u9nMKRo2kc4NbC",
  "key27": "QTkhuWv5r9FLZ3JjZjoXAbo28JLgb4sw7aYR57Dnd6xU1swHcaGUcVvKwx731SXcYRUvVXTJpGuUqrzmV3Padv5",
  "key28": "4S9XCkcGHpxKnh4kztPwAc1vkxM7dG4x8nQJxGiezdFDMvmmGF1sQqLpMkeLb3QDmPv7BAbeniUcG1NjTggUFPnJ"
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
