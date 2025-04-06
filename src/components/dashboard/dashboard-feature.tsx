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
    "sB7atFr5tgLDoF7uzFKo7W9hr3TydzajgoG6xM7frAVKzFvLLeEYaby6FBzt73faNVBKrovyU41mD64k5mvveY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEeYigiDjaVUxJM4rrwhaXUXGymsU7efemPuMVgin38d8BSD4DnFpfTKGb2yqonZqG5iN3hmBMoy8PawqqoyyKv",
  "key1": "4r78Pwb91mcwtCduUkRSG4AvgJWoCew8ZtdojNb62LUiecpi6fN4h5ZTTYTp7hoRs22yQmjZEnieyzY2YfT27fmZ",
  "key2": "5dV4rT9itiVoLcHQ7vn5Hgc7rfewz7WWajaoFA3LMY3zN4kYfc4Z54TaRj68BnULzMiN86Gx6sEU561XkDgWUwVD",
  "key3": "61Tt3kXvga6yVB9L12gw6gUu8d3kxdeyoVdCvuyyAtCEMWTfEo5GbmQJh1i71kb47HwBXgCPdQVvQ9e3EkpkkjtT",
  "key4": "4yLQmScsNpWz3Kcdaqhrtv1ETzHS4tWvXhx721ZR5izNCXejtWMRZ8irZxgwuof4qPcpK6xgAPeJxwSjL4avFfqr",
  "key5": "2dUmbuGCCUrZ7mzc1AkD5FL5CBJf5Q64Cp81FJyHxFisvHz4mBskc1kVd33voq6kAocdQw3tMo1jZpjMrfRyWtjp",
  "key6": "3wkTApsamEyheEW67wnEbTTiE2VYrquAKt47VdrHGd3dbaRvG1w2qhvzfbiiJeLHs8PPp3Gmb1Hzdx6eMKcDheNE",
  "key7": "2k3QjdsqHDqfHfVv99w8CAWA8Pisnsh4eaCvkMm1ehtuydfRgizexnNJ3odtX7Ne32XvQ8PCkMN2kbfkoTn9HZnc",
  "key8": "5Frp3Lvn6rDoJuoYVEr9PJVwGbXgy2fpp4dkgXDyVL96QY9GzfNErEiqWSmBMeyokVwYgnSCvB3WdrSQ8hUuaeSi",
  "key9": "29YxAJ9oi4kWrHgpvMb4cUoUfoKDbWMZ7toy6MZeJcb9AYDT7DAo9Lc5UkbDMpYHLaAYFR7sQDQ2eutCgUgLx5oy",
  "key10": "2a2UY1Bd8LF34GqXAea8V6s5LZ14MuwJi3Ny7ZT1AXnALAqgukHQV5i3M7v9mT6xNvhLW6jirnE1cGNVzMNG3YQN",
  "key11": "3smcixsHiejBhgGs9sWKZyYyH3zAyEui3Yhn1gKt8aHh5sGiTfKFsb2L32MpdqYPRFarfLopnTyCN8zkyXiJXc8Q",
  "key12": "5vYW5qRSz8159cLN6bpNXCoLJr5HsCgh6XeD6wZp7vzmZQxLLkg6a7cUSDZwHMoqiPKvsShuRRaiESVLVWGpgzTX",
  "key13": "4z6yHg28MLyEDossAKzyLCdYqRCq9hGKM4LQVuaSaKZHLmuTZCdc4HwdbdJbfbPFwBp5ccc5K5n8eGUbM4wveG1Z",
  "key14": "2TwuH25XNwE36gsSSeq2dZmPXAy9kd1CMumRJ6PMSpTigTDaTKv6GS8evkiBCXYxviPobLdeJqWBMd1vC9ccazkw",
  "key15": "4ANZVDbZcSUKHkWgFfpJJjvqAHzkCjnDQJDKpmZbnxeYovugjifrvvtJPeWbz575fpQLRM99fRHuiiBezZEyzrbv",
  "key16": "4zmLmx4EXq7tdKL7DovjG4kaM1NDNJ9oA2NY9hJnjaM7HVkyMWhavq7soUsrSgvvFKcPwSX875NxSuJWPgtSzx1u",
  "key17": "5ABRXLyHi57Jz4FaRjxQbKVfAgAGRXcN25CrpstN6V6qAWtfUT3rANSgE4MxmgS4QZrro37n7xAbfogeJRrhHKZu",
  "key18": "3ExZsoPY15HsLGeVN1vPWxWGvVJYiu8ApbuDRkyY21BL4Tn2QVJV8X5yb7jsWTF2UXZhTN3s9QVQzL4xTDtZ9qt2",
  "key19": "2S1rJVtbpQt3oX9LUSdiJKFYWbfNRs3JwcqXcLvqS9wteSE5iGuEagS4zEPcL52A7DkDasto8fvJUAcFiJRQsMen",
  "key20": "5v44AA96fNQvhSw2go6nLCH4gFsszGsKM6nJ2A1kNHuupAbmNUaFbPimok8GkdoGAWY3caAcRZMcfja7pjx5mGxB",
  "key21": "27U76B3Q1gwoSzWa3ajENxznAZf8tTBQxbvEUSQSiMBMbn1FBTjCuKVy6geP14CiNq2BBcFmvq1ALpH1ADZu4nnA",
  "key22": "2H5vZRujZJNzWqfQPo3a7Fi3uqsBKP3PHWPrUYnkeqqPKKdrvcKswqYZaQRKiSvE5YQQcfGZn77PyFP3QufSN2AH",
  "key23": "5xYR4pZCR2CDND1HcttRsD6KwA63Fu3YvR6awnJpEv4gaQEmLX4JdSX69QxVBMiTRLAyG4m4yJcy3A1p3cQR3pMz",
  "key24": "5bBgZ5qXyiJ12Y8QbBh9RfydfbNv8s6KKtsvpCXhAQPtFav4TgWSk8FpAr9WC44ZaSB2FvmeGZzYNoC9Z3owPiVP",
  "key25": "N6orLAuCKb5EVL32FKYAgjtjrdYgMeCnBs7S8Uej41mf2uaHY6UE2Z6B1L75NXVKLuy2e1EZufJKt184dkRGAjV"
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
