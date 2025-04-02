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
    "31TipdRWgQFBT6QDU4PR4bS7ntdVxLTP5wrF5yT8LDXB9W2w2iaxEXgrw88PVWoipQBKjimSpe61sQzkBSerTTzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wsSkQ5S9QK5714wwVKpvaKD6c1A3P8FQeQ5qq7SuimNEX7kFWwwTbnv8PrUfo1jwCeAWmXoEEgzLE5vSoC7pp27",
  "key1": "3mMZd1a3ZLGtr7NLCw7LtMoMZiMrp5vT7qKmFaFqS6H3wmCGfkU84hSSiiDMBrzzMa8wQTg9zjZah54RNi8d3p5s",
  "key2": "365H42ECWYmRyJskW4kdrtdQEgFeCYZ861JyB3cWtFoggLVF8ViZVA8qUnzDL5tCbb4Pz1tgCVNGnY7FjVLUyxsb",
  "key3": "43KE5JLREX4Wao2AwR7r58dnZyYJiFsF6Y6f2peS2m4UuUrFBfAPHYqMapsUPtvhKY7WzL38QGzb9Wki1y1Huw31",
  "key4": "3yJKmAcr34v5j8y4vfsfyK76DGCaXe2mcxv14gq1KgcePSMrHNjRiEUqpPMXqr64iJK3XWWtF8x39RBWK9jKZLeB",
  "key5": "49ebkFfMfTKqTrDDsB7FdpL75akB1JYWNx2W9HX11BZziEVjx1chKmeofx4FjXzjUoVRVFRB1gukH73qiLo1XKT6",
  "key6": "2gPtABASEramaw2apBZjQgNvJbAnvxwpDPcKxeH2BZ53PidciHqKmpqsHrfp1sHR1niNLGKk19BXZdBNqEUy4sYD",
  "key7": "3fsHWZiyzYHLSk7Wqig57ADxmxcg1NemA4YzmDN3r5A7Gs3XZQz3p2sghTY2L3woLEf4aMXA1C3QU6R7sLim1PYK",
  "key8": "4ernAfhkNH2W5MMadtS1QSeVExTiEwPK9Qv51HbLFsmKcEiJVehJjDiovB4hBM9M5yFwfdxKABPbboDz7ygP5J5D",
  "key9": "26pksvWkVS6RT3RJAEo5WSHogUJt6g2PUXurYgv9eryMYjxnc749QeEofA8oKit79BBTojHPRYmr72rhSmA52wgx",
  "key10": "4PspMC38K3tcnVvuNZW37ovvhVAFzoVBs2Fq2xgmyLGQkZmdaMD5PjnkpaB5cy8J5JXfY1f39jAkJHrcHNj22ZBe",
  "key11": "2DUdZuMDoRkXwmHsaJJkmLhJckSo1nM1mw6TkU7yaETqbCXdevatmoeuWNHMD7Rm5E4kpHEnk56Y8fG8hFa7ZZs5",
  "key12": "2GcZvYZtbzVaXpouShSLMGj9xzDG8abHBYSELJUmv2Sy9sk9e1KoQjSJsSAobxDs38NkSd4cuTMEZgJYQsrRH4q1",
  "key13": "V4AsLUDU2r6R87QJA1NsgQ7b29uH1KZz13mz94Ebckeixhk3zu1kQsiFbWoLqaJCRbRzWGAUzQbSjYQpk1E9RN3",
  "key14": "utFLDfin9feWFM5tbUot7kNFig9zPVLqqQFR6svKZMEERfWpLTYeVMVusRtQ1LzVGmsq1KHXFf8v5bBdETSktap",
  "key15": "5upRcgUUt2e5rP5bhDLBzoPsNmAT2NF5wgeYzX7v6MNP6RXZUDxRtVEFbTKeq5G26KLnGJHV3YMBjxbvf2enpCK8",
  "key16": "3orYXKxfBXyTSKg8FkYQFUjMcuZr2rXM2PnDss1YTZfWoYZb1iBxmviserKj55SBwdk64eB8E6StJCSYnW3W6wtW",
  "key17": "5bFMokrKC6hnvxDUHTEWcMdms5zJ4EkuQwf7iBVShRxRS6UMt8ddMKQxhdWbs5V51LEnn63L8vsp6yJYASi5mJFc",
  "key18": "3eLcLVjZcV5D5anHtWd5nYPzLocGKaebFanRcZGQmLH76mKhtvxjqUMSRXD9j1RKzYUhRPLEhVtcHoC7uy2S3CMq",
  "key19": "2QhaBh7cQfEz4s9eesG2uBAzZJgP6xpkBGsNGHMkHYZ9HCiBKbcYPLos33ngSLgJX8snhGoHhwRh93QsgtNiXr3K",
  "key20": "3K6zXi48iM1sJUnuQnSxfpijkmDhdV3KJJXLcy1MGPKbcB3t68HRNDeDAsuHypdszNJBbVfXeqixAvx7HCekxYWL",
  "key21": "3m9YQkTxQ1kfamZQ1UbL4tJhiDFRNdnYxXF2wwFA7pUwMtN1MHAVH6sxf2QZBbBLmLmWVSo5eCgkB1JbyM5fJf5f",
  "key22": "1R7JyKey9yGVmj3LtLp8op7uLCb2CMFJEWByasvrYrcPgi1uQrTKGZjUnDGAnrNx97dBACpoU2YENrEEFUS9p4m",
  "key23": "4V5UhitRHAR1woLyDYC2YPntSr4uz1qzrVF3B2mEFPSLMyh7FPd9QHbmxCqBgHc7GMW4RtPYFaYkhFBFTLbByUVA",
  "key24": "2ZdHohz79UmuUFpdCz1CAtag1mw5XYg8acVkmcfXQXEmfFVWgQyT8FXTvPxWRCDFNCPYVWabJdEuc65QUHwd8LXF",
  "key25": "4FN78cvoK6Wa513SDmwo8k26V234qc5ysTq6bS2ZNK81REqvS5U2C8fQyVCmV29YF3stjcB67c6uz3jXkYSMXMxj",
  "key26": "5XXEJQyUTAezP9bZ3D1qWBV6fJmrHJixkGKDCuezWrXUTHk7xVBQiiwPhSmY9EqExiZuMcmh2xdiXceLiMiPwxsC",
  "key27": "4yk7n8zj5Y9UPughgQzpb1oabMqqTqGTQkK8gVG4s1rAt1hxVZrcj2Y4yMhoGH6caEozUifz4FdB5Y1s6xA2xZQi",
  "key28": "F1DMGeTWLX56fK8ygX76aKQiK8q7Y2d655V9hCf7ELWLNjYdGF8heLuaW8wGzjP9h96GWPScCZfGsCP7xGXgLju"
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
