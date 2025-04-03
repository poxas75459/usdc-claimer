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
    "3FfP5Joo9mbtavyPCJF8uLAmvNrVXqCPXpxB9NWuGFRFKwLqJ5WXANP6rh6hNh9Jd9rPCy6FwJNa9PTkrpiTo2tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36avkDHPzr3AhQGtAokj7xksnkz2ATYXZkZigLCBG3519NEsuG4gCpuvASLAHLmB5UnyQLFYZvS6XTQMbMXfbzMf",
  "key1": "4zKH5SdqK5w61hRXX5Hxp3vke2Fv1qo1Vj6g62Fm1wR4Dy7JExAK3XMhLy1R1BEHq4m6HZCdhveiiwM3iZy2SLfV",
  "key2": "3XnxwqUS8c65x2rwa9iWY6ZpQ98pRJgZYTqAn9svw427ah8ytbELqcBJR3hetRC9QoMyhpWagkEngQteyRxSFRuC",
  "key3": "2npbw1ZLvNU8r9kA4255ZVAhGa1fUpR6mkB338MYZjg9pkKE6Scy612uzZVLA8FTcrnwDGy13S9HxysTXk7wQS5S",
  "key4": "3ZQeRmvPPPbkJGhzuSnsfkvxYxjY9ZEdKxMZCKHinUKLHwXx8CcauZDdzgwWvZVxdnyvGWsQp2Q7hrW8g7gxciwd",
  "key5": "2RSWhjNQDXSVkSYYwoDDzXDgcGx8mMfsBzHxeSv9Y8u1XgS3oCUSYuoFFnn1DH8dqUjckveNapVZNkxt2QKvPqBL",
  "key6": "5ZuSMcJTpd5FgDP1SkqBpuMjt4YAvyy1VuG7V2LQG7e4GrUFRjTxU8htXpTZ5K4bVMGSLGcViUDBQYZLMSUKEKof",
  "key7": "2Eec8ZBXAHbFH5m6mGtQMhPRYQ9kXAFGx979zVRRLN3GF4DWSDhYqRyqTpkefvaDTeqbr8WyADqvMrXUeTKu7V8L",
  "key8": "L2VtTmTnEB6ib1DSzTqJNMNNxgDa6hdcsVMeVBPdMNDdtygRjRvQCoFt8nddeMjZhSJSieue16HTzc7JCyaefDM",
  "key9": "4YLnZ1Ur6TXu9FgToPxTrTWisKbqzkQseF6DDNbrpanwj8gMZfLqi7rdwiwuVixUPxCzJ9wCjb9f7D6JS8w3bbV2",
  "key10": "DnUpFCMNHzUQdvZsc9Ho7jSryunyqn6opRR8bBvW98oBQWtYS27iSJvvhDzYF1Yt9Cm3C7V4D4Zgu6orUqe74hq",
  "key11": "2ct2riAgYvvTyzwJdVexjTcGTthFQhVCAWhTbHE8FAcU5xVqmJjQ9A3zc6iYtqXMxzMiCVdS1UsqdKte7qYMfCDo",
  "key12": "2SUPkpkpApkCLCSS676TGTir25Ui2xyLzrfiM7ecWvjyGdZAeZBLKixmwTcp7y8v4wZ9EBSQmNu3PvSepNAsScLk",
  "key13": "4aTK4tVABsBRUWqQ3fGC6KwetY29QmxUuHrHDpPCkUwL7zQrMFKmjDeNKE1bPc5dY89RF7Vu3BgGGAyMyjKA69jK",
  "key14": "4gdnthfiVkjgjCSAY4sxYyy4bS3qrUjgzyPF7e13RRHjNkQ3kVfGy4TkDzbrc4tQFoAXsWWMimz3U8oCJ9aa8D2A",
  "key15": "2LEUWe23ZBQ9gSmPcUFJZZfv3aJQ4ySeWog4V8in5VhWcSqYjDQFZk8fc8YyUfLe5fwfzmKZ3zMU6kmPetKbTq94",
  "key16": "J2MM7yiSnwvJ7Veei1xX1pg58fURNWy6YUamW3Bn4GfJ1Vfy6KMv2sMHbt8wGRzC4528duyiZ6zPD7J6sA5F77K",
  "key17": "4zGzJwoW6AhF3rfFfiqGnoHKRYUKJZ1giFNtc6dXHzqX2QZL8Rns7Db6qrQWya3YcjouFuVMom2GKxgEjfFYP39Y",
  "key18": "62M19hewmTfg8otSQf4SBKZqND74smLSETrYeEvjgVThSxfQvfh8uCSwngEBw2u9fY6qFq289yUQSAa76zV93nic",
  "key19": "3KNtdQb2DdkgXYkTjCzJa9ZbPrLcTAAP9PUM72GR4PczAgxoppuHxgfxjnyFv8DhwFdnZK1V8EXMJNp8hwsrZcc2",
  "key20": "Hm4ZgLfLFzt8yhGNTAA1Up7SHWcghdeUop7JtG2e5fJUnYBapew3MNWbQvzjohEmsBeGDWDgtPBypb6fMWDNPkd",
  "key21": "3PiFbxC7p4zoE99G5v3AAiUPbLtVFpQjgpXNNvQVhBVuM288goY1ra7nQWRthHATKJx3QbegEAhFrqMpDp3svEJS",
  "key22": "3pKNfp4RF9xf2r8S4247JAXT8W3ErQhp66NVX5Bv7iRC7q9k61AZkCkkSNx872WrW5ZZWfdoYQ2u35Bgrs5GaqXa",
  "key23": "5gq7iraWpdcWNvkUx5jYVXSgdnrn4VKYxu2D2BptXjkuniuiiY6YpNkxpH8bQ83YiHWqwvkUaycTz811rEE3kwdA",
  "key24": "4BMFu5uw9UUPQh3zio4HRkwWfMam6SWgawSVeSmr4j2XCTMCWciHnxphkn6Qk4AQ42aZeiNtMNjEdbBKzfRdn7fm",
  "key25": "4sLMcipdS2Yvq82kH2U9p7sGVzgkFssS64WfMQq2oUkbX94jVPpPesEcRQdv1fA6FCjjGzk1rhDHAVb7quJfwBx6",
  "key26": "2oKNGP8AgDZ6Xp9KajTFsuHsZJVHQVBm4kGkSYgD3tfbGXAWv48MwUs63KXLUy5zB5GSWwY3myKr8ZFARc44Bv1D",
  "key27": "5XSTrsuuu9RriTXgqxthJT5YdAUcT94Pb5VnhpGubZJo4J6EWYQUDFRhqrDktMsNeGreMZkqTtHQDhNtT69PtrAb",
  "key28": "WS3Ei1zbMvepNxFk2K1R7RMA7PAbt9RzFa4275Hj2ZBmkRk9AYu8L63xLhgZa25R47wRfRu9AxGn3f7zeTSRkLg",
  "key29": "3ivKfr7hrCjrRKptBBHupGcr19SsL7zWYqD1mGBu5GSdNzrhmjc7nQCvcVqMEJoeG78XGjpW6p4VVrhYBKQi5GcT",
  "key30": "4y5gigcKL5EuhrqCxqb18C5RNiZMiJgUPvwS3tWQjCg1HTjSW6LP83pbx3cjoxLZZFFFpNJAjJgs1Ymrbyg9jstz",
  "key31": "2LNEN64rtcpFJw9iHHMxomPsR1pKbDW7fdxkSWSMoFXHx1wZrAwZjUVqZycayXZut7cn4iCKuAJwjcaWhqXKTXDB"
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
