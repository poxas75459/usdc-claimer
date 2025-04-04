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
    "3VfnMpgk9yqHM35sHKYKWAifTVZoFWbWWbCK6x9LC2JjRfjamPK9kwjsgtADdkvbncfpVpwfD4Mxn6n2xm7P21Z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGxf4CdvUBhjtz6rb16gJ6ZsWVkvJSsYNz155VrqC1DtxN2o7FRfBdkxAEHRz12HiqtsRg2AKt8GvU1X3WCs95P",
  "key1": "48u65FaK4piCSEw3mrdfxHv3r64KCeERv9dvbFpgmqZthygmkoQZ4C2dFt8p8jfPvAhEENAPZLyJxQn6HvWgy4yA",
  "key2": "iymrmcfa9bUnejxsC4wY8CdCbs1PVjHibGor5S7ettz6ge2i7rJWaPvgccbijvxgQL6aDT27PcbjCu8YfwKnsAm",
  "key3": "5RvtCTbmY3zQ7G7mD1YibxFRijJAax2FoSVqs5WU6ZcLfgBBVvCEqhGeHzjoxaHY3r3EWKaaGRUi43yQXkK591Ju",
  "key4": "2uHAzFmGHrJWMPKxsQeHweMgHefhj2d12t4mMAQA6y3bVfijt5x23xy3SNPaRs63XJ4YuNLHXUPohPjNgizP9DFJ",
  "key5": "4FCqXzTPeANumiEhEAzKT5kLaXpuZEQr6K2CCphRJFGihi7r7W6aEwc3h9AMy35sa2D6GToovGiwqWpZ5pzCzPEi",
  "key6": "3rdKwVdf9iei4ASRpih71NeGjamYAefyrjekKankNB6MPxc5aFtQhjgVhGFJdDZckUswAfyiBBMmowNLoBdwfPp6",
  "key7": "4Bi71QN4NK7HjUVTUvAXTejJt4V1CRkPyNXs4XwayoKiTUYuGYf8w6pwWxApTVsLJ3AQpR25FQwgS5AHFR5B9CVF",
  "key8": "2vCZGaZbBcBVe8WTdiii1ff6Uu1qTGWNqxYjJCtUm1WRUP3VJTdiwiCbtcEenN3DjGoTrrUbFBVzKuaavixnBkXu",
  "key9": "wAsA8x212o7jdMpBTtrGGJNz427TFrbvdTX3p5crMbU5gvQepLVgNb9Dz4iDboXnstZiJ8vRizoLR2jVBdNqr4G",
  "key10": "5Js9ZqBGWBEm67SnYLvA4XK2Da3AbkqcaM8QzB1JYx3HPxPMsJFVWaYvLM75FpG8dr24DsKUCMJqFWKQF4B4kRRi",
  "key11": "CWLc314L5rJDt3hi9b4RFmLWTSeWQaXXQxMDNF7Xj73bMkZQXgUiBBEEeoJdjUij3hZXGVsjYBaWA4ZFTLXbvie",
  "key12": "3QA1rgcF6PCFgr17ERSAoJJFiBMBGVAPZcU8zk1uaaiACDgGRov55xTGYjp48xp99a78JpKwmJG4veVvCS7VYDJA",
  "key13": "5Z93qNJWFYH1fcMU1fY72rsBhVptRnqtJWKPrRZtYTByjWHRKxVpdc3WfvS3Ttg8FJfz9rcNh3ShVAY1Y55D2qzT",
  "key14": "33n4QRiEuJc38eG2TykjP5FffbfWUxt6ezPuYqtDj9ETZvyYoyLdouoL2Atk1PB4MAV8xLTsoFY7MfatwFSWMEEL",
  "key15": "2GbgrxBg3TAEydkVMJ7oya6XVnWBUXhBAPY1XW4cPJoWpyyqiYASvVrxyjMHVmTUZJULBQwaUuj2Yr2hajWvjXZ9",
  "key16": "5AyZ7FVz3NYk5Z7dqzYU1tfwv8K3a6VwBh4H8pDkpjgan2BxQ1NWkkcQEvz2odQTBQWea12texkD4ZjpWQxaDz3p",
  "key17": "5LKWFhxvfJEym2HsJqcbWzsAy3m3X54T7yHWeWPRh7JByvLbTtAYFPKLpE75CdDNisPk6Dw56SU6DicCmqQ4XSsU",
  "key18": "3gvKu57NfQ8RJUhv1cwGtumjocrwJ23TjDLZVWFUD3j6Lt9NwPRgEbSKeFnHmXjBdggRi42EcRYBMKMGtUpvvCEK",
  "key19": "WpDuaXNhNfdwXEdbg4bKhL3ijLA9AaoHNCSJvVzA6eGig1QvpdSfWv6aVSktuMtURqoRGXYAQmiav7dqzZcKBCV",
  "key20": "4DbPcQfyisWq7Gd6iWRdCHpMMnVkvfyHPtMcpWKG38KWXjpMGeNu5A4BEJKrUbPYrx1bDW26LWK8uQjueJjW4vz",
  "key21": "4LmVbEHFaX2ct3kWBfjNN7wQKYnZjdwUhfU8qdkmRguQ339zr5Cqk6U5W4tkYEM7pv1psfnJRjs5zT2gxU7X65Lb",
  "key22": "2R7ozHY3LgDayZnM1ZQzC17a9Rw6K6GuUCGdy6Q5z4KzsWYbykm1oH5GtEVrGwCKGraJ6oeuHvsuHmCXJEtAJFDX",
  "key23": "4yEeHMdj9FQV5ZEyiZTimELNmTWDLqtGvKGRuSyGu2xCjD132C44uyMDcVw8DLcSbpHjQLYguiuRV7xLkKJcLHTZ",
  "key24": "2o3cbA4wNT1yDTkChm7AxKvhyv8XRDiLPEpKXr3k68JxPQTkukF5VgyrMPrpGiH2j9mEhjVbRqqrFmbdVcRgX63P",
  "key25": "4qdK8QDkH7TGsD3eghbLDR8nxm1uqbhLuBm2jf56rRRzMbhf1qL8SAMKue9J2jSQ8LrbVP1aM7kAdsQ3nRbGrkJf",
  "key26": "4oo66eD2Pf4peZ42pJeVFjpLQYfqKUr3PF8hg3AjWin61ND4FjbCMMUS7ZhHH4J7TCeZwSbWStyka1qCqNGgr5XE",
  "key27": "2LZTueWjMKyJ9aoJyg5yP5b7Rget9XNYqt9M48aexcs4JjJxfeeaezYwd8fjgAhumjJtdL7zUtyLfB6j8w7VdADf",
  "key28": "i216r3EHXphKr8QCdHEihA53YoNvaLWKRCm8UjYHennSGwRSg3FAwJsCotWGeY7K8uoN1nwbh7Tn8AykryujXQM",
  "key29": "221LAsANzJEfEsi2XkY7cf9db16pHZzUHBRwEHdPefSCoMGpP67G68gA7JzZ5YhWjECX2rpN5zVVDCqJ4D5PERxv",
  "key30": "2jPkNDYcAePMSeZ4EhVvMxnitB4rNcGHEZAerd7NUEHEzr6UN2sgZ9MSiUq9iyqdKtbMRVTdFR8u5GZQbP4tj2JS",
  "key31": "pXaDrJPAvD8dMT3BjmhVuZArMfNr3PrZaExH6MNr34vJbZckRm4GTYfqwmQNRumNq566NyyaP3aHVuoR432dySm",
  "key32": "4gAMDLDXAk4p5HLoJhTz5GsBMh95Emwt5zCGrPLiqvq66tZXcDPt2gqt3BNHMdZNcg2mZ8sXuZujU41pWy3XNmNo",
  "key33": "5T6Gu1NcVgdbqdwi1yXwCQHXS16icYZAxJzJjdK8kTnwUDjKPqu3WwneJBc24E5BnjbhtY46F5CAj5pMjDQRbaMY",
  "key34": "5Zye12qDLZpPvDp3XrWW7f6SWBiudxaNbPWVWQRHRY8tFwQcRMw43EJP84F1WGstuoWEPMhdAQZ6PvgbUc9iY68s"
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
