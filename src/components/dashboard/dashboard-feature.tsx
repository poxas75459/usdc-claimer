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
    "3U7D5Svn8X2eh62hGNFQSBDLD2biszNNeBrVLEsMNMu1tY1YUrMeAZkZYwSXHkS7r48mc2PTDkuKkuEgv6ioenxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2KohF1uhMhm81RMs8Pkpst1MjRzWstW6AZXKyHNWuxRaQyUzoc3uFWqKom38fmSvSmgWvtPW7ogoG2yVmLfuJn",
  "key1": "3aA9qdYanto62rtABeEtuaViA3kRYiy8YRHqtKZTqg1ALWPwVJ7d5zNJDvui6fHFF5sxghihS6sqH4EhErHhMhW8",
  "key2": "4SyYXSzs2bzdB5THPYaxJv2VrLjfVfX1aguTTsaR9FwDVfmmM49VHmPEEgu2SPfWrk8Q6hXvWYmfDGAgD9WN5eNm",
  "key3": "3bnfD7eUZuQgo7c7ovFgxDEkgZaP7S7fn1yrtbzZ3BxcxupPvwAA9DutgeSin42sHk764Z35JZwrY8xSp3Lji6Hc",
  "key4": "619AXvRzWGE6du5ZBXxGPEQmkVVHXBb74Y3r6C1Q4vP5GWEj7n2zb7bwTaFJStCd2fZrPCT7DpRumyAS87LLJjbJ",
  "key5": "3vwx2nUUrzvEeYNSQSn1RyJv5EbmLUaXUB9EtoGfJK6qTEHbkuPqvNLifooihiDTSZFNfqiCrwKstR13rDTM12c2",
  "key6": "5MpsYUcTCUcuyGdGf8p7uEtz2KHuthdpbzRR5i7GqdB5meapQpGwE2FPCKKJ8vCk4mFmRGiSKZtUMoXV7nNbtroW",
  "key7": "vri4NdRctdeWuDfgDWMzeQMA1yvzq32b81L4b9vCC5xArYecSLtxCwfPEs3mjSEnpN5xRgVSXJHTK66X76WXTjd",
  "key8": "56UU3XAuseGGLHSHcLjqMh2tsL4VS1GpgvhMXuMJkGsEVfnc5SpaWncyk3P2erqXHLHdRQKyPoi2kn9UJpNYuRMr",
  "key9": "55t3aPkSWmpC8Csdrg68tqsXNfdZPXfo8HH999cY7AgY2DHPSVvH1TNtobFDZx1ErsSHLpAfKPi9JAPDqUTF2R1v",
  "key10": "2uuyDusRxzxK812PTiUgPZRQH1kfyMe8xAZLLBwMKDepfzkzGSco9G87evmqVwM5C9Q1YnzA8kzooVH62BHjVuub",
  "key11": "4rGDFxbehYH83YmZDrw2SMA1zPknQvXqtsGToEoe89dVfnxAUKiahgRipz8obLzd4c8N6PU5ZXj3XDQPxXpZzwpR",
  "key12": "4fNHweBQA2ojFsoe3MFcFMVjYytnr85bDKLwQ9Nkb18zvq4HsKBU2L9gkjLkgUWKz1p1jUNzSXop4BjMbw2sgrbT",
  "key13": "2zWV9pt2H8YKGArMvpSQuX14A8RCD34unoq3YG6zG72fceVCXLZErZnyQKEWCYLEZc5JBfAdm2FaNX2RMA8NNEHJ",
  "key14": "5fF9fgJVFVScpedp8RUHM9rS4Ds2kPhQFVHQy5JQHZN3cbfFRpMPSseVxP3cNxB3fQkjtNiGcovVWoWHzAAiBC7L",
  "key15": "3HAz2hveDvENZAaURkwi5JiZ4JG2D9HXeXmKZoGRZcxamDzv3eAneMEwgGJbHtc5tXsyDUS9wUiz6q6ZeQcRj8ix",
  "key16": "3khodGTXfbkFjmona9KqgiUtqrVouMbFqLxexms6aYphwURFPKdaWizGgGmnH4Z2uLyy8HCMVJJr1y7TxXuedDQz",
  "key17": "XYUWEjMfepH963VKto6pB8aniwXi1UXwEhjSKD35mH4TD3VnvaHojBuHR2H8oZJLLi9rigKGNXpgvVikm5ZQ6yM",
  "key18": "2KZUo1vaGKrnsF85Z5T4fJUWqt39Z5P8FtfdG2YoQKEaRy4d2yAbkm7zUEbdWtUy6oLXbnfhr2VrN58cR2w4oLh1",
  "key19": "52ifCwx2ba8341g4ayRbPL8rk4Qo82pAYniDzKpeuhWd7do7rZWufnhBW5uihVVYu7yHp4gUr6cB6a8HCg515LC",
  "key20": "2FHndHV26oeFKPzC6MF2zDxVuaLJeidYBy2wNtAshxd6TtirQKqhQT8bjoh5fopPfyAdvKVJx2Qh2YZmZMw3rZaH",
  "key21": "5iPmDJEMpMuDphhXbgKeLwSwjCbenVvgjTVqvuShJNYaQcSXD2g5JnioT8XrZNDZwsrja9BGUVpDQ4GBEUQqZfhV",
  "key22": "kwCCSmEdntfwdEQ73mnffygCJCzhEyjnh24raKEBYYyGsjLHukbaKbLaAr9gR9LuPCk272DJryA44Umw6o3LBTZ",
  "key23": "2kJ3LN1cS3KaPADhubopSoNo5j6oGfL1d7ZGQ5Ch4P9C5qvsdMxdREZvm874s5Fbubn4hyuiJekcxL8EEN9nmMUt",
  "key24": "3TyyEhtMYMPWwqvhqSKuvsPXxd6gtsSW6FA9GJnf7qXAYZdF45wAf2iWt6MZSDoMrufVft7Yv3m2eVuE3KqzAj4n",
  "key25": "4wJBKT9mAib7qkgNJ8XzVNNKorJr61BAK2DtCDXE51qbCG5W6m6aEEYWtr2RChkmDACHpQxZQrfF3MkpGHKJ5ZCt",
  "key26": "3mh6iZBYCpkXL83LMR5KUuFfsQpFMQGoPzn2hQJU3NU11gAUZea4Trw2TzzchqyyrEW1ERP14J2mURKsPmhCJB2R",
  "key27": "7rCj3sw9gfSd9gCaip9juj9UGykQ5W76H5QrgdmaVXXYa7jA2aZRiqfY13tURfVG6J3xergPna8Fi5dVFUcw7N5",
  "key28": "2UcaVZ8ZmkUsQDqKp2Xfbs21wASYstTXcCAEXRFg61XPvhTRewGBqdsxgBoJuY5GVEGanQ2gyVPr3NxGMZTL84d7",
  "key29": "c9Khxaot4uTypkr7fDAEXbsgh8sb6d7vv6dWuhSdC33fH3MTPDYkE8Ax5zDcX325YwGJ9NJ2jcaSGnwefu7LUei",
  "key30": "5ydxcqhsvz6VwxKDqc331rUmbzZPgfwzxqeCvDQzpcZ6p2Xiy2oJZsipZ6jnMPdBb89GupMPFcmNVY95Dh3vZSmh",
  "key31": "YAgG6KLVmPehPB4ZZC5hn9hk77QAVGzmryD69R3CNFMEqtwkVcCCcJV8hWy2hZ5XWaZqobF37csVPj3bJPVeFFC",
  "key32": "2WEJc7K8mMEeS5rRt6wo4E6Eqd8DXcPYBtu3UriA3pzBAH7hxsfteYYc8h4LNxJnRpeCX7Nr6D499hQh5XnBne29",
  "key33": "5BN5WBXpwP8GVRKXZfiZejahKMBhcBtTu8nAUyBJZaPE8DEwTiRnTY2r83eS4jTDULBaYaPxVfU8ePiJrFj2G3fr",
  "key34": "kVdAoouqm3983aDhfGQHHq8SdS9mL2X3gr8m7PsdkK7WJQzNPs19BF4UxQMofhpLpwcznc6X25uFqC39neLsHeD",
  "key35": "5CRELzA86iTY5vSmbPgnuvB1x235FPFpwYADhPVLX63errnHCnBrEM6t2g8XUmX3ZxeSg2jzoEp6hWB3VuCd2dBg"
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
