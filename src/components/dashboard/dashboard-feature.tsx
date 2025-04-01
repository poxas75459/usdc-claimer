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
    "2jXQhwJDFL63vHqtP9JPJUFSYgjqXBm131yhXsZ4fos1wSmGvZCqdG4uU1TyvDG3qDo3Jf9wgjtNCAe1XvnaH9k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kV94vVTgYZesyCGhVhP5Sd5eH3hCBn5wHPnRuWa7ukJc3qeA8NcgwedfgSs5K1aG4nmeHfPGnuSSxkGXH7z6Ro4",
  "key1": "uzXMcYQUehsdMvuzozsduK9DT2NXDPWJh8yEjjVbU5UFv5Kbwv7Xxp7ArZG32aiVDM68UDY6F7UEQJpw7NmTpdT",
  "key2": "2isNWvecnHttCEkcPDgcWzX3n8itmMRjQ1ASnmQQcPKfpwCN7bTXqmdpTtooZCrJwZiwCYanviBvQkGA4kGFpwpi",
  "key3": "5qHPrFMeXs5HEnoS2NgF3Vs5NGTazbbUwiqPjveMVoAmT6WS68THhGzZ9B6qmVj3oXZWkvRggQT4G5hF3PPq4BZ8",
  "key4": "5i228zUryk7nnFjMN6tWzeNaqdWakZFq6NuSa2xFVJiidubwJ9oYHhbv1teqDXxsEQxAoLJ4rf4MXuJyUiTWVow4",
  "key5": "3SQjWogLS4RZWr9ZoWEyUKAAGWpgenRvoLtkVW9AraSop8NP8HhXcQHuHzz3zisDJFR1sbdpT4GFM2zgyfNHbxG7",
  "key6": "2aTpP1yhtAjgfkmG6CW9kvNVR4quRfnVw9QthAEGcfu2112pDzhirBaDLytMgSMMAjgf8onCtib9rTC978MAGFJr",
  "key7": "2RLBZxWB8qezdrJ9X6ANXSeiPZgC3Y8GJi5fVtoqWMkwAo5fuMvgkACuifQcitDP8BaVtrVp59PyjVfYjkkzP5MK",
  "key8": "2YLX8Bwkx2YK6s9KZ6stfTjFvUDPZ36Zwy9UNhrggttjstN5HQvCb6haYCm3qpWFkvKEyuuVQkTYaXmSDJAVFcSx",
  "key9": "NmaHhjRgbqzRBMC9rtYPRSHMxxykiUTqKhQWk9fL8XZSsvHaakAPjhGwgXHT8pya2VeDsuCK3AC1tUdXkfQYpUp",
  "key10": "2T4b18VtzhoE12sSrVxy9VAUrwZY63YnJNmBbEAPQF7Xn5jogLXLGhS942Skmy7CDeDt33WwZ754Eia4Atib5Q49",
  "key11": "3nzKnhxFxkLvmSUSq5w2y77GYJWXY8HZ9iET5e4DRvZdRGn5YEg8dvko6JMMwxQ5aLRJLCfkaNEz8NKjYtR1NDY2",
  "key12": "EpRpBfzY6LvyWekm2o8d6bhVkyQ2pRTkPL7SxHNuJiGomazt3X1Niw7i3zmxvYjShMsBGsEZZcGVMwsgfQJyNUN",
  "key13": "2e5tRakg4yivrWMi32G8ToXGWeydVCmuGmRHoj3mAWNfo92XKYm5CTnXGbBobqk2yPrcUP7AH4JWhexEWWhmLFz4",
  "key14": "E2hpZTneNbss1ChKeXQS74hwyTCSVcdCrPoaCQHB4t67MrWFqWdmg64pCBMCje8Uck4MA8WihnKVtcxzQjvEJPu",
  "key15": "4mcE88cac1eB3M4YaCnYqdQhr2vTvD5CBessHNWiYmFTwdB5x1WmW6UwwTifrB31B8qJy4QeNLDQTYrDdxanQYyf",
  "key16": "4EUf3siQX5qU2XB6joNLyi7TtPbmtxiEzfsSWZXxsjRP1EZSb2oYsx3RYY8UNz8HL97GhptURNmekVBNnc4pdRXf",
  "key17": "3GBEAdnZCsVwD9R94Jav1aGsGE3FM9BwuqggC6Se7iEGFJsRnGWyP9bvfZG99PJxtBsR8DaBwXtxTj4DBmayvtxB",
  "key18": "QJuYkaEHsGcv1cx2jjZkfe6ssHUet3HvEee7MvdwKii2uixuTo8KXesU1UTowRekq131mhAeAT3zMjxSKkqEuc7",
  "key19": "3bZTSCmW6BvAtjcGJhsRstoaK3vhC6xyK4mkJ6s2nC6pnCXhQCEvzZctLoSTg8dshVjBHHwSEgRQzopkddSWtid4",
  "key20": "3Dj6yDxwUHMaZWoset8gpg3EVZKjjdopWPs6ac3os6cwq4H6myewik3Kmpk6GwXWmhSpQi5G6Su7nM8ibB7RE3gs",
  "key21": "3Ugpf7aAErmobvhYwobgr7CpEywpb22qWoCcjcZBMhwbRXgzSDuuuZSxnJN3GhNVoHyMwNm3zQebMn9dd8CTaVnU",
  "key22": "3gbAdd5ZF6pL2bTAbn1Ukcb3qhqTEkzaC1HfsGkJSapnrVC4KnJw7JjcBERYpuREyZgepfhZ5FXzRe8DpamdsMWa",
  "key23": "VyHXxveJ54e8y5yuzyJ8bFn8ETrU5NtsASDAqmjgkNBNRyoiGYfswgMRP92sX1YVhFp9jtYjTE7fuUG2ZUFVAUj",
  "key24": "24L9Sn2HJppHWTLsPbsidqwXu7UK4zfXx3r6vVAaGGMGGQ2uRWQjAtznz4BnjaFQNPUJnigyEx3cKs9eFfdWM25v",
  "key25": "4WpArgpBaoTcDk459RhqKw3q3aBooYJF37KmDTgmhX8Tzo23Z3ApTVdT86HTYiPpkKxNgHmNRTEwAw7q41GToLdq",
  "key26": "xz95SmttjiEskEGeWkXq7gwLGrkYsinWPD3FR6YYTuZrqZXM9zbB9hqdGKWEwqsCvvSodkNgCwNmGqSQzRCPo2h",
  "key27": "3SzJbQaqX6MJvy6z8FHieVyP7M4ryyKHFtcVTpwnrx2t7UFFmw4QwvHUsBanibGXxon8BepW2UdSYySAEbmx2J5W",
  "key28": "5HM1RAihmNN1R9njVXpxXEaJQi6u8reGzrkPuvJgGEYYy8mDGsW9R77kQFYJciCpkzwHwWKVmJyoi19vqFS653Lf",
  "key29": "4XhiaYRFXGs9ZK88DfDDnkFPkXFw21eJkZ6ypobHaG3XNuaNu3q76KRndGukDob2o7ww9y3Xh3SKxuS3WNSmDkNn",
  "key30": "67EkTWttp5yi6EFshjHo1sPLTDMb7zrRYp63uvQYhxczaeV9EwvghMS5C8qo17criGxNJdjkynDCACF29aduP18z",
  "key31": "3zPPLaTHemUuCHuzam9GLByT8BdHeRxMyVCoXDvXqZ9WZyiyDG7vtQbN6sYrTdMZmYT18pQdHoUGcS36tjWUkWxz",
  "key32": "sSdrPBXdWFMAt9augn6bYLc2DFLKVLrq6TJMWKezazvHgqBUdPrfkHVmEPE9WqEMVo8mQv196TSMadKAcMrE7i6",
  "key33": "5ZQkHC9sCPZyxw5Je7NjprSV8nCZQmaScabjn98wErwQgEJRm4HmqCPtv9dZFGN77PER28caXNwGX1B2i7tLWqUQ",
  "key34": "5ftuj333vb3HSj2aGiiGoDUDYj3CPcq1P8qVLejeHzqnPfMJ8JowKLnzcFCLhsaPzRVqjBKY7foAjXhS7U9kQgqA",
  "key35": "5QuihjB9MGHtLpUvgyufzSBRoUzFwxZiaVzLEHMcHDC2JyKy4a8W7dDmw4jRiHhvaQQzU8dqeSWNqbfyiyz4d8sg",
  "key36": "2zhKCNx2vLzAqGFY1KyZ8vDAotaJfiPHGFm2jqj9SAe5XBrXBMvRoJida29cAA1y9WndaM9AxdTbPEwaEt9Vhm2R",
  "key37": "UJ4c8mC3MTZgGpLBssL74Yt7oaGFXt643zTin8SEuJaA8uTUiVtXBsopnWsg9T5EFrrxLjtexdhFF3jxY7nk1v3",
  "key38": "Z4Na2JgVkEhbMFXnQ3niZM14mPCp9Zib1kYZomWCkmC6gSkFErLQD5Kd16SbtiX4H7BXgBgyrtmH4xQXYx4Zx45",
  "key39": "2mzKGGoXGSYQEffQA4HuHtEVwg3Gnxw45CRkHdS7k2KHT1jDtbagRvfg32k7YZesQYUWAbUsAzdEU15mhK47RaFt",
  "key40": "3ihkeuo6eWb3iHRNi536dquwZH24ZiqLmTpziqdXXLXoonp8RTuTh3FoKgEj3dVjCLSMw947J7Nzu326mkEFRH9Y",
  "key41": "4VfoA3pidyxtLkgBYwQ5DhoQyjtAJtLt1HeXb5QEd6UowCdShZrQsW2xPu1TGyxthNeKXMpBJUqaUHfqE7G3uVc2",
  "key42": "yyaQe57ABFZrzkTo4xoprXFH1HaoqXEZ5e6fNdfo9MFGs9tgh5WdPbM3bMpXcfK8ife7W1ZMvhiW2aoHjA2KNQa",
  "key43": "4mp7JCf8oFt5vUrXgX4pPoGFCyReo9xLMExRAeyDxaw3HkWzBQ7aMJr1NUQQBvnYyJz5z2qHiUjaNQALmRpW8D4G",
  "key44": "xjxq1oH8sparKqo2GXubuYYRAswFvJ8Svz353HeiFEDWPyh6uxUiXEZ8Jg6NjYibopYPbSnWkrYitxu8UZxc883",
  "key45": "2hZmrrpXTkr1QSir8TM7LRjwf8Hnkss29UV5FTWkymM3TyJdbNWtRkKQotce5P9d7rh8UF2JX67ZbQiaYDHh1s7w",
  "key46": "2nSLzSf33ahdh5RPwRGVXRQACYAjox9rZgwFuhUKf6Moqxtz7gHkyMKmdveccx6ahmR711Atzj7TrQnGkkRRcnAN"
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
