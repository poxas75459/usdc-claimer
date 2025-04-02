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
    "hJaibeMZkLqcVJwWruuexPB9RH4DikybgcadsLXvtWb3gudozNueFUozdS6H7sXir9fHtsDPEsQdWFjVLEVuJ5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQQq8agouXNtnJuPR1jq41dYHaYo8h7TWJcKXtw2FbbZsVF42EZnbjnDbiVEDNgeEB6a24rvtnKaaZc35J2reF6",
  "key1": "SLu2JyGdVQLA4vb2fuppaYFvqRrmtp9tLjrXvh44wr6FeMy8qRRo6a7NZcq13bqScVjPWZAfoTpdKXXK8A3RxaQ",
  "key2": "3mH2dqznytzeYo2XobLWbLgHkoXjZ3XjWuSm6PhYxLHVj9Vv27ZQ4xfKUKWRkfSf8v17dcGaVgpzVnRQ3AsXYmg",
  "key3": "4Dzrh3ZMBrxHTLnyZE4RpLhZotv34bY4wLG9Ap8ahScbZdQsBFkbBX2cHb1QZNN5nZqG9mQrR8LkUYh37YS27cCa",
  "key4": "sqqjYZXH4snLfxKYSuKFHLawGCBPgy5WUVdbAxG12nMZ3k3dFX1Nd35YBemTPyzcK959jmmZPwwLVS72j4mWxo9",
  "key5": "2GPeZLvr8Lv2P6QiZD2jhUAhysK7nUu7MBokQS9JuHRDSmBRoYZVA6b3tzyNAjJAtibGBD9DUHLYmuKMt54tbity",
  "key6": "pNHpoW5p2eyuJvAxFfYzhfSSqyBQFzg3YkgFYHFMXA9PZkwmeRpXT2bYyvehBMwu5m7G9S7z1zT3QYRgoVAMHdn",
  "key7": "4fti2BLv693b2k6sjhiX2G1Vz9vi99bcvL2TVQuj2ZJxFzPMUgYBRM1H3yKSj9f8UZbLA26ETzTe8MaCkUo3g4B2",
  "key8": "2Kci7t6AqudGcRQkDf5FAwAEQN8TqkocuygsUB5DC2qApPfJzRsDmgeqZ7sUDu7YLtp4FPvqyJggYVcgBxFNzAuT",
  "key9": "bjCo6KWoBdiRYTa7JvBoLm1X22Uu2i1wVSXDmEbNemwt8UxxeN5RAeLHimad5nCu25zuigJfWNSuKo4aY6LpyvN",
  "key10": "4wxnTPz4tssPKduqRnN1EDRMgFYgnR2Xrq59XZ6UTfdHdogPbxvnjUyzMNDvCp2P7T6tF71RADhzEsPwLmte2HiB",
  "key11": "53SisLVVt8K3BEy3Ekmfeu5ugH63je7wAfFeXp4aYRD1ZxG87atpnfcAYnyXJQa9D3jYhBokjd6AGRFVTK5vJKQC",
  "key12": "3NK11bveQrnYLHP4rEoRJg7eGM7c4Sxx7Q7DM3mirESbZuTDKNinmSoeGbCgXZW5xD9gZGLYnphLjX74JYzCxtX8",
  "key13": "5sTQ5bWYouc4ah3tGcey4SyLTTZfA95k8LsRXDNa891Fedvf68Cgd11Q2JSy51cutBMHzEFR2KeSqeXrc7ZanUq3",
  "key14": "4oaVkyF8cE4sTZqePCuUtjyCfhFsyZtgXSmw5uugc1ehPcSdRyBnHtWX8FntS1nevDX5Zrz77EnFSFD3ooN38kuS",
  "key15": "3uaFzxsMFYagRk3wvz2d9zFKJ7t6sCVLsz4j1HAaPWo31bcz5WUejdkVjF7kanEmpYUiUDx51QGuHzzGz68WEE6Q",
  "key16": "4xFc3mN4b6zCWpYmoy2nhBuJ2ANJgRZitUR7BGgbJ7oiM1znE9S5HfsXtgPsyj3sLB7489PKuHuc8mrLnAXZBiSV",
  "key17": "3Baep5V4RLkTDqK2aN4DGb4PUnzYo88e4DpbEZUHh1kSjKoVHxrqAQWgjkZobFAt5sDE6Ly6De6kSVJyiCFyNXPE",
  "key18": "4DRiXTtoe4HruM7n9ieQN5d4VaVyPgZaBbBtBTxvjUgLEKGiMn7RNFZM3CvAZ7abM777PVo5zWqRYV4SnBqkxrEm",
  "key19": "5hZS341FhRmnRFFj7C1XqQesaYVYPWQQiZADjdfgjBTtTgs68NyRKuUtdC9yeVTWscQqzJ5WHGZVJ58tSkYj1xth",
  "key20": "3z2omuCu6xBQ8nWXuhaTDsCZmfD98hhSf5rN6S3Hds96CEwjQbrptxe7at7BPSphQ3PmT172v62diPWLN8izyDt4",
  "key21": "gbCpg92J3meJkbTjiwAX4Byn6RRhVHswC3gCeqK5TCxZKjhnDVsutixSfBjVcNTd44oQpDi1SHTkHbVB2Piro4v",
  "key22": "4cGMrXf1Zneve1rTWyAPyBz5UhtFPdddsM6jHFUssb2raAtHvB3tuj7YnmFYrzEbuoFaPaSkaLoBAFPMwYrZgBzE",
  "key23": "5xi7rfSKk1JSC37RcmF98CrNtMxLwGH8rfzokwqJXuXftAtPFGz8Sonxd55brqRXYuatiJCZxSwh2gwAvYsvGCYy",
  "key24": "HAd6XAqNAXeGHeyqvEZL4wkLHD8ZuTf3vSbWMpywLpjXUAa7g6Z9XK9o8kFuGB6gejUauANkzXRvnxLabwuFmsC",
  "key25": "4dErYYitrH6GsL3fuyb13WCWPWtEcnFKDUd4Yb9m4BHrc4nHeFWJLkBxFdUpRv89T6cPWhYSpu7hXg24f1rP9ecj",
  "key26": "556iuW2DoYYvt9yu7jcpgBZcgycqpCMUdwYHF5LabWMFcZcgejEyrxisUHY8HQhkTt9W4fDefyEDK5TdHJ89EhoM",
  "key27": "3PzRMuJc23BQNyn1p9KzRRKmdejrfM5cYvBrBKRyFqGu3AyAuF9mkSxQ1gGcx23qxDiC1AhMZfSi49SW3dMaELZD",
  "key28": "FcfaNG8QeepA68Z5teQFHbZqW1B9HpSKSng1ppTzyvrrJRZZe2tebTqknvD3f9kzqYyzx6VHQMhjjkYotnwwA6z",
  "key29": "5m4oyg3bmgENeU9BH21XmPUKRbNBDyTTP5Ba6gVG6ZVBe3yb4xfCQzHx9dkr97vByPF3eYYtTd4B2gfUHrBkdQEE",
  "key30": "2bt3dMNdNwyRwftUu8eGDk7LtN359wyuzvKUJgQQy3Uvt84AfAbk6XNTEj87YhSv8UEWX2jNpHHWvkzcGpQZmt2K",
  "key31": "29gxBsiK6FzPw9fAfsq8SMBo1zJs8A9cxW1Zuqt1LoQNZtT6vxYkVnHA29J14PRJ5ekx7LMNhCKTypEufKGF8EYs",
  "key32": "46KeqcGg9XGTvaEPfCDuE5PGYH3HbLLZCaNMhw9349EgjR4aVGoTrKqXQmGqoSzVbcwmdiNjdM4e8mFf5eb9Jyws",
  "key33": "5Qrz5hhg8MpCSaiTECrJgKFqKW1CBJ8YrwtsYBzYpMhvD2EqEYdtTvz6dToY61VF4dBdHToG85ZEgNsjmh3spBXT",
  "key34": "4aweDNFbPkeubNrML1Zc6HnvgGgPFeypm5FudkbXE9a3y5A7pMqtLaJBVYPmbuV6P7ePtR9yGGFPrTdhxGx47Ms1",
  "key35": "5nwuTcjMjemNetfZqjiLtQMxUi8hu7nuJdbsY9LfXHyKyLDXufSr4cjPTT4C9noTPoknUDgpZq6hzrfiBZTkmFxZ",
  "key36": "4WK6rXtZd1UEMXN9xwZYfPbZf4KtHgu1GcXeEVnYF5rbSXWxD3tYYURughTDPN5EdKh3AwyqYmhMZ6GcJvBXXPN3",
  "key37": "3DLLgNovcRp3breoEa3c8ov1oWswjGhyE5uzgfyXzGTqtmBUFs795Vt5EcqxRxBUu3ExPXVYMgnb2uEVjrKvoRX5",
  "key38": "55vuFAZxDxw9GRW2j1kCFqU1ynnBsm5KGje6Ls3iiVRrTEyTjMefX4JgSori98CSeaCXrBybNzcF9bPiuafUFykS",
  "key39": "2iPr4NpcKYRZfWYhiah437R516cwmqYTMT8N7Wtyiw6Z1TEQPJGpb1F4XaDBnHW8tZHqMJPU6o1wviRthMBnueJh",
  "key40": "3Dnr6bvH9EYxmH4ey4cQcaPbCZD9EacEYSgwhDWWttGG8H9bM3cbeQ9jszV1M4PGB4oikCp7mpDNNXe7fUsCBaH8",
  "key41": "5PH8cuoSWtmtBTDSt4HXEwAmPDXr3y9xqWgaQgmTHCMThGz3d59eavgWeWxhq73KBRZPsCY4M4PE4w3KzU1bShXB",
  "key42": "59QXPMDA6a1MBFNeeGnnVKFZ9BpbZvMx9YwL4rGoYw4bGbUqw1QkHVZvMXjwRwtBqLkZhwtoWtneaKTbEVk2pFN",
  "key43": "2LjVA3is3P1AbrhMKNGTFU4K6SkFxf8dqqHfYq79TdNGNbHVQ3y5Zc6Xe8CgsQuTetd9qHZaymBJGnbTvjmpe4HE",
  "key44": "2ArhQfsmFrWkXdzoqLm8ZYKQYDyfx5CExsiAuUaXb9chPiLZTUSun6i11719Fo9f2fSD9ujHCwkHpQmThKyVWi5P",
  "key45": "RgRxfrX7CLSAS3NcZi9xozimbQDM4HqABChzPNBZqhRZVBFv7wG8KDkc9FseSLppvQYmGgHem1xgE91kd1yYjBD"
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
