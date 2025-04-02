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
    "32gRAt2DGV1ysm7AZNiUjzu32yyqnCLtUaQAfGxxAEwqKtKfWAAdP3CQs16AN4hjpQg58hnbMWB4voJcWRL9pFag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22iiAFNYgDwmZJKZEUDbHrnfgeUZVmXKa3559XP5jFFFySGKgupVgYG8L9WUcJ51hfxnEzfHr9eFfatPsEHTfc7Z",
  "key1": "2hrbypYQpgLdPqHM8PctoTaAvNgXnKh89cXJMFjfs9fj7a6CktSVRWvw43tc6AxvVWWY75gmD1bX5XnQDtqmb1z4",
  "key2": "4xcjURhHByPYJ4NpwtrLtHW4pMDMeoWdJkLYsa3VdNBX6n9tCahJxYFcMmCDgTNW3cqScGMpkHXK9Y4TPKHJCYzt",
  "key3": "66imCRWG54eDPCqfR9j7RUPcx2ejM5XuYy2q8vswyjzKEQ6jAoPMPLVWnEH9D7LQwneedfgtyXZCnEPXw6zRwWaj",
  "key4": "2nqVqBbLU7FMkNLreVHBd5Tfug46mofaXAY2CmXuCBLv5C49EUf9kdUwAqTvxASk8XNfMPRScUaowseExmY4QFBu",
  "key5": "3qoYq4qiSrxSncyxA4EGm4cDvjg1hYQU6hkv1gfaKrv9F8Jm5syrz1XwWAyw9reroZFyACnnRMiQuGjLkiqVpWm4",
  "key6": "51G3UKog1oD3DvenR6eVLpPgr1r5pWMGjPkocHodhoNoaDhFcyKFfwKdsTPPMeoY8cJZJYsefrUJNzMckxYFiqK5",
  "key7": "JYQ4pVfF2kDFiUiYrt5JDLcQF5BqEJ216RcR3XKK35WaezHqAoaSszSxMYkWTxA3Se27snSG4VVfx4kGWmyA3Pw",
  "key8": "4EBTuWgK1WyWHy7iVngetmxfyT377fYkSRFpUEPjPuxYtqjHGGigK4Lk1YwPeUeYhMdM7K72ZdA3g77VMywkgUoh",
  "key9": "a2Wsm8ohiq31RfCMczjujLZxxcDBjBLSCCVtiAcksE1WuaSxUZNUt4qJj4WUiaGhwLxKV2ehEhmijwuZPGcbc1X",
  "key10": "3nDMN3gFa8LifYPMwPx9rrUhFTNLfHELREnuoUTQ5E8cqmPaW9MK5f85bLTJnBxeeuQ8LxkAeV3oUYeMj1nkXrSP",
  "key11": "3fLyyDESqWUwsy6X9GRarxQFoER3avDm9cQ5mcaocdiCz3CxR6J1cBuwcQnhXXn1Fg6srqRgxvff8y3MwrvMcDVd",
  "key12": "2LFXLJCqtKUua7GovKaEujHZWsf5kVZUbR5GENRKrmHSEL3V2iWpJ7d3QwGAU3KbpwekkY6D8xNZq44JXr5TmqaU",
  "key13": "PhM9nmHRibmZBpRKxCx8NeL8RFQwJGjdvSb4EeUAq2PrNCemzoTJq7aeE9NipXxGE65ZS2d6FVJ4V4biBLpa6TA",
  "key14": "3ATn7i4EV1HH4Rp92Z6rP4cPs1Ya5bGsZAiY8iJphh48ew7B87QDbT8Aot7yH9cxahynbRensL1enWyec7ZNGbar",
  "key15": "5LGy7e5Pw7n4CYgbrcKXCbjSAc6o41o4rd8KdTwdHMhqYkdQ5DcjaSqUHRPegQJHjS3a7CmJd65wvSRi34tkfC5W",
  "key16": "57N9XUFdQAnYuxHqr4ZKfZFe4xPen959L3WMKDKemGKr1AvfAx6N6Guw7KBmWdgzmXVZF6KA7NcjqAPbnJ1NmE2v",
  "key17": "5fBmEh2QNuw8wRcBnuUdB1Foq12ujszSPu2PXrN8io8NM79a1AgEQc73g3Wm3vjxToyF9mLyGo7HrYEgWpJBbrWt",
  "key18": "423Xsw6p1o8RupuEsyip6rsw2XgjqEBPZecAUyAdWtW927DXJdcmZgkjphQ9GJ9YfZmCLKHiuhfv5mZw2HdWrhzq",
  "key19": "3eWCqCLwqxQfavfh6SuWK6nh65LrqCoEaCNzqkg9cKkCpza7AUhaFzcTBS43SFZ11v8NnKzZfp4kMxjaNGpa1ZMh",
  "key20": "M5jEtCqdDDPozqhvJ4fY9zu87AsUtZxTjJrfh2HBAipu3e2cpQKvT8QU8WpVrPvXFDebL3Lc94PtTszrmQw7ARG",
  "key21": "uA4WiynkHYwvDEZrmbVwgvBTcZwWT95AhHUT3oYpcLMgimxPFAW43hZKASkYwyM7honcRzgC6Q3CabacFYrke5b",
  "key22": "31jUsQF4X3hr1TTtvF5xehEtGGbduYn5UfxxMPi3oHzF1nyLzNM9qgWdN1m5Gse9k9gSuotaorAjoUvEM7UwV1dm",
  "key23": "3KfJEWFkPGZCyySJ91K4NZ9JgMxwiZaNbRq17pbnyMVNPDhappjMe2pB8iEVww8X7gBn9R5LctJVL29mHp5WhHYv",
  "key24": "4ZD78tM4D3nMqPbakvsMxFTvJoEdYkzYGdD6HdMftouFVAihdFgcmYqiU6uZefmfbupzce3YAeTCM7ZWqWpK6pKC",
  "key25": "2vqozRR4QMTJA5QYHJKgSUHipJpRrCvXFSE6nStxr3z6R88zF5F1xky9Jik1ohGpKDcUj8iXNQt7ADYFySxMVZ3J",
  "key26": "cYkCT5xdoX1ap4ZddcjmD7QD6jzRHSwrtt6SHqSNDCWWRbRbCYJH3nNisRAp4Yi6S5YysrhXyp8G6tco6dtUMcF",
  "key27": "21N6fatssZNm8GpRS2FgxnS1XFu94CMCQMz871SRhpZu8W3Ba1cMWaQsTFzzjdVjJTqoK61z3tQeaUVWZ2AMhAV6",
  "key28": "wqcW8Uxwmte13CTb1F5fC7wAuk3r2siTxyfcwShe8R9gvoCMyDTowfL6eLQjrXSGrYaMakW95SbkQB8ZEfqdFpt",
  "key29": "4eMdp1454DBeBktRBTyg1RuywbXuj2GiJw4ij3WwWJMmt8WVY13oHkamMpmuUwHnbio1YQmtLmgAXkN8RMGJ7zwS",
  "key30": "3uJyteuXyEcwCcr8MdBbHwQcjoLKn3WfUwEjuZq2HFLMCuaDPZQK41Twwsnpi8ZXNp2CfN4mSkHTriWwUiQs5Pwo",
  "key31": "5NRjjx7jq8f7aju7Edqb5E3PHW7VuXzTxTTKTAddmx4yaLAs5RDJwrrsZBWKxLQXNYDJKwsqTzj1dkNSRo8958cZ",
  "key32": "4YcPCbASJY6R8qNUmAHbN5uTrzUvasA9RDgxHvBiGCRPXgXN7iyGyTS6bnofBtphiEURwvy2tm5TEqe2euZ7Yej8",
  "key33": "38kPXnUnAcVFdSb9Cr8PDRYhv89iGXxFM9tR1Pi4gAAHwoFAiXiLGxef5x7wNfo2hmsi38Kb3QnmF4aU24ptJatX",
  "key34": "58x9vdkereT2211rNAraKT68EVhKVshLf2L2isqVcY47NKMNxUmKTEv7rMBEnpFfMhCW6TcQ4LhBTXjr7MaQ9qjR",
  "key35": "C6JunPCUYyrZGcm1koTp9ExGM1BYfCn6pKjbLFHYhir1CpJFNrQFhf5ZKN6VtcUZsB8espKZQp4HdRrG88gHTW6",
  "key36": "5pfvgjNR2UY9jZURnUgPJK5zRkmRPqJxapxFWN3eJQS72WwVnDWaW2wZc1seTWbCpPXsdoRESMqfDgho9mBsqfve"
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
