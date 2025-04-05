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
    "4KJrJujH7bLm13s7zrKCMrfv6ivizK5N5cjJnGf4b5dN3srGRriEFWFhkZ3pbpfipHA3rY8QKLddXEYALzuJyF9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6ANnBsrrs7MwoUkykdXRkzqZYqETxRWDh3zruuXFsM5oixaRUCZJE9wik1TSLZX5Sn3aqzRdQ9xU2EUfNos6vK",
  "key1": "2cxFv3DXQYfMijs2iUbm136iHpeTFTXabyKQofEgo881JSuJst9b1gHzz91uu8jYaeDYoxuHKnBwfGEXm1AZpHpd",
  "key2": "2shFg2jepU6JtYxKQ3wYh2fhhbMAopEYP8HRBvxrnUS8eQWpWMxpoNyMG1gJ5S2MRQGYx8cpe4ZCcB3DJvFwbxtd",
  "key3": "5B8Ef9gwMZZbU8QY1nTGUjUXw814RbX1DMiT9BDyNG8PCY6WrNXifuf1eR8p76ELjfMLTsKGcDHPMnp11JZSQFNK",
  "key4": "5KkynVWERJBAzrh9YvBNNFBkBHAmE7JdjfGuqTSLFujL15CYVscmButGyWh1yjqHd3DtXvETF5LhLW1TY2Ukbd5k",
  "key5": "5fymvPggF2EwECTucHJsfNRqiyC7VxTSRrZnTcq3dC8vncmD2t8yNfLbEj3SDrkcA7U7NAoFX512f9rrxftQdKnW",
  "key6": "5WefYrVYXkEbUpWgcRydSTsqsn9yc7CYWhd7tqjErqkoZQDd6Nfu66wAuKUxqqDNjCy5psWVVC5ZdNUZNQwfEi3A",
  "key7": "S4N3P5R6YGoqqLRJ4BqtGysnAy2wg6j1wRDAvzi3VBppfKVRw6y88gsdHjEshD8sTx88a8xwvpLX7ntNYBKH12s",
  "key8": "2gthnvyhVXGgudUjg6sskq6ZuFsDLni1MtifbpqDBu1fTui2MqPPNkUCKcvZiAPhykj6GnLCwWa6QiDYyJpeUJPY",
  "key9": "4Mhxi7xAjXs149sQTFc6BdLDQoYPFrVVDkgZnDJzwNsQUra4gtz9tcSgDuh8568yMhhLAxo9L6FgmJ7C33K8HWQK",
  "key10": "24dc9PiT64imTrmhRLkRRd8DwPxWQZAdu6H5EtHkijaFjD17n6fYXNEXjKGpNXPXEZgaay7kpvbYy4KqMyWKkUBq",
  "key11": "cdALKgqiY6Xg4YJgf5iGvGmqwfW7EgMLVqxyhGq9cFNS9dNfKWbhLF2P7DHvGBR8jGhfeVeF7Gfv1Qk2gV2WkQw",
  "key12": "34c4yF5mhF3wnAVSvdBWLUGQfuQuv9ceoQiiryNQKKdDzRWbH9DEvWkb8vySgMzMLuoiryAjt4tQoW6eSDaUrTWc",
  "key13": "4PBhjfcX3yHeZqi8wUob8eqTp7ADpaQZgSKfVRckseg5MPueaQNRoNehuosV5456nve39m29c6f2XLZwi6rdK9Wd",
  "key14": "49Pmau8NrvXR6P35F889o2XobqdMyqJfeaCeRDYWsYoZJhaW5nfCs4rSA7ScUECdq5WovohfBddp6n9zA9xTRDRw",
  "key15": "2vkQfrekniEikCf9ueM7xmdGGWv1HY1D4KTg2gGHLWmj7oHsSeGtPJosnsoDTzwPfTjzoyhD9fTdchPifwao4pPb",
  "key16": "5Bgi54JMc45chqEU9XkAGPziWCZogJWutKffuBhv4hr6fNrKMuv4r5LgLq16yUZdKCuTHVPJaFALnmtBx4TJzr6c",
  "key17": "5kRmhnRXHaAKuDsik8cpv4zaEgxLmRXsfuCq4PPEv1ubq8gkARBAZ7s5JcBBZy526NuCvWqgmFEd7BUWDEhVgxSt",
  "key18": "id7A4aWyWDQqRMskJPVqSJiRMUD9fArkKJfbZAYq3BJGExACzH2nQE2VF8gUAnLdzkhvLASBvdzVgd7hjWyeYHx",
  "key19": "5HKyKFGdRZDyi7hZhgqXNzZoTJE7su93WSp6wEP4KcxrUGqyGAiRoR8TQnejYQWgKv3VeMLNAvPP7eC8CXzFaeoe",
  "key20": "66JyoP4xSZhRUVbGgqwLNzHDdfZV3ySM8uKfUFCwDgNRY7zHVPoghPsWjSaRmooJS87cRtBkeJWDK1DHF5RKhNAP",
  "key21": "abKYRu3zb25GPPBk5MGz1A8ovqG2CbfrDj4WzaL5hj7cfHCtp2ZxjNVmeTbswfZJGRncB16bM6EMa7CfCTie7td",
  "key22": "38F5Ss2YdLe2B1RjLE3Ewc8JY19rgMykNCzF6RFXizMEdQY2JeDDPRNTN7WkfjyKS9xjeZg2mwJnvBqLeo6ttfth",
  "key23": "w5iEAEpYgGv7VXV7Qsp5XgNQoKg3rNVo4jkxhFrdnqEjZdYqRuzDCX65wWAGRwzSUhKrgfQHTm97ksvDpScbWqp",
  "key24": "64s5uf5EKHfFw3dys6eBdVHyVhWqw3eoxSjhKvxwhujA4vZiGqFdZkeUV8UqngmPVTLEvzvgXKFZxEkqn2WxTg55",
  "key25": "5oGHf6cPcfRpsqFeko7owzn1PvTaq3uSMmmUB2b9cWV4yXpZb6cpw8wvNPfdegzge7q7aDNHG37DTR2CKN73b1Uf",
  "key26": "5h91uXWHnZjuYk6BgCr3DF589VqKFWeFckr2DQNLPSzJMNzvoCNK7NscWfpmHVgTmzToJ3QA49etUupvZ9tnUHwy",
  "key27": "3Mg21iF7X42K3Qo7jC76yN3VHoF1kFNG48hnBfPN1YziWRnKQvqkWXFKFzdbPSMTrb9iYgnSqJZECiJyhMsWEs6X",
  "key28": "34oQBVNSFEq3j1SveRf8ovVMPhaqqDz4fpfatUm5pyzw3e8QyrSjRmuDDE7ZceLXH8RUM1Vzpk4Sr3BkgBAh1Wex",
  "key29": "57SQsvDg4SdcTaheP5VXGgJGgcLasQ4VLvP2QL5N1eFfSMXpKnGLY8BX48m1wSoW8CqxeFSRgS1SprDrdUZxddzp",
  "key30": "F5Qr9mDM7CepTHgrvzuD9RmiAKhdNdjE6WfesjJWi87qWiT3sWYu8kkS7gVpZSvAUZzn8Qa6LvJmDpRM6n7Ewna",
  "key31": "5WG9rLjChgJHcFEZ1icvw7ykZZWgd5fSpnYdxLKiZKbPtHG1VmowMsMz7itB77oH4yAbQtiZYptLrK1aNLQVXQCR",
  "key32": "mQGyNzaXi8BE14SEsTUsHACMfVWuWLLfjXHuf4GuzVy2y1QGhHBfuVMCcMkapTYKDKKRxzWXicgZEJihLxjjhRx",
  "key33": "Vhy8q14kdAjnEMxKzhJpVAf2mB48RtiBjPDcGivQoussTimgJUR8pFkB2R87yWzf6RZKrseL7u8pBxGBWFZGrVt",
  "key34": "5MNAX22fG8b2eyyXaoSFq8aEuwvr1JuSGLVcoHS88ZgixyAiTCCdDfz32kMHhV4XpDHJ19DhvaZwtDaPfRQBA1Q6",
  "key35": "4M2rh3dwA9GQ3eDEoB6tZj4TYocQaeDABUTxhnqGAXyHt8NX6UPm8zR9wqfXF6iLBD9oiVgQxgHiMoM7rxiQzVov",
  "key36": "h6yx12XuSUGQ7zB5gvzmH9i373vuup32HgteuNGtSUQiwUFLJzMoSSTvLTcMpQD1VfdLTrRKokKv5WrM17YF4FP"
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
