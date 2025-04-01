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
    "3ud7gU2qWdL9ZCTi9vw7huke8G6G36KUceP6uDwmheu4zSQAVh57c8LexspT7CDF2TPcMhDGac6Bf456NV86qAgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEQbCntXx7jNDB6iBY3BTqwVkdNZ3foqxqoP9BgpKeEZM2LCqGocHRMZZp2PF9jgsdyviqw763JnqyLL9ECCsNY",
  "key1": "3gM1Wgc3rqkYQKChkzTj1Lcw3gf6yVRD3P4cNUp6TSjHhWnSiijCK62P85Uc3ztPXeAWfPy8xbSKnqnNP57DNQdA",
  "key2": "yMFHVyY3QiGVzFcffMQJWuJCDj9UpYEdqSziCyyoRa6cLUcyLBgvrm4X7o3dh9f7s5SaRtHcvQ66ymUYwyAL5Ey",
  "key3": "67nMqkDGy44oiUgvwRZskZLkr5DVrqBhbEdjm18j2fGZmBzipM1EPVwogccrHPJKATtiPorqkq2UdseQaTStBhaF",
  "key4": "WnK1XBRyaBCnfM5ZuyDmYYzCuVDjZL2mcFK3pnnZfVNM7M8nzfNFMWzRhiiuR2699b9LDiqA7yiEg5S1PWYm3md",
  "key5": "2Q8zEBcpYdzPEQMp72TJx55cN2PKk2GvsuYJ4VMmctqvEg7a1poYWxpgx8Wy1z4NryAbbXfGJHymmJxTtnXgHfow",
  "key6": "26Ad2b4RMEFh4GHPQ4xEDdeF7DzRqzrHi9Y7yzRRgRkV41YfLWvvA43mz2ToLuWf3D5RAZsYCUqs4aeRwfd1ucys",
  "key7": "47z1JadoNW5Q1JqcE4wsku5jequ4iFz9aPLjzpbfnnon8NQncwigaYUn5cc7WhFhV4oCVz1NNpxqZ8nL2jUKALvE",
  "key8": "5YLXoLDK7kmZ3dk5Epj6UBri1R3bGLXqUGwxXmbn1UQT8bSFPo92SnTjZL1ChgtgfHmynQtf4dVspUZkU79JMfkj",
  "key9": "3ie2QND8DdPUJjneqkbbRvqYi8ErroekypCBPJHSiBZWPsCUSq5YwiVk2thcZwq8HGvUpczL4g6eeT56KyByZ8a9",
  "key10": "5VPH2fDtFhz3khwFaK3CPBFMSPK2kJQFWMjTrYt2gecw8fsNszZrnZYeGif1BYwUVQ4LCNhTNPeUu4u1X7GFYxzY",
  "key11": "27EVe7WoLfALBvKk9dcBnBd35N5F3yGdnfr51jMjHS7dGYYaf9F7qAr6tP7hTDioax4q9EbvhkR29ueLnknFsa1i",
  "key12": "WCy1g5xeQwqNfw8w8TE2JT8hUNdVxSDq8YDB9KKPJ9JRhTB5kEHTPbLFjhetXAQphdWWPfeDJSnmkuqU2jyALPU",
  "key13": "3TBYLgYfnaRhzFC9Fr54LoJ2Yj8yYYaqsRgKP9aPcWDGmr1MfhSUw1dy5j1XUy4WpMJsGxcFso7zLYUQMnMgFUG7",
  "key14": "56jNqSEHFcuWHxcij76CAMmYEw4G8u3VP99swV2nE6GnWVw8sYKaBpsqPcuojyto6Evqta2ZsZspwWYPBTEB5kyu",
  "key15": "5xJ1dYhbBjnDAfTj7BhAPMeqNYt5Fbst9zvXqJpHNtan37dXAvR3LTtjfJiXsmoMJtA1jFzho65nrkCL5CQTe393",
  "key16": "5eSQhbD3r4S8nifdMuQV8mw5TXbtBskL5XYxz13gxBSZN48GmY35nA8xtK6yBfY9P2Ak3cmdGKSjVFbgbYhkYbHc",
  "key17": "3yrnZatht8GogBntSa4CEaSiJeNZoeBeTQsK3Gs3tk59oQZA8tp3FYKvV4mg5peky7L439fTPFyYmPrYzZXG49Q9",
  "key18": "5y7ETHJqtRkHYHwtfPPWGHSE55YxEkgUSLhw3gDTDzPDdWKsBhz678xk4AWbUfQXnfZS4MJZv27TPvyBL2YgkPjj",
  "key19": "2SDpWm5yRgUHDAtAksqCmFHw5VWsCy16AXuX3NKMK71H7BBTiXQedqn8587BJXGqZ1DzgkTk3TUDqCz7ZR28wmoC",
  "key20": "5Z3CFFuxKdKrDP81NP6WDbTV2Xyzf3Yju9pZsPSJ8AeRzJoH3FXJGXVFQX8ESMsptPA2CdefswwEqvC8PetjfRjt",
  "key21": "3SGi6wF3BLj6o57i6bUwLNBRUUa5ZkJgVEpJnijj1knFMXYznTzrDVKmB814omtK1x7WyF3UF7Cvmj1yhwzr7jVx",
  "key22": "3tPemdEA8PWZgifm2PGzF1g9M2CGBHs51EVFqxyDEbk7T8uwHSXQoyqnuewqN26Fa4Hmaa2q59y1CAzcw6toPhmx",
  "key23": "43ap2m5d7i2KvgfC48MVH928KvL1S83d7SnRzogtLqia4k7WGir6wJDYaypMNNy5Qmaa5ETyVhkiarq7GQNia3Eq",
  "key24": "4iLXdWjk2PTo1eSeqZMSDhw1wJS1XDFj8VQanWyh2erYqoDMr8DRZcekjCRKZhC7r3ggMHeHezCut3GFgdaYMkM3",
  "key25": "4TBmJVgBDXRRF9FNT6gcigCb6VgtrdAY1QSoTNnJat7UYtCVjy5qyaKbxNoyHmKjng6w22oQFy7PjfgUAyv9bSZK",
  "key26": "EgPr8397Po4rmLuZsLgQauHcquG626H7STefeAGkTMy33A1AFd1VNUrYv15L1WfwHdYE2gHFmMVAjSAjet1MUwD",
  "key27": "NjBD9GvbkhaBEm33r6fsJJwkRJDzNMhSTyspLnunADLgB5qMCjJmMJXeQXPYJZbmVihzZAK3WDRtvewCB6CHzZQ",
  "key28": "5Bn2mi9xksWBo4GtgfvbLtgi8JQyLqnaUxTgaLdAaziA3Dis8GqS3C9RHV8UFDDUFTUVixSayHmju9dnfVaqVBff",
  "key29": "42SdBLqzEwwoYMUGXJopo4TqyfbXNuAMdbu79EHgvnJZh2B7TAqU1ZgpYvuYp6CS7XqTXU5SHLG6fiZcMYVXrLea",
  "key30": "sEQnGS2m1eHHB1Vc6Zyki9ujAb66RZ8ExbNZTpJuCcAwQ2vgiJJMcnc15dUGYGHrBXUuYwPfYU4podtHSh5vzAp",
  "key31": "tWU8rtNJStggYYqMxM1jzHNBbWCLCJi6uzmPekg6sdc9C9YoM3GA8TtMBWx25RTaSZ4ug1mQMv4rJCJ8qapFtbx",
  "key32": "3VJ2dkNEVd56KyMqoNVzj8kRimgPnt1tfnVnx9WhUsjGNny4DkfhLNknxRXdf4UHKdLj8q8r2iB9fDNarqHu1YHq",
  "key33": "2XkGFmVSnLx3gnyZEYXyp9NcNYKukUwMeRvkWnSsnZE19aqESRUDvTQcZYUwTEfFACKtHkVW185mFXyVUNBAUovR",
  "key34": "4xtpH6wZArgXiNPTBZFEL537A1u29Umzm9WF7HGjyRcw7G4UV6WEjnRm4kNY2esyTV7at19K1Mzgs44jf4ZhWMMm",
  "key35": "5rfhmcKWHwMXGucUnxdZCUYddTWs5Py4wanBiRHyF3t45Kj62Vtwgo8bD4wHXT2dgZPNJ3NuEvom8BGC5D7dNrCa",
  "key36": "2jWQFhxgwAzMKDtVYfBpNAFP2LNJcxmed5HYRiizFqZ8xKyj8LLAALR7J8wJJDEZ48Yfwxe5MhdrmHxz8CP7E2Ce",
  "key37": "3vU8Woy68fjc2k1f3sf2s9GKene6ivF3e894Vj9jaw8Yi2sdh3b6tm4t76ZxgtDHfm5xpoyDCpUxrMK2gyCSRaHd",
  "key38": "5o374Y9saRA8cLk9i7iUiBR9RnsMDLxr5N7xvu6HenqLJFCtd94ZThvrfNPZ1dYSb39nnLvKmuoNNbtku5HgEWfY",
  "key39": "2QhyJY3QFL8y2zCQxmJtJSunBDFRcwQGuTU1fYfGmoXKj4KJtBdMgVjLDMXy16FBcgykvoffDdfj7nEsoMbUzz3k",
  "key40": "vuGiXJrSzY9gbitaRX2ANQKUeNizffuHXEx4sU1DQUezntrEndCxyzs2ZCNXWTPFNPGmttoHQv8FW7hUQHeS1e5",
  "key41": "4Ahq6vxVfEGTtdZcmercizn1qQWFdUkmEr37yuPb4H2d7wFjf3mdiYeCJMQNs6TeoTBvqU8EkmpuPUuvySv1hbiU",
  "key42": "Kh84wbMCWe3ompvtKw72wMyMUgzwWvWp1USt7bh4h9XLfVAKaeFFGFdCgBWPtsnEfZHpHUpvhCuRtp2BfBeRjsQ",
  "key43": "51JDhz1qQuqie1iC4qvvQ6WHCjs9kxfbYhENRWUsB3zv52dUZnMJqFVHi7JeBwA1fbLHuw1TBQTo7gE7VmRoSe8R",
  "key44": "3ZL2HVmyihdzyWcXuXAeE62LEFZs2CWZk2ZQWjoQNsqn32Z6jdqRthwC9WJiB9q5tuRSiLvtmd9Q6DWAiuSh9pHa",
  "key45": "3S3g8FyMc5roXHYA8Nh2RhpoAYzWWYAEKYkCwArdMH5g5pmRniHgaFgm8Ra9cAzQrZcqU35kNou7q5aCAuz8FJs6",
  "key46": "4nMpcMs6PvK3tvjLjB9n84P3cG6gkP5E5AxFq7mmsTrj1zzibb61kG3KgybSLTdggNZyCkUoEqQiFPBGuFdUfiZB",
  "key47": "4F8BBWEgUMaiahWh7FrKhZjatHLiDFPfspKSGnGrgXV3Ld9qfqenxSNSvE1hYQKdejXHbh3FDxLvN7VRvUFmvpvD",
  "key48": "KBWKyTFfGZdCB4adzV7JqpEhsL7fvQP2WJmk3Qk7pVcWi5Syp6MM4bhWoWqPRozzZiiVYtVvvwzmXHnxkSqLDWp",
  "key49": "5vc2eK9H65qkT6gxWHfvhGGzos9pAQ5Wad7b9BjhAQrEXW19DxXWvFoASMWGidfKdrPWmxBhzekthtxnSBGXALPs"
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
