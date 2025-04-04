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
    "2YYu2WMQxKkg6iGjTiWc7wJDHLRAmsR76bMhPdeySdjF3GgTwUiW1hdgHvMJEurfBLoNtikcdawQurRHyWke5VkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9wtCYUEqA6Dp1KU3urz5Tyu7DvSFdBEhRzyKMgT61B57hKYebNMBRJ2V1XPpQA7rve6zHZViX7r76kxg3Pb5An",
  "key1": "2LPpBZp4mGedSP78d4bCSCMF2R54skywMqarLrBJcZouxYCBR4yiaCyaPRjDiGR7sD5PUCMouFtxJky5ebpweQGJ",
  "key2": "2qtUfnitJYroMPvVpPtzUf1FvHjGndkTwq7g4dsBVAoQofYeSFL1BD8gXAMUYktMXXor3TXDsiyduW5cbrrCJmPG",
  "key3": "5SD9KF3c8aGLj9uJPZsSyQEbyY6ht4BvZNJJJTAzgDUX7BVMNPEigVDpvSNTczUNdd3p96bTqQCtBCqL2dXmy28u",
  "key4": "3jUQt7Le34V2QNMEHQqZhimvfQvafep96nuNsbgdswcg7Vw29kRhhLiWGfxWRY91R7QH367R4d9wSyf8khe11h96",
  "key5": "K9Xhg4jWkcyWmz3M6rqnecC86SuCFvXpmtkrrmUADKzKunAgw9khHAEHr8RJKnPst2ZRg7QEPWwksUjtr9VVTZc",
  "key6": "2yMTpEswJrXakCVxK2qUAEYrNdQRGwgo9XETpmCFmPyo5F5WzcDY8GNByakKPnTXMBDpZVn6x3zci4zP71YS2qPs",
  "key7": "2t65RTHrqVZHc4X9AQB7QUqJrzo8SMi5CB87TaLJT3dZrps8JBFjjGR97JeeFbZA8Hd8f348RmW4TQE7gFVhjWcv",
  "key8": "5TTUijkMFfojXJbavbm2WuY7FiYccHv7EnsEtG8jkXA1zjoQrW5wbpoPx4XU1nr7G9RGWm6rrRu9PRDgRRfFjH4U",
  "key9": "3UrtbTPwrYxCG7GUXtKyuw5TshfRWnSQiMJDwutcSFzNq1ezNPdfuFfyFXEDepJRW4TXsxpyC1QoAvZWCecvDm4S",
  "key10": "4JXvSurXndtE3eed1Qdaso5wvrfWpJwHdzbcMh7rX6fMsZ9y2uGsyULEPiRkejCx6KfAuRQPUzuV1TeJJtFcXf7k",
  "key11": "4Yg4h9PbFKkYKscTbHjWNU5bDSbnz7bArBHzqBnbKqyYWdq9fJf5oM5HtHFzF6KwQhSvyZ8K2aBXDRsA9BqxVGM",
  "key12": "2Au2w9S7v9nWLZLba1E1ZDRbrzWBqMzKL2URA4C7xveJWcwnAFFs4r3D1k5ATJfB5VipjAG1g2BAFHHVW1ut4ovk",
  "key13": "5ir4ZfB8Nwitv5wkvTkEGbEiXRhXZT6REyWm8VKXmpxg4QpSUv4jzRgW2RYag28T7SpdrhDxbZDCTBBsrLEyPFVs",
  "key14": "24vBEB1dEZdL4SnCcAm4g1qgJRpCYjgaYT7nvqruQAnzVs3TNSAGJv6DZVkvB9fExgFZAYuSYem6SjABXTBz3tpn",
  "key15": "3mB61VRCuQuomGhrARDWhQbsA6WSAkic5F16EyWo8puaorqtH9XS9zoz5iRYT5yB3gpeo8DondE2Jm2DGSHEpo2R",
  "key16": "WLLshXJqM3v1Dh5x5bqWhJRp6hN2wwv3Jif8c8DDUZNJVXHJYUBrFjTomiCqWzq2PqmRmJ17yxS6ZZCMGRWfP2b",
  "key17": "32ahiWVgQ9vHqtjXPKijWUQpmqLs5oCMBK4XDcHt1X4i1s8xbo9nXG8iSAczYcWBL48hebiShFnSQkKL9xUCtYMz",
  "key18": "23VtdfNefS94C1kr6Te35sz6iz17xmRgxjzVs7vLWVzJ5xZeKdGMdWG3GiriU3WVAnq7Xa9M7KPhZoGhPACr8ejj",
  "key19": "2fopLNtyYejd2mebUSZwt8135spTGo5ZwYTsuYhitGhFX6byWWSLXswGbsELqp6xiXw61iM2uPYFWAM9VBiUccN4",
  "key20": "Dx3TRU2cZ2dZ1HdttNiwC9tA4ApkiHLk1uCbggwjHYgdfWXPNm945Je3UY6ZG3ezJJ2divXHfzKPZ5E7C42b4R5",
  "key21": "568orGbgwPw6GbF3PnjaFs9pbTye8bLB6iwV8AYYeQLTY4w9VRYzYLeacQHgRnD5UQ2s6rdSDaDLFZfZJKoJ5uSw",
  "key22": "2y4JaWZhMYr7LnrTEx7smJZG5gLnZsCDqyf7WBeatrhGjZVxGsywpYwmCRZmqVwjGGj3NbgE1dE91yWMYDEDqD7b",
  "key23": "4wt4zhoZDG5XpKew2dsy4mvkpxXjWFbUrVWZvziJLZBqD1xFzRbnr4iZjH3r1nWKY78qKbr4GRjkgMaH1yyXLLDi",
  "key24": "2bFjPELghu8revv4WNmUXx1PEtUpZB9k45K5FdgDmaWqQdz43QTQpqkcHdctCyDuaeo37Er4MMceX79qJHc92oV",
  "key25": "B2fuHcBdU87u9soNJFUEKLFJqGjfFmtJQW3bYhNjF6kcj1USjAdnT5N6L85dCKt4LTy6FMR5vJQ7CosjnE5ofUd",
  "key26": "4waxMTNBaMCUY2y3nSPDDpMKGf2vEm4u91oDjCVrD4aQaxkP8tPV11h6D4wANtWUebPsY4EtbJdvyp6368yUebSn",
  "key27": "63HRuBnrSEywsJKJb4QrvPQULvxCXrg1ZoExtkh2otku9tQwgr8JTqSRoVH2qsf3CkvMqXttZWe4dN8ozwbDJJ4",
  "key28": "5gX9ipQBx9d2T1WrLfrr7RrEBpKa1C9LN3cA48LN1F13Y2pPpcoeLV9unyU2GjhGeE8eF1tDHi8FzfB7CTn84CXP",
  "key29": "5PJVonguvdDTNsMpVMjmcAeVQZJVTStUQjWptnkFe1YwCZpyJ4eMeRian7BkNgQoG5UyJANCwfjRjygEraFrac5M",
  "key30": "3gh7HWFSoGJY8VCRuYavNXGHozqCuTK5PpGBbdRGv1upKTWoJ8uJ62SqEboFmiugaG9Z65SfZNmp3nzGFcWHLPK9",
  "key31": "5uKePqkRVLDArrWQqgH4DjW7QarBzx24dUvVmCkKHiuvxJa2zceV3aWXQmRARbYgf6RbCe7MghBZoeoR9i9ziozv",
  "key32": "2J1fx9Zkhzqa5erNPwe5mPza95w4eQHwj1qBcgTFpsdv8jDbS9153wPrDnMsQPQaV7CU3Nvkz8SU7TR6uqD6wwXi",
  "key33": "39Dpkw8SDRXGXiqWxrkeNftdveoAgbwok1PS8tvrJXQSfw7VHBPK62TSezH34AQosMN94uCiJM3jG2dyE35JiMxU",
  "key34": "3ZEoQs3CU2BSZVQgHaoCvZ6FGcPaC9EhfdAs58SBX7biZ9we2Y1NwpM4LBHCHQxgvdixKvVwiZZ5WhqAJwabe4Ht",
  "key35": "29MjBNBH7h2AU3kbyYZhX3ER7kuusc3SiL5R6xodngoGqEntpBgvXpbrCGGLaxoPBb5WEVDMu1cMip5wQoet8es7",
  "key36": "Kcb7i1y9t9jKthF55c2D7JbqiwshyeXbXN9krAqTzFyEV3s52an3GDvtdyrrFumNiUCayJYcwAKsxtxtwLfKHMm",
  "key37": "3DaYCPf28TWfWh2RXWL7Y8oGU6DzE5szYGguqGAJoYi7W2GRaSVerpMDUsWY5TpPQhwvwGFdXHJ7aiguem1pDxCg",
  "key38": "3mUYkXybWnd79PhTDxs27BYbKABKc2q6aT5z9WHVYZ3Nt57epF2pZAYfK4Stsdfpktq7GSjdBxBdPnCwJrrkekvR",
  "key39": "2S7CGZJa5MaJPNCZAx5oeWxS3AXP8D5DLNxaTYKrprpELXoMiS8X1xhVYWrhdaxUsQbKDJyzqWcdN1cWMbHzq8Tt",
  "key40": "3h3XLm89G8sdtDAPeFrNeUVq7zZ9rq5EDDqo3ym8YJG7DFDWEwB9tCmmysiJ3fp2zLqRgBHbdUxdM26J6g5pPj1U",
  "key41": "3hynDXvw2nUEnXqQDgu74qDxHEKEHmjUN6rrWqdURhexzaVdwpBZTSrDz3XMJByhhdx81w3xUp6C21ykYqu5dLSH",
  "key42": "4HFpiqJQ8ZWFyxrat3UNBr5E6PtsFzCt892N9a2r7incAX975drKkCJSKSQo7hCcKtHfcFRNQZ1w3rtX7GzmS81c",
  "key43": "2MxBAEUG2Ty52KcycisrLxS96Bd3L6ghavYrrDWNd5DSML3Bx3qtLVyuaSHPZxrf28ruvZA2fYCkRJUz6tXk3MK",
  "key44": "4tsd6CZBPWwyLLuA68tG9ZY6CFayYKGFcbEs1RgHMXUvJH6tLbQJ4eGEMMtpJvQtxfeJ7y3J8q3dB6tMyDfmguin",
  "key45": "3UGgeuLghr9E6PA3qRrd9xE4baB3Ny61iNp2owEJAFCEqUvhpjaxm7gs7kKz93YML7cAHieeJc1icpMn7bsDxHe8",
  "key46": "3kuFbYaAnrFwQAfPzGY3shXwVqZx5PxHENdRyUgJob98TbWZW3nwHncqADXXTs8nGqxxoszizje1x81THeEaqz6G",
  "key47": "uRGeq5sE6CMEdFcZeXycbJ2ZEk8wU1v7CYhVNvoA45gtmtQeEYg1cE5RXAgYdQzSYM7beuYQL6rn7LM48o5ukvf",
  "key48": "3LmxxxhDbymvqdfRvmeAzLWMHRy3mCSnVq3Q7RnJyA1xkaPpt1CaP3MxfUBLYgTDdF8D1Zx7Ved5cZ9AjANd97Sh",
  "key49": "4sBb3ZRXUMkCseZSJXGq6tw7qT6NUrFEnn32AvuNv8cYdh6ev4JHGLHW5kLiJJES3qKTXU8j4hEfouq8N8h1jHYC"
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
