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
    "4ZF24U1BghddG4FExaxJKSsTs2Ds8e4JbBs6N4m1M7DNnUXecj2RomkFKXiGrMjaywinLCK7qrgdCoLYsZHgMAX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RT57i37owMBVaVNhJoD2qvBVkHrQcKD6vFCQKAr56niJg1KJ7foNfEkGb6ikFTHT8rEENya44SPUVRKEdRkMUHE",
  "key1": "5Qp8c9B7f4nxrCcV1bZSP3nEwhgzrkTFSp4VQqbEXmnvXmnhrcuT34zXv6ybL9uNP8cgfvJbBuoFoNypFkaZjTav",
  "key2": "42B9MhhyWf7bXwdFiFHVbrdFhmxfQCuSHWPMmW3MHbFuuBwXYVC9VUeXQV1EgUfS8Yj4XL8PRBntYBPSuoSbBjXK",
  "key3": "2D84hmn3ADiHjZYAFKBBbtv3fbHafqgRTiEBrDxWvvWwrjwraC8HM5hgR9ag1D7gtys233sFNXfvZUs4AcykXqMc",
  "key4": "2afX5bjEWEQorMi6Xc5ykUv943n2x3sutRj1s9UZLP5z4QLWzWpQhRkPU38fLETn7jkyaHf2mxs8qcxMweVCSvup",
  "key5": "3PyNkzhuB1btMFvFcWwrRh9czt3Vn8HKxgwNLBkmN8sHZm1cqqqD1UdAc7VK9xZDCZ37pJZxfhTKy5NoFx4VeqtW",
  "key6": "4dRqEpHL9JGvE1TUcXqVP9miesUWbGLs1PLyKcZ1k1k4AznDoXDJFS6dz6guKmtDwRuqbBum3NYbuSqjZX1xCpx3",
  "key7": "8zWZ5gfs2VesXFXofYoqXLAZLhhQNWXsgY4Dq3R3i2q1k6KSUM8qTDJhqRRb6GkQ3kkv7W29sycJ5UJbmMJEesC",
  "key8": "EEUqVmry3QvREdu3mSxpQw4axXzoAxdHrLcXNsKnEWGWRnzEWdXyR8kKVvDKzwUvkwZSqRMtrhRgAa9EfHkgfKb",
  "key9": "2BnPyeqitY1tqskUVcQ9nAMCTHbDtmXjXFqPRwgWy56CkY6g8NvHd7nmtzmhMbYxTtP85RY4v5QH7sPhXoQC1eiq",
  "key10": "2CkvdeP4cPkLtQSKyPmmERztMdD4ejvQbUqXBx7mFPeMuWW4rqNyPdDiHGGKYwMcvMm2mjyYLjE633dEQeZPPEpi",
  "key11": "4VatHbfNvt1huGzPJMB5YSwFsrZdFcV16tYVmumg6dobizSuvk6NyXoWU7p4XBMTAH2C2VFhhaZJ95fn92yVnNHH",
  "key12": "2iMurwbdTETxfvnbqLjFY82KHPhudfrLf9A6eg6pDkc3NouYJ8txwR2svnZaXDKo8kx4N6WrtYDDn4S7tu2jtCAc",
  "key13": "5wZvdYfgKpn4SY3qw5my2ppsbhfMLrqDybRGkBWmTP6RbHcRRbEm6j9vvuBg7wrazX8HLqTCMKxLyshHmo6zawV2",
  "key14": "Y8Nk9Ak6WTcVaMSc9oTHmkQqqzdyRmA4k6yYBxFfB2PSVitv5SUqJiSk7NpDGAbRRXQsEcXoarSU7kTTHbAd6o3",
  "key15": "DoFm7uSADV5gubC4pQ4cbgKMnEGaQSBuFqGUPwBY6uKrW5KT5f8qvWQPLkd75etmtFSCU9Ux8kycTgTww4GiZak",
  "key16": "5n1CezAe381rUFGppV6qHLCyzki2XMCjngquk4ubAq3EJcY1Ue7ADJJmbvUt5Ue8eAXwTbrN9ksQBWbvhzSnZ1Vj",
  "key17": "chUktuVdWXYHingzRrg7Fv5dXYtezmtzpZyRrnTGfQMvJKdF5669FzSdnVskpL7yNDLACdCcyKriXDbuRsBZRSV",
  "key18": "7LoC2jDCC2qGviL2FR7gBre8qVR6xv4ayME7suLTc5WZEFbbKBivDQ5j2bATifZ82ZK3w3Q3K4QzHWfp6kdD5Br",
  "key19": "3HpBmUqzMRdGGGDRWv21vWppWXYpKFSDBfJD6EJm2RPpCVuC9HULS6zxKncT2CQLTxhziT2p2k3LLjUPFhC9NpbE",
  "key20": "5JNPFgvyiRk8UXSQhsDcZ53HrJi8nyUdEWrYo6qQ6CcugX1Pg5VhmDW5TBjjbhFndG2Sq7YSr3CfGafWh7d1zZZw",
  "key21": "2BZakaZ67xuqh9w2LDMBLvbwLr6h4tDBqvMVH6NocB6WdshB8a6MGgn4jD45kFzzsj4k4tk6xHKipcDaTQu424SQ",
  "key22": "5h6D6xLdxXRG1Y1KKcWntFFxNYiBPSt2Jd5D91zdeKNHp23KNNLfTse52BAFMoqzrjx9Vx4pdRKzipYr6NJxuAvz",
  "key23": "BvxxEAg2vihwbAjWS9nnwMANv9XMsYTJBp7kWzDWzmmU6XZ7HcshuC9Lx98MbQUmN6dLPn8AV6ZVvg1xjhXV16M",
  "key24": "4aWo2xUZZxsDh1wTNBXq1ozGiY36Hez6wAyXfehdPzdCEEaJfbEuTBqQ9Do2qMJeUXUto9hYoeojUigQtE2rVu6k",
  "key25": "2BjeH841RRw2Qg9LgQXokW9ez8DQFXTb2VXgg2PfimF9uqkfP3pGzarbA2osXVdExU9LqPzSURq6fxA8YYt4GGmJ",
  "key26": "3xmoVweRohtM4MyW76t1qmGGP4KiuK6H4F5S4XjvcFGBtmUp4gNMVDrLHyc6drwqDJ7Qx7GxjpjkoWDnftxfk17d",
  "key27": "Uq5Vv6vc6bZsHxbBxTrsaT7kXFnmSyBy14FrvPLHVE9xtgwEgSuYdsMhuo49cJgwUHDEkhAgT8avcq7bsQdEief",
  "key28": "4izSUhM26ATLEHg3RAK1eLPizCvR488CHzfxXyy2G7BtfCYZsx7ws8qzFFkSSdcbAJk7WCgUwBjkq4x7T8SX6LXG",
  "key29": "54Ra8yytvbUQZzvD9CNDJ3E3HjwhzgHRSJUTz6pCorSy12vtC2LJzjte5Ccorv3KkinEJwyyzYBTGaKZ39Mjtcs9",
  "key30": "2LQCEkKBcftt1tAokaZtaXDKQDVQqt3fXaP5Y5jiAaM72bqtpQjmX3J5gRFmztQNvdTq8jtfMeQWhHh3CdCNE2kZ",
  "key31": "3Hn1ByjxCF9cGLwuHhTeT6ewvAwHEFZyLPfKgQZ5MnxSYrrvTibtDEUTFoTeg3XyQz2kGdCnfHPuGTJ8EYkZuBUj",
  "key32": "3uD2Htr4nGTGEyXve2iAYv1GffgQRHMrm9jBSVKxvveFyUJh8UpwXV8raBCcGvRTjV6uasp7DRME4JcaKxiiCvZf",
  "key33": "NZMSCZB7X3SPVon7JWeMuWGG31KVfbN33TPycC6DitT638y66hcVHr4yhQtNeRRL5GrhMVMvEqccJMEMqMQr3K5",
  "key34": "4GvTGCvnuFyFT8FHxnhZbn1bx1pXz9Cy2AUwT4VMwozHvCqFVhnyosEXgDbk47gG7TZjiKqPoAVYzjkFWVE6hB7m",
  "key35": "2gHveECn9NP8rnfbeTmWKHyC1zwXfUEVMTktQzhbPSdN41nmAMabre6XJ5mVeJXKoZxkh2PofXwYkSSSFqLpKoCr",
  "key36": "36veM1ub9W9t2UP9RLTtEvgBKdkxYWFi79nkk5tTJHKpxNmv5DTU4mYHhgyAJxMT9utkjA7p8zLrKZknUbiBvTRW",
  "key37": "4oe8BsxTJUs9BBufsjzB8zfkj11YkqFSyKSW4Sxp6spmBFgLPhg3eZ8MxhqHmDZgpAboscbCGAkGJ62DVRudjkSG",
  "key38": "5e8y1rhBzyvV943Fi2cdfQCNZ3v4SMBy7cT5NSM1rUg6orFTUf6P831GoJwXG9DGfgQdjEzKtCUYWCC7NPKc5Pdi",
  "key39": "51gE7rhtbBNfWfEbhshFWvBpy9k5RfZ7QRUj3tyhCyudvAxxDRbGDG41HwTX5dWF6kgB5qRD3yH4qAwwNwAkKJhG",
  "key40": "3qFJ2yyaecvf8FXbH5XMjjixnazCHcPMmEKVsF6biLyxjfxWK8hu4yHNoLk8u7xCgtwPzLn6z7tgQRPDXMTDJm5o",
  "key41": "3S3Aj5tPBmbK7iaxLZNGtRMS2Bo2ow5UgbRnCy1hN8qwrCzZnuZcNrrsgB8xZTmDjRk3uLzk1Upeu7xcfwDgsc4",
  "key42": "2RNyHJNJABSqvRvTCnCA5wh1dKFk3DcNJHmUCnN8hsubM1oYHWRqBFFjCbp64oUd4gEFDijsepHmEPazpUjPLF1m"
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
