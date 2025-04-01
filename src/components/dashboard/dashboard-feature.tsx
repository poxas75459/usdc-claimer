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
    "3r4Egz78ueZAXbGJPtSFeHxDS3625AJaRp73FpbNV2wEiBnrTjqPpTPr5f4NN2DqBft9MXx6vkXboEECMknV5dPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1dtuPsAJp94UxZzPa5d1mRj69RnYDNEdsQSKEFC5G2tKyEANRfwu8VUsk6kAvymmeHm6VT3M8n3XnVJw3hevGe",
  "key1": "62XrfFr15zkTvKnNipuaN9qKo4LZcfnDJE8wSPi5N6nywVi7PhfUEiJLppT8CJYB5jbZJWCUNemneutZE9u3W5Z3",
  "key2": "5nWG4ahTAD7g3ycEcUBFeKF1DTPRoLbrj28FgxidSMXpgZF225DAVD9y4panbBwcZhQHQ9Kay5obSdSAepPaXpjf",
  "key3": "5R7LriMJ1QyeftaEoy2Vz6NdjVVHdMuHGrG6HUuW7Lp145AqJStqTok8gKW9VBPZyGzkXtsDSokdeWtK6E6AEdKe",
  "key4": "2Y2MskTWFqa6ayBVpkANpWuzi67c3aFTqqvMF9MnsgqdJPuSPcoAoakNfwLGZ7Be9x1sKPRGuhHNs6D1NhT2q2HC",
  "key5": "52mdp1r1mfWE5J698X72PcP9bcwX3kWYg1hF6MPNiEiMFDjCL6BxfXjnkfr6LXTvr63Rjy1HGepYDtAqRdx8uwrt",
  "key6": "73G9w3yfJ4iHziVAfNRxVCVpF4csvrUq6RBdFiPd79HtpZ858zaqtTgQ8Q8Y4kUq67FwnFN68bUXg5noyhznvP4",
  "key7": "5F5BM9Tg3AnrQ8zyRZ54o8FviUxHHew3mMKm4uG3F3BdDV66LWinkMLBNV8ZfS8eNmwbMJ61h8FeWBzCJUNUDgY3",
  "key8": "pUENnaYxNBtyfmYd62FQsSCfRThhnSCXhfs3b7wdMz67HQqgPFk7mwsJ4Gi8ZtCRDbYXNXnv3kVTgvPVWfWRSkc",
  "key9": "MW25oenjXwBmBaqnmQ3uE7iaD5J8niiLest9kNvTZY39Mkb2q4FR71p9ap4sQ3LL7qtcvR8mQVzhh5Y3pzJcRtW",
  "key10": "2JzXD9xtCrqGWhr9DNrcBLor25RD3QScQ3QSSowV22GsGCyccXEJFSgq5z3bCVfwwWeDsgGAYbXkirBHD3kMjR5Z",
  "key11": "5bJS1VXQjscmjQyfkyGrT64pAAYVHu5xrZ7VCtUMBCBo6KTmnfZedJstacGEupR2tphmXRdqaNmBo9y2HGtY6fSE",
  "key12": "4zmpmwBG2LHeZriykQhfuysR6C6udqW4E9mWVGAK3bcpfQ8zTch2wtiCJ9d2Z7a35CqQehMdWMyNhxJ37SxeexFd",
  "key13": "48qRimByz97NWrQvVAKawnfRCSvyKmHAoLWWgEdG4R5X18S13PMtrc4ReYQVk1iHvQxim1m1iHMmNZ8aPoqDWirw",
  "key14": "VFf8gzgs83yXiEb2P4o1cA2g9nz68FZ1hH9GXeQ96Z8T1opD379oRzJX5bA31HsCy9tKEyo1VCYipWCx6nzHe2z",
  "key15": "2jd147RAYB8jEsx6nAwuRoqmLTN9qQ5st7cXvV48EQikL3N97YsRZxrZbZymGrcb85RxyxhwdnCqxgeSy59YiZLZ",
  "key16": "2ZTafBoKdRVTdPGte8eyKaae9MGTh4C9523oq7T9X5UzL4Vnuv1csafGdgWoHnCPSHEN5RL1UL32DXkfnjVx4jdU",
  "key17": "2kuFGbWe537Mva1uLwjv9CKoVQCuVB7c2uBLcRnMbFdTs1ramgX1WWtq6QFGQNCPotqDiZz6x7Mzd2t2E3FceJEo",
  "key18": "5PK24WcAf6x8Mn35FnAW77ejtYrtQeE6RjTm6dQXSdR32FVkBXEvQ3LXYfbHT95G5rsDkCp3FpwY9g75LrkQincW",
  "key19": "5DHHhGBt1cBKCDmQMaT4q9haBwJRdvoCUs7Gwt4Cs1Pj9xwivJd4eMyCQv7oPc3ezc7K1gc7NuHjpMHjBW7FE9jq",
  "key20": "3153EUkU8HRXMrgeyp1AweJy2eQTGBGkqUcqsq8tjLnwjBNKqTazYvSbK47MQuaFAUWFmAJtunrCTtJtD6EGxLtF",
  "key21": "2PCyGKQzPhfWwmQFNDARAGBkXvkbCB1PqwbJ5VgugNTgB8VjJ5VAksApCTZFJJJUHJhNs66PUtdUDQhDxhsNY7Mj",
  "key22": "2pTyjrw3NE5DrWuXJqXkrhCuW82f2rRFv9vmSGAB1PLfuoQxJ1db6difq1BLT7yPAr7gAxYACzpqzEapWzHnWwUP",
  "key23": "57iPcpMC4CWh4mPCaRDsGxa9hwGaxwj1vB1vXP5SyLgMJEHgTcUivebH1YrZVjsjLVxteTHtUvKaKq8AWPX3bjwJ",
  "key24": "5rmX8UtGEA7vMNrQSfUWo8rbyPjEEZnCan9QnyeeZtSNxMkUnLZYkEn7VzKiKsdFpn5SbzgRsYvKiGkF24Xca6oW",
  "key25": "5DLaA6Q5wtnAPZZ7wSWSBdpAq2JiHmJ98jVxoDEiavhogB4LPs5PJXgUtrjxJBxX6mP55fUXpB4XFKdykfm8a2b4",
  "key26": "3W1SupsQFN6h71wkz1jD8sVnNJLJmduFv1QHh3vgpFdtjik7bGzeLFnhD4dUT2BCDD9NGBhbWmARetVzaVbZmthS",
  "key27": "ypEsHXWJfpVWecQSmXDCSuP7kCyQ927bCnnKnqpenGr1np2HPx2Ah32JwWimoAroXkh3uni89C2gMU4oqfkwDC1",
  "key28": "3sdXxQRaxLyKxzUk2vNkA99MopUknhFktuVyqXbS4yg13YExX4i4kpbCmfgWTNFM3em82ZJY5McRz5M5pzsem9Tb",
  "key29": "2XzPP4jG6Dm57i3UTeenH2RJZxxJw8cDUGsSGujeqi7nKxPqckVqZAzm2eiVLHZfVAqF6km2VfP7PyFQyVQhHEeW",
  "key30": "4w22vN6Tz287oamiDY5Jvkf84oJASTWFyAsTZzoCYro6AyYiTizsd48b4cjsV8FPJCoTxjK579yaYiZvXw6aW7cZ",
  "key31": "4zu3mSnNEeyua9rfirHLBw75sbBLMVHNvdjY8LQihKpyyEZjg7QVW2a1SCJYtYv6GVZc7bwMYjJp19nx8Y1ibRC9",
  "key32": "4zL2ZuE7J9bXQCtjg1YziqNUbt1N3wcTuXJreXEXsKfCKu8L8NNNuqaDgDv4fdRWJ82bSrVV7jJX2iD1B4FADuQX",
  "key33": "YzqhDPhqVxpeYc9o7zx74qXStzh3N9yoB48XdQ76ksiFZWN7qTE6BZSvMPEEb7qJKHMVprrxv8VCU9QJ7a4pu1J",
  "key34": "3zLRa3qfGNus42Hx8YPTeEEPHbuwvFGkXZ2ymXH9K1gCZryMMesXeT8bLeQxi4Zjrnqioda1GE2LcgmdK5DY5zdu",
  "key35": "3wicaQ4mvzhnjgU6VcG9v6NN5WV4K1G9VZukkDN3vtJDjuQESvbSvX1PSSgEJXD2oATp6ricJasKx8fwWvoWY7kv",
  "key36": "5gdSyMRVhQm2WiLSfDZvS65rhsfG62FTREFQbsiXzk19qzrpdzn4FuYdz1dTV8WvMjtERmNsBsyssqE1nFkY1WoP",
  "key37": "YwGjM2AqantTUCFE2evxC6HsaiFDr8J6z43xBUbiAHZ2iCkaRPHhZwJRYmGAuQ5LTtCL7ULJsF8qyRLMJ3M7ym8",
  "key38": "4atubktheNxVXQ6D71d3AavhZxSkP2QN5JqZX7ztZkZLNb1ff1gUfby3yuCmUWHKvwQ7HwCUUnYwB43HvfyME2oS",
  "key39": "4rkVoBeK91afCoxVaLmZVXQi8grmuKiENSUpHajcrnq2qECMicFV315WGXatgmW2dr9EtQ4dV7gYmTsjrFHhqiCC",
  "key40": "4BRrLUjStj4x3uA6FLQmEzP4KCNuNGgcqaxgmYtw9LHhUSzHWntbxiwGW2vepRA1oFTxszvJGFrpjJimKqsskfyH",
  "key41": "5SJPjpQuu7vd7hQbPF8MzmhJQWCE5xteo1PWJQgkCAmpnqmeVrWhfdqDPpXG8oi6s2DmeJzyVP7WCvKstogwVPTL",
  "key42": "2Qmf7u68wQHVnvorL4QKYdr7nsfTHT9oqTXgGesSwtxGeT2AsNwpBAWVFce3eWhN3k17jZc893KajdF66gDrd5nG",
  "key43": "4prtcGHZdZG2m1iT8ysN5kMXnRSbFZCUrme39eq7BJcrxmipKY5tuaBBFphM7JenwAr7pFZ5EWgHEvRmR1GX8HKx"
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
