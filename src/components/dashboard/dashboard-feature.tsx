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
    "rYNLHwkznE3wCoEFqxaVcuoBhrzY2E8iA7xbw8e2TEUMVdrvPWYKvPKhvsf3o9Dhqe7Zx4ZKdwTaSwPBvuKXdDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERPAdovHo6Dc1sLqwYAcSCpWeQ72ecN9bSnHQcbT4JvVzdHrdTk73bySYkNrDumCiB5fZKh7kT9cH9c6Uh5LdqA",
  "key1": "2tBr3WZ748L8F93fseNcaKDvGFXDkBfZY4XBeLg572u2bBdEhSSHWVf2cCdHabBGrKTG1J3TKGQcBbKJLoApiRrX",
  "key2": "3GcRzA3ncfi2sEsvc6HRHiuVz5P5JnV1Y1WefXPski7RdFeFT7FZbJqH39Z5jLLZsgMoiafqhzdbsbMErYMmUvhq",
  "key3": "5NhBTEwS9qHFqB9AFxTVtFtmJhhNUc1PZjH7hnms9Hwq2xfmcmDu2WStgy1wHueRKxJ3yxXHfgikL5GhF5V2T766",
  "key4": "3Dbbay7inYEU3LebBBgxqhagMxJdhSJtDkXbCTz9eYXdKZFjJk72oH53YYonpgzrVW9kCtLutvPGB52hXb7g3Eod",
  "key5": "4ye42VBDWM26J9CnuSsGHAfW483RexmsWKZD27VfYkYgQxrcSKtzS5iyztTj4cUqDVhcdS16SsJxJJW38RcsPsDK",
  "key6": "wvnhL4p2CLYic8C4c2hr15R3vdL7RRvVx5VSgkvdKCknCBB1A1bTgbdj9tCVcgQpmyvG57B739e7wZHKn4sxDk8",
  "key7": "5BruDpvU7LbHGYKv7DfkU4DHpQdnb7CpyY9NqBCiSLtmAUZmbmL9nkq5GM5pRdF7CpzWxxmV1xBYkv3Epr2cZbQ5",
  "key8": "3mgFhFJwwu66qXJuct8JDnWCmCi5xhHcWsvUjwQAsfYZfDwxe4zDzd4PvwNJh8pVnd5mHQEWjynM6ht5AG5BAxvA",
  "key9": "NejBojBQXkkVnC8zZzTtYM8eYktwkX7MDfyiQkpWkn4x5SrS6Lv9PjwCSwP43Veb69n64aUKVSyC6BaSEwLtUDZ",
  "key10": "3STB2tcbgtEt6SJGJK1z2zvcQAmp7LWCXfp3Xvb2vtwuo9tyYRBi7fW4ezNyr2Z1qBTZzzt5xwu6ejRET4TjnCym",
  "key11": "34V221h1HdGrCCpsMrwARWmKt5uGbY5vddk5Za4Hrb3UgcBbvKBMsibBiGM8GkbjCXE5Fpm9UC6teQ7ZHTqW9XTp",
  "key12": "64AN9FEc7XPd5BpbBP6XNc98w5Vsq95A8mT8TphuJVcxEfA1qwB4jMkNQRC8gbKAt4X9TjfJvrnMDzRcdCHeXTk6",
  "key13": "4iFVXkMFGKyeLzn1hMVDDDRTNUKywy7pvXfVJcNFRa3XLTAncmWUUamVk52cYi36WdCdMVi3eDtKJEDnXmxp6uM7",
  "key14": "3ExX6d3x9dReycUajYbHnbCnzMjEneVbT53NyVbRGekynSedL9R26sEoKxv5C2gYmd9PpzaFpJev5S96iBztF3bY",
  "key15": "5mKneCjuwYb6Nb1uQe3imKztAbdDkjXpKWyjDjDkpV7datBPFruVkTd3cW1MgbFqoBHjVvbRyDL9KuE9f1LXHeNc",
  "key16": "3xTu82VNNabbuTm7r95egtQzMBE3L5vQJHpYoMttFAunzhcFnEdTeoJDr73KqzmStA2Qxwoez2YiaoPpHcFibzrw",
  "key17": "3Ep7UHba35t1p5Q5KKhbYhNvTQk3CcMgDff6GPY5W5tKQYntMFRGYnhHHD6h6LTPy3ygGddk34KpUi7wy9URYaEM",
  "key18": "Zzhij1ydrHnadXYrNSPcH2b4kKMW29NfNM6hhbbLidUxKVkgMacVysS9mUiT8uBmhNDS5DhGBFrad68wbGDwFNh",
  "key19": "4t47amT4Bb2EXvEzXuMMaH7KLEhexHaVWjhmLJe865MwomaSkkKXGG9JnK3j8BCeDCDCe4DNMhdPC8ErQiNK8iGA",
  "key20": "5FFjbrxxriMZc1woQp9B34EVrgkhntZ8LbJgaH2nqito4VubPsW1abWEuqEE9gSP5bnZb8yENwbc7zZc8tyD8Ubp",
  "key21": "42Bi22PxEYK7xgVZGojsGVe41QQEw4zgbQspZ85gXV32PJ2aZtmuHd3XcYtFaBzXT5CXY3TyMcxrNHd4fbNDyUqi",
  "key22": "mzAUNbQmznYo2mpuHx2ct4VMFNRB1YLcfVS9SeucmzabQVoKDJxySsnPkDoxiGf959n35CgkUy5CL6nxWpCbaFo",
  "key23": "4gwJEmmVvSwpdfsnJTeHUQFuUrSPH2smUFkcM9TwPnMjRTidZKKTTtNeYWvEdyw93a41TX73LnfsG5uSMuTEivec",
  "key24": "xN7PGnoc61YF5dHbPAW3AUQchSdpWnKHjWip7DLsvh8ACXYY6gabqKssnPEorGkQvMfZoFrrPXgyAYyKMMZD4aU",
  "key25": "4zeZvTNsNra875dSGTEEGrhXX96WGiRac2gc1TCRHnPUaroGftFMXCsXhtPzeASzXj2NA769cyDUGAjdb1jGF7Hc",
  "key26": "4XzViRoFfPKprehT8dLNCifbLNY42r5ZGgmoCqRY7ugs6Pr1YJ8tjuWmNSWwGa2rBjT1zyQvTiZ7E9G92Cxuqd95",
  "key27": "41faRH2MKF4J1Jz4PHeZjAhNUHrCGCfU6shtfcMgv2DRuKHDKXTXyfcyZmK97qT6cgJZ8ZZgGDpBH5DfaUJGBb7g",
  "key28": "4njyqpypUqEupKbV33gSKawzs3A5DQGYxedvx2iDUoJ3Sz1DyxJvviJ5qCaWyu3JdQ8Q88ANvVi1sP9ufi4QovUa",
  "key29": "4Lmqmi2LirrNQ2uB6XYwpMa4WKPHBMn863EMhw9iCdJPinu6zpenQaNo5meQSj9XPS5WDbb95Z8FQhrejFziahc7",
  "key30": "4XEU9GVibcrjWP4B3qjtJyPibNKYGqXiCg1meY4MPmPCXKFd2uj1TsqrqfriQBhAahS3HpkML4dfRyzc3uBUJwoA",
  "key31": "3i4xWySggNzRU7MnQC7kYFUn5WsDMHuaGP8QxjdRv19ALENE8BsJxYGer6RzCqQYBuUN4158QcRYfixc7UMeAaNt",
  "key32": "49fJyhNEPheBpPNDNjCyVp573w5muEX5e65zsnCRRYaodiHTKTYicPysaVvLk3kcjiqKMteN6AZ4gXrCe2PAes6q",
  "key33": "4Sm1JJA6c3Q4hnkS1DHMjD8E3J65zqQqqSyPrhdfNPzadTJWVX23ZBqiRJGjjnrsXkYSzwHwgbZ4z7Qffp1LEtA7",
  "key34": "3TLbsHqj2tJc7Z9eEnLq1W8CgFCTBMwLKaFMWZdLMz2iU7wdMY4ohsarvRnGzRhFZP37qJy35DjFqa3qf2KX6z73",
  "key35": "35hrT1fCcLY9fxDhoiXJpwcqxzEJ1fVNgX2KEk4mFtemdU27pwGyovF69aY9AMwWCz5nrrwedQPQhdLRp9tbuuHW",
  "key36": "3oGihmXFk6rmjiAvq4mFXfVFze3fMPg6bqPrm4SviXjgd3feVAFNKUtZwTDUGBH51iW9yoStHrKUCDU6boXKgN6j"
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
