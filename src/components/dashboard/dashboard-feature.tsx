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
    "4RkCHngdEvAUdUXu8y4jQm5icVPfjDynx2pMjR41KMqioHhH1es9LkQQT2SP7WV13NJ83bUD3M2LiDNgdCZGfULb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZdAio9XMGeVrYnDrLkBLDhNwpLrUNxS18DuoFgoAeoiFseLFkaxpFdh2UTa9eQ7xcqQLNQ5TnpmdhG9HaUyszN2",
  "key1": "54XT61VJhogUuYgquJ5PNLQcdt9tvax2DahSfK5mWpuXTACTkYEmHnbaYZnDJSCjS6PaXx9Zuip4TVWbEcquR1MD",
  "key2": "5rhaeboc3cPaG9gS3HQSbYcP5wGGcMUXHwpY783A9xsdgDLfyFntpFPkr2U4BmJ8unkKRRdmzmrMupYFWWDM9iZh",
  "key3": "4r1D6nUpYRYNbF8VBvWn6MupCH6dwUjUNpM2m9uBo2RTEeSoFYxrtGENtdJtXFyzfE7ToeKdMqkR8uPzesSVVPG3",
  "key4": "3t7oy8d1f2jAJtubasYWo1t9Kwr3QsJ9Zxgc5Vi5BzvxVLNbCCC6G8V3UV56jLnxWAh6nRToM1KmNr6me7DzNWrA",
  "key5": "4KUJkpf8BMSYHwZNEkEPSv3TU8mVa3GcikL6q7LxrjbGSx5QonKaFunnWwDifxJezw3ASChYbfkttgJqm8TXYTgv",
  "key6": "5CDRrcvhJc6YoxNcrioFocknQtrBvjgVswJrRC1J4jBdZsujFa1GhPvm48w6kLSLjJkLsrnQtGRg6xyYSivJuB2D",
  "key7": "4nqB2TSpy5AaQUeTAW5ivb5qS1WoMfcC8qg5A7ELxAmd9pTrzrzHaMpM9cwKgqQZThCWNvxZBiJSFBp11qhp18qv",
  "key8": "5zxQ5N5gHmwPsUnshGSiMu6jANA5HUDyoButbC39jRKf7tD6bnuckMk9zDXVqr56PDHnWA4nfob1KPWfixmTx4Bx",
  "key9": "5TRmSoVNBoAW81vzLonudsEtYQ1Khv9WHf5kX6Lv6voii5fghEQcPYMp4artJwQJQaB2yQXd8EQCW2Ai3fCug5Wv",
  "key10": "3xVoEZNarJ2X2askH9LabXshmMfjn4AGdVjzTQWR5xE2MoRmKCK8NvE2gPCvu26oCTtjCYbUyPnyGePoZEgWmMrP",
  "key11": "2yM613et52hmxFkAPQX7sqeaJPMoGbmPAudRthocmgMx9Z8Q2Q9rA5HAkJjgDei13RFvaDEYQM4iNnMx1SjNTvCf",
  "key12": "4YQVRjKZ7zwm2BPSDD5jwfj2T9zyb9zUHe2FdwP7cAdPC55s4GQYb2x67yCoQDs87k3QJLVvmYCgLWA9QrKyFC5U",
  "key13": "ar9XBGnnjRmnmoi6nrJNQziwvhkX7GBsxRwj5AvCbAgWmmnZnqSPHGTRPMsL3JREXaqCkvHnD6WM9K1o3skNsP1",
  "key14": "UCfT1eqHvSWJB6Ypzwcr5fzvwjjUx7Pv9zoqPqWqYrSU8p6ypjgHQM2XFrF3rVeCCcvUQCbqjGn34KCXwzvqBkA",
  "key15": "2JqGofp6gbe7ZsXA3u1D15xyaMSVVJ9E4ZYeyANkriCqh7DZe1Bg5Jqs1zegkHiaT1nLAkpVWxMeHLAwCN5fyhFh",
  "key16": "1z4fazUtzhdPzSzZ9P74n9Apu6tLP3eBXQNZK1BDdn6dqyFPS54AdLvbSMrkirYKF94yQWq7rWrqpBhhiJKR7FG",
  "key17": "22pY3rqRpPAcLWvYTuFWuZSC2WMCBvfmhmw8EZ6CZWGgPpnYZmVYTbGrvSkGepMZfZ5omYxEXumc9dmQp3NKR5ka",
  "key18": "5fHtYhaqqBqP2GqmA3eY2w21LSsreEPpZTeYhYc8XGwkL3vFn2juQXd6s9y36aTd7HNLcLE4FUrKJ99wFJDJAY85",
  "key19": "3qGYxianNDTYE4fNFFNxSzeiCLtdpsBcrHSocouxEPDKPbSi4AuRHZCqSUmvCNGJ68gdcbLFSm5zR1gSGpFAJvuL",
  "key20": "4BkXnLydk4c61XqVkJo9mD4KKin5ezNTNiBaoXZazc7rzW9ijqfEG9BU9Dx6qDWmwYBhzoEZTzjfWQERNSG9Bayv",
  "key21": "5LRaac6UnXmjdW9Agr5BTKoPqY5qDiZkJwKXar7Z78WY4odWt6o5P6F2Dg3ES5ci6Hh9AH3g3BC7esK9Hii1ePBL",
  "key22": "4uAE2J9vmd5WpFn6AkNgge85nxTPj4pWjvza1vzWXixCw7j1e1Gv3UtPc1AEK18h8bnwrPa55oEPopRrEysmkcBA",
  "key23": "65ztN3jzZPjrtsg8UirM8eMSYdoKSxMAVNRJ78vzdnBEPvrKmcZdPiWGMnmPoQNeerhnvS1ZQmTSZMeVDy3bAvGv",
  "key24": "3zDgaVHZhX3dzaTJ6LPCqDCsf4WoPVjWVtMDgM6Jbkp2voxi2ATFnGaoFyZ2CEJgCnZSrnZrwiusVhUiQQ7CycBD",
  "key25": "3YnaQqWwQUjGr7vcVZLE8TdmTpkTudNYc9C32ccetHRc2WGGmu5DwJdJZkvHRPKBQG7pR4BuvGRkh16fSkU13riR",
  "key26": "4g4nM38EbPbafQeJStp2JjakH8esqcdhNrpNB4JQAQcB7qxoQvi8AF7x2cqvCVjXdbFRQ1jhmSG4Em22w5jKQsh7",
  "key27": "48v7QWmwh3YjEjbgKWKeVJMb3R9u8so2C8Q1vvxGemuFPJTqkjLSgR5qw6C3ouzYkGUvVRymibrof3p3tpxqfWog",
  "key28": "3iiVoEm7NsoT6x6ubM43W7rR2rnfMhRSJgdS8jQ9tjxLRgxh6VtBWM4HNd8tjWgsPTzWef4MAnhibbwXaJ1dCXQV",
  "key29": "3DtWPkiD4JTUnsVXx1YK1ExwT7qfWC1nAPzoUJusSRdPiBR6FpBG5F8vBnUNogkyvoiTgVz9kQSSvyqjTR8NxxhM",
  "key30": "3uUDPgh8JBuwaEUbLKt7aqCWK3YNSsD2cRsK4s1CMLd5P12QxfV1WFspmoFVv1RGQjrUgyUzLJqGYt6BNvHyJ9dH",
  "key31": "5zPr5qXDJ4TTNK1qBTv8TNzFh3Dw91RZAjEcSYAJ3n7SCyKrzyDbqG1sBfqFx2U7jXwvuDBr4gjKPfYiwA5E2oqY",
  "key32": "PSPzhcadcZonjZvr5PTD9eBKQZ4DTunrBSY81DuucLhpjwkeGarKjx1KZuWZndCxnSrdnJri8Vo2hXXGncs6ZEK",
  "key33": "5a5AMSWJuM8PSNbhBgYcpZVpeLd3fzDgCjbxicabfqSA34HuFcymsKHRLQ4Msor2V7xeYbwWy151VQrBAf3Aeog7",
  "key34": "2J5NNMuzvic817JdeQcwLBXvvEQFCzeyudF3tuKcwkMMft2nPPn7fnYHTMHLVfhWZGkd7kjyP34CNu6k5eBm3aKS",
  "key35": "5Hybs6MKyhoC3h27aSAyQhiQumdTJ5aVc91E97424MrxEpWUQVpYucPvJhEmaSWieGstxwwRGsypsAZcyt3FX3G1",
  "key36": "3txNtg2W41qcHTqDHSAfGw7iJZteuhGcoW3XMQZgzAfyPHKajdNnj8d4zFjrRoFXPbp6qCfjWMc7u8a7HE8Wmw9u",
  "key37": "5HUjWVmqy3sFCYnxVW3Va3vogcMVf2YtauHXYgsqCEXjPnxwa195NsekX1oUf3USmxbsZZevgGTExbCWi4hvS17d",
  "key38": "3HizBCW5jDykJ4waY5XTZ7xtHXtK4y7gYUhp8vEQFYJ59nZXkYN26NVgFhad8Np2F9H2K1qGBtwNxbjd9kd3MkXB"
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
