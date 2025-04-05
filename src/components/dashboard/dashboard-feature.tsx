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
    "46yoqUXQL9tGUNnvWGiwagZ6C6T7z4JJY84xM58xbaeVjynxhFTWaeYrmuJJXfUb5XcEtFnTuTcGr9rFSLZHxG96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJ78BiiV9QiPmVx9v5WHfeRd587mdST7ikNBaj9FA6u4jYqQFiaCnKB9CkcgHvM5wzcLkD7t4zSuc78y4ncFjEf",
  "key1": "4CY7oV2YKhXfJpKKGuphE2LTg7qKKrNH5eXsqGPqQHEZK1Crz1MQy1KkK2mLaCWULexS3zPiwd7HXowMHr1TYSAc",
  "key2": "3XPcwMS6KEMQYhUi19FHjajkeMuJMcuTnZrvumNG2hDMKDgne4nGCSc4HenUiEPDbZbiJPe3rQfkeiCHhHbgRNJ9",
  "key3": "fiLdL47Aa4uwK8GBhhDC1QD8PFqKK3uSFRvdUgKFWcCXrzWG5b6AChRw82ss3qSo4pFGWvuVuFPq71Uj8y9xFTX",
  "key4": "5mdK3Y2wYdRrimGHZ8hmJf25bP13WTy29nkUpDU1SmJev6oB7osn78Gvi8BmvUX8Qv7WVZDWUKrgS47xMtXjV7VE",
  "key5": "4xqYF7UywUANMX7ojRqfhEBAKtGRkXBSiGxbWmhBVHUzmuLW8yagyaXGCy2SkGeVr2TbXSkRMCNK5YY5oEttpFV2",
  "key6": "4VYCrSebWQjzuRgeLR42ky2sYaB2VUJ94mYWFDAHxLxpSJSC3juEyGeEtny1k9Qg7s13EDiUHNaTX9u7H1PcroP8",
  "key7": "3Tqfd53YvD3DLUxdv59hgVZPh7o1TayovJraiexSnYaJkaqvf2RZtE7oGq4sHpDo1w51WviwnWYv8DMRCAAf4u6i",
  "key8": "mQ1DnD1zCr6uJcQnbppsCpsz4aYrRcEmvY5wMmbytyvrLVwCBPw9Hp8GuRoWeEgZgUfLuQvv9vwqxDwnTYdaCx7",
  "key9": "4d3CuWmu624hTcD4WzpnqGYZuxS7RvSMHJCHaob6tzhWds9VCY8GTunxvRUYz7tNWGVdL5f77oq9Edr8Dj2kysEH",
  "key10": "4KQ7YdCpG92s1VfVfxQKKpLKrnni5Gs4QRFmyW6q718mkS18XoEwgFxpw3rj1fzXxbgxZ8TDdvL5ZwpVh9ewZeev",
  "key11": "5vjDAN8Th5NvQr3JmBc3NePagfmJ4oAFLYudKHa1HKnHoWA4am9GoyKQKkaGwUVEYv3KEGYEYxNv8KJAhPAVR5My",
  "key12": "5QPmxvaRn9nhw59u767W1FmZmSJLGd8AwE5geibKkhD3egywYh4r8a9ErV5R4ZUGwfRVLZpVpystyufLbdjs9N86",
  "key13": "cApwaUy47cuppuC5D3LXt1RoUZV4QBjhHHTUqFze2yiLQoUvfBgpZA6fJXtJcdfVpmicDuQwRsaeHajbcZgyqUa",
  "key14": "2dP2tsyVYrvKjNFfRdsZhhvg3gz5Y3Dya1DYdhpGrrqGgBbj69KCYy3F1W2CqySEnC21Mp4JpRUuFYjpnHTfiooc",
  "key15": "582AiHNV5qqFrA9GJEVHWY9sZsq6KvpRiXCBVXMHiSU5KKn4XTHg15VcEWYWbeSsXUcZHa3TkbfKLpRMrb6CvDnE",
  "key16": "3Mkb7J95PoPNcopdy9Ap9mGzLjAtKwZ2qqdDWrfbYiKnAgyxfsd6svBrz97RExsyTwpGa5biyYS5c5JwkN6378Kd",
  "key17": "5rZvPybzoVvUVYU3sybMLejHK4PYttQcAcBwpS62HSMwj6QreYLzs1FThvRtP5XtkgEezKHtbhumbgBLkptvpZUi",
  "key18": "3i87C8DYG2kJiMvAdyMxHVEwco2VFetnFWr4P5wL4vfUFLdNLUTKQdj4t9tZfLcwcKB8CqxHk7pjDpLvFTTCux9A",
  "key19": "5oUAqEfbcbAfcY3KBeKAeVK73Awa2fyWE9qC9MenkHTj7CuPRQ643MTNjCBTygH8oFGbaQfusBoxeFUhBEUJPAPz",
  "key20": "cBBrbw2YUuhQoiTnLLcKJSmH7wrdxyNfmmrgfyF38hy8dYwJUQrcfPgoQp5MtmT7YR6xJMMmpnMK3cQ7E6p5dZL",
  "key21": "k84ZmVPyST9CxpThe61d7Xtn6huLSYA3rcvEwSRfkgyUX9LcM8zFnsMNf749aNY3P9ynwFQnx8Wz1by3vTF7HMU",
  "key22": "5sHgMiXxoMBVAk6Do6fbDv7YrRCwucM1ZsqQKey463ZJapq6g9WmLcEa7kXzXzzAchfA8DFERiRivh2TCB9rHSBM",
  "key23": "61ycKMeLqZM6oSj5DRmeaZ7XjqBNYS4rjhUzRp7cKvsqNFVtXAbtvDjPxyyXLj96PWKWDDiGgkskjJgWJ8Pijq1B",
  "key24": "124XGy4gqCnCjYb8fg9fhMuNqhQAbP4PGKgwMfRdWewuanJmYTZnsBvfUZkXPPmtEjQFi8sZgo9Ro7o95KY66Z1q",
  "key25": "3FyPoT3xJGvaNBXhdTKtFqkeu7xEjVBGMDxoPnDbiiFgGrVtCvTLWtANJe2PLEU2TjvFUJyvRBfZPbX6gj2Tm5Tf",
  "key26": "UhKrR7ntEYPTArWmsjVmLyp1sfGjYGbTJUYuqbcRfhvhRVLPwWAcks1efog7jP2hkHiH4VEXMCZDZorDkpEqYbS",
  "key27": "2sEiusMFW2hUjN1oGUSjzhKcd2qEFwC78x3uQME8LSYAdqTj215UU621uYB8d5skxYx1DCJobWTSLNLYUn9JAKEB",
  "key28": "3327rHeAjUsnjNJJqjKbWD2S2dXcpS6KuCvwFYDRpZZGgxD6uwVxPbd6wrcvYyAh5q5Bwg9rx9N5ycgaNSwNpUkR",
  "key29": "3Co8byLcTrwhYeasM89g4kBKYgct6oQJbqZ4U4Xp7A1pTVnHCubaVQUhEfGPXEZF9YYsSWY1BPH5EfxmZEr9BiJS",
  "key30": "4RqB4i7WD6Xbukn9Fb4YNe8MJUymdWueKmSGUX82rFu95LzcxdDLLkey7nvSjiDNzZd2hCAHHfskbLoNp9xstoDW",
  "key31": "52JNtPWVpbtvtre4mE361cdvx1QBsMsGQmjENDjKzJb8k9pEmACLe8ozjUPJ6NPxb5e3gFKVaoQV1VKtaQ8U3VeM",
  "key32": "bmZ3zReMZEaQHZRGMwcfz8mNe4XgaySWgpjEcMijyDAJLTQirUS32EF7tayX7cbg8CbPPVup9RG3jUf1qs9jZug",
  "key33": "sKBW5XgmA5hS22Nu9wSwCyAWBQk4vZtzh9UfMHH2amLBaLJ84ympVtu5kBi6pkZbsHfC7wtMcZicX2ioEKv8mdy"
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
