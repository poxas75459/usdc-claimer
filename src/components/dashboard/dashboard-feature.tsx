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
    "4cWpkYVvNQ9dKR4cEXCvP7D9MGmq4GL6h2UTxZYhjPA6wna5T1j6HFLSjWEsW3DRFYk8rphatRoaw99xheZqJViq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAdZak4SQxn7UBA73v9cT26HDzZfHAJfPGYtWkt1kznWBLBa89TwMidJmzJY96NWyS1DaHoanfo1sXe4htTgzTM",
  "key1": "42oyzwsPoKXpoCGDprbrksH2y1p8YM9UsLDbAR2Yypp7dtUEoEDi8BZY7SHRWaYNqJqXDKiGxU7XBHgKuwjPm3jW",
  "key2": "53U49tTjUmbvUVunbVLCc7F8j5j8tDuLhdiNEt76oW6uC8u3TzJXJbt24yim1eaXpK5pzgd2VaFwkJRueHmSVWPV",
  "key3": "3NvhkxBFMewnDrYMkZccGpZYiVqAp3mppxTfZqD7bfCYA3isE3nSTphAQxSiG5VBR3bsju26FXbZnqGxLczcdh11",
  "key4": "2ULaHbPWHyyixokdwESTU5pVAdj8Di5vkuEM9meEX1REnHjXzgZ6AXxuGRg9Wz8qJiRwDVhTRcbm9zktv4frQ27S",
  "key5": "5bH16V3Aa6MyiLRGCQinqzKsb49Fxk5sMgvYHB9bPMa1WJ7axsS7pczFttQwQv6nq2zbMBXgo3fLHRftnKb9GBMj",
  "key6": "5k2PbRET4DX9dymu6mrLiN6ov2TTijDT3kU7awQugLnwzjfG4dxQR7YymBGYpZJM2v9t2bcRSJtMuDTZe4b7JS4H",
  "key7": "t8H82HuHBZn3UD5fCpx9aXFCtA5scy5yYu5HTp2FcJFYJpujpAjXSV4QdhYrpgpMNXx9XJryoFt719V23ozfALr",
  "key8": "55xxz35PSXmRmqm8dTm4X7xsz6MT2imut5G7SVe3tBt8rUYZi8bCH9Apf87Cx64JPo5JYNgF14uZMfA5L7QGzfDp",
  "key9": "5Nbz6WCKBPef1wnrvaJCGEDSV514YvW9vb2KpyZtWWNsZvmFDC4pKBkXtaayYuMgb6iFk2yPRzhQzfdLSuqXWJQw",
  "key10": "1zG9D23j62ZhYCwN6iKiJ6CW4Y6bGuvSU5QpVS8jgkcvgugE5dw4NpJD4jEBwWMZBsoFMKNpPWjXFmGQfG3dv7c",
  "key11": "2B7XNBZ9kE5A475Shnqpk72L8hS6LAWjmt4LiuZFACfqv8Aqrg5nsZvCh9ZUzrNNr5ya7Wo7PVEvH35E9rgn4oqC",
  "key12": "a8ebGgqA54daDZRNquuZecC5hjpWSqjXE9QHTRyCXxVvnSGura5g4ewLMsQsPcCDWMMQvZcK4wQHDigNq69XKNL",
  "key13": "2jkCGezvXeSr6MEMwV4R9no2ABpHNf6vtvgpdmmo5uyuPW41cxyT6DuuJLomLpR3BrkUP4T6BrdLJU4DYS1MH7fe",
  "key14": "58tUHdGXN8Mxo92YKRfDvKjWDGf19CjhTQrh4PKEPVU4LWeotajgj1PGEw9vYU3eYkuDdqoNwT8524PC7Gzdh4s5",
  "key15": "wXfwxyBADvZ8yHVRH6NxrCoVqfYavPziMpqo7o1xXW231LVZK6DkcxJuu6r1ti46snCotnMmH5XPVggPS9oMo6A",
  "key16": "4mrbtffu5HxqQGsi7a8dw5wErfXSgPKf5MX5mcsa79sSR7tzVuB9PvFFsPuVzPnadWYLwgxcWoJmxvNn5zfCHjh8",
  "key17": "4xCeZiMohEBxfb2d9FsTbjaXSxD7Z5qBo2sfryVw2AC6RnnRbx2cCNJDMb3qJGVymRKKUogoeqfjNNJCiSKNWNp1",
  "key18": "5bVTDu5m7DTiK3cSScLZXqRPDavxZpS7JRqMvVFoXUnuoDWNamaAG7t9NQjjtWcz5su78AaYTZksMW4tJyZK6Hdr",
  "key19": "4vzUX1a38z3guUb5o5NZCJKuW8PLkc4DZ1vQJMcjzzRKeTvxmaFLokHZcWwe16h381ky3V3T2NPgiS3NHDvdX3o9",
  "key20": "tLsyKSNPnwZraphdnRG9Rv22DGZcBzX7KKNDh85oFaEc2tMdTzFbgqc8kTc5pPn2jPzgEGGhxGQsQhbfkgaEhqy",
  "key21": "3WWXXp3sv5YsrCT1cuzTpM1LDHy9yarsUNXSEMdCx8Y769LmZmMQjXEvXpsdD1g9eYfMmGJjAVsFLBcP8a6yD9To",
  "key22": "66SES8um4m4r48iqfqnPjDc4jkawbhqRwE5yLxqcVLcytLGuAFVLr3jxn85o3qrWK6ajTkHx11JCVeChRHzEyech",
  "key23": "3KJteSyNvUnWbEC83RJHpwoQS8FtgUHnRYsJcSgo1ixg4DQ9xq7n2RqQSXYhA68MFfX4iGSvvZsdQSAVZBAfAmzT",
  "key24": "2XDZwt1GWMsmcTfYAoqTkV1E5MNp2d73mKgv8aHbdXjSyk7Ddndn6CeKNDR5tsLnY8edPbnqMUwpo2TvwWyZD6mS",
  "key25": "5qyk2kiMPLerjs4XKzkT68JMgcQV5mTcibAcngg6sVQyiMfumafuYWkLhsp7SzGQxyEfry4jPHBAiazS2Po4UpYe",
  "key26": "8xrNYFuH8ZMhyGVSS48UxZF99hy79455TJE5Y1nmoseKgd1ZFZv6AUhD3zKsat2H23G8cVqJJ8XEBZYqB7wWSDq",
  "key27": "3Ez1jPX8FwxvaoZ3JtvEvqMpJNFNPenUor7o6ajWpQmsxdmvAuJzJ8gJouGdNpqaVSEzCVxr4Mfi8UHGcv1mQSnC",
  "key28": "2G3LJyLeVN8czJ2VCodqmhhXhf6SiQsW6373nKcgqkSUJ3EqqVFs8Atsk7nUJfdb6WN6k7iP1TbXYXyAx2AQnHEy",
  "key29": "2FhfLWPeFUhswgEJirT2iixtRFqp1erKnygFoPVaULqqZEeTxukfqB7nbfk3ATAYibzLG7VpF3x57mrcLTzuRwxp",
  "key30": "5dvTeLtjPvgv41Hi5CBSiL5UJaGcQt9TgjuhNCa6aFJMaN3fCwZy9cBVW3kBgGMdZb1yTK9UxMhBLTQEkqd1ASia",
  "key31": "4XYi1hTgpGgCQqHjE92guJEsyDj8SYWuRNDRvfwgtWxZRK8TbntGbREvJb5mtMADcfAnpLXDBo7SWcyyDgrzoYNY",
  "key32": "2TS9T5p6pUCBUCvauxrQJKKh7wUXBiLS1tUoWmaQfaebPmrUemBFK5Jyo6pTa2569otip9Ekuy5UzRhvmibgHfJu",
  "key33": "qNfVDnKufPZ3r2BxBwJRy2LrUYCcQBetv2qfkPnQ2n4aKS83zKwCrrxqU8RaE5gU4FcEKFcJps5kd5NSGHfUMxs",
  "key34": "35vKMU7fpusfDxbJUgvSN8M8PhGR9WHzenwM9pqJ9QSMxpqj1wVMTonWG48VF4Gu6noSnvA9h8xskTZszBDoDjYm",
  "key35": "2UKLfgBMTAFxevECTyLuWeUoVwuWYGMxEfxpcH48RWJ3dZFLJGDWUnbo2dwobsqfV893DXq4XYKw6AfuLSskvHSt",
  "key36": "4mB79KGjcEXnrtvn3VEbGRTQ576qmuxZdZgSBUW8x7KshgpXZD6tDRXifhC6iijHFAcpYCpRQoMsmwBtuJw7oZV6",
  "key37": "3QF3wEuwW5UXDdo5a8kwwxT4r84X3cHWC6CFrtP5KSAoNz1s76udVaxnsNniukPRhNgGnHcF9sNnNJVn3RMmmNrK",
  "key38": "5ENDrFqLcq4aQHa2aXLZBtEFkVr3UAE9m57Yd6BhE6g17x3yM6pM1hTUmthRmDvzJfxyXVbNbaGt8QYqSUYy7vDx",
  "key39": "h5wTZfAVC88y6icvfiECXBpq4Wvg8d358ZKTum19BRB3FakVWUUXvebsYNZLeodDbK9aPaPdY67DP9nQx3FzZHV",
  "key40": "Cdz1XndJdi7U7eZuQB2Z7X8ksTMdC738RVFLZ7yx29hvsjh8355ny3hVVton9fN2aY3kfk7ykQEKuxho5ZuUzSX",
  "key41": "54U3jP29AAX3SjGTDsJsDz5VosBybasH6ipftXRkFC4QdUjREtwcXVN8zLk4NC57XHLxKQr2nLKTaz7S4Na82nG1",
  "key42": "5UESzmXGN99XvPDbc4VqaUrrcxp1ZkyH8Kgq6SAG4Wj6ucVkMen3QGiZmemZWr1aibHQhMKxSJa2L9NVnuHAbzoZ",
  "key43": "4TidrT5cJarp6HtqewHqvF6CUXqbnqLdqshSU9CZjC2Pa5JSvr32j1nMco3pfTUTDwM5sHyMUN1rUddt5ozbDg7s",
  "key44": "4HbjTVsHWUcxxBpaYDUramQgY23dSrmSymk6VjvTDyvU4yd9Km3rM6dwg24mkmeACXdc6uRf5nFyeGhsqK98DbnL",
  "key45": "23kpr5fKYjLJw7UsrAY6uhuzFPe6vxGnHqx3byRTRdhaH8MzseaHrGpPWDWxXXi1LnbXFPwuL17k7QgUu64WjibL",
  "key46": "4boEA4EFViXUjkiRYkw8geqpwiFFusidL5z5ymPuZnjAi8bZnXQ4oPJMQX7Ra8Zx6FTzTjars1qUZdNLymr2ZBVn"
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
