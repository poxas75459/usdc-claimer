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
    "XxRBso9kyTy1BLQsMvSSv25Mrtgf6B3VsATSjkGhxDxb67q5TdkZkr9G4JC2JKsruTh1r64GFtEscaMym4fhAU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nfnoytB7ox8eSBQE9HPnX8Bq4FdLhFfD6WtvwSdjUMT6SyQmnX7TVRf81jv4YRFjChxPELKgKZTQETjKdNQFzfR",
  "key1": "panKFkGKcLqUV6ux3GgaNJkF8DTntim8wpLB48qnoyxaJBMMyqGDY6iKKum2TX3Mkpb7kwfBk27m7b9gM9TmJb9",
  "key2": "2q7QR77jaGnpGipCRNLSEvvbb5Byc3kTJUJKZoGAoEdkAy25XeZvk3MsvptsZn3B4rcxRNjnFKoPVCgCDBf6Rt9M",
  "key3": "2DkPH21s2z8RSkMK1DcJ9i7Pg28LX56Q5gqUMxqUAhWyiRYXnghUqdXEkMzgaQifjv3TGdc4VNCuGAHeuGt1Kek3",
  "key4": "4oKTbh1tpimmHhTerf8rZBM21Ticim2TYV3CtZzWQF6qfyiL7eUKY2ZfpTBMZDHs7odef1eE72xx9WZzdV1gJsHH",
  "key5": "4Xpjx6cWNy9WmyWPu11Epz8hB1bcKxvML8Ki7yWgamqW8fzWrqK7CvPotaiBehdGRmGQ1NRdavYhMCL4akzermZH",
  "key6": "viJc5BXv7ZyidyZkdpGjibnr6E4GAgVNZ2r7zesK4W43sKf4TLkck4agoSt3KC6hNzetHRpj217W3LdChMjFptm",
  "key7": "2vJRSmge2SgxGWXPf2Uh8X5rwYHDAAWr5JCokqa9UABWce28udwPnWctvLu55e1wW5PN6JAxXxTYPfzMf1CKaFZq",
  "key8": "5DxhgdtrXxPjdBt2tZjTvDWk8qJAmH7FpN1rHGyGBVhkwnxSiE3Sd2o24nyfDMD3HMASBJPNV7pwK2ipZmzvLHNN",
  "key9": "4VxQHqiCyxRpQajwpYxUbkMFjqkB9pZisAWyNMB2whbWqZpTez2wCmZLB8rgkWWsQdioHEYFefCu9idX7FSJP9zF",
  "key10": "2jf56j8JXqL2UdQk47UsDHry6QMZ2oVy6r8T4c4APTmKsYkTaJ82dikZ1sR2K3J7RpT3GyJ2Sx21CKU8hSS8TMdM",
  "key11": "5zryhVTkcKWhaHFbKbNjn69KjqXcyLfoLq6Tbt7roEtByqaZwYXs4Wpj6ApQaqJUHTKRJGokKeGTrXESszNzWnxT",
  "key12": "5Z4ryXivKuuGD3gxfUfPe8UgBxY7SC9HnVRQnC4fPuynCfpSmRSUEyqRanURqSmrdd6DmfP5RQX9ZXbLhy1F8TVc",
  "key13": "4Q2xTV9bxMpaarshjJCxR3CGKfNjHrHXn56HnuSJxmuHCj1jYty4u3nbQhTAErvj9cMHaLRUapH43SFrHTDqk4vC",
  "key14": "3mgnrn9gJ9xhnGix1zb99FmJ3hRkhsJdnoXNA7yW1decFAsuERapFVeRHFJxDwCBErAJniaJCKYqYwGtpGLsTN8H",
  "key15": "4hmk1ofDM1Re8p2a13o1h5B9Fv68kJryXSwUd6NRoFsKVwC7LsdrxBBWdi6j7KEwKu4aH2CaAiBcosSrXU1oZoti",
  "key16": "2qNRnZJJi3amBPK27fhKxo6qX9JkyZYaEpySnRi9xbe7h7TwzDdthRWx4k8H92hL524PSoPbi6fwiFstFPg6SEea",
  "key17": "3Zawsk7vnzxovpxyBEf32P57ZEjhajrKDW1SsP13ZARjuo494qWEo7kpRkC3YvY2BkJdxgDt9vConULAm9jpvWUs",
  "key18": "2YJwXZor6mYY9qxArn5Cc1WDsXeSAHCBckcbHpMYj2e4trAU4qLhc34czShHeoheb62hnSsdSqRAkQGuMD2K3cvK",
  "key19": "2LG57MpyQjxHV9WbyLnVKnfsmAvNfFqGtpHYr5wLiGgTAM4kYdggLYhNmeP2oQPyAnchvGknqFCZtuRS9puuzm4H",
  "key20": "34JCPUJrj5RcjXecs3oLG6AdB6ztBW5ar825jYPofsPfqYL59MK7oiBpLW3xhB9R2Fm1euZiCzkgvbbVJuRec1MC",
  "key21": "2YhfERdZdW8zsnvnr4CWJeApj72kx8ZKodE1bv8fEgBDhuFtgU8FKW4T2VoYqjz8vJq6Jx5fqPD7mxPpSxPkD49c",
  "key22": "55wihD39UwBwjRRKHnUW4fRG19b5of4iy9vaMUoPULVYjZukqxy3bTCMqpDgtYvPZeymdHgRkwfiUrgm7BqdCyPu",
  "key23": "5Dse7gu4jQ4EA8UUgqQp5cbgY4yr4jGhQVTs4vc9QH6bT5nMfvszWWr7hsjJM8zByHwmvrGn1UGeZ4sYyKSq2f7z",
  "key24": "2ZVe928K96tS5JrsqMvk8AF4KJhVoKK9rqYi42XKa32fL5fzU2ZBFNECwy2o8YmhLXH4pVcACJgusjrzw9GZZdZy",
  "key25": "49PhwC78Mt3BczUDdZdnbcDWShzYUrZpdXMy4owsd5uUC64tvCzH3rSvAE85r2tgustmwwRR6fxYvLRQnycgCYFw",
  "key26": "5D2ufNzM2MuKvSFhKiVceUuSwVht8KZzuLALeJeTShaDBPkXMV5YbW8aPjy7ghPnFnnCidXfwNX8bNPTfV9AYrx2",
  "key27": "2pD2jRDFmWQ2PcytFtUkjWMA5kj8Phy1WaAVVYBXbbg2u6Z5n9ZrH9eVV7kWszkeHc6LCCa2PyNydA9AbZhiiP4r",
  "key28": "5ZFFSR1g3qAvY8rhKNXdeGzw2v7yCG77jSNT56AdinZCBEKjDZAVEqqHRJAQJg4ehv9X6vmQuY8zv6fRRnGfzxbR",
  "key29": "5r8y5e3jVCsPibtguLziHTec88FC4ne4qnY61RQC97FhomVV178LEejsNmFarinAYY8iGQRLceiwMYN7MkLuPVtK",
  "key30": "5PZqSFwK3TQ1EePshfBpQzSFnioQn1c2Ycfd8QcLCcQTwWa2yfBNrEhhMYo77MPQw6R9qBebraCoaExj1Rdgkp3c",
  "key31": "4f3mTymCvidyx6p1M298ZSCy6oLhA7cWdLbTcebLXskz97q4rbUB5nvXqKdbSTpTQFCYNjPADJMCfc2BBHKUkDH",
  "key32": "65Hqkt2HGDTTLaxYuAXtVZ6agrgLLiGw9wemGjmHsNax1K937LyAhDFKz15nmoQM5tND7QH4MZGctatA89izNU2L",
  "key33": "2NSKzKtzVVJqiUYC5ixdxhaajnULErQRk7qDnQx7joqRnjHCbKnfabdzB8SEcr8f5DcZge1HCb4CM9UtJPHEthpJ",
  "key34": "5j92W9WSsELeS8tnAaBjyBPfUzYez1hzrMoTRKiwqKT9hSNHNF44Q4RofNeCdNaJ3zpSaqjihzEZFYqeM4GFM4ot"
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
