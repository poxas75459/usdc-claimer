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
    "43Dj7YiqP9Ny27U34ksFVyfjQf5uvVK4rjB2JGUNZrAFNrCdgappSnfHwcwsZFqxG6p1toVktudRDLwUZCziCdQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T2nPdPpCJvxQSJXqtaiC16onHehEkHMzybxCsqQgB6edpEhkFnnWXLapkPet5FJ1ngnEs8r6PxWhVY4f5ouLPEE",
  "key1": "2WmvhQTk61SBkGfZWRqLrsWU2C54XvLPBqRZyMDPW2wrnJoufjKX7gy21NtmN33Y56dPuM1ScDaPRmHAnvckVtBf",
  "key2": "6rpKZ6Sk4R5iUrbRG7PwjhDSJPMuq2gZVojjezKg8Ha9KCAWtgYxN9fxXL8HeQPBw96tuZzkHDzwduoEBduQYJJ",
  "key3": "mFVgPFQyzbkG8QnRThp5M3KKvcP94JpQitHcAuxWucEuktFVuAhGd48cVD2FNuHLUUJ7LnTtfHiQid21VKZydWW",
  "key4": "iKPWYebaJ3p8rWtvjxZFeXs9dZQTuDcyNDhefgq7ZoVgvRdsFK5X9X3c1tejG7tRNSktBkJbcYhpE6eGzVHTZ7d",
  "key5": "WyMstPQ9TRqZ9jzG4s2pAziN1fuKVAa5Z7V6dgUJA37tDUB4skZNurSrUyyPmLf5jafXHbixLdxRSttzzXQ6mVL",
  "key6": "4BnB6BXaerco444nYMd9FFdiZibFtJpwPuLa4VS2hZMZQLyTLmM2XzbwV64hYhW3SyHmFjothN3jQHRcteUjoMym",
  "key7": "5qdQeFZF38ye4Nih3R5PNCtSvxZ5aLZNuHwYupmNdEXyS5f1thJn9VtG3XXVe6SwkD2P3wuUA9Z4QYGDnjXxPrAA",
  "key8": "1PwCRYG2anpcvWDuNkJie3j5ugjCAaFefMqa67fn4Lp8i3oW8aVQ1b98R9Y9mSt7VJeg7kBomauyQ2ehpgcvPvH",
  "key9": "5NFMTETp531zE47MkHfCZyUUWrZN9YgWZ1dGUfLk8mT958X2Vka91KusP2htMrFuC5sV2xKCorj6bukpfNyZ8AoG",
  "key10": "5Bm4iF7wHDgof3AeQxxDkiwS93AMpxTYTuwPGXQgYSHxfBa9MUpjZNrjJXW4Hc8dTjLcPTUFQbPXpLik3eCYieLW",
  "key11": "MxX9qLTjoiBXRMTTdVAA7KcfJNUmZsJg95dQBFUhtdWmUfu8SoQ9aRLM9rBErMZZq5godER4viNWhtPxvGqq9vD",
  "key12": "2wDq6SHyJzWz7uRMNQWEhriEUA5TLZPxRec3RG57mtHmpZm8aLJ2FN337avVrpdZvCiwJTYN9yzYDzGo76RKWmVU",
  "key13": "4Stx4BfpbJDTwKRvxbaEUgdHqRq7TKjPKCjxgJpCtW2NMyzTE65mECt62z2qmAin3AYvgCX3N1PJbjVVGyako9bX",
  "key14": "i8YyFdXJY9W4am3euJdgwyjErCXdgPrFMqd5tfeujjEaZmTUToosFTJHYSujsXZEMSXJkeUk1EfgQbVoXCnKyGy",
  "key15": "5dwAL44WecvgW4pxeQsgy8iJVL91iNYeXq1xqLPwCUhydyPLrqwjZe4X7sx9bALcUKDgFdomv6gRRoPJRsHZN8ba",
  "key16": "Nya5ttuDn4vaAWdhHSjkQNAxRAkxEG1NguaqVu1ossWkW4GsZTDQzUDNKXiYbKWGUUUDGEwX4Z64zb6Vp7Yy8zL",
  "key17": "YHqWctFaVVgXBsa245fqpEiVX7P7vL28TqarzJYbVJcGLPme3yMmhN4nLFPTmDfXtkpqXHJxivUZxwwMk9xXGCo",
  "key18": "3GQqNm3Cx54rVjoPBQLqWiCE2W6Fh6y5tkcVSwRuBqmM9eKpvXroKhGUywMjvggJxL5KD1NM2TRhBgdJ5j1HRBJS",
  "key19": "58SgK7cnLHYuLFnEULLFa5xajvjhEAnXegHn3hvPqW2hD2BuXA1gKGUKYtJdkhsnyRzeJTpfiYwTWTaTCzzcMBCu",
  "key20": "3ZGPhDjVeKcYP3E3xfGbyEQGXP9mwTnxF1inUATmcTDUvJzBtTxduEGEJgzv9xdTJGGGE9zi19f9YJbXSBYaqDw2",
  "key21": "3HqvjFuEJFAenhEZ1ApG8hDqNvJRpaKrqh47taaH5jJMBqMFkCk8tTdZeenkx595GEmox6jrrp7GkLzwuHWBZYkA",
  "key22": "bZsLCBsDPH1umEFsycpgfoSVb8TE6p2dASrGPpCM1n1QYhfqzE4BuUxnUE1DZc9vedN88z335iZ62biRxbvNTng",
  "key23": "5nMAJ54dAk9AZV81MZHuY6Qc8aPKyXtb6s9ak1WmajQKK7gRHp1HR5a1oWjuYvSSLRwWooZMFPQPnCUdiY72BL9u",
  "key24": "3CDuGZBsdjLSbYLQTjfJQehtuXgeEDtxvbweUJ5yH7Hx8rbxJaeEF1TzaSEz7ee4VUDNQJnL7DakKwajfeKaAVYe",
  "key25": "3zk77HGguiiMyLj2DAaVxySnkZz3EZUKC3RqPrYyAYkvGLvEwhSSBL3M4AfgH4dSTDkXKzBJpgdQvYvcPxyHpxv",
  "key26": "2jsCExkakzSdibTvt5ZMN6t4Pj9HSGHMyLTVkZtFEuwMowcGE3S5oYBMma7ZjgM1ua92jsd6bzizcdDBYvKWefJK",
  "key27": "37FtHZzGKukZerzBKzff2ux6dxK4akJDwgk33vfGtoNsNbWKnfCHCcBt5BCrjxRN9csJiYn3tfmSwTujiLPoteuj",
  "key28": "5uvaX3azYuyrCqzsYoCdmCeQCUFPa48pyFvuLLn3hpDEgvgTYvdUs4S7Fj9WNtmArLGQ2wDyGQkCJNgYYXqwSv48",
  "key29": "9AqcdGRKstQUtpKJ2fBqAqMrCRRtGJ63y7x3XdqmyELDiFFnxL4jdy3rdV1v9bu4j85EEGBjcTAWchAhVFGTQxH",
  "key30": "5nTgX9bf798VmmSB7SNVSBWPZAczFtvU4ou47LFGUWv1gVooNYuvvYexTWiK5deaZgfa7VpPYQwjwKUtrguPG9K7"
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
