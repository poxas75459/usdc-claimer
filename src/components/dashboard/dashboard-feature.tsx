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
    "5DLLwqTmzmsqyBJqidfFhNQm61VD86hZbBd3tcGxZGieATCnbi6Kq2PspUv7WJo8mF2v2HAWpQ14de8iSTZN9Uiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4zqNuvaLtd5hScH5HzspPw535zk3o7Mb9ssNL6GwYdK5XikcAx3wCgw7S7cQGpkFM6ESRfRpnCmLpsgPJ5uwKq",
  "key1": "24W7CUDPHaHE7isbVPL9wra6yi5ZRWo1MzHaboLnkNd9c93K9hTq7YzLuLk8KFQcsKn6WiZhpCYuLKQy5MsZ1GzT",
  "key2": "SFHS4Lri93wGzXMNkS9bfpcCE6hWgRh3CpjEbsCthd5ZGJ86bpsHLLcM2kpRwLKXxEpDjKHzTkjvCrk3R4FdFX4",
  "key3": "3w9iTRvkV2UTA6uFZzuZ5DAiqb16KzAtLDqtf4duVvN52bHNSuwAFt4HMpXAiY8YQhYdtR72HkfKG9BBJCUDQYby",
  "key4": "2Dtrr352JKYD2XfXMtEastNa8VSPzf5WpiN8CxetNHx3sRiVhmH2V2mbRF6WZTbfmaDwrwPya5kYpoAn4uytynWE",
  "key5": "5dhNUerLcbra2LNtxqhm72XZ5CCEFYrMWtuQx9GC5UgoejesFdyfVzRampMo7PmXcd3MLaZtuBaSeF3JwYDjdhSw",
  "key6": "4RZaLtrrheHieFhEPUGFP7LbvDPWHZfKxHHk66jzw79kwVAZ2KKpuoYTTtMtiu1U7Vcsoargi8LXbzqKKBvDo45J",
  "key7": "4to7rfaLWdqZJMd4KeEzGdBE9GJ85FXBRXAh5TpC6gZZYHSucYFMxMWRCLEpcoEHD95ZUZ3CFK42Qmkbuw5boJyU",
  "key8": "3LYBTBWuEYMQYKrumtdpGCHRRZVoBNNY43HGGhVJoyjfYJEpnRw8QQaQnGpffD1qfwfMCv38mTSjvaEBMi24tS1p",
  "key9": "2ZMEDkcqBE3Q6DUD6GB2SRwWcio8hHcJqwgwjZ96MCCdD7d49sdMprKn17J1RrocjpcvRhT5Biiy3GK77C6dLBM9",
  "key10": "Np3MwWiHDoJSePZZ9Jd1TvvrxF2NpLiFifhEGxVbSuazJ6BmZesgZXUbjGdqs8XvmsivvETvE3MxF68ukbYp7EY",
  "key11": "sPxNjeJUWuczgqtj2LepTPuRw4FsAyYR52oiUu3XGbRjy2iYtxuYTKwvxjagY6yHAgF6HsUpfisv6pCEkw7FGhY",
  "key12": "55EM5W7CnTUaBNiwrsDMeToaRYQjngxtu8Z6FBRC3QZPm7fMREXoXsBkryUo3bbFsYrezrMGPpPWcpyG7Ey7hfHA",
  "key13": "4fM3bEar7XZMU4hrn4ZkPZeT5AhKkgSqSccdCacKZvkyLWZanbcFjLM1A8qcrL22hfkB3AKTtsGJR6cDAvSXiv2F",
  "key14": "5qrRume9PyiSs17pS42x6qzsnsU73evPmZ9qwKmh4GCzKWoBcQAn9pQ38qNUSofUwoyDv2YRJ2AxF6qYaY8zaasL",
  "key15": "ZtEiCBcdahyZ4sWx3sRRTcq4Ubqf5NV1n7iBcRVShJ8uPeUsZEwhWgy12MZmUPMjopp3r3v9TMzpNvDVE6PQKdW",
  "key16": "wqF9Yg4TfAZPUL3jo2ZxDajGHg6DKCr6ZHa3NBnMTnoTmSEoTz3x1GpqJwKBxxCtKKU3Vfk5Rj7RpF5bWV25je1",
  "key17": "5MCqRYRv7urvLcTVfe9fejntjyJzCY6Efidiq6eACieX28xq4u1rhzufcJyZsXaeczd73137Msjsb16PxeAWUvo8",
  "key18": "3EGrBiSxUvEywSBWMk6vt33nUxWPEkZsfMKt7bdU9fwTH8T22iLL6jhLnvhMpgzkbC8q6ARhY74vbALveNGQjHeu",
  "key19": "4YhLcRTgvRY3ZKjH8fXmh1zdM59vTUzfRvwiWWHb1Bs14Xx4jwqRdR7uiJn41EDfCE5XVTnJZY5LQRhxVnGWCqSf",
  "key20": "XHWwj4beEZ5fzBz9rN7jVmjKqG6bZsGXYAVHYdGfhmeBVkv9xroWeAPL3vskiqkTbpwAW2cosbJUnW7Hpn4AJdy",
  "key21": "5pD7ZBhYQDM4yayaXmEeJ8r9frDsecMZ3ab7bG8DW5JVQ41sV8QKvgEW8Vdie1SArsdoVEf9o1vDmgC2xjsAU6L1",
  "key22": "5nEvgYoc9PXkwuEp5RQZWr7iPRhbaWNBvGPbH8VMW2wL8WCe1zAoLVuBUATd356FFhMEo28gHuHaAeCJuifGSkUe",
  "key23": "3esWfV9GJVdiQtmZ6Dz3ypG6sRyiJYBoGYbRiQQUjvUHnyMhHhZGX516CKyv3zwHZjeeMDbCfiBvAhFvvYhKst6x",
  "key24": "58GFhKK4qhrnwQUEc3zkSGgjC88cuTbwAqqF4pyDNaDxZfevGRb1c5YHYMns8xWu92moYZMD2wwTErT8XSxp62ED",
  "key25": "3WmVhT1Xmc7pu98PdBEovh21MTqMTRwijeodm3NKFnxfMwyrcSGB7JgdKm5THbHMRteTfgD3eHBp4J2587Uf1VFM",
  "key26": "3RPFymLs9crsMXjC64ueDbpeWs3ZpziiBCd3BKZSANza4RQPL7TjvtJyfUgCH9kKETjGYZeXd1te59kJgh4G4p1V",
  "key27": "4TdgABbad7MifVnajm2kdvMZ1AJ8wCsqzr5QEnz4oLQFEqwnQoujsveRfopZUqcUZnXkLxf58wifdJbRH1W4Y4KA",
  "key28": "4jKmALxpTjc5NJnWuJwvpiK4255ccapvvifRAPe3KJDPCmntq96yCZ49TaG6Y9G1B4P2k8tW1qqR8PLw7rXhQo8Z",
  "key29": "2SWgrYuQhcaP2SQkG5T63ugddzD88FJbSUikki3UHcczhBr5iSZmqFo7APWCtLyBvFNsywoz1NQHhXcr2ZoUUdpU",
  "key30": "2buXQEhAUrZNUg7ek5s33uiK5AHLNpe1okDDP7wRm1LuBRKkSWFWqgDHbbBRwccQvedSYABx1XrayDHM2qYhPddf",
  "key31": "eTttupPYeDTGaKs9yr6MabMACouzTNwxUdTqobZXhWuYD6sXnJHEzMU4Pr5NryrUxGrrdUiWftEvifXJ1BxPBro",
  "key32": "GQQPbaoN6kTS3EWhiESUzexd73mZLL7FD9rGhcRBLCvELZXpFnNeXFEHxdE3aAaC7yKbVz9Y6r8BxA55Y7CLhY4",
  "key33": "dmQzrhnafz4jkEqcY7tmfrUiMkhBW5doa3CjKgYondsLzeAFrvbsuDBpgZWhiyux75bzdGU8S685XDK3ZhN5sA9",
  "key34": "4ZKWYGo45VKf1obTVTLPNUYfjVEegv5HwE9FZ2h7D3kHyWM7zirWkzj85K8wddgjXQwov8U6tLhoYgYSwzJo6FT3",
  "key35": "5cVDXbqjueJHHd6UPmGKZbNpbirLeQdo4PMNBsVxh1MGSsw3n2MSvesQex7oB1UchPodubHGWQww6kTwK5EH4wbe",
  "key36": "45xh4zoyt178hpXW43hR7PxUCiAt9NdF2iNii5DHJWjHyBbJPYeuM1GJfzRzF1fF4uneDtLRxraZHDv49831dLXj",
  "key37": "2kv2naVUMX2UWmr6CdbqfkZMUVvAnb3NZiWa1AS4E5cR9jB68X9kADhdHNZQJ4SSDTFSwYjURDR38oLUfzckBtN3",
  "key38": "3kD3h57Yk7exzfNSQ1kS4j5ZNSZ7Bsum5TogNPsHVgAfW5vAnELan8DDkCh3rXosujZknT6QRVsYKg45gs1266nh",
  "key39": "5c8VZ9rtzYSpMQf6wPgKcVzTRVPn1PG8aZjhT8q2QJBkUaDDEKrFKUe2PtpzyV37tsyGkTCSLGSpRPCzrNQ6ZJsS",
  "key40": "2X697cvJk9ZRFkdMU1kiYF5q4ehm1wdo9qm3VqDRvwo727mhTTVFyT9SwQ2s5FpwnR8t1nD9MsYLekJjgb7eAQTC",
  "key41": "2bDqNp2VkVQ55rCB14bMCBbpFrqmXPWWJ2jBGutwLeCKLmh7WnerGQq2pGTjmZTWP3XNiy71XVHHGvKGnFce7Aw1",
  "key42": "QsBfaPW2CQiq2QH3wgK92mgGAYC2WN9EqgLpZzR1R2fQaffUqMjG55CddcLsrygR2FfVMARymGybx91yxaX539e",
  "key43": "5JbVGZh3EHneT7X55tKUVQzEAQBbMfmxVtBkAg3UPiTfTuywov6Cri4tdYAvaHuUCETNyyD8FQfwSBdPhLM5WHLW",
  "key44": "3EjdTNDrgFEgxuHpnPehgUYP6ox7Rka6YCQ7omqfHvraYmJAyrjYifQYSfu7did6DhYKYKwSmp6n3pyQmPnBCkay",
  "key45": "5rhe6tXDd88s5ohtXfV6Dame8fJw4scgF7UWV1eqS5fmRFUDgL7ac5KcFr1iv8iZpyYZbMZkC7rw2PeKCSNZT1RH",
  "key46": "3d8vreF4r2HvSYjUqxNSSoZnQxuhzVaUvpVgZtBe3D4ewbsnooiLMMx5UiScrZgmT68DZV5FNZBTsU8Z5eJV5SxA",
  "key47": "3BUAa99FsrdQJbZc8Jkcp9o45CExKCCqnWzzjFJQivjZWjdE1naURtwKFdeaQacH3AcjuB2dMMM9mZdGGuYZpCpK",
  "key48": "38vfngdw42WPL9wrFCNbG6xFooN1ckH5Kt6jcxrkinen8rLxnPS35G3sCnFnNj6h9T7eQ8ACcNVTabzAsg6HHrrV",
  "key49": "TwmPyvwyfpUo5J2ct69FaMbLNKVjWut5sUA9S2Avy1sNcV6WFPZXjnMR2nv6Eb1coXpF1BpSKQKm1EcNH4GhF9G"
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
