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
    "3vF4AeQ7pDonCTbeHNGzqszcLcmzHLGaovioMrjfmKMS3GGzqekgR2HM9WSD8xq1d6uD5ZYCUg2egPuRQJww2Ckp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytwiHqkXKPLDx8AmnyRo8dvob8BaRcyfTdXxVCtSucUyXUU8auBDPrNNmJNcDXew9nmKaueqU4YvXtxxkhU5Wos",
  "key1": "zKHQQcbktH8QRh5QYqjA8xh5sS2HqGhN7sGCgLM35cazb1dFfg1v9jkHdfn9jWpYeJ7VCNoABKxDgnnhAwj6sT6",
  "key2": "2r1EBF2DtAudEPA3Rfnz46F2xCMeocjeHvByu1gUjVy3kPMU4j6hUrtT66AUG2z5wcQS9x5QVfSwH7Ed4TE6ES16",
  "key3": "4RgMxssqriDoz2yFPxSEkzpDfLVHqFC2a8p1Vcto7Jre7e7TKwqHwjo7QvAfw6uJG4QRefE1oyeuBKpFnxAXUD3r",
  "key4": "2iM4WMfTvpHZnkFE5yQD7Ph63AoGZ2fRCQmVuQFq9ykDtu2KBVDEhK1bh1MVMsSwXaG1coeNtZAy1N4ifNHAPw4b",
  "key5": "59BTP6jxMQqKJNWzqKiwvN9nZTL4ZVe7aKKsdDLBEQMLtoLMksur58ewnfhdJELXQowvLFpy5FMXyxk9PJxth8H3",
  "key6": "4vhsnzxoc6WqMFrTh9cEjEqqEkpoyjEtfQdA4njwdHUwGddDBh8mJsooeYaKP5gB1Vag1RKbo2kEVx8iieD34jyS",
  "key7": "3P7QsZ4dZTDSE72pkRpnfW44mJx17nFFTKMjS8A6nuKqC1bZQ9ehtQWBiKs81xZ6RYg2UrigrXDURTkzX5gpynxh",
  "key8": "54UZqbtf2LxFk6RuwYST5iFCcFY1emXJWnVAsH5AtgYWTBXi55teTmzFU2iAGXR5RQNhRDzSKaRHwWq7H5aH41YX",
  "key9": "5rqp774XbEs2njGmpZWzELQDuxLcjSrB5FCZhVuzJGCHFGcRDqzgYpm9purnkTfvR9q642rTYzeZksv9FkdEi1LH",
  "key10": "5j5jCVpYyARN5HroxtAcx3BXudDx4k7ZghJYxpiSzjBwmT5335463isfUU3QY1LiWoc9jcg6Tb3bQuaVD9RrnQ8k",
  "key11": "5SPgALUs4uK3jB753BAQJ6oXSKjZNDpvJvWVpvf98qTA21JwY1L8iBZPQDLfCSMx1z4rx3WLCZTB1JYusKZL2MDu",
  "key12": "384LbqnJUoawwMNmeqdTfZLwZXe1G6DZrnwNBqSq5zjgxRXRv9rQCb9EdWhEfLqYpbpLwY458bMJ65GiJFRSAhke",
  "key13": "suSyxarWmd3uvAqA57tAADaJaAdks6NzwMcDrHMkZuCFUTybCnPCFRy9euXPG5VMWAXmPCJU4jcVMuabD5dnJQ6",
  "key14": "b8CJ5paM4qdWcJQThVrETFFUJGUyXLiytMBidCEcqu1KkRYJH1gNSJPQPcR6vQo4U8AwBkroQoZuwa94fXiLMcf",
  "key15": "4JzYGyHCoo6TBkkSgjAZDqev1TMGsYVDgbxq42hVczNNhyfrTFjqC2YCh1CJzmtGDMLA3tjLmnJm1eXjLMNYcEGm",
  "key16": "4729yezm5y2mitToKrgJvzxFBdGLxJxmRmqzQz6U54LBHyQo7eDAqeBeJfQVUzcDLSSUKoyAxik9mN64sjxbQkik",
  "key17": "4N5zEippdmtTK3vvEgRHFGnJQPxrLhPjWJDPZtgFBK97kVypmgCf8By3zbsHmsPbhScGQsHfTrkEFVCAD1fmi2bF",
  "key18": "WAuTzDfbbHb22MdVhYdmVbEUt9xBUENEXuCbN47TQG1UVVzsonGSVN4VhAaMX4bpoBJAZduBZzUrpsK4ftvwTGo",
  "key19": "nESqoBWpruRsf4NpkmAJDBE7khzdFVFBk4Ag2KBb1RTkqEWe9ncShdh1TvkBndL94fMcTi598QxrE2WpUWqGedr",
  "key20": "5BZQkJ1TrF1nmmUMVCyRuZBEYfMRSWhidQN7U9Lywy3tMefCySXMJPpU5xir7stqoWz1iM9HyVdCDdWs8U9rqQnM",
  "key21": "4aFDnPYNQQEB2zFWeWujwnMCzVw2EtieCcUe9CfNbaM3fGjxGoAURQcUTYmdDmgzCuHhDFZxgMxkzHrFoRjsSkdw",
  "key22": "2yPsMD5imEjijNNicoKsHisjecK1tbMJu9oo1JMvd2WxCewje8UN6aXw8bJ1dC9sScQJ57YatKKLUwU6EsFXun92",
  "key23": "2g5BJdJZZfD98Y6eU2wMKVUvgRkcUanKdoaxeYvKyc9Xby2JqHCaUFae5wSzNKcEn7cLjHyY4DD2RFn574c3L5rS",
  "key24": "2D2ofJG57mjBUDWsT23K3aYSYspT5qmTokx7SkUPvj6T5w1zpARhSKYyiVnGPHzEvvZZtbqn67Kx9eUKgjaeTcY3",
  "key25": "3hSC32VYYp2ZteXkaXAJ2ZbhQfRj1NSWAns3QKLzTs7VaLThT8EA5MQ3ohu4cMBhV5oXtHgXTaCYh4f3oR4eKgxf",
  "key26": "3KFrfmg5Q6x9vBgUq44NVzn3f4fJNottkd6ZCdmmfiK6g27m9D73EovSh2oHkY9HmMdAhRfBEWhiRaDuvLwfq9N8",
  "key27": "qVNZZiFaTzjw6wh9cxyxB7UZqiLfSgUW8Mwa6hCEmFkWHiPhwZgQ7nT8M8uuGUd7zcnRBxRq2qasePT7kw1yPgF",
  "key28": "3mgZwxXoahqteyMrQ3dkh4aP23xvmq2gqqWBqaw2oayMAmmaTch2RKzXxuRgW6SYzSHdn3dd7VWSThk4tPhaYQ7T",
  "key29": "5GC6ndHeUzu2RUq1NmyKD1Gw9NLcgYjdx3payNaueND5QT37YuN9UWCyLmRgEruww5K4fvgZve6CZ82GX7mjQtg6",
  "key30": "5FJJRMCoqeAjm9iTemdERfMWPJ3rc7TtHDsPTQJStJw3M3rXAiEoDEKUrVFEH36Nkr28hEdoce5NoQdiiink4VxG",
  "key31": "5oqq6TwouJTnbgBeP4o4dP1gWtBAjHD7SE5GfQDBRWzfFZieK4YEpACzd8jneyzbHL8WDVSfHy4hCDHJGAeA8Tw2",
  "key32": "4M2LHocuc3jDemAJqiW4usw689uH76CuSLbTUEbHXuA9DGV595xMDtV8FZPuum6qMPdhdN4HGM9ZQQJ36ygpTSuy",
  "key33": "3aEfoC6o7gm4Cvcvtp9FJf2QPhgfdAbFLQLLCbfDpNmYs7aeE3kZwRca22ta3Y2GMHuUpTzxQUyQDgDmk9po1vmx",
  "key34": "5vTBMtKL2yjYs8XfXSyF8Rr4ND6CLU4uom93bJ6S5zuFi76dAhR738n9GSXZoNK4FfX9aUAUEdPN1VjvKi2DC9Ny",
  "key35": "5RirVickjeCcpGpzC8V4CzuPGgmU1zTNs8vT6nmZfWXa64AGX3fHR992hREyv2X4Pd3dQY4vn3nJWa5Wk2iDx6RM"
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
