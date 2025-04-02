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
    "5ippNzMQFjm531e3b7v4Moj2wHCg1BdQyCXQaBs77vgFS1DJB2FdiRE9ZbJFBJG6mnQFzfEvo3fW8JX1ZDm23Vay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Z7yPKBkTgHvUPNq6CJ9KwpUxVc3PzX11KM3xvoTBfhLpcT2XvYYoj3fFrxwEvK8kzFy64y8kBNmXamj4KGBXB7",
  "key1": "5BF6gcz8hP8QK7kWKRFSXt6YDPcoYp1EyByzqqbfJADqtjFPuj7URQ8bokj9rroWs84haqgogvmcJdLvvh9bF99k",
  "key2": "3N89FUAkYmbP5oWPwsPgYs7V6JNzvsYuTjqdQhZ8hqLoBbTUJftVbK7esYoCTcrHqrS4KY2SXF64VRUHmRJbV7wy",
  "key3": "5j5Jxo24cPaA9FXfvczwCAJGg9pt28V5TAsv3VGi8X1keWaQf6BHpVTdu5z41zHcRMQr9LKzNADfWqhoc52Nci1L",
  "key4": "5KcEVbySVXnLxYhaCtGY9nfT4CvdxhwtsoCGQCnasnXywjANxhXkqWFxNeaCWViAMGKRHmDFEdDDwzs5C1WXSov3",
  "key5": "GSWtHfcfK866vUUmAv7J1E8hVzqQV2b8qDFzKwvCsgWuyStskezRkBSRU1eZ4eLXNbQwPT8gKDKM24LrWV7SQKr",
  "key6": "G1SE2KjvwKcjhzrQacvqd6c8iBhoyhx265nqXrZ2iq1LvFhkxn2XKREbnuUmdqo8XwjUWz6irFqj5smuhJRjer7",
  "key7": "21NaQtyQFBKyTSKHQNgURXmAQ725iGfnQmWkaYvXXL9DNeajSthFun5LeDbhXcLgdxTU6CFfRK7euKx13UZ7BZQb",
  "key8": "3K7T53eam9VFLdkQKx5zmeX4KFkQiudZVvC5gBVaczmzeP9Ft4LXyWSaXnPsn44F9ZZzbocdhtAwApjDSKMLdVDd",
  "key9": "4xwbJWurhYwq2k2CsxZgYC1dB5CLagmqJ67yxHvXVMXupReFgUvyywRnGPZpfNtHGuJw5uWyHGrhGSPhkDTvdZpQ",
  "key10": "9jAvSR8CKKSncT9xjCb44T6ZmxYMUN1Zn63brWnMeKcojpBC23FmfWEaTpThrS58KEbhtNCuobWWPkchQZE3jCz",
  "key11": "5yxGqEubyWVc9Tt3njGiJRmbZErqb8uXsuXe5NubR57PuHaX5D7s2pS3La2Jsghyq9NFSfVjk9XgFXbJrDNkp7uY",
  "key12": "4gH9QyLZujb3wm8SPtUtSabQhj1pu9AjmX2is8N3KPsDrEsSfT2VUZ3iwtL1xHTsNBLwR6VwNJPeDgh177bjZ7se",
  "key13": "2wBorqo5zE7DtLqSEygf5wYxq42cq16DtqAP3K96pbXk3iujUVDEeoqK5YjHetUfb4XX2fJVZx5iaNjaJHRuHyUc",
  "key14": "3CUrrppY7rGUdYm7mZKX7D1Ps6s6SVAZgq5xMUbzjNh4Swxj29JkeetapY9PWL3REaNwY9EyUiuS7vDq8eSWTGPP",
  "key15": "o2USdjksAM4jkfe51nmD69rMKXovmdWTtLo89jvSJiDM42tHFbmPs2t6H4JD5rV72FQqycYVvXab2v7nVAXJDUP",
  "key16": "4Q7yNV22qcjCh4RiFvfjrnsHvnHEubzb7DHZLN1sDb3qUe5JnWAh9KTn2TFGEMUNkCVfCdg8cu9G1C8y6yXVafsf",
  "key17": "2VFBCnqQuT5BmmAjeSH9FHfzYjUirpmKEnkGzUeN9QiRLSxVtXEMrvmm1ZpAtSHNzq63VZXU6SDDvda1Tv76xa7z",
  "key18": "2MdUwbFxp7H79QdbUWiER9CcUp6c4Lpj6oKaiiM8c5Xd1rUsXZ99U9dz5D7iHa3f35xtBumhziTLbCtWX6RKs4Ci",
  "key19": "3mE5jwMiXKR3uPzwPzoBXBpLU5Wc4xGgZQDbvRZNPuT8aW17uS6syN2yDUahn5WxKunPwkVSiDh1Vnuu9kMWTbKs",
  "key20": "3rgPGMYgLwpwTJnryKLAsXoGUuKXvkWpTpvcMRLBMPkqGHdWSzV3uyAD9cjzUkXEpZ4SueYYzSwhaF8FZCXQhiit",
  "key21": "5YwujQQHqbfo48DpjAR7KYLSY2bVykyQ52mLXWufdEdu5hPxQSR51rpnZDZMh3qbUDqx2zJvQNuuwznvs7axPjwM",
  "key22": "5KDxWwvvfHwqJRu7Eybx97E25QxKgxSifH9BvDUdwxHas8aCz4noQbhc2XNTYSd4CjRN42fTT4bFBn5nd9rfiJyx",
  "key23": "5iGXUYND9eRVXQNg9zriNb7dP7kk77vNVv6L4AHb9SKsjtELfq6mHgpdShZWufTnkgMJ7yrC4UQAsbpmpUvXmu6r",
  "key24": "3BfRMRy1NqZwjvWPNFYP3YgKd225u7qqMsEzMGH8755Jv4Zrm9yZTBhDoS5VG85x2d8iF6ZSzNkfEJ7wcJa4rMwS",
  "key25": "2pGVevRo4AxwKeuTNj9Sjn9C6MkAwgAGZP5zGJ6zBYVACv2dpF4zn1u2VDQh9hcbdwdYXb3R8pNT1au6aZokut7C",
  "key26": "392L92pbrjyR4ec5mCXSjwRQm4Mroaw57UeisHdqfL2K1LYiSPdGbUuG6PjAiUEDrkJDQL7TgTqQEwA6mkLx9ex",
  "key27": "3nYbzanuE7RVDWqCm8ZvujniQPutWcqJPjRLrpjVJ5oYqwMbFW4GN8biW2hQmfHH5L1CXwpQySzZXzFAfgThJyeV",
  "key28": "2X99AFFB7jmpPPhbxcGhwMaUobZiqQP1cYJbCACmrrR84AcRRJk6SWBptu7j1k28vaK8Ur3SAeexnCddfUYRuvLV",
  "key29": "4BEev1w4uCTwADTbsAejmJrVVmHcXGRREUDMFwP7PUENpn2qyNNyW1vnra73U4qQfpWmrTigebj1ximkveFfxWLt",
  "key30": "5rs3Cu18Z4jY5gUb5Gg64WxU72drrbZ6gMSjgRTf4qveHxd1XnM2HMxZvVG2oRnqopoXptYM1a3DwXK8k3CpEaFR",
  "key31": "zYhtcPhJHDkJjti3vWUVDetyWCHCAiHP4GNawoJj3x3H9GdpiRFskbKEjfwrY7QHUTcFL6LTFtJpCuQt4rFGDup",
  "key32": "3q9yUAkxD9BuftCbzgWXbUgHYn62BJ2xC9B4AeKHMFo2xsyS7TdJ1QobC1iaRmHtfwCBJR2ycn5QsbUdMZsuaqB8"
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
