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
    "4GU84jLMVdmvThCHYjRTBrNSL6xBZpSXdSphowjZodfeXLSZQ8ZCmVTX9wLhmroqVgWdrbqeELMziKJFzZibchXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k6D46NXc9hRvgYBDKVSd2wGZAKwwahVfHGUgCHArjfZhBSnyyG7N2cmaRm1DcsV9D9M4XXhHPRyfRW8wPAqsUh",
  "key1": "4qNgB7btEF3NQX11QF5emxm2pgY7HVKA8fH1vVrVbgBV3utCUArKcmgbJ6WQEw9xFMU3SaKuKw3Cczxky11S4ECH",
  "key2": "3a2MYG2xmpS3o4TtamxLnmjUrgdi7TPeRaSMqny4wQjpXrbNJfNwjh7MrRzqR4G5jvYGPsrSsbuPehSWCDs8Mhu",
  "key3": "3Hf5y9XQDCbki9LohzBS9bVmQGmBQdNqfxG7yTGWM9TStjnTD7xsTgeBkbV6iNXRuxpVrJAfKYWgjVSeyqrSdUYH",
  "key4": "3U5f7w6ZcmBUYwrzx6KyUMH4v9hKDUm4rYwEebrzNm5dgPVryHEZcKP96DBMofpropmSu8DYw5qWtmhHn5L8oT1k",
  "key5": "5FCfWEueadD47Uos7NShTvckFFYphEK2cp6CmXCyXXh145q1p9QtNxP2bnxzww3RaD3L596bqoPmgsgnXsSrXEfw",
  "key6": "U2qmPhL5F8wJLmsyaH7nihYsns85UyjhpTwmZdE1JAenS3DXLceXDtHaaopAzaxryEeQcFy3PCuLPhLQqmLNxM4",
  "key7": "4mmjj7gwFeU4HV1g4LFPVSxDqoGHf48FuJ7yVEhVwzF5EY3eAEgoWz33n9Xx5N1CjqoJnWzbi62wXfbhn9vt7Tyu",
  "key8": "27YDt3tV8frrXTNknEMT3jBG84D91bo9Cyby2wcKcCrLHbutfS57RycdyYqer8vy2xNJYzhjM7afwKA3PZAmuPoP",
  "key9": "2Xw6sypEtYfF6LYGwCZDCVT7JYLt888756uHeLffRHTDdwrB98Pv365DUWbt3MeaVKVBF8da2KeRK9JsedhQ5P7G",
  "key10": "4SHbniJejXq5x2JV6KDLZJSVLZeDKyAhQWrPNcFp6uixMP4Y7rr7mLyhfwxwvx9ofKSjkEofWhxdCtRXA2BwQoFd",
  "key11": "4rpuUYXyakECzazscxasGQutDRiWY7zuda7VcbQJpnLRzKBspYjjMkF9wKvDuwiV5sjeiMh58p11VRVxWk7Sb1VS",
  "key12": "5BU89PeJ3tfnvyaho5pdHBgL9VW4Ad99rpXCiUeCB7abdEUBt6iQPjYNyptNGEmQ3XfX5Bm5xYBdJVWYQgHsicQX",
  "key13": "9VBgwSFkFx2m8tfsFh6ns8NvBqrT4WcUL5oUPuetD2Fr1ZzbRWB4iBYqU9ermbBc1z96QWUpAq14vc8ioXMEe1j",
  "key14": "gRUHemy566M4vV7aXfMEJYoprBrDxYnTDJW7FA66ApBq7jus7NW87kwU5cbFtgHoFN7g4fzaZcZ626GDwkyb3Qv",
  "key15": "5x8Qi9s1tA2h9We6n1kLHmSRzu4JHDEuXeFDCmUBHyfjp7K3xRCWQH2cQ5LxpwvGvPgQ9EKLfeDvzbw5e25qYy42",
  "key16": "3WsXk17vgsD7HUTnzpVZPijEdWibH4FUxgYabDxNDDvDR8up1vWppqyfMJ4GcQXqgbrnHqMiPC5cL71CP4i98vsM",
  "key17": "3CAKq8PwanSok8sGegdUoDms57mqXCh9kfT3C5UbXMH22evKZ4EoKbehum5Rr7cu7RhgmqDPAkmuvpN8ipMXG8F8",
  "key18": "2kLN5ZHJVyRcxxFt1CYE33GF71RtY4BVKNnjXVngnAhPitznW8uF7XxQ3cFZnpMnHrWDHb9m7bwWW587QWZKqWtr",
  "key19": "S1n9xnuDTGiJ3tQaY9kLF5HzAaiSj8CcvjyaqdgGM1z53jaHJvgeATKmTCaKpWVcAw3APfoiTUyAyGnWLe4RJ7Y",
  "key20": "4RNTiD6SzeviCPwddeQ78FU36eo3GjEAArY189fM6JKbXHN5ajxP3hyJBVoXMpuTKk3FPWqouXkWQA8XhHiAhWap",
  "key21": "2JBsqTVM5RCSPuLa4BVGArh4CRKK9kgSWRAwUdLkiqGHX9MryKguo56d9qp27UYKRjpH4g4nbwvq4TEwCPmacoy4",
  "key22": "4BUXiWKuX5LQxYX3q1wjxBnhTuCufuZXPWE5DF4uAwbkogMpNB36mLoBFuXa5b9kQJhnyjy9drm1DySegTsbjdty",
  "key23": "5jRfTMyzXSeQtEnzkiwQhApE6TavHMmkdYQtEs2BsWEjF6fKmrSLezrK9WB34xERRCKChR9Feo3Qo4ubUZGmBBmc",
  "key24": "5rNM5WUvpMEAAFDsEUK5ADosyTjH2JYrkp8bjU3fbFz6dMTwXquBQTyRtK9kCeyYopfmBMBpytwbg9hDtZtMSKvq",
  "key25": "pKZtkYAtdjteuMp1icaYGUYb4gCCinjiRfX14abocXnyvjNF7kSunaE4mCvJpjG9sMsmqN36DJLKeiMtzs2LRBs",
  "key26": "4W14XKE6477dfAHhBRkCVqPTrRsJh5L2Bg3E1aXPWxahDYghW8qrTtVMeGfmCvzvSX2V6RoueqkKtQcanFKwU2Cn",
  "key27": "2dWeJFyW4cFHKuMVjdUhnbDbMSQq1yZ3FZxAe1RoZe5RcffC6mZ2yqiat2fT6UhsnEbNK18e6zoGFvUwAxKDaUuP",
  "key28": "5qucnDaEwQ8GZtf1hk9mA88Su1f2Bs6sdze5Hyv8tsbSmZ8H4j4BeVoAq68d7AHJesio8GY5VTLatFB22MqeaUXD"
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
