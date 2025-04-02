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
    "qN4WqDxfHS3W5yFdMjQYxDah2Knnc5ST4bGuVsTUUX33LoDzmhZZBEZHegP5ZcXv7fe7woBF2Yu1os3nufvbb77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sUKsSzFDmb5fV9eeDi2Ex42E4TRTtWyn3JMKvL5CBJB7chwjrdY2a3ycHGepnkHPjMg6qP7gUj6UA3tSKWadSQr",
  "key1": "2EYVw4vC4CwAKeRQ8HV4S1aTepuZNuQy1xfn2ZFNtPq4h56MzrKJq1VtztnRQSgme82jNwzzgeQExZgEPBGLaudR",
  "key2": "3QD7xzb9oHtY8KEdhWca5Z8M2DrkkiZBKxPqYpdewjAVKjaWfa9jqSiE24cTUoV4eBRKzujFekVLkPQh344NsMWY",
  "key3": "49kaPbpy4hDwJHfDVi4podEj5b1wk9qVxQ8cDWEvkPYV2axLQCSAgmK2d5hhGaarnpXq7rvX4dYPzXbzUKgRBdpg",
  "key4": "63DQVJB5TJABgeFoejTFcpHu5Ur8jFsvDxPFpFLxgmsnFb7fdRq1UbvxsFS8cVr8BowMyvxcGnDXGzsHjaVKfjYL",
  "key5": "yp46KqzwXmU3BaUjJpMQmjaF4YXMmE71rewWV9dX3cmmM5EVy92Ge2YaydTcJn5dtmZBMpqz8UGtfuRb6C5bY2M",
  "key6": "4zopnAej1v5iqeupDv3waV86QqGxWijc3rXuUmVgbAcZ5EaC88MxfA5mDtm2MJhmXANE2tdXjCpBbeEMe2JrZAjQ",
  "key7": "38GKLeYs8s21zyYyuRvFxgn85kPRCCKDiGLA5ckDCCQT8kT78NZ3FsSbuoHTMpGkQHWF3GEePP3wtgpzvKEAHXze",
  "key8": "3phXEUsXt2FkCCvnSRhVRpiVaEZX4GkvqT8BNqTovsbMtnDNeVqoXdJqDXbVgHEDDzAjKTfi3tSt8GJPnCryWKuj",
  "key9": "2J2cAmdsd4uwpMdMMvxVmV5P7n4WQ6sA36PDLCVDynk5xQ95Czxpr6TC3Vmdd3KSsmyqRMKd8ghBUePUTHuT5V87",
  "key10": "3FyWWuCUqPhnXK3f5RAtWrS9QGmGMcEc3XKQgnvxqL6fsgWL6AgAuNDfykRbQRo6CUT8tcxCw654uqhgcogzAizH",
  "key11": "4q3rfycWbwZ14S6mdPpcqGC9Fg2nAr39TyY2fKzip4vFhi8GNzHXhqiJfCfgEKkc6KYiVyvkwDjkvwQGpnyBrFLV",
  "key12": "5LZoXyZm5t37NrSwV3HJFgjh6LWb3nbuoBnbU8JqWUfWi699zTGpuSSQxubuPhyKxfWTsFyoKqG13hdavPQrGbvF",
  "key13": "EXT42V25n6Z1bhj81d6cbHwRV5rbAwaooAinfKR7b6DSUXgNubGwRuypFdBAtwQy9Lobs3FDjMsChDwzKt1xv4T",
  "key14": "5EbTrs9VxHQvN2UbiVySG6iJHvfeek6Pm7cZtWZubS7jm8iGpBCVEXq9FMaj3R5oqgLzYJQjuRTxjX4ULAkBiFLg",
  "key15": "2UTAcUuh5i2QRSTHU9h9pXwyTMn6zVe84zfy2ww5FzKvvekJjYQQ7AWei9r7UUspEovpf8iJmkL4MUHoiEtkmBCc",
  "key16": "3wMVP3xm4gk9TZybPtqMQt7HwHZeddVUqLDS9SbF76kYwedSqkT2Uy7kRdyePD8gxWya5bjqpUU1M9TMtSwe3t8p",
  "key17": "5EcSLi6x7gcnvLL9FKjtEuinMmU5rLgn6n199L3GPFWNBf8xGBA2nduwR6yVGg5B9647ZF9TY6DzVcAAk3S8ufWn",
  "key18": "3jLrUr4XqFJexKgHkK8o3A5zb6SZDw8ktrxbznM2oh59uigRUruycfD8UxPc187xLkrgstyrogYBKrEg1UKw6K89",
  "key19": "6nwrE3yJfkxpTSP2vSN1cHeTvmeUueUpbZCUmtUE2Kigxs5gkeRhVVAYsUM9W6ESLdc25TKwhjzuAFZSr6866Qi",
  "key20": "5yNAbwkzXCmh9TQ7AfLnoWoTzQgsyxRJqfBdZYbr3RkiqNeLSdoyyCwaJDRoqrmVHpV9s1xTxw1kyBeyARAKvBTu",
  "key21": "LmiGja5Gz2iUqhytQ2mw1HgQ3fCsB1mXKw2kjtz9YLC5W2AY3hL45hwvLAKWUvdu7LAPfdXhRsKonY3UGhUqhi2",
  "key22": "LPZt4rJjiAdHifUiCvmCL4h544zFRiQjoyDojwy7umjevoQPrP1MgMrzAMBDpYEGyJKTwteBMLo8EMWgqCot2Lc",
  "key23": "2UUdzYb23i28RFcb1tHbnZLk69iX281XaPk4P9EtqG75fdAJkaAzsC1jsGL5acMe78cC1R1scDdG2oP26NdiSHGk",
  "key24": "3Ddnj5Uq8JrWFDcmDY7rTsabfUhHKWuxh5WYK8XGcWsspEPi3q9aEQMz8EgHAMWaPM6GTsDeEob5fQQxnVGrLrWH",
  "key25": "BXY8Ms4HFKiT7swVvrijj9fbfD7t1S2A6vgmB3YzkgjTFH3VtuhsBy3umgAcWLC81tjkEay6xvHp18txxVF4UwT",
  "key26": "3GRUS2Wsa8ZJBhGBRuNS5D5ENtPybYj8G4CxXKse4T8D7EzALajHZmBX1Zeyf6FS1woq7tRFhk7WWXkzS4JCqCmz",
  "key27": "nDxp15S771ZbyzBjgidpUDFghXsftbQ4HE4pfr6fXofG2QmTgUHx6Jp1cxKhvmyRQJm6XnCkdbAaigW6ZzhZPus"
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
