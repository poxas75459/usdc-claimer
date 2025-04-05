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
    "2QgeV1QXzqgJkwsczo2t2wAkbGGx3mEo2zLzfJPtPdznbsQ1sVSnwkzKZC3hJrVqxQcdm1xDK5FAWMgUoSYjVkS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EaTfH2e37CrMgh1HFo2axSiHskfWcXf6PZCoQAiNWY2p6xGjjEDgz8Nhz3Yi8wB7SrM5ZoCeesrYeZVpM9BdVvs",
  "key1": "3LgbFH7VYao49q1SpWPN3BXf4CTUVsQxHJBFnnUNKxm5dqkhdd9nobDbZV16ufHhTVb71Go2q6pqRMDxct6Mh88J",
  "key2": "4CH4e6RcEKE5mrkVYwzL1akK5asVBX5pLShEZoGAb6K1CGYLGambhycDDk5NmQtAKPTTY6rn4SPGvsqzJSJLyCpe",
  "key3": "3s3yE6fWkpviTSsnchHbToNMa7t9NuiyFQtm6ah69X38j3LkifZi7KuKjD5czLHQ1UmR1H2VzJ5tcA7ATSQWYJbN",
  "key4": "5HNMwHZL5V89f6vvwPSDF8VkCAqzKWmmgbZVTR1aY5FbFRGArJkk8FeiqNeBuyXaK2QZUcfXthbN2BVa6ytssLNV",
  "key5": "56imMuTnCCdBEMhbyQT8aWsSPriVCob2qx24FP4BW4twusvijKLZUHVETFiUkohFqTbVVutMwUyTssBSKyHdo4Av",
  "key6": "3zdvxUZfoXUxWtf83JyBXXp5BGMhKmxMJaZWPkjiA4Pmt5Hvx7P8MBzDiKiF7fC6TbKZJUFkJ833RyqnkTr7CQVY",
  "key7": "2QFM8pi3fJm2nKhZGAZLVZrymfxXhnGnPRKxRuo5Q3PbcezUtgBsAG3c1JjKPeAEqci6RJF3XoxPCLLhnhKi2YRp",
  "key8": "4dtg95GUNW3h7ZJ9BXhpC9e97rJtPVgcMsovYB9NSvTqRQFxdiNqoGkrP7btCzWQg7jJZhsRrrxY7xjFojXLvdGK",
  "key9": "4G2jCJnHBZeJHJD3V8ewAbUhknUMqN6Fp9X5Zbgt6GTikfPmPZ3UTWSoWvv4Kh9FLozjgwvEFCjhhvuYJcYTsfKu",
  "key10": "2ha1ivE8s923SDdbLuAmHTWznu4wf61kMTDTyAj4n1MokZNu2A3ANkJ74KH84T4R2abPvxWgPnxSEWzkDJDEmcMa",
  "key11": "5kfXK6vYcYjzPVRKxVvUaYtcvZZXA3Twe5ohGkz51DxpofnmndqaqUrrHoJXodGr5rp8SGjLyXz4T1373bT4MDHr",
  "key12": "62EycpaBNNpVK4Q2eGa2AwMYsMhCje75zBs6gtUJUck8amMDfvQNsppPqrAaNypnvoH7W8tH46Yg3VyQLM9KbE6W",
  "key13": "6CVrdvZk7no2YHEh5BunqLePiYzGbSmaEfAYbEgsNLdYZ3QTackKMkBfCMXdM2vVMCChD9v7fiGkb4LcCj2t9WE",
  "key14": "2RFQaJH949LnkcYto1yFEU8fghBzJhR1gYuxCAstfJBCREUXbMSGo6svUqgFbCELxgaZaxn6iWEbmrMBDHBGRzr5",
  "key15": "55QHDiACjiZxUaECbp4MnLzG4bELBH6FiE6tupYQcxKhc1Uq4V4rVcZq2XNs7gwWozzP6XKtsaeoem2aqX9Qbbti",
  "key16": "49XdMGcXtrgmBMnh7Vi4zsWeStozkAyMem4sGf6ehJw7FGdNGDWMnekJPeWo3jrQnxNQgpCUWqLzvUfDb8Q8BbgT",
  "key17": "38kmonZphEaZ361KSQJunqex5n5SGYqdfdxFE5wa61KoCpyd5sAZovDos9CuQM35zmjk1YDTicKB7mp3K5X4N43m",
  "key18": "3Ra5HfPrxTkmaawFVqzVrwzsiuxuY2NixyYE7jSs6ZVDnxGqC44fbiNJffjeDRubdRCU4KzecnnTDzxTVEYP25wc",
  "key19": "KAz3WkVFz1dWSgrkTS7jis8gTkCwt6wVkDZKXLKT8QfsbYwgTQUBGMjpjAouEuaH4qTnePsssoVp7pBn873KFBh",
  "key20": "5vJ6w2k8TnrtKBmW6ojbWBZeycGQ4vcd64AUWvz5J5WwUnAfSjhC2grCgPA9ccy5QWZK75T5sGRbTad8iHnFbbyC",
  "key21": "2h3n97bYiwmac8A1y69qEAfbZKcXXiQpUkgWhz5iCSFVEgjpqPk3vm4Zs5bKPHBYT6hHJUZT27wcZBAhUbUcf7kA",
  "key22": "5hkAmP69ezuMMbZuJpQg5cVXpYeXuubotPMceuhhnEymrCR26THprA613DZEz9YKPKqTjDKcGnz3QCH39jouptGv",
  "key23": "25P4GqFj2UcW8BWs2T2d5RnfmJSzWVcZpG9bTwqcRhY5sn8431FhVTtyA6RsZePLJmjwWqgQSiNnzz7gJpBc2oTy",
  "key24": "36r4PYM1jaceRmP3GVADyYqH2u1rZZrReDc1Xvd9xN2FtrLWaaaZPoHSDKjqDK4nzRe4mRw28SrDopFBeQ3grsda",
  "key25": "67A1LWRWiTNePMCaUaC5fWjUGEcCP8THjMnjHT6TvyLxwLArU3knd4VyFrTi6JqkhvrpwYWV33QLspoeA9UmbGeX",
  "key26": "4YFPVBMe9rWG95Uwxwx15rMioXntrt7mgVU2cANc7MSv7jTmncUKNWLXuxHecEG4rKj1HkRa4VL9djpLcQnLqSFk",
  "key27": "86gF9L2sgqREhFDwn4a7NprQ1YnfMDNQ62AWvbJwMwRKU3RCbjaWTNYCRsV4N9UdVcfsLfbWUo7EU2pAfuc2M1M",
  "key28": "4PZhV28szoCx2KH8iwD3eN5aiHA2HhhK1ntqBPtpV39doSv8vA9dbQwrfwzZq5KyrJ3pAzi91bkqhcbCS4isZhT8",
  "key29": "4ubCZ2ymbfSHpLrmJ4UcSMYqM7yyxhDSorrnNrXmgjk5Xht9qbxeivrdfvUi1YT1B5rqEr5UeSFLNqCF7xbJZPiB",
  "key30": "5N1Q2uDMBGJRjW8iL87a63NS7ByvxK2Jz4ukqwWPDG4cDUHynTXZXgGZKoLsQfZFRyDYfSGN967uKxbEKTTT5L6e",
  "key31": "4ssUtWVnr5ZXMa1FHTakwsWb6cgdWz1XouvLNFffmuNStwogFv3VuWSo3P492E4aRj5fKrNtpb5Je13pjFu6cpeb",
  "key32": "2AJgs2YNhtWvDNRQF4TKXUDwkVNGMVUtsxTPvPUSvdQXidhMs7E8fjTBk2NJPYRMDS1Ryk2S73AHzSCKi2AzSgow",
  "key33": "2adH47MwxKtJNJYNWRnzJZJ9i6MoykUUQ7Yk8Tsz1C67PZMxbt6yWLy8aNgoFyf4LBqexStopqZ7ghDUaoa27HWk",
  "key34": "48yPQst16shkbZqzoKc5NqNFXKw1LfTDwzeKNfTzrHAcqjefShYWvRFbQ8hzxz1vkPGf2VYujusxzC5NoDFQqXyr",
  "key35": "45JMo3NbsCbcxhfDoeqFU78T8e8kWdoLN7D81jxLuGR9ruzJ84cJdByPuVoYh4i4ng9k5kwdaFhJBJ8UoFhm1VYA",
  "key36": "4nduQgUPZ1AYMos91HYErMKwnAAp4Knd9V9C4WMCdg2JYiaAaCD6qvT6sYn2HLK8JGdUGYoNswE3CMnKmtSqNNQH",
  "key37": "5FmLwoAotebD84uUEUFU2XCf4t9TFQUoTqC8f8N5sw3o44qw3RvC4bafos9K5ENpWBQs6wZaTXoNLJED5bBYgVVF",
  "key38": "4RL4yyvYQzt9TZTCX69YZkm4VPbHzSK3S2Nzrs714ojmKsxhbeSQgSEcoxy211USMQ2DXq7dW943tYKakoLuNQBZ",
  "key39": "FYykaUu4EGMbyWJcoVbKbpJSussV8gv4MtjDqgWWBQZ7uzf1BRRX56Z4yYkUfdnj6bTbomJyfWeFmkW5akhS678",
  "key40": "4WmvTJM78n638VFtSi7Fqm7gAxFoYwNBiDzEbsbm2KL8P3A3hoig9gEsYTsYLFrmJCLvMLYzfsEEW94JiErwuW3B",
  "key41": "3AgZn41xEE6EtzABPpJheeJX6tu11kDxgJu6XygU1Luq5SWMBnMSjoevMkR8NEVZdVfeXMjv7Pm2XGY6s4rnFvex",
  "key42": "2EKgBmrzTvAky3tiGof4zKc1sDfPyuiLi1DYXW8u79U7NZMwZJqvCcNLi1ATUeksMDnfjyK1WP3k5uUJQiGfWC55",
  "key43": "4URECH6fP3BSBkfqTvt369jqhk7oGjgGyZjt6sWzwN87xJHCbaHX35rw7NCqhG2HunGzDReKSEwSs9LXzt2AMrkg",
  "key44": "3qMjhtQjS9G24g4YsUMZ1nqozjqXEm6Q5GRCVGvwBUNXyNsKv1vf1sLqyEhoJi7hYEPDFChF4RRTKNtVyXoJUQwn",
  "key45": "5oAtfD6xEPiGYTqqTjTzgE9LU3m6J8w73JUGCv6jm7o7cwr6rvCF1sVyHvujuuyn4dzzrXBezBMv6SdAGXamtFHC",
  "key46": "4i9pYZWm4NR4syffdtwq6HkkPGS1p4T1dpMjN6UUGic97B6E6btyvrXYUNBDsMS8U2WWwNCCcPGbGgWHvDov7Hy1"
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
