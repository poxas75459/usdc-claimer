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
    "2u1vgsphuvWnRJF5zx86ASRkt1ZG7ek6JmceH9XZaadNJBrHFp8irMRvyqbcjEi3r39Hmx4Dm4ZsgvDQZk1yGGUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pj47H962HeQRMbc4zjreRDmWijMMU3LShu1HNVEgGFQLn3aWTmBeTR3pRMMXv4j87pJNE67X5qfFTwhuxbjZRtF",
  "key1": "7FAWT3GP7mbCdCqvwXDapyKBYnpb7zwiYd7nnkQsAKhPuVdh3JmwYDb3W6pCzc9AHCf6UQ1QpoRXk2YGsbNAe8W",
  "key2": "6tadBnVcY9vFPGJdPzDGhhc7BVPx92CWoMASsa6kxAX5MXcUS5Xa9BXzYfPsjEK9GAWx2XAMexRS6sZr6wTkEGx",
  "key3": "5qariK8L4yUkmUML8RH63xSnx6bYTWHYXbRKRiPaWTtYNuL8XVkvbDpxNa6LSxrZMBnipgPoyZktRjmQadYvqsb4",
  "key4": "28vkFg6FjKGqQKoDbtfSMNWiv8A9ejdG7F3TnQ6U8hhEw8kQr14NzfSj3SMNFDh3hCHLMnKH6QFjRnBWLUXqXgHD",
  "key5": "2F2uLm12D3T2oTx8EbNjyLC6ee9Fw95W1966H2qVQspkFVUDQj4N8Y1wgKVzaZcTzzcuDkUUyi4A8mnpVfycuopa",
  "key6": "2yfMMHSXMPP9RpSjxzNp2hDSjPfNdfu6eqEZEpjBGm7gVzksNvEAMb7fRit4sE1Psasvcq7wuyXAa6HSMLcbr6EU",
  "key7": "43qoon43ZnPfP98Ry9pYJm6zFEr5UjJk3KxVz9Ww1t4jLXN4KM3NwNftuXpawa49URLpUnz6cMrwDjtZu7vN2E45",
  "key8": "DtCkBRfDeUbvEnw1pBhkSqgWYRGqodkpXi1Yi9ckFY9iVUVKj3ptXnEo8kUoXwuJf8Bq5L79K5yk9agq6tdu4W9",
  "key9": "5sofsXkzvTE4DnLU2S7cVVFCke1nYiZtPEXVu5VaAkb19THFkFFNPVF2j7XQWxEU448v2VVtCJLRXazBJq73yPo9",
  "key10": "4wPG37j12pwjQsQXL9g8jwUY5zDWFMd5XvPcbfuQPeRcpnF47Rui93EVLEe9UHvZSW6iKyxa78vd5fSJmLJ7p7bT",
  "key11": "MJ57dWBk8aaGFtxgVAvD6aDM1cykhcbu3gkPVKqc3X32TtEFFGfJV7wsJ6Aps3EY9QdSBZUasTco68M9q18gTkm",
  "key12": "Bnm7MJKc6Y9Bd2Smp5TqwFQ5MDu7tLgUKGg3HG42dx4dgS62Zm2KKgdVLZC1op62C96GoVx43CXRc9Q8gGXmtm6",
  "key13": "1uNnpG5PkLJQFsXAhntxT9UY7XtCwpedovFsvpRpMwKvJzbDrbXPcUjHdceQhB5bZ8Judnxc3x6twgfS67YBvQ9",
  "key14": "3S3v5BuzcKUMAR99BaKrkg4aF5dzHbniy9mxCkF7cX2VPjnbHQiMXhKsmxrCqxpXGMs63KtYBNzEUBvoXBroV5UK",
  "key15": "2FAJLYA245SgvCZqCPX7UT9DxywQzibNyng394ubfdCedu9ow9bU5GEXxdsuRFQ7y9jow89KqZAGKhpsC2qCwjG7",
  "key16": "5jy6yxhmn19HydYVDktCwx3WifLriQHc864BB3ARynLfEoeDozhLpcTSi2MTR6XABCnRsfeoGcGgKy7KfKatP5t5",
  "key17": "5cmXWYPWutmfPJQFyyweRTWESWidzHMrn5awbFwrguG5Vu17eJk3yCgfBM48oza1EEfPLDKVjFaVZuFGM7M7rGkv",
  "key18": "5HGpqYTXqTBhQSqntiPeCGhbfmd41gEtk9vDJHdCf6cK6kfsNEaB8SYwosBqQLHYiPGai9DH6nGfjefqaLAaizLg",
  "key19": "kh12vKZ6Qegj65Vycbq48gasCJ3dvDtcBodU7gYVyyWx8f7QA9UtJTdkrHy5K7urys3b3aeXp2S1Xw3RpJGijaq",
  "key20": "2iTvUoFZ5SncgvUxUyrpZq7kxni5tQXY2iuFZuYracUJ53YP4yPxqQkdVgCdk5n3cPinEKRbkP3wVJqHe9Dogw5P",
  "key21": "tssazdVn5dAkbZFFQRuF2zsFwg2QvbYXUNhYRa88eNcMEMPXKonEVRS8Qz1FQSHEk4KxMGe6MasynkjhzQX3JY7",
  "key22": "2ii48ej8abKbdCDyFcJiJQUWY37cgrM1BR5fpwJQqk28cLy7SE9Up6nuES3V8pmGjVJH6w5UVspDmazkYMF3n122",
  "key23": "3gD9huytxrtLKuu6eQrfKcfux8XiHAFt8BZMgMahRm2ymtQhvqxgficmvPnSoWtjuVgMcLryqwp1VpK9wmtVMYSX",
  "key24": "2dYijtbVHDBNiLf9iQXJjBx146WUyVRbmQaPWdw2Gk2sDsSEByqdyT1QPfTcppMZUeTuEdPmVFgZa4jNP2TZ26X9",
  "key25": "3idh5Qu2nbjBLebJmrmider6vc7HpjDAZ7GsXGyCzFWsqLhxS51iRsL7zwUQ3SRhmgSug4ca18bJEfmG1BnA9SHJ",
  "key26": "4QH4hLkhb9CrmQAG6QwkSJEUfm8uMY4DFSUiz85uYUxzHtiBdjbrTzUdSq3PUrJYoMd2T5aRzUxjFHE7sjJ77vyw",
  "key27": "5M8789sAMQQ4oww8HbnwX6DH5h7zWHLgoZqCjyFJoz8ftK4Wh619jhjvBszkHyjEj6hQFgiHBntEoLBoim1tWDpw",
  "key28": "2pTRvmpLHR6Y5pGsoDVuWFdtR4pBf2rzacrG6Vr7VqKCrgBfxhZwBXKJamqP9KJsghvDoJo6ATs7KH3s7GNaskvL",
  "key29": "2GN2nRaDXcyXYkquhNbeUDN5WhKGxdrytzbGmSZSdjtM5uNgou41tGZz3svQg9goNj2kxgjCQRMvmE7zCB2VvrLy",
  "key30": "667mJHYnoUK1yZrmxWimVffBmYcpTZVTkKeFsv6d74WNgNHkDVxCrfkbz5YeRut69613YWVLUF7uVHHPUQPC6mhC",
  "key31": "5Gp6hWF96LsY8opJVSgn2JXE5hNtjUtfhXXF7wYzCeM211KeURGGa5HUAhR7NeBd5bfwJYfXqnYjzaC8vksv1nVv",
  "key32": "5ks2vgK9qsekyVkqwpcqbHq5cRVyngH6sKypjuRmYGSwckRjqp2978NtbYybxeipctsCbKKjVUQtbqvBXzPokYb7",
  "key33": "39k1cSa8hxBYdEgEWdhUNgf9Y3NRKJcnQiZ5nhPxJqJUxPcBn7b3FfZQbsxJXo7wUnhThrQUQBhvFM9hT3wb7P6e",
  "key34": "3pYWWS2UqdMFWkoByHdYBixazKbfMfEhBRZFFngK1zY2WUeo7cTBozDFMZNhJ4dcHyTVeXRUhXH88JiLZsZf1dt9",
  "key35": "52AGwGzw9BG3koM5WLiiEcwFEDKf3zCXu2Nkzp4LLKBdUjB9CaNheaAHS7C2eQidqtTuT8E8K3bHXWaknmd8ywi4",
  "key36": "57NPU6cXUDCsLXoXTNxvpozSpHNutw87iQFyS4xuLmhh3Q2xU7VmYPS25qc6v632FrnW7S7wXNSycZB2bBL1uRBD",
  "key37": "3PfF1rW8Yo4kn6j7u91cnapNygEi14VxPFMcVMXNJqFKoY8PCf4fahChs7yr1HU1eascwgR8yeGkxm5m1h5dkgSZ",
  "key38": "2Ryuy4MofsbCXbDsV7ckz189qdS2rFL8ZyojD2VkKtngqSKNfuXLtYHTCoue6Ykfx7htNt6FraaQwDJinjaCB1bJ",
  "key39": "41rjsQWybLkhw8KR9rXZjasqCZvYwzXkscHcKa2KuDjvStBgJSMhc1NDt7ncan9JuT7atMGWWDEHULVym4fYR6zA",
  "key40": "4CxFWvWWB6wXdpyEQcxH2Mdn3pdM4tfZ8y2eqw5iECeL5VoD1tzBLXUiRa4HD1NvG2oLRnCwn3y7VfjmwTcvHQes",
  "key41": "5NVZsqUYYRZwmrGKmCEXmRzRHPeN3Ufba6g8spfkB4GPSpGRAkvivMWRKauPKgjY637vBVpKCvWLqKrdvts9FHFa",
  "key42": "4FJSVeUXaT93fiXN4TR6f4tkERMBn7aLL9PHDhQ1ZWwHwHaMMML9QWwrdtcgtXXfoMvyhW9yUgc2pZCoqvqfNvmy",
  "key43": "4j22ZVXaJB3A6E4NMYTCCKQ4bkxBkkohgZvEgk6KPqqkxiuQSeSLHznpnVsnAvKfpNLuM8qvMGRTfyv3cY9Q4i95",
  "key44": "P1qi8YkqsFKjqbLYGpAHfRE536w8VW8fLDDgdyYkk4gB9Nh4fxezmyo7Wb6MoNJjyLpk1LrGHqNPiruDPnYfjr2",
  "key45": "2Y76RmHpqVak85wJJQ2mXUf9AePgNfMNNihpyh7VQkfpyULLHiy5SUDNnmfappneCHF6KegaSDVBZFQnti6DLRZe",
  "key46": "26TcQVuvaB2cMLkbf5WJCedzY9McrMD3nqbWsXRQMGouwBNZUHRBQPkVBk3tRDLcsnjzDJj4KVqKr8vGzFxPAtyd"
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
