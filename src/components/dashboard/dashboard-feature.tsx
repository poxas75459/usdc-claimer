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
    "627MYKeS6KBDxZ2iAMtNw3m1ai8CMT4HhkXWFuSehbvioBBfPcjT9KpVeqJnRoyYVuzNTTVSjxKBwevvjFUQ6ZZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LrCfFexVDRkyWV67XY6V3kMhezAYtp68cNMHTojfQaXLzecb49ZmrH3rYnuTA1rupVTsGzhMKASVtCEdfiRvqDu",
  "key1": "DmCz1AiFJvewPZvrUYQB67KeXLL52cQer3KmDZSfHHmMm11scGdqsh4QtRF1cAnh2dRLsUzjh3SsubuMNdBszNh",
  "key2": "1xxMa4QQknKgHHYm41AnD2Jqnn34vHDjzPa3A9zg4MQMPwRpiVPvWG4QAqY56Gv1HrA3QLKDwVGTRKJUkhztqac",
  "key3": "2TTsYNB6cychDKCpY2m6tYCeF8dEjqX7Kbwgb8V8LsyXpi5c9MQSFiJWVWxce1wzbYQTTCcYighcGLK41Rt3amw3",
  "key4": "3z8PGSGCqnEJ57uGjqyeQhNgYMhWpoK8G93BgDCxFrAYoVbhEUtpvQZELdsRozafpv8KLnUTeGf9c5waMPsziYib",
  "key5": "A9eHS6vpBbXdLiCeYwkjMRVxtYUA88qBN7d2HQRiMqYkvpUgTEV22723YzEECAkWsTPfP4HVQrps3Swht3TSr4z",
  "key6": "5viUoBvXYrV7dDXHcgZDvvWffx2YA26PE1xHwzJ7ooBufRnVnNdb1kx6vQfE6T8G5CGBxSq3QokgEeNPXKAR5JvU",
  "key7": "23undeFBQcAMg4UheeoDRJuAcyTjw6NfYRyTCzjwDiGKXzMvigm4bU5vkfnPiDfAjzZqwHabhr5EorVidxpCom3q",
  "key8": "gtCtyk9a1vcp8QcPZDh2JaAjVACpAdPxiGFnckpdAU17EneGT1gXsXn4SsGesjUKhCPG4ccVRTE673A82wZi7FB",
  "key9": "wyFHUdyFspjDWvGYaCD12i2Y3KDLWbq2vVKK7ig3ATpeREBBJ1A8Q773ccoAVfKSZ8n6ijVyZwoy6JsRkyMpGeq",
  "key10": "2TCbPuCTTRxN4zjp7tvJ3aGtUkWnYtXwXfAEUGEXLD2XfGqRd3ua2CpH9aKXTd2TvCgLqtNYdugT8GLuEzyqFLZ4",
  "key11": "5sVSGF8MbjgA6ewx9Xj37TzZ4eaVZGQkqwZoeio925WdPwp7yxXB4mMkb9kw6MGxfQ5mJQtpxxGJP2cnYg2wt9DV",
  "key12": "2SWLR5JxfBot9HFsSrjtW97Xn98RJHPvmKLPJv6znZKr5uTQSYKcGoo3bbQbLqBMXi5NX6vbAfGN6oCJbALNaHpx",
  "key13": "4UwSj848HSom5Pa27Am9LQxCRwaMbtPvUdPZyNWp5huZ1ZifSC9gxeuzHBxQ8fihHVzc4CxxAEzMmg9RxLX7aLhm",
  "key14": "4vB9USTsF3MJn2LL5BzDKn7JvVRtKhEFQpBbCm9HnAXCERuytc8vfDYhYM6KPGKx5GrsxxC1hFvAKqJ3tsp3bUkX",
  "key15": "3r948BdSuJjeb78oM9P34VgSFaLtxvdn5bJCD14Mp9sPp1Ca8wtwBpfcwv8ZvwpAkwHiHGX4op9oWr9SGE2eVMbj",
  "key16": "5XstJNieaFYtQgaJW68sZTdNSBCeQgoV69ubBhtQK6sqhy8kVw4Fuwbbp6a8hRzEzhbmkdUGuN1mE9JteMPcNVQd",
  "key17": "QP37GhPdX2oyDW5zQwSziCgmR3GJRNzQMFPs9jxKx3qSknocXN9VntjgS364EbLKfZxkRRMyDYfiEBzd1UA7oov",
  "key18": "2Lxk4iduba31VkYQQJZWSXoF1fQaAtyoSP6UJ5jBScJWYp7XmKep3KUEheaxPGcBh83FLPmYXkj7aFedSU5UxDqD",
  "key19": "3NAzxWcFnhdyiBYyu8NqewoxQ2e45vK5XZ8A8PWYWwAv7bLAR9wwBmY3VAarxeUjyfK6zUJRdcVnDhouCRHU8unV",
  "key20": "5eoWmzXrfdSMPP5hSEtyTJFj14H2p5y8b5fqDVtd2EF6kDFFSPLCPyXT9s8SqcZ4QTypuTtqKrCoazan8W59Veq2",
  "key21": "3bwwyVKQi5n29B269omrL3kj67arqwj44xZ2V9LJjKKY5Cm2AxvbAwqHLgVGxBUxfZq56TXbih5e7QuiE6NJxCvg",
  "key22": "5EE7cC6UmW3D8H3xsf2VGZV1MEBUNRY5gceXfzKYsjEm6bU7bpaGLoQw5xhScem7u4kvE8ExDXfH8jfuXAjXApTK",
  "key23": "3i7DAykgBCsjVM8y25n6BWTdAUpuZ1fs1F6eQ8bXVpVyVqyRYTdnH5kyTr47ZwM2yKPtzsFeLk3WMss8sS4sia2T",
  "key24": "cvWTghSLHGJLeK8bPzD9ZfEeRq4MWvRv4E8bf5h58NozMASAAYVeHqdH5veaeMeGGTvVBEEd8a66ZPrByKM3ai8",
  "key25": "5d5zxmBTommQEXmZ3uynsGbpidusSdZdMwv6zwVYDSEEhsZ2Sn5qeQHVrwuayA9k13HBepMvEupSL8nJQWKNmvMA",
  "key26": "2s7xb1LZgJCbisYsAVomb2TgK3hBzyTNkCYroVdPDrq3aUr64fHuSLmhRq9AKmM6t1pM1r6ZsJKx4Khr5GmQM1zt"
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
