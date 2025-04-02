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
    "3D3famD9cDVGZhPwq7Z4UNe5bhUpYwkejoZbxGbsnvPw37sx4nofHJcYttBFF2FC8u75awkDVxrGYJRh6EceHFRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R7o5KPB3HcssyguZ3M4NYJnMJpY9xKpqDZ1NkRQqLZgEDst4QDTvCg2BxjHXXufLjoRvy1VPupjLBVRKK8ZcTM8",
  "key1": "3t4weorMTN3jSEmMzbLNUwEJ7MR1Z6SuWQoMkF1yESrXAHBE8d2Cth93cxoUaQ3AFDQmCkvo3DBRoCz8BdGdpL2R",
  "key2": "2frgj97HCRvBMugrfR4EXnmc6XFusUgnLuf1qkxdCTNLdL51kXS5s69UJrViyEXRVtgy3RaALCpWxbVmrCzXTz1y",
  "key3": "3qsFB17gh48fuw5jpnhiLC7LV58mb9ptzorZ2cGmDReanvjFigipCRmrkoWpw65D976kysXVa6cuyttMxtyfReC6",
  "key4": "2RaqH9EdZxGBBPjLQkUoPZXxRsJ7667XMjftvm7hZeezvLVV13JiuDQtFxCKyFha3VvUCAtuG87nEDMP3Fajv6TP",
  "key5": "5m5pdtrg5T3FAtHyPP9y2bkkvKAnZsxnz7T4X5TN29sMZ2UpCELQkWvFDniaDxkece7EDdWhngYqTqpRZLBnJByt",
  "key6": "29Pg5Q3HTaqJd8WpFfBLrHMEVRfDEXoQYfjUVNRGwuKSH39K1DorLYAMU5g4FqyZ92N4pCQnSMRiLm8vZGyZu8AC",
  "key7": "29xskT4GijetYYom5Hq5uxLYfqME6Y1Wb4wdviJsEzt74j7M1o4ikJ2pH3FKgfFdmasALSXZe4jjQ6jNvMs4RJe9",
  "key8": "2qGTNY9U2xZtEdxchEGsp62fLRKeZtxcZ6N9Rh8SzK2TqqapNNoVgWmecoEz56KDbUtjfcQCxgizdEVtsjuYCk8Q",
  "key9": "2CXcFiA3sKne9pPgLPCYF5qpVVLX6SL1FCbjsCyVdo2nzHcNjcxr63qJjTwa1VZF2JeWrRYuWtb4Ayqkn4iaM9vJ",
  "key10": "4LnQNYqMDayvX2PCDYQbYMnn721sG7ReJbgVqwTaKfYaSVoEt2xpCXqYD4AzjzzCVeMhFzW2AQJcxx8Jc8XE88Cc",
  "key11": "5UEwwX3TM5HZy8w4CZvwTdCNxuV1SkNitGyLtF3AKL8XNncBgzStqps8HwzhG3j79j9A7z8YNEHDeRGx6J77Zs1p",
  "key12": "2xif4kWKsTZR3GmZGuXtnym9VAnQGQGDedB3HUiu6ySqXRE2UeNUAWEzmewej6BMDGFxCbFBZF1SiExMkwbdGZQN",
  "key13": "4Px2sWnRwU1hQdC3txWuZzqPmgaoqBmTAd9RcP6UXU787aJ7m9fsKWUkX5MhKGJJ3foupgDZRTcQN8mqH8ujy422",
  "key14": "3RD47iM6wcXbFFCVqH5KXWuzDQYW3udL3vL18gY8x34fGsaaPRS3edW2FLNesKGcQnjtndB7dVJVA9ch1aXHaQQA",
  "key15": "22UEcgUjpUYUdGPcGE7Q94EYvU9SbPRv6oYgPtDUPjHvt9HwkkaFpegh2g45PJUJgwCHmkR2B5ep3tQkCVoSzFP2",
  "key16": "2fwV1d9enLmiEEs73t7vPRPsDH6Ey6DAKVNFgn7uEJzhmzKKxE9zpWYHLUYCLCgHcPEw6jcv8pEr6hAhTwikkudu",
  "key17": "3jXoiUrPNT1YXgTtcKKajFHMYaJ1YbwhSeM86EDiUqiohZ4cw4DvFrTctiS8C46DXcZVKJS46wq2Bv2HUYp2RhkK",
  "key18": "5ZJFLkdHxsFdS8WY8sSjsBbDZSE43VJB7C9NgfouVz9oTXegKtpxAWoN8cGkbwRCPnR8bmy2iWyy43Kvst5k1FJh",
  "key19": "2mbYhKvPG62QYKDfJnbWXntP81DdH7ii8YxuAjNp6i9wCMpfN2sSVcSYXU7z3BMfPBwstdxvj6teNuD5bk8MKeJL",
  "key20": "4kd9bY2eC4HXT9YD2oY9LwyQEStVid9cdqKFijfranFk9WZDFjBJcSx7iW8t6Su5rK7UxcXwH4tuos2cfHARKgrz",
  "key21": "2MMMJ1J523nTH68Dd7BZsK7UaMV4Lkjd7x5Jo41i1KXsPRTLfPVgMDFaP1Bo1wSscVQB4uQitfsoB9WbDCKcdirs",
  "key22": "fJgdERpsHy7fnTFtXTfYGzXMfahnZDTsSBm8MdDTBsNiCGGxeNLEW2jcH8fF8ahtcNUPkBe486JdhXf6kfUgmSx",
  "key23": "3i2LrZkDkQtHoQDFL9ZNa6WsJWX4uAi4Bf5QPd6QZxW1sZkbFUQV1aaczjSZXJo717VW9hHtGxwcyXBsGWHQ6wF8",
  "key24": "4sZUudS4JMMET3FNdnuYy3vTnyh2N2XCNK6zhUE2LLr2RDMFFzCBCkaGLTvCyogvjtnfhe7H4HDxp2Rbnus4qnhp",
  "key25": "21wgypPNZofg3LLh5gwqY3FKnXqfXEYH2vr29HNc9cp2CJurp21Xf3Ao25ZwDTy1c3a8SVKkB8Jr3izmeTip3Rwp",
  "key26": "53msjacRf9fJbv31qu4AdfkJbktbd8xPEejcoWPDUyKk82ngb8p3hmGMrwoCX1WYsphDi8v1U8m2Rcx7nWEihYXu",
  "key27": "3yXPki1wSxp5AMJRcDjYst8X6v6Nxprc5FCK6f8vMCGxQe7nQTKv98WSbaEue1pCsqQHx9yA8UyPwVVS77ZNitXu",
  "key28": "67oPjskXwWXbVBXGPWvWNwsL5WzznHuQhKLUPVPJ4rwT7hW1QfTMBGQgjCPBE8fLmsyVadGjiKfLCoHWwfwfv9U6",
  "key29": "24yTE7pzrt5acchJeqG2JoTbDzk3HJNXk4dEYcqpevwHdF97XXx8jX3rt4zGbw65EyTwmd7BU8NoxamAhYToQNBr",
  "key30": "qTGwpRmpfPoRGtXGTMhje4Ta641n2c7sXKk4wcCQZ2cwvRAJmdMytHqKFGNFfBkynF9CZ5xPU2bSts9ZQ4bt14E",
  "key31": "ZHVYnEyJ93qDbMRrNy8LgWjoYTRbVj8qED78qQ9kRVHRbPYDZ7FNMR1nDgTzB59NcvayJycKcA3yfWA3vpsKfv9",
  "key32": "4q2LeqqCnz55mfXB4qy9Ncwhjga3TtHzFd65zZu9FKisXbLBbyCruX2zdwZAQkuVVgXmzdEvsUtQHGDh59wig2xC",
  "key33": "38ZvehUHY5PujVVCbz7QxS3deMm3d78yzyVjgE2ujiM8NEC4fSiW8pYBziyTJRUZnXcbZq1vqk5dKhoanQMZcdSk",
  "key34": "4mnw56SoWQJQJ1m7RYAMU3TBJ15wKVX2q6SivrngVoNj4XjJaFGBt719JiwWCLRX3mzwXQrcUE2JyuSSZUyvVP1h",
  "key35": "38bQATdEwUhpvEp8Vi8zm1QVSuK1G8NXT45S1RqPMqUu14bRCkR4sG1zhzcUXyaK4BaV2tQkjh2gkcKsu3iXN56R",
  "key36": "3A2V7SJbiZAnZwG78teRrcmCL52X7N6fDhxB4J2wNLC4P8Hrc7tKaUpGAqk4tEAqeh9dEgVXLstEqq3ms8oFAHwd",
  "key37": "5TCNQqrwSXWpiCQmh4mKtsuDA5QRgPCMuQSotB7cckqimmWQQYECPoPiAStYb1zeSa1X2JtSCVCnx9RqNPondBdt"
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
