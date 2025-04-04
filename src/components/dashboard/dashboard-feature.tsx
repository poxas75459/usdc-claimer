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
    "pdqzuAQDk6vrmGpZGcNZDpNJ1pxaqUq7gi7kqbqgjGERS9v6ZyKXmaWj6y2Qv8oo8HGmN5ymsS48g9UBognBEDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tJZyBeiq4gMhCMNCxF5PesJ197YcrUVXCoNvYysN6orysGWkx4vLQdkyd1Rgef6do8YrBDZLCy6Lqqinc4Ca48b",
  "key1": "2gvsRm6YNDdyMQTttbCHf2t2JUuDEYUd2vmnNToaquUNgYTRaUzFodVhL2kTiLB4fe5umMbswjJ5LmTjfVoepscz",
  "key2": "37xnw981VgsyLK8nysFgn1LubEJBXcsTN1EnjJdVoSy7wt9GwJpD2K2G2X23A1SBHJ7Pr9jPEqhMZCMLVwkhwvbD",
  "key3": "6669SKSB5bdBoqKV3D1dFiLaVWK1Bnnmhsb9u6nwPVqKjGV2FdFw9FGaMFtymtXDhFVQuiH2MZ3U9W7RuJ53Xtyd",
  "key4": "2VAZaXSdvUxbWkvigs66NsSDiSsEGCU4beDvhqN3WuvpK1C8xiJUs2YYUrugkofPVPcCtAZ1GZfqf4P1Nd3SRTyN",
  "key5": "pn6m5BTYqdDiabhmAFY8oVmk3n8LSGbJBJGy8uQ4NTNZ2dKSf7Z4hoJDaVoYntUMbJPBsvjhBVJmRbbA1xtkzvw",
  "key6": "2YNNrrT3wnsVa4tTZxwWdRmksuaXfm9BpkC9vk4oaGTadVY5uLza147R8yDKFH7FYzD4ZXam6bH5TNxvXwrVbCbv",
  "key7": "5ntCwmH2WKxRSrQCQVxiTTiRpw7wgGtYrSKuBQY6KBob7FuUdB5pLvfZLAviL7u5oi4CwSncAWn4yAEb7tfPwy22",
  "key8": "f9fL1zf16JbWNin7BfXuWA917Eqo2kCd1RaduJfhzN6GHASFxom4Zrb5rdSTj4DpMkwbLUvbTWY9vj4edzdUDmA",
  "key9": "3EbHgWk5k68VUyApP5nUbaxvvn2XpRWT5iFvvc2SHQYv6AnpqzNZ4hwHXEh4YLnhk3DgYNRxWEaP3rzcGANsdPH7",
  "key10": "2xdXDpDwMaUzjwM5tg6LKiY6nes98RhqXUZxpFVhkiq6KD7M95rmVQq388mM8uEd2Vfw8uBSyNqy8Wd4jX94neaB",
  "key11": "5kVsX8eMpiMCJpp5X5viFKx1Ze8KVPgM6Bi2JrFcvE5qhQMdMqDFDwxBBw27vv1hEf8eKRGczsdU48m7QmxupsfB",
  "key12": "4JPjbwFRst3LJ1nVnJSstzMZSj17Uid1tZP4pRaNu32wXF1hmA8RCZgnhfwtUw6NtLgNm9gaY4A2SjzmZm5uthWg",
  "key13": "38SmdKLuSyieun79nPjcdqH7AqzvgbKwtYqgV5Mtkxf1W4WtRE1VoSjiqTZMnEkUAvedPjgSjjwUAemQxGqsWLz2",
  "key14": "5zjFYqLj3a8YsmAApWLPUoTviNBkPm24FYApEtmf8nncwhsSYR4hDMGxBh9PrbTiA8FCWoPpyA8KhSKwaXUjgk1p",
  "key15": "5r9jvYeeWzCusFHiCwLFQMEpJW8DJ3z5E55teXPJgMDys8DZ8Df4guhqyWQuVrtgZb55eBMrFuDWBicB2uHzVEYj",
  "key16": "q6cTatNtwD857z7FSo2MnBRLX7KTCJQyBmVspVRCaH68LKyyRBsfaUxjRajoNAKy7FVt4LnEB97VXx6RmVyKFwi",
  "key17": "2aC1kYsNc6YeAPcp9LhQs7mnRXdgN99rKdBz4h3oeHessvqXuUUNfvJPe9SS5zPd3kLFy9QNo2fveUjUG9hTE8kj",
  "key18": "3jKvDsgg2sNhNZMqKqZuSsHR1FBWARo17DJgPq8xmQKJyxsjUyvJux81BffjyXbZXK9FHTrmSUzJSkF4DPiij3Nf",
  "key19": "2wzz6NGnsBmfPMqVo5Dbzx3UQKB2dXGZgVVWcewk2YnnPPU7jbGeaHrKUJAxGQNATeuR5Uac9oYjbsDk3DECHPjg",
  "key20": "N1AwsbsBWdJF1ikw6yjDX1dPUsmXnFEbAtCqST11J3LUWDEXzVE2LQKSR8obiy5x6y1KoZLR69oUUWf7Cz5Y4eD",
  "key21": "33PtEHkdX1EuncbPsQd2eTDyNKEZLcRQQnp9oh6ZxweeiXq7VmiJvns5LNX9X4UYXwaQVFjMdM4QgDZjzJyHxXMr",
  "key22": "62cgVjQDtqHfMVAA6V61taLukjs5rBsXQP9jnkFUQQs86Gk1VUQtfVHRQ5e3kvePzkHEfAdf25hEvH4NPbqHK5o4",
  "key23": "hYF7kNsaMma3qXdFVhZNLczgsxtMBUdjRLPxh9NQDuRYfi59axiihDKERnKcSm1rbY3vLzoCRUghgRcBxMae24C",
  "key24": "PY6gTe4Uzt38GhCwy9fbX7yNgXaD7MYcvhMq7XgW6zcsLNRHbt82KdTj4VMnf3QEE3pw1kkFfgEF3p4PJcBtq3P",
  "key25": "sdsYDdVchQj3No82HYikux4MZ2SwKSachdqfmA5gVRbZ2HcUYdbH6GBtZHYKbd3RgpwPgS3d4uaPgpF1WhFbtyU",
  "key26": "3wTQR51FB1kFGSHPkvX6ZZX9rFLSwX7oZUxNxLUsEayZk4vzDQGgXWnUU2HDd3LaKMzz9qxyTLVf2LGmBxLSq3ey",
  "key27": "3U86BDDDZCCwrUKQXyU8HA1u3NckC3LdiWTGeVhZDmoRpauKiC31SQHTdhKdy2Eh79798239z9cGAQsRpF6tG94T",
  "key28": "5bzfTubkJS9ttdKy5HeYRuFS1hzzhhRuzWcZBmAPFZ9SXZRWvskuqWddiDxbQZ7JDKCGg2MRHr1Vka3K4t4Pe4YN",
  "key29": "jmk5UMCT2sfmR4NSYVVwcYH8CA6T4c9ZAEPruosbVkmUDvTumBdxun6qbX1Nf4mQrV1VnkWmeT1JL92tSpqmyHq",
  "key30": "3faD9svdcc6FBkRVjiau8at9AG3jukVVaDDH8UYvc6Wq8pKsJfBJvnvgun8Nvjac5UcUZc6vff1PRr6VMn5vc2Vz",
  "key31": "4hKqo2Uo3DiKZb2w5NwNvZV5rMwVbRWqiB1DbkpkC5vdwTxTD4ifGZaPjarwTW9VnkBXfu6RY6aFgtib2e45weZx",
  "key32": "5Aptcog3o9A4oqm8sTvZSrHdRrh7iozPr5uotcrp4pSEfNfXfMK5csaHxGooGWYm5mY7oX8JxiS9u2CTMZt44i6a",
  "key33": "5cqGBKHpLRmrnwKLJPAp3NmTTX7W1CT4oBvbdJEShQWawAX87VcoKFkPqA9cG9aZWCMrBYHcWvEPSufjdxrbstsv",
  "key34": "2jh5EC6Cnb4du4UzDwuodiWYfmTKFozZszmbKZ22syZDwWUFWUvN1E78GYoCaw3ntAa6wCSTX2G5pPJ52Xboap7",
  "key35": "58bGRXD4v7XCNAHVQec2TkQ394ZcAw6PtfM6dbuFwgwsvK683q5RmdukEGv2SYuQJZ5EAEBnzbd9J9gfA8TgHEuM",
  "key36": "58LiZrWaDSJwGxgqa1SP77uMaTnsnTTxTEMXQAuRPDS3W2acxtKo2ijP42Ak2hLVLhGb65Mbb3iXkyRJdkKhmExX",
  "key37": "3WTGyEW85vYEJ8sEBSeT7aLNeLD7VmbmWC3yRHfARDbPwUqLfFWAooUfCFyVnk19Q7cBG4UMCi1ShYBw5LJJBTKB",
  "key38": "2Li6XquQNDAdpJDAPZAMjmM51CYUikgFcQQkuz2NEXBDP1ouYm4fz7LBXvv46guGfMnXJikH8k1a8jyJbcxFCecZ",
  "key39": "Vq7EmkqhEp3WYmULkYG2Fy8D4TtAE6Y5YcsSwx1uqmZpZYR74zsMVNtvQL2K4555rMf8VxC2hbTtNmvf4E5SPPt",
  "key40": "3aUJVz5sXUiEm7v3moimMcq2XnwsGmGyyk7z8TJrs11WZnksn5SKj2X9ohjqmdS8UmoEgjG4sv5UQvs4QgP7BCZh",
  "key41": "zaZEnGLD5iirsR1qr9w2SzkTwJuto7wuxDt6R3pPidKfgriBsXB2rBELWP1SrrGV8WdU1gRWC8B2HuoxSBkZpfL",
  "key42": "3xedQeS5io7mtw7VZETgztMNrtmKAU15DNSinbgnWgtGRq5HZFyeQVQjLCgC2TBdLBDDfsEka6FU3FR4DX39TWPa",
  "key43": "2csTWbQQE27UKsc1Q1SHxuvWv7Fx4WAcBnLJjetPt5CjyssXUqhJWvDtXYkh9z3K6rsmRLp6zqjL2dCYU9JM116m",
  "key44": "mvMGX6vUPkK7fPGrnkbKwTqKTeUXySUm3PHuaz2fpfFR92qF5YBK8bVQnba1T7ZhtRU8PEsxRUbkSqS7tAwTFcG",
  "key45": "5WcJH4rnuGWY964VJq1aQbHKMo4Ungp764V6FVvQr9x1S3qKZTRLfjU2XiCqgk5QhMnXAnnAfSEd5vDFjXMZZRSG",
  "key46": "3XCujmxBDWrzDKZRFR8Xe1xJn4UtFTRKbbhnzpCkSuKTfsoCMTYeBv82DyCoxWWUBHNnbps7XVAYypiDdYj3mHHQ",
  "key47": "T6m3CT3jPyMhab7PHZ56TW3zy2VKRPj4Khm1MRRVgoLMLevkqYrTKYBKgQqaSqt8jJR1ZC87qNddCLeDXdLfjkA",
  "key48": "3yg1uw2qtyA5ZrcFuAyaceiANjSFDEkPGp3EiQ6WvgLLgN7fY83tMbDNgdnF59Q9Mq766UhpdRdPE7nsb1fXPKb7"
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
