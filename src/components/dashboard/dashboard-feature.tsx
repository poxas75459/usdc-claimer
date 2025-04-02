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
    "3m7Ue9TSfzfL1VxSziHHsXaYBEEsXHRjq9Kvh4F6iAwP7WegY3ENPGQMqUWw2nkAChVD85xbd6VYYF32Xoa4vVNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368Zhj4RcMybgzoFo3Qhp1UhZerToDYGD9TjAhzMiNmjyUU3vfmfrzHuurLqzB9FE7TSX1pLR1zfsALbCjcEfvqW",
  "key1": "YDhHYQyWUxTXBgjJh1HuyGiNTifm8fYYz8nyjbDcjp8q8gPwT6xWMm73JmSuxQuxiY8svCL1ZpwRXF7kro56U4x",
  "key2": "ybwEbwBnRDcafRXKu2UZbvZW157hjoQuZ82smeSD2NvqDQeeAZMoXv6dhYyejfnXBUb4Q4GkzngS9VXemppXjvi",
  "key3": "51B31iAP537kHJhy6zCkVWvJhJKvcd231gjiycqvjqZCmy9S42dVcZuFJWyXtfMJrs3ATksnGhWncY2X5cqv9q64",
  "key4": "3hSo4aysZEtpc2QLfWNhMjokrciankv25RNm4gBCGPfiZJkFARLC6vWLoS58UBX3PNcuLiyyorXAk5hP2FSosmMu",
  "key5": "fwZ7AMuDu1iegfo8bURhhHpRzXfRYKAfzSMCCeTRcHZARJ1nZ5mzYgx2DyzbJg49fwCWttTZ8qWVvbrPSqsmise",
  "key6": "MrPyNzwRDRZXuqGrxnRwoXuBGyZZQC1PXM7xvfFd8SjWvG6z8S58KFw5KSYMy6swwkdmoatZfRaYpXbuJtY2AXg",
  "key7": "5JHyh4uicRrD1eJrEViNfaAb4Rg5WeaHAWJKtU5CbfLHs3kKn8xMGddRD7A8cGQkEwmzwH6fMWtp4LvY38MRvMWF",
  "key8": "2725GUjUMtCCNb6gY9yfxJ2EuXJWPvu8MpcgyVDiXETsBGFi8CKw4bjqhZknEMkykRHj5whhgiCQALJKWjoaSM1J",
  "key9": "uZgDDDKLW1XkDbDc1VsZBEASrQXHcLN5VeoLTG6ZuJs1DtKgtoPMeW5kH8DyNfW2LiSTranaSdUC7RKJzFVWhWV",
  "key10": "2HLFBWkxTB9b1Lz7KzNah2gpAfqw8W39i8G1hEhNFJfGYccuM3Zqj6NC9hVToHBvGf75qG42aXqnyHpvKNFtKsss",
  "key11": "23YFmHvaHAScHayvMKUhwUaKRHF496WB2ZCvS7Mrc4DpCY1cBeCAWAr9DFNsRwW1gA8TeHnvJGjyVAMmcNXmad83",
  "key12": "ULMAke4EFZrh7RFjuYhnUmxeLCk6aoMSdYjMffjy1ADSQusgYuLpNsmAdbSM4STEGosBa6UT4Zx8ZeN4iaNFkMC",
  "key13": "4CSeF7AhfW1bTtycamHEfMcMTZpWeTK8MnvQ3838XvjAx1aNtuWsHkQ2HBbarQWrNhhaei2uk8Lh43LTyHTHaTiG",
  "key14": "4FJR9WrCPgf3eFrAF5AtKKiJJo53wvSkP43fJvYUMCLMRLxHc6m7fRabCCH2dffpDiordyWi3pFvZUwh9wwgDhR1",
  "key15": "3cFEGcWozgXvZ2Av4avPHyR7eQdUXswTNLkuj9RRhsThu76WWFGGUTjq1W8eyJ9fQ7E5QkuwMygnbArhYeuxDQSL",
  "key16": "iJupN3JdEcmUXSiUognNnLoQZXCYijrDhGk6Y8q9dJYYUzVedJAruA2z7Bzd9BNhamnsdqYrF4AaFmZMzjp1FF9",
  "key17": "2oSWZzLMPRwdbBVuPZMP6ZUePj1spyVM4uMJvVrXwLq67bk6AqRXmmZtfKPVBETycBRmQXqdLHGBm1yTdnHzYuht",
  "key18": "4XUcRBuR4bQRxubeFjvXjijdagvfqkWUA7aYWJVe44JLDegwRtTFvDpoqkEVAcE1Lyfr8ZKWPDG5gebkjmS5aBZt",
  "key19": "4NEVxQQ2YC9iBiin1aA5r8ZXkoKmeogzy64Syxf2WYXcbEZeD6bvaMPE6SMnmpojr1ncu5i2EPwFvwonyVfSg76a",
  "key20": "2EJ8oYqYTm83DmE4mxRo8nNdPS8KAKjLswPHPwW3GNatCTqERLNaVwhX7TTKyPUVJuJVjx4JHRwkNTBWG44n24kt",
  "key21": "5KjVnZGsxF6rHKioF4Ven28Ltrs5ntiztDRcCA6BdTpjN8h2d2kAbGx7AwDrP92VQqM86JDxXzsY5M3pdgGeeJuT",
  "key22": "22tPmt9FfDSD1YLgqsNG2VTZ1wXtXMUo8Sg3GMhe2LDtouhTg8M26zHP4YqvCBbYSRFVFwn62es8kVPzJENvwMTC",
  "key23": "KEj1Hacp7NBW8L9Gq4TgvdsRaFwMgQRiSz9RLPxfDSNomFd4CrrbEjgXKyg4wJ9kASJbrv2cPWvSVQ1PWxSzu8W",
  "key24": "4nX9e1cNGFGKaYvwC3hqYAQkBPcdQ6tokXYo36aeTFho2NTWdRB16dssb2bh4DVAfnE5n9SHXZURKeqKCgYPq67H",
  "key25": "5kuVqdNLxamKYEWXuEPCZrtCAoBNNWAH1bk4Vn3oKtNKyqmTRFMb7njUnwABiJ4SXvqzPEACzCkxmQUkTommtD6G",
  "key26": "2YgZQTvxdZy983GtuwgwWJzgwnN5DqRJuYs6JDmXqQcctbv2WTvDYSnWqrF4dHaysxWQZhD9dfPSKk3Pvcvdzf8y",
  "key27": "2NNCbCFPjL2Y44MLz5n8892Sm7JVA8c6NDTZzbfchNknWM4uDo2rQ97G51TiertNaRzcfcTBvEGMFbJprFM12mV4",
  "key28": "5HyfG1gqRtKxtmpWw8EcyQ7G5oNfnVpQe5jjfLnoWyLsdcncx3YBq9H44wgorykbiMcvbBfap97CzMojbUsjmkDt"
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
