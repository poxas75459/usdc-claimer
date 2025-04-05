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
    "2zKJJo7Gxyd1cwE4NsZAUjLda87NqL9UxasHsPE1tksi8qWiSQKZ9DfFvxbYmtzmTK31w6jiYbJ8jBxJd7zRP78y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Gpt7EHDgfjrWfiUawuwMQ4kTJA8NuHg3QmyHWKC2jboRWMHohKyXZ4suXu8Qrc6Hugn5ApSfhkD7SMf6oyKqEz",
  "key1": "41qwtJf24fqcKZNTBKJ3qWn7DQLviHHoWF9G2EHBjtYCk1VeTr5CVnLwWHmgjFkhXHyxouMH9Ln1jgpmARwRwLPb",
  "key2": "2ExkHawpcHubCiiQqt3tCgN2WfDcWUkvcTzHEpYy7jH4brKRdqfmxAoHagRCHkHRPCSEEd2VcUYQ4hQ4fEYM8YFx",
  "key3": "3wNm3PWGuhiW371FBi3t7LuWdmtFj3pVCHcGPR1kQ5EcjBsfoMQJY76EMBQ9kmEQah73z7jwd2geXkhDmXSLKZsw",
  "key4": "4VGsP1FuGEYDra3iLtKaLJho73ELSKNgXTDq49dSQEUzk7JDoFfouE4yKLDEW7XryNKALFbGK98xEz6qjcAWRq35",
  "key5": "5EMFEJs8d4uSDwgk7QyfLHBpNqv2uATbHtAvgnJc4Z5yFFdaDeKBb7YbSZBSKXmsM3TKv34GZVKsAfnNTJJQtrGr",
  "key6": "5pTsNPYq8KfV7mp53551EqTxs9Tx1AsG4QurXp7wGLJe964koD98mtXLMGxZbBwv3NvA9KEGMv2pg3B79xPsr1ns",
  "key7": "3DKULGtMN72pi37NSPGRwbd2k9wx7qyjGjJDKtqdKbp53rBDeh5obXaQYSzZTknL3yZN83ZPTbvRRmCQBYPyAe4",
  "key8": "54wBU9XN4mViphYBTW8N4SYqF9mLBm3rypX7aM73WLBT7QwHaPrNzMxNyniSj5htf4fGMZDpzQTxKPPrV2QLBDTA",
  "key9": "359e4g2DPqAcfF1ajykbtBxDFpLkr5mNUqFoK2YEvhuxznCeNVHMA9dkTtcxePWV5EX7ouTo54h96WyXQE3eM4jE",
  "key10": "9SS4vPgY57kAEwhhrEJrh8Doho7TCXzHjEFLPrhBv3kLbVk9PCwrzvQzro4852Qr5HpYWB2B8WitkzitdcfvwjG",
  "key11": "2yc4ktFDx6idT46DVcqYNLjv763oJuk3B5LrmmDzUfNtoaqXwgiWL4HR8HCUMR85zKjg4hWDSYbQxH17CPkfdBjB",
  "key12": "5exAEVoTnPEUc2bit8VQNns2Z866qQb7ZdMdSXY1LGMCs3hwJgiySht66yXg3c5wkW3zESQL17WhPRFiyc2aiVKd",
  "key13": "4eT7pn6zrwzNbF23HifMtvNc6bEj8D2DJX5TVNd3Uxt3uRuQpmyDp5iUVRq9cyEX4fEcUSsYHGLrNUTiw9t5YWih",
  "key14": "4i4B4CwvWJ5m4vkrPJ6pnWHVa3hZVdXfgvzDBrmWPHGQStp7Yg5dx5oh5yCjpdwzNX49JzUE6pqhtoTXPmEBEQZC",
  "key15": "5y4AaD6hW3rKJ6BdxDT2DNMwiZn6Q5UCxKB8f68QvTdZjQ5CPogWWnpUf8XoBbbVbstACcGR2dcqmHKyWtwsVxoQ",
  "key16": "6vmpPYJ8p8pDCR8TLPT8XrqY1TnwUC52v4K2AmZf3cM3Ax4qax2MM1LSDZzYVsnBKvEa4UbdWHWyj9MMM6VVG1A",
  "key17": "R1xCT9d6D8RpEbJtb9CBCqcHtEzEo5GJcQ6vDT8jUjVFoyEV79fBuUot1bYEcK3bXivHkYpHnBWNJPsyRH12VHZ",
  "key18": "Ucn82vvTy3KXs3K1ve8tj2h1GwNDvdxCeSE3N7Z5J8bRWybnB43yEuGuTAoQVCkKwgB96aGpoUvFR7GGZYm7dNQ",
  "key19": "5s5FADKmEsAWwp4L6cSvo41PMNfMcmPS4K4FYLUrhdqWnwpQKEutwn6ZQRGwikRVPsp38spnWBWPj3mP9bJ61yYV",
  "key20": "5miDu98QAQRpWaN7nrCcFd8Bn2zknFX1JcvqMapegtjwCJP8XvFtUY1iRoWhNUuV7FWCJ3GVMWr8zs4ZrXsXH6R1",
  "key21": "55P2L3Y9S5ipQqmRpqPeKVWSMTqhyNnc3R98RdEf6XRjeJ1xT9a9GFcd7PGBJnJDaTbKwWpD7g2aPB3nPR83TENX",
  "key22": "2keBjkWYdjAXNeCyda9xtk8Zxbhk67wLR9M1dFNmC1NbKPg8ykCzKSZSxGRWGAuJrMJBKS3rrNsXbuwTxkJoXQ41",
  "key23": "3XJWmuEscYCyfUGsDife6QhuxqCiShZNtjjr2wUjKD4Nj8CtuP8aiBPKYs9oGyAQLd1SvCGatb76XvyrdurrnaYq",
  "key24": "2bquKksN5n1zveQv5yAJ4FTiRMngW2p7GX6ZA3xgUXTaD2Lvc8kVinPrUj5bbv8GcxZjVGfPfoqjN18qR8TE7R6g",
  "key25": "2McM6cyfsXVHVzmX9NnHPKCaaQeBY5DYoo5iTtHJxmByqAVXfU1M2GXR5LMkNLJdvKDWeu7RwuDvPrM5gNpuHNJf",
  "key26": "3s4VrEtGPt1wtf3gUTK9PdvB9hisQqzHGHvAaZuDgXqWN7qyYVkVkkM4ofoueoPw9dVd9qfkRGeQLMvVAqUe2G1N",
  "key27": "41i1bV12gYxAhdutq1YfZv7iVKQ9YuCqFLsUVEKYQXxfvX7ASkMQJWSp53bDADXJyATa4HyG1hNJZ4BkeRVWRbGy",
  "key28": "3dNJsj3U1bpp3Xbv7LmeBxoeVakwmxBsAzzrS5s67snfZ9UYhtxMLrM7Xb94hrg7VnBteLr2hMv8gM8q52NxmJLU",
  "key29": "LTrbckWkbauWrhgz7viGB3YiuotVYaENu6bkQisRq28QHFYiP7wnWuzb4bbVT2shVyX9PNPbxNTC1rtArJvR48n",
  "key30": "3DSL7tMTRCAsRi25RsYzkGGQhMeUCTeQCvBXDR7MB9jxFizYvX6cjVZT2WWr1eGpkmiL4j584F3qokn3AwacTg5X",
  "key31": "3jG9z4mJr3XyrukEoX3WAys2SCyDY3RxHQ9oLrrcYR2e2BxDXANeXPHynUeCXYWmA4fP8ycVCA1TmooNUhcpaKT1",
  "key32": "c42N6mFrDeb7HmYK5RniBWVaovyLHyKVN8ThiVx6zTQeouaaeYWSKRcmtwE828Ats1oAxpMt48b5VWeNKcd3wcD",
  "key33": "2ayrJxap21eqttzuRRUHM31LD37rmv2VkXe3s3YkNfXfza1PqBULbHP3cbL48u33kmdLgB6dahwy9TbDfuUTwXSg",
  "key34": "ADNmKy5L3ohddAPWBEueJ15UFT6BvHZXZUciwsCSW55Rie8ntj5a8vAZYn1MgRSvEGbW9orfkfNTqdy6xXSyEna",
  "key35": "4DorA6dv5AP6ABxLS9m3ggpUEcueoHoPnGwGedZc13Pn7EVor5f2etBevMYNqfFpYdEn44GxUtJJgHEEeaW7AjhB",
  "key36": "4H9RiWGQa52HGvxNS4e2qqrBd9PcbAFvPSDsT1N7kK17CszLyiVCyhYVNGkGDDyFHPGeV47dGPqw8KJ76qii4yvt",
  "key37": "RrNkorVH2pcLw8miQsGUeQ3daS3i5oLcB3YxTEu11g9yfbHpB5hAqUdS6JDJuo6JJG8w2F3s6sUZ9aLZNMenEdy",
  "key38": "4spTMeqmPeVANBgHWwDG9eBatZhGEAR2RdG3ggLmECNvzpc7GAa9mjE8p9EDC3yPBoCXryqf23auFMdsovbSb8bg",
  "key39": "476VMx3Z4WirRkuATbaEBFJu36wfhgV3b8mcbnoELZJZzj8kNsHgRPeppw249tXPacdavCR2GsdqduSsJq5T5Bv2",
  "key40": "2c1odviNwUwVrFZ2Rj2QuU99etndm8PL4Xji7yQ9CcLvgETaLqfTzo4ngkCNHUeuojAq9dKDtDan4EzhoJD9LWfb",
  "key41": "47yR7axgsTNzgv2CvZPikpTioxoruQrMAa5GpnDQ39H4WG6qZdCMq1erjeQft3TcuahV4xPtnrhEFHNDJxPeHzR5",
  "key42": "575GLV6TqNU8WZKaZLDxR19QnedmGquhJKcRzH6z8ZkunDS7xJh1rKpmzbMekJBsm6QDXvbqBXW6GA3P1vsLFPvz"
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
