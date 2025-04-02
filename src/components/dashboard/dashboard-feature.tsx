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
    "4gVpJJ4g3ERtu84PwGWxU6fTTSAcmiqs9yVNmeeKoFjdiXy31CfyR8ykTd2pFkhnVBzwSX93yEqBpnYJGct1C8aV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TwCzdnuFH5YLYkxQGsmC6jjWf7BfbEVn4WAnPsvTFyoueKJMCdyhhTY3tSDh7WYo776dLQckYUL4BVwjLoR2iYp",
  "key1": "4afhCQsum1gokAsuyVZGws4dmZsUHU7ZAaXbKeMYuQdWCXtLyXtT8MPnjd33LMQoEbmqFBNrdEhCTibgba7VwQ1T",
  "key2": "4Lefe7eMuzrheRM82UvaTWEikbAFo7sEgburJsEc7aweurpWPxLH6RfJ2gSytb6ukVLBScHU8BTmbv3TCXyhirqA",
  "key3": "KEjwUSYtHvts26ERyegvFPyWNhiro3AZr19itz6Z1UXrvCVVNuhFYyZGGdfeh8gJsQx5xzjwAe3g63wZYhnUDqn",
  "key4": "2WNRUqvtXANyrBD4FXVid6chFyaEQc97xAnYR6tXoF1HviBCcoEs5MsdC1WyNnanpxvKGW4DhkL6ddM9qcGXmhkv",
  "key5": "3XqwkbPZiCgqXgeK5s1Lzfrisjvv4311T8Lc1NEVuNv8q7Vty4BmFkRQtZA5LLaMXoDt5hxkwLf7sNLZ5yHdPaah",
  "key6": "3cFbhE6bf1xpPu6621b3R1vuANYcVoMgvWu9pTFoRUj16NZHxcN54bsT2kefaXeUv3RzCSqvp9GDdcqbVyr1TSFc",
  "key7": "4mhbKszs8qaZJCU7i4rbZWZzvfHL3qQnhg6EEsirUv7Ln7xFVeiZpYc1r7aS5qYq5SW4DjQhVXqh3GaeUuSGsAs3",
  "key8": "33RFKHdNjxfbSVk8rbxBgH7dxSuEWiLFqc1k14crr2ENfga2dYeTowXxni395jX7UHtCESuWcPZaD1xUbd2evQxy",
  "key9": "4dn9K8dSmXL1HZr6xt5HVKFPMyeZDgwLB815pfqgeQ1U6GZDeYKSzXBvY4FTD9PWehKSMCKiNSNXZvQkmSvBgDbp",
  "key10": "Sz3gHwhMTcijxhB5JbxitLUpU93BHoZA3NBYJyqosykxtiyEg7B6ySJewnLe5vAMFBCTEobFwvh3q4HABdyRoqB",
  "key11": "3morq4ckBrX29ApmULuS6Q8u93cmGdB15sNQqacXPXX3B9puARKeuGAJZxqUNdSXMHrAfkgxQQS7XdZGP7JVAjMk",
  "key12": "fvoHR68vzinXnRzaTzdwNzbAABUsgv8BJDNnR6H2FNWJjqpPTqtsStUBUjcr56itbN7zeMQ3o78LHQw7zsNqxLH",
  "key13": "q724Zicckv2XRfBGbVjdrgXx8BWQt6iEWzNz6mHkyjJbYdFdA32j8n4hFnpYxD2BMGTo7Vqe2GGzDBCgEZd1yCj",
  "key14": "2yQucyJS5JoBegTV3J5oPseA3nKuSiFAUBpodqkLvzZ1HAAr2ddNZnjjqSjpM8aK7sWxkTfbqjgtpHbp6N7MYfea",
  "key15": "5quJZJkzi1aoRwKSP1jBMT4DB9kPScznMgJ5B2dAGqp24GC5vr2o4VaMSoN3Z6zuxToXpAmVCUnSm8QPQdu6nmTg",
  "key16": "2t1zyFEvZ9zyxtPV1smDEEGRvp6CaLydbsNQBFTGFWA2PuhQyVYDZJvSjMATgT8fJXuP3PsLpscfLXChK4Ku3GyN",
  "key17": "Qs7KkJ7NMkSRnNn8PoLrpzFhqvPsSkV9S8ByXmyXWA2tr9kre7rYw9cRZbQdEdtStd5hp9xhzYSuf4u4KvNkUD8",
  "key18": "2DhQ3ABgxtHW93xpXM6yBEb2Tn8B4gAkUeooGp8urGRPMLNZJTH2HiJEyoQfqTLok7rHm8z2gfQkjWQKKVKCtnC8",
  "key19": "5z8EdMa4vsTC7CA85UbWZDwhKibDykwW4bujkySCoASXMdUKQdmHTdEcEtkX9TidjTMmcdGxikNKoL17zbPiy7Yi",
  "key20": "5F8SfDXydXi6FknGEzLqR5w1ronqPH9eSwpC5K3ncXRz4cnufxTUyhKhkATVAF1zPMJSKg6vgugoEhuNC8HVibjF",
  "key21": "4jGJs5BK3NGkmVavwsnu4sjSVrAMxtzM8j5CUxkSVCybQ1NuowA5xUENEHqCXMj7vG4Aw1phESGYvSS9x7QQGtf8",
  "key22": "4qFY7E1zRim56RMMoDJcdVZg3W9UhjiGWFwrZXXEXK9nmoWy8T5RgTugy1F2RxoikKgvtCPa9t6CEsyYzRpaDE7j",
  "key23": "4v57XFR5Es8hhPqBpupicMKhQzCfdpUgkupbEyM6LZZbx6azagR52pZQq8ZfsA9YDbMnFs2Ckce4aYV5yaj3Ci6X",
  "key24": "5QgASRaJz3x9GAj6Q9LmAHCHzvamzoEzaJ8kH1hBhiEDy8fby2WN6GGQSR3i2FqH74gFvZNVFtUeEyuo1gshdagX",
  "key25": "r4wbthCqWq2ykBeQewDg6pcwj7HRB295cJ9t3wHs7ZfwW7Q8CP74kwKKs3nLUkdHRvaPjuQXvWX6YvaGwKocjTE",
  "key26": "cDEHmkq5ukMGsaoHE1YvrJCECUU1wZso4c8sYTBeKELVsv5hGGTPG9rNVrAcfWdYZCzcmd6cQEDhnMyxGPoJrcu",
  "key27": "627EM1yMBgegDrqL8rqxirazk86RmyYZ4uZcTsyuj9LQ4vunfsTBTaevsG9kqm2mtufudEfcNi9vdJFBKM4pALfu",
  "key28": "4VnzLaJSBnqvanXXKJKRp9JvRJ5RJxk1xaawLDAde98uEe9xFE7bvhrsobN4YEwch75ywog6YbtGmcAptwcWrvE",
  "key29": "4o4aj5oLDhgq2JPdcp3xjtAztfzYZXdtS9NuonV5bWL5hPJZYTB5mpJrNQgJiSAPd7f5kBe4fvRd9vSxoix6tP3t",
  "key30": "37oCSfdUV6FF9HpRphXCCfjPeQJdYbvnMb4aKen4Ybt2P7id3GfEk9m3nCTDGHSnzbEdU8LMNrLWXNz51n9ajhE9",
  "key31": "4q7fP26oLVAvfP1HWTxiqfZxvqDsuLWVop7hzbvqqapQ8UYRNUYKcKdujR3ad37bh9ZvR51hhzxbdMADqtmMRtw7",
  "key32": "gtJswtjat1cufH9pQnaZU4S2QfP9ZrCTCrbSqyVXmzWLPuNzx36AX1qQQYAMLeNzcdQKuPXUzoucVfLBKy3TsZb",
  "key33": "63YifDHVxfLBTRQNbdgYtVzWzxaKgC8mKuVbrNobXiQELbQ9PHoqf3wbJmLHdQbevZ1s329WgXKXMfEVVQUBZ8fF",
  "key34": "3ybveWoeYh3y16dA1AEJBCYidrnpCgUkMpd1NfKPd2UfpxpReWNSQTRZSbNFp2rFxNFaunV9rT6tTkDPCeEky5S3",
  "key35": "5JMjQLTJzhoiFY5S195UHa3z71MyfmeHQfeAez9LjXG7PUMRgyu52fvP6URJWfuoZQFR8eLvmrTBi12xo5A9F4xV",
  "key36": "JDyNMYRLd2iZfqtK6iCaRQq3mC3hBFBjzjHmSxeSZkXYrAeuFytQQdmRBw1GENRADUHtBze6X58pUAG18f9Vaw2",
  "key37": "2MzZRPpCCq3A9g6b2nCqNkW2B3ktWSpjwYQQg6ou2Uy732EhxTiqpmVgME8NDmFDhaDzq5UAPap5KD77in1MDLFH",
  "key38": "4XVnsbEXcGBoHPW5TfCkEh5Mq5WftD7c9gFfxx7FtGAP9MhG2MhxBTntKcYcsneyGtbWZDXDrvA5m7rit44JTcqC",
  "key39": "37MM6YULY3LN2yy5gNmpyi5N4mUJJ43WVqRfy88rmeaoPKWhrDAEsv8aJVstLuPXL9C7aBUiwBJLFouMjiBoUXRh",
  "key40": "3pcSzaJ5SArwLtETzQtzxBypq8Xrc3bPngDTj2A2mSC4fZ2jiE6LsoF2ojR7rZnKBE7zyBPZqH17atvmedSU34Y3",
  "key41": "2DoXw5YPh9YhCfbj5Diq2Rn1YmVkaNEkBFSWzaFxSwFso6weYxbeJhY34J85gNeWErwssVissB2Y8kMDGbF3pQwW",
  "key42": "3xzmu722oseWGAdu6HFgWtKS6ooHD1QXrqbgrTuwY1UtwQN77gCnYb2sprpsfU6YTtvAdcKtZ85jeAfnK4LKkFTQ",
  "key43": "48kpU5ukMgo3PLqV1fVJsJwLp3eRc5ZTBHRq9FgYYBb2x1joxujQaC2LDn7rfUu6oYFmTRLEWeYGwt545EDH8ebK",
  "key44": "2951DpdE1CWPyxeVnq1gpw1RqsU8o1Fk2chuWEng13FHtm412EZCGUQUEMq6xmd8YmZmBanH6KEQq7THAJK63R7q",
  "key45": "3XTHiQjiGrEpv85mFkdCozfRd41QnnVwabzc5nF5DxRyfwmsQpbftQQtu5kys9hwFY5gj7hzK6iqSVqaeDVnfKYM"
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
