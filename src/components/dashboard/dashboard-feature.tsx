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
    "7XSyDFqifRJFC7LrMYU2UwMLsxi5L3ipdnoPzjHs1G3uuy6iFqhJTn6q879xRWBkEaNvLfPPGc2L2n77qkbU3vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZFE1qSZmFiYhZmPK5vJsP4Q5bb47oo6HE8KdEJeKLfTezMJXRKVQpwtqx4HSyrFgGStjiGAFBkktvTNT4CGrPY",
  "key1": "31UoUBF13RjFKKKqhhBM5KdndGWvnwVGNVA6EujiG1dwMiWBU57hrF8ZP1FAWNT9JKmd3CQ1KkkaHnJW3DjNL7MW",
  "key2": "4tH9YHkC3Ax7ZHSWx9o8vsFVaucM1nksMeAjtP7MJiHr2dm9wLCYgoEeFkcffXswpUzEhgfqGa23Nrt8Goy1QA5s",
  "key3": "3GudnGigNJVPNzmK25aBgqQrFao7oJfXMtoutgduZnZbeYAAJu7GqEiaoHgCKHs44kMaCbNmN5ybiSBNNrxYey7W",
  "key4": "26tsHzfpSpKznRpngeaXWaiZkumfYM5VnB6sRM6DTdDchwaFFvRreq58bMZFDyzccVpjME8BbJ2zDDEzJVWP6Ztf",
  "key5": "5PLSmzSjzZcWrNQygyqcQK5RhSbGQC8oymPkxc9QvRUZuhP4WP9h3As5Q6jGBE27XTtDfsJxoMjUgUVS53DRBxgb",
  "key6": "28tua3hj1rftJMhioQXTAMyfT5rFMAEvPohwYD95M3hudF5KtCw7sRtNH8E2bK7wNhN2cKUadyfby69MHdKJXQq2",
  "key7": "5H5NDWfChiEdkD7aRMSWzsR3NTF6bQkuDBieshSo1bM3MSrhcfYtQvTLSG6YUBRJQTKaHzt4gCoJ25xZjPLokJ5g",
  "key8": "3p8x5p6Tt8UMo1dUv3LjPhjKULeixYPmGMZzG56UyomhhfKtz2pUPnLVLJVzabdrRZgv8vSJV6NXuB2uPbNJjC7d",
  "key9": "2MbxYQj5yYRJGLNLXBK2fQNAqpP27kGQKErgGw7uwngSpV3uMvTdmxpTBW1nMSptPtTCKe963g9SjbTfxM5gMHu5",
  "key10": "256t1tuaVSBvzMqmFWVwkHX8no5dxmg1YRuR9bGThTSTNEmTDS4Dec1E7BLqiaoUVNn9DEaRTLhuth9vmLMjGdv2",
  "key11": "5PEoGokxxNe88UeTHwoQudPdiFpdfYtvgQ5AYv7WziJHfvqLbucza2EdVqRDbU2dAdpsTkCaCGv97m961MLtJYs6",
  "key12": "4KTrSkj86Vn9ytVLXC3Zx1xHFeq9TEugKsf4xUALmLbLH11NFPg5pVJgaQ7oVvmFytSXBFGXVV1tzHrWQj9Q9qjz",
  "key13": "2cSwzN7n9ome4nuf27s9JoXw7LPJ6xJJWoaWs7w7zg2bUCGMqBKjQ3A2DxXQHPNQAqZ3eNjjTt9SsAYX1vA7ZntB",
  "key14": "4swviJ8LqjL7xvJo7cTWCnV12wNwgconBRsThQMx95vykGusqYTkvhKgGrbcvJ4EjnevpQuH126FDhdWKbRXU8Eg",
  "key15": "6gNkujENeuR9PFhUf5t6ThtXxhAwWNxWMYzDrWjvxapZMeWdpXD5sJGDESzXJ5hF7MWxy6FyKhQUc5bENfVP4Re",
  "key16": "5UVvxNmXzjBWqGfi2sVyXHDnzgii74Xzgv7c1YRNk5nyrwhJRsPgop17abNhkCFww56tkGQiNZ9LHYJsAMqAVyAK",
  "key17": "2ciDJsutLAbVg3mDRKyUsW5czXWoFvbsnxMUbJUzj47dWCSuM1z7J4Xg7DhUeKbm42nVMm9uyNonsuZ7fysAfbs6",
  "key18": "eSYm8RhBa5wWyyijVEBHVME7K1YHeZMdVaekR16rdExzrufAEjPxHAF4N6RAWPM3ZQ6oQQdzdXsRac9gemtJqFV",
  "key19": "3EtX8Pq6PR5tir1TBcQ3w9uiQecV79nTm7sv9pnTdBvveCjuVS8DRnoR2CLDMajukepSa9Feunbju3qubehHKnH4",
  "key20": "4ZDiV7VWfoLv7j2SNMz5m4FbwFWhHTfHnNYsUvBhGaSSt68xDR7e4oMP2J5S2gk81uz4jt5xt4z2bZMMuyWxWr9n",
  "key21": "5aPK1XPrFx7MycTAPCe6kUNGiZUZhVopqBCG3WZsWaqgoVnzDcUqCYjuB9YWiqhQRrEWKFUszm4KVHPYdxb7BSpZ",
  "key22": "3SGp5an9MJaShQhsr4kGDQQ8fqHjFt6RENmhRY2dchVapaPQ4SbUF3fgRo125nmjGRz2aifijR4fpAXQ7thVvXwV",
  "key23": "3aKRSCR8Sx5qxBTKzGyVfT5pew6s5uPNYtgccFAsRRxD74Pz2k3LztTckHxjKHUot6vBSs6Sm2YVddvAhMB6Ad94",
  "key24": "4MBodmBPkJiDAcPcgnsZg57x1rGMBQnJBncsewT8oKYZfZfFbTzAUeWYdzWKZ557ai7B2Pabn4xSYqaNfgR7UJRa",
  "key25": "3bXnqQryXMKVLnjfumP7ywkGbGUnxYXsC37ZwhbjTxDp7p58TQpwgvV7YkwZfE57nBv7BMZgeDF4LxAwTfjEZ1ep",
  "key26": "3VUAonzZL9w6pEVNG3LxADqAq1omnaGiwRnfsQLVfpvptNKq1iLe9UUGsLHEDYvFVegW17kTkSfWm4Ur8doWVgvo",
  "key27": "5gNUVGBJosQHrxdjXm8UmgczdoRGPq4Chd1XnhPAnutiNiVUe6G9gXhJsMqZ1JRpfHBgJsasxD6c1BQjcMdYp2kV",
  "key28": "3s4m5hTnD3PKywbTGSc9ovbqLV67V6AtPb9HoDHZTQyUK7iEWZ1wyvsbGeXFuTRmts3573yFVgzDYNnSx8FiB2MS",
  "key29": "3od5FB4wdcomYuysnBMNT5YQ1rSYHYsFKHADZKyanTmTqoUsYAQ6PjEnc9wd9HXQb3iXzTLdjSdmbt494onA9u2",
  "key30": "5yF7K3Ena64ZimhiVasGfms1pVuqN69xsE7bgdDkrMturGdYaRQriWsA3ggVhVem4kHuubuwSBDY8PMyQBRh3sxH",
  "key31": "4XXT8YxDbs2XcphJRsTfJz1renx4ZYBmiXt3U5i6n3AckFBz9ipeuMGSUsDYoWEHWh7nTqVahLptCk1xtRn4U34r",
  "key32": "5uHVg2C72K2tBPCwbu572MrYYRE9R9dsLLFvbQDHrsM5rw1EsDzMkLeDxep3SQNZaWoP3ahkcmiz6CevcGH2mf4P",
  "key33": "3a2qjaJFaeCsLbgxsHzDFcDCumKhqUboxUNujsCLRBJ3vQMUpudgvBdG9H8vJdiBUfBrfJRCsyi22oqVgig4KfYu"
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
