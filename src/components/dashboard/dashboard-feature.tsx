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
    "3TaH2Due8hs1dQXhbCXG8bUv3EdyvTwDuEm1rSjMkvjQMHtrBCuGNRLhBuEf8sTYueZn5uZxYwmgdj159PEeQhds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53oWvsXG52rtEm8r8eFE4Qr7JyohZ4n4NdwsoXtmWLoqEpCeGwBumUGpVH8oUhENVZrJgB4etqmQzoSLBpAx6p8T",
  "key1": "4dLcqerJK7oVGsXNdaehFtWrs54ZWtZSv2VNkq82SH4sZfnRhYNTi3R193TjZ3B3pjTjY57rE8MfxzScFkBM35TQ",
  "key2": "484d2DTg9AJABKApcVTGdPPDfXTAqybe5mJ2Us3u7J7cghVNKY2qV83mBSxkXx2jwrVP6ckL6gcHeW2vZnC81bwG",
  "key3": "36w7t46z6HZ7QosTaoypJ53nVL5pGL4uWD5suifjKu5NZ5hYJBsvQnQJ8rXKXGBiv6P5SWvbHCMUxHKSN6ucn2Q6",
  "key4": "5xP3yCBtEJvGh7EHKvk5NEy1sfNEyJJYui91yYYrwVNdDUB4mKZe4SJ5UM9bstSCRxJym9ZBrU4wP2Q34kp9KQHh",
  "key5": "5xKdk9ZpEhuHE6VLgT4mksoidNq6cAwaEWr7Z27FBBP3yWjYMzow3xS3kUmyZyXYGR93fkpavSrzdANp8MTy5WAE",
  "key6": "4DwqaQ3FHmHDvMNfSa7FLeLS4SF2LzJHZoJq5fLCG9mMTqcF1eT3trwLCkgZX2UzmbCQS4AV1Ve1ZGWBkMDQ71ZU",
  "key7": "3CD9sUYPsXLki581NPi4JjeaTNXPg1MBVG7cNv9JFQ7iqk1zp1xRMaupb5NuH4dTwNLUoMBggfXjsa2Weh2rY4vv",
  "key8": "4RZZxN97kDfZVTud9Y3CYAKag6AVrVthMSYqkYHJ7EgePAuRPxPwqWhfFBL99c1xmSK6j4wMQwFV4Fup364PbL1A",
  "key9": "3P8Ji9LfQmdSoQP19cq5e4sh72ZF3r4riVTQtS5e6X8uwiaE2zdvxyV7sdY3wpaQ7Z41wS1PSMPtLVqUdNozxFzT",
  "key10": "CXXxJZcit9x1VP7YDVNKmthkxLxaSWLR9dp8XErRvoixtVgYS3rPuUNY3GZsvzJgfr98a9vzhdnyLJHxSYApae7",
  "key11": "4Akxi8EzqvMP9n3xwsf5wviMkJTt3EhXj9UfQQsYacDrkYjjHc1NHzuagJfJcnq54m5Z5giqnvKVrcvDcny6dTac",
  "key12": "dxJ5NPaz4WykP7SNMV8ApS7XzvacUufJffjb8qcHFvPVsKYYLgbSemtuvoBAjVu5uwBZViuWJ23kdanUtTmDAaF",
  "key13": "597VpUn9ePryr2wsi1eLwvNZdA6FpHLLmrs6QpvUqncoLtEEYopqQVKSzAMCQ6EG5ux62xZHiCEaVoTa76pVr3j2",
  "key14": "5DSRThdn5FCFiRrJbAUQ3wj9Q3sMC4cW1hosRW1MUsftLysgKJ8JMhdKCCTtdjefUGBRtPXbqkeG3gaT77PnXTGU",
  "key15": "2dpfbyNBv1N8Kx3NWPGG9hKcJqYe2ecJ8cunP8ivMcyMf47gZ4aKP8ToVLTwzkQ39K9DNtTC62TeJvf86acYBBFu",
  "key16": "3VurW7QyxvC5FwndsDqsdgDnKfD2Cd1Svcm8A8RtZizxaZz5MNDwpxb6NNiFr5KbL976UgiDwwSmem8KTRPTZNPV",
  "key17": "5dDWwGb2xvxQdam5UncjRki4W4ajq8dhcr8RcMGgxEqQmgQ4EWidNPQ18hhfKTxPcUDWnGqFMnMePC4CNJJSKCEQ",
  "key18": "37ZLHSsNuyeEgozfthYQz3H6Jja7kUnz3oFwDbsmwYiHTzYbmNniodbxRAzir7o5KfPhXwyqJF66UECuB33Sjodg",
  "key19": "Am9tkdhjh8MXcZRzg64DeV5omj1H1gt15ecoJRh12PV13HtJhWh5cFHjcuYrqwrvqNSvUduvmKTsFs4yd7JCUZf",
  "key20": "3JuSqRnzHG76Zr5bQR3iZbQbJNvDxpF7dAuX6fDchPKpykXH4CSVaHYtEnqYmMG4Jw8HwXtubq96RD5SCmpTXPDa",
  "key21": "23pMTgKdeas4YkQSvRSBXF6q7yWGdxi1CwTovJ2cM2YFXVF5eHvKfAfkWdYKgVmVHZPSi4q1kQBQ6SAP9ZGZ15yk",
  "key22": "3KdPraEyqvWf5LWodavTj6gBEXLufYPmGCx6Bx8v6p7XJjQMbDDq6UqrQ2gGTnndkauFJmaDwSebT6ns5KX61eM8",
  "key23": "3LmRBbiz6s4QtjjMzy1h5pgLb2RwCQff7fEnsn4Jj1XcxeNhA7GiWYSMBgYfUXwdjkLNX6ogN57gj1foghR9Z47j",
  "key24": "4xRS8bbWh71rZuqwqDhoFcwKrVMeyiDTJjdpBn24SUR9aGswN9SeF5EpAJLUUY9TK8WVsECuAeanst1R165WsZyr",
  "key25": "31zXyxeeKZyi3qHkgt4D21Xjn1MfeRs3tAwxBVxNU59wFbUrPowrSkSzKATGAzrAgaGYWjyq1sztwzrWTrJvfjBh",
  "key26": "2cuTraDjVfpZMV46HbhxdfNtR1nkpDB7Ac6Lp83epUhKheSSTgSRGAsNmGvQ7MsF17QR1s6G4pTnfx5f4QjtJppn",
  "key27": "2Zx7ShAhtH1MxaXrXgEeMztnrb6pDCuFgm34KeQJC6ZDYnmwDc4y8pJRrUNiCewhsGG7kocAwZAdyqSmd6jM4Bwn",
  "key28": "4GeGcebkGNFkBaepQMQSxw8LDYwH2Zq2JD245HiTivi3mMbqTocgVVT9hroQ9pNsDw56fPtaCHPbKZpFuau3hZ42",
  "key29": "2nMYqi98QUvGcXkjhwsHCgTGV4AEQrHGcSq3DNWpoMmNvqe3NqKVziGm7WJkTGLn5VgEbGyND1xTM8F3289mdnsD",
  "key30": "5ViFYEi2mEbrZigtMGQSkQwkynP299Ko4xZLZSnocW61pZwVX8t86kVKttm6Q5z2zR7kTdi1rX5xQqrccNXJ6hnc",
  "key31": "4FPXwTb6GxPhyi4eejKJwHmkzPtfvgXJ74P8H2GAeUEsNmKkx7Xab7gLAxUFE8NAkFUpsXWsWTz8Euv1RQ8fU8P4",
  "key32": "4ZAaeVMtbrqvQCK5ub6LYfL3sQ1bs1NPVxTJaCQrwkrQiGgE17cTD9KjFbGpiCD5NS6X49Y5LCzTErxjwuwhneHw",
  "key33": "2bdu3kqLbT2FHjWX298VjjcE2TeazRg6j7UXSjDT24e7vStYLGV1a9PqiMToT2NiC9A4Zek3EdZKVTic7tPCb271",
  "key34": "5rsjLgA8CN7nMgEZETUYAERGJQHpHyPQ8iHEKZTjJ1EM1Jq7kfiywoEwHXH3expmr3DpMkfxSZ1FsPYigL4TpXdr",
  "key35": "3AFLJ8bRWNKCSWaDtynfykAhULEd4r1yRBStVnAJtuPxNBQ5ieh9qq2XjjSJV4Uq1CNuCw8kwqin7dcDueqVL1Lw",
  "key36": "3hHiikzpgdzuv48x668CtnWvBas9utGzcYLcKDENZXfZuHn9e4EUftvEy1Z5L74MAe7pEuyfZRogiajaHusunPPh",
  "key37": "5tjjwhorRPNKuJeWSLTWEavNh5rtViFFWoYGjTrLgWK5G5eUzVQTkDpMLKuXkGQqVLL2YBEjdXQGqZsUfh7qvu9U",
  "key38": "4UsVyqqSxGvXM5eyLLfy8CSA2dxscobrgnvrCVRUMix42ktEPvVxtTbVRpcYkDFNeibfuMupG8UWWBWryuVadWab",
  "key39": "4nYDukTN2QaPsybWBfnghEZ6WM2YYfKSJCJBTDv41VEM81jpLprbm4XPfD6uKyJm8juQeGBpNtsWYK5WkaNUgYUH"
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
