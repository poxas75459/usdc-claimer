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
    "4zoP5HwfL1rxZNScByK7v8D2YoFHRwsUQ4UQuxFanJhaM9nu2jpF7tMibeE4f9tVKGrpXU6bAGqScypkR5hZdzvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1sP5QyJqAJdfwURhDgtxh7iWGhEx8fULKEPRnDHiS7av2X9NhwRHryEagwpeQSpZct19jUGiYhAzV3Vo2tG4SR",
  "key1": "5ny1hyDcB5H53gj67J1qKxhkd8YsNuv48bSDHVeZAaRgLdPXCSQLRQV379hqYBPzAYApX4f7LDcSRCr28om85Uxx",
  "key2": "KEqNkuGrRBdPLD1Rb7XjWYMnV3dz5pGr4M4Hd2YKcZFqu8qkWYv4txf5vBxwMqtSPobCkH28jC923NJcVN8TozZ",
  "key3": "3bE79CPHNF9ksi9izUkwTZsFD6AdGJXTym8VHQShZV6qfJLD7fSJo3gjhiQ7Fv43bnzQhhWruKZEFGWguttJbAD4",
  "key4": "33FvtyNuNMiMxL3W12ecoQH7JBtMhGeHwy61NQMMmEhkXAsjR5WAQ8TLw86rQuSVgfcPAtWLG31JbtExDizXbhJv",
  "key5": "44dwqwZqmZKQUhFCzwU7tnbp9bZPBYfhGNJEq14yTXGoqdLzXgcw2kZGD5cML7HRmBsajzy8c13ddUTmducXG8UK",
  "key6": "5Hmp4hQztmMb8HQq6RowtjoGiJrmH1Xcmvut25T73rJtHyVEEcYQf2Ffg6t48qqPrKM5HXR7P2j6m9i7iZdRezf8",
  "key7": "4W8dPXVPby5XCSyW9zqMVGkHq94mH7K2BwWV4hy6eJyMNG8ZrWSoUFM2DWJTnFSg1K5HU6RjDgVyR9CBBZEtZQ4X",
  "key8": "3FDNefhKGcikyQyRA6R6ruaNxQswr1qbRBWBNhbiJJXLF2Wj1ACXc4Z8bESpwhvZJJWJDpKueFrMcr8iWpoCTxTA",
  "key9": "8mzxmGrj1QafS9nvprNtD7zS7HvZaRgY3SxshkCfKffRQG5hQE4934Hk27zeNKLeoygQAsfS3Dcte2jSwJHB7jb",
  "key10": "3Pj3mpyCQXRMB8AsQHtj7k95NR7oDUZGVNeeRwv3gWLe5PegXHBbtxqXEZDFdAHLkA4TEkGDsjqbm4LWK792TNf2",
  "key11": "2MEwV47LtAXz5HSKioHP9visAB4Ke6xzcFV1m2SUTrV7GdXiqucjt8QfpYEVJwZCwXX1omrUsxPbMo17pLS1R9wZ",
  "key12": "43XPRG8wNuYMTbe4hXuj54s37HcurtWUsE4pKxnchAC6M3kZNv1VFpLcViqw1SK9igQBge2DA6JzaGXhgjxLNR8n",
  "key13": "2BKXn4S2Ag1q9hk5CfzGKSowHoMAyM7LsCTsStEZnssKkiX3nYTnoonJPyU2cHRvv73YqsqintUdpFmEvUHzYUca",
  "key14": "2PAYmo6h5TmJbWoyS7hravF3zuNCfdY1C9189BcWMPBqf1nAutxt31GKeUjcoYmvHeAK9ozdwLHyHUJzt6fTH1og",
  "key15": "5TNef2qsi11mgfkZNemyZs2rajdRwmpDGzEzXodKaj39snwbUXJTbr2UwdWG9YGkmZukXxUjSxdX3BbJ44gESghJ",
  "key16": "3hWh4rDwsvoKXhV4LmP3zjaTdJWpwrvQ9UqNUYbcr6m59bMGS5jpAc6ZVa8uebVPBsVGs3VnqgxBjne2TBDBaVmQ",
  "key17": "m3RLsyXcxTsSjqeyi9EttNzxkxyfytfnhsnH4DzonPGgyo8af7qbyy5WWfSWXFrZyFT4xkTGfAsvmskPRqAhr8T",
  "key18": "4ePeqq7F8gToQLmJLr9VUZubgoUZExZpCGQiJCbpbj6H1JSCWBQShjAJqhM1DE5KAC1LeVAaCykq38sceDX3vVX1",
  "key19": "38kz2p9QFFk7j8L7MVdfSgkMiqFajqbkGKbzKzvYHHBxi9o9o8BXnK9KGBvpv7yjZNEkfbrdreM9zWLi6FAdj2v1",
  "key20": "5UFtK31PZRwRBSejN7N1rLF2VVt3fN5Cft6nAHiQYPaxfqsbkCR2csRX7r42XwQVviKE73xjXN8Tmioy8igid5it",
  "key21": "5vqk8HQkb7uuCAKp6R6sm6jHTcGabJYeGPukqBGFw6xeAfQsUscusBfFAGSUVYPP83GzL3BUckWK9xFkGpqguLE",
  "key22": "3VQUeGPWciXCsHwYBS9Qz7q5kaBwNRCueaQcb4haJN18btPsjZ9AMW2qrr8phU3sSL47tkfJQAFmoMLkVfaeqAb1",
  "key23": "3pXrNAWytXtcfLULv3bnGTKzCEepoyiZqmPoEbYvH1XMLfRPGdp1qAaYc5qCvV49igfXJPa7TtuHeXj3o3H22Rho",
  "key24": "5ctmvmCTYw3Zrj6uR7tUwjp8DW6uCSLygHjBg88xQvGk91EKKxQ6LFeea2ww467LPA9xx3xLc4iqvTNaCrB5f1di",
  "key25": "WHYuvDz3GFV6dCPAeEVRecUEdKdzU91SQCyhGt1Zkzdx3H61eg7VTD5EWv5a9oADoMUd3QAEGuqcLrNxKVcEo2a",
  "key26": "4hhH7UwUpweWxRfvnDUazSk68TzFCNzi9DrYMwJnSPxr5tynJWrE2uEJAKMuU7Q4AQjVdzrEQAaxiwkERKLmFY6v",
  "key27": "4ZcoNkEA4VKHQ5zTKR3gZyu5Ne5hPfPYtUyfCmHPJ8uVuUMd8VXC6rgGDBFg2yGuwh9he8dvihNAavkyhKhS5jPQ",
  "key28": "4vGDa4ksBRFx6LcVqoB7fo6TdNyLqg5Yqjdtz8UhaVG1jyGhvrUqbAYg5a1WggRtcW4PufBRyQ2qQrTt9NUWf636",
  "key29": "2HnjcuYaFj6eRtKzYtS4dxS6nEKMaJRRxkFnPbWiT4MJfdy2z6ujN2WezaFxePv6WAFqUKotUn4PmV46BtraWbcN",
  "key30": "2TsK1Fb6p4ABV12xDYQhpfqzxeeZ3tg2d4U2Wcr3Pm6LNiSf6q7587RrUhFtejcNw8MkUUFErH3cbp4VrmxJKwjQ",
  "key31": "435xEGeBxLPKo6MEe2X2N4vFwDdyjjmCARjinBeJFkQNAxf51k7EMfLx8jeSquRnYaGdCivqqvREmBrWb71YxdRH",
  "key32": "2gF6po4yZZyRd2CvNdN6d8RFe7szVVxHmFq1CgcJE8PYHGAEZA1hnsSgYpHCoeFsCUPMVz81JEVEqQuoXZkMCVf9",
  "key33": "67VG5UDfLyfzdWtJhq82GL3Z4fLF6nn376BniCv4aLHw9HL63E6oXqiyiD8kWvYwCFgXS73XcfATyWtLMtTCVMaV",
  "key34": "4bNPiqBRyVxrG1oW1cJ4PkeiF85js3FT5HeeGEBE8UsHutn2tujugiPJoK4nzCGX8swEGNhf1grmJTsHR667GV9s",
  "key35": "5FKSQgp3QmCVu2ZFd29nF2xMYnUMvr9LSPzRYV1wbGUgAn6QXxTg5AV7TQpviE2qcfiSbbYwx3MgMfxLLeQCdZg4",
  "key36": "5FMZPmQrWZ6TXzTkaYzDp5JSTggrFumwJT8W4MtBhHtopq4NtX9PSXvoGVBvVWJzr3k1DV4BrtfKFHTcLgYDN8px",
  "key37": "5T2MSvaBk6EzE2s9vRkVXAV3nRj8cR85hoLtuC4WMLNZkdNsktTGGa7etQTsHFSHewTvbZtYRCoPZjM9R7JhspZf",
  "key38": "2oGSRBaQ2RFKHuCjLdsxgYwCuh659VEiZQqbLgDWPoG1vMWBXUzjugWdCXUheY7KJffqAEFSMjtxcqwp8zjQ4DPh",
  "key39": "ZZUMTDLVFPe4e67jqNKgwJPmQryS3eaFH2JmjoYoNj7nvuVSR4r6GeJcTXrYv21eqEryUxyoEpeHK695YKTeZgH"
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
