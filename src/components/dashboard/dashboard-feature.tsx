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
    "4ZKv7vNGYtnEaeqGucrNvmHEMr5b2xm6b2B566TVRMHLLrmpmDfGpNNGd7wUSVgWXmXgB9kMYjsQFc1xJ6n363p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UUsvobFesBaMP7GzKhX8wNpKiQdqF6zAQpAB6sHEg2HWMyXkF1P3etnqBMtjjageEU889r9bpS6PCsu5HMMHf1c",
  "key1": "pY54zVobEyQSJhVt4GqiiGDP3zHv9QLFKcoBbTnBj8n9twNqAYngGt15rZu7KCRpjqmJH1T4mfVEoe3VX2iFFiZ",
  "key2": "3XKNnMzZg3S5Vj9Gj96RtAiFB3W9SD5YsZ4DhzHPuPd4EN7W4Vvt4czr68qbftDVaeWMfxwyNYPnDnMTSWVRTSZo",
  "key3": "5TbWFwGzDZd69wZMJPUMsQzhuRF13FqEsCUM1oHdUykXGrd9pMHesZzDAFLtpqzBrseiDUeGL4PYAN1vJmD6iCAF",
  "key4": "2BwVQg5pNpZKDacutxvsS4qo2s6iffyb27xy7i3mzy2YTcB521dCWxNnw7YQZQ26hDMoQXA3bw3yUB8CtxQ8oo7e",
  "key5": "2bPNJHeYjKz2ZanH4E5A7DhZrxdyC1rNm9kxhqhC2VkeLwDT2oRu32s1fqWxNZT3NAmSknkdQeiy7zzTTL2ozZnh",
  "key6": "8xPMESSqF8i95ytA68fuMyZiv4RDuqZCNzYDeAG5yko4ehefwcRQjukFg6ttCWTqF24LkUoftcoak9Y6NidNdbP",
  "key7": "4Qd4pGUk95PF794qJj5qH4D5mfKrEYcp5UFEageD7p7cBc2Jo1kTW5sU9ARnPY5VaiHAXdHXNDnaWJ32upntxNUt",
  "key8": "4Ax1vZECb8hGngLDawExcugKbtbD1kJX8yTTXYXtPHAULBnBKTXm6VFh3PJVwYhGb85Ay8FKEQQK1MjV5ptyLiwi",
  "key9": "44UWtFRoTAFTBsGXzgsKb1Pvf2wJUSFEGC1yGGFDnkacmhqbuwaZk95yRgEqwMufVp5eNbEXJkfUroNr7FTQEj1e",
  "key10": "35r9eRkN4FxofWnpUC8wQoRRzTdiZP3bZRchU6gfbsB5QrTx4JSnFvnCFunnSdJReoPHnUa1ccHgt74eQDTSYkAd",
  "key11": "45T6a1MfxFm2RZJwM6GHEVfWPeYZtzJfW4PgfyvBphjJQ1Y79zaNYg7jkQkYfDf8BfSZdwmvTAnMF5Hd2UxQYKhj",
  "key12": "3VhWuy8cD2ri6MZx4vVgvJAGq7NFatnWTv3RX9aknSp7TCHp5T2hG7Jq5in7SwquyoK57zubWign5v2ENw9DjALn",
  "key13": "Wnr2renEM7cksMAwVMgCY3frDhK7ZiGgK85awZrYvnRjXuy6Sz5nuYNpbo1H9wXuPC12ZJYwd8WPZQMNGBRhXNb",
  "key14": "8uTDugSJJXJA8UtCwpEXEzX8cusHPUgtNzQngzWBas51Qverp3gwJgXdYxToEbVfBZrdYz9ceb1PG5MRF86ndGg",
  "key15": "HjxcJ6S1XsrUwDxQHzNvysEDmzQZ23CsaMWFaYTiuSs1kwro39A2WeuTcmkXCHgPeqLy5nE557HjYAPUDgwotut",
  "key16": "2Vckh2qCb1WJvNhqdGbj5qpqKio9h1hBCBQYYG2W6c21t5XqDDoR2uv89F2JkGLuVm3uXfLe1GJkaLWFYzm3SRGy",
  "key17": "2Verf5KKxuSpMBt3YHXmPHPGXVvFTopiJLiLQ5zHSGg2EZ7xgCWtTaFhHS9SP3t4ovN3QpB7r13FxAn3iKjKkH7x",
  "key18": "3nr5WnczpbjvpqPkYvqhdcsNcXWXF5dx38VirYY6HTv68XtgtNheYALsdS8bH3kKFYvoaDDBfHG1oMSrrhhYyAcA",
  "key19": "525qEz5nycmXixLSa9QYk6Atb4JXcaofbHsDztZHzvY2hDWyGLhBiDEMGYjx6VcQsqCAy2pv5YWwFASBNRVhJdbU",
  "key20": "3rqW2LHzcLF88tvz9M1Z6NCqfXZeRW8fCP4FRmZ6AGm66oeQbBWJnKSd43tt2cZZfv82nmXgAPDtrpRsDgDMF1rM",
  "key21": "67gEC9n3PzgmzHaS8PhLAciTHgQQYcgMocy2hqR8GXVPvaHHGLzibvkFC2nLoGD1icVhT7Y6VHvNmyNf9eyfBCNE",
  "key22": "248itSLmEfmasXHdCJz3LfYAnuMu51VvWE6wKoxSqubwZ5TDrmbM1mqdLXZTsDquYYRo2584QyknXJjEwAcrBRJ8",
  "key23": "5uTjwQSCqpip3p3eoUSA3urSfgaExxg9Lkyj8RCJGJFVToJBYiwh7cPJnxHoXr4KNckCZ9nuJzE97VFH5ATWdb2u",
  "key24": "2hKDx3fY1z9T7Rfj4zeghnqKFrqTfWwYoqbvkBv5YW9ZTyTcW4EnpYgtXTrKPYGGAbrVg7w5r9EmMWdSGXJDNrsL",
  "key25": "4FpdBNgP9hb2UREhu3P2dnyEp6QA6u4tjPUZi5y5CuRMfzDNXf5CTg395bXrcKWqvtWqoDDxLsx3JEK2fyKKC7MG",
  "key26": "54WzzGAwUAr4haBfHMLfr64iL81oF1oMdta2XzPb9UCGvwCjBmBbCzTuf7bNUFCe6mqynkjsF9KkagD2eTnNf8dA",
  "key27": "2ofJ8M7Hj5Mxhs1fi9gRRytu2HNTdeGYgF1DwZcgLYpSev8hQyM7p3pxdadgZxgfyXHAVM8DfL1xsfWLTkDru8qS",
  "key28": "CXSWcp9ooggLGfUSEfyvZgKoaSQR927ytKmNwBaNTs7SZDGGgWXmazMs6xijiQbnptnPdtuc7Ha37YWxFzLwc7V",
  "key29": "4KYVJWpBbA6ev6XFUbZA14pk28kK2o2YHmgfKb7kouoXYoQsVsyhVeWkXN7GRNFUjRV2T6P421SfHwyVvhYojibM"
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
