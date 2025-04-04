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
    "h3u2P54HPq8hZF2ExATdb4QqX7pHNK1Wew3kk36B7XVip1pnxVWDoHuBn3WdW4W6WsRKRysEttoPfB3hEMDTY6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHjPFKwodnHdmaqfKFJCpozMT2wnB6LqEQALHkcJVMatQqYAXZaLcAcxdoQvZ6RnFQqikoJXSnTZmsKxh3B1zH1",
  "key1": "33r9yRBTLvin8V7HjYm5tMKzZiWHJCvvkgeU4kLa6fUtMo11Spzynm461EocgvhPDAh9AtWQ4o1EQpqqyvZAhhZe",
  "key2": "2BQj5JFVBfKC83EE9hJiYVEuvFagxq6UbEHTYY6zzHXqCauyu3jXjSMcR1iJRFiZdP3u8TXSuvgMKfjKNuPpLT37",
  "key3": "ftdeVRFbyUQvWiHgnvKGrw9zeTiCGtQMKaqu2oWvUy4NUwaqqcgjKXYF8jqHcZPG8VGQm8orHH4hgYc2UWbrLdf",
  "key4": "4GZYDB227CS2pB81kyDyQanZnWN4vg4ZiebJHP9nvfSm9ZtzBDAKMSS3LMfutFVbQHt9LbTzP8wCKSMad62Y7bYA",
  "key5": "rrD1xkoefHRFhRmW3HvYaVJpHVVU7S9uxWztgus96Mk1Ehkp1JZnJjcNDYNrvDjmQ59HrCWLnwQFFaGP9qPbJLF",
  "key6": "4bm8K91Dgx7gmFbMXUpTwcxxu3F4VesCye2Qqv7TAMq5W9pFZqibSov1xDyx2khhioTnQnqZ75oCZP3adDUP2eki",
  "key7": "46L3GvvrasRvTysvnFzfmZYU2uff4n2RnvnzMP4KkDLVVrYti1ApvjKneR4nXhWpSTUGd73BrqGuJiDXkjveg3nY",
  "key8": "4TjorETvwke7Vb4E3QZJZEokcXuXfhYsisQHaX5SYU3JcohisK4thLACy8gHg5hz1hH9UwNPoR7jX6J2G5xTrQjb",
  "key9": "3FA94Hoj2PffXzHxvSrg9yWXc6ohKcqMWY3FL3WXBbvF4GSYZpAaRAvC7HLNy1do1kgTkzuma5GUZuMMDJdVc4GL",
  "key10": "Jcy3vhjNcvaRYW2Gru3rtyhm1SbFjTswh3aotfjVbp9n9TGarQwDqodK3U35NyT8mMQx62WdMx6TKrKp6y3sPMo",
  "key11": "2DC2iMxJT43t9TzeSswtj9P4ewFvHeWK8m2HDM1cwPKyJbQeJS6BQZs2hmq9RAx8RmcUv5fzCF3tAsyrZCp2i9f2",
  "key12": "4UqM3aQRQJahD7Sx8Whirc2978DyiTq468Dn7gLjJYYa952LzNDLnTkAadmj853zqK4J9MQfvAyBQepfJjixNYfJ",
  "key13": "2E7bECUNWzr3SeKjAnoHDkMGiDCNN5vv1oaxfN1nJZco7XjT1i5QqjgoJUQKbkpmzZP5RWEabbViT1EvozUtkm7G",
  "key14": "2UUJY2geXxfefNBZwfd49ZXJht1hTDUcMB45dF4XXmZJxek21eVVUZAtexQk5Zk2bVp2yb9E9t49YApBKNqq6ZeZ",
  "key15": "pqRC4czLENh3KbG4yiia1rmN1ZikCPPp8KDoVzh9PNNR1DR5DBifB21yuJdS9wuCy4kdSg8tJRzmmgZZgsQXiav",
  "key16": "53huwmvgshGQ3KTiChhBa2rreHjEc7HRnPNkhC5qF2KJQhm9fofSrsBuBsNm1T9WFomzzKBWQGpVCNAKrPDr5JCB",
  "key17": "5wExDfnNX7NU6jrNgSYmha7WNJUZ4qKGPAiqLsoQyJddKvqLCDDvCFPZVxnEQ5wprrMLMKefgwvNeGo8EhceCNmM",
  "key18": "3kxGiFHvHWpY6xJGwGSLaavfqxvAAjQSsnYMZsmsKnN8hbf5uE6vmH6Xu5vcimADZ2hX99quSYN7dt8zYVcUkPFT",
  "key19": "3YZmXBr812pNFdQU5vGAsD3D3h52S63zAGZ2J1CETSjAkGsgdVuQp23SEiD1X4S1TpNBBSMJS1gBzgyoMrAEek7u",
  "key20": "4LCpqPE2HodpGcPD4fe5uVNfpXvTQUKTnQ4BMDyDQncNGdaUkzoS8jM1zVqQx2VjQjW5sXoz6q2guce8iHwMpb1F",
  "key21": "5Sza9caQvv2upvLaphvqVjvCtxwzar746hsto5dKinXXdq9gz5EnKff6eUxoaXfCrwB1MJ4iUYxx7HCSf2HiWHs7",
  "key22": "rVHvyuMRWsnTzEN21DD8qqM3Fih6YzjcvwbWZBCcTKzZ8PJFLbTs8DC68y2JcuLogLPTo8tmgWmoDWChdwxBFqX",
  "key23": "4UzBrxntRJr4Xf9v8TJRyFirXDx9Hecd3mb2y63nhxom4yqtFGKn7cSqKMGUgqdW8rwUZEAqudj3Go9U59FadqQg",
  "key24": "2fXtgZp2RMkVhz2oLueCG2fsdDYL2Ukobimev9F1R8tiJ2V1z8w7ZW57aHBVYy8dhxQj1Taf9o7e6EKCtMmgGHmV",
  "key25": "jgWo3ujkHgM5xpbbar7DcCTZ9mE6SYWbez2VqZ7kS6ZeiDTeE3Ddiij1BAFZBndHFPPrr4AyYV66g9Y3jThx1YC",
  "key26": "3AHxWDd2sV4kQbDh9vNoXW46qKatx8HgiuG4RNhFy7ZSNWxyQapmAYf9mNvJN5qTYBQLUzvpqLgsbVgiiiiJ5ev5",
  "key27": "3zL913QTat8J199Wx89g3tnh1BwLJguXjjFApKh6rvWV9WhjhfFQrMiMGnRpCCeu7f2rwf1UW6nJ4ZvHCJzeXVNY",
  "key28": "2hpcuLf2LwZeuf7AN7dTenWdq4YHfsNSMJ4SSL42oxHPKphuK8FmqYR6kSSjMzA3DwrExEe4YNpm3BQZXqEzseaj",
  "key29": "2oFMrYSrPkuiZMZ5t23tq4S1mwzXUiqg2e8WMLtyGDqudU8aEuLjeEsd4t7rC6gDnGsa6zT5sqjmUEaF2TgP2beP",
  "key30": "43CHnJ4HedQRdz6vJVcbvAq73WFw51b7W4vja4jGyhHvUR8ymFEymnMRyMpAvAKGeukpMbnKGaw9U2qaFQabKYyt",
  "key31": "5yu14ot47Tmonkw9REePG1zuScNtmgQVLNTCaGri5jmYZ2r1G1vPWhmaujkxERHswpLtvEzi7Z1AfZHEijh6Pagj",
  "key32": "3KThQ8B5d4Z75vB8qqRinqzud4Xv6BLTby8etXL2Sapk5ypCnsgV9WUD5p5Ke6ARaFHWdNgGmVyyNvBPrFBqr7RC",
  "key33": "2MgsE57dmDqfuRCCvVL9W7boWUSQhvjufQWKR2aSDEoDV6wobQz4tCWvTNAjGU5pX2nFi9kBJHX5CEwREJM5943H",
  "key34": "32C9F6a73P6dogSiQnuHh2qg1yi6gTo6ceKnTRW5gLRf6viwZffcNfPTCvtehc6bC2DnNMgK7Jv85ioKg6dJcyyx",
  "key35": "3ZgyjmYMjFhTZhQfMZGK9Phe7p9HtwF4e52j4ari7gxreJjNyu8DYYQuJSyqZqFpaQ812jiaJ4EkfptktC2VNiDC"
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
