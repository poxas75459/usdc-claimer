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
    "2ZcELGExkah3hzaxyu6Pu6zggpxyLtsPm4xAxpandUhezH3sXKoYuqJULABXZ3G4d2UhNnq4Gx5qkhMjTDe5Bf7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26PyiEoA7jsR1FF3JBUyLUswLmtMumHV5PsAQy3H6pz6MhDoFWppYwi9kfquAv8Gq5MhMnUaX4G7X2d5aWqzj9oR",
  "key1": "2oMjVm9x59FfijkJVzK7XXkQRRPw9N3d1jM4fGae2p8WUxPqWvz1D7NP6MtApkohvUL5YDAna5Ks8mmcMsor5fvq",
  "key2": "2bJ1hwT1SPbMjt9qyqfHEvNySCtiBVma2BXLvwgWpx4Er9JNnRz6FDz1S7ad7evj7TxSkKZ3vzikuhZUn1cxmDzj",
  "key3": "5CZ4EPbfFYtDWyQDkt3B8NjY2xVjgA93SrEQLQfpeyLQujuCzxfptBqkcX33HdNDFcEKxFtjbs3Si4fARhJTujrK",
  "key4": "4zubPy6Ts3Xy4qGSmq3YDByu7jFt2vu4S6Nb9yirixbBDSpc5a76yWYwHkKzMVZYtEptrvijhBd9NQejY5SHMkY6",
  "key5": "22n1pLMxFP1X36xj9B3QPqfCmCP7h2MFdMnxUsqz3aKy6wesFhKWNrH3rra2K1s4f1d8rYyWh2nxEJHjJs8nC81p",
  "key6": "u5Zd6so5feZrnr4U18sMXSWMfa1bhpQ836tcDn6jUAM4mJSeNABFkPnxGJG3qnzTkyHLjbf8ftxGPJAMNnAsLjY",
  "key7": "5vaNtkRSvSW1LZL7skqLizKwSkMHUf1aF1f16ANByU8SU1PjjdXK3Sufv2aTJ4Ra4QffcNimRFYPbt3dvbCHPMK2",
  "key8": "2T85hAcQ1MHEGQPXzhNyiqmtWqMVrTjc1otWCrMjnj5y3JXhRJNZjqgfyNueFxqG9QBk72n38uAyHDaoCKLHGDvL",
  "key9": "3NgM9KvCPd84LbhTTV7vx77VLySgaFWiShsHE4cmKSBvj5smCYzoQfWgmMKNELjoDQ3ViAH2uPnrv6HUxHXimh1G",
  "key10": "4Q8MpbQKrkXMYM4QeGCaDETwU92mFSTRpLJ35f5ZbMYJUvNnygpiHKZW4ygwTVDNtoXXYErjy4Pu1kwWHyMkiKhS",
  "key11": "vzR1gV7gZGrj9DxpryBqGkKaMuSrEMtuuVgTvdNxkjN4N6wu2YK545becwqbAbGXHX3LRfbvsaQkSut9RNNE7Tw",
  "key12": "5dECgJh5irb15JgT6ftitwKnKr9xiySvYekbANEsPRdyRudtXJ9yDAK8J33Sga6SJF57WQDtDPyU9qwPiQmYSWK6",
  "key13": "2qwDk265Ae5u2KsiPxUTEcBnY3sgRpzh6gsG8KHqhE8RxQNbjc7HYTs8zH8amTbbcmR9gYVJ2tAPBaEuY4D6aBxo",
  "key14": "3gwqhMyZCjY1kEWEZGkDVMNFmcQox6PHTFMF2RmA8wRA2TS6PwygTSewNVjJDtWEnMYAdexJnL6rTgaVXARwi3fy",
  "key15": "3qVu5V4qM3mrCGg6Ya24uRLd8mhi24xHMKcbapkkQW6HXTo2LX4pJmMLWrZpZAA3w8uAbewrou4DmjPHapvUJEmw",
  "key16": "4J4vqytLaXytUsh7qmbxBPdhtWqG5eR9J4UPRCHZbTq6rsz6C2PBpfEJXnLhkbApTZjoAMPLP35QHQADCLZ2qhJp",
  "key17": "4zZBXsX9or4ZFewsbFM84S5PFEHUhnR9yxATFUfUEiR61Aj7eFntigNptjiWVTt46CbdFKTM5QzLzhfMrkq286LN",
  "key18": "3Tbc3gLYiQPCpJNh66cdegy4Q6wm1MjJwPrVp7rti4EFCaijdP36s4u9ymSGn7uwd3svYRzbzX1dvJporHgw1dBg",
  "key19": "2jV2hWapV93DTJ9Qaut5XKDXjzKydiPLpZF5UhDRNwtagzwQ1CZ9sAB1oyK1MB5eV23TEr33TbPRzmsgcg5H6gNJ",
  "key20": "4wvqKtdMueUJWYsdsbxoZ7XK44KB5ewSM1qg8NSQQvyozaMKiqPj86GpXeMxQqPxfar51mDrdGQwC3ynzqB4jEvZ",
  "key21": "5Amiga9wH6DmtpEpQ7BspSSskmyMtfMcVvXmUyL49iC2yppGVvBpPn9QoZ56Wtc4P44BmmBSdNynsryz6BZDTzTg",
  "key22": "2Wm3C5ykXVLYRnUAdXNbN33gBd6zVxGECFpC5ekzCFsu9q4eBPuoQWga1nQNHq7sVyYaSUfp8BivqZFQt2237g9q",
  "key23": "5mX86SqcgiP3gtkSiGpzdm3YY8ModQDdo7QmLSixfmpPFHZcCLT5HBs5PZdxS5TZySr6tBjnxyuH3Y2TdVQmWaqz",
  "key24": "3zh6Wx5ksUqd2eogk8iMGXKcbf9XiDaQAqxmuaDv8jyrqPfdVUL2gmc79PMCCq9D7FceaJ5MgybD7vuU5H4F3KKN",
  "key25": "8ggDwg38NGN9pmhXgZRdeRMZDc9iLYFE55y5yTTdgC7pjyQhKRzNoad9VWgsXhAfSWzA969pHTuGnJCB4HZ4zjB",
  "key26": "3vCyxwKmWdi5xZ257pLPq5pEvCM3rKJ4QuXwSB7g695Wphvwpe4xQ5diBZUBBB32x4gxtnDngJecSzcPPomK6Yn1",
  "key27": "24jrt1xLq8gDPXDh8w7tvwuudbsu2USVYyjk1PVZ5vnHhjs1Q6rapkEpSGdvtUc1PCecWh5o1QciW6Wsj8jX4W7j",
  "key28": "2mvceeh9v8STb3MYRHfdTDhZzkhC2cVrkYECMnKx6wB6aAzDXHBVkezBLRbyuD7MpckvffrNXriyjcMwZrtNWtCz",
  "key29": "4f7voweT81w6EYSa6RCaLjGgMHVLCo28UC5usfbdukTtpvKhyxDQPrmvF62sa27Pm617C8EgUzdCW99oBTrevgVj",
  "key30": "36UZT3DosGKoE9zz8MiwK1ya7GWv5pdauz4y7LCiSSYAXt3Hc6KoJXKsut3SXjyWioz4vhjRksLLwV9TTQaq21mb",
  "key31": "22jkTZMXDW6dXjAAsp9RMZEQCSErhfmE9LcTkEWNUf8RDSGskZb3pBeARhAvUHni6UUfDwQt8VAUAZgYr1yJookS",
  "key32": "5ZpdG4RFyci6m647N6Qb9oTRbPNx7zJvv5Y3vKcuxAyntLXBcomURvyFTKKc3cnM2YTTbrF9czWybxr3mgMg7eD6",
  "key33": "4pW2NMvZszL3UW2yZe18r14CdBUTrrAwhgxDgyhnXQ5ESnPk8Vi2aLJeGxwAujqAtFCaXbxz4AXXV8wustG9RGQG",
  "key34": "5L5vTZw5QAMXH3RbxErW9H24f249HACp8KqHScb2H2YjWYvHg9fz81BkXhz6ckvqRDHUwpwPr1Tgxg4wNk7vkdCQ",
  "key35": "2psjVH71XypYV3gwF1Cb1qKeYNBtGoAR4LkeDdfp38GhL2MQoh9vZ1fjWudLk8KxzUg6xAchjsPBNQ9vBhgQvzZA",
  "key36": "4q8tkGD3DEWeUYKo29RpFZHkXqVSTmsymtVRCUQSB252TTmSs43ctmg88fx5LepTn6k1GaxxGBDhKK9xvRb2nmGk",
  "key37": "26VzUAhaK2TkCqasApsdpXG6BKzRc17CTUWG74F1phPonYqPV7m4Vy7McBrAv2VZ8JHDsC4dMFNLRoWAr6g1EHaH",
  "key38": "4XsX3T4iCgX1aWeyveXA8Jo8dcUyo6KSDDmnA6UbyQHNbWhAJjGgYVubE9DYqukHANQZAE7oQGqZMjJNNP7tWkfg",
  "key39": "3CBmeowcJBoqjW5hG199UsAQXw7y6mS3vRg92G8hAaLbihnFZRrxDpe2vfxzT1UCGK1pniRuzeinMhy8GCMGKjhH",
  "key40": "4zKJzFvPSFokZyF4uE1cAzpk56MXD5hxz2RgQCHbgYRY2f9DrxzqKguhfQ5pVp8N6zbD17ckuhZDHoKKTaYx8wDT",
  "key41": "3zqvjyx66t3X8pahJ2Chmcx3qMPyjL5MW2xGBvZKs1TVk5S7jXBrqa9r63GuNcdAWa46JCE1UkJ68N4mFBV1HtyN",
  "key42": "2m52tKquY7D2x4NaHwZxEoYRbgrLvCVmmj5z7gEih9sR8uEjVHTzCSMsSDF3pZoiWwTvMya3A4yTkTNQcPkNPwys",
  "key43": "65umY3eVra2t8j7JipQE8ki3CgMvMfpJsHUw2p96RcoEirmbwGetiCiAb1ZDCpppEhngv6wETKjkCXgMGp8Z4zT6",
  "key44": "39NitEBqvE9NdYHHCYMipCuNzRSWchdR3QbQTtuhHGSfkAdj7sPDWsLyH6UMLRjii7NPTVyEyoUMjvZUeMeVqU9f",
  "key45": "2km5gVDoF8ZbKC3UutTFAQBybtU2cBnB5QHn8ewYujN8WX7GsQ7xuc1qKykXohccHY6fCw3dmC7Q1aEFmyQYr5Wc",
  "key46": "5aPNzRgfNB5kwBcaZprTUYfvWghZMuGhZ4ZYk9poC8Ya9eReY47YG4iSFJttvi2FoXXMt1sNLqqK1C3k8G6N5TxG",
  "key47": "3TrsjbN6moarfSbwf1UiL6PCPwGwUKUN3zdt6d98o5ZhSjtNgSm7CsjiZL2g2rJjkCoJL1VBasvLkD5vKsPg7vDL",
  "key48": "2YNnWLmrY6JNM9o6kNmqdFBYwEzAoPJPdFB1SaEDzHqDmtSfQqF3NBUxysyMNKMooE83Xx3nUt6c9r3z5typfm9b"
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
