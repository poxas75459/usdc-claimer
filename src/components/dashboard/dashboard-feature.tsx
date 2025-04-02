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
    "3r2tbzKbJWhcSumDc2z6WEkVLQm34YhWifFtr4UhGMufw33hYUSGunDbkZgqJaRowkq7b2L8zyrkbcoN43VbVsE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42wNr3Df7ZMQQcynt9sfoEiWdXTjFcMoxSMc2uAJLCQoTJ1dTFrYrZLMErdzxDdPBrawsbvw4wdiHBkXbCaGGgFB",
  "key1": "3gd6BsQRWQDhditaKGJPAePUULkdUjRbei3qRaREKpT3742Zpmy1Q9cmcNBRSUYFTLzNGKxQVE3xQUkHZSxVABuP",
  "key2": "3ZCmk6XCTYfbU4RwgzBKs2ZvF96x38DmWaPcKX9aMNMM7hGXXk7MSMqbBMRg3sDCXfKydjFCDXKftXCBtN7pbMoX",
  "key3": "a6ZXfYFMsMMQ3NwYmdc4gi2P7Vutyjgnkm65eBgWXn7FRb2BNMWjLDiw6xPs3Ke3xVyuHXsY8ZiY6dD1k5xADKT",
  "key4": "3N9TMdhsdDL1QujwKGUT7o5NKQbo6YT1Lp1WmZHCUB6jQxQsGVPg9DDVsnzsJViPLCCxnE5QDtsr2vzJ1KmTRCh7",
  "key5": "3HCNZ7FFHDLpnVfJChg5jZjhYBSPTtozz9sb3EpeHvBnT1a3riER4QXLxRL6nSEbpPqE5VLDZuzXU55aLjrAd4jn",
  "key6": "Scobz49DkfiZ6PwiG8Bc2QtRfCqeacwKTHEQ7nSG8aDCd1dK6ryB91gomDZbbny6mctU36aSEzFPmrLTXPLj78q",
  "key7": "4J6EAdF9XnJ5TiFBn1LJEUjeTEZ3aceJe5GgwEthGVKCSHG3K5amuSjn7hug5ACqqjxRMs88SsctAMiox5PZKHGm",
  "key8": "3YkQKT9KoUTb7EdJ6hYW2bKB2noiqYRwvaDF6f38KGpFSK3u5P69buJvL5bDqepPpG3eUueF4bV5i1JBQQ1VDDby",
  "key9": "66vGBXmp1p4pkXuPdvGdfNtHBnKc1MqDD31u36FPH5hx5fytJYvuX4GpcX2fwf8tSPZMZQgfym7mz4A8TjS44dFt",
  "key10": "5BdJCwU9aew1iz3SZ65shH1eRTKHG44manaS3Xz7mvZXcg8cgd9gPvcSBwBrP4q4k9W6PyJgBM5iyWx95in3TZwS",
  "key11": "4uiQ6BHDUaYryH6YdGBGRRo1WdpmsLkj1rTREwWZVHHWiuWPyWWrSP2iYwuFqrYq7vqDmHv25YoiShMUPeoiiqX8",
  "key12": "4RhQKq7oBPQCgisZdpX3QZ29A7L4WzFjnszXhJDGfqGgNAYkXj4zEK1x8H3hm9ssijWjXJbLEwTF2RDyRZ3T7VyT",
  "key13": "2PZqzQ6SU7Wn7z9LonmkU1tyWZQb8k46SYawYnv5vSUKRCj5qhKT4LGnN1oE19KerU3SfmHzpRYBZff7bqn7LK4N",
  "key14": "aoq7uyX1f2xXxTfRe9CXyJaxEPuhzXNHu5pJTVp8g9Pcrjjko4bksfiHLRRzmTJUWEu5m7o38rR8egrnLDCADd1",
  "key15": "485fGNPHZZNqNBnezZK8FyTnRpEwbozq3et4T4szfNP9cA2At5rA7rFq5vCeBggcYpHqChSw1rFnGutmfhCDg147",
  "key16": "D9o1Z9yGuhdRzFmNVM9Xj6sirh3b42eDnkmkSHj5Lt1WnRv9kv6nVfuEfRXXHMDLaQLPr3TCLTbNvzny67pwLqN",
  "key17": "R1QuJ3oFRvKuMDtDC2c3QqQESsehdS7dNS6gsMdogPahmDAJMvEJyam96uBjGBpgp4tsebvbUdNf6bB417untkq",
  "key18": "48HjHtSR368UKU45EfdC6Gxi17emaLRhpjCUMuDUwqPQZwdzLfmYLFcokhtSjF1ocdXX4FmktNxUB4y1ovGyyGYr",
  "key19": "3cuFbFRopBRWuur9phtLmYt4Dd6SN5AmVzxm3zojAEJgmRQnkFNVenNKD3QXvAk8PkKPRpRKm1he8frzmir9yjKi",
  "key20": "2AZwxQFfudDdzbbyJUs9EAev7hLEqrLGwxF9ZZTn9cDRKPdHpoVtnb2bK7Rm9qNKcwmV4Y4K8sNpQoAomQjqAgfa",
  "key21": "2KWKJ1RmcX4a9P47Z3fdd7joH3GNUnRcdvWCwvz8tpzwdx45SDvf1xPAVHhGxTfjyTcGAKbYq9wPHQipZrjEaYza",
  "key22": "3HzTf6Q4qoa1LRM9iTNrHWuHJ4kNzuR3fmCGrjLBJgbrLJafBaLuf4EbPK9ws6DWNQX6k6DyUZSbBa4EJtq5jWRx",
  "key23": "hrsWaLzrpH9JH6ED4ctraxAoLDiqA3tWaDL1QojVHiGZafWyfENqb7iKhNpLKCvwVzmLPEZeVGSDu5XftzzkGNU",
  "key24": "3gn5egpcvGZcEU9hAaaAnjm2rUJWy8TPPurGL7HrbwatRrChxgsYmEPfDiJZou1MUouz8ELaCLRzkUs8nApTUitq",
  "key25": "4TKfBqSieAUgEw6hJkL5d4XARKG2Z5Z5i99ztiEkZt6yUcwzwEZPp8rsZbf3VvEcQWm9sfYPKeGob5d3bRHzCzhM",
  "key26": "4FK133sYaxbvLR39BE2bpNFX9MJ7Me95WXikmC7sX7C5ey7U6iMPdXiSYxPUzmc7VGem33jbPJvSKhTU63nsAzrc",
  "key27": "31TDJ1PeGugP83h63K2TzK5VQfufsHnYtRPc9t8LLbJbpnacDjarALTiMiJn66mTpnofVso5bENhcHxBsrxzrNtJ",
  "key28": "5C5wiJfbzG4nQ1rvarHyNoQKxKMV7qkPwccQxcGWKicmjVNuo5UA8YZQxrHwXaRTGWcy4JNkbyDs7vWRWkWZLwrh",
  "key29": "4QYpvzyQz4VuerMLmhwQyTCJaCr5fHcLxP4HNQDMnNrHVi7tmkfG94fJ326D8xWNqvJY837KykuwymUL9D7rpoSy",
  "key30": "oHFDrKScXcNVpUa9HCX2avmpe9HMM8rywqyqVF8yK8NNWti98pxZdtzDX1hPmF3VfC3N2LcxK1vid1Kwnk8AiYG",
  "key31": "4wmNjzidXjtnwphUa1jhuykyGrQsj3qAgCK949QaPWkRR4LJyvvHEqr7vrxu3AdVUJzhPWWAkye7cLh3JESB7Daj",
  "key32": "5F5n2ypJK2KdscKEpSHwVBumFQ2exLuYLFoQuwbGhAy3YYDZbvHkdXkgK8vzzkuhosm9TjRFCAGGTANZrCUmUbQX",
  "key33": "5Pdx3Ys3Hb4SZXyPyhgjdQ99x8x9FxjzyEv6hbSPKYJRzxTSZF31Rp5wPayzTjG8Nzbd4VJp2pshqY8cqr6AU2oJ",
  "key34": "674tgLKvqxZeMcebCAPSEegMYDUj8Z6VUdVNMKCKBiuRuEZrr8UAXNfepu7Hx2S1cmUGgDv8LAESbeEi5s4kbHfb",
  "key35": "2K7K8QtJfED7iirB3DFxvPDyvmXvasEAJUb6NHaWh5E4hnMaJwVh4soMbkEdUso9JXorumsiY2Yw2xgmpmaFRC3F",
  "key36": "5LCAFzJGxzR9PZoaNQHm4dCb6iXZ9zPZE2wGw6s1oiZFd6TLYn21j33eGeWks2Q5y1n7T9p5jdABKzTyF1CmGvDd",
  "key37": "5e9SnHZiqakjvegES79cpemE8D233V25FCBeEP5aUFJ7ZbHnyUPLeNQbR7uWYC77Brztrz25p4cUT1tcYaHJ2aug",
  "key38": "4k4wGn2TkibjpVvGBR9nMfmqS2EYxGDGJFkfKTKPysvPyJK8yuH6Z5QvBSAR77f7LXZxTKYegiKJm3Qje4yGy3hA",
  "key39": "5gxUY4XYnZsjbYTfwPaK5VPwmednHea8uUty15QwoqFGvshwShn9bbY1JGxrDcjgmq2n7PhyCAWDSMkxUM6F5FEo",
  "key40": "2bzDaL4iBzFPg8q6wepVThY1KP8JHkrtV2MZvVikLkmfLyFXszXCk5Ti2XQ7rs21mevSc8X6SLfQmRZ7Cjv1Q4AG",
  "key41": "4Ln8FHifKKg5tFoD3YKuFtht5dVXm6G61joYeY2sfPXEv926vXT55L1nhWWNbpd7VotYdys4AoQqEG4qBrwMBVyY",
  "key42": "4FNhTpfeN43YKH6Vad9LshshqQa6DvxisGCazJVSKug224jXaBBvbuwJbQ5ZAQVrcu249Fyi5iyw5MKs5ErKpRag",
  "key43": "DD1AtqzTNq2SYgiX29EnK6Sxk8NoP8FqGgpaMVVpjDWr8oXpSHUuV4NvUQCA3xQCqLxzztjLYWSfrkqip2Vi8Kt",
  "key44": "3upVfC2Xz48Kz6ePp8D112Xp1u6GbptNntRtGVXdLGSV1jswQYc4VmN7kJBA4QRKZa9ejT42ccVYSPTRk5Fu4fpy"
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
