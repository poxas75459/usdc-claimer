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
    "3WwLXamXsAZaBeAkpP8GcaJzjon9TCRd14y1ZmTAi9bofks77Ev8BoT2LYJ8dUgtLjnq1D1e6iD6D2Dmg4LQbPip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D1z1Fpv9k7LNbrf3TeKPFxq5beQWRwx6ySLHB4ZNaGafPd8qXEpWKHn8BGRVKZEfcNN6qYXDdigExK56ha1ePMC",
  "key1": "3v7aHi84G2bJDRhNmLLqWUUoK6AGRqFsAUfVWo6WtaSARpEp2EV2u2RTtHofFBybsfV6ZTimo5GZt6mDM6b7KdiL",
  "key2": "22ewDVBHBsNg73hKuKbY5uW7rxoJvurwHd43xUj6Mt3WNeH8xzSxatLqoH9kac6kjQaRqCGyxHABKjAUVSshShmp",
  "key3": "5Yo7HDyJwqzCGA3fEwAQkTzjDL7ApX1wEouwd4AiDaUFUo6vwZzKj6QtNdY1oJ1n28kfDPLGFWAmQzmEoesoBRaP",
  "key4": "2imjUvTukcFUGtyHjUUzAk1oZ9BqJkdmfBj6UUvMmcqJEN4fC7s1Fk4Gt9JnFsn2x8oqbvtNsE4KY1AMp38cdYbt",
  "key5": "5Ac4UG1baEAHLHUvMJHMXathFaTiTt5soAuxPUJLWPLT5Cnc6qMCci5R785L24gUEZB95kJvrb4riY4zvpJwmwC2",
  "key6": "5PezMSx4bnjHBSNiGV39iRPX7Enmab3PKBY6hBWBuotptvm2JwWyx79Qr9evdLSGGGfSs53gMfmHidLc7N62cCTp",
  "key7": "2torc5WAu4zrhznwcZz6HhdZ99mMKZ3V9fv3FCnpcwY5UhAXEwnEhkWzqYg5hzwEpx31VEkTBMRvGVGo8yPGhPTK",
  "key8": "sq7rsoVC9JthvrJNDio9SZz7kQvi9XsDz3Em5iFQ11LYMaMGLqcX2pyTtsiK5YzQZZVaVWJaJJ3Nn4VyGbJSWnu",
  "key9": "5sWMoiYAW3wFw55SotHZqk5gGzjBvf6oHJSvDpDojTbPAnjujEXyZU8h7GNEdZyKHToauU83ywnAdoZXJ6TjACgW",
  "key10": "677Ao11BQwFvRKCzKEAiRQdM8bm4C2znyDBrge65LyRVCJUYgNDTmoZMueTcMRv66seEaHwoxmzV3ytp9kN9UYN9",
  "key11": "W4e1mfAPJjZb2tN6oBtUaSS5nryy1jnjK63ov5hcGkamXjY6ACDDkwuEbxR7ZY9UiiAZR3byTpKHFdYPA4xFmET",
  "key12": "5t5sccorWtD833pTufTeDqRCrLdh5XCZ5WAcWS1WvD4G162JNtEQZRiFUfLLaaYc9oPPqFLLEYk6VwTNruFKEkPR",
  "key13": "GMUPQvZZSNWnUAbfMKSk9mh2cGS9FuC3wdtFHWuAniMYruapWbzNGEVrY6jBv2dQeTCUaESBHkcg8q7zGPizGnw",
  "key14": "2gMDDixmnV3ysJ4TzGkmy299bdYVfARhizdB4re8WMwyQqBrrrRDdXHTwLsWTmX4H1dkjAv9dnvidQUnyEDZgaSP",
  "key15": "4fu2GNZRNf6qm6AAJXTG9ziRmCHEyP3CfrTP8btWteHRySYZ1cr7hXCteYSgcdnjYs3gPb5Lxca2QXp3PPEDjtY4",
  "key16": "aJWBm1Xp99YuBEzFf34NHTJBaf9TDdXUr1BtWn7F1FYJ3PbmJjY9pSVwtw4oQCcQSJFtL6ismZmPVCs1JsS534F",
  "key17": "3YVgvEzjHG7v42tVVE1x26aAJMhwe2MUGC9n84FNLPESySx5YBHxSNBSjNW6PU8PMN6tfFk4gTzTgt5VmGodMvgh",
  "key18": "26ZFji3z1iv4PK3vsV614jxLj5LUDyZmyU9h3oawdxKPXPmRYo38WRweAkQqeP4goT4vHHavHVMtXJCAqcCxpBKZ",
  "key19": "4h9kjTmXCnLaRi8d33YL5aZZrJy33fEtWaF6iQ1eAPa9wQn6MWgPu4uhYoXvLbWW1mKY9AfXzAjZAa7T32YVcgHe",
  "key20": "CC59ywDV3c8Dhr7KmaH6cWu5X78WmD8JQanbD9w6DCuqbBCPKPMPisMyT9apS2nvJi4JH2xKqLB2CRc96JSucTQ",
  "key21": "4uiGucb7Yh4LwMJqFW5ofpFYZe4pm2bKdmi3qfHKzSF67a5xt2UeivjQ54E47ZF213FWivoLFJ3aA8LDxUdEpHBR",
  "key22": "22yW5az1uwuE7zGAf1fcYAUcZSKenQiV3cCGnyFP16sF1qEQyFZicHmtJScatBR5VtrTGpeNhtJSaW8hDEh9UmZC",
  "key23": "5FUpbvCZCbYsUGCdVEPrt2vTAvWaf1vph2HB2ddrDi4gHgAWJsSh2DHuJMeu5Jq5WdwQo935gLs8x9xh6gPbgYZW",
  "key24": "4DEMi51jEdLkdJSfUS29PnTvpGVByFqfyTpgL99h4YzEMetFYQvvtNMQEVtziJF9wKinXSHkitLLE5XqXMvyAhLU",
  "key25": "2aw8Y35p2138RcdVHKeikT8qFwxm9zHt2rjjdyuBwNyzaFxxms612183mN94Ec1bb2RphXUnJRXfgS22BuigKavQ",
  "key26": "43RF2KSb5QBAnHTeGj3gTXr4SPuaRfDtHeLMEK1Da7v7oNWJbex33nBjxzWHmCKgr9a2mPKjTjVaYWnPs2e3Lvmo",
  "key27": "3JKfCXCph8fKeXAra2FnHfV7QxqkAoYDgbdsrwuJRDzc2HXTnuzJqePtRayU2rAPRv8Px8UMFr8G1qa1F5eaWUKA",
  "key28": "2ynRMbMsediKGYDtTqiUuf3KEGD6PrPaztRB3Z73hZpHHxD8q2tbW3uZG7CD6uhybCbYT24hiVoHRnnNKvzjNbiH",
  "key29": "4XchveRWKwjsQRtvruE7mhpNJPcAcFT16LbmzoEM1XdwHPVeZAHojz1u2XwxnCQCJt36VtPoHyNiBQ9xExrhjiJU",
  "key30": "4jDPgwgGrcNnRptu2RoSsqdVxNSdgBb2UKNjC6cNvgYxwr6fUhU1ZsytbHDNc1tFnifLdCLaAhYP2fuG47BEyb7w",
  "key31": "3mw9m52cPRmEfE6Wg3V1eFLqfUA5yjaFnA7xqyk8WbC1kBwan9Nxbwc2jVdLrb6ct6tyJu9UrK92Aszkd4ATd6N8",
  "key32": "5ADUqSQ1UM8XseYF6o7jXaxUpu3s5v9qch2R8NmjraQkScypD7VbidrH4TiVePttV6QHKsYb9BYgRaoBVJRYHV4B",
  "key33": "3BxTENdCPdiD8cJVirgh9SNQWBrT8pRW7WZ94v2XEnQ54daAvUDevMFtJ1gTCjsNi8PJ6umaeyxyPAYUAjfkTxK9",
  "key34": "PBcmiXGdEugGJB7prPk2eRGLLv8sEDAQvHAMSqeVLNzsJk5Sbm54eMieXzEsTyijcNq7KwwKDiWBg5AbhDeUfCG",
  "key35": "2MqZ857Am9rQdTfmoNmYogQdZD1Z1esngLf1AAxc4T5twBWgFF9YVzs1vqkqAM7C3gXcMYQpxRz4bHQwvXSyHC6G",
  "key36": "2DrCo1ecr9CEJ2tPv59Ng51RW111Wfz39JKAeXxuZrpmLyVQ94uKF21MBJEDZf2fbgVS1eGz6KyFP6QSkt5fwoBh"
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
