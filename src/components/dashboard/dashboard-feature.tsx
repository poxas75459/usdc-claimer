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
    "4f36aYvXVgrNbX1toJM9dHnNRpDsUcoCcu5ZwdtpU51tzndxkzgTv2zcW21Yx2W3KW8Gv6QthBS6ELtsChxpz3hB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5o3M7iUqeCtMqszH5JuBEdgHLkdEVy4evT7J6F42136i1HLGegwCtB2BWxnaEsWaBS6VVCW6SZZ2K2s22Bqp81",
  "key1": "4U8v3o76Aim2wZMkY2tmk43qyHsQgWrCtcCnZdn6xQygCpDSKcmHFaanY7Aqg5a4UrXX7KWEnbHdpdyJKbFtw8zA",
  "key2": "4YLNifUaNFHPod6r9Y1XpgbV4jiLpGcHrFH9Fqn3JjPajzNKuAGe9K1wyGUpxg39swMRo8jvkPsEeiZwfxgnvv4P",
  "key3": "4L4MGbHbASufXjd7R9uQ1UnKTbfvNM3NnFh7qq6eCdGkRuJoLWzNm4KjgBHjfiL6gHyMeGmuMdjmqwLoa7qFQygQ",
  "key4": "nu1pxJTBcCFhqhHfgaG65x2nLg4cxCvsxN6jDdM73ecGZUgtjYpNMRbWJYQTyXWVHK1xcuLj21SmuN7RA6aUPvX",
  "key5": "4Kw9ioaQr3ZMg3A5H4Hqm8pAzeNpk15CVKG8N1RZVS62qZ1A8zyA4ocfKiDoxyyeRpNoqi234naXy8598eaM2jod",
  "key6": "4218EfMgeE7WEZoE6wMsVtjVzzDt9UYdM7HrBBmWtv826Mt7ndXEfvM9KgMKAHBEqyb4UbmauEVYVMdarRXei98z",
  "key7": "LU8eBWad6jm7KoWUcqqQG7HSruKTG9tcfZzPPgnknkJrCgzyyr29sAMhCTDoAJfwDTtajK7UEaKjbJXJjSF7sjy",
  "key8": "5v2sGngyCiFWz9t3a2w7tuWGrk3JX74deHXDMY67xJTMCMKaaKHgJeYvdyNpXLqc4eUjguFKPZ7xYNxsFhN6nsPB",
  "key9": "2nF6Q8upSVL2bfs93uXniTNfQ41wjcUcn6JCvCqQNVKCcGRqRL5yzLqrrPEiyYMXhYxoGisGcinvbTRMDsTgTGNu",
  "key10": "3d9UoVEJ5hEpj3qZvtKGUMqRcw75Scm1bWnHHxKqnBn7r7qUcBJBQPctPbaX7GGUNk7EWrVtC6AxkpoJ3oXcvJih",
  "key11": "2Y5me29kY1MCgqceiDy2QLJLeA1VcKsHejvnTJX9HgwrJ76ukxvuNtdffYjVYvUPz3u7sJNXkaJQTdjEEvCeTgSA",
  "key12": "zdF2D7NhSsexuCkZUcBms5THUjzUWQSRd612Pob7Nhf2Bk6ugUKJBSpFuxnjyvgaR5q1YWqvex19urzBYyJNnzQ",
  "key13": "2exjrTKhfRrCFzqinq5VvwhWLK1q1RRNgERxtJebbRQLXDQ6ZQF4FubWG1AVjqCHWBQN4iJGYqYZNMRE4R4FLEyv",
  "key14": "5nf9ujjZp7dVh5g7XPboymsp36hq9KjQLWS3FKywbiZxtJNnGm2PySSdagHaxV1sq4WnUYnD5i5RCA8NBFGncAay",
  "key15": "5KZpkyV42wXRL9qSM3DhReE7oULLAtTXrHxdqHG3JAUuJ9v1HKQRPUcHqaPfkaRdGv8zbUKXspdcaeMkHaDRWF6g",
  "key16": "22nXARo3qMb413GwJtkw4FzR9c8zCxVZWH6EN58ZcQ9Rp1Y9pqDedx91ks37Fn9PFGpkYvs9ertnHTiMiqkSPxme",
  "key17": "5ND5Vu9Hjh3Bt4VucFfMBV7Z4CThxqm3rbjdCHgvwsf2mqGips9EHnWiMkiu8u7ZEpc4hXBAuNiHSWL69odu5KCq",
  "key18": "ZhxoobBx6bzi12VDx1zmzDDfnuseKpoM1qkwiPAQQ91fZuN5hA5Uxu37ru1DNFKwk8XbdPgdb5V2UL8NwiySw4p",
  "key19": "3cKXYaoh5TCvC8UNBkthRxDLtdmRuDAgdJ2dDYrvLaeTnphzogb7LsRjsGeNVhxyGcJB7uqz1n8GJYHDcxvKgq3c",
  "key20": "3X4QhoK5KvZRf31RCwM6fmUu6kZE3oevqUXQRghiE7NAnw13iTUqmm4DmYP43SbWg4BBixNyXthJTAPmU7nykXbg",
  "key21": "25q8jWkaVMrZHq3mwzkwUtg4P2nN9Xp7RgJX1mj7QWZA7zSyW9Ad2g42LuD22MUj47a5773Th6qGUUCaX248m61d",
  "key22": "2rwhPP8HrnCZDeybv5RVwYAKhFwyZYDwq1QpfQzZqBnPQi7fKX6sSomnpRCveCKzb2Me3ociqnYQAkMHr8JBqS5Q",
  "key23": "r7MxULDbyZnGjPB3oiqCMd55L6a1TdW18VPDzEdTcqdLb3P6ECWmsoNhMv6qBUVv44giY7skDXpQiJSsYAzPoCf",
  "key24": "4joJxbSC7KHa4amupP575r4NFywrPpMWNZwZ5VkzxhibkwrTGRSywLGyV9XWzbsEmu4mcKBN2h4LyvQZU8bWnmeu",
  "key25": "5FUZoHFqh1wCgiFrtLTUBm4Csxg6Ad5a16h2yvEtU1eaqWpmRLyy9z2RvRPKmRMVwuyMm2Y6qjyBwK8ndDEytHy",
  "key26": "ybSdiEM7NGc495f7Cvg5NpZv3DGW5EdcDNzJuSf3WRsCC5F1QsPZCSAiadt789aAgJyTTsQjXWa7twqUYiLKja5",
  "key27": "4G4VSXXy1Zq6W4E5sQGp97EVEhxMTR7Kp1HRwxbLSkSEVpt5RQjMph8S67B2gYz8NDNFmCoFvEs3NuEK5kMFMAT2",
  "key28": "2jrh2jwWjjAfiiEWMHYqytGd8Sum53VXLmH2arQwvczhAqwdv9rtVC9y3eHucfTm7zujFAvuwt6ECa32Pppczec6",
  "key29": "25hF4ocViw8KQLGuhSqc4btULT3kZYqTZxFughZptqwYrhNXpiYBiVwGrxHCgitjZe2JUmZs1w1ASR2bijrKy8z9",
  "key30": "5aLBmL2Df6XSFfc97GSuj82We1sr9yTihTgGGZUAuoYdVnattRvLhSbPh3pc1JHWEpPm6m474fT77xgdSDPyD5nE",
  "key31": "NGndba4tRTTGdRtDh9CmTU3HsBwFYCbwjNa2MN7tZ98NMuyfj5EbrVKGeXqi5WNBzvzFJf1M2JpqrNC5RGWvX9t",
  "key32": "5tVbXe2jvgtxzZ9NV9MkLXSWLJydiQeCA5LWa1wfGXg8bt6mKDqhpmq6DaHhXAN1GqBYCbcRwsby2xFLrrW45T1o",
  "key33": "HiWqDafsE65kHzgtaw8tFKtyQ2HmT2iQ9DsNqCJgpu3vHAGLEWv8WYV46o8vNGxe7VRhjTDgpCUkRnMZeXAzMyk"
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
