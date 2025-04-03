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
    "58sPkNvFahURoWo9RHF7yV9sypeTddywA1Wua5LvAKYnqmUTWhzhjjBTx2BRdDpndPSLtBfpNpz2FSsQ4g5HYYhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7krwwFTMhuv5Hhywrd2ZeFgdRqjuABTiWKV7auAQj3v3nJRhRHHJv8rjkbQf436GVM4m3mfzafDzN1ZxsYXWeh",
  "key1": "3fwmtcc9kSEbkMHTJFjesmnSVqXFN7BhBtL4fFp5V2bJVYfKLBejH8T3n8tZegwkHsZvuxkmFNtLZXxcwPD7rtye",
  "key2": "4NLAEdT1eMTXLxnZzACQZog1SNtJAKzPYANu7i5BbxmjxxPTzTXWYxwcwKBQHs3vJ4Uekf9L8eYGVBPXdgMfKMek",
  "key3": "3DYYqeMqeeJYCehExKEqxBgB4eYxyjfUL8xPPeQLgaNEHqE8v6yF3EdtzVVtoviaJmdtRgNAgau5Pr2wpMWwok9y",
  "key4": "5bayeDYNRWC82LVhzAtGyjmXFvsdY7dcWCJ18viehn1u61NajMz73qCo7pqxiK1WMBACQ8K8bE3vLSM6UNTZwAaG",
  "key5": "4CKC9T6117gpvjU1XS7qcboMPuN5e5GzervrgXUVa5dvkJdV9X8fdY4d5EqNmkW8kCNg4rEBYLDCLYEBk1vai4XE",
  "key6": "4iKJvMjxduu9sSUfufbkHgK7EvF57PDTaK5uDsAd8Kt5MBxDnEuvcP6o7d4UCvUhH3Vx8WYKbFtnb1CTVbkpE2Hr",
  "key7": "4WnMPEZDE5UeGua83GHUGRqoDNjynzkpyT9nPwJXhj2X7AZDGLtUSzSxQeSPCkUztYzHMp4CGnF6WA1fGwvVxs6L",
  "key8": "WRobRESZ5cdAThkjBeSiAivStcUFAHpZVKx7RdYiBMpsizfnDRDxuMVBz7QYY3QdmxFAjzDbXYLoPETeV4ZAzF9",
  "key9": "tHKgbLK3xzBZPz66NXTpez8ot7Prz2yX9UcR716FDc2vC4ubfxMc1hrU7CvF9w17nhgWnXkYFUPePHYueJdEbgC",
  "key10": "2iLVMjrZhkBMDwMS9jibKaDB7SuovsCGW2R9BpLo89V55EArYQXp1Yx9UwBJzyYy56izZcUPZ7K55q1TkyZbHDGo",
  "key11": "yWXk1JRdhhj8WSbX6iEarY6eAMxFEncxFqZxLLnMu7wAyCDED8KQcBXbJ4g6ueKoa2jfoDSKwpBpMAoWH4uheU6",
  "key12": "2bpBEKf9MUkDFFMU1TvCDgjrz3VsAZrv35zEJweLMk8Lh8VJ8vqqGJpXPgHqZrScc5sJJsQQVcVcm8UbM91MwLKT",
  "key13": "34mD3PrBuHAXJ4XiiTDKEKGUKSCMia7Rak2xRcsqVHmaPaghJaguduhefYqG5TmigsBCmaA1o3V4qpyDo4Esf4T8",
  "key14": "3ZJLbufuYU5rc39w4TjaRxUwzvHSncynZHKfBffjfCRHLo3Ra4UcAhArZFZyq5Tjf5dmrE1wA9qzhvq2xveDY965",
  "key15": "3jy1ZbEEt936SYVv3Uvdety36HXSJZqoVmJvNhMFDGcWPPBcbL5JtsUESjfz1w9Bwb5E3eYXjVD9bkkDkBMJq5m9",
  "key16": "2W4gJFS41YwcWGVR27sgcJCvTdPLkvLSzrZCBzZNNTFx9yLzgeaGdxV8kbsomQxBP348LE2PtiFXQQBh4gpti8HR",
  "key17": "5axY7MAeYSHocWTW8d5SY1FxFPQCxuXKCTanjCb9NmrLeYFQFSUMp8rsEnAnCuAExUgTpKvGy1RH2QDywWhyGSA",
  "key18": "5jUhVyTYkozFPrTXHmfmUW64Tn7uhV3uEZ2Xbt67nyVfgH6z2dyTmb2RL6AfkZoV4rW429ZqoNx9GdAsLmwgPnXS",
  "key19": "bANiNkMhYXYvtSqQbiV1fRKNeXtkA25h8jK7WqjutfaJVkBdSY4u48UbR1zJdmVZ5ujFBQ1Yr68Xn7tgsM6zNV3",
  "key20": "3TrUoLEHgGtNzrNoXkMumR7Ltebjb8A4TRaRvZH5HzJf6U98bSSRHsQdizZC1LjLZzPsDGcM8Voh9xX5ALPDvJPd",
  "key21": "EPLBhSpa1UyeGnydo8MzcTuwjaCN9PFUty4HFtGJ1BxEf4kbakbpkCT8g1oJqxV2rdXHmryFZ8NE2obeYTmjDQd",
  "key22": "393vF3DrsfEJaABRLSUFxKSdsZmeaQfVhJmAkjAar1LAjjy9nbzynXRSV33bwVJCqxqBs4H2oaR8tpUsSC1jLrX6",
  "key23": "5kWJSGdKHSi6XaNoaJanJuT1wKAm6dXb9dp6ykoWCf2QaQwN9wszwjivDhN56i9ouLomg7QMjVAuSQN8Jr7CSkKG",
  "key24": "38pQEg8PygENroMtPWMtLQ8MtPRvkikrRQsDtzi1Kc13jiLfRyAuzu93Kcp8VNPS57tR5pHHXynFWwEPo7qEwTHM",
  "key25": "3PGGjfcH6ZFcMRFio1ihF1M2hpcR3kAE3qsD6jNdKCSUqQE6qeMxquLQcGsNdZ4jt4qfvpAkmXEYWZ1vpzwAMoFa",
  "key26": "3wLxnRd7NJ9GNFEb3zsBFLzTbYAmnGgV4r1LcxPbBrQqWLoNRX3n1DR8DtjfQZqVHbTHqz3oJZbRDshpEmRS92Eb",
  "key27": "4WfFNHdyQeDtYxBuDpXkMBQHJptCg8ZbY6RrTRPn4hQsAL2nj25pXgeoEMBQTHKySSuEcQQ2yc9NaT3oSauHNckq",
  "key28": "2WXFQVuT31prGCon1Y7avQFaNzFvUoPSqjPgQshXEdymQQEVCHsofMEhAQcJGr6BjK3amfqPi6261cuFHXLN9Cdd",
  "key29": "3yj5Z3n7UxM6FF8GPp6Xv3AHyKFXQR7offbRZMGaKfNbFLznfrQPXw7Tdo53NxMMt7PmsWFNPSQKUxJqKbiv1aSD",
  "key30": "4S5oGmpuBWurTrNrZX1gN2KWFr38e9vrnbGS7oLJ2rG6uhv81qUSxjRipmwNU1sioeNohgVXUSwheTsA8UTPDebz"
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
