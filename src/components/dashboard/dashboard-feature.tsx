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
    "2VQcVoSm9YTjEkWay6s7vxGAbrznM6myLV4X8Sy4vBYQmmnZ7sAmTV2f32Vte4fB9hh1fymhRjGZry1PG85gYdEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyd2c8qCfPV6yMbiqi1qE2rY4kWhWwV6wsF2bbi8QCwV3T3ViEerfVW7bm2V4UmxWJDrQ7VaCwXQ7RF3QWiuD55",
  "key1": "3YDYUWofAaqYWGF5YL3KSCCW7vmVV3ey9tGATeiLHWVszM6efHZuSUHqaGTYLnPm4CZg9wd16G6BsRqNUaGj7rLQ",
  "key2": "2qumpZqUJguaj1FDTUEg47rNYJ1F4rqYQkQny3a3qRYWiYPHwULws1JiAqKCirrWVSM4U5EtNxDFCBzZE8FUh7oj",
  "key3": "2UZQWfwauZ9bmdUUd4opbUzAXowFiVN7DbYThjUszc6zUJsfF35QnbE78eSGGXUEQLVNDrFdnFn86L6hRdoeY1k9",
  "key4": "psMbEP2Hjn9aSGmdkaWhaVSdEkobzyPA6hEyr5ZPrk7m88txcVRTr6WZVxPqRZxH1in8mrHag5GEZcjQoP9TR7C",
  "key5": "5fo9hT9iAXbRm5E5haL4Pa2HoxiAUT1SDBdfcdvXWhmwB7pAci5Pp9ng78LJTbN8Es67MsjkobHxXfrAbY66xfnS",
  "key6": "485cCxwPaWH7hbvanqYqav4FYyQDwPa26oiRD2n1aQP9cb53iSkgeCxh75pnDGdLj1EwWftQH5Q1hMLwqXRwdt4c",
  "key7": "t5ymiN4wJwEfrJY291yaArocAnFkMq3WqbdAhgbH6ma3iEBAAoGRT8SkaqYq6mepw9PApBLEUeqZHcQAcserdeR",
  "key8": "5ogv79hwA1rvKAPL7H3YsWPj42vXACtEtYGNso6wtUQTa7YEDX1stg1wxxkwkEt7BjuVX1NuTsDG3e9atJFtMbnP",
  "key9": "QyUFMkCYw9vAjrun3MgyouryrMtuJjWok3PhCY9yCctBkko37JiURmUXJ2F1dj2GKqpjbLJg46qvv3dgojuEBEi",
  "key10": "3mipSVTZLxJmq7FmCXeaXZqNrfYX8Q6F4jj7u6RWZyHuCjKY1Sy8WXuJa2m5hBACQYrrW1cpadj7cJmtvK1WCrkt",
  "key11": "4tb3AyeFr2RpvoCX2N2yE3CiPag5UT9i7aGszz7rES1ZWiJ6vF5Y9raHRituUp25kqqwsk49XroQ5fsu8cuz3rRx",
  "key12": "4gTwavJHZZUNzTVvdi41kVZUbSzL5gQ24V6DgJdLi4dQ5EkctDprguNZT54rBQ4G1ALACusYDXUviCCY9eT3bU8L",
  "key13": "26AsV6DiyNVi3rrG58F1TmfKLWCqmNfm9GBNBRu5gJGvyh4Y219U23yqstpwA18F4a9vgmopV81yfQrySyjsyVS9",
  "key14": "3GuXrzShe8z912fNw4tf5EC5oyW6djBKkyu6GWmRTCZAjekg96AeZtY31o45zTLXcAN5epUJ9h8YNPLrywXakgzE",
  "key15": "2cJCSjAcEfEpC8b6FC7HtcM1XkrAGRT66ueHPDYCg8ASMtod9GFsRofsvTwE97VQua48JGFmVHEZnW7w68oFP5gQ",
  "key16": "5YJwSeirK8KZdBasyPX4CZt2DM6g4914eUme7D5zSCEMfr7DsxZVXC9JGTyj3f1g7NCX2xU5KVbgPMGdx4BA3gWv",
  "key17": "34nxvoDwWrd37GJbmonid7qZZBDi5YmzEMBk6aCNWcLBBK1y8fLHnAuRG3Ku6CrAs7k1fR4mmqKQDJJbmsfRhVud",
  "key18": "5RdqVYJ2UhvH5b8cg39rSq4Rc6tzZy7Q1yfBjPqvdwmEMamAFhe35pvSMcg5HqkfxMoFnFp9AxE28Ynn1KA8E3k9",
  "key19": "55cMZTSnaB6ozxPYCma98396viH5L6qRLmWMi4co7FVgmDSRRcGy87syovjXKB8xpnQHsApTpN5RWKVcVjTuAPs6",
  "key20": "JmCmPg1eNY4vF8HkFh9QYBr3iF9NanvC9CC6HLN8FAmbFfdfmLZyyhAwsatvbW3XKu9DNjBziCGzjLs2gtgzuYE",
  "key21": "2XM9aQGwyzebAHoC8HK5vCRR5rGPCDmaVxR7qDpd1y6CM8HfdGYDcwLJPNsVadFGwQKmqz9AQ8AqVH63VoNQVmUo",
  "key22": "3NSC6yiiP45sLctgRBZKHW7VnK4qgiVt7Tz358svdbEzESn9oSg3y61YfBmhxPkcqiak4NZQQ6MDXphwPimEzCRH",
  "key23": "4snGcirojY1cTvjtVto9o6YdDhZz4ppdoqSLtwy4J6Lukd9NwWAbLhAMTyt6DAj2s8b3CT7S6SzS8VLuF61XDLMw",
  "key24": "27FRYgiZG8dX241vpDNx3avwbEvjWMDHEsvFHGZXascx2cSyFCUKihKF9z5EyJcDWyTP4yzTrcfxkvWexXaoTETU",
  "key25": "3evqgme6a2pfJrwJvwUCx7ya8h5MovRcboeXGdfNeVgQmqFdrVe2JQdpLyLCpLUEGSALiCssEeUW39UEi3hP23tH",
  "key26": "57iAzBCSMX6MhNvKDaWEeM7pHd9giEKN8yr1qC3PcwZePEdpjc9y4PDvNNaXWj2QHt9nHKXFCqHLmccKKVNvuq39",
  "key27": "3EFX2yw4h6nBRd7XBSVoDdzzJe1737N5p31udKdgKa2RXwb5HT6YwdgrFb66gQsxo1iCQWZdAkPzgNLwMSdCxcW1",
  "key28": "24kC4UG2a54MEpzfDubCMiiAdiTQrFkF3w4hfZaCrJLdSb8qmuv3ccN123pHYd4Eh8ETEhR4apwvisCxafxiZ2eW",
  "key29": "r21hfvF1L7ephgDnwHgZyZGrY2KSveTBu9DizZCByUTbK7ghWrsLfLXgi99Q5PPeWvtfhzL2PFoHCk7FxhpuGcm",
  "key30": "5S3CEiKvFLDFhvWzEDN14CB5CKGxBUMEE4eC3vYJbnyqGkKWTXaET2kCTPe4PMCTXTKjuVkdoQzMcTaKe1S2FEd3",
  "key31": "447J159KTZja37HypLGVypsCk8Y89n5MYbT4iPcnGiJPD1WcQWfpaNmWt5cRkngGDnryxcNBjRLkRhhy6SbrsjgX",
  "key32": "5uH8PUfN84XW8XgmKWxGRE6NSK76CdL8wSL9ESWftpLKRst3tfZc1AQq3cWFu5jC1SpAysLanTYS3HYM7KwUTj3k",
  "key33": "3PFtri1BdURMovogUSyNWZQcSyLQPB6gyKP7M1KzCb1gY1ur9NRZKeGT4x3o2zD1ZKz79tEcjV1THt92ohPu1TzJ",
  "key34": "3V6dtKzby626QqYgdSVimZTpYJ9L2n3Tb4eJ7jDeMK7SxZdtmQk1XqXeFsi6y9YJF31L2nUTj6VdVL5KinjKCbX",
  "key35": "2a2C6JJAfPhNU8EunAkAcx5s9z7Z8AG7jbdHqaxiHQfNRTLpbNdLZkRN1YitjQzyVGwfsH7v6Zo46DD8xnTrf6PV",
  "key36": "2m1CnT691MYDSyHhnRXfWLBeUQ1A1Cqw6NtCJQbQgwsJWjm6DKvkV3oMJv96u3W4LmR931YTXjUmZNNHf7Q1N3PU",
  "key37": "2aSMFPLNNVTBYe8CNHLC2FsmqmnXa7Vd2CFtYQDonckkoMzgkqx7Q7saHPYuDfXztsQhvafZ9ZCvHi8yfLcsva8J",
  "key38": "aAnaG3DSYp8vxCgMZcz8DytupqcfQdme7mQ7ghZCRgGdqquB9brP52UaTskQHtQdr5mmHDVHakg8FKjwVXSvuMj",
  "key39": "ZTaTwG3on8kMJhfeC6m9TYaAvoZwC9G4G8A6jWvUEmNzcpAWXg6pwmhHFsjeWV1nJAF1kNBJ2iDRCq61WWybHia"
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
