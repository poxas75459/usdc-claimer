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
    "S76LWnsMYnhpZYpR7wUKmrToceYJjnpNaoXbWrM6uP1ofqvWhRZU4wskDBhTNYgWeYKFn2RnGtSQjcnrGmxpCtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YuQs8ZZraeG3Gfd1XcZfbv1EKCJuFu2keCktpT4goNSWQQ6ERcHnDVXnKAaBBcqXhV8jPz2VWRX3qTiZvp2rvZn",
  "key1": "p8XisVuCEKt8fqRX7q3jWpCk4u7PmcTanRq7M3U2ovCiKvo7Uw6AExuV1SnTVQvD5dDCewyWtrE27ENEfkzJzXu",
  "key2": "3tQsiCiM5Sz19ZTMJeAMcpktbkxfoHhZifjCtCt99Dbj395Twrk5XHoqQ8m3aTVvWvRmU7QV2y6GaY2QsEVskf8a",
  "key3": "4QDUVS9ZueaxVXJsYbsi8PavYhDr57bPSREWheDNwm5YPvLM5eQ2c86wBC4RodMTqi7xVzcCTbWzNqKHGsVzmfTR",
  "key4": "3K4uWEFVuU3SzwMEosKnJodPLwTFey3egRFLNTL8J5HYCoaZycBypF4E8siFLtH2DJS8L9Y1F6jPX9FzNkPqQZRc",
  "key5": "3KZXfx1oGQ28Wqw6JzYZUfC284nXhKBnnb8h1rUsXGGrDJFcXrFecQuMzhuSoVa71rrrMJj21XRoSSRZ5ek2gScT",
  "key6": "3FXigHqbqA1im3s4pRbx4qEa9pPr77M3QhkA5XMDAkxiexengJwR8h9UVw4RcdXDW7JEyudUkSzh53usb1J5ERfk",
  "key7": "5P8djnKtozVvAMCc6Y2Cfu1s8kwj6ks9kiFurDrA19nxbuAFpe4yfNrfi6H5Sf6cW7fzK7L3SgB36wQMKDbXyAVx",
  "key8": "3FZNa7DPxxkKsrc2SRfkavkMuWsQQr4Ujq1wfFq2ooFfqf4yWVVJPbpB3iP2zfM1jXmUZvFAkowLjvobbpRcPZy9",
  "key9": "3d19Qap8Hhtuxty9svRchDryZcZurSqLikVL6gzGTfVrLKfuHiN8LYB92yrxsiSQmHNLgxhkW1fSG9YbG5W5xRdT",
  "key10": "48evmfskeZaN9pJHd5j8jk5GzsoR9K6QMbTdBJksJTX3ShLri1kDztqpk9B3CHzw8TjqaLHShSa9vx7CQmTcVRts",
  "key11": "39Pr5PtCf5wJwxb3LUGRN8rCae1SCTwiNPnmF65zAGyP5RBipygTyNQzLiZAjchfbsro9n8is5o1bWwhVByizCoV",
  "key12": "5GpV9i9HoaW8T8eMoHsEqH9NnHDhvA1zJAyspWJLJAFKdxv4MKoSUAyHzXiU3mpWYcHaFVT5uVxid3SgArEhAN5K",
  "key13": "2gASZG4fofv49xhDe9aiwZttodh8f9MJbSAu1WoWpWCZc7K8aGh2QL7FQrj3reLvF7GEzfj6exNFSUnbUhYGYvUe",
  "key14": "4KMkWj3ZcLNcG5Eswa6RqHRLT1tHUPQzAfeiSVhqLvicaSaKvQxsTRaHbKDZqiGbRfMXbRtTGJypbph68Skg1NnE",
  "key15": "5mpRSy9t5PSjzayQxnswi81ovo2u1To8y7LzVXaXrLn9xijgkbsJWrFsTd3ZLqzPZncrekShjx41VrvWdzJ31MgG",
  "key16": "3tM8Rx4h1iHqnByqderFMxEX2iJZmjkF9aKSsymnc4Ejo3rPmTkzbsQxKqPm9UjFE6jfQ1x4TaYRuabnXh8UxDvW",
  "key17": "4YEaRdHKzDFDZbwkPq3cjXmXXGLDufJkqWdy7R7Rjb9P3jRjkmgbnE6LWRiTBXo1YrzAmDYtJ1SwQiTyC2odWiHM",
  "key18": "CAMooat5XBw7TsdiJ3QdGvXSVmvxfJTC2zpG8FDUCaVyAoFR1xeESmvrYu6JAAcLmA4MBJyDgPg62KKkyb49iLo",
  "key19": "58JpZ13YbYZZQjaEYqyhKQBkumQRh2Rffx4MJ9dzjDgygLDVYWbygq45ipRwcJN3mJYN1QZF6RRaQMSVH8xngs76",
  "key20": "4cF1K4d1s6oosdtp2PfTnBZzR2Jg9p9cEAmMy7Exim6hENnCvoivVQpafGrnV2io6GBbuDEPWU9jVPcuy6Z9g3eX",
  "key21": "yNMadNpprrApxxbKT6RLRQpoA5ro8rvF3mKFjvedWrVQLAU6LQS74Mfnojb3UdUJ3BEE1TKuv1wBzrHdndgunzk",
  "key22": "5uDGY7387bEWeEQ79kj66rny62J4FWuh8imfbVAcsxbU7FFd3cAaPwHwSE38bzQB1uW2J8RvWfK4wBdFcFYuFNt3",
  "key23": "4n9V7yjV2KPG4jc3DnXqGoRQyXkEhfFSzDaVydeeexY2BDj6S8yL7n8bZXpHdxYYXq4c2CG3Ky4BGMPE62phcAGh",
  "key24": "2UAY4hMi26YzMQG8BY54Ex7uwSxhD7bpHbgp4sagf5cHmgfEy5Tu7PsriJhjBrppmp5mdoHqfgbeEPVywgAXHV6c",
  "key25": "kRETh7Fv1qWFGvYC4ydUsUB2e5dhdqm6k42L2pChLTMwDv68pmmdDpLZ7mBkTjX4i3xiJvBExr1zfjMGocDkJJE",
  "key26": "3Ck8cdyY7wRgvLzSrEgRPvKzRjmxYmbcHWXqu8A54Grh8mYCQFAon4iM8sQMmw2Ftu67KDZsUeKwNHFMeU8Uep8P",
  "key27": "J4L3Xu1LkvKWrqKNzUV24iwTwK642ewvQniy51DojQkFtxcKxtZ25QKKbmJRUAqDu7jiYQSJJueijYKoQZ1xMnK",
  "key28": "3Hpe7RJa5iBCVs1bPZjqxiHkmZnypfzNB2M1CGpZmeb2Y79S2ahiGKQdDdtMbRAM4kHN5RR7XVfX7Dedt4X93s6Y",
  "key29": "49JtKDKVrHp1jZk13FDnMjvELJEAgMSBZ64bogcNaKkJ5EheDL6Fc14ACKVSsWHwkW6rsheXsWZWTa7tbJCdpNDc",
  "key30": "5Te1pHkmbZ79C8xDvJ5zSNsEEmqEnH6NcF8FX9W6GgK1VKXUje4TpYdTRuGzyFYLfyhxNMwkmHdLJZWSvPg6b7c8",
  "key31": "5bvwhamrJQu3op4rY24oU9QWzkZzjpf1Tg7jmqakq3LsRpZYYCPusrsHt6HraGP1MHHCQh2LagZbSed97PW862Lt"
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
