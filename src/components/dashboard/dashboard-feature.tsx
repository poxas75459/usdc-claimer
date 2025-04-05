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
    "2ve9XvQxcJCkEw29BUKQUSruxHbqxyU2nkbNNLgMXvSBikN2BBZu3eBNVfoJV6D7rrLHtBUG7nwM38rCpXcQAqd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AdwkGJ2Wuzoe9VxGguEPxa6nS7345vZ5w884zNMWmhbzUtqzoJs3cFUnANoRtbCKJQrVyEMiVwzn9tWNStJZkRH",
  "key1": "2J7gh5fDQvg5DzGpA11M5QZcKsULUq4WNNPqLsZmsbDabvDE4n3xfi1CAQqH1YBvaLA6kHNTp4qzGsjJjoxEzJqS",
  "key2": "45YhnSojjh9fLgWFM9XbJuvvzLfV14a5o4fasAh5ANBWtM5XaHDtjFLXty1Cw1rh67qj3XgdZVz9HyNgq3SNiJmZ",
  "key3": "5KpK2cWPRTwA2TQmcPA12rCeq7Qzrym6H5TLGur3As7pkA6ZmWM2HtLTVzF9KFzkpVo9AAiNGJVhVsXFP5zSiWqZ",
  "key4": "513ieRo4vUY596MpoedGwEpibtH11vfqX56dn4gcCuSt9skHZT5hXCaLF8aT9PuEKRqbNeBtfruUAwDP4ejD5bLM",
  "key5": "3Yzr35b2jM2Sa3tNCmvZ9DLdzugnxRFXtnT7Nv6FuWUjtsKYA6hbcJukR2Lp82UP833zmT3GTKMqi5qMNAKyPrp9",
  "key6": "Z59en7mp37ALWqns6brGnmdSkDCDHqNKhNHeRFPop5WRdkqdq8cLNxtcVZCUBiYdpbkbfMvYCpWFq2HERbFYvsy",
  "key7": "4aoDPnphHw78gfHWE1N3v2LnqVPxnAkcrTeTMCPvYATYVCXUCU9HNazrKLHNQupJraKzUb4EZkcPB3FvESwZZoyL",
  "key8": "4gxLD9xtHKiZQkAuVE833opajUMNHWEjXLDZxcpQAC7y74Zgbwcn1XEmiXD1kPvGnGo2Bs2s1L7mkqeFoNX9SYxg",
  "key9": "3bUXhsXaCEidpXLrdFuwzGXjJDCZ9A6Xch4yb356fdWoADUo884tpE4aGMtwR1ejUc3j5UnnNSbGs8xLK5uhxEoR",
  "key10": "4HfwBS5tLyrsmwxuLRxfw6keH32Qu7KqFC9UQnm61BwgRGvqWDeS6PQxQJyV9SZtxuKaLGntBsjDZp9urN6Qtf4c",
  "key11": "3bPB47dPFtbpkGVMiQGEX82atYS1iADKH5xyTMtM5pzG8oCKvmkrjNUig5WSEKEs2wFm6GUio8oZc3SLQNMYwnXk",
  "key12": "4rfX7UAKVdK2ZmV8fTx6MVGPFZ1gmhYRQL3mvvcvH5qz2RpRnmTg8no24gC69YAh2uKTEwModysjdXxek7wYxuFT",
  "key13": "3JYTrhqx7eKitdxo1UFw8MbNTCcmGu1XuRPgTwyyFabsefwC4B1wBE9tg8bbpPMwczyaFWNUdTTvKfqZCH3G7xAd",
  "key14": "3tC65ttcrfwT8YK361Pzbods5ftEDsRhvvxSmXcP8cwX4FFxXPQ7FzTPLvEZwLaahmzpFu3BF3MAuSenqoxiy3vH",
  "key15": "47TM7vT4dNz5sgcetrTW3EeyJVdoVrn8bSXhmFk3WTe2k6WkUKSrmbBde9WodwCs9DPxzLjDCjSEnt8kttvAZbcS",
  "key16": "5Xr8RwYwE1Uue8ustYVRBFfC6FXxhtcU9QPiLdvQh1bLWriG2HmtcbTw7qtnxmY1rBkxooRYtubZhNDUfp5Uaojc",
  "key17": "3oxtEGZ2LKLciLcm4f8PAsPoyMspA8bEyp3t9LjXTY72WNfdcakK19eW12uV56EY4kJqTxQ5NSrFQcqdVMvVMDP8",
  "key18": "3hEF2A9xxT5UGkGNLFiPhoJ9qXdBQQgEk9zYs483sGR8HprbWczBvWC8EVzP6uRVe4bP47HE36SPHgmHPceQbqQd",
  "key19": "5BFCUp6jZ3ejcC4LJnDQsCeDQRFXUBAchaAQi7Pg4qV11TdsF3RP4Uq4WsziRDXDa1W8eApcRDjB4PJpstQMFoqE",
  "key20": "5vGAt2zAHhdvQNCE55p4rBMNjdF5iMaHBXL9G2YVBzc4aU4596pJcxrkZExxWiX7mSiNSxcGSEUotZoR2iRkGYWM",
  "key21": "3puSxsSgBfWAgMbLFBGiw9zWYiRzGHi6FsTgyeyTQxeuwVx6XJRdhRMy6NiH17RSuaCmvKGxWQVuXeZArGNxFsPL",
  "key22": "5r8EaY3MHU3LCcj2rhFrMxYrYbAH2pgFLVnAvCfUBFMjEFHM96Ahiny2SWc57CNcfQFMRJYS2VT9JRfzYAhrY63M",
  "key23": "2vGqNYUCkf4NAVVztptUrB84QU9CaWn6j8rCgoZb75fVFp52xavb9vMJjs2WnUrEWcQNAixhVTTvdqhJD5BUTLSG",
  "key24": "67GWe3acMefhXk35h3SHthodcEDmnyNhZ5iud7vGptBShXTrUVAx1A91puGefirDadTKCZNK8BxoYRPpYw2Mw2a",
  "key25": "4YZgW85WnnH3dFFrnSkWBvnsE7rcniEDfMqe9tr8ZQPVYMTYuFs6ZDVuM2APg6abQS4r5KEXRgVidL69WC4s6eFk",
  "key26": "YESonwDHaCPi8nBA7pKKFWhx2m7nChfE65yJoXBfdSo5pBv56B3cn4gofJVR1oFWxGMR9EpHnSABcWUfd5ZQsuE",
  "key27": "61mUV2Z3AtWXhvPRpYf7J1D58BHvqmWtH7knBtvR1yZzdL2mD7EQrXYsBfJaMT6SssjTGRNLvUv9nZNdTrjRH8V1",
  "key28": "3ELmF9Y3pm7yNbqGWyCaJgMZEgrbWTHFc75dDmVq5eDsUGqaAq9SBYD1PTjUpzWZCUhFLKawmBZeyUxkueGTDLxS",
  "key29": "3rCXKrsVpDzTvoQbmpkdW8wgDwxCKt22MwgamddJd1JXfQ65jFhdcNMc54f3A3nMWpGnnt8xQxrXTiUAUQokAia9",
  "key30": "4RdEv1g1FYoyf5tqHFgbtpy2ih6CAiHzyFYfGZgjRy36FDp9szYCfo4xXJTWQaTA4yzbavWg2XtmgdL4HyvwE7Jo",
  "key31": "4FmSH7YWYjVGrz9cCF4GDEtHbZzBkPW5tEukC4pZJ5T8nKqLeCMUHuXgkaZnSg9LenqfMgCcaBTyBk1kwTCJsPix",
  "key32": "25YiTZoQLNi17xzCR26Ubfr51CVxtq9D5w2q6Mquc5MAUXMGaYYED5e2UufqTSguzT78DDaSk21kAtvQjAoD7coX"
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
