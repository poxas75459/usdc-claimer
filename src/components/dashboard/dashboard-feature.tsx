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
    "2ErLenqCHuRm5fQAEzvM3QAd9JjY2gGM9xAp1pHKcDXoJhR2PGAGgGTnBuj9n28b5A2Px6MuZfrJmTWiCKPg4bfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jffV12aFfGpKaVhMX8dj2372YXu2QxzZYqu72aXudpkcYRYjFqsSiPkcDkEBrTeAV9p6CfwdtVGVktFU4RqGsVL",
  "key1": "67EVEXQc2atZ6EcTFzfbtp4uzp6aZgYMpWK9GC27GXEEDzLkPFjVsAmaxYsUWk1z81vzyHrmojNTUSTnAhKCFVco",
  "key2": "4ma2rbsHBToQcyYMerVP1JqAKCsJjiSMiVKBbfH2BjfXBs6jtRoeAnUFuKwefxwzvayb6HQMcHazFVuQCEnkzKaT",
  "key3": "42FUKHGbgYr9iaLo7ZAhGwnpipATKBF3L6vKz5UPAC3piUY4pVRMkwpU8xsjKLT3S9UTudAucE8AeSpazSnqqNpf",
  "key4": "4Q8WeQ5t5gD4jqA4HC2GKLw3D4HGnbgtBoBGeaGtjVWYT9TCUCBMzH5B9JHrb62kjCPSdDN1Ud4J5LSpnCTuqXX9",
  "key5": "4VCFj54UJsEeLpHvqkuPth7CwLjhDc6Umzw2TkrpusYcvqb6NYo4zvs28vbhQ5BpwDcJZ2uUn6JPjKVZ4NRT8emD",
  "key6": "u7VKEZ8ygJRD3tbxUXAD6DgyHdF3SUovjQ6vrxRUAd4Dy8VrHKnw1LkhajabEej7TJJqaVRh3nvHsumuCUHXbfk",
  "key7": "4fhevm9DnwQMLwHJ1D6BD5TePx7Vk7CQfQZRcKe5naEKsQK1FDcnDy7odSZXoVyTkh89mxrXHvgU69YJsqT8hs82",
  "key8": "41fGPY1Vj3arA8KPuCS8HWBtp8f7JuRicpFPcEoaFWvAhfMVpNcVMNowEGdwbLsgHuKygj9GJjKcKZMWSD4c6oyh",
  "key9": "3gbPr1W45cmX9CRVHUCsnyLEoBXkafUDwQw6qu1T5vweJWR4pd1129rt51NfjU1TMn4KNTgJC6W8zSBNLy1wcsF7",
  "key10": "5zYkHoucFnzCrVrE7KCfKUQZCEq6M2ytd589ejCQm1QwGNZcekEMBjm6MZpod1gcBfFr6bjKTPcefQWmzP7niovZ",
  "key11": "4TR7CgNZYo9DFaM8C7qaqYqbFAjXKKo8QyiPXJsC15P18ag4cMUhhPg9yh3EBtuyBko7R8JEXxPm8ViLb5eZV59S",
  "key12": "4pJGx832MZZxW6Mo8GXv2cWYGC1FB7LGAyLJdqpVtoB2e5CV4xaQxHvqTSd3PaVX1aJ8r8fa83nFmq3FjotECxff",
  "key13": "2k1crQ2hkAGG8fvLhuKM2GfmT84zA2To3ekCR4pKbMyLgVkMTAZ82KHskiLRP2svhCAeL46AnhKnArtmLDWq2SJw",
  "key14": "SG6wyeaZv42NaJdUb6kCkc7VuSe126oYKhaHN71jErjYydkNtbUpY5AL1gDTn2mhCtCezTNqe79TCrZoiLo25PR",
  "key15": "2fpv2CzxRjgDLXn87fzAWZpSt7cjtLH1SeBHUZnHjcmMPeav77jfu8nJ9T5UZ2Kyxjmk2ExjKVY6eMtKDMG5J6tj",
  "key16": "kWaKFDNy6xQFieA4QdBcxRauxnmspiTrm9RbCtsqdjD2rsV6CKX2qEaYheY9iVR2fyenfL6Hoin1QTiKvucLehc",
  "key17": "2m5c5FAjuDGAAeyEEcHWv6pDBmNqgGUA8SfbVtZBb3tYcaKocLPUnEC7f6LMH1DCBZQtXqsFYvD8KnYE3NXtkuSe",
  "key18": "NqcGtsAkUeu1Thb4PykpEBMLgQdnRBpXhccojz6abutMdMaQwjEiv7pMjyAwQRXU4WUAx2bESvAffEkGcUKTHdL",
  "key19": "3c4QfdRFyLEEj2GVhfJhPx93RnXffhT3NHzB6BBDCUQJZj3zRewStonBNReygKWyaAcjqLvtgkWrTwvdTfH3o8hd",
  "key20": "32ZRn59o6MHeemHnt51r1sW2vkiCbwfh38qMrFjkGpBRtPEHo6y87Zazaj9kBS5niaGXZxpAjU5HvFesVjUcqZpX",
  "key21": "3osyxzRHNoTZBaeGVq72bfoX2ZrHFHqagK7zRpzYzo2o8pYSpKX2qEzyaDpXR6QaKnYP9UXdCyVD9Yuj23PRdu4m",
  "key22": "1hAtj2spJindNKpvVZe2A5jLTcAxgskf8DNjj5aWwF4js5jKbAAS8TDZW8cQiWYwFxkwiLnb2R9qwi2X9vDZtCQ",
  "key23": "8iWKTSVSK42CJDEuyYECEUzGngKKDFYutMHqHgQktArYpA8TJwyXRmHA17rPWWmiCyYktpFRXYLDNCfbzQCH72B",
  "key24": "3ZtKb5zYiCV8zGynfL6D1X31biLqy4X92SRcmGiL6YRxLZLwK4RQUk9wBj1D71UFZG4iwLRCB5YZvXVfifURuinp",
  "key25": "pRs34RFVKYpBKqUyMUpuqkG1K2bwHQq6etNxKPLB5a6rhZdfJiRY6WAV34Ycn6kw2sScGspyG1dtCoG3f1r7WY7",
  "key26": "3XUuZLjfQ1SZZ4bzSZbtQjpBPEguK93KWtypBtRYLhi8HtbVLZBfjVDKKbT8PQNfCxGVs1DrNHMMJcrhPtXjuTVD",
  "key27": "52roUrkCBBmeSAGkh5oLDRw456usS6jTQUqsJke6799n5m16Fr5boPuD8JipFKLDNY8pE13gzopdvFHmHeGWBU5o",
  "key28": "C61WDNT6X4gZYgJowfWT6Jyo9aKSBEsn37uECXX4MM38mJTV6KqbjukTki83qC7twJrAtGdkqMXv8nbsBSV1W6T",
  "key29": "4undsqETbY4gqxfXhaG48CSpRpHsmSRKJ6vcnJYbRncCKSEyL4nfkAVvx1Q8Ntzh7cft7iuLRsyc8Ek5XomhXinn",
  "key30": "2JWyXAdTEpEQsW2rc8DX4Xu72RP4owA8nyeGMtnJwqjAS9TmPs1jgQ9A5J16uDGmdLv4dneoTd4NpEXjmRAyamwZ",
  "key31": "29247H1pYCTKJ6UXa9smrpZqRtP77rVWX8MWGJpawzu5PKvaWEynHRSjyCdKd8ZGRGe3Fm1P8qBzTHsHUFH5az4C",
  "key32": "5AD5S8jtVxVEcY5zA3QiBBu3UGtQfgrk51zctrUmMxeM5YegNLrTv8qGcpb5QGxYuR2fbbsudiq8qUkLHigvvK2y",
  "key33": "34vYWA7o6A69waKVGe3P5nYf3an8Zeu7sVgVSYWuQ9qRzp2h383ov9BEECWBLNhPrTJMj9eR73geP6dXDM7ehyri"
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
