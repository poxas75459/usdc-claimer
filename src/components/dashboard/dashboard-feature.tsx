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
    "3sfsv2n9c2HPErb9ZkxHmdJPfP59dX5rGTbTT1sCG7h4EwKpQX3btTYoHMAycHZXYSKfyuqVX8PS4usUwjvkHi6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZnwFjxbLVBA6YfpyamJYh8tU6H9hRYEsdNF2SKfGvQscqivcHqzY3NEML6Ht12TZMU5xAAhcMT3ekvXiww2tego",
  "key1": "5PVqd3ax6hbqhsJcG4UzKgJCkQqLEDvit6UpsEght7BjntM5rte5sKrENHBnGCUcS8KyrFxDfWVgtc17pKtTFJeP",
  "key2": "2TSqtguxR2t8s965CTwoGKgyLKB5mcp61FvQEqbZdsKzZW9JQ7GbojR7Aoh3WM4vd3SRRZNwhwvhpTXXySNiWC1m",
  "key3": "2eUE6omm9GWj7rXR9qNPaozzEpcu4nNjafwjHTYCgzw54C4xVRjGzX6QNkGgumdiUBXWTHtzvcJW6oatb7yZDGvS",
  "key4": "E8xRNcbEnD2Df5kN94pbbvUD7KQr21ndJBjUniyRTYJbouBx2y4QwHVfQETSYR9qYccZbjs2Bnrs6CYJjQpC5df",
  "key5": "4hAfdNZ7chDeuW5Ya7zH5hd8FwZtr11bgpfJwfDy724zLtuyYTFyuECtunPiTsHzktASbqwvE2RBEZEdNtgySRCH",
  "key6": "55LnsPB2cGwXsqCA3d3b8yBfzLhEfXZWMA4NYce1G1btyzNsRas8jKtxdnzTwAuU2TqAXyNJwKEAoa98aQDH72Fn",
  "key7": "4tC4M8pwJgefXJqMaMBZQZzYBVSxqZBM5KfZ1BYWgr5NEzyDHqUPSFb6NKvU19JNiP3ZcYqF6i9bevQ5yj2RcqaH",
  "key8": "yyd6xEatQhv2HLCxVUwYJSH3TYEnLasFfQp13GVNgkAyUhCTSWiFFASt7zXwj36c12TCA4h96NgFQAFGVa8sTTV",
  "key9": "2QKjzWxVSGneQFjEpVfJ6tdYtJFUdrzr5VSYAN5WrmjmH2vgkqUvwquuYBj1ZV1bGAA9ZumJ5BWVdyS65EP6CkeQ",
  "key10": "2rNczssbwM5Swp93y2fBd8hpjbmHPpKLWo8kUpX1ZgPZRbTm9sYLm1XM59eUbGcmHntvfX6ECf856vdoL8bC8Phk",
  "key11": "3MBxdUSxDAQP9m43xsaZ6gorsqCa5aHLeqJJ9JcF9KjP7Rp4kNvnX3rfLfZHxHei6GqQdqpEaVe75dntynuQjkJe",
  "key12": "Vi4kjySMCK5AcvLA2uGW4SMzQN2C8dy9n9g18AXVeYKVqCZxbqHDYrvfNEF3Gz7qJq7Jdtmxuu2S5TfUncLn8rH",
  "key13": "Dtia9imDngA4Kh5ZFZBcL1UtbVuKwhGhAeADfPUKv1i3FyAq9qzJwp86eM1trXftFMGtx9wmYdjdcXofkZFrFoF",
  "key14": "4Rywoy9BTqnFsR1jVjmbCQJzPKbcNEbN3H14BNsPuUuvrSLf7TRo3a6jrdifEW8Vai1uJF4aHeKt8fxPALtV6Dsr",
  "key15": "4QLLwcaRhfootTjQ5crczRgbciU6iSgpqwxLixsWnWjMGFTofwKXgLEU9NBewmQJqpGan5V4bptV2zp1vZm7n5H",
  "key16": "5vdkdMwsQbxrW7tSLzQNpKS2HpkKesXVy3YupUvLnvW4w1guyemB5yitQWppAypPLgcdexKQFvSvCsQs5x2Wvnjd",
  "key17": "5zyVa3DzzEZboa1BnZZuT8YGfkopBLi2aoQYhq1wLdakarYqyaC8c74pWdzpbp6JKk7TcaSX8JUG2EufZWsZsUPs",
  "key18": "2LVzTt4Jv9PteatzrHqJfYM5FQPK83a7juTHYS5nV1dykb1fkJVgsM6iXZ6zZEXHB3C53yMxwUuE8bdpUiP18GKY",
  "key19": "24twPSBBAPybR8Yr1CpH1sQ8ujTc3Umk7Wnow5BsZFBkkxr1p8TegGvUzum9npsfhdEYKNLUYS7bLgitQ36EhQBg",
  "key20": "2xB7ZtjXfh2xB8qVx6JnJ4jGCjry4834JZ8uggcaeR8XuL75G6NowM85PNoBBo4ZrjuT7KN2pxvgpzm6uXTbf3NB",
  "key21": "2btGTc1tdRLwMk2CocNsinzWpqU6uAANK3DeGiBrJKQ5H52PxCyP3HN5C5rdfuJi1CpkUkesxx7KKnhGtBwxeKQW",
  "key22": "2KKew1S79TeNJVK6o3pGvy3LDgAEucUCZR7tD5yCfhQPGjmyHKFh5GYPWuL1MpPpmRtRXWAaJhcJ2nQxEhREwfWE",
  "key23": "91E9YckTXVCBNZbnXBot8KdHdyZcozaPBBg12tVTZrLZscxWj9fjFwkUXF8RW6gnfVrpaitjbcStg23R9jPrcuh",
  "key24": "2mYF7mT8R1jCG3mVh66ACsE4ToLWgBcbieo4XNvhkGtoMEVUAkC6F2KbNf2eJjsCGERTz8Fz18DLv8YfQebKN3NE",
  "key25": "4ZhwrZd5fPeGZ3vKH6QXkMtG1emVU2hQLBUrjYGzVM8M6tNtdXedZJNDNJFwq5jr6d4i6wtscH6qChQ8VM4wjWaa",
  "key26": "2kWnV1WcPNsyBcPEg9CZp5bn3dQVUN3HtZyU6btcnysXWasje3A5tVdQ4gvYbGkaNZPkTHDWxLe9pjS4gpXCb9ga",
  "key27": "2HnuJzuXqLMTWeiL267H1gHtmZPVEM558DoCknHb1GvpGtxDNYBpeVRjgpZZToLVzis4kmgwzcGmLh7yXSLVYn7T",
  "key28": "5UQvRK1E6CRk2YzVukbf9xNnr8woSfs3dDYMFJpufbLyVyQ1HuLuZiCuvWQdFkPMrpfe8V3sr9MbK4bgXatqYFwH",
  "key29": "7o1tfKWY2P8Vw5xHXfNjjvyFJKMoskheaU8kznj7yGqbP4dPP71tBAPRxbnHYvSzBFjgvGDX8DZNjBtvhom47Fo",
  "key30": "2yxqtoANcY7ct2AUwhqFpu2MMkRSM7WbKtfnWj1Vqr9mneN1xV8QN1JXsmpTP7cpiMMPk1MqCiq4N38VmJmzqoap",
  "key31": "2xQA9jRqY1SSSbQpWcuuPdv2n9inLPpaebSLrpSYNyqUueotiRrdtqcsVsC6zx9P75whNuAMhBeMTtC5qKnESp3s",
  "key32": "DC92URWAvgtcVGuFbkge5oT4LezTn5As7PjgL2jSsnFnDaLoWatLF8JqCMXAFhotPsG8zod68JJQfcKUX8mavxE",
  "key33": "4J3Bgxxkaz1tNJZa4ePAyakB5GEdZnSq9LqdAwr2uZbMFWk9Nzqq7kLru1FtrVLyQ2ionMRvatCApzUY1xRcXT89",
  "key34": "4g1Cr1P6SqWFfYEypeg2ocpvZthLLZYNXEEPWrHMTGFFZ7tAc9Mz3fp4rowYs3fpHGyur7An9JvXxDVSf1FKvJyg",
  "key35": "2b8QZJi2aiaQCr4EMAboA3ZXFiW2UjY2jSVeBUihUpdJUup3MVTKgqXtCZbQbmJnce8GTAwbM9zuoFGhA2BQgNnd",
  "key36": "3jVis971aT3oLnQKejY7B4vChKHrGmQqDY3EXZw4BR1eG8Qkjpgn18948TUPtDV5FQChZWJmjXq4CbgkqpBYsPd4",
  "key37": "3Ux7wSvcakRv8cfv9nCot1rYUPEdtNHedVNPkuk2cprf1MaHTtpmeFfK9jGkMfq3dPYpS8KY7hsdkEXyLXsRCBLA",
  "key38": "DjekxjncCVgubzNm9QFiAPdsBR91sAjH5DurCCY6ZxqrLec2bHRnjhR62F65ADGB9WEEKKyo4YNrybTP57RcD2j",
  "key39": "jwbBBmZ6hKcDb1AhSGywmmCesiJq5Ex4f6ukfrnHR3GQaceVyKpy3PF4VV844zTrgTtQv5nrudDfNJa2sMdBVpc",
  "key40": "5PQS746xBDxdgJefyW7DytUw6jmNP6hbZLDdaP1BidVfrwuL657xeJHSvsmgxU1ESADfvdZfMgVNzq3AZZUfmG7Y",
  "key41": "4EefXJfFBW1yHkvBD176Y4d611dFBjd15xuc2u12FeJ52zYrSchp2gnWHW97xGDR3KkRxXLwLbG2qh8qegaBS28d",
  "key42": "2sa91azG2FHCwapxQWEh5oUaU44NdmNSrgop5bdpqqd5aKT1GnL9KcEVaSNoJAkjsYjprYVW3FpcagqXpcae4a3p",
  "key43": "xeBwG674nGp68JFjNPp5qKGav3cHf1EvXz32EqnpA6GE82JQ4q7QjQvmi4MNfx3i7QmgEsZSAjHjSM64uNQXdvd",
  "key44": "3ZncN4vzpUJtAvMa4eEo8TsrevLY86PKFytug6iPcu53kV7sv8v1giFuftJdoyAwG3u82qs1gPdH1QRVPMq1t5yS"
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
