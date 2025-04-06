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
    "2ZDgL6w5yFWNs8w8FSbqLQgFkYBuMgDLgT3XaiXeuC3c1uP2wtGqVtuAxntbTxK11NCq52QXeS3yYwya414sLYvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNfTuroZy1WGroGt6GnheY6eFsXxhV2ayyq3NMx3fLrHYoubCziNwy2S8sKpwkijjrUbeQCibXgCZq28vgVeRwg",
  "key1": "t5tPQYhuxM5z9Lmf4382mBZ2iKTRKdBZE1XJmTEyrgVPuG2W78mpCKLtvmWv6esmQvtbY1JSrpv9jxBahpSthjH",
  "key2": "3T9pMkieSSrNPpBteyhPpDTAGQ7Wxp5s13A9fbVtefTcExyhDrhjjmWwnvTpvcURx9KVLwpLYGm8gEaQVyRMZvcy",
  "key3": "28wFNFvCdP13EhgjVm5ABTVuDEsJjZbVE4UrigarQbPVgkmAcyBCwYssnhUhUX41peTqMY3RAtVqgVfPBJ7CqxK7",
  "key4": "73YUnv4ctGsknNQFAWmzzv1EVQnMXFS3j8AHx2pCREEw4YWd7HjYT7yQkZhMMoRS895FC7fDZ22yyTbjeSfrnuu",
  "key5": "2BuevgTVyBbsdTQaNA8nSEv5GT8y2x4UFip8xz1DpTKs5d5a8f6CtzgSMX1jtU7QrNw5gVNtjPqUxT14Y2ZWun4U",
  "key6": "iYsjCptDpPMPzp3k4wNgUm83si7KcW2sCGEPFn9egF1GEgBkjfXaGaSTBNfekGbYjZ9m7ei1toH3cLU2RsyCAvw",
  "key7": "2AXtQXzwvsaxxFTFq1TuNXVwTRWEzv9Gn3wuWZrkgvYcHMyZJXEr6SUBeQSBCY4V5bJ6wJiCGLA2hkFhey3H72Q2",
  "key8": "4rEPBstKJFEZLuFbdsV2UxfEDkEwn8WLVHs7jSsU9FCLW2dqyMP3T2T5iMk5s9Fa78Ay5NoGn8oG2ek3DWa5puTj",
  "key9": "3qofCQPj8YAr372XUK8yLDQjc7ChFLX8kod3f5JXvp2jU92oBcS7Ca1iV9kw4mLuBip2CQadjwgMoJtmB4oVQHnx",
  "key10": "5E2L7JrncBcwvrvc7bZnkmAVV5mqeKBbJad9wtFFWmZ7bNR1NEgdLBzENTPwv6w1G68St4wd1eKEhEGcGpwLRy82",
  "key11": "5V8WQoJo1BbQbzDEnGuZSQQmcuQGV7TD7XMBYVCZtZXV5QNHe7uAc8atUH5saHtrF8x3bJXSfKqTBcMK2UqdoRFq",
  "key12": "3UXua5bycPeFLyt97ozH1W7HbT2E5LEw75PTNvPg2sEccfFAh2fyUdA8zG9G6TpqUvwgzZEeBr3PPMhW3fanTJGE",
  "key13": "pnddBuMFeQ46yY4mCUN7iUP67jLG3azbWukokoSSr3a2N5HgZfAhe9UXh7JftTM6Bg31bQnfwRV6UBsuAxnw4kR",
  "key14": "3xidjw24DampiMWxHCXYbzL4yWppjELT9yoCvFiomcHpkQMTWibVk8FhyF8YCEJ6Rh2ZyCwjcg2sPwrfbngVVYqY",
  "key15": "3Yfkfq8JNinf466BAwAPn2XpLrphYmrBJwy4j4oXwnmz2bqJZa1JGFBCKzE9ceDXbPt9FXyJ5H4fK135A2dRDwcK",
  "key16": "4Fo6NYyZp4toMPCL4fkNfSk6y24ju7e5dAsVyb1WXC3sbHy1vNcx1HvuGfF3UvPFB3jQnY2a4s4pQ3ApkGxmArav",
  "key17": "5ENZ6duxJ885sfgEbkrHnThuhww3JKadw8hnBV7GavJKdsH2u76vPt4npoAQfjgVNfwhpPboK3uSbtSLhXKY2dCH",
  "key18": "5noKzpJiR2zFENABaDfeYBgSPk4Y6NWgnzr3jf3eC72ndRX398shABzLiuxv5bWNuPZDxspiRVgnCY5Mu8DYZD78",
  "key19": "5CrHb9D8dcT2CaVHChQsdJwxQLRbrcNcL19QnFdnTMwQFo81LaSxKnKbUdCaujGh6krV8iJJk3uMwoChZWL3GuiJ",
  "key20": "2WNYSjskLjCWymg9vJ9XV3PJnLver6SDMYczNHyupvVsNrK7aY6ReifysDv4t97LaRdQQhhRv8AHXYvmt2FnEuSE",
  "key21": "3CNR8Ugkjo4oEzbkXmVCMekvqKcpkuRWow1rTm4U2MPCc8TTF7YG5WHpBd9CcPaNEZtSAZGPVT5mTF7XAjmAN6PL",
  "key22": "4keizcA1Y62qZFBHzN4pNGL7rC8M53iEwRDxNgaZqiZd44oMcUmQ69z5tMDmPxAmonAWBvyXagDYEjmKCu2HsMGX",
  "key23": "3rYJ5nm6eUAfp3ndiofKomAthgE1e714dqC2P8xoigWBFUm2v28apAeXhtrd2qfRsGgUoGzBM3uaHknZ3jNoBDcg",
  "key24": "335zA4vPXAgJAAcpPH7UkVkbaz5hw7GjkGRf2Eui8p4RNCvL6hpSEFepFranEf3tNyRL7p11XuHUrG8ECHQJG8pR",
  "key25": "5eJNgSmaAnuHtWJfxZgYnp6tMhH5hZdXNeFh8pBNftC8iCgExtkACf3Qp2UV7r2jbBKPPxQ3HtU7Tfy1ukgoqYNx",
  "key26": "46bFUHaWCzHRZ9EihWxFAXKWG1YT2fwFVCF1Ma347HsNPBSEWFAs5XaWsQntfyVCCPpeAcDyJEzcYQbhjSVpRdbw",
  "key27": "5vVtmrWtZNqKejtFkTjDJjFnh8aXURdyvkjxNQ9C3uRnFweB5NLvHWC4XW2uLwkC1gzBi1TwWLrTodDu5k9gHJ1a",
  "key28": "2yTTQ82ePPFEswRHej21FXiXstLcdEPHsxdJgVNxWaBefgAzTMogPFDZBEmXuJQsn8FTAmH5kZKDivDGHzuQPfaN",
  "key29": "4Vh5Dh2i7CKmCCaBYRjrp64ZJgw8hgm8hba2SkTRFsCziBqdPn6KaFoqqo79d7XZcELehTPCB9QQkNfDX1LeSi8Y",
  "key30": "N7pJHdyuwZEgTL83CWCyj5kb9N6a8APpUYjYr58ahSFge1i8Fe714XuK4ri3i4B7gke4qQByFofwZR73uQyUpXi",
  "key31": "7DtM3ssSqpsSs9rqcnSjESUPCAPMF1URfEuLEAEXNwV38YTjku83FH73v8LMVRapd2SnMorK5LMtN7n77EY68Ha",
  "key32": "2EqSbjMueEDrfhhEyr6fYXK5dAjGN4isqcnXTXdBZrGuheA3u2cjo9FsV29LDPQzMYH7RUynhpQYjfnety5qcPjf",
  "key33": "43k3Td5qBqz55rjHf1R74om6wGWamNAEM9Px3TzqwCqLD6d7k7z3MSiWuo96T4q1Aig1XQZw3dTCutWfP9UiqvJH",
  "key34": "521nbyR9aBRc77MbbmmVfb6K5fguykEYiHa7HA6eXbB3dtvLSwu4hDAZXBR8fGTtikugUFG8rpbWFDfLPD9WnVbJ",
  "key35": "2JT6dLFTY9J3eaz5MCe7jPuMGquq2Q6YuxoLU5D46aqssBAX3cxwa4RtTLsXyAziKjtt2KLjUWX6PuNoRvpxwvFV",
  "key36": "34yL7z88j5hE8Ffu9ikYQBSNchVNKQsJeme7ffUoAEvkKWtqr9akXBhWPEmDw2Kre2tgezpKjDf9ywZUMg4V5U3i",
  "key37": "5449qUmDJzSNtieA8hdtwb7cmQ6M63H9tU7iRdrrx6omDaCWSVbwAqD67jfxoMZRhFZEYfyNhjSZFvmxjMe3NGzd"
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
