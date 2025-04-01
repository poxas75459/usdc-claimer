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
    "j54WpgoUVR4AwCkDqLBQH2KkNriMB5WPVTAvzqAoyY6FaEmoRfnzwQkH1yRd7CxayiNcoPEsmuCo5CHPjbzsRf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wLNN9tL9j5rgvuebnFkp5Gk9366uZRTHpCqjoh2wvTuxm5U15PpbKVwhin2srkUSaKgg28MLpkzEmbjS3cEedk",
  "key1": "3ZGov4s8tKT6h4jqdrwGPW2oRsBhP4L2R1JUUmePTJwTPstD4S9sCARQ9zZbXNSUfYa74y3M3wkfjoAh3mxzNE5a",
  "key2": "3fRywvj1nWMvtNsKM8zrLKQWMBost9tvLPR3Tc7wvqFzoJeQ7ZV3J3yzNmQ39qE9MwPNo58MghLhUyFgVBdt43fF",
  "key3": "5QENeacJwEZfoKrYsRkqoFS6ZLQUiBv7DvS2jJWatMVqswMPdeHERjCmhoSvfTX5ZXScJPZNvcf4SVumYL7ESdSq",
  "key4": "5tMmpMzARNEtQzPX6iE3eccDzqUDR9ePT3dk8ZuBhMArqXnuzbFLqxcXS7MUqUZpd4Nz15HcfHPDYHdKPCWVgD7T",
  "key5": "2o1xqWTuR9whK7nLqtrPQGeAHLT2HYNQigngJJaW7T2ZCt6W5UY1UW8xJLJuUR9ScUPkGQvMa37w65Qj3hazvHyQ",
  "key6": "3q3sSg2fLH72wPMS6x4E6emNRj9Rrt5kPUK958CAR7jEjigHrUEVnKa85Cib8549s72hhinrh28QWZ3VGmczQtMR",
  "key7": "3HkJAw9pLdx172RMVY3U1VczAUZkAQuo3Lq9SJDV199NErEzhotDqbGehoB5jw1GjwAvQwHFEHtnvWAZcvW5AdrY",
  "key8": "63pnGYaJAK2RHxUh7sextf13Zz8iSnupE2GktBL7xUL64uNuN6uEDLDEUTyQPznvGBGnuEYtTegucyyNDQvp8Woc",
  "key9": "122EWiDB9u9xaCLBA8sgjVhu1Y5cEqQCrL5quV82KyN8KisCtnaRMAQdBYKNFkANVUpFmNMUQw6Rv8u4mYBzbX6M",
  "key10": "5YrdqEpFpAD7sTQGCDRBKtxhiHAdj9VnrcafXcHPvaxgdrXyHfTJxfqs3v66KE3Ya6KLAsrdh7J6zuHd6UVVrX5U",
  "key11": "3wUhtZ5AZSVKSdB9YHRTEjS4ffpuuaqhTyJbJ2kciyvPRazUCpe2qxdavmn1ePjB8oRz6bGabPMfajm5cSH5N6Av",
  "key12": "3uSgtx5z1rGWgzYsqQ54uA7Fk1JDTVvzQEMtpvrxMxQCTwmEEcWdqyT2s18aA6eHC8H8cadZWPffnmvST8VP9uNZ",
  "key13": "5rMGxtMKxZRf9KFoN7otXiPawWXnmQWeqCzQtuXZUY8KJFB4yxDRqTRnsPN2CRvu5a5AanxHJycCXLN1YytXPapQ",
  "key14": "292XTfyox33LyjXpN6kMTNUVMUx6sKrwgKY45kp1XWoKbwnNMqP7e8FQ3ppYn9xHBmWK28x8AgzZhSGFehAwytpz",
  "key15": "2Brmc28LMDLdepuf349mZEMTMwist3gzHQaPNEz7JZD4w9QDec8Kmmudie7k1cJuxiGZ7QQxhnNaz46t6rMg4Zcy",
  "key16": "2dp9mVxECtej3RFx5g74LPA18pWPv2k3Yz7eC4zgsX1YjxFyFgiXqW9eRjXA2c3d6CsxTt2rb9GFSatLMiTyZUCy",
  "key17": "54MVyyasoAUK2ypoQrYQGsB8hBb7QYwSsTNT5ZCGUEmKzgB5adJykKPvgSxoS2kUs7KBDA1ZyUXXaVFYjcYYEwrE",
  "key18": "4i5jHdScCa4giD9mHkBcoZ3nWx5voz7K69M8pExrMsdDqVovao8C5qHetgUGrqCRt6un9CE2EMqwrRrdx8bi7Lv1",
  "key19": "Rz7punkeA4VWa563p6uQUhd3aHvbwqEpyFwEhYDRUm25AGvsrpHdrLc9LGXdRf4oUgACrbMnG6Z94DKxGxzTPFz",
  "key20": "3gRzwoAsCQajKYsDrxQb8UHwxYMMTc13g9jwRHDkwUomicgki3T6sMmhLHW7nPEQfYWkj7inoVPksueboqrCycJq",
  "key21": "4KMLyvpCQw3jgcqouLkSMNQna5wBRMZW4hdnCcTzbaW3R7Zzi3eFyQZQhfRFq6aZWWySHEPs4WhqA8H9xKYpuejA",
  "key22": "3bMgCWGveyAd1CfE93QggYbZdsYqPAv5a52dk8q38YzVonnXzmSWtP2XaZb989JSHv4WJdGfBcoZQzwfR2Xy4AM9",
  "key23": "3pBHovLT3QZJfDfwcMi8PSqBLYzorwuMWE6dXPKnVsZUYTE5vUZw33zQ8KKaN1uczvC3KFFUHamrVgqivPiHAbfe",
  "key24": "3JyLb1KM4RufNVkWMUrDKKMVuW9sYUvDwaTPsRVG6J9XRyubdhtc2Amh1WY7zjxrjvFpLtFuUsUPDMPAw8QLzNgj",
  "key25": "4wn6exiRVQWAmeuhxxx8cJixqABbDNvz6z6z4HvPyvzgAMerhRNUbJjuFWA2CLH7jyAoSkyGMuXdh55ZDbmHS9mw",
  "key26": "5tUbGTViwzmXF8bwoL8xwiRrFZmbx4EcSXH6bEz3oxWrREk24VMrVFF3vEEid8z4Qf3vxkBZ2PjLGPpQYCFH4YB5",
  "key27": "53eC7dcAgRJLFq45tNczhL4v3vmLnqC6yxoFcPWZKw3LPCDrS8McGPn6vzmT9ikGKxCmJom1ZG9t2avZMHzdDaXm",
  "key28": "2iFGdBrqksLGF4GYyVTemN6pcbNs8yVG4WihNgKyRKvLoTnPSNdLm3BEvLUdYqM9izEtYrStNjkcdjN1EjBxm49W",
  "key29": "2TXHtM4zpGSQJUaE3goyn6onZBPMRxWocZ8eYwgoGE7wmZQN6fsrdNCsuK3f3XuEEhRHbxAcaooooTra6B8PSXWS",
  "key30": "3b6stejnW8ERzcwn4CRMhsmCXFez3Qt6Jhojwd7oizZhmg2AnpvXQbZLunukdo1kYSG28A9EgF3EnNozM3u1yqSg",
  "key31": "2UUkrvsndD7NVSajujCDJaMLwuUSErNC3CcUussVzqoJMqXfw1h3JSLgEs78SbbbdpJJKjpA3ZFfda4xXigB9P1g"
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
