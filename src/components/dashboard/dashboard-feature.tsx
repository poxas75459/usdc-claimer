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
    "2GZRk2h42UHnPu5S55MWN77HxbBxDigGtRYKL3iGMYabfXGripTkQmeSXhDrMU49szq2Jbf9E54Gd8FEBTjuMthz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfvoTjcCqpafQBRTTykYVoR9j8mfcDXkNZpDDKb68EtyPhC4viQBTCxu3fZkxBjRxE7TyL22ikn88cL92HhjKZq",
  "key1": "uBx71FYAox8vGPXMoo2EXBNG8J7iQizKiAqm62f62DAjQjNxJVddXUUyUEhmsCgnyXKzd8JrK5Xggn5SdQbfnST",
  "key2": "wtcftxaV9AqzaGJhgx5yhM94z1rfehk8yRMZhSztgLPWWQgCg8jmbUzYPCNt4gLFAFVBBEJY5fjFSWzui2x4Xwh",
  "key3": "56vcvX7UuYT9YqN3t64PhH6Z8SbHPVbqgDGiPfhBGVKkj9SVqSCe18zUK8MXJDE5FKoHchbYxYkDtdX8JQ8GDdgL",
  "key4": "5T64dVWYv26ViWKubsnjDfjkuq8WgP7yzbLQzD1LwK2HVhnETAsTaCmHSfkW19qcjtRKrmQRK67TPuqgQb58VAsX",
  "key5": "5hcHxCV32dZBLYiigNG8DnS6pfUhqB4HTJNTmus2ru9vMGoMnvu4YfBGCgtTCuVg5NHJfcpnBgo4anBBBLnrqa2j",
  "key6": "5ZjQ4J7kTLDLGjBZNSwercf6idFb6L9gUjqSEtEXPX8ak9syARBQdmnAYcX6hG4injMRozUqc78bnK6433dmdejh",
  "key7": "331ojN1vqVcjFuyUmTkZ1WpTaMpU3FpmiVfoV4bdLtyTzTcmZ95GyoCwT9DuB1bEn7t7Q6A2Avpd3q4Y1xQN4kD5",
  "key8": "4mSbPCDP972q9h4K3VBc8jMXo6MPGN46oxtLs2ZXH7CMiciJY9yWjiCEvtWbD6n7w2W2iYwm3omGaZTV2qo3togX",
  "key9": "3PMSvnMhpULEZiW1Xoo7AdtHzFUj84bZ3GqNyX95qhU3cpAUESd1ZDRTRt5EY5A8Q8E2XPHB1qc4p3x5eT7Eoh62",
  "key10": "3PhUqMMNucP5ctbNRQerqbC9WdXdFLpzGnJ1DzGoCKXApEzCiqPz49TzQ8xUvDhj5zogJv66zwy2WNYYQzah8t7X",
  "key11": "31jkasBc675qwUpM8FyySnFPT3pN2RYaN2S3jT2emMmiskUatHrWXChEmARHVyVn9bLMQtZskRvWAmtBaGvwZYDn",
  "key12": "4awKQt3BiwroVfoqdY6128UcN2q75SgbD7aLezp5W4Bj73voSnp35ymuzzX1ZAph24PG6xmSCyX11oxThimq8MBm",
  "key13": "3JMZVnq1btsx91WA1shyeEhYFycY3GG4iaXKUrPHqiEz1NxDfMnwYa8Fyfgmnx7DVkiggBqn6PnuFH9Cs2pCwaUk",
  "key14": "ERL2YKK3d9LbV3qqFZnnd6vmrwPbKzkWftxExRx2hhVRmK5fwVePLakxU5xdWjXS3rcg25ZHsQp4sAgbiicpBE4",
  "key15": "2FMzhqgH7NCgF5GGW8FPVV2HUTv9wT1btx9HwQPFXwL46PYwi4hSHgZkdKgo3dy7kv1pepdm83caq8b7aSPRhGB9",
  "key16": "2ZquLxuFp1jqGW848swoNfehVVYx6euB6szhFEKB2L25XzTLhQ5XCjcBkttiLy8NgjMs1RBEyAnip2ZjFrRy2oV6",
  "key17": "3N9gy7LdF8RUmVvJ4UjKMYujfsDsuvZHtNYquo3Yiz2S4QDTjq1Xm4q4yXNu8NSC6ZT2hVxp1SqAzWxfuKsMowa1",
  "key18": "W4jzu9FNBjWMRBfFuhj9Fgt46BtJ3QwzNQYPM23ZPBHaLaQDEvdgnxZ9fhHZMbhXBvdssF8fyoMhKc4EVaVcbq3",
  "key19": "4FmsGphTjUCcxXEpfQLK3hbn2MofW2Me9NCkYVif36AigzYS47MRzKcrreX1qFMPzmFk4dfuMfu2TBEFM2ZTwrWA",
  "key20": "4YnALCdaWp1dnaMbDuKRg2f5kkfrP4nts8Q5KKnMGqeg22qWcfFBvkrDuqTbciKVJxq3bf8f1NvwWWSsqYUpYJR5",
  "key21": "AsEwUyGE7CdAvTCM2KqH38NBg67BfQHKYr1ip8qLWuqinWimsUXvftyGWqCJth4sFu2pk9BwJ2bFiUSEWGGGqUV",
  "key22": "463qSFwJQgoDUEAgK9WLDTtSdAgEr4546idu4c2bvWzRH5xwE4WFKmxs8fhXTwew7cDUmjc3axnqUa8NmZqsD7D2",
  "key23": "3pzTvS4CDYrCd6G4QFNscda1Qx3bcVxPpD54qCC1sjdeMuWaYN7FDX2TAhhE3E344sGcHiDFCKo5mLC2rUMqSAcW",
  "key24": "4CA8rFdiPyBbZJW9Ezn4432eLVrdyAkrxcaLK6rR68Li8AExnndUgwkW6nLtuBThhfk9nk96EyT42WkvhoPfXgvp",
  "key25": "2ZDcvomrCXYTooJgeZSBqEjiXAMstfkTsFMqJAwa8Do7SbpqMMCxUhaMnUtZTS7SXGxLe5DGFB6rj4R3h2pnZVET",
  "key26": "2LraJ16t75KcdfKe644g2JU2RAuCPnAyM35nXknC2MusY8F8vnYd7Pg3jP4wEz8sXGSeKZr8PiNkPdiPqPUL2mUS",
  "key27": "2NWQBet5yHkr2DwTwAJohYMgv7USGV92vCTYxoJMpLCNenFi4dCWxZJchLUENJ81EE96BqwuHx1rMb66Ff8LFFLf",
  "key28": "5d3KpFtUavML24Gw4yMJv5JHYgD8vRBJDdZ2yEJYGXDu1sFuqbLHmMQUTV4FC1yHYrXcNPVFFzBLvWvrKyagTwKK",
  "key29": "4MT4HupYig3udhr4zmxz7QgAGJe3F4XWX9qdAK5m6DGwpSVwgBb4mcEifyQqXU75d4BkZg7Fo4viSngWqbvsp8gM",
  "key30": "5DZZZ9MazAKjR9s4mLncYEzPcAYo3fPMents8AVsbHRrsaNMpa1YS7CdkXPnK171i7TpHNYguhwQvnBwK7Yf5RDs",
  "key31": "5yYweYK1wah5hhU98AJYyXVzoJtCcCCvdShhemE8DuarZxnqXEgVhZBmoaj2xs2n4czpKfqk5p3H1uaHUSov3bNm",
  "key32": "6Zt8ENiu8xcYnqiQS93rtQ28tZ9Xjt934oZoxNfWRj4sJnh2rDm4qFrKreKsVZa5kFY5StZSwxvBxMoVTTxARz2",
  "key33": "2W91Bjw1c9z9f1H2vrnAaZqWTb9NB58YLWVuz2RJqzNueF72GJj8BpH3t3RYr8vz7QosPHiw17qEHX2HBXoEDNGp",
  "key34": "4mhtkdhgWjku7TzAzcoofZYBotwKoLdgG3Get7Mj1HRbFjef8g4r9fu3d6PZdh42RtvNrSKZUde6WxGJzkfFvFVV",
  "key35": "tB53PcYS59svY28rYupThDZqXoShFqMPMXUmHdCMu685yi45afxgvBzZ5Ev4MhH4nE2AZtc1Jv1GDJsL6xXQAVW"
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
