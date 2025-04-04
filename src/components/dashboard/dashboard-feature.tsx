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
    "2JJKhaWRKFt77Hp2ArRYj3q9jhe4N7Bk4DUmcZfcvUcb3Uvcd2zo4SycUxroWJwqhBAtfCpnD675a8gtZDmbUtSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uy9H9wSXZtWWN6ZzAAkVfqXY3EqPgFMcMUYqrhKufRq5L6Aserg8fZXWdxmaXymjNRbmhX2bMP4BALm5kGdYa5X",
  "key1": "5sMdSvfQazUvveJoJYAQcZhQhHpr19e8PJuBid7sAx4dh8qqj69WnjSiCxf8zkN4ccodRMrjvH453Qp6gC3vEr2q",
  "key2": "2Tm3GVEwaxdY66y1B1wuHGWd9R5ivBY6wgMyJEFgsd3GKKNXmxUtTdC2kMofKQNdG9dZdCUCNhVDz5u6ivB2q2DV",
  "key3": "2VFMDm1DotHUtTCweU7UgwiQbRw722cNH9RzW2EiUCx544pSRwk3GA6Xis8UNs3DEt7WQ6rhvMCf6FbCBrKYabnX",
  "key4": "55rqMhpo85z9QPD1k6aNQzQ2zLHpArhBzRMfeUY3i8crder1u8koQ2qeiL8tbv2TkgerpsvxHodpApxM8hqvcsMx",
  "key5": "ViiMQhAuEerw2vYVoYwr6PG4aU5JeKh1c3urzNrUiQMve7nmaxg6hHizzDJg2BwJkr7GfpsWWJzRSzJVfTszNLe",
  "key6": "61qBG7ktSXRxeRgxM9KfRmC5tsBfe41P6FfoSTVuLzRTkr8cPVo7SoDsNK5ABksWweuKwCXXfG5u7UEonnuJCe75",
  "key7": "4vynTvtGoiLpEQxAvg5LvxFw3knL2Wbj7zhPJRPCL1dRcGZz3sVrmEArs7uRKLWvbjaXWxdYczmXe6TSf7WUv5PT",
  "key8": "3Agd8VULJhJhSoa28EuYL8KGmSETp1ouC1JEngq81x8XhMBBCzBi16CeoC8BTSaZnzkeN7j74aczRwnhdENnZtZA",
  "key9": "5Fvogv4xCPCEs5ftzDoLprYYXGE9Sa9G39oYu33rxE3hwAdHshtG33oaAJwgGHGR7UNxuhWX2jCXfL3qgN8RUikX",
  "key10": "Rhdm1jAeZqMJdfExyJs5iMRWeHAAE4xFBWX4DDNbNj2DDHvKmws5bz5xMxSTncrHG8BsmUQgWVc7A2xUBCdvAFY",
  "key11": "4mQZ6DwgDw26keiJVjuiUjRe2nWaetJkZAbxFytfbuDkm4nAMQR3ttdTrFvBetUta3VPJskqbeGtPykuB3xr1GGM",
  "key12": "V7qgDMxk6296omkZJaqoXYEVcweWvC4KoNFNtubs8iUhC7WK8KUKGzQSQotpe7a3T9weR8oUeReFbNnrM1Hjnio",
  "key13": "4ssLTY3rbpyAoA5v8eVG1FHudcG4ZroCkS17V5D8TX2yeTFgPeLF46dfpD7RB5cdiGrZ1N14vjUxpxRyxd7iVaxx",
  "key14": "biTWgqKGHAFThYPZGurb2cHgxR2ShBRkDhShPKfkkoXuBzNhYJ87rkcYXKki7DGXh5Ya9pwv9HnLXU5GnSpdPbr",
  "key15": "679NwJUd5LXyqM6yDWfzNozkr6xqcSMfyCLEYmxNP8jgvzc8aFgCahLvxpyRTecVW3evTp8cX5vzmirwZVtsT6Jd",
  "key16": "2j6AQBQCbtydaHqyz84HcgcH4gZN6Cqiqqm2KFLdUHiS7zcU2UD37Se4UEgLm72RoVy1Lrn3h8tfMSFtnjCvTRsD",
  "key17": "6Pj3NtFTxcvraS1XepBXjFvBqc85XUsETAoX8FmTrRZwEj5bou3bVnpmoAjrqrRmHcTwTKS1A7ssHzJwrTFxSKm",
  "key18": "3QqZDowKfbLfiT5XV4UY5Mto73doENyx8GQtfGE9EibX2eAjutkAVPwBMjgrZ35QteXPZETzJjFGkvrusykQVV7n",
  "key19": "5r9XdPVd4rKSVrQeTqXBV34Qk1mS4fW47efNP2u2zs2RywifcHsumiwnKkE4ucQgPNL9cLQwEV6su4HE9JjFMHbm",
  "key20": "U3PQejNVQSaEA4M1tHwjHQVqXWW3w1Fab3MCFYqZmEDYWgfDx3CHoxT9TDgKs8VzQyeigFFsrJspPCWNrqiLpgf",
  "key21": "57o9QtqyU3GEQquiFwXJk3n4W9UrGvGLwtwXokEX74oYkAKVpQjvhMGHaSc4KtanxWqpGMLJkV971PECtX5jT5Rv",
  "key22": "2C2fCEt6AtWoMAH4sEYQQkUH6nptHWqWzWZYWxhkEN4Ka4WmGoPw4i9YRW748kUQGrdHs5swxbXyTAU1geupUNNY",
  "key23": "3uLsXAn4BahB8TQ9z4NFmXiZat1urXcKDZZ5aqKnUkRYvDVXUtnuiF3fNgibZhoyuiZhwYD5MWrTvnNBvCdyR9en",
  "key24": "66erg7qVmEf3vVMv1NvvJT9QhMQy9uNxkR9eEcB1icnccnqrvcMCFWgj8RGVDWT398ofzyFoQ9u2TPdRz2LSqcyr",
  "key25": "5UFftntiAuBahmDfvAQVTWBDLPhp16AmDTtpAHnRXLts7FayD39WFbtWmZSEzwctt9TqAKoiFhKqFvgPK2KgxVqC",
  "key26": "3XTg2h6wnQAfKUZLgh2gNriJ4qHJ241QW4MwKz7JhNj1h6Se47hQs8JviMUPQduoJNovMUqBEoLweoxeU42uqF1v"
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
