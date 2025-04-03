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
    "5sdifZht5X4kizYZt7idSzFpp73R7v1u4J2jQLYuHHWDeUjSteuZudDdYrudCqr9v7QJLPjfMiMiYNUVJiTpGLBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVqwsFsMWg9znEXHePphULbUzES7yjU2E43spqfwb2ayHTmZtPF5dTR26GsfTocmotFuaLrAsXDffBVQqjUAY48",
  "key1": "zkW5gaCr34Psfdg2W6fnBDm4gmSDrWTcgx367kjzEvKRrniQsTHTp17FfBU4Sheus5fP65XyrXSaEjWgKA7eUac",
  "key2": "4MMuKTtj3aox54ToX4cgnmdgXUJQiK2v2AjVcTmQhZJoc18Rxg6fhmLTjU9EG8uQ3pBnuJfd6QoLoc5D77okWYFV",
  "key3": "3L1MU6fbiEZNNdLVg4UZh69HEiiApmbDLQNfLTkCvQYoji4nRH1Q2UWEXKt1n924MhowFjQt4woosWny4uTpHHso",
  "key4": "2gxkmr9KgJcDhmp5RRPaX54jNtrwJXpsvHiuazwSEhQbXmihRpnGKvb1Tp7b3z8YALRJZce3GunA2eJ7rcKkXL9u",
  "key5": "47rk1SHS1dTsWbeYPWmMtwoJwvCXfPWfnvCSg5x7WypsP4AUELvLx3n8T3EnCwwZGx9j1kdZcCEgJd635xjZAsEY",
  "key6": "4r4pc2pGGYbBVrbTsQjEA97PTUCW4Pynkg4wqVg2KEEzrzE3Ne5D16ewgCpr1GEhoAH7DtiuF5oni5vsnvoLWbQY",
  "key7": "4PbtNGXydmKhAiDpvKNMuCjp9LVLLmrCg6dMimoyRxBb2hwzPBHyyYkSb5pf3m2KajLKG2ohKadapTvvkgrDRLWx",
  "key8": "2H26Xmfw79yPBNGzZaPneJPbuyHeW731kreGDqUnCHootJbN6BLPMQ7LsDfu1KD9Fxv9YWYiA4T5c7Kq4fts3MaU",
  "key9": "v7tR1T6pVn3cQj1U1FHhc5b2Ycj7eFP1RwjXNrGUxP4o6xnyvwvtGTzdX7XkKjeJnDfVWD81WSWU2VZwDTKXShQ",
  "key10": "zEifBM1o3vGG9TvxoHcmzpbBvu67fZhJRsLNtKzojSsz66pbHJC4yBYHPzLVg6LS7PtYz1HLce1N7HHxCz1SHHA",
  "key11": "5yNf2ACWH6bzhmbSXnSjpz6xLbLGUWEbGbMxZuKvRq3H4pfRnDqoMxshJ9ftDKXxvkdpDXm371pD52zp9Q664LQL",
  "key12": "27bxZYTpwUD4oFkZxDGaQo8y2DUvYKDMsxb7c4C6AVjYovzJ8rVqksG78wZxdXauQjGY2NnpEfUVfzpvkgfrkbE3",
  "key13": "4rfpMjwmyczEnbuinhCUqdRP2d6Xg4QuW3uymn7cHuBiExWf2beZTF9gkj822cZ6DiVkfBdfskik45mjRB2GgUp2",
  "key14": "2GYyGaE6Gb89DNFPfqZjWB26jgDCPp92MhMt9hDCjoR1MX8TEQ1RWhh5uvXeRQtE3aZ8ZQwZbAiGxqKYygj3RJtE",
  "key15": "5S6ACGhz3EcACv2oQ8DsKNEn1duu6KVcPddJDoSdXcwz3T8AC3vy68oqtw6PMeQEuHzxb7ycD2ypjUEbtLaGDRrS",
  "key16": "A5dH1tbeVWk2aeoYBKoH8CVut2iVSLjbq5wr369zmRHmRCH2tVADdjgtq1H1TogBQXDbt21jctqKH2M3WgTiahp",
  "key17": "2AXsBsG81syCi9Px5WNgVEQ7cb6BbZq49Xiu7zCJu2Za1QKki7HPzZWeh28Vrhd4DUzGknewjkm82bu2wFziy36Z",
  "key18": "4o5SAw85hKzY6KnMUacsuQFu3fq4jhsg5sr6CnGej1HBd7Y7zCQMq81iopsUz3LPm2G7TWXkquq7TzsHbNxNkmS5",
  "key19": "2FsZfQgVwbUunXjUYV8MusHVUNY3AvZmtMJ1uVohAjh5CApH2M8BnEQrYNZxmeEB4ULWHTPPa6afTRMjRp7NuMkB",
  "key20": "2YcLir3xHwws9ir1D2U74q3JpmZaWTe4rErrQd2nKJvomyo9tqrLsTt5jT5JgQfFRgXuK6fGYYmhLwH5qU1Bwkem",
  "key21": "5brMFQganqSqMD3rues2e73NZWXfo1QcR1rC1V7Wp6xPUHfBV6SYqmxsYc5b55cQrrqE8RPbcMEqpH3SDa6n8DPH",
  "key22": "5BZhgrJ5fXZLNj6jYWpXzf15DzG94SsPAaDLr73esvWKJbGRwLsCyao21EkiFGFnXQJckpYfRkKjfM9Fin5Q7583",
  "key23": "zwNeP4LHYA7kfcDxZc9G251demP3bZWemL2vGdDHkGm4UgZG7XjUxYtNzCcp5ssXCa5gY6QrXiRpSfE2Bemvm4n",
  "key24": "5RjLiqi6trCcsWjurdCRo5KQJRihZw8Cutx7hFrCW4uRvU3ifoRbgR4JRediw4Y5P8pKU5Jjq6JNQJsg7a3CxgDs",
  "key25": "2KHJkzQ1WgCRY1fiQ7HeBRH62kRkLfiTvHtEsSuSKAXGMEGcNVEYFyPQURbun6tAvTGbKoK93UVPndmxmWhKqtUe",
  "key26": "4oYg3u7mEVs2MZ7uooWX5Vs3PAjgpFdsJi23afYTDHi7r8aX3PGcrR39ejWfESdN7rqtJY7xY3AHHCXk9JChAsoH",
  "key27": "5AMWj9EyEE2T3iwjFHGJXhQLQdkFcUGQT7oej8Nx5DxuVrGe73U7B5DqGK8Xg7imScwcFrD1ow1yRZ4Pt15sJBsk",
  "key28": "5j3TBus6khf7PWmbj6sA1WdBAUnmgHi2Pt4sJNkiiZ8gfoNrrmN6655cpG7FYNmbxLVbbFWnECfuUrVbPff7xApF",
  "key29": "4B6A7KdxbNTCmE4Usy8jycdk3aYYUG4Y6eMPMoz4yauMo5ptQg5Gbc5pHgRCbhee33wV5HdCRm968iYii5SJe4oM",
  "key30": "2uo9FtmVG5W77oFXvMWUCrryXK16TXK5yU4nwqUrE1Xj5ou1h8AZL7xM2di8shWuoe9Ny8R3cYUrUTwB5vTRWixX",
  "key31": "3jGq9S5fnHHmUJ9xCAFvC1jkQTmPHUyz6ZJwsmqMjdK6eLwAxEmcXZSw1d3raaJpH2AoSdLZUm56j3nRPUNMgrD4",
  "key32": "4B3n9UQxuC4iFRkPkxkoUDcEQVot3rkFrfTbgFHDFMdTxrdvY6a6Wf5aZYYStnSDTrbAqKGZHSXZo3gNRkwEpw8m",
  "key33": "5wdseHQu8yRPPRcrKnTKmw2VDVVgfzwmY3grt6fJm9qE7pgPvUsNZdp25XYwaptnomg946sK6Qc1deax2SPhgPfS",
  "key34": "2qjFxBzDXi499cgADxfYQo7shoABGvmyFtXuMspagucg3AXtWD4fNMgTqyXTNyvCSRBkj9m54Eq4vHrPPPivSF7B",
  "key35": "CNo8bwerkHNXcTKVEC6sjTgiZeHGEF1zy1UyXoedun4Tf84bK6tjrzxwqGXJH97ykhnG8XsEWEmg4oixD9cUSX4"
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
