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
    "49DrmGXv6KDNBkQ7bTrJ8f9X9JnM3qQNKQZXhYZxZx3Jj4SwhchvtLiSk4u3iDmjhrbLAYSB3aLLbmLszRRLba8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RPCN6yxS5bgMJZ1n6w2PLfSMxojSxor8CyX7vcsBJD9KqBN6nSTFAixE4byAwtgMf6Rsfusfns6oygXJEzEoN8U",
  "key1": "32SKb4B6GVDZW2dqxkhBHXSEy3zFCppGEeB6iDi9z2R9XmeN94XhpWdNXKRjTMcVEoYy4ydYfinNU4Xru2VmYRNK",
  "key2": "3YyPymysg8JyUCEF9nx67tkymDNELvMFraNpwzcAa2cVg3ysLnCiNmSeEdxNUU3EGifyCqLJfmTiEYoZV1Vq6a3p",
  "key3": "4Gy9E5aDeWo8TM9Jgz7KMPLBzWrhu2GpGpFr1SgDdPotKvfAfDyn5CpWfiyR7MVTP3wtVV2Rfu7CXbWt3F7G4Rgj",
  "key4": "4cw5PFRBiGtxKkdKCT1XSzPRWDjrFLCK4iKPzgiHKnSRVcToAMiXZ3gnex4xxR29hfqntKKbZB4rsaBWsWywGuW",
  "key5": "2phbpWnhkR8WiQRo2DDfJreJGgkaK7k3fEVHFszhYP3nJeTpTWRk8S11Su6g7Xv4BgaqTMbkceuhtyjLAFPBUSPD",
  "key6": "4q2V6Mqv77Nj1QDNrUT1EDjdLnnrKg6Q4zq74UaeufojSnYtANvF1pmLnBANpUdV763SzCs25huszSueRyPrGi31",
  "key7": "4J8QrbBXXN5MDajNR2f6ZxheQsJmVwCQ3R47rkbXzCYwNJuBiUEh3ptCAeZuY3JP9cSn2CcsXeMPaHKxFGE9ckVq",
  "key8": "4vSD4RN63FneAMVJ9RPZD1iMqCSNixnM6j9HN7AG7JfcjDsMrtyffxQK5yp33tfvbhtST7LiP8tGpPMxvaLSKaBp",
  "key9": "3BKXWhfDdjBWdHJtAc2J2hx5WyFNVCWVx3SQkVsKqBv2UPFdAFnVysZqo1dDUCVnRCY4vruYVWapH5jLPA9416u3",
  "key10": "DCyVJvUicLfP2JRj1fqciUjzyQu58U7FQDdf6squEihfBhx6QFzUdwn33DBc25tUEBD3MdKyZjKqawwuhWUfCYi",
  "key11": "5MrkxqaVJ95Y6Mih9W5AEm9ekq9EL6yhPHvZ4PYD9kqAAx9tUWRzwjxc9NP7GueAXb7nmGXkjzPjuoPcEXQPk5G8",
  "key12": "2oiw7kgMSPN4sNRbVKHgR73NByQSr4eewt2g2gcYqkHBsFzEJ2Wf4D39W4o4bCkyYjiYvtjjGEy6jkRdtTmHg2Ms",
  "key13": "5JEQtDPHCykZdd2EkW6MduB3Q4QdAYysszTdZGUid9zVVrvWC8goPAJPRGJwrUcevXsna6vGRYVq9oteJEFzVjB8",
  "key14": "38NvxtbjMVt51bUSRNH5i7g15ZY26NJTus61tX7uG1DmtjgAgcDF3ifmk8KXTvbxcPnX2CMPYFL5jBGoCre1AZoL",
  "key15": "Pf9m2ZYNFEFSfuU35RoPDxpjgRhsneLbX3axfkyWbU8VAx2jgA8rDXfHmiTTisooWXi5wCHz7QQdD4fA3vLWKjC",
  "key16": "HLPRoy6MNQLwJUN6Hs8xTuKZBPgcDBiYpDyh5XPnqD8Lxc8jJ695fg15kptsS43NvAnSgiJWwjUC2YTBEFm1Uu3",
  "key17": "2DKegKAy39AmB3MNSMcyCDAQmyf4qFkbCANiTWDHvJDPGWrXAUJiRAKEv62d8uj9fCW7cizNzcoa2atmNaSKDuVd",
  "key18": "2BGSsXx9bS38gRbRSvAJ7H7WeLvXePaWKYGyFqYtDGFfGXuB9p8EjtbpvxRb17J73usJn8g5oBraHAZMYGTCQHGS",
  "key19": "5XimwKpThob8pcxKz1jzcqhxJ7nyakqWxmr5C548obAyyh6RqVmqXYNu26DaqPYUkprLXSJ3KA3Kpdgzg5KFzNF5",
  "key20": "4ZSyyACJq6CETNhkRJ4pXfe8cr3N7i3XZVY2tZmU48i4uYaX4zd7EMQrQcRPx3zEffSu6QDqSQ75pqCyNJwaSu1s",
  "key21": "5shy8Giwp1Q7PUGvQc33pYiBQqneWvDv7AScNh1BwTHMVWPPyGZwa4q5oynKrmZ3W9YjR2ogfhbhr5hDmoR4TBRN",
  "key22": "zWfS1jqTK31BU1gTw2wmnjkGofx98fPQzgC6VT5a415DvZNX1GypBKk8VMFvJFNdhmjvdsESTz8beDeJgQwgCfD",
  "key23": "rHGYTJyDb8m5Qra55wucfa5vwGCqqoxvMuJRjm5DfA3RvCfwkPsU3F8Km1Dg59dhVCfq8C7M4hc9z4jQ3gpk4Rh",
  "key24": "viPULwrWrTdsptd4BPrAHm6hhgSKdsbPRfRZdCJmQTW4ApeLzwFWD6qxneR2vV2sqaa1Yt4ny1RRqbz9Ekhuh9Y",
  "key25": "4mBNUMh97x6UZCwyCtJkQGX3eTiAySRf14oSGHGTDp3BLxV3VpfV1VvwPXcqTYCiX7b2umm8m2Spx3dhsp5A1VUG",
  "key26": "xVTLa7CMWZhPmHEhaj6DrdQd4E7EH8qvLCKDgUQZVRsFA1fyGBzPVYaBgJ8v4UQRxhunW5jdCZ3tvG1Lihv4bfU",
  "key27": "3XXAqs2VFeNA1FkZneh4hoEnh2WHZtApBqUtEHCg2yVpzBzNpz5d79atrZHQ2BCQWiaA9ttgaTtrRoNH2XHWvKd5",
  "key28": "35d4xbEnVfAPiXBzyvB9GFi5CxejC549wbhu11YSh6am8KCUuykjNGCqRj2kXTF9FGJA7XQbPHo1sjnMkMBXZPEX",
  "key29": "u8fxzkCV7n84ZsNpWkQzFt5xCP2okb3YGcVNtAkPWZzqz9zXeNRF7XqguBJQBPaz7Gy5cV8Sh7M6SakkACMeS4t",
  "key30": "2B7RTZeCPHhHz8mWKb19SBVpwUynsVLt2yQo4dWHqUdkGpcUZ2DeDZMaBypobvM4Suofav9hkxU65HmRFimEgDCN",
  "key31": "ZCj8xkSTuWpTH1mmE7Z1B7jdNLiNzZk9sd3E6vRt8QLTKaPZDsdH5GyfHt1r2epCA9pQaT7nXQymbYfuquT9wEU",
  "key32": "5YjDhszF8vLCrNLQqGZabU318AaZVfN8KzAgSnBbPD3oVZXau6yNeLLyJck19wM64g5Maszau72VUU9yYGgpevxw",
  "key33": "vJ7LKXzF6vTdpgx9cbG9ETDSCPidsp6dqDJCBGaCxxjsDvxduSGU9Z56BzKyGZyBJpB7sYcusuLzt4ngDoZif4q",
  "key34": "4x88yXpxuJrwPWRjMHLe1nkgZopiWwez19bVZoaYu2L367jj23y8CzxuG5q9JCa28evvUbjg2Ruh4aYAD6gDWbEv",
  "key35": "5faqnZ17j6HhSTkpKVxxfsprQviab4Q8GWmLWXvi8byDCry72eeBsyTnZWKYzVaReTz1MLdapU5ffzECU6df47Lz",
  "key36": "4yCqb3CPGx1KnAnT3u5nfE4mfeKmf4jMN9qr9e3Z3WUF8GfgdC6cdJ6vep4QBrDa6Mv8tbzPqr7pRDEqM6UB1ikz",
  "key37": "5qmbzQ333s2V3FHuCUrf2sbV8E7e2qitW2qFct1xZNC9F4LScLB6MRieAJz6m1AdkUifWxxkiVw3VRWfFdE5fyVn",
  "key38": "muKtZvKKkhZn1dkiE6rrMywXQYfH941c16y4g2yF55d5vMB8NwDN7gDtWsMzHpeT8E8X9xGrT4LnYeaNnAnSQ1n",
  "key39": "Futk32GbRMzbiDUqqLD7cqZJTzfAmuSnSAXMia2BrhRjJnX9pdrAkgGBKreTofh1eeAGUYDzV8RrjaC4ydFdagX",
  "key40": "42fjhYdqbP1uY5UAQ85xZ4qmT9rDeNCK1i1Zdfq2HwmZp8FtovS13ixa1xh98uaMvCYXBHx8ZwAGUtWmcSRG2JyU",
  "key41": "43XUPWHLD43A4fnhUGYhEAgFSw6GFv23FrH7D3KJm1EbHxhtd1NK2fTeiYfqN5LTpHtXDJUwQhog3chKAcExjW1Z",
  "key42": "4Vs6X5GHNCRKEhNNPXX83GAohfk5v2XSMkjRUxU1oUMQa7sbKZjpjAr7Uh1LBumjzY5URbB4ZocQ75tPWcJa8X83",
  "key43": "BJLVhzWr9XUWbNfTSzZg1bwVj6tmZGt7Gh8v8bWUzgYG5hSYB8JbWyNLhVAMWrd3VxsmuyKm2TDtPud62mbAqWs",
  "key44": "3rm6SCgvXYWM1j8SVDAtdw7YssKUjBFsaZH6znpUMZd8B4yr9DBp8gX6X5aWP84vvYyYTeU5RnP2gR1GPYc4B6Q6",
  "key45": "2FzVGRoxsW1t4TvJ6CNAEVxumiGXLKSG6RksQRxfFfXNYirBLcLHBkE57WJmfEXn55juQZRBVurjdT8QPYBhav6W",
  "key46": "5hHyMssZn55gfefzDHCyaYbPDxH93BGxsboEk4LfM54E6HooyYs5CW5ZCMfbp5p4PLrjTXJ29VhSzyVMGaCXa59k"
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
