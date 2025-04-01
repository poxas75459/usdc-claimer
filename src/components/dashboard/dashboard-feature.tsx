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
    "H4HEC2C4tkfNxmTeNHNK28pz8XR7avtMNeJBk1ZpeApNPWGkRZqtYRUUUjgypi76nTagMu37idJ4jRdohh3fb5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XukYZiVQyzcJKpCor5etWhE3Zm4SUzhiRSrs6ToZ6YQF9wPpcbbFPR2pG2iMBnZ5Fk1VgdQQYJKCPPY7xCcVSPm",
  "key1": "2cJwew1PQC7NYpjmitFLDiMfy3LBNFDidWv8GMmNNPHHszFDTzUYHQ4iWGs7ZURgPynvxPQntJCB1gZ55mSc9R7s",
  "key2": "4ny6JJPPimtg14PNi53c5ryAhGnbwNiJkUDMyHVeiQsNqJqS1XecocxCFbE7BZaGzMtHz5LYSBwEYPhJo3N2F6my",
  "key3": "4PjZRQoK6w9gWsePMsKzHYXWKRKqHwqVpx8KW7cBWyhEd1Q8CisZrzQdWUvszMLSyoaxgJxH1woi9hTDQyMiCTrx",
  "key4": "5Xm5WBF4yAdMv57WWvJgEf6WEh4AZJEyKL6cuPoyMC5jSypXE6yK7ABj5nDbrTm5uT9NCtLUGqTqyLBfrXHPMi2L",
  "key5": "5BCrAAQ6fe1WtWCcME7h8PVCfcjxeoB96qbZaJgFunc1MWoqPiSh7FoZiBZfo9hrNXp8fudApEgHNcNWXgjvrVfg",
  "key6": "5Tha5FzxdRiT4ezb8rxEaajSvfyK5C3mymne6xjJRt9ELmugLunwzDtPvLqwnGh1iJFpvijhgGEUZR6Ksqni9JCj",
  "key7": "2FGAtweVWT9d5vNCMKU6jHu4WwnhTYCCoCDwogHRSYE5ddERYjpvKkEDKswAmEpE2VMkrTpVatPLnnoxD53SaQt2",
  "key8": "4A66jmWwqcXptWsHHSiaTQVFkmF2AawDhsDnUTCcRcgC1FTeG6D9YD9ovPsz7BNJ4ykXLMMu6kmxUjjby5fg3rkZ",
  "key9": "4p6FnAfzsMYLKXKDJDT8yK1QzeGbU7UBVo7Kr4Uxd1tpuYBrgE11ciH4554BgpSzFVp8FLTgWgNYV5x7V6jarNND",
  "key10": "2pKk6AQuu6Uj3c76enajBcYGkHEXHFpULr9q3rMGXzY8phivrTSxrgBtUHEpVy8fG1xzupKDWUZ3NPuVVWF4fn8c",
  "key11": "5SwnxtmFJdbyaBX29p73E4iLXtrCrTmBiMS3i78RgtbUXmDBMkjYX5CtkoxQ1X6ZKzDj2ScBprtzz4GCvK7EhV1w",
  "key12": "2AsBU5rMDKRGRjsWUMWj2XquAFmmLQh52PnimDzYzGeuiv1FyMHiVSuR7rKsPCkq5EupVy3QjnkNX82UxxQWEMcV",
  "key13": "UDTC4z3NHoXx9bxbpwEXJhfqmBJtgWPWiYSzzCuzeKP2xMQTpdXLKbxdyn7ZXdRvNNM7RpHhYvK3y3cT9joZm7C",
  "key14": "46uHfKo2Dza7nRzkjUfKiABLMDkjGaUXaUFoUYUPAyEu3y6YXFtvXnh6yXscEpWES18vdheZ3ZC9baZ8Pnt3prR3",
  "key15": "3sCZD7UYoaogHkmbyToTBQXHXbe9ixW7r3KLYkUcRhhhjjfasLNiUueb2uA7yGY6PPa5aHwEtY3zJEwKxyZSz7UB",
  "key16": "2cx2YCVX9BNpBQ6DcM9Aoiq2d3UcsXr8KrDVSzJ4f2HB7i3nEc6qXTCvjRoxWK1m8aqyACjZvGySvwAXVWXDJKx3",
  "key17": "ddhPXvRaXbCWuJe7c3BnA5GEseRpXPYFN85RrP5egmmdZ2D74MhJ4fs7BKzxmTCyHbZHR3PrGvLBwWa1EvWJ47V",
  "key18": "uM1w9bWfSYLGAwwS55hPH6JP8K4TRuYMcvHJLVyAvAcu5F1sCv1Ds6ndcWtqohsaf9ZBn3EMqzKSABJueGEk4J4",
  "key19": "bgpxHLCyjUszsYQv1PKahV4rgxGC982TVePhBzbBVZc5Hh4KzWoguET9YSEFpM4zDxideKcAoeNcvmQENXeKzjR",
  "key20": "N4T3MExqwEtxf6FrZSUAwqdghVqZZknaqd6Z56GedP6x5HJzHL1RQwkQQ9GmcrxMZjkuyUWyoF9G5uzbD3TybgT",
  "key21": "3RyNh9wsFhKgzsR2iD7kdVoJ6QoHLP6CUw9UNi7XwXtXfQTikmdEwiKVh2T3ns6wXbZVnXo1oB8VoF1kLDXfCwAr",
  "key22": "KgArBW24HLZfwNpwi5HNBfS4JoqgKAnADT2z6rxzXnmaKZdMFASD9ZAti24pF8fgUUBNhQuvivZqZ5sQ4n5ve7s",
  "key23": "PRTLTuM7Kq4ibtgmyjUJ9Q2LWZgv5cyAJX77yY1tEAnjjKYuSuQf3bUW7LZ4Hmo53KDDsnU62pNoRPFr3ZCxHur",
  "key24": "27isU7oTM594yqJdbEirxucRyQTbws8YvaLEdZqW8NyeZRTcg6u956HXkAq88rTAaJowZLyZjHHSTQuCNg3ZyeAm",
  "key25": "2TZkieuJkgZNBD4ML9mkgCz8vHDJW1fZrfoHr1n5qSH1bKmCjurTdLbkWdgzhi1eWa7s5ddRZvjPjScWCKT7heGR",
  "key26": "4kuF5hHLJfBi3Mvs8dQA1PcwP2JkkCjaS1FmNijgarSUFh56WAhBz3gmwAmjHH9afPmdUH1U13nw7KRFh43ga2wz",
  "key27": "GQ1nct4dgPNQhcW3LSDskCSnxAsg29kUNJq3UCXNTYc4P58CgUpgr2DX7hC4BKLgo1MSkYVoDNsVdhrEhckehtk",
  "key28": "2bsTkuTLj5pSsdBS62x8Cb3pSozZM4smKsbZ3v43Dn5CWuk6dxRE2LXjg2Z7SeSPKz575tPPBen6X6hoz2XoAdf8",
  "key29": "3MH6Vt14LQCKRLvgHbTL6EZTBaWdGctiqKR5FVLMTAFERGCtHGwdQVcw9Ly1hGWwfdK5KywRvG9aWf7fXe8vAPVk",
  "key30": "5BMFPB4ttZfQnxW7VdVuvCdSLzdQXK424BP6jAwqaEFARssxLH2UEYpvVowu8nDTg2nSYVdjFuTNsUxPG6hjJLC8",
  "key31": "3epqvzBA4CqZnBPZCZ3kqnZWtUo4N58gqTCSGUre6k8RGuNYDtTRhU8SNwATZBgDa9Uy9WghZq3eRs4HDqHUAG3D",
  "key32": "2x8SXnUCWNUvsi3TWtQgtwdWU8uLgB8NBuXT1V7HAjyjnFUAWE1k8KsN3ZZ3Ac3N4sZdSHxFc2DGqcQA6ptzM76p",
  "key33": "3rDJyFzdLoj2q77bWLCNh6gKfT7aDXQJ5e6EwqKx9XEu88cqPnLwkHpGDLKReTDwUrmQhZ96mguPWv1W6EyHBBd6",
  "key34": "3nJsexUnw7WVnYxhJFy7989dxwbbuptWLL6KMARVVvSAagX85MGcrp9C2MrQb3Pyj8sX8ZFZDDgW2RmUFtutBMtR",
  "key35": "5YDeGfQigxM9p5Y6dUok72UvAUydvkPVyhwGJBxCJxCKUByb5MuWmsLDg9M1ZsBbwHTyckm23AQKZNwygL937Ns4",
  "key36": "dJx4wRfeKycpacsApc4wYQaJDqBH4GGfVL8r2TMffG1HV2tCDZtB6TdWMhc4ciKHfpnctywuR3fQfhckvhXey6m",
  "key37": "3NgwZM4JdnjVDYUqKAYQJJNMaXP75N4Mh1Kxc6o8eQe88b1pVucTAEbrBJx8c7XQQRET4UdL7kRRg3MLhscpiEYN",
  "key38": "58d4HUraEEshtES7wstTeYvZbkteRC4SJVJYMwUtsqWEWxv6UAZPxXSTxkyZTnbWPNQpm5BRJDk3qyFp9bZeJ6Fn",
  "key39": "4oxSjyqoQqQQhXc9SBpmDq2htEueXDGgXSCYgbBctA1FcMJY6KZ2esF9Sg7HdXy7aURJgYPKHE3LqXkTa1zS8TWr",
  "key40": "5nchMTM9sougjb4qYkvxvtstMakwUWbkbfirFkfiMspXHPZuFKo2E35BYgPRJKz1ffrwK2J1DFQS8fJk6Gm2AEgL",
  "key41": "127tvZkF97exvV9c2vEtfMwEaAHZdRLVpuuiJnQLhgs3SEqdNvdvhGyc3oh3ybzkGhacVGaBxfRRng3nJjxy3XXa",
  "key42": "54cVVsXiBn32HSuzZ6ijSbcVf3SyhvWs2XoWV6tfQyRFwZ7nzZJacog5BgSHHNSAm4E9jxscfkob7pN5yvDvosRm",
  "key43": "62Egpeuy3QtvnkNNE1AJaRkYmA9DUHzGUavHFfUVWZY9BqtTKwAC9FMF9hcCe63tWdwzgfnpZFBBPM4JKyZRxmbE",
  "key44": "2icYSNsJFjXRaBeutjveLod7v6zSLpYg6FUDVpTFRZXGwTvUyQvXDEwu6AkjHhgke3sNaKkPYjTxxRKJ3LVMTdLu",
  "key45": "3R9f8XGunpRxzf5gboDuDqeeXD9sRqJGHL4vwYY76aThfydHsU8D1jZzQ2EUYuzARqRScvTP7VbNKsDdLhVEiyiQ",
  "key46": "mGCkBgf2m3sUd1pCycYgzMALq6VWjsL6bxPA3P9HGLBXXLukYU4vqe9eieT5tePeFX8yXD33pvPxDZ2YwyNVr2t",
  "key47": "4fJfXcqLZWFJBGwx2EDqavhFvd46DUg482UADzeeoyYYJMhgXpbCiYdPdkD9ERfWPysc3kfwYVQ2g1ZKQeu2o5jH",
  "key48": "5YygU5jJeqhsiCYjDVFRcM1kVGShMpgBZ35ikDxKgTLH1cjiJyr8NhA91ii5TSB6Zucxkjga9MVNyjSbTF25a7Pr"
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
