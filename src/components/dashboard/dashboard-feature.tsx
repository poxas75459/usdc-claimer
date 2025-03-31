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
    "4v1ckLnNgNXXsHU4A4JDhf3RFF43GTFT9vxTCcRQmL5a98oKavgTQDcBeHF4DtbiKtha8cVgpVxXH4ybowHeY9BN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31FAnEN6fYwGZiCNSrKJytQfWyoQgyggwhBqw8gsiSh8ux1kSKgdnv5iQ4pvo5fY9kNbHbvvCiSVhTt6jRJzwuRL",
  "key1": "34mc189RxREL7esSa37KwomwKMtQmExvbQk414aBNhXLD3BefE3ao4wFVtgpaUqLRiT8SSt1ZufGNkxPc914Fip7",
  "key2": "5s7cVkZr8mcWNdF2xgq9czePypAWAQcq7ZNGacA8FeMAKY1JFKzpUpv1R1HUBvNRT2rZXa9Zfq1RikBoDF1he1uJ",
  "key3": "5MdzVUcgXiGqSnmyrU94PKWwPjSpYG7w6cCJFCJ9wf6vzYaLRZNFb1jgdfHqVJKkU1VQtFcFWRAk9RAtT3X3hgpJ",
  "key4": "DUgWmVmrtqP9a4mjTvJiL6qCtps52RcRaWZZXeSQSja4phHuMF2Dg3MTYgjPFb4TCd47qmtLQeUiMdYkpcEdLTk",
  "key5": "2vm1p93nxSjjsRf1urxEUUzHjMtHkWoqPNXcnReJPDSmSYdUNz47HAUQVQTnC6sTfPMETNVGmCQYirgPHPYtzqPL",
  "key6": "3W2BwT4n7hRbFc5RX4g6scMmZFDiCD45oBWEkkq13syqiarPLNR7mGdLYQ7hMdyx7HDqULQSsJKhB3qFD3MbVA2h",
  "key7": "665uTDyGGwGPmWarWDZNXDqpvRVecBSAZ6NzUbVaHg46gzVSQcVKj9TmahoBWrVpdBoqqgddoGYm5q7ARqr6GbYi",
  "key8": "5MT5GTEHRGLcEq6x9VZregrXssSF2MFcCxHwgJAFQnRCJSwHyimhww3Ljt8R6qzx4yr676mYzcMuVByDy7qrA4q4",
  "key9": "33RTzEW7aadWsv58ZnHvoo9CTDEahkegnxsixBJom5vEYj2y33vo5KVHs9gw3mYW2TESYhq71FYKnR4pXGveLHvx",
  "key10": "2KG81uEnKDfJiMGEukBW3wobqxwp5fYTnXVuh3rUbMrXt3sjDGoEWNHYzNpy9wEBMytLSedYH4NK6FaKXt6vj1fA",
  "key11": "2QpPa6Qosj236rgpnA7LqLJ6gpEsj6YzY4gdK2uy4yzoGE5vkuggimpsgWNyQCS9gS22e5ngY5p1NEC1fTr4b1aL",
  "key12": "rMgn36VzFszj1CorYX4Zd956ssru16LgqVJSiNZnCxS1eKkfUiDjrFY9j5mceVijoz2Sa82bSX2N9NcwmcmUBva",
  "key13": "62w523QPMcAh3JUrstn7GJWz8KWKeBdParvsnEtzmVH1yqPjg5DJkUeJuXySVT9mn2ybYxe6gCK5jdBA9CfnDsY4",
  "key14": "5swfULBS1wtyB6TALwi7sBAtfrRT6k9bGDSeEfgdKo9wwzzPM5dv2Lsj66JfYeJMWsiYmpd9MBseKyuw3hSFa8eR",
  "key15": "vwYN4EZ9xM7gELjfQvjunpLZ7jZ2v2RgXU4AcY71kSiEmadv7L2ApW2oWdqfhu7WMCbMswKrF3MZzcnQ4io9rPp",
  "key16": "58z8aScF661Wooj6AxnoFoC1rSv9QQszdS2S5dygMpNfjKGNP4jqoowRKPXLrxqyYytrtVi6JaVSuCvDcfdG5xxi",
  "key17": "fKWzexRsAaHLQ8bxQVpfJodQSqca8yL77Z1QipyW7d33v4NTPzMXZYz5SKqGpfv8eZMfvFncVrBE4jiCYEDSNe9",
  "key18": "2w8CUjfSsWWhy7KHRJQRef4Ux4cW3Q9ECwqvJKiNWoAuCwsLZ9DVKHmfrqR94QMqJmdhwgafzztDxabCr8WLU8Qi",
  "key19": "5NCzLuJt7zvsE7wqwibCijT3nRt9eRMBLcgByxCpYyREcGsQVhMhmuRN8xzVQDtWNsHE7JS8iTQGLKaS8SbB7nky",
  "key20": "2nxSF41XWVshrN9A4J55ZY7sJ6SRFEuW8UE1XU4wwzL6bbULELfjvfuHtfnRybxKBkjKvY4QcDmEJLVanBJe8Ktb",
  "key21": "213ii22u1ZgpMhPDBaXtW29bwpfaWW2oUmNxw54FkGrXeRi2YJ9yLYwoWH29Fs98wdXXLdxzmmzeoQrqfVGLYqGM",
  "key22": "2sS4HJTpk2DNcnCAtFxSVhZrEAWPYVAhabLLWGRp8rmSR9ctJCNcUtCKH7opLtHyMbxzLYZLuk3VXSRddya6XbRf",
  "key23": "2ZZYdxBgEcFsTwrqjh1jk1Mkj1RNB6ReQEQViR8up6zwLDZU9dRenQeJT2GFLdXEsjhAVD77W1TnqppqrZrRCiZ1",
  "key24": "6V6JQoB9eMxnenFkWusGqanvz6e6PYNF2kbXhaT28zXcVcitdweUey6s9KeVyUcV33J6NumVkUAGyTFsfPQnWgS",
  "key25": "4HgVLwQ3LmGrdS8hpU7NLaGE8GpGjVt48MR9ZXQUTohkWhd2AJWuBmaXFZos1AySRhgnvdVxwuD87uSvKDEkzWvu",
  "key26": "4WhGLtCF9Hs844FWAYrr8QU4rEbB2xjRwJeenxHsAyuGnw8AJQ6LpJDNxxhpgzrMmvib7RXkvtgw42hVnidcQFLQ",
  "key27": "3cRWMASxQ43xhunr6gxRHMpaq7FKUqeLpKphnZCAG51wabcU9sxsyxfyKt7PJYxqnmcK8FvBrZ8qLEuAEY69kK9N",
  "key28": "4Noefob6yM5vh43pQnf7bo2Fnr9Tkc52ddXxkR51xzadmZBjMZywMXrqvKf6QACZFDmfgEDYGuGMaQZZgHB7dD4i",
  "key29": "4g64YBLTb6YrEN24U48B3ow4rfYQT89BdU8ewai5TqbXctfrqWYcgd86Ud1KoM2b7aXq2hQyDmAcRdyoFBx8oLDg",
  "key30": "ApJULttB4Jxz62djGzzn5ujGrevbAmjeNqf71iLLLWwKXJGxpcURej2WmcM4npJvQHxueezc96V1gHhpC7yL8xv",
  "key31": "F7wxGKBrWawnqmiFJrYSxhiE67Xr6HUCbEwkd45MihhVceonvLXKe2SLdCAVpTgJzFAaRGEkfap3yZ7xhexco8Y",
  "key32": "jrfrC9jZxLTVzCaS5x6edqovr1KitZHYA11EvnQzX44zqVynt3tX61JZCdWSEQQspwrHLRMQBA6SN1p68ReCcUb",
  "key33": "37uKcSerFbMxhHbwFMRtNr5Nj5F3hDqHym4BtRiqVYRLDzLWtUYxwHpVH49pkqKN1hyHuG35oZyrJna5zGMHpVjQ",
  "key34": "3sq5SCtpYsFKuqxcns5EAbwrdb3Pn5WjoGBZNL5JvwQygqriQNthtS5pYrtS1cqNsQSriFSFWmjFRf75KDR4UzNL",
  "key35": "3fRwKg6SEzcrn82o4wXb2ijiZrvmWvJ2V3P2unE2ZpWxSwcPp1xpDsDNDGrvbF8tDcDKSva9AbagWw2zZVH657d6",
  "key36": "2QM6YdGm6iyxVfJRiavrYhsKUypSfGpKmENtWgiE6EX9kjS11LTEfZJhqMixy9794tRmH6ZjBy3hVvyQjHHk8A1y",
  "key37": "2nZmjCNi2d4Ar3q8WMZR3xmZMHYCDqjthZsRsUNAikN95SHy6i1HZHbyDPohsCZLFmWFKCJzYgR6VErfc63JZhxR",
  "key38": "3ioK3CFuPFKMQA4HyxC1VwJhzKtsmprtYMMUJXPTTfVNb9YN2vsukcH6cjA9ppQqijX4yMEfCtfBDqM69Du81xYS",
  "key39": "3QyFQcxvDqgq6XLPuhTQde79bi5NyRT2FDiREmXGdqLbu5GVWM4xNa6ojteEjZCPFSJ9XnqhtCyfxM7MtHT1g4EN",
  "key40": "2rYFSX6xTvzWE4S69x5kn67ckMKbia41esFhr91xD97qA7mj3zCPmttNaoa77qwqsxJQkK3AAMHRhm4Qb1ZbWJWe",
  "key41": "2TgXTin8W5E6Ewq8vapVr5XQEGM6DRqq2YDF7TAHrACyCspYGgbWNpeFk3dBwCDHd9yjN7wv2eSkbYam6GJXnLZt",
  "key42": "54yor5vsKkBSy2vktt44vrrjqAZrstyd9cRyfsiE4bGNfMXC71mRAL5NwV2KZzQWoUt2Xdnsb3HaX41XTRMuP2H4",
  "key43": "4mzsJ4AE9RbqHnTQL6Cv7azWCZbfC6DZgnh5oP2uZNWoJLmKe66stVFv5GuVE8k2GyN1fy1mvgCHvvWwmj9M7G8u",
  "key44": "21jAPrNhzppG2uZwJaFbpamZdCTmp8JmNVwTHrdmSoAwa3Gu9RLpXDeQzmzj1UA8UHrgYvvSAZfuNBPu5MwL4KKL",
  "key45": "2hoyk7z4k8EJqba2S6hYc21K3Mdrz5uPnCy7zP89wnE4ZEm4VLfjAZVRE5bJ8aSyFgApDYwKMTR5p6hBCUahxpzf",
  "key46": "3Sj69uTrftLZuDFVxs3avuPi8bba6RWWuDTYZ3cgJbSKSobLjAQTaRmrkaKyGKxRGmN7gp4HRojysv9Qrf5K4Aq"
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
