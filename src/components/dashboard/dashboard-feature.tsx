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
    "RgsLX8PuDsnX9FWRvwaWJsXaUMEUwbk9tSXyHhdwhnzvqDB6F5348qbPRWppPPsQhwMByPxysUhcFAyFvAQZ5Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxf7Eiy8jo7TERVmEPKAuUuRuJ9WzpZguN5UZ2biid3Tc2XGCM3q5b9Vwz61tLXAapbowcEg3PyBZZ9jx2yVbG9",
  "key1": "4Pp566SfYyJhmYKHMXHFHp1BDpHcVvY8TyADBJzozgMmYL7bzNKCagrYGBGLjp7bvXNW5k1fLE5pfhCxCSaTAAXm",
  "key2": "3SCoa1AXUffmiVNP4tpJnsxA4W6YtP1KGwcnFeXnfWZ9wPbF6jss2QLaNhSLRk29M8XXfVQubnTtHdYKtzzZdNFE",
  "key3": "5VkgL7Rd46zyQLxrkWAyRG5uaaMu1dNenfVRSfDEPKpdxAkpMpbkzfUCVBdpehf4huQQhga5dtUE1NdUpGw9xguq",
  "key4": "51NbsoUU1iT1UK7meyXZXjX2WSFzXL62VfWTNcjVhoJGkNaK5L2vDTvCokWjDZtc5vxGaVDHQEFTDfnhytUDNRv",
  "key5": "3KopuAFZiJPLnRd5pcsZmHJ2LTGqdnhZzWoUzYKbnz4Kj3qLn7bcprYQ89JpWYorLYeWUxG7u4L3fQpUF7wJTK8Z",
  "key6": "3Gt4rKf4C1Fk4XAaLQrUww4HudCxGAFTGUJskyycmFBfK9zrvBMQ5P5ARbSwGj5PpwDzW6HVdDYmK8Y8GG2Mm4ua",
  "key7": "4vHC8v32RPhZnyhsAnNmG8Rc7JrZnUJmhxWNKozvc6nRjr8nyrLN5mwoFLAd7B8z6y3oUeBgCjp9YoMLtaGgMV9H",
  "key8": "5jJgkS9iuCtw3C8KrjKXYqs2r8NsSkd4BzUYzUtHkaS1LfkGBSVYBHbEKsK3ZTtPctjovzsax4et1XRZvcDE6zir",
  "key9": "coRTHXYUpCELJWvtjKH5uoNJYUQH6Dc6uceGvUftpqRRLDHiu5xouF7WJYWSGzCrutRbhTXcUeC9WyJoeoVjEDt",
  "key10": "4wQDxzy9ghWHgD7iXSUrL5WJ4cJhyKoeannHEavnKBfUrDL6Vptw8jMopjcbM18acPXsxUBsWQmV7oQCeWoPgAJb",
  "key11": "5b9HNV7gRgRpWavyodpR3sWFhDEgFg7xWinkvitvDN6gt3e8RWfkhE8wQZhi45DRtZD37s95Psq8evmUvSDbGpSs",
  "key12": "61v9xnRQdULHsh8oTSGNkhXU2ivWUh33k61NHVSRTcQWNBadyXrEyiwakHAhMUT4wymaDzxWEjFA67JHA38Xp84Y",
  "key13": "H1P4ksPy6GySobK5buzzqWxLugRM9qs4PDsJrpFrUargecE1Hg4TKYzM9hKejk9mMuveR64RUSEJnegXBtAqzPn",
  "key14": "dvMUjtPWXwuFqH3wEe7t1ycLNZEDMKHqSVKftadfzwcJEUgsVck4NswaN2pqZsKyPS589axdt17owoMeu1URhWw",
  "key15": "4TYpxx7f9maUuZUdmsYWzvMEnd68EUrJEhmEB2mawaRqFhzDkANDcCnH8ptP44VJ7qXDnhMia4fPCB4Pk87bjcHR",
  "key16": "4fDLcqjzXUrsWJZugeyiTfxpAsSdd6Rv2bNoTrwMgGQvgUHhoamTgNX8scGronTiaaGz2zKjspmJnYqitDnhvUnT",
  "key17": "2ws1Qu67tAZGZobMMLiJjvfEJbPuQogUiuQzvxQ5verohzZbDESQU37CVJNEcVk5nXLGxPgWLF5hq6w7mof4SxJQ",
  "key18": "2fcwpFrvg8XU12vr2thpRSXgTPuFU1UUiuPpfsBNwNus8QsxkvWki4b5xznH2siHuTSa3xvYARQesCDARgLZ2mkr",
  "key19": "5AGCB8gkTXX5mg1AayitfwGSHuvTdA6scj385wFKvDCVfxNA58uXgatjGgXQjuYVa5m3h9L3ZDLLQTsrr3GbmTEh",
  "key20": "xs7eX6Cm13KS3hnAj1z2F9UaugEHSEKLKqgu9m56T3NuBypfZ4KZXX1ZiBzuWT3NUWxzvGQLgvbT7nVMbfQ65rr",
  "key21": "Bj8aZFXq37naAswDgRXoTYUW8D1pUPetXgmV9grEPf7CHhxiocXBvPwyg7Q6DVfxynwa8YEtyPJ4LUPD7HAnpvQ",
  "key22": "4ydGhWMmJyprrkebgrx9mxYqACA9towBTVEJviuwDbiW1kLhed3HPMumWT8pTWgLQjvznCnkcjJADhsPzqcVnK6C",
  "key23": "3hGaTDuUSaATDvbgCeYXkptbviBaQXXcgu9q5Y7MjcKHTetaMWyNQ4hMsqSJkVDBS2vSD9SFNuxiisjJ1iiEPZcn",
  "key24": "2Cbwjs36zBhM2S7UFNBL1jsjPspH7zCv89TbdktCJ33urE9dtxMsrS4iS7Bt8R7GnGk5Cyu3RYj44qMRzHWsgYKV",
  "key25": "39jwA4YfvbRr6Fr8k3i7E6vWdYtKfxwZvpYE2uBc82UdDK7NkmEvnxDPdNAxqvxUU3AVscavyD7U4wKDkGjj6Vee",
  "key26": "g5tq3PFZHFkriM3G5yM2p2SSA6sosiRp69PHiGvdzWRfmsjymP8M94ezAw6U6YnnXb5f66RFpGRrqF53RS33DeL",
  "key27": "2peLNyXVHGdYjJmXjb6b9h8PY3ogj28LJJ8BZKJP9toMqPu5YwnjGqszTGkgDr34ry8jwctRKHsgAEGmNqsFdKGG",
  "key28": "3F4LTCKGVvGEh4ChZAosjL9E4mmCopUQ9Lxb9xfCvwo1e8Y3UhQrxi54Vfr1A5M6RkaZTv8KpYcHYyaDpdfYjy99",
  "key29": "3FNgT4NikKzGjHZytnwxSmKDuFtT6GfgvY3RhzVB6S6fGwS9qffny6b46WfgnXJ9bqTALYfMsMBjskM1dsP1SKRZ",
  "key30": "3SFaCnQi6q6axYnk5QBPqskMQXFdGAJGqZWrziEcVCi93hjse3GgR9M5nyVYdnNyKUTtZBHqrXx7F5DXNajqreBp",
  "key31": "4cBBsehJLSMip5S94cXCP6CAYf4GsNrZCJfBDjGeTmrUdg9r3CCZJEKPpnrCpGu3CNuzGmv9n9B2byoPjiRwa3F1",
  "key32": "2za7LGNzbFyYYSpot5txXM1r5fihC5ATnqaB4mPG5obSypKS5P9qRgmN3cMeQL9t3Y9ZmWM5RXHMk2KSa5u4mvRt"
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
