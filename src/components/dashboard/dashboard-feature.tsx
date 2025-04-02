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
    "5h86PiXVbVskH87ebGMsWvtUJ7peDsRJrz7rqm83DSi6mbpREBWM5NuSka241djuU3wsqMvwsXonmxvsnhh2FcUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFV4dxUF4jkWgFgKkWj4U4ArijxQbHY25s8doTGJZF5si3KZFyUdVXinPd9YuiG8ryvu3f6JMmzm4M5XfwZhmfG",
  "key1": "28rFzY7ZU18DitqHRG1TYwZCdV89cvM7BuUTiCPs29SUX6DJ3vS7UHwqk8Ls1JbWZcD2zeZcjGoydQh1snk56DKm",
  "key2": "2hrSzGQ7PVc4xNTMRikrjZRSjGwdxBzmiBALRnuSZMfb5xp6spZSVH4iuLBsw5DCpVfoxqg8AY9247nASQfTnSVk",
  "key3": "5aV1eq5rhuakSwfDyk6xZW3y423EiE5MiTN9r8yN6jR4UDG9fiioqny6zjpchhPys3sLHbnBUtk67piFbt1Msu1j",
  "key4": "51GTrnBAVBf5AXtrAgUCfdZgBWUCvK21uQH9i7xcJQFzAoskw1XibrEFuis3DhRoQqUg828ZG1e9r4mt72DbH8xk",
  "key5": "2HuPtCz3CvTqqvciex7a7wSCwVDfJNyjk4eX4Q7jkDH3xwodFqRy8hxvPNu1pDXUTxAKFTzF63LFuZmHgVeunwTw",
  "key6": "52dSQFbB9ySTNeMdajUnkyfaf2C2yp3CjN4vRSRg2EJ3rfuxJta2juq8ET9WS4Ki9hKrsBQbM9SnmeXGvaGxjvRG",
  "key7": "5XHQs5aTswW24txUgXdpKcTT8i4M4x4S6mnUoKTsMiWrsVGqytmizySC5Ah4syhtUedSWKwzFAZzQZSBi4X8d1Yp",
  "key8": "53AY9YkZsafXjEzpinCfY5EYUKcKHJ5GLWGCB6xT3x5ktiinTZopDY2e8hkWsRyjNPX99Q8gYif1d8chxNQVKw6y",
  "key9": "47sa2d3QysbVMiaJYwSyTSFeC9a5Y31g9YE6cmzpa58P3xXWNZgpoXsDzrrUbL89WZu5w27a2c9YvUwkUw11MBqi",
  "key10": "2XfxGWKacfmhmAawyJ5pdjRfVUULnZtKrbHJXcPGqHgRn9K2Uciet7YDNTejpNVJm2RsBP4FmfKkJjTh13a4qZz9",
  "key11": "2yLZGz3uwbstH9JcFvsNuHe5ZWT1UhmXdKNurb46RXNXHE9fVkg5iGt85CBV6p9aumhzGPjqB8kgVSThRxEgoAor",
  "key12": "4uxrUWHrezHiboa4MyHbgWu6zumnyd6T6FgvuxqP4ZxQ9f6LhFq9kdDhsfk3JbwvDGA2k8p2qdbk5DuqW6CJ2LJu",
  "key13": "4sACc2fKDSHUzBsJZszsGQbyUvWgqHNo51sQBEbJit6DwxNqgYh5TwJT6CtuaRHUppVrpY79L5r3ypeQi3SgicoH",
  "key14": "a1xKy6svfogtspBx3DK4evq9XJm2iB87BxRvSHv3X1K6rMB1pRFQH5JwLAJDaohPgf3zw1hUtF2eJRoLq4YLshg",
  "key15": "4tVvR54Th64V48mehn8T6gAhKf8DPBTYmUaMHZGktFG4z1Gr2V7ewxvdtDfnS3WhmhZCitajMeoWabHuePTzsWSz",
  "key16": "3Ro3uexVD7p4AVpvRJ4wurc1ppWFfgP2fz7Ywfa46tBuR2AvNAab2UEqA9vbfdYaDUfnp49ArAUcRTGAomfuc46R",
  "key17": "25RpRuPBqPKWi3XDKsUykthxgkEBgW3fGpV6XPHxnZ8WaQ7LmXc3kMwYdh5ATZR5tv7wAxZ3mgK5dZryH3anzik4",
  "key18": "4NhHLTbLbjtBcQjmUyBTn4Qj1xMhqdGxj4Hw2FuJj9fRkt7y36rUzs38etULbRrBLjtx1ue3Vy2eLW17Ahx8BFsR",
  "key19": "5hvxJvPuHem9SJsoWmhQ8H883BbBrDNo1vBtbxEnL7pSF89QgsU7UWTKawZc7kRD9z7zCPV46C8gmTa6McADDsoz",
  "key20": "2aEWdgD5KuCy39vxtfWQYHsPAhF2RNfAXUR2QnWeNRguesphmr89B5KAQLVmffTKFmXhfyphLxvd1mT8VhDxtj5i",
  "key21": "5afPQNcNLYQWnosXQpt5YPRnnLmJ3qqAfsMpgX2rftZbsTrD1ougxxJYdnYtp55JPyREyQmKcSfzcFJRTKF3skc9",
  "key22": "2TTRFyHaSrZQX6HUUppbKPUXiqwxCwUNRuMvFGe4S8weqZQwb6vpcxstw2nPNZPHESDsbdQtfbKKX8equFUKEb1K",
  "key23": "3UjyWTGGFaqaVFLm6yX1D8eAyeaAMQtgPRo88mNfXtJCU5PVSXJVf9hmY36KXKUMtvWyMG95Y4yASSuwVqBmzkqk",
  "key24": "MFr5n4H5LDS4dSninnkJDLeQcawg9edrh7rWsiQ89dqHshyCWDXBHEpCNwAsEDpDFDh3hFK6NCh2VLAZWxTwCfM",
  "key25": "2rqqMNMxnJR3qqocPYw8xP8XY5c1QAbPqNZvs1zt68WLjBF8dqv7YohdM1Km4Wg5sggWvuVwVc8W5wf6MhGvyhMr",
  "key26": "3KZCSRAKh2Jnd3vXsxYMhZcTyTrduFCDyuYKdCKXZNLwks6CnmNCiMpuJa5FoxC8bHVb93DECc5gEQbSxUF38edQ",
  "key27": "56dQpot8P2c5nay3FgJYXjCXgGH82T75NBBNZvC75Cbg7LV4C9vXBm87rwnVJkzvQPRCrSENjLi8XkFueApUrkDJ",
  "key28": "5yi5f7W8eghFvGaXfSuGsN1uwQqVTAGS6V6ar5p4xGMBcq6LRR2uAx8HbMXZhT2ncNBwTSM7sh2F18p7cugBa8y3",
  "key29": "GUrLe5Ds8ACoWGF4e9RAsffLbk78MAd2d8ByBsf2MZxA173khqkFTaiL3v9Q67kTcTth83ZhcsPC3pMvCrdnTJn",
  "key30": "6cY4ExPx4VUDmy3qNbzBBrkkffeY88yiZGjKgN5KeHyEXxjrCu7aBYjVLTdgGgvX82zKkeFUU7V1YPryd6coXHX",
  "key31": "4fB8cPC7ju4uT7oup71F5KkqDsnNQPWdAfnT7kGXYttqyCvzfrtvVFzwmGLth4CZEGKUT7vFrpXBPnbTqzmBGhF3",
  "key32": "2X69Q1T4ekb7RDwBhP5RXRAtzKBNjPdtNxcS7Mf1rP8Krr7p8c3xEaPuBPm52PGZsJXAmQFxLAbDJ9T3YjCtHsc2",
  "key33": "4CA16Lz6BjuNB8MNS4wLhTGReL1Co8rL5rSqjo2rfgR3EyT7KU8hAdmuzWrosbX81UJYC5BNw4paoSXEQdn16X9X",
  "key34": "3iHZZ69K3CVgnnyqmNueK1ftRbU3bidu1XftVHgUQUke1PVCKkKd7NbzyQoU8LE1ojyGqsk5s8GRkLqMbf4fKqW9",
  "key35": "3MrMSheyG72k9EyLbGCi6ipzGyUAgtomdZEYqV4id1J3tpB9imeVKq7R4YRMoXtya8RDSzddj5aBHft8Zi7EZ4RV",
  "key36": "2x44fqybTTREs3Wnp5eXQQ3q77d9zn5PmHEtx8KTxPjwAt8gLgBT7yRZDnKduuqXdcAqjk43WWfh8jvZ9KpnhYuj",
  "key37": "4Lrijn6MTTjUw3jHRVcRpXsVPMuoeFJ2yYQPWWQFnLFsQeyjoEtyxZNsx3RHJJHi8qMrhqNUVgCUdaj4ZFqnyUK7",
  "key38": "35phV7Bkw38spHPpNahhHMcM5TCex26NBS1kMmxxt6hkSQCpyupvAs8aqB1r2wLsfUeAyaKFBq19MP6kV5TXcoH9",
  "key39": "2kW1AyvXbLhULCbfTXPRb6Cp2VivaSon967aXizp4ZTHgCWaY1X1etLzTARd2TPdmhTo6dGvLqzMFKGCDcgquS3p",
  "key40": "2RUY2VAXa3uTm2zhU4B5uazgpJqK9mRspgQEgQR6jvwawhH8zkuaWSv3SFnT5bSuVuZ6aL2tpvgG3P387eyTgfcH"
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
