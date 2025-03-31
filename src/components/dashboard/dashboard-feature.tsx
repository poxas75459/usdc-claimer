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
    "5HFkzsus2xXXgY2f2nPEbWPgyrnvYYQdpujrQUkcxdKby2mvPuBVNWx2hhaUUawgsN3HfNayKyLZyWUNsMfiXqcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E1qRBqeN77DAp55KbfjkzotruqdkvBn1zU8eVJdADaXmFDiQesfkiSqQ2nefHsMNodohK2ArQWQxFjsf5avCDZM",
  "key1": "4ueTfsonconRyCfmcx9sMbV4QMAS9HHbAwbhVqF5xqH1pdtsBLdRKWccB6AaWkMTCQT3Nz8CbXwpjo2JRL1e86Pk",
  "key2": "557p7dHCboRkdJrc7tTxTyWe31zv2ejFQcv2fsUrtN9cj6V1NkDSD3PjG9wL2YmQB6PEmLXEqsWnnqgFygQz12fz",
  "key3": "4G2M5ZKh8xJRweFYcM9Hq5UhTfW3G7DXpW6txWyXKq6oCUAcXuKqzuwiM9ocTAgkiJD6fnvJjSy3aigHpTjHu2Sy",
  "key4": "2TEFqH3pfmK5TssLuUGZaDpPfwV71saamTYjJ8nRh2UHHH4oiH3eqweeM4H2dWZW3UW3yxmrszWEYhJtVG8dx2wf",
  "key5": "Qoh36uXNhvGz1yF71dJKYjEx7oPqSztagMwS7TKhTUj3QAJz3AA5s5mnN6qs6cqjTaiArXzoDECdRsHUakPRgEa",
  "key6": "4SC7mkQcNn5Py7fZTYWzcnqmBNoYbDFuuqQfbhFsoStzSSx7xa252aEJScqcFCUi7B6wAZquxqgt2kaNzXjGhq7r",
  "key7": "5mavaRT6CZd1kJvzwt112wdffABDmEoWu8MaM9CiyeYFigVtySDBLaRuWw8uVv4e26ksggxeQaJX14HXk9MMxCVz",
  "key8": "5asMvMfroyNN8gDDXkS7n11mrT6rkEMVoutqbpmd3bKd7Ri8yGrF1oMZb8DPmYN6bSpmPM2sdUFT1eKTyRL4mBRB",
  "key9": "5biNWhbKHPzBAcHYaWMCzJiyz3aiqKRd5NkFMSPUa78Pqkv8H9cLECg6fwaDisSed6ZPrZSmTRMMipgsPhiwrdVG",
  "key10": "29HfscyenAYM9ui2uRZWXgn4pEtupgCoPu23YZJViECJ8yJ55LPf5oqFqFr9PgYcp6CyqtmYQoxVECryGH8zMH83",
  "key11": "2kQTGAX8eBuf8azpgLbYBVKh6t4Z8zkrg132STDVpsAggsvWKAaFTgUGMUb55MkTiunKSx5RKkWSoAFUKUYYUbc9",
  "key12": "3zgKhAtuZJe1cqASQ2upvpPPAV9DqGFidUkHezm8ShZ233SJLA9bJxheMt79oCPn2KZbXdA4PbhQcFRe3DB7MyYK",
  "key13": "2ZDyfAqX1aZgbKzNFcJDuK2sDWUztifka6a7eEavmYpWQhuS2ALvQtmXJgmAqbVsivvNSKfQNpmKGFYjGF6nFu7",
  "key14": "38KtN5bxbpT3Bj9thz1wXAD5fKwvh9XJMzBCzo8a1yKu8fs4C8GMkXm2FY2CFUMNjQXS31F4zShYWbHRwgfDBtD4",
  "key15": "5V4X1yp7kcMMCTgKsPkG4UZRC7ob41pgwqZDaJG14CV5Kmxh1kETmVf3Yz5dNK6eMCNnAXpr2C5UsU7sNqvVjWKf",
  "key16": "4dzXyrzC7tDqsdkRr1kMTBpRg7qYzEpv7oa3oneFy5VMKBNGysggfggPFnBfgJgvf3xFmqFjhVcUQroewfjZkZsD",
  "key17": "4XpZKPt2fndthzHHM6sJZoBwMd6mMG43A1AWXfEPPXD6QHGW8oumBUSVzNAMJtDDWDdPHsfuu7rU5Mp6KnMDGUF1",
  "key18": "5sdzrqc9ynTzHU32pDhyQzsvp25aaqR4w1PeeqcKaNgK4ViuusHSpVgFX58dSVsASZ9UavLJfJU8zUbQgarRnMPi",
  "key19": "3baFLk7tXGkSVz994uVMxWxD58H6Gfn4JqmLN2GKPCb6iPXXa3agQGzBwpRDo2L1Gn1UDGv1EnYKXzwHW4Dngx83",
  "key20": "3ANLjwpztMZfSc3vkNsmQrtU2399mYkPHkx2iYghoqWJA92NTKWXuzh9b7KxrVkDgLeh8gjDnkGVpjrezrZUTuCz",
  "key21": "4Lj7pZA8BiQuWgBCDo4KpgQmaDvv8k5PDtyCLu3521PoCymFbYc2huPJMGFPgbhTnP5VssQ21U2nW2nYdLNMNhLJ",
  "key22": "3wJ8JgqPEu4GDAzANW7PbDzKogfVoxV7kzZUQEZhPdfKMtCesYMZRkGQn7U92N47BbYsSDToFoTeidqmze6SUhwD",
  "key23": "5MM4CJydwxASN4QYXUkB6aBJuXg1qMLSQeTfViA41dXJaAyKSqBPFLw6rJ8QzwP3fn23h7tu5xCikJiDMcK5sMYp",
  "key24": "3HqpiBJb52vLDTHgC2NoyGAMXaCdfrHutibreNWYd5KCVsakWeXCJr5GMtPW5PSsP5gfKuF1BMrG44bJpCu2JjkK",
  "key25": "3hCEUfLD8Dqvmv4XPWNhpjwPMUVHhXqanZBW3kbRqDpupFcyreA3rQjb1knpGs87bHucub3eghphhm6JEvJGjuzg",
  "key26": "27Fn7dKfpTwZXQz4WWj9D3msCBysyivptux29m2tP2cxyha5rdVzcQJmLu95tzmsx6k8WLvcqW1uxwS4Vm88NZNG",
  "key27": "3yyinBs3CwUTHfNRkjSLSTUgyjBGdfi89UcMteKY7uej8JDr2JzLGphmtXtupydczsr2fiJB6Xh1zmgi94fm5oR5",
  "key28": "5bscW6EcmP9D3KNxzu1H7dGgqS7oaMwnJ95vw6WcowMBiYGKCnc8dDqHpeTfgsqtkR4pCjdgbJY7hxfAZAWN69aZ",
  "key29": "45J3U9fyFreptBbEGLQN4NobNtnGuW7fW859QV3QBNib9CUZPkqqn7Fs876Sep8gaNmKgMp4nYXPtaDWMZqaXbmE",
  "key30": "2L95zXXPZMD5LWhk7Vbo6KkeuESPjJxN5r9WzPmBdXyQ2GuTtWWykPD16oYXwFEhJFcci7VnYUfPTPuv1tPFYAJJ",
  "key31": "PARi5s8XgkWhWmCQdGdpmRqimE6Pt8KwETB55KnU5BAvVjLzKkpwf8XKQHEzmJxtgbG3GNYNPnbM6rpiW4w2xP1",
  "key32": "3WLhgRzhV68BrP3TYHYpJivgFq5RwNkbnAeQpQhbYcp5EMH75WFQKcgi3UcN5x2waiAuoLQLginRrGhApuLztqbJ",
  "key33": "3CCT32JXVQ6MEajitHwC6Amno1fEvxnRFcKVgDmYXJdGCCMQTRcCnwfyN8PrTTaKTHJ1v7htHFMJhMhtgMQ3BNep",
  "key34": "25cmUhmnxe6VWH29BuyM4U5K2NHrtyLzNP8bGNuryNGjZrRnfP3MBVgMb8w9VveH6gXMubcxbifNbk5ZxrzJYvXX",
  "key35": "5DFMF6WMSy3z9QDgB65g5ZWQdRMoXFyA8prFvgXCMtFvEQVWRuUVT8twFJzjC3K98V2jiXYMP7yoxpttTJoa1j9P",
  "key36": "4pmTuRoWL6WPz5fgQCBzdYCLtfCabYuM79QUKBgXiRzN6yLX8xUn2Ew4Zbcri2v69jup7DEamsRaDqQiVQFaKajL",
  "key37": "46w5SS4P27ETEZdBmtqLLrsQhidC5nL3DdahLGyFjP97wo4tTk9cdXvNVd4kXdz3aAYJY8s1PqTYxj3VCCWHS1ve",
  "key38": "3a7QZnY1ESjt8pPAKSLoiS3kXosJVqrQ8ksNU3gqUPDx9kBbgitC97Cpc6ZA7GLWnikemvYPVgKwCRuPRqPJq4hB"
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
