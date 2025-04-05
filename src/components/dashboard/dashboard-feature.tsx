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
    "5MerDP3zmaJsBhb9ZUvTCdmgfVa9UWcETzin45kWJ2M6qSW6k32NJtmPEUNPH1h5jph7nGdgqjXoj1s1hN8qCSN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBipLb1A9iuFxox4UUqExuzVzyX2c1EaLEbvGxRws9Gafg6or3Fjn1uMYMHM2S7YuRdpZoScQ6R1jDCkpG94bhM",
  "key1": "3hFU9oEb3NxYEJFGn2FREMi2x44DsmKq1Wyc3f9BD7Q68r7naML6kQ3cLuKr6d51Q9gkD26c8yHNtFTbdhz6jomC",
  "key2": "2UXRgm4Z4DAdJSR4kRT8q4hGteNsfa9NvS3FJzBCg2YukrVBhdRbvc6y8patmX88Z6TappQaiSHmQpZRuuTKWpR9",
  "key3": "4TjLxLKcbiGMCvAZqTeH2Mgsi9voLb6eWoiWDvRcCiKh6WcmajcQ5PJof8jG24bESZxBB8AnubDqpfQ1VV679eFW",
  "key4": "4uUkmki8DJkc4uYw76TtyAoHbF7shUxg18puBrRrLhPBj2B5DqfcTKBjikjxZs1fsWLqyVGaRLDHDPKMttNSWADB",
  "key5": "3iQcorMGuqwYJRj3wy5kHeYSaj4e8G1zFTfybmzDLYHzPb7MYDEPVJWztBczmCqoTTAhEpR3raBfrasuHhZHBKpu",
  "key6": "65JENsXK2S4byPv97WRVrYRYAqYFUUguFuQQK3ThjJsx4EttgXE6CtZeMHbRbPp7yJ1oBiv8SotpSaPoVpAW5pSh",
  "key7": "4uowQaaAd8e4mkE2JT9VfTfQGGeay8FDmP1HVSZHNyU8me71BxCbMbgg176c67e7qHg7hFytSWRJBRPs1k9m9ZG2",
  "key8": "4gZ1ipNjZZkQ9izs48K8FCRLcTB5Y868rcQtEFpgxodjNB2ymZbSLC8n2va6JJbZsvGVFZG1MrwzMqqaV2iWe5nK",
  "key9": "5ZH5SS2BuxvvtMPaGAThnvvofVGJYrJm39arfueAUJFJbtbCRLE2Ruq7UCbv4gqxUk5mHtB3HQ7GA34q8YUyqWuq",
  "key10": "2WNy6Y2SEhADhX4mwxZXEesJXc5e1NHLrSc5Y7iXpiHUYWJK8jqqR9qxdD93NRpacTDEbYcNXrLw2fX7pQCSAxKb",
  "key11": "3F8QzeGj8Vy9rTsnZSMqrX5RxnbatSR7LDuJrxpN7qMZJHdBUTbnZzVBqddHiFQCrxYzoPx75q7wnkfoGvZDFPHf",
  "key12": "3Hvxm8Bo2ZdKWbqyZvuoMUKyhCReiypBCrcTfwdhSjKNzPP8VGCGfbakuMzf3Mo3P9z2aM462Rn3XWzQgM7i4inz",
  "key13": "3DQNX9g765QwrQWCqF4GNxt4ZZ8XJjrYxBnkcNtZsZ31T5W96U1XDqp8B5RZ8oj7fhfC2YvzQfWn6pTLeyGJ5gkR",
  "key14": "5ymQ4Dn3qXJrx8xUq6NBF6X4WRosrgvwZPqXwUS1AzkcS1zupPGZPsg8xP3bJzr21TS8Qaqp3mY9yaYxaMJYxjRL",
  "key15": "51Foc1RYuzY6eYmFdQg6LRkw1WyNFuHCaRHUC1NZsz9sJt8J28o1V9zZPHiYJxdimfcpVhHq4xWccRXKmaLWaoVP",
  "key16": "4dAuYT9SnAnjHDZben19fwQVRcCwZCx2ykV7WFA3kwLPXXWRvtiz3XCbK7ZDChJ4WZ7UnwrbqT6RhXkMeJPB3uzJ",
  "key17": "5e6YwavQaeEiNfebXBD5RHGzeLEzymvtPkynCTJ8zonsPPX1bXz17qqQ2yPS6shuABR5wkb5rKLvomk5xuQU8ium",
  "key18": "4QzFHcntZCNdk4XFrtxsPWq92UdnxsrpKSiovB85bTUoECfhYz6d4jxUs5y9Ymwsb17f9DGGCbfXNzjoU7wtLrvb",
  "key19": "3moHH9oqxDDkDexcZpVFreWbv6GLJTz3DRNxXKhpRaqdt3FFHhK1tc32WnzWBLYFaVa1ThcgKxcjsoTjUUhiJnZ6",
  "key20": "247mvBcCgnCGfDUCCvfQQF7uisjDVgFpdv4aFHfmc5oJ2QNVL11So1P82bNrHmoufDd3EVuU4JnzLyqL4wqMEGww",
  "key21": "4veJkA7YuqP23TTCMqBwhAi1XS6S23wYF4d3aKoqbKnvC9sZdRC4YnXQHTWSYHdVBcN7MVWur1HWbSPtV8i2a4Tr",
  "key22": "3q9fPvfXRcZJ85xXu37n5f4dTQ1P3HuAJv3h9xaFfDYANFzcXuKQwx6qdXi8vqkakJ4WmyzHyrzNMWvC2kQ8bpJk",
  "key23": "vEyNSoWvs128HH3wPAva65TPivgGhHnyNNJrJB2y28moodSaMSEEqbjQnSCH75nCh7G5dyXZ9oQDP8Me4wEbNDu",
  "key24": "qhkW8J6GaFhEtKkHx2ji8TCin6NWHFUt4sHApSxsFbzTAbMVtFvvrhaSuaWLWBid7sjbYbMkWAVNsvtQtYv7NZE",
  "key25": "4hwSPFf3AsJ7QrkcEizjLn6L75bty1RKUxBVhyJm8ZzFTFcUMdNFLTh3WePaefGDvHuTMgxQGaQhDWpFTknM2w3o",
  "key26": "546ASHTiADsZ1D8MHeBawEAX5DVcYMnb1yELR8gYgHSdHaUtkfU36EX4JWaxjjyobdy72sGsYkPs7NmCfCDzhTp2",
  "key27": "39dLfmuMgG2K5PCZRHBQvSvdNRqrBS4P7aHFeidXGw7JQZC2VxEPHysn7qL8q539qfZ7Z1vR3K2A6XSqL1UMRE2G",
  "key28": "2QUMUhs8gPYotbFyGvTjguwaQeFpk2x1xS7tyoayn1kSq3M6HxY6oRdgPJ6iPx1ip3e6ePKRfY5r4vVMau6prGGG",
  "key29": "2JvSjv6Cu6q5yAKXJ7EdhDwEDc8cJF1Nr5EKEnrFTFhMzJDHsE2Emj9tZ2fJaeHaRdZVp4RYMysSAoWoMW4eCYWW",
  "key30": "N7G5GaKY5CtkamFaFgzyicSihDeYDJ6Nv9iSbJETi1dNoGSK5JT5qfUT3uWqyKVJvGyXxrTrLX4JVYUD4EQrShR",
  "key31": "5j9SWT9xoKmZSm6sYMuhnTjQnsaVzibJyWAWuzijtriTY7t1k1nQvoLdaZ8PJYRzLFmotoq9DfDH6oUnG5bpLJfb",
  "key32": "53o4bfVo2tgLQAo89f9Pp6hg4sqmZUqP5XuH82ZdTtWzt56aKs8guLGETUj9dUj93RETL79c5yViCDw2h6sViVJ7",
  "key33": "2Y2shPePmMGvDsqZYmg2ifXsYGHfjdP7kpSzWBKkm3CEYv9RYLzsozM7BEa9SZ7cPKyMPn2yG4GPCekKqoNE8Ayy",
  "key34": "2jNhMnMDv56Si9RA14XuEN63XpM2yXtYhQJ14ToxvrqzxPpzbSbU3oEoh5oPjH1qCNmLPaNNCQ4zWu3zFuWRuiXj",
  "key35": "4WsG12a7nBBcbehAourxSXtZiZ8N78cga1gUZLXpG6JTGEgx31q5Q9GVaR414htTeEMWGU1BWsqXo7TwcCXwtYHH",
  "key36": "x9Du59cz9WiGS9hbefVDkiZQQSX1xoWi9TRyXL9fCWEBVjhWioU8EjUzKHVAMgVrcJ5LYgZHa91oXh7SiEZpgB3",
  "key37": "4strHgEJXp9VKHqMfBAoEygcSiM7CuT39wVSGVyeqi41VJqb8e7uPovfQvKtb6u81K44cgmDiNhunaEjx7Au8Way",
  "key38": "MjWmcDv1uuggDXXAKVtkhNFmTBpQ4UZkTJfdpkQJ4FmiUktFuSVjVfsa5cfRcTXSRcS5vfTXqAjoMtrEzLyVRJW",
  "key39": "3hch7pt1rmnX1tuZcfzhZBkAjLADuuDdALrwri61nroxSGcjXLVFL4fy7AS9GnkwSgLPQ22Xz3ZUewtwyKQ8Po2G",
  "key40": "5KVCXUt7SHWCsyrtehoUtgujVaB8gDRs3Htz9BrPNLBr9oqQQRhgKUFM1JFvi3cL985KAeKekGgFaprAqNWDXGy7",
  "key41": "5i5ifXa1ASf2DBDEzGENPb5cvngYdUWzDv8PzFYisfnbfifwBuPkQkYyrvLjmLMnRCocDBfNogcS8U318tu9VrP6",
  "key42": "97JwrVW6suiZRmtoxYuAKtb751RS2tTaAJpD3F2bzWUcC5XBV4aiTdzzYpbxKXt3Fxot1JSFcGGEQM51qHrjyNn",
  "key43": "44pc9XWZoKBvhFrYZebCTuy5gVviPkfJFUV4XhAiNdqDH2bru1cyVFJKy9wLYfKEhQWfHKSmDykD2hVfSTAXZ2Sg",
  "key44": "2L9HxHXvRNv9uFUjN2BGejZ6VuZY9YWaZrE8xR4yni2EKR1S16TpiPasoSUJAtnJrFq8bmPwxJY6PYJnuFb6i4zA"
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
