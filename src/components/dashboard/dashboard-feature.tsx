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
    "3Tw4zuPGYj4Ub6E9GbVwsTZiheJ1vVbm3M5CXTVNa1yhQ8zgYsMXHFSwrvZA8VhK8QixYKhkcqg4XYZJVSCfboV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "witqLCb6ofHTYVhnKLMJs4uB2MFYYyBChdvdPJ3yeSCdWFDBqBfQGZcydEiGN17awAyvCfeHWd3foMW255dZBpR",
  "key1": "2xi5QejfpHtsDRWJ1yRgpsGi16TPdd32K2PF3LLX1kjkBqX5SxdW35jfCeHouyc1Pm5b7sMWhDArYwf4Ktvt76RU",
  "key2": "3ine3cq61d2uzmEuD7utEhtVSAS7PvUFfJFVVh2YoitBYWJsws79BnJvGRtWn1CD1ZKJtYmYFQnWmNxYL66Gtf79",
  "key3": "4T4bLqCiLN867mYrC2HMLGSFXRcTCuDf4nxaf2UeduNuCd2G4Mh2Eay7Nz8TpJ8EB484xmm5zPrdLNByMKtQErSp",
  "key4": "4SCaitAJPwgy3vQrouTvTAkw2RQoTUJh6oafks9qEsz2FG4oYqoeSDSWHhwd1jU6RETU56z3wnJPad8v4myD6btE",
  "key5": "3o6NuNd2tCusYFCJBNvAAEd6VTmtL5MDCzJbaxUjfenrGG88HDcMRZJN7QQBLrSUtMPUxmFKQFAeRHPm7QQ6ydUZ",
  "key6": "c5VKGaYw3XpZq1STgKVbB9gD3J4Q9yaz2JxaiASNmxXHZ1yM1o7UHyKsx13fwkTWki2WJVfdt8ierjJpvzPuqwA",
  "key7": "2tgnJPYvy3cQUjBTJxxocDwCgN9HU8YMV39kf1EonvoyRsymaPZFmpnDM9Pv3MNCj6yM2U5AYKz5dgnB55FQgCz7",
  "key8": "4HFF14frJka6S4ZSf2YNmifQamMTb3d4VBEg6HPnHQMsiXZc9k4cANgpxjBF7zw4HnKp7G11hrVPpRkPvhWWDq3T",
  "key9": "228qegMzAoD2RA5L6zNorDiC4CSJhTzeNqqvtFXuZKCRPXfXCm3QK1vRXbCm1eVoHkoC9bmost7rX2FWniCTZpAM",
  "key10": "2oxgXb8R1XYT57HgpfHRqt8ZwTzPmgCnb5CQKU11MmuEwe6m7YyuEfuejqdxhQADN2tC6EfeMWJEGVitQQYTMf41",
  "key11": "28mmeFyc8kXTJrBFe3UwcLsNC3zUMG8FpdvDRToBGzJMm3H8WTzhBLC1MxZhWfJbGbYUcV5mYbWRSFG8QV2UjSPw",
  "key12": "35gJCw1cyauGz7MgK1n6FmPtWSVo6HhEfcrQsGttG12UrjV2y1Sty78m8pKC8dW6czv72qPukeUyUFHjnYn1yFHd",
  "key13": "5P8SDmNdybprcdzVn9oPsv6nWnAW2nmmAgkyzi6iqs43W8xE1txhpMdxYLzbJ2xQshcwFr45yrCPYQxs2XGSkWmU",
  "key14": "4qNyY3QRTubQXzFdWTRGA82ugRTrFbbESkCC3GemGbkH8RTqUEPiiaDUNQrEqyKUgzr6CmfXgPtP9UEWyWu5815V",
  "key15": "4M4BbpboRkQwSjkzs8REh98B2YRP9jBKM7PawgSqNgzPRgXZKQHELfdQDK3oFqRiHd8sJ1xKBaLJrVQXwgsjqyu7",
  "key16": "2Gj7wAW3rpfGwHC5LpNgqEKJXeaXr9xYRDjPZEHhLThXqRUQ6mX28ikYBRPhGj1aB32ZeZdMRDDWRcntepQb6qUi",
  "key17": "2P6eLAqGK6zT2YtxdGymrEcsLDo7EaTGDkj7kJsph97tokqbYSwuz4Nf9TYhL1heXx9KpQ1Xr9UpbWNXMkXEH2mg",
  "key18": "4JGStHJCYfUdyuQ9wLiS7Fe5SYuW48ugTmVshULWP5Xq6oLECVrDrbwR5oNKB2riY9sLuxbRxGRJyAK5UMYu1UoM",
  "key19": "4XbQak5bLnj5bdKiEe6BqGx3CjCjnq4iuj2jjyBCbmD37QE9WvCEudnU9oX36hij8fSDj7t9YUDQdfsvQCK5dhZK",
  "key20": "3C4NkEwVbJvZurv5WaTrsJFSb8TdxN27vTWj4hZZrmHTLG5zzsUBuZw45Ja8L1UkN2zcUbhoqGmzvYd2Liwo8KKV",
  "key21": "PoqZGUDHwL5h9JpExnyijsUXj44o87fNbdXNr4GHGPoPzaNpXngV9TddPaM9y8VzTSNeFSnVBC28GAHmCEePSav",
  "key22": "h7fJygvpKnVAdbyhyEYepfotGquXWsnb5fiyDCdgX32tA43wuCjhZRyFCBC8pvRnVFDTBSSPNaGM1FK9iVx3Kjn",
  "key23": "3YsEX2V26cSaPd2xmU36v4ZFj6amZQCS4a5oax2Le4UbAsHwqNmMsyQX27NRo39StBmtuvrf3daEK7DZquD1Q1hC",
  "key24": "3Bvjio3Eibdq6PeC4zqFMdSw2auMfpJRhRwwUe4zKyxr8Hjxdmp5WcJyBJWL8ntWYdPShYgz8rbSKL6dCwP9z9M2",
  "key25": "2UkvQvMFk3iTt4HXLYtufgRcdBtvvsxoFQJoLJdP1cPTwp1QTk3JUZsoASRU7EcbETasn5aDc1eQxUdiuxzEk6NF",
  "key26": "5xgq5hy4QSbRhY4mSBQJTeNCiU73etVGcb5hMhHaMBZjBxDr3k2d86dFamFUU5z6X2VzAKV2sTzdzSSHrVjLYu54",
  "key27": "4KNPYMiVXfJZh6x5tvm1de3VmNf6hSjNmKYoU1n1bjjF3mmH5cam7sQEpRrquwbvyhiGinqhp48NrSc2WA7cNmoQ",
  "key28": "5stb7KfAmhVtkmKYjQGLksH7JPcfMTFstQEGEuELzFwbYueJYA2R8ugRL3PE4hVTVypusYWUcE5FHej78pSxwEL9",
  "key29": "3sGoRHEbJ2QV89VxaVn4n8ZBtnnNRcP8seySghA7uNBidTSjqKMaxGuGcuFJcGBcVxv4Z6DkDwKFyphSSgKzhMLN",
  "key30": "26DMsxSnFmWt9oEbtss5JQRC2ctp5ixJ92KjPsKCu2AhbUENJB5rihr4QcubCUc5f4gSCE7hH9u89zkofpEZ7bSa",
  "key31": "2EpfTCjVSDJLxWgnNZ1dpiFp3MasbJvbGw6nrYgtbTbjLbmzBrCUinmssoh3fst6ZWysZy1TLXPCbWKvhuLuerDS",
  "key32": "tXSsa6PzDZ2tRS93AWfDpciGytiTXbs15kYcVPeNPYDXu74yGtBBssKgxtmsV2UcCBqmLVU8nRUzv9EpQMEyDTF",
  "key33": "6AaqqmdyaaroR5Kccng1LbaoRCHNMEPBQrXifqBQJ3LAgAkegyXjfkQrNBKWr8QsBVkDMhProwhHzoowVrUGbAC",
  "key34": "2yn1ZCZ7RWc6YVyGJRYxNfMDSbRGZ1k9Vp2Kg5BhF2ASonPJxirSBjxAdnU9AKYTY9AJqZhLtzQ13weozQdSNman",
  "key35": "Q3zfXgqUMvwrnc9kyS7TbVmdnL9mnsPuBVK4dhEZ9kmaBeDj9rQNjFapuEbeF6Q7PvAaJfBDDEKpQzWSvDbosEt",
  "key36": "kt9GLxMRCUvuaDKtFFJQGJ7CLxQdXeYaMP3ZJHbwKcRbXbCaLvQa8bazMC2YELXps7LqPM4UR9mNqbbvAxpdtMS",
  "key37": "4AL1PhLemCVxTK8AxEaSW4DEM7j2oPXJA41q4fji5kyTnyo6hz8P9kPa4vq7uT18eahY9S2gHPpSv5vPxmu4htHj",
  "key38": "Wn3bRCF4HU9e5L8AKks12d2fVDeuWo8f9gioEMbdzSt41Lxob2cpxNXay5jmMKWpcRX6ZEeyk9RXZU7MQyeyTtR",
  "key39": "vEMHFsshupqBSACqWy7MAN38WTUvSdQFAPVufZLPD3arqGAnpJKdrtex5SzaX39Kt8xDD5WgsfqcS44k6PQVVFC",
  "key40": "38gSWY8ZY3LspfCucQmbsmhfhdRrmxX7Ki58xLwyj4sRRefMq5An94xWoaZMW2CCYiM8ciT9xJdiyH427fEesrid",
  "key41": "23dxd3dJoTrLSTC4wYCX31dBq4AhFKAxNDu8uARDge3NToRXhEgxU1eG4NfZvGDrnWqiLebyPxMcekJrzywxwEUB",
  "key42": "2V87BAQEFJopQh6KaSK9VqxBVaJxw3YQutYJc6dJjdZzZTLaFnRapAf6s7aXU4sD4fuBauYpQic2QrLEfK6j3dPe",
  "key43": "bdRCEJ3DMSfdjhT7Eit6n4MpMSwVjofzhNXGW7xHKmrQp3SAsM1b74kpekrkUpHn2waxVMXPiaCVs1A26MgipYp",
  "key44": "3JT8NfVQufLFgRjRQ9NdgPxdrpdWue7uaqmBCsS8M2D4WowjdePKZtgWx9nYqjGpPg1pKC6yVM7gZMVgXhxvf6yb",
  "key45": "4AF1XYmBF3wnAMr36PdjJaypLdu1massfg1pukbBTsmVPvu3LLzTBNv18ovi5zgn2AT3bCaw3dgszHev8qRgvcDo",
  "key46": "42YTMoPYowra6RhhL1cMwxmjter5yoGPdJz1dpXWPmhj4r9gaAbS7Yhtw9EqL9cX5wFt3qtNPzwvZhMijqtwBY75",
  "key47": "4Xmozmhp8sioQFa5EGBMZjkVKm34Ujyz2ZFjMtSjUHqtP9J4qFWMQSEnXz5amCwxm6DPpzvezAxJCnTECXXmu1D5",
  "key48": "DFK6nn7H9FFVW2ZBxroUmK43ReBF4YeFUxCo7yGWDm8saPtYZKCqDXRUcsXYABR6wvk47mBQ1UavcDEwyDKhw3m",
  "key49": "3pNmxFnNTY7Zf5pgtmsLngUEkGYtygFnTBz3TRWLHWYt27KAQi8umuPU5H2pUSrCJ3z7MaJQUsjDMExbKVAmxzBP"
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
