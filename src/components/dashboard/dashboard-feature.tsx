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
    "4RNkeEBhHPXWfLAvcABEVjMvBWHtypLcaFcXTaBnVnggjyntXwJHTTZhB7Ds1XHz7Jpmfw9Ca9Y4oKxvAFD4vg5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZuVcXHm6zVtnieqd5FdKepUaGfayKYmeHogCGWY5fWowo4i9epLmLJyXuFVhfJxD4V5TUZyFpRgpgExjzBzSs5x",
  "key1": "5cz9WXHZe5cPQkmv4f9GdEtLLgTDPczZQTZNZGRPPHGSMeYCvr7YqVVprp46DcimZu3FXuMJ2sbDDMQBjXLiv1Bx",
  "key2": "AyjEpWXfi4ivn8D65xL4dGmFYMNjC2qnktTmhGb5anrzk7xC6h7DTbu1JApx6PQ87mDfVweWYBid3aG7TsQqp1K",
  "key3": "djQCkZuskh5JBjj4US4r3gwqnxvXi6He3rUvHeVqLySjqf6FBK7TPQaGMSKynN2vNA1L4BsmFdaM58yZgHPzMta",
  "key4": "5nzbwit5vXqzsdVYxR7DF4ofMR686hnejsCG7CcXoG8Gj77ATsz6q6GMyj5b5mVyvKT9oHgRUNvdhHcuxws7BogP",
  "key5": "MpBGyHNGBPBbYoUWekDWgDbqyToRVSsrTj8AuPFAyiRsye9mBakmd2kGhZoNivvQ9791v49HU7NV8jv2rpzY52R",
  "key6": "h1cQtAs6TMLEzEoAYj27fwyCiHnCckL2wj5UY4SsdSeQLfoBZ431Z4huomSGrMzU8epR5YeFGmdkwTyR23XaZDv",
  "key7": "4KwfR8jsqeQRgei3xWgoU9U2Gw6YCzwXjwH2LZHuD2PY18E4qCPM8HmJP2S1skD2fDrtNZWtf5BywtQjTRxBrFPS",
  "key8": "535dNTQujVp1tQdNxRkTVhzNtU6ncCPcCCzGnBQa6TzEf1fYj3g9do64A2xQbsWTKcdJswMyiQPUoQSryBPUvWbt",
  "key9": "j31eXMWPYYGBAkTnoGPByLhLWw9iypRt1yzdbmXVcrfNrRzVdxtCJeAwv9yXApkUmCtD8ShESy8DTfZjSXiZjfc",
  "key10": "27Fb8r3CkzcAKapZV4VTxUNMredC1A1jFWCNv5ymNiGv7Z5mCwjUpVn3EVZvT49aYP59rQJG8QEudThemTRTUZ1x",
  "key11": "owxnq9eqU2EkKke6Vug7eNNfUato8F9iob4x1UUCXY8U4xVsm34pGeDMoc35QbJPy3C6aFsWaAQYUo6Lrtx2KsD",
  "key12": "5FwgqHbnupGdPsXkjDTfQLDPUUepZf9vfGL6LywCE3v5ZsrvzmUCYSaJ24Z2VJVcWNuCBM5qotmqZpPDLp68kKKj",
  "key13": "wy3mqh6yW2tYUWyoTxad1QyNxLAfE57LQuCXDk57uvWr3dAqVvf6y32kPu34po2ahULvt8YUUUXWTxRrxGs9WYi",
  "key14": "rKSKAVr668WYqyFids7Yos1JaB9z4Bp6odFB1Xxykomor1z52mihr9e4ff1tpL263D1Jodd9UQmL52dFxVuziqx",
  "key15": "37v4tShpjW6m24UMjDWo7rc3npmGg4kmbu63LeMsF6iZiNu7CcnL5Xm2n8cg5zXBwL5GyYYwPTTsZEUFo4F2wbXB",
  "key16": "LCfVF6xtRusvSKAEYNtnEJgaRt1zNGYgCPQzonEfuuzNxQgZBD5jf6rdPTTnwpSfdFFRippFwfMkUSgpERtbX4J",
  "key17": "25Qa66drxNASj5rHGD2jeEJRjde4zHCdosR6T3JCBZQ7DjQsc7mqNe3tUkFeAauGzcWertEa2PE4e3CamTqww5ur",
  "key18": "4knH3BS6Ufhz4p3yikViUcH1Tet7c1DvRH1gPReASGT2N6uKCczJzc8FftPuUQa9PYivRs7U1cNe9oFsXrHLxJC9",
  "key19": "4qknLsA4oSbeZHQUqGSbMZFTS94aXKBBWVk97sib1YZFERvLuWPnbPe1tnU1rS6unksPu4jazXmEmUXH6WnqvYSj",
  "key20": "3FVeLEM92ckiPboePk84LeqHekzUxtAex6yn6gFyhrHg21j4xS4cgigSnz1kqdEfTYsj3UWtFtaQ5QWNJtb7xbBE",
  "key21": "ubKN9gxkbYehAQGSYravg7qdk9c3EcmzPTChFxDhPi31VFtE6Xct8Ls1jfQtSQEQZ3W7HMjJLAZiXUT7TtudvQU",
  "key22": "3UgGdLMneBBQBbxvgyXTffAY8nJ9CBgioZL8stZWTkGpewYJnirgVtQdchVyjeT4ACSW6AwQ7dN2PM73hT8xVkf9",
  "key23": "hiDKJmKJNA1zHr57icyxq9PCVmmpNgV4S21cWrc5ArVddk2f9cwMM7qi8eSG64q9fn3NT9vm1CnCgkMmRZJYiNZ",
  "key24": "2RMc5JhxZq3eSkR3NiXTct9YgKX4tqUJxrFWrgZ6r6o88Y8bG4WR2pTNzTQF9N2YYfXxDKgTtbw6xt5hrQ3tynE9",
  "key25": "rYKqwgB8h1vj92nCgFxyD5yw6WgLReovCvSEos8SpQVBoQyadgLqLywDf5F8ZdLwFRshDFhL5mt4pbWPckcZCq3",
  "key26": "2zHw6UGPp2zbfBAAu8pEQom5AURwj12BS8ZuHAnSC71NcXMB1zAUMpKqUDNenyxBTMM2m3PkbMbrXy5oWwPqQrpx",
  "key27": "4k4w3YsKbtecwBgr5QYJGhqkCJzXWPLxkkyFTTBzjXfVb1UnnKHbY5VLu7Kw3GkEXkbAi8zrdfRFSLYoNkkhthxQ",
  "key28": "yioE81txa9sEQHtDjJ1uS1zrtDawaK49jtXbVwX4TZRL2ChwkCaj9W4vMMSxgFJiv86da5uhNT3Hpw3jQCMdtjP",
  "key29": "63PExWK55pUe69DTkbc14i17xGU78RrHySfx515ZYczvA7Py5i3m13xqomMB39Pxq9trVenGaqm2dXGw2qDGjgp9",
  "key30": "4bsKcepje1mSPoVxLbnYUrvrF324eBLhpGUk22vacA2zxkq9FC3F9oFKzaZXJ17pQuYBvbNkhdn8CrvdY6sQq9R5",
  "key31": "2uFJ5W51QoM69WUxEVPzVdjmT3bdhpiX2Roh5ZECdsCx1rfipycRQAouqUWVgSRoTYGvVDEkre2fSvotpfywbs4m",
  "key32": "2ptnB8YN5RedrWnZR3bnFqQw2F8kcRXMiW6XKG9A4U1pE4qRPoWGoQVGVRkiqDQSAkjytDa3AHSFHCeK3gX94zwT",
  "key33": "VPvRur5oj6xUkADLJen5Sc3EBHapx7x7ovxyTLESGj44qBNm2MqX5y8E9YQzXbU7eix9RXmpGPuqRjZZ31RTb3f",
  "key34": "62gUocJDCVAbnws9N7TMdjzNLGZ2EFyoB6fdmmwFf5DhzedGDeUtBsh2vBaEdAa8p6yxZSWBD3VUArWtVitdq2hb",
  "key35": "5p2WwnQW7hFyc34NUnU8UqRpbAaudRguwEcznmVT3ffXhYxDdjmHwFQKmauS4DCm3jmSxj3Yf9pUxpWKjfRJEdhH",
  "key36": "5FiyED7UCpCqRDSHcNY666LHqwUooWhaEVdE9vhRV291J8e2zNNdj1zdL2x9ivDzb4g5FGSb1zeBBaEzYVuV2G3i",
  "key37": "3JrVpRXagXJpk519aGcnAiWFAMBxLcARgFXLgs8w1esHXTgKx7ctT61cs26W1eAAcSh8NXvvK3kWkEfrKDUG1qfN",
  "key38": "62cN54fapMCcGCoSJQq5UqmMFC8zbgKm3KBxGvSGwWuGgNJJds2LndrAndhjFEhLnseTdcZNTCAygYdVEajzmnoZ",
  "key39": "64VbzZqsEaxXjX3NCiS2YuUJTnrYHhJp2w8fvj4bUEJS64tVjzNpdqEMf4Q1RV4ZLfxR8aFhqrcKwjMhoqBxHH1W",
  "key40": "ysx9jiEt6Z2ACq76WVQDEShYkpM5YWE8RimYTvahFkSUATruej3APE3qJhHugN4WYxtT7JLwKzDGuPy75fgGFVo",
  "key41": "eYneaZNmex2maFJJ9eTVqRaxMQH3MNMSqCpuUhrHtCctEcsmYhaRebU59wMtrqJvP8qdniz8q7oTm2FA6uR61cD",
  "key42": "5xqPcXQYamcityceWXLb5HiKfRrgywUCQ7AFpzY1oTpMBnzmpnQUwEuVD7Z7okrcfkKeAkcNbzHefToebQeQdnqb",
  "key43": "5cehMNMoozmBU3aFxWNUZ5LdKmrgYSNPkRRUmHD7ypv2xHSKhKo5HfczqzfJYDx3igH6fPCxiMi6MW7hMcUq7ZgR",
  "key44": "2wbykDhAT6PVkUnKMgMZHiC8RrRioKfMTTAruEqp8PF3fuRzkv75XJihMZrVdtj6orjMYcMrSMBsdJbxZq6FWRro",
  "key45": "4XnUNqq1g8pDoQj6xccdsasrquhJdCD6Kys2vWT5k4SH6YTf5ykP9Ewf3EchaWRk78dtDQRfhaM6Vh1rWN1tz2EY",
  "key46": "kpRox2cmMAqeEaUMbDt8H2zuNRtEjvwyLqdrfF89pVk3cn4aFixw7utpibf9fHnViUpmUsR8cGE1D9sQ8bxqhZi",
  "key47": "5a6maDj2RzyMyxjYnWNfMndJUsK5dXqCr79JvWAdiRTDBbErtmXWCJAMMuuKq3aqbMFnrsxpgaWRDnZeMxh5tdBq",
  "key48": "3MLYsrRKz2MPmeVfJQZwc9pNv29cixpE5TsFA1BNoYXKWcTvvh2Je6Y6csG8itnfisWe2faodSC8WYwAaHKR6ATf",
  "key49": "3E9hDkQ2SgSfNW4fYP8sBBQovf78DcK6gNGuioo64zJJGZYw7EoCC2QMycaEmF4S5QDPWc7BJ1sPUXqtPbMCJrxW"
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
