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
    "5SzqtGZwv1HUPQiQ2tkKtRRTUnjqqFguQ5eq2TGoHDWKYKqq2CMAk5mUNUK85W7GmKAjrfEoNXTabUjBfxkz2om5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8tib89SzwyjbeLvnBaTe7huUCvaDWDSAFyMmco1SxALW4Af9mn6gsywQRjvH8j7c1ptiSTuGLaZmhnPbdMEAeu",
  "key1": "2Xj3MW5ppkub1Axf2sJCpvpuWZKh3nBSNYgtDSfzeUNoSxfZmmPeqvWbxEfjZhjqoPbCFTdWxLqWb6fbyjtLvFu",
  "key2": "5JEBoqf7WFBVvVRy6YuMdf9k7zo1op9yG6XVjf5Z577wBJwYoqJzzrNXySQteGM2tDq24dnWtREoAjGRoAS5BbB6",
  "key3": "39oe1ZLxCdQzsQbz5RsDvqHYpSGtnDUdDexKWnJ5DWvtcpbpCH8Gtng7cDJHygfqfZyxV1fj5qutvWm3QF3GVGNF",
  "key4": "sb6hxNTAPtPMgsy5BV1Dfjgr2byUjHbm3QPxtHDeGE7a1WHupB6MHJHEgBwXrqJDH86vpj7vNEsrRPDD1xXxuBj",
  "key5": "37fYKancnX7RG5X65mqJ1UERuvP6b4pvTgbeLCa9uisZqwh4Epd1HD2vE49vHsSC8Vyr7SroKP3CGXrq1xvgftpH",
  "key6": "2oVLBEGhrSbfTnLxUZJ1puZTctipwf2PU1LZ6pAbP8DppJTCb4Nbrtp8waPoxcxK25qzPaFERUKpiaCwZaQCjJ5q",
  "key7": "3dT39FBPu9enGjRf61nx1ct94VBBhRJsfuT24rdpKxca7pt9NWGLLHmgF3sAsREJR4YtLeUFvJgBn16dhYNcBeUF",
  "key8": "5t31cwQZzLNhrQj4UvztyiLuwuEi6Fsh7qvBXU14qW8ytruxqnNz8WjRGjd1bNzejvnXPWp7bezF2xQ381JXpgQb",
  "key9": "2chDzucBWx52gWetNbEcMBaXx591J8touf6FCKSxqDb1qMJB16Rj3i9m444n9PP5anrDVgzQLp7x2HyCYRqthT59",
  "key10": "3idvxseLhodeaqGMJpL24Ab1rjgvTFQ4gDomoxHzZorNCopa662Wjtk72VrGQRecLNX89xQ66xYGYcRHWaTBinDx",
  "key11": "25k5reWFYDb8KaTfgDQYhbRyMJqKi4Ptn7krQb7RdTEThdb2vnk1ACAhQACeezrbGPZidSwHeCHvpsKQER6kqkut",
  "key12": "3ZvzVzfpbh4mNjxMYLv4xUvFYBjRHXQzR1HdRZaQGDAuhaWkjokUeuhkSbdtFVJoiNmhTEYnyuJZsTPruTESBPFi",
  "key13": "VnuHHSJT8ksv1QjaRaPXzmiBFqPNa3p7Aqd3dXDYSxDJBddUeXNu22kaSc3JBMUWroy7m6uSYfytXFaME7APnm2",
  "key14": "2e8GzESQXafSPq8A7avYAV16wQ4gyP1rbvcZrxzXBqBefKAF2SGYyE2Uf5gDd3vbFE6UbA3PTnH6gbhKX8v12pjb",
  "key15": "516Ap6VEf2KXwDGTzCPom3uLoqrdDNQmRL8z2ZDxqEAVARJtRmQu7mbLLGyEPKL9wa3N8TfPB9wBHjVK2ov2ii8k",
  "key16": "3QSQCkRuBeeuRLiXZA7YamAQZHvRjBeX9mPMGqpxwikwXiuQeu8R8NuvsopYLKR32nBe6Tbht72uvg3WQF13DqgL",
  "key17": "5P7wrVjjc8jH2K1qNPkZdnUeq1dF3JiarJCHZMFWxDAADRKnBzD4N7b3aEems7rcRKY5UX5gC1zepPDXsT5KRw2P",
  "key18": "hbfvQisnEcpGBtyRoWjQE9JqwofodzQZiWahxFcLsi7Y6vaPatdb6sxE5JdbMPJuBUYvoHJLpMJ6DTwPm1VmN19",
  "key19": "3FyTuiYGFMdzf31jB36kvKqk1WAxfgHQzNacrzVoqonzmz2Aatc9GMASoUsNHJx5LYzEhLq3WtytT91GrywjdaAd",
  "key20": "hpfC1RH5CXSv6VW9v3C228pS29GqZALMjRLwvxH6AY8gB13atNjPW1dDcyFtWRgqr24TKwPHJVGo2nGwwRe9m5S",
  "key21": "5wREQp4EPoPHsVNBAjXDe4Lz6mQRxFA2orbCG2zpcNei2AMCqnJRiw9cEM4pqwBW3ACgzikFAH2fWnMt3v8YtQAC",
  "key22": "KSxXiTyWgbt6swPLwrJqnanzhw6B2XZGUdnc7rRDCdo98MrYFE6AXLNhdihAPcAxmPxnHvMN2aYSPducd9VU8Ez",
  "key23": "48NDRgLDthFho1wotvpYNFwTV6D67kLkZCN7mSpvzVqNbCd35zwwuBzX5ruqXCfUgBmgdWYWiGJrczKtuXCfpuAM",
  "key24": "4JP7JYYa8BtQTQpf1wzuATSbtUVWkZ22Wisr89pb3uj2oBDKugBDjA2T8qeT2D8VVzJNjzNwEaGD6UnTMSvkb8mZ",
  "key25": "22VpxwHXRfTMpkoZmm3q5DxXg1PhZWmTZvnxpiY9JTAYwyYGVsHgaQgtgLuL4AxKorQXAMXn9CH5LqajLK1xgAeT",
  "key26": "4cU5s4E3wysqbM49Fg5vpii3RA9zz5o5tA6BrrZrA721LYPydAyAxSiNCfR2knvBECdXuo8DXvbWV9LMakn2LGcn",
  "key27": "55reNQPzabG63MY1Yovxwk35ABrSyy3WhkeFWszpiuNnbd5bxqqQNKSwug7BmSoX4M4uaSaQioG838DVB1YAbMLU",
  "key28": "2vjR4mjkSxdCU73HVGKXecxWw4rwrQTS497jEfay6MupVtnaVGNgpezqRnVTfMLmEcSbCjzDcnhr5PdaaiezhjGz",
  "key29": "2erYfmLdeHd9bv23g5YQrL3xSijveJWNcxsoU5gDiW6yMuCo57CK7KCbmqGguycF7oZrYZrdmHhbd1yn6TidrRTY",
  "key30": "aidcLdRETGZTgW1TMAdKgsCjD7rLyVs9tjZ1vSa5Rqn7rhPuALU3eBLMs6VG7cUqDa64go2m76kS7nv5mEa1edE",
  "key31": "R15eFNbSYsgAEoFkooyKA4r176rTuNmAvWL869PwDDQiz3gUkEbqK3ta4vJAQLB3QKoKGu6rMK8wH3zko5QVTzn",
  "key32": "5VwUJPdVBwrnS8nkbmptZA9ePkGvnfWSRjDfAYEzMxZ3DWeHFoG2mjWXhXYsdLgUZAAdyavnRfvD2TY8RqTnVdp6",
  "key33": "t9oPw7FsGDEK5WTLi4tP3pM5J6yKs9d5tkBVLUHxWHLWA5zFKK4giFgd1gGBNDvefUxVAFWhV6vtcXFh5EWguvX",
  "key34": "5TXH3GKxxoLbDXAGALTuZJjfXPvQsa5oqBn7kJfaTLXHNcYiRs46GhQDrtQk9ygciYFbModhPQijaYRzkhKo4Mdi",
  "key35": "4CGj3SnNyMCbPwZDYQsQuCPjThQ8bk7y358jh8iGRsA3YC1G7dd1RQ1ASBVnPQHjZhVoAw6U3orwawEDGunkwwsb",
  "key36": "4pRkM7ok4ahXNa7woSK19Pi64mN8CwyKfz6CpbVEPcs8hbnoWNTkLpwnFCRHPJ7C9EPNmDwQaCDYrRp2Mn3mA9HN",
  "key37": "3iW9nieCLyBxihjYRJDPP2utztdc46WG3oFggiCzsgkL76wqtrmduAW8KxgMJY6SRFTjCArShxwnTGbaQLh17fHu",
  "key38": "oB3DQUc2eQtDECwQPDXfoUe8EyKHSP9aDeP9wyQHFetvdnqoGFoQBzf5tKerR8BmvtUunojtvXWxYsppEZwGjvf",
  "key39": "4qcqG5qFs6BRqbtD9ZD8waUf5jZ4QK92ZgdEsB5y17WVQvb6MnjaZVgKCbQa7ZE6czF1yyZMvNP9vtFpUwVWh81p",
  "key40": "5UnQzgMxkAxFiMrRtbBhvdCrLC5n7wn3znmYtNxvjvoHJCtJiEdRi8RcP2kypk5CUio9QDT2MadRsMwL5BUFvuJb",
  "key41": "2e4sTRmBrKThStMFfZbFaF9akihp8fmY2QdNqPWrWDW9EQHqvF98HkegLMxu2mhCTvbxNzwL4YzQDzCZPsmfm97p",
  "key42": "sEpfF86wYQQVodfNg3hh3QG1iybH6cGtvwEKEZksuM5pG2Nys5JZ8qkNwXUQsxyhCD8txb6RufdXn9woUhpLMZo",
  "key43": "2UQ72PDktAWJky5uxXctd1LZpeGMJjg6xAULEc4mtTUxxWbvmjU9WkmNmLvPn2NzsUvtibRUHvMCEaRDW6r8z2z4"
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
