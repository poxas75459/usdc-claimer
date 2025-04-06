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
    "32zqn7QQo6fF1yHRWgM62ntXUY6RA1QQERGCpvBEvc2dCWPkFPsEnqu6ogpX6N4P6ekPazwo7BqsxvBiWGg5uaxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ME6EYcpHKxy9NMQQTCzrZKvc4mJ8WDzXTxETBvwuN41zJPzz4BMoPEzTNwYGDEhx5JNtspaT4dPpFdxEBrjXsiy",
  "key1": "44NVbiQeAoJ4Tp1rJ4vXRYps3182DqeFD9qUhrt1kxzDPVbdLuFCLxxaiinu7bL97H1nk94VrzRQTeyTk2cV9uCK",
  "key2": "5trLjUXqyJtsNwaxDnXXFLi6Xjc9gg3YgHtCVeFe775rVg4ytULdg7Ei3ZXhyfCJ2DwfMP8cENbrZ7oEHtUUTfb3",
  "key3": "4oRKwXaFk7TG6mmZxLFqBZPBcAdv6MZrirnxjxCKbC1KEq81YuzS37qzsDpJDd5zEoXf5BaqYvJRg8BehhLMjk6i",
  "key4": "4pakZp6oPtxtCcN7nMmrbbLVTDMadRCLy1mHaDKHbkHJkKJZce7fResmt8zRV75m5LK5b2TF9exRdfsP43faxtGb",
  "key5": "2SHdDdvQGj7DGGwY6RLALjqGcaKUeLqcYBHgga4n5Pc6x6XSvvCJuCiT73j3ioMHsdVFQM7M8e1S13JXM456cUJi",
  "key6": "23yw4PFjN5BZVM6wf9wcQiSEoQXVLuozeaFe5eWzd2oxbd5wtsng6yDC9KmDVJZbDu4i5jWu76ooT57kzrTArrSo",
  "key7": "2Fy8wATNEKG3q3yjbwBWhGB1rGKhkRvwDHPWynzQRMgaHQ8fXPKr9pbvSLvf2VkSpLABT8eZzW8oWBYu4ao5WyYD",
  "key8": "5KkMZvZCK1BkFfY8oKuBk2BvdsAJK7yLYqVwLWHSSy4drdtezWwjs2GnYhjXmZMyUNxh73a9XdZ9UY1BwTU5arH4",
  "key9": "4pb3Li1forcQagh8GBwAzfQ7GVGtCYFWTaYQvt5fLdX1vvRsWAG7PbWjTwE1zaLA2v7p3DpBeghA2hbcGQpHHUeB",
  "key10": "35Rozx3jstZ46Z8Ln2Xjjtx1BHL8QvhYmJXnEioBSrQ2VE4MN15HcQhyTTLG64Pnx1wn1BGarR6JaMgtBownDJjN",
  "key11": "5ZT4JLRWoAbpD3Fs53x2kUktGmTDLjR19K1dicLgDp8NcaREmdct2fS6c5R5f8wzp9GwptxQ8dTPhZub2YP5hUfY",
  "key12": "BwdECR4BZ3AUsM6Ws288ovR35kSC3KaEn4pbHobmReM2cbCnjRFHJyz9iWRmJyKwB3AbxV7SrnFeYT99hkKy3Rp",
  "key13": "5niAsmUhHuVRwzb2aPasxdRBvAkvF8Qu4iyhK5Sk9YLTceXQKCAdey3gFvxhtS15JNaTiwipQvRAG3HcaKiRDbKQ",
  "key14": "3yApzzaKtucDGjB8LEBvkHnnQRJkjeU5arNVNhQ8hsqmYZcQw3sG3L8xQb2zSSsCRNoWQveTnQ1oLsduMAY4AhS1",
  "key15": "2BG3Hv1VUeHZBxgqj1cewtkCygSFUHwFX8DDAmwym45L8ZJnJSvxkNbGAiv4jEPidPT3rkh6hSG591o9UDVdxHSc",
  "key16": "YW6TJqWZwHeWVtPmWuhzSXULMzo5z7EGH26cZjcLcZih77iLEjr2TKaJxKmiBgDtyS7tQoT9bh8bEugnNyXNZVr",
  "key17": "2GiVf1UQ1Fjnn85oCRgBY4RugapyQmJbijMye9dAoMeVzKnAsKjn1SBfpVTZeCTPqLa1vWTfkXUFVyhoWbJKBbZJ",
  "key18": "4LfVbXY9iPPnYdKkLD3rgwZPGMFH1xdjFpC768J6u8ybVH8CgBqYW7XNhJM1nMZDvMyZgXLx58tT6ofxfvsS5F6o",
  "key19": "4z2JUxGGGfagqcD5LxKSH8yY7wq3kxvv1HggiEkGjM37WRSPaPDFjRE8vNwh1nCS4GKi8DDqnGJmzcHa5sz9JVMQ",
  "key20": "2pLVtt4Y5J29jwtexy8SiuCyUSYX57Ehky3ocNN3PYy278PwWXTd9yjVXSJf9tcWqGvFBJGePdPXzeDEhiMQjTwB",
  "key21": "52oeDhD2SHcEsUrthXLao61FD1ENU9Xq9e9hp3KJ712f5qYKfM7jkwiaEqqRygSZsHKHfkULXwGk5T9aEvW61N4M",
  "key22": "5WUGUA2hspcsRjjcJkQn8CURMUjDfN6PHvtJBXUcnzkS8tJzqnMC2ZQEj7NmTxrPy1RkM97T1EQ2t1v2gSZ9Se9q",
  "key23": "5WGdLPQ64r6TswbqtZEtC5EqPcjnEKdkrAuVthwyPoBa1AGScB5Zu2PvkELcxpqR7yW3Y45zPespPqigFJ2MWSbE",
  "key24": "4BJkRyYAnpRQ5nJBeGyneWbdKmTWvgN3hasTrufZ3bV5RFyw8SvLtwvXR4DCMK8dvYiw1MZM2aJfwmceEVTch7iw",
  "key25": "5iUHDs6NQRwxTpM4PMgxYvBBd9zpvQXUHHzW2xjyKS9VVi53JSh6Nf5x5VvGKSJZf4SgDdHj13ZrnFoJHWzkH4UR",
  "key26": "ZadnPNWePfXajHe2ri6p6qiGiy4vfK1oAN4DAeoQV14e1JaLBLEJjgrYzsJQpzEfxfxZqnbvAwEsSSrUujdb4bN",
  "key27": "2JJrR9WRvWVeQUyvX5r3uDU2n5b8nexdJPGgrqYnoJCXfCcZWiN9fWkUUC9KUFvT1cX6FLU6KvnK9ssJbcmAYyY5",
  "key28": "35hoRFcPWGNWf7FaRTciWp8pNsLYzcV5SetAnwTq9mMcP1Q2CvL3yHw8CyNiiKHGmoT6A1SWPDwvkyW6CunDca8g",
  "key29": "5aL4g699a2p2EjDafWVpABfpuurZdhLAKusUo1HbGSBA44pGxZsgkwF79s7H8RqVy8UHWiMAaoYvvuczLXtYpRAR",
  "key30": "5qnkit1vhSmgpm7JPyEx9RrenfBcxXaSC8R3dMCz8gB8q6YGwBS2CPXpHGTotaC5dBpbejFfLZQd9nF3Ak7LZGso"
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
