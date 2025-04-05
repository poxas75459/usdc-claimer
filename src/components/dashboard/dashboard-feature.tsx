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
    "32tUjR2sekpvJJgBcN2LvnPcXc4xvwvtsWf3GFabBC6DhUTuQF3bzVrvh8XWGJiEVw2pDAJdBdBAGgSok6xQWUMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VodHDi6kJv8fivr6WSaYFDRrgMhk2mTP1sunULoHDJxGqurfWE6ihq5dqra2GXVeosN8HPU7tBtetgfGJJNG5n1",
  "key1": "3WZzN89tuHaqgg4wQpY11NMr2h4PtJtq2BUJa37LXfK1ynCMmqAoFGsq9fruKs29tMRrBdCDRd5D5rQFLyCznDFL",
  "key2": "3oRB4awo1L4dtTx9KA2nmeFWDQW6onMyUH3itpPEH3eHwaL5ua37bwUiBa8fHZV3NVznYsfZAoKoU2djPyE3biE6",
  "key3": "5yNdYYsbhtAGf4KLjZpGX76siLjGJ1CaudF5m9N97JyxmV7xRAvmVEuD1pc7r77H7grhXZCQS8Wk2o7b8r6Dqpvy",
  "key4": "F9QyddmK7ojScwMLdZrqHouJmRStk2sEfT6j2u12iMbaXhR48oRyVRKxNCbcyt5s7TpVwphENzLWXu84bo7qoWF",
  "key5": "2QHR4YsCWRYabM7QxAfKifF9HcjV4GRJiRo46uxDhEMoe149fSboRMoWAvccRqUvGF2h2qi2eHUTT3omU6aEzCCh",
  "key6": "3BMfRDJknr37Xoy54AqnCx85aQrMvfcJsrR8ac1qNGC3NN3hQpm3snCQoiZsXvQPu3kwKU1rFibNMV3PdrQknmf2",
  "key7": "3JyZcZZkoH9kYHpg8qugkveS1s45u1mCvQxJRhrzPEQPYHDgoyCDmUjfsxzYQbDqjS4RBHgdpV9vY8qhaYYoHVdz",
  "key8": "2srnDBtoJU9LRmvnQddABj76qvBmR5Qp8x5MbMVjde6vmjwwEW6oKdD23Yv2mTviH5LKeMuxFqoH6811hm15AbKD",
  "key9": "2n3dpxh5vbnitKiWEiUh8qFWhJBzitnXwKbVPFcTvrBpbpzb13NfYEMhAeBhiDSqzBHM1Au251JSzsgFupp7kcT8",
  "key10": "5NmdC5BdfVzug4s9oFjom18LBrSa1XZoQXS3JPUYKUGgr6sJEZpLw8QUZ4MN1VuUTCXDdmb2afUW5LtyGKoSZjUP",
  "key11": "2a8Ub5YdL5YbYuGUHiRoQ23GWMxuRdLRReffHQw22wdQMrwyeUnuhZPmSLwgvGusWn6c1knGzJgBAsaPpjeeF2Cu",
  "key12": "43T6Npj6fwNAWNaEmgTWon1b6kfDVTxmMxJUVuMdYsA63j9E8WTWLaRq8PFbudyzQ2uda3GebWN9NMcYsTQy5REW",
  "key13": "54nXT3AearE4PxsKLyNeFKeyzpQxU1BCWrRyqo9VB6ALpQT6X6ucCdNhM6fFJFhEjaA2gQiYZmGNGsStbD3Pcymh",
  "key14": "VvzHC5DZ6LUVESR1Rz8VuxyVu6yCUrVrvACAo1VXRRs3vh72Za2gw5WFdy1nL4LUmBW48M1n43eQ6Vc7CDFqKE7",
  "key15": "649NMnCPJGRVpx9J8VpqcD1r7QUHAuxn2M9M1QFJz55xNpR79D5MKzLy4JaA6gB7Jzs2sL5zAA4YrUWZzpWhcGKU",
  "key16": "DtoXPHxgVb6XWGbK3MKP2SsVs1a5sa69A3wnRJJ2SeQ3Jt5GyGGTtXU2tDMTc7jwAD7FjLzoNunEbFg5a4RSiqj",
  "key17": "2uZU2w1SVaYVhH5EyTqabynYdSS9Wp4Lp6RAJCPPwD75nXFJ2nyXYeGzxG1dXuTEgeaxF5UQYM5njvMQvFDVoReX",
  "key18": "49m9UaEKTzihrscxowEEPQtPXg18LKhQ4iANSb2tRD6fjuKzF3eoowkaJX8Kxggr7Ry3j51Mp9MLNP4Q5kqa5nnv",
  "key19": "5DJPfxCFZ1NHPUrpFbAmQWexQD6nH1nBohscV1tEY4kqgsikzJX1UBZ32ieWEpxPRjvrkzj8PTTBzcwtSSs51hcS",
  "key20": "2ekGKGSLfnVumQffB5AkbQHgymLqjXMYVkiTWKrwTkLGuf3DPRm6A3QApbfsD7k3DJMLFTFHRo3h1qFsLKLJe5PA",
  "key21": "3mMcgx5cFZrQhTFHYDk1arQsGAVxQSMyfbQ1WFe89WdAs9CMUjFYfRaHTixrP8NevftSwBYeDWV3Scrh7uPNhqfh",
  "key22": "3xPXmtnPseepoU8DcTW7zWct3cXGMHHrE9tuZjnDDokntupKKBfQZ4536upj95dWtpukns4xxmGQY7mJpCFCZi9G",
  "key23": "4Y2XhQGRt1iHcp4MCiiFdHVEBASPhhZquRyCAC1jTyy3njJoKRRS5wYywKxmTXg9Myi3eALHMDuXZTwwBhngU694",
  "key24": "5VYRt9ZikxLJBhdCGuF7w8ZAXg6BWQxm59sAaUU4bpXPH4zbbtjaGQ1wM7TmyUwijsbbSD4T7dFURzVdCZwFsctr",
  "key25": "4NNgH8Yb2pic7hjE4iqSEvGm7rkbEj6WFNw2gEPx2H5zFd7haSHsxuMMA7aScS9pisN6LFo26iUSK58Lkc7FP6v8",
  "key26": "2qZvF6FKrGcYPuRS9mdfXmtipYbRG82jMgQvhSTdpcMF2RBBTHfuEVKCfxcVh66mSyGMBFPhaGHGwYQqxuPXThqF",
  "key27": "u4v3eU8nxYRVt1kQZNJshazbEhAgk2a1c7qvtbz8fE8ogyXVr811gW8ZACtUbYEirg2WnRVUBosXC3X1UYnb91Q",
  "key28": "63tgbwfTQh9n2Uenv9Rg4piZaxkDs2YzaVBT6MVm6kpyW3SybBQ8WdhC7C3w4eoTyAurnfm5b7HsgLCcsPVpD6PG",
  "key29": "Y7b44b7czjbnzTTV1BSPTMP2iqvuZCN3KgdqHrh7miYFqL37bjPC4foFqu2fdEgs9BduQLoHyET1R7qUa78rtwd",
  "key30": "4wxdLw3jaZKYJkkhRdidYwdeYy7ks3cdztLXLm6SpsbA73kCtDFiz253GLMLokU8nHs4izx5sYHnZJGUGEB79Fas",
  "key31": "4aLXyDAgPa5j8DdZ555pbKuRJ2vhN6wYfBnDRZxwtxmsm3PNumosRRgfNdC6rRC2o3DfN6o1bP1YMCwoi9qoc8MF",
  "key32": "5yqB4wogUP4huFRLSiCQdybGsgMwxypGjo8DRGRCT9NcgFuFy6nfUiHY1vV26yQuU7demyPsXfg4sNz2sgs5Qv6P",
  "key33": "4Xdc7GUQQKHhUSthCw1cW7edXGgjg8PxQfxSTi5qZjWg5GNe4fF6cxUoV29H4LgmB6f4AsBxeA6vDSUZR8aJqynQ",
  "key34": "nj6Qvt8JD2qDiYstJagAU7En7bqv833TYqeBE8Cehtic7R6TF5ns8CBgosUvFWWLXaF81MRXimQ3CQTYuvuxS9c",
  "key35": "2yKRmaeWMWhMmNmdUEELph8h9MtvM2LMHKnpEWXFbGBnwD1ytALN9E2N8M8ZnPDVbDJQexgeB9afkMKqxChEv8VR"
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
