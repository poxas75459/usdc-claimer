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
    "5CoJrAS6p4Ckz873gTETdX2PxUqwjf2bTwZWi2wrqzCb7xnvoaYmzko4rx1xAKeHZuP52a1eU9QkJSAcZ7KFygG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N5YvWpbAznsFZawZRVNEuuBWTVu63TkB4zqfNhfPQboQYVSLsdSAU8Se5RdMAh1q3VcsTNttwFvzhiinKGfVo4E",
  "key1": "qire3po1cJyEXmbME18qBxEMMLTDu5Es4BWfG1wFvHYhqgUGh5rU2ikFEFM7gPx1jAivrycRsBkBUgErjhxik9n",
  "key2": "4vXxiLjN3Zchb9Lxwh3S2dkD7EsfAZaAzuoEwPo6s3y2V9Yi5NRx8cEGg8haHEoLNYS7K9hxfT1PjXoJtkgASULG",
  "key3": "4RA5M3rzjuv1GtgH1Hs7LM7MVYwR4XqAujvbxcfdzRccLF9j9LpMpSoJ98Ea3D1uQQcat2Z9rhTfv1og3SwxtaKR",
  "key4": "1xsz4CxjCG3bc2b2vsFZj2X73ADsa45atsqF33vmrY4bZJXykBvDNvdxF9gMjiT3WWycmgz3b3Y7iY66aJPaBj6",
  "key5": "5ibjYMutUU6PR6b4Rwrq1rkBrUUsCHUGcGBonj7rgK3PfTx1xAAyZYDEU8ERN8YLEYVxSJ2Wu2E3EczaJFuV4hcf",
  "key6": "2Q7MGFtK7kpTiiZ3MN1vHqnv1WSB1JqtvWGThmoAAQ5XpFH8sHLwmSUFrnJ9CW8Wh9N6ypkUzq5NkZAoUu1qSQiv",
  "key7": "425Ma942jiJ5X7HidFKBsan7A5rWUCVjEXfHchpicSk7RNXCiMbXzai3gV5DMzgkNVHPdrHLraj3vUeU8vPPfHbd",
  "key8": "2u1RnhZtxzpq4RRmAZsNiWHbYnL7fUmv4zSm61R89UathTKhXVha9hUHdzTXcHTqMkrNCoxYtoYEjQKB55AkNQaX",
  "key9": "57CDYaURnKdTVnjfMiSsnkXtCV7iieSfR67GvuU5A8reJBKBPjz9dsCK6AWKhpYfQkp9pLEWSYo9ikJWWDA4EgAB",
  "key10": "4fyqocYXipzBoQe3wpFKQrx5YvBkxFvoKxHM4ZwYmvhD35nXK69GzhRZVCcFYWagUPydDkZebeyUU7Fgv1ce3U1a",
  "key11": "3CArRDHTdxSTinMkiL2puWFrMRnZeQci5Zg6ouyZTfbjR1v2vNeqfAMAGtp4KW3toafjdgWbtK7b3D39ybG7rkff",
  "key12": "o719muoDmPMZxahz9G8TremJJJuXeTxLg9RMueHrAtuuKt2cMXAYjTRNkpKP6BNMH4QkqtLFeEPypK7Mjabs5pY",
  "key13": "5RHCLTE2CfcBg3MyCebv1beeGs5s57vcTzBJ3TMxjqWv8q2XzzbKwNPLDNaHGQ6uf8EneBwWKpM7dSbV4ErfDmMa",
  "key14": "2SjCwKQ5xru1FEBXhChJb6o9MWwjMFEgwjsFjLoWk9A6TZMqWN5MLhFibaxLzkTyNqdfJKwEc2TBxQeyNiX9SKj6",
  "key15": "3y4TFnfucAggiJBvjgURJ1fuzeMf3ejR7TWZrkgCCMqn1zneG1qimhTRxUyr7FYDf2FnqvjVL7UDNrX9sXq4pQmZ",
  "key16": "29Q1ycfQ5CdSBdwqCwpZ5GxJjRTXdRRtjcDe9TgEZKDhnTyJHiW2Zr1XRWo1r1G7MWzrTHSoh6xWRhzKrWpBUP2N",
  "key17": "GwJrZfK4Dga72wCjof3vmKaf1w6pJ7QXMRUh71QQ4u72Yq8pe5AFobehFrp5j51dP9F38X8ZvTXoDZ6CeqTpYEU",
  "key18": "2Pzsgz9SinM7L2LM2Q3w5P5sGJTe8PY4GLCRnZnMFYa4dpK6Zw8t29Rri4Hz8ES3uGdHQ9K4vPuUjhqRtQSVnkx4",
  "key19": "3hhvbn1rq6kJ98pHe4WV2Bfcs4A91eEhnoMeyGh5BbJDgdyGNCnRbwrCNG73N6Jc8Bhb4Gar4r2PvZG6B9LE3W5w",
  "key20": "3DBWUSz5cy55gNrTeWWAkyoKjHD5xG4ncs39ujVtGDrSyW8xmfcSEr9JJVDL3iSbUTTWS9yEpsApczpEP1TwSFr2",
  "key21": "3Smwbhh2bYpzU25WEtUt65ryMXfPwHhtHAWDpBdbFSSpikd8DVZFNGgvA7idiitZX4QcMheMysikNmqajSykuAJ2",
  "key22": "66BKQmpZr8N5gi1aAgPHdpUnh2rU24Zqq5v8E1DCoQATaoRxJWeW9pB6V2RWHThyy1fTV6zgHJN4EynZPFEGdYZF",
  "key23": "TxqnSP1hb4eAz7UgmwQmR2dM7TBB9MwaULndJvdunDMA7ojTe8k7qJAmcPKpDdGrrK8KD13FraDXAbAKiqECjfR",
  "key24": "wVL2swappud5jtUiRyH4476xP7uJRGjJMaPbrMphRkAF22T65c2aJUuHoSGJrK8XPBmaLXdkgqdDwraEYxDUARW",
  "key25": "5hectAgAYDDLLKd1Q1f3hBSrdZoAjB58LaAeN5WWEuXGZ1cG1gfebxJ3KaR3d2vax1M9GTcEs2DWP8FUkK6BGunT",
  "key26": "5HyXADJDMfBikKGegVZx1KtoQKdNYGhzWNhNnnfwkmTkBRraEEmKh8bCuh8g9eeQauZrmTZkudqxwgHM8sv7GpRk",
  "key27": "2oXaHEXLWotPHzzgJ9fMQ17Rrua1mT1BYmFpnCfukNZkjWtfT6xwaaW1czDCBkdPCtL5EfzbYdWWUpzEhFdMVnkc",
  "key28": "t2p95ZWwSrH4gSSAb5mekJsynCBUjwtT3XQXm2hCjcmqnGCv6r4Ym1pLrg3wmYT4pyejrTAjdxWsR5C54WJN1in",
  "key29": "5Ce5dbp9Mmvo1DeMPS9rWTJWLKGHbTMpZ7t3ubS6ttQDrfDf51cERFqhSs8XHb3t5jCdH51jjUc9sMsVpEDDjynh",
  "key30": "48FruZaLj6CjzUQRmJNhjfUgW6F78FK9uvGisjJ6mqmqrcyn4WHDBFAR6sSDxWGFLMtTigS9zLuWFGQTVPpXka7e",
  "key31": "61bWt4YXbhH1QarTFmHQ9bTkePThnpvq248MX75zPHhtTiQBjeNDt8h2svzU58Zj3rwttrKjdH9Nniq4h7odYihW",
  "key32": "67gA766Nnk5cBsk7XL9uTLZNzRYjPa9B3TG3UxLDZX7NWBPUJKzfhbuK7Nub11sEDBsy4pFpS9eShrGcK9LCQ2kH",
  "key33": "X2odVRw7ndUzZnvfkjZqTAUT2V17kgqh5xvRjkPWKC9jMdGxZqeVLK8AAuAF526Hy6bq4DvypuFTgKE2o1iAJ4d",
  "key34": "4pYx8QuJrfD3kFvpF3Vcy126XAkPfknQ1h9cGnjBBiMv94RcZxyQZGW1t55BcmniFs22LaFjVXr26LcdcqPx31sh",
  "key35": "2rkK6GJAsfAiVc6AjCHkT2zybU3FmVDqUh8kcchViwRfUk9oDqro8Z6uWpHj86jUvuwegtJfng4jYUygoiihVj8D",
  "key36": "4M4FL1GN4QKmdjXzh1MUMBn8zttyKycUYrwWoMaC4BgZSg9mWryEBr2hiHYXX9PMkUyPqFCDA2S4Mx8enR8sqnVL",
  "key37": "4gYDdA2Z4vfyno75nPu33xzYZMFxBdy1hSLKeNRP7Unyd34gQJWcKPTCuqRDYx4eohmfUgxhq7gtoF2fnWZ6FTk8",
  "key38": "JU6wqH9BB8HEcphXy8oa13We5f4iUSvVVxBbS7Equ6QXu7YaHYeco8e4XztPMK1H2nN85cfHBc6baAiDgo16X5w",
  "key39": "4ESqjw25fHwq9CRRGrsNmKpMCVdCzu2RgBbgpNecwQAkMcbh3n1m5cMzEbWYpctmJrbUpuTDEG1rwzohgGtC9dPZ"
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
