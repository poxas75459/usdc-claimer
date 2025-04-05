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
    "4YDMumopSXgXJTE1EV53xmrRrQCA4t1fdNwdVZrLdFwfppQkM3hyeAda4YiM8vBC1Y8zdqnPnhRTLqLRZn7XcGyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FgnLNKsor6dis9y4CDZCzAqC9K2rJKshcatYcMHa9JDhiqXMTFwn6bFr6bC4bmJ8YeK6MTvDvAvH1SViMGuuTn4",
  "key1": "5eMDNpYhvZ5c4BSfAyh6o2oGEDvDUcCZPxkZcTsKiXFjvbNhVzqUFTvSjcaLr7eLcReopDoXdCmam3bqX2Pj2mLa",
  "key2": "3ryfmFYEy6tHwxM5mVzQazmCEgPg13VY8GpngbeseKHeTmpCS8faqrudgoAxT8aKJJXxm9TYxKmZKLRckBE8xFXQ",
  "key3": "4QqrM79a3thwxjVE9ZWdy2V2SsEXytoFe1RLYWMYxwSymtbh57PJGB9ud6ysdYYjaqv8ZfqdEM28TcTD1BgNUG8L",
  "key4": "2mtx177urnEXvVzxUMNmanVvVfte36bwvqx8MSrgoj7tkMVTSZsQ2KCkpVYxmNASzjg23MwdYC8UdEFFCJ2zpY1n",
  "key5": "42fbqEaiKsiponKgbmUNiviYYgXRCSV3JDYfgeirRVeb1eFAM1pseNH6YzCXjqa8QH1aLTbrQjjSSjWhSGvGAKz9",
  "key6": "2cdCDCjDanZFRcSFacHCh582ZQp7f7oPBWquwPcnnX5h2ujUe2dGXiGi3q3wd1HWriGPajoeub15JhBrWT7rK1hH",
  "key7": "2Hr6WunjP2NMyUmEMnDmW69EsFhGwWmhJdm3mUKhrgFKLMiJQiL5jhhHRt3h18hhbVjX51RG82BF93zD3juYuwMF",
  "key8": "2yDE68gnuHhRvrYLRYPiUjwnqvdxMEfEvcKMfA8NU4fRnB9gTZyPCEJ7YPKjEWRiEW9MwEsEM9C3GxLwrz811zQ3",
  "key9": "2Zo1pmWBECqsWi8AXFm2Vry2UHFdeQc3PFutrcGcea6XvJthAU5UAo98LgzS54Uvo4VvqUPDNtxdSoQJV9SKjdBj",
  "key10": "4mhATHVCjqMcYMj29jvR8iTJcTzCDbWqaLsSx9JdpBCLh1SAE5V5RxCh78wJuLZtiLnQy1rpBAS94u6pH225rXz2",
  "key11": "65QvfrEgkKmZVLg7Fqc7MwJ338ECcsDVrdy4iay9jTrUyn6nwmAPA65vjk5i3Tdi1qgcHGX11HqHZhuWeDqYpUvA",
  "key12": "8QHUMAuDrRtJuoeH9yKmHGHg619P3VJ7pf3aNFpg8KetJ6RcZZT561nDwxF9T2myjr8SNxECATsm9j4cDjbP537",
  "key13": "59zSmybCq5sfnn6XuCtWEFDtGrJdJRxWRciNgQKLuEE6wSMqamuyd6g5X7A1eufpTzBdXoyo67VVzTGhdsvgQoSA",
  "key14": "5EbRRUca3B66MzmkkxG7zZmPaCnB391bXN47rgJrXMh9ZDuzCZpX4kFgPrS9EErB77Aq3eSJX5SLHMj6Ld6PzM2Q",
  "key15": "4rQ8ss9PH1AXr2Rez3pnDSUVr7J3Xw9vuEQQRudWD8ZVVf9Tajr4fcPRLgvA7wpoDwUoQonSxGst4WjAxTYvsav4",
  "key16": "4JcjMKeMo8N9pY4nEJyZLMVYhqbhjruW4fUddFPJqDwmwa4VZ9dTgYptc7xz551BVXTFWi4fERrDRHRHvNgnnqoR",
  "key17": "Y6GXxvHBHmB3jyyAwhGX5cW3Q5314MT3bjG7hjkUqzJ4JUhrKTzb72KBqwputnnjormRNRVf68hXV8S4EENCgeV",
  "key18": "33sqpS87yAWkuKr2ipaTh65gBdkqeXejewgTgNZH6NTkYVb9Fbyiv8B3psJboygKAeHPA7iZPrWm3R4a4JbGjbei",
  "key19": "N79azkWGi2zC5UHyykqcUVwQsiHzQqgbw2sqHrzNAVYPm9qeFh5z4KGoQ8P5E1NFBmmj3qSvBAmAdubRjWhYvzU",
  "key20": "3H2vYCvjhA3Cyx9CbP9jgXdnhocJ2gzu5k88BgkfyY6TfKAbLhLMWLsUjJmPwN4dpgpDn6Kh1YRiR3H8AedXcERH",
  "key21": "Jbheeahk4fsKtoXyYuAspns73Cr4fgmW2dXz3K3tB2RfKtcdtrv94hW2vBvUoNW7uBnJGSgzxv9RDaCsK3Dfbjn",
  "key22": "HwR1BjsyVEryynVVSWr7RfFx3jCyhWgdXbq3sAyReksQo3RztrkHMbnbr8BxBEkSGKovKfwEGRUVfCqmaxzGNk5",
  "key23": "3QwtmvoZBBV6R4vmzJRwzEKxzQSpeXe7wBvo3MDjHNT2CgVjB8SjqZhGCpNGcHAdr4iRuS66GiGAZuUtNNh85qbY",
  "key24": "5dUpSkT79g91imVuiVstEoqQKuswogJid4QrqQdSYkiQmcqNtcbde5QdWjV7NsTW6u6upyeTbfCtYrH5uRhb1fp4",
  "key25": "5PqPmw1sqGAyTorzciKYdebxxF3jJCJBNoedpbjqyC51jodzLyPVFhsUJ6YvDkVXsJMWKrXDzDj7MRy3Spxghm1e",
  "key26": "4WEDrM7SPTXy3sfh7oJXZ1jpXjtWS4Am2phgKGSU9bEjNd5J5v3zhLnxSN9Ke8rixfT7YPEGx8v5gHzfcfoKKKB4",
  "key27": "fAbKTwzC3ssUmwvzotbwVdRCsc1F33taiVMyYniQ6dEkkK8oLdvdfPYeLhPr4X8itWJCKUECbc9r6ESKDpPJdMp",
  "key28": "H3aGa7bcCWsbfzARJ5PMVue6jpQGEXsYUiU24ocjSbmeeKJkDqPitTTVEpBHKsXyZ5CYP2BkA84gbCT6LY6pUP5",
  "key29": "2LA6SGB6vz7RuQfXaB2xeX1uiYc2rpmozkXMEYJZSgbY1XeKAVvRoSAt4wjBF4ScKhsexYSyhj2WjP3q9DAf7fd9",
  "key30": "65FwCLx1nLSp2H4ybqN4b9sipuoCp17WgHSdLRyKCVRqEqLjWHDbRoGFjkCizkKsNUY2dLzCTmC8nji1e1NaNHVw",
  "key31": "P81cj3k9CstLLE7uuzv1coDm2df2yqHfNisu1ZRoxZcoEmqSrrQ4iFivNXtpoqVMU7pwknpcxnogEhrB4f9qd9u",
  "key32": "1LSn5EoNerS2kNQuMiTkfSbCM5SD6rDrKct5UkuZN182vyXDMDhhiVipbo7aWsgkeihUdiMCg9WN9HiRsDzt8P5",
  "key33": "2dJfHdtqY5huaDkGoYAuZAsXqsN1GMfkoeupxASScivm93QtFFXanUn7bmXjtegm58mM6K1WGkT3KKapbZowsiuA",
  "key34": "VpRjKQC9VMPGtZhQrYzrnwWqzatnYgBNyUzq981crmfzHnAfSYkxpCrdHydLQ6R8UEzRqFFZk9NeKhjRjaMNxvm",
  "key35": "4ppdtUm3Nnsq956dWZddeseYok4ZCuVG64ZnXHTztkXyCKfDjSCM41MsxeVVd7n4WJtoRV8HU2Cer1odSw4hBXGK",
  "key36": "3fyhDDudahhX9ouTwoPcyuJ8GdSNiit3XW342pSBXjmawWqvHxvu1MUoVciw51JkcfPY1E2MyJKZFVGv5XaQ3BhZ",
  "key37": "53eVja3w88D29sVoKVjtV2iASonN61eFn1xMasBXaEupnam2LjiJXATk5sNtx5MpiF46P4ysQ1b8ykJEe7sE9tAJ",
  "key38": "3p9adTpQmLtr64X96sn71e7dHSQXj3UAk239SPsRXeVXPTm2gxwQBPvwFa4FYboa5v4HXBpgnkEqLbQg59pZXisX",
  "key39": "4Uky67izsqBb8arimugKqbsRQLvPzkVwFvFG6Q3pkMpMst2CjDBshe9KbqmmWoPRdoSjm4giKgR6oyV5ZsCqHqZK",
  "key40": "3s92pt4VghpRNku2caDTPaXGStMG3Trb24jKCJGoqpXFivKcAB9wwrqDzBxr8qjN5hdeLdgj2nHKda4nYCrJxraG",
  "key41": "3Qtc8YZeRw1j1BHfzqVnbvfQWXowh2eDGnujYgSFsueVUcNUGSQJ8jysNzu7z1VkkaKndKY4BWsVwZp8YbHm2pT1",
  "key42": "5tVTC7LfJHnvmXfJmpb1WpMa5Yhxooax28LNrXpk7D2ggytvSLzrHvk8rmg4DxWv7g5i5KBGzu5CArhZNmGdtfvW",
  "key43": "4B5Pfr8Qi9qqwuEBAjh93nUXGKzashZLfhYKh3z1MejuSFiUSWjTPL5Qkap3t4iLbfwkyxPX4hRjwv3qm5bFUUfn",
  "key44": "SEAeyQKdHAywRfbWAxZSXUBryNPK3QcPM9Wva7cyVNhpbWfa1d7nnAY8J729rUNKDXShtCkgPQAQvwJ3Mr81xHy"
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
