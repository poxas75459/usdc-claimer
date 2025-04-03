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
    "2Y77UHPYwmJPaiQgWaXat1gEVbWxVyN4w6L2nBGvfboUtiUH2PA4Y5phHXhU3caQhaCPjPCxN9GJfTRzT5HnEKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y89CFjzm6z9ePqmSpRVEWoVWRcn1M1cLHfcMCKUpT51y6XQQZ6xYKwAmnicP74giZp2obNwKqysV2BZPMXH9snD",
  "key1": "54UHnLBHoaXDHp5W6BnLNsHZUkrE1Kq5G7UWEsnPEQPfESwDeNugZ8NNpjtNh9WDFKE36maAQbEBaKwcgh71b12C",
  "key2": "5fCnRDXaTNJqo9qSC1CaGpcuDLNSSkzrAwRSTtKLD6D1B38tQxMZyqvE43VeEgrsKQoJviGaxaw9dBuiJfCzaQMG",
  "key3": "3MnaNiqAqXyMmuEAfb4L8LcmctUZhDdSQdSX49b7sAi1Kj51DU9uyXfb54JvnFK41LcUKWqcQ2MAH6TCbSQhzjGi",
  "key4": "5j65DjLwvAyKafGeLPANRMexsaqGMZ8wMNTiSjvAzReBurdXN2QaLXc7iKYriSCvi8Potd9B3dinyraiL6ZU4ZZG",
  "key5": "3FBgfv7PXenJ56eTAW8ydbJqmU6cjgb4pvZQuCq2b4DPz9brPycpNpWQUQM8JprNVZawhAvGeKPXWVy7nePa5kMG",
  "key6": "4JL8tvGWrNbggosH37K3w2FjBGVLFo4Swpn1ikGotSnVGBT8aaMQFqrSMQnijjpf17yKuCAVXygvCZcz99KESJe7",
  "key7": "3i6NPmpVkLNWT2smK9jPpUfKrzt1PCPSWchqJyihNwMpYtEFs25VozEuKY5Tv7w8QmZLcXnpquZP7UUhPKGLpDbu",
  "key8": "3RzYFZ9o8KbFEbjzMzzNheR6TzqN2d3GdCMbYAPmCgmxnbcwmreRC5rEEE7wqxDzzFjSjoHVCW5GobTLrED4duRq",
  "key9": "5F9z5Tt1dtaxwtypeQ4UgQYa2zhCdfJ5YooKCpfXQeL8C3KoanDRYTze2vJwh2qNcvbeuQCVmAE3Un6MzGaueau3",
  "key10": "5i3tDnZcNWEhbV7Wkbq1fGgaGrKAZM8qucdTecobmG4UQo6ezc1CqqZRkBJpr856FYBRBGhQ99BJutprHEmMh6Pt",
  "key11": "2h5tm33UY3HXak1tHHvsCg9WqUvR5Pk722E6QmLE9mxPCnV3jqSWd52ghZzudKosm7fz1dcyMrnN1Cfrtue6cnkS",
  "key12": "28HsFd2odk5TZxEEJYkKhtSYkeE89EkqXK9P9aSueD147qvSNREtxWZPz75yhU7oLiL5meaPMTkAnhEzwms9yG4K",
  "key13": "3AVH5X5YSiYjBjNuy8kL7SE7x94vnZzZpPR5R5ESK9GG2YhDWVxnqfdiPdajgxLbaxhLb1jT2c6K3xQcGwme2Lzm",
  "key14": "3vjp2YLG5vZkhE4SmwHHS7weq6yFF2gstQut9Ep7Q7ckKN3JJ2xMX6Q3yPStHpxveabpWmu5GFaNU3hBSAvPGYrs",
  "key15": "2YjDnW9o4xGhKCCqBz3HPizmnynP2ewXcupKMEDv7koygHnAkvzC4QN18dDqELGrb6dCNTrTx8iZ7Vn2fymtdJTQ",
  "key16": "4zm9uaMvjDLsuXK94F7baj9Xo95YqCGAEaL3M4Wz7o1k4fyqNqHrUXXkvAzEKNbT1pEFScBZ3SegLsHtS93x5UoE",
  "key17": "4tQQkjMCzBw47z4Vpwx4Q2YH9r6hof82HHvGTHALVndRJLX2cdYvcN3k9g6bGTgfhTYH7gKSieVBegK1kgXFaGq3",
  "key18": "3A5PZt692ZKxCm4jNrcQC8H6qmTnQ4zR6zt41piyNx2paMQ76M5VT1mc3TiCr6GgMAhBwETPoiQVooZqtrtwsTpP",
  "key19": "3sXy4yDGpoY6SS5FrZ76taN1XJaqSsTF1DibPt2e62PbpNUQHdj5Si5BXnabBJhnsLF8wduo3UHVwziPcSe2wCHx",
  "key20": "44vb7gCV2LqR4rAyyV2snz16Nne4JfLdDHrMXnFYPVGRTXVbrvKyuFRTjzSgqEeMHyzh683UtGsefyg23o8dxeWf",
  "key21": "3Jex2zwgz8qx5XKRG7Keaa1CkjMBEk8TMNXiT7Sbb64T3EviVmHYCuWtDwLiXWLSkTEaYg4sZkWPgC4jstzqGRft",
  "key22": "64yN1w2Avv3mu4AwXGZ38BKzqm24NVVxjvDFH8AQ6AHnubLiF7mLa9ucCL5rCpELnZHb8AEb13hoB735qvi1ZWxf",
  "key23": "5ZgRudR3p2qLiW6asESok3QhToWBdwGWVL7Cc8sDkQqXEAysK3nqyUK73c7SmZVRQrDdyTGEgBnz94vX4cUnp6ya",
  "key24": "4hy57r3n4zidPpvXAYsxnHw7YjeqN8jjzgvESBMiE8fanZoAyW94TR5o7ddT2zQjT9gAci9THn9w3C61jAf54uJ7",
  "key25": "23hvxbvp1vpfD4tJ8JMutZcYUXSUHAzdBZmEUfcUEdLjSFTTjJMJAVywLHYLdAsdWRYyGDnjdiXgF5DkG95eLmSD",
  "key26": "4v5DzwL82oXfvCuigh4cGQGMKWVKqt1CqmZdRvGik5xQvm2V4mbD4wF7rz5SJ9L35WgTSTfW3HdCqr2tCARv6H7w",
  "key27": "5CZu8nQLyJkh6aTonA1fLQGDYsKkxTn7yhVBkGfyRH7SjTcBu5Eyh3xE2MK8GKDWUZzWGcSRsnffvkoBr5k8Gw8h",
  "key28": "52jX7hFr3qt6bBj2dazrou2piHcJ8RrRofx6zQZHjQMqM8y9Bki9FNYzW8FguAyQZunrbYHW5MkHyVcj1vMtXHN5",
  "key29": "3VpD6K46diYCTKKByxPKoeuXpdVUDZS29U2VmiSVeeikjoNAmGm5pHCXxdvRFcX9ARYZkdxKcv1gvpV6uLMPkukZ",
  "key30": "3aLFq2JKNjWAb8o5XfDDiRQP9TQjM6vVj4Utd4uzXrCX8jTh4gEgH6TAPKt2KQQsqhSxeJhJLBqtwaZozJ5E2iTA",
  "key31": "shxfzq8x33uCCiWwx3s7JQQ9oqJQGc3AKhRofjtAyi155C4oxTBXB4RBHV2hcWeAu6QaZLrYCrUm2rRnQ88Tgwi",
  "key32": "28MGjV6EyxpZ9Keu4cjm7pXCPorcTZ6dY3Rm2CyS7bLwqvASea7ekRhG3wPY2MNRdkxhMX8JF3DGLqhCRShNgApi",
  "key33": "Ue5z63LioosYq9Zzvy4m7tN29FwWgYz8boJk2tn63KssMnmje2uTtdRMcpoxiMqqTJsZVhEia6gd7B3H8NuscYc",
  "key34": "zuK8dDZTFxeviCmKENAEpjobVrYS4AHfMe2AriU5zEYJveRk9ppbzot6dHsynTAapb8WFp424G85c4ekWW3JrLZ",
  "key35": "2iuk6WZi832KE5fvTEHPasSdimRt8jw6aZKuurUDcGGbVvRJwd4bo1KgmoifruH4hsHSYm1J1V9W6J1qG9UevZgX",
  "key36": "2i7CMmoKobUzRmfguyW2VUJ6M3U8SEtC7gEP4oYkpyGAs5LoQYeDtffjqvqu46mrmqv5B6v6hwAkUk8rJK1QJZZE",
  "key37": "5dq692qaXJSFZEhF2BQwnrDjiwJiWcJ91P5yK56P5JATNYC47uifPyd9KJmbfyYzi3CgGvH7TXJ2n9eSExtPfJny"
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
