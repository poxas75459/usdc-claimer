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
    "5inJJEEp1VnW5jspDynigihFx6zXBe82ntAEZbYYrhFemULoXGhzkzfFMZosLcyeQu4rdDkz46m71tUtqqAFdvt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ut2BpND62jZTdF7Agme9AvD9dqwwhKu28vsSHjLuSCVYbpPo93SvmukdVV2wcfkeF1ENBVwdYjbDScXyQ2Rm3EW",
  "key1": "3Q787k8gbZp7Y7RjfEECH1GGQdFvd7TBwyFWP2N57MaF3oeJDYSSBcrgJMmJUFvhKLCejHdG6rdtJsHe4XATcGhd",
  "key2": "2taoqezsT4TwRfJQnfwhhBHfLwu4xhHT4wyZVkUzY1Q2QVDMVNyqmprPoTcBaXzG3ckPgV6yUYKwm2G3w6cRYG8R",
  "key3": "4ZHLnBEnTu6XuxmmQsiJ8A9m1jsCY2c7ak43SE1ediDShF5wkzU9NfbApmUV1oSSKnbEe2crhK9vcoiUYdJyMZKJ",
  "key4": "4wFyk1tHWSeLNjWYKgUp4JcQYRLc7zEjENNfc8LfPjkPHWihsa5Q1uGkaNj28u64NVj4ovjSS3qpA6LnW3Jentcu",
  "key5": "6Wv8Y9XgJp9nzb6ZSYQHd49aLrb7BF6tP4PiRgpidMmX4SgRWt46wF8Kb967CGyBDMgtUe1HoYmyr7TPT3xSG9T",
  "key6": "eE7ihqgXcxZ3vf6xKZVqbuGz8hCUcaurDwY97XbDs7ggM6zd2mmKkjC6APsXqMTqWDmMaUQDkbTtVfMBYCbzw2d",
  "key7": "5ym1iCg7FdsTEXZwEzoWtNQXBgcGy7GU4QWp9XV3cdb2RBRnc8ujryrbDz5To77a2BVzBydxhY7Wy5ReekAULbuK",
  "key8": "5dnUTfWvTNYA5KPCQcSjgqMAc3fWdwjXZP8xUgkyT2vqeMA5BKUSAvob21QpZmKW1CnwZbQrSM76VcqGhJXmvY2P",
  "key9": "RW8cEHUCxkt7nmRbL5iDDUK9eLn4K8sjMgibL8PaTRk4qve9homGXC3uiovxto3yFfcJ6p6munbgHdiXscC4e5r",
  "key10": "3GcvfoBhG9PToqR3b7UU4dTMT5PUuxZQBb7MFveRAffAiHwqgMcZs43ecGMiWUFoV4mYQi86JSbqZvwMVxSxeD2o",
  "key11": "5SM8PnsGrzQjLFC5kRoR7XWCHomhTnJCHgWvRQKDecBUWDnyC4ShvgHGZdqrKFuJP1QPJjBCRDLvkZwrJGJ54fBu",
  "key12": "4EDdPJ9m8Uyqc9LjF7KnwnoSdR2S5Uk19Twn6jzxYKAcJfp4yHbzjn2jenMj6m1kCBg2hC7CrHh32gM4mBvqLi1v",
  "key13": "5d1vaPWgzFu4gCU3vQEXvwfEQDhBAdc8iuv4U5T2vRBSLmB2zLEsQjAYkiMicqEeqi7MwyruEAtVBFfZTi7oRa9t",
  "key14": "65XMywa7DfVytR3xoNoTbEprDRhotpUeNMNFQE3g1soNKYxYF5PPQQKoQSYg7ebgaWQioTXpoBYqVfhv5URJAVrk",
  "key15": "3SZKfrPeCh9aVLBGN3CnoeouijVxjszt9v1oJ55qNNEYrea4mdZt6niagbG13DeM9oASuZjX2AWJCtD5TcfnHeft",
  "key16": "3RjQCJo3E8WZG1jXi9esEjhjHp7Dbzato6iyQWmz1ATUhRFk5HtoamLfhz51yz6XD43LqdUZeR7XQ5ocyKHgs1ui",
  "key17": "39xLhvv5UjcjFJJBwzmTkwwz8oQG7v96vL53gfc8RbtfsJy6ekqhYMgihXwt4HKrs6wv2G2nuduZfemVKi3Wea7n",
  "key18": "4Bh6QSUEid32FqgwYziR3E7qS5YjuYhtqskVeqEpCVGWeQbXXBjhw8RcXcsoCdpWTkfJpYn5ehybYPfQVvj1mYnM",
  "key19": "3jSNrAiiB7BTMfADLdy5sT386rntvhkphWd8qGUyuR2VAJQKYgBmRMhuKLPK6pE1sdGQjoQtdWhgcf9kWKSt7EU2",
  "key20": "383eKVik7eFFtkUhK2U5aJagCf5EFFdkYNW8hNcjWrkNUfHAzoGpk5pYfwHrFjxepthdPdgwZY3vU3BRU1EB83df",
  "key21": "4PQPPyEuFV6e3wvQEtbomvdnwf6HEX88RHcpko1TMdctPtbc9NkjyiuuLEg9eYMap26DeeCTqvPDueSXyCtHHyS3",
  "key22": "2vXxgkp5ufPhkdi6CW8eLuPA3VSw3crbkcvqkPW4GKEckkc7Z6gedGgxvEoHDeLM4n4j8aVsjHvAA5v6N5H5C7AN",
  "key23": "4GMFD4nskdjf4mjufyza6JR9uBhwQMEqUcpRMmsf2C9ggEt9gFrmMiKtbtfWfHSqHXyDL1m7HAsPJtXFLbfrGfZu",
  "key24": "3PpPii4fHhZmUJmiuYX63NrXs6mcekguaCEKPQiUB1HaeiUGwm1giwHQt9mghLeBV6FXL1Pcp9KQbt2Kw78Scjim",
  "key25": "55vmM7GxqxboAKKVXCARCXnZJ4qA7q2NrESHStT9QbtooaRhfj4VpuCWqTFvp23dnBTxJFDEbCdymwy9mtsdSY8P",
  "key26": "3vFZDaQ5Yn9tBQv3ShxAtZooxALWuFfAyAVcJVPMMNvjHxP9Z1r7ksmqyi457rpoStWYhZwNuB6z94xfTsFTYSb2",
  "key27": "4TwF7pwcsdfACXhZtQRyD9MssZSTC5A2wC3WF2DYQAUPDB92L1ZwNBf5KHLqoTYZ3eoL9t2CZ9cJ1NRvUPecb1J3",
  "key28": "3htzwHwpjSBBcwpEAjFrwwMQF2RKvDivXogoWdv6VGbBqqCUwoVzvsQ5XyY2A4wYNWPti97wDzNXvCVXmLAUgfWH",
  "key29": "4xGocaaReycPt2Dop1T4Rhyjjvq2rdL1RhuP4FaJtb8AcUydVrwnTULM6VEFtnpfLE1qXJmN18cS4LSkRCKmJw9H",
  "key30": "5uaaJmtErsWz2ZJy1dRBrfrJqQ9jFc9JGJiRyMG7vqVzvAR5obGvE9FURtkpNWBUv53vZ1cWBvmR93hSBkGi1qHa",
  "key31": "y6GX8TVpZ9YJRDYdQWoMJtLQ51ZQyrw9tXCod9PUQ55fFM3Wj7SnKvqZ37DH3mNTnLuGoPUhm2M1NMSZHwwUmRJ",
  "key32": "5mDPQbcnGTXDXi2mGSGiVNR874cNcXZTkMNTuckRgAUi73EW3dUWff4rwHEK2q7LggQGWj8PEV7bNYNpxoqmREvo",
  "key33": "jGW9ZrbG4oZM126t5Uwrk1TgHR2hff1DFpc3aoBeh4uLEa6AzPHjjk5KWq4P6j5j2mAFrnnETmJRyDV5wsHwF3P",
  "key34": "59jpSLQMy3dQb8YA9Jrct1EofQ1XWpLFTwgsm2J4nkaYEG2QehHz5QTDLrioMrKxTVPk3xJBUEybKkZFemzvWSZf",
  "key35": "3hipzhuAv8jDu5gYDsvbEsSs3xA62uRhGPeN61Q6HWcWGxnsoRTbC1YGL4qzq3rUj2SNGfAxUUUZ4LTvxwF5uNKA",
  "key36": "2oAxs7rwKKwwaSKQ9TdiXHssiuDrtD94R4bD4wt2iJXoLrF9Z4Wd3qPfjEpNCN7y3HB985GeCes9tDJ8itTUwEju",
  "key37": "2jomTjmXcEeweSCrE8e5HvVQS5JyTVgW3FiM3VdE3Ze1dW2RZWeLHbAgjRSeZn3LtP7sXXMch6AJRRDBV2Kt9XH3",
  "key38": "4n2MJKUx3bjqvUQG7UcX7W2kHw3LDw4MrTZtDPfZ1uA2yRAFF6C4aR5aBFhRWt7Qzx8LdVKnCu6HS3RQ1wHrDPaf",
  "key39": "5hLvzLqMJUuo5bKBoqL8sPP3sg1gdhuKNadHeazqj7hgQ7YaJsvut2eGd4Lh2RT1G7RwKdmthxK5QxM8nbbvgAwG",
  "key40": "5VPte4A6P3iCCXxJVv81DA2H63RqsxkPgsMiCpnkrG13Nw2kd4swRe4QmVFsVwy2EZkn5bxZLc58djN9Kt2vbVKF",
  "key41": "3rdi9aQUj4mqVJkz4GJLEouaSQ37PDHLshnmum7AjGWU7hpPhJjNrYW51zYokg5LK9dgpPcmCSyeyHtgaXNRqsU",
  "key42": "oh6Srx7pEaiysbsxRcdfQqpXPhWpnzPvYV1Jss1bUoysP6jd32kDoyFDrmkynyUZ7NRUdGcrh7FLyzG8VjrvoR6",
  "key43": "2r5q7JzquHpmroj2RP2aYEkNKfkbWBDE9dzCkN6x89cYRTS4ytgmPnZDCqMLq1wZfxdLVDWs9xqkPmEZDuhaLxkB",
  "key44": "GSCdEXnFBqne7RfnjeLAcuD5tgDbBCecpj5yKUsVxwVeXzcy5KCGmDNsbqPN5jmhdZ2thpNtkuXcb8Y3sy33wAi",
  "key45": "4ATz8Ji2uuAcxuurgpoFaonq4cSQ9ef9TEkfkAUg8su1mYMKCChRL9kyedxCUyCVmsviYyZARJX8ifw3mAzZkM8L"
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
