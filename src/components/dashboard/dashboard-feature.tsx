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
    "3XNnCiMBKhLeYfWJQZfesyVS1HTcUwATVNhnkTgesvHf9imQ2Hv9U8aPvr6Bc6TX98iA5KQoz1bxASKH7bFsietf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XRT2hv324381MSQNP4cmd5rKksB6DaBkXg88nDPfwh329FXgy6wBLVAKMyyV9SGa76saTYqXfNRoNSYWYnNfZ4t",
  "key1": "jWjtvMZthvnEVf2nEUsrSttMUJBP4XHHkfD1VTiXpSTJZkWC1RPVJiGrhxr2ikQpZtJTHq467UuzWLrjd6nQTCd",
  "key2": "3Vzyexz9Et5SuQQWcC3tP9ThbWrmbFmTawKhcCCFHyqd9B6Jv4zj7TLdmBzPM4r1soPsW87jAnmtUDDoVsSZBh6o",
  "key3": "5nyz1xm9wM2RV8UznYcpYsWWhQ6edmSAFi5DxTPa7dZ8FBKXkcb5pWq5nWBmbgAZjEjDkeStnaz85s6o5b5mpG9n",
  "key4": "49D1PkxFLpMxVGD7psQA8zdA8noJMCSvpZGAK5SsoKXzqDgxCFjSUq5X7m3BzFoRMt7w5crfkajd8AmBJm7aUG5c",
  "key5": "5cTGJxwfP6bm7p9SWRRgDLd2d16XMyXkWU1Y7KnWsvjJzE2JMao5s6ztT3TT5ybmZTV7H3EGixV1rSmQb22LLBYk",
  "key6": "3aYp7MxFVdPMnFCNAtd9mCZCurEwNxSimAdq2XfjsuvkXFUBNXKHa5bJ3euLvBMCX4krYSo9N2tQpAdb89vnm9ux",
  "key7": "3eUpBHWJVQHhRfJVfxTR9NGq7fqRbsd23Zz7J9YN1XLA2Vt42uirkJT2uUrRY8WNDKbg2FZhKGtVneS89EjoiZjm",
  "key8": "3sdMPx2EDQNSCgtfbHzy8e1M4eXHpPb5vutWqb7SHJvTfJ2Kw7ZoMQfnmHbpSYEKbrSYnWXbsHJoGPhTUJwgG5C9",
  "key9": "3oqBDZ5tH3ynTqVFs6yyoiNdurZUjgvUhzCcL7ekrFUtmsbSKt3UGFx6msKZDdhQUim789QF6FsX8czWKsQWhuQ7",
  "key10": "3hXp5aaFRhyiSCvwRDyrWraqTBLXhBMX5Sumg5YwBe7CP9nNR2hjXcxe9eUWgnkYaMz7HHAtKQTEeLGG1Jgz4kcW",
  "key11": "2GoYrjsPyZWKUuqdshoB8pxJ1nTdGXuXwUc9ESdt2srx76TyZWF4woYhhQEnjbEzRfWrraV7SYuPB76N44U4EeHE",
  "key12": "GZrR59rGhedMttTHdC4HXezhjmd3QJDkXt33ftHfuD2zAPc575GER34P8wy2gLnAtsAjZevqbCuihoyg7zVdwXf",
  "key13": "35izUWvZSFHAbdSCzTW8sKXA4RvfCdRHSg1chMCSw968iqfRae1e7eAPJvsZNxsoCW4fNY6vzUaKwZZAp186Hmcu",
  "key14": "241zdad53oUkmpFsxBFxZQcPaeGHRqZtCGj7f7xCppDY4QjMc2HpvussQ1EDxJReDzS2MMqPkHJJKnUgDtmDEFcC",
  "key15": "223GyqGfUepygPw2qxxjzdBwxLSSynL79z1MUqXFYPAEHvigHMGVWQSDX3UXp8WcZExgZ3hPrHuUW4M51vHBzCwb",
  "key16": "5fFbaxhXaiv6tFwvEeXXU1i5MZP3AgNfJ5oonyxFy4Gq6b3mqDNnfiV8xBJ1xbRaLAukRpEmZbNiBLcgHtbMLzAV",
  "key17": "4oUqHuLhvbAwvgm4Mx1Z9EGfucwDVVw6uWGzynmJVWyX7i5pstFomHiDTizxPoBsteKTsFMcyEWm5kTPXSSEMx1J",
  "key18": "37Yg57WstuAyeVVD4sRqzHXwpPrJrZpQVo5K3KE8BAB6UQUZDVGTtq15VqoS3L3CC4qcz7XjxvLcXoS36Kh3ztWS",
  "key19": "urn9e4Rz3XJWXetbVQiohgsZ9toucR6J2Uo1fTmLsE8LKna4khKPTs5HSCYJESRVujp3HNDNRqFWjF29f9C6F2D",
  "key20": "37abnpA9o2729xWAmpYcGg47Pm9rrNkqgpFD2KQmGPt5Mxp822adPV1MEYfxB3yNrzteveZRr7KxamVeqHrpVw1f",
  "key21": "55NsEQxqTywNV3dbTyNcxZeP5jyQsEfGoNrXgaigSGdxLgxDydNRVxeY6gqAhcGfuGZS6rsWBCgMEX3hHhd43GjN",
  "key22": "2cH5ym2Zxr5EbK3ELdSYGRrfkvJuZGzdXwc4Dwcz6fUR2pgnkYddT1wpmWgE6xHPV7WuAUL7FCEDZf1h3gPTg23F",
  "key23": "3cHbYSrFSXyChw3rwmWB2psa2dGhvNgoJ3Q2qUDwmxc4p4s9vK4AiUpCRLuFjyStPhrkqtUEN3VoXoLCMkdQthz9",
  "key24": "ytaHyucxScpUeso1aeHMYQZJgtbXy3X4iq3Zd7WMErmjT725VxKSx9bes31vbWTQsQZ5AvPR7eU22LDdC68Nr4d",
  "key25": "2hLup9zjBZbM5YXoECj92DV79RCE3bezB29tPoG8Q3LfkpMPbi4AqXxyD31hpSiMsr4eLbXnfoBxQjFpQ42A2RtD",
  "key26": "39ecaz3KvPgqZCi7FFMTcCmhvsDNezzDvkju2JMrtxkEbYrgcesjzDtSuZd45h5rAFLftDtNKWTWnU5PRnm3WTra",
  "key27": "DLmFx3XA9ho6rSbEqCuWuU7gfS6DwfMfz98kXFSiwb95mDyhMjGjUTNzqPu8ovCNDLL1uK6LfnQ8mH26T7tLUy3",
  "key28": "672r5WkbmVn1E4EsEyGZ4ErtJgtjW36XK9NFpEV1GkU49xbjT7itDSVGkpJA6tw29qRUiUfwsVZAjYdj4vVHqtu3",
  "key29": "5eCmwTNdMRKdxGbhkpiFwFuKgsYTuQa2dt2f2susvwqxp89kBKJj8wARXvfed4AJr9aVi3s5qAs8itZNN4t6iLvB"
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
