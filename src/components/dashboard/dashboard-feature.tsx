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
    "2UiwMX8udZhTwUrePLSnALdqhhVKjPwMEoL8Qx9sqFz5g8upkutM446gkLs6MmAKxASdSWZgLnm1WzGFfzJWn9bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBJggD1Y94K4VpRaQNuPra77YZELhCUaS82FS9fmHhjRw5EYk6B8s4fgdbwSwMv21EAb8CwwkYUJndgYt6niSUk",
  "key1": "4DZzDKe6s7ehBsEg5Kbib7cU5kyqCjs395qwTaTvYDjENaDK29es2XrZjEXDU73P9DjV52ZNH9mbrwvjPKk5tVhE",
  "key2": "66DdN8AVpmaT3WzMBMgcMizTfdvR7A3ySKA6PNhfbBWpZTf6sdhPBCxPHZw1j5xM413eDdgq3ppPZuY1aXECvceo",
  "key3": "5QDJki14ERViuU9paqm2Kka7Ec8orW7CcKaDX48MHDD5LcaAKYqugFUFmrFMRLLqcFiTbAKsduZWvkxPnZmTRsRY",
  "key4": "39x8J4nid9Kojf8Lt8CNJih7N5CkKL6MoEDdYSCUc1kXRcSzyZ5iMAzgstGFMHNZPn4YwcrjkJiDX4yVuyiwWsw1",
  "key5": "B2hJQa9ZTZ8Vzp78bkHiPLHpYEkPAVvbBYkAWuggWRRWpt2nvfm5emsAKdbCg9y3CQ4tGRXoMXSVJNLapLEytmw",
  "key6": "4wZGghBCfM656irvUx9oAjkMDt55bks2SDTvMBPaWdU42H3e6UR7SEXEVKXP1a6wph5cjUuzRaeszGD3yJGf21D9",
  "key7": "4FhBcTbA9PQmntdJv9AjFNiJdtmY1Ky8DkSm5mUpSLZDkxXdWLpnBx1rLfdpkyHWBHNFEEw6u55Cw6qSmKbQ4cKD",
  "key8": "UAvhyGtLDG8NtTcDVZmvR8q3tULd4epxfsLqSShP4Hph3W4UknWNfC85G2tWmtYwG12soHrrQKxskLedrhCvmeW",
  "key9": "5PUMhpLw72FcHKQvuXq7sf1mUyEM1zr635si7oyYbp6NVKAKpgdRhdxixqPVAFgJBoixZ7dTY7t9rpWz4ugxAHL3",
  "key10": "5rpaMTpB3zS2t4Dmr7eDzTozwg78arfDNJgEBoycmTbtdwYY42TxCjLV97Us4taXMMBpVtxZW1KrQ41pbmgmnC6r",
  "key11": "47SAFS8okdr8sbExQ97NvR1LRxJ4SVnH7uwseKJXHLDdwhU1rD7zdPdnVxgoJxsCAcptNePk7HTAn2GLFWjL2Dcc",
  "key12": "PqycwnZva83Yxj6Gi7WMpzTuYNcek1DzcEexjZryrzcqbr4TUUcz4HwhVXnMJj2Po2jPGjwGnPkVhcEeJAJBjyt",
  "key13": "4wWpPpAhcKf1XJ7YFy3JaYVYPsjGz1PmEhCE8zy8DCBN9Z85wZiserEwdX4BAgpQQk2Z619MVMJvFkyCxqgkSCqe",
  "key14": "2dwob5Mh2dWo9v9rmT8CYD7BW79DBkqaF75F2RZAPJroacUbRtXjFQtDgCk1ND73uRwuUB6Vquc5FfXSJykQ79Ga",
  "key15": "2tL6VvaTLiTsPuEYwy453rJGFSJR2aj7XTrGdCAPCkbZFBPC7rDjwrhegtYWio2SqvwpcQAQoArjFKMrAfwBTbny",
  "key16": "5QYGPyZTWJ2nreTPS5Lky1xE7iyzqihxmJfaMexm9W8nkHW2LP6pZuvLQkZdMmkkkTfh6Cs5R2na1FfXrHHtms1n",
  "key17": "2WoV5Z5tFUJeNn6ASXNqXkECPBQ5mdWxiy7Zs7nvo4pebYkjTwGk6Z3XkcQ3p4jwzGGzeV7bihXQEtqbu4H9hj9T",
  "key18": "4ZHQV6sntSHynMG1cMNDSpm797EuqV1cyRwCD4Jof6ih8RDQjWMwoqmtQKW3ji8i4H1La8KExk1CrVki4YCvmfi5",
  "key19": "22GyLfBNVF5fn3tbsN5yt2GtbcgfzQTeivH6bEywmpD4qEGYEyP8MrLfZsqggWbnNrViPVCT7kdRe5vk2ERBM1a1",
  "key20": "526Jxjw6AZuQk3rUgDdfDrAKyroYQsbEEcEXfh73hNquz9HYVq5fsVdzeiLfNY9185nNcYKh8zZL2NcxHFre6Ugp",
  "key21": "4fYYRdDWL24pfMAZq4tAz7o7EnJkQNERTnMGpjEmZt3iBGtADDYC4utrBnsNrQX9VqZU5AhuQvBssrZDQ2seUDuv",
  "key22": "4FnyBPyKHaqtMdnryHjhhohF9WD7LbhS7rSVFiJMJExwpfppzRnW8kFEU8KNXgUQe8ZpGioh7wEgsEw7ztUjRC6R",
  "key23": "3jFRnzHuTkNaK8Xxv6igsCHqP1WDts3visHAX5bTPpzeUm24HdNowXNEKgF3AANbhqDcgCKDZZFaavjCn29iGM7V",
  "key24": "3WCYc4pp7w54Vyt7R9JwkrEXTMtWmBf67HEguBXyNTdMLFXbkuc2gDTympEKaWnidp6ZUvnsEUczerbE1GcFAbnV",
  "key25": "3PdDnK5nmgc9Bic3kjoYQ86xd68uL3DnLYegCm6cXUUCYM6wLJ1LjMnmZRqkgwSaeLj1Mmyeofi2hNhjbmk3K47E",
  "key26": "27HdRSjcYUWVZ5YAwjx1qNtpzx94iYnMwwNafrLhjDn9u8AunoE2CxnDhPHdcZLuvbFpcPeWA9gzniNsAEDNM4Fj",
  "key27": "jHKC6uicw4fqJByt7v9GodT6kbqo1qVeo2SuRTWHRNExob8992TbpYan445KkGGKtZkR5yYaBaNVm2DkBtgxsKx",
  "key28": "4t5RcixTMpR1uSquDhs9pzxhiGfBx1jxPS6dZoaYiygSquB2X7ZhQaD1T94Hk1brNnbzBWdoEV8FGur7VcXbA4FF",
  "key29": "5q8eN18D1mGTzmwi9Q8PhrWQj7fLiVpJjzxmu8rfs7Ljwz8i1as6JvNoqqTHTHTPJwiyYjdzoeUhybZiq6fxb72",
  "key30": "3PsJEK7wy8o9iyocCSWPVTJLJwKRMHX7VCeU4ztQiJiAsEDhmbtsKiXtKB3GhvqiU7PSSaUn4fmXZkVqNejAj2oF",
  "key31": "5CRt1x2siHfzDkAoAXwnvNNzfYVaQc4rYTx5dt8g5u1biJ1uiBxFRJQMibo7xHPxfdA9xHDJHFrP3Xk75YP8uV3C",
  "key32": "3rDft2MkPRyPDgxcSoG5PLTHSiNGyRFmJbmJfLwueBDJ5vb6HVoTjbUQkZ2bEcKPtBUv9KUKNVCgcFWssbtJ6DUH",
  "key33": "2uPjHdwwhgUq2AoDa92jCdTdtiGQwxkyTMhEBJBDqwvcuAdEC952dkwii515ynXrX6Ecy3spLTZncgmWT9SC4eM6",
  "key34": "633rXqRMRRje5QBrUnkB3tzxBiGCJ9qs32ZjnQJP48LtuerajFnj6mjtYGEXDoUKHTn8pdvugPzsbttJwibuZMmW",
  "key35": "2bM7DeWnR9Lmy3CncoHwr8YRKDTe7C7VFq5WkaJ64Jhgmj2tuGGsuZSo1F9Xhe8ojLAwGZqjUibuMcob1bjqizo1",
  "key36": "3uZbL9DVeJYqvUadEBFB8WK7yJC95q9HCk7HYtiLxWiScv6hgdHChmsRqorji95Sp9CcMLxE1psWM6aUje48czYr",
  "key37": "4quihizzZjsz7uAc2YP9SB7kYtRbT1fHPWTG6uvzVMpy8aG8qn29iSRtBzLN86f9rLTVMx4Sm9XQJyjLxpaZng97"
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
