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
    "2BbN6bzav7NVFFWgXnjDD9SEHW4hMUNnQ7Vi4W8HdaxkHiHsjr5j9jFwWP9DdcX5Szb4yzEnqHYtWJFtdhzsMPZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9LWQ75QTsZitJh6bNBGMtw9M3Z4Rz7rGDoGfSAs8PgNpbvFwgtqgnkkac9fHFShwTTob7vNoaB91sftZS1LCWj",
  "key1": "4bMfTEoYBhJ4r55L9iEcCU7nCYtDnLTrVQXrduHtoL2t84ExJCKRSqfNZw5qnukt7PyxM6BeKBfb3N5jfRu8Cf5S",
  "key2": "Tke1W55D4qRxNuLDiirUR5zS8STeDnVjz3PvQhDBJUey1Bsg2Nv3EVMUp7ZUiHj1vdcBBW3bQdxhzwUMRLigUEW",
  "key3": "MATw4bTBQBpCAvcFz6xBqcBbWSUs5ohRZNfnpZdqQPWfPNxASQbMuTjbynSsTBZQE8dsJsgTna6g6YkytUqbFW4",
  "key4": "3ku6pESCqjKLP4jVjzGLpRZeKJhpf7X4RjwMGEWEHXFDdpL8B55A3gFNngBre4aahPS7CW27HWmdjaHw7JNWayAR",
  "key5": "3HnCanJgjv4v8ziaser5t2xovZUdz6n8CCg43UDibRKBAJGSYxx8wRfoXCQjXLHLmPLuzwwwgz7bz4CFM6ao22tC",
  "key6": "4yyUoaY7xtA2Ay6BXtrppR5DjKjZjEKSBuzDhrrkAN5WHkYyQ5bLhd9Bm596WnhPjjrppY3YLm3M379hXSdGkhsi",
  "key7": "3jzf2hTikDcQgDCV9dpEGRi75A62DCPy6ewesb3qJ2NeM49nY8pF6VCUKVydNNQhKiv7ZZbdeZvXK5EhwygmEqJE",
  "key8": "AEcv4mkvAeLrta4PW5C63HxEEvRg9roYcp48GSppTYXVyUwbSkNHpxU1TCWQRhX8guncXW1ZL1XL1MYonHybN4N",
  "key9": "5nwH5U7RgWa38rW1FdGnXN7EbpM91esTqmtYz359RH9TSXYMJx7nJHKYHN1AGRXNe846g7G59Da15kzctkUnsnNX",
  "key10": "5bq1fntqXYzncVNAoS8X6JecuYupmaXYY9n7oVxpt663AMyZ4ip11thsJfJDiJrBBN6Hv6ywqATZbqopsj2QHhhA",
  "key11": "NnNnYasgi7cHzhMHd3umFJP4xoEuPnxgeQkcer3mmFretcPEw6HarcgVMkc5iCBzvrs8jRzVryAd6Di4enZaFQZ",
  "key12": "vz1HrCaZ28hCPygkxeNiJqFvs9RSucrQ3zfBKPr1KrpbFRC6eMHEVw2CBhGX3wEL59mJLDo9yhgKTFrZ4rzyuro",
  "key13": "2YFiQypm3Xq1uipng1wDFy2mMQxwqB39Takwt93Jx5CbVJug9fyYxwTkL9BbZn2r2nq8LZQywkesU75q7mR4Phgj",
  "key14": "4ycssJKtdBkvc3ULQAbQJk7enmaxsu6VYqgovTgcVJmzdC21jBLMBP9xwsv5hy9cXMWgSWNgHAD4viyfrBTHJjFD",
  "key15": "5gCDrNWC2TbeASKJXR4m7EGs8T2CPmvUdsCi199goydmHoQM6RX9BRgR9Lj6RHoHvZZN2p3q1fsnyXbYGyFvLBmN",
  "key16": "37B9LQ67X749TqQCu6ZPDtBTUpaGgG2j5CoDSL7DdpNp8XdtdRRrW1Y8TnwZ6LoNTBSTSjT2bZm1wV2xbCsUk5m9",
  "key17": "2RYuV1NCftJ51M58CijN3wBqv6Egro4Tv677c7abv1dPUG4eDqKPvyJhvHC1KAYjn2Zg9dCgnpPRE7R9X988fC2s",
  "key18": "5YtmXYMNxgwL5eivgePWEJ1dWeEiMfbVhqeoPs8ns8Soz4SzdAFRLfgg7EoJfYFz6vzdo6G1Wsr7VRHYJZcSSojS",
  "key19": "67GcuoTb2MP4funjWMyEkVew4Azqh1jq1xwBWRYQ3sJLrQXWQ3Eay4iPRQkzRtHuEYTTRAyq91MNjcsaBmaVznAM",
  "key20": "41toLAsVsUNSA9VTU5grnsEsAJGtt6RCq2d1k3Jgr4RKCecJWavmbLntzJKKnXdnxBVpa45VhGLbEJpMCNbmoD9w",
  "key21": "2Yk69YnHg6KPEbWM56s72ruULidEnow5c9MhJRe9uiwsBfRpUtPUD2qYMwMx9hf1siiA3oK9fmKSnBqcv4JutpVi",
  "key22": "2pChLAJxarHMGzpERcf6Bo2NQ31XeRU4atktctmZM3WT44KaouW7j17MNF32W2BRo1nw4YKVX22c4idKKSnTzbzz",
  "key23": "2WcdLMpdKSL57r87SA1fmzuyV3Qq3eFckDhzMghCyMuAP9sVGmjgMDwmEmun3r46kUNM6mZ1Eco5sqXxVfqq6rGq",
  "key24": "jEPyWuPeSeJPSt9zxXLFxX5Gt52A13Gb3GGBgnF5HtWkb72z6ZUrkYv1EqsAXCZatoZ5rFW7W5gyGiRsBFSy131",
  "key25": "2bZFY4318Yq71aTxbcVCE8nctWxoRgua2Z1Bp2YUt4A3mPYdgqPxivLVuqdmvhUBromTJveeLkyDFBQMBE5FeunK",
  "key26": "2WJhHXej6pxho8YWfAdNSBC5PG9Ff73Ua66sdbh7ZzNG4StJhbanz6M4nX3i4QJY2fnFcEejCMcLYvDGKnYBZzv1",
  "key27": "661cuGUX2EYpxkbSyR1nN6Qx6D2H1aoQtpU67ytKbomDDVHh2f3z1aMdDtFoKutcwd2M6XNdayvwBgJ6VfPJgU9o",
  "key28": "5jYFbbnRbqL9gjMDHXJfMwVarpgi1z7EZXSjLcvWNutew1apXEAzWRti8RLHPhwi7h3viXVbZHvy2RrUVnSTqLAF",
  "key29": "2ePtunVS439S8Ppbv8msx8ZPdoxsucnJoF4dpm1sJP2z5AS6JT5185PCbwmJPmWgze5zukVsac3VCCcUX89UT6kk",
  "key30": "5n8xmyLeimHnHQUd3SjPVqsTMzFXYa3oVQD8N97Ejqn5Y8nLSbfCaTxdS7ThhP5vt5bCAfsGCh2JFW1RyQbtxVow",
  "key31": "57fXka2nhdbVHrMoZnJwEi8iHDXiEVbjmqio3XpTECM5K45ywhaBJ8qVv3PHbUeMAh48dBQJY4hvc1SiLjyYLLSK",
  "key32": "8JiLJDJcsgeGAsPSWf9XJ2PFV8MF7X4VfWzG91ViYYZZ7tsgDJTTSNiYNm2KTJpEgEcrkjzKW9ccHGzPbaGsx3T",
  "key33": "3ii6w2eFwuCZ1uvyvYmcDY7q52g9ZmzWD1RxZqsd4QdSLLTP2Q1bc2jFxpMjnKcPKyvxJpSHspiF3eXLEhW5Dio2",
  "key34": "2Y7vhiRU9F85CyjdRwv9DMac7SYD66SgtSJVaDVymtnmS8pkG69yau5S2sgnQSoEnKiVALD9SjyjTh7KyJvwB268",
  "key35": "38EpFoEs18utfFUepXmMWd5LfRMv5w3E57ZUPD5RWjTWt4qU2Q6dnr8FgYWmRq2PGhqi3tVf3CBsydVy1yHeA6xp",
  "key36": "3nETFK6NGn3EhPREksAZSjEi7KfK6gfJhi5fUAQjBnmr8PqBiH9KemeEDLZrnKAye3ri1rNBNsfLYhDGaa6AEkTe",
  "key37": "4YiPbcqDC5WoUBVs8DzkA76SuuWGq1WVMfw6d3jG1vVZMPch7bqpJw5QrwZXRtHnkaLmvMMotsJaDqAMKNVHQ3Nn",
  "key38": "NwiXSCMd2DSsDySthCuvTgRsRcpmMEgdV868tFRPn8SwkMx2gFWUm5AB6YTarVsArm6DsvcrytiXg85scURh26o",
  "key39": "3bhT7nhBNiKwgspmwUSnxrgcp3STqWDXaLUnRgUQ7QN5duLXhp622bzmHP6uoRovBhkDkCtssFUDkKuoFePjMy5x",
  "key40": "WDUNb29JjxTyRJzBBseE9KqfQSjkF3V53YCpk4Q4t8JM71cLHaKTQcFfV2yiCGJYC2CJdSykP9wsxqEU4pmSF2B",
  "key41": "524kaaxRbGycPcefnRAiYorb2v5LgmWNKsnzmyg7h3sbhPdoVLXuKaZG7dwDtiWGk61bvDwyZ3ZszMLra9xVwiLS",
  "key42": "tj7GJJzMmzD3MxjNMqNiCBMot7RxurN7rep7sKw4ViD4gWnx7dVzrR9Z78aFR7dvLhAW2Jx13pUrVTj7Fros96r"
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
