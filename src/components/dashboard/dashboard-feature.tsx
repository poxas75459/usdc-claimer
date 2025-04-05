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
    "23BJTfZBGUZjXe6HnfT8aaUQ2owXhUMh4xAA8WqCZvdgx2ZX7AjSnSiTHgMyYGhjoCnjnfiqdV6QgQaxhVjrKBia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrjE1vUgfoytfXqSB7aByLmXUTzURUDpPP7yn8q8VkvPaTYzKQia7yGnRaw1EEJKM6zoDrYnZZC5oihxiXZofy2",
  "key1": "vPMLwXDiRTVDHC4gy56NJoZq3ZqZbCz1TmS9Mp9Eq3HcS2bMiGAhDqpX5rNNaU1NtSkkGmHeyDXLuSPJq95psmh",
  "key2": "3qGz3MdcvwPaCAb7LWaWShTrck4Ex9V8m51JwwZyMMSeN6QL5qemy5GRghZggTswQSiJT9bkxUieofkcCvZdaKib",
  "key3": "5rYQekAThUzp9P7ReJdGbLBPdYLGKkPfjT4R6vdPNHRWKJEPswdxZdioHPSkMLRo2J9z6pzjoZvuSSykvFmz6MvD",
  "key4": "13DCfKzvCjitXSL5ZpVYTPUcVs7QYy34KqvYpzCS2BvSGHQie5crmdpxRzcVnw63A68ZsjgHMCZVZd4AJPsHLQE",
  "key5": "5TYpYLbQvXBnJftnsLdr4MPDufmis6rWZmfuM3gPXkMKrG89mm6RbAXE4EWJ3pip5mS6XSSzHb9QGQ6QNAmzhAJx",
  "key6": "3kqTT1uN22udEjtQ4fxcbwjK69XnxyuGQKVtk6rcqqAjAAzFtQ4NzmY5yrym5NUxQb18Nu9xp3wGrgJcsYFXnxRT",
  "key7": "2wVjkYMnvz6wnjivwLTio4kjk9Me9KLg9FLHxoEVYzTVH3PQ7m8nx5g68a7EMqfTEJRQcKFP6RKNYeQKX5uJaJQy",
  "key8": "4dRyHEuDmnpQTqT71yQ9R81vmmrHiSVvekAMzyA9x5nR97U4kFeE2JdGkXjWjGwtW8Ucd99ub5ziLb9hufJL6rFP",
  "key9": "129cK3zZSou1HpAoBiEWx1bf9nsAJnBC3MC43GuZaLRKYzgoUH8Pc6of7oiBPyBDFZQdtgNMnYUCMEZ6hda5bPBF",
  "key10": "4bswXBm4SEbGMEHxPegJuCJmjMa15uMDybUPbPZirdwMBM85GMfaerP8q6DVf5pFP2vzPLTYKf3YWczdwxSoVotZ",
  "key11": "3UTKhvFwtAs9eV7AzGWVV7i7Zph7U5QSmWkVvLdwxDfWGXEa1UbdFfuu4DUTQzU3xmtAkSQumxZJpAnRaKWQMRLn",
  "key12": "P3V3LQdWVAgWGYVfPuRbLnV46LT1BsoScVmStK7J8yRkUM4MFU62nNHvJWFH6SFw6qVmhNXRZJxh1fHDiw2KAzm",
  "key13": "421yvRXymESPmrFJsoSA8XJVfonceJBDrtDC3U8dQbmDRpDfcgHbqKDAxhtnxEnd56Nbo8cQ1tazymLNzSy3JeKj",
  "key14": "66g9ksm3F5DBZsQh8xEN6cXp8jpjKg6AFZTkEK6Mswk8CSU37SY2fvemCzrBZmAhQww2ivpX5DhQVeLAb3JKKYAu",
  "key15": "t5CDaJbkvUe124fDztDQPDNB2Yw1ZzUD4N7hBrdm1bveVVKzftxvtWDgN1tQf76GwUWeN3pL4NeYtzqena42pnD",
  "key16": "4WqgHvV9E7bYn6NV6n6nb1ygbxYBTpdJvKdtYVHsGmT5TagQmxPmsottwrMeFrTpbuDwfbfVdjuLATxFPScMxXvB",
  "key17": "2ksBtPBewHCLpsBFw26Dh7uzL3Q2fAErRzGaTL6xQEbje4YPe3Paom6dQgNCJsLinLWP4cSvasqMjZSkK52Eyjvh",
  "key18": "5CR7rm4ende4v7kBbrQtkNGucqYD3ZoQGNJd6p2NuKhXbyJQUtcZ7fkJym2Y5FD9xUuvCGb4BeXo8uCX7ZUfiBCS",
  "key19": "w5ZszJXo2xCRTgG1hweqJmM7kvpFaRZAdyaac3KSvgMPui2ntw4cvhdxGJWoCzm5ZigsmgYDVDy78in34N3PYmG",
  "key20": "55NivJ74kqmXMWUaMZasUDjgCK5xXdAxWyjRZ6QQSPsSASAeY2KkByhtwPyY7L3oAag3Lv32QVN6XhzaX5EDoRpw",
  "key21": "5RBVxoPj5bYC39rMCA9bnTqc9zu4N2u9g6hsDNeTsPbWWsMRvFtK5WMbmCnt18TXKKTkkMnwj6CH5V3WyWV6jxF9",
  "key22": "4q4ZKxhdZfjdGVRvFeZ57UpTQbEw9V2fHSD2aoH7VeDahwQ5WqLYQ3MDgsSqR4H5tL8xVxHT1iap28uHnw1FNxmB",
  "key23": "67HqKPieG2YVc1yjAzEdZ7nvuzUtaAipAimmbiC6YPYQ6yxV3szZe2s83gi1VmbUPF71RNdk5EAURaZBe26N2yao",
  "key24": "346xmXUpbyVCLNUNRG2K5ejvWp8scBTWBBmCr5HiRW3V73joqcYzYDcLNxKoCLNM2a1wshr1UijKYS8XhcaLkWhx",
  "key25": "4f2x9Lh8YGxJEY5bZRvxEkYWceymvzsxex7CB3FtMD1Mn3WAKLAgUu1mp55TmfwfMFCdNfJGdRX1JYuj3D4gxnwS",
  "key26": "2M1cQpJxgVC6UQsUr8wb1tAbKtj1ZG9iFBP96Bb3SjBnaRdPaTuEg3cV9r4dFpPxYrAKEWqR5uuTsMBftwgZqTGQ",
  "key27": "5H9bsavmNUip9EA9gEfmhwtF5qhZtyYaUcKj2Mki3Tk42NC7QSadj4Bvu9DRa64K7zjTdA5jVmkS1aJjj66w94zW",
  "key28": "4jcuyctF8x8VjbaSgKYwmEG1ix4F15GFtHWRw6nLzXet7YcEUwf5JBeeDjtGXcFM3xifc46edVUE5NeeCAVGBHLK",
  "key29": "9D7vyT4JJbzA2wu6wDy7d3sW44rJVhMuhCQSDcbLVKqf5qrBepnUJMVCtHffdvZLAbCQZkGHGWRH95x7uEsS2YU",
  "key30": "5VFvFRXTEJKeWaqNAUxw2RCXHDbYzAcFdnZePZDcRicsx1v8vb5hXXss386eSa1ahPLJmr6tSH73HYgs8f6aVa7z"
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
