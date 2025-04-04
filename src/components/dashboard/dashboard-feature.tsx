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
    "51H5ovFRur7vriVCkf7b45pPGcq4PHkCoBZtpncmDBYxVCW9TzMycihRxrHFTY3DfwnZfhKLCL4vTtbS395jrkHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbhqKXfE2eAwvuZWstgV7v2QHBeSquHK6JfZE25uRRn5qQRG6ffyf24c2dcjGE3Wek6NQprtuwcD7GhfPKPpK2x",
  "key1": "pWVBJvtYtML9agyGYeChewVHAPDtrB1z5v1riN2RN6hpEjATMa2UWX6XoxKYto3YsdNoUuBKUuTVCfmvQ4Um2Ec",
  "key2": "4NqGYSjYTyezU19ewnbVu67xAYrLfoXSs6Jpqgq5o9WgcdAHjeoeLvdArjXF9fJZb1NtJwa6wrgZQJjyDDQAuCLM",
  "key3": "3g5e2iYNfPmLF6MrkB1jMoUZfFuPeTSWM5VDrkmJhXCdmg5KLsJJyF9uVvQHPyLLSxAH2ypYYpsoneBEKtavksLj",
  "key4": "TV4RJ7babbmYRBhmHPT8VNfgeohGUCcYobbT5aWh67xBBKRCEhwsGcfthi1PFYiwuvs61EYpcEbHc8whGpYRn1A",
  "key5": "2LinTirTFHo7kgA6RRidEGvtgDSFtiSfhyRMkQP1GBTCFcoECJU3GdY66kaiNa6UDybtBYuWpgcyB8vrgBRBLYio",
  "key6": "5F1tneXmatpu3EPBfncfXfZSnSe78HAudxLqs5DisGWdTLWtT3E9nJ2B7oTXn5JhtDcWrPKuyMcfksDeq1T6YVi7",
  "key7": "5xPbyZvjinLTspWdm9KzE3XWxnkZ4MY9uen98VUbgePPiwh5dnQoRGhKKZSH4LoQJhJbKxAJKw8kgcCdPcDfPmaK",
  "key8": "22AQ2rdHyYjTFKv1TQwPEpXpndz6Y3n5P3AysRQVnd2sAspFA7YMRGmJHT31UD9ToNBUFtDejgbHQYQ8yhkRepMG",
  "key9": "4e4Yxv6jXXYryjqYirHPgin8NE5yeQCp3Hh46dfpTDJ76ZLWsEW5j2durDdnEDXqW8RJ3yY2RQTkwQwrCGjXdmnj",
  "key10": "qYS23TzRwxstBFo8nYU1hi7Mogfzfm8gnE3JPgS3ruC1G41JeVZsEuXVwusZ1P9HUYGtier4eTxuyqTcQmpHFBj",
  "key11": "3ArpFTGoMzSK81E9nfo8786xLRfwQvc8PiavyEEVQQGJrXgTnim2B2Xu3VtdMCgKXjstC9AMjbLrkpSRDqVaJ2D3",
  "key12": "5d1MMQiVh5rk7Jdh5csUACZPAVUUNdWWN2ivtydeXCgtELBkRU1rrZNazyUB5265BiyiKmFNrMsbHuB7sNZ9Xhpm",
  "key13": "48tXJc5gSKxG1tMCGYY8xMcvGNVTX5gNbnejTEdHiJvwdSoyETvGEMpHwYJUcnTg71GjnrH337HRytZto3XhHRNh",
  "key14": "5DQKJRe6EvygJp1VsGfNa4Qx3dX5sMg9N3ezaRc5cWhKog5AJGwV1eckizfVem8K6MmUyx9mSMwCUTD8EEPaxE2n",
  "key15": "wRSAhhNH8mEig1S7ak6mpoM1Cyxsd29fGBPkHwS9TMd5fZwtXCDeU2R5vsZxB2urjN8wVizecX7j7phUmFZSHHX",
  "key16": "4ie6hhx7qjzPhAzvEyAbrrNRabZNWczJJzWztvQPLoA8yJM3GcHsMJHYuLvsCaRZfQpxDKgQz8fzCBnFpo5nDoiV",
  "key17": "z37hsFDALDNvBFrkP9hPWLNANGFGQECzhPn9CMEcNjrfKKc658ouX56eymDVUz2NjMYewZpj1hwmfujSVtCg1ux",
  "key18": "3Ycnyiaa36sveCUAJCZXkkpjppBW8ZpBRCLod3hckuNwLxb8UcHXGqS79h3bu5p2S6DWHcLeZsBTBhPJEk8jKpa2",
  "key19": "4yGsB9Qv3Edfaj7Z7P4rETXaCPns177JQh8EjANWsZPrcPRDiyWFCZiSxpSP6CSjJRzhYiSatjBJSnyeMbqGMdPw",
  "key20": "5TritGp5hTCBiQP54j8QSYBoKPJkNGA5NxPbMFUtn7XDaqnWDu5oeesPVN2EVR9pqMsGko3LwxKS9W4PfZGVEdZW",
  "key21": "DiVdpFYgA4fFue41Lf3McNo1zp8tQjBsFJuumaPW3z8ssw5We9zrL5hrsW7jy3cPmamVup6roThMRG5ZQWFmG58",
  "key22": "3q4A2xwfYCEB9B3hWGzA5bxj1uWtJ9nc5dzhTRjTzLikoHQpRAYdUvebeVUKB25P4YpT6NdN73S2NZfMKz1QUVAq",
  "key23": "4BWCNiVsfayPA9JePxX1pcxvbtjwBMobMZ5qavXMyEyEtFaH9TuWfJaCuSg9ER7pJuk6dcRAddAgAY3dFxcpPCAM",
  "key24": "Y7F75Xo22fz7sH6jYsHzBXC3GTWJguNgNHG3nxnocrthHoGAXhRKpdsNKrBpZfG8sH6Mw1EFRyXGVvU3RZbLfaA",
  "key25": "5EHhb98MzHV3nyCXxXvFsJHzjEv9MoE3M7kVkkVvSbD4geqzT4sTubUXRVEZWVvRy1Wv2H3arC4MHZQoGhKxgghG",
  "key26": "51eU9Xg7UphqtPGpYKK4N5gbcxhUz7e1aR81H1RTqbEGvGh57TNSzCbGnXxiHoAMm5DQrm195f2uxJuVNkwDK5oM",
  "key27": "4HwZGUQunqUi3zArvJm1ZTst7HvWbWiey79P5vZnrQVAwwjhWZbBJFqq2s2GLdZJCnRSnqXYsYjrP4tB6zAnw4Kn",
  "key28": "3a9HU5t4MB9CWJCNWzrJPAtsUy4hggBm4Vren6UV2BLsFLMDr8DeUxvRSCD39SFsMdVW84c7cEc3CioLNuJbgTMB",
  "key29": "55mfZ8sMnVPfwz2MhJ3PkjzGV3T6pUMiBNSXqWVabgZwHvYkzYKhpqt1BwAogUeP8ZK5JFJmMh4d6ijFyh3W5m4H",
  "key30": "4Hx6zGYe5kdTSdCffytvbG8SLcvr8pwUn3H1yLX6nkRWw8XQZRsTiuZXpJHAtfWJLEep5qK1dxU1CLLj5yAnTGiR",
  "key31": "34cFd5Vsv9S2iHZuyYu4B3vhkPh6iXHhzFzVqikZ9xVNC34sfH9Ra27RPxayddQPJS3Q44PZuqHj2ZefZ94fqHpR"
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
