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
    "k3UGmqhD5CNpgDfxKSRHDV8bk7TcgtEhXB2fDqDVZvqCfBVFrEQLBiFHE6FUvre8KCkHXEVcLae9VJSmvt9MVxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Y5pUGJN5RJ2iZ4KhMP7Pz1NT2NQ6FPyqq5zd4No7ymXamefje9nd5QzP6Ddv9YtXzxLBXpR3eH7UAGCdwrSwqo",
  "key1": "3HvUGwBZNkm3A9D8j5ZNYJEJ4jB3eCntciwsjjtH1WZUWLLZ7gRZX88Y4pDYJZPQBQi6sZF1qcG6Jh2pK6PpzsCQ",
  "key2": "sE7eqJQdqJNPQCrmAgrj724a9ygZ8euYHxoTXvMF1zny1hLajzmhxA7kSVfXmDbePs918dPUSirbkdq4f9fSHfC",
  "key3": "zVhqFGCbHpAL2s4vV1Mo5qiUiuTGyxUorestAGnMNxzHpvLtBubAgCFQ5Ns9pRXULDkzRA5EFEQrejJ9LcyExZC",
  "key4": "iYSumLYNSB1pszNeAZTWQ1kYjtV9xzxzb1zMQNxg5LmEfoM8F7RgYEuLMPC6qVwBdG7WtUDBLe3AGo2HswXz9ye",
  "key5": "2fyLgUmRjsqPdqj1Qxw8KKbGmzBaQaX1aVR7NKEobWt3ikM8iVXMNuWjJM7kr4c6Gjg3VNdur1yNiGbb4EmWzekB",
  "key6": "2Xo6sqKcTXjeox8wF5eVXViMNKsDBCSjVcvhcKVDYX2ZUR2KEzLBG2oDDmjo4jcUqgniFaJhKRYZgCqDFDPd1n25",
  "key7": "46J3PuQeXBVcEQqYNrG1vqSLYaqMwFfP3V1dgyk3PRi2sMZsnBWCKUB2Z7wXmeDKdYpGt3uAedNmPtUZtLDJApqK",
  "key8": "5PP9NyGr6FNj4hnrmEDtdJCSUt8QerNbmXGinsXLt33C4TVbmUNxQ3rsMsZzBNtCnRCXvwn6wDs4J7oewfCH7XZd",
  "key9": "5U5xwVzJ9L8GCEbpLTScR1C5udbo7hcamCJVQVzhrNdU93TsGKHsp3sqdqrs7FgSgTfhwxpb1MTTVXjHV3WgPeEf",
  "key10": "GbrPKMgwFWaxLvkBK49xwUeRvs4Brz7J2s1gvtsbhiv3tUbytfWMB4xV3oLNeZWVqQ7GtU8dcH8ma2XKDg44eeM",
  "key11": "USmjWfTgvDPctLrJyVLrZTrZBXR8h5BVsThcBoYCXoDQoM3QFpVwCZoo6QXRz838DpT6TahrWhpEk45fPpz9rEJ",
  "key12": "3fkpxnQZJiatXkvsWHgy332R1AdhYZrzayktSyPU1cRTwdgRvvkGk243Mf7fZXHCYaj9EAkE4X3EDy5xdytVZhU9",
  "key13": "4p65kQgs1MgiBBMZcZaD5f1BLkSDs2dFk2dtAGqohDLNNgTtaUZmY7maBymDNZzRt2QW3JuwyxD56ZsS9DkV3ev9",
  "key14": "wadrhY5j9wrKNt2tXdSAru64GFi3bpgWARvjX5vVWqqx5cTx7FQ5z6z2bs7NcJsyE67hKjAyWubNLYUvCZ3qWp1",
  "key15": "4BGm8tUtn69je8dxP8BuJ7HuQVvegUZ7Nw8nj2NVgXTZP4GL1iJoPTFcbsF1Ku9AtKhKSVTPbW7pvc7bdmUJ6MYx",
  "key16": "5skLfoaQRhst1b8UWDoJWc85JF75RrEQ8hFzPxvFqeMjiDVpgZhit2YE6AmMrtwuHYRBbkno46jGh1hP2qe1JyRQ",
  "key17": "2Rd4J1wMfYsGC9HLPRGFB9E5agzoXyfmD7eHHWKTUfypYH7vu9vwDDt8Cg7BBLQGTAL2aKCQsu2mkC9XJJCGPGcQ",
  "key18": "ewF3cHgKvAzHei6tttkXavQywRJ4W2d7AXpBn2BrM7yhKefQPQEgQZ6sdF3dwpvXXhyHxEpc1PgZwkqMwmQQYvB",
  "key19": "21cFitDtbuujssW4MJzarMszrPWRTyCdP9k6YeMWYJ1bV4MnFEthj7d3ukuhYvCavWGFU3DvRoZNUkj11gLJGoLc",
  "key20": "3RVFJ9TAVHDBmLDo8qEqCF4Jb7PYANrb31bvBwPTfmU4V8Zwt45RwUdxx34F27DQmh2D3JmCVGYPTmcSjHMe5d5",
  "key21": "qGYdZsUejFtEjeKeRYMBNFQT8BSM1WFLgvfym6VyY2ESoz4acq8Q6ZWv3X89mu8v5V3cxdyZpRY6XkJ6qWixfNA",
  "key22": "29AGAhYhiNkydKkZmQJLMeh8NK7cuBme1kJzFBgYRHTGXmU5V522hZ2eu8MSk7EDqkEbmGWLCX4n44Zoc4U36DGm",
  "key23": "4yayo31RtkwnQhf6TMxBRsjYR4yziTHeNvBssJnxvcdYSKEqK6uVAvfQmbbqR7DQk3keAVVZgEi3y4VTT8sNDqCr",
  "key24": "3r6G2NuJkPoQVZaRLE4vbs3CoGfBu9zQ5Aum6U7mrs6oodu4EZWhdmC9FJntskM37VeQVnAYtdUQAQj3xRQZm2MN",
  "key25": "3emgWY7e6nMinVwmLyJfv3Qhs7XFNAUdnTfhBmWknaVrkowvrS3MbusiUSruLnVc61WqpsNTWAKkBTJWb6yYaPHQ",
  "key26": "5pALEh9X9CuWBdeFeq1rz4k7J21paQygH9xc1EPZNxUkj6APWsQ8379ahL2ooW3dLBNN6AJxfDzzFieqNfAPq8Nv",
  "key27": "4wsYi8cKzXDiyezpQjUMweF2xWHD1XEF4g2aRX9yNy3hzcxMBCpQa9Q4CAsiK3APwWKxfb6gnzUreFjGS5VfWtLL",
  "key28": "38U8v9xQcjhSU7eeP8pgR38MmFLHRUM3vUhCeuvWHjvb7haaipULxAfa14r4pj9pGedaGc7BFDvWBSfqHbhbifp",
  "key29": "PUK7PcBHUnVb4DE9DRTk1yfy86wgLGYHaf2bpZ22XediAhufC7Feb4d9EFff3MqbvAaZXSRoERFqujiCkpk1QTm",
  "key30": "5WNsFSEoMnyjrfAm3ueY8P9T25MrmYRiNy5ZwTVHFNSAhy3zptn3aEzUHvTGE6QvfHyag4SbV6r7saKhFZbgdNPF",
  "key31": "gRgwENadgGarNtrHFvmwR15eJegPF9fx1wp2NQeEE9LCaRXAScvxTMYRrTLEgK8SQKRCnimqC1vX26PyQiTTrwN",
  "key32": "5BLhAEguXRGLTgnaf2sNjCvdm3g4uPHW5yogVihavuyx5PHFiGr2f6d6uBNC5f6ksKj91VzeNQcKrM5dF4FyEzFN",
  "key33": "3CiBHs9BaK6XaT3abYfQyE9UFEUCy3JeTFqK1qKEBp2Q7G88e5dPNfMCAP6iBg9E9gVNFVUbJ4Juw3jBe1pzCHgd",
  "key34": "xPaLDwZirJEDF5vNgKxaRx3L3cquf7eReHC8Wo6Q1FxyPLqHjyt1hZkgfMk4F8qrWPeHZTUsjJX7fS9FJFPFu9Y",
  "key35": "4r8vx1NhzmqTvYN9VnNQEoN6M41YtirYHMMnLrvfGQaYv12ixas19rqY3TuoUnsESkjwP3pJKCxU6Vgg8d8YmW7Q",
  "key36": "5osvVMmUtW7CvbdXdCGLVxSkszinki6L7nFfdvTxpzyPi8jmhi82BP6AsF8RwCLefLsf8YUC4CSGoXZLy79xugRs",
  "key37": "5pxrifigZFhyjXkD6g6Vv4Vm6MFbpA28G7o3C8BQRzrY9Fh4xRZR6pTJ72emidpN7RbvkF62TSy13SvdYWZrt6n1",
  "key38": "64TCmmPmMLyteqjEwAQ9JZdnicfqtzgV5swasTjRSE1KYab6GAb6FL7351opgp5kwh89RhmRyMCEAQoknuwvNMsw",
  "key39": "3G89gzHwfGJj8YqrCoWZCCkzSbf8nLfSYeWEtU2Lh4Ck5qtCvN4wUYpzNKpzfAahGpoPGsmxREbwDpefF7798HWG",
  "key40": "45ufc4JTuKNcFTMr6mExdjxzFi9GnoXP87iNFWKp7w1oe92Y9nMTvfiYRRbyghuEZFLFxqdzpFSiL3Dmg1JXzzHe",
  "key41": "2bnT6Nq6yjaxw1Ahg8WHk8NthuxDPBiae2CGZidB7stcsRaD1wU63FxzCxQRkqnoQbZqarUcFmHPZfWAhXuYG8Q1"
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
