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
    "67L2CLwYKRvUDYGtdeomETqqZWbB1g2HuMwsJDvRdDQyAXxCEFVpAmvDXGzEzEVvhEgH1SkyZaMkAwG1AE3TaTVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sV5Tvhb9zoTQWYMeGtUdVaYTbSihucsyT6NodX4d52rqtbLtqyquFCjCkey7CoynjfjS5Y5BNEumGj1ywm8Vovq",
  "key1": "23yFSCqTWHsNjYMjJvW9rmsVsh4Xr49L1qe38a6FT1gUF5bNj9sFW5fwqWSU46NtsEKGgNHUMGjxDowYbxg8fVoY",
  "key2": "5AFVtW4yqXz1TGrmJ6oUiV64RYZgziLSR7zsuG9HvvoRNMhygGe1uKpjAYZ6eKcCBPPaWj6sxkDMTrQFYG9TxCU7",
  "key3": "TBTLLLnBezmUZFmCnBy6MgHzBP8GXkPT2fRXnrCrCXDPfxduSPH7FA5JoGkGP24RcPxnApHppuHWaSepLZ8b22x",
  "key4": "HJavmDnukhXRVakte9CCcps7ZxjSgAuKtQndSeQR2EcBoUkovCkpp4oPVkQYmteHs1Y9fXBqBs3Y11iqJbCDDY1",
  "key5": "5F8UFfdGzKixTAJ5VLpVk2hmn6bZhbz7h4AfQQUsLGdJZwmMABEc6gJWApexPtz7fHfNRGipaTJTQKHUnBcViGrD",
  "key6": "3Ub7Fr5bTpwPWBtsGCoJJrprhpfzD5RZDo5o9R28CKbxEvtLn6zjnUavh3fgmtc73tzri2PguEzqD8yewKCWm6jJ",
  "key7": "5yDRuyYBMTxq4g33yxtBkFywHXntBo3dftQFC9nrMohmVuMeJGg2TNivJu5sthiHUp5sekrKFzJMuE66RRAjh9gE",
  "key8": "VVK9deUWH5PwfGSqHYK1GBNJbULLHCsZYBnvDUb3bfzWHEA6xC4HV4mz1MkGyickCWDwez9byjKWWJ1EBzxJTqj",
  "key9": "5deFxQBXoKG5g6GZxNK8RuopTXzFHGjna539gN7SEahFoGdjEG47dURRjVmFqhjt8TwcdqPL8FLg3BpasBhn95Ab",
  "key10": "3jwYF33RmVKFKS7w59H5z3iRYHmySf1NQNzgWEB9K4uaV3L3pjQAN9TVnurGxp6HhDwNsk1ZqBxxN1Bs8yHRpJxM",
  "key11": "RnGpcXxKS9dA49EbGGP5JiwYny8RiQqp17sHq9L31gaddgndeuwx6sftQF2i41hU5n7ZcE6m93CSfDmQTCvMb4E",
  "key12": "3TY1ow3r5CHwu6ZRj5xfHXXRFfAMNYxrcdPu2F9qtxYknELoZc8ZuVbm997KGo68opekwWH9ghpDSxUrpr1acM2A",
  "key13": "xshphxtW9sMJ7wuE69zDhakWQJT6T9N4RVvHPf681Dq6D4tQnkwGnVTVpitSjUuBGMQB5USzghMzcW8uq7m3hBY",
  "key14": "2LeuVeUQqrVodXm9Mi1Q57SEA9G6wWyJvo3xGHqGr7ZqwAsJjz3tMMEG1PJQpg22mKVHvz34zkKRvHARxgqk5hR6",
  "key15": "3HgUzrRhRUcVbnhLix9gFZUxLCe8MYoWo5jEcmrdZp7hMxP7JKWqBLY1NECRBUd4PKAxmGTHoLcZhkw95tPu9SFB",
  "key16": "2TT1Ewx85jD1N8zzrzXVCY7G3fdu9Va5LedhayAB3Bj9eRb7PHJyBURCgTyp9QN9fc5Hvz6QQfpRNzdoaQ2BEEG3",
  "key17": "2BHrgnJrUbJEuCDD9AKkfemAi1mcdmNCJUqBTHUXkfcTcsEZzKKSTXggjTWsYMZhW1Qq9PvdvFq2SbBZYSBu4b4S",
  "key18": "3VmVBBzCzCVY6iFw6royAvSsW9cavchtWXdLkgSMHDsaLa9ifBjsbfSkcgKAhutGZMgwJE89RaSvnYRrVdsinzxx",
  "key19": "tdJD7SGKunit5Fx9bSUPuAGs9smG9VZXfMfRU48WFJ4YCvZMGzsL5HGVfgLcBRkpMggw4Fk1JsCYUchTZ83NKTH",
  "key20": "3hpoQyo2bR2azz3zWFY8BRiuxckuMfEn6h8U7BFUo4PS8o6k7JDwSxvKiTP7QW45vVqh3L3szwpwTgAdJnxbPNHB",
  "key21": "3ZWaULmYqTa4XZCUqAWgDqHUyh129zh8CryGymX1Nx7FneLzL4Vu47mmTMwc39QnTHdmLMDv2U9oAe77obbzWYMA",
  "key22": "wKgMxvkNY1mwh4nmgmpRQLC8ADg5xYzqRne3ZhjJV5RVY3CvgupYwxV7u23Ziz2mJU8f2rojKBS2YUs66XUNgpJ",
  "key23": "JtuR167E8ZAYKB7hCq6RnxUD4edoXXVcYf1xQeaJKvw3kEwsP7HE2qCsq225LhqNQL57Ff9ou2Epvt6CFFdqtBJ",
  "key24": "4rUGFrC9sJ9gwBaEDpjn32gf1Uwb9DubKHyN2fuzLUGakoJai9TwfYYfuM8wPegXMEF9K2p97NsE5tGaYSTvWrf6",
  "key25": "3BAWJAVxiQdFUC6TVUxrvBbEzPh4ufCLXExFosJXCrmwtHWGgsJwfZ9MgsQoZdNKUTxmSQfvj5fPNnPqYSu7hWV7",
  "key26": "2XFGgpuF999CNhh73xsAbWnQxqdQhctm7Sjdsc3Kf9EjLLnwBqhyk5N5D48yeUJcWG6dzumGstgqu7uNLwRhDCn7",
  "key27": "3jPh1fu253Lc1mftbDy6haiDe1GVLfxpRb8BeZsVMVB42rG845p8mTNRNTuoPbvq8qxerW61DNH6EQkn8CaG3Lx9",
  "key28": "2AAycWRX4LehpP4Gxq6QvHqcD54nqY1HampwwsWMnMXfejme4cDyUoUcRhUHYFc3NH2PquHz1wQjghRqMtxnFBzd",
  "key29": "ys2RJqE95fTUAifHdHxLR5WXtYaxnRRoneQ7dikBw2ArP5bgfQMftQ5DWenoSVB1NLoPLNiT5wttqMHxBqkF3Zm",
  "key30": "4k3RDkgDmUP2R6QneEg3Xq6ceMAL1GgdUC1AaN3FWHec5uzJy6ALqq42Gru6EY4b6G78LZ7E9wnwTVgbWJFmmuTv",
  "key31": "3CPJFT4xePrFY9pPmW4MWzhKeCvSqfuokJUNxyHFMAmVE4KRPfBfLLdfKG6DZPTX2Svy5jXmpkrMe5AEQgNkPTJU",
  "key32": "3rTTwET4taC4SiBj6VwLYSiCXABZYHFLiSyKwQbK1oiCZwuxqDUeYLWnZEi7bJ8MYmxjQRV9Z9eKN393bsJnN9LX",
  "key33": "4dmzT31R866RNzxFhsuh6T8UNikfFkDd737CvWZ5VMfpn8Ca9vFZWwc51DuSrixKXJVZg28TWZfvxtwFwq5uJKei",
  "key34": "5p6Vz9JDdWvfsrVeuyhWBptiN98zv1uanbr4e6jbEhDPSFKZ67FjJcGVirmu8XdBEbSYWg9VrSbEgNEQVPXfdTAU",
  "key35": "44xES8CRbcL5hgWm6W5JA7WhcMzkrMkZhA5a3E6KnjpudwDqwiFRLtvMBSLwTZdUseoiJhXw63zQ3sAVX4QuzQY6",
  "key36": "2Nh9Az4oZrNTi2cWsnTnf1iWsnM4JGJ13jsujF1cvF5DNej4HTnVwepfwHkuafuLUBjcDwtGCjSVAGZyBCK2qE7B"
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
