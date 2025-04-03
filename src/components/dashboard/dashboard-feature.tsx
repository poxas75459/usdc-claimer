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
    "gpXUNcyUzWD8jPjGnHYcbAVpGAKGxYqci1Z1kjLFCrYCXKp2p7dFgeLbecD4j9wkbMbZmvbBbe3YNDnBvvvmEQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bo3QgW59jvbSKsByLuowMd78Jt1Zaxsv6aGzpPnY5yLupwRsEkJhVekJyr3MHrLTu8F5ZxrVzyjQh3xHLVmVHk1",
  "key1": "4xbPqa4SpMeQmth6Lr9xzWpjPenYAPcwgHuLno9ukrHWA4SbZgjStnXGC5DBtwVE9wcS6UTsoYn79au2MLtcpRRH",
  "key2": "ZSF23sgJ7htnw34BcJxM9Shf5DrSwTUmRfC6XMUiavujzWbswS3zkuRAy1JHd4UNTwJfWYeViSaBDTSZhyf99uT",
  "key3": "SrC2PXS3tMrERe32kD3HdLBVEKUMR38W2uVfnjQP1afnCR5TD5Ces5L2fpzgTSrxggLFdvvHkj7sBMSFB75qWov",
  "key4": "62kBBTeGaGGp3yiid3xKFDCob3X9hJRJ14mEypE5hjr858tRQuKRVvbZdvAqsSETTMqBPgr4fFcTBnaz65oKGCSP",
  "key5": "3N3pu8gD35MkGdbnUpFzzKW17ERSaYRNDnKgtqM9iXGjs4Yntdn3Nqc2WsU4UF5n28Vs2VDxNRRkDmpA4fs5BWGB",
  "key6": "kHMpN6zCi7NCHhpqcq94qgefZbBgFiebc74gKPNa3cUgp3FuUET8v3hF78LRStuxYZQ1EWGFm1JjFV2BWGRcLn2",
  "key7": "53uEqizAXEEkXy4Wcrw7JcFwPcjxfDL1hwVFn18JpjD132xA3mhYHJpsJAepHAV7QqL7Bd2tJKjTj2HwyGySQfpa",
  "key8": "57bBsAR3UrZeVyaHDzpZCGtgEQQs9juS3Bfit8PRFZc5CHFPHzAnt7VVPgnCyvLkE3PCbKh7eYx6nud5WtJQwtzN",
  "key9": "L4SfEvH7xBXRM68jyEXufsZjTUwgFp93TUTXet8rNHFXH5JKJxbFvTKP58b8Xtu9QjWB9d8Xr4npwzerauHGMV2",
  "key10": "5j2n2a8ZBferNwvvLrj3WErZrJcFd3XGQeuuweZJ455wveGe8doCqECrMWPYUhgMD5iuxDzvJuBG7kKbU73gHYhA",
  "key11": "4C628j1KcpupuTFScr3rxiGQ26en1VofHMnSwgiLaRiqJNgYidYdgFDtLRhxVjBfCrGBJSv8zJPgruPprjDGUvWA",
  "key12": "4vFJY3nLULC4nGPELvwaTh8g4hhUprvg3Z1rSyfGzHAtFko9VofGDTGX1rBhqiUwyMWzCchr3cBe2kCaEocg239S",
  "key13": "65oiTkGku7BPWmdphvQcxRwhRA2FiE8dPHhntANo1A2egtqkske9cFfgUjaE2jqWmRkbmamaBPdPAnjGGSjWAU4k",
  "key14": "67ABVPFGJYdwRXVDExJXP1zA6pAUu46dqRi3VZ5saMyZKHxEdPZAtiBF2xVHpBdqLjmGF3dStEENZwUJYpsdJYD1",
  "key15": "3kwyvB5CU3AwsiYYn8Hi2XPfiiq4maDR2NwcEfdiwaC1ucvVbSP6mXRFq2N77b3SNVmMT3q2jMkWFDaKzi34tHFV",
  "key16": "5bf2QBysQP26nGzQcd6JpA4yWGeNUhBHTzYFYK6ShS5zAHUREMMdCon1kpRZvhXWffK9dAjRp18FMvyMKiHhwKKZ",
  "key17": "26BsSizQSYcbCaUQ1uNKTixET2sLc9X3Le153vq3KaZvjgfQ4XPP9yMw9z9dcohj7DRQ2M98WJTLtn6ZQPwJJuuQ",
  "key18": "5KAVE8hj5YqyNZmj1oUL3iDgChdqPW8cchsSyfJGL4XxjRWwwwtgNHjAbRKM5Gj1uwDeSQRuDYhkHi7yz4ujZg5s",
  "key19": "3Aj8appq8GtYAqvqFTabcZZpS3kz9NQkY53BaxQf5zNY8VE3Ao5Yi7eakzWKmfnv7rcB9zBfjMM7atjki4xw1PLS",
  "key20": "3kWDvizYM7Z29V4c1ekydLaWEhPCYKKMTPtECVvyqqbdgqUwWPKKoyPJy2FJwasnwaCDhfuWtJmrovcQWxmB6YJ9",
  "key21": "3NpXsi7HQhJNEpG9FPDHrc5AHSDPvRC546UWahw8CCM4LQpgMaBHiNV9YwmUMhmpxixJuz6mJroRxnnrDfZJuSXC",
  "key22": "4xVfFZxLGUym53BhUFwekWthZCc7TBGtDq7FD9WVrcJHaCBN28FGVwkG81MWafpMcnny3ZAJu85eRqwv7s5jwagr",
  "key23": "4jTK5jJ2phkjFjAMjMcuwL8ffdZSuYTzqq6FiUXV9U5cmWcqrazb7kvmyQ1Z7r3QiSncSMEmBH1V5GGFi3Kyd73H",
  "key24": "khrYEbvkwY6h3PSTpkDPftVU6FZrfkwiSkMKg1fq6LcVBgA8cdx72YQab8QzdvemaWYzMHpQfFX5zbEodyCEjc2",
  "key25": "23bSiVPSYt3PaDH864Zi3uarxymsqvu2ppSV4V7PxwEMk6TvmEuCgCKABp1FVEwvivQY6uA6VDv8H5zeX3hzAzh7",
  "key26": "PoFJzcQSKVxLvCH3nv23SSeZCYNFbnFu63MuKxawWruKGsRhiG8fnv6qHdsi6G5JVMyeDsri4AgwhPS9R824s85",
  "key27": "35mKx9kS6bmwbaRTEUEbyLBFKU7cqcPY92YPzU9GQXHR4BNQM4CyiVRqnjFE2EWhMbRWimdfV238N8JMmCDzwGNB",
  "key28": "2d7Da6M8y9FzJGgvk3NZ6tWzDSkAnMVfgukG2saw2NuL57pkPNYVNrQ4Voqs7Lw19MCaSaAaSUgPFTNkbf7A7BSH",
  "key29": "43BhhM33sdNGNwXp4joZufuo4ebtg2ALjsGM7qmKSWNgdCuKRRNw8ztRzLjw1jDoAvrG5v9DU14RZ5S2Xnu11FpL",
  "key30": "3T4MBh4E3Bd4HkJu5Mmo85XgNnm8PEopFijsXRJnf7YNh7vxU2QGXoWKCForA4tJH2Fpdk6c4Xkpipttt8KBTJ3f",
  "key31": "2USM3VLHSgxA9XZtTkTS2gAvZ2WX2dJLitvhQJuJ4ApaZ2v2Yh89idiTTHktYKnyqiDTiqvpNPqw9qYcrk677x9z",
  "key32": "2HztzD5YYE7woRW1V6sqw7NBhdmVNQ3awZ4zFjDL6aHx2RB4D1ZFCG74cKsJ3ExEDj9h6MdWQui1zJLZqGY1Nxn9",
  "key33": "5UM7qZA3tpA9yyjSuSMFfCfjc9p6qv7r2oVW4FAMeGtCwp8M8fD4gFVgzYH9j9ssBFdZQbqZjRoCFgZaatxeoo1X",
  "key34": "4RcqCDpbeEFFZrfchtewxNvHnLyLpSiXJZPjxs1iqGZ8VsTko2uhmX8a9jEVfs89ifr2GgKzXim2Xb9CwexhH3bH",
  "key35": "3dzgMm9NBSVmqMmgpxpUzGgJzKpZyg3bu5RnhbQ3KYkYW9zoUsuDGjtP5ZrybH9o1TYKo62BnkSMWmkvVezx77eu",
  "key36": "GeyU6iiKCHqYzT2ijXXAccSxmABSh13PELbSxuRJE8fvWZLtLSti3yMLxJgJwHMkAkdbwk2BqTMLvHfPVq5B6Hi",
  "key37": "5dM72zwE4G2VS6C7gsTxkuKR8MAbPpoNmDNXbQpqcJJKGBhHSndzd5GxoPDSzNMTB7fbCvEpagaDPfA89gBGB1JB",
  "key38": "3LDsjCGTDTTKPpLr7LXmGffsCDcWKYSr8ty73EkWbgt2wyqcDmk6vTzCXW5mYHwFaeB3hrRpzWP9ixrDsHNfVeZa",
  "key39": "28pXZbMDbjEXwvYqnd4PGeXWgUhTAneGRHNGQujMJ9DNbnWtYuVyTLci8ddARVrbLoTZA9Ux9NtHheegtYJ94MXT",
  "key40": "mX394rKSNJ7bQ31Qoa9JXghmkkDtVeX22EbtX51Ueu1S9Z56CMUgNaQTVT5ekxE3dmLUkoKFNKSw5aqGAsRSYcK",
  "key41": "61MBGbKyL1vF7VcxVajdS1aKq1sdPfrmN89EQ4dFewbjqqQ5vfGZQApYmFJ9xhdMcSWCYR2D6mViapR2hQSLfAJS",
  "key42": "23gzptjKsQmvYhvT6eGt5opfHZe5BTVeRmnwDKCNhMGuvu4XZmRiCAQdrj1zxXTNyyyKGkCgpfCUPHMEfc5ZwAQz"
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
