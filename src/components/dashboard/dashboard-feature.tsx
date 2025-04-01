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
    "5E1NTHkaAH5KeUUfJ9e76FV6Tf3L3A5xL5kEJGKU5LQPFhzJungbC36W5eoRHGMo85PSbBzy79qWChcNTShHnVRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nu87G55YSc7QFDWvdZnBWHeNdCpbVqpPV8ToF6vkjXAdG8FMd3CLEHd3dVEy7UsRonFn4B1KacME4T3rftKKGMq",
  "key1": "e486P6Xk2wqCKySnjvevnG1iaqQXd9VREDbdNfdAp45CfbNyaG4G11e2pp6cebTouDw5jLo86YN1usJ2Sp1KfVb",
  "key2": "3PhBEmyiYgse3hLquVpnp18NXqnRteJCx6FcZTGRURXixprV6xpoM9ys2FvRChaGSkCaHW2CLUYkVh6uRnmU6hLs",
  "key3": "3fCmN9r6SSy3DzpbzsEzhBcckjz3BBFFHAKtnbXeP3m3qgRd9e8ZvD4bs2MYBiTFnrRFQPBr2m4EuRNBCLtws35d",
  "key4": "3g7wk9ryAtq56oG47DqieA94fDfMYQ7zXa7sv7tXwyYzMV3btNKi6grPpPVDXee6VFLypT8LUW4Zn6maxdCZXA9g",
  "key5": "3MPM4xcQGVNFvR7spNaxfWnWhXBpzK7cR2zQFqmCsHm2KjyebL6o2BiM2CJgU91E9ABpec4XVp4eE2jhUFJfGWB",
  "key6": "3zkfPRC5wsSjH2XEYfRky5NjXgvLmHdX9N9sfq2ws4Ypk47h2AcbLuuAYCDxWvToahBV7fx8VQd6hpvMUd35Pskz",
  "key7": "faHRVCUZR171PFFXEafp7NMHG8D1Jix4RgsnkrXUMcskiYdH5hhsH3wCutN1V3BSy7AuMK5kvKiCaRRsJ6gkysS",
  "key8": "3YurFF9sdXzUvf5QKVN6m7AbET6J1iL7KtmiFkdMCymJfu8vm6gqwjdnD2Atjy16KngTMmgdwwf9cRwk2p4JiHqX",
  "key9": "215DTf7w5qJ2oPpJhi59CugMfz7eFWizjS7mxayDAi1aNUzLLsy75n5EM4TrpJMbqExpmzfjtoTRZv3y6ciCunMB",
  "key10": "5Ko4hvSdSdWxn69EixTcqhsFNZNd7VkMVdXZ29sek8UYbqCgqAkSpSPcykEyDGLGdGNjHcceNVygSEhps8xHuXAV",
  "key11": "5VWyL85nurREBM3Dd2PGFdkdffYDMNFK4ALWoMSaU6ANYCjGt3QM25EioaNxHg1au1mj8qapAxV2HAgRciBA7VXX",
  "key12": "5opw3cqrRcaJ8Hb6Aq3nN4NdpDTMqK35GfHf4pvzNCtKH8ExuWk6bRSMBRc37gpL9H1Q1euK48qPsBC6KLT3tycC",
  "key13": "4jLnsZUh3A2vYhaZUeKHskSEbFfiiJYdYzshCS7MFkg5jiSvL2UMU5FhdMcsX8evihDyFjJXUUUKYv2B8BsNHumV",
  "key14": "5Eorae8rBuXWCJ2q1KELL9NVGhvRfR1oMEq1fnfNF2j9WA2B5cn9rrtJPgoAZ9XJQYBG5HvcHhBDeLN85s7yo1Kn",
  "key15": "p4WVE1xLkWnXKMRkXJ6ZU8ea5aNu6LzsCF17YReuuosfx64RvGLnqitrJ7jrd5azEYaAWW4gi2gbsgxf1HzzXXE",
  "key16": "4BFsTVhk7Xecma5bsxWuw9fwvXxVkX3vkfaYs3F3xUmDxAYJccdhTk3hGMobNiiTkyjbWrdL61WFTLSY6tnrkRoQ",
  "key17": "fCmxPTRVoi6J8ysEBDojEbwakSfU6Q37MN7ooqHJixu2BBmNNSQPFnZ4Fgs4U1GfczaAfXq4QSrvW3haRAFiHU4",
  "key18": "2EQHyUQBToBkrRkdZqPwbqeqnMkpkYcpX2yvwi7m3rgFs2BNdyfDkAVvPpXfbVz1R5tKoaEHe8qVgXmKh31GCQkM",
  "key19": "5sLNVbSDL5P5uzwPhhuoMZvbvEsyq1kU9MR4zdPTNn4cf3Smz2whzeLArCzz2XCvAZ3VwGhfu5Qreuc7rsx2YbCp",
  "key20": "3VtyAZMU3WxLCqzXUZk2ENZVaVnfqE6CiL8Yn9KfbMoCaLTA6gKzzXa5X9UBiCAALQ2vF57j3B2uKGca3TzPbe62",
  "key21": "5sf83yNdDrXrVpgRHRqPMZdsWHU6ELbHXcBEo7n9MXmLfmSnzYkgd1HqLEryYqBosJu5DGd1WCaL7ppERNvwbMjM",
  "key22": "4EDbRZQy2NGC15LZYuhH9NZYy9EUBGkVuMyUNSsezPDGh1h2pcJ2K68NGGqep6giN788Qf2nJUjkMwpTijoQQKJW",
  "key23": "23F2RJDkHq5ezozb7ye2mLV2oZELFikGNDN1HwRa3b3vmc7Z8qwpQLU8V5bD3gBoy1VvXmMHGghPRGmr6Ww8Divd",
  "key24": "3jCNvpRhX1TdpBYup2guJbqV99WxwbAY5BacSx6WTusj3hrGmeEgAaNHzY7y9d9SxgNmtaxiRMSFtC2v3N4AhyPX",
  "key25": "4PGhEWg4u38SN1eYpnGZ96wQYQLm8mdgsqAmoisjJFzRDWsYLv3ZXuFgxtitBz21XFqdsippN96hFDK1y2YeYXcN",
  "key26": "4KtHKDY2NLYHoKJDELjwiUBWNE512JKnBLHsGmnUPEhRkyZWZfxQaGrGAu5siesiAnFwt3U8g9HUAZvNnnBsx8TY",
  "key27": "5opbxuHwWhQPiBdDBAwg2rGzKwZk9MTvSNeiowqHZ7Mtk3kboDW5mGxbjvbWHwnR6XhFwmm2CowzhS2LZa2c3P2A",
  "key28": "4tWm4ijLKqfkaqnh4Fz39dmWXiKTBDBSDwiHEENZHraSS6FVurD7sEvoxXFn83Ruy8NaUP4VSEdhdoYAdGdx6ZAC",
  "key29": "JWBFZjLW6sSsmYpBU547hmacFcekXipkRA2JQfMJCcvmXpqT2n4zNHfxWUaP2w1rV6xVGbYdHT8ydRfC2yPdTqA",
  "key30": "JuRrARUQKBrhdRV3LuT29YcYeEFg93EYL1GtruieTux2HGAMV2HpYLLMCYETXiKgPZXBtvAJ9pmFzbFGWSUfXjz",
  "key31": "3Aan879SM7prEW8wYuwWsEoTpHZYW5ymQ3pNBLWZbbvChPKiqn38eshdUmkgMopQdiwdtcZV4LzPhXoRXPPbqQzE",
  "key32": "4Ybg6HoJ4Ry3G8JVNCU4XaJPG1WAowBd19RTTUwRTyKqHTXjRygMWAnv1SqQDouroaAExf6DSSVfYG5wSQNZ829h"
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
