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
    "2uQK1jnRTsRssKL9ZUncHWmaXVQVyV8G6DrQbiUfZKcguPPMkxNY1KBhkyX3sVb74mCxrJuRCm2FWEiFvKLLsip9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yHEUMCTJSJ3poqucNBjDuddi7pLcTUbhNSmDAMYoxe5JnaL3TRtku3gtq2XZ5sV8jR9Y2bEvmFKo45UXDJvpYth",
  "key1": "2zMm7RGcKhYsacuEoWgwLiBrgvzRAVmWyjzvCxX41N47PJgdkCcFXGAhzyQB7t8gSwybydmJHnYEdAg9icfuVvfn",
  "key2": "4fXL9dF8ocgZGL19KTErTdDfPneUeTBHWZtrRFjZMbZ6SaoFBkd8tnYAdwEAKhN4qjBJKZPYr6r7dhJDn6FWqm5n",
  "key3": "3dj9MQTdqrx6EVA1LTtYsmuQ6buCfkXaeuBBS5UN4QRaUtFtzpGtPVC1VQKnPW3zL8bnc8xzq7NuSfUBHkyo11Pq",
  "key4": "3PPwkw3zFZLXwPxSXzdgmak5WpqYtXAS7eESSD8XNZpW71FZXj7nMBuftG43MfeQ6MSfXWZAzZbzJmr7MSxytjLM",
  "key5": "4i4Wk6FzfQ2Pb8zYSzyok6CK9uVHF1wddW49DmzWzPwCBMe3GS5oxAE38PRqxozUiqwt1aXEdX6JLabGa9ezVFao",
  "key6": "5pZSfj43wiB52ndCHVRb84WfGQG82QeP9BCqsiB8mgpnmzbURsbobeQu9NT3wcipFETvBumnissuf9BuzaRvrtJp",
  "key7": "3cUXTHpbaoCvKp8PZEVvECqGCojeqQghrzPjT7yKbRY2pvnrr1UmWDB9mdk9usMQ4iKC3hqhhWfCSv6iV4TMf2kv",
  "key8": "7H9w76fXdL7B2CmBxVjX4uvoqVD4FV61Lep2VdAxz2a7pck7xcDBfVity9qEoKhmbYd76BsaYzoKHGoyVhNfVQw",
  "key9": "3gCSKQJGuUoCVWUB8BrkYpXwoqgpPeVZvNaPoKWh5erCHUSj65eGeYFvgannK2i3BuFGfxg9PWnc8Y3FpheK6H5K",
  "key10": "2ouLrUZbQUTJFXbbGhtauMY2zYQr7mqQYBqeBjjeegBpmQo6gNNVrjJenAsVvFTJWK2LAuNbQsW8zaiFSA2YTm2U",
  "key11": "5Z2ETC9XKCh8YCfeRhxgmcHQqEWhSodddUeuccVnBPoLodYMkubuwefxCYP2CVGcJ7CtyfuLwkW88optiagxjNd8",
  "key12": "5dDTuoyxeiBLuGkHPoaJGsRdeCVKppYCcz1WH6Ebuac5Rq3CA4j1PAZfHPQWh5cfchzF7ozQZ7tTU7ZLLgLSVsbZ",
  "key13": "ZL5gmK1wQ9qG179gEh3Z949M9kc9fn9u8hbLNNukykadpTkNg76muefVXARFiNJ4E7asvgF33PrxdQ1jQqPcEKT",
  "key14": "4c7XBMQsWpM2Jx7DCKLAH5UD6Xj92ef5Sas4dgscaN9dWXE3CKVUxQH1DtsyLqhp9G2E7DQg6qh3LHJZa6N11UAz",
  "key15": "2kfS4ZEqDbX3svoF1PaWvW9bX3psAhoWhmjsxkFwTzb1b6XQBB5stUbqgqhY6J48wWXr6kZhWhEThjKefMna4E8E",
  "key16": "5su2THp1FmMthsU4V74quFQswbwEDKesGEFhHCMEcf1KWEpsU1ezhZB4KRv7476iKQ7cJ1TzjeErcDfhNDPHbDK5",
  "key17": "3ohztXGe2e1ric7HkQCjzYFqdWtYABrpN4J71Jj6zxCkrAZpynaqyTLPUEzoRbybjqQHWECnaHM4veaJcmb2wNx5",
  "key18": "5mCExCM92Qy7HJeVYhJZacQKac2F2HgxmB5byS2MdoghGRtAbAkJg63YUPtHXyHUi8z24uhfGbUeYjr9XgFDGwmq",
  "key19": "46c5ceHQzsHS6NMzpvAtuFRXRho71NQmJ5GyBvBX4EoRWVfAPsCkHXyTYotTivyPbPGfotTSf6nn4THyeDztk8DR",
  "key20": "3U7gFx86QRjLUZpFNGWd9LojAzQAvFGxACnHPnqNh9EaU77qD8cSEjFaVvFweXXnjUw63JesaS29QNM9YEgiWUJk",
  "key21": "cAHUwUaUXBUQdpiMmmmZzVFTihbrJuyYQzBEtgoNn2W24JE7XkwV9ckjUpXAsUut6xBV9xgAD2xiVkts9JefFLY",
  "key22": "35VkhMN5hXwZpHtQCkcdaJoEs6c1MCeNXCkDsdZvL4nXQS7mMqWdxep22G9he7X1z7qPj1JLm3c2KZWpEoew4XUa",
  "key23": "2sL8aW8hyNo6zvRJjTgrvtKzvy31f4PmPENXyuW474L29PQADXGWgaKWPKmZ9YZNP3mgvcHk9kU3aRwNnGMkGAuX",
  "key24": "21LyZEWhNuQoh7FVxU6NCetGnM4RxVuApKfQNmdnbd4A3FZGUUps9Q4Gszuejeyy7GmNkE5EoHBr38nAw6hNwEsT",
  "key25": "4i6sMfkSN94EDjCkyWpyndkzzDiqKoZ4o2RK2bT6XXLDPgrcs3KCdVkKShQjcgJRA3j9YUJ16rzDfk5UATwoEBiy",
  "key26": "3N7RzbGdy1Rj6vdpbUqtRx15cDpS7twpuq3DMh4sEv7dDYiG4M4Rtxnr7KSwkzKf49pyEUDZGDD27iv2bGUCZ9D1",
  "key27": "5JmesQJisVrLuQF8Xr7cspfviUd9vh3NhU4fKt4ay4oVYZyzuRai1kPB1r3SjprDQ5MaMDKa3xLiruXo52TzEdYB",
  "key28": "3MS5a3ayTgdCXguDmFKtJZtyePhHTfRH6oobXNCE5Jixvx1zM6VHfrnYJ9AQZn8k5U3sqJukaD7jaXe3sSyj2SVu",
  "key29": "Xz3t6aEQpAqvptU9ZCRMHsV2aD5fgTLewjdot7fZE9HmT5Qz7eazV7QSXMw1pUz1DRjJs3xgYXMFSY7mPi5he7E",
  "key30": "5BLRJixUD1pGwrxxSNHVownLKh2H57J5uMow3e8Qb155wa6sR56nENWaCiJce6rBUeqPi6jtBEDUaFYyJMxoyjTW",
  "key31": "4TFdQG3ghhWb7kvV1TLpn2sqrhmgaAymSS3kYNALpkX47HLjrBwRCPMuTfKmwvmDx1ec64xvm5CLxuAK5oqC5Eax",
  "key32": "5KRNFSCfsEiWj72x2n2PdRTzeVHwuahwqnGMs2i8aV7YZG8iutbJbixGoAXJjwP6MmLZDuTNkmxwu7usYKD1SqVT",
  "key33": "HHkvFkaxi5JvHUkZRreVn1KzFKhQa1MS3xz7wWNTqJJHQCgzUDyHcmRcGNN8DitUqMvfcNNZgai4GczL5ozSZTm",
  "key34": "Rg9DMbfYnCjGtitDqNTNUf5ZbnhFCPShxz5etyALQwCwCXjLcjeT4jJapeN9aka6G2ghmASZmkVTa6ZmGBtKVvZ",
  "key35": "2kdUSQhgn84JWeuAJcmd43tffNspK1SUkMCNde5JbVFYzmDLrVGZtMeoZddGNBgF9mGDjhBsL4RtTFKB2KBhd7G4"
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
