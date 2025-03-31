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
    "5XZdVLbUoXahM2kqWwskg7Lkpt3Teeiw9fHERMnLEUY3KpcXotgUmbqNLpu48ThpLcgdi9rCuzT2zAVxPCLYS5Ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qmgea3zMkRNh2wVjJjwpzctdAxgP8LcHVDgRFeTPCmWBregbCLJDHxE6dkCJdaNbVHh73FbCRX76iwqnpG1nnry",
  "key1": "224vn4CEno8rsHw7mwvRgqytpQtNxtLxUTgbTmobTJ5dWC6Whmc5KrH8i2PVC2Maq74voQh16NgutA3H7jdaHUmq",
  "key2": "3XDKvp5XNHZWufS7w9yeMKXxoQAfYf4yL5jkcT1jB4PPcRir3Yroi5L6JEq2Hsoq8PqwRB5C3fFhyZVzfm3R8t2X",
  "key3": "5acNusWNk4BBLBzZ767b4E4Q4EZei7vNZbYbMj9XSNPAv7kmvvvqLioQdX7z1NT9S7NPaNSDdYoFgykeuCZadiEp",
  "key4": "5YRvHcG5cH1xfwgdGnhZKU8wCMEFiQa1u8FWDWUVP4m5vijehNHsZfLzLsSLiopa7b8bqdXYaCswVV73LHftgyvu",
  "key5": "3Pqvr3qDvNRden5q85dSCLuM1o8QYLWmZvas6BbvAhkun5f8shYbQuRryyr1QkfYNoPHu7QkwMc1YbX7KyJq64gm",
  "key6": "4NvMo4PhqGdTMNgESZuJBvC14JWJ28dwFNpYB3D1hw4jo3XHryybnQ2sEzZDZsDa1SrgFSss9GzSQqNueE7qp98M",
  "key7": "4wWJJ2DhDFVaLg57yp6vc2Z2rmbiBtqD56n2UfNKCPWW36vjFDj1tn5u3tLMPWqbVgo6EHQiqCMd1eVLexqez6CQ",
  "key8": "54nWQKqXjbQAGMRt4dEUK189eDt483Rta6XNRBo9RhWhN8CFSNtihS4uLZpjtZ5EjKJmABHBjFhoYpaBFjmhHVSZ",
  "key9": "5oeGh16jvXBHAV8NqeHLviPWzPDvDMy7QJzdKqjvCPL43KhSHdA5wBXxBJEewHw9WQB4cs8eEsUmicFXn3PRNQ57",
  "key10": "3BXqEDuZRXvumRJba7dDTZUcwustXyCCLy9M5ubojZ4vjPPDdQs1MFr1JeCkaGj79Mfr2zNHin5Mhg7tbe6ocVXT",
  "key11": "r3WaXYPSegUW7phXiSm8GpXNmXRU4piQ4N6uiZ5FDRe6rSLYJ56VYb1wUT5Ug6MaAQSLMEjGpDyixPWzKWxe5nP",
  "key12": "2ofYriTVHn6ZbEfzbPfKsYgdvWkq6eG2izvv5xG77viU7xf2zaqWMsmYSCaHcvcfJ2qSvKavPjABTBPn3bg8V1ZX",
  "key13": "4a8HiNiFsZDMmEH7mu25HVWxgWzEVzgjtRbPmB536fXoRJrFPqw2d9Jdh6vFsJLj9uge3MGv8RJG9Q2sYrMd3yFN",
  "key14": "44Aswed4rs1nxLLxokBrBKPPDygownNG56cUQpGhkuzK2ZqkiaV2YWarYGqPDZ7YsNk8dKtgwJw3q6UCmicDuQPM",
  "key15": "4B533GxEjp5oHPjuKxcpM8xhSnX4kidUJiLMu4Tqo6mwTH2cPmynTCBqMKCxCCGYQL1xzPHfKmcd915cvxLa7XUG",
  "key16": "5s5bHKUFZiqUqRtkEntfFmdyhTqDjjHFLvHBNWBVpMKZgE5E38tqSqCsvFD7oBA4zNWXZbevJKFhRBsdg5obrjxi",
  "key17": "2pjqE5mabSdgy8RorFVgVNK3vdEX45FArxgbL9fYtyn6PUYBudAXfhpQ7PTRQN8yPg5QTf3ajFEBbS8nSAdPXsGX",
  "key18": "2NWmJFnRJsmskphm2WBn6ewrBH8m8BmZHELcdR1XjcSUJM5HfQGs7xGYeFcpZnKGGFu2nkj2ioNgqYLcspFu3vqu",
  "key19": "582R5NFWekncRF4zHUmGW5QBtaM97FhMmY2JRp5gj6e7sPC6o9jrdCZyJP6Wt8sxD96at1wB3TtiKDAY5zHSyyf6",
  "key20": "5NZTRHjYZyTHeYM8oSc6UGNYEQWGDfvVRJVM7SsvjouQUBHPT4UhcRx5QTcb8hZAmaJ5DcmcSxHGSjGTZQFkHwgu",
  "key21": "2niTGXv3HTTsKvQDtTRhYXcCKCivNkYU9aroTXQsKGLqZujStqu4Y8y1TXKVmtzaFiR1dq26gu7R9DJ3tVjdBfBo",
  "key22": "2KjmWPtvDMgBJFBFURUsKtpVkFr7U7vPNHrcbr71iRAVthiq2QhfbVsAfsmUErXCCYPWNUVWQM76uW9KZcxKasj3",
  "key23": "hQ97xkiJWRx7LACVqVJiqr34C4n4fBE24aWKKkfhNvZp8MnPuai9ZPdWdmzhqQn7WpENPt5axfEb7tCSd7eCLir",
  "key24": "5F5VhKcmhv2qTNJhWaM951dLZBRMpUx2tM2zsv5KAFuodUtNSbMtJ17Sfc3VRCYTEKe7K7cLpSfV2hZAxj57JfLW",
  "key25": "2iugFSYsYmdNFUFdVKTfwRHACM4tDiWqEZomeigLjJBdg3VGeuTfdCLRw93GxhPbsuFR2chaQu2cw7g6oi4i1RvQ",
  "key26": "2ZAGsWMeL9ZaqrHPhfLKhe4st8YY7SXBppbrPnvKenimphNoNL2dVuYzsCN5UVMpq9U9hiXLAefrT3EAPsZu2sfK",
  "key27": "3Gt3DjHpwgm9ZnUD3a2i6QrCgP7YiZAvfukkrdPLpbDiQTz1JjnAxar99epNPcswSMD1E5xWpei2aJsoxR846fBY",
  "key28": "2KJnKupma9AVvTX93xAxadozhz2U52v1jZH3MZyo643XwiZUWi3tUbVVqVHVZS7fo4cEhSX91n48EyzjSwN1ths3",
  "key29": "shMQFCUhNY3Jya44SGedc3hBH7C6v2VegRn8yBfqHZTTen7qjpKm55i3Gz7NkGzqKnge7rwpssxpNZ4kctFXSns",
  "key30": "4gZWS3KeDtZJj1WzLdmSuwF9YbAvQhQFMgFZi9oiQbiTu3mETWMMAUN3aSFdt6Fpmd7xmLeRfw18wYPDFAWZ4gaS",
  "key31": "2dHQs1ADWxb4HSkiYPe6ZQuadBL5vJABn6L6xEa1TNwh4Sbp1oVCpLbcocw4X4nTecLCMoqALQNnSWoZX4sU9vmf",
  "key32": "3XoDfb28RA7e5N22X81a6yJAaaxiuHqm1nwPVvMxBXfntWpY34yFpAuewjWdrmdqmc5mPkccndwm1EAkzLbFrijF",
  "key33": "2Y2tT4XEQMpuPcy1CgSz6x63P7H74cxicgVyZXVcVMywwoQ5ajXTT7huLwdgsjgomAf8jSnfBm42CZSgMNDvHxAp",
  "key34": "2j8a5LJvaXBYUMxyFXCxxXtWgyP7HhqvubLs5kmFPGFGWxKdbHStWEGexV74APqc8ohK6N6859NT5Yu9YuxUNTtn",
  "key35": "3RPzaJYhvGTZTCcosztAK21LNjME14qbGbjkKsRVrGTNhD3Y1pK3jQy5tZ95dGYRLAXYRi6meL8btW5oU8yeMfKn",
  "key36": "uMN9hs7ihcxnSeRvQ4qqjo14aiawant5fHFouNGan2y8kqSBTFzTuhu3APcKAAyeUpfnVLHn5EaHVPnLkMkTXrD",
  "key37": "YZQHLjNTPgsDsCzh3PGjahw4TsgRyhZCq1oCrSMQpNP4gnX1avDpPkZana1B6WsKqwEaLrSoHUeYtuUY4GWW4X1",
  "key38": "3tFXgNRLZLf3HNQ4Co6weuvgTHwNLM6rTZEucm25RvFLCPus2PpXWbseEMy4CtNFRs3gCKuL4ktt8DsYQeE2hNoW",
  "key39": "2NbeQwdr3SwK7DpFmscRopd3ibxJj3xfPUwep2v4rMexPsVWJZ6ghhvNbs3urUgpYAQgUCUTbLp5i1Q1M4zRziYp",
  "key40": "3NHkVHNhTDX951qYE6LYqxPkMmKFrri3Uq1hEzdArgobgPSqKdTHiQ6nHpeQmrriwxqqfwMaK8G2MagQmdWSzsHH",
  "key41": "KHCwQswPYf6kdsQWpSjqsmTmeBiVzwhLq2gPCWmCQPCi2pVwFF7wA9SShG5547NbD8fdsiRtaMjB6eKyiALVKmM",
  "key42": "yh2rNrXjXHJAmQ4UxXEiYJ1ZtME4BFrvPTfzVtBS83rRyhKhzye6HC1hKiVE6dLiy8PxFcfYwZPheyfsixCfcFx",
  "key43": "4kc8ayh8mSq2EkVgmzaj5whRLtBn4Q6e4na7Gst4GgABPJXL217ELh3Eu57VAQz8vdZwQ594BeqcDUyg9RnpKkp1"
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
