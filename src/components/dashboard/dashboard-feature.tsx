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
    "2EhTi9SZgFQuHYjXgDQ9cEjZSTb5BWVgFQaupmbwvQieGRPm7Vott3oC6HYCrcNt8WLPz5MGi6cJzCJGSs2g5GfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WoCVtc5WFfYd4uj2DtZzuMbRRa7nRzBNtBq99YfuCws5W4QH1DzCFnEVNGfXPUvcnK4eZda9q8fy2DvqpfhFdz7",
  "key1": "3mnXUv4DRBRmwiYdfEAkQCYB2MvpyTCSVzvgoMj2rUayzL1E2ZTezPazm4nX6rzc5ErGMutg2sFBeM3wDjfXfWwL",
  "key2": "gak7asv3Vrhfxgppvw2WcBGGgEBdQrGmdtZkCrzJdxEz7VHFMVaJDtbzymfibbDD4y5jvPhnhnHXvwZ9EcQvJu7",
  "key3": "b9gs5eMXitu6UgZtVS2WNM7cCp3m55X5Wqn4ZQm9TFSEq3trFZ7sNte72Fub2si5YCbvrf12eFQQ78tE3jBB2ad",
  "key4": "3d8B3h1sp88wvvGAkMzeNNF7em3oytCZkzQYPT4c4iLgRGk3XoV69sdRqzbv2LmUXTZ8LsoJq63ZBL2ZYRaY8Xpt",
  "key5": "2cTuLbx53paPmtDMvj1PooNCs9GxQmZ8mWYJRQu1WXJakPfvQ2GFz3pdDC4WFLQsjenyzajWEQWARCnhuqTAT2kH",
  "key6": "2nUPwJZe5WrX1sqimSAfuUwxheaHqscgUPwJCEBpjJjrMqd7AfVmR3MnsPC3HmAYHuNkQAKEJEspzCEcHZvfhQMZ",
  "key7": "FCqdqSerYYfSWnqBLbpnh7mE3GbcZDgN5qAxEmd3MhXoZ4asLGxmKLtCnvA9M2jpUiVPQTQDu2cfKUgdcn2Xfdm",
  "key8": "2bEtVnLZXe9ANK2WoEb15o79af5JBpkwJqb2XjDzRGCdxv4ZATHZb6hc4FhX7NZfz2fdFvPYpX1oxwLLkNvprCs6",
  "key9": "61QSWaXverDcNDGUof1dWUm1bqE3T5LQdQtM656QtG6AMEG5NXvsJzPhFsQATQJWq8d2h38BVxMnJ1fAjEgEaUMg",
  "key10": "JX6RqYhuiJpWAjfMMRZZin1bVUAAi9YkufjcwoPXMjv1VsVZnivk6sECrfXgUfz2deifwYj8qMMeRSjzvEA7MTD",
  "key11": "39hNjsEKq5xDeThvsuCjG3fookgEDi7R1RibBM9bmnCUXk4GaeKkP1PZqairfxvMLHYYgx1b7wiDpzdZHKwT2b4g",
  "key12": "3rmFLFKCaXte2YKiifohFieL8quUcjCDmNrKXF2cZ29K7BgqwrDUG5JMx5CZHfzvHfn4V7tGZ9FNFaABZ3s5tZ1s",
  "key13": "2m2Z4gyUJ6UGzKM4jd3DAmopwTCUJPa8LRi3fYrcqkuAEFR9mkwFxUpiTeZL9AhE1xkmvg55Vxa9Tr83tvmYgsbh",
  "key14": "668uG2FyAkYUJu6ubfLtKUSR4LAN5gfJqVYAqZuXeGDrckX9pGNvu5YF2FcGYnZKb2Zobd8muvZnyJfqXn6QnaPy",
  "key15": "Cz82ZrdiJcHJaa1BvLde4AVa4SHh1UpLQjWdaStkbrN8xoau2ELjWPV8eWWcaWq6q29F1TcpgeHGLithgV7875z",
  "key16": "5PuihpKsHisaxhQKbMGw4u3js2UswJLZ6EJDMckZ8rmwxi8U9AzDnLkve2fuGANwVKfVruStu9EnZQz7cAKLFwRD",
  "key17": "3T32XEd7GUYsaSEdLPXd97JfbyMc6vBLh1vR2bNcWka74CyNt7h4Xmr3n59PvDMH5R6cJm5MvTCxroZH2zVEVqHB",
  "key18": "3qKQ5yheyFH4X1UQcdUgTAxS9FuMEdZwt1SVEmhErp3Er5zwckeE2M62vgHxdzR6awtGipS1esAP9Bej6wrCmin3",
  "key19": "pfJQUUUz14neJSXdDH6GYC8a2SbmDdsHqGpYybfucdxnNUVJft7R6jtipLjWtuwZeM239Mm5E7zUGxdQk9Rq6MB",
  "key20": "5gfN83uC8R3aWHjfSCrVgAn5tvxDqDe4ibk9HAFJbjBnbtM4EeyDZryw2yrNsX113TaRw1CV3sLSabpSSn3CgDjr",
  "key21": "33vJ89gCbV6AKc5ZfR47fih6hSogmZiHPzWbA6k7deyd3Q1PWe34C6cXwuoQNSYgbqRf4DbWnGtBDpFw1j2fSn37",
  "key22": "563CBgzwzMPChbiG7Gxu46dteqtjhSVCHBFjmvCkii5nUvCxJwhs3tY67p1CtpnXjdYRr5Cjfy1QDB4zLHfabQnV",
  "key23": "4nhW2bLCzEkyJZGPWnFhuWxd8nZhhWMWrHgUxCVAxdaa59sxK3jnLH8LDrXpgyhBad23kmNAuD55TuKix6v9MizF",
  "key24": "5MECeqZGdQyWqqh9QGYC3TRxPGd2shKNn6wdCrnGCELJ6N3dZ8JHofTMjPMNXfYMM2mQ6mLJEFSZ5UdNgCqxvkPa",
  "key25": "3qS2zQziwdLppfM7rZTPKpdV3dBqeMSnY1HwcBfiQPtDKEMipvZqceZW2CUoaTHMzbDtqdm65ojPfo3cbAFpiKtx",
  "key26": "4wJAK45mUubRYQtroMPM7v8qPDC2Qu4KqUsnh2ozWUNpCbkCrqMAJVcs7bZYqTBid87oaRT3kLRsBsmo4Sy6vNvQ",
  "key27": "2E3Qtt5wYZNw4GdBTfsUF2A8jfVXV2E3sUj44xcxpTpWDGje2cFU6HeHLy9mtMzMYk2V4FzxD8he9Xg5wQeobq2B",
  "key28": "nmcxtFJLfDiAEgnoN8aTu676jFA31gZSXYM4Uj7BB8YQNQyxGqagm8zzRkX2EVSkTHUaEe9MBP8cbYRs96rkevD",
  "key29": "4JC4Gh2Y8s5rerdmNMB4h1KYyL482t1dgqqDfPUQ6L3txKNbAJJRqmneiH5XFi2TBZaS7z9FWewAp7irD9E19eoK",
  "key30": "2EpHZ6jPu99ZCHn9tFPXsmsQiAHebP8We4BFLCv3Jo8CMDdn3kAzSJn6KavTsGbSJd2GkNxcoDyj37XPSc5yCTmT",
  "key31": "KAtARRq6XoKFcD3QRiqVcRSPKs1CrhNpGgD2rcw5jx8VE7vbwDdSDy7MQDMnyw8Cuzo6F2c2RH7SS8nR27sKc9m",
  "key32": "2G9r77DqhdtKmBjoVGAaxxrvY8MgWZNRGYXXkAn2uAkUhgjWKaQByCruH9P14RzSk8QdizWRegdJMWboueLukwuF",
  "key33": "3yr5qxPhEnmJFY4hGBzgYF3xXpYVAvRDVUMjPFHTpCpKkqHZAaoMY2bNNQZzKRk8E4YeVU81ppr8q8SkkmmTVFBJ",
  "key34": "Wd8CohJvMyrXsRssZ15TNt5E8HwaYBe6FmGpZfg8FP9XHHopxYbNr7edYqY3LCy2WF4yWaT5kvnNC4m6AvsSxZu",
  "key35": "4ZnnMUD65RLCptT7k42myGqPednWY4SG1n6QEoWfvtjqByxkeop1RKQR72qPBsPtY4M4fuTACUqxFuLR6bN7kVRC",
  "key36": "dwRncCkZ7PSCnhKid6pYxj2FqEkFfaouphCwNaf9w238aUoa71zJNnHD1ZmehDsjTCCYhqNunqqemnTCAg2nwC5"
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
