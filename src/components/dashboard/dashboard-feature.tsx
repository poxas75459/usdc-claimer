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
    "66X4hjxDPqTRzBTrtpH6jSP2EUAZYBKWmg5WKNc6cSBsYpRjZAGYbKJHnYmsfbu7Ld5nJyLsY3xmZraDBPf1RHfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YGbqVBRUoUGeHR3q4UyH2qMKxDVAySE2R8LjqzwCbCw9j5sH3qNZYrkJGJRt9T5QU2xRiWPdwuVd6ZSJWgZPow",
  "key1": "3WHJgge1AKqatL2Ea6iJjkkRADVcm22ZEtnPUBskVpKhyzExRsCmQ44tgfS5E2TH7QStqF2E8x9aQvXYAnXSbHTj",
  "key2": "2kATi53F8htHKNPG6ed4EV47rf2rYEeqaB4jS8xCrckTJRUqKBFH1XMpXXtcBQdM8DY4QChuLRgn1YhREKt3UM23",
  "key3": "5pMCibYy2gF2uEsPS1BimUyz69pSfwQPJCAgPVMw1Zdsc6u5nyMryhCNUSgJFt9yRU8N5pPe3eR8iTA7TVigHu8r",
  "key4": "43M3My3hAtqyfMSje1jfXZCZyoieRpP9qgpXuw9GGE7krvCjypQfG6kFq6QrzzaaHziJrymNhXbApRf4MkycFZjp",
  "key5": "2BgFQiuKNoNmZUSTs93LHYJLtT6Hr8eic1rTuJsMHdmcQfUcBtEx8ubu67fFwuZCu4Un3g41grhzeBtc7ooHULtp",
  "key6": "4wPjxHCpQLDV1zNNfuKzzKmGSBmqjD1EtErVEcWtSdd6vrWPpM4QP8ZiFdX41P8HvqKA8fPULDwPnJvGssNa6TtU",
  "key7": "2xVpp4u5Lswn3to6SsuoZgiJGJb5rGejVkoR25Kzc2A4fFgTgXbVewh4is7hYv6Nk7H53v8MU1muHHDD3D94S6BP",
  "key8": "2qt4b7pajKMY41c2QSVapgAu1dPenav94xrCmGDA4xHqgtxLDbupUUnJU4SAu5o2UZgvkREk3UtU4nBmhjhqXfYE",
  "key9": "4LNyNtYX9dJWxDxUHq6f8jDGrbBKU28RxD8WXMXMC8RfZrY62jKn4umznEW6ybVanZxbiVmcAeGvDy6B5Nrrszj6",
  "key10": "D3QP7Vfms2AzpeveE7ZuJjzWWtuBNh1epFapW1pzc3VMfScsH5GgBG16VV5xH54Msi7Jz2tUtmVyujJQvVpKqUi",
  "key11": "4ZRJW97WyvNxJ98dqZDEGMxsi2BUP1NiBYZkt6eEi8miQCbj2oGEvvm1ZV8XyxuhmNqpcQWq5w9YkQ3kiDNMvvce",
  "key12": "5N2xhmafLYrWr2rVp9t3Ebq4npLHK6m1Wgfxv6Ur5YLGTUFoCMzVS6r8VQEueMU2KRLxz4BJi39FZVHfr16CC77Q",
  "key13": "2Uwpsx62ypPJ2vxNe6qyddoEYAo8pYJAFw8i9x2AdMJpzGU9HSCSh6nENB6sRmt12tgMYpcptfmP5yt7vphvJu7m",
  "key14": "fBsN2r4FgkPFEqhPoEUY9AbiQwB2guWh93W8Gwu27nBHhpkoQ4A4wHoYqW12ZRzGJKyfd9HuAqWUCMqUnVWLP5w",
  "key15": "MXpeaGtF3oUJeDZ2JfjyAqTS4zqkZaVmnHWRXCU3FAgKwuDZqFpzxJAz9SYgDkfsPKA6HRET3zepqVvHJrNfuss",
  "key16": "3QUqQdSKEfnEXgxPbhK27NRVjU9n5RBkgUpGj2YUPV3WEvcv31A2X3AjXGdT4oCxtHeGXbQk75wTHyWReZErRXFa",
  "key17": "2PLX1q9GPWeebDk4godYXYVftwKBu2HqavaFvRQDL71jrETYNAxVtV9nJBfNr6BBg9Z4pPjajPnJdYSxLyrTon7i",
  "key18": "KqvCLqmgEBgTMwriqLBwet2aw73arZzwN9TxwckZj8HuVg7kWeGBDCtT9NBY6a4ZovqrEUye4MGsB95LcBVP31e",
  "key19": "2zmfWjMi8LVztLXzZzYsN7oSs4EZpcPtsV2Fa8vgMfcJnKk4A9uFzvsXm5wudng22yPZwXNnFqkQfRKDs79bexTb",
  "key20": "3iVfZgM5LrJCmXVxPrkfjQzhBZ6a2JGfHSmiSyvxTTdtnaN41rY56DqoNGXh6xJS7ya3xsKs5etVAuZTaGL9ZfTx",
  "key21": "5UFYLzzs6a19yAtf2tVvG1ZKSLE15zwAbdE47F1FRYb2JZvyh6jfRbhBYfUgVggeGcfbnAUZPWzHHnu217hQDaxg",
  "key22": "xmyiqaoJKEfrpPB5a8Su3DhqmKUBVx91utGyi1KAEnjeYve6p29xE6gQURSUnJ7FkVkjzymHdn4yu3VVvw4Pk5m",
  "key23": "2zVfruScjPNEmRPqULfSvrSZ3XKyFt52VQXv2JxSfDe5h3Vcq4y4DEPQzc4r9omSSMFNwr31mzYDgBwoead69dKX",
  "key24": "59LoCcVg9tWzhLiSHW7NAjSxdkBY4adCyEsDsKoBWdE5utnbsXpXjMnwU1vdAXuCoKAdpDjQ4cj8EcxKhVd3dQDc",
  "key25": "3tPyfisicaR5TWQBk2RKqu23hMJXB7iWvczCqsjPj4QJmV3TJBcJFuDTdCBsZuWSbtCehHsrT9hpnWoaC6QKnC8D",
  "key26": "4x3rzsuJgHLRHyMG7bz8r5wMsBH1u6hd5nsAwD9RW7vjRpr3uHxxPeUBBPs4ag1veYxP7E7MgJ4poH8dzFc6yF36",
  "key27": "igd2ZKHpu5newxaHnKN6WaoMVhbM4J6kmjDK2w7UGd1nNRBBriLkFCk3iTZbZbE8NTb8oypT56h7DaoU3SkysMU",
  "key28": "2WFkxMNX8muhxxRZDdaCvqj1HM8LGePxaVZgAu7zBrk8PbrAQrTn79toaYQo3kvJdk5o16hzsBxaMp3GDh77o84o",
  "key29": "5V6kK8hR3179vi8hyNZzUQBhqXWMnRANNd7V7yN3wH6v48qqZimvtVKKzhAL7vTpVGxMnmL4jifqUMyf1pHhAQWn",
  "key30": "26WqhxRcc1c7eQ7dzM6kDnUQru3Q839Q1k3LgypBy7sBSCxsutsDXmjGFwdqZA1Cx2NmYa6PiXaEFsrA8pezT7HN",
  "key31": "59vST4XzNsWYLDjpGPwHD2KUJSyP1owTaYgMxgXppMCJv9sCDg5N1GeKuqTwciEnV34rRFAR2DxE9Xv31adyQ1CN",
  "key32": "3LZktEntJEemk1iGLxe6oi1h9Up41xhzEjmcCFpEBEf4rshCFsURYybbVoeh5anH4VmU7QUEvPe8qkQMktbAwvb4",
  "key33": "3nZGtAVzuanxBscAh4YuzUtk2M8XEDjZd6mWWybu9CWi2yDS53UkGUryrSRWivkHYyMRanw4wSFo2RozY9ci5M9k",
  "key34": "2fvVUXTT3Uy3DvLshAYeSjgDuH4Gy6U5jnLZH1gdpQvcoTCpo2oMpaUxS8FsSK9YszYdXXnv1vbAfe7LYBiNWcsU",
  "key35": "4m5o7pvytQJukoQrLv4F1LF7iGKFiaGuTCLAEwyZ3p5zocz2x5FA2ghhKvF2jYpna3Jjpk9gHURckQxhEFjPrVgz",
  "key36": "3LV3NqXgrw5jMPut89twVQTpLi4osyDJpBHe3uaWWGa7GZs7vCUcCF4rDS4Jg1Uch9TtXwD77NrkMFMHcSXqX8w7",
  "key37": "5n1p5Znce4wAFB3EXYR7Mx9ghWFg4jPSUncjiqSu1xY2u7Atnj3impEUPDRLTzuwJ72x2qJv2Gsa3LZwvkTFcfX",
  "key38": "2ofHrBv6FtYh3vud8gRx6aEx8YYfmc8gZCHvCJUgUW8aizQMqSUe95jqDHGcb7BuFxU1wxsM8GdMZwojv6iwc6e9",
  "key39": "gPK3JgHdAd8onCp761kBc21V1zrRes3dH96Tnza7gwiVY1uFEfHwainbLyjMAtiJFA272pw125EyhvKsPXGt57E",
  "key40": "4kJERpjbbEvJaYEUdNzS9VnAYeFVfKjS18k7qiGXJ3UweffrGNWkFhzuUgfVadhxFFmVgRaHG2PNfMnG2aodFGxs",
  "key41": "ATj7RwSgSyQvLNbqjQysUycYsCbufhBomQdFx9WE9zgfYxijVuVePDsJzmB3eTPmg2pFdbuLTNB2mW3SUoZZJ2F",
  "key42": "56mwgAZ52AwXFCMdBYmQWLcRgjx5AGWduacRFtpfj2HLhVSGrJ6Mznax7EB7kzc6haBzE9oQzskp6FW463Q5mDcq",
  "key43": "5MMeEhVNULauCAZ5tE373ym349L5H3AKvbHZArjqA8fBE9skXSn7eKmsFp2ByLVa3MVV9GbXhqV4anVs21i9JT53",
  "key44": "48FC36W1wHsBG2Eo25BAeGttrmfkeQT7FWWipv5QdzYkSexreRfz3EooRDCXqZiFLC7FQWFzT2q3D34yf4NeXjE7",
  "key45": "5f43MGoV6PD4BsWkNUFesqV91pzArrANq7WF2XtpvWcYR8ekGfeqAkM8KDynNDaBFnLzcaY5ZBgPYwoaSL67e7YQ"
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
