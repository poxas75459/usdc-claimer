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
    "446Nk7Y4SJeV6G8ZAtmZCjF9TDWeSppzVfBw3RKt7riTPJwLySqRBzAinQtyP8Eyo2LxJhp7xezNMTbY34bzU98e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvuBf5kUiadS78Pmg1aqAUZkJr91JVMQRw1xeXBqKHbRXfgYFXdWS46Jsn75S9YbMnDjnSCpPRxB5qrANu4ZpR4",
  "key1": "4aE2sNCeVRLueANZANUprsGUyCmEHu4GDd6ZF5Sh9ycy12nUX3UJ3HJDcjZ6Z1L3KrUmjpB1CaDoKCurjyLLqXAb",
  "key2": "53cVM68hzu75J6goAFc3qrJvU5azVN9ERJoUVfdaWq3C3ves8HkcV3gEoHR98GEC7qeMV5ipMRkM4ytSeYQ1RNy7",
  "key3": "3iFviE4otacSrsijzCurx82GGD8E5ynKjfs2qYfpZ8FBawytoKqbh9BGv7N2qautwrTkevU75y1DB6PRvMMyTJHv",
  "key4": "VjANX2Tsi83CC1Nbb8hT6M1tdDZF4rR3mSPaCa3u9oPAWg662AjoYuJDUhsYDrUxeg4hh6Nb7QEu1Eh5Doa3sfS",
  "key5": "3xb259NTDpoYuXCXtMwzGL3KLKZZ4zAmDNGfjtjXuA7PLPFfiC752657qDXoJRELY1M45WSuhWcPQYAZ4ybppQa8",
  "key6": "3k4R5T11ZLcvKFEetbT1MZfQV5yTgQ4sq7SwJ96zbRmnQrfTnCP7wAVZ3XQJQ4KnaxLkGMfWZjQHmLRvTrHhj62N",
  "key7": "6kFMw3ZUeg4fV4PfSKBUU8YMttTNvCotMNMoTgmMntEwcd9eRu4oQF26h4vpNroAuyEguFSemopTsc51wGJhgyL",
  "key8": "3b5US3U4nCRTbjcmbzi5nKtdSuCBeYZGX865QEEiJPPa7poTVfMvjpMbm5ChrMW2R27DVZqHVeokGhMeyM5SM5L8",
  "key9": "2mNe7YexWL56d43zSAYTiExTsCdrmr6iqqDfJN3YTmpLRZ4nDDmCDSuHJvuAJqt5Q5kpM6st4Zyf69qcTAAhNTz8",
  "key10": "Pva7Di2PFxJkybTQRX5jjuQhtAytVK6q6y48jQFxzrr3b2F1xGzvfTZWdbpWVT7AZY6rX1pNFjzprXYEzf4hW98",
  "key11": "2iDUDiX5CjdWvLqB2Khq2yBctDT5k5sUHXtUjc2VLQRXDY4pmzwEwfdLVV76Ga51EMmihckBgXg9t3rexLi5WrqN",
  "key12": "53qiuGDzZPVPH94h4WqGwJFQGBq2z1LRGxb2y8ZDQGZXay8ifEvX39LcDDje39Gwx9SV4V4o849cxnLPaENFizxb",
  "key13": "3gijWSjEDhA7TFRgQwtof8szUwHqjxNTxQjiS9d5h5oFCnV9jqwnJhSJCtL2Ctp4aUW4Ghw9w3fWh4XTn3dqLqU3",
  "key14": "4qYVuioJYrKHbAEwsyQt3roHAzzN9fXsZYkvPsoT7NPZ5oq4uTaUrJuvjFwPv1iifY4np2vakKcQob887b2Zua8m",
  "key15": "3zFP1HgNqtFYbNqbtykFVvxG1bAk45XkNevhtesKUMHXLE1RFXoyncK1a6EuaiLfmpeY15trGnNEqUNj9Bz4b2CR",
  "key16": "23XuwKusuaxi1tWa5L5j2zXfyjpv7vvWpai6qousBHZAi25bg3CFbpGwQ4ckehySXUtNJUm4gupMTT7kaKGgTd2D",
  "key17": "2KEaXcZXwLHTU6jeFXio634W9KhHniz2eEyvvAuudApVx8dMnSmUxcrBwpKKuuy49QjKUacyHhMELC3kZSQbKDqx",
  "key18": "3RfpTq4VYBHrxBdpYjdY6vUjRH7rfDw5TuCbkmyYFgfYVUSz8duFZtkQ7xrjuZVUijdyG4HL6yZxYGepUeMenCKh",
  "key19": "2LPQwbXvxnUUdMe31qqXRn8uaQhDkWGQCWUbXBHmm5PsNkuLdMvCeYudW9b5yFNiWcximCVUCGTZtE8szDVfKzX8",
  "key20": "3KcLEdDaynanRzWVWxUeVNCDpcWPA7qPBrqgPRc6RNZZ3N3UoUoWEGnbRH9RdD8HJMVpskoUxrQa8mrTHQWLDVxc",
  "key21": "2ZJqRDG3rR12npnjG4u7rjFdGwcbg4tkfdgQdEjXerMYVHbN7gvL6EnBQotvvKaiVF2LZxHPx9rKYCeyokwrkmva",
  "key22": "4Jsn6UzNzUfV4qo8H19gFwS3nCJbuA4KZwt95pAcAAGkLsuwwM89xm8vYeDs6DmLKEow3vHJQxAbJtjVaqSwvKAD",
  "key23": "4NuxbMZszxNhVQCV5mLvs2QbWRj4Xd5h9M6CGBEeKFEzYE5xMtTPeYFqoPngDry7CXk9MvLDvodp1ayoo1cVkGWc",
  "key24": "4bBkkFwggE28haENygrigGanxE9uyTivsgNha56o31k3FQn2sCqZMvQXwRoHUWRNeRCh2oNv7S9GX4g34YeBWt3g",
  "key25": "ww4iq4y6GeoPHjemUk3gPTRkSmxnBdARwRFtEhxMaAZDALGaWkoZP8gkVrwTd64Rw3E29gzBVcZjYXDg6Hbw4zx",
  "key26": "5Veuv8jPrUeVi5ZgZsRt3BJS7SsofxWeG2gAxUBdt7LGeTxsbmDJjW8TpUUwdX4VBdYjKHorkuiLPLcC3JPPgVZE",
  "key27": "C7ABKtEcahGxCDyWyyX1V7Hev2ab5q4DCGzQFZxSU3NSxtwgkBQYurznSqveCCqEDToRveS9UjXob2b2pu3mqof",
  "key28": "21MviDggjG561DvzA5qXTMA3oLBvyCtxmHU58eU2wTrNnhZfCSC23C4dzzRpgRwqwJUPX3FpWTF2ZFp1XTRZg56K",
  "key29": "fLkuHvurn3jgeL54pBmpNBfzJf6uqs9Xdv7cYJHzUzQHmt5mU4FforKv7LpJwzktQHWZriYEiFtQahSRvofgKyE",
  "key30": "4fkV1aL1BaJaEno1icmNSormSAdtrD17VVvv6aJLMtU55JG4Mnm44oxdBbirnnu9rgUCJ8g2JkcpdnYD9uK1AYHR",
  "key31": "4xEyB15uD7xUAsHLi2C57F2CNM4FVyUpLbzj4PUuz13QW4t1f5a5mQHPwM7GhxLauCrdw4CY6D6NyyqTvazCKEgJ",
  "key32": "Uzr7egQMJykgrVJUQGLLFjRhEDEncYmHPDGpnojrm5AVZ59X9hF1kqodgThUjVder4UG3wSP15ZY7kzyMhkEK4p",
  "key33": "2guFuPDwAqcjr4F4ZCL7LwgXcN248gbXwMPquFPgmFyP6EEYXuUjFRV9XTAgNtaabFVJHkSGkde5ujUPscjTXrxd"
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
