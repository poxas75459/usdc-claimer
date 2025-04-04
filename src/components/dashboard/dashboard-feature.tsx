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
    "54rpZf3ub99Ah1JUoMK3fbAJzicFkBdvCcNPwWNX7R2CqJwjxnoorVVzmjRQFTqY4Za3AmG95xhRD8FeSrtr2Brd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LGnb7vSUpaLNaevYyWuqP1mrMA8JY6QH3Bw4L3mfp8kDJ1ipoi7JN3C3oVRNWmJCGPHuK1YdvauK83HMU5TDkL9",
  "key1": "5xg6XB6dTeTms7exZnGcaumGNSmjiEnRAJU9Gpym7G9dExEKTeRNH77Qpc5x9CJ4RSshamksTbqzB1rEGerMgLEe",
  "key2": "TpJMZucrzfbF1VkncxAbYxXKMmwGpq97uC3PAHsvSHzPBSa9FN9Ekv1ttX7nv5vRx5qj5eNHfrVMCVEgNnpkKr6",
  "key3": "cgxr86GuFvCzG8Bc2a41DTuUusCGXjfooJ68LwYFGjNekVkAvQj1Z2xhGumDNtVhBH18TeD4n4w8LZwKdwWTJ6k",
  "key4": "25LBSGLxmx98BgthYW3ecu2KhHCwrWoJ2aD8iL7MC5DSZrTHt9KqSX2TG2j9q3SdiH5D9pbyqpzNMNNqrhmN9xtV",
  "key5": "4xMyoH6VkpnD6mjEUiNhR3d7Ywqnd1tH8RaANVXmT4gvj9gUupQEmtSz64LspzQ5utMNYKT9rYgEz46eHqS5Gr3d",
  "key6": "isbqBPS36tcS97Ua4EtqNUKKe8RDDjRwt1N5nEq6Vfjdy2VdWhjPeXuDSYyYgiwSfJinFcbtMLacZGaVif9oeHW",
  "key7": "4nHsyGavFLZR32gad3T8LRwnBcNRPmQUUFTFm2ovhWZE7vcuaueuV6vP2RQ3hwHiesxCyQV1jYoLUqpdhmDprjGh",
  "key8": "MaKBU2MDsUFjYdVu8yMLY6Xbz55VRZBSzDXEd6dWRHy73aSMsyg8Ert3XpFx7KTLLdd6kWZeJEhr3pR6Nk8y8Em",
  "key9": "5X2cug3Jax1do1ch9gqTnz52dUGdFmRZypqyU3xToTAXCJoX4LejbQvwKcMzyDisKyFe5Xto7yYXcLyUwTvMxn7r",
  "key10": "2KH8Rcsc7osLEnXCeFZ4Bzs75No41cRVuTc1npbKTLFkBV85ZXN2WBgHgcuAG6n4qduBzS82xpv1YZmKiXGE116b",
  "key11": "5a1dLyvEJsnknEXWfPJ88vYgzxK1yu3WTHaZNGCgegRPtk1QAQbDzMURDWpJhWtp3xzpwZXm4xgy8d5KdnKNsmuY",
  "key12": "5zZmp1b5XcWMpbZBSzbMRX6mxpHQJMMvMXD6YT9173ryVQ7HNfg9EsjgcHjPCQs6kw5ndwgRWV5DSfUWJ3MpiFRr",
  "key13": "4Xf7y8R4trDoG16A5jBSocCCxB7Dh77pARazi5p3pSeXhGKXqV9F76txEhMb4NHuUWGNnXprKh1EnWHHy27p8Sft",
  "key14": "4QaMfBko135HPMrqfgLiP8vUuTV5wDigmJNeALNQp8yMCikUQZpGNRSXJFxMH3H5PciAkaP9hw9hWf5DzPLPbWPR",
  "key15": "59UUeULsTzoPRDAvZ6AT9Nf95urjmkewL4uGVZAs2xwKorBvb6k4aYnD4SEivEDUJjyYgti6KVbM6PeqqdBPZCiR",
  "key16": "47EhrFJgLcKZTMezWcKLQoHqPkVCKHso641w6b4TEh86RMmwNqmkohxxXKnj6VJkkpyAWAg1TJghYD5cszCevKrM",
  "key17": "66gfY61mBvEu2J4TzSetfFvBHV9rpuVTjymT2frmDzGiSfTY2aGpXLfvgza6hZty1Pim45tqBnqWG5yz7tStwaAQ",
  "key18": "3AdRj1p5oXT53XoMtR64WNfn7RVKq66MkHutMyCPirMUhxXjNWmWMTHJ937fC7h1ECRUc77QVoMn598u5zuofawq",
  "key19": "2epzxNjZwZDju8zawoCnQaJ6zPipVeXfyiCDBK1AVv3rsPbwNPGX3aonM8QW9kiYvk2B7LyYUtfhgxqtHqohXzSn",
  "key20": "42PbCXaNmLisWNs2y4fgVdUmctpZc83wUpkS9hvqaXavMzzfbaeYHdhZmjZiwQBgAKutbSFBvNTVbvr68AcCDwnC",
  "key21": "DATByxH47d6QDaQknUsYPPBRTXdAZooDsdeFWp46xU5pBqTXZ66QZdbPDycn9NX5ghn6E8u4xZNnViztUbmFjXk",
  "key22": "Y6AzaPvEoi3rVYAjTaXvchuigszFGJiK6FVtzvHc3uavSHg3HdziAwaZrxQFxygcigfAsC29sUZK5XUq4HrYDzs",
  "key23": "52iYjJySWHetDtzEZpBnxDnQHBqbUuoupa6rFVcRuanHzTbchwNozYUXjnYNAT1autYaa6L5LnM6UPBvxVUvFrRU",
  "key24": "5TwPrFRabij193rUrB3jQkQLrzXThvqNUx9KpLbtA3kdXAhXigDnqTpFnt7UG8paQoYDWdSx4SEnGAso2x3aYPoH",
  "key25": "2hZETPdM6zSdmsifFktCLeyC48FzXsN4amG4HYeb9Y8FFVbZu1XFcrDatrzdUMUpcFharBMQ7zkkioznxN4wJiW2",
  "key26": "3ryJTDUrE3dkznDtiXnpXfzuAC752VakDaiXGs5KRbFo74c3EEFVFowaipHt83pnuLaU3hyFkoUkKbqYkigF9btN",
  "key27": "4kjevEStkQNsFnQzBx5ZGZwFGaxUF4CqJUDisY4fNyZeB2RhRGnc61ZZNpvPkix4VmXK8NW9ztfieDqeoMjHg6cS",
  "key28": "4Jc4tb5WotPPi7QTsTowReT84ubhpXNGDrL6xSAk5htq3rH61E9N7AofZRbJbsfLUVXqbvCoR6jTz7T1XLecit1",
  "key29": "5MWhWhLFaPqDyPJeJeYpU4L2254fvkve6Yt3NKpRYkY1bENtgsikr3JVnqYAXGjgffdiXfLayjJKrfR6dYG95xjG",
  "key30": "3URWVdoC7oXFz2qgghDWuR6etMURd5eLfjeWKPGEepnq3J2MLRKBPsW4F2JcP91H2jqMcQiB4isYQBwTCjgKeeJV",
  "key31": "mWgQnp6g8rops7XpqokfBepay1yzeuriaDP1hGiVsW2fDfkfjc4Wcr8eWvuDUgSVfXDfa12uArpBipjCLYpWUHS",
  "key32": "61vXLtAGHD7TX7LcuXmt7bEfaRyJ4EZ9a5h11NYENGtfLc4KMZzw3rXghmKk6R77axqaN4558nHkRPwvUMwZryDY",
  "key33": "2fhYw73JTprYRYVm7eRdiTaxFZ71H2W4BzuK9eeNqGaT8VVZQRfpdCtEZvoqRDuHBv2FUmHdiMD2gt36PDAmNSoV",
  "key34": "3Pkjp29h1SQohtRavcq6QWER8EL6iPEFZnNp4UuRYhCAT67SD72aeJEVbkJc1WuhBVNPLAa8Cs88PZ9PKRd8toDK",
  "key35": "wepqqbZQ13aFFdKsbZH1Q8WEtCQ2hdGi1dQYzaBhU5CSdP3rtPJDEk8yeY3Etngt1GXrwecScJpdN8xZ5SWvUz4",
  "key36": "5kYL27t6ZTVbCLrWBqFdTunoXKes7fbaeqTfatb5uHQZowq6imJ82awdGRV2hXL2cXKi6unCXfQnAbDZFMJDm3LJ",
  "key37": "uonbJCgubtRQteh93PuEc8somA8dxEoGSFJkni3GreEgmvsQVcaigFYKSMVbiXv59Bk79U4YzYQUF2KbFBJBx57",
  "key38": "3aTiNfKMwE2Y6sCnyinCVYM23FwYcnpeN42uf4W4bVstJm4XkKDZ3jSZro6FrkfYCm4qTB5Pr5H3fZzXq2SH2RbY",
  "key39": "4dHv8goZeKQG9cnzSvDuvYnT699op9mzVMZXtajgbRtV2zAYsWa1y6oz2yzuCSZRAhHAuwSvk17qC7YoU6BDQ8kF",
  "key40": "4k2uEHKPFPnUX8TRdz2SU3jL9DyXn6cZgQX7GCKsX87QduGKYVGLMQu3amGkHbFXWE8Dzrp8JhEvqyaaZQXwdqfE",
  "key41": "4xzaQNXf8pBhJ4Vc6JMgxX9Sab3iUN69VgAPWZLxRuMAtYqXmjncrFRWsgrFSQ624nyPsLuKVVQdxjFGcS7YGZLs",
  "key42": "2XFLKP1EJn1qfQaebCQDV4sZCSjp3GCbSjbYotSgJuS3or3upwExkYjJDcKzEbLVUcJ7qiAiwQC8Gi975CsLJJ6K",
  "key43": "2vzuVHsJKEnT44nWbtE8XodJD9cYZA1LmXFCgvTYKzJ78bbWDZBSd183iz6CZ4LpDNw9BH5jeCDXYTKhgMpQQVYP",
  "key44": "4DuREcnZ1LQ1x5y4gDszUMPNAauUspy7zy4aqK6wtYj2FH84aGpFhskunYhCHtNq3vt16bQr2TBW8nRMxSzQCbYU"
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
