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
    "3L4wBPkJWwLgoxWo2m6gFHFMKrxtnHj12DiCPXsbMnKTRVrMKyeG3iPYiQWm29gdJCEGGNKRnRbG2pajugE2voSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTC8EMCSjefBZFNeFSstp59JH1ZToDnnnbEbXB1AYRoStnX81xJBZtJGafTrkoSZaAntnE9Fe4jeSHsK9FEReWh",
  "key1": "25fB39CAoNAa9x2aSVqoKSn4wejdPWErtcx4FHJa6Cf6rERt4VN24YoRMcYKXgdrjEdDycHMTE6GUV65c5mjae9k",
  "key2": "4GULSEjtj6hpoyYtAYA6oEo5JnTxUmnnBEjihZxRtkzZ5Fn7JHmjK9L7gAEbEvb9DW9FK7pA8UZVawWxWk2UzSkm",
  "key3": "2mdqxaZEwZsvajeCvjpx2sCV3k1DqAqVT3TpcSZ4odSgdB1PuN5dCgTmDP9jQmi3eTUnwoy3yZ4DZpJvBDHibeQM",
  "key4": "2jrjBg3TfbNHJKNjKvgF88t9u2TqpP5DLZdbkkk9aQTwWnGiiwWFqRZdXm4vW85V68me5JkGF2oYekY5g1moM1Mt",
  "key5": "5jyivS2V1citbk39hx1x9HwZ8f8RbC8U4arXrzXSfDLtTWo4zHBT8ZfQx1psPQkYNX2fyyT1Sh21KmcdsQzY6dAY",
  "key6": "kEHzjypdCVmvjBcgNWhHTDL82Gag9rYChmtUGJCjnGR73Fg9uSsjgidEBcgU4GdPps4xwhMxfZKAkx6E43XF9PJ",
  "key7": "2r1iKJhmZkPvDatg44MZJJD1DWQkB9GQUxrPb4bdiYiAPVG89i4iz4k1z9eS5dMh2k5ZHrqqR687koktnz3cx9Rv",
  "key8": "24tKhtfsLXjZsQ6gtxfFTuYgvQh46PF5Mgp4QuuEYdvsqFHtmzEFRwJhmJmMy8wh2WEPmAbevysuiGBDWAsfhP8T",
  "key9": "2TyQ6oPNM3Lf3KoLTP5uknq3jb6kEgQpcT4xc746ZnVJrTtezkxkSKD69YAFr1iroKrfFjiABU6MBjYs4mcrQ8en",
  "key10": "45bJFj8YT7HgVngJqHUCKLiwmiCcQuHF1tLvp5CRs1BSRVqhHrWqLRFVuj6mdboeJF7pGmM1QvampaU13jnmhtNA",
  "key11": "xQojcuP75ENuBE8ikYU1HPvrUHTcKCc79FkSYgisAcacjpKCFFPh9mfup4kfFYtgG5fLbKiqfoksybwq5hbBJA5",
  "key12": "41JEN2CC2D5HFUmAZ9YmNz5E7bHda5bMzPfAApJ3HqAMi3jAPDs6dB3iAqHokzW3FMdZ5YXrbEhhscrTctTLM5w",
  "key13": "3iAeN5ZLaog5WZCk1ud2jdPdmzq34BZGteK7DxNwiT3HmSU4RRM7QUFmaSruVed3QiXeG8Ter9kEhnTvbZPU1hTy",
  "key14": "2bgy9bxux8gEmP5RXysd8zTPkRnJFjbP17yeHUHFUuJT2hXJ2UZx1gQ3tNsQYcaMPZS5oNeW73kweVwjtbjixSmq",
  "key15": "yT8PDbgV1sbesTK3U9xraQKSwCNNLd3DmGBw5GtW2koHh6S8SomgeodpHK7QdipHCkAKpuHmBZUn8J8mdNGjAtN",
  "key16": "5xAqRq7G3uH9F2Ud8sy9JtUTHMX2SXu5GKLa7FydvxBJ9cA1dC8rBjeW92oBaPV88MVkqfnwKqq5qAgdtmnGhseE",
  "key17": "4s3najzF6Y2Xc4iJCnzbPE4U2rL5YyQPhdLQSi9h74GosF9JKkFP6vhZSgbK8n3EstxiBNmD5eS6CWeVuRSsaxNG",
  "key18": "5Zgj3tqeU7g3dh7kZVEasKxdfbfTpzgNYDqto7ndx4totLee3bAzVq3fruEcczLjJPxe44UPaBwazixLiFKBjXxo",
  "key19": "dmXFJudPge3HtMApbHkxGorXhUUhFtPGgCFFYhphpZrhjwKjP2nmkxZnVqSRCMueYqiNLJHZLoY4YEQ4bFtoVL4",
  "key20": "3yWX8weGUDd3u4qQBqxwvLJhyxMXJaGRvuyBHTsvfxVQ2JWr7w1xsY3dcQ6CvJpGqcmuikGcSwFDNHBsBpirn6bt",
  "key21": "eqxRdWiRDhtBTVpoZX42S9h5DrqLqAakcwMmVNHAUXdFeamg7MRYD9zZkHuzbhEoG7dG5cmUnnLdmnqk9Qqdc3z",
  "key22": "2Z1QpzsRt1Mf1MnFGcnP6d4YCfhueaEfu4wYd8yBLHi9Y5JdSohNz1iPSejzeW4kfGTYDWiSePjxbMkktgzsUPXt",
  "key23": "39BfWav799jUEzodUWmDyPGaY1d7P6BhAzWwmBJS63rHS5ui7iSWMwkz1vPvVK9b3sM7urjKMMSRJZ7UBnhABNsJ",
  "key24": "Ja4UyzYoEE8Vxp53p99YfZH3nj9GsNHcXHpCcyDK4hoNFkqS4GYzW2Q6G72Sr1L2jSwq3r9TzmKfDUyeNb5p7zr",
  "key25": "5UktuPaapahuFtwsKzuF7pqg221zzbkeHurcW7TmUuL7T6kAT5MgwtzygSMEdBQvZQ46U48Pw7CursBorLU621E7",
  "key26": "5wc691xg8ZG6TprabJPDYUrp2DH7LWHRt1hvfLLS7xVx7kMVzZ37cvce63pHjPTMUgWaAPvDaBvtoGV6RJ8prx4",
  "key27": "2fScfj7c8A7ZzZaaEqnTC6PWGVffLyF9zo3gAKxcHbWQFYxXkKrRRxhi74T2UBouDau5zDnrYsAK9GArkmTUqbB8",
  "key28": "4QzGsq7GZquRrCXekrRzj89fnmtk8wPg7kHJAFoHn2FbvBWMDkynMbKVWREQyrV1EbM5PZR3AnxSAr7vnwB72x7r",
  "key29": "4sr3V5TGsb8rGf87L9V53Q7xKG92VPHQ3xTChRiaVZDipPvAttrSEGRLXzzhwYy7RtegHmRfH4XzrMpEDykVGys1",
  "key30": "24kr4ZnBissUVaGgCFoAGz4PfwcxSMHQY3ppg99L3A62ewdNLtcdgv9Hs5PFrhEce4k2MEEcGMX3b4bFVWydkFkS",
  "key31": "5sxmXsodxaxbpsAxbyVZh4KiLNuYsPoQStfPND9tv7BmyCaM33JGCMNHzWg6YeCSpuQT7wAdymbQ1sG7HE1Go73f",
  "key32": "5bMLSMHR9XEgGjtNG9pbcVxSbPjrXRX5o6kti9KNffi49GivtaAGpShaY8buv1tnXnd1f1fabPBJd433TN7uc8Jx",
  "key33": "nsjtxH1ksssAZVv9L42hHUuCC5sGBfaLZ4h6ivwqCq15GgQaeVL76ZXKptoSfZ7sRsu1uWHbGXGBBsb59wDBQ7i",
  "key34": "2sYsZmpTkE8EqYjjY5TSbeLwghetYnLb9WF7nhk89DKMpUnDZ51m6bS7gNzSWTEdX4qToN27X28JzHkftdi8SGnn",
  "key35": "QNQmJ6qXsPDC8mKvBsNM5ruH8SjSJketGPRn3fRpAxEeGi86wtUDfibHrcrSzMvtCmdjxQmUYs3ZvkTPDKVtJni",
  "key36": "5T1SwyLMvz6HVa5aNsLeQqLzFiJqb9ERSQHwAKmz4c5toAW5hepqBwok8YksuMGiFRKH4yiABDnqA4nWgxu9vxdd",
  "key37": "i2DtShrjAmu2NG9CYpH7qhPyeUb8ruoRZ13BUnohJZvaZyHsqdZQHwZ2vdLyVk9s51zQg8JvzXEKW6d3gv999kt",
  "key38": "5hNm2T48sNJKp9evwv3FAQ6zgZhSzQcauedHcQ5KMZWWF1c51ud83xZdx6iR9xwU24iSsewBEqXBNnjb6knSh7uP"
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
