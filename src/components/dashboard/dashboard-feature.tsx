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
    "5o52eowe9ZMkc3NNS57ZfawnmJ8ewefHpV5DyDH7wUqc2WAJDNUpQ7zqRZCYv8dT22a1sam7SxgrShH93cvGRdc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUMiWJr5eK8rwEPeVKLb7kVTrQhaopesbXbykCrcEAhsjeSWnR8ypbDoEm7k2idzPaui1J6tRYBQ7DBwwb6cfUs",
  "key1": "LAoBF2NPpawphfh41QEhCEML2hjSZCNoJwPFBg9qxmtvJtxm9kPTwR3L7NKSRyG6hb6r5f5DiSSuwcN9wHrxQR6",
  "key2": "2LJxHefSyfGx3BmgP1pPzuLhZ74TBDrKdVmanEbsw3R3PzN6uFpdtXShtEgcWUH1xZ3dgz2ZWhXLv6jpKKVQp8te",
  "key3": "455mwficD16hNxSh5Qb5HUNEc6XTdZAztV9tGWRPn3vTQznoRJw5D2UM1bot6FhsWmnkRivSemtbKdCBZxK9bdQv",
  "key4": "2YLYbSaUq8nXuJwV9XTZbhTdM4dyFn2jh3UTBZqmgEUxhuzdwzwod7u49szzTAVQVApfQScUFqwVENfaYt7APKmC",
  "key5": "4FzkLnnJ8ops2cWtPqkLGZrSNncrYvpLDf6xGJFAPxo2RyS7s3H6HLQxVz3bXdLfZqrnVZr7rqGGvZFA1gEMPYuf",
  "key6": "5cWrf4bjwY31ocTaBwj71o8aj5651ApSiGUmwRd2AWkR7Xd7M3jab3pBLWYSWQEDfEGf6ZoEbBYWrSZCkF72bCrQ",
  "key7": "3x5t93cLRfxiTXtXEhvN6QXmh84wyFMSmDPcZgkE8fDc1U9MY3jiYd7RjxmWWYQMWzqnm3kfDEXR4qGLexHbwZ2b",
  "key8": "3KtkbVE7aquzHZoBYhnwScy4yeVkWTFa5vFANyZgKiGmTZpGd97rvKSZKxU4PH7TVDe6DxPyFpx67FhgV4kBcxrB",
  "key9": "2Zq6txw8JSfcwkpoT7RgCeifD3d7b6G3q3moR8M8SoUpJJbmEvLd7mewyMq9uUL1wg21oxd8t6nUpUBcXiejdR78",
  "key10": "34y6D1FG5abpAtQ95km4VUcM1R2Vwoepv8bJcC9qH85kwXsobJD4apwJWM1WnAfC4wmNE3vRAHFDtJoH3NeztwsC",
  "key11": "4bDeFmpgzBqZVnb8umqaKk4FzLyYvn42stwL4kYm2wmyVx5B4qmikWW2V3YKcwqXzYzABK9NcxhTiHRt26e3XeFV",
  "key12": "3xYowZQ7c4wXotBQLPGDYefvmxe9QWYkQkxrUSC4MAUqfAwkMtbnmfbwADuFPkomvbDETxzpAjerMkxzZKGj51Cx",
  "key13": "3oKiR4YvdAZu7AnYnTktqxUt74vzNXjRGPL1bhk2ht7C7QiWHPWSGLuXPW8pmA2etsjgwghm1AhiHPsvKjjehjeW",
  "key14": "3Rg8DV4kYwHTv9MWib4SkUZm99H91W1crkTW2T1B7v7NY1KTAQvXybb1ZhpDAfU2zTL8tpuioqh3mvvrEVGAxAwo",
  "key15": "Ypw9CtNqDfjPxDe2AbYL1LyKDDrvpBxP36t7zsF5LkwyX5iGDZzwRbpqbSQmRhcnphRkdZBV9FRzposggd6TE13",
  "key16": "oZm4sVWdCmj9Tp4cFC3ibaECCWWoeVxBzPphyugAnmqWsL6R65ThsLKc38JUwkxnPg7vxFpwfzaVJiprRuXhntB",
  "key17": "QacNUKrhy6s3ew1vWuKYNAj78pPxh1Rv2e4gZX1waS97RVwPBGhrL3LanyX5ufJCGc8CSKNGCSfWqBUiThM2dcs",
  "key18": "K8toDcnjvH2agzx2QX8jk9VefTJ8qwHGr7JztyT3atVjgLPYWhfMc63bxBTJG5pwpP8vhKfUDie51WgCTezEscm",
  "key19": "v3Xw4KEDP6Vy6qjdDz4EPqSLmEUeKBLvzjCkJw9uRVbTmMDfcNSfF8d5hqSVzg2E1dEKELNuXx9xcAkRYDmwXqm",
  "key20": "3v3bRSqN4AdCad4CTUySGFf2DhzWQ8fEozzNVDjgJHNRkt3ATinWjWi6NsZjEvWsvdtL19xY4YsjFobCSnRe8Bkd",
  "key21": "5z2WJbcXMGMtBNQmJdFrZGp1eykEGT3NXoSfhpMKVZLBMk3N9CyEck1dgwqfF7s7YV1zfa8Gu55sVmk5CHkNzcZF",
  "key22": "2nTJQZVAyJPA5gD4cWXDpNhwHUvVsRM51fV7vky3bdbr2z3hBGtNo9hJWsAGio1ExHtZz6yrX1w8Vc5vugnL2dVb",
  "key23": "5XV79vNkrwTaAKjF8dyLzNUcjT4fH87tx4TogXCYofcfJc8ivCD8QsaFyhs1hsUJy8jXHsTUa9DjWugeYCT6ghmf",
  "key24": "2G6hWCPhZMFhtms4SLdgFpSUB2s6LoYEhxET9NUv9mDnmXZeKkGM6sr75s7kz8BwHBXeY7ybCZgUBia3PsmA6YZN",
  "key25": "Pd3sv8Fef6cFyKoYbswDZN9dH2vCBPaxh3zUM9MbByf8Zd5P4pWLM49jTeLdq11H9yjoXbVrf5Q75VHbVWXEcTu",
  "key26": "55BtF196mQVHvx9Y6PPR6FhgVY9GQDCuzQLsUWDiVV7e5eerTsdiC9NCCNdUU3uLD5MVdEKgeqteefBp2AeTuMJs",
  "key27": "4Ge9rBu73ntCoVCPv4YXYzmJYyDt9nptPiqjxdQ4bsxvv48WztAXTxRPshUd4e3R4vKQKhCNfX1fmwp65m5PyKQJ",
  "key28": "2eakEP8wpYbnkGtndchAxb6RTe7YN9yrmCZPPt3aVmUuHfLyFPnbipYXiSycKV5HnySwXA9YwKB5Fp7aC7VefsMJ",
  "key29": "4xMKeexqoaMoi4U4jhwAAiiuTDDnnMqbJkFTT6LBKdVSvs9BTdqBcEFx2W3fKjQoA7UJDmyJGSiBfGwgWE3EksVE",
  "key30": "2nYZFzrDiTD7dnAk6AYF8sQ6kE1yRhHFyvdb6nQaCnKgXtyHQXbPXtP3HwXEYuBYHdnAVPbyLG8osAJP57grSFKu",
  "key31": "3HG8fKpmBR4zhx9JpB3WyJSRceGm8yV8hy9aqsFXDojhZYhLjS2qskh9iys9SFGUtZMPX52KmQPokbFUrvtFWGmX",
  "key32": "4mwTDbPBFReCersTXxbpXD9rZTuBzE369jUUxFDVAj57kV352cns39CryEWDxiv7Paw9zdTzCRPtKwCdptnSyYK4",
  "key33": "oVbYU1JJUuBQ14dQYbvGujGBWohC1N57SPTtnWt5gMt3Rfv9TgpmQvkF9ByXMNLcHHJxbF9XMu8JkmvKhiTPE8U",
  "key34": "3sHbWjhqYv5BiBL6T5Vz6XJStwJZLEFAixRfqv47DDG2ndb8Fh2r7148gapmVaLRQKtwsxdLdCqaq7Q1xXmR3M39",
  "key35": "25ueQJFT6ZMwQhUdxx9TmtpP92uLMadb3uM7VnkxvhvqMtKi1TJfz6FAiZLNxGKDK4JSWBq7EMLZxTxtoNhfR4An",
  "key36": "4mWKRLRDny8XqAG2m7BgUmY4UBTJMcoPisfmzo8eNzBUuy1xjuVZQdFKFK2ik41DtXF1RukzcQ5tbrCu25f1w4s5",
  "key37": "2uQLi9j9DkiQLqyiDRSwaNku8dciQnBZXCsFopWsUVo7rXmi7h1PzWC7GT2VN9d2PWLfVbRoEdMsJVjEjR25Zr4X",
  "key38": "2ZwAkuFXaJa6T4JESMZjk8rmc4TqKkJWAFD43Y8qtWWEjA9xRHtF8j2M4nVMGEWzokVy3KpfUPvuATZfnUZaT1uj",
  "key39": "3aRnCCbzNZ2i95PC18WZgP7DtcQ1psnMNay7EyubLXB8XDE8rraKRQBd67xKmNNh9QAKGDniaaQFVApmYWEPhPW8",
  "key40": "5QyKfbmQPmzDJ59UjZy9MmLHfbs71ehf2cM8N1pocRa1AcV8mrhmgUzoS9T8ndKwPveTnSLivdQXKj569ig7VWea",
  "key41": "2dy1VfZqdDYoXaebKFNMVSMY2gens3Fv3SkLJKhWazAmapjQWd2mJpSfBpmK8qUwv2ACCq5Dv31tWLrm9HJJo55W",
  "key42": "3LoMtbAjYWAj4jHAsNJspQkKLo6Y7jUED7VksgW347pjuCxUXu2BRXSVLFp3brYy6fkMgC35NEYUTTHZ79SRGqLA",
  "key43": "23qeCLFK77RnS6mDxWnHeJK6ZzPd7mmPanBVrK7fbomNgQDhgK3nroy2SFqzZ9utLNcf4ZbVKPWj7zEeZctQ5r7Y",
  "key44": "VM6g524RycJKgyprk5qQRj6naYvpSc67kkzs8UnwsHAyJHWhLKDu4mAzzEUHnw9cyBzSsFrd2hcs52GvURTKy6A",
  "key45": "4JeBs9fmKtt5MXbuC9r4mQfq9CnqC1CTEiMaki9bHPKc1iBh4QdteQycNjV4JJHNsxKLthYRVnvC67BVcUVYG4t1",
  "key46": "4sLv7tmM3pU8onZxdUWFcL52M57dBrg5KxJY1KyX8RTQUiADeMTihaQwJLTK6xbgcsNNNj45HBR4LcA4g8pK6ygY",
  "key47": "3iFfvZNHSRF9fkuTksTT6aqQtXb2dP7qAh1yZMvkZK4eVppGdW3rpZGE3HNvFjQtqC5nYcmderGJDTHpWM8m9teb"
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
