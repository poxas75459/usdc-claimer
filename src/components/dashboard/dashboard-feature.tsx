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
    "2CjEZSVdN3mQVQoVsnf3uhLSWron7ZpffC4RBTffvd9Qf3CgQFU4FcqmyccK6vJMBAt2zRPX1nfnu3ntM5TwvDP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5PvmgurHr3GHsoxB3iyVfnTzUXZdpkrmK3hXW7wS4DqNxpfBi4XMo7S4WXQ7ZpNxzF4rA5QjhtRM5nFVVmqVwS",
  "key1": "4p4MCgoVfm4GysD6GMFu2rPZ3JSZ7X8ZYAwhnA76W4JSqHQW6Lju6sSu3xtFPVssQ6LehQyHRcwSNV9BMPhww28o",
  "key2": "QJvdWpPW2WdyAK4sH1BJg7Eo2Ug7NUy3qEQjbm2XhmSeF3TUaVyoBGTjMcq3xffmfWtvCZ9s4CvFZUeCNio4hdP",
  "key3": "4hwhfKfCFP8dNf88zEp3HjFrKYyVXz8biKhzzy53LeXtE1pXXscC2sRqUHK857mx856biu6Ep1KgEfWsG4MjxhE7",
  "key4": "2UG9ANyubiU7AsG3PGmPHhgUCxiqR6Q5awTT2k3WTHsnyBJYPEjyEXTveHLQ1PWmv4oXbC3wg9AQKzAoT7CPko95",
  "key5": "3MxzLMQDzk5Nytx8b5G7JuH6WtBcxEPhArtsxescAavWw2Jua5qQqeTUYL5Xd2E7ZhPbRCdd6QHPp2aFWDE296h7",
  "key6": "4y8YZetELgzA3NBvyiAyscHVdvvFYDsnStxxg8w5L4km2p1oa7LRWsBQFc2dcyksjKSUMJisbeM2KjGz3kSrYqxj",
  "key7": "4NY1eG5WWPtdq39TZnyf2RHACLd4CxCkeF96rzpZYpstp2Z6wFC63URgMvnUN1jvx88FeJsJbzN121iEJrkc5G1z",
  "key8": "JgneuhZkhwkGM9JEG4kWt4N8BbEHzNvoXCJQt5LJ48PjtEB7PoYttg4g72pWjc7pAZkRqqmYdVUWWrvrgqCppTi",
  "key9": "2bdrM3khHnXcX97ChEJfkfRssDHRpGUBn7pySBtKWoSNa2VxZTAZWDRfvXd5sQnAQmUQGRRfXRn77qB6kGN3pTzH",
  "key10": "3N1SHyQZ8vzQPsQ3Vuk1AeHm92AgmK3hJqhhiVnXzuh96Hta9J3k1xkAt18nR4Bzs1VPbXyByaujKnuXMH1iuhkj",
  "key11": "49ekHZpfiSWJpW3GrUpKJUq3QoGtcqhFoZf687fZbTV8GGPK4wxhsxvjaqTYiBpdZZZUczEpCWY5ovXCcphhmqhF",
  "key12": "623stJg6Liq95vx5HCRtKaP74Wj8b7kRAK32FGbYhv2U61YPauSt2w1purRxFYDT71Svo9WfZdhiWWBzf4b6yz4g",
  "key13": "4te7JVdbXwrmXs1zGeuhkjfZtYfqfwwsUtgASxAbgr5FiLdsJEvcjJUjukS2WC7HrWBvAuUzGMqUihEHWd2Pwt9f",
  "key14": "5ccLdwtoHdsZpdQkifccuK2KdhyVFfwSPqdLVuzLhoada17aWvc31mjQpLcwEgPp2akzXQbxxNnreAQGaLakbXAv",
  "key15": "4m8PfCWATNDeUBc8ovWHF7C1feoETc8Swe9zeZawYSM6qrqG1SdHXXyuGZbMeeMFQYWViqfhutKYLygTG7kKD9jJ",
  "key16": "sfVru5hxjCKQLQVhb2pV88VNs5kLhfbHbCgTKqnjGvu3Ud24bYa9TSqYwjbjcG2sq2GpiX2yV97miCPdrwbPLZV",
  "key17": "55CJKhtMzj1Gn5zT9jdRdm9HX2YKiQkYKPicjGvjSqzMSxH2z8xu5HJJ32942EXYkkwpayMeB3B8YitjdL8DkPeH",
  "key18": "5Bysih25D5MGZc7DfTdZwTuUBZEGbtrtCVnfPtpyPGc8LZmJUF2KYExeqneCrTEvrantXDgP7CHKncQ8298hmBRK",
  "key19": "2725kzxJe1mDDuNMsDHVvmhgFwAbTRRr9oWy5BNnSXaJa2xf4FyfLCYFVN8umLQZQL27jxAmow2PWp288XdL6gXe",
  "key20": "5PCpxS5VUfH9w66ebwh4Jz6T5NdrovEm9uz6yxs9X6pWgmueQ7XCXPBjo1wHdmD41Q3mwqhKvP73yHgYiup4VRs2",
  "key21": "3E4cciXiWbeV1wWdYRGG9n9wG3hCB5F2vDRdBP1cqxZiGLRpkqJ7152vmczh9WvgMetY4SyhPE2ve42cd7aw9Wax",
  "key22": "5seLpgJEnvwBnuogWuaoUGn6RpyheKHHiXygcQoNk5nxnv9fnTkiXHpDJ6XW2h5bE8BZNhxav88g8f62jQNqnsSh",
  "key23": "3yeQtRm4mxFBvdJjBDFnipZGSciEHak5mgDgMFoCrJeayhwNbHzQMsTWbxUkJXqA3CSCLqtX7RNxgtSb3q65xThD",
  "key24": "4FcUqiKBNE74GtnwHEZF7M2KedF34tZtmm1MEvR7dFQe9hoGvVYnc84UfVAzqriyoF8puXa4T95awqcoJdgfUGrY",
  "key25": "5wE3dPQytKtoxiUvoojfxy1NwkyJvLtGX7o1jvaUtybHLxoG3wyc8CK5JH4cnMayABZitsVVRPpUQBVpkmzUc7wY",
  "key26": "j1NSkyK43YsUGy833ikUYFZq9g8DCtg29wUZv39SV6FsHjQR8za9cEVcpp8L2wZomFtfnCqbxri1xzZV6M7YbBs",
  "key27": "PauBj6V3oVAMAd44uzJUVowV2FksQ6xGb6UYPtHhhaZeemV4D717pzdoH22xTqPfgMTUTG8NZMjKWyQ1AFNqGHM",
  "key28": "2yKeQwFqt4EdBgimG7ThRj9yfiLRJ7FfC1Ky4mUVeiseEETDDiLXBL4gyo5uqPFyzMSnDp3jdnnzb8JmmiNzCM4t",
  "key29": "5P3uaXAqUACV91DtB1hBVz8VN8ZKAoynbMHLYHAHGaar8xvf1SLsaaG4qX2v9BCidRSpyoaVabXnMMzAjtxABEWN",
  "key30": "4Nxy83jhcczG6ZKdbkyMfkL8bwkuH4YAD5ShvBpoHUDCT4RusM5hCpnT25A47SPH9auVTqGwjusED1eCeJf5An9H",
  "key31": "2i3JQKVxonX1pPpu6eW9C8W8SzCUJeBjTe8ZE6qFuWR8Db7zqYxtS9E6NCex6PHUegHutvuVhXyYuXPRu71kWuaX",
  "key32": "5NigBow22m7uXSRvGWzYFgmMSUU8GJLVbXL9R1dUQqnu6irr9r6o4HzWXSuNys4yi3ETcCYGQ86wAquoTrFXdTFR",
  "key33": "5hzsyf6k7NXokoCutzBeJLye5b5H6FRejrwBSFAaLpUa78hmyKRVBgvormxEiJeG5Be9YhpnEXXDb3G4DazDoNzZ",
  "key34": "p4oPkyBXXnoJFoe6iXgPPbyHDNjmkH8XeN5zmiaRshynPryGSqnErrfnQNrbYqwiqHXm8E26KKXvb5CHiiimiiD",
  "key35": "5nKEjyVBcLYLExivJPitTnQNhhC5SmBcMXfusZiTwf9y8fVcWeaUKB8t3JRUr4FVdbMWBTje3s5j3ZMGfABW8wCt",
  "key36": "2kByrdmE37tFokVzucuvxNoEb2WBadvyjefSreY6StRH84nEPzYP9NNQnsyF5iNDpeDr8sDyuhg4so8tRHtK16np",
  "key37": "5VqFwHcmd7TJfNh9eQTNieYeudVsC5KJS1qgS8zgf5Pkyym1PSiefzgi22qBznt1zMrm4yxNVDHkmzB8neyKocGt",
  "key38": "5MAJsNK59z1Fk24Ka5CGyaXPrQL9fc8NgsNKcW8V7LB9TE2dz29CDgCkp3ZRQTThqcPmbV79hJZyWS3W5QaKfkWW",
  "key39": "2Kn32JfmV4hC4Sy2R3B4Efgehd1QorxEHDNzgQdc3QhVc42vKLgn5MARGy3ofgDNv5tKKLsmagjh9qaQCA4Wc55r"
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
