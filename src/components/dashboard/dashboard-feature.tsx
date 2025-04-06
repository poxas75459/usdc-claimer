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
    "2dQWBgUEC1TbipYr5AE9ackgcD9nJDT6bBwXwBzMdhe3LiBBpEDk8WYoZTEupnpwhhwBGFAN72GLKV57zRQfDtyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAdVrmSgTVrnfrLV9BvGuTHgm2xGdGTZUC1uwq825NzqoYzJMJaV7DeTdq8r2QGMFqd2dbyQidWg7vtDWy47n5k",
  "key1": "4f9UCVUh1ExZG5LKBqj7GucVJjehUQ1hxV2hEF8oefygh2Xg7JBRrkS8QKe2nframGFvBDbHij3zH3xPhnkvzqXJ",
  "key2": "677JEWTL4MbNtoN6WsbgJQBtEgxeSrWqzuKQckzz1CTkTrE35iqas97DLLDHZjfDwtcdaSUwLg6oM344NFNiXbfY",
  "key3": "4h3UstzjWF8171xa7H63NoBURcKJVsX1Pinai7rj9ipVgeNK1ZuGm4Jj7PCgJuCqEYcnvALFXS4umb3X2oNzjdwS",
  "key4": "GYtSiVwfYr1xZiViYeTUc4pVvC9vD7vDBmWJa6kMGz3jw5JnCwf1u6FvxtNPMxwDfXTUgvbFup3Qn5TpLFyEfa9",
  "key5": "5rHjVdKjAggQmdXeJVCAVSL5o32C4XC9yrzNJ5kvkrkYFRKqJRyRVmJNrJWw77f3wUVQGHLDJesdCTqi1g5k9VcL",
  "key6": "2GrASzUcYFMRvMX5cET8n4jyKMyCbi5zPqN4Dn2TdVCmfguXNiCywn8mLzH8JoQHtX8e8x4Dbpy3LPwwuQQp6WBg",
  "key7": "1NzPjoaheHPGtBHYtAP2a8KafQymyZAhRDWnPtAFL2rLuAA7X5oJEVPpmfpHAr7to8o3PJydcv3VXMXuq7KV42h",
  "key8": "5DHCjvSy28bnbfg7w2zyK2tbyL8Qt3fLuNTFfCv98rPvVfJbiuL8NXcu9MucQiCM3XXJdPm1Z1SiHi7cXvL5bzYt",
  "key9": "4GRZVMzqfLMwywDAQUJwhvDrkn8iQXKMdxL3ZbboGhkCZU4cXwaiXkNsNmFUA2kTrRtNNb6CoMQ5egkH2oMAioAA",
  "key10": "4SQiDN2Bzxrcdx5VBSnb8EyKWdaeu7BAsycBaBdGYYXaAaGhDTUvcPKZNR8LPnrn7Aw8v6YbPKVf5thanYJVL1ZA",
  "key11": "3CAkwCGX5pQMkhbUJu2GfoKNUm3xmUDDM8rNiSsfWHzNQVRVGJeTNyHCnRDTuASRKS3SfNSE7HWm4nsFvk6DFU9t",
  "key12": "4PL5HLrSVRcTBm2iJpFme1H8GkQxhQf6Ka8azzkGYK3CSc3iWqDoYJrWzW8gKGKMAh5Sn8vzKNrX1MBHpgKdVG9D",
  "key13": "49cp6CSsHH8QwpQwbx3JVfyeU4abASC7WDKSDL9t9Gs7MEUiy1PPUMkghbzt1gQ9AyckoG3M9wxddTiGhfLcD5n",
  "key14": "3kwob9VYkFWjDENbw26NRnCvZcRxvbjrS9iAFJQkAWhcpvwPqWLqbCnGtJtMrbf5iZzSXvU8uWMGV9Zd4VZMKTHC",
  "key15": "2fvQcCgr6B3mEnryKionJbkwVX8hEi1KXjUwPC9GR5xs6BMwBkbN84uwV9bj24sKSvZBehcGB1WPTLkBxjYeiSeC",
  "key16": "5Ea7UyrDtYoHkTrF6HMowZkN1HLd3ue8DPK4o2pgixtgbsqMmEUSnvi28mDEyky6c2B9mWUxQ6vwuvehQSr3HvMc",
  "key17": "zX3RvoRTGuUAh2j8qndGHFvzq3waNsVXzdA2R4UfS9qrn75yvVZ924ooXtcyPyGirmXVCLHEWnGYxuRBz7ucvuD",
  "key18": "65a8E7wwd7SPS73TWGSxkHkNu2FD5Ti1ytVGfN5aDUBMHVfd4idBsX1h7Ni1gFtXCiJL4n66xJoMdiRdPjLbXTJE",
  "key19": "2GejJAEXaHjGWSumu62KVd3v6vXezvm4uFpP5GFbVejntnuNNYr87ejWrcGXm9HteyYgovAoA4VHQ5A9aKwcGS32",
  "key20": "Jv9rXLLtRdmXtafWzdP2MuNuUmFdgSavffrxz6rz8js6WQVFkS4bLXypnwQ67ykoNDv1PRN4GRnSvrSrbdmwbrd",
  "key21": "3oJrGcsC31fmMYqcoSo1JXDZAgbG96f2jawnMWJoSd4uTQ666qTfYy5jrTiMccdBNW21kUQpcLdAQrLLn2b87V22",
  "key22": "5WEdRch9J9ZoMEU6fapdTTBWk14ahxArgiX5rBByHMCTNZUmnoRqj44Pi5cHnwPrkGQECYYNUvxX1oqpfwusB1cd",
  "key23": "36wgpPWo9TuBGsxZ77ky44WBPmCLo31SE1vTCpsaGoQQQ21YgPvZ3tAYGoSBdenycTTYx33g3x8Eo3WSPainWEW7",
  "key24": "5n45DGDsZDpVLnse8wbNGaMaRnwdzLQrveeW6tkbKBbkKTtdHB811qXotnaVXmFKDvZ35xKjtLBy4d3QiL23KaXo",
  "key25": "5gphk5JUcHytiSBq27sDzGtGsrp9WtPgeYrwsiHwGSAjkjefCMZ32Be5hBMFY9E8CkmsRzfTHQ6huJbWdRr9rQuE",
  "key26": "4idCBBxxLpE5gAFJGyaBnHYnubceceJuFysoXP4V6ZcQT487TwZCBAcRDtqY8akGCqxUUtDg6uFt5zeB2yQb9fDd",
  "key27": "46524ktm1Yj1ixiGNhK3uTQoPgTy8osW9wfG2UVStFSpAb3pHq1MKmDaevxaUUjRcSPG2QSENmaSgvoiy9BJ8xi5",
  "key28": "qZ8pw5T6SaccyyA4zh1bfaf9WFQntAvAAy7BTJtMac9BwpBCpc7uLTywDCTbRvQ7ZaChyEfzGYvDh9QyCr2A9Dv",
  "key29": "Dsje4NEk2Butkss83yicbqSnrcPWAp1VYfgeLVJB1JPQ4jEMpa8r51aL6YNtbQpbe6xupnUafvRSeND2dt2R3dp",
  "key30": "29Gt3P8iCjQgnoJjYkr89mxw37jFSvcN24reE7J4w9jvNx5yHYhgiFxV1cv3qYFTUx7xnBzcdjq9SF5wW9C5rUdc",
  "key31": "5GyobB21CB4gDH2mQazEiHhWNGrJx4xow3b5r8i7mkekgXfJDxVqLJ3uUTWt7RGjARJjjjmBiaPJxEiD7oQn9w6y",
  "key32": "3Sy2cMzV3BLDu1PxcFVA5tmVpxtUrwKrgWGUoWSm1gA9X6TiXU4gxtGG8CwJdTPevvH13JA5kuDSoeu4SDhX9B1j",
  "key33": "4GsYAReTcs2mn6wKkT4xAzFVq8vNYtdneEVVQGFyHSmaGrQSvb8V2riTpnj2g32GS2emw1kqVpWkwVzpPG1WYXYL",
  "key34": "vWwg7tjNdTgBDGXXBiviHUrYEmVS1RWeGuUYEngau8Ec9fgCa5Snc5VDHxSM64ouNmerzM3hiQX7tzb3URhAyQ3",
  "key35": "5UERsfx4AGDE3CkwtkiJqZEEZ9hq9CtbocAAfk2cqqqaQTFstzDZGZgW5qv9KiMciQ8wrxyQaqzqCy27W45Jcw6Y",
  "key36": "YMbTpj73kAj6VwZuoRNJsBHtX7KB6bNHqJNoLxAuoxCb8Y57KMS3aFtcXisAn9Bmh1FgPpqTvU6cRtjKy7ECngB",
  "key37": "4CQSxVCfuLZcWrCenfPeZvKa4JwG9BGPs25KBzBkT8KSATb1kXS72R9tdndPUrtsoPGebXESRQgRc1ZnDtGLoLvg",
  "key38": "3u4JomeiCCiyovB2axJtXchQhgAmXAFvvd2n8i7UWtWee8AkyU8U6hRApZgo1YNdd9NS8mjsNsznbibfQw8RVYQ3",
  "key39": "kinkxfCinWFpYWHqu3XYL9NXZYNbHQhXXGLkXhpwP5ooZKKEEAbCAsczsRAjXA3XtgQxkMUsuixt1mhX5ZpcGGF",
  "key40": "gWTowDkvcCEsZjgm8obyKDTtUyM3FAzFU9n1s2Ar6mazvQMZQG3q3k95WMJrvrszTdFL2gqwh2tC25zmPAidnYg",
  "key41": "41ynkg49HngKW2iSb2ZY7jgZ4ZfahRaWscGsswqUYfQaAQSnPEbTN8HMForyiaNjUeb8Y6v8X55hQmUZJs2LZ9Q",
  "key42": "5hya2aFhCYR3ZQaQkNBKXzM9u5JFjiHTDRBSZyH355begWCcYmz5bcefc9AwytmqdibFrWMR78Pd9unz17XUAqmk",
  "key43": "2cpXPd665DAnNchpcWnU7GdeVU5K1dYRiMed6xFcs1At6TpuuTXZFxT7Ub9YpoP596qNftPzkGhkAmeLog6AKEkS",
  "key44": "5gePUWfgkTLQ66rvwQd3ojPThpkQ59MHuqhdC6m6cR9Cq1P4NQRuscBb7Q2f4F3RZ1ZRawuYqzr1SmcbdUFukG2k",
  "key45": "2u71xCvt8ikKjeyyPZdgT6jgEA4FvGLs71WiHTMmGn8UwMQzkkb2D1qyTgJ5VHBvZaHrPda4fLxvYNje6ahwjrog",
  "key46": "3cyJMTXzQr32YHcecDySVSuEXCZxwBmAvxvkBZSEdgwdcL9KSyvCERZS3so4VALmowj8NBtc27nDuJiC1DAtopnQ",
  "key47": "2nK5DqwnaQTwjrsVYaDocKnPj9q5GpSwETQLgm629KfTFBjG5kn1SybwPEu86ZnqwPyLXeqpJyJWg1vHLFmqb1N2"
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
