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
    "bmPfs2W7QGQ4TLuUraW9NyKweh1x9C7vHXTekqdqEWk2kYJX5mWRb518ivZ4yGXsa94JFomgAv5ZXiTbUh7QDpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646nv2kc5yqf9DXRgcJk36Bj8zCa2peP9L8nJqhbesBV8Vpm22mE88r6hYswYeHtaVZbLDrQa5BXB6Xwn2wqd8KV",
  "key1": "3MCJ9XwBd76AnLEEZhrZJE1TwkyjNDrMnZjVV3fkysH6r4jZ63y8eM256DFq3bRsotX1EQJdJqui18khBTu3msSU",
  "key2": "5yoCdeUCvtFrQfpVNKqR1zY2cZsms5TnrdsjGHH9iahEhaXjJF5PnCdZtHWpuQH578wAphmQ974ncGXyoUCMJDFc",
  "key3": "3snBc86o4Pc3xa82KiAS4nGyumTrB2HTcYTGkwWZDMPbxFKXKVVkAfFCpQY7ka3tJ4tnWe8NYUTmYhS8K3CaNqnt",
  "key4": "2FgG9GfnfmoQo3aL79y2xTfyiihqtqi7Rddxco6YbDebap2GtjBWBA8Vz8rjzAQGrd5ijZiZ4ibLzEcpjh7jirTH",
  "key5": "2XUaceEW4r62iDaUY7QYgXG3PgHfRKqyA6DLVtKKvxBSWJmLJaw6VXfbg3yqpFw8HygW3DF885cuazyH8LS3DReD",
  "key6": "5KTnomgk1XkTQjF5vnKArEvTzapipjtwrznNdy54kNyz2NSyD32n8JLUxm6qSHBPr6TAKjAYENc4czkfBLBXVrWC",
  "key7": "26JA2NAD6bZsL1hJihFyVxdQzpMVxD2318ebmoDNwmpdeyzkcsnm9p1rtr1w4M67e8evdaoYzYz6ck1avfCQBaP9",
  "key8": "37WXBS3AhYc1kNnskdnb7SqJhx5PwsUjxMMqSZPYr1M2xV58RwgsEBr8iq8jLnSHHARqdhtEr7btFYm8dtaGt8GW",
  "key9": "4S3nDWiYN7xMjRcoMqQAcsHJWkG7ByRHFdqRreGHX1zJ4EP9hwtwvRL4ZByCFTYuvgqgYrnTGzWDKajZrZKhqTfS",
  "key10": "2ygbUFpGoXrgd6WTiGD8RQ6EuncfjrhUhLTA9PGLaghFh1ZR58S2rfibhGcFpHKM5pquLiwS9JaHbjz2qbbJzcJF",
  "key11": "XNiDszK8twoc5ws5xSKYzaFbxyJ2h6vphv4K5RXd5QU4gA3KN4eFQkvUfBCx7cUdXvi72vdWog9mi6bwGKrWWcb",
  "key12": "MM4aL5aMmVNBYVnGq6SsX4LpiLy1YudcibASTupMfHtNZaNCBprKn61RAhoH1ecx4D6xQLEDB43HfShFbKWoid3",
  "key13": "5A4Uh2ejxZFR6uarzHMTeGFE9Ri72X9pbL1UydgmcesfatWP29hnt5qPuBxBtwBcutEJFbuSxnBk4EXaWxgXcimQ",
  "key14": "4YxKNt8zBe5ZpoAbYis8s4yPzAuykPNfHu1hwQg3nqZJhK4j6u8zsvSY5uW64FVfDnT6dd4zt1RMSBPCq96WapEY",
  "key15": "4gFY6HU2b32h13247ShxbH74UiwKPZXM1RGNmbwe77qwNVp1gegFkX5iVfMz4t8xuiv3RST5RkNnQ6PczASEmN41",
  "key16": "5psQdkpzmdGU6G6YGjNio44UibgDA2BDezCXtaZLaEJLxMpDm2rUwcEPkiURX2fzMeRrzcLUbigSM8z13R1w8PXw",
  "key17": "3Y9Zma7dNRgTnPaTDvQPWDBF6oyU7aQq3E5hav6qrUXjGL1HQoTzdMQf9A54f4xNdbuXUDVBPDuwjEcjgeXupVoT",
  "key18": "4pWxLy7ozaPqvJJ37CpcwqiViBFHUCkT2h4PYNuzxzBQ4TJhYUCQnDNkZnx5XUY2dKZSUBLa5f5NkhaGbxRv3YE3",
  "key19": "5CDD8t9fKCvFCRnmztU6fEXGadpwzwobC2293eEdgNmUYqpnpeHWwPGp1Bsi38AvxK9VXZvJCSWisT1rnnCpp8gr",
  "key20": "szCkxUCLoq3gysoRgxiTyqLGS2eXLGiNgSvH4gsyfEtctotdMm4CeQLKMCbb75iqabPoGiaX2BT6T4VWyhP7qLq",
  "key21": "2ZX2Wfutyv69is2UxFWRfZQkLhdW4E7TiedJsReZ2eXgWPZFHEHffFUi8WR4UMYq7S7KwFtE9ybgkqM2TCWsyn5Z",
  "key22": "2CHyuwCutYiHKpeLcP6F6Pvvqf7pTRCzByyJpWmhiTnNyTutnjy6ea8tfvDhGepNYeHUiBNh1nmD4wNrrT9tXZhP",
  "key23": "aGNHB15d6mUi9gbWcqMCGkX65uEmakxtgcEf691YazQvFvjh5HTSQyTT6BRqzsoDNt9EEaBtters8C1BwgsgEz6",
  "key24": "3mEmwBPEw7bTVLtGmp7RvzkEqdSbqMfAeebYU3cYYxt4p3TwJTu3apBHHN36d2tGfCNKZPjRMXTPzk7Yci4R65ff",
  "key25": "2C8BeZmUSFjHUuS5pHg1663vkSzknJFi9fmTRFXHns3obU4KTkt4ttHDqGs7FoFydZ7NpTNbcbmKKibFE8FdSAQq",
  "key26": "2tUtPqc6aMiRayxYZxTKw4AtrXZYPhH3zuYqeiNhX2q6ZRgNjSWtknQuZoyRswuu33GzWwptBFt46R31uxwuq5xC",
  "key27": "2uu2HjyEtxyRAkRkG2jBAdoePAxKJutKvkozDa6AUqDtn3kSaYG2BLTfiSVPtJQ4UspnKayWLCuntCPZsW1hxh9q",
  "key28": "2e7ZnLCqjYaDSuoR7TeSK3cDh9EBgVGcAm6w8WftfQvb8PuqrsooiByhG6yqTRgfoXWkKDYMuYxByyvVSBDCqB7e",
  "key29": "21y4m1EEZ14X4dvwQiVjEXUQcekHW887uH7xpLGw4Q8K8YncHGraicV9GXrfA6kGYJ5mvp3wCLXhno658hbG8nVN",
  "key30": "5jfdi3cczL9C3aFPxLqJJbTRVF9cGthc5mygGuX6BaneGifxw7YJ4xWa5vjG9KKuYqPKjWpDMSBgVy9HdQcq5vCP",
  "key31": "QbQi6KY78aDHeWAZFvwJAybGxodEkSwC46y7VkJ7CZgMR15emrSxDB9RXTxHqYXZ5FtkQufhbofPFRuuyAyWvCg",
  "key32": "2G96P8guR4w9jgTHAaQjGKi5VJxnr2NNoLBPhccDrKznVMnJTgrkNAqsEAytJoLuhFgFZg1CduAPkjGGNng44x3J",
  "key33": "2pPT7X2i9n4ni3j8tysqHcvJz9B3JS1ZcwTXqBeuEKUdHGd7Wfi8UN7d668kCq1wSnBWsGudpxeV15FUbeUiHjzJ",
  "key34": "2sBQQUuR1jYa3D4ujMBfB7Q4T9GsFvhBwYLxNQkc5kmudL9acFE2zjXRbBZA3rhgyzzS7MTnLjFmydboyhkUSTwL",
  "key35": "34kWXLGNXjj2aJe8BpWh9qX842gFwtva8K7uVkNNT6z1LsATtStAjVRmdzGYUGRJERVHd72R7iEoNYZjiMuoaR6G",
  "key36": "3nVyZjxS54YaCJ4fUztjAjzcuNXsi8euWFUGpKFJ7XLNHeUZqvEyNp5cwwpYyNuQn2w45sUt3f5bhnf5vseWCZ2m",
  "key37": "3UZv96sp3LoxtwE56dpACeDrZUtNELxMs9Ytr1TfgdgpCrdUPTUarbksugkm2G7kY8CSYCP3xe1AW5fiHJZeELrV",
  "key38": "2nTAWiFQ4EGqiMc9J94wVK71E9pLMB9gjv6PFQspHVndysjd8ES18dGbbERDgCePTVEKjQFiDWwRqUiE5WQoKZZy",
  "key39": "SP4ttKpCtoTQWYHQDRYuHN64zS91CyNKUUNd2Lxr46vYi6GVk2KJdNh4ibGmGfzL5B7t1ibH4LF5ck9D5dG8t54"
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
