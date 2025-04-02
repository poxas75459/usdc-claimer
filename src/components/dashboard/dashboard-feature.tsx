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
    "2SMJY9jVPsPeniL4SDwzY7DJKkjSQo51ZAjmtYziJ7rN3uYdkpdUmqi8PPyEFcmrxrxrNxLjsgiK8KcvnEPV45FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8hfjTQLXc4h97XMfgh9DsQvYY5mrsA6oc4RZBH4r4JbdQzgD9qmkCYaGimb7wdsPraG2tExsncTKr2LtC97AaK",
  "key1": "Emopww3RZP77pHomdb1KWZHBdwYWunJGi2B9As4atTDbWVubbbhcKia1WNJyqRgLfk33TBdcaDZxZCbSpeQxJpy",
  "key2": "24SnXZmRVP6Re2g2nKSugHyWUhU9ykmTb7Wqw98m9WfiyWrRkec8SxsxjwumMA3on26RQtjNTT9WT7avRf3NDqG8",
  "key3": "4jGThTgYhuQxABniEd138i7S5gCdZvuHXVDFtBAHripAGsq1AT5ku6ecrsy3qfeRksuMTatqKBFxy4oNa5ft9Dg6",
  "key4": "33iA1B5qyar2N537HKNCowEncuo3swGrLcCF3NkguaVvBsekfMYUD5u8GLiApkadxKUV5hMwKNmTZhKZuysjqQF8",
  "key5": "3VveXrQQ3Pzm7B8sWQUuir1gZkAFXbRizjjbnBqmpYawD8mEu7UZrkJVTTG1ic21qg1XCH9Zhixa3xwrTEmCdqc9",
  "key6": "5m5o7uyXHp9gZiGyHbmrqKuHWrBjbTAbtCaV8u7Yeo5wPRzMNUaE8iuKGGyoencbshM35naoffEgVJAxihfAdjRf",
  "key7": "5gtjYoQ6pZLBcz1L1LQD73gQqt6P2zjiujWStSgnzAdiAc2i6Cc75xYQdSYVF36KGbf94SXEG1dPizuwRbTXdy9f",
  "key8": "c9sKhzeRXbN7vDpPpnVNRXF6wxaupqFqKJnZUqSqFU2eEwFpc7E4SMZgMenfDST9Hjwdym4NpDRmUFMPTgXSieU",
  "key9": "fZvsuVT2oZ85EmJ1AMruZ96h1VzQ1YUikdiDt89EjbcjEZEWmgXrAgRYwrrecYnRJRvmu7QwsLpPMqjVqqTrEFx",
  "key10": "55tridhvAn7imqq5XW7cUNwd1odTvhjd9QUndQjEjZJstswQRCNdYcJbF1xVKdRhGucSq3i49RxJoaiU5F6i8sRa",
  "key11": "1Z6BF6idT646b2iuxfF4Fex9mG4Kd2h8pSJSMYFVw4Tjq5HAiKe9D2dp88fwPg3A3sjXyAo1sNuRMRJxtpbJCZi",
  "key12": "3GSVbw4T3MFVfXMpqQV4siXbyPutjeP1cGEUB6sANvhaqaN14mLtzJELzFLTDUVKTkiZf9d2shB596qxWipZrxVG",
  "key13": "4j7SeAUpm4u5c8VUNHAYT237Jkv19v3iNYBUXqBYygdtca1kNgzsQ5pH4EdqKvCrR7LJPX73EM2SXYTePiei91dk",
  "key14": "vs5FFTuUzydo5P9edKo2X3yxkMdR2h9WR6kXukT5Zt2m7zHFxGLEANjPYVAQoDR559yvAN142nLhpS6aL3VGYRn",
  "key15": "4Nr4dRScsCfLVLWevJiSKkpqYGZb993y85BBdLBewcYMvQjGYmy8JeikNBc4j4rXXLVv4eryUFiE3Je9Rw1KnhKM",
  "key16": "5vpNBHrBKN5qRAsozrFYrBJJTYFFLmiqkTKUJ32QQ4zgK5SC1yig2wB8XKPthE3sY1rVVUN5RD5WdPUPSewMez4w",
  "key17": "4spLWD9ogK97KBEdVkjKmX8FSdHNshqCcDM8YsBFcCdLs3PKN1Bn1YuHNRyVRdxheaL6iDBMcDaTBpfHP2THKR5M",
  "key18": "2n1VmwjLQ49kpeySq7F6EtjLjATaCw84Sbd7iDqhEkrix5425XZ9gQV5YiZSP14btboxYaYX7ASUBUt4ahy5xxfh",
  "key19": "2a8QVy9V7bqUo6sDJe6Ge31qt3qNqHy3sUghREDEMKFfhQv1gPKnRsjPN3QFUjiY4cPQj8xxt3HAssWZDgGDCaKQ",
  "key20": "3taDMXzQcCSG2opT2hejf84uMzNhNqaV85QS47yGAWGt81ZLACThj3NPLpoy2jWhGKgKWVPHD6yGgEGeNN97wEBL",
  "key21": "vTajdDCtTXWmDULFk86eSJJCf1BR8ewfJ2KdpYBGVYDHDjECr1unGzLfDfYC9ZqCia76ApQjtf2GHU3WcLC6vv2",
  "key22": "22Timv7Areah5ay6JzgsRNq91rjEAj7HCvDwDFaZpP1p265mjxdJg8bFAFQpuwfakLkfXhrztAucnn9mx1uBSjym",
  "key23": "2qpGr4kAjoncTivnejkur5jBERTwBBMyyrXgG7e4wKkyymGGL26CpgdFPzdZzjpsAvE8hGG9tAPDPR8guaVjS3Ce",
  "key24": "4XRg8wAvUYcNjZKdrfkSW8SMu7zyHgQVktkwfLEai1iQwvVjUAn4vc1cLPkwdJrikzV37pwnojJiXSJgQGXih1hs",
  "key25": "3bgDKjhPiZjT1D77ht3MT4WC6f8nbT7ktzXtsQ8u9LpqcxeaYU6VsuA7EsPoxSAD37rRgtyCktpvTRduRnEZHpSw",
  "key26": "21V7gPeu8GmxeEE5ukm3V7Ur9ZwbMQRvTwbDsPYDuawSBV7gG6GGeLZsnNLFNPfX8egcm2NyvVXkPFbKsR5u8oQb",
  "key27": "3vJnC3hxbUQfPM77wH7Qy2fH5sRb9aDnwBPSTjCGvFd3jH9wmKcReLWzQY8TH2fYQRnQfjkJzgDbNnTBqKpMsZJR",
  "key28": "5nXx182vpMMq12QU5eay9SEUg89ht1G6npTYcijZ1CvbykCSTLj9wcG6dkQx5cRR58wGFE6tvr9aEumBpaXjfgfG",
  "key29": "42opjLJsfXKrGcsBRwCA1gMuBQJB9D4TQoPSauFppMM7yKU78Qr4uAQ4Zhe6MEXVKBMRsVxvJmQjviH5Ttswxsei"
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
