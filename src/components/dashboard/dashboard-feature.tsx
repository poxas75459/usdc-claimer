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
    "2rdFGWX3hH7rDoyXdyzA33uGSguFCCbrA9D6UwdABs6vdrZdk1CzGPJbfxj5wijteMYocoLW8tZ2Bqm1DY6grTve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKAPHKdrZzPk7iZr58CpTMiZv3a6L6roQq7rK2HQ1oFGRCJ8a2Cy4eZSfaH2o1TGmXjP63VGLVK1g7aGKxoPv8q",
  "key1": "2ZZtPkWCnRVLEnz5YibnFDUsWZdnF13xfScyX6yVykvWuMHkW3q5dqZeWLqivZZYpwLuXCdKcs91q5HyDXvyC29c",
  "key2": "4kZsqPPEe1i7ZV5KAqrZhmVfZdtcXepoARYdFG9AGYuyB1zWdobg8aXTu8qcNAjjiuLayB8x5z7vsUaqRu3drWJU",
  "key3": "zw86JnCE9CMzXmBTw4estSWLrf5W96KpTZaD4A62dqNXe7NoaY6ioJp4uqShQmaS4Hp9bXxCaNwNi9UsKBuTUf5",
  "key4": "5i7Xce1sMcNPFCS3tsZ2CGFJuMS23NZWPUMQxvaJk399g8akMk3jcyHuaKPXxtxQCK4srUefDV58yZS1Sy6k6zof",
  "key5": "Nqge9CZ8Wc3iRSv8HRLyu6X5FwUQV5PtbRUTMyJfvQ3szq81WChr1nhuWuZU8Az3xAwb9UiVeo5BwSFoeKULXh1",
  "key6": "3ZFyPyUNofQSKyQe7j31xGEX2SEbBEfshR7zHYeTStekKFYDBKYsRsW7aa7hqZjTd2RanwYebw2bcpqK2Yu9uakz",
  "key7": "4gHrV8TAsZ2SRd5rC7MniymJ79KVmxi1B2MUNLfzqY7CavW1HwEH829fhLFAyXMRVZ7rn2fVPmzoqsXC8GH8NdwQ",
  "key8": "5zRFr4UwWioGvPg1uxXHmWxDT8WacyTs3ozWPrvYgu7qzsTJF6kdpHgaE4oC1dS95whCK3h6Kwq6oK87BRuEZCHF",
  "key9": "2NPPNj2RNAh2Ggds4BRwMBiMxLBAN31zvvjfSJxmjSnM1sf11fRgeutDxZHNwrJnnkh9tZ3GNev3LL1K1SvZwNV3",
  "key10": "BcJ5zZzHuepKbRNb1tv3xM15j9mcsCB7jxF2jbzRBLXUXJWpQHTMiK12Zq1MikxD8GCZzxpBRKmGgEQG8FZpkXD",
  "key11": "3Qu2umooK9uNgVo4WViSvAe4zvzrTBYfnJgnCLVh1X78SvmFBjtKqjgsFsWKXiuW9CEmLZ8YLZsVwya2AErW1VtL",
  "key12": "3s66pyMfmJSN9q1v3dJ1VvyxHfKePbibEADnNouAJc5EcbqFFxcdQgSMcckw9daio2R93TC4iqJMWGx4Lvzq5nHi",
  "key13": "xUpScYaKjNXDLhfiFdGTpF2Tr9wENGJ6LeyQ29vCxyQvLd9NeoWBXmZ5NxFDUKvHDNZRGCUnyYgH5YHXo548aqh",
  "key14": "M2jvs1mmWvCvjL37VhuX2bQssJ29PzUVc21kJgKgoRJn5Jh9bQQMk2UKaACNN6bqzH6SJ758436ZqmHHa2pddmM",
  "key15": "45V3CS6FoxfyDbXHzYogjrL7g4kwhyAPVQ7NjQuXwfBC2u32wTieLAxQFxWdujpXd6SVmCdMXbD82irpHx8D3BdT",
  "key16": "3mRfT6pv36d87YfHB1EquBjD4fz6bN5Pm23t84Eqqs6H953LioDDSTE5p6hbT4Xrz1cqiZ1iKzZ8CqMCYTnX3wnq",
  "key17": "5M53ksSMHxeTfJEjepP9w3ztv8zf7QtbphD1WHgpc7igpZq24GLDA3HLGoodP379xcjoLFNT6xSr9rT7hbaAe4Wb",
  "key18": "4VqP7Byki56872wCmgDhdo9FEoSBEDZTfd8Ujuct6MTwSXXpP8H15CxovkZm9JgYLryBNu2AJKLbS98sgi6MkM66",
  "key19": "5iEQsdF4pgn3mUy4Mj9eCCNoaz8b2ZoAzWPafK9B19y1f39jmmT4gnTRkPeAFexnyuj4Xv1gX6LKANzYeZ7ksHMt",
  "key20": "5z7QVS7XetMbSuNsmyPYiKgZBHH95DiNMRz6FyUBJcNWjtW7SHgqZF1gZ3Nb5egNEMZm3E5GKGWwdZd34TCtwqDs",
  "key21": "5uLy4LoF9kXvBME8Dj39rsCho6tkhnhWaKdV5Qr5RkRjWLXTwsrJqfdK9oSHbYVCfrGfLBnLfyxH4TTC13YZLWU2",
  "key22": "5F6vkBGut4y7u6rpNXA2iFDXDYxKfoZY3VXfmJ9gxfcTvnYJEmjAiQF27HQm1XL6G5BK5urP3bdBRMkKEmd4djU1",
  "key23": "14cbm4RgmHTHT8WwD1pSw3CkBckN7GPSSqt3KpkgpjPjWEL6nKLXcoc8UUfuZFe14KPygTwDTwqYt3ntkAZLwRj",
  "key24": "5sT7sC3rn5ay5o2EXprxZrJZGvcsaYJgrqe2fPgx8r2sXfwwoDKTeVn8jYsaHPGFbJdnqBHR78VzYNTAc6CxHEVi",
  "key25": "644vXc4N5G3xkVwW9w8viRnK1vX6131oczqxGr5QXC3aMsRzHeED9mbdS1KQSNWwiLNNiYWPFQjHTgrL89tKptKW",
  "key26": "3AuSiPwRmcf1JBoJNGS3cpnpCXhCESasvHuwY1zv9uGisqZVR88UR45LZnHpXQh7tBNHaMPPxKZ6uynbsJyqRBRb",
  "key27": "5CbQedhdzx3HUL3nmmfx7d4xZZA98BVFHj2XbKAAW83AKdGoHL2sNoUpheSsefu9vM1BHhnBXR92YvqHrdtf6yG7",
  "key28": "5Lv97zDAJZN4xZWbn7Up7Fp4DbA568Aqw3Mkt5HXPwyN6wjkdqffhpGuXFNxirsEkRsg8rtdb44Gp57vcDzy7sF3",
  "key29": "2WNQhEZNMdHwH86YyMsPBQnZGMdyGitgim85XM3KWimuu1wb7H357eYwDmTfdnK7pBR3Jo882dzcszM8Aigm5jo7",
  "key30": "5y2YDoDqDTLsSKCua2xXgL2i2Vsw7wySL79vnLTNSikv9fcprU5u5J2uLNuuczSmcu8thMsyk53txDd2FioxfMbq",
  "key31": "28m17bfgzAFFRHRNt6ibkSdJwVoq23mh1Qfoe6u5y6nyiAs92cr1rZCGU7mKPSvZd6VH11YNsWoXkvRaB4QPRgnH",
  "key32": "2fzn7aBrq2LG1TxFW8MhjL4cQGChG4Etin4bL3N5zea7qg1N5WVg15jfZyPVeYSkp2BiuiwtxzAnmNy4yc9stGwb",
  "key33": "gPK9N2MXtht82VWkYiPeK4GaTfrCKx6tghpQLdiw1D63s72odCKNZM1if57ADGwm8eNXKtbDjDCzpKnJ4skc3Ay",
  "key34": "2w19pBP8cHAgpUdprMexCjXkgzd53dUNED3sor9NbJ9FYQvsKoUfb5CyekGrLANdvw7fqw4E9dEf66j59aeTo5pA",
  "key35": "4MX2aaogumxyVWgNzSm5gDDs8ybBQaDKQ8skVB7xEV736oG1ePivYhAiuxGGwDEP3KX9dqpgtFfNq2Q6ceb2JPfc",
  "key36": "2x8rFDz11sVYtZSEC4G7P2yvinV1qLvF2y7G7xpoc4vzKBbqkhV5q4qSwk8rwaFuXqEoo8e3X1xgda4GSGgcfzdF",
  "key37": "2JZbSCkvBi1SuARmYqrW1faGY2t4E46GKDtTjfHmxw7HMXJGbTmEUvQ9Y4CWQgisXtpu3KpNBjaRj3uoLoRTuVJP",
  "key38": "4uJvtG3pX6nKvj8yGAujWcwUbhP5nJ98NC2TVRWvvSCcNgrPw1DAqgok3M2LLk4vLFt7Jv2Drn2SU4tiW3dUcYua",
  "key39": "61MyL5j3vLQrw8L4dBBppNe3Z5K5XzF3p6dx9SPo9Ln6huz4wrpxSZSUUwaw4VUdNJZ7D6mNe1HqcVzYyGF7LgDw",
  "key40": "UF1fjyWfLebDNqBCUbTapwKp8YiCM2Z2LaZ1z86CfKokfrCBmA4Jdht8Ccab26J2fkrKe6MTdpXLMRZWvwTK1KW",
  "key41": "2VxjANgy5NwTUvvbDyn8j1x1ixBq8QfaMA61TrrJwmfSiw5fSVtTbojNkBpQGh552papKcmBNQr6qY34VNWRDX1g",
  "key42": "5QFi4krV4fW5i5CVQaAcnqCUMVGmfkaF3X18yxPUvCkjXKAzqrBXG7ym9DmKNemGpbjkijmwUeRobt48BNiAHKcg",
  "key43": "5X9qXLxiwpv6YxBmiZDxjjAyJwGmiHYyYCzF4b8h4MTeYU1iavwUK3F3fXCZc29mt12QPNj97dNGXvSTVtDJEqwb",
  "key44": "2UL92YMvTFYA7cmkmECA9rTXAfRRfcavCTBCsCGDnku3a1Mp12tWVVHyLzswXAKiwc3VAikRLeNFDSBaHf5s2SBT",
  "key45": "5iQZ2PLBJqarHj8iN24KaV8WimrqvxNNYkV4W2kCNWpD8snu3Ua3hEVRYApPvFpNYsHBtTUUkgVEivPUbngtynQw"
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
