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
    "2JbxTxAWkK6JaY8VZPbgzehJvUbzFW99tFpYHtvg4ifpRJbJhoDzs8MQETyH3MJdGNej5paveYKJQdtoRjeYVhhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22NfZsv3gCky7rZoUCjUJVgSaqkSra6GWmC1buV69dvdYe1smBg69KSxaYEsuvaybL5GY74SFRdvtb6hmRQh7nhp",
  "key1": "3EJuvae8odk14E34nyoDbyAkEK9X1LozSYSiG68699fqeierCjwpNkRFggixmMo3r1HUxAozv3RffhGVDmoR8w1V",
  "key2": "557RQULSF4hFPoNF5SFVPLe8mY4WBvRST3L95ynUiubU4tSqp8pivakFU5AV29TjHHbnGcgn9jR5PrLtimRZpG63",
  "key3": "2rU51TgGuCAzp4BpS4bhgxRE7zCiRiYSMZoyayRWeZEJdhip8WbVFHrs7Qq8YYuswsLyT5sfNG47iwrvXyMqBFCs",
  "key4": "3EFjr4tPvHhCKJTAKq7TDynJY876HNVVxNUnbuKR2NK7XYnHBmsZqViVXFKLHf6gFqxn4u6MxVTDACfF2oXTbbyK",
  "key5": "KNHnUaLztvvrTJjjuykMwvXjxLJWXRkkz6VkwNJ4Y4J8i3wc92YXTypi9aCBU4RAQuE5g8sc8gPqNFzX2hzh2k4",
  "key6": "5SyFZUXG7mPbdkww6X17evWtckBR3ULFa2qw93pKQDf6QSr94pdr29Uuz4zpCfK4BoAaAsUitn3YvzqxG2dnLcj1",
  "key7": "4VGyDuAny7qbQCSLeZm82r9GThqFFAvM2PyWz84RNGePAYPoW4GAu8gDrSeCiMZeXcuDWGVzF9ZdNjc6vgDN6vwY",
  "key8": "vZ1jWp4QqURrFGmBwKYQ6Tn8o4gVvk7tqNqmA37fe4AgD4XnUCAmhmHBrDK6dpAwE4t3k1VTVXgTsHkNmLktEib",
  "key9": "3sbgkGxurhCS1btcCRfGp9g3nAau7RBvN2Ch28gR6RyDvdvoFhKpvd18w9KHwxHPEXWJ6eEsFR5Q2sZXauzqPjSd",
  "key10": "4dRpqM93ABNXaTr11kFhYSmASHdR2sJ2CKDw4xbuwKvyA9skJQYRbVYqrEEUHZZiQhGaVD63GP3M1fVXe1B2JyTi",
  "key11": "4Dm8n1c215LUiUgs4B5UknaabnNRSDifbH3bn1wTaPuUGWWxARqq1ge64VfnbBgUvenEevZzNiLQjQcRixeswRPF",
  "key12": "2iszXgkJkgEB22ukJtuGPinradZxZQW3zbMpsVEn45Cjo8587BBCBxnHwi3vGhD6Ma3UTAA2V1CZV5NZtKotSDoW",
  "key13": "3LkwRCjF2pfEG9M7LTpVevZ58AEKt1zkVzxW9v6FLdmMNkzJSCp5VKvmnqeRbWZetBXrEqucb45YYNcTLQU7hCBi",
  "key14": "KYEGNoUPTAiBZYJQvcF119tz1CHBmvkGtjqaZizEKcUnBtRgyoKWyh4UZP2B97gpaZ3gwWAJDxsR9VdG9JiyhBS",
  "key15": "vqj9weFvDYbXZYfDV9dtmdyJKSXfwe5QRSoQPDZNQd9V1gz1TcfBsxVXaK8GHTgxwK2PrphFRuQ3DHv95XZVZ6T",
  "key16": "4aVU856HLn1Ld9GRToQwv4sT8uNtzBRPBiTN8y6YAZf4H9nvEpBfP482A2yP2xpqTFFCsQRVRZWHbrnKX5jDXfmE",
  "key17": "32GZYkrfPAA6cGC8hYeYkhsThUdGaSXEK4MHJY14X3a3JLSDLqQhCb5oaMY3SPtJaPSWDPHt4cfAztTDcRTTJ3Ce",
  "key18": "3Sjy5ABghhcDodaD2kPBDSKV9qiyswiz2rQW8S7b7hqmNLHSRqjUvSzMJpaGc5WtfqRRCBAA9LgKmbWaxP3hrUrZ",
  "key19": "2cDLiDyN376xDZkUBJzqaogEip9NHPJEkVhYbsECZ1EZiqNA1a7XXAmnk7rd3WNewdS2CRuSF3ad3Jzw6mbGgMmY",
  "key20": "Q5jHe4Hg8MjiKnHa76XdL89JKMoLXaAcwMeioh8THqNM14QKDZanQ2fTbgzs1Js9DtH9EB3DYozFL5wVHhukeUQ",
  "key21": "2wEBYisLxvpWtweKHQ4L7igTuw79KdHZx1VaS22zdYQMGMo9K6CPNrCX52GLc6jwqvo8cSX1LNy6ACMwviNqXs1m",
  "key22": "5yzj76CXMkL85pgwftXtbNXCcBKqxUNTvKXbvsW9JdjFxdY313UBiauugsqvX1ayEvq8gStEXJtec35osy5m3pKe",
  "key23": "64Bw5w78555YHCktr9YPfq8vjSsEysqvxgoKcGN3tApCgwaXU5ysrPUhT52z6Knry7DrGgGBAWVTUpDSQPUUuNus",
  "key24": "4c1x8Ww4QhcgRRt9nP9AGyyBxmbfFhky9SH1rvzSQTnrkoxDwqk7DyDqYhjLBCtQBqodgU2XqiqtJTrA4eMeGtnY",
  "key25": "2SsbXmHqpS2Pmuz9dCL1esxJ6nfUfddbj8HJG65y1K3ZXsWrJnmmCrw1LGmjUMF4MTSH3mAuo7VUPSNGehw8YZ7F",
  "key26": "2GbBCN7STkiRxNi9Sz86gopw7VVWHaJtWtD6qGbdivd4ABkoR2ueqeYW3VLYMnBmxEvWNRu93PxJ8LJneGZrXXu8",
  "key27": "AgM19VnPVt29oEdgaWvNsfgzs8aBdgBGdNcy1YwV3WwHPLwxcRiZ6Wbh9DYCoMFELpoxSjToBXUqDvpU3VmmAb1",
  "key28": "3ikzRt9eRTuiF8gUVgDTacX4mesJVpZtDWpzwfAdHutbHCp2KmsV9S6aVsNSFgZPgwGpUCzAjkTArwJjzCo2JxSw",
  "key29": "36VqACLTkHP4FmHCeeYUPNZ6xvkGHCsTC8Zp5TgKxU8ad9qM1uGLy2f4Ey4EtAN6LrxruhzDnogBx1KHmcWU1GkC",
  "key30": "58QRrMcxy39zvqgNHnxarQH7eo1fDXSAGskp2ESf5kE2PAuYoTn6226BkKZpxhuHQekSHugCkUFdesZTRuzZaYXb",
  "key31": "3c5u8CgC8MtXNXJpK62GMvtaMHbP6ThpM1UAExEsZo5xF8tFCTQmqYNYtEW2Nc5pbnq6osgnVVsgueJ2gkgYkyQ5",
  "key32": "2CQSNfbtaecQbqx59tpybsqXwDdJtBJpKzQqUT2GRyTMLLsEfxhEY8P3f5QLqkdg1ZFfeMYwxhBvu36RoGsrbXyo",
  "key33": "3SagUYVqUHYtiyW7pwVdzkwcowTKixJZPnLqtqeG31o2snRbwUayFkYr32RkqW1XWhsBmxuuVeF5E1zW28g8wRZ5",
  "key34": "57E6jU1Gkq1de7mCgYvkHPpF54Tw4aD2mcFPbk2hBwABDsmKCFhvTG66npCEk8WG12gLH9t8t2LFFfaWg6TCrwEg",
  "key35": "43FRwxMtLCSS6TJ9ArWibiHS3niZ5Hir2UcFwuXr9DdHkwPdjqEG9DToztevK9GguRWStrfwWwZQNBJXjjXjNozb",
  "key36": "4TPjNPM9Afxe5DprPFJJAmeMYWxD4u4K8gudPHxSqfqBf2roreVTJUzuoPNRwmrdLqxvXsqtga12smGGbpMyCASu"
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
