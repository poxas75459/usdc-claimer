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
    "2HS2xtKqcC6PcdCwkwJHKcVNmp3tAsS27PFahNyuDShrKgr9uYtWiDRotcsBLKUuoNC6n5Ma76G5dkKT87Szpm6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQCJJD9PgAjwDJZpTJe4U5X4UkgjdjRXgvL7JkHA2ZhAYgZp8CF9YUkdF13rDAwSTDobnRSgoCw9B59oNj3soL6",
  "key1": "4LepyrwZmwa3Kno9o632cqszg6Kat17HG3UJiLP6xuRtbTRjvTeCAsAdKx7cP3AFPRMQVrjBAMLrpyS3E5BJ3yit",
  "key2": "2uz2QkCXJsRFtwhRPNyyNLPomK4udtXkvrGDBqSdUpzARnJFJuPpePgw7PS4B3EPz2BXvdZDfxUkZm7GA7HTJvke",
  "key3": "39TMfhAceb635h336NkwPiuxDsRAM6fZrjTS5eFPuwoWo5kbTjsvLKntbETvDGn1ebDZBrDZGG1S7wr5Lxc72ZXG",
  "key4": "2eDEHQFB79HEJPTUyb2CoMMeWJ5vxv7RpwyBHix3dy4nn2uJesyUuBBcAmuKGGgDwnebSM41N8dW1gyr9b1KY3of",
  "key5": "3g8g9ZPVCev46XCFGFhv2k4kCdpshPADi5VXjLhFLEPGrnJ9euSMCGzdfWMJrjYfDobeMtZwgN9i8MUNjaoD3P5T",
  "key6": "46r4RSe7LTYdmChHjbpNx4gbQfHrHLtaLyB8nsKGypVh2QJod7Wv8T9kh6xZRAxLMSgg6x7HovfQ1XA8DefCMbSR",
  "key7": "5mHrMHavBN7rxWKAemFh5mr3Lr5NgNzsynEc56TyyBJarP2mWvUfMNejDrwpUrzuWWg9Zppo1DuXCjVFvF5GsKj5",
  "key8": "bnMneEZMeKM5jQeFnXefqcw34JVmANKneVQD9jcZ9F3CCksGhtTPSqqsA7AVExhnXwYt1aiyjivyDV5sG7bfhXD",
  "key9": "3LZg7TevKWXuhuddThmCHtTwZAQfdSCCGwWCJ4psJSQe519tdi8A88EpGAqrbvSh241tkRms2gaKji2hGynjgMPj",
  "key10": "45vq1SsVgSZhhrBTyAkVcEyqHXYiw2YdPZ5UmxEQui9eori55WDvGcSsCRp8U3mqjZNHrGA7ZnR2tqxo2t1wQadc",
  "key11": "5zogzLzSMmDw8j5cG7bk8F67kaEVRBfKUkqbmzgF8cvuRVsHAkNCy8zJ3giBErrN1Xvpwe6CUsh2wrozHvFbj151",
  "key12": "3k7m86g4ArL4nowbSFYXTmsojMfD1rfHcK5zSud9APnZbH3VYZRiPfit6Dhs17DFQYmSFa3HRP59mTS1EZCbZDBn",
  "key13": "4roC9PAGLwH6j9faHyM3Azmtr2o1TmVdxcemHwnpmJXqukUtxHQZEniYGh3E6fMHTGpRG5g9SDTY7E7Qqf2SRWTG",
  "key14": "5AMXUwypeCzC9nMdXRhC9JYqdLogqcg1mnQ6Lv5aPVSVG8xtG8CLcE5iPqGMuzbtcoPXvyGL1ebeCtrq5B5ps6me",
  "key15": "61i5GT95kYn6onppKt1jdXbWgbBRuX7aRXrVjxSNUVaahVwMHHtpr6sph9ZPRTLpRyuYm4PhLJAcnPX8WCEr5y6V",
  "key16": "4sKWGwZhdsUsYit26nKtz8yq7b7vq2S5UHVtqCNFcNC1ZxNGTWAUQGsooKintdGbqEQDne83UmovHhoMrK2r24ZU",
  "key17": "48Co5BYnzwwNRwhz8fQRTkTU12EcW3xPeAvNhEty3BXLXzopzTLg2j9TAfP3mpHGhCtZjY5MaPAKUXp866uV9JGe",
  "key18": "4Whuj35cqQaD6ntFxMDQagjdk6VLtUKxf3VfkfUrrZK2sXm1DptvYNNp7NNanqanZywmrKNyBAn18bvpWkFpURGC",
  "key19": "28KQvyrPc5FyAAJAEubFwvgs3BtbWd5USsrN7UHh4xjEXtbmzxAh1EHGLKbwwRrfsC6PvBqM2eHhhoq7rGFG57Sp",
  "key20": "NLYis3zcfDN6xszCtxwsBc4KkQZuGgfsfnY5Dh5VibUgiVBVEvUJESJzeihiymBkbCxzWh1LKTbdtenNTjEDg6C",
  "key21": "5nnpzUwfJfmpkm1BeFjVGn6nYSNnzS7aCAFfdWpQWZHTcSHSMhhteH8a1dmzzv9K4QQY9fSFwdjRK2soxENKAbC9",
  "key22": "282mEej1NDtpkdzUJ2p4BQN3gtYDCATX2pajRVFgg5UXDLYuE2HtV2FkzVt2nZX9ifgSUes7gjZMJGuvEsKixrpD",
  "key23": "4eEtQAABehoBjDpnRkk7oNJkN5pKFytsDZxQfQkzA9ZeqQbx1FG8P8hx38JAvSvFAPaXxnF78oLusRj7DiwFGQXj",
  "key24": "4QZtC63zMWYJ4MahaENyXmeDDR8X31SwcKABe3BAYtN5dKJHwXdU9pad4aXXmgy5seNZ21w6Bj7RJLYksKhFi4xc",
  "key25": "2B6zYWeCgYHjwdHaS7s6GQ2JtKQMkW9ZFeCWcH4U5TDSTWk3xgJfLxtYy3X3Gs9N3kQLWLRPJqXPoEwgkmcoLzuq",
  "key26": "3PEHxRXjcYBii4BgSG2JWzD7DtADnxZa6nYH2HW8stmNNSxCQzDSpabcwRSkCWEZRPXXiNqDWJVVgmea1115Y7Uy",
  "key27": "5wiv1KVskcChdwkF9ZTHBineovBNE2KUDxenYp6NpxBRiLDctPWCDJoG7yNYWurYMpqksovtV9gDf1KVipy73wAp",
  "key28": "2iaxR97bVpDxQY39dCuLGZ8XEbqSANZLubV7TMqcCy8UmGKkGcQt9Vww4d3iaS5FbHXpNY4aqU2xFuBcBt8k3wGu",
  "key29": "MKeEfc9fFL62kfW7rdSEagsesHdZWheuLSfNb4SSkExRphfgFDSUAxr587hym4DU5NxwyQ5uUqDVyuGvSrPGNSg",
  "key30": "3DDXYk2KmZajto4bwccm4HWCeBJ5bK9U2sE4QtTYEQsHEjojyk9aEE6KrNvbuXX6GbbbRHkX53s9iY89w7aY9SKs",
  "key31": "4U3orQrNizaT5QaGbPSe4n1NpZapZzEdU4HosyxNLdUzVmFzJnRZu3t7gd8iorr5BjfFD4RT2S8rEEHgpzQPhRQZ",
  "key32": "3FiJ4nyVYaGH68Sm71apBqZTnXnFK126gRk4DR5cYTdr8xck8DJWPuopKARCTueVVxqz7LwCkaPSyVoo2tnY1ULK",
  "key33": "4m5m7DaDEAxpPVcbc58yszGvhL5ydFB8Bkc6XQFedKJvW9PuTA6Zq228Ftrx5LwBrmXxUjoLqoLBe2hS2zJUdGnp"
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
