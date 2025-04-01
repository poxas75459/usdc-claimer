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
    "2TfiuL56qtLyiLkA8Me371F6zJBZNHbJGKwzWacHaxik2u5avAUzUszTPZfTvYHdmQ8fkcq9Y499KH7QokbxExDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WfheYhBo8NVt5ygeLiQtWEFjBnbrJ1uHqkLucwF2bybr378Krshp9VuqMjPzBD7f3YkttLmsZwzLaJvZeB8nEpx",
  "key1": "5jiCPjgFmJCHxiBCHmLRVk8J1YdLnY7YnrKnKbuT1mxMA5znaxZ5ck6CKbhZ67Nd2igxogm7DS8vzDKAc8RQVGsn",
  "key2": "AukZ1nRtKRa2mZ9w394egEaKS2nyrUPEpJ1niFzgthCyDWqk7eASCTMf3LUFaQzSwSHJd5DQxmHLecExqWtpE5J",
  "key3": "2qQVDAe8HR8Ln7tJ9HDdxTSsjd751N9S2MTEWEcEKnoVxve2V19RjzJsQpQ9aeYJs6UyGrKoRBgLrrtQnfVNT5uR",
  "key4": "yG9rwyKMWn2nE3PZSZqfJCiLLZ1XF1Cy1gJ41iXuVWT4bCkNeCH7F6srbSdp9k1Yi8siLtkcfPLr94rCLpV5Hsk",
  "key5": "xG7NXMCryFZzCa5UZWrRA7t7s4nprbvLm1pQfoWtupyGGV9tUbKpe1XJE2wTSAQgYRp8KDQtmX2F9rmkptvXFZf",
  "key6": "VRbw8zXdCHHbq8mV9wHCj42XUa9CMBkK9HCoQ4Ae2zXrpmZV9YTyWXyAbLGaK53tvQ8BCbYDN4oxexx6Psb2AMa",
  "key7": "2yhjiE1Gb2D6HTfdKocwQt6aTgwCbAaBYTsLsYDPfftqjQhMCCateaZV2DkUp6XqacFuC9WHE6eLhvpYMvebSpi7",
  "key8": "aXzpNHcYfpa1pc3jDAZPm5EAumxetUnwSZsE3SgYQHgk9sey8AjSz18UK1pg66b6Q31KgDDfFedf36Xk4UFVmRu",
  "key9": "5rfLf1L9vBL9CXb4tDixFNEJJsddFDsJCBMjc9kevhfsimTxurGuMeYHYyv4KGQTvCLnZt3WCCgW9vK2NL7KxjxQ",
  "key10": "3p7YYQ46ixybEtso2vV654fVVDSoKSujhHQternnx5iWTGK5LbXwcSZ7qPjzVz2L9kuk8bZkY28y5ZUPsbmvoNSZ",
  "key11": "23eZiYqh6PwMTrgmcABmqh8gVGmUHPorw1F2adasGBtb16YGBuMR4ZaPqMY2nNZniAb3kmzfRfoHgbPtxmKrnFm5",
  "key12": "31eLEpinBQyW9gbG38mW4Ga2GK2dJ3NQmt6C74bTcbZvWuHp3D9KtMm5F3Rxe16ZEb6h8djaSBCsKSoxEfwjBNbX",
  "key13": "XY81pLb5KnDwkDF4U4RcawEnZNabUpdzxH7pzvcJmkVvjvf1NoyU95vpm9pFx9Vfg27r15pCff3NuptJL1fF271",
  "key14": "2x1mPTUpnv6qtEuk8AwDAUb5RZ6nqCmRRxsXrCvq1N9gdE6Un7urZth2SL63fVrV4rLczePHZQscTa6s3ALXuAM2",
  "key15": "64KExSAL5oHUhAviuZTzaRseU1iwYfsccT5X99dioyUY6ybUavhHx9yGzRdGgGe9MA5Snm3fG7fTgkWrTBYBdunV",
  "key16": "3wv4r17SRLdZ6Jc3Q4Ak26ku9iCUWoDfhpMPK8YvrXR84c2VKWsHgA1qWnHyf4CVoXKkHCsvdZ53ii9QtuCYF5F3",
  "key17": "5x1W6oZ2cK7dfwdCLxDi6t8JBebcBpRs7giArR1xBBr6emuoAmvZ9RdP4LU1FzBHPeiWFubSSTkH8dyDWDb3MbXK",
  "key18": "3yTnK6ZeKei2XPvPu2GN7cq4YYFyN3vNsU9oh2yNQFDXGRRtM1coXdPGFFBhvczduyzKZuBgWXnw2i66aeVDfqru",
  "key19": "KwyF9B3sDhN46XZXTGWVEizmzg9Q4FSpjKWzyXL4u6s73m2CzHNPVxzy2DpfCoai37YeurTdrhgQ9KqafLYuYQn",
  "key20": "7nAs3eubTfMKXmt3P4hGVYKMksmwwNLQdp5WJVTsYBr7hEfPt6rsoYYxop9yX1UPniUmbkdLdxAmpfsSKfopXPf",
  "key21": "66MrjdXSRp9W2xV2rMib6WwEZrp8fsJoftQUEfBPjeA7eNu7tzAi1GPFS74nvAcDyZYYibjCpjC34VVkseHFCZNQ",
  "key22": "3xzykMmYFJKWtew3U4VGNZgm7hSVLRvAe3emAP1VyhmJSrPwGWi6RqdGStae2TgKtkCPbKMZDSaahwDPRRobJzwb",
  "key23": "24nXu5KQF9nVwyhwJusufm88zgee6fkjLHBPttbdtYKGZxxSQKXABFbnsFC5pHvjt5xx8zu9qFxRaeSLLybxEBLX",
  "key24": "3EcZJzyMTriaMhDrXcU2pUeSH4MatqXSqkjyxMPuZ4UCQ8QTDQhWsSGCr6tkqe6PgGGFr84TLNJ9ct5MTgshzGHj",
  "key25": "47MWe6HfPjXdNZXXpFeDrDCoUvtjxFYztudLKPVMoBuuUTqB6XkwympDXCT37cBG9q2pitZP4f2XSgrRgr3iZuky",
  "key26": "5zDaJ6rhpAuCwVSJAob2uwDc296DnR4bWVziRMhPg5FE2t96vKU2dw6cgFDc97rWzTzhg5UMyVWucivkYqsWbaw",
  "key27": "3DoZEaBtKw4T8BHR22R1UBN6KDE2DtaRPudJTH2atKxEH38ED93obaAaEVP4cqw4K2jetUAvy2kLSzFK8hGQ928F",
  "key28": "sTSWPHwAyD3rNiNATPmfJv2ktcW4wtNtgX2YRA2VLbn7HRotqaoRWDmmfjZA4ygz2EZPKY87Gky25NkLmybScFE",
  "key29": "5jN79NVKUsZGrWiQQHLrwGGjvsQjgZxGPRzk6ZT8ZwS9qrM9uEY9ZiDuKc8PPMfMWHLzcUphKvb8oUpp94xvsi8Z",
  "key30": "3UV51VxERcmmgHe7V5amFXc2XP7nPYqu6dFVgtsV8UuDbCHb8MHnL2nZqnLsr73LdPj16vvBuEcSXMphNTb3Dxfx",
  "key31": "3yWgAiNcRJmKgygrwqKfgmV2FYd2MSpXWYGfWcgyR4qfnk2iFftMtHEsqKM8X7fTAtHYk6HboeVAEdyUH7Ko26Kk",
  "key32": "xKqFQu2VKCKVCdwLuzoZZEszFYvkTKeSKWnMctA3f4ox7nM8QGpXWFQXzVSyXU4AwPXR2TNnAJfex39qsmu5baj",
  "key33": "y1UvxV7PFn8hcWEwx3Lz9uwFBdP3cdZAqzEzRyQQijJpdGHRXfs1gYYPuzwigUGCPTMsTGs6SfQD4XKUSVD89hZ",
  "key34": "2meJqqXXsAUmENgir8nfR2ozdcvdjcwHLRWbadrLRGd4teCnSrGqWpgZWJw62esTFNnqBdKVbwLSutkm4EXzeNzr",
  "key35": "2j6sutjCWGUZXsp97Y51DSXFv1ENNDRMNWcjX1aaf2LmoqSksQJQBVpG4pcc38m4wYC8TuPiQ4eKBGZrWQ2gseiU"
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
