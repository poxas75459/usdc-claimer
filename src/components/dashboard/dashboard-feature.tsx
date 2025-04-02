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
    "5HG5LwvYEZ4zDthbg2L54ZitkuxSf4nyr2rJbPaJEyZDw2fsB28FPnQZNP2poJ1iUMTRNRSdKGCwE7XLervQnLCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a6fxY1pf7JNaLUmSCxJNo4BmTudVXUeY2jnRqwtFpNJJLMpvL76a1WgQVjQrAgy7woETmJcWhLqxc2KfUKfBR5m",
  "key1": "4At5R4X3s3MJWagwk1ZQTHxmhAZyw1QKKFZF4ErDXyEsxJHozWC2bSETirXd4NpDWGuXxeYNF6oU4qsM8qxtRRZF",
  "key2": "3o4PjULNwgq3rKEEm3CnLgnKzEPNbVT749v6NBHVf32AJECwitTCh4WwkGBg5JHezY8ivomdenR4qkk8iJQdRytR",
  "key3": "5HRPHmmiiYsoPLcfDyveAtZfuXU4QFmemZmQwuw7psexsFwLoDHpNxsiyTQ5e1aCeyqJmSLkvQmVxLF7BpB7YKqq",
  "key4": "5JuqrX7CCmNfp2P9tXWymABDcm2Vgb52BW9Cs4FqnmXxP7cXFPGc2NgjspPP1TF5MJ2twij1ZYST5HbiY41LEros",
  "key5": "4xCg3dAsXYFD18Z33xRXfSCSBpJ6QB7vGL9LbaEHeZ4Jy1GziyQJ3V9DZqHHM7yXQAT18fyLTArmiRSkuojoeiW5",
  "key6": "5RPTWH5jfXpxcdW5Dfsx8oHj6xPVKPrS2jFvy6X9DuFVyMYjjZtSVjDBzDtu1nMAEeXBaKW2NH73fKZQnpXFJ7rf",
  "key7": "52RAD6UtP8Kddd3UxwdZLkuz84kf5Pfhp5eeYmEuHoCVYa3f4eC2NDg6G66ZpTqiawzyqwT7inx96wAayNE2Shoo",
  "key8": "4vyzd2shhKNiE3WzYLj8Arm5gP96JQNWKzR8tDr2Z5qWBCL34PWnUn6WAnByGoWZdYu8J1zsP6fVqFUB2CtdeuLM",
  "key9": "4GLPKY8FDzQXkv5RtdMupRmekmnQ9e7yy5LB6U7zrsGZQs2MigEnULknsJf2psBDz4Geakj3gYsfeGg3x44KoDZp",
  "key10": "2L1EqwgSPmaHFKZyTrPhh2bDJmm7xzEUhSB2V1qozh8yDWeGQmB6zwm3EbPfvUsn5m1SyZiNqx2NyAQ55FLJzY3E",
  "key11": "2Rpr4bMTaqfyaPrWQhiCqvMUUzbYXUx64Tn4r6NpzcA8Sn2RpVk1Dg4HorCTRGsDJ4VtPUe11gzx5JSgGWU5iDNv",
  "key12": "5wR3SY9Kzuh9rdqrYfyuQhsjbkihE2j1oZNf5UDZnXFTYD3pUzT9wFBFxXoGDr8aMjJuvZXypDq3653xaDwW3ubM",
  "key13": "32woeq6B345joBJK21DZfowHU21LTVtYo8CYnaAibe2SHZ3cYhNXuwjhhQ8V5uydssrtLhepJMz8FFTadSt3LSne",
  "key14": "d3RkggWtxthX2GiJjV2JniMucPER9A9Phy1nciU6mK6Z7ZCayELc43S79uBENuSCoWhxQFh1dRU8KAwv97xoZY4",
  "key15": "UNM3ihT31Hnj1RVhH18CFMsKBmb3kmBatVWrdLnVrgRz7W8hzq94MmbSSXXSP5RQ39a38t8PsiJKNcS1EmKUeie",
  "key16": "28jGdotaTWQPBNsjzahL95FxYp89YZ99foPMPAUyiE432mDF2aFSWTaPCFbzLTa7w3MMNP8gWf8vpMYKgaopD45S",
  "key17": "fU1aT2PpVQ3312HFaHZq9oEDjo7v52esN2cFEd7QL3MCSs5Sr9G9d5PZS3osRKxDSZKLDwe2bhWEXDgVcgpiQ2z",
  "key18": "2HUq3nuXEsHpLdDMUpiCRNivLJPenzfmrD139uhHqAPxm1Lc3SuTvxEHZu95SH43hS7Qnrhx4CXhZ2bvZT2tgD82",
  "key19": "4px4BfN6Bu1CzDtE8L83Av3JPXEuCCvM5JhczHKq3CtwZ1CfnGtMymL63TxyTy9gGD7pv99PQjuV8qJmNxkuWUZY",
  "key20": "B88UWokM8T5Z7BnWdnVYH4dUo9bS5ij5CzCuVsiVtPhsnhANiwS6RQhbMQpU8B7CkDD6RMk5P33Fx2C7DvbSV8J",
  "key21": "s6LyJUquoMGBHK2MttoUB3J7swxAMJBKDzZqRzBs8Y9nLbm5NSjCT8yJ4eDPQcrwYfRtPtVhUL9DcNptkGfsbjh",
  "key22": "2s6g6eXcLsjFwVZQPyZoJa4rTen8iyuc2FwUoTN6wkbUvgF4mGBnEYh9xCJDYnpFbjXknZEbBErwAumWVG1GZwhA",
  "key23": "5oBa9F5QkhwVEosSpH1rLoqcYR6ZiLo5gQk7ueJW3hjivgwX8oxu5AjeRwpGk1HMPAJvcEfoPfEQzRg4gzJGy9cr",
  "key24": "4kVL2JBEVNSrnbcwPvZUCpVWXSHd7ioUDDLyhBtm9bhAmMJe589JLeoKhKkwRRXvjKamDFf7ex5GBKgQmERroDPf",
  "key25": "5opwWLcwj2atu83uxTouLzsj7zsKypXiLvJX3qRwHBRU7sgy8wq4KFXQrFT8eByCgLeAFYgwf63Bp4STjnfXNgFN",
  "key26": "4mCq6DmhnSFPjxadnQ4w9eLwVpx7cyX4y5R8dxLxZZSoFa44NaRc5yADKX3qt4WX2kkjgqBKULhwynSVwNajTQkH",
  "key27": "59WTPva9kQUrqAYNgfNJCP9VZvNz6Hwrwv2DAHf4L5wZnZTFtJqttUGvxex7bKRq16o8ABCrBD1VsQYmA1ejzffv"
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
