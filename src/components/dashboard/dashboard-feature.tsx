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
    "4LApSACYbBpqUfm1qeMxCwcErXtjPMUrq2KGWu8URznygnCxyonHrQSV5PxXAjpGWuaD2xeT8zyi3RGxCwJEd5Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4VvHDE8WsWpddxwzHwnxR2UoXsMj5EK8iwmH21hBSHmVTmkgow3h1zKVCa8wP6UrExP2C79epTKJ65YSZ29gHw",
  "key1": "xQaN2ogtajFSVemqyRuARLTLiKwpzBLx1LpscTsfBne5AmCq5myw1hG962z2K353dfwWGNniBVkV7Z2jJ39mCTz",
  "key2": "zNZSXeEgUsJS3iRR7NFqiqd9jL9YWiTkA74ayGY9aEttjJiTbW26Q5TUftYhgsvNvgNy9JRpeeEuQEFe26hGSdD",
  "key3": "De8QDrPk7VRUACdNGzefB69iuVFEweUoy6wmeHf27dDrAuPSBU9iYMBn6j1fhqiwVsoAsTe9YytiCQJM2E68xQt",
  "key4": "5ivREAvftFTrDoWu2pzFxhtJiwGdSnmxAhjcsyath9N8ec1Hebk6Q4VXvXMRUVSTy6FVJA2MVVvSYWTibDJt9XeN",
  "key5": "4ktP1XkEfTm7z3JxKGmerQwQq7h9vesPmEH78Y677wTbUiy2y5YAfy9SJBoccCuoXUEt5XxR8YJmrpqCm3PTqMYG",
  "key6": "22jrR6XcyBXcU37FLWVn9YJucf7ZvnQV57V4tBnuJ6o96r1u5nYps2S8uRe23mRV5HKrtczx7HDC1zw7og2wqJjx",
  "key7": "2BjhF9CUmR5CiEYozAFbHRmhpm98hTGHnijJ54aCpQNw4GFZwYTKHVeipgCeRphgrP9A6QGuwbhPww7EwsJUKB8y",
  "key8": "25JCdWk4dbrD3MNSuKPPX4PCMQJMWSXJQzhWK9QrYhgZMqrYDNUEnmvxxQqvkirX8SwLj7hBJ66ys1mVShWSTw5h",
  "key9": "92YUQQFZAD1Dhn8UkUw3ymVawYP3szRBV5vNdkap2jdTuZCt5tVGEjSBMUhp9SWPzJw4pTwXmgiXGrLk7FfBteE",
  "key10": "tSwmFhTSxr3Unw4HK9vq9mLQnABvqBM64oHE1G5L3UCwKre43b6V5EpwtRtcErhryjS7Avtrf6YmeTCdGPDTwof",
  "key11": "26dMLNwFiVvX1hUZULmHKSDiEtf4Qnw1a9UdFWDVvmJGVKwKhTcSRuNRAuXstCqnksX52qygSsagVnCAh1oEvoJF",
  "key12": "uSY89w6me13bBUSphRLhJLZG5rYBPLjqsjzrgh1ZxXameNg1gH5YZTKyvYzCZFyxBesHS8VfPbtp7eSpo9mf1Lo",
  "key13": "2YcE798xdDzrehTnnP6uUmqcyy6zUVzpQE3EDtrHi5qxfZsxzQA5MBSyP4cbxyXvN22SS84Qrzunohctj1iHQwAw",
  "key14": "45TmCjBS2YXpJyeTe4mQitw535EnFEy4MtpFHidruG98pDrW266ixEuAerGfnHvBAnT6zZEqy4ZJmpsegsFjSrsQ",
  "key15": "2Y9DrZwN2dwxuZ2mXEq3q8RVrssqBwaahPgfLwsJKZjUyDKY4MngGp82xCs48oJ96nnXDcgXLpyBJgsRWgfoB3wy",
  "key16": "2YnofbJVMCdKbLaivm6FmzRFFLhvZPM98pi7ZTipYjAGVB1JVcj1SPkbrevdFDTT7ZsM5gaVxU7ypLfZKY2Lri55",
  "key17": "Hey2PY3UhvxH533MhbN8aT2AfhKUE68ymbxUuo8Pof7nKRA9AaxT5FQ41uhecrNVqAtm174b31j6Hoe1FS7cHQr",
  "key18": "4Qxa5e3Doi6XGu6vjEvHMV2fnbDFroX77CbuhQUkR1jH2Macm2m17tDSkEoJdFGgcGocoKArPxkPvagTGgQcur4B",
  "key19": "527R1a9WTPTTECzGrirvJouFCabDvtnBZcPR5iBDaHMfV8WKzpP17T9GV5m8rAmJhE4iN9a7x8oJfqZZrdQdXvij",
  "key20": "5hKhGERHaVW3tyJN5JZ7BUF68moKZWGASoxHexNspE1HUkRrDdTs3W282sLUReZTmEQ5esphpvu2TUUms3pNP4ra",
  "key21": "2zwW1hCcQgJkokDombUhz9REbFyTqQMaV5PdehyLaNH7ASpzSBAVGutXwe9K76m6KcauaWwpyE8GmB7ogYdQ4j7X",
  "key22": "FWFEihMUJum7nnsaGFPVdjvRdpVrVHMvoHFPUJciJHqSq8eVorg89DJDQ5zmngutNGQwx1GEje5SpETEGcW7No7",
  "key23": "JQcmPZRcuZBtL97To4DRnoLepqHLQPkabuDahHrxsdD8AbDJCXtZhw6ssvsYJZJgSHGaLZvzQPkLpXbMh4RL2uj",
  "key24": "55JTp74L8N4DZPVuwcFMJDgo82aZxWDnVBQn3cibRuocXk7U6DY3yq2zci5s2gVPNhBRNrP5FR8VemQDdEaC9RX6",
  "key25": "5uHqX2zFgrGhDHNd6JQswRJ35FthKMmsZF8Cww9Mt62CGCDrY35y2oHgVvH2gydaFWEtRj5zDjyJ61QY4yQ6jwi6",
  "key26": "4nfLDwuUSL8QoEdJGcA8N6EjwRVsDae2XY2GMoeuEZ2vofFBLC4FoqCjUw3LNxQoSgkrkxvMxLVeMK32nxrocxGc",
  "key27": "4RkKfYA5nbtwhsCwZp324Kysad193dtWDHrx4jNwVjZwPMXreGHCeGJvMgpa1gRDNXb9MZhpnBGaSxWBrBvqQEJ2",
  "key28": "4rvMd7j8yRjwhUAKqFo1eTEYAXwQR5famQi17d3uE5gZ5D912sY7YS4m3GXT4FmefUcDGZ5pqgP2z3YPCrfpduni",
  "key29": "2X52KCbGqv5bqi8TCaU7WwuwsA6y2TXdMtBDB9cPwvVSjekDnryp17H9WnWJ219T5vyN2izJs4NcotVcNkVyeTif",
  "key30": "2tKnGj8jGxrQhupC1J5CMPGt1pWg88272T5c2wrsRAFdDr4RJvsceHpKcA47aDvAkngy4q2DFeMsP2km6M5rfLSx",
  "key31": "58m2EzNhKCGpwMCR13BL7Kn76oUMmVd42PZwWrRhvA9LeBfnNXwhvGPkz2oRPpecXgH5F7czuPTgstbbzhWiFx1D",
  "key32": "3jBqAVaRQkTaSX7qeyxP4CsNdYmSFNEjPNoKACU3XAFtf6ABftqifp5kDLtoCJuDWLaWa6nLrEQnBV8nMniZddPu",
  "key33": "5pHzD2CJxzeHwKaCU8Sh8xby8uN36YyGhhDNEBgCvTaEwqx3D8ivbugYzptQaogB3hVfKSkT8LnEZmKUY2j91b1L",
  "key34": "4E8Ns2Kxh3qsFf2we7Wgw4hgTw3Nw2AKBBtGyPqpjZHdPVqLLqoXPysCChnMqHWSqMPhiGauBJ5rQ3yDicKeo8Qu",
  "key35": "5Y9yMkpy5sju7eRbjwqGgMrJqQ8AzW8GyTGkx4VeTpmgGMBaMZsUj2xdCQ7xXrTe85HsM3Dv2aqVDMAJetAmoNJJ",
  "key36": "39cjGEuNKWMhN4q8yXTbLNQY8mo5PXFczPbPCXbp1qo9fJHhAvwyeufBGcQE2m5WipSF9pFaR6DgBiqjZ41RgGyv",
  "key37": "3p9SCvVK2zZuqxcVL8bF1yNyMLWVm1N15imV2gaxLFjSFZH5pdbBQLt5NTADDQg3qT3AkcyHnNFiY7VEeMAh38tE",
  "key38": "2xDUPAGdixjC1kohWHebViKf1EKc9o8P4f4QzAUDM6t6xoJYEPhkvjtfgEdMq2RNzJCzwfzKR24tv35XQEx6CvGi",
  "key39": "2FvE5PyiV4dVLUx7hLHoBEZYd7CpZ5P3eWNWqnFrxyQHjP4hxRpvJVgA3aKrjhxsJu5awMwakmrZzyk2EiDRK7pt",
  "key40": "39jU7j2scv7CfCUprsnscUdQKwEMBSmLMnqn6zuFrH9UZF9APjdzDExX8sohgjEaRsYHcLnMqwW5C9TQkQNSBbtn",
  "key41": "3xLxvTq2hGEeLvLz3UyZh34M2NNs7nAyBN7D1gL3a4FNTS7DdWXmGTBx5tmQVSnnUPvszgzn8UvNzKJTghkFSWxB",
  "key42": "DMyCWtWt7NTiiz8aLnS8rzdJrMJwmW9xdGwmgNXwVgTa123H96vJ1b5SCDjepGpUCqq2VTGJiZeaddUEYwuhfj4",
  "key43": "2KSGhWg5qLL4iwZ28WKMPQaNUvj3rKsCSh1hFS6LjqPdjzLME7bY4pP2oSx1DtAsfVHnMYBCWBTRaWcXmnoWUw6f",
  "key44": "vJSQkMVxmkgYq5VgCfNSujQX9LA8CHfsC5ZxjMsDRHuuFBsDjreJSueNWQozEF9UQJucULFpCLCEkoCiZuMgHA9",
  "key45": "4rDj8oDUe7spBrNq5HTV4WeTeh4zVfK3XxztzHpNHdnvQwugh2UqXNXCMyGxXaaTv3sug9jQvZtFu2T1Eyj3T5qG",
  "key46": "SojWxqwjLCsgQnXpZUtBwg5cDJe5qLgfhRfeAxh1ULupnCDXAKwDS3FHRhTr7pZDREE8gRY8unSPsRdEwvZumVo",
  "key47": "FsK6YvnYSkLP9bF85ARHaQ815xmkYyucrKaTUUy646H5fZRw4HM2z64JNV6yNegx1H95ZBXJ5jQQ4ywJLb7ZepK",
  "key48": "4MS7Lc4zFvuecJGUjGS2LGULz6xCdabVd9Uo44FFsW2kRgx7LGAsYK1cHpotxECahpcEjfN7YRg3kHZsDkNRegDW",
  "key49": "2xdv3qvftxh24A5gn9qe73SBQyBCGNDtd7WinrbAzbHbdHdiX6mM94eL99ciMKSgbMEykqvTxzyphdWjcNsWUveR"
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
