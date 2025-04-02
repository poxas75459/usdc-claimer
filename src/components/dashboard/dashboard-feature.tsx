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
    "41qqw2HmgDAb3wmivwUXWeSdrBYMY5sGmKwBPZXwwM3Mkm5eVmp22AfKjxJT3jHLx1N9MphmNxUxTcq3cyMqRLrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54EEoQQYsaFn1H8cL4HuS15GgPxCxp4hyrctphqSydb9e2VYCMvhBsH4zProM5vyyDJbHVRnhnCr8KjqjT8CemuB",
  "key1": "ruANFwizvKN63vV2DqofP8fqpbo92nR65EtsEihmW9PPLfPBoABQccgW3cVmD9kZ1R8fafyxrRTkjiAvtkshaTk",
  "key2": "3Z6gWrR9nXAC2a2TRFoQjYs66im3qaPk6pJHPtya2Bev592gsrnBGU67ZYpVuacBmLkbWf4AUU4GNkk8iG27iSML",
  "key3": "fVW44yv5w6tZPuJ8qBQdJUhiRBXBSTSQU92w35UuhZqJpjPqMjiqWfAetHoHYC51YY4CxHjcthbwUooKvnXb9m1",
  "key4": "xAQPVZXeoVdH88mbrGqNLnx1NbQCfKXNV63Vgf91HhLs42vPF4m23CUojzFP2VtLdHyuLDvQqurvPC7uXUbqCJy",
  "key5": "2EwvdWbnSLzHKTezbtcEog1SeKqWttAyM1u6L3t7yVS9y87znA5wHnYH3VXDcLftHFXhoEGeaE68aRLUjSQG5BeS",
  "key6": "4fuf24EGpZAzpUjaJ3DuTE8EUZVi34SCXhEZxqoq5Eg5oCKB57LAgpXDPgutge3rZiz9aLx6FHojTwCZUtHV4icQ",
  "key7": "MSA8ve8sdGcQV9xeiuTXzSUm1mKy1qK2WCRkNy7kEXot217EUoBQnawU6CKb5sZMzN5gg7JshaHcJN5V1JLnpDY",
  "key8": "2Pdgsckxw4HbrZvi5fAFJCaQdnYCGa3HF1ReuzVWiPDXW8Qn7NtGiKRkGG3ZDWGMDpFQcCPQ8WjSkvV95V3FuswM",
  "key9": "2coiMyYhrQrxyUiuGqnscmhZCz2YveQUXBePc2dyppx3nvC9tnZ5oxjzXd1XfpYSmkTzRq1Qp65KNpjQwj6PFmR3",
  "key10": "5pMPVcDZwsqsaF6M292aPH41x5ozhfDN8y8ppeZbanSGH1wq6k2RWNf9qSh9EBNFvXtxrgpA9B8jDGxFisiM12Fz",
  "key11": "5aztc7EdDPbQFF4HKbUuSNbzXH8U76PLujyqZdiAgR4Hir7Ki9DzBi9KpVUVTks4uQRKBVLZLTKsEAoRg4bbTctJ",
  "key12": "5xvZBL2r3d4nR9fwQwy2sASBnxEymkugTHJYw6ZLKk2bi3j55DMEbEe7tm3L1D37fAH2kMPEK22ETdgdbrVHfNXi",
  "key13": "2ia8pfYbSR5uPkEGn41LFiyFPvLmVBja1DaDwxn8HMK8bjF6hNERGjySL7CkHomXfbL9rKuBTPW3ugaYW3BdBbtP",
  "key14": "3h15JfXjW5TtEFL8iFmYp4i3oA3hs8wDn6DQvirDkh4CzmLyMz6LiP984RdyssCLaBmye1Jn6fMAFv1EwD5MK5AS",
  "key15": "BvX4PvS1wiou7wmri6ovbE9Gg46p2eiTTS1tTGzmPesiGxwFVyrmyn6NRegbQdFXD9dTkaeLkx55oC6LVNKW9sT",
  "key16": "JBDJLDV1QKXsL84TZ6ig7br1sPRsoREspZsr7fskMnBNdD2AGmfTpbgupNEE9bLLXvyUpthP9jy6kvY6fvQFrZC",
  "key17": "3bQY8ZfRvtDntswu6CxXeYuz4ZcGL7tp9Aq6v8gN8uf7gZGo3jucJHhd6NxuQZZnyQ8QJamoW63nbqrMBJS2mMry",
  "key18": "2rhwDxWwEJxvYQcw7Bkv7d1MUKQfxqFd2UMSCAk86sabQtiVfm849WdEa49LhBy9GkFfdzfdnKYgK4HZGmiLTgZ5",
  "key19": "2uB1fzfzBbF76Mrp6RmhsZrVndk8uvsBXuPU4kosgmfhWi2CtXF1WMzCDHB6nuy79M2CqxyH46krcmoVfZTB9fet",
  "key20": "ipu3RSJ8nXza4x5PqJWFVLU9vPHQp56TbtDAYzof8JkygVpy4s8eRZnpJk6KUMmMSniuPXimKPe37kgE66BGQ6F",
  "key21": "3TMeEXzz4LzAQ3ugHCMb4Yirb6Evg6FowZV2fL2sBw9ABMv2F6Hp4upqtvdndGP7bfo7TrKVmD3ekb7mgMHTksUm",
  "key22": "29eefvi5mcpEduwtFEPhNto69ukKjFDXnsz8fx2FB5Zm9QowrYtUAMGUxo2wCsX3Mn9cFvoDVZ8LFczHzomKM7D5",
  "key23": "48jpGqbzjVv7k1Dyf7ZoBQQpGPfcVvZq5rAUNL9ysA18zbJ6pQjBjSQZdyF5zC6Ye9H6PoWsG2v5ypaqtHGKrPKx",
  "key24": "4igtZdQtLJmVE28cReGe8pUaPtdYUnBpVG4jXwHmdFjSnPmu2fedFSzpMjzu6oGhrur8S7jDQLDLdUzPWBmhVFdR",
  "key25": "2iNYGHsCQXvGvhZFJRsmfUYpq3PRZxn6DbLHH9Rhxf58rEPNGZuMWyWLtgmRvKoKysU9KUkvppSb61gqswZXnGHt",
  "key26": "4N7fTQrrFDrLZQPq9GbFngXRLAawrPeEqbWFRD1VE37pKCKxpidHVc4jPd2w7PacVr9uqSqXybmYadU6PjkJLE6M",
  "key27": "5DE7bzp3jPgdwgU3oYAqTuDU8M2HNF5n3J1PMqWRuH3BMQStU8LK2YA8sQ9VCL3CxZyH33LYeqcskcvouVeXWjva",
  "key28": "hAh7E8p263hDpJcu7mzepid5FNHZYrcTjo7VUQXSFUdG7Wp9hWkFnuGKmFa3whH9vQ5SQWfnESHHwBJ5g7WeKPK",
  "key29": "56oCpuozHpWtQ9hv1M89hM2m8eFntgMVDCsmhcTYxJzBWQT4KpiLFut3UmPLHExpBQ2U9TxjM2NRbp43Q1tk3qAs",
  "key30": "2tbm5UgXMRP75dresUpUwbo4ys2MPbjdJvKGiBL4Rq4JWbTGQtRBedaxjcBpsm3b2ez2QeuHhnxTLiMVdAv1oHB2",
  "key31": "5KhCySZYT1hLWsp3axKxNe6UnKqnJZfC1cyzJygfsh7DGm9xikKvNKMBdJWQ2vyZo7DqK7YoWcK6nLsWsD1qeqbL",
  "key32": "4b4134WUafquVg1rghtfQJWR1w9dssVK5zGg7ZK8EPc8JhSP7CEUe33t6CvXP1cPd5ra1phzMr28mFmiDab6ZLMM",
  "key33": "quQ5gSBoAjL4mCuouuBV4S5Gg8vzocMwA4LmgJFd6Pvt3tP4VdNLh6bZUoApmUzhGXHfUMojJbxsLf12tZqGunE"
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
