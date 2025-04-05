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
    "61TNFuN4TazvcF8YmaYKeBuBnKg8wWQBT6HYJaFPm9yo1oNr15UkDooiFs3F6UPjGfZGkHmn4fTypHebdjd9ywgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pthbFsGdPW46WkrG8V3EjEPtahNdKroUNkQG4Hd3BPoS1nSztnUJaJq6GGVF6H6aXDAJDXW2sGWt7cfBdhf58pC",
  "key1": "2d2KHeyFuqKHY6JUjcTTUbwzxe1iu4MMYrgqYCX3aHCcC6yek17VePHvHU4xKndwF2NxAB3txm356akbYEjGJuQd",
  "key2": "67XwrW53Qj2jbRcVXWT3KcURfZwSJA2zpQWBvnyJWmPyM1741gjfyqBq8Ywxmj1ajSnjyhCwygZQeNEyieTo3C6X",
  "key3": "3GYrmYEKgwLQvbgNHgBfNCPFCU44cSC39ZHoXycc2oeTDpqM28rMGLQTCEomykwbbtRsbyKmR6ffyG4WDEFFq9J6",
  "key4": "4izouQxjnwbC7iVjuewmGsS3d7fdmnbwE8cBnAJj89bdt5tYD4kkSDjxMNJwSExHi3Q6N2pCwHH2D6SRG2sGF19w",
  "key5": "57dnNPEDsPD4BGTaYZ4nbjm8UVmb7Jk8afAm6pk4wMtJnE4QGuhqoSmrg7inAAsmhn3PNZLYoJMde3DZRNW5GsgW",
  "key6": "3YkSiyK9Ae2gt11ZJuGDSaeTrLZSqLAFHMPQaTEqHjuA1w91fZLTCjThW9ggdgRNQxMNpYP1diQHirQLZUKqKiH7",
  "key7": "3P22EN8vUevH7RWjegj7xqWbnRaEzmNDFFkv9dmGiQDayfh4TB2VFSdZUjCNxEUdPk15Pt4c21HtjhdH8RqKqZph",
  "key8": "4rkHbnRpyt1KNe6PPei1PPxMicVRuwL6TSFPpwVgFeGHr61CJF72wHwNpCgncqFPid338hyE3RB26CToSdBrhUbb",
  "key9": "5RknazyutArrD3AEcwSvgS2E8tt7JLkLoqgBYNWRZ9d8xXCwZLjVsNrQv7A6tag4roZxpLsn4XF22As2Wi1GQQuv",
  "key10": "5ccmitJxrzWYimKbXyK7hyhhnsUsVqq4neyNQRwk6yWzCdEgZ5xdVyV5gqZqsytDzDMUc3kHoVVhomLhkMm7fBuj",
  "key11": "5GQyLXwJWnsZUmbShPgoALcjZZZ13daCvpygQgsvHfWo6jZajv97D8tcyyoxCyUYor3D7GyofQF3RN3cDSXwt6s8",
  "key12": "3UEQx2NDCDfpbdyh93dqtZHiUeSZAxowcwQn2dba73UtY7c5REf92Mzf3aW9AtEyWpCkTRVxHBeNr9sLVsYCXm8B",
  "key13": "226wUESZAg1dptF2Yh7w4zBDGJrUArwhdbK27C5iz9Qp75q7po62sUq3ptWU7Dc4gHjsLTkZHb4WM4Qknvh8EA8M",
  "key14": "5KwC29x2ewS6WyivYnuSRLm7ay55kyTgG8V5mzT3dD8QVUUQ2x9Xe7NQVPTXkmJbDqyNB2sYZqpV7DLVP8XwwPFD",
  "key15": "4Ct2GHD6B7R6quBazQaX4nj2DBygMbbV8ULjNXamz5vSPR8kyp8vpFN4mUVZHz3qVUd5pHVqUgrcZ7uHGX8FdE2Y",
  "key16": "5bcaZrhmV3aUPMeHbMKC121yFSWvoN5M2GC17BFXjUxdazjhKrZro4FtFGar3gbY5m9eFe23XBHBtTzkAXpU5vdp",
  "key17": "5EyKcAC6bjjChh15S4QZRY951k44FjPQg43izDvZKbGhZyiZNbMDpmdvwZofMvLk9TDtGcj9BSv9vQv534wu1WFH",
  "key18": "5gxj5pkRmw7dh6s6KQCumNFNGqvC6JSuRMAnqGpNZfoojvWy1q3hEdEiZ1GGaZ4DqXwQ9HpU1zT4BPwCvvztkQDv",
  "key19": "4nSQ4hadVMamFcStQNApFb9RCY6ZvRG7FjSmJU49DQXin1YQgkti2ZQ8uNkAYC3vaw7ux2gP1XTMqtF5gEQM3Nwj",
  "key20": "394pzvHGbS9Hx4QLXCbJc6ecGzMvf8zSRoTUpMt4rMUrYVKodPhBeUAjr1SrqtnNAdnBDqNqhkVr7Ab7mFox87tR",
  "key21": "3u3aj79n7YxT9EVz6gHTXXMYovwE5BciVN5Ko8X5uN3BrgxU2TjiX3KU5wDKCydaHK3iogt8NKijSZfoehzQCVL8",
  "key22": "3RSRd4h692GDDnS1Z53HhBLpU56aLFF4MM9N4DuZwggjMD7rkmXF8QPfb6mVHKdGgrRwomj458ZQvkT63wTmYGPZ",
  "key23": "2q9vvudV4n4VKmscXe56PPxKqByjPjksNoFbHjtvueGdJZey6TFmPdavQLZJR3q2YV2EQbRpZDxDLqQSv7HNSVnp",
  "key24": "3BqBCa9rUUCoJudzdKCKq7Lr3NFKowVu8LTAy5QciwVyd8r9D9a8VDGQUM34Za3zqE3xbffq5AuumoBRzSjJD2iG",
  "key25": "3m7DHSQfPPv2CLZxfUrEV2mKwDxuGVuFmfauLPQzXm2ckJubey6CNnwXx2DkWNyGoTcL1zg8qhfCKE9xBUkjDM8x",
  "key26": "NeaFw9T7FYjFkfDVse24tLR1t2XwKb4FaS141bH95oQEATFgkYsJZ1zTTf3XwnTrentSvEriKDxyv8rnP192GB9",
  "key27": "24rnp4WSJGoBBS319PZ7Mw4QxcZ3JxwFMZBsDk7Y3WQcr58rwsxadrf12YgLhw4Dga7yoGvw2tmda7L8enSLefAZ",
  "key28": "2GEyWMvjHaNUj1WPGWvHwZZci69P8g8a2WTDZEYVHNMxGPK2VqFuVHwmHdRmT2eG6srjZq6uMz2piY4JkKCJnGBH",
  "key29": "677vBUSstw1UnPBGEePv1itriMiowUVwTWqULrQbpf8ziH73QAodeaSZinurtDHuoUAh6oVeV4bG8ikNCgEWTPGd",
  "key30": "5woUj8WvRrBMKRd2aNARMnVU5c5Jc3yfGUukZ86x78SCQDWoowUjXeEj5dUeacZ943AfJQXZAkCms15Tkx98KXeQ",
  "key31": "5GxB8fxcRNPZoH5MNxTWKndQKpGFbkBJqGcnt1n1xKf8T9Rh6A1nUKMqSjLyJZuVvVGicxoCBVaVbwT3NTwTX9cE",
  "key32": "zkGCsSv1gEZ5HeexFtmh6TdwSiUF7QygXU2JGnEKHJpKSrPG3JrC2CexgapsDmh89wvfhC8Qm5MJjTfdCT9PfTS",
  "key33": "2eybPdDz74XANSfgqTCqfmhTZPfkszhZGCeHTuuf4kKgk978WNG2FajX4m5FTHKRi4B25hDiwHnGyF4jtubk4L5s",
  "key34": "2iCZWDkVP8sTfTrss5Q3hdwrJrSTxUPdU3kBb2tXqYMgSdiXxoRn2L6h4Stx3gTGDERX1xXuosGytDQ6exmfd4Lm",
  "key35": "226DEqDH6bo36SGj5RAfNR4yFZyxWX6gZapyfWUEGLTzjnPqtFSSXT9PRdzo3Mxxp5GdZ6RrM5JSEGAK5G5wx4z9",
  "key36": "5uYbVpTzsCgQgF1Wn8i4iqUYSQb2atqTvgQBtakHuQWuDbRPMxDxhuiQfKtZsc8tgHHy1ASSs6wNwiiZiQLjKCqy",
  "key37": "5oEmkG7tMMvkB4eKcLy3TPhHwVcjUVXCTv9aqCckn9ePEBg1Z9gDuXK19U8kRbfqMYdvcyTxSV81vzSkwtgqzieK",
  "key38": "2tCzrreYgBE21L4tz1EFACAn6aY38YF4XeJzVuJsscPzsSp7mLt2ekUpr149Jaq5vudjTnCNP5gXYm5Nj3pPZudY",
  "key39": "5cz9rCgbZcursDEn5VXkCh8zoYc7KreiURdQ9mZabF2izn63APnzrtYYjtixC59LA4H2vPdbnGS69qypnriQz2UL",
  "key40": "4HfqtdEXW5Bhom3itzzrGaaCUSrwNCbT7cUrBmGyKAoXPjiehBq8TpSg8ZYdtoxoGRjL4nEUL9tbhHnq3xDrptmx",
  "key41": "5iWp391DP7Go4u6rByUdpo4kc6optjVBjspBLcD9CbkvEi82mcdyoeXUt9y4HbvAVQywX7DVANgHdRMqYm6FviNB",
  "key42": "5ahmCimXu5vkDqLXau75epNiotwNVzYfUGm4pWqf9RZ6wafWrgSayZbc8iLVCUkxvBGK5qaMycVvbkXQSnhVqbjN"
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
