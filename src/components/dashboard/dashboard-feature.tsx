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
    "3wvKMB6c8aGrd9oze4hpPn8tnUZAijnNRdMnSK7AT28nN2gYp6o79rqMgDzuuPirrong6zeLDk6cXF4uZoHpzLL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LHCTQoYEmZXYFb9rjzaMx8pY6PyJp31UGLHBDBQSz8ZmXNhCaAodb2p3DsQQHBwPeye6t5xSYeVHfQybNLBbe5W",
  "key1": "521tXQhuf8NZJFHe1gf9NrqmLdEaHsFHoH3MyD15bJv7TrkrvY6aKENKjH5jofxLqYvVKiUAMunJ4Ynk2mGhw6Zh",
  "key2": "2Kd4ehrxdj6FVBBRngK2drMAPbkxUKwGzL9P7xBR7rLEg4DxJbtJv4TAKAPviem6M5yiTpxrCEhiR8MiB3Rirn9H",
  "key3": "2551ejvp8U9GF8Stmj9vEPrJrQ4aAi2huxWeoJCXXyot8xnS96NzDWdiXgQV64ct6jLv45trSBZa8p5fJKubsoo2",
  "key4": "4fKrkpw3w8pjby9XRTjRKY2iqUmj2LAAD9Q31bJMswcGbcDQKoGg9zEpKvTu8WZHN7DgdyByjQitcC53aFRK8MMt",
  "key5": "58t9bBCVYtpSiJYt34kpAH4MWV2dCjPUmvmA1J1D1ts3A7EKnPjXnFjVCCUcV1zP5pwYKUq1e5f1U1jLwMLLCc2b",
  "key6": "2MzP6vGFkAyki4pGbyUbQ9EDwamUmwjCXyfyN2r1r32iX2FgH5Cppd2dy3t73C3gR93JUhwZ9CJ9x3VwoQusru5w",
  "key7": "bWJWjmd2bvVHiTM7JiKQiUXf8UxZYh9fJcpC89KSaM1sre5gQSRtvJsWaamiNqxX8rrq1BJzJZQDbedJZDc9iRU",
  "key8": "2L1fYcRA5e2aspqzhKWR4cVaaqMA3Q1bsjtkTYFt8RsS9uaUZAFfwupfSZpByCe9naRXEGsrMhuxmpKvHDN3SUPg",
  "key9": "35FxrcFzjeTmYybjEqxzvxqv4DQ8BjKifAgedLV8uT45ZmxjnzJrehJqhks4HHQSSotk4a7Zp8hGc3oDyJzLnYKP",
  "key10": "67BapaD6fXD5Nc2kxtVo5KEa3PfYsBaLFSLEYaH2tNvDXpUBuuCXPSuTg7bBeemqvM5yUwRBQjvV1xXPyPvJzica",
  "key11": "3Der3NkMKJ6GKYp8TqwydiM4n3m1RQ2uuz2H9EWoUjPLcShWnPhMJz1GpQrSG9SnjhNqJN1LdveB4uhMyTW8Cdob",
  "key12": "2wNu4kvfVHoTzBKjn2oFaEEZHHGDkavY4b99n2VAongmd6oQemD8VpYDcpYgPup24cqggD95emrZfevGE13njUUv",
  "key13": "4HgKjqDmYuC45DrRyAnrdV45PnMBroeJKgrdQtfsH2KGDwWoTvYevz6Wx9ezwmzHrdD2jGeU9V9xWiXRKdNzv7EB",
  "key14": "65EA1fVpKW8273WqkoTyXDw91pgb4wn4zW6PNyzp8BfVMBEPh8HdZRqRK55Eb3ZbVEYDfcw1UDtvqoXbexitmEP3",
  "key15": "3ZARmcBwkqCBR1Dcodr4RKuEdWgNdBQFczt5NTNh1be7kkasuBX8V5EnhYork2nBtgzXYsxQYYeuyvAz9Z9aUrkD",
  "key16": "Qgpk8MSRieSs7FhLu5pdKFZZdajwq7EQQXJMjzYtVjdtqQNg2tkZhDLiKBKH1TKFgrd1vL82g8C4QknvKX2rnNZ",
  "key17": "2vStmWQbyc2tzK72Dhw7m8Q2VbsNHwCtGwNfTTtvW4nv4m3t1dWW7XE2iiBPZqoaWPc3WUv6RGXbyPiu9LjtA9hK",
  "key18": "2uc2aaK51hJGBYR5AEa9KjfS1hoPkBuKYUrVsUXiFvsjQySE2LJWyCxu9rD2Fe1mTCJyseCvygQQ1GxFDxFJr35L",
  "key19": "2bYyKtb171Wiw3sgaVLNa6NNgyNpkrFhZ27VyLQJ2MHWprgPgdbicSnpiPphrfXzDFDaoiULFCLGXcaooMwjji7Z",
  "key20": "4ZNcrVRRLTRUqiChD4ESBbnot2cEZ5bym9Qw9ArY15pTnz2RzMD7PyBH8u9JDf5ujZ8hWwqNxN9He5J6gTZdnZGS",
  "key21": "uM1DPwjK67x2UYyBj6yXXMjhE7eaFXsXdeuXNHRPPXqqppqnoenoJMn1VnQFGg5JaX2k5En28GGhPXxhci7BuiG",
  "key22": "48qXqTTkLi4rC6SpwAeZfkdabKeYAwg7VkPiJoWA1jUnTeeYjMbd6dkFLermNjBtNHftWNcJbqtXycPNax3f1qUM",
  "key23": "3ADmZjZMMff1uuxUFTMnZQNnHbgAD5rMS7ZbXirpkZms3Yp8jra9wLPhokwn3BTPXgbpCS6hjBPz6pbRPkgbyHvV",
  "key24": "5gMUxvjVG9613h99jAbtVKyy1smiC7VQZ1FsWcW8ZgdcgNqvkaS7SJiqa2Dq62WAhYv3rvGZYHfh9waUZ6kZYZwz",
  "key25": "3HyWj8KA62L9C9jx83qKyB3hdJni36jz8PT4jVE4BDKsQANck8xqZqjkhkHRTF3FBzJnYYMYqsdNPxZYZNXPXPMr",
  "key26": "5QAnRJni4NCZHwXbzkmjrpUMaUMYmP9EnPTNxFUf6sDFUFcd7mRH3wCFZDZNC5AF13c7msbhj7GnsmZkG6ZRivm5"
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
