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
    "wYgoXLyMX1haH15WsvUeX5Af9XpGoSk1HCk34Dv3b96FzPSaoj3QCBS9ZqMsFRBC2ez8CQRrsrY2hgycnAPpTdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yb6CrwY6kiB7vp6XieNJALgdUXuDdKWeXqugBwBNSGbTgWHKzcH5WR4ameXrr2sM2jHPCHJ5Bwk8o6qeZL4yQbC",
  "key1": "XNEKT9LpyYihRmKLRZ8CiE6ATsMB4QeiYJwMBDbSwqXGAJZzjB4XbysRkDxbEdck1hN6z8GLjoYbh8EhuvtK4HA",
  "key2": "RMuXNsMaeQoZsCmb4PMbqyzdCpo6KzYRkg23DvNEbrUJ181E7nHjDdMHkiL3ryH1j6p4pdJ5SySGSiasD12FRXh",
  "key3": "2A2DXyDv4ogts3PLD2ee22aDxytHb5WF1KNA51LhvHvq4edMhbwRewArfkpgiEaXYm7mELd71WZxq8cDwuGtfhuf",
  "key4": "1YJG1bTHkm5QXhETpyAaQxqGqhsSvoLw1WXV2kHJjckEFkbPA4vs4ZHdKjJTX4GQRL7reVkfFP19wEqEZ6dZv5p",
  "key5": "3LPJjDRkmTgr25YpdEMbVGbFZmrGhRHQmnXLsUJBggADm6vYGi8k7QkYXwqRarsbtdkFXkTqm39t7jzvznoWxMVP",
  "key6": "29xUoEAAyWgEUPsm7N8mssPMVgBnNW9DkLRqVqun7UFca15a2smBYy5mwTCL7UAZHFFmwL7AXDxadBJ3C2eypUue",
  "key7": "4SSjaS9jzC6mwzyAPMhxwqhEUvFWRa9SJWFFXwkGaL8msa7CRmw22Mw8qAP2inLj1bf2ovzQ44ZXN92GfgGvQi6P",
  "key8": "4JH4bJKTvUCxNUmyWT9p7xz1X44NWcza8crYH4ZiGFhG8QEtPWSGigmuTwQBPa9jV1xnmyMFrNqvJhN9v3qaMidi",
  "key9": "3EYKTMVLENLf1YqEKbRLDC3xiyDVWma7ehs1tVW2atWJyEbyMfdj4RjU4tHhUAEHtJWSxQBF34B9McdTFEUzn3hS",
  "key10": "3Pjsro9N8pQ5cuCytVZF59DXv1xiYMieAmR5KHnokGQzPtgZ7no2ioDMuNefGa2Mu74jZ2PRBESCfmsBxDZiN8H7",
  "key11": "2UatVxctJKXnmYMYC3JmrrrRiXmZGVx6znEnhvqScnUyD1eQCuTpdLPKN4dikYs45gpqifgRjafyv6xfNRTnun7r",
  "key12": "4RGDM3LWE3B9a4NHjLWoPYP2ANuScVvXLqELtHhUZC4qy37AK57PM1z42e5L69Vh5xYkzw8oUPDX5E9k9yh9E3Np",
  "key13": "28boHABKy9EhUQD2kFco6nomUeuw117QJ1PX3EgJJpqrPdYEEfp3sXgKqzvkHyt3saYT7FRjad6kabpskMTvZgjv",
  "key14": "zdpb3145wX9JnN9DBQKP8Awn3dH5C8T3dC6DBmxX7Kk4Scq9SqLa8jCPaFtbtSYGLz3xx99LDz5RAsdN8tqQ3Jq",
  "key15": "3uVZfPj1CEZeL2mA1pq17FT992FEXrmSkH1SoyW8J47M3tqcYGYKD4qK1HgsenX8bwUhQNHEVfH6ZiCLToVaUPDN",
  "key16": "2a1TajvHbWgcNPnKBW31kkU4uXwxaSaf9veDhvm5G7xrrhnK9S4r72VMKewJVsMvo6XFWRJs2boE8xAf9omhoLqy",
  "key17": "3szdvL2TyWFHAhttVst4psXMSJcFNia3MytJEZ5BLNhxwJDckuvxqaPUFGpjidjqHYhVP3YPrA55DnccCr6V9ge8",
  "key18": "5jEcAq63uE9qKVf2faU4ndeJLntduXdB7Phd5uk3CxdpqKfPc849ZoBvicWU6v641joyiQkNhL5AjoCAAegiPJj5",
  "key19": "2AwDyhL4NWCtESoLE4eTbqd65mywkKeu16AmX7J72wqTiSjRVHeD63QE3JG2DZhNtegDPiUZwF11QBrY3esLNPgy",
  "key20": "37yseV3Fn9iaFAwu94nfGSutWT5ZwjD3wNiCWCRu2obn3ai6i5L26cyJRGvxNDVqA71A6LpmmpWKqTR1grJ9gMAg",
  "key21": "4rJ3JTqApeu5UYF9eDYYa12n5aNjX5dr9ye6ythytS1eYJt21zR9iWfnyjfyU7UZcCJkMvBbv9wj2XfwRT6Ln5Do",
  "key22": "FeKbG92zDxVr525fntxqfQATKstQQ3KaAqP4LTN2y1qumNh5XduuV1ra6zFpeucHC7zgC745T1EhQeZ1WiHHrG4",
  "key23": "CHfWtsEUeep6puRpFjWCfCefUVp8stzfeyHBLiwBigQRUYn27ESURcfdaCMeXAK6YEienpL76xQuMzXHwUL33kY",
  "key24": "4FFFcjnEtxfGe4E7rPgiUZ4YBeEUV3u31oynb4QzjqXYbMEXqrX1pmkugG94DczivqXi2mvzi93wLfT2QZSoYErD",
  "key25": "pSi4KNaBfwpp4bTGax6Upwc8JYb6vEMAiZWVHvBuMsCUhbcuEMNxo5vHcdGLNDmxRgLMLRxgdrUKgpawTMYVaj7",
  "key26": "51tpWdQt1fM4yKshmyN1hfcZ267Pi7BrBytxN6KwMytzxf1YuSkgDtRdJ43EnuPmxntBFCs8wW7PZdvJCqVUAbeU",
  "key27": "5MGBf2YYduVejnhLizMbPNNzFWC3xVVNcEc4nkAgBxJkQP5KnLgFQgCYpEUtgrjXpcqzMwsLo2ocYvg3QRhy9yhv",
  "key28": "2uzGLL6cYzJcNne77cKGhfDyAdvGAYPF2Nj1gzPbNSFvAfxr399tMQdgWub1EYuitorxEVV9X79G9QNSPf9ozYzB",
  "key29": "5cbAxq91719SSa2Enus9V5XAJJHXzzxb9pLj1Ai6A6UZfwYqyqYRzXsP4gVQFJC3Ez2ghHbJhNWWdwjSKTS19xGQ",
  "key30": "36UxqDTS6rQBWoLm7FwA5VWzS15D6MyYm34PqJe7F4tbaY4SbbnVUpCChjpQLZ8TmMjTKWcuP98Vxr3Th7ayhCwp",
  "key31": "22aF7nyB67rCSktoC2DfKcw1qpUCtEF5wQEtVyb72xMnVqnN9jNj96Cbg8eugT5nkbP4MV3Hpv7ULFAfXgopmy4g",
  "key32": "2zL5fDHpyGEM5q2KbvaPcJBqdyoy7KV83gtR96e5cv81mB1vq2CUUBb3JrB3ZNKcgPCMttUznLKtDX9FyX7nbt5p",
  "key33": "2hCAfqGQv5t7hetQJQp5DzuVPom37H7kuBpkZL3Hw2UHirwjMMENNdQE4Xf7KMhrpQEgqQnPPCBu16LLF26pidaa",
  "key34": "4PUEnbRDWm8RGa3z9ueVKM1b8w9u3PhjVsPRYY8qfcez2CqiZMhpFcyTTALNgksLSS1TduaiotpxKNwRHNnYrPnX",
  "key35": "5A1sNk95VtbFj2kXMmsfFLWV5xZuRs3DzSruGoxz3VnMbQPNKVBx9FizHz4tD7Lw24RmbrgSDRuGAt9TABtwwRWd",
  "key36": "4BZnA2fUUTxnrEXHvBHQ5VvWxnCiRLP94Uad5zwctcrnSatQfYHUF33qv7Lo35snjwgsTQKjgmcT9qZjLBNpxBuP",
  "key37": "5oETPw6VnJRtYLPvDV6oVLX46TUXYQk3a1XBhC3PE2Py6Jk8rSkoaNE3Vdr44t1kRcE5i8NgxfjrWdf7ksDgdgr8",
  "key38": "2yqKZa4R1dQdnkyRV96gF7kx8SYfqA32WetpZg6WyuxgjCCHv8n3Q89Y1muCtYP7Ta9rSpbfvavGtK8memgRwmVR",
  "key39": "61zudFxq3jLaAanX3WpKxAm8CPei5fRx4dwHuXqaALqaQJsAopapwHBC1En8qzt4kiuqyASYK9qs4gyZP6eNXQu2",
  "key40": "jwDrvqKhV3jDWL2VEwSANWCwoFkCjBZDR2rnfJS5QnhaSQK8zvgztd42gT9mf8oVvmohaqQxRyzsybnDzKeQzDm",
  "key41": "3MXvQLYoQq84YVn4iAysfvcp3jiECf8TLfFLsdusDSprYNDhypT4LrGe3prj9rTnqgAN476sUoZFCff9B99XmAy",
  "key42": "2McQTYRGQixdP5nRzttCoUFnYWjHk2WgoBKhihBdERFb1oMbFgxHgVk8wx98wSM6ymRj1ftQvwpNHdBN2jrmDhs",
  "key43": "4WmfqpBYxRLYVbxCT3rL2E7h56YtPS4Q6GftZL72gGzB2VMKerA2LzhNUBqBCjtgBTvnkGTMXfqY39PtNzNzoS52",
  "key44": "Ya1xTK28vu21iZaZHUgT4jv55fG3fispVzTDJWoq8JmVDdK2yRvDWuGM8u5gTT14pTff8YeyV2wdJXNvpMM1rKE",
  "key45": "2RPEacM16eewNX3eZeFDBbzA9tyeofVS5N4Xobk6w2PMXX54qoTvcUfiW5nXQdaBMAeHABmsJriVmmwArdie1KjP",
  "key46": "4kLKbd18oe5pJp4s46QEJvCzBcirHQie7Sfb6KG5qkAnUF5oaxPVfT4wgKCxDpNjGHZRttQYSaRuRcSwSN7C3SCA",
  "key47": "5zc2rwE7WfWRXURwcaYMryd48tdnaBZW5qKUm3Xo8ZBAhHGyPN4LC4rFvFujQk9YWngu12mxV5ncGaEdeA5rqBDd"
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
