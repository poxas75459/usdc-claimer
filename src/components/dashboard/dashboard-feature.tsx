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
    "5Y2CytKHoEELWaPYAzZbuDuRAaEMqg9DfxQmmsXjtZZyto6Tux2iEmeumHK5qn33bT5BQBfhji8KuLZsVAfrP4C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34UEgqm9XV1PTU4CuNLi1Sv8R23Axf2gQTjNmgvi9b7UFrBxfQrrziVqyR8MdLGiTtQci4JNb6FPeo8Bgf32zynk",
  "key1": "29SpyDvG6kkzbKuxQMnJYZfdXQFSgq8yxuqRSmHLQeLPojk9gv58GGz8DwSFJaob54orw2QbeFrNaUYXNpfZv1Rd",
  "key2": "3w65LxKTAFyKk8bU17aprvsf5PndwzuvFjkig8Z8iHGTUM1wM9837PhjEx9KvnppYxVCBxVobjn4W7BAUCnL6GCs",
  "key3": "3of6yduLEmtgNEUJ8va1sALQx5CbcVW7AWUyRgvw3bUJMtbcSfBVKDMXuZHnK9CHrwYfKagAeEdsAJFGTej7ZW81",
  "key4": "4pEZd1LCadmBB9mWnBtwv443iqWdiVGXckk6ufAs5FFT7wSXMgnJU7C5kRuxFJX7rSNnmRLCrioxR7k8pfhCBNND",
  "key5": "CmUsQhRWZ5KrtqvaM4We15ekj5iMxUC1pg2pN2LXgTe7Y8e88Ce1gEPTMQkVP9VNoxY3g67V2VDCGANcC42goUr",
  "key6": "vh8qkkTzZ37q2UwsmxDq53cnvtzjQ1gmAXtZz1B8d4mCyLMYLTjno1Fy9vKWnQ8sAHJs4aerCsEa1YrX5HX65au",
  "key7": "4vjHE7LMDH9V4A1F5UeweyTmxEyCYbnM6VrEvR6mZJCvbwcJPagYNUrmrFb7zqFomoqJupmqMSasErSNp9GAXAME",
  "key8": "3GsQENsb7Z44kWMhvnc1rQ4wUxzbTSARVtJaKC2oQDWVbx8MNbhgY1dZkbsaKHNFPrj2jHkaPkR8iHW5j3gMcEAL",
  "key9": "2nahikfA9k82optYit6K7diQ5zXhswhKHCdNx8taTcrb1eP64JXiAN9VF6sDrSCccAi3HsXFAvnPy5VbKZEuxTif",
  "key10": "5Z2mdde1PJLUEfneM4NFKMXq3To39y8c2VSPwSQwMzcPAnjRwejfDqnsPSHmnf3EVRGPqrykWtgP6Tc8cqKhgpVS",
  "key11": "PMiozghhRZjb5gddgCoJLvQSbMjJ2qhXxNeN5wRiYWt6cvGmxYSueiVP3qTf1aExEJ1g76BduAmHFthjpikC3S7",
  "key12": "5vvYcSzEPMtCiTFXjc7EM9UDV8DtV1QXwKGh1vn9YQgGhjwUSpLaewTEKQHtJRFSLChLprrx3UMya4imAuLH4Ytj",
  "key13": "5bpNm77AYdhKbazv2TGdWhTiZgayozzUGNMFwEuim6CbFqhiq66tMNfEHHZpX4VmkjGWDVUfXxmAWEvSokHwmMej",
  "key14": "3tkhMUrtwynNpBAHScUv1CGZBxofw9JS3cCBkhWpKp2G6JpBoJTTxEVFvzBo6bCAtVrD7818Dtv3nxvswQaSK9YT",
  "key15": "raKRAAT7nyGGqqqtuKUKNhtiJV2eaVg3RypsEVdzASJNRag43JDthHJ2j8PksCdisxpDTspw9mEqr773aHTzjHV",
  "key16": "3UKNGnwPBK6bbaYyz6eo9texgQFo6FZtaXGz13HfESzLndmNBrRVgSKUrHyzH8YuxMoWjWKKcHYnu4V8bmsst26m",
  "key17": "JVPkKmTJTTzNwp1FuKcUU9h4kX4JFkvUq5rhVP5SUTULYQYfJuPcAoaxX4J7ZmaL9LhBekvWYA1kK9yC26iQQXr",
  "key18": "5YmKtcyk2SUvuMKccvJY24p8Fk3FcuvptqDBF2tXGvStBdqrkqrG4p971svTnpouhAuLbKQLzFm7Sxo4afcMRvN3",
  "key19": "5NUJ3Sq14G455XBuEuVRWGacgK8jqC4AZzVDRrj16nzSgki5qF1wHdh5JL61fkw137M4wmKwQmSPG9w8AVwxJjDG",
  "key20": "GetGXwECCbQoGWNcxBuGduQP2KDsT5XkPusaTTLaz9Hp7VvyouSP3T4Zh8bAg1ARD5DDtN1gJjZSN5FDAT9Doug",
  "key21": "2qaANZ9G9xF7DVD3PJaDXkoSTqVKY6TVmQSqwQyvxkh8w19Httu37QQKyvC3dqc4H4qyrUUfLkYHZXfFXyanxGoZ",
  "key22": "2xoFsT812nKasSeAKRF8mPNzGWUhMmNpf7dp4kMJeQjNhoNjGnAy3q4Pcibd2x8kdUuwwNKEt8ZJ8ui87hRSW37o",
  "key23": "2jtuu5nBig2fAd6iTqw6JcLwNXZdaK8TzvZPiMRi3WcohZDWk2ifSQGwG5Neu9cd86FXvEbEGmTatHd6B6tufLcd",
  "key24": "cr68WSUrPFJ559oV7v4oXVZcTh2UHnsUyo4JnZZ642tEsKFRL6EBhrf361pXRZpgSu8LigQepNottHdYdAky9Qx",
  "key25": "5hc4snbUN6ih3jQmgbGY7fpTbqpTJCUzBRfV9dLoFHmEyerWfzNyZ7dJDTFSrS2ijC9eGA4dsaEm7mLvYwcRwiRw",
  "key26": "4tUnXGyjZQjk1ub3Q3fqJr7TaPzS4fvdizQ6Xxet14JKjWBgZxvbsQbfuQViAPPu1SdQZ48jgNCyo1YW6zDC9rnV",
  "key27": "5dQxN9rUgDyGFTCKJdxDK8iwmNwaZmgo7F2FKEddNAtAFYsqzU3iBJCeC6RRjQ2Xju2KVoqKRnmqDPddBzeb3rGw",
  "key28": "4FgtG9sC6LyJL8rQe7DQcrRTMKQdJZQ8MQQWg7KZHDbeAUgugPgjuxC6EoAincC1SvokrqsmfviaX3AxAvFqDyQh",
  "key29": "5tHoRS931ubfzTFpMGKrZevetMUAKo6Ytf5CAgE4icPhMt5fUx98kCSbWKDwtjDLPaATiZfLyDgxbukXpfZJcvtB",
  "key30": "4Himc7wwNra3k6qSXE57x7pftSXzDVxbpbLk3xn2y9qqZdd6CfGRmMfoc95nWaRd4XpJBgaUBcyuU8oms8s5LMxf",
  "key31": "2enSMBDSRuAJjW9hPru8fb37GuWMbS89qjCTTsTCPquMKKo2AJxwms5t82JtSbHkJS7ya8wB4GzUX67fbnsbxjwc",
  "key32": "w9HnfEck1yrovA7h6Pj36VJ9aFmktr9ETV8qnZqDLJ5mbqPaU2nxnBE9zeDA9gvNdMerJfdHhjKYKPPTQNas7QR",
  "key33": "2P826PJTnPEFYDqgaE2551McmDZUGVMjLjVkCu7M8bqqJUbJJa8ouL1pcCCsqvCmGftSGk6fyQouw3b3Zk4CNCE8",
  "key34": "3i4coBK26Qfg4yV53bwjQfH15nA3YsrebB3NX146n4UZR1h5EJe8FBnsLwTmuTJBrVEDSdtnziEKByN6LgGsLfiC",
  "key35": "5s1e6Z5ocrCsEGyAeGV13tyBqLk9Rxv8xYBMCM9aXSZaferzoTEbiPhUR1A8bcrK4c8HcXYLbYSJVLFRYJnYNENE",
  "key36": "5iLW7E4Rn8t2X3W7moK8Wgcu4Rf2NN9mSzEyhm8Gp66F8j4Lz87wu74fX86p6VojoeuXeHzC6sCvrUPJV2aNmKaR",
  "key37": "5ewjfkPMyvandZEnv8smYm4h5oWArfN5YsPNo5HMpy6j45u5AjpRoP84uWn7ieNmejs3HWPCNCCTQ9mewExW9Pbb"
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
