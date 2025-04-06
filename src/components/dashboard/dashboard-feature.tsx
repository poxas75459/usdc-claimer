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
    "xZnaiPyKcLfykxCWFsafwzqm2XiVv1RP758jMus9CK1anurrdbzdyn8zAaCTizsfWHHaiHrMrTvySJp8JHQzKQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ehRtpEUoSHvATvHqnvSFKBa94vTuK9pPkctSDfSbjntdHmm3V92kjUXXUTHNwDb4atLad2AiGocPT8eJd8sDnN",
  "key1": "4yhYeeyzjSygS4sE3cCEqhcNhnuKWuTe2Rc6JNq3WBcuptUX9Bu2FD1WBCydxpaZYmiYPUKia22fba4Dds3iGBkc",
  "key2": "4DGaZS1dLRpjZmt22fJZa2mKn85cutqQGQji2QCTTEtPvgWXehPn8MsojVKvk81nCZtweWxMzEFq3TpMbdvaiGm7",
  "key3": "4Mv6qfYRYjJWaH4UWH5Vnfi2JVyNFc12ay9JjsZPDqKygxpi5sPG45yVd6E77pJ8S6BzXG9mC6otvdfEjRbezedP",
  "key4": "3iFHzxj38LhgcZFfEFdBzgQTHr2ufQibVxWepnrmHbnCSDybCn7DtvoJTRX9ueeZY7zP6iRHHbMbdf516gUex1kV",
  "key5": "2GhfGJjYZftZBKLY4BTzc1trhvrizmAtqwvRJRH3dKYDwPFaUWM4VqgwRJMPXkqj6PdfdPVCap7t5CihDvT1TnGb",
  "key6": "4fnoe3SwtfTvdCxr4N3egu1yLr2afK1AmmshnbxpkfCgM4KKidztz52JimJ9vPwaGArUiMW4PMo6E4qCn3DK7UzC",
  "key7": "5z1UYgFpQ949DjpWj64y38rd1p122u4jGvHW6uvbZswmPEodiMBF6foe6UxN9CyVG4ptBGTexP1UJkjHSKciF5YS",
  "key8": "2yZQSjUwZJaAjZeAeMDZuUuKRPWtJ39br8QraQmbvULCbqLHn4ahyDpFiTj3rNHowRe3NiqjtQ56tLZGfy7Ee51U",
  "key9": "3ro8gKDSiWriiH4BYQb3t2ZXCUzDAJJJfgEfVubmSNkkXT4b7rd71Jp415zhLeGp8Zrr4ZPpVJ89BYMpKys4HMyA",
  "key10": "5axdYu454GTTZ5FiGQeJ2erKuxGSH22sUjVnZeMhbtVd7SaxohC56mCQizMsL5DpKy4PbeE41NyHAx5ad8Tab6eM",
  "key11": "538QGT7X1uqhH2RSjGCitdE8QwxpXadrtNh2syHajBYywERnmKDqYiCt9hGD1zuhNcqAmeibLZAw81VhFY6nKvju",
  "key12": "f5P9BBoFF2N2i2nKN2sHzTen6ipAnLk6SjCBbxjSXvf9h9i3xtLuuSbAPz6NheXivPEMkt78nnnE28zDDgtJKE1",
  "key13": "PUFvs7x7awpnWEwbAbtWe5HwHxg9JSQqJVRPZQdhT48Va1sV8nyCrHuCTWdLXjQaeq9NvJbqaxJoQJkHqo87aTT",
  "key14": "4Y68snJi1A72shywNMAzLi3bko3pj1UfMKyAvTUHyZBzGPuUryCs1ft4QhY31sBMcbEufLiJcTKMkrcGvjx23x4F",
  "key15": "2QWUvDyWmmkje9NaxG2kRHag2BC8fmefkk28C8y9kMcfXJjcz1VTkNUgQf5fyfaY2dR1rXwE2AfmehWizeBNHXvi",
  "key16": "5va3CvBta5CCT9tFf3bS9F9BRdS3ENbfDngyyFNkZZ1kf8wAB8QsCxiQTHSvHbe2fB9bgjNnHatJ33b5bpqHD5ek",
  "key17": "3jyecnsof64iHGxePy3tsVTzcUsbqnxHzNBkZdcKJWqJMx3PfQ1r7qtEjLpEWrhQYqb696nSTJff8Sw9yfNSKhbQ",
  "key18": "4gMu4HwjXN35keqb8CeFQXSD1UYxzKAcmURAZLZrbtUE47MpHQkJ4C44rC46trZYYxLqUnAk1LZdq55v5NA68JJV",
  "key19": "5zJWjM9yfns7muhqyFqcMqW7x1fR7pnznhhuF9RdwTt2dztLvrPnarKfkfnGcyernNuT5cPtNTzon2vseL2BYHpz",
  "key20": "5pUMXfXku2xKo6V5eu83nA4xmYN5ZR7HMdvwtJ3K7zeaPhFhYcia9bTkPgpvBhTRrnEHfyAqdxa1kgJaHJpKDwF3",
  "key21": "4WGYW7L5mtJkKHZx6m87VGWfztvQYNQcLC6bPjq1mx6Ltpbq5cHvDFbAzxJYGAfP4icdK8hskUhX9Y79EnHnVEQR",
  "key22": "4u9PsMnyBvoM8FrMA1DoBVob121AvFb3J79rjuvAM9rMQyjE4w9okMNEekqvPcQaMZ5eoxJZ1pZtUFJJebJJja61",
  "key23": "2ABrvEEpz99YQwF5eeub53uMTeAxiwpryniFYcNRQcpVRM2uabVcKutvwBYyPfhyK6GDrWBrYvRcmxKUZSp37SZu",
  "key24": "3ZNKkrjcxH5dKwMGsSWvSXodbmaJz9Fus4uyqDWGCG6ngd4wWPtt4VhpYtimT758dD1hzE5pYM6YioSta2tGBt4W",
  "key25": "3iYj6icCHZsG4ViW8EQvGzaa53eFZYzRo38t2FJDsU9cZddjcgZTkSK6yKJMAna2sb1Tbo1bwFERiBNuXLxUveG6",
  "key26": "25x1Zg4JT8dNVT4UP5rm4JLHThD2uoASoYwYdYX25kDbQnRWSJYZMr7CX9ezxMdhW7PCCt6JrNdipNPKsTi4m6J2",
  "key27": "UJKdi5AL2tGyvi2AtqLKegZeLnEEE5sCeNbMpAzwBcRV3vpwAj6BZf6o4QFWSKGAuYXBZYvGXdomZ7w9s1pzzpG",
  "key28": "2mP8Qei3oBgUbRikoBQtaUPenL2wNUNPyer8egKVo4q5exR9ektgKvJDGRtCNSRPjNBtzqnUdDLrkEi7nLLSneE5",
  "key29": "4BniA34BSEv7qSZ7uxTDqJXGUurgSH4Tm8SA4AJpupc3uPjoAqdp3aZRJgaSnGKMa9rPR7Y4T5r7nvb7tdN4z1Go",
  "key30": "3B4jkpUmxPECjmtN5j5MCEXHp7eeyEizoZ4fQ1CacdESHrHcttniCZA6ybLoDFJJ9SmrWxSfiVuaYGTzczzcgRyW",
  "key31": "2PPJs4WrETRyRacu8RsQfSnEhiorrTGrZW7w3fNKVvZpWLJsoeHSEJceT883Xdq55tBn13DPbNoTVJ9xUGRofxFR"
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
