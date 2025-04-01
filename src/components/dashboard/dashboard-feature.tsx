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
    "3pjTUejNYv3vwDaEJ9ndyNX9Jgq14Wo93U92iCzLLhkZQxYC81D7JAEijczMFwQqJ7YyPM53j6egFy2CrVitcZfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLeAHBVpHMf3VNV6W73yJDr21SPAWqZpMtYNpZcdByjAuCPyPiY1dKdyTKFjKpFpZRzqtG9Za6wDa3SDy6JJGLn",
  "key1": "47k5oJUp9QSQovjYUxoUbG3YoVS2jznCS6qCJvMDgEQzB42zCwLbG6sPcStK21TVaz4mtZ1CsZgrzwcbbWemPQj8",
  "key2": "5xJvi9YDMyoQxHUS1qPrKD8emj1B8FDVwkjYe19mGQbpktmGFgAzxJGbH31ydYsPWS46ojsRe14jLyoXpZADKTWJ",
  "key3": "2JTRHB19Td9P1J6mJeY4vr5rEXCJ3vyzXBsWHq7FN1rXj8kpffihX3rcMeRA31dUL5o32ybBLab3opcJGkALnEJa",
  "key4": "3xU41ZdGsaYLQkBu4Q7PEvoNn2Xmar47n5qbhe16tmTM54nco9my9UHtwMFKQs1nRTNqhx5HfdS4f5MCkevymWMw",
  "key5": "3g4g9ccjntGLAiBmCQ7hsoWrqAhT54Hg8YUjCdGAfUXL6crXp8arr8aNVUnksxfvVbXJ5qwpyEhJQtwPj1FaKyLN",
  "key6": "4L5yJ2e98W67oVsZtsF9nk7ABiKLG7uZaPjr7yPLgfLTNTh6ZevYDV7Frjssz9B76xWJoR3d28AiNkwu1zNHP4xY",
  "key7": "47dKucCdQbGdYpVrV7EGZPjcJwAuKGYkpFmc8rQRY1d2Gj7CGFNxP9h2MaGenkbFsnWjJRhxqT2qMHDGe4Y1CEkH",
  "key8": "2yw74qHWQerrePnDqhxSM14ogkxGuu5DzKbfaAsjeLTHK9fqKHjbfkHT8Q4KEaPXC15Z7UWVk2DmbQ3G8oNhUDz3",
  "key9": "4LaMBHjeZd9hoycXcjDYDnCaDqNfWD2BJ24DwrrQTqDLiHhuFW1EyNAkm1j58uafHDpE2Gb7fpD5FadPVxEFedP4",
  "key10": "2GZmekbPskMoXbHYFnj6syDgydYfHGRc8tn23fVRYdSSSGHFikzia5SXKbZK6j6mfoPoMxh5SkbPcoMrBCA7YroS",
  "key11": "ofhrR7ZB3QotniEBRdSAv7VH9mimNUtfnbpkxvJtYPcV491NgXcak5aiPqhU2jnqwBAgZVPBBbkw67wachkkRbG",
  "key12": "3t7qTe1pST9z8VynErHTVVJH9f37etZxqkxC8JrePLffGu2YKMBoR2SAr6tc9BHcdWtArgjcMftHNEsc2g9fcEVg",
  "key13": "25K6BVLhfuhJwFUtkgGZBXFcnrU3dZC36T8AC3NX1qLcv2EJp1bEm5z4ar9wqtH9hKSFjVMZBjFKUCv9yHt9DqDV",
  "key14": "5cQdCd1MUm2mZzDKBBD5K9z1LT9bh576Sok6gVHqKE6w3GifYL1DwGGqDoBqNaa79uRQWPHCLVj4emyvVEcQPEgU",
  "key15": "4CFjYHYgTuYtf63xEEubSAMFCjfPAHJ7oPB3Yu7JhhNyU8ypXVCHT3XbJpuEpqqodiuQXTiYtQKoisqhUpYo4UM7",
  "key16": "WJjugFQXAP6qqE7HEfEajKdvQZivAQJM8VvQsEgYjFupsWqe2R1jZRa8vmXLzAbiUF174T8XfuiL2btW5nZkVeW",
  "key17": "5YnZmXQ3hBJRnVsXKv9yYBJx3eN6obAfrou2r6vXavCs1eKvHsJ5DDReVSRDT3ocvsiwFiV2VXTRN13wRekuboBE",
  "key18": "BW5wniNK1LH2MnVC1DVzjGkb8u69GjRVGkadVBy5DVoMRTPsFTG7NNRPmGfo3ByHNaT6E2uWsE3teezsprcAkoH",
  "key19": "4B715nb9crjqj7CCPkoVJXZiDsf8AAXhxengexxJJQwag1i8kWiJrLNqAHfTzvnhVqfEt6Y6NC7bsyrPJMLpY4Y3",
  "key20": "465NRnDXajcUv5wRkyjGdR6NpVeSdkySS8NXDDXm2MwUapwEHNsxq77azkng1cnAfUMh51R6hkL3TF4NnuX9MxTE",
  "key21": "45xzY16xSEjj6G1zQKRzxXN3SM8MdT9ZczCoSdnKWxHWvcNKeraqZj329CdqevwnuUwtWFduSGhAwoRQnVxhx5H3",
  "key22": "KthZZDveP9zb59eVD53CmiMb2KEUpfnn1zcj9873pphB6BVea17cDCGdMJRNjAdT4z1Nupep6Y77kpYZcLpHgxq",
  "key23": "5118qHCWDVDGCGVpQfPBGSJdgmoZC4C2cqsWirdWWEDBdZTDubkZhiLanZHVRXjWmbaiZVV72JUVt4VSoiVbzQqM",
  "key24": "4EaUTQVrosjcLW9DrbeYy6Aao1JpKvd6miHZQoKX8YBvjdKWu2pQtyjUL8ugX6gAnUFsDy7GdK4wHFKn789KQqhe",
  "key25": "5Z3p58DWxS94DgaVTRvuRjft4K2Q12jErfHkGoAzyY2LAaPR3qtAuNFAKav37Ygz2FsUwRwbViNxKR4YNL582bZ6",
  "key26": "5LdWGLd9Sw2hMEeQo28uviUu3ApK3pHHZrA4Ye1Wt8AkXGZeYBJPdRxDkjcomdGNPLpq7A6QYaaBWWscKmDPCNTv",
  "key27": "5MVsDgkC5dFfu3xNFyhjAj9toKWsTqPPkMMLfUtBZ75VxSqbbZrE8mdJKkcnprvvjDCECibYHCbLRoEqebZCh1m3",
  "key28": "2avcna5LxF6cGew5i3WzjtDiR2Bkg6RGjoKGwCVFgFkLM8kukNaGM1TQCVWNAfijmfxL9DqemBHsv6AHDennT9Wm",
  "key29": "3qPfVF3L6PAWGw25eHSY8n7kjov9RtsWt6aCjBdh31WXrPBG9GiH4KyJYMaLr44eJZkJwAJryNu8vGT8jdDoepx1",
  "key30": "Su59htv6wu4pijF9yC4wRkeRDC6MjSoZ8F25SUyLvsJDnmVxhJpvE47j79QVVhK1pdKwwxWxh7cbd2KvjKcsXWs",
  "key31": "2XrRgE6LfkNPiThths8TLGwXaaaSiHhsTWMejaYqth2HpGgYAwUW1KuzxokD2kd2kTGZBExeka9LmNzirYPV57aV",
  "key32": "4Ls4eAL52V2ybmQw2oMx2QSg7Uo7AhdyvrUFNurM9XQocUgCBx4EQnqUn9QW2omnQzyWo8QahVBNAcdJEcoPnZ7A",
  "key33": "532usACHTJZ1C8GhooFu2xRwjdrpXiS5t4oyNs6qxJCk7u1H3mb57pwvP5EzHkJ19Jv1s5Dmqwv8WeWEtZW3wJzQ",
  "key34": "3ZPP2EVab1FGfPA7ME7cAUr8YJUmY6Trzqp2dQWMNWnwU46wiAnxRneAJ5sYDf48dcz7oTkkTAYCRR3adfQjWZXb",
  "key35": "3J4BmnYux8BecnvZVjWdXcgoGVvQHcpVKPRAQdr2GcZHW2U6vcFJQTF6czNQFXbjXYGvwWSozJz5RPTGtrZDYAj",
  "key36": "3ihgTg7CMRTrrvowDV3ABWL9bzmZDksKpSjT9gLEkrG8BVozaAYJcoTdvwz3BqFA832EpAphPAGFpQJGJmxcVoh2",
  "key37": "62UWgH7VWFge5LNHn47DyaFeezTbjFYXiwe5MteSDYbKrUpbRUFm44cSaNwYfYfQj5Q9728FJwPSgwDyJEVtMe9r"
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
