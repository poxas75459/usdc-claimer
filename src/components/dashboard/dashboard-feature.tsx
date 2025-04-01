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
    "5WneaFXsLS1v3ZRptNsKfKFbCPVLrH5PhdHPU1j6gqNL4b4cZq4c16vopgDZtkNuBAKUrtZGuPjWVbkcKVuZUTxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKK4k8DnMiR8ktPfDQ23XNHE7GAGCk3LAegDkw6TxizD7TiiXTnr3QPsFf7kvRE7vsHcKoNj4MnwiAyF6Gvw7P4",
  "key1": "5L2MtS1PsLQauXWdGmxkS3fbeS1q5H6bYp7X9XXjQRTAGemrH9KQ9YjjnJrcw54FymaEwtyHBRafnMjkmnQyNkm",
  "key2": "3jq3hnBXTmhXy8ftoHbLvbnu1dGH31uu1zvoz7yKrY2Tsqcv91vKLJ2UQKgebJD3TEkqTUwpUuSbmgXcvY8EFkKJ",
  "key3": "44njhg6B3VFA8XDUHiQ4pGSyyU8Ns2dAFhZesDm2QeGM8Np7nKU2X7JfrfNGor9JZFzyet9c9KKeSGNWKPP91iF7",
  "key4": "2ZgQWFavjPnTu6vatLQtgMot9kgtjgrayLA8GjrGQJRLWKqhso9vyr4fsAEswZTqryA2twhNSrKaEt41eCPn1JEH",
  "key5": "63j87ebyvYwQ4xjYrqjdtZ3f57xSLGDtY8ZzqQwqE9CdH5p7WNoG2MneeGzZr1DtMPKjwwFKnGfLFS9t9sZFR1pC",
  "key6": "zisLnC7ULnREwSjFePoVePSQWMQ2dxYhWMJfuczrLo7RNvTDX1gHRQLXDXTdXs8ZunzbKGD9GTVgheW1Rh5EVZm",
  "key7": "7nkAz4YQpsnhBZEd4a1tu7w3jUqYaYN6UEKs3xwZXjmrDpCX8sZ2mVNWfr1apXHKAY5Fjhk4kqqoLyFhCqTjZaE",
  "key8": "415hdcnehw3ykcHGppr4r3KseWDxR96BUKoYToe5i4LVRBTL95nHox7FNujtHVwBtB6tjNDDZVGXTGVWNXJ6x1rG",
  "key9": "5XmbEnqvjepMMXRNgeeXLzYhVhFyth8iw2iCHAYJNsuG4PtQdE6VCLUYoN3vA9vQ9UbA7dsjvMp5gv86E52GGnzs",
  "key10": "5GpjSVTyrkAmaDSxZE6oFTJbSwBq33VfbPb7T3mPrvYcQP8whC9Qmo6dksPPfttoKLZefP23B5Dguqss96hhyxPG",
  "key11": "3nLCZFhKLMwtLcz81KQXEX5WuTKfHFhfciPBBQ4kuMDUPMxvYWVfrpApEC1Z6U2745D5xn2bGye2Gp5uyrZHku5u",
  "key12": "61VCp8p8KJaESXDQB3GiLkW38s6cDBduzRXCE4zJbg7C7KkZaMJRC3n1n3C21XiTquu4mxchdNuxBwJbN9csV1nP",
  "key13": "5UmmtqjzSnWuNPFJP3Ve9q2jn1cWiaEgggSsqw9KshAZ9wXJ7n8GNjnZammqhyys85qSNQxkyZre3BpshJmWHLMn",
  "key14": "25EPzsL87Hom2tniHSTYRiRnAdsc1JzJH9NibCewd2eHPotxFKRokapqf9Cg9BN1TtLQAExrgoBzdFxsZUQimCrN",
  "key15": "2pzux4AvenygpesigSxxVHAT5fKuUD3zc7GRntcnfMba1BvC8oJNEUmMx6Sbkrfpsnu6fqheFPmbuJEaD6kvFe5o",
  "key16": "3dbfE3a7jGBAVQAoU7Q94vmZt8456stUbHWzfzsRG2cYz7Kbmo5rrrVZgUHUPBuaiHYTN2wHFKNyoAw7RxEE4nwq",
  "key17": "xDAcPXYYaw2W5wyZvPUMU6sBfEcfmViTRHAa4DgHyFRfDe157pbgBUDkYLXou5U1Qc8Cof357NGq1LFNjzDh9Q4",
  "key18": "66S6FTtiMeZEV8ncPpzimbF5aP3rzbyuttcyGQFq2o28Gafgpg19FZUUkNnPn1VxZcvTwAxwwn98v171GpoetoXC",
  "key19": "4c9HH7Lo71eYFp6k5FqAWnibmd4ZioNB8CkVCPQuCQJo7XujvRPCSZzAzBnxUgJp2cfvWeCJrnRixTUWN8bV39Tx",
  "key20": "5UYKAQwJ9YSkG3F1cyTCfJiZN42R9fRfSHpji2DQLgper8U2QzDtNhJV6xS9rQgEkSciSweQ6vqRndgvsvRcniEi",
  "key21": "rsBBGaQ3JUmoLRox8Ucc5Lg2Ym4okjBN4BdtfwxKkaqJNE3d6jtVk5AUHnYpZiJaFoxtXBvZfZYgY1HheYMsZLj",
  "key22": "sGq3CgLq5esc9W5fpDjmoG6Gx4iSMUnTYLAenaDeAS61YetYTyow5qe7gY4HJtwUbqBYiuuctpDsZdCUWxYfsFb",
  "key23": "dTDtg9zHHzPsa5oN15Mu3PEgJs2txgq9e7A3tZr5uV98bgVQr9fj2LnwQiL8SDgXuJJDZEMtdbg9MB3PA679aLt",
  "key24": "4phRoifSfjrnhbEiv8RtwU4bYBYWoSfip7Jpgu3XMdtBcuosUjDjZuquH5512ZEKNKQFAM2tFLN7mrCxabpfpPSo",
  "key25": "42d8BNZW8K2vvsLC8CrpLk86D4mFWzRK2KZRmbqtgDh1SRj9gP9RyE7wHXwVdCngmdM9BhF6ygQkDSfNxNZ39CY3",
  "key26": "57Nu5wcHBfDmUQHykBquSozKiQWouQzk3bVHZ7w3ig9NWi2zGfYi1RFzZz8PFFEiQQ2RSaNm2sXvMiurZXGNjUhM",
  "key27": "5DSJANjpWDpbar4JDMBYRZfipuibY2ozF2xaVYCBWtAxVP9KqgnbLj4nekNUWztfruFQ2N9XvRgssYzepD9mgU25",
  "key28": "5ya5ZJv7RsRam4we5KXzbgzdTX1K6syxQdAtxdi9hAPdQx96tCKM2My9fASwdP5muizGrwioYnKo2wxikTn6f6wG",
  "key29": "2XdUc4skvvUQUuyxpXJj4rhp5kQkTsh2PmiWTHMgtADyWa8Axs8NWBp3ruG8dG6M53cwsqX2vkYUN18HKVT5Yc9T",
  "key30": "WLPErp4KSFPaeUFY8JpkewmAkAQNgmpySxppjy7exFLyNaEPVmvrnJr4HxnFDeDHbPBFps1sEtjQmRi7QfXrASw",
  "key31": "2v2Lfh2NCMqtpnwcruxC81EWk4QGho52rqV1TfmcwYu5nKVwC6qvud4kkTNJf3GCWRSLdhyhf4vBfUKbVU95x1E5",
  "key32": "5aSFqm6ArmpwTZb56Qyn7oRH2WSDD9srnq7kmo9eoWCoEYLjE2SKY4SBZRQ136H9wKH1dET3EN2ggxwz34bkUose",
  "key33": "YcEETbjJrqREVNxZN1f56mKiVhYPNu7aRKsJ4LLrULTTrdW2C8AR5QAtht47bwqGSMWksjQ2kKJRQrs2MJNTrSz",
  "key34": "5HtD5WDtuhTXDVhjWN8Y6jw4mCiNFVwXqupjHd2eyeMqT7hVzwHJKcfjxt5MfdCoR4JAKyi8YpfqVMoHi81yCysr",
  "key35": "55nsrw25XmReVRNnXPg1qGjWC4t9rXUqVGmbSxpxK4pZrKV7TgGNSNviusSCRpJbGjYnR6tfRyx1eT332oCK1cGX",
  "key36": "3aSCNj4bAkRnS4c1LQnjWBLKmXzEZGhLfNhD89m5az21A7ptAmrvSNCoCHwQ2RvVb5yKJyqTuZftXMMF8QTG5ijF"
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
