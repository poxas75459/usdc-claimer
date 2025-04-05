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
    "3m1wjJBA3tipapMWTm7KgDYPCtcbCYFovL2uQqHpEv9e5yRhnXoY4yUMjknrK5t8qoovoKGMH5gkeqZZKyYAHnyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhEj6TSLX6JhN78GSkuDxp5sGSgD4raxHtKhRCqrFWKAbxZmeE6eehTeRckCEMjJiEyR2WuVqTgBgAcMtHjFM5S",
  "key1": "c9XXearYEBXCnxNgTZkg9Hn1f3nTJezUbkA15CABRLo53aPNq5CY3PbnoTJojtJd2iY9sk6jNCxsMeQsCzRS2p9",
  "key2": "5rEMVT2oWyrcWzi6CaXyZGmLwKCtVc4AJUJHcZnRUgNTMwS76WGm3Jcb78bs27PtDVsapDxPSnVeEm2yA7Fcw7pd",
  "key3": "zPDxfd1uZpMaBshy2ZxA35QdDYD1UFjxtckNCNcC65XvBDvs53NJHKg77SAK9dP6rAUsu4omN3DKSwxPT2YUHZV",
  "key4": "25B8uRNvmXXDJsmW9Kt8NikAMrvoTWY6oXXpjNefdsFTnASucGt4bPKdVaj15ZS7V8GQ8TyipU2SwuxBgkQCUvV5",
  "key5": "DTyPoKjVyUmbjZvzRaqSUGrATfN2tLinBwgxbarVbE5g25V9BfDms7NhEnpeXvBKUfBambAoRwuzzx4P58tK74T",
  "key6": "b9Zpwb8R7PZi3phZGSjrXfrSAfEWqec9761jquqw7s5Ccety5fDd6hA8PLKV49P3ApsoNh8pXKDvyvM5vah98LS",
  "key7": "4qBd2rXgFvptjfCXqBWDebzxmcFtmqXJUhKVAWfxCdmatsEcHLi3LqFc717twJAfeNQEt17pCxYZ94785GFQ4Lyo",
  "key8": "4ybt1oJf76shCEYa8sr9dKkVyH6fXm3RV3qrZYz91Ks87uxiGu6wXuDzsCRSWyV9Uq1x4S1CjrYWzpZ7QCQBF99n",
  "key9": "44LZSPK6gTQxLtTYjB62wzFiXh5s8qookFTDGBtep4v3vh5tZ1Cg653R8jUkbMma4NrxgWd9R91bNbB5dpW6SvVd",
  "key10": "3xy7w9NJmEYvK5HT7EoGzaP3NRMNs8VC288S7MuuvASnwUjBfYuZCz7LpnziFSeyCe51JKy717b3xUiN8oT6FpmJ",
  "key11": "5c4MdCxozwwAAxXk5w6b4o36pTZyT7vUHktVHMKzFRfUqy66WEDiGsMo7DpkBKjhQaAfNw8qAX3zfzgRn8ygtjpx",
  "key12": "u8CSp8g8eyULsyLJtbEKTXK5q334KhCWUHYcGhTdFSNUhgyXkpGDWJgSfoaEBKxVzBHbXmEXLwHf8buXwUV5L4X",
  "key13": "5U3DRyJPvFFPKG9y1MwbUG5SXJi9C86uAkKCzpo9BemSitAjVWXAkMEGNAHdGxfEHA4D4p3FieLQEwadGuxhB8Dk",
  "key14": "5UjEWk98idyKoVP48AnzmAQdGVDHBPkrwATrHMCXVHNRNf5XZnTR4mfmuza4mBEBoZUHHyj3EgNbkxnxmjRaqZnV",
  "key15": "4WX9LbzcsAPVS1qJY3AQcSabkNJt5BswRV3cYeFB6n76CstMMkFW1PnoxGWH8e4TSJCixpNrRrdWumHTEDqu1GAH",
  "key16": "54VnRYfb8prdaikNozqHMGk4nBamjgJmcwoELChvmCxQCB1HfjhcJGprUrd1sg7x4yxahPqBDFMiW7gW1v7JRY5F",
  "key17": "qzBYR6Ng6BhuJmosBd55845omjxFHo9jMN9Rrf3MFRy2pchBJYCzAZLzAJyk4pAz6A71tSQZMPSXAFsozTe2xje",
  "key18": "45Wx6EhijFs2T5PPYqrkRNW5XtxoWxnmzbDWVmjffGkq1HvbesoJnMwNEzGSM8RXM3fCAJVirVc7eF3xjyogu2Xh",
  "key19": "61wTm5rX747rf7XKRUf5bdY3zU8ugmCkUoQ6BfDhdijPW8nMMewX5aJWo9EHBMebpQnsqiTsx9gGGLjCcB8p2TpC",
  "key20": "3eL3wnR9hoKmY1xoPLUqx5vwuZmD2XvEh8euWCkVy7GFcCissNNTfpoyvK1NzdT3vCHA1UiDTzJ5M2Pf1MF9kuBT",
  "key21": "3sgV8mKgArjAtK4r3jembCnkvbGEV3rr76gP9qUK89swn9V1QPi9d4gHcyDL5oUVtsfFaErdDwcaCGAv2PTPLazX",
  "key22": "5WN8LrH1RDT3DR3E4EkobT7gMVvqbCsvQWy5W8Gc7fnPAhCPdhwgbHAJw8RWpR8r9wQsQitfo8CoNcxBX3CLbRjq",
  "key23": "2tnYRoN9UDzDJBCQHyTBGLmLbGPjyrY9wUuxXomkPkcgxuNGk7oM4X3YbRDdr71BDXSyr8yBgcXC4LL9kdYbf7X8",
  "key24": "2qy8nXVBje4Vi8QsTarUP8gash5tSUqCA8RgP89G8GnrSmnPiQHL8JfKSsjbyoPRidHRrUDYYrZqFat5Bm8Nx1tA",
  "key25": "3hR8tVtE4hkXQK9enMD1eFS5SDApKEMwSzHbiMMBmy68LgfKhEh8oxXZma5P6VsF5FPBeiZr5zEWAqSiwf6KrMzM",
  "key26": "2NqPzA7ARuSpyoT3Lqx5AU5hQBpTCFY9rVfYvcfqc1rjR9LbKXV9UA6iW6iWAM8J2tNhBXNaTJiYqgHXEwkDVgYZ",
  "key27": "44ZBnppXCW3trqvmSr7LPwpQPd3TavifYa3RLxd4WVcaQTAv61pxBzLarjWiaogUWGjzVoT1Q7raKbsSQZgVb1uy",
  "key28": "3z9rfty669iRZat47WDeGhStDqwxbeXHpEiNNvbMWw7BGgYAaQamyNJ8MEzVY5CirVwQJQZ2ZmnkRf1uniKp1cWh",
  "key29": "KnGxCwxX39PowFNpEeYfUT2gFjHfieQC8DufYBMLpZdxTaotDJT6jELZgY7KcfVHNayLpurQQsHYMdoMVb5hYTU",
  "key30": "5j81D5DyLC6iCKPB9Ub2H5N9sZ67u6YXhjWaGJFLBw8XF4WowdzZHvSfswxPjiqiHyGzGF2hQotShst7CvRn593X",
  "key31": "5zxUvfPGqvtoYnzVTcwhMCWxCBN8mo8EgiU3gXAUfKohQBnx6gg2qdu4LF1f4yk8UoFT3VbC5xLHnRm2CYUTVDjc",
  "key32": "5NQ9fn67Yhoia3AmHnBsXmx7MtNEiWC5GvutGMKwQvY4MPRhypD3qnCR2kbhxEQXEZETLUdamEzHCTAdpTWTWQN7",
  "key33": "JdpB5CUZ9QfhQtFrzM4oWBNUoCoUk97bNUtnZr8Hru5WTv6nJTQKabfUCPgSEnpwGRppCPDxTLhzsG6MJz9pF6o",
  "key34": "2wGUnVSAYYw3cWErKQWKVR9yUswehx1PWuUos7xfMHHWsr2H1BHCX39vsoHJ8ZW8LZLvTUMKyk8faWj2puFc8iym",
  "key35": "fiWUbQpTWrYkpdgox99vh2ZQQ6r3kYVBhsve39WmyUf7RbQUup3Ys8HsAhxoQu7zt8syAYFvZdzSwkTSPT7quPT",
  "key36": "5FFpQGLTPXzrhNSRN5iiBhg1FgKNs3gS6DJomWvGCma7kd6cxboWNL7Ft4bSSkDf8HM3UNfd76j2ggDbH5buzHKr",
  "key37": "59dX3eEkbhL6F2ee3M1G6eJknNJXsLRHKFZ9FAfuAJqaFUrvhkRhrBdJEwaUMXP11rcgwyNf3CXHeyX5H7v4W8Dc",
  "key38": "3xTZGFKu7m46e8REQvj2iSosHbGnqYpGvH1e7xXzzxNm9FSyFQ2BjDwrJkqmLL58LtuhtTqkiwCbCwgqhkPuZyDw",
  "key39": "4rCTg7S41vte3Q1aXrUFe5B6DYgEP4oJoymcks2qELm7uHc2U5NNtuuNHz6kStsrXxbFpSKyaQFPYtnYKJKeALN5",
  "key40": "3ZcQTewzfKji32ge1n8wnnZFa1Sa7tG1gfBRZjBi5spzFEdcg4wfnSgTcr6MdnCWXXXDi4VcLgnso3UT9Edip8dG"
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
