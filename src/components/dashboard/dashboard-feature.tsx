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
    "5bwwkULesZj5RXxJYG5RFEfPyPgYwSvEavqX9awuSu7xa97gHg8UgPJDv9qUKceX9Aa23dfdArCYLN1Au59mRnWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bweSpi9xCtu6KctGBLwNwv7h19Jr1d7JZM4ib1QSs8RWsasMydQZsCzAPpmA1VPYx2gx8h6jQDHSi8iEBotwJKU",
  "key1": "BuArcBcccCHc7w2z68g9B4f9Wur6Rf5gFCChGSec537DfzTpfGFEcujY3hQ1Wf7tYi7DEvEhF3gUMFCoLNcUKUC",
  "key2": "YDsmPVTYG4t9CzP2khC67HzQtMXzzv7EaqrrCrZnoK5ZaavGf4FVAksVwst1N5wnZhGSzmophnGv9H3yN9yHBuV",
  "key3": "5BSu6a2uuyUen6R7JAwqmk784PKHmcz2mhnqpp7mTvgDimhvEjz3iNFvgVBmHeuDfbqo89B5UxJK3qKwypzshTBo",
  "key4": "5fsQL4XcFbBUHjWFgrEjNkeCuz74wSHf2YuBEi4TD6952x4raL4XwSSQEbHrkwPZ1BPQemquDv8YNfU5GQrjr1sQ",
  "key5": "4EjS8RWjCWzSwFmrwLJnf4PzJKBvfU4d2aYcGgVYVZ4YhQmudYtFgFXMRsu9LbjY7e8xCM71dHSm5E9kfg5Scqf8",
  "key6": "2q2hqeYAYqiUKzfFFDoWbUBBdTmpNQzrkdTAFVdZeV7Xg6Hwgc1meWY3W9WAr11sQ3XiCTvt3ZxqhXNrYa5gZun5",
  "key7": "4icjk14EpBCpXpGUcCjRrungadvNCpFU4e9Da1TkJ9jKnqpuqgrrku6SFtkTgHw2gYQry6fcXckkiro7UAMmPJyu",
  "key8": "5vVf7gysCq6KFsEHLzD3Sscozn3Jw9jhfx7eXni5LVfGzQbdgSJ5RiQf6PgwroQmvZSxQCmCwfBJijcpjdLAybEr",
  "key9": "2LCz5FXLhK5Mch6hBSJRmdHYZP8ScnEJZQ4gJjbSwzfgdnPBvnTW9kksgmMdbTu16h1eq75KV4ou1Bc9MCcjRyEK",
  "key10": "3P3CigMGDAP7JsUtmZEgfGm7kXCjnih6KNRE3zoqaMAA9VYYx6MmLtZ9XjLMFq9LuRGDch4mLAqC1iy2zrQtJG1E",
  "key11": "3VsoKeuAWbrb3z8Tw3PD3g5P7UpNZbWWebAe1vDTfXh6V2Zj938DQbEcRW2cLp1KSxeqBU2buWrm6pBxRxwKk3Gw",
  "key12": "3PGdncSPZCcntYjMdjwxcsVETbja5izgBuc9yh7qjXQoeTxFX23yNQk1wNhTt42iqf7aA6kVfb8eZtW7ikpxcASc",
  "key13": "27zprG9FmF6NjNf9ahJQAzEYkc3tDHW1o4T6ifRPDr5PZwQ7HPVMDRBzmAcVUEpsq42fHGveL2QRZxCNo4jNDRqN",
  "key14": "9mzqEPf2MGXfzkHnz6986qPz2pL4Zbic1ghsY9CdrGR1jNw9Q29gaAiZFY2RzcLKL5yjC4SJZrKYSsXeuVdFdnb",
  "key15": "45iZZ7pgaymBkc2xG2xQ6gAwywKZVrpLwbLdJ9nqrpKg337ApV1sGo8Wg2A2HbALoyDKtcDFTDF4UCEwiPkP5CFv",
  "key16": "4qeKN1S8bLZLhU97mfSonbxm5y2TdqdB7i72XEAGpZDDX6y2nra4i7nraqRWM6RTFvFYyBPbGZ4rK2mshRMwLTta",
  "key17": "5bz5ZNEfQ1gUXvhEnruFQ78iAGsAULYTQR6NUpUMEEpF2FmYLQw5S5v8eJUwKNYqygQQf1vAV1mQADfu5rtABTUe",
  "key18": "QQRQRs8yhk7QZJ1oGiNmzsDHVDFMC2vouXJgJwnJ2MBfSgfTzD6f511Nju5ZFSS3o7AiUMvfZbS5kKncqJ6B35T",
  "key19": "2Nwe1HapRkzk9eEnvimXy7Ap1TfwdvvaDtztDwKV8o6T8JDESm35Ubpdo6t7WNVansuwaYmn854kTGosx5PoLkXx",
  "key20": "4NWvVb37zmBUCHHUXn5jaQcw1qTbdkx9Jk1fAoiPzmVAt8dgPEMVHNv5Khq7BZzCpHgNA2TAYC9eV3vYEAo3rbq1",
  "key21": "vwqXoxApNW7w8M5NcbuMYScLEdqWJA7VpbKsHJphdGVKrXvbmVCy6RvjdGrjBKDmdQagA1xSRr5g3WeJVUMcNep",
  "key22": "2HiyXs576Yc8sdHqLkPtiCD2e3na4k8uBWVhLSMBg6U4PSh554eMnSJoeaGxNH47qvkdhpLKb2cgJdLfVdP7waHY",
  "key23": "27bfG3vfNzXNcH9Qx6eUxKJCTR5BvFnA8KAYzAYM3W57EGTMN4ubo3Soqgmmmcn9v6eodxMV8wBUenTenszBFov8",
  "key24": "viTKjySaWeka7ikJDvtAjiTxEorzn1Cu7DWFko9hejpQ2zRy94PbFhD6qE7ZZ4kEmP3pmktEBybNBss4D5JKhgL",
  "key25": "5WrHBaNGNrx2kDxv8wkomveU46Z662jRM3v48KSW8QnvtJiDFgY9bjrmS5Nkv933Fzr5JfSNmLw4vo6XTJhVj7fq",
  "key26": "24Cee1qVNFAq68VFKAhUeaQLd18sVHFhiVMD33ZfUjU9Vht9nCB4HgMXEKuwNNQt9FF6rbMMDquiApYDet3Bnot8",
  "key27": "4ioHyV2LKQLRyN217ARfKSZwe2Kgbob7xRe6WDXQ6puQ1Xhno1myjFJo7R3YhGQcAjGekmDYF4AhXCvPEqscsv2u"
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
