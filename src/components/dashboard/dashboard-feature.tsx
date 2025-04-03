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
    "4Hiu8MNSi6E7svTtmt3Lgs8r6qczet5NMytBiYKXfUGiBCeL67GZSuubGpSG8HCRkTnh8tdvhUjVuqE27kw1SS8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1Mzz3fWsVPF1xZGSwePXD3YausaZDdWHqgh3aESZT26vdqSXCqJpavcidTpTQqMFUvKYXxKKRqPevYr6qgkWj9",
  "key1": "2CKjMszSKENc9bfEcHFdZ7VnyLq3536mXNsWCZhrXs51e98QEHXKwRm6vccz1vF65doWpK51EyKMSPMt4JdpGwjC",
  "key2": "3vfRDYsBy8cne22GfBo28VjgKWQs33spfNcgtVVfgAPyMjQPJhSd52zRqW48rXfiXoRjUijXXfSx3mzMxzLWabQ",
  "key3": "vTcew5yMx1gToctsndTQyzfFFm5nQyG4WcvjW3eRTX8DSmq2YB9P384fquPAg6S5st5798M61M3wRX7Q3D9Dg8X",
  "key4": "ba6tULQxTpxW5nFPyv14NMYdgX9zdNooHiEQRUs3chDbyxKba9UqgzoWHBMZfnc9Qkr2DysAuh73peQHNFzVsoA",
  "key5": "4DzZCLt6pAYXgibAgaQLsutSCVz1ic2kFJQYUmVysRwjgThoMZ2wEbhYzQLLhGGdZSUqioVjzG2VByGU1CYrsuPp",
  "key6": "3E7mq7bdm3npfAWW3w98tA3NZBTAWTGXRzVExccKnBi1YNxmVdjAnnzcqXkCCasocjHqH2QfyHhudwHdMNmca7Vd",
  "key7": "EPqF4J7frVCZcDa8gjccoyM6Bav5EKus7tgV6JxmdQKJMi5KgG8KEcouDHwrWEbPkL2CpdnFbarKhgCMjPDaSEy",
  "key8": "27wSHxamJy1MpnpNeooMPdcXdyVJraNwbMEYhRxzwBHY8Q3g6gBqujKhXW2GRzMBE4hzQcfvbJVZ4fWCMKirjdqY",
  "key9": "4guyD3Kot495bb9rJ1Engyo9U1h1wXb6yxVUq9jXnN8FBje9r35MHnA7rxsfdCJquKTgkbG4aXBXL6pKVoiRo7Mp",
  "key10": "5orpk7DfG9De6PAs2yCyWRDiQAKW4JfGbY9sJe9wRdBshPfMax9zyqwX3ceE9vmLk6LatTUzPGFyhvbm2Mh9i9qA",
  "key11": "2uDAf3RNrsoLhyfLJtKZXiF3nnMVkN4925HAqaTqLzFzexWcgaWjRzsz1CYk5ow8pJk2f9cNdNDZeAR4UECHAUAQ",
  "key12": "5wAGofzPjuNUyJYw6Q5VYB3tAAUFVvvq9X4w1saZC8wYM9G3EEvZnqT1E9Mqq3HyRFTzHHgtZ8HXSPi7ZYGx59yq",
  "key13": "4cFuMXCN4P5XKRi7jTdGWHXBsNW17va6ncZDXFxmdB32cMDAXCEx6f84w95c7vjCcfVWeNLEYN1QvCJ7MG3EVD3b",
  "key14": "46YwGUPLhEmaaptqHrWAWJx8dEQqZKifEaEWiLtZweLVLsJ2H1Ux7otPqQiBwYgpPMmaj9mmKv1S25CV7XGB2V3D",
  "key15": "5M3P8Hk8dMZcJ913mSxNsbPi4PR6hqeSmCgk9DWs3z3baF1ZxTmARPXtf38uDsA4xY2DPmQKtgxEHAyEXFnW8UZL",
  "key16": "3YozzKvSZXk2LqtFrFyVFgxEHtNJvViT7jf6rj8o5ZSmpHfnpqD5Uag4qWAn5QZoCenVgjc643KS2tXhrKNaTz7k",
  "key17": "WxyH7n9WYp7hnma4bJ3KQGVCAk5RmaCcoNgbCrtCh2yTvZSMs7N24JAjbkuK611xhoCavoJDTgXDhjBa4PhiuEw",
  "key18": "5YkLWbm7gADNPNGHHautkX2gLLJFkNbWuMphzy8xn4Q49EBSLCnMYh1c8DabErfm6t5ktHYd6gb1grphFFG9xzQE",
  "key19": "Kr7xohgeDk2QD2MEZz2YjJ5GVeHub5hJtfcQXoQcMVt7HuXrEbGSXm21YmLBZac63PNNjwnn2mf1y4sCrkpYKnE",
  "key20": "y9g7ZXtbdkbJhFUhp1gYC6EKETrpfdMMcrbZyfxSDA5o5VpeYMsFof2ffecEjm4LPLu6zAtmm2aMtMnhqWPv5wz",
  "key21": "5V3F9bjxZVjxWNSMrdLtXxXLZ9pb8zoLspuCWb5Mmqi7SHyiHhs3r66KdUxHP7pX5CwoWKVjNN4p8ncBiwyh2yd6",
  "key22": "5abaMNYVXNsPLZhyozLTumvCw9ck9XX1G13qutDQo3cESFWdHveoPBeppzJweuyvNXj1GpFt4hgdcQJW6hzf2xSM",
  "key23": "2VMr8a9DjsMr88SjRyZjco21GsYmsizRasVc8F5RPuVixE8YRpJrpsPvuvfA9kzBVPhW7FCjtZ2KzN367ARnYSSe",
  "key24": "3cF83oudxwMK7ty7ubYEXjycVCBenaXBuQe2GwKgpPR9BKGoX4KxnF4uExj161iKWmA5t3dMy2XijawYtWhG1dpC",
  "key25": "3yWc6DqVhCkSBUXyS5Q6mypbEnvrmm8p1pDF9Qrha6mCedgHKtFffPi5ugtDAwbXxoSTPDMfv1Lyds2P7nFUuAmS",
  "key26": "66SAi1eAHofRUaVSXndLDYiSiNDjzBdVtN6QRVmfGSFzCR9GLXKhDqVgt8bZiMPq8GjstGGmmkbFzcwUxbEGvL13",
  "key27": "3UUp7V7NuKEsR4L8HVayQxFE1NG9iAxNp9VnHWBYeDotm2qeTfZzGH5ve8ViFSFGDsbGtdZCquYauQbRBLn2kK8C",
  "key28": "4adnpzi2DQ3bRjv9igUJa2tZCtbdqYJQnNEF8ZzxzHkUFeLpaj73TCGeZRCxeWqwchdsCYd5VW7UCK8QvNsqBm3A",
  "key29": "5M3qJMzmpkuC4V9og4Bnas82uwDdytnEDCRuJr8Vr5JoHy438ZNSDtmzA3MS56WLyhJ55NanrvS9hyCQeAbQ44rA",
  "key30": "4akTFHrJHyEgAA2vxQBVA4fF4bFksvqmCbp6PtToxpqNK1iDuUu1ehsVPB9F8nAroFQHK5bbHSsn2fWNAry8m2eq",
  "key31": "4LKX2gkjoxKwcKoojZ2a9Di5UHAwp46Aykzf5MNhHyefA6AgLa92gvBdadtr1AUtyNozTRGx99h4KdBfvKutFfuo",
  "key32": "2AYnzBYHx9BtB7bLEMxQ7cgJo7GPfikRSYWXs6RPT9rv2nmjF74JmnDdTPW9JZXRmaVJ7tmrLdguVz1KvyfJiG59",
  "key33": "5zoUE5yFYF1Lnq6tb2CuxNp5qTgU8NjTkDzwSNQ5XRKUZPuEYy1kUeBB5EakAa2SQUbGtq34nEW76hr8sUwWJVza",
  "key34": "2bD7zA6katVCqiygKgQZcA3dy8wSCMwVUHBLvZJ9q5KMYrpnDF5e553jjhAtCGNEwfdH3snXaRmzJeLrDatJiZv5",
  "key35": "3tc9fbB2gqGACSKfkEx5Uu658EoKk8sLH62a9QKBkRrLBZhxvGvKXVYLrC3p2UKfbcRrKsjxTiBtvbEdfN8kyF9y",
  "key36": "2tY9wfPaV1bZtcZzThmUqmf2zhWxzzpUuKQucQdB6vRdMcVwKgFyDUV5dZZQ1fQ5b9Sj9UcCEmTPZynCrh5mTbRJ",
  "key37": "Lr9AJkSg3kFhoApQ23jzupr84ouhVb5LYoF147PMJhhuXSsTpshK6Fgo5G7Gv8f5c7DrpJZZa3R9VffdR4hbAH4",
  "key38": "5urqNwUtmFNcZv3aUU9uaQUfcVVEQH6jamfWZVM5ZKH2QMSaET9Ncfpp4EknrbYckeYB27vS4yn9is1SAYSrQFRf",
  "key39": "2jNc6xLFoLjyks6BWSBr6KRqiKSXvU1EDEPqmWWxorHMRtB2JX1foWCYt1r4yi24NQm6f2rraKYvyMstuZLJDU9s",
  "key40": "iGApZpJyckTJuH614Tv3FvtxbdqxFHBWoRjERs6QzAN6y4kdnXfE92mZjsh6yak4UGHxVt1Yh1rg5GASXtUT6zM",
  "key41": "29cPV2PU6PiRZmyVNjShp2kh2PbbXxmHjBhbygSkPAhxePpAYBLmjyY7QHHzaQmjussWoJMHDDRqXPU5pKbvfc5T",
  "key42": "37RLtZFQUJFZTEqwXLxysQVf7E7im5s23QS1CQ6k67425ZX8tuFtj9H8vGMujsH7mDyRgtYjsqbUZv8QSpEdvM4x",
  "key43": "2zBvPzjS7j2XHFg7MQ9gyJwTEhM2oMTncfqriZBfo4zdeFnWVcFvtLAWXhwDveHDd3FxrMfnUckJGLHbv2S88BMW",
  "key44": "4iUKqVkg4mnxJkv5L9nQoq6tkRyRsCyw91mUkakcB9yDn4UuDzRm1Q8wMw9bg4rfmVWYAdnr9DJd4B5Yx83wsXNb",
  "key45": "5y47kB7Hz7FsviB9h7hytaK1nBJRdacXG15F9FTfjrgSdsh4xieZ1WrxyiDyR2mMtz7qiaVP9Crpfk3vknQoNvE3",
  "key46": "2KDzdmWNxCisZeR6BtkCRuiPgjPcrwDEaDpK6P7KR7iU1gjFUA5rtZetLbVbmCbP4VYSvtgdHrjVsseyB6JxwLjy",
  "key47": "5SRF4NQje6aNrx4jJVycfx1rhirXGXHzQDrdbsYBeaPhdQY5BnS4SbtyifhGbJhZUrcz7VYh2GJG1Z6y38aUHBwJ",
  "key48": "3DD8Xg5npiE7tGuKbJf5VA2W9yNXAzW4bV2Hq4Tmq4wd455p31bRvQA1cWc8jkdRzPcLe8Xg7PXXV93dc8oQUH5F"
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
