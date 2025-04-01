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
    "3uoPDMqctv5qucBQWLf9NBf8w42qk3gmzM4bQL8L2EEPyzXJLnVKugerhoRJvqZz9AcrWSe2Ed4rxxgjTxNs3bLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AnUB7dyBw8KewQhBtKPgGoFRGnyhNCqcrVjK9urkdpsTgLxdCRDS5nZ3DQHyHAqRbSGxdxvouu3iKMxWrEovb49",
  "key1": "FSY4R47xsVNRu7M8FhJb8CJZnqtphsr9BRSqMXZkKqzqbHf43pJUQ64c7dGCvxQScnaZk3iyULCALgSLYizNMGp",
  "key2": "25M3NsKb71m8eRHfuqmi7Q9MTzKMSgwttTnhhF6FEfWyQU4Ti3iBTRz5nijUu8i1xMGjx3fwa7d8nyxVj6rZBn8q",
  "key3": "6JBt1mBDyWK7FXsKL6o1e55oTYBaHdKSQfm5TFGy1ycN7kNDTrFCFYV4VyH6aTXApMTtDfSu7LQ5ooh8g4XZoqQ",
  "key4": "3RPyKFPtCfsKx3PoNvg4FszPCB9pTQPXrC5piZz5GqspLYpDiodehPzWE9i9rhA7MEhuvR1ZRCpTeDjaEgc534NE",
  "key5": "5cXL8ufpUh1f9QUvoJ4AHAtvmaXG6Cn18RmahTsc1gmSFJ5ggkKxcTbyVuxSt7Pbe5utffXLr9Y1exh5P5vk3oX1",
  "key6": "kXJWmU5tfGNPd539kRdFXsyBaGNewnF5gkUcGApB5UpkQ4cESqYsDhPwJs7NxizoXCy8x21zvFoLQ9ZeJBcJtq9",
  "key7": "cn7RXQdNg4U5yAge9qTwDArA783KLSa47JkpFag9ze4tN389LonpjHMV8pkZtFaLMRs5S2H9mEqRF6iSG5Gt1iE",
  "key8": "5iBdnwv75UW3B9EwS9bms8kqbYqqJ3vziMQBTpuZz674qPLHPQJrw9vpYSxvoQwrLsZ3RVyqv2K8i1CqxBjG5CYa",
  "key9": "n1tMKkyf3h6unFa6rg74aPwM6kx35wcw2Ud3Q6mVN4nLUTYcDUM2sUVQTHDGqzGDRAwLZW9SzHNDTxDi7JeJjfH",
  "key10": "Ck9pvBqfR6Q4Xpugp21EdeWdVx6u1cBxkVM58v7p5M6ahdwrjR9AUEuNRFEDZxymi7SCRgv3LausNwbZTTBNBjB",
  "key11": "5wSGtUNMENdCuzFNVLdLtPYASmjAoYQCeRoDkJHaVffLpVsV3PARCXaoK63br8wknj1WLT3bmCXN8K9SGowwRhQD",
  "key12": "2CZD1sqJZytZ3s5yZ4kjnUk1pAeTFXhsnGUon9TCd6FipnTGsQT9FPkzYfATinuMaiwk6fnn54HnpuLV7reS37Ur",
  "key13": "2x9CZ8gpNm3muextxz3k2SoHCKMEyUf971YBLtuhe8ygegPb1BDeHkWtqM41SXz99C5qYVoTJwSJV2saSAFwGJVS",
  "key14": "sFJenkjS7S5yYjgwK9Jk67WBX6p8hVqoHrZTNxGEEwZptc3t57Rzjf7S9ceKTCiuLPniRKSjaPpiY9sNkx85hZ5",
  "key15": "21MkUpLYZGvCPbgmQ1mAZzHGfxWGwNCsvefsA12GSonuMFPY4BDp62q6hLMtfmdMBKpzo6nci2D4dRJcdWRVe6qW",
  "key16": "Lsae3kcZHQ3h57pp42Z9EMaRgfdUM77vWnHGkgkFPSk1dTT4ku4M1PNqvGed7YAZ3Bag6mRzoRYxhJr7Sowcjn9",
  "key17": "5TmCzjSmFnoBoDq6dzgUK1T9NDswtquUzGLx763kHrXn92TcpTF8gBaYTWw5HPk5iBhtYSPdFSWetM3LHA7mESJR",
  "key18": "3HZ53uzfkZyX2rGdZEggRpszfEQ2xD3xz84LaP9VtRC8SoENet29RBikM9csYTgiaVubTCHCAydSfbXKiTFiVjYN",
  "key19": "569AunsaTmxoGVouzTK5eKH7LaXv2wLcnhnxX2kvoe4rdQNXFeygdexxtt5SH55FC5MLp2885PPfo24gz1tgUKdv",
  "key20": "UVZLUVTZQawcHsHPvpcnSKLEepuHbE3MdCVJiMbNfnYGnypARZv5SwaSdcFnXpCMBsQnTPvuxG2PiRua7moUX6G",
  "key21": "5dFSjAehBj4eWeSnvPq21M9Gw4AQMAcQjqnnqwaCeroZJkCYbpF1yoL5fNMD4rtxtYh8n15bx95pmgi2dXPkNvn",
  "key22": "3KZSfgZ88wPALee1Wm7JPq2Uf7gP2XCFVwApn9ggBu8uwNarr1tRu11jA2pv5w5Bd5dHJfunpgQDqmNBw7ueJHYT",
  "key23": "3e7giKosqhxqquUYZhjNLXotkmojq7YccXS1t9qRnGf1ZeWZJSPPWFNPg1UK6NWj45SDQr2GMLxik3mjcNwUsV7H",
  "key24": "4tDa8e6nA3ykkcbxdY1Jm4bzDmMq6Q4YVNmJzbEu5TeapxxKWNxD9qA9qStnxr63dWasqsQ5Pa46khwg7VzgsSG1",
  "key25": "67h5YGk3bN8oCSbQeR8PTActeVSXHuVk2HQBSdSrbdNSdAxKm9sEBEZd9FwFFkaw6C8r7WwyACFQ8ghK6TruSWp5",
  "key26": "2KRC5dTjYdxm4nNqL2Q6tS2td3Ar6R3hJ3ueLCzzmDCraNDriDG7z87rCTe75J7Bzd3E2SjWPynb3DBisiYThQrB",
  "key27": "2dVwsivne1oAe3F3JXPUoTSr8sixwafs5c8RTuRGQXMCVnsdyL7P8fSziPx1PfrdeHEvQt5UFekJ5f2f7QHtMyFc",
  "key28": "4gdcb4Le2FYMxpN7NPMHybFnaP8aQ7uXq3c3cHBKq9gpSK87wdsmfh498Yg4wn7feGd3Lc8srd9tmbC6jWdoYYoM",
  "key29": "JHtAfBigEyLKwY9YKz1n7nxq5ooivhJbeDXbeztBEGBcGkApEASGMLZ2Q8813zafE6n4jhpsjcdmVZJqcZh4a3V",
  "key30": "3HPkH1ZDbH1yVtE2a9jhUoMNKjqYC8dpPwybcaAVxqJTW5Y2QebhshQwPNJCppZdBgVFkjoJ2VRU25dFesLGHP1n",
  "key31": "67W8XuKoKUp7gifG7pLVnNJEWq81HZGUMjLVM2sq1wjQ55JkBk6nXppMNhmmT1iE1XHaPiCydQSpRX8XVojMa36j",
  "key32": "5pqDTwtPWM2ajGkgwSs47Ryhi5dkWZ64wgyoURHeX8SwuEDxSPr9CLi8saV4kosTe39s8wKJ4bkrz2sSbDVYyF6A",
  "key33": "2NMJRTHaYovoQpzaDhdbZKz3MYa71B6QwL7MUDjDZpBdCK3rjRbwvseH2Wy6KQ6FBHhSVXCNx9ktWMdWhMgcZK4G",
  "key34": "5an89h5ndKAmAWd6J21ZiSsaXpnt5B2tvkbp8VVM1PAL6xPeUuoGTyexKJtgxYwrgV1KK36WaSg8z1UsTVfdGfok",
  "key35": "64jN2YMfieDijkyo5qMJ5nEtvj95aqgcgvdNZCbjXX1w3JnxWcViyDJjaRvYuvSq8DjcydG6LQwxTgjRnCkH7yvZ",
  "key36": "3xWPcuqdpSMD5tWgo8G8ujYEtASQJCti22V6C9rQBmtC2Gnhb9fyNYAM4EheCCRJinL9Yn4rLDKdV6Ei3wa94RHq",
  "key37": "5RTYfcCEuXsxqq5UVNWdqSM8CbtGsFNwboGRdtRY5FHiezBokNB9iZJtAf8NV1BQT8jRaS84RDBRNXncZxF2nPNx",
  "key38": "5E1PRBsstpG5hF4ziA9xwXri7QbkYKi5YxAgJGiw8mFPu9d5vaH2Heg1qtj3fQGPVMYVLuQ8TDpfMfRh82qnTaz6",
  "key39": "5PwhrVSjX5UGWfBHe6rFdomPPEoVg6XRauQ5u7xUwVxm4LeCpDMPN7KyVShfVg1QMHAxhmYHywSaQpEjwtUsC1eQ",
  "key40": "BD88vJPAdwBURESyUJJVwgziAqGMC69BqC3ka5165WWwU9hbYUPSRbxBvzyLpRvTFZTLkGAt4NvziV8MWY2ovew",
  "key41": "5jJ12pB4DP8XV8DhnEYbY7CrQJeaVcATk4oMitV6KrNZTJpg76rkLsiFsX1HrAaNCHt7LTFYqLx325mejSQBvja9",
  "key42": "3B5HfBaLajHUFD6i99CYF1fkwigBqB7qTdobtJJUz5gq4FoBZXtL5nQMZHLoKm2Ej9Xv9AcHxUgnoxrzrAqfiLQp"
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
