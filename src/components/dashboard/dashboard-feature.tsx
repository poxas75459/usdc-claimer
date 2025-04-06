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
    "2tYkTTDCKTRxt23p2D4G1JboNEx88DYQ36CwiJfFnWUYcNML5L1rh5zTosmD74ZBhkdextdLyyT4wYegwESp17Tm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29a1RG9Ns7PDiRv5f2L7zhychJCgVDcNLEK7z9gLJ28aM28JYT7uW59t46VeAz7R6UpW7rQ87DC1BudaC4r1hPRU",
  "key1": "3e1SEtSFaGxbq9EHyVABAV2qfBPUPV4Z7Vk5X7EMPfdK3fXp5kHP6R4qZEngypbUsU9B1VqHXhPDgVKS7e9g9LSU",
  "key2": "23cFEcZSL53hGpf5CBMBuQhaMYKq1tgkQWeMtRyVaenzgL6Zf9xZFnGgwUdRULAodqAxwKFw2bf7byQFQhkC7VUE",
  "key3": "ut4jrvDTHbtZLjn6PknFsPEkb3xd19v4bN6WbNF6MRdJdrHVCfETE7cEuMXmkeBFRNUTzPQUqYU7HDtbTwcQ3Pi",
  "key4": "5B6ogHzqB8VnKogwXJxpj2pkiLoXzx3Q2jbZNXCFKavtLwPgdYfrpVsxYxbr3uDA8o4k5D92eX4MBTPsYENsRofZ",
  "key5": "34fB73VHnwnViBDWhvYt5NMPgKMGif29LQp8mPkekKf4qPFgbVYPgkfE6waftonvoXEEZ8G1ZCGRwEXYhHVAc2q9",
  "key6": "37ZBf4BGfQW1z5ySzYfs19KS1QJVdTgPjTqnwscUfvbSzxiY179eT4pCQeLBDz8kemDKKgrR9vQRXAeoGkV19u3i",
  "key7": "3SYLtERMLK1HxxCHkRmKwNLgjL2mxmEqiz7jxS4N71HGrpixukBv6fgoCWRzU9TumaPrKG8LfCKwQjsDCx9Ci4zs",
  "key8": "3quhKmJGPM6T4chPhwogkVLjxMRHnnB6ZV3CPjEukR5sFJX1cqg5Kpng5fJmrRmpVZVzQxVdThrnzZpRbRsbeiny",
  "key9": "4RKbbYdWQjtoFEKo4hMZcMnmVJ3EAMvcyztkCNb91j3hcvoV2EgW5H7Ed3U4JGeXi8y53NW2sZUkjhBJMBP4AEpg",
  "key10": "mbf3XjjC1pTAA9HR3oa1NwwFxzCTVGdQLceY8bHghNDHSaEHAHCFFQ8acUBTxWEHHh5QECYQH2P5M1NxT9ms9uA",
  "key11": "4nqRv5yTXjDbNZ53NZG7cjWStexQU9Jt4JGMJ6puo2AAtBagm62xT7Fcz21mCuyZz51oLbZfqMdpLNMhiQyWc4vn",
  "key12": "4UFGHTK6NWZpRpNHJQRtPo1WLMasG8dRZqCURVxCRcCo6t1JesK2jTcWcMTKvTRLKordEvuTSdGztqxhhXvt3Tuz",
  "key13": "4v8TrC6hE3yvpTwgEnEDoPVrXfPtitHUAi3mv2fjyXUoKZsBCiKhQwdFbrUgdZuLeHsxSyPh9o5k1yBqwYdRvyFu",
  "key14": "441uuRSSXAjy8EhEHcciuR9xUpUUxvzgU4XKmCMZZPJZ5jHk3jqY8PmCfXg2N3NrjKzvRM2rLV2CjX6tjgRhQowf",
  "key15": "3bzNg6VpYiubbPWmDdJgxBzPCe6pvSi9cEVvPqwZ7tChW22QRM3DRijSreQpya7Xg5j6A6J4wSHjLLVJou45SZUo",
  "key16": "5xEMsW2kaDdEtw7EDR7MZ5fmUQnsc5hSEnsLAdHSpNvuayLdVxubRcH9j8uazECFxJzfJEvaTF7iFZXt8QoUrSho",
  "key17": "2qVczfFF1UB9DvUnse6egqQqZ9LnN6RByUCnbMz3PvE4SJMrLXALR11Z7dfZZTfcNn7Cs5GiutseEmuHTV9ZBRKF",
  "key18": "3CCNZaUpxSgwNVXKSU2G6hordKt6p9ngoXKYw6iwmK2YKdXAK4ZGGRED6HbuZZwKNirawuTcQvZ5pLvabGJBN97N",
  "key19": "WGnLQtrfwog4ZLnN9cqVtvWi66UmFyi4aB4zNEeerqShDieA2yV3W5CgmXvN8eJ7Fa2931qSinmQ9VZkFe8zGbH",
  "key20": "4gbHh8KgLtfT2PDKFhJdgH1cAsr9ZcgprVY12UGJi5XMvpcYhsuuW8s7dnzed7uhGQSsRPrKXh4zqXZ4nXGwESEb",
  "key21": "3utku9AUXML8UVszQbKjAtEgJB918y3TxGjTdrYRzpR1CBjPiL951sFmTtprZUXoVDhrkS6Vx2YTCoTHJFDjvBic",
  "key22": "2BaZjoFXjFC3wHSpFNoT36cDMEnS9ivnF5f31Y2Bj7CGXu4KUKqRWGNFk2yPyes6QMP4gt431Vrr6woJvQfqn8PK",
  "key23": "4FYLDByC5vg4ezeGovAU6Kc6vDqH5CaSjee9goCMZLJ7BibVZB7iMuzmZhRkWEB7zMKjrckMbW5XvMGaDiRFgVt",
  "key24": "3Roi8xfnZh7MgNmkNvPH1CGVeQny5GC3KeswxNDQSEQo32CDjZunbaMz2xPD2hjedNN9RM6xax1G2Qm4r1Fy8yJ9",
  "key25": "4ybn3ng48KGm8tfB4uo4LiFJF5C2AyYJsrYVejiEZirUa1VWA47z1gW5AUecRz8Fq8gGaC5dosnSLJMDY7mQzieK",
  "key26": "5pJFFYeYNgwJchNe35HC5iBfqXkPKnjESQHieH1K4o7c1eUxyj8hGZsWxbV8uFevj2n95JRBqt4gsM2tBWJNBU1g",
  "key27": "3WYpj9SExTDwr3naHCe6Tm5C5FZkdAV67cEWZfQZPvk22DVbaGvCgSzPmwQJJ7pHXEdUZcLAUhSK9mTvJ3mmbWtN",
  "key28": "2q7uEdP3FFnmwNxtkj4zW5UqBxmFvDyZ26geVhp41X5Y5muMQVqCKEfEAgKo1BxTfhBRRZKB33XP5wpguGcRzini",
  "key29": "4KX1A567V2eW3o9hUUhgiMS8hDwyLbUG8FUXeMSn7hJTpstWWDcHMdqomUfM3mwhgi9oRvJyJHrRrBb4Yr7NmE8h",
  "key30": "2j14nn2cbB7mAgcr7WBsMMHmvxtHSPgN71yJSgvWdfy7cUu3ehjQga69NZo7keetMX4vhKqg22xq69z2cPsTywrM",
  "key31": "4n4vcqXbDQys9FUTegNWZNTQ45FH6ZhVvSJPzPMxMeuyRvsu22adwj4wNxwZXDiBPomWBwnxdwAq7Gj74FesD1Ps",
  "key32": "22wUauchJE4zZSC8cQR4bPuRUzKdBjZj4nGAWrmLhxcwLmjRvvT4sMDPJUepDeJp3cze1XcmFVqNDKTmVfnMHvBW",
  "key33": "5Xd3R5HuPiJbE7Fg4exZ4P2kY52PTaeYXPjyhix8NhLfusmBuHTxraNr33UVVkdGmKa25h8f9RTwbTBEMuis3YhK",
  "key34": "3KvURYeyQMXRkSkUCjZsrn4pipYQj6f5hMk6a8zs3JkyTKmJPg9NKpCbFDYaafqkUg8yQgw7Z2guUwhUBsgu2nsg",
  "key35": "ArELEkMmXmiMds2EZncJYYfpfAmvmPigPgd3mUosajTGRBBewvUdBqU5h68jTJHtRGpg5pDkzWf68W2aBvp6sQm",
  "key36": "41A28DJbk38eciPTZ1bjVi3t1pyBG1DDZUpZwWVMFmQxjgJJS1CFdbKxyZymy6jY1YrXDysEkBm63qvnjbJbqvva",
  "key37": "45z168uyLxMBEu8aiTaGuS6FKmuRkzvZKp8xDg6zo1QZ62UC7gawVobEaV3B3JSgxGtnoj6bkTLCot1hzA4Rn9tq",
  "key38": "3PD47BcmdWH4AiaxjskeVy9JtZ5Msni26ZGUk33CgX9fPS2D72fDz9rQE5ABps66vvuroNPRBJ669LafadKEGWrK",
  "key39": "2BGEPTSk8BVpQYXyLbwofmeppAE19XihCK33m3ZK5xF1bKwusNxCSS8jDH7A2pWx11rTEXCttdEs7fg32shHnRYz",
  "key40": "5DpwqjC5nA2opdQMbGiSov9GvdbVHxhQE4i2kJKKs3TBhgmgTAe29ii8VP6DgpNNHKpwT7RNUd444N9s7VbFJL1P",
  "key41": "2Em1evbq4dEt9QP3Ds9eSUWuTaoDnSPGRPmqWr6hbGXZMfuY4xZyb5qhzQ5x1GcjBPLouPgZqJdRoU2paJSpey5x",
  "key42": "2EpwRhTquArU7Cw2b2Z1HmSGCqLpZStN8PX3DX3XW4z9LGSCeqig1ezTHPjoYYBmRRApMNP4T7Mb51crWbWEZz9d",
  "key43": "6445C15VBp7kKENzBG3vUUtvX24cyTYSm5zpkGMquHcaWX5zUqaKkSMxEH9owjQHGrYweBd79fnvu8KbWn2mgi8Y",
  "key44": "5a3RXQkmNhLKiY6s1UfXSKmU6fjbdGqQF3SPtwxY57YZTHAQKxPPtPmDbsoKkdxPK67n4eJSzxV7waHtsmqz1qVE"
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
