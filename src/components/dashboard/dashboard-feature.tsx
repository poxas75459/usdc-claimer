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
    "4R2otEUpyw5ktiAPWuYG4ZCmerahLBFLw8uTH2GCZUNu1ev5pqnygt29RQea5z1UxvoYagpYJtoXjzWe9TQRSqRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64G7GK7c4EyiUXkM4Bg4ABoS2imMb8B2ijKizoqJVxBWRxBHNNVFgwec6rH3t76VkgyfDN2db5s7gJ6xBEQWsS2P",
  "key1": "3ygpiuNA9DKqymM294vPbbNSF2ZaeGw1DmbqEpZhP91hYoAw4jDgy5xz5S8Qeb4sbAEJSJVmbfkmq517XQnirzKw",
  "key2": "3i775dXp6JxzV85cX3Ch1fBhhM8x3MKzg32eTHFESiq2MxcwJdSxrLJxGGbF14LAWeNMyhdx8RDpddp7Qyq2EKHD",
  "key3": "2AorB2Ejo7JSN9nWhk9FpUg1bAQmZnQKbk7VyVaC6jnump92Y5uxiQCxYHhJFKrTJVkRnZhAwmDDn2GieXFqqDc7",
  "key4": "ja2V9kRtXRAp8VoymmRzwXRkhozwvvt9gC6ucHEvPaGnE1pPRdyYsnUGvhLqwVEHYQBRtS9y95mbLzrvpFS1d3Q",
  "key5": "3x2koSNEBXDbRUaAxpLcUNYdSnHHuWt7aNreEsknAN6iKHhh8K2oQULZ8CT5LSU5v75Ah2pWtPRgNArkwvWqghfc",
  "key6": "3GiDLHPeSqffBFTzLaW8JpYtgCtZrQhN3oCNt2fNPbQetWZFrMc6GuLDcs1rPpVHvjaTWVv9rHHjtiucEre6bCTz",
  "key7": "2Ln6myuzXiKkpAbwwh6zTGQLCPaDCuah1QUnpd6rfsGsLj8Vc4dYAPPvR1LAbcrg7hZySFaqrQKLtqkRPr1B5Jfk",
  "key8": "2qcgtdvA2zJYbr6q56AHC9CuwMKpfuLAuo4Cevf7coRyTXfzdW4iRetpcu9gmVnsJ87hA6L7Aq1HGr2Tm7e8hTTL",
  "key9": "2TVRMvUKQBrMvtT2qnCK8m64CEDrHNwT6Nvp2DUiNm7dp6tNfgPb1TpJ4rPc27DEh9kXqp8SBpXU3xju2MXtqs13",
  "key10": "4Yh8pipfcbveFg6nuFm58kEB37JS1gYFKdjRs6Z4AHWmyMsptpmEZBDT7cf9xWxtwfw2HmjswjEp5pq16XysLRb9",
  "key11": "4QcXVrEYr8V2s3nbccHp1EE6BNhYUunbUvfTYNenoMi3aAuHkQsa7PY8bhgR717PantvfriQEg6ph4cApe9Q1CLb",
  "key12": "caitw8xVbyqvtxcgZbLdbs65fNCYA9taYQSc9s6MFE9bWRgXLyWe6Pc1SqjLknnupL6gQDPt1mM3D7sWFqPqXRU",
  "key13": "5G8TiisvvTFbhoZZpQvxvY62qP9MUBJr2BzC6S5BH7X5ZM5rdbeDL2QWuCjFyVteUnjJDTi35mi1vtkh2k19SAv5",
  "key14": "4vBMRg8trP7TSvrNfqgykFtQQuWrGDFKmkLNtreyP8bK17VYU77HB7sxNRwBQzH3BvvF3FgAQSAcL2mL5AawnjVT",
  "key15": "27QUvtWGhjZyZ6375jGccgYJS8uZSiJctpH1cFLQexgyuobJ9qRQDhxVB5VGgJqJFaNBLj5D3zLiEKhyJ25Yf5hz",
  "key16": "Z428G3q4PQEL6K8SWsUcoqJpSmmLLAqVoputzbBRJdnHapLWvuhx9MVWwzp7faY6MJ3W5BsU2yxK1LBzsYjesFw",
  "key17": "PCWhQ87VG2v2nY6w89RGa8vE1A6CkrKs8TGSYPEp36u1CApPqUhyKgtDqFVG8o3VbKnDfc2kjyh2u9Z4RXuQ166",
  "key18": "4XNV8BZrVGSnD8Pf3pJPrtM69KWgk9MnZie91YYqJe1m2bPB2WZ2Vfu1tvd9S9YL9nVS5s7gP8rSed22ukaArFH",
  "key19": "3EmsTAJ81yfAZkH3tuy1c7hYu6anL2xcPD9QvRjen2koEED9efQfFmBbsnQG6V6LePJcEz1vG3JRWrSqQnFk5bkn",
  "key20": "Y2DuhQHSGhSnZENXfatq9gnkrvawjubkbjyLyjT3qbtjh5yMmYwpfwv59u6SUUHQmZV67j3K1gzRb3HwpZRSnGg",
  "key21": "47XiND8yw9yYEYrGxrqKBrPMfbBvguaM6RGx5sSynzzHfxqrbhJmbK3GAc9ytnyNbXSFFGWQw5xXRNqHy3aMNJaW",
  "key22": "5GHS6JQg6vJq29SMsJ1XYtZXk45qKMaSCLBsKfgmRUCSdRNaVm8AcqSBNWq8aX62NatYzAv9r3dB9RhJhUbeKrnf",
  "key23": "35JGCbq37yHywpRSedxGJugcBwZBaEQmzPuRwy5JCQoQHHDHd9Qb97cWe4DHdWJ3KArzER7KGw8p5S3aYznr43iX",
  "key24": "5pVJWtpxsRVgkEaQgNv7ZmNVTPNYcgYbymXhZzzRcmWhs47G4Ux4sPQN2M8HEEHzriEBoQAFgaUR8tnMCV7fAQA9",
  "key25": "2cKwiWbLjGo5h35kFiMhXjtwxC9mAfbspxvnf8u3yK36yu8P1U81Vb88cgUxkzQBMt9aG7qxEp4kcBpSLk4mb9tt",
  "key26": "67JXu4riLdEePPiADS8q8suwyWZo6FpLKVwTRZhGYAJdcefwW6hitAjyGJVNe8JLbQyKF6W7Hx7XiNnRkGgLsNX4",
  "key27": "5MocdNx4mh2uuPevKsrKmHJ3fr7NMkD5yBwByrtznnAm4St55oWneXez3jndysSAAZKgrxp5bcQiExV9dWZMwnfj",
  "key28": "5o1tZdn3JkPipHwk8KMwKom2JyoBs6aEDqyuVMLVJAaw5KTB72HYa5xd4oJMv6BBtS14R98JEbwZPZzkBHBaJD81",
  "key29": "3HkdxUjjCAf2TkJtT4SUEtputWiCEjQzXj9X7wnF5DcYvkgJguBoGqZNeT44bdZVfPyNsu3MdZ5S598p6RWgGkbc",
  "key30": "127Vy9wzSfPffFQtU4pvF6YpFDNkez8nDWUiByCyJ9z6DoHWLkk5M5R6NUox9pBEsiEoJJNCErAdJPWdoPjBiRsZ",
  "key31": "4NeMSp1hGicNcP5LNCaW7qSoUuxL8ZJPgFzrT4dKLFVPcBu23ENJ1QnA2aUQEiDcp8avffYeobh3fe24Wxt9c7we",
  "key32": "YDRwKJxRaTVpLkJMhKYWnG9NZtMWSu5iuaqhongNVgoRAcMpZXyCWYnE8DKGd4p5ezeZBZYHkb2dCoGtja9XR8B",
  "key33": "3C8XcKeBNRbhj4m8T4cQG19NBemKNgmRLqh8AKg2PwEGQ5xxRR7yLFwWfo6DCSzNujAmomH7S2g3nmPxuLjU13K2",
  "key34": "4JX1QjbGLB4YviHmsuxQ133Ln9xD6iRNoPiW9PkwQMGQrFnqBEmHixd6396gcH17dv98Hkvr2HYnANL6pm9rwmQo",
  "key35": "4zAfbEw6mmQGFYMWucH9tdJCWYJiM2nFn2Dyo9SYqrdmHQRP8pDBbMCCeDZsG5Wei11zXgfEYU1UUGHmdXSoYpEN",
  "key36": "gPTX8SVmxw6rw32t4RNJtN3E8AbX4SLGzHfdyq6aiy1nM478hFZpET1TiP3rfpqxu6souc3jJxmmELfo4K9gKSD",
  "key37": "2NZa1soSR4nXqosu91hZhF2YyMVTqi3b4DCXkA6A9BWkJ1fGgjo83v2hT1CyxYJvDydUjLHtZahdv5S2t6isQ64H",
  "key38": "3fSR8uGhDkL3xMN97p1oTDagnLMqys54G3v2gLnWG9yHEV2UsuAuQJE61LhQNotLbYcft5v6tN1LjY8rxaLRyFmQ",
  "key39": "5D9N38kY7DSNf6X4neKRChfpEPzjxy21o8M6JthL5UngMbhszLBdyXzYdvgWQzCgtNjNtcpjRCVHmP9VaLGeh6kJ",
  "key40": "4GnXeHWDkog4ek4wNzYuDtAMjS4HgqKmN2WwVC75Gi98LoJ3nH2m6czNatazAS7AswNipYx6M7suaKM7UWWF8p9u",
  "key41": "4DxKosF8dhjM8MSyHtaXLse2rKeiNE69gSHw3LyVXf7QQJuSJ2dxbPxrU2SfUMx2kfCqqATmSUK3turFuXjEZy6R",
  "key42": "3MAqGxekxaPwZ9jx95hR33Q2GXHS77uydqGwNf9o1Amue9tx8uU42Lxt3CVjy17M7Qzj7ibcX9fZnVEEy93SEwF4"
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
