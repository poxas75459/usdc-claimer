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
    "2VnDe1s8EbMrm73fTFQ5hq2KefERBCeP8aVDZS299FhHqe1WF5UwfJ5u1srqdyVKA5kA9bzUw5kerJQZ3XPs7vAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x6U5HjPvHLNanFNKeDWpVrZ28BGNsNdxHitz7LwbW6yCZQvt7tPdehRxQeeuMtddxUUGRhGNSYg3TirsV7mq5HA",
  "key1": "3ppNsuJrQKTzc4mGyyWMr6erxnwrChLbtH1QftUonavd8D3Zo9PsuZNwdPMXaFu1oN3ogF5ehf3VqbLj8og4qSbc",
  "key2": "2UyeMyCNiKwyXFEnTpq7C9MtF2sVJsmKcfJWwdk6WXfE3ZGN911msUdiSviANS2ppfpE53qn2SCaNtPRzsXk9X3U",
  "key3": "5BH9UzrRNC8PXH3BHiKpjJBSH3WaX78vti4mKAXbwocD5hr9QjxLMkvd8ExkdkbxwQFizLX6EuV6aXsBXiRFrAGf",
  "key4": "2qfPbwUqjqgf3MhgNMiAJqhrd5KgePak9VnBFrgAgnbjor3oX2Dw5JmDdfEq5A2sqpCMArpJywmNH9WVhieaFwad",
  "key5": "rGzzWects1CwMx2K4jH8ZMaMt2Sv9DRYbe16g3puFt1NBunkhe2mBCqqLSYLHbWFQvVSYYi9nnQwtf3AhDpttmU",
  "key6": "5GcBBKkEzNnzLCj6Mn2sAckAm8R8exhGZwc2St5VodpEVYe1FKpjXgGkTH1iKgDC9DZ7YzCbBHWToJrzAkdnfA28",
  "key7": "v4NQfZQ989Xu9xJ3Hs3gZrtyvYt31ptfDJ8XE21pa9Csv8YBf9vVmcfJ89tWTnJeQhBFy7tXQmAtKu8FR5JFh3Y",
  "key8": "5sUgMWNPWziBTXhboD1R7r4vF3VKyAfS2BkudZkj9mptp9syEbfwsHZZWKLDCun9cewUjxDGQbSaafj8BcsVWnxU",
  "key9": "3XmzNtfxF3MH2BS4q5RpQCd1XEMsw1kR2jWQTHQzPLM1DLuvLGwHLavTqjRxV2pLy9SHNjwBg7cUh8EEqV7VnMsu",
  "key10": "5epEo4U8nR2YuWtHL2ghP2h9kv8H3q5BzZ7pZxZ46BL79XD7BJ38ZWUyphhfJMRemNWcqzdVPQaWp2KeATt9q9T",
  "key11": "7fhSXMQBpf8DfEtY1jv3Ho9ur3fbmpEWHC8AdoY4UxQYX6qkAx6LoLD7VVtN6nzJHgmwbeZjE2fGZCDmqYPxLYJ",
  "key12": "25skgL26Bj3c5NKotPR5S2GL44iqJZkzDkksog4iy8z1bWUrwtxBjbBpPQ2xh9aKjcfHHvbMZ7J1rRysqBiUdx8Y",
  "key13": "2bcE5hT2nQes7oLCxDe2sy4D26EiR2WYUXp4AE1mQJjQL1CeDnSUnnbyHqJgdZJxoypjK5DNaxXuHpRCGPKVEd2i",
  "key14": "3uN5M1XSFM5z52ToskAAMKWDk2wrozJwSyWZ1xh8zV78WLRpPMdu73qrLDtb1yGBKyhg5gEgKhr5djhVZckWXBmo",
  "key15": "2feqxSnPSNEcpsCaScyz6bum2dZTu56cutkVF4pD5oefjmcHtkLrnGQuhHUp63BseBoT1GNyG7n7hY1wH3jdDbKh",
  "key16": "5yn1WdAZ5By56aqHuw9NsQ7gmZTneaPvzpLEJ2DWxt3o2sZcSP32C52hTAeePMU8Z6H79USY7T6iiH98Q6B2ckG1",
  "key17": "5CC2V92MZNAekUeiFeRb35pCiQq5g1YfoAe5yiksu6uBHNJijn2NkBgbNRUvokBDA4TXYkR1hY8jaJ7tvGifkAut",
  "key18": "5xjnVS74EVLNkY7thHvDTuaSMqp8GD56tZwDQy7xMdTyv5aHz81KaS2m3hVg8EKB87873Qd7YhXAVGU96Vdy9BVc",
  "key19": "5xcD3hLWZ7ayqxVT8QYRoevx5Ur8riWTGWGPvnU72RaoXCLZkVKzMPdcsuxkX7tajFpN9WhvmZopsEHVKCyPofYi",
  "key20": "4zgyqJBYzVKuKvNuXrfB9YwjYyxHCTmcE74jf7t1CVqCJTcmkY8qFtdQv4qDruiX9ubmqe3Ni7twxSrNMG8h6rg4",
  "key21": "23n3FmS2nQ4ZZdopMiMQJYhnoi7Yh4Y7ceYy31QTzqLw8b2FFQHvYRHSdYjnKHn6XiogLhr5R96mVtcJPeo3CMh9",
  "key22": "2DWkWQ3JHeH8scmTLtrwBb4VxSK8ojm9nnhy12N8KMxtMo2P6NZ9YhueTh9wG9ZF32S2RuDo9KXUwck2MJnH4R24",
  "key23": "3gXiim18g94ZnGhH1ktgfRTNmua44BrWipxj2pkLMjcs2tFkFpWFeH5MC8CzS7NsHCJZoJk3KmSYq9oypccT2dcb",
  "key24": "35qf7rdKS81MaXWEcamuvCCrMa84pXmHii7LEujzF9Lnz7mBjLUDn5TdpfTRb9kbQ2eKxM3cUMYPTUTsDvTcasbW",
  "key25": "5Lvm3Vf6RrwRWK3w84fHfPzEpm4zW6ZS5tqUNty3vfoBZw5SPLXDqVDTJfhrdW9mPmURcQfwGuacTqvHXXgc517X",
  "key26": "Bd3EsG3sdpp7doVKc4C7uudDvWGLm9QvS6st4ELdsSiYSAK8mYsRfYMs5ZfUKiK3ZCAu81t8GkXz7LZStiW78AR",
  "key27": "41ULJHdnH8j6AfXJ9cWEmDQgBvhVX9AHoppvK4ffd5fJWrX7wsAQAi4PZWHDZPndbVDyThjVtUX4EoV7AzV7NpY",
  "key28": "4xaHVSzBsxfTQJ1oedWvbLTWreGb99boen1mU9d2n7TeLdWj28ku6Z4hxUvALrcYgBeUGbUUAeERVs9Yj2v6JwG1",
  "key29": "4aVTJ6XWfHHPyAhfyibpVmZVEWRxuS2iTPkHyWzLwQpemcbVU7rbRFzNM1VZnvWk9iF5FvqzCEa7s2N3kz1KE5kT",
  "key30": "3rVYXWVuy1kmjos5hgPhrCVREt5pbuweLQw3z6G1EPCjwue6rzJJ3JRxPdkfn9Y7kPrJhX8HtxEQ9SqRbXRk4RqZ",
  "key31": "342SEuiUu8WUQ1MQTs93JyTXx1inX4GvSijWtWZ26qEpRnDQP5tpaVPJYqVJh5PQbWuuUjVVhSBw1YcLavwKi9Ug",
  "key32": "2pWUahM7fcqwxhFnASVE8XoNQjoJzajM4FkAi8EW7D13N54k7jRgoTtBD2bwpbatJqLMPr7SFiFppDXdLQzwSXKi",
  "key33": "4xDYDav15Z6r2WQDBH6FtgPfbmygvZ3zxoXWjfgor8crRc6DVE5pjsCvedwuCbQnoE6qv3EaUFh4nWUR95ux5MF",
  "key34": "5xnqYMzE3nbsjde7R9nNCvQkJN1tYrSxYBHhLhxZ6agVqtWz2R6zuK4keVXvozS2ubHPoavLEP7JCxgudFgL1pCw",
  "key35": "3j49eGQSjv98QWXVCye1KLVSzYrrRaMcY7ap5rYCWMp9foL4A2gkFKUiUJEGwViR9twBkoZk1fvwshNeANDdgKV5",
  "key36": "4hxk9vmj6oq5j9hah6ZQYLoCmkrgZNgwLj4ZZf5zZMURF95eoVtyrUV6Vu8sbEsJCudXx1NbBc8vUY9fUkhF1YUb",
  "key37": "5wWSeMgfjfEFxx4mnDM47ceJUsgLbBEzgDAsc73SN5hbiyUArHwvh2cS4FANftDXUr4KrPHrZyapMLrJNZnZ8EFo",
  "key38": "3Cbba3iP59zqgc3oNhy7uGdUhPmSvanxCRLFxLYCZQxZPYWyecqvogUduBmmZDL5A7ekmdrrxpjB8HZ8b7s9zUxT",
  "key39": "3AAhk4vzCFC6VkGnmkVKr9JBn3PWuoAy3LuvG5gsRFq2xeojSuH6RxJRK52A81Y2f16LxBHUEDmWA4WyeNqH9ZRe",
  "key40": "3mLwdY8CY3U2eamwcbhmRjW9v7RzSPWHLQYUSV4kchwFJLgGDwFvZUnDSqyFfakU2yWPBvQkRg57FpsBYzwBkGrf",
  "key41": "km9dSZwEZGn72a3Z7E5M6btVSSwrZYKWi6Exe633Gq5LwYMgGVhqo1DeB5m5NX6KAwwsjeFegDVi8ijU6FKn6uP",
  "key42": "45rs8ZGMVW4RDPFfG21jXedfYRxeCh55hteW4aYW29fmnipheMh4Dm14qh8Ah9F6t6DjpHFghBX6zSaywEtnucwf",
  "key43": "43UekPcji3QyHwFwgi7CT6AQFfGyy8MvtoMa5DyvpTCHoDhYJhof9u58ovqJDfmSax6h82Vxt2hh6VNAYoUC5hfe",
  "key44": "4sgFXiRPdnhyyX8DiRU3xns4j4wds8irHbvYw3zBz5BSF3bv6KmpYPJv2cDDLX7zHAHvS9th9qzqKfPatgkQCQco",
  "key45": "3YWWbYmnh2eFw4EVqmJvbfhCZQgFQT1HbKqYtcv5BGPnCGYZRjU7QrfciGh3usvkiECWB4YVh96DpaDfNaAAKSx5"
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
