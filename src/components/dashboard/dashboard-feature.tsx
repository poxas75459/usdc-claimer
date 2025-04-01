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
    "Ufjj96t23SxqmDYdtNVaPTd7U9bvr8jKSGtkWDT8cHVAZSwbG9FyLRoZGZbiZVV8FDURmSmSEhCoQaGG5ktNhe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cWYR8GpPR7YimagXtxmwpGD8XtaPSzRCq1h4WKGQAisHK4ZdUcxTAZxmhW4ULvAkxAkdJ8diTXWEYXuNswhJa5d",
  "key1": "3YX3RCto56etTZYyas6CevkSPSvUMBqDnRvgTzyq9pmeZsgCTBtEbU5P5QJFJ4hMDukPr9huLmBjQUdmnhZroiq",
  "key2": "zgL4twy1Qr1g5qXHQxDU6DBUG6mZn814et6ZpRaKtT36k9B6wAoLncy6hs7Ha222jTL5r1VmvUcqe6decxKuY4d",
  "key3": "4jYCyDQWzTBJpiq6ucngjidv5YomE4V2PzDLnaUb8UrApwR5a6NnRfMK5EMXAuAnXwn8VD22hXHsBKJnbYC5BH91",
  "key4": "4VCTvRseYxazNsfZJpruW9S9eUZSmPBPjTTVr4kXZ75FK5CLhHg1GED4fxAk7eNGdeMEsYsqTWiLiaUePdDEdeLa",
  "key5": "58LeZuqxeVXb9GVGUEiirdWn4iRZ9xibbYn1n4S8Fd7q1mi8AwYPEaBKxmRe5QojtP9xxB1BLMoJewoDCAjEjiTt",
  "key6": "4S1gazD3g9epEtpvqcNRjDLWkx6KDnDhYXy2fzZVP3TFLpVJmLLMYMTh5YHctkcPzZPCsbjVqkXgchpodkZXKgHo",
  "key7": "59Qon2sLPMEZyrv9NPHhwYb5AwpB6ehxwsPkoSa4J5zF928S34dEiCUhi89N9ka3dDPReKQjoKjW9REyRAjAEVMg",
  "key8": "53jya3PAxZPXvAL1wPvoGPW9DskV9qnta2ZxBJbiEsLDy8cjCvDrirMTPWHaNzGFDEWwtoKw3pyA2aLPPBTFuv8W",
  "key9": "4jJT3HyPDvZt98FcqCyPouKho3yGPcTA91rZYGQnw4gmpawhMJYazV3gRj8q5gwqyoBnT9XhfCnj4nT1iqvsy29L",
  "key10": "2xJMiv5XGW9z1PGzsEMy1CmBCQbJisAepf6MoE1vdjZmsGH78giyggUsPLsKP28Aod7XYhHTWXo7X2gYzTDm7sVc",
  "key11": "3TEGxbXbgZqf6ks6sGP48K5sbHbehZhazP2RD97U6FZTFA6R7YNp83RkKWSQinVoAeguCFdzsLLDef18cbCfGb1A",
  "key12": "5iDJgtFeD4sQT2kZykhXL2q6fBnv4mJo1yKPU7XyfK2hYn97cBRzVF9KRLeVaaCBjFc6u22KfmsMCrKHHQgo2AQM",
  "key13": "4xnFuNoATif8TrkPd7nUqxD2y3hZ2iwwn2t6pmNgUqw7meyi8itLvKNeS57FwXJFiv76yvpDqoqiY2uk8PZXVMXR",
  "key14": "2BqS3qRFbcDgKyct8oc5yxt4oauGNNYuVrhkL1RV7YpsVktP27LcyGd58pVdDQZjM1xQAXqVcKG88bYEnN5LLfK4",
  "key15": "2JdBMas59SBBq5y8Udjxcvq4Uo6KFdQSq5nrfhmQaGu9k5hDj8VFH8vLrYkhDUrusxp9jKsCpJAUtWJnWHVB1Pca",
  "key16": "2nEtWGD5eeiNQ11cmzWxDZpPfxHM88gFuULdjEqgnwK2biff97nAukHNXGjXxDffhYJ6yLoGVrXtVXQmymzwGVqE",
  "key17": "5N9vJ5rtFF8ghEsiET9oquLszGbj7JevATfEKi25Xww14jzCuDFMvJRF9hPFBZCz8yRgTQegeRkvU8QsDYVY2K5H",
  "key18": "zVveWnpoTNRDmtNzd83yoRiJMWkainHE5G7t12nYvyebV8zppD1mmBssvf7hwWFKCR23RespNPHuXuE2tnvhBc5",
  "key19": "fJF5eLu3xgKx2Lgoi7oFcQw31g4tGhGBCf7NhBUywapUAyHXvSPCGoZykZFAtz957XUncXUhTSPvFhy4aTmQEzS",
  "key20": "61KX37GM38Dku1YQ44AFcFXBQ1431kGh3nTrL9PYzGis5niBwRYbq7m4PH9QggJ6vRtKDjtopVRbaQGDMJofEHrn",
  "key21": "59q1dXLqzwyz3gt92ebyRQ142jEzoNH5nmJ4gPdHKC1yJhqYGf4Aw4STce5V7PLxPv64wc6gLZMniMNmHpEj1Em",
  "key22": "3Hiu7Fz7RUhjYew6mJnBuThsEKwG7rjAzpD2DwZ7FrJam82i3D21e8YdeAvt92vrBk1fAcGon8u1DaoPkDKC18L2",
  "key23": "LFKqYZJSpGbEoaU6DXPdJitsNRTQd3HWEyhHogcft8snEf8iqJAkpaaFt2z9qoPBfHMQuGTwm722UvAUP8bz3cg",
  "key24": "56gvvYBnrSkW97deCJzH4kYvgjKGhuKDo2E3sxaqKvrfSo61pw6Bm7DKdByj54UhtFtR95KKE8oEbLr9T2m1moo4",
  "key25": "iKARQtmU5nFBbF2UHj1ajkKcALLDN8REYBqzs1k6VqpzR9ZsiwDmthNuM9SJMoCTA1YhmqMazggeQVUt1SCdx8q",
  "key26": "5A89nKpVyj6pvCJQeiXHD22X23YqUJLbmuF4a7DZRfCreTA5obLvkFXVQ3T8BFo6UusMyPrcKayfyNiv6fK6cchh",
  "key27": "3Ma5Kv6nedn9t4LiCpH4WYU6q7M5hmUvYgcTFeSVX7uSLGTSokUEZeq4SyXkGUqGAodvuhgmfK56wEJPU2Kfdzbw",
  "key28": "e46QBWoxmFz5urhWLH5ERCtGkNgonHBxoiz31Hv9paSXARzT7pb4RX5v5spG96ozAVSUHhnmqcbHhxTDf6Su1np",
  "key29": "5NQtKzJ8aSB4TZtUjUXvAwwn48WU1BDFG7YhxP5kHDYv8s8sdKfxzKQcjPJfFcYGkw7THy7xD8jQk3RWX6c5Jf3i",
  "key30": "5G6Rwp82xSa7n1DviUt5UxhSdYxzHgPFauqr1PN9bf8yY1S6Su9VaYbxPwvZTA14csC6vCWrsV7n7hybuWDJdcQb",
  "key31": "5xWD24zJ7g9VwW6yPv1Hk5tunsiP3k9mbphhrekq9opshdoHKRpij8Q8uVSesCDBZqWV8LEC9kpaXVSsSXSSpNw2"
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
