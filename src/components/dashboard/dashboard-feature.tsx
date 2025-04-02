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
    "2s39Xf6PxCmB8iQWBiwamGvXFmZbjoJz7SDH3BpGU2M4GkLeEFLegbtBwnu9hooUoTvrgUXkex9op2bV8iKJta86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uM8qZNMKjrVfNFU18Vsju66m3tWt8Np9eqA4aBMB429pfKrvY1m8WNXmoCiBnCqBeC4Z1bkbYbApjrcnLVZZRcm",
  "key1": "2honCyBfAZrVkuSwdfX3tSrnufMZsT6PaRKofqYX8qfSprf9fCAWrbF7STCaNWi3zz5Pt9vVmpUQpYptVhS4g5vA",
  "key2": "4xhCJG55uKh9FaPfZwKG4bVFVfFCqRQ9NM189XkzkUYviT9W7pwapKRcjL6Cske7CJiuvXbxCWEnF4kWnN9MdSAq",
  "key3": "3LQ63hSfFyhwwRzfKeB68CFBqKAaog6EJUyEEn4VwCTCBU2MXJ1Ki2JmTHmNX5CeYhMueyG5rwdGR2gdeYcA72xR",
  "key4": "3ZYqF1Km3E9PfWugKgA5cjZAdHJJECKdUYjAiVYh3uDdF54iqh3ayQ1EFo3hG9kEgF3yhSHtows5ob2qgmLJYGbD",
  "key5": "2yPVrhYQJManxZRtiMk4k6T7nVbGXq9gRQUxxHfh33qYS95XJhczhGhZXbvEjKjm8PF9N71ND7MgN2rGF88DrGjE",
  "key6": "22CEueo9SygQq15tNAaMS6vQbDVtVj9jPPfU3CihSJgiS2M6wvQ9zVf6kyMA1LPd4PgwUnsgmz6ecTVrtBv5D9uE",
  "key7": "xmXQ7E8Ms7h9rqDQ1VeLWteAxPcgdqPToJtnnznvbyfDweGXC1PLoN1dpwBMuY862ZpDUpLJZiYYAhPnDAPCPiV",
  "key8": "3Apdf6obrcDCaHxf6fU1G8N2nTokBDvPEp3m8Lgh7XNbxLFKMAvK1TFjW6t1aqMz7nqWaDBWVwTSSNF3pa8ugaBX",
  "key9": "PD7SoL47XztAXf6oPN8eMpWC9dcWRaAGcH57hGmE6DWYzeYcU7Ko3NSkNzkhaXyXpphb2AbcCRLijkvC3QsFVBu",
  "key10": "5iRfMrqq71QqLfFwPDjs88Aa2TGFYhsjf5TQVD6t9fw4NUw8fbd2JcxE5iw4YUQkjcPLKR1Wj3cbe6nFaAmDe8yx",
  "key11": "bKVNKHDo6L4NLVjpgu9gYupKS37YREQeHkPYVd6SUR5F48JBL7GRzrUGvRvk8P1vgfQX3URebUeCRv8hWJ21air",
  "key12": "3dReGXqq67HdmXmisMeF8HBW9nbFgKMqmFmJ3tVmrpzpYJUVtvnfyKaLx699C8umH8RoiStdRu2gb9ATueuSLqML",
  "key13": "2CNSdCbRQrFyd5PkZP4S9U4f9B4YLayXDXsxEiEV5Tvsb4y619yoxHVmu55a1NXHmKnwvd5bxji6Kt1fc1ZLnr8e",
  "key14": "5rc4wgw8soXfSKtL6J7yRs2U7QbZ8xBbn8o78U97RgZaCDtdS2VEU3N7Zk4MBzVakGLnNkVo4wUwEo2A3mu8wRR2",
  "key15": "2fNapsUwCLJGp2Dya95v5PXgkVdpXma5dUmeKSPGesRPTuLEnUpEYC64VYxPbJMxeZSAzLg8sJAoSSortC4rFVx2",
  "key16": "c99b23pVm8QyY8MhcEpb8ET95DQmzZ4UpDRk9MjTqPLij42WDzatwqcNH1VkXd3HAuVwsWQGLwwgLom7UWPDTvj",
  "key17": "4e5BL3ew9y2t2M2vQXJYWCPNZR4VLy8YshhLGAoaf4RjYwmpBiRqg5tQ9VFCisoFpKNc5Z3NUZFqz8smQpQcRCcb",
  "key18": "5fjXLDPwFQfjuz717KthRb2raQagZr211LK1jd6mKA7ds8fbdzk9qw42BjSjHv1CJiUJNbM1tDyYKnvT3vwNsh9H",
  "key19": "5daoNKPpWMy2SpjmdwE5ZpnnKKWpbqBxQB5HUAMvy3uui3oQQbRrVniHHzgXjGJuXCRjsYxBtU5ZYcNBaVgwHK5H",
  "key20": "93xht8Am6entswkQaHTDJXwsHVLGf9mEeLHV4EmaVitkFJiYhwEQtQ9oCuEBBxfTndTiBxjZSA2DrSvsz2p16eL",
  "key21": "2kNUjA8ZdGP9pozzz4xDmkBoc8xJNH4JNQJC8RRTnqFcjhoFf2aGwCW959BH8MZZcGmPVoPAmSN97PEawbTTUGVF",
  "key22": "4RU3cc8q7iPy6CPutKHunjxpcR6dHLzYrEf73YCsZP8WRz8g8avtEEjankwduVN49AMG98TLxj5A4XaniqCFsUb6",
  "key23": "m5jdzLMmaB5sPBUjsebZo1KmLRQLJ4b8BgyvRJBQCMzmQcBLsTK1a7jU9YQF1jksG9FK7hkTJJ3KGtreYMb639N",
  "key24": "373W6gnarzXsaqowqH2Rd4RdquoRAC1mQtSjnjP9w1xFasuxCJgTJuUfcrgWz9FwKtcheUVnCHsVkRSqoEubWRSV",
  "key25": "3UKpu4H6bw6apdytjRYQqcX58zwqtdL5JcwcVqRaJTynAypP49mdudo5HYAzPFXsJzjaZq3nUs9FvqvTuTFL96TK",
  "key26": "33fXeK3btX1AkYPCu4hp9JUbQyj688bjSWyeMaeXuDWWf6Xz21yXLnCAtrawAhizWAmpQFK7fs89iG8UQ1VgHbv9",
  "key27": "41YVbXYM3YsrwdNrDZchQK1pfi3NztcLkRWyGvjvWujnoAWRAZSTuMrGHS4fJNV5RmkJzA2Y8NGa1mSrf4GDDphe",
  "key28": "4aUb9NTiPFq7NjMAF39FAEuTTuw8R2C6E3rAcjkmuaH6ZUREJTYJ3rg9goseYKeRmybv3ybXKRYR1nkZF2B7ASyA",
  "key29": "4MsgXcAo6ZbMKmNhhQwfyMpzpJmGMmuPqHNdUFJABSUq1d1H63SGFQkcYkrvDctEfXL33kB2dNZ4mtRt67cDaVMk",
  "key30": "3sg1C3278HxX5znkVY8iJ6AUDbUu2uwWLwt5mYSkhdRGKZHLKKMTnfNi9z1itTPqDvdQBDepzzeueL84x38enVAc",
  "key31": "i2nEZxK9GjPb8GDJ4eQDs5i5iTC9JErKWUzYmWYZRiVYTSLGe7kfkhSKEfWegMLMHxqXGGidNhezfK6PR6jSvZT",
  "key32": "3PSGvirYE5v2GhF7qiDrxx8SK2A9HGHggx5pm3ZS7s2pTnmHfVJPTnH3KR5Nk4xhf3cF7J7wmoHGQAsi9TCFEt49",
  "key33": "4AzFq5TuahGu5PQqc4AxLWUhFbFVzxx25DnmrMzgjDFqScygRjk83Sz9nnPMCg1miU91uXe6PQD5DGQoqy85ccSK",
  "key34": "4JJ4h4LDHWHwHtTJf6RUCGT2kiwVvax7hGmELG9vPXtduvdAkWeQoeMPRVphoRtArDb5Qdj5aZKca1rZrnn2cZgi",
  "key35": "31QHGar1N5d9fZbj76JAFrv3AEJtadda1Lnk33V5WNHARNdkMj6x8AzN6LwNCQSGu7fF4QuJjJmg5zUihCsytNCC",
  "key36": "U4E92LwgozZsnscHk2o8pjrM1AhY2ChLwtWNy4RxVDu2FnBoLxaqmmYKHFByj1YMdbpw7Bh3w7wPxPjDhZBZujc",
  "key37": "5XQGMSATfQG3htXqD85jvVGwoSTdEvzm1rtPC3YmGiMamZFeMsesZA3VHPUNojTB9kfuk7E94j7DHuyuHsQ349Cp",
  "key38": "5BX6GjbKVCZuRMZodgi6TvNVdaXXwqYZ3wgX8EfRnx6rQz1TxzHVJ8E449LoP4fv6SEpvJbgLcKA1Jnwb5f9NAq4"
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
